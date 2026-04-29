---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-preparation-feature-engineering-and-augmentation-for-ai-models
url: "https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models"
duration_minutes: 108
duration: 1h 48m
level: Intermediate
updated: 6/10/2025
learners: 5137
skills:
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Data Preparation
  - Feature Engineering
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHSeY5vmM68DQ/learning-public-crop_675_1200/B4EZdCM241HQAY-/0/1749162356536?e=2147483647&amp;v=beta&amp;t=ZeZABO-KmRmQIPRK3c4zGd9HeDONRplBCmEmsdsk7CY"
linkedin_topic: Data Science
learning_paths:
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Working with Data- Collecting, Processing, and Storing Data for AI]]'
prev_courses:
  - '[[MLOps Tools- MLflow and Hugging Face]]'
  - '[[Strategic Data Collection, Modeling, and Quality Management for AI Systems]]'
next_courses:
  - '[[MLOps and Data Pipeline Orchestration for AI Systems]]'
  - '[[Secure Data Management for AI Implementation]]'
path_nav: '[{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":5,"total":10,"prev":"MLOps Tools- MLflow and Hugging Face","next":"MLOps and Data Pipeline Orchestration for AI Systems"},{"path":"Working with Data- Collecting, Processing, and Storing Data for AI","position":3,"total":6,"prev":"Strategic Data Collection, Modeling, and Quality Management for AI Systems","next":"Secure Data Management for AI Implementation"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/cloud-computing
  - topic/database-management
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/data-preparation
  - skill/feature-engineering
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Preparation%2C%20Feature%20Engineering%2C%20and%20Augmentation%20for%20AI%20Models.md)

![Data Preparation, Feature Engineering, and Augmentation for AI Models](https://media.licdn.com/dms/image/v2/D4E0DAQHSeY5vmM68DQ/learning-public-crop_675_1200/B4EZdCM241HQAY-/0/1749162356536?e=2147483647&amp;v=beta&amp;t=ZeZABO-KmRmQIPRK3c4zGd9HeDONRplBCmEmsdsk7CY)

# Data Preparation, Feature Engineering, and Augmentation for AI Models

> In this advanced course, Dan Sullivan—a cloud architect, author, and Google Cloud expert—delves into data engineering techniques for building AI systems. Learn about data preparation, including, data quality assessment, generating vector representations, encodings and other processes needed to support production AI applications. Explore ways to use ontologies, taxonomies, knowledge graphs and othe

> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models) | 1h 48m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Welcome to this course
  - What you should know
- [**1. Data Preparation for Predictive AI**](#1-data-preparation-for-predictive-ai) (9 videos)
  - Data exploration and initial quality assessment
  - Detecting and managing missing data
  - Detecting and managing outliers
  - Challenge: Assess data quality of a dataset
  - Solution: Assess data quality of a dataset
  - Feature engineering: Scaling and normalizing data
  - Feature engineering: Categorical encodings
  - Challenge: Apply feature engineering to a dataset
  - Solution: Apply feature engineering to a dataset
- [**2. Data Preparation for Generative AI**](#2-data-preparation-for-generative-ai) (6 videos)
  - Structured vs. unstructured data
  - Vector representations of unstructured data
  - Tools for generating vector representations
  - Similarity between vector representations
  - Challenge: Choosing vector generation tool
  - Solution: Choosing vector generation tool
- [**3. Data Quality Assessment**](#3-data-quality-assessment) (4 videos)
  - Elements of data quality: Consistency, accuracy, and completeness
  - Statistical techniques for data quality assessment
  - Challenge: Data quality
  - Solution: Data quality
- [**4. Data Augmentation for Generative AI**](#4-data-augmentation-for-generative-ai) (6 videos)
  - Overview of data augmentation
  - Text perturbation and style transfer
  - Retrieval-augmented generation (RAG)
  - Introduction to LangChain for RAG
  - Challenge: Understanding components of RAG
  - Solution: Understanding components of RAG
- [**5. Knowledge Augmentation for Generative AI**](#5-knowledge-augmentation-for-generative-ai) (5 videos)
  - Overview of knowledge augmentation
  - Fine-tuning and knowledge distillation tools and techniques
  - Ontologies, taxonomies, and knowledge graph tools and techniques
  - Challenge: Knowledge augmentation
  - Solution: Knowledge augmentation
- [**6. Development Practices for AI Applications**](#6-development-practices-for-ai-applications) (6 videos)
  - Determining what data sources to use
  - Applying data quality checks
  - Building models
  - Model assessment
  - Challenge: Development practices
  - Solution: Development practices
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Welcome to this course
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980&t=0)** - [Dan] As the demand for AI systems increases, so does the demand for professionals who can work with data sources, engineer features, and augment knowledge sources for training AI.
>
> **[0:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980&t=10)** Join me as I teach you how to build the data foundations for AI applications.
>
> **[0:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980&t=14)** I do this by showing you how to collect, analyze, engineer, and augment data that is used to train and supplement AI systems.
>
> **[0:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980&t=22)** My name is Dan Sullivan, and I'm a data architect and AI practitioner with decades of experience designing, implementing, and maintaining complex data-driven enterprise applications.
>
> **[0:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980&t=31)** Let's get started with developing skills needed to create the data foundations for building AI applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [dan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=0)** - [Instructor] For the purpose of this course, I make some assumptions about what I think you have been exposed to.
>
> **[0:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=4)** For example, I assume that you're familiar with planning AI initiatives.
>
> **[0:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=8)** Now, if this is a new area for you, I suggest you review the Data Planning, Strategy, and Compliance for AI Initiatives course.
>
> **[0:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=15)** Also, I assume you have some exposure to basic statistical concepts, things like mean and median.
>
> **[0:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=20)** And I also assume that you have some experience working with various types of data in different organizations and enterprises.
>
> **[0:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=27)** So if you've worked with spreadsheets or databases, then you have plenty of experience with regards to working with data.
>
> **[0:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=33)** And then also, I assume you are familiar with using generative AI tools.
>
> **[0:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=37)** So if you've worked with say, Open AI's Chat GPT or Google's Gemini, then you have sufficient experience with generative AI tools for this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** gpt (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Data Preparation for Predictive AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Data exploration and initial quality assessment
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=0)** - [Instructor] Data exploration is a critical first step before any modeling or analysis should happen.
>
> **[0:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=6)** And the reason we do this is because data exploration helps us reveal hidden patterns, relationships, and potentially anomalies in our datasets.
>
> **[0:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=15)** Now we use data exploration to identify data quality issues that could undermine our AI model's performance.
>
> **[0:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=21)** But it's also useful because data exploration can inform both feature engineering and feature selection decisions.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=29)** And then the overall benefit of data exploration is that it really helps us reduce project risks.
>
> **[0:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=36)** And it does this by exposing problems early in the development cycle.
>
> **[0:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=40)** Now some common data quality issues to watch out for are missing data.
>
> **[0:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=44)** Now we see this in the forms of incomplete records, for example, records that have empty fields or null values.
>
> **[0:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=50)** We can also have issues with inconsistent formats.
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=53)** So for example, we might have dates in different formats.
>
> **[0:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=56)** So some dates might be in year month day format while others are in day month year format.
>
> **[1:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=62)** We want to make sure that we have consistent formatting.
>
> **[1:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=65)** Also, we want to watch out for units of measure to make sure that we are using a consistent unit of measure on our various metrics.
>
> **[1:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=73)** Now duplicate records can be a subtle problem because they can really skew the analysis if we have duplicate records, and they can be sometimes difficult to find.
>
> **[1:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=83)** Outliers are another data quality issue we have to be careful with.
>
> **[1:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=87)** Now outliers are extreme values.
>
> **[1:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=89)** Now these extreme values could be, for example, due to a measurement error, or they could be a legitimate rare event.
>
> **[1:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=95)** So it's important to understand which of those two types of outliers we're dealing with.
>
> **[1:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=99)** And then finally, we sometimes have encoding problems.
>
> **[1:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=101)** And these are fairly low level issues, for example, with regards to the character sets that we're using.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=107)** So we might have problems with character set issues or special characters or encoding matches.
>
> **[1:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=112)** And again, we just want to watch out for those.
>
> **[1:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=114)** Now there are several key components of data exploration.
>
> **[1:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=118)** The first is descriptive statistics.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=121)** Now we're going to use descriptive statistics to provide us with key metrics like mean, median, range, and quantiles.
>
> **[2:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=128)** We also want to make sure we do distribution analysis.
>
> **[2:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=131)** That helps us understand the data shape as well as the spread of the data and the central tendencies in our data.
>
> **[2:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=138)** Missing value assessment is important because that can help us quantify and identify any patterns related to incomplete data.
>
> **[2:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=145)** Now outlier detection identifies the extreme values that may require special handling, and that special handling could include, for example, eliminating records that we determine include measurement errors, or adjusting values for legitimate outlier values.
>
> **[2:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=162)** And then correlation mapping is another key component of data exploration.
>
> **[2:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=166)** And here, what we're trying to do is discover relationships between variables.
>
> **[2:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=170)** So for example, variables that highly correlate with each other may provide duplicate information.
>
> **[2:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=175)** And we could eliminate one of those variables in our feature selection process.
>
> **[2:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=179)** Now, we want to use several techniques when we're doing data exploration.
>
> **[3:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=184)** Visual exploration is really useful because it uses things like histograms, scatter plots, box plots, and correlation matrices to help us quickly identify key characteristics of the distribution of our data.
>
> **[3:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=197)** We also want to use automated profiling tools like Pandas Profiling or Great Expectations, which are widely used in Python.
>
> **[3:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=203)** Now sampling techniques can help us be more efficient and do our exploration faster when we're working with very large datasets.
>
> **[3:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=210)** Also, data type verification can help us.
>
> **[3:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=213)** This is especially important if there's a risk of misinterpreting, say, numeric data for categorical data.
>
> **[3:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=219)** And then finally, we want to use tools like analysis notebooks like Jupyter Notebooks.
>
> **[3:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=224)** They really help us do iterative investigations, and they're also useful for documenting our processes and documenting our findings.
>
> **[3:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=232)** Now a common workflow that we find with data quality assessment and data exploration is that we begin with automated profiling to get quick insights across all the variables.
>
> **[4:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=242)** And we follow that up with investigations into potential issues that we identify thanks to the automated profiling.
>
> **[4:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=251)** And as we're investigating, we want to make sure we're documenting our findings, and we want to include data quality metrics because that's really useful when we are communicating with our stakeholders.
>
> **[4:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=262)** And speaking of communicating with stakeholders, one of the key ways to do that is with data quality reports.
>
> **[4:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=268)** So we want to make sure that we are creating reproducible data quality reports that we can share and also use over time for monitoring the trends in data quality over time.
>
> **[4:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=279)** And then finally, we want to make sure we develop data quality remediation plans, and we want to make sure we're developing those and implementing those before we proceed with building models.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), find (2), python (1)
> **Analogies:** for example (6)
> **Code Keywords:** finally, (3), require (1), include, (1)
> **Warnings:** watch out (3), be careful (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Detecting and managing missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=0)** - [Instructor] Now when we're interested in detecting and managing missing data, we want to start with a dataset overview analysis.
>
> **[0:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=6)** Now, in this process, we're going to do things like calculating key metadata about our data.
>
> **[0:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=11)** These include metrics like record count, column count and the time range that our dataset covers.
>
> **[0:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=17)** We also want to identify data types across the different columns, that will inform the kinds of statistical analysis that we will do.
>
> **[0:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=25)** We also want to determine the overall data completeness and come up with some quality metrics.
>
> **[0:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=30)** And when we do this, basically what we're doing is we're establishing a baseline for understanding the dataset.
>
> **[0:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=36)** And in particular, we want to understand the scope or the range of information that's covered and the limitations with regards to missing data.
>
> **[0:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=43)** Now, when we're doing missing data analysis, we want to start by quantifying missing values across each column.
>
> **[0:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=50)** And for that, we want to get counts and percentages.
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=53)** We also want to identify records with multiple missing fields.
>
> **[0:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=57)** Those are candidates for possible exclusion because it indicates there's some potentially significant problem with those records.
>
> **[1:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=65)** We also want to analyze patterns of missingness.
>
> **[1:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=68)** This will help us detect potential problems, either with the source system or with the way we're processing data.
>
> **[1:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=74)** We also want to provide visual representations of data completeness across the dataset to help us identify issues.
>
> **[1:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=82)** And we want to be sure that we flag critical columns that have excessive missing data because we may need to do additional work with those columns.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=90)** Now, depending on the data type that we're working with, we may have different operations that we perform.
>
> **[1:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=96)** So for example, with numeric columns, we want to calculate core statistics, like the mean, which is the average, the median, which is the sort of the halfway mark in the values if you order the values from smallest to largest, the median is the halfway mark.
>
> **[1:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=112)** Median and mean are used in different cases, mean we use when we're working with normally distributed or bell-shaped curve data, median we work with when we are working with non-normally distributed data.
>
> **[2:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=124)** Also, when we're working with normally distributed data, we often want to calculate things like the standard deviation.
>
> **[2:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=129)** And in any case, we always want to think about the range, which includes the min and maximum values as well.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=135)** Now, we also want to identify outliers, and we can often use multiple detection methods.
>
> **[2:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=141)** These include things like C-score and interquartile range.
>
> **[2:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=145)** We also want to understand or analyze distribution characteristics.
>
> **[2:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=149)** These include things like skewness and the coefficient of variation.
>
> **[2:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=153)** We'll also compute quantiles, that'll help us understand the data spread and the concentration of different data points.
>
> **[2:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=160)** And this is all useful because it helps us provide a statistical foundation for data normalization decisions.
>
> **[2:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=167)** Now, when we're working with categorical data, we're going to work with different kinds of statistics.
>
> **[2:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=172)** First of all, we want to determine the frequency distributions for all of our categorical variables.
>
> **[2:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=178)** And we want to identify the most common values and their prevalence in our datasets.
>
> **[3:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=183)** Now, we want some simple statistics here.
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=185)** We want to calculate things like the unique value counts, 'cause that'll help us understand cardinality.
>
> **[3:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=191)** Cardinality refers to the number of unique values or different values that we can have.
>
> **[3:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=196)** And we often use the term low cardinality to refer to columns or features that have relatively few unique values, and high cardinality to refer to features that have a large number of unique values.
>
> **[3:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=208)** We also want to detect things like empty strings and make sure that we distinguish them from explicit null values in our categorical variables.
>
> **[3:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=216)** And we want to watch for potential inconsistencies in our category naming conventions as well.
>
> **[3:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=223)** Now, correlation analysis is another important operation.
>
> **[3:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=226)** Here what we're trying to do is map the relationships between numeric variables to identify any dependencies.
>
> **[3:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=232)** And we also want to highlight strong correlations because that can indicate redundant features.
>
> **[3:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=238)** It often helps to eliminate one or more redundant features when we're building machine learning models.
>
> **[4:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=243)** Now, correlation analysis is also useful for helping us detect counterintuitive correlations, 'cause again, this might be a signal that we either have data quality issues in our source system or in our data-processing pipeline.
>
> **[4:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=257)** And in general, basically this kind of correlation analysis can help support feature selection decisions.
>
> **[4:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=264)** And correlation analysis also helps provide insights into business relationships between different metrics that may not necessarily have been obvious to us before.
>
> **[4:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=273)** Now, after we're done doing missing data analysis, we want to essentially end up with a knowledge base that we can share.
>
> **[4:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=281)** So we want to, for example, be able to deliver a description of the overall missing data quality and be able to score that based on things like completeness and consistency.
>
> **[4:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=292)** We also want to provide specific recommendations for handling missing values, and we want to suggest appropriate normalization methods.
>
> **[5:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=300)** And we do that based on distribution analysis.
>
> **[5:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=303)** And then finally, we want to be able to recommend feature engineering opportunities.
>
> **[5:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=307)** And these basically kind of show themselves based on the statistical analysis that we have done.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), case, (1), finally, (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Detecting and managing outliers
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=0)** - [Instructor] One of the steps in data preparation is understanding outliers.
>
> **[0:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=3)** Outliers represent atypical records that deviate from normal patterns.
>
> **[0:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=8)** Now, if we don't address these, we are at the risk that outliers can skew our analysis and lead to poor quality models and ultimately to poor decisions.
>
> **[0:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=16)** So what we want to do is employ a comprehensive approach that captures potentially different types of outliers that any one single method might miss.
>
> **[0:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=24)** So for example, there's different kinds of outliers that we want to detect.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=29)** There could be data errors.
>
> **[0:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=30)** For example, we might have data quality issues in our point of sales systems.
>
> **[0:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=35)** There's also the potential for fraud.
>
> **[0:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=37)** And of course, sometimes outliers are legitimate, but they just happen to be unusual transactions.
>
> **[0:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=43)** So we need to be able to identify all of these different scenarios.
>
> **[0:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=46)** Now, there are a variety of detection methods.
>
> **[0:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=48)** One is known as the Z-score method, and that basically identifies values that are beyond three standard deviations from the mean.
>
> **[0:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=56)** So that works well with normally distributed data.
>
> **[0:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=59)** There's the modified Z-score.
>
> **[1:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=61)** Now the modified Z-score uses a median-based approach rather than using mean.
>
> **[1:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=65)** And this works well when we need to detect extreme values and data that's not normally distributed.
>
> **[1:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=71)** The IRQ method or interquartile range flags values outside the 1.5 times the interquartile range boundaries.
>
> **[1:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=79)** Now, DBSCAN, or density-based spatial clustering of applications with noise, detects multi-variate outliers, and that works across multiple dimensions.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=90)** Now, we may also want to use domain-specific rules, and this is important when we want to apply domain-specific knowledge to identify unusual transactions.
>
> **[1:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=100)** So some examples in a retail domain include unusually high quantities.
>
> **[1:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=106)** So for example, there might be transactions with more than 20 items per product.
>
> **[1:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=111)** We also have the potential for excessive unit prices.
>
> **[1:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=114)** So for example, we might want to look for products priced above $500, which might exceed typical retail price ranges.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=121)** We also might want to look for high transaction totals.
>
> **[2:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=124)** Say for example, totals exceeding $2,000 thresholds.
>
> **[2:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=128)** Or inconsistent pricing.
>
> **[2:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=130)** And we can detect that when the total price doesn't align with the quantity times the unit price.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=135)** So those are just some examples of a domain-specific set of rules for detecting anomalies.
>
> **[2:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=142)** Now, when we're done with our base analysis, we want to be able to visualize and report our findings.
>
> **[2:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=149)** So some things to keep in mind is we want to be able to generate a comprehensive outlier report with all of our flagged transactions.
>
> **[2:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=156)** Now we can use visualizations like creating box plots for showing distribution and outlier boundaries for key metrics.
>
> **[2:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=163)** We can also produce histograms with IQR bounds, clearly marked for visual analysis.
>
> **[2:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=169)** And we can rank our transactions by their outlier score.
>
> **[2:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=172)** And also we can output detailed statistics, for example, on the percentage of outliers found by each method.

