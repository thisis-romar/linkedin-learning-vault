---
type: course
cssclasses:
  - lle-course
slug: build-ai-agents-and-chatbots-with-langgraph
url: "https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph"
duration_minutes: 74
duration: 1h 14m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQG43w2UoFGhqA/learning-public-crop_675_1200/B4DZSa0e5nG4Ac-/0/1737764237244?e=2147483647&amp;v=beta&amp;t=UXmQzVGx5Bl45kFaiIPMtIv7FGkn5fR8fMOFwfoTF0k"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Agentic AI Systems for Developers]]'
  - '[[Building AI Agents- Advanced Techniques for Developers]]'
prev_courses:
  - '[[Hands-On Agentic AI- Building AI Agents with LlamaIndex]]'
  - '[[Build Ai Agents And Automate Workflows With N8n]]'
next_courses:
  - '[[ChatGPT''s Operator- Automating Everyday Tasks with AI Agents]]'
  - '[[Model Context Protocol (MCP)- Hands-On with Agentic AI]]'
path_nav: '[{"path":"Building Agentic AI Systems for Developers","position":5,"total":6,"prev":"Hands-On Agentic AI- Building AI Agents with LlamaIndex","next":"ChatGPT''s Operator- Automating Everyday Tasks with AI Agents"},{"path":"Building AI Agents- Advanced Techniques for Developers","position":2,"total":4,"prev":"Build Ai Agents And Automate Workflows With N8n","next":"Model Context Protocol (MCP)- Hands-On with Agentic AI"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20AI%20Agents%20and%20Chatbots%20with%20LangGraph.md)

![Build AI Agents and Chatbots with LangGraph](https://media.licdn.com/dms/image/v2/D4D0DAQG43w2UoFGhqA/learning-public-crop_675_1200/B4DZSa0e5nG4Ac-/0/1737764237244?e=2147483647&amp;v=beta&amp;t=UXmQzVGx5Bl45kFaiIPMtIv7FGkn5fR8fMOFwfoTF0k)

# Build AI Agents and Chatbots with LangGraph

> Conversational chatbots are growing in popularity, and nearly every product or service supports one today. Agentic AI provides capabilities that can provide chatbots with higher levels of autonomy and value. In this course, instructor Kumaran Ponnambalam helps you to apply agentic AI to build sophisticated chatbots that can provide the next generation of self-service. Kumaran takes you through the

> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph) | 1h 14m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Introduction to the course
  - Setting up GitHub Codespaces
- [**1. Concepts Review**](#1-concepts-review) (5 videos)
  - AI chatbots: A review
  - Agentic AI: A review
  - Agentic chatbots
  - State and memory in chatbots
  - LangGraph for agentic AI
- [**2. Create a Basic ReAct Agent**](#2-create-a-basic-react-agent) (6 videos)
  - What is ReAct?
  - Basic ReAct agent design
  - Adding function tools for ReAct agent
  - Create a basic ReAct agent
  - Execute the basic ReAct agent
  - Debugging agents in Langchain
- [**3. Build a Product Q&A Chatbot**](#3-build-a-product-qa-chatbot) (5 videos)
  - Product Q&A chatbot design
  - Add a function tool to the product Q&A chatbot
  - Add a retriever tool to the product Q&A chatbot
  - Set up the product Q&A chatbot
  - Execute the product Q&A chatbot
- [**4. Custom Agents and Chatbots with LangGraph**](#4-custom-agents-and-chatbots-with-langgraph) (5 videos)
  - LangGraph concepts
  - LangGraph orders agent and chatbot design
  - Set up tools for the orders agent
  - Set up the LangGraph orders agent
  - Set up and execute the LangGraph chatbot
- [**5. Reflection-Based LangGraph Agents**](#5-reflection-based-langgraph-agents) (5 videos)
  - Reflection-based summary agent: Design
  - Engineer prompts for reflection
  - Set up the summarize-and-review agent with LangGraph
  - Set up the summarize-and-review chatbot with LangGraph
  - Execute the summarize-and-review chatbot
- [**6. Multi-agent Systems with LangGraph**](#6-multi-agent-systems-with-langgraph) (5 videos)
  - Multi-agent systems
  - Routing agent design in LangGraph
  - Using agents as LangGraph nodes
  - Set up the routing agent and chatbot in LangGraph
  - Execute the routing chatbot in LangGraph
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=0)** - AA agents have the power to change the way you do business.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=4)** You might be wondering how to build one.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=7)** This course will help you get a head start.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=9)** We will go over the basics of building chat bots with AA agents in LangGraph.
>
> **[0:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=16)** We will implement popular agentic patterns like planning, tool use, reflection and multi-agent systems using both pre-built templates and custom graphs.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=27)** My name is Kumaran Ponnambalam.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=29)** Let's get started with building AA agents and chat bots with LangGraph.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - aa (1)

#### Setting up GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=0)** - [Instructor] The code for this course is available in the repository build-ai-agents-and-chatbots-with-langgraph.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=9)** To open up Codespaces, go to Code and then hit Create Codespace on Main.
>
> **[0:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=16)** This will open up the IDE and will start setting up the required software.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=22)** The IDE is now ready.
>
> **[0:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=25)** Now go and open the notebook code_O2_XX Basic React Agent in LangGraph.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=33)** The first cell in this notebook has all the dependency packages that are required for the exercises in this course.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=40)** Go ahead and run these dependency installation.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=47)** Choose a Python environment.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=49)** For this course, it is recommended to use Python 3.10.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=57)** Once the dependencies have been successfully installed, you are ready to go ahead with the exercises.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Env Vars:** ide (2)
> **UI Navigation:** go to (1), open the (1)
> **Versions:** python 3 (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Concepts Review

> [↑ Back to Table of Contents](#table-of-contents)

#### AI chatbots: A review
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=0)** - This course focuses on two technology concepts, chatbots and agentic AI.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=7)** Let's quickly review their key concepts and what each of them bring to the table.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=12)** If you are not familiar with these concepts, I highly recommend additional reading before starting this course, as mentioned in the prerequisites, Let's begin with chatbots.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=24)** Chatbots are built upon conversational AI.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=28)** What is conversational AI?
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=30)** Conversational AI simulates a human conversation with machines replacing humans at one end of the dialogue.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=38)** Conversational AI uses capabilities like natural language, understanding, processing and generation to communicate with other users.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=49)** Chatbots are built on these conversational AI technologies.
>
> **[0:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=53)** They interact with humans, understand their intentions and respond to their queries.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=58)** Behind the scenes, they use systems and technologies for natural language processing and generation.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=65)** What are some key characteristics of Chatbots?
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=68)** Chatbots use natural language inputs and outputs.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=72)** This is free format text and can be in any language.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=76)** They may support text, voice or multimedia interfaces, like images and video.
>
> **[1:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=83)** While text is popular, other types of media are gaining popularity.
>
> **[1:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=88)** Each chat bot has its own persona and purpose.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=92)** This determines its use and behavior while interacting with humans.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=97)** Chatbots are typically integrated with other backend systems for processing, querying, workflows and response generation.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=107)** They support conversational memory.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=109)** They remember the history of conversations with a specific user and can leverage this memory for improving responses.
>
> **[1:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=117)** They can handle small-talk, like greetings, chitchat and acknowledgements.
>
> **[2:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=123)** Chatbots have been deployed for a wide variety of use cases across several industries.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=129)** This includes customer support, e-commerce, healthcare, financial services, travel, hospitality, education and training, human resources, marketing, personal productivity and government services.
>
> **[2:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=144)** If you are not familiar with chatbots, I highly recommend additional reading before proceeding with this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Speakers:** - this (1)

