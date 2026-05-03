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
created: 2026-05-03
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
  - [Welcome to this course](#welcome-to-this-course)
  - [What you should know](#what-you-should-know)
- [**1. Data Preparation for Predictive AI**](#1-data-preparation-for-predictive-ai) (9 videos)
  - [Data exploration and initial quality assessment](#data-exploration-and-initial-quality-assessment)
  - [Detecting and managing missing data](#detecting-and-managing-missing-data)
  - [Detecting and managing outliers](#detecting-and-managing-outliers)
  - [Challenge: Assess data quality of a dataset](#challenge-assess-data-quality-of-a-dataset)
  - [Solution: Assess data quality of a dataset](#solution-assess-data-quality-of-a-dataset)
  - [Feature engineering: Scaling and normalizing data](#feature-engineering-scaling-and-normalizing-data)
  - [Feature engineering: Categorical encodings](#feature-engineering-categorical-encodings)
  - [Challenge: Apply feature engineering to a dataset](#challenge-apply-feature-engineering-to-a-dataset)
  - [Solution: Apply feature engineering to a dataset](#solution-apply-feature-engineering-to-a-dataset)
- [**2. Data Preparation for Generative AI**](#2-data-preparation-for-generative-ai) (6 videos)
  - [Structured vs. unstructured data](#structured-vs-unstructured-data)
  - [Vector representations of unstructured data](#vector-representations-of-unstructured-data)
  - [Tools for generating vector representations](#tools-for-generating-vector-representations)
  - [Similarity between vector representations](#similarity-between-vector-representations)
  - [Challenge: Choosing vector generation tool](#challenge-choosing-vector-generation-tool)
  - [Solution: Choosing vector generation tool](#solution-choosing-vector-generation-tool)
- [**3. Data Quality Assessment**](#3-data-quality-assessment) (4 videos)
  - [Elements of data quality: Consistency, accuracy, and completeness](#elements-of-data-quality-consistency-accuracy-and-completeness)
  - [Statistical techniques for data quality assessment](#statistical-techniques-for-data-quality-assessment)
  - [Challenge: Data quality](#challenge-data-quality)
  - [Solution: Data quality](#solution-data-quality)
- [**4. Data Augmentation for Generative AI**](#4-data-augmentation-for-generative-ai) (6 videos)
  - [Overview of data augmentation](#overview-of-data-augmentation)
  - [Text perturbation and style transfer](#text-perturbation-and-style-transfer)
  - [Retrieval-augmented generation (RAG)](#retrieval-augmented-generation-rag)
  - [Introduction to LangChain for RAG](#introduction-to-langchain-for-rag)
  - [Challenge: Understanding components of RAG](#challenge-understanding-components-of-rag)
  - [Solution: Understanding components of RAG](#solution-understanding-components-of-rag)
- [**5. Knowledge Augmentation for Generative AI**](#5-knowledge-augmentation-for-generative-ai) (5 videos)
  - [Overview of knowledge augmentation](#overview-of-knowledge-augmentation)
  - [Fine-tuning and knowledge distillation tools and techniques](#fine-tuning-and-knowledge-distillation-tools-and-techniques)
  - [Ontologies, taxonomies, and knowledge graph tools and techniques](#ontologies-taxonomies-and-knowledge-graph-tools-and-techniques)
  - [Challenge: Knowledge augmentation](#challenge-knowledge-augmentation)
  - [Solution: Knowledge augmentation](#solution-knowledge-augmentation)
- [**6. Development Practices for AI Applications**](#6-development-practices-for-ai-applications) (6 videos)
  - [Determining what data sources to use](#determining-what-data-sources-to-use)
  - [Applying data quality checks](#applying-data-quality-checks)
  - [Building models](#building-models)
  - [Model assessment](#model-assessment)
  - [Challenge: Development practices](#challenge-development-practices)
  - [Solution: Development practices](#solution-development-practices)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to this course](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/welcome-to-this-course?u=76281980&t=0)** - [Dan] As the demand for AI systems increases, so does the demand for professionals who can work with data sources, engineer features, and augment knowledge sources for training AI. Join me as I teach you how to build the data foundations for AI applications. I do this by showing you how to collect, analyze, engineer, and augment data that is used to train and supplement AI systems. My name is Dan Sullivan, and I'm a data architect and AI practitioner with decades of experience designing, implementing, and maintaining complex data-driven enterprise applications. Let's get started with developing skills needed to create the data foundations for building AI applications.

> [!info]- Semantic Content
>
> **Speakers:** - [dan] (1)

#### [What you should know](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/what-you-should-know?u=76281980&t=0)** - [Instructor] For the purpose of this course, I make some assumptions about what I think you have been exposed to. For example, I assume that you're familiar with planning AI initiatives. Now, if this is a new area for you, I suggest you review the Data Planning, Strategy, and Compliance for AI Initiatives course. Also, I assume you have some exposure to basic statistical concepts, things like mean and median. And I also assume that you have some experience working with various types of data in different organizations and enterprises. So if you've worked with spreadsheets or [[Databases]], then you have plenty of experience with regards to working with data. And then also, I assume you are familiar with using [[Generative AI Tools]]. So if you've worked with say, Open AI's Chat GPT or [[Google]]'s [[Gemini]], then you have sufficient experience with generative AI tools for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI Tools]] (2), [[Databases]] (1), [[Google]] (1), [[Gemini]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** gpt (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Data Preparation for Predictive AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Data exploration and initial quality assessment](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=0)** - [Instructor] Data exploration is a critical first step before any modeling or analysis should happen. And the reason we do this is because data exploration helps us reveal hidden patterns, relationships, and potentially anomalies in our datasets. Now we use data exploration to identify [[Data Quality]] issues that could undermine our AI model's performance. But it's also useful because data exploration can inform both [[Feature Engineering]] and feature selection decisions. And then the overall benefit of data exploration is that it really helps us reduce project risks. And it does this by exposing problems early in the development cycle. Now some common data quality issues to watch out for are missing data. Now we see this in the [[Forms]] of incomplete records, for example, records that have empty fields or null values. We can also have issues with inconsistent formats. So for example, we might have dates in different formats. So some dates might be in year month day format while others are in day month year format. We want to make sure that we have consistent formatting. Also, we want to watch out for units of measure to make sure that we are using a consistent unit of measure on our various metrics. Now duplicate records can be a subtle problem because they can really skew the analysis if we have duplicate records, and they can be sometimes difficult to find. Outliers are another data quality issue we have to be careful with. Now outliers are extreme values. Now these extreme values could be, for example, due to a measurement error,
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=93)** or they could be a legitimate rare event. So it's important to understand which of those two types of outliers we're dealing with. And then finally, we sometimes have encoding problems. And these are fairly low level issues, for example, with regards to the character sets that we're using. So we might have problems with character set issues or special characters or encoding matches. And again, we just want to watch out for those. Now there are several key components of data exploration. The first is descriptive [[Statistics]]. Now we're going to use descriptive statistics to provide us with key metrics like mean, median, range, and quantiles. We also want to make sure we do distribution analysis. That helps us understand the data shape as well as the spread of the data and the central tendencies in our data. Missing value assessment is important because that can help us quantify and identify any patterns related to incomplete data. Now outlier detection identifies the extreme values that may require special handling, and that special handling could include, for example, eliminating records that we determine include measurement errors, or adjusting values for legitimate outlier values. And then correlation mapping is another key component of data exploration. And here, what we're trying to do is discover relationships between variables. So for example, variables that highly correlate with each other may provide duplicate information. And we could eliminate one of those variables in our feature selection process. Now, we want to use several techniques when we're doing data exploration. Visual exploration is really useful
>
> **[3:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=186)** because it uses things like histograms, scatter plots, box plots, and correlation matrices to help us quickly identify key characteristics of the distribution of our data. We also want to use automated profiling tools like [[Pandas (Software)|Pandas]] Profiling or Great Expectations, which are widely used in [[Python (Programming Language)|Python]]. Now sampling techniques can help us be more efficient and do our exploration faster when we're working with very large datasets. Also, data type verification can help us. This is especially important if there's a risk of misinterpreting, say, numeric data for categorical data. And then finally, we want to use tools like analysis notebooks like Jupyter Notebooks. They really help us do iterative investigations, and they're also useful for documenting our processes and documenting our findings. Now a common workflow that we find with data quality assessment and data exploration is that we begin with automated profiling to get quick insights across all the variables. And we follow that up with investigations into potential issues that we identify thanks to the automated profiling. And as we're investigating, we want to make sure we're documenting our findings, and we want to include data quality metrics because that's really useful when we are communicating with our stakeholders. And speaking of communicating with stakeholders, one of the key ways to do that is with data quality reports. So we want to make sure that we are creating reproducible data quality reports that we can share and also use over time for monitoring the trends in data quality over time. And then finally,
>
> **[4:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/data-exploration-and-initial-quality-assessment?u=76281980&t=279)** we want to make sure we develop data quality remediation plans, and we want to make sure we're developing those and implementing those before we proceed with building models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (9), [[Statistics]] (2), [[Feature Engineering]] (1), [[Forms]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** make (7), find (2), python (1)
> **Analogies:** for example (6)
> **Warnings:** watch out (3), be careful (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Detecting and managing missing data](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=0)** - [Instructor] Now when we're interested in detecting and managing missing data, we want to start with a dataset overview analysis. Now, in this process, we're going to do things like calculating key [[Metadata]] about our data. These include metrics like record count, column count and the time range that our dataset covers. We also want to identify data types across the different columns, that will inform the kinds of [[Statistical Analysis]] that we will do. We also want to determine the overall data completeness and come up with some quality metrics. And when we do this, basically what we're doing is we're establishing a baseline for understanding the dataset. And in particular, we want to understand the scope or the range of information that's covered and the limitations with regards to missing data. Now, when we're doing missing data analysis, we want to start by quantifying missing values across each column. And for that, we want to get counts and percentages. We also want to identify records with multiple missing fields. Those are candidates for possible exclusion because it indicates there's some potentially significant problem with those records. We also want to analyze patterns of missingness. This will help us detect potential problems, either with the source system or with the way we're processing data. We also want to provide visual representations of data completeness across the dataset to help us identify issues. And we want to be sure that we flag critical columns that have excessive missing data because we may need to do additional work with those columns. Now, depending on the data type that we're working with,
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=93)** we may have different operations that we perform. So for example, with numeric columns, we want to calculate core [[Statistics]], like the mean, which is the average, the median, which is the sort of the halfway mark in the values if you order the values from smallest to largest, the median is the halfway mark. Median and mean are used in different cases, mean we use when we're working with normally distributed or bell-shaped curve data, median we work with when we are working with non-normally distributed data. Also, when we're working with normally distributed data, we often want to calculate things like the standard deviation. And in any case, we always want to think about the range, which includes the min and maximum values as well. Now, we also want to identify outliers, and we can often use multiple detection methods. These include things like C-score and interquartile range. We also want to understand or analyze distribution characteristics. These include things like skewness and the coefficient of variation. We'll also compute quantiles, that'll help us understand the data spread and the concentration of different data points. And this is all useful because it helps us provide a statistical foundation for data normalization decisions. Now, when we're working with categorical data, we're going to work with different kinds of statistics. First of all, we want to determine the frequency distributions for all of our categorical variables. And we want to identify the most common values and their prevalence in our datasets. Now, we want some simple statistics here.
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=185)** We want to calculate things like the unique value counts, 'cause that'll help us understand cardinality. Cardinality refers to the number of unique values or different values that we can have. And we often use the term low cardinality to refer to columns or features that have relatively few unique values, and high cardinality to refer to features that have a large number of unique values. We also want to detect things like empty strings and make sure that we distinguish them from explicit null values in our categorical variables. And we want to watch for potential inconsistencies in our category naming conventions as well. Now, correlation analysis is another important operation. Here what we're trying to do is map the relationships between numeric variables to identify any dependencies. And we also want to highlight strong correlations because that can indicate redundant features. It often helps to eliminate one or more redundant features when we're building machine learning models. Now, correlation analysis is also useful for helping us detect counterintuitive correlations, 'cause again, this might be a signal that we either have [[Data Quality]] issues in our source system or in our data-processing pipeline. And in general, basically this kind of correlation analysis can help support feature selection decisions. And correlation analysis also helps provide insights into business relationships between different metrics that may not necessarily have been obvious to us before. Now, after we're done doing missing data analysis, we want to essentially end up with a knowledge base
>
> **[4:40](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-missing-data?u=76281980&t=280)** that we can share. So we want to, for example, be able to deliver a description of the overall missing data quality and be able to score that based on things like completeness and consistency. We also want to provide specific recommendations for handling missing values, and we want to suggest appropriate normalization methods. And we do that based on distribution analysis. And then finally, we want to be able to recommend [[Feature Engineering]] opportunities. And these basically kind of show themselves based on the statistical analysis that we have done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Statistical Analysis]] (2), [[Data Quality]] (2), [[Metadata]] (1), [[Feature Engineering]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Detecting and managing outliers](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=0)** - [Instructor] One of the steps in [[Data Preparation]] is understanding outliers. Outliers represent atypical records that deviate from normal patterns. Now, if we don't address these, we are at the risk that outliers can skew our analysis and lead to poor quality models and ultimately to poor decisions. So what we want to do is employ a comprehensive approach that captures potentially different types of outliers that any one single method might miss. So for example, there's different kinds of outliers that we want to detect. There could be data errors. For example, we might have [[Data Quality]] issues in our point of sales systems. There's also the potential for fraud. And of course, sometimes outliers are legitimate, but they just happen to be unusual transactions. So we need to be able to identify all of these different scenarios. Now, there are a variety of detection methods. One is known as the Z-score method, and that basically identifies values that are beyond three standard deviations from the mean. So that works well with normally distributed data. There's the modified Z-score. Now the modified Z-score uses a median-based approach rather than using mean. And this works well when we need to detect extreme values and data that's not normally distributed. The IRQ method or interquartile range flags values outside the 1.5 times the interquartile range boundaries. Now, DBSCAN, or density-based spatial clustering of applications with noise, detects multi-variate outliers, and that works across multiple dimensions. Now, we may also want to use domain-specific rules,
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/detecting-and-managing-outliers?u=76281980&t=93)** and this is important when we want to apply domain-specific knowledge to identify unusual transactions. So some examples in a retail domain include unusually high quantities. So for example, there might be transactions with more than 20 items per product. We also have the potential for excessive unit prices. So for example, we might want to look for [[Microsoft Products|products]] priced above $500, which might exceed typical retail price ranges. We also might want to look for high transaction totals. Say for example, totals exceeding $2,000 thresholds. Or inconsistent pricing. And we can detect that when the total price doesn't align with the quantity times the unit price. So those are just some examples of a domain-specific set of rules for detecting anomalies. Now, when we're done with our base analysis, we want to be able to visualize and report our findings. So some things to keep in mind is we want to be able to generate a comprehensive outlier report with all of our flagged transactions. Now we can use visualizations like creating box plots for showing distribution and outlier boundaries for key metrics. We can also produce histograms with IQR bounds, clearly marked for visual analysis. And we can rank our transactions by their outlier score. And also we can output detailed [[Statistics]], for example, on the percentage of outliers found by each method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Data Quality]] (1), [[Microsoft Products|Products]] (1), [[Statistics]] (1)
> **Analogies:** for example (6)
> **Env Vars:** irq (1), dbscan (1), iqr (1)
> **Versions:** 1.5 (1)
> **Definitions:** known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Assess data quality of a dataset](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-assess-data-quality-of-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-assess-data-quality-of-a-data-set?u=76281980&t=0)** - [Instructor] For this challenge, I want you to consider how you would detect outliers in a feature that does not have a normal distribution. Which outlier detection method would you use?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Assess data quality of a dataset](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-assess-data-quality-of-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-assess-data-quality-of-a-data-set?u=76281980&t=0)** - [Instructor] We would use the modified z-score to detect outliers in a feature that doesn't have a normal distribution. And we do that because this technique uses the median instead of the mean, which is more appropriate for use with normally distributed data.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Feature engineering: Scaling and normalizing data](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=0)** - [Instructor] Sometimes we need to scale and normalize our data. This is because features with different ranges can distort model training and the predictions those models make. Now, many machine learning [[Algorithms]] rely on distance calculations, so that requires that we work with comparable scales. And this is because we want to prevent large-magnitude features from really dominating the decisions that are made. Consider, for example, house sales. Now, the price of a house sale might be in the order of hundreds of thousands of dollars. That's one feature. Other features might be the number of bedrooms, which might be three, four, five, or so on. So the scales can really vary widely between different features. In addition, some algorithms will converge faster when we work with standardized and normalized data. And also, regularization techniques, which we use to prevent overfitting, work better when features are scaled. There are several coming scaling techniques. Min-max scaling transforms features into ranges that typically range from zero to one or from negative one to one. Standard scaling or Z-score scaling centers the values around a mean of zero with a standard deviation of one. Robust scaling ignores outliers from the calculation of the mean and standard deviation, and they're resistant to outliers. And then finally there's log transform. Now, log transform works well with handling skewed distributions because it reduces the impact of extreme values by taking the log of data points. Let's look a little more deeply at some of these. Now, with min and max scaling,
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=93)** the formula is basically the scaled value is equal to whatever our data point value is minus the minimum of all of the values in that range divided by the range itself, the difference between the max and minimum values. Now, what's nice about min-max scaling is it preserves relationships among the original data points. And it works best when we need bounded inputs, like for example, when we're working with [[Neural Networks]]. Now, one limitation is that min-max scaling is sensitive to outliers. Where we might use min-max scaling is, for example, is when we're normalizing prices. So we might have retail prices for [[Microsoft Products|products]] that might range from, say, $100 to $500, and what we really want to do is have them scaled on a scale of zero to one. Now, standard scaling or Z-score scaling, we use a formula, and it involves some Greek letters, so I'll walk through these each individually. Our scaled value is our standardized value or our Z-score value. And basically, we start with our original value, and we subtract the mean of the entire distribution. And then we divide it by the standard deviation of the distribution. And this basically gives us a new distribution where the mean is zero and the standard deviation is one. Now, keep in mind that Z-scores are influenced by outliers, and it does not produce a bounded range. Now, robust scaling is an alternative, and it uses median and interquartile ranges. And its formula is, we calculate the scaled value by taking the original data point, subtracting the median, and then dividing by the interquartile range. Now, what's nice about robust scaling is
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=187)** it's less sensitive to outliers than standard Z-score scaling. And it also preserves relative percentage differences, rather than the absolute difference between values. Now, log transform is another technique we can use. And it uses the logarithm function, and it basically, what we're doing is compressing the range of values in a particular feature. And the formula for that is that we have our scaled value is equal to the log of the original value, or it's equal to the log of the original value plus some constant c which we use to handle zeros. So if we have zeros in our datasets, we'll want to use the log X plus c option. Now, log transforms are effective when we're dealing with right-skewed data with positive values. And this really helps to reduce the impact of extreme values. A nice thing about log transform is that it preserves the relative percentage difference, rather than the absolute difference between values. Now, let's think about when we want to use different techniques. Typically, we use min-max scaling when we need bounded values, like when we're working with neural networks. We use standard scaling or Z-score scaling when data is approximately normally distributed. And then we can shift to robust scaling when we're dealing with datasets containing significant outliers. And we can use log transform for highly skewed data when we're working with positive values. Now, I do want to point out, not all algorithms need scaling. In particular, if you're working with tree-based algorithms, so if you're working with things like Random Forest
>
> **[4:42](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-scaling-and-normalizing-data?u=76281980&t=282)** or XGBoost, those algorithms don't require scaling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Neural Networks]] (2), [[Microsoft Products|Products]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Feature engineering: Categorical encodings](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=0)** - [Instructor] Now what aspect of [[Feature Engineering]] is encoding categorical variables? Now, the reason we do this is because many machine learning [[Algorithms]] require numerical input data, but we often work with data that has categorical variables, so we need to convert those to numbers. Now there are several different methods for encoding categorical variables into numbers, and each of them preserve different aspects of categorical relationships. So, we need to be careful choosing a proper encoding method that works well with our model. Now, one type of categorical encoding is called one-hot encoding. Now this is a binary representation in which we create binary columns for each category. Now, each observation or each category value has exactly one numeral one in the binary representation. And the [[Representational State Transfer (REST)|rest]] of the values are represented using zeros in binary representation. And one of the key things about one-hot encoding is that it doesn't impose any kind of ordinal relationship. And that's really important when ordinal relationships don't naturally exist in the category. For example, if we're encoding the colors of clothing items, we don't want to impose some kind of artificial order, like saying red is less than blue, which is less than green. That doesn't make any sense. So one-hot encoding avoids that kind of unintentional imposition of an ordinal relationship. Now, sometimes we do want an ordinal encoding, or there is a natural order. In that case, we assign each category an integer. Now, this is really useful
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=93)** because working with integers is memory efficient and ordinal encoding really works well when we have categories with a natural ordering. But we have to be careful to avoid imposing an artificial ordering for nominal categories, those that don't have orders, things like colors. So for example, a category with a natural ordering is something like clothing size where we have small, medium, or large. Well, in that case, it would make sense to encode small, medium, large as maybe zero, one, and two. Binary encoding is another representation, and it represents categories as binary digits or bits. Now, this is different from one-hot encoding where we use binary digits, but there's only a single one. With binary encoding, we're using binary numbers, which have a mix of zeros and ones. One of the great things about binary encoding is that it works really well for high cardinality features. So for example, if we have over a thousand, say 1,024 categories, well we only need 10 bits to represent that. So binary encoding is quite memory efficient. Target encoding, which is sometimes called mean encoding, is a way of replacing categories with the mean value of some target value that we're interested in for that particular category. So for example, rather than say, have a city name, if we're dealing with retail data and we want to talk about the average purchase amount in that city, we can replace city
>
> **[3:09](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/feature-engineering-categorical-encodings?u=76281980&t=189)** or the name of the city with the average purchase amount. Now, this is useful because it can create highly informative features that have a direct relationship to our target, and it works well with high cardinality features. But we do need to be careful. There is a risk of over-fitting our training data, and that means basically, essentially like memorizing the training data and not sufficiently generalizing. That is a risk with target encoding we need to watch out for. So, let's think about when we want to use different techniques. Typically, we use one-hot encoding when we have a small number of categories and no ordinal relationship. We opt for ordinal encoding when the categories have a clear and meaningful ordering to them. Binary encoding works well with high cardinality features, especially when memory is a concern. And then finally, target encoding works well with high cardinality columns where we want to work with a predictive relationship to our target variable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (1), [[Algorithms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (6), is called (1)
> **Analogies:** for example (4)
> **Warnings:** be careful (3), watch out (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Apply feature engineering to a dataset](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-apply-feature-engineering-to-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-apply-feature-engineering-to-a-data-set?u=76281980&t=0)** - [Instructor] In this challenge, I'd like you to identify the categorical and coding method that you would use for a low-cardinality feature with no inherent ordering.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Apply feature engineering to a dataset](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-apply-feature-engineering-to-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-apply-feature-engineering-to-a-data-set?u=76281980&t=0)** - [Instructor] Okay, the solution is to use one-hot encoding method, 'cause we're working with low-cardinality features and there's no inherent ordering.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Preparation for Generative AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Structured vs. unstructured data](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=0)** - [Narrator] There are three types of data that we work with in AI. They are structured, semi-structured, and [[Unstructured Data]]. Now each type requires different processing approaches, and that can have an impact on how we build [[AI Solutions]]. So understanding these differences will help us implement more effective AI initiatives. Now, structured data follows a relatively fixed, predefined format with a consistent schema. Oftentimes we'll see structured data stored in things like [[Relational Databases]], spreadsheets, and CSV files where the information is stored in rows and columns. Now, some common examples include things like customer [[Databases]], sales transactions, and inventory systems. The fixed fields and consistent formats make this data relatively easy to search and analyze. Semi-structured data sits between structured and unstructured data with some organization, but with a flexible structure. Semi-structured data is self-describing. It uses tags or keys that identify what each element represents. Now, common examples include [[JSON]] and XML files, as well as things like email headers and log files. The data often has a hierarchical organization with parent-child relationships, and this ability to combine simple values with more complex nested elements like arrays, offers a lot of flexibility for representing varied kinds of information needs. Unstructured data lacks any apparent formal organization and doesn't neatly fit into tables. Unstructured data includes things like documents, emails, images, videos, and audio files. The format used to store unstructured data varies widely
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/structured-vs-unstructured-data?u=76281980&t=94)** depending on the content type. So for example, text documents differ fundamentally from video files. Now keep in mind that context matters for interpretation. So for example, understanding sarcasm in a customer feedback form requires contextual awareness. Also, when working with unstructured data, a good portion of the [[Data Preparation]] for AI is focused on extracting specific features of unstructured data to make it more usable for analysis. Structured data and semi-structured data works well with traditional database querying using [[SQL]] and [[NoSQL]] query languages. It's also amenable to [[Statistical Analysis]] and traditional machine learning [[Algorithms]] that expect tabular data. Now, unstructured data requires specialized processing techniques. Text, for example, needs [[Natural Language Processing (NLP)|natural language processing]] while [[Computer Vision]] algorithms are needed for dealing with images. The key difference here is feature extraction, transforming raw unstructured content into structured representations. Now, fortunately, [[Deep Learning]] techniques are now widely used to automate feature extraction from unstructured data. Structured and semi-structured data powers traditional business applications like [[Dashboards]] and reports. It's used for things like sales [[Forecasting]], inventory management, and customer segmentation. Unstructured data enables different kinds of business capabilities like sentiment analysis from reviews and social media. It can also be used for visual quality control, for example, in manufacturing and powering interactive interfaces like voice assistance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (10), [[Algorithms]] (2), [[AI Solutions]] (1), [[Relational Databases]] (1), [[Databases]] (1)
> **Env Vars:** csv (1), json (1), xml (1), sql (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Vector representations of unstructured data](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=0)** - [Instructor] Vectors are a way of numerically representing [[Unstructured Data]]. A vector is an array of numbers that captures meaningful patterns in unstructured data. Now, these vectors represent semantic relationships between unstructured data, whether it's words, paragraphs, images, or other unstructured data. And basically what we're doing is we're mapping unstructured data to a representation that's usable by machine learning [[Algorithms]]. Now, vectors enable us to perform mathematical operations on inherently non-mathematical content. They allow us to measure similarity between different pieces of content, and we can make those measurements mathematically. Now, vectors make it possible to efficiently search and retrieve data, as well as to store it efficiently, even at massive scales. Now, there are different ways to represent, for example, text as vectors. [[Microsoft Word|Word]] embeddings are the most common vector representation for text, and they capture semantic relationships. Now, there are different types. One method is called Word2vec. Now that creates vectors where words used in similar context have similar representations. Another method called GloVe leverages word co-occurrence [[Statistics]] to create more comprehensive embeddings. And the most modern contextual embedding models, like BERT and GPT, actually understand that word meaning changes with context, and so it captures more information about context. Now, when we're actually processing text and mapping those to vectors, the text processing pipeline starts with tokenization, or breaking text into words or subwords.
>
> **[1:36](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=96)** Next comes the embedding process. That's where each token is converted into a vector, that list of numbers, using trained models. Now, for longer texts, we can aggregate token vectors to represent sentences or even entire documents. Now, words are typically transform into, you know, hundreds of dimensional vectors in traditional embedding systems. Now, documents use on the order of thousands of dimensions in the vectors representing them. Now, when we're going from images to vectors, we work with pixels. Images can be represented as pixel arrays with numerical red, green, blue channel values. More advanced systems extract features capturing visual patterns at different levels. For example, high-level embedding vectors can encode semantic information about image content. [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] extract hierarchical features from images. While lower network layers detect basic elements, like edges, textures, and colors. And higher layers typically identify more complex structures, like objects, scenes, and abstract concepts. Now, when we're trying to map audio into vector representations, there are, again, different methods. Audio can be vectorized as raw waveform sampling, capturing amplitude values over time. We can also use spectograms, which transform audio into a 2-D representation, which shows frequency information. Now, audio embeddings capture multiple features of audio, including phonetic elements, emotional tone,
>
> **[3:12](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/vector-representations-of-unstructured-data?u=76281980&t=192)** and unique speaker characteristics. Now, there are a variety of practical applications. In text analysis, vectors enable document similarity comparisons and [[Semantic Search]] engines. They also power machine learning translation by mapping concepts between different languages. Now, for images, vectors can drive things like visual product search and face recognition systems. In audio applications, vectors support speaker identification, based authentication. They also power music recommendations by encoding acoustic similarity patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (5), [[Microsoft Word|Word]] (3), [[Algorithms]] (1), [[Statistics]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** bert (1), gpt (1)
> **Definitions:** is an  (1), is called (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Tools for generating vector representations](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=0)** - [Instructor] Let's take a look at some tools for creating vector representations. Now, vector embedding tools transform [[Unstructured Data]], like text, images, and audio into numerical [[Forms]] that we can use AI to process. Now, there are different specialized tools that we use, and we choose them based on the kind of unstructured data that we're dealing with, but across the board, regardless of the kind of data we're working with, we want to keep an eye out for accessibility, especially the ability for non-specialists to use these tools. We also want to make sure that the tools will scale to our production requirements and the tools should be able to integrate into our larger [[Data Processing]] pipelines. Now, when we work with text embedding tools, we have a number of options. We can start with pre-trained models and libraries, like sentence-transformers, which is a [[Python (Programming Language)|Python]] library that makes creating state-of-the-art sentence embeddings relatively straightforward. There is [[Hugging Face]] Transformers. Now, Hugging Face is a platform that provides access to hundreds of pre-trained models. We can also use OpenAI's embedding API. Now, that gives us access to high-quality text vectors by making API calls. There are also open source embedding frameworks we can use, and these include things like Word2Vec, GloVe, and fastText. For more advanced contextual embeddings, we can use tools like BERT, RoBERTa, and T5. For images, we have tools Keras and [[TensorFlow]] that provide pre-trained models like ResNet, EfficientNet, and VGG for feature extraction. [[PyTorch]] torchvision
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=93)** is a package that offers similar capabilities, but with a different programming interface. Now, the tool CLIP from OpenAI connects images and text in a shared vector space, and that's the kind of tool that enables multimodal applications. We also have the option of using image embedding services. Now, these include services like [[Google Cloud Platform (GCP)|Google Cloud]] Vision API, which can extract features and generate embeddings without depending on any kind of like local computation. Similarly, AWS Rekognition is a service that allows you to create searchable image collections using vector representations, but without the demands of having like a local infrastructure to handle the heavy compute workload. We also have a number of audio embedding tools. There are audio processing libraries like Librosa, which is a Python package that extracts features from sound files. There's Wav2Vec, which uses self-[[Supervised Learning]] to create speech representation without labeled data. A tool called HuBERT applies BERT-like techniques, but applies 'em to audio. And what we're doing there is creating contextual representations for speech. CLAP connects audio and language, similar to how CLIP works with images and text. And then again, we also have [[Cloud Services]] like AWS Transcribe, which can extract features directly from speech audio, and Speechmatics, which offer language-agnostic audio processing. Now, there are several practical considerations that you want to keep in mind. Now, when selecting tools, consider processing requirements
>
> **[3:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/tools-for-generating-vector-representations?u=76281980&t=186)** and whether local or cloud-based solutions would be a better fit for your requirements. You'll want to balance vector quality against computational costs. That's especially the case if you're dealing with [[Real-Time]] applications. Also, you want to evaluate domain specific performance. Some tools may [[Microsoft Excel|excel]] with particular content types or languages, but not others. You also want to make sure the tools you choose are compatible with your existing technology stack because you want to minimize challenges when it comes to integrating different tools. Also, you want to look for support for both [[Batch Processing]] for large historical data sets, as well as real-time generation. That's especially important if you're developing interactive applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (2), [[Python (Programming Language)|Python]] (2), [[Hugging Face]] (2), [[Real-Time]] (2), [[Forms]] (1)
> **Env Vars:** api (3), bert (2), clip (2), aws (2), vgg (1)
> **CLI Commands:** make (2), python (2), aws (2)
> **Definitions:** is a  (5)
> **Analogies:** kind of like (1), similar to (1)
> **Code Identifiers:** fasttext (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Similarity between vector representations](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=0)** - [Instructor] When comparing [[Unstructured Data]] like documents, images, and audio, we first need to transform those data sets into a format that our AI [[Algorithms]] can process. Now, the fundamental approach involves converting raw data into embeddings or vectors, and then measuring the similarity between those vectors. Now, this is a relatively simple approach, but it's actually quite powerful, and we use it to power a wide range of applications like [[Semantic Search]], personalized recommendation, content clustering, and even anomaly detection. What's so advantageous about this approach is that we can compare actual meaning and content, and not just superficial features like keywords and documents. Now, there are several similarity measures. Cosine similarity measures the angle between vectors, with the results ranging from one for identical vectors to zero for completely unrelated vectors. Now, Euclidean distance calculates straight line distances between vectors, with smaller values indicating greater similarity. Now, unlike cosine similarity, Euclidean distance is sensitive to vector magnitude, so you need to watch for that and manage that with scaling. Now, other options include the Jaccard method, which works for sets, Manhattan distance, which is good when you have a grid-like data structure, and Hamming distance if you're working with binary vectors. There are some implementation issues that you want to keep in mind. Pre-processing can significantly impact the quality of your results. You want to make sure you normalize vectors to unit length for when you're using cosine similarity,
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/similarity-between-vector-representations?u=76281980&t=94)** and you want to standardize when you're using Euclidean distance. Now, dimensionality reduction can help, and we can use techniques like PCA or t-SNEs that can help visualize high dimensional vectors in 2D or 3D space. Now, these methods preserve the most important features while reducing the overall computational complexity that we have to deal with. Similarity measurement powers a wide range of use cases. These include semantic search, which finds content with similar meaning despite using different terminology or phrasing. We also have content recommendation systems that identify similar items to those that a user might previously be... Expressed some interest in. We can also use it for things like plagiarism detection tools to identify similar content, that may not have, say, "The exact, you know, text matches." Also, image similarity enables us to find visually similar [[Microsoft Products|products]], or maybe, for example, detect duplicate images without modifications. And then also we can use similarity for audio matching. Now that's useful if we have applications, for example, that identifies songs from a short snippet of audio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Search]] (2), [[Unstructured Data]] (1), [[Algorithms]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (2)
> **Env Vars:** pca (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Choosing vector generation tool](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-choosing-vector-generation-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-choosing-vector-generation-tool?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to identify the key considerations that we should keep in mind when we're choosing a vector generation tool for working with [[Unstructured Data]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Choosing vector generation tool](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980&t=0)** (light music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-choosing-vector-generation-tool?u=76281980&t=7)** - [Instructor] Okay, the answer to this challenge is that the key considerations when choosing a vector generation tool include things like accessibility, especially to non-specialists, [[Scalability]], will it meet the scalability requirements of your production environment? And then finally, integration. Will this tool easily fit into your [[Data Processing]] pipelines?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (2), [[Data Processing]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)


### 3. Data Quality Assessment

[↑ Back to Table of Contents](#table-of-contents)

#### [Elements of data quality: Consistency, accuracy, and completeness](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=0)** - [Presenter] There are three core pillars of [[Data Quality]], and they are consistency, accuracy, and completeness. Now, these are critical for both structured and [[Unstructured Data]] when we're working with AI applications. And also, we need to remember the data quality assessments we're going to be discussing really have to be designed for your specific business context. What we do with consistency assessments is evaluate [[Data Integrity]] across different systems and across different time periods. So, for example, we might want to look at product category assignments and make sure they actually match across different systems within our organization. When it comes to things like customer segmentation, we want to make sure those classifications are relatively stable over time. And when we use naming conventions, we want to make sure we're following established patterns. Now, there are different metrics we can use for measuring consistency. For example, we might have consistency ratios or contradiction rates that we have when we're assessing data sets. Now, when it comes to accuracy assessments, what we're trying to do is measure how closely the data that we have actually represents the real world. Now, when we're dealing with structured data, some examples are things like verifying customer emails through validation checks, or cross-referencing inventory counts with the actual physical stock in our stores or within our storage areas, and testing product dimensions against the physical measurements we have in our data sets. Now, with regards to unstructured data, some examples of accuracy assessments involve text sentiment analysis, and we do that kind of validation through human review,
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=94)** or maybe checking the labels that are associated with the images. And again, we'd have a human doing that. Now, a completeness assessment examines whether all data elements that we require are actually present. So, with regards to structured data, we would look at things like customer profiles to make sure we have all the demographic data points that we expect, or with product listings, we'd want to make sure all the required specifications are listed with each particular product. And if we're doing different kinds of, say, sales transactions, we want to make sure we capture all the items and attributes associated with that transaction. With regards to unstructured data, we want to watch for things like, when we're checking documents, we want to make sure those documents contains all the necessary sections we would expect with that type of document. With regards to images, we want to make sure they have sufficient quality so that we can do feature extraction on those images. Now, when we're implementing quality assessment, we're going to do things like making sure we profile both structured and unstructured data sources. We also want to set quality thresholds based on business impact analysis. So we don't want to make arbitrary thresholds that may be expensive and difficult to achieve, but don't have a corresponding business value with them. We also want to develop automated quality-monitoring workflows, and we have to be sure to create domain-specific validation roles. And here, we often depend on expert input. And, finally, we want to establish a feedback loop so that we can improve the data quality that we use for building our AI model
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/elements-of-data-quality-consistency-accuracy-and-completeness?u=76281980&t=187)** and evaluating AI model performance. We can see the impact of this kind of data quality practice by looking at different examples. For example, with regards to consistency, we would have uniform product attributes across platforms. We'd also be sure that we have correct product relationships and affinities. From a completeness perspective, we'd have comprehensive interaction history and [[Metadata]]. Now, looking at an unstructured data example, like document processing, consistency will bring to our work standardized document formats, accuracy will help ensure that we can correctly extract text fields and classify those documents, and completeness helps to ensure that all relevant document sections are actually included in our analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (5), [[Data Quality]] (4), [[Data Integrity]] (1), [[Metadata]] (1)
> **CLI Commands:** make (9)
> **Analogies:** for example (3)
> **Speakers:** - [presenter] (1)

#### [Statistical techniques for data quality assessment](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=0)** - [Instructor] Statistical methods provide objective measures of [[Data Quality]]. Now, these measures help us identify patterns, anomalies, and data quality issues at scale. And they include techniques like distribution analysis, outlier detection, correlation and consistency analysis, and sampling techniques. Let's take a look at distribution analysis. With distribution analysis, what we're trying to do is examine the data distribution to identify quality issues. So, for example, we might look at price point distribution to detect pricing errors, or purchase frequency patterns to find abnormal customer behaviors, or inventory level distributions that will help us identify [[Data Collection]] issues. Now we have a variety of tools that help with distribution analysis. We can use visual techniques, like histograms and box plots, as well as statistical calculations that give us numerical measures, like distribution tests like the Shapiro-Wilk test. Now, I will say if you're not familiar with some of these statistical tests, I have courses that I will recommend at the end, which are also available in the course catalog, which go into more detail about these different statistical tests. Now, with outlier detection, we have methods like z-scores, which can flag values beyond three standard deviations of the mean. And, for example, we could use this to identify impossible transaction sizes or basket sizes. You know, for example, having hundreds or thousands of items in it. The IRQ method or interquartile range method,
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=94)** those help flag values that are outside 1.5 times the interquartile range. So, for example, we could use that to detect unrealistic product weights in our catalog. Isolation forest is an unsupervised machine learning algorithm that we can use to help us with complex pattern recognition, such as finding anomalies in customer journeys across various touchpoints. Now, correlation and consistency analysis has a number of different measures. There is the Spearman and Pearson correlation measures, and those are used to verify expected relationships. For example, if we wanted to compare the product size versus the shipping weight. Now sometimes we want to do cross-field validation using statistical dependencies. So, for example, we might want to analyze category-specific price ranges for our [[Microsoft Products|products]]. And then we also sometimes want to do time series consistency measurements. And this is important if we want to do things like detect sudden shifts in like a daily or weekly sales patterns. Now sampling techniques are really important for quality assessment. Now, one of the most common is random sampling with confidence intervals. And for example, we may want to validate product descriptions with a 95% confidence. Now, sometimes if we have different groups, we would use stratified sampling across different categories like product categories. Now, that would be useful if we want to ensure the representation of products across all departments. Now we can also use sequential sampling. That's useful for ongoing quality monitoring. So, for example,
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/statistical-techniques-for-data-quality-assessment?u=76281980&t=187)** we could do continuous product image quality verification. And then we also want to take into account sample size determination based on variants in a particular population. So for example, we might determine, you know, the volume of items we are going to examine based on, say, the number of high-risk SKUs we might have in our product catalog. Now some things to keep in mind when we're implementing quality assessments. We want to be sure we use control charts to monitor data quality metrics over time. So, for example, we want to be able to track missing values in customer profiles over time. We also want statistical process control for our data collection. Well, that requires that we monitor, say, for example, the consistency of our in-store traffic counts. We also want to do acceptance sampling for vendor-provided data. We might want to check quality thresholds for third-party product data. And then finally, we also want to apply statistical significance testing for various quality improvements such as using A/B testing when we're doing our [[Data Cleaning]] approaches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (3), [[Data Collection]] (2), [[Microsoft Products|Products]] (2), [[Data Cleaning]] (1)
> **Analogies:** for example (11), such as (2)
> **CLI Commands:** find (1)
> **Env Vars:** irq (1)
> **Versions:** 1.5 (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Data quality](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-data-quality?u=76281980&t=0)** - [Instructor] In this challenge, I would like you to identify the three main components of [[Data Quality]] assessment for AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Data quality](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980&t=0)** (upbeat energetic music) (upbeat energetic music fades)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-data-quality?u=76281980&t=7)** - [Presenter] The answer to the challenge is consistency, accuracy, and completeness. Those are the main components of [[Data Quality]] assessment for AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1)
> **Non-Speech:** (upbeat energetic music) (1), (upbeat energetic music fades) (1)
> **Speakers:** - [presenter] (1)


### 4. Data Augmentation for Generative AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of data augmentation](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=0)** - [Instructor] Data augmentation and [[Generative AI|GenAI]] is basically a way of artificially expanding training datasets to improve model performance. Now, one of the ways we can improve model performance is by reducing overfitting. Now, overfitting occurs when we essentially do things like memorize the training dataset rather than generalize from the set. So with data augmentation, we can create high-quality models, even when the amount of real data that we have to work with is fairly limited. Another advantage of data augmentation techniques is that it can be sometimes more cost-effective than collecting additional raw data. The kinds of techniques we use will depend on the kind of data we're working with. So for example, if we're working with natural language text, we can use text augmentation. And there are a couple of different categories of text augmentation techniques. One are known as lexical transforms, and this is where we work at fairly low levels, and we do things like replace synonymous words. Or for example, we could use random [[Microsoft Word|word]] changes such as inserting, deleting, or swapping word order. We can also work at a more phrase or sentence level. These are known as syntactic transformations. And in this case, we do things like convert an active voice sentence into a passive voice or rephrase a question or paraphrase some set of words within a sentence. Now, when we're working with image data, again, we have multiple techniques we can choose from. One class of techniques are known as geometric transformations,
>
> **[1:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=92)** and that includes things like rotating, flipping, scaling, and cropping images. We can also apply things like perspective and affine transformations. Those are transformations that preserve lines and parallelisms, but not necessarily angles. We can also do modifications to color and appearance. So for example, we can do color jittering or slightly tweak colors or apply grayscale conversions. We can also add noise, like for example, randomly inserting, you know, white or light and dark pixels, which is known as adding salt-and-pepper noise. Now, as you're implementing data augmentation techniques, there are some good practices you want to keep in mind. Probably the most important thing to remember is that you want to start with proven techniques for your particular type of data and domain. And then you also want to start with relatively simple transformation techniques, and then you can gradually increase the complexity based on validation metrics. So as you do apply more complex techniques, you want to make sure you're preserving, for example, the semantic consistency across the original data and the augmented new data that you're creating. Now, that also brings up another sort of a balancing act here. You want to balance the augmentation diversity, so you want some range of different values in the data so that you get diversity in your training set. But you want to balance that with semantic preservation. You want to keep the images realistic, for example, or the text that you're generating,
>
> **[3:05](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-data-augmentation?u=76281980&t=185)** you want that to be a plausible text that, for example, a human might write. Now, there are some common pitfalls, so you just want to watch out for things like unrealistic augmentation. And this can occur when you start applying more complex techniques. And also, really any transformation could change meaning. So for example, dropping the word not out of a sentence could significantly change the meaning. So you want to watch for transformations, even minor transformations that can change the semantics of either a text or an image. Now, there are a number of different areas where we can apply data augmentation. So, when we're working with text or natural language, oftentimes we will use diverse response generation for [[Conversational AI]]. With regards to image generation, we often look for domain adaptations for specialized visualized tasks. Here's a common case where we have to synthesize data. When we're working with audio data, we might want to do things like voice cloning. We do this especially when we have just a limited sample of, say, someone's voice. So these are just some of the areas where data augmentation naturally lends itself to helping to improve model quality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Conversational AI]] (1)
> **Analogies:** for example (8), such as (1)
> **Definitions:** known as (4)
> **Warnings:** keep in mind (1), watch out (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Text perturbation and style transfer](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=0)** - [Instructor] We used text augmentation to expand limited training datasets without having to go out and collect additional realistic data. Now, this addresses several issues. These include class imbalance, overfitting, and robustness. Now, there are, broadly speaking, two ways we can augment text. One is with what is known as text perturbation, and the other is known as style transfer. Now, with text perturbation, we can start at a fairly low level, like character-level modification. These include things like random character insertion, deletion, and substitution. We can also simulate keyboard proximity errors. That's useful for simulating typos. And we can also do things like character swapping within words. Now, we can work at [[Microsoft Word|word]]-level transformations, and here we can do things like replacing synonymous words, and we would use thesauri or word embeddings for that. We can also do random word changes by inserting, deleting, or swapping, or we can also use N-gram sampling and replacement. So an N-gram is a series of N-words or characters. So for example, we could have a three gram, which might be three characters string or three words that occur in a text, and we can sample and replace using those N-grams. Now, we also have the option of using more advanced text perturbation techniques. Now, one set is the... Basically, a set of contextual word replacement approaches. And for this, we depend on LLMs. So for example,
>
> **[1:32](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=92)** we can use basically LLM prediction models. So an LLM might predict what the next word might be, and we might substitute whatever the word actually is with what an LLM predicts the word might be. We can also translate into other languages and then back into our original language. So for example, we could translate from English into French and then from French back to English. That can lead to different ways of phrasing the content of a sentence. We can also go about restructuring sentences while still preserving the grammatical relationship. And one example of that is changing active voice into passive voice, and vice versa. Now, another technique is known as style transfer. And with this, what we're doing is rewriting text to alter the style while still preserving the content. Well, there are a number of different dimensions of style that we can tweak or adjust. These include formality. So we might have, say, a casual text, and we want to translate that into something more formal or more academic. We can also increase the simplicity or increase the complexity of a description. So for example, we might have a complex description of a physics phenomenon, and we might ask an LLM, "Translate this concept "or explain this concept "to a five year old" to get a more simplistic expression. We can also adjust the sentiment. So we may have a customer review that has a positive or neutral sentiment. We might ask an LLM to modify that
>
> **[3:06](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=186)** to generate a negative sentiment. We can also change verbosity. So we might have something that's very concise, again, maybe a concise description or a concise news report, that we expand to be a more detailed description. Those are all examples of style transfer. Now, when we're implementing these techniques, there's some things we want to keep in mind in terms of how we want to evaluate. We want to make sure that we're doing some level of semantic preservation. So we're modifying, for example, a piece of text. So for example, we might change the sentiment from neutral to negative. So we're not strictly preserving the semantics, we are changing at least some dimension of it, but that's okay. But we don't want to radically change the content to mean something radically different from what we started, and that's what we mean by "semantic preservation." We also want to make sure we maintain linguistic acceptability. So we can do that by looking at things like grammatical assessments, and also looking at maybe perplexity measurements from language models, like "how complicated, "or overly-complicated, is this description?" We also want to look at diversity metrics, like, "Are we expanding the vocabulary "that we're using?" We can also look at the distribution of measurements across different linguistic features. And probably the most important way is downstream task improvement. For example, if we're classifying documents, does our classification accuracy metric improve? Are we better at generalizing
>
> **[4:39](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/text-perturbation-and-style-transfer?u=76281980&t=279)** out of distribution examples? So specifically, this is very much of a pragmatic, task-oriented kind of evaluation, but it's one of several that we can use when we want to evaluate how well our text augmentation is doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7)
> **Analogies:** for example (7)
> **Env Vars:** llm (5)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Retrieval-augmented generation (RAG)](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=0)** - [Narrator] Now, I'd like to turn our attention to retrieval augmented generation, commonly referred to as RAG. Now, RAG is a technique that combines [[Information Retrieval]] with [[Generative AI]], and what it does is it enhances the outputs of [[Large Language Models (LLM)|large language models]] with relevant knowledge that's external to that model. And what we're doing is basically, bridging the gap between the static model knowledge that's encapsulated within an LLM with up-to-date information that we can get online. Now, one of the nice things about RAG is it can really help us with hallucinations, because with RAG we can ground responses in the retreat facts that we get from our information retrieval. Another nice thing about RAG is it allows us to augment what we can talk about or what the LLM can talk about, because it basically, enables specialized knowledge domains without fully retraining the model. All right, there are three major components of RAG. One, is the knowledge base. Now, this is a structured repository of information. So, for example, our documents, whatever other [[Databases]] we might be using. We often use a vector database for embeddings, but we may also use [[Relational Databases]] or no [[SQL]] databases for [[Metadata]], for example, about documents. We also have a retrieval system. Now, the retrieval system is used for [[Semantic Search]] using embeddings. It also helps with relevance ranking and optimizing the context window. Then the third component is the generation module. And the generation module
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=94)** is the large language model itself, plus some additional supporting mechanisms such as context integration mechanisms and output formatting and synthesis. Now, let's look at the RAG workflow. The first step of the RAG workflow is query processing. And here what our goals are to understand the user's intent, analyze complex questions, basically, decompose the query, and identify key concepts that we need to retrieve. The next stage is the actual information retrieval part. Here, basically what we have to do is convert the query into an embedding and then use semantic search across a vector database. And that'll allow us to select the most relevant chunks of text. Now, once we've completed the information retrieval phase, then we move on to context integration. Now, here our focus is on organizing retrieved information and combining multiple sources coherently. After we've integrated the context, we want to generate out a response. And basically, the idea here is we're going to synthesize an answer based on the retrieved context, while also doing things like maintaining attribution to sources. Now, there are different retrieval optimization strategies. For example, we can combine semantic and keyword searches to improve the quality of our search results. We can also use metadata such as document attributes for pre-filtering before we apply what is oftentimes a more costly and more complex semantic matching. We can also use re-ranking mechanisms.
>
> **[3:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=188)** For example, we can use two-stage retrieval where we work first with coarse and then fine grain searches. We can also use LLMs to enhance our search queries, so basically, augment the queries themselves. And then we can also apply multi-step retrieval where we break complex queries into subqueries and then aggregate the information that we get from multiple searches. Now, when you're implementing RAG, there are a few things that are worth keeping in mind. First of all, we're going to be dealing potentially with sensitive information handling. So, we want to think about access controls and compliance with data regulations. We also want to think about how we're going to keep the knowledge bases up to date. And as we're updating our knowledge bases, for example, updating our [[Vector Databases]], we have to be aware of the fact that we may be incorporating conflicting information into our database. So, there is a question of how do you deal with that once it's discovered? Often it shows itself during the generation process. And then, because we're working with external sources that are constantly changing, we want to think about what is the level of [[Version Control]] we want for the sources that we're using in our RAG system. And then finally, if we're dealing with say, interactive systems, we want to think about how are we going to maintain an appropriate level of latency in the [[User Experience (UX)|user experience]], and part of that will be driven by retrieval latency. So, we need to be aware of how say the growth in the size of a vector database might adversely impact the retrieval latency and therefore adversely impact the overall user experience.
>
> **[4:43](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/retrieval-augmented-generation-rag?u=76281980&t=283)** And that gets to the general question of how do we scale large databases to massive scales? And so, that is a question that you'll need to to grapple with, but oftentimes when we're starting with RAG, we're a more modest scale. So, scaling to massive knowledge bases is not an immediate problem, but it's one that tends to creep up on us over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Information Retrieval]] (4), [[Databases]] (3), [[Metadata]] (2), [[Semantic Search]] (2), [[User Experience (UX)|User experience]] (2)
> **Env Vars:** rag (11), llm (2), sql (1)
> **Analogies:** for example (5), such as (2)
> **Definitions:** is a  (4)
> **Warnings:** be aware (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Introduction to LangChain for RAG](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=0)** - [Instructor] One of the widely used tools in RAG is known as [[LangChain]]. LangChain is a framework for developing applications that are powered by [[Large Language Models (LLM)|large language models]]. Now, LangChain is an open-source toolkit that basically simplifies integration of, say, [[Python (Programming Language)|Python]] applications with large language models. Now, it enables the creation of context-aware and reasoning-based applications. And there are several advantages to using LangChain, including its flexibility, its ability to support abstraction of common processing patterns, as well as its support for context and memory. LangChain has several core components. These include models, which are interfaces with various LLMs, like OpenAI or Anthropic's Claude, as well as open-source LLMs, like [[LLaMA]]. The core components also include prompts, which are templates for LLM interactions; memory, which includes both short and long-term context retention systems; and then, we also have chains. Now, these are [[Data Structures]] that combine components into reusable workflows. And agents, which create autonomous systems, and they're able to reason and take actions using tools. And, then finally, we have retrievers, which are components that connect LLMs to external data sources. Now, LangChain supports RAG with a number of high-level supporting processes. These include document loading. And we can work with a real diverse range of formats, including PDF, CSVs, and websites. It also has support for text chunking and vectorization.
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=94)** That's useful for more efficient retrieval. We can integrate with a variety of [[Vector Databases]]. These include some of the commonly used ones, like [[Pinecone]] and [[ChromaDB|Chroma]]. There's also support for context window optimization, and that helps with more accurate responses. And then we also have [[Real-Time]] information access beyond the LLMs themselves, right? That's where the retrieval augmented generation actually comes in. Now, LangChain supports agents, and agents are a really popular topic right now. So agents are autonomous systems that use LLMs for reasoning and planning. Now, LangChain agents basically choose tools based on a user request and the context of that request. And they, the agents, also allow for flexible execution of multi-step processes. So it's not just a predefined set of executing a certain set of tools, but actually, the LangChain agents can adapt to different conditions and change the execution behavior based on those conditions. And so when we're talking about tools, basically, we're talking about taking advantage of a wide array of tools, like search engines, calculators, and just about any API that's accessible online. Another thing about LangChain agents that's important is that agents have memory, so they can maintain the context across multiple interactions with different tools. And LangChain agents also have the option of employing human-in-the-loop options for verification, if that's something you want to do with your agent. Now, LangChain has a number of use cases. For example, there's augmenting [[Customer Support]] automation with contextual knowledge
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/introduction-to-langchain-for-rag?u=76281980&t=187)** or performing document analysis and summarization, potentially at large scale. It's also useful for personalizing content recommendations systems, as well as generating and explaining code. We can also use LangChain if we are working the area of knowledge management and we want to support knowledge management and internal search tools. And of course, another area that's getting a lot of attention is what are often known as deep research modes in LLMs. Well, LangChain can help with our own mechanism for providing research assistants that synthesize information across multiple steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (14), [[Large Language Models (LLM)|Large language models]] (2), [[Python (Programming Language)|Python]] (1), [[LLaMA]] (1), [[Data Structures]] (1)
> **Env Vars:** rag (2), llm (1), pdf (1), api (1)
> **Definitions:** known as (2), is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Understanding components of RAG](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-understanding-components-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-understanding-components-of-rag?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-understanding-components-of-rag?u=76281980&t=7)** - [Instructor] In this challenge, I would like you to identify the three main components of a retrieval augmented generation system.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Understanding components of RAG](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-understanding-components-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-understanding-components-of-rag?u=76281980&t=0)** - [Narrator] Okay, the three main components of a retrieval augmented generation system are the knowledge base, the retrieval system, and the generation module.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Knowledge Augmentation for Generative AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of knowledge augmentation](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=0)** - [Instructor] Now, as we've discussed, LLMs have knowledge cutoffs and they can't access information directly beyond their training data. But oftentimes, domain-specific knowledge is limited in general purpose models. But at the same time, oftentimes we want to apply these models to specialized domains that need precise, verifiable information. So think in terms of things like legal, medical, and technical domains. And then there are other cases where, for example, there might be organizational knowledge that's specific to your organization and is not available in a public training set. So how do we get that or make that data available to [[Large Language Models (LLM)|large language models]]? Well, the answer is we do it through knowledge augmentation. Now, there are a few different methods for augmenting knowledge. There's fine-tuning. Fine-tuning is the process of adapting models to specific domains by using additional training. Now, we can also use knowledge distillation. This is a process of transferring specialized knowledge between models. And then we have multimodal integration. Now, this is an augmentation technique that combines different types of data, like text, images, or audios with other modalities. And then we also use access to structured knowledge. In this case, we're going to leverage things like ontologies, taxonomies, and [[Knowledge Graphs]] to enhance our knowledge base. So let's take a look at fine-tuning. Fine-tuning is a process of further training, a pre-trained model, but training it on specialized data so that it can optimize its performance for the tasks
>
> **[1:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=95)** that are specific to that domain. Now, this is beneficial because it can require significantly less data than if we tried to train our full blown model for our specific domain. And it's particularly valuable for specialized domains that have unique terminology and naming conventions. Now, there are a few different implementation approaches. We can adjust all model parameters, that's really drastic and quite computationally expensive. A more efficient method or a set of methods are known as parameter-efficient fine-tuning. We can use low-rank adaptation, which adds lightweight, trainable layers to modify the model's behavior. So basically we're enhancing the model adding additional layers, rather than tweaking the parameters that have already been learned in the existing layers. Now, another method is known as knowledge distillation. Now, basically what we have here is like a student teacher model where a smaller student model learns to mimic what a more highly trained or more comprehensively trained teacher model or ensemble of models already knows. Now, there are some significant benefits to knowledge distillation, it can definitely reduce the inference costs and the training costs. Also, your model that you build can have a smaller memory utilization than the larger or the original teacher model. And that's especially important if you want to do things like deploy a model to an edge, or a device, or a mobile device. And another key thing about this
>
> **[3:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=190)** is with knowledge distillation, we're preserving knowledge, but also we're making it more deployable. We're putting it into a smaller model that makes it more accessible. Now, there are different ways to implement this. We can use what's known as a response-based method. And in a response-based method, the student learns by using the teaching model's final output probabilities. Now, there's also a feature-based approach. Now, in that case, the student learns to mimic the internal representation that the teacher model has. And then finally, there's relation-based. And here the student is basically trying to learn the relationship between different examples from the teacher. Now, multi-modal integration is an interesting one, because basically what we're trying to do is extend the model's capabilities beyond say just text, to be able to work with different types of information like audio or video. Now, when we do multi-modal integration, we're creating a more comprehensive knowledge representation model because we're leveraging complementary information like an image plus a description of an image. So there are different implementation approaches. There's something known as joint embedding. And a joint embedding space is one that aligns representations across the different modalities. So we're representing it in the same vector space, but we're using different modalities to train that model. We can also use fusion architectures that combine information at various stages of processing, so it's not quite as low level as the joint embedding space.
>
> **[4:44](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=284)** And then we can also use specialized encoders where each encoder is designed for a particular modality. Now, ontologies, taxonomies, and actually knowledge graphs are the final way of doing knowledge augmentation. Now, all of these are formal representations of a domain of knowledge. Taxonomies are hierarchical classification systems. So you can think of like a product category where you have things like [[Electronics]], and under electronics you have TVs, and phones, and car stereos. Now, ontologies are formal domain knowledge. They're richer than taxonomies, because these formal domain models define relationships and rules for interactions among different entities. Now, knowledge graphs are networks of entities and relationships. Now, knowledge graphs differ from ontologies because knowledge graphs don't necessarily follow or employ formal logic or some level of formal logic, which ontologies do. Now, when we want to work with ontologies, we have a few different integration methods. For example, we can use a retrieval-based method where we basically look up relevant [[Data Structures]] during inferencing. We can use embedding-based methods where we convert the knowledge that's represented in say, an ontology or a taxonomy. We map that into a vector representation, so we map that into an embedding as well. There are also neuro-symbolic approaches where we combine like [[Deep Learning]] networks with symbolic reasoning. And we can also use ontologies, taxonomies, and knowledge graphs for pre-training augmentation.
>
> **[6:18](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/overview-of-knowledge-augmentation?u=76281980&t=378)** So basically we're going to include the knowledge that's in the ontology, taxonomy, or knowledge graph into our training data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (6), [[Electronics]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Data Structures]] (1), [[Deep Learning]] (1)
> **Definitions:** known as (4), is a  (2), is an  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Fine-tuning and knowledge distillation tools and techniques](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=0)** - [Instructor] Okay, with model optimization, we oftentimes want to fine-tune and distill using specialized tools. Now there are different tool types. Basically we have the option of using general-purpose machine learning frameworks or specialized libraries. And what we will use often depends on what kind of model we're working with and what kind of resources we have. In particular, how much compute resource do we have available to us? Now, fine-tuning frameworks and libraries include tools like [[Hugging Face]] transformers, and this is a really comprehensive library that has pre-trained models and fine-tuning capabilities. And in addition, there's also the Transformer [[Reinforcement Learning]], which is a specialized tool for reinforcement learning with human feedback. In addition to that, we have a tool called FastChat, which is a toolkit which is really designed for serving up chatbot models. And then we've already discussed [[LangChain]], and something similar to LangChain is [[LlamaIndex]]. These are higher level frameworks for building LLM applications, but they also support fine-tuning. Now if we're interested in knowledge distillation tools, we can use general-purpose tools like [[PyTorch]] and [[TensorFlow]]. These both have native support for implementing distillation loss functions, and they have flexible APIs for creating teacher-student architectures. Now, NVIDIA, the company NVIDIA, provides a tool called Distiller, which is another comprehensive tool for model compression, and it supports various distillation techniques,
>
> **[1:35](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/fine-tuning-and-knowledge-distillation-tools-and-techniques?u=76281980&t=95)** including quantization. And then another specialized tool is called TextBrewer, which is designed for [[Natural Language Processing (NLP)|natural language processing]], and it also supports multi-teacher distillation capabilities. Now, if you're implementing fine-tuner knowledge distillation, some best practices to keep in mind, it's best to focus on quality data rather than a larger amount of data. You want to be sure you're employing consistent pre-processing and augmentation techniques. This is especially the case if you trained a model and now you're doing specialized training. In general, you want to adjust a couple of the hyper parameters when you are doing fine-tuning. Typically we use a smaller learning rate, oftentimes it's orders of magnitude smaller, like 10 times or 100 times smaller than what might have been used in pre-training. We also want to use smaller weight decay, and that's important for preventing over regularization. And then, because we're working in a specialized domain, it's really important to use human evaluation to assess the quality of the models that we're building. Now there are some problems that often show up, or can show up, with fine-tuning and distillation. With fine-tuning, we want to watch out for catastrophic forgetting, and we also want to watch out for overfitting. This is especially problematic if we're using relatively small data sets to do our fine-tuning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (2), [[LangChain]] (2), [[Hugging Face]] (1), [[LlamaIndex]] (1), [[PyTorch]] (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** nvidia (2), llm (1)
> **Warnings:** watch out (2), keep in mind (1)
> **Analogies:** similar to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Ontologies, taxonomies, and knowledge graph tools and techniques](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=0)** - [Instructor] Ont ologies, taxonomies and [[Knowledge Graphs]] provide formal knowledge representation. Now, ontologies are formal explicit specifications of concepts, properties, and relationships. Now, it also includes additional constraints and rules that use formal logic. The advantage of representing these constraints and rules using formal logic is that that brings with it certain guarantees that we can assume regarding how we make inferences and how we draw conclusions. Now, taxonomies are lighter weight. They are hierarchical classification systems that are useful for organizing concepts into categories and subcategories. Now, knowledge graphs are most flexible in the sense that they are just network structures, and they can represent arbitrary entities and their relationships. Now, LLMs can benefit from all of these different kinds of knowledge representation schemes because they represent knowledge that has been essentially curated by humans. We're not depending on the statistical learning processes that are involved when training [[Large Language Models (LLM)|large language models]]. Now there are a variety of ontology and knowledge graph tools. If you're interested in ontology development and creating your own ontologies, then Protege is an open source ontology and editor framework. Owlready2 is a a [[Python (Programming Language)|Python]] library that allows you to load, modify, and save ontologies. OntoEdit is a collaborative ontology engineering environment. Now, knowledge graph platforms include [[Neo4j]], which is a [[NoSQL]] database.
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=94)** That's a graph database that has both visualization and query capabilities. GraphDB is specifically designed for semantic [[Databases]] and it uses the resource description format, or RDF. And then there's Amazon Neptune, which is a fully managed graph database service that's available in AWS. Now, there are also different integration frameworks. So if we're interested in directly working with LLM, we can use [[LangChain]]'s graph stores and retrieval mechanisms. We also have a [[LlamaIndex]], which is a tool that is comparable to LangChain. It has support for knowledge graph indices and query engines. And then there's also Haystack's knowledge graph and retrieval pipeline. More general purpose semantic libraries include RDFLib, which is a Python library for working with RDF data, and SPARQL, which is a query language for retrieving data from knowledge graphs. We also have the option of using PyGraphviz, which is a network visualization tool which is specifically designed for knowledge graphs. Now, when it comes to implementation, we can use a knowledge retrieval architecture approach, and in that case, what we're doing is we're converting natural language queries into graph patterns. And then we execute those graph patterns as queries against the knowledge structures, like a knowledge graph or a taxonomy or an ontology. And then we use the results to enhance our LLM prompts. Now, alternatively, we can use a graph-to-text generation approach where we convert graph patterns that represent, say a taxonomy or ontology.
>
> **[3:10](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/ontologies-taxonomies-and-knowledge-graphs-tools-and-techniques?u=76281980&t=190)** We basically map those into natural language, and then we use that natural language description to augment our prompt or context. Or we can use that natural language as part of our training data set as well. Now, some best practices for working with ontologies, taxonomies, and knowledge graphs with LLMs is, first of all, we want to start with established ontologies. So let's work with ontologies that are already established in things like financial services industry or biomedical industries. And when we do get started, when we're extracting knowledge out of these ontologies, we want to focus on high-value relationships for the initial implementation and build from there. We also want to use retrieval for factual knowledge and verification. And take advantage of the reasoning capabilities of ontologies to apply reasoning to make explicit relationships that might not be explicit. So we want to basically do inference. And also another good practice is we want to maintain providence. That's important for explainability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (5), [[Python (Programming Language)|Python]] (2), [[LangChain]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Neo4j]] (1)
> **Definitions:** is a  (8), is an  (1)
> **Env Vars:** rdf (2), llm (2), aws (1), sparql (1)
> **CLI Commands:** make (2), python (2), aws (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Knowledge augmentation](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-knowledge-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-knowledge-augmentation?u=76281980&t=0)** (soft upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-knowledge-augmentation?u=76281980&t=7)** - [Instructor] For this challenge, I'd like you to identify three ways to formally represent domain knowledge which we can use for knowledge augmentation.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)

#### [Solution: Knowledge augmentation](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-knowledge-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-knowledge-augmentation?u=76281980&t=0)** - [Instructor] Three ways to formally represent knowledge for knowledge augmentation are: taxonomies, ontologies, and [[Knowledge Graphs]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Development Practices for AI Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Determining what data sources to use](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=0)** - [Instructor] Okay, now it's time to turn our attention to development practices for AI applications. And we start with the understanding that data is the foundation of successful AI initiatives and that the quality and type of data sources we use will impact model accuracy, relevance and business value. Now, as an example, I'd like to consider how to identify data sources for a retail industry AI application. Now, we'll look at various types of data, like from internal sources versus external sources, but across those dimensions, we want to keep in mind several global issues. And these include things like customer [[Privacy]], seasonal patterns and omnichannel customer behavior. Now, we often start with internal data sources. Now, these include things like enterprise systems, such as point-of-sale systems, enterprise resource planning systems and customer relationship management systems. These applications are rich in data about transactions and customer histories. We also want to work with website analytics. They reveal browsing patterns and help us understand conversion funnels. We should also look into inventory management systems. These are systems that track product lifecycles and supply chain data. Now, also, we don't want to forget [[Unstructured Data]] internally. These include things like employee knowledge bases that capture institutional expertise on a variety of topics. We'll also, more likely than not, depend on some external data sources, and these include areas like market intelligence. Now, third-party providers can offer things
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=94)** like competitive pricing and trend data. We also want to consider weather, for example, whether APIs may help predict demand fluctuations for seasonal merchandise. Also, social media sentiment can provide realtime or near realtime feedback on [[Microsoft Products|products]] and campaigns. Census and demographic data can add additional context to information around store [[Performance Metrics]]. Now, when we're thinking about data sources, we don't want to think just about the data as a static thing, but also we want to think about data as it moves through our organization and our processing pipelines. And this is where [[DevOps]], or development operations, integration practices come in. We want to be sure to implement automated [[Data Quality]] checks in our [[Continuous Integration (CI)|continuous integration]]/continuous deployment pipelines. We also want to set up monitoring for data drift in datasets, like product catalogs and customer behavior. And the reason we do this is that the characteristics of these datasets will change over time. We also want to set up data source connection templates for quick integration. This is especially the case when we're working with a large number of [[Databases]] and APIs. We also want to document source characteristics and limitations in knowledge repositories. And then finally, we want to deploy feature stores, that'll help standardize data access across different AI applications. Now, there's some best practices to keep in mind when we're determining data sources to use. First, we want to start with high-value accessible internal data sources. These are generally the easiest to access
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/determing-what-data-sources-to-use?u=76281980&t=187)** and typically the easiest to understand in depth because we have in-house expertise. We also want to validate external data with small proof-of-concept systems and integrations. From a process perspective, we want to establish clear data ownership and governance policies. And we want to build modular pipelines that can adapt to changing requirements for processing our various data sources. And finally, we want to be sure we have the ability to continuously measure the business impact of each data source we're employing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1), [[Unstructured Data]] (1), [[Microsoft Products|Products]] (1), [[Performance Metrics]] (1), [[DevOps]] (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** keep in mind (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Applying data quality checks](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=0)** - [Instructor] Once we've identified data sets, it's time to turn our attention to [[Data Quality]]. Now let's continue with our examples of working with retail industry data. Now, there are critical dimensions that we want to keep in mind. They are accuracy, for ensuring that data values match real world conditions. We want to think about completeness. That is verifying that all required data elements are actually present in our data sets. We also want to maintain consistency, that is, in particular, [[Data Integrity]] across systems. We also want our data to be timely, so that we have fresh data for making decisions. And we want to make sure that we're not dealing with any duplicates that might distort our analysis. Now the kinds of checks, the specific kinds of checks that we will be doing, will vary slightly depending on the type of data or the focus of the data set that we're working on. So let's look at an example of a product catalog, and what kind of quality checks we would have there. We want to think in terms of format validation. For example, do all the stock keeping units or SKUs follow a standard pattern? We want to make sure our attributes are complete so that we have all the required fields associated with a product. We'll also want to think in terms of category consistency. So for example, if we have a product taxonomy, we want to make sure that taxonomy is consistently applied across all of our [[Microsoft Products|products]]. If we're working with images, we'll want to make sure that the resolution and presentation standards that we may have are actually being met by all the images that we're dealing with. We also want to make sure that we are consistent across channels,
>
> **[1:34](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=94)** so we want to have checks for cross-system synchronization as well. Now when we're dealing with transaction data, again, we have slightly different specific data quality checks, but they follow similar patterns. So for example, we want to have price accuracy. So for example, we may want to compare recorded prices against whatever our authorized pricing tables are. We also want to verify that discount code calculations are correct, and we want to ensure all items are properly recorded when we're doing market basket analysis. Now, temporal validation is important as well. We want to make sure that our transaction times, for example, match store hours. And then finally, we may want to look at payment reconciliation to crosscheck payment methods against other totals, to make sure we're not missing any transactions. Now, when it comes to customer-specific data quality checks, you know, here are some ones we are probably familiar with, things like address verification. You know, for that we can validate against postal standard records. We want to make sure that we don't have duplicate records for a single customer. So it's important to identify and merge duplicate customer profiles. We also want to make sure that we're grouping our customers consistently. So we want to make sure that we maintain appropriate groupings from a a customer segmentation perspective. And then we want to verify, say, opt in, opt out, accuracy of different kinds of preferences. And then finally, we want to make sure our contact information is up to date by confirming email addresses
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/applying-data-quality-checks?u=76281980&t=187)** or phone numbers. Now, when we're implementing customer data quality, we want to implement [[Real-Time]] validation at data entry points. It's often least expensive and least problematic to implement data quality controls at the point of data entry. We also want to use scheduled batch validation when we're working with large comprehensive data sets. We also want to implement exception reporting. And it's important not just to report on exceptions or errors that are found, but we want to make sure we have clear ownership about who is assigned to address those problems. And then finally, we want to have quality trend monitoring. This is important to help us identify any systematic issues that might be creeping into our pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (5), [[Data Integrity]] (1), [[Microsoft Products|Products]] (1), [[Real-Time]] (1)
> **CLI Commands:** make (12)
> **Analogies:** for example (5)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Building models](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=0)** - [Instructor] AI Model Development spans both predictive and [[Generative AI]] approaches. For example, with Predictive models, we're dealing with [[Algorithms]] and models that do things like classify images, or calculate regressions or cluster data, whereas with Generative models, we're actually generating things like text, image or code. Now, each of these approaches requires specific development practices, so let's take a look at first, Predictive models. Now, we'll look at Classification first. Classification models categorize data into predefined classes or labels, so some retail examples where we may use classification models include things like fraud detection and customer segmentation. Now, some key considerations here as we're working with the data are, are there class imbalances within our training data? For example, in the case of fraud detection, oftentimes, we have to deal with the fact that there are relatively few numbers of fraudulent transactions and many legitimate transactions. That's an example of a class imbalance. We also want to think in terms of how we evaluate different models. For example, we can use metrics like precision, recall, a combination of precision and recall called F1-score or confusion matrices. Now, another type of predictive model are Regression models. Now, Regression models predict continuous numerical values, rather than categories. Now, in retail, some examples where we may use Regression models
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=93)** include things like sales [[Forecasting]], inventory optimization, and pricing. Now, there are different model types even within the family of Regression models, and these include linear, polynomial, decision tree and neural network models. When we're evaluating, we often use things like Root Mean Squared Errors or Mean Average Error or the R-squared metric. Another type of predictive model are Clustering models. Now, we use Clustering models to discover natural groupings within data without depending on predefined labels, so we don't need a separate training set when we're working with Clustering. Now, in the retail world, we may use Clustering for doing things like market basket analysis or customer segmentation. Now, there are a variety of Clustering algorithms. Some of the most commonly used are K-means, hierarchical clustering algorithms in general and DBSCAN. Now, some key challenges to keep in mind are things like determining the optimal number of clusters. Now, when we're developing Predictive models, we want to plan for [[Data Preparation]], so cleaning, normalizing, and performing [[Feature Engineering]]. We want to think in terms of model selection, like which algorithm is going to work best with our problem? We'll have to plan for training and validation. That is validating the model or cross-validating the model. And one of the things we want to watch out for is what's known as over-fitting, or essentially like memorizing the training dataset and not really generalizing to the broader dataset in general. We also want to plan for time for hyperparameter tuning so that we can optimize model parameters,
>
> **[3:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=187)** and we want to think in terms of deployment and how we're going to integrate our models with other business systems. And then, of course, we need to think in terms of monitoring. This is both in terms of application or software performance, but also in terms of model performance, and watching for things like model drift. Okay, so that covered our discussion of [[Predictive AI]] models. Now let's think about Generative AI Applications and development. Again, Generative AI focuses on generating new content, and that new content is generated based on patterns that the model learned from its training data. Now, we often work with Foundation models, and these are used to build multiple types of applications. For example, [[Large Language Models (LLM)|large language models]] or LLMs are often used for text generation, sentiment analysis, and named-entity recognition. Image and vision models are used for image generation, as well as for object detection, and multi-modal foundation models learn from multiple types of [[Unstructured Data]], for example, a combination of text and images. Now, when it comes to Developing Generative AI Applications, we want to think in terms of API integration, 'cause oftentimes we're using third-party models, so you can think of, for example, OpenAI's [[ChatGPT]], or Anthropic's Claude or [[Google]]'s [[Gemini]]. We also need to pay attention to [[Prompt Engineering]], which is essentially the art or the practice of crafting effective instructions to get the content generated that we're actually looking for. We also may want to fine-tune models,
>
> **[4:41](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=281)** and this is the process of adapting foundation models or our starting models to our specific domain. Now, a common practice for complementing what models already know or what models have learned is to use RAG, or [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]]. This allows us to combine Generative models with other knowledge bases like the web, for example. And then we also want to consider knowledge augmentation where we use additional data sources like ontologies and taxonomies to complement what was learned in the model during its training. Now, some broadly cross-category implementation considerations to keep in mind are [[Data Privacy]] and security, both in model training and in deployment. Ethical considerations, like bias, fairness, and the ability to explain or being transparent about how decisions were made. We also want to think about cost, and cost often comes down to computational resources. Now, sometimes we may do some work on premises, sometimes we may do some work in [[Cloud Infrastructure]], so we want to make sure that we have mechanisms in place for helping us track costs regardless of what infrastructure we are using. We also want to be able to maintain our model, and that includes things like retraining on a regular basis to avoid the impact of data drift. And we also need to be aware of team skills. It's obvious that AI is changing at a rapid pace, new tools are constantly being developed, and people, practitioners are gathering insights into how to use these tools,
>
> **[6:13](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/building-models?u=76281980&t=373)** so it's important we help our team members keep up the skills in [[Data Science]] engineering, as well as in domain expertise. And then finally, we want to be sure that we are integrating with existing systems and workflows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (4), [[Algorithms]] (3), [[Forecasting]] (1), [[Data Preparation]] (1), [[Feature Engineering]] (1)
> **Analogies:** for example (7)
> **Warnings:** keep in mind (2), watch out (1), be aware (1)
> **Env Vars:** dbscan (1), api (1), rag (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Model assessment](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=0)** `- [Narrator] After we've built our models, we want to evaluate their quality. Now we're going to focus here in this discussion on [[Generative AI]] models. Now we want to assess the quality across multiple dimensions. And these include things like output relevance. So for example, does the content that was generated actually address this specific prompt that was provided? We also want to ensure that the content that's generated is both truthful and correct. Now, from a rhetorical perspective, we want to make sure the content is logically structured and consistent. We think of that in terms of coherence. And then finally, we want to make sure the content is fair, unbiased, and appropriate. Now, there are different evaluation methodologies that we can use. Obviously we want to do human evaluation. Now this can range from say, a panel of experts that is reviewing contents to a set of individuals who might be considered typical users, and getting their feedback. For large volumes of content generation, we might want to use automated metrics. Now these metrics will vary based on the type of content that's being generated. So for example, when we're dealing with natural language content, we might use automated metrics like the bilingual evaluation understudy metric, which is used for evaluating the quality of machine learning translation. There's also a metric for evaluating document summaries, or tech summaries called recall oriented understudy for gisting evaluations. And then there's also a perplexity measure which evaluates the predictive capability of language models.
>
> **[1:33](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=93)** We can also use A/B testing for comparing outputs with different versions of our models. And we may have reference-based evaluation where we compare our content against some kind of gold standard that exists either for that particular domain or it's just some industry standard. And then we can also use adversarial testing methods. And those are methods that probe for weakness or failures. Relevance and task completion is another broad category of quality metrics that we want to look for. Now, prompt adherence basically assesses how well outputs follow instructions. Task completion rate is a measure of the percentage of prompts that are successfully addressed while context retention is a measure of how well we're able to main focus throughout longer outputs. And then there is intent recognition, and that's basically being able to correctly identify underlying user needs. And then edge case handling, or how well do we perform on unusual or complex tasks. Now, output quality characteristics include some that we've already discussed. For example, coherence or the logical flow and consistency within the generated context. As well as grammar and fluency. Is the content we're generating linguistically correct? Is it readable? And then there's also more subjective measures like stylistic appropriateness. You know, does the tone match what the audience expects? Are there repetitive patterns, or formulaic responses that we want to avoid? And then finally, we want to think in terms of creativity.
>
> **[3:08](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/model-assessment?u=76281980&t=188)** Does the content represent appropriate originality without hallucinating or introducing any kind of other quality issues? Now, when we're implementing a quality evaluation framework, we want to establish clear evaluation criteria before deployment. We also want to combine automated metrics with human review process. It's important to implement [[Continuous Monitoring]] and have feedback loops so that we're able to actually improve the quality of the model. Now, to do this, we'll have to maintain benchmark data sets, and that will allow us to perform consistent comparisons across versions of our model. And we want the ability to track quality metrics over time. That's going to help us identify and spot any trends. And then finally, we want to be sure we address quality issues through model refinement and prompt optimization. Both of those are important factors for improving the ultimate output of our generative AI model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Continuous Monitoring]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)

#### [Challenge: Development practices](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-development-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-development-practices?u=76281980&t=0)** (light music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/challenge-development-practices?u=76281980&t=7)** - [Instructor] What are the two broad categories of AI models that require different sets of development practices?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### [Solution: Development practices](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-development-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-development-practices?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/solution-development-practices?u=76281980&t=7)** - [Instructor] The two types of AI models that require different development practices are known as [[Predictive AI]] and [[Generative AI]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive AI]] (1), [[Generative AI]] (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-preparation-feature-engineering-and-augmentation-for-ai-models/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on finishing this course. As you think about continuing your education process, I would suggest that you learn about [[Data Quality]] assessment and [[Data Engineering]]. Now, if you'd like a suggestion, the Complete Guide to [[Generative AI]] for Data Analysis and [[Data Science]] course is ideally suited to help you understand how to perform data quality assessments, how to use [[Generative AI Tools]] to generate code for data quality assessments, and then also, it provides a foundation in statistical principles to help you understand how we do data quality assessments. Now, many of the techniques covered in the Complete Guide to Generative AI for Data Analysis and Data Science are also helpful for building data engineering skills and developing data engineering pipelines. Now, along with that, I would suggest finding other courses in the catalog on data engineering and machine learning engineering with particular attention to building ML engineering pipelines. I'd also suggest learning about tools for building generative AI applications with a focus on [[LangChain]] in particular, and there are multiple courses in the catalog that can help you learn LangChain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (4), [[Data Engineering]] (4), [[Generative AI]] (3), [[Data Science]] (2), [[LangChain]] (2)
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