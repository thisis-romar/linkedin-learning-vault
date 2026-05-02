---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mlops-essentials-model-deployment-and-monitoring
url: "https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 5/9/2025
learners: 24536
skills:
  - Machine Learning
  - System Deployment
  - MLOps
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGm06LVfo8Q0Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664994853235?e=2147483647&amp;v=beta&amp;t=_Bk25N4f8tuifFE5UHaLbCtUQxKH41v-IiJGQdFetPY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Advance Your Skills in AI and Machine Learning]]'
prev_courses:
  - '[[MLOps Essentials- Model Development and Integration]]'
  - '[[MLOps Essentials- Model Development and Integration]]'
next_courses:
  - '[[MLOps Essentials- Monitoring Model Drift and Bias]]'
  - '[[MLOps Essentials- Monitoring Model Drift and Bias]]'
path_nav: '[{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":8,"total":10,"prev":"MLOps Essentials- Model Development and Integration","next":"MLOps Essentials- Monitoring Model Drift and Bias"},{"path":"Advance Your Skills in AI and Machine Learning","position":11,"total":16,"prev":"MLOps Essentials- Model Development and Integration","next":"MLOps Essentials- Monitoring Model Drift and Bias"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/system-deployment
  - skill/mlops
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/MLOps%20Essentials-%20Model%20Deployment%20and%20Monitoring.md)

