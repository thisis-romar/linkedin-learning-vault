---
type: course
cssclasses:
  - lle-course
slug: hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a
url: "https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a"
duration_minutes: 100
duration: 1h 40m
updated: 8/6/2025
learners: 27831
skills:
  - Generative AI
  - AI Agents
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a-6055298/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEk9eDDyM1BhA/learning-public-crop_675_1200/B4EZh7TqMEGoAY-/0/1754415408708?e=2147483647&amp;v=beta&amp;t=0dIpyFdMLLo4p4eAU1B14BV_ODp9xNq3_9Urb76tFBQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Agents- Advanced Techniques for Developers]]'
prev_courses:
  - '[[Model Context Protocol (MCP)- Hands-On with Agentic AI]]'
path_nav: '[{"path":"Building AI Agents- Advanced Techniques for Developers","position":4,"total":4,"prev":"Model Context Protocol (MCP)- Hands-On with Agentic AI","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/generative-ai
  - skill/ai-agents
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20AI-%20Building%20AI%20Agents%20with%20Model%20Context%20Protocol%20(MCP)%20and%20Agent2Agent%20(A2A).md)

![Hands-On AI: Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)](https://media.licdn.com/dms/image/v2/D4E0DAQEk9eDDyM1BhA/learning-public-crop_675_1200/B4EZh7TqMEGoAY-/0/1754415408708?e=2147483647&amp;v=beta&amp;t=0dIpyFdMLLo4p4eAU1B14BV_ODp9xNq3_9Urb76tFBQ)

# Hands-On AI: Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)

> This course introduces you to the Model Context Protocol (MCP) and Agent2Agent (A2A) communication frameworks essential for designing context-aware, collaborative AI agents. Explore MCP architectures, tools, and implementations, and learn how to build AI applications and agents that leverage rich contextual understanding. Additionally, instructor Kumaran Ponnambalam dives into A2A's structure, wor

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a) | 1h 40m | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Introduction to Model Context Protocol]]** (6 videos)
- **[[#3. 2. A Simple MCP App]]** (5 videos)
- **[[#4. 3. HR Policy Agent with MCP]]** (4 videos)
- **[[#5. 4. HR Timeoff Agent with MCP]]** (4 videos)
- **[[#6. 5. Introduction to Agent2Agent Protocol]]** (6 videos)
- **[[#7. 6. Build a Multi-Agent HR App with A2A]]** (5 videos)
- **[[#8. Conclusion]]** (1 videos)

### 1. Introduction

#### Why MCP and A2A?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980&t=0)** - [Narrator] As AI agents go mainstream and integrate with other data sources and agents, standard protocols are needed to ensure easy and consistent integrations.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980&t=13)** In this course, I will explain the concepts of MCP and A2A, and how they can be used to build multi-agent systems.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980&t=22)** We will implement three examples for MCP and then build a multi-agent human resources assistant using A2A.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980&t=32)** My name is Kumaran Ponnambalam.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980&t=34)** Let's get started with MCP and A2A for building real world agentic systems.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (3), a2a (3)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)


### 2. 1. Introduction to Model Context Protocol

#### What is Model Context Protocol?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=0)** - [Instructor] In this chapter, we will discuss the concepts of Model Context Protocol, or MCP for short, and how it will be used to build generative AI integrations.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=12)** We begin by discussing the need for this protocol in this video.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=17)** Let's briefly review the typical setup of a GenAI system or application.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=23)** The system is provided with inputs by a user or a client system, mostly in the form of text, data, or other formats.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=33)** The system would then proceed to use this input and execute the request.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=39)** An orchestration engine helps to orchestrate the request across multiple entities to determine a response.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=47)** It connects to a set of resources to fetch data or context.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=52)** These resources can be structured databases, files, web services, or vector databases, or graph databases.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=62)** In the case of AI agents, the orchestration layer also integrates with a set of agent tools to execute actions.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=72)** To send data to GenAI models, prompt templates are used.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=77)** These templates can be bundled inside code or made available in external data stores.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=84)** The orchestration layer also talks to GenAI models for various activities like planning, reflection, and generation.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=94)** The final output is generated based on the orchestrated actions and delivered back to the client.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=102)** What are some key challenges in building such GenAI systems?
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=106)** Enterprise GenAI systems typically integrate with several types of resources to get data.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=113)** Each resource type supports its own interface for data retrieval.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=118)** This could be SQL, REST, gRPC, or simple file reads.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=124)** AI agents through their tools need to integrate with external systems like web services, third party services, and cloud services for performing actions like creation, retrieval, and updates on data stored in these systems.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=142)** Prompt templates also are not standardized, so each developer or team uses their own methods to store and retrieve them.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=154)** Each such external entity needs custom integration to be built for each application.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=160)** This significantly increases the integration efforts needed to build a GenAI system.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=167)** Here is where Model Context Protocol, or MCP, comes in to help.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=173)** MCP provides a single standard protocol through which a GenAI system can integrate with resources, tools, or prompt templates.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=183)** For the protocol to work, the provider of each of these external systems need to support the MCP interface on their side.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=193)** Once implemented, any client can then access these systems using MCP.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=200)** A given GenAI system may integrate with multiple such external systems.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=206)** They can use a single standard protocol to integrate with all such systems.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=212)** As the integrations grow in complexity, MCP helps in standardizing them and significantly reducing development efforts.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=222)** Let's explore more of MCP in the next few videos.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (7), sql (1), rest (1)
> **Code Keywords:** let (2), interface (2)
> **Code Identifiers:** grpc (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### MCP architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=0)** - [Instructor] What are the key entities that participate in MCP?
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=5)** In this video, we will discuss the key entities in the MCP protocol.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=10)** We will explore more details of their interactions in the following videos.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=16)** There are three key entities that participate in the model context protocol.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=22)** The first one is the MCP Host.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=25)** The MCP Host is the application that wants to access resources, tools, and prompts using MCP.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=34)** This is typically the gen AI application that does orchestration across resources.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=40)** This application is usually an executable service itself.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=45)** Next comes the MCP Server.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=48)** This is the server that exposes resources and tools through the MCP protocol.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=54)** It typically sits in between the MCP Host and the backend resources and services.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=61)** It talks using the MCP protocol on one side and the native protocol of the resources and services on the other side.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=70)** Finally, there is the MCP Client.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=73)** This is the module or function that resides within the MCP Host.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=78)** The MCP Host talks to the MCP Server through the MCP Client.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=83)** The MCP Client, and the MCP Server, are the entities that will communicate using the MCP protocol.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=92)** Let's discuss this architecture with an example now.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=97)** Let's say we have a Sales AI Assistant application.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=101)** This assistant is an AI agent that answers questions about products as well as performs order management operations.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=110)** This is the MCP Host.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=113)** The assistant uses a knowledge base of products sold by the company.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=118)** This knowledge base is stored in a Postgres Vector database where the product data is stored in embedded format for semantic search.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=129)** This information will be used using retrieval augmented generation or RAG by the Sales AI Assistant.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=137)** A PGVector MCP Server is deployed to front the PGVector database.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=143)** This server exposes search capabilities on the Vector DB as MCP resources.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=150)** It talks with the Vector database using a SQL interface.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=156)** To access the knowledge base for RAG, the Sales AI Assistant has a PGVector MCP Client.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=163)** This is typically a library, a package, or a class that runs inside the same executable as the MCP Host.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=172)** When the Sales AI Assistant needs to search for products, it invokes the PGVector MCP Client.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=179)** This MCP Client will connect to the PGVector MCP Server using the MCP protocol.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=186)** The PGVector MCP Server will in turn execute the search on the Vector DB using SQL and return the results back to the MCP Client.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=197)** In addition, the Sales AI Assistant also uses Salesforce Cloud for managing orders.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=205)** A Salesforce MCP Server is deployed for accessing the Salesforce Cloud using MCP.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=212)** It integrates with the Salesforce Cloud using the REST protocol.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=217)** It exposes tools for creating, updating and deleting orders.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=223)** This server can be either custom-built by the Sales AI Assistant developers, or provided by Salesforce itself for MCP integrations.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=236)** The Salesforce AI Assistant also has a Salesforce MCP Client, which it uses to perform order management operations.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=246)** This MCP Client talks to the Salesforce MCP Server using the MCP protocol.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=253)** As seen here, irrespective of the protocol supported by the source systems like PGVector and Salesforce, the Sales AI Assistant only needs to use one protocol, namely MCP, to talk to multiple sources.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=269)** Similarly, multiple AI assistants and Gen AI applications can use the same MCP Servers to integrate with their sources.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=281)** This standardizes communications and reduces redundant integration work.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (37), rag (2), sql (2), rest (1)
> **Code Keywords:** let (2), finally, (1), module (1), function (1), interface (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Resources, tools, and prompt templates
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=0)** - [Instructor] What kind of content can be served using MCP?
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=4)** It can be resources, tools, and prompt templates.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=9)** MCP is built as a general purpose interface for any kind of data and these three are the most popular ones used in the Gen AI world.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=20)** Let's first discuss resources.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=23)** Resources are read-only data that is exposed to the Gen AI application.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=28)** Each resource has a unique URI through which the data can be accessed.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=34)** The MCP server can both provide the URI as well as the data that is served by it.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=42)** Resources can be of any kind.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=44)** They can be files, records from a database, images, audio, video, or search results from a search engine.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=54)** The important thing to note is that resources can only be read.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=58)** They cannot be modified.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=62)** The MCP client and the associated host application decides on how these resources will be used within the application.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=71)** They can be used for decision making or generating answers to the user questions.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=77)** The MCP server itself is not aware and does not care about the actual usage.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=85)** How does a client know what resources are available?
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=90)** Each MCP server also provides a listing interface through which clients can get a list of resources available in that server.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=100)** MCP servers also support dynamic update notifications.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=105)** This means that if a resource is updated after it is fetched by the client, the server can notify the client after the change.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=116)** Next comes tools.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=118)** Tools are specifically used in the context of AI agents.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=123)** Tools expose executable functionality to the MCP clients.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=128)** These include create, retrieve, update, and delete operations.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=134)** There can also be other capabilities like reviewing content, integrating with workflows, and alerting.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=142)** Do note that the same data can either be served either as a resource or as a tool.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=148)** A resource is read-only, whereas a tool can be used to change the data also.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=155)** Tools enable AI agents to integrate with third-party applications using a standard protocol.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=162)** Third-party applications will support their own MCP servers which the agents can use MCP to integrate with.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=172)** Each MCP server will also provide a tool listing interface that can be used by the clients to discover tools provided by the server.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=184)** This listing contains metadata about the tool's inputs, functions, and outputs.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=189)** This can be used by a reasoning model to determine if and when to use these tools.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=197)** Then comes prompt templates.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=200)** Prompt templates typically are system prompts that have placeholders for the user query, context, and other information.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=209)** Having reusable prompt templates for specific functions helps standardize interactions and promote reusability.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=218)** Prompts served by MCP servers support metadata as well as placeholder variables.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=224)** These variables can be replaced with actual values during serving.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=230)** Again, MCP provides a prompt listing capability that allows clients to discover the prompt templates that are available for a given MCP server.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=242)** MCP also supports dynamic prompts where prompts can be created using serving time based on the user inputs or system conditions.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (15), uri (2)
> **Code Keywords:** interface (3), let (1), delete (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Transport in MCP
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=0)** - [Instructor] Software services need a transport layer to communicate and exchange data.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=7)** In this video, we will discuss the transport options supported by MCP.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=13)** Let's begin with the concept of messages.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=17)** Messages are the unit of communication in MCP.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=21)** When MCP clients and servers communicate, they do so by exchanging messages.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=29)** There are a few message types in MCP.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=32)** A request is a message that is sent from a client to a server in MCP.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=38)** It usually contains the query for which data needs to be fetched.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=44)** A response is a message that is sent from the server to the client.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=50)** A response is returned for each request received by the server, and notification is a message that is initiated by the server to the client.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=62)** Unlike a response, a notification is self initiated by the server.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=68)** It is usually used to send alerts to the client if the resource or tool on the server side is updated with new data.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=79)** All messages are exchanged in JSON-RPC2.0 format between the client and the server.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=87)** Both MCP client and server uses prebuilt SDKs for communication.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=94)** This SDKs take care of formatting messages, as well as executing the transport protocol.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=102)** Next comes the protocol options available in MCP.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=106)** There are two such options supported.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=110)** The first option is STDIO.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=113)** This is the standard input output protocol that is used for software programs running on the same machine to communicate with each other.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=123)** Here, the client writes to the input stream for a running process and reads from its output stream.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=132)** This can only be used when the client and server are running on the same machine or virtual machine instance.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=140)** For STDIO, the client may actually start the MCP server, exchange messages and terminate the server when closing the connection.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=151)** The second option is the streamable HTTP option with server site event support for notification.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=159)** With HTTP, the MCP server can be running in a local machine, remote machine, or any public URL.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=167)** It provides a standard mechanism to communicate with independently running servers.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=174)** The server service should already be running for the client to contact it.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=179)** The client will not attempt to start the server.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=184)** This transport method provides streaming support so the response can be streamed back to the client in case of long running responses like text or video streams.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=195)** Server notifications can be sent by a callback URL provided by the client using server side events.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=205)** Let's revisit the MCP architecture example we discussed in an earlier video.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=211)** For the first MCP client for PGVector, the MCP server can be local and deployed on the same machine as the sales AI assistant.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=222)** The sales AI assistant will start the PGVector MCP server when needed, and use STDIO for communication.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=232)** The Salesforce MCP server may be remote and hosted using an HTTP SSE interface.
>
> **[4:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=240)** This can even be running in the Salesforce Cloud.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=244)** The MCP client connects to this server when needed to exchange messages.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=251)** Irrespective of the transport used, all messages will be exchanged in JSON-RPC 2.0 format.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (15), stdio (3), http (3), json (2), url (2)
> **Code Keywords:** let (2), self (1), public (1), interface (1)
> **Definitions:** is a  (3)
> **Versions:** 2.0 (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### Messaging flow in MCP
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=0)** - [Instructor] Let's do a deep dive into the messaging flow between the MCP client and the MCP server in this video.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=9)** This sequence diagram shows the messaging flow between the client and the server.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=15)** The MCP client first sends an initialization request to the MCP server to initiate a connection.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=23)** The MCP server sends back an initialization response to confirm its connection.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=31)** An initialized message is sent from the MCP client, and the connection between the client and the server is established.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=40)** This connection stays alive until one of them decides to terminate it.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=46)** The MCP client may send a request for data or action for whether it is a resource, tool, or prompt.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=54)** The MCP server will respond back with an appropriate response or an error message if an error is encountered.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=63)** The request and response messaging will continue in a loop for many iterations as the MCP client handles multiple user requests.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=74)** The connection stays alive during the process.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=78)** The MCP server may additionally send a few server site notifications too, that are received and managed by the client.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=88)** When the MCP client wants to terminate the connection, it sends a disconnect message to the MCP server.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=95)** This ends the connection.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (12)
> **Code Keywords:** let (1), continue (1)
> **Prerequisites:** initialization (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Prebuilt MCP servers
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=0)** - [Instructor] Every enterprise uses several third party products like databases, ticketing systems, document hubs, and SaaS services.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=10)** Does this mean that they need to build an MCP server from scratch for all of them?
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=16)** Fortunately not.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=17)** There are prebuilt MCP servers available that are ready to be deployed and used.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=25)** Several data and services providers are building out MCP servers for their offerings, so they can be instantly integrated into Gen AI workflows.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=36)** In addition, other third parties are also building open-source MCP servers for popular databases and cloud services.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=46)** So, there are few options available for any popular data service.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=52)** When possible, it's recommended to use a prebuilt MCP server.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=57)** It's recommended to use the server that is provided by the same vendor who makes the data source product.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=64)** If not, try available open-source MCP servers.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=69)** This GitHub Repo has a list of available MCP servers.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=74)** Links to their content are also provided here.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=78)** Please take time to explore this list and evaluate if they can be used for your use case.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (7)
> **Best Practices:** recommended (2)
> **Code Keywords:** case. (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


### 3. 2. A Simple MCP App

#### MCP SDKs
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=0)** - [Instructor] When building MCP clients and MCP servers, do we need to write code for implementing the MCP protocol From scratch?
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=10)** MCP SDKs are available, which takes care of that heavy lifting and makes building MCP clients and servers easy.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=20)** Let's explore some popular MCP SDKs available.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=25)** If you are building your applications in Python, it's recommended to use the Python SDK that is based on FastMCP.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=34)** FastMCP is an easy to use SDK that encapsulates the protocol implementation and provides easy decorators to enable MCP.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=45)** We will be using FastMCP in this course.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=49)** LangChain also provides an MCP adapter package that can be used to build MCP clients.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=56)** We will use this to build clients in this course.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=60)** In addition, LlamaIndex also has an MCP package that allows for easy MCP use.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=68)** Most Gen AA frameworks provide some form of MCP implementation.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=73)** It's recommended to use an existing MCP SDK when possible to save the hard work of implementing the protocol.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=82)** We will be doing the same in this course.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (13), sdk (3)
> **CLI Commands:** python (2)
> **Best Practices:** recommended (2)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Simple MCP app design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=0)** - [Instructor] In this chapter, we will build a simple MCP app.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=4)** We will build an MCP client and server, integrate them, and see MCP in action.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=12)** We are going to build a code of conduct assistant for this example.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=17)** This is a human resources AI assistant that will answer questions about code of conduct policies.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=25)** The policies themselves are available in a PDF file called codeofconduct.pdf.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=32)** This file and the other files for this chapter are available in the Chapter 2 folder for the exercise files.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=41)** The MCP server will provide access to the PDF file as a resource.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=47)** Remember, that we could also provide access as a tool if we are building an AI agent.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=54)** The client will use this resource to answer questions about code of conduct for this enterprise.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=61)** It will additionally leverage an LLM for generating the final answer.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=66)** Let's briefly discuss the design for this code of conduct application.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=71)** The file codeofconduct.pdf is stored in the file system.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=76)** It is in the same machine that will run the MCP server.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=81)** We will build an MCP server that will provide access to this file as a resource.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=87)** The code of conduct assistant is the client that will use this file.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=93)** It will create an MCP client instance that will connect to the MCP server using the STDIO protocol.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=102)** When the client initiates the connection, it will also start the MCP server and then communicate with it.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=110)** It will finally disconnect and shut down the MCP server.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=114)** Let's now proceed to build out this example.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (10), pdf (2), llm (1), stdio (1)
> **Code Keywords:** let (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Build the code-of-conduct MCP server
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=0)** - [Instructor] In this video, we will build the code of conduct MCP server.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=5)** Code for all examples in this course are available in the GitHub link provided with the course.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=13)** I will use code spaces to run the code.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=16)** For this, we can start code spaces on the main branch.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=21)** You can click code and then say create code space on main.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=27)** This will start a new environment and install all the dependency packages.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=33)** This will take a few minutes to execute.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=37)** The setup is now complete, code for this chapter is available in the folder chapter two.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=49)** The code of conduct server is available in the code of conduct server dot py files.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=61)** The PDF file to be used is also in the same directory.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=74)** Let's now explore this code file.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=80)** We will be using FastMCP SDK to build the MCP server.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=86)** We need to first load the dot ENV environment, since it is used by the underlying SDK, we then create an instance of FastMCP.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=98)** We specify a name for the MCP server, the HR underscore CCO underscore MCP variable is important, and it'll be used in the decorators later.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=111)** Then we proceed to set up a MCP resource.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=114)** This process is similar for each resource, irrespective of the number of resources set up in a single server, we first create a URA for the PDF file, specifying the full path for the file.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=130)** Then we create a decorator for the MCP resource.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=135)** This is done using the FastMCP instance we created earlier.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=141)** We specify the URA of the file to load.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=145)** Then we provide a name, description, and mine type for the resource.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=149)** Information in the decorator will be provided to clients to understand the resource and the type of data it provides.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=157)** So it's good practice to be elaborate in the description.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=162)** The mime type identifies the type of content returned.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=166)** Beyond text, it can be a URA, audio, or streaming video.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=176)** Next, we define a function that will actually return the resource.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=180)** This corresponds to the decorator above.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=184)** The implementation of this function is custom and specific to the resource and use case.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=190)** A developer is free to implement any logic they want to, to provide the right information back.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=197)** This function can in fact read from a database or another web service if needed.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=203)** This function can actually take inputs if needed from the client and adapt the output accordingly.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=210)** In this example, there are no inputs.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=213)** The function returns a string, which in this case is the contents of the PDF file.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=220)** Inside the function, we read the contents of the PDF file and create a text string with its contents.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=226)** We will finally return that text.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=229)** The MCP server itself need to be run when this file is executed.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=234)** For this, we call the run method in HR COC MCP, we specify transport as STD io.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=243)** The client will actually run this file, fetch the resource, and then shut down the running instance.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (8), pdf (4), ura (3), sdk (2), env (1)
> **Code Keywords:** function (6), this, (2), let (1), case. (1)
> **Prerequisites:** set up (2), install (1), setup (1)
> **Tools:** github (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Build the code-of-conduct MCP client
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=0)** - [Instructor] Let's now build the code of conduct MCP Assistant application with the MCP client.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=7)** This code is available in the file, code_of_conduct_client.py, under the chapter2 directory.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=15)** Here, we first load the .env environment as the client SDK is needed.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=20)** We will be using langchain_mcp_adapters for building the client.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=30)** First, we configure the MCP server connection for STD IO transport.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=36)** For this, we use the STD IO server parameters method.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=42)** The command parameter indicates the OS command that needs to be run to execute the MCP server.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=49)** The args parameter contains the list of arguments that will be passed to the OS command.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=56)** This contains the file path for the MCP server.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=61)** If additional parameters are needed, they should also be provided in the arguments.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=70)** Next, we set up the Azure Open AI model for LLM in this example.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=76)** The endpoint, deployment, subscription key, and api_versions are configured in the .env file and will be reused across all examples in this course.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=88)** Please replace them with configuration for your own account.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=94)** We then create the Azure chat OpenAI instance using this configuration.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=104)** To get the list of resources, we create an asynchronous function called fetch_resource_content.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=111)** This is boilerplate code that can be used to get resources for any MCP server.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=118)** We now proceed to create the MCP client.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=125)** We start by first creating the STD IO client with the server parameters configured before.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=135)** Then, we create a client session with the server.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=139)** We then await for session initialization.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=143)** These are boilerplate steps needed to connect to the MCP server.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=148)** During initialization, the client will attempt to start the MCP server with the configuration provided as we are using STD IO transport.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=159)** Once successfully started, it will complete the initialization.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=167)** We can get the list of resources provided by an MCP server using the load MCP resources method.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=176)** We can then print the metadata for all the resources.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=180)** This will show all the information we configured when creating the server.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=189)** The data attribute for each resource contains the actual content for the resource.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=194)** This data can be of any type, including images and audio.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=199)** This is then returned back to the calling code for the first resource found.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=207)** Now, let's create the app.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=211)** We begin by retrieving the resource content from the server.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=215)** Resources in MCP can also take parameters from the client if needed, and adapt their behavior accordingly.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=224)** Next, we create a user query, simulating user input.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=228)** We ask the question, what are the privacy policies of the company?
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=233)** Then, we create a prompt that contains the user query and the retrieved content.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=238)** We ask the LLM to answer the query using the content retrieved.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=244)** Finally, we call the model and print the output.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=247)** Let's now proceed to run this app and see MCP in action in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (13), std (4), llm (2), sdk (1)
> **Code Keywords:** let (3), this, (1), function (1), await (1), type, (1)
> **Prerequisites:** initialization (3), configure (1), set up (1)
> **Code Identifiers:** code_of_conduct_client (1), langchain_mcp_adapters (1), api_versions (1), fetch_resource_content (1)
> **Exercise Files:** boilerplate (2)
> **File Paths:** code_of_conduct_client.py (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Execute the code-of-conduct app with MCP
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=0)** - [Instructor] Let's now run the code of conduct MCP client and review the results.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=5)** To run this client, we go to the Run function and select Run Python File in Dedicated Terminal.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=18)** Here we first see the MCP server being started during the initialization process.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=26)** The metadata for the resources loaded, is printed.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=30)** It also shows the URI for the resources.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=36)** The content that is retrieved from the resource is also printed.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=41)** Then the user query and the final responses are also printed.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=46)** This shows the MCP client and MCP server in action.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=51)** We will build out two more MCP applications to demonstrate other capabilities of MCP in the upcoming chapters.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (6), uri (1)
> **Code Keywords:** let (1), function (1)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 4. 3. HR Policy Agent with MCP

