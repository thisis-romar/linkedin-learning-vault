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
created: 2026-04-21
---

![MLOps and Data Pipeline Orchestration for AI Systems](https://media.licdn.com/dms/image/v2/D4E0DAQFD5fYFdNH9Ug/learning-public-crop_675_1200/B4EZbqSXHjGkAY-/0/1747687404255?e=2147483647&amp;v=beta&amp;t=hbl-sUxDJgry-wXj7Pvl1DAZmttLLP28qxi6g_DutVM)

# MLOps and Data Pipeline Orchestration for AI Systems

> This course covers the automation and management of machine learning workflows, from data ingestion to model deployment. Join instructor Janani Ravi as she teaches you how to orchestrate and optimize data pipelines, ensuring efficient, scalable, and reliable operation of AI systems in production environments. This course is an ideal fit for anyone working with AI, data infrastructure, and machine 

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems) | 1h 19m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- MLOps
- Artificial Intelligence (AI)
- Data Pipelines
- Orchestration

## Table of Contents

### Introduction

#### Importance of MLOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=1)** - [Narrator] Hi, and welcome to this course on MLOps and Data Pipeline Orchestration for AI Systems.
>
> **[0:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=7)** First, let's talk about the importance of MLOps, or ML operations, and where LLMOps fit in.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=14)** MLOps or machine learning operations help operationalize and scale ML workflows.
>
> **[0:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=20)** They enable consistent, repeatable, and scalable deployment of machine learning models and AI systems across environments, whether it's dev, test, or prod.
>
> **[0:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=30)** It provides mechanisms for versioning, validation, testing, and monitoring models in production to detect drift and performance degradation.
>
> **[0:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=40)** This ensures model quality and reliability.
>
> **[0:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=43)** MLOps integrates data science, engineering, and DevOps teams through pipelines that automate the training, deployment, and update of models.
>
> **[0:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=54)** This improves collaboration between your teams and the automation of your systems.
>
> **[0:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=59)** And finally, MLOps ensures that all aspects of the machine learning lifecycle, whether it's data, code, or models, are logged and auditable, and this supports regulatory and business requirements.
>
> **[1:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=72)** Large language models, or LLMs, are usually generative AI models that are trained on a huge corpus of data and have billions of parameters.
>
> **[1:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=83)** LLMOps helps orchestrate fine tuning, prompt engineering, and model deployment of LLMs at scale.
>
> **[1:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=90)** These tend to be far more complex than traditional ML models.
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=95)** LLMOps is all about monitoring and optimization of resource usage such as GPUs, graphics processing units, or TPUs, tensor processing units.
>
> **[1:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=105)** They help monitor and control model size and inference time to keep LLM applications cost-effective and responsive.
>
> **[1:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=114)** LLMOps supports auditing, moderation, and prompt injection defenses to reduce the risks of harmful or biased outputs in production.
>
> **[2:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=123)** And finally, it facilitates automated testing, human in the loop feedback and performance tracking to iteratively improve LLM responses over time.
>
> **[2:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/importance-of-mlops?u=76281980&t=133)** This is continuous evaluation and feedback.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **Env Vars:** llm (2)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980&t=1)** - [Instructor] Before we get going with the content of this course, let's take a look at some of the prerequisites that you need in order to get the full benefits of this course.
>
> **[0:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980&t=10)** You need to have a basic understanding of AI and machine learning pipelines.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980&t=14)** You should understand how the machine learning workflow functions, some basic knowledge of building machine learning models and training LLMs will definitely help because otherwise there'll be references here that you won't fully pass.
>
> **[0:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/prerequisites?u=76281980&t=27)** And then finally, in order to perform the hands-on component of this course, where we'll build and train a model using ML Flow for experiment tracking and logging well, that requires you to be comfortable in Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), pass (1), finally, (1)
> **CLI Commands:** python (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 1. The Need for MLOps

#### Agile development and DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=1)** - [Instructor] What exactly is MLOps or machine learning operations?
>
> **[0:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=4)** Now, this requires an understanding of what Agile development is all about.
>
> **[0:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=9)** Then DevOps or development operations, and then we'll finally head on to MLOps.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=14)** Back in the day, software development used the Waterfall methodology, which was a slow process.
>
> **[0:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=20)** It could take three to four years for software to be deployed, starting from the design phase to final release.
>
> **[0:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=27)** Agile changed all of that.
>
> **[0:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=29)** Agile is an iterative, flexible approach to software development that prioritizes rapid delivery and continuous feedback.
>
> **[0:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=37)** Instead of lengthy planning, Agile teams quickly deliver working software, adaptive user input and refine solutions.
>
> **[0:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=44)** Agile development helps teams quickly adapt models and processes to handle constantly changing data and user needs.
>
> **[0:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=53)** It uses short iterative development cycles to reduce wasted effort by quickly validating or discarding unsuccessful experiments.
>
> **[1:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=62)** Agile involves continuous feedback from real users.
>
> **[1:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=65)** This ensures that teams can respond immediately to performance issues or shifting business priorities.
>
> **[1:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=71)** There is a direct line from Agile development to DevOps or development operations.
>
> **[1:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=77)** DevOps refers to a set of practices, cultural philosophies, and tools that aim to integrate and automate the processes between software development that is Dev and IT operations referred to as Ops.
>
> **[1:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=91)** The whole idea behind DevOps is to enable faster and more reliable software releases, improved collaboration and increased organizational agility.
>
> **[1:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=102)** DevOps stems from the Agile methodology.
>
> **[1:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=105)** This includes teams working together across the entire product lifecycle from the very beginning.
>
> **[1:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=112)** So developers, testers, release engineers, the IT ops team all work together collaboratively and iteratively, which means, all of these teams are involved in the product development from the very start.
>
> **[2:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=125)** It's not just the dev and product teams that are focused on product building.
>
> **[2:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=129)** Now, DevOps is only possible when you use automated tools.
>
> **[2:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=135)** It's only with automation that you get a feedback loop where software improvements are incorporated and released faster.
>
> **[2:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=142)** If the entire release cycle had to be a manual process, it would be impossible to get fast feedback.
>
> **[2:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=149)** Here's what the DevOps lifecycle looks like.
>
> **[2:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=153)** First, we have the planning fees where you're figuring out what exactly the requirements are and what you need to build.
>
> **[2:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=159)** From planning to development, your requirements are turned into code.
>
> **[2:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=164)** Development is not a standalone phase.
>
> **[2:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=166)** As you develop new features and functionality in your application, your code is continuously integrated and tested in an automated manner.
>
> **[2:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=176)** Your tested code is automatically deployed.
>
> **[3:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=180)** That is the connection between integration and testing and deployment and operations.
>
> **[3:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=184)** Validated code is deployed into production rapidly and safely.
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=188)** Deployed applications are constantly monitored, and realtime data and user feedback inform future improvements of your application.
>
> **[3:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=200)** The feedback and learning is further incorporated into your planning fees.
>
> **[3:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=205)** The insights that you get from deploying your software leads to adjustments starting the cycle anew.
>
> **[3:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=212)** Now, if you'd like to adopt this DevOps framework to machine learning models, things change a little bit.
>
> **[3:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=219)** Machine learning introduces additional complexity such as evolving data, model degradation, experimentation cycles, and retraining requirements.
>
> **[3:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=228)** All of this is unique to machine learning.
>
> **[3:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=230)** Traditional DevOps practices do not adequately handle data-driven tasks like continuous monitoring for performance drift of your models.
>
> **[4:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=240)** Deployed models degrade over time.
>
> **[4:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=242)** They have to be constantly retrained on new data.
>
> **[4:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=245)** And this is performance drift.
>
> **[4:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=247)** This is something MLOps needs to handle.
>
> **[4:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=250)** Roles that are specific to machine learning, such as data scientists, machine learning engineers and analysts, they require specialized processes beyond traditional software delivery.
>
> **[4:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=261)** They have to manage code as well as data.
>
> **[4:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=265)** MLOps has the same cultural philosophy as DevOps.
>
> **[4:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=268)** It includes everything within DevOps, plus more, the ability to version and work with data.
>
> **[4:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/agile-development-and-devops?u=76281980&t=276)** That additional complexity needs to be handled.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1), refers to (1)
> **Analogies:** such as (2)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Introducing MLOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=1)** - [Instructor] So what exactly is MLOps, or machine learning operations?
>
> **[0:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=4)** This is a set of practices that aims to automate and streamline the entire lifecycle of machine learning models, from development and training, to deployment, monitoring, and management in production.
>
> **[0:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=17)** It combines principles from DevOps with the specific requirements of machine learning to ensure faster iteration, improved reliability, and better governance of AI systems.
>
> **[0:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=27)** Let's talk about why we need MLOps. Why does it matter?
>
> **[0:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=31)** Now, machine learning models, which has been found, perform well during prototyping when you're coding them up in notebooks, but these same models tend to struggle when deployed into real world production environments.
>
> **[0:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=45)** Now, this could be because of a variety of reasons.
>
> **[0:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=48)** There could be differences in data conditions, infrastructure, and user interactions, all of these could cause models to fail unexpectedly.
>
> **[0:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=57)** And this is exactly what MLOps tries to address.
>
> **[1:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=60)** MLOps addresses these issues by bringing reliability, consistency, and scalability to your machine learning deployments.
>
> **[1:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=69)** Machine learning projects tend to be far messier than software engineering projects.
>
> **[1:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=74)** With software engineering, all you have to do is deal with code, but with machine learning, you have to deal with changes to data as well.
>
> **[1:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=81)** Real world data frequently changes, and this causes models trained on static data to quickly degrade in performance.
>
> **[1:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=89)** If you don't set up a consistent environment or your model training, you'll find that you'll run into reproducibility issues.
>
> **[1:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=96)** This is where you have difficulty in replicating results, and this can arise because of variations in data, code, or the environment that you're training your model in.
>
> **[1:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=106)** Because machine learning deals with both code and data, it's quite possible that you have manual processes interweaved between automated processes.
>
> **[1:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=116)** Manual processes and fragmented workflows can slow down model deployment into production.
>
> **[2:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=121)** With machine learning models, you likely have many more small teams.
>
> **[2:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=127)** You may have teams that are responsible for model development, and you may have teams that are responsible for data cleaning and processing.
>
> **[2:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=135)** Now, if you have unclear responsibilities between teams, that can lead to confusion, slow responses, and neglected maintenance.
>
> **[2:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=143)** Let's talk about how MLOps is different from machine learning.
>
> **[2:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=149)** Machine learning has a reasonably well-defined workflow, something that you are familiar with.
>
> **[2:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=154)** You first prepare your data, then you train your model with the data, you evaluate the model, and then deploy that model to production.
>
> **[2:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=162)** However, models that are static that are not constantly retrained, degrade in performance.
>
> **[2:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=168)** In fact, models degrade as soon as they're deployed.
>
> **[2:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=171)** This drift is what MLOps tries to prevent.
>
> **[2:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=175)** With an MLOps-enabled workflow, you are constantly monitoring a deployed model to see how it performs.
>
> **[3:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlops?u=76281980&t=182)** In order to keep your model performance from degrading, you automatedly go back to the data preparation stage, you ingest new data as it arrives, and then you cycle through the model training, evaluation, and deployment process, all using automated pipelines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), static (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The MLOps lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=1)** - [Instructor] Here is how you can think of the MLOps lifecycle.
>
> **[0:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=4)** Please note that this entire lifecycle has to be executed in an automated manner for quick feedback.
>
> **[0:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=11)** There should be no manual processes involved in this workflow.
>
> **[0:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=16)** The first thing to note here is that your machine learning model is impacted by two changes, code changes, as well as data changes.
>
> **[0:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=26)** Let's discuss code changes first.
>
> **[0:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=28)** If you modify the model architecture, change the feature engineering logic or the training pipeline, all of this can alter how the model learns from data.
>
> **[0:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=38)** For example, if you change from a logistic regression model to a neural network, that may lead to different predictions and performance.
>
> **[0:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=45)** Models are also affected by data changes.
>
> **[0:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=48)** If you have new data or if you have missing or differently distributed data, all of this can shift the model's understanding and affect its accuracy.
>
> **[0:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=56)** For example, a recommendation model trained on last year's user behavior may perform poorly if user preferences have changed this year.
>
> **[1:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=64)** Now, if your data or code has changed, that will lead to model training.
>
> **[1:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=69)** The model is then trained on the latest data using the defined algorithms and parameters.
>
> **[1:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=74)** Once you train the model, you'd like to evaluate the model to see how it performs on the test data.
>
> **[1:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=80)** This is to ensure that it meets performance criteria, such as, say, accuracy, precision, and recall for a classification model.
>
> **[1:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=87)** Once you're satisfied with the model's performance, that's when you deploy the model.
>
> **[1:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=92)** The model is pushed to production, where it can serve real time or batch predictions.
>
> **[1:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=97)** Now, in your MLOps workflow, you'll constantly monitor the deployed model for performance drift, data changes, and any operational issues.
>
> **[1:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=107)** If you find that your model performance has dropped due to, say, data drift or new patterns, it is retrained with updated data and possibly new code, and this loops back to the start of the cycle.
>
> **[1:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=119)** The whole idea of MLOps is that you automate this workflow and run it in a consistent environment.
>
> **[2:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=126)** This lifecycle helps you maintain reliable, up to date, and high-performing machine learning systems in production environments.
>
> **[2:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=134)** There are three important components in MLOps.
>
> **[2:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=137)** The first is continuous integration.
>
> **[2:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=140)** This is when you automate the pipeline to integrate and test new code changes and data changes in a shared repository.
>
> **[2:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=149)** This is what allows you to detect issues early and maintain code and data quality.
>
> **[2:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=154)** Then, we have continuous delivery.
>
> **[2:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=157)** This ensures that validated code and models are always in a deployable state and sometimes are automatedly deployed to production, if that's how you set up your automated pipeline.
>
> **[2:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=168)** This enables frequent and reliable releases to staging or production.
>
> **[2:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=173)** Continuous integration and continuous delivery, these are components also present in DevOps.
>
> **[2:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=179)** But with MLOps, we have one more, and that is CT, or continuous training.
>
> **[3:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=184)** This is where you automate the retraining of ML models based on new data or performance triggers, keeping models up to date and relevant over time.
>
> **[3:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=194)** Let's look at how continuous integration, continuous delivery, and continuous training fit into the MLOps lifecycle.
>
> **[3:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=201)** You can see that I have mapped continuous integration, continuous delivery, and continuous training here in the MLOps lifecycle workflow that we saw earlier.
>
> **[3:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=212)** Continuous integration refers to the process of automatically testing and integrating code changes, that is, model logic and feature engineering, and new data ingestion workflows into the main development pipeline.
>
> **[3:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=224)** This ensures that every change, whether in code or data, is validated quickly and doesn't break the training or evaluation pipeline.
>
> **[3:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=231)** Continuous delivery automates the steps from model training to model deployment.
>
> **[3:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=236)** Once a model passes evaluation, it can be automatically packaged and deployed into production without manual intervention.
>
> **[4:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=244)** Continuous training enables the system to monitor deployed models and automatically trigger retraining when needed, such as when data drifts or performance degrades.
>
> **[4:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=253)** This ensures the model stays up to date and adapts to real-world changes over time.
>
> **[4:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=259)** Together CI, CD, and CT make the machine learning lifecycle scalable, repeatable, and responsive to change.
>
> **[4:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=268)** So, what are the benefits of MLOps?
>
> **[4:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=271)** MLOps streamlines and automates the process of moving machine learning models from experimentation to production, significantly reducing the time it takes to deploy valuable AI applications.
>
> **[4:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=283)** Through continuous integration, continuous delivery, that is, CI/CD practices, and robust monitoring, MLOps helps ensure that deployed models are stable, perform as expected, and can be quickly updated or rolled back if issues arise.
>
> **[4:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=298)** MLOps fosters better collaboration between data scientists, machine learning engineers, and operations teams by establishing standardized workflows, shared tools, and clear responsibilities.
>
> **[5:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=309)** This leads to better productivity and reduced friction.
>
> **[5:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/the-mlops-lifecycle?u=76281980&t=313)** MLOps practices like model versioning, lineage tracking, and standardized deployment processes improve the governance and auditability of your ML systems, making it easier to understand how models are built and ensuring compliance and reproducible results.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (2), find (1), make (1)
> **Analogies:** for example (2), such as (2)
> **Code Keywords:** let (2)
> **Definitions:** refers to (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Tracking artifacts in MLOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=1)** - [Instructor] In software development and DevOps, there's just one artifact that you have to track, and that is the code that you deploy.
>
> **[0:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=6)** In MLOps, on the other hand, you have to track multiple artifacts.
>
> **[0:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=11)** Let's see what they are.
>
> **[0:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=13)** The first thing is of course code.
>
> **[0:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=15)** This involves versioning and managing the code base used for developing, training, and deploying machine learning models, ensuring reproducibility and collaboration through tools like Git.
>
> **[0:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=26)** Another artifact is the model itself.
>
> **[0:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=29)** This is where you focus on managing the lifecycle of machine learning models, including versioning, storing different iterations, tracking performance metrics, and managing the models deployment and transitions to production.
>
> **[0:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=42)** And then you have to track data.
>
> **[0:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=44)** This encompasses versioning and monitoring the data sets used for training and evaluating machine learning models, ensuring data lineage, reproducibility of experiments, and detection of data drift or quality issues.
>
> **[0:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=57)** Let's talk about why you actually need to track all of this.
>
> **[1:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=61)** If you think about ML workflows, they tend to be highly iterative and non-deterministic, and they have many interdependent moving parts.
>
> **[1:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=70)** When you track code models and data, this ensures reproducibility, auditability, and collaboration across experiments and team members.
>
> **[1:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=80)** Without proper tracking, it becomes very difficult to explain how a model was trained or why it performs the way it does, and what data was used to train the model.
>
> **[1:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=90)** Without tracking, models are more like black boxes.
>
> **[1:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=94)** Let's talk about tracking code first.
>
> **[1:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=96)** Source code of your model defines the logic used for training, evaluation, and pre-processing your data.
>
> **[1:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=103)** Versioning this code ensures the reproducibility of your models.
>
> **[1:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=108)** When you write code to train your models, you also depend on libraries or environments.
>
> **[1:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=113)** Any changes in these libraries or runtime environments can affect your results.
>
> **[1:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=118)** Tracking the full environment is critical.
>
> **[2:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=122)** So it's not just about code, it's about dependencies and libraries.
>
> **[2:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=127)** There are several tools that you can use for this.
>
> **[2:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=129)** There are tools like Git, Docker, and Conda environments that are used to lock down code and the dependencies used with your code.
>
> **[2:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=138)** Another component that we have to track in ML models is data.
>
> **[2:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=142)** Input data often changes over time.
>
> **[2:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=145)** Versioning ensures the same data set can be reused or audited later on.
>
> **[2:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=151)** Tracking data includes schema, data splits, pre-processing steps, and source identifiers, such as raw files or database snapshots.
>
> **[2:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=160)** Data tracking also includes tracking data lineage.
>
> **[2:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=163)** Lineage tracking connects data sets to specific model versions, allowing you to trace what data your model used for compliance purposes.
>
> **[2:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=172)** The third artifact that your MLOps pipeline needs to track is the trained model.
>
> **[2:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=178)** Trained models should be versioned as artifacts along with metadata like the parameters of the model, the metrics of the model, and the training timestamps.
>
> **[3:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=187)** Model tracking includes both the serialized model that is the pickle files, or say the ONNX files, and associated configurations or hyperparameters.
>
> **[3:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=197)** Along with models, it's common practice to store evaluation results because this is what helps teams compare and select the best model for deployment.
>
> **[3:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=207)** Every training run of your model is treated as an experiment, and experiment tracks both the inputs you feed into the model, the model itself, and any outputs that are recorded with the model.
>
> **[3:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=219)** Now, what exactly goes into an experiment?
>
> **[3:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=223)** Experiments contain inputs.
>
> **[3:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=226)** The inputs can be the data used to train the model, the code used to train the model, and the model parameters or hyperparameters that you've configured.
>
> **[3:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=234)** Outputs tracked in experiments include metrics from the model.
>
> **[3:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=239)** If it's a classification model, you might compute the accuracy, precision, and recall, and the output will be the trained model itself.
>
> **[4:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=248)** Teams can then analyze the impact of changes to the model and understand which factors contributed to performance improvements.
>
> **[4:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=256)** There are several tools available that help with experiment tracking.
>
> **[4:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=260)** Tools like MLflow, Weights and Biases, and DVC, which stands for Data Version Control, help automate experiment tracking and comparison.
>
> **[4:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=269)** In fact, we get hands-on with MLflow experiment tracking and logging later on in this course.
>
> **[4:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=275)** Let's take a look at the core components of a machine learning experiment, which are foundational to tracking and managing experiments in MLOps.
>
> **[4:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=284)** Let's look at how the different components fit together.
>
> **[4:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=288)** In MLOps, data versioning and lineage are crucial.
>
> **[4:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=291)** You need to track which training and test data sets were used in each experiment to ensure reproducibility and fairness over time.
>
> **[4:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=299)** Code includes your model definition, pre-processing logic, and training configurations.
>
> **[5:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=305)** MLOps encourages storing this in a version control system like Git and linking code versions to specific experiments for traceability.
>
> **[5:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=313)** The model artifact is the output of the experiment, a trained model.
>
> **[5:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=317)** In MLOps, model artifacts are logged and stored in a registry such as MLflow or Azure ML, so they can be evaluated, compared, and deployed safely.
>
> **[5:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=328)** Metrics are evaluation results.
>
> **[5:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=331)** Metrics such as accuracy, precision, or loss values must be logged alongside each experiment.
>
> **[5:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=337)** MLOps uses these metrics for model comparison, automated validation, and triggering deployment or retraining.
>
> **[5:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=344)** When you track artifacts related to the machine learning workflow, it's important that you track metadata and lineage.
>
> **[5:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=351)** Metadata connects data code and models into a lineage graph that shows how each artifact was created.
>
> **[5:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=358)** This is very useful for audit, debugging, and compliance, especially if you're working in a regulated organization.
>
> **[6:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=366)** Lineage tracking helps answer questions like which dataset and script produce this model.
>
> **[6:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=372)** Lineage tracking is an important part of MLOps.
>
> **[6:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=375)** This involves comprehensively documenting the origin and transformations of data, code, and models throughout the entire ML lifecycle.
>
> **[6:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/tracking-artifacts-in-mlops?u=76281980&t=384)** This provides a clear and auditable history, allowing teams to understand how artifacts were created, identify dependencies, and reproduce experiments, and trace back the root cause of issues or performance changes in deployed models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2)
> **CLI Commands:** git (3), docker (1)
> **Analogies:** such as (3)
> **Env Vars:** onnx (1), dvc (1)
> **Definitions:** stands for (1), is an  (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)


