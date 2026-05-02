---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-ai-for-developers-openai-services-and-generative-ai-models
url: "https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models"
duration_minutes: 65
duration: 1h 5m
level: Intermediate
updated: 5/12/2025
learners: 1631
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Microsoft Azure
exercise_files: true
github: "https://github.com/LinkedInLearning/azure-openai-generative-ai-models-and-how-to-use-them-5988057"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE6duOe6-u4jg/learning-public-crop_675_1200/B4DZaigMnzGwAg-/0/1746483071814?e=2147483647&amp;v=beta&amp;t=w4NdGIIy1bsyOz0okYdTWwfGxMP4AZ0yDKDtFClzAT8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Build AI Products Using Azure AI Services in Your Development Lifecycle]]'
prev_courses:
  - '[[Azure AI for Developers- Using the Azure AI Model Catalog]]'
next_courses:
  - '[[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI]]'
path_nav: '[{"path":"Build AI Products Using Azure AI Services in Your Development Lifecycle","position":4,"total":8,"prev":"Azure AI for Developers- Using the Azure AI Model Catalog","next":"Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/microsoft-azure
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20AI%20for%20Developers-%20OpenAI%20Services%20and%20Generative%20AI%20Models.md)

![Azure AI for Developers: OpenAI Services and Generative AI Models](https://media.licdn.com/dms/image/v2/D4D0DAQE6duOe6-u4jg/learning-public-crop_675_1200/B4DZaigMnzGwAg-/0/1746483071814?e=2147483647&amp;v=beta&amp;t=w4NdGIIy1bsyOz0okYdTWwfGxMP4AZ0yDKDtFClzAT8)

# Azure AI for Developers: OpenAI Services and Generative AI Models

> OpenAI models are disrupting the tech scene in revolutionary ways. Every day, more and more people are talking about OpenAI and the capabilities it has. It’s important to understand how this service works, what the dangers are, and most importantly, how you can use it to simplify your life or enhance your business. In this course, Data and AI Solution Architect Sammy Deprez introduces you to Azure

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models) | 1h 5m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Unlocking your AI potential with Azure OpenAI Service](#unlocking-your-ai-potential-with-azure-openai-service)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Azure OpenAI Service**](#1-introduction-to-azure-openai-service) (7 videos)
  - [What is Azure OpenAI Service?](#what-is-azure-openai-service)
  - [Azure OpenAI vs. OpenAI Service](#azure-openai-vs-openai-service)
  - [Deploying Azure OpenAI Service](#deploying-azure-openai-service)
  - [Azure AI Foundry: Quick tour](#azure-ai-foundry-quick-tour)
  - [Azure AI Foundry: Model catalog](#azure-ai-foundry-model-catalog)
  - [Azure AI Foundry: Playground](#azure-ai-foundry-playground)
  - [What kind of models are available?](#what-kind-of-models-are-available)
- [**2. Chat Completion Models**](#2-chat-completion-models) (4 videos)
  - [How do GPT models work?](#how-do-gpt-models-work)
  - [What can GPT models do?](#what-can-gpt-models-do)
  - [Which model should I choose?](#which-model-should-i-choose)
  - [The important role of prompt engineering](#the-important-role-of-prompt-engineering)
- [**3. Embedding Models**](#3-embedding-models) (3 videos)
  - [What are embeddings?](#what-are-embeddings)
  - [Model capabilities](#model-capabilities)
  - [How to use embeddings for a semantic search](#how-to-use-embeddings-for-a-semantic-search)
- [**4. Image Generation Models**](#4-image-generation-models) (3 videos)
  - [What are DALL·E models?](#what-are-dalle-models)
  - [How image generation models work](#how-image-generation-models-work)
  - [Examples of use cases](#examples-of-use-cases)
- [**5. Audio Models**](#5-audio-models) (4 videos)
  - [What are audio models?](#what-are-audio-models)
  - [Converting speech to text](#converting-speech-to-text)
  - [Converting text to speech](#converting-text-to-speech)
  - [Audio chat with a chat model](#audio-chat-with-a-chat-model)
- [**Conclusion**](#conclusion) (2 videos)
  - [Be careful](#be-careful)
  - [More ideas](#more-ideas)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Unlocking your AI potential with Azure OpenAI Service](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=0)** - [Sammy] Welcome, future innovators.
>
> **[0:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=2)** Are you ready to embark on an exciting journey into the world of [[Microsoft Azure|Azure]] OpenAI services?
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=8)** Great, because this online course is exactly what you've been waiting for.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=13)** Imagine a world where machines can understand, reason and even converse with humans.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=19)** A world where [[Artificial Intelligence (AI)|artificial intelligence]] transcend limits and drives innovation to new heights.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=25)** Well, that world is within your reach.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=27)** And Azure OpenAI services are here to help you build intelligent tools.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=33)** Together we'll unlock the potential of AI and empower ourselves to make a real impact.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=39)** Hey, I'm Sammy Deprez your guide throughout this learning experience.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=44)** Enroll now and let's get started on this incredible learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [sammy] (1)

#### [What you should know](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=0)** - [Instructor[ Welcome future innovators.
>
> **[0:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=2)** Are you ready to embark on an exciting journey into the world of [[Microsoft Azure|Azure]] OpenAI services?
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=8)** Great, because this online course is exactly what you've been waiting for.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=13)** Imagine a world where machines can understand, reason, and even converse with humans.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=19)** A world where [[Artificial Intelligence (AI)|artificial intelligence]] transcends limits and drives innovation to new heights.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=25)** Well, that world is within your reach, and Azure OpenAI services are here to help you build intelligent tools.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=33)** Together we'll unlock the potential of AI and empower ourselves to make a real impact.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=39)** Hey, I'm Sammy Deprez, your guide throughout this learning experience.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=44)** Enroll now and let's get started on this incredible learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor (1)


### 1. Introduction to Azure OpenAI Service

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Azure OpenAI Service?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=0)** - [Instructor] What is [[Microsoft Azure|Azure]] OpenAI?
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=3)** To answer this, we need to understand what OpenAI is.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=7)** OpenAI is an American [[Artificial Intelligence (AI)|artificial intelligence]] research laboratory founded in 2015 consisting of the non-profit OpenAI Incorporated, and its for-profit subsidiary corporation.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=20)** OpenAI Limited Partnership.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=22)** OpenAI conducts AI research with a declared intention of promoting and developing a friendly AI.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=30)** They developed [[Large Language Models (LLM)|large language models]] or LLMs like GPT, [[DALL-E]] and Whisper.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=37)** Since [[Microsoft]] made a massive investment in the research center, they can offer these services on their own cloud platform, Azure.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=45)** So Azure OpenAI is the models that OpenAI developed, but on the Azure platform and that are available via [[Representational State Transfer (REST)|REST]] APIs and SDKs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[DALL-E]] (1), [[Microsoft]] (1)
> **Env Vars:** gpt (1), dall (1), rest (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Azure OpenAI vs. OpenAI Service](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=0)** - [Instructor] So what is the difference between [[Microsoft Azure|Azure]] OpenAI Services and the, let's call it, original OpenAI services?
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=8)** Therefore, we need to go to the beginning.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=10)** So the OpenAI models are also available via their own API endpoints.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=17)** Now, because of the investments [[Microsoft]] made in the OpenAI organization, they are allowed to make those models also available on their own cloud platform, Azure.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=28)** Now Microsoft works most of the time with enterprise organizations, which means they had to bring these models to a next level, and that's what they did by creating Azure OpenAI.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=41)** So Azure OpenAI is the OpenAI models, but with an enterprise layer on top of it.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=47)** Now that enterprise layer exists out of three main topics.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=52)** The first one is [[Responsible AI]].
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=55)** One part of that is content filtering.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=57)** So [[ChatGPT]], for example, will not respond to just anything you are asking it.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=63)** The second one is security.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=66)** Now, as I said, those API models are available via API endpoints, which means normally anyone can just connect to those API endpoints as long as you have a key.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=79)** Now, by creating private endpoints, for example, on the Azure platform, you're making sure that that is not even possible.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=85)** It's only within the same network that that is possible.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=88)** Now, part of security is also [[Privacy]].
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=92)** Microsoft is promising that the data that you are sending to the OpenAI endpoints is not going to be reused to retrain models or that they're also not looking into it.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=103)** Now the third one, with regional availability, Microsoft is offering the possibility to deploy the OpenAI models in the region of their choice, which means that data does not need to be sent to the United States, but can stay, for example, within Europe.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=119)** Due to legislation of certain industries, it would not have been possible to make use of the OpenAI models in the USA.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft]] (4), [[Responsible AI]] (1), [[ChatGPT]] (1), [[Privacy]] (1)
> **Env Vars:** api (4), usa (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Deploying Azure OpenAI Service](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=0)** - [Instructor] Now that you have a basic understanding of what [[Microsoft Azure|Azure]] OpenAI is, it's time to create the Azure OpenAI service so we can actually try out some things.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=10)** To do that, let's go into the Azure portal and start creating our resource.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=15)** So the page you see right now is an empty resource group and we have two options.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=19)** We can click here on Create, and immediately start creating our resource.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=24)** Or we can even just start typing here, OpenAI and go this way as well.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=31)** So we're just going to do it the way of the Create button.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=34)** We click Create.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=35)** We go into the marketplace where we're going to type OpenAI, we find here back Azure OpenAI.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=44)** We click the Create button, click Azure OpenAI.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=49)** We choose our subscription.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=51)** So this is where all the billing is sent to.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=54)** We choose a resource group, so I had already created one.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=57)** We choose a region.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=58)** I'll choose Sweden in my case.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=62)** And we gave it the name.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=63)** So I'll call it OAI [[LinkedIn]] Course Demo.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=68)** And then the pricing tier, which there's only one, we click Standard SO.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=73)** Now we accept the policy, the content review policy.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=79)** So we click Next.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=80)** And then we have the feature of networking if we want a service, since it's an API endpoint to be accessible over the internet, only available for specific networks or fully block off and only within your private endpoints.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=96)** This is a totally different course to follow how to set up these kind of networks.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=100)** But for now, we will just choose the all networks.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=104)** We can add some text, and then we go into the Review Plus Submit section.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=110)** So we give this a couple of seconds to run a final validation.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=113)** That is double-checking if the name has not been used and so on.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=117)** I will click the Create button.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=119)** So this will take a couple of seconds to a minute, and once that is done, your Azure OpenAI resource has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[LinkedIn]] (1)
> **Env Vars:** oai (1), api (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Azure AI Foundry: Quick tour](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=0)** - [Instructor] Now that you have created the [[Microsoft Azure|Azure]] OpenAI resource on your Azure subscription, it's time to have a quick tour of the Azure OpenAI Studio or the [[Azure AI Foundry]].
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=12)** You can access the Azure AI Foundry for Azure OpenAI via the following link on your screen, oai.[azure.com](https://azure.com).
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=22)** So, let's go to the Studio and see what are all the different things that we can do there.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=29)** Now, in the Azure AI Foundry for Azure Open AI Services, we see a lot of different items here on the left.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=38)** We have our Model Catalog.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=40)** We have our Chat where we can actually start talking to different kinds of models.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=46)** We can start building Assistants.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=48)** We can make use of [[Real-Time]] audio, we can generate Images, we can even Fine tune models, we can do Evaluation.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=56)** We can even Store completions.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=58)** We can send off Batch jobs of generational jobs.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=63)** We can get some Metrics.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=64)** And of course, we have an overview of the deployed models because there's more than just GPT-3.5.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=70)** There's Whisper, there's GPT 4.0, 0.3 Mini, and so many more.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=76)** We can also define the Quota, which is saying how much [[Tokens]] you can consume.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=82)** And of course, also content Safety.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=84)** We can store Data that we can use to answer questions based on your own information, and the same as goes for the Vector stores.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=95)** Now, two very important things here that we might need later on is of course, our endpoint and one of the keys so we can make use of the [[Python (Programming Language)|Python]] SDK or the C# SDK to be able to connect to these services.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=110)** So this is just a quick intro.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=111)** We'll go a little bit deeper in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Azure AI Foundry]] (3), [[Real-Time]] (1), [[Tokens]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** gpt (2), sdk (2)
> **CLI Commands:** make (2), python (1)
> **Versions:** 3.5 (1), 4.0 (1), 0.3 (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Azure AI Foundry: Model catalog](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=0)** - [Lecturer] One of the great features of the [[Azure AI Foundry]] is the model catalog.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=6)** Now, why is that?
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=7)** Well, OpenAI creates new models on quite a fast pace, and therefore it's not always easy to figure out which model do I need or which ones are available.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=19)** But if we go to our AI Foundry and we click on the model catalog, we have a beautiful overview first of all the new announcements, and on the bottom, we see all the models that are available right now.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=32)** So at the moment, there are already 27 models available.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=36)** Now, this model catalog makes it actually even more easier for you because based on the kind of task that you want to do, you can easily filter them out.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=46)** So let's say we want to do embeddings.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=49)** Well, then we see there are three different models available.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=53)** Now let's clear this filter out, and let's say we are looking for a model that we want to fine-tune.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=58)** Well, let's say we want to fine-tune chat completion models, and then we also get these options.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=64)** Now next to this filtering, we can also just click on a model and get more details about it.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=72)** So when we click on one, we actually get the model cards.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=76)** Now the model cards will give us a short explanation of what the model specifically is and what it can do, what the key capabilities are, and the features, what other variance there are, and what the limitations are.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=90)** So this gives you already a good insight as well selecting the correct model for the solution that you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Azure AI Foundry]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Speakers:** - [lecturer] (1)

