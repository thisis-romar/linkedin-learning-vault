---
type: course
cssclasses:
  - lle-course
slug: hands-on-agentic-ai-building-ai-agents-with-llamaindex
url: "https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex"
duration_minutes: 70
duration: 1h 10m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGxSwR9TaIogg/learning-public-crop_675_1200/B4DZSQi2mXHkAY-/0/1737591844026?e=2147483647&amp;v=beta&amp;t=Rw0qlNICyBQFSAihmmUvCIW9pxOnht5S31u3CUkWEeI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Agentic AI Systems for Developers]]'
prev_courses:
  - '[[Building AI Agents with AutoGen]]'
next_courses:
  - '[[Build AI Agents and Chatbots with LangGraph]]'
path_nav: '[{"path":"Building Agentic AI Systems for Developers","position":4,"total":6,"prev":"Building AI Agents with AutoGen","next":"Build AI Agents and Chatbots with LangGraph"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20Agentic%20AI-%20Building%20AI%20Agents%20with%20LlamaIndex.md)

![Hands-On Agentic AI: Building AI Agents with LlamaIndex](https://media.licdn.com/dms/image/v2/D4D0DAQGxSwR9TaIogg/learning-public-crop_675_1200/B4DZSQi2mXHkAY-/0/1737591844026?e=2147483647&amp;v=beta&amp;t=Rw0qlNICyBQFSAihmmUvCIW9pxOnht5S31u3CUkWEeI)

# Hands-On Agentic AI: Building AI Agents with LlamaIndex

> AI agents are quickly becoming popular for their ability to make decisions autonomously and then act upon them. In this hands-on interactive course for AI and ML engineers, instructor Kumaran Ponnambalam helps you get up to speed with agentic AI capabilities in LlamaIndex, the popular framework that provides several building blocks to quickly create and deploy AI agents with ease. Along the way, e

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex) | 1h 10m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to the course](#introduction-to-the-course)
  - [Setting up codespaces](#setting-up-codespaces)
- [**1. Agentic Concepts in LlamaIndex**](#1-agentic-concepts-in-llamaindex) (5 videos)
  - [Agentic AI: A review](#agentic-ai-a-review)
  - [AI agents in LlamaIndex](#ai-agents-in-llamaindex)
  - [Tools and toolspecs in LlamaIndex](#tools-and-toolspecs-in-llamaindex)
  - [Set up LLM and tools for a LlamaIndex agent](#set-up-llm-and-tools-for-a-llamaindex-agent)
  - [Create and execute a LlamaIndex agent](#create-and-execute-a-llamaindex-agent)
- [**2. Build a Healthcare Assistant Agent**](#2-build-a-healthcare-assistant-agent) (5 videos)
  - [What is ReAct?](#what-is-react)
  - [Healthcare ReAct assistant: Design](#healthcare-react-assistant-design)
  - [Set up Wikipedia tools for healthcare assistant](#set-up-wikipedia-tools-for-healthcare-assistant)
  - [Set up RAG for medications](#set-up-rag-for-medications)
  - [Set up and execute the healthcare agent](#set-up-and-execute-the-healthcare-agent)
- [**3. Build a Summarization Agent**](#3-build-a-summarization-agent) (3 videos)
  - [Summarization agent design](#summarization-agent-design)
  - [Create the introspection agent](#create-the-introspection-agent)
  - [Execute the introspection agent](#execute-the-introspection-agent)
- [**4. Workflow Concepts in LlamaIndex**](#4-workflow-concepts-in-llamaindex) (5 videos)
  - [Intro to LlamaIndex workflows](#intro-to-llamaindex-workflows)
  - [LlamaIndex workflow components](#llamaindex-workflow-components)
  - [Managing data in LlamaIndex workflows](#managing-data-in-llamaindex-workflows)
  - [A simple LlamaIndex workflow: Design](#a-simple-llamaindex-workflow-design)
  - [Build and execute a simple LlamaIndex workflow](#build-and-execute-a-simple-llamaindex-workflow)
- [**5. Build a Doctor Scheduling Assistant with Workflows**](#5-build-a-doctor-scheduling-assistant-with-workflows) (6 videos)
  - [Doctor scheduling assistant: Design](#doctor-scheduling-assistant-design)
  - [Set up the doctor database tool](#set-up-the-doctor-database-tool)
  - [Set up the doctor scheduling tool](#set-up-the-doctor-scheduling-tool)
  - [Set up custom events for scheduling](#set-up-custom-events-for-scheduling)
  - [Create a custom workflow for scheduling assistant](#create-a-custom-workflow-for-scheduling-assistant)
  - [Create and execute the scheduling agent](#create-and-execute-the-scheduling-agent)
- [**6. Multi-agent Systems with LlamaIndex**](#6-multi-agent-systems-with-llamaindex) (5 videos)
  - [Multi-agent systems](#multi-agent-systems)
  - [Multi-agent hospital application: Design](#multi-agent-hospital-application-design)
  - [Importing agents in a multi-agent application](#importing-agents-in-a-multi-agent-application)
  - [Set up the multi-agent application](#set-up-the-multi-agent-application)
  - [Execute the multi-agent application](#execute-the-multi-agent-application)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=0)** - AI agents have the power to change the way you do business.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=5)** If you have wondered how to build one, this course is for you.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=9)** My name is Kumaran Ponnambalam.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=11)** In this course, we will go over the basics of building AI agents with LlamaIndex.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=17)** We will implement popular agentic patterns like planning, tool use, reflection, and multi-agent systems, using both pre-built templates and custom workflows.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=29)** This will help you gain insights into how real world agents are built and implement them in your work.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=37)** Let's get started with building AI agents with LlamaIndex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (3), [[LlamaIndex]] (2), power (1), business (1)
> **Speakers:** - ai (1)

#### Setting up codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=0)** - [Instructor] The code for this course is available in the GitHub project "Hands-on Agentic AI: Building AI agents with LlamaIndex."
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=11)** To create a workspace, go to code and select Create Code Space on Main.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=19)** This will open up Code Space and initialize the environment.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=24)** This may take some time.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=26)** The environment is set up now.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=29)** Open the notebook Code 01XX: A Basic Llama Agent.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=36)** The first cell contains all the dependencies needed for the codes.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=40)** Run the cell.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=44)** It is recommended to use Python version 3.10 to run the exercises for this course.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=53)** Once the dependencies are successfully installed, we are ready to run with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[GitHub]] (1), [[LlamaIndex]] (1), [[LLaMA]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** go to (1), open the (1)
> **CLI Commands:** python (1)
> **Versions:** version 3 (1)
> **Tools:** github (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Agentic Concepts in LlamaIndex

[↑ Back to Table of Contents](#table-of-contents)

#### Agentic AI: A review
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=0)** - [Instructor] Before we begin the codes, let's quickly review some key concepts of agentic AI.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=7)** What is agentic AI?
>
> **[0:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=9)** This is generative AI that is designed to operate autonomously with minimal human intervention, make decisions, and take actions towards specific goals.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=20)** If you are not familiar with the concepts of a agentic AI, I highly recommend further reading before proceeding with this course.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=29)** Let's quickly review the key patterns in agentic AI.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=33)** The planning pattern is used to decide on a course of action to fulfill a goal or break down a complex task into smaller, manageable steps.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=46)** The tool use pattern is used to select the right tool from a tool set to solve a specific problem, then identify the inputs to the tool, invoke the tool, and return the results.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=57)** The routing pattern is used to route a request to alternate destinations by analyzing the input and context of the request.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=66)** The reflection pattern is used to review outputs, artifacts, or decisions, provide constructive feedback, and improve accuracy.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=75)** The multi-agent pattern is used to create applications, where multiple independent AI agents can work together to accomplish a complex task.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=86)** We will be implementing examples for few of the patterns in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (5), [[Generative AI]] (1), [[Routing]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### AI agents in LlamaIndex
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=0)** - [Instructor] In this course, we will be building AI agents with LlamaIndex.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=5)** In this video, let's explore the capabilities that LlamaIndex provides for building AI agents.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=13)** LlamaIndex has become popular in the generative AI world for its capabilities and ease of use.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=20)** It's an open-source framework that enables development of GenAI applications.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=26)** Its abstractions allow quick development and deployment of GenAI applications.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=32)** It supports building blocks for building popular GenAI use cases.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=37)** It provides wrappers for integrating with most of the popular GenAI large language models, or LLMs, including OpenAI, Llama, Gemini, and Minstral.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=49)** It supports retrieval augmentation capabilities, including support for an array of vector databases, chunking techniques, embedding models, and retrieval strategies.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=61)** Recently, it has added support for AI agents, also.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=66)** What capabilities does LlamaIndex provide for AI agents?
>
> **[1:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=71)** It has a few pre-built templates for quickly building AI agents.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=76)** The most popular of them is the React template, which we will use in this course.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=82)** It has a vast array of community sources tools and tool specs.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=87)** We will explore them in the next video.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=90)** LlamaIndex has added support for workflows.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=94)** This allows developers to build custom logic on how applications can use agentic capabilities.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=101)** Complex workflows and agents can be built using these capabilities.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=106)** We will explore workflows later in the course.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=110)** LlamaIndex provides out-of-the-box integration between its agentic capabilities and its LLM and RAG capabilities.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=118)** It also has debugging and monitoring capabilities, which can be used to observe and troubleshoot agent behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (6), ai (5), [[Generative AI]] (1), open-source (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** llm (1), rag (1)
> **Cross-References:** in the next (1), later in (1)
> **Exercise Files:** template (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Tools and toolspecs in LlamaIndex
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=0)** - [Instructor] LlamaIndex provides an extensive set of tools and tool specs as part of [LlamaHub.ai](https://LlamaHub.ai).
>
> **[0:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=7)** Let's explore [LlamaHub.ai](https://LlamaHub.ai) in this video.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=11)** This is a portal for community sources and tools that can be quickly used with the LlamaIndex framework for building generative AI capabilities, including AI agents.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=23)** For example, let's explore embeddings.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=28)** On searching for embedding, we see a number of options on using popular embedding models and frameworks.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=36)** Let's search for cohere here.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=41)** Here we see the support for cohere embedding.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=44)** Let's click on this link.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=47)** Here we can see the package we need to install and its usage also.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=52)** This can then be used with LlamaIndex embedding framework to create embeddings.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=58)** When it comes to AI agents, a key building block is tools.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=63)** We need tools to integrate with any other application, technology, or cloud service.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=68)** LlamaHub provides a number of such tool integrations.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=72)** A tool provides a single function call to integrate with another service.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=77)** A tool spec contains a group of related function calls to integrate with another service.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=84)** Let's explore such tools for Google.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=88)** On searching for Google, we see a number of tools and tool specs.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=94)** For example, the Google search tool spec allows developers to integrate with Google to perform search for a query and retrieve results.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=105)** The Gmail tool spec provides a list of tools to integrate with Gmail to read and write emails.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=113)** Let's explore the Gmail tool spec closely.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=117)** It's part of the LlamaIndex Tools Google package.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=123)** Let's click on the view on GitHub.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=127)** On clicking on examples, we see sample code on how to integrate with Gmail, Google Calendar, and Google search.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=137)** LlamaHub is community sourced, so developers are adding tools for a variety of such services.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=144)** This makes building enterprise AI agents easy as we can quickly leverage existing tools and tool specs to integrate with any enterprise use case.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=155)** We will be using the Wikipedia tool spec later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7), ai (5), [[LlamaIndex]] (4), [[Search]] (4), [[Generative AI]] (1)
> **Documentation:** spec (5)
> **URLs:** [llamahub.ai](https://llamahub.ai) (2)
> **UI Navigation:** click on (2)
> **Analogies:** for example (2)
> **Tools:** github (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)

#### Set up LLM and tools for a LlamaIndex agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=0)** - [Instructor] Let's now get into building a small LlamaIndex agent.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=4)** In this video, we will set up an LLM to use for the agent and also a few basic tools.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=11)** The code for this chapter is available in the Notebook, Code 01XX: A Basic LlamaIndex Agent.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=20)** All agents require an LLM for planning, reasoning, and result generation.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=26)** LlamaIndex provides integrations to a variety of LLM implementations.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=32)** In this course, we will use Azure Open AI based GPT-4.0 model as our LLM.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=38)** Let's first configure this model for use in our AI agent.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=44)** We begin by importing the Azure Open AI package.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=47)** LlamaIndex also uses Async IO for doing asynchronous operations, so we import that package.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=57)** Also, we set up an APA key and then Azure endpoint URL for our LLM.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=63)** The key end endpoint are specific to the Azure account.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=67)** Please use your own key and endpoint URL for the exercise.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=72)** Alternatively, you can also substitute any other LLM model instead of Azure Open AI.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=79)** But in that case, the results may not be consistent with what is shown in the video.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=85)** We then define the LLM model.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=87)** We will use GPT-4.0 as the model.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=91)** The deployment name and the APA versions will be obtained from the Azure account based on how the model is set up there.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=99)** This LLM setup is common for all exercises in this course.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=104)** Now let's proceed to set up functions for the agent.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=108)** We will be building a simple math agent.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=110)** The math agent can be used to take a math problem as input in natural language and solve it using the tools provided.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=119)** We have two tools here.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=122)** Find sum tool that will be used to add two numbers and a find product tool that will be used to multiply two numbers.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=130)** These tools are defined as functions.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=134)** Let's explore how the functions are set up.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=137)** We can make any Python function as a tool.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=140)** For this, it needs to follow certain conventions.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=144)** The first function is the find sum function that takes two numbers, X and Y, and returns their sum.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=151)** The dark stream comment is important here.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=154)** It explains what the function does.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=157)** This comment is provided as a tool description to the LLM.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=161)** The LLM uses this description to understand the capabilities of the tools, its inputs and outputs, and then decide if it wants to use the tool or not based on the input query.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=175)** A second function find product is also defined in a similar manner.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=180)** We will create and execute the AI agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (10), [[Microsoft Azure|Azure]] (6), ai (5), [[LlamaIndex]] (4), [[GPT-4]] (2)
> **Env Vars:** llm (10), gpt (2), apa (2), url (2)
> **Prerequisites:** set up (5), configure (1), setup (1)
> **CLI Commands:** find (4), make (1), python (1)
> **Versions:** 4.0 (2)
> **Cross-References:** in the next (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### Create and execute a LlamaIndex agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=0)** - [Instructor] Let's now proceed to create and execute the simple AI agent.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=5)** We first need to convert the two functions we created into tools that the LLM can use.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=11)** For this, LAMA Index provides an abstraction called function tool.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=15)** We can create the SUM tool and product tool by using this abstraction and applying it on the functions we created.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=25)** For the agent, we use the prebuilt React agent available in LAMA Index.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=30)** We will discuss React concepts in the next chapter.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=34)** For now, we simply create the React agent using the list of tools and the LLM.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=39)** The verbose flag can be used to provide detailed logs on the inner workings of the agent.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=46)** We then test the agent by calling the chat method in the agent.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=51)** This is a synchronous method.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=53)** We ask the question, what is two plus two?
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=56)** Then we see verbose logs on what the agent is doing under the hood.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=61)** First, it determines that it needs to use a tool to answer the question.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=66)** It picks the correct tool, find sum.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=69)** It also determines the inputs to the tools with X and Y set as two and two respectively.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=76)** On executing the tool, it obtains an observation as four.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=82)** It analyzes the result and determines that it has enough information to provide the answer.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=87)** It produces the answer as four.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=90)** We now ask a more complex question, multiply two by three, and then add four.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=96)** The agent goes through the same process again.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=99)** The first step it determines is to multiply two by three.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=103)** For this, it chooses the defined product tool.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=107)** It obtains the result as six.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=110)** Then it uses the find sum tool to add six with four, it obtains the final observation as 10.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=118)** Here we can see that the agent is able to break down the problem into multiple subtasks and then execute the tasks.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=125)** This example demonstrates the planning and tool use patterns for agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), llm (2), product (2), ai (1), next (1)
> **Env Vars:** llm (2), lama (2), sum (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Build a Healthcare Assistant Agent

[↑ Back to Table of Contents](#table-of-contents)

#### What is ReAct?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=0)** - [Instructor] Before we proceed with the exercises, let's quickly discuss the ReAct framework, which we will use in these exercises later.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=8)** The ReAct framework is a popular framework for building AI agents.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=13)** It was originally published as a paper and then adopted by popular agent frameworks.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=19)** ReAct stands for "Reason" and "Act."
>
> **[0:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=22)** It involves using the LLM to first understand and reason the user request, then act upon it.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=28)** It is an iterative process using the LLM to decide on the next execution step, executing the step, and then using the LLM to decide if there are more steps needed.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=40)** ReAct provides enhanced explainability for the actions taken by the agent.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=46)** It has multiple use cases, including answering customer queries, deciding on the course of action for a workflow, or reviewing a document.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=56)** How does the ReAct framework work?
>
> **[0:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=59)** It uses the thought, action, observation pattern.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=63)** Let's say we have a user trying to interact with the agent.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=68)** The user sends a question or prompt to the agent.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=72)** The question or prompt first goes through a thought block.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=76)** Here, an LLM is used to analyze the input and decide on the next set of steps to execute.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=83)** This set of steps or actions are then sent to the action block.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=88)** Here, the agent executes a set of actions, including tool calling, processing, or computations.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=95)** The actions generate a set of outputs.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=98)** The outputs are sent to the observation block.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=102)** Here, an LLM is used to validate the results obtained from the actions, and if the results satisfactorily answer the user question.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=112)** If the LLM decides that there are more steps needed, it is sent back to the thought block.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=117)** The thought block will analyze the question and the intermediate results available to decide on the next set of actions.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=125)** This then goes through an iterative process of thought, action, observation until satisfactory results are obtained.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=133)** The final answer is then sent to the user by the observation block.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=138)** The LLM plays a key role in both the thought and observation blocks to make decisions and trigger actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (7), [[React.js|React]] (5), next (3), prompt (2), ai (1)
> **Env Vars:** llm (7)
> **Definitions:** is a  (1), stands for (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Healthcare ReAct assistant: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=0)** - Let's now build a practical use case for AI agents.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=4)** The healthcare assistant.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=6)** We will use this use case to demonstrate how an agent can be built using the React framework in LAMA Index.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=13)** What are the functions of this healthcare assistant?
>
> **[0:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=17)** It is an AA assistant or chat bot that provides self-service to patients by answering any questions they have about healthcare.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=26)** Specifically, we will use this agent to answer questions regarding symptoms and associated medical conditions.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=34)** A patient can ask a question about a symptom they are experiencing, and the assistant can provide guidance on possible diseases or conditions.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=44)** For this, the agent will use Wikipedia to search and find answers.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=49)** In addition, the assistant can also recommend medications and their dosages.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=54)** For this purpose, it will use a knowledge base about popular medical conditions, recommended medications, and dosages.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=62)** What does the design for this assistant look like?
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=66)** We first have a search tool for Wikipedia.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=69)** There is a prebuilt Wikipedia tool spec available in LAMA Hub.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=74)** We will use this tool spec to search and filter answers based on patient questions about symptoms and conditions.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=83)** Next, we have a retriever called "medication-tool."
>
> **[1:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=86)** This retriever uses a medications vector database.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=90)** This database is built using a document that contains information about medical conditions and medications.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=98)** This demonstrates how Retrieval Augmented Generation, or RAG can be brought into an agent as a tool.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=105)** The healthcare assistant is built using these two tools.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=109)** Based on the input question, this agent uses an LLM to think, and create an action for answering the question.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=117)** The LLM can choose to use one or both of the tools to find the answer.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=122)** It will then analyze or observe the answer to make sure that it has sufficient information to answer the original question.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=130)** If not, it will produce further actions to search for answers.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=135)** A user can provide a question like, "What medication should I take for fever?"
>
> **[2:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=141)** The healthcare agent will then use the React framework to answer the question.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=146)** Let's now proceed to implement the design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), [[React.js|React]] (2), database (2), llm (2), ai (1)
> **Env Vars:** lama (2), llm (2), rag (1)
> **CLI Commands:** find (2), make (1)
> **Documentation:** spec (2)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - let (1)