#### HR policy agent design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=0)** - [Instructor] We will be building a HR policy AI agent in this chapter.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=6)** This agent will use MCP for accessing tools and prompts.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=11)** In chapter six, we will use this agent as part of an agent-to-agent network.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=19)** Let's first discuss the features of the HR policy agent.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=24)** The HR policy agent is used by the human resources department in an enterprise to help with their employee queries.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=34)** The agent answers questions about employee policies, like time off, remote work, and other benefits.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=43)** The policies are themselves available in a PDF file.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=48)** These policies are loaded into an in-memory vector database with their equivalent embedding representations.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=57)** The MCP server provides retrieval from the vector database for a user query.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=63)** This is provided as a tool in MCP.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=67)** This is an example of how retrieval in a retrieval-augmented generation, or RAG, system can be done using an MCP server.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=78)** The prompt for the LLM is also served by the MCP server.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=84)** The client is an agent that uses this MCP tool to answer questions about policies.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=93)** What does the design of this agent look like?
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=97)** We have the HR_Policy_Document.pdf file that contains policy information.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=104)** A HR policy MCP server provides access to the contents in this file.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=111)** This server on startup will first load the PDF document into an in-memory vector database.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=119)** Retrieval from this database is exposed as a tool in the MCP server.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=126)** The server also exposes the prompt template that can be used to form the prompt for the agent.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=134)** The HR policy agent is the application that uses the MCP server.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=140)** It has a bundled MCP client for this purpose.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=144)** The MCP client will communicate with the HR policy MCP server using the STDIO transport.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=153)** Here, it will first run an instance of the server and then use it to retrieve data.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=160)** Let's now proceed to implement this design.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (12), pdf (2), rag (1), llm (1), stdio (1)
> **Code Keywords:** let (2)
> **Definitions:** is an  (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Build the HR policy MCP server
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=0)** - [Instructor] In this video, we will build the code for the MCP HR policy server.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=6)** The code for this chapter is available in the folder, chapter three.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=11)** The server code is available in the file HR policy server dot PY.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=17)** The policies document is also available in the same folder.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=22)** Let's now review the code.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=25)** We begin by setting up the MCP server for fast MCP.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=30)** Then we proceed to set up the vector store using in-memory vector store in Lang chain.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=36)** We first load the PDF file using PYPDF loader.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=40)** We will use all mini MLL6V2 embedding model to embed the documents.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=50)** We will use the Lang chain helper function from documents to create the vector database, providing the policies document and the embedding model as parameters.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=62)** This code runs only once when the MCP server is started up.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=70)** Next we set up the MCP tool to query the vector database.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=75)** We use the tool decorator for the function that provides the retriever functionality.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=82)** Do note that the MCP server name is used as a part of the decorator.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=88)** The function query policies takes the query as input.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=92)** It does a similarity search on the vector database and returns the top three chunks.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=99)** The results are then returned back to the client.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=105)** We will then set up the prompt for the agent.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=108)** Here we use the prompt decorator.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=111)** This function takes as input the query from the user, the prompt template as a placeholder for the query.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=119)** The get LLM prompt returns the final prompt after replacing the placeholder with the actual query.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=129)** We also have some test code that can be run to execute the server standalone and retrieve the results.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=136)** Finally, we run the MCP server using transport as STDIO.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=142)** This server is now ready with the retriever tool and prompt.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (7), pdf (1), pypdf (1), mll6v2 (1), llm (1)
> **Code Keywords:** function (4), let (1), finally, (1)
> **Prerequisites:** set up (3)
> **Exercise Files:** template (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Build the HR policy agent with MCP client
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=0)** - [Instructor] In this video, we will build the HR Policy Agent that uses the MCP server we created in the previous video.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=9)** Code for this agent is in the file hr_policy_agent.py under chapter3.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=16)** This is an AI agent that will be created using LangGraph's prebuilt agent.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=22)** The prebuilt agent can be replaced by a LangGraph Graph 2, if custom logic is needed.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=32)** We begin by setting up the AzureChatOpenAI model with the configuration setup in the environment.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=39)** Please use your own settings when running the code.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=46)** Next, we define an asynchronous function for executing the agent.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=51)** It takes the query or goal to the agent as input and returns a response.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=57)** We will be using the MCP server in Stdio transport mode.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=62)** For this, we first use the correct path for the MCP server Python file, then we set up the Stdio parameters.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=71)** The OS command to be used is Python, and the arguments to this command is the path to the Python file.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=82)** Then, we proceed to create a client session with the MCP server and initialize it.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=89)** During this process, the hr_policy_server.py file is started up.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=95)** We now fetch the list of all tools supported by this MCP server.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=101)** We also get the prompt from the same server by specifying the function name and passing the query as parameter.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=109)** We print the tool name and the prompt that was retrieved.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=117)** Now we proceed to create a React agent.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=120)** We pass the LLM model for reasoning and also the list of tools.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=125)** Then we call the ainvoke method to request the agent to answer the prompt.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=132)** When this method is called, the reasoning LLM will first use the list of tools available to decide on how to proceed with answering the query.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=141)** It'll pick appropriate tools from the list, invoke these tools from the policy server using MCP and fetch the results.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=150)** It'll pick the appropriate tools from the list, then invoke these tools from the policy server using MCP and fetch the results.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=160)** When all data is available, the agent will proceed to generate the final answer.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=166)** The results are then returned back to the calling code In the main loop, we simply call the run_hr_policy_agent using asyncio.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=176)** We pass a query "What is the policy for remote work?"
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=181)** This simulates how user input is passed to the agent.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=185)** In real-world applications, the query is usually received from the user or client application.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=192)** In the next video, we will execute this agent.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (7), llm (2)
> **Code Keywords:** function (2), pass (2), this, (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** hr_policy_agent (1), hr_policy_server (1), run_hr_policy_agent (1)
> **File Paths:** hr_policy_agent.py (1), hr_policy_server.py (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is an  (1), is called (1)
> **Prerequisites:** setup (1), set up (1)

#### Execute the HR policy agent with MCP
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=0)** - [Speaker] Let's now run the HR policy agent and observe the results.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=7)** The HR MCP server path is correctly built by the agent.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=12)** It then initializes the MCP connection after starting up the MCP server.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=17)** During this process, the embedding model is also downloaded.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=21)** Then the tools and the prompt are loaded and printed.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=25)** The prompt is loaded as a human message that can be readily consumed by the React agent.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=31)** Then the agent is invoked to answer the query.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=36)** The agent then sends the query to the MCP HR policy server.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=41)** The MCP server uses vector retrieval to get the top three answers and returns back to the agent.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=48)** The agent then generates the final output.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=51)** This code shows a template for agents that can be built to use MCP servers.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (6)
> **Code Keywords:** let (1)
> **Exercise Files:** template (1)
> **Speakers:** - [speaker] (1)


### 5. 4. HR Timeoff Agent with MCP

#### HR timeoff agent design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=0)** - [Instructor] In this chapter, we will build another MCP-based agent called HR time off agent.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=7)** This agent will exercise additional capabilities with MCP and will be integrated into a multi-agent system in chapter six.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=17)** First, let's discuss the functionality provided by the time off agent.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=22)** Enterprises need to manage time off requests from employees, like sick days, vacation days, and other special time offs.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=31)** A HR time off agent helps employees manage their time offs.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=36)** It provides them the ability to file new time off requests, as well as query for their time off balances.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=44)** Time off data is managed in a SQLite database for this exercise.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=49)** For simplicity's sake, we will only manage one type of time off.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=54)** We will use an MCP server to provide, create, and retrieve operations on time off data.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=60)** In addition, the prompt for the agent will also be served by the MCP server.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=66)** The client, HR time off agent, will use the tools provided by this MCP server to file new time off requests and provide time off balances.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=78)** What does the design of this time off agent look like?
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=82)** We have time off data stored in a SQLite database.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=86)** In real-world situations, this would be in a scaled and managed database.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=92)** A HR time off server provides MCP services for the system.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=98)** It has two tools, namely, get time off balance and request time off.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=103)** These tools help to get the current time off balance for an employee in the SQLite database, and also update time off balance based on new requests, respectively.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=115)** The system prompt template is also served by this MCP server.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=121)** The HR time off agent is an application that provides time off management services to the users.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=128)** In addition to its agentic capabilities, it also has an MCP client.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=133)** The MCP client communicates with the HR time off MCP server for time off management.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=141)** Note that this will use the HTTP/SSE for communication.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=146)** Unlike the previous examples with SGBAO, where the server is started by the client, here, the server should be up and running for the client to communicate using HTTP.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=159)** Let's now proceed to implement this example in the rest of the chapter.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (10), http (2), sse (1), sgbao (1)
> **Code Keywords:** let (2)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Build the HR timeoff MCP server
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=0)** - [Instructor] In this video, we will build the MCP server as part of the HR time off system whose design we discussed in the previous video.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=10)** Code for this chapter is in the chapter four folder.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=15)** We will use SQLite to store time off information.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=20)** For managing operations on the SQLite database, we have a class called TimeOffDatastore.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=28)** This class is available in the file; timeoff_datastore.py.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=34)** Let's first explore this file.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=40)** This class has a init method that creates the SQLite database.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=45)** The database is only created in memory and will not be persistent.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=50)** So the tables need to be created every time the server is started.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=55)** In real world scenarios, a persistent database is used, so this init method is not needed.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=66)** We begin by connecting to the SQLite three database.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=70)** This implicitly creates the database itself.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=74)** Then we have the create tables method.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=77)** This creates two tables.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=80)** The employee table has one record per employee.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=84)** It also tracks the total time of allowed days and the total consumed so far.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=90)** The second table is the timeoff history table.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=94)** This is used to log each request for employees for time offs.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=99)** This method is executed as part of init.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=106)** Next, there is the seed data method.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=109)** This seeds some initial data into the database.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=114)** It creates three employee records in the employee table with name, allowed days, and consumed days data.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=122)** This is also executed as part of init.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=130)** The class then has get time off balance method.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=133)** Given an employee name, it fetches and returns the current time off balance for an employee.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=144)** The add time off request method is used to create a new time off request for an employee based on the employee name.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=153)** First, it checks if the employee has enough time off balance to file a new time off request.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=160)** Then it inserts a new record in the time off history table.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=167)** Finally, it updates the balance in the employee table for available time offs.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=176)** There is some example usage code that can be used to test this class standalone by simply executing the Python file.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=192)** Next, we move on to build the MCP server in the timeoff_db server.py file.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=200)** We begin by creating a FastMCP instance for the MCP server.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=209)** We initialize the time off datastore object.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=212)** This is executed once when this Python file is run and the MCP server is started.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=218)** It initializes the database behind the scenes.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=223)** We have two tools for MCP here.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=226)** The get time off balance tool calls the equivalent get time off balance method on the time off db store and returns the value.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=238)** The request time off function calls the equivalent add request time off method on the time off db store and returns the results.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=249)** Finally, we also have the get llm prompt function.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=253)** To get the prompt for the LLM, it takes us input, the user who's using the agent and the query that the user provides for actions.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=269)** We then get to run the MCP server.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=272)** Here do note that we are using streamable http as the transport layer to enable HTTP.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=281)** The host and port correspond to how we want the server configured for HTTP access.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=288)** We can access this server using http/localhost:8000 as the URL.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=297)** Now let's proceed to build the client in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (6), http (2), llm (1), url (1)
> **Code Keywords:** let (2), finally, (2), function (2)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **File Paths:** timeoff_datastore.py (1), server.py (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** timeoff_datastore (1), timeoff_db (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)

#### Build the HR Timeoff Agent with MCP Client
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=0)** - [Instructor] Now, let's proceed to build the time off agent.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=4)** The code for this agent is in the timeoff_agent.py file in the chapter4 folder.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=11)** Most of this code is similar to the HR policy agent that we built in the previous chapter.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=18)** We begin by first setting up the Azure Chat OpenAI model for use with the agent.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=25)** We use the environment variables to identify the required parameters.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=31)** Please use your own instance of an LLM when trying out this exercise.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=37)** Next, we proceed to define the time off agent asynchronous function.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=42)** This takes a username and a user query as inputs.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=47)** The MCP server in this case is using a streamable HTTP interface.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=54)** Unlike the previous example where we used stdio, we need to run the MCP server first as a service exposing a HTTP URL and port.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=67)** We identify that URL for the MCP server in the client.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=74)** Now, we proceed to connect to the server.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=77)** We use streamable HTTP client interface for this purpose and initialize the connection.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=84)** The server is already running, so this merely opens a live connection to that server.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=92)** Then we get the list of tools.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=97)** We then get a prompt that is updated with the user and the query.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=102)** We print those.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=104)** Once a connection is established, these steps are similar to our previous example.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=114)** We then create a React agent with the tools.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=117)** We use the prompt to initiate the agent.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=120)** The agent will then use the tools available to create the response.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=125)** The response is then returned back from the function.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=129)** In the main loop, we send a sequence of three queries to the agent.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=134)** First, we request the time off balance for Alice.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=138)** Then we file a new time off request for Alice for five days.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=144)** Then we again query for the time off balance to see if the balance has been updated correctly.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=152)** This should be updated based on our previous time off request.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=156)** These three queries simulate how a real user behavior would be when this is deployed in production.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=163)** Let's execute this system in the next video and see the results.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (3), http (3), url (2), llm (1)
> **Code Keywords:** let (2), function (2), interface (2)
> **Cross-References:** previous chapter (1), in the next (1)
> **Analogies:** similar to (2)
> **File Paths:** timeoff_agent.py (1)
> **Code Identifiers:** timeoff_agent (1)
> **Speakers:** - [instructor] (1)

