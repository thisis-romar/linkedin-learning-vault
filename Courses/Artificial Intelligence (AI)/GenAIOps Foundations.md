---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: genaiops-foundations
url: "https://www.linkedin.com/learning/genaiops-foundations"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 4/11/2025
learners: 10999
skills:
  - AIOps
  - Generative AI
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEE981IlqLpkw/learning-public-crop_675_1200/B4EZW6KfLyG0AY-/0/1742585067102?e=2147483647&amp;v=beta&amp;t=7PKDQXLXCqk8_0WsWYakx0LWigxq0CMXCN8PUAZj4cQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]'
  - '[[Become an AI Engineer]]'
  - '[[Building Generative AI Skills for Developers]]'
prev_courses:
  - '[[Integrating AI into the Product Architecture]]'
  - '[[Understanding Generative AI in Cloud Computing- Services and Use Cases]]'
  - '[[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]]'
next_courses:
  - '[[AI Data Governance, Compliance, and Auditing for Developers]]'
  - '[[Foundations Of Responsible Ai]]'
  - null
path_nav: '[{"path":"Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning","position":6,"total":7,"prev":"Integrating AI into the Product Architecture","next":"AI Data Governance, Compliance, and Auditing for Developers"},{"path":"Become an AI Engineer","position":9,"total":10,"prev":"Understanding Generative AI in Cloud Computing- Services and Use Cases","next":"Foundations Of Responsible Ai"},{"path":"Building Generative AI Skills for Developers","position":7,"total":7,"prev":"RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance","next":null}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - topic/software-development
  - skill/aiops
  - skill/generative-ai
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/GenAIOps%20Foundations.md)

