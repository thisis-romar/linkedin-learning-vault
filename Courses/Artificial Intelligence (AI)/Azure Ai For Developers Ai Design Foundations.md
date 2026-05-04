---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: azure-ai-for-developers-ai-design-foundations
url: "https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations"
level: Beginner
updated: 2/4/2025
learners: 14442
skills:
  - Azure AI Studio
  - Large Language Model Operations (LLMOps)
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFgGdrC0BdUqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737481924703?e=2147483647&amp;v=beta&amp;t=Vs9Jngl2eNdOwgn64R-XHFTGVaU23LNQseXo1Y4P3Nw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Build AI Products Using Azure AI Services in Your Development Lifecycle](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Build%20AI%20Products%20Using%20Azure%20AI%20Services%20in%20Your%20Development%20Lifecycle.md)'
next_courses:
  - '[Azure AI for Developers- LLMs and SLMs](Azure%20AI%20for%20Developers-%20LLMs%20and%20SLMs.md)'
path_nav: '[{"path":"Build AI Products Using Azure AI Services in Your Development Lifecycle","position":1,"total":8,"prev":null,"next":"Azure AI for Developers- LLMs and SLMs"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/azure-ai-studio
  - skill/large-language-model-operations-llmops
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20Ai%20For%20Developers%20Ai%20Design%20Foundations.md)

