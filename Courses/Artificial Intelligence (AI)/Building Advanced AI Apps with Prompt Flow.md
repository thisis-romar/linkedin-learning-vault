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
created: 2026-04-21
---

![Building Advanced AI Apps with Prompt Flow](https://media.licdn.com/dms/image/v2/D4E0DAQGceaZfBEf0RQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727119277799?e=2147483647&amp;v=beta&amp;t=vsY5-vz_9t0DjMsgJYuG9avYM7-LmJxPRe1aq-d6xwg)

# Building Advanced AI Apps with Prompt Flow

> In this course, Senior Staff Instructor Morten Rand-Hendriksen guides you through developing LLM-based AI apps using the open-source Prompt Flow suite. Get hands-on practice creating, analyzing, and evaluating workflows that link LLMs, prompts, and Python code. With real-world examples and practical insights, Morten helps you master prompt engineering, streamlining development, and getting started

> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow) | 35m | 1K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Prompt Flow
- Generative AI
- AI Software Development
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Prompt Flow: Your toolkit to build AI apps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=0)** - Take a look at this.
>
> **[0:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=1)** What you're seeing is the conditional flow of data through an AI powered app.
>
> **[0:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=5)** And this visualization is part of an open source AI development suite called Prompt Flow that gives you new capabilities to prototype, test, develop, and build advanced AI powered apps.
>
> **[0:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=16)** Give me half an hour of your time and we'll explore Prompt Flow and what it has to offer.
>
> **[0:20](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=20)** Along the way, you'll familiarize yourself with LLM Connections, custom Python tools, and the various debugging, experimentation and validation features Prompt Flow provides to help you build your AI app.
>
> **[0:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=32)** This course is the first of a pair, so once you're done, go check out Prompt Flow Hands On and get working with Prompt Flow in a step by step, hands-on project using OpenAI, Mistral AI, and a heavy dose of custom Python.
>
> **[0:45](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=45)** AI powered apps are a whole new type of software requiring its own specialized tooling, and I'm here to help you get your prompts flowing right.
>
> **[0:52](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-flow-your-toolkit-to-build-ai-apps?u=76281980&t=52)** Let's get cracking.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Code Keywords:** this. (1), let (1)
> **Env Vars:** llm (1)
> **Speakers:** - take (1)


### 1. Exploring Prompt Flow