![GenAIOps Foundations](https://media.licdn.com/dms/image/v2/D4E0DAQEE981IlqLpkw/learning-public-crop_675_1200/B4EZW6KfLyG0AY-/0/1742585067102?e=2147483647&amp;v=beta&amp;t=7PKDQXLXCqk8_0WsWYakx0LWigxq0CMXCN8PUAZj4cQ)

# GenAIOps Foundations

> Generative AI is transforming the way enterprises deploy applications in production to improve efficiency. As businesses increasingly adopt GenAI tools in their workflows, the need for effective management, monitoring, and optimization of AI models and systems is crucial across the GenAI lifecycle. In this course, instructor Kumaran Ponnambalam helps to familiarize you with the GenAI lifecycle and

> [LinkedIn Learning](https://www.linkedin.com/learning/genaiops-foundations) | 1h 19m | Intermediate | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [GenAIOps foundations](#genaiops-foundations)
- [**1. GenAIOps Fundamentals**](#1-genaiops-fundamentals) (5 videos)
  - [The machine learning lifecycle](#the-machine-learning-lifecycle)
  - [The advent of generative AI](#the-advent-of-generative-ai)
  - [DevOps, MLOps and GenAIOps](#devops-mlops-and-genaiops)
  - [The GenAIOps lifecycle](#the-genaiops-lifecycle)
  - [Planning genAI projects](#planning-genai-projects)
- [**2. Model Training in Gen AI**](#2-model-training-in-gen-ai) (5 videos)
  - [Training phase in generative AI](#training-phase-in-generative-ai)
  - [Data for evaluaton and fine-tuning](#data-for-evaluaton-and-fine-tuning)
  - [Generative AI automation pipelines](#generative-ai-automation-pipelines)
  - [Model lifecycle management](#model-lifecycle-management)
  - [Evaluation and finetuning tracking](#evaluation-and-finetuning-tracking)
- [**3. Developing Gen AI Applications**](#3-developing-gen-ai-applications) (6 videos)
  - [The generative AI application stack](#the-generative-ai-application-stack)
  - [Prompt management](#prompt-management)
  - [Memory and embedding management](#memory-and-embedding-management)
  - [Agents management](#agents-management)
  - [Agent tools integrations](#agent-tools-integrations)
  - [Testing generative AI applications](#testing-generative-ai-applications)
- [**4. Model Deployment and Serving**](#4-model-deployment-and-serving) (5 videos)
  - [GenAI deployment patterns](#genai-deployment-patterns)
  - [Infrastructure planning](#infrastructure-planning)
  - [Generative AI deployment pipelines](#generative-ai-deployment-pipelines)
  - [Scaling generative AI deployments](#scaling-generative-ai-deployments)
  - [Guardrails deployments](#guardrails-deployments)
- [**5. Monitoring and Troubleshooting**](#5-monitoring-and-troubleshooting) (5 videos)
  - [Generative AI monitoring pipelines](#generative-ai-monitoring-pipelines)
  - [Metrics for generative AI](#metrics-for-generative-ai)
  - [Generative AI traces](#generative-ai-traces)
  - [Agent trajectories](#agent-trajectories)
  - [Troubleshooting generative AI model behavior](#troubleshooting-generative-ai-model-behavior)
- [**6. Security and Compliance**](#6-security-and-compliance) (5 videos)
  - [Ethics and compliance](#ethics-and-compliance)
  - [Protection against vulnerabilities](#protection-against-vulnerabilities)
  - [Toxicity and bias in generative AI](#toxicity-and-bias-in-generative-ai)
  - [Hallucinations](#hallucinations)
  - [Privacy protection in genAI](#privacy-protection-in-genai)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [GenAIOps foundations](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=0)** - [Kumaran] Applications using [[Generative AI]] are becoming increasingly popular.
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=5)** To build such applications in a systematic and efficient manner, we need GenAIOps.
>
> **[0:12](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=12)** I will take you through an overview of the concepts and elements of GenAIOps.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=18)** We will discuss the Gen AI application lifecycle and how it relates to [[DevOps]] and [[MLOps]].
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=25)** We will then discuss the essential processes for building and deploying Gen AI applications.
>
> **[0:32](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=32)** My name is Kumaran Ponnambalam.
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=34)** Let's get started with the concepts of Gen AI Ops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[DevOps]] (1), [[MLOps]] (1)
> **Speakers:** - [kumaran] (1)


### 1. GenAIOps Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [The machine learning lifecycle](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=0)** - [Narrator] Let's begin the course by reviewing the basic concepts of the machine learning lifecycle.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=7)** Machine learning is like [[Software Development]].
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=10)** In software development, we go through a structured process of [[Requirements Analysis]], design, development, testing, deployment, and operations.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=22)** Similarly, machine learning also has a structured lifecycle that goes from concept to production.
>
> **[0:29](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=29)** A machine learning application goes through a journey as it evolves.
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=34)** It starts from a concept where the goals for machine learning are determined, then the model is built.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=41)** The model is integrated into the application.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=45)** The model and the application are then deployed and used.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=49)** Continuous improvement happens to the model over time.
>
> **[0:53](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=53)** This is a cycle or iterative process where the steps are repeated over many times.
>
> **[0:59](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=59)** During the iterative process, the model is continuously refined for better performance and lower errors or bias.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=67)** Refinements are triggered by the availability of new training data, new use cases found, and model degradations noticed over time.
>
> **[1:17](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=77)** Let's review this lifecycle with a diagram.
>
> **[1:21](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=81)** We begin the ML lifecycle with identifying the requirements.
>
> **[1:25](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=85)** The requirements are typically for the application, which will use machine learning.
>
> **[1:31](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=91)** Within this, the parts of the requirements that apply to the model are identified.
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=96)** Then workflow design happens for the application within which the use of ML models are brought in.
>
> **[1:43](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=103)** This identifies the inputs available to the model and outputs expected from the model.
>
> **[1:50](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=110)** To build a model, we may need training data.
>
> **[1:53](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=113)** Training data is collected from available resources.
>
> **[1:57](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=117)** Raw training data goes through [[Feature Engineering]] to get it ready for model training.
>
> **[2:02](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=122)** Then model training kicks in.
>
> **[2:04](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=124)** The model is created based on the requirements and trained on the training data.
>
> **[2:10](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=130)** The created model is usually managed to control its versions and evolution.
>
> **[2:16](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=136)** The model then goes through test and evaluation to validate if it performs as per expectations.
>
> **[2:23](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=143)** If the performance is not satisfactory, the model is retrained.
>
> **[2:27](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=147)** This cycle continues until satisfactory results are obtained.
>
> **[2:32](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=152)** The model is then deployed in production along with the application and used for serving.
>
> **[2:38](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=158)** Data is collected from real model use in production.
>
> **[2:42](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=162)** This helps in diagnostics as well as identifying errors.
>
> **[2:46](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=166)** Production data may be used for training if new use cases are identified.
>
> **[2:52](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=172)** This goes through a labeling process.
>
> **[2:54](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=174)** The labeled data is then added to the training data set.
>
> **[2:58](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=178)** Now the cycle can repeat with feature engineering, training, evaluation, and deployment done with the updated training data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Feature Engineering]] (2), [[Requirements Analysis]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [The advent of generative AI](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=0)** - [Instructor] The ML world has been revolutionized with the advent of [[Generative AI]], or GenAI for short.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=7)** Generative AI is a subset of machine learning that deals with generating new content.
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=13)** This new content can be text, images, audio, or video.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=18)** Generative AI models learn from existing data and patterns.
>
> **[0:23](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=23)** They then use instructions to generate new content.
>
> **[0:27](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=27)** GenAI models are driving a new class of applications, namely, GenAI applications.
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=33)** These applications leverage [[Large Language Models (LLM)|large language models]], or LLMs for short.
>
> **[0:39](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=39)** They also leverage other GenAI technologies, like [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] and agents, to build enterprise solutions.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=48)** The lifecycle of GenAI applications are similar to other software [[Microsoft Products|products]].
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=55)** There are, of course, key differences, which we will address in this course.
>
> **[1:00](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=60)** Building GenAI applications require multi-[[Team Collaboration]], including [[Data Science]], machine learning, and engineering.
>
> **[1:09](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=69)** A coordinated execution plan is needed to execute all facets of the application, including data, models, and software code.
>
> **[1:19](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=79)** This requires processes and best practices for controlling the lifecycle.
>
> **[1:24](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=84)** It also needs automation and repeatability for improving efficiency.
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=90)** This course is focused on discussing such processes and best practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Large Language Models (LLM)|Large language models]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Microsoft Products|Products]] (1), [[Team Collaboration]] (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [DevOps, MLOps and GenAIOps](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=0)** - [Instructor] We hear the terms [[DevOps]], [[MLOps]], and GenAIOps when talking about processes for software engineering and machine learning.
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=10)** Let's review the definitions and differences between them.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=14)** DevOps is the foundation for [[Software Development]].
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=18)** It is critical for organizations building software.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=22)** It provides agility, organized collaboration, and efficiency to deliver high-quality software at speed.
>
> **[0:31](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=31)** What does DevOps entail?
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=33)** DevOps is a framework.
>
> **[0:35](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=35)** This framework consists of processes that define how work is done.
>
> **[0:40](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=40)** It has tools that help in assisting and automating this work.
>
> **[0:44](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=44)** It has best practices that are continuously refined to improve these processes.
>
> **[0:50](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=50)** The goal of DevOps is to deliver quality and reliability in software at enterprise scale.
>
> **[0:58](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=58)** DevOps improves efficiency of software development, deployment, and operations.
>
> **[1:05](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=65)** Machine learning operations, or MLOps for short, and [[Generative AI]] operations or GenAIOps for short are built upon the foundations of machine learning.
>
> **[1:17](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=77)** So what exactly are the differences between the three?
>
> **[1:22](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=82)** Let's begin with the list of software activities covered in DevOps.
>
> **[1:27](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=87)** DevOps deals with development of [[Software Integration]] between software functions, testing, automation, and deployment.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=95)** It also covers monitoring of deployed software, collecting tracers, and measuring metrics.
>
> **[1:43](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=103)** MLOps builds upon DevOps.
>
> **[1:46](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=106)** It covers all the activities of DevOps.
>
> **[1:49](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=109)** In addition, it also covers machine learning-specific activities.
>
> **[1:54](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=114)** This includes [[Feature Engineering]] for training data, automating ML with AutoML, data and model governance, experiment tracking, and model monitoring.
>
> **[2:07](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=127)** GenAIOps builds upon MLOps.
>
> **[2:10](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=130)** It covers all the activities of DevOps and MLOps.
>
> **[2:15](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=135)** In addition, it covers GenAI-specific activities too.
>
> **[2:20](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=140)** This includes model fine-tuning, [[Prompt Engineering]], synthetic data generation, chain and agent management, embeddings management, guardrails for GenAI, and integrating tools for agents.
>
> **[2:35](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=155)** In this course, we will focus on the GenAI-specific activities.
>
> **[2:40](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=160)** If you are not familiar with DevOps and MLOps, please check out the prerequisite courses mentioned in the course coverage and prerequisites document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (12), [[MLOps]] (6), [[Software Development]] (2), [[Generative AI]] (1), [[Software Integration]] (1)
> **Definitions:** is a  (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)

#### [The GenAIOps lifecycle](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=0)** - [Instructor] Let's now discuss the key activities in building out a Gen AI application.
>
> **[0:06](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=6)** This is the GenAI Lifecycle that drives GenAIOps.
>
> **[0:11](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=11)** As discussed in the previous video, the GenAIOps lifecycle depends upon the [[MLOps]] lifecycle.
>
> **[0:19](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=19)** It adds unique capabilities and activities that are specific to Gen AI.
>
> **[0:24](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=24)** A typical Gen AI project is expected to go through most, if not all the activities discussed here.
>
> **[0:32](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=32)** Let's discuss the GenAIOps Lifecycle now.
>
> **[0:35](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=35)** Similar to machine learning, the GenAIOps lifecycle also starts with the [[Requirements Analysis]] for the application or project.
>
> **[0:44](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=44)** In most Gen AI Projects, pre-trained Gen AI models are used.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=49)** They need to be evaluated or fine tuned for the project.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=54)** We need data for such [[Fine Tuning]] and evaluation.
>
> **[0:58](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=58)** If real world data is not available or is limited, synthetic data generation is used to augment this data set.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=67)** Pre-trained foundation GenAI models are acquired either from open source or from paid providers for the project.
>
> **[1:16](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=76)** This model then goes through evaluation and fine tuning using the data set collected for this purpose.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=83)** When the model's performance is found satisfactory, it is then promoted for application use.
>
> **[1:29](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=89)** [[Prompt Engineering]] is a key activity in GenAIOps that is required to adapt the model to perform the tasks required by the Gen AI application.
>
> **[1:40](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=100)** In addition, applications may use knowledge bases.
>
> **[1:44](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=104)** Source data needs to be processed and embedding representations need to be created.
>
> **[1:50](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=110)** These are then stored in vector or graph [[Databases]] for future use.
>
> **[1:55](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=115)** Similarly, [[AI Agents]] may need to be developed for the specific use case.
>
> **[2:01](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=121)** LLM chains may need to be built to execute workflows.
>
> **[2:05](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=125)** The model, databases, agents and chains are then integrated and deployed together as an application bundle.
>
> **[2:13](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=133)** To protect the application and ensure [[Ethics]] and compliance, guardrails may need to be added to the deployment.
>
> **[2:21](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=141)** The application, along with its models and data, is used for serving and processing user requests.
>
> **[2:29](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=149)** From the application, telemetry is collected.
>
> **[2:32](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=152)** This is then used to compute metrics and monitor the performance of the application and models.
>
> **[2:38](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=158)** The data collected may be used to enrich the fine tuning and evaluation dataset.
>
> **[2:44](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=164)** This lifecycle is iterative.
>
> **[2:46](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=166)** When new data is available, or when new foundation models are available, the process is repeated to improve the performance of the application.
>
> **[2:56](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=176)** This is a continuous improvement process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (3), [[Databases]] (2), [[MLOps]] (1), [[Requirements Analysis]] (1), [[Prompt Engineering]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** llm (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Planning genAI projects](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=0)** - [Narrator] What does it take to plan GenAI projects?
>
> **[0:04](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=4)** Planning and execution of GenAI projects closely resembles that of regular [[Software Projects]].
>
> **[0:12](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=12)** There are some key special considerations that need to be implemented.
>
> **[0:17](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=17)** What are these additional considerations?
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=20)** The first is stakeholder expectations.
>
> **[0:24](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=24)** Unlike software that is deterministic, GenAI models are probabilistic.
>
> **[0:30](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=30)** They are prone to errors and bias.
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=33)** Sometimes, the effects are severe.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=36)** Stakeholders need to understand the unique challenges with GenAI applications.
>
> **[0:42](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=42)** Expectations for the project need to be set accordingly.
>
> **[0:46](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=46)** Next, the requirements for the project need to be identified.
>
> **[0:51](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=51)** Requirements for a probabilistic model need to consider the expected range of results and how errors, expectations, and unexpected behavior will be handled.
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=62)** Executing a GenAI project needs a skillset that covers machine learning, [[Data Science]], software engineering, and [[DevOps]].
>
> **[1:11](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=71)** Skill requirements need to be assessed and a team needs to be assembled with the required skills.
>
> **[1:18](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=78)** The [[User Experience (UX)|user experience]] for GenAI applications is unique because it involves a lot of unstructured content.
>
> **[1:26](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=86)** Chances of user errors are higher.
>
> **[1:29](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=89)** Results need to be presented in a usable manner.
>
> **[1:32](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=92)** GenAI projects use several third-party [[Microsoft Products|products]].
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=96)** This includes foundation models, ML hosting platforms, [[Vector Databases]], and agentic tool integrations.
>
> **[1:44](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=104)** Managing these third-party integrations, their use, and cost is a key part of GenAI project planning.
>
> **[1:52](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=112)** An enterprise GenAI project needs to conform to the [[Responsible AI]] policies and processes of the enterprise.
>
> **[2:00](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=120)** This includes abuse, [[Ethics]], and safety considerations.
>
> **[2:05](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=125)** GenAI planning needs to factor in these requirements and ensure that they are incorporated into project execution.
>
> **[2:14](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=134)** Foundation models in GenAI are expensive to build and use.
>
> **[2:18](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=138)** It's easy for budget overruns if these are not planned and executed well.
>
> **[2:24](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=144)** Cost and budgeting control processes are a key to GenAI planning.
>
> **[2:28](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=148)** Similar to software projects, GenAI projects also have metrics.
>
> **[2:33](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=153)** This includes model metrics like perplexity, software metrics like latency, and [[Business Metrics]] like self-service rates.
>
> **[2:42](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=162)** These metrics need to be planned ahead and tracked during the project.
>
> **[2:46](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=166)** Having discussed the considerations for GenAI planning, let's now get into project execution with GenAI ops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Projects]] (2), [[Data Science]] (1), [[DevOps]] (1), [[User Experience (UX)|User experience]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)


### 2. Model Training in Gen AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Training phase in generative AI](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=0)** - [Presenter] In this chapter, we will explore the training phase in GenAI and how GenAIOps comes into play here.
>
> **[0:08](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=8)** How are training models different in GenAI compared to traditional machine learning?
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=14)** In GenAI, there are two key tasks, namely pretraining and fine-tuning in the training phase.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=22)** In pretraining, the goal is to create a GenAI model from scratch.
>
> **[0:27](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=27)** These models are also called foundation models.
>
> **[0:31](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=31)** These models are huge insights with billions of model parameters.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=36)** The goal of pre-training is to create a general purpose model using general purpose datasets.
>
> **[0:43](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=43)** Typically, datasets like the entire Wikipedia are used to build foundation models.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=49)** The foundation model learns general patterns and structures in data.
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=55)** Typically, the model learns linguistics as well as general knowledge from the dataset.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=61)** Building these models takes significant effort and time.
>
> **[1:06](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=66)** This is an expensive process, hence, only few models are built and shared in the GenAI world.
>
> **[1:13](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=73)** The other task is training GenAI models for fine-tuning.
>
> **[1:17](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=77)** In fine-tuning, a foundation model is taken and then fine-tuned to a specific domain or task.
>
> **[1:24](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=84)** This is done when the foundation model does not sufficiently handle the specific domain or task.
>
> **[1:31](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=91)** For fine-tuning, domain or task-specific datasets are used.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=95)** These datasets are typically enterprise-specific and collected from internal sources.
>
> **[1:41](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=101)** This helps the model learn task-specific patterns and structures.
>
> **[1:46](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=106)** This learning can supplement or override existing knowledge captured within the foundation model.
>
> **[1:52](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=112)** This fine-tuning process costs significantly lower than pretraining.
>
> **[1:57](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=117)** It also takes less time when the dataset are readily available.
>
> **[2:02](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=122)** How are enterprises training GenAI?
>
> **[2:05](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=125)** In most cases, enterprises use fine-tuning to customize a foundation model to the use case using use case-specific datasets.
>
> **[2:14](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=134)** What is the process of training typically followed in enterprises For GenAI?
>
> **[2:20](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=140)** it starts with preparing datasets for evaluation and fine-tuning.
>
> **[2:25](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=145)** This includes curating raw data, processing transformation, data labeling, and associated [[Data Governance]].
>
> **[2:33](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=153)** Next, a candidate GenAI model is selected for fine-tuning.
>
> **[2:38](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=158)** Sometimes, a few candidates are selected and fine-tuned before selecting one of them based on performance.
>
> **[2:45](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=165)** The selection process includes creating a list of selection criteria, researching available models, and comparing performance.
>
> **[2:54](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=174)** The candidate model is fine-tuned using the datasets creator.
>
> **[2:59](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=179)** Several techniques of fine-tuning exist.
>
> **[3:02](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=182)** This includes tuning the model weights, hyperparameter tuning, low-rank adaption, and parameter-efficient fine-tuning.
>
> **[3:11](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=191)** Then the fine-tuned model is evaluated using the evaluation dataset.
>
> **[3:16](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=196)** Metrics are computed to measure performance.
>
> **[3:19](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=199)** Human feedback may be included.
>
> **[3:22](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=202)** This process can be automated and tracked for control.
>
> **[3:27](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=207)** If evaluation results are not satisfactory, then the process goes back to fine-tuning.
>
> **[3:32](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=212)** Additional techniques can be tried to see if the model performance improves.
>
> **[3:37](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=217)** If fine-tuning still does not provide satisfactory results, then an alternate foundation model may be selected, fine- tuned, and evaluated.
>
> **[3:47](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=227)** If still satisfactory results are not obtained, then the training data is analyzed to see if there are missing key samples.
>
> **[3:54](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=234)** Training data can be augmented and the process is repeated again.
>
> **[3:59](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=239)** As seen here, the training process is an iterative process and will continue for several iterations until satisfactory results are obtained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (1)
> **Definitions:** is an  (2)
> **Speakers:** - [presenter] (1)

