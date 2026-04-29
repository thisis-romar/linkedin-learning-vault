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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md)

![MLOps Essentials: Monitoring Model Drift and Bias](https://media.licdn.com/dms/image/v2/D560DAQGeeHwGfnMVDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696443937130?e=2147483647&amp;v=beta&amp;t=mGC8mXrlm7hNClnvS9urtHlv1dkv7UdDwUYkqYuvBFo)

# MLOps Essentials: Monitoring Model Drift and Bias

> As more and more ML models are developed and deployed, the need arises to ensure that the models are effective and safe and that they perform as desired. Model monitoring, a core function of MLOps, helps data scientists and MLOps engineers to meet this need. In this course, data analytics expert Kumaran Ponnambalam discusses the types of monitoring needed for ML models. He deep dives into model dr

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias) | 1h 5m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Introduction to Model Monitoring]]** (4 videos)
- **[[#2. Model Drift Basics]]** (5 videos)
- **[[#3. Detecting Model Drift]]** (6 videos)
- **[[#4. Drift Monitoring Process and Best Practices]]** (4 videos)
- **[[#5. Introduction to Model Bias]]** (5 videos)
- **[[#6. Bias Detection and Best Practices]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The need for model monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=0)** - In machine learning, monitoring your models is critical to ensure that models continue to perform in production with expected levels of accuracy and fairness.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=12)** So in this LinkedIn Learning course, we will discuss the basics of ensuring that drift and bias don't creep into the models you are building.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=22)** We will also work on a couple of exercises to show how this can be done well.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=29)** I'm Kumaran Ponnambalam.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=31)** If you are a data scientist or a machine learning engineer, monitoring is an essential skill for you to have.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/the-need-for-model-monitoring?u=76281980&t=37)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### Setting up the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=6)** All course exercises are built using Python 3.9.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=11)** We will be using Anaconda and Jupyter Notebooks for these exercises.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=17)** You can download and install Anaconda from the website [anaconda.com/download](https://anaconda.com/download) for your specific operating system.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=27)** Once downloaded and installed, we will go to the Anaconda UI.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=32)** Here, we will create a new virtual environment called monitoring.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=45)** We will choose Python 3.9 as the Python version.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=51)** This will take some time to set up.
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=55)** The environment is set up now.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=59)** Now we can go back to Home, make sure we have selected monitoring, and then we will install Jupyter Notebooks.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=68)** Jupyter Notebooks is installed now.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=72)** Open the command prompt window.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=74)** Please note that if you are on Windows, you would want to use the Anaconda command prompt for the same.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=81)** The exercise files for this course have been downloaded on my computer to the folder /Users/linkedin/ExerciseFiles.
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=91)** Please download the exercise files on your computer in a similar folder.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=97)** Navigate to that folder on the command prompt.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=100)** We can explore these files from the command prompt.
>
> **[1:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=103)** Now, let's activate the new virtual environment we created using the command conda activate monitoring.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=114)** Then we can start the Jupyter Notebook server using the command jupyter notebook.
>
> **[2:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=125)** Please make sure that you are in the same folder as the exercise files are before using the command.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=131)** This command then opens the Jupyter Notebook in the browser.
>
> **[2:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=135)** The exercise files and the data files can be seen in the root directory.
>
> **[2:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=140)** We will use these files in the later exercises.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/setting-up-the-exercise-files?u=76281980&t=144)** In the next chapter, we will review the basics of model monitoring.

> [!info]- Semantic Content
>
> **Tools:** jupyter (6), anaconda (5), command prompt (4)
> **Exercise Files:** exercise files (5), download the (1)
> **CLI Commands:** python (3), make (2)
> **Prerequisites:** set up (3), install (2)
> **UI Navigation:** go to (1), open the (1), navigate to (1)
> **Versions:** python 3 (2)
> **Cross-References:** go back to (1), in the next (1)
> **Code Keywords:** let (1)


### 1. Introduction to Model Monitoring

> [[#Table of Contents|↑ Back to Table of Contents]]

#### ML models in production
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=0)** - Before we dive into model monitoring aspects, let's quickly review some background on machine learning model deployments in production environments.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=11)** How are models typically deployed in production?
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=15)** Models are typically hosted by a wrapper or API service.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=20)** This service may be custom built or user available third party hosting services like TorchServe or TensorFlow serving.
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=30)** Users interact with the model through intermediate services.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=34)** These services may be graphical interfaces or APA-driven interfaces.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=40)** They may exist in the business layer and perform other business functions too.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=46)** Intermediate services pass the required inputs to the model and receive outputs or predictions from the model.
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=55)** ML services may be deployed in N+1 configurations for scalability and performance.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=63)** Deployment to production systems typically happen using CI/CD pipelines that test and automate these deployments for the models and associated services.
>
> **[1:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=75)** Models and associated services usually have several levels of instrumentation for data collection about performance and associated observability capabilities.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=88)** Let's look at an example ML service deployment pattern.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=93)** Other deployment patterns are also used.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=97)** In this pattern, the non-ML services, like user interfaces or business layer services, are deployed as a separate service in their own containers.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=108)** The ML service itself is deployed as another service in its own containers.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=114)** The ML service only takes care of pre-processing model inputs, predictions, and any post-processing needed before returning the predictions.
>
> **[2:04](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=124)** The model file is in a portable format, like pickle, and is stored centrally in a file store.
>
> **[2:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=132)** The ML service loads the model dynamically as needed and uses it to serve requests.
>
> **[2:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=139)** It may also cache the model for handling future requests.
>
> **[2:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=143)** Clients access the model through the non-ML interfaces, which in turn route the request to the ML service.
>
> **[2:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/ml-models-in-production?u=76281980&t=151)** There are several variants of this deployment possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1)
> **Env Vars:** api (1), apa (1)
> **CLI Commands:** cd (1)
> **Speakers:** - before (1)