#### Agentic AI: A review
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=0)** - [Instructor] The other key concept of this course is agentic AI.
>
> **[0:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=5)** What is agentic AI?
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=7)** This is generative AI that is designed to operate autonomously with minimal human intervention, make decisions, and take actions towards specific goals.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=17)** If you are not familiar with the concepts of agentic AI, I highly recommend further reading before proceeding with this course.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=26)** Let's quickly review the key patterns in agentic AI.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=30)** The planning pattern is used to decide on a course of action to fulfill a goal or breakdown a complex task into smaller, manageable steps.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=42)** The tool use pattern is used to select the right tool from a toolset to solve a specific problem.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=49)** Then, identify the inputs to the tool, invoke the tool, and return results.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=55)** The routing pattern is used to route a request to alternate destinations by analyzing the input and context of the request.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=64)** The reflection pattern is used to review outputs, artifacts or decisions, and then provide constructive feedback to improve accuracy.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=74)** The multi-agent pattern is used to create applications where multiple independent AI agents can work together to accomplish a complex task.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=86)** We will be implementing chatbots for each of these patterns in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Agentic chatbots
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=0)** - [Instructor] Now that we have reviewed chatbots and agentic AI, let's discuss the power of combining both together.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=8)** What are agentic chatbots?
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=11)** Agentic chatbots provide the best of both worlds.
>
> **[0:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=14)** They combine the autonomy and decision-making capabilities of agents with the conversational capabilities of chatbots.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=22)** This helps create near human-like user experiences that deliver efficiency and effectiveness for enterprises.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=31)** Chatbots powered by agentic AI deliver key capabilities that help create powerful AI assistants.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=39)** The chatbot module provides user interfaces, multimedia support, conversational memory, 24/7 availability, integrations with other applications, and multi-language support.
>
> **[0:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=53)** It provides the infrastructure for the agentic chatbot.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=57)** Agents, on the other hand, bring in decision making, tool use, multi-agent support, personalization, automated learning, actions, and reflection.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=69)** This creates advanced user experiences with complex query and workflow capabilities.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=76)** Together they provide enhanced productivity and efficiency for enterprises.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=82)** In this course, we will explore key patterns and use cases for building agentic chatbots.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=89)** How do the chatbot and agents co-exist together in an application?
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=94)** The user interface is provided by the chatbot.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=98)** Users interact with the chatbot to ask questions and get answers.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=103)** The chatbot also has conversational memory or history.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=108)** It keeps track of all the interactions between the user and the chatbot.
>
> **[1:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=113)** This memory can be leveraged to provide context and answer follow up questions.
>
> **[1:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=119)** The chatbot behind the scenes can talk to one or more agents.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=124)** Each agent may be specialized in a specific domain or task.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=129)** The chatbot invokes the required agents, passes on the input from the user, gets responses, and delivers the responses back to the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), module (1), interface (1)
> **Speakers:** - [instructor] (1)

#### State and memory in chatbots
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=0)** - [Instructor] When using chatbots and agents, there are two memory structures that are used to track history, the agent state and chatbot conversation memory.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=11)** These concepts can be confusing, so let's try to understand the purpose and scope for each of them.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=18)** Let's discuss these structures side by side.
>
> **[0:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=21)** We begin with agent state.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=23)** Agent state is managed by each agent in the system internally within its own memory.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=30)** Each agent has its own state that is not shared with other agents.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=36)** It is maintained for each prompt or query or goal that is sent to the agent to resolve.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=43)** Once a response to the prompt is generated, the state is discarded or archived.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=49)** Agent state saves and tracks the execution plan for the user prompt.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=54)** This plan is generated by the LLM iteratively as the agent attempts to answer the query.
>
> **[1:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=61)** Agent state also tracks the tools used for execution, their input values and output values.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=69)** Outputs of one tool become inputs to the next tool in the execution plan.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=74)** In addition to the standard elements, custom data can also be tracked if needed by the agent based on the use case.
>
> **[1:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=83)** Conversation memory is managed by the chatbot.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=86)** Some of that memory can be provided as input to the agent if required by the use case.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=93)** Again, this is provided as input, not as shared memory.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=97)** Conversation memory is maintained for the entire conversation or session of the chatbot.
>
> **[1:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=104)** This is typically saved to a persistent store and then retrieved if the session continues in the future.
>
> **[1:51](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=111)** It has multiple prompts from the user and corresponding final responses sent back to the user.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=118)** Custom data can also be archived if needed based on the use case.
>
> **[2:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=123)** Metrics like accuracy, latency and relevancy can be tracked based on the use case.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=129)** Let's look at a typical interaction between the chatbot and the agent and how both conversation memory and agent state are handled.
>
> **[2:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=139)** Let's say we have a chatbot that integrates with two agents, Agent 1 and Agent 2.
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=145)** A user sends a prompt or query to the chatbot.
>
> **[2:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=148)** The chatbot decides to send that prompt to Agent 1 Agent 1 will create a separate state for that prompt in it's memory.
>
> **[2:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=158)** As the agent proceeds to answer the prompt, it'll store its execution plan, tool inputs, tool outputs and LLM inputs and outputs in the state.
>
> **[2:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=168)** Individual modules or functions within the agent will read and update the state.
>
> **[2:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=174)** In addition, the chatbot will also create a conversation memory for the session.
>
> **[2:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=179)** It'll keep track of the prompts and responses between the user and the chatbot in this memory.
>
> **[3:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=186)** The user now sends a second prompt for the session.
>
> **[3:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=189)** The chatbot decides to send this to Agent 2.
>
> **[3:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=193)** Agent 2 will create a new state for this prompt and track its execution.
>
> **[3:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=197)** In addition, the chatbot will also open the prompt and its response to the conversation memory.
>
> **[3:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=204)** Then the user sends prompt three.
>
> **[3:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=207)** The chatbot decides to send this prompt to both the agents.
>
> **[3:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=211)** Now, there are two states created.
>
> **[3:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=213)** Each agent creates its own internal state for this prompt and tracks their execution independently.
>
> **[3:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=220)** Again, the prompt and the final response from the agents will be added to the conversation history.
>
> **[3:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=226)** We will implement agent state and memory in examples later in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case. (4)
> **Env Vars:** llm (2)
> **Cross-References:** later in (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### LangGraph for agentic AI
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=0)** - [Instructor] In this course, we will be using LangGraph for our examples.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=4)** Let's quickly review its features.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=7)** What is LangGraph?
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=9)** It is a framework developed in LangChain.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=12)** LangChain is a popular framework for Generative AI.
>
> **[0:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=15)** It's recommended to learn about LangChain if you are not already familiar with it.
>
> **[0:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=21)** LangGraph helps to create stateful multi-agent applications.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=26)** It can orchestrate interactions between agents and managed state.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=31)** It is a workflow orchestration engine.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=33)** In addition to agents, it can also orchestrate interactions with tools, the LLMs and third party applications.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=42)** Being part of LangChain, it integrates well with other LangChain capabilities.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=47)** For example, a retriever built using LangChain can be easily integrated as a tool in LangGraph.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=55)** The power of LangGraph comes from its ability to create custom workflows as needed by the use case.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=62)** What are the key LangGraph features?
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=65)** It uses a graph based workflow design.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=68)** Graphs are used to represent the elements of the workflow and how they interact with each other.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=74)** It is implemented as a directed graph.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=77)** This graph has processing nodes, edges that connect the nodes, and conditional edges that allow transition based on conditional checks.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=86)** We will explode them later in the course.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=89)** When a prompt comes into an agent, the graph is executed through its nodes.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=94)** The nodes process the inputs, create outputs, and then pass control to the next node.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=100)** LangGraph helps to manage state while the workflow is executed and tracks all the plans, inputs and outputs.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=108)** It enables multi-agent collaboration by representing other agents as nodes within the workflow.
>
> **[1:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=115)** It also has streaming support, so intermediate results can be delivered quickly to the user while they are processed by the agent.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=124)** With this background, let's now start building agents with LangGraph.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), pass (1)
> **Definitions:** is a  (3)
> **CLI Commands:** node (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. Create a Basic ReAct Agent

> [↑ Back to Table of Contents](#table-of-contents)

#### What is ReAct?
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=0)** - [Instructor] We will be building an agentic chatbot using the ReAct framework in this chapter.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=6)** Before we get there, let's quickly review what the ReAct framework is.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=12)** The ReAct framework is a popular framework for building AI agents.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=17)** It was originally published as a paper and then adopted by popular agent frameworks.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=24)** ReAct stands for reason and act.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=27)** It involves using the LLM to first understand and reason the user request, then act upon it.
>
> **[0:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=34)** It's an iterative process using the LLM to decide on the next execution step, executing the step, and then using the LLM to decide if there are more steps needed.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=45)** ReAct provides enhanced explainability for the actions taken by the agent.
>
> **[0:51](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=51)** It has multiple use cases, including answering customer queries, deciding on the course of action for a workflow, or reviewing a document.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=62)** How does the ReAct framework work?
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=64)** It uses a thought-action-observation pattern.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=68)** Let's say we have a user trying to interact with the agent.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=73)** The user sends a question or prompt to the agent.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=77)** The question or prompt first goes through a thought block.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=81)** Here, an LLM is used to analyze the input and decide on the next steps to execute.
>
> **[1:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=88)** This set of steps or actions is then sent to the action block.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=93)** Here, the agent executes the set of actions, including rule calling, processing, or computations.
>
> **[1:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=101)** The actions generate a set of outputs.
>
> **[1:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=104)** The outputs are then sent to the observation block.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=108)** Here, an LLM is used to validate the results obtained from the actions and check if the results satisfactorily answer the user questions.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=118)** If the LLM decides that there are more steps needed, it is sent back again to the thought block.
>
> **[2:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=125)** The thought block will analyze the question and the intermediate results available to decide on the next set of actions.
>
> **[2:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=133)** This then goes through an iterative process of thought-action-observation until satisfactory results are obtained.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=142)** The final answer is then sent to the user by the observation block.
>
> **[2:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=146)** The LLM plays a key role in both thought and observation blocks to make decisions and trigger actions.