#### [Data for evaluaton and fine-tuning](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=0)** - [Instructor] What are the characteristics of data for evaluation and fine-tuning?
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=5)** How are they managed in GenAI ops?
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=9)** GenAI applications deal with data of different types, size, and formats.
>
> **[0:15](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=15)** This includes structured tables unstructured text, images, audio, and video.
>
> **[0:21](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=21)** Data for evaluation and fine-tuning reflect the same characteristics.
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=25)** Such data needs to be acquired, processed, and governed with techniques appropriate for the formats.
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=33)** What are the various elements of data for GenAI?
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=37)** What do we expect to find in a data set?
>
> **[0:40](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=40)** First comes the prompt.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=41)** The prompt contains the user prompt, which is the input the user provides to the model.
>
> **[0:47](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=47)** Sample of such prompts are needed in the data set.
>
> **[0:50](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=50)** Then comes the system prompt or instructions to the GenAI model.
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=55)** These instructions may be static for a given application or use case.
>
> **[1:00](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=60)** Prompts need to be collected to cover a variety of scenarios and workflows that are possible within the use case.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=67)** They should also have samples for error and exception conditions.
>
> **[1:12](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=72)** Associated with each prompt in the dataset is an expected response.
>
> **[1:17](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=77)** This is the response that the GenAI model generates for the user prompt.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=83)** This can be of different formats.
>
> **[1:25](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=85)** It can be multi-format also.
>
> **[1:29](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=89)** There may be limitations on the type of content expected, including text, audio, and images.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=95)** There can be specific formats, like [[JSON]] or jpeg.
>
> **[1:39](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=99)** GenAI models may produce variable results for the same prompt.
>
> **[1:44](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=104)** The expected response may be similar to the expected response for generation use cases, and may be exact when it comes to classification use cases.
>
> **[1:54](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=114)** A context can also be associated with each prompt.
>
> **[1:58](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=118)** This is the additional information that is provided to the prompt.
>
> **[2:02](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=122)** This is background information provided to the GenAI model, which is used to provide associated information.
>
> **[2:09](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=129)** The most used context is data retrieved from [[Vector Databases]] in [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] use cases.
>
> **[2:17](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=137)** History of the current conversation can also be provided to the model to handle follow up queries.
>
> **[2:24](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=144)** What is the workflow for [[Data Collection]] and processing for GenAI?
>
> **[2:29](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=149)** Raw data is acquired from data sources for the specific use case.
>
> **[2:33](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=153)** This can be historical data, human-generated data, or machine-generated data.
>
> **[2:39](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=159)** This data goes through the process of cleaning and filtering.
>
> **[2:43](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=163)** De-biasing techniques can be applied to remove sampling bias.
>
> **[2:47](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=167)** Toxic content may also be detected and removed.
>
> **[2:51](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=171)** Labels are added for expected responses.
>
> **[2:55](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=175)** This may be hand-labeled by humans, it can also be machine-generated.
>
> **[3:00](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=180)** Data for evaluation and fine-tuning needs to be governed for safety and control.
>
> **[3:06](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=186)** This includes versioning data, storing them in secure locations with encryption, controlling access to data by users, and tracking the lineage of data from its source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Vector Databases]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Data Collection]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** json (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI automation pipelines](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=0)** - [Instructor] Let's now discuss automated evaluation and fine-tuning pipelines for GenAI.
>
> **[0:06](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=6)** Automation provides repeatability.
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=9)** It is a key tool in [[DevOps]], [[MLOps]] and in GenAIOps.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=14)** Building automated pipelines for evaluation and fine-tuning ensures repeatability of experiments.
>
> **[0:21](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=21)** It also improves efficiency when iterating over experiments.
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=26)** It helps track the history of experiments and compare results reliably.
>
> **[0:32](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=32)** What does a typical GenAI evaluation and fine-tuning pipeline look like?
>
> **[0:38](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=38)** For both evaluation and fine-tuning, we need a curated dataset as discussed in the previous video.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=45)** Evaluation and fine-tuning can both use the same dataset, or the dataset can be split for separate users.
>
> **[0:53](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=53)** Fine-tuning is done by a script.
>
> **[0:56](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=56)** This script can perform several fine-tuning functions like parameter tuning, hyper parameter tuning, or parameter efficient tuning.
>
> **[1:05](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=65)** This can be run in a managed service like [[Kubernetes]].
>
> **[1:09](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=69)** The fine-tuning script picks up a base model from a model registry.
>
> **[1:14](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=74)** The model registry stores and manages models and their versions.
>
> **[1:18](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=78)** The repository has [[Version Control]], access control, and traceability of usage.
>
> **[1:24](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=84)** After fine-tuning, the resulting new model version is also stored in the model repository.
>
> **[1:31](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=91)** The traces and results of the fine-tuning exercise are stored in an experiment tracking system.
>
> **[1:37](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=97)** Several out-of-the-box experiment tracking systems are available.
>
> **[1:42](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=102)** The results are then used to create a final summary of the fine-tuning exercise.
>
> **[1:48](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=108)** Similarly, an evaluation script can be used to evaluate foundation models or fine-tuned models.
>
> **[1:55](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=115)** The evaluation script pulls a given version of a model from the model registry.
>
> **[2:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=120)** It uses the evaluation dataset to evaluate the model.
>
> **[2:04](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=124)** The results of evaluation are once again stored in the experiment tracking system.
>
> **[2:09](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=129)** A summary of the experiment produces metrics that can be compared with baseline or previous evaluations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[MLOps]] (1), [[Kubernetes]] (1), [[Version Control]] (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Model lifecycle management](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=0)** - [Instructor] Let's discuss managing the lifecycle of a GenAI model in this video.
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=5)** GenAI models go through a lifecycle of creation, fine-tuning, use, and retirement.
>
> **[0:12](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=12)** Implementing a managed lifecycle for GenAI models helps to methodically create, test, and promote models.
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=20)** This ensures traceability, avoids mistakes, and provides safety for the application.
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=26)** What are the stages in a model lifecycle?
>
> **[0:29](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=29)** It begins with creating a new version of the GenAI model.
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=34)** This model can be created from scratch or fine-tuned from an existing version of the model.
>
> **[0:40](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=40)** The model is then evaluated and tested.
>
> **[0:43](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=43)** Its performance is measured and compared with benchmarks and thresholds.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=48)** It is also tested for safety and compliance.
>
> **[0:51](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=51)** Once a model successfully passes evaluation, it's ready for use.
>
> **[0:56](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=56)** The model is then promoted to production.
>
> **[0:58](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=58)** This may go through multiple stages, like staging and canneries before wide deployment.
>
> **[1:05](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=65)** During deployment, the model is again monitored for performance and safety.
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=70)** When a newer version of the model is available, the current version is retired.
>
> **[1:15](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=75)** The version of the model is marked as retired, and all artifacts related to this version of the model are archived.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=83)** The artifacts would include [[Fine Tuning]] details, evaluation results, and production use metrics.
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=90)** Let's also discuss some best practices for model lifecycle management.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=95)** It is recommended to use best-of-breed model registries for managing models, rather than building your own lifecycle management system.
>
> **[1:44](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=104)** These systems provide traceability of the model to associated software versions, data sets, and results.
>
> **[1:51](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=111)** Today, popular machine learning platforms provide model registries and lifecycle management tracking.
>
> **[1:58](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=118)** These include top cloud providers like [[AWS SageMaker]], [[Google]] [[Vertex]] AI, and [[Microsoft Azure|Azure]] ML.
>
> **[2:05](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=125)** There are also open source frameworks available like QFlow and [[MLflow]], which provide similar capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (1), [[AWS SageMaker]] (1), [[Google]] (1), [[Vertex]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Evaluation and finetuning tracking](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=0)** - [Instructor] Let's discuss tracking, evaluation, and [[Fine Tuning]] experiments for Gen AI Ops in this video.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=7)** As seen in the previous videos, fine tuning and evaluation are iterative processes.
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=13)** They also repeat when new scenarios emerge in the use case and the model needs to be additionally fine tuned and evaluated.
>
> **[0:21](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=21)** Using a tracking system helps to see the progression in model performance over time.
>
> **[0:27](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=27)** It also helps create benchmarks against which new models can be compared with.
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=33)** What do we track in evaluation and fine tuning?
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=36)** First, there are inputs that need to be tracked.
>
> **[0:39](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=39)** The version of the data set that is used for evaluation or fine tuning needs to be tracked.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=45)** Then comes the version of the software used.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=48)** This could be evaluation or fine tuning scripts, as well as other software tools.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=54)** If any kind of context is used with the prompt, then those should also be versioned and tracked.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=61)** Next comes the output.
>
> **[1:03](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=63)** The responses from the Gen AI model needs to be tracked.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=67)** Any assessment of performance, including accuracy, recall, and bias, are also tracked.
>
> **[1:13](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=73)** Summaries created from the logs and traces needs to be cataloged.
>
> **[1:18](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=78)** Finally, decisions made based on the results need to be added to the output list for tracking.
>
> **[1:24](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=84)** This includes pass fail results as well as the next steps decided.
>
> **[1:28](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=88)** Then comes the model that is used for experiments.
>
> **[1:32](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=92)** The version of the model used for each experiment needs to be tracked.
>
> **[1:37](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=97)** The parameters for the model used need to be frozen and tracked along with the version.
>
> **[1:42](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=102)** Changes during fine tuning, whether they are changes to hyper parameters or other settings need to be tracked.
>
> **[1:49](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=109)** The environment in which the fine tuning or evaluation is done should be along with the versions of [[Hardware]] and software used.
>
> **[1:58](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=118)** How do we track evaluations and fine tuning?
>
> **[2:01](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=121)** To track experiments in machine learning, there are several open source and commercial software that are available.
>
> **[2:08](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=128)** This includes Weights&Biases, Neptune and [[MLflow]].
>
> **[2:13](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=133)** There are also tracking tools available on cloud platforms like AWS and GCP.
>
> **[2:19](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=139)** It's recommended that these tracking tools are integrated into the automated evaluation and fine tuning pipelines.
>
> **[2:26](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=146)** This ensures that all experiments are tracked consistently and the results are cataloged.
>
> **[2:33](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=153)** Finally, it's a good practice to archive the results over time and then compare the performance of the models as use cases and scenarios change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (9), [[Hardware]] (1), [[MLflow]] (1)
> **Env Vars:** aws (1), gcp (1)
> **Best Practices:** recommended (1), good practice (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)