#### Challenges with serving models in production
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=0)** - [Instructor] What kinds of challenges exist in serving ML models in production?
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=6)** What types of problems can occur?
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=9)** Resource choking and associated system performance degradation is a common problem if enough compute and storage resources are not allocated to the model or service.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=21)** This increases latency and may cause the model to crash.
>
> **[0:26](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=26)** The input data received by the ML service may be incomplete or corrupted.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=32)** This can be intentional or may happen due to upstream application issues.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=37)** This will result in incorrect predictions that may have downstream implications.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=43)** Application-related defects and exceptions can happen across the application stack, which may impact how the model executes and behaves.
>
> **[0:53](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=53)** Again, it can lead to degraded performance or failures.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=58)** ML models are also susceptible to several security risks, like data poisoning, adversarial attacks, or attack vector exposure that can compromise model behavior and outputs.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=73)** Drift may occur in how the model performs in production.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=77)** This leads to incorrect outputs, which in turn impacts the effectiveness of the applications.
>
> **[1:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=84)** Bias and fairness issues in predictions may also occur.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=89)** This, if exposed, can lead to loss of trust with the model.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/challenges-with-serving-models-in-production?u=76281980&t=93)** We will specifically discuss model drift and bias in this course and explore ways of detecting and overcoming these two challenges.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Metrics to monitor
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=0)** - To identify and overcome problems with machine learning models in production, we first need to understand what is going on.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=10)** For that, we need metrics.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=12)** What kinds of metrics are collected in a typical machine learning deployment?
>
> **[0:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=18)** Let's begin by looking at the system and infrastructure metrics that need to be monitored.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=24)** This list is the same for both ML and non-ML services.
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=30)** For CPU, we would monitor utilization levels and usage trends.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=36)** For memory, key metrics to monitor or heap utilization and threat counts as increasing levels can lead to memory leaks and process crashes.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=47)** Garbage collection is also another metric to keep watch.
>
> **[0:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=52)** For networking, we monitor latency to make sure that it is within acceptable ranges.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=58)** Jitter and packet loss tells us if there are issues with communication resulting in multiple retries.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=67)** Disks are also an important resource.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=70)** Disks activity and queuing for disk needs to be monitored to make sure that it is not a blocking issue.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=78)** Next comes application metrics.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=80)** There are two types of metrics.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=83)** There are service metrics that apply for all kinds of services and business domain-specific metrics.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=90)** In service, we typically monitor latency and concurrent sessions to understand load on the system.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=97)** Errors and failures indicate if the service is working correctly.
>
> **[1:42](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=102)** Max queue size is applicable when requests are being queued for processing.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=108)** Availability measures overall service availability across the cluster, even if individual node go down.
>
> **[1:56](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=116)** Average response size measures the network load when messages are being exchanged between services.
>
> **[2:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=123)** Some domain specific measures would be orders processed per hour for order processing systems, click-through rate for web applications, approval rate for credit application processing, thumbs-up percentage for recommendations, and self-service rate for chatbots.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=144)** Then comes machine learning specific metrics.
>
> **[2:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=147)** These metrics are constrained by the amount and type of data available, especially if true labels are available from production.
>
> **[2:36](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=156)** Performance metrics for models include accuracy, F1-scores, type I and II errors, precision, recall, et cetera.
>
> **[2:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=166)** Computation of these metrics would depend upon the availability of both predicted and actual labels.
>
> **[2:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=174)** For model drift, the typical measurements are concept drift, feature drift, and correlation.
>
> **[3:01](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=181)** There are also responsible AI-related metrics like fairness score and correlation.
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=187)** Monitoring these measures are important to ensure that the models are performing to expectations when deployed in production.
>
> **[3:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=196)** In this course, we will focus on drift and fairness monitoring.
>
> **[3:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/metrics-to-monitor?u=76281980&t=201)** Let's explore these in detail in the upcoming chapters.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (1)
> **Code Keywords:** let (2), self (1)
> **Env Vars:** cpu (1)
> **Speakers:** - to (1)

#### Data for model monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=0)** - [Instructor] What data do we need to instrument for and capture to enable monitoring for model drift and bias?
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=8)** Here is the list of key model monitoring data elements.
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=13)** Raw input features that are received by the ML service should be collected in its original form.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=20)** This becomes the reference data for future comparison and training.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=25)** Input features may undergo transformation, like one hot encoding and bending during pre-processing.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=32)** These also need to be collected as they are the direct input to the model.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=37)** The predictions or outcomes from the model of course need to be collected, and linked to their corresponding features.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=45)** If true labels can be acquired either through human feedback or explicit labeling, they also need to be collected, and linked with its corresponding prediction.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=57)** Prediction stats, like confidence levels or probability scores also need to be collected.
>
> **[1:04](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=64)** Finally, latency of the model should be collected for future reference.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=69)** There are several ways in which this dataset can be collected.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=73)** Custom application code inside the ML service can be used to collect and propagate data.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=80)** Popular machine learning libraries also provide ways to collect this data in multiple files.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/data-for-model-monitoring?u=76281980&t=87)** Finally, user input can be used to collect true labels, and validate if the predictions are accurate.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **Speakers:** - [instructor] (1)


