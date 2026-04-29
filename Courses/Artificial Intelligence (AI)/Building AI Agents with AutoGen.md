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
created: 2026-04-29
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
  - Let's build some AI agents with AutoGen
- [**1. AI Agents with AutoGen**](#1-ai-agents-with-autogen) (4 videos)
  - Understanding AI agents
  - Overview of the AutoGen framework
  - Configuring LLMs and setting up AutoGen
  - Building a basic
- [**2. Developing a Research Assistant**](#2-developing-a-research-assistant) (4 videos)
  - Multi-agent conversation
  - Research assistant design
  - Creating agents for the assistant
  - Creating tasks for the agent
- [**3. Solving Complex Tasks Using Nested Chats**](#3-solving-complex-tasks-using-nested-chats) (3 videos)
  - Nested chats to add multi-level reviewing
  - Creating reviewer agents
  - Creating nested chat
- [**4. Tool Use and Adding Internet Capability**](#4-tool-use-and-adding-internet-capability) (4 videos)
  - What are tools?
  - Add calculation tool to math tutor agent
  - Register tools and run the agent
  - Add web search ability to the research assistant
- [**5. Building an End-to-End Coding Copilot in Autogen**](#5-building-an-end-to-end-coding-copilot-in-autogen) (4 videos)
  - Code executors in AutoGen
  - Create agents
  - Define task to analyze data
  - Execute user-defined code in AutoGen
- [**6. Teachable Agents**](#6-teachable-agents) (3 videos)
  - Introduction to teachable agents
  - Setting up teachable agents
  - Teaching and retrieving information
- [**7. Building a Data Analysis Company with Group Chat**](#7-building-a-data-analysis-company-with-group-chat) (3 videos)
  - Organizational structure of agents
  - Build the group chat
  - Speaker selection config
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps with AutoGen

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Let's build some AI agents with AutoGen
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=0)** Imagine having a team of AI agents at your fingertips, collaborating to solve complex problems, conduct research, and even write code.
>
> **[0:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=10)** That's the power of AutoGen, and I'm here to help you master it.
>
> **[0:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=16)** In this course, you'll learn to create and manage multi-agent conversations, develop a smart research assistant, implement nested chats for advanced problem-solving, add internet capabilities to your agents, build end-to-end coding copilots, and even create a teachable agent that learns from you.
>
> **[0:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=40)** Hi, I am Harshit.
>
> **[0:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=42)** I am an expert in AI development and I am excited to guide you through this cutting-edge technology.
>
> **[0:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/let-s-build-some-ai-agents-with-autogen?u=76281980&t=50)** So let's begin!

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Analogies:** imagine (1)


### 1. AI Agents with AutoGen

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding AI agents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=0)** AI agents are sophisticated software programs designed to perform tasks autonomously.
>
> **[0:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=6)** At the core of an AI agent is its ability to process and understand language through large language models or LLMs.
>
> **[0:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=16)** These agents can access and analyze various documents, extracting relevant information to support decision-making process.
>
> **[0:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=27)** They are equipped with a toolkit of specialized functions, allowing them to perform a wide range of tasks efficiently.
>
> **[0:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=37)** AI agents can engage in natural language conversations, understanding context.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=43)** Additionally, they can interact with databases, storing and retrieving information as needed to complete their assigned tasks.
>
> **[0:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=53)** With all of these capabilities combined, AI agents become powerful assistants capable of handling complex workflows from data analysis to customer support, revolutionizing how we approach problem-solving and task automation.
>
> **[1:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=72)** Think of an AI agent as a super smart digital version of a human assistant, but instead of coffee breaks, they take data breaks to learn and improve.
>
> **[1:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=87)** Let's see an AI agent in action.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=90)** Meet Alex, an AI agent designed to manage a marketing agency.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=96)** Alex can analyze marketing trends using real-time data, generate creative content ideas, coordinate with team members, schedule social media posts, and even predict campaign performance.
>
> **[1:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=112)** The best part?
>
> **[1:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=113)** Alex learns from every interaction, constantly improving its performance.
>
> **[1:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=119)** Unlike a human assistant, Alex can handle hundreds of tasks simultaneously, 24 hours a day without getting tired or making errors due to fatigue.
>
> **[2:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=131)** AI agents like Alex can also work alongside humans, enhancing our capabilities rather than replacing us.
>
> **[2:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=140)** They're not just tools, they are collaborators.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=145)** Exciting, right?
>
> **[2:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=146)** But how do we create AI agents like Alex?
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=150)** That's where the AutoGen framework comes in.
>
> **[2:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/understanding-ai-agents?u=76281980&t=154)** In the next video, I'll show you how we can use frameworks like AutoGen to create our own agents.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), let (1)
> **Cross-References:** in the next (1)

#### Overview of the AutoGen framework
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=0)** AutoGen is a multi-agent conversational framework for building AI agents with different roles to solve tasks using different tools and patterns.
>
> **[0:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=10)** It is made available to us as a Python library, and to install, you can simply use the command pip install pyautogen in your virtual environment.
>
> **[0:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=22)** In AutoGen, an agent is an entity that can send messages, receive messages, and generate a reply using large language models, tools, human inputs, or a combination of them.
>
> **[0:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=37)** An agent can be powered by models such as large language model like GPT-4, code executor, such as an IPython kernel or a human, or a combination of these, and there could be other pluggable and customizable components that you can configure.
>
> **[0:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=59)** AutoGen has a built-in agent called ConversableAgent.
>
> **[1:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=64)** It combines multiple components in the same class.
>
> **[1:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=68)** It comes with a lot of functionalities, a list of LLMs, a code executor, a function, and tool executor, a component for keeping human in the loop.
>
> **[1:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=82)** You can switch each component on or off and customize it to suit the need of your application.
>
> **[1:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=91)** We can also create different agent roles using the same interface.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/overview-of-the-autogen-framework?u=76281980&t=97)** Next, I'll show you how to start building these agents, what the required setup is, and I'll explain how to configure these LLMs to power these agents.

> [!info]- Semantic Content
>
> **Prerequisites:** install (2), configure (2), setup (1)
> **Code Keywords:** class. (1), function (1), switch (1), interface (1)
> **CLI Commands:** python (1), pip (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** gpt (1)

#### Configuring LLMs and setting up AutoGen
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=0)** At the core of an AI agent is large language model.
>
> **[0:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=4)** LLMs basically enable agents to converse in natural languages and transform between structured and unstructured text.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=12)** So in this video, first, we need to configure the large language models that are going to be powering our AI agents.
>
> **[0:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=20)** First of all, we need to import all the required libraries.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=23)** I'm importing autogen to create our AI agents, the os module to access all the directories and files, and dotenv package allows us to load all the environment variables using the load_dotenv() function.
>
> **[0:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=42)** Now all our environment variables are going to be stored within this hidden file called dotenv.
>
> **[0:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=49)** So all of our API keys are going to be stored within this file.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=54)** Let's quickly run this.
>
> **[0:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=56)** So it has returned true.
>
> **[0:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=58)** That means all our environment variables are now loaded in the runtime.
>
> **[1:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=63)** Next step is to configure the large language model.
>
> **[1:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=67)** That means we need to specify which model we are going to be using and who is going to be providing that service, providing that model.
>
> **[1:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=76)** We are using OpenAI's GPT-4o for this entire course.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=83)** So llm_config is my Python dictionary, which essentially has two keys.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=90)** One is the model where I need to specify which model we are using, and then API key.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=96)** This API key is something that you will have to create on your own.
>
> **[1:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=101)** The instructions are provided in the lecture notes.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=105)** os.getenv is going to get that API key corresponding to the string OPENAI_API_KEY, which is already present in your dotenv file.
>
> **[1:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=116)** Run this and your llm_config dictionary is now ready, which will further be passed on to your AI agents.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=124)** But let's say you want to use multiple large language models.
>
> **[2:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=128)** That means one is from OpenAI, one is from some other provider.
>
> **[2:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=132)** Or if you want to use any open-source large language model, that is also possible.
>
> **[2:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=138)** In this case, we are going to create a list of LLMs, a list of dictionaries.
>
> **[2:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=144)** So here I have config_list which is a list of dictionaries.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=150)** Each dictionary represents a model.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=153)** I need to specify again the model name.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=156)** So GPT-4o is going to be the first model that I'm using here along with the API key which is going to come from my dotenv file.
>
> **[2:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=165)** Then the second model is Llama-7B.
>
> **[2:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=169)** Here, I have configured it because I'm running it on my local system at this particular local server.
>
> **[2:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=176)** So the link, the base URL corresponds to 8080 port which is running on my system using a service called Llama.
>
> **[3:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=185)** So if you want to use multiple LLMs, you can configure it using config_list method.
>
> **[3:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=192)** Here, your config_list is now ready.
>
> **[3:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=195)** You can use multiple LLMs in this particular manner.
>
> **[3:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=199)** Throughout the course, we'll be using one single LLM.
>
> **[3:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=203)** So we are going to be using this configuration throughout the course.
>
> **[3:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/configuring-llms-and-setting-up-autogen?u=76281980&t=208)** In the next video, we'll see how to create a basic chatbot and use these LLMs to create a ConversableAgent.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), gpt (2), openai_api_key (1), url (1), llm (1)
> **Code Keywords:** let (2), module (1), function (1), this. (1), case, (1)
> **Code Identifiers:** config_list (3), llm_config (2), load_dotenv (1)
> **Prerequisites:** configure (3)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Building a basic
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=0)** Now that our setup is ready, let's quickly build a basic agent that we can chat with.
>
> **[0:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=6)** This agent will understand what we are asking and will generate a response for us using large language models.
>
> **[0:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=13)** For this, let's quickly import all the required libraries first of all and load our environment variables from the dotenv file.
>
> **[0:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=22)** I'll run the cell.
>
> **[0:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=25)** So that's done.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=26)** The next step is to configure the large language model.
>
> **[0:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=29)** We're using GPT-4o from OpenAI.
>
> **[0:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=33)** Let's run this.
>
> **[0:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=35)** The llm_config is now ready.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=38)** So in order to create this chatbot, we are going to create an AI agent which is of the type ConversableAgent provided by AutoGen.
>
> **[0:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=50)** Now in AutoGen, you can assign roles to agents and you can have them participate in conversations.
>
> **[0:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=57)** And a conversation is nothing but a sequence of messages exchanged between agents.
>
> **[1:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=64)** So here we have, first of all, imported ConversableAgent class from AutoGen.
>
> **[1:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=69)** Next, we are going to instantiate this ConversableAgent class and we'll store that in the agent variable.
>
> **[1:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=78)** In this, the parameters that you need to provide in order to create an agent.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=83)** First of all, the name.
>
> **[1:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=85)** Here, we have provided the name chatbot in a string.
>
> **[1:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=89)** Then you need to pass on the llm_config.
>
> **[1:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=92)** So the llm_config parameter will take the dictionary or the list of dictionary, which will capture all the details about the large language model that you are supposed to use within the agent.
>
> **[1:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=108)** So we have used the llm_config variable that we created above.
>
> **[1:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=113)** The next step is human input mode.
>
> **[1:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=116)** Here, I have marked it as never.
>
> **[1:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=119)** That means a human will not be able to interrupt the chat, will not be able to provide input when the agent is working.
>
> **[2:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=127)** If you set it to true, you can pass your input when the agent is working.
>
> **[2:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=133)** Let's quickly run this to create our agent.
>
> **[2:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=137)** Our agent is now ready.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=139)** In order to generate a reply from the agent, we can use the .generate_reply method.
>
> **[2:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=147)** Here, you need to pass messages.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=150)** Now messages is nothing but a list of dictionaries.
>
> **[2:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=154)** In this dictionary, you need to first of all specify your query which goes in the key content.
>
> **[2:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=161)** So content is going to be your query.
>
> **[2:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=163)** Here I'm asking how to make delicious ramen.
>
> **[2:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=167)** My role when I'm asking this query is of a user.
>
> **[2:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=172)** So role key has user specified.
>
> **[2:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=177)** I have closed the method.
>
> **[2:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=179)** Print reply.
>
> **[3:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=181)** I'll run this cell, and there you go.
>
> **[3:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=183)** This is the response from the agent using the large language model, GPT-4o from OpenAI.
>
> **[3:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=191)** So all of the ingredients, steps, instructions to make everything has been provided by this agent.
>
> **[3:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=200)** We can ask another query how to set up a marketing campaign.
>
> **[3:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=205)** And these are all the steps.
>
> **[3:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=207)** So you can see this is in markdown format.
>
> **[3:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=209)** All the steps to create a marketing campaign.
>
> **[3:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=213)** So now we have built a basic agent, a basic chatbot using AutoGen.
>
> **[3:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/buiding-a-basic?u=76281980&t=221)** In the upcoming chapters, we are going to see how to make more sophisticated AI agents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (3), this, (2), this. (1)
> **Code Identifiers:** llm_config (4), generate_reply (1)
> **CLI Commands:** make (3)
> **Prerequisites:** setup (1), configure (1), set up (1)
> **Env Vars:** gpt (2)