### 2. MLOps with MLflow

#### Introducing MLflow
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=1)** - [Instructor] In the hands-on demo that's coming up next, we're going to be working with MLflow.
>
> **[0:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=5)** MLflow plays a key role in MLOps by enabling experiment tracking, model versioning, and lifecycle management to ensure reproducibility, traceability, and seamless deployment of machine learning models.
>
> **[0:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=18)** MLflow is an open-source platform designed to manage the complete machine learning lifecycle.
>
> **[0:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=24)** MLflow provides tools for tracking experiments, packaging code into reproducible runs, managing and deploying models, and offering a central model registry for collaboration and governance.
>
> **[0:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=35)** Essentially, MLflow aims to address the challenges of reproducibility, deployment, and collaboration in the ML workflow.
>
> **[0:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=43)** Here are the basic components that make up the MLflow platform.
>
> **[0:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=47)** Now, there's a lot here on screen.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=49)** Let's break this down bit by bit.
>
> **[0:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=51)** MLflow Tracking logs experiments with parameters, metrics, and artifacts.
>
> **[0:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=57)** You can use experiment tracking to log and compare code versions, input data, parameters, metrics, and output models from each training run of your code and data.
>
> **[1:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=69)** MLflow Projects packages machine learning code in a standardized format using ML projects files so that it can be reproduced and run on any platform.
>
> **[1:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=81)** Projects include code, the environment in which the code was run, and any dependencies of your code.
>
> **[1:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=88)** MLflow Models provides a standard format to save, load, and deploy models.
>
> **[1:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=94)** Models can be saved in different flavors, the signatures of your input data to models and the output received from models are usually logged, and then you can log different model versions.
>
> **[1:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=105)** The MLflow Model Registry is a centralized store for managing models, including versioning, staging, approval, and deployment.
>
> **[1:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=114)** These are the basic components that make up MLflow.
>
> **[1:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=117)** Let's look at each of these in more detail, starting with model tracking.
>
> **[2:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=122)** MLflow model tracking automatically or manually logs code, parameters, metrics, and outputs of every training run.
>
> **[2:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=132)** This makes it easier to compare your models across runs using the MLflow UI or the command-line interface, the CLI.
>
> **[2:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=142)** If you're working in MLflow, you'll primarily work in Python, though MLflow has support for other programming languages as well, such as R and Java.
>
> **[2:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=152)** MLflow Projects are a packaging format for reproducible machine learning code, allowing you to define your project's dependencies and entry points using a special file known as an ML project file.
>
> **[2:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=164)** This makes it easy to organize and share ML code in a predictable and standardized way.
>
> **[2:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=170)** MLflow Projects support reproducible environments.
>
> **[2:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=173)** Projects can specify their runtime environment using Conda or Docker, ensuring the same dependencies are used regardless of where the project runs.
>
> **[3:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=182)** This eliminates environment-related inconsistencies and supports reproducibility across systems.
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=188)** You can run projects locally, remotely, or on a cluster using a single command.
>
> **[3:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=195)** This provides a uniform interface to execute training scripts or pipelines, whether you're on your laptop or deploying to production.
>
> **[3:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=203)** The next component we'll talk about is MLflow Models.
>
> **[3:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=206)** MLflow saves models in the standard generic format that includes metadata, model artifacts, and environment details.
>
> **[3:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=214)** This supports multiple ML frameworks, such as scikit-learn, TensorFlow, and PyTorch.
>
> **[3:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=219)** Saved models can be served using MLflow's REST API for real-time inference or loaded into batch pipelines for large-scale predictions.
>
> **[3:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=227)** They can also be exported for deployment to external platforms like Azure ML, SageMaker, or Docker.
>
> **[3:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=234)** MLflow ensures that models behave the same across development, testing, and production environments.
>
> **[4:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=240)** This consistency helps eliminate deployment issues and supports scalable, repeatable machine learning workflows.
>
> **[4:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=248)** MLflow offers a model registry that can maintain multiple versions of a model, allowing teams to manage updates, rollbacks, and staged releases.
>
> **[4:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=258)** Every version is linked to a specific run and metadata for traceability.
>
> **[4:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=262)** Users can add comments, tags, and descriptions to model versions, which help document intent and review history.
>
> **[4:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=270)** Lineage tracking connects models to the datasets, code, and parameters used to create them.
>
> **[4:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=276)** The model registry centralizes governance across teams.
>
> **[4:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=279)** The registry provides a central hub for model lifecycle management with defined stages like staging, production, and archived.
>
> **[4:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=287)** In recent versions of Mlflow, model stages have been deprecated.
>
> **[4:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=291)** Instead, you manage the different stages of your model, such as production and development, using explicit, unique model names.
>
> **[5:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=300)** The demo that we'll perform next will be a very simple introduction to MLflow.
>
> **[5:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-mlflow?u=76281980&t=305)** We'll train multiple models in different runs and deploy those models to MLflow's model registry.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (2), python (1)
> **Code Keywords:** let (2), interface (2)
> **Env Vars:** cli (1), rest (1), api (1)
> **Definitions:** is an  (1), is a  (1), known as (1)
> **Analogies:** such as (3)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Install MLflow and prepare data for machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=0)** - [Instructor] In this demo, we'll train multiple models using ML Flow.
>
> **[0:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=3)** Deploy those models to the ML Flow registry and use those models for predictions.
>
> **[0:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=9)** We are going to be working with Python, so make sure you have a recent version of Python available.
>
> **[0:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=13)** Python 3.8 and above.
>
> **[0:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=15)** You can install ML Flow on your local machine with a pip install mlflow.
>
> **[0:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=20)** This will install the latest version, which happens to be 2.2 1.3 at the time of this recording, my current working directory happens to be mlflow_project, and here you can see I have a notebook within which I'll be writing my code and a CSV file.
>
> **[0:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=35)** That will be our training and evaluation data.
>
> **[0:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=38)** Let's bring up the ML Flow UI.
>
> **[0:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=40)** This is a web-based interface that lets users track and visualize machine learning experiments, including parameters, metrics, artifacts, and model versions.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=49)** It should now be running on local host port 5,000.
>
> **[0:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=53)** Let's head over and take a look and here is what the ML Flow UI looks like.
>
> **[0:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=57)** ML Flow sets us up with the default experiment to start off with.
>
> **[1:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=61)** We can of course create new experiments as needed.
>
> **[1:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=64)** In the models tab, you'll be able to see all of the models that you have registered.
>
> **[1:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=68)** We of course, have none at this point, in a new terminal window.
>
> **[1:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=71)** In the same ML Flow project directory, I'm going to list the contents of this directory and you'll find that a new folder has been created called mlruns.
>
> **[1:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=80)** This is the folder where the ML Flow server will save all of the experiments, the runs, and the parameters that it tracks.
>
> **[1:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=87)** Let's now see how we can use ML Flow to create experiments and track model runs.
>
> **[1:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=93)** Here in my notebook, I'm going to import all of the libraries that I need to build, train, and evaluate classification models that I log and track using ML Flow.
>
> **[1:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=104)** The dataset that I work with is the bank marketing dataset that's available in the UCI repository.
>
> **[1:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=110)** You should have access to this dataset in the exercise files of this course.
>
> **[1:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=115)** In this data, we have the records of individuals who were the target of a campaign run by a bank, and at the end of the campaign, the customer may or may not have opened a term deposit that's available in the target Y.
>
> **[2:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=130)** So we are going to try and predict this particular column Y.
>
> **[2:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=134)** Instead of having yes no values in the Y column, let's map these two, ones and zeros because machine learning models can only work with numeric data.
>
> **[2:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=144)** Notice the updated values for the target column Y.
>
> **[2:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=148)** Since we are focused on ML Flow, I'm going to keep the pre-processing of this data very simple and I won't split the data into training and test before pre-processing.
>
> **[2:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=158)** Please note that this is not how you would do it in production, but split the data first, process the training data and use the training data parameters to process the test data.
>
> **[2:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=169)** On lines one and two I access the X features and the Y target variables, and I encode all of the categorical values in the X features using one hot encoding.
>
> **[3:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=180)** That is X_encoded = pd.get_dummies task.
>
> **[3:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=183)** Here is what our encoded features look like.
>
> **[3:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=186)** We have many more columns, 42 columns, because of the one hot encoding that we've performed.
>
> **[3:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=192)** Now, if you look at our encoded data, you'll find that several columns are integer columns.
>
> **[3:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=197)** These can be of type INT or UINT8.
>
> **[3:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=201)** Now, if you use integer columns while training your data, ML Flow will give you a warning about loss of precision.
>
> **[3:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=208)** In order to mitigate this, we'll convert all our integer columns to type float.
>
> **[3:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=213)** On lines one and two I access all columns of type INT and UINT8 and on lines four and five, I change the data type to be of type float.
>
> **[3:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=223)** I also changed the target variable Y to be of type float.
>
> **[3:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=227)** If you now look at the data types of the columns that we have, you'll see there all of type float and we should not receive any kind of warning when we track and log our models using ML Flow.
>
> **[4:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=240)** Let's go ahead and split our data into training data and test data.
>
> **[4:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/install-mlflow-and-prepare-data-for-machine-learning?u=76281980&t=244)** The training data will be to train our model, and the test data will be to evaluate our model.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), find (2), make (1), pip (1)
> **Code Keywords:** let (5), interface (1), this, (1)
> **Env Vars:** int (2), uint8 (2), csv (1), uci (1)
> **Prerequisites:** install (3), make sure you have (1)
> **Versions:** python 3 (1), 2.2 (1), 1.3 (1)
> **Warnings:** warning (2), note that (1)
> **Code Identifiers:** mlflow_project (1), get_dummies (1)
> **Ports:** port 5 (1)

