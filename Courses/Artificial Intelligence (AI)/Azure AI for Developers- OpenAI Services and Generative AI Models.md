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
  - '[Build AI Products Using Azure AI Services in Your Development Lifecycle](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Build%20AI%20Products%20Using%20Azure%20AI%20Services%20in%20Your%20Development%20Lifecycle.md)'
prev_courses:
  - '[Azure AI for Developers- Using the Azure AI Model Catalog](Azure%20AI%20for%20Developers-%20Using%20the%20Azure%20AI%20Model%20Catalog.md)'
next_courses:
  - '[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI](Azure%20for%20Developers-%20Retrieval-Augmented%20Generation%20(RAG)%20with%20Azure%20AI.md)'
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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/unlocking-ai-potential-with-azure-open-ai-services?u=76281980&t=0)** - [Sammy] Welcome, future innovators. Are you ready to embark on an exciting journey into the world of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI services? Great, because this online course is exactly what you've been waiting for. Imagine a world where machines can understand, reason and even converse with humans. A world where [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) transcend limits and drives innovation to new heights. Well, that world is within your reach. And Azure OpenAI services are here to help you build intelligent tools. Together we'll unlock the potential of AI and empower ourselves to make a real impact. Hey, I'm Sammy Deprez your guide throughout this learning experience. Enroll now and let's get started on this incredible learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [sammy] (1)

#### [What you should know](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-you-should-know?u=76281980&t=0)** - [Instructor[ Welcome future innovators. Are you ready to embark on an exciting journey into the world of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI services? Great, because this online course is exactly what you've been waiting for. Imagine a world where machines can understand, reason, and even converse with humans. A world where [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) transcends limits and drives innovation to new heights. Well, that world is within your reach, and Azure OpenAI services are here to help you build intelligent tools. Together we'll unlock the potential of AI and empower ourselves to make a real impact. Hey, I'm Sammy Deprez, your guide throughout this learning experience. Enroll now and let's get started on this incredible learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor (1)


### 1. Introduction to Azure OpenAI Service

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Azure OpenAI Service?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-is-azure-openai-services?u=76281980&t=0)** - [Instructor] What is [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI? To answer this, we need to understand what OpenAI is. OpenAI is an American [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) research laboratory founded in 2015 consisting of the non-profit OpenAI Incorporated, and its for-profit subsidiary corporation. OpenAI Limited Partnership. OpenAI conducts AI research with a declared intention of promoting and developing a friendly AI. They developed [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) or LLMs like GPT, [DALL-E](../../Skills/Software%20Development/DALL-E.md) and Whisper. Since [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) made a massive investment in the research center, they can offer these services on their own cloud platform, Azure. So Azure OpenAI is the models that OpenAI developed, but on the Azure platform and that are available via [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs and SDKs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** gpt (1), dall (1), rest (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Azure OpenAI vs. OpenAI Service](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=0)** - [Instructor] So what is the difference between [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI Services and the, let's call it, original OpenAI services? Therefore, we need to go to the beginning. So the OpenAI models are also available via their own API endpoints. Now, because of the investments [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) made in the OpenAI organization, they are allowed to make those models also available on their own cloud platform, Azure. Now Microsoft works most of the time with enterprise organizations, which means they had to bring these models to a next level, and that's what they did by creating Azure OpenAI. So Azure OpenAI is the OpenAI models, but with an enterprise layer on top of it. Now that enterprise layer exists out of three main topics. The first one is [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md). One part of that is content filtering. So [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), for example, will not respond to just anything you are asking it. The second one is security. Now, as I said, those API models are available via API endpoints, which means normally anyone can just connect to those API endpoints as long as you have a key. Now, by creating private endpoints, for example, on the Azure platform, you're making sure that that is not even possible. It's only within the same network that that is possible. Now, part of security is also [Privacy](../../Skills/Data%20Science/Privacy.md). Microsoft is promising that the data that you are sending
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-openai-vs-openai-services?u=76281980&t=96)** to the OpenAI endpoints is not going to be reused to retrain models or that they're also not looking into it. Now the third one, with regional availability, Microsoft is offering the possibility to deploy the OpenAI models in the region of their choice, which means that data does not need to be sent to the United States, but can stay, for example, within Europe. Due to legislation of certain industries, it would not have been possible to make use of the OpenAI models in the USA.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (4), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** api (4), usa (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Deploying Azure OpenAI Service](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=0)** - [Instructor] Now that you have a basic understanding of what [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI is, it's time to create the Azure OpenAI service so we can actually try out some things. To do that, let's go into the Azure portal and start creating our resource. So the page you see right now is an empty resource group and we have two options. We can click here on Create, and immediately start creating our resource. Or we can even just start typing here, OpenAI and go this way as well. So we're just going to do it the way of the Create button. We click Create. We go into the marketplace where we're going to type OpenAI, we find here back Azure OpenAI. We click the Create button, click Azure OpenAI. We choose our subscription. So this is where all the billing is sent to. We choose a resource group, so I had already created one. We choose a region. I'll choose Sweden in my case. And we gave it the name. So I'll call it OAI [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Course Demo. And then the pricing tier, which there's only one, we click Standard SO. Now we accept the policy, the content review policy. So we click Next. And then we have the feature of networking if we want a service, since it's an API endpoint to be accessible over the internet, only available for specific networks or fully block off
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/deploying-azure-openai-service?u=76281980&t=93)** and only within your private endpoints. This is a totally different course to follow how to set up these kind of networks. But for now, we will just choose the all networks. We can add some text, and then we go into the Review Plus Submit section. So we give this a couple of seconds to run a final validation. That is double-checking if the name has not been used and so on. I will click the Create button. So this will take a couple of seconds to a minute, and once that is done, your Azure OpenAI resource has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** oai (1), api (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Azure AI Foundry: Quick tour](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=0)** - [Instructor] Now that you have created the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI resource on your Azure subscription, it's time to have a quick tour of the Azure OpenAI Studio or the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md). You can access the Azure AI Foundry for Azure OpenAI via the following link on your screen, oai.[azure.com](https://azure.com). So, let's go to the Studio and see what are all the different things that we can do there. Now, in the Azure AI Foundry for Azure Open AI Services, we see a lot of different items here on the left. We have our Model Catalog. We have our Chat where we can actually start talking to different kinds of models. We can start building Assistants. We can make use of [Real-Time](../../Skills/Database%20Management/Real-Time.md) audio, we can generate Images, we can even Fine tune models, we can do Evaluation. We can even Store completions. We can send off Batch jobs of generational jobs. We can get some Metrics. And of course, we have an overview of the deployed models because there's more than just GPT-3.5. There's Whisper, there's GPT 4.0, 0.3 Mini, and so many more. We can also define the Quota, which is saying how much [Tokens](../../Skills/Web%20Development/Tokens.md) you can consume. And of course, also content Safety. We can store Data that we can use to answer questions based on your own information, and the same as goes for the Vector stores.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-quick-tour?u=76281980&t=95)** Now, two very important things here that we might need later on is of course, our endpoint and one of the keys so we can make use of the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) SDK or the C# SDK to be able to connect to these services. So this is just a quick intro. We'll go a little bit deeper in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (3), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-model-catalog?u=76281980&t=0)** - [Lecturer] One of the great features of the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) is the model catalog. Now, why is that? Well, OpenAI creates new models on quite a fast pace, and therefore it's not always easy to figure out which model do I need or which ones are available. But if we go to our AI Foundry and we click on the model catalog, we have a beautiful overview first of all the new announcements, and on the bottom, we see all the models that are available right now. So at the moment, there are already 27 models available. Now, this model catalog makes it actually even more easier for you because based on the kind of task that you want to do, you can easily filter them out. So let's say we want to do embeddings. Well, then we see there are three different models available. Now let's clear this filter out, and let's say we are looking for a model that we want to fine-tune. Well, let's say we want to fine-tune chat completion models, and then we also get these options. Now next to this filtering, we can also just click on a model and get more details about it. So when we click on one, we actually get the model cards. Now the model cards will give us a short explanation of what the model specifically is and what it can do, what the key capabilities are, and the features, what other variance there are, and what the limitations are. So this gives you already a good insight as well selecting the correct model for the solution that you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1)
> **UI Navigation:** click on (3), go to (1)
> **Speakers:** - [lecturer] (1)