#### [Azure AI Foundry: Playground](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=0)** - [Instructor] Another great feature of the [[Azure AI Foundry]] is the playground.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=4)** In the playground, we can try out all the different kinds of models and just figure out how they work.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=11)** So let's go back to the AI Foundry and go into our playgrounds.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=16)** Now we see a couple of different playgrounds, and let's start with chat.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=20)** Now, in the chat, we can select a model that we want to make use of, and we can just start chatting with the model.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=29)** And immediately, we get a response.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=31)** So without writing any code, we can just switch between models and start talking to it.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=37)** Now there's as well the assistance and also the realtime audio.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=41)** Well, the realtime audio, let's give a quick demo about this as well.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=48)** Hey, [[ChatGPT]], how are you doing today?
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=51)** - [ChatGPT] I'm doing great.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=52)** Thanks for asking.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=53)** How about you?
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=54)** - [Instructor] I'm doing quite well.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=55)** I'm just showing people the playground of the Azure AI Foundry.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=60)** - [ChatGPT] That sounds really exciting.
>
> **[1:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=61)** The Azure AI Foundry playground is a great way to explore and get hands-on experience with different AI capabilities.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=68)** Are you showing them how it all works or are you diving into specific features?
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=72)** - [Instructor] Just do a general overview, thank you.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=76)** Now again, I didn't write any code and I could immediately make use of this, another feature as well as the images where I have deployed another model and we can just describe what we want to see on the picture.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=90)** A cute beer cooking in the forest.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=96)** Just give this a couple of seconds and we will get a nice image that we can use in our marketing campaign, for example.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=105)** And there we go.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=106)** You have a cute beer that is cooking in the forest.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=108)** Now, as I said before, the playground really helps you to try out different models and figure out what the capabilities are before you're even going into codes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Azure AI Foundry]] (3), [[ChatGPT]] (3)
> **Speakers:** - [instructor] (3), - [chatgpt] (2)
> **CLI Commands:** make (2)
> **Analogies:** picture (1), for example (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [What kind of models are available?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] offers multiple OpenAI models.
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=3)** Let's have a quick look which ones there are and what they are for.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=7)** The GPT models are used for text generation.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=10)** You have the chat functionality which keeps track of the context of the whole conversation, and we have the completion functionality, which can handle advanced commands to generate text.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=21)** The second model type is embedding models.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=24)** Embedding models will convert text into a vector of numbers.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=28)** That way we can search, find similar, cluster or classify documents.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=34)** The Codex models could be compared to the GPT models, but with the biggest difference is that it will not return text, but will return parts of code.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=43)** For example, in [[Python (Programming Language)|Python]] or C#.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=47)** For example, we have [[GitHub Copilot]] who will assist software developers to write code more efficiently.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=54)** So, in this example on the screen, a software developer might add a command in his code saying, "I need a function that checks if a string is an email address."
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=63)** At that moment, the Codex model will return the function and the language the software developer is writing at that moment.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=71)** And last but not least, is the [[DALL-E]] models.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=74)** These models will convert text or you could call it a command into a picture.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=79)** So in this case, I gave the command, "A bear learning about AI," and it returned me this beautiful picture.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=86)** So at the moment, there are four different model types that are available on the Azure OpenAI Service.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=93)** We don't know what the future will bring, but this might grow with more models over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Python (Programming Language)|Python]] (1), [[GitHub Copilot]] (1), [[DALL-E]] (1)
> **Analogies:** for example (2), picture (2)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** gpt (2)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Chat Completion Models