#### Track a model run and register a model
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=1)** - [Instructor] Before training a model, the first thing we'll do is create an MLflow experiment.
>
> **[0:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=5)** And MLflow experiment is a named workspace that organizes multiple related runs to track and compare different versions of a machine learning workflow.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=14)** My MLflow UI is running within the MLflow project directory, and within that I showed you the mlruns folder, which is where our experiment data will be stored.
>
> **[0:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=23)** In order to make sure we're working in the same mlruns folder that our UI points to, I call mlflow.set_tracking_uri and point to that folder on my local machine.
>
> **[0:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=34)** I'll create an experiment named bank_marketing.
>
> **[0:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=38)** I call mlflow.set_experiment with that experiment name.
>
> **[0:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=41)** This will create a new experiment if an experiment with that same name does not exist.
>
> **[0:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=47)** Now if you go over to the MLflow UI and hit Refresh, you should find a new experiment in the left pane.
>
> **[0:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=54)** There is our bank_marketing experiment and it's currently empty, we have no runs.
>
> **[1:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=60)** A run is a single execution of a machine learning workflow within an experiment.
>
> **[1:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=65)** A run captures details like parameters, metrics, artifacts, and source code used.
>
> **[1:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=71)** Back to our notebook, I'm going to train a simple logistic regression model for classification.
>
> **[1:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=77)** Now I want to log parameters and metrics to run within our experiment.
>
> **[1:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=82)** So I call mlflow.start_run and specify the run name logistic_regression.
>
> **[1:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=87)** On line two, I access the run_id and store it in a variable.
>
> **[1:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=91)** On lines five and six, I specify the parameters for our logistic regression model, and I call mlflow.log_params to log the parameters to our run.
>
> **[1:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=102)** On lines 9 through 11, we'll instantiate the LogisticRegression estimator from the scikit-learn library and train our model on the training data by calling fit.
>
> **[1:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=112)** We get predictions on the test data on line 14, and on lines 17 through 20, I compute the metrics on the test data, accuracy, precision, recall, and f1 score.
>
> **[2:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=123)** In order to track these metrics as a part of our MLflow run, I call mlflow.log_metric on lines 23 through 26.
>
> **[2:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=131)** In order to log out the model itself, a best practice is to specify an input example and the signature of the input to the model.
>
> **[2:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=140)** I set these up on lines 29 through 32, and on lines 37 through 42, I log the trained model with the model_artifact logistic_regression_model.
>
> **[2:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=152)** Go ahead and run this, and in a few moments you'll find that the training is complete.
>
> **[2:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=157)** Our run ID starts with cd.
>
> **[2:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=160)** Let's head over to the MLflow UI and go to our bank_marketing experiment.
>
> **[2:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=165)** There is our logistic_regression run.
>
> **[2:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=167)** Let's click through and you can see that its run ID starts with cd, and if you scroll down here on this page, you'll find all of the parameters and metrics that we tracked as a part of this particular model run.
>
> **[3:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=180)** The Model metrics tab will give you a visual representation of model metrics, everything that you tracked.
>
> **[3:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=187)** And the Artifacts directory shows you all of the model artifacts that have been saved with MLflow.
>
> **[3:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=193)** Artifacts are output files or data produced during a run, such as the trained model plots, logs, or datasets.
>
> **[3:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=201)** These are stored and tracked to support reproducibility and model evaluation.
>
> **[3:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=206)** The MLmodel file is a metadata file in MLflow that describes how to load and serve a model.
>
> **[3:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=212)** It will specify the model's format, dependencies, and entry points for tools like mlflow.pyfunc that can be used to load a model for prediction.
>
> **[3:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=221)** Conda.yaml and python_env.yaml, along with requirements.txt specify the dependencies and environment for reproducibility.
>
> **[3:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=229)** The model.pkl file is the serialized model in the Pkl format.
>
> **[3:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=234)** We've trained a model within a run, but we haven't registered the model with MLFlow's centralized registry yet.
>
> **[4:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=240)** The model_uri here is the URI to the model_artifact within our run_id.
>
> **[4:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=247)** I'm going to call the model bank_marketing_model, and I call mlflow.register_model to register the model that we just trained with the centralized registry in MLflow.
>
> **[4:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=258)** This will create version one of the model.
>
> **[4:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=260)** And if you head over to the Models tab, you should see the registered model there.
>
> **[4:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=265)** A model can have multiple versions, and so far we've registered exactly one.
>
> **[4:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=270)** If you click through to the model version here, you'll be able to see the source run that the model came from.
>
> **[4:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=276)** Off to the top right, you can see that it came from the logistic_regression run.
>
> **[4:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/track-a-model-run-and-register-a-model?u=76281980&t=281)** In addition, inputs and outputs give you the schema of the input to the model and the prediction from the model.