### 2. Model Drift Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to model drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=0)** - [Instructor] In this chapter, we will explore in detail about Model Drift concepts.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=6)** Let's begin with an introduction to Model Drift.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=9)** When we train, test and deploy a model, it has a proven level of predictive accuracy.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=16)** It is expected that the model will continue to have the same accuracy levels in production over its lifetime.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=23)** A model is considered drifting when its predictive accuracy reduces over time when deployed in production.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=31)** Let us consider a few examples here.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=34)** We have three models deployed in production at month zero.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=39)** The chart shows the observed prediction accuracy of models for the next four months.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=44)** Let's start with the first model, sentiment analysis which is the green line.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=50)** It starts with an accuracy of 85%, and over the next four months it oscillates between 85% and 90%.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=59)** It is staying within the band, and hence considered not drifting.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=65)** Next, let's look at the intent detection model shown in red.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=69)** It starts with an accuracy of 85%, but in the second month, it's observed accuracy false to 65% and then stays around there.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=79)** This is considered a sudden model drift.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=83)** Next, we look at the obscenity filter model in blue.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=87)** This model starts at 90%, and its accuracy goes down slowly over time to 75%.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=95)** This is called slow drift or slow decay over time.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=99)** When a model is deployed in production, all these types of drifts can happen, but if the model accuracy goes down for a given time period, but comes back into the band for the next, it will not be considered as drift.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=114)** To help with our discussions around drift, let's discuss some math on prediction probabilities.
>
> **[2:01](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=121)** Let us assume that we have a simple model that takes in features about a patient, and predicts if the patient has diabetes.
>
> **[2:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=131)** One of the features is the age of the patient.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=134)** X stands for a feature and Y stands for a target.
>
> **[2:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=138)** So the probability of X or P of X is the probability that a given feature value appears in the population.
>
> **[2:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=148)** So if 40% of the patients are over the age of 50, then the probability of age greater than 50 would be 40%.
>
> **[2:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=158)** Similarly, the probability of Y or P of Y is the probability that a given target value occurs in the population.
>
> **[2:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=168)** So if 10% of the patients have diabetes, then the probability of diabetes equals true is 10%.
>
> **[2:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=177)** We then look at conditional probabilities.
>
> **[2:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=179)** The probability of X given Y or P of X by Y, means how often a given value of X occurs when a given value of Y occurs.
>
> **[3:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=192)** This means the percentage of the time where age is greater than 50, where the patient also has diabetes.
>
> **[3:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=200)** The reverse conditional probability is P of Y bar X.
>
> **[3:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=205)** This is the probability that the patient has diabetes when their age is greater than 50.
>
> **[3:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=211)** The joint probability of X and Y is the percentage of time that both X and Y values occur in the dataset.
>
> **[3:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=219)** In this example, it is the percentage of time that a patient has diabetes, and their age is also greater than 50.
>
> **[3:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=228)** The probability of Y given X or P of Y by X is computed as the joint probability of X and Y divided by the probability of X.
>
> **[4:01](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=241)** This is the formula that indicates the relationships between a specific value for a feature, and a specific outcome for the target.
>
> **[4:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=251)** Drift happens when the probability P of Y given X changes in the real world, but the model does not reflect the same.
>
> **[4:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=260)** For example, let's say, after the model is developed and deployed, a magical medication for diabetes is introduced because of which patients above the age of 50 mostly recover from diabetes.
>
> **[4:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=275)** The model will not be in-sync with the change, and will continue to predict with its older assumptions.
>
> **[4:42](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=282)** Hence, it'll drift and decay.
>
> **[4:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/introduction-to-model-drift?u=76281980&t=284)** We will explore drift further in the remaining videos in this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (2)
> **Definitions:** stands for (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Concept drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=0)** - [Instructor] There are two types of drifts that can happen in machine learning, namely Concept Drift and Feature Drift.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=8)** Let's discuss concept drift in this video.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=11)** A machine learning model essentially captures the relationship between the features and the target, and uses this information to make predictions.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=21)** A concept drift occurs when the relationship between the features and the target changes over time.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=29)** As a result, the model is no longer able to predict accurately, and needs to be retrained.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=36)** In the formal of our conditional probability of Y given X, when the joint probability of X and Y changes, concept drift occurs.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=47)** For example, let's say in the real world a patient has diabetes 80% of the time when their age is greater than 50.
>
> **[0:56](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=56)** A model built on such data will also predict the same.
>
> **[1:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=60)** Let's say for five months the ground truth holds good, and the model predicts with the same level of accuracy.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=67)** By the sixth month, a new medication for diabetes lowers (indistinct) levels and changes the probability of being diabetic when the age is greater than 50 to just 50%.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift?u=76281980&t=80)** The old model built on the old data will continue to predict that 80% of those above 50 as diabetic, and hence will turn inaccurate, this is concept drift.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Feature drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=0)** - [Instructor] Having discussed concept drift, let's now focus on the other type of drift called feature drift.
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=7)** A feature drift occurs when the distribution of values or classes of features changes over time.
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=15)** This indicates a change in the features that are different from those that were used for model training.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=22)** Looking at the conditional probability formula, here there is a change in the probability of X for feature drift.
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=30)** One important question is whether the occurrence of a feature drift would also mean that a concept drift is also happening.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=39)** There may be a concept drift, or they may not be.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=43)** A change P of X may be accompanied by an equivalent change in the joint probability of X and Y, leaving probability of Y and X unchanged.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=54)** Let's look at some examples of feature drift.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=57)** In the same example of predicting whether a patient is diabetic, let's look at the distribution of classes over a few months.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=66)** In the first three months, patients with age greater than 50 comprise about 40% of the population.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=72)** In the months 4 and 5, it drops to 15%.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=77)** This is a change in the distribution of classes, and it's called feature drift.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=82)** During the same period, the percentage of patients under 20 does not change.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=88)** Let's look at another feature called patient weight, which is a continuous variable.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=94)** The box plot shows the distribution of weight values for two months.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=99)** Looking at the weights of patients in the first months, the values ranged from a little above 100 to close to 200.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=107)** In the second month, it ranges from 120 to 240.
>
> **[1:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=112)** As seen from the box plot, there is a significant change in the distribution of values.
>
> **[1:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=118)** This is, again, feature drift.
>
> **[2:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=120)** Just because the distribution changes, it does not mean that the predictions would be impacted.
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=126)** As long as the model predicts the same when age is greater than 50, data drift would not impact model accuracy.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift?u=76281980&t=134)** But when it's not possible to measure concept drift because the two labels are not available, feature drift can be an indicator for potential concept drift.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)

#### What causes drift?
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=0)** - [Instructor] Why does drift occur after a model has been deployed in production?
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=5)** Let's begin with concept drift.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=8)** What causes concept drift in real scenarios?
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=11)** There are multiple reasons.
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=13)** There could be changes in the ecosystem that may trigger changes in behavior of the subjects.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=20)** For example, a new marketing campaign with deep discounts may increase conversion rates.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=27)** A new demographic may start buying more.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=31)** There could be cyclic and seasonal variations that are not covered in the training data.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=37)** For example, during the school reopening season, the sale of school supplies will go up.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=43)** If a model predicting school supplies did not consider this seasonal variation, it'll be inaccurate during the season.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=51)** Another reason is that the training data is not from the same population as production data.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=58)** This includes data distribution and frequency.
>
> **[1:01](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=61)** In such cases, drift may not be immediately noticed after deployment.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=67)** What causes feature drift?
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=69)** There could be a change here in the population mix of entities.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=74)** Some demographics may be more active in a given time period.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=78)** Some products may be sold more than expected.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=82)** For example, during COVID, sale of hand sanitizers increased multi-fold.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=88)** There can be some changes in application logic in upstream data creators and processors that may change the distribution.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=97)** Some new classes or categories may be introduced, which the model may not be aware of.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=104)** There can be errors in data generation and processing.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=107)** That is introducing skewed or random values into the data stream.
>
> **[1:53](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/what-causes-drift?u=76281980&t=113)** Equipment errors, data pipeline errors, and missing data errors can all cause deviation in feature data.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Code Keywords:** let (1)
> **Env Vars:** covid (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Drift remediation process
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=0)** - [Instructor] How do we detect and fix drift issues with our models?
>
> **[0:04](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=4)** Let's look at a typical drift remediation process.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=8)** It starts with detecting drift in the models in production.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=12)** For these, we need to add instrumentation to our models to collect necessary data.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=19)** We may have to add manual or automated labeling to understand the ground truth.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=24)** Based on this, we need to set up drift tracking processes and pipelines and analyze drift periodically.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=32)** Then we get to identifying the root causes of drift.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=36)** For this, we analyze the changes in relationships between the feature and the target variables in the ecosystem.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=43)** We additionally explore input data issues in production and possible training data issues.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=50)** Once the root causes identified, we need to fix the issue.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=54)** This may include augmenting or replacing the current training datasets.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=59)** We would also have to retrain the model with this updated training dataset.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=65)** We may have to also fix other application issues that may be causing issues with input data.
>
> **[1:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-remediation-process?u=76281980&t=71)** Having discussed the concepts around drift, let's analyze drift with some examples in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Detecting Model Drift

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Detecting concept drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=0)** - [Lecturer] What techniques are available to detect concept drift?
>
> **[0:04](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=4)** Measuring concept drift is a straightforward activity.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=8)** For these, we need to instrument the machine learning services to collect predictions made by them and also the associated ground truth.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=17)** Ground truth is the actual values for the predictions made.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=21)** For example, if the model predicts that a customer has a high propensity to buy a product, ground truth is the validation that the customer actually bought the product.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=32)** With predictions and ground truth, we can then compute scores like accuracy, F1, precision, and recall.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=40)** Then we compare the absorbed values of scores between production and training.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=46)** We need to compute these scores periodically, say every month, and analyze if the score stays stable or if they deviate.
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=55)** Concept drift happens if there is a significant deviation that persist over multiple time intervals.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=63)** Concept drift is the best measure to understand if the model is not working to expectations.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=69)** But there are serious challenges in measuring it.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=73)** Concept drift requires the ground truth for inferences that are made in production.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=79)** But ground truth labels are not available ready-made in most of the cases, hence, we cannot compute any of these metrics for drift.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=89)** There are some options that exist for generating ground truth.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=93)** Sometimes the downstream processing activities may provide the ground truth.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=98)** For example, if we are predicting if a customer will buy a product, we can validate that once the customer finishes their shopping experience.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=108)** We can use manual human labeling where a person can look at the information and provide the ground truth labels.
>
> **[1:56](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=116)** This can be very expensive.
>
> **[1:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-concept-drift?u=76281980&t=118)** There are also automated labeling tools today that help in mass labeling, but they suffer from accuracy challenges when compared to human labeling.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [lecturer] (1)