### 3. Developing Gen AI Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [The generative AI application stack](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=0)** - [Instructor] Once a GenAI model is finalized, we need to build an application stack around it to provide services to the users.
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=9)** In this chapter, we will focus on key development aspects when building GenAI applications.
>
> **[0:17](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=17)** A GenAI application contains several components.
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=20)** It has both ML and non-ML components.
>
> **[0:24](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=24)** It also has data.
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=26)** These components need to work together to provide the required service.
>
> **[0:31](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=31)** Let's discuss the key components of a reference GenAI stack.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=36)** First, we have the non-ML components, namely the business application stack.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=41)** It has user interfaces for users to interact with.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=45)** It has backend business logic that enforces business requirements.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=49)** There can be APIs that allow applications to interact with the service.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=54)** There can be data stores that store business data.
>
> **[0:58](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=58)** Then comes the AI/ML components.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=61)** Here we have the GenAI models we decided on in the previous chapter.
>
> **[1:06](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=66)** There can be other classical models too.
>
> **[1:09](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=69)** Then there is the [[Hardware]] infrastructure, like GPUs, that are needed to run the models.
>
> **[1:15](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=75)** [[AI Agents]] can be part of the stack too for planning and reasoning.
>
> **[1:20](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=80)** There could be guardrails in the stack, like bias detectors and hallucination detectors to provide safety and security for ML.
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=90)** Next comes the data elements related to AI.
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=94)** There can be [[Data Pipelines]] that bring in raw data into the models and carry back outcomes of the models.
>
> **[1:41](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=101)** There can be vector stores and graph stores used for retrieval augmented generation.
>
> **[1:47](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=107)** Prompt stores are used to store prompts and prompt templates for reuse.
>
> **[1:51](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=111)** Memory services like caches can be used to store context and conversation history.
>
> **[1:57](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=117)** Finally, there are also operations components of the stack.
>
> **[2:01](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=121)** It contains CI/CD pipelines for deploying the ML, non-ML, and data components.
>
> **[2:08](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=128)** Logging services can be enabled to log events happening in the stack.
>
> **[2:13](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=133)** Trace data can be collected from the model for observability and improvements.
>
> **[2:18](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=138)** Then metrics can be computed on this trace data for analytics and troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[AI Agents]] (1), [[Data Pipelines]] (1)
> **CLI Commands:** cd (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Prompt management](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=0)** - [Presenter] Prompts are an integral part of the GenAI framework, helping drive the models to produce the required outcomes.
>
> **[0:08](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=8)** Even though prompts are created in natural language, they contain business requirements and logic.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=14)** They should be treated like software code also.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=18)** This means we need to enforce the same processes as applied to software code for managing prompts.
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=25)** Let's discuss some best practices for prompt management in GenAIOps.
>
> **[0:30](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=30)** Prompts should be specific and clearly state the required behavior expected from the model.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=36)** It's recommended to use prompt templates.
>
> **[0:39](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=39)** Templates capture best-of-breed instructions and can provide consistency across use cases and applications.
>
> **[0:47](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=47)** Like software code, prompts need to be created in a modular fashion.
>
> **[0:52](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=52)** System instructions, user prompts, context, and additional guardrail instructions should be organized with placeholders.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=61)** Prompts should also have error handling instructions if issues are found with the input, context, or outcomes.
>
> **[1:08](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=68)** Today, prompt libraries are available that capture best practices and are optimized for specific models.
>
> **[1:15](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=75)** Use them when possible.
>
> **[1:17](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=77)** It's important to keep prompts concise to manage token limits and also to not confuse the model.
>
> **[1:24](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=84)** It's recommended to test the prompts independently directly with the model and fine tune them to get the right outcomes before they are integrated into the application code.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=95)** Like software code, prompts also need to be managed with source code control.
>
> **[1:41](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=101)** Typically, the application directory structure should support a special directory for prompts where all the prompt files are stored and managed.

> [!info]- Semantic Content
>
> **Best Practices:** recommended (2)
> **Exercise Files:** source code (1)
> **Speakers:** - [presenter] (1)

#### [Memory and embedding management](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=0)** - [Person] Next, let's discuss memory and embeddings, and how they should be managed under the GenAI apps framework.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=7)** The GenAI application stack may have classical data stores to store business data.
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=13)** In addition, for GenAI purposes, it also needs to store short-term and long-term memory.
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=20)** RAG applications may require storing and managing embeddings.
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=25)** What memory do we use for GenAI, and what are the key operations considerations for them?
>
> **[0:31](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=31)** Let's talk about short-term memory.
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=34)** Short-term memory is used to store the conversation history between the user and the model.
>
> **[0:40](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=40)** It can be tracked for a single prompt, capturing all individual steps taken to execute the prompt.
>
> **[0:46](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=46)** It can also track all prompts and responses for a given user session in a chat-bot.
>
> **[0:52](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=52)** Typically, for memory, caches are used to store such data.
>
> **[0:56](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=56)** It can also be stored locally within the application memory, or can use external caches like... (indistinct) When building GenAI applications, consideration should be given to the required scale for these caches.
>
> **[1:11](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=71)** Redundancy is also a required consideration to ensure that the history is not lost due to application crashes.
>
> **[1:19](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=79)** It's recommended to archive conversation history to a disc storage for long-term use.
>
> **[1:25](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=85)** How about long-term memory?
>
> **[1:27](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=87)** This memory is used for long-term archival of conversational history.
>
> **[1:32](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=92)** It is also supplemented with additional traces and metrics.
>
> **[1:37](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=97)** Long-term history can be used to understand user behavior over a longer period of time and customize application behavior to suit each user.
>
> **[1:47](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=107)** This memory can be used across multiple sessions for a given user.
>
> **[1:52](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=112)** Long-term memory is typically stored on disk, either as files or in document [[Databases]].
>
> **[1:58](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=118)** The length and amount of storage will determine the cost for such storage, so the expected use should be considered when determining the length and content for storage.
>
> **[2:11](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=131)** It's recommended to deploy pruning scripts that can automatically prune old data to keep the storage sizes in control.
>
> **[2:19](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=139)** Next, let's look at managing embeddings in GenAI.
>
> **[2:23](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=143)** Embeddings are vector representations of documents.
>
> **[2:27](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=147)** Documents that are similar to each other have vectors that are closer to each other in the vector space.
>
> **[2:33](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=153)** Embeddings enable [[Semantic Search]] in [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] applications to find documents similar to the user query.
>
> **[2:42](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=162)** Embedding models are used to convert documents to corresponding vector representations.
>
> **[2:48](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=168)** Data-processing pipelines for RAG typically incorporate embedding modules to create embeddings from documents.
>
> **[2:56](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=176)** Embeddings can be multi-model too, by representing text, audio and video in embedding formats.
>
> **[3:03](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=183)** It is recommended to test embeddings in isolation to ensure that semantic search provides the required results.
>
> **[3:10](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=190)** Multiple embedding models should be benchmarked for a use-case to find the most suitable embedding model.
>
> **[3:17](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=197)** These benchmarks can then be automated in GenAI apps to provide efficiency in benchmarking.
>
> **[3:24](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=204)** The performance of embeddings should be monitored to ensure that they are delivering results as expected.
>
> **[3:30](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=210)** Metrics like recall and mean reciprocal rank can be used for such purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Search]] (2), [[Databases]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1)
> **Best Practices:** recommended (3)
> **CLI Commands:** find (2)
> **Env Vars:** rag (2)
> **Analogies:** similar to (2)
> **Speakers:** - [person] (1)

