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
  - '[Working with Data- Collecting, Processing, and Storing Data for AI](../../Paths/Cloud%20Computing/Learning%20Paths/Working%20with%20Data-%20Collecting%2C%20Processing%2C%20and%20Storing%20Data%20for%20AI.md)'
prev_courses:
  - '[Scalable Data Storage and Processing for AI Workloads](Scalable%20Data%20Storage%20and%20Processing%20for%20AI%20Workloads.md)'
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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/processing-data-for-ai?u=76281980&t=0)** - [Instructor] Building and operating AI systems at scale requires a robust and scalable architecture to achieve business and machine learning objectives. I will take you through an overview of building scalable architectures for machine learning. We will discuss the unique considerations and constraints for batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) AI and build architectures for such use cases. We will also discuss the enterprise, cloud, and hybrid deployment modes and how to architect AI systems for these deployments. My name is Kumaran Ponnambalam. Let's now get started with architectures for AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Speakers:** - [instructor] (1)


### 1. AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [The ML life cycle](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=0)** - [Instructor] Let's begin this course by reviewing the machine learning lifecycle. A machine learning project, or ML project for short, has many stages and tasks. The machine learning lifecycle represents the end-to-end workflow that connects these tasks. It constitutes building, executing, and maintaining machine learning models and applications. Let's discuss some key characteristics of the ML lifecycle. The ML lifecycle is an iterative process where the sequence of tasks are repeated from time to time to improve the models, it has three key flows. They are [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md), model training, and model inference. We will discuss these three flows in the next few videos. While the ML lifecycle focuses on the model, it also integrates into [Application Development](../../Skills/Software%20Development/Application%20Development.md), deployment, and operations. Together, they manage the lifecycle of the application. The lifecycle provides a template based on which architectures can be created for [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) applications. Let's walk through the sequence of steps in a machine learning lifecycle. The cycle begins with the data sources that provide the data sets for model training, testing, and inference. Raw data is acquired from these data sources in various formats and stored in a data lake.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/the-ml-life-cycle?u=76281980&t=98)** Then feature engineering is performed on this data to cleanse and extract features required for machine learning. Then this produces the training dataset and the test dataset. The training dataset is used to train a ML model. The model is then tested using the test dataset. This is an iterative process where the model is refined until satisfactory model performance is achieved. This model is then stored in a model repository. The model is used for inference on the inference dataset. This is typically done in production scenarios. The outcomes of the model are then stored and published to the consumers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Definitions:** is an  (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Feature engineering](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=0)** - [Instructor] Let's dive deeper into [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) functions in LM in this video. What is feature engineering? Raw input for machine learning is acquired from various source systems. Feature engineering is the process of cleansing, extracting, and transforming such raw data to a form that is suitable for machine learning and inference. It is a crucial piece of the puzzle that can determine the success or failure of the ML process. There are several tasks that may be performed in feature engineering. A single feature engineering pipeline may implement one or more of these tasks. We begin with data cleansing tasks. What are the popular data cleansing tasks? Quality checks ensure that the incoming data meets the requirements for the use case. This is especially needed when the data is acquired from external sources that are not trusted. Deduplication eliminates duplicate data from the datasets. Missing values pmputation provides replacement values for attributes when they are found missing. Outlier handling analyzes the dataset for outliers and eliminates them so they don't skew the model. Lineage checks verify the sources of data to ensure that they can be trusted.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=94)** Then comes the tasks for feature extraction. Here, required features for a specific use case are filtered and selected for further processing. Sampling is used to select a small dataset from a large dataset pool. Sampling needs to maintain the distribution of data. Filters can be used to remove unwanted data samples from the dataset, which are irrelevant to the use case. Feature selection is used to select attributes that have good correlation to the target variables. Descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) are used to extract summary information about data if this is needed for model training. Principle component analysis is another technique that is used to select features when the list of features are large in number. Finally, there is feature transformation that modifies the features to fit into the ML algorithm being used for training or inference. The first such transformation is scaling the features, so all features are in the same scale. Then comes encoding features. Categorical features can be encoded into numerical features so that they can be consumed by ML [Algorithms](../../Skills/Software%20Development/Algorithms.md). Embedding are used to convert text or images into numerical representations. Augmentation is used to add features to the dataset based on other features available in the dataset.
>
> **[3:12](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/feature-engineering?u=76281980&t=192)** Dimensionality reduction is another technique that is used to reduce the dimensions of the dataset, while maintaining the information and relationships. When performing feature engineering, what are some key things to consider, especially from an architecture and design point of view? Verification steps need to be added to these tasks to ensure that they are performed correctly without errors. The tasks should be scalable, so large quantities of data can be processed within required latency thresholds. The tasks should be repeatable. Executing the same task on the same dataset should yield the same result each time. [Data Security](../../Skills/Data%20Science/Data%20Security.md) and [Privacy](../../Skills/Data%20Science/Privacy.md) should be ensured during the feature engineering process to protect information as they move through the feature engineering pipeline. AutoML is a key consideration too. Automating the ML process end-to-end can help consistently generate new models efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (8), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Model training](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=0)** - [Instructor] The next stage in ML after [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) is model training. Machine learning models have evolved over time from classical ML to [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) to [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). These model architectures are significantly different from one another, and so are the training processes and requirements for them. The type of model being built influences the architecture and design of the ML systems. What are the key training characteristics for different kinds of ML models? Let's begin with classical machine learning. In classical ML, we typically build [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) models like classification models or regression models, using techniques like Naive Bayes, [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md), or random forests. We also do unsupervised learning like clustering. To validate the models built, we use techniques like cross validation. Metrics play a key part in the training process. For classical ML, metrics like accuracy, F1-scores, RMSE, et cetera, are used. These models require relatively small data sets, and they also have smaller resource requirements compared to generative AI. The next type of models are [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). Neural networks are more complex models. They are typically used
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=93)** for [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) and understanding. They can be used for [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) and synthesis. Recurrent neural network classes of models are used for this purpose. For image and vision, we use [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md). These models use specialized metrics like BLEU and inception scores. These models typically require larger data sets, mostly [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). They also need significant resources to train and serve. GPUs are typically used for this purpose. Generative AI is the latest class of models that are becoming popular. Transformer model architectures are used for this purpose. Examples of such models include the GPT class of models and T5. Diffusion models like [DALL-E](../../Skills/Software%20Development/DALL-E.md) and [Stable Diffusion](../../Skills/Artificial%20Intelligence%20(AI)/Stable%20Diffusion.md) are also used. In generative AI, models are not created from scratch for each use case. Rather, general purpose foundation models are created during the pre-training phase using general purpose data sets. These are then customized to use cases using instruction tuning, [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md), or transfer learning. These models require massive data sets. They also require massive [Forms](../../Skills/Web%20Development/Forms.md) of compute resources to train a model. In general, out of the box generative AI models are used to build use cases
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/model-training?u=76281980&t=187)** rather than training from scratch. The ML [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) will need to adapt to the type of model being built and served. What are the key architecture considerations for model training? It starts with choosing the right type of programming language or toolkit like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or C++. Training may need GPUs, and the architecture should be able to bring in such compute power into the pipeline. Training frameworks also play a key role. These include scikit-learn, [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) and [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md). Distributor training may be required based on where the data sets are available and the types of resources that are available. Training platforms, like Databricks and SageMaker, can be considered to manage the training workloads. Experiment tracking systems are needed to log and track training experiments and results. Model repositories or registries are needed to track and manage the lifecycle of the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (5), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1)
> **Env Vars:** rmse (1), bleu (1), gpt (1), dall (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [ML inference](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=0)** - [Instructor] Having discussed [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) and model training, let's discuss ML inference in this video. Inference happens in production settings. Building an inference architecture for such a setting requires careful analysis of the tasks to be executed, the expected performance goals, and the infrastructure needed to achieve these goals. What are the tasks involved in model inference? First, raw data that is provided for inference need to be pre-processed and prepared for inference. In pre-processing, we need to ensure security of the model itself and protect it from intended and unintended hacks and misuse. Raw data may need to be temporarily stored or cached before it is processed. The feature engineering pipeline used for model training needs to be replicated to perform the same operations on inference data also. Reliable transformation of data needs to be insured either through APA calls or queues. Then comes serving. The model is usually in a model repository. The model needs to be loaded up in memory for serving. Then it can be used for predicting target variables or generating outputs. Validation can be performed as part of the serving process itself to ensure that the outcomes are reliable.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=96)** There could also be post-processing involved to get the model outputs ready for consumption for downstream application or users. This can involve sanity checks, transformations to consumable formats, intermediate storage in persistent stores, or publishing them to downstream queues. What are some key considerations when creating architectures for model inference? The incoming data volume or velocity needs to be estimated. This drives [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) needs and data mines the architecture patterns and technologies that will be used. Feature engineering is a critical piece in inference also, and that needs to be executed reliably within latency constraints. A good [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) pipeline is needed here. Latency requirements for model prediction or generation plays a key role in determining the compute resources needed. Error recovery and [Resiliency](../../Skills/Software%20Development/Resiliency.md) should be considered when creating the architecture. The system should continue to process incoming requests even if there is a failure within a single request. Telemetry is essential to capture all the inputs and outputs for the model. This is needed for diagnostics and also for improving the data sets. Finally, data that is telemetry should be archived when possible
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ml-inference?u=76281980&t=191)** for future training needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **Definitions:** is a  (2)
> **Env Vars:** apa (1)
> **Speakers:** - [instructor] (1)

