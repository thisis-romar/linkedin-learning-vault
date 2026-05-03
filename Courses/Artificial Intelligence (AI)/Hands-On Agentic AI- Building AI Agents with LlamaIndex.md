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
created: 2026-05-03
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

#### [Introduction to the course](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/introduction-to-the-course-25230382?u=76281980&t=0)** - [[AI Agents]] have the power to change the way you do business. If you have wondered how to build one, this course is for you. My name is Kumaran Ponnambalam. In this course, we will go over the basics of building AI agents with [[LlamaIndex]]. We will implement popular agentic patterns like planning, tool use, reflection, and multi-agent systems, using both pre-built templates and custom workflows. This will help you gain insights into how real world agents are built and implement them in your work. Let's get started with building AI agents with LlamaIndex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (3), [[LlamaIndex]] (2)
> **Speakers:** - ai (1)

#### [Setting up codespaces](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/setting-up-codespaces-25227384?u=76281980&t=0)** - [Instructor] The code for this course is available in the [[GitHub]] project "Hands-on Agentic AI: Building [[AI Agents]] with [[LlamaIndex]]." To create a workspace, go to code and select Create Code Space on Main. This will open up Code Space and initialize the environment. This may take some time. The environment is set up now. Open the notebook Code 01XX: A Basic [[LLaMA]] Agent. The first cell contains all the dependencies needed for the codes. Run the cell. It is recommended to use [[Python (Programming Language)|Python]] version 3.10 to run the exercises for this course. Once the dependencies are successfully installed, we are ready to run with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[AI Agents]] (1), [[LlamaIndex]] (1), [[LLaMA]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** go to (1), open the (1)
> **CLI Commands:** python (1)
> **Versions:** version 3 (1)
> **Tools:** github (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Agentic Concepts in LlamaIndex

[↑ Back to Table of Contents](#table-of-contents)

#### [Agentic AI: A review](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/agentic-ai-a-review-25234296?u=76281980&t=0)** - [Instructor] Before we begin the codes, let's quickly review some key concepts of agentic AI. What is agentic AI? This is [[Generative AI]] that is designed to operate autonomously with minimal human intervention, make decisions, and take actions towards specific goals. If you are not familiar with the concepts of a agentic AI, I highly recommend further reading before proceeding with this course. Let's quickly review the key patterns in agentic AI. The planning pattern is used to decide on a course of action to fulfill a goal or break down a complex task into smaller, manageable steps. The tool use pattern is used to select the right tool from a tool set to solve a specific problem, then identify the inputs to the tool, invoke the tool, and return the results. The [[Routing]] pattern is used to route a request to alternate destinations by analyzing the input and context of the request. The reflection pattern is used to review outputs, artifacts, or decisions, provide constructive feedback, and improve accuracy. The multi-agent pattern is used to create applications, where multiple independent [[AI Agents]] can work together to accomplish a complex task. We will be implementing examples for few of the patterns in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Routing]] (1), [[AI Agents]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [AI agents in LlamaIndex](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=0)** - [Instructor] In this course, we will be building [[AI Agents]] with [[LlamaIndex]]. In this video, let's explore the capabilities that LlamaIndex provides for building AI agents. LlamaIndex has become popular in the [[Generative AI]] world for its capabilities and ease of use. It's an open-source framework that enables development of [[Generative AI|GenAI]] applications. Its abstractions allow quick development and deployment of GenAI applications. It supports building blocks for building popular GenAI use cases. It provides wrappers for integrating with most of the popular GenAI [[Large Language Models (LLM)|large language models]], or LLMs, including OpenAI, [[LLaMA]], [[Gemini]], and Minstral. It supports retrieval augmentation capabilities, including support for an array of [[Vector Databases]], chunking techniques, embedding models, and retrieval strategies. Recently, it has added support for AI agents, also. What capabilities does LlamaIndex provide for AI agents? It has a few pre-built templates for quickly building AI agents. The most popular of them is the [[React.js|React]] template, which we will use in this course. It has a vast array of community sources tools and tool specs. We will explore them in the next video. LlamaIndex has added support for workflows.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/ai-agents-in-llamaindex-25224601?u=76281980&t=94)** This allows developers to build custom logic on how applications can use agentic capabilities. Complex workflows and agents can be built using these capabilities. We will explore workflows later in the course. LlamaIndex provides out-of-the-box integration between its agentic capabilities and its LLM and RAG capabilities. It also has debugging and monitoring capabilities, which can be used to observe and troubleshoot agent behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (6), [[AI Agents]] (5), [[Generative AI]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[LLaMA]] (1)
> **Env Vars:** llm (1), rag (1)
> **Cross-References:** in the next (1), later in (1)
> **Exercise Files:** template (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Tools and toolspecs in LlamaIndex](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=0)** - [Instructor] [[LlamaIndex]] provides an extensive set of tools and tool specs as part of [LlamaHub.ai](https://LlamaHub.ai). Let's explore [LlamaHub.ai](https://LlamaHub.ai) in this video. This is a portal for community sources and tools that can be quickly used with the LlamaIndex framework for building [[Generative AI]] capabilities, including [[AI Agents]]. For example, let's explore embeddings. On searching for embedding, we see a number of options on using popular embedding models and frameworks. Let's search for cohere here. Here we see the support for cohere embedding. Let's click on this link. Here we can see the package we need to install and its usage also. This can then be used with LlamaIndex embedding framework to create embeddings. When it comes to AI agents, a key building block is tools. We need tools to integrate with any other application, technology, or cloud service. LlamaHub provides a number of such tool integrations. A tool provides a single function call to integrate with another service. A tool spec contains a group of related function calls to integrate with another service. Let's explore such tools for [[Google]]. On searching for Google, we see a number of tools and tool specs.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/tools-and-toolspecs-in-llamaindex-25234295?u=76281980&t=94)** For example, the Google search tool spec allows developers to integrate with Google to perform search for a query and retrieve results. The Gmail tool spec provides a list of tools to integrate with Gmail to read and write emails. Let's explore the Gmail tool spec closely. It's part of the LlamaIndex Tools Google package. Let's click on the view on [[GitHub]]. On clicking on examples, we see sample code on how to integrate with Gmail, Google Calendar, and Google search. LlamaHub is community sourced, so developers are adding tools for a variety of such services. This makes building enterprise AI agents easy as we can quickly leverage existing tools and tool specs to integrate with any enterprise use case. We will be using the Wikipedia tool spec later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7), [[LlamaIndex]] (4), [[AI Agents]] (3), [[Generative AI]] (1), [[GitHub]] (1)
> **Documentation:** spec (5)
> **URLs:** [llamahub.ai](https://llamahub.ai) (2)
> **UI Navigation:** click on (2)
> **Analogies:** for example (2)
> **Tools:** github (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)

#### [Set up LLM and tools for a LlamaIndex agent](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=0)** - [Instructor] Let's now get into building a small [[LlamaIndex]] agent. In this video, we will set up an LLM to use for the agent and also a few basic tools. The code for this chapter is available in the Notebook, Code 01XX: A Basic LlamaIndex Agent. All agents require an LLM for planning, reasoning, and result generation. LlamaIndex provides integrations to a variety of LLM implementations. In this course, we will use [[Microsoft Azure|Azure]] Open AI based [[GPT-4]].0 model as our LLM. Let's first configure this model for use in our AI agent. We begin by importing the Azure Open AI package. LlamaIndex also uses Async IO for doing asynchronous operations, so we import that package. Also, we set up an APA key and then Azure endpoint URL for our LLM. The key end endpoint are specific to the Azure account. Please use your own key and endpoint URL for the exercise. Alternatively, you can also substitute any other LLM model instead of Azure Open AI. But in that case, the results may not be consistent with what is shown in the video. We then define the LLM model. We will use GPT-4.0 as the model. The deployment name
>
> **[1:32](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-llm-tools-for-a-llamindex-agent?u=76281980&t=92)** and the APA versions will be obtained from the Azure account based on how the model is set up there. This LLM setup is common for all exercises in this course. Now let's proceed to set up functions for the agent. We will be building a simple math agent. The math agent can be used to take a math problem as input in natural language and solve it using the tools provided. We have two tools here. Find sum tool that will be used to add two numbers and a find product tool that will be used to multiply two numbers. These tools are defined as functions. Let's explore how the functions are set up. We can make any [[Python (Programming Language)|Python]] function as a tool. For this, it needs to follow certain conventions. The first function is the find sum function that takes two numbers, X and Y, and returns their sum. The dark stream comment is important here. It explains what the function does. This comment is provided as a tool description to the LLM. The LLM uses this description to understand the capabilities of the tools, its inputs and outputs, and then decide if it wants to use the tool or not based on the input query. A second function find product is also defined in a similar manner. We will create and execute the AI agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[LlamaIndex]] (4), [[GPT-4]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** llm (10), gpt (2), apa (2), url (2)
> **Prerequisites:** set up (5), configure (1), setup (1)
> **CLI Commands:** find (4), make (1), python (1)
> **Versions:** 4.0 (2)
> **Cross-References:** in the next (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Create and execute a LlamaIndex agent](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=0)** - [Instructor] Let's now proceed to create and execute the simple AI agent. We first need to convert the two functions we created into tools that the LLM can use. For this, LAMA Index provides an abstraction called function tool. We can create the SUM tool and product tool by using this abstraction and applying it on the functions we created. For the agent, we use the prebuilt [[React.js|React]] agent available in LAMA Index. We will discuss React concepts in the next chapter. For now, we simply create the React agent using the list of tools and the LLM. The verbose flag can be used to provide detailed logs on the inner workings of the agent. We then test the agent by calling the chat method in the agent. This is a synchronous method. We ask the question, what is two plus two? Then we see verbose logs on what the agent is doing under the hood. First, it determines that it needs to use a tool to answer the question. It picks the correct tool, find sum. It also determines the inputs to the tools with X and Y set as two and two respectively. On executing the tool, it obtains an observation as four. It analyzes the result and determines that it has enough information to provide the answer. It produces the answer as four. We now ask a more complex question, multiply two by three,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-a-llamaindex-agent?u=76281980&t=95)** and then add four. The agent goes through the same process again. The first step it determines is to multiply two by three. For this, it chooses the defined product tool. It obtains the result as six. Then it uses the find sum tool to add six with four, it obtains the final observation as 10. Here we can see that the agent is able to break down the problem into multiple subtasks and then execute the tasks. This example demonstrates the planning and tool use patterns for agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3)
> **Env Vars:** llm (2), lama (2), sum (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Build a Healthcare Assistant Agent

[↑ Back to Table of Contents](#table-of-contents)

#### [What is ReAct?](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=0)** - [Instructor] Before we proceed with the exercises, let's quickly discuss the [[React.js|ReAct]] framework, which we will use in these exercises later. The ReAct framework is a popular framework for building [[AI Agents]]. It was originally published as a paper and then adopted by popular agent frameworks. ReAct stands for "Reason" and "Act." It involves using the LLM to first understand and reason the user request, then act upon it. It is an iterative process using the LLM to decide on the next execution step, executing the step, and then using the LLM to decide if there are more steps needed. ReAct provides enhanced explainability for the actions taken by the agent. It has multiple use cases, including answering customer queries, deciding on the course of action for a workflow, or reviewing a document. How does the ReAct framework work? It uses the thought, action, observation pattern. Let's say we have a user trying to interact with the agent. The user sends a question or prompt to the agent. The question or prompt first goes through a thought block. Here, an LLM is used to analyze the input and decide on the next set of steps to execute. This set of steps or actions are then sent to the action block. Here, the agent executes a set of actions, including tool calling, processing, or computations.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/what-is-react-25231389?u=76281980&t=95)** The actions generate a set of outputs. The outputs are sent to the observation block. Here, an LLM is used to validate the results obtained from the actions, and if the results satisfactorily answer the user question. If the LLM decides that there are more steps needed, it is sent back to the thought block. The thought block will analyze the question and the intermediate results available to decide on the next set of actions. This then goes through an iterative process of thought, action, observation until satisfactory results are obtained. The final answer is then sent to the user by the observation block. The LLM plays a key role in both the thought and observation blocks to make decisions and trigger actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[AI Agents]] (1)
> **Env Vars:** llm (7)
> **Definitions:** is a  (1), stands for (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Healthcare ReAct assistant: Design](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=0)** - Let's now build a practical use case for [[AI Agents]]. The healthcare assistant. We will use this use case to demonstrate how an agent can be built using the [[React.js|React]] framework in LAMA Index. What are the functions of this healthcare assistant? It is an AA assistant or chat bot that provides self-service to patients by answering any questions they have about healthcare. Specifically, we will use this agent to answer questions regarding symptoms and associated medical conditions. A patient can ask a question about a symptom they are experiencing, and the assistant can provide guidance on possible diseases or conditions. For this, the agent will use Wikipedia to search and find answers. In addition, the assistant can also recommend medications and their dosages. For this purpose, it will use a knowledge base about popular medical conditions, recommended medications, and dosages. What does the design for this assistant look like? We first have a search tool for Wikipedia. There is a prebuilt Wikipedia tool spec available in LAMA Hub. We will use this tool spec to search and filter answers based on patient questions about symptoms and conditions. Next, we have a retriever called "medication-tool." This retriever uses a medications vector database. This database is built using a document
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/healthcare-react-assistant-design-25224598?u=76281980&t=93)** that contains information about medical conditions and medications. This demonstrates how Retrieval Augmented Generation, or RAG can be brought into an agent as a tool. The healthcare assistant is built using these two tools. Based on the input question, this agent uses an LLM to think, and create an action for answering the question. The LLM can choose to use one or both of the tools to find the answer. It will then analyze or observe the answer to make sure that it has sufficient information to answer the original question. If not, it will produce further actions to search for answers. A user can provide a question like, "What medication should I take for fever?" The healthcare agent will then use the React framework to answer the question. Let's now proceed to implement the design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[AI Agents]] (1)
> **Env Vars:** lama (2), llm (2), rag (1)
> **CLI Commands:** find (2), make (1)
> **Documentation:** spec (2)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - let (1)

#### [Set up Wikipedia tools for healthcare assistant](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=0)** - [Instructor] The implementation for the healthcare assistant is available in the exercise notebook code_02_XX, A Healthcare Assistant Agent with [[React.js|React]]. Do note that this example is for illustrative purposes only and should not be used in healthcare environments without required regulatory guardrails. We will implement the Wikipedia tool for the assistant in this video. We will set up the LLM similar to how we did it in the previous chapter. In addition for building a Vector database, we also need an embedding model. We will use the text embedding three large model configured in the same [[Microsoft Azure|Azure]] account as the LLM. Do note that we are using the settings class to store these models. This is to enable them to be used during the vector database creation process. To create the Wikipedia tools, we will use the Wikipedia tool spec available in [[LLaMA]] Hub. We simply load the tool spec and create a list of tools out of it. We then print the list of tools and descriptions. The Wikipedia tool spec has two tools, namely search data and read search data. When a query is provided, the search data is used to find Wiki pages that contain answers to the query and download the pages. Then the read search data tool is used to search the downloaded pages
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-wikipedia-tools-for-healthcare-assistant-25227381?u=76281980&t=93)** and extract relevant sentences for the query. The description shown here is passed to the LLM as part of tool descriptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[Microsoft Azure|Azure]] (1), [[LLaMA]] (1)
> **Env Vars:** llm (3)
> **Documentation:** spec (3)
> **Warnings:** note that (2)
> **CLI Commands:** find (1)
> **Cross-References:** previous chapter (1)
> **Exercise Files:** download the (1)
> **Analogies:** similar to (1)

#### [Set up RAG for medications](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=0)** - [Instructor] Now we will proceed to create the medications tool using out of the box [[LlamaIndex]] capabilities to set up a vector database. We will use an in-memory vector store provided by LlamaIndex natively. For production implementations, it's recommended to use alternate [[Vector Databases]] like [[Pinecone]] or Milvus. The list of medications and dosages are available in the medications and dosages.[[JSON]] file that is part of the exercise files under the datasets directory. This JSON file only contains a small list of popular medications for illustration purposes. A real world data set would contain an extensive list of medications. In the code, we first load this JSON file using the JSON pre-built package in LlamaIndex. Then we chunk this document with a chunk size of 200. Finally, we create a vector index with the chunked data. The embedding model is used underneath to do the embedding. Once the vector database is ready, we can create a query engine with it in order to execute queries on the vector database. Until this step, we are using the standard RAG implementation capabilities available in LlamaIndex. Then using this query engine, we create a tool. LlamaIndex provides the from default function in the query engine tool to automatically convert
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-rag-for-medications-25232389?u=76281980&t=95)** a query engine to an agent tool. We also provide a description of the tool that can be used by the LLM to understand its capabilities. Now that the tools are ready, we will proceed to set up and execute a [[React.js|React]] agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (5), [[JSON]] (4), [[Vector Databases]] (1), [[Pinecone]] (1), [[React.js|React]] (1)
> **Env Vars:** json (4), rag (1), llm (1)
> **Prerequisites:** set up (2)
> **File Paths:** dosages.json (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Set up and execute the healthcare agent](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=0)** - [Instructor] Let's now use the tools we created to build a [[React.js|React]] agent. For the list of tools, we concatenate the Wikipedia tools list with the medication tool. This provides three tools for the LLM to use. We then need a system prompt that defines the purpose of the healthcare assistant. For this, we create a context with descriptions that contain the persona of the agent, the tools available, and how the tools should be used. Then we create a React agent for the healthcare assistant with the prebuilt function in [[LlamaIndex]]. We provide the list of tools, the LLM, and the context as inputs. We also set the verbose flag to true so we can analyze how the agent is performing the thought action observation loop. Now we ask the question, "Which medication should I take for arthritis?" The LLM first goes through the thought process and decides that it needs to use the tool. For this, the LLM chooses the query engine tool that is built on the medications [[JSON]] file. This is the action. It then executes the action and observes the result. It is able to get information about the medication to use. Based on this, it is able to generate the final answer. This exercise demonstrates how React agents can be built quickly with the pre-built functions in LlamaIndex. React agents can also be built using custom workflows,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-execute-the-healthcare-agent?u=76281980&t=95)** which we will discuss in later chapters in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[LlamaIndex]] (2), [[JSON]] (1)
> **Env Vars:** llm (4), json (1)
> **Speakers:** - [instructor] (1)


### 3. Build a Summarization Agent

[↑ Back to Table of Contents](#table-of-contents)

#### [Summarization agent design](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=0)** - [Instructor] In this chapter, we will explore how to implement the reflection pattern for agents with [[LlamaIndex]]. Reflection is the use of an LLM to review the output of another LLM or person, and use that feedback to improve the output. One popular application of reflection is in summarizing documents. In this chapter, we will implement a summarization agent with LlamaIndex. So what are the requirements for this agent? This agent will summarize a product specification document using an LLM. It will use a system prompt to detail the requirements for the summarization. The agent uses an LLM for summarization. It'll also use the same LLM for reviewing the summary and providing feedback. It's also possible to use different LLMs for summarization and review. The feedback generated is then used to improve the summary, either for a fixed number of iterations or until the summary meets the requirements stated in the system prompt. We will build a summarization agent using prebuilt agents available in LlamaIndex for this purpose. LlamaIndex has an introspective package that provides out-of-the-box agents for executing the task, as well as reviewing the task. Here, we create an introspective agent in LlamaIndex. The introspective agent has two workers.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/summarization-agent-design-25231388?u=76281980&t=95)** There is the main agent worker whose job is to generate the summary, or any other content based on the system prompt. Then it also has a reflective agent worker that is used to review and provide feedback for the output generated by the main agent worker. A user sends a raw document for summarization to the introspective agent. This is then passed on to the main agent worker. The main agent then generates a summary. The summary is provided to the reflective agent worker for review. The reflective agent worker then generates feedback for the candidate summary. The main agent worker then analyzes the feedback. If there are specific improvements suggested, it will implement these improvements, generate another candidate summary, and sends it back to the reflective agent worker for feedback. This generation and reflection process continues until the reflective agent worker is satisfied with the summary. When that happened, the main agent worker then sends the approved summary as output back to the user. Let's now proceed to implement the summarization agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (5)
> **Env Vars:** llm (5)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [Create the introspection agent](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=0)** - [Instructor] The code for the summarization agent is available in the notebook code_03_XX Summarization with reflection. Similar to the other exercises, we will begin by setting up the LLM. In this video, we will create the introspection agent using available llama_index capabilities. We first set up the SelfReflectionAgentWorker. This is the reflective agent worker we discussed in the previous video. For this, we use the SelfReflectionAgentWorker class. We only need to pass in the LLM to be used for reflection or review. We set the verbose flag to True to log the internal workflow of the agent. Next, we set up the IntrospectiveAgentWorker. This worker takes in two key parameters, the self_reflection_agent_worker and the main_agent_worker. For the main_agent_worker, we can pass in an LLM. We can also leave it blank, in which case the same LLM provided in the self_reflection_agent_worker will be used. We then create a system prompt that defines the role of the introspective agent. It has specific instructions on what the summary should look like. In this case, we are calling out that the summary should focus on performance and safety. It should also be less than 50 words. This is what the reflection agent will use to review to see if the candidate summary meets the specific criteria. We then add the system prompt to the chat history.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-the-introspection-agent-25227382?u=76281980&t=97)** Finally, we create the introspective agent using the introspective_agent_worker, along with the chat_history. We also set the verbose flag to True.

> [!info]- Semantic Content
>
> **Code Identifiers:** self_reflection_agent_worker (2), main_agent_worker (2), llama_index (1), introspective_agent_worker (1), chat_history (1)
> **Env Vars:** llm (4)
> **Cross-References:** we discussed (1), previous video (1)
> **Prerequisites:** set up (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Execute the introspection agent](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=0)** - [Instructor] Now, let's proceed to use the introspective_agent to generate a summary. We have a document called EcoSprint_Specification_Document.pdf in the datasets directory in the exercise files. This document contains some specifications about the EcoSprint product. We will summarize this document with our introspection agent. We first load this document using the PyMuPDFReader. We pick the first page of the document and print its contents. To execute the introspective_agent, we will use the async mode. For this, we will call the achat method, also called asynchronous chat. The await class is used to await for the results of this call. We just pass in the source document content as input, and then print the results. llama_index now prints what is going on inside the agent. First, it prints this step input, which is the entire document. Then, it adds this message to its internal memory. This is needed for tracking the inputs, all the candidate summaries and associated feedback. The document goes to the Reflection worker for review. The Reflection worker first uses a flag is_done to specify if the summary is ready or not. Then, it provides feedback on what is required in the summary. Then, the main worker creates a summary
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-introspection-agent-25234291?u=76281980&t=94)** with the correction label. The summary is again sent back to the Reflection worker for its review. Now, we see that the is_done flag is set to true and the feedback is satisfactory. This summary is then returned as the response. The summary now focuses on performance specifications like acceleration and safety features like multiple airbags. Any kind of generation and reflection can be done using the introspective_agent worker. If custom decision making is needed, then workflows can be used to build reflection agents. We will build workflows in the next chapter.

> [!info]- Semantic Content
>
> **Code Identifiers:** introspective_agent (3), is_done (2), llama_index (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Workflow Concepts in LlamaIndex

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to LlamaIndex workflows](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=0)** - [Instructor] A workflow is a sequence of steps or actions that are executed to accomplish a task. [[LlamaIndex]] supports the concept of workflows, which can help in building custom and powerful [[AI Agents]]. What is a LlamaIndex workflow? It is an event-driven abstraction layer. It uses a sequence of steps to achieve a given goal. The steps are driven by events. Let's discuss this in further detail in this video and the following videos. A workflow in LlamaIndex consists of steps. These steps are interconnected using events. The steps are the nodes and the events are the arrows connecting the nodes. A step is a unit of work in LlamaIndex workflows. A step should be triggered by one or more events to begin its execution. It takes inputs, performs a specific task and generates outputs. It's equivalent to a function called in programming. A step, once finished, may emit one or more events. In LlamaIndex, a workflow runs asynchronously. This means it can concurrently execute multiple steps in separate threads, and the results can converge at the end. What are some of the use cases for workflows in LlamaIndex? There are several uses for workflows. They can help in building custom and powerful applications.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/intro-to-llamaindex-workflows-25232390?u=76281980&t=95)** The workflow concept is independent of [[Generative AI|GenAI]], so you can build non-AI process automations too with LlamaIndex workflows. We will build a simple non-AI workflow later in the chapter. Workflows can be used to build [[Generative AI]] applications that can contain pre-processing steps. LLM calls, and post-processing steps. Retrieval augmented generation, or RAG, applications can be built using them. Of course, we can build agentic workflows to build AI agents. The asynchronous nature of workflows helps building powerful agent-to-agent and agent-to-tool communications. We can combine any of the above use cases to create complex workflows. Let's explore more about the steps and events in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (7), [[AI Agents]] (2), [[Generative AI]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** llm (1), rag (1)
> **Cross-References:** later in (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [LlamaIndex workflow components](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=0)** - [Instructor] Building a workflow in [[LlamaIndex]] requires a few building blocks. Let's explore what these building blocks are, and then review a sample workflow. How do we define a workflow with LlamaIndex? We need to create a class to represent a given workflow. This class should inherit from the Workflow base class. The Workflow base class comes built in with LlamaIndex. It provides a general infrastructure for executing a workflow. The init method for the class can be used to pass in input parameters to the workflow to handle a query. The class can have instance variables where inputs as well as intermediate data elements can be cached during the execution of the workflow. The workflow can contain both step and non-step methods. Step methods are wired together with events. Non-step methods can be called from step methods to perform specific processing. The LlamaIndex workflow framework does the heavy lifting of executing the workflow. We need to only focus on the specific application logic. Let's discuss more about steps in LlamaIndex. A step is an asynchronous method in the workflow class. The async qualifier is needed for all steps as the workflow is executed asynchronously. The definition of the step specifies
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=94)** which events will trigger the step and which events can be emitted by the step. A workflow step otherwise is a regular [[Python (Programming Language)|Python]] code that can perform any function, including computations, calling other functions or accessing third-party services. The step, like a regular class member function, can access instance variables. There is also a special workflow context that is available for use with steps. What about workflow events? Events used in workflows need to be declared outside the workflow. They are defined as sub-classes of the built-in events class. And event can have attributes. These attributes can be used to pass data between steps. The event originating step can set up the attributes and the event receiving step can read these attributes. There are two special events in LlamaIndex workflow framework. These events are not required to be declared and are always present in all workflows. The start event is a special event that is triggered by the workflow framework when the workflow is invoked by the user. The first step of the workflow need to listen to this StartEvent. The StopEvent is a special event that the workflow, the last tip in the workflow needs to trigger this event. The StopEvent has an attribute called result through which the final output
>
> **[3:06](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/llamaindex-workflow-components-25232392?u=76281980&t=186)** of the workflow is returned to the user. Here is a sample workflow in LlamaIndex. It begins with the StartEvent. This is used to trigger the workflow. The first step in the workflow is Step 1. It listens to the StartEvent. Step 1 then triggers Event 1. Step 2 listens to Event 1 and is hence triggered by Event 1. In addition, Step 1 may also trigger Event 2. This is an example of a single-step triggering multiple events. Step 3 will be triggered by Event 2. Step 3 will trigger Event 3, which in turn triggers Step 1. This establishes a cyclic process between Step 1 and Step 3. Step 3 will also trigger event four when it needs to stop the cyclic process with Step 1. Thus, Event 4 is triggered by both Step 2 and Step 3. Step 4 is the last step in the workflow and it generates a StopEvent. We will implement a simple workflow later in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (7), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (4), is an  (2), defined as (1)
> **Prerequisites:** set up (1), required to (1)
> **CLI Commands:** python (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Managing data in LlamaIndex workflows](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=1)** - [Instructor] While steps and events are useful for executing logic and passing control, they won't be successful without moving and sharing data. When a workflow is executed, data needs to be managed, steps need to read input data, modify data, and pass data around to other steps. Inputs to the workflow needs to be shared and output from the workflow need to be sent back to the user. There are a few options that exist for managing data in a workflow. There are three options available for [[Data Sharing]] and management in workflows. First, there are instance variables. A workflow is defined as a class, so it can have instance variables. These instance variables can be set during initialization and then shared across steps. Typical use of instance variables is for caching user input and any additional parameters that apply for the entire workflow. Next, workflows also support a context. A context is a shared read/write cache that is accessible to all steps in a workflow. Each step can read data from the cache as well as write or update them. This is typically used for global counters or caching intermediate data generated by the steps. A third option is event attributes. Each event can also carry additional data elements. This is set by the step triggering the event
>
> **[1:39](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/managing-data-in-llamaindex-workflows-25228380?u=76281980&t=99)** and can be read by steps that are triggered by the event. This is typically used for receiving inputs to steps and sending out final outputs of steps to the next step. The use cases for the options do overlap, and it may be a personal preference to use any of these options. Let's now implement a simple non-AI workflow to exercise the concepts learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Sharing]] (1)
> **Definitions:** defined as (1), is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [A simple LlamaIndex workflow: Design](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=0)** - [Instructor] Let's discuss the design of the simple workflow that we will build for utilizing [[LlamaIndex]] Workflow framework. Let's begin by defining the requirements for this workflow. This is a non-AI use case. There is no AI or LLMs involved here. The task for the workflow is to just loop three times and exit. It'll have two steps, and the looping will happen between these steps. The goal for this exercise is to illustrate how workflows are created and executed in LlamaIndex. We will utilize various building blocks that we discussed earlier, namely workflows, steps, events, and [[Data Management]]. Here is the simple workflow we want to build. The start event for the workflow triggers a step called Run Loop. This is the first step in the workflow that will receive the inputs, including the number of times to loop. The Run Loop step will trigger a Validate Event. This event will trigger a second step called Check Iterations. The Check Iterations step will check the number of loops or iterations completed. If that number is less than the maximum iterations expected, it'll trigger the Continue Event. This event will trigger a Run Loop again. This process will continue until the maximum number of iterations is reached. When the maximum number of iterations is reached,
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/a-simple-llamaindex-workflow-design-25227383?u=76281980&t=93)** the check iteration step will trigger a Stop Event. This will end the workflow. Let's not proceed to implement the workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (2), [[Data Management]] (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Build and execute a simple LlamaIndex workflow](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=0)** - [Instructor] The code for this example is available in the notebook code zero four, XX A Simple Workflow The first cell has commented out code. This essentially initializes the Async IO library for running workflows asynchronously. This is not needed for notebooks, but if we are building [[Python (Programming Language)|Python]] executable services, then this is required. We begin by importing a set of classes from the workflow package. We define the two events for the workflow, namely ValidateEvent, and ContinueEvent. Both of them inherit from the base events class and as one attribute called iterations. Then we define the simple workflow class. This class inherits from the base workflow class. The first method is the init method. We can collect any input parameters through this method. We collect the number of loops or iterations to execute in the workflow. We stored this in an instance variable. We need to also explicitly call the init method on the base class to fully initialize the workflow. Then we proceed to define the run loop step as a member function. The art step decorator is needed to identify a workflow step. It should also be defined as async. As inputs to this step, we get the workflow context and the event that triggered the workflow. This is auto-populated by the workflow framework.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=96)** This is where we define the events that can trigger the step, the start event, or the continue event can trigger the run loop step. This step in turn triggers the validate event. Inside the step, we check if the step was triggered by the start event. If so, we initialize the number of iterations and the current result variables. If continue event triggered the step, then we read the current result from the context. This read operation is asynchronous. We also read the number of iterations completed so far from the ContinueEvent. Next, we bump up the number of iterations by one. We also set the current result by using the number of iterations completed and the maximum number of iterations. We print the current result as a log message. Now we set the current result in the context with the updated value. We then trigger the validated event by setting the number of completed iterations. Next, we define the check iteration step. This is triggered by the ValidateEvent, and it can emit a StopEvent or a ContinueEvent. Inside the step, we read the current number of iterations from the event, the max number of iterations from the instance variable and the current result from the context. We essentially exercise all three [[Data Management]] methods. Then we check if the maximum number
>
> **[3:11](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=191)** of iterations is reached. If so, we trigger the StopEvent. This is returned with the current result. If not, we trigger the ContinueEvent with the number of iterations completed. If this code appears disjointed, I recommend going through the design once again to understand how the steps and the events work together. [[LlamaIndex]] provides a function, draw all possible flows to draw a picture of the workflow. This shows the actual workflow that was implemented. This allows us to make sure that we implemented the events and steps as desired and debug potential workflow issues. This code may not run in code spaces, hence it is commented out, but you can use it in other environments to check your workflow. Now, let's proceed to run the workflow. First, we initialize the workflow object. We have the standard input parameters like timeout and verbose. The timeout can be used to set the maximum number of seconds to wait for the workflow to finish. Given that the workflow is asynchronous, this prevents workflows from being stuck forever if there is a problem. The verbose flag is used to print debug messages. To run the workflow, we call the run method asynchronously and await for the results. The results are printed. We see that the workflow runs for three iterations. The debug messages show the steps being invoked
>
> **[4:44](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/build-execute-a-simple-llamaindex-workflow?u=76281980&t=284)** and the events that are triggered at each step. Now, we will proceed to implement an AI [[React.js|React]] agent using workflows in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Data Management]] (1), [[LlamaIndex]] (1), [[React.js|React]] (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** defined as (1), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 5. Build a Doctor Scheduling Assistant with Workflows

[↑ Back to Table of Contents](#table-of-contents)

#### [Doctor scheduling assistant: Design](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=0)** - [Instructor] In this chapter, we will implement a doctor scheduling agent for patients using workflows. Let's discuss its design in this video. What are the functions for the doctor scheduling assistant? This is an agent that allows patients to search for doctors based on their specialty. It also allows them to schedule appointments. The assistant has a database of doctors. Based on the patient query, the assistant can search this database to provide a list of doctors who match the query. It also triggers an appointment request for the doctor. In a real-life scenario, the system can actually set up an appointment by integrating with the scheduling system in the doctor's [[Microsoft Office|office]]. For the sake of this exercise, though, it will merely add a request record to a CSV file. This is to demonstrate how agents can be used to execute actions. What does the design for the scheduling agent look like? First, we have a vector database about doctors. This is created from a [[JSON]] file that contains a list of doctors, their specialty, and years of experience. The doctor search tool is built over this vector database. It also has a scheduling tool that can schedule appointments with the doctor. The appointment requests are appended to a CSV file with the name of the patient, the name of the doctor, and other appointment details.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/doctor-scheduling-assistant-design-25234293?u=76281980&t=93)** The scheduling agent uses both these tools to search for doctors and schedule appointments. A user can provide a query, like, show me the list of cardiologists. The agent will use an LLM, and the available tools to find the list of cardiologists, and return the results to the user. Let's now proceed to implement this agent as a custom workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[JSON]] (1)
> **Env Vars:** csv (2), json (1), llm (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Set up the doctor database tool](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-database-tool-25230380?u=76281980&t=0)** - [Instructor] The code for this chapter is in the notebook code_05_xx [[React.js|ReAct]] agent with Workflows. Similar to other exercises, we will start by setting up the LLM and the embedding models. Now, we proceed to set up the Doctor database tool. We have a [[JSON]] file Doctors database.json in the datasets folder with a list of 10 doctors, their specialisties, and years of experience. This is a small sample and a real-life database will have many more doctors and more information about them. We load up this JSON with the JSONReader in llama_index. Then, we split the document using the SentenceSplitter. Finally, we create the vector index using the in-memory vector store in llama_index. Next, we create a query engine using the vector index for doctors. Then, we create the doctor_tool by using the QueryEngineTool feature. As a description, we provide information about the capabilities of this vector database. This is provided to the LLM to understand the capabilities of the tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[React.js|React]] (1)
> **Env Vars:** llm (2), json (2)
> **Code Identifiers:** llama_index (2), doctor_tool (1)
> **File Paths:** database.json (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Set up the doctor scheduling tool](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-doctor-scheduling-tool-25232391?u=76281980&t=0)** - [Instructor] In this video, we will set up the scheduling tool for doctors. The goal is to create a record in the scheduling CSV file called Doctor Appointment Requests. Under the Dataset Directory. This file captures the requested date, the patient name, the doctor's name, and some scheduling comments. In a real life scheduling system, the CSV will be replaced by an actual scheduling system integration. In the code, we first create a function that can create a scheduling request. It takes this input, the patient name, the doctor name, and additional scheduling comments. The dog string command provides a detailed description of the capabilities of the function, its inputs and outputs. We first create a timestamp for when the scheduling request was created. We use the month and day. Next we create a list of parameters corresponding to the columns in the CSV. Then we up end the row to the CSV file. We return true if this operation was successful. It will return false otherwise We have a test code commanded out that can be used to test the function in isolation. Next, we create a tool based on this function, using the function tool class in [[LlamaIndex]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (1)
> **Env Vars:** csv (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Set up custom events for scheduling](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=0)** - [Instructor] Now we will proceed to create a workflow. The embedded image shows the workflow that we will create for the exercise. This workflow can be considered a template for [[React.js|React]] Agents that utilize tools. We can of course customize this workflow as needed for our use case. The first step in the workflow is the new user message step. This step is used to cache the user input in workflow memory. This emits the PrepEvent. The next step is the prepare_chat_history. This step adds the user input and system prompt to the chat history for this request. It then emits the InputEvent. The InputEvent triggers the handle_llm_input step. This is the reasoning step. It sends the chat history to the LLM to determine the next set of actions. If the actions determined by the LLM is to do tool calls, it emits a ToolCallEvent. This then triggers the handle_tool_call step. This step executes the tool calls defined by the LLM, saves the results of the tools, and triggers the PrepEvent again. Now the prepare_chat_history step will add the tool call results to the chat history and trigger the InputEvent again. This iterative process of reasoning and tool calling continues until the handle_llm step determines that it has all the information needed to generate the final output.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-custom-events-for-scheduling-25224599?u=76281980&t=95)** In that case, it will generate the final output and trigger the StopEvent. To implement this workflow, we will first set up the events needed for the workflow. The PrepEvent is the event with no attributes. The InputEent has a list of chat messages for the LLM to consume. The ToolCallEvent has a list of tools to be executed along with their inputs. We will create the custom workflow in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Code Identifiers:** prepare_chat_history (2), handle_llm_input (1), handle_tool_call (1), handle_llm (1)
> **Env Vars:** llm (4)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create a custom workflow for scheduling assistant](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=0)** - [Instructor] Let's now implement the [[React.js|ReAct]] workflow for the doctor scheduling agent. The imports are pretty similar to the workflow we created in the earlier course. Let's now explore the scheduling agent class. The init function receives key inputs for executing the workflow. It has the LLM to be used for reasoning and generation. It has the list of tools that are available to the agent. The extra context variable is used to pass in the system prompt for the agent. In the init function, we save the inputs to the instance variables. In addition, we will also set up the memory variable that will be used to store chat memory. We initialize the formatter with the system prompt. We will continue adding more messages to the memory later in the workflow. The output parser is needed to parse the LLM outputs. The sources list is used to store information returned by tool calls. Next, we set up the new user message step. This is executed only once with the start event. This step receives the user query, which is the input to the agent. This message is stored in agent memory as part of the chat message. It also initializes a context variable called current reasoning. This will be updated as the workflow executes. Finally, the PrepEvent is emitted by the step. Then comes the prepare chat history step.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=96)** Here we collect the system prompt, previous chat messages and current reasoning and create the chat history input to the LLM. This is required for the LLM to understand all the past history when executing the workflow. For this, we read the chat history from memory. We get the current reasoning from the context. Then we use the formatter to format this information into the LLM input. Finally, we emit the input event using this LLM input. The next step is the handle LLM input step that is triggered by the input event. Here, we send the LLM input to the LLM to get its next action. Then we analyze the response from the LLM. This is returned in the reasoning step variable. Upon this step to the current reasoning context variable, the LLM in ReAct can return to alternatives. If the LLM says that the work is done, then it is the final generated answer. We capture the answer from the response attribute and create the final result. We send the result as part of the StopEvent. If the LLM provides an action step, then we extract the tool name to use and the input parameters for the tool. Based on this data, we trigger the the tool call event. We also catch an exception in case there are errors in the reasoning process. In this case, we trigger the PrepEvent again.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-a-custom-workflow-for-scheduling-assistant-25234294?u=76281980&t=190)** The next step is the handle tool call step. This is triggered by the tool call event and its purpose is to execute the tools chosen by the LLM. We get the list of tool calls to execute from the tool call event. We also get the names of the tools. Do note that the LLM may choose to execute multiple tools as part of its actions. So we iterate through the list of tools. We first check if the selected tool exists. If not, we throw an error. We then call each tool with the list of arguments. The outputs of the tools is added to the sources instance variable. The output is also appended as an observation to the current reasoning context variable. If there is an error in calling the tool, mostly because the input parameters chosen by the LLM have a mismatch, we throw an exception. Finally, we trigger the PrepEvent to repeat the reasoning and action loop. We can draw the workflow using the draw all possible flows function. Now the workflow is ready. In the next video, we will create an agent with the workflow and execute it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2)
> **Env Vars:** llm (16)
> **Cross-References:** later in (1), in the next (1)
> **Prerequisites:** set up (2)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Create and execute the scheduling agent](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=0)** - [Instructor] Let's now create and execute the doctor's scheduling agent. We begin with setting up the list of tools for the agent to use. Then we create the system prompt for the agent. The system prompt provides a detailed description of the agent persona and the features available. We also instruct the LLM to only use the tools available to achieve the results. We then proceed to create the scheduling agent. We provide the inputs as discussed in the previous video. We also provide a timeout and set it to verbose mode. Now let's run the agent. We will use the run method for this to provide an input. The run method is asynchronous, so we will wait for the request. We ask a question, which doctors or cardiologists. From the traces, we can see how the workflow progresses. The LLM requests the use of query engine tool to find the doctors who are cardiologists. This then results in a query to the vector database to [[Fetch]] the lists of doctors. It finds one doctor, namely Dr. [[John the Ripper|John]] Smith. The LLM then generates a response and triggers the stop event. Let's first review the CSV file with appointments, it's empty. We then send a request to the agent.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/create-execute-the-scheduling-agent?u=76281980&t=93)** Please set up an appointment with John Smith for Ben Jones next week in the afternoon. Let's run this code now. The LLM this time chooses the scheduled appointment tool. This tool then updates the CSV with the appointment request. Finally, the LLM generates a success message back to the user. Now, when we check the CSP, we see that a request for appointment has been logged based on the user input. Now we have a compound request, find a neurologist and request an appointment for Beth Wilson. Let's run this request now. Now the agent first uses the query engine tool to find a neurologist. It finds Dr. Michael Brown. Then it calls a schedule appointment tool to set up an appointment with the doctor. This then generates a success message. Let's go back to the CSV again. We now see the new request successfully appended to the CSV files. With a custom workflow, we can customize the flow as needed to bring in any kinds of steps or events. In the next chapter, we will use this agent as part of a multi-agent workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (2), [[Fetch]] (1)
> **Env Vars:** llm (5), csv (4), csp (1)
> **CLI Commands:** find (3)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)