> [!info]- Semantic Content
>
> **Code Identifiers:** bank_marketing (3), logistic_regression (3), run_id (2), model_artifact (2), set_tracking_uri (1)
> **CLI Commands:** find (3), cd (2), make (1)
> **Code Keywords:** let (2), this, (1), from. (1)
> **File Paths:** conda.yaml (1), python_env.yaml (1), requirements.txt (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** uri (1)
> **Exercise Files:** source code (1)

#### Multiple model versions and predictions using registered models
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=1)** - [Instructor] Back in our notebook, I'm going to train a new different model, and this model will be logged and tracked in a different run.
>
> **[0:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=8)** This is going to be a random forest model.
>
> **[0:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=10)** You can see I call it mlflow.start_run with run name random_forest.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=14)** The remaining steps here are identical to the steps that we follow for the logistic regression model, so I won't go through these in detail.
>
> **[0:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=22)** We define and log hyperparameters, train the model, generate predictions, compute metrics, and then log metrics to ML flow.
>
> **[0:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=32)** We get the input example and signature, and we log the trained model.
>
> **[0:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=36)** Go ahead and run this, and in a bit, your random forest run should be complete, and you should be able to view the details of this training run on the MLflow UI.
>
> **[0:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=47)** Here is the random forest run.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=49)** Let's go ahead and click through, and let's scroll down and take a look at the details that were logged.
>
> **[0:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=56)** You can see the random forest parameters on the left and the metrics over to the right.
>
> **[1:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=61)** Back in our notebook, let's register the model corresponding to this run as well.
>
> **[1:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=65)** The model URI points to the random forest model.
>
> **[1:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=70)** I use the random forest run ID and its model artifact name.
>
> **[1:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=74)** The model name is the same as before, bank_marketing_model.
>
> **[1:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=78)** When you try to register a new run of the same model, this will be registered as a separate model version.
>
> **[1:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=84)** Notice that Version 2 of the model bank_marketing_model was created.
>
> **[1:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=89)** In the MLflow UI, if you head over to the Registered Models and click through to the bank_marketing_model, you'll see that we have two versions now.
>
> **[1:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=97)** Version 2, our random_forest model, and Version 1, our previous logistic regression model.
>
> **[1:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=103)** Notice the Source Run for Version 2 is random_forest.
>
> **[1:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=106)** Let's say you've evaluated a number of models, and you're satisfied with this random_forest model that you have.
>
> **[1:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=112)** You can go ahead and promote this model and specify that it's a production model.
>
> **[1:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=118)** So I'm now going to create a new model, and I'll call this bank_marketing_production_model and promote Version 2 to this production model.
>
> **[2:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=128)** You can see the UI is currently open to the bank_marketing_production_model.
>
> **[2:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=132)** You can see this on the top left, and you can see that this model has been copied from the bank_marketing_model Version 2.
>
> **[2:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=139)** That's a little lower down on the left.
>
> **[2:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=142)** Click on Registered Models, and this will take you to the main page, where all of your models are listed.
>
> **[2:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=149)** Observe that we have two models, the bank_marketing_model with two versions and the bank_marketing_production_model with one version.
>
> **[2:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=157)** Back to our notebook.
>
> **[2:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=158)** Let's see how we can access one of these Registered Models for prediction.
>
> **[2:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=162)** The model that I'm going to access is the bank_marketing_production_model.
>
> **[2:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=167)** That's my model name.
>
> **[2:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=168)** Now the model URI points to the production model from the registry, so it's models:/(the model_name)/1, where 1 corresponds to the model Version 1.
>
> **[3:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=180)** On line 8, I load the model using the model URI, and on line 10, I make predictions on the test data using the model.
>
> **[3:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=190)** I compute Accuracy, Precision, Recall, F1, and print those out to screen.
>
> **[3:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=195)** And you can see here that these values are the same values that we got from the model run.
>
> **[3:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=201)** We've successfully registered multiple versions of our model with the MLflow registry.
>
> **[3:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/multiple-model-versions-and-predictions-using-registered-models?u=76281980&t=207)** We've accessed one of those versions, loaded that model in, and used it for predictions.