#### [Scale and performance](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=0)** - [Presenter] One of the key goals for an architecture is to be able to scale up, to meet the processing demands for the use case. When it comes to ML, scale and performance plays a key role in meeting the customer and business expectations. It is hence, an important focus area for ML architectures. What are the key enablers for scale and performance when it comes to ML? Let's briefly touch upon these enablers in this video. We will discuss more about them in the later chapters. [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) requires [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) pipelines that can handle the incoming data volumes within expected latency thresholds. Feature engineering plays a key role in both model training and inference, so ensuring that these pipelines can scale is a critical responsibility for an AI architect. Next, comes the model architecture. The model architecture determines the kind of resources needed. It also determines the scale of inputs that can be processed. Choosing the right model architecture is critical to ensure that the use case achieves the required accuracy at scale. In systems where the model needs to be continuously refined because of changing environments, auto ML becomes a key enabler. The capacity to do feature engineering, model training
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scale-and-performance?u=76281980&t=93)** and deployment in an automated fashion helps in iterating fast, without the need for expensive [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md). Model serving infrastructure determines the processing volumes, concurrency and auto-scaling that can be supported for ML. Choosing the right model serving infrastructure is critical for achieving the performance goals for the use case. Vertical scaling has limitations in how much it can scale. The ability to use distributed computing for feature engineering, model training and inference is key to scale the system horizontally as the system load increases. Monitoring and observability is key to ensuring that the system is performing as expected. Metrics help in ensuring that the required performance thresholds are met. This requires a telemetry infrastructure to collect data continuously, process and deliver metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (4), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Architectures for AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=0)** - [Instructor] How are the architectures for AI impacted by the characteristics of the use case? In general, the type of architecture needed for AI is heavily impacted by two considerations, the latency constraints for the use case and the expected deployment mode for the use case. What is latency in ML? It can be considered as the time elapsed between when raw data is available for training or inference, and when the training or inference is successfully completed. This involves the entire ML pipeline, including [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md), multiple iterations of training and inference. Training and inference can have different latency requirements. This brings us to two modes of ML, namely batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md). [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) involves processing data in batches. Typically, this can take a long time, greater than an hour. Batch jobs are run at regular intervals like hourly or weekly. ML training is usually a batch process. It involves multiple iterations of training until expected results are achieved. In rare use cases, real-time training is used. ML inference, on the other hand, can be both batch or real-time. In batch inference, input data is periodically processed to generate outcomes like hourly or daily.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architectures-for-ai?u=76281980&t=96)** In real-time, streaming processes are used to produce results, each time an input record is available. The choice of batch or real-time for a given use case impacts the architecture choices significantly. We will discuss more about this in the later chapters. This is how the training and inference modules are deployed for execution. This is the mode in which the training and inference modules are deployed for execution. In local or enterprise deployments, ML is done on enterprise owned resources or clusters. Training can even be done on a laptop. The enterprise buys the resources, deploys them, and manages them. Cloud-based deployments have become popular now as they provide easy management and scaling. When ML is done on the cloud, the considerations are different. Software and tools used are optimized for the cloud. In hybrid deployments, a single architecture uses components deployed on both local and cloud environments. Edge devices may also be added to hybrid deployments. We will explore how cloud and hybrid deployments impact architecture in later chapters in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (5), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1)
> **Speakers:** - [instructor] (1)