![MLOps Essentials: Model Deployment and Monitoring](https://media.licdn.com/dms/image/v2/C560DAQGm06LVfo8Q0Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664994853235?e=2147483647&amp;v=beta&amp;t=_Bk25N4f8tuifFE5UHaLbCtUQxKH41v-IiJGQdFetPY)

# MLOps Essentials: Model Deployment and Monitoring

> Suggested Prerequisites MLOps Essentials: Model Development and Integration Machine learning operations (MLOps) is one of the fastest growing subfields of artificial intelligence. In this course, instructor Kumaran Ponnambalam shows you how to deploy and monitor ML models to create structured, improved outcomes in your everyday workflow. Learn how to implement MLOps to: Create smooth upgrades of m

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring) | 1h 24m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Getting started with MLOps](#getting-started-with-mlops)
  - [Course coverage](#course-coverage)
  - [Review of MLOps lifecycle](#review-of-mlops-lifecycle)
- [**1. Continuous Delivery**](#1-continuous-delivery) (6 videos)
  - [An ML production setup](#an-ml-production-setup)
  - [Deployment pipelines](#deployment-pipelines)
  - [Deployment rollout strategies](#deployment-rollout-strategies)
  - [Planning for infrastructure](#planning-for-infrastructure)
  - [Deployment best practices](#deployment-best-practices)
  - [Tools and technologies for deployment](#tools-and-technologies-for-deployment)
- [**2. Model Serving**](#2-model-serving) (5 videos)
  - [Model serving patterns](#model-serving-patterns)
  - [Scaling model serving](#scaling-model-serving)
  - [Building resiliency in serving](#building-resiliency-in-serving)
  - [Serving multiple models](#serving-multiple-models)
  - [Tools and technologies for serving](#tools-and-technologies-for-serving)
- [**3. Continuous Monitoring**](#3-continuous-monitoring) (6 videos)
  - [The monitoring pipeline](#the-monitoring-pipeline)
  - [Instrumentation for observability](#instrumentation-for-observability)
  - [Metrics to monitor](#metrics-to-monitor)
  - [ML production data best practices](#ml-production-data-best-practices)
  - [Alerts and thresholds for ML](#alerts-and-thresholds-for-ml)
  - [Tools and technologies for monitoring](#tools-and-technologies-for-monitoring)
- [**4. Drift Management**](#4-drift-management) (5 videos)
  - [Introduction to model drift](#introduction-to-model-drift)
  - [Concept drift basics](#concept-drift-basics)
  - [Managing concept drift](#managing-concept-drift)
  - [Feature drift basics](#feature-drift-basics)
  - [Managing feature drift](#managing-feature-drift)
- [**5. Responsible AI**](#5-responsible-ai) (5 videos)
  - [Elements of responsible AI](#elements-of-responsible-ai)
  - [Explainable AI](#explainable-ai)
  - [Fairness in ML](#fairness-in-ml)
  - [Security of ML assets](#security-of-ml-assets)
  - [Privacy in machine learning](#privacy-in-machine-learning)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with MLOps](#continuing-on-with-mlops)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with MLOps](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=0)** - [Kumaran] More and more machine learning models are being deployed today, serving a variety of use cases for business and personal outcomes.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=9)** The focus on ML management has given rise to the world of machine learning operations, or [[MLOps]].
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=17)** My name is Kumaran Ponnambalam.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=20)** In this course, I will introduce you to the essentials of MLOps for model deployment and monitoring.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=27)** I will start off with options and best practices for model deployment.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=32)** Then, I will cover various model serving patterns and considerations.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=37)** Next, I will focus on monitoring ML models in production and the metrics that are important.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=45)** I will discuss the basics of model drift and how to monitor them.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=50)** Finally, I will briefly touch upon [[Responsible AI]] and how it integrates into the MLOps framework.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=57)** Students are expected to be familiar with general model building and deployment concepts, and are recommended to have prior experience in implementing machine learning.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=70)** It is highly recommended to take the prerequisite course, [[MLOps Essentials- Model Development and Integration]], before starting this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (4), [[Responsible AI]] (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [kumaran] (1)

#### [Course coverage](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=0)** - [Instructor] What parts of the machine learning world are we covering in this course?
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=5)** Let's take a look at the activities in the machine learning ecosystem.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=10)** In general, we can divide these activities into build activities and run activities.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=16)** Build activities focus on creating and testing the model.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=19)** Run activities focus on deploying, executing and monitoring the model.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=25)** There are core machine learning activities in each of them.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=28)** [[Feature Engineering]], model training, testing and packaging are some core ML activities on the build side.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=36)** Model deployment and inference are the core activities on the run side.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=40)** Knowledge and experience in core ML activities is a prerequisite for this course.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=46)** Then, surrounding these core activities is [[MLOps]], which again, can be split into build and run.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=54)** On the build side of MLOps, we have various activities like requirements management, data and training pipelines, [[Data Governance]], experiment tracking and integrations.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=66)** On the run side of MLOps, we have infrastructure management, deployment, serving, monitoring, and [[Responsible AI]].
>
> **[1:15](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=75)** For this course, we will only focus on the run side of MLOps.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=80)** We will focus on build-side activities of MLOps in another course, [[MLOps Essentials- Model Development and Integration]].
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=89)** For each activity in MLOps run, we will discuss the purpose and context for the activity.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=96)** We will discuss techniques, methods, and approaches used.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=99)** We will then touch upon the tools available for performing this activity, and also some of the best practices.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=107)** Each of these activities have enough depth to warrant their own courses.
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=111)** We will be discussing only an overview of the activity and how they will fit in into the overall MLOps context.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=119)** For a deep dive into these specific activities, I recommend further reading.
>
> **[2:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=124)** What are the prerequisites for this course?
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=126)** This course provides a high-level overview of MLOps and does not need deep, technical hands-on experience.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=134)** But it is recommended to have prior understanding of machine learning applications.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=138)** Knowledge of core ML activities and prior experience in building and running machine learning models is desired.
>
> **[2:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=146)** This experience can be either in doing or managing machine learning.
>
> **[2:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=151)** This course is suitable for multiple roles, including data scientists, ML engineers, managers, and product owners working in the AI domain.
>
> **[2:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=161)** Finally, the course [[MLOps Essentials- Model Development and Integration]] is a prerequisite for this course.
>
> **[2:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=169)** That course covers the overview on MLOps, and also the development-side activities, which lead into the topics in this course.
>
> **[2:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=177)** Finally, a [[Microsoft Word|word]] about various tools and technologies discussed in this course.
>
> **[3:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=182)** The MLOps tools world is a rapidly evolving ecosystem.
>
> **[3:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=186)** This can change significantly in a short period of time.
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=190)** So, it's recommended to evaluate the ecosystem periodically, especially when you get into actual implementation.
>
> **[3:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=197)** So, we are recommending tools based on the status at the time of this recording, but it can change rapidly.
>
> **[3:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=204)** Also, there are MLOps tools from the three big platforms, AWS, GCP and [[Microsoft Azure|Azure]].
>
> **[3:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=211)** We are not going to discuss them specifically in this course, but do check them out if you are already on any of these platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (13), [[Feature Engineering]] (1), [[Data Governance]] (1), [[Responsible AI]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** aws (1), gcp (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** prerequisite (2)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Review of MLOps lifecycle](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=0)** - Let's quickly review the [[MLOps]] lifecycle before jumping into the deployment and operations aspect of it.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=8)** MLOps is a set of practices that help manage the creation and use of ML artifacts through efficient workflows, collaboration, and tracking.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=19)** MLOps is not a specific product or technique.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=22)** It is a set of processes and best practices to build and run ML supported by automation and tools.
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=30)** What are the goals of MLOps?
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=32)** MLOps extends the [[DevOps]] methodology to building and serving machine learning solutions.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=38)** It integrates the activities of [[Data Engineering]] and model development into the software engineering and deployment life cycle.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=47)** In addition to the software engineering artifacts of code and records, it manages the machine learning artifacts, data, and models.
>
> **[0:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=56)** It enables continuous model development and integration thus following an [[Agile Development|agile]] process to reduce time to market.
>
> **[1:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=64)** MLOps deals with model deployment and serving.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=67)** It also includes monitoring, performance analytics, and gathering feedback for further improvements.
>
> **[1:15](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=75)** It helps manage the ML processes through automation and tools to improve efficiency.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=81)** What does the MLOps life cycle look like?
>
> **[1:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=84)** It looks very similar to the DevOps lifecycle.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=87)** There are three groups of activities here.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=89)** The software engineering and operations groups are borrowed from DevOps.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=94)** Additionally, there is the machine learning group also.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=97)** Let's look at the various activities and how they integrate together.
>
> **[1:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=102)** The process starts with defining the requirements for the ML project and a corresponding design.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=108)** The design would include both non-ML parts like APIs, services, [[Databases]], UIs, et cetera, and ML pipelines like data engineering pipelines.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=119)** This is then used to develop the non-ML parts of the overall solution.
>
> **[2:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=124)** The requirements would also then feed into the data engineering for converting raw data into useful features for ML.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=131)** Then there is a continuous training cycle where a model is built and refined until it meets the stated requirements.
>
> **[2:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=139)** Models that are built or managed under a model governance framework.
>
> **[2:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=143)** As models are built, they're also integrated continuously with the non-ML code.
>
> **[2:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=149)** Continuous here would be specific small intervals like each sprint or each week.
>
> **[2:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=155)** And passing integration, the model and non-ML code are packaged together and delivered.
>
> **[2:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=162)** Now the operations process kicks in.
>
> **[2:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=164)** Continuous deployment takes care of deploying the upward packages to production.
>
> **[2:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=169)** This is then served to users.
>
> **[2:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=172)** The performance of the model is monitored to ensure that it stays within the expected thresholds.
>
> **[2:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=178)** Model performance information, as well as the model drift and bias information is fed back into model governance for tracking and evaluation.
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=187)** Input is also provided into requirements to see if changes or improvements are needed on the ML or non-ML functions.
>
> **[3:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=196)** Finally, feature and label data from production is captured and fed into the data engineering pipeline to create new data sets.
>
> **[3:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=205)** If model governance determines that the model needs to be retrained, then it kicks off another training cycle with new data.
>
> **[3:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=213)** Having seen its life cycle, let's now jump into model deployment and operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (7), [[Data Engineering]] (4), [[DevOps]] (3), [[Agile Development|Agile]] (1), [[Databases]] (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Speakers:** - let (1)


### 1. Continuous Delivery

[↑ Back to Table of Contents](#table-of-contents)

#### [An ML production setup](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=0)** - [Instructor] Let's begin this chapter about ML deployment by looking at the different options for deploying ML solutions in production.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=9)** We first start with the most simple deployment, a notebook.
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=13)** This is technically not a production deployment, but a use case where the notebook is executed for inference manually.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=22)** A tested and approved notebook serves as the production executable.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=27)** The notebook would still run on a user desktop or a laptop.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=31)** The user would open the notebook when needed, and execute the notebook.
>
> **[0:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=35)** Required parameters for the execution will be provided manually.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=40)** The notebook will load the model, and also the inference input data.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=44)** The predictions from the model are then printed to the console.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=48)** The predictions may also be persisted to a data store for future reference.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=54)** The next pattern is embedded model deployment.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=57)** In this case, the non-ML service runs as an executable to deliver the ML solution.
>
> **[1:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=64)** The ML function and the model are embedded within the non-ML service as a function or a package.
>
> **[1:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=71)** The non-ML function makes in process calls to the ML part to get inference.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=77)** Clients talk to the non-ML service API to get the required services.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=82)** Containers are used to deploy the non-ML service in production environments.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=87)** This setup is popular when the model itself is small, and when the ML model is natively built by the same organization.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=96)** The third pattern is distributed ML deployment.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=99)** In this setup, the non-ML service runs as a separate executable in its own set of containers.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=106)** The ML service runs its own executable service in another set of containers.
>
> **[1:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=112)** The model file is usually stored externally in a data store like S3.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=117)** The ML service would load the model file dynamically and cache it in memory.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=123)** Clients access the ML service through the non-ML interfaces.
>
> **[2:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=127)** The non-ML service would then call the API on the ML service to execute ML capabilities.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=134)** This pattern is popular when model serving requires separate and significant resources, and also when the ML service is provided by third parties.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Prerequisites:** setup (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Deployment pipelines](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=0)** - [Instructor] How do we deploy an ML solution with its model ML and non ML components?
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=7)** Let's discuss the pipeline options in this video.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=10)** We will start with deploying embedded ML services.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=14)** As part of the model training, an approved model is delivered, which usually recides in a modern registry.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=21)** Code for the ML functions as well as the non ML functions for the solution sit in the code report.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=27)** The build process then integrates the model ML function and non ML functions into a single executable and packages it to a deployable format.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=38)** The package is then deployed to a test setup and tested for sanctity and regression.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=44)** After successful testing, it is deployed into production.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=48)** How does deploying distributed ML services work?
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=51)** As in the case of the embedded services, the model and the code sit in their respective stores.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=57)** However, each artifact is built and tested independently.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=62)** Each of them end up being an independently deployable package that is deployed and tested in their own test setups.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=70)** During testing, they will be tested against the corresponding versions of the other packages, which are expected to work together in production.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=79)** Deployment again is done independently.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=82)** One of the biggest considerations while deploying distributed ML services is compatibility between the multiple artifacts in the distributed setup.
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=92)** Services are deployed independently of each other so they may have to work with older versions of other services.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=100)** There are multiple ways to ensure compatibility.
>
> **[1:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=103)** The deployment of various packages can be sequenced in such a way that backward compatibility is insured in that sequence.
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=111)** For example, the model is deployed first and then the ML service.
>
> **[1:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=116)** The old ML service then should be able to work with a newer version of the model until it itself is upgraded.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=123)** Alternatively, all integrations can be done using specific versions.
>
> **[2:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=128)** Clients can access APIs using API versioning.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=131)** The newer version of the API service will still support the older version and its functionality so older clients will continue to work.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=141)** Similarly, models can be versioned and deployed concurrently where a specific ML service version can access a specific version of the model.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Prerequisites:** setup (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Deployment rollout strategies](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=0)** - [Instructor] Deployment rollout strategy for ML applications is the same set of strategies that are used for non-ML applications, also.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=10)** Let's begin to discuss this with a general guidance on rollout.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=14)** The rollout strategies we are going to discuss applies to each artifact, whether it is embedded ML or independent ML applications with different pieces being deployed separately.
>
> **[0:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=26)** In general, choose a strategy that best suits your application use case and resource constraints.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=33)** But ensure that compatibility requirements and issues are taken care in all situations.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=39)** The first strategy is the recreate strategy.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=43)** In this case, the existing versions of the services running in production are stopped and uninstalled.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=50)** Then, newer versions are installed and tested.
>
> **[0:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=53)** Then production resumes.
>
> **[0:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=56)** This is the older strategy, followed from the early days of software, and is simple to implement.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=62)** But this requires a service downtime, which may be acceptable in some use cases.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=68)** This strategy is suited for [[Batch Processing]] applications, where clients can be stopped from accessing the services for some time.
>
> **[1:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=76)** Next comes the rolling deployment strategy.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=79)** This is suited for N+1 deployments, where multiple instances of the service are run on independent nodes.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=86)** Here, each node is upgraded one at a time.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=90)** After upgrading each node, it is tested for stability.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=93)** If issues are found, the node is rolled back to the previous version.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=97)** The overall service stays online during deployment, as the other nodes share the load.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=104)** This is suitable for APIs and stateless [[Microservices]].
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=109)** The biggest concern of N+1 is ensuring backward compatibility with clients, as nodes with current and new versions are active at the same time.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=119)** Shadow deployments is another strategy that is useful when new version stability is a critical requirement.
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=126)** In this case, a separate instance, or cluster, is set up with the new version of the service.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=132)** This is called the shadow.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=134)** It is on a separate set of nodes, with the current ones not being disturbed.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=138)** The production traffic is duplicated and sent to both the old and the new cluster deployments.
>
> **[2:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=145)** The shadow is then validated for stability and performance, while the clients continue to be served by the original deployment.
>
> **[2:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=153)** On successful testing, the new cluster is switched to production using gateway switches, and the older version is retired.
>
> **[2:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=161)** During shadow deployment, double the resources are needed to run the shadow cluster, so there is a cost impact.
>
> **[2:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=169)** Canary deployments have become popular recently to test newer versions before they are fully rolled out.
>
> **[2:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=176)** In this case, a separate cluster, called the canary, is set up with the new version.
>
> **[3:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=181)** Part of the production traffic, say about 10%, is sent to the canary.
>
> **[3:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=186)** Canary is then validated for stability and performance.
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=190)** If there were issues in the canary, the new deployment is rolled back.
>
> **[3:15](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=195)** On successful validation, the new version is deployed to all other production nodes.
>
> **[3:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=200)** Additional resources are needed for canary during deployments.
>
> **[3:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=204)** Next comes blue/green deployments.
>
> **[3:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=207)** In this type of deployment, a new cluster is set up with its own node, with the new version of the service, similar to shadow deployments.
>
> **[3:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=216)** The gateway, or the load balancer, is used to switch traffic from the old to the new version.
>
> **[3:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=222)** The old version is still running, but receives no traffic.
>
> **[3:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=225)** If issues are found, the gateway is then switched back to the old version, else it is retired.
>
> **[3:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=231)** The advantage of blue/green deployments is the ability to quickly go back and forth between the two versions, but additional resources are needed to run the new service cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Batch Processing]] (1), [[Microservices]] (1)
> **CLI Commands:** node (4)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Planning for infrastructure](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=0)** - [Instructor] Infrastructure plays a vital part in delivering a stable and resilient serving for machine learning.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=8)** Let's explore various elements and best practices for infrastructure in this video.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=16)** There are two types of infrastructure elements that participate in serving: compute resources, and tools and technologies.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=25)** Having enough compute resources are essential for maintaining operational performance goals like latency and concurrency.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=34)** First, we need CPUs and GPUs to run the models with expected latency.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=40)** GPUs are important for ML and need to be managed efficiently.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=45)** Then comes memory to cache models and other data.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=48)** Accelerators are available today for improving the performance of the models.
>
> **[0:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=53)** Storage also becomes essential with the amount of data being captured and archived.
>
> **[1:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=60)** Networking should be fast and reliable.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=63)** Finally, [[Resiliency]] features like standbys and backups are also needed for all the infrastructure elements.
>
> **[1:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=71)** On the tools and technology side, we have operating systems.
>
> **[1:15](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=75)** Then there are application managers like [[Kubernetes]].
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=79)** Gateways are needed for security and load balancing.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=82)** Security capabilities are a must.
>
> **[1:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=85)** Monitoring tools help monitor performance and ensure service uptime.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=90)** Finally, operational analytics tools help analyze system and model performance and improve them over time.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=98)** All these infrastructure elements need to be accounted for while planning for an end-to-end ML serving system.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=106)** Capacity management plays a key part in provisioning the right amount of infrastructure such that operational goals are met at minimal costs.
>
> **[1:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=116)** The first step towards [[Capacity Planning]] is creating estimates for system and service loads.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=123)** Both average and peak loads need to be estimated based on expected traffic and resources provisioned accordingly.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=131)** The type of rollout strategy chosen will also impact the required capacity.
>
> **[2:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=136)** Autoscaling is a great technique to ensure optimal use of resources, especially when using [[Cloud Infrastructure]] like AWS and GCP.
>
> **[2:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=146)** Finally, there has to be mitigation strategies when overload is detected.
>
> **[2:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=151)** This can be building up a request queue or throttling request in real time.
>
> **[2:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=156)** Today, more and more deployments happen in third-party infrastructure like AWS, GCP, and [[Microsoft Azure|Azure]].
>
> **[2:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=164)** All of them have pay as you go systems.
>
> **[2:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=167)** ML services can quickly overrun costs if they are not properly planned and monitored.
>
> **[2:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=173)** Special attention should be given to GPUs and accelerators as they are expensive.
>
> **[2:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=179)** When planning for costs it is important to consider both average and peak loads.
>
> **[3:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=184)** It is recommended to monitor resource utilization over time and adjust the provisioned resources to minimize costs.
>
> **[3:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=193)** Turn off unwanted resources to save costs.
>
> **[3:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=196)** Cost effectiveness is a key determinant in whether an ML solution brings value to the organization.
>
> **[3:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=204)** Infrastructure management drives cost effectiveness and hence a critical area to plan and monitor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Resiliency]] (1), [[Kubernetes]] (1), [[Capacity Planning]] (1), [[Cloud Infrastructure]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** aws (2), gcp (2)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Deployment best practices](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=0)** - [Instructor] The deployment best practices.
>
> **[0:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=3)** Discussed in this video applied to both ML and non-ML services.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=9)** One of the key areas that is often ignored during deployments is observation and rollback.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=16)** Deployments will fail from time to time.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=19)** Unforeseen issues will arise that can put your production services in trouble.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=25)** This requires proper planning and execution of rollbacks to previous known good states.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=32)** It is recommended to create a comprehensive operations plan for deployments.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=37)** This plan should cover the rollback strategy in detail with specific steps to execute, there should be objective validation criteria and a test plan to review if the deployment is successful, that should also be a detailed rollback plan that covers the criteria to decide on rollback and the steps to execute to get the production to a stable state.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=62)** The plan is no good if it is not properly tested.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=65)** Testing the plan makes sure that any missing steps are added and unknown issues are taken care of.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=72)** Finally, implementation of the plan should be enforced as part of the overall operational process.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=79)** Similar to other phases of the [[MLOps]] cycle, automation plays a key role in scaling the deployments in an efficient manner.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=88)** It improves agility while reducing human effort.
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=92)** It is recommended to automate the deployment of models and services, either through a human trigger or through a workflow trigger.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=101)** Similarly, validation of deployed services and automation of rollbacks is also recommended.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=108)** This helps in quick reaction to deployment issues and restoring production back to its normal state.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=114)** Automation needs to be tested comprehensively to reduce failures and false positives as production can be impacted severely when automation goes wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1)
> **Best Practices:** recommended (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for deployment](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=0)** - [Instructor] The tools and technologies used for deploying non-ML services apply to ML services also.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=7)** Let's briefly look at the tools that are available today for deployment.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=12)** For managing applications that are deployed in a cluster, [[Kubernetes]] and OpenShift are the most popular ones.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=19)** For deployment of applications, there are a variety of tools available including Docker, Spinnaker, [[Argo CD]], and GitLab.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=28)** They have integrations with other services that make it easy to build automated pipelines.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=34)** For deployment automation, there are tools like [[Ansible]], [[Jenkins]], [[Terraform]], and Chef that are available.
>
> **[0:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=42)** This space is again evolving, and we will continue to see new capabilities and integrations in this space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (1), [[Argo CD]] (1), [[Ansible]] (1), [[Jenkins]] (1), [[Terraform]] (1)
> **CLI Commands:** docker (1), cd (1), make (1), ansible (1), terraform (1)
> **Tools:** gitlab (1)
> **Speakers:** - [instructor] (1)


