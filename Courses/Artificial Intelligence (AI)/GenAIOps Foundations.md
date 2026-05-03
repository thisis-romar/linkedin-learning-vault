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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/genaiops-foundations?u=76281980&t=0)** - [Kumaran] Applications using [[Generative AI]] are becoming increasingly popular. To build such applications in a systematic and efficient manner, we need GenAIOps. I will take you through an overview of the concepts and elements of GenAIOps. We will discuss the [[Generative AI|Gen AI]] application lifecycle and how it relates to [[DevOps]] and [[MLOps]]. We will then discuss the essential processes for building and deploying Gen AI applications. My name is Kumaran Ponnambalam. Let's get started with the concepts of Gen AI Ops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (3), [[Generative AI]] (1), [[DevOps]] (1), [[MLOps]] (1)
> **Speakers:** - [kumaran] (1)


### 1. GenAIOps Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [The machine learning lifecycle](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=0)** - [Narrator] Let's begin the course by reviewing the basic concepts of the machine learning lifecycle. Machine learning is like [[Software Development]]. In software development, we go through a structured process of [[Requirements Analysis]], design, development, testing, deployment, and operations. Similarly, machine learning also has a structured lifecycle that goes from concept to production. A machine learning application goes through a journey as it evolves. It starts from a concept where the goals for machine learning are determined, then the model is built. The model is integrated into the application. The model and the application are then deployed and used. Continuous improvement happens to the model over time. This is a cycle or iterative process where the steps are repeated over many times. During the iterative process, the model is continuously refined for better performance and lower errors or bias. Refinements are triggered by the availability of new training data, new use cases found, and model degradations noticed over time. Let's review this lifecycle with a diagram. We begin the ML lifecycle with identifying the requirements. The requirements are typically for the application, which will use machine learning. Within this, the parts of the requirements
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/the-machine-learning-life-cycle?u=76281980&t=93)** that apply to the model are identified. Then workflow design happens for the application within which the use of ML models are brought in. This identifies the inputs available to the model and outputs expected from the model. To build a model, we may need training data. Training data is collected from available resources. Raw training data goes through [[Feature Engineering]] to get it ready for model training. Then model training kicks in. The model is created based on the requirements and trained on the training data. The created model is usually managed to control its versions and evolution. The model then goes through test and evaluation to validate if it performs as per expectations. If the performance is not satisfactory, the model is retrained. This cycle continues until satisfactory results are obtained. The model is then deployed in production along with the application and used for serving. Data is collected from real model use in production. This helps in diagnostics as well as identifying errors. Production data may be used for training if new use cases are identified. This goes through a labeling process. The labeled data is then added to the training data set. Now the cycle can repeat with feature engineering, training, evaluation, and deployment done with the updated training data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Feature Engineering]] (2), [[Requirements Analysis]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [The advent of generative AI](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=0)** - [Instructor] The ML world has been revolutionized with the advent of [[Generative AI]], or [[Generative AI|GenAI]] for short. Generative AI is a subset of machine learning that deals with generating new content. This new content can be text, images, audio, or video. Generative AI models learn from existing data and patterns. They then use instructions to generate new content. GenAI models are driving a new class of applications, namely, GenAI applications. These applications leverage [[Large Language Models (LLM)|large language models]], or LLMs for short. They also leverage other GenAI technologies, like [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] and agents, to build enterprise solutions. The lifecycle of GenAI applications are similar to other software [[Microsoft Products|products]]. There are, of course, key differences, which we will address in this course. Building GenAI applications require multi-[[Team Collaboration]], including [[Data Science]], machine learning, and engineering. A coordinated execution plan is needed to execute all facets of the application, including data, models, and software code. This requires processes and best practices for controlling the lifecycle. It also needs automation and repeatability for improving efficiency. This course is focused on discussing
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/the-advent-of-gen-ai?u=76281980&t=93)** such processes and best practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (6), [[Generative AI]] (3), [[Large Language Models (LLM)|Large language models]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [DevOps, MLOps and GenAIOps](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=0)** - [Instructor] We hear the terms [[DevOps]], [[MLOps]], and GenAIOps when talking about processes for software engineering and machine learning. Let's review the definitions and differences between them. DevOps is the foundation for [[Software Development]]. It is critical for organizations building software. It provides agility, organized collaboration, and efficiency to deliver high-quality software at speed. What does DevOps entail? DevOps is a framework. This framework consists of processes that define how work is done. It has tools that help in assisting and automating this work. It has best practices that are continuously refined to improve these processes. The goal of DevOps is to deliver quality and reliability in software at enterprise scale. DevOps improves efficiency of software development, deployment, and operations. Machine learning operations, or MLOps for short, and [[Generative AI]] operations or GenAIOps for short are built upon the foundations of machine learning. So what exactly are the differences between the three? Let's begin with the list of software activities covered in DevOps. DevOps deals with development of [[Software Integration]] between software functions, testing, automation, and deployment.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/devops-mlops-genaiops?u=76281980&t=95)** It also covers monitoring of deployed software, collecting tracers, and measuring metrics. MLOps builds upon DevOps. It covers all the activities of DevOps. In addition, it also covers machine learning-specific activities. This includes [[Feature Engineering]] for training data, automating ML with AutoML, data and model governance, experiment tracking, and model monitoring. GenAIOps builds upon MLOps. It covers all the activities of DevOps and MLOps. In addition, it covers [[Generative AI|GenAI]]-specific activities too. This includes model fine-tuning, [[Prompt Engineering]], synthetic data generation, chain and agent management, embeddings management, guardrails for GenAI, and integrating tools for agents. In this course, we will focus on the GenAI-specific activities. If you are not familiar with DevOps and MLOps, please check out the prerequisite courses mentioned in the course coverage and prerequisites document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (12), [[MLOps]] (6), [[Generative AI|Genai]] (3), [[Software Development]] (2), [[Generative AI]] (1)
> **Definitions:** is a  (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)