### 2. Developing a Research Assistant

> [↑ Back to Table of Contents](#table-of-contents)

#### Multi-agent conversation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=0)** Now that we have learned how to set up our environment, how to configure large language models, and build basic AI agents, it's time to dive into multi-agent conversations.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=12)** Here we're going to simulate a conversation between a student and a math tutor.
>
> **[0:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=19)** I've imported the required libraries: OS for interacting with the operating system, ConversableAgent from AutoGen.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=26)** This is going to be our main tool for creating conversational AI agents.
>
> **[0:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=31)** Loaded all the environment variables from the dotenv file.
>
> **[0:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=36)** My LLM is configured.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=38)** We can change this to llm_config or you can pass on the config_list as well.
>
> **[0:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=45)** The next step is to set up our conversation between the student agent and the tutor agent.
>
> **[0:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=53)** So first of all, we are creating our student agent here.
>
> **[0:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=57)** This is a ConversableAgent.
>
> **[0:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=59)** So I've instantiated the ConversableAgent here.
>
> **[1:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=63)** The name is student, system message; you are a high school student struggling with algebra.
>
> **[1:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=68)** I have passed on the llm_config.
>
> **[1:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=70)** So this is going to be a config_list as per the definition above.
>
> **[1:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=76)** Human input mode is set to never.
>
> **[1:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=78)** This means that the agent will not ask for human input during the conversation.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=83)** So run this.
>
> **[1:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=85)** Our student agent is now ready.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=88)** The next step is to create the tutor agent.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=90)** This is also a ConversableAgent.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=93)** Name is tutor, system message; you are a patient and knowledgeable math tutor, your goal is to help students understand algebra concepts.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=102)** So llm_config here is well, human input mode, never.
>
> **[1:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=107)** So both of our agents are now ready, the student as well as the tutor.
>
> **[1:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=113)** The next step is to initiate the conversation between them.
>
> **[1:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=116)** So the student here is initiating the chat using the initiate_chat method of the student agent.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=124)** And then recipient is going to be the tutor agent.
>
> **[2:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=127)** We provide an initial message from the student.
>
> **[2:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=130)** That means the message is I am really struggling with quadratic equations, can you help me understand them better?
>
> **[2:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=137)** Max turns is equal to two.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=139)** That means this limits the conversation to two turns, one exchange each way.
>
> **[2:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=144)** Run this.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=145)** And this is the output.
>
> **[2:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=148)** This is the conversation between the student and the tutor.
>
> **[2:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=151)** So initial message, then the tutor tries to explain with an example.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=156)** Tutor asks would you like to work through a specific example, so an exercise.
>
> **[2:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=161)** Student worked on an example.
>
> **[2:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=163)** And then the tutor's response was absolutely, let's work through a specific example together.
>
> **[2:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=169)** So this was their complete conversation that happened.
>
> **[2:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=173)** If you want to print the result, the summary chat history, we can use result.
>
> **[2:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=179)** chat_history attribute to capture the history.
>
> **[3:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=182)** So this will contain all the messages corresponding to the content key and a list of dictionaries.
>
> **[3:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=191)** Similarly, you can check the cost of each call and the summary of the conversation as well.
>
> **[3:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=198)** Great. Next is the termination condition.
>
> **[3:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=202)** So these cells redefine our agents here with a termination condition.
>
> **[3:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=208)** So here you can see while defining the student agent, I have passed the parameter, is_termination_msg.
>
> **[3:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=215)** This function, this is a lambda function here.
>
> **[3:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=218)** This function checks if the word exit is in the message content, allowing the conversation to end naturally.
>
> **[3:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=228)** So run this.
>
> **[3:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=230)** And here we have simulated the conversation.
>
> **[3:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=234)** I'm really struggling with quadratic equations, can you help me understand them better, and then say, exit.
>
> **[4:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=240)** So if exit is found in the message response then the conversation would end.
>
> **[4:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=248)** So I have intentionally added it here so that I can showcase how this termination end condition is going to get triggered.
>
> **[4:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=257)** So you can see I hope this clarifies how to tackle quadratic equations.
>
> **[4:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=261)** And at the end, you can see the tutor has responded with exit, which would have triggered this condition that we have in the student agent.
>
> **[4:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/multi-agent-conversations?u=76281980&t=273)** So our conversation ended right here without going for the second turn.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), function (3), pass (1), let (1), lambda (1)
> **Code Identifiers:** llm_config (3), config_list (2), initiate_chat (1), chat_history (1), is_termination_msg (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** set up (2), configure (1)
> **Env Vars:** llm (1)

#### Research assistant design
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=0)** In this video, we are going to dive into an exciting application of multi-agent AI systems.
>
> **[0:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=6)** We're going to create a research assistant for marketing videos.
>
> **[0:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=10)** Now the system will demonstrate how we can leverage multiple AI agents, each with specialized roles to streamline the creative process and video marketing.
>
> **[0:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=21)** This is our research assistant.
>
> **[0:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=24)** It has four key components.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=26)** First is the assistant itself, which will oversee the entire process.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=30)** Then we have an idea generator, a script writer, and a reviewer.
>
> **[0:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=36)** These components work together to take a campaign topic and transform it into a polished video script.
>
> **[0:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=44)** Let's see how it works.
>
> **[0:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=46)** So first, a manager which could be a human or another AI agent, provides a campaign topic.
>
> **[0:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=55)** This sets the direction for our entire creative process.
>
> **[1:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=60)** Next, our idea generator goes to work.
>
> **[1:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=64)** The agent produces multiple ideas based on the given topic.
>
> **[1:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=67)** It's designed to think creatively and generate a variety of concepts that could work for our marketing video.
>
> **[1:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=75)** Then the manager reviews these ideas and selects one to develop further.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=81)** This step ensures that we are focusing our efforts on the most promising concept.
>
> **[1:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=87)** Once an idea is selected, our scriptwriter takes over.
>
> **[1:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=91)** The agent is tasked with creating a full script based on the chosen idea.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=96)** Finally, our script reviewer analyzes the completed script.
>
> **[1:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=101)** This agent provides detailed feedback, looking at aspects such as like coherence, engagement, and alignment with the original campaign topic.
>
> **[1:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=112)** To bring this system to life, we'll follow these steps.
>
> **[1:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=118)** First, we'll create these agents for each specific role.
>
> **[2:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=123)** Next, we'll create tasks for each agent.
>
> **[2:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=127)** These tasks will define what each agent needs to accomplish and how it should interact with the others.
>
> **[2:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=134)** These are basically system messages that we'll have to configure.
>
> **[2:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=138)** Finally, we'll initiate chats between the agents to achieve our goal.
>
> **[2:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=143)** This is where the magic happens.
>
> **[2:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=146)** Our agents will communicate, share ideas, and work together to produce the final script.
>
> **[2:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/research-assistant-design?u=76281980&t=152)** It's time to code this entire research assistant for our marketing campaigns.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)