#### Set up Wikipedia tools for healthcare assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=0)** - [Instructor] The implementation for the healthcare assistant is available in the exercise notebook code_02_XX, A Healthcare Assistant Agent with React.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=11)** Do note that this example is for illustrative purposes only and should not be used in healthcare environments without required regulatory guardrails.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=22)** We will implement the Wikipedia tool for the assistant in this video.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=27)** We will set up the LLM similar to how we did it in the previous chapter.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=32)** In addition for building a Vector database, we also need an embedding model.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=37)** We will use the text embedding three large model configured in the same Azure account as the LLM.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=45)** Do note that we are using the settings class to store these models.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=50)** This is to enable them to be used during the vector database creation process.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=56)** To create the Wikipedia tools, we will use the Wikipedia tool spec available in Llama Hub.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=63)** We simply load the tool spec and create a list of tools out of it.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=69)** We then print the list of tools and descriptions.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=73)** The Wikipedia tool spec has two tools, namely search data and read search data.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=79)** When a query is provided, the search data is used to find Wiki pages that contain answers to the query and download the pages.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=89)** Then the read search data tool is used to search the downloaded pages and extract relevant sentences for the query.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=97)** The description shown here is passed to the LLM as part of tool descriptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (5), data (4), llm (3), database (2), [[React.js|React]] (1)
> **Env Vars:** llm (3)
> **Documentation:** spec (3)
> **Warnings:** note that (2)
> **CLI Commands:** find (1)
> **Cross-References:** previous chapter (1)
> **Exercise Files:** download the (1)
> **Analogies:** similar to (1)

