---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mlops-and-data-pipeline-orchestration-for-ai-systems
url: "https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 5/27/2025
learners: 3859
skills:
  - MLOps
  - Artificial Intelligence (AI)
  - Data Pipelines
  - Orchestration
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFD5fYFdNH9Ug/learning-public-crop_675_1200/B4EZbqSXHjGkAY-/0/1747687404255?e=2147483647&amp;v=beta&amp;t=hbl-sUxDJgry-wXj7Pvl1DAZmttLLP28qxi6g_DutVM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Working with Data- Engineering, Integration, and MLOps for AI]]'
prev_courses:
  - '[[Data Preparation, Feature Engineering, and Augmentation for AI Models]]'
  - '[[Semantic Search and Information Retrieval using GenAI]]'
next_courses:
  - '[[MLOps Essentials- Model Development and Integration]]'
  - null
path_nav: '[{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":6,"total":10,"prev":"Data Preparation, Feature Engineering, and Augmentation for AI Models","next":"MLOps Essentials- Model Development and Integration"},{"path":"Working with Data- Engineering, Integration, and MLOps for AI","position":5,"total":5,"prev":"Semantic Search and Information Retrieval using GenAI","next":null}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/mlops
  - skill/artificial-intelligence-ai
  - skill/data-pipelines
  - skill/orchestration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/MLOps%20and%20Data%20Pipeline%20Orchestration%20for%20AI%20Systems.md)

