---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai
url: "https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai"
duration_minutes: 92
duration: 1h 32m
level: Intermediate
updated: 5/12/2025
learners: 5137
skills:
  - Real-Time
  - Data Processing
  - Batch Processing
  - Cloud-Native Architecture
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE5bR1Puq69Hw/learning-public-crop_675_1200/B4DZZkfbphG4Ac-/0/1745442684244?e=2147483647&amp;v=beta&amp;t=g_DFjThjXJ4Pd3kx3O8m6gkLBkzLURaAkI8sap5zZEk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Working with Data- Collecting, Processing, and Storing Data for AI]]'
prev_courses:
  - '[[Scalable Data Storage and Processing for AI Workloads]]'
path_nav: '[{"path":"Working with Data- Collecting, Processing, and Storing Data for AI","position":6,"total":6,"prev":"Scalable Data Storage and Processing for AI Workloads","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - skill/real-time
  - skill/data-processing
  - skill/batch-processing
  - skill/cloud-native-architecture
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Advanced%20Data%20Processing-%20Batch%2C%20Real-Time%2C%20and%20Cloud%20Architectures%20for%20AI.md)

![Advanced Data Processing: Batch, Real-Time, and Cloud Architectures for AI](https://media.licdn.com/dms/image/v2/D4D0DAQE5bR1Puq69Hw/learning-public-crop_675_1200/B4DZZkfbphG4Ac-/0/1745442684244?e=2147483647&amp;v=beta&amp;t=g_DFjThjXJ4Pd3kx3O8m6gkLBkzLURaAkI8sap5zZEk)

# Advanced Data Processing: Batch, Real-Time, and Cloud Architectures for AI

> As AI becomes more and more integrated into enterprise applications and workflows, architecting robust and scalable AI systems becomes even more important, particularly if you’re a data scientist or AI engineer. Beyond mastering machine learning techniques and technologies, an engineer working in AI needs to be able to leverage expertise in architecting AI and ML pipelines that achieve business ou

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai) | 1h 32m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Processing data for AI](#processing-data-for-ai)
- [**1. AI Architectures**](#1-ai-architectures) (6 videos)
  - [The ML life cycle](#the-ml-life-cycle)
  - [Feature engineering](#feature-engineering)
  - [Model training](#model-training)
  - [ML inference](#ml-inference)
  - [Scale and performance](#scale-and-performance)
  - [Architectures for AI](#architectures-for-ai)
- [**2. Batch AI Architectures**](#2-batch-ai-architectures) (7 videos)
  - [Characteristics of batch AI](#characteristics-of-batch-ai)
  - [Batch feature engineering](#batch-feature-engineering)
  - [Batch model training](#batch-model-training)
  - [Batch Inference](#batch-inference)
  - [Scaling batch AI](#scaling-batch-ai)
  - [Batch AI architecture example: Problem](#batch-ai-architecture-example-problem)
  - [Batch AI architecture example: Solution](#batch-ai-architecture-example-solution)
- [**3. Real-Time AI Architectures**](#3-real-time-ai-architectures) (7 videos)
  - [Characteristics of real-time AI](#characteristics-of-real-time-ai)
  - [Real-time feature engineering](#real-time-feature-engineering)
  - [Real-time model training](#real-time-model-training)
  - [Real-time inference architectures](#real-time-inference-architectures)
  - [Scaling real-time AI](#scaling-real-time-ai)
  - [Real-time AI architecture example: Problem](#real-time-ai-architecture-example-problem)
  - [Real-time AI architecture example: Solution](#real-time-ai-architecture-example-solution)
- [**4. Cloud AI Architectures**](#4-cloud-ai-architectures) (6 videos)
  - [Cloud and serverless computing](#cloud-and-serverless-computing)
  - [Architecting for the cloud](#architecting-for-the-cloud)
  - [AI in the cloud](#ai-in-the-cloud)
  - [Cloud platforms for AI](#cloud-platforms-for-ai)
  - [Cloud AI architecture example: Problem](#cloud-ai-architecture-example-problem)
  - [Cloud AI architecture example: Solution](#cloud-ai-architecture-example-solution)
- [**5. Hybrid AI Architectures**](#5-hybrid-ai-architectures) (5 videos)
  - [Hybrid computing](#hybrid-computing)
  - [AI using hybrid computing](#ai-using-hybrid-computing)
  - [AI architectures for hybrid computing](#ai-architectures-for-hybrid-computing)
  - [Hybrid AI architecture example: Problem](#hybrid-ai-architecture-example-problem)
  - [Hybrid AI architecture example: Solution](#hybrid-ai-architecture-example-solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing with AI data processing](#continuing-with-ai-data-processing)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Processing data for AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=0)** - [Instructor] Building and operating AI systems at scale requires a robust and scalable architecture to achieve business and machine learning objectives.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=11)** I will take you through an overview of building scalable architectures for machine learning.
>
> **[0:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=17)** We will discuss the unique considerations and constraints for batch and [[Real-Time]] AI and build architectures for such use cases.
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=27)** We will also discuss the enterprise, cloud, and hybrid deployment modes and how to architect AI systems for these deployments.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=36)** My name is Kumaran Ponnambalam.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=39)** Let's now get started with architectures for AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1)
> **Speakers:** - [instructor] (1)


### 1. AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [The ML life cycle](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=0)** - [Instructor] Let's begin this course by reviewing the machine learning lifecycle.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=5)** A machine learning project, or ML project for short, has many stages and tasks.
>
> **[0:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=12)** The machine learning lifecycle represents the end-to-end workflow that connects these tasks.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=18)** It constitutes building, executing, and maintaining machine learning models and applications.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=26)** Let's discuss some key characteristics of the ML lifecycle.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=30)** The ML lifecycle is an iterative process where the sequence of tasks are repeated from time to time to improve the models, it has three key flows.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=42)** They are [[Feature Engineering]], model training, and model inference.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=48)** We will discuss these three flows in the next few videos.
>
> **[0:53](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=53)** While the ML lifecycle focuses on the model, it also integrates into [[Application Development]], deployment, and operations.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=62)** Together, they manage the lifecycle of the application.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=66)** The lifecycle provides a template based on which architectures can be created for [[Artificial Intelligence (AI)|artificial intelligence]] applications.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=76)** Let's walk through the sequence of steps in a machine learning lifecycle.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=81)** The cycle begins with the data sources that provide the data sets for model training, testing, and inference.
>
> **[1:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=89)** Raw data is acquired from these data sources in various formats and stored in a data lake.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=98)** Then feature engineering is performed on this data to cleanse and extract features required for machine learning.
>
> **[1:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=107)** Then this produces the training dataset and the test dataset.
>
> **[1:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=112)** The training dataset is used to train a ML model.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=116)** The model is then tested using the test dataset.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=121)** This is an iterative process where the model is refined until satisfactory model performance is achieved.
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=129)** This model is then stored in a model repository.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=134)** The model is used for inference on the inference dataset.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=139)** This is typically done in production scenarios.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=143)** The outcomes of the model are then stored and published to the consumers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (2), [[Application Development]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Definitions:** is an  (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Feature engineering](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=0)** - [Instructor] Let's dive deeper into [[Feature Engineering]] functions in LM in this video.
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=6)** What is feature engineering?
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=8)** Raw input for machine learning is acquired from various source systems.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=13)** Feature engineering is the process of cleansing, extracting, and transforming such raw data to a form that is suitable for machine learning and inference.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=24)** It is a crucial piece of the puzzle that can determine the success or failure of the ML process.
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=31)** There are several tasks that may be performed in feature engineering.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=36)** A single feature engineering pipeline may implement one or more of these tasks.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=44)** We begin with data cleansing tasks.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=47)** What are the popular data cleansing tasks?
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=51)** Quality checks ensure that the incoming data meets the requirements for the use case.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=58)** This is especially needed when the data is acquired from external sources that are not trusted.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=65)** Deduplication eliminates duplicate data from the datasets.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=71)** Missing values pmputation provides replacement values for attributes when they are found missing.
>
> **[1:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=78)** Outlier handling analyzes the dataset for outliers and eliminates them so they don't skew the model.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=87)** Lineage checks verify the sources of data to ensure that they can be trusted.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=94)** Then comes the tasks for feature extraction.
>
> **[1:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=97)** Here, required features for a specific use case are filtered and selected for further processing.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=105)** Sampling is used to select a small dataset from a large dataset pool.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=111)** Sampling needs to maintain the distribution of data.
>
> **[1:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=114)** Filters can be used to remove unwanted data samples from the dataset, which are irrelevant to the use case.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=123)** Feature selection is used to select attributes that have good correlation to the target variables.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=130)** Descriptive [[Statistics]] are used to extract summary information about data if this is needed for model training.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=139)** Principle component analysis is another technique that is used to select features when the list of features are large in number.
>
> **[2:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=149)** Finally, there is feature transformation that modifies the features to fit into the ML algorithm being used for training or inference.
>
> **[2:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=159)** The first such transformation is scaling the features, so all features are in the same scale.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=166)** Then comes encoding features.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=169)** Categorical features can be encoded into numerical features so that they can be consumed by ML [[Algorithms]].
>
> **[2:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=178)** Embedding are used to convert text or images into numerical representations.
>
> **[3:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=183)** Augmentation is used to add features to the dataset based on other features available in the dataset.
>
> **[3:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=192)** Dimensionality reduction is another technique that is used to reduce the dimensions of the dataset, while maintaining the information and relationships.
>
> **[3:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=203)** When performing feature engineering, what are some key things to consider, especially from an architecture and design point of view?
>
> **[3:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=211)** Verification steps need to be added to these tasks to ensure that they are performed correctly without errors.
>
> **[3:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=220)** The tasks should be scalable, so large quantities of data can be processed within required latency thresholds.
>
> **[3:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=228)** The tasks should be repeatable.
>
> **[3:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=230)** Executing the same task on the same dataset should yield the same result each time.
>
> **[3:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=237)** [[Data Security]] and [[Privacy]] should be ensured during the feature engineering process to protect information as they move through the feature engineering pipeline.
>
> **[4:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=248)** AutoML is a key consideration too.
>
> **[4:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=251)** Automating the ML process end-to-end can help consistently generate new models efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (8), [[Statistics]] (1), [[Algorithms]] (1), [[Data Security]] (1), [[Privacy]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Model training](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=0)** - [Instructor] The next stage in ML after [[Feature Engineering]] is model training.
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=6)** Machine learning models have evolved over time from classical ML to [[Deep Learning]] to [[Generative AI]].
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=14)** These model architectures are significantly different from one another, and so are the training processes and requirements for them.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=24)** The type of model being built influences the architecture and design of the ML systems.
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=31)** What are the key training characteristics for different kinds of ML models?
>
> **[0:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=37)** Let's begin with classical machine learning.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=40)** In classical ML, we typically build [[Supervised Learning]] models like classification models or regression models, using techniques like Naive Bayes, [[Decision Trees]], or random forests.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=55)** We also do unsupervised learning like clustering.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=59)** To validate the models built, we use techniques like cross validation.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=64)** Metrics play a key part in the training process.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=68)** For classical ML, metrics like accuracy, F1-scores, RMSE, et cetera, are used.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=75)** These models require relatively small data sets, and they also have smaller resource requirements compared to generative AI.
>
> **[1:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=85)** The next type of models are [[Neural Networks]].
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=88)** Neural networks are more complex models.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=92)** They are typically used for [[Natural Language Processing (NLP)|natural language processing]] and understanding.
>
> **[1:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=97)** They can be used for [[Speech Recognition]] and synthesis.
>
> **[1:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=101)** Recurrent neural network classes of models are used for this purpose.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=105)** For image and vision, we use [[Convolutional Neural Networks (CNN)|convolutional neural networks]].
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=110)** These models use specialized metrics like BLEU and inception scores.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=115)** These models typically require larger data sets, mostly [[Unstructured Data]].
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=122)** They also need significant resources to train and serve.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=126)** GPUs are typically used for this purpose.
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=131)** Generative AI is the latest class of models that are becoming popular.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=136)** Transformer model architectures are used for this purpose.
>
> **[2:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=141)** Examples of such models include the GPT class of models and T5.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=146)** Diffusion models like [[DALL-E]] and [[Stable Diffusion]] are also used.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=152)** In generative AI, models are not created from scratch for each use case.
>
> **[2:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=158)** Rather, general purpose foundation models are created during the pre-training phase using general purpose data sets.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=166)** These are then customized to use cases using instruction tuning, [[Fine Tuning]], or transfer learning.
>
> **[2:53](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=173)** These models require massive data sets.
>
> **[2:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=177)** They also require massive [[Forms]] of compute resources to train a model.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=182)** In general, out of the box generative AI models are used to build use cases rather than training from scratch.
>
> **[3:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=189)** The ML [[System Architecture]] will need to adapt to the type of model being built and served.
>
> **[3:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=197)** What are the key architecture considerations for model training?
>
> **[3:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=201)** It starts with choosing the right type of programming language or toolkit like [[Python (Programming Language)|Python]] or C++.
>
> **[3:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=208)** Training may need GPUs, and the architecture should be able to bring in such compute power into the pipeline.
>
> **[3:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=216)** Training frameworks also play a key role.
>
> **[3:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=219)** These include scikit-learn, [[PyTorch]] and [[TensorFlow]].
>
> **[3:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=224)** Distributor training may be required based on where the data sets are available and the types of resources that are available.
>
> **[3:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=232)** Training platforms, like Databricks and SageMaker, can be considered to manage the training workloads.
>
> **[3:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=239)** Experiment tracking systems are needed to log and track training experiments and results.
>
> **[4:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=246)** Model repositories or registries are needed to track and manage the lifecycle of the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (5), [[Neural Networks]] (2), [[Feature Engineering]] (1), [[Deep Learning]] (1), [[Supervised Learning]] (1)
> **Env Vars:** rmse (1), bleu (1), gpt (1), dall (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [ML inference](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=0)** - [Instructor] Having discussed [[Feature Engineering]] and model training, let's discuss ML inference in this video.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=8)** Inference happens in production settings.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=11)** Building an inference architecture for such a setting requires careful analysis of the tasks to be executed, the expected performance goals, and the infrastructure needed to achieve these goals.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=26)** What are the tasks involved in model inference?
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=30)** First, raw data that is provided for inference need to be pre-processed and prepared for inference.
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=38)** In pre-processing, we need to ensure security of the model itself and protect it from intended and unintended hacks and misuse.
>
> **[0:49](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=49)** Raw data may need to be temporarily stored or cached before it is processed.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=55)** The feature engineering pipeline used for model training needs to be replicated to perform the same operations on inference data also.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=66)** Reliable transformation of data needs to be insured either through APA calls or queues.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=72)** Then comes serving.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=75)** The model is usually in a model repository.
>
> **[1:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=78)** The model needs to be loaded up in memory for serving.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=82)** Then it can be used for predicting target variables or generating outputs.
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=88)** Validation can be performed as part of the serving process itself to ensure that the outcomes are reliable.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=96)** There could also be post-processing involved to get the model outputs ready for consumption for downstream application or users.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=105)** This can involve sanity checks, transformations to consumable formats, intermediate storage in persistent stores, or publishing them to downstream queues.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=118)** What are some key considerations when creating architectures for model inference?
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=124)** The incoming data volume or velocity needs to be estimated.
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=129)** This drives [[Scalability]] needs and data mines the architecture patterns and technologies that will be used.
>
> **[2:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=137)** Feature engineering is a critical piece in inference also, and that needs to be executed reliably within latency constraints.
>
> **[2:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=147)** A good [[Data Engineering]] pipeline is needed here.
>
> **[2:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=151)** Latency requirements for model prediction or generation plays a key role in determining the compute resources needed.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=160)** Error recovery and [[Resiliency]] should be considered when creating the architecture.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=166)** The system should continue to process incoming requests even if there is a failure within a single request.
>
> **[2:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=175)** Telemetry is essential to capture all the inputs and outputs for the model.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=180)** This is needed for diagnostics and also for improving the data sets.
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=186)** Finally, data that is telemetry should be archived when possible for future training needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (3), [[Scalability]] (1), [[Data Engineering]] (1), [[Resiliency]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** apa (1)
> **Speakers:** - [instructor] (1)

#### [Scale and performance](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=0)** - [Presenter] One of the key goals for an architecture is to be able to scale up, to meet the processing demands for the use case.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=9)** When it comes to ML, scale and performance plays a key role in meeting the customer and business expectations.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=18)** It is hence, an important focus area for ML architectures.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=23)** What are the key enablers for scale and performance when it comes to ML?
>
> **[0:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=29)** Let's briefly touch upon these enablers in this video.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=33)** We will discuss more about them in the later chapters.
>
> **[0:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=37)** [[Feature Engineering]] requires [[Data Processing]] pipelines that can handle the incoming data volumes within expected latency thresholds.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=47)** Feature engineering plays a key role in both model training and inference, so ensuring that these pipelines can scale is a critical responsibility for an AI architect.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=60)** Next, comes the model architecture.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=62)** The model architecture determines the kind of resources needed.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=67)** It also determines the scale of inputs that can be processed.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=72)** Choosing the right model architecture is critical to ensure that the use case achieves the required accuracy at scale.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=81)** In systems where the model needs to be continuously refined because of changing environments, auto ML becomes a key enabler.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=90)** The capacity to do feature engineering, model training and deployment in an automated fashion helps in iterating fast, without the need for expensive [[Human Resources (HR)|human resources]].
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=102)** Model serving infrastructure determines the processing volumes, concurrency and auto-scaling that can be supported for ML.
>
> **[1:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=112)** Choosing the right model serving infrastructure is critical for achieving the performance goals for the use case.
>
> **[2:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=120)** Vertical scaling has limitations in how much it can scale.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=124)** The ability to use distributed computing for feature engineering, model training and inference is key to scale the system horizontally as the system load increases.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=136)** Monitoring and observability is key to ensuring that the system is performing as expected.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=143)** Metrics help in ensuring that the required performance thresholds are met.
>
> **[2:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=148)** This requires a telemetry infrastructure to collect data continuously, process and deliver metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (4), [[Data Processing]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Architectures for AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=0)** - [Instructor] How are the architectures for AI impacted by the characteristics of the use case?
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=7)** In general, the type of architecture needed for AI is heavily impacted by two considerations, the latency constraints for the use case and the expected deployment mode for the use case.
>
> **[0:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=21)** What is latency in ML?
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=23)** It can be considered as the time elapsed between when raw data is available for training or inference, and when the training or inference is successfully completed.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=35)** This involves the entire ML pipeline, including [[Feature Engineering]], multiple iterations of training and inference.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=44)** Training and inference can have different latency requirements.
>
> **[0:49](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=49)** This brings us to two modes of ML, namely batch and [[Real-Time]].
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=55)** [[Batch Processing]] involves processing data in batches.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=60)** Typically, this can take a long time, greater than an hour.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=65)** Batch jobs are run at regular intervals like hourly or weekly.
>
> **[1:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=70)** ML training is usually a batch process.
>
> **[1:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=73)** It involves multiple iterations of training until expected results are achieved.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=79)** In rare use cases, real-time training is used.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=83)** ML inference, on the other hand, can be both batch or real-time.
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=88)** In batch inference, input data is periodically processed to generate outcomes like hourly or daily.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=96)** In real-time, streaming processes are used to produce results, each time an input record is available.
>
> **[1:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=103)** The choice of batch or real-time for a given use case impacts the architecture choices significantly.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=110)** We will discuss more about this in the later chapters.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=115)** This is how the training and inference modules are deployed for execution.
>
> **[2:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=120)** This is the mode in which the training and inference modules are deployed for execution.
>
> **[2:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=127)** In local or enterprise deployments, ML is done on enterprise owned resources or clusters.
>
> **[2:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=135)** Training can even be done on a laptop.
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=138)** The enterprise buys the resources, deploys them, and manages them.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=143)** Cloud-based deployments have become popular now as they provide easy management and scaling.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=150)** When ML is done on the cloud, the considerations are different.
>
> **[2:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=154)** Software and tools used are optimized for the cloud.
>
> **[2:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=158)** In hybrid deployments, a single architecture uses components deployed on both local and cloud environments.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=166)** Edge devices may also be added to hybrid deployments.
>
> **[2:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=170)** We will explore how cloud and hybrid deployments impact architecture in later chapters in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (5), [[Feature Engineering]] (1), [[Batch Processing]] (1)
> **Speakers:** - [instructor] (1)