#### [The GenAIOps lifecycle](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=0)** - [Instructor] Let's now discuss the key activities in building out a [[Generative AI|Gen AI]] application. This is the [[Generative AI|GenAI]] Lifecycle that drives GenAIOps. As discussed in the previous video, the GenAIOps lifecycle depends upon the [[MLOps]] lifecycle. It adds unique capabilities and activities that are specific to Gen AI. A typical Gen AI project is expected to go through most, if not all the activities discussed here. Let's discuss the GenAIOps Lifecycle now. Similar to machine learning, the GenAIOps lifecycle also starts with the [[Requirements Analysis]] for the application or project. In most Gen AI Projects, pre-trained Gen AI models are used. They need to be evaluated or fine tuned for the project. We need data for such [[Fine Tuning]] and evaluation. If real world data is not available or is limited, synthetic data generation is used to augment this data set. Pre-trained foundation GenAI models are acquired either from open source or from paid providers for the project. This model then goes through evaluation and fine tuning using the data set collected for this purpose. When the model's performance is found satisfactory, it is then promoted for application use. [[Prompt Engineering]] is a key activity in GenAIOps that is required to adapt the model
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/the-genaiops-lifecycle?u=76281980&t=96)** to perform the tasks required by the Gen AI application. In addition, applications may use knowledge bases. Source data needs to be processed and embedding representations need to be created. These are then stored in vector or graph [[Databases]] for future use. Similarly, [[AI Agents]] may need to be developed for the specific use case. LLM chains may need to be built to execute workflows. The model, databases, agents and chains are then integrated and deployed together as an application bundle. To protect the application and ensure [[Ethics]] and compliance, guardrails may need to be added to the deployment. The application, along with its models and data, is used for serving and processing user requests. From the application, telemetry is collected. This is then used to compute metrics and monitor the performance of the application and models. The data collected may be used to enrich the fine tuning and evaluation dataset. This lifecycle is iterative. When new data is available, or when new foundation models are available, the process is repeated to improve the performance of the application. This is a continuous improvement process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (6), [[Fine Tuning]] (3), [[Generative AI|Genai]] (2), [[Databases]] (2), [[MLOps]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** llm (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Planning genAI projects](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=0)** - [Narrator] What does it take to plan [[Generative AI|GenAI]] projects? Planning and execution of GenAI projects closely resembles that of regular [[Software Projects]]. There are some key special considerations that need to be implemented. What are these additional considerations? The first is stakeholder expectations. Unlike software that is deterministic, GenAI models are probabilistic. They are prone to errors and bias. Sometimes, the effects are severe. Stakeholders need to understand the unique challenges with GenAI applications. Expectations for the project need to be set accordingly. Next, the requirements for the project need to be identified. Requirements for a probabilistic model need to consider the expected range of results and how errors, expectations, and unexpected behavior will be handled. Executing a GenAI project needs a skillset that covers machine learning, [[Data Science]], software engineering, and [[DevOps]]. Skill requirements need to be assessed and a team needs to be assembled with the required skills. The [[User Experience (UX)|user experience]] for GenAI applications is unique because it involves a lot of unstructured content. Chances of user errors are higher. Results need to be presented in a usable manner. GenAI projects use several third-party [[Microsoft Products|products]].
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/planning-gen-ai-projects?u=76281980&t=96)** This includes foundation models, ML hosting platforms, [[Vector Databases]], and agentic tool integrations. Managing these third-party integrations, their use, and cost is a key part of GenAI project planning. An enterprise GenAI project needs to conform to the [[Responsible AI]] policies and processes of the enterprise. This includes abuse, [[Ethics]], and safety considerations. GenAI planning needs to factor in these requirements and ensure that they are incorporated into project execution. Foundation models in GenAI are expensive to build and use. It's easy for budget overruns if these are not planned and executed well. Cost and budgeting control processes are a key to GenAI planning. Similar to software projects, GenAI projects also have metrics. This includes model metrics like perplexity, software metrics like latency, and [[Business Metrics]] like self-service rates. These metrics need to be planned ahead and tracked during the project. Having discussed the considerations for GenAI planning, let's now get into project execution with GenAI ops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (15), [[Software Projects]] (2), [[Data Science]] (1), [[DevOps]] (1), [[User Experience (UX)|User experience]] (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)