![MLOps and Data Pipeline Orchestration for AI Systems](https://media.licdn.com/dms/image/v2/D4E0DAQFD5fYFdNH9Ug/learning-public-crop_675_1200/B4EZbqSXHjGkAY-/0/1747687404255?e=2147483647&amp;v=beta&amp;t=hbl-sUxDJgry-wXj7Pvl1DAZmttLLP28qxi6g_DutVM)

# MLOps and Data Pipeline Orchestration for AI Systems

> This course covers the automation and management of machine learning workflows, from data ingestion to model deployment. Join instructor Janani Ravi as she teaches you how to orchestrate and optimize data pipelines, ensuring efficient, scalable, and reliable operation of AI systems in production environments. This course is an ideal fit for anyone working with AI, data infrastructure, and machine 

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems) | 1h 19m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Importance of MLOps](#importance-of-mlops)
  - [Prerequisites](#prerequisites)
- [**1. The Need for MLOps**](#1-the-need-for-mlops) (4 videos)
  - [Agile development and DevOps](#agile-development-and-devops)
  - [Introducing MLOps](#introducing-mlops)
  - [The MLOps lifecycle](#the-mlops-lifecycle)
  - [Tracking artifacts in MLOps](#tracking-artifacts-in-mlops)
- [**2. MLOps with MLflow**](#2-mlops-with-mlflow) (4 videos)
  - [Introducing MLflow](#introducing-mlflow)
  - [Install MLflow and prepare data for machine learning](#install-mlflow-and-prepare-data-for-machine-learning)
  - [Track a model run and register a model](#track-a-model-run-and-register-a-model)
  - [Multiple model versions and predictions using registered models](#multiple-model-versions-and-predictions-using-registered-models)
- [**3. LLMOps for Large Language Models**](#3-llmops-for-large-language-models) (5 videos)
  - [Introducing LLMOps](#introducing-llmops)
  - [LLMOps vs. MLOps](#llmops-vs-mlops)
  - [LLM model development and evaluation](#llm-model-development-and-evaluation)
  - [LLM model deployment and operations](#llm-model-deployment-and-operations)
  - [Benefits, best practices, and considerations for LLMOps](#benefits-best-practices-and-considerations-for-llmops)
- [**4. Data Orchestration Pipelines**](#4-data-orchestration-pipelines) (3 videos)
  - [Components of a data orchestration pipeline](#components-of-a-data-orchestration-pipeline)
  - [Detailed overview of pipeline components](#detailed-overview-of-pipeline-components)
  - [Data orchestration pipeline best practices and dos and don'ts](#data-orchestration-pipeline-best-practices-and-dos-and-donts)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary and further study](#summary-and-further-study)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Importance of MLOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=1)** - [Narrator] Hi, and welcome to this course on [[MLOps]] and Data Pipeline Orchestration for AI Systems. First, let's talk about the importance of MLOps, or ML operations, and where LLMOps fit in. MLOps or machine learning operations help operationalize and scale ML workflows. They enable consistent, repeatable, and scalable deployment of machine learning models and AI systems across environments, whether it's dev, test, or prod. It provides mechanisms for versioning, validation, testing, and monitoring models in production to detect drift and performance degradation. This ensures model quality and reliability. MLOps integrates [[Data Science]], engineering, and [[DevOps]] teams through pipelines that automate the training, deployment, and update of models. This improves collaboration between your teams and the automation of your systems. And finally, MLOps ensures that all aspects of the machine learning lifecycle, whether it's data, code, or models, are logged and auditable, and this supports regulatory and business requirements. [[Large Language Models (LLM)|Large language models]], or LLMs, are usually [[Generative AI]] models that are trained on a huge corpus of data and have billions of parameters. LLMOps helps orchestrate [[Fine Tuning]], [[Prompt Engineering]], and model deployment of LLMs at scale. These tend to be far more complex than traditional ML models.
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=95)** LLMOps is all about monitoring and optimization of resource usage such as GPUs, graphics processing units, or TPUs, tensor processing units. They help monitor and control model size and inference time to keep LLM applications cost-effective and responsive. LLMOps supports auditing, moderation, and prompt injection defenses to reduce the risks of harmful or biased outputs in production. And finally, it facilitates automated testing, human in the loop feedback and performance tracking to iteratively improve LLM responses over time. This is continuous evaluation and feedback.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (5), [[Data Science]] (1), [[DevOps]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Generative AI]] (1)
> **Env Vars:** llm (2)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Prerequisites](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980&t=1)** - [Instructor] Before we get going with the content of this course, let's take a look at some of the prerequisites that you need in order to get the full benefits of this course. You need to have a basic understanding of AI and machine learning pipelines. You should understand how the machine learning workflow functions, some basic knowledge of building machine learning models and training LLMs will definitely help because otherwise there'll be references here that you won't fully pass. And then finally, in order to perform the hands-on component of this course, where we'll build and train a model using ML Flow for experiment tracking and logging well, that requires you to be comfortable in [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 1. The Need for MLOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Agile development and DevOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=1)** - [Instructor] What exactly is [[MLOps]] or machine learning operations? Now, this requires an understanding of what [[Agile Development|Agile]] development is all about. Then [[DevOps]] or development operations, and then we'll finally head on to MLOps. Back in the day, [[Software Development]] used the Waterfall methodology, which was a slow process. It could take three to four years for software to be deployed, starting from the design phase to final release. Agile changed all of that. Agile is an iterative, flexible approach to software development that prioritizes rapid delivery and continuous feedback. Instead of lengthy planning, Agile teams quickly deliver working software, adaptive user input and refine solutions. Agile development helps teams quickly adapt models and processes to handle constantly changing data and user needs. It uses short iterative development cycles to reduce wasted effort by quickly validating or discarding unsuccessful experiments. Agile involves continuous feedback from real users. This ensures that teams can respond immediately to performance issues or shifting business priorities. There is a direct line from Agile development to DevOps or development operations. DevOps refers to a set of practices, cultural philosophies, and tools that aim to integrate and automate the processes between software development that is Dev and IT operations referred to as Ops. The whole idea behind DevOps is to enable faster
>
> **[1:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=94)** and more reliable software releases, improved collaboration and increased organizational agility. DevOps stems from the Agile methodology. This includes teams working together across the entire product lifecycle from the very beginning. So developers, testers, release engineers, the IT ops team all work together collaboratively and iteratively, which means, all of these teams are involved in the [[Product Development]] from the very start. It's not just the dev and product teams that are focused on product building. Now, DevOps is only possible when you use automated tools. It's only with automation that you get a feedback loop where software improvements are incorporated and released faster. If the entire release cycle had to be a manual process, it would be impossible to get fast feedback. Here's what the DevOps lifecycle looks like. First, we have the planning fees where you're figuring out what exactly the requirements are and what you need to build. From planning to development, your requirements are turned into code. Development is not a standalone phase. As you develop new features and functionality in your application, your code is continuously integrated and tested in an automated manner. Your tested code is automatically deployed. That is the connection between integration and testing and deployment and operations. Validated code is deployed into production rapidly
>
> **[3:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=187)** and safely. Deployed applications are constantly monitored, and realtime data and user feedback inform future improvements of your application. The feedback and learning is further incorporated into your planning fees. The insights that you get from deploying your software leads to adjustments starting the cycle anew. Now, if you'd like to adopt this DevOps framework to machine learning models, things change a little bit. Machine learning introduces additional complexity such as evolving data, model degradation, experimentation cycles, and retraining requirements. All of this is unique to machine learning. Traditional DevOps practices do not adequately handle data-driven tasks like [[Continuous Monitoring]] for performance drift of your models. Deployed models degrade over time. They have to be constantly retrained on new data. And this is performance drift. This is something MLOps needs to handle. Roles that are specific to machine learning, such as data scientists, machine learning engineers and analysts, they require specialized processes beyond traditional software delivery. They have to manage code as well as data. MLOps has the same cultural philosophy as DevOps. It includes everything within DevOps, plus more, the ability to version and work with data. That additional complexity needs to be handled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (11), [[Agile Development|Agile]] (8), [[MLOps]] (4), [[Software Development]] (3), [[Product Development]] (1)
> **Definitions:** is an  (1), is a  (1), refers to (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Introducing MLOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=1)** - [Instructor] So what exactly is [[MLOps]], or machine learning operations? This is a set of practices that aims to automate and streamline the entire lifecycle of machine learning models, from development and training, to deployment, monitoring, and management in production. It combines principles from [[DevOps]] with the specific requirements of machine learning to ensure faster iteration, improved reliability, and better governance of AI systems. Let's talk about why we need MLOps. Why does it matter? Now, machine learning models, which has been found, perform well during [[Prototyping]] when you're coding them up in notebooks, but these same models tend to struggle when deployed into real world production environments. Now, this could be because of a variety of reasons. There could be differences in data conditions, infrastructure, and user interactions, all of these could cause models to fail unexpectedly. And this is exactly what MLOps tries to address. MLOps addresses these issues by bringing reliability, consistency, and [[Scalability]] to your machine learning deployments. Machine learning projects tend to be far messier than software engineering projects. With software engineering, all you have to do is deal with code, but with machine learning, you have to deal with changes to data as well. Real world data frequently changes, and this causes models trained on static data to quickly degrade in performance. If you don't set up a consistent environment or your model training, you'll find
>
> **[1:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=93)** that you'll run into reproducibility issues. This is where you have difficulty in replicating results, and this can arise because of variations in data, code, or the environment that you're training your model in. Because machine learning deals with both code and data, it's quite possible that you have manual processes interweaved between automated processes. Manual processes and fragmented workflows can slow down model deployment into production. With machine learning models, you likely have many more small teams. You may have teams that are responsible for model development, and you may have teams that are responsible for [[Data Cleaning]] and processing. Now, if you have unclear responsibilities between teams, that can lead to confusion, slow responses, and neglected maintenance. Let's talk about how MLOps is different from machine learning. Machine learning has a reasonably well-defined workflow, something that you are familiar with. You first prepare your data, then you train your model with the data, you evaluate the model, and then deploy that model to production. However, models that are static that are not constantly retrained, degrade in performance. In fact, models degrade as soon as they're deployed. This drift is what MLOps tries to prevent. With an MLOps-enabled workflow, you are constantly monitoring a deployed model to see how it performs. In order to keep your model performance from degrading, you automatedly go back to the [[Data Preparation]] stage,
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=189)** you ingest new data as it arrives, and then you cycle through the model training, evaluation, and deployment process, all using automated pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (7), [[DevOps]] (1), [[Prototyping]] (1), [[Scalability]] (1), [[Data Cleaning]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The MLOps lifecycle](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=1)** - [Instructor] Here is how you can think of the [[MLOps]] lifecycle. Please note that this entire lifecycle has to be executed in an automated manner for quick feedback. There should be no manual processes involved in this workflow. The first thing to note here is that your machine learning model is impacted by two changes, code changes, as well as data changes. Let's discuss code changes first. If you modify the model architecture, change the [[Feature Engineering]] logic or the training pipeline, all of this can alter how the model learns from data. For example, if you change from a [[Logistic Regression]] model to a neural network, that may lead to different predictions and performance. Models are also affected by data changes. If you have new data or if you have missing or differently distributed data, all of this can shift the model's understanding and affect its accuracy. For example, a recommendation model trained on last year's user behavior may perform poorly if user preferences have changed this year. Now, if your data or code has changed, that will lead to model training. The model is then trained on the latest data using the defined [[Algorithms]] and parameters. Once you train the model, you'd like to evaluate the model to see how it performs on the test data. This is to ensure that it meets performance criteria, such as, say, accuracy, precision, and recall for a classification model. Once you're satisfied with the model's performance, that's when you deploy the model. The model is pushed to production,
>
> **[1:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=93)** where it can serve real time or batch predictions. Now, in your MLOps workflow, you'll constantly monitor the deployed model for performance drift, data changes, and any operational issues. If you find that your model performance has dropped due to, say, data drift or new patterns, it is retrained with updated data and possibly new code, and this loops back to the start of the cycle. The whole idea of MLOps is that you automate this workflow and run it in a consistent environment. This lifecycle helps you maintain reliable, up to date, and high-performing machine learning systems in production environments. There are three important components in MLOps. The first is [[Continuous Integration (CI)|continuous integration]]. This is when you automate the pipeline to integrate and test new code changes and data changes in a shared repository. This is what allows you to detect issues early and maintain code and [[Data Quality]]. Then, we have [[Continuous Delivery (CD)|continuous delivery]]. This ensures that validated code and models are always in a deployable state and sometimes are automatedly deployed to production, if that's how you set up your automated pipeline. This enables frequent and reliable releases to staging or production. Continuous integration and continuous delivery, these are components also present in [[DevOps]]. But with MLOps, we have one more, and that is CT, or continuous training. This is where you automate the retraining of ML models
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=188)** based on new data or performance triggers, keeping models up to date and relevant over time. Let's look at how continuous integration, continuous delivery, and continuous training fit into the MLOps lifecycle. You can see that I have mapped continuous integration, continuous delivery, and continuous training here in the MLOps lifecycle workflow that we saw earlier. Continuous integration refers to the process of automatically testing and integrating code changes, that is, model logic and feature engineering, and new [[Data Ingestion]] workflows into the main development pipeline. This ensures that every change, whether in code or data, is validated quickly and doesn't break the training or evaluation pipeline. Continuous delivery automates the steps from model training to model deployment. Once a model passes evaluation, it can be automatically packaged and deployed into production without manual intervention. Continuous training enables the system to monitor deployed models and automatically trigger retraining when needed, such as when data drifts or performance degrades. This ensures the model stays up to date and adapts to real-world changes over time. Together CI, CD, and CT make the machine learning lifecycle scalable, repeatable, and responsive to change. So, what are the benefits of MLOps? MLOps streamlines and automates the process of moving machine learning models from experimentation to production, significantly reducing the time it takes
>
> **[4:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=280)** to deploy valuable AI applications. Through continuous integration, continuous delivery, that is, CI/CD practices, and robust monitoring, MLOps helps ensure that deployed models are stable, perform as expected, and can be quickly updated or rolled back if issues arise. MLOps fosters better collaboration between data scientists, machine learning engineers, and operations teams by establishing standardized workflows, shared tools, and clear responsibilities. This leads to better productivity and reduced friction. MLOps practices like model versioning, lineage tracking, and standardized deployment processes improve the governance and auditability of your ML systems, making it easier to understand how models are built and ensuring compliance and reproducible results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (12), [[Continuous Integration (CI)|Continuous integration]] (6), [[Continuous Delivery (CD)|Continuous delivery]] (6), [[Feature Engineering]] (2), [[Logistic Regression]] (1)
> **CLI Commands:** cd (2), find (1), make (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** refers to (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tracking artifacts in MLOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=1)** - [Instructor] In [[Software Development]] and [[DevOps]], there's just one artifact that you have to track, and that is the code that you deploy. In [[MLOps]], on the other hand, you have to track multiple artifacts. Let's see what they are. The first thing is of course code. This involves versioning and managing the code base used for developing, training, and deploying machine learning models, ensuring reproducibility and collaboration through tools like [[Git]]. Another artifact is the model itself. This is where you focus on managing the lifecycle of machine learning models, including versioning, storing different iterations, tracking [[Performance Metrics]], and managing the models deployment and transitions to production. And then you have to track data. This encompasses versioning and monitoring the data sets used for training and evaluating machine learning models, ensuring [[Data Lineage]], reproducibility of experiments, and detection of data drift or quality issues. Let's talk about why you actually need to track all of this. If you think about ML workflows, they tend to be highly iterative and non-deterministic, and they have many interdependent moving parts. When you track code models and data, this ensures reproducibility, auditability, and collaboration across experiments and team members. Without proper tracking, it becomes very difficult to explain how a model was trained or why it performs the way it does, and what data was used to train the model. Without tracking, models are more like black boxes. Let's talk about tracking code first.
>
> **[1:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=96)** Source code of your model defines the logic used for training, evaluation, and pre-processing your data. Versioning this code ensures the reproducibility of your models. When you write code to train your models, you also depend on libraries or environments. Any changes in these libraries or runtime environments can affect your results. Tracking the full environment is critical. So it's not just about code, it's about dependencies and libraries. There are several tools that you can use for this. There are tools like Git, Docker, and Conda environments that are used to lock down code and the dependencies used with your code. Another component that we have to track in ML models is data. Input data often changes over time. Versioning ensures the same data set can be reused or audited later on. Tracking data includes schema, data splits, pre-processing steps, and source identifiers, such as raw files or database snapshots. [[Data Tracking]] also includes tracking data lineage. Lineage tracking connects data sets to specific model versions, allowing you to trace what data your model used for compliance purposes. The third artifact that your MLOps pipeline needs to track is the trained model. Trained models should be versioned as artifacts along with [[Metadata]] like the parameters of the model, the metrics of the model, and the training timestamps. Model tracking includes both the serialized model
>
> **[3:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=190)** that is the pickle files, or say the ONNX files, and associated configurations or hyperparameters. Along with models, it's common practice to store evaluation results because this is what helps teams compare and select the best model for deployment. Every training run of your model is treated as an experiment, and experiment tracks both the inputs you feed into the model, the model itself, and any outputs that are recorded with the model. Now, what exactly goes into an experiment? Experiments contain inputs. The inputs can be the data used to train the model, the code used to train the model, and the model parameters or hyperparameters that you've configured. Outputs tracked in experiments include metrics from the model. If it's a classification model, you might compute the accuracy, precision, and recall, and the output will be the trained model itself. Teams can then analyze the impact of changes to the model and understand which factors contributed to performance improvements. There are several tools available that help with experiment tracking. Tools like [[MLflow]], Weights and Biases, and DVC, which stands for Data [[Version Control]], help automate experiment tracking and comparison. In fact, we get hands-on with MLflow experiment tracking and logging later on in this course. Let's take a look at the core components of a machine learning experiment, which are foundational to tracking and managing experiments in MLOps.
>
> **[4:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=284)** Let's look at how the different components fit together. In MLOps, data versioning and lineage are crucial. You need to track which training and test data sets were used in each experiment to ensure reproducibility and fairness over time. Code includes your model definition, pre-processing logic, and training configurations. MLOps encourages storing this in a version control system like Git and linking code versions to specific experiments for traceability. The model artifact is the output of the experiment, a trained model. In MLOps, model artifacts are logged and stored in a registry such as MLflow or [[Microsoft Azure|Azure]] ML, so they can be evaluated, compared, and deployed safely. Metrics are evaluation results. Metrics such as accuracy, precision, or loss values must be logged alongside each experiment. MLOps uses these metrics for model comparison, automated validation, and triggering deployment or retraining. When you track artifacts related to the machine learning workflow, it's important that you track metadata and lineage. Metadata connects data code and models into a lineage graph that shows how each artifact was created. This is very useful for audit, debugging, and compliance, especially if you're working in a regulated organization. Lineage tracking helps answer questions like which dataset and script produce this model. Lineage tracking is an important part of MLOps. This involves comprehensively documenting
>
> **[6:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=377)** the origin and transformations of data, code, and models throughout the entire ML lifecycle. This provides a clear and auditable history, allowing teams to understand how artifacts were created, identify dependencies, and reproduce experiments, and trace back the root cause of issues or performance changes in deployed models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (8), [[Git]] (3), [[Metadata]] (3), [[MLflow]] (3), [[Data Lineage]] (2)
> **CLI Commands:** git (3), docker (1)
> **Analogies:** such as (3)
> **Env Vars:** onnx (1), dvc (1)
> **Definitions:** stands for (1), is an  (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)


### 2. MLOps with MLflow

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing MLflow](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=1)** - [Instructor] In the hands-on demo that's coming up next, we're going to be working with [[MLflow]]. MLflow plays a key role in [[MLOps]] by enabling experiment tracking, model versioning, and lifecycle management to ensure reproducibility, traceability, and seamless deployment of machine learning models. MLflow is an open-source platform designed to manage the complete machine learning lifecycle. MLflow provides tools for tracking experiments, packaging code into reproducible runs, managing and deploying models, and offering a central model registry for collaboration and governance. Essentially, MLflow aims to address the challenges of reproducibility, deployment, and collaboration in the ML workflow. Here are the basic components that make up the MLflow platform. Now, there's a lot here on screen. Let's break this down bit by bit. MLflow Tracking logs experiments with parameters, metrics, and artifacts. You can use experiment tracking to log and compare code versions, input data, parameters, metrics, and output models from each training run of your code and data. MLflow Projects packages machine learning code in a standardized format using ML projects files so that it can be reproduced and run on any platform. Projects include code, the environment in which the code was run, and any dependencies of your code. MLflow Models provides a standard format to save, load, and deploy models. Models can be saved in different flavors,
>
> **[1:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=96)** the signatures of your input data to models and the output received from models are usually logged, and then you can log different model versions. The MLflow Model Registry is a centralized store for managing models, including versioning, staging, approval, and deployment. These are the basic components that make up MLflow. Let's look at each of these in more detail, starting with model tracking. MLflow model tracking automatically or manually logs code, parameters, metrics, and outputs of every training run. This makes it easier to compare your models across runs using the MLflow UI or the command-line interface, the [[CLI]]. If you're working in MLflow, you'll primarily work in [[Python (Programming Language)|Python]], though MLflow has support for other programming languages as well, such as R and [[Java]]. MLflow Projects are a packaging format for reproducible machine learning code, allowing you to define your project's dependencies and entry points using a special file known as an ML project file. This makes it easy to organize and share ML code in a predictable and standardized way. MLflow Projects support reproducible environments. Projects can specify their runtime environment using Conda or Docker, ensuring the same dependencies are used regardless of where the project runs. This eliminates environment-related inconsistencies and supports reproducibility across systems. You can run projects locally, remotely,
>
> **[3:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=192)** or on a cluster using a single command. This provides a uniform interface to execute training scripts or pipelines, whether you're on your laptop or deploying to production. The next component we'll talk about is MLflow Models. MLflow saves models in the standard generic format that includes [[Metadata]], model artifacts, and environment details. This supports multiple ML frameworks, such as scikit-learn, [[TensorFlow]], and [[PyTorch]]. Saved models can be served using MLflow's [[Representational State Transfer (REST)|REST]] API for [[Real-Time]] inference or loaded into batch pipelines for large-scale predictions. They can also be exported for deployment to external platforms like [[Microsoft Azure|Azure]] ML, SageMaker, or Docker. MLflow ensures that models behave the same across development, testing, and production environments. This consistency helps eliminate deployment issues and supports scalable, repeatable machine learning workflows. MLflow offers a model registry that can maintain multiple versions of a model, allowing teams to manage updates, rollbacks, and staged releases. Every version is linked to a specific run and metadata for traceability. Users can add comments, tags, and descriptions to model versions, which help document intent and review history. Lineage tracking connects models to the datasets, code, and parameters used to create them. The model registry centralizes governance across teams. The registry provides a central hub for model lifecycle management with defined stages like staging, production, and archived.
>
> **[4:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=287)** In recent versions of Mlflow, model stages have been deprecated. Instead, you manage the different stages of your model, such as production and development, using explicit, unique model names. The demo that we'll perform next will be a very simple introduction to MLflow. We'll train multiple models in different runs and deploy those models to MLflow's model registry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (25), [[Metadata]] (2), [[MLOps]] (1), [[CLI]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), docker (2), python (1)
> **Env Vars:** cli (1), rest (1), api (1)
> **Definitions:** is an  (1), is a  (1), known as (1)
> **Analogies:** such as (3)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [Install MLflow and prepare data for machine learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=0)** - [Instructor] In this demo, we'll train multiple models using ML Flow. Deploy those models to the ML Flow registry and use those models for predictions. We are going to be working with [[Python (Programming Language)|Python]], so make sure you have a recent version of Python available. Python 3.8 and above. You can install ML Flow on your local machine with a pip install [[MLflow]]. This will install the latest version, which happens to be 2.2 1.3 at the time of this recording, my current working directory happens to be mlflow_project, and here you can see I have a notebook within which I'll be writing my code and a CSV file. That will be our training and evaluation data. Let's bring up the ML Flow UI. This is a web-based interface that lets users track and visualize machine learning experiments, including parameters, metrics, artifacts, and model versions. It should now be running on local host port 5,000. Let's head over and take a look and here is what the ML Flow UI looks like. ML Flow sets us up with the default experiment to start off with. We can of course create new experiments as needed. In the models tab, you'll be able to see all of the models that you have registered. We of course, have none at this point, in a new terminal window. In the same ML Flow project directory, I'm going to list the contents of this directory and you'll find that a new folder has been created called mlruns. This is the folder where the ML Flow server will save all of the experiments, the runs, and the parameters that it tracks. Let's now see how we can use ML Flow to create experiments and track model runs. Here in my notebook,
>
> **[1:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=94)** I'm going to import all of the libraries that I need to build, train, and evaluate classification models that I log and track using ML Flow. The dataset that I work with is the bank marketing dataset that's available in the UCI repository. You should have access to this dataset in the exercise files of this course. In this data, we have the records of individuals who were the target of a campaign run by a bank, and at the end of the campaign, the customer may or may not have opened a term deposit that's available in the target Y. So we are going to try and predict this particular column Y. Instead of having yes no values in the Y column, let's map these two, ones and zeros because machine learning models can only work with numeric data. Notice the updated values for the target column Y. Since we are focused on ML Flow, I'm going to keep the pre-processing of this data very simple and I won't split the data into training and test before pre-processing. Please note that this is not how you would do it in production, but split the data first, process the training data and use the training data parameters to process the test data. On lines one and two I access the X features and the Y target variables, and I encode all of the categorical values in the X features using one hot encoding. That is X_encoded = pd.get_dummies task. Here is what our encoded features look like. We have many more columns, 42 columns,
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=189)** because of the one hot encoding that we've performed. Now, if you look at our encoded data, you'll find that several columns are integer columns. These can be of type INT or UINT8. Now, if you use integer columns while training your data, ML Flow will give you a warning about loss of precision. In order to mitigate this, we'll convert all our integer columns to type float. On lines one and two I access all columns of type INT and UINT8 and on lines four and five, I change the data type to be of type float. I also changed the target variable Y to be of type float. If you now look at the data types of the columns that we have, you'll see there all of type float and we should not receive any kind of warning when we track and log our models using ML Flow. Let's go ahead and split our data into training data and test data. The training data will be to train our model, and the test data will be to evaluate our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[MLflow]] (1)
> **CLI Commands:** python (3), find (2), make (1), pip (1)
> **Env Vars:** int (2), uint8 (2), csv (1), uci (1)
> **Prerequisites:** install (3), make sure you have (1)
> **Versions:** python 3 (1), 2.2 (1), 1.3 (1)
> **Warnings:** warning (2), note that (1)
> **Code Identifiers:** mlflow_project (1), get_dummies (1)
> **Ports:** port 5 (1)

#### [Track a model run and register a model](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=1)** - [Instructor] Before training a model, the first thing we'll do is create an [[MLflow]] experiment. And MLflow experiment is a named workspace that organizes multiple related runs to track and compare different versions of a machine learning workflow. My MLflow UI is running within the MLflow project directory, and within that I showed you the mlruns folder, which is where our experiment data will be stored. In order to make sure we're working in the same mlruns folder that our UI points to, I call mlflow.set_tracking_uri and point to that folder on my local machine. I'll create an experiment named bank_marketing. I call mlflow.set_experiment with that experiment name. This will create a new experiment if an experiment with that same name does not exist. Now if you go over to the MLflow UI and hit Refresh, you should find a new experiment in the left pane. There is our bank_marketing experiment and it's currently empty, we have no runs. A run is a single execution of a machine learning workflow within an experiment. A run captures details like parameters, metrics, artifacts, and source code used. Back to our notebook, I'm going to train a simple [[Logistic Regression]] model for classification. Now I want to log parameters and metrics to run within our experiment. So I call mlflow.start_run and specify the run name logistic_regression. On line two, I access the run_id and store it in a variable. On lines five and six, I specify the parameters
>
> **[1:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=94)** for our logistic regression model, and I call mlflow.log_params to log the parameters to our run. On lines 9 through 11, we'll instantiate the LogisticRegression estimator from the scikit-learn library and train our model on the training data by calling fit. We get predictions on the test data on line 14, and on lines 17 through 20, I compute the metrics on the test data, accuracy, precision, recall, and f1 score. In order to track these metrics as a part of our MLflow run, I call mlflow.log_metric on lines 23 through 26. In order to log out the model itself, a best practice is to specify an input example and the signature of the input to the model. I set these up on lines 29 through 32, and on lines 37 through 42, I log the trained model with the model_artifact logistic_regression_model. Go ahead and run this, and in a few moments you'll find that the training is complete. Our run ID starts with cd. Let's head over to the MLflow UI and go to our bank_marketing experiment. There is our logistic_regression run. Let's click through and you can see that its run ID starts with cd, and if you scroll down here on this page, you'll find all of the parameters and metrics that we tracked as a part of this particular model run. The Model metrics tab will give you a visual representation of model metrics, everything that you tracked. And the Artifacts directory shows you
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=189)** all of the model artifacts that have been saved with MLflow. Artifacts are output files or data produced during a run, such as the trained model plots, logs, or datasets. These are stored and tracked to support reproducibility and model evaluation. The MLmodel file is a [[Metadata]] file in MLflow that describes how to load and serve a model. It will specify the model's format, dependencies, and entry points for tools like mlflow.pyfunc that can be used to load a model for prediction. Conda.yaml and python_env.yaml, along with requirements.txt specify the dependencies and environment for reproducibility. The model.pkl file is the serialized model in the Pkl format. We've trained a model within a run, but we haven't registered the model with MLFlow's centralized registry yet. The model_uri here is the URI to the model_artifact within our run_id. I'm going to call the model bank_marketing_model, and I call mlflow.register_model to register the model that we just trained with the centralized registry in MLflow. This will create version one of the model. And if you head over to the Models tab, you should see the registered model there. A model can have multiple versions, and so far we've registered exactly one. If you click through to the model version here, you'll be able to see the source run that the model came from. Off to the top right, you can see that it came from the logistic_regression run. In addition, inputs and outputs give you
>
> **[4:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=283)** the schema of the input to the model and the prediction from the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (18), [[Logistic Regression]] (2), [[Metadata]] (1)
> **Code Identifiers:** bank_marketing (3), logistic_regression (3), run_id (2), model_artifact (2), set_tracking_uri (1)
> **CLI Commands:** find (3), cd (2), make (1)
> **File Paths:** conda.yaml (1), python_env.yaml (1), requirements.txt (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** uri (1)
> **Exercise Files:** source code (1)

#### [Multiple model versions and predictions using registered models](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=1)** - [Instructor] Back in our notebook, I'm going to train a new different model, and this model will be logged and tracked in a different run. This is going to be a random forest model. You can see I call it [[MLflow]].start_run with run name random_forest. The remaining steps here are identical to the steps that we follow for the [[Logistic Regression]] model, so I won't go through these in detail. We define and log hyperparameters, train the model, generate predictions, compute metrics, and then log metrics to ML flow. We get the input example and signature, and we log the trained model. Go ahead and run this, and in a bit, your random forest run should be complete, and you should be able to view the details of this training run on the MLflow UI. Here is the random forest run. Let's go ahead and click through, and let's scroll down and take a look at the details that were logged. You can see the random forest parameters on the left and the metrics over to the right. Back in our notebook, let's register the model corresponding to this run as well. The model URI points to the random forest model. I use the random forest run ID and its model artifact name. The model name is the same as before, bank_marketing_model. When you try to register a new run of the same model, this will be registered as a separate model version. Notice that Version 2 of the model bank_marketing_model was created. In the MLflow UI, if you head over to the Registered Models and click through to the bank_marketing_model,
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=95)** you'll see that we have two versions now. Version 2, our random_forest model, and Version 1, our previous logistic regression model. Notice the Source Run for Version 2 is random_forest. Let's say you've evaluated a number of models, and you're satisfied with this random_forest model that you have. You can go ahead and promote this model and specify that it's a production model. So I'm now going to create a new model, and I'll call this bank_marketing_production_model and promote Version 2 to this production model. You can see the UI is currently open to the bank_marketing_production_model. You can see this on the top left, and you can see that this model has been copied from the bank_marketing_model Version 2. That's a little lower down on the left. Click on Registered Models, and this will take you to the main page, where all of your models are listed. Observe that we have two models, the bank_marketing_model with two versions and the bank_marketing_production_model with one version. Back to our notebook. Let's see how we can access one of these Registered Models for prediction. The model that I'm going to access is the bank_marketing_production_model. That's my model name. Now the model URI points to the production model from the registry, so it's models:/(the model_name)/1, where 1 corresponds to the model Version 1. On line 8, I load the model using the model URI, and on line 10,
>
> **[3:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=187)** I make predictions on the test data using the model. I compute Accuracy, Precision, Recall, F1, and print those out to screen. And you can see here that these values are the same values that we got from the model run. We've successfully registered multiple versions of our model with the MLflow registry. We've accessed one of those versions, loaded that model in, and used it for predictions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (4), [[Logistic Regression]] (2)
> **Code Identifiers:** bank_marketing_model (5), random_forest (4), bank_marketing_production_model (4), start_run (1), model_name (1)
> **Versions:** version 2 (5), version 1 (2)
> **Env Vars:** uri (3)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. LLMOps for Large Language Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing LLMOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=1)** - [Instructor] Most of the excitement in the field of AI today is around [[Large Language Models (LLM)|large language models]]. Now, large language models have to be treated a little differently from traditional machine learning models. So it's not just [[MLOps]] that we use to automate the pipelines for large language models, we have to use LLMOps. First, let's talk about what an LLM is. A large language model is a neural network that's trained on massive text data to generate human-like language, perform reasoning and complete tasks. These models are called large models, because the models themselves are huge. They contain billions of parameters that need to be trained. They're also called large models, because they're trained on massive quantities of data. We've already discussed MLOps in some detail. This is a set of practices that integrates machine learning development with operations, enabling reliable, reproducible and scalable ML deployment and lifecycle management. LLMOps is the practice of managing the full lifecycle of large language models, including [[Fine Tuning]], deployment, monitoring, feedback, safety and continuous improvement. Just like MLOps, LLMOps requires a collaboration of data scientists, [[DevOps]] engineers and IT professionals. The operational requirements of MLOps typically apply to LLMOps as well, but there are challenges with training and deploying LLMs that require a different and unique approach to LLMOps. Large language models are larger, more complex
>
> **[1:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=97)** and more expensive to train than regular ML models. They require massive computational resources for training and inference, making their development and deployment costly and technically demanding. LL MOPS introduces structure and automation to manage these challenges at scale. Unlike traditional ML models, LLMs can produce variable outputs even for similar inputs, making testing and evaluation more complex. LLMOps helps monitor, evaluate and refine model behavior through structured feedback and control mechanisms. LLMOps' frameworks enable secure deployment, usage monitoring and risk mitigation, such as mitigating bias and hallucinations in your model. They also help support ongoing improvements in your model through feedback loops, prompt tuning or fine tuning as your application's needs evolve. LLMs are highly sensitive to the input prompts. LLMOps needs to incorporate tools and processes for designing, versioning, evaluating and managing prompts effectively to achieve desired outputs and mitigate issues like prompt injection or hallucinations. This includes tracking prompt performance and user interactions. Traditional ML models tend to have well-defined metrics that objectively evaluate the quality of the model. Evaluating the quality and factuality of LLM-generated text is complex. LLMOps requires specialized monitoring techniques
>
> **[3:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=191)** to detect and mitigate hallucinations. That is when the model generates factually incorrect or nonsensical outputs. Specialized techniques also ensure that the generated content aligns with the desired quality standards and this often involves human evaluation and specific LLM evaluation metrics. Many LLM applications like chatbots require managing conversation and context effectively. LLMOps needs to address how context is handled, stored and passed between interactions to maintain coherence and relevance. And it has to consider factors like context window limitations and cost implications. LLMs are trained on large data sets and they end up inheriting and amplifying any biases that exist in that data and this can lead to unfair or harmful outputs. An important bit of functionality included in LLMOps is identifying, monitoring and mitigating these biases throughout the LLM lifecycle and this requires special tools and techniques for bias detection and fairness evaluation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (5), [[MLOps]] (4), [[Fine Tuning]] (2), [[DevOps]] (1)
> **Env Vars:** llm (5), mops (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [LLMOps vs. MLOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=0)** - [Instructor] Let's talk about how LLMOps is different from [[MLOps]]. The first difference is in the computational resources involved. Training and deploying LLMs require high performance [[Hardware]] like GPUs due to their massive compute demands. Techniques like model compression and distillation help reduce inference costs. The second difference here is the extensive use of transfer learning. Instead of training LLMs from scratch, LLMs are often fine-tuned from foundation models, enabling strong, domain-specific performance, with less data and compute. Human feedback is critical for a good LLM. LLMs benefit greatly from user feedback, especially through methods like RLHF, or [[Reinforcement Learning]] from Human Feedback. Integrating this feedback improves evaluation and supports future fine-tuning of models. Next, hyperparameter tuning. While tuning improves performance in all machine learning models, in LLMs, it's also critical for managing compute and cost, with parameters like bat size and learning rate having a major impact on managing the cost of your LLMs. Traditional machine learning models tend to have clear, objective metrics that you can use to evaluate those models, such as R Square for regression models and accuracy, or F1 for classification models. LLMs, on the other hand, require different measures, such as BLEU scores or ROUGE scores, which need more thoughtful implementation
>
> **[1:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=93)** and interpretation. [[Prompt Engineering]] is an essential part of LLM development. Crafting effective prompts is essential to guide LLMs reliably and safely, reducing issues like hallucination, prompt injection, or unintended behavior. Prompt engineering is not something that you'd include in the MLOps workflow. And finally, LLM chains and pipelines are useful to chain model outputs with external tools, such as vector search. You can also use frameworks like lagtrain to handle complex tasks like document-based question and answer. Here is a simplified representation of the standard machine learning workflow. You source your data from diverse sources, prepare your data, feed that data into your model that's the model training phase. You then evaluate your model, and if it doesn't meet your expectations, you iterate over and improve your model using hyperparameter tuning or new data as needed. Once you're satisfied with the model that you have, you deploy the model where it serves predictions. And then you constantly monitor the model for performance drift and performance degradation. And then you constantly retrain the model on new data as needed. There are, of course, nuances at every step, but this is the basic ML workflow. Here's what the standard LLM workflow looks like, and you can see there are many more components here. Let's break this down step by step. The first step here is when you choose
>
> **[3:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=186)** a foundation model to work with. Choose a base model like GPT, [[LLaMA]], or Claude that suits your task. Foundation models are LLMs pre-trained on large amounts of data that can be used for a wide range of downstream tasks. Because training a foundation model from scratch is complicated, time consuming and very, very expensive, only a few companies and institutions have the required training resources. Once you have a foundation model, the next step is prompt engineering. Prompt engineering is a technique to tweak the input so that the output matches your expectations. You can use different tricks to improve your prompt, design and refine prompts to guide the model towards the desired output without changing the model weights. Once you're done with prompt engineering, evaluate the results from your model. Assess the quality of the model's responses using metrics, human feedback, or automated tools. If there is a room for improvement, that is you are not satisfied with the model, check if you have the expertise and label data to fine-tune the model. If your resources allow, fine-tune the model using domain-specific data to improve performance. If your results are satisfactory, you can skip directly to model deployment. You'll go ahead and deploy the model in production. You can move the model to production using strategies that reduce risk. You may want to do A/B testing. You'll test the new version alongside the current one with different user segments.
>
> **[4:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=280)** Or you may want to set up a canary release. This is when you roll out the new version of the model to a small subset of users first. You may also choose blue-green deployment, where you maintain two environments, blue and green, and switch traffic between them. As you can see, the standard LLM workflow includes many components that are not present in the standard ML workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (5), [[MLOps]] (2), [[Hardware]] (1), [[Reinforcement Learning]] (1), [[LLaMA]] (1)
> **Env Vars:** llm (5), rlhf (1), bleu (1), rouge (1), gpt (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [LLM model development and evaluation](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=1)** - [Presenter] Let's discuss some of the important steps in LLM model development and evaluation. The first is [[Prompt Engineering]] and fine-tuning. Prompt engineering shapes outputs using carefully crafted inputs while fine-tuning update's model bits using domain-specific data. LLMOps supports both strategies for aligning models with specific use cases efficiently. Human feedback, often via [[Reinforcement Learning]] from human feedback or RLHF, is used to align LLMs with user intent and safety guidelines. LLMOps incorporates pipelines to collect, evaluate, and apply this feedback continuously. LLM evaluation goes beyond accuracy, requiring human-in-the-loop assessments, scenario tests, and toxicity and bias checks. LLMOps frameworks enable automated and manual evaluation workflows to ensure consistent quality. It's possible for LLMs to memorize training data, raising [[Privacy]] and compliance concerns. LLMOps enforces data versioning, anonymization, and governance to ensure ethical data use and auditability. Let's discuss the first important steps in LLM model development: prompt engineering and fine-tuning. Prompt engineering involves crafting specific, textual instructions or input formats to elicit desired responses from a pre-trained model without changing the model's internal parameters. Prompt engineering is a lightweight, cost-effective way
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=95)** to adapt model behavior for various tasks or domains. Fine-tuning adjust the internal weights of a pre-trained model by training it further on task-specific or domain-specific datasets. This approach allows the model to specialize and achieve higher performance on targeted applications. Human feedback is essential to develop high quality LLMs. LLMs are often trained with reinforcement learning from human feedback. RLHF uses human generated rankings of model outputs to fine-tune behavior through reinforcement learning, helping align model responses with human values and expectations. This process has been key to making LLMs more helpful, safe, and aligned with user intent. Collecting and analyzing real user feedback helps detect issues like bias, hallucination, or harmful responses in production. This feedback is used to update prompts, fine-tune models, or retrain components, helping build safer and more adaptive systems. For complex tasks like summarization, creativity, or factual reasoning, automated metrics often miss nuances in quality or tone. Human-in-the-loop evaluation provides deeper insight into model behavior and is essential for maintaining high-quality outputs. As you might imagine, evaluating LLMs is a lot harder than evaluating traditional models. Standard ML metrics work well for classification tasks, but fail to capture qualities like coherence, helpfulness,
>
> **[3:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=191)** or factual correctness in LLM outputs. LLM performance often requires more nuanced evaluation methods, tailored to open-ended or generative tasks. LLMs are often subjectively evaluated. It involves criteria such as tone, relevance, or clarity, which vary by context and user intent. Scenario-based evaluations simulate real-world interactions to better gauge how the model performs in practical applications. Automated scoring can miss subtle flaws or misalignments, so it's extremely important to incorporate human feedback for monitoring and improving deployed models. Human-in-the-loop systems help ensure ongoing quality, safety, and alignment with user expectations. And finally, let's talk about [[Data Management]] and privacy. Now, LLMs are very large and powerful models. Because of their scale, LLMs may inadvertently reproduce sensitive or copyrighted content seen during training. This creates legal and ethical risks, especially in regulated or commercial applications. To ensure that training data is used responsibly, the data must be vetted for quality, compliance, and appropriateness. Versioning and documentation help maintain traceability and [[Accountability]] in model development. This means training data needs to be filtered, curated, and versioned. LLMOps frameworks support tracking where data came from, verifying user content, and apply anonymization techniques.
>
> **[4:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=287)** These capabilities are important for ensuring compliance with privacy regulations and ethical AI standards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (5), [[Reinforcement Learning]] (3), [[Privacy]] (3), [[Data Management]] (1), [[Accountability]] (1)
> **Env Vars:** llm (5), rlhf (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [presenter] (1)

#### [LLM model deployment and operations](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=1)** - [Instructor] We've discussed LLM model development and evaluation. Let's move on and discuss LLM deployment and operations. This of course includes model deployment after training and evaluation. LLMs can be deployed as APIs, serverless endpoints, or on device, but serving large models introduces major constraints in latency, cost, and scale, driving the use of optimization tools. Once you deploy the model, you have to actively monitor the model. This involves tracking prompt behavior, toxic output, and hallucinations alongside traditional metrics like latency and resource usage. This requires custom alerts for misuse, bias or safety violations. You're likely to be improving your model periodically, which means you'll need to deploy multiple versions. LLM versioning includes tracking not just model weights, but also prompts, adapters, and [[Fine Tuning]] configurations, which means you need registries that manage base models and all modifications that you make along with the relevant [[Metadata]]. And then of course, there are the cost and infrastructure considerations. LLM ops must address the high cost of LLM training and fine tuning through cost monitoring, auto-scaling, and resource scheduling. Infrastructure considerations are important enough that they drive decisions between open source and proprietary models. Let's discuss model deployment in more detail first. Now, LLMs may be deployed as APIs, serverless endpoints, or on device depending on your use case.
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=95)** Your deployment options vary based on environments. Cloud APIs suit [[Scalable Web Applications]]. Serverless endpoints work well for event driven tasks and on device model serve low latency or [[Privacy]] sensitive applications. Choose the right deployment strategy to balance performance, accessibility, and [[User Experience (UX)|user experience]]. It's no secret that LLMs requires significant memory and compute resources making inference costly and potentially slow at scale. You need to ensure that your deployments are optimized for throughput and that you're constantly monitoring response time and production settings. This often requires the use of specialized tools. Frameworks like vLLM and DeepSpeed enable faster inference, efficient memory use, and higher throughput by leveraging techniques like model parallelism and kernel fusion. These tools help make large scale deployment more practical and cost effective. Monitoring LLMs is more important and more difficult than monitoring regular models. LLMs may not stay on the straight and narrow. They are sensitive to prompt variations and may produce unexpected, harmful or false responses when inputs differ from training distribution. Monitoring must track prompt inputs, detect hallucinations, and flag toxic or unsafe outputs. Because LLMs are computationally intensive, [[Real-Time]] monitoring of GPU or CPU usage, memory and latency is essential to ensure performance and cost efficiency.
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=188)** Unexpected slowdowns or spikes can degrade user experience or lead to infrastructure issues. LLMs may be misused to generate inappropriate content or exhibit bias under certain prompts. Alerting and logging systems should capture such incidents to enable timely response, auditing and model or policy updates. Traditional ML models need versioning and user registry, so do LLMs but LLM registries are much more complex. LLM applications depend not just on model waves, but also on prompt templates, fine tuning layers or adapters, each of which must be versioned. Tracking these elements ensures reproducibility and safe rollbacks when behavior changes. Registries should capture which foundational model was used, maybe [[LLaMA]] 2 or minstrel, and log every transformation to that model. Whether it's prompt tuning adapters or instruction fine tuning, this allows teams to trace lineage and maintain control over production models. A well-managed registry stores critical metadata for each version, training data source, tuning configuration, evaluation results and known risks or limitations. And finally, let's talk about cost and infrastructure management. More relevant and important in case of LLMs as compared with traditional machine learning. Training and serving LLMs can quickly become expensive, especially at scale. LLM ops frameworks must include cost tracking tools to monitor compute usage,
>
> **[4:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=280)** and optimize spend across environments. Make sure you configure your infrastructure using auto-scaling and intelligent resource scheduling. Auto-scaling ensures that resources dynamically adjust to workload demands, preventing over provisioning or under utilization. Advanced scheduling strategies help prioritize high priority jobs and make better use of GPUs or TPUs. Remember, there is a trade off between control and convenience. Choose your infrastructure accordingly. Open source LLMs offer flexibility and lower long-term costs, but requires significant infrastructure management. Hosted bottles. Let's say openly hour anthropic reduce operational burden, but may incur higher usage fees, and you may end up locked in to a particular provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (4), [[Metadata]] (2), [[User Experience (UX)|User experience]] (2), [[Scalable Web Applications]] (1), [[Privacy]] (1)
> **Env Vars:** llm (8), gpu (1), cpu (1)
> **CLI Commands:** make (4)
> **Prerequisites:** you'll need (1), configure (1)
> **Code Identifiers:** vllm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Benefits, best practices, and considerations for LLMOps](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=1)** - [Instructor] In this movie, we'll talk about benefits, best practices, and things to watch out for when you are using LLMOps. LLMOps provides structured workflows and tools to streamline the entire lifecycle of LLM powered applications, from experimentation and [[Fine Tuning]] to deployment and monitoring. This results in faster iteration cycles and a quicker time to market for your innovative [[AI Solutions]], leveraging [[Large Language Models (LLM)|large language models]]. LLMOps includes robust monitoring, evaluation, and feedback mechanisms, including human in the loop processes. Thus, it ensures that deployed LLM applications are reliable, generate safe and ethical outputs, and remain aligned with intended use cases and user expectations over time. LLMs by nature are computationally intensive. LLMOps practices incorporate a host of cost monitoring, infrastructure management and optimization techniques, like efficient serving frameworks and resource scheduling. And this helps them manage the significant computational resources required for training, fine tuning and deploying these models effectively. LLMOps establishes standardized processes, shared tools, and clear responsibilities across teams involved in developing and maintaining LLM applications. This fosters better collaboration between data scientists, ML engineers, and operations teams, while also providing the necessary governance reproducibility and auditability for complex LLM projects. Let's talk about some of the best practices
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=95)** that you have to keep in mind while implementing LLMOps. Make sure that your continuously tracking model performance, resource utilization, and system behavior in production. For LLMs, specifically monitor for issues like hallucinations, bias, prompt injection attempts, and unexpected outputs. Implement comprehensive logging for debugging and auditing. For training and fine tuning, ensure your data sets are clean, relevant, representative, and properly versioned. For LLMs, pay extra attention to [[Data Privacy]], potential biases and copyright considerations, and implement clear [[Data Lineage]] tracking. Make sure you secure your AI systems and the data they handle. This includes authentication, authorization, encryption in transit, and address and protection against adversarial attacks like prompt injection for LLMs. Be aggressive in your [[Version Control]] and track all of the artifacts involved. Maintain version control for your code using say [[Git]]. For your models, using ML Flow or some similar framework. For your data sets, using data version control, DVC, or another similar framework, and even for your prompts and fine tuning configurations for LLMs. This is crucial for reproducibility and rollback capabilities. Here are some pointers to using your LLMs well and wisely. LLMs tend to be black boxes, but don't treat them as such. Make an effort to understand the behavior of your LLMs.
>
> **[3:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=192)** If you neglect interpretability and explainability, this can make it difficult to diagnose issues, build trust and ensure responsible use. Do not have manual components in your infrastructure management. Relying on manual processes for infrastructure provisioning and model deployment is error prone, slow, and hinder [[Scalability]]. Automate everything. Use [[Infrastructure as code (IaC)|infrastructure as code]] and CICD pipelines. Keep ethical considerations. Top of mind. Consider fairness, [[Privacy]], and potential misuse because if you don't, this can lead to negative societal impacts and reputational damage. LLMs are not one size fits all. Carefully evaluate whether an LLM is the most appropriate tool for the task. Simpler, more traditional models might be more efficient and effective for certain problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (4), [[Version Control]] (3), [[AI Solutions]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Data Privacy]] (1)
> **Env Vars:** llm (5), dvc (1), cicd (1)
> **CLI Commands:** make (4), git (1)
> **Warnings:** watch out (1), keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Data Orchestration Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [Components of a data orchestration pipeline](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=1)** - [Instructor] And finally, we come to the last topic in this course, "Data Orchestration Pipelines for AI Systems." High quality data produces high quality AI systems. So it's important that your data is sourced and orchestrated correctly so that your systems have access to this data. Data orchestration pipelines are automated workflows that manage the movement and transformation of data across various systems. They define the sequence of tasks, dependencies, and triggers needed to extract, transform, and load data, ensuring it's processed correctly, and delivered to the right place at the right time for analysis or other users. Modern data systems involve dozens of tools and moving parts that must all be coordinated together. Data is sourced from multiple sources and should get to a single unified destination. Manual coordination is brittle, time-consuming, and hard to scale or debug. And this is why data orchestration is so important. This enables reliable, repeatable, and automated execution of complex data workflows. Here are the stages in any data orchestration pipeline. The extraction stage involves collecting data from various sources and systems. These sources can be diverse and include [[Databases]], APIs, [[Cloud Storage]], [[SaaS]] applications, and more. Once data is extracted, this stage focuses on cleaning, shaping, and preparing data for its intended use. This can involve tasks like [[Data Cleaning]], data enrichment, and [[Data Modeling]]. In the loading stage, the transformed data is written
>
> **[1:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=97)** to the target destination. This could be a data warehouse, data lake, analytical database, or even a specific application. Every pipeline is configured either with schedules or triggers. This component defines when and how the pipeline runs. Pipelines can be scheduled to run at specific intervals, such as daily or hourly, or triggered by specific events, arrival of a new file, or the completion of another process, or they can run on demand. And finally, you have monitoring and alerting of a pipeline. Now, you can consider this a separate component, independent of the pipeline. Monitoring is a crucial aspect of a healthy data orchestration pipeline. So I've included it in here. This is where you track the pipeline's execution, identify errors or failures, and provide alerts when issues occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Cloud Storage]] (1), [[SaaS]] (1), [[Data Cleaning]] (1), [[Data Modeling]] (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Detailed overview of pipeline components](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=1)** - [Instructor] Let's consider each of these in turn, starting with extraction. Extraction is about connecting to diverse sources, to get data into your system. The pipeline must establish connections to various data origins, handling different protocols, authentication methods, and data formats, [[SQL]] sources, no SQL sources, [[Representational State Transfer (REST)|REST]] APIs, CSV, [[JSON]] files, everything. Next, we have the [[Data Ingestion]] strategies. This involves defining how data is pulled, whether it's a full refresh that is retrieving all the data every time, or incremental refresh, fetching only newer, updated data to optimize efficiency. The extraction process needs to be designed to handle the expected volume of data and the speed at which it's generated, potentially using techniques like batching or real time streaming ingestion. Robust extraction mechanisms include error handling for connection issues or data retrieval failures, often with automated retry mechanisms. Once the data is extracted and ingested, we move on to the transformation stage. This involves [[Data Cleaning]] and quality checks, identifying, addressing [[Data Quality]] issues like missing values, inconsistencies, duplicates, and outliers through various cleaning techniques and validation rules. [[Data Integration]] and enrichment involves combining data from multiple sources based on defined keys and enriching it with additional relevant information to provide a more comprehensive and complete view of your data. You would then model and shape your data, restructure the data into a format suitable
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=95)** for the target system or for your analytical needs. This could involve aggregations, filtering, joining, splitting, and maybe creating new derived fields. It's important that your transformations are efficient and scalable, especially when dealing with large data sets, potentially leveraging parallel processing or distributed computing frameworks. The next stage would be loading your data. This involves establishing connections to the designated data destinations, handling different database types, APIs, or file storage systems. You'll also determine the appropriate loading methods such as full refresh, incremental updates, or upsets where you update existing records and insert new ones. All of these decisions will be based on the target system that you're working with and your data's requirements. You also need to ensure that your data is accurate and consistent during the loading process. This might involve transaction management to guarantee automaticity and prevent data corruption. There are other decisions about speed and efficiency that need to be made here. Consider factors like bad sizes, indexing, and network bandwidth when you are loading your data. I'll take just a moment to talk about ETL versus ELT pipelines here. Just a note that it's not necessary that you go from extracting your data, then transforming your data to loading your data. That's typically what an ETL pipeline does. However, you can use the ELT process as well where you extract the data first, then load the data into the target system and perform transformations in the target system.
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=189)** The stages remain the same, only the order is different. ETL is less flexible and a more traditional methodology. ELT is a more modern methodology used with modern data warehouses with support large scale transformations of data. Let's move on to talk about scheduling and triggering pipelines. Now, pipelines can run on specified execution schedules. You can set up recurrence schedules, whether daily at a specific time, hourly or weekly based on your business needs and data availability. Pipelines can also be triggered based on events. You can configure the pipeline to run automatically in response to specific events such as the arrival of new data in a file in a designated location or the completion of an upstream process. You need to specify dependencies between different tasks within the pipeline or between multiple pipelines to ensure that they run in the correct order and make sure you provide mechanisms to manually initiate pipeline runs and control their execution for testing or ad hoc [[Data Processing]] needs. We've discussed that monitoring and alerting configured on your pipeline is an integral part of building a pipeline. Make sure you provide real time monitoring and logging. Provide visibility into the pipeline's execution status, progress of individual tasks and detailed logs for troubleshooting. Monitor key performance indicators like pipeline duration, resource utilization, and data processing rates to identify potential bottlenecks or performance degradation.
>
> **[4:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=284)** Make sure you configure alerts to notify relevant personnel when errors occur, when data quality thresholds are breached or performance issues are detected. And finally, implement mechanisms to proactively check the health of pipeline components and automatically handle common errors or trigger recovery processes. Here are some metrics you might want to track in any pipeline. The pipeline success rate measures the percentage of successful pipeline runs compared with the total number of runs over a specified period. If this is low, your pipeline may not be reliable. The pipeline duration is the execution time of each pipeline run. This is what you'll use to identify performance bottleneck and ensure that data is processed and delivered within the expected service level agreements. The data freshness or latency metric measures the time elapse between the generation of source data and its availability in the target system after the pipeline has run. This is a very important metric for time sensitive applications, and you should have resource utilization metrics for CPU, memory, and other resources to monitor the computational resources consumed by the pipeline infrastructure. This is what will help you identify inefficiencies, scaling needs, and cost optimization opportunities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Data Quality]] (2), [[Data Processing]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1)
> **Env Vars:** etl (3), elt (3), sql (2), rest (1), csv (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** such as (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Data orchestration pipeline best practices and dos and don'ts](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=1)** - [Instructor] In this movie, we'll discuss some of the challenges that you'll encounter with data orchestration pipelines and some dos and don'ts for working with pipelines. Handling failures in distributed environments is complex and error prone. LLM pipelines often span multiple services, GPUs and nodes, making it hard to detect, diagnose, and recover from failures. You need a robust fault tolerance and logging. Otherwise, issues can silently corrupt outputs or halt systems. As LLM applications scale, they accumulate numerous scripts, prompts, data paths, and services leading to tangle dependencies. This sprawl increases maintenance overhead and makes debugging or refactoring riskier over time. Maintaining the right balance is also challenging. Teams want to experiment with new prompts, [[Fine Tuning]] methods or tools, but if you give too much flexibility, that can lead to inconsistent practices and fragile systems. Your orchestration pipeline needs to strike a balance, enabling innovation while enforcing standards for reliability and reproducibility. Pipeline sprawl refers to a situation where an organization has an excessive, unmanaged, and often poorly documented number of [[Data Pipelines]]. These pipelines might be redundant, serve overlapping purposes, have unclear ownership, lack standardization, and thus become increasingly difficult to maintain, monitor, and govern effectively. Here are some best practices for working with pipelines. Break down complex pipelines into smaller, independent,
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=95)** and reusable components or tasks. This makes your pipeline easier to maintain, makes debugging easier, and allows for the reuse of common [[Data Transformation]] logic across multiple pipelines. Design pipelines with comprehensive error handling mechanisms, including retries, logging of errors and dead letter queues for failed data. Integrate monitoring with alerts for failures, track performance degradation and [[Data Quality]] issues. Make use of [[Infrastructure as code (IaC)|infrastructure as code]] to provision your pipelines, and treat your pipeline definitions, configurations, and underlying infrastructure as code and manage them using [[Version Control]] systems like [[Git]]. Make sure that your pipeline includes data quality checks, and validation steps throughout the pipeline, especially during the transformation stage and the loading stage. This will help identify data inconsistencies, errors, and anomalies early in the process. And some things to watch out for when you are building pipelines. Make sure your pipelines are not extremely long and complex with too many tightly coupled steps. These are difficult to understand, debug, maintain, and scale. Break them down into smaller, more manageable and reusable components. Make sure you are not embedding sensitive information like database credentials, API keys, or environment-specific configurations directly within the pipeline code. Use environment variables, configuration files, or secure secret management tools to manage these externally. Your pipelines will become incredibly difficult
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=189)** to understand if you don't document them. Document their purpose, logic, dependencies, and data flow. Make sure you track [[Data Lineage]], where the data comes from and how it's transformed all in your documentation. Make sure that you incorporate error handling mechanisms and proactive monitoring in your pipelines. Otherwise, you'll be blind to failures and data quality issues. This will lead to incorrect data in downstream systems and lack of trust in your data infrastructure. Here are some popular systems for data orchestration pipelines. [[Apache Airflow]] is an open-source platform for programmatically authoring, scheduling, and monitoring workflows. It uses directed acyclic graphs to represent pipelines and offers a wide range of integrations. Prefect is another open-source orchestration framework known for its dynamic workflows and strong focus on developer experience. It allows defining workflows in [[Python (Programming Language)|Python]] and offers both a cloud and self-hosted option. Dagster is an open-source tool that focuses on data-aware orchestration, allowing you to define pipelines in terms of the data assets they produce. It provides strong observability and testing capabilities. Every cloud platform offers its own data orchestration pipeline. AWS Step Functions is a serverless orchestration service from [[Amazon Web Services (AWS)|Amazon Web Services]] that lets you coordinate multiple AWS services into serverless workflows using state machines. Data orchestration pipelines in [[Microsoft Azure|Azure]] include Azure Data Factory
>
> **[4:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=283)** within which we have data flows and data pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (3), [[Data Pipelines]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[Microsoft Azure|Azure]] (2), [[Fine Tuning]] (1)
> **CLI Commands:** make (6), aws (2), git (1), apache (1), python (1)
> **Env Vars:** llm (2), aws (2), api (1)
> **Definitions:** is an  (2), refers to (1), is a  (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary and further study](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=1)** - [Instructor] And this brings us to the very end of this course on [[MLOps]] and data pipeline orchestration for AI systems. Let's take a quick look at what we covered here in this course. We first understood [[Agile Development|Agile]] development and how [[DevOps]] works and introduced MLOps. We saw that MLOps was significantly more complicated than DevOps, because we have to deal with both code and data. We also got some hands-on experience working with models in [[MLflow]], an integral part of MLOps ecosystems. We then moved on to discussing MLOps for LLMs. LLMs are far more complex models with many more artifacts that you need to track and version. We learned some of the nuances of deployment and operations when we are working with LLMs. And then finally, we rounded out this course by talking about data orchestration pipelines. If you're interested in studying further, here are some other courses on AI that you might find interesting. [[Semantic Search]] and [[Information Retrieval]] in AI Systems and AI and [[Data Engineering]] with [[Knowledge Graphs]] and [[Large Language Models (LLM)|Large Language Models]]. Well, that's it from me here today. I hope you enjoyed this course. Thank you for listening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (5), [[DevOps]] (2), [[Agile Development|Agile]] (1), [[MLflow]] (1), [[Semantic Search]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- MLOps
- Artificial Intelligence (AI)
- Data Pipelines
- Orchestration

## Path Context

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[Data Preparation, Feature Engineering, and Augmentation for AI Models]] | **6 of 10** | [[MLOps Essentials- Model Development and Integration]] →

### In [[Working with Data- Engineering, Integration, and MLOps for AI]]
← [[Semantic Search and Information Retrieval using GenAI]] | **5 of 5**

## Appears In

- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Working with Data- Engineering, Integration, and MLOps for AI]]

## Related Courses

_Courses sharing skills:_

- [[Learning Vertex AI- MLOps with Google Cloud]] — Artificial Intelligence (AI), MLOps
- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Monitoring Model Drift and Bias]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Deployment and Monitoring]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Development and Integration]] — Artificial Intelligence (AI), MLOps

---

[↑ Back to top](#)