### 2. Batch AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Characteristics of batch AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=0)** - [Instructor] In this chapter, we will explore Batch AI.
>
> **[0:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=4)** We will discuss how to architect machine learning pipelines for [[Batch Processing]].
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=11)** Model training is inherently an iterative process.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=15)** Even for inference, Batch systems are easier to build and manage than [[Real-Time]] systems.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=22)** So it's recommended to build Batch architectures by default, unless the use case demands real-time architectures.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=32)** What are the key characteristics of Batch AI?
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=36)** In Batch AI processing is done through jobs.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=39)** These jobs can be scheduled to run at fixed intervals, or they can be invoked when required.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=47)** Data is processed in bulk as batches for both [[Feature Engineering]] and model training.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=54)** [[Big Data]] batch-processing techniques are typically used.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=58)** Model training is done offline.
>
> **[1:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=61)** It can be done in a development environment.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=65)** Data that is processed can be used again and again for model training.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=71)** Data is pulled from data sources through queries.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=75)** Final results are pushed to data syncs.
>
> **[1:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=78)** The pull and push mode for data is possible since both are done on demand when the job runs.
>
> **[1:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=86)** Because it's offline, data scientists have better control of the process.
>
> **[1:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=91)** They can do model validation until they are satisfied and promote models when required.
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=99)** What are some key focus areas while architecting Batch AI?
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=104)** Jobs need to be scheduled in Batch processing.
>
> **[1:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=107)** Multiple jobs need to be orchestrated together, so the output of one job can flow as input to another job.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=116)** This requires job orchestration software.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=119)** Large-scale feature engineering needs to use big data processing patterns and tools to scale to expected data volumes.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=128)** Model training costs can quickly get out of control.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=132)** Managing costs for training and inference requires careful budgeting, resource provisioning, and monitoring.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=140)** To speed up processing and reduce latency, the architecture should provide for maximum parallelism and minimize bottlenecks in the data flow.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=150)** Batch AI should be repeatable, so if a given step fails, it can be fixed and the processing can resume from there on.
>
> **[2:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=159)** This requires a design that lends itself to roll back and reprocessing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Batch Processing]] (2), [[Real-Time]] (2), [[Feature Engineering]] (2), [[Big Data]] (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Batch feature engineering](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=0)** - [Instructor] In this video, we will discuss architectures for [[Feature Engineering]] in batch AI.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=7)** Let's walk through a reference template pipeline for batch feature engineering.
>
> **[0:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=12)** Typically, feature engineering may require data from multiple sources.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=18)** These data sources could be files, [[Databases]], or [[Cloud Services]].
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=24)** Typically, each data source will have a data extractor or a transfer job.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=30)** These jobs run periodically, connect to data sources, and [[Fetch]] batches of records.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=36)** Data acquired from data sources are saved in a data lake in its raw form.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=43)** This becomes a local copy of the data from where further processing can be done with repeatability.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=51)** From here, a series of jobs can be run to transform data.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=56)** Data cleansing and extraction jobs can filter and merge data sets.
>
> **[1:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=61)** Outputs of these jobs can be stored in temporary data stores.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=66)** Another set of feature transformation jobs can run to transform the data to [[Forms]] that can be consumed by machine learning.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=75)** This processed and transform data is typically stored in a feature store.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=81)** A job manager is needed to schedule and execute jobs.
>
> **[1:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=85)** The job manager also monitors the execution and re-triggers if failures are encountered.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=93)** This is a template pipeline for batch.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=96)** The number of data sources and jobs can vary based on the use case.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=102)** Let's review the pipeline we discussed.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=105)** The job manager plays a key role in managing the entire pipeline.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=110)** It also takes care of reporting the status of the jobs and their success failure results.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=117)** Each jobs reads from a data source and writes to a data sink.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=121)** Jobs do not directly communicate with each other.
>
> **[2:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=125)** This is an asynchronous pipeline.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=128)** Since it's asynchronous, data needs to be persisted to save the processing results.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=134)** Hence, all data stores in a batch pipeline are typically persistent.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=139)** Jobs should be designed as idempotent.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=143)** It should be possible to rerun a job and still get the same results without double counting.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=150)** What are the technologies that are typically used in batch feature engineering?
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=155)** For job manager, we can use tools like [[Apache Airflow]], and Apache Oozie.
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=161)** For data processors, we can build them as plain [[Python (Programming Language)|Python]] services.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=166)** For scale, we can use [[Apache Spark]] or Apache Flink.
>
> **[2:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=171)** Data transfer can be done using FTP, [[Representational State Transfer (REST)|REST]], or [[SQL]], depending on the interface that the data source supports.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=180)** [[Data Storage]] can be done with a variety of options.
>
> **[3:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=184)** File systems like distributed file systems, RDBMS, and [[NoSQL]] databases are popular in [[Batch Processing]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (4), [[Databases]] (2), [[Cloud Services]] (1), [[Fetch]] (1), [[Forms]] (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** ftp (1), rest (1), sql (1), rdbms (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Batch model training](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=0)** - [Instructor] Let's now continue our discussion on batch AI architectures with batch model training.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=8)** What does the batch training pipeline architecture look like?
>
> **[0:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=12)** The pipeline starts where the [[Feature Engineering]] pipeline ends.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=16)** The feature store has the data ready for machine learning.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=20)** First, this data is sent through a job to split the dataset.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=25)** Typically, the dataset is split into a training dataset and a test dataset.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=32)** A third dataset called validation dataset may also be added if final validation is required.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=40)** The sets so created are stored in the respective data stores.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=45)** The model training job then kicks in.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=48)** It uses the training data set to train the model.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=51)** Depending on the type of model, this may take a few seconds or a few days.
>
> **[0:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=57)** The model training job delivers a model.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=60)** This could be a pickle file.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=62)** It can be a large language model with millions of parameters.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=67)** A model testing job then runs on this model.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=71)** It uses the test data set to test the model and measure its accuracy.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=76)** If the accuracy numbers are not satisfactory, the pipeline goes back to the training job.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=83)** The training job may adjust model architecture configurations or hyper parameters, and retrain the model.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=90)** The process of training and testing will continue until satisfactory results are obtained.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=96)** The final model is then pushed into a model repository.
>
> **[1:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=100)** Sometimes it's called the model registry.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=104)** The model registry tracks the lifecycle of the model.
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=108)** The progress and results of the experiments are then sent to an experiment tracking system for logging, analysis, comparisons, and archiving.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=118)** A job manager drives the jobs in the model training pipeline.
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=122)** It monitors the jobs and reports their status and results.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=128)** What kind of technologies are typically used for batch model training?
>
> **[2:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=133)** For job managers, we will again use [[Apache Airflow]] or Apache Oozie.
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=138)** If [[Apache Spark]] is used, it'll have its own job manager.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=143)** For job executors, model training code is typically built in [[Python (Programming Language)|Python]], Apache Spark, or Apache Flink can also be used to train models at scale.
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=155)** For training frameworks, scikit-learn, [[PyTorch]] or [[TensorFlow]] can be used based on the type of model that is being built.
>
> **[2:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=165)** Training platforms like [[MLflow]], Kubeflow, or Databricks can also be used.
>
> **[2:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=170)** These platforms provide model repositories, experiment tracking, as well as job management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Spark]] (2), [[Feature Engineering]] (1), [[Apache Airflow]] (1), [[Python (Programming Language)|Python]] (1), [[PyTorch]] (1)
> **CLI Commands:** apache (5), python (1)
> **Speakers:** - [instructor] (1)

