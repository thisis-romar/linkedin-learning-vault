---
type: course
cssclasses:
  - lle-course
slug: rag-and-fine-tuning-explained
url: "https://www.linkedin.com/learning/rag-and-fine-tuning-explained"
duration_minutes: 20
duration: 20m
updated: 6/25/2024
learners: 20740
skills:
  - Generative AI
  - AI Software Development
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEwj8XFayAkAQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719268835474?e=2147483647&amp;v=beta&amp;t=76S-SQZEYeVPrCVjI0S4FGqmNtlzjFbWkVahJ-XDRbY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Understanding Generative AI for Tech Leaders]]'
  - '[[Master Retrieval-Augmented Generation (RAG)]]'
prev_courses:
  - '[[Building a Generative AI Tech Strategy]]'
  - null
next_courses:
  - '[[Introduction to Multimodal Prompting for Generative AI]]'
  - '[[Vector Databases in Practice- Deep Dive]]'
path_nav: '[{"path":"Understanding Generative AI for Tech Leaders","position":20,"total":22,"prev":"Building a Generative AI Tech Strategy","next":"Introduction to Multimodal Prompting for Generative AI"},{"path":"Master Retrieval-Augmented Generation (RAG)","position":1,"total":7,"prev":null,"next":"Vector Databases in Practice- Deep Dive"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/it-help-desk
  - topic/database-management
  - topic/software-development
  - skill/generative-ai
  - skill/ai-software-development
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/RAG%20and%20Fine-Tuning%20Explained.md)