#### Set up RAG for medications
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=0)** - [Instructor] Now we will proceed to create the medications tool using out of the box LlamaIndex capabilities to set up a vector database.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=9)** We will use an in-memory vector store provided by LlamaIndex natively.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=14)** For production implementations, it's recommended to use alternate vector databases like Pinecone or Milvus.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=23)** The list of medications and dosages are available in the medications and dosages.JSON file that is part of the exercise files under the datasets directory.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=35)** This JSON file only contains a small list of popular medications for illustration purposes.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=42)** A real world data set would contain an extensive list of medications.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=48)** In the code, we first load this JSON file using the JSON pre-built package in LlamaIndex.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=55)** Then we chunk this document with a chunk size of 200.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=60)** Finally, we create a vector index with the chunked data.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=64)** The embedding model is used underneath to do the embedding.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=69)** Once the vector database is ready, we can create a query engine with it in order to execute queries on the vector database.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=77)** Until this step, we are using the standard RAG implementation capabilities available in LlamaIndex.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=85)** Then using this query engine, we create a tool.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=89)** LlamaIndex provides the from default function in the query engine tool to automatically convert a query engine to an agent tool.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=98)** We also provide a description of the tool that can be used by the LLM to understand its capabilities.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=106)** Now that the tools are ready, we will proceed to set up and execute a React agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (5), [[JSON]] (4), database (3), data (2), [[Vector Databases]] (1)
> **Env Vars:** json (4), rag (1), llm (1)
> **Prerequisites:** set up (2)
> **File Paths:** dosages.json (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Set up and execute the healthcare agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=0)** - [Instructor] Let's now use the tools we created to build a React agent.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=4)** For the list of tools, we concatenate the Wikipedia tools list with the medication tool.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=10)** This provides three tools for the LLM to use.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=14)** We then need a system prompt that defines the purpose of the healthcare assistant.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=19)** For this, we create a context with descriptions that contain the persona of the agent, the tools available, and how the tools should be used.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=30)** Then we create a React agent for the healthcare assistant with the prebuilt function in LlamaIndex.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=37)** We provide the list of tools, the LLM, and the context as inputs.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=42)** We also set the verbose flag to true so we can analyze how the agent is performing the thought action observation loop.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=51)** Now we ask the question, "Which medication should I take for arthritis?"
>
> **[0:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=57)** The LLM first goes through the thought process and decides that it needs to use the tool.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=62)** For this, the LLM chooses the query engine tool that is built on the medications JSON file.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=69)** This is the action.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=70)** It then executes the action and observes the result.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=75)** It is able to get information about the medication to use.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=79)** Based on this, it is able to generate the final answer.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=83)** This exercise demonstrates how React agents can be built quickly with the pre-built functions in LlamaIndex.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=91)** React agents can also be built using custom workflows, which we will discuss in later chapters in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), llm (4), [[LlamaIndex]] (2), prompt (1), [[JSON]] (1)
> **Env Vars:** llm (4), json (1)
> **Speakers:** - [instructor] (1)