#### Execute the HR timeoff agent with MCP
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=0)** - [Instructor] Let's now proceed to execute the HR timeoff agent system.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=5)** First, we need to start the MCP server.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=9)** We can do this by running the timeoff_db_server.py file.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=18)** We see that the service is started and listening on port 8000.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=27)** Next, we need to run the MCP client.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=34)** We do so by running the timeoff_agent.py file.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=47)** On executing, we see that it is executing the first query, namely, Get the timeoff balance for Alice.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=56)** It gets the list of tools and the prompt.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=63)** It is then able to query the database and retrieve the current balance.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=68)** The value is 15 days.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=70)** This is the data we used in the seed process for the database.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=79)** We then create a timeoff request for five days.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=83)** The process is then repeated.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=86)** Now the request timeoff tool is created to create a timeoff request.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=98)** It was able to file the request correctly for five days.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=106)** When we issue a query for the timeoff balance again, we get only 10 days.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=111)** This is because the balance is reduced by five based on the previous request.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=117)** One thing you may notice is that we are creating the React agent for each request, so the list of tools and prompts are fetched again and again.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=127)** We could also create the React agent once and reuse it for new requests.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=134)** Let's also inspect the logs of the timeoff DB server.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=139)** We see multiple POST and GET requests coming in as part of the MCP protocol handshake.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=146)** We see the request for prompt and the actual tool execution logs.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=152)** This example demonstrates how MCP would work in an AI agent scenario using HTTP.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (4), post (1), http (1)
> **File Paths:** timeoff_db_server.py (1), timeoff_agent.py (1)
> **Code Keywords:** let (2)
> **Code Identifiers:** timeoff_db_server (1), timeoff_agent (1)
> **API Endpoints:** post  (1), get  (1)
> **Ports:** port 8000 (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Introduction to Agent2Agent Protocol

#### What is A2A?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=0)** - [Instructor] In the past few chapters, we learned about MCP.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=4)** In this chapter, we will discuss the concepts of agent to agent protocol, or A2A for short.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=11)** In the next chapter, we will integrate the agents we built earlier with A2A.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=17)** To understand the need for A2A, we need to discuss the challenges while building multi-agent systems.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=23)** In a multi-agent system, multiple AA agents can collaborate with each other to execute business functions.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=31)** Each AA agent can perform a specific function.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=36)** An AA agent can leverage another agent to execute a business function.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=41)** For example, a technical support agent can utilize a product knowledge agent to understand more about a product's features.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=51)** As multi-agent systems evolve, we end up with agents that are built with different frameworks like Lang Chain and LAMA Index.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=60)** They may also be deployed inside a single cluster or distributed across cloud services like AWS and GCP.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=69)** They may be deployed by different organizations, and communication would require crossing organization boundaries.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=78)** So when developers need to integrate two AA agents, they need to understand the custom interfaces and capabilities that each agent provides, and then build custom code to integrate them.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=92)** As the number of agents in a multi-agent system grows, the integration complexity multiplies.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=99)** There is also the need to discover agents ad hoc based on specific requirements and then dynamically connect to them.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=108)** This requires the available agents to be discovered using a search engine like capability.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=114)** The agent to agent, or A2A protocol, was introduced to specifically handle these challenges.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=121)** It is a common open standard for agent to agent communications.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=127)** Each participating agent in a multi-agent system can implement this standard once, and then it can communicate with any other agent implementing the same standard.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=139)** A2A is a protocol similar to communication protocols like TCP, IP or rest.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=146)** It provides a common transport layer as well as a message structure.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=151)** It is modality agnostic.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=154)** The content of the messages can be text, audio, video, or images.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=160)** A2A also supports agent discovery.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=163)** Agents can be published through a directory and other agents can discover them based on their capabilities supported.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=171)** A2A also supports task-based workflows.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=175)** So a given workflow can be created using multiple agents in an A2A enabled multi-agent system.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=183)** It has support for access, control, security, and privacy.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=188)** This allows A2A to be used for communications with agents across organizational and trust boundaries.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (9), mcp (1), lama (1), aws (1), gcp (1)
> **Code Keywords:** function (2), require (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Architecture of A2A
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=0)** - [Narrator] In this video, we will discuss the typical architecture of A2A, and how agents use it to interact with each other.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=10)** There are three main actors in an A2A setup.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=15)** First comes the A2A user.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=17)** The A2A user is a human end user who provides goals or tasks to the multi-agent system.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=25)** The user could also be a client program that sends goals and receives responses as part of a workflow.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=33)** Then comes the A2A client agent.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=36)** The client agent has its own reasoning process with an LLM.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=41)** It can decide to utilize the services of another agent to fulfill certain tasks.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=48)** It initiates communication with the other agent and receives results or responses.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=55)** Finally, there is the A2A server agent.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=58)** This is the agent that receives requests from a client agent, then executes them and returns responses.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=66)** The A2A client and the server are typical client servers in software architectures.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=73)** The same agent can be both a client for some actions, and a server for others.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=81)** This is how a typical A2A setup looks like.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=85)** We have the A2A client agent and the A2A server agent.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=90)** The server agent runs an A2A server inside it.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=94)** This server is typically listening on a port.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=98)** The A2A client resides inside the client agent.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=102)** This connects to the A2A server on the server agent using the A2A protocol.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=108)** It initiates connection, gets a listing of agents, and executes tasks.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=115)** Now, the A2A client agent can independently use a few MCP servers for its tools, prompts and resources.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=124)** The A2A server agent can also independently use a few MCP servers for its own use.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=132)** They can also share MCP servers if needed.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=136)** It is very important to understand how MCP and A2A are different.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=141)** MCP provides resources and tools.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=144)** A2A provides integrations with other independent agents with their own reasoning models.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=151)** Can an MCP server run an agent underneath it?
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=156)** It can, but what we are concerned about here is the interface between the entities, not their internal implementation.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=166)** The user or the client application talks to the A2A agent for initiating requests and receiving responses.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=175)** What does a multi-agent system with A2A look like?
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=181)** Let's say we have an agent, agent one, having an A2A client that talks to agent two using MCP.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=190)** Agent two can in turn talk to agent three.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=193)** So agent two has both a client and a server implementation, but for connecting to different agents.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=202)** We can also have agent four, which acts as a server to agent two, but uses agent three.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=209)** Any kind of permutations and combinations are possible here.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=213)** Agents have an instance of an A2A client for each server they integrate with.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=220)** On the other hand, a single instance of an A2A server can handle many clients.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (23), mcp (7), llm (1)
> **Code Keywords:** finally, (1), interface (1), let (1)
> **Prerequisites:** setup (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### A2A communication elements
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=0)** - [Instructor] What kinds of elements exist in the A2A protocol?
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=4)** And, what are their purposes?
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=6)** Let's explore them in this video.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=9)** We begin with the agent card, which is a fundamental elemental for A2A.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=16)** An agent card is a JSON-based metadata document.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=20)** It is used to describe the configurations and capabilities of a given agent.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=26)** It is created by the developer of the agent, with documentation that helps others understand about this agent.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=35)** Key information present in the agent card includes the identity of the agent, like name and description, endpoint where the agent is being served, version of the agent, capabilities supported by the agent like streaming, skills of the agent like policy and time of, and modalities like text and video.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=59)** The agent card can be hosted by the A2A server itself at a familiar endpoint.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=66)** Alternatively, an agent registry or data tree can be used to host all agent cards centrally for discovery purposes.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=76)** A2A clients can use the agent card to understand the capabilities of the agent, and then use them to decide if and how to integrate with that agent.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=88)** The next element to discuss is a task.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=92)** A task is the unit of work that an A2A client requests the server to complete.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=99)** This an be an action, or a code or a question to answer.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=105)** Examples of tasks include answer a question, create a file or approve a request.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=112)** Each task is identified by a unique task ID, which is an integral part of all communications in A2A.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=122)** A task can be synchronous or asynchronous.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=126)** The status of a task is managed by the A2A server.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=130)** Examples of status codes include submitted, working, completed, et. cetera.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=136)** Then comes messages in A2A.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=140)** A message is a single unit of communication between an A2A client, and an A2A server.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=148)** A message can include any kind of data.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=151)** This includes instructions, context, status or handshake.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=156)** Each message is identified by a message ID.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=161)** A given task may require multiple turns between the client and the server.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=167)** So, there can be multiple messages required between the client and the server to complete a task.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=175)** Each message can have many parts that represent the type of data.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=180)** Examples include TextPart, FilePart and DataPart.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=185)** Finally, we have the artifact element.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=188)** The output generated by the A2A server is called an artifact.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=195)** The output could be answers, documents, images and audio files that can be sent back from the server to the client using messages.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=206)** Streaming can be used to incrementally send large artifacts.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=211)** This is useful in real time streaming of text, audio or video.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (11), json (1)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **Code Keywords:** let (1), require (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### A2A protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=0)** - [Instructor] What protocol options exist for the A2A client and the A2A server to complete a task?
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=9)** Let's discuss the available options in this video.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=13)** The first option is request response.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=16)** Let's discuss a sequence diagram that explains how request response works.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=23)** The A2A client initiates the task by sending a request message with the goal that needs to be achieved.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=31)** The A2A server responds back with a working status.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=37)** The A2A client will then periodically send requests for updates to the server.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=43)** The server will respond back with the current status.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=47)** This will continue until the A2A server is working on the task requested by the client.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=54)** When the task is completed, the A2A server responds back with the final artifacts.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=61)** Do note that the A2A server only responds to request from the A2A client.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=67)** It does not trigger a message of its own.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=71)** Also, it's possible that the server responds with the artifacts in the first round trip itself, so the status requests and updates are optional and their use depends upon the time it takes to complete the task.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=89)** The next option is streaming with server sent events.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=93)** Here again, the A2A client sends a request with the goal.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=98)** The server now starts sending status or starts streaming the artifacts.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=104)** This is triggered by the server.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=106)** The server continues to send status or streamed artifacts without any additional request from the client.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=114)** When the complete artifact is sent to the client, the server sends a completed event to inform the client that the task is now complete.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=125)** The stream and status are initiated by the A2A server and continues until the task is complete.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=133)** The number of such messages depends upon the type of task and the size of the artifact.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=139)** The last type supported in A2A is push notifications.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=145)** This is used in asynchronous communications only Unlike the previous two options, the A2A client does not keep the connection alive with the server.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=157)** Here, the A2A client sends the request with the goal.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=162)** It also provides a callback URL for the A2A server to send the responses.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=168)** Then it terminates the connection.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=172)** When the A2A server has updates to send, it initiates a status update to the callback URL.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=179)** Again, the connection is terminated once the update is sent.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=184)** This process continues as long as the A2A server is working on the task.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=190)** When the task is completed, the A2A server sends the final artifacts to the callback URL.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=198)** This method is used in long running or batch tasks when the client does not have to wait for completion.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (18), url (3)
> **Code Keywords:** let (2), continue (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### A2A discovery strategies
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=0)** - [Lecturer] In a multi-agent network, how do agents discover information about each other?
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=7)** In a previous video, we discussed the Agent Card.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=11)** This card contains all details about a given agent.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=16)** To know more about a given agent, another agent can retrieve the Agent Card of that agent and understand the features it supports and the interfaces that can be used to communicate with it.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=30)** But before we can discover the features of an agent, we need to sometimes discover the agent itself.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=37)** In a world of agents, how do we know the list of agents that exist, and then search and pick an agent that suits our requirements?
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=48)** The first way to discover agents is by deploying agents in a well-known URI.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=54)** Here, the agent is built as an A2A server agent, and is deployed with a known URI.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=61)** The URI is well-known, similar to [google.com](https://google.com), or it is an internal AA agent whose URI is published inside the organization.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=71)** The agent will host its own Agent Card.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=75)** The path to this Agent Card is a standard path.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=80)** An example of such a path is given here.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=83)** Clients can use the published URI and the Agent Card path to retrieve the Agent Card and then discover details about the agent.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=93)** This mode is suited when the client agent already knows which server agent to use during design time.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=101)** Dynamic discovery and use of agents during runtime is not possible.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=107)** The second option is by using curated registries.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=112)** This is a central registry where all the A2A agents are published.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=117)** Their Agent Cards are registered here and are available for discovery.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=122)** Central registries also provide search functions to filter agents based on their desired capabilities and choose the right one to use.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=132)** The clients in this case should only know about the single registry API.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=138)** Then, clients can search the registry for the right agents and retrieve their Agent Card.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=145)** The Agent Card contains the actual URI for the agent.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=150)** Registries enable dynamic discovery of agents and integrate with them during runtime based on the specific use case or workflow.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=160)** Registries help govern available A2A agents.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=164)** For example, an organization can host a central registry for all agents that were built in an organization.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=173)** This allows for enforcing standards, security, and access control.

> [!info]- Semantic Content
>
> **Env Vars:** uri (6), a2a (3), api (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Analogies:** similar to (1), for example (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [lecturer] (1)

#### A2A client and server communication flow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=0)** - [Instructor] How do an A2A Client and an A2A Server communicate with each other to execute tasks and workflows?
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=8)** We have earlier discussed the protocols and communication elements used.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=13)** Now, let's discuss how an end-to-end workflow looks like, utilizing the protocols and the communication elements.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=22)** We first have the A2A server registry.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=26)** This registry can be a separate registry with its own unique URI or it can be bundled inside the A2A server itself.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=35)** It contains the Agent Card for the agent.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=39)** The Agent Card has the agent capabilities and the Agent URL.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=44)** An A2A client wants to communicate with this specific Server Agent.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=49)** As its configuration, it already knows about the URL for the registry.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=55)** This is the only information it needs to know if it uses an external registry.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=61)** If the Agent Card is hosted by the A2A server itself, then it needs to know the URL for each of the A2A servers it needs to communicate with.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=74)** The A2A client uses the URL to the registry to fetch the Agent Card.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=80)** It can also do a search across all agents in the A2A server to identify the right agent and then pull its Agent Card.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=90)** From the Agent Card, the client learns about the URL where the A2A server for the target agent runs.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=98)** An agent in A2A is hosted through an A2A server.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=102)** This supports the standard A2A interface.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=106)** This interface can additionally support the Agent Card also if a registry is not used.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=114)** Using the Server Agent URL, the client agent establishes a connection with the A2A server interface.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=122)** It does the message exchanges as per the protocol and sends the goal or the task to be executed.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=130)** This can either follow the request response or the streaming with SSE protocol.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=136)** The A2A Server interface then invokes an Agent Executor.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=142)** The Agent Executor serves as the link between the A2A Server code and the actual AI Agent.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=149)** The Agent Executor can either load up the AI Agent inside the A2A server itself, or it can use any other kind of protocol like REST or GRPC to integrate with the AI Agent.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=165)** The AI Agent is invoked by the Agent Executor with the given goal or task.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=171)** The agent then executes it and returns the results back to the Agent Executor.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=177)** The results are then communicated back to the Client Agent using A2A.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=182)** The Client Agent then proceeds to process the response and execute its business functions.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=189)** Having discussed the A2A protocol, let's now implement a multi-agent system using A2A in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (20), url (6), uri (1), sse (1), rest (1)
> **Code Keywords:** interface (4), let (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Build a Multi-Agent HR App with A2A

#### HR multi-agent assistant design
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=0)** - [Instructor] Having discussed the concepts of the Agent2Agent protocol in the previous chapter, let's implement a multi-agent system enabled by the Agent2Agent protocol in this chapter.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=14)** In this video, we will discuss the requirements and design of the system.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=20)** We will be building an HR employee assistant agent.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=25)** This agent provides a single portal for employees in an organization.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=31)** Employees can use this portal to learn more about policies and perform actions like time-off requests.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=39)** This agent acts as a front-end router.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=43)** It understands the query or task provided by an employee user and then routes the request to the right agent that can execute it.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=52)** It acts like a supervisor agent that utilizes other agents to perform a task.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=59)** For this implementation, this agent integrates with the HR policy agent and the HR time-off agent that we built in the earlier chapters for MCP.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=71)** We will add in A2A-based communications between the router agent and these two agents.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=79)** What does the design of this multi-agent system look like?
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=83)** We already have the HR policy agent that we built in chapter 3 for answering questions about policies.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=91)** This uses an MCP server using the STDIO transport.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=96)** We also have the HR time-off agent that we built in chapter 4 for adding new time-off requests and answering questions about balances.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=107)** This uses an MCP server using HTTP.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=112)** To enable A2A, we first wrap the HR policy agent with an HR policy A2A server.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=119)** This server runs as its own process and loads the HR policy agent into its memory.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=127)** Do note that it is also possible to run the HR policy agent as a separate process and then use HTTP or GRPC between the A2A server and the HR policy agent.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=141)** The A2A server exposes an agent card for the HR policy agent and also handles queries on policies.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=150)** Similarly, we wrap the HR time-off agent with its own HR time-off A2A server.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=157)** This wrapping capability is done with boilerplate code and is similar for all implementations.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=164)** Then we build the HR assistant router agent.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=169)** This agent front-ends other agents.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=173)** Inside this agent, we create a policy A2A client.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=177)** This client integrates with the HR policy A2A server using the A2A protocol.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=184)** It also has the time-off A2A client.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=188)** This integrates with the HR time-off A2A server using A2A protocol.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=194)** Do note that this system has four executing processes that needs to be started up for the system to work.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=201)** These four are the router agent, the HR policy A2A server, the HR time-off A2A server, and the HR time-off MCP server.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=213)** The HR policy MCP server will be automatically started by the HR policy agent when needed.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (14), mcp (5), http (2), stdio (1), grpc (1)
> **Warnings:** note that (2)
> **Code Keywords:** let (1)
> **Cross-References:** previous chapter (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### Implement A2A Server for agents
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=0)** - [Instructor] In this video, we will wrap existing agents, namely the policy agent and the timeoff agent with an a2a server implementation.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=10)** The code is similar for both agents.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=13)** Code for this chapter is available in the folder chapter six.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=19)** Let's first explore the a2a server for HR policy agent.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=24)** This is implemented in the file, a2a.wrapper_hr_policy_agent.py.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=34)** In order to import the HR policy agent from chapter three, we first add chapter three to the import path.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=42)** Then, we import the HR policy agent file.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=50)** Then we implement the agent executor for the policy agent.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=55)** This is the connector between the a2a server and the agent.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=60)** This inherits from the agent executor class.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=64)** This base class provides all the plumbing needed to run an eight to a server.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=70)** We only need to implement what is specific to our agent.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=75)** We first have the innate function where we can add any startup tasks.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=84)** Then we have the execute function that we will override.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=89)** This function takes a request context as input.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=93)** This carries the actual user request.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=96)** We also have an event queue pass here.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=99)** This is where we will push the output from the agent to be sent via a2a to the client.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=106)** We first load the user input from the context and print it.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=111)** Then we make an asynchronous call to the HR policy agents run_hr_policy_agent function with the prompt.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=120)** Now the HR policy agent will execute the request and return the results.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=126)** We have already discussed this code in chapter three.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=130)** The results received is then added to the event queue.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=136)** The cancel method is used when a long running request needs to be canceled by the client.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=143)** We are not providing an implementation for it in this example.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=153)** Now we move on to defining the a2a server.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=157)** We first define a list of skills for the HR Policy Agent, the ID, name, and description are descriptive of the capabilities of this agent.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=168)** We can also provide tax and few short examples for the skill.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=173)** This can be used by the client to understand the capabilities of the agent from the agent card.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=180)** Next, we define the agent card for the agent, the name and description are used to describe the agent.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=188)** The URL is where the actual a2a server for the agent can be accessed.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=194)** In this case, the agent card and the a2a server have the same URL as they run inside the same process.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=202)** The version number can be used to track the specific version of the agent to be used.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=209)** The input and output modes describe the kinds of inputs and outputs this agent can handle.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=216)** Capabilities of the agent indicates whether streaming is supported by the agent.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=222)** The skill parameter assigns the skill object we have already created.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=230)** Now, we move on to some boilerplate code needed for the a2a server.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=235)** We first create a request handler with the agent executor and a default task memory store.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=242)** Next, we create an A2AStarletteApplication with the agent card and the request handler.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=250)** Finally, we get to run the actual server.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=254)** We use the server application, a host, port, and a log level.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=259)** This server will run on port 9001 on the local host.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=265)** Do note this host and port is where the agent card is available.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=270)** The agent card then contains the URL to where the actual agent is available.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=276)** Next, we create a similar a2a server for the timeoff agent.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=283)** This code is available in the file, a2a.wrapper_timeoff_agent.py.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=288)** The code is similar to the policy a2a server.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=295)** We will then import the timeoff agent from chapter four.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=300)** We then define a TimeoffAgentExecutor that invokes the timeoff agent.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=305)** This code is similar to the HR policy agent.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=309)** We then proceed to define the skill, the agent card request handler and the starlette application.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=320)** Finally, we run the server on port 9002.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), finally, (2), let (1), class. (1), override (1)
> **Code Identifiers:** wrapper_hr_policy_agent (1), run_hr_policy_agent (1), wrapper_timeoff_agent (1)
> **Env Vars:** url (3)
> **File Paths:** a2a.wrapper_hr_policy_agent.py (1), a2a.wrapper_timeoff_agent.py (1)
> **Ports:** port 9001 (1), port 9002 (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Exercise Files:** boilerplate (1)

#### Implement a A2A client
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a-a2a-client?u=76281980)