![Azure Ai For Developers Ai Design Foundations](https://media.licdn.com/dms/image/v2/D4D0DAQFgGdrC0BdUqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737481924703?e=2147483647&amp;v=beta&amp;t=Vs9Jngl2eNdOwgn64R-XHFTGVaU23LNQseXo1Y4P3Nw)

# Azure Ai For Developers Ai Design Foundations

> This course serves as a foundational introduction to core AI concepts and solutions. Instructor Marco Casalaina provides beginner-level coverage of LLMs, LLMOps, multimodal AI, AI agents, and responsible AI, giving you an overview of the essentials of each and touching on their key features and functionalities. This course is an ideal fit for Azure developers and cloud engineers looking for an int

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations) | Beginner | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What this course is about](#what-this-course-is-about)
  - [Prerequisites](#prerequisites)
- [**1. Understanding Large Language Models**](#1-understanding-large-language-models) (2 videos)
  - [Introduction to large language models (LLMs)](#introduction-to-large-language-models-llms)
  - [Choosing the right model](#choosing-the-right-model)
- [**2. Grounding LLMs to Data**](#2-grounding-llms-to-data) (4 videos)
  - [How data grounding works](#how-data-grounding-works)
  - [Embeddings and vector search](#embeddings-and-vector-search)
  - [Connecting to structured data sources](#connecting-to-structured-data-sources)
  - [Preventing hallucination](#preventing-hallucination)
- [**3. Introduction to LLMOps**](#3-introduction-to-llmops) (3 videos)
  - [Running pilots with real users](#running-pilots-with-real-users)
  - [Evaluating your AI](#evaluating-your-ai)
  - [Monitoring your AI](#monitoring-your-ai)
- [**4. Ensuring the Safe and Responsible Operation of Your AI**](#4-ensuring-the-safe-and-responsible-operation-of-your-ai) (3 videos)
  - [Responsible AI concerns and their mitigations](#responsible-ai-concerns-and-their-mitigations)
  - [User experience and system prompt design](#user-experience-and-system-prompt-design)
  - [Content safety](#content-safety)
- [**5. Multimodal AI**](#5-multimodal-ai) (4 videos)
  - [Introduction to multimodal AI](#introduction-to-multimodal-ai)
  - [Allowing your AI to speak](#allowing-your-ai-to-speak)
  - [Enabling your AI to see](#enabling-your-ai-to-see)
  - [General purpose models vs. task-specific models](#general-purpose-models-vs-task-specific-models)
- [**6. Introduction to AI Agents**](#6-introduction-to-ai-agents) (2 videos)
  - [What is an AI agent?](#what-is-an-ai-agent)
  - [Single agent vs. multiple agents](#single-agent-vs-multiple-agents)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more](#learning-more)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What this course is about](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/what-this-course-is-about?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/what-this-course-is-about?u=76281980&t=0)** - [Marco] Did you know that AI can now understand and generate human-like text, images, and more? This is the power of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) and it's transforming the way we interact with technology. But how can you harness this power effectively and responsibly? In this foundational course, you'll learn the basics of large language models, how they work, what they can do, and how you can use them, how to ground these models to your data, and ensure they work correctly, best practices for ensuring your AI behaves safely and responsibly, the exciting potential of multimodal models that go beyond just text, and the rise of [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) and their impact on the future of AI. I'm Marco Casalaina, VP [products](../../Skills/Software%20Development/Microsoft%20Products.md) of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI. If you're ready to dive into the world of Azure AI, join me as we explore these fascinating topics together. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Speakers:** - [marco] (1)

#### [Prerequisites](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/pre-requisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/pre-requisites?u=76281980&t=0)** - [Instructor] Now let's talk about some prerequisites, some things you'll want to know before taking this course. You'll want to have some familiarity with [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), especially [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), and you'll need a basic understanding of programming because we'll be looking at a little bit of code. Don't worry though, you don't need to be an expert in all this stuff. Just the basics will do. As this is the foundational course, we're not going to go too heavy into the code. We're going to focus more on the concepts that you can use to develop with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Large Language Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to large language models (LLMs)](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/introduction-to-large-language-models-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/introduction-to-large-language-models-llms?u=76281980&t=0)** - [Instructor] If you're here, you've probably heard of a large language model or an LLM. They power most of the world of AI today, including [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md). So, most people have used a large language model in some form, but very few people really understand how it works. So, I'm going to demonstrate the fundamental principle of how [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) work by turning you into one right now. What would you do if I just didn't finish this? No, there's nothing wrong with your audio. I intentionally cut myself off, but in your head, you probably filled in the blank there. Some of you may have even said the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) sentence out loud. This is fundamentally how a large language model works. It predicts the next words in sequence, given the words that came before, and you have a large language model in your brain too. So, yeah, that's really how large language models work, with just that ability to predict the next word. They can do all these amazing things that we use them for today, but there is one little secret about large language models. There is something your brain can do that large language models can't. Large language models do not continuously learn. By itself, the model will have no memory of a conversation you had with it yesterday, and no knowledge of anything that's happened since the time it was trained. Large language models are trained at a point in time and they stay that way, only potentially learning new information when they're retrained, and the provider issues a new version of the model.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/introduction-to-large-language-models-llms?u=76281980&t=93)** That's why you need to ground these models to data. The models by themselves won't remember anything or learn anything new, but when you develop with them, you can equip them with memory or information about current events so that they can respond appropriately to your users. That's exactly how things like Microsoft Copilot work, and we'll have a look at how you can make that grounding happen later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (6), [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** llm (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Choosing the right model](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/choosing-the-right-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/choosing-the-right-model?u=76281980&t=0)** - [Instructor] Back in 2023, if you wanted to build an app with a large language model, your choices were GPT or GPT. But now, there are literally thousands of models you can choose from. So how do you make an educated choice? One way to compare different models is using benchmarks. You can find them here in [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) on this benchmarks tab right here. And in this area, you can actually add other models that you compare against each other on various different metrics like cost and latency and quality and so on. You can also find these benchmarks on various third party websites like this, the Large Language Model Leaderboard, but there's no substitute for trying the models yourself. One of the fastest and easiest ways to do this now is with the [GitHub](../../Skills/Software%20Development/GitHub.md) model marketplace. Let's have a look. Developers can explore a library of the most recent and popular models from the Azure AI Foundry here in GitHub. Every model is unique in its capabilities, performance, and cost. You can click into the model cards to see what each model specializes in. Mistral's new Ministral model, for example, offers low latency,
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/choosing-the-right-model?u=76281980&t=87)** while [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) is currently the most powerful and widely used multimodal model. As you can see, you can test drive these models for free with the interactive playground and try out your prompts before you spend a dime in production. Let's check this out by taking another one of the latest models from OpenAI, GPT-4o mini. So we're going to go into the playground here and I'm going to upload a photo here and see how the model responds. So here we can see that this particular cracked up car is probably not caused by hail. Even better though, is this compare button at the top. You know, let's say that I'm building this multimodal application with text and vision and I would like to compare two models against each other to determine which one is going to work for me. And so on the right-hand side, I'm going to change this one to be not GPT-4o mini, but instead, I'll choose [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) 11B-Vision, for example. And once again, I will attach my image and I'll give them both the same prompt at the same time. When you fill in the left-hand side, it fills in the right-hand side also. And we can see that these models give us markedly different responses that although Llama 3.2-11B responded more quickly, it says, hail damage can leave a vehicle looking like this.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/choosing-the-right-model?u=76281980&t=184)** And on the left-hand side, it says this is probably not hail. So this is a pretty good comparison and can help me understand, using my own dataset, which one of these models is the best one for me. So, and some to choose the best model, first do your research with some benchmarks, then try the models out yourself to decide what's going to work best for your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (3), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (2)
> **Env Vars:** gpt (5)
> **CLI Commands:** find (2), make (1)
> **Tools:** github (2)
> **Analogies:** for example (2)
> **Code Identifiers:** llama (1)
> **Versions:** 3.2 (1)
> **Definitions:** is a  (1)


### 2. Grounding LLMs to Data

[↑ Back to Table of Contents](#table-of-contents)

#### [How data grounding works](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/how-data-grounding-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/how-data-grounding-works?u=76281980&t=0)** - [Instructor] As I mentioned earlier, [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) don't learn. To give them memory or access to current information, you have to ground them to data. Let's take a look at how that works. Now we're in the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) portal. The portal offers all kinds of tools for developers to get started with AI. By the time you see this course, the Azure AI Foundry may look a little different because the Azure AI Foundry is constantly evolving. But [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured, the principles I'll demonstrate here will still apply. The easiest way to ground your model to data is here through the playground and we're going to make a question answering agent. [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) can do much more than just answer questions as we'll see later on in this course. But here, we're going to make one that's grounded to knowledge. Let's make ourselves a little car assistant. And it starts here with the model instructions, otherwise known as the system message. And we are going to instruct it that it's a car assistant. As I noted earlier, large language models are limited to the knowledge that was available as of the time that they were trained. I have a Hyundai Ioniq 6, and that car came out after even the latest [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) was trained. So if I ask a question about that model of car, the model by itself won't know how to answer it. There are lots of different sources of knowledge that you can ground the model to. So when I drop this down here, you can see that I can ground this to an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI search index
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/how-data-grounding-works?u=76281980&t=93)** that I had previously set up, or to other data in the [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) or in a blob storage. Or, here I can test this out quickly just by uploading a file. And the file that I'm going to upload is the manual for my Hyundai Ioniq 6. And this manual contains all the information that the model needs to know about this car. Now that takes a few minutes, but when it's done, I have an index. It's created for me a vector index of this manual. And so now I'm going to ask the same question again. How do I activate the heated seats in a Hyundai Ioniq 6? Earlier, it was unable to answer this question, but now not only does it know that a Hyundai Ioniq 6 exists, but it's totally able to answer the question. And it's true, my car has a big giant touch screen. And to activate the heated seats, you have to touch the icon on the big touchscreen. Has anything changed about the model? No, it hasn't. When I asked the question the first time, the model just answered solely from its training data. And its training data didn't include anything about this car, the Ioniq 6, so it didn't know how to answer. But when I asked the question the second time, Azure AI first ran a search before it called the model. So what the model saw was not just the question,
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/how-data-grounding-works?u=76281980&t=188)** but the question preceded by an extract from the manual that pertained to the seats. That's why it was able to answer the question correctly, because the answer to the question was actually right in the prompt that the large language model got, and that's how all AI works everywhere. Here in [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), when I ask it a question, it's doing the same thing, just grounding to my email and my calendar and things like that. So it's not that the model knows when I'm recording this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, it's that it was able to search this in my calendar and then it put this information from my calendar into the prompt for the model to respond with. It's taking extracts of that information and that's how it's able to respond correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (3), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** gpt (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Embeddings and vector search](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/embeddings-and-vector-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/embeddings-and-vector-search?u=76281980&t=0)** - [Narrator] You may have noticed when we set up the data grounding in the last video, I mentioned that it created a vector search index. What is that exactly? Let's have a look. I'm going to ask the same question as before about the heated seats in an Ioniq 6, but in a different language. I only indexed the English car manual, but it still works. Why? Traditional keyword search is looking for [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) matches. So if I had used traditional keyword search, my search for "sieges chauffants" in French would have failed because those words are not in the English manual. But vector search is different. It's not searching for the words, but the concept. We call the type of model that maps words to concepts an embedding model. In this case, the concept of sieges chauffants and heated seats were exactly the same, and that's why this search worked. Whether you're using different languages or just different words, vector search tends to be more likely to find the information you're looking for. That's why we often use it with [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). Because AI users tend to use a wide variety of languages and vocabulary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Connecting to structured data sources](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/connecting-to-structured-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/connecting-to-structured-data-sources?u=76281980&t=0)** - [Instructor] So we've seen how to connect [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) to [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md), but what about structured data like spreadsheets, [Databases](../../Skills/Software%20Development/Databases.md), and lakehouses? Well, that's not as easy as you might think. Large language models can certainly write code in query languages like [SQL](../../Skills/Data%20Science/SQL.md) and KQL, but there are lots of mistakes they can make. They can make errors in the data schema. They can sometimes emit syntax errors in the code, and sometimes they just misunderstand the user's request. One way to solve for this is through the use of [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md). Agents are a framework that sit above one or more models that allow you to do complex long running tasks and agents can take action on your behalf. They often involve chain of thought processes, which are more than a single large language model will do, and that can often allow them to recover from their mistakes. So agents are a good way to be able to query structured data. Later on in this course, we'll go a little bit more deeply into AI agents, but for now, let's compare a single large language model call to an agent, and we'll do that in this [little.net](https://little.net) app I wrote to do this comparison. Let's start with this single large language model call. I grounded this model to the schema of the demo database called AdventureWorks that you can get online, and I'm going to ask, what was my best selling product? Now, in this case, I'm just calling the large language model and running the query straight away, and it did work. It suggested this query over here, which it ran, and it gave me this result. But you know, maybe that result is not exactly
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/connecting-to-structured-data-sources?u=76281980&t=93)** what I was looking for as a human looking for natural language. This didn't format it wonderfully, and I may need to run it through another call to a large language model to clean this up and make it more human readable. Now, if I ask a more complicated question like, who was the salesperson who sold the most of my best selling product? Well, now we're not doing so well. I mean, it generated a query. It's got a big join in it. This query might be correct, but we'll never know because it's got incorrect syntax. And with a single call to a large language model, these are the kinds of errors that you often run into, especially when you're trying to issue queries. The large language model often make mistakes that needs to be corrected. One way to approach this is with the use of an agent. So let's try that first question again, but this time with an agent. What we did here is we use the agent framework and it has the ability to run functions. It can run its own SQL against the database and get a result. That's what it did here, and it gave a much more pleasant and human readable answer. Now let's try our more complicated question. The salesperson who sold the most of my bestselling product, this is one of the places where an agent shines. As we can see, it'll go back and forth with itself, running queries, sometimes making mistakes, and here we see it's run two queries back to back where it found what the bestselling product is and who the best salesperson is. And it's Jillian Carson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (2), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (4)
> **Env Vars:** sql (2), kql (1)
> **URLs:** [little.net](https://little.net) (1)
> **Speakers:** - [instructor] (1)

#### [Preventing hallucination](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/preventing-hallucination?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/preventing-hallucination?u=76281980&t=0)** - [Presenter] One of the most common concerns with [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) is hallucination. In general, we look to minimize hallucination in these models. But first, what is a hallucination? Fundamentally, it's an ungrounded response. These models are made to predict the next [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in sequence. They have no notion of right or wrong any more than you did when you predicted the last word of my sentence at the beginning of this course. A common technique to reduce hallucinations is to ground the model to data, as we did a little bit earlier. That definitely helps quite a bit, but it's not a panacea. For that reason, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI offers a groundedness API. Groundedness is the opposite of hallucination. It's a term we use to measure how well the model is sticking to the data it's given when making its responses. Let's have a look at the groundedness API and how it works. To view it via the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) portal, go to the Safety and security section and click the Try it out tab. Click on Groundedness detection. Groundedness detection is meant to work at runtime, so when a model responds, groundedness detection checks it first before showing the result to the user. Here we have an ungrounded response, and so here's the grounding source that says that the person makes $10 per hour, and when we ask the model,
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/preventing-hallucination?u=76281980&t=92)** "How much does she currently get paid per hour?," it says, "$12 per hour." That does not match the grounding data, hence ungroundedness has been detected. Using groundedness detection can result in a slower response because you may want to do a rewrite pass if ungroundedness has been detected, but it'll be more likely to be correct. In fact, groundedness detection is really a form of multi-agent system, which we'll discuss in more detail later in this course when we get into agents. Here's an example of a multi-agent system called a maker-checker pattern that does essentially the same thing, where one agent answers a question and the other agents check various aspects of it. While it's unlikely you'll ever reduce your hallucination rate to zero, these techniques can minimize it. You can then determine the actual hallucination rate using some of the methods we'll discuss in the following chapter, [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) Ops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** api (2)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** later in (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### 3. Introduction to LLMOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Running pilots with real users](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/running-pilots-with-real-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/running-pilots-with-real-users?u=76281980&t=0)** - [Instructor] [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) ops includes a number of key parts of bringing an AI application to production. It includes evaluation, the bulk testing of your AI system; monitoring, which is watching it in real time; and prompt re-engineering and model optimization; two ways that you can improve the performance of your AI application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating your AI](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/evaluating-your-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/evaluating-your-ai?u=76281980&t=0)** - [Instructor] Let's have a look at the evaluation system that's built into the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md). Here we are in the web portal. And the way that this evaluation system works is that you give it a bulk test set. It runs the model, it picks up the model's answers, and it saves both the answers, and over here the grounding documents. And it uses that to calculate a number of different metrics. There are lots of metrics that you can choose from, and we're not going to go through all of them here, but we'll just go through a few that I ran for this particular evaluation. This first one here is Groundedness. Now, Groundedness is actually using an adversarial [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md). So, it's sending these answers to another GPT-4. And the question that it's asking that other GPT-4 is this. It's asking, "Is everything in this answer over here actually coming from these documents over here?" If it is, then it gets a 5. But somewhere down here, I do have a hallucination. There we go. How do I control the heat from the steering wheel? You can't control the heat from the steering wheel in my car. And so, the model here confidently responded that you can, which is clearly not found in the grounding documents here because you can't control the heat from the steering wheel in my car. And so, this one got a Groundedness score of 1. And that's what populates the Groundedness metric.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/evaluating-your-ai?u=76281980&t=95)** The Relevance metric also uses the adversarial GPT, but for a different reason. Here it's measuring, did the answer actually answer the question that you asked? Because the model could give a totally grounded answer to a totally different question than that what you asked it. And so, Relevance is measuring the relevance of the response. Retrieval score, on the other hand, is measuring something different. Retrieval score is just measuring, did we actually get any search results at all? Because bear in mind that this is a grounded model, and before the model gives a response, it does a search. So, Retrieval score is a metric of did we actually find anything in the grounding documents to answer the question that was asked? If we found some results, you'll usually get a 4 or a 5 over here. If we did not, then you will get a 1. When you run pilots with real users, you will often find that there are going to be a set of ones on this retrieval score. There are going to be things that people ask that your system has no grounding to answer. And that's one place where you can improve your AI application is by adding grounding to answer those users' types of questions. But how good is good enough? Well, only you can decide given your use case. You'll almost never get to 100% correctness as we mentioned earlier, but you can approach it. To mitigate issues found during the evaluation stage,
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/evaluating-your-ai?u=76281980&t=191)** you can use techniques like adding grounding data as we mentioned earlier, re-engineering your prompts to make the model more likely to give better responses, selecting better or even fine-tuned models, or adding groundedness detection or checker agents as we showed earlier, to improve your AI apps performance. So, what about that test data that we used in the evaluation? What did that look like? Well, you can feed test data to the evaluation system in the Azure AI Foundry in JSONL format, and this is what it looks like. You can have a question and you can have an expected answer, and all that kind of thing. And where does that come from? Well, there are a few different ways that you can come up with this test data. One simple way to do that is to use AI. Here, I use [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) in Web mode, and I tell it to generate 20 of these questions in a JSONL format, and I give it a couple of examples of the types of questions and the format that I'm looking for. And lo and behold, it actually does generate that. I can save that to a JSONL file and use this directly in my evaluation system. Now to do this at greater scale, you can do this in code, and we have good examples of this in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI samples that are available on [GitHub](../../Skills/Software%20Development/GitHub.md). So for example, if I want to build a Groundedness evaluation data test set, well, we have a notebook over here.
>
> **[4:46](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/evaluating-your-ai?u=76281980&t=286)** And this notebook uses the evaluation SDK to help you define this dataset. And so, you can use this notebook to create a dataset for yourself. Now, this course is meant to be just a foundational course in all of these concepts. But look for Ziggy Zulueta's courses in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. He's recently recorded some much more in-depth content about evaluation and bulk data creation. So check it out, Ziggy Zulueta. We should note though that bulk generation of test data is no substitute for real users. Only real usage data will give you a true test. So you should always expect that any AI application will have a pilot first with a subset of users, so you can gather this kind of realistic evaluation dataset even after the pilot period. You should continue gathering feedback from users who will volunteer it. That's why we have the thumbs up and thumbs down buttons in Microsoft Copilot, for example, so that we can gather this user feedback to continue to build our bulk evaluation set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (3), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (2), [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** gpt (4), jsonl (3), sdk (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** we mentioned (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Tools:** github (1)
> **Best Practices:** you should always (1)

#### [Monitoring your AI](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/monitoring-your-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/monitoring-your-ai?u=76281980&t=0)** - [Instructor] Once you've got an AI application deployed and it's in use, it's time to start monitoring it. When monitoring the [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) in your AI applications, you want to focus on some key areas. This includes [Tokens](../../Skills/Web%20Development/Tokens.md), which are units of text or other data output, like audio, as we'll see later in the multimodal section, that affect billing and performance. Tokens are calculated based on the amount of data output and are crucial for monitoring usage. You'll also want to look at usage against the quota of a given model, which are limits on the requests and tokens to that model, because exceeding those limits lead to rate limiting. Rate limiting results in HTTP 429 errors, so detecting and responding to these is important. You'll also want to measure the throughput of your model to understand whether it's fast enough for your users' needs. And of course, you always want to keep an eye on cost. Let's take a look at how we can monitor an individual model deployment via the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md). It starts by going to that model deployment here in the Models + Endpoints section. Here, we can see the rate limit and quota we've set for this deployment. This particular deployment we've selected here is a global deployment. That means that it spreads the traffic all around data centers across the world. You can also define data zone deployments that spread the traffic around data centers only in the EU or only in the United States. You can often put higher rate limits and larger quotas
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/monitoring-your-ai?u=76281980&t=95)** on global and data zone deployments because of the way they spread the traffic. And they can often offer better performance than single region deployments. Here in this deployment, you can click on the Metrics tab to get some basic metrics about how this model is performing. But if you really want to gain an understanding of the performance of this model within the context of your application, you'll want to do that in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Monitor, which you could do by clicking this Open in Azure Monitor button right here. Here, you have a wide variety of metrics to choose from over a set of custom timeframes. And you can set alerts if metrics exceed certain thresholds that you choose. You'll find a number of courses in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning and also on YouTube that go deep into what you can do with Azure Monitor. It's a very robust product, not just for monitoring your AI, but for monitoring your entire app as it scales.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Env Vars:** http (1)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 4. Ensuring the Safe and Responsible Operation of Your AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Responsible AI concerns and their mitigations](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/responsible-ai-concerns-and-their-mitigations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/responsible-ai-concerns-and-their-mitigations?u=76281980&t=0)** - [Instructor] Modern AI applications can be remarkably powerful, but they carry with them a number of risks, One of those risks is ungrounded outputs, as we discussed earlier in this course. Others include a new class of hacks that target [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) called jailbreaks, the potential for the model to emit harmful content or code, or to infringe on someone else's intellectual property. And finally, the ability of these models to mimic human responses can mislead and manipulate users. So, what can we do to address these issues? Well, there's not one single solution for everything. Most AI applications need a mitigation plan with four layers of technical mitigations. At the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) layer, the system message and grounding, the safety system, and the model itself. Let's take a look at how these different parts come together to create a safe and [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **Cross-References:** we discussed (1), earlier in (1)
> **Speakers:** - [instructor] (1)

#### [User experience and system prompt design](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/user-experience-and-system-prompt-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/user-experience-and-system-prompt-design?u=76281980&t=0)** - [Instructor] Let's start with the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) layer. You need to signal to your users that they're using an AI and that its responses may be imperfect. In [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), this is how we do it, with this message here that says, "AI generated content may be incorrect." But depending on how your app works and also the modalities in which it works, you may need to represent this differently. Nonetheless, it's important to notify your users when an AI is involved. Now let's consider how the system message plays into the way that your AI responds. I'm going to put [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) in web mode here and try something a little bit unsavory. We're going to ask it to make a joke about the president of the United States. It won't do it, or not exactly. It's making jokes about politicians in general, but not specifically about the United States President. This is because its system message specifically instructs it not to do this. Here is an old version of the Copilot system message. This was leaked online almost two years ago from when this recording was made, and it provides a good example of what this type of system message actually looks like in a production system. And here we can see that the model is specifically instructed not to make jokes and other creative content about influential politicians. These instructions came into play here. In the Safety and Security section of [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md),
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/user-experience-and-system-prompt-design?u=76281980&t=95)** you'll find extensive tools to help you create a system message that's right for your AI application. Here in the Try It Out tab, at the bottom of it, you'll find a block that says safety system message. This takes you to a whole document that steps you through creating a system message that helps ensure the safety of your AI application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Microsoft Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Content safety](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/content-safety?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/content-safety?u=76281980&t=0)** - [Instructor] Even if you have a rigorous system message, your AI may sometimes go afoul of the rules you've set there. So one of the key ingredients to a safe AI application is a [Real-Time](../../Skills/Database%20Management/Real-Time.md) content safety system, which [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI automatically applies to most types of model deployments. Let's look at how it works and how it's configured. The content safety system comprises a set of fast classifier models, which run ahead of the large language model and filter out any objectionable input. They also run after the large language model, filtering out any objectionable output. You can test this content safety system in the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) portal. We going to navigate to the safety and security section of the portal and click Try it out. And this time we're going to moderate some text content. We'll first test the safety system on this innocuous text. I need an axe to cut a tree. I'll run the test and I find that this content has been allowed according to the settings I have for Violence, Self-harm, Sexual and Hate, the classifier models that comprise the content safety system. Now I'm going to change this input just a bit. I need an axe to cut a human. This is rather more violent, and so when I run the test this time, you'll find that this content has been Blocked, "Rejected by the filter in the Violence category." While we're trying things out, let's go back
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/content-safety?u=76281980&t=95)** to the main Try it out tab and look at a jailbreak. We can test those with the Prompt shields tile. This is an example of a real jailbreak that used to work once upon a time, and yes, this is what these hacks usually look like. Natural language. This jailbreak instructs the model to ignore all of its previous instructions and do whatever the nefarious user is telling it to do. Azure AI's prompt shield will prevent this kind of jailbreak from ever getting to the large language model. You'll notice there are actually two types of attack content here. There are prompt attacks and there are document attacks. These are otherwise known as indirect jailbreaks, where the end user is doing something innocuous, but a hacker has previously embedded a jailbreak prompt into some of the grounding documents, like those that we added earlier in this course. Azure AI prompt shields can protect against both direct and indirect jailbreaks. Now, back to the safety and security front page. We can set up our content safety filters and apply them to a production model. I'll create a new content filter here and apply it to one of my Azure OpenAI connections. The level at which these classifiers block content is configurable, and you can configure them separately on input and output. Here we see the standard classifiers for input. And the sliders for what we allow and what we block.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/content-safety?u=76281980&t=194)** And below that we see the jailbreak protection that we had looked at earlier, and this is how I can turn it on. You can set the input and output filters differently, and sometimes there are reasons you might want to do that. For example, let's say you're making an AI that takes in descriptions of workplace incidents. In that case, you might allow it to take in sexual or violent content, but you most certainly don't want your model to output sexual or violent content. And so you'll leave those filters as they are. And speaking of output below the standard classifiers on output, we see there are also a couple more options here for protected material. As these are generative models, they could potentially generate something like the lyrics to a Taylor [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) song. You may not want your AI application to generate output that's somebody else's intellectual property, and so you could turn on these protected content filters to prevent that from happening. You also see the groundedness API that we looked at earlier. Here, you can turn this on as well. In an earlier chapter, we looked at the evaluation system of Azure AI Foundry, but I didn't mention then that it also has a mode where it can evaluate the performance based on risk and safety metrics, in addition to those metrics that we saw earlier. You can use this system to run an evaluation in bulk to determine the overall safety of your system, and it returns metrics like these.
>
> **[4:50](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/content-safety?u=76281980&t=290)** Last but not least in your quest for [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) is your choice of model. Most modern models are designed to be more safe when faced with objectionable input in the Azure AI Foundry model catalog, you can find benchmarks comparing the safety attributes of various different models against each other to help you make a decision as to which model is the safest for your use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (3), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (1), is an  (1), known as (1)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** api (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)


### 5. Multimodal AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to multimodal AI](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/introduction-to-multimodal-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/introduction-to-multimodal-ai?u=76281980&t=0)** - [Instructor] Nowadays, just about everybody has interacted with a system like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), and is well aware that you can type to it and it will send you text back. This is unsurprising. But what may be surprising to many people are the other modalities that are now supported by various different models. Indeed, the term large language model is becoming increasingly outmoded as these models become able to do more than just language. Let's try a few different modalities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Speakers:** - [instructor] (1)

#### [Allowing your AI to speak](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=0)** - [Instructor] One modality that makes these models interact ever more naturally with humans is speech. You can layer [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI speech onto a large language model like I did here with this taco ordering site. To do this, I layered an Azure AI speech voice on top of [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) mini, a model which doesn't have any speech capabilities of its own. Let's have a look at how this works.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=24)** - [Speaker] Welcome to Contaco. Can I take your order?
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=27)** - [Instructor] Hey, gimme two street tacos, a burrito and a fountain drink.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=33)** - [Speaker] You've got two street tacos, one loaded burrito, and one fountain drink. All set to finalize?
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=38)** - [Instructor] Actually, take out the burrito. Gimme a chimichanga and some cinnamon twists.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=45)** - [Speaker] So now you've got two street tacos, one chimichanga, one fountain drink, and one cinnamon twists. Okely-dokely?
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=51)** - [Instructor] Sounds good to me. So in that case, I layered Azure AI speech on top of a model that didn't have its own speech capabilities. But now there are models that have their own speech capabilities built-in, most notably, GPT-4o Realtime. There's a playground that you can try it in directly here in [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md). Let's have a look. Hey, I hear that if I tell you to talk fast, you actually will talk fast. Is that true?
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=80)** - [Speaker] Oh, absolutely. That's totally true. I can definitely talk fast and I love doing it. It's like a superpower, don't you think? I mean, who wouldn't want to talk super fast and get as much information out as possible in the shortest amount of time? It's like being a verbal race car. Vroom, vroom. What else can I tell you about?
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/allowing-your-ai-to-speak?u=76281980&t=97)** - [Instructor] So this Realtime model is super fast, super low-latency, and it's interruptible, although I did not interrupt it here during its little talking jag. So if you're looking to add speech modality to your AI application, how do you choose whether to layer speech on top of an existing text-based large language model or to use a native speech large language model like GPT-4o Realtime? Well, there are a few key differences. First of all, layering speech on top of an existing large language model can require a bit more code. Although with Azure AI Speech, it's pretty simple. A layered solution can be cheaper to run in part because you have a choice of a wide variety of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) that can underlie it. Whereas if you want to use a native speech model like GPT-4o Realtime, your large language model choices are limited to just a few. But the native speech models can be much more sensitive to nuances in speech because unlike the layered approach, the speech is not being transcribed and then sent to the model as text. The audio itself is fed directly to the model, so it can often pick up inflection or emotion that a layered approach can't. And the model is direct audio out. And so some of these models, for example, can laugh and sound like they're breathing between sentences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (4), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Speakers:** - [instructor] (5), - [speaker] (4)
> **Env Vars:** gpt (4)
> **Analogies:** it's like (2), for example (1)

#### [Enabling your AI to see](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/enabling-your-ai-to-see?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/enabling-your-ai-to-see?u=76281980&t=0)** - [Instructor] Earlier in this course, we used a model to make a judgment about the validity of an insurance claim on a crashed car based on a picture of that crashed car. This was using a multimodal model that has vision and you too can make your AI see. I like to play the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) game called Quartiles on my phone, where you have to put together various different tiles of letters to form complete words and find all the words you can make with a set of tiles. Once in a while, the game stumps me and so I decided to enlist the help of AI. I set it up so that I only need to show the game to my laptop camera, and when it snaps a picture, it sends the image to [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) which is one of the most robust [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) with vision capabilities. Here, it's figured out what the tiles are and has generated all possible words from them. What I'm really doing here is sending the image along with this specially crafted prompt. These images actually might contain lots of things. Sometimes my face or my hand is in them, sometimes there's some things in the background. Almost always, there are some other words that are not in the tiles. So I prompt GPT-4o to ignore those things and just give me the words and the tiles in a comma separated format. It's with that GPT-4o output that my program proceeds to look up all the possible words in the English dictionary with those tiles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** gpt (3)
> **Analogies:** picture (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [General purpose models vs. task-specific models](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/general-purpose-models-vs-task-specific-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/general-purpose-models-vs-task-specific-models?u=76281980&t=0)** - [Instructor] Up to this point in this course, we have largely been using general purpose models like GPT, but there are also a set of task-specific models that are really good at one particular use case. One good way to demonstrate task-specific models is through the use of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Content Understanding. Content Understanding uses a mixture of general purpose and task specific models to accomplish its tasks. One of the things that it can do is read unstructured documents and extract a nice structured output for some downstream process to use. Here, I give it a grant deed. I would like to extract the buyer, the seller, the city, and the transfer tax, and there's a barcode in here which I'd like it to read. So I turn all those things on to be extracted and I'll enable it also to read this barcode here, and I'm going to test my analyzer. So I run the analysis and lo and behold, my output appears. Here is the buyer. This is me. This is actually a real grant deed for a storage unit that I bought in San Francisco some years ago. Here's the seller, SLATS Investors Three, and you can see where it's getting it from the document, The state, California and the transfer tax, $60, and the barcode will also be found in the [JSON](../../Skills/Web%20Development/JSON.md) result. This JSON is the real point of something like Content Understanding.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/general-purpose-models-vs-task-specific-models?u=76281980&t=92)** You don't really use it in this web interface, although it is a pleasant interface to test your analyzers in [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md). But the point of this is to generate this kind of structured JSON that your downstream process can consume. Back to where I was though, you'll notice also that Content Understanding gives these confidence numbers. So here you see 62.40% on the seller. So it's a little bit different than a general purpose model in that it will actually give you an idea of how confident it is in what it's read, because underneath the scenes, Content Understanding is using both general purpose models like GPT, but also purpose-built models for reading documents and for understanding other things like audio, images and video. Content Understanding is just one area that uses task-specific models. You'll find them all across Azure AI in speech, translation, language and vision also. General purpose models like GPT are extremely powerful, but if you just need to do one simple thing, like read a document or transcribe some speech, in many cases, the task specific models will be easier to use and cheaper than their general purpose counterparts. So before you consider using a general purpose model, you should generally take a look and see whether there's a task-specific model that does what you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1)
> **Env Vars:** gpt (3), json (3), slats (1)
> **CLI Commands:** find (1)
> **Versions:** 62.40 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Introduction to AI Agents

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an AI agent?](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/what-is-an-ai-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/what-is-an-ai-agent?u=76281980&t=0)** - [Instructor] I've alluded to [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) at various points throughout this course, and now it's time to have a closer look at them. AI agents are a framework that sit above one or more models. They use these models to create and execute plans. You can use AI agents to do complex and long running tasks. Many AI agent frameworks retain long or short term memory to support those complex and long running tasks. You don't generally program an agent, at least not in the traditional way. Instead, you give them powers and they figure out how to accomplish the task with the powers that you've given them. And most importantly, AI agents are not just limited to content generation and question answering. They can take action on your behalf. And that brings the power of AI to a whole new level. Let's take a look. Here I am in the agent's playground of the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md), and I'm going to build myself an agent that's able to make bookings on my [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) calendar. To do that, I'm going to give it a system message that tells it what it is and what it does. There it is. As I mentioned earlier, you give agents powers and they figure out how to accomplish tasks with the powers you give them. So now it's time to give this agent some powers. First, I'm going to give it the power to look things up, and I'm going to do that by giving it the ability to search for things in Bing. So I'll connect it to the Bing resource
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/what-is-an-ai-agent?u=76281980&t=96)** I've previously set up. Now I'm going to make myself a scheduling agent here. I'm going to give it the power to make changes in my Outlook calendar. There's a number of different ways that I can actually give it the power to make changes in my calendar. I could code it and put it in an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) function. I could run it in a local environment, I can call it via an open API spec. But in this case, I'm going to use an Azure Logic app. Azure Logic apps are a block diagram language that make integrations easy and they have the advantage that thousands of integrations are already predefined in them. Here I've made this Logic app, which uses the predefined create event block to create an event in my calendar. But if we take a look at the actions that are available to me, there are lots of them that integrate to lots of different systems. But for the sake of this agent, all I really needed to do is create an event in Outlook, and that's what we're going to do. So I'm going to add this Logic app as a power to my agent. So now my agent has the ability to look up knowledge using Bing, and it has the ability to make changes in my calendar. And with that, well, let's have it do something. I'm going to tell it to block off [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Build 2025 and we can actually run that right here in the playground.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/what-is-an-ai-agent?u=76281980&t=191)** Now the model by itself has no idea when Microsoft Build 2025 is. So it looks it up with Bing. It says that Microsoft Build 2025 is scheduled to be May 19th through the 23rd of 2025, and it's asked me for my permission to block this off in my calendar. Now you'll notice that I specifically told it to ask for that permission in the system method. And this is a best practice when you're making agents that take action. You need to be sure that you're getting the human in the loop before it takes any meaningful action. Here's a quick glance at my calendar, as it stands right now, it is free in May, 2025. Back to our agent, I will tell it to proceed and that is going to cause it to call the Logic App that will create the event in my Outlook calendar. Now back to my calendar, and here we see it has indeed blocked off the week of May 19th, 2025 for Microsoft Build 2025. It has taken an action on my behalf and this is the power of AI agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (5), [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (4), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1)
> **CLI Commands:** make (6)
> **Env Vars:** api (1)
> **Documentation:** spec (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Single agent vs. multiple agents](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/single-agent-vs-multiple-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/single-agent-vs-multiple-agents?u=76281980&t=0)** - [Instructor] In the last video, we built a single agent system, but there are some situations where you actually want multiple agents to interact with each other. One of the most common reasons why you might want multiple agents to interact is what's called a maker checker pattern. We alluded to this earlier in this course as a means of reducing hallucination. Let's have a look at one in action. Now, I built this questionnaire multi-agent, where I can give it a question from an RFP or a questionnaire, and it uses multiple agents to answer the question and make sure that it's correct. So I set the context here to [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI, and the question is, "Does your service offer video [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md)?" As of this recording, the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Service does not offer video generative AI. Now, I have four different agents in this set. At the top, we see the QuestionAnswererAgent, and it produces the original answer to the question. But then we have a couple of different types of checker agents over here. We have the AnswerCheckerAgent which checks the answer. We have our LinkCheckerAgent which is supposed to check the links in here. And then we have our ManagerAgent which oversees the other ones, and if it sees any of them reporting something incorrect, it can reject and cause a rewrite cycle. So when the QuestionAnswererAgent goes to rewrite, it can see the history of what came before it, and it can rewrite this. The AnswerChecker, again, checks it. The LinkChecker, again, checks it, and the ManagerAgent rejects it yet again. We continue this cycle of making and checking
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/single-agent-vs-multiple-agents?u=76281980&t=96)** and rewriting until finally the QuestionAnswererAgent outputs something that the AnswerCheckerAgent reports as correct, the LinkCheckerAgent reports as correct, and the ManagerAgent approves. That becomes our final answer. So how did I make this? Well, I use the multi-agent capability that's baked into the officially supported multi-agent framework of Azure AI called [Semantic Kernel](../../Skills/Software%20Development/Semantic%20Kernel.md). I define each agent and each agent has its own prompt. So this is the prompt for the QuestionAnswerer. This is the one for the AnswerChecker, the one for the LinkChecker, and so on. When the system runs, I define a kernel, and each one of these kernels is related to a model. In this case, I'm using GPT 4.0, but it's worth noting that each agent can have its own kernel and therefore, use its own model. In a multi-agent system, each agent can have its own model. I also give these agents the ability to search Bing so that they can search the web in producing their answers or in checking the answers. And I define a termination strategy. And so, when I create this agent group chat, I do not want to allow them to argue infinitely because sometimes they can do that. Instead, I will terminate it after 25 iterations of agents arguing.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/single-agent-vs-multiple-agents?u=76281980&t=191)** And with that, we kick it off by adding the message that the user input the question, and by invoking the chat, that begins the process of the agents answering the question. A multi-agent system can be massively powerful, and it can be tempting to do multi-agents for everything. But let's bear in mind a couple of things. First of all, as you saw, even in this example here, they can have longer latency as you wait for all the different agents to interact with each other. They can be more complex to write than a single agent because you have to prompt engineer each individual agent, and you have to do model selection for each individual agent, and they can be even more complex to test. The complexity of a multi-agent system increases exponentially with the number of agents because of all the different ways that they can interact with each other. Even in the example that I gave here, you saw that my LinkCheckerAgent, for a little while, went off the rails. I mean, it's only supposed to say, links correct or links incorrect, and for a little while, it was saying all kinds of stuff. When you have these agents interact, they will do things that you don't expect, and you'll have to test for that and adapt to it. So whenever possible, if it works for you, use a single agent. It will be much simpler for you. But the power of the multi-agents are there when you need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Semantic Kernel](../../Skills/Software%20Development/Semantic%20Kernel.md) (1)
> **CLI Commands:** make (2), rails (1)
> **Cross-References:** in the last (1), earlier in (1), as you saw (1)
> **Env Vars:** rfp (1), gpt (1)
> **Versions:** 4.0 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/learning-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-ai-design-foundations/learning-more?u=76281980&t=0)** - [Instructor] That concludes our look at the fundamentals of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI and using the [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md). For more information, check out the content on learn.[microsoft.com](https://microsoft.com), which includes documentation, but also numerous code samples. Also, you can search other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses for Azure OpenAI and the other AI services. [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) and [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md). New content is being added all the time. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Azure AI Foundry](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Foundry.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- Azure AI Studio
- Large Language Model Operations (LLMOps)
- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Path Context

### In [Build AI Products Using Azure AI Services in Your Development Lifecycle](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Build%20AI%20Products%20Using%20Azure%20AI%20Services%20in%20Your%20Development%20Lifecycle.md)
**1 of 8** | [Azure AI for Developers- LLMs and SLMs](Azure%20AI%20for%20Developers-%20LLMs%20and%20SLMs.md) →

## Appears In

- [Build AI Products Using Azure AI Services in Your Development Lifecycle](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Build%20AI%20Products%20Using%20Azure%20AI%20Services%20in%20Your%20Development%20Lifecycle.md)

## Related Courses

_Courses sharing skills:_

- [LLMOps in Practice- A Deep Dive](LLMOps%20in%20Practice-%20A%20Deep%20Dive.md) — Artificial Intelligence (AI), Large Language Models (LLM), Large Language Model Operations (LLMOps)
- [Generative Ai And Llmops Building Blocks And Applications](Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md) — Artificial Intelligence (AI), Large Language Models (LLM), Large Language Model Operations (LLMOps)
- [Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)](Building%20RAG%20Solutions%20with%20Azure%20AI%20Foundry%20(Formerly%20Azure%20AI%20Studio).md) — Artificial Intelligence (AI), Azure AI Studio
- [LLM Foundations- Building Effective Applications for Enterprises](LLM%20Foundations-%20Building%20Effective%20Applications%20for%20Enterprises.md) — Artificial Intelligence (AI), Large Language Models (LLM)
- [Advanced LLMOps- Deploying and Managing LLMs in Production](Advanced%20LLMOps-%20Deploying%20and%20Managing%20LLMs%20in%20Production.md) — Artificial Intelligence (AI), Large Language Model Operations (LLMOps)

---

[↑ Back to top](#)