#### Creating agents for the assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=0)** Let's start building our marketing video research assistant.
>
> **[0:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=3)** Here we will set up four distinct agents using the AutoGen library, where each agent will play a crucial role in our video-creation pipeline.
>
> **[0:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=13)** Let's start by importing all the necessary libraries.
>
> **[0:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=17)** Run this cell.
>
> **[0:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=18)** Configure the large language model.
>
> **[0:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=21)** The first agent that we are creating is the manager proxy agent.
>
> **[0:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=27)** Now this agent will act as the interface between the human user and our AI system.
>
> **[0:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=35)** Let's break this down.
>
> **[0:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=37)** We are using a user proxy agent instead of a conversable agent because this agent represents the human users' interests.
>
> **[0:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=47)** The system message here defines the agent's role and responsibilities.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=54)** So you are a marketing campaign manager, your role is to provide campaign topics, evaluate ideas and scripts generated by the creative team.
>
> **[1:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=63)** Human input mode is set to never, which means agent won't prompt for human input during execution.
>
> **[1:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=71)** We have set code execution for this agent as false as it is not needed for its role.
>
> **[1:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=79)** Providing the LLM configuration.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=81)** That's it.
>
> **[1:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=82)** Our manager proxy agent is now created.
>
> **[1:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=85)** Let's move on to the idea generator agent.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=90)** This is a simple conversable agent.
>
> **[1:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=92)** It is responsible for coming up with creative ideas for our marketing videos.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=97)** So notice how the system message is now more detailed, providing specific instructions on what the agent should do.
>
> **[1:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=106)** Generate innovative campaign ideas based on the given topic, suggest potential storylines, provide a brief outline for each idea.
>
> **[1:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=115)** Then provided with the LLM capabilities by passing on the config variable.
>
> **[2:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=121)** Human input mode here also is set to never.
>
> **[2:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=125)** Create the idea generator agent.
>
> **[2:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=128)** The next agent is script writer agent.
>
> **[2:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=131)** This will again be a convertible agent.
>
> **[2:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=134)** We're using a detailed system message to guide the agent's behavior and output.
>
> **[2:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=140)** This is an expert script writer for marketing videos.
>
> **[2:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=144)** Your role is to develop full scripts, include dialog, scene descriptions and camera directions, so on and so forth.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=150)** So run the cell and our script writer agent is also ready.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=156)** Finally, we create our script reviewer agent.
>
> **[2:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=160)** Now, this agent will provide crucial step of reviewing and refining our scripts to ensure they meet our quality standards.
>
> **[2:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=170)** So run this and our script reviewer agent is now also ready.
>
> **[2:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=176)** It's time to bring all of these agents together and start working on a project.
>
> **[3:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-agents-for-the-assistant?u=76281980&t=183)** Let's see how to do that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (1), finally, (1)
> **Env Vars:** llm (2)
> **Cross-References:** coming up (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (1), configure (1)

#### Creating tasks for the agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=0)** Now that our specialized agents are ready, it's time to create tasks for each of these agents, initiate the conversation between them, and complete our video-creation pipeline.
>
> **[0:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=11)** So we have imported the libraries, configured the large language model.
>
> **[0:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=15)** This is our manager proxy agent, which is going to oversee the process and evaluate ideas and scripts.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=23)** Further, we have idea generator agent.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=26)** This will create innovative campaign ideas.
>
> **[0:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=28)** Script writer will write scripts, full scripts on the selected ideas.
>
> **[0:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=35)** Then we have script reviewer agent which will analyze and provide feedback on the script.
>
> **[0:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=41)** Now this is where we are going to add tasks to each of these agents.
>
> **[0:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=46)** Now we'll do this by defining a list of chat interactions.
>
> **[0:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=51)** So this is a sequential interaction here.
>
> **[0:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=55)** We have a list of dictionaries called chats.
>
> **[0:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=58)** Here each dictionary represents a task or conversation.
>
> **[1:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=63)** So if you look at the first interaction here this is happening between the manager and the idea generator.
>
> **[1:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=69)** So sender and recipient specify which agents are involved.
>
> **[1:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=73)** Then we have the message which contains the instruction or query for the task.
>
> **[1:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=79)** Hello, I need creative ideas for our new marketing campaign.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=83)** Our product is eco-friendly, home cleaning products.
>
> **[1:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=86)** Could you generate three to five innovative campaign ideas?
>
> **[1:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=89)** Then we have summary method, summary arguments which specify how the conversation is going to be summarized.
>
> **[1:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=95)** Maximum turns between the two agents is set to two.
>
> **[1:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=99)** You can increase or decrease this.
>
> **[1:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=101)** Clear history; this determines whether to clear the conversation history before starting.
>
> **[1:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=107)** Then we have the second interaction between manager and script writer, third interaction between manager and script reviewer.
>
> **[1:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=114)** And finally, we need to make a decision which will be made by the manager itself.
>
> **[2:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=120)** And we'll make a final decision on the script, which is an interaction from manager to manager.
>
> **[2:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=128)** So each task is structured similarly with specific messages and summary prompts tailored to the task at hand.
>
> **[2:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=138)** So this is our sequential chat, which is a list of dictionary.
>
> **[2:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=142)** Let's quickly set this up.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=145)** So our chats are set up.
>
> **[2:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=148)** Now we need to use initiate chats and we provide the initial list of dictionaries, the messages, to this function.
>
> **[2:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=159)** We can initiate the conversation using this function which will start the conversation defined in our chat lists.
>
> **[2:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=167)** So run this and here is a complete conversation.
>
> **[2:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=172)** So manager to idea generator with the message.
>
> **[2:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=175)** Idea generator generates ideas and then manager asks to make some improvements.
>
> **[3:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=181)** So provided some feedback.
>
> **[3:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=183)** Idea generator worked on those suggestions.
>
> **[3:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=187)** Then script writer started writing scripts.
>
> **[3:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=190)** Then we have reviewer providing feedback on the script.
>
> **[3:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=197)** And finally, we had the manager make the conclusion in the final interaction that we need to incorporate some revisions and suggestions, which will enhance its effectiveness and reliability.
>
> **[3:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=209)** So if you want to provide or look at the summary of the complete chat, we can look at it in this manner.
>
> **[3:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=218)** So there were multiple chats that happened.
>
> **[3:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=221)** So this is a for loop that we have run here.
>
> **[3:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=224)** Finally, if you want to look at the cost of each call, you can check the cost attribute as well.
>
> **[3:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=230)** So this way, we have set up multiple agents and we have all of them interacting and contributing to each other to the complete video-creation task, which gets our marketing video campaign running.
>
> **[4:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=248)** So here this completes our marketing video research assistant pipeline from generating ideas to producing a final reviewed script.
>
> **[4:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-tasks-for-the-agent?u=76281980&t=258)** Next, we'll see how to make more of such sophisticated interactions in the upcoming chapters.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), function (2), this. (1), let (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** set up (2)


### 3. Solving Complex Tasks Using Nested Chats

> [↑ Back to Table of Contents](#table-of-contents)

#### Nested chats to add multi-level reviewing
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=0)** In this chapter, we're going to focus on solving complex tasks with nested chats in AutoGen.
>
> **[0:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=7)** Now nested chats is a sequence of chats created by a receiver agent after receiving a message from a sender agent and finished before the receiver agent replies to this message.
>
> **[0:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=20)** So how is this possible?
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=23)** Nested chats allow AutoGen agents to use other agents as their inner monolog to accomplish tasks.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=30)** In simpler terms, nested chats allow an agent to have its own internal dialog, or you can say, consult with other agents before responding to a message.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=43)** So let's try to understand this using an example scenario.
>
> **[0:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=48)** Here we want to build a pipeline where we could write or automate the process of writing blog posts.
>
> **[0:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=56)** We have user proxy that represents the user manages the overall process, a writer agent specialized in writing engaging blog posts.
>
> **[1:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=65)** And then we have a reviewer agent, expert in critiquing and improving the written content.
>
> **[1:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=71)** So how will this work?
>
> **[1:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=73)** We have the user proxy agent that issues the initial query to a writer that write a blog post on GPUs.
>
> **[1:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=82)** This user proxy agent acts as a proxy for the user.
>
> **[1:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=86)** Whenever an initial writing is provided, a critic or a reviewer should be invoked to offer critique as feedback.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=96)** Now, this workflow can be realized by a three-agent system as you are seeing over here.
>
> **[1:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=103)** The system includes a user proxy agent and a writer agent communicating with each other, with a reviewer agent nested within the user proxy agent to provide critique.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=117)** Whenever the user proxy receives a message from the writer, it engages in a conversation with this reviewer agent to work out feedback on the writer's message.
>
> **[2:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=130)** And this way, nested chats basically represent a powerful technique for creating more sophisticated AI agent interactions.
>
> **[2:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=141)** Now they'll allow us to model complex, multi-step processes and implement quality control measures within our AI system.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/nested-chats-to-add-multi-level-reviewing?u=76281980&t=150)** And in the next lesson, we'll start diving into the technical details and implementation of how nested chats can help us solve these complex tasks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Creating reviewer agents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=0)** In this lesson, we'll focus on creating specialized agents for our nested chat system.
>
> **[0:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=5)** We'll set up a writer agent and a reviewer agent, then demonstrate how they interact in a simple review process.
>
> **[0:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=13)** I have imported the required libraries, configured the large language model.
>
> **[0:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=18)** Let's create our writer agent first.
>
> **[0:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=21)** We're using the assistant agent class to create our writer.
>
> **[0:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=25)** Now, assistant agent is specialized for AI assistant-like interactions, making it ideal for our writing task.
>
> **[0:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=34)** It is designed to work seamlessly with advanced language models and can be easily customized through its system message.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=43)** So I've provided the name, then the system message, and provided it with llm_config to be able to access our GPT-4o from OpenAI.
>
> **[0:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=53)** Run this.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=54)** Our writer agent is now ready.
>
> **[0:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=56)** The next step is to define the task for this writer.
>
> **[0:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=59)** So here, I have written a multi-line string, write a concise but engaging blog post about GPUs.
>
> **[1:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=66)** So the task is defined.
>
> **[1:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=68)** In order to test out the writer agent, I can use the generate reply method here.
>
> **[1:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=75)** So writer.generate_reply, and you can pass the messages as a list of dictionary.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=81)** Where the dictionary should contain content.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=83)** Content is basically the message, the prompt for the agent, which is defined in the task variable here and the role is of a user.
>
> **[1:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=91)** So a user is asking to write a concise blog post.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=96)** So generate a reply and has the reply from the writer.
>
> **[1:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=101)** So it has written a concise blog post on GPUs.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=105)** The next step is to create a reviewer agent.
>
> **[1:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=108)** So just like a writer agent, we have reviewer agent which is created using AssistantAgent class, name, reviewer, is_termination_msg, and llm_config.
>
> **[2:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=120)** Finally, the system message to configure our reviewer agent.
>
> **[2:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=126)** This is done and we can now initiate the chat between our writer agent and reviewer agent.
>
> **[2:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=133)** So reviewer is initiating the chat, recipient is going to be the writer, and summary method is based on the last message.
>
> **[2:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=142)** So the task here is same as the task variable that we have defined above.
>
> **[2:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=147)** Run this.
>
> **[2:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=148)** So here you can see, write a concise but engaging blog post about GPUs.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=153)** Writer wrote this, reviewer provide feedback, and then writer incorporated that feedback.
>
> **[2:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=161)** So this was a simple interaction.
>
> **[2:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-reviewer-agents?u=76281980&t=163)** Let's see how to add more nested elements within this workflow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), pass (1), class, (1), finally, (1)
> **Code Identifiers:** llm_config (2), generate_reply (1), is_termination_msg (1)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** gpt (1)
> **Analogies:** just like (1)