### 2. Model Serving

[↑ Back to Table of Contents](#table-of-contents)

#### [Model serving patterns](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=0)** - [Instructor] We will discuss model serving considerations and best practices for ML Ops in this chapter.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=7)** Let's start with model serving patterns.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=10)** There are multiple ways to serve ML, depending upon the use case.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=14)** We will explore some popular patterns in this video.
>
> **[0:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=18)** We first start with the batch inference job pattern, which is a simple implementation.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=24)** In these cases, the features needed in production for inference are uploaded by clients into a production features database.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=32)** The pending data records, with features, would be collected over time.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=37)** A batch ML job would run periodically, say, every hour or every day.
>
> **[0:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=42)** This job will read the pending records from the database and perform predictions.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=46)** The predictions will be uploaded into a predictions database.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=51)** The pending records are then cleared from the features database.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=54)** Clients will then read the results later from the predictions database.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=58)** This is a simple implementation that is applicable for historical use cases only.
>
> **[1:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=64)** The next pattern is the inference API for [[Real-Time]] use.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=69)** The API can be a [[Representational State Transfer (REST)|REST]] API, served by a web server or an embedded function.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=74)** Clients call the API when inference is needed in real time.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=78)** The clients pass the input features, which the ML service would process, perform predictions, and return the results to the clients in real time.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=87)** This pattern is useful for delivering third party ML services as packages or in the cloud.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=94)** It's also useful in a [[Microservices]] architecture for real-time predictions.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=99)** Inference APA may suffer from load issues in real time, when they have to concurrently service multiple requests.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=106)** A third advanced pattern is the real-time stream processor.
>
> **[1:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=110)** In this case, the clients would push the prediction request, along with the input features, into a queue, like Kafka, in real time.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=119)** An ML stream processor will service these requests in real time.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=123)** It will read from the queue, perform predictions, and push the outputs into a predictions queue.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=129)** Clients can then watch the prediction queue in real time and pick up the results when available.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=134)** This system can manage real-time traffic, but can also handle load spikes by using the queues as a back-pressure buffer.
>
> **[2:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=142)** It can also scale well by creating parallel instances of the stream processors.
>
> **[2:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=148)** How do we select the right serving pattern?
>
> **[2:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=151)** Patterns should be selected based on the specific use case, whether it is batch or real time, and whether it is synchronous or asynchronous, and whether we want to optimize for average or peak loads.
>
> **[2:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=164)** Each of these patterns have specific advantages and drawbacks when it comes to latency, scaling and costs.
>
> **[2:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=171)** Choose a pattern that is simple to implement, while satisfying the performance and operational requirements of the ML solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (4), [[Representational State Transfer (REST)|Rest]] (1), [[Microservices]] (1)
> **Env Vars:** api (4), rest (1), apa (1)
> **Definitions:** is a  (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Scaling model serving](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=0)** - [Instructor] Scaling ML in a cost effective manner is a critical success factor for [[MLOps]].
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=7)** Let's discuss some scaling options for ML in this video.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=11)** Scaling for batch inference is different from scaling for real time inference.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=16)** The table here shows several considerations where batch and real time are different when it comes to scaling.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=24)** To begin with, the goal of batch inference is throughput, like the total number of predictions done in a given time period.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=33)** Real time inference, on the other hand, focuses on concurrency and latency.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=39)** The number of concurrent requests that can be processed by a given compute unit and the time the client waits to obtain the results are key measures.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=48)** When it comes to resource provisioning, average loads are used as the capacity benchmark for [[Batch Processing]], while peak loads are used for real time inference.
>
> **[1:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=60)** Auto scaling is used in real time to optimize resource allocation.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=65)** How does back pressure gets handled?
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=67)** In batch, as long as the processing velocity is greater than the incoming velocity in a given period, it is sufficient.
>
> **[1:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=76)** There can be spikes and delays, but as long as they catch up within an interval, it should be good.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=83)** For real time, it's more serious.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=86)** For synchronous API requests, throttling and timeouts may be used to drop requests during peak periods.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=94)** For asynchronous stream processors, queues may be used to handle back pressure.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=100)** Finally, for cost, the focus in batch inference is to keep them low.
>
> **[1:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=105)** While in real time, it is essential to meet the performance goals first before thinking about cost.
>
> **[1:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=112)** The options available for scaling ML services are similar to those for non-ML services, except for a few items.
>
> **[2:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=120)** Horizontal scaling of services can be done by deploying ML services in n plus one fashion.
>
> **[2:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=127)** For batch or stream processors, this can be the number of node for a given task.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=132)** For APIs, it could be the number of parts for a given service.
>
> **[2:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=136)** Vertical scaling in ML can be done by using GPUs or TPUs to increase capacity within a node.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=144)** Auto-scaling is a key feature to handle request spikes.
>
> **[2:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=148)** Result caching is another option to explore.
>
> **[2:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=151)** For the same set of input values, the model will produce the same output.
>
> **[2:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=156)** So if multiple instances of the same input set happens frequently, then caching these results can help avoid a request to the ML service altogether.
>
> **[2:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=167)** The promise of GPUs and TPUs for inference is a hard topic in ML labs.
>
> **[2:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=172)** But before using them for inference, it is important to understand their advantages and drawbacks.
>
> **[2:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=179)** GPUs are optimized for parallel math operations, they offer low computational latency and can be many times more powerful than CPUs, they provide parallel processing capabilities to handle multiple requests at a time, they are significantly more expensive than using CPUs.
>
> **[3:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=199)** Let's look at some of the best practices for GPUs.
>
> **[3:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=203)** Use them only when they are absolutely needed, it may be cheaper to use multiple CPUs to share the load than a single GPU, look for use cases where they are more cost effective than CPUs, batch multiple requests for performing inference as GPUs are optimized for that, it is recommended to do performance benchmarks between CPUs and GPUs for the use case to understand the cost benefit aspect and make deployment decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[Batch Processing]] (1)
> **CLI Commands:** node (2), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** api (1), gpu (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Building resiliency in serving](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=0)** - [Instructor] [[Resiliency]] of software is its ability to handle issues gracefully and continue to provide the services to the end user with minimal interruptions.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=11)** Resiliency is a critical yet overlooked part of model inference.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=16)** It is key to successful operation of ML services.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=20)** Without resiliency, these services would suffer from inconsistency, customer concerns, and loss of value.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=27)** Resiliency should be built at a model, service, and solution levels.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=33)** Let's begin with model resiliency.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=36)** Model resiliency is the ability of the model to overcome issues with input data or resources, and continue to maintain the expected performance and operational goals.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=48)** How do we ensure model resiliency?
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=51)** First, all input that is received during inference need to be validated to make sure that they comply with expected sanctity of data.
>
> **[1:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=60)** This includes checking for exceptions, unknown values, out of distribution values, et cetera.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=67)** Inference data should come from the same distribution as the training data, and any exceptions there should be flagged.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=74)** Next, track resource utilization by the model to identify capacity issues and rectify them.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=81)** Monitor the operational metrics of the model, and ensure that they are within expected thresholds.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=87)** Measure model drift and look for decay.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=90)** Finally, analyze the model performance for bias and take corrective actions.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=95)** We will discuss metrics, drift, and bias in the upcoming chapters.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=100)** Service resiliency deals with the ability of a service to continue its operations and deliver results when issues happen during its runtime.
>
> **[1:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=110)** To ensure resiliency against node failures, add redundant nodes for tasks and services.
>
> **[1:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=116)** This compensates for any lost capacity.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=119)** Implement auto scaling to handle sudden changes in service loads.
>
> **[2:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=124)** Alternatively, throttle incoming requests so that sudden bursts of requests do not choke the service.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=131)** For safeguarding against site level failures, create dual redundancy by deploying in multiple locations.
>
> **[2:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=139)** Storage disk can also have outages resulting in loss of data.
>
> **[2:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=143)** For this, used redundant storage schemes like RAID and sharding to handle disk outages.
>
> **[2:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=150)** Solution resiliency deals with the overall experience of the user with the ML solution.
>
> **[2:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=157)** [[User Experience (UX)|User experience]] should not be impacted when individual models or services experience issues.
>
> **[2:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=164)** When issues happen, it is important to analyze its impact on end user experience and take action.
>
> **[2:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=170)** Create multi-region deployments of the entire solution to overcome site level failures.
>
> **[2:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=177)** Load balance user requests across multiple other regions when there are service issues in one specific service.
>
> **[3:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=184)** Use circuit breakers in clients to overcome broken connection issues where the client would indefinitely wait for the server resource.
>
> **[3:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=192)** When specific services or models are down, provide alternate functionality to the users so they continue to function with degraded capabilities.
>
> **[3:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=201)** For example, if a realtime recommendation engine is down, the recommendations can be served based on an old recommendations cache.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Resiliency]] (10), [[User Experience (UX)|User experience]] (2)
> **CLI Commands:** make (1), node (1)
> **Env Vars:** raid (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Serving multiple models](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=0)** - [Instructor] Let's look at scenarios where multiple models are used in an ML solution.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=6)** An ML solution may use multiple related models to provide overall [[User Experience (UX)|user experience]].
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=13)** Solution design and deployment should consider this case and optimize across all models.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=20)** There are multiple ways in which models can be deployed together.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=24)** Let's review some of the popular configurations.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=28)** First is the chained models pattern.
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=30)** Here models are chained in sequence.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=33)** The output of one model becomes the input to the next model.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=37)** For example, let's consider a chatbot that is answering questions asked by the user.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=43)** After the user enters their query, the first model would try to understand the context or intent of the user.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=51)** This is then provided as input to the next model, which would extract information that is relevant to the context.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=58)** Finally, the information and context are provided to another model that will pull out the best answer to the question.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=66)** The next use case is single-input independent models.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=70)** In this case, models are independent of each other but will use the same input.
>
> **[1:15](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=75)** The input is provided to all models in parallel and they work concurrently to deliver the outputs.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=82)** For example, consider an online review analysis system.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=86)** The input here would be the user review.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=89)** This input is passed to three models in parallel, namely sentiment analysis, topic extraction, and obscenity detection.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=97)** The output from all these models are then collected together and stored.
>
> **[1:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=102)** The third option is that of alternate models.
>
> **[1:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=105)** In this case, the same input goes to all the models.
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=109)** But based on a condition, only one of the available models is chosen.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=114)** This is like an if/then/else structure.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=117)** For example, consider a language translation solution which can take input in any language and translate it to English.
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=126)** The first model will be a language detector.
>
> **[2:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=128)** Based on the output of the language detector, only the corresponding translator will be invoked.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=134)** So if the text is in French, only the French translator will be invoked.
>
> **[2:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=140)** What are some of the best practices for multiple model deployments?
>
> **[2:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=145)** It is important to test these models together as a solution.
>
> **[2:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=148)** Issues in one model may impact other models or overall deployment goals.
>
> **[2:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=154)** Parallelize models as much as possible in the deployment to reduce overall latency.
>
> **[2:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=160)** Even if the input to the model is the output of a previous model, validate that input to make sure it conforms to the requirements of the model.
>
> **[2:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=169)** You can exit these prediction chains early.
>
> **[2:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=172)** For example, if the intent detector cannot detect the intent with a given level of accuracy, we don't need to invoke the other downstream models.
>
> **[3:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=182)** Scale each model independently as each may have different resource profiles.
>
> **[3:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=188)** Always perform end-to-end latency measurements to ensure that the overall user experience is not impacted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for serving](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=0)** - [Instructor] Let's briefly look at some of the popular technologies available for model serving.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=6)** Cortex is a popular deployment and operations platform with a wide set of capabilities.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=12)** Then [[TensorFlow]] is also a popular platform that can be used to serve applications built on TensorFlow.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=19)** TorchServe similarly is a platform for [[PyTorch]].
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=23)** Kubeflow Serving is an open source platform that integrates with the [[Representational State Transfer (REST)|rest]] of the Kubeflow pipeline for [[MLOps]].
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=31)** Triton Inference Server from Nvidia is another popular commercial product for serving multiple types of models.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=39)** This space is rapidly evolving with more focus on automation and end-to-end integration with deployment and monitoring.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=47)** I strongly recommend doing your own research to find the best options when you get to deploy ML solutions in your production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (2), [[PyTorch]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[MLOps]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 3. Continuous Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [The monitoring pipeline](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=0)** - [Instructor] We will discuss monitoring aspects of [[MLOps]] in this chapter.
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=5)** We will begin with a discussion around various components of a monitoring pipeline.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=11)** Observability is a critical component of a [[DevOps]] system and that extends to MLOps too.
>
> **[0:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=18)** An end-to-end observability strategy across system, application, and model behavior is critical to MLOps.
>
> **[0:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=26)** Implementing effective monitoring and analytics is key to the successful operation of machine learning.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=34)** We will review a template monitoring pipeline and its components here.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=38)** This is a general architecture and the specifics of technologies used may vary based on the product choices for monitoring.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=47)** All services are typically installed on containers or [[Virtual Machines]].
>
> **[0:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=53)** The ML service would itself be deployed in a similar fashion with the model cached inside.
>
> **[1:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=60)** A monitoring agent would also run in each container.
>
> **[1:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=64)** This agent will collect telemetry data periodically and send it over to a telemetry queue.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=70)** Data like resource utilization, application [[Statistics]], logs, errors and audit trails may be collected.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=78)** The telemetry queue consolidates this data across multiple containers in a cluster.
>
> **[1:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=84)** A central monitoring hub then consumes and manages this data.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=88)** A data processor or a metrics computer would then read the telemetry data and compute various operational metrics at regular intervals.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=98)** They are then stored in a metrics database.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=101)** An analytics service would then provide reports and visualizations on this metrics data.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=107)** An alerting service can be used to send alerts when specific thresholds are exceeded in the computed metrics.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=114)** So far, the pipeline is the same whether this is an ML service or a non-ML service.
>
> **[2:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=121)** For the model, we will need to collect additional data about the inputs received by the model, the predictions generated and other data, like confidence levels.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=132)** This is locally stored in a persistent store and is periodically sent over to the monitoring hub.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=138)** Here, data is first cleaned to remove errors and anonymized for sensitive data.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=144)** This is then stored in a central production ML data database.
>
> **[2:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=149)** Additionally, if the true labels are also available, they are also tagged to the same data.
>
> **[2:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=154)** A ML metrics computer would then compute ML-specific metrics, like accuracy and out-of-distribution rates.
>
> **[2:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=163)** This data is appended to the metrics database.
>
> **[2:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=166)** Similarly, a drift and [[Responsible AI]] analyzer will run on the same data and update the findings in the same database.
>
> **[2:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=174)** The analytics and alerting services would then be used on ML-specific data also.
>
> **[3:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=180)** We will explore these services in detail in the [[Representational State Transfer (REST)|rest]] of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (3), [[DevOps]] (1), [[Virtual Machines]] (1), [[Statistics]] (1), [[Responsible AI]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Instrumentation for observability](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=0)** - [Instructor] Instrumentation is the first vital step to ensuring a good foundation for observability.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=7)** Instrumentation refers to adding capabilities to systems and applications to track and capture information that can be used to observe the behavior and performance.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=20)** Instrumentation deals with adding hooks into software that enables this tracking.
>
> **[0:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=26)** Let's begin with instrumentation at the system level.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=29)** What kind of data is captured here?
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=32)** We want to track CPU usage for the container and by individual executables.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=38)** Similarly, we want to track memory usage.
>
> **[0:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=41)** Disk I/O stats are essential to understand storage load.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=46)** Network traffic information helps understand the performance of the network.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=51)** Request/response [[Statistics]] are collected in API gateways to understand the incoming requests and their responses.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=59)** Error statistics at the system level will monitor any exceptions with resource access and handling.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=66)** To capture this information, we depend on infrastructure software.
>
> **[1:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=71)** Tooling at the operating system level helps understand compute resources.
>
> **[1:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=76)** Runtime platforms like Docker and [[Kubernetes]] also help track system performance.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=82)** API gateways help in tracking information about incoming requests and the responses returned.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=88)** Moving on to the application.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=90)** We try to capture information about activities that are specific to the application domain.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=96)** We want to capture inputs and outputs for a given service or function.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=101)** For batch or stream processors, we want to capture processing results.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=106)** Usage of other services, like third-party services are also tracked for accounting.
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=111)** Errors and exceptions encountered by the executable are also logged and tracked.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=117)** Debug trails help developers in troubleshooting.
>
> **[2:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=120)** Audit trails help in monitoring access to specific resources and data.
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=126)** In order to capture application-specific data, there are multiple tools available.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=131)** We can have custom application code to capture and log the information.
>
> **[2:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=136)** Programming languages support logging capabilities that can be leveraged.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=141)** Logging libraries make the job of logging easier.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=144)** Nowadays, transparent interceptors and aspect-oriented programming helps track information without explicit coding from developers.
>
> **[2:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=154)** We then get to instrumenting the model.
>
> **[2:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=156)** We want to capture raw input features and transformed features for the model in production.
>
> **[2:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=163)** Predictions generated by the model are also tracked along with the input.
>
> **[2:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=167)** Whenever possible, the true labels for the predictions are captured and tagged against the input data.
>
> **[2:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=174)** Operational metrics like model latency is also measured for each of the requests.
>
> **[3:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=180)** For model tracking, typically custom application code is used to log data into monitoring stores and queues.
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=187)** ML libraries today also support the capture of this information with minimal work from the developer.
>
> **[3:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=194)** For true labels, user input can be used to capture if the prediction was correct or not.
>
> **[3:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=201)** As seen in this video, there is an array of information that needs to be instrumented for.
>
> **[3:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=206)** We will discuss how this information is used in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Kubernetes]] (1)
> **Env Vars:** api (2), cpu (1)
> **CLI Commands:** docker (1), make (1)
> **Definitions:** refers to (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Metrics to monitor](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=0)** - [Instructor] What are the various types of metrics that are recommended to be monitored for [[MLOps]]?
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=6)** Let's review them in this video.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=9)** Let's begin by looking at the system and infrastructure metrics that need to be monitored.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=14)** This list is the same for both ML and non-ML services.
>
> **[0:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=18)** For CPU, we want to monitor utilization levels and usage trends.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=24)** For memory, key metrics to monitor are heap utilization and thread counts as increasing levels can lead to memory leaks and process crashes.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=33)** Garbage collection is also under the metric to keep watch.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=37)** For networking, we look at latency to make sure that it's within acceptable ranges.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=43)** Jitter and packet loss tells us if there are issues with communication, resulting in multiple retries.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=50)** Disks are also an important resource.
>
> **[0:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=52)** Disk activity and queuing for disk need to be monitored to make sure that it is not a blocking issue.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=59)** Next comes application metrics.
>
> **[1:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=61)** There are two types of metrics.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=63)** There are service metrics that are applied for all types of services, and business domain-specific metrics.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=70)** In service, we typically monitor latency and concurrent sessions to understand the load on the system.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=77)** Errors and failures indicate if the service is working correctly.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=81)** Max queue size is applicable when requests are being queued for processing.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=86)** Availability measures overall service availability across the cluster, even if individual nodes go down.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=94)** Average response size measures the network load when messages are exchanged between services.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=100)** Some domain-specific measures would be orders processed per hour for order processing system.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=107)** Click-through rate for web applications.
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=109)** Approval rate for credit application processing.
>
> **[1:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=113)** Thumbs-up percentage for recommendations.
>
> **[1:55](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=115)** And self-service rate for chatbots.
>
> **[1:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=118)** Then comes machine learning-specific metrics.
>
> **[2:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=122)** These metrics are constrained by the amount and type of data available, especially if true labels are available from production.
>
> **[2:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=130)** [[Performance Metrics]] for models include accuracy, F1-scores, type I and II errors, precision, recall, et cetera.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=138)** Computation of these metrics would depend upon the availability of both predicted and actual labels.
>
> **[2:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=145)** For model drift, the typical measurements are drift rate, out-of-distribution percentage and P-value.
>
> **[2:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=152)** We will discuss drift in detail in the next chapter.
>
> **[2:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=155)** There are also [[Responsible AI]]-related metrics, like fairness score and correlation.
>
> **[2:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=162)** Responsible AI is discussed in one of the future chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (2), [[MLOps]] (1), [[Performance Metrics]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** cpu (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [ML production data best practices](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=0)** - [Instructor] As models in production do inference, they also produce significant amounts of valuable data, usually referred to as ML production data.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=11)** We will discuss some best practices in capturing and managing this data in this video.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=17)** ML production data contains multiple aspects of inference, usually linked together by specific identifiers.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=25)** It contains both raw and transformed model inputs.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=29)** It contains the model outputs or predictions.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=32)** It also has [[Statistics]] about the inference, including latency, and any confidence or error measures.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=40)** True labels may be available in some cases.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=43)** Sometimes they are manually collected from users.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=46)** The production data set is valuable for monitoring the performance of the model, as well as serve as new training and testing data for model improvements.
>
> **[0:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=56)** However, this is significant data that needs to be captured and processed, and creates significant load on the serving setup.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=65)** Here are some recommendations for managing ML production data.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=69)** For capturing data, use asynchronous and non-blocking methods so that the main inference pipeline is not blocked in trying to capture, store and publish production data.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=82)** It's recommended to cache the data locally in disk, and then use store and forward to consolidate them in the monitoring hub.
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=91)** There are rarely any real time uses for ML production data, so [[Batch Processing]] is mostly sufficient.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=98)** [[Privacy]] of data is a significant risk, so it is recommended to use techniques like reduction and anonymization before the data is stored in the central hub.
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=109)** It is also recommended to use independent processors for different metrics following [[Microservices]] patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Batch Processing]] (1), [[Privacy]] (1), [[Microservices]] (1)
> **Best Practices:** recommended (3)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Alerts and thresholds for ML](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=0)** - [Instructor] In this video, we will focus on creating thresholds and alerts for ML-related monitoring.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=8)** A well-designed threshold and alerting system helps in efficient [[Continuous Monitoring]] of ML services by requesting the right amount of attention from the ML team at the right time.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=21)** Threshold and alerting systems in general should get quick attention for valid issues while eliminating false positives.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=31)** How are thresholds and alerts set up specifically for machine learning-related issues?
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=37)** They are usually based on model drift or model bias.
>
> **[0:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=41)** They are also set up for model operational performance degradation that is not explained by system or application issues.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=50)** In drift and bias, there is usually a slow decay in performance unless there are data-related issues.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=58)** We will discuss this in detail in the next chapter.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=62)** Fixing issues in ML usually means retraining, but it is an expensive process.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=68)** In general, it is recommended to not act too fast.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=72)** Rather, explore the causes for the issues before jumping into conclusions.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=77)** It is important to reproduce the symptoms in development or training setups and observe for courses for better understanding of the problem.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=87)** What are the best practices for setting thresholds in ML?
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=91)** Thresholds should be set based on specific metrics and their values.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=96)** For example, we can set a threshold when the model accuracy falls below 80% and then create an alert if the value actually goes below 80.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=107)** Care should be taken to not set thresholds too low, as there may be false alarms.
>
> **[1:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=113)** Similarly, if the thresholds are set too high, then it may be too late to prevent serious failures.
>
> **[2:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=120)** Identify the right threshold values for each metric by each model after careful exploration.
>
> **[2:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=127)** Experiment with exception scenarios and fine-tune thresholds.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=132)** It is also important to periodically review the values to ensure that they still hold good.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=138)** These best practices apply to system and application metrics also.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=144)** Once we have set thresholds, how do we trigger alerts when they are breached?
>
> **[2:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=148)** In general, it's important to answer a few questions to determine how alerts are set up.
>
> **[2:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=154)** First, we start with the reason why the alert should be sent.
>
> **[2:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=158)** There should be specific reasons when an action needs to be taken.
>
> **[2:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=162)** Then comes when the alert should be sent.
>
> **[2:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=165)** It can be based on a set of conditions based on thresholds, like a single threshold being breached, a series of breaches, or a count of breaches by specific time intervals.
>
> **[2:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=177)** Next comes the question of who should be notified.
>
> **[3:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=180)** This is a list of people who have the authority and responsibility to take action.
>
> **[3:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=186)** The media for alerting is also important, whether it's an email, text message, or a phone call.
>
> **[3:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=193)** Finally, all this information should be captured in a process or procedure document.
>
> **[3:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=199)** The document should clearly call out on who gets the alert and what action is expected to be taken.
>
> **[3:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=205)** A well-set-up thresholding and alerting system includes both automation of monitoring and alerting, as well as a process on how the alerts will be handled.
>
> **[3:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=215)** These best practices apply for system and application metrics also.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (1)
> **Prerequisites:** set up (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for monitoring](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=0)** - [Instructor] Let's briefly review the tools and technologies that can be used for monitoring ML solutions.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=7)** For system and application monitoring, a number of tools are available for instrumentation and collection of telemetry data.
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=15)** They include [[Kubernetes]], Prometheus, the ELK stack, Fluentd, and Grafana.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=21)** There are also other commercial providers like Datadog, New Relic, and Sensu who provide monitoring as a service.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=29)** For monitoring ML models, there are [[Microsoft Products|products]] for monitoring, like Seldon Core and Fiddler.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=36)** ML monitoring services are also available from Arize AI, Neptune, Evidently AI, and New Relic.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=45)** This is an immature and fast evolving space, so do your own due diligence in choosing the right services for your own use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** elk (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Drift Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to model drift](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=0)** - [Instructor] In this chapter, we will explore in detail about model drift and ways to monitor it.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=6)** Let's begin with an introduction to model drift.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=10)** When we train, test, and deploy a model, it has a proven level of predictive accuracy.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=17)** It is expected that the model will continue to have the same accuracy levels in production over its lifetime.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=24)** A model is considered drifting when its predictive accuracy reduces over time when deployed in production.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=32)** Let's consider a few examples here.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=34)** We have three models deployed in production at month zero.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=39)** The chart shows the observed prediction accuracy of models for the next four months.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=44)** Let us start with the first model, sentiment analysis which is the green lane.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=50)** It starts with an accuracy of 85%, and over the next four months, it oscillates between 85% and 90%.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=59)** It is staying within the band, and hence considered not drifting.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=63)** Next, let's look at the intent detection model shown in red.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=68)** It starts with an accuracy of 85%, but in the second month, its observed accuracy falls to 65% and then stays around there.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=78)** This is considered a sudden model drift.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=80)** Next, we look at the obscenity filter in blue.
>
> **[1:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=84)** This model starts at 90% accuracy, and its accuracy goes down slowly over time to 75%.
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=92)** This is called slow drift or slow decay over time.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=96)** When a model is deployed in production, all these types of drift can happen.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=101)** But if the models accuracy goes down for a given time period but comes back into the band for the next, it is not considered as a drift.
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=111)** To help with our discussions around drift, let's discuss some math on prediction probabilities.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=117)** Let us assume that we have a simple model that takes in features about a patient and predicts if the patient has diabetes.
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=126)** One of the features is the age of the patient.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=129)** x stands for a feature and y stands for the target.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=134)** So the [[Probability]] of x or p of x is the probability that a given feature value appears in the population.
>
> **[2:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=143)** So if 40% of the patients are older than 50, then the probability of age greater than 50 would be 40%.
>
> **[2:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=152)** Similarly, the probability of y or p of y is the probability that a given target value occurs in the population.
>
> **[2:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=161)** So if 10% of the patients have diabetes, then the probability of diabetes equal to true is 10%.
>
> **[2:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=169)** We then look at conditional probabilities.
>
> **[2:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=172)** The probability of x given y or p of x given y means how often a given value of x occurs when a given value of y occurs.
>
> **[3:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=184)** This means the percentage of time when age is greater than 50 when the patient has diabetes.
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=190)** The reverse conditional probability is p of y bar x.
>
> **[3:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=194)** This is the probability that the patient has diabetes when their age is greater than 15.
>
> **[3:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=201)** The joint probability of x and y is the percentage of time that both x and y values occur in the dataset.
>
> **[3:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=208)** In this example, it is the percentage of time that a patient has diabetes and also of age greater than 15.
>
> **[3:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=217)** The probability of y given x or p of y bar x is computed as the joint probability of x and y divided by the probability of x.
>
> **[3:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=228)** This is the formula that indicates the relationship between a specific value for a feature and a specific outcome for the target.
>
> **[3:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=237)** Drift happens when the probability of y given x changes in the real world, but the model does not reflect the same.
>
> **[4:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=245)** For example, let's say after the model is developed and deployed, a magical medication for diabetes is introduced.
>
> **[4:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=253)** Because of which, patients about the age 50 have recovered from diabetes.
>
> **[4:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=258)** The model will then not be in sync with the change and will continue to predict with the older assumptions.
>
> **[4:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=264)** Hence, it'll drift and decay.
>
> **[4:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=266)** We will explore drift further in the remaining videos in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (14)
> **Definitions:** stands for (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Concept drift basics](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=0)** - [Instructor] There are two types of drift that can happen in machine learning, namely concept drift and feature drift.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=7)** We will discuss concept drift in this video.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=11)** A machine learning model essentially captures the relationship between the features and the target, and uses this information to make predictions.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=20)** A concept drift occurs when the relationship between the features and the target changes over time.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=27)** As a result, the model is no longer able to predict accurately and needs to be retrained.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=34)** In the formula for conditional [[Probability]] of Y given X, when the joint probability of X and Y changes, concept drift occurs.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=43)** For example, let's say in the real world, the patient has diabetes 80% of the time when their age is greater than 50.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=51)** A model built on such data will also predict the same.
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=55)** Let's say for five months, the ground truth holds good and the model predicts with the same level of accuracy.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=62)** By the sixth month, a new medication for diabetes lowers A1C levels and changes the probability of being diabetic when the age is greater than 50 to just 50%.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=73)** The old model built on the old data will continue to predict that 80% of those above 50 as diabetic and hence turn inaccurate.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=83)** This is concept drift.
>
> **[1:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=85)** What causes concept drift in real scenarios.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=88)** There are multiple reasons.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=90)** There could be changes in the ecosystem that may trigger changes in the behavior of subjects.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=95)** For example, a new marketing campaign with deep discounts may increase conversion rates.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=101)** A new demographic may start buying more.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=104)** There could also be cyclic and seasonal variations that are not covered in the training data.
>
> **[1:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=110)** For example, during the school reopening season, the sale of school supplies will go up.
>
> **[1:55](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=115)** If a model predicting school supplies did not consider the seasonal variation, it will be inaccurate during the season.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=123)** Another reason is that the training data is not from the same population as production data.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=129)** This includes data distribution and frequency.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=132)** In such cases, drift may be noticed immediately after deployment.
>
> **[2:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=137)** How do we measure and handle concept drift?
>
> **[2:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=140)** We will discuss this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Env Vars:** a1c (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Managing concept drift](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=0)** - We will discuss the techniques and best practices for managing concept drift in this video.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=6)** How do we measure concept drift?
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=8)** It is actually pretty straightforward.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=10)** What inputs do we need?
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=12)** We only need the predicted labels and true labels in production.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=16)** For example, if we are predicting if a website user will eventually buy a product we need the prediction and if the user actually made the purchase later in that session or in a week we need to collect this information for many predictions over a period of time, say a week or a month.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=36)** Then we can compute the overall accuracy of the predictions and see how much it deviates from the baseline accuracy found during model training.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=46)** Based on these values, we can review and take action.
>
> **[0:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=49)** The biggest challenge in measuring concept drift is that true labels are not available all the time to verify if the prediction is accurate.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=58)** In such cases, we may have to collect explicit feedback either from the user or using labeling techniques on production data before computing drift.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=68)** What are some of the best practices for concept drift management?
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=73)** Drift should be computed for regular time intervals like a day, week, or a month.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=78)** Choose intervals where sufficient samples are expected to be available.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=83)** Two few samples would result in significant sampling errors.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=87)** Watch the drift trend over multiple time intervals.
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=91)** Drift may happen in one time interval but can quickly go back to normal.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=95)** It may also oscillate within a given band set up thresholds and min-max bands for automated monitoring of drift and triggering alerts, it is recommended to act only if the drift consistently stays out of the threshold bans.
>
> **[1:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=112)** It's important to analyze the root cost for drift by involving data scientists and domain experts.
>
> **[1:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=118)** Understanding the cost is essential in coming up with the corrective action.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=123)** For example, it may turn out that a key feature variable is missing in training.
>
> **[2:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=128)** Use new production data as training data in the next revision while incorporating all the learnings from the drift.