### 2. Model Training in Gen AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Training phase in generative AI](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=0)** - [Presenter] In this chapter, we will explore the training phase in [[Generative AI|GenAI]] and how GenAIOps comes into play here. How are training models different in GenAI compared to traditional machine learning? In GenAI, there are two key tasks, namely pretraining and fine-tuning in the training phase. In pretraining, the goal is to create a GenAI model from scratch. These models are also called foundation models. These models are huge insights with billions of model parameters. The goal of pre-training is to create a general purpose model using general purpose datasets. Typically, datasets like the entire Wikipedia are used to build foundation models. The foundation model learns general patterns and structures in data. Typically, the model learns linguistics as well as general knowledge from the dataset. Building these models takes significant effort and time. This is an expensive process, hence, only few models are built and shared in the GenAI world. The other task is training GenAI models for fine-tuning. In fine-tuning, a foundation model is taken and then fine-tuned to a specific domain or task. This is done when the foundation model does not sufficiently handle the specific domain or task. For fine-tuning, domain or task-specific datasets are used.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=95)** These datasets are typically enterprise-specific and collected from internal sources. This helps the model learn task-specific patterns and structures. This learning can supplement or override existing knowledge captured within the foundation model. This fine-tuning process costs significantly lower than pretraining. It also takes less time when the dataset are readily available. How are enterprises training GenAI? In most cases, enterprises use fine-tuning to customize a foundation model to the use case using use case-specific datasets. What is the process of training typically followed in enterprises For GenAI? it starts with preparing datasets for evaluation and fine-tuning. This includes curating raw data, processing transformation, data labeling, and associated [[Data Governance]]. Next, a candidate GenAI model is selected for fine-tuning. Sometimes, a few candidates are selected and fine-tuned before selecting one of them based on performance. The selection process includes creating a list of selection criteria, researching available models, and comparing performance. The candidate model is fine-tuned using the datasets creator. Several techniques of fine-tuning exist. This includes tuning the model weights, hyperparameter tuning, low-rank adaption, and parameter-efficient fine-tuning.
>
> **[3:11](https://www.linkedin.com/learning/genaiops-foundations/training-phase-in-gen-ai?u=76281980&t=191)** Then the fine-tuned model is evaluated using the evaluation dataset. Metrics are computed to measure performance. Human feedback may be included. This process can be automated and tracked for control. If evaluation results are not satisfactory, then the process goes back to fine-tuning. Additional techniques can be tried to see if the model performance improves. If fine-tuning still does not provide satisfactory results, then an alternate foundation model may be selected, fine- tuned, and evaluated. If still satisfactory results are not obtained, then the training data is analyzed to see if there are missing key samples. Training data can be augmented and the process is repeated again. As seen here, the training process is an iterative process and will continue for several iterations until satisfactory results are obtained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (9), [[Data Governance]] (1)
> **Definitions:** is an  (2)
> **Speakers:** - [presenter] (1)

#### [Data for evaluaton and fine-tuning](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=0)** - [Instructor] What are the characteristics of data for evaluation and fine-tuning? How are they managed in [[Generative AI|GenAI]] ops? GenAI applications deal with data of different types, size, and formats. This includes structured tables unstructured text, images, audio, and video. Data for evaluation and fine-tuning reflect the same characteristics. Such data needs to be acquired, processed, and governed with techniques appropriate for the formats. What are the various elements of data for GenAI? What do we expect to find in a data set? First comes the prompt. The prompt contains the user prompt, which is the input the user provides to the model. Sample of such prompts are needed in the data set. Then comes the system prompt or instructions to the GenAI model. These instructions may be static for a given application or use case. Prompts need to be collected to cover a variety of scenarios and workflows that are possible within the use case. They should also have samples for error and exception conditions. Associated with each prompt in the dataset is an expected response. This is the response that the GenAI model generates for the user prompt. This can be of different formats. It can be multi-format also. There may be limitations on the type of content expected, including text, audio, and images.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=95)** There can be specific formats, like [[JSON]] or jpeg. GenAI models may produce variable results for the same prompt. The expected response may be similar to the expected response for generation use cases, and may be exact when it comes to classification use cases. A context can also be associated with each prompt. This is the additional information that is provided to the prompt. This is background information provided to the GenAI model, which is used to provide associated information. The most used context is data retrieved from [[Vector Databases]] in [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] use cases. History of the current conversation can also be provided to the model to handle follow up queries. What is the workflow for [[Data Collection]] and processing for GenAI? Raw data is acquired from data sources for the specific use case. This can be historical data, human-generated data, or machine-generated data. This data goes through the process of cleaning and filtering. De-biasing techniques can be applied to remove sampling bias. Toxic content may also be detected and removed. Labels are added for expected responses. This may be hand-labeled by humans, it can also be machine-generated. Data for evaluation and fine-tuning needs to be governed for safety and control. This includes versioning data,
>
> **[3:08](https://www.linkedin.com/learning/genaiops-foundations/data-for-evaluaton-and-finetuning?u=76281980&t=188)** storing them in secure locations with encryption, controlling access to data by users, and tracking the lineage of data from its source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (8), [[JSON]] (1), [[Vector Databases]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Data Collection]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** json (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI automation pipelines](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=0)** - [Instructor] Let's now discuss automated evaluation and fine-tuning pipelines for [[Generative AI|GenAI]]. Automation provides repeatability. It is a key tool in [[DevOps]], [[MLOps]] and in GenAIOps. Building automated pipelines for evaluation and fine-tuning ensures repeatability of experiments. It also improves efficiency when iterating over experiments. It helps track the history of experiments and compare results reliably. What does a typical GenAI evaluation and fine-tuning pipeline look like? For both evaluation and fine-tuning, we need a curated dataset as discussed in the previous video. Evaluation and fine-tuning can both use the same dataset, or the dataset can be split for separate users. Fine-tuning is done by a script. This script can perform several fine-tuning functions like parameter tuning, hyper parameter tuning, or parameter efficient tuning. This can be run in a managed service like [[Kubernetes]]. The fine-tuning script picks up a base model from a model registry. The model registry stores and manages models and their versions. The repository has [[Version Control]], access control, and traceability of usage. After fine-tuning, the resulting new model version is also stored in the model repository. The traces and results of the fine-tuning exercise
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-automation-pipelines?u=76281980&t=94)** are stored in an experiment tracking system. Several out-of-the-box experiment tracking systems are available. The results are then used to create a final summary of the fine-tuning exercise. Similarly, an evaluation script can be used to evaluate foundation models or fine-tuned models. The evaluation script pulls a given version of a model from the model registry. It uses the evaluation dataset to evaluate the model. The results of evaluation are once again stored in the experiment tracking system. A summary of the experiment produces metrics that can be compared with baseline or previous evaluations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (2), [[DevOps]] (1), [[MLOps]] (1), [[Kubernetes]] (1), [[Version Control]] (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Model lifecycle management](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=0)** - [Instructor] Let's discuss managing the lifecycle of a [[Generative AI|GenAI]] model in this video. GenAI models go through a lifecycle of creation, fine-tuning, use, and retirement. Implementing a managed lifecycle for GenAI models helps to methodically create, test, and promote models. This ensures traceability, avoids mistakes, and provides safety for the application. What are the stages in a model lifecycle? It begins with creating a new version of the GenAI model. This model can be created from scratch or fine-tuned from an existing version of the model. The model is then evaluated and tested. Its performance is measured and compared with benchmarks and thresholds. It is also tested for safety and compliance. Once a model successfully passes evaluation, it's ready for use. The model is then promoted to production. This may go through multiple stages, like staging and canneries before wide deployment. During deployment, the model is again monitored for performance and safety. When a newer version of the model is available, the current version is retired. The version of the model is marked as retired, and all artifacts related to this version of the model are archived. The artifacts would include [[Fine Tuning]] details, evaluation results, and production use metrics. Let's also discuss some best practices for model lifecycle management.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/model-lifecycle-management?u=76281980&t=95)** It is recommended to use best-of-breed model registries for managing models, rather than building your own lifecycle management system. These systems provide traceability of the model to associated software versions, data sets, and results. Today, popular machine learning platforms provide model registries and lifecycle management tracking. These include top cloud providers like [[AWS SageMaker]], [[Google]] [[Vertex]] AI, and [[Microsoft Azure|Azure]] ML. There are also open source frameworks available like QFlow and [[MLflow]], which provide similar capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (4), [[Fine Tuning]] (1), [[AWS SageMaker]] (1), [[Google]] (1), [[Vertex]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Evaluation and finetuning tracking](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=0)** - [Instructor] Let's discuss tracking, evaluation, and [[Fine Tuning]] experiments for [[Generative AI|Gen AI]] Ops in this video. As seen in the previous videos, fine tuning and evaluation are iterative processes. They also repeat when new scenarios emerge in the use case and the model needs to be additionally fine tuned and evaluated. Using a tracking system helps to see the progression in model performance over time. It also helps create benchmarks against which new models can be compared with. What do we track in evaluation and fine tuning? First, there are inputs that need to be tracked. The version of the data set that is used for evaluation or fine tuning needs to be tracked. Then comes the version of the software used. This could be evaluation or fine tuning scripts, as well as other software tools. If any kind of context is used with the prompt, then those should also be versioned and tracked. Next comes the output. The responses from the Gen AI model needs to be tracked. Any assessment of performance, including accuracy, recall, and bias, are also tracked. Summaries created from the logs and traces needs to be cataloged. Finally, decisions made based on the results need to be added to the output list for tracking. This includes pass fail results as well as the next steps decided. Then comes the model that is used for experiments. The version of the model used
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/evaluation-and-finetuning-tracking?u=76281980&t=93)** for each experiment needs to be tracked. The parameters for the model used need to be frozen and tracked along with the version. Changes during fine tuning, whether they are changes to hyper parameters or other settings need to be tracked. The environment in which the fine tuning or evaluation is done should be along with the versions of [[Hardware]] and software used. How do we track evaluations and fine tuning? To track experiments in machine learning, there are several open source and commercial software that are available. This includes Weights&Biases, Neptune and [[MLflow]]. There are also tracking tools available on cloud platforms like AWS and GCP. It's recommended that these tracking tools are integrated into the automated evaluation and fine tuning pipelines. This ensures that all experiments are tracked consistently and the results are cataloged. Finally, it's a good practice to archive the results over time and then compare the performance of the models as use cases and scenarios change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (9), [[Generative AI|Gen ai]] (2), [[Hardware]] (1), [[MLflow]] (1)
> **Env Vars:** aws (1), gcp (1)
> **Best Practices:** recommended (1), good practice (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)