#### [Agents management](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=0)** - [Instructor] [[AI Agents]] are a key component of GenAI and they also need to be managed as part of GenAI ops.
>
> **[0:08](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=8)** What is an AI agent?
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=10)** An AI agent is an autonomous system driven by GenAI models.
>
> **[0:15](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=15)** These agents can collaborate with humans and other agents to make decisions and take actions independently.
>
> **[0:23](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=23)** Let's quickly review key concepts about AI agents.
>
> **[0:27](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=27)** An AI agent is autonomous.
>
> **[0:29](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=29)** It can do its own reasoning, make decisions, drive actions to closure with little or no intervention.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=36)** They are also self-contained and they manage their own workflows and resources.
>
> **[0:42](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=42)** AI agents use GenAI models under the hood for reasoning, planning, and execution.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=48)** They execute their plans through tools.
>
> **[0:51](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=51)** Tools provide integration with other applications and systems for the agent to collaborate with.
>
> **[0:57](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=57)** Agents are quickly becoming a key part of many business applications.
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=62)** AgentOps is an emerging domain within GenAI ops.
>
> **[1:06](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=66)** AgentOps provides a framework specifically to build and manage AI agents within a GenAI stack.
>
> **[1:14](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=74)** Let's discuss some best practices for building AI agents.
>
> **[1:18](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=78)** Even though agents are part of a GenAI application stack, it's recommended to build and test them independently.
>
> **[1:25](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=85)** This is similar to how software modules are built and tested before integrating them.
>
> **[1:31](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=91)** Once ready, the agent should go through [[Integration Testing]] along with the [[Representational State Transfer (REST)|rest]] of the application stack.
>
> **[1:38](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=98)** This ensures that their collaboration with other parts of the stack are working as expected.
>
> **[1:43](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=103)** To test agents, it's recommended to create test datasets.
>
> **[1:48](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=108)** These datasets capture various scenarios in which an agent can be used.
>
> **[1:53](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=113)** It should also cover error and exception cases.
>
> **[1:56](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=116)** Models used inside AI agents should be managed through model management practices discussed in this course.
>
> **[2:03](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=123)** The model versions should be associated with corresponding agent versions and test dataset versions to ensure tracking and compliance.
>
> **[2:13](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=133)** It's recommended to create automated CI/CD pipelines dedicated to agents.
>
> **[2:18](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=138)** Agents are similar to software modules, so they should be built and managed similar to software modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (6), [[Integration Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), cd (1)
> **Definitions:** is an  (3)
> **Analogies:** similar to (3)
> **Best Practices:** recommended (3)
> **Speakers:** - [instructor] (1)

#### [Agent tools integrations](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=0)** - [Instructor] Having discussed [[AI Agents]], let's now look at integrating agents with other systems using tools.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=7)** These tools provide integrations to other systems to read data, write transactions, and perform workflows.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=14)** What kinds of integrations do agent tools provide?
>
> **[0:19](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=19)** It could be to a database, like RDBMS, or [[Vector Databases]] to perform read and write operations.
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=26)** It can integrate with enterprise business applications to execute business workflows, like placing a purchase request.
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=34)** It can integrate with cloud [[SaaS]] services, like Salesforce, to read accounts and create orders.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=41)** Equipment like cameras, machinery, and appliances, can be integrated to agents using tools.
>
> **[0:47](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=47)** Finally, they can also integrate and collaborate with other agents to execute business functions.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=54)** What are some of the GenAIOps best practices for building tools for agents?
>
> **[0:59](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=59)** Tools are used for integrations.
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=62)** Robustness and [[Resiliency]] of integrations is important for these tools.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=67)** This includes ensuring error handling in tools' code, having redundancy for integrating applications, and handling exceptions gracefully.
>
> **[1:16](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=76)** Tools also need their own test suites, and their testing should be automated.
>
> **[1:21](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=81)** This testing needs to be done with integration into their source systems.
>
> **[1:27](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=87)** Tools should be integrated into CI/CD, too.
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=90)** This can either be done as part of the agent itself or as separate integrations if the tool is a reusable module.
>
> **[1:38](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=98)** Observability hooks need to be added to tools to emit traces about the request they handle and the responses that are encountered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Vector Databases]] (1), [[SaaS]] (1), [[Resiliency]] (1)
> **CLI Commands:** cd (1)
> **Env Vars:** rdbms (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Testing generative AI applications](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=0)** - [Instructor] How do we test GenAI apps?
>
> **[0:03](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=3)** As seen in an earlier video, a GenAI app consists of several building blocks.
>
> **[0:08](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=8)** The entire application stack needs to be tested independently as well as in an integrated manner to ensure robustness and combined effectiveness.
>
> **[0:19](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=19)** What are the types of testing required for a GenAI application?
>
> **[0:23](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=23)** We need to unit test individual building blocks, software modules, and agents.
>
> **[0:29](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=29)** We need to then assemble the entire app and perform [[Integration Testing]] to ensure that the building blocks can work together.
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=37)** [[Usability Testing]] is important if the GenAI app has a user interface like a chat bot.
>
> **[0:43](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=43)** System testing ensures that the system is stable and reliable under stress and can scale without performance degradation.
>
> **[0:51](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=51)** These four types of testing are general [[Software Development]] practices.
>
> **[0:56](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=56)** Now let's look at GenAI specific testing that's needed.
>
> **[1:00](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=60)** First, there is prompt testing.
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=62)** We need to test each prompt template individually to ensure that they perform the expected functions in all scenarios.
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=70)** Model evaluations is a kind of testing to ensure that the model performs per expectations of the business use case.
>
> **[1:18](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=78)** Tool integration testing ensures that the integration between the agent and other systems work as desired.
>
> **[1:25](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=85)** Security and safety testing ensures that the GenAI model is not susceptible to security and safety risks.
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=93)** This requires adding guardrails for required protection and testing them to make sure that the application is protected in risky scenarios.
>
> **[1:42](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=102)** With this discussion, we complete the development part of GenAI apps.
>
> **[1:47](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=107)** In the next chapter, we will discuss deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (2), [[Usability Testing]] (1), [[Software Development]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Model Deployment and Serving

[↑ Back to Table of Contents](#table-of-contents)

#### [GenAI deployment patterns](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=0)** - [Instructor] What are the common patterns for Gen AI apps deployment?
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=5)** Like general software applications, gen AI can also be either deployed in local clusters or in public clouds.
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=13)** It can also be a hybrid deployment.
>
> **[0:16](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=16)** Let's explore these options in this video.
>
> **[0:19](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=19)** We begin with the local deployment pattern.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=22)** This pattern is typically used for deploying the Gen AI app on enterprise networks.
>
> **[0:28](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=28)** The app has three substacks, namely the business application, data, and the Gen AI model.
>
> **[0:35](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=35)** In the local deployment mode, all three substack are deployed in the local data center.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=41)** The entire stack is deployed and managed by the enterprise, so they can exercise more control on the deployment, scaling, and operations, data and model protection are also taken care by the enterprise.
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=55)** However, it comes at a higher operations cost to run the application.
>
> **[1:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=60)** Some enterprises are willing to take on the additional cost as it provides more control over security and [[Privacy]].
>
> **[1:08](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=68)** [[Private Clouds]] on cloud platforms like AWS GCP and [[Microsoft Azure|Azure]] also fall into this category.
>
> **[1:15](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=75)** Even though the infrastructure is managed by the provider, the enterprise still manages the application stack.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=83)** Next comes the cloud deployment pattern.
>
> **[1:26](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=86)** Here the application stack is built and deployed using services provided by providers like AWS GCP and Azure.
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=94)** [[SaaS]] and serverless modes of deployment are used where the components for data and model are managed by the service provider.
>
> **[1:43](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=103)** The enterprise has lower control on the deployment and operations of these serverless services.
>
> **[1:50](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=110)** The benefit here is lower management costs, small and medium businesses usually prefer this pattern as it minimizes the cost of managing the deployment.
>
> **[2:01](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=121)** Since data is processed and stored in shared resources, there are concerns over privacy of data in these cases.
>
> **[2:09](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=129)** The final pattern is the hybrid deployment pattern.
>
> **[2:12](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=132)** In this case, both the application and the data is deployed in the private cluster, providing control on the deployment to the enterprise.
>
> **[2:21](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=141)** The model is sourced from a model as a service provider like Open AI, or other cloud providers.
>
> **[2:27](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=147)** The enterprise does not manage the model, but only uses the model through an APA service.
>
> **[2:33](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=153)** In this case, the enterprise does not incur the cost of training, deployment, and managing the Gen AI model.
>
> **[2:40](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=160)** It only needs to deal with the application and data stacks.
>
> **[2:44](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=164)** Since data is stored locally, there are fewer concerns over security and privacy of data.
>
> **[2:50](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=170)** This is the most used pattern in Gen AI as it provides data protection while removing the burden of managing the model from the enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (3), [[Microsoft Azure|Azure]] (2), [[Private Clouds]] (1), [[SaaS]] (1)
> **Env Vars:** aws (2), gcp (2), apa (1)
> **CLI Commands:** aws (2)
> **Speakers:** - [instructor] (1)