### 2. Batch AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Characteristics of batch AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=0)** - [Instructor] In this chapter, we will explore Batch AI. We will discuss how to architect machine learning pipelines for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md). Model training is inherently an iterative process. Even for inference, Batch systems are easier to build and manage than [Real-Time](../../Skills/Database%20Management/Real-Time.md) systems. So it's recommended to build Batch architectures by default, unless the use case demands real-time architectures. What are the key characteristics of Batch AI? In Batch AI processing is done through jobs. These jobs can be scheduled to run at fixed intervals, or they can be invoked when required. Data is processed in bulk as batches for both [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) and model training. [Big Data](../../Skills/Data%20Science/Big%20Data.md) batch-processing techniques are typically used. Model training is done offline. It can be done in a development environment. Data that is processed can be used again and again for model training. Data is pulled from data sources through queries. Final results are pushed to data syncs. The pull and push mode for data is possible since both are done on demand when the job runs. Because it's offline, data scientists have better control of the process. They can do model validation until they are satisfied
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-batch-ai?u=76281980&t=95)** and promote models when required. What are some key focus areas while architecting Batch AI? Jobs need to be scheduled in Batch processing. Multiple jobs need to be orchestrated together, so the output of one job can flow as input to another job. This requires job orchestration software. Large-scale feature engineering needs to use big data processing patterns and tools to scale to expected data volumes. Model training costs can quickly get out of control. Managing costs for training and inference requires careful budgeting, resource provisioning, and monitoring. To speed up processing and reduce latency, the architecture should provide for maximum parallelism and minimize bottlenecks in the data flow. Batch AI should be repeatable, so if a given step fails, it can be fixed and the processing can resume from there on. This requires a design that lends itself to roll back and reprocessing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Batch feature engineering](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=0)** - [Instructor] In this video, we will discuss architectures for [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) in batch AI. Let's walk through a reference template pipeline for batch feature engineering. Typically, feature engineering may require data from multiple sources. These data sources could be files, [Databases](../../Skills/Software%20Development/Databases.md), or [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). Typically, each data source will have a data extractor or a transfer job. These jobs run periodically, connect to data sources, and [Fetch](../../Skills/Web%20Development/Fetch.md) batches of records. Data acquired from data sources are saved in a data lake in its raw form. This becomes a local copy of the data from where further processing can be done with repeatability. From here, a series of jobs can be run to transform data. Data cleansing and extraction jobs can filter and merge data sets. Outputs of these jobs can be stored in temporary data stores. Another set of feature transformation jobs can run to transform the data to [Forms](../../Skills/Web%20Development/Forms.md) that can be consumed by machine learning. This processed and transform data is typically stored in a feature store. A job manager is needed to schedule and execute jobs. The job manager also monitors the execution and re-triggers if failures are encountered. This is a template pipeline for batch.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-feature-engineering?u=76281980&t=96)** The number of data sources and jobs can vary based on the use case. Let's review the pipeline we discussed. The job manager plays a key role in managing the entire pipeline. It also takes care of reporting the status of the jobs and their success failure results. Each jobs reads from a data source and writes to a data sink. Jobs do not directly communicate with each other. This is an asynchronous pipeline. Since it's asynchronous, data needs to be persisted to save the processing results. Hence, all data stores in a batch pipeline are typically persistent. Jobs should be designed as idempotent. It should be possible to rerun a job and still get the same results without double counting. What are the technologies that are typically used in batch feature engineering? For job manager, we can use tools like [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md), and Apache Oozie. For data processors, we can build them as plain [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) services. For scale, we can use [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) or Apache Flink. Data transfer can be done using FTP, [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), or [SQL](../../Skills/Data%20Science/SQL.md), depending on the interface that the data source supports. [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) can be done with a variety of options. File systems like distributed file systems, RDBMS, and [NoSQL](../../Skills/Software%20Development/NoSQL.md) databases are popular in [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** ftp (1), rest (1), sql (1), rdbms (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Batch model training](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=0)** - [Instructor] Let's now continue our discussion on batch AI architectures with batch model training. What does the batch training pipeline architecture look like? The pipeline starts where the [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) pipeline ends. The feature store has the data ready for machine learning. First, this data is sent through a job to split the dataset. Typically, the dataset is split into a training dataset and a test dataset. A third dataset called validation dataset may also be added if final validation is required. The sets so created are stored in the respective data stores. The model training job then kicks in. It uses the training data set to train the model. Depending on the type of model, this may take a few seconds or a few days. The model training job delivers a model. This could be a pickle file. It can be a large language model with millions of parameters. A model testing job then runs on this model. It uses the test data set to test the model and measure its accuracy. If the accuracy numbers are not satisfactory, the pipeline goes back to the training job. The training job may adjust model architecture configurations or hyper parameters, and retrain the model. The process of training and testing will continue until satisfactory results are obtained.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-model-training?u=76281980&t=96)** The final model is then pushed into a model repository. Sometimes it's called the model registry. The model registry tracks the lifecycle of the model. The progress and results of the experiments are then sent to an experiment tracking system for logging, analysis, comparisons, and archiving. A job manager drives the jobs in the model training pipeline. It monitors the jobs and reports their status and results. What kind of technologies are typically used for batch model training? For job managers, we will again use [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) or Apache Oozie. If [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) is used, it'll have its own job manager. For job executors, model training code is typically built in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), Apache Spark, or Apache Flink can also be used to train models at scale. For training frameworks, scikit-learn, [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) or [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) can be used based on the type of model that is being built. Training platforms like [MLflow](../../Skills/Data%20Science/MLflow.md), Kubeflow, or Databricks can also be used. These platforms provide model repositories, experiment tracking, as well as job management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) (1)
> **CLI Commands:** apache (5), python (1)
> **Speakers:** - [instructor] (1)

#### [Batch Inference](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=0)** - [Instructor] Having discussed the [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) and training architectures for Batch AI, let's discuss the inference part in this video. To begin with, model inference would need the same feature engineering pipeline as used in training. This is needed to transform source data in production and get it ready for inference. So the feature engineering pipeline is needed for both training and production. What does the template for a batch inference pipeline look like? It begins with the feature store, produced by the feature engineering pipeline in production. We also have the approved model available from the model repository. Both of these are provided to a model serving job. The job runs periodically and gets the next batch of input data. It applies the model and produces the outputs. The outputs may optionally go through a post-processing job to transform them into consumable [Forms](../../Skills/Web%20Development/Forms.md). These outputs are then stored in a persistent store like a file or a database. Additionally, a telemetry pipeline is used to capture all the inputs, outputs, and performance measures for inference. This pipeline processes them and stores them in a trace database. This can then be used to compute inference metrics. A job manager is used again to manage the inference
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-inference?u=76281980&t=95)** and post-processing jobs. What kind of technologies are needed for batch inference? For job managers, we could again use [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) or Apache Oozie. For job executors, we can build the job in plain [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or use [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) or Apache Flink as the processing engines. For inference frameworks, we can use scikit-learn, [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md), or [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md). Typically, the same inference framework that was used for training the model is used in production also. For telemetry pipeline, we can use [Kubernetes](../../Skills/DevOps/Kubernetes.md) [MLflow](../../Skills/Data%20Science/MLflow.md), or Kibana. For data stores, we can use file systems, or RDBMS [Databases](../../Skills/Software%20Development/Databases.md) to store the results. We can also use Logstash for the telemetry pipeline. These are representative technologies. We could use any equivalent technology as desired by the ML team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** rdbms (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Scaling batch AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=0)** - [Instructor] How do we scale batch AI? Let's discuss the levers and focus areas for scaling batch AI in this video. When it comes to batch AI, scaling needs are determined by the expected data volumes and the latency thresholds for the use case. Higher data volumes and lower latency requirements would mean more scaling is needed for the architecture. What are some of the levers that can be used to scale a batch AI architecture? We begin with scaling [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md). Concurrent reads from data sources using multiple connections can read more records in less amount of time. Using [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing patterns, like MapReduce, can increase horizontal [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) of the pipeline. Using N + 1 deployments for the jobs can provide parallel processing of records. Concurrent writes to data sinks using multiple connections can also increase write throughput. Using on-demand scaling to increase the number of compute resources can help handle spikes in loads. How can we scale model training? We can use efficient data formats that help process more data with the same amount of resources. Data sharding can be used for parallel processing during training. Distributed training can be used
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=93)** to concurrently train parts of the model on different compute clusters. [Hardware](../../Topics/Hardware.md) acceleration helps speed up model training. Checkpointing and resume techniques can be used to continue training from where it left off in case of a pause or error. Building parallelism into the model can help a single model process multiple inputs at the same time. Batch sizes are important, especially in [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) models. How about scaling model inference? To scale model inference, one technique is to reduce the size of the model, especially in deep learning and [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). Quantization, model pruning, and model distillation are techniques that can be used for that. Hardware acceleration again helps with model performance. Batching requests and using parallel inference can help in scaling the volume of inference. Autoscaling can again help with load spikes to provision additional resources when needed. Caching of data can help in faster data access. What are some key considerations when scaling batch AI? Latency is not critical for batch, so focus on cost-effectiveness of the architecture. It's important to keep costs low, especially for expensive compute resources, like GPUs. Concurrency and parallelism is the key lever
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-batch-ai?u=76281980&t=191)** across all phases of the ML lifecycle. Architect to scale horizontally. Consistency of data and results and reliability of the pipeline needs to be ensured. This includes providing fault-tolerant capabilities, like N+ 1 architectures or primary backup setups. When services go down, they should be able to resume from where they left off without loss of integrity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Speakers:** - [instructor] (1)