> [!info]- Semantic Content
>
> **Analogies:** for example (6)
> **Env Vars:** irq (1), dbscan (1), iqr (1)
> **Versions:** 1.5 (1)
> **Definitions:** known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Assess data quality of a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-assess-data-quality-of-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-assess-data-quality-of-a-data-set?u=76281980&t=0)** - [Instructor] For this challenge, I want you to consider how you would detect outliers in a feature that does not have a normal distribution.
>
> **[0:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-assess-data-quality-of-a-data-set?u=76281980&t=14)** Which outlier detection method would you use?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Assess data quality of a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-assess-data-quality-of-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-assess-data-quality-of-a-data-set?u=76281980&t=0)** - [Instructor] We would use the modified z-score to detect outliers in a feature that doesn't have a normal distribution.
>
> **[0:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-assess-data-quality-of-a-data-set?u=76281980&t=14)** And we do that because this technique uses the median instead of the mean, which is more appropriate for use with normally distributed data.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Feature engineering: Scaling and normalizing data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=0)** - [Instructor] Sometimes we need to scale and normalize our data.
>
> **[0:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=3)** This is because features with different ranges can distort model training and the predictions those models make.
>
> **[0:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=8)** Now, many machine learning algorithms rely on distance calculations, so that requires that we work with comparable scales.
>
> **[0:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=15)** And this is because we want to prevent large-magnitude features from really dominating the decisions that are made.
>
> **[0:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=22)** Consider, for example, house sales.
>
> **[0:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=24)** Now, the price of a house sale might be in the order of hundreds of thousands of dollars.
>
> **[0:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=28)** That's one feature.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=29)** Other features might be the number of bedrooms, which might be three, four, five, or so on.
>
> **[0:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=34)** So the scales can really vary widely between different features.
>
> **[0:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=39)** In addition, some algorithms will converge faster when we work with standardized and normalized data.
>
> **[0:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=46)** And also, regularization techniques, which we use to prevent overfitting, work better when features are scaled.
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=53)** There are several coming scaling techniques.
>
> **[0:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=55)** Min-max scaling transforms features into ranges that typically range from zero to one or from negative one to one.
>
> **[1:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=63)** Standard scaling or Z-score scaling centers the values around a mean of zero with a standard deviation of one.
>
> **[1:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=70)** Robust scaling ignores outliers from the calculation of the mean and standard deviation, and they're resistant to outliers.
>
> **[1:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=78)** And then finally there's log transform.
>
> **[1:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=81)** Now, log transform works well with handling skewed distributions because it reduces the impact of extreme values by taking the log of data points.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=90)** Let's look a little more deeply at some of these.
>
> **[1:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=92)** Now, with min and max scaling, the formula is basically the scaled value is equal to whatever our data point value is minus the minimum of all of the values in that range divided by the range itself, the difference between the max and minimum values.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=107)** Now, what's nice about min-max scaling is it preserves relationships among the original data points.
>
> **[1:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=113)** And it works best when we need bounded inputs, like for example, when we're working with neural networks.
>
> **[1:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=118)** Now, one limitation is that min-max scaling is sensitive to outliers.
>
> **[2:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=123)** Where we might use min-max scaling is, for example, is when we're normalizing prices.
>
> **[2:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=127)** So we might have retail prices for products that might range from, say, $100 to $500, and what we really want to do is have them scaled on a scale of zero to one.
>
> **[2:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=136)** Now, standard scaling or Z-score scaling, we use a formula, and it involves some Greek letters, so I'll walk through these each individually.
>
> **[2:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=144)** Our scaled value is our standardized value or our Z-score value.
>
> **[2:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=148)** And basically, we start with our original value, and we subtract the mean of the entire distribution.
>
> **[2:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=155)** And then we divide it by the standard deviation of the distribution.
>
> **[2:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=158)** And this basically gives us a new distribution where the mean is zero and the standard deviation is one.
>
> **[2:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=164)** Now, keep in mind that Z-scores are influenced by outliers, and it does not produce a bounded range.
>
> **[2:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=170)** Now, robust scaling is an alternative, and it uses median and interquartile ranges.
>
> **[2:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=176)** And its formula is, we calculate the scaled value by taking the original data point, subtracting the median, and then dividing by the interquartile range.
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=185)** Now, what's nice about robust scaling is it's less sensitive to outliers than standard Z-score scaling.
>
> **[3:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=191)** And it also preserves relative percentage differences, rather than the absolute difference between values.
>
> **[3:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=198)** Now, log transform is another technique we can use.
>
> **[3:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=202)** And it uses the logarithm function, and it basically, what we're doing is compressing the range of values in a particular feature.
>
> **[3:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=210)** And the formula for that is that we have our scaled value is equal to the log of the original value, or it's equal to the log of the original value plus some constant c which we use to handle zeros.
>
> **[3:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=224)** So if we have zeros in our datasets, we'll want to use the log X plus c option.
>
> **[3:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=228)** Now, log transforms are effective when we're dealing with right-skewed data with positive values.
>
> **[3:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=233)** And this really helps to reduce the impact of extreme values.
>
> **[3:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=237)** A nice thing about log transform is that it preserves the relative percentage difference, rather than the absolute difference between values.
>
> **[4:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=245)** Now, let's think about when we want to use different techniques.
>
> **[4:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=248)** Typically, we use min-max scaling when we need bounded values, like when we're working with neural networks.
>
> **[4:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=254)** We use standard scaling or Z-score scaling when data is approximately normally distributed.
>
> **[4:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=260)** And then we can shift to robust scaling when we're dealing with datasets containing significant outliers.
>
> **[4:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=266)** And we can use log transform for highly skewed data when we're working with positive values.
>
> **[4:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=272)** Now, I do want to point out, not all algorithms need scaling.
>
> **[4:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=276)** In particular, if you're working with tree-based algorithms, so if you're working with things like Random Forest or XGBoost, those algorithms don't require scaling.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from, (1), function (1), require (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Feature engineering: Categorical encodings
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=0)** - [Instructor] Now what aspect of feature engineering is encoding categorical variables?
>
> **[0:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=4)** Now, the reason we do this is because many machine learning algorithms require numerical input data, but we often work with data that has categorical variables, so we need to convert those to numbers.
>
> **[0:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=15)** Now there are several different methods for encoding categorical variables into numbers, and each of them preserve different aspects of categorical relationships.
>
> **[0:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=26)** So, we need to be careful choosing a proper encoding method that works well with our model.
>
> **[0:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=32)** Now, one type of categorical encoding is called one-hot encoding.
>
> **[0:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=36)** Now this is a binary representation in which we create binary columns for each category.
>
> **[0:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=42)** Now, each observation or each category value has exactly one numeral one in the binary representation.
>
> **[0:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=49)** And the rest of the values are represented using zeros in binary representation.
>
> **[0:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=55)** And one of the key things about one-hot encoding is that it doesn't impose any kind of ordinal relationship.
>
> **[1:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=61)** And that's really important when ordinal relationships don't naturally exist in the category.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=66)** For example, if we're encoding the colors of clothing items, we don't want to impose some kind of artificial order, like saying red is less than blue, which is less than green.
>
> **[1:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=75)** That doesn't make any sense.
>
> **[1:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=77)** So one-hot encoding avoids that kind of unintentional imposition of an ordinal relationship.
>
> **[1:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=84)** Now, sometimes we do want an ordinal encoding, or there is a natural order.
>
> **[1:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=88)** In that case, we assign each category an integer.
>
> **[1:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=92)** Now, this is really useful because working with integers is memory efficient and ordinal encoding really works well when we have categories with a natural ordering.
>
> **[1:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=103)** But we have to be careful to avoid imposing an artificial ordering for nominal categories, those that don't have orders, things like colors.
>
> **[1:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=112)** So for example, a category with a natural ordering is something like clothing size where we have small, medium, or large.
>
> **[2:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=120)** Well, in that case, it would make sense to encode small, medium, large as maybe zero, one, and two.
>
> **[2:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=126)** Binary encoding is another representation, and it represents categories as binary digits or bits.
>
> **[2:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=133)** Now, this is different from one-hot encoding where we use binary digits, but there's only a single one.
>
> **[2:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=140)** With binary encoding, we're using binary numbers, which have a mix of zeros and ones.
>
> **[2:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=146)** One of the great things about binary encoding is that it works really well for high cardinality features.
>
> **[2:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=153)** So for example, if we have over a thousand, say 1,024 categories, well we only need 10 bits to represent that.
>
> **[2:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=160)** So binary encoding is quite memory efficient.
>
> **[2:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=163)** Target encoding, which is sometimes called mean encoding, is a way of replacing categories with the mean value of some target value that we're interested in for that particular category.
>
> **[2:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=176)** So for example, rather than say, have a city name, if we're dealing with retail data and we want to talk about the average purchase amount in that city, we can replace city or the name of the city with the average purchase amount.
>
> **[3:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=192)** Now, this is useful because it can create highly informative features that have a direct relationship to our target, and it works well with high cardinality features.
>
> **[3:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=202)** But we do need to be careful.
>
> **[3:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=203)** There is a risk of over-fitting our training data, and that means basically, essentially like memorizing the training data and not sufficiently generalizing.
>
> **[3:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=212)** That is a risk with target encoding we need to watch out for.
>
> **[3:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=215)** So, let's think about when we want to use different techniques.
>
> **[3:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=218)** Typically, we use one-hot encoding when we have a small number of categories and no ordinal relationship.
>
> **[3:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=225)** We opt for ordinal encoding when the categories have a clear and meaningful ordering to them.
>
> **[3:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=231)** Binary encoding works well with high cardinality features, especially when memory is a concern.
>
> **[3:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=238)** And then finally, target encoding works well with high cardinality columns where we want to work with a predictive relationship to our target variable.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is called (1)
> **Code Keywords:** case, (2), require (1), for. (1), let (1), finally, (1)
> **Analogies:** for example (4)
> **Warnings:** be careful (3), watch out (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Apply feature engineering to a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-apply-feature-engineering-to-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-apply-feature-engineering-to-a-data-set?u=76281980&t=0)** - [Instructor] In this challenge, I'd like you to identify the categorical and coding method that you would use for a low-cardinality feature with no inherent ordering.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Apply feature engineering to a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-apply-feature-engineering-to-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-apply-feature-engineering-to-a-data-set?u=76281980&t=0)** - [Instructor] Okay, the solution is to use one-hot encoding method, 'cause we're working with low-cardinality features and there's no inherent ordering.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Preparation for Generative AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Structured vs. unstructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=0)** - [Narrator] There are three types of data that we work with in AI.
>
> **[0:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=3)** They are structured, semi-structured, and unstructured data.
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=7)** Now each type requires different processing approaches, and that can have an impact on how we build AI solutions.
>
> **[0:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=13)** So understanding these differences will help us implement more effective AI initiatives.
>
> **[0:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=17)** Now, structured data follows a relatively fixed, predefined format with a consistent schema.
>
> **[0:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=22)** Oftentimes we'll see structured data stored in things like relational databases, spreadsheets, and CSV files where the information is stored in rows and columns.
>
> **[0:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=31)** Now, some common examples include things like customer databases, sales transactions, and inventory systems.
>
> **[0:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=38)** The fixed fields and consistent formats make this data relatively easy to search and analyze.
>
> **[0:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=44)** Semi-structured data sits between structured and unstructured data with some organization, but with a flexible structure.
>
> **[0:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=52)** Semi-structured data is self-describing.
>
> **[0:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=54)** It uses tags or keys that identify what each element represents.
>
> **[0:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=58)** Now, common examples include JSON and XML files, as well as things like email headers and log files.
>
> **[1:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=65)** The data often has a hierarchical organization with parent-child relationships, and this ability to combine simple values with more complex nested elements like arrays, offers a lot of flexibility for representing varied kinds of information needs.
>
> **[1:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=80)** Unstructured data lacks any apparent formal organization and doesn't neatly fit into tables.
>
> **[1:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=86)** Unstructured data includes things like documents, emails, images, videos, and audio files.
>
> **[1:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=91)** The format used to store unstructured data varies widely depending on the content type.
>
> **[1:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=96)** So for example, text documents differ fundamentally from video files.
>
> **[1:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=100)** Now keep in mind that context matters for interpretation.
>
> **[1:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=103)** So for example, understanding sarcasm in a customer feedback form requires contextual awareness.
>
> **[1:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=109)** Also, when working with unstructured data, a good portion of the data preparation for AI is focused on extracting specific features of unstructured data to make it more usable for analysis.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=121)** Structured data and semi-structured data works well with traditional database querying using SQL and NoSQL query languages.
>
> **[2:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=129)** It's also amenable to statistical analysis and traditional machine learning algorithms that expect tabular data.
>
> **[2:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=136)** Now, unstructured data requires specialized processing techniques.
>
> **[2:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=140)** Text, for example, needs natural language processing while computer vision algorithms are needed for dealing with images.
>
> **[2:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=147)** The key difference here is feature extraction, transforming raw unstructured content into structured representations.
>
> **[2:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=154)** Now, fortunately, deep learning techniques are now widely used to automate feature extraction from unstructured data.
>
> **[2:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=160)** Structured and semi-structured data powers traditional business applications like dashboards and reports.
>
> **[2:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=166)** It's used for things like sales forecasting, inventory management, and customer segmentation.
>
> **[2:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=172)** Unstructured data enables different kinds of business capabilities like sentiment analysis from reviews and social media.
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=180)** It can also be used for visual quality control, for example, in manufacturing and powering interactive interfaces like voice assistance.