> [!info]- Semantic Content
>
> **Code Identifiers:** bank_marketing_model (5), random_forest (4), bank_marketing_production_model (4), start_run (1), model_name (1)
> **Versions:** version 2 (5), version 1 (2)
> **Code Keywords:** let (5), this, (1)
> **Env Vars:** uri (3)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. LLMOps for Large Language Models

#### Introducing LLMOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=1)** - [Instructor] Most of the excitement in the field of AI today is around large language models.
>
> **[0:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=6)** Now, large language models have to be treated a little differently from traditional machine learning models.
>
> **[0:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=12)** So it's not just MLOps that we use to automate the pipelines for large language models, we have to use LLMOps.
>
> **[0:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=19)** First, let's talk about what an LLM is.
>
> **[0:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=22)** A large language model is a neural network that's trained on massive text data to generate human-like language, perform reasoning and complete tasks.
>
> **[0:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=32)** These models are called large models, because the models themselves are huge.
>
> **[0:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=37)** They contain billions of parameters that need to be trained.
>
> **[0:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=41)** They're also called large models, because they're trained on massive quantities of data.
>
> **[0:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=47)** We've already discussed MLOps in some detail.
>
> **[0:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=50)** This is a set of practices that integrates machine learning development with operations, enabling reliable, reproducible and scalable ML deployment and lifecycle management.
>
> **[1:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=61)** LLMOps is the practice of managing the full lifecycle of large language models, including fine tuning, deployment, monitoring, feedback, safety and continuous improvement.
>
> **[1:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=73)** Just like MLOps, LLMOps requires a collaboration of data scientists, DevOps engineers and IT professionals.
>
> **[1:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=81)** The operational requirements of MLOps typically apply to LLMOps as well, but there are challenges with training and deploying LLMs that require a different and unique approach to LLMOps.
>
> **[1:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=94)** Large language models are larger, more complex and more expensive to train than regular ML models.
>
> **[1:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=102)** They require massive computational resources for training and inference, making their development and deployment costly and technically demanding.
>
> **[1:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=111)** LL MOPS introduces structure and automation to manage these challenges at scale.
>
> **[1:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=116)** Unlike traditional ML models, LLMs can produce variable outputs even for similar inputs, making testing and evaluation more complex.
>
> **[2:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=126)** LLMOps helps monitor, evaluate and refine model behavior through structured feedback and control mechanisms.
>
> **[2:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=134)** LLMOps' frameworks enable secure deployment, usage monitoring and risk mitigation, such as mitigating bias and hallucinations in your model.
>
> **[2:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=145)** They also help support ongoing improvements in your model through feedback loops, prompt tuning or fine tuning as your application's needs evolve.
>
> **[2:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=155)** LLMs are highly sensitive to the input prompts.
>
> **[2:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=158)** LLMOps needs to incorporate tools and processes for designing, versioning, evaluating and managing prompts effectively to achieve desired outputs and mitigate issues like prompt injection or hallucinations.
>
> **[2:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=171)** This includes tracking prompt performance and user interactions.
>
> **[2:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=175)** Traditional ML models tend to have well-defined metrics that objectively evaluate the quality of the model.
>
> **[3:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=182)** Evaluating the quality and factuality of LLM-generated text is complex.
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=188)** LLMOps requires specialized monitoring techniques to detect and mitigate hallucinations.
>
> **[3:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=194)** That is when the model generates factually incorrect or nonsensical outputs.
>
> **[3:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=199)** Specialized techniques also ensure that the generated content aligns with the desired quality standards and this often involves human evaluation and specific LLM evaluation metrics.
>
> **[3:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=211)** Many LLM applications like chatbots require managing conversation and context effectively.
>
> **[3:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=218)** LLMOps needs to address how context is handled, stored and passed between interactions to maintain coherence and relevance.
>
> **[3:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=227)** And it has to consider factors like context window limitations and cost implications.
>
> **[3:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=232)** LLMs are trained on large data sets and they end up inheriting and amplifying any biases that exist in that data and this can lead to unfair or harmful outputs.
>
> **[4:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/introducing-llmops?u=76281980&t=245)** An important bit of functionality included in LLMOps is identifying, monitoring and mitigating these biases throughout the LLM lifecycle and this requires special tools and techniques for bias detection and fairness evaluation.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), mops (1)
> **Code Keywords:** require (3), let (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), such as (1)
> **Speakers:** - [instructor] (1)

