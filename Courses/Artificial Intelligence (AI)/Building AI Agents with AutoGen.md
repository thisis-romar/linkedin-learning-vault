---
type: course
cssclasses:
  - lle-course
slug: building-ai-agents-with-autogen
url: "https://www.linkedin.com/learning/building-ai-agents-with-autogen"
duration_minutes: 96
duration: 1h 36m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEaGkD0drYEfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1734115533562?e=2147483647&amp;v=beta&amp;t=j4Qna4rUwAkVN5mXU2KPJx8D7pnDubEPcz6-7uva8gs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Agentic AI Systems for Developers]]'
prev_courses:
  - '[[Introduction to Agentic AI- Getting Started with AutoGen Studio]]'
next_courses:
  - '[[Hands-On Agentic AI- Building AI Agents with LlamaIndex]]'
path_nav: '[{"path":"Building Agentic AI Systems for Developers","position":3,"total":6,"prev":"Introduction to Agentic AI- Getting Started with AutoGen Studio","next":"Hands-On Agentic AI- Building AI Agents with LlamaIndex"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20AI%20Agents%20with%20AutoGen.md)

![Building AI Agents with AutoGen](https://media.licdn.com/dms/image/v2/D4D0DAQEaGkD0drYEfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1734115533562?e=2147483647&amp;v=beta&amp;t=j4Qna4rUwAkVN5mXU2KPJx8D7pnDubEPcz6-7uva8gs)

# Building AI Agents with AutoGen

> In this comprehensive, Harshit Tyagi—a data science instructor and mentor—equips you with the skills to develop AI agents using the AutoGen framework. Covering key design patterns such as Reflection, Tool Use, and Multi-Agent Collaboration, this course enables the creation of multi-agent systems capable of handling complex tasks autonomously. Through hands-on projects, you will integrate external 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen) | 1h 36m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Let's build some AI agents with AutoGen](#lets-build-some-ai-agents-with-autogen)
- [**1. AI Agents with AutoGen**](#1-ai-agents-with-autogen) (4 videos)
  - [Understanding AI agents](#understanding-ai-agents)
  - [Overview of the AutoGen framework](#overview-of-the-autogen-framework)
  - [Configuring LLMs and setting up AutoGen](#configuring-llms-and-setting-up-autogen)
  - [Building a basic](#building-a-basic)
- [**2. Developing a Research Assistant**](#2-developing-a-research-assistant) (4 videos)
  - [Multi-agent conversation](#multi-agent-conversation)
  - [Research assistant design](#research-assistant-design)
  - [Creating agents for the assistant](#creating-agents-for-the-assistant)
  - [Creating tasks for the agent](#creating-tasks-for-the-agent)
- [**3. Solving Complex Tasks Using Nested Chats**](#3-solving-complex-tasks-using-nested-chats) (3 videos)
  - [Nested chats to add multi-level reviewing](#nested-chats-to-add-multi-level-reviewing)
  - [Creating reviewer agents](#creating-reviewer-agents)
  - [Creating nested chat](#creating-nested-chat)
- [**4. Tool Use and Adding Internet Capability**](#4-tool-use-and-adding-internet-capability) (4 videos)
  - [What are tools?](#what-are-tools)
  - [Add calculation tool to math tutor agent](#add-calculation-tool-to-math-tutor-agent)
  - [Register tools and run the agent](#register-tools-and-run-the-agent)
  - [Add web search ability to the research assistant](#add-web-search-ability-to-the-research-assistant)
- [**5. Building an End-to-End Coding Copilot in Autogen**](#5-building-an-end-to-end-coding-copilot-in-autogen) (4 videos)
  - [Code executors in AutoGen](#code-executors-in-autogen)
  - [Create agents](#create-agents)
  - [Define task to analyze data](#define-task-to-analyze-data)
  - [Execute user-defined code in AutoGen](#execute-user-defined-code-in-autogen)
- [**6. Teachable Agents**](#6-teachable-agents) (3 videos)
  - [Introduction to teachable agents](#introduction-to-teachable-agents)
  - [Setting up teachable agents](#setting-up-teachable-agents)
  - [Teaching and retrieving information](#teaching-and-retrieving-information)
- [**7. Building a Data Analysis Company with Group Chat**](#7-building-a-data-analysis-company-with-group-chat) (3 videos)
  - [Organizational structure of agents](#organizational-structure-of-agents)
  - [Build the group chat](#build-the-group-chat)
  - [Speaker selection config](#speaker-selection-config)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with AutoGen](#next-steps-with-autogen)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Let's build some AI agents with AutoGen](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=0)** Imagine having a team of [[AI Agents]] at your fingertips, collaborating to solve complex problems, conduct research, and even write code. That's the power of AutoGen, and I'm here to help you master it. In this course, you'll learn to create and manage multi-agent conversations, develop a smart research assistant, implement nested chats for advanced problem-solving, add internet capabilities to your agents, build end-to-end coding copilots, and even create a teachable agent that learns from you. Hi, I am Harshit. I am an expert in AI development and I am excited to guide you through this cutting-edge technology. So let's begin!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1)
> **Analogies:** imagine (1)


### 1. AI Agents with AutoGen

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding AI agents](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=0)** [[AI Agents]] are sophisticated software programs designed to perform tasks autonomously. At the core of an AI agent is its ability to process and understand language through [[Large Language Models (LLM)|large language models]] or LLMs. These agents can access and analyze various documents, extracting relevant information to support [[Decision-Making]] process. They are equipped with a toolkit of specialized functions, allowing them to perform a wide range of tasks efficiently. AI agents can engage in natural language conversations, understanding context. Additionally, they can interact with [[Databases]], storing and retrieving information as needed to complete their assigned tasks. With all of these capabilities combined, AI agents become powerful assistants capable of handling complex workflows from data analysis to [[Customer Support]], revolutionizing how we approach problem-solving and task automation. Think of an AI agent as a super smart digital version of a human assistant, but instead of coffee breaks, they take data breaks to learn and improve. Let's see an AI agent in action. Meet Alex, an AI agent designed to manage a marketing agency.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=96)** Alex can analyze marketing trends using [[Real-Time]] data, generate creative content ideas, coordinate with team members, schedule social media posts, and even predict campaign performance. The best part? Alex learns from every interaction, constantly improving its performance. Unlike a human assistant, Alex can handle hundreds of tasks simultaneously, 24 hours a day without getting tired or making errors due to fatigue. AI agents like Alex can also work alongside humans, enhancing our capabilities rather than replacing us. They're not just tools, they are collaborators. Exciting, right? But how do we create AI agents like Alex? That's where the AutoGen framework comes in. In the next video, I'll show you how we can use frameworks like AutoGen to create our own agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (5), [[Large Language Models (LLM)|Large language models]] (1), [[Decision-Making]] (1), [[Databases]] (1), [[Customer Support]] (1)
> **Cross-References:** in the next (1)

#### [Overview of the AutoGen framework](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=0)** AutoGen is a multi-agent conversational framework for building [[AI Agents]] with different roles to solve tasks using different tools and patterns. It is made available to us as a [[Python (Programming Language)|Python]] library, and to install, you can simply use the command pip install pyautogen in your virtual environment. In AutoGen, an agent is an entity that can send messages, receive messages, and generate a reply using [[Large Language Models (LLM)|large language models]], tools, human inputs, or a combination of them. An agent can be powered by models such as large language model like [[GPT-4]], code executor, such as an IPython kernel or a human, or a combination of these, and there could be other pluggable and customizable components that you can configure. AutoGen has a built-in agent called ConversableAgent. It combines multiple components in the same class. It comes with a lot of functionalities, a list of LLMs, a code executor, a function, and tool executor, a component for keeping human in the loop. You can switch each component on or off and customize it to suit the need of your application. We can also create different agent roles using the same interface.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=97)** Next, I'll show you how to start building these agents, what the required setup is, and I'll explain how to configure these LLMs to power these agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Python (Programming Language)|Python]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[GPT-4]] (1)
> **Prerequisites:** install (2), configure (2), setup (1)
> **CLI Commands:** python (1), pip (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** gpt (1)

#### [Configuring LLMs and setting up AutoGen](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=0)** At the core of an AI agent is large language model. LLMs basically enable agents to converse in natural languages and transform between structured and unstructured text. So in this video, first, we need to configure the [[Large Language Models (LLM)|large language models]] that are going to be powering our [[AI Agents]]. First of all, we need to import all the required libraries. I'm importing autogen to create our AI agents, the os module to access all the directories and files, and dotenv package allows us to load all the environment variables using the load_dotenv() function. Now all our environment variables are going to be stored within this hidden file called dotenv. So all of our API keys are going to be stored within this file. Let's quickly run this. So it has returned true. That means all our environment variables are now loaded in the runtime. Next step is to configure the large language model. That means we need to specify which model we are going to be using and who is going to be providing that service, providing that model. We are using OpenAI's [[GPT-4|GPT-4o]] for this entire course. So llm_config is my [[Python (Programming Language)|Python]] dictionary, which essentially has two keys. One is the model where I need to specify which model we are using,
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=94)** and then API key. This API key is something that you will have to create on your own. The instructions are provided in the lecture notes. os.getenv is going to get that API key corresponding to the string OPENAI_API_KEY, which is already present in your dotenv file. Run this and your llm_config dictionary is now ready, which will further be passed on to your AI agents. But let's say you want to use multiple large language models. That means one is from OpenAI, one is from some other provider. Or if you want to use any open-source large language model, that is also possible. In this case, we are going to create a list of LLMs, a list of dictionaries. So here I have config_list which is a list of dictionaries. Each dictionary represents a model. I need to specify again the model name. So GPT-4o is going to be the first model that I'm using here along with the API key which is going to come from my dotenv file. Then the second model is [[LLaMA]]-7B. Here, I have configured it because I'm running it on my local system at this particular local server. So the link, the base URL corresponds to 8080 port which is running on my system using a service called Llama. So if you want to use multiple LLMs, you can configure it using config_list method.
>
> **[3:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=192)** Here, your config_list is now ready. You can use multiple LLMs in this particular manner. Throughout the course, we'll be using one single LLM. So we are going to be using this configuration throughout the course. In the next video, we'll see how to create a basic chatbot and use these LLMs to create a ConversableAgent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (3), [[LLaMA]] (2), [[Python (Programming Language)|Python]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** api (5), gpt (2), openai_api_key (1), url (1), llm (1)
> **Code Identifiers:** config_list (3), llm_config (2), load_dotenv (1)
> **Prerequisites:** configure (3)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Building a basic](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=0)** Now that our setup is ready, let's quickly build a basic agent that we can chat with. This agent will understand what we are asking and will generate a response for us using [[Large Language Models (LLM)|large language models]]. For this, let's quickly import all the required libraries first of all and load our environment variables from the dotenv file. I'll run the cell. So that's done. The next step is to configure the large language model. We're using [[GPT-4|GPT-4o]] from OpenAI. Let's run this. The llm_config is now ready. So in order to create this chatbot, we are going to create an AI agent which is of the type ConversableAgent provided by AutoGen. Now in AutoGen, you can assign roles to agents and you can have them participate in conversations. And a conversation is nothing but a sequence of messages exchanged between agents. So here we have, first of all, imported ConversableAgent class from AutoGen. Next, we are going to instantiate this ConversableAgent class and we'll store that in the agent variable. In this, the parameters that you need to provide in order to create an agent. First of all, the name. Here, we have provided the name chatbot in a string. Then you need to pass on the llm_config. So the llm_config parameter will take
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=97)** the dictionary or the list of dictionary, which will capture all the details about the large language model that you are supposed to use within the agent. So we have used the llm_config variable that we created above. The next step is human input mode. Here, I have marked it as never. That means a human will not be able to interrupt the chat, will not be able to provide input when the agent is working. If you set it to true, you can pass your input when the agent is working. Let's quickly run this to create our agent. Our agent is now ready. In order to generate a reply from the agent, we can use the .generate_reply method. Here, you need to pass messages. Now messages is nothing but a list of dictionaries. In this dictionary, you need to first of all specify your query which goes in the key content. So content is going to be your query. Here I'm asking how to make delicious ramen. My role when I'm asking this query is of a user. So role key has user specified. I have closed the method. Print reply. I'll run this cell, and there you go. This is the response from the agent using the large language model, GPT-4o from OpenAI.
>
> **[3:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=191)** So all of the ingredients, steps, instructions to make everything has been provided by this agent. We can ask another query how to set up a marketing campaign. And these are all the steps. So you can see this is in markdown format. All the steps to create a marketing campaign. So now we have built a basic agent, a basic chatbot using AutoGen. In the upcoming chapters, we are going to see how to make more sophisticated [[AI Agents]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[AI Agents]] (1)
> **Code Identifiers:** llm_config (4), generate_reply (1)
> **CLI Commands:** make (3)
> **Prerequisites:** setup (1), configure (1), set up (1)
> **Env Vars:** gpt (2)


### 2. Developing a Research Assistant

[↑ Back to Table of Contents](#table-of-contents)

#### [Multi-agent conversation](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=0)** Now that we have learned how to set up our environment, how to configure [[Large Language Models (LLM)|large language models]], and build basic [[AI Agents]], it's time to dive into multi-agent conversations. Here we're going to simulate a conversation between a student and a math tutor. I've imported the required libraries: OS for interacting with the operating system, ConversableAgent from AutoGen. This is going to be our main tool for creating [[Conversational AI]] agents. Loaded all the environment variables from the dotenv file. My LLM is configured. We can change this to llm_config or you can pass on the config_list as well. The next step is to set up our conversation between the student agent and the tutor agent. So first of all, we are creating our student agent here. This is a ConversableAgent. So I've instantiated the ConversableAgent here. The name is student, system message; you are a high school student struggling with algebra. I have passed on the llm_config. So this is going to be a config_list as per the definition above. Human input mode is set to never. This means that the agent will not ask for human input during the conversation. So run this. Our student agent is now ready. The next step is to create the tutor agent. This is also a ConversableAgent.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=93)** Name is tutor, system message; you are a patient and knowledgeable math tutor, your goal is to help students understand algebra concepts. So llm_config here is well, human input mode, never. So both of our agents are now ready, the student as well as the tutor. The next step is to initiate the conversation between them. So the student here is initiating the chat using the initiate_chat method of the student agent. And then recipient is going to be the tutor agent. We provide an initial message from the student. That means the message is I am really struggling with quadratic equations, can you help me understand them better? Max turns is equal to two. That means this limits the conversation to two turns, one exchange each way. Run this. And this is the output. This is the conversation between the student and the tutor. So initial message, then the tutor tries to explain with an example. Tutor asks would you like to work through a specific example, so an exercise. Student worked on an example. And then the tutor's response was absolutely, let's work through a specific example together. So this was their complete conversation that happened. If you want to print the result, the summary chat history, we can use result. chat_history attribute to capture the history. So this will contain all the messages corresponding to the content key and a list of dictionaries.
>
> **[3:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=191)** Similarly, you can check the cost of each call and the summary of the conversation as well. Great. Next is the termination condition. So these cells redefine our agents here with a termination condition. So here you can see while defining the student agent, I have passed the parameter, is_termination_msg. This function, this is a lambda function here. This function checks if the [[Microsoft Word|word]] exit is in the message content, allowing the conversation to end naturally. So run this. And here we have simulated the conversation. I'm really struggling with quadratic equations, can you help me understand them better, and then say, exit. So if exit is found in the message response then the conversation would end. So I have intentionally added it here so that I can showcase how this termination end condition is going to get triggered. So you can see I hope this clarifies how to tackle quadratic equations. And at the end, you can see the tutor has responded with exit, which would have triggered this condition that we have in the student agent. So our conversation ended right here without going for the second turn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Conversational AI]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** llm_config (3), config_list (2), initiate_chat (1), chat_history (1), is_termination_msg (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** set up (2), configure (1)
> **Env Vars:** llm (1)

#### [Research assistant design](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=0)** In this video, we are going to dive into an exciting application of multi-agent AI systems. We're going to create a research assistant for marketing videos. Now the system will demonstrate how we can leverage multiple [[AI Agents]], each with specialized roles to streamline the creative process and video marketing. This is our research assistant. It has four key components. First is the assistant itself, which will oversee the entire process. Then we have an idea generator, a script writer, and a reviewer. These components work together to take a campaign topic and transform it into a polished video script. Let's see how it works. So first, a manager which could be a human or another AI agent, provides a campaign topic. This sets the direction for our entire creative process. Next, our idea generator goes to work. The agent produces multiple ideas based on the given topic. It's designed to think creatively and generate a variety of concepts that could work for our marketing video. Then the manager reviews these ideas and selects one to develop further. This step ensures that we are focusing our efforts on the most promising concept. Once an idea is selected, our scriptwriter takes over. The agent is tasked with creating a full script based on the chosen idea.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=96)** Finally, our script reviewer analyzes the completed script. This agent provides detailed feedback, looking at aspects such as like coherence, engagement, and alignment with the original campaign topic. To bring this system to life, we'll follow these steps. First, we'll create these agents for each specific role. Next, we'll create tasks for each agent. These tasks will define what each agent needs to accomplish and how it should interact with the others. These are basically system messages that we'll have to configure. Finally, we'll initiate chats between the agents to achieve our goal. This is where the magic happens. Our agents will communicate, share ideas, and work together to produce the final script. It's time to code this entire research assistant for our marketing campaigns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)

#### [Creating agents for the assistant](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=0)** Let's start building our marketing video research assistant. Here we will set up four distinct agents using the AutoGen library, where each agent will play a crucial role in our video-creation pipeline. Let's start by importing all the necessary libraries. Run this cell. Configure the large language model. The first agent that we are creating is the manager proxy agent. Now this agent will act as the interface between the human user and our AI system. Let's break this down. We are using a user proxy agent instead of a conversable agent because this agent represents the human users' interests. The system message here defines the agent's role and responsibilities. So you are a marketing campaign manager, your role is to provide campaign topics, evaluate ideas and scripts generated by the creative team. Human input mode is set to never, which means agent won't prompt for human input during execution. We have set code execution for this agent as false as it is not needed for its role. Providing the LLM configuration. That's it. Our manager proxy agent is now created. Let's move on to the idea generator agent. This is a simple conversable agent. It is responsible for coming up with creative ideas for our marketing videos.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=97)** So notice how the system message is now more detailed, providing specific instructions on what the agent should do. Generate innovative campaign ideas based on the given topic, suggest potential storylines, provide a brief outline for each idea. Then provided with the LLM capabilities by passing on the config variable. Human input mode here also is set to never. Create the idea generator agent. The next agent is script writer agent. This will again be a convertible agent. We're using a detailed system message to guide the agent's behavior and output. This is an expert script writer for marketing videos. Your role is to develop full scripts, include dialog, scene descriptions and camera directions, so on and so forth. So run the cell and our script writer agent is also ready. Finally, we create our script reviewer agent. Now, this agent will provide crucial step of reviewing and refining our scripts to ensure they meet our quality standards. So run this and our script reviewer agent is now also ready. It's time to bring all of these agents together and start working on a project. Let's see how to do that in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Cross-References:** coming up (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (1), configure (1)

#### [Creating tasks for the agent](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=0)** Now that our specialized agents are ready, it's time to create tasks for each of these agents, initiate the conversation between them, and complete our video-creation pipeline. So we have imported the libraries, configured the large language model. This is our manager proxy agent, which is going to oversee the process and evaluate ideas and scripts. Further, we have idea generator agent. This will create innovative campaign ideas. Script writer will write scripts, full scripts on the selected ideas. Then we have script reviewer agent which will analyze and provide feedback on the script. Now this is where we are going to add tasks to each of these agents. Now we'll do this by defining a list of chat interactions. So this is a sequential interaction here. We have a list of dictionaries called chats. Here each dictionary represents a task or conversation. So if you look at the first interaction here this is happening between the manager and the idea generator. So sender and recipient specify which agents are involved. Then we have the message which contains the instruction or query for the task. Hello, I need creative ideas for our new marketing campaign. Our product is eco-friendly, home cleaning [[Microsoft Products|products]]. Could you generate three to five innovative campaign ideas? Then we have summary method, summary arguments which specify how the conversation is going to be summarized.
>
> **[1:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=95)** Maximum turns between the two agents is set to two. You can increase or decrease this. Clear history; this determines whether to clear the conversation history before starting. Then we have the second interaction between manager and script writer, third interaction between manager and script reviewer. And finally, we need to make a decision which will be made by the manager itself. And we'll make a final decision on the script, which is an interaction from manager to manager. So each task is structured similarly with specific messages and summary prompts tailored to the task at hand. So this is our sequential chat, which is a list of dictionary. Let's quickly set this up. So our chats are set up. Now we need to use initiate chats and we provide the initial list of dictionaries, the messages, to this function. We can initiate the conversation using this function which will start the conversation defined in our chat lists. So run this and here is a complete conversation. So manager to idea generator with the message. Idea generator generates ideas and then manager asks to make some improvements. So provided some feedback. Idea generator worked on those suggestions. Then script writer started writing scripts.
>
> **[3:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=190)** Then we have reviewer providing feedback on the script. And finally, we had the manager make the conclusion in the final interaction that we need to incorporate some revisions and suggestions, which will enhance its effectiveness and reliability. So if you want to provide or look at the summary of the complete chat, we can look at it in this manner. So there were multiple chats that happened. So this is a for loop that we have run here. Finally, if you want to look at the cost of each call, you can check the cost attribute as well. So this way, we have set up multiple agents and we have all of them interacting and contributing to each other to the complete video-creation task, which gets our marketing video campaign running. So here this completes our marketing video research assistant pipeline from generating ideas to producing a final reviewed script. Next, we'll see how to make more of such sophisticated interactions in the upcoming chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** set up (2)


### 3. Solving Complex Tasks Using Nested Chats

[↑ Back to Table of Contents](#table-of-contents)

#### [Nested chats to add multi-level reviewing](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=0)** In this chapter, we're going to focus on solving complex tasks with nested chats in AutoGen. Now nested chats is a sequence of chats created by a receiver agent after receiving a message from a sender agent and finished before the receiver agent replies to this message. So how is this possible? Nested chats allow AutoGen agents to use other agents as their inner monolog to accomplish tasks. In simpler terms, nested chats allow an agent to have its own internal dialog, or you can say, consult with other agents before responding to a message. So let's try to understand this using an example scenario. Here we want to build a pipeline where we could write or automate the process of writing blog posts. We have user proxy that represents the user manages the overall process, a writer agent specialized in writing engaging blog posts. And then we have a reviewer agent, expert in critiquing and improving the written content. So how will this work? We have the user proxy agent that issues the initial query to a writer that write a blog post on GPUs. This user proxy agent acts as a proxy for the user. Whenever an initial writing is provided, a critic or a reviewer should be invoked to offer critique as feedback.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=96)** Now, this workflow can be realized by a three-agent system as you are seeing over here. The system includes a user proxy agent and a writer agent communicating with each other, with a reviewer agent nested within the user proxy agent to provide critique. Whenever the user proxy receives a message from the writer, it engages in a conversation with this reviewer agent to work out feedback on the writer's message. And this way, nested chats basically represent a powerful technique for creating more sophisticated AI agent interactions. Now they'll allow us to model complex, multi-step processes and implement quality control measures within our AI system. And in the next lesson, we'll start diving into the technical details and implementation of how nested chats can help us solve these complex tasks.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Creating reviewer agents](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=0)** In this lesson, we'll focus on creating specialized agents for our nested chat system. We'll set up a writer agent and a reviewer agent, then demonstrate how they interact in a simple review process. I have imported the required libraries, configured the large language model. Let's create our writer agent first. We're using the assistant agent class to create our writer. Now, assistant agent is specialized for AI assistant-like interactions, making it ideal for our writing task. It is designed to work seamlessly with advanced language models and can be easily customized through its system message. So I've provided the name, then the system message, and provided it with llm_config to be able to access our [[GPT-4|GPT-4o]] from OpenAI. Run this. Our writer agent is now ready. The next step is to define the task for this writer. So here, I have written a multi-line string, write a concise but engaging blog post about GPUs. So the task is defined. In order to test out the writer agent, I can use the generate reply method here. So writer.generate_reply, and you can pass the messages as a list of dictionary. Where the dictionary should contain content. Content is basically the message, the prompt for the agent, which is defined in the task variable here and the role is of a user. So a user is asking to write a concise blog post.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=96)** So generate a reply and has the reply from the writer. So it has written a concise blog post on GPUs. The next step is to create a reviewer agent. So just like a writer agent, we have reviewer agent which is created using AssistantAgent class, name, reviewer, is_termination_msg, and llm_config. Finally, the system message to configure our reviewer agent. This is done and we can now initiate the chat between our writer agent and reviewer agent. So reviewer is initiating the chat, recipient is going to be the writer, and summary method is based on the last message. So the task here is same as the task variable that we have defined above. Run this. So here you can see, write a concise but engaging blog post about GPUs. Writer wrote this, reviewer provide feedback, and then writer incorporated that feedback. So this was a simple interaction. Let's see how to add more nested elements within this workflow.

> [!info]- Semantic Content
>
> **Code Identifiers:** llm_config (2), generate_reply (1), is_termination_msg (1)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** gpt (1)
> **Analogies:** just like (1)

#### [Creating nested chat](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=0)** We have created a simple writer reviewer process for setting up our blog post writing pipeline. But with nested chats, we can accomplish a lot more. So in this lesson, we are going to add multi-level review process to our blog post writing pipeline. I've imported the libraries, configured our large language model. We have already created a writer agent. We have our reviewer agent also, but it's time to add some specific reviewer agents. First of all, we are going to add a specific SEO reviewer. Now this reviewer is going to be making our content SEO-friendly. So it's going to give us steps on how to make our blog post rank better in search engines. Here also, we are using assistant agent. We have provided an appropriate name, llm_config, and then the system message for this SEO reviewer agent. Run this. Your SEO reviewer agent is created. Similarly, we have created a grammatical error reviewer, so this is going to focus on the grammatical issues with the content. It's going to make it crisp and error-free. Define this. Then we have our [[Ethics]] reviewer. This reviewer is keeping us honest. It's going to look for ethical issues in our content. Then finally, we have the meta reviewer. Now this meta reviewer is like the team lead. It's going to look at all the feedback from our specialized reviewers
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=96)** and will give us the final overview. So let's create the meta reviewer as well. Now we need to orchestrate this nested chat. And this is where the magic happens. Let's go through this. So we're going to break down two crucial components here. First is this function, reflection_message. And then we have review chats list. This function is pretty clever. Here's what this is doing. It takes four parameters: recipient, messages, sender, and config. Recipient is the agent who will receive the message. Messages is the full conversation history. Sender is the agent who sent the original message. And config if there is any additional configuration that is being sent. Then what it does is it constructs a message asking to review some content. So review the following content. And then this is how in this last line they are accessing the last message in the conversation history. So this minus one over here indicates that we are trying to access the last message. Get the last item in the list. So this returns this as a formatted string essentially saying, hey, review this content which is the last message in the conversation history. Now the function is crucial because this allows each reviewer to automatically get most recent version of the content to review without us having to manually pass it around.
>
> **[3:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=191)** Here's how this is happening. Now, this list is like a playbook for our nested chats. Each dictionary in this list represents a step in our review process. Let's break it down. Here we have the recipient who is going to receive the message in the first entry. This is our SEO reviewer message. This is either a string message or a function that generates a message. Then we have summary method that tells the agent how to summarize its review. Summary arguments; these provide additional arguments for the summary method, and we have max turns that limits how many back-and-forth messages can occur in this nested chat. Similarly, there are dictionaries for grammatical error reviewer, ethics reviewer, and finally the meta reviewer. In the meta reviewer, we have configured it a little bit different. Instead of using the reflection message to review the content, here, we are asking it to aggregate all the feedback. So this is how we have set up our nested chat. Let's run this. And here we are going to register our nested chats. So the list structure allows us to define a complex multi-step review process in a clear and organized way. When it comes to registering, so we tell our general reviewer, so you can see I have used the general reviewer that we have defined above.
>
> **[4:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=289)** This general reviewer is going to register the nested chats. So we have passed the review chats list and the trigger is the writer. As soon as the writer writes the content, the blog post, the review, nested chat is going to get triggered. Finally, we initiate the chat. So the reviewer, the main reviewer, the general purpose reviewer is going to initiate the chat. Recipient is going to be the writer, which is going to get the query to write a blog post on a topic. Message, we have already defined the task above to write blog post on GPUs, and then we'll trigger our complete review pipeline. So run this and there you go. We have reviewer to writer, the first query, then writer to reviewer, and further SEO review. So all of these are happening at this point. Now you can see that general-purpose reviewer is asking specialized reviewer to do their job, reviewer to SEO reviewer, then to grammatical error reviewer, and all of these specialized reviewers are also sending their responses back to the reviewer. So this is the inner monolog that is happening right now. So you can see all the specialized reviewers are coming back with their responses on the content that has been written. And finally, if you want to look at the summary of all these chats or the last message, this is the complete summary of our content and the feedback that has been provided by specialized reviewers.
>
> **[6:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=387)** So these are the kind of complex tasks that we can solve very easily using nested chats. So we have created a general-purpose reviewer, which has access to all these dedicated, specialized reviewers to provide a wholesome overview on the content that our writer has written.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (2)
> **Env Vars:** seo (7)
> **CLI Commands:** make (2)
> **Code Identifiers:** llm_config (1), reflection_message (1)
> **Prerequisites:** set up (1)


### 4. Tool Use and Adding Internet Capability

[↑ Back to Table of Contents](#table-of-contents)

#### [What are tools?](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=0)** In this lesson, we'll dive into an exciting topic. Tools. This is a crucial concept that enhances the capabilities of our [[AI Agents]], allowing them to perform a wide range of tasks more effectively. So tools are basically predefined functions that our agents can call to perform specific actions, and these actions can include searching the web, reading files, performing calculations, or calling APIs. So essentially, tools extend the capabilities of our agents. Let's look at how to use these tools with our agents. First of all, you'll have to define tool function. You can register the tools with the agents so that they have access to the right tool, to the right function that you have defined. Then we'll have to implement tool-calling logic. And lastly, we'll have to handle the response from the tool from our custom function. Let's break these down one by one. First, you need to create the function that will serve as your tool. So a function to perform web search or it could be performing some sort of mathematical operation, a function to read and parse specific file types, or maybe just an API caller. Then you would register this tool just like you registered the llm_config with the agent.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=93)** Once you have defined your tools, you need to make your agents aware of them. So creating a list or dictionary of available tools. You can associate each tool with its function and a description of what it does. Then you pass this information to your agent during the initialization itself. Third step is to implement tool-calling logic. Here, you are analyzing the current task or query. So you determine if a tool necessary to complete the task. Selecting the appropriate tool based on the task requirements. You will formulate the correct input for the chosen tool. And lastly, in order to handle the response from the tool, you will have to interpret the results returned by the tool. You'll have to incorporate the new information into its [[Decision-Making]] process. Determine if further tool use is necessary, formulate a response or the next action based on the tool's output. So all in all, tool use is a powerful feature that significantly expands the capabilities of our AI agents. And in the next lesson, we'll put this knowledge into practice by adding a calculation tool to our math tutor agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (2), [[Decision-Making]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** llm_config (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Prerequisites:** initialization (1)

#### [Add calculation tool to math tutor agent](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=0)** It's time to dive into a practical example. We're going to add a calculator tool to a math tutor agent using AutoGen. I have imported all the required libraries and configured my large language model. It's time to define the calculator tool, which is basically a [[Python (Programming Language)|Python]] function that takes in two integers. And we can define multiple operators that this tool will support. So what I've done in this code snippet, first of all, we have imported annotated and literal from the typing module for type hinting. So this basically specifies the expected types of the inputs and output. Then we define the operator type that can only be plus, minus, multiplication, and division. This is the code if else. And at last, it raises a value error. So the function performs the requested operation and returns the result or raises a value error if an invalid operator is provided. So let's define our calculator tool, which in this case is this Python function. Further, we'll now create our math tutor agent. Here, I'm using the ConversableAgent class from AutoGen in order to create our math tutor.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=93)** I provided the name assistant, system message for this tutor. And finally, the llm_config. You can simply remove this and keep it as your llm_config variable as defined above here. Run this, and your assistant will also be created. Post this, I have also created a user proxy agent. So this agent will interact with our math tutor assistant. It's configured to not use an LLM, so llm_config has been set to false. And I've also passed the is_termination_msg which means that if the message contains the [[Microsoft Word|word]] terminate, we'll end the conversation right there. We have set human input mode to never meaning it won't prompt for human input during the execution. So in this lesson, we have not only learned about the tool use in theory but also seen how to implement it in practice. We have set up our calculator tool and created our math tutor agent that can use this tool to perform the calculation. In the next lesson, we will see how to register this tool with our agent and run a conversation that demonstrates the agent's ability to use this calculator tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** llm_config (3), is_termination_msg (1)
> **CLI Commands:** python (2)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)

#### [Register tools and run the agent](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=0)** We have our calculator tool ready; we have our math tutor agent ready. Then we created our user proxy agent. It's time to register the tools with our agents. Now there are two ways to register tools with agents. First is the direct registration, where we are using the register_for_llm and register_for_execution methods from our agent object. Here, you can see that we used register_for_llm to register the calculator tool with the math tutor agent or the assistant agent that we have defined above. This allows the assistant to suggest using the calculator. So I have passed the name of the function, the description of what that function is all about, or what that tool is all about. And then we have passed the calculator function to the method, register_for_llm. Great. The second function or the second method that we have over here is register_for_execution. This is used to register the calculator tool with the user proxy agent, which will allow the user proxy to actually execute the calculator agent. So assistant will suggest and user proxy agent is the one who is going to call or invoke this calculator tool. So run this. This is the first method. The second method involves this utility provided by AutoGen which is called register_function.
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=94)** In this, we specify the function or the tool that we have to register, which is calculator in this case. Then we specify the caller. That means the agent that can call the function. In this case, math tutor agent. That's going to suggest that this tool should be called. Then we have executor agent. So user proxy agent can execute the calculator calls. And finally, the name and the description and strings. Run this. This is the second way of registering tools. It's time to see how this conversation pans out. So here, user proxy will initiate the chat, will send the message to assistant, the math tutor, with this message, what is the value of this expression? Let's see what the assistant tells. So this was the first message at the top then assistant to user suggested tool call calculator. And then you can see they have broken down the complete expression into multiple tool calls. And finally, this turned out to be the final answer, 221490. So this entire agent conversation happened this way. They broke down the complete expression and made a call for each individual element of that expression. And finally, the result of the expression turned out to be 221490 with this terminate message at the end that ended our conversation.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=193)** So here we've learned how to register these tools with our agents and initiate the conversation to make use of these tools. This completes our implementation of tool using AI agent. In the next lesson, we will see what are the other types of tools that we can configure in our [[AI Agents]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1)
> **Code Identifiers:** register_for_llm (3), register_for_execution (2), register_function (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)

#### [Add web search ability to the research assistant](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=0)** [[Large Language Models (LLM)|Large language models]] usually do not have access to the internet, but we'll get up-to-date information if our [[AI Agents]] had access to the web. So in this lesson, we'll take our agent capabilities to the next level by adding web search functionality. So we'll create a research assistant that can search the internet to answer our questions. And for this, we'll need an external search API. The search API that we're using is Tavily. So make sure that you have installed these two packages. AutoGen is already installed, and Tavily [[Python (Programming Language)|Python]] is an SDK that Tavily offers. So we'll install this. I already have this installed. Next, we are importing the Tavily client from Tavily, which offers search APIs for LLMs. We have our assistant agent user proxy agent, config_list, register_function which are required for us to register our tool. So import the required libraries, configure the large language model. The next step is to set up our Tavily web search tool. Here, you'll need to get a Tavily API key from their platform. So you just simply need to sign up and create an API key. Store it in your dotenv file. I already have the API key installed in my dotenv file here. Once you have done that, you can create a Tavily client and this function takes a query string and returns the search results using
>
> **[1:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=98)** the Tavily's Advanced Search API. So that's how this tool is going to work for us. So we have defined our custom tool, our custom function using Tavily client. Next, we have added a [[React.js|ReAct]] prompt. ReAct is reasoning and acting prompt. It's nothing but a way of thinking and analyzing LLM's response. So the agent is going to process our input query using this thought process, which is question, the input question you must answer. Thought, you should always think about what to do. Action, the action that one should take. Action input, the input to the action, observation, thought, and then the final answer. So this is a template ReAct prompt that we have added. You can keep it simple also. And finally, the input is where our or the user's question is going to get added. Finally, we have created a function to format this prompt with the specific question that we want to ask. So run this. Our prompt template is also ready. The next step is to define the agents. We have a user proxy agent that represents the user. It is set up to allow for human input and to terminate the conversation when appropriate. And we have a research assistant. So this assistant agent that acts as our research assistant, it's given a system message that defines its role and capabilities.
>
> **[3:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=194)** So let's define our agent. Finally, we'll register the search tool using the register function utility from AutoGen. I have passed my tools which is called search tool function that we have defined above, caller is research_assistant, executor is user_proxy, name, and description. Done. Finally, we'll initiate the chat. My question to the assistant agent is who won the T20 Cricket World Cup in 2024? Now, we all know LLMs do not have access to current affairs, so this will have to go to the tool in order to get the correct answer. Let's run this. So user to assistant. This question was asked. Use the following format and then we have the assistant to user, suggested tool called search tool, and we got the response. So since we have opted for human input always, it is asking for my input here. So I can simply press Enter. No human input received using autoreply, executing function search tool. Let's see what this returns. There you go. We have our final response. So this was the response from the Tavily client. As you can see, a [[JSON]] response after the search API was called. And finally, thought, the search result indicates that India won the T20 Cricket World Cup in 2024, and that is true. So with this, we have added a web search functionality to our AI agent,
>
> **[4:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=290)** which is a huge unlock. Now you can build many different types of application where current affairs or a web search is required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Large Language Models (LLM)|Large language models]] (1), [[AI Agents]] (1), [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **Env Vars:** api (7), t20 (2), sdk (1), llm (1), json (1)
> **Prerequisites:** set up (2), install (1), configure (1), you'll need (1)
> **Code Identifiers:** config_list (1), register_function (1), research_assistant (1), user_proxy (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1), python (1)
> **Exercise Files:** template (2)
> **UI Navigation:** go to (1)


### 5. Building an End-to-End Coding Copilot in Autogen

[↑ Back to Table of Contents](#table-of-contents)

#### [Code executors in AutoGen](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=0)** So we have come to chapter five now where we're going to focus on code execution and AutoGen. Our first lesson focuses on the crucial components of this system. So what is a code executor? It's basically a component in AutoGen that takes input messages containing code blocks, executes that code, and outputs messages with the results. So it basically acts as a bridge between our [[AI Agents]] and the actual execution of code. If you talk about the flow of code execution, we have a code writer agent, which is basically a large language model. So the LLM will generate the code for us. And this agent then generates messages containing code blocks, which further are sent to the code executor for execution to see what the output is going to look like. The code executor runs the code and generates the output. The execution output is then sent back as messages. Now this cycle allows our AI agents to not just write code, but also see the results of that code. So if you talk about the type of code executors, AutoGen provides two main ways of executing code. One is local command line executor, where it runs the code directly on our local machine's operating system. But this one has security concerns because you do not know what type of code
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=97)** LLMs are going to generate. The second type of execution is on Docker command line executor. This runs the code inside a Docker container. For this, you'll have to install Docker on your system. And this provides an extra layer of isolation and security. If you want to learn how both of these work, let's try to understand first of all, local command line executor. Here, what would happen is the agent will send a message with code blocks to the code executor. This code executor will write the code to a file on our local system, which is then executed using our local command line. The execution output is then read from the console, and this output is sent back to the agent as a message. So this is local command line execution. When we talk about Docker command line executor, this process starts the same way: the agent sending a message containing the code, the code executor writes the code to a file, but this time inside a Docker container. The code is executed within the container, the output is read from the container's console, and then the output is sent back to the agent. The key difference is that with Docker, the code runs in an isolated environment, which can be safer and more controlled.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=193)** So we have introduced the concept of code executor in AutoGen. In the next lesson, we'll dive deeper into creating agents that will use these code executors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (2)
> **CLI Commands:** docker (6)
> **Tools:** command line (6)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [Create agents](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=0)** It's time to put our knowledge into practice. In this lesson, we'll focus on setting up our code-writing agent and a code executor agent. So let's see how to do that. I've imported the required libraries, but there is an important addition for code execution. We're going to use local command line code executor provided by the coding module of AutoGen. So import the libraries, configure the LLM. The next step is to add a code executor. Now since we are using local command line code execution, I have created an instance here where timeout is the timeout for each code execution in seconds. So this is 10 seconds. And then we have provided a work directory where all the code or the outputs are going to get stored. So I have provided coding. That means a coding directory is created within the system, and all the code files or assets are going to get stored within this directory. So let's run this. Our executor is also ready now. The next thing is to create our code executor agent. Now, to define our code executor agent, we are using ConversableAgent class from AutoGen. I have provided the name, code_executor_agent. This does not require LLM. So llm_config has been set to false because the agent doesn't
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=94)** need to generate any text. Then we provide a code_execution_config with the executor which we have defined earlier. And then human input mode is set to always allowing for human intervention if needed. We provide a default autoreply to guide the conversation flow. So let's run this cell to define the executor agent. Further, we define our code writing agent. So here we are using the assistant agent class from AutoGen. We have named it code_writer_agent. We have provided the llm_config, allowing the agent to generate text and code. We set the code_execution_config to false because this agent will write code, but not execute it. We set human input mode to never as we want the agent to operate autonomously. So run this and our writer agent is also created. If you want to check the system message of any of these agents, you can check that as well. So we can capture the system message attribute from the code writer agent here. So once you run this code_writer_agent_system_message, and there you go. You are a helpful AI assistant. Solve tasks for coding and language skills. So this is the complete system message for our code writer agent. Note that the system message is a crucial part of agent's configuration, as it
>
> **[3:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=192)** defines the agent's role and capabilities. So in this lesson, we have set up the two main agents for our coding [[Microsoft Copilot|copilot]], a code executor agent that can run the code and provide feedback, and a code writer agent that can generate the code based on requirements. In the next lesson, we'll define a specific task for our coding copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2)
> **Code Identifiers:** llm_config (2), code_execution_config (2), code_executor_agent (1), code_writer_agent (1), code_writer_agent_system_message (1)
> **Env Vars:** llm (2)
> **Tools:** command line (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)

#### [Define task to analyze data](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=0)** In this lesson, we are going to put our coding [[Microsoft Copilot|copilot]] to work. We'll define a specific task for stock analysis and have our agents collaborate to complete that analysis. Then we'll examine the output as well. Here, I've imported the libraries, configured my large language model. We have already created an executor instance. So we have set a timeout of 10 seconds, and we have specified the working directory which is named coding, where our code and output will be stored. Finally, we have created our code executor agent and code writer agent. If you want to check the system message of the code writer agent, it looks something like this. Now comes adding the task. So what is this stock analysis task that we have provided to our agent? In this case, we have imported date time date because we want the analysis to be done as per today's date. So as per the course recording date. So I've captured the current date using date.today() method. We import the date module above to get the current date. We create an instruction string here, and this string is asking for a graph of ytd, that is, year-to-date, stock performance for Nvidia and Tesla. It specifies that the code should be in a markdown code block, and the output should be saved as ytd_stock_gains.png.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=102)** And this will be stored in the coding directory, which we have already specified in our executor instance. So this task will require our code writer to generate [[Python (Programming Language)|Python]] code that can [[Fetch]] stock data, process it, and create a graph, and save it as an image. So let's define the instruction here. It's time to initiate the chat. We are starting the interaction between our agent. So we have specified that the code executor agent is going to initiate the chat. It's going to go to code writer agent. And then the instruction, the initial message is also provided as we have defined above. So the conversation starts. Let's run this code. Here you go. Code executor agent to code writer agent as of this date. So the date has been captured. Please generate a graph. Okay, you can see the code writer agent has generated the code here. So it is capturing the data from Yahoo! Finance library and then plotting the charts here. So save this code in a file named this. So the Python file is also getting stored in our coding directory. So I will simply hit Enter. It is going to use autoreply. And there you go. The final code writer agent to code executor agent. Great. The script executed successfully and generated the graph, ytd_stock_gains.png.
>
> **[3:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=198)** So this is done. I will exit this conversation and I'll check what this image actually looks like. So we'll check the output here. I have imported the image class from IPython. display to look at this image. And I am joining the path from the coding directory. And this is the name of the file. So this is basically to generate the path where this file is stored. Let's run this. And this is the image which the code executor and the code writer agent together have collaborated to create. And if you want to see where this is stored, it's stored in this folder of mine, coding directory. And all of our files are stored here. So this is the image that our coding copilot created autonomously. We have not provided any function, any code. LLM provided the code, executor executed it, and we have our final output with us. And that's our coding copilot. In the next lesson, we'll dive deeper into how we can interact with these coding copilots and how we can provide custom functions to these writer and executor so that they use our functions to generate such plots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Python (Programming Language)|Python]] (2), [[Fetch]] (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** ytd_stock_gains (2)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### [Execute user-defined code in AutoGen](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=0)** In this lesson, we are going to enhance our coding [[Microsoft Copilot|copilot]] by adding custom functions for stock analysis and exploring how to execute user-defined code. So I've imported the libraries, configured the LLM. Let's define our custom functions for stock analysis. Here, I have two functions. The first one is get stock prices. This fetches stock data using the yfinance library. The second function is the plot stock prices. This creates and saves a plot of stock prices. Now these functions will be made available to our coding copilot, allowing it to perform more specialized tasks. If you want to add something to these functions, you can do so as well. So we have defined these. The next step is to create a new executor with these custom functions. So here, I have a local command line code executor with a timeout of 60 seconds, working directory named coding, and our custom functions, which will be available to the executor. So I have passed that as a list. So in this list, I have passed the names of these custom functions. So executor is also ready. I have defined the code writer system message beforehand. So this is another way. So it's basically the same system message that we had in the assistant
>
> **[1:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=95)** agent in the previous lesson. Here, I have defined it myself. To this, we'll further add format functions for prompt. So what is this doing? We are updating the system message for our code writer agent. So the format functions for prompt method adds information about our custom functions to the system message, allowing the agent to use them in its code generation process. So the code writer would have access to the custom functions that we have defined. So you can see, I'm simply appending this executor information, the custom function that I passed in my executor to the system message of my code writer agent. So this has become the updated system message for my code writer agent now. It's time to define the agents with the updated system message. So code writer agent, this is the updated code writer system message. Everything else remains the same as the previous lessons. Finally, the code executor agent with our executor provided here. Run this. The next step is to provide the initial instruction. Here, we initiate the chat between our agents, providing a task to download and plot the stock prices for Nvidia and Tesla. So if you run this, we have the conversation going on here, all the steps, et cetera. please save the code in this particular file and execute it.
>
> **[3:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=190)** I'll hit enter here. Executing code block. Great. It looks like everything executed successfully and the stock prices has been saved to this file. Everything is getting stored in the coding directory. I will end the conversation here, exit. And finally, I will try to plot the image that these agents created using our custom functions. So plot these and you have the image plotted by the agents using the custom functions of the users. So this is how you can integrate custom functions and have the agents work, or use your code blocks instead of LLMs having to generate the code. So incorporate these functions into your code execution environment. Update the agents to use these new capabilities. So that's code execution with AutoGen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2)
> **Env Vars:** llm (1)
> **Tools:** command line (1)


### 6. Teachable Agents

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to teachable agents](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=0)** Welcome to the chapter on Teachable Agents. In this lesson, we'll learn what teachable agents are, what are the problems that they solve, and how they work. So before we dive into teachable agents, let's quickly understand the problem with LLM-based assistants. We all know that they can remember the current chat, but the memories are lost once the chat ends. They can demonstrate in-context learning, but this is also lost between different sessions. For long conversations, you must have observed, the context window becomes too full, which limits the effectiveness of the LLM response. And users often need to repeat instructions in every new chat. Now, teachable agents address all of these limitations, allowing for more efficient and personalized interactions. So what are teachable agents? These are AI systems that can learn and retain new information from user interactions across multiple conversations. They use persistent memory mechanisms to store and retrieve user-taught information, making them more adaptive and personalized over time. So how do these work? Teachable agents work by using a vector database for long-term memory across chats, retrieving specific memories, which are called memos as needed.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=96)** So they allow one-time teaching of facts and skills. And finally, they integrate with ConversableAgent via a Teachability object and you can learn different types of information. You can learn new facts. So general knowledge or specific information, they can learn user preferences like personal likes or dislikes or settings. Teachable agents can also learn new skills. So if you want to teach any new skill or a process, you can do that as well. This versatility allows the agent to become increasingly tailored to the user's needs over time. We'll see how to implement this sort of a teachable agent by inheriting a ConversableAgent and turning it into a teachable AI system. In the next lesson, we'll dive deeper into how to implement a teachable agent.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Cross-References:** in the next (1)

#### [Setting up teachable agents](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=0)** In this lesson, we are going to get hands-on and we'll implement a teachable agent using AutoGen. To get started, first of all, you will have to install pyautogen with the teachable option. Now what this does is it will add the vector database which Teachability is going to use in order to store all the user-related information and chat messages to provide a personalized response. So this uses [[ChromaDB|Chroma]] DB, which is a vector database inherently. Now, in order to move forward, first, we'll import the required libraries, configure our large language model, and then we'll create our teachable agent. So here's what we are doing. We create a ConversableAgent. We have named it teachable_agent here. Then we instantiated the Teachability object. So if you see, we have imported teachability from AutoGen's agentchat.contrib.capabilities and then Teachability module. From this, we have imported the service which offers this ability to make our ConversableAgents teachable. So we have instantiated this object, reset_db set to false. So if you want to force reset your DB, then you can set it to true. Otherwise, if you want to use the existing DB, you can set it to false. The next parameter is path to DB directory. So this can be any path.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=93)** I have just added .tmp. So created a temporary directory within this directory itself. The next step is to add the Teachability capability to our agent using the add_to_agent method. The last step is to test our system. Test our teachable agents using a user proxy agent. So name is user, human input mode, always, because I want to chat with this teachable agent. And finally, code execution. We do not need to execute any code. So this is set to false. Run this. Our teachable agent is now ready. You can see that we are loading memory from disk. So since I have added reset_db set to false. So it is using an existing database. I have already had a chat with this teachable agent once. I've already provided my name, so let's see if it is able to remember all of that information. So that means it will be able to remember information across different sessions, across different chats. Let's initiate the chat. So the teachable agent is initiating the chat here with the initial message, hi, I am a teachable user assistant. What's on your mind? So let's see. Now it's asking for my prompt; so it's prompting me to add an input. I'm going to ask, what's my name? So I'm now waiting for the teachable agent to look into the database.
>
> **[3:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=189)** So you can see that this is the first message I have sent. And it retrieved the information from the database and told me, hello, Harshit, how can I assist you today? Okay, so in the last conversation that I had, I mentioned the type of ramen that I like. Which ramen do I like? It's getting the answer. So I provided this information to my agent in my previous conversation that I like miso ramen. And that's what it has responded me with. So it has clearly identified from the chat, previous chat that I like miso ramen. So this has been great. We have been able to implement our teachable agent, which is having a persistent memory mechanism and will provide more personalized information. So now you can see that it can adapt to user preferences. It learns new facts. In the next lesson, we'll see how teachable agents learn user preferences and how they learn new skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChromaDB|Chroma]] (1)
> **Code Identifiers:** reset_db (2), teachable_agent (1), add_to_agent (1)
> **Cross-References:** in the last (1), in the next (1)
> **Prerequisites:** install (1), configure (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [Teaching and retrieving information](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=0)** Now that we have implemented our teachable agents, let's see how they can learn user preferences or even a new skill. So let's quickly run all the cells. These are same as the ones that we wrote in our previous lesson. So our teachable agent is now ready. One thing to note is I have set reset_db to true. So everything that the agent has learned so far, from all the conversations that I've had, all of that would be refreshed. So let's initiate the chat here. Hi, I am a teachable user assistant. What's on your mind? So I'm initiating the chat and this time I have picked up a task to summarize the abstract of a research paper. So this research paper I've picked, this is a randomly picked AutoGen paper. So here, I am copying the abstract of this research paper. And I'm going to ask this teachable agent that please summarize this abstract, colon, and then paste the abstract. Hit Enter. So I've got the summary from the teachable agent. AutoGen is an open-source framework. So it has returned the summary in this format. But I want the summary to have a structure. So I'll say, I always like my summary to have three bullet points: the title,
>
> **[1:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=101)** the key ideas, and the key takeaways.
>
> **[1:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=110)** Now summarize this abstract And I'll again
>
> **[1:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=119)** copy this abstract and paste it here. Let's see how the LLM changes the summary or adds more structure to the summary this time around. So the LLM, when I specified the instructions to summarize the abstract in a particular format, now it has given me the title, key Ideas, and key takeaways. Great. Now I'll exit the conversation right here. Exit the conversation. Here, I'm going to start another session. But before that, this time, for my agent, I will not reset the DB. Okay. Loading the memory from disk. So I already have my pickle file here. So my previous conversations are now loaded. Let's see if it remembers everything from our previous session. So please summarize. And this time around, I won't provide the instructions. I'll just simply paste the abstract. So the instructions are not specified here. It should remember the instructions from our previous interactions. And that's how I would know that it has learned my preference. So there you go. We have the title, key ideas, key takeaways in the same format. The summary is provided to us in the same format as we had in our previous interaction.
>
> **[3:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=214)** So I do not have to repeat myself. This is again going to be a huge unlock for us. The next thing that we want to learn is, if this teachable agent can learn new skill. Now for this, I have a mathematics question. Here, I'll add this question. I'll just paste it here. This question is consider this equation. Can you modify exactly one integer and not more than one on the left-hand side, such that the right-hand side of the equation becomes 80? That's the question that I have given this. And I have provided some steps that let's think step by step, write down a plan, so on and so forth. So I'm going to give this query to our agent. Let's see how it resolves this. Okay. So it has given us solution steps. First is calculate the current left-hand side, identify the target, determine the necessary adjustments, all of those things, conclusion, and then final calculation. So final solution is given in this format. Now alongside the problem, I'll also specify some advice, some instructions on how to do it step by step. So let's first of all copy the problem statement. This is my problem statement. This is same as the last problem statement. And I'll also specify the structure
>
> **[5:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=312)** in which I want my solution. So there we go. At the end, I have added some instructions, recompute steps, all of those things. So let me just walk you through. So consider this and then write down a plan, write down your solution. Calculate the difference. So I have specified all the instructions in this way. So this is going to be helpful if I want more challenging tasks to be resolved. So I would first teach my agent how it is done. And then I'll always be able to solve the problem or achieve my task in that manner, so I would not have to repeat myself again and again. So it has now learned the method. So identify the current value of the left-hand side, calculate the current value on the right-hand side. So plan solution steps, so on and so forth. So this time you can see there are more steps as per the instructions that I provided. And now when I'll exit, this agent would always remember these instructions, and now I would be able to solve more and more complex problems in this manner, as the agent now has a new skill which does things as per my preference. So that's how teachable agents are going to be a huge unlock. And it'll solve many different types of problems across different sessions. So you'll never have to repeat yourself, and it'll always remember how
>
> **[6:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=406)** you want things to be done.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** reset_db (1)


### 7. Building a Data Analysis Company with Group Chat

[↑ Back to Table of Contents](#table-of-contents)

#### [Organizational structure of agents](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=0)** Welcome to the last chapter of our course. In this chapter, we are going to build a virtual data analysis company using a group chat of specialized [[AI Agents]]. The first lesson is going to focus on setting up the organizational structure. That means creating the agents that will form our company. So I have imported the libraries, configured the LLM. The task at hand is to analyze the daily closing prices of Apple or any other stock for the past one month and create a brief report. But you can change the task as per what you want your company to do. The next step is to create the agents that will form our company. The first one that we are building here is the user proxy agent or the admin. This admin agent represents the user providing tasks and feedback on the final report. So all we have to do is provide a name, system message, code_execution_config is set to false because this agent is not required to execute any code. That's all. Human_input_mode is set to always. All right. Next agent is planner. The planner agent determines what information is needed and outlines the steps to complete that task. So we have defined a detailed system message here. That's all. Then we have an engineer. We've used an assistant agent to create our engineer.
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=94)** This is going to write the code to [[Fetch]] and analyze the stock data. Engineer agent is also ready. Whatever code engineer is going to provide needs to be executed as well. So we'll need an executor agent that runs the code provided by the engineer and then reports the results. This is a ConversableAgent. We have the system message, human_input_mode, never. And then we have provided the code_execution_config as well. So the working directory here as you can see is the same coding directory that we have used in the previous lessons. So executor agent is ready as well. Lastly, based on the analysis done we also have a writer agent to compile a report on it. So this writer agent composes the final report based on the data analysis results and refines it based on the feedback. So this agent is also ready. In the next lesson, we'll learn how to build a group chat that allows these agents to collaborate effectively. We'll explore how to set up communication channels and define the interaction patterns that will enable this virtual company to tackle focused data analysis tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Fetch]] (1)
> **Code Identifiers:** code_execution_config (2), human_input_mode (1)
> **Prerequisites:** required to (1), set up (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Build the group chat](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=0)** It's time to implement a group chat functionality for our data analysis company. This will allow our specialized agents to collaborate on this task. I have imported all the required libraries, but if you notice, there are two new additions that we have imported from the AutoGen library, which is group chat, and there is also a group chat manager. Group chat is going to create that environment, that object where all the conversation is going to happen. And group chat manager is a specialized agent that's going to orchestrate the group chat itself. So we have set up the environment. The task is ready. All of our agents are also ready. Let's define the group chat. Here, we need to pass all the agents that are going to be part of our conversation. So while instantiating the group chat, I have passed on this list of agents that we have defined above. I've also provided an empty message list and a maximum round of 10 iterations. Now, this means that there will be at most 10 iterations of selecting the speaker, the agent speaks, and broadcasting message. So group chat is all configured. Then we'll have the group chat manager who is going to orchestrate this chat. So I have passed on the group chat object to this group chat manager agent and it also has llm_config.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=93)** That means LLM capabilities. So run this. Our chat manager is also ready. It's time to initiate our chat. Let's see how this works on this task of analyzing past one month's end-of-day stock prices of the Apple stock. So here you go. We can see the admin (to chat_manager) analyze... So it has given this task, user proxy has initiated the chat. So that's why admin (to chat_manager). Chat managers picks up the next speaker, that is planner. Planner lays out the plan. Then it goes to engineer. Engineer will write the code. Then it goes to executor. Executor gives us the data from the script. Then we perform the data analysis. So it goes back to the planner, how we'll utilize this data set. Then it goes to the executor again for the analysis code. Great. And now I'll hit enter. Admin needs to provide the next step. So admin (to chat_manager), the script for analysis is written. Okay. So you can see five-day moving averages. So it has done some stock-based analysis. And so [[Financial Analysis]] has been carried out. And then it comes to the writer who is going to write the report based on the analysis. So we have successfully retrieved and analyzed the data. Here are the key results.
>
> **[3:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=186)** So you can see count, mean, standard deviation, all of those things. Volatility, five-day moving average. So all of these metrics are very important when you are analyzing stock prices. And we have the complete analysis written down by our writer agent. So that's how all of these agents now have collaborated in this group chat to achieve or you can say solve the task at hand. So this group chat functionality allows our virtual data analysis company to approach complex tasks collaboratively, mimicking real-world team dynamics. Now, each agent contributes its specialized skills from planning and coding to data analysis, and then report writing, all within a shared context. That's correct. In the next lesson, we'll see how we can configure and set speaker policies in this group chat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Analysis]] (1)
> **Code Identifiers:** chat_manager (3), llm_config (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)

#### [Speaker selection config](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=0)** Welcome to the final lesson of our course. Here we are going to refine our group chat functionality by implementing a speaker selection policy. This is a powerful feature that allows us to control the flow of conversation more precisely. This ensures that our agents are interacting in the most effective way possible. I have my system ready. I have created all the agents. It's time to define our selection policy. So this selection policy is configured when we are creating the group chat object. So in our group chat instance, firstly, we have to pass all the agents that we have created, an empty messages list because we have not begun our conversation yet. Max round is equal to 10. This limits our conversation to 10 rounds to prevent infinite loops. Then I have allowed or disallowed speaker transitions. This is a dictionary and this is key to our speaker selection policy. It defines which agents can speak after each other. So for example, I have user proxy or admin. So admin can hand off the conversation to any other agent: engineer, writer, executor, or planner. An engineer can only speak to the admin or to the executor. Similarly, writer reports back to the admin or asks the planner for clarification.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=97)** Similarly for executor and planner as well. Then I have speaker_transitions_type is equal to allowed. This indicates that our dictionary specifies allowed transitions. We could use disallowed if we wanted to specify forbidden transitions instead. So create the group chat. Everything else remains the same. We have the group chat manager. We have passed on the group chat object to it, and now we are going to initiate the chat. So now you will see that it will follow the speaker selection policy that we have defined above. So this way, we can define clear communication pathways between our [[AI Agents]]. And this ensures that information flows logically through our virtual company, prevents any sort of unnecessary or illogical interactions between the agents. So that's it. As you continue to develop and refine your own AI systems, remember that the power of structured interactions. This is very important. Whether you are building a data analysis company or a creative writing team or any other multi-agent system, thoughtful speaker selection policies can dramatically improve your results. And thank you so much for joining us on this journey through the world of AI agents and building them with AutoGen. I hope you have learned to build powerful AI agents. Good luck with your future projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** speaker_transitions_type (1)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with AutoGen](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=0)** Congratulations! You have completed the course on [[AI Agents]] with AutoGen. In the course, you have learned how to build and configure AI agents using the origin framework, from understanding the basics to creating complex systems like research assistants, teachable agents that learn from user interactions, integrating tools within those systems to finally building end-to-end coding copilots. You have gained valuable skills in the world of AI development. To continue your journey with AI agents, I recommend that you share your completion certificate with your network on [[LinkedIn]] so that you know who else in your network is building AI agents. Now that you have fundamental skills, you should apply those to experiment with your own projects. And lastly, stay up to date with the latest developments in the AutoGen framework. And to do that, I have prepared a downloadable PDF with links to additional resources, including the official AutoGen documentation, research papers on advanced AI agent techniques, and some online forums and communities for AI developers. Last but not the least, I'd love to hear about your progress and answer any questions that you might have. So connect with me on LinkedIn. Subscribe to my YouTube channel.
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=94)** I keep posting videos on how to build with AI. And for updates from the world of AI, you should check out my newsletter, which is called High Signal AI. And that's it. All the very best for your future endeavors, and keep building with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (4), [[LinkedIn]] (2)
> **Env Vars:** pdf (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)


## Instructor

- [[Harshit Tyagi]]

## Path Context

### In [[Building Agentic AI Systems for Developers]]
← [[Introduction to Agentic AI- Getting Started with AutoGen Studio]] | **3 of 6** | [[Hands-On Agentic AI- Building AI Agents with LlamaIndex]] →

## Appears In

- [[Building Agentic AI Systems for Developers]]

---

[↑ Back to top](#)