#### Create a multi-agent router agent
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=0)** - [Instructor] In this video, we will build a router agent to route to the Policy_Agent and the Timeoff_Agent.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=8)** First, let's look at the graph for the agent stored in the router_agent.png file in the chapter6 folder.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=16)** When a request comes into the agent, it goes to the router node.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=21)** The router node sends the input query to an LLM and request it to classify the query as either policy, timeoff, or unsupported.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=32)** If the request is classified as policy, the Policy_Agent is called using a2a If the request is classified as timeoff, the Timeoff_Agent is called using a2a, else it returns back an unsupported message.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=49)** Now, let's continue exploring the a2a_client_router_agent.py.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=59)** We use the class RouterHRAgent for creating the router agent.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=68)** Here we receive the system prompt and the user as input.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=72)** We build the graph based on the design of the router agent.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=78)** The call_llm method is used to call the LLM and request a routing destination.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=86)** The policy_agent_node method is used to route the query to the Policy_Agent through the a2a client and the a2a server.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=95)** It calls the execute_a2a_agent method using the URL for the policy agent card, the user, and the prompt.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=104)** This in turn calls the a2a server, which then invokes the policy agent.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=111)** The timeoff_agent_node similarly calls the execute_a2a_agent method, but with the URL for the timeoff_agent card.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=121)** The unsupported_node method returns an unsupported request message.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=129)** The find_route method is used to call the corresponding node inside the agent based on the classification returned by the LLM.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=139)** Inside the main code, we set the user as Alice.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=144)** We also create the system prompt for the router agent to classify the user query.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=150)** The RouterHRAgent is then created with this information.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=156)** We have commanded out code that can be used to print out the agent graph.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=164)** Dor using the router agent, we create a sequence of five input queries or tasks to exercise various aspects of the HRAgent.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=175)** We will then use these to call the router agent and print the responses.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=182)** In the next video, we will run this agent and review the results.

