---
type: course
cssclasses:
  - lle-course
slug: building-advanced-ai-apps-with-prompt-flow
url: "https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow"
duration_minutes: 35
duration: 35m
updated: 9/11/2024
learners: 1011
skills:
  - Prompt Flow
  - Generative AI
  - AI Software Development
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGceaZfBEf0RQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727119277799?e=2147483647&amp;v=beta&amp;t=vsY5-vz_9t0DjMsgJYuG9avYM7-LmJxPRe1aq-d6xwg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Prompt Engineering Skills for Developers]]'
prev_courses:
  - '[[Prompt Engineering with LangChain]]'
path_nav: '[{"path":"Prompt Engineering Skills for Developers","position":6,"total":6,"prev":"Prompt Engineering with LangChain","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/prompt-flow
  - skill/generative-ai
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20Advanced%20AI%20Apps%20with%20Prompt%20Flow.md)

![Building Advanced AI Apps with Prompt Flow](https://media.licdn.com/dms/image/v2/D4E0DAQGceaZfBEf0RQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727119277799?e=2147483647&amp;v=beta&amp;t=vsY5-vz_9t0DjMsgJYuG9avYM7-LmJxPRe1aq-d6xwg)

# Building Advanced AI Apps with Prompt Flow

> In this course, Senior Staff Instructor Morten Rand-Hendriksen guides you through developing LLM-based AI apps using the open-source Prompt Flow suite. Get hands-on practice creating, analyzing, and evaluating workflows that link LLMs, prompts, and Python code. With real-world examples and practical insights, Morten helps you master prompt engineering, streamlining development, and getting started

> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow) | 35m | 1K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Prompt Flow: Your toolkit to build AI apps](#prompt-flow-your-toolkit-to-build-ai-apps)
- [**1. Exploring Prompt Flow**](#1-exploring-prompt-flow) (8 videos)
  - [What is Prompt Flow?](#what-is-prompt-flow)
  - [Exploring the Prompt Flow repo in Codespaces](#exploring-the-prompt-flow-repo-in-codespaces)
  - [Exploring the Prompt Flow VS Code extension](#exploring-the-prompt-flow-vs-code-extension)
  - [Creating a connection to OpenAI](#creating-a-connection-to-openai)
  - [Running Prompt Flow examples](#running-prompt-flow-examples)
  - [Anatomy of a Prompt Flow](#anatomy-of-a-prompt-flow)
  - [Prompt variants](#prompt-variants)
  - [Batch testing of flows](#batch-testing-of-flows)
- [**2. Conclusion**](#2-conclusion) (1 videos)
  - [Going further with Prompt Flow](#going-further-with-prompt-flow)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Prompt Flow: Your toolkit to build AI apps](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=0)** - Take a look at this. What you're seeing is the conditional flow of data through an AI powered app. And this visualization is part of an open source AI development suite called [[Prompt Flow]] that gives you new capabilities to prototype, test, develop, and build advanced AI powered apps. Give me half an hour of your time and we'll explore Prompt Flow and what it has to offer. Along the way, you'll familiarize yourself with LLM Connections, custom [[Python (Programming Language)|Python]] tools, and the various debugging, experimentation and validation features Prompt Flow provides to help you build your AI app. This course is the first of a pair, so once you're done, go check out Prompt Flow Hands On and get working with Prompt Flow in a step by step, hands-on project using OpenAI, Mistral AI, and a heavy dose of custom Python. AI powered apps are a whole new type of software requiring its own specialized tooling, and I'm here to help you get your prompts flowing right. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (5), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Env Vars:** llm (1)
> **Speakers:** - take (1)


### 1. Exploring Prompt Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Prompt Flow?](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=0)** - [[Prompt Flow]] is an AI development framework for [[Microsoft]] released in two flavors, the open source library covered in this course, and a specialized version integrated into [[Azure AI Studio]]. Using Prompt Flow gives you a structured environment where you can create flows that link small and [[Large Language Models (LLM)|large language models]], prompts, [[Python (Programming Language)|Python]] code, and other tools as modules, you can inspect, connect, debug, and run independently or as a whole. This adds greater flexibility and observability to AI development and makes it easier to do things like experiment with different prompts, run batch tests, and deploy prototypes for real world testing. The power of prompt flow is fully realized through the prompt flow VS code extension. Using the extension, you can create and manage prompt flow projects, AI service connections, build and use tools, and test, debug, and build out your projects. The extension provides a node based view of your project where you can figure and debug each AI and Python component in the app flow, controlling its input, its output, its configurations, and its execution conditions, and seeing the live input and output as the code runs. You also get a live visualization of the flow that shows the literal flow of data through the app as it runs, so you can make sure the right components fire at the right time and in the right sequence. Prompt flow also helps with two of the biggest and most unique challenges of AI app development, prompt design, and batch testing. In the node view, you can create variations of your LLM integrations, as many as you like
>
> **[1:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=94)** to test different models, different model configurations, and different prompts side by side to get your desired outcome faster. And once your app is running properly, you can do batch runs of inputs to validate the response quality. Finally, when your flow is complete, you can build it out as a standalone docker container, deploy it to a serving platform, or integrate it directly into your existing code base. Now, as you can tell from what I just said, prompt flow is a huge framework with a lot of functionality, far more than I can cover in this short course. So we'll explore the prompt flow [[GitHub]] repository, the prompt flow VS code extension, and how to run the huge array of examples provided. And then by the end of the course, you'll have what you need to integrate prompt flow into your workflow and explore all this framework has to offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (10), [[Python (Programming Language)|Python]] (2), [[Microsoft]] (1), [[Azure AI Studio]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** python (2), node (2), make (1), docker (1)
> **Tools:** vs code (2), github (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** llm (1)
> **Speakers:** - prompt (1)

#### [Exploring the Prompt Flow repo in Codespaces](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=0)** - [Instructor] This course focuses on the open source [[Prompt Flow]] project, so the logical place to start is in its official [[GitHub]] repository. This repository contains not only the framework itself, but also the documentation, examples, and tutorials on how to use prompt flow. So this is the place to return anytime you're trying to do something and you need to figure it out, or if you need code examples to start a new flow. What we're going to do is boot up this repository in [[Codespaces]]. You can do that either by clicking the Code button and going to Codespaces and click New codespace, or by scrolling down to Installation and clicking on Open in GitHub Codespace. If you can't open it in Codespace, you can also open this project locally on your computer by cloning the project into your computer. If you do so, to get it to work, you need to install a [[Python (Programming Language)|Python]] environment, a Docker environment, and you need to install all the dependencies. And all of that is described down here in the README file. Once your codespace is up and running, you'll see this, two README files, the core file, and the examples file, a set of folders, and in the far left sidebar, this icon, a P. This is the prompt flow extension we'll talk about later in the course. And the reason you're seeing it in the codespace is because this codespace is pre-configured. It has all the things you need to run prompt flow examples out of the box. It has a Python environment, a Docker environment, all the extensions and all the dependencies pre-installed for you, so you can start working. What I want to draw your attention to is this folder, the examples. Here you find a comprehensive list of examples
>
> **[1:36](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=96)** of everything you can do with prompt flow, as of this moment. Under examples, you'll find a tutorials folder where you have a set of tutorials that show you how to do different things. For example, going to e2e-development, we can open this one here in Preview, and this is a full article breaking down how to do end-to-end development using prompt flow with code examples, setup, which examples you're actually going to be using, images to illustrate what's going on, everything you need to fully understand how to build an advanced flow. To support these tutorials, there's also a long list of folders. At the top, we have the connections folder. These connections are how you connect to different AI services. And out of the box, you have azure_content_safety, azure_openai, cognitive_search, custom, and openai. In this course, we'll be using openai and custom. Below, you have examples for flex flows and regular flows. Flex flows are code-based flows that are really powerful but fall outside the scope of this course. Flows are what we're going to focus on. And under flows, you have another set of options. You have chat flows, basic, math, image, PDF, Wikipedia, et cetera. You have evaluation flows for different types of evals. You have integration flows for different types of integrations, and you have standard flows that outline different types of AI apps people want to build; an autonomous agent, a basic chat with a built-in LLM, an app that describes an image,
>
> **[3:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=190)** a flow for customer intent extraction, and so on. Like I said, many of these examples appear in the tutorials that you find under the tutorials folder, and other examples are self-explanatory. You can open them, run them, and see what happens, and we'll do that later in this chapter. There's also a folder called prompty. I mention this because prompty is a second open source project from [[Microsoft]] that connects with prompt flow, but is not bound to prompt flow. The goal of prompty is to create files that contain all the information you need to prompt an AI system in a unified way so that you can swap out the model quickly without having to make any other changes. If you scroll down in the prompty library, you'll see an example of it down here. You create a new prompty file, or you specify what prompt it is, what it's doing, who created it, which model you're going to be using, how you're going to be using it, and all the other information. And then that gets sent off to whatever model you picked. Prompt flow supports prompty, and here under the prompty folder, you get examples of how to build different types of projects using prompty. Like I said, if you want to do this, you also need to understand prompty, which is an entirely separate app, but understanding them both and working with 'em together is really powerful. So this is an option for you. The last folder we'll look at is the tools folder, and this is a special concept inside prompt flow. Whenever you create a Python function in prompt flow, you call it a tool. So any custom Python is a tool, and under these folders, you get examples of different types of Python tools you can use and how to build them.
>
> **[4:47](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=287)** Now, later on, we'll build our own tools, but this is just a naming convention thing. You need to remember, any Python thing that goes into your flow is a tool, and here are a bunch of examples of how to build tools. The reason why I'm putting so much emphasis on this repo is once you're done watching this course, you'll want to build things with prompt flow and this repo and its examples is where you'll find all the instructions you need and the starter example you need to build out advanced flows that you can then port into your own installations and your own setups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (12), [[Python (Programming Language)|Python]] (6), [[GitHub]] (2), [[Codespaces]] (2), [[Microsoft]] (1)
> **CLI Commands:** python (6), find (4), docker (2), make (1)
> **Definitions:** is a  (5), is an  (2)
> **Env Vars:** readme (2), pdf (1), llm (1)
> **Code Identifiers:** azure_content_safety (1), azure_openai (1), cognitive_search (1)
> **Prerequisites:** install (2), setup (1)
> **Cross-References:** later in (2)
> **Documentation:** the documentation (1), the readme (1)

#### [Exploring the Prompt Flow VS Code extension](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=0)** - [Instructor] The [[Prompt Flow]] VS Code extension gives you full access to all the features of prompt flow from within VS code without having to do a bunch of [[CLI]] coding to get to the different pieces. And more importantly, it gives us the visualization of our flows, that's so important for the whole flow concept. In the code space for the prompt flow [[GitHub]] repository, it's already installed and configured. If you're working on your local computer, you can install it directly from the VS Code marketplace. It's just called prompt Flow for VS Code. Once you've installed and activated it, you should see this P show up in the far left sidebar, and that means everything is up and ready to go. Click on that P and you get a new sidebar panel with a lot of different things you can do with prom flow. Off the top, there's a list of quick access links to create a new flow to install the necessary dependencies for existing flows, to update the STK, to go to the user settings, to go to the GitHub repository, the documentation, et cetera, et cetera. Below we have a list of all the current flows that exist within our projects, and here you have a link to every single one of the examples that we talked about in the previous video. So you can click on them and go directly to those examples. Below that are trace collections. Anytime you're running a flow, you get a full trace of what happened and those collections end up here, so I haven't run any flows yet, therefore, you don't see anything. Below that we have tools, these are the different components that go into a flow. We have [[Python (Programming Language)|Python]] tools and LLMs and prompts and all sorts of things, and you can go through this list and see what's available. Then there's the batch run history.
>
> **[1:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=94)** If you're running batch runs, this is where you manage them and where you get full access to that history. And at the bottom we have connections, this is where you configure connections to the AI services you'll be using. Here we have [[Microsoft Azure|Azure]] Content Safety, Azure OpenAI, Azure AI Search, custom OpenAI, and a series of other options. In the next video, I'll show you how to create a new open AI connection so you can run some of these examples. Speaking of, let's open one of the examples so you can see how Prompt Flow actually works in VS Code with this extension. I'll go in and open this chat with Wikipedia extension and click Open. This gives us a visual display of this file here, flow.dag.yaml. That file also exists as a text file. We can go into our file repository here, and if I open it, you'll see this is a YAML file that breaks down everything that's happening inside the flow, and we'll talk about this more in the next chapter. So for now, let's just look at this visualization. The prompt flow extension gives you two views side-by-side of your current flow. On the left, you have the different nodes that connect together to make the flow, and on the right you have a visualization of how they connect together the actual flow. So here you can see in this particular flow, you get an input. Then it gets passed in here to extract a query, go to the wiki URL, then search for result, then process the search results, and then do something and then make an output. And you can see that these nodes have different icons indicating what they are doing and how they function.
>
> **[3:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=188)** You also see right now that a lot of them have these little warning signs saying that something is wrong, and we can go over here in the nodes and see that one of the problems is we don't have an open AI connection created yet. Another problem is that something did not get generated, that's probably because of the previous problem. And all of this is addressable as we start working with the files. But what I want you to notice here is you have different ways of accessing the project. You can work on it in this GUI. You can also work on it as a YAML file, and as you work on it, things will update and change. But this interface here is where you'll be spending most of your time because this is where you can figure how the different pieces interact. This is also where you put in your test strings and where you check to make sure everything is working. And once you start running the application, you'll get outputs for each of the nodes, telling you what came into the node, how it was processed, and what came out of it. So you can see the flow of information going through your AI app. Finally, once you've set up a flow, you've set up your connections and you're ready to go, you can run the whole project, you can run individual nodes from within the project. You can batch run tests against the project, you can debug the project, and you can build out the project into a Docker container. And we'll do all of these things as we move through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (6), [[Microsoft Azure|Azure]] (3), [[GitHub]] (2), [[CLI]] (1), [[Python (Programming Language)|Python]] (1)
> **Tools:** vs code (5), github (2)
> **CLI Commands:** make (3), python (1), node (1), docker (1)
> **Env Vars:** yaml (2), cli (1), stk (1), url (1), gui (1)
> **UI Navigation:** go to (3), click on (2)
> **Prerequisites:** install (2), set up (2), configure (1)
> **Cross-References:** in the next (2), we talked about (1), previous video (1)
> **File Paths:** flow.dag.yaml (1)

#### [Creating a connection to OpenAI](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=0)** - [Instructor] To run a [[Prompt Flow]] that has an AI component, you first need to create a connection for prompt flow to connect to whatever AI service you're using. There are two ways of doing this. You can either use the command line interface for prompt flow. The instructions for that are found in the readme file for the Prompt Flow project. You can scroll down to quick start and here you see the code. So you call in pf, which is the prompt flow [[CLI]]. Then you call in connection create to create a new one, file as you're creating a new file, you place the file in your project folder. Then you call the file whatever you want, probably the name of the service you're going to use. And then you set the API key to your API key and name the connection something that you will then later call in to your prompt flow. The examples that are provided here are for OpenAI and for OpenAI on [[Microsoft Azure|Azure]]. But you can also use other examples and there are more examples in the examples folder. So that's command line where you can also do the same thing using the prompt flow extension. If you open the extension and scroll all the way down to the Connections section, you can choose the type of connection you want. And at the left hand side of each connection there's a button. I'm not sure why that button isn't showing up on my computer. There is supposed to be a plus here and normally there is, so I don't know what's going on. But if you click on this button here, it creates a new file for you called new_OpenAI_connection.yaml. And this is a file where you put in the necessary information to create the connection. Now the type of connection determines what information you need to input here for OpenAI. All you need to do is give your connection a unique name.
>
> **[1:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=95)** So for all of these projects, that name should be open_ai_connection. If you're in an organization, you can put in the organization ID. And if you're using a custom API base, meaning, for example, if you have a fine-tuned model you want to use, you can put in that base here and uncommon this line. But if you don't have any of that, you can just run the file as is. One important thing to note here is don't replace the user input placeholder. The application will prompt you to enter a value when it runs the application. Prompt flow will prompt you in the command line to input your API key, which brings us to the API key. To create a connection, you need an API key. So because I'm using OpenAI, I'll go generate a new one at platform.[openai.com/api-keys](https://openai.com/api-keys). First, I pick a project for myself or create a new one for this project. Then Create a new secret key. Call it promptflow_repo. Create the secret key, copy it. This is only displayed once, so I have a habit of not closing it until I pasted it in and then go back here. Now before I create this connection, I need to do one more thing. And yes, I said this code space is fully set up to do everything, it is with one weird caveat. For the system to be able to save a an environment variable, you need to install an additional [[Python (Programming Language)|Python]] extension.
>
> **[3:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=190)** And as I'm recording this, there is a discussion going on in the repo on whether or not that extension should be auto installed or not. So because it is not currently installed, I'll show you how to install it. You open up terminal, then you type in pip install, and then keyrings.alt. Run that, the keyrings dependency is installed. I can now clear my command line and then go up here in the new_OpenAI_connection file and click this link, Create connection. The command line interface asks for the API key. So here I'll paste in the API key. The API key is now saved into my system. And now if I go back into my flow, you'll see that down here with the LLM, I no longer have a red box around it because open_ai_connection now exists as a connection that I can use. And that means I can start testing and running these different flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (8), [[CLI]] (1), [[Microsoft Azure|Azure]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (9), cli (1), llm (1)
> **Tools:** command line (5), terminal (1)
> **Prerequisites:** install (3), set up (1)
> **Code Identifiers:** open_ai_connection (2), promptflow_repo (1)
> **UI Navigation:** scroll down (1), open the (1), click on (1)
> **CLI Commands:** python (1), pip (1)
> **Definitions:** is a  (2)

#### [Running Prompt Flow examples](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=0)** - [Morten] Before we look at the anatomy of a promptflow, let's run a flow so you see how all of this ties together. You can run a flow using the vscode extension by going to the dag.yaml file for the flow and clicking on the Play button, or by opening the extension sidebar, navigating under flows to the flow in question, and clicking Test. Or you can run it from command line. There is an example of how to do that in the README file. If you go down to the Quick Start section, you'll find you call in pf, that's promptflow. Then say this is a flow, we're going to test it, we're going to test it as a flow. This is where the folder, where the flow lives and we want to use the interactive mode. There's actually a lot more to this that you can do in the command line. You can also batch-process things and do a bunch of fancy stuff. But for our purposes, I'm going to use the vscode extension. So I'll open up the flow and just click the Play button. Here I get three options: run with standard mode, run with interactive mode text, and run with interactive mode multi-modal. So let's start with standard mode. This is effectively the debugging mode of a promptflow where you run the flow once and get a bunch of information about what happens. So here you can see in command line I get a breakdown that started executing the nodes, then it found a node, then it executed the node called Chat, then it completed the chat. And then this is the output down here. Now when I close this out and go look at the nodes, you'll see I have more information here. Previously I only had the input and the output, but now underneath output it tells me Flow run outputs, and I can see the output that was sent out. Scrolling down to the chat node,
>
> **[1:36](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=96)** I can see both output and logs, which is the full breakdown. I can see the inputs, information that got sent into the component, and the output, the information that it's sent out. This is incredibly useful once you start working with your own flows, because you can see the information coming in and out of each component, and you can quickly detect when something is going wrong or the information is sent to the wrong place. So this is standard mode, but because this is a chat mode, I have two additional modes, interactive text and interactive multi-modal. So I'll spin up interactive text, and what you see in the terminal is I can now chat with my application. So I'll say, "Hello, what's my name? Now the system will not know this because I haven't told it yet, but because this is a chat, I have the option of activating Chat History. When I do so, the chat history, so my previous prompts and its previous completions, get added into the new request, and that way it retains the history of the chat. And I can now say, for example, "My name is Morten." The system responds, and then I can say, "What's my name?" And it'll respond correctly with, "Your name is Morten." So this very simple flow that you're seeing here is already doing more than the API is doing on its own. And this kind of hints at the power of promptflow. Now, to get out of this interactive chat, I put in ctrl+C, and it terminates the process. That was the text version. There is also an interactive web-based version. That's the one called interactive mode multi-modal.
>
> **[3:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=190)** Click on that, a bunch of other processes now have to spin up because this is an interactive version. A trace view opens up in my browser that gives me a history of all the different chats I've done so far where I can go in and look at the traces. But down here it says, "Running on localhost 50903. So I'll Command, click on this, and it opens a chat app for me. And here I can say, "Write me a haiku about a duck." And it works just like a chat app. "What's my name?" "I don't know." "My name is Morten. What's my name?" "Your name is Morten." And I can start a new chat with a new history. (keyboard clacking) See, doesn't know. Just like with the interactive text chat, to stop the interactive multi-modal chat, go into the terminal, go ctrl+C, and the process terminates. One important thing to note here, this is a chat flow. You can see it because the box is checked, Enable chat mode. So when I run this, I get the options: standard mode, interactive mode text, and interactive mode multi-modal. The many flows you'll build will not be chat-based. There'll be some sort of advanced interaction between different LLMs and other functions. And in that case, you won't get this list of options. Instead, when you click Play, it'll just run standard mode, and it'll run the entire thing one time.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2)
> **Tools:** command line (3), terminal (2)
> **CLI Commands:** node (3), find (1)
> **Analogies:** just like (2), for example (1)
> **Env Vars:** readme (1), api (1)
> **UI Navigation:** click on (2)
> **File Paths:** dag.yaml (1)
> **Documentation:** the readme (1)

#### [Anatomy of a Prompt Flow](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=0)** - [Instructor] Let's talk about the anatomy of a [[Prompt Flow]] because looking at this display and looking at how the file structure is organized, it can be quite overwhelming until you understand what's going on. In a prompt flow, there are a couple of rules that always have to be followed. Every prompt flow will have an input and an output, so those are always specified at the top, and then it may have a set of components or tools. The other rule is that any component or tool must have an input and an output, and here's why. If we look at this very simple flow, you can see information flows into this tool, then something happens to the information, and then it flows out. And if we were to chain multiple tools together, for example, in this flow here, we still need to flow the information in somewhere and then out somewhere and do something with it. And that goes for every single flow you'll find here. No matter how complex, even when it has conditional statements, there will always be this input goes to output every time. The easiest way to see this input and output action happen is by following the data. So up here in Inputs, we have two inputs, chat_history, which is the chat history, and question, which is a string. Where does that information go? If we go down to Chat, which is the LLM component, which is set to open_ai and gpt-3.5-turbo, down here under Inputs, we have chat_history, which points at inputs.chat_history, and we have question which points at input.question. Now, this LLM component or tool has an output called chat output,
>
> **[1:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=94)** and that's captured up here under Outputs, chat.output. So that's how we get input into chat and then the output. Now let's take a closer look at this chat component because this is where the LLM interaction happens and we have the standard features you would expect. We can set up what type of API we're using. We can set up the model we're using, the temperature, the max [[Tokens]]. Open advanced parameters, there's even more parameters you can set up, and you can also do function calling. There's an example for that in the examples folder, but there's one thing missing, the prompt. Well, it says prompt here, and then it points at a file called chat.jinja2. Open that file and you find this, which is front matter for a prompt. This text will eventually be turned into the message objects that is passed on to the LLM. And here you can see we have a system message and a user message, and there's also chat history in here in a for in loop. So we're looping through all the available items in the chat history. This is important because one of the features of prompt flow is the ability to create variants. So you can take any component where you can go and change the prompt by making a different prompt file, or you can change the model or you can change the temperature or something else, and then you can test across different variants without having to do a whole bunch of work to rewrite your code every time. Looking at the folder for the prompt flow, you'll see there are a couple of key pieces. We always have a dag.yaml file. This is the main flow file. If there's an LLM component in it, there will likely be a jinja2 file which contains the prompts. And for each prompt flow project folder,
>
> **[3:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=187)** there will always be a requirements.txt file specifying which [[Python (Programming Language)|Python]] dependencies this project depends on. And in every case, it'll be promptflow and promptflow-tools, but it may also be additional dependencies depending on what is being used in other tools. The reason this file exists is because at some point you will probably want to build out your prompt flow into a tool, and then the tool needs to know which dependencies to install. Now this is a really basic flow with just one LLM component. Let's take a look at a more complex one. The chat to Wikipedia flow has a lot more components to it, and you can go and look at each of them and see what they do. So this icon here indicates this is an LLM tool, this icon is a Python tool, and so on. And here you see we're passing first through an LLM, then we go to Python and do a bunch of things and then we come back out to an LLM and send information down. And if you go through here, you'll be able to follow that information. Here's the input. Here we extract query from question and get the output. Then we get the wiki URL output and do something else with it and so on. So the information is being passed down through these input, output fields. In addition to all of this stuff, you can also create conditional statements within here. So if you look closely at this flow, you'll see there's a condition. We go into content_safety_check, and then depending on what happens there we go either to llm_results or to default_results. The way this works is down here under Activate config. So for each of your components or tools, you can go to Activate config and say when some condition
>
> **[4:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=281)** is either a Boolean or a string or an integra or a double then and then whatever condition is there, that's the only time this component will fire. That's what's happening here. So the content_safety is outputting a Boolean, that's either true or false, and then either llm_result or default_result will fire depending on that output. This allows you to build very advanced flows with multiple different conditional statements throughout and control exactly when different things happen. And you do that in part through the outputs from components and in part through what data is flowing through.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (7), [[Python (Programming Language)|Python]] (3), [[Tokens]] (1)
> **Env Vars:** llm (9), api (1), url (1)
> **Code Identifiers:** chat_history (3), open_ai (1), content_safety_check (1), llm_results (1), default_results (1)
> **CLI Commands:** python (3), find (2)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** set up (3), install (1)
> **File Paths:** dag.yaml (1), requirements.txt (1)
> **UI Navigation:** go to (2)

#### [Prompt variants](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=0)** - [Instructor] One of the unique challenges of building an AI-powered app is testing different AI configurations. It could be different models. It could be different temperatures. It could be any of the different parameters provided by the AI, or it could be different prompts. Normally, when you develop an AI app, you have to build out the code for all these different situations and then keep track of them yourself. In Promptflow, it's much easier because Promptflow is set up for you to test against multiple different iterations at the same time, and that way, you can compare the output immediately. This is done by creating variations of your tools and components. Here's an example. In my basic flow, I want to create a new variant of this chat component with a different system message. To do that, I'll click on this button up here in the tool. This gives me the Variant view where I can see all my variations, and right now, I only have one. This is the default one. It's called variant_0, set to default, and it has the current settings. To create a new variation, I just click on the Copy button here. This duplicates the variant, and you'll notice something immediately. A new file appeared over here in my File Explorer. That's because this file, chat.jinja2, is the original prompt. This file up here, chat_variant_1 is the new prompt, which is a copy of the original. Scrolling down, I therefore have an exact copy of the original setup with all the same settings and the same prompt, but they're sitting separately in a separate component and in a separate file.
>
> **[1:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=93)** That means I can safely go into chat_variant_1 and make changes to my prompt, and then I can test them against each other. So here, I'll make a change to my system message. I'll say, "You're a helpful assistant that speaks Norwegian." I'll produce a completely different output from the first one. Then I'll go back to my Promptflow and click on Run All. Now, because I have variants, I get two options. I can either use the default variant for all codes, or I can use the two variants in chat at the same time. Now, if I choose default variant for all nodes, then I can go in and have the chat experience. But if I choose chat 2 variants, the default run will go through and generate two different outputs, one for each variant so I can compare them. So let's do that. Once the run is complete, I'll close my terminal and hide the panels so you can see what's going on. In my view here, you can see that both were completed, and if I scroll up to the top, we'll see both outputs. So this is the output from variant_0. So that's the original. This is the answer in English, and this is the output from variant_1, which is the same output but in Norwegian. So now I have two different variants of the same chat, and I can look at them and compare them. And I can do this across any of my components, so I can build different variants and test which one works best and which one is functioning the way I want to. And then once I know, I'll pick only that variant and delete the [[Representational State Transfer (REST)|rest]].
>
> **[3:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=185)** Because now that I have all these variants on display, I can go in and duplicate the new variant into another one, or I can delete the variant I don't want. I can also switch which one I set the default, and that's the one that will always run. And finally, if I don't want to see this Variant view, I can come back and click on this check mark, and it'll collapse my Variant view, telling me that I have variants, and therefore, I can't edit it. So what I'm looking at now is the default, but if I want to edit the default, I have to go back into the Variant view. Now this is a very basic example, but this feature is enormously powerful anytime you're working with a situation where you need to really refine a prompt and compare the output from different prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (4), scroll up (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Batch testing of flows](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=0)** - [Instructor] Take it from me, advanced AI apps can be quite temperamental. And as your [[Prompt Flow]] becomes more complex, it's vital that you run unit tests to ensure that all your conditions are met and that your output is what you want it to be no matter what information gets put in. Now, practically speaking, we can do that in different ways. The most manual one would be to go in and put in the different test values one by one and then run tests. But that would take a lot of time and be really error prone. The good news is prompt flow has a tool for this. We can run a prompt flow in batches based on different types of files, and the most common one is to use a [[JSON]] L file. For this project examples > flows > standard > conditional-flow-for-switch, there is such a JSON L file already created. It's sitting right here in the folder just called data.jsonl. JSON L format is when you have JSON objects on each line and they are not connected. So there's no comma at the end of them. These are complete JSON objects. So anytime you pass a JSON L file into a system that supports it, it'll run each object independently of the next. And that's what we want to do here. The format of this test file is the input key and then the input value. So in this project, the key is query. Therefore, it's query and then a question. This flow, by the way, is a mock setup for a store. You go in and ask a question about a product. There's a classifier powered by an LLM
>
> **[1:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=93)** that figures out what type of question is this. And then based on the type of question, you either get an order search, a product info search, or a product recommendation that then gets returned. And looking at these questions, you'll see here's an order search, there's also information search, and then something that is completely irrelevant to the situation. You can use the prompt flow via code extension to run these batch tests either by opening up the dag.yaml file and clicking on the beaker up on the top here, or by going to the prompt flow site panel, finding the flow in question, and clicking batch run. Does the same thing. So I'll click the beaker over here. Then, I point at whatever file I want to use. So I'll choose local file this time. You can also choose other types of files. So you see there's a JSON L, CSV, or Parquet, and you can also pick an existing run. So something that you've already used before, you can use it again. So I'll choose local file. Then I'll point at the file, which is this one, JSON L. And from here I can either run it or add a test suite. So I'm just going to run it to get the output. And when my batch run is completed, I can go back in to the prompt flow tools, scroll down until I find batch run history, click on this refresh button just in case, and then open up the run data. Here we have the run data for that run, and I can click visualize. This opens up a batch run visualization. And here, depending on what type of data I was using and how I've configured things, I'll get different types of information.
>
> **[3:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=187)** In my example, what I'm interested in is to see the actual responses. So I'll pull this out. And here you can see for the first question, which was, "When will my order be shipped?" It says, "Your order is being mailed." For the second question, "Can you help me find information on it?" It says, "The product was produced by." And "Can you recommend me a prompting tool?" It says, "I recommend prompt flow." So this last one is actually a good indicator that something is wrong because the system really shouldn't answer questions it doesn't know anything about, which is what's happening here. And the batch run allowed me to identify that really quickly. Now of course, this is a really trivial example of a really powerful tool that can do a lot more than just show the output. So as you're working with your own app, I recommend checking the documentation to see the different types of evaluations and the different types of testing that you can do, and what types of output you can get from it. Because there's a lot you can do here. It all depends on what you need in your testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8), [[Prompt Flow]] (7)
> **Env Vars:** json (8), llm (1), csv (1)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **File Paths:** dag.yaml (1)
> **Documentation:** the documentation (1)
> **Best Practices:** the key is (1)


### 2. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Going further with Prompt Flow](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=0)** - And just like that, you've reached the end of this course and the beginning of your journey with [[Prompt Flow]]. For a deeper dive into everything prompt flow offers, go check out the official [[GitHub]] repository and the huge list of plug and play examples it contains. And as always, make liberal use of the official documentation for the project. Here you'll find quick start guides, tutorials, examples, and detailed breakdowns of all the advanced features of this framework I didn't have time to cover here, so you can get full use out of it. As you continue your learning journey with AI, make sure to check out our constantly expanding list of AI courses right here on [[LinkedIn]] Learning, and follow me on LinkedIn for critical insights analysis and discussion of AI and how we build our future with it. Now, all that's left for me to say is, (instructor speaks in foreign language) go build some advanced AI apps with prompt flow, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Flow]] (3), [[LinkedIn]] (2), [[GitHub]] (1)
> **CLI Commands:** make (2), find (1), go build (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - and (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Prompt Flow
- Generative AI
- AI Software Development
- Artificial Intelligence (AI)

## Path Context

### In [[Prompt Engineering Skills for Developers]]
← [[Prompt Engineering with LangChain]] | **6 of 6**

## Appears In

- [[Prompt Engineering Skills for Developers]]

## Related Courses

_Courses sharing skills:_

- [[The AI Ecosystem for Developers- Models, Datasets, and APIs]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[RAG and Fine-Tuning Explained]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[Agentic AI for Developers- Concepts and Application for Enterprises]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)