---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-ai-for-developers-building-ai-agents
url: "https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents"
duration_minutes: 113
duration: 1h 53m
level: Intermediate
updated: 2/28/2025
learners: 1414
skills:
  - OpenAI Products
  - AI Agents
  - Artificial Intelligence (AI)
  - Semantic Kernel
exercise_files: true
github: "https://github.com/LinkedInLearning/azure-ai-for-developers-building-ai-agents-4283243/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEyKymcipp_aA/learning-public-crop_675_1200/B4DZT8ohaqG4AY-/0/1739405269386?e=2147483647&amp;v=beta&amp;t=NAVYcoh6dFmTD_1MQMP3ukKW-ZHO7ag-F560tDugFBg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Build AI Products Using Azure AI Services in Your Development Lifecycle]]'
prev_courses:
  - '[[Azure AI for Developers- Azure AI Speech]]'
path_nav: '[{"path":"Build AI Products Using Azure AI Services in Your Development Lifecycle","position":8,"total":8,"prev":"Azure AI for Developers- Azure AI Speech","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-products
  - skill/ai-agents
  - skill/artificial-intelligence-ai
  - skill/semantic-kernel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20AI%20for%20Developers-%20Building%20AI%20Agents.md)

![Azure AI for Developers: Building AI Agents](https://media.licdn.com/dms/image/v2/D4D0DAQEyKymcipp_aA/learning-public-crop_675_1200/B4DZT8ohaqG4AY-/0/1739405269386?e=2147483647&amp;v=beta&amp;t=NAVYcoh6dFmTD_1MQMP3ukKW-ZHO7ag-F560tDugFBg)

# Azure AI for Developers: Building AI Agents

> Get up to speed with AI agents in Azure AI. This course is designed for IT professionals with a working knowledge of Azure, GitHub, and Python who are looking to build AI agents using Azure OpenAI. Instructor Ziggy Zulueta offers a deep dive into creating agents with Azure OpenAI and Python using different frameworks such as the OpenAI Assistants API, Semantic Kernel, and AutoGen.This course is in

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents) | 1h 53m | Intermediate | 1K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Build AI agents with Azure](#build-ai-agents-with-azure)
  - [What you should know](#what-you-should-know)
- [**1. Working with AI Agents**](#1-working-with-ai-agents) (9 videos)
  - [Understanding AI agents](#understanding-ai-agents)
  - [OpenAI API Assistants overview](#openai-api-assistants-overview)
  - [Function calling](#function-calling)
  - [File search](#file-search)
  - [Code Interpreter](#code-interpreter)
  - [Multi-agent collaboration](#multi-agent-collaboration)
  - [Creating assistants in Azure AI Foundry](#creating-assistants-in-azure-ai-foundry)
  - [Challenge: Create agents using Assistants API](#challenge-create-agents-using-assistants-api)
  - [Solution: Create agents using Assistants API](#solution-create-agents-using-assistants-api)
- [**2. Semantic Kernel**](#2-semantic-kernel) (7 videos)
  - [Semantic Kernel Agent Framework overview](#semantic-kernel-agent-framework-overview)
  - [Chat completion agent and adding plugins](#chat-completion-agent-and-adding-plugins)
  - [OpenAI Assistant Agent: Code Interpreter](#openai-assistant-agent-code-interpreter)
  - [OpenAI Assistant Agent: File search](#openai-assistant-agent-file-search)
  - [Agent collaboration](#agent-collaboration)
  - [Challenge: Creating agents with Semantic Kernal](#challenge-creating-agents-with-semantic-kernal)
  - [Solution: Creating agents with Semantic Kernal](#solution-creating-agents-with-semantic-kernal)
- [**3. Autogen**](#3-autogen) (10 videos)
  - [AutoGen overview](#autogen-overview)
  - [AutoGen Assistant Agent](#autogen-assistant-agent)
  - [Other AutoGen agents](#other-autogen-agents)
  - [AutoGen RoundRobinGroupChat](#autogen-roundrobingroupchat)
  - [Adding humans in the loop](#adding-humans-in-the-loop)
  - [AutoGen SelectorGroupChat](#autogen-selectorgroupchat)
  - [AutoGen Swarm](#autogen-swarm)
  - [AutoGen Magentic-One](#autogen-magentic-one)
  - [Challenge: Creating agents with AutoGen](#challenge-creating-agents-with-autogen)
  - [Solution: Creating agents with AutoGen](#solution-creating-agents-with-autogen)
- [**Conclusion**](#conclusion) (1 videos)
  - [Key takeaways and next steps](#key-takeaways-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build AI agents with Azure](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/build-ai-agents-with-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/build-ai-agents-with-azure?u=76281980&t=0)** - [Instructor] Have you been hearing all the buzz about [[AI Agents]], but have no idea how to actually build them? What if you could harness tools like [[Microsoft Azure|Azure]] OpenAI, [[Python (Programming Language)|Python]], and [[GitHub]] to create intelligent agents that transform your organization? That's exactly what this course will teach you. From streamlining workflows to creating [[Conversational AI]] or advanced applications, mastering these tools will keep you ahead of the curve. On the flip side, not knowing how to leverage them could leave you struggling to keep up. I'm Ziggy Zulueta, a [[Microsoft]] Most Valuable Professional AI and a Microsoft Certified Trainer. I've helped countless developers unlock the full potential of Azure and OpenAI technologies. If you're an IT professional who's ready to build powerful agents in Azure, let's get started and bring the future to life today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft]] (2), [[AI Agents]] (1), [[Python (Programming Language)|Python]] (1), [[GitHub]] (1)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/what-you-should-know?u=76281980&t=0)** - [Instructor] We have the following prerequisites for this course. All the videos on this course will cover code developed in [[Python (Programming Language)|Python]], hence an understanding of Python would be needed. In addition, we require you to have a [[GitHub]] account and have some experience using GitHub code spaces to be able to run the notebooks in this course. Alternatively, the notebooks can also be run locally via Visual Studio Code. Finally, it is important that one has access to [[Microsoft Azure|Azure]] Open AI because you'll use its models throughout the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[GitHub]] (2), [[Microsoft Azure|Azure]] (1)
> **Tools:** github (2), visual studio (1)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)


### 1. Working with AI Agents

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding AI agents](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/understanding-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/understanding-ai-agents?u=76281980&t=0)** - [Instructor] [[AI Agents]] are systems or programs capable of autonomously performing tasks for a user or another system by using a workflow and available tools. They are designed to perform specific tasks, answer questions, and automate processes for users. Unlike standalone [[Large Language Models (LLM)|large language models]], agents have these common features. Agents can plan and sequence actions to achieve specific goals. An agent can, for example, orchestrate different agents to perform different tasks based on their specific expertise and bring them all together to achieve a specific goal. For example, we can have a planning agent to plan a hiking trip by assigning the hiking agent to create itinerary, a weather agent that surfs the internet to get weather information, a product agent to provide product recommendations, and a writer agent to compile into a document all the information. Agents use tools or plugins, as they're called in other frameworks, to perform different tasks effectively. An agent is given different tools that provide different outputs, and the agent can decide which to use based on a specific goal. For example, if you provide an agent a tool to search for weather information, a tool to search for product information in a file, and a tool to provide budgets, it will decide by itself what tool to use
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/understanding-ai-agents?u=76281980&t=94)** based on the goal it was set to do. AI agents can perceive and process information from their environment to make them more interactive and context-aware. An agent, for example, can behave differently based on different information it is receiving or how other agents interact with it. A coder agent, for example, may realize that it does not have the necessary [[Python (Programming Language)|Python]] packages to run a script in its sandbox environment, and thus will adjust appropriately by installing the necessary library in the sandbox environment. A critique agent may also tell another agent to adjust its output, because it's not acting based on its design parameters. AI agents can also remember past interactions and behaviors. Standalone large language models require you to manually add the chat history in the conversation for the model to understand past interactions. Most agent frameworks have a built-in mechanism to handle past interactions easily. We will show examples in this course wherein agents have a state that remembers user's past interactions with agent. There are many frameworks available to facilitate the development and deployment of AI agents. In this course, we'll focus on frameworks that have been developed by [[Microsoft]] or work seamlessly with [[Microsoft Azure|Azure]] OpenAI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (4), [[Large Language Models (LLM)|Large language models]] (2), [[Python (Programming Language)|Python]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (1), python (1)
> **Speakers:** - [instructor] (1)

#### [OpenAI API Assistants overview](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-api-assistants-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-api-assistants-overview?u=76281980&t=0)** - [Instructor] The [[Microsoft Azure|Azure]] Open AI Assistants API is a feature of Azure OpenAI that enables developers to easily build powerful AI Assistants within their applications. The Chat Completions API the developers normally use was lightweight and powerful, but it was inherently stateless. This meant that developers had to do a lot of manual work, such as managing conversation state and chat Threads, tool integrations, retrieving documents and indexes, and executing code manually. The Azure Open AI Assistants API provides a solution for these challenges. The API supports persistent automatically managed Threads. This means that as a developer, you no longer need to develop conversation state management systems and work around a model's context window constraints. The API will automatically handle the optimizations to keep the Thread below the maximum context window of your chosen model. Once you create a Thread, you can simply append new Messages to it as users respond. The API also has a File Search tool that helps you extract the right data from your files to augment the model's responses. We previously needed to manually chunk our documents and create and store the embeddings for [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] systems to work. However, the Assistants API automatically parses
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-api-assistants-overview?u=76281980&t=97)** and chunks your documents, creates and stores the embeddings, and uses both vector and keyword search to retrieve relevant content to answer user queries. The API also has a Code Interpreter tool that writes and runs [[Python (Programming Language)|Python]] code In a sandbox environment. We previously needed to manually run code created by a language model and work with the model through iterations to get the right code. The Assistants API changes all that. When an Assistant writes code that fails to run, it can iterate on this code by modifying and running different code until the code execution succeeds. Before we proceed to create Assistants, it's also important to understand the following descriptions. An Assistant by definition is a custom AI that uses Azure OpenAI models in conjunction with tools. The Thread is a conversation session between an Assistant and a user. Threads store Messages, and automatically handle truncation to fit content into a model's context. Message is a message created by an Assistant or a user. Messages may include text, images, and other files. Messages are then stored as a list on the Thread. Run is an activation of an Assistant to begin running based on the contents of the Thread. The Assistant uses its configuration
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-api-assistants-overview?u=76281980&t=192)** and the Thread Messages to perform tasks by calling models and tools. As part of a Run, the Assistant appends Messages to the Thread. Finally, Run Step is a detailed list of steps the Assistant took as part of a Run. An Assistant can call tools or create Messages during its Run. Examining Run Steps allows you to understand how the Assistant is getting to its final results. In addition, when creating Assistants, it would be handy to know the following steps in this order. Step one, we will create an Assistant. Step two, we then create a Thread. Step three, we add the Message to the Thread we created. Step four, we run the Assistant. Step five, we check the Run status if it's completed. And step six, we display the Assistant's response. I would even add a step seven wherein we append Messages to the Thread for further actions and processing. We will be using these steps in our development. For Assistants to work, you also need a combination of a supported model and a supported region. This website will be very important reference for you. Finally, the Assistants API has additional charges. This is on top of the chosen language models per token input and output rates used by the Assistant.
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-api-assistants-overview?u=76281980&t=287)** You can check the prices in this website. As an example, if we are using a [[GPT-4]] Omni model for the Assistant that uses Code interpreter, we will be charged these input and output rates based on how many [[Tokens]] were used. From there, we then add the session charges for the Code Interpreter. Now that we know the basic concepts, let's start creating an Assistant using Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Python (Programming Language)|Python]] (2), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[GPT-4]] (1), [[Tokens]] (1)
> **Env Vars:** api (10), gpt (1)
> **Definitions:** is a  (5), means that (1), is an  (1)
> **CLI Commands:** python (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Function calling](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/function-calling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/function-calling?u=76281980&t=0)** - [Instructor] Let's start with function calling. We will create a travel agent assistant that helps our travel agency answer customer queries. This notebook guides you through each step. We first need to create an environment file that contains the needed [[Microsoft Azure|Azure]] OpenAI parameters, and we then load the Azure configurations in our notebook. We then define our functions. In our example, we will have three functions. The first function provides the countries that our travel agency services. The second function provides the travel budget for each country. The third function provides weather for each country. The first two functions, as you can see, does not require a parameter, while the weather function requires a country parameter. These are the [[JSON]] definitions of the functions. We then need to create the functions using [[Python (Programming Language)|Python]]. For now, we hardcoded the values, but imagine that you will call other external APIs to extract the needed values. The first and second function may call an API that accesses your documents, while the third function would access our weather API.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/function-calling?u=76281980&t=101)** We then use the steps we mentioned in the previous video on creating assistance. We create an Azure Open AI client and use this client to do step one, which is to create an assistant. We assign a name, the instructions, the Azure Open AI model, and the tools we created. If you want to know more about the Azure parameters, you can visit this link. We then do step number two, which is to create a thread. We then create a helper function, which is to contain steps three to six. This function adds a message or user question to the thread. Step number three, runs the assistant. Step four, checks the run status. Step five, and displays the assistant's response. Step six, let us discuss further what this function does. Whenever you run an assistant, the run enters an in-progress status. We retrieve the run and print its status for you to see later. If the run is completed, we print out the response. If it needs a tool, it'll enter a requires action status.
>
> **[3:18](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/function-calling?u=76281980&t=198)** The assistant would automatically determine what tool to use and get the function arguments, if any, needed by the tool. Remember that these tools are the functions we created earlier. Based on the function the assistant has identified, we call the identified function and get the response. We can then complete the run by submitting the tool output from the function you called. So let's see this assistant in action. The first query brings the assistant to acquires action state. The assistant then identifies the get_countries function, and it doesn't need any arguments. We get the function response and complete the run by submitting the tool output from the function response. The second query does the same procedure and determines automatically that it needs to get the weather function. The first argument, USA, doesn't provide an appropriate response, but the second argument, United States, does provide the info needed. The third query is more challenging because it performs basic math operations to determine if the budget would meet the criteria.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/function-calling?u=76281980&t=292)** It use its chat history to determine that we are referring to United States. It then use United States data to determine in which budget category that traveler would fit. Given that the assistant has a state and consumes resources, we need to delete it after once we no longer need it. In this video, we showed you how we can create an assistant and provided tools and functions. We also showed how the assistant would autonomously determine what functions and function arguments to use to meet the desired goal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[JSON]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (2), json (1), usa (1)
> **Cross-References:** we mentioned (1), previous video (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** get_countries (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [File search](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/file-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/file-search?u=76281980&t=0)** - [Instructor] The File Search tool automatically parses and chunks your documents, creates and stores the embeddings, and uses both vector and keyword search to retrieve relevant content to answer user queries. We can view the file format supported using this link. The OpenAI documentation discusses the different features and limitations of the tool. When it performs document chunking, the current size of each chunk is 800 [[Tokens]], with an overlap of 400 tokens. It uses a text embedding three large embedding model at 256 dimensions, and 20 chunks are always added to the context. You can also see that there are restrictions for the file upload, such as the 512 megabyte size, and 5 million token limit per file. A vector store can only contain 10,000 files, with the one vector store limit per assistant and thread. It also has some limitations. There's currently no way to modify the chunking, embedding, or retrieval settings. Parsing of images within documents is also not supported, and finally, retrievals over structured file formats like CSV or [[JSON]] line files is not supported.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/file-search?u=76281980&t=100)** Going to the code, we do the following. We first load our [[Microsoft Azure|Azure]] configuration, we then create a vector store, which we shall provide to the assistant later. Our data files are PDF files from a NASA book. Here's an example of one PDF. We will upload our files as one batch. To do this, we need to create the file streams of all our files, and use the file batches, upload import method to upload the files as a batch. We can then print the status and the file counts of the batch to see the result of this operation. I then created a helper function that reforms the citations given out by the assistant later.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/file-search?u=76281980&t=163)** In summary, the response of the assistant will contain an annotations list, which should contain a file name property. This would be the source file name used in answering user queries.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/file-search?u=76281980&t=183)** We then create the assistant. This time, we assign it the File Search tool, and the vector store assist tool resource. We then create a thread like what you did in the earlier video. We then create a helper function to perform steps three to six. Unlike function calling, the run will not undergo a requires action state, as File Search is an Azure OpenAI hosted tool.
>
> **[3:55](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/file-search?u=76281980&t=235)** The assistant provides a response with the PDF file used for reference. Finally, once done, we need to delete the assistant to clean up resources. We showcased in this notebook how Azure OpenAI assistance file search acts as a rag system. It automatically chunks your documents, computes and stores embeddings in a vector store, and does search and content retrieval. Using this over a traditional rag system has its pros and cons beyond the scope of this course. Top of mind, I would use this if I needed to access a dynamic file, such as an email. You'll still need to use a rag system for enterprises with huge data sets, given its file upload limits, and the inability to adjust chunking, embedding, and retrieval settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Tokens]] (2), [[JSON]] (1)
> **Env Vars:** pdf (3), csv (1), json (1), nasa (1)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Code Interpreter](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/code-interpreter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/code-interpreter?u=76281980&t=0)** - [Instructor] Code interpreter allows the assistants API to write and run [[Python (Programming Language)|Python]] code in a sandbox execution environment. With code interpreter enabled, your assistant can run code it alternatively to solve challenging code, math and data analysis problems. When your assistant creates a code that fails to run, it can iterate on this code by modifying and running different code until the code execution succeeds. In our example, we have a CSV data set of bigfoot sightings that we want to get answers from. Code interpreter will use Python code to get the answers from our data analysis queries. As always, we load our [[Microsoft Azure|Azure]] configuration and create an Azure OpenAI Client. We then prepare our file to be used by the assistant. Preparing the file involves using the create method and passing our file and purpose parameters. We then create an assistant. This time, we assign the code interpreter tool and the prepared file as a tool resource. We then create a thread. We use the same helper function used in file search to perform steps three to six.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/code-interpreter?u=76281980&t=95)** The main difference here is that the annotations in the response may contain files. In our case, we'll ask the assistant to create images, which should be charts of our dataset. The run will also not undergo, it requires action state. We now ask a question about our data source. You'll see in the assistants response the explanation on how the answer was arrived at in the Python code used. In my prompt instructions, I instructed the model that it needed to use two methods that have the same result before providing the final answer to us.
>
> **[2:37](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/code-interpreter?u=76281980&t=157)** In this scenario, we wanted to create a column chart that contains the top 10 sightings per year. The image file is also saved in our [[GitHub]] code spaces.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/code-interpreter?u=76281980&t=185)** Finally, don't forget to delete the assistant after. In this video, we showed how code interpreter can create Python code on its own to solve complex problems and run the code in a sandbox environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Azure|Azure]] (2), [[GitHub]] (1)
> **CLI Commands:** python (4)
> **Env Vars:** api (1), csv (1)
> **Tools:** github (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Multi-agent collaboration](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=0)** - This notebook shows you how three assistants can work together. The vision assistant would then get the image created, provide criticisms, and instruct the [[DALL-E]] assistant on how to modify the image using a new enhanced prompt. A user proxy would streamline conversations between the user and the other two specialized agents. This user proxy does the important job of ensuring the two agents perform the required tasks. For this example, we would need to use a Dall-e model for the Dall-e assistant, a model that can handle image input such as [[GPT-4]] to revision for the vision assistant and GPT-4 Omni for the user proxy. We first load the [[Microsoft Azure|Azure]] configurations from our environment file. We then create the three different Azure OpenAI clients with the different deployments.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=69)** We first create the specialized instructions, tool and function for the Dall-e assistant. We instruct the Dall-e assistant to be a premier AI specializing in image generation. The generate image tool requires a mandatory parameter called prompt of type string that contains the prompt to be used in creating the image.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=106)** The generate image function contains code that creates an image from a prompt, which can either come from the user or the vision assistant.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=122)** The function also stores the image in a file called temp.jpeg and displays the image on the screen. The vision assistant is then created next by defining its specialized instruction, tool and function.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=144)** We instruct a vision assistant to analyze an image, provide feedback, and create a new prompt to improve the image. The analyze image tool does not require any parameters. The analyze image function contains code to access temp.jpeg, then use the language model assigned to it to analyze and critic the image, and generate a new enhanced prompt for the Dall-e assistant to use. The function then returns the enhanced prompt. We then create the two assistants after we define their tools.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=201)** Finally, the user proxy is defined. We instruct it to have access to the list of agents contained in the agent string and to streamline dialogue between the user and the specialized agents within this group chat. We also instruct it to follow a specific plan as specified here. We then define a send message tool that sends messages to the assistants through a dispatch function, which we will also define. The send message defines the next agent in line and dispatches the message to Dr. Agent.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=260)** The dispatch message function directs agent to run its own tool.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=272)** Let's run this code with a specific example. I use green and red text colors to show the entrance and exit of each function for easier understanding. User proxy sends the message function to identify Dall-e assistant as the first recipient of the query. The dispatch message function is then called and the generate image function of the Dall-e assistant is identified. The generate image function is then called to generate the image. Once completed, the generate image and dispatch message functions are exited. User proxy then uses send message function to identify that the vision assistant is next in line. Dispatch message function is then called again and the vision assistance analyze image function is identified. The analyze image function is then used to analyze the image. A new enhanced prompt is then generated and returned. The user proxy, as you can see here then uses send message to identify the Dall-e assistant as next in line this time, and was able to capture the new enhanced query.
>
> **[6:05](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=365)** This goes through a loop between the Dall-e and vision assistant. The system stops when the plan has been followed in this case, when three images have been generated.
>
> **[6:27](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=387)** Since the system has a state, we can also ask it to continue the task. The system will start with the last prompt given by the vision assistant.
>
> **[6:46](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/multi-agent-collaboration?u=76281980&t=406)** Finally, we should not forget to delete the resources. In this video, we showed that you can also have a system with many assistants. The code may be challenging to understand, but the notebook will be available for you to download and run for better understanding and appreciation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (10), [[GPT-4]] (2), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** gpt (2)
> **Analogies:** such as (1)
> **Speakers:** - this (1)

#### [Creating assistants in Azure AI Foundry](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=0)** - [Instructor] You can also create assistants using [[Azure AI Foundry]] [[Microsoft Azure|Azure]] OpenAI service. Go to your Azure OpenAI resource in the Azure portal, and click Go to Azure AI Foundry portal. Head over to the Assistants menu in the left-hand navigation bar. If you see Assistants already created here, it means that you have created an Azure OpenAI Assistant previously through code, but they're unable to delete the assistant. Suppose you want to have the Code Interpreter Agent in the previous video answering questions about our CSV data file. We click New assistant, and specify the instructions. We then turn on Code Interpreter and upload our CSV file.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=67)** Once the file has been uploaded successfully, we can immediately use the assistant.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=81)** The assistant is able to show a column chart, similar to what you have done through the code.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=92)** Creating an assistant using File search is straightforward too. We first create a new assistant again.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=106)** We enter the instructions, turn on File search, and upload our PDF files.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=124)** Once the files have been uploaded successfully, we can then immediately use the assistant.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/creating-assistants-in-azure-ai-foundry?u=76281980&t=137)** As of this recording, the function calling is limited right now as you cannot enter your [[Python (Programming Language)|Python]] code. In addition, it is not possible to create a multi-agent system using Azure AI Foundry. These capabilities may be added in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Azure AI Foundry]] (3), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** csv (2), pdf (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** python (1)
> **Cross-References:** previous video (1)
> **Tools:** azure portal (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)

#### [Challenge: Create agents using Assistants API](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-create-agents-using-assistants-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-create-agents-using-assistants-api?u=76281980&t=5)** - [Instructor] It's now time for your first challenge. Your objective is to create a hiking agent for Contoso Company. This agent will recommend hiking information, using information provided from its functions, and will also recommend [[Microsoft Products|products]] from Contoso's product line using File Search. You need to perform the following tasks. First, you need to create an [[Microsoft Azure|Azure]] OpenAI resource that supports Assistants. Enter the needed information, such as the endpoint, key, deployment, and API version in an environment file. Second, you should use the product PDF files as the source of documents. The files are located in [[GitHub]] repository in the Data and Products folder. Third, you need to create functions to provide basic hiking information. You'll create a function to list destinations, hiking budgets, and weather information. Suggest to just copy the information in this note over to the code. You can find the function definitions here. Fourth, the assistant must use Function Calling and File Search. Step five, you then need to reformat the response to display citations properly, that the actual source file is displayed in the response. Six, you'll now run the agent using the following
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-create-agents-using-assistants-api?u=76281980&t=102)** sample questions listed here, and finally, once you are done running the code, do not forget to delete the files, thread, and the agent to free up resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Microsoft Azure|Azure]] (1), [[GitHub]] (1)
> **Env Vars:** api (1), pdf (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create agents using Assistants API](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=0)** - [Instructor] So here's the solution to our challenge. We first create our [[Microsoft Azure|Azure]] Open AI resource and place the needed parameters in the environment file. We then load our Azure configurations in the notebook. We then identify each of the tools. Since it needs both file and custom tools, we add them in the array. get_destinations and get_hiking_budget do not need parameters, and we can specify a country parameter to the get_weather tool. The [[Python (Programming Language)|Python]] definition of each function is then pretty straightforward. We then create our vector store.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=64)** We can print out the status of the files uploaded. We then create a helper function that retrieves the file names used for the response from the annotations stored inside the response.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=85)** We then create an assistant by providing it the instructions, the tools we defined earlier, which if you recall contains the file_search and also the different functions. And we also provided the tool_resources, in this case, the vector_store. We also create the thread. We then create a helper function that adds a question to the thread, runs the assistant, checks the run status, and displays the assistant's response. Since we created custom functions, the run will undergo a requires_action, where the language model identifies the function to be used in its arguments. We need to capture the function response from the function identified, appended in the tool_output, and provide it to the run. We can then print out the response in the completed state. We can now start asking questions to the assistant. We test each of the different capabilities. First is the file search tool.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=178)** Then you test the get_destinations function,
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=186)** the get_hiking_budget function,
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=195)** and the get_weather function. We can even ask a difficult question for the assistant to provide product recommendations based on your remaining budget.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-create-agents-using-assistants-api?u=76281980&t=217)** Finally, don't forget to delete your assistant once done to free up resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** get_destinations (2), get_hiking_budget (2), get_weather (2), file_search (1), tool_resources (1)
> **CLI Commands:** python (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Semantic Kernel

[↑ Back to Table of Contents](#table-of-contents)

#### [Semantic Kernel Agent Framework overview](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/semantic-kernel-agent-framework-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/semantic-kernel-agent-framework-overview?u=76281980&t=0)** - [Instructor] Creating assistants using the [[Microsoft Azure|Azure]] OpenAI Assistants API was challenging to set up. The [[Python (Programming Language)|Python]] code needed a lot of work and getting used to. Frameworks are present to help developers make agents easier. The [[Semantic Kernel]] Agent Framework provides a platform within the Semantic Kernel ecosystem that allows developers to build [[AI Agents]] and the ability to incorporate agentic patterns into any application based on the same patterns and features that exist in the core Semantic Kernel framework. Whenever we create an agent, a kernel instance is required as it provides the foundational context and capabilities for the agent's functionality. The kernel acts as the engine for processing instructions, managing state, and invoking the necessary AI services that power the agent's behavior. In this chapter, we will introduce you to the chat completion agent and the OpenAI assistant agent, which can be invoked directly to perform tasks. We'll also introduce you to the agent chat to orchestrate these two agents for multi-agent collaboration. Chat Completion Agent is a protocol for a chat-based interaction with an AI model where the chat history is maintained and presented to the model with each request. This implementation allows you to connect to many different language models,
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/semantic-kernel-agent-framework-overview?u=76281980&t=93)** such as Azure OpenAI, [[Hugging Face]], Mistral, and others. A service selector is available to identify which AI model you want to use. Chat history is managed in the client side. Developers are responsible for implementing and maintaining the system that stores and retrieves chat history. The OpenAI Assistant Agent leverages on the capabilities of OpenAI's Assistant APIs. It will have the same capabilities as the Azure OpenAI Assistants we discussed in the previous chapter, such as service-side threads to maintain and process dialogue, and access to the code interpreter and file search to execute code and search for information in files. I would like to highlight here that OpenAI Assistant manages your chat history through the thread, while the history in Chat Completion Agent must be managed manually. We showed in the previous chapter that function calling is a powerful tool that allows developers to add custom functionalities and expand the capabilities of OpenAI Assistants. Symantec Kernel has this equivalent called plugins. We will show in the next video how creating a custom plugin with custom functions can expand the capabilities of your agents. Finally, Agent Group Chat allows you to easily enable interaction between multiple agents, even if they're of different types.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/semantic-kernel-agent-framework-overview?u=76281980&t=186)** This makes it possible for a Chat Completion Agent and an OpenAI Assistant Agent to work together within the same conversation. The selection strategy in Agent Group Chat allows you to customize which agent shall be selected in a multi-agent conversation. The termination strategy allows you to customize when a multi-agent conversation shall be terminated. The Semantic Kernel Agent Framework as of this recording is in preview and is subject to change. Hence, we highly recommend that you continually visit its [[Microsoft]] Learn documentation, and its developer blog to get the latest updates on the framework. You can find the blog through this link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Kernel]] (4), [[Microsoft Azure|Azure]] (3), [[Python (Programming Language)|Python]] (1), [[AI Agents]] (1), [[Hugging Face]] (1)
> **Cross-References:** previous chapter (2), we discussed (1), in the next (1)
> **CLI Commands:** python (1), make (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Chat completion agent and adding plugins](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/chat-completion-agent-and-adding-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/chat-completion-agent-and-adding-plugins?u=76281980&t=0)** - [Instructor] Let's create our first [[Semantic Kernel]] Agent using the Chat Completion Agent. In this notebook, we will create a travel agent similar to the travel assistant we created using the [[Microsoft Azure|Azure]] OpenAI Assistants API. You first need to install the Semantic Kernel library to ensure you have the latest version and features. We then define our plugin. Recall that this is the equivalent of OpenAI's function calling in Semantic Kernel. You can find a more detailed explanation in this link. Going back to our code, we define a custom plugin class called TravelPlugin, and then we define three functions. These three functions look similar to the previous chapter. We then create a helper function. We discussed in the previous video the developers need to manage the chat history. This helper function manually appends the user input to the chat history. It then invokes the agent to respond based on that chat history. And then the function manually appends the agent's response also to the chat history. We then create a kernel instance
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/chat-completion-agent-and-adding-plugins?u=76281980&t=96)** as this is required in every agent. We add an Azure chat completion service in the kernel. Notice that we no longer had to manually upload our Azure configurations. Semantic Kernel automatically does this for us. You need to ensure though that you use the proper naming conventions in the environment file. We then set the function choice behavior and add the plugin to our kernel instance. We then create a chat completion agent. We sign it the following, the service id, the kernel instance, the name, instructions, and function choice behavior.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/chat-completion-agent-and-adding-plugins?u=76281980&t=151)** We also define an initial chat history, which is currently blank. We can then use the helper function to invoke the agent.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/chat-completion-agent-and-adding-plugins?u=76281980&t=170)** Displaying the history shows us what happened internally. Let's copy this over to a text file. The first row just contains the user's initial message. The second row contains the assistance tool invocation. The assistant recognizes the need for specific information and invokes our travel plugin to get a list of countries. The third row contains the tool's response. The tool provided a list of countries. And finally, the final row is the assistant's final message.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/chat-completion-agent-and-adding-plugins?u=76281980&t=218)** Running the other user query show us how the agent is automatically selecting which function in the plugin to use to get the desired result. You can see in this video how we have implemented an agent with function calling using less lines of code versus Azure OpenAI Assistants API. Now let us explore the OpenAI assistant agent of Symantec Kernel in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Kernel]] (4), [[Microsoft Azure|Azure]] (4)
> **Cross-References:** previous chapter (1), we discussed (1), previous video (1), in the next (1)
> **Env Vars:** api (2)
> **Analogies:** similar to (2)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [OpenAI Assistant Agent: Code Interpreter](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980&t=0)** - [Instructor] The [[Semantic Kernel]] OpenAI assistant agent allows you to use the capabilities of OpenAI assistant APIs, such as the code interpreter. In this note, we will have the code interpreter write and execute code to answer questions from a dataset containing two CSV files. Here's what our CSV files look like. We will not specify to our language model anywhere how these two files are related. We will let the model decide based on the columns provided to it. We first get the file paths of the two CSV files we use as a data source. We then create the agent. We assign it the following, the kernel instance, service ID, agent name, detailed instructions, and more importantly, we set the enable code interpreter parameter to through, and specify the code interpreter file names. Notice that we didn't need to perform any processing to prepare the files. We then create a thread. Once the agent is created, you can also see the agent in [[Azure AI Foundry]]. The code interpreter can create images.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980&t=98)** We have created a helper function to download those images created in a working directory. We then create a helper function to run the agent. We add the message to the agent, then invoke the agent to get a response. We can check if the response is code or not, and we can also check if the response contains any file references. We then call the download response image function helper to download any images.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980&t=144)** Running the first user query, you'll see that the agent was able to open the files as CSVs and was successful. It studied the structure of each file and then created an executed [[Python (Programming Language)|Python]] code to find the result.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980&t=163)** We can then append messages to the thread. Since the agent has state it no longer needed to load the files, it proceeded to create and execute Python code to find the result. The next query proceeded to create a column chart and saved it to our destination directory.
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980&t=189)** Finally, like the OpenAI assistance API, you need to delete the files, threads, and agents to free up resources.
>
> **[3:27](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-code-interpreter?u=76281980&t=207)** You'll see in Azure AI Foundry that the agent is no longer present.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Azure AI Foundry]] (2), [[Python (Programming Language)|Python]] (2), [[Semantic Kernel]] (1)
> **CLI Commands:** python (2), find (2)
> **Env Vars:** csv (3), api (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [OpenAI Assistant Agent: File search](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-file-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-file-search?u=76281980&t=0)** - [Instructor] Let us demonstrate the OpenAI assistant agent file search capability. We'll create an agent that will answer questions from our nasabooks. We first get all our files in our file directory, and create a helper function that gets the full path of each file. We then create a helper function to reformat_citations to the proper filenames. This function is similar to the reformat_citations helper function on the previous chapter. Inside this helper function, we do the following: We add items to an annotations list if the item is an AnnotationContent object. We then iterate over the annotations and extract the relevant information. We then create the agent. We provide the kernel instance, the service ID, the agent name, and the detailed instructions. We enable this time the file search parameter to True. And you specify the vector filenames. As you may have noticed, no added processing was needed for the files.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/openai-assistant-agent-file-search?u=76281980&t=94)** We just added the list of filenames to the vector_store_filename parameter. We then create a thread. We then create a helper function that runs the agent. We add a message to the agent. Then invoke the agent to get the response. We get any annotations present. If there are no annotations, we simply print out the response. If there are any, we call the reformat_citations helper function. We can then use our run_agent function to pass our user input and run the agent. We can then append messages to the agent. Unlike the chat completion agent, the chat history is maintained by the thread automatically. We can display the chat history through the get_thread_messages method. Finally, we need to, again, free up the resources by deleting the files, thread, and agent.

> [!info]- Semantic Content
>
> **Code Identifiers:** reformat_citations (3), vector_store_filename (1), run_agent (1), get_thread_messages (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Agent collaboration](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/agent-collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/agent-collaboration?u=76281980&t=0)** - The agent group chat allows us to create a multi-agent system with ease. We will create the same multi-agent system from the previous chapter, but this time using [[Semantic Kernel]], and you will see how easier it is to implement this. We'll have a [[DALL-E]] assistant that creates images, a vision assistant to critique the image and provide an enhanced prompt, any manager that counts the number of images generated. The manager will determine when the conversation should be terminated. We first load their [[Microsoft Azure|Azure]] configurations, and then we create our Azure OpenAI clients, but this time only for Dall-e and vision agents. We then create two plugins. The generate image plugin will contain the same generate image function. This function creates an image and saves that image to our local working directory. This plugin will be assigned to our Dall-e assistant. The analyze image plugin will contain the analyze image function that analyzes the image and provides a new enhanced prompt. We know that this plugin will be assigned to the vision assistant eventually. We then have a count plugin
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/agent-collaboration?u=76281980&t=97)** that contains a count images function. The count images function returns the number of images created by the Dall-e assistant. We create a helper function to create kernel instances. All the agents will have its own kernel instance. We then create the three agents. Each agent is assigned a unique service ID, kernel instance, name and set of instructions. We create a kernel instance for the manager, and we then add the count plugin to the kernel. We provide the manager the instruction to count the number of images created by the Dall-e assistant and to provide a termination keyword once the count reaches three. We create the Dall-e assistant and vision assistant appropriately. We add the generic image plugin to the Dall-e assistant kernel, and we also add the analyzed image plugin to the vision assistant kernel. We then create a selection function which defines the selection strategy for the agents. We provide an instruction that conversations should alternate between the Dall-e and vision assistants. We also create a termination function,
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/agent-collaboration?u=76281980&t=191)** which defines the termination strategy. In our case, the conversation terminates based on the manager's count. A termination keyword must be given to indicate that the conversation shall terminate. We then create the agent group chat. We assign the three agents and set the selection and termination strategies. We then run the group chat by adding a message to the agent group chat. The Dall-e assistant creates the image, then passes it over to the vision assistant. The vision assistant analyzes the image and provides a new prompt to enhance the image. The Dall-e assistant then creates a new image using the new prompt. The Dall-e and vision assistants continue the conversation 'til the manager decides to terminate the conversation.
>
> **[4:21](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/agent-collaboration?u=76281980&t=261)** As you can see, the manager stopped the conversation once it has counted three images from the Dall-e assistant. You can view the detailed chat history by using the get chat message method of the agent group chat. You can also reset the agent group chat. Here, you will see that no more messages will be displayed. As you can see in this video, the multi-agent system was easier to implement thanks to agent group chat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (12), [[Microsoft Azure|Azure]] (2), [[Semantic Kernel]] (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - the (1)

#### [Challenge: Creating agents with Semantic Kernal](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-sk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-sk?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-sk?u=76281980&t=5)** - [Instructor] It's time for the next challenge using the [[Semantic Kernel]] Agent Framework. Your objective is to create a hiking agent for the Contoso Company. This agent will recommend hiking information, using information provided to it, and will also recommend [[Microsoft Products|products]] from Contoso's product line. Your tasks are the following. You will use the product PDF files as the source of documents. You can find these PDF files in this folder. You'll then create functions to provide basic hiking information. You'll create three functions to provide possible destinations, hiking budgets, and the weather. You will use the information provided in this notebook. You'll then use the Semantic Kernel OpenAI Assistant Agent, and use the File Search tool and plugin architecture. You then need to reformat the responses to display citations properly. Once you upgrade the agent, you'll run the agent, and ask the following questions. First, you'll ask a price in the product file to test the File Search tool. You'll then ask countries to hike and budget
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-sk?u=76281980&t=99)** to try out the different functions in the plugin. Finally, you will also ask a challenging question by asking the agent for products to purchase for a three-day hike in the US with a total budget of 1,000 US dollars. This agent has to consider not only the hiking budget, but also the total price of the products recommended. And finally, you should delete the file's thread and agent once you are completed. It is a given that you should be creating an [[Microsoft Azure|Azure]] OpenAI resource and saving the required parameters in the environment file. Since Semantic Kernel automatically handles getting your configuration from the file, you just need to ensure that you use the proper naming conventions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Kernel]] (3), [[Microsoft Products|Products]] (3), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** pdf (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Creating agents with Semantic Kernal](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-sk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-sk?u=76281980&t=0)** - So here's the solution to our challenge. We first get all our files in the file directory, and create a helper function to get the complete file paths of each file. We then create a hiking plugin that contains our three different functions, get_destinations, get_hiking_budget, and get_weather. Make sure you provide the appropriate descriptions for each function. We can then create a helper file to reformat_citations to the proper file names. We just copy over what we have in the previous videos. We create a kernel instance, and add the hiking plugin to the kernel. We then create a thread to contain all our messages.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-sk?u=76281980&t=69)** We then create a helper function that appends chat messages to our agent, and that invokes our agent as well. We now run the different queries to test the different capabilities. First question should test the file search tool. The second question uses the get_destinations function. And the third question uses the get_hiking_budget and get_weather functions. We have a challenging question by asking the agent to recommend [[Microsoft Products|products]] based on a total budget.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-sk?u=76281980&t=126)** The agent first computes that $150 is needed to hike for three days in the US. The agent then decides what products to purchase with the remaining amount. Finally, do not forget to delete the files, thread, and agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Code Identifiers:** get_destinations (2), get_hiking_budget (2), get_weather (2), reformat_citations (1)
> **CLI Commands:** make (1)
> **Speakers:** - so (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Autogen

[↑ Back to Table of Contents](#table-of-contents)

#### [AutoGen overview](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-overview?u=76281980&t=0)** - AutoGen is an open source framework designed by [[Microsoft]] researchers AI Frontiers Lab to build AI agent systems. It simplifies the creation and orchestration of event driven distributed agent applications, enabling multiple [[Large Language Models (LLM)|large language models]], tools, and advanced multi-agent [[Design Patterns]]. AutoGen requires [[Python (Programming Language)|Python]] 3.10 or later. The current stable version as of this recording is version 0.4. AutoGen has three major APIs. The Core API implements message passing, event driven agents, and local and distributed runtime for flexibility and power. This API is normally for advanced developers. AgentChat API built on top of the Core API implements a simpler API for rapid [[Prototyping]]. For those starting out with AutoGen, we suggest using this library. Finally, the Extensions API enables first and third party extensions, continuously expanding framework capabilities. It supports specific implementations of large language model clients, such as OpenAI, [[Microsoft Azure|Azure]] OpenAI and capabilities such as code execution. The ecosystem also supports two essential developer tools. AutoGen Studio provides a no-code GUI
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-overview?u=76281980&t=93)** for building multi-agent applications. AutoGen Bench provides a benchmarking suite for evaluating agent performance. In this chapter, we will focus on using the AgentChat API to create our agents and teams and the Extensions API to use Azure OpenAI and the docker command line executor. Before we continue, I would also like to share this article. Both [[Semantic Kernel]] and AutoGen are being improved and developed by Microsoft. The current thinking is to use Semantic Kernel for production use. Semantic Kernel is supported by Microsoft through services such as the Microsoft Unified [[Customer Support]]. AutoGen is not supported for production use. It may have very powerful multi-agent capabilities, which we will show in the next videos. If you wish to use AutoGen for your business, you can continue using it with community support only.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Semantic Kernel]] (3), [[Microsoft Azure|Azure]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Design Patterns]] (1)
> **Env Vars:** api (8), gui (1)
> **Analogies:** such as (3)
> **CLI Commands:** python (1), docker (1)
> **Versions:** python 3 (1), version 0 (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Definitions:** is an  (1)

#### [AutoGen Assistant Agent](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=0)** - [Instructor] Let's create some agents using AutoGen. The first step is to install the necessary libraries. This framework is continuing to undergo modifications. Best to always check the documentation and see what the latest version and updates are. The next step is to create an [[Microsoft Azure|Azure]] OpenAI resource. Save the needed configurations in your configuration file and load them in the notebook. Throughout this course, we have used the same naming conventions for our Azure configurations, so that code is consistent throughout. Since we will be using Azure OpenAI in AutoGen, we will be using the AzureOpenAIChatCompletionClient, which is available in Extensions API. We create the client by specifying the deployment, model, API version, endpoint, and API key. Next, we define an AssistantAgent, which is part of the AgentChat API. This agent is a built-in agent that uses a language model and has the ability to use tools. As you can see, creating the agent looks similar
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=95)** to how we created one in Sematic Kernel. We provide the name, description, Azure model client, and the system message. And we also provided a tool. We defined a function called get_weather() that has a city parameter and returns a weather, which is hard coded right now We create a text message by providing the content and the user parameters. We then run the agent using the run_stream() method.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=144)** We can also send images to the agent as long as we are using a multimodal AI model. In our case, [[GPT-4|GPT-4o]] mini can handle images.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=159)** You first display the image to the screen for cosmetic purposes. We then create a MultiModalMessage by passing the user query, the actual image, and the source. The run_stream() method is then used to run the agent. As you can see, the agent identified the city in the image and provided its weather. Chat history is automatically managed by the agent, as we can see in this user query, to show the past cities you have asked about the weather.
>
> **[3:31](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=211)** Sometimes, we may even want to view the agent's thought process in its final response. The on_messages() method allows us to do that. The response provided by this method provides the following, chat_message contains the agent's final response, inner_messages stores the agent's thought process that led to the final response. Since on_messages() appends messages to the agent's chat history, you should only call this method with new messages. Let's provide an example.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=256)** The on_messages_stream() allows you to stream the agent's messages.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=269)** on_reset() allows you to reset the initial state of the agent. In this example, we reset the agent and ask again about the history of our conversation, and the agent no longer knows. By default, the agent uses the full conversation history to the model. You can however modify this using the BufferedChatCompletionContext. In our scenario, we are setting the parameter to 8 to indicate the past eight messages. We then performed three queries to the agent.
>
> **[5:22](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=322)** As you noticed, each query contains four messages.
>
> **[5:31](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-assistant-agent?u=76281980&t=331)** So if we ask the agent the first city we asked about the weather, the agent will reply New York, given that you only saved the past eight messages,. save_state() allows you to save the state of an agent, while load_state() allows you to load from a file the agent state. In this example, we saved into the file the agent state and printed it on screen. And now, we ask the agent what the first city was that we asked about the weather. The agent will reply Tokyo, given that we're only using the past eight messages. We then override the agent state by loading the old state into the agent. We then ask the same question, and this time, the agent will again reply New York. If you recall, New York was the answer to the first city question before we saved the state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[GPT-4|Gpt-4o]] (1)
> **Code Identifiers:** run_stream (2), on_messages (2), get_weather (1), chat_message (1), inner_messages (1)
> **Env Vars:** api (4), gpt (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Other AutoGen agents](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/other-autogen-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/other-autogen-agents?u=76281980&t=0)** - [Instructor] We also have other preset agents in AutoGen besides the Assistant Agent. The Multimodal Web Surfer is a multimodal agent that acts as a web surfer that can search the web and visit web pages. This agent is perfect for scenarios that require us to get new data from the internet. It uses a different library, so this needs to be installed first. The agent also uses Playwright, so it also needs to be installed in the terminal as well as its dependencies. The web surfer comes from the Extensions API. This is how we define the agent. In our example, we are getting the latest weather information for a specific city based on the current date.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/other-autogen-agents?u=76281980&t=70)** The agent shares its thought process by sharing the webpage it uses to provide a response. Here you'll see the web surfer providing its final response based on its internet search. The OpenAI Assistant Agent allows you to utilize the capabilities of the OpenAI Assistant API, such as file search and code interpreter. Let us first show you a file search example.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/other-autogen-agents?u=76281980&t=109)** We first prepare the vector store like what we have done with OpenAI Assistant. We then create an agent. Notice that the syntax is very similar to creating an agent using the OpenAI Assistant API and [[Semantic Kernel]]. We defined the name, description, client, model, instructions, set the tools to file_search, and specify a vector store in the tool_resources. We then use the on_messages method to run the agent. And finally, once done, we have to delete the agent and its resources. The code interpreter example is similar. We prepare the files and create our agent. We specify the code_interpreter in the tools. And specify our file as well as a tool resource.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/other-autogen-agents?u=76281980&t=194)** Finally, the Code Executor Agent is an agent that extracts and executes code snippets found in received messages and returns the output. It is typically used within a team with another agent that generates code snippets to be executed. Docker must be properly set up in your [[GitHub]] [[Codespaces]] environment for this to work. We first create a DockerCommandLineCodeExecutor and provide it a working directory. This is a class that allows you to execute code within a Docker container. This is particularly useful for running code in an isolated environment, ensuring that the code execution does not affect the whole system. We then start the docker_code_executor. And then define a code_executor_agent that uses this docker_code_executor. We then pass it a code snippet. In a normal setting, you have another agent create the code snippet. We then use the on_messages method to have the Code Executor Agent run the code. Finally, the docker_code_executor must be stopped. You'll also observe that a [[Python (Programming Language)|Python]] file was created
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/other-autogen-agents?u=76281980&t=287)** in the same working directory we specified that contains the code. Now that we have discussed the different agents in AutoGen, let us create a team for these agents to collaborate with each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Kernel]] (1), [[GitHub]] (1), [[Codespaces]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** docker_code_executor (3), on_messages (2), file_search (1), tool_resources (1), code_interpreter (1)
> **CLI Commands:** docker (2), python (1)
> **Env Vars:** api (3)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** terminal (1), github (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [AutoGen RoundRobinGroupChat](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=0)** - [Instructor] A team is a group of agents in AutoGen that work together to achieve a common goal. We'll use the round robin group chat in this video. It is a team configuration where all agents share the same context and take turns responding in a round robin fashion. Each agent during its turn broadcast's its response to all other agents, ensuring that the entire team maintains a consistent context. We first load their [[Microsoft Azure|Azure]] configuration and create an Azure OpenAI client. We first create two agents. The second agent provides constructive feedback and must respond with approved [[Microsoft Word|word]] in order to terminate the conversation. We then create a text termination condition and specify the word approve as the termination text. We then create a round robin group chat indicating the agent participants, and determination condition. We simply call the run method to start the team.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=85)** When the team stops, it returns a task result object. This object will contain all the messages produced by the agents in the team. Similar to the agents on messages stream method, you can stream the team messages while it is running by calling the run stream method. This returns a generator that yields messages produced by the agents and the team as they are generated.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=123)** The console method provides a convenient way to print messages to the console with proper formatting. Here, you'll see a better breakdown of the conversation that happened between the user, primary and critic agents.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=144)** As you can see here, the chat history of the agents are automatically managed by AutoGen. You can reset the team by calling the reset method. This method will clear the team state, including all agents. It will call each agent's on reset method.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=172)** You can also stop the team from outside by using external termination. Calling set on external termination will stop the team when the current agent's turn is over.
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=189)** In our example, the team did not stop immediately. It allowed the current agent to finish its turn and broadcast the final message to the team before the team stops. This keeps the team state consistent. Since all teams are stateful, conversation, history and context are maintained after each run, unless you reset the team. You can resume a team to continue where it left off by calling the run or run stream method again, without a new task. Round robin group chat will continue from the next agent in the round robin order. In this example, critic agent continued where primary agent left off. You can also abort a call to run or run stream during execution by setting a cancellation token and passing that to the cancellation token parameter. Unlike stopping a team, aborting a team will immediately stop the team and raise a console error exception. AutoGen has other termination condition options. Here are some examples using three agents. Max message termination lets you terminate after a specific number of messages.
>
> **[4:43](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=283)** Remember that each agent reply counts as a message, including the user. Text mention termination terminates the conversation when the specific text is mentioned by any of the agents.
>
> **[5:06](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=306)** We already discussed external termination. Token usage termination terminates the conversation when the specified number of [[Tokens]] have been used.
>
> **[5:26](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-roundrobingroupchat?u=76281980&t=326)** Timeout termination terminates the conversation when the specified time has elapsed. And finally, source match termination terminates the conversation when the identified agent has finished responding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Microsoft Word|Word]] (2), [[Tokens]] (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Adding humans in the loop](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/adding-humans-in-the-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/adding-humans-in-the-loop?u=76281980&t=0)** - [Instructor] There are two main ways for users to interact with the AutoGen team from your application. During a team's execution of run or run stream, users can provide feedback through a UserProxyAgent. Once the run terminates, users can also provide feedback through input to the next call to run or run stream.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/adding-humans-in-the-loop?u=76281980&t=27)** The UserProxyAgent is a special built-in agent that acts as a proxy for a user to provide feedback to the team. In our example, we create two assistant agents with none of them specifying a termination condition. We then create a UserProxyAgent and use input as the input function to get user inputs from the console. We specify the approved [[Microsoft Word|word]] as the word that needs to be mentioned to terminate the conversation. We then create a RoundRobinGroupChat by specifying the participants and the termination condition. We then run the conversation. The primary agent is first in line, then the critic agent, and finally, the user proxy.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/adding-humans-in-the-loop?u=76281980&t=96)** Since none of the assistant agents would mention the termination keyword, the user proxy needs to mention it to terminate the conversation. When UserProxyAgent is called during a run, it blocks the execution of the team until the user provides feedback or errors out. This will hold up the team's progress and put the team in an unstable state that cannot be saved or resumed. Due to the blocking nature of this approach, it is recommended to use it only for short interactions that require immediate feedback from the user, such as asking for approval or disapproval with a button click or an alert requiring immediate attention. Otherwise, failing the task. Max turns allows you to pause the team for user input by setting a maximum number of turns. To implement this, we set the max_turns parameter in the RoundRobinGroupChat constructor. Once the team stops, the turn count will be reset again. When you resume the team, it will start from zero again. However, the team's internal state will be preserved. Let's explain what happened here. We first asked the team to create a poem. The primary agent made one and the critic agent provided feedback. The user then requested the team to add Tokyo.
>
> **[3:18](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/adding-humans-in-the-loop?u=76281980&t=198)** The primary agent complied and the critic agent provided feedback. We then typed exit to exit the conversation. In the last video, we did not discuss handoff termination. Handoff termination stops the team when an agent sends a handoff message. In our example, the critic agent first provides feedback and it then hands off to the user after for the conversation to be terminated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (1), is called (1)
> **Code Identifiers:** max_turns (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [AutoGen SelectorGroupChat](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-selectorgroupchat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-selectorgroupchat?u=76281980&t=0)** - [Instructor] SelectorGroupChat implements a team where participants take turns broadcasting messages to all other members. A large language model selects the next speaker based on the shared context, enabling dynamic, context-aware collaboration. In this type of group chat, the following steps are executed. Step one, the team analyzes the current conversation context, including the conversation history and the participant's name and description attributes to determine the next speaker using a model. You can override the model by providing a custom selection function. Step two, the team prompts the selected speaker agent to provide the response, which is then broadcasted to all other participants. Step three, the termination condition is checked to determine if the conversation should end. If not, the process repeats from step one again. When the conversation ends, the team returns the task result object containing the conversation history from this task. In this notebook, we'll create the same [[DALL-E]] and Vision multi-agent system we have created in previous videos. We again load our [[Microsoft Azure|Azure]] configuration and create the Azure OpenAI chat completion client and the Azure OpenAI clients for our other agents.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-selectorgroupchat?u=76281980&t=98)** We now create our agents. Our DALL-E assistant is an auto gen assistant agent with the generate_image tool. The generate_image function is the same one we have defined as well in previous videos. The Vision assistant is also another assistant agent with the same analyze_image tool. The main difference in this system is that we'll define a user proxy agent. This will be the user who can participate in the conversation. We then define a planning agent. This agent orchestrates the discussion between the DALL-E and Vision assistants, and we also provide this agent the approved plan. We then create the SelectorGroupChat with two termination conditions, TextMentionTermination to end the conversation when the user proxy sends approve, and MaxMessageTermination to limit the conversation to avoid an infinite loop as a precaution. We use run_stream to start the conversation. The planning agent starts off by providing the plan. Then the DALL-E assistant creates an image from the user input.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-selectorgroupchat?u=76281980&t=194)** The Vision assistant critiques the image and generates a new prompt. The DALL-E assistant gets the new prompt and creates a new image.
>
> **[3:35](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-selectorgroupchat?u=76281980&t=215)** The Vision and DALL-E assistants continue to converse with each other. The SelectorGroupChat has an internal model that determines who goes next. Once the whole process is done, the user proxy agent is prompted. We can either end the conversation by typing the termination keyword or providing an input to create a new image altogether.
>
> **[4:03](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-selectorgroupchat?u=76281980&t=243)** In this case, we terminated the conversation by typing the termination keyword. We saved the run_stream method in a response object, which allows us to print out the detailed breakdown of the whole conversation to see how the planning agent intervened after each agent provided a response. The planning agent first provided a plan and handed off to the DALL-E assistant. After the DALL-E assistant created an image from the user input, the planning agent speaks to orchestrate who goes next. The planning agent instructs the Vision assistant to perform the next task. The Vision assistant then critiques the image and provides a new prompt. The planning agent again intervenes to determine who goes next. In this case, it directs DALL-E assistant to create a new image. The conversation continues on till the whole plan is completed and the planning agent hands off to the user proxy. In this video, we demonstrated how SelectorGroupChat uses a model to determine which agent goes next in the conversation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (9), [[Microsoft Azure|Azure]] (3)
> **Env Vars:** dall (9)
> **Code Identifiers:** generate_image (2), run_stream (2), analyze_image (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [AutoGen Swarm](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-swarm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-swarm?u=76281980&t=0)** - [Presenter] Swarm implements a team in which agents can hand off tasks to other agents based on their capabilities. It is a multi-agent design pattern first introduced by OpenAI in an experimental project. The key idea is to let agents delegate tasks to other agents using a special tool call, while all agents share the same message context. This enables agents to make local decisions about task planning, rather than relying on a central orchestrator such as in SelectorGroupChat. The speaker agent is selected based on the most recent HandoffMessage in the context. This requires each agent in the team to be able to generate HandoffMessages to signal which other agents that it hands off to. In this notebook, we again use the same multi-agent system that we have created in the previous video.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-swarm?u=76281980&t=68)** We define our dalle agent, but this time we specify that it hands off to the planning agent through the hands of parameter and the system message. We then define our vision agent using the same steps as the dalle agent. We also specify that it hands off to the planning agent through the hands off parameter and the system message. We then create our user proxy agent and our planning agent.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-swarm?u=76281980&t=106)** Unlike the other agents, the planning agent can hand off to both the dalle and vision assistants, plus the user proxy. We then create a Swarm team by specifying the participants and the termination condition. We use run stream to initiate the conversation.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-swarm?u=76281980&t=140)** Let us print out the detailed breakdown of the whole conversation to see what happened. The team gets the user input and the planning agent receives this input and hands off to the dalle assistant.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-swarm?u=76281980&t=161)** After the dalle assistant creates the image, the dalle agent hands off the conversation to the planning agent. Let us print out the detailed breakdown of the whole conversation to see what happened. The team gets the user input and the planning agent receives this input and hands off the request to the dalle assistant. After the dalle assistant creates the image, the dalle agent hands off the conversation to the planning agent. Planning agent in turn hands off to the vision assistant. The vision assistant critiques the image, provides a new prompt and then hands off back to the planning agent again. The planning agent will eventually hand off the conversation to the user proxy. We then have an option to ask the agents to create a new image or terminate the conversation by typing approve. This video shows us how Swarm is different from SelectorGroupChat. Swarm allows individual agents to decide who goes next while the SelectorGroupChat has a model that acts as a central orchestrator to make the decisions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [AutoGen Magentic-One](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=0)** - [Instructor] Magentic-One is a multi-agent system for solving open-ended web and file-based tasks across a variety of domains. We can find more information about this team in the AutoGen documentation. It is based on a multi-agent architecture where a lead orchestrator agent is responsible for high level planning, directing other agents, and tracking task progress. Overall, Magentic-One consists of the following agents. Orchestrator is the lead agent responsible for task decomposition and planning, directing other agents and executing subtasks, tracking overall progress, and taking corrective actions as needed. WebSurfer is an LLM based agent proficient in commanding and managing the state of a Chromium-based web browser. It performs actions on the browser and reports in the new state of the webpage. FileSurfer is an LLM based agent that commands a markdown based file preview application to read local files of most types. It can also perform common navigation tasks such as listing the contents of directories and navigating a folder structure. Coder is an LLM based agent specialized in writing code, analyzing information collected from other agents, or creating new artifacts.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=95)** Finally, ComputerTerminal provides the team with access to a console shell where the coder programs can be executed and where new programming libraries can be installed Together, Majestic-One's agents provides the orchestrator with the tools and capabilities needed to solve a broad variety of problems. This notebook will show you different examples of how we can use Magentic-One. We first load our [[Microsoft Azure|Azure]] configuration and create an Azure OpenAI Client. We create a helper function to print out the detailed breakdown of the conversation. The first example shows you how Magentic-One works with an assistant agent. The assistant agent acts as a travel agent that creates travel plans.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=166)** As you can see here, the Magentic-One orchestrator is present to direct the other agents to complete the task. Since we only have one agent present, the orchestrator just works with this agent to create the travel plan. The second example shows you how it works with a multi-model WebSurfer to get information from the internet. As you can see in the discussion, the orchestrator has been instructing the WebSurfer on what to search online to get the desired result.
>
> **[3:32](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=212)** The third example shows you how it can work with a code executor agent. In this scenario, the orchestrator creates a [[Python (Programming Language)|Python]] code that the code executor will execute.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=230)** In this scenario, we are asking Magentic-One to solve queries from our Bigfoot dataset similar to what we have done in the previous videos. It is important to note that the CSV file must be in the same directory as the working directory of the Docker Code Executor.
>
> **[4:13](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=253)** Let's print out the breakdown. The breakdown of the conversation is quite long. We can see the orchestrator and the code executor exchanging messages back and forth til the desired goal is achieved. You'll observe that the orchestrator generates the code while the code executor executes them. Initially, the code executor failed because the module was not found. Thus, the orchestrator had to tell code executor what to do in order to correct the error. This shows you how the team self-corrects issues.
>
> **[5:08](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=308)** You'll see the different Python files that contains the different code the orchestrator created. And finally, you'll also see the image file of the column chart we need.
>
> **[5:28](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/autogen-magentic-one?u=76281980&t=328)** Finally, we have an example of a FileSurfer agent that has access to our hiking product files. The orchestrator will instruct the FileSurfer to open each file, and once the orchestrator founds a match, the product we are looking for, it will provide the response. The whole breakdown of the conversation is very long, but in the end, the FileSurfer found the file it needed and the orchestrator was able to provide the answer. In this example, we showed how the orchestrator could work with an assistant agent, WebSurfer, code executor, and FileSurfer. Imagine the possibilities working with all these agents together to make a multi-agent system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (1), docker (1), make (1)
> **Env Vars:** llm (3), csv (1)
> **Definitions:** is an  (3), is a  (1)
> **Analogies:** such as (1), similar to (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Creating agents with AutoGen](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-autogen?u=76281980&t=0)** - [Instructor] It's time for you to create a multi-agent solution using AutoGen. Your objective is to create a team of agents that will provide you a document that contains the following, a hiking plan, a weather forecast for the location you want to hike, and product recommendations for your hike. This document must be saved in AutoGen output folder. Using [[Microsoft Azure|Azure]] OpenAI with a [[GPT-4]] Omni model, you will create the following agents, a planning agent that delegates tasks, a multimodal web surfer that looks for weather information in the internet, a hiking agent that provides a hiking plan, a product agent that answers product recommendations from a file search tool. I suggest you use an OpenAI assistance agent for this product agent. A writing agent that creates a document that contains inputs from the weather, hiking plan, and product recommendations. A critique agent that critiques the other agents. And finally, you'll also add a user proxy for a person to intervene. You shall create a selector group chat. The conversation should terminate when approve is seen or after 50 turns, whichever comes first. You can then test the system with the following
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/challenge-creating-agents-with-autogen?u=76281980&t=93)** guide questions in this notebook. Input a prompt, such as I want to hike in the Grand Canyon, Arizona, USA. And then you as a user should also intervene to provide inputs to the final outcome. Have the team modify the final document by giving the following inputs, adding product prices if they haven't been added yet to the final document, adding pros and cons for each product that was recommended, and making the itinerary a two day hike if the hike provided is only a single day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[GPT-4]] (1)
> **Env Vars:** gpt (1), usa (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating agents with AutoGen](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980&t=0)** - [Lecturer] So here's the solution to our challenge. We load our [[Microsoft Azure|Azure]] configurations from the environment file and create an Azure open AI chat completion client. We then create our agents. Planning agent is given the task to break down complex tasks into smaller, manageable subtasks. We define in the planning agent's system message what each agent should do. The web server agent serves the internet for the latest information while the hiking agent creates a hiking plan. The critic agent critics the hiking plan, product suggestions, and the writing agent output. The writing agent combines the hiking plan, product suggestions, and whether advisory into a single document. The user proxy agent is the user who can intervene and provide input to the conversation. We also create our product agent. We first create a vector store that contains our product data and this product agent is created using the openAI assistant agent class. We provided the file search tool and the vector store is used as the tool resource.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980&t=98)** We do an optional step of testing if our product agent has access to the data. We then create a selector group chat. We create a text mention termination that is set to approve, and we also create a max message termination set at 50. We combine them together into one termination strategy within our operator. We then create the selector group chat by assigning the participants, the model client, and the termination condition. We now call run stream to initiate the conversation. The planning agent immediately ask by breaking down the tasks and assigning agents per task.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980&t=159)** The multi-model web surfer browses the internet for the latest weather information, and the hiking agent creates a plan. User proxy is eventually consulted on what to do.
>
> **[3:02](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980&t=182)** In some situations, the system may ask the user if they want any product recommendations. In this case, the output already has them. In some of my testing, the writing agent sometimes does not even create an output file. But in any case, in our scenario, everything seems complete. In the output file, we can ask the team for some modifications, such as adding prices and pros and cons to the product recommendations. Since the output file already has some prices, let's have them add the pros and cons.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980&t=226)** These are proxy experience will really vary as you saw there. Sometimes they get it right the first time. Sometimes, in this case, it took more than two times. Now we can also modify the hike by making the hike a two-day plan.
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/solution-creating-agents-with-autogen?u=76281980&t=251)** Okay, let's check the final output. The weather advisor is here, the hike is now a two-day plan. Here's day one, day two. Product recommendations are given. Each product has a price and a pros and cons. Okay, we approve. We can then print out the detailed breakdown of the conversation per message. It's kind of long one. Finally, once we are done, let us not forget to delete our product agent. So congratulations on creating a multi-agent system, comprising of six agents and a user proxy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **Code Identifiers:** openai (1)
> **Cross-References:** as you saw (1)
> **Analogies:** such as (1)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Key takeaways and next steps](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/key-takeaways-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/key-takeaways-and-next-steps?u=76281980&t=0)** - [Instructor] Congratulations for completing the course. I hope that the numerous code samples plus the challenges provided would've enabled you to learn and create agents. Here's to summarize what you have learned in this course. [[AI Agents]] are systems or programs capable of autonomously performing tasks for a user or another system by using a workflow and available tools. They can plan and sequence actions to achieve specific goals, use tools or plugins to perform different tasks effectively, perceive and process information from their environment, and remember past interactions and behaviors. There are many frameworks to create agents. We discussed in this course the following. The [[Microsoft Azure|Azure]] OpenAI Assistants API provides you the ability to create assistants with function calling, file search, and code interpreter capabilities. We also showed you how you can create an assistant using [[Azure AI Foundry]]. We then discussed the production-ready Sematic Kernel Agent Framework that is supported by [[Microsoft]]. We showed you how you can create complex agent systems with a lot less code. Within this framework, we discussed three main topics. Chat completion agent allows you to create an agent using a language model of your choosing. However, it needed client-side management of the chat history. The OpenAI Assistant agent lets you leverage on the capabilities of the OpenAI Assistant API, such as server-side thread management.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/key-takeaways-and-next-steps?u=76281980&t=95)** But this means you need to use OpenAI. Agent group chat allows you to easily enable interaction between multiple agents of different types. We then finally discussed the open source and experimental, but powerful AutoGen. We created many preset agents, such as the assistant agent that can use tools, the multi-model web surfer that can search the internet, the OpenAI Assistant agent that has the capabilities of the OpenAI Assistant API, and the code executor agent that can extract and execute code from a Docker container. From there, you created many different multi-agent systems called teams. Round robin group chat lets agents respond in a round robin fashion. Selector group chat has an internal orchestrator powered by a large language model to select the next speaker. Swarm allows individual agents to decide who goes next through a handoff message. Finally, Magentic-One is like the selector group chat. It has an orchestrator with a predefined set of other agents. To move forward from here, here are a few recommended next steps. You should keep yourself up to date with the latest documentation. These technologies are very new and will continue to change with new capabilities and replacements. There should be a new version of [[Semantic Kernel]] and AutoGen by the time you're watching this course. You may perhaps want to explore other frameworks. To be honest, I would rather stick to just one framework. But if there's already a library
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-for-developers-building-ai-agents/key-takeaways-and-next-steps?u=76281980&t=189)** that your team is already using to build [[Generative AI]] applications, chances are they do have an agent framework equivalent. Finally, you may want to study other topics, such as deployment, security, evaluating agent performance, and [[Responsible AI]]. As you eventually implement these in your business, these topics and considerations would be very necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Microsoft Azure|Azure]] (1), [[Azure AI Foundry]] (1), [[Microsoft]] (1), [[Semantic Kernel]] (1)
> **Env Vars:** api (3)
> **Analogies:** such as (3)
> **Cross-References:** we discussed (2)
> **CLI Commands:** docker (1)
> **UI Navigation:** select the (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ziggy Zulueta]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/azure-ai-for-developers-building-ai-agents-4283243/codespaces)

## Skills Covered

- OpenAI Products
- AI Agents
- Artificial Intelligence (AI)
- Semantic Kernel

## Path Context

### In [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]
← [[Azure AI for Developers- Azure AI Speech]] | **8 of 8**

## Appears In

- [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]

## Related Courses

_Courses sharing skills:_

- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — AI Agents, Artificial Intelligence (AI)
- [[Governing Agentic Ai Systems By All Tech Is Human]] — AI Agents, Artificial Intelligence (AI)
- [[Fundamentals of Agentic AI- Business Implications and Ethical Insights]] — AI Agents, Artificial Intelligence (AI)
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products

---

[↑ Back to top](#)