### 3. Build a Summarization Agent

[↑ Back to Table of Contents](#table-of-contents)

#### Summarization agent design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=0)** - [Instructor] In this chapter, we will explore how to implement the reflection pattern for agents with LlamaIndex.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=8)** Reflection is the use of an LLM to review the output of another LLM or person, and use that feedback to improve the output.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=18)** One popular application of reflection is in summarizing documents.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=23)** In this chapter, we will implement a summarization agent with LlamaIndex.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=29)** So what are the requirements for this agent?
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=32)** This agent will summarize a product specification document using an LLM.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=37)** It will use a system prompt to detail the requirements for the summarization.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=43)** The agent uses an LLM for summarization.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=46)** It'll also use the same LLM for reviewing the summary and providing feedback.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=53)** It's also possible to use different LLMs for summarization and review.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=58)** The feedback generated is then used to improve the summary, either for a fixed number of iterations or until the summary meets the requirements stated in the system prompt.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=70)** We will build a summarization agent using prebuilt agents available in LlamaIndex for this purpose.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=78)** LlamaIndex has an introspective package that provides out-of-the-box agents for executing the task, as well as reviewing the task.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=87)** Here, we create an introspective agent in LlamaIndex.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=92)** The introspective agent has two workers.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=95)** There is the main agent worker whose job is to generate the summary, or any other content based on the system prompt.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=102)** Then it also has a reflective agent worker that is used to review and provide feedback for the output generated by the main agent worker.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=113)** A user sends a raw document for summarization to the introspective agent.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=118)** This is then passed on to the main agent worker.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=121)** The main agent then generates a summary.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=124)** The summary is provided to the reflective agent worker for review.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=129)** The reflective agent worker then generates feedback for the candidate summary.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=134)** The main agent worker then analyzes the feedback.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=137)** If there are specific improvements suggested, it will implement these improvements, generate another candidate summary, and sends it back to the reflective agent worker for feedback.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=148)** This generation and reflection process continues until the reflective agent worker is satisfied with the summary.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=157)** When that happened, the main agent worker then sends the approved summary as output back to the user.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=164)** Let's now proceed to implement the summarization agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (5), llm (5), prompt (3), application (1), product (1)
> **Env Vars:** llm (5)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Create the introspection agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=0)** - [Instructor] The code for the summarization agent is available in the notebook code_03_XX Summarization with reflection.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=8)** Similar to the other exercises, we will begin by setting up the LLM.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=14)** In this video, we will create the introspection agent using available llama_index capabilities.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=21)** We first set up the SelfReflectionAgentWorker.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=25)** This is the reflective agent worker we discussed in the previous video.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=29)** For this, we use the SelfReflectionAgentWorker class.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=34)** We only need to pass in the LLM to be used for reflection or review.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=39)** We set the verbose flag to True to log the internal workflow of the agent.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=45)** Next, we set up the IntrospectiveAgentWorker.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=49)** This worker takes in two key parameters, the self_reflection_agent_worker and the main_agent_worker.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=55)** For the main_agent_worker, we can pass in an LLM.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=59)** We can also leave it blank, in which case the same LLM provided in the self_reflection_agent_worker will be used.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=68)** We then create a system prompt that defines the role of the introspective agent.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=73)** It has specific instructions on what the summary should look like.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=78)** In this case, we are calling out that the summary should focus on performance and safety.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=83)** It should also be less than 50 words.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=86)** This is what the reflection agent will use to review to see if the candidate summary meets the specific criteria.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=94)** We then add the system prompt to the chat history.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=97)** Finally, we create the introspective agent using the introspective_agent_worker, along with the chat_history.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=105)** We also set the verbose flag to True.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (4), prompt (2), next (1)
> **Code Identifiers:** self_reflection_agent_worker (2), main_agent_worker (2), llama_index (1), introspective_agent_worker (1), chat_history (1)
> **Env Vars:** llm (4)
> **Cross-References:** we discussed (1), previous video (1)
> **Prerequisites:** set up (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Execute the introspection agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=0)** - [Instructor] Now, let's proceed to use the introspective_agent to generate a summary.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=6)** We have a document called EcoSprint_Specification_Document.pdf in the datasets directory in the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=14)** This document contains some specifications about the EcoSprint product.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=19)** We will summarize this document with our introspection agent.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=24)** We first load this document using the PyMuPDFReader.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=29)** We pick the first page of the document and print its contents.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=34)** To execute the introspective_agent, we will use the async mode.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=39)** For this, we will call the achat method, also called asynchronous chat.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=44)** The await class is used to await for the results of this call.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=49)** We just pass in the source document content as input, and then print the results.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=54)** llama_index now prints what is going on inside the agent.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=59)** First, it prints this step input, which is the entire document.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=64)** Then, it adds this message to its internal memory.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=67)** This is needed for tracking the inputs, all the candidate summaries and associated feedback.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=76)** The document goes to the Reflection worker for review.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=80)** The Reflection worker first uses a flag is_done to specify if the summary is ready or not.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=86)** Then, it provides feedback on what is required in the summary.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=92)** Then, the main worker creates a summary with the correction label.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=98)** The summary is again sent back to the Reflection worker for its review.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=103)** Now, we see that the is_done flag is set to true and the feedback is satisfactory.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=109)** This summary is then returned as the response.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=112)** The summary now focuses on performance specifications like acceleration and safety features like multiple airbags.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=122)** Any kind of generation and reflection can be done using the introspective_agent worker.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=128)** If custom decision making is needed, then workflows can be used to build reflection agents.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=134)** We will build workflows in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (1), next (1)
> **Code Identifiers:** introspective_agent (3), is_done (2), llama_index (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Workflow Concepts in LlamaIndex

[↑ Back to Table of Contents](#table-of-contents)

#### Intro to LlamaIndex workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=0)** - [Instructor] A workflow is a sequence of steps or actions that are executed to accomplish a task.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=8)** LlamaIndex supports the concept of workflows, which can help in building custom and powerful AI agents.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=16)** What is a LlamaIndex workflow?
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=19)** It is an event-driven abstraction layer.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=22)** It uses a sequence of steps to achieve a given goal.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=26)** The steps are driven by events.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=29)** Let's discuss this in further detail in this video and the following videos.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=34)** A workflow in LlamaIndex consists of steps.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=38)** These steps are interconnected using events.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=42)** The steps are the nodes and the events are the arrows connecting the nodes.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=47)** A step is a unit of work in LlamaIndex workflows.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=52)** A step should be triggered by one or more events to begin its execution.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=57)** It takes inputs, performs a specific task and generates outputs.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=62)** It's equivalent to a function called in programming.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=66)** A step, once finished, may emit one or more events.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=71)** In LlamaIndex, a workflow runs asynchronously.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=75)** This means it can concurrently execute multiple steps in separate threads, and the results can converge at the end.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=83)** What are some of the use cases for workflows in LlamaIndex?
>
> **[1:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=88)** There are several uses for workflows.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=90)** They can help in building custom and powerful applications.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=95)** The workflow concept is independent of GenAI, so you can build non-AI process automations too with LlamaIndex workflows.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=105)** We will build a simple non-AI workflow later in the chapter.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=110)** Workflows can be used to build generative AI applications that can contain pre-processing steps.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=116)** LLM calls, and post-processing steps.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=120)** Retrieval augmented generation, or RAG, applications can be built using them.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=126)** Of course, we can build agentic workflows to build AI agents.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=130)** The asynchronous nature of workflows helps building powerful agent-to-agent and agent-to-tool communications.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=138)** We can combine any of the above use cases to create complex workflows.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=143)** Let's explore more about the steps and events in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (7), ai (4), [[Programming]] (1), [[Generative AI]] (1), llm (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** llm (1), rag (1)
> **Cross-References:** later in (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### LlamaIndex workflow components
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=0)** - [Instructor] Building a workflow in LlamaIndex requires a few building blocks.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=5)** Let's explore what these building blocks are, and then review a sample workflow.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=11)** How do we define a workflow with LlamaIndex?
>
> **[0:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=15)** We need to create a class to represent a given workflow.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=19)** This class should inherit from the Workflow base class.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=23)** The Workflow base class comes built in with LlamaIndex.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=28)** It provides a general infrastructure for executing a workflow.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=32)** The init method for the class can be used to pass in input parameters to the workflow to handle a query.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=41)** The class can have instance variables where inputs as well as intermediate data elements can be cached during the execution of the workflow.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=51)** The workflow can contain both step and non-step methods.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=55)** Step methods are wired together with events.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=59)** Non-step methods can be called from step methods to perform specific processing.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=65)** The LlamaIndex workflow framework does the heavy lifting of executing the workflow.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=71)** We need to only focus on the specific application logic.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=76)** Let's discuss more about steps in LlamaIndex.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=80)** A step is an asynchronous method in the workflow class.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=84)** The async qualifier is needed for all steps as the workflow is executed asynchronously.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=91)** The definition of the step specifies which events will trigger the step and which events can be emitted by the step.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=100)** A workflow step otherwise is a regular Python code that can perform any function, including computations, calling other functions or accessing third-party services.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=112)** The step, like a regular class member function, can access instance variables.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=117)** There is also a special workflow context that is available for use with steps.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=124)** What about workflow events?
>
> **[2:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=126)** Events used in workflows need to be declared outside the workflow.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=131)** They are defined as sub-classes of the built-in events class.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=135)** And event can have attributes.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=138)** These attributes can be used to pass data between steps.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=142)** The event originating step can set up the attributes and the event receiving step can read these attributes.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=150)** There are two special events in LlamaIndex workflow framework.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=155)** These events are not required to be declared and are always present in all workflows.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=161)** The start event is a special event that is triggered by the workflow framework when the workflow is invoked by the user.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=169)** The first step of the workflow need to listen to this StartEvent.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=172)** The StopEvent is a special event that the workflow, the last tip in the workflow needs to trigger this event.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=181)** The StopEvent has an attribute called result through which the final output of the workflow is returned to the user.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=189)** Here is a sample workflow in LlamaIndex.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=193)** It begins with the StartEvent.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=195)** This is used to trigger the workflow.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=198)** The first step in the workflow is Step 1.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=201)** It listens to the StartEvent.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=203)** Step 1 then triggers Event 1.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=207)** Step 2 listens to Event 1 and is hence triggered by Event 1.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=212)** In addition, Step 1 may also trigger Event 2.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=216)** This is an example of a single-step triggering multiple events.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=221)** Step 3 will be triggered by Event 2.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=225)** Step 3 will trigger Event 3, which in turn triggers Step 1.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=229)** This establishes a cyclic process between Step 1 and Step 3.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=235)** Step 3 will also trigger event four when it needs to stop the cyclic process with Step 1.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=241)** Thus, Event 4 is triggered by both Step 2 and Step 3.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=246)** Step 4 is the last step in the workflow and it generates a StopEvent.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=251)** We will implement a simple workflow later in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (7), data (2), application (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (4), is an  (2), defined as (1)
> **Prerequisites:** set up (1), required to (1)
> **CLI Commands:** python (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### Managing data in LlamaIndex workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=1)** - [Instructor] While steps and events are useful for executing logic and passing control, they won't be successful without moving and sharing data.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=11)** When a workflow is executed, data needs to be managed, steps need to read input data, modify data, and pass data around to other steps.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=23)** Inputs to the workflow needs to be shared and output from the workflow need to be sent back to the user.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=30)** There are a few options that exist for managing data in a workflow.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=35)** There are three options available for data sharing and management in workflows.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=41)** First, there are instance variables.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=44)** A workflow is defined as a class, so it can have instance variables.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=49)** These instance variables can be set during initialization and then shared across steps.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=56)** Typical use of instance variables is for caching user input and any additional parameters that apply for the entire workflow.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=65)** Next, workflows also support a context.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=69)** A context is a shared read/write cache that is accessible to all steps in a workflow.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=76)** Each step can read data from the cache as well as write or update them.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=80)** This is typically used for global counters or caching intermediate data generated by the steps.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=87)** A third option is event attributes.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=90)** Each event can also carry additional data elements.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=95)** This is set by the step triggering the event and can be read by steps that are triggered by the event.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=102)** This is typically used for receiving inputs to steps and sending out final outputs of steps to the next step.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=110)** The use cases for the options do overlap, and it may be a personal preference to use any of these options.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=117)** Let's now implement a simple non-AI workflow to exercise the concepts learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), next (2), management (1), ai (1)
> **Definitions:** defined as (1), is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### A simple LlamaIndex workflow: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=0)** - [Instructor] Let's discuss the design of the simple workflow that we will build for utilizing LlamaIndex Workflow framework.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=8)** Let's begin by defining the requirements for this workflow.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=13)** This is a non-AI use case.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=16)** There is no AI or LLMs involved here.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=19)** The task for the workflow is to just loop three times and exit.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=24)** It'll have two steps, and the looping will happen between these steps.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=29)** The goal for this exercise is to illustrate how workflows are created and executed in LlamaIndex.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=37)** We will utilize various building blocks that we discussed earlier, namely workflows, steps, events, and data management.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=47)** Here is the simple workflow we want to build.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=50)** The start event for the workflow triggers a step called Run Loop.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=55)** This is the first step in the workflow that will receive the inputs, including the number of times to loop.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=62)** The Run Loop step will trigger a Validate Event.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=65)** This event will trigger a second step called Check Iterations.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=70)** The Check Iterations step will check the number of loops or iterations completed.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=75)** If that number is less than the maximum iterations expected, it'll trigger the Continue Event.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=82)** This event will trigger a Run Loop again.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=85)** This process will continue until the maximum number of iterations is reached.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=90)** When the maximum number of iterations is reached, the check iteration step will trigger a Stop Event.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=97)** This will end the workflow.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=99)** Let's not proceed to implement the workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (2), ai (2), data (1), management (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Build and execute a simple LlamaIndex workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=0)** - [Instructor] The code for this example is available in the notebook code zero four, XX A Simple Workflow The first cell has commented out code.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=9)** This essentially initializes the Async IO library for running workflows asynchronously.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=16)** This is not needed for notebooks, but if we are building Python executable services, then this is required.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=24)** We begin by importing a set of classes from the workflow package.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=29)** We define the two events for the workflow, namely ValidateEvent, and ContinueEvent.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=35)** Both of them inherit from the base events class and as one attribute called iterations.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=43)** Then we define the simple workflow class.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=46)** This class inherits from the base workflow class.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=50)** The first method is the init method.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=52)** We can collect any input parameters through this method.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=56)** We collect the number of loops or iterations to execute in the workflow.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=62)** We stored this in an instance variable.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=65)** We need to also explicitly call the init method on the base class to fully initialize the workflow.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=73)** Then we proceed to define the run loop step as a member function.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=77)** The art step decorator is needed to identify a workflow step.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=82)** It should also be defined as async.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=85)** As inputs to this step, we get the workflow context and the event that triggered the workflow.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=93)** This is auto-populated by the workflow framework.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=96)** This is where we define the events that can trigger the step, the start event, or the continue event can trigger the run loop step.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=105)** This step in turn triggers the validate event.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=109)** Inside the step, we check if the step was triggered by the start event.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=113)** If so, we initialize the number of iterations and the current result variables.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=120)** If continue event triggered the step, then we read the current result from the context.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=126)** This read operation is asynchronous.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=130)** We also read the number of iterations completed so far from the ContinueEvent.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=135)** Next, we bump up the number of iterations by one.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=139)** We also set the current result by using the number of iterations completed and the maximum number of iterations.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=147)** We print the current result as a log message.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=151)** Now we set the current result in the context with the updated value.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=156)** We then trigger the validated event by setting the number of completed iterations.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=162)** Next, we define the check iteration step.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=165)** This is triggered by the ValidateEvent, and it can emit a StopEvent or a ContinueEvent.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=173)** Inside the step, we read the current number of iterations from the event, the max number of iterations from the instance variable and the current result from the context.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=183)** We essentially exercise all three data management methods.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=188)** Then we check if the maximum number of iterations is reached.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=193)** If so, we trigger the StopEvent.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=196)** This is returned with the current result.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=199)** If not, we trigger the ContinueEvent with the number of iterations completed.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=205)** If this code appears disjointed, I recommend going through the design once again to understand how the steps and the events work together.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=214)** LlamaIndex provides a function, draw all possible flows to draw a picture of the workflow.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=220)** This shows the actual workflow that was implemented.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=224)** This allows us to make sure that we implemented the events and steps as desired and debug potential workflow issues.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=232)** This code may not run in code spaces, hence it is commented out, but you can use it in other environments to check your workflow.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=241)** Now, let's proceed to run the workflow.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=244)** First, we initialize the workflow object.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=247)** We have the standard input parameters like timeout and verbose.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=251)** The timeout can be used to set the maximum number of seconds to wait for the workflow to finish.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=257)** Given that the workflow is asynchronous, this prevents workflows from being stuck forever if there is a problem.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=265)** The verbose flag is used to print debug messages.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=269)** To run the workflow, we call the run method asynchronously and await for the results.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=274)** The results are printed.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=277)** We see that the workflow runs for three iterations.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=281)** The debug messages show the steps being invoked and the events that are triggered at each step.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=287)** Now, we will proceed to implement an AI React agent using workflows in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[Python (Programming Language)|Python]] (1), data (1), management (1), [[LlamaIndex]] (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** defined as (1), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 5. Build a Doctor Scheduling Assistant with Workflows

[↑ Back to Table of Contents](#table-of-contents)

#### Doctor scheduling assistant: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=0)** - [Instructor] In this chapter, we will implement a doctor scheduling agent for patients using workflows.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=7)** Let's discuss its design in this video.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=11)** What are the functions for the doctor scheduling assistant?
>
> **[0:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=15)** This is an agent that allows patients to search for doctors based on their specialty.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=21)** It also allows them to schedule appointments.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=24)** The assistant has a database of doctors.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=27)** Based on the patient query, the assistant can search this database to provide a list of doctors who match the query.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=35)** It also triggers an appointment request for the doctor.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=39)** In a real-life scenario, the system can actually set up an appointment by integrating with the scheduling system in the doctor's office.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=48)** For the sake of this exercise, though, it will merely add a request record to a CSV file.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=54)** This is to demonstrate how agents can be used to execute actions.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=59)** What does the design for the scheduling agent look like?
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=63)** First, we have a vector database about doctors.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=67)** This is created from a JSON file that contains a list of doctors, their specialty, and years of experience.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=74)** The doctor search tool is built over this vector database.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=79)** It also has a scheduling tool that can schedule appointments with the doctor.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=84)** The appointment requests are appended to a CSV file with the name of the patient, the name of the doctor, and other appointment details.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=93)** The scheduling agent uses both these tools to search for doctors and schedule appointments.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=100)** A user can provide a query, like, show me the list of cardiologists.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=105)** The agent will use an LLM, and the available tools to find the list of cardiologists, and return the results to the user.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=113)** Let's now proceed to implement this agent as a custom workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), database (4), [[Microsoft Office|Office]] (1), [[JSON]] (1), llm (1)
> **Env Vars:** csv (2), json (1), llm (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Set up the doctor database tool
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=0)** - [Instructor] The code for this chapter is in the notebook code_05_xx ReAct agent with Workflows.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=7)** Similar to other exercises, we will start by setting up the LLM and the embedding models.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=14)** Now, we proceed to set up the Doctor database tool.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=20)** We have a JSON file Doctors database.json in the datasets folder with a list of 10 doctors, their specialisties, and years of experience.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=31)** This is a small sample and a real-life database will have many more doctors and more information about them.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=38)** We load up this JSON with the JSONReader in llama_index.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=43)** Then, we split the document using the SentenceSplitter.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=47)** Finally, we create the vector index using the in-memory vector store in llama_index.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=54)** Next, we create a query engine using the vector index for doctors.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=59)** Then, we create the doctor_tool by using the QueryEngineTool feature.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=64)** As a description, we provide information about the capabilities of this vector database.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=70)** This is provided to the LLM to understand the capabilities of the tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), [[JSON]] (3), llm (2), [[React.js|React]] (1), next (1)
> **Env Vars:** llm (2), json (2)
> **Code Identifiers:** llama_index (2), doctor_tool (1)
> **File Paths:** database.json (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Set up the doctor scheduling tool
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=0)** - [Instructor] In this video, we will set up the scheduling tool for doctors.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=5)** The goal is to create a record in the scheduling CSV file called Doctor Appointment Requests.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=12)** Under the Dataset Directory.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=14)** This file captures the requested date, the patient name, the doctor's name, and some scheduling comments.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=22)** In a real life scheduling system, the CSV will be replaced by an actual scheduling system integration.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=29)** In the code, we first create a function that can create a scheduling request.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=34)** It takes this input, the patient name, the doctor name, and additional scheduling comments.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=41)** The dog string command provides a detailed description of the capabilities of the function, its inputs and outputs.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=49)** We first create a timestamp for when the scheduling request was created.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=54)** We use the month and day.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=56)** Next we create a list of parameters corresponding to the columns in the CSV.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=62)** Then we up end the row to the CSV file.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=66)** We return true if this operation was successful.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=70)** It will return false otherwise We have a test code commanded out that can be used to test the function in isolation.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=78)** Next, we create a tool based on this function, using the function tool class in LlamaIndex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), [[LlamaIndex]] (1)
> **Env Vars:** csv (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Set up custom events for scheduling
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=0)** - [Instructor] Now we will proceed to create a workflow.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=4)** The embedded image shows the workflow that we will create for the exercise.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=10)** This workflow can be considered a template for React Agents that utilize tools.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=15)** We can of course customize this workflow as needed for our use case.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=21)** The first step in the workflow is the new user message step.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=25)** This step is used to cache the user input in workflow memory.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=30)** This emits the PrepEvent.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=33)** The next step is the prepare_chat_history.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=36)** This step adds the user input and system prompt to the chat history for this request.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=42)** It then emits the InputEvent.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=45)** The InputEvent triggers the handle_llm_input step.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=49)** This is the reasoning step.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=51)** It sends the chat history to the LLM to determine the next set of actions.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=56)** If the actions determined by the LLM is to do tool calls, it emits a ToolCallEvent.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=64)** This then triggers the handle_tool_call step.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=67)** This step executes the tool calls defined by the LLM, saves the results of the tools, and triggers the PrepEvent again.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=76)** Now the prepare_chat_history step will add the tool call results to the chat history and trigger the InputEvent again.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=83)** This iterative process of reasoning and tool calling continues until the handle_llm step determines that it has all the information needed to generate the final output.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=95)** In that case, it will generate the final output and trigger the StopEvent.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=99)** To implement this workflow, we will first set up the events needed for the workflow.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=105)** The PrepEvent is the event with no attributes.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=108)** The InputEent has a list of chat messages for the LLM to consume.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=113)** The ToolCallEvent has a list of tools to be executed along with their inputs.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=119)** We will create the custom workflow in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (4), next (3), [[React.js|React]] (1), prompt (1)
> **Code Identifiers:** prepare_chat_history (2), handle_llm_input (1), handle_tool_call (1), handle_llm (1)
> **Env Vars:** llm (4)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create a custom workflow for scheduling assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=0)** - [Instructor] Let's now implement the ReAct workflow for the doctor scheduling agent.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=6)** The imports are pretty similar to the workflow we created in the earlier course.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=12)** Let's now explore the scheduling agent class.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=16)** The init function receives key inputs for executing the workflow.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=20)** It has the LLM to be used for reasoning and generation.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=24)** It has the list of tools that are available to the agent.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=28)** The extra context variable is used to pass in the system prompt for the agent.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=34)** In the init function, we save the inputs to the instance variables.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=39)** In addition, we will also set up the memory variable that will be used to store chat memory.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=45)** We initialize the formatter with the system prompt.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=48)** We will continue adding more messages to the memory later in the workflow.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=54)** The output parser is needed to parse the LLM outputs.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=58)** The sources list is used to store information returned by tool calls.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=63)** Next, we set up the new user message step.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=67)** This is executed only once with the start event.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=70)** This step receives the user query, which is the input to the agent.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=75)** This message is stored in agent memory as part of the chat message.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=80)** It also initializes a context variable called current reasoning.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=85)** This will be updated as the workflow executes.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=89)** Finally, the PrepEvent is emitted by the step.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=94)** Then comes the prepare chat history step.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=96)** Here we collect the system prompt, previous chat messages and current reasoning and create the chat history input to the LLM.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=105)** This is required for the LLM to understand all the past history when executing the workflow.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=112)** For this, we read the chat history from memory.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=114)** We get the current reasoning from the context.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=117)** Then we use the formatter to format this information into the LLM input.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=123)** Finally, we emit the input event using this LLM input.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=128)** The next step is the handle LLM input step that is triggered by the input event.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=133)** Here, we send the LLM input to the LLM to get its next action.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=138)** Then we analyze the response from the LLM.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=141)** This is returned in the reasoning step variable.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=145)** Upon this step to the current reasoning context variable, the LLM in ReAct can return to alternatives.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=153)** If the LLM says that the work is done, then it is the final generated answer.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=159)** We capture the answer from the response attribute and create the final result.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=165)** We send the result as part of the StopEvent.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=169)** If the LLM provides an action step, then we extract the tool name to use and the input parameters for the tool.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=177)** Based on this data, we trigger the the tool call event.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=181)** We also catch an exception in case there are errors in the reasoning process.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=186)** In this case, we trigger the PrepEvent again.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=190)** The next step is the handle tool call step.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=193)** This is triggered by the tool call event and its purpose is to execute the tools chosen by the LLM.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=200)** We get the list of tool calls to execute from the tool call event.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=203)** We also get the names of the tools.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=206)** Do note that the LLM may choose to execute multiple tools as part of its actions.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=213)** So we iterate through the list of tools.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=216)** We first check if the selected tool exists.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=219)** If not, we throw an error.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=222)** We then call each tool with the list of arguments.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=226)** The outputs of the tools is added to the sources instance variable.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=231)** The output is also appended as an observation to the current reasoning context variable.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=238)** If there is an error in calling the tool, mostly because the input parameters chosen by the LLM have a mismatch, we throw an exception.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=248)** Finally, we trigger the PrepEvent to repeat the reasoning and action loop.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=254)** We can draw the workflow using the draw all possible flows function.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=258)** Now the workflow is ready.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=261)** In the next video, we will create an agent with the workflow and execute it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (16), next (5), prompt (3), [[React.js|React]] (2), data (1)
> **Env Vars:** llm (16)
> **Cross-References:** later in (1), in the next (1)
> **Prerequisites:** set up (2)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create and execute the scheduling agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=0)** - [Instructor] Let's now create and execute the doctor's scheduling agent.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=4)** We begin with setting up the list of tools for the agent to use.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=9)** Then we create the system prompt for the agent.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=12)** The system prompt provides a detailed description of the agent persona and the features available.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=18)** We also instruct the LLM to only use the tools available to achieve the results.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=24)** We then proceed to create the scheduling agent.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=27)** We provide the inputs as discussed in the previous video.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=31)** We also provide a timeout and set it to verbose mode.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=34)** Now let's run the agent.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=39)** We will use the run method for this to provide an input.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=42)** The run method is asynchronous, so we will wait for the request.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=48)** We ask a question, which doctors or cardiologists.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=52)** From the traces, we can see how the workflow progresses.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=57)** The LLM requests the use of query engine tool to find the doctors who are cardiologists.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=64)** This then results in a query to the vector database to fetch the lists of doctors.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=69)** It finds one doctor, namely Dr. John Smith.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=73)** The LLM then generates a response and triggers the stop event.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=83)** Let's first review the CSV file with appointments, it's empty.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=91)** We then send a request to the agent.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=93)** Please set up an appointment with John Smith for Ben Jones next week in the afternoon.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=100)** Let's run this code now.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=106)** The LLM this time chooses the scheduled appointment tool.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=110)** This tool then updates the CSV with the appointment request.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=114)** Finally, the LLM generates a success message back to the user.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=120)** Now, when we check the CSP, we see that a request for appointment has been logged based on the user input.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=130)** Now we have a compound request, find a neurologist and request an appointment for Beth Wilson.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=139)** Let's run this request now.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=145)** Now the agent first uses the query engine tool to find a neurologist.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=151)** It finds Dr. Michael Brown.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=154)** Then it calls a schedule appointment tool to set up an appointment with the doctor.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=162)** This then generates a success message.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=167)** Let's go back to the CSV again.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=170)** We now see the new request successfully appended to the CSV files.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=175)** With a custom workflow, we can customize the flow as needed to bring in any kinds of steps or events.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=182)** In the next chapter, we will use this agent as part of a multi-agent workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (5), prompt (2), next (2), database (1), [[Fetch]] (1)
> **Env Vars:** llm (5), csv (4), csp (1)
> **CLI Commands:** find (3)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)


