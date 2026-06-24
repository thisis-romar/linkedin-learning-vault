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
  - '[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/MLOps%20Essentials%20for%20Developers%20and%20AI%20Engineers-%20Tools%2C%20Pipelines%2C%20Security.md)'
  - '[Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)'
prev_courses:
  - '[MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md)'
  - '[MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md)'
next_courses:
  - '[MLOps Essentials- Monitoring Model Drift and Bias](MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md)'
  - '[MLOps Essentials- Monitoring Model Drift and Bias](MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md)'
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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/getting-started-with-mlops?u=76281980&t=0)** - [Kumaran] More and more machine learning models are being deployed today, serving a variety of use cases for business and personal outcomes. The focus on ML management has given rise to the world of machine learning operations, or [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md). My name is Kumaran Ponnambalam. In this course, I will introduce you to the essentials of MLOps for model deployment and monitoring. I will start off with options and best practices for model deployment. Then, I will cover various model serving patterns and considerations. Next, I will focus on monitoring ML models in production and the metrics that are important. I will discuss the basics of model drift and how to monitor them. Finally, I will briefly touch upon [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) and how it integrates into the MLOps framework. Students are expected to be familiar with general model building and deployment concepts, and are recommended to have prior experience in implementing machine learning. It is highly recommended to take the prerequisite course, [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md), before starting this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (4), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [kumaran] (1)

#### [Course coverage](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=0)** - [Instructor] What parts of the machine learning world are we covering in this course? Let's take a look at the activities in the machine learning ecosystem. In general, we can divide these activities into build activities and run activities. Build activities focus on creating and testing the model. Run activities focus on deploying, executing and monitoring the model. There are core machine learning activities in each of them. [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md), model training, testing and packaging are some core ML activities on the build side. Model deployment and inference are the core activities on the run side. Knowledge and experience in core ML activities is a prerequisite for this course. Then, surrounding these core activities is [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md), which again, can be split into build and run. On the build side of MLOps, we have various activities like requirements management, data and training pipelines, [Data Governance](../../Skills/Data%20Science/Data%20Governance.md), experiment tracking and integrations. On the run side of MLOps, we have infrastructure management, deployment, serving, monitoring, and [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md). For this course, we will only focus on the run side of MLOps. We will focus on build-side activities of MLOps in another course, [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md). For each activity in MLOps run, we will discuss the purpose and context
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=94)** for the activity. We will discuss techniques, methods, and approaches used. We will then touch upon the tools available for performing this activity, and also some of the best practices. Each of these activities have enough depth to warrant their own courses. We will be discussing only an overview of the activity and how they will fit in into the overall MLOps context. For a deep dive into these specific activities, I recommend further reading. What are the prerequisites for this course? This course provides a high-level overview of MLOps and does not need deep, technical hands-on experience. But it is recommended to have prior understanding of machine learning applications. Knowledge of core ML activities and prior experience in building and running machine learning models is desired. This experience can be either in doing or managing machine learning. This course is suitable for multiple roles, including data scientists, ML engineers, managers, and product owners working in the AI domain. Finally, the course [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md) is a prerequisite for this course. That course covers the overview on MLOps, and also the development-side activities, which lead into the topics in this course. Finally, a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) about various tools and technologies discussed in this course. The MLOps tools world is a rapidly evolving ecosystem. This can change significantly in a short period of time.
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/course-coverage?u=76281980&t=190)** So, it's recommended to evaluate the ecosystem periodically, especially when you get into actual implementation. So, we are recommending tools based on the status at the time of this recording, but it can change rapidly. Also, there are MLOps tools from the three big platforms, AWS, GCP and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). We are not going to discuss them specifically in this course, but do check them out if you are already on any of these platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (13), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (3)
> **Env Vars:** aws (1), gcp (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** prerequisite (2)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Review of MLOps lifecycle](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=0)** - Let's quickly review the [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) lifecycle before jumping into the deployment and operations aspect of it. MLOps is a set of practices that help manage the creation and use of ML artifacts through efficient workflows, collaboration, and tracking. MLOps is not a specific product or technique. It is a set of processes and best practices to build and run ML supported by automation and tools. What are the goals of MLOps? MLOps extends the [DevOps](../../Topics/DevOps.md) methodology to building and serving machine learning solutions. It integrates the activities of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) and model development into the software engineering and deployment life cycle. In addition to the software engineering artifacts of code and records, it manages the machine learning artifacts, data, and models. It enables continuous model development and integration thus following an [agile](../../Skills/DevOps/Agile%20Development.md) process to reduce time to market. MLOps deals with model deployment and serving. It also includes monitoring, performance analytics, and gathering feedback for further improvements. It helps manage the ML processes through automation and tools to improve efficiency. What does the MLOps life cycle look like? It looks very similar to the DevOps lifecycle. There are three groups of activities here. The software engineering and operations groups are borrowed from DevOps.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=94)** Additionally, there is the machine learning group also. Let's look at the various activities and how they integrate together. The process starts with defining the requirements for the ML project and a corresponding design. The design would include both non-ML parts like APIs, services, [Databases](../../Skills/Software%20Development/Databases.md), UIs, et cetera, and ML pipelines like data engineering pipelines. This is then used to develop the non-ML parts of the overall solution. The requirements would also then feed into the data engineering for converting raw data into useful features for ML. Then there is a continuous training cycle where a model is built and refined until it meets the stated requirements. Models that are built or managed under a model governance framework. As models are built, they're also integrated continuously with the non-ML code. Continuous here would be specific small intervals like each sprint or each week. And passing integration, the model and non-ML code are packaged together and delivered. Now the operations process kicks in. Continuous deployment takes care of deploying the upward packages to production. This is then served to users. The performance of the model is monitored to ensure that it stays within the expected thresholds. Model performance information, as well as the model drift and bias information is fed back into model governance for tracking and evaluation.
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/review-of-mlops-lifecycle?u=76281980&t=187)** Input is also provided into requirements to see if changes or improvements are needed on the ML or non-ML functions. Finally, feature and label data from production is captured and fed into the data engineering pipeline to create new data sets. If model governance determines that the model needs to be retrained, then it kicks off another training cycle with new data. Having seen its life cycle, let's now jump into model deployment and operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (7), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (4), [DevOps](../../Topics/DevOps.md) (3), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Speakers:** - let (1)


### 1. Continuous Delivery