#### Creating nested chat
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=0)** We have created a simple writer reviewer process for setting up our blog post writing pipeline.
>
> **[0:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=8)** But with nested chats, we can accomplish a lot more.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=12)** So in this lesson, we are going to add multi-level review process to our blog post writing pipeline.
>
> **[0:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=19)** I've imported the libraries, configured our large language model.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=23)** We have already created a writer agent.
>
> **[0:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=25)** We have our reviewer agent also, but it's time to add some specific reviewer agents.
>
> **[0:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=33)** First of all, we are going to add a specific SEO reviewer.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=38)** Now this reviewer is going to be making our content SEO-friendly.
>
> **[0:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=44)** So it's going to give us steps on how to make our blog post rank better in search engines.
>
> **[0:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=50)** Here also, we are using assistant agent.
>
> **[0:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=52)** We have provided an appropriate name, llm_config, and then the system message for this SEO reviewer agent. Run this.
>
> **[1:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=60)** Your SEO reviewer agent is created.
>
> **[1:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=62)** Similarly, we have created a grammatical error reviewer, so this is going to focus on the grammatical issues with the content.
>
> **[1:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=72)** It's going to make it crisp and error-free.
>
> **[1:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=75)** Define this.
>
> **[1:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=76)** Then we have our ethics reviewer.
>
> **[1:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=78)** This reviewer is keeping us honest.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=81)** It's going to look for ethical issues in our content.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=84)** Then finally, we have the meta reviewer.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=88)** Now this meta reviewer is like the team lead.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=90)** It's going to look at all the feedback from our specialized reviewers and will give us the final overview.
>
> **[1:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=99)** So let's create the meta reviewer as well.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=102)** Now we need to orchestrate this nested chat.
>
> **[1:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=107)** And this is where the magic happens.
>
> **[1:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=110)** Let's go through this.
>
> **[1:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=112)** So we're going to break down two crucial components here.
>
> **[1:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=115)** First is this function, reflection_message.
>
> **[1:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=118)** And then we have review chats list.
>
> **[2:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=121)** This function is pretty clever.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=124)** Here's what this is doing.
>
> **[2:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=125)** It takes four parameters: recipient, messages, sender, and config.
>
> **[2:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=131)** Recipient is the agent who will receive the message.
>
> **[2:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=133)** Messages is the full conversation history.
>
> **[2:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=136)** Sender is the agent who sent the original message.
>
> **[2:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=140)** And config if there is any additional configuration that is being sent.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=145)** Then what it does is it constructs a message asking to review some content.
>
> **[2:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=151)** So review the following content.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=153)** And then this is how in this last line they are accessing the last message in the conversation history.
>
> **[2:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=160)** So this minus one over here indicates that we are trying to access the last message.
>
> **[2:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=167)** Get the last item in the list.
>
> **[2:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=169)** So this returns this as a formatted string essentially saying, hey, review this content which is the last message in the conversation history.
>
> **[2:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=178)** Now the function is crucial because this allows each reviewer to automatically get most recent version of the content to review without us having to manually pass it around.
>
> **[3:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=191)** Here's how this is happening.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=193)** Now, this list is like a playbook for our nested chats.
>
> **[3:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=199)** Each dictionary in this list represents a step in our review process.
>
> **[3:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=204)** Let's break it down.
>
> **[3:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=205)** Here we have the recipient who is going to receive the message in the first entry.
>
> **[3:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=211)** This is our SEO reviewer message.
>
> **[3:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=214)** This is either a string message or a function that generates a message.
>
> **[3:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=219)** Then we have summary method that tells the agent how to summarize its review.
>
> **[3:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=224)** Summary arguments; these provide additional arguments for the summary method, and we have max turns that limits how many back-and-forth messages can occur in this nested chat.
>
> **[3:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=237)** Similarly, there are dictionaries for grammatical error reviewer, ethics reviewer, and finally the meta reviewer.
>
> **[4:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=245)** In the meta reviewer, we have configured it a little bit different.
>
> **[4:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=250)** Instead of using the reflection message to review the content, here, we are asking it to aggregate all the feedback.
>
> **[4:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=259)** So this is how we have set up our nested chat.
>
> **[4:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=265)** Let's run this.
>
> **[4:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=266)** And here we are going to register our nested chats.
>
> **[4:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=271)** So the list structure allows us to define a complex multi-step review process in a clear and organized way.
>
> **[4:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=280)** When it comes to registering, so we tell our general reviewer, so you can see I have used the general reviewer that we have defined above.
>
> **[4:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=289)** This general reviewer is going to register the nested chats.
>
> **[4:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=294)** So we have passed the review chats list and the trigger is the writer.
>
> **[4:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=299)** As soon as the writer writes the content, the blog post, the review, nested chat is going to get triggered.
>
> **[5:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=307)** Finally, we initiate the chat.
>
> **[5:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=309)** So the reviewer, the main reviewer, the general purpose reviewer is going to initiate the chat.
>
> **[5:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=313)** Recipient is going to be the writer, which is going to get the query to write a blog post on a topic.
>
> **[5:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=319)** Message, we have already defined the task above to write blog post on GPUs, and then we'll trigger our complete review pipeline.
>
> **[5:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=328)** So run this and there you go.
>
> **[5:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=331)** We have reviewer to writer, the first query, then writer to reviewer, and further SEO review.
>
> **[5:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=339)** So all of these are happening at this point.
>
> **[5:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=342)** Now you can see that general-purpose reviewer is asking specialized reviewer to do their job, reviewer to SEO reviewer, then to grammatical error reviewer, and all of these specialized reviewers are also sending their responses back to the reviewer.
>
> **[6:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=360)** So this is the inner monolog that is happening right now.
>
> **[6:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=365)** So you can see all the specialized reviewers are coming back with their responses on the content that has been written.
>
> **[6:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=372)** And finally, if you want to look at the summary of all these chats or the last message, this is the complete summary of our content and the feedback that has been provided by specialized reviewers.
>
> **[6:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=387)** So these are the kind of complex tasks that we can solve very easily using nested chats.
>
> **[6:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/creating-nested-chat?u=76281980&t=395)** So we have created a general-purpose reviewer, which has access to all these dedicated, specialized reviewers to provide a wholesome overview on the content that our writer has written.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (4), function (4), finally, (3), pass (1)
> **Env Vars:** seo (7)
> **CLI Commands:** make (2)
> **Code Identifiers:** llm_config (1), reflection_message (1)
> **Prerequisites:** set up (1)


### 4. Tool Use and Adding Internet Capability

> [↑ Back to Table of Contents](#table-of-contents)

#### What are tools?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=0)** In this lesson, we'll dive into an exciting topic. Tools.
>
> **[0:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=4)** This is a crucial concept that enhances the capabilities of our AI agents, allowing them to perform a wide range of tasks more effectively.
>
> **[0:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=15)** So tools are basically predefined functions that our agents can call to perform specific actions, and these actions can include searching the web, reading files, performing calculations, or calling APIs.
>
> **[0:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=32)** So essentially, tools extend the capabilities of our agents.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=38)** Let's look at how to use these tools with our agents.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=43)** First of all, you'll have to define tool function.
>
> **[0:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=46)** You can register the tools with the agents so that they have access to the right tool, to the right function that you have defined.
>
> **[0:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=56)** Then we'll have to implement tool-calling logic.
>
> **[1:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=60)** And lastly, we'll have to handle the response from the tool from our custom function.
>
> **[1:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=67)** Let's break these down one by one.
>
> **[1:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=70)** First, you need to create the function that will serve as your tool.
>
> **[1:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=73)** So a function to perform web search or it could be performing some sort of mathematical operation, a function to read and parse specific file types, or maybe just an API caller.
>
> **[1:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=86)** Then you would register this tool just like you registered the llm_config with the agent.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=93)** Once you have defined your tools, you need to make your agents aware of them.
>
> **[1:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=98)** So creating a list or dictionary of available tools.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=102)** You can associate each tool with its function and a description of what it does.
>
> **[1:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=108)** Then you pass this information to your agent during the initialization itself.
>
> **[1:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=114)** Third step is to implement tool-calling logic.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=117)** Here, you are analyzing the current task or query.
>
> **[2:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=121)** So you determine if a tool necessary to complete the task.
>
> **[2:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=125)** Selecting the appropriate tool based on the task requirements.
>
> **[2:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=129)** You will formulate the correct input for the chosen tool.
>
> **[2:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=134)** And lastly, in order to handle the response from the tool, you will have to interpret the results returned by the tool.
>
> **[2:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=143)** You'll have to incorporate the new information into its decision-making process.
>
> **[2:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=147)** Determine if further tool use is necessary, formulate a response or the next action based on the tool's output.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=156)** So all in all, tool use is a powerful feature that significantly expands the capabilities of our AI agents.
>
> **[2:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/what-are-tools?u=76281980&t=164)** And in the next lesson, we'll put this knowledge into practice by adding a calculation tool to our math tutor agent.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (2), pass (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** llm_config (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Prerequisites:** initialization (1)

#### Add calculation tool to math tutor agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=0)** It's time to dive into a practical example.
>
> **[0:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=3)** We're going to add a calculator tool to a math tutor agent using AutoGen.
>
> **[0:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=9)** I have imported all the required libraries and configured my large language model.
>
> **[0:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=16)** It's time to define the calculator tool, which is basically a Python function that takes in two integers.
>
> **[0:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=24)** And we can define multiple operators that this tool will support.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=30)** So what I've done in this code snippet, first of all, we have imported annotated and literal from the typing module for type hinting.
>
> **[0:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=41)** So this basically specifies the expected types of the inputs and output.
>
> **[0:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=48)** Then we define the operator type that can only be plus, minus, multiplication, and division.
>
> **[0:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=57)** This is the code if else.
>
> **[0:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=59)** And at last, it raises a value error.
>
> **[1:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=63)** So the function performs the requested operation and returns the result or raises a value error if an invalid operator is provided.
>
> **[1:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=74)** So let's define our calculator tool, which in this case is this Python function.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=81)** Further, we'll now create our math tutor agent.
>
> **[1:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=87)** Here, I'm using the ConversableAgent class from AutoGen in order to create our math tutor.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=93)** I provided the name assistant, system message for this tutor.
>
> **[1:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=98)** And finally, the llm_config.
>
> **[1:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=101)** You can simply remove this and keep it as your llm_config variable as defined above here.
>
> **[1:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=111)** Run this, and your assistant will also be created.
>
> **[1:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=115)** Post this, I have also created a user proxy agent.
>
> **[1:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=119)** So this agent will interact with our math tutor assistant.
>
> **[2:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=123)** It's configured to not use an LLM, so llm_config has been set to false.
>
> **[2:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=129)** And I've also passed the is_termination_msg which means that if the message contains the word terminate, we'll end the conversation right there.
>
> **[2:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=138)** We have set human input mode to never meaning it won't prompt for human input during the execution.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=145)** So in this lesson, we have not only learned about the tool use in theory but also seen how to implement it in practice.
>
> **[2:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=152)** We have set up our calculator tool and created our math tutor agent that can use this tool to perform the calculation.
>
> **[2:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-calculation-tool-to-math-tutor-agent?u=76281980&t=161)** In the next lesson, we will see how to register this tool with our agent and run a conversation that demonstrates the agent's ability to use this calculator tool.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (2), module (1), else. (1), let (1)
> **Code Identifiers:** llm_config (3), is_termination_msg (1)
> **CLI Commands:** python (2)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)

#### Register tools and run the agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=0)** We have our calculator tool ready; we have our math tutor agent ready.
>
> **[0:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=5)** Then we created our user proxy agent.
>
> **[0:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=7)** It's time to register the tools with our agents.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=12)** Now there are two ways to register tools with agents.
>
> **[0:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=16)** First is the direct registration, where we are using the register_for_llm and register_for_execution methods from our agent object.
>
> **[0:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=27)** Here, you can see that we used register_for_llm to register the calculator tool with the math tutor agent or the assistant agent that we have defined above.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=38)** This allows the assistant to suggest using the calculator.
>
> **[0:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=44)** So I have passed the name of the function, the description of what that function is all about, or what that tool is all about.
>
> **[0:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=51)** And then we have passed the calculator function to the method, register_for_llm.
>
> **[0:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=57)** Great.
>
> **[0:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=57)** The second function or the second method that we have over here is register_for_execution.
>
> **[1:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=64)** This is used to register the calculator tool with the user proxy agent, which will allow the user proxy to actually execute the calculator agent.
>
> **[1:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=75)** So assistant will suggest and user proxy agent is the one who is going to call or invoke this calculator tool.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=84)** So run this.
>
> **[1:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=86)** This is the first method.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=88)** The second method involves this utility provided by AutoGen which is called register_function.
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=94)** In this, we specify the function or the tool that we have to register, which is calculator in this case.
>
> **[1:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=103)** Then we specify the caller.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=105)** That means the agent that can call the function.
>
> **[1:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=109)** In this case, math tutor agent.
>
> **[1:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=111)** That's going to suggest that this tool should be called.
>
> **[1:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=114)** Then we have executor agent.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=117)** So user proxy agent can execute the calculator calls.
>
> **[2:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=122)** And finally, the name and the description and strings.
>
> **[2:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=126)** Run this.
>
> **[2:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=126)** This is the second way of registering tools.
>
> **[2:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=130)** It's time to see how this conversation pans out.
>
> **[2:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=134)** So here, user proxy will initiate the chat, will send the message to assistant, the math tutor, with this message, what is the value of this expression?
>
> **[2:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=144)** Let's see what the assistant tells.
>
> **[2:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=148)** So this was the first message at the top then assistant to user suggested tool call calculator.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=156)** And then you can see they have broken down the complete expression into multiple tool calls.
>
> **[2:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=163)** And finally, this turned out to be the final answer, 221490.
>
> **[2:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=170)** So this entire agent conversation happened this way.
>
> **[2:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=175)** They broke down the complete expression and made a call for each individual element of that expression.
>
> **[3:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=183)** And finally, the result of the expression turned out to be 221490 with this terminate message at the end that ended our conversation.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=193)** So here we've learned how to register these tools with our agents and initiate the conversation to make use of these tools.
>
> **[3:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=200)** This completes our implementation of tool using AI agent.
>
> **[3:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/register-tools-and-running-the-agent?u=76281980&t=205)** In the next lesson, we will see what are the other types of tools that we can configure in our AI agents.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), finally, (3), this. (2), this, (1), case. (1)
> **Code Identifiers:** register_for_llm (3), register_for_execution (2), register_function (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)

