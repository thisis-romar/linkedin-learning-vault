---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mlops-essentials-model-development-and-integration
url: "https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration"
duration_minutes: 96
duration: 1h 36m
level: Intermediate
updated: 5/21/2025
learners: 16139
skills:
  - Machine Learning
  - MLOps
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGUwtitxe_Q0Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663181557273?e=2147483647&amp;v=beta&amp;t=wvtk7ypVH1ofF1EjULhi17S0xJthxAWn2sAzqUre_zs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Advance Your Skills in AI and Machine Learning]]'
prev_courses:
  - '[[MLOps and Data Pipeline Orchestration for AI Systems]]'
  - '[[Exploring AIOps]]'
next_courses:
  - '[[MLOps Essentials- Model Deployment and Monitoring]]'
  - '[[MLOps Essentials- Model Deployment and Monitoring]]'
path_nav: '[{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":7,"total":10,"prev":"MLOps and Data Pipeline Orchestration for AI Systems","next":"MLOps Essentials- Model Deployment and Monitoring"},{"path":"Advance Your Skills in AI and Machine Learning","position":10,"total":16,"prev":"Exploring AIOps","next":"MLOps Essentials- Model Deployment and Monitoring"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/mlops
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/MLOps%20Essentials-%20Model%20Development%20and%20Integration.md)