[↑ Back to Table of Contents](#table-of-contents)

#### [An ML production setup](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=0)** - [Instructor] Let's begin this chapter about ML deployment by looking at the different options for deploying ML solutions in production. We first start with the most simple deployment, a notebook. This is technically not a production deployment, but a use case where the notebook is executed for inference manually. A tested and approved notebook serves as the production executable. The notebook would still run on a user desktop or a laptop. The user would open the notebook when needed, and execute the notebook. Required parameters for the execution will be provided manually. The notebook will load the model, and also the inference input data. The predictions from the model are then printed to the console. The predictions may also be persisted to a data store for future reference. The next pattern is embedded model deployment. In this case, the non-ML service runs as an executable to deliver the ML solution. The ML function and the model are embedded within the non-ML service as a function or a package. The non-ML function makes in process calls to the ML part to get inference. Clients talk to the non-ML service API to get the required services. Containers are used to deploy the non-ML service in production environments. This setup is popular when the model itself is small, and when the ML model is natively built
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/an-ml-production-setup?u=76281980&t=94)** by the same organization. The third pattern is distributed ML deployment. In this setup, the non-ML service runs as a separate executable in its own set of containers. The ML service runs its own executable service in another set of containers. The model file is usually stored externally in a data store like S3. The ML service would load the model file dynamically and cache it in memory. Clients access the ML service through the non-ML interfaces. The non-ML service would then call the API on the ML service to execute ML capabilities. This pattern is popular when model serving requires separate and significant resources, and also when the ML service is provided by third parties.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Prerequisites:** setup (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Deployment pipelines](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=0)** - [Instructor] How do we deploy an ML solution with its model ML and non ML components? Let's discuss the pipeline options in this video. We will start with deploying embedded ML services. As part of the model training, an approved model is delivered, which usually recides in a modern registry. Code for the ML functions as well as the non ML functions for the solution sit in the code report. The build process then integrates the model ML function and non ML functions into a single executable and packages it to a deployable format. The package is then deployed to a test setup and tested for sanctity and regression. After successful testing, it is deployed into production. How does deploying distributed ML services work? As in the case of the embedded services, the model and the code sit in their respective stores. However, each artifact is built and tested independently. Each of them end up being an independently deployable package that is deployed and tested in their own test setups. During testing, they will be tested against the corresponding versions of the other packages, which are expected to work together in production. Deployment again is done independently. One of the biggest considerations while deploying distributed ML services is compatibility between the multiple artifacts in the distributed setup. Services are deployed independently of each other
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-pipelines?u=76281980&t=95)** so they may have to work with older versions of other services. There are multiple ways to ensure compatibility. The deployment of various packages can be sequenced in such a way that backward compatibility is insured in that sequence. For example, the model is deployed first and then the ML service. The old ML service then should be able to work with a newer version of the model until it itself is upgraded. Alternatively, all integrations can be done using specific versions. Clients can access APIs using API versioning. The newer version of the API service will still support the older version and its functionality so older clients will continue to work. Similarly, models can be versioned and deployed concurrently where a specific ML service version can access a specific version of the model.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Prerequisites:** setup (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Deployment rollout strategies](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=0)** - [Instructor] Deployment rollout strategy for ML applications is the same set of strategies that are used for non-ML applications, also. Let's begin to discuss this with a general guidance on rollout. The rollout strategies we are going to discuss applies to each artifact, whether it is embedded ML or independent ML applications with different pieces being deployed separately. In general, choose a strategy that best suits your application use case and resource constraints. But ensure that compatibility requirements and issues are taken care in all situations. The first strategy is the recreate strategy. In this case, the existing versions of the services running in production are stopped and uninstalled. Then, newer versions are installed and tested. Then production resumes. This is the older strategy, followed from the early days of software, and is simple to implement. But this requires a service downtime, which may be acceptable in some use cases. This strategy is suited for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) applications, where clients can be stopped from accessing the services for some time. Next comes the rolling deployment strategy. This is suited for N+1 deployments, where multiple instances of the service are run on independent nodes. Here, each node is upgraded one at a time. After upgrading each node, it is tested for stability.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=93)** If issues are found, the node is rolled back to the previous version. The overall service stays online during deployment, as the other nodes share the load. This is suitable for APIs and stateless [Microservices](../../Skills/Software%20Development/Microservices.md). The biggest concern of N+1 is ensuring backward compatibility with clients, as nodes with current and new versions are active at the same time. Shadow deployments is another strategy that is useful when new version stability is a critical requirement. In this case, a separate instance, or cluster, is set up with the new version of the service. This is called the shadow. It is on a separate set of nodes, with the current ones not being disturbed. The production traffic is duplicated and sent to both the old and the new cluster deployments. The shadow is then validated for stability and performance, while the clients continue to be served by the original deployment. On successful testing, the new cluster is switched to production using gateway switches, and the older version is retired. During shadow deployment, double the resources are needed to run the shadow cluster, so there is a cost impact. Canary deployments have become popular recently to test newer versions before they are fully rolled out. In this case, a separate cluster, called the canary, is set up with the new version. Part of the production traffic, say about 10%, is sent to the canary.
>
> **[3:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-rollout-strategies?u=76281980&t=186)** Canary is then validated for stability and performance. If there were issues in the canary, the new deployment is rolled back. On successful validation, the new version is deployed to all other production nodes. Additional resources are needed for canary during deployments. Next comes blue/green deployments. In this type of deployment, a new cluster is set up with its own node, with the new version of the service, similar to shadow deployments. The gateway, or the load balancer, is used to switch traffic from the old to the new version. The old version is still running, but receives no traffic. If issues are found, the gateway is then switched back to the old version, else it is retired. The advantage of blue/green deployments is the ability to quickly go back and forth between the two versions, but additional resources are needed to run the new service cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **CLI Commands:** node (4)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Planning for infrastructure](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=0)** - [Instructor] Infrastructure plays a vital part in delivering a stable and resilient serving for machine learning. Let's explore various elements and best practices for infrastructure in this video. There are two types of infrastructure elements that participate in serving: compute resources, and tools and technologies. Having enough compute resources are essential for maintaining operational performance goals like latency and concurrency. First, we need CPUs and GPUs to run the models with expected latency. GPUs are important for ML and need to be managed efficiently. Then comes memory to cache models and other data. Accelerators are available today for improving the performance of the models. Storage also becomes essential with the amount of data being captured and archived. Networking should be fast and reliable. Finally, [Resiliency](../../Skills/Software%20Development/Resiliency.md) features like standbys and backups are also needed for all the infrastructure elements. On the tools and technology side, we have operating systems. Then there are application managers like [Kubernetes](../../Skills/DevOps/Kubernetes.md). Gateways are needed for security and load balancing. Security capabilities are a must. Monitoring tools help monitor performance and ensure service uptime. Finally, operational analytics tools help analyze system and model performance
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=95)** and improve them over time. All these infrastructure elements need to be accounted for while planning for an end-to-end ML serving system. Capacity management plays a key part in provisioning the right amount of infrastructure such that operational goals are met at minimal costs. The first step towards [Capacity Planning](../../Skills/Network%20and%20System%20Administration/Capacity%20Planning.md) is creating estimates for system and service loads. Both average and peak loads need to be estimated based on expected traffic and resources provisioned accordingly. The type of rollout strategy chosen will also impact the required capacity. Autoscaling is a great technique to ensure optimal use of resources, especially when using [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) like AWS and GCP. Finally, there has to be mitigation strategies when overload is detected. This can be building up a request queue or throttling request in real time. Today, more and more deployments happen in third-party infrastructure like AWS, GCP, and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). All of them have pay as you go systems. ML services can quickly overrun costs if they are not properly planned and monitored. Special attention should be given to GPUs and accelerators as they are expensive. When planning for costs it is important to consider both average and peak loads. It is recommended to monitor resource utilization over time and adjust the provisioned resources to minimize costs.
>
> **[3:13](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/planning-for-infrastructure?u=76281980&t=193)** Turn off unwanted resources to save costs. Cost effectiveness is a key determinant in whether an ML solution brings value to the organization. Infrastructure management drives cost effectiveness and hence a critical area to plan and monitor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Capacity Planning](../../Skills/Network%20and%20System%20Administration/Capacity%20Planning.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** aws (2), gcp (2)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Deployment best practices](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=0)** - [Instructor] The deployment best practices. Discussed in this video applied to both ML and non-ML services. One of the key areas that is often ignored during deployments is observation and rollback. Deployments will fail from time to time. Unforeseen issues will arise that can put your production services in trouble. This requires proper planning and execution of rollbacks to previous known good states. It is recommended to create a comprehensive operations plan for deployments. This plan should cover the rollback strategy in detail with specific steps to execute, there should be objective validation criteria and a test plan to review if the deployment is successful, that should also be a detailed rollback plan that covers the criteria to decide on rollback and the steps to execute to get the production to a stable state. The plan is no good if it is not properly tested. Testing the plan makes sure that any missing steps are added and unknown issues are taken care of. Finally, implementation of the plan should be enforced as part of the overall operational process. Similar to other phases of the [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) cycle, automation plays a key role in scaling the deployments in an efficient manner. It improves agility while reducing human effort. It is recommended to automate
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/deployment-best-practices?u=76281980&t=94)** the deployment of models and services, either through a human trigger or through a workflow trigger. Similarly, validation of deployed services and automation of rollbacks is also recommended. This helps in quick reaction to deployment issues and restoring production back to its normal state. Automation needs to be tested comprehensively to reduce failures and false positives as production can be impacted severely when automation goes wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1)
> **Best Practices:** recommended (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for deployment](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-deployment?u=76281980&t=0)** - [Instructor] The tools and technologies used for deploying non-ML services apply to ML services also. Let's briefly look at the tools that are available today for deployment. For managing applications that are deployed in a cluster, [Kubernetes](../../Skills/DevOps/Kubernetes.md) and OpenShift are the most popular ones. For deployment of applications, there are a variety of tools available including Docker, Spinnaker, [Argo CD](../../Glossary/Tool/Argo%20CD.md), and GitLab. They have integrations with other services that make it easy to build automated pipelines. For deployment automation, there are tools like [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), [Jenkins](../../Skills/DevOps/Jenkins.md), [Terraform](../../Skills/DevOps/Terraform.md), and Chef that are available. This space is again evolving, and we will continue to see new capabilities and integrations in this space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Argo CD](../../Glossary/Tool/Argo%20CD.md) (1), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (1), [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [Terraform](../../Skills/DevOps/Terraform.md) (1)
> **CLI Commands:** docker (1), cd (1), make (1), ansible (1), terraform (1)
> **Tools:** gitlab (1)
> **Speakers:** - [instructor] (1)