#### LLMOps vs. MLOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=0)** - [Instructor] Let's talk about how LLMOps is different from MLOps.
>
> **[0:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=5)** The first difference is in the computational resources involved.
>
> **[0:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=9)** Training and deploying LLMs require high performance hardware like GPUs due to their massive compute demands.
>
> **[0:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=17)** Techniques like model compression and distillation help reduce inference costs.
>
> **[0:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=21)** The second difference here is the extensive use of transfer learning.
>
> **[0:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=25)** Instead of training LLMs from scratch, LLMs are often fine-tuned from foundation models, enabling strong, domain-specific performance, with less data and compute.
>
> **[0:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=37)** Human feedback is critical for a good LLM.
>
> **[0:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=40)** LLMs benefit greatly from user feedback, especially through methods like RLHF, or Reinforcement Learning from Human Feedback.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=49)** Integrating this feedback improves evaluation and supports future fine-tuning of models.
>
> **[0:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=54)** Next, hyperparameter tuning.
>
> **[0:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=56)** While tuning improves performance in all machine learning models, in LLMs, it's also critical for managing compute and cost, with parameters like bat size and learning rate having a major impact on managing the cost of your LLMs.
>
> **[1:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=73)** Traditional machine learning models tend to have clear, objective metrics that you can use to evaluate those models, such as R Square for regression models and accuracy, or F1 for classification models.
>
> **[1:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=85)** LLMs, on the other hand, require different measures, such as BLEU scores or ROUGE scores, which need more thoughtful implementation and interpretation.
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=95)** Prompt engineering is an essential part of LLM development.
>
> **[1:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=99)** Crafting effective prompts is essential to guide LLMs reliably and safely, reducing issues like hallucination, prompt injection, or unintended behavior.
>
> **[1:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=110)** Prompt engineering is not something that you'd include in the MLOps workflow.
>
> **[1:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=114)** And finally, LLM chains and pipelines are useful to chain model outputs with external tools, such as vector search.
>
> **[2:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=124)** You can also use frameworks like lagtrain to handle complex tasks like document-based question and answer.
>
> **[2:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=131)** Here is a simplified representation of the standard machine learning workflow.
>
> **[2:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=136)** You source your data from diverse sources, prepare your data, feed that data into your model that's the model training phase.
>
> **[2:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=144)** You then evaluate your model, and if it doesn't meet your expectations, you iterate over and improve your model using hyperparameter tuning or new data as needed.
>
> **[2:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=154)** Once you're satisfied with the model that you have, you deploy the model where it serves predictions.
>
> **[2:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=160)** And then you constantly monitor the model for performance drift and performance degradation.
>
> **[2:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=166)** And then you constantly retrain the model on new data as needed.
>
> **[2:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=171)** There are, of course, nuances at every step, but this is the basic ML workflow.
>
> **[2:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=175)** Here's what the standard LLM workflow looks like, and you can see there are many more components here.
>
> **[3:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=182)** Let's break this down step by step.
>
> **[3:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=184)** The first step here is when you choose a foundation model to work with.
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=188)** Choose a base model like GPT, Llama, or Claude that suits your task.
>
> **[3:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=193)** Foundation models are LLMs pre-trained on large amounts of data that can be used for a wide range of downstream tasks.
>
> **[3:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=200)** Because training a foundation model from scratch is complicated, time consuming and very, very expensive, only a few companies and institutions have the required training resources.
>
> **[3:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=212)** Once you have a foundation model, the next step is prompt engineering.
>
> **[3:37](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=217)** Prompt engineering is a technique to tweak the input so that the output matches your expectations.
>
> **[3:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=223)** You can use different tricks to improve your prompt, design and refine prompts to guide the model towards the desired output without changing the model weights.
>
> **[3:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=231)** Once you're done with prompt engineering, evaluate the results from your model.
>
> **[3:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=236)** Assess the quality of the model's responses using metrics, human feedback, or automated tools.
>
> **[4:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=242)** If there is a room for improvement, that is you are not satisfied with the model, check if you have the expertise and label data to fine-tune the model.
>
> **[4:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=253)** If your resources allow, fine-tune the model using domain-specific data to improve performance.
>
> **[4:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=259)** If your results are satisfactory, you can skip directly to model deployment.
>
> **[4:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=264)** You'll go ahead and deploy the model in production.
>
> **[4:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=268)** You can move the model to production using strategies that reduce risk.
>
> **[4:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=273)** You may want to do A/B testing.
>
> **[4:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=275)** You'll test the new version alongside the current one with different user segments.
>
> **[4:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=280)** Or you may want to set up a canary release.
>
> **[4:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=282)** This is when you roll out the new version of the model to a small subset of users first.
>
> **[4:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=288)** You may also choose blue-green deployment, where you maintain two environments, blue and green, and switch traffic between them.
>
> **[4:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llmops-vs-mlops?u=76281980&t=296)** As you can see, the standard LLM workflow includes many components that are not present in the standard ML workflow.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), rlhf (1), bleu (1), rouge (1), gpt (1)
> **Code Keywords:** let (2), require (2), finally, (1), switch (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### LLM model development and evaluation
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=1)** - [Presenter] Let's discuss some of the important steps in LLM model development and evaluation.
>
> **[0:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=6)** The first is prompt engineering and fine-tuning.
>
> **[0:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=9)** Prompt engineering shapes outputs using carefully crafted inputs while fine-tuning update's model bits using domain-specific data.
>
> **[0:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=18)** LLMOps supports both strategies for aligning models with specific use cases efficiently.
>
> **[0:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=25)** Human feedback, often via reinforcement learning from human feedback or RLHF, is used to align LLMs with user intent and safety guidelines.
>
> **[0:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=35)** LLMOps incorporates pipelines to collect, evaluate, and apply this feedback continuously.
>
> **[0:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=41)** LLM evaluation goes beyond accuracy, requiring human-in-the-loop assessments, scenario tests, and toxicity and bias checks.
>
> **[0:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=51)** LLMOps frameworks enable automated and manual evaluation workflows to ensure consistent quality.
>
> **[0:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=58)** It's possible for LLMs to memorize training data, raising privacy and compliance concerns.
>
> **[1:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=65)** LLMOps enforces data versioning, anonymization, and governance to ensure ethical data use and auditability.
>
> **[1:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=73)** Let's discuss the first important steps in LLM model development: prompt engineering and fine-tuning.
>
> **[1:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=80)** Prompt engineering involves crafting specific, textual instructions or input formats to elicit desired responses from a pre-trained model without changing the model's internal parameters.
>
> **[1:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=92)** Prompt engineering is a lightweight, cost-effective way to adapt model behavior for various tasks or domains.
>
> **[1:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=100)** Fine-tuning adjust the internal weights of a pre-trained model by training it further on task-specific or domain-specific datasets.
>
> **[1:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=108)** This approach allows the model to specialize and achieve higher performance on targeted applications.
>
> **[1:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=115)** Human feedback is essential to develop high quality LLMs.
>
> **[1:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=119)** LLMs are often trained with reinforcement learning from human feedback.
>
> **[2:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=125)** RLHF uses human generated rankings of model outputs to fine-tune behavior through reinforcement learning, helping align model responses with human values and expectations.
>
> **[2:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=136)** This process has been key to making LLMs more helpful, safe, and aligned with user intent.
>
> **[2:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=143)** Collecting and analyzing real user feedback helps detect issues like bias, hallucination, or harmful responses in production.
>
> **[2:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=152)** This feedback is used to update prompts, fine-tune models, or retrain components, helping build safer and more adaptive systems.
>
> **[2:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=161)** For complex tasks like summarization, creativity, or factual reasoning, automated metrics often miss nuances in quality or tone.
>
> **[2:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=170)** Human-in-the-loop evaluation provides deeper insight into model behavior and is essential for maintaining high-quality outputs.
>
> **[2:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=178)** As you might imagine, evaluating LLMs is a lot harder than evaluating traditional models.
>
> **[3:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=184)** Standard ML metrics work well for classification tasks, but fail to capture qualities like coherence, helpfulness, or factual correctness in LLM outputs.
>
> **[3:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=194)** LLM performance often requires more nuanced evaluation methods, tailored to open-ended or generative tasks.
>
> **[3:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=202)** LLMs are often subjectively evaluated.
>
> **[3:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=205)** It involves criteria such as tone, relevance, or clarity, which vary by context and user intent.
>
> **[3:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=212)** Scenario-based evaluations simulate real-world interactions to better gauge how the model performs in practical applications.
>
> **[3:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=220)** Automated scoring can miss subtle flaws or misalignments, so it's extremely important to incorporate human feedback for monitoring and improving deployed models.
>
> **[3:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=231)** Human-in-the-loop systems help ensure ongoing quality, safety, and alignment with user expectations.
>
> **[3:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=238)** And finally, let's talk about data management and privacy.
>
> **[4:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=242)** Now, LLMs are very large and powerful models.
>
> **[4:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=246)** Because of their scale, LLMs may inadvertently reproduce sensitive or copyrighted content seen during training.
>
> **[4:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=254)** This creates legal and ethical risks, especially in regulated or commercial applications.
>
> **[4:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=260)** To ensure that training data is used responsibly, the data must be vetted for quality, compliance, and appropriateness.
>
> **[4:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=267)** Versioning and documentation help maintain traceability and accountability in model development.
>
> **[4:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=273)** This means training data needs to be filtered, curated, and versioned.
>
> **[4:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=279)** LLMOps frameworks support tracking where data came from, verifying user content, and apply anonymization techniques.
>
> **[4:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-development-and-evaluation?u=76281980&t=287)** These capabilities are important for ensuring compliance with privacy regulations and ethical AI standards.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), rlhf (2)
> **Code Keywords:** let (3), finally, (1), from, (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [presenter] (1)

#### LLM model deployment and operations
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=1)** - [Instructor] We've discussed LLM model development and evaluation.
>
> **[0:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=4)** Let's move on and discuss LLM deployment and operations.
>
> **[0:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=9)** This of course includes model deployment after training and evaluation.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=14)** LLMs can be deployed as APIs, serverless endpoints, or on device, but serving large models introduces major constraints in latency, cost, and scale, driving the use of optimization tools.
>
> **[0:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=27)** Once you deploy the model, you have to actively monitor the model.
>
> **[0:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=30)** This involves tracking prompt behavior, toxic output, and hallucinations alongside traditional metrics like latency and resource usage.
>
> **[0:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=38)** This requires custom alerts for misuse, bias or safety violations.
>
> **[0:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=43)** You're likely to be improving your model periodically, which means you'll need to deploy multiple versions.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=49)** LLM versioning includes tracking not just model weights, but also prompts, adapters, and fine tuning configurations, which means you need registries that manage base models and all modifications that you make along with the relevant metadata.
>
> **[1:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=65)** And then of course, there are the cost and infrastructure considerations.
>
> **[1:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=68)** LLM ops must address the high cost of LLM training and fine tuning through cost monitoring, auto-scaling, and resource scheduling.
>
> **[1:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=77)** Infrastructure considerations are important enough that they drive decisions between open source and proprietary models.
>
> **[1:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=85)** Let's discuss model deployment in more detail first.
>
> **[1:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=89)** Now, LLMs may be deployed as APIs, serverless endpoints, or on device depending on your use case.
>
> **[1:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=95)** Your deployment options vary based on environments.
>
> **[1:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=99)** Cloud APIs suit scalable web applications.
>
> **[1:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=102)** Serverless endpoints work well for event driven tasks and on device model serve low latency or privacy sensitive applications.
>
> **[1:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=110)** Choose the right deployment strategy to balance performance, accessibility, and user experience.
>
> **[1:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=116)** It's no secret that LLMs requires significant memory and compute resources making inference costly and potentially slow at scale.
>
> **[2:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=126)** You need to ensure that your deployments are optimized for throughput and that you're constantly monitoring response time and production settings.
>
> **[2:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=133)** This often requires the use of specialized tools.
>
> **[2:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=136)** Frameworks like vLLM and DeepSpeed enable faster inference, efficient memory use, and higher throughput by leveraging techniques like model parallelism and kernel fusion.
>
> **[2:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=147)** These tools help make large scale deployment more practical and cost effective.
>
> **[2:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=152)** Monitoring LLMs is more important and more difficult than monitoring regular models.
>
> **[2:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=158)** LLMs may not stay on the straight and narrow.
>
> **[2:41](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=161)** They are sensitive to prompt variations and may produce unexpected, harmful or false responses when inputs differ from training distribution.
>
> **[2:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=170)** Monitoring must track prompt inputs, detect hallucinations, and flag toxic or unsafe outputs.
>
> **[2:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=176)** Because LLMs are computationally intensive, real-time monitoring of GPU or CPU usage, memory and latency is essential to ensure performance and cost efficiency.
>
> **[3:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=188)** Unexpected slowdowns or spikes can degrade user experience or lead to infrastructure issues.
>
> **[3:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=194)** LLMs may be misused to generate inappropriate content or exhibit bias under certain prompts.
>
> **[3:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=201)** Alerting and logging systems should capture such incidents to enable timely response, auditing and model or policy updates.
>
> **[3:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=209)** Traditional ML models need versioning and user registry, so do LLMs but LLM registries are much more complex.
>
> **[3:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=218)** LLM applications depend not just on model waves, but also on prompt templates, fine tuning layers or adapters, each of which must be versioned.
>
> **[3:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=227)** Tracking these elements ensures reproducibility and safe rollbacks when behavior changes.
>
> **[3:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=232)** Registries should capture which foundational model was used, maybe Llama 2 or minstrel, and log every transformation to that model.
>
> **[4:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=242)** Whether it's prompt tuning adapters or instruction fine tuning, this allows teams to trace lineage and maintain control over production models.
>
> **[4:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=251)** A well-managed registry stores critical metadata for each version, training data source, tuning configuration, evaluation results and known risks or limitations.
>
> **[4:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=261)** And finally, let's talk about cost and infrastructure management.
>
> **[4:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=264)** More relevant and important in case of LLMs as compared with traditional machine learning.
>
> **[4:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=270)** Training and serving LLMs can quickly become expensive, especially at scale.
>
> **[4:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=274)** LLM ops frameworks must include cost tracking tools to monitor compute usage, and optimize spend across environments.
>
> **[4:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=283)** Make sure you configure your infrastructure using auto-scaling and intelligent resource scheduling.
>
> **[4:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=289)** Auto-scaling ensures that resources dynamically adjust to workload demands, preventing over provisioning or under utilization.
>
> **[4:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=296)** Advanced scheduling strategies help prioritize high priority jobs and make better use of GPUs or TPUs.
>
> **[5:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=303)** Remember, there is a trade off between control and convenience.
>
> **[5:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=306)** Choose your infrastructure accordingly.
>
> **[5:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=309)** Open source LLMs offer flexibility and lower long-term costs, but requires significant infrastructure management.
>
> **[5:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=316)** Hosted bottles.
>
> **[5:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/llm-model-deployment-and-operations?u=76281980&t=317)** Let's say openly hour anthropic reduce operational burden, but may incur higher usage fees, and you may end up locked in to a particular provider.