> [!info]- Semantic Content
>
> **Env Vars:** llm (7)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), stands for (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Basic ReAct agent design
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=0)** - [Instructor] Let's now create our first basic ReAct agent.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=4)** We will discuss this ReAct agent design in this video.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=8)** This is a simple example for building ReAct agents with LangGraph.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=13)** We will build more advanced agents in the later chapters.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=17)** We will be building a math agent that solves math problems for addition and multiplication.
>
> **[0:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=25)** This agent will take a text input from the user that contains the math problem and provide the results.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=33)** To do the math, it uses tools.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=35)** The first tool is a function tool called find_sum().
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=39)** Given two integers, this function returns their sum.
>
> **[0:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=44)** The second tool is a function tool called find_product().
>
> **[0:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=48)** This tool returns the product of two integers.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=52)** The user will provide an input, like What is the sum of 2 and 3?
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=57)** The agent will use an LLM to decide on the tools to use, then execute the tools, and return the results.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=64)** For this chapter, we will be building the agent only and not a chatbot.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=69)** We will use chatbots in the later exercises.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** find_sum (1), find_product (1)
> **Env Vars:** llm (1)
> **Speakers:** - [instructor] (1)

#### Adding function tools for ReAct agent
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=0)** - [Instructor] Let's now proceed to implement the basic agent.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=4)** We will learn LangGraph usage as part of this exercise.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=9)** The code for this chapter is available in the notebook code_O2_XX Basic ReAct Agent in LangGraph.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=17)** In this video, let's set up the function tools for the ReAct agent.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=24)** We begin by importing the tool package from LangChain.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=28)** The first tool that we will create is the find_sum tool.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=33)** The @tool decorator is used to set up this function as a tool for future use.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=39)** This eliminates the step to explicitly create a function tool.
>
> **[0:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=44)** Inside the function, we use a docstring comment to describe the function.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=49)** This docstring is critical for tool use.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=52)** This description provided here is used by the LLM to determine the capabilities of this tool, so be as elaborate and descriptive as possible when writing this docstring.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=65)** Then comes the actual functionality.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=68)** This function simply returns the sum of the two input integers, x and y.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=74)** In a similar fashion, we set up the second tool for find_product.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=79)** This returns the product of the two input integers, x and y.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=84)** We will proceed to create the ReAct agent in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (2)
> **Prerequisites:** set up (3)
> **Code Identifiers:** find_sum (1), find_product (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Create a basic ReAct agent
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=0)** - [Instructor] Let's now proceed to create the basic ReAct math agent.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=4)** We will use Azure OpenAI models for the exercises in this course.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=9)** First, we will set up the models.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=12)** We need to set up the APA key and APA endpoint for the model hosted on Azure.
>
> **[0:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=19)** Please replace these values with those specific to your account.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=23)** Alternatively, you can use any of the other Langchain supported models, too, instead of Azure OpenAI.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=30)** Please refer to Langchain documentation on how to create model references for other models.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=37)** We will create the LLM using Azure Chat OpenAI function.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=42)** We need to use the chat capabilities for requests and responses.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=47)** We will use GPT-4o for the model name.
>
> **[0:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=50)** The APA version is also set here.
>
> **[0:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=53)** Again, you should replace them with values specific to your implementation.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=58)** This can be used to test if the model has been set up correctly.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=64)** For this agent, we will use the prebuilt ReAct agent in LangGraph.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=69)** We import this create_react_agent class for this purpose.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=73)** We will also import the message types for the chat, namely AIMessage, HumanMessage, and SystemMessage.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=81)** The tools list is set up in the agent_tools variable.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=85)** We include the find_sum and find_product tools we created earlier.
>
> **[1:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=90)** Next, we define the system prompt of type SystemMessage.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=95)** This message provides the purpose and persona for the agent and defines what the agent does and how it responds to user requests.
>
> **[1:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=104)** We tell the agent to only use the tool's provided format, and not solve it using the LLM's intelligent.
>
> **[1:51](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=111)** Then we define an agent graph using the create_react_agent function.
>
> **[1:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=117)** We pass the LLM model, system_prompt, and tools as inputs.
>
> **[2:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=122)** This internally creates a LangGraph graph and initializes it.
>
> **[2:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=127)** Note that the state_modifier variable is used to pass the system_prompt.
>
> **[2:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=132)** In the next video, we will execute this agent.

> [!info]- Semantic Content
>
> **Code Identifiers:** create_react_agent (2), system_prompt (2), agent_tools (1), find_sum (1), find_product (1)
> **Env Vars:** apa (3), llm (3), gpt (1)
> **Code Keywords:** function (2), pass (2), let (1)
> **Prerequisites:** set up (4)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Execute the basic ReAct agent
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=0)** - [Instructor] Let's execute the math agent we created in the previous video.
>
> **[0:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=5)** We first create the input to the agent.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=8)** We defined the messages with the user role.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=11)** We can also alternatively use the Human Message function for this purpose.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=17)** The question we ask is, "What is the sum of 2 and 3?"
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=22)** Next, we invoke the agent_graph with its inputs.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=26)** The agent_graph will return the final step and all the intermediate steps in finding the answer.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=32)** This is extracted from the agent state.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=35)** It essentially provides a conversation between the human, the LLM, and the tools.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=41)** First, we print the final answer by accessing the last message in the result list.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=47)** Then, we print each step to look at how the agent executed the request, The pretty print function available in the message formats the message for easy rating.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=59)** Let's review the results now.
>
> **[1:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=61)** First, we see the final answer that is printed as, "The sum of 2 and 3 is 5."
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=68)** This is correct.
>
> **[1:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=70)** Then, we walk through the list of messages that shows how the agent found the final answer.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=76)** The first message is the Human Message, or input, which is the original question to the agent.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=82)** Next, we have the Ai Message.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=84)** This is the LLM executing the thought block.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=87)** It sees the list of tools available and understands their capability using their docstring.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=93)** It decides that find_sum is the right tool to use.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=97)** It also has figured out the values for the function arguments as 2 and 3.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=103)** The next message is the Tool Message.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=105)** This is the output of the tool.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=107)** The tool returned 5.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=109)** The last message is the Ai Message.
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=112)** Here, the LLM looks at the results from the tool and decides that it has enough information to generate the final answer.
>
> **[1:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=119)** It generates the final message as, "The sum of 2 and 3 is 5."
>
> **[2:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=125)** Then, we execute a second input.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=128)** Here, we provide a more complex prompt, "What is 3 multiplied by 2 and 5 plus 1?"
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=135)** This has two problems in one prompt.
>
> **[2:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=137)** We follow the same pattern to print the messages.
>
> **[2:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=141)** We see that the LLM has correctly answered both the questions with the answer as 6.
>
> **[2:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=148)** Looking at the trace, we see that the LLM has chosen both tools with the right parameters.
>
> **[2:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=155)** Both tools are executed concurrently and the results returned.
>
> **[2:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=159)** The final output is also printed.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2)
> **Env Vars:** llm (5)
> **Code Identifiers:** agent_graph (2), find_sum (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Debugging agents in Langchain
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=0)** - [Instructor] When building any software application, debug ability is a key requirement and concern.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=6)** How do we debug agents built with LangGraph?
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=9)** LangGraph provides a debug flag when creating agents.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=13)** When this flag is used, it creates a verbose output that describes every step with all its inputs and outputs.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=22)** Let's set up the agent_graph again with the debug flag set to True.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=27)** Let's execute the first prompt again.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=30)** On invoking the graph, a verbose log is printed.
>
> **[0:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=34)** Walking through the output, we start with checkpoint 1, which is the start of the graph.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=41)** The checkpoints indicate the state of the graph.
>
> **[0:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=44)** Next, we see the input human message, an ID is assigned to the prompt that tracks its state.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=52)** The next step is using the LLM to come up with the execution plan.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=57)** This provides information about what the LLM has decided to do.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=62)** In this case, it is to call the find_sum function.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=65)** Also, it prints metrics like token usage too.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=69)** I recommend reading through each of these remaining steps to understand what the agent does behind the scenes.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=77)** When troubleshooting is needed, this feature can be turned on to debug the agent.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), function (1)
> **Code Identifiers:** agent_graph (1), find_sum (1)
> **Env Vars:** llm (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Build a Product Q&A Chatbot

> [↑ Back to Table of Contents](#table-of-contents)

#### Product Q&A chatbot design
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=0)** - [Instructor] In this chapter, we will build a production-grade agentic chatbot.
>
> **[0:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=5)** The use case here is to build an agentic chatbot that can answer questions about products.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=12)** In this case, it's a fictional company, selling laptops that wants to have a self-service chatbot to answer user questions about these laptops.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=22)** Let's first discuss the design of this agentic chatbot.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=26)** First, we have a function tool called Get Laptop Price.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=31)** This tool is used to find the price of a given laptop.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=35)** It uses an RDBMS behind the scenes to keep track of laptop prices.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=41)** For our specific illustration, instead of an RDBMS database, we will use an in-memory PANDAS data frame.
>
> **[0:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=50)** In real world situations, this can access any database, or API, to find the prices.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=57)** Next, we have a retriever tool called Get Product Features.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=62)** This tool is built using a PDF file that contains descriptions of the laptops.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=68)** Embeddings for this PDF are created and stored in a chroma vector database.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=74)** The retriever tool retrieves passages from the document, based on the input query.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=81)** Both these tools are provided to a question and answer agent for laptops.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=87)** This agent is front-ended by a chatbot.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=91)** The chatbot can handle conversations with a user, keep track of the conversation history, and communicate with the agent.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=100)** The user provides a question like, what are the features and pricing for MacRight?
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=106)** And the chatbot will answer this question.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=109)** Let's proceed to build this chatbot now.