> [!info]- Semantic Content
>
> **Env Vars:** csv (1), json (1), xml (1), sql (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)
> **Code Keywords:** self (1), type. (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Vector representations of unstructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=0)** - [Instructor] Vectors are a way of numerically representing unstructured data.
>
> **[0:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=4)** A vector is an array of numbers that captures meaningful patterns in unstructured data.
>
> **[0:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=10)** Now, these vectors represent semantic relationships between unstructured data, whether it's words, paragraphs, images, or other unstructured data.
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=19)** And basically what we're doing is we're mapping unstructured data to a representation that's usable by machine learning algorithms.
>
> **[0:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=26)** Now, vectors enable us to perform mathematical operations on inherently non-mathematical content.
>
> **[0:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=33)** They allow us to measure similarity between different pieces of content, and we can make those measurements mathematically.
>
> **[0:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=39)** Now, vectors make it possible to efficiently search and retrieve data, as well as to store it efficiently, even at massive scales.
>
> **[0:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=48)** Now, there are different ways to represent, for example, text as vectors.
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=53)** Word embeddings are the most common vector representation for text, and they capture semantic relationships.
>
> **[0:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=59)** Now, there are different types.
>
> **[1:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=61)** One method is called Word2vec.
>
> **[1:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=63)** Now that creates vectors where words used in similar context have similar representations.
>
> **[1:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=68)** Another method called GloVe leverages word co-occurrence statistics to create more comprehensive embeddings.
>
> **[1:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=75)** And the most modern contextual embedding models, like BERT and GPT, actually understand that word meaning changes with context, and so it captures more information about context.
>
> **[1:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=86)** Now, when we're actually processing text and mapping those to vectors, the text processing pipeline starts with tokenization, or breaking text into words or subwords.
>
> **[1:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=96)** Next comes the embedding process.
>
> **[1:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=98)** That's where each token is converted into a vector, that list of numbers, using trained models.
>
> **[1:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=104)** Now, for longer texts, we can aggregate token vectors to represent sentences or even entire documents.
>
> **[1:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=110)** Now, words are typically transform into, you know, hundreds of dimensional vectors in traditional embedding systems.
>
> **[1:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=117)** Now, documents use on the order of thousands of dimensions in the vectors representing them.
>
> **[2:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=124)** Now, when we're going from images to vectors, we work with pixels.
>
> **[2:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=129)** Images can be represented as pixel arrays with numerical red, green, blue channel values.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=135)** More advanced systems extract features capturing visual patterns at different levels.
>
> **[2:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=141)** For example, high-level embedding vectors can encode semantic information about image content.
>
> **[2:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=147)** Convolutional neural networks extract hierarchical features from images.
>
> **[2:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=152)** While lower network layers detect basic elements, like edges, textures, and colors.
>
> **[2:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=157)** And higher layers typically identify more complex structures, like objects, scenes, and abstract concepts.
>
> **[2:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=164)** Now, when we're trying to map audio into vector representations, there are, again, different methods.
>
> **[2:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=171)** Audio can be vectorized as raw waveform sampling, capturing amplitude values over time.
>
> **[2:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=178)** We can also use spectograms, which transform audio into a 2-D representation, which shows frequency information.
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=185)** Now, audio embeddings capture multiple features of audio, including phonetic elements, emotional tone, and unique speaker characteristics.
>
> **[3:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=195)** Now, there are a variety of practical applications.
>
> **[3:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=197)** In text analysis, vectors enable document similarity comparisons and semantic search engines.
>
> **[3:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=204)** They also power machine learning translation by mapping concepts between different languages.
>
> **[3:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=209)** Now, for images, vectors can drive things like visual product search and face recognition systems.
>
> **[3:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=215)** In audio applications, vectors support speaker identification, based authentication.
>
> **[3:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=220)** They also power music recommendations by encoding acoustic similarity patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** bert (1), gpt (1)
> **Definitions:** is an  (1), is called (1)
> **Analogies:** for example (2)
> **Code Keywords:** abstract (1)
> **Speakers:** - [instructor] (1)