#### Concept drift detection example
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=0)** - [Instructor] Let's now explore concept drift with an example.
>
> **[0:04](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=4)** In this example, we will simulate concept drift for the model, and then analyze changes in feature target relationships.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=12)** The code for this chapter is in the code_03_XX Drift Detection Example Python notebook.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=20)** Let's load the notebook now.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=25)** We will first install all the dependency packages for this chapter.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=29)** These exercises need pandas, scikit-learn, and alibi-detect packages.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=38)** We have training data available in the file credit-approval-training-data.csv.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=45)** We load this file.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=47)** The data contains information about credit card applications and whether they are approved or not.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=54)** There are four feature variables, namely age range, income category, race, and credit rating.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=62)** To keep things simple, all four of them are converted into categorical features.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=68)** There are three classes in age range, four in income category, five in race, and six in credit rating.
>
> **[1:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=76)** The target is the approved Boolean variable.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=80)** To train this model, we first split the features and the target as train and test sets.
>
> **[1:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=88)** We then proceed to build a Naive Bayes model using scikit-learn.
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=92)** We then check the classifier accuracy.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=95)** It's about 93%.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=97)** Then, we have production live data captured in the credit-approval-prod-data.csv.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=104)** This also has the ground truth label for the approved flag.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=108)** We use the credit approval model to credit approvals for the production data.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=114)** Then, we compute the accuracy of these predictions using the ground truth.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=119)** This comes to 38%, so there is a significant change in the overall predictions performance from 92% to 38%.
>
> **[2:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=130)** This is considered concept drift.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=134)** To explore the root cause, let's now do a correlation analysis between the target and the features.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=141)** We do it for both the training data and the production data and compare the changes.
>
> **[2:26](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=146)** We see that there is a significant change in age range and credit rating.
>
> **[2:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=152)** This means there are changes in the real world where age and credit ratings are being treated differently than what was available in the training data to approve a loan.
>
> **[2:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/concept-drift-detection-example?u=76281980&t=163)** Now, the model requires retraining with the new data captured.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **File Paths:** credit-approval-training-data.csv (1), credit-approval-prod-data.csv (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Detecting feature drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=0)** - [Instructor] Having discussed detecting concept drift, let's now discuss the techniques for detecting feature drift.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=6)** There are exploratory techniques for analyzing if feature drift is happening for a given feature variables.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=14)** In this case, we compare the feature value distributions between the training and production datasets.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=21)** For categorical features, we can use histograms and pie charts for visual inspection.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=27)** For continuous features, we can use quartiles and box plots.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=32)** In the chart, we compare the distribution of product classes between the training data and production data.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=40)** We see that printers have increased in production while keyboards have decreased significantly.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=46)** Now, this may or may not lead to a corresponding concept drift.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=51)** How do we measure drift over a large number of feature variables?
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=55)** There are a few popular techniques used.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=58)** Popular machine learning libraries support computation of these measures out of the box.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=63)** All these techniques require the training dataset and the production dataset to compare class distributions.
>
> **[1:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=71)** Chi-square test is a popular legacy technique used for feature drift.
>
> **[1:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=76)** Other techniques include the Kolmogorov-Smirnov test, or KS test, and maximum mean discrepancy, or MMD.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=86)** Several variations of these techniques are also possible.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=90)** You can also build a drift detection classifier or regressor that can predict if drift exists between these datasets.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-feature-drift?u=76281980&t=99)** Building a custom classifier would require investments in creating and labeling training datasets, though.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (1), case, (1)
> **Env Vars:** mmd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Feature drift detection example
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=0)** - [Instructor] We will now look at examples of detecting and analyzing feature drift.
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=6)** For this, we will use the same training and production datasets that we have loaded up in our earlier example.
>
> **[0:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=13)** We first begin by doing histograms for all the categorical features in both the training and production datasets.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=21)** Both datasets have 1,000 samples.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=24)** If we look at the histograms, we can see that age range and income category shows significant distribution changes.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=33)** For example, in age range, training data has more samples for category 1 then production data.
>
> **[0:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=40)** Similarly, category 3 has increased in count in production.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=45)** Race and credit ratings have not shown any significant changes between these two datasets.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=51)** Let's now also measure drift using chi squared distribution using the Alibi Detect library.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=58)** For this we first create a drift detector using the training features.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=63)** The key information to pass here is the p-value as a threshold.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=68)** The p-value is the measure of similarity between the two datasets.
>
> **[1:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=73)** A value of 0.05 means if the p-value is less than 0.05, then drift exists in the dataset.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=81)** We use the predict method to compute the p-value and then compare it to the threshold and print if there is drift or not.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=90)** We see that the p-value for both age range and income category are very low, and hence we have drift.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=97)** On the other hand, race and credit rating have high values.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=101)** This correlates with the visual analysis we did with the histograms.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/feature-drift-detection-example?u=76281980&t=106)** I highly recommend that learners explore more on chi squared to understand the math behind the drift predictions.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1), pass (1)
> **Versions:** 0.05 (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Detecting drift in text and images
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=0)** - [Lecturer] Natural language processing and computer vision models are increasing in popularity as deep learning techniques are becoming democratized.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=10)** Drift can happen in these models.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=12)** Let's explore how drift detection is different for NLP and computer vision compared to classical machine learning.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=20)** We start with concept drift.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=23)** For classification problems, it is the same as structure data or classical machine learning.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=29)** We are only using the class ground truths and predictions, which are numeric irrespective of the type of features, so we can still compute accuracy scores to measure drift.
>
> **[0:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=41)** What about generative AI like text summarization or image generation?
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=46)** In this case, we need reference text or images that are the desired outcome or ground truth.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=54)** Then we compare the ground truth and the generated data to measure similarity using similarity measures.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=62)** The level of similarity is tracked over time to detect drift.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=66)** How do we measure feature drift in text data?
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=70)** Unlike structured data, free text has several tokens that makes it harder to make one-to-one comparisons.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=78)** The first technique is to use each unique token as a feature.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=82)** Then we can compare token frequencies between training and production data sets.
>
> **[1:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=89)** The token becomes the feature name and the count becomes the value.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=93)** Then we can use the same technique as structured data to measure drift.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=98)** Another technique for feature drift in text is to build a domain classifier.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=104)** In this case, we will combine the training and production data sets into a single dataset.
>
> **[1:50](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=110)** We will use the source of data, whether it's training data or production data, as the target label.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=117)** Then we build a classifier on this data set to predict the label.
>
> **[2:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=122)** If the classifier can predict with high levels of accuracy, it means that the training and production data sets have distinct characteristics and hence, there is drift.
>
> **[2:13](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=133)** On the other hand, if the model struggles to differentiate, then it means that there is no drift happening.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=141)** How about feature drift in images?
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=144)** Here, we can convert each pixel position to a feature.
>
> **[2:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=148)** Then a five by four image will have 20 features.
>
> **[2:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=152)** The RGB value for the pixel becomes the value of the feature.
>
> **[2:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=157)** For very large image sizes, dimensionality reduction techniques, like principle component analysis, can be used to reduce the number of features.
>
> **[2:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=167)** Then we use the same methods as structured data to measure creature drift.
>
> **[2:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/detecting-drift-in-text-and-images?u=76281980&t=172)** We can also build a domain classifier similar to text for images to detect drift.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1)
> **Env Vars:** nlp (1), rgb (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Speakers:** - [lecturer] (1)

#### Software for drift detection
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=0)** - [Instructor] There are several out-of-the-box drift detection products and libraries that are available for detecting drift.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=9)** Let's quickly explore a few of them.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=12)** Machine learning platforms like AWS, GCP, and Ajar have their own drift detection capabilities.
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=19)** [Seldon.io](https://Seldon.io) is an open-source software that contains the alibi-detect library, which can be used for drift detection.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=28)** TorchDrift is available in PyTorch for drift detection.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=33)** Scikit-multiflow can also help with drift detection.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=38)** TensorFlow data validation helps to detect drift in TensorFlow-related use cases.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/software-for-drift-detection?u=76281980&t=44)** There are of course a number of commercial MLOps offerings that bundle in drift detection capabilities.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), gcp (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **URLs:** [seldon.io](https://seldon.io) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Drift Monitoring Process and Best Practices

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Drift monitoring pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=0)** - Having discussed techniques for detecting drift in the previous chapter, let's discuss the process and best practices for drift monitoring in this chapter.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=12)** Let's begin with creating a drift monitoring pipeline.
>
> **[0:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=16)** A robust drift monitoring pipeline is key to effective measurement and detection of drift metrics.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=24)** What does a typical drift monitoring pipeline look like?
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=29)** We begin with the ML service or model that is used for inference in the production environment.
>
> **[0:36](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=36)** For each inference request, the service needs to be instrumented to collect the features used and the predictions obtained.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=45)** This information is then pushed into a drift database.
>
> **[0:49](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=49)** There could be data collection, chewing and consolidation processes that may be used to achieve this goal in a large cluster.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=58)** Then, labeling may be used to add ground truth or true labels to the captured data.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=66)** This can be done by manual or automated labeling.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=70)** Using the ground truth and predictions, we can compute concept drift measures like accuracy and F1.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=77)** This information is computed over several time intervals to observe the trend.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=83)** Similarly, using the features from inference, we can also compute feature drift measures over multiple time intervals.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=93)** The metrics can be provided to the user through an analytics dashboard.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=97)** The dashboard helps the data scientists understand if drift is happening and if it requires retraining.
>
> **[1:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=105)** There can be automated alerts too if drift is observed beyond a set threshold.
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/drift-monitoring-pipeline?u=76281980&t=111)** This pipeline can be used to observe multiple models deployed in production.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** previous chapter (1)
> **Speakers:** - having (1)