### 3. Developing Gen AI Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [The generative AI application stack](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=0)** - [Instructor] Once a [[Generative AI|GenAI]] model is finalized, we need to build an application stack around it to provide services to the users. In this chapter, we will focus on key development aspects when building GenAI applications. A GenAI application contains several components. It has both ML and non-ML components. It also has data. These components need to work together to provide the required service. Let's discuss the key components of a reference GenAI stack. First, we have the non-ML components, namely the business application stack. It has user interfaces for users to interact with. It has backend business logic that enforces business requirements. There can be APIs that allow applications to interact with the service. There can be data stores that store business data. Then comes the AI/ML components. Here we have the GenAI models we decided on in the previous chapter. There can be other classical models too. Then there is the [[Hardware]] infrastructure, like GPUs, that are needed to run the models. [[AI Agents]] can be part of the stack too for planning and reasoning. There could be guardrails in the stack, like bias detectors and hallucination detectors to provide safety and security for ML. Next comes the data elements related to AI.
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/the-gen-ai-application-stack?u=76281980&t=94)** There can be [[Data Pipelines]] that bring in raw data into the models and carry back outcomes of the models. There can be vector stores and graph stores used for retrieval augmented generation. Prompt stores are used to store prompts and prompt templates for reuse. Memory services like caches can be used to store context and conversation history. Finally, there are also operations components of the stack. It contains CI/CD pipelines for deploying the ML, non-ML, and data components. Logging services can be enabled to log events happening in the stack. Trace data can be collected from the model for observability and improvements. Then metrics can be computed on this trace data for analytics and troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (5), [[Hardware]] (1), [[AI Agents]] (1), [[Data Pipelines]] (1)
> **CLI Commands:** cd (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Prompt management](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=0)** - [Presenter] Prompts are an integral part of the [[Generative AI|GenAI]] framework, helping drive the models to produce the required outcomes. Even though prompts are created in natural language, they contain business requirements and logic. They should be treated like software code also. This means we need to enforce the same processes as applied to software code for managing prompts. Let's discuss some best practices for prompt management in GenAIOps. Prompts should be specific and clearly state the required behavior expected from the model. It's recommended to use prompt templates. Templates capture best-of-breed instructions and can provide consistency across use cases and applications. Like software code, prompts need to be created in a modular fashion. System instructions, user prompts, context, and additional guardrail instructions should be organized with placeholders. Prompts should also have error handling instructions if issues are found with the input, context, or outcomes. Today, prompt libraries are available that capture best practices and are optimized for specific models. Use them when possible. It's important to keep prompts concise to manage token limits and also to not confuse the model. It's recommended to test the prompts independently directly with the model and fine tune them to get the right outcomes before they are integrated into the application code.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/prompt-management?u=76281980&t=95)** Like software code, prompts also need to be managed with source code control. Typically, the application directory structure should support a special directory for prompts where all the prompt files are stored and managed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (1)
> **Best Practices:** recommended (2)
> **Exercise Files:** source code (1)
> **Speakers:** - [presenter] (1)