#### Tools for generating vector representations
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=0)** - [Instructor] Let's take a look at some tools for creating vector representations.
>
> **[0:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=4)** Now, vector embedding tools transform unstructured data, like text, images, and audio into numerical forms that we can use AI to process.
>
> **[0:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=13)** Now, there are different specialized tools that we use, and we choose them based on the kind of unstructured data that we're dealing with, but across the board, regardless of the kind of data we're working with, we want to keep an eye out for accessibility, especially the ability for non-specialists to use these tools.
>
> **[0:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=30)** We also want to make sure that the tools will scale to our production requirements and the tools should be able to integrate into our larger data processing pipelines.
>
> **[0:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=41)** Now, when we work with text embedding tools, we have a number of options.
>
> **[0:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=44)** We can start with pre-trained models and libraries, like sentence-transformers, which is a Python library that makes creating state-of-the-art sentence embeddings relatively straightforward.
>
> **[0:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=54)** There is Hugging Face Transformers.
>
> **[0:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=56)** Now, Hugging Face is a platform that provides access to hundreds of pre-trained models.
>
> **[1:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=60)** We can also use OpenAI's embedding API.
>
> **[1:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=64)** Now, that gives us access to high-quality text vectors by making API calls.
>
> **[1:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=69)** There are also open source embedding frameworks we can use, and these include things like Word2Vec, GloVe, and fastText.
>
> **[1:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=75)** For more advanced contextual embeddings, we can use tools like BERT, RoBERTa, and T5.
>
> **[1:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=81)** For images, we have tools Keras and TensorFlow that provide pre-trained models like ResNet, EfficientNet, and VGG for feature extraction.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=90)** PyTorch torchvision is a package that offers similar capabilities, but with a different programming interface.
>
> **[1:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=97)** Now, the tool CLIP from OpenAI connects images and text in a shared vector space, and that's the kind of tool that enables multimodal applications.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=107)** We also have the option of using image embedding services.
>
> **[1:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=110)** Now, these include services like Google Cloud Vision API, which can extract features and generate embeddings without depending on any kind of like local computation.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=121)** Similarly, AWS Rekognition is a service that allows you to create searchable image collections using vector representations, but without the demands of having like a local infrastructure to handle the heavy compute workload.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=135)** We also have a number of audio embedding tools.
>
> **[2:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=138)** There are audio processing libraries like Librosa, which is a Python package that extracts features from sound files.
>
> **[2:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=146)** There's Wav2Vec, which uses self-supervised learning to create speech representation without labeled data.
>
> **[2:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=152)** A tool called HuBERT applies BERT-like techniques, but applies 'em to audio.
>
> **[2:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=156)** And what we're doing there is creating contextual representations for speech.
>
> **[2:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=160)** CLAP connects audio and language, similar to how CLIP works with images and text.
>
> **[2:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=165)** And then again, we also have cloud services like AWS Transcribe, which can extract features directly from speech audio, and Speechmatics, which offer language-agnostic audio processing.
>
> **[2:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=178)** Now, there are several practical considerations that you want to keep in mind.
>
> **[3:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=182)** Now, when selecting tools, consider processing requirements and whether local or cloud-based solutions would be a better fit for your requirements.
>
> **[3:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=191)** You'll want to balance vector quality against computational costs.
>
> **[3:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=194)** That's especially the case if you're dealing with real-time applications.
>
> **[3:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=198)** Also, you want to evaluate domain specific performance.
>
> **[3:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=201)** Some tools may excel with particular content types or languages, but not others.
>
> **[3:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=207)** You also want to make sure the tools you choose are compatible with your existing technology stack because you want to minimize challenges when it comes to integrating different tools.
>
> **[3:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=217)** Also, you want to look for support for both batch processing for large historical data sets, as well as real-time generation.
>
> **[3:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=225)** That's especially important if you're developing interactive applications.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), bert (2), clip (2), aws (2), vgg (1)
> **CLI Commands:** make (2), python (2), aws (2)
> **Definitions:** is a  (5)
> **Code Keywords:** let (1), interface (1), self (1)
> **Analogies:** kind of like (1), similar to (1)
> **Code Identifiers:** fasttext (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Similarity between vector representations
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=0)** - [Instructor] When comparing unstructured data like documents, images, and audio, we first need to transform those data sets into a format that our AI algorithms can process.
>
> **[0:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=11)** Now, the fundamental approach involves converting raw data into embeddings or vectors, and then measuring the similarity between those vectors.
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=19)** Now, this is a relatively simple approach, but it's actually quite powerful, and we use it to power a wide range of applications like semantic search, personalized recommendation, content clustering, and even anomaly detection.
>
> **[0:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=32)** What's so advantageous about this approach is that we can compare actual meaning and content, and not just superficial features like keywords and documents.
>
> **[0:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=41)** Now, there are several similarity measures.
>
> **[0:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=43)** Cosine similarity measures the angle between vectors, with the results ranging from one for identical vectors to zero for completely unrelated vectors.
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=53)** Now, Euclidean distance calculates straight line distances between vectors, with smaller values indicating greater similarity.
>
> **[1:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=61)** Now, unlike cosine similarity, Euclidean distance is sensitive to vector magnitude, so you need to watch for that and manage that with scaling.
>
> **[1:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=69)** Now, other options include the Jaccard method, which works for sets, Manhattan distance, which is good when you have a grid-like data structure, and Hamming distance if you're working with binary vectors.
>
> **[1:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=82)** There are some implementation issues that you want to keep in mind.
>
> **[1:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=85)** Pre-processing can significantly impact the quality of your results.
>
> **[1:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=89)** You want to make sure you normalize vectors to unit length for when you're using cosine similarity, and you want to standardize when you're using Euclidean distance.
>
> **[1:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=98)** Now, dimensionality reduction can help, and we can use techniques like PCA or t-SNEs that can help visualize high dimensional vectors in 2D or 3D space.
>
> **[1:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=109)** Now, these methods preserve the most important features while reducing the overall computational complexity that we have to deal with.
>
> **[1:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=116)** Similarity measurement powers a wide range of use cases.
>
> **[2:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=120)** These include semantic search, which finds content with similar meaning despite using different terminology or phrasing.
>
> **[2:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=128)** We also have content recommendation systems that identify similar items to those that a user might previously be... Expressed some interest in.
>
> **[2:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=136)** We can also use it for things like plagiarism detection tools to identify similar content, that may not have, say, "The exact, you know, text matches."
>
> **[2:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=144)** Also, image similarity enables us to find visually similar products, or maybe, for example, detect duplicate images without modifications.
>
> **[2:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=154)** And then also we can use similarity for audio matching.
>
> **[2:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=157)** Now that's useful if we have applications, for example, that identifies songs from a short snippet of audio.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (2)
> **Env Vars:** pca (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Choosing vector generation tool
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-choosing-vector-generation-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-choosing-vector-generation-tool?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to identify the key considerations that we should keep in mind when we're choosing a vector generation tool for working with unstructured data.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Choosing vector generation tool
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980&t=0)** (light music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980&t=7)** - [Instructor] Okay, the answer to this challenge is that the key considerations when choosing a vector generation tool include things like accessibility, especially to non-specialists, scalability, will it meet the scalability requirements of your production environment?
>
> **[0:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980&t=22)** And then finally, integration.
>
> **[0:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980&t=23)** Will this tool easily fit into your data processing pipelines?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)


### 3. Data Quality Assessment

> [↑ Back to Table of Contents](#table-of-contents)

#### Elements of data quality: Consistency, accuracy, and completeness
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=0)** - [Presenter] There are three core pillars of data quality, and they are consistency, accuracy, and completeness.
>
> **[0:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=6)** Now, these are critical for both structured and unstructured data when we're working with AI applications.
>
> **[0:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=11)** And also, we need to remember the data quality assessments we're going to be discussing really have to be designed for your specific business context.
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=19)** What we do with consistency assessments is evaluate data integrity across different systems and across different time periods.
>
> **[0:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=28)** So, for example, we might want to look at product category assignments and make sure they actually match across different systems within our organization.
>
> **[0:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=35)** When it comes to things like customer segmentation, we want to make sure those classifications are relatively stable over time.
>
> **[0:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=42)** And when we use naming conventions, we want to make sure we're following established patterns.
>
> **[0:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=47)** Now, there are different metrics we can use for measuring consistency.
>
> **[0:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=50)** For example, we might have consistency ratios or contradiction rates that we have when we're assessing data sets.
>
> **[0:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=57)** Now, when it comes to accuracy assessments, what we're trying to do is measure how closely the data that we have actually represents the real world.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=66)** Now, when we're dealing with structured data, some examples are things like verifying customer emails through validation checks, or cross-referencing inventory counts with the actual physical stock in our stores or within our storage areas, and testing product dimensions against the physical measurements we have in our data sets.
>
> **[1:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=84)** Now, with regards to unstructured data, some examples of accuracy assessments involve text sentiment analysis, and we do that kind of validation through human review, or maybe checking the labels that are associated with the images.
>
> **[1:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=98)** And again, we'd have a human doing that.
>
> **[1:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=100)** Now, a completeness assessment examines whether all data elements that we require are actually present.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=107)** So, with regards to structured data, we would look at things like customer profiles to make sure we have all the demographic data points that we expect, or with product listings, we'd want to make sure all the required specifications are listed with each particular product.
>
> **[2:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=122)** And if we're doing different kinds of, say, sales transactions, we want to make sure we capture all the items and attributes associated with that transaction.
>
> **[2:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=130)** With regards to unstructured data, we want to watch for things like, when we're checking documents, we want to make sure those documents contains all the necessary sections we would expect with that type of document.
>
> **[2:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=141)** With regards to images, we want to make sure they have sufficient quality so that we can do feature extraction on those images.
>
> **[2:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=148)** Now, when we're implementing quality assessment, we're going to do things like making sure we profile both structured and unstructured data sources.
>
> **[2:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=156)** We also want to set quality thresholds based on business impact analysis.
>
> **[2:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=161)** So we don't want to make arbitrary thresholds that may be expensive and difficult to achieve, but don't have a corresponding business value with them.
>
> **[2:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=169)** We also want to develop automated quality-monitoring workflows, and we have to be sure to create domain-specific validation roles.
>
> **[2:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=177)** And here, we often depend on expert input.
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=180)** And, finally, we want to establish a feedback loop so that we can improve the data quality that we use for building our AI model and evaluating AI model performance.
>
> **[3:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=190)** We can see the impact of this kind of data quality practice by looking at different examples.
>
> **[3:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=196)** For example, with regards to consistency, we would have uniform product attributes across platforms.
>
> **[3:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=202)** We'd also be sure that we have correct product relationships and affinities.
>
> **[3:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=206)** From a completeness perspective, we'd have comprehensive interaction history and metadata.
>
> **[3:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=211)** Now, looking at an unstructured data example, like document processing, consistency will bring to our work standardized document formats, accuracy will help ensure that we can correctly extract text fields and classify those documents, and completeness helps to ensure that all relevant document sections are actually included in our analysis.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9)
> **Analogies:** for example (3)
> **Code Keywords:** require (1), finally, (1)
> **Speakers:** - [presenter] (1)

#### Statistical techniques for data quality assessment
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=0)** - [Instructor] Statistical methods provide objective measures of data quality.
>
> **[0:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=4)** Now, these measures help us identify patterns, anomalies, and data quality issues at scale.
>
> **[0:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=10)** And they include techniques like distribution analysis, outlier detection, correlation and consistency analysis, and sampling techniques.
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=19)** Let's take a look at distribution analysis.
>
> **[0:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=21)** With distribution analysis, what we're trying to do is examine the data distribution to identify quality issues.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=29)** So, for example, we might look at price point distribution to detect pricing errors, or purchase frequency patterns to find abnormal customer behaviors, or inventory level distributions that will help us identify data collection issues.
>
> **[0:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=45)** Now we have a variety of tools that help with distribution analysis.
>
> **[0:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=49)** We can use visual techniques, like histograms and box plots, as well as statistical calculations that give us numerical measures, like distribution tests like the Shapiro-Wilk test.
>
> **[1:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=62)** Now, I will say if you're not familiar with some of these statistical tests, I have courses that I will recommend at the end, which are also available in the course catalog, which go into more detail about these different statistical tests.
>
> **[1:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=74)** Now, with outlier detection, we have methods like z-scores, which can flag values beyond three standard deviations of the mean.
>
> **[1:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=81)** And, for example, we could use this to identify impossible transaction sizes or basket sizes.
>
> **[1:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=87)** You know, for example, having hundreds or thousands of items in it.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=90)** The IRQ method or interquartile range method, those help flag values that are outside 1.5 times the interquartile range.
>
> **[1:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=100)** So, for example, we could use that to detect unrealistic product weights in our catalog.
>
> **[1:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=105)** Isolation forest is an unsupervised machine learning algorithm that we can use to help us with complex pattern recognition, such as finding anomalies in customer journeys across various touchpoints.
>
> **[1:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=118)** Now, correlation and consistency analysis has a number of different measures.
>
> **[2:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=122)** There is the Spearman and Pearson correlation measures, and those are used to verify expected relationships.
>
> **[2:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=130)** For example, if we wanted to compare the product size versus the shipping weight.
>
> **[2:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=134)** Now sometimes we want to do cross-field validation using statistical dependencies.
>
> **[2:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=139)** So, for example, we might want to analyze category-specific price ranges for our products.
>
> **[2:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=144)** And then we also sometimes want to do time series consistency measurements.
>
> **[2:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=148)** And this is important if we want to do things like detect sudden shifts in like a daily or weekly sales patterns.
>
> **[2:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=154)** Now sampling techniques are really important for quality assessment.
>
> **[2:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=158)** Now, one of the most common is random sampling with confidence intervals.
>
> **[2:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=161)** And for example, we may want to validate product descriptions with a 95% confidence.
>
> **[2:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=168)** Now, sometimes if we have different groups, we would use stratified sampling across different categories like product categories.
>
> **[2:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=176)** Now, that would be useful if we want to ensure the representation of products across all departments.
>
> **[3:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=181)** Now we can also use sequential sampling.
>
> **[3:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=184)** That's useful for ongoing quality monitoring.
>
> **[3:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=186)** So, for example, we could do continuous product image quality verification.
>
> **[3:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=190)** And then we also want to take into account sample size determination based on variants in a particular population.
>
> **[3:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=197)** So for example, we might determine, you know, the volume of items we are going to examine based on, say, the number of high-risk SKUs we might have in our product catalog.
>
> **[3:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=209)** Now some things to keep in mind when we're implementing quality assessments.
>
> **[3:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=213)** We want to be sure we use control charts to monitor data quality metrics over time.
>
> **[3:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=218)** So, for example, we want to be able to track missing values in customer profiles over time.
>
> **[3:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=222)** We also want statistical process control for our data collection.
>
> **[3:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=227)** Well, that requires that we monitor, say, for example, the consistency of our in-store traffic counts.
>
> **[3:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=232)** We also want to do acceptance sampling for vendor-provided data.
>
> **[3:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=236)** We might want to check quality thresholds for third-party product data.
>
> **[4:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=240)** And then finally, we also want to apply statistical significance testing for various quality improvements such as using A/B testing when we're doing our data cleaning approaches.

> [!info]- Semantic Content
>
> **Analogies:** for example (11), such as (2)
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** find (1)
> **Env Vars:** irq (1)
> **Versions:** 1.5 (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-data-quality?u=76281980&t=0)** - [Instructor] In this challenge, I would like you to identify the three main components of data quality assessment for AI.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980&t=0)** (upbeat energetic music) (upbeat energetic music fades)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980&t=7)** - [Presenter] The answer to the challenge is consistency, accuracy, and completeness.
>
> **[0:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980&t=12)** Those are the main components of data quality assessment for AI.

> [!info]- Semantic Content
>
> **Non-Speech:** (upbeat energetic music) (1), (upbeat energetic music fades) (1)
> **Speakers:** - [presenter] (1)