#### [Azure AI Foundry: Playground](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=0)** - [Instructor] Another great feature of the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) is the playground. In the playground, we can try out all the different kinds of models and just figure out how they work. So let's go back to the AI Foundry and go into our playgrounds. Now we see a couple of different playgrounds, and let's start with chat. Now, in the chat, we can select a model that we want to make use of, and we can just start chatting with the model. And immediately, we get a response. So without writing any code, we can just switch between models and start talking to it. Now there's as well the assistance and also the realtime audio. Well, the realtime audio, let's give a quick demo about this as well. Hey, [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), how are you doing today?
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=51)** - [ChatGPT] I'm doing great. Thanks for asking. How about you?
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=54)** - [Instructor] I'm doing quite well. I'm just showing people the playground of the Azure AI Foundry.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=60)** - [ChatGPT] That sounds really exciting. The Azure AI Foundry playground is a great way to explore and get hands-on experience with different AI capabilities. Are you showing them how it all works or are you diving into specific features?
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/azure-ai-foundry-playground?u=76281980&t=72)** - [Instructor] Just do a general overview, thank you. Now again, I didn't write any code and I could immediately make use of this, another feature as well as the images where I have deployed another model and we can just describe what we want to see on the picture. A cute beer cooking in the forest. Just give this a couple of seconds and we will get a nice image that we can use in our marketing campaign, for example. And there we go. You have a cute beer that is cooking in the forest. Now, as I said before, the playground really helps you to try out different models and figure out what the capabilities are before you're even going into codes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (3), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (3)
> **Speakers:** - [instructor] (3), - [chatgpt] (2)
> **CLI Commands:** make (2)
> **Analogies:** picture (1), for example (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [What kind of models are available?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=0)** - [Instructor] [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) offers multiple OpenAI models. Let's have a quick look which ones there are and what they are for. The GPT models are used for text generation. You have the chat functionality which keeps track of the context of the whole conversation, and we have the completion functionality, which can handle advanced commands to generate text. The second model type is embedding models. Embedding models will convert text into a vector of numbers. That way we can search, find similar, cluster or classify documents. The Codex models could be compared to the GPT models, but with the biggest difference is that it will not return text, but will return parts of code. For example, in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or C#. For example, we have [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) who will assist software developers to write code more efficiently. So, in this example on the screen, a software developer might add a command in his code saying, "I need a function that checks if a string is an email address." At that moment, the Codex model will return the function and the language the software developer is writing at that moment. And last but not least, is the [DALL-E](../../Skills/Software%20Development/DALL-E.md) models. These models will convert text or you could call it a command into a picture. So in this case, I gave the command, "A bear learning about AI," and it returned me this beautiful picture. So at the moment, there are four different model types that are available on the Azure OpenAI Service. We don't know what the future will bring,
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-kind-of-models-are-available?u=76281980&t=94)** but this might grow with more models over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=0)** - [Instructor] Let us start with our first model type, GPT models. Now, since this is our first and also the most important model, let us have a look and understand how these models work. It's actually very easy to understand. The models accept n numbers of [Tokens](../../Skills/Web%20Development/Tokens.md) n and return one token out. Well, this would be easy if you understand what a token is, so what are they? In this example, the sentence is split into multiple words, and some words are split also. When a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is very common, it might be only one token, but a less common word will be split in multiple tokens that are used more often. Each token will be represented by a number. This makes it easier to do calculations. So a token is a word or a part of a word. But it's a little bit more complicated than this, because what I'm not showing you is that it actually returns a [Probability](../../Skills/Data%20Science/Probability.md) list with all different tokens that could be the output token. The algorithm then will choose which one fits the best based on the parameters that you can define. But you might say now, "This does not make sense. When I use Bing Chat or [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), for example, it returns me whole sentences or paragraphs." Exactly, and that is because the model works in an iterative way. The model executes the algorithm and adds one token. Then it adds the generated token to the input. And generates again, and again, and again, and again. It'll keep on doing this
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-do-gpt-models-work?u=76281980&t=91)** until certain parameters are satisfied. Language models are not new, and they still work the same way as then, they only got better. The first one were hidden Markov models. They also worked with n token in and one token out. The only issue was that this model only looked at the last token to generate the next one. So you can imagine the quality was not the best. But it laid the foundation for the next steps in language processing with n-grams, [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), and transformers that are now used in GPT models, which can take a lot of tokens to predict the next one. Understanding how these models work also makes clear that although chatting with a chatbot built on top of GPT models might feel human-like and even shows emotion, it is pure mathematical. These models do not understand emotion, they only will return a token that fits the list of input tokens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Probability](../../Skills/Data%20Science/Probability.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Env Vars:** gpt (3)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What can GPT models do?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=0)** - [Instructor] Within the GPT Models, there are two functionalities that you could make use of. And the first one we would like to discuss is completion. Now, within the completion functionality, there are three different strategies that you could make use of. To explain them well, we're going back to the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI Studio. I'm going to go through some demos. So the first strategy is zero-shot, which means we given one single command and it will generate for me some results. Now, sometimes, we want our results back in a specific structure, and therefore we need to give examples. And if you give one example, well, then, it's called one-shot. So in this case, I'm giving the example when a user says, "Order a pizza Margherita," returned with the command order pizza. Now, I'm giving, as last part, "I want to cancel my order." And then it should generate for me an answer based on the single commands they gave and the top. So in this case, it's returning for me cancel order. Sometimes just giving one example doesn't really do the thing and we need to give multiple examples. And that's the third strategy, which is called few-shot. With few shots, we are giving it multiple examples. So we have here example one, example two, and example three. Now, let's add a second. A last question. I want to know the status of my pizza,
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=97)** and let's see what the GPT model returns. check-status, which is quite a fine command that we could use in a later stack. The second functionality is chat. The idea of chat and completion is somehow the same. The only difference is that you'll keep responding on the content that has been generated and the input that you have given. It understands context of the conversation. So again, let's go back to the portal and see how that looks like. So we're here now in the portal. I'm going to close some items and we have our chat window here. Now, imagine I want to ask the chatbots to create for me a recipe to have a simple cake. So that's what I'm going to do. "Give me a recipe for a simple cake." And there it is, it's generating it right now for me. And it even says, "Enjoy your simple cake." Now, imagine I'm lactose intolerant and this recipe should be altered to it, so I can add that to the bot. "I am lactose intolerant. Please update the recipe with correct ingredients."
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-can-gpt-models-do?u=76281980&t=180)** And there it is. Now, this is exactly the same cake but altered with different ingredients. And what is actually happening is that, of course, we asked here for our first commands, then the bot gives back, or the GPT Model gives back the recipe. But then I'm asking another question on top of it, and then it creates me a new recipe based on those dairy-free cake. Now, I can go further in it and ask, for example, "How long should the cake bake?" And it gives me an answer. So it looks into what has been said in the past to give you an answer. Of course, the moment I clear the chat and I ask, "How long should a cake bake?" then it doesn't know that information anymore. I need to go on, so that might be a good idea when you're building an application that you're actually going a little bit more in depth to be able to define and keep track of all the messages, for example, your user has been saying.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Analogies:** imagine (2), for example (2)
> **Env Vars:** gpt (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Which model should I choose?](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=0)** - [Instructor] You might have heard about [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md), and so on. Now, there's all these different types of models. How do I know which one to choose? Well, if you've read a little bit about GPT, you might have learned about GPT-1, 2, 3, 4, and even others. But that's not a problem if you haven't. The numerical values are just showing iteration of the model, but there are quite some difference between them. It started all in 2018, when the first original GPT model was released. And in 2019, GPT-2 got released. At that point of time, these models were not so known yet and it was mostly researched by OpenAI. GPT-2 is a [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) model with over 1.5 billion parameters. This means that, for every list of [Tokens](../../Skills/Web%20Development/Tokens.md) you give to the model, 1.5 billion parameters are calculated to check what the best next token will be. To be clear, these are hyperparameters that are automatically generated. It's not a process of someone adding all these parameters manually. But it shows the complexity of the models. The more complex questions and the more data the model can answer, the more parameters the model will have. GPT-2 had the issue that it could not answer well domain-specific questions. Therefore, in 2020 already, GPT-3 was released. This time, even more data was added and more complexity. Therefore, GPT-3 went from 1.5 billion parameters to a stunning 175 billion.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=96)** GPT-3 understood context and domain-specific requests much better. 2 and 3 were mostly focused on completion and not on chat, although there were some workarounds. But after GPT-3, a specific version for chatting was released called GPT-3.5-Turbo, or mostly known for people as ChatGPT. Released in November 2022, this took the world by storm. The model, just like GPT-3, was trained on billions of documents that are available on the public web. It could have deep conversations with humans and could even successfully do the Bar Exam. It was also the first model that was really opened up to the public via the Chat app on the OpenAI website. And now we arrive at the latest model, GPT-4, released in March 2023. Although officially not given, some sources says it has over one trillion parameters. But its complexity is also shown in the capabilities. GPT-4 can not only handle text, but also images, and will answer even more human-like. If you have a quick look to the overview of the amount of parameters that each model has, we really see a big difference between GPT-1, which is on this graph not even visible anymore, and GPT-4. These numbers only show the capabilities and the power that these kinds of models have. Now that we have an overview, how do I choose which one to use? Well, it's quite easy.
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/which-model-should-i-choose?u=76281980&t=189)** You want the highest accuracy, choose GPT-4. Although there is one big other parameter that makes you choose the correct model, every model has a limit of number of tokens that it can handle. So for example, how big the text document is that you want to summarize. Another reason to choose one above the other is also the cost. You can understand that the latest models are heavier and more complex, so need more compute power to calculate the tokens. So always check if a cheaper model, so older model and less complex one, can handle the request that you want to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (5), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Env Vars:** gpt (18)
> **Versions:** 1.5 (3), 3.5 (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** just like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [The important role of prompt engineering](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=0)** - [Instructor] Engineering the prompt is a crucial aspect of utilizing language models like GPT. Its significance has grown to such an extent that individuals are now adopting the job title of prompt engineer. But what exactly does this entail? The following definition generated by a language model provides a concise explanation. "[Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) refers to the process of designing and refining prompts or instructions given to a language model. It involves formulating clear and specific instructions to the elicit the desired responses from the model." Now to delve into the matter further, let's visit the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI studio and explore the process of enhancing prompts. In the OpenAI studio we go into the playground section and choose for completion. First of all, make sure in your deployments that you've chosen a completion model. So we use the completion that we've created in a previous video. I'll start from one of the examples. I will choose summarize an article abstractive. Now we have here a prompt provide a summary of the text below that capture its main idea. This is quite already a very simple prompt. And then below it we have a small article. Now if we click on the generate button, it'll generate for us a summary of this small text. Of course, this can work on larger documents too. This already shows one of the functionalities
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=94)** of a large language model like GPT, which is summarization. And here we go. And in the green part, we have a little summary of what has been discussed in this article and we want to go a little bit further in prompt engineering. And instead of saying we want to have a summary, we actually want four highlights. So let's change the prompt here and say, extract four key highlights about this article. And we can just say generate. Give it some time. And there we go. We have four nice highlights that we can easily read without going over the whole document. But imagine now you are writing a nice blog post with a large article. Well, this is already a nice feature to say, okay, I want to add those four key highlights on the top of my article so people know immediately what it's about. But what I would like to do more is using those four highlights and actually create social media posts. So let's alter our prompt a little bit. So we'll say extract four key highlights about this article and generate an engaging social media post. for each highlight. We're going to remove the answer we had received. And what we're going to do is on the site we see parameters
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=190)** and one of them is the max length of [Tokens](../../Skills/Web%20Development/Tokens.md). Now 250 tokens is not that much. So we're going to increase this a little bit. Let's say we're going to increase it to 900. So the model has enough capacity to generate more tokens. So this 900 is a total that we can get the prompt plus the answer. So let's click generate and see what kind of answer we will get. Okay, so now we have four different highlights. Plus for each highlight also a social media post that we can use to market our blog posts for example. This is easy, but imagine we want to automate this with some application. Then we just have text here. What we would prefer is actually a structured information set. So let's say we want to get this in a specific [JSON](../../Skills/Web%20Development/JSON.md) format. We're going to say add to the prompt, respond in following. Or we'll just say the respond in a JSON format. We're going to remove again these details and we're going to click the generate button. And there we go. We have a JSON response that we can use within our application. But notice now that social media posts this field, it has spaces inside. And our tool might not be able to handle this, we actually want this just to be called post.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=284)** Now what we have here is zero shots. So we're just going to give an example so we can make it a single shot. So we're going to say respond in following JSON format,\. And we're just going to type out the format that we want. I first going to remove this also, and we are going to say highlight, just empty fields and then post
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/the-important-role-of-prompt-engineering?u=76281980&t=323)** and we can generate it again. And that's it. Now we have our JSON file, or at least the content that has been generated by the completion model. And we can use it within our application. So if we call the Azure completion API endpoint, we given as prompt this part, and then the content that we want to make use, we will get this as a response back from the endpoint. And this somehow explains what prompt engineering is. It's redefining what exactly you are telling the GPT model to get a specific response back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=0)** - [Instructor] What are embeddings? Embeddings are the numerical representation of words, sentences, or other textual elements. They capture the semantic meaning and the relationship between different elements in a dimensional space. Well, that's quite a difficult explanation, right? But let's look into what the problem is. The biggest problem is that computers don't understand the meaning of text. That means when you want to try machine learning models based on text, you somehow need to convert them into numbers, 'cause again, computers do not understand text. They don't understand the meaning of text, to be more specific. So just sending text to a machine learning algorithm or a computer will not do it. So what we do need to do is convert the text into numbers. And once that is done, we can send it to our computer or to our machine learning algorithm. And that is actually what embedding models do. They will convert the text into a vector of numbers, but it's a bit more than just numbers, it's relationships. 'Cause if you think about the relationship between the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) cow and the word bull, we will know that they are quite similar and that these words belong to each other. But if you think about the relationship of the words cow and chicken, although they're both animals, the distance between those numbers that needs to be generated will be farther away from each other than between a bull and a cow.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-embeddings?u=76281980&t=94)** So these models do not just convert text into numbers. The numbers actually mean something. The models know the relationship between words when they belong to each other or don't belong at all together. These models have been trained on top of textual data of many different kinds of sources. That way it learns the relationship between words and sentences. Because of data, that's possible to figure out what documents are similar or we can use this to search through documents based on natural language. So to repeat myself, embedding models convert your text into a vector of numbers, but those numbers contain semantic meaning of your sentences. It's the only way how a computer can understand what text actually means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Speakers:** - [instructor] (1)