#### [Batch Inference](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=0)** - [Instructor] Having discussed the [[Feature Engineering]] and training architectures for Batch AI, let's discuss the inference part in this video.
>
> **[0:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=10)** To begin with, model inference would need the same feature engineering pipeline as used in training.
>
> **[0:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=17)** This is needed to transform source data in production and get it ready for inference.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=23)** So the feature engineering pipeline is needed for both training and production.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=30)** What does the template for a batch inference pipeline look like?
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=36)** It begins with the feature store, produced by the feature engineering pipeline in production.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=42)** We also have the approved model available from the model repository.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=47)** Both of these are provided to a model serving job.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=51)** The job runs periodically and gets the next batch of input data.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=56)** It applies the model and produces the outputs.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=60)** The outputs may optionally go through a post-processing job to transform them into consumable [[Forms]].
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=67)** These outputs are then stored in a persistent store like a file or a database.
>
> **[1:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=74)** Additionally, a telemetry pipeline is used to capture all the inputs, outputs, and performance measures for inference.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=82)** This pipeline processes them and stores them in a trace database.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=87)** This can then be used to compute inference metrics.
>
> **[1:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=91)** A job manager is used again to manage the inference and post-processing jobs.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=98)** What kind of technologies are needed for batch inference?
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=102)** For job managers, we could again use [[Apache Airflow]] or Apache Oozie.
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=108)** For job executors, we can build the job in plain [[Python (Programming Language)|Python]] or use [[Apache Spark]] or Apache Flink as the processing engines.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=117)** For inference frameworks, we can use scikit-learn, [[PyTorch]], or [[TensorFlow]].
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=123)** Typically, the same inference framework that was used for training the model is used in production also.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=130)** For telemetry pipeline, we can use [[Kubernetes]] [[MLflow]], or Kibana.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=136)** For data stores, we can use file systems, or RDBMS [[Databases]] to store the results.
>
> **[2:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=142)** We can also use Logstash for the telemetry pipeline.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=146)** These are representative technologies.
>
> **[2:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=149)** We could use any equivalent technology as desired by the ML team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (3), [[Forms]] (1), [[Apache Airflow]] (1), [[Python (Programming Language)|Python]] (1), [[Apache Spark]] (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** rdbms (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Scaling batch AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=0)** - [Instructor] How do we scale batch AI?
>
> **[0:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=3)** Let's discuss the levers and focus areas for scaling batch AI in this video.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=9)** When it comes to batch AI, scaling needs are determined by the expected data volumes and the latency thresholds for the use case.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=18)** Higher data volumes and lower latency requirements would mean more scaling is needed for the architecture.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=28)** What are some of the levers that can be used to scale a batch AI architecture?
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=35)** We begin with scaling [[Feature Engineering]].
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=38)** Concurrent reads from data sources using multiple connections can read more records in less amount of time.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=46)** Using [[Big Data]] processing patterns, like MapReduce, can increase horizontal [[Scalability]] of the pipeline.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=54)** Using N + 1 deployments for the jobs can provide parallel processing of records.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=60)** Concurrent writes to data sinks using multiple connections can also increase write throughput.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=68)** Using on-demand scaling to increase the number of compute resources can help handle spikes in loads.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=76)** How can we scale model training?
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=79)** We can use efficient data formats that help process more data with the same amount of resources.
>
> **[1:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=86)** Data sharding can be used for parallel processing during training.
>
> **[1:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=91)** Distributed training can be used to concurrently train parts of the model on different compute clusters.
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=99)** [[Hardware]] acceleration helps speed up model training.
>
> **[1:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=103)** Checkpointing and resume techniques can be used to continue training from where it left off in case of a pause or error.
>
> **[1:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=112)** Building parallelism into the model can help a single model process multiple inputs at the same time.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=121)** Batch sizes are important, especially in [[Deep Learning]] models.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=126)** How about scaling model inference?
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=129)** To scale model inference, one technique is to reduce the size of the model, especially in deep learning and [[Generative AI]].
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=138)** Quantization, model pruning, and model distillation are techniques that can be used for that.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=145)** Hardware acceleration again helps with model performance.
>
> **[2:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=151)** Batching requests and using parallel inference can help in scaling the volume of inference.
>
> **[2:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=158)** Autoscaling can again help with load spikes to provision additional resources when needed.
>
> **[2:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=164)** Caching of data can help in faster data access.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=169)** What are some key considerations when scaling batch AI?
>
> **[2:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=174)** Latency is not critical for batch, so focus on cost-effectiveness of the architecture.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=180)** It's important to keep costs low, especially for expensive compute resources, like GPUs.
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=188)** Concurrency and parallelism is the key lever across all phases of the ML lifecycle.
>
> **[3:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=195)** Architect to scale horizontally.
>
> **[3:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=198)** Consistency of data and results and reliability of the pipeline needs to be ensured.
>
> **[3:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=204)** This includes providing fault-tolerant capabilities, like N+ 1 architectures or primary backup setups.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=213)** When services go down, they should be able to resume from where they left off without loss of integrity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Deep Learning]] (2), [[Feature Engineering]] (1), [[Big Data]] (1), [[Scalability]] (1)
> **Speakers:** - [instructor] (1)