#### What is Prompt Flow?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=0)** - Prompt Flow is an AI development framework for Microsoft released in two flavors, the open source library covered in this course, and a specialized version integrated into Azure AI Studio.
>
> **[0:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=10)** Using Prompt Flow gives you a structured environment where you can create flows that link small and large language models, prompts, Python code, and other tools as modules, you can inspect, connect, debug, and run independently or as a whole.
>
> **[0:26](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=26)** This adds greater flexibility and observability to AI development and makes it easier to do things like experiment with different prompts, run batch tests, and deploy prototypes for real world testing.
>
> **[0:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=38)** The power of prompt flow is fully realized through the prompt flow VS code extension.
>
> **[0:42](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=42)** Using the extension, you can create and manage prompt flow projects, AI service connections, build and use tools, and test, debug, and build out your projects.
>
> **[0:52](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=52)** The extension provides a node based view of your project where you can figure and debug each AI and Python component in the app flow, controlling its input, its output, its configurations, and its execution conditions, and seeing the live input and output as the code runs.
>
> **[1:09](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=69)** You also get a live visualization of the flow that shows the literal flow of data through the app as it runs, so you can make sure the right components fire at the right time and in the right sequence.
>
> **[1:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=81)** Prompt flow also helps with two of the biggest and most unique challenges of AI app development, prompt design, and batch testing.
>
> **[1:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=88)** In the node view, you can create variations of your LLM integrations, as many as you like to test different models, different model configurations, and different prompts side by side to get your desired outcome faster.
>
> **[1:42](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=102)** And once your app is running properly, you can do batch runs of inputs to validate the response quality.
>
> **[1:47](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=107)** Finally, when your flow is complete, you can build it out as a standalone docker container, deploy it to a serving platform, or integrate it directly into your existing code base.
>
> **[1:57](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=117)** Now, as you can tell from what I just said, prompt flow is a huge framework with a lot of functionality, far more than I can cover in this short course.
>
> **[2:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=125)** So we'll explore the prompt flow GitHub repository, the prompt flow VS code extension, and how to run the huge array of examples provided.
>
> **[2:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/what-is-prompt-flow?u=76281980&t=132)** And then by the end of the course, you'll have what you need to integrate prompt flow into your workflow and explore all this framework has to offer.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), node (2), make (1), docker (1)
> **Tools:** vs code (2), github (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** llm (1)
> **Speakers:** - prompt (1)

#### Exploring the Prompt Flow repo in Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=0)** - [Instructor] This course focuses on the open source prompt flow project, so the logical place to start is in its official GitHub repository.
>
> **[0:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=8)** This repository contains not only the framework itself, but also the documentation, examples, and tutorials on how to use prompt flow.
>
> **[0:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=16)** So this is the place to return anytime you're trying to do something and you need to figure it out, or if you need code examples to start a new flow.
>
> **[0:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=24)** What we're going to do is boot up this repository in Codespaces.
>
> **[0:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=28)** You can do that either by clicking the Code button and going to Codespaces and click New codespace, or by scrolling down to Installation and clicking on Open in GitHub Codespace.
>
> **[0:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=38)** If you can't open it in Codespace, you can also open this project locally on your computer by cloning the project into your computer.
>
> **[0:45](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=45)** If you do so, to get it to work, you need to install a Python environment, a Docker environment, and you need to install all the dependencies.
>
> **[0:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=53)** And all of that is described down here in the README file.
>
> **[0:56](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=56)** Once your codespace is up and running, you'll see this, two README files, the core file, and the examples file, a set of folders, and in the far left sidebar, this icon, a P.
>
> **[1:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=68)** This is the prompt flow extension we'll talk about later in the course.
>
> **[1:11](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=71)** And the reason you're seeing it in the codespace is because this codespace is pre-configured.
>
> **[1:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=76)** It has all the things you need to run prompt flow examples out of the box.
>
> **[1:20](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=80)** It has a Python environment, a Docker environment, all the extensions and all the dependencies pre-installed for you, so you can start working.
>
> **[1:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=88)** What I want to draw your attention to is this folder, the examples.
>
> **[1:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=93)** Here you find a comprehensive list of examples of everything you can do with prompt flow, as of this moment.
>
> **[1:40](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=100)** Under examples, you'll find a tutorials folder where you have a set of tutorials that show you how to do different things.
>
> **[1:46](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=106)** For example, going to e2e-development, we can open this one here in Preview, and this is a full article breaking down how to do end-to-end development using prompt flow with code examples, setup, which examples you're actually going to be using, images to illustrate what's going on, everything you need to fully understand how to build an advanced flow.
>
> **[2:11](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=131)** To support these tutorials, there's also a long list of folders.
>
> **[2:15](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=135)** At the top, we have the connections folder.
>
> **[2:17](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=137)** These connections are how you connect to different AI services.
>
> **[2:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=141)** And out of the box, you have azure_content_safety, azure_openai, cognitive_search, custom, and openai.
>
> **[2:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=148)** In this course, we'll be using openai and custom.
>
> **[2:31](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=151)** Below, you have examples for flex flows and regular flows.
>
> **[2:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=155)** Flex flows are code-based flows that are really powerful but fall outside the scope of this course.
>
> **[2:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=161)** Flows are what we're going to focus on.
>
> **[2:43](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=163)** And under flows, you have another set of options.
>
> **[2:45](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=165)** You have chat flows, basic, math, image, PDF, Wikipedia, et cetera.
>
> **[2:52](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=172)** You have evaluation flows for different types of evals.
>
> **[2:56](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=176)** You have integration flows for different types of integrations, and you have standard flows that outline different types of AI apps people want to build; an autonomous agent, a basic chat with a built-in LLM, an app that describes an image, a flow for customer intent extraction, and so on.
>
> **[3:13](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=193)** Like I said, many of these examples appear in the tutorials that you find under the tutorials folder, and other examples are self-explanatory.
>
> **[3:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=201)** You can open them, run them, and see what happens, and we'll do that later in this chapter.
>
> **[3:26](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=206)** There's also a folder called prompty.
>
> **[3:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=208)** I mention this because prompty is a second open source project from Microsoft that connects with prompt flow, but is not bound to prompt flow.
>
> **[3:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=218)** The goal of prompty is to create files that contain all the information you need to prompt an AI system in a unified way so that you can swap out the model quickly without having to make any other changes.
>
> **[3:50](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=230)** If you scroll down in the prompty library, you'll see an example of it down here.
>
> **[3:54](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=234)** You create a new prompty file, or you specify what prompt it is, what it's doing, who created it, which model you're going to be using, how you're going to be using it, and all the other information.
>
> **[4:03](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=243)** And then that gets sent off to whatever model you picked.
>
> **[4:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=247)** Prompt flow supports prompty, and here under the prompty folder, you get examples of how to build different types of projects using prompty.
>
> **[4:15](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=255)** Like I said, if you want to do this, you also need to understand prompty, which is an entirely separate app, but understanding them both and working with 'em together is really powerful.
>
> **[4:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=264)** So this is an option for you.
>
> **[4:26](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=266)** The last folder we'll look at is the tools folder, and this is a special concept inside prompt flow.
>
> **[4:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=272)** Whenever you create a Python function in prompt flow, you call it a tool.
>
> **[4:37](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=277)** So any custom Python is a tool, and under these folders, you get examples of different types of Python tools you can use and how to build them.
>
> **[4:47](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=287)** Now, later on, we'll build our own tools, but this is just a naming convention thing.
>
> **[4:52](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=292)** You need to remember, any Python thing that goes into your flow is a tool, and here are a bunch of examples of how to build tools.
>
> **[5:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-repo-in-codespaces?u=76281980&t=300)** The reason why I'm putting so much emphasis on this repo is once you're done watching this course, you'll want to build things with prompt flow and this repo and its examples is where you'll find all the instructions you need and the starter example you need to build out advanced flows that you can then port into your own installations and your own setups.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), find (4), docker (2), make (1)
> **Definitions:** is a  (5), is an  (2)
> **Code Keywords:** this, (2), self (1), function (1)
> **Env Vars:** readme (2), pdf (1), llm (1)
> **Code Identifiers:** azure_content_safety (1), azure_openai (1), cognitive_search (1)
> **Prerequisites:** install (2), setup (1)
> **Cross-References:** later in (2)
> **Documentation:** the documentation (1), the readme (1)