#### Analyzing drift trends
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=0)** - [Instructor] What are the best practices in analyzing drift?
>
> **[0:04](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=4)** An important decision to make is in choosing the right time intervals for drift measurement.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=10)** Note that this interval may be different from model to model.
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=15)** Choosing the right interval is critical for accurate and yearly detection of drift.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=21)** The interval may be calendar-based.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=23)** We can compute drift on a daily, weekly, or monthly basis.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=28)** We can also compute based on the number of samples observed.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=32)** We can compute drift for every 1,000 inference data points collected.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=38)** We need to ensure that there are enough data points in each interval so that it aids reliable drift results.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=46)** If there are too few samples in an interval, the drift measurement may not be stable, and we will observe oscillating drift numbers between the intervals.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=57)** On the other hand, if the interval is too high, drift measurement will be stable, but the drift can go undetected for a long time, impacting the effectiveness of the process.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=68)** At each interval, drift is computed, and the summary statistics observed is persisted to a database for future reference.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=77)** What is the process of analyzing drift over time?
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=81)** To begin with, we will always see some amount of drift for all models, but we need to decide if that is significant enough to take corrective action.
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=92)** For this, it is recommended to set threshold bands for normal and abnormal drift.
>
> **[1:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=98)** If the drift goes out of band, then action should be taken.
>
> **[1:42](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=102)** In the example to the right, the threshold is set at 20%.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=106)** Look for drift over consecutive time intervals to ensure that the drift stays outside the threshold.
>
> **[1:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=114)** Analyze if drift stays consistently outside the threshold.
>
> **[1:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=119)** In this example, Drift B goes out of threshold and stays there, but Drift C comes back inside the threshold after going out once.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=129)** Take action when drift stays consistently outside the threshold.
>
> **[2:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/analyzing-drift-trends?u=76281980&t=134)** In the example shown, only Drift B stays outside and needs corrective action.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** this, (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Discovering root causes for drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=0)** - [Instructor] Once we have determined that there is drift and corrective action is needed, we need to find out the root cause for the drift.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=9)** There are several types of drift trends observed for both feature and concept drift.
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=15)** The symptoms determined what the potential root causes are.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=20)** First, there is sudden concept drift.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=23)** This is an abrupt change in drift values at a given interval and then drift stays outside in the future intervals.
>
> **[0:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=32)** This is usually because of a change in the business ecosystem that has impacted the relationships between the features and the target.
>
> **[0:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=41)** The fix here is to analyze and retrain the model.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=45)** Next, there could be a sudden feature drift where there is an abrupt change in feature drift values.
>
> **[0:53](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=53)** There could be many reasons here, but mostly associated with feature data generation and processing in production.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=62)** There could be equipment errors producing incorrect data.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=66)** There could be data processing errors.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=68)** There could be changes in user behavior.
>
> **[1:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=71)** It is required to fix the source issues and then ensure that the data errors are corrected.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=78)** Next, there could be cyclic or seasonal concept drift.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=82)** Here, drift goes outside the threshold at specific days or times, but comes back to normal in other intervals.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=90)** The root cause here is that there is seasonal user behavior during these times, like weekends or holiday seasons.
>
> **[1:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=99)** The recommendation here is to add the time element to the feature data and retrain the model so the model is sensitive to the time interval too.
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=109)** Finally, there can be gradual drift where the drift increases slowly over time.
>
> **[1:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=115)** This can be due to gradual change in business or user behavior or equipment degradation.
>
> **[2:01](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/discovering-root-causes-for-drift?u=76281980&t=121)** Again, this needs retraining or repairing the source based on the root cause.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Retraining to overcome drift
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=0)** - [Instructor] What are the best practices in retraining the model to overcome drift?
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=5)** The first important step is to update the training data to accommodate for the changes in feature target relationships.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=14)** Analyze the business change that has happened.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=17)** Use the help of domain experts to understand and categorize this change.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=23)** Determine how much of the training data needs to be updated or replaced.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=28)** Is the change happening in a specific class or across the board?
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=33)** Do we need to replace the entire training data set or simply make additions to it?
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=39)** Remove use cases that are no longer applicable in the training data set.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=44)** Add new use cases that have popped up after the last model training cycle.
>
> **[0:49](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=49)** Ensure that data distributions are balanced for each of the features after doing the additions and subtractions.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=58)** Review the training, validation, and test splits to ensure that they are random and balanced.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=65)** How about retraining the model?
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=67)** If changes are being made to the model type, architecture, or hyperparameters, it should be gradual.
>
> **[1:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=75)** Try changes one at a time to understand their impact on model performance.
>
> **[1:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=80)** Ensure that the updated model works equally well for existing, as well as new use cases.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=87)** It's important to keep the balance and not over-fit for the new use cases.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=93)** Test against production data where drift was observed previously and see if drift is eliminated now with the new model.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=101)** Aggressively monitor the new model for some time to ensure that drift has been alleviated.
>
> **[1:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=108)** See if there are other problems that bubble up with the new model.
>
> **[1:53](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=113)** This concludes our discussions around machine learning drift.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/retraining-to-overcome-drift?u=76281980&t=117)** We will discuss bias and fairness in the next two chapters.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** type, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. Introduction to Model Bias

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Fairness and bias
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=0)** - Bias in a business context impacts specific demographics or classes unfairly denying them opportunities and benefits.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=11)** The bias we have as humans will also extend to the data we create and the models that are trained on that data.
>
> **[0:20](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=20)** Let's now discuss fairness and bias in machine learning and how we can manage and overcome it while building and serving machine learning models.
>
> **[0:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=31)** What is bias in common terms?
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=34)** Bias is considered prejudice against someone or something that influences opportunities and outcomes in ways it is not intended to.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=45)** Bias typically happens based on identities or traits, like gender, race, and age.
>
> **[0:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=52)** How does bias impact business?
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=55)** Business decisions may sometimes be influenced by bias towards someone or something.
>
> **[1:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=62)** Hiring, providing opportunities, determining benefits, rewards, and approval processes may be influenced by bias for or against a specific identity.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=74)** For example, a hiring manager may prefer younger candidates and may bias against older ones.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=81)** Several factors can cause bias among humans in a business context.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=86)** They may be race, gender, age, ethnicity, or wealth.
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=91)** Business decision makers may prefer those who belong to the same identity as theirs.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=97)** Bias can be intentional or unintentional.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=101)** Preconceived opinions may influence how humans make business decisions.
>
> **[1:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=107)** Bias in a business context impacts specific demographics or classes unfairly denying them opportunities and benefits.
>
> **[1:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-and-bias?u=76281980&t=117)** The bias we have as humans will also extend to the data we create and the models that are trained on that data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - bias (1)

