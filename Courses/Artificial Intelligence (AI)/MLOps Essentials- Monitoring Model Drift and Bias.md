---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mlops-essentials-monitoring-model-drift-and-bias
url: "https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias"
duration_minutes: 65
duration: 1h 5m
level: Intermediate
updated: 10/6/2023
learners: 24536
skills:
  - MLOps
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGeeHwGfnMVDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696443937130?e=2147483647&amp;v=beta&amp;t=mGC8mXrlm7hNClnvS9urtHlv1dkv7UdDwUYkqYuvBFo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Advance Your Skills in AI and Machine Learning]]'
prev_courses:
  - '[[MLOps Essentials- Model Deployment and Monitoring]]'
  - '[[MLOps Essentials- Model Deployment and Monitoring]]'
next_courses:
  - '[[Introduction to MLSecOps]]'
  - '[[UX for AI- Design Practices for AI Developers]]'
path_nav: '[{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":9,"total":10,"prev":"MLOps Essentials- Model Deployment and Monitoring","next":"Introduction to MLSecOps"},{"path":"Advance Your Skills in AI and Machine Learning","position":12,"total":16,"prev":"MLOps Essentials- Model Deployment and Monitoring","next":"UX for AI- Design Practices for AI Developers"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/mlops
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md)

![MLOps Essentials: Monitoring Model Drift and Bias](https://media.licdn.com/dms/image/v2/D560DAQGeeHwGfnMVDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696443937130?e=2147483647&amp;v=beta&amp;t=mGC8mXrlm7hNClnvS9urtHlv1dkv7UdDwUYkqYuvBFo)

# MLOps Essentials: Monitoring Model Drift and Bias

> As more and more ML models are developed and deployed, the need arises to ensure that the models are effective and safe and that they perform as desired. Model monitoring, a core function of MLOps, helps data scientists and MLOps engineers to meet this need. In this course, data analytics expert Kumaran Ponnambalam discusses the types of monitoring needed for ML models. He deep dives into model dr

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias) | 1h 5m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The need for model monitoring](#the-need-for-model-monitoring)
  - [Setting up the exercise files](#setting-up-the-exercise-files)
- [**1. Introduction to Model Monitoring**](#1-introduction-to-model-monitoring) (4 videos)
  - [ML models in production](#ml-models-in-production)
  - [Challenges with serving models in production](#challenges-with-serving-models-in-production)
  - [Metrics to monitor](#metrics-to-monitor)
  - [Data for model monitoring](#data-for-model-monitoring)
- [**2. Model Drift Basics**](#2-model-drift-basics) (5 videos)
  - [Introduction to model drift](#introduction-to-model-drift)
  - [Concept drift](#concept-drift)
  - [Feature drift](#feature-drift)
  - [What causes drift?](#what-causes-drift)
  - [Drift remediation process](#drift-remediation-process)
- [**3. Detecting Model Drift**](#3-detecting-model-drift) (6 videos)
  - [Detecting concept drift](#detecting-concept-drift)
  - [Concept drift detection example](#concept-drift-detection-example)
  - [Detecting feature drift](#detecting-feature-drift)
  - [Feature drift detection example](#feature-drift-detection-example)
  - [Detecting drift in text and images](#detecting-drift-in-text-and-images)
  - [Software for drift detection](#software-for-drift-detection)
- [**4. Drift Monitoring Process and Best Practices**](#4-drift-monitoring-process-and-best-practices) (4 videos)
  - [Drift monitoring pipeline](#drift-monitoring-pipeline)
  - [Analyzing drift trends](#analyzing-drift-trends)
  - [Discovering root causes for drift](#discovering-root-causes-for-drift)
  - [Retraining to overcome drift](#retraining-to-overcome-drift)
- [**5. Introduction to Model Bias**](#5-introduction-to-model-bias) (5 videos)
  - [Fairness and bias](#fairness-and-bias)
  - [Fairness in ML](#fairness-in-ml)
  - [Sources of ML bias](#sources-of-ml-bias)
  - [Protected attributes](#protected-attributes)
  - [Demographic parity](#demographic-parity)
- [**6. Bias Detection and Best Practices**](#6-bias-detection-and-best-practices) (5 videos)
  - [Bias detection techniques](#bias-detection-techniques)
  - [Equal opportunity score](#equal-opportunity-score)
  - [EOS example](#eos-example)
  - [Bias detection software](#bias-detection-software)
  - [Overcoming bias in ML](#overcoming-bias-in-ml)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for model monitoring](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=0)** - In machine learning, monitoring your models is critical to ensure that models continue to perform in production with expected levels of accuracy and fairness. So in this [[LinkedIn]] Learning course, we will discuss the basics of ensuring that drift and bias don't creep into the models you are building. We will also work on a couple of exercises to show how this can be done well. I'm Kumaran Ponnambalam. If you are a data scientist or a machine learning engineer, monitoring is an essential skill for you to have. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### [Setting up the exercise files](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course. All course exercises are built using [[Python (Programming Language)|Python]] 3.9. We will be using Anaconda and Jupyter Notebooks for these exercises. You can download and install Anaconda from the website [anaconda.com/download](https://anaconda.com/download) for your specific operating system. Once downloaded and installed, we will go to the Anaconda UI. Here, we will create a new virtual environment called monitoring.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=45)** We will choose Python 3.9 as the Python version. This will take some time to set up. The environment is set up now. Now we can go back to Home, make sure we have selected monitoring, and then we will install Jupyter Notebooks. Jupyter Notebooks is installed now. Open the command prompt window. Please note that if you are on [[Windows]], you would want to use the Anaconda command prompt for the same. The exercise files for this course have been downloaded on my computer to the folder /Users/[[LinkedIn]]/ExerciseFiles. Please download the exercise files on your computer in a similar folder. Navigate to that folder on the command prompt. We can explore these files from the command prompt. Now, let's activate the new virtual environment we created using the command conda activate monitoring. Then we can start the Jupyter Notebook server using the command jupyter notebook. Please make sure that you are in the same folder as the exercise files are before using the command. This command then opens the Jupyter Notebook in the browser. The exercise files and the data files can be seen in the root directory.
>
> **[2:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=140)** We will use these files in the later exercises. In the next chapter, we will review the basics of model monitoring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Windows]] (1), [[LinkedIn]] (1)
> **Tools:** jupyter (6), anaconda (5), command prompt (4)
> **Exercise Files:** exercise files (5), download the (1)
> **CLI Commands:** python (3), make (2)
> **Prerequisites:** set up (3), install (2)
> **UI Navigation:** go to (1), open the (1), navigate to (1)
> **Versions:** python 3 (2)
> **Cross-References:** go back to (1), in the next (1)


### 1. Introduction to Model Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [ML models in production](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=0)** - Before we dive into model monitoring aspects, let's quickly review some background on machine learning model deployments in production environments. How are models typically deployed in production? Models are typically hosted by a wrapper or API service. This service may be custom built or user available third party hosting services like TorchServe or [[TensorFlow]] serving. Users interact with the model through intermediate services. These services may be graphical interfaces or APA-driven interfaces. They may exist in the business layer and perform other business functions too. Intermediate services pass the required inputs to the model and receive outputs or predictions from the model. ML services may be deployed in N+1 configurations for [[Scalability]] and performance. Deployment to production systems typically happen using CI/CD pipelines that test and automate these deployments for the models and associated services. Models and associated services usually have several levels of instrumentation for [[Data Collection]] about performance and associated observability capabilities. Let's look at an example ML [[Service Deployment]] pattern. Other deployment patterns are also used.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=97)** In this pattern, the non-ML services, like user interfaces or business layer services, are deployed as a separate service in their own containers. The ML service itself is deployed as another service in its own containers. The ML service only takes care of pre-processing model inputs, predictions, and any post-processing needed before returning the predictions. The model file is in a portable format, like pickle, and is stored centrally in a file store. The ML service loads the model dynamically as needed and uses it to serve requests. It may also cache the model for handling future requests. Clients access the model through the non-ML interfaces, which in turn route the request to the ML service. There are several variants of this deployment possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (1), [[Scalability]] (1), [[Data Collection]] (1), [[Service Deployment]] (1)
> **Env Vars:** api (1), apa (1)
> **CLI Commands:** cd (1)
> **Speakers:** - before (1)

#### [Challenges with serving models in production](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=0)** - [Instructor] What kinds of challenges exist in serving ML models in production? What types of problems can occur? Resource choking and associated system performance degradation is a common problem if enough compute and storage resources are not allocated to the model or service. This increases latency and may cause the model to crash. The input data received by the ML service may be incomplete or corrupted. This can be intentional or may happen due to upstream application issues. This will result in incorrect predictions that may have downstream implications. Application-related defects and exceptions can happen across the application stack, which may impact how the model executes and behaves. Again, it can lead to degraded performance or failures. ML models are also susceptible to several security risks, like data poisoning, adversarial attacks, or attack vector exposure that can compromise model behavior and outputs. Drift may occur in how the model performs in production. This leads to incorrect outputs, which in turn impacts the effectiveness of the applications. Bias and fairness issues in predictions may also occur. This, if exposed, can lead to loss of trust with the model. We will specifically discuss
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=96)** model drift and bias in this course and explore ways of detecting and overcoming these two challenges.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Metrics to monitor](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=0)** - To identify and overcome problems with machine learning models in production, we first need to understand what is going on. For that, we need metrics. What kinds of metrics are collected in a typical machine learning deployment? Let's begin by looking at the system and infrastructure metrics that need to be monitored. This list is the same for both ML and non-ML services. For CPU, we would monitor utilization levels and usage trends. For memory, key metrics to monitor or heap utilization and threat counts as increasing levels can lead to memory leaks and process crashes. Garbage collection is also another metric to keep watch. For networking, we monitor latency to make sure that it is within acceptable ranges. Jitter and packet loss tells us if there are issues with communication resulting in multiple retries. Disks are also an important resource. Disks activity and queuing for disk needs to be monitored to make sure that it is not a blocking issue. Next comes application metrics. There are two types of metrics. There are service metrics that apply for all kinds of services and business domain-specific metrics. In service, we typically monitor latency and concurrent sessions to understand load on the system.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=97)** Errors and failures indicate if the service is working correctly. Max queue size is applicable when requests are being queued for processing. Availability measures overall service availability across the cluster, even if individual node go down. Average response size measures the network load when messages are being exchanged between services. Some domain specific measures would be orders processed per hour for order processing systems, click-through rate for web applications, approval rate for credit application processing, thumbs-up percentage for recommendations, and self-service rate for chatbots. Then comes machine learning specific metrics. These metrics are constrained by the amount and type of data available, especially if true labels are available from production. [[Performance Metrics]] for models include accuracy, F1-scores, type I and II errors, precision, recall, et cetera. Computation of these metrics would depend upon the availability of both predicted and actual labels. For model drift, the typical measurements are concept drift, feature drift, and correlation. There are also [[Responsible AI]]-related metrics like fairness score and correlation. Monitoring these measures are important to ensure that the models are performing to expectations
>
> **[3:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=193)** when deployed in production. In this course, we will focus on drift and fairness monitoring. Let's explore these in detail in the upcoming chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Performance Metrics]] (1), [[Responsible AI]] (1)
> **CLI Commands:** make (2), node (1)
> **Env Vars:** cpu (1)
> **Speakers:** - to (1)

#### [Data for model monitoring](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=0)** - [Instructor] What data do we need to instrument for and capture to enable monitoring for model drift and bias? Here is the list of key model monitoring data elements. Raw input features that are received by the ML service should be collected in its original form. This becomes the reference data for future comparison and training. Input features may undergo transformation, like one hot encoding and bending during pre-processing. These also need to be collected as they are the direct input to the model. The predictions or outcomes from the model of course need to be collected, and linked to their corresponding features. If true labels can be acquired either through human feedback or explicit labeling, they also need to be collected, and linked with its corresponding prediction. Prediction stats, like confidence levels or [[Probability]] scores also need to be collected. Finally, latency of the model should be collected for future reference. There are several ways in which this dataset can be collected. Custom application code inside the ML service can be used to collect and propagate data. Popular machine learning libraries also provide ways to collect this data in multiple files. Finally, user input can be used to collect true labels, and validate if the predictions are accurate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Speakers:** - [instructor] (1)


### 2. Model Drift Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to model drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=0)** - [Instructor] In this chapter, we will explore in detail about Model Drift concepts. Let's begin with an introduction to Model Drift. When we train, test and deploy a model, it has a proven level of predictive accuracy. It is expected that the model will continue to have the same accuracy levels in production over its lifetime. A model is considered drifting when its predictive accuracy reduces over time when deployed in production. Let us consider a few examples here. We have three models deployed in production at month zero. The chart shows the observed prediction accuracy of models for the next four months. Let's start with the first model, sentiment analysis which is the green line. It starts with an accuracy of 85%, and over the next four months it oscillates between 85% and 90%. It is staying within the band, and hence considered not drifting. Next, let's look at the intent detection model shown in red. It starts with an accuracy of 85%, but in the second month, it's observed accuracy false to 65% and then stays around there. This is considered a sudden model drift. Next, we look at the obscenity filter model in blue. This model starts at 90%, and its accuracy goes down slowly
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=92)** over time to 75%. This is called slow drift or slow decay over time. When a model is deployed in production, all these types of drifts can happen, but if the model accuracy goes down for a given time period, but comes back into the band for the next, it will not be considered as drift. To help with our discussions around drift, let's discuss some math on prediction probabilities. Let us assume that we have a simple model that takes in features about a patient, and predicts if the patient has diabetes. One of the features is the age of the patient. X stands for a feature and Y stands for a target. So the [[Probability]] of X or P of X is the probability that a given feature value appears in the population. So if 40% of the patients are over the age of 50, then the probability of age greater than 50 would be 40%. Similarly, the probability of Y or P of Y is the probability that a given target value occurs in the population. So if 10% of the patients have diabetes, then the probability of diabetes equals true is 10%. We then look at conditional probabilities. The probability of X given Y or P of X by Y,
>
> **[3:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=185)** means how often a given value of X occurs when a given value of Y occurs. This means the percentage of the time where age is greater than 50, where the patient also has diabetes. The reverse conditional probability is P of Y bar X. This is the probability that the patient has diabetes when their age is greater than 50. The joint probability of X and Y is the percentage of time that both X and Y values occur in the dataset. In this example, it is the percentage of time that a patient has diabetes, and their age is also greater than 50. The probability of Y given X or P of Y by X is computed as the joint probability of X and Y divided by the probability of X. This is the formula that indicates the relationships between a specific value for a feature, and a specific outcome for the target. Drift happens when the probability P of Y given X changes in the real world, but the model does not reflect the same. For example, let's say, after the model is developed and deployed, a magical medication for diabetes is introduced because of which patients above the age of 50 mostly recover from diabetes. The model will not be in-sync with the change,
>
> **[4:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=278)** and will continue to predict with its older assumptions. Hence, it'll drift and decay. We will explore drift further in the remaining videos in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (14)
> **Definitions:** stands for (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Concept drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=0)** - [Instructor] There are two types of drifts that can happen in machine learning, namely Concept Drift and Feature Drift. Let's discuss concept drift in this video. A machine learning model essentially captures the relationship between the features and the target, and uses this information to make predictions. A concept drift occurs when the relationship between the features and the target changes over time. As a result, the model is no longer able to predict accurately, and needs to be retrained. In the formal of our conditional [[Probability]] of Y given X, when the joint probability of X and Y changes, concept drift occurs. For example, let's say in the real world a patient has diabetes 80% of the time when their age is greater than 50. A model built on such data will also predict the same. Let's say for five months the ground truth holds good, and the model predicts with the same level of accuracy. By the sixth month, a new medication for diabetes lowers (indistinct) levels and changes the probability of being diabetic when the age is greater than 50 to just 50%. The old model built on the old data will continue to predict that 80% of those above 50 as diabetic, and hence will turn inaccurate, this is concept drift.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Feature drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=0)** - [Instructor] Having discussed concept drift, let's now focus on the other type of drift called feature drift. A feature drift occurs when the distribution of values or classes of features changes over time. This indicates a change in the features that are different from those that were used for model training. Looking at the conditional [[Probability]] formula, here there is a change in the probability of X for feature drift. One important question is whether the occurrence of a feature drift would also mean that a concept drift is also happening. There may be a concept drift, or they may not be. A change P of X may be accompanied by an equivalent change in the joint probability of X and Y, leaving probability of Y and X unchanged. Let's look at some examples of feature drift. In the same example of predicting whether a patient is diabetic, let's look at the distribution of classes over a few months. In the first three months, patients with age greater than 50 comprise about 40% of the population. In the months 4 and 5, it drops to 15%. This is a change in the distribution of classes, and it's called feature drift. During the same period, the percentage of patients under 20 does not change. Let's look at another feature called patient weight, which is a continuous variable.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=94)** The box plot shows the distribution of weight values for two months. Looking at the weights of patients in the first months, the values ranged from a little above 100 to close to 200. In the second month, it ranges from 120 to 240. As seen from the box plot, there is a significant change in the distribution of values. This is, again, feature drift. Just because the distribution changes, it does not mean that the predictions would be impacted. As long as the model predicts the same when age is greater than 50, data drift would not impact model accuracy. But when it's not possible to measure concept drift because the two labels are not available, feature drift can be an indicator for potential concept drift.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4)
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)

#### [What causes drift?](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=0)** - [Instructor] Why does drift occur after a model has been deployed in production? Let's begin with concept drift. What causes concept drift in real scenarios? There are multiple reasons. There could be changes in the ecosystem that may trigger changes in behavior of the subjects. For example, a new marketing campaign with deep discounts may increase conversion rates. A new demographic may start buying more. There could be cyclic and seasonal variations that are not covered in the training data. For example, during the school reopening season, the sale of school supplies will go up. If a model predicting school supplies did not consider this seasonal variation, it'll be inaccurate during the season. Another reason is that the training data is not from the same population as production data. This includes data distribution and frequency. In such cases, drift may not be immediately noticed after deployment. What causes feature drift? There could be a change here in the population mix of entities. Some demographics may be more active in a given time period. Some [[Microsoft Products|products]] may be sold more than expected. For example, during COVID, sale of hand sanitizers increased multi-fold. There can be some changes in application logic in upstream data creators and processors that may change the distribution.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=97)** Some new classes or categories may be introduced, which the model may not be aware of. There can be errors in data generation and processing. That is introducing skewed or random values into the data stream. Equipment errors, data pipeline errors, and missing data errors can all cause deviation in feature data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Analogies:** for example (3)
> **Env Vars:** covid (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Drift remediation process](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=0)** - [Instructor] How do we detect and fix drift issues with our models? Let's look at a typical drift remediation process. It starts with detecting drift in the models in production. For these, we need to add instrumentation to our models to collect necessary data. We may have to add manual or automated labeling to understand the ground truth. Based on this, we need to set up drift tracking processes and pipelines and analyze drift periodically. Then we get to identifying the root causes of drift. For this, we analyze the changes in relationships between the feature and the target variables in the ecosystem. We additionally explore input data issues in production and possible training data issues. Once the root causes identified, we need to fix the issue. This may include augmenting or replacing the current training datasets. We would also have to retrain the model with this updated training dataset. We may have to also fix other application issues that may be causing issues with input data. Having discussed the concepts around drift, let's analyze drift with some examples in the next chapter.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Detecting Model Drift

[↑ Back to Table of Contents](#table-of-contents)

#### [Detecting concept drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=0)** - [Lecturer] What techniques are available to detect concept drift? Measuring concept drift is a straightforward activity. For these, we need to instrument the machine learning services to collect predictions made by them and also the associated ground truth. Ground truth is the actual values for the predictions made. For example, if the model predicts that a customer has a high propensity to buy a product, ground truth is the validation that the customer actually bought the product. With predictions and ground truth, we can then compute scores like accuracy, F1, precision, and recall. Then we compare the absorbed values of scores between production and training. We need to compute these scores periodically, say every month, and analyze if the score stays stable or if they deviate. Concept drift happens if there is a significant deviation that persist over multiple time intervals. Concept drift is the best measure to understand if the model is not working to expectations. But there are serious challenges in measuring it. Concept drift requires the ground truth for inferences that are made in production. But ground truth labels are not available ready-made in most of the cases, hence, we cannot compute any of these metrics for drift. There are some options that exist for generating ground truth.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=93)** Sometimes the downstream processing activities may provide the ground truth. For example, if we are predicting if a customer will buy a product, we can validate that once the customer finishes their shopping experience. We can use manual human labeling where a person can look at the information and provide the ground truth labels. This can be very expensive. There are also automated labeling tools today that help in mass labeling, but they suffer from accuracy challenges when compared to human labeling.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [lecturer] (1)

#### [Concept drift detection example](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=0)** - [Instructor] Let's now explore concept drift with an example. In this example, we will simulate concept drift for the model, and then analyze changes in feature target relationships. The code for this chapter is in the code_03_XX Drift Detection Example [[Python (Programming Language)|Python]] notebook. Let's load the notebook now. We will first install all the dependency packages for this chapter. These exercises need [[Pandas (Software)|pandas]], scikit-learn, and alibi-detect packages. We have training data available in the file credit-approval-training-data.csv. We load this file. The data contains information about credit card applications and whether they are approved or not. There are four feature variables, namely age range, income category, race, and credit rating. To keep things simple, all four of them are converted into categorical features. There are three classes in age range, four in income category, five in race, and six in credit rating. The target is the approved Boolean variable. To train this model, we first split the features and the target as train and test sets. We then proceed to build a Naive Bayes model using scikit-learn.
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=92)** We then check the classifier accuracy. It's about 93%. Then, we have production live data captured in the credit-approval-prod-data.csv. This also has the ground truth label for the approved flag. We use the credit approval model to credit approvals for the production data. Then, we compute the accuracy of these predictions using the ground truth. This comes to 38%, so there is a significant change in the overall predictions performance from 92% to 38%. This is considered concept drift. To explore the root cause, let's now do a correlation analysis between the target and the features. We do it for both the training data and the production data and compare the changes. We see that there is a significant change in age range and credit rating. This means there are changes in the real world where age and credit ratings are being treated differently than what was available in the training data to approve a loan. Now, the model requires retraining with the new data captured.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1)
> **File Paths:** credit-approval-training-data.csv (1), credit-approval-prod-data.csv (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Detecting feature drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=0)** - [Instructor] Having discussed detecting concept drift, let's now discuss the techniques for detecting feature drift. There are exploratory techniques for analyzing if feature drift is happening for a given feature variables. In this case, we compare the feature value distributions between the training and production datasets. For categorical features, we can use histograms and pie charts for visual inspection. For continuous features, we can use quartiles and box plots. In the chart, we compare the distribution of product classes between the training data and production data. We see that printers have increased in production while keyboards have decreased significantly. Now, this may or may not lead to a corresponding concept drift. How do we measure drift over a large number of feature variables? There are a few popular techniques used. Popular machine learning libraries support computation of these measures out of the box. All these techniques require the training dataset and the production dataset to compare class distributions. Chi-square test is a popular legacy technique used for feature drift. Other techniques include the Kolmogorov-Smirnov test, or KS test, and maximum mean discrepancy, or MMD. Several variations of these techniques are also possible. You can also build a drift detection classifier
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=93)** or regressor that can predict if drift exists between these datasets. Building a custom classifier would require investments in creating and labeling training datasets, though.

> [!info]- Semantic Content
>
> **Env Vars:** mmd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Feature drift detection example](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=0)** - [Instructor] We will now look at examples of detecting and analyzing feature drift. For this, we will use the same training and production datasets that we have loaded up in our earlier example. We first begin by doing histograms for all the categorical features in both the training and production datasets. Both datasets have 1,000 samples. If we look at the histograms, we can see that age range and income category shows significant distribution changes. For example, in age range, training data has more samples for category 1 then production data. Similarly, category 3 has increased in count in production. Race and credit ratings have not shown any significant changes between these two datasets. Let's now also measure drift using chi squared distribution using the Alibi Detect library. For this we first create a drift detector using the training features. The key information to pass here is the p-value as a threshold. The p-value is the measure of similarity between the two datasets. A value of 0.05 means if the p-value is less than 0.05, then drift exists in the dataset. We use the predict method to compute the p-value and then compare it to the threshold and print if there is drift or not. We see that the p-value for both age range and income category are very low, and hence we have drift.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=97)** On the other hand, race and credit rating have high values. This correlates with the visual analysis we did with the histograms. I highly recommend that learners explore more on chi squared to understand the math behind the drift predictions.

> [!info]- Semantic Content
>
> **Versions:** 0.05 (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Detecting drift in text and images](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=0)** - [Lecturer] [[Natural Language Processing (NLP)|Natural language processing]] and [[Computer Vision]] models are increasing in popularity as [[Deep Learning]] techniques are becoming democratized. Drift can happen in these models. Let's explore how drift detection is different for NLP and computer vision compared to classical machine learning. We start with concept drift. For classification problems, it is the same as structure data or classical machine learning. We are only using the class ground truths and predictions, which are numeric irrespective of the type of features, so we can still compute accuracy scores to measure drift. What about [[Generative AI]] like text summarization or image generation? In this case, we need reference text or images that are the desired outcome or ground truth. Then we compare the ground truth and the generated data to measure similarity using similarity measures. The level of similarity is tracked over time to detect drift. How do we measure feature drift in text data? Unlike structured data, free text has several [[Tokens]] that makes it harder to make one-to-one comparisons. The first technique is to use each unique token as a feature. Then we can compare token frequencies between training and production data sets. The token becomes the feature name and the count becomes the value.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=93)** Then we can use the same technique as structured data to measure drift. Another technique for feature drift in text is to build a domain classifier. In this case, we will combine the training and production data sets into a single dataset. We will use the source of data, whether it's training data or production data, as the target label. Then we build a classifier on this data set to predict the label. If the classifier can predict with high levels of accuracy, it means that the training and production data sets have distinct characteristics and hence, there is drift. On the other hand, if the model struggles to differentiate, then it means that there is no drift happening. How about feature drift in images? Here, we can convert each pixel position to a feature. Then a five by four image will have 20 features. The RGB value for the pixel becomes the value of the feature. For very large image sizes, dimensionality reduction techniques, like principle component analysis, can be used to reduce the number of features. Then we use the same methods as structured data to measure creature drift. We can also build a domain classifier similar to text for images to detect drift.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Deep Learning]] (1), [[Generative AI]] (1), [[Tokens]] (1)
> **Env Vars:** nlp (1), rgb (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Speakers:** - [lecturer] (1)

#### [Software for drift detection](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=0)** - [Instructor] There are several out-of-the-box drift detection [[Microsoft Products|products]] and libraries that are available for detecting drift. Let's quickly explore a few of them. Machine learning platforms like AWS, GCP, and Ajar have their own drift detection capabilities. [Seldon.io](https://Seldon.io) is an [[Open-Source Software]] that contains the alibi-detect library, which can be used for drift detection. TorchDrift is available in [[PyTorch]] for drift detection. Scikit-multiflow can also help with drift detection. [[TensorFlow]] [[Data Validation]] helps to detect drift in TensorFlow-related use cases. There are of course a number of commercial [[MLOps]] offerings that bundle in drift detection capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (2), [[Microsoft Products|Products]] (1), [[Open-Source Software]] (1), [[PyTorch]] (1), [[Data Validation]] (1)
> **Env Vars:** aws (1), gcp (1)
> **CLI Commands:** aws (1)
> **URLs:** [seldon.io](https://seldon.io) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Drift Monitoring Process and Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Drift monitoring pipeline](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=0)** - Having discussed techniques for detecting drift in the previous chapter, let's discuss the process and best practices for drift monitoring in this chapter. Let's begin with creating a drift monitoring pipeline. A robust drift monitoring pipeline is key to effective measurement and detection of drift metrics. What does a typical drift monitoring pipeline look like? We begin with the ML service or model that is used for inference in the production environment. For each inference request, the service needs to be instrumented to collect the features used and the predictions obtained. This information is then pushed into a drift database. There could be [[Data Collection]], chewing and consolidation processes that may be used to achieve this goal in a large cluster. Then, labeling may be used to add ground truth or true labels to the captured data. This can be done by manual or automated labeling. Using the ground truth and predictions, we can compute concept drift measures like accuracy and F1. This information is computed over several time intervals to observe the trend. Similarly, using the features from inference, we can also compute feature drift measures over multiple time intervals. The metrics can be provided
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=94)** to the user through an analytics dashboard. The dashboard helps the data scientists understand if drift is happening and if it requires retraining. There can be automated alerts too if drift is observed beyond a set threshold. This pipeline can be used to observe multiple models deployed in production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - having (1)

#### [Analyzing drift trends](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=0)** - [Instructor] What are the best practices in analyzing drift? An important decision to make is in choosing the right time intervals for drift measurement. Note that this interval may be different from model to model. Choosing the right interval is critical for accurate and yearly detection of drift. The interval may be calendar-based. We can compute drift on a daily, weekly, or monthly basis. We can also compute based on the number of samples observed. We can compute drift for every 1,000 inference data points collected. We need to ensure that there are enough data points in each interval so that it aids reliable drift results. If there are too few samples in an interval, the drift measurement may not be stable, and we will observe oscillating drift numbers between the intervals. On the other hand, if the interval is too high, drift measurement will be stable, but the drift can go undetected for a long time, impacting the effectiveness of the process. At each interval, drift is computed, and the summary [[Statistics]] observed is persisted to a database for future reference. What is the process of analyzing drift over time? To begin with, we will always see some amount of drift for all models, but we need to decide if that is significant enough to take corrective action. For this, it is recommended to set threshold bands
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=95)** for normal and abnormal drift. If the drift goes out of band, then action should be taken. In the example to the right, the threshold is set at 20%. Look for drift over consecutive time intervals to ensure that the drift stays outside the threshold. Analyze if drift stays consistently outside the threshold. In this example, Drift B goes out of threshold and stays there, but Drift C comes back inside the threshold after going out once. Take action when drift stays consistently outside the threshold. In the example shown, only Drift B stays outside and needs corrective action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Discovering root causes for drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=0)** - [Instructor] Once we have determined that there is drift and corrective action is needed, we need to find out the root cause for the drift. There are several types of drift trends observed for both feature and concept drift. The symptoms determined what the potential root causes are. First, there is sudden concept drift. This is an abrupt change in drift values at a given interval and then drift stays outside in the future intervals. This is usually because of a change in the business ecosystem that has impacted the relationships between the features and the target. The fix here is to analyze and retrain the model. Next, there could be a sudden feature drift where there is an abrupt change in feature drift values. There could be many reasons here, but mostly associated with feature data generation and processing in production. There could be equipment errors producing incorrect data. There could be [[Data Processing]] errors. There could be changes in user behavior. It is required to fix the source issues and then ensure that the data errors are corrected. Next, there could be cyclic or seasonal concept drift. Here, drift goes outside the threshold at specific days or times, but comes back to normal in other intervals. The root cause here is that there is seasonal user behavior
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=94)** during these times, like weekends or holiday seasons. The recommendation here is to add the time element to the feature data and retrain the model so the model is sensitive to the time interval too. Finally, there can be gradual drift where the drift increases slowly over time. This can be due to gradual change in business or user behavior or equipment degradation. Again, this needs retraining or repairing the source based on the root cause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (1)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Retraining to overcome drift](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=0)** - [Instructor] What are the best practices in retraining the model to overcome drift? The first important step is to update the training data to accommodate for the changes in feature target relationships. Analyze the business change that has happened. Use the help of domain experts to understand and categorize this change. Determine how much of the training data needs to be updated or replaced. Is the change happening in a specific class or across the board? Do we need to replace the entire training data set or simply make additions to it? Remove use cases that are no longer applicable in the training data set. Add new use cases that have popped up after the last model training cycle. Ensure that data distributions are balanced for each of the features after doing the additions and subtractions. Review the training, validation, and test splits to ensure that they are random and balanced. How about retraining the model? If changes are being made to the model type, architecture, or hyperparameters, it should be gradual. Try changes one at a time to understand their impact on model performance. Ensure that the updated model works equally well for existing, as well as new use cases. It's important to keep the balance and not over-fit for the new use cases. Test against production data where drift
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=95)** was observed previously and see if drift is eliminated now with the new model. Aggressively monitor the new model for some time to ensure that drift has been alleviated. See if there are other problems that bubble up with the new model. This concludes our discussions around machine learning drift. We will discuss bias and fairness in the next two chapters.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. Introduction to Model Bias

[↑ Back to Table of Contents](#table-of-contents)

#### [Fairness and bias](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=0)** - Bias in a business context impacts specific demographics or classes unfairly denying them opportunities and benefits. The bias we have as humans will also extend to the data we create and the models that are trained on that data. Let's now discuss fairness and bias in machine learning and how we can manage and overcome it while building and serving machine learning models. What is bias in common terms? Bias is considered prejudice against someone or something that influences opportunities and outcomes in ways it is not intended to. Bias typically happens based on identities or traits, like gender, race, and age. How does bias impact business? Business decisions may sometimes be influenced by bias towards someone or something. Hiring, providing opportunities, determining benefits, rewards, and approval processes may be influenced by bias for or against a specific identity. For example, a hiring manager may prefer younger candidates and may bias against older ones. Several factors can cause bias among humans in a business context. They may be race, gender, age, ethnicity, or wealth. Business decision makers may prefer those
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=94)** who belong to the same identity as theirs. Bias can be intentional or unintentional. Preconceived opinions may influence how humans make business decisions. Bias in a business context impacts specific demographics or classes unfairly denying them opportunities and benefits. The bias we have as humans will also extend to the data we create and the models that are trained on that data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - bias (1)

#### [Fairness in ML](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=0)** - [Instructor] How do we ensure fairness in the models we build based on real world data? Let's first define fairness in machine learning. Fairness in machine learning is the process of ensuring that the model provides all individuals with equal opportunity and does not bias or generalize based on certain demographics or traits. Why is it important to ensure fairness in machine learning? It helps build trust with the customers. When customers believe that the product behaves in a fair manner and does not discriminate, it builds confidence in the product, and hence, brings in more revenue. Fairness helps build and maintain the reputation of the organization in the public eye. This, again, is important in growing the business. Several legal and regulatory requirements exist around fairness. Adherence to these requirements avoids legal issues and monetary penalties for the organization. In this and the next chapter, we will introduce the basic concepts around bias and fairness, and also demonstrate how to monitor bias using popular open source libraries.

> [!info]- Semantic Content
>
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)

#### [Sources of ML bias](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=0)** - [Instructor] How does bias enter into the machine learning process and models? Let's discuss some key sources of bias in the machine learning process. The first type of bias is data selection bias. Data for machine learning is usually obtained from a manual process where the outcome is determined by a human. If that human made decisions in a biased manner, then the training data will also reflect that bias. The model built off that training data will carry over the same bias. The next type of bias is group attribution bias. This is generalization of a behavior based on specific attribute values. In ML training, this happens by using some protected attributes like race and gender. The next one is human bias. This is the bias that data scientists themselves exhibit when they expect certain outcomes based on biased hypothesis. For example, a data scientist may think that older men will make more money than young women. If the model testing generates results against this assumption the data scientist would reject that model as faulty. Finally, there is benchmarking bias. Benchmarking is usually done using a sample. If that sample does not represent the entire population in a balanced manner, then benchmarking results may also be biased.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Protected attributes](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=0)** - [Instructor] Having discussed some background on bias and fairness in machine learning, let's discuss some key concepts. The first one is the protected attribute. What are protected attributes in business? These are the features, characteristics, identities or traits of an individual that should not be used for making business decisions. While there are some common lists of such features, the list would vary based on the organization and based on the use case. This list of features is selected based on legal or regulatory requirements, ethical guidance, or organizational policies. The organization may still collect this information, but these will not be used for any kind of [[Decision-Making]], either by humans or machine learning models. Here is a list of key protected attributes: race, religion, gender, age, marital status, and economic status. An attribute may be a protected attribute in some cases, while it may not be in others. For example, economic status would not be considered for making an admission decision in a college, but can be used for deciding on a scholarship.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision-Making]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Demographic parity](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=0)** - [Instructor] Next, we look at the concept of demographic parity. What is demographic parity? Each protected attribute can have multiple classes or values. For example, marital status is a protected attribute that can have classes like single, married, widowed or divorced. Some classes in protected attributes are considered privileged demographics. This is because they have historically had unfair advantages over other unprivileged demographics. For example, when it comes to the privileged attribute gender, men may have had historical advantage over women when it comes to employment in a given organization. Men could be considered a privileged class while women could be considered unprivileged in this regard. Demographic parity requires that equal opportunity or outcomes be given to both the privileged and unprivileged demographics. Let's look at an example for demographic parity. Let's say we have a job candidate data set with a race attribute. There are five different class values for the races. Race one and race two are considered privileged. Race three, four, and five are considered unprivileged. Suppose we are hiring. In the first example, we see that candidates belonging
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=95)** to the privileged demographics are hired 26% of the time. Candidates from the unprivileged demographic are hired 25% of the time. These are more or less equal and considered as demographic parity. On the other hand, if the candidates from privileged demographics are hired 38% of the time and unprivileged demographics are hired 16% of the time, then demographic parity does not exist. This is considered biased against the unprivileged races.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Bias Detection and Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Bias detection techniques](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=0)** - [Instructor] Having discussed the basics of machine learning bias in the previous chapter, let's explore ways to detect and overcome bias. In this chapter, we will begin with bias detection processes and techniques. What does the bias detection process look like? First, identify the protected attributes in the dataset. This can be done through exploring the schema of the training dataset. For each of the protected attributes, identify the privileged and unprivileged classes. Create proxy binary attributes for the protected attribute. This will be a new attribute with values of one for the privileged classes and zero for the unprivileged classes. In cases where the original attribute is a continuous attribute, use bin to convert it into equivalent binary attributes. Then use these proxy attributes with bias detection techniques that we will discuss in the next slide. Most bias detection techniques use these proxy attributes to understand which records represent the privileged and unprivileged classes and generate measures to compare the model performance between them. What are some of the common techniques to understand bias? First, there are class imbalance measures. This can be a simple histogram to compare if the privileged and unprivileged classes have equal representation
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=95)** in the training data set, and that one does not dominate the other during the modeling process. Then comes the demographic disparity measure that helps understand model performance by each demographic. Another popular measure is the equal opportunity score which checks if the privileged and unprivileged classes have equal opportunities for getting positive outcomes. You can compare model accuracy differences between these classes. Similarly, you can compare recall differences between the classes to understand if bias plays a role in the model outcomes. In this chapter, we will explore equal opportunity scores in detail and do an exercise in [[Python (Programming Language)|Python]]. I highly recommend learners to use supplemental reading on the other techniques mentioned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Cross-References:** previous chapter (1), in the next (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Equal opportunity score](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=0)** - [Instructor] Let's explore the concepts around equal opportunity score in detail now. Equal opportunity score, or EOS for short, is a popular technique in measuring bias for a machine learning model. EOS helps analyze if a model treats both the privileged and unprivileged classes equally. It ensures that the model performance is independent of the protected attributes. In other words, the outcomes from the model should not depend upon the protected attribute. The EOS values range from zero to one. The closer the score is to one, the lower the biases. The closer the score is to zero, the higher the biases. For EOS to be computed, protected attributes need to be converted into binary classes as discussed earlier. EOSs works by building a classification model with the binary attributes and then analyzing the outcome attribution to the protected attributes. Let's explore the math behind the EOS score now. Here we compute the unprivileged [[Probability]] and privileged probability. Unprivileged probability is the probability of predicting a positive outcome when the true label is positive and the protected attribute is zero. Privileged probability is the probability of predicting a positive outcome when the true label is positive and the protected attribute is one.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=95)** If both are equal, that means both the classes have equal probabilities. The formula for EOS is computed by taking a minimum of the unprivileged probability divided by the privileged probability and the privileged probability divided by the unprivileged probability. The second formula is the reverse of the first one, so if both probabilities are close to each other, then both the formulae will yield numbers closer to one. The minimum will also be closer to one. On the other hand, if the probabilities are far apart, then one of the formulae will provide a low value leading to the EOS value being low. Let's consider an example. If the unprivileged probability is 0.42, and the privileged probability is 0.41, the EOS score will be 0.97. This is a really good fairness score. In the second example, unprivileged probability is 0.41 and the privileged probability is 0.62. EOS goes down to 0.66. Let's now do a quick exercise to compute EOS for a simple example in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (14)
> **Env Vars:** eos (10)
> **Versions:** 0.41 (2), 0.42 (1), 0.97 (1), 0.62 (1), 0.66 (1)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [EOS example](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=0)** - [Instructor] Let's do an example exercise for Equal Opportunity Score now. The code for this exercise is available in the code_06_03 Equal Opportunity Score with sklego.ipynb Here, we first install the sklego package that contains functions for computing EOS. Then, below the credit-approval-training-data.csv file that we used earlier for drift detection, we will identify two protected attributes here, namely AGE RANGE and RACE. For both these attributes, we convert them into binary variables. For AGE_RANGE, we mark category three as privileged. For RACE, we mark categories one and two as privileged. Then, we build a naive_bayes model, and print the accuracy of the training classifier. For computing equal opportunity scores, we use the equal opportunity score function. We provide the sensitive column name as AGE_RANGE, the classifier, the features, and the true label. The function will use the classifier and the features to predict the outcome, and compare it with the true label. It computes the EOS score based on the formula we discussed in the previous video. Looking at the results, we see that the equal_opportunity_score for Age Range and Race are closer to one. Next, we repeat this exercise with another dataset,
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=97)** credit-approval-fair-data.csv. We will follow the exact same steps and generate the EOS. Here, we see that though the score for age range is high, the score for race is low. This means the model built on the new data set is biased for the race attribute.

> [!info]- Semantic Content
>
> **Env Vars:** eos (3), race (2), age_range (2), age (1), range (1)
> **File Paths:** credit-approval-training-data.csv (1), credit-approval-fair-data.csv (1)
> **Code Identifiers:** naive_bayes (1), equal_opportunity_score (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Bias detection software](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=0)** - [Instructor] Let's quickly review some of the popular software available for detecting bias and ensuring fairness. These are the popular packages available today for fairness. sklego is the package we used in the earlier example. It's available as part of the scikit-learn family. AI Fairness 360 is an open source package that is being supported by IBM. Amazon SageMaker Clarify is a feature available within AWS that can help understand bias on models that are built using SageMaker. VerifyML is an open source package that supports bias detection. Fairlearn is another such package available.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** ibm (1), aws (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Overcoming bias in ML](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=0)** - [Instructor] We discussed how to detect bias in machine learning. Let's now discuss some best practices to overcome bias. We begin with discussing training [[Data Collection]]. Training data is an important source of bias, so ensuring that the training data is unbiased is a great start to building fair models. Training data needs to be validated for the existence of bias. If the data originates from human decision making, then we need to understand and ensure that the decision making was fair. Ensure that all scenarios are sampled equally in the training data. This ensures fair representation for all demographics in the results. Check for equal class representation for each attribute. All classes should have sufficient representation in the data set. Use bias detection techniques to check if there is inherent bias in the data set. Next comes model training. Remove all protected attributes from the training features. Protected attributes should not be used for building models. Even if protected attributes are removed, other attributes may have strong correlation to the protected attributes and hence can act as indirect proxies. This relationship should be understood as proxy attributes may introduce bias in the model. Additionally, after the model is built, check if correlation exists between the predictions of the model and the corresponding protected attributes. Use human oversight to review results
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=95)** and see if possibilities of bias exists in the training process. Finally, we need to look at models deployed in production. Bias also need to be monitored in production data in addition to drift. Bias detection techniques should be used periodically to check if bias exists in these predictions. The input for both drift and bias reduction is the same so the same pipeline can be used. Additionally, use human feedback as much as possible on the predictions to detect if the predictions are biased. This feedback can come from the consumers of the predictions or by explicit sampling of results. This completes our course on model monitoring for drift and bias.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980&t=0)** - Now that you have learned about model monitoring for drift and bias, you can take your learning even further. First, explore the [[Microsoft Products|products]] and packages available for drift and bias monitoring which we listed in the course. Second, try building a drift and bias monitoring system for a model in your organization. AI always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - now (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- MLOps
- Artificial Intelligence (AI)

## Path Context

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[MLOps Essentials- Model Deployment and Monitoring]] | **9 of 10** | [[Introduction to MLSecOps]] →

### In [[Advance Your Skills in AI and Machine Learning]]
← [[MLOps Essentials- Model Deployment and Monitoring]] | **12 of 16** | [[UX for AI- Design Practices for AI Developers]] →

## Appears In

- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Learning Vertex AI- MLOps with Google Cloud]] — Artificial Intelligence (AI), MLOps
- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Deployment and Monitoring]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Development and Integration]] — Artificial Intelligence (AI), MLOps
- [[MLOps and Data Pipeline Orchestration for AI Systems]] — Artificial Intelligence (AI), MLOps

---

[↑ Back to top](#)