#### Exploring the Prompt Flow VS Code extension
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=0)** - [Instructor] The prompt flow VS Code extension gives you full access to all the features of prompt flow from within VS code without having to do a bunch of CLI coding to get to the different pieces.
>
> **[0:11](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=11)** And more importantly, it gives us the visualization of our flows, that's so important for the whole flow concept.
>
> **[0:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=19)** In the code space for the prompt flow GitHub repository, it's already installed and configured.
>
> **[0:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=23)** If you're working on your local computer, you can install it directly from the VS Code marketplace.
>
> **[0:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=28)** It's just called prompt Flow for VS Code.
>
> **[0:31](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=31)** Once you've installed and activated it, you should see this P show up in the far left sidebar, and that means everything is up and ready to go.
>
> **[0:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=38)** Click on that P and you get a new sidebar panel with a lot of different things you can do with prom flow.
>
> **[0:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=44)** Off the top, there's a list of quick access links to create a new flow to install the necessary dependencies for existing flows, to update the STK, to go to the user settings, to go to the GitHub repository, the documentation, et cetera, et cetera.
>
> **[0:58](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=58)** Below we have a list of all the current flows that exist within our projects, and here you have a link to every single one of the examples that we talked about in the previous video.
>
> **[1:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=67)** So you can click on them and go directly to those examples.
>
> **[1:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=70)** Below that are trace collections.
>
> **[1:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=72)** Anytime you're running a flow, you get a full trace of what happened and those collections end up here, so I haven't run any flows yet, therefore, you don't see anything.
>
> **[1:20](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=80)** Below that we have tools, these are the different components that go into a flow.
>
> **[1:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=84)** We have Python tools and LLMs and prompts and all sorts of things, and you can go through this list and see what's available.
>
> **[1:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=92)** Then there's the batch run history.
>
> **[1:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=94)** If you're running batch runs, this is where you manage them and where you get full access to that history.
>
> **[1:39](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=99)** And at the bottom we have connections, this is where you configure connections to the AI services you'll be using.
>
> **[1:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=104)** Here we have Azure Content Safety, Azure OpenAI, Azure AI Search, custom OpenAI, and a series of other options.
>
> **[1:54](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=114)** In the next video, I'll show you how to create a new open AI connection so you can run some of these examples.
>
> **[1:59](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=119)** Speaking of, let's open one of the examples so you can see how Prompt Flow actually works in VS Code with this extension.
>
> **[2:06](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=126)** I'll go in and open this chat with Wikipedia extension and click Open.
>
> **[2:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=132)** This gives us a visual display of this file here, flow.dag.yaml.
>
> **[2:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=138)** That file also exists as a text file.
>
> **[2:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=141)** We can go into our file repository here, and if I open it, you'll see this is a YAML file that breaks down everything that's happening inside the flow, and we'll talk about this more in the next chapter.
>
> **[2:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=152)** So for now, let's just look at this visualization.
>
> **[2:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=155)** The prompt flow extension gives you two views side-by-side of your current flow.
>
> **[2:40](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=160)** On the left, you have the different nodes that connect together to make the flow, and on the right you have a visualization of how they connect together the actual flow.
>
> **[2:49](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=169)** So here you can see in this particular flow, you get an input.
>
> **[2:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=173)** Then it gets passed in here to extract a query, go to the wiki URL, then search for result, then process the search results, and then do something and then make an output.
>
> **[3:03](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=183)** And you can see that these nodes have different icons indicating what they are doing and how they function.
>
> **[3:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=188)** You also see right now that a lot of them have these little warning signs saying that something is wrong, and we can go over here in the nodes and see that one of the problems is we don't have an open AI connection created yet.
>
> **[3:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=199)** Another problem is that something did not get generated, that's probably because of the previous problem.
>
> **[3:25](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=205)** And all of this is addressable as we start working with the files.
>
> **[3:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=208)** But what I want you to notice here is you have different ways of accessing the project.
>
> **[3:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=214)** You can work on it in this GUI.
>
> **[3:36](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=216)** You can also work on it as a YAML file, and as you work on it, things will update and change.
>
> **[3:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=221)** But this interface here is where you'll be spending most of your time because this is where you can figure how the different pieces interact.
>
> **[3:48](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=228)** This is also where you put in your test strings and where you check to make sure everything is working.
>
> **[3:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=233)** And once you start running the application, you'll get outputs for each of the nodes, telling you what came into the node, how it was processed, and what came out of it.
>
> **[4:03](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=243)** So you can see the flow of information going through your AI app.
>
> **[4:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=247)** Finally, once you've set up a flow, you've set up your connections and you're ready to go, you can run the whole project, you can run individual nodes from within the project.
>
> **[4:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=256)** You can batch run tests against the project, you can debug the project, and you can build out the project into a Docker container.
>
> **[4:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/exploring-the-prompt-flow-vs-code-extension?u=76281980&t=263)** And we'll do all of these things as we move through the course.

> [!info]- Semantic Content
>
> **Tools:** vs code (5), github (2)
> **CLI Commands:** make (3), python (1), node (1), docker (1)
> **Env Vars:** yaml (2), cli (1), stk (1), url (1), gui (1)
> **Code Keywords:** let (2), function (1), interface (1), finally, (1)
> **UI Navigation:** go to (3), click on (2)
> **Prerequisites:** install (2), set up (2), configure (1)
> **Cross-References:** in the next (2), we talked about (1), previous video (1)
> **File Paths:** flow.dag.yaml (1)