#### Add web search ability to the research assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=0)** Large language models usually do not have access to the internet, but we'll get up-to-date information if our AI agents had access to the web.
>
> **[0:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=11)** So in this lesson, we'll take our agent capabilities to the next level by adding web search functionality.
>
> **[0:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=19)** So we'll create a research assistant that can search the internet to answer our questions.
>
> **[0:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=25)** And for this, we'll need an external search API.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=30)** The search API that we're using is Tavily.
>
> **[0:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=32)** So make sure that you have installed these two packages.
>
> **[0:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=36)** AutoGen is already installed, and Tavily Python is an SDK that Tavily offers.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=43)** So we'll install this.
>
> **[0:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=45)** I already have this installed.
>
> **[0:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=47)** Next, we are importing the Tavily client from Tavily, which offers search APIs for LLMs.
>
> **[0:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=55)** We have our assistant agent user proxy agent, config_list, register_function which are required for us to register our tool.
>
> **[1:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=62)** So import the required libraries, configure the large language model.
>
> **[1:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=66)** The next step is to set up our Tavily web search tool.
>
> **[1:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=72)** Here, you'll need to get a Tavily API key from their platform.
>
> **[1:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=77)** So you just simply need to sign up and create an API key.
>
> **[1:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=80)** Store it in your dotenv file.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=84)** I already have the API key installed in my dotenv file here.
>
> **[1:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=89)** Once you have done that, you can create a Tavily client and this function takes a query string and returns the search results using the Tavily's Advanced Search API.
>
> **[1:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=100)** So that's how this tool is going to work for us.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=105)** So we have defined our custom tool, our custom function using Tavily client.
>
> **[1:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=111)** Next, we have added a ReAct prompt.
>
> **[1:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=113)** ReAct is reasoning and acting prompt.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=117)** It's nothing but a way of thinking and analyzing LLM's response.
>
> **[2:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=123)** So the agent is going to process our input query using this thought process, which is question, the input question you must answer.
>
> **[2:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=133)** Thought, you should always think about what to do.
>
> **[2:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=135)** Action, the action that one should take.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=139)** Action input, the input to the action, observation, thought, and then the final answer.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=145)** So this is a template ReAct prompt that we have added.
>
> **[2:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=148)** You can keep it simple also.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=150)** And finally, the input is where our or the user's question is going to get added.
>
> **[2:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=157)** Finally, we have created a function to format this prompt with the specific question that we want to ask.
>
> **[2:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=165)** So run this.
>
> **[2:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=166)** Our prompt template is also ready.
>
> **[2:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=168)** The next step is to define the agents.
>
> **[2:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=171)** We have a user proxy agent that represents the user.
>
> **[2:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=175)** It is set up to allow for human input and to terminate the conversation when appropriate.
>
> **[3:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=182)** And we have a research assistant.
>
> **[3:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=184)** So this assistant agent that acts as our research assistant, it's given a system message that defines its role and capabilities.
>
> **[3:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=194)** So let's define our agent.
>
> **[3:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=197)** Finally, we'll register the search tool using the register function utility from AutoGen.
>
> **[3:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=202)** I have passed my tools which is called search tool function that we have defined above, caller is research_assistant, executor is user_proxy, name, and description. Done.
>
> **[3:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=213)** Finally, we'll initiate the chat.
>
> **[3:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=216)** My question to the assistant agent is who won the T20 Cricket World Cup in 2024?
>
> **[3:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=223)** Now, we all know LLMs do not have access to current affairs, so this will have to go to the tool in order to get the correct answer.
>
> **[3:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=233)** Let's run this.
>
> **[3:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=234)** So user to assistant.
>
> **[3:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=235)** This question was asked.
>
> **[3:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=237)** Use the following format and then we have the assistant to user, suggested tool called search tool, and we got the response.
>
> **[4:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=246)** So since we have opted for human input always, it is asking for my input here.
>
> **[4:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=253)** So I can simply press Enter.
>
> **[4:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=256)** No human input received using autoreply, executing function search tool.
>
> **[4:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=263)** Let's see what this returns. There you go.
>
> **[4:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=266)** We have our final response.
>
> **[4:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=268)** So this was the response from the Tavily client.
>
> **[4:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=272)** As you can see, a JSON response after the search API was called.
>
> **[4:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=276)** And finally, thought, the search result indicates that India won the T20 Cricket World Cup in 2024, and that is true.
>
> **[4:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=283)** So with this, we have added a web search functionality to our AI agent, which is a huge unlock.
>
> **[4:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/add-web-search-ability-to-the-research-assistant?u=76281980&t=292)** Now you can build many different types of application where current affairs or a web search is required.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), finally, (5), this. (3), let (3), this, (2)
> **Env Vars:** api (7), t20 (2), sdk (1), llm (1), json (1)
> **Prerequisites:** set up (2), install (1), configure (1), you'll need (1)
> **Code Identifiers:** config_list (1), register_function (1), research_assistant (1), user_proxy (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1), python (1)
> **Exercise Files:** template (2)
> **UI Navigation:** go to (1)


### 5. Building an End-to-End Coding Copilot in Autogen

> [↑ Back to Table of Contents](#table-of-contents)

#### Code executors in AutoGen
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=0)** So we have come to chapter five now where we're going to focus on code execution and AutoGen.
>
> **[0:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=6)** Our first lesson focuses on the crucial components of this system.
>
> **[0:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=11)** So what is a code executor?
>
> **[0:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=14)** It's basically a component in AutoGen that takes input messages containing code blocks, executes that code, and outputs messages with the results.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=26)** So it basically acts as a bridge between our AI agents and the actual execution of code.
>
> **[0:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=34)** If you talk about the flow of code execution, we have a code writer agent, which is basically a large language model.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=43)** So the LLM will generate the code for us.
>
> **[0:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=46)** And this agent then generates messages containing code blocks, which further are sent to the code executor for execution to see what the output is going to look like.
>
> **[0:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=58)** The code executor runs the code and generates the output.
>
> **[1:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=62)** The execution output is then sent back as messages.
>
> **[1:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=67)** Now this cycle allows our AI agents to not just write code, but also see the results of that code.
>
> **[1:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=74)** So if you talk about the type of code executors, AutoGen provides two main ways of executing code.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=83)** One is local command line executor, where it runs the code directly on our local machine's operating system.
>
> **[1:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=91)** But this one has security concerns because you do not know what type of code LLMs are going to generate.
>
> **[1:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=99)** The second type of execution is on Docker command line executor.
>
> **[1:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=104)** This runs the code inside a Docker container.
>
> **[1:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=108)** For this, you'll have to install Docker on your system.
>
> **[1:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=112)** And this provides an extra layer of isolation and security.
>
> **[1:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=116)** If you want to learn how both of these work, let's try to understand first of all, local command line executor.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=124)** Here, what would happen is the agent will send a message with code blocks to the code executor.
>
> **[2:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=132)** This code executor will write the code to a file on our local system, which is then executed using our local command line.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=145)** The execution output is then read from the console, and this output is sent back to the agent as a message.
>
> **[2:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=155)** So this is local command line execution.
>
> **[2:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=158)** When we talk about Docker command line executor, this process starts the same way: the agent sending a message containing the code, the code executor writes the code to a file, but this time inside a Docker container.
>
> **[2:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=174)** The code is executed within the container, the output is read from the container's console, and then the output is sent back to the agent.
>
> **[3:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=185)** The key difference is that with Docker, the code runs in an isolated environment, which can be safer and more controlled.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=193)** So we have introduced the concept of code executor in AutoGen.
>
> **[3:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/code-executors-in-autogen?u=76281980&t=199)** In the next lesson, we'll dive deeper into creating agents that will use these code executors.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6)
> **Tools:** command line (6)
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### Create agents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=0)** It's time to put our knowledge into practice.
>
> **[0:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=3)** In this lesson, we'll focus on setting up our code-writing agent and a code executor agent.
>
> **[0:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=10)** So let's see how to do that.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=12)** I've imported the required libraries, but there is an important addition for code execution.
>
> **[0:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=17)** We're going to use local command line code executor provided by the coding module of AutoGen.
>
> **[0:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=24)** So import the libraries, configure the LLM.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=30)** The next step is to add a code executor.
>
> **[0:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=34)** Now since we are using local command line code execution, I have created an instance here where timeout is the timeout for each code execution in seconds.
>
> **[0:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=45)** So this is 10 seconds.
>
> **[0:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=47)** And then we have provided a work directory where all the code or the outputs are going to get stored.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=54)** So I have provided coding.
>
> **[0:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=56)** That means a coding directory is created within the system, and all the code files or assets are going to get stored within this directory.
>
> **[1:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=67)** So let's run this.
>
> **[1:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=69)** Our executor is also ready now.
>
> **[1:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=72)** The next thing is to create our code executor agent.
>
> **[1:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=79)** Now, to define our code executor agent, we are using ConversableAgent class from AutoGen.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=84)** I have provided the name, code_executor_agent.
>
> **[1:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=87)** This does not require LLM.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=90)** So llm_config has been set to false because the agent doesn't need to generate any text.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=96)** Then we provide a code_execution_config with the executor which we have defined earlier.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=105)** And then human input mode is set to always allowing for human intervention if needed.
>
> **[1:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=112)** We provide a default autoreply to guide the conversation flow.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=117)** So let's run this cell to define the executor agent.
>
> **[2:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=122)** Further, we define our code writing agent.
>
> **[2:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=125)** So here we are using the assistant agent class from AutoGen.
>
> **[2:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=130)** We have named it code_writer_agent.
>
> **[2:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=133)** We have provided the llm_config, allowing the agent to generate text and code.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=139)** We set the code_execution_config to false because this agent will write code, but not execute it.
>
> **[2:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=147)** We set human input mode to never as we want the agent to operate autonomously.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=153)** So run this and our writer agent is also created.
>
> **[2:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=158)** If you want to check the system message of any of these agents, you can check that as well.
>
> **[2:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=164)** So we can capture the system message attribute from the code writer agent here.
>
> **[2:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=171)** So once you run this code_writer_agent_system_message, and there you go.
>
> **[2:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=177)** You are a helpful AI assistant.
>
> **[2:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=179)** Solve tasks for coding and language skills.
>
> **[3:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=182)** So this is the complete system message for our code writer agent.
>
> **[3:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=188)** Note that the system message is a crucial part of agent's configuration, as it defines the agent's role and capabilities.
>
> **[3:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=195)** So in this lesson, we have set up the two main agents for our coding copilot, a code executor agent that can run the code and provide feedback, and a code writer agent that can generate the code based on requirements.
>
> **[3:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/create-agents?u=76281980&t=209)** In the next lesson, we'll define a specific task for our coding copilot.