> [!info]- Semantic Content
>
> **Env Vars:** rdbms (2), pdf (2), pandas (1), api (1)
> **Code Keywords:** let (2), case, (1), self (1), function (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### Add a function tool to the product Q&A chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=0)** - [Instructor] The code for this chapter is available in the notebook code_03_XX Product QnA Agentic chatbot.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=9)** To implement the QnA agent, we begin by adding tools.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=13)** First, we need to set up the LLM for this agent similar to how we set it up in the previous exercise.
>
> **[0:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=21)** Because we are going to use embeddings, we also need to set up an embedding model.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=26)** We will use AzureOpenAIEmbeddings for this purpose.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=31)** Let's now proceed to add the product pricing function tool.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=35)** The list of laptops and their prices are available in the Laptop pricing.csv file.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=43)** This is under the data folder in the exercise files.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=52)** We load this file into a Pandas dataframe.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=55)** We will use this data frame to mimic an RDBMS.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=59)** Next, we proceed to define the tool get_laptop_price.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=64)** It takes the laptop name as the input string and returns the price.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=68)** The dock string describes the capabilities of this tool.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=73)** This tool performs a substring match between the input name and the laptop name in the dataframe and returns the price.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=80)** If no match is found, it returns minus one.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=84)** We use the Pandas dataframe search capabilities to find the record in the dataframe that matches the input name.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=91)** We return the price from the dataframe.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=94)** We also have commanded out test scripts to test the function tools standalone.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=99)** Let's create the retriever tool in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2)
> **Env Vars:** llm (1), rdbms (1)
> **Prerequisites:** set up (2)
> **File Paths:** pricing.csv (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** get_laptop_price (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### Add a retriever tool to the product Q&A chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=0)** - [Instructor] Now, let's proceed to add a retriever tool to the agent.
>
> **[0:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=5)** First, we need to create a vector database based on products descriptions.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=10)** The Laptop product descriptions.pdf file under the data directory contains these fictional laptop descriptions.
>
> **[0:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=19)** For imports, we need to additionally import the pysqlite3 package and map it to the sqlite3 package for Chroma DB to work.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=29)** We first load the PDF file up using the PyPDFLoader available in the langchain-community package.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=37)** Then, we chunk this document using the recursive character text splitter with a chunk size of 1,024.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=45)** Next, we proceed to create a vector database using chroma in memory database.
>
> **[0:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=50)** This single step does the embedding for the chunks and also stores the record in the chroma database.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=57)** Finally, we create a retriever tool.
>
> **[1:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=60)** As input, we provide the chroma database.
>
> **[1:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=63)** We also provide a description for the tool.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=66)** This description is used by the agent's LLM to understand the capabilities of the retriever tool and make decisions on its use.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=74)** So care should be taken to provide elaborate descriptions when creating such tools.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=80)** We will set up the product Q&A chatbot in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** sqlite3 (1), make (1)
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** pdf (1), llm (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Set up the product Q&A chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=0)** - [Instructor] To set up the agent, we will continue to use the pre-built React agent for this example.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=6)** This pre-built function doubles as both the agent and the chat bot.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=11)** We will also use a memory saver.
>
> **[0:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=14)** The memory saver provides out-of-the-box conversation memory for the chat bot.
>
> **[0:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=20)** First, we define the system message for the product Q&A chat bot.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=24)** This sets up the behavior of the agent specifically on what information it will use to answer questions.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=33)** (computer mouse clicks) We set up the list of tools based on the ones we have created in the earlier videos.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=40)** Next, we create a memory saver instance as the check pointer.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=45)** This helps to track conversation memory across multiple prompts and helps the agent to answer follow-up questions.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=54)** We then create the React agent.
>
> **[0:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=56)** In addition to the model, tools, and system prompt, we now provide the check pointer also as an input.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=64)** This creates the agent and the chat bot in one step.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=69)** When running this agent as a chat bot, we need to identify each conversation uniquely so that the chat bot can track conversation history.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=79)** For this purpose, we create a config object.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=82)** In this config object we provide a unique thread ID, this is a unique identifier that links all prompts into a single conversation.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=93)** We can use this React agent in request response mode or in streaming mode.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=98)** Here is an example of how we can use this in streaming mode.
>
> **[1:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=102)** In the request response mode, we saw in the previous chapter, the agent waits until the final response is ready and then delivers all the results.
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=112)** In the streaming mode, where we use the stream function, the agent sends the results for intermediate steps immediately after they are available.
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=121)** We can run this code and review the results.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=124)** We ask a question about the features and pricing for GammaAir.
>
> **[2:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=130)** We do a pretty_print to show the intermediate steps.
>
> **[2:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=134)** Here the agent decides to call both the product features retriever tool and the get_laptop_price tool.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=142)** Then it combines the results and then creates the final output.
>
> **[2:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=147)** In the next video, we will execute this chat bot as a full conversation and review the results.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), continue (1)
> **Code Identifiers:** pretty_print (1), get_laptop_price (1)
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Execute the product Q&A chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=0)** - [Instructor] Let's execute the product QNA chatbot with a list of back-and-forth conversations.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=6)** We first create a list of user messages, simulating a complete conversation, including greetings and follow-up questions.
>
> **[0:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=15)** We set up a unique thread ID as an identifier for this conversation.
>
> **[0:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=20)** We then send each message to the chatbot and print the responses.
>
> **[0:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=25)** Let's run this code and review the results.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=28)** The user first starts with the hello.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=31)** The chatbot responds with an appropriate message, including a purpose for what it does.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=37)** There is no tool used here.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=39)** Next, the user says that the user is trying to buy a laptop.
>
> **[0:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=44)** The laptop responds with a menu of questions it can answer about laptops.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=49)** The user asks for a list of laptop names, and the agent responds with a list.
>
> **[0:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=56)** This list came from the retriever tool.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=59)** Then the user asks about a specific laptop called SpectraBook.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=64)** The chatbot provides details for this laptop.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=68)** The next question is a follow-up question on the cost.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=72)** It does not have the specific name of the laptop, but the chatbot has conversation memory.
>
> **[1:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=78)** It was able to reference the previous conversation and get the context.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=82)** It then uses the context to get the price for the specific laptop.
>
> **[1:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=88)** Finally, the user thanks the chatbot, and the chatbot responds accordingly.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=93)** This is an example of a real-world conversation.
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=96)** As seen here, the ability of the agent to understand the user question and pick the right tool helps enrich the conversation.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=106)** In the next example, let's test how the conversation memory of the chatbot works.
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=112)** For this, we are going to create two conversations, send the same follow-up question, and see how the chatbot uses its memory.
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=121)** We first create a function called execute prompt.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=124)** This takes in as input a user identifier, a config object, and a prompt.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=129)** It executes the prompt using the thread ID in the config object and prints the results.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=135)** We create two threads and corresponding config objects.
>
> **[2:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=139)** This simulates two users using the chatbot concurrently, then we execute the threads.
>
> **[2:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=146)** For the first user, we ask the question about SpectraBook.
>
> **[2:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=150)** For the second user, we ask a question about GammaAir, then we ask the same question, what is its price, for both users.
>
> **[2:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=159)** Let's review the outputs for this code.
>
> **[2:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=163)** We see that the chatbot answers about the features for both the laptops correctly to the corresponding users, then for the follow-up question, it uses the conversation memory to correctly identify the laptop that each user is asking and prints their price.
>
> **[3:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=180)** This completes our example for creating a React chatbot using pre-built functions.
>
> **[3:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=186)** In the next chapter, we will create a custom chatbot using LangGraph.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), this, (1), function (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** qna (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Custom Agents and Chatbots with LangGraph

> [↑ Back to Table of Contents](#table-of-contents)

#### LangGraph concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=0)** - [Instructor] In this chapter, we will create a custom orders agent.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=4)** We will use LangGraph to create a graph for this agent, and then execute the graph.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=11)** We discussed briefly about LangGraph in the first chapter.
>
> **[0:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=15)** Now let's discuss some key elements of LangGraph.
>
> **[0:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=19)** We will be using these concepts in our implementation later.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=23)** So what are the building blocks for a graph?
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=26)** We begin with nodes.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=28)** A node is a place in the graph where some logic is executed.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=33)** While building agents, we deal with a few types of nodes.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=37)** An LLM node is used to integrate with an LLM to analyze prompts, create actions, and review observations.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=46)** A tool node is used to execute tools.
>
> **[0:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=50)** An action node can be used to invoke another agent from this agent.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=55)** A logic node can be used for any custom logic outside of these types.
>
> **[1:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=61)** An edge connects nodes.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=64)** It is used to pass control from one node to another.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=68)** In the case of this basic edge, when one node finishes processing data, it passes control to the next node in the graph through an edge.
>
> **[1:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=78)** Then comes conditional edge.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=80)** A conditional edge is used to route control to other edges based on a conditional check.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=87)** Based on the check, the graph may route the request to one or more alternate nodes available.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=94)** We can wire the nodes in the graph using edges and conditional edges.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=99)** The graph should be correctly wired to ensure that there are no orphan nodes.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=106)** A graph begins with a start block.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=109)** This usually connects to the first node in the graph that will be executed.
>
> **[1:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=114)** The graph similarly has an end block that is called by the last node.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=120)** As seen here, a node may decide to end the graph if it determines that the job is finished.
>
> **[2:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=127)** Finally, there is agent state.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=129)** Agent state maintains information about the execution of the graph.
>
> **[2:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=134)** Each node writes its output to the state.
>
> **[2:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=138)** Subsequent nodes read the state to determine its inputs.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=142)** No data is exchanged through the edges.
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=145)** Data is always exchanged through the agent state.
>
> **[2:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=149)** With this background, let's design our custom orders ChatBot in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12)
> **Code Keywords:** let (2), pass (1), finally, (1)
> **Env Vars:** llm (2)
> **Cross-References:** we discussed (1), in the next (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### LangGraph orders agent and chatbot design
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=0)** - [Instructor] Let's now design our custom agentic chatbot, including the graph for the agent.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=7)** We are going to build an orders chatbot that can answer questions about laptop orders.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=13)** In addition, it also has actions.
>
> **[0:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=16)** This means it can also update orders based on user input.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=22)** It has an RDBMS that stores details for all laptop orders.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=28)** For our example, though, we will simply use a Pandas Data Frame to represent a table.
>
> **[0:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=34)** The first function tool we have is get_order_details.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=37)** This tool can provide details for a specific order based on an order ID.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=43)** The next function tool we have is update_quantity.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=47)** This can update the quantity of laptops in an order, given an order ID.
>
> **[0:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=53)** To keep things simple, each order will only have one laptop type.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=58)** In a real-world application, there can be several function tools for both querying and updating information.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=66)** The orders agent uses these two function tools.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=69)** It can search and update orders based on user input.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=74)** It is hooked on to an LLM for analyzing prompts, determining execution plans, and reviewing outputs.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=81)** The orders chatbot provides the user interface and conversation memory and is hooked on to the orders agent.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=89)** A user can provide a query like, "Show me the order details for ORD-7311," and the chatbot would be able to answer it.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=99)** Let's now design the graph for the orders agent.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=103)** The first node in the graph is the orders LLM.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=107)** It reads the input query and sends it to the LLM to determine the next steps.
>
> **[1:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=113)** The LLM will return a list of actions.
>
> **[1:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=116)** In this case, it will provide the tool to call and the parameters for the tool.
>
> **[2:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=122)** The orders LLM node stores the incoming user query, as well as the LLM output to an agent state.
>
> **[2:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=130)** This includes the tool to call and the parameters to the tool.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=135)** The orders LLM then invokes a conditional edge.
>
> **[2:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=139)** This edge checks if the next action determined by the LLM is a tool call.
>
> **[2:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=144)** For this, it reads the output of the previous node from the agent state.
>
> **[2:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=150)** It also writes its output back to the agent state.
>
> **[2:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=154)** If the next action is a tool call, the control goes to the order tools node.
>
> **[2:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=159)** The order tool nodes reach the tool to execute and the parameters for that tool from the agent state.
>
> **[2:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=167)** It will execute the tool, fetch results, and write those results back to the agent state.
>
> **[2:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=173)** The control then moves back to the orders LLM.
>
> **[2:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=176)** The orders LLM node will read the results of this tool call from the agent state.
>
> **[3:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=182)** It will then analyze the results to determine if it has sufficient information to produce the final output.
>
> **[3:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=189)** If it has the information, it will generate the final output and write it back to the agent state.
>
> **[3:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=196)** If not, it will determine the next step, which could be a tool call.
>
> **[3:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=201)** The same flow repeats all over again until the final result is obtained.
>
> **[3:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=206)** If the final result is available, then the conditional edge will end the call.
>
> **[3:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=212)** The results in the agent state are passed back to the calling function, which is the chatbot.
>
> **[3:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=218)** Let's now proceed to implement this graph.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), type. (1), interface (1), case, (1)
> **Env Vars:** llm (10), rdbms (1), ord (1)
> **CLI Commands:** node (5)
> **Code Identifiers:** get_order_details (1), update_quantity (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Set up tools for the orders agent
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=0)** - [Instructor] In this video, let's set up the tools required for the custom orders agent.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=6)** We have done a similar setup before, so we will not discuss the details on how the tools are set up.
>
> **[0:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=14)** We begin by setting up the LLM model for the custom orders agent.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=18)** As before, we will use Azure OpenAI GPT-4o model for this purpose.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=26)** For setting up the laptop orders database, we have a list of orders in the data/Laptop Orders.csv file.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=35)** We will load this file into a pandas DataFrame and print its contents.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=41)** The first tool we will create is the get order details tool.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=46)** It takes as input an order ID.
>
> **[0:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=48)** It searches the product orders DataFrame for records matching this ID.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=54)** If no match is found, it will return a minus one value.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=58)** If a match is found, it will return the contents of the record as a dictionary.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=65)** The second tool we will create is the update quantity tool.
>
> **[1:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=70)** It will take as input an order ID and the new quantity to be updated in that order.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=76)** First, it searches the DataFrame for a matching order.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=80)** If no match is found, it will return a minus one.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=84)** If an order is found, it will update the order quantity to the new value and return true.
>
> **[1:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=90)** The dot string for each of these tools describe their internals to the LLM.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=95)** The test code is commented out, and that can be used to test these functions individually before adding them to the agent.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), gpt (1)
> **Prerequisites:** set up (2), setup (1)
> **File Paths:** orders.csv (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Set up the LangGraph orders agent
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=0)** - [Instructor] Now let's proceed to set up the graph and the agent for orders.
>
> **[0:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=5)** The code discussed here is a template that can be followed for setting up agent graphs in general.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=13)** We begin by creating a class, OrdersAgentState.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=17)** This is of type TypedDict.
>
> **[0:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=20)** In this class is a single messages attribute.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=23)** This is a list of messages.
>
> **[0:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=25)** It can be a human message, an AI message, or a system message.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=29)** The operator specified is add.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=32)** This means that as new messages come in, they are added to the end of the list.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=37)** This is used to keep track of state in the agent.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=42)** Then we define the OrdersAgent as a class.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=46)** There is an init method to this class.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=49)** We pass in the LLM model, the list of tools available, the system prompt, and a debug flag to the init function.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=57)** This list can be customized as required based on the requirements of the use case.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=64)** We store the system_prompt and the debug flag in the instance variables.
>
> **[1:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=71)** Then we create an agent_graph from the StateGraph method by passing the agent state as the input.
>
> **[1:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=78)** This creates a template graph.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=80)** To this graph, we can now add nodes.
>
> **[1:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=83)** We add the orders_llm node first.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=87)** We provide a method, call_llm, as the method to execute when this node is invoked.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=93)** We will add this method later.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=95)** We then add another node called orders_tools.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=98)** This node invokes the method for call_tools.
>
> **[1:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=102)** Then we add a conditional_edge.
>
> **[1:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=104)** This originates from the orders_llm.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=107)** It invokes a method, is_tool_call.
>
> **[1:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=110)** If this method returns true, it routes to the order_tools node, else it routes to the END block.
>
> **[1:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=117)** This is the graph design we discussed in the previous video.
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=121)** Next, we add an edge from the orders_tools node to the orders_llm node.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=128)** We also set the orders_llm node as the entry point, so this is the first node that gets executed.
>
> **[2:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=136)** Inside the agent, we can also manage conversation memory using the MemorySaver function.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=142)** This is provided out of the box by LangGraph to manage conversation memory.
>
> **[2:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=147)** Finally, we need to compile the graph using the compile function.
>
> **[2:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=151)** We already attached the agent state during graph creation.
>
> **[2:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=155)** Now we add the conversation memory using the checkpointer attribute.
>
> **[2:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=160)** This sets up the graph.
>
> **[2:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=162)** Next, we compile the tools dictionary using the list of tools passed in.
>
> **[2:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=167)** We can also use the debug flag to print debug messages wherever needed inside the agent.
>
> **[2:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=175)** We bind the tools to the model, so the model knows the list of tools available.
>
> **[3:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=180)** Now we proceed to define the methods.
>
> **[3:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=183)** The first method is the call_llm method.
>
> **[3:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=186)** Here, we read the list of all messages from the OrdersAgentState.
>
> **[3:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=192)** The LLM needs to know the history of the request, so all the messages need to be sent to the LLM.
>
> **[3:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=199)** The message list will already have the incoming user message added by LangGraph.
>
> **[3:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=204)** We preprint the system_prompt also, so the LLM has instructions on what to do with the request.
>
> **[3:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=212)** With these messages, we call the LLM.
>
> **[3:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=215)** The result from the LLM is created as a message and returned.
>
> **[3:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=221)** LangGraph will then take care of adding this return message to the agent state.
>
> **[3:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=227)** Next is the is_tool_call conditional edge function.
>
> **[3:51](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=231)** Here, the input is the agent state.
>
> **[3:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=233)** We read the last message from the agent state.
>
> **[3:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=236)** This would be the last message returned by the orders_llm node as it is the prior node in the graph.
>
> **[4:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=243)** We check to see if there are any tool_calls in the message.
>
> **[4:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=247)** If so, we return true, else we return false.
>
> **[4:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=251)** The final method is the call_tools method.
>
> **[4:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=254)** Again, the agent state is the input.
>
> **[4:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=257)** This method retrieves the list of tool_calls from the last message in the agent state.
>
> **[4:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=263)** Do note that the LLM may come up with multiple tools to call with their own parameters.
>
> **[4:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=270)** So we iterate through the list of tool_calls, invoke the tools with their corresponding parameters, and capture the results.
>
> **[4:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=279)** The results are then accumulated for all the tool_calls.
>
> **[4:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=283)** These results are then returned by the method.
>
> **[4:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=286)** LangGraph will append the results to the agent state.
>
> **[4:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=290)** This completes our setup for the OrdersAgent.
>
> **[4:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=294)** Now let's create a system_prompt.
>
> **[4:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=297)** The system_prompt defines the persona for the agent.
>
> **[5:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=300)** It also provides guidance on how the agent should behave in various conditions.
>
> **[5:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=306)** Then we create the OrdersAgent object with the actual model, tools list, system prompt, and debug flag.
>
> **[5:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=314)** We can visualize the graph from the agent created using the draw_mermaid_png function.
>
> **[5:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=321)** The image shows the graph that is set up.
>
> **[5:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=323)** It can be used to debug if all edges are set up correctly and there are no missing links.
>
> **[5:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=330)** Let's execute this agent in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** orders_llm (5), system_prompt (4), tool_calls (4), call_llm (2), orders_tools (2)
> **Code Keywords:** function (5), let (3), class. (2), class, (1), pass (1)
> **CLI Commands:** node (11)
> **Env Vars:** llm (7), end (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Prerequisites:** set up (3), setup (1)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **Exercise Files:** template (2)

#### Set up and execute the LangGraph chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=0)** - [Instructor] The agent we set up in the previous video already has conversation memory, so the chat bot is implicitly set up now.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=8)** To test the chat bot, we will create a series of prompts.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=13)** This includes greetings, query for an order, updating an order, a follow-up question, and a question about an invalid order.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=22)** We create a config object with a thread id.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=26)** We then iterate through the list of input prompts and call the agent with all the parameters.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=32)** We print the input question and the final agent message like a conversation.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=38)** Let's now review the results.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=40)** For the greeting from the user, the agent responds back with an equal greeting.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=46)** It also mentions its purpose.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=49)** For the question about an order id, the agent responds with the correct details.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=54)** It also asks if the user has any more questions.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=58)** For adding one more laptop to the order, it shows the exact count to which the order has been updated.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=66)** We ask for the order details again, it uses conversation memory to determine the order ID and shows the updated quantity correctly.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=77)** When asked about an invalid order id, the agent chat bot responds with an exception message.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=85)** When the user says, "Bye," the agent also responds with a polite message.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=91)** This is an example of how conversations happen with chat bots in real enterprise scenarios.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=97)** We can see how the agent uses the LLM agent state and conversation memory to hold a human-like conversation with the user.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2)
> **Code Keywords:** let (1)
> **Env Vars:** llm (1)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Reflection-Based LangGraph Agents

> [↑ Back to Table of Contents](#table-of-contents)

#### Reflection-based summary agent: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=0)** - [Instructor] In this chapter, we will build a different kind of chatbot.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=4)** This is a summarizer chatbot that can summarize an input body of text.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=9)** Our earlier examples used tool use and planning patterns.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=13)** This example uses the reflection pattern.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=17)** The summarizer chatbot takes as input a body of text and returns its summary.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=23)** It has a summarizer agent that uses an LLM to create a summary for the input text.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=29)** It also has a reviewer that reviews the summary to see if it represents the input correctly.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=36)** The chatbot sits in front of it.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=39)** A user can provide a task, like, "Summarize the following text," and get the summary in return.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=46)** What does the graph for the summarizer agent look like?
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=49)** Here, the first node is the generate summary node.
>
> **[0:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=53)** This node uses an LLM to generate the summary of the input text.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=58)** It uses an agent state to store the inputs and the summary.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=62)** On producing the summary, it calls a conditional edge called, should continue?
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=68)** Here, we check if the summary is good enough to provide to the user.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=72)** To keep things simple, we allow the generate and review process to go on for three iterations.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=79)** If the third iteration is complete, this edge will return false, else, it'll return true.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=85)** It again uses the agent state to read the messages and determine if three iterations are done.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=91)** The review summary node uses an LLM again to review the summary.
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=96)** It provides the input document and the summary generated to the LLM and requests it to check if the summary is good.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=105)** It also request any feedback for the summary.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=108)** This node, again, uses the agent state to read inputs and write results.
>
> **[1:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=114)** The generate summary node will then use the review comments.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=118)** It'll pass in the original input, the generated summary and the review comments to the LLM.
>
> **[2:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=123)** A new summary is created in cooperating the feedback.
>
> **[2:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=127)** This generate and review loop continues for three iterations, after which the results are returned back to the user.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=135)** Let's now proceed to build this agent.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6)
> **Code Keywords:** return. (1), continue (1), else, (1), pass (1), let (1)
> **Env Vars:** llm (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Engineer prompts for reflection
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=0)** - [Instructor] The code for this chapter is in the notebook code O5_XX_Summary chatbot with reviewer.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=7)** Let's first set up the model and the prompts.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=10)** Similar to the previous examples, we set up the AzureChatOpenAI with the GPT-4O model.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=18)** In the case of summary with review, we use two LLMs, one for the summary and another for the review.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=24)** So we need two system prompts.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=28)** The first prompt is the summarizer prompt.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=30)** Here, we set the persona for the summarizer.
>
> **[0:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=34)** We ask it to create a summary of less than 50 words.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=38)** We also request it to consider any review comments and summarize accordingly.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=43)** Next, we set up the system prompt for the reviewer.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=46)** We ask the LLM to compare the input with the summary, and check its accuracy.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=52)** We also ask it to provide recommendations for improving the summary.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=57)** We again request the feedback to be less than 50 words.
>
> **[1:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=61)** For the actual LLMs to use for reflection, we can use the same LLM model, or different models for summarization and review.
>
> **[1:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=70)** We will now use both these prompts to set up the summary agent in the next video.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (4)
> **Env Vars:** llm (2), gpt (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Set up the summarize-and-review agent with LangGraph
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=0)** - [Instructor] Let's now set up the summary agent.
>
> **[0:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=3)** We begin by setting up the summary state to hold all the messages.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=8)** The class summary agent holds the graph and methods for this agent.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=13)** We, again, set up the init method for initializing the graph.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=17)** Here, as input, we provide the model, the summarizer prompt, the reviewer prompt, and the debug flag.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=24)** There are no tools in this agent.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=27)** We start the agent graph by setting up a state graph with the agent state.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=32)** We first add the summarizer node with the generate summary as the associated method to call.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=38)** Next, we add the reviewer node with the review summary as the associated method to call.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=45)** Then we add a conditional edge from the summarizer.
>
> **[0:48](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=48)** This will call the should_continue method, which will return a true if review is needed and false if review is not needed.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=57)** If a review is needed, it will route to the reviewer, otherwise it'll end the agent.
>
> **[1:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=63)** Finally, we add an edge from the reviewer to the summarizer.
>
> **[1:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=67)** We also set the first note or entry point to the summarizer.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=72)** We add the conversation memory with the memory saver and compile this graph.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=79)** Next, we set up the generate_summary method.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=82)** We preprint the summarizer system message to all the other messages to form the input body to the LLM.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=89)** Then we invoke the LLM.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=91)** The results from the LLM are return by the function, which gets added to the state.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=97)** Then we set up the review_summary method.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=100)** Here we follow a similar process as the generate_summary method, but we use the reviewer system prompt instead of the summarizer system prompt.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=109)** This will make the LLM to review the content generated by the previous step and provide comments.
>
> **[1:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=116)** This again gets added to the state.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=120)** The should_continue method checks for the total number of messages in the agent state.
>
> **[2:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=126)** Each iteration adds two messages, one for the summarizer and one for the reviewer.
>
> **[2:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=131)** Then there will also be the original input.
>
> **[2:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=134)** We hence use the length of the message list to determine if sufficient reviews have been done.
>
> **[2:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=141)** If so, we return false.
>
> **[2:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=143)** Else, we return true.
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=145)** This completes our setup for the summary agent class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), function (1), else, (1), class. (1)
> **Code Identifiers:** should_continue (2), generate_summary (2), review_summary (1)
> **Prerequisites:** set up (4), setup (1)
> **Env Vars:** llm (4)
> **CLI Commands:** node (2), make (1)
> **Speakers:** - [instructor] (1)