#### [Infrastructure planning](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=0)** - [Instructor] Infrastructure for models and data are critical when planning the deployment of GenAI applications.
>
> **[0:08](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=8)** There are some special considerations when planning for model deployment in GenAI, irrespective of whether the model is hosted locally or used as a third-party service.
>
> **[0:19](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=19)** What kinds of infrastructure considerations are there?
>
> **[0:23](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=23)** Let's begin with the self-hosted option.
>
> **[0:27](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=27)** Gen I models are huge and require significant compute resources to run them.
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=33)** To begin with, they need GPUs or TPUs for execution.
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=37)** Proper sizing is needed to ensure that the right capacity of such resources is provisioned for the model.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=45)** Models also need significant memory for them to run.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=49)** Again, sizing estimates are needed for provisioning the right amount of resources.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=54)** [[Hardware]] and software accelerators may also be needed to support the deployment of the self-hosted models.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=61)** Serving frameworks may also be used for optimized deployment and management.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=67)** Networking is also a key requirement to ensure that there is enough bandwidth to support the expected scale of requests to the models.
>
> **[1:17](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=77)** A single GenAI model instance may be used by multiple GenAI apps, so these deployment considerations need to be factored in.
>
> **[1:26](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=86)** The other option is the model as a service option.
>
> **[1:29](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=89)** Here we don't have to care about compute resources, but there are other considerations.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=95)** Token budgets need to be determined so the right amount of capacity can be provisioned on the service provider side.
>
> **[1:42](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=102)** The expected request rates and associated token rates also need to be estimated and associated bandwidth needs to be provisioned.
>
> **[1:52](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=112)** Latency considerations for the application should be included to determine the type and level of service to be provisioned.
>
> **[2:00](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=120)** Scaling is another consideration, and ideally, the service provider should support on-demand scaling.
>
> **[2:06](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=126)** The model may be deployed in multiple geolocations to be closer to the application deployment to minimize latency.
>
> **[2:15](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=135)** What are the considerations for planning for data in GenAI?
>
> **[2:19](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=139)** It's again important to choose the right type of data stores based on the use case and scale requirements.
>
> **[2:26](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=146)** Cost of the data stores should also be considered.
>
> **[2:30](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=150)** Data sizing is a key planning requirement to ensure that the right capacity is provisioned for the data stores.
>
> **[2:37](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=157)** Access control to the data stores should be restricted to the application and administrators only, as confidential and private data may be stored in these data stores.
>
> **[2:48](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=168)** Data encryption should be used for data stores to protect data.
>
> **[2:53](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=173)** Private data should be protected from visibility with techniques like encryption and redaction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI deployment pipelines](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=0)** - [Narrator] How does the GenAI deployment pipelines look like?
>
> **[0:04](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=4)** GenAI models are huge and usually cannot be loaded into memory of the application.
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=10)** They are almost always deployed separately on their own resources.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=14)** Exceptions could be when the model is deployed on devices, but these models would be relatively smaller in size.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=22)** Let's walk through a typical deployment pipeline for GenAI.
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=26)** So we have the model, the non-ML app code and agents in separate repos.
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=33)** As discussed in the previous chapters, they are recommended to be managed independently.
>
> **[0:38](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=38)** The model may undergo fine-tuning to create newer versions of the model.
>
> **[0:43](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=43)** Such fine-tuned versions will also be managed in the model repo or registery.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=49)** The agents in the non-ML app will go through their own build and packaging process to create deployable artifacts.
>
> **[0:57](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=57)** Each of the artifacts go through automated testing individually as well as in an integration setup.
>
> **[1:04](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=64)** During this process, the versions of the artifacts are tracked and linked to the test results.
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=70)** The approved versions of the artifacts are then deployed to production.
>
> **[1:15](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=75)** They go through independent deployment pipelines, often coordinated to ensure that the right versions of the artifacts are deployed together.

> [!info]- Semantic Content
>
> **Best Practices:** recommended (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Scaling generative AI deployments](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=0)** - [Instructor] How do we scale GenAI deployments?
>
> **[0:03](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=3)** The best practices for scaling in [[MLOps]] also covers scaling for GenAIOps.
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=9)** Beyond these, the special considerations are for the GenAI models and its integration with the [[Representational State Transfer (REST)|rest]] of the application stack.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=18)** What are some key techniques to scale GenAI models?
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=22)** Horizontal scaling of model deployment is a popular technique to deploy models in n + 1 configurations.
>
> **[0:30](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=30)** This helps to scale to high volumes with no application changes.
>
> **[0:35](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=35)** Vertical scaling is also possible by using higher capacity GPUs and TPUs.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=41)** This is, however, limited based on the model architecture and the use case.
>
> **[0:47](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=47)** [[Batch Processing]] works very well to process multiple requests concurrently on GPUs, thereby scaling the system.
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=55)** Streaming can also be used to scale with minimum latency for concurrent requests.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=61)** Quantization and cloning are techniques that help reduce the size of the model, so more instances of the model can fit into the same set of resources.
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=70)** Similarly, model distillation can be used to create a smaller version of the model.
>
> **[1:16](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=76)** More instances of the model can be now deployed on the same set of resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Batch Processing]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Guardrails deployments](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=0)** - [Instructor] Let's discuss deploying guardrails for GenAI in this video.
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=5)** GenAI guardrails are a vital building block for GenAI deployment.
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=10)** Guardrails help implement [[Responsible AI]] for the application.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=14)** They ensure safety, reliability, [[Ethics]], compliance, and control.
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=20)** This ensures that the responses generated from the model are safe for consumption.
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=26)** What are the popular guardrails for GenAI?
>
> **[0:29](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=29)** Prompt injection guardrails detect if the incoming prompts are poisoned to trigger undesirable behavior from the model.
>
> **[0:38](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=38)** Offensive content guardrails block offensive and abusive content in prompts and responses.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=45)** Hallucination detection guardrails check if the model responses are grounded in facts and are safe to be returned to the user.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=54)** Bias guardrails check if the responses exhibit bias towards a gender, race, demographic, or concept.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=61)** Compliance guardrails ensure compliance with regulatory and responsible AI requirements.
>
> **[1:08](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=68)** PII protection guardrails help redact personally identifiable information from prompts and responses.
>
> **[1:16](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=76)** Tone moderation guardrails check and correct the tone of the responses generated by the model.
>
> **[1:22](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=82)** Harmful content guardrails check if the content is creating harm like code jailbreaks and destructive outcomes.
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=90)** How do we deploy guardrails?
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=93)** We have the GenAI App Stack that is collaborating with the GenAI model.
>
> **[1:38](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=98)** The popular deployment pattern is to insert a GenAI Gateway in between the application and the model.
>
> **[1:45](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=105)** The gateway monitors all requests to the model and responses from the model.
>
> **[1:51](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=111)** The gateway will invoke a set of configured guardrails for the requests and responses.
>
> **[1:57](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=117)** If the guardrails detect any exceptions, then the gateway would proceed to block that request or response.
>
> **[2:04](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=124)** The gateway would also generate traces that contain the results of the guardrails, which can then be used to monitor guardrail performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (2), [[Ethics]] (1)
> **Env Vars:** pii (1)
> **Speakers:** - [instructor] (1)


### 5. Monitoring and Troubleshooting

[↑ Back to Table of Contents](#table-of-contents)

#### [Generative AI monitoring pipelines](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=0)** - [Instructor] In this chapter, we will focus on monitoring GenAI applications and models.
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=5)** We begin with the discussion on monitoring pipelines.
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=9)** General software services are monitored through logs, as well as system traces for CPU, memory, and other resources.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=18)** These apply to the non-ML services in the GenAI app stack.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=22)** In addition, for GenAI, we need to monitor the interactions to and from the model.
>
> **[0:29](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=29)** What kind of data should be collected for GenAI specifically?
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=34)** We need to track the requests that are going to the LLM, including prompts and context.
>
> **[0:40](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=40)** We need to also track the responses from the LLM.
>
> **[0:44](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=44)** Token usage is a key measure to track, as it has significant cost implications.
>
> **[0:50](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=50)** Latency for requests is also a key measure to track to ensure that users are getting their responses in time.
>
> **[0:58](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=58)** For RAG use cases, the context retrieved using [[Semantic Search]] and any related metrics also need to be tracked.
>
> **[1:06](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=66)** For agents, tool usage, including the inputs provided and the outputs obtained need to be tracked.
>
> **[1:14](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=74)** The outcomes from the guardrails used in the application stack also need to be tracked.
>
> **[1:19](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=79)** All these measures provide a 360 view of how the GenAI model is being used in the app stack.
>
> **[1:26](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=86)** What does the monitoring pipeline for GenAI look like?
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=90)** In the previous chapter, we're discussing using an LLM gateway for guardrails.
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=96)** It'll help for monitoring also.
>
> **[1:39](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=99)** The LLM gateway will collect the requests and the responses for the GenAI model and push it to the monitoring pipeline.
>
> **[1:47](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=107)** It will also collect token usage, latency, and other metrics.
>
> **[1:52](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=112)** Guardrails will also publish their results to the same monitoring pipeline.
>
> **[1:57](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=117)** The GenAI app will collect non-ML traces, like logs and resource usage, and push them to the same monitoring pipeline.
>
> **[2:05](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=125)** The monitoring pipeline will then process these traces and store them.
>
> **[2:10](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=130)** It will then be used to compute metrics and generate alerts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Search]] (1)
> **Env Vars:** llm (4), cpu (1), rag (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Metrics for generative AI](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=0)** - [Instructor] What kinds of metrics are computed for gen AI?
>
> **[0:04](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=4)** As discussed in the previous video, monitoring pipelines compute metrics based on the data they collect.
>
> **[0:11](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=11)** These metrics can be general system metrics like CPU utilization, application metrics like requests per second, as well as gen AI metrics.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=22)** What are the popular gen AI metrics that are computed?
>
> **[0:26](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=26)** F1-score is used to measure the accuracy of predictions, mostly in classification use cases.
>
> **[0:32](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=32)** Perplexity measures the uncertainty in the model while making language-based generation.
>
> **[0:40](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=40)** Average latency is the observed latency for requests to the gen AI model.
>
> **[0:45](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=45)** Cost per query is the average cost to execute queries with the model.
>
> **[0:50](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=50)** Energy consumption is the measure of energy used to host and use the model.
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=55)** Mean reciprocal rank is a popular metric to measure the accuracy of retrieval systems.
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=62)** Fairness score is computed based on the results from bias guardrail.
>
> **[1:08](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=68)** Toxicity score is computed based on the results from the harmful content guardrails.
>
> **[1:13](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=73)** Hallucination rate is the measure of responses that have hallucinated in a given period of time.
>
> **[1:20](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=80)** Trustworthiness score measures the reliability of the facts generated by the model.
>
> **[1:26](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=86)** Adversial robustness rate measures how well the model is able to overcome adversarial requests.
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=93)** There are several such metrics available and the right metrics to monitor should be chosen based on the specific gen AI app and its functions.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI traces](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=0)** - [Instructor] In the earlier video on pipelines, we discussed the type of data to collect for GenAI.
>
> **[0:06](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=6)** Let's dive deeper into these details in this video.
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=10)** What is a GenAI trace?
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=13)** It is a detailed, structured log for every request sent to the GenAI model, its response, and associated information.
>
> **[0:22](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=22)** How are GenAI traces collected?
>
> **[0:24](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=24)** They are collected for every request or prompt, typically by a GenAI gateway.
>
> **[0:30](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=30)** It is usually structured in a [[JSON]] format, so it provides flexibility in storage and processing.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=36)** It is logged in the software services or in the GenAI gateway.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=41)** It is collected through the GenAI monitoring pipeline, processed, and stored.
>
> **[0:46](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=46)** The GenAI trace contains a wealth of information and serves as a great tool to understand about how the request was processed and response generated.
>
> **[0:57](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=57)** It is a great tool for diagnostics and optimization.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=61)** The traces are summarized periodically through metrics we discussed in the earlier video.
>
> **[1:07](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=67)** What are the contents of a GenAI trace?
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=70)** First, there is content related to the input provided to the model.
>
> **[1:14](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=74)** This includes the user prompt or query, the embeddings that are used to retrieve any context, meta information like user ID or tenant ID associated with the request, any context that was added to the request, traces from vector retrieval, results of adversarial attack detection, and amount of PII that was detected.
>
> **[1:37](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=97)** Then there is information related to the model used.
>
> **[1:41](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=101)** This includes the specific model and its version that was used to process the request.
>
> **[1:46](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=106)** Additionally, any hyperparameter settings, token counts, latency observed, and deployment details like geolocations are also logged.
>
> **[1:55](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=115)** Finally, there is the output-related information, like the model response, hallucination score computed by the guardrail, toxicity score, any content that was filtered, any feedback received from the user, confidence score about the facts provided, and cost incurred.
>
> **[2:13](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=133)** These are not exhaustive lists and can be extended to include any meaningful information that can be used for diagnostics and improvements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** json (1), pii (1)
> **Cross-References:** we discussed (2)
> **Speakers:** - [instructor] (1)