#### [Model capabilities](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=0)** - [Instructor] Now that we understand what embeddings are, let's talk about what we can do with them. First, a little recap. An embedding model will convert words or sentences into a vector of numbers because computers cannot do any calculations on text, but it can on numbers. So what kind of calculations can we do with those numbers? But let's make life a little bit easier. To make it more visual, we're going to simplify our vector from more than a thousand values to only two. 'Cause when we have only two values, we can easily visualize them in a chart. So for now, every embedding, purely theoretically, and in this presentation contains two numbers. Now, if we calculate for multiple sentences or documents or embeddings via the embedding models, we can visualize those documents on a chart. Now, if I would need to do this for a thousand of dimensions, while that would not be possible to visualize. The furthest we can go is three dimensions. What do you notice from this chart is that the distance between sentence three and sentence two is much bigger compared to sentence two and sentence one. This means that sentence one and sentence two are more similar than sentence three and sentence two. Now, this is easily done visually if you only have two values, but embeddings, of course, they have more than a thousands, and that would make it way harder for a human to calculate which sentence is closer to the other document.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=96)** Now there's a mathematical solution for this, which is called cosine similarity. This is a function that can be used for an example [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) that calculates the distance between different embeddings and gives you back a quantitative estimate of the similarity between documents or sentences based on their embeddings. Where in the past people were looking into [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) counts to calculate similarity word count as heavily related to the size of the document. If you make use of embeddings, each document will have the same amount of values. So if a document or sentence is short or long, it'll not have an impact on the similarity with other documents. This brings us to the first functionality of embeddings and that similarity. By making use of the embeddings, we can get back a list of articles that are similar to what, for example, a customer is reading. The second functionality is search, and this can be done as well on text as on code. And the idea is exactly the same as we had an similarity. We need to convert the search term into an embedding, and then we will calculate the cosine similarity between our search term and the knowledge base of articles that we want to look into. Based on the quantitative estimate that is returned for each article, we can order them and give the top 10 results back. A third one is clustering documents. Again, we're looking here into an example where a vector only exists out of two fields, but with [Algorithms](../../Skills/Software%20Development/Algorithms.md) like K-means we can find clusters
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/model-capabillities?u=76281980&t=192)** of similar documents. Each cluster will have a centroid, which is its middle point, and will figure out what document is the closest to it. Embeddings are very powerful. They are the power behind NLP engines and without embeddings, search providers like Bing and [Google](../../Glossary/Service/Google.md) would not work as well as they do right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** make (4), python (1), find (1)
> **Definitions:** means that (1), is called (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### [How to use embeddings for a semantic search](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=0)** - [Instructor] Let's go into an example of how to use embeddings for [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md). Instead of going to the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI studio, we will go straight into some codes because embeddings is very technical. So what you see here is a Jupyter Notebook. This is a way of programming [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code in an interactive way. So the first thing we'll need to do is import some libraries. So we'll just quickly execute that, and then we need to set up the configuration of our OpenAI service. You will notice that our API type is Azure because we're connecting to the Azure OpenAI services and we're not connecting to the OpenAI services, so that therefore Azure. Then we need to configure our OpenAI key and our resource endpoint and the version. Next step is that we're going to read some data. So I have a CSV file that contains 2000 small news articles where we have a title, a description, also a label, but that last two columns are less important for now. And then it's important to clean up this description so we don't have double spaces, double punctuations, and new lines and so on. So we're also going to execute this on all the description fields that we have. So now our column has been cleaned up. Now let's go to execute embeddings on just one sentence and to see what we get out of it. So let me execute this. So just by calling the get embedding functionality,
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=96)** which is part of the OpenAI libraries, we get back immediately a vector in this case of 1024 different numeric values. So although this is a very short sentence, we get 1024 fields back. Now if I give in a longer sentence, in this case, the first field in the description column, PC world upcoming chip set will include built-in security feature for your PC. We also get 1024 back. You might notice here we have engine embedding ada. Now within the Azure OpenAI studio, I actually deployed this ada embedding model, but there's more than just ada. Let's go to the next cell and also execute this one where I'm only going to show you the length of what is returned. Now we have Babbage, Curry and Da Vinci. Now, Babbage returns a vector that contains 2048 fields, Curry 4,096 numeric values, and Da Vinci over 12,000. Now this is also showing that this Da Vinci concert linked to another, for example, is way more advanced and the quality that we will get back will also be higher. But of course, again, there's a price linked to that. Now, each of these models also have some limitations of the number of [Tokens](../../Skills/Web%20Development/Tokens.md) that it can handle.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=190)** Now, most of them can handle over 2000 tokens, but how do you know how many tokens you actually have in your document? Well, even for that, we have some functionality that we can make use of. So we have, in this case, a tokenizee and which is called a tiktokenizer. And we can say, okay, we want to use this kind of encoding. And then we execute this specific, again, the same title field that we discussed on the top here about PC world. And we will get return based on the length of the sampling coding of 17 tokens. And you can even see how it's actually has been split up in different tokens. Now this is step one. Now we understand how to get the embeddings and we want to do this for everything. So what I'm doing in this field, I'm filling up in the data frame, a new column embedding, and I'm calculating the embeddings for each description column and save it into this embedding column. Now you might see that I'm put it as two lines and comments because I've already done this for you and beforehand. 'Cause each time we need to recalculate all these embeddings means we also need to send all that data each time to the OpenAI endpoint. And of course there's a cost linked to it depending on the amount of tokens that you're consuming. So I've done this one and I've saved this data frame with all the data into a pickle file. So now I just need to read this file
>
> **[4:43](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=283)** and I have all the data. So now you'll notice I have my title, my description, the two columns that I don't need, and I have my embeddings. So we can start searching through our document set. Therefore, I created a small function, which is called search docs, where I'm giving in my data frame. So this is this full data frame at all the embeddings and then my user query, or you could say the question that I'm going to ask, and then also the engine that we want to use. Now, keep in mind that the engine will depend also on the engine that you've used to do the encoding. If you use the Da Vinci encoding, while you'll also need to use the Da Vinci encoding and your similarity matching. Then this next parameter is the how many results I want to get back. So in this case, I've chosen three, and then we have if you want to show the display afterwards or not, the results. Now what does this do? It'll do a course and a similarity based on the user query that, as you will notice in the first step, will get embedded also. So just a small string that we're sending, just going to execute it. Nothing is going to get done. Here, we're calling it. So who is Edgar Davids? That's my user query, and that will be getting vectorized. We're going to get some embeddings for it.
>
> **[6:17](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-to-use-embeddings-for-semantic-search?u=76281980&t=377)** Then that embedding is used to do a constant similarity between embeddings that we've already calculated and then will return to me a value of how similar this embedding is linked to the embeddings that I have in my data frame. As a result, I will sort the values based on the similarity and get the top three or top four in this case. Now, when I do this, I have my question, "Who is Edgar Davids?" I execute it. I'm not going to get an answer, but I'm going to get four documents that fit the closest to what I requested. And you already noticed here we have an article about Edgar Davids, and this is just one example of how we can use embeddings for semantic searching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-dall-e-models?u=76281980&t=0)** - [Instructor] [DALL-E](../../Skills/Software%20Development/DALL-E.md) named after the artist, Salvador Dali, and the Disney character, Wall-E, generates unique and creative images from textual descriptions. DALL-E models convert text commands into images. These text commands are also called prompts. The system has the ability to produce lifelike images based solely on a description of a scene. DALL-E is an algorithm powered by a neural network designed to generate precise images based on concise phrases given by the user. It understands language by interpreting textual descriptions utilizing a transformer-based neural network. The system employs a form of machine learning that comprehends context and handle sequences to generate fateful visual representations corresponding to textual prompts. DALL-E consistently undergoes training and dataset updates to enable the transformer accurate predictions of images based on text prompts. DALL-E utilizes a large scale data set of images and corresponding text prompts during its training process. The data set comprises a diverse range of images and associated textual descriptions to facilitate the algorithm's understanding and generation of images based on various prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DALL-E](../../Skills/Software%20Development/DALL-E.md) (5)
> **Env Vars:** dall (5)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [How image generation models work](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=0)** - [Instructor] Converting text into images, it's not an easy process. So let's have a look at how it's actually done. And we're going to start back to embeddings. The first step that needs to be done is converting our prompt into a text embedding. The second step is sending that text embedding to the prior, which is a process that will convert the text embedding into an image embedding. And once we have the image embedding, we can send it to an image decoder, which will generate the image we requested. Now the text embedding that is used is not the classic text embedding that also is available in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI service. The one that is used is called CLIP, contrastive language image pre-training, which actually does the opposite of generating an image. It describes the image. Now CLIP is a clever AI model that can understand both images and text. It is trained in two parts, an image part, and a text part. In a training process, it learns to predict which images match with which text in a [Big Data](../../Skills/Data%20Science/Big%20Data.md) set. After this training, CLIP becomes a special kind of classifier called a zero-shot classifier. This means it can recognize and classify things it has never seen before. How does it do this? Instead of having a specific class for each object or concept, it uses captions to describe them. For example, instead of having a class for dog,
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/how-it-works?u=76281980&t=94)** it has a caption, like a photo of a dog. When given an image, CLIP tries to find the best matching caption for that image. It uses its training to estimate which caption describes the image most accurately. In other words, it predicts the class of the caption that pairs well with the given image. This way it can classify images into different categories without needing specific training for each individual class. Now we also have our image encoder, and in this case it's a diffusion model. The problem is that a classic diffusion model trained on a CAT dataset will constantly generate photorealistic images without being able to make any changes. Now GLIDE augments the training process of diffusion model by adding textual embeddings and this results in textual [Conditional Image Generation](../../Skills/Artificial%20Intelligence%20(AI)/Conditional%20Image%20Generation.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Conditional Image Generation](../../Skills/Artificial%20Intelligence%20(AI)/Conditional%20Image%20Generation.md) (1)
> **Env Vars:** clip (4), cat (1), glide (1)
> **Definitions:** is a  (2), is called (1), in other words (1)
> **CLI Commands:** find (1), cat (1), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Examples of use cases](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=0)** - [Instructor] Let's have a look now at a couple of examples of how you can use [DALL-E](../../Skills/Software%20Development/DALL-E.md). Now it's interesting to know also that Dall-E has two different functionalities. The first one is image generation, where as the user, we're going to give it a prompt to generate a picture. The second one is manipulation, where again, a user is going to give a prompt, but also a picture. And based on the prompt, that picture will be manipulated with your request. Now since the Dall-E 2 model is in a limited private preview on the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI Services, we will not go to the Azure OpenAI studio, but to the Bing Create web application, which is a public available app that has been integrated with Dall-E and is freely available. Once you're on the website, you can immediately start prompting to generate pictures. Now I already prepared some creations for you. So I will go to Creations where I can find my history. So I started with the prompt, "A house in the middle of a coffee plantation," and we see we have quite some nice examples. It always returns four different items. Now let's fine-tune this picture a little bit. I want to see the sun a bit in this picture. So I changed my prompt, "With the sun shining on the deck," and immediately, we have a more brighter picture. Now let's edit a little bit more and say instead of a coffee plantation, I want a banana plantation. Immediately again, those small details
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/examples-of-use-cases?u=76281980&t=93)** changed the whole picture. Now instead of just the sun shining on the deck, I would actually want the evening sun. So we alter that again in the prompt, the evening sun, and we get a beautiful new picture. Now let's add some people to it. We're adding to it, "With a couple enjoying a glass of wine," and we see some people not always recognizable with their face, but it's noticeable that someone is sitting there and enjoying a drink. Now we don't want to use this banana plantation anymore. It doesn't really fit the theme that we are working on, so let's make it a rice field. And again, we have a nice example. Now let's update this a little bit more. We don't want a photorealistic picture. What do we want is some digital art. So we're going to add digital art to our prompt, and now we have a full-blown picture that again, can be used for our social media, for printed press, for our blog posts, and we can fine-tune it to the needs just by prompting specifically what we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DALL-E](../../Skills/Software%20Development/DALL-E.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=0)** - [Narrator] Audio models are AI models that work with sound, especially speech. In simple terms, an audio model can listen to audio or speak out audio. For example, one kind of audio model takes spoken words and turns them into written text. Another kind takes written text and turns it into spoken voice. These technologies let us communicate with computers using our natural voice. Think of voice assistants like Siri and Alexa. They use audio models to understand what you say and to talk back. Common use cases include transcribing meetings or phone calls into text. Enabling hands-free control through voice commands, providing spoken feedback in apps and making content accessible, like reading out text for visual impaired users. Audio models are also used for language translation, hearing speech in one language and outputting text in another. And for interactive chat bots that you can talk to. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) provides services that make it easy to use audio AI. In Azure OpenAI service, there's a whisper model from OpenAI for speech to text. Whisper can take an audio file and produce text transcripts. It's very good at understanding many languages and even translating them to English. For text to speech, Azure OpenAI offers the TTS models with prebuilt voices that can speak out text in many languages. And next to that, we have the real time audio models.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/what-are-audio-models?u=76281980&t=95)** The time between transcribing or generating audio is so fast and this combined with the power of a large language model, it can feel like you're talking to a human.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **CLI Commands:** make (1)
> **Env Vars:** tts (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Converting speech to text](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=0)** - [Instructor] Converting speech to text is great for transcribing meetings, audio notes, phone calls, and so on. So let's have a look how we can implement this in our application. Before we go on, we will start going initially to our model catalog where we will filter the interference tasks and we'll look for [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md). And you'll notice at the moment there's only one model that does that. So we click on it and then we'll choose to deploy it. We give our deployment a specific name, and then we say Create resource and deploy. Once that is done, you will find it that it's back available in your deployments here, and you'll see here Whisper. If you click on it, what is the most important part is our target, which is actually only this part, the link to our OpenAI resource and the key. So now let's go into Visual Studio Code and see how we can actually run this service. Now we need to OpenAI library, so in your Jupyter Notebook you can install it. And then we need to set up the client. Notice we have our API key here, and we have our endpoint and of course a particular version. Now next to that, we have our deployment ID, which is the name of the model that you have set up. And then we need to define where our audio file is. So I have a little recording from Wikipedia, and then we can immediately make use of the client
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-speech-to-text?u=76281980&t=96)** where we want to make use of the audio functionality. We want to do transcription, and then we create the transcription. So we send off the binary data of the audio file and we say, okay, this is the model that you need to make use of, this is Whisper. And then we can just execute it. And after a couple of seconds, we will immediately get the response back from this audio file. So here we got the transcription class with the text that has been transcribed. So if you would like to know, this took nine seconds. The audio file itself is actually almost a minute, so it's very fast. It's faster than a human.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** set up (2), install (1)
> **Tools:** visual studio (1), jupyter (1)
> **UI Navigation:** click on (2)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Converting text to speech](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=0)** - [Instructor] Converting text to speech is perfect, for example, to create audio books, or to add accessibility to your website. Imagine a read this block article button, and so many more functionalities. So let's dive in and see how we can do this in code. But first of all, we need to go back to our [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) because we need to deploy our text to speech model. So in the inference task, we filter on audio generation, and you will notice we have a couple of models. We have audio generation, but we have as well, text to speech. Now in this time we're going to make use of text to speech. We click TTS, we click the deploy button, we give the name, we click resource and deploy, and then after a couple of seconds, it will be available in your deployments. So we will see here TTS. Same here, we click our model. We need our target URI. We actually need only this part, and we need our key. So copy those ones on your side, and then we go straightforward into Visual Studio Code where we fill in our API key because we need to create our [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI client. We set our endpoint, we define the deployment, which was TTS. Then we do our client. We want an audio client that generates speech. We define the model,
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=95)** and then we can choose of different voices, and that's depending on the model that you're using. So with TTS, we have Nova, Shimmer, Echo, Onyx, Fable, and Alloy. So let's start with Onyx, and the input is the text that we want to get converted into speech, and then also the response format. So you can generate an MP3 flag WAV, but also just a stream of data. And then we're just creating here a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) display to be able to visualize or listen to the audio. So when I execute this...
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=135)** - [Onyx] Today is a wonderful day to build something amazing.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=138)** - [Instructor] So we got the text to speech transcription. So I can easily change this to another voice, run it again.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=152)** - [AI Speaker] Today is a wonderful day to build something amazing.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/converting-text-to-speech?u=76281980&t=155)** - [Instructor] So now we have a more feminine voice. So as you see, very easy and easy to implement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=0)** - [Instructor] And last but not least, we have the [Real-Time](../../Skills/Database%20Management/Real-Time.md) audio models. These powerful models combine the power of chat models with text-to-speech and speech-to-text. They're so blazing fast in transcribing and generating audio that it could feel like you're talking to a human. So let's go back to the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) and see how we can make use of them. In the AI Foundry, we go back to our model catalog, we click on Inference Tasks and choose for the option Audio Generation. And there we need to make use of the real-time models. So we click on it, we click on Deploy, and we go through the steps like model version and as well the location where you want to send the data to. Now I've already created one, we go back to our deployments and we have it here. We have our endpoint and we have our key. Now, instead of going into codes, I want to share with you an repository on [GitHub](../../Skills/Software%20Development/GitHub.md), because this audio real-time is very complex. Now, if you look at the schematic of this repository of how things work, the first thing is, is that as a user, you need to create a connection to the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI service because you are sending constant audio information towards that service. And then the other way around, it will constantly also send you audio back. So you're making use of web sockets to be able to make this constant communication between the two parties. So creating this in a little [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script is not that easy,
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=98)** therefore, I want to share with you this repository where you can find the link here on the screen as well. But what we can do is if we go back to our AI foundry, we go to our real-time audio, we have here our deployments. So we have our mini real-time preview, we can choose a voice, let's say Coral, and we can start talking with the correct microphone on. And now [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) or how you want to call him, actually answers to the questions like, what's the capital of France?
>
> **[2:19](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=139)** - [AI Assistant] It sounds like you're asking about the different ways to say friend in various languages. Here are a few examples. Spanish, amigo for a male friend, amiga for a female friend.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=150)** - [Instructor] Well, great. Thank you very much. I also like that I can interrupt you as a real person.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=156)** - [AI Assistant] I'm glad to hear that. I'm here to chat and answer your questions whenever you need. If there's anything else you'd like to know or discuss, just let me know.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=164)** - [Instructor] Well, just give me one thing, why people should look into real-time audio and be talking to you?
>
> **[2:51](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=171)** - [AI Assistant] Real-time audio communication can be incredibly valuable because it allows for immediate interactive conversations. This can help to clarify misunderstandings quickly, build stronger connections, and make communication more dynamic and engaging. Whether for personal conversations or professional collaborations, real-time audio enables a fluid exchange of ideas and emotions.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/audio-chat-with-a-chat-model?u=76281980&t=194)** - [Instructor] Well, thank you very much for that explanation, and that is also the end of this demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (8), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=0)** - [Instructor] If you look to the legal side of these [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), there's actually two questions that we need to ask. The first one is, is it okay that companies make use of public data to train these large language models? And the second one, who owns the rights on these newly generated text or images? So let's go a little bit more in depth. Language models like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) are typically trained on large amounts of publicly available text from sources such as news websites, blogs, books, and other internet sources. However, it is important to note that while large language models can generate text that may resemble sentences from these sources, they do not have direct access to the specific copyrighted works themself. During the training process, the models are trained on statistical patterns and structures present in the data, rather than on specific sentences or phrases. They learn to generate texts that are similar in style and content to what they have seen during training. While large language models strive to be creative and generate novel responses, there can be instances where they produce outputs that closely resemble specific sentences from copyrighted sources. This is because the models are trained on diverse text samples and are exposed to a wide range of language patterns. It's also worth noting that responsible use of language models like ChatGPT includes respecting copyright laws and not using them to infringe
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=93)** upon intellectual property rights. OpenAI, the organization behind ChatGPT, encourage users to be mindful of ethical guidelines and legal considerations when utilizing these models. But what about the ownership of the generated data? The ownership of copyrights for [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) content can be a complex issue and may vary depending on several factors, including jurisdiction and the specific circumstances surrounding the creation and use of the content. In general, the question of ownership is determined by existing copyright laws and agreements. Typically, the original creator or author of a work is considered the owner of the copyright. However, when it comes to generative AI content, the situation becomes more nuanced. In some cases, the ownership of the copyright may be attributed to the human who created or trained the AI model, while in other instances, it might be attributed to the organization or entity that developed the AI technology or provided the infrastructure for training the model. Additionally, legal frameworks and policies can differ across jurisdiction. Some countries may have specific regulation addressing the ownership and attribution of AI-generated content, while others may rely on existing copyright laws to determine ownership. It is important to consult legal experts and consider applicable laws and agreements to determine the specific ownership rights
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/be-carefull?u=76281980&t=188)** for generative AI content in a given context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (4), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (3), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [More ideas](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=0)** - [Instructor] In this course, we discussed the four main OpenAI model types that [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) offers on the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) platform. We've discussed already quite some use cases, but let's go over just a couple of more before we end this training. [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) can be very useful in the music industry. Have you ever tried to ask [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) to write lyrics? You can even ask to write lyrics in a particular style. Now, imagine you can combine that with other models that can generate tunes. Well, at that moment we are creating music. There are even competitions going on where people submit their AI-generated songs and you can vote for it, and that music is not that bad. If you want to have a look, go visit [aisongcontest.com](https://aisongcontest.com). If you go to the website and you click All Participants, you'll already see a bunch of songs that you can try out. Some are fully created by AI and others are a mix of human and AI collaborating together. But do try it out. But what about your marketing automation? We could use the GPT models to generate IDs for social media posts, but with, for example, [DALL-E](../../Skills/Software%20Development/DALL-E.md), we can ask it to generate also images linked to our posts. Or maybe we can even use these models to replace pictures we normally buy from marketplaces. But what about even printed advertisement? Have you heard about the AI issue of "Cosmopolitan"? It was released a few months ago
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-openai-services-and-generative-ai-models/more-ideas?u=76281980&t=92)** and made history as the first printed magazine to feature a cover designed by [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). Now, after exploring the various possibilities that exist, it's understandable that you may desire to delve even deeper. The course you just completed served as an introduction, but subsequent courses will provide a more comprehensive understanding of utilizing libraries and integrating them into your own applications or creating new ones. The AI revolution is progressing rapidly, so it's crucial to continue learning and not limit your progress to this point. Stay engaged and keep expanding your knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1)
> **Analogies:** imagine (1), for example (1)
> **URLs:** [aisongcontest.com](https://aisongcontest.com) (1)
> **Env Vars:** gpt (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Sammy Deprez](../../Instructors/Artificial%20Intelligence%20(AI)/Sammy%20Deprez.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/azure-openai-generative-ai-models-and-how-to-use-them-5988057)

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Microsoft Azure

## Path Context

### In [Build AI Products Using Azure AI Services in Your Development Lifecycle](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Build%20AI%20Products%20Using%20Azure%20AI%20Services%20in%20Your%20Development%20Lifecycle.md)
← [Azure AI for Developers- Using the Azure AI Model Catalog](Azure%20AI%20for%20Developers-%20Using%20the%20Azure%20AI%20Model%20Catalog.md) | **4 of 8** | [Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI](Azure%20for%20Developers-%20Retrieval-Augmented%20Generation%20(RAG)%20with%20Azure%20AI.md) →

## Appears In

- [Build AI Products Using Azure AI Services in Your Development Lifecycle](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Build%20AI%20Products%20Using%20Azure%20AI%20Services%20in%20Your%20Development%20Lifecycle.md)

## Related Courses

_Courses sharing skills:_

- [Advanced LLMOps- Deploying and Managing LLMs in Production](Advanced%20LLMOps-%20Deploying%20and%20Managing%20LLMs%20in%20Production.md) — Generative AI, Artificial Intelligence (AI)
- [LLMOps in Practice- A Deep Dive](LLMOps%20in%20Practice-%20A%20Deep%20Dive.md) — Generative AI, Artificial Intelligence (AI)
- [Generative Ai And Llmops Building Blocks And Applications](Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md) — Generative AI, Artificial Intelligence (AI)
- [Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md) — Generative AI, Artificial Intelligence (AI)
- [Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md) — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)