#### Set up the summarize-and-review chatbot with LangGraph
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=0)** - [Instructor] Having set up the agent for summary, let's also set up the chatbot and get the input ready.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=7)** We follow a similar process as in the earlier chapter to create a chatbot.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=12)** We create the summary agent instance with all the required inputs.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=17)** We display the graph to see how it is setup.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=22)** For testing, we have a document called EcoSprint SpecificationDocument in our data directory.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=29)** This is available as part of our exercise files.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=33)** We load this PDF file using the PyPDFLoader.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=37)** Then we choose the first page in the document.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=40)** We will also remove all the new line characters.
>
> **[0:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=44)** This will be used as our input.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=47)** Let's test with this input in the next video.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), setup (1)
> **Code Keywords:** let (2)
> **Env Vars:** pdf (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Execute the summarize-and-review chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=0)** - [Instructor] Now we will execute the summary chat bot with review.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=4)** We create a config with a unique thread ID.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=7)** Then we create a human message with the content extracted from the PDF file earlier.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=13)** This is then used to call the summary chat bot.
>
> **[0:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=16)** Do note that we have set up this agent in the debug mode, so we can see all the intermediate steps.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=23)** Let's run this code now and review the results.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=28)** We now see the generator output and the reviewer output for each iteration.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=33)** At each iteration, the generator incorporates the reviewer feedback and improves the summary.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=39)** For example, the first review provides feedback that features like acceleration and colors need to be added.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=46)** The following output from the generator incorporates this feedback.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=52)** Now, let's add human feedback also to improve the summary.
>
> **[0:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=56)** This is in addition to what the reviewer does.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=59)** We recreate the summary agent, but with debug mode set to false.
>
> **[1:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=63)** The human feedback also goes for two iterations.
>
> **[1:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=67)** As inputs, we start with the original content from the user.
>
> **[1:11](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=71)** Then we ask the summarizer to rewrite the review to focus more on specification.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=77)** Then we ask you to remove details about the touch screen.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=81)** Again, we create a new thread ID and execute these prompts one by one.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=86)** For each user input, the internal agent reviewer also does three iterations, but that is not shown here.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=94)** We show the interaction between the user and the agent.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=98)** As we see, the agent incorporates human feedback and improves the summary.
>
> **[1:44](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=104)** For example, when the user says to remove the touch screen details from the summary, the agent follows that instruction and removes the touch screen details from the summary it produces.
>
> **[1:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=115)** This completes our exercise on using reflection for summarizing documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** for example (2)
> **Env Vars:** pdf (1)
> **Documentation:** specification (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Multi-agent Systems with LangGraph

> [↑ Back to Table of Contents](#table-of-contents)

#### Multi-agent systems
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=0)** - [Instructor] Multi-agent systems is another agentic pattern that is becoming popular.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=6)** Enterprise workflows are complex, requiring multiple systems and people to work together to achieve a goal.
>
> **[0:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=14)** Creating specialized agents for specific tasks and getting them to work together helps achieve complex automation while improving efficiency.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=24)** Why do we need multi-agent systems?
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=27)** Why can't we build one single big agent for the same thing?
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=31)** Individual agents are built to handle a specific task are provide services in a specific domain.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=39)** A given workflow or goal may need multiple tasks to be executed or require multi-domain expertise.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=47)** Individual agents can then collaborate and coordinate with each other to execute such workflows.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=54)** It mimics how a team of humans work together to achieve a task, each leveraging their individual expertise while taking help from others in other areas.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=65)** Multi-agent systems follow popular software patterns of separation of concerns and distributed design.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=72)** They help create reusable building blocks.
>
> **[1:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=75)** A single agent can be built to be a part of multiple workflows.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=80)** Each agent can be built in-house or acquired from open source or from third parties.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=87)** This helps in saving cost and time while keeping solutions simple.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=92)** Following the multi-agent pattern allows building complex workflows from individual agent building blocks.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=99)** This can leverage existing best-of-breed agents and minimize custom work.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=105)** In this chapter, we will build a multi-agent system that also uses the routing pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Routing agent design in LangGraph
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=0)** - [Instructor] Let's now design the routing-based multi-agent chatbot.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=4)** We will leverage two other agents we created in the earlier chapter for this example.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=10)** What does this multi-agent chatbot look like?
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=13)** We have a routing agent at the center of this agent system.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=17)** The routing agent analyzes the incoming query and routes the request to other agents based on the type of query.
>
> **[0:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=25)** It will leverage the product question and answer agent that we created in chapter three.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=30)** This agent answers questions about laptop features and pricing.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=35)** It will also leverage the orders agent that we created in chapter four.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=41)** This agent can retrieve order details as well as update an order.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=45)** The routing agent can route a given request to one of these agents based on the type of request.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=52)** We will front end the routing agent with a multi-agent chatbot.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=57)** To this chatbot, the user can ask questions either about the laptop features or get order status.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=64)** What does the graph for the routing agent look like?
>
> **[1:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=67)** The routing pattern is used to route the request to one of the many options available to the agent.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=74)** Here, the request to the agent first goes through the router node.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=79)** The router node uses an LLM to classify the request as a product request, an order request, or simply small talk.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=87)** Small talk includes greetings, chitchat, and goodbyes.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=91)** The workflow then moves to the classify request conditional edge.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=95)** This edge analyzes the output of the router and then routes it to the corresponding node.
>
> **[1:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=101)** There are three routing options here.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=103)** The product Q and A node uses the product Q and A agent to handle the request.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=109)** The orders node uses the orders agent to handle the request.
>
> **[1:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=114)** The small talk node uses an LLM to respond to the user request as required.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=120)** Do note that the first two nodes are themselves agents, so they go through their own workflows and handle their own state.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=128)** Given that it's a routing pattern, the request goes one direction only.
>
> **[2:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=133)** Let's now proceed to implement this design.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6)
> **Code Keywords:** let (2)
> **Env Vars:** llm (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using agents as LangGraph nodes
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=0)** - [Instructor] Let's now set up the product Q&A agent and the orders agent as nodes for the routing agent graph.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=7)** The code for this chapter is in the notebook, code_06_XX multi-agent chatbots with routing.
>
> **[0:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=15)** We begin by setting up the LLM for use in the router In a real application agents may expose APIs to invoke them.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=26)** They can also be packages that we can import into the main agent.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=31)** In this case of the notebook, we simply import the notebooks for chapter three and four by running them.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=38)** This is nave, but it does work for us.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=41)** While importing, the notebooks are also running, so they do produce all their outputs.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=47)** We can ignore them.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=49)** To set up an agent node for the two agents, we create a common function called agent node.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=55)** This is the method that will get called when the node invoked in the graph.
>
> **[1:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=60)** This function takes us input, the agent state, agent class, name of the agent, and the config object.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=68)** It will return the messages object to add to the state of the main router agent.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=74)** The conversation memory of the main routing agent needs to be shared with the other agents.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=79)** For this, we will get the same thread ready used in the main agent and pass it on as config to the agent node.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=87)** To use the agent we use it's involk method and get the output.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=92)** The output of the agent can be a tool message of the final output.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=97)** Based on the type of message, we format the message accordingly and return the messages.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=103)** Now we create two nodes.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=105)** We use the partial function in the func tools package.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=109)** This method returns a partial function that can be used subsequently.
>
> **[1:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=114)** If you are not familiar with this method, I recommend reading up about this in Python Documentation.
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=121)** The partial function sets up the agent node, but does not execute it until it's actually called from within the workflow.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=129)** With these two nodes set up now, let's proceed to create the router agent in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (2), class, (1), this, (1), pass (1)
> **CLI Commands:** node (5), python (1)
> **Prerequisites:** set up (3)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Set up the routing agent and chatbot in LangGraph
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=0)** - [Instructor] The router agent's setup is a little different than the other agents we have set up earlier.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=6)** The router agent does not have iterative loops, but passes on the request to the destination.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=13)** The destination can then execute the request and provide the result.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=18)** We start by setting up the router agent state.
>
> **[0:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=21)** Then we define the router agent class.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=24)** For this class, in addition to routing, we also want this agent to handle small talk conversations like greetings and goodbyes.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=32)** So we have the routing system prompt and the small talk prompt as inputs.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=37)** We first store these inputs to instance variables.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=42)** We begin the state graph with the router agent state setup.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=45)** We add the main router node, which invokes the call_llm method.
>
> **[0:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=50)** This analyzes the input and provides a routing decision.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=54)** The Product_Agent invokes the product QnA agent node.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=58)** The orders agent invokes the orders agent node.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=62)** The Small_Talk agent invokes the respond_smalltalk method.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=66)** We then add a conditional edge from the router node.
>
> **[1:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=70)** This invokes the find_route method.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=73)** This method analyzes the output of the router node.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=76)** Based on the value of that output, it will route to the appropriate node.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=82)** We terminate each of the nodes to the END block.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=86)** The router node is used only once, and then the nodes take over.
>
> **[1:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=90)** The entry point is set as the router node.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=93)** The router node itself does not keep conversation memory, as each routing decision is independent.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=99)** We can add a memory saver like other agents if we need to.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=103)** We then proceed to compile the graph.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=107)** The call_llm method preprints the system message with the incoming prompt and invokes the LLM.
>
> **[1:53](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=113)** The LLM would return a route for the request.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=118)** The respond_smalltalk will call the LLM in a similar fashion with the small talk prompt.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=124)** This is used to respond to greetings from the user.
>
> **[2:10](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=130)** The find_route method reviews the last message from the LLM and then chooses the routing destination based on it.
>
> **[2:18](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=138)** Let's now set up the system prompts and the router agent.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=142)** For the routing system prompt, we set the persona of the agent as a router.
>
> **[2:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=147)** We asked the LLM to classify the prompt and only return, small talk, product, order, or end.
>
> **[2:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=154)** We also mentioned that the output should not contain any other information.
>
> **[2:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=158)** For the small talk prompt, we asked the LLM to respond in a professional way stating its purpose.
>
> **[2:47](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=167)** The router_agent is then set up with both the prompts and the model.
>
> **[2:51](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=171)** We print the graph for the agent and we can review the workflow.
>
> **[2:56](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=176)** We can execute this router in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Code Identifiers:** call_llm (2), respond_smalltalk (2), find_route (2), router_agent (1)
> **Env Vars:** llm (6), end (1)
> **Prerequisites:** set up (3), setup (2)
> **Code Keywords:** class. (1), class, (1), let (1), return, (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Execute the routing chatbot in LangGraph
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=0)** - [Instructor] Let's execute the router agent now.
>
> **[0:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=3)** We begin by sending a single message to ask for features of SpectraBook.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=8)** We print all the messages coming back from the router agent.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=12)** In the output, we first see the input as the human message, then we see the AI message as product.
>
> **[0:20](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=20)** This is the router LLM deciding on where to route the call.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=24)** It has decided to use the product route.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=26)** This is then sent to the product QNA agent.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=30)** The agent responds back with the final message.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=33)** Note that since we are using the router agent, the detail logs from the product QNA agents are not available.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=41)** If also these messages are needed, then they need to be fetched from the QNA agent and logged into the router agent state when invoking that agent.
>
> **[0:51](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=51)** Next, we execute another request about the status of an order.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=55)** Here, we see the router has chosen order as a route.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=59)** This is sent to the orders agent, and the details of the order are printed.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=64)** Finally, we create a full conversation that includes small talk, order details, order quantity updates, features for a laptop, cost, and a goodbye.
>
> **[1:15](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=75)** This list exercises all the routes and all the functions in these routes.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=81)** We create a single thread and execute all the prompts.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=85)** Let's review the results.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=87)** The agent uses small talk to respond to the first call, "How are you doing?"
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=93)** It routes the second prompt to the orders agent.
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=96)** The third prompt also goes to the orders agent.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=100)** In this case, it uses the conversation memory to identify the order.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=105)** The next two questions work similarly with the product QNA agent.
>
> **[1:50](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=110)** Finally, the agent uses the small talk method to answer the bye message.
>
> **[1:55](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=115)** This example demonstrates the routing pattern as well as the multi-agent pattern.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=120)** We were able to reuse two other agents in the workflow.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=124)** This completes our course on building agentic chatbots with LangGraph.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), case, (1)
> **Env Vars:** qna (4), llm (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=1)** - We have reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=3)** By now, you have an understanding of how agentic AI works and how to build simple agents, but this is just a foundation.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=12)** If you want to start integrating this further, here are some recommendations for your learning journey.
>
> **[0:19](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=19)** First, learn about agentic AI capabilities in frameworks like LlamaIndex and AutoGen.
>
> **[0:25](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=25)** Next, try some agents with a few tools like RAG and third-party integrations.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=32)** Then build an AI agent for your organization, leveraging your learnings.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=38)** AI always intrigues me.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=40)** I bet it intrigues you too.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=42)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Env Vars:** rag (1)
> **Speakers:** - we (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Path Context

### In [[Building Agentic AI Systems for Developers]]
← [[Hands-On Agentic AI- Building AI Agents with LlamaIndex]] | **5 of 6** | [[ChatGPT's Operator- Automating Everyday Tasks with AI Agents]] →

### In [[Building AI Agents- Advanced Techniques for Developers]]
← [[Build Ai Agents And Automate Workflows With N8n]] | **2 of 4** | [[Model Context Protocol (MCP)- Hands-On with Agentic AI]] →

## Appears In

- [[Building Agentic AI Systems for Developers]]
- [[Building AI Agents- Advanced Techniques for Developers]]

---

[↑ Back to top](#)