#### Creating a connection to OpenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=0)** - [Instructor] To run a prompt flow that has an AI component, you first need to create a connection for prompt flow to connect to whatever AI service you're using.
>
> **[0:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=7)** There are two ways of doing this.
>
> **[0:09](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=9)** You can either use the command line interface for prompt flow.
>
> **[0:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=12)** The instructions for that are found in the readme file for the Prompt Flow project.
>
> **[0:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=16)** You can scroll down to quick start and here you see the code.
>
> **[0:20](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=20)** So you call in pf, which is the prompt flow CLI.
>
> **[0:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=23)** Then you call in connection create to create a new one, file as you're creating a new file, you place the file in your project folder.
>
> **[0:31](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=31)** Then you call the file whatever you want, probably the name of the service you're going to use.
>
> **[0:36](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=36)** And then you set the API key to your API key and name the connection something that you will then later call in to your prompt flow.
>
> **[0:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=44)** The examples that are provided here are for OpenAI and for OpenAI on Azure.
>
> **[0:49](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=49)** But you can also use other examples and there are more examples in the examples folder.
>
> **[0:54](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=54)** So that's command line where you can also do the same thing using the prompt flow extension.
>
> **[0:58](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=58)** If you open the extension and scroll all the way down to the Connections section, you can choose the type of connection you want.
>
> **[1:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=64)** And at the left hand side of each connection there's a button.
>
> **[1:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=68)** I'm not sure why that button isn't showing up on my computer.
>
> **[1:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=72)** There is supposed to be a plus here and normally there is, so I don't know what's going on.
>
> **[1:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=76)** But if you click on this button here, it creates a new file for you called new_OpenAI_connection.yaml.
>
> **[1:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=83)** And this is a file where you put in the necessary information to create the connection.
>
> **[1:27](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=87)** Now the type of connection determines what information you need to input here for OpenAI.
>
> **[1:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=92)** All you need to do is give your connection a unique name.
>
> **[1:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=95)** So for all of these projects, that name should be open_ai_connection.
>
> **[1:43](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=103)** If you're in an organization, you can put in the organization ID.
>
> **[1:46](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=106)** And if you're using a custom API base, meaning, for example, if you have a fine-tuned model you want to use, you can put in that base here and uncommon this line.
>
> **[1:56](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=116)** But if you don't have any of that, you can just run the file as is.
>
> **[2:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=120)** One important thing to note here is don't replace the user input placeholder.
>
> **[2:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=125)** The application will prompt you to enter a value when it runs the application.
>
> **[2:11](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=131)** Prompt flow will prompt you in the command line to input your API key, which brings us to the API key.
>
> **[2:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=138)** To create a connection, you need an API key.
>
> **[2:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=141)** So because I'm using OpenAI, I'll go generate a new one at platform.[openai.com/api-keys](https://openai.com/api-keys).
>
> **[2:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=148)** First, I pick a project for myself or create a new one for this project.
>
> **[2:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=152)** Then Create a new secret key.
>
> **[2:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=154)** Call it promptflow_repo.
>
> **[2:39](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=159)** Create the secret key, copy it.
>
> **[2:43](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=163)** This is only displayed once, so I have a habit of not closing it until I pasted it in and then go back here.
>
> **[2:51](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=171)** Now before I create this connection, I need to do one more thing.
>
> **[2:56](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=176)** And yes, I said this code space is fully set up to do everything, it is with one weird caveat.
>
> **[3:03](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=183)** For the system to be able to save a an environment variable, you need to install an additional Python extension.
>
> **[3:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=190)** And as I'm recording this, there is a discussion going on in the repo on whether or not that extension should be auto installed or not.
>
> **[3:17](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=197)** So because it is not currently installed, I'll show you how to install it.
>
> **[3:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=201)** You open up terminal, then you type in pip install, and then keyrings.alt.
>
> **[3:29](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=209)** Run that, the keyrings dependency is installed.
>
> **[3:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=212)** I can now clear my command line and then go up here in the new_OpenAI_connection file and click this link, Create connection.
>
> **[3:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=221)** The command line interface asks for the API key.
>
> **[3:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=224)** So here I'll paste in the API key.
>
> **[3:48](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=228)** The API key is now saved into my system.
>
> **[3:51](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=231)** And now if I go back into my flow, you'll see that down here with the LLM, I no longer have a red box around it because open_ai_connection now exists as a connection that I can use.
>
> **[4:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/creating-a-connection-to-openai?u=76281980&t=244)** And that means I can start testing and running these different flows.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), cli (1), llm (1)
> **Tools:** command line (5), terminal (1)
> **Code Keywords:** interface (2), this. (1), this, (1)
> **Prerequisites:** install (3), set up (1)
> **Code Identifiers:** open_ai_connection (2), promptflow_repo (1)
> **UI Navigation:** scroll down (1), open the (1), click on (1)
> **CLI Commands:** python (1), pip (1)
> **Definitions:** is a  (2)