### 4. Data Augmentation for Generative AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of data augmentation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=0)** - [Instructor] Data augmentation and GenAI is basically a way of artificially expanding training datasets to improve model performance.
>
> **[0:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=8)** Now, one of the ways we can improve model performance is by reducing overfitting.
>
> **[0:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=12)** Now, overfitting occurs when we essentially do things like memorize the training dataset rather than generalize from the set.
>
> **[0:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=20)** So with data augmentation, we can create high-quality models, even when the amount of real data that we have to work with is fairly limited.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=29)** Another advantage of data augmentation techniques is that it can be sometimes more cost-effective than collecting additional raw data.
>
> **[0:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=38)** The kinds of techniques we use will depend on the kind of data we're working with.
>
> **[0:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=41)** So for example, if we're working with natural language text, we can use text augmentation.
>
> **[0:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=47)** And there are a couple of different categories of text augmentation techniques.
>
> **[0:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=51)** One are known as lexical transforms, and this is where we work at fairly low levels, and we do things like replace synonymous words.
>
> **[1:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=60)** Or for example, we could use random word changes such as inserting, deleting, or swapping word order.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=66)** We can also work at a more phrase or sentence level.
>
> **[1:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=69)** These are known as syntactic transformations.
>
> **[1:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=72)** And in this case, we do things like convert an active voice sentence into a passive voice or rephrase a question or paraphrase some set of words within a sentence.
>
> **[1:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=84)** Now, when we're working with image data, again, we have multiple techniques we can choose from.
>
> **[1:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=89)** One class of techniques are known as geometric transformations, and that includes things like rotating, flipping, scaling, and cropping images.
>
> **[1:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=97)** We can also apply things like perspective and affine transformations.
>
> **[1:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=102)** Those are transformations that preserve lines and parallelisms, but not necessarily angles.
>
> **[1:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=108)** We can also do modifications to color and appearance.
>
> **[1:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=112)** So for example, we can do color jittering or slightly tweak colors or apply grayscale conversions.
>
> **[1:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=118)** We can also add noise, like for example, randomly inserting, you know, white or light and dark pixels, which is known as adding salt-and-pepper noise.
>
> **[2:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=128)** Now, as you're implementing data augmentation techniques, there are some good practices you want to keep in mind.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=135)** Probably the most important thing to remember is that you want to start with proven techniques for your particular type of data and domain.
>
> **[2:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=142)** And then you also want to start with relatively simple transformation techniques, and then you can gradually increase the complexity based on validation metrics.
>
> **[2:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=153)** So as you do apply more complex techniques, you want to make sure you're preserving, for example, the semantic consistency across the original data and the augmented new data that you're creating.
>
> **[2:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=164)** Now, that also brings up another sort of a balancing act here.
>
> **[2:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=168)** You want to balance the augmentation diversity, so you want some range of different values in the data so that you get diversity in your training set.
>
> **[2:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=177)** But you want to balance that with semantic preservation.
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=180)** You want to keep the images realistic, for example, or the text that you're generating, you want that to be a plausible text that, for example, a human might write.
>
> **[3:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=189)** Now, there are some common pitfalls, so you just want to watch out for things like unrealistic augmentation.
>
> **[3:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=196)** And this can occur when you start applying more complex techniques.
>
> **[3:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=200)** And also, really any transformation could change meaning.
>
> **[3:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=204)** So for example, dropping the word not out of a sentence could significantly change the meaning.
>
> **[3:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=209)** So you want to watch for transformations, even minor transformations that can change the semantics of either a text or an image.
>
> **[3:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=218)** Now, there are a number of different areas where we can apply data augmentation.
>
> **[3:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=223)** So, when we're working with text or natural language, oftentimes we will use diverse response generation for conversational AI.
>
> **[3:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=232)** With regards to image generation, we often look for domain adaptations for specialized visualized tasks.
>
> **[3:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=239)** Here's a common case where we have to synthesize data.
>
> **[4:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=243)** When we're working with audio data, we might want to do things like voice cloning.
>
> **[4:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=248)** We do this especially when we have just a limited sample of, say, someone's voice.
>
> **[4:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=254)** So these are just some of the areas where data augmentation naturally lends itself to helping to improve model quality.

> [!info]- Semantic Content
>
> **Analogies:** for example (8), such as (1)
> **Definitions:** known as (4)
> **Code Keywords:** case, (1), from. (1)
> **Warnings:** keep in mind (1), watch out (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Text perturbation and style transfer
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=0)** - [Instructor] We used text augmentation to expand limited training datasets without having to go out and collect additional realistic data.
>
> **[0:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=9)** Now, this addresses several issues.
>
> **[0:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=11)** These include class imbalance, overfitting, and robustness.
>
> **[0:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=16)** Now, there are, broadly speaking, two ways we can augment text.
>
> **[0:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=21)** One is with what is known as text perturbation, and the other is known as style transfer.
>
> **[0:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=26)** Now, with text perturbation, we can start at a fairly low level, like character-level modification.
>
> **[0:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=32)** These include things like random character insertion, deletion, and substitution.
>
> **[0:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=37)** We can also simulate keyboard proximity errors.
>
> **[0:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=39)** That's useful for simulating typos.
>
> **[0:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=42)** And we can also do things like character swapping within words.
>
> **[0:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=45)** Now, we can work at word-level transformations, and here we can do things like replacing synonymous words, and we would use thesauri or word embeddings for that.
>
> **[0:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=55)** We can also do random word changes by inserting, deleting, or swapping, or we can also use N-gram sampling and replacement.
>
> **[1:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=63)** So an N-gram is a series of N-words or characters.
>
> **[1:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=67)** So for example, we could have a three gram, which might be three characters string or three words that occur in a text, and we can sample and replace using those N-grams.
>
> **[1:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=77)** Now, we also have the option of using more advanced text perturbation techniques.
>
> **[1:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=82)** Now, one set is the... Basically, a set of contextual word replacement approaches.
>
> **[1:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=88)** And for this, we depend on LLMs.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=90)** So for example, we can use basically LLM prediction models.
>
> **[1:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=96)** So an LLM might predict what the next word might be, and we might substitute whatever the word actually is with what an LLM predicts the word might be.
>
> **[1:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=104)** We can also translate into other languages and then back into our original language.
>
> **[1:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=110)** So for example, we could translate from English into French and then from French back to English.
>
> **[1:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=115)** That can lead to different ways of phrasing the content of a sentence.
>
> **[2:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=120)** We can also go about restructuring sentences while still preserving the grammatical relationship.
>
> **[2:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=126)** And one example of that is changing active voice into passive voice, and vice versa.
>
> **[2:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=131)** Now, another technique is known as style transfer.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=135)** And with this, what we're doing is rewriting text to alter the style while still preserving the content.
>
> **[2:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=141)** Well, there are a number of different dimensions of style that we can tweak or adjust.
>
> **[2:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=147)** These include formality.
>
> **[2:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=149)** So we might have, say, a casual text, and we want to translate that into something more formal or more academic.
>
> **[2:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=157)** We can also increase the simplicity or increase the complexity of a description.
>
> **[2:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=163)** So for example, we might have a complex description of a physics phenomenon, and we might ask an LLM, "Translate this concept "or explain this concept "to a five year old" to get a more simplistic expression.
>
> **[2:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=176)** We can also adjust the sentiment.
>
> **[2:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=179)** So we may have a customer review that has a positive or neutral sentiment.
>
> **[3:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=184)** We might ask an LLM to modify that to generate a negative sentiment.
>
> **[3:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=189)** We can also change verbosity.
>
> **[3:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=191)** So we might have something that's very concise, again, maybe a concise description or a concise news report, that we expand to be a more detailed description.
>
> **[3:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=202)** Those are all examples of style transfer.
>
> **[3:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=205)** Now, when we're implementing these techniques, there's some things we want to keep in mind in terms of how we want to evaluate.
>
> **[3:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=212)** We want to make sure that we're doing some level of semantic preservation.
>
> **[3:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=215)** So we're modifying, for example, a piece of text.
>
> **[3:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=219)** So for example, we might change the sentiment from neutral to negative.
>
> **[3:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=222)** So we're not strictly preserving the semantics, we are changing at least some dimension of it, but that's okay.
>
> **[3:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=229)** But we don't want to radically change the content to mean something radically different from what we started, and that's what we mean by "semantic preservation."
>
> **[3:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=238)** We also want to make sure we maintain linguistic acceptability.
>
> **[4:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=242)** So we can do that by looking at things like grammatical assessments, and also looking at maybe perplexity measurements from language models, like "how complicated, "or overly-complicated, is this description?"
>
> **[4:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=254)** We also want to look at diversity metrics, like, "Are we expanding the vocabulary "that we're using?"
>
> **[4:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=260)** We can also look at the distribution of measurements across different linguistic features.
>
> **[4:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=265)** And probably the most important way is downstream task improvement.
>
> **[4:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=269)** For example, if we're classifying documents, does our classification accuracy metric improve?
>
> **[4:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=277)** Are we better at generalizing out of distribution examples?
>
> **[4:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=281)** So specifically, this is very much of a pragmatic, task-oriented kind of evaluation, but it's one of several that we can use when we want to evaluate how well our text augmentation is doing.

> [!info]- Semantic Content
>
> **Analogies:** for example (7)
> **Env Vars:** llm (5)
> **CLI Commands:** make (2)
> **Code Keywords:** this, (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Retrieval-augmented generation (RAG)
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=0)** - [Narrator] Now, I'd like to turn our attention to retrieval augmented generation, commonly referred to as RAG.
>
> **[0:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=5)** Now, RAG is a technique that combines information retrieval with generative AI, and what it does is it enhances the outputs of large language models with relevant knowledge that's external to that model.
>
> **[0:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=17)** And what we're doing is basically, bridging the gap between the static model knowledge that's encapsulated within an LLM with up-to-date information that we can get online.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=29)** Now, one of the nice things about RAG is it can really help us with hallucinations, because with RAG we can ground responses in the retreat facts that we get from our information retrieval.
>
> **[0:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=39)** Another nice thing about RAG is it allows us to augment what we can talk about or what the LLM can talk about, because it basically, enables specialized knowledge domains without fully retraining the model.
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=53)** All right, there are three major components of RAG.
>
> **[0:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=56)** One, is the knowledge base.
>
> **[0:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=58)** Now, this is a structured repository of information.
>
> **[1:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=61)** So, for example, our documents, whatever other databases we might be using.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=66)** We often use a vector database for embeddings, but we may also use relational databases or no SQL databases for metadata, for example, about documents.
>
> **[1:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=76)** We also have a retrieval system.
>
> **[1:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=79)** Now, the retrieval system is used for semantic search using embeddings.
>
> **[1:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=84)** It also helps with relevance ranking and optimizing the context window.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=90)** Then the third component is the generation module.
>
> **[1:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=92)** And the generation module is the large language model itself, plus some additional supporting mechanisms such as context integration mechanisms and output formatting and synthesis.
>
> **[1:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=104)** Now, let's look at the RAG workflow.
>
> **[1:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=106)** The first step of the RAG workflow is query processing.
>
> **[1:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=109)** And here what our goals are to understand the user's intent, analyze complex questions, basically, decompose the query, and identify key concepts that we need to retrieve.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=121)** The next stage is the actual information retrieval part.
>
> **[2:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=124)** Here, basically what we have to do is convert the query into an embedding and then use semantic search across a vector database.
>
> **[2:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=131)** And that'll allow us to select the most relevant chunks of text.
>
> **[2:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=136)** Now, once we've completed the information retrieval phase, then we move on to context integration.
>
> **[2:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=143)** Now, here our focus is on organizing retrieved information and combining multiple sources coherently.
>
> **[2:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=150)** After we've integrated the context, we want to generate out a response.
>
> **[2:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=153)** And basically, the idea here is we're going to synthesize an answer based on the retrieved context, while also doing things like maintaining attribution to sources.
>
> **[2:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=164)** Now, there are different retrieval optimization strategies.
>
> **[2:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=167)** For example, we can combine semantic and keyword searches to improve the quality of our search results.
>
> **[2:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=174)** We can also use metadata such as document attributes for pre-filtering before we apply what is oftentimes a more costly and more complex semantic matching.
>
> **[3:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=186)** We can also use re-ranking mechanisms.
>
> **[3:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=188)** For example, we can use two-stage retrieval where we work first with coarse and then fine grain searches.
>
> **[3:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=194)** We can also use LLMs to enhance our search queries, so basically, augment the queries themselves.
>
> **[3:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=200)** And then we can also apply multi-step retrieval where we break complex queries into subqueries and then aggregate the information that we get from multiple searches.
>
> **[3:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=210)** Now, when you're implementing RAG, there are a few things that are worth keeping in mind.
>
> **[3:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=213)** First of all, we're going to be dealing potentially with sensitive information handling.
>
> **[3:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=217)** So, we want to think about access controls and compliance with data regulations.
>
> **[3:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=222)** We also want to think about how we're going to keep the knowledge bases up to date.
>
> **[3:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=227)** And as we're updating our knowledge bases, for example, updating our vector databases, we have to be aware of the fact that we may be incorporating conflicting information into our database.
>
> **[3:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=238)** So, there is a question of how do you deal with that once it's discovered?
>
> **[4:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=241)** Often it shows itself during the generation process.
>
> **[4:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=244)** And then, because we're working with external sources that are constantly changing, we want to think about what is the level of version control we want for the sources that we're using in our RAG system.
>
> **[4:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=256)** And then finally, if we're dealing with say, interactive systems, we want to think about how are we going to maintain an appropriate level of latency in the user experience, and part of that will be driven by retrieval latency.
>
> **[4:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=270)** So, we need to be aware of how say the growth in the size of a vector database might adversely impact the retrieval latency and therefore adversely impact the overall user experience.
>
> **[4:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=283)** And that gets to the general question of how do we scale large databases to massive scales?
>
> **[4:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=289)** And so, that is a question that you'll need to to grapple with, but oftentimes when we're starting with RAG, we're a more modest scale.
>
> **[4:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=296)** So, scaling to massive knowledge bases is not an immediate problem, but it's one that tends to creep up on us over time.