### 6. Multi-agent Systems with LlamaIndex

[↑ Back to Table of Contents](#table-of-contents)

#### Multi-agent systems
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=0)** - [Presenter] Multi-agent system is another agentic pattern that is becoming popular.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=6)** Enterprise workflows are complex, requiring multiple systems and people to work together to achieve a goal.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=14)** Creating specialized agents for specific tasks and getting them to work together, helps achieve complex automation while improving efficiency.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=24)** Why do we need multi-agent systems?
>
> **[0:27](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=27)** Why can't we build one big agent for the same task?
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=32)** Individual agents are built to handle a specific task, or provide services in a specific domain.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=39)** A given workflow or goal, may need multiple tasks to be executed, or require multi-domain expertise.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=46)** Individual agents can collaborate, and coordinate with each other to execute such workflows.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=53)** It mimics how a team of humans work together to achieve a task, each leveraging their individual expertise, while taking help from others in other areas.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=64)** Multi-agent systems follow popular software patterns of separation of concerns and distributed design.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=72)** They help create reusable building blocks.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=75)** A single agent can be built to be part of multiple workflows.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=80)** Each agent can be built in-house, or acquired from open source or third parties.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=86)** This helps in saving costs and time, while keeping solutions simple.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=91)** Following the multi-agent pattern, allows building complex workflows from individual agent building blocks.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=98)** This can leverage existing best-of-breed agents, and minimize custom work.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=104)** In this chapter, we will build a multi-agent system that also uses the routing pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (1), [[Routing]] (1)
> **Speakers:** - [presenter] (1)