#### [Batch AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Let's now implement a batch AI architecture for the customer segmentation use case.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=7)** In this video, we will discuss the use case we are trying to build an architecture for.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=13)** In the next video, we will design the architecture.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=18)** In customer segmentation, we want to classify customers based on the amount of business they bring in and their future lifetime value.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=28)** For doing this, we use data collected from their marketing responses, their buying history, and customer care interactions.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=39)** To reiterate on the customer segmentation use case, this is a classification use case in machine learning.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=47)** We are trying to identify a category the customer belongs to.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=52)** We have three sources of data, namely the Salesforce Marketing Cloud, from where we get marketing responses, an enterprise sales database that provides buying history and support logs from the customer care team.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=68)** We want to classify the customers as platinum, gold, silver, and bronze based on their relationship with the enterprise.
>
> **[1:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=77)** The classification should be performed daily.
>
> **[1:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=80)** The customer classes are updated based on new data received about the customers.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=87)** Let's build an architecture for it in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Batch AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=0)** - [Instructor] Let's now implement the customer segmentation architecture with Batch AI.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=7)** We begin with [[Feature Engineering]].
>
> **[0:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=10)** We have three sources of data, namely the Salesforce Marketing Cloud, the enterprise sales database, and the contact center history files.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=20)** We add an [[Apache Spark]] job to [[Fetch]] marketing responses data periodically using [[Representational State Transfer (REST)|REST]] APIs from the Salesforce Marketing Cloud.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=30)** We add another Apache Spark job to read the sales data from the enterprise sales database using [[SQL]].
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=39)** We also have an Apache Spark job that reads contact center history files using FTP.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=46)** All the three jobs will write the acquired data into a data lake.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=51)** We could build a data lake using [[MongoDB]] as it provides a flexible document format to dump any kind of data.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=60)** Then we have an Apache Spark job to merge the three data sets.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=64)** It will first summarize the data by each customer and then merge them across the data sets using the customer ID as the key.
>
> **[1:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=73)** The merge data is then stored into a temporary database implemented in MongoDB.
>
> **[1:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=80)** Then an extract features job runs to get the required features for ML and transform them.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=87)** This will also be an Apache Spark job.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=90)** The final list of features are stored in a MongoDB database.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=95)** Since all the jobs run on Apache Spark, it can itself be used to manage all the jobs.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=102)** There is no need for a separate job manager.
>
> **[1:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=106)** We now move on to the batch model training architecture.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=110)** This begins with the feature store in MongoDB.
>
> **[1:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=114)** The first job here will split the data into training and test data sets.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=119)** The job is built in [[Python (Programming Language)|Python]], and the training and test data sets can be stored as files, assuming that they are of manageable sizes.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=128)** A model training job is built in Python to use the training data and build the model.
>
> **[2:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=135)** This can run as a docker container, or it can be triggered directly.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=140)** The model output is stored in a pickle file.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=143)** A model test job is built in Python to use the test data set and test the accuracy of the model.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=150)** The training and test jobs iterate until satisfactory results are obtained.
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=155)** The model is then stored and managed in a model repository like [[MLflow]].
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=161)** MLflow can again be used for tracking the training experiments.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=166)** [[Apache Airflow]] can be used as the job manager to manage all the Python jobs for training.
>
> **[2:53](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=173)** We now move to model inference for customer segmentation.
>
> **[2:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=178)** The feature engineering pipeline we reviewed earlier will provide the features in a MongoDB database.
>
> **[3:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=185)** The segmentation model is available in the MLflow model registry.
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=190)** We built a model serving job in Python that will read the features from MongoDB, apply the segmentation model for each customer, and generate the categories for the customer.
>
> **[3:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=202)** The results will go through post-processing to translate numeric category values to text.
>
> **[3:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=208)** The results are then finally stored back into MongoDB.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=213)** A telemetry pipeline is created using MLflow to collect the inference data and store them in the tracer's database.
>
> **[3:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=221)** We have tried to minimize the number of technologies and have used Spark and Python for the jobs and MLflow for telemetry and model repository.
>
> **[3:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=231)** Apache Airflow can be used to manage the pipeline.
>
> **[3:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=235)** This is a classical example of how machine learning pipelines are built in the batch mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Apache Spark]] (6), [[Python (Programming Language)|Python]] (6), [[MLflow]] (5), [[Feature Engineering]] (2)
> **CLI Commands:** apache (8), python (6), docker (1)
> **Env Vars:** rest (1), sql (1), ftp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Real-Time AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Characteristics of real-time AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=0)** - [Instructor] Having discussed batch AI in the previous chapter, let's talk about [[Real-Time]] AI architectures in this chapter.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=9)** When it comes to real-time AI, real-time inference is popular for a number of use cases that require on-demand predictions.
>
> **[0:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=19)** On the other hand, real-time training is limited in usage, only for use cases that require instant model learning and adoption.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=30)** What are some key characteristics of real-time AI?
>
> **[0:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=34)** In real-time AI, we deal with events generated from sources typically one at a time.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=42)** These could be real-time user inputs or business events.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=47)** To do low-latency [[Data Processing]], we need to use stream processing techniques that deal with one event at a time.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=56)** If we are doing real-time training, then that requires continuous model updates, including testing and validation, and then promoting these models to production.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=68)** Instead of batch jobs, inference services are deployed as either API-based [[Microservices]] or as queue consumers.
>
> **[1:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=78)** This enables them to respond to events immediately and at scale.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=84)** In real-time AI, response times and throughput play a key role in generating outcomes with low latency.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=93)** When failures happen, real-time pipelines typically skip ahead and move to new events rather than trying to reprocess failed events.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=104)** What are the key architecture focus areas for real-time AI?
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=110)** The first focus area is data processing for [[Feature Engineering]].
>
> **[1:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=114)** [[Data Streaming]] and stream processing at scale are required to handle events in real time, especially for inference.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=124)** When [[Databases]] are accessed, records should be read at low latency.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=130)** Similarly, updates should be done in low latency.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=134)** Models should be loaded into memory with low latency or they should be cached in memory.
>
> **[2:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=141)** Serving should also be done with low latency.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=145)** Building real-time inference requires building on-demand interfaces.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=150)** This includes API-based services that can be called upon when needed and also queue consumers that can consume records from queues whenever they become available.
>
> **[2:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=163)** Real-time systems are susceptible to load spikes.
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=167)** To deal with this, the architecture should be capable of auto-scaling and be able to load balance between available resources to maintain low latency.
>
> **[2:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=178)** The system should also be resilient to failures.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=182)** In case of failures, it should be able to recover quickly and proceed with other pending tasks without being blocked on the failed task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (13), [[Data Processing]] (2), [[Microservices]] (1), [[Feature Engineering]] (1), [[Data Streaming]] (1)
> **Env Vars:** api (2)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Real-time feature engineering](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=0)** - [Instructor] Let's now dive deeper into [[Real-Time]] [[Feature Engineering]] architectures.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=7)** When it comes to feature engineering architectures, we can build it either as a synchronous pipeline or as an asynchronous pipeline.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=16)** The choice between synchronous and asynchronous depends upon the specific use case.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=22)** Let's first discuss the synchronous template.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=25)** Here, the feature engineering function is built as an API-based service that can serve feature engineering requests from a client.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=35)** A client of this service will provide the raw input data for feature engineering.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=41)** This can be either during real-time training or real-time inference.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=46)** The feature engineering service will proceed to execute all cleansing, filtering, and transformation operations on this input.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=56)** In addition, it may use additional data sources to look up or reference data and use it to enhance the input data.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=65)** The final output of feature engineering is returned back to the feature engineering client.
>
> **[1:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=70)** The feature engineering service itself does not do any persistence on its side.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=76)** Next, let's look at an asynchronous pipeline template for feature engineering.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=82)** Here, the input data sources may either be in a database from where the records need to be read, or it can be available in a queue from where they can be de-queued.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=94)** For the database, we can have a streaming job that reads records from the database and performs feature engineering functions specific to that data source.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=105)** The results of this job are then pushed into a raw data queue.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=110)** For the data queue input, we can have a streaming job that does similar feature engineering functions specific to data in that queue.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=119)** The outputs are again dumped into another raw queue.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=123)** A data merge process can then consume these individual raw queues, merge them, and process them further.
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=131)** There can be many such streaming jobs that do filtering, merging, and transforming data.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=136)** They may read from queues and write to queues.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=140)** The final feature engineering output is then pushed into a feature queue.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=145)** What are some of the key characteristics of feature engineering pipeline design?
>
> **[2:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=149)** We see that they are either API-driven or event-driven architectures.
>
> **[2:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=154)** There is low-latency communication between the processes and the queues.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=160)** Long-running jobs are eliminated, and the focus is to quickly process data and deliver outputs.
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=167)** When data needs to be persisted for archival reasons, such jobs should not block the main processing job.
>
> **[2:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=175)** Data writes to disk can have longer latency, so those should be handled asynchronously as separate jobs.
>
> **[3:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=183)** When failure happens for a single event or record, it's not recommended to attempt reprocessing as it may delay the processing of other records.
>
> **[3:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=194)** Rather, it's recommended to skip and move on to other records.
>
> **[3:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=199)** What technologies are available for real-time processing?
>
> **[3:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=204)** For data queues, we can use queuing technologies, like [[Apache Kafka]] and Apache Pulsar.
>
> **[3:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=212)** For data processors, we can use [[Python (Programming Language)|Python]] or [[Java]] Services to build API-based [[Microservices]].
>
> **[3:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=219)** We can also use [[Apache Spark]] or Apache Flink when processing of queues is required at scale.
>
> **[3:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=227)** For data transfer between services, [[Representational State Transfer (REST)|REST]], gRPC, and queues can be used.
>
> **[3:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=234)** When [[Databases]] are needed, It's recommended to use low-latency databases, like RDBMS, or data caches, like [[Redis]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (14), [[Real-Time]] (4), [[Databases]] (2), [[Apache Kafka]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** api (3), rest (1), rdbms (1)
> **Best Practices:** recommended (3)
> **Exercise Files:** template (2)
> **Code Identifiers:** grpc (1)
> **Speakers:** - [instructor] (1)