> [!info]- Semantic Content
>
> **Code Identifiers:** llm_config (2), code_execution_config (2), code_executor_agent (1), code_writer_agent (1), code_writer_agent_system_message (1)
> **Code Keywords:** let (3), module (1), this. (1), require (1)
> **Env Vars:** llm (2)
> **Tools:** command line (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)

#### Define task to analyze data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=0)** In this lesson, we are going to put our coding copilot to work.
>
> **[0:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=3)** We'll define a specific task for stock analysis and have our agents collaborate to complete that analysis.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=12)** Then we'll examine the output as well.
>
> **[0:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=14)** Here, I've imported the libraries, configured my large language model.
>
> **[0:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=19)** We have already created an executor instance.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=23)** So we have set a timeout of 10 seconds, and we have specified the working directory which is named coding, where our code and output will be stored.
>
> **[0:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=33)** Finally, we have created our code executor agent and code writer agent.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=38)** If you want to check the system message of the code writer agent, it looks something like this.
>
> **[0:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=44)** Now comes adding the task.
>
> **[0:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=47)** So what is this stock analysis task that we have provided to our agent?
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=54)** In this case, we have imported date time date because we want the analysis to be done as per today's date.
>
> **[1:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=62)** So as per the course recording date.
>
> **[1:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=66)** So I've captured the current date using date.today() method.
>
> **[1:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=70)** We import the date module above to get the current date.
>
> **[1:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=74)** We create an instruction string here, and this string is asking for a graph of ytd, that is, year-to-date, stock performance for Nvidia and Tesla.
>
> **[1:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=89)** It specifies that the code should be in a markdown code block, and the output should be saved as ytd_stock_gains.png.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=102)** And this will be stored in the coding directory, which we have already specified in our executor instance.
>
> **[1:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=109)** So this task will require our code writer to generate Python code that can fetch stock data, process it, and create a graph, and save it as an image.
>
> **[2:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=123)** So let's define the instruction here.
>
> **[2:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=126)** It's time to initiate the chat.
>
> **[2:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=129)** We are starting the interaction between our agent.
>
> **[2:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=132)** So we have specified that the code executor agent is going to initiate the chat.
>
> **[2:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=136)** It's going to go to code writer agent.
>
> **[2:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=138)** And then the instruction, the initial message is also provided as we have defined above.
>
> **[2:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=144)** So the conversation starts.
>
> **[2:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=147)** Let's run this code.
>
> **[2:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=149)** Here you go.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=150)** Code executor agent to code writer agent as of this date.
>
> **[2:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=154)** So the date has been captured.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=156)** Please generate a graph.
>
> **[2:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=158)** Okay, you can see the code writer agent has generated the code here.
>
> **[2:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=163)** So it is capturing the data from Yahoo!
>
> **[2:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=165)** Finance library and then plotting the charts here.
>
> **[2:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=170)** So save this code in a file named this.
>
> **[2:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=173)** So the Python file is also getting stored in our coding directory.
>
> **[2:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=179)** So I will simply hit Enter.
>
> **[3:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=183)** It is going to use autoreply.
>
> **[3:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=185)** And there you go.
>
> **[3:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=188)** The final code writer agent to code executor agent.
>
> **[3:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=190)** Great. The script executed successfully and generated the graph, ytd_stock_gains.png.
>
> **[3:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=198)** So this is done.
>
> **[3:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=200)** I will exit this conversation and I'll check what this image actually looks like.
>
> **[3:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=206)** So we'll check the output here.
>
> **[3:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=208)** I have imported the image class from IPython.
>
> **[3:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=213)** display to look at this image.
>
> **[3:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=215)** And I am joining the path from the coding directory.
>
> **[3:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=220)** And this is the name of the file.
>
> **[3:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=222)** So this is basically to generate the path where this file is stored.
>
> **[3:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=228)** Let's run this.
>
> **[3:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=229)** And this is the image which the code executor and the code writer agent together have collaborated to create.
>
> **[3:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=239)** And if you want to see where this is stored, it's stored in this folder of mine, coding directory.
>
> **[4:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=245)** And all of our files are stored here.
>
> **[4:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=248)** So this is the image that our coding copilot created autonomously.
>
> **[4:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=255)** We have not provided any function, any code.
>
> **[4:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=258)** LLM provided the code, executor executed it, and we have our final output with us.
>
> **[4:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=264)** And that's our coding copilot.
>
> **[4:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/define-task-to-analyse-data?u=76281980&t=267)** In the next lesson, we'll dive deeper into how we can interact with these coding copilots and how we can provide custom functions to these writer and executor so that they use our functions to generate such plots.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (3), finally, (1), case, (1), module (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** ytd_stock_gains (2)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Execute user-defined code in AutoGen
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=0)** In this lesson, we are going to enhance our coding copilot by adding custom functions for stock analysis and exploring how to execute user-defined code.
>
> **[0:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=11)** So I've imported the libraries, configured the LLM.
>
> **[0:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=15)** Let's define our custom functions for stock analysis.
>
> **[0:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=19)** Here, I have two functions.
>
> **[0:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=21)** The first one is get stock prices.
>
> **[0:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=24)** This fetches stock data using the yfinance library.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=30)** The second function is the plot stock prices.
>
> **[0:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=35)** This creates and saves a plot of stock prices.
>
> **[0:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=39)** Now these functions will be made available to our coding copilot, allowing it to perform more specialized tasks.
>
> **[0:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=48)** If you want to add something to these functions, you can do so as well.
>
> **[0:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=51)** So we have defined these.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=54)** The next step is to create a new executor with these custom functions.
>
> **[1:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=60)** So here, I have a local command line code executor with a timeout of 60 seconds, working directory named coding, and our custom functions, which will be available to the executor.
>
> **[1:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=73)** So I have passed that as a list.
>
> **[1:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=76)** So in this list, I have passed the names of these custom functions.
>
> **[1:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=82)** So executor is also ready.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=84)** I have defined the code writer system message beforehand.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=88)** So this is another way.
>
> **[1:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=90)** So it's basically the same system message that we had in the assistant agent in the previous lesson.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=97)** Here, I have defined it myself.
>
> **[1:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=99)** To this, we'll further add format functions for prompt.
>
> **[1:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=104)** So what is this doing?
>
> **[1:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=106)** We are updating the system message for our code writer agent.
>
> **[1:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=111)** So the format functions for prompt method adds information about our custom functions to the system message, allowing the agent to use them in its code generation process.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=124)** So the code writer would have access to the custom functions that we have defined.
>
> **[2:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=128)** So you can see, I'm simply appending this executor information, the custom function that I passed in my executor to the system message of my code writer agent.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=139)** So this has become the updated system message for my code writer agent now.
>
> **[2:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=146)** It's time to define the agents with the updated system message.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=150)** So code writer agent, this is the updated code writer system message.
>
> **[2:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=154)** Everything else remains the same as the previous lessons.
>
> **[2:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=158)** Finally, the code executor agent with our executor provided here.
>
> **[2:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=164)** Run this.
>
> **[2:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=166)** The next step is to provide the initial instruction.
>
> **[2:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=170)** Here, we initiate the chat between our agents, providing a task to download and plot the stock prices for Nvidia and Tesla.
>
> **[2:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=179)** So if you run this, we have the conversation going on here, all the steps, et cetera.
>
> **[3:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=186)** please save the code in this particular file and execute it.
>
> **[3:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=190)** I'll hit enter here.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=193)** Executing code block. Great.
>
> **[3:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=194)** It looks like everything executed successfully and the stock prices has been saved to this file.
>
> **[3:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=200)** Everything is getting stored in the coding directory.
>
> **[3:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=202)** I will end the conversation here, exit.
>
> **[3:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=207)** And finally, I will try to plot the image that these agents created using our custom functions.
>
> **[3:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=217)** So plot these and you have the image plotted by the agents using the custom functions of the users.
>
> **[3:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=228)** So this is how you can integrate custom functions and have the agents work, or use your code blocks instead of LLMs having to generate the code.
>
> **[4:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=242)** So incorporate these functions into your code execution environment.
>
> **[4:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=246)** Update the agents to use these new capabilities.
>
> **[4:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/executing-user-defined-code-in-autogen?u=76281980&t=250)** So that's code execution with AutoGen.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), this, (2), finally, (2), let (1), this. (1)
> **Env Vars:** llm (1)
> **Tools:** command line (1)


### 6. Teachable Agents

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to teachable agents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=0)** Welcome to the chapter on Teachable Agents.
>
> **[0:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=2)** In this lesson, we'll learn what teachable agents are, what are the problems that they solve, and how they work.
>
> **[0:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=10)** So before we dive into teachable agents, let's quickly understand the problem with LLM-based assistants.
>
> **[0:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=18)** We all know that they can remember the current chat, but the memories are lost once the chat ends.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=26)** They can demonstrate in-context learning, but this is also lost between different sessions.
>
> **[0:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=33)** For long conversations, you must have observed, the context window becomes too full, which limits the effectiveness of the LLM response.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=43)** And users often need to repeat instructions in every new chat.
>
> **[0:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=50)** Now, teachable agents address all of these limitations, allowing for more efficient and personalized interactions.
>
> **[0:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=59)** So what are teachable agents?
>
> **[1:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=62)** These are AI systems that can learn and retain new information from user interactions across multiple conversations.
>
> **[1:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=71)** They use persistent memory mechanisms to store and retrieve user-taught information, making them more adaptive and personalized over time.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=81)** So how do these work?
>
> **[1:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=85)** Teachable agents work by using a vector database for long-term memory across chats, retrieving specific memories, which are called memos as needed.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=96)** So they allow one-time teaching of facts and skills.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=102)** And finally, they integrate with ConversableAgent via a Teachability object and you can learn different types of information.
>
> **[1:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=112)** You can learn new facts.
>
> **[1:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=115)** So general knowledge or specific information, they can learn user preferences like personal likes or dislikes or settings.
>
> **[2:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=123)** Teachable agents can also learn new skills.
>
> **[2:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=126)** So if you want to teach any new skill or a process, you can do that as well.
>
> **[2:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=132)** This versatility allows the agent to become increasingly tailored to the user's needs over time.
>
> **[2:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=141)** We'll see how to implement this sort of a teachable agent by inheriting a ConversableAgent and turning it into a teachable AI system.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/introduction-to-teachable-agents?u=76281980&t=153)** In the next lesson, we'll dive deeper into how to implement a teachable agent.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** llm (2)
> **Cross-References:** in the next (1)

