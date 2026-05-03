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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20AI-%20Building%20AI%20Agents%20with%20Model%20Context%20Protocol%20(MCP)%20and%20Agent2Agent%20(A2A).md)

![Hands-On AI: Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)](https://media.licdn.com/dms/image/v2/D4E0DAQEk9eDDyM1BhA/learning-public-crop_675_1200/B4EZh7TqMEGoAY-/0/1754415408708?e=2147483647&amp;v=beta&amp;t=0dIpyFdMLLo4p4eAU1B14BV_ODp9xNq3_9Urb76tFBQ)

# Hands-On AI: Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)

> This course introduces you to the Model Context Protocol (MCP) and Agent2Agent (A2A) communication frameworks essential for designing context-aware, collaborative AI agents. Explore MCP architectures, tools, and implementations, and learn how to build AI applications and agents that leverage rich contextual understanding. Additionally, instructor Kumaran Ponnambalam dives into A2A's structure, wor

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a) | 1h 40m | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Why MCP and A2A?](#why-mcp-and-a2a)
- [**1. Introduction to Model Context Protocol**](#1-introduction-to-model-context-protocol) (6 videos)
  - [What is Model Context Protocol?](#what-is-model-context-protocol)
  - [MCP architecture](#mcp-architecture)
  - [Resources, tools, and prompt templates](#resources-tools-and-prompt-templates)
  - [Transport in MCP](#transport-in-mcp)
  - [Messaging flow in MCP](#messaging-flow-in-mcp)
  - [Prebuilt MCP servers](#prebuilt-mcp-servers)
- [**2. A Simple MCP App**](#2-a-simple-mcp-app) (5 videos)
  - [MCP SDKs](#mcp-sdks)
  - [Simple MCP app design](#simple-mcp-app-design)
  - [Build the code-of-conduct MCP server](#build-the-code-of-conduct-mcp-server)
  - [Build the code-of-conduct MCP client](#build-the-code-of-conduct-mcp-client)
  - [Execute the code-of-conduct app with MCP](#execute-the-code-of-conduct-app-with-mcp)
- [**3. HR Policy Agent with MCP**](#3-hr-policy-agent-with-mcp) (4 videos)
  - [HR policy agent design](#hr-policy-agent-design)
  - [Build the HR policy MCP server](#build-the-hr-policy-mcp-server)
  - [Build the HR policy agent with MCP client](#build-the-hr-policy-agent-with-mcp-client)
  - [Execute the HR policy agent with MCP](#execute-the-hr-policy-agent-with-mcp)
- [**4. HR Timeoff Agent with MCP**](#4-hr-timeoff-agent-with-mcp) (4 videos)
  - [HR timeoff agent design](#hr-timeoff-agent-design)
  - [Build the HR timeoff MCP server](#build-the-hr-timeoff-mcp-server)
  - [Build the HR Timeoff Agent with MCP Client](#build-the-hr-timeoff-agent-with-mcp-client)
  - [Execute the HR timeoff agent with MCP](#execute-the-hr-timeoff-agent-with-mcp)
- [**5. Introduction to Agent2Agent Protocol**](#5-introduction-to-agent2agent-protocol) (6 videos)
  - [What is A2A?](#what-is-a2a)
  - [Architecture of A2A](#architecture-of-a2a)
  - [A2A communication elements](#a2a-communication-elements)
  - [A2A protocols](#a2a-protocols)
  - [A2A discovery strategies](#a2a-discovery-strategies)
  - [A2A client and server communication flow](#a2a-client-and-server-communication-flow)
- [**6. Build a Multi-Agent HR App with A2A**](#6-build-a-multi-agent-hr-app-with-a2a) (5 videos)
  - [HR multi-agent assistant design](#hr-multi-agent-assistant-design)
  - [Implement A2A Server for agents](#implement-a2a-server-for-agents)
  - [Implement a A2A client](#implement-a-a2a-client)
  - [Create a multi-agent router agent](#create-a-multi-agent-router-agent)
  - [Execute the multi-agent HR App with A2A](#execute-the-multi-agent-hr-app-with-a2a)
- [**Conclusion**](#conclusion) (1 videos)
  - [Recommended next steps](#recommended-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why MCP and A2A?](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/why-mcp-a2a?u=76281980&t=0)** - [Narrator] As [[AI Agents]] go mainstream and integrate with other data sources and agents, standard protocols are needed to ensure easy and consistent integrations. In this course, I will explain the concepts of MCP and A2A, and how they can be used to build multi-agent systems. We will implement three examples for MCP and then build a multi-agent [[Human Resources (HR)|human resources]] assistant using A2A. My name is Kumaran Ponnambalam. Let's get started with MCP and A2A for building real world agentic systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Env Vars:** mcp (3), a2a (3)
> **Speakers:** - [narrator] (1)


### 1. Introduction to Model Context Protocol

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Model Context Protocol?](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=0)** - [Instructor] In this chapter, we will discuss the concepts of Model Context Protocol, or MCP for short, and how it will be used to build [[Generative AI]] integrations. We begin by discussing the need for this protocol in this video. Let's briefly review the typical setup of a [[Generative AI|GenAI]] system or application. The system is provided with inputs by a user or a client system, mostly in the form of text, data, or other formats. The system would then proceed to use this input and execute the request. An orchestration engine helps to orchestrate the request across multiple entities to determine a response. It connects to a set of resources to [[Fetch]] data or context. These resources can be structured [[Databases]], files, web services, or [[Vector Databases]], or graph databases. In the case of [[AI Agents]], the orchestration layer also integrates with a set of agent tools to execute actions. To send data to GenAI models, prompt templates are used. These templates can be bundled inside code or made available in external data stores. The orchestration layer also talks to GenAI models for various activities like planning, reflection, and generation.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=94)** The final output is generated based on the orchestrated actions and delivered back to the client. What are some key challenges in building such GenAI systems? Enterprise GenAI systems typically integrate with several types of resources to get data. Each resource type supports its own interface for data retrieval. This could be [[SQL]], [[Representational State Transfer (REST)|REST]], gRPC, or simple file reads. AI agents through their tools need to integrate with external systems like web services, third party services, and [[Cloud Services]] for performing actions like creation, retrieval, and updates on data stored in these systems. Prompt templates also are not standardized, so each developer or team uses their own methods to store and retrieve them. Each such external entity needs custom integration to be built for each application. This significantly increases the integration efforts needed to build a GenAI system. Here is where Model Context Protocol, or MCP, comes in to help. MCP provides a single standard protocol through which a GenAI system can integrate with resources, tools, or prompt templates. For the protocol to work, the provider of each of these external systems
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-model-context-protocol?u=76281980&t=189)** need to support the MCP interface on their side. Once implemented, any client can then access these systems using MCP. A given GenAI system may integrate with multiple such external systems. They can use a single standard protocol to integrate with all such systems. As the integrations grow in complexity, MCP helps in standardizing them and significantly reducing development efforts. Let's explore more of MCP in the next few videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[AI Agents]] (2), [[Generative AI]] (1), [[Fetch]] (1), [[Vector Databases]] (1)
> **Env Vars:** mcp (7), sql (1), rest (1)
> **Code Identifiers:** grpc (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [MCP architecture](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=0)** - [Instructor] What are the key entities that participate in MCP? In this video, we will discuss the key entities in the MCP protocol. We will explore more details of their interactions in the following videos. There are three key entities that participate in the model context protocol. The first one is the MCP Host. The MCP Host is the application that wants to access resources, tools, and prompts using MCP. This is typically the [[Generative AI|gen AI]] application that does orchestration across resources. This application is usually an executable service itself. Next comes the MCP Server. This is the server that exposes resources and tools through the MCP protocol. It typically sits in between the MCP Host and the backend resources and services. It talks using the MCP protocol on one side and the native protocol of the resources and services on the other side. Finally, there is the MCP Client. This is the module or function that resides within the MCP Host. The MCP Host talks to the MCP Server through the MCP Client. The MCP Client, and the MCP Server, are the entities that will communicate using the MCP protocol. Let's discuss this architecture with an example now.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=97)** Let's say we have a Sales AI Assistant application. This assistant is an AI agent that answers questions about [[Microsoft Products|products]] as well as performs order management operations. This is the MCP Host. The assistant uses a knowledge base of products sold by the company. This knowledge base is stored in a [[PostgreSQL|Postgres]] Vector database where the product data is stored in embedded format for [[Semantic Search]]. This information will be used using retrieval augmented generation or RAG by the Sales AI Assistant. A PGVector MCP Server is deployed to front the PGVector database. This server exposes search capabilities on the Vector DB as MCP resources. It talks with the Vector database using a [[SQL]] interface. To access the knowledge base for RAG, the Sales AI Assistant has a PGVector MCP Client. This is typically a library, a package, or a class that runs inside the same executable as the MCP Host. When the Sales AI Assistant needs to search for products, it invokes the PGVector MCP Client. This MCP Client will connect to the PGVector MCP Server using the MCP protocol. The PGVector MCP Server will in turn execute the search on the Vector DB using SQL
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-architecture?u=76281980&t=193)** and return the results back to the MCP Client. In addition, the Sales AI Assistant also uses Salesforce Cloud for managing orders. A Salesforce MCP Server is deployed for accessing the Salesforce Cloud using MCP. It integrates with the Salesforce Cloud using the [[Representational State Transfer (REST)|REST]] protocol. It exposes tools for creating, updating and deleting orders. This server can be either custom-built by the Sales AI Assistant developers, or provided by Salesforce itself for MCP integrations. The Salesforce AI Assistant also has a Salesforce MCP Client, which it uses to perform order management operations. This MCP Client talks to the Salesforce MCP Server using the MCP protocol. As seen here, irrespective of the protocol supported by the source systems like PGVector and Salesforce, the Sales AI Assistant only needs to use one protocol, namely MCP, to talk to multiple sources. Similarly, multiple AI assistants and Gen AI applications can use the same MCP Servers to integrate with their sources. This standardizes communications and reduces redundant integration work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[SQL]] (2), [[PostgreSQL|Postgres]] (1), [[Semantic Search]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** mcp (37), rag (2), sql (2), rest (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Resources, tools, and prompt templates](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=0)** - [Instructor] What kind of content can be served using MCP? It can be resources, tools, and prompt templates. MCP is built as a general purpose interface for any kind of data and these three are the most popular ones used in the [[Generative AI|Gen AI]] world. Let's first discuss resources. Resources are read-only data that is exposed to the Gen AI application. Each resource has a unique URI through which the data can be accessed. The MCP server can both provide the URI as well as the data that is served by it. Resources can be of any kind. They can be files, records from a database, images, audio, video, or search results from a search engine. The important thing to note is that resources can only be read. They cannot be modified. The MCP client and the associated host application decides on how these resources will be used within the application. They can be used for decision making or generating answers to the user questions. The MCP server itself is not aware and does not care about the actual usage. How does a client know what resources are available? Each MCP server also provides a listing interface through which clients can get
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=96)** a list of resources available in that server. MCP servers also support dynamic update notifications. This means that if a resource is updated after it is fetched by the client, the server can notify the client after the change. Next comes tools. Tools are specifically used in the context of [[AI Agents]]. Tools expose executable functionality to the MCP clients. These include create, retrieve, update, and delete operations. There can also be other capabilities like reviewing content, integrating with workflows, and alerting. Do note that the same data can either be served either as a resource or as a tool. A resource is read-only, whereas a tool can be used to change the data also. Tools enable AI agents to integrate with third-party applications using a standard protocol. Third-party applications will support their own MCP servers which the agents can use MCP to integrate with. Each MCP server will also provide a tool listing interface that can be used by the clients to discover tools provided by the server. This listing contains [[Metadata]] about the tool's inputs, functions,
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/resources-tools-prompt-templates?u=76281980&t=188)** and outputs. This can be used by a reasoning model to determine if and when to use these tools. Then comes prompt templates. Prompt templates typically are system prompts that have placeholders for the user query, context, and other information. Having reusable prompt templates for specific functions helps standardize interactions and promote reusability. Prompts served by MCP servers support metadata as well as placeholder variables. These variables can be replaced with actual values during serving. Again, MCP provides a prompt listing capability that allows clients to discover the prompt templates that are available for a given MCP server. MCP also supports dynamic prompts where prompts can be created using serving time based on the user inputs or system conditions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (2), [[Metadata]] (2)
> **Env Vars:** mcp (15), uri (2)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Transport in MCP](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=0)** - [Instructor] Software services need a transport layer to communicate and exchange data. In this video, we will discuss the transport options supported by MCP. Let's begin with the concept of messages. Messages are the unit of communication in MCP. When MCP clients and servers communicate, they do so by exchanging messages. There are a few message types in MCP. A request is a message that is sent from a client to a server in MCP. It usually contains the query for which data needs to be fetched. A response is a message that is sent from the server to the client. A response is returned for each request received by the server, and notification is a message that is initiated by the server to the client. Unlike a response, a notification is self initiated by the server. It is usually used to send alerts to the client if the resource or tool on the server side is updated with new data. All messages are exchanged in [[JSON]]-RPC2.0 format between the client and the server. Both MCP client and server uses prebuilt SDKs for communication. This SDKs take care of formatting messages,
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=97)** as well as executing the transport protocol. Next comes the protocol options available in MCP. There are two such options supported. The first option is STDIO. This is the standard input output protocol that is used for software programs running on the same machine to communicate with each other. Here, the client writes to the input stream for a running process and reads from its output stream. This can only be used when the client and server are running on the same machine or virtual machine instance. For STDIO, the client may actually start the MCP server, exchange messages and terminate the server when closing the connection. The second option is the streamable HTTP option with server site event support for notification. With HTTP, the MCP server can be running in a local machine, remote machine, or any public URL. It provides a standard mechanism to communicate with independently running servers. The server service should already be running for the client to contact it. The client will not attempt to start the server. This transport method provides streaming support so the response can be streamed back to the client in case of long running responses
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/transport-in-mcp?u=76281980&t=192)** like text or video streams. Server notifications can be sent by a callback URL provided by the client using server side events. Let's revisit the MCP architecture example we discussed in an earlier video. For the first MCP client for PGVector, the MCP server can be local and deployed on the same machine as the sales AI assistant. The sales AI assistant will start the PGVector MCP server when needed, and use STDIO for communication. The Salesforce MCP server may be remote and hosted using an HTTP [[Server-Sent Events|SSE]] interface. This can even be running in the Salesforce Cloud. The MCP client connects to this server when needed to exchange messages. Irrespective of the transport used, all messages will be exchanged in JSON-RPC 2.0 format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Server-Sent Events|Sse]] (1)
> **Env Vars:** mcp (15), stdio (3), http (3), json (2), url (2)
> **Definitions:** is a  (3)
> **Versions:** 2.0 (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Messaging flow in MCP](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=0)** - [Instructor] Let's do a deep dive into the messaging flow between the MCP client and the MCP server in this video. This sequence diagram shows the messaging flow between the client and the server. The MCP client first sends an initialization request to the MCP server to initiate a connection. The MCP server sends back an initialization response to confirm its connection. An initialized message is sent from the MCP client, and the connection between the client and the server is established. This connection stays alive until one of them decides to terminate it. The MCP client may send a request for data or action for whether it is a resource, tool, or prompt. The MCP server will respond back with an appropriate response or an error message if an error is encountered. The request and response messaging will continue in a loop for many iterations as the MCP client handles multiple user requests. The connection stays alive during the process. The MCP server may additionally send a few server site notifications too, that are received and managed by the client. When the MCP client wants to terminate the connection, it sends a disconnect message to the MCP server.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/messaging-flow-in-mcp?u=76281980&t=95)** This ends the connection.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (12)
> **Prerequisites:** initialization (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Prebuilt MCP servers](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/prebuilt-mcp-servers?u=76281980&t=0)** - [Instructor] Every enterprise uses several third party [[Microsoft Products|products]] like [[Databases]], ticketing systems, document hubs, and [[SaaS]] services. Does this mean that they need to build an MCP server from scratch for all of them? Fortunately not. There are prebuilt MCP servers available that are ready to be deployed and used. Several data and services providers are building out MCP servers for their offerings, so they can be instantly integrated into [[Generative AI|Gen AI]] workflows. In addition, other third parties are also building open-source MCP servers for popular databases and [[Cloud Services]]. So, there are few options available for any popular data service. When possible, it's recommended to use a prebuilt MCP server. It's recommended to use the server that is provided by the same vendor who makes the data source product. If not, try available open-source MCP servers. This [[GitHub]] Repo has a list of available MCP servers. Links to their content are also provided here. Please take time to explore this list and evaluate if they can be used for your use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Microsoft Products|Products]] (1), [[SaaS]] (1), [[Cloud Services]] (1), [[GitHub]] (1)
> **Env Vars:** mcp (7)
> **Best Practices:** recommended (2)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


### 2. A Simple MCP App

[↑ Back to Table of Contents](#table-of-contents)

#### [MCP SDKs](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/mcp-sdks?u=76281980&t=0)** - [Instructor] When building MCP clients and MCP servers, do we need to write code for implementing the MCP protocol From scratch? MCP SDKs are available, which takes care of that heavy lifting and makes building MCP clients and servers easy. Let's explore some popular MCP SDKs available. If you are building your applications in [[Python (Programming Language)|Python]], it's recommended to use the Python SDK that is based on FastMCP. FastMCP is an easy to use SDK that encapsulates the protocol implementation and provides easy decorators to enable MCP. We will be using FastMCP in this course. [[LangChain]] also provides an MCP adapter package that can be used to build MCP clients. We will use this to build clients in this course. In addition, [[LlamaIndex]] also has an MCP package that allows for easy MCP use. Most Gen AA frameworks provide some form of MCP implementation. It's recommended to use an existing MCP SDK when possible to save the hard work of implementing the protocol. We will be doing the same in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LangChain]] (1), [[LlamaIndex]] (1)
> **Env Vars:** mcp (13), sdk (3)
> **CLI Commands:** python (2)
> **Best Practices:** recommended (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Simple MCP app design](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=0)** - [Instructor] In this chapter, we will build a simple MCP app. We will build an MCP client and server, integrate them, and see MCP in action. We are going to build a code of conduct assistant for this example. This is a [[Human Resources (HR)|human resources]] AI assistant that will answer questions about code of conduct policies. The policies themselves are available in a PDF file called codeofconduct.pdf. This file and the other files for this chapter are available in the Chapter 2 folder for the exercise files. The MCP server will provide access to the PDF file as a resource. Remember, that we could also provide access as a tool if we are building an AI agent. The client will use this resource to answer questions about code of conduct for this enterprise. It will additionally leverage an LLM for generating the final answer. Let's briefly discuss the design for this code of conduct application. The file codeofconduct.pdf is stored in the file system. It is in the same machine that will run the MCP server. We will build an MCP server that will provide access to this file as a resource. The code of conduct assistant is the client that will use this file.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/simple-mcp-app-design?u=76281980&t=93)** It will create an MCP client instance that will connect to the MCP server using the STDIO protocol. When the client initiates the connection, it will also start the MCP server and then communicate with it. It will finally disconnect and shut down the MCP server. Let's now proceed to build out this example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Human Resources (HR)|Human resources]] (1)
> **Env Vars:** mcp (10), pdf (2), llm (1), stdio (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Build the code-of-conduct MCP server](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=0)** - [Instructor] In this video, we will build the code of conduct MCP server. Code for all examples in this course are available in the [[GitHub]] link provided with the course. I will use code spaces to run the code. For this, we can start code spaces on the main branch. You can click code and then say create code space on main. This will start a new environment and install all the dependency packages. This will take a few minutes to execute. The setup is now complete, code for this chapter is available in the folder chapter two. The code of conduct server is available in the code of conduct server dot py files.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=61)** The PDF file to be used is also in the same directory.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=74)** Let's now explore this code file. We will be using FastMCP SDK to build the MCP server. We need to first load the dot ENV environment, since it is used by the underlying SDK, we then create an instance of FastMCP. We specify a name for the MCP server, the HR underscore CCO underscore MCP variable is important, and it'll be used in the decorators later. Then we proceed to set up a MCP resource. This process is similar for each resource, irrespective of the number of resources set up in a single server, we first create a URA for the PDF file, specifying the full path for the file. Then we create a decorator for the MCP resource. This is done using the FastMCP instance we created earlier. We specify the URA of the file to load. Then we provide a name, description, and mine type for the resource. Information in the decorator will be provided to clients to understand the resource and the type of data it provides. So it's good practice to be elaborate in the description. The mime type identifies the type of content returned. Beyond text, it can be a URA, audio, or streaming video.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-server?u=76281980&t=176)** Next, we define a function that will actually return the resource. This corresponds to the decorator above. The implementation of this function is custom and specific to the resource and use case. A developer is free to implement any logic they want to, to provide the right information back. This function can in fact read from a database or another web service if needed. This function can actually take inputs if needed from the client and adapt the output accordingly. In this example, there are no inputs. The function returns a string, which in this case is the contents of the PDF file. Inside the function, we read the contents of the PDF file and create a text string with its contents. We will finally return that text. The MCP server itself need to be run when this file is executed. For this, we call the run method in HR COC MCP, we specify transport as STD io. The client will actually run this file, [[Fetch]] the resource, and then shut down the running instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Fetch]] (1)
> **Env Vars:** mcp (8), pdf (4), ura (3), sdk (2), env (1)
> **Prerequisites:** set up (2), install (1), setup (1)
> **Tools:** github (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Build the code-of-conduct MCP client](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=0)** - [Instructor] Let's now build the code of conduct MCP Assistant application with the MCP client. This code is available in the file, code_of_conduct_client.py, under the chapter2 directory. Here, we first load the .env environment as the client SDK is needed. We will be using langchain_mcp_adapters for building the client. First, we configure the MCP server connection for STD IO transport. For this, we use the STD IO server parameters method. The command parameter indicates the OS command that needs to be run to execute the MCP server. The args parameter contains the list of arguments that will be passed to the OS command. This contains the file path for the MCP server. If additional parameters are needed, they should also be provided in the arguments. Next, we set up the [[Microsoft Azure|Azure]] Open AI model for LLM in this example. The endpoint, deployment, subscription key, and api_versions are configured in the .env file and will be reused across all examples in this course. Please replace them with configuration for your own account. We then create the Azure chat OpenAI instance
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=98)** using this configuration. To get the list of resources, we create an asynchronous function called fetch_resource_content. This is boilerplate code that can be used to get resources for any MCP server. We now proceed to create the MCP client. We start by first creating the STD IO client with the server parameters configured before. Then, we create a client session with the server. We then await for session initialization. These are boilerplate steps needed to connect to the MCP server. During initialization, the client will attempt to start the MCP server with the configuration provided as we are using STD IO transport. Once successfully started, it will complete the initialization. We can get the list of resources provided by an MCP server using the load MCP resources method. We can then print the [[Metadata]] for all the resources. This will show all the information we configured when creating the server. The data attribute for each resource
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-code-of-conduct-mcp-client?u=76281980&t=191)** contains the actual content for the resource. This data can be of any type, including images and audio. This is then returned back to the calling code for the first resource found. Now, let's create the app. We begin by retrieving the resource content from the server. Resources in MCP can also take parameters from the client if needed, and adapt their behavior accordingly. Next, we create a user query, simulating user input. We ask the question, what are the [[Privacy]] policies of the company? Then, we create a prompt that contains the user query and the retrieved content. We ask the LLM to answer the query using the content retrieved. Finally, we call the model and print the output. Let's now proceed to run this app and see MCP in action in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Metadata]] (1), [[Privacy]] (1)
> **Env Vars:** mcp (13), std (4), llm (2), sdk (1)
> **Prerequisites:** initialization (3), configure (1), set up (1)
> **Code Identifiers:** code_of_conduct_client (1), langchain_mcp_adapters (1), api_versions (1), fetch_resource_content (1)
> **Exercise Files:** boilerplate (2)
> **File Paths:** code_of_conduct_client.py (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Execute the code-of-conduct app with MCP](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=0)** - [Instructor] Let's now run the code of conduct MCP client and review the results. To run this client, we go to the Run function and select Run [[Python (Programming Language)|Python]] File in Dedicated Terminal.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-code-of-conduct-app-with-mcp?u=76281980&t=18)** Here we first see the MCP server being started during the initialization process. The [[Metadata]] for the resources loaded, is printed. It also shows the URI for the resources. The content that is retrieved from the resource is also printed. Then the user query and the final responses are also printed. This shows the MCP client and MCP server in action. We will build out two more MCP applications to demonstrate other capabilities of MCP in the upcoming chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Metadata]] (1)
> **Env Vars:** mcp (6), uri (1)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 3. HR Policy Agent with MCP

[↑ Back to Table of Contents](#table-of-contents)

#### [HR policy agent design](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=0)** - [Instructor] We will be building a HR policy AI agent in this chapter. This agent will use MCP for accessing tools and prompts. In chapter six, we will use this agent as part of an agent-to-agent network. Let's first discuss the features of the HR policy agent. The HR policy agent is used by the [[Human Resources (HR)|human resources]] department in an enterprise to help with their employee queries. The agent answers questions about employee policies, like time off, remote work, and other benefits. The policies are themselves available in a PDF file. These policies are loaded into an in-memory vector database with their equivalent embedding representations. The MCP server provides retrieval from the vector database for a user query. This is provided as a tool in MCP. This is an example of how retrieval in a [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]], or RAG, system can be done using an MCP server. The prompt for the LLM is also served by the MCP server. The client is an agent that uses this MCP tool to answer questions about policies. What does the design of this agent look like?
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-policy-agent-design?u=76281980&t=97)** We have the HR_Policy_Document.pdf file that contains policy information. A HR policy MCP server provides access to the contents in this file. This server on startup will first load the PDF document into an in-memory vector database. Retrieval from this database is exposed as a tool in the MCP server. The server also exposes the prompt template that can be used to form the prompt for the agent. The HR policy agent is the application that uses the MCP server. It has a bundled MCP client for this purpose. The MCP client will communicate with the HR policy MCP server using the STDIO transport. Here, it will first run an instance of the server and then use it to retrieve data. Let's now proceed to implement this design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Human Resources (HR)|Human resources]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1)
> **Env Vars:** mcp (12), pdf (2), rag (1), llm (1), stdio (1)
> **Definitions:** is an  (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Build the HR policy MCP server](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=0)** - [Instructor] In this video, we will build the code for the MCP HR policy server. The code for this chapter is available in the folder, chapter three. The server code is available in the file HR policy server dot PY. The policies document is also available in the same folder. Let's now review the code. We begin by setting up the MCP server for fast MCP. Then we proceed to set up the vector store using in-memory vector store in Lang chain. We first load the PDF file using PYPDF loader. We will use all mini MLL6V2 embedding model to embed the documents. We will use the Lang chain helper function from documents to create the vector database, providing the policies document and the embedding model as parameters. This code runs only once when the MCP server is started up.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-mcp-server?u=76281980&t=70)** Next we set up the MCP tool to query the vector database. We use the tool decorator for the function that provides the retriever functionality. Do note that the MCP server name is used as a part of the decorator. The function query policies takes the query as input. It does a similarity search on the vector database and returns the top three chunks. The results are then returned back to the client. We will then set up the prompt for the agent. Here we use the prompt decorator. This function takes as input the query from the user, the prompt template as a placeholder for the query. The get LLM prompt returns the final prompt after replacing the placeholder with the actual query. We also have some test code that can be run to execute the server standalone and retrieve the results. Finally, we run the MCP server using transport as STDIO. This server is now ready with the retriever tool and prompt.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (7), pdf (1), pypdf (1), mll6v2 (1), llm (1)
> **Prerequisites:** set up (3)
> **Exercise Files:** template (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Build the HR policy agent with MCP client](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=0)** - [Instructor] In this video, we will build the HR Policy Agent that uses the MCP server we created in the previous video. Code for this agent is in the file hr_policy_agent.py under chapter3. This is an AI agent that will be created using LangGraph's prebuilt agent. The prebuilt agent can be replaced by a LangGraph Graph 2, if custom logic is needed. We begin by setting up the AzureChatOpenAI model with the configuration setup in the environment. Please use your own settings when running the code. Next, we define an asynchronous function for executing the agent. It takes the query or goal to the agent as input and returns a response. We will be using the MCP server in Stdio transport mode. For this, we first use the correct path for the MCP server [[Python (Programming Language)|Python]] file, then we set up the Stdio parameters. The OS command to be used is Python, and the arguments to this command is the path to the Python file. Then, we proceed to create a client session with the MCP server and initialize it. During this process, the hr_policy_server.py file is started up.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=95)** We now [[Fetch]] the list of all tools supported by this MCP server. We also get the prompt from the same server by specifying the function name and passing the query as parameter. We print the tool name and the prompt that was retrieved. Now we proceed to create a [[React.js|React]] agent. We pass the LLM model for reasoning and also the list of tools. Then we call the ainvoke method to request the agent to answer the prompt. When this method is called, the reasoning LLM will first use the list of tools available to decide on how to proceed with answering the query. It'll pick appropriate tools from the list, invoke these tools from the policy server using MCP and fetch the results. It'll pick the appropriate tools from the list, then invoke these tools from the policy server using MCP and fetch the results. When all data is available, the agent will proceed to generate the final answer. The results are then returned back to the calling code In the main loop, we simply call the run_hr_policy_agent using asyncio. We pass a query "What is the policy for remote work?" This simulates how user input is passed to the agent. In real-world applications,
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-policy-agent-with-mcp-client?u=76281980&t=187)** the query is usually received from the user or client application. In the next video, we will execute this agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Fetch]] (3), [[React.js|React]] (1)
> **Env Vars:** mcp (7), llm (2)
> **CLI Commands:** python (3)
> **Code Identifiers:** hr_policy_agent (1), hr_policy_server (1), run_hr_policy_agent (1)
> **File Paths:** hr_policy_agent.py (1), hr_policy_server.py (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is an  (1), is called (1)
> **Prerequisites:** setup (1), set up (1)

#### [Execute the HR policy agent with MCP](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-policy-agent-with-mcp?u=76281980&t=0)** - [Speaker] Let's now run the HR policy agent and observe the results. The HR MCP server path is correctly built by the agent. It then initializes the MCP connection after starting up the MCP server. During this process, the embedding model is also downloaded. Then the tools and the prompt are loaded and printed. The prompt is loaded as a human message that can be readily consumed by the [[React.js|React]] agent. Then the agent is invoked to answer the query. The agent then sends the query to the MCP HR policy server. The MCP server uses vector retrieval to get the top three answers and returns back to the agent. The agent then generates the final output. This code shows a template for agents that can be built to use MCP servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Env Vars:** mcp (6)
> **Exercise Files:** template (1)
> **Speakers:** - [speaker] (1)


### 4. HR Timeoff Agent with MCP

[↑ Back to Table of Contents](#table-of-contents)

#### [HR timeoff agent design](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=0)** - [Instructor] In this chapter, we will build another MCP-based agent called HR time off agent. This agent will exercise additional capabilities with MCP and will be integrated into a multi-agent system in chapter six. First, let's discuss the functionality provided by the time off agent. Enterprises need to manage time off requests from employees, like sick days, vacation days, and other special time offs. A HR time off agent helps employees manage their time offs. It provides them the ability to file new time off requests, as well as query for their time off balances. Time off data is managed in a SQLite database for this exercise. For simplicity's sake, we will only manage one type of time off. We will use an MCP server to provide, create, and retrieve operations on time off data. In addition, the prompt for the agent will also be served by the MCP server. The client, HR time off agent, will use the tools provided by this MCP server to file new time off requests and provide time off balances. What does the design of this time off agent look like? We have time off data stored in a SQLite database. In real-world situations, this would be in a scaled and managed database. A HR time off server provides MCP services for the system.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-timeoff-agent-design?u=76281980&t=98)** It has two tools, namely, get time off balance and request time off. These tools help to get the current time off balance for an employee in the SQLite database, and also update time off balance based on new requests, respectively. The system prompt template is also served by this MCP server. The HR time off agent is an application that provides time off management services to the users. In addition to its agentic capabilities, it also has an MCP client. The MCP client communicates with the HR time off MCP server for time off management. Note that this will use the HTTP/[[Server-Sent Events|SSE]] for communication. Unlike the previous examples with SGBAO, where the server is started by the client, here, the server should be up and running for the client to communicate using HTTP. Let's now proceed to implement this example in the [[Representational State Transfer (REST)|rest]] of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Server-Sent Events|Sse]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** mcp (10), http (2), sse (1), sgbao (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Build the HR timeoff MCP server](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=0)** - [Instructor] In this video, we will build the MCP server as part of the HR time off system whose design we discussed in the previous video. Code for this chapter is in the chapter four folder. We will use SQLite to store time off information. For managing operations on the SQLite database, we have a class called TimeOffDatastore. This class is available in the file; timeoff_datastore.py. Let's first explore this file. This class has a init method that creates the SQLite database. The database is only created in memory and will not be persistent. So the tables need to be created every time the server is started. In real world scenarios, a persistent database is used, so this init method is not needed. We begin by connecting to the SQLite three database. This implicitly creates the database itself. Then we have the create tables method. This creates two tables. The employee table has one record per employee. It also tracks the total time of allowed days and the total consumed so far. The second table is the timeoff history table.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=94)** This is used to log each request for employees for time offs. This method is executed as part of init. Next, there is the seed data method. This seeds some initial data into the database. It creates three employee records in the employee table with name, allowed days, and consumed days data. This is also executed as part of init. The class then has get time off balance method. Given an employee name, it fetches and returns the current time off balance for an employee. The add time off request method is used to create a new time off request for an employee based on the employee name. First, it checks if the employee has enough time off balance to file a new time off request. Then it inserts a new record in the time off history table. Finally, it updates the balance in the employee table for available time offs. There is some example usage code that can be used to test this class standalone by simply executing the [[Python (Programming Language)|Python]] file.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=192)** Next, we move on to build the MCP server in the timeoff_db server.py file. We begin by creating a FastMCP instance for the MCP server.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=209)** We initialize the time off datastore object. This is executed once when this Python file is run and the MCP server is started. It initializes the database behind the scenes. We have two tools for MCP here. The get time off balance tool calls the equivalent get time off balance method on the time off db store and returns the value. The request time off function calls the equivalent add request time off method on the time off db store and returns the results. Finally, we also have the get llm prompt function. To get the prompt for the LLM, it takes us input, the user who's using the agent and the query that the user provides for actions.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-mcp-server?u=76281980&t=269)** We then get to run the MCP server. Here do note that we are using streamable http as the transport layer to enable HTTP. The host and port correspond to how we want the server configured for HTTP access. We can access this server using http/localhost:8000 as the URL. Now let's proceed to build the client in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Env Vars:** mcp (6), http (2), llm (1), url (1)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **File Paths:** timeoff_datastore.py (1), server.py (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** timeoff_datastore (1), timeoff_db (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)

#### [Build the HR Timeoff Agent with MCP Client](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=0)** - [Instructor] Now, let's proceed to build the time off agent. The code for this agent is in the timeoff_agent.py file in the chapter4 folder. Most of this code is similar to the HR policy agent that we built in the previous chapter. We begin by first setting up the [[Microsoft Azure|Azure]] Chat OpenAI model for use with the agent. We use the environment variables to identify the required parameters. Please use your own instance of an LLM when trying out this exercise. Next, we proceed to define the time off agent asynchronous function. This takes a username and a user query as inputs. The MCP server in this case is using a streamable HTTP interface. Unlike the previous example where we used stdio, we need to run the MCP server first as a service exposing a HTTP URL and port. We identify that URL for the MCP server in the client. Now, we proceed to connect to the server. We use streamable HTTP client interface for this purpose and initialize the connection. The server is already running, so this merely opens a live connection to that server. Then we get the list of tools.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/build-the-hr-timeoff-agent-with-mcp-client?u=76281980&t=97)** We then get a prompt that is updated with the user and the query. We print those. Once a connection is established, these steps are similar to our previous example. We then create a [[React.js|React]] agent with the tools. We use the prompt to initiate the agent. The agent will then use the tools available to create the response. The response is then returned back from the function. In the main loop, we send a sequence of three queries to the agent. First, we request the time off balance for Alice. Then we file a new time off request for Alice for five days. Then we again query for the time off balance to see if the balance has been updated correctly. This should be updated based on our previous time off request. These three queries simulate how a real user behavior would be when this is deployed in production. Let's execute this system in the next video and see the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[React.js|React]] (1)
> **Env Vars:** mcp (3), http (3), url (2), llm (1)
> **Cross-References:** previous chapter (1), in the next (1)
> **Analogies:** similar to (2)
> **File Paths:** timeoff_agent.py (1)
> **Code Identifiers:** timeoff_agent (1)
> **Speakers:** - [instructor] (1)

#### [Execute the HR timeoff agent with MCP](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=0)** - [Instructor] Let's now proceed to execute the HR timeoff agent system. First, we need to start the MCP server. We can do this by running the timeoff_db_server.py file.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=18)** We see that the service is started and listening on port 8000. Next, we need to run the MCP client. We do so by running the timeoff_agent.py file.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=47)** On executing, we see that it is executing the first query, namely, Get the timeoff balance for Alice. It gets the list of tools and the prompt. It is then able to query the database and retrieve the current balance. The value is 15 days. This is the data we used in the seed process for the database. We then create a timeoff request for five days. The process is then repeated. Now the request timeoff tool is created to create a timeoff request.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-hr-timeoff-agent-with-mcp?u=76281980&t=98)** It was able to file the request correctly for five days. When we issue a query for the timeoff balance again, we get only 10 days. This is because the balance is reduced by five based on the previous request. One thing you may notice is that we are creating the [[React.js|React]] agent for each request, so the list of tools and prompts are fetched again and again. We could also create the React agent once and reuse it for new requests. Let's also inspect the logs of the timeoff DB server. We see multiple POST and GET requests coming in as part of the MCP protocol handshake. We see the request for prompt and the actual tool execution logs. This example demonstrates how MCP would work in an AI agent scenario using HTTP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2)
> **Env Vars:** mcp (4), post (1), http (1)
> **File Paths:** timeoff_db_server.py (1), timeoff_agent.py (1)
> **Code Identifiers:** timeoff_db_server (1), timeoff_agent (1)
> **API Endpoints:** post  (1), get  (1)
> **Ports:** port 8000 (1)
> **Speakers:** - [instructor] (1)


### 5. Introduction to Agent2Agent Protocol

[↑ Back to Table of Contents](#table-of-contents)

#### [What is A2A?](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=0)** - [Instructor] In the past few chapters, we learned about MCP. In this chapter, we will discuss the concepts of agent to agent protocol, or A2A for short. In the next chapter, we will integrate the agents we built earlier with A2A. To understand the need for A2A, we need to discuss the challenges while building multi-agent systems. In a multi-agent system, multiple AA agents can collaborate with each other to execute business functions. Each AA agent can perform a specific function. An AA agent can leverage another agent to execute a business function. For example, a [[Technical Support]] agent can utilize a product knowledge agent to understand more about a product's features. As multi-agent systems evolve, we end up with agents that are built with different frameworks like Lang Chain and LAMA Index. They may also be deployed inside a single cluster or distributed across [[Cloud Services]] like AWS and GCP. They may be deployed by different organizations, and communication would require crossing organization boundaries. So when developers need to integrate two AA agents, they need to understand the custom interfaces and capabilities that each agent provides, and then build custom code to integrate them. As the number of agents in a multi-agent system grows,
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=96)** the integration complexity multiplies. There is also the need to discover agents ad hoc based on specific requirements and then dynamically connect to them. This requires the available agents to be discovered using a search engine like capability. The agent to agent, or A2A protocol, was introduced to specifically handle these challenges. It is a common open standard for agent to agent communications. Each participating agent in a multi-agent system can implement this standard once, and then it can communicate with any other agent implementing the same standard. A2A is a protocol similar to communication protocols like TCP, IP or [[Representational State Transfer (REST)|rest]]. It provides a common transport layer as well as a message structure. It is modality agnostic. The content of the messages can be text, audio, video, or images. A2A also supports agent discovery. Agents can be published through a directory and other agents can discover them based on their capabilities supported. A2A also supports task-based workflows. So a given workflow can be created using multiple agents in an A2A enabled multi-agent system. It has support for access, control, security, and [[Privacy]]. This allows A2A to be used for communications with agents
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/what-is-a2a?u=76281980&t=192)** across organizational and trust boundaries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Technical Support]] (1), [[Cloud Services]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Privacy]] (1)
> **Env Vars:** a2a (9), mcp (1), lama (1), aws (1), gcp (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Architecture of A2A](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=0)** - [Narrator] In this video, we will discuss the typical architecture of A2A, and how agents use it to interact with each other. There are three main actors in an A2A setup. First comes the A2A user. The A2A user is a human end user who provides goals or tasks to the multi-agent system. The user could also be a client program that sends goals and receives responses as part of a workflow. Then comes the A2A client agent. The client agent has its own reasoning process with an LLM. It can decide to utilize the services of another agent to fulfill certain tasks. It initiates communication with the other agent and receives results or responses. Finally, there is the A2A server agent. This is the agent that receives requests from a client agent, then executes them and returns responses. The A2A client and the server are typical client servers in software architectures. The same agent can be both a client for some actions, and a server for others. This is how a typical A2A setup looks like. We have the A2A client agent and the A2A server agent. The server agent runs an A2A server inside it. This server is typically listening on a port.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=98)** The A2A client resides inside the client agent. This connects to the A2A server on the server agent using the A2A protocol. It initiates connection, gets a listing of agents, and executes tasks. Now, the A2A client agent can independently use a few MCP servers for its tools, prompts and resources. The A2A server agent can also independently use a few MCP servers for its own use. They can also share MCP servers if needed. It is very important to understand how MCP and A2A are different. MCP provides resources and tools. A2A provides integrations with other independent agents with their own reasoning models. Can an MCP server run an agent underneath it? It can, but what we are concerned about here is the interface between the entities, not their internal implementation. The user or the client application talks to the A2A agent for initiating requests and receiving responses. What does a multi-agent system with A2A look like? Let's say we have an agent, agent one, having an A2A client that talks to agent two using MCP. Agent two can in turn talk to agent three.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/architecture-of-a2a?u=76281980&t=193)** So agent two has both a client and a server implementation, but for connecting to different agents. We can also have agent four, which acts as a server to agent two, but uses agent three. Any kind of permutations and combinations are possible here. Agents have an instance of an A2A client for each server they integrate with. On the other hand, a single instance of an A2A server can handle many clients.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (23), mcp (7), llm (1)
> **Prerequisites:** setup (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [A2A communication elements](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=0)** - [Instructor] What kinds of elements exist in the A2A protocol? And, what are their purposes? Let's explore them in this video. We begin with the agent card, which is a fundamental elemental for A2A. An agent card is a [[JSON]]-based [[Metadata]] document. It is used to describe the configurations and capabilities of a given agent. It is created by the developer of the agent, with documentation that helps others understand about this agent. Key information present in the agent card includes the identity of the agent, like name and description, endpoint where the agent is being served, version of the agent, capabilities supported by the agent like streaming, skills of the agent like policy and time of, and modalities like text and video. The agent card can be hosted by the A2A server itself at a familiar endpoint. Alternatively, an agent registry or data tree can be used to host all agent cards centrally for discovery purposes. A2A clients can use the agent card to understand the capabilities of the agent, and then use them to decide if and how to integrate with that agent. The next element to discuss is a task. A task is the unit of work
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=95)** that an A2A client requests the server to complete. This an be an action, or a code or a question to answer. Examples of tasks include answer a question, create a file or approve a request. Each task is identified by a unique task ID, which is an integral part of all communications in A2A. A task can be synchronous or asynchronous. The status of a task is managed by the A2A server. Examples of status codes include submitted, working, completed, et. cetera. Then comes messages in A2A. A message is a single unit of communication between an A2A client, and an A2A server. A message can include any kind of data. This includes instructions, context, status or handshake. Each message is identified by a message ID. A given task may require multiple turns between the client and the server. So, there can be multiple messages required between the client and the server to complete a task. Each message can have many parts that represent the type of data. Examples include TextPart, FilePart and DataPart. Finally, we have the artifact element.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-communication-elements?u=76281980&t=188)** The output generated by the A2A server is called an artifact. The output could be answers, documents, images and audio files that can be sent back from the server to the client using messages. Streaming can be used to incrementally send large artifacts. This is useful in real time streaming of text, audio or video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Metadata]] (1)
> **Env Vars:** a2a (11), json (1)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [A2A protocols](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=0)** - [Instructor] What protocol options exist for the A2A client and the A2A server to complete a task? Let's discuss the available options in this video. The first option is request response. Let's discuss a sequence diagram that explains how request response works. The A2A client initiates the task by sending a request message with the goal that needs to be achieved. The A2A server responds back with a working status. The A2A client will then periodically send requests for updates to the server. The server will respond back with the current status. This will continue until the A2A server is working on the task requested by the client. When the task is completed, the A2A server responds back with the final artifacts. Do note that the A2A server only responds to request from the A2A client. It does not trigger a message of its own. Also, it's possible that the server responds with the artifacts in the first round trip itself, so the status requests and updates are optional and their use depends upon the time it takes to complete the task. The next option is streaming with server sent events. Here again, the A2A client sends a request with the goal.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=98)** The server now starts sending status or starts streaming the artifacts. This is triggered by the server. The server continues to send status or streamed artifacts without any additional request from the client. When the complete artifact is sent to the client, the server sends a completed event to inform the client that the task is now complete. The stream and status are initiated by the A2A server and continues until the task is complete. The number of such messages depends upon the type of task and the size of the artifact. The last type supported in A2A is push notifications. This is used in asynchronous communications only Unlike the previous two options, the A2A client does not keep the connection alive with the server. Here, the A2A client sends the request with the goal. It also provides a callback URL for the A2A server to send the responses. Then it terminates the connection. When the A2A server has updates to send, it initiates a status update to the callback URL. Again, the connection is terminated once the update is sent. This process continues as long as the A2A server is working on the task. When the task is completed,
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-protocols?u=76281980&t=192)** the A2A server sends the final artifacts to the callback URL. This method is used in long running or batch tasks when the client does not have to wait for completion.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (18), url (3)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [A2A discovery strategies](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=0)** - [Lecturer] In a multi-agent network, how do agents discover information about each other? In a previous video, we discussed the Agent Card. This card contains all details about a given agent. To know more about a given agent, another agent can retrieve the Agent Card of that agent and understand the features it supports and the interfaces that can be used to communicate with it. But before we can discover the features of an agent, we need to sometimes discover the agent itself. In a world of agents, how do we know the list of agents that exist, and then search and pick an agent that suits our requirements? The first way to discover agents is by deploying agents in a well-known URI. Here, the agent is built as an A2A server agent, and is deployed with a known URI. The URI is well-known, similar to [google.com](https://google.com), or it is an internal AA agent whose URI is published inside the organization. The agent will host its own Agent Card. The path to this Agent Card is a standard path. An example of such a path is given here. Clients can use the published URI and the Agent Card path to retrieve the Agent Card and then discover details about the agent. This mode is suited when the client agent
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-discovery-strategies?u=76281980&t=96)** already knows which server agent to use during design time. Dynamic discovery and use of agents during runtime is not possible. The second option is by using curated registries. This is a central registry where all the A2A agents are published. Their Agent Cards are registered here and are available for discovery. Central registries also provide search functions to filter agents based on their desired capabilities and choose the right one to use. The clients in this case should only know about the single registry API. Then, clients can search the registry for the right agents and retrieve their Agent Card. The Agent Card contains the actual URI for the agent. Registries enable dynamic discovery of agents and integrate with them during runtime based on the specific use case or workflow. Registries help govern available A2A agents. For example, an organization can host a central registry for all agents that were built in an organization. This allows for enforcing standards, security, and access control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** uri (6), a2a (3), api (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Analogies:** similar to (1), for example (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [lecturer] (1)

#### [A2A client and server communication flow](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=0)** - [Instructor] How do an A2A Client and an A2A Server communicate with each other to execute tasks and workflows? We have earlier discussed the protocols and communication elements used. Now, let's discuss how an end-to-end workflow looks like, utilizing the protocols and the communication elements. We first have the A2A server registry. This registry can be a separate registry with its own unique URI or it can be bundled inside the A2A server itself. It contains the Agent Card for the agent. The Agent Card has the agent capabilities and the Agent URL. An A2A client wants to communicate with this specific Server Agent. As its configuration, it already knows about the URL for the registry. This is the only information it needs to know if it uses an external registry. If the Agent Card is hosted by the A2A server itself, then it needs to know the URL for each of the A2A servers it needs to communicate with. The A2A client uses the URL to the registry to [[Fetch]] the Agent Card. It can also do a search across all agents in the A2A server to identify the right agent and then pull its Agent Card. From the Agent Card, the client learns about the URL
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=94)** where the A2A server for the target agent runs. An agent in A2A is hosted through an A2A server. This supports the standard A2A interface. This interface can additionally support the Agent Card also if a registry is not used. Using the Server Agent URL, the client agent establishes a connection with the A2A server interface. It does the message exchanges as per the protocol and sends the goal or the task to be executed. This can either follow the request response or the streaming with [[Server-Sent Events|SSE]] protocol. The A2A Server interface then invokes an Agent Executor. The Agent Executor serves as the link between the A2A Server code and the actual AI Agent. The Agent Executor can either load up the AI Agent inside the A2A server itself, or it can use any other kind of protocol like [[Representational State Transfer (REST)|REST]] or GRPC to integrate with the AI Agent. The AI Agent is invoked by the Agent Executor with the given goal or task. The agent then executes it and returns the results back to the Agent Executor. The results are then communicated back to the Client Agent using A2A. The Client Agent then proceeds to process the response and execute its business functions.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/a2a-client-and-server-communication-flow?u=76281980&t=189)** Having discussed the A2A protocol, let's now implement a multi-agent system using A2A in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Server-Sent Events|Sse]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** a2a (20), url (6), uri (1), sse (1), rest (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 6. Build a Multi-Agent HR App with A2A

[↑ Back to Table of Contents](#table-of-contents)

#### [HR multi-agent assistant design](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=0)** - [Instructor] Having discussed the concepts of the Agent2Agent protocol in the previous chapter, let's implement a multi-agent system enabled by the Agent2Agent protocol in this chapter. In this video, we will discuss the requirements and design of the system. We will be building an HR employee assistant agent. This agent provides a single portal for employees in an organization. Employees can use this portal to learn more about policies and perform actions like time-off requests. This agent acts as a front-end router. It understands the query or task provided by an employee user and then routes the request to the right agent that can execute it. It acts like a supervisor agent that utilizes other agents to perform a task. For this implementation, this agent integrates with the HR policy agent and the HR time-off agent that we built in the earlier chapters for MCP. We will add in A2A-based communications between the router agent and these two agents. What does the design of this multi-agent system look like? We already have the HR policy agent that we built in chapter 3 for answering questions about policies. This uses an MCP server using the STDIO transport.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=96)** We also have the HR time-off agent that we built in chapter 4 for adding new time-off requests and answering questions about balances. This uses an MCP server using HTTP. To enable A2A, we first wrap the HR policy agent with an HR policy A2A server. This server runs as its own process and loads the HR policy agent into its memory. Do note that it is also possible to run the HR policy agent as a separate process and then use HTTP or GRPC between the A2A server and the HR policy agent. The A2A server exposes an agent card for the HR policy agent and also handles queries on policies. Similarly, we wrap the HR time-off agent with its own HR time-off A2A server. This wrapping capability is done with boilerplate code and is similar for all implementations. Then we build the HR assistant router agent. This agent front-ends other agents. Inside this agent, we create a policy A2A client. This client integrates with the HR policy A2A server using the A2A protocol. It also has the time-off A2A client. This integrates with the HR time-off A2A server
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/hr-multi-agent-assistant-design?u=76281980&t=191)** using A2A protocol. Do note that this system has four executing processes that needs to be started up for the system to work. These four are the router agent, the HR policy A2A server, the HR time-off A2A server, and the HR time-off MCP server. The HR policy MCP server will be automatically started by the HR policy agent when needed.

> [!info]- Semantic Content
>
> **Env Vars:** a2a (14), mcp (5), http (2), stdio (1), grpc (1)
> **Warnings:** note that (2)
> **Cross-References:** previous chapter (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### [Implement A2A Server for agents](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=0)** - [Instructor] In this video, we will wrap existing agents, namely the policy agent and the timeoff agent with an a2a server implementation. The code is similar for both agents. Code for this chapter is available in the folder chapter six. Let's first explore the a2a server for HR policy agent. This is implemented in the file, a2a.wrapper_hr_policy_agent.py. In order to import the HR policy agent from chapter three, we first add chapter three to the import path. Then, we import the HR policy agent file.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=50)** Then we implement the agent executor for the policy agent. This is the connector between the a2a server and the agent. This inherits from the agent executor class. This base class provides all the plumbing needed to run an eight to a server. We only need to implement what is specific to our agent. We first have the innate function where we can add any startup tasks. Then we have the execute function that we will override. This function takes a request context as input. This carries the actual user request. We also have an event queue pass here. This is where we will push the output from the agent to be sent via a2a to the client. We first load the user input from the context and print it. Then we make an asynchronous call to the HR policy agents run_hr_policy_agent function with the prompt. Now the HR policy agent will execute the request and return the results. We have already discussed this code in chapter three. The results received is then added to the event queue. The cancel method is used when a long running request needs to be canceled by the client. We are not providing an implementation
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=145)** for it in this example. Now we move on to defining the a2a server. We first define a list of skills for the HR Policy Agent, the ID, name, and description are descriptive of the capabilities of this agent. We can also provide tax and few short examples for the skill. This can be used by the client to understand the capabilities of the agent from the agent card. Next, we define the agent card for the agent, the name and description are used to describe the agent. The URL is where the actual a2a server for the agent can be accessed. In this case, the agent card and the a2a server have the same URL as they run inside the same process. The version number can be used to track the specific version of the agent to be used. The input and output modes describe the kinds of inputs and outputs this agent can handle. Capabilities of the agent indicates whether streaming is supported by the agent. The skill parameter assigns the skill object we have already created. Now, we move on to some boilerplate code needed for the a2a server. We first create a request handler with the agent executor
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a2a-server-for-agents?u=76281980&t=239)** and a default task memory store. Next, we create an A2AStarletteApplication with the agent card and the request handler. Finally, we get to run the actual server. We use the server application, a host, port, and a log level. This server will run on port 9001 on the local host. Do note this host and port is where the agent card is available. The agent card then contains the URL to where the actual agent is available. Next, we create a similar a2a server for the timeoff agent. This code is available in the file, a2a.wrapper_timeoff_agent.py. The code is similar to the policy a2a server. We will then import the timeoff agent from chapter four. We then define a TimeoffAgentExecutor that invokes the timeoff agent. This code is similar to the HR policy agent. We then proceed to define the skill, the agent card request handler and the starlette application. Finally, we run the server on port 9002.

> [!info]- Semantic Content
>
> **Code Identifiers:** wrapper_hr_policy_agent (1), run_hr_policy_agent (1), wrapper_timeoff_agent (1)
> **Env Vars:** url (3)
> **File Paths:** a2a.wrapper_hr_policy_agent.py (1), a2a.wrapper_timeoff_agent.py (1)
> **Ports:** port 9001 (1), port 9002 (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### [Implement a A2A client](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/implement-a-a2a-client?u=76281980)

#### [Create a multi-agent router agent](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=0)** - [Instructor] In this video, we will build a router agent to route to the Policy_Agent and the Timeoff_Agent. First, let's look at the graph for the agent stored in the router_agent.png file in the chapter6 folder. When a request comes into the agent, it goes to the router node. The router node sends the input query to an LLM and request it to classify the query as either policy, timeoff, or unsupported. If the request is classified as policy, the Policy_Agent is called using a2a If the request is classified as timeoff, the Timeoff_Agent is called using a2a, else it returns back an unsupported message. Now, let's continue exploring the a2a_client_router_agent.py.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=59)** We use the class RouterHRAgent for creating the router agent. Here we receive the system prompt and the user as input. We build the graph based on the design of the router agent. The call_llm method is used to call the LLM and request a [[Routing]] destination. The policy_agent_node method is used to route the query to the Policy_Agent through the a2a client and the a2a server. It calls the execute_a2a_agent method using the URL for the policy agent card, the user, and the prompt. This in turn calls the a2a server, which then invokes the policy agent. The timeoff_agent_node similarly calls the execute_a2a_agent method, but with the URL for the timeoff_agent card. The unsupported_node method returns an unsupported request message. The find_route method is used to call the corresponding node inside the agent based on the classification returned by the LLM. Inside the main code, we set the user as Alice. We also create the system prompt for the router agent to classify the user query. The RouterHRAgent is then created with this information.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/create-a-multi-agent-router-agent?u=76281980&t=156)** We have commanded out code that can be used to print out the agent graph. Dor using the router agent, we create a sequence of five input queries or tasks to exercise various aspects of the HRAgent. We will then use these to call the router agent and print the responses. In the next video, we will run this agent and review the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Code Identifiers:** router_agent (1), call_llm (1), policy_agent_node (1), timeoff_agent_node (1), timeoff_agent (1)
> **Env Vars:** llm (3), url (2)
> **CLI Commands:** node (3)
> **Definitions:** is called (2)
> **File Paths:** a2a_client_router_agent.py (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Execute the multi-agent HR App with A2A](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=0)** - [Instructor] Having created the code for the multi-agent router and the a2a servers, let's now run the multi-agent system and experience it in action. To do this, we need to first run the timeoff_db_server. Please recollect that the timeoff agent uses this MCP server in HTTP mode on port 8,000. We can run this by running the [[Python (Programming Language)|Python]] file in a dedicated terminal.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=35)** Then we need to run the a2a server for the policy agent. We can start it in a similar fashion. This starts the server in port 9,001. Next, we need to run the a2a server for the timeoff agent.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=60)** This starts the server in port 9,002. Finally, we get to run the a2a client router agent file.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=77)** This will create the router agent. Then it will go through the list of file tasks or queries. It can take some time to complete. The first query is, tell me about payroll processing. The router chooses the destination as unsupported. This is because the router agent only has policies and timeoff functions. The next question is, what is the policy for remote work? The destination chosen is POLICY. This invokes the policy node in the router. The policy node then calls the a2a client. The client first retrieves the agent card at port 9,001. It then prints the agent URL for the policy. Since the agent card is served by the a2a server itself, this URL is same as the agent card. Next, it prompts the agent using the user query. After some time, we receive the response from the agent. This is printed as the agent output. Let's now switch to the policy a2a servers logs, and see what happens there for this request from the client. We see the first request is for .well-known/agent.[[JSON]]. This is the request received for the agent card. Next, it creates the agent
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=174)** and prompts the agent with the user query. It then proceeds to contact the MCP server, load the tools, prompt, and then invoke the policy agent to answer the question back to the client router agent. The next question is, what is my vacation balance? The destination now is chosen as TIMEOFF. This then results in invoking the timeoff node in the router agent. The timeoff agent calls the a2a client. This client then proceeds to get the agent card from port 9,002. It proceeds to execute the query on the a2a server, get the response, and returns to the router agent.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=231)** If we look at the logs for the time of a2a server, we see similar log messages as the policy a2a server.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/execute-the-multi-agent-hr-app-with-a2a?u=76281980&t=244)** On the client router agent, the next two requests for filling a timeoff request and querying a balance, again, are also executed with the timeoff a2a server. This example illustrates how the a2a protocol is used for multi-agent communications. It also shows how MCP can be used along with a2a to build multi-agent systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **Env Vars:** mcp (3), url (2), http (1), policy (1), timeoff (1)
> **Ports:** port 9 (4), port 8 (1)
> **CLI Commands:** node (3), python (1)
> **File Paths:** well-known/agent.json (1)
> **Code Identifiers:** timeoff_db_server (1)
> **Tools:** terminal (1)
> **UI Navigation:** switch to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Recommended next steps](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-building-ai-agents-with-model-context-protocol-mcp-and-agent2agent-a2a/recommended-next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of the course. By now, you have an understanding of how to use MCP and A2A to build agentic integrations and multi-agent systems. If you want to take your learnings even further, here are some recommendations for your learning journey. First, learn about how popular agentic frameworks like LongChain, [[LlamaIndex]], AutoGen and CrewAI support MCP and A2A. Build an MCP server for one of your own organization's data sources. Integrated with a client agent, create a multi-agent system with A2A for your organization's use case. AA always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (1)
> **Env Vars:** mcp (3), a2a (3)
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