#### Multi-agent hospital application: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=0)** - [Instructor] Let's now build a multi-agent hospital application using the agents we built previously in the course.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=8)** We will discuss the design of this multi-agent system in this video.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=12)** The multi-agent hospital application provides a suite of online services for patients.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=18)** In a real life scenario, this will have several agents and backend integrations.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=24)** In this example, we will only use the two agents we built earlier in the course to illustrate a multi-agent application.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=33)** This application is front-ended by the hospital agent, which interacts with patients to receive and service their requests.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=42)** The hospital agent integrates with the healthcare agent that can answer questions about symptoms, diseases, and medications.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=50)** We will reuse the healthcare agent that we built in chapter three for this purpose.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=55)** The scheduling agent helps patients to search for doctors by specialization and request appointments.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=63)** We will reuse the scheduling agent that we built in chapter five for this purpose.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=68)** Note that one of them uses the prebuilt react agent, while another uses the custom agent.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=75)** The patient can send a request like find a neurologist, and request an appointment for Beth at the earliest.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=83)** The hospital agent will analyze the request and route it to the right agent, which in this case would be the scheduling assistant.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=92)** We can add any number of such agents to create a multi-agent application.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=97)** We will now proceed to implement this application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (6), [[Search]] (1), [[React.js|React]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Importing agents in a multi-agent application
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=0)** - [Instructor] The code for this chapter is available in the notebook code_06_XX Multi-agent Hospital application.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=9)** There are many patterns available to integrate agents with a master agent.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=14)** The agents can be available as a service exposing a REST API.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=19)** They can also be built as packages that the master agent can import inside the application.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=25)** Since we are using notebooks, we simply run the notebook for the individual agents inside the notebook of the master agent.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=33)** This is a naive approach, but it still works for illustration purposes.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=38)** We will import them using the run command.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=41)** This will execute the entire notebook of these agents and print out all the messages.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=47)** These can be ignored.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=49)** In a production scenario, though, it's recommended to implement agents as microservices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[Representational State Transfer (REST)|Rest]] (1), api (1), [[Microservices]] (1)
> **Env Vars:** rest (1), api (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Set up the multi-agent application
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=0)** - [Instructor] Let's now set up the multi-agent application.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=3)** Agents can be integrated into the master agent as tools.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=8)** For this, we need to convert these agents as tools.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=12)** The first agent, namely the healthcare agent, is built using the prebuilt react framework.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=18)** We can use the query engine tool to convert this agent into a healthcare agent tool.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=25)** As part of this call, we provide the name of the agent and the description.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=30)** The description is used by the LLM to understand the capabilities of this tool, so it is recommended to be elaborate.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=39)** The second agent for doctor appointments is built as an async agent, so we need to use a little trick to make the async call as a sync call to integrate with the master agent.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=52)** We first define an async function that internally calls the scheduling agent.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=57)** It waits on the scheduling agent for its response.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=60)** Then we define a synchronous function which will be used with the function tool.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=66)** The doc string of the function provides a description on the capabilities of this tool.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=72)** Here we use async IO to run the asynchronous function with the input.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=79)** Then we use the function tools featured in LlamaIndex to create the appointment scheduling tool.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=86)** We then create the system prompt for the master agent.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=91)** Then we create the multi-agent application using the prebuilt react agent.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=96)** We provide the list of tools, the LLM, and the context, which in this case is the system prompt.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=102)** We also set it to verbose mode.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=106)** We can also alternatively implement this master agent as a custom workflow and make it work asynchronously with all the tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[React.js|React]] (2), llm (2), prompt (2), [[LlamaIndex]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** llm (2)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Execute the multi-agent application
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=0)** - [Instructor] Now let's proceed to execute the multi-agent application and observe its responses.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=7)** First, we ask the question, which medication should I take for arthritis?
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=12)** The master agent analyzes the question and chooses the healthcare assistant.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=17)** It then passes the request to this healthcare assistant.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=23)** That agent then goes through the ReAct process.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=26)** Here, it chooses its own query engine tool and returns the observation back to the master agent.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=34)** The master agent then analyzes this response, is satisfied with it, and returns the final response.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=42)** Then we ask a question, which doctors are cardiologists?
>
> **[0:47](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=47)** The master agent now chooses the doctors_and_appointments agent and sends the request to that agent.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=54)** This custom agent then goes through its own process.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=62)** It is able to return the answer that Jack Smith is a cardiologist.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=68)** The same answer is returned back to the user.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=72)** The final question is to find a neurologist and set up an appointment with them for Trevor Hunt.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=80)** This request is again routed to the doctors_and_appointments agent.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=85)** This agent then logs the request for an appointment and gets back with a success message.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=94)** We can see that this request is logged now in the Doctor appointment requests.csv file.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=102)** This completes our course on building AI agents with llama_index.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1), [[React.js|React]] (1), ai (1)
> **Code Identifiers:** doctors_and_appointments (2), llama_index (1)
> **File Paths:** requests.csv (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=1)** - We have reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=3)** By now you have an understanding of how Agentic AI works, and how to build simple agents, but this is just a foundation.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=12)** If you want to start integrating these further, here are some recommendations for your learning journey.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=18)** First, learn about Agentic AI capabilities in frameworks like LangGraph and AutoGen.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=25)** Next, try out some agents with a few tools like RAG and third party integrations.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=32)** Then build an AI agent for your organization, leveraging your learnings.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=38)** AI always intrigues me.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=39)** I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), next (1), rag (1)
> **CLI Commands:** find (1)
> **Env Vars:** rag (1)
> **Speakers:** - we (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Path Context

### In [[Building Agentic AI Systems for Developers]]
← [[Building AI Agents with AutoGen]] | **4 of 6** | [[Build AI Agents and Chatbots with LangGraph]] →

## Appears In

- [[Building Agentic AI Systems for Developers]]

---

[↑ Back to top](#)