#### [Real-time model training](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=0)** - [Instructor] What does model training in real time look like?
>
> **[0:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=4)** What are the architectural considerations?
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=8)** Let's understand the constraints and considerations for [[Real-Time]] model training.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=14)** Model training cannot be done one record at a time.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=18)** It needs a significant sample size big enough to address all expected variations in input data.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=26)** This is what makes it hard to do model training in real time as sufficient sample sizes may not be available in a short period of time.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=36)** So model training can only be done in batches or micro-batches in real time.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=42)** We can collect data in real time for smaller intervals, like every 30 minutes, and then use that data to build a new model.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=52)** We can also use windowing to keep a longer interval of data to retrain the model.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=59)** The training pipeline should have automatic validation, review, approval, and promotion based on predefined criteria so manual intervention is not needed.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=71)** In real time, it may be a better option to only fine tune the base model so the original learnings of the model are retained and not recreate the model from scratch.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=84)** What does the real-time training pipeline look like?
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=87)** The pipeline looks similar to the batch training pipeline as we are still doing batch training at smaller intervals.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=95)** The input features may either come from a [[Feature Engineering]] service, a feature store, or a feature queue, depending on the use case.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=104)** The dataset split job will consume features in micro-batches.
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=108)** Then the actual spread model training and testing process will happen similar to batch.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=115)** The key difference is the size of the batches and latency for training, which will be smaller in real time.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=123)** What are some of the real-time training technologies to use for the real-time AI architecture?
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=129)** For data sources, we use low latency sources like caches, message queues, and low latency [[Databases]].
>
> **[2:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=137)** For job managers, we may still use [[Apache Airflow]] and Apache Oozie.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=143)** If [[Apache Spark]] or Apache Flink is used for job execution, then they will provide the job manager also.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=152)** For job executors, [[Python (Programming Language)|Python]] [[Microservices]], Apache Spark, and Apache Flink can provide low latency processing.
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=161)** Training frameworks like scikit-learn, [[PyTorch]], or [[TensorFlow]] can be used.
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=167)** For training platforms, we can use [[MLflow]], Kubeflow, or Databricks similar to Batch AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (4), [[Apache Spark]] (2), [[Feature Engineering]] (1), [[Databases]] (1), [[Apache Airflow]] (1)
> **CLI Commands:** apache (6), python (1)
> **Analogies:** similar to (3)
> **Speakers:** - [instructor] (1)

#### [Real-time inference architectures](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=0)** - [Instructor] Having discussed [[Real-Time]] [[Feature Engineering]] and model training, let's now discuss how model inference works in the real-time mode.
>
> **[0:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=10)** For inference too, we can either do it synchronously or asynchronously.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=16)** Let's first discuss how to architect the synchronous pipeline.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=20)** In this case, the inference service is hosted as a microservice with an API.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=26)** This service can scale in N+1 configuration as needed.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=32)** An inference client, typically a real-time application or an inference user will call the inference service API with raw input data.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=42)** The inference service will first invoke the feature engineering service we designed in the earlier video.
>
> **[0:49](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=49)** This will perform the feature engineering tasks and will return back the inputs ready for ML to the inference service.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=58)** The inference service will then load the ML model from the model repo.
>
> **[1:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=63)** The model may also be cached in memory for repeated inference calls.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=68)** The inference service will invoke the model with the input and get the output.
>
> **[1:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=74)** If any post-processing is needed, the inference service will invoke the post-processing service.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=81)** The output of this service is then returned to the inference service.
>
> **[1:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=86)** This in turn, returns the final output to the inference client.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=90)** The inputs, outputs, and any performance measures are published to a telemetry pipeline for archiving and analytics.
>
> **[1:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=100)** Let's now discuss the asynchronous pipeline for inference.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=104)** In this case, the model is available in the model repository and the ML ready features are available in a feature queue, as discussed in the earlier videos.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=116)** The inference process runs as a streaming job.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=119)** It pulls the next available request from the feature queue.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=124)** It loads the model from the model repository.
>
> **[2:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=127)** It may also cache the model.
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=129)** Alternatively, the model itself can be run as its own service endpoint.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=136)** The output of inference is then published to the raw output queue.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=140)** The post-processing streaming job runs to perform any post-processing needed and publishes the processed output to the final output queue.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=150)** Any consumer of these outputs will subscribe to this queue and receive them as they are published.
>
> **[2:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=157)** In addition, the streaming inference job will also publish the inputs, outputs, and performance measures to the telemetry pipeline.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=166)** This data is then archived for future analytics.
>
> **[2:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=171)** What technologies are typically used for real time inference?
>
> **[2:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=175)** For cues, we can use [[Apache Kafka]] and Apache Pulsar.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=180)** For job executors, for inference service, it can be built in [[Python (Programming Language)|Python]].
>
> **[3:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=185)** For streaming jobs, we can use [[Apache Spark]] or Apache Flink.
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=190)** For inference frameworks, we can use scikit-learn, [[PyTorch]] or [[TensorFlow]].
>
> **[3:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=195)** For telemetry frameworks, we can leverage [[Kubernetes]], [[MLflow]] or Kibana.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (3), [[Feature Engineering]] (3), [[Apache Kafka]] (1), [[Python (Programming Language)|Python]] (1), [[Apache Spark]] (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### [Scaling real-time AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=0)** - [Instructor] What kinds of scaling levers are available with [[Real-Time]] AI?
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=5)** Real-time AI's scaling requirements have some that are common with batch and some that are unique to streaming.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=14)** These requirements are determined based on expected peak volumes of requests and the maximum latency allowable.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=24)** Let's enumerate the scaling levers in real-time AI.
>
> **[0:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=29)** First, let's look at [[Feature Engineering]] in real-time AI.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=33)** Scalable queuing systems like [[Apache Kafka]] are critical to handle high volumes of data at low latencies.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=42)** [[Big Data]] streaming patterns like windowing, stream joints and stream splits are needed to process data from multiple streams.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=51)** For all services, N + 1 deployment models need to be used so they can scale horizontally.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=59)** Writes need to be performed concurrently from processing nodes to [[Databases]] without blocking each other.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=67)** Next, let's look at model training in real time AI.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=72)** Data formats need to be efficient to minimize footprint, so processing of data can be performed at low latencies.
>
> **[1:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=80)** [[Algorithms]] chosen should also favor low latency, so the training process can be completed in less time.
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=88)** [[Hardware]] acceleration and model parallelization when available will help with speeding up training.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=96)** Batch sizers should be kept as small as possible while maintaining critical signals so the training process can run in less time.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=105)** Finally, let's look at model inference.
>
> **[1:49](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=109)** Scaling of inference [[Microservices]] using N + 1 clusters is critical for scaling the inference process.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=118)** Queues used should, again, be low latency, so consuming and publishing activities can be performed in real time.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=126)** Model quantization and pruning can again be used to reduce the model footprint, and hence, speed up inference.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=134)** Hardware acceleration can help.
>
> **[2:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=137)** Auto-scaling infrastructure can help to scale on demand to manage peak loads while keeping costs minimal.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=146)** What are the key scaling considerations for real-time AI?
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=150)** In real time, latency is critical whether it's feature engineering, model training, or inference, each should have an agreed upon service level that should be met by the architecture.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=162)** It's important to estimate peak data volumes and provision enough resources so that latency service levels are met even at such volumes.
>
> **[2:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=174)** When errors and exceptions happen, the pipeline should move forward without attempting to reprocess.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=180)** Otherwise, queues will start getting built with new requests impacting latency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (5), [[Feature Engineering]] (2), [[Hardware]] (2), [[Apache Kafka]] (1), [[Big Data]] (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)