> [!info]- Semantic Content
>
> **Env Vars:** rag (11), llm (2), sql (1)
> **Analogies:** for example (5), such as (2)
> **Code Keywords:** module (2), static (1), let (1), finally, (1)
> **Definitions:** is a  (4)
> **Warnings:** be aware (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Introduction to LangChain for RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=0)** - [Instructor] One of the widely used tools in RAG is known as LangChain.
>
> **[0:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=4)** LangChain is a framework for developing applications that are powered by large language models.
>
> **[0:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=9)** Now, LangChain is an open-source toolkit that basically simplifies integration of, say, Python applications with large language models.
>
> **[0:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=18)** Now, it enables the creation of context-aware and reasoning-based applications.
>
> **[0:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=23)** And there are several advantages to using LangChain, including its flexibility, its ability to support abstraction of common processing patterns, as well as its support for context and memory.
>
> **[0:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=34)** LangChain has several core components.
>
> **[0:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=37)** These include models, which are interfaces with various LLMs, like OpenAI or Anthropic's Claude, as well as open-source LLMs, like Llama.
>
> **[0:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=46)** The core components also include prompts, which are templates for LLM interactions; memory, which includes both short and long-term context retention systems; and then, we also have chains.
>
> **[0:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=58)** Now, these are data structures that combine components into reusable workflows.
>
> **[1:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=63)** And agents, which create autonomous systems, and they're able to reason and take actions using tools.
>
> **[1:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=70)** And, then finally, we have retrievers, which are components that connect LLMs to external data sources.
>
> **[1:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=76)** Now, LangChain supports RAG with a number of high-level supporting processes.
>
> **[1:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=82)** These include document loading.
>
> **[1:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=84)** And we can work with a real diverse range of formats, including PDF, CSVs, and websites.
>
> **[1:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=90)** It also has support for text chunking and vectorization.
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=94)** That's useful for more efficient retrieval.
>
> **[1:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=96)** We can integrate with a variety of vector databases.
>
> **[1:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=99)** These include some of the commonly used ones, like Pinecone and Chroma.
>
> **[1:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=102)** There's also support for context window optimization, and that helps with more accurate responses.
>
> **[1:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=108)** And then we also have real-time information access beyond the LLMs themselves, right?
>
> **[1:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=112)** That's where the retrieval augmented generation actually comes in.
>
> **[1:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=116)** Now, LangChain supports agents, and agents are a really popular topic right now.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=121)** So agents are autonomous systems that use LLMs for reasoning and planning.
>
> **[2:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=126)** Now, LangChain agents basically choose tools based on a user request and the context of that request.
>
> **[2:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=133)** And they, the agents, also allow for flexible execution of multi-step processes.
>
> **[2:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=139)** So it's not just a predefined set of executing a certain set of tools, but actually, the LangChain agents can adapt to different conditions and change the execution behavior based on those conditions.
>
> **[2:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=151)** And so when we're talking about tools, basically, we're talking about taking advantage of a wide array of tools, like search engines, calculators, and just about any API that's accessible online.
>
> **[2:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=162)** Another thing about LangChain agents that's important is that agents have memory, so they can maintain the context across multiple interactions with different tools.
>
> **[2:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=172)** And LangChain agents also have the option of employing human-in-the-loop options for verification, if that's something you want to do with your agent.
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=180)** Now, LangChain has a number of use cases.
>
> **[3:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=182)** For example, there's augmenting customer support automation with contextual knowledge or performing document analysis and summarization, potentially at large scale.
>
> **[3:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=191)** It's also useful for personalizing content recommendations systems, as well as generating and explaining code.
>
> **[3:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=198)** We can also use LangChain if we are working the area of knowledge management and we want to support knowledge management and internal search tools.
>
> **[3:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=206)** And of course, another area that's getting a lot of attention is what are often known as deep research modes in LLMs.
>
> **[3:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=213)** Well, LangChain can help with our own mechanism for providing research assistants that synthesize information across multiple steps.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2), llm (1), pdf (1), api (1)
> **Definitions:** known as (2), is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Code Keywords:** finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Understanding components of RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-understanding-components-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-understanding-components-of-rag?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-understanding-components-of-rag?u=76281980&t=7)** - [Instructor] In this challenge, I would like you to identify the three main components of a retrieval augmented generation system.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Understanding components of RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-understanding-components-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-understanding-components-of-rag?u=76281980&t=0)** - [Narrator] Okay, the three main components of a retrieval augmented generation system are the knowledge base, the retrieval system, and the generation module.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Knowledge Augmentation for Generative AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of knowledge augmentation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=0)** - [Instructor] Now, as we've discussed, LLMs have knowledge cutoffs and they can't access information directly beyond their training data.
>
> **[0:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=8)** But oftentimes, domain-specific knowledge is limited in general purpose models.
>
> **[0:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=14)** But at the same time, oftentimes we want to apply these models to specialized domains that need precise, verifiable information.
>
> **[0:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=22)** So think in terms of things like legal, medical, and technical domains.
>
> **[0:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=25)** And then there are other cases where, for example, there might be organizational knowledge that's specific to your organization and is not available in a public training set.
>
> **[0:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=35)** So how do we get that or make that data available to large language models?
>
> **[0:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=40)** Well, the answer is we do it through knowledge augmentation.
>
> **[0:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=43)** Now, there are a few different methods for augmenting knowledge.
>
> **[0:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=46)** There's fine-tuning.
>
> **[0:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=47)** Fine-tuning is the process of adapting models to specific domains by using additional training.
>
> **[0:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=54)** Now, we can also use knowledge distillation.
>
> **[0:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=57)** This is a process of transferring specialized knowledge between models.
>
> **[1:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=62)** And then we have multimodal integration.
>
> **[1:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=64)** Now, this is an augmentation technique that combines different types of data, like text, images, or audios with other modalities.
>
> **[1:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=73)** And then we also use access to structured knowledge.
>
> **[1:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=77)** In this case, we're going to leverage things like ontologies, taxonomies, and knowledge graphs to enhance our knowledge base.
>
> **[1:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=83)** So let's take a look at fine-tuning.
>
> **[1:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=85)** Fine-tuning is a process of further training, a pre-trained model, but training it on specialized data so that it can optimize its performance for the tasks that are specific to that domain.
>
> **[1:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=98)** Now, this is beneficial because it can require significantly less data than if we tried to train our full blown model for our specific domain.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=107)** And it's particularly valuable for specialized domains that have unique terminology and naming conventions.
>
> **[1:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=114)** Now, there are a few different implementation approaches.
>
> **[1:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=116)** We can adjust all model parameters, that's really drastic and quite computationally expensive.
>
> **[2:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=124)** A more efficient method or a set of methods are known as parameter-efficient fine-tuning.
>
> **[2:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=129)** We can use low-rank adaptation, which adds lightweight, trainable layers to modify the model's behavior.
>
> **[2:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=137)** So basically we're enhancing the model adding additional layers, rather than tweaking the parameters that have already been learned in the existing layers.
>
> **[2:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=146)** Now, another method is known as knowledge distillation.
>
> **[2:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=150)** Now, basically what we have here is like a student teacher model where a smaller student model learns to mimic what a more highly trained or more comprehensively trained teacher model or ensemble of models already knows.
>
> **[2:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=165)** Now, there are some significant benefits to knowledge distillation, it can definitely reduce the inference costs and the training costs.
>
> **[2:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=172)** Also, your model that you build can have a smaller memory utilization than the larger or the original teacher model.
>
> **[3:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=182)** And that's especially important if you want to do things like deploy a model to an edge, or a device, or a mobile device.
>
> **[3:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=188)** And another key thing about this is with knowledge distillation, we're preserving knowledge, but also we're making it more deployable.
>
> **[3:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=196)** We're putting it into a smaller model that makes it more accessible.
>
> **[3:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=201)** Now, there are different ways to implement this.
>
> **[3:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=203)** We can use what's known as a response-based method.
>
> **[3:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=206)** And in a response-based method, the student learns by using the teaching model's final output probabilities.
>
> **[3:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=213)** Now, there's also a feature-based approach.
>
> **[3:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=216)** Now, in that case, the student learns to mimic the internal representation that the teacher model has.
>
> **[3:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=221)** And then finally, there's relation-based.
>
> **[3:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=223)** And here the student is basically trying to learn the relationship between different examples from the teacher.
>
> **[3:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=230)** Now, multi-modal integration is an interesting one, because basically what we're trying to do is extend the model's capabilities beyond say just text, to be able to work with different types of information like audio or video.
>
> **[4:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=244)** Now, when we do multi-modal integration, we're creating a more comprehensive knowledge representation model because we're leveraging complementary information like an image plus a description of an image.
>
> **[4:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=257)** So there are different implementation approaches.
>
> **[4:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=259)** There's something known as joint embedding.
>
> **[4:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=261)** And a joint embedding space is one that aligns representations across the different modalities.
>
> **[4:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=268)** So we're representing it in the same vector space, but we're using different modalities to train that model.
>
> **[4:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=275)** We can also use fusion architectures that combine information at various stages of processing, so it's not quite as low level as the joint embedding space.
>
> **[4:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=284)** And then we can also use specialized encoders where each encoder is designed for a particular modality.
>
> **[4:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=291)** Now, ontologies, taxonomies, and actually knowledge graphs are the final way of doing knowledge augmentation.
>
> **[4:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=298)** Now, all of these are formal representations of a domain of knowledge.
>
> **[5:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=302)** Taxonomies are hierarchical classification systems.
>
> **[5:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=306)** So you can think of like a product category where you have things like electronics, and under electronics you have TVs, and phones, and car stereos.
>
> **[5:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=315)** Now, ontologies are formal domain knowledge.
>
> **[5:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=318)** They're richer than taxonomies, because these formal domain models define relationships and rules for interactions among different entities.
>
> **[5:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=327)** Now, knowledge graphs are networks of entities and relationships.
>
> **[5:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=331)** Now, knowledge graphs differ from ontologies because knowledge graphs don't necessarily follow or employ formal logic or some level of formal logic, which ontologies do.
>
> **[5:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=342)** Now, when we want to work with ontologies, we have a few different integration methods.
>
> **[5:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=348)** For example, we can use a retrieval-based method where we basically look up relevant data structures during inferencing.
>
> **[5:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=355)** We can use embedding-based methods where we convert the knowledge that's represented in say, an ontology or a taxonomy.
>
> **[6:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=362)** We map that into a vector representation, so we map that into an embedding as well.
>
> **[6:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=366)** There are also neuro-symbolic approaches where we combine like deep learning networks with symbolic reasoning.
>
> **[6:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=373)** And we can also use ontologies, taxonomies, and knowledge graphs for pre-training augmentation.
>
> **[6:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=378)** So basically we're going to include the knowledge that's in the ontology, taxonomy, or knowledge graph into our training data set.