#### Fairness in ML
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=0)** - [Instructor] How do we ensure fairness in the models we build based on real world data?
>
> **[0:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=6)** Let's first define fairness in machine learning.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=9)** Fairness in machine learning is the process of ensuring that the model provides all individuals with equal opportunity and does not bias or generalize based on certain demographics or traits.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=25)** Why is it important to ensure fairness in machine learning?
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=30)** It helps build trust with the customers.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=33)** When customers believe that the product behaves in a fair manner and does not discriminate, it builds confidence in the product, and hence, brings in more revenue.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=44)** Fairness helps build and maintain the reputation of the organization in the public eye.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=50)** This, again, is important in growing the business.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=54)** Several legal and regulatory requirements exist around fairness.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=59)** Adherence to these requirements avoids legal issues and monetary penalties for the organization.
>
> **[1:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/fairness-in-ml?u=76281980&t=66)** In this and the next chapter, we will introduce the basic concepts around bias and fairness, and also demonstrate how to monitor bias using popular open source libraries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), public (1), this, (1)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)

#### Sources of ML bias
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=0)** - [Instructor] How does bias enter into the machine learning process and models?
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=5)** Let's discuss some key sources of bias in the machine learning process.
>
> **[0:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=10)** The first type of bias is data selection bias.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=14)** Data for machine learning is usually obtained from a manual process where the outcome is determined by a human.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=21)** If that human made decisions in a biased manner, then the training data will also reflect that bias.
>
> **[0:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=30)** The model built off that training data will carry over the same bias.
>
> **[0:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=35)** The next type of bias is group attribution bias.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=39)** This is generalization of a behavior based on specific attribute values.
>
> **[0:45](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=45)** In ML training, this happens by using some protected attributes like race and gender.
>
> **[0:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=52)** The next one is human bias.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=54)** This is the bias that data scientists themselves exhibit when they expect certain outcomes based on biased hypothesis.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=63)** For example, a data scientist may think that older men will make more money than young women.
>
> **[1:10](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=70)** If the model testing generates results against this assumption the data scientist would reject that model as faulty.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=78)** Finally, there is benchmarking bias.
>
> **[1:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=81)** Benchmarking is usually done using a sample.
>
> **[1:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/sources-of-ml-bias?u=76281980&t=85)** If that sample does not represent the entire population in a balanced manner, then benchmarking results may also be biased.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), protected (1), finally, (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Protected attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=0)** - [Instructor] Having discussed some background on bias and fairness in machine learning, let's discuss some key concepts.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=8)** The first one is the protected attribute.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=11)** What are protected attributes in business?
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=15)** These are the features, characteristics, identities or traits of an individual that should not be used for making business decisions.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=25)** While there are some common lists of such features, the list would vary based on the organization and based on the use case.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=34)** This list of features is selected based on legal or regulatory requirements, ethical guidance, or organizational policies.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=44)** The organization may still collect this information, but these will not be used for any kind of decision-making, either by humans or machine learning models.
>
> **[0:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=55)** Here is a list of key protected attributes: race, religion, gender, age, marital status, and economic status.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=65)** An attribute may be a protected attribute in some cases, while it may not be in others.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/protected-attributes?u=76281980&t=72)** For example, economic status would not be considered for making an admission decision in a college, but can be used for deciding on a scholarship.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (4), let (1), case. (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Demographic parity
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=0)** - [Instructor] Next, we look at the concept of demographic parity.
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=5)** What is demographic parity?
>
> **[0:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=7)** Each protected attribute can have multiple classes or values.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=12)** For example, marital status is a protected attribute that can have classes like single, married, widowed or divorced.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=22)** Some classes in protected attributes are considered privileged demographics.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=28)** This is because they have historically had unfair advantages over other unprivileged demographics.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=37)** For example, when it comes to the privileged attribute gender, men may have had historical advantage over women when it comes to employment in a given organization.
>
> **[0:50](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=50)** Men could be considered a privileged class while women could be considered unprivileged in this regard.
>
> **[0:58](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=58)** Demographic parity requires that equal opportunity or outcomes be given to both the privileged and unprivileged demographics.
>
> **[1:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=68)** Let's look at an example for demographic parity.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=72)** Let's say we have a job candidate data set with a race attribute.
>
> **[1:18](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=78)** There are five different class values for the races.
>
> **[1:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=82)** Race one and race two are considered privileged.
>
> **[1:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=85)** Race three, four, and five are considered unprivileged.
>
> **[1:30](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=90)** Suppose we are hiring.
>
> **[1:31](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=91)** In the first example, we see that candidates belonging to the privileged demographics are hired 26% of the time.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=100)** Candidates from the unprivileged demographic are hired 25% of the time.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=106)** These are more or less equal and considered as demographic parity.
>
> **[1:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=111)** On the other hand, if the candidates from privileged demographics are hired 38% of the time and unprivileged demographics are hired 16% of the time, then demographic parity does not exist.
>
> **[2:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/demographic-parity?u=76281980&t=127)** This is considered biased against the unprivileged races.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (3), let (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Bias Detection and Best Practices

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Bias detection techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=0)** - [Instructor] Having discussed the basics of machine learning bias in the previous chapter, let's explore ways to detect and overcome bias.
>
> **[0:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=9)** In this chapter, we will begin with bias detection processes and techniques.
>
> **[0:15](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=15)** What does the bias detection process look like?
>
> **[0:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=19)** First, identify the protected attributes in the dataset.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=23)** This can be done through exploring the schema of the training dataset.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=28)** For each of the protected attributes, identify the privileged and unprivileged classes.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=34)** Create proxy binary attributes for the protected attribute.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=39)** This will be a new attribute with values of one for the privileged classes and zero for the unprivileged classes.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=48)** In cases where the original attribute is a continuous attribute, use bin to convert it into equivalent binary attributes.
>
> **[0:57](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=57)** Then use these proxy attributes with bias detection techniques that we will discuss in the next slide.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=65)** Most bias detection techniques use these proxy attributes to understand which records represent the privileged and unprivileged classes and generate measures to compare the model performance between them.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=79)** What are some of the common techniques to understand bias?
>
> **[1:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=84)** First, there are class imbalance measures.
>
> **[1:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=87)** This can be a simple histogram to compare if the privileged and unprivileged classes have equal representation in the training data set, and that one does not dominate the other during the modeling process.
>
> **[1:42](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=102)** Then comes the demographic disparity measure that helps understand model performance by each demographic.
>
> **[1:50](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=110)** Another popular measure is the equal opportunity score which checks if the privileged and unprivileged classes have equal opportunities for getting positive outcomes.
>
> **[2:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=122)** You can compare model accuracy differences between these classes.
>
> **[2:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=127)** Similarly, you can compare recall differences between the classes to understand if bias plays a role in the model outcomes.
>
> **[2:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=136)** In this chapter, we will explore equal opportunity scores in detail and do an exercise in Python.
>
> **[2:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-techniques?u=76281980&t=144)** I highly recommend learners to use supplemental reading on the other techniques mentioned.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (3), let (1)
> **Cross-References:** previous chapter (1), in the next (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Equal opportunity score
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=0)** - [Instructor] Let's explore the concepts around equal opportunity score in detail now.
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=5)** Equal opportunity score, or EOS for short, is a popular technique in measuring bias for a machine learning model.
>
> **[0:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=14)** EOS helps analyze if a model treats both the privileged and unprivileged classes equally.
>
> **[0:22](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=22)** It ensures that the model performance is independent of the protected attributes.
>
> **[0:27](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=27)** In other words, the outcomes from the model should not depend upon the protected attribute.
>
> **[0:34](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=34)** The EOS values range from zero to one.
>
> **[0:37](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=37)** The closer the score is to one, the lower the biases.
>
> **[0:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=41)** The closer the score is to zero, the higher the biases.
>
> **[0:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=46)** For EOS to be computed, protected attributes need to be converted into binary classes as discussed earlier.
>
> **[0:54](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=54)** EOSs works by building a classification model with the binary attributes and then analyzing the outcome attribution to the protected attributes.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=65)** Let's explore the math behind the EOS score now.
>
> **[1:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=69)** Here we compute the unprivileged probability and privileged probability.
>
> **[1:14](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=74)** Unprivileged probability is the probability of predicting a positive outcome when the true label is positive and the protected attribute is zero.
>
> **[1:26](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=86)** Privileged probability is the probability of predicting a positive outcome when the true label is positive and the protected attribute is one.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=95)** If both are equal, that means both the classes have equal probabilities.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=101)** The formula for EOS is computed by taking a minimum of the unprivileged probability divided by the privileged probability and the privileged probability divided by the unprivileged probability.
>
> **[1:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=115)** The second formula is the reverse of the first one, so if both probabilities are close to each other, then both the formulae will yield numbers closer to one.
>
> **[2:06](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=126)** The minimum will also be closer to one.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=129)** On the other hand, if the probabilities are far apart, then one of the formulae will provide a low value leading to the EOS value being low.
>
> **[2:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=139)** Let's consider an example.
>
> **[2:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=141)** If the unprivileged probability is 0.42, and the privileged probability is 0.41, the EOS score will be 0.97.
>
> **[2:32](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=152)** This is a really good fairness score.
>
> **[2:35](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=155)** In the second example, unprivileged probability is 0.41 and the privileged probability is 0.62.
>
> **[2:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=163)** EOS goes down to 0.66.
>
> **[2:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/equal-opportunity-score?u=76281980&t=166)** Let's now do a quick exercise to compute EOS for a simple example in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (6), let (4), yield (1)
> **Env Vars:** eos (10)
> **Versions:** 0.41 (2), 0.42 (1), 0.97 (1), 0.62 (1), 0.66 (1)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### EOS example
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=0)** - [Instructor] Let's do an example exercise for Equal Opportunity Score now.
>
> **[0:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=5)** The code for this exercise is available in the code_06_03 Equal Opportunity Score with sklego.ipynb Here, we first install the sklego package that contains functions for computing EOS.
>
> **[0:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=23)** Then, below the credit-approval-training-data.csv file that we used earlier for drift detection, we will identify two protected attributes here, namely AGE RANGE and RACE.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=38)** For both these attributes, we convert them into binary variables.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=43)** For AGE_RANGE, we mark category three as privileged.
>
> **[0:48](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=48)** For RACE, we mark categories one and two as privileged.
>
> **[0:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=52)** Then, we build a naive_bayes model, and print the accuracy of the training classifier.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=59)** For computing equal opportunity scores, we use the equal opportunity score function.
>
> **[1:05](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=65)** We provide the sensitive column name as AGE_RANGE, the classifier, the features, and the true label.
>
> **[1:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=72)** The function will use the classifier and the features to predict the outcome, and compare it with the true label.
>
> **[1:19](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=79)** It computes the EOS score based on the formula we discussed in the previous video.
>
> **[1:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=85)** Looking at the results, we see that the equal_opportunity_score for Age Range and Race are closer to one.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=93)** Next, we repeat this exercise with another dataset, credit-approval-fair-data.csv.
>
> **[1:41](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=101)** We will follow the exact same steps and generate the EOS.
>
> **[1:46](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=106)** Here, we see that though the score for age range is high, the score for race is low.
>
> **[1:52](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/eos-example?u=76281980&t=112)** This means the model built on the new data set is biased for the race attribute.