[↑ Back to Table of Contents](#table-of-contents)

#### [How do GPT models work?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=0)** - [Instructor] Let us start with our first model type, GPT models.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=4)** Now, since this is our first and also the most important model, let us have a look and understand how these models work.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=11)** It's actually very easy to understand.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=14)** The models accept n numbers of [[Tokens]] n and return one token out.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=19)** Well, this would be easy if you understand what a token is, so what are they?
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=24)** In this example, the sentence is split into multiple words, and some words are split also.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=30)** When a [[Microsoft Word|word]] is very common, it might be only one token, but a less common word will be split in multiple tokens that are used more often.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=38)** Each token will be represented by a number.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=41)** This makes it easier to do calculations.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=44)** So a token is a word or a part of a word.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=48)** But it's a little bit more complicated than this, because what I'm not showing you is that it actually returns a [[Probability]] list with all different tokens that could be the output token.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=59)** The algorithm then will choose which one fits the best based on the parameters that you can define.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=66)** But you might say now, "This does not make sense.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=69)** When I use Bing Chat or [[ChatGPT]], for example, it returns me whole sentences or paragraphs."
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=76)** Exactly, and that is because the model works in an iterative way.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=80)** The model executes the algorithm and adds one token.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=84)** Then it adds the generated token to the input.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=87)** And generates again, and again, and again, and again.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=90)** It'll keep on doing this until certain parameters are satisfied.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=95)** Language models are not new, and they still work the same way as then, they only got better.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=101)** The first one were hidden Markov models.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=104)** They also worked with n token in and one token out.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=108)** The only issue was that this model only looked at the last token to generate the next one.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=114)** So you can imagine the quality was not the best.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=117)** But it laid the foundation for the next steps in language processing with n-grams, [[Neural Networks]], and transformers that are now used in GPT models, which can take a lot of tokens to predict the next one.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=131)** Understanding how these models work also makes clear that although chatting with a chatbot built on top of GPT models might feel human-like and even shows emotion, it is pure mathematical.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=143)** These models do not understand emotion, they only will return a token that fits the list of input tokens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (5), [[Microsoft Word|Word]] (4), [[Probability]] (1), [[ChatGPT]] (1), [[Neural Networks]] (1)
> **Env Vars:** gpt (3)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What can GPT models do?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=0)** - [Instructor] Within the GPT Models, there are two functionalities that you could make use of.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=5)** And the first one we would like to discuss is completion.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=8)** Now, within the completion functionality, there are three different strategies that you could make use of.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=14)** To explain them well, we're going back to the [[Microsoft Azure|Azure]] OpenAI Studio.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=18)** I'm going to go through some demos.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=20)** So the first strategy is zero-shot, which means we given one single command and it will generate for me some results.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=32)** Now, sometimes, we want our results back in a specific structure, and therefore we need to give examples.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=40)** And if you give one example, well, then, it's called one-shot.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=44)** So in this case, I'm giving the example when a user says, "Order a pizza Margherita," returned with the command order pizza.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=53)** Now, I'm giving, as last part, "I want to cancel my order."
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=58)** And then it should generate for me an answer based on the single commands they gave and the top.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=65)** So in this case, it's returning for me cancel order.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=69)** Sometimes just giving one example doesn't really do the thing and we need to give multiple examples.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=74)** And that's the third strategy, which is called few-shot.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=80)** With few shots, we are giving it multiple examples.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=82)** So we have here example one, example two, and example three.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=88)** Now, let's add a second.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=90)** A last question.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=92)** I want to know the status of my pizza, and let's see what the GPT model returns.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=100)** check-status, which is quite a fine command that we could use in a later stack.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=105)** The second functionality is chat.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=108)** The idea of chat and completion is somehow the same.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=111)** The only difference is that you'll keep responding on the content that has been generated and the input that you have given.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=118)** It understands context of the conversation.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=121)** So again, let's go back to the portal and see how that looks like.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=126)** So we're here now in the portal.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=128)** I'm going to close some items and we have our chat window here.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=132)** Now, imagine I want to ask the chatbots to create for me a recipe to have a simple cake.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=138)** So that's what I'm going to do.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=141)** "Give me a recipe for a simple cake."
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=148)** And there it is, it's generating it right now for me.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=151)** And it even says, "Enjoy your simple cake."
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=153)** Now, imagine I'm lactose intolerant and this recipe should be altered to it, so I can add that to the bot.
>
> **[2:42](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=162)** "I am lactose intolerant.
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=167)** Please update the recipe with correct ingredients."
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=180)** And there it is.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=181)** Now, this is exactly the same cake but altered with different ingredients.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=186)** And what is actually happening is that, of course, we asked here for our first commands, then the bot gives back, or the GPT Model gives back the recipe.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=199)** But then I'm asking another question on top of it, and then it creates me a new recipe based on those dairy-free cake.
>
> **[3:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=207)** Now, I can go further in it and ask, for example, "How long should the cake bake?"
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=217)** And it gives me an answer.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=218)** So it looks into what has been said in the past to give you an answer.
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=224)** Of course, the moment I clear the chat and I ask, "How long should a cake bake?"
>
> **[3:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=234)** then it doesn't know that information anymore.
>
> **[3:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=237)** I need to go on, so that might be a good idea when you're building an application that you're actually going a little bit more in depth to be able to define and keep track of all the messages, for example, your user has been saying.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **Analogies:** imagine (2), for example (2)
> **Env Vars:** gpt (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Which model should I choose?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=0)** - [Instructor] You might have heard about [[ChatGPT]], [[GPT-4]], and so on.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=4)** Now, there's all these different types of models.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=7)** How do I know which one to choose?
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=9)** Well, if you've read a little bit about GPT, you might have learned about GPT-1, 2, 3, 4, and even others.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=17)** But that's not a problem if you haven't.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=19)** The numerical values are just showing iteration of the model, but there are quite some difference between them.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=25)** It started all in 2018, when the first original GPT model was released.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=31)** And in 2019, GPT-2 got released.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=34)** At that point of time, these models were not so known yet and it was mostly researched by OpenAI.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=41)** GPT-2 is a [[Deep Learning]] model with over 1.5 billion parameters.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=46)** This means that, for every list of [[Tokens]] you give to the model, 1.5 billion parameters are calculated to check what the best next token will be.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=56)** To be clear, these are hyperparameters that are automatically generated.
>
> **[1:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=61)** It's not a process of someone adding all these parameters manually.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=65)** But it shows the complexity of the models.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=68)** The more complex questions and the more data the model can answer, the more parameters the model will have.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=74)** GPT-2 had the issue that it could not answer well domain-specific questions.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=79)** Therefore, in 2020 already, GPT-3 was released.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=84)** This time, even more data was added and more complexity.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=88)** Therefore, GPT-3 went from 1.5 billion parameters to a stunning 175 billion.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=96)** GPT-3 understood context and domain-specific requests much better.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=101)** 2 and 3 were mostly focused on completion and not on chat, although there were some workarounds.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=108)** But after GPT-3, a specific version for chatting was released called GPT-3.5-Turbo, or mostly known for people as ChatGPT.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=117)** Released in November 2022, this took the world by storm.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=122)** The model, just like GPT-3, was trained on billions of documents that are available on the public web.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=128)** It could have deep conversations with humans and could even successfully do the Bar Exam.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=133)** It was also the first model that was really opened up to the public via the Chat app on the OpenAI website.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=140)** And now we arrive at the latest model, GPT-4, released in March 2023.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=146)** Although officially not given, some sources says it has over one trillion parameters.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=152)** But its complexity is also shown in the capabilities.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=156)** GPT-4 can not only handle text, but also images, and will answer even more human-like.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=163)** If you have a quick look to the overview of the amount of parameters that each model has, we really see a big difference between GPT-1, which is on this graph not even visible anymore, and GPT-4.
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=177)** These numbers only show the capabilities and the power that these kinds of models have.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=184)** Now that we have an overview, how do I choose which one to use?
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=188)** Well, it's quite easy.
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=189)** You want the highest accuracy, choose GPT-4.
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=192)** Although there is one big other parameter that makes you choose the correct model, every model has a limit of number of tokens that it can handle.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=201)** So for example, how big the text document is that you want to summarize.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=205)** Another reason to choose one above the other is also the cost.
>
> **[3:29](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=209)** You can understand that the latest models are heavier and more complex, so need more compute power to calculate the tokens.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=216)** So always check if a cheaper model, so older model and less complex one, can handle the request that you want to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (5), [[Tokens]] (3), [[ChatGPT]] (2), [[Deep Learning]] (1)
> **Env Vars:** gpt (18)
> **Versions:** 1.5 (3), 3.5 (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** just like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [The important role of prompt engineering](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=0)** - [Instructor] Engineering the prompt is a crucial aspect of utilizing language models like GPT.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=6)** Its significance has grown to such an extent that individuals are now adopting the job title of prompt engineer.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=13)** But what exactly does this entail?
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=16)** The following definition generated by a language model provides a concise explanation.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=22)** "[[Prompt Engineering]] refers to the process of designing and refining prompts or instructions given to a language model.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=30)** It involves formulating clear and specific instructions to the elicit the desired responses from the model."
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=37)** Now to delve into the matter further, let's visit the [[Microsoft Azure|Azure]] OpenAI studio and explore the process of enhancing prompts.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=45)** In the OpenAI studio we go into the playground section and choose for completion.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=52)** First of all, make sure in your deployments that you've chosen a completion model.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=57)** So we use the completion that we've created in a previous video.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=62)** I'll start from one of the examples.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=65)** I will choose summarize an article abstractive.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=69)** Now we have here a prompt provide a summary of the text below that capture its main idea.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=75)** This is quite already a very simple prompt.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=77)** And then below it we have a small article.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=81)** Now if we click on the generate button, it'll generate for us a summary of this small text.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=87)** Of course, this can work on larger documents too.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=91)** This already shows one of the functionalities of a large language model like GPT, which is summarization.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=98)** And here we go.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=99)** And in the green part, we have a little summary of what has been discussed in this article and we want to go a little bit further in prompt engineering.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=110)** And instead of saying we want to have a summary, we actually want four highlights.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=115)** So let's change the prompt here and say, extract four key highlights about this article.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=127)** And we can just say generate.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=130)** Give it some time.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=132)** And there we go.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=133)** We have four nice highlights that we can easily read without going over the whole document.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=140)** But imagine now you are writing a nice blog post with a large article.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=145)** Well, this is already a nice feature to say, okay, I want to add those four key highlights on the top of my article so people know immediately what it's about.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=156)** But what I would like to do more is using those four highlights and actually create social media posts.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=163)** So let's alter our prompt a little bit.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=166)** So we'll say extract four key highlights about this article and generate an engaging social media post.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=176)** for each highlight.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=181)** We're going to remove the answer we had received.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=186)** And what we're going to do is on the site we see parameters and one of them is the max length of [[Tokens]].
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=193)** Now 250 tokens is not that much.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=195)** So we're going to increase this a little bit.
>
> **[3:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=198)** Let's say we're going to increase it to 900.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=201)** So the model has enough capacity to generate more tokens.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=206)** So this 900 is a total that we can get the prompt plus the answer.
>
> **[3:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=212)** So let's click generate and see what kind of answer we will get.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=217)** Okay, so now we have four different highlights.
>
> **[3:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=221)** Plus for each highlight also a social media post that we can use to market our blog posts for example.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=230)** This is easy, but imagine we want to automate this with some application.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=236)** Then we just have text here.
>
> **[3:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=238)** What we would prefer is actually a structured information set.
>
> **[4:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=243)** So let's say we want to get this in a specific [[JSON]] format.
>
> **[4:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=248)** We're going to say add to the prompt, respond in following.
>
> **[4:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=252)** Or we'll just say the respond in a JSON format.
>
> **[4:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=257)** We're going to remove again these details and we're going to click the generate button.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=264)** And there we go.
>
> **[4:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=266)** We have a JSON response that we can use within our application.
>
> **[4:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=271)** But notice now that social media posts this field, it has spaces inside.
>
> **[4:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=278)** And our tool might not be able to handle this, we actually want this just to be called post.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=284)** Now what we have here is zero shots.
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=287)** So we're just going to give an example so we can make it a single shot.
>
> **[4:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=293)** So we're going to say respond in following JSON format,\.
>
> **[5:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=300)** And we're just going to type out the format that we want.
>
> **[5:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=305)** I first going to remove this also, and we are going to say highlight, just empty fields and then post
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=323)** and we can generate it again.
>
> **[5:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=326)** And that's it.
>
> **[5:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=327)** Now we have our JSON file, or at least the content that has been generated by the completion model.
>
> **[5:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=334)** And we can use it within our application.
>
> **[5:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=337)** So if we call the Azure completion API endpoint, we given as prompt this part, and then the content that we want to make use, we will get this as a response back from the endpoint.
>
> **[5:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=350)** And this somehow explains what prompt engineering is.
>
> **[5:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=354)** It's redefining what exactly you are telling the GPT model to get a specific response back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Prompt Engineering]] (3), [[Tokens]] (3), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** json (5), gpt (3), api (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), refers to (1)
> **Analogies:** imagine (2), for example (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 3. Embedding Models

[↑ Back to Table of Contents](#table-of-contents)

#### [What are embeddings?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=0)** - [Instructor] What are embeddings?
>
> **[0:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=2)** Embeddings are the numerical representation of words, sentences, or other textual elements.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=9)** They capture the semantic meaning and the relationship between different elements in a dimensional space.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=15)** Well, that's quite a difficult explanation, right?
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=18)** But let's look into what the problem is.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=22)** The biggest problem is that computers don't understand the meaning of text.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=28)** That means when you want to try machine learning models based on text, you somehow need to convert them into numbers, 'cause again, computers do not understand text.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=37)** They don't understand the meaning of text, to be more specific.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=42)** So just sending text to a machine learning algorithm or a computer will not do it.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=48)** So what we do need to do is convert the text into numbers.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=53)** And once that is done, we can send it to our computer or to our machine learning algorithm.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=59)** And that is actually what embedding models do.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=62)** They will convert the text into a vector of numbers, but it's a bit more than just numbers, it's relationships.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=70)** 'Cause if you think about the relationship between the [[Microsoft Word|word]] cow and the word bull, we will know that they are quite similar and that these words belong to each other.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=80)** But if you think about the relationship of the words cow and chicken, although they're both animals, the distance between those numbers that needs to be generated will be farther away from each other than between a bull and a cow.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=94)** So these models do not just convert text into numbers.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=98)** The numbers actually mean something.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=100)** The models know the relationship between words when they belong to each other or don't belong at all together.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=107)** These models have been trained on top of textual data of many different kinds of sources.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=113)** That way it learns the relationship between words and sentences.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=117)** Because of data, that's possible to figure out what documents are similar or we can use this to search through documents based on natural language.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=127)** So to repeat myself, embedding models convert your text into a vector of numbers, but those numbers contain semantic meaning of your sentences.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=137)** It's the only way how a computer can understand what text actually means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Speakers:** - [instructor] (1)