#### Setting up teachable agents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=0)** In this lesson, we are going to get hands-on and we'll implement a teachable agent using AutoGen.
>
> **[0:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=6)** To get started, first of all, you will have to install pyautogen with the teachable option.
>
> **[0:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=12)** Now what this does is it will add the vector database which Teachability is going to use in order to store all the user-related information and chat messages to provide a personalized response.
>
> **[0:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=26)** So this uses Chroma DB, which is a vector database inherently.
>
> **[0:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=32)** Now, in order to move forward, first, we'll import the required libraries, configure our large language model, and then we'll create our teachable agent.
>
> **[0:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=42)** So here's what we are doing.
>
> **[0:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=44)** We create a ConversableAgent.
>
> **[0:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=47)** We have named it teachable_agent here.
>
> **[0:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=49)** Then we instantiated the Teachability object.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=54)** So if you see, we have imported teachability from AutoGen's agentchat.contrib.capabilities and then Teachability module.
>
> **[1:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=64)** From this, we have imported the service which offers this ability to make our ConversableAgents teachable.
>
> **[1:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=74)** So we have instantiated this object, reset_db set to false.
>
> **[1:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=79)** So if you want to force reset your DB, then you can set it to true.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=84)** Otherwise, if you want to use the existing DB, you can set it to false.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=88)** The next parameter is path to DB directory.
>
> **[1:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=91)** So this can be any path.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=93)** I have just added .tmp.
>
> **[1:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=96)** So created a temporary directory within this directory itself.
>
> **[1:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=100)** The next step is to add the Teachability capability to our agent using the add_to_agent method.
>
> **[1:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=109)** The last step is to test our system.
>
> **[1:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=113)** Test our teachable agents using a user proxy agent.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=117)** So name is user, human input mode, always, because I want to chat with this teachable agent.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=124)** And finally, code execution.
>
> **[2:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=126)** We do not need to execute any code.
>
> **[2:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=128)** So this is set to false.
>
> **[2:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=130)** Run this.
>
> **[2:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=131)** Our teachable agent is now ready.
>
> **[2:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=134)** You can see that we are loading memory from disk.
>
> **[2:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=137)** So since I have added reset_db set to false.
>
> **[2:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=142)** So it is using an existing database.
>
> **[2:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=145)** I have already had a chat with this teachable agent once.
>
> **[2:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=150)** I've already provided my name, so let's see if it is able to remember all of that information.
>
> **[2:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=157)** So that means it will be able to remember information across different sessions, across different chats.
>
> **[2:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=163)** Let's initiate the chat.
>
> **[2:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=165)** So the teachable agent is initiating the chat here with the initial message, hi, I am a teachable user assistant. What's on your mind?
>
> **[2:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=172)** So let's see.
>
> **[2:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=173)** Now it's asking for my prompt; so it's prompting me to add an input.
>
> **[2:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=178)** I'm going to ask, what's my name?
>
> **[3:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=185)** So I'm now waiting for the teachable agent to look into the database.
>
> **[3:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=189)** So you can see that this is the first message I have sent.
>
> **[3:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=193)** And it retrieved the information from the database and told me, hello, Harshit, how can I assist you today?
>
> **[3:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=199)** Okay, so in the last conversation that I had, I mentioned the type of ramen that I like.
>
> **[3:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=206)** Which ramen do I like?
>
> **[3:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=212)** It's getting the answer.
>
> **[3:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=213)** So I provided this information to my agent in my previous conversation that I like miso ramen.
>
> **[3:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=221)** And that's what it has responded me with.
>
> **[3:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=226)** So it has clearly identified from the chat, previous chat that I like miso ramen.
>
> **[3:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=232)** So this has been great.
>
> **[3:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=234)** We have been able to implement our teachable agent, which is having a persistent memory mechanism and will provide more personalized information.
>
> **[4:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=245)** So now you can see that it can adapt to user preferences.
>
> **[4:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=249)** It learns new facts.
>
> **[4:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/setting-up-teachable-agents?u=76281980&t=251)** In the next lesson, we'll see how teachable agents learn user preferences and how they learn new skills.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (1), this, (1), finally, (1), this. (1)
> **Code Identifiers:** reset_db (2), teachable_agent (1), add_to_agent (1)
> **Cross-References:** in the last (1), in the next (1)
> **Prerequisites:** install (1), configure (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### Teaching and retrieving information
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=0)** Now that we have implemented our teachable agents, let's see how they can learn user preferences or even a new skill.
>
> **[0:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=8)** So let's quickly run all the cells.
>
> **[0:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=11)** These are same as the ones that we wrote in our previous lesson.
>
> **[0:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=16)** So our teachable agent is now ready.
>
> **[0:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=19)** One thing to note is I have set reset_db to true.
>
> **[0:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=22)** So everything that the agent has learned so far, from all the conversations that I've had, all of that would be refreshed.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=30)** So let's initiate the chat here.
>
> **[0:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=34)** Hi, I am a teachable user assistant.
>
> **[0:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=36)** What's on your mind?
>
> **[0:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=37)** So I'm initiating the chat and this time I have picked up a task to summarize the abstract of a research paper.
>
> **[0:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=46)** So this research paper I've picked, this is a randomly picked AutoGen paper.
>
> **[0:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=51)** So here, I am copying the abstract of this research paper.
>
> **[0:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=57)** And I'm going to ask this teachable agent that please summarize this abstract, colon, and then paste the abstract.
>
> **[1:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=70)** Hit Enter.
>
> **[1:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=72)** So I've got the summary from the teachable agent.
>
> **[1:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=75)** AutoGen is an open-source framework.
>
> **[1:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=77)** So it has returned the summary in this format.
>
> **[1:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=80)** But I want the summary to have a structure.
>
> **[1:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=84)** So I'll say, I always like my summary to have three bullet points: the title, the key ideas, and the key takeaways.
>
> **[1:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=110)** Now summarize this abstract And I'll again
>
> **[1:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=119)** copy this abstract and paste it here.
>
> **[2:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=125)** Let's see how the LLM changes the summary or adds more structure to the summary this time around.
>
> **[2:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=134)** So the LLM, when I specified the instructions to summarize the abstract in a particular format, now it has given me the title, key Ideas, and key takeaways. Great.
>
> **[2:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=149)** Now I'll exit the conversation right here.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=153)** Exit the conversation.
>
> **[2:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=154)** Here, I'm going to start another session.
>
> **[2:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=157)** But before that, this time, for my agent, I will not reset the DB.
>
> **[2:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=164)** Okay. Loading the memory from disk.
>
> **[2:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=167)** So I already have my pickle file here.
>
> **[2:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=169)** So my previous conversations are now loaded.
>
> **[2:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=173)** Let's see if it remembers everything from our previous session.
>
> **[2:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=178)** So please summarize.
>
> **[3:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=181)** And this time around, I won't provide the instructions.
>
> **[3:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=184)** I'll just simply paste the abstract.
>
> **[3:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=187)** So the instructions are not specified here.
>
> **[3:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=192)** It should remember the instructions from our previous interactions.
>
> **[3:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=196)** And that's how I would know that it has learned my preference.
>
> **[3:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=201)** So there you go.
>
> **[3:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=204)** We have the title, key ideas, key takeaways in the same format.
>
> **[3:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=208)** The summary is provided to us in the same format as we had in our previous interaction.
>
> **[3:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=214)** So I do not have to repeat myself.
>
> **[3:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=217)** This is again going to be a huge unlock for us.
>
> **[3:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=221)** The next thing that we want to learn is, if this teachable agent can learn new skill.
>
> **[3:48](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=228)** Now for this, I have a mathematics question.
>
> **[3:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=232)** Here, I'll add this question.
>
> **[3:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=234)** I'll just paste it here.
>
> **[3:55](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=235)** This question is consider this equation.
>
> **[3:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=239)** Can you modify exactly one integer and not more than one on the left-hand side, such that the right-hand side of the equation becomes 80?
>
> **[4:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=252)** That's the question that I have given this.
>
> **[4:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=255)** And I have provided some steps that let's think step by step, write down a plan, so on and so forth.
>
> **[4:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=261)** So I'm going to give this query to our agent.
>
> **[4:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=266)** Let's see how it resolves this.
>
> **[4:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=269)** Okay. So it has given us solution steps.
>
> **[4:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=274)** First is calculate the current left-hand side, identify the target, determine the necessary adjustments, all of those things, conclusion, and then final calculation.
>
> **[4:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=284)** So final solution is given in this format.
>
> **[4:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=287)** Now alongside the problem, I'll also specify some advice, some instructions on how to do it step by step.
>
> **[4:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=297)** So let's first of all copy the problem statement.
>
> **[5:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=303)** This is my problem statement.
>
> **[5:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=304)** This is same as the last problem statement.
>
> **[5:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=307)** And I'll also specify the structure in which I want my solution.
>
> **[5:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=314)** So there we go.
>
> **[5:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=317)** At the end, I have added some instructions, recompute steps, all of those things.
>
> **[5:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=323)** So let me just walk you through.
>
> **[5:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=326)** So consider this and then write down a plan, write down your solution.
>
> **[5:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=331)** Calculate the difference.
>
> **[5:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=332)** So I have specified all the instructions in this way.
>
> **[5:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=335)** So this is going to be helpful if I want more challenging tasks to be resolved.
>
> **[5:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=341)** So I would first teach my agent how it is done.
>
> **[5:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=346)** And then I'll always be able to solve the problem or achieve my task in that manner, so I would not have to repeat myself again and again.
>
> **[5:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=356)** So it has now learned the method.
>
> **[6:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=360)** So identify the current value of the left-hand side, calculate the current value on the right-hand side.
>
> **[6:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=365)** So plan solution steps, so on and so forth.
>
> **[6:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=369)** So this time you can see there are more steps as per the instructions that I provided.
>
> **[6:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=374)** And now when I'll exit, this agent would always remember these instructions, and now I would be able to solve more and more complex problems in this manner, as the agent now has a new skill which does things as per my preference.
>
> **[6:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=392)** So that's how teachable agents are going to be a huge unlock.
>
> **[6:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=397)** And it'll solve many different types of problems across different sessions.
>
> **[6:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/teaching-and-retrieving-information?u=76281980&t=402)** So you'll never have to repeat yourself, and it'll always remember how you want things to be done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), abstract (8), this. (2), this, (1)
> **Env Vars:** llm (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** reset_db (1)


### 7. Building a Data Analysis Company with Group Chat

> [↑ Back to Table of Contents](#table-of-contents)

#### Organizational structure of agents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=0)** Welcome to the last chapter of our course.
>
> **[0:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=2)** In this chapter, we are going to build a virtual data analysis company using a group chat of specialized AI agents.
>
> **[0:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=10)** The first lesson is going to focus on setting up the organizational structure.
>
> **[0:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=15)** That means creating the agents that will form our company.
>
> **[0:18](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=18)** So I have imported the libraries, configured the LLM.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=23)** The task at hand is to analyze the daily closing prices of Apple or any other stock for the past one month and create a brief report.
>
> **[0:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=33)** But you can change the task as per what you want your company to do.
>
> **[0:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=38)** The next step is to create the agents that will form our company.
>
> **[0:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=44)** The first one that we are building here is the user proxy agent or the admin.
>
> **[0:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=50)** This admin agent represents the user providing tasks and feedback on the final report.
>
> **[0:58](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=58)** So all we have to do is provide a name, system message, code_execution_config is set to false because this agent is not required to execute any code.
>
> **[1:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=68)** That's all.
>
> **[1:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=69)** Human_input_mode is set to always.
>
> **[1:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=73)** All right. Next agent is planner.
>
> **[1:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=75)** The planner agent determines what information is needed and outlines the steps to complete that task.
>
> **[1:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=83)** So we have defined a detailed system message here.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=88)** That's all.
>
> **[1:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=89)** Then we have an engineer.
>
> **[1:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=91)** We've used an assistant agent to create our engineer.
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=94)** This is going to write the code to fetch and analyze the stock data.
>
> **[1:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=100)** Engineer agent is also ready.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=102)** Whatever code engineer is going to provide needs to be executed as well.
>
> **[1:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=107)** So we'll need an executor agent that runs the code provided by the engineer and then reports the results.
>
> **[1:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=114)** This is a ConversableAgent.
>
> **[1:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=116)** We have the system message, human_input_mode, never.
>
> **[1:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=119)** And then we have provided the code_execution_config as well.
>
> **[2:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=123)** So the working directory here as you can see is the same coding directory that we have used in the previous lessons.
>
> **[2:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=129)** So executor agent is ready as well.
>
> **[2:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=132)** Lastly, based on the analysis done we also have a writer agent to compile a report on it.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=139)** So this writer agent composes the final report based on the data analysis results and refines it based on the feedback.
>
> **[2:27](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=147)** So this agent is also ready.
>
> **[2:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=151)** In the next lesson, we'll learn how to build a group chat that allows these agents to collaborate effectively.
>
> **[2:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/organisational-structure-of-agents?u=76281980&t=159)** We'll explore how to set up communication channels and define the interaction patterns that will enable this virtual company to tackle focused data analysis tasks.