![RAG and Fine-Tuning Explained](https://media.licdn.com/dms/image/v2/D560DAQEwj8XFayAkAQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719268835474?e=2147483647&amp;v=beta&amp;t=76S-SQZEYeVPrCVjI0S4FGqmNtlzjFbWkVahJ-XDRbY)

# RAG and Fine-Tuning Explained

> Successful AI integration in mission-critical systems requires data accuracy. The current best method for this is using Retrieval Augmented Generation (RAG) in combination with fine-tuned language models. In this short course you’ll get a high-level breakdown of how RAG and fine-tuning works, when they are useful, and where pitfalls are for these approaches.

> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained) | 20m | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [RAG, fine-tuning, and the enterprise](#rag-fine-tuning-and-the-enterprise)
- [**1. RAG and Fine-Tuning**](#1-rag-and-fine-tuning) (8 videos)
  - [How LLMs work](#how-llms-work)
  - [Context makes all the difference](#context-makes-all-the-difference)
  - [RAG: Retrieval Augmented Generation](#rag-retrieval-augmented-generation)
  - [The RAG flow](#the-rag-flow)
  - [Embeddings: Helping AI understand data](#embeddings-helping-ai-understand-data)
  - [Knowledge graphs](#knowledge-graphs)
  - [Fine-tuning](#fine-tuning)
  - [RAFT: RAG with fine-tuning](#raft-rag-with-fine-tuning)
- [**2. Conclusion**](#2-conclusion) (1 videos)
  - [Tying it all together](#tying-it-all-together)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### RAG, fine-tuning, and the enterprise
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=0)** - What does this rag and some fine-tuning screwdrivers have to do with AI?
>
> **[0:04](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=4)** Well, nothing directly, but they effectively illustrate both one of the biggest challenges with large language models and how RAG, retrieval-augmented generation, and fine-tuning of LLMs can help address it.
>
> **[0:16](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=16)** The challenge before us as we start implementing AI in the form of LLMs into enterprise applications is how to first ground the LLM in real-world enterprise data, and second, ensure it provides the right data in return.
>
> **[0:30](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=30)** Like, actual information on RAG and fine-tuning, and not an actual rag and fine-tuning screwdrivers.
>
> **[0:37](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=37)** RAG and fine-tuning are the current best path forward for AI in the enterprise, and in this course, we'll take a high-level conceptual approach to these and related topics to help make sense of it all.
>
> **[0:47](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=47)** Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** rag (5), ai (3), data (2), [[Large Language Models (LLM)|Large language models]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1)
> **Env Vars:** rag (3), llm (1)
> **CLI Commands:** make (1)
> **Speakers:** - what (1)


### 1. RAG and Fine-Tuning

[↑ Back to Table of Contents](#table-of-contents)

#### How LLMs work
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=0)** - To understand rag and fine tuning.
>
> **[0:02](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=2)** It's important to understand where these concepts came from, and that starts with understanding how LLMs work at a practical level.
>
> **[0:08](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=8)** When you interact with an LLM through an app like ChatGPT, it feels as if you're chatting with a real person.
>
> **[0:14](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=14)** You ask a question, it responds, then you carry on a conversation.
>
> **[0:18](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=18)** This back and forth produces a feeling of the LLM being actually intelligent and having reasoning capabilities.
>
> **[0:24](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=24)** So, when the output from the LLM invariably becomes imprecise or even flat out wrong, but it's still 100% confident, it's easy to think the system is lying, or as we often describe it, hallucinating.
>
> **[0:37](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=37)** This entire mental model for LLMs lead us astray and makes it difficult to work with LLMs and talk about how to use them efficiently.
>
> **[0:45](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=45)** So, let's start over.
>
> **[0:47](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=47)** Large language models implemented as chat applications are advanced, spicy auto-complete systems.
>
> **[0:53](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=53)** When you open a new chat, the LLM already has a starting message to work off, a so-called system message.
>
> **[1:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=60)** This is effectively the start of a document you'll work on with the LLM.
>
> **[1:05](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=65)** When I put in a prompt, for example, "What ingredients do I need to bake a cake?", the LLM reads the system message, then my message, and then auto completes the rest.
>
> **[1:15](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=75)** In return, I get what looks like an ingredient list for a cake, but it's actually, a probabilistic auto completion of the entire document so far.
>
> **[1:25](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=85)** The important thing to understand here is that the LLM doesn't look up information about cake recipes before answering me.
>
> **[1:32](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=92)** Instead, it uses its enormously complex multidimensional map of our language to auto complete the document, and because millions of cake recipes were part of the training data, and most cake recipes are slight variations over a standard set of ingredients, the chance of it producing an accurate list of ingredients for a generic cake, is quite high.
>
> **[1:55](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=115)** In other words, there's no intelligence here, at least not in the way we understand the term intelligence.
>
> **[2:01](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=121)** Instead, this magical ability to answer my question is actually just super fancy math.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (7), rag (1), [[Fine Tuning]] (1), [[ChatGPT]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** llm (7)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - to (1)

#### Context makes all the difference
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=0)** - The big "aha" moment for many of us when we start working with LLMs is discovering that providing context to the LLM makes all the difference.
>
> **[0:08](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=8)** This isn't something we explicitly think about or even consciously discover.
>
> **[0:12](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=12)** It's something we intuitively take advantage of in our interactions with LLMs because it's something we do naturally in our everyday conversations.
>
> **[0:21](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=21)** When I want to bake a cake, I don't start out by saying, "What's the ingredients for cake?"
>
> **[0:26](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=26)** I specify what type of cake I want to bake.
>
> **[0:28](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=28)** I provide additional context by saying something like, "What's the ingredients for a carrot cake?"
>
> **[0:35](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=35)** The carrot is the key context here.
>
> **[0:38](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=38)** When I add that context to ChatGPT, the LLM rereads everything, from the system message through my initial request and the response all the way down to this new context, and responds with a list of carrot cake ingredients.
>
> **[0:51](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=51)** This is why so-called "prompt engineering" works.
>
> **[0:55](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=55)** The more context we provide to the LLM, the more likely it is to auto complete the chat with something in context.
>
> **[1:02](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=62)** It's also why cutting and pasting a document or webpage or video transcript into an LLM and then asking it for a summary works really well.
>
> **[1:09](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=69)** Once you provide text as context, the LLM augments that text in response, which to us, feels as if it's reading the content and summarizing it to our specifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (5), [[ChatGPT]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** llm (5)
> **Speakers:** - the (1)

#### RAG: Retrieval Augmented Generation
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=0)** - People tend to treat chat-based LLM systems as a combination of a search engine and a knowledgeable and skilled assistant.
>
> **[0:07](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=7)** They ask the LLM to answer questions or ask you to perform some task and often combine the two.
>
> **[0:12](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=12)** The trouble is, and I explained this earlier, the LLM isn't a knowledge lookup system, it's a language transformer.
>
> **[0:19](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=19)** It doesn't actually know anything, it just has this complex enough map of our language to be able to auto complete most sentences in a way that is mostly correct, as long as the pattern of the information was readily available and prevalent in its training data.
>
> **[0:34](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=34)** This is a challenge because for us users of AI systems, incorrect information presented with 100% confidence reads at best, like hallucination, and at worst, like a blatant lie.
>
> **[0:48](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=48)** The good news is we already know how to make the output far more accurate.
>
> **[0:52](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=52)** Remember, context makes all the difference.
>
> **[0:55](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=55)** So if instead of immediately answering, the AI service were to retrieve some information from a knowledge base, add that information into its context, and then generate a response based on that new context, that response would be far more accurate.
>
> **[1:10](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=70)** An early version of this concept was introduced with the Bing AI system.
>
> **[1:15](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=75)** When you ask a question, it goes and searches the web for relevant information, then uses that information to provide the answer.
>
> **[1:22](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=82)** It retrieved information, augmented the data, then generated a response.
>
> **[1:27](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=87)** Retrieval, augmented, generation.
>
> **[1:30](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=90)** This right here is the light bulb moment.
>
> **[1:32](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=92)** You see, this approach isn't confined to search engines.
>
> **[1:35](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=95)** We can build LLM systems that can retrieve data from any structured data source and augment it in whatever way we specify, so it generates responses that fit our needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (4), data (4), ai (3), [[Search]] (2), web (1)
> **Env Vars:** llm (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - people (1)

#### The RAG flow
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=0)** - As a flow chart, this is how a RAG system works.
>
> **[0:03](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=3)** When a request comes in, an LLM is used to parse the meaning of the request and transform it into a query for whatever data source and knowledge-based it's attached to.
>
> **[0:12](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=12)** That could be a standard database accessed via an API or an array of embeddings or a vector database, or even a cookbook, and we refer to it as the grounded truth.
>
> **[0:23](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=23)** The LLM functions as a translator, turning the natural language request into a software query.
>
> **[0:30](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=30)** Then the grounded truth data source processes the request and returns the data to the LLM.
>
> **[0:36](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=36)** Now the LLM combines the original request with the newly retrieved data and produces an answer.
>
> **[0:41](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=41)** This process should produce an accurate answer, but because LLMs are probabilistic and non-deterministic, the accuracy can be off.
>
> **[0:50](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=50)** To reduce this risk, it's become fairly standard to add an additional verification loop here by returning the generated response along with the retrieved data to the LLM and asking it to make sure the generated response contains only information from the retrieved data.
>
> **[1:05](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=65)** This loop, which can be repeated as many times as necessary, increases the probability of the LLM producing a more accurate response.
>
> **[1:13](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=73)** So in practical terms, RAG is me giving the LLM a cookbook to reference when I ask for my carrot cake ingredients.
>
> **[1:20](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=80)** If there is a carrot cake recipe in the book, the LLM will, in most cases, give me that ingredient list instead of a probabilistic response.
>
> **[1:28](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=88)** And that's the whole point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (8), data (6), rag (2), database (2), api (1)
> **Env Vars:** llm (8), rag (2), api (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### Embeddings: Helping AI understand data
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=0)** - There's an obvious question in need of an answer here.
>
> **[0:03](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=3)** Let's say I build an AI app, give it a cookbook as a grounded source for RAG, and ask it for a carrot cake recipe.
>
> **[0:09](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=9)** Carrots are very common ingredients, which will be featured in a lot of different recipes.
>
> **[0:14](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=14)** So how does the AI system and the grounded source know to only give me carrot cake recipes, and even what the difference between a carrot cake and a carrot soup is?
>
> **[0:26](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=26)** How does the LLM know the meaning of my request?
>
> **[0:28](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=28)** And how does the ground truth retrieval system know how to find it?
>
> **[0:32](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=32)** This is a really interesting topic warranting several dedicated courses, so I'll only barely scratch the surface here.
>
> **[0:39](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=39)** First off, if we use an LLM with a sufficiently large context window, meaning how much data we can stuff into the current context, we could lean on the LLM's auto-complete feature to figure this out and would do so with an acceptable level of accuracy.
>
> **[0:55](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=55)** Give it the entire book, ask a question about it, and it would retrieve information out of the book and give it to you.
>
> **[1:01](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=61)** But that's neither practical nor scalable.
>
> **[1:03](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=63)** Instead, we need some way of getting the LLM and the grounded truth retrieval system to retrieve only relevant information and ignore the rest.
>
> **[1:12](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=72)** One way to do this is by turning the original data and the request into embeddings, and then compare them to find the matching pairs.
>
> **[1:20](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=80)** Say what now? Let me explain.
>
> **[1:22](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=82)** Using what's called an embeddings model, we can take any string of text and turn it into a series of numerical representations of points and vectors that connect in a multidimensional space.
>
> **[1:34](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=94)** This is a bit hard to make sense of when I just say it, so here's a simplified example of the core concept.
>
> **[1:40](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=100)** First, we take each recipe from a recipe book and place it in its own field in a database.
>
> **[1:45](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=105)** Next, we find a two-dimensional embeddings model where each dimension represents some parameter.
>
> **[1:52](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=112)** Then we give each recipe to the embeddings model and it places the words in the two-dimensional space.
>
> **[1:58](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=118)** This produces a different map of points for each recipe with the key words featured.
>
> **[2:03](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=123)** The embeddings model puts more similar words, like carrot and squash, closer together and dissimilar words, like squash and kohlrabi, further apart.
>
> **[2:12](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=132)** Finally, lines called vectors are drawn between these points to represent the connections between the words in the text.
>
> **[2:20](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=140)** This mathematical representation of the points and vectors now becomes the embeddings for each individual recipe.
>
> **[2:26](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=146)** And we add these back into the database, so we have both the original text and its embeddings in one row.
>
> **[2:33](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=153)** Now we can prompt an AI system with a query like, "How do I make a vegetable cake?"
>
> **[2:38](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=158)** And the AI system will create embeddings from this question using the same embeddings model, and we get a new vector representing the query, in this case, the line between vegetable and cake.
>
> **[2:50](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=170)** We can then use basic math to compare the query embedding against each of the recipe embeddings and we quickly see that some of the recipes are a close match while others are not.
>
> **[3:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=180)** Finally, the AI system returns the original recipe text from the closest matched embeddings as context, and we are back in the RAG flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (5), llm (4), rag (2), data (2), database (2)
> **Env Vars:** llm (4), rag (2)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (2)
> **Speakers:** - there (1)

#### Knowledge graphs
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=0)** - Okay, looking at this embeddings example, you may have spotted an inherent weakness, and it becomes more obvious if we add in a larger data set that includes things that are not related to cooking.
>
> **[0:10](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=10)** In many cases, especially in the enterprise, domain data is expansive and covers many different subject matters, and disciplines, and context.
>
> **[0:17](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=17)** This passes a significant challenge for embeddings because our language is semantically, syntactically, and lexically ambiguous.
>
> **[0:25](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=25)** For example, the same word can mean different things in different contexts.
>
> **[0:30](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=30)** Let me show you, let's say we have one embedding for use, tomato, paste, and another embedding for use, tooth, paste.
>
> **[0:38](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=38)** These embeddings look nothing alike, but there are two common words in there, use and paste.
>
> **[0:44](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=44)** Now let's say the user puts in a very vague prompt, "What paste do I use to make pasta?"
>
> **[0:51](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=51)** Without further context, the embedding system will zero in on the words use and paste and find any embeddings that match.
>
> **[1:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=60)** In return, we get tomato paste and toothpaste.
>
> **[1:04](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=64)** I can think of exactly zero scenarios where both of these responses are correct, but the AI has neither knowledge nor understanding of the data or the query, so it returns both entities and the RAG-based completion becomes some nonsense about how to use toothpaste to add peppermint flavor to your pasta dish or something.
>
> **[1:23](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=83)** The problem here is that while an embedding system can help us identify close matches in language, it has no understanding of the semantic meaning of the connections.
>
> **[1:32](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=92)** Both toothpaste and tomato paste are pastes, but they have very different uses.
>
> **[1:39](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=99)** To address this problem, we can lean on an ancient AI technology called knowledge graphs.
>
> **[1:44](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=104)** Originally invented for search, knowledge graphs add direction and semantic meaning to the vectors connecting the dots in an embeddings map.
>
> **[1:52](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=112)** So rather than having a vector that just says, "This word and this word are connected," the graph says maybe, "This word is part of this word or is used in this context."
>
> **[2:04](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=124)** Remapping our examples using knowledge graphs, we add semantic context by connecting, for example, tomato and paste to cooking with an "is used in" graph and connecting tooth and paste to hygiene using a "is part of" graph.
>
> **[2:19](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=139)** Now, when the system creates a knowledge graph of the query, "What paste do I use to make pasta?"
>
> **[2:24](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=144)** it contains the added graph capturing the context "is used in cooking," and we get only tomato paste as a relevant match.
>
> **[2:33](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=153)** Now seeing this, you may rightfully conclude that we should just use knowledge graphs for RAG all the time, and in practical reality, that's not always possible.
>
> **[2:43](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=163)** In real-world environments, AI systems using RAG draw from a variety of sources, including traditional databases, APIs, embeddings, and advanced knowledge graph vectors.
>
> **[2:53](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=173)** The best option for a particular use case comes down to many variables, including what type of data it is, how much work is involved in transforming the data into, for example, vector embeddings, how often the data updates, et cetera.
>
> **[3:06](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=186)** The typical recommendation is to start with the most basic option, a straight-up database with an API, and explore more advanced options if the results are not satisfactory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Microsoft Word|Word]] (5), [[Knowledge Graphs]] (4), ai (3), rag (3)
> **Env Vars:** rag (3), api (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (3)
> **Speakers:** - okay (1)

#### Fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=0)** - RAG is a powerful approach to improving the accuracy of LLM outputs, but it's not the only one, and it's best used in combination with other approaches, in particular, fine-tuning.
>
> **[0:09](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=9)** Fine-tuning is when you provide a huge list of training examples, a completed exchange, including a system message, a prompt, and a response, to a foundation model to train it to respond to specific types of queries in specific ways.
>
> **[0:23](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=23)** When you have a fine-tuned model, you don't need to provide a complex system message or request a specific behavior every time.
>
> **[0:30](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=30)** Instead, the system has been literally fine-tuned to create responses to fit the patterns in the training examples.
>
> **[0:37](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=37)** Fine-tuning is used to conform chatbot responses to a specific tone, or include predefined information like standard contact support for more information phrases in every response, and to perform specific actions like provide a document or database reference in every response.
>
> **[0:54](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=54)** The challenge with fine-tuning in LLM is you need to create a lot of training data for the fine-tuning to be successful, and then run all of those examples multiple times for the model to conform.
>
> **[1:06](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=66)** And even then, the fine-tuned model doesn't always behave as you intended, so the process involves a lot of trial and testing and error before you get to usable state.
>
> **[1:15](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=75)** That said, for a situation where consistency and responses matters at scale, a fine-tuned model is a good avenue to explore because the fine-tuning reduces the variance in response and gives you direct control over the LLM behavior in a way that foundation models simply do not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (3), rag (1), prompt (1), chatbot (1), database (1)
> **Env Vars:** llm (3), rag (1)
> **Definitions:** is a  (2)
> **Speakers:** - rag (1)

#### RAFT: RAG with fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=0)** - Based on what I've said about RAG and fine tuning so far, you may already intuit that there is a connection here.
>
> **[0:05](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=5)** And that connection has been proven through experimentation and research, so much so that it now has a name, RAFT, Retrieval Augmented Fine-Tuning.
>
> **[0:15](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=15)** RAFT is an answer to the challenge of creating efficient LLM based AI systems that are grounded in specialized domain data like internal enterprise documents.
>
> **[0:24](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=24)** The idea is to first use RAG to fine-tune the LLM on the domain=specific data, so it recognizes and matches the patterns in the data, and then use the resulting raft model in conjunction with RAG to produce better answers that are not only grounded in the domain data, but also conforms to its patterns.
>
> **[0:43](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=43)** The RAFT process leverages the reasoning capabilities of LLM foundation models to create the training data for fine-tuning.
>
> **[0:49](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=49)** It goes something like this, first, create or generate a set of domain-specific questions matching the types of user queries the system will handle.
>
> **[0:58](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=58)** Next, use RAG to retrieve two types of domain documents, oracle docs containing the answer to the question and distractor docs containing irrelevant information.
>
> **[1:08](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=68)** From here, combine the original question with the associated Oracle docs to create a chain of thought answer that breaks down not only the answer, but a detailed reasoning process.
>
> **[1:20](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=80)** And finally, run the fine-tuning process using three types of training examples, question, oracle data, and correct chain of thought answers.
>
> **[1:28](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=88)** Question, distractor data, and correct chain of thought answers.
>
> **[1:32](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=92)** And question, a mix of data, and correct chain of thought answers.
>
> **[1:36](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=96)** When a mix of these three training examples are used in the fine-tuning process, the model imprints a pattern to use relevant oracle data, ignore irrelevant distractor data, and discern what data is relevant for any question.
>
> **[1:49](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=109)** This new RAFT model combined with traditional RAG produces a robust, fine-tuned LLM based AI system, firmly grounded in specialized domain knowledge and highly likely to generate relevant and accurate responses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), rag (5), llm (4), ai (2), [[Fine Tuning]] (1)
> **Env Vars:** rag (5), raft (4), llm (4)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - based (1)


### 2. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Tying it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=1)** - Okay, where does all this leave us?
>
> **[0:03](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=3)** We've learned that LLMs on their own are magical language machines that appear to be knowledge bases, but are in fact just very good at stumbling on right-ish answers due to their extensive training sets.
>
> **[0:15](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=15)** This means building enterprise LLM-based AI apps is risky because the answers the LLM provides may not be accurate, especially if the user is asking for specialized domain data and even private data.
>
> **[0:28](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=28)** To improve the accuracy of LLM responses, we can provide relevant context by adding it directly into the request.
>
> **[0:34](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=34)** But to do this at scale, we need to be able to retrieve the relevant context on the fly, and that gives us retrieval augmented generation, or RAG.
>
> **[0:43](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=43)** In some cases, like an online store, a simple product database API may be sufficient to build a RAG system.
>
> **[0:49](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=49)** In others, it may be necessary to build an embedding space vector database, or even leverage knowledge graphs to get the best results.
>
> **[0:57](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=57)** In either case, combining RAG with a fine-tuned model can significantly improve the responses from the LLM and ensure they conform with company language policies and user patterns.
>
> **[1:09](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=69)** And this can be further enhanced by using retrieval augmented fine-tuning, or RAFT, to build a fine-tuned model that recognizes and conforms to the patterns and language in the grounded domain data.
>
> **[1:21](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=81)** And finally, all of this points to one crucial insight.
>
> **[1:25](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=85)** For anything beyond casual use, a standard chat app built on a foundation LLM model is not sufficient.
>
> **[1:32](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=92)** For the enterprise, some combination of RAG and fine-tuning built into a larger traditional app is required to produce consistent, reliable, and safe responses, for the company and for its clients.
>
> **[1:45](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=105)** And all of this is possible thanks to the concepts presented in this course.
>
> **[1:50](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=110)** All right, I've given you a lot to think about, and now it's your turn to figure out how all of this impacts your business and its AI strategy.
>
> **[1:57](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=117)** My best advice to you is to take the next step on this journey slowly and be willing to experiment, fail, and try again.
>
> **[2:04](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=124)** AI is not an exacting science. Quite the opposite.
>
> **[2:08](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=128)** And the best way forward is to try and fail and try again until you discover new and exciting ways to solve your challenges.
>
> **[2:15](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=135)** That is how everything I've covered in this course was discovered, and that's how you'll find your own path.
>
> **[2:22](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=142)** Now all that's left for me to say is (speaking in foreign language), go build robust AI implementations with RAG and fine-tuning, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (5), rag (5), ai (4), data (3), database (2)
> **Env Vars:** llm (5), rag (5), api (1), raft (1)
> **CLI Commands:** find (1), go build (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - okay (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Generative AI
- AI Software Development
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)

## Path Context

### In [[Understanding Generative AI for Tech Leaders]]
← [[Building a Generative AI Tech Strategy]] | **20 of 22** | [[Introduction to Multimodal Prompting for Generative AI]] →

### In [[Master Retrieval-Augmented Generation (RAG)]]
**1 of 7** | [[Vector Databases in Practice- Deep Dive]] →

## Appears In

- [[Understanding Generative AI for Tech Leaders]]
- [[Master Retrieval-Augmented Generation (RAG)]]

## Related Courses

_Courses sharing skills:_

- [[Knowledge Graph Data Engineering for Generative AI Use Cases]] — Generative AI, Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building Advanced AI Apps with Prompt Flow]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[The AI Ecosystem for Developers- Models, Datasets, and APIs]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[Agentic AI for Developers- Concepts and Application for Enterprises]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)