#### Running Prompt Flow examples
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=0)** - [Morten] Before we look at the anatomy of a promptflow, let's run a flow so you see how all of this ties together.
>
> **[0:06](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=6)** You can run a flow using the vscode extension by going to the dag.yaml file for the flow and clicking on the Play button, or by opening the extension sidebar, navigating under flows to the flow in question, and clicking Test.
>
> **[0:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=19)** Or you can run it from command line.
>
> **[0:22](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=22)** There is an example of how to do that in the README file.
>
> **[0:25](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=25)** If you go down to the Quick Start section, you'll find you call in pf, that's promptflow.
>
> **[0:30](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=30)** Then say this is a flow, we're going to test it, we're going to test it as a flow.
>
> **[0:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=33)** This is where the folder, where the flow lives and we want to use the interactive mode.
>
> **[0:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=38)** There's actually a lot more to this that you can do in the command line.
>
> **[0:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=41)** You can also batch-process things and do a bunch of fancy stuff.
>
> **[0:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=44)** But for our purposes, I'm going to use the vscode extension.
>
> **[0:48](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=48)** So I'll open up the flow and just click the Play button.
>
> **[0:51](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=51)** Here I get three options: run with standard mode, run with interactive mode text, and run with interactive mode multi-modal.
>
> **[0:58](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=58)** So let's start with standard mode.
>
> **[1:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=60)** This is effectively the debugging mode of a promptflow where you run the flow once and get a bunch of information about what happens.
>
> **[1:06](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=66)** So here you can see in command line I get a breakdown that started executing the nodes, then it found a node, then it executed the node called Chat, then it completed the chat.
>
> **[1:15](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=75)** And then this is the output down here.
>
> **[1:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=78)** Now when I close this out and go look at the nodes, you'll see I have more information here.
>
> **[1:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=84)** Previously I only had the input and the output, but now underneath output it tells me Flow run outputs, and I can see the output that was sent out.
>
> **[1:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=94)** Scrolling down to the chat node, I can see both output and logs, which is the full breakdown.
>
> **[1:40](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=100)** I can see the inputs, information that got sent into the component, and the output, the information that it's sent out.
>
> **[1:46](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=106)** This is incredibly useful once you start working with your own flows, because you can see the information coming in and out of each component, and you can quickly detect when something is going wrong or the information is sent to the wrong place.
>
> **[1:57](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=117)** So this is standard mode, but because this is a chat mode, I have two additional modes, interactive text and interactive multi-modal.
>
> **[2:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=125)** So I'll spin up interactive text, and what you see in the terminal is I can now chat with my application.
>
> **[2:11](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=131)** So I'll say, "Hello, what's my name?
>
> **[2:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=136)** Now the system will not know this because I haven't told it yet, but because this is a chat, I have the option of activating Chat History.
>
> **[2:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=144)** When I do so, the chat history, so my previous prompts and its previous completions, get added into the new request, and that way it retains the history of the chat.
>
> **[2:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=155)** And I can now say, for example, "My name is Morten."
>
> **[2:39](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=159)** The system responds, and then I can say, "What's my name?"
>
> **[2:43](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=163)** And it'll respond correctly with, "Your name is Morten."
>
> **[2:45](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=165)** So this very simple flow that you're seeing here is already doing more than the API is doing on its own.
>
> **[2:52](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=172)** And this kind of hints at the power of promptflow.
>
> **[2:56](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=176)** Now, to get out of this interactive chat, I put in ctrl+C, and it terminates the process.
>
> **[3:03](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=183)** That was the text version.
>
> **[3:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=184)** There is also an interactive web-based version.
>
> **[3:06](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=186)** That's the one called interactive mode multi-modal.
>
> **[3:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=190)** Click on that, a bunch of other processes now have to spin up because this is an interactive version.
>
> **[3:17](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=197)** A trace view opens up in my browser that gives me a history of all the different chats I've done so far where I can go in and look at the traces.
>
> **[3:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=204)** But down here it says, "Running on localhost 50903.
>
> **[3:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=208)** So I'll Command, click on this, and it opens a chat app for me.
>
> **[3:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=214)** And here I can say, "Write me a haiku about a duck."
>
> **[3:43](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=223)** And it works just like a chat app.
>
> **[3:45](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=225)** "What's my name?"
>
> **[3:48](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=228)** "I don't know."
>
> **[3:49](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=229)** "My name is Morten.
>
> **[3:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=233)** What's my name?"
>
> **[3:57](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=237)** "Your name is Morten."
>
> **[3:58](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=238)** And I can start a new chat with a new history.
>
> **[4:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=241)** (keyboard clacking) See, doesn't know.
>
> **[4:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=247)** Just like with the interactive text chat, to stop the interactive multi-modal chat, go into the terminal, go ctrl+C, and the process terminates.
>
> **[4:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=258)** One important thing to note here, this is a chat flow.
>
> **[4:20](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=260)** You can see it because the box is checked, Enable chat mode.
>
> **[4:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=263)** So when I run this, I get the options: standard mode, interactive mode text, and interactive mode multi-modal.
>
> **[4:29](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=269)** The many flows you'll build will not be chat-based.
>
> **[4:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=272)** There'll be some sort of advanced interaction between different LLMs and other functions.
>
> **[4:37](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=277)** And in that case, you won't get this list of options.
>
> **[4:40](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/running-prompt-flow-examples?u=76281980&t=280)** Instead, when you click Play, it'll just run standard mode, and it'll run the entire thing one time.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2)
> **Code Keywords:** let (2), this, (2), case, (1)
> **Tools:** command line (3), terminal (2)
> **CLI Commands:** node (3), find (1)
> **Analogies:** just like (2), for example (1)
> **Env Vars:** readme (1), api (1)
> **UI Navigation:** click on (2)
> **File Paths:** dag.yaml (1)