#### [Memory and embedding management](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=0)** - [Person] Next, let's discuss memory and embeddings, and how they should be managed under the [[Generative AI|GenAI]] apps framework. The GenAI application stack may have classical data stores to store business data. In addition, for GenAI purposes, it also needs to store short-term and long-term memory. RAG applications may require storing and managing embeddings. What memory do we use for GenAI, and what are the key operations considerations for them? Let's talk about short-term memory. Short-term memory is used to store the conversation history between the user and the model. It can be tracked for a single prompt, capturing all individual steps taken to execute the prompt. It can also track all prompts and responses for a given user session in a chat-bot. Typically, for memory, caches are used to store such data. It can also be stored locally within the application memory, or can use external caches like... (indistinct) When building GenAI applications, consideration should be given to the required scale for these caches. Redundancy is also a required consideration to ensure that the history is not lost due to application crashes. It's recommended to archive conversation history to a disc storage for long-term use. How about long-term memory? This memory is used for long-term archival of conversational history.
>
> **[1:32](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=92)** It is also supplemented with additional traces and metrics. Long-term history can be used to understand user behavior over a longer period of time and customize application behavior to suit each user. This memory can be used across multiple sessions for a given user. Long-term memory is typically stored on disk, either as files or in document [[Databases]]. The length and amount of storage will determine the cost for such storage, so the expected use should be considered when determining the length and content for storage. It's recommended to deploy pruning scripts that can automatically prune old data to keep the storage sizes in control. Next, let's look at managing embeddings in GenAI. Embeddings are vector representations of documents. Documents that are similar to each other have vectors that are closer to each other in the vector space. Embeddings enable [[Semantic Search]] in [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] applications to find documents similar to the user query. Embedding models are used to convert documents to corresponding vector representations. Data-processing pipelines for RAG typically incorporate embedding modules to create embeddings from documents. Embeddings can be multi-model too, by representing text, audio and video in embedding formats. It is recommended to test embeddings in isolation
>
> **[3:06](https://www.linkedin.com/learning/genaiops-foundations/memory-and-embedding-management?u=76281980&t=186)** to ensure that semantic search provides the required results. Multiple embedding models should be benchmarked for a use-case to find the most suitable embedding model. These benchmarks can then be automated in GenAI apps to provide efficiency in benchmarking. The performance of embeddings should be monitored to ensure that they are delivering results as expected. Metrics like recall and mean reciprocal rank can be used for such purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (7), [[Semantic Search]] (2), [[Databases]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1)
> **Best Practices:** recommended (3)
> **CLI Commands:** find (2)
> **Env Vars:** rag (2)
> **Analogies:** similar to (2)
> **Speakers:** - [person] (1)

#### [Agents management](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=0)** - [Instructor] [[AI Agents]] are a key component of [[Generative AI|GenAI]] and they also need to be managed as part of GenAI ops. What is an AI agent? An AI agent is an autonomous system driven by GenAI models. These agents can collaborate with humans and other agents to make decisions and take actions independently. Let's quickly review key concepts about AI agents. An AI agent is autonomous. It can do its own reasoning, make decisions, drive actions to closure with little or no intervention. They are also self-contained and they manage their own workflows and resources. AI agents use GenAI models under the hood for reasoning, planning, and execution. They execute their plans through tools. Tools provide integration with other applications and systems for the agent to collaborate with. Agents are quickly becoming a key part of many business applications. AgentOps is an emerging domain within GenAI ops. AgentOps provides a framework specifically to build and manage AI agents within a GenAI stack. Let's discuss some best practices for building AI agents. Even though agents are part of a GenAI application stack, it's recommended to build and test them independently. This is similar to how software modules are built and tested before integrating them. Once ready, the agent should go through [[Integration Testing]]
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/agents-management?u=76281980&t=95)** along with the [[Representational State Transfer (REST)|rest]] of the application stack. This ensures that their collaboration with other parts of the stack are working as expected. To test agents, it's recommended to create test datasets. These datasets capture various scenarios in which an agent can be used. It should also cover error and exception cases. Models used inside AI agents should be managed through model management practices discussed in this course. The model versions should be associated with corresponding agent versions and test dataset versions to ensure tracking and compliance. It's recommended to create automated CI/CD pipelines dedicated to agents. Agents are similar to software modules, so they should be built and managed similar to software modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (7), [[AI Agents]] (6), [[Integration Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), cd (1)
> **Definitions:** is an  (3)
> **Analogies:** similar to (3)
> **Best Practices:** recommended (3)
> **Speakers:** - [instructor] (1)

#### [Agent tools integrations](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=0)** - [Instructor] Having discussed [[AI Agents]], let's now look at integrating agents with other systems using tools. These tools provide integrations to other systems to read data, write transactions, and perform workflows. What kinds of integrations do agent tools provide? It could be to a database, like RDBMS, or [[Vector Databases]] to perform read and write operations. It can integrate with enterprise business applications to execute business workflows, like placing a purchase request. It can integrate with cloud [[SaaS]] services, like Salesforce, to read accounts and create orders. Equipment like cameras, machinery, and appliances, can be integrated to agents using tools. Finally, they can also integrate and collaborate with other agents to execute business functions. What are some of the GenAIOps best practices for building tools for agents? Tools are used for integrations. Robustness and [[Resiliency]] of integrations is important for these tools. This includes ensuring error handling in tools' code, having redundancy for integrating applications, and handling exceptions gracefully. Tools also need their own test suites, and their testing should be automated. This testing needs to be done with integration into their source systems. Tools should be integrated into CI/CD, too. This can either be done as part of the agent itself
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/agent-tools-integrations?u=76281980&t=94)** or as separate integrations if the tool is a reusable module. Observability hooks need to be added to tools to emit traces about the request they handle and the responses that are encountered.

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
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=0)** - [Instructor] How do we test [[Generative AI|GenAI]] apps? As seen in an earlier video, a GenAI app consists of several building blocks. The entire application stack needs to be tested independently as well as in an integrated manner to ensure robustness and combined effectiveness. What are the types of testing required for a GenAI application? We need to unit test individual building blocks, software modules, and agents. We need to then assemble the entire app and perform [[Integration Testing]] to ensure that the building blocks can work together. [[Usability Testing]] is important if the GenAI app has a user interface like a chat bot. System testing ensures that the system is stable and reliable under stress and can scale without performance degradation. These four types of testing are general [[Software Development]] practices. Now let's look at GenAI specific testing that's needed. First, there is prompt testing. We need to test each prompt template individually to ensure that they perform the expected functions in all scenarios. Model evaluations is a kind of testing to ensure that the model performs per expectations of the business use case. Tool integration testing ensures that the integration between the agent and other systems work as desired. Security and safety testing ensures that the GenAI model is not susceptible to security and safety risks. This requires adding guardrails
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/testing-gen-ai-applications?u=76281980&t=95)** for required protection and testing them to make sure that the application is protected in risky scenarios. With this discussion, we complete the development part of GenAI apps. In the next chapter, we will discuss deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (7), [[Integration Testing]] (2), [[Usability Testing]] (1), [[Software Development]] (1)
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
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=0)** - [Instructor] What are the common patterns for [[Generative AI|Gen AI]] apps deployment? Like general software applications, gen AI can also be either deployed in local clusters or in public clouds. It can also be a hybrid deployment. Let's explore these options in this video. We begin with the local deployment pattern. This pattern is typically used for deploying the Gen AI app on enterprise networks. The app has three substacks, namely the business application, data, and the Gen AI model. In the local deployment mode, all three substack are deployed in the local data center. The entire stack is deployed and managed by the enterprise, so they can exercise more control on the deployment, scaling, and operations, data and model protection are also taken care by the enterprise. However, it comes at a higher operations cost to run the application. Some enterprises are willing to take on the additional cost as it provides more control over security and [[Privacy]]. [[Private Clouds]] on cloud platforms like AWS GCP and [[Microsoft Azure|Azure]] also fall into this category. Even though the infrastructure is managed by the provider, the enterprise still manages the application stack. Next comes the cloud deployment pattern. Here the application stack is built and deployed using services provided by providers like AWS GCP and Azure. [[SaaS]] and serverless modes of deployment are used
>
> **[1:38](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-patterns?u=76281980&t=98)** where the components for data and model are managed by the service provider. The enterprise has lower control on the deployment and operations of these serverless services. The benefit here is lower management costs, small and medium businesses usually prefer this pattern as it minimizes the cost of managing the deployment. Since data is processed and stored in shared resources, there are concerns over privacy of data in these cases. The final pattern is the hybrid deployment pattern. In this case, both the application and the data is deployed in the private cluster, providing control on the deployment to the enterprise. The model is sourced from a model as a service provider like Open AI, or other cloud providers. The enterprise does not manage the model, but only uses the model through an APA service. In this case, the enterprise does not incur the cost of training, deployment, and managing the Gen AI model. It only needs to deal with the application and data stacks. Since data is stored locally, there are fewer concerns over security and privacy of data. This is the most used pattern in Gen AI as it provides data protection while removing the burden of managing the model from the enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (6), [[Privacy]] (3), [[Microsoft Azure|Azure]] (2), [[Private Clouds]] (1), [[SaaS]] (1)
> **Env Vars:** aws (2), gcp (2), apa (1)
> **CLI Commands:** aws (2)
> **Speakers:** - [instructor] (1)