> [!info]- Semantic Content
>
> **Definitions:** known as (4), is a  (2), is an  (2)
> **Code Keywords:** case, (2), public (1), let (1), require (1), this. (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Fine-tuning and knowledge distillation tools and techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=0)** - [Instructor] Okay, with model optimization, we oftentimes want to fine-tune and distill using specialized tools.
>
> **[0:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=8)** Now there are different tool types.
>
> **[0:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=9)** Basically we have the option of using general-purpose machine learning frameworks or specialized libraries.
>
> **[0:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=15)** And what we will use often depends on what kind of model we're working with and what kind of resources we have.
>
> **[0:22](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=22)** In particular, how much compute resource do we have available to us?
>
> **[0:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=27)** Now, fine-tuning frameworks and libraries include tools like Hugging Face transformers, and this is a really comprehensive library that has pre-trained models and fine-tuning capabilities.
>
> **[0:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=38)** And in addition, there's also the Transformer Reinforcement Learning, which is a specialized tool for reinforcement learning with human feedback.
>
> **[0:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=48)** In addition to that, we have a tool called FastChat, which is a toolkit which is really designed for serving up chatbot models.
>
> **[0:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=55)** And then we've already discussed LangChain, and something similar to LangChain is LlamaIndex.
>
> **[0:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=59)** These are higher level frameworks for building LLM applications, but they also support fine-tuning.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=66)** Now if we're interested in knowledge distillation tools, we can use general-purpose tools like PyTorch and TensorFlow.
>
> **[1:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=73)** These both have native support for implementing distillation loss functions, and they have flexible APIs for creating teacher-student architectures.
>
> **[1:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=85)** Now, NVIDIA, the company NVIDIA, provides a tool called Distiller, which is another comprehensive tool for model compression, and it supports various distillation techniques, including quantization.
>
> **[1:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=97)** And then another specialized tool is called TextBrewer, which is designed for natural language processing, and it also supports multi-teacher distillation capabilities.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=107)** Now, if you're implementing fine-tuner knowledge distillation, some best practices to keep in mind, it's best to focus on quality data rather than a larger amount of data.
>
> **[1:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=117)** You want to be sure you're employing consistent pre-processing and augmentation techniques.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=121)** This is especially the case if you trained a model and now you're doing specialized training.
>
> **[2:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=126)** In general, you want to adjust a couple of the hyper parameters when you are doing fine-tuning.
>
> **[2:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=132)** Typically we use a smaller learning rate, oftentimes it's orders of magnitude smaller, like 10 times or 100 times smaller than what might have been used in pre-training.
>
> **[2:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=141)** We also want to use smaller weight decay, and that's important for preventing over regularization.
>
> **[2:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=148)** And then, because we're working in a specialized domain, it's really important to use human evaluation to assess the quality of the models that we're building.
>
> **[2:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=157)** Now there are some problems that often show up, or can show up, with fine-tuning and distillation.
>
> **[2:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=164)** With fine-tuning, we want to watch out for catastrophic forgetting, and we also want to watch out for overfitting.
>
> **[2:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=171)** This is especially problematic if we're using relatively small data sets to do our fine-tuning.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** nvidia (2), llm (1)
> **Warnings:** watch out (2), keep in mind (1)
> **Analogies:** similar to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Ontologies, taxonomies, and knowledge graph tools and techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=0)** - [Instructor] Ont ologies, taxonomies and knowledge graphs provide formal knowledge representation.
>
> **[0:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=5)** Now, ontologies are formal explicit specifications of concepts, properties, and relationships.
>
> **[0:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=12)** Now, it also includes additional constraints and rules that use formal logic.
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=19)** The advantage of representing these constraints and rules using formal logic is that that brings with it certain guarantees that we can assume regarding how we make inferences and how we draw conclusions.
>
> **[0:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=31)** Now, taxonomies are lighter weight.
>
> **[0:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=33)** They are hierarchical classification systems that are useful for organizing concepts into categories and subcategories.
>
> **[0:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=39)** Now, knowledge graphs are most flexible in the sense that they are just network structures, and they can represent arbitrary entities and their relationships.
>
> **[0:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=48)** Now, LLMs can benefit from all of these different kinds of knowledge representation schemes because they represent knowledge that has been essentially curated by humans.
>
> **[0:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=59)** We're not depending on the statistical learning processes that are involved when training large language models.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=66)** Now there are a variety of ontology and knowledge graph tools.
>
> **[1:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=69)** If you're interested in ontology development and creating your own ontologies, then Protege is an open source ontology and editor framework.
>
> **[1:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=77)** Owlready2 is a a Python library that allows you to load, modify, and save ontologies.
>
> **[1:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=83)** OntoEdit is a collaborative ontology engineering environment.
>
> **[1:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=88)** Now, knowledge graph platforms include Neo4j, which is a NoSQL database.
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=94)** That's a graph database that has both visualization and query capabilities.
>
> **[1:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=98)** GraphDB is specifically designed for semantic databases and it uses the resource description format, or RDF.
>
> **[1:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=104)** And then there's Amazon Neptune, which is a fully managed graph database service that's available in AWS.
>
> **[1:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=111)** Now, there are also different integration frameworks.
>
> **[1:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=114)** So if we're interested in directly working with LLM, we can use LangChain's graph stores and retrieval mechanisms.
>
> **[2:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=121)** We also have a LlamaIndex, which is a tool that is comparable to LangChain.
>
> **[2:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=127)** It has support for knowledge graph indices and query engines.
>
> **[2:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=131)** And then there's also Haystack's knowledge graph and retrieval pipeline.
>
> **[2:15](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=135)** More general purpose semantic libraries include RDFLib, which is a Python library for working with RDF data, and SPARQL, which is a query language for retrieving data from knowledge graphs.
>
> **[2:28](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=148)** We also have the option of using PyGraphviz, which is a network visualization tool which is specifically designed for knowledge graphs.
>
> **[2:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=156)** Now, when it comes to implementation, we can use a knowledge retrieval architecture approach, and in that case, what we're doing is we're converting natural language queries into graph patterns.
>
> **[2:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=168)** And then we execute those graph patterns as queries against the knowledge structures, like a knowledge graph or a taxonomy or an ontology.
>
> **[2:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=176)** And then we use the results to enhance our LLM prompts.
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=180)** Now, alternatively, we can use a graph-to-text generation approach where we convert graph patterns that represent, say a taxonomy or ontology.
>
> **[3:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=190)** We basically map those into natural language, and then we use that natural language description to augment our prompt or context.
>
> **[3:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=199)** Or we can use that natural language as part of our training data set as well.
>
> **[3:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=203)** Now, some best practices for working with ontologies, taxonomies, and knowledge graphs with LLMs is, first of all, we want to start with established ontologies.
>
> **[3:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=212)** So let's work with ontologies that are already established in things like financial services industry or biomedical industries.
>
> **[3:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=220)** And when we do get started, when we're extracting knowledge out of these ontologies, we want to focus on high-value relationships for the initial implementation and build from there.
>
> **[3:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=231)** We also want to use retrieval for factual knowledge and verification.
>
> **[3:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=236)** And take advantage of the reasoning capabilities of ontologies to apply reasoning to make explicit relationships that might not be explicit.
>
> **[4:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=247)** So we want to basically do inference.
>
> **[4:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=249)** And also another good practice is we want to maintain providence.
>
> **[4:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=253)** That's important for explainability.

> [!info]- Semantic Content
>
> **Definitions:** is a  (8), is an  (1)
> **Env Vars:** rdf (2), llm (2), aws (1), sparql (1)
> **CLI Commands:** make (2), python (2), aws (1)
> **Code Keywords:** case, (1), let (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Knowledge augmentation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-knowledge-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-knowledge-augmentation?u=76281980&t=0)** (soft upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-knowledge-augmentation?u=76281980&t=7)** - [Instructor] For this challenge, I'd like you to identify three ways to formally represent domain knowledge which we can use for knowledge augmentation.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)

#### Solution: Knowledge augmentation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-knowledge-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-knowledge-augmentation?u=76281980&t=0)** - [Instructor] Three ways to formally represent knowledge for knowledge augmentation are: taxonomies, ontologies, and knowledge graphs.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Development Practices for AI Applications

> [↑ Back to Table of Contents](#table-of-contents)

#### Determining what data sources to use
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=0)** - [Instructor] Okay, now it's time to turn our attention to development practices for AI applications.
>
> **[0:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=6)** And we start with the understanding that data is the foundation of successful AI initiatives and that the quality and type of data sources we use will impact model accuracy, relevance and business value.
>
> **[0:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=18)** Now, as an example, I'd like to consider how to identify data sources for a retail industry AI application.
>
> **[0:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=25)** Now, we'll look at various types of data, like from internal sources versus external sources, but across those dimensions, we want to keep in mind several global issues.
>
> **[0:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=34)** And these include things like customer privacy, seasonal patterns and omnichannel customer behavior.
>
> **[0:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=41)** Now, we often start with internal data sources.
>
> **[0:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=44)** Now, these include things like enterprise systems, such as point-of-sale systems, enterprise resource planning systems and customer relationship management systems.
>
> **[0:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=54)** These applications are rich in data about transactions and customer histories.
>
> **[0:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=58)** We also want to work with website analytics.
>
> **[1:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=60)** They reveal browsing patterns and help us understand conversion funnels.
>
> **[1:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=65)** We should also look into inventory management systems.
>
> **[1:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=69)** These are systems that track product lifecycles and supply chain data.
>
> **[1:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=74)** Now, also, we don't want to forget unstructured data internally.
>
> **[1:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=78)** These include things like employee knowledge bases that capture institutional expertise on a variety of topics.
>
> **[1:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=85)** We'll also, more likely than not, depend on some external data sources, and these include areas like market intelligence.
>
> **[1:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=92)** Now, third-party providers can offer things like competitive pricing and trend data.
>
> **[1:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=97)** We also want to consider weather, for example, whether APIs may help predict demand fluctuations for seasonal merchandise.
>
> **[1:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=104)** Also, social media sentiment can provide realtime or near realtime feedback on products and campaigns.
>
> **[1:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=111)** Census and demographic data can add additional context to information around store performance metrics.
>
> **[1:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=119)** Now, when we're thinking about data sources, we don't want to think just about the data as a static thing, but also we want to think about data as it moves through our organization and our processing pipelines.
>
> **[2:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=130)** And this is where DevOps, or development operations, integration practices come in.
>
> **[2:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=136)** We want to be sure to implement automated data quality checks in our continuous integration/continuous deployment pipelines.
>
> **[2:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=143)** We also want to set up monitoring for data drift in datasets, like product catalogs and customer behavior.
>
> **[2:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=149)** And the reason we do this is that the characteristics of these datasets will change over time.
>
> **[2:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=154)** We also want to set up data source connection templates for quick integration.
>
> **[2:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=159)** This is especially the case when we're working with a large number of databases and APIs.
>
> **[2:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=163)** We also want to document source characteristics and limitations in knowledge repositories.
>
> **[2:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=168)** And then finally, we want to deploy feature stores, that'll help standardize data access across different AI applications.
>
> **[2:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=175)** Now, there's some best practices to keep in mind when we're determining data sources to use.
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=180)** First, we want to start with high-value accessible internal data sources.
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=185)** These are generally the easiest to access and typically the easiest to understand in depth because we have in-house expertise.
>
> **[3:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=193)** We also want to validate external data with small proof-of-concept systems and integrations.
>
> **[3:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=199)** From a process perspective, we want to establish clear data ownership and governance policies.
>
> **[3:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=205)** And we want to build modular pipelines that can adapt to changing requirements for processing our various data sources.
>
> **[3:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=212)** And finally, we want to be sure we have the ability to continuously measure the business impact of each data source we're employing.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), static (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** keep in mind (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Applying data quality checks
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=0)** - [Instructor] Once we've identified data sets, it's time to turn our attention to data quality.
>
> **[0:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=5)** Now let's continue with our examples of working with retail industry data.
>
> **[0:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=10)** Now, there are critical dimensions that we want to keep in mind.
>
> **[0:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=13)** They are accuracy, for ensuring that data values match real world conditions.
>
> **[0:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=18)** We want to think about completeness.
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=19)** That is verifying that all required data elements are actually present in our data sets.
>
> **[0:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=24)** We also want to maintain consistency, that is, in particular, data integrity across systems.
>
> **[0:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=29)** We also want our data to be timely, so that we have fresh data for making decisions.
>
> **[0:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=34)** And we want to make sure that we're not dealing with any duplicates that might distort our analysis.
>
> **[0:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=40)** Now the kinds of checks, the specific kinds of checks that we will be doing, will vary slightly depending on the type of data or the focus of the data set that we're working on.
>
> **[0:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=49)** So let's look at an example of a product catalog, and what kind of quality checks we would have there.
>
> **[0:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=54)** We want to think in terms of format validation.
>
> **[0:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=57)** For example, do all the stock keeping units or SKUs follow a standard pattern?
>
> **[1:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=62)** We want to make sure our attributes are complete so that we have all the required fields associated with a product.
>
> **[1:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=69)** We'll also want to think in terms of category consistency.
>
> **[1:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=72)** So for example, if we have a product taxonomy, we want to make sure that taxonomy is consistently applied across all of our products.
>
> **[1:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=80)** If we're working with images, we'll want to make sure that the resolution and presentation standards that we may have are actually being met by all the images that we're dealing with.
>
> **[1:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=89)** We also want to make sure that we are consistent across channels, so we want to have checks for cross-system synchronization as well.
>
> **[1:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=97)** Now when we're dealing with transaction data, again, we have slightly different specific data quality checks, but they follow similar patterns.
>
> **[1:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=106)** So for example, we want to have price accuracy.
>
> **[1:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=109)** So for example, we may want to compare recorded prices against whatever our authorized pricing tables are.
>
> **[1:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=115)** We also want to verify that discount code calculations are correct, and we want to ensure all items are properly recorded when we're doing market basket analysis.
>
> **[2:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=127)** Now, temporal validation is important as well.
>
> **[2:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=129)** We want to make sure that our transaction times, for example, match store hours.
>
> **[2:14](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=134)** And then finally, we may want to look at payment reconciliation to crosscheck payment methods against other totals, to make sure we're not missing any transactions.
>
> **[2:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=143)** Now, when it comes to customer-specific data quality checks, you know, here are some ones we are probably familiar with, things like address verification.
>
> **[2:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=151)** You know, for that we can validate against postal standard records.
>
> **[2:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=155)** We want to make sure that we don't have duplicate records for a single customer.
>
> **[2:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=161)** So it's important to identify and merge duplicate customer profiles.
>
> **[2:45](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=165)** We also want to make sure that we're grouping our customers consistently.
>
> **[2:50](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=170)** So we want to make sure that we maintain appropriate groupings from a a customer segmentation perspective.
>
> **[2:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=175)** And then we want to verify, say, opt in, opt out, accuracy of different kinds of preferences.
>
> **[3:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=182)** And then finally, we want to make sure our contact information is up to date by confirming email addresses or phone numbers.
>
> **[3:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=189)** Now, when we're implementing customer data quality, we want to implement real-time validation at data entry points.
>
> **[3:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=198)** It's often least expensive and least problematic to implement data quality controls at the point of data entry.
>
> **[3:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=205)** We also want to use scheduled batch validation when we're working with large comprehensive data sets.
>
> **[3:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=212)** We also want to implement exception reporting.
>
> **[3:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=214)** And it's important not just to report on exceptions or errors that are found, but we want to make sure we have clear ownership about who is assigned to address those problems.
>
> **[3:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=224)** And then finally, we want to have quality trend monitoring.
>
> **[3:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=227)** This is important to help us identify any systematic issues that might be creeping into our pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** make (12)
> **Code Keywords:** finally, (3), let (2), continue (1)
> **Analogies:** for example (5)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Building models
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=0)** - [Instructor] AI Model Development spans both predictive and generative AI approaches.
>
> **[0:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=6)** For example, with Predictive models, we're dealing with algorithms and models that do things like classify images, or calculate regressions or cluster data, whereas with Generative models, we're actually generating things like text, image or code.
>
> **[0:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=24)** Now, each of these approaches requires specific development practices, so let's take a look at first, Predictive models.
>
> **[0:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=32)** Now, we'll look at Classification first.
>
> **[0:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=34)** Classification models categorize data into predefined classes or labels, so some retail examples where we may use classification models include things like fraud detection and customer segmentation.
>
> **[0:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=46)** Now, some key considerations here as we're working with the data are, are there class imbalances within our training data?
>
> **[0:53](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=53)** For example, in the case of fraud detection, oftentimes, we have to deal with the fact that there are relatively few numbers of fraudulent transactions and many legitimate transactions.
>
> **[1:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=64)** That's an example of a class imbalance.
>
> **[1:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=66)** We also want to think in terms of how we evaluate different models.
>
> **[1:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=71)** For example, we can use metrics like precision, recall, a combination of precision and recall called F1-score or confusion matrices.
>
> **[1:20](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=80)** Now, another type of predictive model are Regression models.
>
> **[1:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=84)** Now, Regression models predict continuous numerical values, rather than categories.
>
> **[1:29](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=89)** Now, in retail, some examples where we may use Regression models include things like sales forecasting, inventory optimization, and pricing.
>
> **[1:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=98)** Now, there are different model types even within the family of Regression models, and these include linear, polynomial, decision tree and neural network models.
>
> **[1:47](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=107)** When we're evaluating, we often use things like Root Mean Squared Errors or Mean Average Error or the R-squared metric.
>
> **[1:54](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=114)** Another type of predictive model are Clustering models.
>
> **[1:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=118)** Now, we use Clustering models to discover natural groupings within data without depending on predefined labels, so we don't need a separate training set when we're working with Clustering.
>
> **[2:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=128)** Now, in the retail world, we may use Clustering for doing things like market basket analysis or customer segmentation.
>
> **[2:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=136)** Now, there are a variety of Clustering algorithms.
>
> **[2:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=139)** Some of the most commonly used are K-means, hierarchical clustering algorithms in general and DBSCAN.
>
> **[2:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=146)** Now, some key challenges to keep in mind are things like determining the optimal number of clusters.
>
> **[2:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=152)** Now, when we're developing Predictive models, we want to plan for data preparation, so cleaning, normalizing, and performing feature engineering.
>
> **[2:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=160)** We want to think in terms of model selection, like which algorithm is going to work best with our problem?
>
> **[2:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=166)** We'll have to plan for training and validation.
>
> **[2:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=168)** That is validating the model or cross-validating the model.
>
> **[2:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=171)** And one of the things we want to watch out for is what's known as over-fitting, or essentially like memorizing the training dataset and not really generalizing to the broader dataset in general.
>
> **[3:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=181)** We also want to plan for time for hyperparameter tuning so that we can optimize model parameters, and we want to think in terms of deployment and how we're going to integrate our models with other business systems.
>
> **[3:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=193)** And then, of course, we need to think in terms of monitoring.
>
> **[3:16](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=196)** This is both in terms of application or software performance, but also in terms of model performance, and watching for things like model drift.
>
> **[3:25](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=205)** Okay, so that covered our discussion of predictive AI models.
>
> **[3:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=210)** Now let's think about Generative AI Applications and development.
>
> **[3:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=214)** Again, Generative AI focuses on generating new content, and that new content is generated based on patterns that the model learned from its training data.
>
> **[3:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=224)** Now, we often work with Foundation models, and these are used to build multiple types of applications.
>
> **[3:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=229)** For example, large language models or LLMs are often used for text generation, sentiment analysis, and named-entity recognition.
>
> **[3:57](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=237)** Image and vision models are used for image generation, as well as for object detection, and multi-modal foundation models learn from multiple types of unstructured data, for example, a combination of text and images.
>
> **[4:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=251)** Now, when it comes to Developing Generative AI Applications, we want to think in terms of API integration, 'cause oftentimes we're using third-party models, so you can think of, for example, OpenAI's ChatGPT, or Anthropic's Claude or Google's Gemini.
>
> **[4:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=266)** We also need to pay attention to prompt engineering, which is essentially the art or the practice of crafting effective instructions to get the content generated that we're actually looking for.
>
> **[4:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=278)** We also may want to fine-tune models, and this is the process of adapting foundation models or our starting models to our specific domain.
>
> **[4:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=288)** Now, a common practice for complementing what models already know or what models have learned is to use RAG, or retrieval-augmented generation.
>
> **[4:58](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=298)** This allows us to combine Generative models with other knowledge bases like the web, for example.
>
> **[5:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=304)** And then we also want to consider knowledge augmentation where we use additional data sources like ontologies and taxonomies to complement what was learned in the model during its training.
>
> **[5:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=317)** Now, some broadly cross-category implementation considerations to keep in mind are data privacy and security, both in model training and in deployment.
>
> **[5:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=326)** Ethical considerations, like bias, fairness, and the ability to explain or being transparent about how decisions were made.
>
> **[5:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=333)** We also want to think about cost, and cost often comes down to computational resources.
>
> **[5:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=338)** Now, sometimes we may do some work on premises, sometimes we may do some work in cloud infrastructure, so we want to make sure that we have mechanisms in place for helping us track costs regardless of what infrastructure we are using.
>
> **[5:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=352)** We also want to be able to maintain our model, and that includes things like retraining on a regular basis to avoid the impact of data drift.
>
> **[6:01](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=361)** And we also need to be aware of team skills.
>
> **[6:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=363)** It's obvious that AI is changing at a rapid pace, new tools are constantly being developed, and people, practitioners are gathering insights into how to use these tools, so it's important we help our team members keep up the skills in data science engineering, as well as in domain expertise.
>
> **[6:21](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=381)** And then finally, we want to be sure that we are integrating with existing systems and workflows.