> [!info]- Semantic Content
>
> **Code Identifiers:** code_execution_config (2), human_input_mode (1)
> **Prerequisites:** required to (1), set up (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Build the group chat
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=0)** It's time to implement a group chat functionality for our data analysis company.
>
> **[0:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=4)** This will allow our specialized agents to collaborate on this task.
>
> **[0:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=9)** I have imported all the required libraries, but if you notice, there are two new additions that we have imported from the AutoGen library, which is group chat, and there is also a group chat manager.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=23)** Group chat is going to create that environment, that object where all the conversation is going to happen.
>
> **[0:30](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=30)** And group chat manager is a specialized agent that's going to orchestrate the group chat itself.
>
> **[0:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=37)** So we have set up the environment.
>
> **[0:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=39)** The task is ready.
>
> **[0:41](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=41)** All of our agents are also ready.
>
> **[0:43](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=43)** Let's define the group chat.
>
> **[0:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=46)** Here, we need to pass all the agents that are going to be part of our conversation.
>
> **[0:52](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=52)** So while instantiating the group chat, I have passed on this list of agents that we have defined above.
>
> **[0:59](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=59)** I've also provided an empty message list and a maximum round of 10 iterations.
>
> **[1:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=67)** Now, this means that there will be at most 10 iterations of selecting the speaker, the agent speaks, and broadcasting message.
>
> **[1:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=76)** So group chat is all configured.
>
> **[1:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=80)** Then we'll have the group chat manager who is going to orchestrate this chat.
>
> **[1:26](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=86)** So I have passed on the group chat object to this group chat manager agent and it also has llm_config.
>
> **[1:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=93)** That means LLM capabilities.
>
> **[1:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=95)** So run this.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=97)** Our chat manager is also ready.
>
> **[1:39](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=99)** It's time to initiate our chat.
>
> **[1:42](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=102)** Let's see how this works on this task of analyzing past one month's end-of-day stock prices of the Apple stock.
>
> **[1:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=113)** So here you go.
>
> **[1:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=116)** We can see the admin (to chat_manager) analyze... So it has given this task, user proxy has initiated the chat.
>
> **[2:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=125)** So that's why admin (to chat_manager).
>
> **[2:07](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=127)** Chat managers picks up the next speaker, that is planner.
>
> **[2:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=131)** Planner lays out the plan.
>
> **[2:13](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=133)** Then it goes to engineer.
>
> **[2:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=135)** Engineer will write the code.
>
> **[2:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=137)** Then it goes to executor.
>
> **[2:19](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=139)** Executor gives us the data from the script.
>
> **[2:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=142)** Then we perform the data analysis.
>
> **[2:24](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=144)** So it goes back to the planner, how we'll utilize this data set.
>
> **[2:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=149)** Then it goes to the executor again for the analysis code.
>
> **[2:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=153)** Great. And now I'll hit enter.
>
> **[2:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=158)** Admin needs to provide the next step.
>
> **[2:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=160)** So admin (to chat_manager), the script for analysis is written.
>
> **[2:46](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=166)** Okay. So you can see five-day moving averages.
>
> **[2:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=169)** So it has done some stock-based analysis.
>
> **[2:53](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=173)** And so financial analysis has been carried out.
>
> **[2:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=176)** And then it comes to the writer who is going to write the report based on the analysis.
>
> **[3:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=182)** So we have successfully retrieved and analyzed the data.
>
> **[3:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=184)** Here are the key results.
>
> **[3:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=186)** So you can see count, mean, standard deviation, all of those things.
>
> **[3:09](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=189)** Volatility, five-day moving average.
>
> **[3:12](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=192)** So all of these metrics are very important when you are analyzing stock prices.
>
> **[3:17](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=197)** And we have the complete analysis written down by our writer agent.
>
> **[3:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=201)** So that's how all of these agents now have collaborated in this group chat to achieve or you can say solve the task at hand.
>
> **[3:33](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=213)** So this group chat functionality allows our virtual data analysis company to approach complex tasks collaboratively, mimicking real-world team dynamics.
>
> **[3:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=225)** Now, each agent contributes its specialized skills from planning and coding to data analysis, and then report writing, all within a shared context. That's correct.
>
> **[3:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/build-the-group-chat?u=76281980&t=237)** In the next lesson, we'll see how we can configure and set speaker policies in this group chat.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1), this. (1)
> **Code Identifiers:** chat_manager (3), llm_config (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)

#### Speaker selection config
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=0)** Welcome to the final lesson of our course.
>
> **[0:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=2)** Here we are going to refine our group chat functionality by implementing a speaker selection policy.
>
> **[0:08](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=8)** This is a powerful feature that allows us to control the flow of conversation more precisely.
>
> **[0:15](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=15)** This ensures that our agents are interacting in the most effective way possible.
>
> **[0:20](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=20)** I have my system ready.
>
> **[0:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=23)** I have created all the agents.
>
> **[0:25](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=25)** It's time to define our selection policy.
>
> **[0:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=29)** So this selection policy is configured when we are creating the group chat object.
>
> **[0:35](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=35)** So in our group chat instance, firstly, we have to pass all the agents that we have created, an empty messages list because we have not begun our conversation yet.
>
> **[0:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=47)** Max round is equal to 10.
>
> **[0:49](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=49)** This limits our conversation to 10 rounds to prevent infinite loops.
>
> **[0:54](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=54)** Then I have allowed or disallowed speaker transitions.
>
> **[1:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=60)** This is a dictionary and this is key to our speaker selection policy.
>
> **[1:06](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=66)** It defines which agents can speak after each other.
>
> **[1:11](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=71)** So for example, I have user proxy or admin.
>
> **[1:14](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=74)** So admin can hand off the conversation to any other agent: engineer, writer, executor, or planner.
>
> **[1:22](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=82)** An engineer can only speak to the admin or to the executor.
>
> **[1:28](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=88)** Similarly, writer reports back to the admin or asks the planner for clarification.
>
> **[1:37](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=97)** Similarly for executor and planner as well.
>
> **[1:40](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=100)** Then I have speaker_transitions_type is equal to allowed.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=105)** This indicates that our dictionary specifies allowed transitions.
>
> **[1:51](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=111)** We could use disallowed if we wanted to specify forbidden transitions instead.
>
> **[1:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=117)** So create the group chat.
>
> **[2:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=120)** Everything else remains the same.
>
> **[2:02](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=122)** We have the group chat manager.
>
> **[2:04](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=124)** We have passed on the group chat object to it, and now we are going to initiate the chat.
>
> **[2:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=130)** So now you will see that it will follow the speaker selection policy that we have defined above.
>
> **[2:16](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=136)** So this way, we can define clear communication pathways between our AI agents.
>
> **[2:23](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=143)** And this ensures that information flows logically through our virtual company, prevents any sort of unnecessary or illogical interactions between the agents.
>
> **[2:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=154)** So that's it.
>
> **[2:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=156)** As you continue to develop and refine your own AI systems, remember that the power of structured interactions.
>
> **[2:44](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=164)** This is very important.
>
> **[2:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=165)** Whether you are building a data analysis company or a creative writing team or any other multi-agent system, thoughtful speaker selection policies can dramatically improve your results.
>
> **[2:57](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=177)** And thank you so much for joining us on this journey through the world of AI agents and building them with AutoGen.
>
> **[3:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=185)** I hope you have learned to build powerful AI agents.
>
> **[3:10](https://www.linkedin.com/learning/building-ai-agents-with-autogen/speaker-selection-config?u=76281980&t=190)** Good luck with your future projects.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), continue (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** speaker_transitions_type (1)
> **Analogies:** for example (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps with AutoGen
> [LinkedIn Learning](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=0)** Congratulations!
>
> **[0:01](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=1)** You have completed the course on AI agents with AutoGen.
>
> **[0:05](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=5)** In the course, you have learned how to build and configure AI agents using the origin framework, from understanding the basics to creating complex systems like research assistants, teachable agents that learn from user interactions, integrating tools within those systems to finally building end-to-end coding copilots.
>
> **[0:31](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=31)** You have gained valuable skills in the world of AI development.
>
> **[0:36](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=36)** To continue your journey with AI agents, I recommend that you share your completion certificate with your network on LinkedIn so that you know who else in your network is building AI agents.
>
> **[0:50](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=50)** Now that you have fundamental skills, you should apply those to experiment with your own projects.
>
> **[0:56](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=56)** And lastly, stay up to date with the latest developments in the AutoGen framework.
>
> **[1:03](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=63)** And to do that, I have prepared a downloadable PDF with links to additional resources, including the official AutoGen documentation, research papers on advanced AI agent techniques, and some online forums and communities for AI developers.
>
> **[1:21](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=81)** Last but not the least, I'd love to hear about your progress and answer any questions that you might have.
>
> **[1:29](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=89)** So connect with me on LinkedIn.
>
> **[1:32](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=92)** Subscribe to my YouTube channel.
>
> **[1:34](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=94)** I keep posting videos on how to build with AI.
>
> **[1:38](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=98)** And for updates from the world of AI, you should check out my newsletter, which is called High Signal AI.
>
> **[1:45](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=105)** And that's it.
>
> **[1:47](https://www.linkedin.com/learning/building-ai-agents-with-autogen/next-steps-with-autogen?u=76281980&t=107)** All the very best for your future endeavors, and keep building with AI.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
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