#### [Real-time AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Having discussed the key considerations for [[Real-Time]] AI architectures, let's now build an architecture for a real-time use case.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=9)** The use case is called Dynamic Discounts.
>
> **[0:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=12)** Imagine an online store that sells various [[Microsoft Products|products]] to customers.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=18)** The store wants to offer discounts to help sell products.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=22)** It wants to dynamically change the discount rate for products based on customer demand, available inventory, and competitor pricing.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=32)** For example, if the inventory goes up, discounts go up.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=36)** If demand goes up, discounts go down.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=39)** Let's discuss this use case in detail.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=43)** This is a classification use case to predict a target discount rate, like 10%, 20%, or 40%.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=50)** This can also be modeled as a regression use case.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=55)** The use case has several input data sources.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=60)** Sales transactions are available in real-time through a Kafka queue.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=65)** Current inventory of products is available through an RDBMS.
>
> **[1:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=70)** Competitor pricing is published by a real-time competition analysis application through a Kafka queue.
>
> **[1:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=78)** The model needs to do continuous analysis of demand and supply to understand each product's current market position.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=87)** Based on it, the model needs to predict a discount percentage for each product.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=92)** This means each product or product category will end up having its own model.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=98)** We will discuss an architecture for this problem in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (4), [[Microsoft Products|Products]] (4)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** rdbms (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Real-time AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=0)** - [Instructor] Let's now proceed to implement the dynamic discounts architecture.
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=6)** We will begin with the [[Feature Engineering]] pipeline.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=9)** The feature engineering pipeline we will discuss here is an asynchronous pipeline.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=15)** This will be used for both model training and inference.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=20)** First, we have the product inventory in an RDBMS.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=24)** It is continuously updated with inventory changes.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=28)** A streaming job looks for all the changed records in the table and pulls them out.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=35)** A sales transaction queue has all the current sales made in the online store.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=41)** A sales update streaming job will pull these sales records.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=46)** A competitor pricing application continuously publishes competitor prices in a competitor pricing queue.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=54)** A competitor update streaming job will pull these records and do cleansing and filtering.
>
> **[1:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=61)** All these three jobs then publish the data processed by them into a product updates Kafka queue.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=68)** This contains changes to all the three data sources.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=72)** An Apache Flink job then consumes this product updates queue.
>
> **[1:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=77)** It will summarize the data into small five-minute [[Windows]] for each product.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=82)** This summary is then published to the feature queue on [[Apache Kafka]].
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=88)** We will now move to the model training pipeline for dynamic discounts.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=93)** The model training pipeline starts from the feature queue in Apache Kafka that contains the processed input records.
>
> **[1:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=101)** An Apache Flink job is used to do the training-test split.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=105)** This job will use a windowing function to get a batch of records from the Kafka queue.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=111)** This batch is then broken into a training and test split.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=116)** It is assumed that, in the case of training, the feature queue also has the target or ground truth populated.
>
> **[2:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=125)** For faster access, the training dataset is cached in [[Redis]].
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=129)** Similarly, the test dataset is also cached in Redis.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=134)** A model training job runs on Apache Flink.
>
> **[2:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=137)** It gets the next batch of the training dataset and starts to build the model.
>
> **[2:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=142)** It will build one model for each product in the catalog, so the output is going to be a set of models for [[Microsoft Products|products]] that occurred in this batch of data.
>
> **[2:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=153)** Not all products will be updated in a given batch.
>
> **[2:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=157)** The test dataset is used to test the models created.
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=161)** The training cycle may continue until satisfactory results are obtained.
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=167)** The models are then updated in the model repository for each product.
>
> **[2:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=172)** [[MLflow]] will be used for experiment tracking.
>
> **[2:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=177)** We now move to [[Real-Time]] inference.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=180)** We will start with the set of models available in the model repository.
>
> **[3:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=185)** The features for production are available in the feature queue.
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=188)** They will not have the target variables, though.
>
> **[3:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=192)** A streaming inference job built in Apache Flink will get one record at a time from the feature queue.
>
> **[3:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=199)** It will pull the model corresponding to the product to which the record belongs.
>
> **[3:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=204)** It will then use this model to produce the discount prediction.
>
> **[3:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=209)** The raw prediction is pushed to the raw output queue in Kafka.
>
> **[3:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=214)** A post-processing job runs an Apache Flink to convert the categorical outputs to equivalent discount codes.
>
> **[3:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=223)** This is then published to the product discount database.
>
> **[3:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=227)** This is a Redis cache which stores discount rates by product.
>
> **[3:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=232)** A cache is used here for faster access.
>
> **[3:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=236)** The inputs, outputs, and other telemetry are pushed to a telemetry pipeline in MLFlow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (3), [[Feature Engineering]] (2), [[Apache Kafka]] (2), [[Microsoft Products|Products]] (2), [[MLflow]] (2)
> **CLI Commands:** apache (7)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** rdbms (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud and serverless computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=0)** - [Instructor] So far, we have dealt with building architectures for batch and real time AI using enterprise computing resources.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=8)** Now let's focus on cloud and [[Serverless Computing]] in this chapter.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=14)** What is [[Cloud Computing]]?
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=16)** Cloud computing is the use of resources available through the internet for enterprise computing requirements.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=24)** Here, cloud service providers sell resources through the internet for servers, storage, [[Databases]], networking, software, analytics, and AI.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=36)** Using such services allow for faster innovation, flexible resources, and economics of scale.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=44)** What are the key characteristics of cloud computing?
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=48)** First, we get on demand access to resources without going through the hassle of purchasing, shipping, deploying and onboarding them.
>
> **[0:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=57)** Cloud gives on-demand [[Scalability]].
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=60)** We can always add additional resources when needed and release them when not needed.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=66)** In addition to using on-demand, it also allows you to pay as you go.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=71)** We don't have to pay any upfront costs, but only pay as and when we use resources.
>
> **[1:17](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=77)** The cloud service provider manages the infrastructure for cloud, so the users are not burdened with management, maintenance, and repair.
>
> **[1:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=86)** Cloud resources can be accessed from anywhere in the world, so they can be provisioned near the clients as desired.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=94)** [[Cloud Services]] also provide virtual private cloud options so customers can create their own private intranet within the cloud.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=104)** Next comes serverless computing.
>
> **[1:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=107)** Serverless computing is a type of cloud computing where the customers only focus on applications and not bother about infrastructure, like servers, clusters, networking and storage.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=119)** The serverless service provider handles all the infrastructure, scaling and provisioning.
>
> **[2:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=127)** What are the key characteristics of serverless computing?
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=131)** Customers use only the service like [[SaaS|software as a service]], without bothering about actual installation and maintenance of software.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=140)** There is no infrastructure management needed.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=143)** Customers don't worry about how many physical servers are involved.
>
> **[2:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=147)** Such services scale automatically without the need for user intervention.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=152)** Billing happens on a per use basis, also called micro billing.
>
> **[2:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=156)** High availability of such services are guaranteed by default.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=162)** What kind of cloud service providers are available today?
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=166)** [[IaaS|Infrastructure as a service]] providers sell physical servers, networking and storage.
>
> **[2:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=172)** [[PaaS|Platform as a service]] provider provide pre-installed platform components like operating systems, databases and tools.
>
> **[3:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=181)** Software as a service provider sells software applications that are fully set up and running.
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=188)** Some popular cloud service providers include [[Amazon Web Services (AWS)|Amazon Web Services]] or AWS, [[Microsoft Azure]], [[Google Cloud Platform (GCP)|Google Cloud platform]], or GCP, Salesforce and OpenAI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (4), [[Cloud Computing]] (4), [[Databases]] (2), [[SaaS|Software as a service]] (2), [[Scalability]] (1)
> **Env Vars:** aws (1), gcp (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Architecting for the cloud](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=0)** - [Instructor] What is different between creating architectures for local deployments and for the cloud?
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=7)** We have so far discussed the architecture principles for batch and [[Real-Time]] AI in enterprise deployments.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=15)** These principles still hold good for cloud environments.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=20)** One key consideration with cloud is cost.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=23)** If it is not managed, cost can overshoot the budget.
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=27)** So cloud architectures need to balance cost, performance, and [[Scalability]], such that the desired performance can be achieved while keeping costs in control.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=39)** What are the key cloud architecture considerations?
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=43)** First comes scalability.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=45)** Even if [[Cloud Services]] are horizontally scalable, scale should be controlled so that the deployment does not overshoot the budget.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=54)** Cost optimization is critical.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=56)** Only run services when they need to actually do work.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=60)** Running idling services will incur costs without any benefits.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=65)** Security and compliance play a key role as enterprise data is stored and used on cloud resources that are typically shared with other customers.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=75)** Because cloud services run in their own data centers, which may be geographically distant from the clients, latency may become an issue.
>
> **[1:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=85)** [[Deployment Planning]] needs to take into account physical distances between the data center and the clients.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=92)** High availability across regions need to be provisioned so that the services are not impacted when the cloud provider data center goes down.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=102)** Choosing the right cloud provider is critical, ensuring that the right provider is chosen for the given use case.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=110)** [[DevOps]] takes a different dimension when deploying applications to cloud platforms.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=116)** Integration with cloud platforms' deployment services need to be factored in.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=121)** Monitoring and observability of applications deployed on [[Cloud Infrastructure]] also need to be considered when architecting applications.
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=131)** Data stored on cloud platforms need to be protected from unauthorized access.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=136)** Cloud platforms use common physical infrastructure across customers, so protection is critical to prevent data leakage.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=146)** It may also be desirable to build architectures that are portable between different cloud providers.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=152)** Vendor-neutral technologies may need to be chosen in such situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (2), [[Cloud Services]] (2), [[Real-Time]] (1), [[Deployment Planning]] (1), [[DevOps]] (1)
> **Speakers:** - [instructor] (1)