> [!info]- Semantic Content
>
> **Env Vars:** llm (8), gpu (1), cpu (1)
> **Code Keywords:** let (4), case. (1), finally, (1)
> **CLI Commands:** make (4)
> **Prerequisites:** you'll need (1), configure (1)
> **Code Identifiers:** vllm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Benefits, best practices, and considerations for LLMOps
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=1)** - [Instructor] In this movie, we'll talk about benefits, best practices, and things to watch out for when you are using LLMOps.
>
> **[0:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=8)** LLMOps provides structured workflows and tools to streamline the entire lifecycle of LLM powered applications, from experimentation and fine tuning to deployment and monitoring.
>
> **[0:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=19)** This results in faster iteration cycles and a quicker time to market for your innovative AI solutions, leveraging large language models.
>
> **[0:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=27)** LLMOps includes robust monitoring, evaluation, and feedback mechanisms, including human in the loop processes.
>
> **[0:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=35)** Thus, it ensures that deployed LLM applications are reliable, generate safe and ethical outputs, and remain aligned with intended use cases and user expectations over time.
>
> **[0:47](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=47)** LLMs by nature are computationally intensive.
>
> **[0:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=51)** LLMOps practices incorporate a host of cost monitoring, infrastructure management and optimization techniques, like efficient serving frameworks and resource scheduling.
>
> **[1:02](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=62)** And this helps them manage the significant computational resources required for training, fine tuning and deploying these models effectively.
>
> **[1:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=70)** LLMOps establishes standardized processes, shared tools, and clear responsibilities across teams involved in developing and maintaining LLM applications.
>
> **[1:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=80)** This fosters better collaboration between data scientists, ML engineers, and operations teams, while also providing the necessary governance reproducibility and auditability for complex LLM projects.
>
> **[1:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=93)** Let's talk about some of the best practices that you have to keep in mind while implementing LLMOps.
>
> **[1:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=99)** Make sure that your continuously tracking model performance, resource utilization, and system behavior in production.
>
> **[1:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=106)** For LLMs, specifically monitor for issues like hallucinations, bias, prompt injection attempts, and unexpected outputs.
>
> **[1:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=115)** Implement comprehensive logging for debugging and auditing.
>
> **[2:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=120)** For training and fine tuning, ensure your data sets are clean, relevant, representative, and properly versioned.
>
> **[2:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=127)** For LLMs, pay extra attention to data privacy, potential biases and copyright considerations, and implement clear data lineage tracking.
>
> **[2:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=138)** Make sure you secure your AI systems and the data they handle.
>
> **[2:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=141)** This includes authentication, authorization, encryption in transit, and address and protection against adversarial attacks like prompt injection for LLMs.
>
> **[2:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=153)** Be aggressive in your version control and track all of the artifacts involved.
>
> **[2:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=158)** Maintain version control for your code using say Git.
>
> **[2:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=162)** For your models, using ML Flow or some similar framework.
>
> **[2:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=166)** For your data sets, using data version control, DVC, or another similar framework, and even for your prompts and fine tuning configurations for LLMs.
>
> **[2:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=175)** This is crucial for reproducibility and rollback capabilities.
>
> **[2:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=179)** Here are some pointers to using your LLMs well and wisely.
>
> **[3:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=184)** LLMs tend to be black boxes, but don't treat them as such.
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=189)** Make an effort to understand the behavior of your LLMs.
>
> **[3:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=192)** If you neglect interpretability and explainability, this can make it difficult to diagnose issues, build trust and ensure responsible use.
>
> **[3:21](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=201)** Do not have manual components in your infrastructure management.
>
> **[3:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=205)** Relying on manual processes for infrastructure provisioning and model deployment is error prone, slow, and hinder scalability.
>
> **[3:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=213)** Automate everything.
>
> **[3:35](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=215)** Use infrastructure as code and CICD pipelines.
>
> **[3:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=220)** Keep ethical considerations. Top of mind.
>
> **[3:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=223)** Consider fairness, privacy, and potential misuse because if you don't, this can lead to negative societal impacts and reputational damage.
>
> **[3:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=233)** LLMs are not one size fits all.
>
> **[3:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=237)** Carefully evaluate whether an LLM is the most appropriate tool for the task.
>
> **[4:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/benefits-best-practices-and-considerations-for-llmops?u=76281980&t=241)** Simpler, more traditional models might be more efficient and effective for certain problems.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), dvc (1), cicd (1)
> **CLI Commands:** make (4), git (1)
> **Warnings:** watch out (1), keep in mind (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 4. Data Orchestration Pipelines

#### Components of a data orchestration pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=1)** - [Instructor] And finally, we come to the last topic in this course, "Data Orchestration Pipelines for AI Systems."
>
> **[0:08](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=8)** High quality data produces high quality AI systems.
>
> **[0:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=11)** So it's important that your data is sourced and orchestrated correctly so that your systems have access to this data.
>
> **[0:19](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=19)** Data orchestration pipelines are automated workflows that manage the movement and transformation of data across various systems.
>
> **[0:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=26)** They define the sequence of tasks, dependencies, and triggers needed to extract, transform, and load data, ensuring it's processed correctly, and delivered to the right place at the right time for analysis or other users.
>
> **[0:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=38)** Modern data systems involve dozens of tools and moving parts that must all be coordinated together.
>
> **[0:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=45)** Data is sourced from multiple sources and should get to a single unified destination.
>
> **[0:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=50)** Manual coordination is brittle, time-consuming, and hard to scale or debug.
>
> **[0:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=56)** And this is why data orchestration is so important.
>
> **[1:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=60)** This enables reliable, repeatable, and automated execution of complex data workflows.
>
> **[1:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=66)** Here are the stages in any data orchestration pipeline.
>
> **[1:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=69)** The extraction stage involves collecting data from various sources and systems.
>
> **[1:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=73)** These sources can be diverse and include databases, APIs, cloud storage, SaaS applications, and more.
>
> **[1:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=80)** Once data is extracted, this stage focuses on cleaning, shaping, and preparing data for its intended use.
>
> **[1:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=87)** This can involve tasks like data cleaning, data enrichment, and data modeling.
>
> **[1:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=93)** In the loading stage, the transformed data is written to the target destination.
>
> **[1:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=98)** This could be a data warehouse, data lake, analytical database, or even a specific application.
>
> **[1:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=105)** Every pipeline is configured either with schedules or triggers.
>
> **[1:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=109)** This component defines when and how the pipeline runs.
>
> **[1:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=112)** Pipelines can be scheduled to run at specific intervals, such as daily or hourly, or triggered by specific events, arrival of a new file, or the completion of another process, or they can run on demand.
>
> **[2:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=124)** And finally, you have monitoring and alerting of a pipeline.
>
> **[2:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=127)** Now, you can consider this a separate component, independent of the pipeline.
>
> **[2:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=132)** Monitoring is a crucial aspect of a healthy data orchestration pipeline.
>
> **[2:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=136)** So I've included it in here.
>
> **[2:18](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/components-of-a-data-orchestration-pipeline?u=76281980&t=138)** This is where you track the pipeline's execution, identify errors or failures, and provide alerts when issues occur.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Detailed overview of pipeline components
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=1)** - [Instructor] Let's consider each of these in turn, starting with extraction.
>
> **[0:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=3)** Extraction is about connecting to diverse sources, to get data into your system.
>
> **[0:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=9)** The pipeline must establish connections to various data origins, handling different protocols, authentication methods, and data formats, SQL sources, no SQL sources, REST APIs, CSV, JSON files, everything.
>
> **[0:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=23)** Next, we have the data ingestion strategies.
>
> **[0:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=26)** This involves defining how data is pulled, whether it's a full refresh that is retrieving all the data every time, or incremental refresh, fetching only newer, updated data to optimize efficiency.
>
> **[0:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=38)** The extraction process needs to be designed to handle the expected volume of data and the speed at which it's generated, potentially using techniques like batching or real time streaming ingestion.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=49)** Robust extraction mechanisms include error handling for connection issues or data retrieval failures, often with automated retry mechanisms.
>
> **[0:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=59)** Once the data is extracted and ingested, we move on to the transformation stage.
>
> **[1:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=63)** This involves data cleaning and quality checks, identifying, addressing data quality issues like missing values, inconsistencies, duplicates, and outliers through various cleaning techniques and validation rules.
>
> **[1:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=75)** Data integration and enrichment involves combining data from multiple sources based on defined keys and enriching it with additional relevant information to provide a more comprehensive and complete view of your data.
>
> **[1:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=89)** You would then model and shape your data, restructure the data into a format suitable for the target system or for your analytical needs.
>
> **[1:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=98)** This could involve aggregations, filtering, joining, splitting, and maybe creating new derived fields.
>
> **[1:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=104)** It's important that your transformations are efficient and scalable, especially when dealing with large data sets, potentially leveraging parallel processing or distributed computing frameworks.
>
> **[1:55](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=115)** The next stage would be loading your data.
>
> **[1:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=117)** This involves establishing connections to the designated data destinations, handling different database types, APIs, or file storage systems.
>
> **[2:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=127)** You'll also determine the appropriate loading methods such as full refresh, incremental updates, or upsets where you update existing records and insert new ones.
>
> **[2:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=137)** All of these decisions will be based on the target system that you're working with and your data's requirements.
>
> **[2:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=143)** You also need to ensure that your data is accurate and consistent during the loading process.
>
> **[2:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=148)** This might involve transaction management to guarantee automaticity and prevent data corruption.
>
> **[2:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=154)** There are other decisions about speed and efficiency that need to be made here.
>
> **[2:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=158)** Consider factors like bad sizes, indexing, and network bandwidth when you are loading your data.
>
> **[2:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=164)** I'll take just a moment to talk about ETL versus ELT pipelines here.
>
> **[2:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=169)** Just a note that it's not necessary that you go from extracting your data, then transforming your data to loading your data.
>
> **[2:56](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=176)** That's typically what an ETL pipeline does.
>
> **[2:59](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=179)** However, you can use the ELT process as well where you extract the data first, then load the data into the target system and perform transformations in the target system.
>
> **[3:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=189)** The stages remain the same, only the order is different.
>
> **[3:13](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=193)** ETL is less flexible and a more traditional methodology.
>
> **[3:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=197)** ELT is a more modern methodology used with modern data warehouses with support large scale transformations of data.
>
> **[3:25](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=205)** Let's move on to talk about scheduling and triggering pipelines.
>
> **[3:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=209)** Now, pipelines can run on specified execution schedules.
>
> **[3:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=214)** You can set up recurrence schedules, whether daily at a specific time, hourly or weekly based on your business needs and data availability.
>
> **[3:42](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=222)** Pipelines can also be triggered based on events.
>
> **[3:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=225)** You can configure the pipeline to run automatically in response to specific events such as the arrival of new data in a file in a designated location or the completion of an upstream process.
>
> **[3:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=237)** You need to specify dependencies between different tasks within the pipeline or between multiple pipelines to ensure that they run in the correct order and make sure you provide mechanisms to manually initiate pipeline runs and control their execution for testing or ad hoc data processing needs.
>
> **[4:15](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=255)** We've discussed that monitoring and alerting configured on your pipeline is an integral part of building a pipeline.
>
> **[4:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=263)** Make sure you provide real time monitoring and logging.
>
> **[4:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=266)** Provide visibility into the pipeline's execution status, progress of individual tasks and detailed logs for troubleshooting.
>
> **[4:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=273)** Monitor key performance indicators like pipeline duration, resource utilization, and data processing rates to identify potential bottlenecks or performance degradation.
>
> **[4:44](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=284)** Make sure you configure alerts to notify relevant personnel when errors occur, when data quality thresholds are breached or performance issues are detected.
>
> **[4:53](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=293)** And finally, implement mechanisms to proactively check the health of pipeline components and automatically handle common errors or trigger recovery processes.
>
> **[5:03](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=303)** Here are some metrics you might want to track in any pipeline.
>
> **[5:06](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=306)** The pipeline success rate measures the percentage of successful pipeline runs compared with the total number of runs over a specified period.
>
> **[5:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=314)** If this is low, your pipeline may not be reliable.
>
> **[5:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=317)** The pipeline duration is the execution time of each pipeline run.
>
> **[5:22](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=322)** This is what you'll use to identify performance bottleneck and ensure that data is processed and delivered within the expected service level agreements.
>
> **[5:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=330)** The data freshness or latency metric measures the time elapse between the generation of source data and its availability in the target system after the pipeline has run.
>
> **[5:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=340)** This is a very important metric for time sensitive applications, and you should have resource utilization metrics for CPU, memory, and other resources to monitor the computational resources consumed by the pipeline infrastructure.
>
> **[5:54](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/detailed-overview-of-pipeline-components?u=76281980&t=354)** This is what will help you identify inefficiencies, scaling needs, and cost optimization opportunities.