#### [Batch AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Let's now implement a batch AI architecture for the customer segmentation use case. In this video, we will discuss the use case we are trying to build an architecture for. In the next video, we will design the architecture. In customer segmentation, we want to classify customers based on the amount of business they bring in and their future lifetime value. For doing this, we use data collected from their marketing responses, their buying history, and customer care interactions. To reiterate on the customer segmentation use case, this is a classification use case in machine learning. We are trying to identify a category the customer belongs to. We have three sources of data, namely the Salesforce Marketing Cloud, from where we get marketing responses, an enterprise sales database that provides buying history and support logs from the customer care team. We want to classify the customers as platinum, gold, silver, and bronze based on their relationship with the enterprise. The classification should be performed daily. The customer classes are updated based on new data received about the customers. Let's build an architecture for it in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Batch AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=0)** - [Instructor] Let's now implement the customer segmentation architecture with Batch AI. We begin with [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md). We have three sources of data, namely the Salesforce Marketing Cloud, the enterprise sales database, and the contact center history files. We add an [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) job to [Fetch](../../Skills/Web%20Development/Fetch.md) marketing responses data periodically using [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs from the Salesforce Marketing Cloud. We add another Apache Spark job to read the sales data from the enterprise sales database using [SQL](../../Skills/Data%20Science/SQL.md). We also have an Apache Spark job that reads contact center history files using FTP. All the three jobs will write the acquired data into a data lake. We could build a data lake using [MongoDB](../../Skills/Software%20Development/MongoDB.md) as it provides a flexible document format to dump any kind of data. Then we have an Apache Spark job to merge the three data sets. It will first summarize the data by each customer and then merge them across the data sets using the customer ID as the key. The merge data is then stored into a temporary database implemented in MongoDB. Then an extract features job runs to get the required features for ML and transform them. This will also be an Apache Spark job. The final list of features are stored in a MongoDB database.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=95)** Since all the jobs run on Apache Spark, it can itself be used to manage all the jobs. There is no need for a separate job manager. We now move on to the batch model training architecture. This begins with the feature store in MongoDB. The first job here will split the data into training and test data sets. The job is built in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and the training and test data sets can be stored as files, assuming that they are of manageable sizes. A model training job is built in Python to use the training data and build the model. This can run as a docker container, or it can be triggered directly. The model output is stored in a pickle file. A model test job is built in Python to use the test data set and test the accuracy of the model. The training and test jobs iterate until satisfactory results are obtained. The model is then stored and managed in a model repository like [MLflow](../../Skills/Data%20Science/MLflow.md). MLflow can again be used for tracking the training experiments. [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) can be used as the job manager to manage all the Python jobs for training. We now move to model inference for customer segmentation. The feature engineering pipeline we reviewed earlier will provide the features in a MongoDB database. The segmentation model is available in the MLflow model registry.
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/batch-ai-architecture-example-solution?u=76281980&t=190)** We built a model serving job in Python that will read the features from MongoDB, apply the segmentation model for each customer, and generate the categories for the customer. The results will go through post-processing to translate numeric category values to text. The results are then finally stored back into MongoDB. A telemetry pipeline is created using MLflow to collect the inference data and store them in the tracer's database. We have tried to minimize the number of technologies and have used Spark and Python for the jobs and MLflow for telemetry and model repository. Apache Airflow can be used to manage the pipeline. This is a classical example of how machine learning pipelines are built in the batch mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (7), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [MLflow](../../Skills/Data%20Science/MLflow.md) (5), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2)
> **CLI Commands:** apache (8), python (6), docker (1)
> **Env Vars:** rest (1), sql (1), ftp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Real-Time AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Characteristics of real-time AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=0)** - [Instructor] Having discussed batch AI in the previous chapter, let's talk about [Real-Time](../../Skills/Database%20Management/Real-Time.md) AI architectures in this chapter. When it comes to real-time AI, real-time inference is popular for a number of use cases that require on-demand predictions. On the other hand, real-time training is limited in usage, only for use cases that require instant model learning and adoption. What are some key characteristics of real-time AI? In real-time AI, we deal with events generated from sources typically one at a time. These could be real-time user inputs or business events. To do low-latency [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), we need to use stream processing techniques that deal with one event at a time. If we are doing real-time training, then that requires continuous model updates, including testing and validation, and then promoting these models to production. Instead of batch jobs, inference services are deployed as either API-based [Microservices](../../Skills/Software%20Development/Microservices.md) or as queue consumers. This enables them to respond to events immediately and at scale. In real-time AI, response times and throughput play a key role in generating outcomes with low latency. When failures happen,
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=95)** real-time pipelines typically skip ahead and move to new events rather than trying to reprocess failed events. What are the key architecture focus areas for real-time AI? The first focus area is data processing for [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md). [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) and stream processing at scale are required to handle events in real time, especially for inference. When [Databases](../../Skills/Software%20Development/Databases.md) are accessed, records should be read at low latency. Similarly, updates should be done in low latency. Models should be loaded into memory with low latency or they should be cached in memory. Serving should also be done with low latency. Building real-time inference requires building on-demand interfaces. This includes API-based services that can be called upon when needed and also queue consumers that can consume records from queues whenever they become available. Real-time systems are susceptible to load spikes. To deal with this, the architecture should be capable of auto-scaling and be able to load balance between available resources to maintain low latency. The system should also be resilient to failures. In case of failures, it should be able to recover quickly and proceed with other pending tasks
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/characteristics-of-realtime-ai?u=76281980&t=188)** without being blocked on the failed task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (13), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) (1)
> **Env Vars:** api (2)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Real-time feature engineering](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=0)** - [Instructor] Let's now dive deeper into [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) architectures. When it comes to feature engineering architectures, we can build it either as a synchronous pipeline or as an asynchronous pipeline. The choice between synchronous and asynchronous depends upon the specific use case. Let's first discuss the synchronous template. Here, the feature engineering function is built as an API-based service that can serve feature engineering requests from a client. A client of this service will provide the raw input data for feature engineering. This can be either during real-time training or real-time inference. The feature engineering service will proceed to execute all cleansing, filtering, and transformation operations on this input. In addition, it may use additional data sources to look up or reference data and use it to enhance the input data. The final output of feature engineering is returned back to the feature engineering client. The feature engineering service itself does not do any persistence on its side. Next, let's look at an asynchronous pipeline template for feature engineering. Here, the input data sources may either be in a database from where the records need to be read, or it can be available in a queue from where they can be de-queued.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=94)** For the database, we can have a streaming job that reads records from the database and performs feature engineering functions specific to that data source. The results of this job are then pushed into a raw data queue. For the data queue input, we can have a streaming job that does similar feature engineering functions specific to data in that queue. The outputs are again dumped into another raw queue. A data merge process can then consume these individual raw queues, merge them, and process them further. There can be many such streaming jobs that do filtering, merging, and transforming data. They may read from queues and write to queues. The final feature engineering output is then pushed into a feature queue. What are some of the key characteristics of feature engineering pipeline design? We see that they are either API-driven or event-driven architectures. There is low-latency communication between the processes and the queues. Long-running jobs are eliminated, and the focus is to quickly process data and deliver outputs. When data needs to be persisted for archival reasons, such jobs should not block the main processing job. Data writes to disk can have longer latency, so those should be handled asynchronously as separate jobs. When failure happens for a single event or record, it's not recommended to attempt reprocessing
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-feature-engineering?u=76281980&t=190)** as it may delay the processing of other records. Rather, it's recommended to skip and move on to other records. What technologies are available for real-time processing? For data queues, we can use queuing technologies, like [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) and Apache Pulsar. For data processors, we can use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or [Java](../../Skills/Software%20Development/Java.md) Services to build API-based [Microservices](../../Skills/Software%20Development/Microservices.md). We can also use [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) or Apache Flink when processing of queues is required at scale. For data transfer between services, [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), gRPC, and queues can be used. When [Databases](../../Skills/Software%20Development/Databases.md) are needed, It's recommended to use low-latency databases, like RDBMS, or data caches, like [Redis](../../Skills/Software%20Development/Redis.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (14), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** api (3), rest (1), rdbms (1)
> **Best Practices:** recommended (3)
> **Exercise Files:** template (2)
> **Code Identifiers:** grpc (1)
> **Speakers:** - [instructor] (1)

#### [Real-time model training](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=0)** - [Instructor] What does model training in real time look like? What are the architectural considerations? Let's understand the constraints and considerations for [Real-Time](../../Skills/Database%20Management/Real-Time.md) model training. Model training cannot be done one record at a time. It needs a significant sample size big enough to address all expected variations in input data. This is what makes it hard to do model training in real time as sufficient sample sizes may not be available in a short period of time. So model training can only be done in batches or micro-batches in real time. We can collect data in real time for smaller intervals, like every 30 minutes, and then use that data to build a new model. We can also use windowing to keep a longer interval of data to retrain the model. The training pipeline should have automatic validation, review, approval, and promotion based on predefined criteria so manual intervention is not needed. In real time, it may be a better option to only fine tune the base model so the original learnings of the model are retained and not recreate the model from scratch. What does the real-time training pipeline look like? The pipeline looks similar to the batch training pipeline as we are still doing batch training at smaller intervals.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-model-training?u=76281980&t=95)** The input features may either come from a [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) service, a feature store, or a feature queue, depending on the use case. The dataset split job will consume features in micro-batches. Then the actual spread model training and testing process will happen similar to batch. The key difference is the size of the batches and latency for training, which will be smaller in real time. What are some of the real-time training technologies to use for the real-time AI architecture? For data sources, we use low latency sources like caches, message queues, and low latency [Databases](../../Skills/Software%20Development/Databases.md). For job managers, we may still use [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) and Apache Oozie. If [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) or Apache Flink is used for job execution, then they will provide the job manager also. For job executors, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) [Microservices](../../Skills/Software%20Development/Microservices.md), Apache Spark, and Apache Flink can provide low latency processing. Training frameworks like scikit-learn, [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md), or [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) can be used. For training platforms, we can use [MLflow](../../Skills/Data%20Science/MLflow.md), Kubeflow, or Databricks similar to Batch AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (4), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1)
> **CLI Commands:** apache (6), python (1)
> **Analogies:** similar to (3)
> **Speakers:** - [instructor] (1)

#### [Real-time inference architectures](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=0)** - [Instructor] Having discussed [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) and model training, let's now discuss how model inference works in the real-time mode. For inference too, we can either do it synchronously or asynchronously. Let's first discuss how to architect the synchronous pipeline. In this case, the inference service is hosted as a microservice with an API. This service can scale in N+1 configuration as needed. An inference client, typically a real-time application or an inference user will call the inference service API with raw input data. The inference service will first invoke the feature engineering service we designed in the earlier video. This will perform the feature engineering tasks and will return back the inputs ready for ML to the inference service. The inference service will then load the ML model from the model repo. The model may also be cached in memory for repeated inference calls. The inference service will invoke the model with the input and get the output. If any post-processing is needed, the inference service will invoke the post-processing service. The output of this service is then returned to the inference service. This in turn, returns the final output to the inference client. The inputs, outputs,
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=92)** and any performance measures are published to a telemetry pipeline for archiving and analytics. Let's now discuss the asynchronous pipeline for inference. In this case, the model is available in the model repository and the ML ready features are available in a feature queue, as discussed in the earlier videos. The inference process runs as a streaming job. It pulls the next available request from the feature queue. It loads the model from the model repository. It may also cache the model. Alternatively, the model itself can be run as its own service endpoint. The output of inference is then published to the raw output queue. The post-processing streaming job runs to perform any post-processing needed and publishes the processed output to the final output queue. Any consumer of these outputs will subscribe to this queue and receive them as they are published. In addition, the streaming inference job will also publish the inputs, outputs, and performance measures to the telemetry pipeline. This data is then archived for future analytics. What technologies are typically used for real time inference? For cues, we can use [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) and Apache Pulsar. For job executors, for inference service, it can be built in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). For streaming jobs, we can use [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) or Apache Flink.
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-inference-architectures?u=76281980&t=190)** For inference frameworks, we can use scikit-learn, [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) or [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md). For telemetry frameworks, we can leverage [Kubernetes](../../Skills/DevOps/Kubernetes.md), [MLflow](../../Skills/Data%20Science/MLflow.md) or Kibana.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (3), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (3), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1)
> **CLI Commands:** apache (4), python (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### [Scaling real-time AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=0)** - [Instructor] What kinds of scaling levers are available with [Real-Time](../../Skills/Database%20Management/Real-Time.md) AI? Real-time AI's scaling requirements have some that are common with batch and some that are unique to streaming. These requirements are determined based on expected peak volumes of requests and the maximum latency allowable. Let's enumerate the scaling levers in real-time AI. First, let's look at [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) in real-time AI. Scalable queuing systems like [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) are critical to handle high volumes of data at low latencies. [Big Data](../../Skills/Data%20Science/Big%20Data.md) streaming patterns like windowing, stream joints and stream splits are needed to process data from multiple streams. For all services, N + 1 deployment models need to be used so they can scale horizontally. Writes need to be performed concurrently from processing nodes to [Databases](../../Skills/Software%20Development/Databases.md) without blocking each other. Next, let's look at model training in real time AI. Data formats need to be efficient to minimize footprint, so processing of data can be performed at low latencies. [Algorithms](../../Skills/Software%20Development/Algorithms.md) chosen should also favor low latency, so the training process can be completed in less time. [Hardware](../../Topics/Hardware.md) acceleration and model parallelization when available will help with speeding up training.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/scaling-realtime-ai?u=76281980&t=96)** Batch sizers should be kept as small as possible while maintaining critical signals so the training process can run in less time. Finally, let's look at model inference. Scaling of inference [Microservices](../../Skills/Software%20Development/Microservices.md) using N + 1 clusters is critical for scaling the inference process. Queues used should, again, be low latency, so consuming and publishing activities can be performed in real time. Model quantization and pruning can again be used to reduce the model footprint, and hence, speed up inference. Hardware acceleration can help. Auto-scaling infrastructure can help to scale on demand to manage peak loads while keeping costs minimal. What are the key scaling considerations for real-time AI? In real time, latency is critical whether it's feature engineering, model training, or inference, each should have an agreed upon service level that should be met by the architecture. It's important to estimate peak data volumes and provision enough resources so that latency service levels are met even at such volumes. When errors and exceptions happen, the pipeline should move forward without attempting to reprocess. Otherwise, queues will start getting built with new requests impacting latency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (5), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)

#### [Real-time AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Having discussed the key considerations for [Real-Time](../../Skills/Database%20Management/Real-Time.md) AI architectures, let's now build an architecture for a real-time use case. The use case is called Dynamic Discounts. Imagine an online store that sells various [products](../../Skills/Software%20Development/Microsoft%20Products.md) to customers. The store wants to offer discounts to help sell products. It wants to dynamically change the discount rate for products based on customer demand, available inventory, and competitor pricing. For example, if the inventory goes up, discounts go up. If demand goes up, discounts go down. Let's discuss this use case in detail. This is a classification use case to predict a target discount rate, like 10%, 20%, or 40%. This can also be modeled as a regression use case. The use case has several input data sources. Sales transactions are available in real-time through a Kafka queue. Current inventory of products is available through an RDBMS. Competitor pricing is published by a real-time competition analysis application through a Kafka queue. The model needs to do continuous analysis of demand and supply to understand each product's current market position. Based on it, the model needs to predict a discount percentage for each product. This means each product or product category
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-problem?u=76281980&t=95)** will end up having its own model. We will discuss an architecture for this problem in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** rdbms (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Real-time AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=0)** - [Instructor] Let's now proceed to implement the dynamic discounts architecture. We will begin with the [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) pipeline. The feature engineering pipeline we will discuss here is an asynchronous pipeline. This will be used for both model training and inference. First, we have the product inventory in an RDBMS. It is continuously updated with inventory changes. A streaming job looks for all the changed records in the table and pulls them out. A sales transaction queue has all the current sales made in the online store. A sales update streaming job will pull these sales records. A competitor pricing application continuously publishes competitor prices in a competitor pricing queue. A competitor update streaming job will pull these records and do cleansing and filtering. All these three jobs then publish the data processed by them into a product updates Kafka queue. This contains changes to all the three data sources. An Apache Flink job then consumes this product updates queue. It will summarize the data into small five-minute [Windows](../../Glossary/Service/Windows.md) for each product. This summary is then published to the feature queue on [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md). We will now move to the model training pipeline for dynamic discounts.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=93)** The model training pipeline starts from the feature queue in Apache Kafka that contains the processed input records. An Apache Flink job is used to do the training-test split. This job will use a windowing function to get a batch of records from the Kafka queue. This batch is then broken into a training and test split. It is assumed that, in the case of training, the feature queue also has the target or ground truth populated. For faster access, the training dataset is cached in [Redis](../../Skills/Software%20Development/Redis.md). Similarly, the test dataset is also cached in Redis. A model training job runs on Apache Flink. It gets the next batch of the training dataset and starts to build the model. It will build one model for each product in the catalog, so the output is going to be a set of models for [products](../../Skills/Software%20Development/Microsoft%20Products.md) that occurred in this batch of data. Not all products will be updated in a given batch. The test dataset is used to test the models created. The training cycle may continue until satisfactory results are obtained. The models are then updated in the model repository for each product. [MLflow](../../Skills/Data%20Science/MLflow.md) will be used for experiment tracking. We now move to [Real-Time](../../Skills/Database%20Management/Real-Time.md) inference. We will start with the set of models available in the model repository. The features for production
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/realtime-ai-architecture-example-solution?u=76281980&t=186)** are available in the feature queue. They will not have the target variables, though. A streaming inference job built in Apache Flink will get one record at a time from the feature queue. It will pull the model corresponding to the product to which the record belongs. It will then use this model to produce the discount prediction. The raw prediction is pushed to the raw output queue in Kafka. A post-processing job runs an Apache Flink to convert the categorical outputs to equivalent discount codes. This is then published to the product discount database. This is a Redis cache which stores discount rates by product. A cache is used here for faster access. The inputs, outputs, and other telemetry are pushed to a telemetry pipeline in MLFlow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [MLflow](../../Skills/Data%20Science/MLflow.md) (2)
> **CLI Commands:** apache (7)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** rdbms (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud and serverless computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=0)** - [Instructor] So far, we have dealt with building architectures for batch and real time AI using enterprise computing resources. Now let's focus on cloud and [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md) in this chapter. What is [Cloud Computing](../../Topics/Cloud%20Computing.md)? Cloud computing is the use of resources available through the internet for enterprise computing requirements. Here, cloud service providers sell resources through the internet for servers, storage, [Databases](../../Skills/Software%20Development/Databases.md), networking, software, analytics, and AI. Using such services allow for faster innovation, flexible resources, and economics of scale. What are the key characteristics of cloud computing? First, we get on demand access to resources without going through the hassle of purchasing, shipping, deploying and onboarding them. Cloud gives on-demand [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). We can always add additional resources when needed and release them when not needed. In addition to using on-demand, it also allows you to pay as you go. We don't have to pay any upfront costs, but only pay as and when we use resources. The cloud service provider manages the infrastructure for cloud, so the users are not burdened with management, maintenance, and repair. Cloud resources can be accessed from anywhere in the world, so they can be provisioned near the clients as desired. [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) also provide virtual private cloud options
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=98)** so customers can create their own private intranet within the cloud. Next comes serverless computing. Serverless computing is a type of cloud computing where the customers only focus on applications and not bother about infrastructure, like servers, clusters, networking and storage. The serverless service provider handles all the infrastructure, scaling and provisioning. What are the key characteristics of serverless computing? Customers use only the service like [software as a service](../../Glossary/Concept/SaaS.md), without bothering about actual installation and maintenance of software. There is no infrastructure management needed. Customers don't worry about how many physical servers are involved. Such services scale automatically without the need for user intervention. Billing happens on a per use basis, also called micro billing. High availability of such services are guaranteed by default. What kind of cloud service providers are available today? [Infrastructure as a service](../../Glossary/Concept/IaaS.md) providers sell physical servers, networking and storage. [Platform as a service](../../Glossary/Concept/PaaS.md) provider provide pre-installed platform components like operating systems, databases and tools. Software as a service provider sells software applications that are fully set up and running. Some popular cloud service providers include [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) or AWS, [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md),
>
> **[3:15](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-and-serverless-computing?u=76281980&t=195)** [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), or GCP, Salesforce and OpenAI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md) (4), [Cloud Computing](../../Topics/Cloud%20Computing.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Software as a service](../../Glossary/Concept/SaaS.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** aws (1), gcp (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Architecting for the cloud](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=0)** - [Instructor] What is different between creating architectures for local deployments and for the cloud? We have so far discussed the architecture principles for batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) AI in enterprise deployments. These principles still hold good for cloud environments. One key consideration with cloud is cost. If it is not managed, cost can overshoot the budget. So cloud architectures need to balance cost, performance, and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), such that the desired performance can be achieved while keeping costs in control. What are the key cloud architecture considerations? First comes scalability. Even if [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) are horizontally scalable, scale should be controlled so that the deployment does not overshoot the budget. Cost optimization is critical. Only run services when they need to actually do work. Running idling services will incur costs without any benefits. Security and compliance play a key role as enterprise data is stored and used on cloud resources that are typically shared with other customers. Because cloud services run in their own data centers, which may be geographically distant from the clients, latency may become an issue. [Deployment Planning](../../Skills/Cloud%20Computing/Deployment%20Planning.md) needs to take into account physical distances between the data center and the clients. High availability across regions need to be provisioned
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/architecting-for-the-cloud?u=76281980&t=96)** so that the services are not impacted when the cloud provider data center goes down. Choosing the right cloud provider is critical, ensuring that the right provider is chosen for the given use case. [DevOps](../../Topics/DevOps.md) takes a different dimension when deploying applications to cloud platforms. Integration with cloud platforms' deployment services need to be factored in. Monitoring and observability of applications deployed on [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) also need to be considered when architecting applications. Data stored on cloud platforms need to be protected from unauthorized access. Cloud platforms use common physical infrastructure across customers, so protection is critical to prevent data leakage. It may also be desirable to build architectures that are portable between different cloud providers. Vendor-neutral technologies may need to be chosen in such situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Deployment Planning](../../Skills/Cloud%20Computing/Deployment%20Planning.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **Speakers:** - [instructor] (1)