#### [Model capabilities](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=0)** - [Instructor] Now that we understand what embeddings are, let's talk about what we can do with them.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=7)** First, a little recap.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=9)** An embedding model will convert words or sentences into a vector of numbers because computers cannot do any calculations on text, but it can on numbers.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=20)** So what kind of calculations can we do with those numbers?
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=24)** But let's make life a little bit easier.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=26)** To make it more visual, we're going to simplify our vector from more than a thousand values to only two.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=33)** 'Cause when we have only two values, we can easily visualize them in a chart.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=38)** So for now, every embedding, purely theoretically, and in this presentation contains two numbers.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=46)** Now, if we calculate for multiple sentences or documents or embeddings via the embedding models, we can visualize those documents on a chart.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=55)** Now, if I would need to do this for a thousand of dimensions, while that would not be possible to visualize.
>
> **[1:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=61)** The furthest we can go is three dimensions.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=65)** What do you notice from this chart is that the distance between sentence three and sentence two is much bigger compared to sentence two and sentence one.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=75)** This means that sentence one and sentence two are more similar than sentence three and sentence two.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=81)** Now, this is easily done visually if you only have two values, but embeddings, of course, they have more than a thousands, and that would make it way harder for a human to calculate which sentence is closer to the other document.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=96)** Now there's a mathematical solution for this, which is called cosine similarity.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=100)** This is a function that can be used for an example [[Python (Programming Language)|Python]] that calculates the distance between different embeddings and gives you back a quantitative estimate of the similarity between documents or sentences based on their embeddings.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=115)** Where in the past people were looking into [[Microsoft Word|word]] counts to calculate similarity word count as heavily related to the size of the document.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=123)** If you make use of embeddings, each document will have the same amount of values.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=128)** So if a document or sentence is short or long, it'll not have an impact on the similarity with other documents.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=137)** This brings us to the first functionality of embeddings and that similarity.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=141)** By making use of the embeddings, we can get back a list of articles that are similar to what, for example, a customer is reading.
>
> **[2:29](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=149)** The second functionality is search, and this can be done as well on text as on code.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=154)** And the idea is exactly the same as we had an similarity.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=159)** We need to convert the search term into an embedding, and then we will calculate the cosine similarity between our search term and the knowledge base of articles that we want to look into.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=172)** Based on the quantitative estimate that is returned for each article, we can order them and give the top 10 results back.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=180)** A third one is clustering documents.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=183)** Again, we're looking here into an example where a vector only exists out of two fields, but with [[Algorithms]] like K-means we can find clusters of similar documents.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=194)** Each cluster will have a centroid, which is its middle point, and will figure out what document is the closest to it.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=201)** Embeddings are very powerful.
>
> **[3:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=203)** They are the power behind NLP engines and without embeddings, search providers like Bing and [[Google]] would not work as well as they do right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Python (Programming Language)|Python]] (1), [[Algorithms]] (1), [[Google]] (1)
> **CLI Commands:** make (4), python (1), find (1)
> **Definitions:** means that (1), is called (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### [How to use embeddings for a semantic search](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=0)** - [Instructor] Let's go into an example of how to use embeddings for [[Semantic Search]].
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=5)** Instead of going to the [[Microsoft Azure|Azure]] OpenAI studio, we will go straight into some codes because embeddings is very technical.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=13)** So what you see here is a Jupyter Notebook.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=16)** This is a way of programming [[Python (Programming Language)|Python]] code in an interactive way.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=21)** So the first thing we'll need to do is import some libraries.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=24)** So we'll just quickly execute that, and then we need to set up the configuration of our OpenAI service.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=30)** You will notice that our API type is Azure because we're connecting to the Azure OpenAI services and we're not connecting to the OpenAI services, so that therefore Azure.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=41)** Then we need to configure our OpenAI key and our resource endpoint and the version.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=48)** Next step is that we're going to read some data.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=52)** So I have a CSV file that contains 2000 small news articles where we have a title, a description, also a label, but that last two columns are less important for now.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=66)** And then it's important to clean up this description so we don't have double spaces, double punctuations, and new lines and so on.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=74)** So we're also going to execute this on all the description fields that we have.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=81)** So now our column has been cleaned up.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=83)** Now let's go to execute embeddings on just one sentence and to see what we get out of it.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=90)** So let me execute this.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=93)** So just by calling the get embedding functionality, which is part of the OpenAI libraries, we get back immediately a vector in this case of 1024 different numeric values.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=109)** So although this is a very short sentence, we get 1024 fields back.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=116)** Now if I give in a longer sentence, in this case, the first field in the description column, PC world upcoming chip set will include built-in security feature for your PC.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=126)** We also get 1024 back.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=130)** You might notice here we have engine embedding ada.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=134)** Now within the Azure OpenAI studio, I actually deployed this ada embedding model, but there's more than just ada.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=144)** Let's go to the next cell and also execute this one where I'm only going to show you the length of what is returned.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=152)** Now we have Babbage, Curry and Da Vinci.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=155)** Now, Babbage returns a vector that contains 2048 fields, Curry 4,096 numeric values, and Da Vinci over 12,000.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=168)** Now this is also showing that this Da Vinci concert linked to another, for example, is way more advanced and the quality that we will get back will also be higher.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=180)** But of course, again, there's a price linked to that.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=184)** Now, each of these models also have some limitations of the number of [[Tokens]] that it can handle.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=190)** Now, most of them can handle over 2000 tokens, but how do you know how many tokens you actually have in your document?
>
> **[3:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=197)** Well, even for that, we have some functionality that we can make use of.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=202)** So we have, in this case, a tokenizee and which is called a tiktokenizer.
>
> **[3:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=207)** And we can say, okay, we want to use this kind of encoding.
>
> **[3:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=211)** And then we execute this specific, again, the same title field that we discussed on the top here about PC world.
>
> **[3:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=219)** And we will get return based on the length of the sampling coding of 17 tokens.
>
> **[3:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=225)** And you can even see how it's actually has been split up in different tokens.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=230)** Now this is step one.
>
> **[3:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=232)** Now we understand how to get the embeddings and we want to do this for everything.
>
> **[3:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=237)** So what I'm doing in this field, I'm filling up in the data frame, a new column embedding, and I'm calculating the embeddings for each description column and save it into this embedding column.
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=251)** Now you might see that I'm put it as two lines and comments because I've already done this for you and beforehand.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=260)** 'Cause each time we need to recalculate all these embeddings means we also need to send all that data each time to the OpenAI endpoint.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=269)** And of course there's a cost linked to it depending on the amount of tokens that you're consuming.
>
> **[4:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=274)** So I've done this one and I've saved this data frame with all the data into a pickle file.
>
> **[4:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=281)** So now I just need to read this file and I have all the data.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=285)** So now you'll notice I have my title, my description, the two columns that I don't need, and I have my embeddings.
>
> **[4:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=293)** So we can start searching through our document set.
>
> **[4:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=297)** Therefore, I created a small function, which is called search docs, where I'm giving in my data frame.
>
> **[5:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=304)** So this is this full data frame at all the embeddings and then my user query, or you could say the question that I'm going to ask, and then also the engine that we want to use.
>
> **[5:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=316)** Now, keep in mind that the engine will depend also on the engine that you've used to do the encoding.
>
> **[5:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=326)** If you use the Da Vinci encoding, while you'll also need to use the Da Vinci encoding and your similarity matching.
>
> **[5:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=334)** Then this next parameter is the how many results I want to get back.
>
> **[5:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=339)** So in this case, I've chosen three, and then we have if you want to show the display afterwards or not, the results.
>
> **[5:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=348)** Now what does this do?
>
> **[5:49](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=349)** It'll do a course and a similarity based on the user query that, as you will notice in the first step, will get embedded also.
>
> **[5:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=359)** So just a small string that we're sending, just going to execute it.
>
> **[6:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=364)** Nothing is going to get done. Here, we're calling it.
>
> **[6:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=368)** So who is Edgar Davids?
>
> **[6:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=369)** That's my user query, and that will be getting vectorized.
>
> **[6:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=374)** We're going to get some embeddings for it.
>
> **[6:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=377)** Then that embedding is used to do a constant similarity between embeddings that we've already calculated and then will return to me a value of how similar this embedding is linked to the embeddings that I have in my data frame.
>
> **[6:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=396)** As a result, I will sort the values based on the similarity and get the top three or top four in this case.
>
> **[6:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=407)** Now, when I do this, I have my question, "Who is Edgar Davids?"
>
> **[6:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=412)** I execute it.
>
> **[6:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=414)** I'm not going to get an answer, but I'm going to get four documents that fit the closest to what I requested.
>
> **[7:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=423)** And you already noticed here we have an article about Edgar Davids, and this is just one example of how we can use embeddings for semantic searching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (6), [[Microsoft Azure|Azure]] (5), [[Semantic Search]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** api (1), csv (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** we discussed (1)
> **Tools:** jupyter (1)


### 4. Image Generation Models

[↑ Back to Table of Contents](#table-of-contents)

#### [What are DALL·E models?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=0)** - [Instructor] [[DALL-E]] named after the artist, Salvador Dali, and the Disney character, Wall-E, generates unique and creative images from textual descriptions.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=10)** DALL-E models convert text commands into images.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=13)** These text commands are also called prompts.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=17)** The system has the ability to produce lifelike images based solely on a description of a scene.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=24)** DALL-E is an algorithm powered by a neural network designed to generate precise images based on concise phrases given by the user.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=33)** It understands language by interpreting textual descriptions utilizing a transformer-based neural network.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=40)** The system employs a form of machine learning that comprehends context and handle sequences to generate fateful visual representations corresponding to textual prompts.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=52)** DALL-E consistently undergoes training and dataset updates to enable the transformer accurate predictions of images based on text prompts.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=62)** DALL-E utilizes a large scale data set of images and corresponding text prompts during its training process.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=69)** The data set comprises a diverse range of images and associated textual descriptions to facilitate the algorithm's understanding and generation of images based on various prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (5)
> **Env Vars:** dall (5)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [How image generation models work](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=0)** - [Instructor] Converting text into images, it's not an easy process.
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=3)** So let's have a look at how it's actually done.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=7)** And we're going to start back to embeddings.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=9)** The first step that needs to be done is converting our prompt into a text embedding.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=15)** The second step is sending that text embedding to the prior, which is a process that will convert the text embedding into an image embedding.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=26)** And once we have the image embedding, we can send it to an image decoder, which will generate the image we requested.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=34)** Now the text embedding that is used is not the classic text embedding that also is available in the [[Microsoft Azure|Azure]] OpenAI service.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=42)** The one that is used is called CLIP, contrastive language image pre-training, which actually does the opposite of generating an image.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=53)** It describes the image.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=54)** Now CLIP is a clever AI model that can understand both images and text.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=60)** It is trained in two parts, an image part, and a text part.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=64)** In a training process, it learns to predict which images match with which text in a [[Big Data]] set.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=71)** After this training, CLIP becomes a special kind of classifier called a zero-shot classifier.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=78)** This means it can recognize and classify things it has never seen before.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=82)** How does it do this?
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=84)** Instead of having a specific class for each object or concept, it uses captions to describe them.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=91)** For example, instead of having a class for dog, it has a caption, like a photo of a dog.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=97)** When given an image, CLIP tries to find the best matching caption for that image.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=103)** It uses its training to estimate which caption describes the image most accurately.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=109)** In other words, it predicts the class of the caption that pairs well with the given image.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=114)** This way it can classify images into different categories without needing specific training for each individual class.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=123)** Now we also have our image encoder, and in this case it's a diffusion model.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=128)** The problem is that a classic diffusion model trained on a CAT dataset will constantly generate photorealistic images without being able to make any changes.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=140)** Now GLIDE augments the training process of diffusion model by adding textual embeddings and this results in textual [[Conditional Image Generation]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[Big Data]] (1), [[Conditional Image Generation]] (1)
> **Env Vars:** clip (4), cat (1), glide (1)
> **Definitions:** is a  (2), is called (1), in other words (1)
> **CLI Commands:** find (1), cat (1), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Examples of use cases](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=0)** - [Instructor] Let's have a look now at a couple of examples of how you can use [[DALL-E]].
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=4)** Now it's interesting to know also that Dall-E has two different functionalities.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=9)** The first one is image generation, where as the user, we're going to give it a prompt to generate a picture.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=17)** The second one is manipulation, where again, a user is going to give a prompt, but also a picture.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=23)** And based on the prompt, that picture will be manipulated with your request.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=28)** Now since the Dall-E 2 model is in a limited private preview on the [[Microsoft Azure|Azure]] OpenAI Services, we will not go to the Azure OpenAI studio, but to the Bing Create web application, which is a public available app that has been integrated with Dall-E and is freely available.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=46)** Once you're on the website, you can immediately start prompting to generate pictures.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=51)** Now I already prepared some creations for you.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=55)** So I will go to Creations where I can find my history.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=59)** So I started with the prompt, "A house in the middle of a coffee plantation," and we see we have quite some nice examples.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=67)** It always returns four different items.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=70)** Now let's fine-tune this picture a little bit.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=73)** I want to see the sun a bit in this picture.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=75)** So I changed my prompt, "With the sun shining on the deck," and immediately, we have a more brighter picture.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=83)** Now let's edit a little bit more and say instead of a coffee plantation, I want a banana plantation.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=90)** Immediately again, those small details changed the whole picture.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=95)** Now instead of just the sun shining on the deck, I would actually want the evening sun.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=100)** So we alter that again in the prompt, the evening sun, and we get a beautiful new picture.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=109)** Now let's add some people to it.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=111)** We're adding to it, "With a couple enjoying a glass of wine," and we see some people not always recognizable with their face, but it's noticeable that someone is sitting there and enjoying a drink.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=124)** Now we don't want to use this banana plantation anymore.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=127)** It doesn't really fit the theme that we are working on, so let's make it a rice field.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=134)** And again, we have a nice example.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=137)** Now let's update this a little bit more.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=140)** We don't want a photorealistic picture.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=142)** What do we want is some digital art.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=144)** So we're going to add digital art to our prompt, and now we have a full-blown picture that again, can be used for our social media, for printed press, for our blog posts, and we can fine-tune it to the needs just by prompting specifically what we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (4), [[Microsoft Azure|Azure]] (2)
> **Analogies:** picture (10)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Audio Models