#### [Infrastructure planning](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=0)** - [Instructor] Infrastructure for models and data are critical when planning the deployment of [[Generative AI|GenAI]] applications. There are some special considerations when planning for model deployment in GenAI, irrespective of whether the model is hosted locally or used as a third-party service. What kinds of infrastructure considerations are there? Let's begin with the self-hosted option. Gen I models are huge and require significant compute resources to run them. To begin with, they need GPUs or TPUs for execution. Proper sizing is needed to ensure that the right capacity of such resources is provisioned for the model. Models also need significant memory for them to run. Again, sizing estimates are needed for provisioning the right amount of resources. [[Hardware]] and software accelerators may also be needed to support the deployment of the self-hosted models. Serving frameworks may also be used for optimized deployment and management. Networking is also a key requirement to ensure that there is enough bandwidth to support the expected scale of requests to the models. A single GenAI model instance may be used by multiple GenAI apps, so these deployment considerations need to be factored in. The other option is the model as a service option. Here we don't have to care about compute resources, but there are other considerations.
>
> **[1:35](https://www.linkedin.com/learning/genaiops-foundations/infrastructure-planning?u=76281980&t=95)** Token budgets need to be determined so the right amount of capacity can be provisioned on the service provider side. The expected request rates and associated token rates also need to be estimated and associated bandwidth needs to be provisioned. Latency considerations for the application should be included to determine the type and level of service to be provisioned. Scaling is another consideration, and ideally, the service provider should support on-demand scaling. The model may be deployed in multiple geolocations to be closer to the application deployment to minimize latency. What are the considerations for planning for data in GenAI? It's again important to choose the right type of data stores based on the use case and scale requirements. Cost of the data stores should also be considered. Data sizing is a key planning requirement to ensure that the right capacity is provisioned for the data stores. Access control to the data stores should be restricted to the application and administrators only, as confidential and private data may be stored in these data stores. Data encryption should be used for data stores to protect data. Private data should be protected from visibility with techniques like encryption and redaction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (5), [[Hardware]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI deployment pipelines](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-deployment-pipelines?u=76281980&t=0)** - [Narrator] How does the [[Generative AI|GenAI]] deployment pipelines look like? GenAI models are huge and usually cannot be loaded into memory of the application. They are almost always deployed separately on their own resources. Exceptions could be when the model is deployed on devices, but these models would be relatively smaller in size. Let's walk through a typical deployment pipeline for GenAI. So we have the model, the non-ML app code and agents in separate repos. As discussed in the previous chapters, they are recommended to be managed independently. The model may undergo fine-tuning to create newer versions of the model. Such fine-tuned versions will also be managed in the model repo or registery. The agents in the non-ML app will go through their own build and packaging process to create deployable artifacts. Each of the artifacts go through automated testing individually as well as in an integration setup. During this process, the versions of the artifacts are tracked and linked to the test results. The approved versions of the artifacts are then deployed to production. They go through independent deployment pipelines, often coordinated to ensure that the right versions of the artifacts are deployed together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (3)
> **Best Practices:** recommended (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Scaling generative AI deployments](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/scaling-gen-ai-deployments?u=76281980&t=0)** - [Instructor] How do we scale [[Generative AI|GenAI]] deployments? The best practices for scaling in [[MLOps]] also covers scaling for GenAIOps. Beyond these, the special considerations are for the GenAI models and its integration with the [[Representational State Transfer (REST)|rest]] of the application stack. What are some key techniques to scale GenAI models? Horizontal scaling of model deployment is a popular technique to deploy models in n + 1 configurations. This helps to scale to high volumes with no application changes. Vertical scaling is also possible by using higher capacity GPUs and TPUs. This is, however, limited based on the model architecture and the use case. [[Batch Processing]] works very well to process multiple requests concurrently on GPUs, thereby scaling the system. Streaming can also be used to scale with minimum latency for concurrent requests. Quantization and cloning are techniques that help reduce the size of the model, so more instances of the model can fit into the same set of resources. Similarly, model distillation can be used to create a smaller version of the model. More instances of the model can be now deployed on the same set of resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (3), [[MLOps]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Batch Processing]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Guardrails deployments](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=0)** - [Instructor] Let's discuss deploying guardrails for [[Generative AI|GenAI]] in this video. GenAI guardrails are a vital building block for GenAI deployment. Guardrails help implement [[Responsible AI]] for the application. They ensure safety, reliability, [[Ethics]], compliance, and control. This ensures that the responses generated from the model are safe for consumption. What are the popular guardrails for GenAI? Prompt injection guardrails detect if the incoming prompts are poisoned to trigger undesirable behavior from the model. Offensive content guardrails block offensive and abusive content in prompts and responses. Hallucination detection guardrails check if the model responses are grounded in facts and are safe to be returned to the user. Bias guardrails check if the responses exhibit bias towards a gender, race, demographic, or concept. Compliance guardrails ensure compliance with regulatory and responsible AI requirements. PII protection guardrails help redact personally identifiable information from prompts and responses. Tone moderation guardrails check and correct the tone of the responses generated by the model. Harmful content guardrails check if the content is creating harm like code jailbreaks and destructive outcomes. How do we deploy guardrails?
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/guardrails-deployments?u=76281980&t=93)** We have the GenAI App Stack that is collaborating with the GenAI model. The popular deployment pattern is to insert a GenAI Gateway in between the application and the model. The gateway monitors all requests to the model and responses from the model. The gateway will invoke a set of configured guardrails for the requests and responses. If the guardrails detect any exceptions, then the gateway would proceed to block that request or response. The gateway would also generate traces that contain the results of the guardrails, which can then be used to monitor guardrail performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (7), [[Responsible AI]] (2), [[Ethics]] (1)
> **Env Vars:** pii (1)
> **Speakers:** - [instructor] (1)


### 5. Monitoring and Troubleshooting