> [!info]- Semantic Content
>
> **Code Identifiers:** router_agent (1), call_llm (1), policy_agent_node (1), timeoff_agent_node (1), timeoff_agent (1)
> **Env Vars:** llm (3), url (2)
> **CLI Commands:** node (3)
> **Code Keywords:** let (2), continue (1)
> **Definitions:** is called (2)
> **File Paths:** a2a_client_router_agent.py (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Execute the multi-agent HR App with A2A
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=0)** - [Instructor] Having created the code for the multi-agent router and the a2a servers, let's now run the multi-agent system and experience it in action.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=11)** To do this, we need to first run the timeoff_db_server.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=15)** Please recollect that the timeoff agent uses this MCP server in HTTP mode on port 8,000.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=24)** We can run this by running the Python file in a dedicated terminal.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=35)** Then we need to run the a2a server for the policy agent.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=40)** We can start it in a similar fashion.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=46)** This starts the server in port 9,001.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=52)** Next, we need to run the a2a server for the timeoff agent.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=60)** This starts the server in port 9,002.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=67)** Finally, we get to run the a2a client router agent file.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=77)** This will create the router agent.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=79)** Then it will go through the list of file tasks or queries.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=83)** It can take some time to complete.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=87)** The first query is, tell me about payroll processing.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=91)** The router chooses the destination as unsupported.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=95)** This is because the router agent only has policies and timeoff functions.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=102)** The next question is, what is the policy for remote work?
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=106)** The destination chosen is POLICY.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=111)** This invokes the policy node in the router.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=114)** The policy node then calls the a2a client.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=117)** The client first retrieves the agent card at port 9,001.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=123)** It then prints the agent URL for the policy.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=127)** Since the agent card is served by the a2a server itself, this URL is same as the agent card.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=134)** Next, it prompts the agent using the user query.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=139)** After some time, we receive the response from the agent.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=144)** This is printed as the agent output.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=148)** Let's now switch to the policy a2a servers logs, and see what happens there for this request from the client.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=160)** We see the first request is for .well-known/agent.json.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=166)** This is the request received for the agent card.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=172)** Next, it creates the agent and prompts the agent with the user query.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=178)** It then proceeds to contact the MCP server, load the tools, prompt, and then invoke the policy agent to answer the question back to the client router agent.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=198)** The next question is, what is my vacation balance?
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=202)** The destination now is chosen as TIMEOFF.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=206)** This then results in invoking the timeoff node in the router agent.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=210)** The timeoff agent calls the a2a client.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=214)** This client then proceeds to get the agent card from port 9,002.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=219)** It proceeds to execute the query on the a2a server, get the response, and returns to the router agent.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=231)** If we look at the logs for the time of a2a server, we see similar log messages as the policy a2a server.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=244)** On the client router agent, the next two requests for filling a timeoff request and querying a balance, again, are also executed with the timeoff a2a server.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=255)** This example illustrates how the a2a protocol is used for multi-agent communications.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=261)** It also shows how MCP can be used along with a2a to build multi-agent systems.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (3), url (2), http (1), policy (1), timeoff (1)
> **Code Keywords:** let (2), this, (1), finally, (1), switch (1), for . (1)
> **Ports:** port 9 (4), port 8 (1)
> **CLI Commands:** node (3), python (1)
> **File Paths:** well-known/agent.json (1)
> **Code Identifiers:** timeoff_db_server (1)
> **Tools:** terminal (1)
> **UI Navigation:** switch to (1)