#### Anatomy of a Prompt Flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=0)** - [Instructor] Let's talk about the anatomy of a prompt flow because looking at this display and looking at how the file structure is organized, it can be quite overwhelming until you understand what's going on.
>
> **[0:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=12)** In a prompt flow, there are a couple of rules that always have to be followed.
>
> **[0:15](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=15)** Every prompt flow will have an input and an output, so those are always specified at the top, and then it may have a set of components or tools.
>
> **[0:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=24)** The other rule is that any component or tool must have an input and an output, and here's why.
>
> **[0:30](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=30)** If we look at this very simple flow, you can see information flows into this tool, then something happens to the information, and then it flows out.
>
> **[0:40](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=40)** And if we were to chain multiple tools together, for example, in this flow here, we still need to flow the information in somewhere and then out somewhere and do something with it.
>
> **[0:49](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=49)** And that goes for every single flow you'll find here.
>
> **[0:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=53)** No matter how complex, even when it has conditional statements, there will always be this input goes to output every time.
>
> **[1:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=61)** The easiest way to see this input and output action happen is by following the data.
>
> **[1:06](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=66)** So up here in Inputs, we have two inputs, chat_history, which is the chat history, and question, which is a string.
>
> **[1:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=72)** Where does that information go?
>
> **[1:13](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=73)** If we go down to Chat, which is the LLM component, which is set to open_ai and gpt-3.5-turbo, down here under Inputs, we have chat_history, which points at inputs.chat_history, and we have question which points at input.question.
>
> **[1:29](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=89)** Now, this LLM component or tool has an output called chat output, and that's captured up here under Outputs, chat.output.
>
> **[1:37](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=97)** So that's how we get input into chat and then the output.
>
> **[1:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=101)** Now let's take a closer look at this chat component because this is where the LLM interaction happens and we have the standard features you would expect.
>
> **[1:49](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=109)** We can set up what type of API we're using.
>
> **[1:51](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=111)** We can set up the model we're using, the temperature, the max tokens.
>
> **[1:55](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=115)** Open advanced parameters, there's even more parameters you can set up, and you can also do function calling.
>
> **[2:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=120)** There's an example for that in the examples folder, but there's one thing missing, the prompt.
>
> **[2:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=124)** Well, it says prompt here, and then it points at a file called chat.jinja2.
>
> **[2:09](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=129)** Open that file and you find this, which is front matter for a prompt.
>
> **[2:14](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=134)** This text will eventually be turned into the message objects that is passed on to the LLM.
>
> **[2:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=139)** And here you can see we have a system message and a user message, and there's also chat history in here in a for in loop.
>
> **[2:27](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=147)** So we're looping through all the available items in the chat history.
>
> **[2:31](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=151)** This is important because one of the features of prompt flow is the ability to create variants.
>
> **[2:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=155)** So you can take any component where you can go and change the prompt by making a different prompt file, or you can change the model or you can change the temperature or something else, and then you can test across different variants without having to do a whole bunch of work to rewrite your code every time.
>
> **[2:50](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=170)** Looking at the folder for the prompt flow, you'll see there are a couple of key pieces.
>
> **[2:54](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=174)** We always have a dag.yaml file.
>
> **[2:57](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=177)** This is the main flow file.
>
> **[2:59](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=179)** If there's an LLM component in it, there will likely be a jinja2 file which contains the prompts.
>
> **[3:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=185)** And for each prompt flow project folder, there will always be a requirements.txt file specifying which Python dependencies this project depends on.
>
> **[3:14](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=194)** And in every case, it'll be promptflow and promptflow-tools, but it may also be additional dependencies depending on what is being used in other tools.
>
> **[3:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=203)** The reason this file exists is because at some point you will probably want to build out your prompt flow into a tool, and then the tool needs to know which dependencies to install.
>
> **[3:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=213)** Now this is a really basic flow with just one LLM component.
>
> **[3:36](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=216)** Let's take a look at a more complex one.
>
> **[3:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=218)** The chat to Wikipedia flow has a lot more components to it, and you can go and look at each of them and see what they do.
>
> **[3:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=224)** So this icon here indicates this is an LLM tool, this icon is a Python tool, and so on.
>
> **[3:50](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=230)** And here you see we're passing first through an LLM, then we go to Python and do a bunch of things and then we come back out to an LLM and send information down.
>
> **[3:58](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=238)** And if you go through here, you'll be able to follow that information.
>
> **[4:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=241)** Here's the input.
>
> **[4:02](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=242)** Here we extract query from question and get the output.
>
> **[4:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=245)** Then we get the wiki URL output and do something else with it and so on.
>
> **[4:09](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=249)** So the information is being passed down through these input, output fields.
>
> **[4:14](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=254)** In addition to all of this stuff, you can also create conditional statements within here.
>
> **[4:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=258)** So if you look closely at this flow, you'll see there's a condition.
>
> **[4:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=263)** We go into content_safety_check, and then depending on what happens there we go either to llm_results or to default_results.
>
> **[4:30](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=270)** The way this works is down here under Activate config.
>
> **[4:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=275)** So for each of your components or tools, you can go to Activate config and say when some condition is either a Boolean or a string or an integra or a double then and then whatever condition is there, that's the only time this component will fire.
>
> **[4:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=293)** That's what's happening here.
>
> **[4:54](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=294)** So the content_safety is outputting a Boolean, that's either true or false, and then either llm_result or default_result will fire depending on that output.
>
> **[5:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=304)** This allows you to build very advanced flows with multiple different conditional statements throughout and control exactly when different things happen.
>
> **[5:13](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/anatomy-of-a-prompt-flow?u=76281980&t=313)** And you do that in part through the outputs from components and in part through what data is flowing through.