#### [AI in the cloud](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=0)** - [Instructor] What are the advantages and shortcomings of doing AI in the cloud?
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=6)** Cloud has revolutionized the AI world.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=9)** It is ideal for building and serving large-scale AI/ML applications and workloads.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=16)** Cloud provides [[Scalability]], speed, and ease of deployment for machine learning that would otherwise be highly involved when done standalone.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=25)** Let's discuss some advantages of using the Cloud for AI.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=30)** First, we get on-demand compute resources, so if ML needs more horsepower, it can be acquired instantaneously.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=39)** Cloud platforms provide a suite of [[Microsoft Products|products]], like low-code, no-code builders, tools, CI/CD pipelines, serving platforms, and observability pipelines.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=50)** They are already pre-wired, so it's easy to build, deploy, and manage ML services on the cloud.
>
> **[0:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=57)** Cloud platforms are compliant to a number of security standards and benchmarks.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=62)** They do offer enhanced security mechanisms to protect sensitive data.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=68)** They provide global accessibility, so once deployed, an ML service can be accessed from anywhere in the world.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=75)** It's also possible to deploy services in regions that are closer to the clients.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=81)** Such services provide excellent integration with the [[Representational State Transfer (REST)|rest]] of the products from the same provider, so it's possible to build end-to-end application stacks, including ML, on the same platform easily.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=95)** What are some of the shortcomings of using the Cloud for AI?
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=99)** The biggest shortcoming and a constant headache is the risk of cost overruns.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=105)** Model training is an iterative process and can quickly overrun budget estimates.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=111)** Enterprises do not have full control on these cloud deployments, and that may be an issue for some industries who require deep oversight into such deployments.
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=122)** [[Data Privacy]] and security is a concern.
>
> **[2:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=125)** While cloud platforms provide a number of levers to protect data, not using them correctly can lead to data leaks.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=134)** Usage limits are imposed on cloud platforms to control costs, but they can quickly become a blocker when enough resources are not available.
>
> **[2:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=144)** There is the risk of locking in into a single vendor that may create future issues with technology flexibility and cost control.
>
> **[2:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=154)** There is limited customization potential for these [[Cloud Services]] if such customization is needed for the use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Scalability]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Data Privacy]] (1), [[Cloud Services]] (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)