#### [AI in the cloud](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=0)** - [Instructor] What are the advantages and shortcomings of doing AI in the cloud? Cloud has revolutionized the AI world. It is ideal for building and serving large-scale AI/ML applications and workloads. Cloud provides [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), speed, and ease of deployment for machine learning that would otherwise be highly involved when done standalone. Let's discuss some advantages of using the Cloud for AI. First, we get on-demand compute resources, so if ML needs more horsepower, it can be acquired instantaneously. Cloud platforms provide a suite of [products](../../Skills/Software%20Development/Microsoft%20Products.md), like low-code, no-code builders, tools, CI/CD pipelines, serving platforms, and observability pipelines. They are already pre-wired, so it's easy to build, deploy, and manage ML services on the cloud. Cloud platforms are compliant to a number of security standards and benchmarks. They do offer enhanced security mechanisms to protect sensitive data. They provide global accessibility, so once deployed, an ML service can be accessed from anywhere in the world. It's also possible to deploy services in regions that are closer to the clients. Such services provide excellent integration with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the products from the same provider, so it's possible to build end-to-end application stacks, including ML, on the same platform easily.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-in-the-cloud?u=76281980&t=95)** What are some of the shortcomings of using the Cloud for AI? The biggest shortcoming and a constant headache is the risk of cost overruns. Model training is an iterative process and can quickly overrun budget estimates. Enterprises do not have full control on these cloud deployments, and that may be an issue for some industries who require deep oversight into such deployments. [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and security is a concern. While cloud platforms provide a number of levers to protect data, not using them correctly can lead to data leaks. Usage limits are imposed on cloud platforms to control costs, but they can quickly become a blocker when enough resources are not available. There is the risk of locking in into a single vendor that may create future issues with technology flexibility and cost control. There is limited customization potential for these [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) if such customization is needed for the use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)