> [!info]- Semantic Content
>
> **Env Vars:** llm (9), api (1), url (1)
> **Code Identifiers:** chat_history (3), open_ai (1), content_safety_check (1), llm_results (1), default_results (1)
> **Code Keywords:** let (3), function (1), this, (1), else, (1), case, (1)
> **CLI Commands:** python (3), find (2)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** set up (3), install (1)
> **File Paths:** dag.yaml (1), requirements.txt (1)
> **UI Navigation:** go to (2)

#### Prompt variants
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=0)** - [Instructor] One of the unique challenges of building an AI-powered app is testing different AI configurations.
>
> **[0:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=7)** It could be different models.
>
> **[0:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=8)** It could be different temperatures.
>
> **[0:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=10)** It could be any of the different parameters provided by the AI, or it could be different prompts.
>
> **[0:16](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=16)** Normally, when you develop an AI app, you have to build out the code for all these different situations and then keep track of them yourself.
>
> **[0:24](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=24)** In Promptflow, it's much easier because Promptflow is set up for you to test against multiple different iterations at the same time, and that way, you can compare the output immediately.
>
> **[0:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=34)** This is done by creating variations of your tools and components.
>
> **[0:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=38)** Here's an example.
>
> **[0:39](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=39)** In my basic flow, I want to create a new variant of this chat component with a different system message.
>
> **[0:46](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=46)** To do that, I'll click on this button up here in the tool.
>
> **[0:50](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=50)** This gives me the Variant view where I can see all my variations, and right now, I only have one.
>
> **[0:55](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=55)** This is the default one.
>
> **[0:56](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=56)** It's called variant_0, set to default, and it has the current settings.
>
> **[1:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=61)** To create a new variation, I just click on the Copy button here.
>
> **[1:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=64)** This duplicates the variant, and you'll notice something immediately.
>
> **[1:08](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=68)** A new file appeared over here in my File Explorer.
>
> **[1:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=70)** That's because this file, chat.jinja2, is the original prompt.
>
> **[1:15](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=75)** This file up here, chat_variant_1 is the new prompt, which is a copy of the original.
>
> **[1:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=81)** Scrolling down, I therefore have an exact copy of the original setup with all the same settings and the same prompt, but they're sitting separately in a separate component and in a separate file.
>
> **[1:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=93)** That means I can safely go into chat_variant_1 and make changes to my prompt, and then I can test them against each other.
>
> **[1:40](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=100)** So here, I'll make a change to my system message.
>
> **[1:42](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=102)** I'll say, "You're a helpful assistant that speaks Norwegian."
>
> **[1:48](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=108)** I'll produce a completely different output from the first one.
>
> **[1:51](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=111)** Then I'll go back to my Promptflow and click on Run All.
>
> **[1:54](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=114)** Now, because I have variants, I get two options.
>
> **[1:57](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=117)** I can either use the default variant for all codes, or I can use the two variants in chat at the same time.
>
> **[2:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=125)** Now, if I choose default variant for all nodes, then I can go in and have the chat experience.
>
> **[2:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=130)** But if I choose chat 2 variants, the default run will go through and generate two different outputs, one for each variant so I can compare them.
>
> **[2:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=138)** So let's do that.
>
> **[2:22](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=142)** Once the run is complete, I'll close my terminal and hide the panels so you can see what's going on.
>
> **[2:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=148)** In my view here, you can see that both were completed, and if I scroll up to the top, we'll see both outputs.
>
> **[2:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=155)** So this is the output from variant_0.
>
> **[2:38](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=158)** So that's the original.
>
> **[2:39](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=159)** This is the answer in English, and this is the output from variant_1, which is the same output but in Norwegian.
>
> **[2:47](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=167)** So now I have two different variants of the same chat, and I can look at them and compare them.
>
> **[2:53](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=173)** And I can do this across any of my components, so I can build different variants and test which one works best and which one is functioning the way I want to.
>
> **[3:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=181)** And then once I know, I'll pick only that variant and delete the rest.
>
> **[3:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=185)** Because now that I have all these variants on display, I can go in and duplicate the new variant into another one, or I can delete the variant I don't want.
>
> **[3:13](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=193)** I can also switch which one I set the default, and that's the one that will always run.
>
> **[3:17](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=197)** And finally, if I don't want to see this Variant view, I can come back and click on this check mark, and it'll collapse my Variant view, telling me that I have variants, and therefore, I can't edit it.
>
> **[3:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=208)** So what I'm looking at now is the default, but if I want to edit the default, I have to go back into the Variant view.
>
> **[3:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/prompt-variants?u=76281980&t=214)** Now this is a very basic example, but this feature is enormously powerful anytime you're working with a situation where you need to really refine a prompt and compare the output from different prompts.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (4), delete (2), let (1), switch (1), finally, (1)
> **UI Navigation:** click on (4), scroll up (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Batch testing of flows
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=0)** - [Instructor] Take it from me, advanced AI apps can be quite temperamental.
>
> **[0:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=4)** And as your prompt flow becomes more complex, it's vital that you run unit tests to ensure that all your conditions are met and that your output is what you want it to be no matter what information gets put in.
>
> **[0:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=19)** Now, practically speaking, we can do that in different ways.
>
> **[0:22](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=22)** The most manual one would be to go in and put in the different test values one by one and then run tests.
>
> **[0:29](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=29)** But that would take a lot of time and be really error prone.
>
> **[0:32](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=32)** The good news is prompt flow has a tool for this.
>
> **[0:34](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=34)** We can run a prompt flow in batches based on different types of files, and the most common one is to use a JSON L file.
>
> **[0:43](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=43)** For this project examples > flows > standard > conditional-flow-for-switch, there is such a JSON L file already created.
>
> **[0:51](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=51)** It's sitting right here in the folder just called data.jsonl.
>
> **[0:55](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=55)** JSON L format is when you have JSON objects on each line and they are not connected.
>
> **[1:02](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=62)** So there's no comma at the end of them.
>
> **[1:04](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=64)** These are complete JSON objects.
>
> **[1:06](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=66)** So anytime you pass a JSON L file into a system that supports it, it'll run each object independently of the next.
>
> **[1:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=72)** And that's what we want to do here.
>
> **[1:14](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=74)** The format of this test file is the input key and then the input value.
>
> **[1:20](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=80)** So in this project, the key is query.
>
> **[1:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=83)** Therefore, it's query and then a question.
>
> **[1:26](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=86)** This flow, by the way, is a mock setup for a store.
>
> **[1:29](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=89)** You go in and ask a question about a product.
>
> **[1:31](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=91)** There's a classifier powered by an LLM that figures out what type of question is this.
>
> **[1:35](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=95)** And then based on the type of question, you either get an order search, a product info search, or a product recommendation that then gets returned.
>
> **[1:44](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=104)** And looking at these questions, you'll see here's an order search, there's also information search, and then something that is completely irrelevant to the situation.
>
> **[1:55](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=115)** You can use the prompt flow via code extension to run these batch tests either by opening up the dag.yaml file and clicking on the beaker up on the top here, or by going to the prompt flow site panel, finding the flow in question, and clicking batch run.
>
> **[2:09](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=129)** Does the same thing.
>
> **[2:10](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=130)** So I'll click the beaker over here.
>
> **[2:12](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=132)** Then, I point at whatever file I want to use.
>
> **[2:15](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=135)** So I'll choose local file this time.
>
> **[2:17](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=137)** You can also choose other types of files.
>
> **[2:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=139)** So you see there's a JSON L, CSV, or Parquet, and you can also pick an existing run.
>
> **[2:25](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=145)** So something that you've already used before, you can use it again.
>
> **[2:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=148)** So I'll choose local file.
>
> **[2:30](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=150)** Then I'll point at the file, which is this one, JSON L.
>
> **[2:33](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=153)** And from here I can either run it or add a test suite.
>
> **[2:36](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=156)** So I'm just going to run it to get the output.
>
> **[2:41](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=161)** And when my batch run is completed, I can go back in to the prompt flow tools, scroll down until I find batch run history, click on this refresh button just in case, and then open up the run data.
>
> **[2:55](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=175)** Here we have the run data for that run, and I can click visualize.
>
> **[2:58](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=178)** This opens up a batch run visualization.
>
> **[3:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=180)** And here, depending on what type of data I was using and how I've configured things, I'll get different types of information.
>
> **[3:07](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=187)** In my example, what I'm interested in is to see the actual responses.
>
> **[3:11](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=191)** So I'll pull this out.
>
> **[3:13](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=193)** And here you can see for the first question, which was, "When will my order be shipped?"
>
> **[3:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=198)** It says, "Your order is being mailed."
>
> **[3:19](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=199)** For the second question, "Can you help me find information on it?"
>
> **[3:21](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=201)** It says, "The product was produced by."
>
> **[3:23](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=203)** And "Can you recommend me a prompting tool?"
>
> **[3:28](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=208)** It says, "I recommend prompt flow."
>
> **[3:30](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=210)** So this last one is actually a good indicator that something is wrong because the system really shouldn't answer questions it doesn't know anything about, which is what's happening here.
>
> **[3:39](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=219)** And the batch run allowed me to identify that really quickly.
>
> **[3:42](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=222)** Now of course, this is a really trivial example of a really powerful tool that can do a lot more than just show the output.
>
> **[3:49](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=229)** So as you're working with your own app, I recommend checking the documentation to see the different types of evaluations and the different types of testing that you can do, and what types of output you can get from it.
>
> **[4:01](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=241)** Because there's a lot you can do here.
>
> **[4:03](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/batch-testing-of-flows?u=76281980&t=243)** It all depends on what you need in your testing.