### 2. Model Serving

[↑ Back to Table of Contents](#table-of-contents)

#### [Model serving patterns](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=0)** - [Instructor] We will discuss model serving considerations and best practices for ML Ops in this chapter. Let's start with model serving patterns. There are multiple ways to serve ML, depending upon the use case. We will explore some popular patterns in this video. We first start with the batch inference job pattern, which is a simple implementation. In these cases, the features needed in production for inference are uploaded by clients into a production features database. The pending data records, with features, would be collected over time. A batch ML job would run periodically, say, every hour or every day. This job will read the pending records from the database and perform predictions. The predictions will be uploaded into a predictions database. The pending records are then cleared from the features database. Clients will then read the results later from the predictions database. This is a simple implementation that is applicable for historical use cases only. The next pattern is the inference API for [Real-Time](../../Skills/Database%20Management/Real-Time.md) use. The API can be a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, served by a web server or an embedded function. Clients call the API when inference is needed in real time. The clients pass the input features, which the ML service would process, perform predictions, and return the results to the clients in real time. This pattern is useful for delivering third party ML services as packages or in the cloud.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/model-serving-patterns?u=76281980&t=94)** It's also useful in a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture for real-time predictions. Inference APA may suffer from load issues in real time, when they have to concurrently service multiple requests. A third advanced pattern is the real-time stream processor. In this case, the clients would push the prediction request, along with the input features, into a queue, like Kafka, in real time. An ML stream processor will service these requests in real time. It will read from the queue, perform predictions, and push the outputs into a predictions queue. Clients can then watch the prediction queue in real time and pick up the results when available. This system can manage real-time traffic, but can also handle load spikes by using the queues as a back-pressure buffer. It can also scale well by creating parallel instances of the stream processors. How do we select the right serving pattern? Patterns should be selected based on the specific use case, whether it is batch or real time, and whether it is synchronous or asynchronous, and whether we want to optimize for average or peak loads. Each of these patterns have specific advantages and drawbacks when it comes to latency, scaling and costs. Choose a pattern that is simple to implement, while satisfying the performance and operational requirements of the ML solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Env Vars:** api (4), rest (1), apa (1)
> **Definitions:** is a  (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Scaling model serving](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=0)** - [Instructor] Scaling ML in a cost effective manner is a critical success factor for [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md). Let's discuss some scaling options for ML in this video. Scaling for batch inference is different from scaling for real time inference. The table here shows several considerations where batch and real time are different when it comes to scaling. To begin with, the goal of batch inference is throughput, like the total number of predictions done in a given time period. Real time inference, on the other hand, focuses on concurrency and latency. The number of concurrent requests that can be processed by a given compute unit and the time the client waits to obtain the results are key measures. When it comes to resource provisioning, average loads are used as the capacity benchmark for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md), while peak loads are used for real time inference. Auto scaling is used in real time to optimize resource allocation. How does back pressure gets handled? In batch, as long as the processing velocity is greater than the incoming velocity in a given period, it is sufficient. There can be spikes and delays, but as long as they catch up within an interval, it should be good. For real time, it's more serious. For synchronous API requests, throttling and timeouts may be used to drop requests during peak periods.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=94)** For asynchronous stream processors, queues may be used to handle back pressure. Finally, for cost, the focus in batch inference is to keep them low. While in real time, it is essential to meet the performance goals first before thinking about cost. The options available for scaling ML services are similar to those for non-ML services, except for a few items. Horizontal scaling of services can be done by deploying ML services in n plus one fashion. For batch or stream processors, this can be the number of node for a given task. For APIs, it could be the number of parts for a given service. Vertical scaling in ML can be done by using GPUs or TPUs to increase capacity within a node. Auto-scaling is a key feature to handle request spikes. Result caching is another option to explore. For the same set of input values, the model will produce the same output. So if multiple instances of the same input set happens frequently, then caching these results can help avoid a request to the ML service altogether. The promise of GPUs and TPUs for inference is a hard topic in ML labs. But before using them for inference, it is important to understand their advantages and drawbacks. GPUs are optimized for parallel math operations, they offer low computational latency and can be many times more powerful than CPUs,
>
> **[3:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/scaling-model-serving?u=76281980&t=189)** they provide parallel processing capabilities to handle multiple requests at a time, they are significantly more expensive than using CPUs. Let's look at some of the best practices for GPUs. Use them only when they are absolutely needed, it may be cheaper to use multiple CPUs to share the load than a single GPU, look for use cases where they are more cost effective than CPUs, batch multiple requests for performing inference as GPUs are optimized for that, it is recommended to do performance benchmarks between CPUs and GPUs for the use case to understand the cost benefit aspect and make deployment decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1)
> **CLI Commands:** node (2), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** api (1), gpu (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Building resiliency in serving](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=0)** - [Instructor] [Resiliency](../../Skills/Software%20Development/Resiliency.md) of software is its ability to handle issues gracefully and continue to provide the services to the end user with minimal interruptions. Resiliency is a critical yet overlooked part of model inference. It is key to successful operation of ML services. Without resiliency, these services would suffer from inconsistency, customer concerns, and loss of value. Resiliency should be built at a model, service, and solution levels. Let's begin with model resiliency. Model resiliency is the ability of the model to overcome issues with input data or resources, and continue to maintain the expected performance and operational goals. How do we ensure model resiliency? First, all input that is received during inference need to be validated to make sure that they comply with expected sanctity of data. This includes checking for exceptions, unknown values, out of distribution values, et cetera. Inference data should come from the same distribution as the training data, and any exceptions there should be flagged. Next, track resource utilization by the model to identify capacity issues and rectify them. Monitor the operational metrics of the model, and ensure that they are within expected thresholds. Measure model drift and look for decay. Finally, analyze the model performance for bias and take corrective actions.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=95)** We will discuss metrics, drift, and bias in the upcoming chapters. Service resiliency deals with the ability of a service to continue its operations and deliver results when issues happen during its runtime. To ensure resiliency against node failures, add redundant nodes for tasks and services. This compensates for any lost capacity. Implement auto scaling to handle sudden changes in service loads. Alternatively, throttle incoming requests so that sudden bursts of requests do not choke the service. For safeguarding against site level failures, create dual redundancy by deploying in multiple locations. Storage disk can also have outages resulting in loss of data. For this, used redundant storage schemes like RAID and sharding to handle disk outages. Solution resiliency deals with the overall experience of the user with the ML solution. [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) should not be impacted when individual models or services experience issues. When issues happen, it is important to analyze its impact on end user experience and take action. Create multi-region deployments of the entire solution to overcome site level failures. Load balance user requests across multiple other regions when there are service issues in one specific service. Use circuit breakers in clients to overcome broken connection issues
>
> **[3:08](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/building-resiliency-in-serving?u=76281980&t=188)** where the client would indefinitely wait for the server resource. When specific services or models are down, provide alternate functionality to the users so they continue to function with degraded capabilities. For example, if a realtime recommendation engine is down, the recommendations can be served based on an old recommendations cache.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Resiliency](../../Skills/Software%20Development/Resiliency.md) (10), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (2)
> **CLI Commands:** make (1), node (1)
> **Env Vars:** raid (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Serving multiple models](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=0)** - [Instructor] Let's look at scenarios where multiple models are used in an ML solution. An ML solution may use multiple related models to provide overall [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Solution design and deployment should consider this case and optimize across all models. There are multiple ways in which models can be deployed together. Let's review some of the popular configurations. First is the chained models pattern. Here models are chained in sequence. The output of one model becomes the input to the next model. For example, let's consider a chatbot that is answering questions asked by the user. After the user enters their query, the first model would try to understand the context or intent of the user. This is then provided as input to the next model, which would extract information that is relevant to the context. Finally, the information and context are provided to another model that will pull out the best answer to the question. The next use case is single-input independent models. In this case, models are independent of each other but will use the same input. The input is provided to all models in parallel and they work concurrently to deliver the outputs. For example, consider an online review analysis system. The input here would be the user review. This input is passed to three models in parallel, namely sentiment analysis, topic extraction,
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=95)** and obscenity detection. The output from all these models are then collected together and stored. The third option is that of alternate models. In this case, the same input goes to all the models. But based on a condition, only one of the available models is chosen. This is like an if/then/else structure. For example, consider a language translation solution which can take input in any language and translate it to English. The first model will be a language detector. Based on the output of the language detector, only the corresponding translator will be invoked. So if the text is in French, only the French translator will be invoked. What are some of the best practices for multiple model deployments? It is important to test these models together as a solution. Issues in one model may impact other models or overall deployment goals. Parallelize models as much as possible in the deployment to reduce overall latency. Even if the input to the model is the output of a previous model, validate that input to make sure it conforms to the requirements of the model. You can exit these prediction chains early. For example, if the intent detector cannot detect the intent with a given level of accuracy, we don't need to invoke the other downstream models. Scale each model independently as each may have different resource profiles. Always perform end-to-end latency measurements
>
> **[3:11](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/serving-multiple-models?u=76281980&t=191)** to ensure that the overall user experience is not impacted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (2)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for serving](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-serving?u=76281980&t=0)** - [Instructor] Let's briefly look at some of the popular technologies available for model serving. Cortex is a popular deployment and operations platform with a wide set of capabilities. Then [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) is also a popular platform that can be used to serve applications built on TensorFlow. TorchServe similarly is a platform for [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md). Kubeflow Serving is an open source platform that integrates with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the Kubeflow pipeline for [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md). Triton Inference Server from Nvidia is another popular commercial product for serving multiple types of models. This space is rapidly evolving with more focus on automation and end-to-end integration with deployment and monitoring. I strongly recommend doing your own research to find the best options when you get to deploy ML solutions in your production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (2), [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 3. Continuous Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [The monitoring pipeline](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=0)** - [Instructor] We will discuss monitoring aspects of [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) in this chapter. We will begin with a discussion around various components of a monitoring pipeline. Observability is a critical component of a [DevOps](../../Topics/DevOps.md) system and that extends to MLOps too. An end-to-end observability strategy across system, application, and model behavior is critical to MLOps. Implementing effective monitoring and analytics is key to the successful operation of machine learning. We will review a template monitoring pipeline and its components here. This is a general architecture and the specifics of technologies used may vary based on the product choices for monitoring. All services are typically installed on containers or [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). The ML service would itself be deployed in a similar fashion with the model cached inside. A monitoring agent would also run in each container. This agent will collect telemetry data periodically and send it over to a telemetry queue. Data like resource utilization, application [Statistics](../../Skills/Data%20Science/Statistics.md), logs, errors and audit trails may be collected. The telemetry queue consolidates this data across multiple containers in a cluster. A central monitoring hub then consumes and manages this data. A data processor or a metrics computer would then read the telemetry data
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/the-monitoring-pipeline?u=76281980&t=94)** and compute various operational metrics at regular intervals. They are then stored in a metrics database. An analytics service would then provide reports and visualizations on this metrics data. An alerting service can be used to send alerts when specific thresholds are exceeded in the computed metrics. So far, the pipeline is the same whether this is an ML service or a non-ML service. For the model, we will need to collect additional data about the inputs received by the model, the predictions generated and other data, like confidence levels. This is locally stored in a persistent store and is periodically sent over to the monitoring hub. Here, data is first cleaned to remove errors and anonymized for sensitive data. This is then stored in a central production ML data database. Additionally, if the true labels are also available, they are also tagged to the same data. A ML metrics computer would then compute ML-specific metrics, like accuracy and out-of-distribution rates. This data is appended to the metrics database. Similarly, a drift and [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) analyzer will run on the same data and update the findings in the same database. The analytics and alerting services would then be used on ML-specific data also. We will explore these services in detail in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (3), [DevOps](../../Topics/DevOps.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Instrumentation for observability](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=0)** - [Instructor] Instrumentation is the first vital step to ensuring a good foundation for observability. Instrumentation refers to adding capabilities to systems and applications to track and capture information that can be used to observe the behavior and performance. Instrumentation deals with adding hooks into software that enables this tracking. Let's begin with instrumentation at the system level. What kind of data is captured here? We want to track CPU usage for the container and by individual executables. Similarly, we want to track memory usage. Disk I/O stats are essential to understand storage load. Network traffic information helps understand the performance of the network. Request/response [Statistics](../../Skills/Data%20Science/Statistics.md) are collected in API gateways to understand the incoming requests and their responses. Error statistics at the system level will monitor any exceptions with resource access and handling. To capture this information, we depend on infrastructure software. Tooling at the operating system level helps understand compute resources. Runtime platforms like Docker and [Kubernetes](../../Skills/DevOps/Kubernetes.md) also help track system performance. API gateways help in tracking information about incoming requests and the responses returned. Moving on to the application. We try to capture information about activities
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=93)** that are specific to the application domain. We want to capture inputs and outputs for a given service or function. For batch or stream processors, we want to capture processing results. Usage of other services, like third-party services are also tracked for accounting. Errors and exceptions encountered by the executable are also logged and tracked. Debug trails help developers in troubleshooting. Audit trails help in monitoring access to specific resources and data. In order to capture application-specific data, there are multiple tools available. We can have custom application code to capture and log the information. Programming languages support logging capabilities that can be leveraged. Logging libraries make the job of logging easier. Nowadays, transparent interceptors and aspect-oriented programming helps track information without explicit coding from developers. We then get to instrumenting the model. We want to capture raw input features and transformed features for the model in production. Predictions generated by the model are also tracked along with the input. Whenever possible, the true labels for the predictions are captured and tagged against the input data. Operational metrics like model latency is also measured for each of the requests. For model tracking, typically custom application code is used to log data into monitoring stores and queues.
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/instrumentation-for-observability?u=76281980&t=187)** ML libraries today also support the capture of this information with minimal work from the developer. For true labels, user input can be used to capture if the prediction was correct or not. As seen in this video, there is an array of information that needs to be instrumented for. We will discuss how this information is used in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Env Vars:** api (2), cpu (1)
> **CLI Commands:** docker (1), make (1)
> **Definitions:** refers to (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Metrics to monitor](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=0)** - [Instructor] What are the various types of metrics that are recommended to be monitored for [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md)? Let's review them in this video. Let's begin by looking at the system and infrastructure metrics that need to be monitored. This list is the same for both ML and non-ML services. For CPU, we want to monitor utilization levels and usage trends. For memory, key metrics to monitor are heap utilization and thread counts as increasing levels can lead to memory leaks and process crashes. Garbage collection is also under the metric to keep watch. For networking, we look at latency to make sure that it's within acceptable ranges. Jitter and packet loss tells us if there are issues with communication, resulting in multiple retries. Disks are also an important resource. Disk activity and queuing for disk need to be monitored to make sure that it is not a blocking issue. Next comes application metrics. There are two types of metrics. There are service metrics that are applied for all types of services, and business domain-specific metrics. In service, we typically monitor latency and concurrent sessions to understand the load on the system. Errors and failures indicate if the service is working correctly. Max queue size is applicable when requests are being queued for processing. Availability measures overall service availability across the cluster, even if individual nodes go down.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/metrics-to-monitor?u=76281980&t=94)** Average response size measures the network load when messages are exchanged between services. Some domain-specific measures would be orders processed per hour for order processing system. Click-through rate for web applications. Approval rate for credit application processing. Thumbs-up percentage for recommendations. And self-service rate for chatbots. Then comes machine learning-specific metrics. These metrics are constrained by the amount and type of data available, especially if true labels are available from production. [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) for models include accuracy, F1-scores, type I and II errors, precision, recall, et cetera. Computation of these metrics would depend upon the availability of both predicted and actual labels. For model drift, the typical measurements are drift rate, out-of-distribution percentage and P-value. We will discuss drift in detail in the next chapter. There are also [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md)-related metrics, like fairness score and correlation. Responsible AI is discussed in one of the future chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** cpu (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [ML production data best practices](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=0)** - [Instructor] As models in production do inference, they also produce significant amounts of valuable data, usually referred to as ML production data. We will discuss some best practices in capturing and managing this data in this video. ML production data contains multiple aspects of inference, usually linked together by specific identifiers. It contains both raw and transformed model inputs. It contains the model outputs or predictions. It also has [Statistics](../../Skills/Data%20Science/Statistics.md) about the inference, including latency, and any confidence or error measures. True labels may be available in some cases. Sometimes they are manually collected from users. The production data set is valuable for monitoring the performance of the model, as well as serve as new training and testing data for model improvements. However, this is significant data that needs to be captured and processed, and creates significant load on the serving setup. Here are some recommendations for managing ML production data. For capturing data, use asynchronous and non-blocking methods so that the main inference pipeline is not blocked in trying to capture, store and publish production data. It's recommended to cache the data locally in disk, and then use store and forward to consolidate them in the monitoring hub. There are rarely any real time uses for ML production data,
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/ml-production-data-best-practices?u=76281980&t=95)** so [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) is mostly sufficient. [Privacy](../../Skills/Data%20Science/Privacy.md) of data is a significant risk, so it is recommended to use techniques like reduction and anonymization before the data is stored in the central hub. It is also recommended to use independent processors for different metrics following [Microservices](../../Skills/Software%20Development/Microservices.md) patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Best Practices:** recommended (3)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Alerts and thresholds for ML](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=0)** - [Instructor] In this video, we will focus on creating thresholds and alerts for ML-related monitoring. A well-designed threshold and alerting system helps in efficient [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) of ML services by requesting the right amount of attention from the ML team at the right time. Threshold and alerting systems in general should get quick attention for valid issues while eliminating false positives. How are thresholds and alerts set up specifically for machine learning-related issues? They are usually based on model drift or model bias. They are also set up for model operational performance degradation that is not explained by system or application issues. In drift and bias, there is usually a slow decay in performance unless there are data-related issues. We will discuss this in detail in the next chapter. Fixing issues in ML usually means retraining, but it is an expensive process. In general, it is recommended to not act too fast. Rather, explore the causes for the issues before jumping into conclusions. It is important to reproduce the symptoms in development or training setups and observe for courses for better understanding of the problem. What are the best practices for setting thresholds in ML? Thresholds should be set based on specific metrics
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=95)** and their values. For example, we can set a threshold when the model accuracy falls below 80% and then create an alert if the value actually goes below 80. Care should be taken to not set thresholds too low, as there may be false alarms. Similarly, if the thresholds are set too high, then it may be too late to prevent serious failures. Identify the right threshold values for each metric by each model after careful exploration. Experiment with exception scenarios and fine-tune thresholds. It is also important to periodically review the values to ensure that they still hold good. These best practices apply to system and application metrics also. Once we have set thresholds, how do we trigger alerts when they are breached? In general, it's important to answer a few questions to determine how alerts are set up. First, we start with the reason why the alert should be sent. There should be specific reasons when an action needs to be taken. Then comes when the alert should be sent. It can be based on a set of conditions based on thresholds, like a single threshold being breached, a series of breaches, or a count of breaches by specific time intervals. Next comes the question of who should be notified. This is a list of people who have the authority and responsibility to take action. The media for alerting is also important,
>
> **[3:09](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/alerts-and-thresholds-for-ml?u=76281980&t=189)** whether it's an email, text message, or a phone call. Finally, all this information should be captured in a process or procedure document. The document should clearly call out on who gets the alert and what action is expected to be taken. A well-set-up thresholding and alerting system includes both automation of monitoring and alerting, as well as a process on how the alerts will be handled. These best practices apply for system and application metrics also.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1)
> **Prerequisites:** set up (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for monitoring](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/tools-and-technologies-for-monitoring?u=76281980&t=0)** - [Instructor] Let's briefly review the tools and technologies that can be used for monitoring ML solutions. For system and application monitoring, a number of tools are available for instrumentation and collection of telemetry data. They include [Kubernetes](../../Skills/DevOps/Kubernetes.md), Prometheus, the ELK stack, Fluentd, and Grafana. There are also other commercial providers like Datadog, New Relic, and Sensu who provide monitoring as a service. For monitoring ML models, there are [products](../../Skills/Software%20Development/Microsoft%20Products.md) for monitoring, like Seldon Core and Fiddler. ML monitoring services are also available from Arize AI, Neptune, Evidently AI, and New Relic. This is an immature and fast evolving space, so do your own due diligence in choosing the right services for your own use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** elk (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Drift Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to model drift](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=0)** - [Instructor] In this chapter, we will explore in detail about model drift and ways to monitor it. Let's begin with an introduction to model drift. When we train, test, and deploy a model, it has a proven level of predictive accuracy. It is expected that the model will continue to have the same accuracy levels in production over its lifetime. A model is considered drifting when its predictive accuracy reduces over time when deployed in production. Let's consider a few examples here. We have three models deployed in production at month zero. The chart shows the observed prediction accuracy of models for the next four months. Let us start with the first model, sentiment analysis which is the green lane. It starts with an accuracy of 85%, and over the next four months, it oscillates between 85% and 90%. It is staying within the band, and hence considered not drifting. Next, let's look at the intent detection model shown in red. It starts with an accuracy of 85%, but in the second month, its observed accuracy falls to 65% and then stays around there. This is considered a sudden model drift. Next, we look at the obscenity filter in blue. This model starts at 90% accuracy, and its accuracy goes down slowly over time to 75%. This is called slow drift or slow decay over time.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=96)** When a model is deployed in production, all these types of drift can happen. But if the models accuracy goes down for a given time period but comes back into the band for the next, it is not considered as a drift. To help with our discussions around drift, let's discuss some math on prediction probabilities. Let us assume that we have a simple model that takes in features about a patient and predicts if the patient has diabetes. One of the features is the age of the patient. x stands for a feature and y stands for the target. So the [Probability](../../Skills/Data%20Science/Probability.md) of x or p of x is the probability that a given feature value appears in the population. So if 40% of the patients are older than 50, then the probability of age greater than 50 would be 40%. Similarly, the probability of y or p of y is the probability that a given target value occurs in the population. So if 10% of the patients have diabetes, then the probability of diabetes equal to true is 10%. We then look at conditional probabilities. The probability of x given y or p of x given y means how often a given value of x occurs when a given value of y occurs. This means the percentage of time when age is greater than 50 when the patient has diabetes.
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/introduction-to-model-drift?u=76281980&t=190)** The reverse conditional probability is p of y bar x. This is the probability that the patient has diabetes when their age is greater than 15. The joint probability of x and y is the percentage of time that both x and y values occur in the dataset. In this example, it is the percentage of time that a patient has diabetes and also of age greater than 15. The probability of y given x or p of y bar x is computed as the joint probability of x and y divided by the probability of x. This is the formula that indicates the relationship between a specific value for a feature and a specific outcome for the target. Drift happens when the probability of y given x changes in the real world, but the model does not reflect the same. For example, let's say after the model is developed and deployed, a magical medication for diabetes is introduced. Because of which, patients about the age 50 have recovered from diabetes. The model will then not be in sync with the change and will continue to predict with the older assumptions. Hence, it'll drift and decay. We will explore drift further in the remaining videos in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (14)
> **Definitions:** stands for (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Concept drift basics](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=0)** - [Instructor] There are two types of drift that can happen in machine learning, namely concept drift and feature drift. We will discuss concept drift in this video. A machine learning model essentially captures the relationship between the features and the target, and uses this information to make predictions. A concept drift occurs when the relationship between the features and the target changes over time. As a result, the model is no longer able to predict accurately and needs to be retrained. In the formula for conditional [Probability](../../Skills/Data%20Science/Probability.md) of Y given X, when the joint probability of X and Y changes, concept drift occurs. For example, let's say in the real world, the patient has diabetes 80% of the time when their age is greater than 50. A model built on such data will also predict the same. Let's say for five months, the ground truth holds good and the model predicts with the same level of accuracy. By the sixth month, a new medication for diabetes lowers A1C levels and changes the probability of being diabetic when the age is greater than 50 to just 50%. The old model built on the old data will continue to predict that 80% of those above 50 as diabetic and hence turn inaccurate. This is concept drift. What causes concept drift in real scenarios. There are multiple reasons. There could be changes in the ecosystem that may trigger changes in the behavior of subjects.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/concept-drift-basics?u=76281980&t=95)** For example, a new marketing campaign with deep discounts may increase conversion rates. A new demographic may start buying more. There could also be cyclic and seasonal variations that are not covered in the training data. For example, during the school reopening season, the sale of school supplies will go up. If a model predicting school supplies did not consider the seasonal variation, it will be inaccurate during the season. Another reason is that the training data is not from the same population as production data. This includes data distribution and frequency. In such cases, drift may be noticed immediately after deployment. How do we measure and handle concept drift? We will discuss this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Env Vars:** a1c (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Managing concept drift](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=0)** - We will discuss the techniques and best practices for managing concept drift in this video. How do we measure concept drift? It is actually pretty straightforward. What inputs do we need? We only need the predicted labels and true labels in production. For example, if we are predicting if a website user will eventually buy a product we need the prediction and if the user actually made the purchase later in that session or in a week we need to collect this information for many predictions over a period of time, say a week or a month. Then we can compute the overall accuracy of the predictions and see how much it deviates from the baseline accuracy found during model training. Based on these values, we can review and take action. The biggest challenge in measuring concept drift is that true labels are not available all the time to verify if the prediction is accurate. In such cases, we may have to collect explicit feedback either from the user or using labeling techniques on production data before computing drift. What are some of the best practices for concept drift management? Drift should be computed for regular time intervals like a day, week, or a month. Choose intervals where sufficient samples are expected to be available. Two few samples would result in significant sampling errors. Watch the drift trend over multiple time intervals. Drift may happen in one time interval
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-concept-drift?u=76281980&t=93)** but can quickly go back to normal. It may also oscillate within a given band set up thresholds and min-max bands for automated monitoring of drift and triggering alerts, it is recommended to act only if the drift consistently stays out of the threshold bans. It's important to analyze the root cost for drift by involving data scientists and domain experts. Understanding the cost is essential in coming up with the corrective action. For example, it may turn out that a key feature variable is missing in training. Use new production data as training data in the next revision while incorporating all the learnings from the drift.

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
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=0)** - [Narrator] Having discussed concept drift, let's now focus on the other type of drift called feature drift. A feature drift occurs when the distribution of values or classes of features change over time. This indicates a change in the features that are different from those that were used during model training. Looking at the conditional [Probability](../../Skills/Data%20Science/Probability.md) formula, there is a change in the probability of X for feature drift. One important question is whether the occurrence of a feature drift would mean that a concept drift is also happening. There may be a concept drift, or there may not be. A change in probability of X may be accompanied by an equivalent change in the joint probability of X and Y, leaving probability of Y given X unchanged. Let's look at some examples of feature drift. In the same example of predicting whether a patient is diabetic, let's look at the distribution of classes over a few months. In the first three months, patients with age greater than 50 comprise about 40% of the population. In months four and five, it drops to around 15%. This is a change in the distribution of classes and is called feature drift. During the same period, the percentage of patients under 20 did not change. Let's look at another feature called patient weight, which is a continuous variable. The box plot shows the distribution of weight values for two months. Looking at the weights of patients in the first month, the values range from a little over 100 to close to 200.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/feature-drift-basics?u=76281980&t=96)** In the second month, it ranges from 120 to 240. As seen from the box plot, there is a significant change in the distribution of values. This is, again, feature drift. Just because the distribution changes, it does not mean that the predictions would also be impacted. As long as the model predicts the same when age is greater than 50, data drift would not impact model accuracy. But when it is not possible to measure concept drift because the true labels are not available, feature drift can be an indicator for potential concept drift. So what causes feature drift? There could be a change in the population mix of entities. Some demographics may be more active in the given time period. Some [products](../../Skills/Software%20Development/Microsoft%20Products.md) may be sold more than expected. For example, during COVID, sales of hand sanitizers increased multifold. There could also be changes in application logic in upstream data creators and processors that may change the distribution. Some new classes or categories may be introduced, which the model may not be aware of. There can be errors in data generation and processing that is introducing skewed or random values into the data stream. Equipment errors, data pipeline errors, and missing data errors can all cost deviation in feature data. We will discuss techniques for managing feature drift in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** covid (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Managing feature drift](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=0)** - [Instructor] Let's discuss the techniques and best practices for managing feature drift in this video. Let's start with measuring feature drift. The biggest use of feature drift comes in when we cannot measure concept drift due to non-availability of true labels. Feature drift serves as a proxy indicator for potential concept drift. It also helps to monitor feature sanctity and whether there are changes or errors happening in upstream data generators and processors. To compute feature drift, we need datasets of features from both training and production. These can end up being very large as most techniques for feature drift involve comparing two sample sets and [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) if they belong to the same population. In terms of techniques, Kolmogorov-Smirnov or KS is a popular technique for measuring drift. There are suites of techniques under maximum mean discrepancy test umbrella that can also be applied. Alternatively, you can build a custom drift detector classifier that can predict if the feature data has drift. Coming to the practices of feature drift management, the practices we discussed in the concept drift video also accrue to feature drift. In addition, it's recommended to measure drift independently for each feature. The drift number should be compared to the correlation values of that feature to determine its impact on the target. When the correlation between a feature variable and a target is high,
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/managing-feature-drift?u=76281980&t=94)** even small amounts of feature drift can cause concept drift. When drift is noticed, examine changes to the [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) pipelines and application changes to identify possible causes. Look for errors also in data processing. We can also use feature drift techniques to measure drift in the predicted labels. Especially for multi-class classifiers, changes in predicted class distribution may also indicate possible issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 5. Responsible AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Elements of responsible AI](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=0)** - [Narrator] [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) is an area that is gaining more importance around the world as concerns about the harmful effects of AI grow in our society. While there is excitement about the disruptive potential of AI in improving our personal lives and business, there are also ethical concerns around bias, security, [Privacy](../../Skills/Data%20Science/Privacy.md), and transparency of these solutions. Responsible AI, or RAI for short, is a set of principles, processes, and practices to ensure that ML models are accepted in our society as ethical, thereby [Building Trust](../../Skills/Data%20Science/Building%20Trust.md) in its capabilities. This trust is important for the wide acceptance of AI. Ensuring conformance to responsible AI principles and practices is a key area for [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md). What are the key elements of responsible AI? To begin, ML models should be explainable. This means it should be possible to explain why a model made a specific prediction by looking at the inputs to the model. It helps to eliminate doubts about its sanctity. Next, [Accountability](../../Skills/Data%20Science/Accountability.md) is needed for the predictions made by models. Models may fail often, leading to undesirable consequences. Human ownership of these results are required to ensure accountability. Reproducibility of results is a key requirement for models. This helps to troubleshoot why a model behaved
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=93)** in a specific way under specific circumstances, and hence, alleviate any issues found. Models have the tendency to pick up patterns based on features like gender, age, race, et cetera, and use them to make predictions, even if these attributes do not exist explicitly in the training data. Tracking and eliminating bias is another key requirement for RAI. Human-centered AI focuses on keeping humans in the loop for model training and inference. This allows humans to monitor and control model behavior and have kill switches when models go rogue. ML solutions need to ensure security, whether it is physical security, service access, or data production. They also need to be compliant to various standards, laws, and regulations to protect user privacy. RAI is an expanding field and more elements are being added to the scope. How do we implement responsible AI in an organization? Commitment and resources are needed for successful RAI. First, an RAI owner needs to be appointed, who is accountable for ensuring that models and [products](../../Skills/Software%20Development/Microsoft%20Products.md) conform to RAI requirements. Policies and procedures need to be created to lay out how the organization will adapt and enforce RAI. These should be augmented with tools and automation for efficiency and scale. All employees should be educated
>
> **[3:06](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/elements-of-responsible-ai?u=76281980&t=186)** on these policies and processes, and a culture that fosters RAI should be built. RAI implementation should be monitored for conformance, and any exceptions handled with priority. The process should be audited periodically, and corrective action should be taken when needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (5), [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Accountability](../../Skills/Data%20Science/Accountability.md) (2), [Building Trust](../../Skills/Data%20Science/Building%20Trust.md) (1), [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1)
> **Env Vars:** rai (9)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** make (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### [Explainable AI](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=0)** - [Instructor] The ability to interpret why a model is predicting in a certain way is becoming more and more important as AI faces challenges from governments and society about its [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md). Explainable AI, or XAI for short, is a set of processes and tools that allows humans to understand model behavior by correlating the output to the input features that influenced it. This is reverse engineering the behavior of a model to explain which features impacted a specific prediction. Why do we need explainable AI? Models are becoming black boxes. As we focus more and more on [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) models, especially for NLP and vision applications, it's not possible to understand why a model is predicting in a certain manner. As a result, questions arise about its accuracy and fairness, and whether it is performing like a human in these situations. Lack of trust in society is impacting the growth of AI and limiting its applications. On the other hand, we now have a growing set of loss regulations and standards for AI, and compliance to these will require the ability to explain model behavior. Models can also decay over time as seen in the previous chapter, and we need explainable AI to help us understand how input changes are influencing the model. Similarly, if there are data issues happening, they may also go unnoticed
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/explainable-ai?u=76281980&t=93)** without knowing how they are influencing the outcomes. Techniques for explainable AI is a novel and expanding field. I will call out a few of these techniques here and encourage you to do further reading on these. A simple technique is to do a manual analysis of inputs and outputs with sampling, but this is a painstaking exercise. We can visualize the inputs and outputs in n dimensional plots to understand specific patterns. Beyond this, new techniques like surrogate model explanation technique, or LIME, layer-wise relevance propagation, and Deep Tailor decomposition can be used to understand model behavior. This is a constantly evolving domain, and we can see a lot more new techniques showing up in the near future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Definitions:** is a  (4)
> **Env Vars:** xai (1), nlp (1), lime (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Fairness in ML](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=0)** - [Instructor] We will explore the area of fairness and bias in machine learning in this video. Fairness in machine learning is the process of ensuring that the model provides all individuals with equal opportunity, and does not bias or generalize based on certain segments or attribute values. ML models are notorious for picking up bias quickly if they are not trained with the right type of data. What are the types of bias that we deal with in machine learning? The most common bias is data selection bias, where not all the real world scenarios are equally sampled. For example, consider a diabetes prediction model that is built mostly using data from Europe and then using it for predicting diabetes in Asian populations. The training data would be skewed to races that are prevalent in Europe. Group attribution bias happens when behavior is generalized for the entire group based on a specific attribute. For example, an interview candidate filtering algorithm may assume that all candidates who studied in a given university have the same level of skills. Human bias happens with data scientists. Here, they would make assumptions on how a model is expected to behave, and then conclude that the model is incorrect if it behaves otherwise. Benchmarking bias happens when the benchmark model does not represent the same population as the actual model. For example,
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/fairness-in-ml?u=76281980&t=94)** using a sentiment analysis model built on movie reviews as a benchmark for validating a sentiment analysis model for a chat bot. Both are text based models, but the context and user behavior would be different. What are some of the best practices to avoid bias? The most important one is in training data selection. Care should be taken to make sure that the training data represents all real world use cases equally. Quality of data is more important than quantity. Then comes input [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) for training and inference to make sure that there are no exceptions and skews. When evaluating model performance, it is important to look at performance by individual target classes. For example, in a diabetes prediction data set, only 10% of the records have age less than 20. The overall model accuracy may be 85%, but the accuracy for records with age less than 20, maybe just 50%. All classes should ideally have equivalent performance. Similarly, model drift analysis should also be done by individual classes to make sure that a specific target class is not drifting, even when overall drift is within thresholds. It is important to have human review and feedback from time to time, possibly using crowdsourcing techniques to see if the model is biased in a specific manner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (4)
> **Speakers:** - [instructor] (1)