> [!info]- Semantic Content
>
> **Env Vars:** etl (3), elt (3), sql (2), rest (1), csv (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** such as (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Data orchestration pipeline best practices and dos and don'ts
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=1)** - [Instructor] In this movie, we'll discuss some of the challenges that you'll encounter with data orchestration pipelines and some dos and don'ts for working with pipelines.
>
> **[0:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=10)** Handling failures in distributed environments is complex and error prone.
>
> **[0:14](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=14)** LLM pipelines often span multiple services, GPUs and nodes, making it hard to detect, diagnose, and recover from failures.
>
> **[0:24](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=24)** You need a robust fault tolerance and logging.
>
> **[0:26](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=26)** Otherwise, issues can silently corrupt outputs or halt systems.
>
> **[0:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=31)** As LLM applications scale, they accumulate numerous scripts, prompts, data paths, and services leading to tangle dependencies.
>
> **[0:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=39)** This sprawl increases maintenance overhead and makes debugging or refactoring riskier over time.
>
> **[0:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=45)** Maintaining the right balance is also challenging.
>
> **[0:49](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=49)** Teams want to experiment with new prompts, fine tuning methods or tools, but if you give too much flexibility, that can lead to inconsistent practices and fragile systems.
>
> **[0:58](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=58)** Your orchestration pipeline needs to strike a balance, enabling innovation while enforcing standards for reliability and reproducibility.
>
> **[1:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=67)** Pipeline sprawl refers to a situation where an organization has an excessive, unmanaged, and often poorly documented number of data pipelines.
>
> **[1:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=76)** These pipelines might be redundant, serve overlapping purposes, have unclear ownership, lack standardization, and thus become increasingly difficult to maintain, monitor, and govern effectively.
>
> **[1:29](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=89)** Here are some best practices for working with pipelines.
>
> **[1:32](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=92)** Break down complex pipelines into smaller, independent, and reusable components or tasks.
>
> **[1:38](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=98)** This makes your pipeline easier to maintain, makes debugging easier, and allows for the reuse of common data transformation logic across multiple pipelines.
>
> **[1:48](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=108)** Design pipelines with comprehensive error handling mechanisms, including retries, logging of errors and dead letter queues for failed data.
>
> **[1:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=117)** Integrate monitoring with alerts for failures, track performance degradation and data quality issues.
>
> **[2:04](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=124)** Make use of infrastructure as code to provision your pipelines, and treat your pipeline definitions, configurations, and underlying infrastructure as code and manage them using version control systems like Git.
>
> **[2:17](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=137)** Make sure that your pipeline includes data quality checks, and validation steps throughout the pipeline, especially during the transformation stage and the loading stage.
>
> **[2:27](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=147)** This will help identify data inconsistencies, errors, and anomalies early in the process.
>
> **[2:33](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=153)** And some things to watch out for when you are building pipelines.
>
> **[2:36](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=156)** Make sure your pipelines are not extremely long and complex with too many tightly coupled steps.
>
> **[2:43](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=163)** These are difficult to understand, debug, maintain, and scale.
>
> **[2:46](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=166)** Break them down into smaller, more manageable and reusable components.
>
> **[2:50](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=170)** Make sure you are not embedding sensitive information like database credentials, API keys, or environment-specific configurations directly within the pipeline code.
>
> **[3:00](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=180)** Use environment variables, configuration files, or secure secret management tools to manage these externally.
>
> **[3:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=187)** Your pipelines will become incredibly difficult to understand if you don't document them.
>
> **[3:12](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=192)** Document their purpose, logic, dependencies, and data flow.
>
> **[3:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=196)** Make sure you track data lineage, where the data comes from and how it's transformed all in your documentation.
>
> **[3:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=203)** Make sure that you incorporate error handling mechanisms and proactive monitoring in your pipelines.
>
> **[3:30](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=210)** Otherwise, you'll be blind to failures and data quality issues.
>
> **[3:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=214)** This will lead to incorrect data in downstream systems and lack of trust in your data infrastructure.
>
> **[3:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=220)** Here are some popular systems for data orchestration pipelines.
>
> **[3:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=225)** Apache Airflow is an open-source platform for programmatically authoring, scheduling, and monitoring workflows.
>
> **[3:52](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=232)** It uses directed acyclic graphs to represent pipelines and offers a wide range of integrations.
>
> **[3:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=237)** Prefect is another open-source orchestration framework known for its dynamic workflows and strong focus on developer experience.
>
> **[4:05](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=245)** It allows defining workflows in Python and offers both a cloud and self-hosted option.
>
> **[4:11](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=251)** Dagster is an open-source tool that focuses on data-aware orchestration, allowing you to define pipelines in terms of the data assets they produce.
>
> **[4:20](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=260)** It provides strong observability and testing capabilities.
>
> **[4:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=263)** Every cloud platform offers its own data orchestration pipeline.
>
> **[4:28](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=268)** AWS Step Functions is a serverless orchestration service from Amazon Web Services that lets you coordinate multiple AWS services into serverless workflows using state machines.
>
> **[4:39](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/data-orchestration-pipelne-best-practices-and-dos-and-donts?u=76281980&t=279)** Data orchestration pipelines in Azure include Azure Data Factory within which we have data flows and data pipelines.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), aws (2), git (1), apache (1), python (1)
> **Env Vars:** llm (2), aws (2), api (1)
> **Definitions:** is an  (2), refers to (1), is a  (1)
> **Code Keywords:** self (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Summary and further study
> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=1)** - [Instructor] And this brings us to the very end of this course on MLOps and data pipeline orchestration for AI systems.
>
> **[0:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=7)** Let's take a quick look at what we covered here in this course.
>
> **[0:10](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=10)** We first understood Agile development and how DevOps works and introduced MLOps.
>
> **[0:16](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=16)** We saw that MLOps was significantly more complicated than DevOps, because we have to deal with both code and data.
>
> **[0:23](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=23)** We also got some hands-on experience working with models in MLflow, an integral part of MLOps ecosystems.
>
> **[0:31](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=31)** We then moved on to discussing MLOps for LLMs.
>
> **[0:34](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=34)** LLMs are far more complex models with many more artifacts that you need to track and version.
>
> **[0:40](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=40)** We learned some of the nuances of deployment and operations when we are working with LLMs.
>
> **[0:45](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=45)** And then finally, we rounded out this course by talking about data orchestration pipelines.
>
> **[0:51](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=51)** If you're interested in studying further, here are some other courses on AI that you might find interesting.
>
> **[0:57](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=57)** Semantic Search and Information Retrieval in AI Systems and AI and Data Engineering with Knowledge Graphs and Large Language Models.
>
> **[1:07](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=67)** Well, that's it from me here today.
>
> **[1:09](https://www.linkedin.com/learning/mlops-and-data-pipeline-orchestration-for-ai-systems/summary-and-further-study?u=76281980&t=69)** I hope you enjoyed this course. Thank you for listening.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** find (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


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