> [!info]- Semantic Content
>
> **Env Vars:** json (8), llm (1), csv (1)
> **Code Keywords:** this. (2), switch (1), pass (1), case, (1)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **File Paths:** dag.yaml (1)
> **Documentation:** the documentation (1)
> **Best Practices:** the key is (1)


### 2. Conclusion

#### Going further with Prompt Flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=0)** - And just like that, you've reached the end of this course and the beginning of your journey with prompt flow.
>
> **[0:05](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=5)** For a deeper dive into everything prompt flow offers, go check out the official GitHub repository and the huge list of plug and play examples it contains.
>
> **[0:14](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=14)** And as always, make liberal use of the official documentation for the project.
>
> **[0:18](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=18)** Here you'll find quick start guides, tutorials, examples, and detailed breakdowns of all the advanced features of this framework I didn't have time to cover here, so you can get full use out of it.
>
> **[0:29](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=29)** As you continue your learning journey with AI, make sure to check out our constantly expanding list of AI courses right here on LinkedIn Learning, and follow me on LinkedIn for critical insights analysis and discussion of AI and how we build our future with it.
>
> **[0:42](https://www.linkedin.com/learning/building-advanced-ai-apps-with-prompt-flow/going-further-with-prompt-flow?u=76281980&t=42)** Now, all that's left for me to say is, (instructor speaks in foreign language) go build some advanced AI apps with prompt flow, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1), go build (1)
> **Code Keywords:** continue (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - and (1)


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