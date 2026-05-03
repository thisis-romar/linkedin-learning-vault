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
created: 2026-05-03
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
  - [Introduction to the course](#introduction-to-the-course)
  - [Setting up GitHub Codespaces](#setting-up-github-codespaces)
- [**1. Concepts Review**](#1-concepts-review) (5 videos)
  - [AI chatbots: A review](#ai-chatbots-a-review)
  - [Agentic AI: A review](#agentic-ai-a-review)
  - [Agentic chatbots](#agentic-chatbots)
  - [State and memory in chatbots](#state-and-memory-in-chatbots)
  - [LangGraph for agentic AI](#langgraph-for-agentic-ai)
- [**2. Create a Basic ReAct Agent**](#2-create-a-basic-react-agent) (6 videos)
  - [What is ReAct?](#what-is-react)
  - [Basic ReAct agent design](#basic-react-agent-design)
  - [Adding function tools for ReAct agent](#adding-function-tools-for-react-agent)
  - [Create a basic ReAct agent](#create-a-basic-react-agent)
  - [Execute the basic ReAct agent](#execute-the-basic-react-agent)
  - [Debugging agents in Langchain](#debugging-agents-in-langchain)
- [**3. Build a Product Q&A Chatbot**](#3-build-a-product-qa-chatbot) (5 videos)
  - [Product Q&A chatbot design](#product-qa-chatbot-design)
  - [Add a function tool to the product Q&A chatbot](#add-a-function-tool-to-the-product-qa-chatbot)
  - [Add a retriever tool to the product Q&A chatbot](#add-a-retriever-tool-to-the-product-qa-chatbot)
  - [Set up the product Q&A chatbot](#set-up-the-product-qa-chatbot)
  - [Execute the product Q&A chatbot](#execute-the-product-qa-chatbot)
- [**4. Custom Agents and Chatbots with LangGraph**](#4-custom-agents-and-chatbots-with-langgraph) (5 videos)
  - [LangGraph concepts](#langgraph-concepts)
  - [LangGraph orders agent and chatbot design](#langgraph-orders-agent-and-chatbot-design)
  - [Set up tools for the orders agent](#set-up-tools-for-the-orders-agent)
  - [Set up the LangGraph orders agent](#set-up-the-langgraph-orders-agent)
  - [Set up and execute the LangGraph chatbot](#set-up-and-execute-the-langgraph-chatbot)
- [**5. Reflection-Based LangGraph Agents**](#5-reflection-based-langgraph-agents) (5 videos)
  - [Reflection-based summary agent: Design](#reflection-based-summary-agent-design)
  - [Engineer prompts for reflection](#engineer-prompts-for-reflection)
  - [Set up the summarize-and-review agent with LangGraph](#set-up-the-summarize-and-review-agent-with-langgraph)
  - [Set up the summarize-and-review chatbot with LangGraph](#set-up-the-summarize-and-review-chatbot-with-langgraph)
  - [Execute the summarize-and-review chatbot](#execute-the-summarize-and-review-chatbot)
- [**6. Multi-agent Systems with LangGraph**](#6-multi-agent-systems-with-langgraph) (5 videos)
  - [Multi-agent systems](#multi-agent-systems)
  - [Routing agent design in LangGraph](#routing-agent-design-in-langgraph)
  - [Using agents as LangGraph nodes](#using-agents-as-langgraph-nodes)
  - [Set up the routing agent and chatbot in LangGraph](#set-up-the-routing-agent-and-chatbot-in-langgraph)
  - [Execute the routing chatbot in LangGraph](#execute-the-routing-chatbot-in-langgraph)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the course](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/introduction-to-the-course-25231480?u=76281980&t=0)** - AA agents have the power to change the way you do business. You might be wondering how to build one. This course will help you get a head start. We will go over the basics of building chat bots with AA agents in LangGraph. We will implement popular agentic patterns like planning, tool use, reflection and multi-agent systems using both pre-built templates and custom graphs. My name is Kumaran Ponnambalam. Let's get started with building AA agents and chat bots with LangGraph.

> [!info]- Semantic Content
>
> **Speakers:** - aa (1)

#### [Setting up GitHub Codespaces](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setting-up-codespaces-25230461?u=76281980&t=0)** - [Instructor] The code for this course is available in the repository build-ai-agents-and-chatbots-with-langgraph. To open up [[Codespaces]], go to Code and then hit Create Codespace on Main. This will open up the IDE and will start setting up the required software. The IDE is now ready. Now go and open the notebook code_O2_XX Basic [[React.js|React]] Agent in LangGraph. The first cell in this notebook has all the dependency packages that are required for the exercises in this course. Go ahead and run these dependency installation. Choose a [[Python (Programming Language)|Python]] environment. For this course, it is recommended to use Python 3.10. Once the dependencies have been successfully installed, you are ready to go ahead with the exercises.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Codespaces]] (1), [[React.js|React]] (1)
> **CLI Commands:** python (2)
> **Env Vars:** ide (2)
> **UI Navigation:** go to (1), open the (1)
> **Versions:** python 3 (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Concepts Review

[↑ Back to Table of Contents](#table-of-contents)

#### [AI chatbots: A review](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=0)** - This course focuses on two technology concepts, chatbots and agentic AI. Let's quickly review their key concepts and what each of them bring to the table. If you are not familiar with these concepts, I highly recommend additional reading before starting this course, as mentioned in the prerequisites, Let's begin with chatbots. Chatbots are built upon [[Conversational AI]]. What is conversational AI? Conversational AI simulates a human conversation with machines replacing humans at one end of the dialogue. Conversational AI uses capabilities like natural language, understanding, processing and generation to communicate with other users. Chatbots are built on these conversational AI technologies. They interact with humans, understand their intentions and respond to their queries. Behind the scenes, they use systems and technologies for [[Natural Language Processing (NLP)|natural language processing]] and generation. What are some key characteristics of Chatbots? Chatbots use natural language inputs and outputs. This is free format text and can be in any language. They may support text, voice or multimedia interfaces, like images and video. While text is popular, other types of media are gaining popularity. Each chat bot has its own persona and purpose. This determines its use and behavior
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/ai-chatbots-a-review-25230459?u=76281980&t=95)** while interacting with humans. Chatbots are typically integrated with other backend systems for processing, querying, workflows and response generation. They support conversational memory. They remember the history of conversations with a specific user and can leverage this memory for improving responses. They can handle small-talk, like greetings, chitchat and acknowledgements. Chatbots have been deployed for a wide variety of use cases across several industries. This includes [[Customer Support]], [[E-Commerce]], healthcare, financial services, travel, hospitality, education and training, [[Human Resources (HR)|human resources]], marketing, personal productivity and government services. If you are not familiar with chatbots, I highly recommend additional reading before proceeding with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Conversational AI]] (5), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Customer Support]] (1), [[E-Commerce]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Speakers:** - this (1)

#### [Agentic AI: A review](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-ai-a-review-25234396?u=76281980&t=0)** - [Instructor] The other key concept of this course is agentic AI. What is agentic AI? This is [[Generative AI]] that is designed to operate autonomously with minimal human intervention, make decisions, and take actions towards specific goals. If you are not familiar with the concepts of agentic AI, I highly recommend further reading before proceeding with this course. Let's quickly review the key patterns in agentic AI. The planning pattern is used to decide on a course of action to fulfill a goal or breakdown a complex task into smaller, manageable steps. The tool use pattern is used to select the right tool from a toolset to solve a specific problem. Then, identify the inputs to the tool, invoke the tool, and return results. The [[Routing]] pattern is used to route a request to alternate destinations by analyzing the input and context of the request. The reflection pattern is used to review outputs, artifacts or decisions, and then provide constructive feedback to improve accuracy. The multi-agent pattern is used to create applications where multiple independent [[AI Agents]] can work together to accomplish a complex task. We will be implementing chatbots for each of these patterns in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Routing]] (1), [[AI Agents]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Agentic chatbots](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=0)** - [Instructor] Now that we have reviewed chatbots and agentic AI, let's discuss the power of combining both together. What are agentic chatbots? Agentic chatbots provide the best of both worlds. They combine the autonomy and [[Decision-Making]] capabilities of agents with the conversational capabilities of chatbots. This helps create near human-like user experiences that deliver efficiency and effectiveness for enterprises. Chatbots powered by agentic AI deliver key capabilities that help create powerful AI assistants. The chatbot module provides user interfaces, multimedia support, conversational memory, 24/7 availability, integrations with other applications, and multi-language support. It provides the infrastructure for the agentic chatbot. Agents, on the other hand, bring in decision making, tool use, multi-agent support, personalization, automated learning, actions, and reflection. This creates advanced user experiences with complex query and workflow capabilities. Together they provide enhanced productivity and efficiency for enterprises. In this course, we will explore key patterns and use cases for building agentic chatbots. How do the chatbot and agents co-exist together in an application?
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/agentic-chatbots-25234393?u=76281980&t=94)** The user interface is provided by the chatbot. Users interact with the chatbot to ask questions and get answers. The chatbot also has conversational memory or history. It keeps track of all the interactions between the user and the chatbot. This memory can be leveraged to provide context and answer follow up questions. The chatbot behind the scenes can talk to one or more agents. Each agent may be specialized in a specific domain or task. The chatbot invokes the required agents, passes on the input from the user, gets responses, and delivers the responses back to the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision-Making]] (1)
> **Speakers:** - [instructor] (1)

#### [State and memory in chatbots](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=0)** - [Instructor] When using chatbots and agents, there are two memory structures that are used to track history, the agent state and chatbot conversation memory. These concepts can be confusing, so let's try to understand the purpose and scope for each of them. Let's discuss these structures side by side. We begin with agent state. Agent state is managed by each agent in the system internally within its own memory. Each agent has its own state that is not shared with other agents. It is maintained for each prompt or query or goal that is sent to the agent to resolve. Once a response to the prompt is generated, the state is discarded or archived. Agent state saves and tracks the execution plan for the user prompt. This plan is generated by the LLM iteratively as the agent attempts to answer the query. Agent state also tracks the tools used for execution, their input values and output values. Outputs of one tool become inputs to the next tool in the execution plan. In addition to the standard elements, custom data can also be tracked if needed by the agent based on the use case. Conversation memory is managed by the chatbot. Some of that memory can be provided as input to the agent if required by the use case.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=93)** Again, this is provided as input, not as shared memory. Conversation memory is maintained for the entire conversation or session of the chatbot. This is typically saved to a persistent store and then retrieved if the session continues in the future. It has multiple prompts from the user and corresponding final responses sent back to the user. Custom data can also be archived if needed based on the use case. Metrics like accuracy, latency and relevancy can be tracked based on the use case. Let's look at a typical interaction between the chatbot and the agent and how both conversation memory and agent state are handled. Let's say we have a chatbot that integrates with two agents, Agent 1 and Agent 2. A user sends a prompt or query to the chatbot. The chatbot decides to send that prompt to Agent 1 Agent 1 will create a separate state for that prompt in it's memory. As the agent proceeds to answer the prompt, it'll store its execution plan, tool inputs, tool outputs and LLM inputs and outputs in the state. Individual modules or functions within the agent will read and update the state. In addition, the chatbot will also create a conversation memory for the session. It'll keep track of the prompts and responses between the user and the chatbot in this memory. The user now sends a second prompt for the session.
>
> **[3:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/state-and-memory-in-chatbots-25230458?u=76281980&t=189)** The chatbot decides to send this to Agent 2. Agent 2 will create a new state for this prompt and track its execution. In addition, the chatbot will also open the prompt and its response to the conversation memory. Then the user sends prompt three. The chatbot decides to send this prompt to both the agents. Now, there are two states created. Each agent creates its own internal state for this prompt and tracks their execution independently. Again, the prompt and the final response from the agents will be added to the conversation history. We will implement agent state and memory in examples later in this course.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Cross-References:** later in (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [LangGraph for agentic AI](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=0)** - [Instructor] In this course, we will be using LangGraph for our examples. Let's quickly review its features. What is LangGraph? It is a framework developed in [[LangChain]]. LangChain is a popular framework for [[Generative AI]]. It's recommended to learn about LangChain if you are not already familiar with it. LangGraph helps to create stateful multi-agent applications. It can orchestrate interactions between agents and managed state. It is a workflow orchestration engine. In addition to agents, it can also orchestrate interactions with tools, the LLMs and third party applications. Being part of LangChain, it integrates well with other LangChain capabilities. For example, a retriever built using LangChain can be easily integrated as a tool in LangGraph. The power of LangGraph comes from its ability to create custom workflows as needed by the use case. What are the key LangGraph features? It uses a graph based workflow design. Graphs are used to represent the elements of the workflow and how they interact with each other. It is implemented as a directed graph. This graph has processing nodes, edges that connect the nodes, and conditional edges that allow transition based on conditional checks. We will explode them later in the course. When a prompt comes into an agent, the graph is executed through its nodes.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-for-agentic-ai-25231479?u=76281980&t=94)** The nodes process the inputs, create outputs, and then pass control to the next node. LangGraph helps to manage state while the workflow is executed and tracks all the plans, inputs and outputs. It enables multi-agent collaboration by representing other agents as nodes within the workflow. It also has streaming support, so intermediate results can be delivered quickly to the user while they are processed by the agent. With this background, let's now start building agents with LangGraph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (6), [[Generative AI]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** node (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. Create a Basic ReAct Agent

[↑ Back to Table of Contents](#table-of-contents)

#### [What is ReAct?](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=0)** - [Instructor] We will be building an agentic chatbot using the [[React.js|ReAct]] framework in this chapter. Before we get there, let's quickly review what the ReAct framework is. The ReAct framework is a popular framework for building [[AI Agents]]. It was originally published as a paper and then adopted by popular agent frameworks. ReAct stands for reason and act. It involves using the LLM to first understand and reason the user request, then act upon it. It's an iterative process using the LLM to decide on the next execution step, executing the step, and then using the LLM to decide if there are more steps needed. ReAct provides enhanced explainability for the actions taken by the agent. It has multiple use cases, including answering customer queries, deciding on the course of action for a workflow, or reviewing a document. How does the ReAct framework work? It uses a thought-action-observation pattern. Let's say we have a user trying to interact with the agent. The user sends a question or prompt to the agent. The question or prompt first goes through a thought block. Here, an LLM is used to analyze the input and decide on the next steps to execute. This set of steps or actions is then sent to the action block.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/what-is-react-25234395?u=76281980&t=93)** Here, the agent executes the set of actions, including rule calling, processing, or computations. The actions generate a set of outputs. The outputs are then sent to the observation block. Here, an LLM is used to validate the results obtained from the actions and check if the results satisfactorily answer the user questions. If the LLM decides that there are more steps needed, it is sent back again to the thought block. The thought block will analyze the question and the intermediate results available to decide on the next set of actions. This then goes through an iterative process of thought-action-observation until satisfactory results are obtained. The final answer is then sent to the user by the observation block. The LLM plays a key role in both thought and observation blocks to make decisions and trigger actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[AI Agents]] (1)
> **Env Vars:** llm (7)
> **Definitions:** is a  (1), stands for (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Basic ReAct agent design](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/basic-react-agent-design-25232481?u=76281980&t=0)** - [Instructor] Let's now create our first basic [[React.js|ReAct]] agent. We will discuss this ReAct agent design in this video. This is a simple example for building ReAct agents with LangGraph. We will build more advanced agents in the later chapters. We will be building a math agent that solves math problems for addition and multiplication. This agent will take a text input from the user that contains the math problem and provide the results. To do the math, it uses tools. The first tool is a function tool called find_sum(). Given two integers, this function returns their sum. The second tool is a function tool called find_product(). This tool returns the product of two integers. The user will provide an input, like What is the sum of 2 and 3? The agent will use an LLM to decide on the tools to use, then execute the tools, and return the results. For this chapter, we will be building the agent only and not a chatbot. We will use chatbots in the later exercises.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** find_sum (1), find_product (1)
> **Env Vars:** llm (1)
> **Speakers:** - [instructor] (1)

#### [Adding function tools for ReAct agent](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/adding-function-tools-for-react-agent-25228459?u=76281980&t=0)** - [Instructor] Let's now proceed to implement the basic agent. We will learn LangGraph usage as part of this exercise. The code for this chapter is available in the notebook code_O2_XX Basic [[React.js|ReAct]] Agent in LangGraph. In this video, let's set up the function tools for the ReAct agent. We begin by importing the tool package from [[LangChain]]. The first tool that we will create is the find_sum tool. The @tool decorator is used to set up this function as a tool for future use. This eliminates the step to explicitly create a function tool. Inside the function, we use a docstring comment to describe the function. This docstring is critical for tool use. This description provided here is used by the LLM to determine the capabilities of this tool, so be as elaborate and descriptive as possible when writing this docstring. Then comes the actual functionality. This function simply returns the sum of the two input integers, x and y. In a similar fashion, we set up the second tool for find_product. This returns the product of the two input integers, x and y. We will proceed to create the ReAct agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[LangChain]] (1)
> **Prerequisites:** set up (3)
> **Code Identifiers:** find_sum (1), find_product (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Create a basic ReAct agent](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=0)** - [Instructor] Let's now proceed to create the basic [[React.js|ReAct]] math agent. We will use [[Microsoft Azure|Azure]] OpenAI models for the exercises in this course. First, we will set up the models. We need to set up the APA key and APA endpoint for the model hosted on Azure. Please replace these values with those specific to your account. Alternatively, you can use any of the other [[LangChain]] supported models, too, instead of Azure OpenAI. Please refer to Langchain documentation on how to create model references for other models. We will create the LLM using Azure Chat OpenAI function. We need to use the chat capabilities for requests and responses. We will use [[GPT-4|GPT-4o]] for the model name. The APA version is also set here. Again, you should replace them with values specific to your implementation. This can be used to test if the model has been set up correctly. For this agent, we will use the prebuilt ReAct agent in LangGraph. We import this create_react_agent class for this purpose. We will also import the message types for the chat, namely AIMessage, HumanMessage, and SystemMessage. The tools list is set up in the agent_tools variable. We include the find_sum and find_product tools we created earlier. Next, we define the system prompt of type SystemMessage.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/create-a-basic-react-agent-25229434?u=76281980&t=95)** This message provides the purpose and persona for the agent and defines what the agent does and how it responds to user requests. We tell the agent to only use the tool's provided format, and not solve it using the LLM's intelligent. Then we define an agent graph using the create_react_agent function. We pass the LLM model, system_prompt, and tools as inputs. This internally creates a LangGraph graph and initializes it. Note that the state_modifier variable is used to pass the system_prompt. In the next video, we will execute this agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[React.js|React]] (2), [[LangChain]] (2), [[GPT-4|Gpt-4o]] (1)
> **Code Identifiers:** create_react_agent (2), system_prompt (2), agent_tools (1), find_sum (1), find_product (1)
> **Env Vars:** apa (3), llm (3), gpt (1)
> **Prerequisites:** set up (4)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Execute the basic ReAct agent](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=0)** - [Instructor] Let's execute the math agent we created in the previous video. We first create the input to the agent. We defined the messages with the user role. We can also alternatively use the Human Message function for this purpose. The question we ask is, "What is the sum of 2 and 3?" Next, we invoke the agent_graph with its inputs. The agent_graph will return the final step and all the intermediate steps in finding the answer. This is extracted from the agent state. It essentially provides a conversation between the human, the LLM, and the tools. First, we print the final answer by accessing the last message in the result list. Then, we print each step to look at how the agent executed the request, The pretty print function available in the message formats the message for easy rating. Let's review the results now. First, we see the final answer that is printed as, "The sum of 2 and 3 is 5." This is correct. Then, we walk through the list of messages that shows how the agent found the final answer. The first message is the Human Message, or input, which is the original question to the agent. Next, we have the Ai Message. This is the LLM executing the thought block. It sees the list of tools available and understands their capability using their docstring. It decides that find_sum is the right tool to use.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-basic-react-agent-25232479?u=76281980&t=97)** It also has figured out the values for the function arguments as 2 and 3. The next message is the Tool Message. This is the output of the tool. The tool returned 5. The last message is the Ai Message. Here, the LLM looks at the results from the tool and decides that it has enough information to generate the final answer. It generates the final message as, "The sum of 2 and 3 is 5." Then, we execute a second input. Here, we provide a more complex prompt, "What is 3 multiplied by 2 and 5 plus 1?" This has two problems in one prompt. We follow the same pattern to print the messages. We see that the LLM has correctly answered both the questions with the answer as 6. Looking at the trace, we see that the LLM has chosen both tools with the right parameters. Both tools are executed concurrently and the results returned. The final output is also printed.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5)
> **Code Identifiers:** agent_graph (2), find_sum (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Debugging agents in Langchain](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/debugging-agents-in-langchain-25232480?u=76281980&t=0)** - [Instructor] When building any software application, debug ability is a key requirement and concern. How do we debug agents built with LangGraph? LangGraph provides a debug flag when creating agents. When this flag is used, it creates a verbose output that describes every step with all its inputs and outputs. Let's set up the agent_graph again with the debug flag set to True. Let's execute the first prompt again. On invoking the graph, a verbose log is printed. Walking through the output, we start with checkpoint 1, which is the start of the graph. The checkpoints indicate the state of the graph. Next, we see the input human message, an ID is assigned to the prompt that tracks its state. The next step is using the LLM to come up with the execution plan. This provides information about what the LLM has decided to do. In this case, it is to call the find_sum function. Also, it prints metrics like token usage too. I recommend reading through each of these remaining steps to understand what the agent does behind the scenes. When troubleshooting is needed, this feature can be turned on to debug the agent.

> [!info]- Semantic Content
>
> **Code Identifiers:** agent_graph (1), find_sum (1)
> **Env Vars:** llm (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Build a Product Q&A Chatbot

[↑ Back to Table of Contents](#table-of-contents)

#### [Product Q&A chatbot design](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=0)** - [Instructor] In this chapter, we will build a production-grade agentic chatbot. The use case here is to build an agentic chatbot that can answer questions about [[Microsoft Products|products]]. In this case, it's a fictional company, selling laptops that wants to have a self-service chatbot to answer user questions about these laptops. Let's first discuss the design of this agentic chatbot. First, we have a function tool called Get Laptop Price. This tool is used to find the price of a given laptop. It uses an RDBMS behind the scenes to keep track of laptop prices. For our specific illustration, instead of an RDBMS database, we will use an in-memory [[Pandas (Software)|PANDAS]] data frame. In real world situations, this can access any database, or API, to find the prices. Next, we have a retriever tool called Get Product Features. This tool is built using a PDF file that contains descriptions of the laptops. Embeddings for this PDF are created and stored in a [[ChromaDB|chroma]] vector database. The retriever tool retrieves passages from the document, based on the input query. Both these tools are provided to a question and answer agent for laptops. This agent is front-ended by a chatbot. The chatbot can handle conversations with a user,
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/product-q-a-chatbot-design-25228458?u=76281980&t=94)** keep track of the conversation history, and communicate with the agent. The user provides a question like, what are the features and pricing for MacRight? And the chatbot will answer this question. Let's proceed to build this chatbot now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Pandas (Software)|Pandas]] (1), [[ChromaDB|Chroma]] (1)
> **Env Vars:** rdbms (2), pdf (2), pandas (1), api (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Add a function tool to the product Q&A chatbot](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=0)** - [Instructor] The code for this chapter is available in the notebook code_03_XX Product QnA Agentic chatbot. To implement the QnA agent, we begin by adding tools. First, we need to set up the LLM for this agent similar to how we set it up in the previous exercise. Because we are going to use embeddings, we also need to set up an embedding model. We will use AzureOpenAIEmbeddings for this purpose. Let's now proceed to add the product pricing function tool. The list of laptops and their prices are available in the Laptop pricing.csv file. This is under the data folder in the exercise files.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-function-tool-to-product-q-a-chatbot-25229435?u=76281980&t=52)** We load this file into a [[Pandas (Software)|Pandas]] dataframe. We will use this data frame to mimic an RDBMS. Next, we proceed to define the tool get_laptop_price. It takes the laptop name as the input string and returns the price. The dock string describes the capabilities of this tool. This tool performs a substring match between the input name and the laptop name in the dataframe and returns the price. If no match is found, it returns minus one. We use the Pandas dataframe search capabilities to find the record in the dataframe that matches the input name. We return the price from the dataframe. We also have commanded out test scripts to test the function tools standalone. Let's create the retriever tool in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Env Vars:** llm (1), rdbms (1)
> **Prerequisites:** set up (2)
> **File Paths:** pricing.csv (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** get_laptop_price (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### [Add a retriever tool to the product Q&A chatbot](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/add-a-retriever-tool-to-product-q-a-chatbot-25231484?u=76281980&t=0)** - [Instructor] Now, let's proceed to add a retriever tool to the agent. First, we need to create a vector database based on [[Microsoft Products|products]] descriptions. The Laptop product descriptions.pdf file under the data directory contains these fictional laptop descriptions. For imports, we need to additionally import the pysqlite3 package and map it to the sqlite3 package for [[ChromaDB|Chroma]] DB to work. We first load the PDF file up using the PyPDFLoader available in the [[LangChain]]-community package. Then, we chunk this document using the recursive character text splitter with a chunk size of 1,024. Next, we proceed to create a vector database using chroma in memory database. This single step does the embedding for the chunks and also stores the record in the chroma database. Finally, we create a retriever tool. As input, we provide the chroma database. We also provide a description for the tool. This description is used by the agent's LLM to understand the capabilities of the retriever tool and make decisions on its use. So care should be taken to provide elaborate descriptions when creating such tools. We will set up the product Q&A chatbot in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChromaDB|Chroma]] (4), [[Microsoft Products|Products]] (1), [[LangChain]] (1)
> **CLI Commands:** sqlite3 (1), make (1)
> **Env Vars:** pdf (1), llm (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Set up the product Q&A chatbot](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=0)** - [Instructor] To set up the agent, we will continue to use the pre-built [[React.js|React]] agent for this example. This pre-built function doubles as both the agent and the chat bot. We will also use a memory saver. The memory saver provides out-of-the-box conversation memory for the chat bot. First, we define the system message for the product Q&A chat bot. This sets up the behavior of the agent specifically on what information it will use to answer questions. (computer mouse clicks) We set up the list of tools based on the ones we have created in the earlier videos. Next, we create a memory saver instance as the check pointer. This helps to track conversation memory across multiple prompts and helps the agent to answer follow-up questions. We then create the React agent. In addition to the model, tools, and system prompt, we now provide the check pointer also as an input. This creates the agent and the chat bot in one step. When running this agent as a chat bot, we need to identify each conversation uniquely so that the chat bot can track conversation history. For this purpose, we create a config object. In this config object we provide a unique thread ID, this is a unique identifier that links all prompts into a single conversation.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-product-q-a-chatbot-25232477?u=76281980&t=93)** We can use this React agent in request response mode or in streaming mode. Here is an example of how we can use this in streaming mode. In the request response mode, we saw in the previous chapter, the agent waits until the final response is ready and then delivers all the results. In the streaming mode, where we use the stream function, the agent sends the results for intermediate steps immediately after they are available. We can run this code and review the results. We ask a question about the features and pricing for GammaAir. We do a pretty_print to show the intermediate steps. Here the agent decides to call both the product features retriever tool and the get_laptop_price tool. Then it combines the results and then creates the final output. In the next video, we will execute this chat bot as a full conversation and review the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3)
> **Code Identifiers:** pretty_print (1), get_laptop_price (1)
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Execute the product Q&A chatbot](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=0)** - [Instructor] Let's execute the product QNA chatbot with a list of back-and-forth conversations. We first create a list of user messages, simulating a complete conversation, including greetings and follow-up questions. We set up a unique thread ID as an identifier for this conversation. We then send each message to the chatbot and print the responses. Let's run this code and review the results. The user first starts with the hello. The chatbot responds with an appropriate message, including a purpose for what it does. There is no tool used here. Next, the user says that the user is trying to buy a laptop. The laptop responds with a menu of questions it can answer about laptops. The user asks for a list of laptop names, and the agent responds with a list. This list came from the retriever tool. Then the user asks about a specific laptop called SpectraBook. The chatbot provides details for this laptop. The next question is a follow-up question on the cost. It does not have the specific name of the laptop, but the chatbot has conversation memory. It was able to reference the previous conversation and get the context. It then uses the context to get the price for the specific laptop. Finally, the user thanks the chatbot, and the chatbot responds accordingly. This is an example of a real-world conversation.
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-product-q-a-chatbot-25228457?u=76281980&t=96)** As seen here, the ability of the agent to understand the user question and pick the right tool helps enrich the conversation. In the next example, let's test how the conversation memory of the chatbot works. For this, we are going to create two conversations, send the same follow-up question, and see how the chatbot uses its memory. We first create a function called execute prompt. This takes in as input a user identifier, a config object, and a prompt. It executes the prompt using the thread ID in the config object and prints the results. We create two threads and corresponding config objects. This simulates two users using the chatbot concurrently, then we execute the threads. For the first user, we ask the question about SpectraBook. For the second user, we ask a question about GammaAir, then we ask the same question, what is its price, for both users. Let's review the outputs for this code. We see that the chatbot answers about the features for both the laptops correctly to the corresponding users, then for the follow-up question, it uses the conversation memory to correctly identify the laptop that each user is asking and prints their price. This completes our example for creating a [[React.js|React]] chatbot using pre-built functions. In the next chapter, we will create a custom chatbot using LangGraph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** qna (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Custom Agents and Chatbots with LangGraph

[↑ Back to Table of Contents](#table-of-contents)

#### [LangGraph concepts](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=0)** - [Instructor] In this chapter, we will create a custom orders agent. We will use LangGraph to create a graph for this agent, and then execute the graph. We discussed briefly about LangGraph in the first chapter. Now let's discuss some key elements of LangGraph. We will be using these concepts in our implementation later. So what are the building blocks for a graph? We begin with nodes. A node is a place in the graph where some logic is executed. While building agents, we deal with a few types of nodes. An LLM node is used to integrate with an LLM to analyze prompts, create actions, and review observations. A tool node is used to execute tools. An action node can be used to invoke another agent from this agent. A logic node can be used for any custom logic outside of these types. An edge connects nodes. It is used to pass control from one node to another. In the case of this basic edge, when one node finishes processing data, it passes control to the next node in the graph through an edge. Then comes conditional edge. A conditional edge is used to route control to other edges based on a conditional check. Based on the check, the graph may route the request to one or more alternate nodes available.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-concepts-25230460?u=76281980&t=94)** We can wire the nodes in the graph using edges and conditional edges. The graph should be correctly wired to ensure that there are no orphan nodes. A graph begins with a start block. This usually connects to the first node in the graph that will be executed. The graph similarly has an end block that is called by the last node. As seen here, a node may decide to end the graph if it determines that the job is finished. Finally, there is agent state. Agent state maintains information about the execution of the graph. Each node writes its output to the state. Subsequent nodes read the state to determine its inputs. No data is exchanged through the edges. Data is always exchanged through the agent state. With this background, let's design our custom orders ChatBot in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12)
> **Env Vars:** llm (2)
> **Cross-References:** we discussed (1), in the next (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [LangGraph orders agent and chatbot design](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=0)** - [Instructor] Let's now design our custom agentic chatbot, including the graph for the agent. We are going to build an orders chatbot that can answer questions about laptop orders. In addition, it also has actions. This means it can also update orders based on user input. It has an RDBMS that stores details for all laptop orders. For our example, though, we will simply use a [[Pandas (Software)|Pandas]] Data Frame to represent a table. The first function tool we have is get_order_details. This tool can provide details for a specific order based on an order ID. The next function tool we have is update_quantity. This can update the quantity of laptops in an order, given an order ID. To keep things simple, each order will only have one laptop type. In a real-world application, there can be several function tools for both querying and updating information. The orders agent uses these two function tools. It can search and update orders based on user input. It is hooked on to an LLM for analyzing prompts, determining execution plans, and reviewing outputs. The orders chatbot provides the user interface and conversation memory and is hooked on to the orders agent. A user can provide a query like, "Show me the order details for ORD-7311,"
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=96)** and the chatbot would be able to answer it. Let's now design the graph for the orders agent. The first node in the graph is the orders LLM. It reads the input query and sends it to the LLM to determine the next steps. The LLM will return a list of actions. In this case, it will provide the tool to call and the parameters for the tool. The orders LLM node stores the incoming user query, as well as the LLM output to an agent state. This includes the tool to call and the parameters to the tool. The orders LLM then invokes a conditional edge. This edge checks if the next action determined by the LLM is a tool call. For this, it reads the output of the previous node from the agent state. It also writes its output back to the agent state. If the next action is a tool call, the control goes to the order tools node. The order tool nodes reach the tool to execute and the parameters for that tool from the agent state. It will execute the tool, [[Fetch]] results, and write those results back to the agent state. The control then moves back to the orders LLM. The orders LLM node will read the results of this tool call from the agent state. It will then analyze the results to determine if it has sufficient information to produce the final output.
>
> **[3:09](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/langgraph-orders-agent-chatbot-design-25231485?u=76281980&t=189)** If it has the information, it will generate the final output and write it back to the agent state. If not, it will determine the next step, which could be a tool call. The same flow repeats all over again until the final result is obtained. If the final result is available, then the conditional edge will end the call. The results in the agent state are passed back to the calling function, which is the chatbot. Let's now proceed to implement this graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[Fetch]] (1)
> **Env Vars:** llm (10), rdbms (1), ord (1)
> **CLI Commands:** node (5)
> **Code Identifiers:** get_order_details (1), update_quantity (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Set up tools for the orders agent](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=0)** - [Instructor] In this video, let's set up the tools required for the custom orders agent. We have done a similar setup before, so we will not discuss the details on how the tools are set up. We begin by setting up the LLM model for the custom orders agent. As before, we will use [[Microsoft Azure|Azure]] OpenAI [[GPT-4|GPT-4o]] model for this purpose. For setting up the laptop orders database, we have a list of orders in the data/Laptop Orders.csv file. We will load this file into a [[Pandas (Software)|pandas]] DataFrame and print its contents. The first tool we will create is the get order details tool. It takes as input an order ID. It searches the product orders DataFrame for records matching this ID. If no match is found, it will return a minus one value. If a match is found, it will return the contents of the record as a dictionary. The second tool we will create is the update quantity tool. It will take as input an order ID and the new quantity to be updated in that order. First, it searches the DataFrame for a matching order. If no match is found, it will return a minus one. If an order is found, it will update the order quantity to the new value and return true. The dot string for each of these tools describe their internals to the LLM.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-tools-for-orders-agent-25229433?u=76281980&t=95)** The test code is commented out, and that can be used to test these functions individually before adding them to the agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[GPT-4|Gpt-4o]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** llm (2), gpt (1)
> **Prerequisites:** set up (2), setup (1)
> **File Paths:** orders.csv (1)
> **Speakers:** - [instructor] (1)

#### [Set up the LangGraph orders agent](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=0)** - [Instructor] Now let's proceed to set up the graph and the agent for orders. The code discussed here is a template that can be followed for setting up agent graphs in general. We begin by creating a class, OrdersAgentState. This is of type TypedDict. In this class is a single messages attribute. This is a list of messages. It can be a human message, an AI message, or a system message. The operator specified is add. This means that as new messages come in, they are added to the end of the list. This is used to keep track of state in the agent. Then we define the OrdersAgent as a class. There is an init method to this class. We pass in the LLM model, the list of tools available, the system prompt, and a debug flag to the init function. This list can be customized as required based on the requirements of the use case. We store the system_prompt and the debug flag in the instance variables. Then we create an agent_graph from the StateGraph method by passing the agent state as the input. This creates a template graph. To this graph, we can now add nodes. We add the orders_llm node first. We provide a method, call_llm, as the method to execute when this node is invoked. We will add this method later.
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=95)** We then add another node called orders_tools. This node invokes the method for call_tools. Then we add a conditional_edge. This originates from the orders_llm. It invokes a method, is_tool_call. If this method returns true, it routes to the order_tools node, else it routes to the END block. This is the graph design we discussed in the previous video. Next, we add an edge from the orders_tools node to the orders_llm node. We also set the orders_llm node as the entry point, so this is the first node that gets executed. Inside the agent, we can also manage conversation memory using the MemorySaver function. This is provided out of the box by LangGraph to manage conversation memory. Finally, we need to compile the graph using the compile function. We already attached the agent state during graph creation. Now we add the conversation memory using the checkpointer attribute. This sets up the graph. Next, we compile the tools dictionary using the list of tools passed in. We can also use the debug flag to print debug messages wherever needed inside the agent. We bind the tools to the model, so the model knows the list of tools available. Now we proceed to define the methods. The first method is the call_llm method. Here, we read the list
>
> **[3:07](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=187)** of all messages from the OrdersAgentState. The LLM needs to know the history of the request, so all the messages need to be sent to the LLM. The message list will already have the incoming user message added by LangGraph. We preprint the system_prompt also, so the LLM has instructions on what to do with the request. With these messages, we call the LLM. The result from the LLM is created as a message and returned. LangGraph will then take care of adding this return message to the agent state. Next is the is_tool_call conditional edge function. Here, the input is the agent state. We read the last message from the agent state. This would be the last message returned by the orders_llm node as it is the prior node in the graph. We check to see if there are any tool_calls in the message. If so, we return true, else we return false. The final method is the call_tools method. Again, the agent state is the input. This method retrieves the list of tool_calls from the last message in the agent state. Do note that the LLM may come up with multiple tools to call with their own parameters. So we iterate through the list of tool_calls, invoke the tools with their corresponding parameters, and capture the results. The results are then accumulated for all the tool_calls.
>
> **[4:43](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-langgraph-orders-agent-25231483?u=76281980&t=283)** These results are then returned by the method. LangGraph will append the results to the agent state. This completes our setup for the OrdersAgent. Now let's create a system_prompt. The system_prompt defines the persona for the agent. It also provides guidance on how the agent should behave in various conditions. Then we create the OrdersAgent object with the actual model, tools list, system prompt, and debug flag. We can visualize the graph from the agent created using the draw_mermaid_png function. The image shows the graph that is set up. It can be used to debug if all edges are set up correctly and there are no missing links. Let's execute this agent in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** orders_llm (5), system_prompt (4), tool_calls (4), call_llm (2), orders_tools (2)
> **CLI Commands:** node (11)
> **Env Vars:** llm (7), end (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Prerequisites:** set up (3), setup (1)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **Exercise Files:** template (2)
> **Warnings:** note that (1)

#### [Set up and execute the LangGraph chatbot](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=0)** - [Instructor] The agent we set up in the previous video already has conversation memory, so the chat bot is implicitly set up now. To test the chat bot, we will create a series of prompts. This includes greetings, query for an order, updating an order, a follow-up question, and a question about an invalid order. We create a config object with a thread id. We then iterate through the list of input prompts and call the agent with all the parameters. We print the input question and the final agent message like a conversation. Let's now review the results. For the greeting from the user, the agent responds back with an equal greeting. It also mentions its purpose. For the question about an order id, the agent responds with the correct details. It also asks if the user has any more questions. For adding one more laptop to the order, it shows the exact count to which the order has been updated. We ask for the order details again, it uses conversation memory to determine the order ID and shows the updated quantity correctly. When asked about an invalid order id, the agent chat bot responds with an exception message. When the user says, "Bye," the agent also responds with a polite message. This is an example of how conversations happen
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-execute-the-langgraph-chatbot-25231482?u=76281980&t=94)** with chat bots in real enterprise scenarios. We can see how the agent uses the LLM agent state and conversation memory to hold a human-like conversation with the user.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2)
> **Env Vars:** llm (1)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Reflection-Based LangGraph Agents

[↑ Back to Table of Contents](#table-of-contents)

#### [Reflection-based summary agent: Design](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=0)** - [Instructor] In this chapter, we will build a different kind of chatbot. This is a summarizer chatbot that can summarize an input body of text. Our earlier examples used tool use and planning patterns. This example uses the reflection pattern. The summarizer chatbot takes as input a body of text and returns its summary. It has a summarizer agent that uses an LLM to create a summary for the input text. It also has a reviewer that reviews the summary to see if it represents the input correctly. The chatbot sits in front of it. A user can provide a task, like, "Summarize the following text," and get the summary in return. What does the graph for the summarizer agent look like? Here, the first node is the generate summary node. This node uses an LLM to generate the summary of the input text. It uses an agent state to store the inputs and the summary. On producing the summary, it calls a conditional edge called, should continue? Here, we check if the summary is good enough to provide to the user. To keep things simple, we allow the generate and review process to go on for three iterations. If the third iteration is complete, this edge will return false, else, it'll return true. It again uses the agent state to read the messages and determine if three iterations are done. The review summary node uses an LLM again
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/reflection-based-summary-agent-design-25231481?u=76281980&t=95)** to review the summary. It provides the input document and the summary generated to the LLM and requests it to check if the summary is good. It also request any feedback for the summary. This node, again, uses the agent state to read inputs and write results. The generate summary node will then use the review comments. It'll pass in the original input, the generated summary and the review comments to the LLM. A new summary is created in cooperating the feedback. This generate and review loop continues for three iterations, after which the results are returned back to the user. Let's now proceed to build this agent.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6)
> **Env Vars:** llm (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Engineer prompts for reflection](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/engineer-prompts-for-reflection-25228456?u=76281980&t=0)** - [Instructor] The code for this chapter is in the notebook code O5_XX_Summary chatbot with reviewer. Let's first set up the model and the prompts. Similar to the previous examples, we set up the AzureChatOpenAI with the [[GPT-4|GPT-4O]] model. In the case of summary with review, we use two LLMs, one for the summary and another for the review. So we need two system prompts. The first prompt is the summarizer prompt. Here, we set the persona for the summarizer. We ask it to create a summary of less than 50 words. We also request it to consider any review comments and summarize accordingly. Next, we set up the system prompt for the reviewer. We ask the LLM to compare the input with the summary, and check its accuracy. We also ask it to provide recommendations for improving the summary. We again request the feedback to be less than 50 words. For the actual LLMs to use for reflection, we can use the same LLM model, or different models for summarization and review. We will now use both these prompts to set up the summary agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4|Gpt-4o]] (1)
> **Prerequisites:** set up (4)
> **Env Vars:** llm (2), gpt (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Set up the summarize-and-review agent with LangGraph](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=0)** - [Instructor] Let's now set up the summary agent. We begin by setting up the summary state to hold all the messages. The class summary agent holds the graph and methods for this agent. We, again, set up the init method for initializing the graph. Here, as input, we provide the model, the summarizer prompt, the reviewer prompt, and the debug flag. There are no tools in this agent. We start the agent graph by setting up a state graph with the agent state. We first add the summarizer node with the generate summary as the associated method to call. Next, we add the reviewer node with the review summary as the associated method to call. Then we add a conditional edge from the summarizer. This will call the should_continue method, which will return a true if review is needed and false if review is not needed. If a review is needed, it will route to the reviewer, otherwise it'll end the agent. Finally, we add an edge from the reviewer to the summarizer. We also set the first note or entry point to the summarizer. We add the conversation memory with the memory saver and compile this graph. Next, we set up the generate_summary method. We preprint the summarizer system message to all the other messages to form the input body to the LLM. Then we invoke the LLM. The results from the LLM are return by the function,
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-summarize-and-review-agent-with-langgraph-25231487?u=76281980&t=95)** which gets added to the state. Then we set up the review_summary method. Here we follow a similar process as the generate_summary method, but we use the reviewer system prompt instead of the summarizer system prompt. This will make the LLM to review the content generated by the previous step and provide comments. This again gets added to the state. The should_continue method checks for the total number of messages in the agent state. Each iteration adds two messages, one for the summarizer and one for the reviewer. Then there will also be the original input. We hence use the length of the message list to determine if sufficient reviews have been done. If so, we return false. Else, we return true. This completes our setup for the summary agent class.

> [!info]- Semantic Content
>
> **Code Identifiers:** should_continue (2), generate_summary (2), review_summary (1)
> **Prerequisites:** set up (4), setup (1)
> **Env Vars:** llm (4)
> **CLI Commands:** node (2), make (1)
> **Speakers:** - [instructor] (1)

#### [Set up the summarize-and-review chatbot with LangGraph](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/setup-the-summarize-and-review-chatbot-with-langgraph-25230462?u=76281980&t=0)** - [Instructor] Having set up the agent for summary, let's also set up the chatbot and get the input ready. We follow a similar process as in the earlier chapter to create a chatbot. We create the summary agent instance with all the required inputs. We display the graph to see how it is setup. For testing, we have a document called EcoSprint SpecificationDocument in our data directory. This is available as part of our exercise files. We load this PDF file using the PyPDFLoader. Then we choose the first page in the document. We will also remove all the new line characters. This will be used as our input. Let's test with this input in the next video.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), setup (1)
> **Env Vars:** pdf (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Execute the summarize-and-review chatbot](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=0)** - [Instructor] Now we will execute the summary chat bot with review. We create a config with a unique thread ID. Then we create a human message with the content extracted from the PDF file earlier. This is then used to call the summary chat bot. Do note that we have set up this agent in the debug mode, so we can see all the intermediate steps. Let's run this code now and review the results. We now see the generator output and the reviewer output for each iteration. At each iteration, the generator incorporates the reviewer feedback and improves the summary. For example, the first review provides feedback that features like acceleration and colors need to be added. The following output from the generator incorporates this feedback. Now, let's add human feedback also to improve the summary. This is in addition to what the reviewer does. We recreate the summary agent, but with debug mode set to false. The human feedback also goes for two iterations. As inputs, we start with the original content from the user. Then we ask the summarizer to rewrite the review to focus more on specification. Then we ask you to remove details about the touch screen. Again, we create a new thread ID and execute these prompts one by one. For each user input, the internal agent reviewer also does three iterations, but that is not shown here.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-summarize-and-review-chatbot-25231486?u=76281980&t=94)** We show the interaction between the user and the agent. As we see, the agent incorporates human feedback and improves the summary. For example, when the user says to remove the touch screen details from the summary, the agent follows that instruction and removes the touch screen details from the summary it produces. This completes our exercise on using reflection for summarizing documents.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Env Vars:** pdf (1)
> **Documentation:** specification (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Multi-agent Systems with LangGraph

[↑ Back to Table of Contents](#table-of-contents)

#### [Multi-agent systems](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=0)** - [Instructor] Multi-agent systems is another agentic pattern that is becoming popular. Enterprise workflows are complex, requiring multiple systems and people to work together to achieve a goal. Creating specialized agents for specific tasks and getting them to work together helps achieve complex automation while improving efficiency. Why do we need multi-agent systems? Why can't we build one single big agent for the same thing? Individual agents are built to handle a specific task are provide services in a specific domain. A given workflow or goal may need multiple tasks to be executed or require multi-domain expertise. Individual agents can then collaborate and coordinate with each other to execute such workflows. It mimics how a team of humans work together to achieve a task, each leveraging their individual expertise while taking help from others in other areas. Multi-agent systems follow popular software patterns of separation of concerns and distributed design. They help create reusable building blocks. A single agent can be built to be a part of multiple workflows. Each agent can be built in-house or acquired from open source or from third parties. This helps in saving cost and time while keeping solutions simple. Following the multi-agent pattern allows building
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/multi-agent-systems-25228455?u=76281980&t=95)** complex workflows from individual agent building blocks. This can leverage existing best-of-breed agents and minimize custom work. In this chapter, we will build a multi-agent system that also uses the [[Routing]] pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Speakers:** - [instructor] (1)

#### [Routing agent design in LangGraph](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=0)** - [Instructor] Let's now design the [[Routing]]-based multi-agent chatbot. We will leverage two other agents we created in the earlier chapter for this example. What does this multi-agent chatbot look like? We have a routing agent at the center of this agent system. The routing agent analyzes the incoming query and routes the request to other agents based on the type of query. It will leverage the product question and answer agent that we created in chapter three. This agent answers questions about laptop features and pricing. It will also leverage the orders agent that we created in chapter four. This agent can retrieve order details as well as update an order. The routing agent can route a given request to one of these agents based on the type of request. We will front end the routing agent with a multi-agent chatbot. To this chatbot, the user can ask questions either about the laptop features or get order status. What does the graph for the routing agent look like? The routing pattern is used to route the request to one of the many options available to the agent. Here, the request to the agent first goes through the router node. The router node uses an LLM to classify the request as a product request, an order request, or simply small talk. Small talk includes greetings, chitchat, and goodbyes. The workflow then moves to the classify request
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/routing-agent-design-in-langgraph-25234394?u=76281980&t=94)** conditional edge. This edge analyzes the output of the router and then routes it to the corresponding node. There are three routing options here. The product Q and A node uses the product Q and A agent to handle the request. The orders node uses the orders agent to handle the request. The small talk node uses an LLM to respond to the user request as required. Do note that the first two nodes are themselves agents, so they go through their own workflows and handle their own state. Given that it's a routing pattern, the request goes one direction only. Let's now proceed to implement this design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (9)
> **CLI Commands:** node (6)
> **Env Vars:** llm (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using agents as LangGraph nodes](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=0)** - [Instructor] Let's now set up the product Q&A agent and the orders agent as nodes for the [[Routing]] agent graph. The code for this chapter is in the notebook, code_06_XX multi-agent chatbots with routing. We begin by setting up the LLM for use in the router In a real application agents may expose APIs to invoke them. They can also be packages that we can import into the main agent. In this case of the notebook, we simply import the notebooks for chapter three and four by running them. This is nave, but it does work for us. While importing, the notebooks are also running, so they do produce all their outputs. We can ignore them. To set up an agent node for the two agents, we create a common function called agent node. This is the method that will get called when the node invoked in the graph. This function takes us input, the agent state, agent class, name of the agent, and the config object. It will return the messages object to add to the state of the main router agent. The conversation memory of the main routing agent needs to be shared with the other agents. For this, we will get the same thread ready used in the main agent and pass it on as config to the agent node. To use the agent we use it's involk method and get the output. The output of the agent can be a tool message
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/using-agents-as-langgraph-nodes-25234397?u=76281980&t=95)** of the final output. Based on the type of message, we format the message accordingly and return the messages. Now we create two nodes. We use the partial function in the func tools package. This method returns a partial function that can be used subsequently. If you are not familiar with this method, I recommend reading up about this in [[Python (Programming Language)|Python]] Documentation. The partial function sets up the agent node, but does not execute it until it's actually called from within the workflow. With these two nodes set up now, let's proceed to create the router agent in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (5), python (1)
> **Prerequisites:** set up (3)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Set up the routing agent and chatbot in LangGraph](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=0)** - [Instructor] The router agent's setup is a little different than the other agents we have set up earlier. The router agent does not have iterative loops, but passes on the request to the destination. The destination can then execute the request and provide the result. We start by setting up the router agent state. Then we define the router agent class. For this class, in addition to [[Routing]], we also want this agent to handle small talk conversations like greetings and goodbyes. So we have the routing system prompt and the small talk prompt as inputs. We first store these inputs to instance variables. We begin the state graph with the router agent state setup. We add the main router node, which invokes the call_llm method. This analyzes the input and provides a routing decision. The Product_Agent invokes the product QnA agent node. The orders agent invokes the orders agent node. The Small_Talk agent invokes the respond_smalltalk method. We then add a conditional edge from the router node. This invokes the find_route method. This method analyzes the output of the router node. Based on the value of that output, it will route to the appropriate node. We terminate each of the nodes to the END block. The router node is used only once, and then the nodes take over. The entry point is set as the router node.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/set-up-the-routing-agent-chatbot-in-langgraph-25228454?u=76281980&t=93)** The router node itself does not keep conversation memory, as each routing decision is independent. We can add a memory saver like other agents if we need to. We then proceed to compile the graph. The call_llm method preprints the system message with the incoming prompt and invokes the LLM. The LLM would return a route for the request. The respond_smalltalk will call the LLM in a similar fashion with the small talk prompt. This is used to respond to greetings from the user. The find_route method reviews the last message from the LLM and then chooses the routing destination based on it. Let's now set up the system prompts and the router agent. For the routing system prompt, we set the persona of the agent as a router. We asked the LLM to classify the prompt and only return, small talk, product, order, or end. We also mentioned that the output should not contain any other information. For the small talk prompt, we asked the LLM to respond in a professional way stating its purpose. The router_agent is then set up with both the prompts and the model. We print the graph for the agent and we can review the workflow. We can execute this router in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (6)
> **CLI Commands:** node (9)
> **Code Identifiers:** call_llm (2), respond_smalltalk (2), find_route (2), router_agent (1)
> **Env Vars:** llm (6), end (1)
> **Prerequisites:** set up (3), setup (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Execute the routing chatbot in LangGraph](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=0)** - [Instructor] Let's execute the router agent now. We begin by sending a single message to ask for features of SpectraBook. We print all the messages coming back from the router agent. In the output, we first see the input as the human message, then we see the AI message as product. This is the router LLM deciding on where to route the call. It has decided to use the product route. This is then sent to the product QNA agent. The agent responds back with the final message. Note that since we are using the router agent, the detail logs from the product QNA agents are not available. If also these messages are needed, then they need to be fetched from the QNA agent and logged into the router agent state when invoking that agent. Next, we execute another request about the status of an order. Here, we see the router has chosen order as a route. This is sent to the orders agent, and the details of the order are printed. Finally, we create a full conversation that includes small talk, order details, order quantity updates, features for a laptop, cost, and a goodbye. This list exercises all the routes and all the functions in these routes. We create a single thread and execute all the prompts. Let's review the results. The agent uses small talk to respond to the first call, "How are you doing?"
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/execute-the-routing-chatbot-in-langgraph-25227466?u=76281980&t=93)** It routes the second prompt to the orders agent. The third prompt also goes to the orders agent. In this case, it uses the conversation memory to identify the order. The next two questions work similarly with the product QNA agent. Finally, the agent uses the small talk method to answer the bye message. This example demonstrates the [[Routing]] pattern as well as the multi-agent pattern. We were able to reuse two other agents in the workflow. This completes our course on building agentic chatbots with LangGraph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Env Vars:** qna (4), llm (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-ai-agents-and-chatbots-with-langgraph/next-steps-25228453?u=76281980&t=1)** - We have reached the end of the course. By now, you have an understanding of how agentic AI works and how to build simple agents, but this is just a foundation. If you want to start integrating this further, here are some recommendations for your learning journey. First, learn about agentic AI capabilities in frameworks like [[LlamaIndex]] and AutoGen. Next, try some agents with a few tools like RAG and third-party integrations. Then build an AI agent for your organization, leveraging your learnings. AI always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (1)
> **CLI Commands:** find (1)
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