### 6. Multi-agent Systems with LlamaIndex

[↑ Back to Table of Contents](#table-of-contents)

#### [Multi-agent systems](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=0)** - [Presenter] Multi-agent system is another agentic pattern that is becoming popular. Enterprise workflows are complex, requiring multiple systems and people to work together to achieve a goal. Creating specialized agents for specific tasks and getting them to work together, helps achieve complex automation while improving efficiency. Why do we need multi-agent systems? Why can't we build one big agent for the same task? Individual agents are built to handle a specific task, or provide services in a specific domain. A given workflow or goal, may need multiple tasks to be executed, or require multi-domain expertise. Individual agents can collaborate, and coordinate with each other to execute such workflows. It mimics how a team of humans work together to achieve a task, each leveraging their individual expertise, while taking help from others in other areas. Multi-agent systems follow popular software patterns of separation of concerns and distributed design. They help create reusable building blocks. A single agent can be built to be part of multiple workflows. Each agent can be built in-house, or acquired from open source or third parties. This helps in saving costs and time, while keeping solutions simple. Following the multi-agent pattern,
>
> **[1:33](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-systems-25230378?u=76281980&t=93)** allows building complex workflows from individual agent building blocks. This can leverage existing best-of-breed agents, and minimize custom work. In this chapter, we will build a multi-agent system that also uses the [[Routing]] pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Speakers:** - [presenter] (1)

#### [Multi-agent hospital application: Design](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=0)** - [Instructor] Let's now build a multi-agent hospital application using the agents we built previously in the course. We will discuss the design of this multi-agent system in this video. The multi-agent hospital application provides a suite of online services for patients. In a real life scenario, this will have several agents and backend integrations. In this example, we will only use the two agents we built earlier in the course to illustrate a multi-agent application. This application is front-ended by the hospital agent, which interacts with patients to receive and service their requests. The hospital agent integrates with the healthcare agent that can answer questions about symptoms, diseases, and medications. We will reuse the healthcare agent that we built in chapter three for this purpose. The scheduling agent helps patients to search for doctors by specialization and request appointments. We will reuse the scheduling agent that we built in chapter five for this purpose. Note that one of them uses the prebuilt [[React.js|react]] agent, while another uses the custom agent. The patient can send a request like find a neurologist, and request an appointment for Beth at the earliest. The hospital agent will analyze the request and route it to the right agent, which in this case would be the scheduling assistant. We can add any number of such agents
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/multi-agent-hospital-application-design-25234292?u=76281980&t=94)** to create a multi-agent application. We will now proceed to implement this application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Importing agents in a multi-agent application](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/importing-agents-in-a-multi-agent-application-25230376?u=76281980&t=0)** - [Instructor] The code for this chapter is available in the notebook code_06_XX Multi-agent Hospital application. There are many patterns available to integrate agents with a master agent. The agents can be available as a service exposing a [[Representational State Transfer (REST)|REST]] API. They can also be built as packages that the master agent can import inside the application. Since we are using notebooks, we simply run the notebook for the individual agents inside the notebook of the master agent. This is a naive approach, but it still works for illustration purposes. We will import them using the run command. This will execute the entire notebook of these agents and print out all the messages. These can be ignored. In a production scenario, though, it's recommended to implement agents as [[Microservices]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microservices]] (1)
> **Env Vars:** rest (1), api (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Set up the multi-agent application](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=0)** - [Instructor] Let's now set up the multi-agent application. Agents can be integrated into the master agent as tools. For this, we need to convert these agents as tools. The first agent, namely the healthcare agent, is built using the prebuilt [[React.js|react]] framework. We can use the query engine tool to convert this agent into a healthcare agent tool. As part of this call, we provide the name of the agent and the description. The description is used by the LLM to understand the capabilities of this tool, so it is recommended to be elaborate. The second agent for doctor appointments is built as an async agent, so we need to use a little trick to make the async call as a sync call to integrate with the master agent. We first define an async function that internally calls the scheduling agent. It waits on the scheduling agent for its response. Then we define a synchronous function which will be used with the function tool. The doc string of the function provides a description on the capabilities of this tool. Here we use async IO to run the asynchronous function with the input. Then we use the function tools featured in [[LlamaIndex]] to create the appointment scheduling tool. We then create the system prompt for the master agent. Then we create the multi-agent application
>
> **[1:34](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/set-up-the-multi-agent-application-25229360?u=76281980&t=94)** using the prebuilt react agent. We provide the list of tools, the LLM, and the context, which in this case is the system prompt. We also set it to verbose mode. We can also alternatively implement this master agent as a custom workflow and make it work asynchronously with all the tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[LlamaIndex]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** llm (2)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Execute the multi-agent application](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=0)** - [Instructor] Now let's proceed to execute the multi-agent application and observe its responses. First, we ask the question, which medication should I take for arthritis? The master agent analyzes the question and chooses the healthcare assistant. It then passes the request to this healthcare assistant. That agent then goes through the [[React.js|ReAct]] process. Here, it chooses its own query engine tool and returns the observation back to the master agent. The master agent then analyzes this response, is satisfied with it, and returns the final response. Then we ask a question, which doctors are cardiologists? The master agent now chooses the doctors_and_appointments agent and sends the request to that agent. This custom agent then goes through its own process. It is able to return the answer that Jack Smith is a cardiologist. The same answer is returned back to the user. The final question is to find a neurologist and set up an appointment with them for Trevor Hunt. This request is again routed to the doctors_and_appointments agent. This agent then logs the request for an appointment and gets back with a success message. We can see that this request is logged now
>
> **[1:37](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/execute-the-multi-agent-application-25228379?u=76281980&t=97)** in the Doctor appointment requests.csv file. This completes our course on building [[AI Agents]] with llama_index.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[AI Agents]] (1)
> **Code Identifiers:** doctors_and_appointments (2), llama_index (1)
> **File Paths:** requests.csv (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hands-on-agentic-ai-building-ai-agents-with-llamaindex/next-steps-25230379?u=76281980&t=1)** - We have reached the end of the course. By now you have an understanding of how Agentic AI works, and how to build simple agents, but this is just a foundation. If you want to start integrating these further, here are some recommendations for your learning journey. First, learn about Agentic AI capabilities in frameworks like LangGraph and AutoGen. Next, try out some agents with a few tools like RAG and third party integrations. Then build an AI agent for your organization, leveraging your learnings. AI always intrigues me. I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
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