> [!info]- Semantic Content
>
> **Analogies:** for example (7)
> **Code Keywords:** let (2), for. (1), finally, (1)
> **Warnings:** keep in mind (2), watch out (1), be aware (1)
> **Env Vars:** dbscan (1), api (1), rag (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Model assessment
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=0)** `- [Narrator] After we've built our models, we want to evaluate their quality.
>
> **[0:03](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=3)** Now we're going to focus here in this discussion on generative AI models.
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=7)** Now we want to assess the quality across multiple dimensions.
>
> **[0:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=10)** And these include things like output relevance.
>
> **[0:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=13)** So for example, does the content that was generated actually address this specific prompt that was provided?
>
> **[0:19](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=19)** We also want to ensure that the content that's generated is both truthful and correct.
>
> **[0:24](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=24)** Now, from a rhetorical perspective, we want to make sure the content is logically structured and consistent.
>
> **[0:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=32)** We think of that in terms of coherence.
>
> **[0:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=34)** And then finally, we want to make sure the content is fair, unbiased, and appropriate.
>
> **[0:38](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=38)** Now, there are different evaluation methodologies that we can use.
>
> **[0:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=42)** Obviously we want to do human evaluation.
>
> **[0:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=44)** Now this can range from say, a panel of experts that is reviewing contents to a set of individuals who might be considered typical users, and getting their feedback.
>
> **[0:55](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=55)** For large volumes of content generation, we might want to use automated metrics.
>
> **[1:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=60)** Now these metrics will vary based on the type of content that's being generated.
>
> **[1:04](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=64)** So for example, when we're dealing with natural language content, we might use automated metrics like the bilingual evaluation understudy metric, which is used for evaluating the quality of machine learning translation.
>
> **[1:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=77)** There's also a metric for evaluating document summaries, or tech summaries called recall oriented understudy for gisting evaluations.
>
> **[1:27](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=87)** And then there's also a perplexity measure which evaluates the predictive capability of language models.
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=93)** We can also use A/B testing for comparing outputs with different versions of our models.
>
> **[1:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=100)** And we may have reference-based evaluation where we compare our content against some kind of gold standard that exists either for that particular domain or it's just some industry standard.
>
> **[1:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=112)** And then we can also use adversarial testing methods.
>
> **[1:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=116)** And those are methods that probe for weakness or failures.
>
> **[1:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=119)** Relevance and task completion is another broad category of quality metrics that we want to look for.
>
> **[2:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=125)** Now, prompt adherence basically assesses how well outputs follow instructions.
>
> **[2:11](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=131)** Task completion rate is a measure of the percentage of prompts that are successfully addressed while context retention is a measure of how well we're able to main focus throughout longer outputs.
>
> **[2:23](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=143)** And then there is intent recognition, and that's basically being able to correctly identify underlying user needs.
>
> **[2:30](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=150)** And then edge case handling, or how well do we perform on unusual or complex tasks.
>
> **[2:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=156)** Now, output quality characteristics include some that we've already discussed.
>
> **[2:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=160)** For example, coherence or the logical flow and consistency within the generated context.
>
> **[2:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=166)** As well as grammar and fluency.
>
> **[2:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=168)** Is the content we're generating linguistically correct?
>
> **[2:51](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=171)** Is it readable?
>
> **[2:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=172)** And then there's also more subjective measures like stylistic appropriateness.
>
> **[2:56](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=176)** You know, does the tone match what the audience expects?
>
> **[3:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=180)** Are there repetitive patterns, or formulaic responses that we want to avoid?
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=185)** And then finally, we want to think in terms of creativity.
>
> **[3:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=188)** Does the content represent appropriate originality without hallucinating or introducing any kind of other quality issues?
>
> **[3:17](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=197)** Now, when we're implementing a quality evaluation framework, we want to establish clear evaluation criteria before deployment.
>
> **[3:26](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=206)** We also want to combine automated metrics with human review process.
>
> **[3:31](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=211)** It's important to implement continuous monitoring and have feedback loops so that we're able to actually improve the quality of the model.
>
> **[3:37](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=217)** Now, to do this, we'll have to maintain benchmark data sets, and that will allow us to perform consistent comparisons across versions of our model.
>
> **[3:46](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=226)** And we want the ability to track quality metrics over time.
>
> **[3:49](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=229)** That's going to help us identify and spot any trends.
>
> **[3:52](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=232)** And then finally, we want to be sure we address quality issues through model refinement and prompt optimization.
>
> **[3:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=239)** Both of those are important factors for improving the ultimate output of our generative AI model.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), for. (1), this, (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)

#### Challenge: Development practices
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-development-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-development-practices?u=76281980&t=0)** (light music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-development-practices?u=76281980&t=7)** - [Instructor] What are the two broad categories of AI models that require different sets of development practices?

> [!info]- Semantic Content
>
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### Solution: Development practices
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-development-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-development-practices?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-development-practices?u=76281980&t=7)** - [Instructor] The two types of AI models that require different development practices are known as predictive AI and generative AI.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on finishing this course.
>
> **[0:02](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=2)** As you think about continuing your education process, I would suggest that you learn about data quality assessment and data engineering.
>
> **[0:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=10)** Now, if you'd like a suggestion, the Complete Guide to Generative AI for Data Analysis and Data Science course is ideally suited to help you understand how to perform data quality assessments, how to use generative AI tools to generate code for data quality assessments, and then also, it provides a foundation in statistical principles to help you understand how we do data quality assessments.
>
> **[0:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=35)** Now, many of the techniques covered in the Complete Guide to Generative AI for Data Analysis and Data Science are also helpful for building data engineering skills and developing data engineering pipelines.
>
> **[0:48](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=48)** Now, along with that, I would suggest finding other courses in the catalog on data engineering and machine learning engineering with particular attention to building ML engineering pipelines.
>
> **[0:59](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=59)** I'd also suggest learning about tools for building generative AI applications with a focus on LangChain in particular, and there are multiple courses in the catalog that can help you learn LangChain.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


## Instructor

- [[Dan Sullivan]]

## Skills Covered

- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Data Preparation
- Feature Engineering

## Path Context

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[MLOps Tools- MLflow and Hugging Face]] | **5 of 10** | [[MLOps and Data Pipeline Orchestration for AI Systems]] →

### In [[Working with Data- Collecting, Processing, and Storing Data for AI]]
← [[Strategic Data Collection, Modeling, and Quality Management for AI Systems]] | **3 of 6** | [[Secure Data Management for AI Implementation]] →

## Appears In

- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Working with Data- Collecting, Processing, and Storing Data for AI]]

## Related Courses

_Courses sharing skills:_

- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[GraphRAG Essential Training]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Knowledge Graph Data Engineering for Generative AI Use Cases]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)

---

[↑ Back to top](#)