#### [Cloud platforms for AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=0)** - [Instructor] When it comes to AI, what kind of support do cloud platforms have?
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=6)** There are multiple cloud platforms available today that provide world class support for building and operating machine learning applications.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=14)** They provide an array of tools and platforms to support all phases of machine learning.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=20)** This is a comparison chart for the Big Three providers, namely AWS, GCP, and [[Microsoft Azure|Azure]] in terms of their support for [[Feature Engineering]].
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=31)** Each of them provide support for file systems, [[Databases]], data processors, queues, and caches.
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=38)** Some of them are hosted open-source [[Microsoft Products|products]] while others are native serverless products.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=45)** For example, for data processors in AWS, EMR is hosted [[Apache Spark]], while Lambda is a native serverless [[Data Processing]] platform.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=55)** Similarly, when we compare capabilities for model training and serving, each of the three provide a comprehensive list of tools for model training, model hosting, monitoring, and logging.
>
> **[1:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=69)** In addition to the Big Three, there are few other popular cloud providers.
>
> **[1:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=74)** [[Generative AI]] providers like OpenAI and Anthropic provide hosted models and services for generative AI models and chat bots.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=84)** IBM Watson and Alibaba Cloud also provide several hosted machine learning capabilities.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=90)** [[Hugging Face]] is a hosted platform for open source models and data sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Generative AI]] (2), [[Microsoft Azure|Azure]] (1), [[Feature Engineering]] (1), [[Databases]] (1)
> **Env Vars:** aws (2), gcp (1), emr (1), ibm (1)
> **CLI Commands:** aws (2), apache (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Cloud AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Let's now discuss an example architecture for Cloud AI.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=5)** We will be doing document classification using Cloud technologies.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=11)** Let's discuss the problem in this video.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=13)** We will build an architecture for it in the next video.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=18)** The goal for the document classification problem is to build and serve a document classification model.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=26)** The model will be used to classify and categorize documents based on their content.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=32)** It'll leverage native AI services and tools available in AWS for building and serving machine learning models.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=41)** Let's break down the problem for document classification.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=46)** Training data for this problem is a set of documents.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=50)** These documents are preloaded into an S3 bucket.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=54)** The documents need to be pre-processed for extracting text and tokenization, then we will build a classification model using the BERT framework.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=65)** The model will be deployed as an API endpoint on SageMaker.
>
> **[1:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=70)** Let's proceed to design this example in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), bert (1), api (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cloud AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=0)** - [Presenter] Let's now build an architecture for document classification using Cloud AI.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=7)** We begin with the [[Feature Engineering]] pipeline.
>
> **[0:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=10)** The training raw documents are available in an S3 bucket, along with their labels for categories.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=18)** Text, pre-processing, and tokenization of documents are done using AWS Glue.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=25)** This is a serverless service on AWS and can scale on demand.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=30)** The processed documents, after tokenization are then stored in the SageMaker feature store on AWS.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=40)** Moving on to the training architecture in the Cloud, we begin with the feature store for documents in SageMaker.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=48)** We will be using SageMaker Studio for training the model.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=52)** This studio also has the integrations to the model repository and experiment tracking tools in SageMaker.
>
> **[1:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=61)** First, a [[Python (Programming Language)|Python]] script runs for splitting the data set into training and test data sets.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=67)** S3 can be used to store the training and test data sets.
>
> **[1:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=73)** Model training can be then done using a Python script, using the training dataset with BERT.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=79)** This produces a BERT model.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=82)** The model is tested using a test script, using the test dataset.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=87)** The training and test steps iterate until satisfactory accuracy is obtained with the model.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=94)** The model is then stored in the SageMaker Model Registry.
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=99)** The results of the experiments are stored and tracked in the SageMaker experiments module.
>
> **[1:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=106)** Finally, we get to the inference pipeline for document classification.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=111)** We begin with the model available in the SageMaker Model Registry.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=116)** We create a SageMaker endpoint for this model to expose the model as an API.
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=122)** The classification service is created on the API Gateway to expose the inference service to other client services.
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=131)** The client connects to this API Gateway with the document that needs to be classified.
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=138)** The classification service calls a pre-processing process running on AWS Glue for tokenization.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=145)** Then the tokenized documents are sent to the model service SageMaker endpoint to get the classification.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=152)** The final classification result is then returned to the client through the classification service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Feature Engineering]] (1)
> **Env Vars:** aws (4), api (3), bert (2)
> **CLI Commands:** aws (4), python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### 5. Hybrid AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Hybrid computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=0)** - [Instructor] In this chapter, we will look at building AI using hybrid computing environments.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=7)** Let's begin with a review of hybrid computing.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=11)** What is hybrid computing?
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=13)** It is about combining different types of computing environments, like on-premise infrastructure, [[Cloud Computing]], and edge devices to create a single end-to-end application.
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=27)** It's one logical application leveraging multiple environments.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=32)** What are some popular use cases where hybrid computing is used?
>
> **[0:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=37)** Edge applications use hybrid computing to run local code on edge devices, while also centrally managing them in the cloud.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=47)** Smart homes and cities run on multiple devices and are also centrally connected to control centers.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=55)** Legacy applications running on on-premise infrastructure may integrate to newer applications running in the cloud.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=64)** In cases where [[Data Privacy]] is needed, parts of the application accessing sensitive data runs on-premise while the [[Representational State Transfer (REST)|rest]] of the application stack may run in the cloud.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=76)** [[Generative AI]] is another great use case where locally deployed applications can use generative AI models in the cloud.
>
> **[1:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=86)** What are some key considerations for hybrid computing?
>
> **[1:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=89)** [[Data Storage]] and processing becomes a challenge as this function needs to be spread out over multiple environments, each with their own capacity and security constraints.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=102)** Ensuring security and compliance of the application stack across multiple computing environments is a challenge as credentials need to be managed across the stack for authorization and access.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=117)** Workloads need to be orchestrated across processes running on different environments.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=123)** A specialized management stack is needed to orchestrate workloads across these environments.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=130)** Communication could be a problem between these environments if the connectivity is not guaranteed, especially on edge devices.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=140)** Latency is also introduced due to physical distances between these environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Cloud Computing]] (1), [[Data Privacy]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Data Storage]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AI using hybrid computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=0)** - [Instructor] How does hybrid computing work for different facets of AI ML?
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=6)** We can use hybrid computing to train and serve ML models across different types of environments like cloud, on-premise and edge.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=15)** Such architectures should be built to ensure reliability and efficiency.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=22)** How does [[Feature Engineering]] work in a hybrid setup?
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=27)** Feature engineering may use a distributed set of data sources, and these data sources can be from devices, on-premise [[Databases]], or [[Cloud Services]].
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=38)** Feature engineering can itself be distributed.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=41)** For example, each device that has the data source can execute feature engineering tasks locally before shipping the results to a central server.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=52)** A central server can aggregate data from multiple devices and environments to create the feature store When processing data in multiple environments, it is important to ensure that the data is protected during processing, storage, and transfer.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=71)** [[Data Privacy]] should be ensured at all stages of feature engineering, especially during transfer and merging into the central database.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=82)** Bandwidth limitations need to be also considered when planning of data transfers.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=87)** Latency can also be an issue in moving data between devices and environments.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=94)** How about hybrid training?
>
> **[1:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=97)** Typically, model training happens at a central location, after collecting all data inputs for the training.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=104)** It's far easier to scale and manage training in a central cluster or in the cloud.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=111)** In strict data privacy situations, federated learning may be used.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=116)** Here, a copy of the model is trained locally on each device using data on that device.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=124)** The models are then transferred centrally where the final merging and training takes place.
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=129)** Data itself does not get transferred during the process.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=134)** In addition to training, model reduction techniques like quantization and pruning can also be applied to fit the model into distributed and edge serving environments.
>
> **[2:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=147)** How about model inference in hybrid computing?
>
> **[2:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=151)** Inference for ML can be done in the cloud, a data center, or edge, based on the use case.
>
> **[2:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=159)** In some cases, multiple instances of the model are deployed, in edge deployments, a copy of the model is deployed in each device, and inference happens locally in that device.
>
> **[2:53](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=173)** Models can be deployed closer to the client applications to minimize latency and provide more reliability.
>
> **[3:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=181)** Inputs to the model can originate locally, and the local copy of the model is used for inference.
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=188)** The output is also consumed locally.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=191)** Logging in this case may be just stored locally or shipped to a central server.
>
> **[3:18](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=198)** A central monitoring framework can be used to monitor all deployed models in distributed inference.
>
> **[3:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=205)** Such a framework can also be used to deploy models and applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (5), [[Data Privacy]] (2), [[Databases]] (1), [[Cloud Services]] (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [AI architectures for hybrid computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=0)** - [Instructor] What are the different architecture patterns for hybrid AI?
>
> **[0:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=6)** When it comes to AI, there are three key building blocks, the model, data and the application itself.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=14)** These three building blocks can be distributed across different environments based on the application, resource or [[Privacy]] requirements.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=23)** Let's discuss some popular AI patterns in hybrid computing.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=28)** We begin with the first pattern.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=30)** in this pattern, the application and data are deployed inside the enterprise boundaries.
>
> **[0:37](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=37)** The model is deployed in the cloud.
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=39)** This is typically used when an off-the-shelf model is used from a cloud service provider.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=46)** In this case, since data is kept inside the enterprise, privacy is ensured.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=52)** The enterprise also has control over the data and the application.
>
> **[0:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=57)** However, it'll incur additional costs for managing them.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=62)** [[Generative AI]] applications are a good example of this pattern.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=66)** Next, we discuss mode two.
>
> **[1:09](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=69)** In this case, both the application and the model are deployed in the cloud.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=75)** Data is stored within the enterprise or in a virtual private cloud.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=79)** Data is physically segregated from other customers.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=83)** This ensures full [[Data Privacy]] and applications demanding such privacy will use this pattern.
>
> **[1:31](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=91)** Enterprise has lower levels of control as the application is in the cloud.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=96)** A good example of this pattern is when enterprises use [[SaaS]] AI [[Microsoft Products|products]].
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=102)** Here, the SaaS service provider provides a VPC capability to segregate data.
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=108)** We then move on to the third mode.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=110)** In this mode, we have multiple applications, data groups and models that form the full application stack.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=118)** Legacy applications, data and models may be deployed in the enterprise, while newer applications can be deployed in the cloud.
>
> **[2:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=127)** Some applications can also run on Edge devices.
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=131)** All three applications are integrated into a single workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (3), [[SaaS]] (2), [[Generative AI]] (1), [[Data Privacy]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** vpc (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Let's now build an architecture for a hybrid AI problem.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=5)** This is a [[Customer Support]] chatbot that can answer questions posted by customers based on an enterprise knowledge base.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=14)** The goal for this customer support Q1-day problem is to build an AI system that can answer customer questions about a company's [[Microsoft Products|products]] and policies.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=25)** The architecture should build a knowledge base and leverage it to generate summaries to respond to customers.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=33)** This is a [[Generative AI]] use case that leverages the [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]], or RAG, pattern.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=41)** For knowledge base, the source document would be product documentation and frequently asked questions available in the company.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=50)** Additionally, the ML model needs to be trained to answer questions in a specific professional tone.
>
> **[0:57](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=57)** A question-and-answer dataset is available with answers in the expected tone, using which the model needs to be trained.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=66)** For the knowledge base, a vector database in [[Pinecone]] Cloud needs to be created.
>
> **[1:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=73)** For the model, we will use a large language model from OpenAI and fine-tune it for the specific tone.
>
> **[1:20](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=80)** Application code is deployed in the enterprise.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=84)** Let's now build an architecture for this use case in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (2), [[Microsoft Products|Products]] (1), [[Generative AI]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Pinecone]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** rag (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=0)** - [Instructor] Let's now implement the [[Customer Support]] Q&A chatbot.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=5)** We begin with [[Feature Engineering]] for the chatbot.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=8)** We have two environments, namely the enterprise data center and the cloud.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=13)** First, the product documentation and FAQs are available in files.
>
> **[0:19](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=19)** These documents are then processed through a [[Python (Programming Language)|Python]] job.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=23)** The job will read the documents, chunk and create embeddings.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=28)** These embeddings are then saved in a vector database on [[Pinecone]] cloud.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=33)** Pinecone cloud is a cloud service provider for [[Vector Databases]].
>
> **[0:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=39)** Next, we need to fine-tune the LLM on OpenAI.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=43)** For this, we have the reference questions and answers with the right tone in flat files.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=50)** The files are then split as training and test datasets using a Python program.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=56)** The resulting datasets are also stored in flat files.
>
> **[1:01](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=61)** A Python fine-tuning script is used to fine-tune the OpenAI LLM using the training dataset.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=68)** The LLM is hosted on OpenAI cloud, so the fine-tuning happens in the cloud for the model A test model script in Python test the fine-tuned model using the test datasets.
>
> **[1:22](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=82)** If the results are not satisfactory, then additional fine-tuning is done by adjusting the hyperparameters.
>
> **[1:29](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=89)** This process continues until the results are satisfactory.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=93)** The fine-tuned LLM is now available in the cloud.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=98)** Results of the experiments can be tracked using the Weights & Biases cloud service.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=105)** We now move to the inference for the customer support Q&A chatbot.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=110)** In the cloud, we have the vector database in Pinecone.
>
> **[1:54](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=114)** We also have the fine-tuned LLM in OpenAI.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=118)** A Python-based application is used to provide the chatbot surveys.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=123)** A client application or a user can send in a product question to get answers.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=130)** The question first goes to a retriever module in Python.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=134)** The retriever will perform [[Semantic Search]] using the vector database and return the best document matches back to the chatbot.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=143)** The document matches are then sent to the model service.
>
> **[2:27](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=147)** The model service then ranks the documents and sends the top documents to the LLM to get a response.
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=155)** The LLM produces the response in the right tone.
>
> **[2:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=158)** This response is then relayed back to the user.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=162)** This completes our discussions about hybrid AI, and we have come to the end of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Pinecone]] (3), [[Customer Support]] (2), [[Feature Engineering]] (1), [[Vector Databases]] (1)
> **Env Vars:** llm (7)
> **CLI Commands:** python (6)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with AI data processing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=0)** - [Instructor] We have reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=3)** By now, you have an understanding of how to build architectures for batch and [[Real-Time]] AI using multiple deployment modes.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=13)** You can take this learning even further.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=16)** First, build a small end-to-end machine learning pipeline for a use case in your enterprise using the concepts learned in this course.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=26)** Implement the same pipeline using one of the cloud platforms using native tools and technologies.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=33)** Explore building hybrid architectures for [[Generative AI]] for a use case in your organization.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=41)** AI always intrigues me.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=44)** I bet it intrigues you too, so let's keep exploring it and find better ways of extracting purpose out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Generative AI]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Skills Covered

- Real-Time
- Data Processing
- Batch Processing
- Cloud-Native Architecture
- Artificial Intelligence (AI)

## Path Context

### In [[Working with Data- Collecting, Processing, and Storing Data for AI]]
← [[Scalable Data Storage and Processing for AI Workloads]] | **6 of 6**

## Appears In

- [[Working with Data- Collecting, Processing, and Storing Data for AI]]

## Related Courses

_Courses sharing skills:_

- [[Scalable Data Storage and Processing for AI Workloads]] — Artificial Intelligence (AI), Data Processing
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)
- [[Complete Guide to Excel Statistics with Copilot]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)