> [!info]- Semantic Content
>
> **Env Vars:** eos (3), race (2), age_range (2), age (1), range (1)
> **Code Keywords:** function (2), let (1), protected (1)
> **File Paths:** credit-approval-training-data.csv (1), credit-approval-fair-data.csv (1)
> **Code Identifiers:** naive_bayes (1), equal_opportunity_score (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Bias detection software
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=0)** - [Instructor] Let's quickly review some of the popular software available for detecting bias and ensuring fairness.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=8)** These are the popular packages available today for fairness.
>
> **[0:12](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=12)** sklego is the package we used in the earlier example.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=17)** It's available as part of the scikit-learn family.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=21)** AI Fairness 360 is an open source package that is being supported by IBM.
>
> **[0:28](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=28)** Amazon SageMaker Clarify is a feature available within AWS that can help understand bias on models that are built using SageMaker.
>
> **[0:39](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=39)** VerifyML is an open source package that supports bias detection.
>
> **[0:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/bias-detection-software?u=76281980&t=44)** Fairlearn is another such package available.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** ibm (1), aws (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Overcoming bias in ML
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=0)** - [Instructor] We discussed how to detect bias in machine learning.
>
> **[0:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=3)** Let's now discuss some best practices to overcome bias.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=8)** We begin with discussing training data collection.
>
> **[0:11](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=11)** Training data is an important source of bias, so ensuring that the training data is unbiased is a great start to building fair models.
>
> **[0:21](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=21)** Training data needs to be validated for the existence of bias.
>
> **[0:25](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=25)** If the data originates from human decision making, then we need to understand and ensure that the decision making was fair.
>
> **[0:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=33)** Ensure that all scenarios are sampled equally in the training data.
>
> **[0:38](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=38)** This ensures fair representation for all demographics in the results.
>
> **[0:43](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=43)** Check for equal class representation for each attribute.
>
> **[0:47](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=47)** All classes should have sufficient representation in the data set.
>
> **[0:51](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=51)** Use bias detection techniques to check if there is inherent bias in the data set.
>
> **[0:56](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=56)** Next comes model training.
>
> **[0:59](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=59)** Remove all protected attributes from the training features.
>
> **[1:03](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=63)** Protected attributes should not be used for building models.
>
> **[1:07](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=67)** Even if protected attributes are removed, other attributes may have strong correlation to the protected attributes and hence can act as indirect proxies.
>
> **[1:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=77)** This relationship should be understood as proxy attributes may introduce bias in the model.
>
> **[1:23](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=83)** Additionally, after the model is built, check if correlation exists between the predictions of the model and the corresponding protected attributes.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=93)** Use human oversight to review results and see if possibilities of bias exists in the training process.
>
> **[1:40](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=100)** Finally, we need to look at models deployed in production.
>
> **[1:44](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=104)** Bias also need to be monitored in production data in addition to drift.
>
> **[1:49](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=109)** Bias detection techniques should be used periodically to check if bias exists in these predictions.
>
> **[1:55](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=115)** The input for both drift and bias reduction is the same so the same pipeline can be used.
>
> **[2:02](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=122)** Additionally, use human feedback as much as possible on the predictions to detect if the predictions are biased.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=129)** This feedback can come from the consumers of the predictions or by explicit sampling of results.
>
> **[2:16](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/overcoming-bias-in-ml?u=76281980&t=136)** This completes our course on model monitoring for drift and bias.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (5), let (1), finally, (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980&t=0)** - Now that you have learned about model monitoring for drift and bias, you can take your learning even further.
>
> **[0:08](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980&t=8)** First, explore the products and packages available for drift and bias monitoring which we listed in the course.
>
> **[0:17](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980&t=17)** Second, try building a drift and bias monitoring system for a model in your organization.
>
> **[0:24](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980&t=24)** AI always intrigues me. I bet it intrigues you too.
>
> **[0:29](https://www.linkedin.com/learning/mlops-essentials-monitoring-model-drift-and-bias/next-steps?u=76281980&t=29)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
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