#### [Cloud platforms for AI](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=0)** - [Instructor] When it comes to AI, what kind of support do cloud platforms have? There are multiple cloud platforms available today that provide world class support for building and operating machine learning applications. They provide an array of tools and platforms to support all phases of machine learning. This is a comparison chart for the Big Three providers, namely AWS, GCP, and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) in terms of their support for [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md). Each of them provide support for file systems, [Databases](../../Skills/Software%20Development/Databases.md), data processors, queues, and caches. Some of them are hosted open-source [products](../../Skills/Software%20Development/Microsoft%20Products.md) while others are native serverless products. For example, for data processors in AWS, EMR is hosted [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), while Lambda is a native serverless [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) platform. Similarly, when we compare capabilities for model training and serving, each of the three provide a comprehensive list of tools for model training, model hosting, monitoring, and logging. In addition to the Big Three, there are few other popular cloud providers. [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) providers like OpenAI and Anthropic provide hosted models and services for generative AI models and chat bots. IBM Watson and Alibaba Cloud also provide several hosted machine learning capabilities. [Hugging Face](../../Glossary/Service/Hugging%20Face.md) is a hosted platform
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-platforms-for-ai?u=76281980&t=93)** for open source models and data sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** aws (2), gcp (1), emr (1), ibm (1)
> **CLI Commands:** aws (2), apache (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Cloud AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Let's now discuss an example architecture for Cloud AI. We will be doing document classification using Cloud technologies. Let's discuss the problem in this video. We will build an architecture for it in the next video. The goal for the document classification problem is to build and serve a document classification model. The model will be used to classify and categorize documents based on their content. It'll leverage native AI services and tools available in AWS for building and serving machine learning models. Let's break down the problem for document classification. Training data for this problem is a set of documents. These documents are preloaded into an S3 bucket. The documents need to be pre-processed for extracting text and tokenization, then we will build a classification model using the BERT framework. The model will be deployed as an API endpoint on SageMaker. Let's proceed to design this example in the next video.

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
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=0)** - [Presenter] Let's now build an architecture for document classification using Cloud AI. We begin with the [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) pipeline. The training raw documents are available in an S3 bucket, along with their labels for categories. Text, pre-processing, and tokenization of documents are done using AWS Glue. This is a serverless service on AWS and can scale on demand. The processed documents, after tokenization are then stored in the SageMaker feature store on AWS. Moving on to the training architecture in the Cloud, we begin with the feature store for documents in SageMaker. We will be using SageMaker Studio for training the model. This studio also has the integrations to the model repository and experiment tracking tools in SageMaker. First, a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script runs for splitting the data set into training and test data sets. S3 can be used to store the training and test data sets. Model training can be then done using a Python script, using the training dataset with BERT. This produces a BERT model. The model is tested using a test script, using the test dataset. The training and test steps iterate until satisfactory accuracy is obtained with the model. The model is then stored in the SageMaker Model Registry.
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/cloud-ai-architecture-example-solution?u=76281980&t=99)** The results of the experiments are stored and tracked in the SageMaker experiments module. Finally, we get to the inference pipeline for document classification. We begin with the model available in the SageMaker Model Registry. We create a SageMaker endpoint for this model to expose the model as an API. The classification service is created on the API Gateway to expose the inference service to other client services. The client connects to this API Gateway with the document that needs to be classified. The classification service calls a pre-processing process running on AWS Glue for tokenization. Then the tokenized documents are sent to the model service SageMaker endpoint to get the classification. The final classification result is then returned to the client through the classification service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1)
> **Env Vars:** aws (4), api (3), bert (2)
> **CLI Commands:** aws (4), python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### 5. Hybrid AI Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Hybrid computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=0)** - [Instructor] In this chapter, we will look at building AI using hybrid computing environments. Let's begin with a review of hybrid computing. What is hybrid computing? It is about combining different types of computing environments, like on-premise infrastructure, [Cloud Computing](../../Topics/Cloud%20Computing.md), and edge devices to create a single end-to-end application. It's one logical application leveraging multiple environments. What are some popular use cases where hybrid computing is used? Edge applications use hybrid computing to run local code on edge devices, while also centrally managing them in the cloud. Smart homes and cities run on multiple devices and are also centrally connected to control centers. Legacy applications running on on-premise infrastructure may integrate to newer applications running in the cloud. In cases where [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) is needed, parts of the application accessing sensitive data runs on-premise while the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the application stack may run in the cloud. [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) is another great use case where locally deployed applications can use generative AI models in the cloud. What are some key considerations for hybrid computing? [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) and processing becomes a challenge as this function needs
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-computing?u=76281980&t=94)** to be spread out over multiple environments, each with their own capacity and security constraints. Ensuring security and compliance of the application stack across multiple computing environments is a challenge as credentials need to be managed across the stack for authorization and access. Workloads need to be orchestrated across processes running on different environments. A specialized management stack is needed to orchestrate workloads across these environments. Communication could be a problem between these environments if the connectivity is not guaranteed, especially on edge devices. Latency is also introduced due to physical distances between these environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AI using hybrid computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=0)** - [Instructor] How does hybrid computing work for different facets of AI ML? We can use hybrid computing to train and serve ML models across different types of environments like cloud, on-premise and edge. Such architectures should be built to ensure reliability and efficiency. How does [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) work in a hybrid setup? Feature engineering may use a distributed set of data sources, and these data sources can be from devices, on-premise [Databases](../../Skills/Software%20Development/Databases.md), or [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). Feature engineering can itself be distributed. For example, each device that has the data source can execute feature engineering tasks locally before shipping the results to a central server. A central server can aggregate data from multiple devices and environments to create the feature store When processing data in multiple environments, it is important to ensure that the data is protected during processing, storage, and transfer. [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) should be ensured at all stages of feature engineering, especially during transfer and merging into the central database. Bandwidth limitations need to be also considered when planning of data transfers. Latency can also be an issue in moving data between devices and environments.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=94)** How about hybrid training? Typically, model training happens at a central location, after collecting all data inputs for the training. It's far easier to scale and manage training in a central cluster or in the cloud. In strict data privacy situations, federated learning may be used. Here, a copy of the model is trained locally on each device using data on that device. The models are then transferred centrally where the final merging and training takes place. Data itself does not get transferred during the process. In addition to training, model reduction techniques like quantization and pruning can also be applied to fit the model into distributed and edge serving environments. How about model inference in hybrid computing? Inference for ML can be done in the cloud, a data center, or edge, based on the use case. In some cases, multiple instances of the model are deployed, in edge deployments, a copy of the model is deployed in each device, and inference happens locally in that device. Models can be deployed closer to the client applications to minimize latency and provide more reliability. Inputs to the model can originate locally, and the local copy of the model is used for inference. The output is also consumed locally.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-using-hybrid-computing?u=76281980&t=191)** Logging in this case may be just stored locally or shipped to a central server. A central monitoring framework can be used to monitor all deployed models in distributed inference. Such a framework can also be used to deploy models and applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (5), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [AI architectures for hybrid computing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=0)** - [Instructor] What are the different architecture patterns for hybrid AI? When it comes to AI, there are three key building blocks, the model, data and the application itself. These three building blocks can be distributed across different environments based on the application, resource or [Privacy](../../Skills/Data%20Science/Privacy.md) requirements. Let's discuss some popular AI patterns in hybrid computing. We begin with the first pattern. in this pattern, the application and data are deployed inside the enterprise boundaries. The model is deployed in the cloud. This is typically used when an off-the-shelf model is used from a cloud service provider. In this case, since data is kept inside the enterprise, privacy is ensured. The enterprise also has control over the data and the application. However, it'll incur additional costs for managing them. [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) applications are a good example of this pattern. Next, we discuss mode two. In this case, both the application and the model are deployed in the cloud. Data is stored within the enterprise or in a virtual private cloud. Data is physically segregated from other customers. This ensures full [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and applications demanding such privacy will use this pattern. Enterprise has lower levels of control
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/ai-architectures-for-hybrid-computing?u=76281980&t=93)** as the application is in the cloud. A good example of this pattern is when enterprises use [SaaS](../../Glossary/Concept/SaaS.md) AI [products](../../Skills/Software%20Development/Microsoft%20Products.md). Here, the SaaS service provider provides a VPC capability to segregate data. We then move on to the third mode. In this mode, we have multiple applications, data groups and models that form the full application stack. Legacy applications, data and models may be deployed in the enterprise, while newer applications can be deployed in the cloud. Some applications can also run on Edge devices. All three applications are integrated into a single workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (3), [SaaS](../../Glossary/Concept/SaaS.md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** vpc (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid AI architecture example: Problem](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-problem?u=76281980&t=0)** - [Instructor] Let's now build an architecture for a hybrid AI problem. This is a [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) chatbot that can answer questions posted by customers based on an enterprise knowledge base. The goal for this customer support Q1-day problem is to build an AI system that can answer customer questions about a company's [products](../../Skills/Software%20Development/Microsoft%20Products.md) and policies. The architecture should build a knowledge base and leverage it to generate summaries to respond to customers. This is a [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) use case that leverages the [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md), or RAG, pattern. For knowledge base, the source document would be product documentation and frequently asked questions available in the company. Additionally, the ML model needs to be trained to answer questions in a specific professional tone. A question-and-answer dataset is available with answers in the expected tone, using which the model needs to be trained. For the knowledge base, a vector database in [Pinecone](../../Glossary/Service/Pinecone.md) Cloud needs to be created. For the model, we will use a large language model from OpenAI and fine-tune it for the specific tone. Application code is deployed in the enterprise. Let's now build an architecture for this use case in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1), [Pinecone](../../Glossary/Service/Pinecone.md) (1)
> **Definitions:** is a  (2)
> **Env Vars:** rag (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid AI architecture example: Solution](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=0)** - [Instructor] Let's now implement the [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) Q&A chatbot. We begin with [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) for the chatbot. We have two environments, namely the enterprise data center and the cloud. First, the product documentation and FAQs are available in files. These documents are then processed through a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) job. The job will read the documents, chunk and create embeddings. These embeddings are then saved in a vector database on [Pinecone](../../Glossary/Service/Pinecone.md) cloud. Pinecone cloud is a cloud service provider for [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). Next, we need to fine-tune the LLM on OpenAI. For this, we have the reference questions and answers with the right tone in flat files. The files are then split as training and test datasets using a Python program. The resulting datasets are also stored in flat files. A Python fine-tuning script is used to fine-tune the OpenAI LLM using the training dataset. The LLM is hosted on OpenAI cloud, so the fine-tuning happens in the cloud for the model A test model script in Python test the fine-tuned model using the test datasets. If the results are not satisfactory, then additional fine-tuning is done by adjusting the hyperparameters. This process continues until the results are satisfactory.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/hybrid-ai-architecture-example-solution?u=76281980&t=93)** The fine-tuned LLM is now available in the cloud. Results of the experiments can be tracked using the Weights & Biases cloud service. We now move to the inference for the customer support Q&A chatbot. In the cloud, we have the vector database in Pinecone. We also have the fine-tuned LLM in OpenAI. A Python-based application is used to provide the chatbot surveys. A client application or a user can send in a product question to get answers. The question first goes to a retriever module in Python. The retriever will perform [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) using the vector database and return the best document matches back to the chatbot. The document matches are then sent to the model service. The model service then ranks the documents and sends the top documents to the LLM to get a response. The LLM produces the response in the right tone. This response is then relayed back to the user. This completes our discussions about hybrid AI, and we have come to the end of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Pinecone](../../Glossary/Service/Pinecone.md) (3), [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1)
> **Env Vars:** llm (7)
> **CLI Commands:** python (6)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with AI data processing](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-processing-batch-real-time-and-cloud-architectures-for-ai/continuing-on-with-ai-data-processing?u=76281980&t=0)** - [Instructor] We have reached the end of the course. By now, you have an understanding of how to build architectures for batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) AI using multiple deployment modes. You can take this learning even further. First, build a small end-to-end machine learning pipeline for a use case in your enterprise using the concepts learned in this course. Implement the same pipeline using one of the cloud platforms using native tools and technologies. Explore building hybrid architectures for [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) for a use case in your organization. AI always intrigues me. I bet it intrigues you too, so let's keep exploring it and find better ways of extracting purpose out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Kumaran Ponnambalam](../../Instructors/Artificial%20Intelligence%20(AI)/Kumaran%20Ponnambalam.md)