#### [Agent trajectories](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=0)** - [Instructor] Like we have traces for Gen AI model usage, we have trajectories for [[AI Agents]].
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=7)** What is an agent trajectory?
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=9)** It's a chronological sequence of events that happened in the AI agent as it goes through fulfilling a request.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=18)** It is a sequence of nodes, states, and actions that are visited by the request.
>
> **[0:24](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=24)** Similar to Gen AI traces, trajectories are helpful in understanding what's happening inside an agent for diagnostics and identifying improvements.
>
> **[0:35](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=35)** What does the trajectories contain?
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=37)** A trajectory captures the entire history of a request within an agent.
>
> **[0:42](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=42)** It uses a request ID and a timestamp to tag every such event.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=48)** The event may contain one or more of the following information.
>
> **[0:52](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=52)** It has the request that I've sent to the LLM for planning, reasoning, or reflection, and the responses that are obtained, tools chosen for use in the request, the inputs provided to the tool, and the outputs from the tool, all reasoning decisions and iterations determined by the agent, any errors or exceptions encountered during the execution of the request, final results obtained and user feedback.
>
> **[1:21](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=81)** Agent trajectories are also collected through the same Gen AI pipelines where they are processed and summarized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** llm (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshooting generative AI model behavior](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=0)** - [Instructor] Let's now discuss the support that GenAI apps need to provide.
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=5)** To troubleshoot model behavior for GenAI, troubleshooting GenAI problems is complex and time consuming.
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=13)** A structured troubleshooting framework that is supported by traces, metrics, tools, processes, and automation is needed to help in efficient and effective debugging of GenAI issues.
>
> **[0:27](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=27)** What are the sources of problems in a GenAI app that is related to the model?
>
> **[0:33](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=33)** The user or system prompts may not be effective in conveying the instructions to the model.
>
> **[0:39](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=39)** The context provided may be inaccurate or incomplete for the model to use.
>
> **[0:44](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=44)** The right GenAI model may not be chosen for the use case.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=49)** The model's hyperparameters could have been set incorrectly, leading to undesirable outcomes.
>
> **[0:56](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=56)** The guardrails may not be effective in identifying issues in the requests and responses.
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=62)** They may also flag false positives and decline correct requests and responses.
>
> **[1:08](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=68)** What troubleshooting support is needed from GenAI apps to help in this regard?
>
> **[1:14](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=74)** We need GenAI traces and AI agent trajectories that we discussed in the earlier videos.
>
> **[1:20](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=80)** These need to be made available using tools that enable reading, sorting, and summarizing them.
>
> **[1:27](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=87)** Pre-computer metrics help monitor the model behavior, and alerts on any threshold violations are helpful to flag issues.
>
> **[1:37](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=97)** Evaluation and benchmarking tools and scripts make it easier for engineers to test the models against preselected test data to measure their performance.
>
> **[1:47](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=107)** Documentation for the use case or application is also important for understanding the business functions and design of the applications.
>
> **[1:57](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=117)** Guides and runbook are an integral part of an operations framework to help in deploying, monitoring, and troubleshooting the applications.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 6. Security and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Ethics and compliance](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=0)** - [Presenter] In this chapter, we will discuss the [[Responsible AI]] considerations for [[Generative AI]] applications.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=7)** We begin with [[Ethics]] and compliance.
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=10)** Implementation of ethics and compliance is a key responsibility of GenAIOps.
>
> **[0:17](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=17)** Compliance to ethics and other statutory requirements need to be an integral part of a GenAIOps framework.
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=25)** What are some of the key GenAI requirements in ethics and compliance?
>
> **[0:30](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=30)** It begins with what kinds of tasks can GenAI be used for?
>
> **[0:35](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=35)** Statutory requirements and enterprise policies may mandate the need to protect against using GenAI for certain use cases like human profiling.
>
> **[0:46](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=46)** Intellectual property copyrights on the training data and outputs is another key area where GenAIOps need to monitor for violations and escalate discrepancies.
>
> **[0:58](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=58)** [[Personal Data Protection]] is a key regulatory requirement for which GenAIOps need to provide guardrails.
>
> **[1:06](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=66)** Trade secrets of the company also need to be protected.
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=70)** Such information should not be exposed to the GenAI model or the customers.
>
> **[1:16](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=76)** Every country and state may have additional regulations around the use of GenAI which also need to be complied with.
>
> **[1:24](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=84)** So, what infrastructure should GenAIOps provide for compliance?
>
> **[1:29](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=89)** It needs to provide instrumentation to track compliance like guardrails, fraud detectors, and pen tests.
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=96)** Data about compliance need to be collected and stored securely.
>
> **[1:41](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=101)** Validation scripts are needed to periodically process the collected data and check if compliance is continued to be enforced.
>
> **[1:49](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=109)** An alerting system is needed to escalate any discrepancies noticed to concerned individuals and systems.
>
> **[1:56](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=116)** Remedial mechanisms like reporting and blocking needs to be automated so they can be deployed quickly when violations are noticed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (4), [[Responsible AI]] (1), [[Generative AI]] (1), [[Personal Data Protection]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [presenter] (1)

#### [Protection against vulnerabilities](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=0)** - [Instructor] How can GenAIOps help with vulnerabilities?
>
> **[0:04](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=4)** GenAIOps should provide a framework to monitor and protect the GenAI application, its artifacts, and data against potential vulnerabilities of GenAI.
>
> **[0:16](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=16)** Let's review the [[OWASP]] top 10 vulnerabilities for GenAI.
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=20)** OWASP stands for Open [[Web Application Security]] Project.
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=25)** This is a nonprofit organization that helps developers to build secure applications.
>
> **[0:31](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=31)** They have published a list of top 10 vulnerabilities for LLMs.
>
> **[0:36](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=36)** All these vulnerabilities need to be considered on whether they apply for a given GenAI application, and required guardrails need to be enforced to protect against them.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=48)** First comes prompt injection.
>
> **[0:51](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=51)** Here, the user can provide a malicious prompt that can trick the model to return an unsafe result or expose confidential data.
>
> **[1:00](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=60)** Insecure output can be produced by a model, especially when generating code.
>
> **[1:05](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=65)** The code generated can have vulnerabilities, like cross-site scripting.
>
> **[1:11](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=71)** In training data poisoning, malicious samples can be introduced into the training data set that is used to train or fine-tune a model, thereby making it behave in malicious ways.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=83)** Denial of service attacks can also be launched on models, as they are also served through API calls.
>
> **[1:31](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=91)** This leads to degradation or failure of the client GenAI application.
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=96)** In supply chain vulnerabilities, malicious data can be introduced into the prompt through upstream applications or pre-processing modules, forcing the model to behave in an unsafe manner.
>
> **[1:49](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=109)** Sensitive data exposure happens when the model accidentally reveals its training data or sensitive context data that is passed to it.
>
> **[2:00](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=120)** Models have the ability to use plugins to execute tasks, but these plugins can themselves be unsafe.
>
> **[2:07](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=127)** Excessive agency involves providing too much power to the model, allowing the model responses to trigger actions without human intervention.
>
> **[2:17](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=137)** This can lead to disastrous results when the model output is compromised.
>
> **[2:22](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=142)** Overreliance deals with an enterprise trusting a model too much.
>
> **[2:26](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=146)** That business is dependent on the GenAI model for its success.
>
> **[2:31](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=151)** A model can also be stolen, similar to software code.
>
> **[2:35](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=155)** This may lead to exposing sensitive data used to train the model, and can be used for malicious business purposes.
>
> **[2:42](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=162)** How can GenAIOps protect against these vulnerabilities?
>
> **[2:47](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=167)** First, we need to deploy guardrails for known vulnerabilities, as discussed in the previous chapters.
>
> **[2:54](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=174)** Guardrails themselves should be periodically tested and validated using automated scripts.
>
> **[3:00](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=180)** This ensures that the guardrails are correctly calibrated for application use.
>
> **[3:06](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=186)** Results of guardrails need to be collected through GenAI traces, and stored.
>
> **[3:11](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=191)** Metrics for guardrails, like hallucination rate, need to be computed periodically.
>
> **[3:16](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=196)** Reports should be available through [[Dashboards]] for users to observe performance.
>
> **[3:22](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=202)** Thresholds and alerts need to be supported in the tools, so when violations happen, required teams can be alerted to prevent further degradation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Web Application Security]] (1), [[Dashboards]] (1)
> **Env Vars:** owasp (2), api (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Toxicity and bias in generative AI](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=0)** - [Instructor] Toxicity and bias are two important trust considerations for GenAI applications.
>
> **[0:07](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=7)** Let's discuss what they are and how to mitigate them.
>
> **[0:10](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=10)** Let's begin with toxicity in GenAI.
>
> **[0:13](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=13)** What is toxicity?
>
> **[0:15](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=15)** Toxicity occurs when there is harmful, offensive, or inappropriate content.
>
> **[0:20](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=20)** It can occur both in the input prompt or in the output response.
>
> **[0:25](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=25)** Examples include profanity, adult content, or hurtful comments.
>
> **[0:30](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=30)** End users are usually the ones who introduce toxic content in the inputs or prompts.
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=37)** When we see toxic content in the output or responses, it's usually because such content exists in the training data that is used to build the model.
>
> **[0:47](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=47)** When such content is not controlled in a business context, it may be sent to customers or employees.
>
> **[0:54](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=54)** This can significantly impact trust and also business revenues.
>
> **[0:59](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=59)** How do we mitigate toxicity issues?
>
> **[1:02](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=62)** First, it is important to understand the lineage of training data for the model being used, even if the model is an open source model or third-party offering.
>
> **[1:13](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=73)** When training or fine-tuning with our own dataset, it's important to analyze each sample for toxic content and remove them from the dataset.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=83)** Content filtering guardrails can help in detecting and removing such content from prompts and responses.
>
> **[1:30](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=90)** There can also be profanity detection guardrails for user inputs to prevent such content making its way through the application.
>
> **[1:38](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=98)** Next comes bias.
>
> **[1:39](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=99)** What is bias?
>
> **[1:41](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=101)** Bias happens when the model output is unfair or discriminatory.
>
> **[1:46](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=106)** GenAI models can be provided inputs and asked to make decisions or recommendations.
>
> **[1:52](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=112)** If the model considers a protected attribute like gender or race as part of its decision making process, it may be considered biased.
>
> **[2:02](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=122)** Bias typically reinforces stereotypes and also marginalizes specific groups of people.
>
> **[2:09](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=129)** The source of bias is typically the training data.
>
> **[2:12](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=132)** Biased content, recommendations, and messages in the training data will make its way into the model's knowledge and will reflect in its outputs.
>
> **[2:22](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=142)** Bias may influence business decisions if the GenAI model is used to do recommendations.
>
> **[2:29](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=149)** For example, a candidate filtering system in a hiring process may bias based on the university the candidate studied in.
>
> **[2:38](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=158)** When bias happens and it becomes public, it impacts the reputation of the business.
>
> **[2:44](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=164)** How do we mitigate bias?
>
> **[2:45](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=165)** An enterprise needs to have [[Responsible AI]] policies that sets the tone for how bias is handled.
>
> **[2:53](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=173)** This identifies protected attributes and how biased content is handled in the applications.
>
> **[2:59](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=179)** This serves as the guidance for implementation in the application.
>
> **[3:04](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=184)** Training [[Data Lineage]] analysis is again required for bias mitigation.
>
> **[3:09](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=189)** Debiasing is the process of analyzing the training or fine-tuning dataset for direct or indirect bias, and removing those samples that exhibit bias.
>
> **[3:20](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=200)** Bias detection guardrails should also be used during inference to detect biased content and prevent it from reaching the end users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (1), [[Data Lineage]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hallucinations](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=0)** - [Instructor] Hallucinations are a known limitation of generative models.
>
> **[0:04](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=4)** Let's discuss what hallucinations are and how to control them.
>
> **[0:09](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=9)** GenAIOps plays a key role in automating detection of hallucination and ensuring trusted outcomes for the users.
>
> **[0:18](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=18)** What is hallucination in a [[Generative AI]] context?
>
> **[0:21](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=21)** Hallucination happens when the output of the GenAI model is not supported by facts.
>
> **[0:28](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=28)** A model output may provide data that is not true or events that have not happened.
>
> **[0:34](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=34)** The output is disconnected from reality.
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=37)** Using this output for business processes may lead to incorrect results and loss of trust.
>
> **[0:44](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=44)** Hallucinations happen because of how generative models are designed.
>
> **[0:49](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=49)** A model can interpret independent facts as related and provide incorrect answers.
>
> **[0:56](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=56)** One reason is the lack of contextual understanding, where the prompt does not have specific context for the question being asked.
>
> **[1:04](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=64)** The training data also influences hallucination if it misrepresents facts.
>
> **[1:10](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=70)** How do we manage hallucinations?
>
> **[1:12](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=72)** It begins with using high-quality data sets for model fine-tuning.
>
> **[1:16](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=76)** it is important to check the data sets for factual accuracy before using them for training.
>
> **[1:23](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=83)** Domain specific fine-tuning will help the model understand a specific domain better.
>
> **[1:29](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=89)** For example, models fine-tuned on healthcare specific data or insurance specific data will hallucinate less for prompts related to those domains.
>
> **[1:39](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=99)** For enterprise use cases, use RAG whenever possible to provide accurate context to the model.
>
> **[1:46](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=106)** Forcing the model to only use the context for facts will lower hallucinations significantly.
>
> **[1:53](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=113)** Hallucination detection guardrails are especially helpful to analyze outputs for factual accuracy.
>
> **[1:59](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=119)** Some of these guardrails use a second generative model to check the accuracy of the first one.
>
> **[2:05](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=125)** [[Prompt Engineering]] is, again, important to ensure that the model has enough information to synthesize and accurate response to the prompt.
>
> **[2:13](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=133)** Finally, human feedback is essential to check if any hallucinations are introduced in the outputs.
>
> **[2:19](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=139)** Tracking them over time can help to fine-tune models with high-quality data to reduce hallucinations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** rag (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Privacy protection in genAI](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=0)** - [Presenter] The final topic to discuss in this course is [[Privacy]] in GenAI.
>
> **[0:05](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=5)** [[Data Privacy]] is a key customer and compliance requirement in GenAI.
>
> **[0:11](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=11)** This is one of the key factors that enterprises are concerned about while implementing GenAI.
>
> **[0:17](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=17)** GenAIOps need to provide automated production for data privacy.
>
> **[0:23](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=23)** What are the areas of concern when it comes to data privacy in GenAI?
>
> **[0:28](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=28)** Personal data may be accidentally introduced into the training dataset, context and prompts, or responses from the model.
>
> **[0:37](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=37)** Similarly, confidential business data may also be exposed to the same areas.
>
> **[0:43](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=43)** Users may not realize about [[Data Classification]] when they provide it in their prompts or context.
>
> **[0:50](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=50)** Models may accidentally expose private data when creating responses.
>
> **[0:55](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=55)** This may be introduced during their pre-training and may show up when a customer uses the model.
>
> **[1:01](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=61)** How do we manage data privacy in GenAIOps?
>
> **[1:05](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=65)** Training data needs to be analyzed to identify private data, and that should be redacted.
>
> **[1:12](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=72)** Tools should be used for this purpose, so this detection and redaction could be automated.
>
> **[1:18](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=78)** When processing prompts, PII redaction guardrails should be used to detect private data and redact them.
>
> **[1:25](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=85)** Similarly, guardrails need to be deployed to analyze the output from GenAI models and redact them before sending them to the user.
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=94)** Data classification checks need to be implemented either in the gateway or through guardrails to classify data in prompts and responses, and then decide if such data classes can be sent in the responses.
>
> **[1:48](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=108)** This can classify data as strictly confidential, company confidential, or public.
>
> **[1:55](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=115)** This brings us to the end of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Privacy]] (4), [[Data Classification]] (2), [[Privacy]] (1)
> **Env Vars:** pii (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=3)** By now, you have an understanding of the key elements of GenAIOps and how they relate to [[DevOps]] and [[MLOps]].
>
> **[0:11](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=11)** You can take your learning even further.
>
> **[0:14](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=14)** Implement a sample GenAI application using the processes and techniques learned in the course.
>
> **[0:21](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=21)** Experiment with model evaluation and fine-tuning, model registries, experiment tracking systems, GenAI infrastructure, and metrics.
>
> **[0:31](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=31)** Next, implement a GenAIOps system for your organization to streamline the development and deployment of GenAI.
>
> **[0:41](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=41)** Explore further on additional GenAIOps topics, like LLMOps, RAGOps, and AgentOps.
>
> **[0:48](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=48)** AI always intrigues me.
>
> **[0:51](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=51)** I bet it intrigues you too.
>
> **[0:53](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=53)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[MLOps]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Skills Covered

- AIOps
- Generative AI
- Artificial Intelligence (AI)

## Path Context

### In [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]
← [[Integrating AI into the Product Architecture]] | **6 of 7** | [[AI Data Governance, Compliance, and Auditing for Developers]] →

### In [[Become an AI Engineer]]
← [[Understanding Generative AI in Cloud Computing- Services and Use Cases]] | **9 of 10** | [[Foundations Of Responsible Ai]] →

### In [[Building Generative AI Skills for Developers]]
← [[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]] | **7 of 7**

## Part of

- [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]
- [[Become an AI Engineer]]
- [[Building Generative AI Skills for Developers]]

## Related Courses

_Courses sharing skills:_

- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)