[↑ Back to Table of Contents](#table-of-contents)

#### [Generative AI monitoring pipelines](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=0)** - [Instructor] In this chapter, we will focus on monitoring [[Generative AI|GenAI]] applications and models. We begin with the discussion on monitoring pipelines. General software services are monitored through logs, as well as system traces for CPU, memory, and other resources. These apply to the non-ML services in the GenAI app stack. In addition, for GenAI, we need to monitor the interactions to and from the model. What kind of data should be collected for GenAI specifically? We need to track the requests that are going to the LLM, including prompts and context. We need to also track the responses from the LLM. Token usage is a key measure to track, as it has significant cost implications. Latency for requests is also a key measure to track to ensure that users are getting their responses in time. For RAG use cases, the context retrieved using [[Semantic Search]] and any related metrics also need to be tracked. For agents, tool usage, including the inputs provided and the outputs obtained need to be tracked. The outcomes from the guardrails used in the application stack also need to be tracked. All these measures provide a 360 view of how the GenAI model is being used in the app stack. What does the monitoring pipeline for GenAI look like? In the previous chapter,
>
> **[1:32](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-monitoring-pipelines?u=76281980&t=92)** we're discussing using an LLM gateway for guardrails. It'll help for monitoring also. The LLM gateway will collect the requests and the responses for the GenAI model and push it to the monitoring pipeline. It will also collect token usage, latency, and other metrics. Guardrails will also publish their results to the same monitoring pipeline. The GenAI app will collect non-ML traces, like logs and resource usage, and push them to the same monitoring pipeline. The monitoring pipeline will then process these traces and store them. It will then be used to compute metrics and generate alerts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (8), [[Semantic Search]] (1)
> **Env Vars:** llm (4), cpu (1), rag (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Metrics for generative AI](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=0)** - [Instructor] What kinds of metrics are computed for [[Generative AI|gen AI]]? As discussed in the previous video, monitoring pipelines compute metrics based on the data they collect. These metrics can be general system metrics like CPU utilization, application metrics like requests per second, as well as gen AI metrics. What are the popular gen AI metrics that are computed? F1-score is used to measure the accuracy of predictions, mostly in classification use cases. Perplexity measures the uncertainty in the model while making language-based generation. Average latency is the observed latency for requests to the gen AI model. Cost per query is the average cost to execute queries with the model. Energy consumption is the measure of energy used to host and use the model. Mean reciprocal rank is a popular metric to measure the accuracy of retrieval systems. Fairness score is computed based on the results from bias guardrail. Toxicity score is computed based on the results from the harmful content guardrails. Hallucination rate is the measure of responses that have hallucinated in a given period of time. Trustworthiness score measures the reliability of the facts generated by the model. Adversial robustness rate measures how well the model is able to overcome adversarial requests. There are several such metrics available
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/metrics-for-gen-ai?u=76281980&t=96)** and the right metrics to monitor should be chosen based on the specific gen AI app and its functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (5)
> **Env Vars:** cpu (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI traces](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=0)** - [Instructor] In the earlier video on pipelines, we discussed the type of data to collect for [[Generative AI|GenAI]]. Let's dive deeper into these details in this video. What is a GenAI trace? It is a detailed, structured log for every request sent to the GenAI model, its response, and associated information. How are GenAI traces collected? They are collected for every request or prompt, typically by a GenAI gateway. It is usually structured in a [[JSON]] format, so it provides flexibility in storage and processing. It is logged in the software services or in the GenAI gateway. It is collected through the GenAI monitoring pipeline, processed, and stored. The GenAI trace contains a wealth of information and serves as a great tool to understand about how the request was processed and response generated. It is a great tool for diagnostics and optimization. The traces are summarized periodically through metrics we discussed in the earlier video. What are the contents of a GenAI trace? First, there is content related to the input provided to the model. This includes the user prompt or query, the embeddings that are used to retrieve any context, meta information like user ID or tenant ID associated with the request, any context that was added to the request, traces from vector retrieval, results of adversarial attack detection,
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/gen-ai-traces?u=76281980&t=94)** and amount of PII that was detected. Then there is information related to the model used. This includes the specific model and its version that was used to process the request. Additionally, any hyperparameter settings, token counts, latency observed, and deployment details like geolocations are also logged. Finally, there is the output-related information, like the model response, hallucination score computed by the guardrail, toxicity score, any content that was filtered, any feedback received from the user, confidence score about the facts provided, and cost incurred. These are not exhaustive lists and can be extended to include any meaningful information that can be used for diagnostics and improvements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (9), [[JSON]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** json (1), pii (1)
> **Cross-References:** we discussed (2)
> **Speakers:** - [instructor] (1)

#### [Agent trajectories](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/agent-trajectories?u=76281980&t=0)** - [Instructor] Like we have traces for [[Generative AI|Gen AI]] model usage, we have trajectories for [[AI Agents]]. What is an agent trajectory? It's a chronological sequence of events that happened in the AI agent as it goes through fulfilling a request. It is a sequence of nodes, states, and actions that are visited by the request. Similar to Gen AI traces, trajectories are helpful in understanding what's happening inside an agent for diagnostics and identifying improvements. What does the trajectories contain? A trajectory captures the entire history of a request within an agent. It uses a request ID and a timestamp to tag every such event. The event may contain one or more of the following information. It has the request that I've sent to the LLM for planning, reasoning, or reflection, and the responses that are obtained, tools chosen for use in the request, the inputs provided to the tool, and the outputs from the tool, all reasoning decisions and iterations determined by the agent, any errors or exceptions encountered during the execution of the request, final results obtained and user feedback. Agent trajectories are also collected through the same Gen AI pipelines where they are processed and summarized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (3), [[AI Agents]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** llm (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshooting generative AI model behavior](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=0)** - [Instructor] Let's now discuss the support that [[Generative AI|GenAI]] apps need to provide. To troubleshoot model behavior for GenAI, troubleshooting GenAI problems is complex and time consuming. A structured troubleshooting framework that is supported by traces, metrics, tools, processes, and automation is needed to help in efficient and effective debugging of GenAI issues. What are the sources of problems in a GenAI app that is related to the model? The user or system prompts may not be effective in conveying the instructions to the model. The context provided may be inaccurate or incomplete for the model to use. The right GenAI model may not be chosen for the use case. The model's hyperparameters could have been set incorrectly, leading to undesirable outcomes. The guardrails may not be effective in identifying issues in the requests and responses. They may also flag false positives and decline correct requests and responses. What troubleshooting support is needed from GenAI apps to help in this regard? We need GenAI traces and AI agent trajectories that we discussed in the earlier videos. These need to be made available using tools that enable reading, sorting, and summarizing them. Pre-computer metrics help monitor the model behavior, and alerts on any threshold violations
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/troubleshooting-gen-ai-model-behavior?u=76281980&t=94)** are helpful to flag issues. Evaluation and benchmarking tools and scripts make it easier for engineers to test the models against preselected test data to measure their performance. Documentation for the use case or application is also important for understanding the business functions and design of the applications. Guides and runbook are an integral part of an operations framework to help in deploying, monitoring, and troubleshooting the applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (8)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 6. Security and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Ethics and compliance](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=0)** - [Presenter] In this chapter, we will discuss the [[Responsible AI]] considerations for [[Generative AI]] applications. We begin with [[Ethics]] and compliance. Implementation of ethics and compliance is a key responsibility of GenAIOps. Compliance to ethics and other statutory requirements need to be an integral part of a GenAIOps framework. What are some of the key [[Generative AI|GenAI]] requirements in ethics and compliance? It begins with what kinds of tasks can GenAI be used for? Statutory requirements and enterprise policies may mandate the need to protect against using GenAI for certain use cases like human profiling. Intellectual property copyrights on the training data and outputs is another key area where GenAIOps need to monitor for violations and escalate discrepancies. [[Personal Data Protection]] is a key regulatory requirement for which GenAIOps need to provide guardrails. Trade secrets of the company also need to be protected. Such information should not be exposed to the GenAI model or the customers. Every country and state may have additional regulations around the use of GenAI which also need to be complied with. So, what infrastructure should GenAIOps provide for compliance? It needs to provide instrumentation to track compliance like guardrails,
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/ethics-and-compliance?u=76281980&t=94)** fraud detectors, and pen tests. Data about compliance need to be collected and stored securely. Validation scripts are needed to periodically process the collected data and check if compliance is continued to be enforced. An alerting system is needed to escalate any discrepancies noticed to concerned individuals and systems. Remedial mechanisms like reporting and blocking needs to be automated so they can be deployed quickly when violations are noticed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (5), [[Ethics]] (4), [[Responsible AI]] (1), [[Generative AI]] (1), [[Personal Data Protection]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [presenter] (1)

#### [Protection against vulnerabilities](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=0)** - [Instructor] How can GenAIOps help with vulnerabilities? GenAIOps should provide a framework to monitor and protect the [[Generative AI|GenAI]] application, its artifacts, and data against potential vulnerabilities of GenAI. Let's review the [[OWASP]] top 10 vulnerabilities for GenAI. OWASP stands for Open [[Web Application Security]] Project. This is a nonprofit organization that helps developers to build secure applications. They have published a list of top 10 vulnerabilities for LLMs. All these vulnerabilities need to be considered on whether they apply for a given GenAI application, and required guardrails need to be enforced to protect against them. First comes prompt injection. Here, the user can provide a malicious prompt that can trick the model to return an unsafe result or expose confidential data. Insecure output can be produced by a model, especially when generating code. The code generated can have vulnerabilities, like cross-site scripting. In training data poisoning, malicious samples can be introduced into the training data set that is used to train or fine-tune a model, thereby making it behave in malicious ways. Denial of service attacks can also be launched on models, as they are also served through API calls. This leads to degradation
>
> **[1:33](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=93)** or failure of the client GenAI application. In supply chain vulnerabilities, malicious data can be introduced into the prompt through upstream applications or pre-processing modules, forcing the model to behave in an unsafe manner. Sensitive data exposure happens when the model accidentally reveals its training data or sensitive context data that is passed to it. Models have the ability to use plugins to execute tasks, but these plugins can themselves be unsafe. Excessive agency involves providing too much power to the model, allowing the model responses to trigger actions without human intervention. This can lead to disastrous results when the model output is compromised. Overreliance deals with an enterprise trusting a model too much. That business is dependent on the GenAI model for its success. A model can also be stolen, similar to software code. This may lead to exposing sensitive data used to train the model, and can be used for malicious business purposes. How can GenAIOps protect against these vulnerabilities? First, we need to deploy guardrails for known vulnerabilities, as discussed in the previous chapters. Guardrails themselves should be periodically tested and validated using automated scripts. This ensures that the guardrails are correctly calibrated for application use. Results of guardrails need to be collected
>
> **[3:08](https://www.linkedin.com/learning/genaiops-foundations/protection-against-vulnerabilities?u=76281980&t=188)** through GenAI traces, and stored. Metrics for guardrails, like hallucination rate, need to be computed periodically. Reports should be available through [[Dashboards]] for users to observe performance. Thresholds and alerts need to be supported in the tools, so when violations happen, required teams can be alerted to prevent further degradation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (7), [[OWASP]] (2), [[Web Application Security]] (1), [[Dashboards]] (1)
> **Env Vars:** owasp (2), api (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Toxicity and bias in generative AI](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=0)** - [Instructor] Toxicity and bias are two important trust considerations for [[Generative AI|GenAI]] applications. Let's discuss what they are and how to mitigate them. Let's begin with toxicity in GenAI. What is toxicity? Toxicity occurs when there is harmful, offensive, or inappropriate content. It can occur both in the input prompt or in the output response. Examples include profanity, adult content, or hurtful comments. End users are usually the ones who introduce toxic content in the inputs or prompts. When we see toxic content in the output or responses, it's usually because such content exists in the training data that is used to build the model. When such content is not controlled in a business context, it may be sent to customers or employees. This can significantly impact trust and also business revenues. How do we mitigate toxicity issues? First, it is important to understand the lineage of training data for the model being used, even if the model is an open source model or third-party offering. When training or fine-tuning with our own dataset, it's important to analyze each sample for toxic content and remove them from the dataset. Content filtering guardrails can help in detecting and removing such content from prompts and responses. There can also be profanity detection guardrails for user inputs
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=94)** to prevent such content making its way through the application. Next comes bias. What is bias? Bias happens when the model output is unfair or discriminatory. GenAI models can be provided inputs and asked to make decisions or recommendations. If the model considers a protected attribute like gender or race as part of its decision making process, it may be considered biased. Bias typically reinforces stereotypes and also marginalizes specific groups of people. The source of bias is typically the training data. Biased content, recommendations, and messages in the training data will make its way into the model's knowledge and will reflect in its outputs. Bias may influence business decisions if the GenAI model is used to do recommendations. For example, a candidate filtering system in a hiring process may bias based on the university the candidate studied in. When bias happens and it becomes public, it impacts the reputation of the business. How do we mitigate bias? An enterprise needs to have [[Responsible AI]] policies that sets the tone for how bias is handled. This identifies protected attributes and how biased content is handled in the applications. This serves as the guidance for implementation in the application. Training [[Data Lineage]] analysis
>
> **[3:06](https://www.linkedin.com/learning/genaiops-foundations/toxicity-and-bias-in-gen-ai?u=76281980&t=186)** is again required for bias mitigation. Debiasing is the process of analyzing the training or fine-tuning dataset for direct or indirect bias, and removing those samples that exhibit bias. Bias detection guardrails should also be used during inference to detect biased content and prevent it from reaching the end users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (4), [[Responsible AI]] (1), [[Data Lineage]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hallucinations](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=0)** - [Instructor] Hallucinations are a known limitation of generative models. Let's discuss what hallucinations are and how to control them. GenAIOps plays a key role in automating detection of hallucination and ensuring trusted outcomes for the users. What is hallucination in a [[Generative AI]] context? Hallucination happens when the output of the [[Generative AI|GenAI]] model is not supported by facts. A model output may provide data that is not true or events that have not happened. The output is disconnected from reality. Using this output for business processes may lead to incorrect results and loss of trust. Hallucinations happen because of how generative models are designed. A model can interpret independent facts as related and provide incorrect answers. One reason is the lack of contextual understanding, where the prompt does not have specific context for the question being asked. The training data also influences hallucination if it misrepresents facts. How do we manage hallucinations? It begins with using high-quality data sets for model fine-tuning. it is important to check the data sets for factual accuracy before using them for training. Domain specific fine-tuning will help the model understand a specific domain better. For example, models fine-tuned on healthcare specific data or insurance specific data will hallucinate less
>
> **[1:36](https://www.linkedin.com/learning/genaiops-foundations/hallucinations?u=76281980&t=96)** for prompts related to those domains. For enterprise use cases, use RAG whenever possible to provide accurate context to the model. Forcing the model to only use the context for facts will lower hallucinations significantly. Hallucination detection guardrails are especially helpful to analyze outputs for factual accuracy. Some of these guardrails use a second generative model to check the accuracy of the first one. [[Prompt Engineering]] is, again, important to ensure that the model has enough information to synthesize and accurate response to the prompt. Finally, human feedback is essential to check if any hallucinations are introduced in the outputs. Tracking them over time can help to fine-tune models with high-quality data to reduce hallucinations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Generative AI|Genai]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** rag (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Privacy protection in genAI](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=0)** - [Presenter] The final topic to discuss in this course is [[Privacy]] in [[Generative AI|GenAI]]. [[Data Privacy]] is a key customer and compliance requirement in GenAI. This is one of the key factors that enterprises are concerned about while implementing GenAI. GenAIOps need to provide automated production for data privacy. What are the areas of concern when it comes to data privacy in GenAI? Personal data may be accidentally introduced into the training dataset, context and prompts, or responses from the model. Similarly, confidential business data may also be exposed to the same areas. Users may not realize about [[Data Classification]] when they provide it in their prompts or context. Models may accidentally expose private data when creating responses. This may be introduced during their pre-training and may show up when a customer uses the model. How do we manage data privacy in GenAIOps? Training data needs to be analyzed to identify private data, and that should be redacted. Tools should be used for this purpose, so this detection and redaction could be automated. When processing prompts, PII redaction guardrails should be used to detect private data and redact them. Similarly, guardrails need to be deployed to analyze the output from GenAI models and redact them before sending them to the user.
>
> **[1:34](https://www.linkedin.com/learning/genaiops-foundations/privacy-protection-in-gen-ai?u=76281980&t=94)** Data classification checks need to be implemented either in the gateway or through guardrails to classify data in prompts and responses, and then decide if such data classes can be sent in the responses. This can classify data as strictly confidential, company confidential, or public. This brings us to the end of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (5), [[Data Privacy]] (4), [[Data Classification]] (2), [[Privacy]] (1)
> **Env Vars:** pii (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/genaiops-foundations/next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of the course. By now, you have an understanding of the key elements of GenAIOps and how they relate to [[DevOps]] and [[MLOps]]. You can take your learning even further. Implement a sample [[Generative AI|GenAI]] application using the processes and techniques learned in the course. Experiment with model evaluation and fine-tuning, model registries, experiment tracking systems, GenAI infrastructure, and metrics. Next, implement a GenAIOps system for your organization to streamline the development and deployment of GenAI. Explore further on additional GenAIOps topics, like LLMOps, RAGOps, and AgentOps. AI always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (3), [[DevOps]] (1), [[MLOps]] (1)
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