## Skills Covered

- Real-Time
- Data Processing
- Batch Processing
- Cloud-Native Architecture
- Artificial Intelligence (AI)

## Path Context

### In [Working with Data- Collecting, Processing, and Storing Data for AI](../../Paths/Cloud%20Computing/Learning%20Paths/Working%20with%20Data-%20Collecting%2C%20Processing%2C%20and%20Storing%20Data%20for%20AI.md)
← [Scalable Data Storage and Processing for AI Workloads](Scalable%20Data%20Storage%20and%20Processing%20for%20AI%20Workloads.md) | **6 of 6**

## Appears In

- [Working with Data- Collecting, Processing, and Storing Data for AI](../../Paths/Cloud%20Computing/Learning%20Paths/Working%20with%20Data-%20Collecting%2C%20Processing%2C%20and%20Storing%20Data%20for%20AI.md)

## Related Courses

_Courses sharing skills:_

- [Scalable Data Storage and Processing for AI Workloads](Scalable%20Data%20Storage%20and%20Processing%20for%20AI%20Workloads.md) — Artificial Intelligence (AI), Data Processing
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI)
- [Exploring the Future of Development with GitHub Copilot Workspace](../Artificial%20Intelligence%20(AI)/Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI)
- [Big Data in the Age of AI](../Data%20Science/Big%20Data%20in%20the%20Age%20of%20AI.md) — Artificial Intelligence (AI)
- [Complete Guide to Excel Statistics with Copilot](../Data%20Science/Complete%20Guide%20to%20Excel%20Statistics%20with%20Copilot.md) — Artificial Intelligence (AI)

---

[↑ Back to top](#)