### 8. Conclusion

#### Recommended next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=3)** By now, you have an understanding of how to use MCP and A2A to build agentic integrations and multi-agent systems.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=13)** If you want to take your learnings even further, here are some recommendations for your learning journey.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=20)** First, learn about how popular agentic frameworks like LongChain, LlamaIndex, AutoGen and CrewAI support MCP and A2A.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=31)** Build an MCP server for one of your own organization's data sources.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=36)** Integrated with a client agent, create a multi-agent system with A2A for your organization's use case.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=46)** AA always intrigues me.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=48)** I bet it intrigues you too.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=51)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (3), a2a (3)
> **Code Keywords:** case. (1), let (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a-6055298/codespaces)

## Skills Covered

- Generative AI
- AI Agents
- Artificial Intelligence (AI)

## Path Context

### In [[Building AI Agents- Advanced Techniques for Developers]]
← [[Model Context Protocol (MCP)- Hands-On with Agentic AI]] | **4 of 4**

## Appears In

- [[Building AI Agents- Advanced Techniques for Developers]]

## Related Courses

_Courses sharing skills:_

- [[Build Ai Agents And Automate Workflows With N8n]] — Generative AI, AI Agents, Artificial Intelligence (AI)
- [[Agentic AI for Developers- Concepts and Application for Enterprises]] — Generative AI, AI Agents, Artificial Intelligence (AI)
- [[Understanding Generative AI in Cloud Computing- Services and Use Cases]] — Generative AI, AI Agents, Artificial Intelligence (AI)
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)