[↑ Back to Table of Contents](#table-of-contents)

#### [What are audio models?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=0)** - [Narrator] Audio models are AI models that work with sound, especially speech.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=5)** In simple terms, an audio model can listen to audio or speak out audio.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=10)** For example, one kind of audio model takes spoken words and turns them into written text.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=16)** Another kind takes written text and turns it into spoken voice.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=21)** These technologies let us communicate with computers using our natural voice.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=27)** Think of voice assistants like Siri and Alexa.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=30)** They use audio models to understand what you say and to talk back.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=36)** Common use cases include transcribing meetings or phone calls into text.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=41)** Enabling hands-free control through voice commands, providing spoken feedback in apps and making content accessible, like reading out text for visual impaired users.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=53)** Audio models are also used for language translation, hearing speech in one language and outputting text in another.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=60)** And for interactive chat bots that you can talk to.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=65)** [[Microsoft Azure|Azure]] provides services that make it easy to use audio AI.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=69)** In Azure OpenAI service, there's a whisper model from OpenAI for speech to text.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=74)** Whisper can take an audio file and produce text transcripts.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=78)** It's very good at understanding many languages and even translating them to English.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=83)** For text to speech, Azure OpenAI offers the TTS models with prebuilt voices that can speak out text in many languages.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=92)** And next to that, we have the real time audio models.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=95)** The time between transcribing or generating audio is so fast and this combined with the power of a large language model, it can feel like you're talking to a human.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3)
> **CLI Commands:** make (1)
> **Env Vars:** tts (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Converting speech to text](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=0)** - [Instructor] Converting speech to text is great for transcribing meetings, audio notes, phone calls, and so on.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=7)** So let's have a look how we can implement this in our application.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=11)** Before we go on, we will start going initially to our model catalog where we will filter the interference tasks and we'll look for [[Speech Recognition]].
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=22)** And you'll notice at the moment there's only one model that does that.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=26)** So we click on it and then we'll choose to deploy it.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=33)** We give our deployment a specific name, and then we say Create resource and deploy.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=40)** Once that is done, you will find it that it's back available in your deployments here, and you'll see here Whisper.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=47)** If you click on it, what is the most important part is our target, which is actually only this part, the link to our OpenAI resource and the key.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=59)** So now let's go into Visual Studio Code and see how we can actually run this service.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=65)** Now we need to OpenAI library, so in your Jupyter Notebook you can install it.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=70)** And then we need to set up the client.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=73)** Notice we have our API key here, and we have our endpoint and of course a particular version.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=79)** Now next to that, we have our deployment ID, which is the name of the model that you have set up.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=87)** And then we need to define where our audio file is.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=90)** So I have a little recording from Wikipedia, and then we can immediately make use of the client where we want to make use of the audio functionality.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=99)** We want to do transcription, and then we create the transcription.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=103)** So we send off the binary data of the audio file and we say, okay, this is the model that you need to make use of, this is Whisper.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=113)** And then we can just execute it.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=117)** And after a couple of seconds, we will immediately get the response back from this audio file.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=123)** So here we got the transcription class with the text that has been transcribed.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=131)** So if you would like to know, this took nine seconds.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=135)** The audio file itself is actually almost a minute, so it's very fast.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=140)** It's faster than a human.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Speech Recognition]] (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** set up (2), install (1)
> **Tools:** visual studio (1), jupyter (1)
> **UI Navigation:** click on (2)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Converting text to speech](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=0)** - [Instructor] Converting text to speech is perfect, for example, to create audio books, or to add accessibility to your website.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=7)** Imagine a read this block article button, and so many more functionalities.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=13)** So let's dive in and see how we can do this in code.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=17)** But first of all, we need to go back to our [[Azure AI Foundry]] because we need to deploy our text to speech model.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=25)** So in the inference task, we filter on audio generation, and you will notice we have a couple of models.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=33)** We have audio generation, but we have as well, text to speech.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=37)** Now in this time we're going to make use of text to speech.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=41)** We click TTS, we click the deploy button, we give the name, we click resource and deploy, and then after a couple of seconds, it will be available in your deployments.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=55)** So we will see here TTS.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=56)** Same here, we click our model.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=60)** We need our target URI.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=63)** We actually need only this part, and we need our key.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=68)** So copy those ones on your side, and then we go straightforward into Visual Studio Code where we fill in our API key because we need to create our [[Microsoft Azure|Azure]] OpenAI client.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=80)** We set our endpoint, we define the deployment, which was TTS.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=87)** Then we do our client.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=89)** We want an audio client that generates speech.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=93)** We define the model, and then we can choose of different voices, and that's depending on the model that you're using.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=101)** So with TTS, we have Nova, Shimmer, Echo, Onyx, Fable, and Alloy.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=106)** So let's start with Onyx, and the input is the text that we want to get converted into speech, and then also the response format.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=115)** So you can generate an MP3 flag WAV, but also just a stream of data.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=122)** And then we're just creating here a [[Python (Programming Language)|Python]] display to be able to visualize or listen to the audio.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=130)** So when I execute this...
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=135)** - [Onyx] Today is a wonderful day to build something amazing.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=138)** - [Instructor] So we got the text to speech transcription.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=143)** So I can easily change this to another voice, run it again.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=152)** - [AI Speaker] Today is a wonderful day to build something amazing.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=155)** - [Instructor] So now we have a more feminine voice.
>
> **[2:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=158)** So as you see, very easy and easy to implement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Azure AI Foundry]] (1), [[Microsoft Azure|Azure]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** tts (4), uri (1), api (1), mp3 (1), wav (1)
> **Speakers:** - [instructor] (3), - [onyx] (1), - [ai (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), imagine (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)

#### [Audio chat with a chat model](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=0)** - [Instructor] And last but not least, we have the [[Real-Time]] audio models.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=4)** These powerful models combine the power of chat models with text-to-speech and speech-to-text.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=10)** They're so blazing fast in transcribing and generating audio that it could feel like you're talking to a human.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=18)** So let's go back to the [[Azure AI Foundry]] and see how we can make use of them.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=23)** In the AI Foundry, we go back to our model catalog, we click on Inference Tasks and choose for the option Audio Generation.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=30)** And there we need to make use of the real-time models.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=34)** So we click on it, we click on Deploy, and we go through the steps like model version and as well the location where you want to send the data to.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=43)** Now I've already created one, we go back to our deployments and we have it here.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=51)** We have our endpoint and we have our key.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=53)** Now, instead of going into codes, I want to share with you an repository on [[GitHub]], because this audio real-time is very complex.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=64)** Now, if you look at the schematic of this repository of how things work, the first thing is, is that as a user, you need to create a connection to the [[Microsoft Azure|Azure]] OpenAI service because you are sending constant audio information towards that service.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=82)** And then the other way around, it will constantly also send you audio back.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=87)** So you're making use of web sockets to be able to make this constant communication between the two parties.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=94)** So creating this in a little [[Python (Programming Language)|Python]] script is not that easy, therefore, I want to share with you this repository where you can find the link here on the screen as well.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=105)** But what we can do is if we go back to our AI foundry, we go to our real-time audio, we have here our deployments.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=117)** So we have our mini real-time preview, we can choose a voice, let's say Coral, and we can start talking with the correct microphone on.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=130)** And now [[ChatGPT]] or how you want to call him, actually answers to the questions like, what's the capital of France?
>
> **[2:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=139)** - [AI Assistant] It sounds like you're asking about the different ways to say friend in various languages.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=144)** Here are a few examples.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=145)** Spanish, amigo for a male friend, amiga for a female friend.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=150)** - [Instructor] Well, great. Thank you very much.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=151)** I also like that I can interrupt you as a real person.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=156)** - [AI Assistant] I'm glad to hear that.
>
> **[2:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=157)** I'm here to chat and answer your questions whenever you need.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=160)** If there's anything else you'd like to know or discuss, just let me know.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=164)** - [Instructor] Well, just give me one thing, why people should look into real-time audio and be talking to you?
>
> **[2:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=171)** - [AI Assistant] Real-time audio communication can be incredibly valuable because it allows for immediate interactive conversations.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=178)** This can help to clarify misunderstandings quickly, build stronger connections, and make communication more dynamic and engaging.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=186)** Whether for personal conversations or professional collaborations, real-time audio enables a fluid exchange of ideas and emotions.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=194)** - [Instructor] Well, thank you very much for that explanation, and that is also the end of this demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (8), [[Azure AI Foundry]] (1), [[GitHub]] (1), [[Microsoft Azure|Azure]] (1), [[Python (Programming Language)|Python]] (1)
> **Speakers:** - [instructor] (4), - [ai (3)
> **CLI Commands:** make (4), python (1), find (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** click on (3), go to (1)
> **Tools:** github (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Be careful](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=0)** - [Instructor] If you look to the legal side of these [[Large Language Models (LLM)|large language models]], there's actually two questions that we need to ask.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=7)** The first one is, is it okay that companies make use of public data to train these large language models?
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=14)** And the second one, who owns the rights on these newly generated text or images?
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=19)** So let's go a little bit more in depth.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=22)** Language models like [[ChatGPT]] are typically trained on large amounts of publicly available text from sources such as news websites, blogs, books, and other internet sources.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=34)** However, it is important to note that while large language models can generate text that may resemble sentences from these sources, they do not have direct access to the specific copyrighted works themself.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=47)** During the training process, the models are trained on statistical patterns and structures present in the data, rather than on specific sentences or phrases.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=57)** They learn to generate texts that are similar in style and content to what they have seen during training.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=63)** While large language models strive to be creative and generate novel responses, there can be instances where they produce outputs that closely resemble specific sentences from copyrighted sources.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=76)** This is because the models are trained on diverse text samples and are exposed to a wide range of language patterns.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=83)** It's also worth noting that responsible use of language models like ChatGPT includes respecting copyright laws and not using them to infringe upon intellectual property rights.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=96)** OpenAI, the organization behind ChatGPT, encourage users to be mindful of ethical guidelines and legal considerations when utilizing these models.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=106)** But what about the ownership of the generated data?
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=110)** The ownership of copyrights for [[Generative AI]] content can be a complex issue and may vary depending on several factors, including jurisdiction and the specific circumstances surrounding the creation and use of the content.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=126)** In general, the question of ownership is determined by existing copyright laws and agreements.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=132)** Typically, the original creator or author of a work is considered the owner of the copyright.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=138)** However, when it comes to generative AI content, the situation becomes more nuanced.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=145)** In some cases, the ownership of the copyright may be attributed to the human who created or trained the AI model, while in other instances, it might be attributed to the organization or entity that developed the AI technology or provided the infrastructure for training the model.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=163)** Additionally, legal frameworks and policies can differ across jurisdiction.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=168)** Some countries may have specific regulation addressing the ownership and attribution of AI-generated content, while others may rely on existing copyright laws to determine ownership.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=180)** It is important to consult legal experts and consider applicable laws and agreements to determine the specific ownership rights for generative AI content in a given context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (4), [[ChatGPT]] (3), [[Generative AI]] (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [More ideas](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=0)** - [Instructor] In this course, we discussed the four main OpenAI model types that [[Microsoft]] offers on the [[Microsoft Azure|Azure]] platform.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=7)** We've discussed already quite some use cases, but let's go over just a couple of more before we end this training.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=14)** [[Generative AI]] can be very useful in the music industry.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=18)** Have you ever tried to ask [[ChatGPT]] to write lyrics?
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=22)** You can even ask to write lyrics in a particular style.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=25)** Now, imagine you can combine that with other models that can generate tunes.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=30)** Well, at that moment we are creating music.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=33)** There are even competitions going on where people submit their AI-generated songs and you can vote for it, and that music is not that bad.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=42)** If you want to have a look, go visit [aisongcontest.com](https://aisongcontest.com).
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=48)** If you go to the website and you click All Participants, you'll already see a bunch of songs that you can try out.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=55)** Some are fully created by AI and others are a mix of human and AI collaborating together.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=63)** But do try it out.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=65)** But what about your marketing automation?
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=67)** We could use the GPT models to generate IDs for social media posts, but with, for example, [[DALL-E]], we can ask it to generate also images linked to our posts.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=78)** Or maybe we can even use these models to replace pictures we normally buy from marketplaces.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=84)** But what about even printed advertisement?
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=87)** Have you heard about the AI issue of "Cosmopolitan"?
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=90)** It was released a few months ago and made history as the first printed magazine to feature a cover designed by [[Artificial Intelligence (AI)|artificial intelligence]].
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=99)** Now, after exploring the various possibilities that exist, it's understandable that you may desire to delve even deeper.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=107)** The course you just completed served as an introduction, but subsequent courses will provide a more comprehensive understanding of utilizing libraries and integrating them into your own applications or creating new ones.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=121)** The AI revolution is progressing rapidly, so it's crucial to continue learning and not limit your progress to this point.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=128)** Stay engaged and keep expanding your knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[Generative AI]] (1), [[ChatGPT]] (1), [[DALL-E]] (1)
> **Analogies:** imagine (1), for example (1)
> **URLs:** [aisongcontest.com](https://aisongcontest.com) (1)
> **Env Vars:** gpt (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Sammy Deprez]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/azure-openai-generative-ai-models-and-how-to-use-them-5988057)

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Microsoft Azure

## Path Context

### In [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]
← [[Azure AI for Developers- Using the Azure AI Model Catalog]] | **4 of 8** | [[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI]] →

## Appears In

- [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]

## Related Courses

_Courses sharing skills:_

- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)