![MLOps Essentials: Model Development and Integration](https://media.licdn.com/dms/image/v2/C4D0DAQGUwtitxe_Q0Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663181557273?e=2147483647&amp;v=beta&amp;t=wvtk7ypVH1ofF1EjULhi17S0xJthxAWn2sAzqUre_zs)

# MLOps Essentials: Model Development and Integration

> Machine Learning Operations (MLOps) is a fast-growing domain the field of AI. As more models are deployed in production, the need for a structured, agile, end-to-end ML lifecycle with automation has grown multifold. MLOps provides structure to machine learning projects and help them succeed over the long run. In this course, instructor Kumaran Ponnambalam focuses on the key concepts of MLOps and h

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration) | 1h 36m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with MLOps](#getting-started-with-mlops)
  - [Scope and prerequisites](#scope-and-prerequisites)
- [**1. Introduction to MLOps**](#1-introduction-to-mlops) (6 videos)
  - [Machine learning life cycle](#machine-learning-life-cycle)
  - [Unique challenges with ML](#unique-challenges-with-ml)
  - [What is DevOps?](#what-is-devops)
  - [What is MLOps?](#what-is-mlops)
  - [Principles of MLOps](#principles-of-mlops)
  - [When to start MLOps?](#when-to-start-mlops)
- [**2. Requirements and Design**](#2-requirements-and-design) (5 videos)
  - [Selecting ML projects](#selecting-ml-projects)
  - [Creating requirements](#creating-requirements)
  - [Designing the ML workflow](#designing-the-ml-workflow)
  - [Assembling the team](#assembling-the-team)
  - [Choosing tools and technologies](#choosing-tools-and-technologies)
- [**3. Data Processing and Management**](#3-data-processing-and-management) (6 videos)
  - [Managed data pipelines](#managed-data-pipelines)
  - [Automated data validation](#automated-data-validation)
  - [Managed feature stores](#managed-feature-stores)
  - [Data versioning](#data-versioning)
  - [Data governance](#data-governance)
  - [Tools and technologies for data processing](#tools-and-technologies-for-data-processing)
- [**4. Continuous Training**](#4-continuous-training) (6 videos)
  - [Managed training pipelines](#managed-training-pipelines)
  - [Creating data labels](#creating-data-labels)
  - [Experiment tracking](#experiment-tracking)
  - [AutoML](#automl)
  - [Tools and technologies for training](#tools-and-technologies-for-training)
  - [Training with generative AI](#training-with-generative-ai)
- [**5. Model Management**](#5-model-management) (5 videos)
  - [Model versioning](#model-versioning)
  - [Model registry](#model-registry)
  - [Benchmarking models](#benchmarking-models)
  - [Model life cycle management](#model-life-cycle-management)
  - [Tools and technologies for model management](#tools-and-technologies-for-model-management)
- [**6. Continuous Integration**](#6-continuous-integration) (5 videos)
  - [Solution integration pipelines](#solution-integration-pipelines)
  - [Notebook to software](#notebook-to-software)
  - [Solution integration patterns](#solution-integration-patterns)
  - [Best practices for solution integration](#best-practices-for-solution-integration)
  - [Integration with generative AI](#integration-with-generative-ai)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with MLOps](#continuing-on-with-mlops)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with MLOps](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/getting-started-with-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/getting-started-with-mlops?u=76281980&t=0)** - [Instructor] The use of machine learning to improve personal lives and business outcomes has exploded in the past few years. An understanding of ML Labs is a critical skill for anyone involved in the building and managing of machine learning applications, including data scientists, engineers, managers, and product owners. My name is Kumaran Ponnambalam. In this course, I will introduce you to the essentials of ML Labs for model development and product integration. I will start off by discussing the overall ML Labs ecosystem and various activities involved in it. I will then discuss the aspects around requirements and design for building ML. Next, I will focus on applying ML Labs to [[Data Engineering]] and model training. I will progress further into the life cycle to using ML labs for model integration, as well as model management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Scope and prerequisites](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/scope-and-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/scope-and-prerequisites?u=76281980&t=0)** - [Lecturer] What parts of the machine learning world are we covering in this course? Let's take a look at the activities in the machine learning ecosystem. In general, we can divide the activities into build activities and run activities. Build activities, focus on creating and testing the model, run activities, focus on deploying, executing, and monitoring the model. There are core machine learning activities in each of them. [[Feature Engineering]], model training, testing, and packaging are core ML activities on the build side Model deployment and inference, are the core activities on the run side. Knowledge and experience in core ML activities is a prerequisite for this course. Then surrounding these core activities is [[MLOps]], which again, can be split as built and run. on the build side of MLOps we have various activities, like requirements management, data and training pipelines, [[Data Governance]], experiment tracking, integrations, and model management. On the run side of MLOps, we have infrastructure management, deployment, serving, monitoring, and [[Responsible AI]]. For this course, we will only focus on the build side Activities of MLOps. We will focus on the run side activities of MLOps, in another course, MLOps essentials, model deployment, and monitoring.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/scope-and-prerequisites?u=76281980&t=96)** For each activity in MLOps build, we will discuss the purpose, and context of that activity. We will discuss techniques, methods, and approaches used. We then will touch upon the tools available for performing this activity and also some of the best practices. Each of these activities have enough depth to warrant their own courses. We will be discussing only an overview of the activity and how they will fit into the overall MLOps context, for a deep dive into these specific activities, I recommend further reading. What are the prerequisites for this course? This course provides a high level overview of MLOps, and does not need deep technical hands on experience, but it is recommended to have prior understanding of machine learning operations, knowledge of core ML activities, and prior experience in building and running machine learning models is desired. This experience can be either in doing or managing ML. This course is suitable for multiple roles including, data scientists, ML engineers, managers, and product owners working in the ML domain. Finally, a [[Microsoft Word|word]] about the various tools and technologies discussed in this course. the MLOps tools world is a rapidly evolving ecosystem. This can change significantly in a short period of time. So it's recommended to evaluate the ecosystem periodically, especially when you get into actual implementation.
>
> **[3:12](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/scope-and-prerequisites?u=76281980&t=192)** So we are recommending tools based on the status at the time of this recording, but it can change rapidly. Also, there are MLOps tools from the big three platforms, AWS, GCP, and [[Microsoft Azure|Azure]]. We are not going to discuss them specifically in this course, but do check them out, if you are already on any of these platforms

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (11), [[Feature Engineering]] (1), [[Data Governance]] (1), [[Responsible AI]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** aws (1), gcp (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (2)
> **CLI Commands:** aws (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [lecturer] (1)


### 1. Introduction to MLOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Machine learning life cycle](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/machine-learning-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/machine-learning-life-cycle?u=76281980&t=0)** - [Instructor] Let's begin the course by reviewing the activities that happen when building machine learning solutions. A machine learning life cycle charts the journey of an ML application. It starts from the concept of the problem we are trying to solve. From there, we build a model with training data. The model is deployed and used in production. Then, periodic improvements happen to the model over time. The ML life cycle is a cyclic process. The process continues for multiple iterations depending upon the use case. Continuous refinements happen during the life of a model, new training data, new user requirements and model decay can also cause the model to be retrained and improved. Let's review the machine learning life cycle. It starts with requirements for the model usually charted by a product owner. The requirements are then used to design the workflow for executing the project. First, training data is acquired and made available for machine learning. [[Feature Engineering]] is done on the training data to cleanse, transform and extract useful features. This is then used to train the model. The model goes through testing and evaluation. The model is continuously refined until desired performance goals are achieved. The model is then deployed for inference
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/machine-learning-life-cycle?u=76281980&t=94)** and is used to predict the business workflows. During inference, more data is collected from the production deployments. This is then labeled to create additional training data. New training data again triggers feature engineering and model training operations. The process continues in a cyclic fashion to keep the model optimized to accommodate business environment changes. In this course, we are not going to focus on the actual process of building a model. Rather, we are going to look at the ecosystem around this life cycle that helps us execute this life cycle with efficiency and control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Unique challenges with ML](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/unique-challenges-with-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/unique-challenges-with-ml?u=76281980&t=0)** - [Instructor] When compared to plain [[Vanilla]] software applications, building machine learning applications poses additional challenges that needs to be tackled for successful execution. Let's begin with the concept of artifacts. An artifact is any entity that is created or consumed during the development process. Software engineering deals with only two types of artifacts, software code and records. Records are any documentation that is created are consumed during the process, including requirements, design, test plans, test results, and acceptance results. The software engineering process deals with how the life cycle of these artifacts are managed in a controlled fashion for streamlined execution. During this process, artifacts are consumed, processed, and new artifacts created. So we have two artifacts in software engineering, records and code. So the records are like requirements and design that are used to create code. In turn code is used to create other records like test results. The software engineering process deals with the creation, validation, promotion, change management, and governance of these artifacts. Various processes and tools are used in managing the life cycle. Artifacts feed off each other. One artifact is the input to create another.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/unique-challenges-with-ml?u=76281980&t=95)** Now let's look at the artifacts for ML engineering. All ML [[Microsoft Products|products]] still require code to run in executables, support APIs, pre-process inputs, interact with the model, and process results. Similar records are also required for ML. In addition, there are two more artifacts, namely data and models. Data is training data that is used to build the models. Now the interaction between these four types of artifacts is interesting. Records like requirements are used to prepare training data. This in turn creates records about processing status and errors. Requirements and training data are used to build models. The training process in turn creates records around training performance and results. The model is then integrated into code for creating executable binaries. The execution of these models in turn creates new training data. As we see, these metrics' interdependence creates challenges in coordinating the life cycle of these artifacts. So what are the unique challenges in ML development? Each artifact follows its own life cycle but has dependencies on other types of artifacts. This requires coordination. Collaboration requirements between teams that produce these artifacts will increase multifold. This in turn needs additional tools and workflows
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/unique-challenges-with-ml?u=76281980&t=190)** to manage and govern them. Each artifact needs a different set of skills to create and maintain, and these teams need to collaborate with each other. There is the need for an integrated workflow across all these life cycles to efficiently manage ML [[Application Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vanilla]] (1), [[Microsoft Products|Products]] (1), [[Application Development]] (1)
> **Speakers:** - [instructor] (1)

#### [What is DevOps?](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-devops?u=76281980&t=0)** - [Instructor] [[DevOps]] is the most popular software creation and delivery methodology that drives continuous development in an [[Agile Development|agile]] fashion. DevOps combines development, testing, and operations of software into one integrated workflow. Rather than development and operations being separate entities, the integration helps drive faster iterations of software. DevOps combines people, processes, and technologies into a seamless workflow. It uses agile principles, best practices, and tools for optimal [[Software Development]]. It enables fast, yet methodical management of software development and delivery. It helps to drive continuous changes to software due to new requirements or issues and helps move these changes quickly into production. DevOps focuses on automation to improve efficiency of development and operations. The picture on the left shows the DevOps life cycle. The cycle keeps iterating in sprints. It starts with planning for the sprint. Next, requirements are converted to code, built and tested. The release happens in an automated fashion and is deployed in production. The software is operated and monitored. The performance of the software is then fed back into the cycle to plan for more requirements. The cycle then iterates over the life of the application.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-devops?u=76281980&t=97)** On the right, the diagram shows how develop, test, and operate activities overlap in DevOps. In traditional software development, they are done by separate independent teams. in DevOps, the same team manages all three of them. DevOps is the foundation for [[MLOps]], which we will discuss in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (8), [[Software Development]] (3), [[Agile Development|Agile]] (2), [[MLOps]] (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [What is MLOps?](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-mlops?u=76281980&t=0)** - [Instructor] Let's get now to the topic of this course, [[MLOps]]. What is MLOps? MLOps is a set of best practices that helps manage the creation and use of ML artifacts through efficient workflows, collaboration and tracking. MLOps is not a specific product or technique. It is a set of processes and best practices to build and run ML supported by automation and tools. What are the elements of MLOps? MLOps extends the [[DevOps]] methodology to building and serving machine learning solutions. It integrates the activities of [[Data Engineering]] and model development into the software engineering and deployment life cycle. In addition to the software engineering artifacts of code and records, it manages the machine learning artifacts, data and models. It enables continuous model development and integration, thus following an [[Agile Development|agile]] process to reduce time to market. MLOps deals with model deployment and serving. It also includes monitoring, performance analytics and generating feedback for further improvements. It helps manage the ML processes through automation and tools to improve efficiency. What does the MLOps lifecycle look like? It looks similar to the DevOps lifecycle. There are three groups of activities.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-mlops?u=76281980&t=95)** The software engineering and operations groups are borrowed from DevOps. Additionally, there is a machine learning group too. Let's look at the various activities and how they integrate with each other. The process starts with defining the requirements for the ML project and a corresponding design. The design would include both non-ML parts like APIs, services, [[Databases]], user interfaces, et cetera, and ML pipelines like data engineering pipelines. This is then used to develop the non-ML parts of the overall solutions. The requirement would then also feed into data engineering for converting raw data into usable features for ML. Then there is a continuous training cycle where a model is built and refined until it meets the stated requirements. Models that are created are managed under a model governance framework. As models are built, they are also integrated continuously with the non-ML code. Continuous here would be specific small intervals like each print or each week. On passing integration, the model and the non-ML code are packaged together and delivered. Now the operations process kicks in. Continuous deployment takes care of deploying the approved packages to production. The model is then served to users. The performance of the model is monitored
>
> **[3:09](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/what-is-mlops?u=76281980&t=189)** to ensure that it stays within the expected thresholds. Model performance information, as well as model drift and bias information is fed back into the model governance for tracking and evaluation. Input is also provided in the requirements to see if changes or improvements are needed on the ML or non-ML functions. Finally, feature and label data from production databases is captured and fed into the data engineering pipeline to create new data sets. If model governance determines that the model need to be retrained, then it kicks off another training cycle with new data. Having seen its life cycle, let's explore the principles of MLOps in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (9), [[Data Engineering]] (4), [[DevOps]] (3), [[Databases]] (2), [[Agile Development|Agile]] (1)
> **Definitions:** is a  (4)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Principles of MLOps](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/principles-of-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/principles-of-mlops?u=76281980&t=0)** - [Instructor] What are the principles based on which [[MLOps]] functions? The overall objective of MLOps is to create an optimal end-to-end machine learning workflow that integrates different teams, modules, and artifacts to continuously improve and deliver machine learning solutions. The principles of MLOps focuses on helping achieve this overall objective. This set of principles need to be kept as goals when adding any policy, process, tool, or workflow into the machine learning pipeline. To begin, the solution should be modular with well defined boundaries and ownership. This helps different artifacts to evolve simultaneously while enabling integration. The process should enable continuous development, modeling, integration and deployment. Automation is a key principle to achieve efficiencies and scale. MLOps should enable incremental development with quick time to market. The entire workflow should be managed end-to-end with visibility into the current state of artifacts. Reproducibility of artifacts is a key requirement where, along with the artifact, the code, or steps needed to build it, are also managed. The workflow should scale to bigger data sets, modernizations,
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/principles-of-mlops?u=76281980&t=93)** teams and deployments. The workflow and artifacts should be observable for monitoring and diagnosis. It should be possible to trace the lineage of an artifact from its data and model origins. The workflow should be secure with required access controls and [[Privacy]] protections. By modeler, the workflow should be integrated for seamless movement of artifacts. The MLOps system should allow for changes in processes or workflows, without cascading impact. The entire system should be transparent for anyone to understand its inner workings. The system should enable collaboration between teams and artifacts. And finally, the system should be well organized with interfaces to outside teams, systems, and processes. These principles should be kept in mind while designing MLOps in an organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (6), [[Privacy]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [When to start MLOps?](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/when-to-start-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/when-to-start-mlops?u=76281980&t=0)** - [Narrator] When should an organization or team start investing in [[MLOps]]? To answer this question, let's first try to understand how ML use cases evolve within an organization. There are usually three stages; exploration, experimentation, and engineering. Typically, an organization that is new to ML decides to focus on building ML solutions. They start the exploration process. A small team is formed for this purpose. The team then studies the ML technology ecosystem to understand what [[Algorithms]], [[Microsoft Products|products]] and technologies are available, which are applicable to their business domain. It also will explore possible business use cases to solve with ML. Then it would try to collect some sample data for these use cases and try to build a model. When it sees data and model feasibility, then they would put up a proposal to their executives on an ML strategy. At this stage, it's possible that the whole initiative might be dropped if no viable use cases emerge. Then the organization gets into the experimentation phase. Now there is usually a bigger team. The team will pick up a specific use case and dive deeper. It would collect and process training data to extract features. It would then conduct various training experiments to build a viable model.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/when-to-start-mlops?u=76281980&t=95)** Results are reviewed periodically to understand if the model would perform to the business expectations within expected costs. This information is then used to decide on whether to proceed with an ML solution or not. The project may get dropped here if the solution is not viable. If the decision was made to move forward, then the organization gets into the engineering phase to build the actual solution. A full-fledged teams, including data engineers, data scientists, and software engineers is assembled. A product owner may come up with concrete requirements for the solution. The team will design the workflow. Complimentary non-ML software will also be built. The model training, testing and integration will be done methodically to create the first version. It is then deployed in production and its performance monitored. Between these three phases, when should an organization invest in MLOps? MLOps does take considerable time and effort. Doing it too soon may be a waste if the project gets dropped. Doing it too late would mean that there are inefficiencies and integration challenges for the team. During exploration, it's recommended to just have a very small team of two to three engineers and follow an ad hoc process. The project is not yet ready for MLOps investments. During experimentation, it's recommended to start adding
>
> **[3:13](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/when-to-start-mlops?u=76281980&t=193)** MLOps capabilities as in when they are required. For example, a [[Data Engineering]] pipeline and a training pipeline may be built here, but work around deployment and operations would be postponed. During the engineering phase, a full-fledged MLOps system is recommended. MLOps itself would need manpower and technology investments to build, maintain and operate the workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (7), [[Algorithms]] (1), [[Microsoft Products|Products]] (1), [[Data Engineering]] (1)
> **Best Practices:** recommended (3)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 2. Requirements and Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Selecting ML projects](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/selecting-ml-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/selecting-ml-projects?u=76281980&t=0)** - [Instructor] In this chapter, we will explore the requirements and design aspects of machine learning, and how it helps create effective ML Ops processes. First, we start with how we should select ML projects for execution. The eventual goal for any machine learning project is to improve business outcomes. This means that the ML project should either help in increasing sales or reducing costs. An organization would and should only invest in an ML project if there are business benefits that outweigh the cost of building the model. During the exploration and experimentation stages, a number of alternate use cases are identified and analyzed. How does an organization choose projects to go forward with execution? What are the criteria for selecting ML projects? Why should they build one, and not just by an equal in service from the market? We should first start with whether the model could bring core business value to the organization. ML projects are expensive, and unless they create strategic differentiation to the product or service, they may not have long-term value. The next criteria is the availability of training data, including labels as required. Without good training data ML, projects will fail. A technology ecosystem should also exist
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/selecting-ml-projects?u=76281980&t=95)** in the specific domain for machine learning. This includes [[Algorithms]], libraries, frameworks, and pre-trained models as needed. For example, if your use case is in [[Computer Vision]], then related-based technologies should be available and affordable. Next, comes the budget that is available to create a team. If ML projects are understaffed, they will take very long cycle times, and may outrun their usefulness. Time to market is critical, as the organization doesn't want to wait for years before the ML model is operational. Competition may overrun and beat them. Finally, ML projects do carry a risk of failure. If the model cannot meet desired performance requirements or cost requirements. So there should be an appetite for failure in the organization. Choosing the right project at the beginning is critical to maximize the [[Probability]] of success at the end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Computer Vision]] (1), [[Probability]] (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Creating requirements](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-requirements?u=76281980&t=0)** - [Instructor] What are the best practices in creating requirements for ML projects? Well-defined and verifiable requirements help machine learning projects progress with focus towards the end goal. The experimentation nature of model training may lead the team to deviate in various directions and lose track of the goal. Having well-defined requirements are a must for direction and validation. When we look at requirements, we don't look at machine learning in isolation. Rather, the requirements are for an ML application, our solution, and that contains both ML and non-ML components. The requirements together should help solve a business problem. What kinds of requirements are there? Let's start with the non-ML requirements. This covers the [[User Experience (UX)|user experience]] for the solution, including graphical user interfaces and APIs. Next comes the functions of a solution, including the data collected, transformations, and reporting and analytics. Deployment requirements mandate how the solution is served to its customers. Scale requirements are required to set the maximum capacity the system can handle. Security requirements state how the data and the system are protected from unauthorized access and damage. Serviceability requirements state how the solution will build observability and how issues are handled.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-requirements?u=76281980&t=95)** This set of requirements are common to general [[Software Projects]] and the best practices for these requirements also accrue to the ML projects. Next comes ML specific requirements. To begin, the requirements need to call out the specific problem the model is supposed to solve. For example, it can be predict customer propensity or recommend next action. Then comes performance goals which state the level of model performance desired. Operational goals specify requirements around accessing and using the model. Finally, cost requirements should lay out cost limits within which the final model should perform. Let's dive deeper into the ML requirements. It is recommended to state ML requirements as metrics goals. Specify the minimum metric value that the model should achieve and maintain. There are two types of metrics, model metrics and product or service metrics. They are further classified into performance or effectiveness metrics and operational or efficiency metrics. Sample metrics are provided in this table. For example, the requirement might state that the model should achieve 90% accuracy in training, should have a latency of one second or less 90% of the time. The product should maintain a conversion rate of 30% and allow a maximum of 500 concurrent sessions. When setting metrics goals,
>
> **[3:10](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-requirements?u=76281980&t=190)** it is important to set them in such a way that they ensure successful operation of the model, as well as something that is reasonable and achievable. To begin with, the goals should be measurable and the requirements for instrumentation also needs to be captured. It should be the minimum required to achieve the desired results. It should be reasonable for the team to achieve within a limited amount of time. There is only so much accuracy that can be achieved given a training data set and technology. What do we base these requirements on? It can be based on the known performance of existing models in the same domain. It can be based on other technologies in the market. Customer expectations also play a key role on what is acceptable. It can be simply a best effort basis on what can be achieved in a set amount of time. Overall, creating reasonable and measurable requirements helps keep the project on track and measure its success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Software Projects]] (1)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Designing the ML workflow](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/designing-the-ml-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/designing-the-ml-workflow?u=76281980&t=0)** - [Instructor] The workflow followed by the teams plays a critical role in ensuring that the principles of [[MLOps]] are instituted and managed effectively. Designing the workflow is a key activity that should be given new consideration at the beginning of the project. What is an ML Workflow? It is a sequence of processes and iterations that helps develop, manage and improve machine learning [[Microsoft Products|products]] and services. The specific workflow designed by the team would be based on the requirements, team structure, and deployment goals. However, there are some general best practices that need to be followed across the pipeline for effective MLOps. Let's discuss some of the general best practices. First, there should be traceability of everything. Whether it's data, models or processing steps. Knowing the lineage helps to measure progress, as well as troubleshoot issues. There should be repeatability of processing and the results that are produced. Focus on building data as code and model as code pipelines that helps rebuild things from scratch and produce the same results. Add automation wherever possible, as it helps repeatability and efficiency. Define access controls for various artifacts and actions needed on them. As the team grows, it is important to control how these artifacts are created, promoted, used, or discarded.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/designing-the-ml-workflow?u=76281980&t=94)** The technology ecosystem for MLOps is rapidly evolving. Flexibility and plug-and-play design would help replacing parts of the pipeline without impacting the [[Representational State Transfer (REST)|rest]] of the parts. Ownership of various parts of the pipeline should be well defined and managed. Finally, the pipeline should be able to autoscale as needed to accommodate growth in data, models and teams. One recommendation when creating pipelines, is to create decoupled sub pipelines. Inside the big ML pipeline are multiple sub pipelines for [[Data Engineering]], model development, [[Product Development]], and deployment and operations. Each of these should be able to evolve and work in a decoupled fashion, in order to enable parallel progression. Having tight coupling leads to a lot of blocked work if one part of the pipeline is stuck with a problem. Also, the ownership of these pipelines should be with individual subteams who work on the pipeline. And they should be able to work independently, but with collaboration with other subteams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (3), [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Data Engineering]] (1), [[Product Development]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Assembling the team](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/assembling-the-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/assembling-the-team?u=76281980&t=0)** - [Instructor] What are the best practices in putting a team together to execute an ML project? Building machine learning solutions requires a team with diverse skill sets across [[Data Engineering]], [[Data Science]], software engineering and operations. Assembling and heterogeneous team like this within the cost constraints of an organization is a challenge. What is the recommended team composition? There is a general myth that all team members in an ML project will be data scientists.
>
> **[0:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/assembling-the-team?u=76281980&t=35)** - All an organization needs is to hire a couple of data scientists and they will do the job But that is not the case. Based on real life experience, the table below lists the percentage split between various roles in an ML project. Data scientists, who build models only constitute 20% of the team. Data engineers, who do the [[Data Processing]] and wrangling constitute 30%. Another 20% goes to the engineers building wrapper services and APIs around the model. This number may vary widely based on the non ML requirements in the project. ML engineers, who focus on productising the model, scaling, packaging and integrations constitute another 20%. Operations engineers form 10% of the team. How do we build this team? Based on the previous table, there should at least be 10 engineers in the team to achieve the right balance between the various roles. But then there are budgetary constraints. It's important to understand this and then decide on what skills to hire for. If the team is small, then look for engineers with multiple skills. If there is only a team of three, then these engineers need to wear multiple hats. Also, there is no point in hiring all the members in the beginning. Focus on data engineering and data science roles first and see if the model can be built to meet the requirements of the project.
>
> **[2:09](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/assembling-the-team?u=76281980&t=129)** Then, add the other roles later. One significant gap experience by teams is the lack of understanding of the business domain and hence the business problem. Always include one or two engineers who have good experience in the business domain so they can relate the solution to the problem. There should be one or two engineers who serve as leads and focus on end-to-end integration across the pipeline. The skill sets needed for ML are hot in the market so do expect attrition. It's always good to cross-train and document to retain and spread knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (2), [[Data Science]] (2), [[Data Processing]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1), - all (1)
> **Best Practices:** recommended (1)

#### [Choosing tools and technologies](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/choosing-tools-and-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/choosing-tools-and-technologies?u=76281980&t=0)** - [Instructor] One significant challenge today is choosing the right set of tools and technologies for doing [[MLOps]]. If we look at the technology landscape for MLOps today, it's nascent, growing, and ready to explode. There are several tools and technologies built for MLOps. Some of them are open source like [[MLflow]]. Some are commercial like Weights & Biases. And some are built on cloud platforms like AWS, GCP, and [[Microsoft Azure|Azure]]. But the [[Microsoft Products|products]] are immature and evolving. It is expected that they will mature over time. Also, the tools are specific to a function rather than support end-to-end workflows. The tools are improving in this area by supporting additional life cycle activities and providing native integration. Future dominance is unclear and will emerge in a couple of years. Until then, we need to work with what is available and protect investments as needed. Here are some of my recommendations on choosing tools and technologies. First, decouple tools as much as possible from the main pipeline so they can be replaced anytime without much impact to the pipeline. Choose tools that suit the specific use case like classical ML, NLP, or [[Computer Vision]]. Always test the tools using trial or free versions before you buy licenses. If you're using third-party products to build code pipeline elements,
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/choosing-tools-and-technologies?u=76281980&t=94)** do understand the product roadmap and enterprise support aspects. Look for extensibility and programmability, so you can customize the function if needed. In the [[Representational State Transfer (REST)|rest]] of this course, we will outline a few tools that are popular for various MLOps functions, but that list can evolve rapidly. It's highly recommended that you do your research at the time of your project implementation and choose the best suited product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (4), [[Microsoft Products|Products]] (2), [[MLflow]] (1), [[Microsoft Azure|Azure]] (1), [[Computer Vision]] (1)
> **Env Vars:** aws (1), gcp (1), nlp (1)
> **CLI Commands:** aws (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Data Processing and Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Managed data pipelines](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-data-pipelines?u=76281980&t=0)** - [Instructor] In this chapter, we will look at the elements of ML ops that deal with the [[Data Engineering]] part. We start with building managed [[Data Pipelines]]. A data pipeline is an integral part of an ML workflow. A robust and managed data pipeline helps in creating repeatable machine learning processes while reducing human costs. Data issues usually become blockers for data scientists who keep waiting for the processed data for building models. Hence it's important to invest in a well managed data pipeline in the beginning of the ML project. Let's review the typical functions of a data pipeline. It starts with acquiring raw data. This may be batch data or streaming data that comes possibly from the production environment. The data then goes through a process of cleansing, filtering, and validation. The resulting output is then transformed and enriched to suit machine learning needs. Data elements that are ready for ML are known as features and they are stored in a feature store. The feature store is then accessed by data scientists to train models. After the models are deployed in production, new data is collected and the processing repeats. It then [[Forms]] a continuous cycle of acquiring data, processing, and improving models. Now let's look at managed data pipelines. The [[Microsoft Word|word]] managed takes a lot of significance.
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-data-pipelines?u=76281980&t=97)** Teams that do not manage their data pipelines properly end up with more issues, blockages, and additional effort in troubleshooting and fixing them. What constitutes a managed data pipeline? It first begins with having an engineering life cycle for data pipelines. As the data pipelines are owned by developers instead of operations engineers, there is a tendency to not follow engineering practices, but instead the data pipelines need to be treated as production code. A managed development life cycle like [[Agile Development|Agile]] needs to be followed for developing data pipeline code. There should be separate development, test, and production environments for these pipelines within engineering. And there should be proper promotion policies and practices. Integrated deployment pipelines should be used to deploy new code into these data pipelines. Next comes traceability of data. The lineage of data needs to be tracked from the source it was acquired from, timeline, the processing it has gone through, and the exceptions found. Similarly, pipeline code should go through proper code versioning and deployment tracking. An operating data pipeline should include observability features like logging, audits, and monitoring. An operating data pipeline should include observability features like logging, audits, and monitoring. Then comes reproducibility of results.
>
> **[3:12](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-data-pipelines?u=76281980&t=192)** It should be possible to reproduce the results in the feature store by simply reprocessing the raw data. Developers tend to do ad hoc data manipulations, which should be avoided. A strict data as code approach should be taken, and all steps needed to transform the raw data into its feature store should be available as version controlled code. Finally, there should be automation wherever possible in the pipeline. This includes how processing can be triggered and workflows executed. This could be on arrival of new data or a set schedule. Also errors and exceptions should automatically trigger rollbacks as well as reprocessing of data. The feature store should be kept in a consistent state and all errors should be reported and analyzed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Pipelines]] (7), [[Data Engineering]] (1), [[Forms]] (1), [[Microsoft Word|Word]] (1), [[Agile Development|Agile]] (1)
> **Definitions:** is an  (1), known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Automated data validation](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automated-data-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automated-data-validation?u=76281980&t=0)** - [Instructor] Automated [[Data Validation]] should be a key feature of any data pipeline. Typically, the data-processing logic is decided based on the initial set of data used by data scientists. Those assumptions would carry over to the first model that is built by data scientists and deployed in production. After the model is deployed, new data is continuously acquired and processed by automated [[Data Pipelines]]. In some cases, AutoML is also used to create new models. It then becomes imperative to perform extensive validation on new data to ensure that they do not deviate from the initial training-set patterns. What should be validated in a data pipeline? To begin, basic feature validation should be done, including missing data or erroneous data. Data formats and ranges should also be checked. Even with data produced by machines like telemetry, errors can happen if there are issues with the source. Next comes data distribution validation. Here, metrics like mean, standard deviation, and quartiles should be computed and compared with baseline values. Similarly, distribution of classes in categorical variables should also be done. This is to ensure that the new set of data belongs to the same distribution population as the original training dataset. Then comes out-of-distribution validation.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automated-data-validation?u=76281980&t=93)** This is to check if outliers occur in data. This includes values that are beyond quartiles for continuous data and also new class values for categorical data. Finally, it is also recommended to check the correlation between the feature and target variables and if they are in line with the correlation seen in the baseline training data. Checking for correlation between features is also recommended.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Validation]] (1), [[Data Pipelines]] (1)
> **Best Practices:** recommended (2)
> **Speakers:** - [instructor] (1)

#### [Managed feature stores](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-feature-stores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-feature-stores?u=76281980&t=0)** - [Instructor] One of the key features needed in the data pipeline for ML is the feature store. A feature store is a centralized store for features. When we say features, we mean those that are of interest and directly consumed by ML models. Data is already pre-processed and converted to a form that is ready for machine learning. An organization may have a single feature store that may be shared by multiple teams and ML models. The feature store is regularly updated with new training data and new features. It also usually supports a registry of features so that users can look up the registry to understand the data that is available in the store. Let's discuss some of the best practices for feature stores. This will help in the long term to make ML workflows easier to begin with. It's recommended to create a central store, with shared ownership and defined responsibilities. In an organization there is usually a common set of data that is used by multiple models and teams. So managing a central feature store saves costs and enables reusability. The feature store should have a flexible schema that can accommodate regular additions without having to change the consumers. The feature store may have multiple related data sets.
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-feature-stores?u=76281980&t=95)** It's recommended to keep them separate and not force a hard merge and denormalized data. As long as the linking attributes are available, consumers of the data can perform joins during query time. The feature store should keep an updated registry. This helps multiple teams to easily understand what is available and not resort to duplicate processing work. One problem with having a common store for multiple teams is when each team wants small last minute customizations. It's recommended to keep a common format as much as possible and let the teams customize when they query for training. A feature store may need multiple types of database technologies that can store files, tables, images, and media. It's essential to keep storage cost low.

> [!info]- Semantic Content
>
> **Best Practices:** recommended (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data versioning](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-versioning?u=76281980&t=0)** - Data versioning is a key aspect of tracking lineage for data. Managing training data with a data versioning system like DVC provides the ability to change data continuously while ensuring consistent training results and collaboration. What is data versioning? It's a similar concept as versioning for software code. It helps to create an immutable baseline for datasets. The dataset may be a raw dataset, an intermediate dataset, or a feature dataset. The training datasets keep getting updated with newer datasets, attributes, and computations. Versioning helps keep track of these changes. The version for data changes when it's contents change similar to software code. For data, a version can be maintained at a feature level, record level, or dataset level. The exact type used depends upon the versioning tool and the use case. When data is versioned, a specific version can be referenced for model training and testing. Different teams can consume different versions of the same dataset and ensure repeatable results. What are some of the benefits of data versioning? To begin with, it enables traceability in ML Ops, we can trace the history of a dataset, we can link a specific version of the dataset
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-versioning?u=76281980&t=94)** to a specific model number and experiment number. As a result, it enables the ability to rerun some experiments and recreate the same model again using the older version even if the training data is updated later. It also becomes a change log capture tool for feature tools. It allows data to be rolled back to the last known good state if errors in processing create erroneous new data. Multiple users can reference different versions of the dataset. So while a specific ML model is being worked on by data scientists based on a specific version, the dataset can evolve independently without impacting the modeling work.

> [!info]- Semantic Content
>
> **Env Vars:** dvc (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - data (1)

#### [Data governance](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-governance?u=76281980&t=0)** - [Instructor] [[Data Governance]] is a key area in [[MLOps]] that deals with the administration of data stored and used for machine learning. Data governance is the practice of ensuring integrity, security, and usability of data through an organization of people, policies, and processes. It is a central theme in MLOps to build trust about data with everyone involved in it, whom the data is about, who creates the data, and who uses it. What are the key elements of data governance with respect to training data? Let's discuss a few. These elements, once again, apply to all types of data whether they are raw data, intermediate data, temporary data, features, [[Metadata]], and whether they are at [[Representational State Transfer (REST)|rest]] or in motion in the pipeline. The first goal of governance is ensuring consistency of data. This means that all users see a consistent snapshot of the data once they are committed to the data store. Next comes ensuring the integrity of data. Data stored across the pipeline should be complete, accurate, conform to requirements, and should be without errors. Security is a critical aspect of [[Data Storage]] and processing. Only the users who have required permissions should be able to view, create, modify, and delete data. Data should be secure from adversarial attacks.
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-governance?u=76281980&t=96)** [[Privacy]] is a key issue in data, especially when the data contains sensitive personal information. Today's business environment needs conformance to multiple laws, regulations, and standards. Privacy practices like reduction and obfuscation are expected to be part of the pipeline to ensure protection of sensitive data. Then comes [[Resiliency]] of data. Protection is required against inadvertent and adversarial data loss. Backups, standbys, and redundancies schemes are required to protect against data loss. Recovery mechanisms are required to recover data to the last known good state when issues do happen. Finally, governance also deals with the life cycle of data from its creation to its cleanup. Policies should be in place supported by automation to ensure that the entire data life cycle is controlled and tracked. What does it take to implement data governance in an organization? First, identify a training data governance team. The team should contain both the owners of data and also custodians. Custodians are administrators who manage the data governance functions, create policies, processes, and procedures for training data governance. If the organization already has those for their production data, reuse them and adapt as required.
>
> **[3:11](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/data-governance?u=76281980&t=191)** Identify all data elements that need to be governed across the ML pipeline. Classify the identified data based on security and privacy requirements. Some data may need higher levels of governance than others based on their importance and sensitivity. Finally, enforce governance through automation to increase scale and efficiency, and reduce human errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (7), [[Privacy]] (3), [[MLOps]] (2), [[Metadata]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (4), means that (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for data processing](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/tools-and-technologies-for-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/tools-and-technologies-for-data-processing?u=76281980&t=0)** - [Instructor] What tools and technologies exist that help in ML labs for [[Data Engineering]]? To begin with, we have popular [[Big Data]] processing technologies like [[Hadoop]], [[Apache Spark]] and [[Apache Kafka]]. In addition to actual processing of data, they also have capabilities that help in control deployment, roll back, operations, logging, and change data capture. Next comes the set of [[Databases]] for [[Data Storage]]. This includes RDBMS like [[MySQL]], and [[NoSQL]] like [[MongoDB]] and Cassandra. These databases provide capabilities like [[Resiliency]], access control, recovery, schema management, and versioning at various levels and they should be leveraged for [[Data Management]]. Then there are also specific data versioning tools. A new breed of tools are coming up in this space, including DVC, lakeFS, and Neptune. Choose technologies that meet the requirements for the project and keep an eye on costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Data Engineering]] (1), [[Big Data]] (1), [[Hadoop]] (1), [[Apache Spark]] (1)
> **CLI Commands:** apache (2), mysql (1)
> **Env Vars:** rdbms (1), dvc (1)
> **Code Identifiers:** lakefs (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)


### 4. Continuous Training

[↑ Back to Table of Contents](#table-of-contents)

#### [Managed training pipelines](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-training-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-training-pipelines?u=76281980&t=0)** - [Instructor] Having discussed the [[Data Engineering]] side of [[MLOps]]. Let's get into model training in this chapter and how MLOps helps in making it efficient. We'll start off with managed training pipelines. Similar to managed [[Data Pipelines]], training pipelines play a vital role in the ML workflow. A robust managed training pipeline helps create repeatable ML training and testing workflows while reducing human costs. Being the core activity, as well as the most unpredictable activity in building an ML application, ML training can benefit a lot from an organized MLOps setup for the project. What are the key training pipeline functions? It starts with the feature store. Training inputs are fetched from the feature store for model training. The hyper parameters are also set up for training. An experiment is then planned and executed. Executing the experiment results in the ML model. The model is then validated during training to ensure that desire levels of performance are achieved. Then an independent test data set is used from the feature store and the model is tested with this data set to analyze out of sample errors. The results of this testing are reviewed to see if desired performance goals are met, And if there are more opportunities for improvement, new experiments are planned. This results in updating the model parameters
>
> **[1:35](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-training-pipelines?u=76281980&t=95)** and retraining the model with possibly an updated training data set. This process keeps repeating until a model with the desired performance is achieved. What are the best practices of managing a training data pipeline? To begin with, there has to be a life cycle like [[Agile Development|agile]] that needs to be followed by the [[Data Science]] team. There has been some progress in customized processes for machine learning that are optimized for continuous experiments. Also, modeling involves writing code mostly in notebook. There should be separate development and test environments for training the models. It's recommended that the final run of the model takes place in a controlled environment. Next comes traceability of the experiments. Experiment tracking is a key MLOps activity that we will cover later in this chapter. Also, [[Version Control]] should be used for code, data, and models, and the corresponding versions need to be tied together for experiment tracking. Reproducibility of training is a key MLOps goal. It should be able to reproduce the building of the model from scratch from its training data and input parameters. Model as code approach is recommended where all the notebooks themselves are baseline and versioned. Version data should be used. Rerunning the code should result
>
> **[3:08](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/managed-training-pipelines?u=76281980&t=188)** in the same model being produced again. Finally, automation plays a key role in scaling the training process efficiently. Automation can be used for parameter selection and tuning of models. Techniques like grid search can be executed with automation each time a new experiment is done. Similarly, when new training data is available, the data engineering and model training pipelines should be automatically executed to build a new model and compare it to the baseline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (5), [[Data Engineering]] (2), [[Data Pipelines]] (1), [[Agile Development|Agile]] (1), [[Data Science]] (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (2)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** later in (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Creating data labels](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-data-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-data-labels?u=76281980&t=0)** - [Instructor] Data labeling as an activity has gained a lot of traction lately, where a set of companies are offering this service while other companies are building software for this purpose. What is labeling? Data labeling or annotation is the process of adding contextual tags that are labels for training data that can then be used as targets for machine learning. For example, let's look at a review for a movie by [[John the Ripper|John]]. A labeling task for this review would be about adding multiple contextual labels for this review. For example, a label called sentiment can be given a value positive. A rating label can be given a value 4.5. These labels can then be used as targets for building classification models, like, say, sentiment analysis or ratings prediction. Why is labeling gaining importance? Raw training data acquired from sources may not have prepopulated labels. Generally, structured data will contain labels, but [[Unstructured Data]] like text, media, and images may not have them. So to build models with unstructured data, labeling is needed. Available labels may be inaccurate and incomplete. Additional labeling may be needed for covering multiple use cases. For example, movie reviews can be used for building models for sentiment analysis and movie type recommendations. So if those labels are missing,
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-data-labels?u=76281980&t=94)** they need to be manually added. How do we label data? There are various methods available, each with their own advantages and shortcomings. First, we can use experts in the domain to label data. This is particularly important in high specialization domains like medicine. Expert labeling can have high accuracy levels, but it's hard to get the experts to label a large corpus of data. The next option is crowdsourcing, where a large pool of volunteers are organized to look at the data and label them. While this method scales well at low costs, the labels themselves may be inaccurate and inconsistent based on the knowledge level and bias of the labeler. There are third-party professional annotators available today who will do labeling for a fee. This leads to professional labeling and high accuracy, but also high costs. Finally, another area of explosive growth in ML Ops is programmatic labeling. Here, a program or a model is created to label data instead of a human. This gives massive scale and adaptability at low cost, but then it takes time to build an accurate labeling program or model for a specific use case. For best results, it's recommended to combine multiple resources for both accuracy and scale. We can start with a base data set
>
> **[3:08](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/creating-data-labels?u=76281980&t=188)** that is labeled by experts or professional annotators, then this label data set can be used to train volunteers or programs to label a much larger corpus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (2), [[John the Ripper|John]] (1)
> **Analogies:** for example (3)
> **Versions:** 4.5 (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Experiment tracking](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/experiment-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/experiment-tracking?u=76281980&t=0)** - [Instructor] One of the critical areas for [[MLOps]] is the tracking of ML experiments. In ML training, multiple runs of building and validating the model happens as the data scientists work towards their expected performance goals. Each ML training run is considered an experiment. Experiment tracking helps manage the evolution of an ML model towards stated performance goals. Experiments should be tracked continuously to analyze if improvements are made and decide on the next set of experiments to run. What should be tracked for an experiment? We begin with the model itself. All the model set up including the ML algorithm being used and the architecture of the model for [[Deep Learning]] models need to be tracked. Also the hyper parameters set up for the specific experiment should be tracked. Next comes the input to modeling. The specific data set and its version should be linked to the model. The training validation and test splits should also be tracked. With the model configuration and inputs, it should be possible to recreate the specific experiment and reproduce the results. Then comes the output produced. This includes the model itself in some serialized form like a pickle file. There are also performance measures like accuracy, errors and F1 scores that need to be tracked. Once the results are obtained, the data scientist would analyze the results
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/experiment-tracking?u=76281980&t=94)** and compare them against earlier experiments. This comparison should also be documented and tracked. All discussions, findings and next steps should be tracked as documentation and associated with the experiment. What are the benefits of experiment tracking? Experiment tracking helps measure the impact of changing model parameters. It also helps identify model behavior due to changes in training data. Data scientists can verify if the project is moving towards the stated requirements and goals and take corrective action with experiment tracking. The results of experiments can help decide if the model needs to be promoted to production. This analysis can be automated along with decision criteria for promotions, thus leading to an automated experiment analysis and promotion pipeline. One key aspect to remember is the amount of activity needed for experiment tracking. Doing this tracking manually is time consuming and prone to errors. It's recommended to use the right tools built for this purpose and integrate them into the ML training pipelines. This way data is automatically added to the tool during experiments and tracked over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[Deep Learning]] (1)
> **Prerequisites:** set up (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [AutoML](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automl?u=76281980&t=0)** - [Instructor] AutoML is one of the key areas in ML-Labs that is seeing exponential growth. What is AutoML? It is the automation of all machine learning activities across the model life cycle to enable model development, analysis and decision making without human intervention. It deals with automating the job of data scientists and helps scale machine learning. What activities can be automated in AutoML? It first starts with [[Feature Engineering]]. AutoML can automatically analyze features to detect issues and inconsistencies and correct them. It can also be used to understand feature correlation to the target and select the best features. AutoML can help in model training by automatically selecting the right model algorithm. It can also perform hyperparameter tuning. Both model selection and hyperparameter tuning can be achieved by trying out multiple options and selecting the one with the best results. It can also do ensemble training by using multiple models to choose the best outcomes. Next comes deployment. AutoML pipelines can analyze model training and test results to decide if the model is ready for promotion to production. It can also detect drift and bias in models and decide to retrain and redeploy these models.
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automl?u=76281980&t=93)** One area where AutoML is popular is in creating custom models by use case. Data scientists may hand create a base model and then that model can be customized based on specific customers or use cases. This helps create and manage hundreds of models in a [[SaaS|software as a service]] application without additional human work. Let's now look at some of the key benefits and shortcomings of AutoML. Looking at the benefits, AutoML increases the efficiency of ML pipelines with automated retraining and incremental training without human intervention. This also increases the speed of training and deployment. AutoML may produce better results since it can do a grid search for hyperparameters and model types. Using AutoML does not need trained data scientists and other users should be able to set up and customize them. Creating custom models by each customer or use case at scale is another key benefit of AutoML. In terms of shortcomings, any form of automation creates errors, if not fully validated. New use cases in terms of training data or feature target relationships may create issues with models. Model bias may go untracked if there are no special automated checks for these. Processing capacity might be an issue, especially if training happens for multiple rounds using grid search.
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/automl?u=76281980&t=187)** Finally, Explainable AI may become worse as AutoML may take modeling decisions that are not fully understood by the team. What are some of the best practices for AutoML? Automation is good for repeatable tasks. Achieve manual repeatability of the task before automating it. This includes the steps needed, exceptions handled and decisions taken during the task. Choose the right tools and technologies for AutoML. This helps manage AutoML pipelines efficiently. We will list a few tools in the next video. Use experiment tracking along with AutoML to track all experiments and results. Create automated tests to verify the sanity of tests using AutoML. Track the performance of the model closely in production to see if AutoML is resulting in degradation of performance. Review the results of AutoML from experiment tracking, test results and production performance. Take care of issues and keep improving the AutoML pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (1), [[SaaS|Software as a service]] (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for training](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/tools-and-technologies-for-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/tools-and-technologies-for-training?u=76281980&t=0)** - [Instructor] There has been incredible growth of tools in the area of model training in the past couple of years, and this will continue to explode in the near future. We will discuss some popular tools here, but it's highly recommended to scout the ecosystem for the best options when you actually start implementing [[MLOps]]. For model development, there are mature platforms like [[Python (Programming Language)|Python]], its library ecosystem and Jupyter Notebooks. Source code control for software with tools like [[Git]] are also popular. For experiment management, there are multiple tools available, like Kubeflow and [[MLflow]]. Weights & Biases also specialize in this domain. For AutoML, there are, again, a number of tools coming up, the popular ones being Kubeflow and Databricks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[Python (Programming Language)|Python]] (1), [[Git]] (1), [[MLflow]] (1)
> **CLI Commands:** python (1), git (1)
> **Cross-References:** coming up (1)
> **Tools:** jupyter (1)
> **Exercise Files:** source code (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Training with generative AI](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/training-with-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/training-with-generative-ai?u=76281980&t=0)** - [Instructor] [[Generative AI]] is the newest class of AI that is revolutionizing how machine learning could be used to help automate enterprise use cases. While most of the ML ops principles discussed in this course apply to generative AI also, there are some special considerations. In the case of model training, there are some unique processes. Let's briefly discuss them in this video. How are training models different in [[Generative AI|GenAI]], compared to traditional machine learning? In GenAI, there are two key tasks namely, pre-training and fine-tuning in the training phase. In pre-training, the goal is to create a GenAI model from scratch. These models are also called foundation models. These models are huge in size with billions of model parameters. The goal of pre-training is to create a general purpose model using general purpose data sets. Typically, data sets like the entire Wikipedia are used build foundation models. The foundation model learns general patterns and structures in data. Typically, the model learns linguistics as well as general knowledge from the dataset. Building these models takes significant effort and time. The costs are really high,
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/training-with-generative-ai?u=76281980&t=97)** hence only few such models are built and shared in the GenAI world. The other task in training GenAI models is fine-tuning. In fine-tuning, a foundation model is taken and then fine-tuned to a specific domain or task. This is done when the foundation model does not sufficiently handle the specific domain or task. For fine-tuning domain or task-specific data sets are used. These data sets are typically enterprise-specific and collected from internal sources. This helps the model learn task-specific patterns and structures. This learning can supplement or override existing knowledge captured within the foundation model. This [[Fine Tuning]] process costs significantly lower than pre-training. It also takes less time when the data sets are readily available. How are enterprises training GenAI? In most of the cases, enterprises use fine-tuning to customize a foundation model to the use case using use case-specific data sets. Pre-training is left to the creators of general purpose foundation models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (6), [[Generative AI]] (2), [[Fine Tuning]] (1)
> **Speakers:** - [instructor] (1)


### 5. Model Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Model versioning](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-versioning?u=76281980&t=0)** - [Instructor] In this chapter, we deal with [[MLOps]] around model management. We begin with a discussion on model versioning. As seen in the experiment tracking video in the earlier chapter, ML models evolve over time, as new training data is used and hyper parameters tuned. Tracking models with versions help establish lineage and manage its life cycle. [[Version Control]] schemes should be similar to what is followed for software code. The specifics of the number of sub-versions and how version numbers change can be specific to your organization. Let's review the benefits of model versioning. Having version models along with data versions and code versions helps the team to establish baselines that link all the three versions. Given a model version, it's easy to see the input data that was used to build the model and the hyperparameters used. This helps in tracking and analyzing improvements in model performance. Version models can be easily referenced for integration and testing, and a given test cycle can stay with the same version until completed. Versioning also helps in model life cycle management, which we will discuss later in the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[Version Control]] (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Model registry](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-registry?u=76281980&t=0)** - [Instructor] Similar to how data is cataloged in feature stores and code is stored in code repositories, models do need their own registry to manage their life cycle. A model registry is a repository for storing and tracking machine learning models. It is a database that contains the model and [[Metadata]] about the model. The database can be queried at any time to access the model and information about it. It is constantly updated with all status changes and associated audit trails. What information is captured in the model registry about the model? First, a serialized version of the model, like a pickle file is stored in the registry, Metadata about the model, including a unique model ID, version, and description of the model is stored. Hyper parameters used for the model is a key metadata to capture. Then there is model status based on which stage of the life cycle the model is currently in. There is also an audit trail of the model's history, including timestamp of state changes, test passes, test failures and deployment. There are also links to the input data version, the code or the notebook version that is used to build the model, and performance results from experiment tracking. Typically, an organization has a single central store for all the models that is shared by its ML teams. What are the benefits of model registry,
>
> **[1:37](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-registry?u=76281980&t=97)** specifically from the ML ops principle perspective? The registry provides traceability of the model, including its data and code lineage. This then helps in recreating the model if needed. The registry provides tracking of life cycle events for the model, thus helping in life cycle management. A central model registry serves as a communication and collaboration medium across multiple teams, and within the same team across different time intervals. The registry helps in automating the model creation and consumption activities. It also helps govern the data around the model, including access control and auditing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Benchmarking models](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/benchmarking-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/benchmarking-models?u=76281980&t=0)** - [Instructor] A key activity in the machine learning life cycle is benchmarking of models. With respect to machine learning, benchmarking is the activity of comparing models and their versions against baselines and other competing models to understand how they perform against each other with respect to the stated project requirements and environments. Benchmarking happens after a model is found to pass its fitness test and is ready for integration. Benchmarking tests the model in environments that are closer to production, and test for both performance and operational metrics. What setup is required for a benchmarking environment? First, it needs [[Hardware]] compute power, like CPU, memory and discs. It also needs an isolated software and network setup where the benchmarking process won't be impacted by other activities. Next, it needs a test hardness. Both the baseline and the new model need to be subjected to the same test hardness. The test hardness contains a test data set that will be fed to the model and the expected results from the model. There will also be test executors that can execute the test cases with required pacing and capacity. Then comes the benchmarking tracking platform. The platform should provide for logging of prediction requests, the actual predictions, observed latency, and errors.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/benchmarking-models?u=76281980&t=94)** Resource utilization during execution should also be monitored. Then various performance and operational metrics need to be computed. The tracking platform can use a combination of standard [[DevOps]], observability platforms and ML experiment tracking platforms. Finally, the mode of testing also needs to be determined. It could be that both models run simultaneously at the same time, or it's a single model that is executed and then compared against the baseline. This is use case specific. Benchmarking activities should result in collection of various metrics for analytics. First, there are the model performance or effectiveness metrics that need to be computed, including accuracy, F1-scores, et cetera. Then operational metrics also need to be computed, like latency, scaling and resource utilization. A given model may perform better than its baseline when executed from a notebook. But when executed in a benchmarking setup, it may require more resources and may create additional latency. The benchmarking process provides validation that the model is fit for production for both performance and operational requirements. Let's review some of the best practices for benchmarking. Benchmarking should enable apples-to-apples comparison and care should be taken to make sure that it is indeed so. It's recommended to log all actions,
>
> **[3:07](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/benchmarking-models?u=76281980&t=187)** results and resource utilization at the most granular level as possible. This is required for troubleshooting, if needed. The benchmarking task should be automated and integrated into the training and deployment pipelines. As the model gets promoted, benchmarking should run automatically and compared to its baselines. Experiment tracking tools can be used to track benchmarking results for long-term performance analytics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[DevOps]] (1)
> **Prerequisites:** setup (3)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Model life cycle management](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-life-cycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-life-cycle-management?u=76281980&t=0)** - [Instructor] The machine learning process can be considered as the journey of a model. A model goes through a life cycle and managing its life cycle is central to [[MLOps]]. A well defined model life cycle with associated policies and processes helps in organizing, managing and scaling machine learning in an organization. When we talk about life cycle, we are talking about multiple model states and the state transitions that happen during the life of a model. Let's discuss a sample life cycle of a machine learning model or more specifically, a version of a model. This is a sample set of state and state transitions and you should build your own state transition scheme for your organization. First, we start with the model training activity, which produces a model. The model moves into the created state. Then, we perform model benchmarking. If the model passes benchmarking, it transitions to the past state. If it fails benchmarking, it moves to the discarded state. Next, the model is integrated with non ML code and goes through [[Integration Testing]]. If it passes integration testing, it moves to the upward state. Else, it moves to the archive state. We could have also discarded it. An approved model is then deployed in production and moved to the deployed state. When a new version of the model is ready,
>
> **[1:33](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/model-life-cycle-management?u=76281980&t=93)** it's upgraded in production. Then, the current model is moved to the retired state. This again is a sample life cycle and you can customize it as needed for your organization. As the model goes through this life cycle, it is considered being promoted to newer states. How do we promote models? It's recommended to define the model life cycle and the promotion criteria during the requirement stage. Promotions should be based on metrics. This includes performance and operational metrics based on which model requirements are stated. For integration testing, it should have a past criteria that is around these metrics again and also other non ML criteria like the total number of issues found. Automate the promotion process in the pipeline based on thresholds on these metrics. It improves efficiency with less human intervention. Add human oversight as needed. During the initial stages, more oversight as needed to make sure that the pipeline and promotions are working as desired but as the pipeline matures, oversight can be reduced. Capture the decision and promotion history as part of the model registry for future reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (3), [[MLOps]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Tools and technologies for model management](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/tools-and-technologies-for-model-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/tools-and-technologies-for-model-management?u=76281980&t=0)** - [Instructor] Let's take a look at some of the tools and technologies available for model management. As with other tools we've discussed, this is a rapidly evolving landscape. So please do your own due diligence at the time of implementation to find the best set of tools. In terms of model registry, popular ML platforms like [[MLflow]], Neptune and Weights and Biases provide the ability to store and track models. This includes model life cycle management also. For benchmarking, there are popular tools and libraries like MLPerf and DAWNBench. In addition, MLflow also has capabilities for benchmarking. AutoML is another rapidly evolving domain and [[Microsoft Products|products]] like Kubeflow and databricks are dating this domain now. When choosing tools, please do consider reducing the total number of tools deployed, as each tool requires its own administration, integration, and maintenance. As the ecosystem evolves, we can expect fewer tools which provide end-to-end [[MLOps]] capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (2), [[Microsoft Products|Products]] (1), [[MLOps]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Continuous Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution integration pipelines](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-pipelines?u=76281980&t=0)** - [Instructor] Once the model is ready and benchmarked, it needs to be integrated with the non ML part of the solution. In this chapter, we will focus on the processes and best practices for solution integration. ML models do not work standalone. They need to be embedded into other code to deliver end-to-end solutions. This requires integration with other code like APIs, UIs, [[Databases]], and [[Microservices]]. How do we go about doing this integration? Let's look at the solution integration pipeline now. As seen before, we trained the model using input data from the feature store and hyper parameters. We then stored the model in the model registry. Now, the model and its pre-processing and post-processing code is in the form of a notebook. It needs to be converted into a software form that is suitable for integration. We call this step, notebook to software. This method produces the model in an executable form. This is then regression tested to make sure that the model still continues to perform as its baseline notebook form. This produces an ML service that is ready for integration. We call it a service here but it could be a library or a function. On the other hand, the non ML code evolves independently. The non ML code is tested with other functions
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-pipelines?u=76281980&t=96)** and it gets ready for integration. The ML service is then integrated into the non counterpart and integration tested. The entire solution is then performance tested to make sure that the solution as a whole meets the requirements of the project. This is then packaged and is ready for delivery. The package contains both the model in its executable form and the non ML code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Microservices]] (1)
> **CLI Commands:** make (2)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [Notebook to software](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/notebook-to-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/notebook-to-software?u=76281980&t=0)** - [Instructor] The notebook to software step deals with producing a deployable and executable version of the model. Code in ML notebooks need to be converted to executable software before it can be integrated and deployed. This conversion should ensure that processing and model aspects from the notebook are faithfully reproduced into the code, and has the same performance as the notebook. There are multiple ways in which a model can be made into an executable form. This depends upon the type of use case and deployment. To begin with, the model can be provided as [[Embedded Software]], where it gets embedded into non-ML executables. Alternatively, it can be its own running service that receives requests from clients and returns responses. The use cases could be batch or historical predictions and streaming or online predictions. If it's an embedded software, it does not make a difference between the use cases. The model could be a function in a program. It could be made available as an SDK. It could be a [[Python (Programming Language)|Python]] package. It can be a pipeline Lambda function. It can be a form of bundled solution that is sold. If it runs as a service, the deployment [[Forms]] will vary. For batch use cases, the model itself can be a batch ML job that reads data from a database
>
> **[1:32](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/notebook-to-software?u=76281980&t=92)** and writes predictions back to the database. It can be an API, like a [[Representational State Transfer (REST)|rest]] API, that receives requests from clients and returns predictions as responses. For streaming, APIs can do the work also. Predictions can be a stream processing job that reads requests from a queue and writes the predictions to another queue. Choose a form that is optimal for the use case being designed. Whichever deployment form is chosen, the process of conversion is similar. What needs to be converted and added to the executable? First, required steps for pre-processing of input data needs to be added. These may be steps like tokenization, encoding, input scaling, et cetera. Next, the model filed from the registry needs to be brought in. The executable can either package the model file as a part of the deployment package or read it in real time from an external repository. Next, the inference step needs to be coded in. After that, any kind of post-processing, like decoding, reverse scaling, conversion to business outcomes, et cetera, should also be added in. The code should provide interfaces to receive inputs and return outputs. These may be function calls, rest APIs or [[Database Queries]]. Finally, the build, test and deployment infrastructure for this executable also needs to be built, like any other software module.
>
> **[3:06](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/notebook-to-software?u=76281980&t=186)** Once the notebook is converted to software, it is critical to do regression testing of the model to make sure that it has not lost any of the steps or performance that it had in the notebook. Here, it's recommended to use the benchmark results for the model as the baseline. Then, use the same input data used for benchmarking as input for testing. Regulation should ensure that the model delivers the same performance as the original notebook. If not, it needs to be fixed and retested. Special attention should be given to the pre-processing and post-processing steps. And their regression should also be tested. There are some tools available that can take a notebook and automatically convert that into a service. Explore those if they would meet your requirements before getting into manual conversion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Embedded Software]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Python (Programming Language)|Python]] (1), [[Forms]] (1), [[Database Queries]] (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** api (2), sdk (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Solution integration patterns](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-patterns?u=76281980&t=0)** - When do we integrate the ML and non-ML parts of the solution? Let's look at the options available in this video. The ML and non-ML parts of the solution evolves simultaneously in incremental cycles. Integrating code is always cumbersome, if the process is not well managed. Ensuring integration with stable versions of the software will help avoid sub prices later during deployment. Let's look at a sample ML and non-ML pipeline. On the ML side, we start with the model version 2.0 and the corresponding ML service version 2.0, we then evolve this model with retraining and come up with a model version 3.0. This goes through the notebook to software process to produce ML service 3.0. On the other side, we start with the non-ML version 4.0. It goes through development and testing processes to produce non-ML version 5.0. This process happens simultaneously, where the ML service 3.0 is being developed. When would you integrate the new ML service 3.0 with non-ML version 5.0. The first option is to hold the ML version constant throughout the non-ML iteration. Do note that during the development of the non-ML model, the ML service should be available in some form for making development progress.
>
> **[1:34](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-patterns?u=76281980&t=94)** This may be a dummy service or an yearly version. So we can use ML service version 2.0 for the development of non-ML version 5.0, all the way to integration and deployment. Keeping the ML service constant, provides stability in the development process of the non-ML service. We can then do the next solution release, where we can hold the non-ML version to 5.0 and use the new ML service 3.0. The second option is to adapt a new ML version, as soon as it becomes available during the non-ML cycle. In this case, we will use ML service 2.0 during non-ML 5.0 development, until ML service 3.0 becomes available. The new ML service version is introduced in the middle of the non-ML development or integration cycle.
>
> **[2:30](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/solution-integration-patterns?u=76281980&t=150)** - What are the advantages and disadvantages of adapting the model too soon as it becomes available. Adapting ASAP provides for a faster overall life cycle and quicker time to market. Any issues with the model or the integration would be found earlier. On the other hand, bringing a new version late in the cycle may result in problems and unplanned delays as we roll back and forward. It also requires complex [[Team Collaboration]] between the ML and non-ML teams to make sure that these pieces would work properly when bought together later in the development cycle. Automation can be challenging also if it automatically pulls in a new version of the model, into the development and test cycle leading to breaking of the pipeline. Once again, choose a pattern that best fits your requirements and take care of the shortcomings with proper processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Team Collaboration]] (1)
> **Versions:** 3.0 (5), version 2 (3), version 5 (3), 5.0 (2), version 3 (1)
> **Speakers:** - when (1), - what (1)
> **CLI Commands:** make (1)
> **Env Vars:** asap (1)
> **Warnings:** note that (1)

#### [Best practices for solution integration](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/best-practices-for-solution-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/best-practices-for-solution-integration?u=76281980&t=0)** - [Instructor] Let's complete the course by discussing some best practices for solution integration for machine learning. We will extend some of the best practices in other pipelines to the integration pipeline also. Define code promotion policies for various stages in the integration pipeline. Stated policies help everyone understand the requirements and avoid confusion at a later stage. Define acceptance criteria that are measurable either using pass-fail tests or performance and operational metrics. Automate solution integration and testing, as this needs to be done frequently, as the ML and non-ML parts evolve simultaneously. Focus on both the ML and-non ML test cases during integration. And finally, it's important for the ML and non -ML teams to collaborate consistently to make sure that each knows what the other team is working on and can anticipate changes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Integration with generative AI](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/integration-with-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/integration-with-generative-ai?u=76281980&t=1)** - [Narrator] How is model integration done when it comes to [[Generative AI]] use cases? Generative AI models are huge, and they take significant resources to train, deploy, and serve. Most popular generative AI models, are hence used through a cloud provider service like OpenAI. Even with open-source models, it is preferred to use the deployed versions on popular platforms like AWS and GCP. Hence, the integration work involves testing the generative AI application with the model service, and ensuring that all functionality works as desired. What are some key considerations for [[Integration Testing]] with generative AI? The first key activity is to focus on how the generative AI model is integrated into the application. This indicates resources provisioning, bandwidth provisioning and security. Prompts for [[Generative AI|GenAI]] are the integration code between the application and the GenAI models. These need to be used within the application and tested with the model. In cases where the prompts can be changed by the user, test coverage is critical to ensure that all use cases are addressed. [[Vector Databases]] can be used for retrieval augmented generation-based applications. These [[Databases]] also need to be part
>
> **[1:36](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/integration-with-generative-ai?u=76281980&t=96)** of the integration testing. If these GenAI applications are [[AI Agents]], then the tools used in these agents and their integration points with external applications also need to be tested. Guardrails may be used with GenAI applications for safety and security reasons. Popular guardrails include [[Privacy Protection]], hallucination, and harmful content filtering. These guardrails also need to be included during integration testing to ensure that they work as desired when deployed in production. From a performance point of view, latency and cost for GenAI applications need to be measured during integration testing as they have a significant impact on [[User Experience (UX)|user experience]] and budgets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (6), [[Generative AI|Genai]] (5), [[Integration Testing]] (4), [[Vector Databases]] (1), [[Databases]] (1)
> **Env Vars:** aws (1), gcp (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with MLOps](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/continuing-on-with-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-essentials-model-development-and-integration/continuing-on-with-mlops?u=76281980&t=0)** - [Instructor] Now that you have learned about the concepts of [[MLOps]] for model development and integration, you can take your learning even further. Explore MLOps for model deployment and monitoring. It's recommended to also take the course MLOps essentials model deployment and monitoring. Explore specific tools and technologies discussed in this course. Get a copy or a free license and experiment with them. Implement the MLOps pipeline in your organization using the learnings from this course. Machine learning always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting benefits out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (4)
> **CLI Commands:** find (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- MLOps
- Artificial Intelligence (AI)

## Path Context

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[MLOps and Data Pipeline Orchestration for AI Systems]] | **7 of 10** | [[MLOps Essentials- Model Deployment and Monitoring]] →

### In [[Advance Your Skills in AI and Machine Learning]]
← [[Exploring AIOps]] | **10 of 16** | [[MLOps Essentials- Model Deployment and Monitoring]] →

## Appears In

- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[MLOps Essentials- Model Deployment and Monitoring]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[MLOps Tools- MLflow and Hugging Face]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)