#### [Security of ML assets](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=0)** - [Instructor] An important area in [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) around [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) is the security of ML assets like data and models. Machine learning solutions also have threats of adversarial attacks that compromise the model as well as data used for training and inference. This is in addition to the other security threats that any other software application would face. Let's discuss the types of ML specific threats that such solutions face. There are two main assets for ML, data and model. When it comes to data, sharing across trust boundaries carries the risk of intrusion during transport, hackers can poison training data by introducing negative samples that influence model behavior, there is also the threat of data theft and break-ins which is becoming widespread these days, there is the risk of hackers reverse engineering redacted or deleted data to uncover private information. On the model side, there is a high risk of the model being stolen if it is not properly protected, hackers can manipulate the inputs to the model and influence the ML solution to behave in undesired ways, known model attacks happen when using open source models when the hacker knows the model and hence can influence its behavior by providing specific inputs, IP infringement is another area of concern where the models architecture can be copied by competitors,
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/security-of-ml-assets?u=76281980&t=94)** hackers can also reverse engineer the models architecture and parameters by looking at the relation between the inputs and the outputs. How do we protect the model and data from adversarial attacks? There should be physical security to where these assets are stored, there should be [Network Security](../../Skills/Cybersecurity/Network%20Security.md) that prevents unauthorized users from accessing the assets; it is recommended to encrypt models and data when they are deployed on edge devices like mobile phones and routers; during training, it's recommended to sanitize data to remove individual negative samples; a number of new techniques like RONI, TRIM , and KNHT are coming up in this space; when using AutoML, perform validations on new training data to ensure that they are not compromised; block model poisoning with training data by using gradient-shaping techniques; use model restoration techniques to remove back doors to information leakage. Some of these techniques may be new to you and I highly recommend further reading on these topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Env Vars:** roni (1), trim (1), knht (1)
> **Best Practices:** recommended (2)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Privacy in machine learning](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=0)** - [Instructor] Similar to security, [Privacy](../../Skills/Data%20Science/Privacy.md) is another important consideration in machine learning. Sensitive information should be protected against accidental or adversary leakage when used for training or inference. While security deals with protecting the entire data set or model, privacy focuses on protecting the sensitive parts while still providing access to the other parts for authorized users, like data scientists and analysts. Why do we need privacy protections? As the applications of AI are growing, so is the concern around its ability to infringe upon the rights and privacy of individuals. The first concern for building ML solutions is to gain customer and user trust. Users are worried about the misuse of their private data, and hence are unwilling to share this information for model training. There is concern around who gets to see their private data and if those individuals may steal and use it for unethical purposes. There is a growing compliance framework across the world for AI. More and more laws, regulations and standards are created like GDPR, and HIPAA. Each country is coming up with their own laws for AI, and business verticals like healthcare and [Banking](../../Skills/Software%20Development/Banking.md) are also doing the same. Compliance to these is a requirement in order to sell ML [products](../../Skills/Software%20Development/Microsoft%20Products.md) to these countries and verticals. What are the various techniques available for [Privacy Protection](../../Skills/Data%20Science/Privacy%20Protection.md)? It begins with having access controls,
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/privacy-in-machine-learning?u=76281980&t=94)** specifically at an attribute level. Anonymization of data is another technique where real values are replaced with mapped ones so that the patterns are retained by not exposing real information. Data aggregation is another technique to hide individual information. [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and leakage analysis helps identify gaps in privacy implementation and fix them. Federated learning and inference is another area that takes the model to where the data is. The model can do its job with the data staying in its own trust zone. Differential privacy is an area that is becoming popular too. It focuses on manipulating outputs from data, such that data leakage and reverse engineering are not possible. Finally, education for all stakeholders is an understated but very important requirement to ensure that everyone understands the risk around privacy and ensures its protection in their work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (7), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Privacy Protection](../../Skills/Data%20Science/Privacy%20Protection.md) (1), [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-deployment-and-monitoring/continuing-on-with-mlops?u=76281980&t=0)** - [Kumaran] Now that you have learned about the concepts of [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) for deployment and monitoring, you can take your learning even further. Explore specific tools and technologies discussed in this course. Get a copy or free license and experiment with them. Implement the MLOps pipeline in your organization using the learnings from this course. Machine learning always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting benefits out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (2)
> **CLI Commands:** find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [Kumaran Ponnambalam](../../Instructors/Artificial%20Intelligence%20(AI)/Kumaran%20Ponnambalam.md)

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- System Deployment
- MLOps
- Artificial Intelligence (AI)

## Path Context

### In [MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/MLOps%20Essentials%20for%20Developers%20and%20AI%20Engineers-%20Tools%2C%20Pipelines%2C%20Security.md)
← [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md) | **8 of 10** | [MLOps Essentials- Monitoring Model Drift and Bias](MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md) →

### In [Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)
← [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md) | **11 of 16** | [MLOps Essentials- Monitoring Model Drift and Bias](MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md) →

## Appears In

- [MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/MLOps%20Essentials%20for%20Developers%20and%20AI%20Engineers-%20Tools%2C%20Pipelines%2C%20Security.md)
- [Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Introduction to MLSecOps](Introduction%20to%20MLSecOps.md) — Artificial Intelligence (AI), Machine Learning, MLOps
- [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md) — Artificial Intelligence (AI), Machine Learning, MLOps
- [MLOps Tools- MLflow and Hugging Face](MLOps%20Tools-%20MLflow%20and%20Hugging%20Face.md) — Artificial Intelligence (AI), Machine Learning, MLOps
- [Machine Learning and AI Foundations- Clustering and Association](Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI- Advanced Decision Trees with SPSS](Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)