> [!info]- Semantic Content
>
> **Cross-References:** later in (1), go back to (1), coming up (1), in the next (1)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - we (1)

#### [Feature drift basics](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=0)** - [Narrator] Having discussed concept drift, let's now focus on the other type of drift called feature drift.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=7)** A feature drift occurs when the distribution of values or classes of features change over time.
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=13)** This indicates a change in the features that are different from those that were used during model training.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=20)** Looking at the conditional [[Probability]] formula, there is a change in the probability of X for feature drift.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=27)** One important question is whether the occurrence of a feature drift would mean that a concept drift is also happening.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=34)** There may be a concept drift, or there may not be.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=37)** A change in probability of X may be accompanied by an equivalent change in the joint probability of X and Y, leaving probability of Y given X unchanged.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=48)** Let's look at some examples of feature drift.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=51)** In the same example of predicting whether a patient is diabetic, let's look at the distribution of classes over a few months.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=59)** In the first three months, patients with age greater than 50 comprise about 40% of the population.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=66)** In months four and five, it drops to around 15%.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=70)** This is a change in the distribution of classes and is called feature drift.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=74)** During the same period, the percentage of patients under 20 did not change.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=79)** Let's look at another feature called patient weight, which is a continuous variable.
>
> **[1:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=84)** The box plot shows the distribution of weight values for two months.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=89)** Looking at the weights of patients in the first month, the values range from a little over 100 to close to 200.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=96)** In the second month, it ranges from 120 to 240.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=100)** As seen from the box plot, there is a significant change in the distribution of values.
>
> **[1:45](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=105)** This is, again, feature drift.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=107)** Just because the distribution changes, it does not mean that the predictions would also be impacted.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=114)** As long as the model predicts the same when age is greater than 50, data drift would not impact model accuracy.
>
> **[2:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=121)** But when it is not possible to measure concept drift because the true labels are not available, feature drift can be an indicator for potential concept drift.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=132)** So what causes feature drift?
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=134)** There could be a change in the population mix of entities.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=138)** Some demographics may be more active in the given time period.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=141)** Some [[Microsoft Products|products]] may be sold more than expected.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=144)** For example, during COVID, sales of hand sanitizers increased multifold.
>
> **[2:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=150)** There could also be changes in application logic in upstream data creators and processors that may change the distribution.
>
> **[2:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=158)** Some new classes or categories may be introduced, which the model may not be aware of.
>
> **[2:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=164)** There can be errors in data generation and processing that is introducing skewed or random values into the data stream.
>
> **[2:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=171)** Equipment errors, data pipeline errors, and missing data errors can all cost deviation in feature data.
>
> **[2:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=178)** We will discuss techniques for managing feature drift in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (5), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** covid (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Managing feature drift](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=0)** - [Instructor] Let's discuss the techniques and best practices for managing feature drift in this video.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=6)** Let's start with measuring feature drift.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=9)** The biggest use of feature drift comes in when we cannot measure concept drift due to non-availability of true labels.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=16)** Feature drift serves as a proxy indicator for potential concept drift.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=22)** It also helps to monitor feature sanctity and whether there are changes or errors happening in upstream data generators and processors.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=31)** To compute feature drift, we need datasets of features from both training and production.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=38)** These can end up being very large as most techniques for feature drift involve comparing two sample sets and [[Data Mining]] if they belong to the same population.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=48)** In terms of techniques, Kolmogorov-Smirnov or KS is a popular technique for measuring drift.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=54)** There are suites of techniques under maximum mean discrepancy test umbrella that can also be applied.
>
> **[1:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=61)** Alternatively, you can build a custom drift detector classifier that can predict if the feature data has drift.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=68)** Coming to the practices of feature drift management, the practices we discussed in the concept drift video also accrue to feature drift.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=77)** In addition, it's recommended to measure drift independently for each feature.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=82)** The drift number should be compared to the correlation values of that feature to determine its impact on the target.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=89)** When the correlation between a feature variable and a target is high, even small amounts of feature drift can cause concept drift.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=98)** When drift is noticed, examine changes to the [[Data Processing]] pipelines and application changes to identify possible causes.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=106)** Look for errors also in data processing.
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=109)** We can also use feature drift techniques to measure drift in the predicted labels.
>
> **[1:55](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=115)** Especially for multi-class classifiers, changes in predicted class distribution may also indicate possible issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (2), [[Data Mining]] (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 5. Responsible AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Elements of responsible AI](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=0)** - [Narrator] [[Responsible AI]] is an area that is gaining more importance around the world as concerns about the harmful effects of AI grow in our society.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=11)** While there is excitement about the disruptive potential of AI in improving our personal lives and business, there are also ethical concerns around bias, security, [[Privacy]], and transparency of these solutions.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=27)** Responsible AI, or RAI for short, is a set of principles, processes, and practices to ensure that ML models are accepted in our society as ethical, thereby [[Building Trust]] in its capabilities.
>
> **[0:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=42)** This trust is important for the wide acceptance of AI.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=47)** Ensuring conformance to responsible AI principles and practices is a key area for [[MLOps]].
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=54)** What are the key elements of responsible AI?
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=57)** To begin, ML models should be explainable.
>
> **[1:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=61)** This means it should be possible to explain why a model made a specific prediction by looking at the inputs to the model.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=69)** It helps to eliminate doubts about its sanctity.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=72)** Next, [[Accountability]] is needed for the predictions made by models.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=77)** Models may fail often, leading to undesirable consequences.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=81)** Human ownership of these results are required to ensure accountability.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=86)** Reproducibility of results is a key requirement for models.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=90)** This helps to troubleshoot why a model behaved in a specific way under specific circumstances, and hence, alleviate any issues found.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=99)** Models have the tendency to pick up patterns based on features like gender, age, race, et cetera, and use them to make predictions, even if these attributes do not exist explicitly in the training data.
>
> **[1:53](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=113)** Tracking and eliminating bias is another key requirement for RAI.
>
> **[1:58](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=118)** Human-centered AI focuses on keeping humans in the loop for model training and inference.
>
> **[2:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=125)** This allows humans to monitor and control model behavior and have kill switches when models go rogue.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=132)** ML solutions need to ensure security, whether it is physical security, service access, or data production.
>
> **[2:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=140)** They also need to be compliant to various standards, laws, and regulations to protect user privacy.
>
> **[2:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=147)** RAI is an expanding field and more elements are being added to the scope.
>
> **[2:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=153)** How do we implement responsible AI in an organization?
>
> **[2:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=157)** Commitment and resources are needed for successful RAI.
>
> **[2:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=161)** First, an RAI owner needs to be appointed, who is accountable for ensuring that models and [[Microsoft Products|products]] conform to RAI requirements.
>
> **[2:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=171)** Policies and procedures need to be created to lay out how the organization will adapt and enforce RAI.
>
> **[2:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=179)** These should be augmented with tools and automation for efficiency and scale.
>
> **[3:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=184)** All employees should be educated on these policies and processes, and a culture that fosters RAI should be built.
>
> **[3:12](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=192)** RAI implementation should be monitored for conformance, and any exceptions handled with priority.
>
> **[3:19](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=199)** The process should be audited periodically, and corrective action should be taken when needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (5), [[Privacy]] (2), [[Accountability]] (2), [[Building Trust]] (1), [[MLOps]] (1)
> **Env Vars:** rai (9)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** make (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### [Explainable AI](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=0)** - [Instructor] The ability to interpret why a model is predicting in a certain way is becoming more and more important as AI faces challenges from governments and society about its [[Ethics]].
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=14)** Explainable AI, or XAI for short, is a set of processes and tools that allows humans to understand model behavior by correlating the output to the input features that influenced it.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=28)** This is reverse engineering the behavior of a model to explain which features impacted a specific prediction.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=36)** Why do we need explainable AI?
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=38)** Models are becoming black boxes.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=40)** As we focus more and more on [[Deep Learning]] models, especially for NLP and vision applications, it's not possible to understand why a model is predicting in a certain manner.
>
> **[0:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=52)** As a result, questions arise about its accuracy and fairness, and whether it is performing like a human in these situations.
>
> **[1:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=60)** Lack of trust in society is impacting the growth of AI and limiting its applications.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=66)** On the other hand, we now have a growing set of loss regulations and standards for AI, and compliance to these will require the ability to explain model behavior.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=78)** Models can also decay over time as seen in the previous chapter, and we need explainable AI to help us understand how input changes are influencing the model.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=89)** Similarly, if there are data issues happening, they may also go unnoticed without knowing how they are influencing the outcomes.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=97)** Techniques for explainable AI is a novel and expanding field.
>
> **[1:42](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=102)** I will call out a few of these techniques here and encourage you to do further reading on these.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=108)** A simple technique is to do a manual analysis of inputs and outputs with sampling, but this is a painstaking exercise.
>
> **[1:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=116)** We can visualize the inputs and outputs in n dimensional plots to understand specific patterns.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=123)** Beyond this, new techniques like surrogate model explanation technique, or LIME, layer-wise relevance propagation, and Deep Tailor decomposition can be used to understand model behavior.
>
> **[2:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=136)** This is a constantly evolving domain, and we can see a lot more new techniques showing up in the near future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (1), [[Deep Learning]] (1)
> **Definitions:** is a  (4)
> **Env Vars:** xai (1), nlp (1), lime (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Fairness in ML](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=0)** - [Instructor] We will explore the area of fairness and bias in machine learning in this video.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=6)** Fairness in machine learning is the process of ensuring that the model provides all individuals with equal opportunity, and does not bias or generalize based on certain segments or attribute values.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=21)** ML models are notorious for picking up bias quickly if they are not trained with the right type of data.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=28)** What are the types of bias that we deal with in machine learning?
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=32)** The most common bias is data selection bias, where not all the real world scenarios are equally sampled.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=40)** For example, consider a diabetes prediction model that is built mostly using data from Europe and then using it for predicting diabetes in Asian populations.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=51)** The training data would be skewed to races that are prevalent in Europe.
>
> **[0:56](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=56)** Group attribution bias happens when behavior is generalized for the entire group based on a specific attribute.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=63)** For example, an interview candidate filtering algorithm may assume that all candidates who studied in a given university have the same level of skills.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=73)** Human bias happens with data scientists.
>
> **[1:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=76)** Here, they would make assumptions on how a model is expected to behave, and then conclude that the model is incorrect if it behaves otherwise.
>
> **[1:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=85)** Benchmarking bias happens when the benchmark model does not represent the same population as the actual model.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=93)** For example, using a sentiment analysis model built on movie reviews as a benchmark for validating a sentiment analysis model for a chat bot.
>
> **[1:43](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=103)** Both are text based models, but the context and user behavior would be different.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=108)** What are some of the best practices to avoid bias?
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=111)** The most important one is in training data selection.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=114)** Care should be taken to make sure that the training data represents all real world use cases equally.
>
> **[2:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=120)** Quality of data is more important than quantity.
>
> **[2:04](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=124)** Then comes input [[Data Validation]] for training and inference to make sure that there are no exceptions and skews.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=131)** When evaluating model performance, it is important to look at performance by individual target classes.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=138)** For example, in a diabetes prediction data set, only 10% of the records have age less than 20.
>
> **[2:25](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=145)** The overall model accuracy may be 85%, but the accuracy for records with age less than 20, maybe just 50%.
>
> **[2:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=154)** All classes should ideally have equivalent performance.
>
> **[2:38](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=158)** Similarly, model drift analysis should also be done by individual classes to make sure that a specific target class is not drifting, even when overall drift is within thresholds.
>
> **[2:50](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=170)** It is important to have human review and feedback from time to time, possibly using crowdsourcing techniques to see if the model is biased in a specific manner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Validation]] (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (4)
> **Speakers:** - [instructor] (1)

#### [Security of ML assets](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=0)** - [Instructor] An important area in [[MLOps]] around [[Responsible AI]] is the security of ML assets like data and models.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=9)** Machine learning solutions also have threats of adversarial attacks that compromise the model as well as data used for training and inference.
>
> **[0:18](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=18)** This is in addition to the other security threats that any other software application would face.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=24)** Let's discuss the types of ML specific threats that such solutions face.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=29)** There are two main assets for ML, data and model.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=33)** When it comes to data, sharing across trust boundaries carries the risk of intrusion during transport, hackers can poison training data by introducing negative samples that influence model behavior, there is also the threat of data theft and break-ins which is becoming widespread these days, there is the risk of hackers reverse engineering redacted or deleted data to uncover private information.
>
> **[1:01](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=61)** On the model side, there is a high risk of the model being stolen if it is not properly protected, hackers can manipulate the inputs to the model and influence the ML solution to behave in undesired ways, known model attacks happen when using open source models when the hacker knows the model and hence can influence its behavior by providing specific inputs, IP infringement is another area of concern where the models architecture can be copied by competitors, hackers can also reverse engineer the models architecture and parameters by looking at the relation between the inputs and the outputs.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=104)** How do we protect the model and data from adversarial attacks?
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=108)** There should be physical security to where these assets are stored, there should be [[Network Security]] that prevents unauthorized users from accessing the assets; it is recommended to encrypt models and data when they are deployed on edge devices like mobile phones and routers; during training, it's recommended to sanitize data to remove individual negative samples; a number of new techniques like RONI, TRIM , and KNHT are coming up in this space; when using AutoML, perform validations on new training data to ensure that they are not compromised; block model poisoning with training data by using gradient-shaping techniques; use model restoration techniques to remove back doors to information leakage.
>
> **[2:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=156)** Some of these techniques may be new to you and I highly recommend further reading on these topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[Responsible AI]] (1), [[Network Security]] (1)
> **Env Vars:** roni (1), trim (1), knht (1)
> **Best Practices:** recommended (2)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Privacy in machine learning](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=0)** - [Instructor] Similar to security, [[Privacy]] is another important consideration in machine learning.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=6)** Sensitive information should be protected against accidental or adversary leakage when used for training or inference.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=14)** While security deals with protecting the entire data set or model, privacy focuses on protecting the sensitive parts while still providing access to the other parts for authorized users, like data scientists and analysts.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=29)** Why do we need privacy protections?
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=32)** As the applications of AI are growing, so is the concern around its ability to infringe upon the rights and privacy of individuals.
>
> **[0:41](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=41)** The first concern for building ML solutions is to gain customer and user trust.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=47)** Users are worried about the misuse of their private data, and hence are unwilling to share this information for model training.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=54)** There is concern around who gets to see their private data and if those individuals may steal and use it for unethical purposes.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=63)** There is a growing compliance framework across the world for AI.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=67)** More and more laws, regulations and standards are created like GDPR, and HIPAA.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=73)** Each country is coming up with their own laws for AI, and business verticals like healthcare and [[Banking]] are also doing the same.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=80)** Compliance to these is a requirement in order to sell ML [[Microsoft Products|products]] to these countries and verticals.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=87)** What are the various techniques available for [[Privacy Protection]]?
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=91)** It begins with having access controls, specifically at an attribute level.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=96)** Anonymization of data is another technique where real values are replaced with mapped ones so that the patterns are retained by not exposing real information.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=107)** Data aggregation is another technique to hide individual information.
>
> **[1:52](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=112)** [[Threat Modeling]] and leakage analysis helps identify gaps in privacy implementation and fix them.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=119)** Federated learning and inference is another area that takes the model to where the data is.
>
> **[2:05](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=125)** The model can do its job with the data staying in its own trust zone.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=129)** Differential privacy is an area that is becoming popular too.
>
> **[2:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=133)** It focuses on manipulating outputs from data, such that data leakage and reverse engineering are not possible.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=141)** Finally, education for all stakeholders is an understated but very important requirement to ensure that everyone understands the risk around privacy and ensures its protection in their work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (7), [[Banking]] (1), [[Microsoft Products|Products]] (1), [[Privacy Protection]] (1), [[Threat Modeling]] (1)
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** gdpr (1), hipaa (1)
> **Cross-References:** coming up (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with MLOps](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=0)** - [Kumaran] Now that you have learned about the concepts of [[MLOps]] for deployment and monitoring, you can take your learning even further.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=8)** Explore specific tools and technologies discussed in this course.
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=13)** Get a copy or free license and experiment with them.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=16)** Implement the MLOps pipeline in your organization using the learnings from this course.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=22)** Machine learning always intrigues me.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=24)** I bet it intrigues you too.
>
> **[0:26](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=26)** So let's keep exploring it and find better ways of extracting benefits out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (2)
> **CLI Commands:** find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- System Deployment
- MLOps
- Artificial Intelligence (AI)

## Path Context

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[MLOps Essentials- Model Development and Integration]] | **8 of 10** | [[MLOps Essentials- Monitoring Model Drift and Bias]] →

### In [[Advance Your Skills in AI and Machine Learning]]
← [[MLOps Essentials- Model Development and Integration]] | **11 of 16** | [[MLOps Essentials- Monitoring Model Drift and Bias]] →

## Appears In

- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[MLOps Essentials- Model Development and Integration]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[MLOps Tools- MLflow and Hugging Face]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)