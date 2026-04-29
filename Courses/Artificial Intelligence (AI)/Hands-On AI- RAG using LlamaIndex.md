---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: hands-on-ai-rag-using-llamaindex
url: "https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex"
duration_minutes: 385
duration: 6h 25m
level: Advanced
updated: 8/2/2024
learners: 27831
skills:
  - LLaMA
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/hands-on-ai-rag-using-llamaindex-3830207/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEi-KCygqsEWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721080561320?e=2147483647&amp;v=beta&amp;t=Z1L7EVvB7xynoqBbYIgM_dU0adZMHQbT_sRIn5nFRfg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Master Retrieval-Augmented Generation (RAG)]]'
prev_courses:
  - '[[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]]'
path_nav: '[{"path":"Master Retrieval-Augmented Generation (RAG)","position":7,"total":7,"prev":"Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/llama
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20AI-%20RAG%20using%20LlamaIndex.md)

![Hands-On AI: RAG using LlamaIndex](https://media.licdn.com/dms/image/v2/D560DAQEi-KCygqsEWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721080561320?e=2147483647&amp;v=beta&amp;t=Z1L7EVvB7xynoqBbYIgM_dU0adZMHQbT_sRIn5nFRfg)

# Hands-On AI: RAG using LlamaIndex

> This course offers a deep dive into the principles and applications of retrieval-augmented generation (RAG), with a focus on the innovative LlamaIndex system. Explore how RAG enhances machine learning models by integrating external knowledge sources for more informed and accurate outputs. Instructor Harpreet Sahota covers the architecture of retrieval systems, the mechanics of indexing vast datase

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex) | 6h 25m | Advanced | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Getting Started]]** (7 videos)
- **[[#2. Fundamental Concepts in LlamaIndex]]** (7 videos)
- **[[#3. Introduction to RAG]]** (7 videos)
- **[[#4. RAG Evaluation]]** (3 videos)
- **[[#5. Advanced RAG: Pre-Retrieval and Indexing Techniques]]** (7 videos)
- **[[#6. Advanced RAG: Post-Retrieval and Other Techniques]]** (5 videos)
- **[[#7. Modular RAG]]** (4 videos)
- **[[#Conclusion]]** (2 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overcome the limitations of LLMs with RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=0)** - If you've ever tried to use a language model to answer questions about your own private data, like company files, personal notes, or even some top secret project that you've been working on, you've probably been frustrated because it doesn't work.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=15)** Language models are powerful, but they're limited to the data that they're trained on.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=20)** Retrieval augmented generation or RAG for short will enhance a language model and an AI system in general by integrating it with external data sources.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=30)** This includes your private data sets.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=32)** Hi, I'm Harpreet Sahota, a deep learning practitioner specializing in generative AI and multimodal models.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=38)** If you're ready to take your generative AI skills to the next level and build more effective context or models, then join me in this comprehensive course on retrieval augmented generation using LAMA Index.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/overcome-the-limitations-of-llms-with-rag?u=76281980&t=50)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** private (2), let (1)
> **Env Vars:** rag (1), lama (1)
> **Speakers:** - if (1)

#### Limitations of LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=0)** - [Instructor] Make no doubt about it, large language models are here to stay and they're only going to become more powerful and ingrained in our daily lives.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=10)** But in their current form, they have a few glaring limitations, one of which is stale information.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=18)** Most LLMs available to the public are trained on massive datasets that are essentially scrapes of the entire internet.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=27)** Not only that, they take ages to train.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=29)** That means they won't have access to the most current information like who won the gold medal in track and field in the most recent Olympics.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=38)** There's also no source data attribution.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=41)** An LLM's, quote unquote, knowledge is baked into the model weights from training, so they can't tell you how they know what they know.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=51)** You won't be able to get an LLM to provide you with references for the information it's generated.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=57)** This is of course, problematic.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=60)** We need to fact-check the output of an LLM.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=64)** They also suffer from hallucinations.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=67)** They can't tell you how they know what they know, and they'll often very confidently and convincingly make up stuff and present it as fact.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=76)** We call this hallucinating.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=79)** These models are trained to produce natural-sounding language rather than truthful information, which often leads to the model generating nonsensical completions.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=91)** These limitations are so problematic that the smartest among us have devised ways to mitigate them.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=98)** But one method in particular is called retrieval-augmented generation, or RAG.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=105)** RAG helps overcome the limitations I've mentioned by combining a LLM's generative capabilities with the realtime information retrieval.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=116)** Here's how RAG addresses these limitations.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=119)** One is that it gives a language model access to current and up-to-date information.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=125)** This allows you to overcome the stale knowledge limitation by connecting an LLM to real time information via an external database.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=136)** Kind of like having a second brain.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=138)** You can retrieve, that is, pull data from external sources, and inject that into the context window of the LLM, which allows RAG to integrate the most recent information and addresses the outdated information issue that's inherent in large language models.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=157)** A byproduct of an LLM being connected to an external database is that the LLM can trace back the extracted information to its source.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=167)** This is extremely valuable in academic, professional, and research settings where source of verification is essential.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=176)** With a RAG system, you can decide what external information to connect to the large language model.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=182)** That way, it's catered to your specific niche.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=186)** This makes RAG suitable for various applications, especially those that require domain-specific knowledge.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=194)** With the RAG system in place, you can add, update, or delete information in real time, which will help mitigate hallucinations.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=203)** This means that the model's responses will remain fresh, relevant, and accurate.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=209)** You couple this with source attribution and you're well on your way to increasing your end user's trust with the credibility and reliability of the content that is being generated.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=222)** LLMs have a long way to go before becoming completely autonomous.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=227)** They face limitations like outdated information, lack of source attribution, and hallucinations.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/limitations-of-llms?u=76281980&t=233)** However, a RAG system offers a promising way to integrate real time data retrieval with the generative capabilities, ultimately creating a more accurate and reliable system.

> [!info]- Semantic Content
>
> **Env Vars:** llm (8), rag (8)
> **Code Keywords:** public (1), require (1), delete (1)
> **Definitions:** we call this (1), is called (1), means that (1)
> **CLI Commands:** make (2)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Use cases for retrieval-augmented generation (RAG)
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=0)** - [Narrator] RAG is extremely useful, but what exactly can you use it for?
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=7)** I'm going to begin by outlining the steps in a RAG system at a very high level.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=13)** So first, you have to retrieve context or information from some external data source, and then you take that retrieve information and you're going to add it to your prompt as context.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=26)** Finally, you take this prompt that has been augmented with this external context and send this to a LLM to generate a response.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=38)** As you'll learn throughout this course, there's much more to it than that, but at a high level, it boils down to these three steps, which unlock a whole world of use cases.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=51)** I'm going to cover just a few of them in this lesson.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=55)** The canonical use-case for RAG is question and answer over private data.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=62)** This is when you want a LLM to reason over data that wasn't included in its training, whether that's some internal company document, a newly published research paper, or anything along those lines.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=77)** Anything that the model did not see during its training.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=82)** You can use RAG to help an LLM generate more accurate and detailed answers to complex questions by retrieving relevant information from a large corpus of documents and using that context to generate responses.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=98)** Another classic use case and example is customer support chatbots.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=104)** I've interacted with my fear of chatbots in my life, and all I'm left with after the interaction is a feeling that I've lost minutes of my life that I can never get back.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=116)** If you work at a company that develops customer-facing chatbots, you can delight your customers by using RAG-enabled customer support chatbots that have access to real-time, accurate information.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=131)** Chatbots can answer customer queries more efficiently by pulling data from updated data sources or live feeds.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=140)** The result is a reduced workload on human agents and satisfied customers who don't feel like they've wasted minutes of their lives that they'll never get back.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=152)** RAG is especially handy for those who work in a field where keeping up with the latest research, precedents or regulations is necessary.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=163)** For example, using RAG medical practitioners can easily access the latest medical research and guidelines, ensuring that patients get reliable medical information or advice.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=177)** Some examples in healthcare can be the use of chatbots enabled with a RAG pipeline to provide patients with information on health conditions and medication advice, and even help them find doctors to schedule appointments.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=195)** In much the same way, RAG is also useful for legal professionals.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=200)** It can make the research process less painful by allowing them to quickly access a relevant case laws, statutes, or legal writings.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=210)** Or in a case like mine where I have to stay up to date on the latest research or have to compile notes to create written articles, I can have a RAG chatbot reason over the data that I have in my second brain.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=228)** And this is hands down, my favorite use case.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=232)** Generative search and conversational interfaces.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=236)** RAG is transforming how we interact with and parse through information via search engines with conversational interfaces like Perplexity AI.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=247)** Systems like Perplexity allow users to engage with the search results much more naturally and conversationally, and this simplifies information retrieval and makes it more accessible.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=260)** RAG is enhancing search results, accuracy, relevance, and depth by integrating retrieval mechanisms with these generative capabilities.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=270)** To be honest with you, I haven't used a traditional search engine in several months.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=275)** I use Perplexity AI because it gets me the information I need and presents it in a answer with linked resources citing where it is that it's pulling information from.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=287)** I'm excited for this new application of RAG to search.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=292)** I've only scratched the surface of what's possible with RAG with the use cases I've presented here.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=298)** I was hoping just to motivate you and hopefully, I've illustrated how broadly applicable RAG is and how it's transforming the way we interact with information.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=307)** Regardless of what sector you plan on using it in.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=312)** Special magic happens when you can retrieve and integrate real-time data with a generative model.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=319)** You end up with systems that offer more accurate, relevant solutions tailored to specific user needs, and it makes AI-driven applications more useful and personalized.
>
> **[5:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=333)** I'm excited to go into the use case that we are going to be working on together.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=339)** What we're going to do in this course is build a chatbot, and this chatbot is going to be grounded in the texts of some of my favorite philosophers.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/use-cases-for-retrieval-augmented-generation-rag?u=76281980&t=349)** So we'll see how all this is going to work in action, starting in the next module.

> [!info]- Semantic Content
>
> **Env Vars:** rag (15), llm (3)
> **Code Keywords:** finally, (1), private (1), case. (1), from. (1), module (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=0)** - [Instructor] In this course, we are going to make use of GitHub Codespaces, which is a cloud-based development environment that allows you to code directly from your web browser or a connected IDE without the need for complex local setup.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=18)** This allows you to save time because you don't need to worry about a local environment setup.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=23)** Everything just kind of works.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=26)** It allows you to enhance collaboration with your team because you get a consistent, accessible environment.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=33)** It also has security and compliance with these isolated and controlled environments.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=41)** It also lets you seamlessly switch between projects and devices, and you get streamlined workflows that you can make use of, such as code reviews and onboarding.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=53)** So it's a nice tool that really helps simplify development, enhances collaboration, and improves productivity by giving you a cloud-based, customizable, and a secure development environment that is tightly integrated with GitHub.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=69)** So you'll get a link to the GitHub repository for this course.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=73)** Now, to open up a codespace, you click on the green button here that says Code.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=79)** You'll see two tabs, one for Local, one for Codespaces, and you can go ahead and just create a codespace.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=87)** I've already got one active here, but you would see something that says Open codespaces.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=92)** And once you do that, you could stop the codespace, you could change the machine type.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=97)** There's a number of different things that you could do.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=99)** The default machine type is 2-core 8 gigabytes of RAM.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=103)** I'm going to bump this up to a 4-core 16 gigabyte of RAM machine, and we'll go ahead and Update codespace.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=112)** And we are going to then restart this codespace.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=117)** So let's go right here, Stop the codespace.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=123)** And to create a codespace, then we just click right here, create the codespace on main, and it'll take a minute or so for this to build.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=134)** And we now have a VS code environment running on the cloud.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=141)** All of the files for the course, all of the course notebooks and all that will be all right here, free to use.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=151)** You can, of course, clone the repository, run it locally on your own machine if you'd like.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=157)** You can also run the notebooks in Google Colab if you'd like.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=161)** There are many options available to you, but for this course, I'm just going to make use of GitHub Codespaces.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-github-codespaces?u=76281980&t=168)** In the next video, we are going to set up the environment, so I'll see you there, and we'll create our development environment so that we can get started with some code.

> [!info]- Semantic Content
>
> **Tools:** github (4), vs code (1), colab (1)
> **CLI Commands:** make (3)
> **Code Keywords:** switch (1), type. (1), let (1)
> **Env Vars:** ram (2), ide (1)
> **Prerequisites:** setup (2), set up (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Setting up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=0)** - [Instructor] Now that we have a codespace instance spun up, it's time to set up a development environment.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=8)** If you are following along on codespaces, then just do everything that I'm doing.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=14)** If you're following along locally, you're also going to do everything that I'm doing as well.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=19)** The only time you can skip this lesson is if you're choosing to run all of the notebooks in a Google Colab environment.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=27)** If that's the case, then fear not as the first cell in every single Google Colab has the first cell of every single notebook that I've created has the necessary installs pin to the version that I'm using.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=46)** So I'm going to use Conda as the package manager.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=51)** Conda comes pre-installed on codespaces, which is awesome.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=56)** I don't know if venv for poetry comes pre-installed on codespaces.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=61)** I did not bother to check as I don't usually use venv for poetry, but if you like using venv for poetry and you want to do so locally, there's nothing stopping you from doing that.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=72)** I'm just choosing to use Conda.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=75)** If you haven't used Conda before ever, well, then head over to the Conda website and follow the instructions, get set up, and download it with Conda and you can come back and follow along.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=87)** That's only necessary if you're running this locally.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=89)** All right, so you can verify that this actually has Conda installed by just running Conda on the command line.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=98)** So you need to first init Conda.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=101)** So that's the first thing that we need to do.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=104)** And you can do that by just typing in conda init, all right?
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=109)** So we need to then close this shell and then reopen it.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=114)** So just hit that X here, and then what you're going to do is hit Control + Shift + backtick, and that opens the terminal up again.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=125)** And you can see that we have a base Conda environment.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=128)** Now, let's go ahead and create a new Conda environment.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=132)** This Conda environment, I'm going to call lil for LinkedIn Learning _llama_index.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=139)** I'm going to use python==3.10 and also install python-dotenv.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=144)** If you want to choose to use Python 3.11 or Python 3.12, by all means, go ahead, go for it.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=150)** In my experience with these newer frameworks and libraries, every time I use Python 3.11 or Python 3.12, I run into some weird issues.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=158)** Plus, I mean, I've been using Python 3.10 extensively for the last couple of years with no issues, so I'm going to go ahead and use that.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=167)** So go ahead and run that line of code right here.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=172)** You can copy and paste it.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=173)** You can just go ahead and type it out if you'd like, and it'll take about a minute or so to install.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=181)** Follow along with the prompts here.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=185)** All right, now that everything has installed, we can go ahead and activate our environment.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=192)** You can go ahead and just copy and paste this line right here and activate the environment.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=199)** And we are good.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=201)** We are now in our LinkedIn Learning LlamaIndex environment.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=206)** If you're running this locally and you don't have ipython kernel jupyter jupyterlab installed, you can go ahead and run this.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=213)** If we run conda list here, we can verify what we have installed.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=219)** We actually don't have these installed in this current environment, so let's go ahead and install them now.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=231)** It's taking a little bit of time here to download.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=236)** All right, so all of that has been installed.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=239)** If you're running this locally, you can verify that JupyterLab was installed by running this line right here.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=245)** I'm not going to do that at the moment.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=248)** And now, we can start to install some of the core libraries and packages that we need to get started.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=255)** If there's anything needed outside of what we are about to install here, I'm going to make sure that I outline that in the cell of every single notebook that we are running through.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=267)** But for right now, let's just go ahead and install everything that we need.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=271)** So I'm going to just use the starter package for LlamaIndex right now.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=277)** So LlamaIndex is nicely separated into numerous small packages, and I'll talk about that in a later module.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=283)** I'll go ahead and install the starter package.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=286)** And that's just this right here.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=290)** We're using the, as of now, most current version of LlamaIndex and that's version 0.10.37.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=300)** All right, so you can see that we've got all of that installed.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=304)** So we're working at the edge of technology here.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=307)** Really, we are. LlamaIndex is changing rapidly.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=310)** OpenAI, Cohere, all of these libraries are changing rapidly.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=315)** You better pin the versions of the libraries that I am using as we progress along through this course.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=322)** Now, don't worry if you're coming back to this course in the future, and LlamaIndex is at version 0.10.55 or 0.10.99, like not too much is going to actually change.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=335)** The reason LlamaIndex bumps up incrementally for the minor versions like that is because providers are pumping out new models all the time.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=345)** New large language models, new embedding models, new techniques for vector search, so on and so forth.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=351)** And so since LlamaIndex is, you know, relying on these frameworks, it needs to grow with it.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=359)** So if you're coming back in the future and you notice that LlamaIndex is at like 0.10.99, like don't worry.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=366)** Like this course is still going to be useful for you.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=369)** What matters are the principles and patterns that we're going to use.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=372)** All right, so let's go ahead and install Qdrant.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=374)** Qdrant is going to be the vector database of choice throughout this course.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=377)** I'll talk about choosing a vector database in a later module, but let's go ahead and just install Qdrant right now.
>
> **[6:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=384)** And that's just right here, pip install qdrant to client and it's currently at version 1.9.1 and that's going to go ahead and get installed.
>
> **[6:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=394)** And then, we are going to install the LlamaIndex dependencies for working with external files and for working with vector databases like Qdrant.
>
> **[6:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=406)** So, as I've mentioned, LlamaIndex is nicely decoupled, like it's got a number of smaller libraries that kind of feed into it.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=416)** We'll talk about this in a later video.
>
> **[7:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=422)** So we'll go ahead and install Qdrant vector store as well as this reader's file, which we're going to need and then we're going to install our LLM libraries.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=431)** So, throughout this course, I'm going to make use of Cohere and OpenAI.
>
> **[7:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=436)** If you want to use any other type of LLM provider, you are more than welcome to do so.
>
> **[7:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=442)** LlamaIndex makes it easy to install them.
>
> **[7:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=445)** They all kind of follow this general pattern, right?
>
> **[7:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=447)** Like, let's say if you wanted to use Mistral, you do llama-index-llms-mistral.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=454)** And you know, if you wanted to use Hugging Face, it's something similar.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=458)** So, a lot of these patterns are similar, and I'll talk about LlamaIndex and how it's organized and structured more in just a couple of videos.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=466)** The first video in the next module is just talking about how LlamaIndex is organized.
>
> **[7:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=471)** But for right now, just go ahead and follow along with me, blindly follow along, and then just do the installations and trust that I'm looking out for your best interest.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=480)** All right, cool. So, let's go ahead and install all of this.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=484)** So I'm installing Cohere, OpenAI, and these are the base libraries and then I have to do the LlamaIndex integration for each one of those.
>
> **[8:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=494)** I'm writing this at a time where the most current Cohere model is the Command R+
>
> **[8:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=504)** and the most recent model from OpenAI is GPT-4o.
>
> **[8:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=510)** So we'll be making use of those in this course.
>
> **[8:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=514)** Next up is the LlamaIndex integration with OpenAI, so let's go ahead and install all that.
>
> **[8:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=522)** We'll install the embeddings and we're also going to use the Cohere postprocessor for reranking, so let's go ahead and install that.
>
> **[9:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=541)** All right, so if you're running this locally, you might need to link the IPython kernel to your Conda environment.
>
> **[9:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=546)** So if we go here and we open this up, you'll see here it's asking us to select the kernel.
>
> **[9:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=553)** All right, so this is just a later notebook.
>
> **[9:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=555)** You'll see here that we have to select a kernel and we go to Python Environments and we have lil_llama_index here already for us.
>
> **[9:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=564)** So, if you're running this locally and you're trying to select the kernel and you notice that the environment that you just set up is not there, then this is the line of code that you are going to run to attach a environment to your notebook.
>
> **[9:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=580)** And that's it. So we are all set up.
>
> **[9:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=582)** Our development environment is all good and ready to go.
>
> **[9:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-your-environment?u=76281980&t=586)** And in the next video, I'm going to talk about how to choose a LLM and embeddings provider.

> [!info]- Semantic Content
>
> **Prerequisites:** install (18), set up (4)
> **Code Keywords:** let (9), module (3), this. (2), case, (1)
> **Versions:** python 3 (5), version 0 (2), 0.10.99 (2), 3.10 (1), 10.37 (1)
> **CLI Commands:** python (8), make (2), pip (1)
> **Tools:** colab (2), command line (1), terminal (1), jupyter (1)
> **Env Vars:** llm (3), gpt (1)
> **UI Navigation:** select the (2), go to (1)
> **Cross-References:** in the next (2)

#### Choosing an LLM and embeddings provider
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=0)** - [Instructor] Let's talk about choosing a LLM and embeddings provider.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=4)** There are a ton of options available to you for choosing a provider.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=8)** You could choose from companies that build and serve their own LLMs, like OpenAI, Cohere, Mistral, Google, or you could choose from companies that host and serve open source models via an API, for example, Fireworks, Together, Hugging Face, Replicate, so on and so forth.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=26)** It's up to you what it is that you want to choose.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=29)** For this course, I'm sticking primarily with Cohere and with OpenAI.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=35)** There's so many providers entering the market and trying to capture share, but luckily LlamaIndex has integrations with the vast majority of them and you can see all of them right here.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=48)** And then, you know, if you look here, llama-index-llm, so this is in the LlamaIndex GitHub repository.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=54)** Look under integrations, look at LLMs, and then you can see all the different LLM providers that are available to you.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=63)** And the installation process for every one of those is pretty much the same thing.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=67)** This would be a, pip install llama-index-llms-whatever provider you choose.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=73)** So for example, like let's say if you wanted to use, I don't know, like Nvidia for example, if you wanted to use Nvidia, it'd be llama-index-llms-nvidia.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=81)** So it's the same pattern for installing all of them.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=85)** And when you want to import that LLM, you're going to follow this pattern from llama-index.llms., whatever LLM provider you choose, import that LLM provider class.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=97)** So it's going to be the same pattern regardless.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=99)** So again, I'm using OpenAI and Cohere predominantly throughout this course.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=104)** The first half of the course I use mostly Cohere because it's free, like you don't have to enter in a credit card or put in any information whatsoever.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=114)** You just sign up with a GitHub, or a Google, or an email, and I'll show you how to do the sign up in the next video, but you just sign up and you're good to go.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=121)** They've got the Command-R and Command-R-Plus models, which work really well for RAG tasks.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=129)** There's something to keep in mind though, because it is a free API, there are rate limits.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=135)** So with Cohere, you cannot send more than, I believe at the time of my recording this video, the limitations that I ran up against with Cohere are no more than five requests per minute, no more than 100 requests per hour, and no more than 1000 requests in a month.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=162)** So you have those limitations imposed on you.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=166)** OpenAI also has rate limits.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=168)** They've got this kind of tiered structure.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=170)** So if you go to OpenAI usage tiers, you'll see the different tiers that they have.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=177)** You know, there's a Free tier, Tier 1, 2, 3, so on, so forth.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=182)** And with the OpenAI tiered usage, all this really means is that as you progress along the tiers, that means you can just do more API calls, basically is what that means.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=195)** So you get higher rate limits.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=197)** For better or worse, I've been using OpenAI for a very long time and I am on Tier 4.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=203)** And so in the second half of this course, I switch gears to using OpenAI because I have to do a lot of calls to the API for embeddings and a lot of calls for generating responses.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=217)** And when I was trying to create the course using Cohere, I ran up against those limits, and so I just used OpenAI for the later half of the course.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=228)** And again, that's just because I had more usage that gives me, gave me more flexibility and freedom to experiment.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=234)** You know, there is probably a better way to think about how to choose the right LLM and embeddings provider rather than which LLM providers can give you more freedom to hack around, and let's talk about that right now.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=247)** So a few points that I want to give to you to help kind of guide your thinking about which LLM provider to choose, first is just identify your business objective and use case, right?
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=260)** So understand your business's present and future objectives, and just ensure that the LLM that you're using is going to fulfill those needs.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=267)** So determine what this particular LLM that you're considering is good at.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=274)** Is it good at content generation, sentiment analysis, so on so forth, and just consider that.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=279)** You also want to evaluate different LLMs and their capabilities.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=285)** So try to hack around with this many language models as you can.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=289)** One thing that I really like is a platform called Poe.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=293)** So Poe is cool because with one login and in one user interface, you've got access to a wide variety of different language models that you can hack around with.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=307)** So I highly recommend you to play around with as many different language models as you possibly can.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=313)** The other thing you want to consider is license, right?
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=315)** So different providers are going to have different restrictions on how you can use the generations from their models.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=323)** Some licenses might limit the use of a LLM or embeddings to non-commercial applications, they might require attribution, or just restrict the type of applications for which the model can be used.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=334)** So just make sure you understand the license and the impact this is going to have on your use case.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=339)** If we scroll back up to the top here and look at some of these big labs, of all of these big labs, the provider that I've noticed has the most permissive license is Mistral.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=351)** So that's just something to consider.
>
> **[5:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=354)** Last, you just want to also consider the language support and multilingual capabilities of a model as well.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=362)** You also want to evaluate security and privacy compliance, so look for features like data encryption, secure data handling, and compliance with the relevant privacy regulations.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=374)** Of course, cost is always a issue.
>
> **[6:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=378)** So OpenAI for GPT-4o has a blended rate of about $10 per million tokens.
>
> **[6:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=388)** So for input tokens, it's $5 per million input tokens, and then I believe it is $15 per output token.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=397)** So if we go to OpenAI pricing, you can verify that here that the input tokens is $5 per million input, $15 per million output.
>
> **[6:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=407)** So it gives you kind of a blended rate of about 10 bucks per million tokens.
>
> **[6:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=411)** Mistral is quite cheap as well.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=414)** Cohere, like I mentioned, is free, but if you want to use Cohere production, you've got to get in touch with their sales team for that.
>
> **[7:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=421)** Another thing to consider is just the community support and resources.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=425)** With everything I do in the dev tools space, I look for framers that have active communities.
>
> **[7:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=430)** Generative AI is moving at a very, very fast pace, and it's hard to keep up with things on your own.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=437)** You're inevitably going to run into issues or run into questions where you don't have the answers, and having a active community, a welcome community is super important.
>
> **[7:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=450)** So OpenAI has got their OpenAI Slack channel, they've got the OpenAI Developer Forum.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=454)** Cohere has a Discord channel.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=457)** Mistral also has a Discord channel.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=460)** At the moment, my good friend Sophia Yang is the head of developer relations at Mistral and she's awesome.
>
> **[7:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=467)** In any event, just look for an active community, look for a strong community, look for a place that's welcoming, and look for a place that has a number of learning resources for you.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=479)** So that's all I have to say about choosing the right LLM for your use case.
>
> **[8:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-an-llm-and-embeddings-provider?u=76281980&t=486)** Like I mentioned, throughout this course, we're going to make use of primarily Cohere and OpenAI.

> [!info]- Semantic Content
>
> **Env Vars:** llm (12), api (4), rag (1), gpt (1)
> **Code Keywords:** let (3), case. (2), class. (1), switch (1), case, (1)
> **Tools:** github (2), discord (2), slack (1)
> **CLI Commands:** make (2), pip (1)
> **Analogies:** for example (3)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### Setting up LLM accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how to get your OpenAI and Cohere API keys.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=5)** So if you just click on this link right here and go to either Log In or Sign Up, if you haven't already signed up for OpenAI, it's quite easy to do so.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=16)** You can sign up with Google, Apple, Microsoft account, whatever you want.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=21)** If you've already signed up for OpenAI, then this is just going to be a refresher for you.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=26)** But I'll go ahead and sign up into my account.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=28)** Once you've signed into the platform, so platform.[openai.com](https://openai.com), you want to go to the sidebar here and click on API keys and I'm going to create a new secret key.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=41)** So this is the same pattern you're going to do if you've never created a secret key, then you're going to see the same button anyways.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=47)** I'll call this lil_llama_index and I'll create the secret key.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=56)** Copy that key and copy it, put it somewhere safe, copy and paste it somewhere immediately because you're not going to be able to see that again and we need this key.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=65)** I'm going to invalidate this key after we're done recording this course anyways, but that is what I need to do right there, so copy and paste that away.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=75)** We'll go ahead and get our Cohere API key, so you can log in or sign up.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=81)** It's going to be the same kind of pattern.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=83)** In this case, I'm going to continue with Google.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=86)** Once you've logged into Cohere, you'll be brought to the dashboard.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=89)** You're going to click on API key here and you'll create a key.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=95)** Cohere is nice because you can come back and always look at the API key if you'd like, but I'll go ahead and create a new API key.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=102)** I'll call this lil_llama_index and generate that key, copy it.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=111)** Also, we will need to make use of this, so put it somewhere safe.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=115)** Great.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=116)** So we've got our API keys.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=118)** Now what we need to do is create an environment variable and just keep our keys in the environment variable.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=124)** So I'm going to open up a terminal, so that's Control + Shift + Tick.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=128)** Let's go ahead and make sure I've got this.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=131)** Control + Shift + Tick.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=133)** Let's create now a .env file.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=138)** So what I'm going to do is touch .env.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=144)** This is going to create a .env file here.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=148)** And I have also an env_example, so you can copy this env_example and paste the appropriate ones in here.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=159)** So for right now, let's just copy and paste our Cohere API keys and our OpenAI API keys.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=171)** You can disregard this LangChain thing 'cause we're not going to be using LangChain.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=176)** And in the environment variables, you can ahead and copy and paste the API keys like so.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=186)** Just make sure you're not pushing any of these API keys to your GitHub repository because you don't want this information to be public.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=194)** So there we go, so we've got our .env file created and we've added a couple of environment variables.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=200)** In the next video, I'm going to talk to you about choosing a vector database and then I'm going to show you how to set up Qdrant, which is going to be our vector database of choice.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-llm-accounts?u=76281980&t=209)** So I'll see you in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (11)
> **Code Keywords:** let (3), case, (1), continue (1), this, (1), this. (1)
> **UI Navigation:** click on (3), go to (2)
> **Code Identifiers:** lil_llama_index (2), env_example (2)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (2)
> **Tools:** terminal (1), github (1)
> **URLs:** [openai.com](https://openai.com) (1)

#### Choosing a vector database
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=0)** - [Instructor] Without a doubt, vector databases are an essential part of any Retrieval-Augmented Generation system.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=7)** And as this image shows here, there's a lot to choose from.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=11)** So how should you think about choosing a vector database for your RAG applications?
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=18)** There's several factors that you should consider.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=21)** For one is the performance on similarity search.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=24)** So RAG relies heavily on efficient similarity search to retrieve relevant documents or passages.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=33)** The vector database that you choose should provide fast and accurate similarity search capabilities.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=40)** Scalability is also a concern.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=43)** So as the amount of data grows, the vector database should be able to scale horizontally and handle large scale indexing and querying.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=54)** You should look at the integration with various LLM frameworks.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=59)** If a vector database integrates well with the popular LLM orchestration frameworks, then it's going to allow for a seamless interaction between the RAG system and the vector database.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=73)** You want a vector database that supports various data types.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=77)** You might be dealing with not only text, but you might be dealing with images, video, or audio.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=83)** So whatever vector database you choose should support storing and indexing vectors that are derived from practically any data type.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=93)** You also want a vector database that has efficient indexing mechanisms that's going to quickly build and update the index as new data is added or modified.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=105)** Retrieval flexibility is absolutely key.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=108)** The vector database you choose should offer flexibility in retrieval options, for example, specifying the number of nearest neighbors to retrieve, setting similarity thresholds, or applying filters based on metadata, because without this flexibility, it's going to be hard to customize and fine-tune your retrieval process.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=129)** Data persistence and reliability, of course, is super critical.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=134)** The vector database should be reliable and able to handle potential failures or data loss scenarios.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=140)** And one thing that is always super important to me, is this community support and documentation.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=145)** So look around at the vector database providers that are out there and consider the level of community support and documentation that are available.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=154)** An active community, good documentation is going to help you with troubleshooting, optimization, and just staying updated with the latest features and best practices.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=165)** Also to consider is ease of use and deployment, and perhaps the most important is cost and licensing.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=173)** So consider a vector database's cost and its licensing model.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=177)** Look at pricing, scalability cost, or any other limitations or restrictions that are imposed by the licensing terms.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=186)** So as I mentioned before in this course, we are using Qdrant, for a number of reasons, for example, for all the reasons I mentioned above, but for some other reasons as well.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=196)** So for one, Qdrant is one of the most popular vector databases on LlamaIndex Hub, So it's like the most popular vector database on LlamaIndex Hub.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=208)** So that's one big reason for sure.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=211)** The documentation is amazing.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=212)** That's very comprehensive documentation, there's a lot of community support.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=217)** The team behind Qdrant is super technical, they've got a great DevRel team.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=222)** And you know, me being a DevRel professional, that's, I think, high compliments.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=226)** Not saying that I'm the greatest DevRel individual out there, but their team is quite well and they have a really huge focus on education.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=234)** Qdrant is also used by some heavy hitters in the industry.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=239)** So for example, it's rumored that OpenAI uses Qdrant.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=243)** It's also rumored that, behind the scenes, like Microsoft Azure, their AI search is backed by Qdrant.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=251)** Also xAI, you know, Elon Musk's thing, uses Qdrant and you can see that because they have forked Qdrant at their GitHub org.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=263)** Not only that, just a lot of the people in the industry that I respect the most, mention that Qdrant is a excellent choice.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=272)** My mentor suggested that I use it as well.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=276)** And every cohort based learning program that I've gone through, for example, like through the various providers, Qdrant is one that seems to be used quite regularly.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=287)** Because I've had so much exposure to using Qdrant, it's one of the main reasons why I'm using it in this course.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=293)** Of course, like you can use whatever it is that you want.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=297)** LlamaIndex makes it easy to kind of, plug and play different components, so if you don't want to use Qdrant, you could use something else, but I'll be using that throughout this course.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/choosing-a-vector-database?u=76281980&t=307)** In the next video I'm going to show you how to set up a Qdrant account, get your API key, get your cluster URL, and after that we're almost done setting up and we can start to go ahead and actually do some Retrieval-Augmented Generation.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3), llm (2), api (1), url (1)
> **Code Keywords:** super (3), from. (1), type. (1), else, (1)
> **Analogies:** for example (4), it's like (1)
> **Code Identifiers:** xai (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)

#### Setting up a Qdrant account
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how to get set up with a Qdrant cloud account.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=6)** So you start by going to qdrant.tech, then hit on cloud.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=12)** And from here you can sign in a number of ways.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=15)** You can sign in with GitHub or with Google or just use your email address.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=18)** I'll go ahead and sign up with GitHub.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=22)** And once you sign in, we'll start by creating a cluster.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=27)** So we'll create one cluster and this one cluster will have several collections within it.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=34)** So this cluster name, we'll just call it the same thing that we're calling everything else, lil_llama_index.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=43)** And then we're going to create the cluster.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=46)** Now once you hit create cluster, you are going to be prompted with a API key or to create an API key.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=54)** When you have that prompt, make sure again that you copy that API key and put it somewhere safe, because you're not going to be able to go back and look at this API key later.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=66)** So go ahead and click get API key and copy that.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=70)** I'll go ahead and stash this somewhere safe right now.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=76)** We'll hit continue and you can copy and paste this code snippet if you ever want to access your Qdrant cluster through the command line.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=91)** But once you do that, just go ahead and hit complete.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=94)** And we've got an active cluster, it's starting to spin up and click on this down arrow right here and copy the cluster URL, 'cause we're going to need that as well.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=107)** So copy and paste the cluster URL.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=109)** Make sure you've got that saved.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=111)** Let's go back to our environment here.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=116)** Then we'll go to our .env file.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=120)** Now, you can look at the .env example and see that I've got a Qdrant URL and Qdrant API key.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=128)** Just go ahead and set this up right here.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=132)** So we've got the Qdrant API key, we've got the Qdrant cluster URL as well.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=144)** And there we go.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=146)** So we've got our environment variables set up.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=149)** You can look at the UI as well.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=153)** Now, in order to get to the UI, you have to pass in your API key.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=157)** So I do hope that you saved your API key, put it into a text file somewhere, of course, because you're going to need it.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=166)** All right, I'm not going to go too much in depth in this series about the inner workings of vector databases.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=175)** So I am actually writing a book on retrieval augmented generation called "Practical Retrieval Augmented Generation", and accompany that book, I have a YouTube channel that I think you should check out.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=189)** So on my YouTube channel, you'll see I've got a playlist here.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=193)** So this playlist here is essentially me kind of building in public, creating some materials to accompany my book.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=202)** If you're watching this and you want to go deep into vector search and vector databases and frankly learn how to do retrieve augmented generation without the use of LlamaIndex, definitely check out my YouTube course and this series of videos.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=216)** Of course, a subscribe always is welcome.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=219)** So do make sure you subscribe to the channel as well.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=223)** Enough promo for now.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=224)** But we've got our Qdrant cluster set up and our Qdrant account is good to go and I want to point out that with the free tier of Qdrant, you get four gigabytes of disc space, one gigabyte of RAM and you get only one cluster, but this one cluster you can create a number of different collections.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=247)** And now we can go ahead and really just start doing some rag.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/setting-up-qdrant-account?u=76281980&t=251)** But first we need data.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), url (4), ram (1)
> **Code Keywords:** else, (1), continue (1), let (1), pass (1), public (1)
> **CLI Commands:** make (3)
> **Tools:** github (2), command line (1)
> **Prerequisites:** set up (3)
> **UI Navigation:** click on (1), go to (1)
> **Code Identifiers:** lil_llama_index (1)
> **Cross-References:** go back to (1)

#### Downloading our data
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=0)** - [Instructor] You can't build a RAG system unless you have some external data to connect to your language model.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=8)** And in this video, what we are going to do is source some external data.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=14)** Now, the use case I have envisioned for us to build out in this course is a chatbot-style use case, where this chatbot is a virtual mentor of sorts.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=27)** And this virtual mentor is actually going to be a conglomeration of some of my favorite philosophers and thinkers throughout history.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=36)** For example, Naval Ravikant, Balaji Srinivasan, the stoic philosopher, Seneca, Nassim Taleb, Paul Graham, and Bruce Lee.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=48)** I'm going to be using these books mentioned here, which are all freely available online.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=54)** And what we're going to do is, is just download these books and then we're going to take this raw text that we've downloaded and pre-process it a little bit.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=63)** So this is just a helper, a function that I've defined here.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=66)** It's just going to take the URL from which we are going to download the book, and then also the file name for which we want to save the book as nothing more than that.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=78)** So the first book we're going to download is The Almanac of Naval Ravikant.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=82)** This is a absolutely amazing book.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=85)** It's a collection of Naval Ravikant's wisdom from his Twitter podcast and essays over the last decade or so.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=93)** It's freely available online.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=95)** The free version, for example, is like right here, [navalmanack.com](https://navalmanack.com).
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=99)** And then you can read it right there.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=102)** It's freely available.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=104)** The book is also a podcast that you can listen to online.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=107)** It's just essentially an audio book, not a podcast, but it is there for you to enjoy.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=112)** So we're going to go ahead and download these files.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=115)** So let's go ahead and run this cell, right.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=119)** And everything that we download is actually going to be saved here in this data directory.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=128)** The next book we are going to download is the Anthology of Balaji.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=133)** It was put together by the same author that compiled the Almanac of Naval Ravikant.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=140)** So we'll go ahead and download that book.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=143)** Here we've got The Tao of Seneca who is, which is essentially a kind of modern translation of Seneca's moral letters to Lucilius.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=155)** All these PDFs are freely available as modern translations made available by Tim Ferriss.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=163)** So I highly recommend checking them out online or you know, buying the audiobook, but either way, he makes it freely available for us.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=172)** So let's go ahead and download those as well.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=176)** Next is Skin in the Game, probably my favorite book by Nassim Taleb.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=183)** This is just a book that challenges conventional thinking on decision making.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=187)** Also made freely available through this link here, so let's go ahead and download that.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=194)** The next book is Hackers and Painters, which is just a collection of essays by Paul Graham, the famous venture capitalist, Paul Graham.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=204)** Really good book. You know, I highly recommend downloading the audio version and listening to it on audiobook if you'd like.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=213)** And finally, we have Striking Thoughts by Bruce Lee, which is a amazing, beautiful collection of almost aphorisms, written by Bruce Lee, the martial artist, actor and philosopher, Bruce Lee.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=229)** It's a beautiful blend of Eastern and Western philosophies and really gives a interesting and unique perspective on life.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=237)** So we'll go ahead and download that as well.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=241)** And as you can see, everything is downloaded in this data directory here.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=245)** So everything is downloaded as PDFs.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=248)** And what we're going to do is we're going to parse, clean and ingest these PDFs into our Quadrant Vector database.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=258)** So it'll be a really good exercise on what real world RAG is like.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=264)** You'll notice that once you start doing RAG in the real world, that it is a lot of data cleaning involved.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=271)** But, we have our data and now we can actually start doing some RAG.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=275)** I've been talking about actually doing RAG over the last few videos, but now we are actually going to get to it.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/downloading-our-data?u=76281980&t=281)** So before we get to RAG, I must teach you about Llama Index and its core components, which is what we're going to talk about in the next module.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), function (1), finally, (1), module (1)
> **Env Vars:** rag (6), url (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (2)
> **URLs:** [navalmanack.com](https://navalmanack.com) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 2. Fundamental Concepts in LlamaIndex

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How LlamaIndex is organized
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=0)** - [Instructor] LlamaIndex is a data framework for LLM applications that makes integrating data into language models easy.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=10)** Essentially, it is a framework for building context augmented LLM applications.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=17)** What the team means by context augmented is any use case that is using a LLM plus private or domain specific data.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=28)** At its core, LlamaIndex offers methods for incorporating this private or specialized data into the language model, which, as we discussed, helps enhance the output of a language model.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=44)** And there's a suite of tools that LlamaIndex provides that makes it relatively easy to deploy production grade RAG systems.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=56)** You get tools for connecting to data, to ingest data from their native source and format, which could be an API, PDF, SQL database, and so much more.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=66)** There's also indexes that structure data in some intermediate representation that's easy and performant for a LLM to consume.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=77)** There's also this concept of an engine.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=81)** So you have a retriever engine, a query engine, that provide natural language access to data.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=88)** So we have these query engines that are powerful retrieval interfaces for knowledge augmented output.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=96)** There's also, you know, chat engines that allow you to do conversational interfaces back and forth kind of dynamic with your data.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=105)** There's also data agents, which are LLM powered knowledge workers that are augmented by tools, and LlamaIndex gives you all of this and helps you connect with the rest of your ecosystem through its hub.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=122)** So the LlamaHub has a wide range of integrations.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=128)** There's, you know, integrations that connect to different loaders and different readers.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=134)** There's integrations that connect to different vector stores, different LLMs.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=139)** There's also a lot of community contributed type of work that is available to you on the hub, that typically, you know, if a new paper comes out, showcasing some new methodology in RAG somebody from the community might write a Llama Pack for that research paper for that new methodology and submit it to the LlamaHub.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=164)** In general, LlamaIndex, it sits between your data, your embeddings, your language model, your vector store, and the different use cases.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=173)** It allows you to connect your data to an LLM, and gives you a lot of modules for loading, indexing, querying, and even evaluating your RAG system.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=186)** There's two different SDKs available with LlamaIndex.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=190)** There's the Python SDK, and the TypeScript SDK.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=193)** We are going to be using Python throughout this course.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=196)** There's, you know, so many different integrations and packs like we've discussed available to you through LlamaHub.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=206)** And as you can see here, they've got a huge number of different integrations for you to build a RAG system.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=214)** It's heavily used by the community.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=218)** I mean it gets 2.8 million downloads per month, 15K community members, 700 contributors.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=225)** It's huge burgeoning resource and library that is really pushing the state of the art and retrieve augmented generation forward.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=237)** So LlamaIndex, ever since its most recent major release, which is V 1.0, it was refactored into a core library and a number of smaller libraries that are either integrations or packs.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=255)** And we talked a little bit about integrations when we set up our development environment where we installed the integrations for Quadrant, for OpenAI, Cohere, so on and so forth.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=267)** The Llama Packs are those modules that are kind of on the cutting edge that are pushing RAG forward.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=275)** So for example, you can go to LlamaIndex, LlamaHub rather click on Llama Packs, and you can see all these different types of packs that are available to you.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=287)** A good rule of thumb to kind of decide which pack to use is just to look at the ones that got the most downloads.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=293)** So you could sort again by popularity, and you can see there's a long tail of packs.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=297)** Like not everything that comes out gets readily adopted by the community.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=302)** So if you're kind of wondering which pack to hack around with, that's really a way to get some signal from that.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=310)** So to summarize it, to wrap it all up, LlamaIndex acts as the data framework to build context augmented LLM applications.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=322)** It is split up into a few different libraries.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=327)** There's the core library, there's the integrations, and then the Llama Packs.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=332)** And if you wanted to find out what the different integrations are, you can go to [llamahub.ai](https://llamahub.ai).
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=339)** The docs are at docs.[llamaindex.ai](https://llamaindex.ai).
>
> **[5:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=342)** The docs are very in depth, very intense, and you know, if I'm being frank with you, the docs are very hard to navigate.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=349)** But I'm hoping that throughout the rest of this course you'll be able to kind of understand how to build performant RAG systems using LlamaIndex.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-llamaindex-is-organized?u=76281980&t=359)** In the next several modules, I'm going to talk about the core components of LlamaIndex before we start actually building out RAG pipelines.

> [!info]- Semantic Content
>
> **Env Vars:** llm (7), rag (7), sdk (2), api (1), pdf (1)
> **CLI Commands:** python (2), find (1)
> **Documentation:** the docs (3)
> **UI Navigation:** go to (2), click on (1)
> **Code Keywords:** private (2)
> **URLs:** [llamahub.ai](https://llamahub.ai) (1), [llamaindex.ai](https://llamaindex.ai) (1)
> **Versions:** 2.8 (1), 1.0 (1)
> **Cross-References:** we discussed (1), in the next (1)

#### Using LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=0)** - [Instructor] Let's begin our deep dive into the core components of LlamaIndex, starting with how to use a LLM.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=11)** So if you're running this on Codespaces, make sure you select the kernel and connect to the environment that we had set up.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=20)** If you are running this on Google Colab, make sure you run this cell to install the appropriate libraries.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=28)** We'll go ahead and do a couple of imports here and we'll load our dotenv file.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=38)** And this line of code pretty much is saying, okay, if the environment variable is present, let's grab that.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=43)** If not, we're going to be prompted to enter our API key.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=47)** That's pretty much all that's saying there.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=50)** All right, so let's talk now about using LLMs.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=53)** So when you're building a LLM-based applications, you know one of the first decisions is which LLM to use.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=60)** And you can actually use more than one if you wish.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=64)** But the LLM is used at different stages of the pipeline.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=69)** It's used during indexing and during querying.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=72)** During indexing, we can use it to judge the relevance of the data whether we should index this or not.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=80)** And we can also summarize data and index based on those summaries.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=86)** During querying, an LLM is used for retrieval and response synthesis.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=92)** So when it's used for retrieval, it's fetching data from the index, choosing the best data source from the options and maybe even using some tools to to fetch data.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=103)** So LlamaIndex gives us a nice single interface to connect to various LLMs.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=112)** So you can easily pass in any LLM you choose at any stage of the pipeline.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=118)** In this course, we're primarily using, you know, OpenAI and Cohere.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=122)** And again, remember that if you want to see the full list of integrations for LLMs, it's available in the docs as well as on the GitHub.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=129)** So you can check that out if you'd like.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=132)** For this lesson, we are going to use Cohere.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=136)** So first thing we do is import our language model from Cohere.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=143)** We're going to use the command-r-plus model, set the temperature=0.2.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=149)** You can hack around with a variety of different parameters if you'd like.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=154)** So for example, if you're curious, "Okay, like what is it that I can pass as an argument to Cohere?"
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=159)** So to see the different arguments, of course you go to the LlamaIndex GitHub, you can go down to the integrations, you can look at the LLM integrations, look at Cohere, click on Cohere, go to base, scroll down until you see the Coherent LLM class and you can see all the different arguments that you can pass to the language model.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=186)** So for example, you could pass temperature max tokens and some other keyword arguments that are from the Cohere API.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=194)** So if you go to the Cohere documentation, look under the models or the text generation, the API, and see what different arguments you can pass, I'm only ever really going to manipulate the temperature.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=209)** So to get a response from the language model, we just do llm.complete.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=215)** So in this case, I'm saying to the language model, complete this sentence so we can run that and we'll get a response.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=225)** So Alexander the Great was a king of the ancient Greek Kingdom of Macedon and a legendary military commander.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=232)** So you see here all we did was pass a string, but you can also use a prompt template in LlamaIndex.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=239)** So prompt template, you can also use it to build an index to perform insertions to traverse during querying and synthesize the final answer.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=248)** There's several built in prompt templates in LlamaIndex, but what I'm going to show you is how to create one from scratch.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=254)** So we'll start by importing from llama_index.core, the prompt template.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=260)** I'm going to set up a template here, write a song about, and then I have a placeholder here for thing in the style of style.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=271)** And so to construct my prompt, I'm going to take that template and I'm going to format it with thing and with style.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=280)** So we can go ahead and hit that and we'll get a response.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=287)** Now you can see here it gives us a wrap in that particular style.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=293)** You can also use the chat message templates in LlamaIndex.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=300)** So chat messages are essentially just list of messages that are kind of the back and forth between the system or the the language model and the user.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=310)** So here, I've got a list of chat messages that I'm passing the language model and I'm going to ask the language model to create a response.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=319)** And notice here that instead of doing .complete like I did here, I'm using .chat.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=326)** And you can see here that we have the response like so.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=330)** You can also create a chat prompt template.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=334)** And it's done in much the same way as a regular prompt template.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=339)** So we instantiate our language model, we have a list of chat messages.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=347)** The content of one of the chat messages is actually a prompt template.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=353)** So we construct our chat prompt template using the list of chat messages and then we can format the actual prompt variable like so.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=366)** And you can see here, we get an answer.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=368)** So sitting around waiting for the answer is not the best user experience.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=372)** Well LlamaIndex allows you to stream the response from the LLM provider as well.
>
> **[6:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=378)** And so that's what we're going to do here.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=380)** So again, everything is the same, but except, I'm calling the stream chat method of the language model.
>
> **[6:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=388)** And you can see here that we get a much better kind of user experience instead of sitting there waiting for the response to complete, we're kind of seeing it happen in real time.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=399)** LlamaIndex also has a chat engine.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=403)** So instead of just doing these kind of messages where we're sending something to an LLM and getting something back, we can actually just kind of do a back and forth chat style with the LLM.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=413)** And when you run this, you'll notice something pop up here.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=417)** And so up here, we can go ahead and turn a message and maybe the message could be something like, "Hey, how do I learn something new?"
>
> **[7:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=429)** Hit Command + Enter and we'll get a response eventually.
>
> **[7:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=436)** And you can see here we get the response.
>
> **[7:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=438)** And so we can also continue the conversation if we'd like or just go ahead and hit Exit to exit.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=446)** Note that there's actually another method that we can call on the chat engine.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=454)** So if you're ever curious about what methods are available to you for any LlamaIndex module, so notice here that the chat engine is instantiated as a simple chat engine from default.
>
> **[7:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=467)** If I want to see the different methods available to me on the simple chat engine, I could just hit dir on that.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=476)** And we can see here that we have a streaming chat ripple method that we can use.
>
> **[8:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=483)** So we can use that as well.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=485)** So we can do cha_engine.streaming_chat_repl.
>
> **[8:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=490)** And you'll see here the same box pops up front, tell me how to learn a new knowledge.
>
> **[8:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=503)** And you can see here, it's a streaming output, so it makes for a much better user experience.
>
> **[8:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=510)** Great.
>
> **[8:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=511)** So that is the basics of working with language models in LlamaIndex, and this is an important component of a RAG system because this is how we generate our response.
>
> **[8:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/using-llms?u=76281980&t=523)** In the next lesson, I'll show you how to load data using LlamaIndex.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), let (3), interface (1), case, (1), except, (1)
> **Env Vars:** llm (11), api (3), rag (1)
> **Exercise Files:** template (9)
> **UI Navigation:** go to (2), select the (1), click on (1), scroll down (1)
> **Code Identifiers:** llama_index (1), cha_engine (1), streaming_chat_repl (1)
> **Tools:** github (2), colab (1)
> **Prerequisites:** set up (2), install (1)
> **CLI Commands:** make (2)

#### Loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=0)** - [Instructor] So we know that we can't build a rag system without external data, but in order to use our external data, we need to load it, and that's what we're going to learn how to do in this module.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=14)** So note that this module makes use of html2text.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=19)** You can run this cell and install that, or just install it from the command line like I've done here.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=25)** Make sure that you have connected to the environment and now we can go ahead and get right to it.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=32)** So preparing data for an LLM involves creating kind of an ingestion pipeline.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=39)** And this is similar to traditional ML, where we have data cleaning or an ETL process, and ingestion happens in three stages.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=48)** There's loading the data, transforming the data, and then finally indexing and storing the data.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=54)** So let's walk through how to load data.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=58)** So to use data with an LLM, we load it using a data connector, which is known as a reader in Llamaindex.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=68)** A reader is going to format data, in this case a text document, into a Llamaindex document object that's going to contain the data and metadata.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=80)** We're going to use a Simple Directory Reader, it's the most straightforward reader and loader that Llamaindex has.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=89)** A Simple Directory Reader can read data in various formats.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=93)** It could be markdown, PDF, word document, PowerPoint decks, images, audio, so on and so forth.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=99)** And it does so for every file in a directory.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=102)** So I've linked to the source code of Simple Directory Reader here.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=105)** And if you scroll to Simple Directory Reader, which we can do a Control F for, and you can see the different arguments that we can pass, you can pass in the input directory, and that's just going to read every single file that is in that directory and read each file into a document object.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=132)** Or alternatively, we can give it a list of input files.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=135)** So for illustrative purposes, I just want to work with one file, and in that case it's the Almanac of Naval Ravikant.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=143)** So I'm going to pass the input files argument, which needs to take a list of the files that we want to load and then hit the directory reader with load data.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=154)** So let's go ahead and do that.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=158)** So let's see what we have here.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=160)** All right, so we're going to get back a list.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=162)** This documents thing that I've defined here is a list, but how many elements are in that list?
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=167)** Okay, well it has 242 elements.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=170)** What do these elements represent?
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=172)** So we can look at the data itself, and unfortunately this PDF can't be rendered, so we'll need to get an extension.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=184)** So let's go here, let's do a PDF, PDF Viewer.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=190)** So we'll go ahead and do the PDF Viewer extension because it's going to be helpful for us to be able to view the PDFs that we have.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=198)** All right, so we've got the extension installed, and we should be able to go ahead and open this up and view it, and yes we can.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=208)** All right, so notice here that this PDF has 242 pages.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=215)** So this list of documents that we have is also 242 elements long.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=222)** Okay, that's interesting.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=223)** What are these things in this list?
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=226)** So let's go ahead and try to get the type of the first element.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=230)** Okay, well the first element is a Llamaindex document object.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=235)** So what does that look like?
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=237)** So we can, again, just pick any random element from that list.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=241)** We will hit it with __dict__.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=245)** And here is what a Llamaindex document object looks like.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=250)** It's essentially a dictionary, and it has an ID that is used to identify this document object.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=260)** It can hold the embedding, it has a spot for metadata, it has a spot to exclude metadata.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=266)** More importantly though, it's got the actual raw text for that page.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=274)** All right, and so this right here is a Llamaindex document object.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=279)** This Llamaindex document object that we have here is what we are going to be working with primarily throughout this course.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=289)** You can also manually create a document object.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=292)** So let's go ahead and and see how that's done here.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=295)** So I'm going to import from Llamaindex core, just the document class, and then just instantiate a manual document.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=304)** And to do so I need to pass in a string of text.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=309)** Okay, when we do that, we can hit it with dict, and you can see that it's got much of the same information as what we saw above.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=321)** We can actually add metadata to the document object ourselves.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=326)** So here we've got the manual document object with metadata.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=329)** And in this case I'm going to again give it some text and then I'm going to define metadata.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=336)** And this metadata will have two elements, the file name and some category.
>
> **[5:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=342)** And of course you can see that it shows up here, we have the metadata with the file name and category.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=349)** You can also add metadata to a document object after that document object has already been instantiated.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=356)** So you see here that we've got the same manual document as we saw above.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=364)** Right here you see that the metadata is empty.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=369)** So I'm going to go ahead and add some metadata.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=374)** And you can see here now that we have metadata associated with this document object.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=381)** After the data has been loaded, we need to process and transform it for retrieval.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=387)** So the way we do that is we transform a list of document objects into a list of node objects, and this can involve several different steps.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=397)** It could be chunking, extracting metadata, then embedding each chunk in the transformation.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=403)** And this node object is actually a first class citizen in Llamaindex.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=408)** And you can directly define a node or you can parse it from a document.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=413)** A transformation on a document object is essentially where we're taking an input and output as a node.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=423)** Right, so we have have this transformation.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=425)** What goes into this transformation is a node.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=428)** What comes out of this is a node as well.
>
> **[7:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=430)** So it's important to to point out here that actually document is a subclass of node.
>
> **[7:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=435)** And so nodes are just chunks of documents.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=437)** This could be text, this could be images, this could be metadata, this could be a relationship between nodes as well.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=443)** And Llamaindex has a number of node parsers, right?
>
> **[7:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=449)** So you could see here all the different node parsers that Llamaindex has.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=456)** So what a node parser does is that it converts documents into nodes with all the necessary attributes that it needs.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=463)** The high level API usage is just to use the from_documents method of a node parser.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=470)** And this will automatically parse and chunk the document object into nodes.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=476)** So what's happening under the hood is we're splitting the documents into node objects, and this is going to maintain the text and metadata with a link to the parent document.
>
> **[8:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=489)** So what we're going to do here is just define a node parser, in this case, a sentence splitter.
>
> **[8:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=497)** We'll talk a lot about splitting later, but just take it for granted that what we're doing is splitting a body of text, a string of text into chunks of 128 tokens, where each chunk has a 16 token overlap with the chunk before it.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=516)** And we're also defining a paragraph separator here, in this case, two line characters.
>
> **[8:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=524)** So we can go ahead and parse our nodes, and so let's take a look real quick.
>
> **[8:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=529)** What is the length of this nodes list?
>
> **[8:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=534)** So we have 890 nodes.
>
> **[8:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=537)** So we started with 242 documents, we chunked those 242 documents using a sentence splitter, and now what we have is a list of 890 nodes.
>
> **[9:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=551)** Each one of these nodes is a text node object, and this is what a node looks like.
>
> **[9:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=558)** So again, it is essentially just a dictionary.
>
> **[9:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=561)** We've got the page label of this node, the file name, the file path.
>
> **[9:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=566)** We've got the creation date, the modified date, we also have the relationships for this node, specifically what node came before it, what node came after it, and we have the text of the node as well.
>
> **[9:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=582)** Of course, you can construct a node manually if you'd like.
>
> **[9:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=585)** In this case, the node can be constructed using the text node class from Llamaindex.
>
> **[9:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=593)** We instantiated with the text argument, and here I am setting an ID for it as well.
>
> **[10:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=601)** And you saw me mention node relationships, which is helpful because this assigns connections between chunks of texts.
>
> **[10:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=612)** This is useful for documents that are organized in a hierarchical manner.
>
> **[10:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=617)** For example, books with chapters, and sections, and subsections, and paragraphs, and sentences, and words, right?
>
> **[10:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=625)** So if you have some hierarchical kind of structure to your data, then using a node relationship would be beneficial there.
>
> **[10:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=634)** This also helps maintain the sequential order of your nodes, which again is extremely useful for things that have complex relationships, like legal documents that have links to clauses, or other cases, or other precedents and whatnot.
>
> **[10:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=652)** And we can set node relationships just like this just by calling the relationships method of a node object.
>
> **[10:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=659)** So here you can see we have node one.
>
> **[11:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=662)** We're setting the relationships for the next node to be node two.
>
> **[11:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=666)** Then on node two, we're setting the relationship of the previous node to be node one.
>
> **[11:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=672)** And then here I've got a list of nodes.
>
> **[11:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=675)** And you can see here I can define a parent to child type of relationship between nodes like so.
>
> **[11:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=683)** So you can look at node two, and let's actually use a __dict__ on it.
>
> **[11:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=693)** And we have the relationships between node one and node two present here.
>
> **[11:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=699)** So now that we know how to load data, next we're going to talk about indexing and why this is important for retrieval augmented generation.
>
> **[11:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/loading-data?u=76281980&t=710)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (36), make (1)
> **Code Keywords:** let (9), pass (4), case, (3), module (2), for, (1)
> **Env Vars:** pdf (6), llm (2), etl (1), api (1)
> **Definitions:** is a  (8), known as (1)
> **Analogies:** similar to (1), for example (1), just like (1)
> **Cross-References:** as we saw (1), in the next (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** from_documents (1)

#### Indexing
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=0)** - [Presenter] In this video, we're going to talk about indexing our data.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=5)** So, let's go ahead and first make sure that we are connected to the environment.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=12)** We'll do our standard imports, grab our API key, and let's go ahead and talk about indexing.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=19)** So, what is an index?
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=20)** So index is a data structure that allows you to quickly retrieve relevant context for a user's query, and it's the core foundation of retrieval-augmented generation use cases.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=36)** In LAMA Index, a index is built from documents or nodes that are used to build retrievers, query engines, and chat engines.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=46)** All of these are what enable question and answer and chat over your data.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=53)** So, the way this works is you're going to load your data, and once that data is loaded you can construct an index.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=60)** And we're going to do this with a vector store index.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=65)** So this is the most common index type in LAMA Index, it segments your documents into nodes and then generates a vector embedding for each node's text, and then preps this to be inserted into the vector database so that an LLM could generate responses from it.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=85)** And so the way this works is we are going to parse raw text into a document object, split the document object into chunks or nodes, convert those nodes into embeddings, and then store those into a vector database.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=97)** So, let's go ahead and spend some time talking about what it actually means to embed text.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=102)** So, what I'm going to do here is I'm going to instantiate three different embedding models from Cohere: the Embed English V3, Embed English Light V3, and then Embed English V2.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=113)** So, let's go ahead and instantiate these.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=115)** Now, if you wanted to, you can use a local embedding model from Hugging Face.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=120)** You can check out the massive text embedding leaderboard to see what is hot.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=125)** If you're running locally and on a CPU, you might want to use FastEmbed.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=130)** These FastEmbed models are lightweight, they're quantized, and they're optimized for CPU usage.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=135)** So, there's a documentation linked there, but let's go ahead and just kind of get an idea of what an embedding is and how it operates on text.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=145)** So, here I have three strings, just a one-character string, a short little sentence, and then a really long chunk of text here.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=155)** So, let's start with one example embedding, and this example embedding is going to use Embedding V3 and get the embedding for string, which is just that letter A.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=168)** You'll notice that the length of this embedding is 1024, so the dimension of this embedding is 1024.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=176)** So, if you want to see what that looks like, you can just, actually, if you want to see what that looks like we could do so like this.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=184)** And you can see here that it is essentially just a array of numbers.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=189)** So, an array of 1024 numbers.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=193)** All right, and so it's going to be useful here just to define a function that's just going to get us the embedding dimensions.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=201)** All right, so let's get the embedding dimensions for these three strings of text.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=207)** And you'll notice that each one of these strings of text, they're all different length but the embedding for each one of these texts is exactly the same length.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=218)** You'll notice the same thing with Embed V3 Light.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=222)** They're each 384, and Embed V2 has 4096.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=229)** And that's because what an embedding does is that it takes a chunk of text, and from that chunk of text it's creating a vector, a fixed-length vector that represents what that text means.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=242)** So, we're not going to get too much into the mathematics of embedding, but this part is crucial, it's important to know that it doesn't matter what the number of tokens of that input text is, when we pass it through our embedding model we're going to get a consistent fixed-length vector.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=262)** Now, once we have this embedding, we can do some interesting things like compute similarity between embeddings.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=271)** So, here what I'm going to do is compute similarity using cosine similarity.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=277)** And so what I have here, you're just going to call the similarity method on Embed V3 between two pieces of text, this text here, and then string two which we had defined above using cosine similarity.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=290)** And we're able to now get some measure of similarity between those two strings of text, all right, so this is important to know.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=299)** Great, now that we know what an embedding does to a string of text and what we get as an output, let's go ahead and create an index.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=309)** So, what we're going to do is just get some data, this data, I'm just going to pull some text here from Project Gutenberg.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=316)** If you are curious, you can just look at this URL, and you can see here this is the book "It Can Be Done", which is just a bunch of poems of inspiration.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=327)** So, that's what "It Can Be Done" is.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=330)** So, now what we're going to do is we're going to generate embeddings.
>
> **[5:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=333)** And this can be time-consuming, especially with large volumes of text because there's so many API calls that we need to make.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=340)** To save time and cost, I'm just going to use 10,000 characters from the document, so I'm just taking a slice between these two ranges so I have a partial document.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=351)** And if you're interested you can look at what that looks like.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=355)** All right, so it's just a string of text, so we do partial_document.text, and you can see here what the text looks like.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=368)** All right, so now that we've got this partial document, we're going to create a vector store index.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=375)** So, on LAMA Index you can create a vector store index in two different ways.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=380)** You're going to use the from documents method when you have a set of documents that you want to index.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=386)** So it's going to take these documents, compute their embedding, and then store them into a vector store.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=391)** If you are using the from vector store method, this is when you already have computed embeddings that are stored in an external vector store, for example, like Quadrant, and this is going to connect the external vector store and use the pre-computed embeddings for the index.
>
> **[6:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=409)** So, what we're going to do here is create a vector store index from documents.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=416)** Remember, we need to pass a list of documents in order to make this work.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=419)** If you're to pass this without it being a list, you'd get an error.
>
> **[7:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=422)** All right, so under the hood, it's parsed the nodes and generated embeddings for each one of those nodes.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=428)** And so now we can go ahead and build an index over a list of node objects.
>
> **[7:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=436)** All right, so we're going to instantiate the node parser, we're going to pass a list of documents to the node parser, and then from that list of documents, so these different chunks, we are going to go ahead and create the index from nodes.
>
> **[7:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=450)** Note that this index right here, like this, is just, you can take a look at it here.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=456)** This vector store index is just this object that, essentially this entire document compressed into one vector representation, so that's what is happening here.
>
> **[7:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=467)** What we're doing here is we're taking that entire partial documents thing and we're splitting it up into smaller chunks of text, and each one of those smaller chunks of text is what ends up getting embedded.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/indexing?u=76281980&t=479)** So, what we are going to do is in the next lesson we are going to build on this pattern, and we're going to store and persist this index for future use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (4), this. (1), function (1), this, (1)
> **Env Vars:** lama (3), api (2), cpu (2), llm (1), url (1)
> **CLI Commands:** node (4), make (3)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** partial_document (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### Storing and retrieving
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=0)** - [Instructor] Now that you know how to load and index data in LlamaIndex, I'm going to show you how we can now store our data.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=10)** And in this lesson, I'm going to show you how to store data into Quadrant, which is going to be the vector database that we're going to use in this course.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=18)** So let's go ahead and do that here, do our standard imports.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=24)** We will set our API keys for cohere OpenAI.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=27)** Also instantiate our quadrant, URL and the quadrant API key.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=32)** This function here is just going to create a directory called data.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=36)** I've already done that here.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=37)** And essentially we're just downloading a text file.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=40)** This text file is going to be a book of poems called, "It can be done."
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=46)** So we're just saving that to disc.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=48)** I've already done that and I'm going to now load the text document itself as a LlamaIndex document object using the simple directory reader.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=62)** Now remember that simple directory reader.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=64)** Typically if you just pass it a path that it's going to just read all of the files in that path, or you can specify a individual file and pass that as the input files argument, and you have to pass that as a list.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=79)** So basically that's all we're doing here.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=82)** We're just pointing to this particular file on disc and saying, Hey, LlamaIndex simple Directory Reader, this is the input file that I want to read into a document object.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=94)** Great. So we'll go ahead and do that.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=96)** And I'm going to instantiate a node parser and instantiate a embedding model.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=103)** So up to this point, we have loaded our document.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=107)** We haven't parsed the nodes yet, but we have instantiated a node parser.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=112)** And now what we need to do is create a index.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=115)** So we are going to be creating a vector store index using quadrant.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=120)** So to use quadrant to store embeddings, we need to initialize the client, create a collection to store data into quadrant.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=128)** Then we need to assign quadrant as the vector store in the storage context.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=133)** Then we initialize the vector store using storage context.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=136)** So I will talk about what storage context is in just a moment, but let's go ahead and initialize the quadrant client.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=142)** We need to pass in the quadrant URL and the API key.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=147)** And then once we have that, we'll instantiate the vector store using the quadrant vector store passing in the client and the collection name, in this case, the collection name, I'll just call it, it can be done.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=158)** And we also need to pass in the embedding model that we're using.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=161)** So this case, we are going to be making use of OpenAI text embedding three small.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=168)** So we instantiate those and now we can talk about storage context.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=172)** So storage context and LlamaIndex is just an abstraction that says, these are my nodes that I want to store, and just makes it easy to store and retrieve data.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=182)** And in a storage context, you can indicate different storage kind of places.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=188)** For example, a simple document store, a index store, a vector store, or a graph store a link to the documentation here where you can read more about each one of those.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=197)** But what we are going to do is substantiate a storage context from defaults and just specify the vector store.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=206)** All this is saying now is to LlamaIndex like, Hey, look, this is the vector store that I'm using.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=211)** This is where I want to store all of my nodes and all of my embeddings, and it's just like a pointer to where it is that I'm just saving stuff essentially.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=220)** Now I can create an index.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=221)** So I'm going to create the vector store index from documents, right?
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=226)** And I'm switching the pattern up on you just a little bit because it's a bit of malice in forethought because you're going to learn about the ingestion pipeline in a later module.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=238)** But what I'm doing here is I'm passing this transformation argument into the vector store index class and just saying, Hey, split my text into smaller chunks using this embedding model and store it in this place.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=253)** So now we've constructed this index that is where our vectors and our text is going to live.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=261)** So let's go ahead and run this code here, right?
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=265)** And we can see progress here. Great.
>
> **[4:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=268)** Now that this is done, you can go into quadrant, go to overview.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=274)** You can look at your clusters.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=275)** We see we have a cluster here.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=278)** Click that carrot, hit open dashboard and see now that we have a collection, right?
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=284)** So this collection has all the content of our node, so all the metadata and a bunch of other information here.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=294)** Essentially they saw metadata and that it also has vectors.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=296)** So our vector length is 1536, which is the dimensionality of the text embedding three model.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=304)** You can copy this default vector if you want, you know, just copy and just paste it here you can see that, you know, here's the vector representation of that text that we have just indexed.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=314)** What's interesting is you can actually also do a little bit of visualization as well.
>
> **[5:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=318)** So if we go to the visualization tab, go down here, just hit run, and you'll see that here is all of the vectors that we've embedded.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=329)** So you can get some vectors here that kind of have a notion of similarity, which is quite interesting.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=335)** So you can click around here, and essentially this is just a way for you to see, okay, visually like, oh, these two vectors are kind of close to each other.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=341)** What are they? What can these two vectors be?
>
> **[5:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=344)** And then you can grab the node ID, the document ID, and kind of just take a look at what's in there.
>
> **[5:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=350)** So another way you could do that is going back here and just scrolling down and find similar.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=361)** And you'll get the most similar vectors to that one.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=365)** So just a little bit of interesting things you could do with the quadrant UI.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=369)** So now let's go ahead and go back into the code and talk about retrieval.
>
> **[6:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=373)** So now we've indexed our data.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=375)** It's living in the quadrant cloud.
>
> **[6:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=378)** We can now do some retrieval.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=381)** So a retriever is actually a interface that's exposed by the index.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=387)** So an index with its retriever is what we use to store and fetch data.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=392)** And this retriever is actually part of the index.
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=395)** There's a bunch of different retrievers that you can use in LlamaIndex.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=399)** Look at the source code, and you can see some here, we'll talk about these later in the course when we talk about advanced RAG techniques.
>
> **[6:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=406)** But here are some examples.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=408)** There's a vector retriever, fusion retriever, recursive retriever.
>
> **[6:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=412)** I'm going to be respectful of your time and let you read about those on your own.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=416)** But just know that they exist and that we are going to touch on some of these a bit later in the course.
>
> **[7:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=421)** So we're going to be now using a vector retriever.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=424)** So when we're searching, our query is going to be converted to a vector embedding.
>
> **[7:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=429)** It's going to be converted to the vector embedding using the exact same embedding model that we had used to embed our vectors.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=437)** So in this case, that is going to be the text embedding three from OpenAI, text embedding three small from OpenAI.
>
> **[7:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=445)** So in quadrant, when we ingest these vectors in quadrant parlance, they're known as points.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=452)** So what I'm telling the index to do here is retrieve the top five most similar points to the user's query and make sure that those retrieved vectors have a similarity of at least 0.75.
>
> **[7:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=471)** So that's what I'm saying to the retriever, that these are the conditions for the points that I want to retrieve from quadrant.
>
> **[7:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=477)** So I instantiate my retriever.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=479)** Now that my retriever has been instantiated, I can pass a query.
>
> **[8:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=483)** So here I'm just in the pass a generic query, what lessons can be learned from the poems about success?
>
> **[8:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=489)** And you'll see here that we end up with five nodes, and these are nodes with scores.
>
> **[8:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=495)** So if you scroll all the way to the far end here, you'll see that we have all the texts for all the nodes, and we also have some similarity as well.
>
> **[8:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=503)** So you'll notice that none of these scores meet the similarity threshold.
>
> **[8:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=507)** We'll talk about order of operations for this in a later module, but here we've retrieved our documents.
>
> **[8:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=514)** So chances are you don't just want to return documents, you want documents to be synthesized into a response.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=519)** So we are going to build on this pattern that we've seen here in the next lesson, and then I'm going to show you how you can actually just get a generated response based on those retrieved documents.
>
> **[8:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=531)** So you can go ahead and close out the client.
>
> **[8:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/storing-and-retrieving?u=76281980&t=533)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), let (5), case, (3), module (2), function (1)
> **CLI Commands:** node (4), find (1), make (1)
> **Env Vars:** api (3), url (2), rag (1)
> **Cross-References:** later in (2), in the next (2)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1), just like (1)
> **Versions:** 0.75 (1)
> **Documentation:** the documentation (1)

#### Querying
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=0)** - [Instructor] In this lesson, I'm going to introduce you to the concept of a query engine.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=5)** A query engine is key in LAMA index to generate a response based on the nodes that you have retrieved from your vector database, so let's go ahead and see this in action.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=17)** We start, as we usually do, with our imports and setting our API keys.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=22)** Now what is querying?
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=23)** So once we've loaded our data and built an index, we need to now query that index and generate a response.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=32)** And essentially all querying does is just make a prompt call to a language model.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=38)** And this could be asking a question, requesting a summary, or giving some more complex instructions.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=43)** You can also like chain prompt calls to an LLM if you'd like, or you know, use some type of agentic reasoning loop.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=50)** We will talk about agents in the next video, but let's just focus on querying for this lesson.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=56)** So we start by instantiating the quadrant vector store.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=62)** So to instantiate the quadrant vector store, we need to instantiate the embedding model, the client.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=69)** Instantiate the vector store, have it point to our collection as well as the storage context and then finally load the index from the stored vectors.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=80)** Now we can talk about the query engine.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=81)** So the query engine is also a construct that uses the index and by extension a retriever to answer a user's query.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=90)** So it's going to retrieve the relevant data and then inject this into the prompt that is going to be sent to an LLM to generate a response.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=102)** So we're using a retriever to fetch the data and then on top of that doing some additional logic to generate a response.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=110)** So under the hood there's retrieval, post-processing, and response synthesis that happens.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=115)** There are a number of query engines in a LAMA index that you can use.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=120)** You can see here in the source code, there's a ton of them.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=122)** I'm not going to talk about all the different query engines in this course, but I'll talk about some of the most important ones in the advanced rack module.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=131)** But for now, let's go ahead and instantiate a language model, instantiate our query engine, and then ask for a response from the query engine.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=141)** So, note here, I'm asking the question here about Sikh Stoics.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=144)** So I've got a book of poems from, like, the 1800s.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=147)** So I would expect that we don't get any nodes retrieved from the language model because as far as I know, Sikh Stoicism is not a real thing.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=159)** You know, beyond me, I don't know who else is a Sikh Stoic.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=162)** So I would expect to have no nodes retrieved and I would expect the language model to essentially not hallucinate, not make up an answer and just say, "Hey look, based on the context that I've got, here's what I see or don't see."
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=177)** So let's go ahead and do that here.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=181)** All right, so perfect.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=183)** It does exactly what it is that we need it to do.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=188)** And if you wanted to see the source nodes that are associated with the response, you could do so like this, just calling the .source node attribute on the response.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=196)** And you see we got two nodes that got returned here.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=198)** So let's go ahead and take a look at what these two nodes actually have.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=203)** So we can say source_nodes zero.gettext
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=213)** and you can read the text here and see that you know it was retrieved.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=218)** And you can see the similarity score here was probably quite low, in this case .31 on you know each one of them, but it does not mention Sikh Stoics at all or anything about Sikhism or stoicism from that quick glance.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=236)** And do you see here, again, no mention of it.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=238)** So the language model, in this case command R plus as a language model is doing a good job saying, okay, well we have context that's been retrieved, but this context doesn't really line up with what the user's asking.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=252)** So I'm just going to go ahead and say, look man, I can't answer this question.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=255)** So that's what's happened there.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=256)** That's the response I want to see.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=258)** So let's go ahead and and submit a query that might have a response in this book.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=263)** So in this case, I'm asking for poems by Rudyard Kipling.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=267)** So let's just do a bit of a sanity check here.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=269)** We can go data, look at the text, we can do a control F for Rudyard Kipling and see, okay, here's one poem called If, another poem called When Earth's Last Picture is Painted.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=281)** We can see that Rudyard Kipling is mentioned in more places than just the table of content.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=287)** So for example here we've got like a little bit of a biography perhaps of Rudyard Kipling.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=293)** And then also you can see it's listed here in the index of sorts of the text.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=298)** Alright, so I would expect the language model to tell me that there are two poems by Rudyard Kipling in this book.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=305)** So let's see what happens.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=309)** Awesome, so it worked as planned.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=312)** We can also instantiate a chat engine.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=316)** So a chat engine is going to let us kind of interact with the language model and the vector index in kind of a conversational manner.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=326)** So we run this cell, scroll up to the top here.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=330)** You'll see that we have a text box that we can enter and we can just simply ask a question.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=335)** For example, like what topics does Rudyard Kipling write about in this book of poems?
>
> **[5:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=350)** And you can see after a little bit of time we do get a response from the coherent language model.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=356)** I imagine it would be quicker if we used OpenAI, but essentially it's just saying Rudyard Kipling's book of poems has these type of topics.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=362)** And then maybe we can ask a follow up question if you'd like.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=365)** But I'm just going to go ahead and type in exit because I think that illustrates the point.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=370)** Something to point out here is that there's actually different modes of chat, so different ways that you can synthesize that response.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=377)** So you can do a simple chat mode, condense the question, just retrieve the context.
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=383)** You can do a condensed plus context, which just is going to condense the conversation and the history of user messages into a standalone question.
>
> **[6:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=394)** You could do React, which is a type of agentic behavior or Best.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=399)** So I've linked to the documentation here where you can learn more about the different chat modes.
>
> **[6:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=405)** So go ahead and check that out if you're a (indistinct) interested and we'll touch on this a little bit later.
>
> **[6:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=410)** So here again, I'm just going to go ahead and instantiate a chat engine using just the context mode.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=416)** And I'll go ahead and start the chat repl.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=423)** So here we have a memory that's been instantiated.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=425)** This is just saying keep in memory the last 1500 tokens of interaction.
>
> **[7:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=432)** Then we can instantiate our chat engine with our LLM using the context mode memory that I'm adding a additional system prompt here saying that you know, you're a chat bot able to have normal interactions as well as talk about this book of poems.
>
> **[7:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=447)** So I'll go ahead and let you run that on your own and you can see that in action.
>
> **[7:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=451)** So something to point out is that you can actually customize your query.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=456)** So you can customize retrieval, you can add post-processing and you can add some similarity processing as well.
>
> **[7:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=462)** So there's a lower level API that LAMA index has, and here you can adjust the top K.
>
> **[7:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=469)** And this gives you just more granularity over the query results.
>
> **[7:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=473)** And remember, top Ks is like the top K most similar nodes or points to retrieve from the database.
>
> **[8:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=481)** Post-processing could be something like adding a minimal similarity score threshold or doing some other more advanced things that we'll talk about in a later module.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=493)** And again, you could also do some similarity score processing as well.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=498)** And this is how you do that.
>
> **[8:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=499)** So we've seen this already, the similarity top K, in this case I'm instantiating a retriever using the similarity top K equal to 10.
>
> **[8:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=509)** And then I'm adding a post processor saying, okay, just give me all the nodes that have a similarity of at least 0.42.
>
> **[8:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=518)** And here I'm configuring a response synthesizer and then passing all this to the retriever query engine.
>
> **[8:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=525)** And we're going to talk about the retriever query engine and this pattern a lot more in depth in the advanced drag module, but just kind of talking about that right now to give you a bit of a motivation for what's coming ahead.
>
> **[8:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=537)** So let's go ahead and close out the client.
>
> **[9:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=540)** I'll let you run this on your own.
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/querying?u=76281980&t=543)** And in the next module we'll talk about agents in LAMA index.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), module (4), from, (1), this, (1), case . (1)
> **Env Vars:** lama (4), llm (3), api (2)
> **Analogies:** for example (2), picture (1), imagine (1)
> **CLI Commands:** make (2), node (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** source_nodes (1)
> **Versions:** 0.42 (1)

#### Agents
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=0)** - [Instructor] In this module, we're going to talk about agents in LlamaIndex.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=4)** Now throughout this course, we're not going to be making much use of agents.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=8)** I'll talk a little bit about agents in the advanced RAG and modular RAG sections of the course, but I figured it's a good idea to just introduce you to the concept of agents right now.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=21)** We begin with our imports and setting our API key, and then we'll go ahead and start talking about agents.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=29)** So what is a agent in LlamaIndex?
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=32)** An agent is able to decompose a complex user query into simpler questions.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=37)** Once it's broken it down into these simpler questions or simpler queries, it's able to decide what tool it needs to execute against that question.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=49)** It's able to create a plan for how it's going to execute and then go ahead and do the thing.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=55)** It's a pretty powerful capability that these large language models have, and a lot of it is some interesting reasoning that goes on under the hood, but it's essentially just a prompting strategy.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=70)** So agents are a really complex, interesting prompting strategy, plus giving the language model access to tools.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=78)** So I'm glossing over that now, but if you go to the LlamaIndex docs, go to the component guide, click on agents, and you can learn a lot more about how agents work by following the documentation.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=92)** So there's some good documentation here.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=94)** You can see the usage pattern for agents and some different agentic strategies.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=100)** So just a heads up, we'll be talking about routing and query transformations much later in the course.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=104)** And then you can also see the lower level API for creating an agent.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=110)** If you're interested in going even deeper, by all means read the source code.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=116)** But for now, I'm just going to proceed with a simple example.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=120)** And this simple example is just going to show you the React prompting strategy or the React agent strategy.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=127)** I'm going to use a calculator.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=129)** We're not going to use any complex pipelines or any APIs or anything like that.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=133)** And I'm just going to show you how this works.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=134)** So I'm going to define a tool, and in this tool we're going to create a multiply and ad function.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=140)** But these multiply and ad functions don't work the way that math works in our universe.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=146)** These are multiply and ad from a alternative universe.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=151)** So here the multiply function is going to multiply the second integer by 1.25 and then multiplies the result with the first integer.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=161)** And the add function is going to subtract 0.42 from the first integer and then add that to the second integer in the result.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=169)** And so what we do is we define the functions like I've done here, and then we create a function tool, which is an abstraction in LlamaIndex that essentially indicates the language model, that this is the tool that you have at your disposal.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=184)** So we create our tools and you can see the metadata for the tool.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=192)** So in this case, here's the metadata from the multiply tool.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=195)** I've got the description and the description is coming strictly from the doc string.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=200)** So it is really, really important to have clear well-written doc strings when you're working with an agent.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=207)** Now what I'm going to do is I'm going to instantiate a language model.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=210)** So here I'm using Command R.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=212)** Let's go ahead and just use command R+.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=216)** And then I'm going to initialize the agent, which is going to be a React agent, which is just a a prompting strategy.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=223)** We initialize the language model, initialize the agent, and we can take a look at the prompts that the agent has.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=232)** All right, we can print the prompt.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=235)** The prompt is like this.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=237)** So like I mentioned, agentic behavior is really just a prompting strategy.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=241)** It's a sophisticated prompting strategy, but that's exactly what it is.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=245)** So the prompt is saying that you are helping with some tasks, you've got tools at your disposal, and you know, it's essentially telling the language model how to carry on a a conversation, if you will, right?
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=261)** So now what I'm going to do is a bit of a composition here, just getting the ground truth answer, right?
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=267)** So I know that if I run the function in this manner, that the ground truth should be 19.58.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=276)** So now what I'm going to do is ask the agent to use tools to do this type of multiplication.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=284)** And so I say you live in an alternate universe.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=286)** Math works according to the tools that you are provided with, use the tools and do this multiplication.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=294)** And so under the hood, there's several calls that are being sent to the language model and you can see how it's reasoning through the answer.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=304)** Does it get to the final answer here?
>
> **[5:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=306)** In this case, it doesn't get to the final answer.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=311)** Okay, so command R+ is the language model we used, and we can change this up by just going to regular command R and just seeing, hey, does this language model do a better job?
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=321)** So again, I'm just going to initialize everything that we've done here and let's see if we can get a response.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=329)** There we go. So it looks like Command R did a better job of tool usage and age agent behavior than command R+.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=336)** So maybe that's something to keep in mind when we go to our later modules where we talk about Agent to RAG, but there we have it, agents in LlamaIndex.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=346)** There's links to the documentation here.
>
> **[5:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=350)** You can look at the usage pattern, different strategies, and kind of under the hood of how Agent works.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=356)** So with this, we are now done talking about the core components of LlamaIndex, and we can now finally get into using LlamaIndex for retrieve augmented generation.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agents?u=76281980&t=371)** And I'll see you in the next module.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), module (2), case, (2), let (2), this. (1)
> **Env Vars:** rag (3), api (2)
> **Versions:** 1.25 (1), 0.42 (1), 19.58 (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** later in (1), in the next (1)
> **Documentation:** the documentation (2)
> **Warnings:** heads up (1), keep in mind (1)


### 3. Introduction to RAG

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Components of a RAG system
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=0)** - [Instructor] In this module, we're going to get a introduction to retrieval-augmented generation.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=6)** Specifically, I'm going to teach you the concept of a Naive RAG pipeline, but we have a couple of modules to go before we get there.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=16)** So I want to set the tone for what this chapter is going to be.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=23)** I'll begin by giving you a high-level overview of the components in a RAG system.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=28)** Then, the next two videos, I'm going to talk about an ingestion pipeline and a query pipeline.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=34)** These pipelines are abstractions over what we saw in the previous chapter and in the previous modules.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=41)** What we saw before were the low-level APIs.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=44)** I think that's important for you to understand how the low-level APIs work so that the high-level stuff isn't like confusing to you.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=52)** So we're going to first talk about the components of a RAG system, talk about the ingestion pipeline, query pipeline.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=57)** I'll touch on prompt engineering for RAG.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=61)** And then, we'll talk about data preparation.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=63)** And then finally, we'll put all of that together in a end-to-end pipeline, and this is going to be called the Naive RAG pipeline.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=71)** And I'll close off this section by talking about the drawbacks of Naive RAG.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=77)** And then from there, we are going to build on RAG.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=80)** We'll talk about advanced techniques and modular techniques as well.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=86)** So let's go ahead and get right to it.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=88)** Let's talk about the components of a RAG system.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=91)** So at a high level, a RAG system is a three-step process.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=95)** So you start with a user query that comes in.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=99)** We take that user query, we search the knowledge base for context that's related to that user query.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=107)** We're then going to take that retrieved context, we're going to add it to a prompt.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=112)** and this gets sent to the language model.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=114)** The language model is going to do what it does.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=118)** It takes in that prompt, that string of text, and then it's going to generate an output.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=125)** And so this three-step process has several different components that we've been introduced to over the previous modules.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=133)** So there's the language model, there's the prompt, there's document loaders, there's document chunkers, or node parsers, there's the embedding model, the vector store, the vector store retriever, and the user input.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=145)** So even though it's a kind of three-step process, there's a lot of different moving pieces.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=150)** We've touched on all of these in the previous chapter.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=154)** And as we'll see throughout the course, there are a wide variety of configurations for each one of these different core components of a RAG system.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=165)** And we'll learn about how we can manipulate those components to define several different types of retrieval strategies.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=175)** So now that you are familiar with the core concepts in LlamaIndex and the components that you need for RAG system, let's talk about how we put these together into several different subsystems.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=190)** And these subsystems, the index retrieval and augment subsystems work together kind of in a orchestrated matter.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=196)** We're transforming a user's query into a contextually-rich and accurate response from the LLM.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=206)** Let's start by discussing the indexing system.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=210)** So the indexing system is going to prepare and organize data for retrieval.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=215)** And there's several different steps that happen in the indexing system.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=219)** So first, we are loading documents.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=222)** Those documents are going to then get split up and chunked up so that we have smaller, more manageable chunks of documents.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=232)** Those document chunks get sent to an embedding model, which creates the embeddings and pushes that to a vector database.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=241)** And that is where we store our embeddings.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=246)** Then, we have the retrieval system.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=248)** And so the retrieval system is what fetches the most relevant information and context based on the user's query.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=257)** So we start with a user's query, then, we embed that user's query using the same embedding model that we use to embed our context in our documents from the indexing stage.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=271)** We then, with that embedding, perform vector search, and we're going to look for embeddings that closely match the user's query.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=281)** And then we fetch those, those get returned to us.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=285)** These returned snippets, these returned chunks of context are then sent to the augment system so that we can generate a response.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=297)** So the augment system is actually the second half of this image here.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=302)** And the augment system is going to enhance and augment the prompt that gets sent to the LLM with the retrieved context.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=311)** And this is going to ensure that our model has the necessary information to generate a response.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=320)** So we create a initial prompt.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=323)** This is going to start with the user's original question or query.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=328)** And we augment this prompt with additional context that we have retrieved from the vector store.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=335)** Now, we have got a enriched input for the LLM.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=340)** This gets sent to the LLM.
>
> **[5:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=342)** And the LLM generates a response, which is then sent to the user.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=347)** And so it's these subsystems, the indexing, retrieval, and augment systems, that make up the whole RAG system.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=358)** And this helps us get more accurate, credible, and contextually irrelevant outputs from our system.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=368)** Now, with this in mind, we're going to talk about the higher-level abstractions in LlamaIndex, the ingestion pipeline and the query pipeline.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/components-of-a-rag-system?u=76281980&t=377)** And we'll see how we can start to now build a actual end-to-end RAG system.

> [!info]- Semantic Content
>
> **Env Vars:** rag (13), llm (5)
> **Code Keywords:** let (4), module (1), finally, (1)
> **CLI Commands:** node (1), make (1)
> **Cross-References:** previous chapter (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Ingestion pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=0)** - [Instructor] In this video, we are going to talk about the ingestion pipeline abstraction.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=6)** So, let's go ahead and connect to our kernel, do our standard imports, set our API keys, and start to build out an ingestion pipeline.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=17)** So, I want you to notice that we're doing something a little bit different here.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=20)** We're using the settings from LlamaIndex.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=23)** So, what are settings?
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=25)** Settings are just essentially global configurations.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=29)** So, it's just something that we are going to make use of a lot later, but it's just a way to set things globally.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=36)** So, if you're interested, you can look at the LlamaIndex documentation about settings.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=41)** Next, we are going to now build the ingestion pipeline.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=44)** So, what is the ingestion pipeline?
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=47)** Well, we're using transformations that are going to be applied some input data.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=52)** We're going to modify this input data, turn it into documents, parse it into nodes, and then we're going to insert it into a vector database.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=60)** With an ingestion pipeline, you can also use a caching mechanism, so that the nodes and transformations that pair is cached.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=67)** So, this just makes it more efficient to do a subsequent operation.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=72)** If you want to learn more about the ingestion pipeline, you can go to LlamaIndex documentation.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=77)** So, you go to docs.[llamaindex.ai](https://llamaindex.ai), look at Component Guides, and then under Loading, go to Ingestion Pipeline.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=84)** And this will give you a breakdown of the usage pattern for the ingestion pipeline.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=89)** So, a lot more detail here if you're interested in that.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=92)** But I'm going to cover that here anyways, so let's see it in action.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=95)** So, what we're going to do now is instantiate a ingestion pipeline.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=100)** We're going to build it out and push data into quadrant.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=104)** So, what we're going to do is use the same data that we used in the previous module, the book of poems.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=111)** We're going to use the same book of poems in the previous module.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=114)** It can be done.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=115)** And what I want to do now is actually, we're going to go back into quadrant, and I'm going to actually delete the collection that we've already created.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=125)** So, we can log in, click on the hamburger menu here, go to Clusters, open the cluster dashboard, and just hit delete.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=138)** So, we're going to delete this collection and we're going to rebuild it this time using the ingestion pipeline.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=145)** So, again, using the simple directory reader, we've touched on this before and we can now build out the ingestion pipeline.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=153)** You can build out an ingestion pipeline with document management.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=157)** Document management is nice, because you can cache your embeddings.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=161)** So, this just speeds up processing.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=164)** You can cache locally if you like.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=166)** You can cache your documents locally, you can add a dock store, you can, you know, handle duplicate data, and things like that.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=173)** So, I encourage you to read more about this.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=176)** Feel free to pause, read more.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=179)** You can also again, go to the documentations.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=181)** So, if you go to LlamaIndex ingestion pipeline documentation, you can read more about the caching here, the remote and local caching, document management, and all that stuff.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=198)** So, I'm going to go ahead now and instantiate our quadrant client and our ingestion cache.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=205)** And then, I'm going to build out the ingestion pipeline.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=208)** So, the ingestion pipeline is going to take transformations.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=212)** And the transformations, I'm going to use in this case is a token text splitter, and then also pass in the embedding model.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=220)** So, what we're saying to the ingestion pipeline is split our text into chunks of 256 tokens, and then embed those.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=229)** And then, here's just kind of for document management, just really illustrate how it works.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=234)** We're not actually going to make use of those too much.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=237)** And once we've created the pipeline, we run it so we can create our nodes.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=242)** So, we'll create nodes by taking our pipeline and running it against our documents.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=251)** And this will take a little bit of time to run here.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=256)** And now, once it's run, you go back to the Quadrant UI, you get hit refresh, and say, oh, we've got our collection back.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=263)** Right.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=264)** So, you see here, it's following the same patterns that we've seen before.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=269)** It's just a higher level abstraction. Right.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=272)** So, we see that we have our nodes, we've got it ingested into quadrant.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=279)** And now, if we are curious to see what one of the nodes looks like, we can do so like this.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=283)** So, each node has essentially got all the metadata that we have seen before.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=289)** We can now instantiate a index, create a retriever,
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=298)** and then retrieve nodes.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=302)** And you can see that we've got a set of retrieved nodes.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=305)** Let's just look at one. We can get some text.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=308)** So, "Start Where You Stand" is a poem by Berton Braley.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=312)** And so, we've got some text there, we can look at the score.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=316)** And of course, if we wanted to, we can persist the ingestion pipeline.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=320)** So, if I hit this, you'll see that we create a directory here that's just got a doc store and a cache.
>
> **[5:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=331)** And that's it. That's the ingestion pipeline.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=334)** We are going to make use of this over and over throughout the course.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=339)** To be honest, I think it's meant to make it easier to ingest stuff.
>
> **[5:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=343)** But as you can see here, we're going to be doing a lot of the same stuff over and over, instantiating a client, instantiating a vector store, creating a pipeline, and then doing some type of ingestion.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=353)** And so, it might be useful now to create some helper functions to make this easier, so that we have less code on our notebook.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=360)** And after the next lesson, I'll show you how we're going to do that.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ingestion-pipeline?u=76281980&t=366)** So, I'll see you in the next one where we are going to talk about the query pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (3), module (2), this. (2), pass (1)
> **UI Navigation:** go to (5), click on (1), open the (1)
> **CLI Commands:** make (5), node (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **URLs:** [llamaindex.ai](https://llamaindex.ai) (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### Query pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=0)** - [Instructor] In this video, we are going to talk about the Query Pipeline.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=4)** So the Query Pipeline in LlamaIndex is a declarative API that allows you to chain together different modules so that you can orchestrate workflows, whether they be simple workflows or advance and complicated workflows.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=20)** This is all centered around this abstraction called the Query Pipeline.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=25)** And the query Pipeline lets you load modules such as LLMs prompts, retrievers, re-rankers, or even other pipelines, connect them together in a sequential chain.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=37)** Or if you want, you can connect them as a directed acyclic graph or DAG for short and run it end to end.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=46)** This is nice because it's going to allow you to express common workflows with fewer lines of code, less boilerplate code.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=53)** It'll increase the readability of your code.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=56)** And in the future, you'll be able to serialize pipeline components so that there's more portability and easier deployment to different systems.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=65)** Query engine is a super powerful abstraction in LlamaIndex.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=69)** I encourage you to learn more about it by visiting the documentation.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=74)** If you go to the LlamaIndex, Component Guides, you can look in Query Pipelines and then you'll get some thorough documentation about what the Query Pipeline is, how it works.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=86)** There's also a great introduction to Query Pipelines.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=91)** This is going to be under examples, Query Pipelines.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=95)** You'll see examples for building an agent using a Query Pipeline, and you can also see how to use Query Pipelines with different types of workflows.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=104)** In this course, we're going to focus on using the Query Pipelines for RAG applications to simple, straightforward RAG applications.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=113)** And let's go ahead and see how that works in action.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=116)** Now we'll go ahead and instantiate the LLM embedding model, instantiate our quadrant vector store and build an index over it.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=125)** And now, what we're going to do is create a very simple RAG pipeline.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=131)** Well, it's simple, but it is slightly complex.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=134)** And in this workflow, what's going to happen is we're going to have a input that's going to be passed through two prompts, and we're going to have a retrieval module sitting in the middle.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=146)** And we are going to finally have all that synthesized by a large language model.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=151)** So what I'm doing here is essentially going to build a chain.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=156)** I'll start by describing the chain and then what the different components are.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=159)** In this chain, I'm going to have a prompt template.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=162)** I'll have that prompt template passed to the retriever.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=166)** What I retrieve will be passed to another prompt template, which will then be sent to the LLM for generating a response.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=175)** And the prompt templates are like this.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=178)** The first prompt template is just saying retrieve context about the following topic and topic is what the user will pass in.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=185)** We'll format that as a prompt template.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=189)** Then the second prompt template we're creating is just saying synthesize the context that's been provided to you using modern slang, yet still quote the sources.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=198)** And we'll build a prompt template from that.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=201)** And then we're just going to use a retriever over our index and just fetch the five most similar chunks of text to the user query.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=211)** So we'll go ahead and run that cell and we can run this and we'll get a response.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=218)** And you can see we set verbose equal to true.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=221)** So we see the intermediate steps happening in action as well.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=226)** And right here, we have the response.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=229)** And you can see, you know, talking in modern slang, There's this dude who's like, "Yo, we got to climb this mountain, but we ain't got no fancy gear," so on and so forth.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=238)** And it's actually quoting from the "Book of Poems."
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=242)** So Edgar A.Guest, I can't confirm, Edgar A. Guest has poems in the "Book of Poems."
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=248)** And if you wanted to, you can check this out as well.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=253)** Now if you want or two, you can look at some of the intermediate steps that are happening under the hood by running with intermediates.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=262)** So we usually run with intermediates method of the pipeline.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=266)** And let's go ahead and I've already run that here and we can see what we have as the output.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=274)** And the output you can see here is, you know, what we saw above.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=279)** We can view this as a dictionary if you'd like, by hitting it with double __dict.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=288)** And you can see what's happening under the hood there.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=293)** And intermediates, you can see here are dictionaries that have the intermediate responses and nodes that are fetched from the language model.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=304)** So if you wanted to slice into one just to kind of see what it looked like, you could do that as well.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=311)** All right, so let's go ahead and build out another rag pipeline.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=315)** Here, what we're going to do is build out a, there's the standard straightforward kind of RAG pipeline without the query rewriting step that we saw above.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=324)** But what we're going to do is define the links more explicitly.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=329)** So we start by defining the input component because we need a way to link the input query to the retriever and to the tree summarizer.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=339)** And so what we do is define that with a input component here we're going to have a retriever over our index.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=345)** I'm going to use a different LLM this time using GPT-4.O, and I'll use a tree summarizer.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=352)** If you're not familiar with what a tree summarizer is, don't worry about it too much.
>
> **[5:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=357)** We'll come across it a bit later in the course as well.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=360)** So we'll run that.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=361)** And what we're going to do is explicitly define the Query Pipeline.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=366)** It's what we're doing here.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=368)** Then we're going to add modules to the Query Pipeline.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=371)** And we do that by passing in a dictionary with key value pairs being, you know, kind of the the name and then the actual component itself.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=381)** So here, I'm just adding the input retriever tree summarizer modules, and now I'm adding links between them.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=387)** So I'm linking the input to the retriever, and then I'm linking the input to the tree summarizer.
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=395)** And then I'm linking the retriever to the tree summarizer.
>
> **[6:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=398)** And we have these destination keys that are telling the Query Pipeline, which variable in the prompt template to inject the context into.
>
> **[6:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=412)** We can go ahead and run that, and we've built our Query Pipeline.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=416)** We'll use the same query as we did before, and we'll get the response as well.
>
> **[7:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=422)** And you can also view it a bit more granularly if you'd like.
>
> **[7:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=429)** If and when you view it granularly, you'll see that you got nodes with scores, which will have the metadata as well as the actual text that was retrieved.
>
> **[7:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=442)** Throughout the course, you'll see me use both of the patterns I've shown here where we're explicitly adding modules and defining links in the Query Pipeline and the pattern that we saw up here where we're just simply passing everything into the chain argument.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=457)** Now I want to bring your attention to a helper file that we're going to use at the remainder of the course.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=466)** So if you go to the top level of the repository, look for the helpers folder.
>
> **[7:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=471)** In the helper's folder, you'll see a Python file called utils.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=476)** And in utils, you'll see that I've defined a lot of the code that you've seen over and over in previous notebooks and kind of just created wrappers around the LlamaIndex functions and classes and just kind of making it a bit more flexible.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=498)** So I've created a function here for setting up an LLM.
>
> **[8:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=501)** If you want to set up a Mistral account and use Mistral, you could do that.
>
> **[8:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=504)** I just added that there for you just in case.
>
> **[8:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=507)** Same thing for the embedding model.
>
> **[8:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=511)** You can go ahead and pass in the provider, and I've made it easy to set up three for you here.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=519)** And then there's also functions that we're going to use here that are going to help set up our vector store, so that way, we're reducing a lot of the boilerplate code that we have in our notebooks.
>
> **[8:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=535)** Some other helper functions here.
>
> **[8:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=537)** One where we create the index.
>
> **[8:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=539)** As I mentioned before, we can create an index directly over a list of notes, or we can create it from a vector store or from docs.
>
> **[9:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=547)** So I just wrote a function that's going to help us with that, just to kind of make things a bit easier.
>
> **[9:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=553)** I wrote a wrapper around an ingestion pipeline, and that's just going to help us to kind of just keep things neat and organized.
>
> **[9:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=562)** And also there is a wrapper around the create Query Pipeline and notice that this wrapper function just using chain.
>
> **[9:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=570)** So when the time comes for us to use the more explicit definition for a Query Pipeline, we're going to do that more manually.
>
> **[9:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=580)** I've got functions here that will help with creating query engines with different modes.
>
> **[9:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=588)** And also some other helper functions that we'll see later throughout the course just to kind of make life easier.
>
> **[9:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=595)** And essentially, I'm just trying to keep the notebook free from as much code as possible.
>
> **[10:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=603)** So you'll see these wrappers and abstractions that I've written throughout the course.
>
> **[10:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=607)** Just note that they're simple wrappers around the preexisting LangChain abstractions, and you can find that in the top level of the repository under helpers.
>
> **[10:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=619)** I'll see you in the next video where we're going to talk a little bit about prompt engineering for RAG, really just how to manipulate and use prompt templates in Query Pipelines.
>
> **[10:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-pipeline?u=76281980&t=632)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), pass (2), super (1), module (1)
> **Env Vars:** rag (5), llm (4), api (1), dag (1), gpt (1)
> **Exercise Files:** template (8), boilerplate (2)
> **CLI Commands:** make (2), python (1), find (1)
> **Cross-References:** in the next (2), later in (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (2)

#### Prompt engineering for RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how to customize the prompt template that is associated with your query engine.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=10)** Now, before we proceed, you should install the following packages to your environment.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=16)** This is because we are going to be importing some helper functions.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=21)** These helper functions require that these packages be installed.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=25)** A heads up that I won't be using FastEmbed or Mistral AI throughout the course, but I have made the functions extensively enough so that should you choose to use a free option like FastEmbed for an embedding model, or if you want to hack around with Mistral AI, it's going to be easy for you to do so.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=44)** So let's go ahead and get started.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=48)** So we start by doing our imports, and this sys append here just makes it so that we can import our helper functions.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=57)** Instantiate our API keys, and now we can start using our helper functions to set up our LLM Embedding model vector store and create an index.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=69)** So you can see here that we end up saving quite a few lines of code because you know everything has been abstracted away in the helper files.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=78)** If you ever need to remind yourself what's happening under the hood, you can go ahead and just go to the helpers utils, and you can see all the code.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=88)** By this time in the course, we've seen in these patterns so many times that I think we can save ourselves the hassle of having notebooks filled with repetitive code.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=101)** Note that, you know, you'll be seeing these helper functions over and over again, but overall I'm saving you the hassle of having to read a ton of boiler plate code.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=111)** So let's go ahead and now set up our LLM, set up our embedding model, create our vector store, instantiate the storage context, and build our index.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=123)** So I want to go ahead now and import another couple of helper functions.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=127)** One of these is the Create Query Engine helper function.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=130)** If you go and look into the source code for utils and you do a CTRL - F for Create Query Engine,
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=143)** you'll see that there's a few different modes that you can pass, chat, query, or retrieve.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=149)** This just makes it easy for us to use these different abstractions.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=155)** On top of the index.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=157)** I'm going to use the query mode.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=160)** So let's go ahead and instantiate that.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=164)** And you'll see that the query engine actually has some default prompts associated with it.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=170)** And we can update these default prompts in a fairly straightforward manner.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=175)** All we have to do is define the custom prompt as a string with the variable names as placeholders, and then create a prompt template.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=187)** We can do that and then we can go ahead and update the prompts like so, and we can now see that our prompt has been updated.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=200)** Awesome.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=201)** So now let's go ahead and build out a query pipeline.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=204)** So I've got this helper function that is a abstraction over the query pipeline.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=208)** We need to create an input component and then we can construct our chain in the following way.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=214)** We have an input component and that input is going to be passed to the query engine.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=218)** You might be wondering why I did not pass a LLM here.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=222)** Well, that's because you know, we're using settings.llm.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=226)** So the query engine itself has a argument for an LLM, but because we're using settings.llm, it's going to be used in there implicitly.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=235)** Let's go ahead and construct our query engine.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=239)** We can run the pipeline, and here I'm just saying remix the Rudyard Kipling poem, "If," and we can see the output.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=247)** Interestingly enough, it's a short haiku.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=249)** "Terms so strict, yet Gutenberg's license "shines a path to knowledge."
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=254)** That's interesting.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=255)** Now I want to see what happens if we do this, if we pass in settings.llm, does that change the response?
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=271)** Right, and you can see that it does change the response because we're taking the haiku and we're passing that haiku back to another LLM instance, so it does kind of switch up the response that we get.
>
> **[4:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=282)** So I just wanted to point that out, that we can remove this and maybe we can even try another query here, and maybe that query could be something along the lines of, "If you could keep your head when all around you "are losing their cool and blaming it on you," it's a line from Rudyard Kipling's poem, "If," and let's see what happens.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=315)** So you can see here the query engine is running and let's see what the response looks like.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=323)** There you go.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=324)** All right.
>
> **[5:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=325)** So we can see here that I actually need to update this first.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=329)** So let's rerun that, reinstantiating the actual query pipeline.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=335)** Now the query pipeline is reinstantiated, with the correct sequence in the chain, we can probably get a better response.
>
> **[5:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=343)** There we go.
>
> **[5:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=344)** Now I want to talk about response synthesizers.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=348)** So there's a ton of documentation in Llama Index about response synthesizers.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=353)** I've linked to it here.
>
> **[5:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=354)** You can go to the component guide under Querying, and under Response Synthesis, you can get an in-depth walkthrough detail of the response synthesizers.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=366)** So let's go ahead and just see one in action.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=369)** So I'm going to import the response mode.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=372)** And you can see here that there are a few different response modes that we can use.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=377)** So I've gone ahead and actually talked about 'em here for you.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=381)** So you can also look at more detailed notes about what the response modes are in the documentation.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=387)** But very briefly, we have a few different ones that we're going to talk about here.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=391)** Accumulate, compact, compact_accumulate, generation, no_text, refine, simple_summarize, and tree_summarize.
>
> **[6:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=398)** First, I want to talk about refine, and refine is just a iterative method to generate a response.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=403)** I'm going to breeze through these and be respectful of your time.
>
> **[6:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=407)** You can always pause the videos and go look at the notebook and read this yourself.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=414)** But just to touch on it a little bit, let's start by defining some of these response modes.
>
> **[7:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=420)** So refine is a iterative method to generate a response.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=424)** Compact is going to combine the text chunks from these larger chunks into something a bit more smaller.
>
> **[7:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=432)** Simple_summarize, just going to take all the text chunks and summarize them into one.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=439)** Tree_summarize, we've seen this used before, essentially just creates a candidate of nodes in a bottom up manner.
>
> **[7:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=447)** Generation mode just says, ignore the context and just generate a response.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=452)** No text, accumulate, compact, accumulate.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=454)** I'll let you read those on your own.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=456)** So let's go ahead now and build out our response synthesizer.
>
> **[7:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=461)** We've instantiated that here.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=465)** We'll create our query engine and go ahead and run the cell and get a response.
>
> **[7:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=477)** So you can see here that it's cranking away, and we'll get a response here.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=484)** So success and failure are relative concepts, and it's all about how we choose and perceive and interpret, so on and so forth.
>
> **[8:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=491)** And this is just a glimpse into a little bit of prompt engineering.
>
> **[8:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=496)** Really, it's just updating the prompt templates for the query engines.
>
> **[8:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=500)** We'll see a little bit more about prompt engineering and manipulating prompts later in the course when we look at advanced RAG and modular RAG.
>
> **[8:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-engineering-for-rag?u=76281980&t=511)** I'll see you in the next video where we are now going to prepare the PDFs that we downloaded oh-so-long-ago and to get them ready to be ingested into a quadrant collection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), pass (3), function (2), if, (2), require (1)
> **Env Vars:** llm (5), rag (2), api (1), ctrl (1)
> **Code Identifiers:** compact_accumulate (1), no_text (1), simple_summarize (1), tree_summarize (1)
> **Prerequisites:** set up (3), install (1)
> **Exercise Files:** template (2), source code (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is a  (2)
> **Warnings:** heads up (1), note that (1)

#### Data preparation for RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=0)** - [Instructor] We've covered a lot of ground in this course already.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=4)** We've touched on the core components of LlamaIndex from both the low level APIs, and we saw how we can use the higher level abstractions like the ingestion pipeline and the query pipeline to help reduce the boilerplate code in our applications and to help make our code more readable.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=26)** So we've talked a lot about LlamaIndex and its core components.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=30)** And now as promised, and I feel like I've promised you this several times throughout the course.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=35)** We are about to get to some Retrieval Augmented Generation, and so I'm pumped for this.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=39)** Of course, it all starts with the appropriate imports and installations.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=46)** So note that you need to install these packages before running the notebook.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=52)** I've already done so.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=54)** So do make sure that you install those as a reminder to pull up the terminal in your code space environment here.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=62)** Just Control + shift + backtick.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=65)** It'll open up the terminal.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=66)** Once the terminal is open, make sure you activate the environment like so.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=73)** And then you can go on and install these packages.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=80)** So we are going to make use of a number of helper functions.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=86)** And you can find the helper functions in the helper's folder.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=89)** And the one we are going to specifically work with is the text cleaning helpers file.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=96)** A lot of this code was inspired by/directly lifted from the Unstructured Library.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=103)** Unstructured is a open source library.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=105)** It is Apache 2.0 licensed.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=108)** They're doing amazing work.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=110)** Shout out to the team for such a great job.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=113)** We are not going to be using Unstructured in this course, though I recommend that you use it, or at least look into it if you're going to be dealing with complex documents, complex PDFs.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=125)** So if you would like, you can look through this code and you can see the regx patterns, you can see the different functions I've defined.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=133)** I've tried to make these functions as easy to understand as possible.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=138)** They're all well documented.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=141)** And, of course, if nothing is making sense to you, you can drop a question in the course and I'll try to answer it, or, of course, you can just drop this into ChatGPT and have it give you a answer.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=153)** But I'm not going to spend too much time going to the nitty gritty of the code here.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=156)** It's available for you to look at.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=158)** You can feel free to reach out to me if you got questions at all.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=162)** That being said, let's go ahead and talk about data preparation and data cleaning.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=166)** So it should be no surprise that your RAG system is only as good as the data that you retrieve.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=171)** So data preparation and data cleaning are important steps to ensure that you have high quality results.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=178)** High quality results depends on high quality data.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=182)** It's the same old trope from data science, from classical machine learning, from deep learning that carries over into generative AI and Retrieval Augmented Generation.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=195)** Data quality is always going to be absolutely important for any high quality system, and it's no different in generative AI.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=205)** I want you to realize though that this course is purposefully using simple PDF files, specifically books, and specifically books with just a bunch of text to demonstrate the process and patterns of Retrieval Augmented Generation.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=221)** There is a lot more to data preparation for RAG, and honestly, I could have written another course about just that topic.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=231)** The same goes for the evaluations, right?
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=233)** I could have written another course entirely talking about RAG evaluation, but instead I'll just be touching on it briefly.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=241)** I want to acknowledge that real world PDFs and other documents are a lot more complex than what we're going to be working with here.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=248)** And this is going to require additional processing and cleaning techniques, although I'm not going to cover those in this course.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=255)** Once we get to the end of this lesson, I will link you to several resources that you can look at and you can hack around with those if you encounter a situation where you're dealing with extremely complex documents.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=270)** So a few considerations for data prep.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=272)** Obviously the content is important, the elements of the document is important.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=279)** It might be necessary for your case to break down the documents into parts like titles, narrative, list, tables, images, so on and so forth.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=289)** There's also metadata that you might need to handle that will give additional details for each document.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=296)** And this is useful for hybrid search.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=299)** And you can also utilize summaries as well.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=302)** And this is going to be important for document summary index that we are going to talk about much later in the course.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=308)** Now that the disclaimer is out of the way, I want to just get right to it.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=314)** So we're going to look at one specific file.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=317)** And if you recall, way back in the first module, the getting started module, there's a module where I had you download a bunch of data.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=327)** It was all of these PDFs.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=329)** And now we are going to start working with these PDFs.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=332)** So let's just go ahead and just examine one individually, and then I want to look at a number of different ways that we can load this.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=341)** So let's go ahead and point to the PDF file, this LLMSHERPA_API_URL.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=347)** This is going to be important and I just touch briefly on llmsherpa.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=351)** Don't worry, we're not going to use it too much in this course at all.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=355)** So what I'm going to do here is actually define a few different loaders.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=360)** I'm first defining a simple directory reader as well as a SmartPDFLoader.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=366)** And in this case, a SmartPDFLoader makes use of llmsherpa, and I'm also just going to be using a standard PDF reader from LlamaIndex.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=375)** So let's go ahead and run that cell and instantiate these objects.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=380)** So what's happening is that the data is being loaded in each one of these loaders.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=385)** And once it's loaded, we're just going to take a look at how these different loaders handle the text content of that PDF, right?
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=395)** So all of these loaders have done their thing and now we can start examining how they are handling the PDF.
>
> **[6:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=404)** So first, let's go ahead and open up the document.
>
> **[6:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=407)** So if you recall, it's all in the top level of the repository under the data folder.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=413)** The one we are looking at specifically right now is the Almanack of Naval Ravikant.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=418)** So I'm going to pull this up here and opening it up on the side here.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=424)** And you'll see that we have 242 pages in this book.
>
> **[7:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=429)** Great.
>
> **[7:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=430)** So I'm curious now to see how does each one of these loaders load the data?
>
> **[7:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=436)** So starting with the simple directory reader, we see that we get 242.
>
> **[7:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=442)** So it's actually a list that we have, right?
>
> **[7:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=444)** So just to clarify.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=446)** If we look at the type of object that this simple directory reader docs is, it's a list.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=453)** All right, if it's a list, then what are each one of those elements in the list?
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=457)** Each one of those elements is a LlamaIndex document object.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=460)** Cool.
>
> **[7:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=461)** So now what I'm going to do is just look at the content of one page, and this case, this is going to be page 100.
>
> **[7:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=469)** So let's take a look at that.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=470)** So page 100.
>
> **[7:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=471)** This should map to, I believe, the hundred and first page, right?
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=476)** Because that's just kind of how indexing works in Python.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=480)** And we can look here how this is being loaded.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=484)** So we see up top, Shed Your Identity To See Reality.
>
> **[8:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=489)** Okay.
>
> **[8:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=490)** We see that Building Judgment 101, this is at the bottom there.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=493)** We see that the text is just being read as it should be.
>
> **[8:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=502)** And great, that's great to see, right?
>
> **[8:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=504)** It's good to see how it is that this document gets loaded.
>
> **[8:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=506)** Now let's take a look at how the SmartPDFLoader is working.
>
> **[8:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=510)** So SmartPDFLoader, you see we have 932 elements, right?
>
> **[8:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=515)** So again, it's going to be the same thing as above, the SmartPDFLoader docs.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=519)** This object here is a list.
>
> **[8:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=521)** Each object in this list is going to be a LlamaIndex document object.
>
> **[8:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=526)** So let's look at the 100th element of this list to get a sense of what it is.
>
> **[8:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=531)** All right, so the 100th element of this list, I'm just going to do a Control + F here or just hit that right here.
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=538)** And let's just say the internet has massively... Great.
>
> **[9:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=544)** So we can map what this thing is picking up to what we see on the page here.
>
> **[9:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=550)** So in this case, the internet has massively broadened the possible space of careers.
>
> **[9:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=556)** Most people haven't figured that out yet.
>
> **[9:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=558)** Great, so it looks like it's just kind of splitting it as one chunk each, which could be useful, right?
>
> **[9:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=564)** That could be useful if you want to use it in that way.
>
> **[9:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=568)** So the PDF reader docs, as well, we could take a look at that.
>
> **[9:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=571)** Again, you see it's 242 elements long and it is reading exactly the same as the Simple Directory Reader docs.
>
> **[9:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=580)** Cool.
>
> **[9:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=581)** And you can verify that programmatically if you want as well.
>
> **[9:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=584)** Awesome.
>
> **[9:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=586)** So now we get a sense of how these document loaders are loading documents, right?
>
> **[9:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=589)** So there's a bunch of different loaders that LlamaIndex has.
>
> **[9:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=592)** Of course, you can just type in to LlamaIndex docs, you can go to LlamaIndex docs, you can go to component guides, you can go to loading.
>
> **[10:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=605)** And you can see that there are a number of different ways to load data.
>
> **[10:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=611)** So they're called data connectors, and the LlamaHub has a number of them.
>
> **[10:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=616)** So you can look here and look at data loaders, and you can see there's a whole number of data loaders that you can use.
>
> **[10:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=626)** So now what we're going to do is I'm just going to use PyMuPDF.
>
> **[10:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=631)** So we load that in as fitz, fitz.
>
> **[10:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=635)** So if you're curious, you can go to GitHub and type in PyMuPDF.
>
> **[10:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=643)** And you can see here all the documentation about it, what it's all about.
>
> **[10:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=648)** Just historically, the way this works is you import it as fitz for whatever reason.
>
> **[10:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=654)** I'm sure there's history behind it.
>
> **[10:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=655)** Not going to get into it, not important.
>
> **[10:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=657)** But what I'm going to do here now is I'm going to extract text from each page and what I'm going to end up with is a list of strings.
>
> **[11:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=666)** So let's go ahead and now extract all this data.
>
> **[11:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=670)** And now we can look at a random element of this list and you can see what this looks like.
>
> **[11:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=675)** And that content of the page has been parsed in such a way that we have a Python list of strings, and each string here is going to be separated by any line of character.
>
> **[11:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=690)** All right.
>
> **[11:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=693)** Now what we're going to do is just define another helper function here.
>
> **[11:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=697)** This helper function is going to work quite similar to what we saw above.
>
> **[11:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=702)** It's just simply opening the PDF file.
>
> **[11:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=707)** And I defined some functions here that are going to handle chapter headers and footers.
>
> **[11:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=714)** So I encourage you to read the doc strings here.
>
> **[11:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=718)** I've documented this function really well, and I've even had inline comments as well.
>
> **[12:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=725)** So essentially, what this function does is it'll help me parse data so that it is nicely organized and as clean as possible.
>
> **[12:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=735)** So what this function is doing here is it's taking that list that we get.
>
> **[12:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=741)** It's going to remove, you know, empty strings, it's going to check if that list has more than three elements, right?
>
> **[12:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=748)** If it does, then we're going to modify it by doing some type of removal based on a flag.
>
> **[12:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=753)** And this is highly informed, as you will see later by what those actual PDFs look like.
>
> **[12:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=761)** This function here is just simply going to extract text for me.
>
> **[12:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=767)** And then it'll clean that text, and what we're going to get back is a dictionary.
>
> **[12:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=772)** That dictionary is going to have some information there.
>
> **[12:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=775)** One is just the text as well as some metadata.
>
> **[12:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=778)** Metadata is going to be determined by the document that we have.
>
> **[13:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=782)** We'll get the page number, the file name, the title and author.
>
> **[13:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=786)** And this function here is just wrapping the other two functions, just making it easier for us.
>
> **[13:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=791)** All right, so now next what I'm going to do is define a list of dictionaries, and this list of dictionaries is just pointing to each one of these files here.
>
> **[13:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=801)** And for each one of these files, I'm saying, okay, here's the information about it.
>
> **[13:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=805)** This is the title, this is the author.
>
> **[13:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=807)** So some metadata I'm defining manually.
>
> **[13:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=810)** And then I have this thing here, which is my way of saying that these are the pages in that document I care about.
>
> **[13:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=816)** So if we open up, for example, The Almanack of Naval Ravikant, but again, we can look at pages 29 through 203.
>
> **[13:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=823)** And you can see that everything before page 29 is like, you know, the forward, a timeline in Naval Ravikant, you know, some notes about the book, so on and so forth.
>
> **[13:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=835)** Just stuff that I am personally not interested in because I just care about the words and thoughts of this particular author.
>
> **[14:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=841)** And so I'm just extracting text that starts from here and goes up until page 203.
>
> **[14:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=852)** This remove last flag, essentially, if we look at the text that we pulled here, it's just going to remove the last element of the list, which is, if you look at the page here, it will have this footer that indicates the page number and the title of the book.
>
> **[14:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=869)** I'm just removing that.
>
> **[14:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=870)** It's, you know, not adding value to the text that I'm extracting.
>
> **[14:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=875)** It's going to clog up my vector database.
>
> **[14:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=877)** I just don't need it.
>
> **[14:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=878)** I'm cleaning the data, right?
>
> **[14:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=880)** And so I'm doing this for each one of these PDFs.
>
> **[14:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=883)** So that's what's happening here.
>
> **[14:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=885)** So we're just doing a little bit of cleaning.
>
> **[14:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=887)** And I'm going to go ahead and parse all of this, right?
>
> **[14:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=892)** So we've extracted the text from each one of the books that we are going to be working with, and we end up with 1,884 elements in this all text list.
>
> **[15:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=906)** And what is in this list?
>
> **[15:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=910)** Each element of this list is going to be a dictionary.
>
> **[15:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=915)** Each dictionary will have the text of that particular page, right?
>
> **[15:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=920)** So what I've extracted here, like every element of this list is a page from the PDF, right?
>
> **[15:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=925)** So that's what I have done here.
>
> **[15:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=929)** And now I have some metadata as well, all right?
>
> **[15:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=931)** So I've got a list of dictionaries.
>
> **[15:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=933)** Now what I'm going to do with this list of dictionaries, well, I need to parse them into document objects in order for me to use them in LlamaIndex.
>
> **[15:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=943)** So let's go ahead and do that.
>
> **[15:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=946)** And we can see here that this LlamaIndex docs is the same length as what we had up here.
>
> **[15:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=955)** And you can look at this document object.
>
> **[15:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=959)** So now we have a list of LlamaIndex document objects.
>
> **[16:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=964)** What I'm going to do is persist this list to disk, okay?
>
> **[16:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=972)** And you can see here that we now have a document store and everything is persisted to disk.
>
> **[16:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=985)** What this means for us is that as we progress along the course, as we're trying different techniques, as we're trying different methodologies, we don't have to start by always just cleaning the data, right?
>
> **[16:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=996)** We've got the clean data for us ready to go.
>
> **[16:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=998)** So that's all this is doing.
>
> **[16:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1000)** And from here, we can now ingest this data into our vector database, and we're going to do that in the next lesson.
>
> **[16:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1007)** But I did promise you that I'm going to talk about some of the challenges with complex PDFs and documents.
>
> **[16:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1012)** So there's so many issues with PDFs, right?
>
> **[16:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1016)** Like admittedly, the PDFs I have, us working within this course, they're all just text, and that's because my aim for this course is to teach you the patterns for RAG using LlamaIndex.
>
> **[17:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1029)** So, you know, that's just one of the constraints I'm putting on this course 'cause otherwise we can be turning this into a semester long course, right?
>
> **[17:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1037)** But there are challenges with complex PDFs, and I've documented those here for you, and I've also given you several options for parsing these complex PDFs.
>
> **[17:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1047)** So we've got everything from LlamaParse, which is created by LlamaIndex, it's a paid service.
>
> **[17:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1054)** We've got a bunch of old school libraries from Python, which have become more and more relevant now than they've been before.
>
> **[17:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1062)** We've got things like Unstructured, which is super powerful.
>
> **[17:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1066)** It uses a lot of deep learning under the hood.
>
> **[17:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1068)** There's Table Transformers, Layout Parsers, marker, surya.
>
> **[17:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1072)** These two are a bit newer.
>
> **[17:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1074)** They're permissively licensed grade libraries.
>
> **[17:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1077)** So definitely check them out.
>
> **[17:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1078)** If you're working primarily with academic PDFs, then I've listed some libraries that you can look at here.
>
> **[18:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1083)** This is useful because, you know, academic PDFs got interesting mathematic notations and tables and things like that.
>
> **[18:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1090)** So the ecosystem around parsing and handling, and cleaning data for RAG is massive.
>
> **[18:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1097)** It's a huge opportunity in itself.
>
> **[18:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1099)** And who knows, maybe one day I'll create a course on that for you, but for right now, we're just parsing our data in as simple of a manner as possible.
>
> **[18:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1109)** Now that we've got a document store persisted to disk, we can go ahead and ingest this into quadrant.
>
> **[18:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1115)** So we'll do that in the next lesson.
>
> **[18:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/data-preparation-for-rag?u=76281980&t=1117)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (7), module (3), case, (3), this. (2)
> **Env Vars:** pdf (8), rag (5), llmsherpa_api_url (1)
> **CLI Commands:** make (5), python (3), find (1), apache (1)
> **Definitions:** is a  (7)
> **Tools:** terminal (3), github (1)
> **UI Navigation:** go to (4)
> **Prerequisites:** install (3), getting started (1)
> **Cross-References:** in the next (2), later in (1)

#### Putting it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=0)** - [Instructor] It's now time to put everything we've learned together and build a Naive RAG pipeline.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=7)** Now this is called a Naive RAG pipeline because it's like the most simple, most basic RAG pipeline that we can build.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=14)** So let's go ahead and put all the pieces together and see this in action for an end-to-end pipeline.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=20)** So we begin, as we normally do, just getting our imports set up, so let's go ahead and do that.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=26)** We'll instantiate the code here, API key, OpenAI, get our Qdrant URL, Qdrant API key as well.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=33)** And I'm going to name this collection as "words-of-the-senpai-naive."
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=38)** So that's what I'm going to call the collection, "Words of the Senpai," senpai meaning teacher, dash-Naive, because this is the Naive pipeline.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=45)** We'll set up our LLM and for this lesson we're just going to use Cohere Command R-plus.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=54)** We'll also set up our embedding model.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=57)** I'm going to be using text-embedding-3-large.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=60)** We'll go ahead and set up our vector_store.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=63)** And so just to point out right, when we run setup LLM and set up embedding model, we're assigning to the global context, the settings global context value for LLM and the value for embedding model, right?
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=76)** So this means we don't always need to explicitly pass a LLM or embedding model when it is a required argument because we attach it to the global context.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=90)** So let's go ahead and load our documents from the document store.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=94)** And you can see again it's just a regular Llama Index document object.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=100)** Now we are going to ingest this into our vector database.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=104)** So we'll define some transforms here and we are going to use a sentence splitter with a default chunk size from Llama Index, and you'll see what the default chunk size is in a second.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=118)** I'm going to talk at great length about different ways to chunk and split up your text in a future lesson.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=126)** So don't worry too much about this right now.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=129)** We're going to go ahead and ingest, and remember, this is all coming from the helper file that I've defined here.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=138)** So these are just abstractions built on top of the ingestion pipeline and the query pipeline.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=144)** So that's all that I'm doing here.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=148)** Let's go ahead and ingest.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=149)** This should take about a minute or so.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=153)** All right, so we are back.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=155)** That took just about 50 seconds and you can see the default chunk size is 1024.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=159)** Let's go ahead and verify that this was in fact ingested to Qdrant.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=163)** So we go to Qdrant, hit the hamburger menu there, go to our clusters, scroll to here, open the cluster dashboard, look at this "Words of Senpai Naive."
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=174)** It is actually here. Awesome.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=177)** You can see that we have an embedding dimension of 3072, so that's awesome because we're using the text-embedding-3-large.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=185)** If you want, you can even visualize some stuff.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=187)** So remember we just go down to here, we can hit run and we'll see some visualization pop up in just a second, right?
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=198)** That's pretty interesting to see.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=199)** We have like some really interesting discreet kind of islands of text.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=204)** So that's, that's pretty cool to see.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=207)** All right, so we are now going to build a index over the vector database.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=211)** That way we can run queries against it.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=216)** So just walking through the code here, of course, storage context, we'll set that even though it's not explicitly necessary in this case because we've already ingested everything.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=228)** So I mean you could actually like just safely remove storage context and still build an index and you'll be okay.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=236)** As a matter of fact, let me just, you know, do that for you right now, just to illustrate.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=242)** Also you'll notice here that I commented this line out.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=245)** This is just to illustrate that you know when we're building a query engine, right, we have our index and we use the .as_query_engine method.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=257)** That actually takes as an argument LLM.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=260)** So just look at the source code here.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=262)** So as_query_engine, right?
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=265)** This is just the code for a base vector index, which you know, everything subclasses from.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=271)** So you'll see here for as_query_engine, there's an argument here for LLM, it is an optional argument.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=278)** This resolves to pulling it from the settings if the settings is available, right?
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=286)** So we don't need to pass it explicitly here, because you know, it's pulling it from the setting.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=292)** So that is just to make it absolutely clear in case it wasn't clear in the previous lessons.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=298)** So let's go ahead now, create the index, and create the query engine.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=304)** Now we'll go ahead and build our query pipelines.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=307)** So what do we need?
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=308)** We need an input component and that input component needs to be passed to the query engine.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=313)** And notice here I'm not adding a LLM to this chain because the LLM is already implicitly inside of our query engine, right?
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=323)** So let's go ahead and build our query pipeline and we could do some queries.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=327)** So here's the first query that we are going to run.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=332)** And this might take a little bit of time, because you know, Cohere being a free API has rate limits.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=337)** If we were to use this with OpenAI, it would be definitely quicker.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=341)** Let's go ahead and let this run and we'll see what response we get.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=345)** Alright, so it took about 20 seconds to run.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=347)** So let's go ahead and look at this object here.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=351)** All right, so we have a response object and we can just actually hit this with a print statement and we can see the response from the LLM.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=362)** You can also look at the source nodes, right?
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=366)** If you go DIR on that, you'll see all the different attributes and methods that you can call.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=372)** So let's do that.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=376)** And you can see here we've got a couple of source nodes that were being pulled.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=380)** So we can just look at one of the source nodes, hit it with a dunder dict, and there we got it, right?
>
> **[6:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=388)** So we have the source nodes.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=392)** I'll go ahead and let you run these other responses on your own to check it out, but there we have it.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=397)** We have now built an end-to-end Naive RAG pipeline, right?
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=403)** I know you're thinking, oh, this all looks so familiar.
>
> **[6:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=405)** Like I've done it like a hundred times already throughout this course.
>
> **[6:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=409)** And to a certain extent, yeah, we have.
>
> **[6:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=410)** We've seen this pattern several times over and over while we were exploring the core components of Llama Index and then those higher level abstractions.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=419)** So you should now feel comfortable with the general patterns for how we're building a RAG pipeline.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=428)** And now we can start tweaking stuff.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=431)** We can start optimizing chunk size, we can do different retrieval techniques, we can talk about different ways of chunking.
>
> **[7:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=438)** We can talk about attaching metadata, so on and so forth.
>
> **[7:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=440)** So we call this naive because it's the most absolute basic thing that you could do.
>
> **[7:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=445)** It only gets more interesting and more complex from here.
>
> **[7:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=449)** And Naive RAG is great and you can see it, it works well, but it does have its limitations.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=454)** And these limitations are what I'm going to discuss in the next video.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/putting-it-all-together?u=76281980&t=458)** So I'll see you there.

> [!info]- Semantic Content
>
> **Env Vars:** llm (9), rag (6), api (3), url (1), dir (1)
> **Code Keywords:** let (13), pass (2), from. (1)
> **Prerequisites:** set up (5), setup (1)
> **Code Identifiers:** as_query_engine (3), vector_store (1)
> **Definitions:** is called (1), is a  (1), is an  (1), we call this (1)
> **UI Navigation:** go to (2), open the (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)

#### Drawbacks of Naive RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=0)** - [Instructor] I hope you're feeling proud of yourself.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=2)** I hope you're feeling energized and excited because you've seen end to end what a RAG pipeline looks like.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=8)** At least you've seen end to end what a Naive RAG pipeline looks like.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=13)** Just to drive the point home and reiterate, let's talk about the thing that we've repeatedly been doing over the last several lessons just to drive it home one more time.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=23)** Remember that it's essentially a three step process.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=26)** We index, retrieve, and generate.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=28)** So in indexing, we're processing data into manageable, searchable chunks and then indexing them for efficient retrieval.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=35)** In retrieval, we're using the user's query to search the indexed data and then fetch the most relevant documents.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=42)** For generation, we're combining the user query with the retrieved context to generate a context aware response.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=51)** That's great for a Naive RAG pipeline like it works, but it has challenges.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=55)** So let's talk a little bit about these challenges.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=57)** One is that there's issues with indexing.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=60)** For example, you could have incomplete or inaccurate information during extraction.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=65)** You might be chunking your data in a suboptimal way.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=69)** There might be some inefficiencies with the indexing techniques that you're using, or there might just be some poor semantic representation of the data that you have embedded.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=79)** You also can face challenges with retrieval.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=82)** You can have low precision, so not all the retrieve data is going to match the query, or you might have low recall, and that's where you fail to retrieve all the relevant data.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=92)** You might have ineffective user queries, right?
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=95)** Your user might not be able to articulate and express themselves that well.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=99)** You might even have redundant and overlapping information.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=103)** Generation also has its problems.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=105)** You can face hallucinations.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=107)** The LLM might just generate a fictitious response, if we give it a context that is blank, right?
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=115)** We might give the language model context with like nothing in it because there's no relevant data to inject into the context, and it just might make stuff up.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=124)** There is also difficulty in assessing how relevant that generation is to the user's query and to the context that was retrieved.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=133)** The language model might actually just kind of over rely on that external information.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=137)** So rather than synthesizing it into a nice, cohesive, coherent response, it might just pair it and regurgitate what it has retrieved.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=146)** There also might be some issues with bias or inconsistent or irrelevant responses.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=151)** So Naive RAG is great, it works to a certain extent.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=154)** It gets the job done for simple use cases, for Naive use cases, if you will.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=158)** But we need to address these challenges, and if we don't address these challenges, we will not be able to build a sophisticated and reliable RAG system.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=167)** And so now what we are going to focus on throughout the remainder of this course is how to improve upon Naive RAG with advanced methods.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=175)** But first, I need to tell you how to evaluate your system so that you can measure improvements.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=181)** Now, I want to warn you that in this course, I'm not going to be doing a ton of evaluation.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=187)** It's not the core of this course.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=188)** Like I mentioned before, evaluation can be its own entire course unto itself.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=195)** I've tried many ways to kind of fit evaluation into this course, and each module just ended up becoming a little bit too large for my liking.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=205)** I was having to rely on a lot of external libraries, and I just wanted to minimize all those distractions.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=212)** So we're not going to do a comprehensive evaluation of every RAG technique that we're presented with, but what I am going to give you is a framework for how to evaluate your RAG pipelines, and I'll point you to some of the libraries, open source libraries in the ecosystem that you can use to evaluate your RAG system.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=234)** But just a little bit of forewarning there.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=237)** I think it is important to talk about RAG evaluation.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=242)** This course would not be complete without at least discussing it, but I'm not going to go too in depth because we have a lot of ground to cover.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=249)** So we have covered, again, a lot of ground up until now, and we still have a lot more to go.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=254)** So again, just thank you so much for sticking with me up until this point.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=258)** I do hope that you are excited and ready to see more advanced RAG techniques because we are about to go in, my friends.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=265)** And again, remember, if you haven't already, if you're enjoying this course up until this point, go ahead and leave us a review.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=271)** Leave me some stars if you would.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=273)** I'd greatly appreciate that.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=275)** Feel free to hit me up on LinkedIn if you got any questions.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=277)** I'm happy to help you.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=279)** We're about halfway through this course, I'm ready for more.
>
> **[4:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=282)** It's just going to get more and more interesting from here on out.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/drawbacks-of-naive-rag?u=76281980&t=284)** All right, my friends, I'll see you in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** rag (11), llm (1)
> **Code Keywords:** let (2), module (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. RAG Evaluation

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to RAG evaluation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=0)** - [Instructor] Before we start talking about RAG evaluation, let's recap what a Naive RAG pipeline looks like.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=8)** We first create an index, right?
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=10)** So we have some source data.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=12)** We clean that source data up.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=13)** We chunk it, embed it, push it to the vector database, and create an index over that.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=19)** Then when a user query comes in, that query goes to the embedding model, the same embedding model that we use to create our vector store.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=27)** Transforms that query into a embedding representation, searches the vector store for the most similar nodes or documents to that user query.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=40)** Those documents get retrieved and injected into this prompt template.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=45)** This prompt template gets constructed and packaged and sent to a large language model.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=51)** The large language model synthesizes all this and produces a response.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=56)** Now, imagine that we have this RAG system set up for like a high stakes type of environment.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=62)** What if we have a RAG system that is used to answer questions for medical diagnosis support, or maybe to provide background knowledge for some type of policy decision-making?
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=75)** In applications like this, generating outputs that are not just fluent but factually correct is absolutely essential.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=82)** We need to have a high degree of confidence in our RAG system before we put it into production, before we deploy it.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=90)** This means we need robust and insightful evaluation.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=95)** Now, evaluation is critical for pretty much everything in deep learning, in machine learning and classical machine learning.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=102)** Without an evaluation system, you're not going to be able to compare different models, prompts, contexts, retrieval strategies to determine what's going to work best.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=112)** You also won't be able to assess the quality of your RAG pipeline over time.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=117)** In addition to that, evaluation gives you a concrete number that will tell you how accurate your system is, how relevant its answers are, and how well it's working overall.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=129)** It also will help you determine what part of the pipeline needs improving and how you can improve it.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=135)** So we've gone over the basic steps in a Naive RAG pipeline.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=140)** Now, if you think about it, there's essentially two components.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=144)** There are a number of different sub components to it, but it boils down to two main things.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=149)** There's retrieval and generation.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=151)** So the retrieval component, as we mentioned, is fetching relevant information from this external knowledge source and is informing the generation process.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=161)** This, itself, is actually two phases.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=163)** There's indexing and searching.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=165)** So in indexing, the documents are being organized for retrieval.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=170)** In searching, the index is used to fetch relevant documents based on the user's query.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=175)** And so here, we might run into some challenges.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=178)** One is evaluating the effectiveness in filtering and selecting the most pertinent information.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=186)** Two is assessing the relevance and usefulness of the data that we actually retrieve.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=191)** In the generation component, we're taking the retrieved context and the original query as input to generate a coherent and contextually relevant and appropriate output.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=205)** And in this component, we face a couple of major challenges as well.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=208)** First is we need to make sure that the LLM is utilizing the retrieved context effectively.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=214)** And also we need to assess the factual correctness and relevance and coherence of what the language model generates.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=223)** So RAG system can go wrong in a number of ways.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=227)** The information that we retrieve might be irrelevant or unreliable.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=231)** We might be ignoring the retrieved context in favor of the language model's priors.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=237)** We might generate inconsistent or contradictory statements.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=242)** We might not be able to judge whether there's insufficient context to answer the question.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=247)** We might get so many outputs that we can't synthesize them together.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=253)** We also will face challenges with factual inaccuracies and hallucinations that are not grounded in retrieval.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=261)** So carefully evaluating RAG systems along these dimensions is key to understanding failure modes and improving the robustness and reliability.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=270)** And really, there are two main aspects of evaluation.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=273)** There's quality and ability.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=275)** Quality is measured via relevance, which is ensuring that the retrieved context is precise and that the generated answers directly relate to the user's query.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=285)** Faithfulness is ensuring that the generated responses are consistent with the retrieved context and do not contain contradictions or inconsistencies.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=296)** When we're measuring the ability of our RAG system, we need to look at its ability to handle noisy context to know when to admit that it lacks knowledge or it lacks context.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=309)** We also need the system to combine information from various sources.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=315)** We also need the RAG system overall to identify and ignore misinformation.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=323)** It's important to develop evaluation schemas and metrics that address these issues.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=328)** And this is an important open problem for the field.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=332)** We need techniques that go beyond surface level metrics to really probe the ability of a RAG system to create coherent, contextually relevant, grounded outputs.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/introduction-to-rag-evaluation?u=76281980&t=345)** And in the next section, I'm going to give you a overview of three core evaluation metrics.

> [!info]- Semantic Content
>
> **Env Vars:** rag (12), llm (1)
> **Code Keywords:** this, (2), let (1)
> **Cross-References:** we mentioned (1), in the next (1)
> **Exercise Files:** template (2)
> **Prerequisites:** before we start (1), set up (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)

#### Evaluation metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=0)** - [Instructor] As we discussed in the previous lesson, there are several places where a RAG system can go wrong.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=6)** One is the information retrieval, two is integrating relevant knowledge, and three is the language model reasoning over the context.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=15)** The RAG system relies on relevant knowledge from a large corpus.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=20)** So if the retrieval process is flawed or the knowledge base is incomplete or inaccurate, this will lead to generated text that's just garbage.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=29)** But even if the right information is retrieved, the system needs to effectively integrate that to make a coherent generation.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=36)** Failures here means that the text is going to be disjoint or contradictory.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=42)** The language model itself has its own shortcomings that could lead to generations that are just not that good.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=50)** So the challenges we have for evaluating a RAG pipeline is with respect to factual accuracy, retrieval versus generation, and also a lack of standardized benchmarks.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=63)** RAG outputs need to be assessed for factual correctness, and this is tricky because it might require domain expertise or cross-referencing with some reliable sources.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=73)** A good generation can also mask retrieval flaws, while poor generation might hide or obscure the quality of the retrieved knowledge.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=84)** Unlike tasks in traditional machine learning or in machine translation that have established benchmarks, evaluation datasets for RAG is still an emerging area of research.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=95)** This makes apples to apples comparison between different systems difficult.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=101)** And to drive the point home, there are a lot of challenges in evaluating RAG pipelines.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=107)** As just mentioned, there's a lack of high-quality evaluation datasets.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=110)** There's also this entanglement of retrieval and generation.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=114)** We also need to judge the factual accuracy of the generated text.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=119)** We also need some way to assess how well the model is using the retrieved context.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=124)** While there's still a lot of work to be done, there's still some ways forward that we can use to evaluate RAG systems.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=131)** A lot of these techniques rely heavily on automated metrics, but in general, the metrics for RAG evaluation fall into a few different buckets.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=141)** One is faithfulness.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=143)** Faithfulness is ensuring that the answers that get generated by the system are true to the given context.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=150)** That means the answers must be consistent with the context information and not deviate or contradict it.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=157)** This is really important for addressing these hallucinations in large language models.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=164)** Another bucket is called answer relevance.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=166)** We need to make sure that the generated answers are related to the question that is being posed or the query that is coming in.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=174)** So we need to ensure that the model stays on topic and gives pertinent information.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=179)** There's also context relevance.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=181)** We need to make sure that the retrieved contextual information is accurate and targeted, so this avoids irrelevant content that could reduce the efficiency of the LLM in utilizing context.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=194)** And to measure the performance retrieval, we can use something called mean reciprocal rank.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=199)** Mean reciprocal rank is just a statistical measure for evaluating processes that produce a list of possible responses to a sample of queries that are ordered by probability of correctness.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=211)** The reciprocal rank of a query response is just the multiplicative inverse of the rank of the first correct answer.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=217)** And so MRR is the average of the reciprocal rank of the results.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=223)** While MRR is a statistical measure, the other three buckets, faithfulness, answer relevancy, and context relevance, for these, we typically use the LLM-as-a-Judge paradigm.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=237)** So LLM-as-a-Judge was introduced in a paper in late 2023, called, "Judging LLM-as-a-Judge with the MT-Bench and Chatbot Arena."
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=247)** And this technique just uses a LLM to automatically evaluate the output of other LLMs in a way that approximates human judgment.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=256)** So the key idea here is to leverage a strong LLM to assess generated text that usually requires human evaluation.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=266)** So using LLMs-as-a-Judge is scalable, it's cost effective, and it is honestly a really good way to evaluate RAG systems.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=275)** It makes benchmarking faster and shortens iteration cycles.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=280)** And in this LLM-as-a-Judge paper, they present research, actually, that shows that strong models, such as GPT-4, have an agreement rate of over 80%, which is on par with the level of agreement amongst human experts.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=296)** So it's a really solid technique to use.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=302)** However, LLM as a judge does have its own limitations and biases that need to be addressed.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=306)** For example, large language models have this position bias where they tend to favor certain positions in a text.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=313)** They also have this verbosity bias.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=315)** For some reason, large language models really like longer outputs.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=319)** They also have limited reasoning capabilities for complex topics like math.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=324)** But despite these challenges, with strong and proper prompt engineering, the LLM-as-a-Judge is a excellent complement for human evaluation, especially when assessing open-ended AI tasks at scale.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=339)** Now, I'm not going to go into the nitty gritty details at all about RAG evaluation.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=345)** We're not going to compute any metrics whatsoever through this course.
>
> **[5:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=350)** Initially, I wanted to do this.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=352)** I created modules that went into RAG evaluations, but that would've ended up being a two-hour course in itself.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=360)** I wanted to keep us on task and on focused.
>
> **[6:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=363)** In this course, we're focused only on Retrieval Augmented Generation patterns.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=368)** We're going to look at advanced RAG techniques for pre-retrieval, post-retrieval, and Modular RAG.
>
> **[6:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=373)** As much as I want to go deep into evaluation, we just do not have time for it in this course.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=381)** I bring it up here because I feel it would be irresponsible of me as a practitioner to not at least touch on it.
>
> **[6:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=389)** And so I leave you with the resources for RAG evaluation.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=393)** This is an ongoing area of research.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=397)** There's still a lot of work to be done.
>
> **[6:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=400)** You need to carefully construct evaluation datasets.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=403)** We need to leverage automatic metrics so that we can measure consistency in grounding and retrieval.
>
> **[6:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=409)** We need model-based factuality metrics.
>
> **[6:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=412)** We need human evaluation protocols that are judging the aspect of quality.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=417)** We need a diverse set of evaluation approaches, and we need to use them in combination so that we can get a more holistic view of our RAG system performance.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=428)** If we improve on evaluation, it'll be key to unlocking the full potential of Retrieval Augmented Generation.
>
> **[7:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=435)** All of these resources go deep into RAG evaluation.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=439)** My favorite one amongst these is the "Advanced RAG Output Grading."
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=443)** This paper is a really well-done paper that shows you how you should evaluate RAG in a production setting, and it goes deep into using evaluation metrics and comparing them statistically.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=457)** It's a great paper. It is a great read.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=460)** I highly recommend checking it out.
>
> **[7:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=462)** It's also a very approachable read and well worth the time it takes to read it.
>
> **[7:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=469)** In my experience, the most challenging aspect of RAG evaluation isn't the metrics, or computing the metrics, or anything like that.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=476)** It's actually coming up with a evaluation dataset.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=480)** And so that's what I want to do in the next lesson.
>
> **[8:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=483)** Although we're not going to focus on evaluation in this course, I still want to give you a motivating example for how you can think about constructing an evaluation dataset for Retrieval Augmented Generation.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/evaluation-metrics?u=76281980&t=493)** And so we'll see that in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** rag (19), llm (9), mrr (2), gpt (1)
> **Definitions:** is a  (4), is called (1), is an  (1)
> **Cross-References:** in the next (2), we discussed (1), coming up (1)
> **CLI Commands:** make (3)
> **Code Keywords:** require (1), this. (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### How to create an evaluation set
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=0)** - [Instructor] In my experience, the most challenging part of RAG evaluation is constructing an evaluation data set.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=8)** Now, there isn't like a clear cut consensus amongst AI engineers as to how exactly to go about creating a evaluation data set, but one technique that's gained a lot of traction recently is using a large language model to synthetically generate question answer pairs for the evaluation data set.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=28)** And then you can actually use another LLM to go through all of these question answer pairs and kind of grade them, and you can create a filter based on that grade so that you have at least somewhat of a high quality data set.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=42)** This is probably the biggest tool in our arsenal to address the lack of high quality evaluation data sets.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=49)** So the goal here is to construct a quote unquote "golden dataset" that includes ground truth labels, which are often derived from human feedback, but sometimes you don't have that, so you have to generate those ground tooth labels yourselves.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=62)** There are a number of things you need to consider for creating this golden data set.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=67)** You want to make sure you have domain coverage, you want to make sure that you are controlling the quality of the answers, and you also have some diversity in your questions.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=80)** And so you can use this golden data set, this synthetically generated data set to create a quote unquote "ground truth evaluation data set" that will let you assess the evaluation metrics we discussed previously, like faithfulness and relevancy and things like that.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=95)** And while there are frameworks that kind of give you some layers of abstraction for creating a evaluation data set, I just want to go ahead and kind of go through the manual process and show you how we can create a evaluation data set for RAG.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=109)** So I'm going to use OpenAI here instead of Cohere because Cohere has these rate limits.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=114)** Because of the free tier, you don't need to run all this code yourself.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=117)** What I'm going to do is push this resulting data set to Hugging Face.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=123)** You can download it from the hub if you want, and hack around with it.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=126)** Just keep in mind that we're not going to be using this evaluation data set at all throughout the course.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=131)** I just want to show you how to create one.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=134)** And if you want to go ahead and test some of your RAG pipelines on this evaluation data set later, you are more than welcome to do so.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=142)** But the goal here is just kind of show you how you can go ahead and create a data set.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=147)** So if you recall, we cleaned up our data already.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=149)** We persisted our data as well to a doc store.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=153)** Now we're going to go ahead and load in that doc store and we'll create a set of documents for evaluation.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=159)** I don't want to create a evaluation data set using every single one of the documents that we have.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=165)** So I just want to select a few from each of the authors that we have.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=170)** So what I'm doing here is using a utility function that's going to sort our documents and put them into groups based on who the author is.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=178)** Then we're going to create a dictionary where the author's name is, you know, the key.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=183)** And then all the documents that are mapped to them will be the values.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=187)** We'll go through each document, check the author's name, and then add it to the document under the appropriate author in the dictionary.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=193)** If a document doesn't list the author, we're going to skip adding it and we'll have just a warning note printout.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=199)** So what we're going to do here is have a input, which will be a list of document objects, each with metadata that has the author field and the output here will be a dictionary that's going to group all documents by the respective authors.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=211)** And use some subset we're going to sample.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=213)** So we'll get a smallest subset of documents randomly chosen from each author's collection within our dictionary.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=221)** And we'll start with an empty list.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=222)** We'll loop through the author, look at documents that meet some criteria.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=227)** And then from there, just kind of, you know, select, in this case 25 documents per author.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=233)** We can go ahead and run a sanity check and make sure that we actually have 25 per author.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=238)** Now you can see here that we have 150 documents that we are going to use for the creation of evaluation dataset.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=246)** What I'm going to do here now is split this up into chunks.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=250)** So I'll use a token splitter for that, and now I'll have some text chunks for evaluation.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=256)** So after splitting, we end up with 316 chunks.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=260)** And now what we need to do is actually create prompts.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=262)** And so I created a question generation prompt, which is instructing the LLM with the following.
>
> **[4:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=268)** Your task is to write a question given context.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=271)** Your question must be in the form of an adult mentee seeking advice from a trusted mentor.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=275)** Formulate your question in the same style as questions users could ask in a search engine.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=281)** Questions should be answerable with a specific concise piece of information from the context.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=285)** And the reason I'm instructing the language model to ask questions in this way is that ultimately I hope to build a chat bot to chat with my mentors.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=295)** And the way I'm going to ask questions are going to be short, clear, and it's going to be based on the essence of what it is that I want to learn.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=302)** And I'm specifically saying here, don't use any qualifiers, relative clauses or introductory modifiers.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=308)** Keep the questions short and to the point.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=310)** Ask the question using the first person perspective in the form of a student seeking advice from a trusted mentor.
>
> **[5:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=318)** And so we run through that and we can get an example of what that looks like.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=322)** So here we have a question that has been generated from one random document from our evaluation set.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=330)** How can I work my way to higher leverage, more accountability and specific knowledge without risking ruin?
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=336)** Sounds exactly like the kind of question I'd want to ask someone like Naval Ravikant or Balaji or Nassim TaLeb.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=345)** Now that we have all of our context split up, we're going to use GPT-3.5 Turbo because it is cheap to generate questions from the documents.
>
> **[5:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=354)** So I have a function here.
>
> **[5:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=357)** This function is going to start by initializing a empty dictionary to store responses and contacts.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=364)** We're going to iterate through the documents.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=366)** For each document, I'm going to generate a question using the prompt that I showed you above.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=371)** We'll get the response for the LLM and then store the response as a key and the documents content as the value.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=377)** So we'll go ahead and do that.
>
> **[6:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=378)** And you see that we have the following questions, right?
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=381)** How can I determine whether to outsource the task based on my hourly rate?
>
> **[6:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=385)** And the context here is actual ground truth context that's taken strictly from our documents that we've chunked and split up.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=393)** Now that we have generated questions for each chunk of context, we need to generate an answer.
>
> **[6:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=400)** So I will be using GPT-3.5 Turbo to keep costs down, but you should use GPT-4 Turbo or GPT-4.0 or the most powerful model that you possibly could for this entire task.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=414)** I'm using 3.5 Turbo just to keep the cost down.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=417)** And so now I have this prompt template that I'm sending to the LLM saying you're a trusted mentor to an adult mentee.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=424)** Your mentee is coming to the question, here's the question.
>
> **[7:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=427)** And then I'm telling the LLM, you have some raw thoughts that you must use to formulate a answer.
>
> **[7:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=432)** And here are the raw thoughts.
>
> **[7:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=434)** And these raw thoughts are actually just going to be the context of the chunk.
>
> **[7:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=438)** So just the raw chunk.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=441)** And so then I tell the language model to just reflect on the question and the raw thoughts and then answer the mentee's question.
>
> **[7:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=448)** I add the same bit here.
>
> **[7:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=449)** Do not use any qualifiers, relative clauses, so on, so forth.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=453)** Something key here is provide your answer using the second person perspective, speaking directly to your mentee.
>
> **[7:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=464)** So we'll go ahead and create a prompt template and we see an example of what a answer looks like.
>
> **[7:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=472)** Now we'll go ahead and generate answers.
>
> **[7:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=475)** So we can generate answers like so just running through this for loop.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=479)** And now we have question context answer triplets.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=485)** And with this, we need to figure out how good the questions are.
>
> **[8:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=490)** And so now I'm going to use a critic LLM in this case, GPT-4.0.
>
> **[8:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=495)** And I'm going to tell this critic LLM, to judge how good the questions are based on the context.
>
> **[8:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=502)** And so we can write a prompt here and the prompt will say you're given context and a question, provide a total rating from one to five, indicating the extent to which the question can be answered clearly using the context.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=516)** And so now we can use the LLM to rate the response.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=519)** We'll make that into a prompt template, then we'll pass it to the critic LLM.
>
> **[8:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=523)** And so the critic LLM, will get these question context answers.
>
> **[8:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=528)** And then it'll rate how well the response is.
>
> **[8:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=532)** And you can see here it does a good evaluation and it gives this thing a rating of two.
>
> **[9:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=541)** And you see here we end up with question context answer, and then a groundedness score.
>
> **[9:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=547)** And so now with this groundedness score, you can filter your data set.
>
> **[9:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=550)** Maybe you want to only keep rows of this data set where the groundedness score is four or above.
>
> **[9:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=559)** If you want, you can keep all of them, but it is here for you to filter on.
>
> **[9:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=564)** And there you have it.
>
> **[9:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=564)** So I've pushed this data set to Hugging Face hub.
>
> **[9:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=569)** You can find the data set on Hugging Face.
>
> **[9:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=571)** You don't need to run all this yourself.
>
> **[9:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=573)** Just go ahead and follow this link to the data set.
>
> **[9:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=575)** And if you end up signing up for Hugging Face, give me a follow and make sure you like this data set.
>
> **[9:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=581)** And here you can see the question, the context and the answers.
>
> **[9:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=589)** If you want, you can play around with this.
>
> **[9:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=590)** You can make the context smaller.
>
> **[9:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=592)** You can switch around the prompts however you want.
>
> **[9:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=595)** You know, if you're hacking around through the course and you're kind of wondering what type of questions to ask, you can come here and and pick a question and pass that to the query engines that we will be working with later.
>
> **[10:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=607)** And there you have it.
>
> **[10:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=607)** So this is one way for you to create a evaluation data set.
>
> **[10:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=612)** So there are a bunch of other frameworks out there.
>
> **[10:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=615)** There's a bunch of libraries, there's a bunch of vendors out there that are selling you a solution.
>
> **[10:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=621)** But at the end of the day, you can create an evaluation data set on your own.
>
> **[10:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=625)** Everything literally just comes down to prompting.
>
> **[10:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=627)** This is like the secret sauce of creating evaluation data set.
>
> **[10:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=630)** It's just coming up with a really good prompt and having some really good examples for what a good response looks like.
>
> **[10:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=637)** So if you wanted to, in your prompt, you can create few shot examples of question answer pairs to kind of guide your language model to generate the right type of question answer pairs.
>
> **[10:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=648)** But this is the basic way you can create evaluation data set.
>
> **[10:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=652)** I've included it in this course just for the sake of completeness.
>
> **[10:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=655)** We're not going to be using this evaluation data set at all throughout the rest of the course.
>
> **[10:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=659)** We're not going to be touching on evaluation at all throughout the rest of the course.
>
> **[11:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=663)** But like I mentioned, I feel it would be irresponsible of me as an AI engineer and as somebody teaching you about RAG to not at least mention evaluation and how to create an evaluation data set.
>
> **[11:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=676)** From here on out, we're going to go deep into retrieval augmented generation.
>
> **[11:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=680)** So I hope you're hype for that.
>
> **[11:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-to-create-an-evaluation-set?u=76281980&t=682)** See you in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** llm (10), gpt (5), rag (4)
> **Code Keywords:** function (3), pass (2), let (1), this, (1), case, (1)
> **CLI Commands:** make (6), find (1)
> **Versions:** 3.5 (3), 4.0 (2)
> **Cross-References:** we discussed (1), coming up (1), in the next (1)
> **Exercise Files:** template (3)
> **Warnings:** keep in mind (1), warning (1)
> **Prerequisites:** make sure you have (1)


### 5. Advanced RAG: Pre-Retrieval and Indexing Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How we can improve on Naive RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=0)** - [Instructor] At this point in the course, I hope you're familiar with how the Naive RAG paradigm works.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=7)** Now, we are going to spend a significant chunk of time talking about how we can improve upon the Naive RAG paradigm.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=14)** And a lot of the inspiration I've taken for the structure of this course and the topics I want to cover, come from this paper right here.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=20)** "Retrieval-Augmented Generation for Large Language Models: A Survey."
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=24)** And this is a awesome comprehensive review paper, and what it does is it looks at the progression of different RAG paradigms and it buckets them into three groups, the Naive RAG, Advanced Rag, and Modular RAG paradigms.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=40)** And before we jump in to these paradigms and see it all played out in code with LlamaIndex, I want to give you a bit of an overview of them.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=49)** So Naive RAG we should be familiar with.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=51)** Naive RAG is essentially a three step process where we index, retrieve, and generate.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=56)** In the indexing phase, we're cleaning data, we're extracting data, we're chunking it up, and then we're vectorizing it.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=61)** In the retrieval phase, we're doing some type of comparison between the query and the indexed chunks.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=67)** In the generation phase, we're synthesizing what we retrieve from the vector database with a prompt and sending that to the LLM for a generation.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=76)** In the Advanced RAG paradigm, we actually look for optimizations to our RAG pipeline in two different places.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=82)** That is the pre-retrieval and the post-retrieval process.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=86)** Now, in pre-retrieval, there's a number of optimizations that we can make.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=90)** We can optimize the way we index data, and we do that by enhancing the granularity, structure, metadata that we put into our vector database.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=97)** We can also fine tune our embedding model for a domain-specific use case.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=102)** Just a heads up, we are not going to be fine tuning an embedding model for this course, but it is something that is available to you.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=109)** You can also look at using some type of dynamic embeddings.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=113)** Now in the post-retrieval phase, we have a few different ways that we can improve upon Naive RAG.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=120)** One is re-ranking the retrieved information.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=123)** We can re-rank this so that we have ranking based on diversity, based on maybe the placement of the document in the context, or maybe based on some type of semantic similarity.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=134)** We can also do some type of prompt compression.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=136)** We're not going to get too much into prompt compression, but just know that it is a technique that's available to you.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=141)** In the Modular RAG paradigm, here we can look at integrating new modules, for example, a search module for specific scenarios or a memory module for retrievable guidance.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=152)** And this allows for a serialized pipeline or an end-to-end training across the module.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=159)** So this builds upon the Advanced RAG paradigm.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=163)** Although I will touch on some Modular RAG patterns, the bulk of the time in this course will be spent on Advanced RAG, and I want to give you a bit of a motivating example for the different types of optimizations that we could do in the pre-retrieval phase.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=178)** For example, I mentioned that we can enhance data granularity, and this is good because it's going to improve the standardization of text and accuracy of what we retrieve from the vector database.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=190)** It can help remove ambiguous context and it allows us to incorporate more meaningful data.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=197)** We can also optimize our index structure, so we can have different chunk sizes, multiple index pads, and maybe if you want, you can even use a graph structure.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=207)** We'll talk about utilizing metadata, so we can use things like dates and chapters into the chunks to improve the filtering and relevance.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=216)** We're also going to talk about post-retrieval techniques.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=219)** So we're not going to touch on enhancements for embeddings in this course, but we'll talk about some post-retrieval techniques, specifically some re-ranking strategies.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=229)** So there's a few different ways that we can optimize the RAG pipeline.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=233)** And you know, for example, one of them is hybrid search, another is recursive retrieval and query engines, we can do a step back prompting approach, or we can do some type of subqueries and hypothetical document embeddings.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=245)** So there are several different patterns that we can follow for Advanced RAG, but we'll spend the majority of the time on pre-retrieval and indexing techniques as well as post-retrieval techniques.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/how-can-we-improve-on-naive-rag?u=76281980&t=256)** In the next video, I'm going to show you how you can optimize your chunk size in LlamaIndex.

> [!info]- Semantic Content
>
> **Env Vars:** rag (16), llm (1)
> **Code Keywords:** module (3), case. (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### Optimizing chunk size
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/optimizing-chunk-size?u=76281980)

#### Small to big retrieval
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=0)** - [Instructor] Ever felt like finding a needle in a haystack?
>
> **[0:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=3)** That's what basic RAG pipelines can feel like when they embed and retrieve huge chunks of text.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=8)** You end up using the same big chunks for synthesis.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=12)** This isn't always ideal, because there's often a lot of filler text that muddles the important parts, which makes retrieval less effective.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=21)** Now imagine instead of searching through the whole haystack, you can find the first few needles and then pull out only the relevant bits of straw around them.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=31)** That's what small to big retrieval does.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=34)** We start by fetching the smaller more focused chunks of text that directly answer your query.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=40)** Then, we use those chunks to guide us to larger parent chunks, which provide a broader context that can be used for synthesis.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=49)** That way, you get the best of both worlds.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=52)** Precise retrieval and comprehensive context.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=56)** Let's go ahead and get right into it with our code.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=60)** This is stuff that you are hopefully familiar with by now.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=63)** It's stuff that we've done 100 times and let's jump right into small to big retrieval.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=68)** Bit of a warning here, all the notebooks that I've got for you are very heavy on text.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=73)** There's a lot of great information in them.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=76)** I'm going to skim over the information and leave it to you to get more in depth, and pause and read.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=84)** So let's go ahead and talk at a high level about small to big retrieval.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=88)** This is also known as recursive retrieval and it's a awesome feature of LlamaIndex.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=94)** The whole purpose of this is to efficiently retrieve relevant context for a query.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=101)** So recursive retriever starts by retrieving smaller query specific chunks and then we follow references to larger contextual chunks.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=109)** We also do a bit of node postprocessing where we are transforming what is sent to the language model so that we can enhance the quality and relevance of our response.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=120)** There is also a response synthesizer that we need to make use of, which will combine the retrieved chunks with the user query to generate a more coherent response.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=132)** The first thing I want to talk about is the SentenceWindowNodeParser.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=135)** The SentenceWindowNodeParser focuses on individual sentences while still capturing the surrounding context.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=142)** And this is useful for scenarios that require broad context.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=148)** The way it works is first we do a bit of sentence splitting.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=151)** So we divide our corpus into sentences using the tokenizer.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=157)** In this case, the tokenizer that's used is the PunktSentenceTokenizer from nltk.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=162)** For each one of those sentence, we create a window of surrounding sentences.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=167)** We then store this window into the nodes metadata.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=170)** That means we also need to undertake some metadata management.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=174)** So we need to store the original sentence text in the metadata, and also we need to handle the window and original text and exclude that from being embedded.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=186)** Some key arguments that you need to know are as follows.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=189)** The window_size, window_metadata_key, original_text_metadata_key, and the sentence_splitter.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=195)** The usage pattern for this is as follows and it's similar to everything that we've seen so far.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=201)** We're going to see it in action in just a second.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=203)** If you're wondering when you should use this, you should use this for tasks that require sentence level understanding, but can benefit from broader context.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=212)** You also can use this when you want fine grain control over the embedding space, because it could focus on specific sentence, meaning within the local context.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=221)** We're also going to combine this with the MetadataReplacementNodePostProcessor, which is honestly a mouthful to say.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=231)** And I'll talk about that in a little bit.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=233)** Essentially what this thing does is that it replaces the original sentence with its window for broader context and consideration.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=241)** So see this in action.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=242)** So here is the original_text node.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=245)** What we're going to do is take this text node and send it through the SentenceWindowNodeParser using a window_size of two.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=253)** What we end up with now is if you look here, we now have metadata.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=256)** What is in the metadata?
>
> **[4:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=257)** Well, we have the original text.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=259)** We also have this window.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=261)** This window has two sentences before and two sentences after that original sentence.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=276)** I want to draw your attention to two keys here.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=281)** One is the excluded_embed_metadata_keys and the excluded_llm_metadata_keys.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=287)** What this is saying is when we are going to embed this node, ignore the window, ignore the original_text, and just embed this.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=300)** I also want to note here that we have this information in the node for relationships.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=306)** All this is telling us is given us a path from the original_text to the window around it.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=313)** Here's another example.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=315)** In this case, it's a window size of three, and you can examine this on your own.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=322)** All right, so let's talk about the MetadataReplacementPostProcessor and the SentenceWindowNode processor.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=330)** So now let's talk about the MetadataReplacementPostProcessor and the SentenceWindowNodeParser.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=336)** And look, I am just as frustrated with the names of some of these things as you are.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=340)** These are long names and they're mouthful, but at least they're descriptive.
>
> **[5:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=344)** So just recap, what is it that the SentenceWindowNodeParser does?
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=348)** We parse the document into nodes, each node has a single sentence, and then we create this contextual window around that sentence so that each node has a window of sentences surrounding this core sentence, which gives us added context.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=364)** But there's also this MetadataReplacementPostProcessor.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=370)** What this does is it's going to replace the sentence with a window for broader context.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=375)** That's pretty much all it does.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=376)** This way the language model will have like the full context so that I could reason over that.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=381)** So let's quickly just talk about how this thing actually works, right?
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=383)** We have a user query that comes in.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=386)** That user query, we are going to find the sentence that's most similar to it.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=391)** So we find this sentence.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=393)** But at the same time, we are sending to the language model a window of sentences before and a window of sentences after it.
>
> **[6:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=401)** That all gets sent to the LLM.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=403)** The LLM then uses that to generate a response.
>
> **[6:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=407)** We're going to go ahead and instantiate a sentence_window_splitter, just a wrapper function here.
>
> **[6:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=412)** I'm going to create nodes, each of which has a window_size of a five.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=419)** And here's an example of what one of those looks like.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=423)** Here, I want to point out metadata mode.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=425)** So I showed you earlier in the nodes that we have these excluded_embed_metadata_keys, excluded_llm_metadata_keys.
>
> **[7:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=434)** So you can manipulate what metadata gets sent to the LLM.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=439)** So in this case, we can remove or add keys or whatever here.
>
> **[7:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=444)** But this just illustrates, okay, what is all the metadata that is associated with this mode?
>
> **[7:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=449)** Here are the metadata_mode.
>
> **[7:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=451)** When it's LLM, this is just everything that gets sent to the LLM.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=453)** So this is what the LLM is going to see at generation time.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=458)** And of course we can change this.
>
> **[7:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=459)** And you'll note here that, for example, we're looking at here node five, let me just change this here to be node five, right?
>
> **[7:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=468)** So the LLM, in this case, is just going to get that one bit of context.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=474)** But we can change this and we can manipulate this, and this is what the postprocessor does.
>
> **[7:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=478)** All right, so next we are going to ingest this Qdrant and build an index.
>
> **[8:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=483)** And so we're instantiating the vector store, like so.
>
> **[8:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=488)** Here you'll notice that in transforms, I am not including the actual SentenceWindowNodeParser.
>
> **[8:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=496)** That's because I've already handled that above.
>
> **[8:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=499)** So I can just pass the documents themselves.
>
> **[8:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=501)** The only transformation I need to see embedding model.
>
> **[8:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=504)** We'll go ahead and ingest this into Qdrant.
>
> **[8:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=508)** You'll see that it takes quite a bit of time, roughly 13 and a half minutes.
>
> **[8:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=512)** If you go to Qdrant, again, remember, go to Overview, hit on Clusters, click the down caret, open the dashboard.
>
> **[8:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=523)** And you can see here that we have our collection.
>
> **[8:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=527)** The small-to-big-sentence-window, and it's all right there for us.
>
> **[8:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=533)** With that in place, we now build a query engine.
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=538)** So I'm going to switch up the prompt a little bit.
>
> **[9:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=540)** So let's go ahead and show you what the prompt is.
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=543)** If we go to the helper functions, we look at prompts, and specifically I'm going to look for the HYPE_ANSWER_GEN_PROMPT.
>
> **[9:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=552)** You're trusted mentor to an adult mentee.
>
> **[9:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=554)** Your mentee is seeking advice in the question.
>
> **[9:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=556)** Here's some raw thoughts and then I, you know, tell it how to respond.
>
> **[9:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=560)** In this case, a HYPE tone be straight up, right?
>
> **[9:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=566)** And here is where we do our postprocessing, right?
>
> **[9:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=570)** So we're going to use a different pattern than what we've seen for constructing the query engine up until this point.
>
> **[9:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=576)** So I need to instantiate a node_postprocessor, right?
>
> **[9:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=579)** This is what is going to inject that sentence window into the context of the LLM.
>
> **[9:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=585)** I'll go ahead and build my index, I'll go ahead and build my query engine.
>
> **[9:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=592)** And we will run that and we'll update our prompt as well, of course.
>
> **[9:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=597)** Here we'll set up our query_pipeline.
>
> **[10:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=600)** So we have an input component and then the sentence_window_query engine, right?
>
> **[10:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=606)** You'll notice that I passed the node_postprocessor as an argument to the query engine, so it knows how to process what I'm going to be sending to it.
>
> **[10:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=618)** Now we can go ahead and set up our query_pipeline.
>
> **[10:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=620)** So we've done this before several times.
>
> **[10:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=622)** Here is a question that I've ran through here.
>
> **[10:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=624)** Essentially, how can I effectively build strength across multiple facets of real life without relying on complicated machines?
>
> **[10:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=630)** And so you see that we get a decent response here from the language model.
>
> **[10:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=635)** Of course you could try it again on this question if you'd like.
>
> **[10:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=639)** Now let's dive a bit deeper into the mechanisms behind small to big retrieval.
>
> **[10:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=643)** And I want to focus on how smaller child chunks refer to bigger parent chunks and how post-processing of these nodes is going to help enhance our data retrieval and response generation.
>
> **[10:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=655)** So I want to kind of demystify a concept here that point to a larger parent chunk.
>
> **[11:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=676)** And this will help manage and access data in a more structured manner.
>
> **[11:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=681)** So what happens is during query time, the user query will come in, that query will be searched against the vector database.
>
> **[11:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/small-to-big-retrieval?u=76281980&t=691)** We're going to retrieve smaller chunks

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (5), require (2), this, (2), this. (2)
> **Code Identifiers:** window_size (3), original_text (3), excluded_embed_metadata_keys (2), excluded_llm_metadata_keys (2), node_postprocessor (2)
> **CLI Commands:** node (9), find (3), make (1)
> **Env Vars:** llm (8), rag (1), hype_answer_gen_prompt (1), hype (1)
> **UI Navigation:** go to (3), open the (1)
> **Analogies:** similar to (2), imagine (1), for example (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** set up (2)

#### Semantic chunking
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=0)** - [Instructor] Let's continue on with our journey in advanced Rag with pre retrieval and indexing techniques.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=7)** Honestly, these are the most high leverage, high impact things that we could do to improve our Rag system, no joke.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=15)** In fact, I want to draw your attention to this tweet from just today.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=19)** Just earlier today, I saw this tweet from Anton and Anton's a hacker, generative AI hacker, and he posts a lot about LLMs and RAG and stuff like that.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=27)** But of course he says one of the most important things is proper chunking, right?
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=34)** Proper chunking depends on the type of content you have.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=37)** As we discussed in the previous videos, naive chunking can bring in content that's irrelevant, and what's going to happen is if you bring in content that's irrelevant, your model is just going to give you garbage responses.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=49)** So that's why I'm spending so much time on pre retrieval and indexing techniques, which honestly for the most part comes down to chunking strategies.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=57)** And we're going to talk about a kind of newer, more recent chunking strategy in this video.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=61)** But first, let's go ahead and set our usual things that we do, the API keys and whatnot.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=67)** We'll go ahead and set up our LLMs and embedding models.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=70)** And for this video and for the rest of the videos, we're going to switch it up and do something different.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=75)** I'm going to focus primarily on the techniques and the patterns.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=78)** I'm not going to go through the whole process of splitting up all the documents, embedding all the documents, and pushing them all to quadrant all the time.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=85)** From here on out, we're just going to work with little subsets of our nodes, and we're just going to work with them in memory.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=91)** So no more pushing stuff to quadrant and no more working with all of the embeddings.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=96)** Of course, you are free to do so if you wish, but my main goal here is to teach you the patterns.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=101)** So let's go ahead and focus on that.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=103)** Right here, what I'm going to do is sample 100 nodes randomly, and now we can talk about semantic chunking.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=110)** This is a newer method.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=111)** It was introduced by Greg Cameron in this YouTube video, and a good way to think about it is that it's a way to make sure that related sentences stick together.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=121)** That way text retrieval is more accurate and more meaningful.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=126)** So what semantic chunking does is that we're using sentence embeddings to find natural break points based on semantic similarity.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=134)** So instead of a breaking the text at fixed intervals, for example, after N number of tokens, or after N number of sentences, or after a particular break point.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=146)** Instead, what this methodology does is that we are finding break points based on semantic similarity.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=153)** So instead of breaking text at these fixed intervals, we're keeping these related sentences together.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=158)** And so the way it works is we start by splitting the documents in two sentences, but they're semantically similar sentences.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=164)** We're going to index those sentences by position.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=167)** We're going to choose this buffer size, which is kind of like the window.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=170)** It's just the number of nearby sentences to consider.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=173)** Then we'll measure similarity in embedding space.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=176)** what we want to do is keep similar sentences together and then split dissimilar sentences apart.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=184)** Finally, what we're going to do is merge these groups based on a similarity threshold.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=192)** All of this is done through the semantic splitter node parser abstraction in LlamaIndex.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=198)** What this does is breaks down a document into semantically related chunks, which are called nodes, using semantic similarity, and these adaptive breakpoints and kind of a step-by-step under the hood.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=209)** What's happening is we're splitting the documents up.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=212)** So we take in our document objects as input.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=215)** We're going to split those into sentences using a sentence splitter like the split by sentence tokenizer.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=221)** We're going to group sentences together, these adjacent sentences based on the buffer size, the buffer size will decide how many sentences are going to be considered together for measuring somatic similarity.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=233)** We'll do a embedding calculation.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=234)** So we'll calculate the embeddings for each group of sentences, and then the embeddings are going to represent the semantic meaning in this kind of dense vector format that we've seen before, right?
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=245)** In this case, we're using text embedding three small, and that means we're representing that chunk in a vector of 1536.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=254)** Once our text has been embedded, then we can do our distance calculation.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=258)** So we're going to compute cosign similarity between the embeddings of adjacent sentence groups.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=263)** We are going to convert this similarity into a distance measure, which is just a one minus similarity.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=269)** Then we got to find out our break points.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=270)** So we can use a percentile threshold to decide the breakpoints that we want.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=274)** If the distance between the groups of sentences exceeds this threshold, we'll make a new node.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=279)** Finally, we'll create the node as we normally do, split the documents into nodes based on the breakpoints.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=285)** Each node is going to be a coherent chunk of related sentences.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=289)** It might even just end up being a single sentence.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=293)** There's also going to be metadata attached to the node.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=297)** This metadata could be like the original text, and it'll also maintain relationships between nodes for a sequential order.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=304)** The arguments you need to be aware of are as follows, the embedding model, of course, you can pick the embedding model that you want to use.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=312)** By default, it'll use whatever is in your global context, in your settings, or you can pass a embedding model or you know, LlamaIndex does.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=320)** If you don't pass any argument, it just uses open AI embeddings.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=324)** Then there's the buffer size.
>
> **[5:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=325)** This is the number of sentences to group for similarity.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=328)** It defaults to one.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=329)** If we increase the buffer size, that means we're going to allow the parser to get more context of the adjacent sentences.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=336)** More context, of course, means more meaningful relationship between sentences, and as we discussed in the breakpoint threshold, smaller values of breakpoint threshold means that we'll have more nodes being generated.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=349)** The default value here is 95.95, the 95th percentile, and we can adjust this threshold, right?
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=356)** So we can control the granularity of the way those nodes are split up.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=360)** A lower value is going to create more nodes.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=362)** A higher value will create fewer nodes.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=365)** Then of course, we have the sentence splitter.
>
> **[6:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=367)** This defaults to the split by sentence tokenizer, which as we have seen before, uses the punked sentence tokenize from NLTK.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=376)** So this is used to initially split the document into those individual sentences, but the way those actual node boundaries are determined, again, is based on semantic similarity rather than a fixed splitting approach.
>
> **[6:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=388)** This sentence splitter is more of a pre-processing step that we use to prepare the documents for this analysis.
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=395)** That way we have a consistent input format to work with.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=399)** So let's go ahead and define a function here.
>
> **[6:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=400)** The semantic splitter function.
>
> **[6:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=402)** Of course, this just wraps the splitter that we have here.
>
> **[6:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=406)** So as you've seen here, there are a lot of design choices to make, even with something as seemingly simple as chunking and splitting a document.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=418)** You've seen over the last few videos that there are several hyper parameters that you all are in control of that.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=424)** These are design choices that you, the practitioner, need to make.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=428)** For example, with the semantic similarity node parser, you got to think about the embedding model you want to use, the dimensions that you want to use for the embedding model, the buffer size, the breakpoint threshold, what type of sentence splitter to use as well.
>
> **[7:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=442)** What I'm going to do is just pick some arbitrary values.
>
> **[7:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=444)** I'm using the embedding model that we got from our settings, picking a buffer size of three, and that a threshold of 0.55.
>
> **[7:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=451)** So just random values.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=454)** We'll go ahead and run that.
>
> **[7:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=455)** And this is running on a small subset of 100 nodes.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=460)** Just to reiterate, from now on, we're just going to work with smaller subsets of our documents.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=466)** We're going to start working with our vector database locally and in memory, rather than just pushing it to quadrant every time.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=474)** What's important is that you learn the patterns.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=476)** So let's go ahead and let this run.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=479)** So the splitting of about 100 source nodes took about roughly a minute.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=484)** So let's see how many we end up with.
>
> **[8:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=486)** Remember, we started with 100 nodes, and now we have 1379 nodes.
>
> **[8:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=492)** So let's go ahead and just pick a node and see what that looks like.
>
> **[8:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=496)** All right, so this node, you could see here, the text is they all have extra motivation that comes from being a small group, interesting, okay?
>
> **[8:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=504)** So I'm wondering maybe if the node before or after it, what does that look like?
>
> **[8:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=508)** You can see here that there's no metadata attached here, but we have the relationships between the node that we are currently at and it's source nodes.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=519)** So the nodes that come before it and after it.
>
> **[8:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=521)** If you want to look at a different node, we can go ahead and do that.
>
> **[8:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=525)** This also looks like comes from the same book, the same section, and you see the textures just split as one sentence.
>
> **[8:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=534)** We can of course, see the actual content like, so we'll go ahead and build the index and ingest a quadrant node.
>
> **[9:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=546)** I said, this will take a long time, about 30 minutes.
>
> **[9:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=547)** That is only true if you are ingesting the entirety of the nodes into quadrant, but in this case, we're not going to do that.
>
> **[9:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=556)** We're just working with a small subset.
>
> **[9:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=559)** Again, just to go ahead and teach you the patterns.
>
> **[9:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=561)** So all this should look very familiar, right?
>
> **[9:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=562)** We do our normal steps.
>
> **[9:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=564)** As you know, I set the transforms up here by passing just the embedding model.
>
> **[9:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=570)** Why?
>
> **[9:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=571)** Because I am passing the already split nodes here as the documents.
>
> **[9:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=575)** If you're passing the unsplit nodes, then of course you would have to add that transformation here to first of the semantic splitting and then do the embedding.
>
> **[9:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=587)** So let's go ahead and ingest it in memory.
>
> **[9:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=589)** So we're going to ingest this two quadrant in memory.
>
> **[9:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=592)** So what I did was here, the first argument for set up vector store, I just changed it to memory.
>
> **[9:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=597)** So this is indicating to our quadrant client that we're just going to work with everything in memory, so we're not going to push it to the cloud.
>
> **[10:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=607)** So that took roughly 30 seconds to do, and we can of course now set up our query engine.
>
> **[10:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=613)** So I'm using the hype gen answer prompt that you've seen before, setting up the response mode as compact.
>
> **[10:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=620)** Using the query mode.
>
> **[10:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=621)** Again, remember that this create query engine is coming from Utils, which is a helper function, a wrapper that I've made around the different types of ways that we can query.
>
> **[10:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=630)** You can of course look at the source code for that, which is here under helpers, and then Utils, and then you can look at the source code for that.
>
> **[10:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=641)** Go ahead and create our query engine.
>
> **[10:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=644)** We'll set up our query pipeline.
>
> **[10:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=646)** Of course, we need to start with a input component.
>
> **[10:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=649)** That input component then gets sent directly to the query engine.
>
> **[10:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=654)** And remember that implicitly the query engine is using the LLM that we have from the global settings.
>
> **[11:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=662)** So in this case, GPT-40.
>
> **[11:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=664)** Go ahead and create that pipeline, and now we can run the pipeline and get a response.
>
> **[11:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=671)** So here I'm just asking, how can I navigate the maze of the market while building a company?
>
> **[11:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=675)** And you can see here, we get a response.
>
> **[11:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=678)** So I will let you go ahead and read that response.
>
> **[11:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=680)** And you can ask questions as well if you'd like.
>
> **[11:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=683)** What I recommend doing is actually just taking a look at the nodes that we ingested, kind of get a gist of what it is that those nodes have content-wise, and ask questions based on that.
>
> **[11:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=694)** That's it for the semantic chunking video.
>
> **[11:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/semantic-chunking?u=76281980&t=697)** In the next video, I'm going to talk to you about metadata, which is another important thing that will help us with retrieval.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), case, (3), function (3), finally, (2), pass (2)
> **CLI Commands:** node (13), make (4), find (2)
> **Env Vars:** rag (1), api (1), nltk (1), llm (1), gpt (1)
> **Prerequisites:** set up (4)
> **Cross-References:** we discussed (2), in the next (1)
> **Analogies:** for example (2), kind of like (1)
> **Versions:** 95.95 (1), 0.55 (1)
> **Exercise Files:** source code (2)

#### Metadata extraction
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=0)** - [Instructor] I spent the last few videos talking to you at great length about various chunking strategies.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=6)** I don't want you to think that this is the only advanced RAG or pre-indexing technique at your disposal.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=12)** But I do want to point out that as we have seen previously with some of those examples, some of those chunks of texts that we saw, sometimes a chunk of text might lack the context necessary to disambiguate that chunk from other similar chunks of text.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=30)** To combat this, we can use a LLM to extract certain contextual information relevant to our document, relevant to our nodes, to better help the retrieval and the language model disambiguate similar looking passages of text.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=47)** One way to do this is by using metadata.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=51)** So let's go ahead and talk about metadata.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=53)** We'll start as we normally do with our imports.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=57)** We'll set up our API keys, remember that from here on out we'll be working with an in-memory vector database.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=65)** We'll set up our LLM, set up our embedding model.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=68)** These few lines of code is just sampling from our doc store.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=72)** If you recall, we had a doc store where we cleaned and processed and parsed all of those PDFs.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=77)** We're just going to sample from there, but we're sampling in such a way that we're going to group by authors.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=82)** And then for each one of those authors, we'll select, in this case, 25 samples.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=86)** So we're going to keep the number of documents that we're working with small.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=91)** Again, the whole point here is just to illustrate and show you the various patterns for RAG and for Advanced RAG.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=99)** So we're not going to ingest everything anymore from here on out.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=102)** I think you've gained a lot of that experience over the several videos that you've seen up until this point.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=108)** Now we can just kind of focus on the patterns themselves and not really get distracted about ingesting to a vector database in the cloud or anything like that, working strictly in memory.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=118)** So what is metadata?
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=119)** Metadata is just additional context or information about the nodes.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=124)** So during retrieval we can leverage this additional context, this additional information for more precise and relevant retrieval.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=131)** But the effectiveness of this approach depends on the quality and relevance of the metadata tags that you use.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=137)** The most simplest way to add metadata is to do it manually.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=141)** And here's how we can do that.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=142)** What I'm going to do here is just add a metadata tag called known_for.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=147)** This will just add to each appropriate chunk of text metadata regarding what the author is best known for.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=155)** So for example, here it says Naval Ravikant is best known for his insights on how to build wealth and achieve happiness, so on and so forth.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=162)** Bruce Lee offers profound wisdom on self-improvement, personal growth, so and so forth.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=166)** So we'll go ahead and instantiate this dictionary, which is going to have the metadata that we will attach to our documents.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=174)** We'll go ahead and add this known_for tag to the metadata for each of our documents and we can take a look at the metadata for one random document.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=186)** And you can see here we've got the metadata that has the page_number, file_name, title, author, and what this author is known for.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=194)** Manually adding metadata is great, it's an important thing to do, but we can take this a step further.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=200)** We can extract metadata automatically from our nodes.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=204)** And so what metadata extraction does is we're automatically gathering information about our documents, about our nodes that we can use to enhance the organization retrieval and really understanding of our corpus of documents.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=220)** This becomes really useful when we have a ton of documents where manually extracting metadata is really untenable and impractical just due to the volume of data that we have.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=234)** So LLAMA Index has some tools and abstractions that we can use to automatically identify and extract different types of metadata from a document.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=246)** So if we look at the source code, you'll see that there are a number of different extractors that we can use.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=252)** One of them is the summary extractor.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=255)** The summary extractor will automatically generate a concise summary of that documents or nodes content.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=263)** There's also the questions answered extractor.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=266)** This is a really cool one because what it will do is it'll take a look at that chunk of text that node and it will say, okay, what questions can this node possibly answer and then we'll use that as metadata.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=280)** There's a title extractor.
>
> **[4:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=282)** A title extractor is just going to give the document some title, right, like a title for that document.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=288)** There's also the entity extractor where you can extract, you know, named entities like people, places or organizations, things like that.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=297)** There's also the keyword extractor, which will attach unique keywords to that particular node.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=305)** So let's go ahead and look at some of these extractors in action.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=309)** All of them come from the llama_index.core extractor module.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=314)** And the interesting thing to point out is that each one of these extractors has a prompt template associated with it.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=321)** And that is because we're making use of a large language model for this automatic extraction.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=326)** And you can inspect the prompt for each one of these extractors just by using the .prompt_template attribute.
>
> **[5:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=333)** So you can see for the summary extractor, we just give it the content of the section and say, summarize the key topics.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=340)** For the question answered Extractor, we say, here's some context, generate some number of questions.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=347)** Title extractor will say something like, give a title that summarizes the unique entities, titles or themes of this content.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=356)** The keyword extractor abstraction is structured a bit differently.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=360)** It has a prompt template, but it's buried within the LLM call and it's not like an attribute that we can access like how we have seen here.
>
> **[6:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=367)** You can look at the source code, which I've linked to here, and the source code, we'll tell you exactly that this is the prompt template.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=375)** So we have some context string and we say, give some number of unique keywords for this document.
>
> **[6:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=382)** Format them as comma separated.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=385)** In my opinion, the two most powerful automated metadata extraction techniques are the question answered extractor and the summary extractor.
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=395)** So recall, QuestionAnswerdExtractor, we're just going to generate some questions from a piece of text so some question answer pairs.
>
> **[6:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=402)** Summary extractor will extract the summary not only with the current text but with some of the adjacent text as well.
>
> **[6:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=411)** This is going to lead to higher quality answers and higher quality retrieval.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=419)** And so what we'll do now is define some metadata extractors, and we're going to use this metadatamode.embed, which just is telling LLAMA index how we want to handle the metadata when we are generating embeddings for a document or for a node.
>
> **[7:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=435)** Remember that when you call the get content function on a document, and if we specify metadatamode.embed, it's going to return the content of the document with the metadata that will be visible to the embedding model.
>
> **[7:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=450)** So a node that I wrote here that we'll use GPT-3.5 turbo to generate the metadata.
>
> **[7:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=455)** I'm actually just going to use GPT-4.0.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=457)** If you wanted to use GPT-3.5 turbo, you can swap that out if you'd like.
>
> **[7:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=462)** At the end of the day, this is all about experimentation, so I encourage you to try out the other metadata extractors to see what true results look like.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=470)** I give you the patterns for keyword extractor and the title extractor like so.
>
> **[7:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=475)** But we're just going to focus on using the QA extractor and the summary extractor.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=480)** So I've set the qa_llm to be GPT-4.0.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=485)** For text splitter here, I'm just going to use a token text splitter.
>
> **[8:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=488)** And you can see here again, you've got another design choice to make.
>
> **[8:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=491)** You could have used any other type of splitter if you wanted to.
>
> **[8:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=495)** You could use a sentence window, node parser sentence, splitter, you could use a semantic splitter.
>
> **[8:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=501)** Right, tyhere's so many design choices at your disposal.
>
> **[8:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=504)** Not to mention, hyper parameters like chunk size and overlap as well.
>
> **[8:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=508)** The QA extractor here, I'm just going to generate two questions per node.
>
> **[8:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=513)** And for the summary extractor, we'll get summaries for the previous, the current, and the next node.
>
> **[8:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=518)** So we go ahead and instantiate those.
>
> **[8:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=522)** We'll go ahead now and set up our vector database.
>
> **[8:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=526)** Note that if you were to run this on the entirety of the documents, like all of the documents that we had cleaned, it could take up to 30 minutes.
>
> **[8:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=533)** We're only working with a small subset so it'll take a lot less time.
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=538)** We will set up our transforms.
>
> **[9:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/metadata-extraction?u=76281980&t=540)** So we have the text splitter, QA, extractor,

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), rag (3), llm (3), llama (2), api (1)
> **CLI Commands:** node (8), make (1)
> **Code Keywords:** let (2), for. (2), this, (1), case, (1), self (1)
> **Code Identifiers:** known_for (2), page_number (1), file_name (1), llama_index (1), prompt_template (1)
> **Exercise Files:** source code (3), template (3)
> **Prerequisites:** set up (5)
> **Versions:** 3.5 (2), 4.0 (2)
> **Definitions:** is a  (1)

#### Document summary index
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=0)** - [Instructor] By this point in the course, I hope you're familiar with how a retrieval augmented generation pipeline works.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=7)** We have these source documents, which we then split up and create text chunks out of.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=13)** These text chunks get embedded using some embedding model and stored in vector database.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=19)** At query time, we're going to retrieve chunks by looking at the embedding similarity between what is in our vector database and what the user's query is.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=28)** Then, we'll synthesize the response by packaging up that retrieved context, putting it into a prompted setting to get to our LLM.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=38)** All this, as we have seen, works quite well and we get some decent responses, but there is a problem here.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=46)** The problem is the best way to represent text for retrieval might not be the best way to represent it for synthesis.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=54)** For example, a raw text chunk might have some really important details that the LLM needs to synthesize a good response.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=65)** However, it could also contain irrelevant information that will bias the embedding representation, or it might lack context, which would make it harder to retrieve.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=77)** We've already discussed one way that we can address this challenge, and that's the small to big retrieval, where we embed a sentence and then link it to a window of surrounding text.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=87)** This way, we get more precise retrieval of the relevant context and we have enough context for the LLM to synthesize a good answer.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=99)** What I'm going to talk about in this lesson is the document summary index or document summary based retrieval.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=107)** In this technique, we embed a document summary and then link it to the associated text chunks.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=114)** This is really advantageous because the summaries can provide more context than those individual chunks.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=121)** Also, the LLM can reason over summaries before accessing the full document, which will allow for optimal representations for retrieval and synthesis.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=134)** At a high level, this approach will extract summaries for each document in the hopes of improving retrieval performance over the traditional kind of semantic search on the text chunk alone that we have grown accustomed to over the last several modules.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=151)** This will use a concise summary that will be generated by an LLM, which could use its reasoning capabilities to enhance retrieval before synthesizing over the referenced chunks.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=164)** There's two key techniques that we can leverage here.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=167)** One is to embed summaries to linked document chunks.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=172)** Another is to retrieve the summaries and then replace with the full document context.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=180)** This technique has some really, really great benefits.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=184)** One is that summaries allow for initial filtering at the document level, which is useful when the query is focusing on the overall theme or summary of a document, not specific details.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=197)** Two is that the system can first retrieve summaries, which are shorter and faster to process.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=203)** This way, only the relevant documents are analyzed in detail, which will save time and resources.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=212)** Another advantage is that summaries provide a distilled view of the document's content, which can capture the essence and the key themes of that document.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=222)** Finally, this document summary index technique could be combined with chunking and metadata based retrieval strategies, so you can create this kind of layered approach that will balance accuracy and performance.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=234)** Let's see this all in action.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=237)** We'll begin as we normally do with setting up our LLM, setting up our embedding models, and instantiating a vector store.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=244)** Again, we are using the in-memory vector store.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=248)** We're also going to be using GPT-4, now GPT-4o as our language model.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=255)** And remember that we're only taking a subset of all our documents.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=260)** Now, with all that in place, we can start to use the DocumentSummaryIndex.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=264)** So the DocumentSummaryIndex is a abstraction in a Llama index that allows us to build an index from a set of documents, then generate a summary for each document using a response synthesizer, and then we're going to store the summaries and the corresponding document nodes into the index.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=286)** This document summary index supports two retrieval modes, an embedding-based retrieval mode, and a LLM-based retrieval mode.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=297)** The embedding-based retrieval mode is going to embed the summaries using an embedding model, and then at query time will retrieve relevant summaries based on the similarity to the query embedding.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=309)** LLM-based retrieval, on the other hand, is going to use a LLM to retrieve the relevant summaries based on that query.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=317)** Both of these techniques are focusing on indexing documents, generating summaries, and then providing some efficient retrieval methods based on either LMS or embeddings.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=327)** There's two ways that you can create a document summary index.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=330)** One is using the high-level API and the other is using the lower-level APIs.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=335)** I'm going to start by showing you the high-level API.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=338)** So we'll begin by instantiating a text splitter, a response synthesizer.
>
> **[5:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=343)** We'll use the tree_summarize response synthesizer.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=346)** And then finally, we'll instantiate the DocumentSummaryIndex from documents.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=349)** So this is a different pattern than what we've seen previously, and that's because the DocumentSummaryIndex is different from a vector store index.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=358)** We'll see in a little bit.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=361)** So we'll go ahead and pass in the documents and the other arguments.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=366)** So we need to tell this DocumentSummaryIndex what LLM we want to use, the embedding model, the transformations, how to synthesize response, and then what our vector store is going to be.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=377)** Then, we can go ahead and set up our query engine and pipeline, which is similar to what we have seen before.
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=383)** And I won't run inference with this because I'm going to show you the lower-level APIs for embedding-based retrieval.
>
> **[6:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=389)** So let's go ahead and talk about those.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=392)** Now that we've created a document summary index, here's how retrieval works.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=397)** There's two ways that you can retrieve.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=399)** The default retrieval method for the document summary index is using embeddings, so we retrieve relevant summaries from the index using embedding similarity.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=408)** You can also configure a DocumentSummaryIndexLLMRetriever, which will retrieve the relevant summaries from the index using LLM calls.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=417)** So the LLM-based retriever, again, is using language models to select relevant summaries based on the user query, while the embedding-based retriever is going to use embedding similarity to find relevant summaries.
>
> **[7:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=429)** First, I want to talk to you about the DocumentSummaryIndexLLMRetriever.
>
> **[7:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=435)** DocumentSummaryIndexLLMRetriever is going to retrieve relevant summaries from the index using LLMs.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=441)** And here, we can customize a number of things.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=443)** So let's go ahead and pull up the code.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=446)** First, we need to, of course, create a response synthesizer, and then we can instantiate the DocumentSummaryIndexLLMRetriever.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=453)** What this is going to do is, again, retrieve summaries from the index using a LLM call.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=460)** You can see here that there's a number of things that we can customize.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=463)** We can customize the prompt for selecting relevant summaries.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=466)** We can also process summary nodes and batches.
>
> **[7:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=469)** We can retrieve the top-k summary nodes based on the LLM's relevance scoring.
>
> **[7:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=475)** We can also use a LLM to select the relevant summaries.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=479)** So there's a few different arguments we can pass here.
>
> **[8:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=481)** These are all configurations, all things that you can choose.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=485)** Once we've instantiated this retriever, we can create a query engine from it.
>
> **[8:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=490)** So you've seen query engines before, so this is a more low-level API.
>
> **[8:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=495)** Here we create our query engine, passing the DocumentSummaryIndexLLMRetriever as the retriever, and also the response synthesizer.
>
> **[8:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=507)** We can go ahead and update the prompts.
>
> **[8:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=509)** In this case, we're using the hype answer prompt, and then we can run a query.
>
> **[8:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=513)** And we can get a response from that.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=516)** Also, you can create a query pipeline using this as well.
>
> **[8:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=522)** So above, I just showed you how to use the query_engine.query, but you can also pass it into a pipeline, just like how we've been doing throughout the course.
>
> **[8:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=532)** You can also create the DocumentSummaryIndexEmbeddingRetriever.
>
> **[8:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=536)** So again, this is going to retrieve relevant summaries from the index using embedding similarity, we're going to retrieve the top-k summary nodes based on embedding similarity, and we use a embedding model, of course, to embed the query.
>
> **[9:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=550)** We're then going to query the vector store to find similar summaries, and then inject that context into the LLM context window.
>
> **[9:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=558)** Here, there are two things that we need to pass, the index and similarity top-k.
>
> **[9:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=564)** So we can go ahead and instantiate a DocumentSummaryEmbedRetriever.
>
> **[9:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=569)** We can create the doc_embed_query_engine from that retriever, like so.
>
> **[9:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=577)** Then of course we can create our query chain and pipeline and get a response from our LLM.
>
> **[9:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=587)** There you have it.
>
> **[9:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=587)** You've learned a new technique for advanced RAG, a new pre retrieval and indexing technique.
>
> **[9:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=596)** In the next lesson, we're going to talk about query transformation.
>
> **[9:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/document-summary-index?u=76281980&t=599)** So I'll see you there.

> [!info]- Semantic Content
>
> **Env Vars:** llm (17), api (3), gpt (2), lms (1), rag (1)
> **Code Keywords:** pass (4), let (3), finally, (2), this, (1), case, (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** tree_summarize (1), query_engine (1), doc_embed_query_engine (1)
> **Analogies:** for example (1), similar to (1), just like (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** in the next (1)

#### Query transformation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=0)** - [Instructor] We are going to close out our discussion of pre-retrieval techniques by talking about query transformation.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=7)** Query transformation is a process in which a user's initial query is converted into a different format or broken down into subqueries.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=16)** This transformation can be executed before the query is run against the database or an index.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=22)** Hence, why it's called a pre-retrieval technique.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=25)** The purpose of transforming a query is to enhance the effectiveness of what we retrieve from the database and make sure that the response is as accurate and relevant as possible.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=35)** Also, it just could be the case that your users don't know what it is that they actually want to ask and might need some help from a language model.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=41)** So let's go ahead and dig into it.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=43)** So we'll start here by looking at some source code, right?
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=46)** If you're curious about what is going on under the hood, for anything in LlamaIndex, for any library you're working on in general, you should always be reading the source code.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=55)** I can't stress that enough.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=57)** Read the source code.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=57)** That's where all truth is.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=59)** So here, I'm essentially, I'm creating a prompt, and in this prompt, I'm saying, "Look, users aren't always the best at articulating what they're looking for," so on and so forth.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=69)** And I'm telling the LLM to take this user's query and generate some number of questions.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=74)** What I've done here is included few-shot examples in the prompt.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=77)** You'll be surprised how far few-shot examples can go.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=81)** This prompt right here is what the LLM is going to use as part of its context.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=87)** So that when the user query comes in, we'll augment that query, get back some other queries.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=92)** And this augmented query is what is going to be sent for retrieval.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=98)** This is important.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=99)** And as you can see here, if you look at the examples that I've laid out, what I'm hoping to do with query transformation is to help interpret the user's intent more accurately.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=111)** If we're transforming a query into a form that aligns better with the underlying data structure or the capabilities of the search engine, it means that the system is going to understand what it's being asked.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=122)** Also, some queries are really complex and might require information from different parts of a database or index.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=128)** And so what a query transformation will do will allow these type of complex queries to be decomposed into simpler ones that could be individually processed and then integrated to form a comprehensive answer.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=140)** Let's go ahead and see this in action.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=142)** So here I'm passing in a QUERY_STRING.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=144)** I have a function here that is just going to send a call to the language model and say, "Hey, take this string and generate some additional queries," right?
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=153)** And this is using the prompt template that I have above.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=157)** So you can see here, the question I passed it is, how can I create my own luck?
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=161)** And you can see the generated queries that we get.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=166)** A specific type of query transformation is the SubQuestionQueryEngine.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=172)** As I mentioned before, some queries are complex, some queries need to be broken down, and that's what the SubQuestionQueryEngine does.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=179)** It just breaks down these complex queries into simpler sub-questions.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=183)** So we get a complex query, decompose a query into a bunch of sub-questions.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=188)** Each one of those sub-questions is hopefully going to extract information from the database.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=195)** Then, we're going to send these sub-questions to the database, get back the similar responses, and then synthesize that to get a response from the LLM.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=206)** And we initialize that using the SubQuestionQueryEngine.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=211)** So this is a type of query engine in LlamaIndex.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=214)** So what we do is we build out this query_engine_tool object.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=219)** I'm not going to get too much in detail for that.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=222)** This query_engine_tool will then take the user's initial query, and then with that, create a bunch of sub-questions.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=231)** So we initialize the query_engine_tools, then we initialize the sub_question_query_engine, like so.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=238)** Then, we can go ahead and change the prompt.
>
> **[4:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=240)** In this case, I'm using our standard HYPE_ANSER_GEN_PROMPT.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=245)** We can see here this is the actual prompt that gets sent to the language model.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=249)** It's saying, "You are an agent, you got multiple tools," so on and so forth.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=254)** And then it gives it the user query.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=256)** And then we package that as well with the hype query as well.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=261)** And all this gets sent to the language model.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=263)** And so here, we send the sub_question_query_engine.query, "How could I build my own luck, what are the types of luck I should pursue."
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=269)** So you can see, here's like a bunch of different questions that I'm asking.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=273)** The sub_question_query_engine breaks this down into many, many smaller pieces.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=278)** The result here is empty because I took a very small subset of the documents that we're working with.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=285)** I just took two, for example, two questions from each one of the authors.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=289)** You can expand that and you'll probably get an actual response.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=293)** The point is you see what's happening here.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=295)** I give the sub_question_query_engine this long query, it breaks it down to smaller ones.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=301)** Those smaller ones each get sent, if you were, to the vector database to retrieve the relevant nodes.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=311)** Another type of query engine is the hypothetical document embeddings.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=316)** This creates a hypothetical answer or document based on the query, which is then used to retrieve information from the database.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=323)** So it's an advanced approach that actually works really well and it leads to better embedding quality and more relevant search results.
>
> **[5:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=331)** So again, this technique, what we're doing here, we're generating a hypothetical document that is based on the user's query.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=338)** This is going to be used to improve the embedding and retrieval process.
>
> **[5:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=342)** And this is really useful for enhancing the quality of responses in cases where maybe the direct query might be too vague or broad.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=353)** So how does it work?
>
> **[5:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=354)** Just reiterate, we feed a query to the language model with the instruction to write a document that answers the question.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=362)** This is going to generate a hypothetical document that's going to capture the essence of the document, that is.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=368)** We're going to generate an embedding vector for this fake document.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=372)** We're not generating any actual text content for the document, but this embedding is going to be used to reserve some space in the vector store index.
>
> **[6:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=382)** There's not actually going to be a full hypothetical document that we can access later.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=386)** But this vector, we can use to search against the corpus embeddings, and the most similar real documents will be retrieved.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=392)** So the idea is that a hypothetical answer to a question is going to be more semantically similar to the real answer than a question is.
>
> **[6:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=401)** So in practice, this means that your search would use a LLM, like GPT, to generate a hypothetical answer, then embed that and use it for search.
>
> **[6:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=411)** So to use HyDE, we use a query transform.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=414)** So the HyDEQueryTransform.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=416)** And the HyDEQueryTransform, we are going to wrap that into the TransformQueryEngine.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=423)** So we instantiate the HyDEQueryTransform, we instantiate a hyde_query_engine, and then you can see the prompt that we get.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=437)** And now, we take that prompt.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=439)** And you can see here, we take our QUERY_STRING.
>
> **[7:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=442)** And here, we have a hypothetical answer.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=446)** And this hypothetical answer is what will help us find relevant context in our vector database.
>
> **[7:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=455)** So we can go ahead and now create a hyde_query_pipeline the same way that we normally have, and then run that pipeline.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=465)** If you want to learn more about hypothetical document embeddings, check out the paper that introduced it.
>
> **[7:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=472)** It's called "Precise Zero-Shot Dense Retrieval without Relevance Labels."
>
> **[7:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=478)** And you can see here, they have this illustration of the HyDE model, and it gives a lot of detail for how it works.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=484)** So I'm not going to cover all of the mathematics behind it.
>
> **[8:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=487)** But if you're interested, they've got a ton of mathematics in there.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=493)** So that ends our discussion for query transformation.
>
> **[8:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=496)** It is a huge aspect of modern RAG systems.
>
> **[8:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=501)** We can use this to have more accurate, relevant, and speedy responses, and it really plays a role in the effectiveness of a good RAG system.
>
> **[8:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=511)** I think it's one of those techniques that is high-leverage and can really help improve your RAG pipelines.
>
> **[8:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/query-transformation?u=76281980&t=518)** I will now see you in the next module, where we're going to continue talking about advanced RAG, focusing more on post-retrieval and other techniques.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4), rag (4), query_string (2), hype_anser_gen_prompt (1), gpt (1)
> **Code Identifiers:** sub_question_query_engine (4), query_engine_tool (2), query_engine_tools (1), hyde_query_engine (1), hyde_query_pipeline (1)
> **Code Keywords:** let (2), for, (1), require (1), function (1), case, (1)
> **Definitions:** is a  (3), means that (2)
> **Exercise Files:** source code (3), template (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)


### 6. Advanced RAG: Post-Retrieval and Other Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Node post-processing
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=0)** - [Instructor] We're going to continue on learning about advanced RAG techniques, and in this chapter of the course we're going to talk about post-retrieval and other techniques.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=8)** I'm going to kick our discussion off by talking about node postprocessing.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=14)** So note in this lesson and the lessons going forward, I'm not going to go through and run all the code for you.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=22)** I'm going to let you go ahead and piece the patterns together yourself.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=26)** That being said, let's go ahead and jump right into it, I want to talk to you about node postprocessing.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=31)** A note that all this stuff right here, I've set it up for you, so all the quote-unquote boilerplate has been set up for you, so that if you do want to play around with these postprocessors, I'll leave that right up to you.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=42)** So what is a node postprocessor?
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=45)** So a postprocessor applies some type of additional processing or filtering to a list of nodes that's returned by a query, and then returns a final result.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=55)** And these are modules that take in a set of nodes, apply a transformation or filter, and then return them.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=60)** That's basically all they do.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=62)** But there are so many different postprocessors in LlamaIndex, and I've linked to the source code here where you can take a look here and just see all the different types of postprocessors available to you: Keyword, similarity, previous next node, auto previous next node, the list goes on.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=78)** There's a lot of postprocessors.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=80)** If you look into the source code, LlamaIndex core, and then postprocessors, you'll see all the types of postprocessors available to you.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=88)** What I want to talk to you about specifically are the similarity postprocessors, keyword, metadata replacement, long context reordering, and sentence embedding.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=98)** We've actually already seen the metadata replacement postprocessor in action in a previous lesson, but I'm going to go ahead and just cover it again here.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=107)** So let's talk about the basic usage pattern for node postprocessing.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=111)** The wonderful thing about these type of orchestration frameworks is that it exposes a common API that you can use for a wide variety of the abstractions.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=119)** And that's amazing because you keep the patterns in your head, you don't have to kind of context switch between the different types of postprocessors or the different types of abstractions, it's all a similar high level API.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=133)** So the basic usage pattern for a node postprocessor is as follows.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=138)** So you use the node postprocessor as part of a query engine, and this is where the transformation is going to be applied to the nodes that are returned from a retriever before the response synthesis step.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=150)** Now keep in mind that you don't use a node postprocessor directly in the as_retriever method of the index, and I'll talk about that at the end of this lesson, but the basic usage pattern is like this.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=163)** Of course, you import your VectorStoreIndex, you import your postprocessor of choice, you instantiate your postprocessor with whatever arguments that you want, and you pass this as an argument to the query engine.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=175)** So index.as_query_engine, you can pass a node postprocessor to the node postprocessor argument.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=182)** Now recall that we have a abstraction built on top of that called create_query_engine, that is in the helper functions.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=190)** Here we're using the query mode, and you can just pass it when you construct your query engine as a keyword argument using the query mode, and you'll have your postprocessor set up.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=203)** So you've seen the pattern I think at least a dozen times, so I hope you picked up on it and can apply it yourself.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=209)** So I'm going to describe the postprocessors and how to instantiate them, but you can apply them to your query engine and use them on your own.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=216)** After all, I do believe in you, and also I believe in my ability to have taught you well.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=219)** So I think you are well capable of doing that by this point.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=223)** So let's go ahead and kick off our discussion by talking about the similarity postprocessor.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=227)** This is great, it does exactly what it says it does.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=230)** (Instructor chuckling) We filter a list of nodes based on the similarity score, so you can provide a similarity cutoff to control this threshold.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=237)** And what's going to happen is that, nodes that have a similarity score to the query that are above the cutoff are going to be included.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=244)** That's all there is to it.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=245)** So the argument you need to really know about is just the similarity cutoff argument.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=249)** So it's the minimum similarity score required for a node to be included in the output.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=254)** So under the hood, what's happening?
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=256)** So we first check if the similarity cutoff is set, the default value is none.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=263)** We're then going to iterate over each node in the input list, and then for each one of the nodes, we check if the node similarity score is above the threshold.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=271)** If a similarity score is none or below the cutoff, then the node will not be included in the output.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=278)** If the similarity score is above the cutoff or if the similarity cutoff is not set, then the node is included in the output.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=285)** So the method is going to return a filtered list of node with score objects.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=290)** So that's how that works.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=291)** And to instantiate that, it looks like this.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=295)** So from llama_index.core.postprocessor, we get a similarity postprocessor, and then we can instantiate it like so.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=304)** The next node postprocessor I want to talk to you about is the keyword node postprocessor.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=309)** This will filter nodes based on the presence or absence of specific keywords.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=313)** So you provide a list of required keywords or a list of keywords to exclude.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=319)** And nodes that contain all the required keywords, and none of the excluded keywords are going to be included in the output list.
>
> **[5:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=325)** And so there is a few arguments you need to know.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=328)** The two most important ones are the required keywords and the exclude keywords.
>
> **[5:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=331)** Lang is also an argument, it's just the language of the text and nodes.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=335)** This defaults to English, it's not a required argument, but just to know that it's there.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=340)** Under the hood, what's happening is that we're iterating over each node with score object in the input list.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=346)** Then for each node we're retrieving the nodes content and processing it using a language model from the spacy library.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=353)** So if you look at the source code for the keyword node postprocessor, you'll see that it makes use of spacy's PhraseMatcher.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=361)** And this is what's being used under the hood to do this inclusion or exclusion.
>
> **[6:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=367)** If the required keywords are provided and the nodes content does not match any of the required keywords, we skip that node.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=374)** If the exclude keywords are provided and the nodes content matches the exclude keywords, we skip that node.
>
> **[6:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=382)** And then if a node is passing both the required and exclude keyword checks, it's going to be included in our output list.
>
> **[6:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=389)** We get back out a node with score object, and we pass that to our language model.
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=395)** So see this in action.
>
> **[6:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=396)** So I know I said that I wasn't going to show you it in action, but I'll show you so that you can build on this.
>
> **[6:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=402)** So let's go ahead and instantiate a keyword node postprocessor.
>
> **[6:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=406)** You see we have the required keywords, the exclude keywords, we instantiate the keyword postprocessor, then I'm going to go ahead and instantiate a query engine.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=416)** So we've seen this before, we're using our query engine abstraction, and I'm passing the postprocessor here, also making sure that I'm returning source nodes.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=425)** We'll go ahead and construct a query chain and a query pipeline, but first I want to go ahead and just show you how this thing works if we just use the query engine because I want you to see what these node with score objects look like.
>
> **[7:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=438)** So let's go ahead and see that.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=441)** All right, so we see that, we get these node with score objects.
>
> **[7:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=444)** So we can go ahead and take a look at just one of them.
>
> **[7:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=449)** And you can see we have a text node, it's got the similarity score, and then you can see the content of this source node, if you'd like.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=457)** There you have it.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=458)** Of course, you can also just use this in the pipeline like we have seen numerous times by this point.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=465)** And we'll go ahead and get a response.
>
> **[7:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=468)** There we go.
>
> **[7:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=472)** Next I'm going to talk about the metadata replacement postprocessor.
>
> **[7:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=475)** We actually saw this in action previously, but I'll speak more about it in detail here.
>
> **[8:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=481)** So remember that this allows you to replace the content of each node in the input list with a specific metadata key value instead of just the original content.
>
> **[8:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=491)** As I discussed previously, this is most useful when it's combined with the SentenceWindowNodeParser.
>
> **[8:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=497)** So under the hood, what's happening is we're iterating over each one of the node with score objects.
>
> **[8:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=502)** For each node, we're going to retrieve the value of the specified target metadata key.
>
> **[8:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=508)** If that metadata key exists, its value is going to be used to replace the nodes content.
>
> **[8:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=513)** If the metadata key does not exist, the nodes content is going to be unchanged.
>
> **[8:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=518)** Like all of the node postprocessors, this will return a NodeWithScore object.
>
> **[8:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=524)** Instantiating this is straightforward, it's the same abstraction for all the other node postprocessors.
>
> **[8:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=529)** We import it, instantiate it, and pass in the required arguments.
>
> **[8:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=534)** Next is the LongContextReorder node postprocessor.
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=538)** So there's a study that came out here, "Lost in the Middle: How Language Models Use Long Contexts."
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=543)** This talked about this idea of lost in the middle, or kind of like try to find a needle in a haystack.
>
> **[9:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=548)** It turns out the language models struggle to get the relevant to details, if they're located in the middle of a really long context.
>
> **[9:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=557)** So what they found was that the best performance is achieved when the important information is either at the beginning or end of the input, even if that model is specifically designed to have a really long context.
>
> **[9:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=572)** And so this is what the long context reordering postprocessor does.
>
> **[9:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=575)** We're going to reorder the node based on their relevance scores, and this is helpful where there's a large top-k that you need to grab.
>
> **[9:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=583)** So we're going to place the nodes with the highest scores at the beginning and end of the list, so that we're improving the model's ability to access important information.
>
> **[9:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=593)** You actually don't need to pass any arguments for this postprocessor, but let's just talk about what's going on under the hood.
>
> **[9:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=598)** So what it's doing is, we're sorting the input nodes based on the relevant scores in descending order, so we have the highest first.
>
> **[10:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=606)** If a node score is none, we're just going to treat it as a zero, then we're going to iterate over the sorted list, we'll check if the index is even or odd.
>
> **[10:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=615)** If the index is even, we're going to insert it at the beginning of the reordered_nodes list using a insert method with an index of zero.
>
> **[10:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=624)** That way the nodes with an even index are placed at the beginning of the list.
>
> **[10:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=628)** If the index is odd, the node is appended to the reordered_nodes list.
>
> **[10:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=633)** Finally, we're going to get back a reordered_nodes list that has the nodes in the new order.
>
> **[10:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=638)** If you're interested, of course, I've linked to the source code.
>
> **[10:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=641)** You should always read the source code if you are not sure what is happening under the hood, and you can see exactly what is happening here.
>
> **[10:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=648)** As you can see, it is not that long or hard of a function to reason through, but it is powerful.
>
> **[10:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=654)** It's a powerful technique.
>
> **[10:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=657)** Of course, you will instantiate this the same way.
>
> **[11:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=660)** Beautiful thing about these orchestration frameworks, the APIs are pretty much the same for all the abstractions, so we import the postprocessor and then instantiate it.
>
> **[11:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=672)** Next I'm going to talk about the SentenceEmbeddingOptimizer.
>
> **[11:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=675)** So this improves the text content of the node based on the relevance to the query.
>
> **[11:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=679)** So we're using an embedding-based similarity score to select the most relevant sentences and shorten the input text.
>
> **[11:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=686)** So what the optimizer is doing is removing sentences that are not related to the query using embeddings.
>
> **[11:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=692)** We have a percentile cutoff to determine the top percentage of the relevant sentences, but alternatively, the threshold cutoff can be specified to select which sentences to keep based on a raw similarity cutoff.
>
> **[11:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=705)** And I've linked here to the source code that you can take a look at and read through if you want to see what's going on under the hood, but I'll briefly talk about the arguments you need to pass and kind of how it works.
>
> **[11:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=717)** So you need to pass it in embedding model.
>
> **[12:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=720)** As with everything in LlamaIndex, it defaults to OpenAI.
>
> **[12:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=723)** You pass a percentile cutoff for selecting the top sentences, so the number of sentences is calculated like so.
>
> **[12:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=730)** So you take an integer value of the total number of sentences times the percentile cutoff.
>
> **[12:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=735)** So if the percentile cutoff is set to 0.5, it means that the top 50% of sentences with the highest similarity score are going to be selected.
>
> **[12:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=745)** If you want to select a fixed percentage of the most relevant sentences, then you can use this percentile cutoff.
>
> **[12:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=750)** There's also the threshold cutoff, and this is a cutoff that is based on the similarity score.
>
> **[12:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=757)** So if the threshold cutoff is set to 0.7, then only sentences with a similarity score greater than 0.7 will be selected.
>
> **[12:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=765)** So this is what you would use if you want to select sentences that meet a minimum similarity score.
>
> **[12:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=771)** These two can be combined.
>
> **[12:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=772)** In fact, you can combine percentile cutoff and the threshold cutoff.
>
> **[12:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=776)** There's a tokenizer function argument that's going to split the text into sentences.
>
> **[13:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=781)** This uses the NLTK English tokenizer.
>
> **[13:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=783)** We've seen this before, the punkt sentence tokenizer from NLTK.
>
> **[13:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=789)** There's a couple of context_before and context_after arguments.
>
> **[13:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=793)** This is just the number of sentences to include before or after the relevant sentences.
>
> **[13:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=799)** Under the hood, we're retrieving the text content of each node, we'll split that into sentences using the tokenizer, we'll generate embeddings for the query and the sentences, calculate the similarity score between the query and the sentence, select the top sentences based on the percentile cutoff or the threshold cutoff, then we'll retrieve the context sentences before and after the selected sentence, join those together, and we'll have this now kind of optimized context, and we'll pass this to the language model to produce a response.
>
> **[13:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=831)** And of course, to instantiate this, it's the same as what we've seen so far.
>
> **[13:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=835)** So we import the SentenceEmbeddingOptimizer, and then instantiate it with the arguments that you want to give it.
>
> **[14:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=843)** Note that we have seen a lot of node postprocessors, but you can't pass it directly to the as_retriever method of a index.
>
> **[14:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=852)** So node postprocessors are configured and used within the context of a query engine rather than directly with the retriever.
>
> **[14:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=859)** So the retriever is responsible for fetching the most relevant nodes based on the query.
>
> **[14:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=864)** And so the node postprocessors are going to be applied with the query engine to then refine, filter, or augment the nodes before final response is synthesized.
>
> **[14:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=875)** So you've seen in previous videos that we had to sometimes instantiate a retriever object, and then pass that retriever object to the query engine.
>
> **[14:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=885)** It's the same thing that you would do here, right?
>
> **[14:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=887)** So let's say, we instantiate a retriever, and just make it like a vector index retriever.
>
> **[14:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=892)** We'll instantiate our postprocessor, and then when we create our query engine, we'd have to create it manually.
>
> **[14:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=897)** So we create the retriever query engine, or whatever query engine it is that you're using, pass it through retriever, pass it through postprocessor, and then we can do our query.
>
> **[15:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=907)** So there you have it, you have another tool in your RAG tool belt.
>
> **[15:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=912)** Node postprocessing is a important technique to use.
>
> **[15:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=915)** It'll definitely improve the results of your RAG pipeline because at the end of the day what you're doing is you're making sure that you're giving the best context to a language model.
>
> **[15:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/node-post-processing?u=76281980&t=927)** I'll see you in the next video where we're going to talk a little bit about re-ranking, another postprocessing technique.

> [!info]- Semantic Content
>
> **CLI Commands:** node (46), find (1), make (1)
> **Code Keywords:** pass (14), let (8), this. (3), function (2), continue (1)
> **Code Identifiers:** reordered_nodes (3), as_retriever (2), as_query_engine (1), create_query_engine (1), llama_index (1)
> **Env Vars:** rag (3), api (2), nltk (2)
> **Exercise Files:** source code (6), boilerplate (1)
> **Definitions:** is a  (4), means that (1)
> **Versions:** 0.7 (2), 0.5 (1)
> **Warnings:** note that (2), keep in mind (1)

#### Re-ranking
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=0)** - [Instructor] Before jumping into re-ranking, I want to quickly recap the order of operations within LlamaIndex.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=9)** First is the data ingestion where we're pulling data from various sources.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=13)** It could be from API, PDF, SQL database, text files, so on and so forth.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=18)** Next is the indexing of the data.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=21)** So we're ingesting data so that we can easily pass it to a language model.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=28)** This is followed by retrieval.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=29)** We're retrieving information based on the question or the prompt, which is the first step in the retrieval augmented generation process.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=39)** Then comes re-ranking.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=41)** So we're reordering the retrieved documents for relevance, which is then followed by post-processing, where we're applying transformations or filters to refine the nodes before the final response.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=53)** And then finally, response generation.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=57)** So this is important to keep in mind when you are building out your query engines, that it's first re-ranking and then post-processing.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=66)** What is re-ranking?
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=67)** Well, re-ranking is just reordering the retrieved nodes based on some criteria.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=72)** This criteria could be relevance, time-based, or some other factor.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=76)** And what we're trying to do is bring the most relevant nodes to the top.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=81)** This is different from post-processing because post-processing happens after ranking.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=86)** And what we're doing is we're transforming and filtering the nodes for more further refinement.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=92)** The main purpose of re-ranking is to reorder the nodes, whereas again, post-processing is to transform or filter the nodes.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=101)** The most popular re-ranking technique is Cohere Rerank, but there are other re-ranking methods, and I'll talk about them a little bit at the end of this lesson.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=112)** And yes, you guessed it, they all have the same common API, which, as you've heard me say before, is the beautiful thing about working with these orchestration frameworks.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=121)** The abstractions all have a common API.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=125)** So let's go ahead and talk about Cohere Rerank.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=128)** When it comes to re-ranking documents to be sent to the LLM, there's actually specialized models that do this.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=135)** And so the Cohere Rerank model is a model that is used for re-ranking, and it's by far the most popular method in LlamaIndex and the LlamaIndex ecosystem and most popular method that practitioners use.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=150)** There's some arguments that you need to keep in mind if you want to use Cohere Rerank.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=154)** One is top_n, which is just the top number of nodes to return.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=157)** This defaults to two.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=159)** There's also model, which is the name of the Cohere model.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=162)** This defaults to rerank-english-v2, but you can use the newer one, which is rerank-english-v3.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=168)** And, of course, you need to pass your API key.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=171)** Under the hood, what's happening is we're extracting text from each node.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=175)** Then we're using Cohere's API for re-ranking based on the relevance to the query.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=181)** The API will then return a re-ranked results with the relevance scores.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=186)** And so we get a list of NodeWithScore objects from the re-rank results.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=192)** And this is what is sent to the LLM for response synthesis.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=197)** And, of course, we use it in the same way as we use most of the other post processors.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=203)** We import it and instantiate it with whatever arguments we need to.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=208)** Once we have instantiated the re-ranker, we, of course, pass it as an argument to our query engine to the post processor argument.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=219)** We'll go ahead and build a chain and build the pipeline.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=223)** Of course, I'll show you exactly how it works using the query engine directly.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=229)** You see here the response is the same as we're used to seeing, and we have the source nodes here, which are NodeWithScore objects.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=237)** And, of course, we can go ahead and just use it as part of our query pipeline.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=242)** There are two other alternatives to Cohere Rerank.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=246)** One of them is the Colbert Rerank.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=248)** The other is the Flag Embeddings Rerank.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=251)** Both have the same usage pattern as I've shown you above.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=254)** If you're interested in the nitty gritty details, I've linked to the documentation here that will talk about that for each one of those.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/re-ranking?u=76281980&t=264)** In the next few videos, we are going to talk about some other techniques for Advanced RAG, so I'll see you there.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), llm (2), pdf (1), sql (1), rag (1)
> **Code Keywords:** pass (3), finally, (1), let (1), this. (1), return. (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### FLARE
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=0)** - [Instructor] Let's continue on our journey with advanced RAG by talking about FLARE, Forward-Looking Active REtrieval Augmented Generation.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=10)** Most RAG methods only retrieve information once based on the initial user query.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=16)** This is limiting for generating longer outputs where we need to continually gather relevant information throughout the generation process.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=25)** As you know, large language models have a tendency to hallucinate and generate factually incorrect information, especially when it comes to longer outputs.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=34)** And so there's a need for the language model to kind of actively decide when and what to retrieve at each step of the generation process, rather than just retrieving once upfront.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=46)** This is where active retrieval augmented generation comes into play.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=51)** This was introduced in a paper from, I believe, 2023, as it states here, on archive called Active Retrieval Augmented Generation.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=61)** And this approach is promising because it's looking to enhance the factual accuracy of a LLM by retrieving relevant information from the external knowledge source throughout the generation process.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=75)** As we mentioned before, there's several limitations with the single retrieval approaches.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=79)** LLMs will often hallucinate, they'll generate factually incorrect output, and these existing RAG techniques mostly just retrieve information once based on the user query or the input in the prompt.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=92)** Single retrieval ends up being insufficient when we want long contexts or when continually gathering information is essential.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=102)** And this is where Forward-Looking Active REtrieval Augmented generation, or FLARE comes in.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=107)** So this gives a generalized framework for active retrieval throughout the generation process.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=112)** So the model is actually deciding when and what to retrieve.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=116)** So it's predicting the upcoming sentence and is trying to anticipate the future sentences.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=122)** So this predicted sentence is used as a query to retrieve relevant documents.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=127)** If the predicted sentence contains a low confidence token, then FLARE is going to regenerate it using the retrieve documents, and the process continues until the entire response is generated.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=139)** And this is a pretty interesting technique to use a predicted upcoming sentence to anticipate the feature context.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=147)** And this is then used as a query to retrieve relevant documents.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=151)** So it helps keep the generated text grounded in actual factual information.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=157)** So the way this actually mitigates against hallucinations is that we're regenerating sentences that contain low confidence tokens by leveraging the newly retrieved documents.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=166)** So this way, we're enabling language model to kind of actively retrieve relevant information as needed during the multi-step generation process.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=174)** Again, this is going to lead to more accurate and factual long form outputs as compared to single standard shot RAG.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=181)** I encourage you to take a look at the paper here.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=184)** It's a good paper, and it'll break down exactly kind of step by step how things are working.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=188)** If you want more of a illustrative example, you'll see here there's as usual, there's decent amount of math, but nothing too crazy.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=196)** So it's really an interesting paper.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=198)** Highly recommend reading it, checking it out, worth the read.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=202)** But let's go ahead and see this in action.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=203)** First, I want to tell you about the two types of a FLARE= that are available to you in LlamaIndex.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=208)** There's FLAREinstruct, which is going to prompt the language model to generate retrieval queries when necessary using retrieval, encouraging instructions.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=217)** Then there's FLAREdirect, which is going to directly use the language models generated sentence as the retrieval query if it contains any uncertain tokens.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=229)** So FLARE uses something called confidence-based active retrieval.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=233)** So it's triggering document retrieval only when the language model lacks necessary knowledge.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=239)** This confidence based query formulation includes using a masked sentence as an implicit query and then generating questions as a explicit query.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=251)** So let's talk a little bit about FLAREinstruct query engine.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=254)** So this is combining retrieval and generation to generate responses that are based on the FLARE approach.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=260)** And we're again, leveraging a retrieval encouraging instruction.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=264)** There's several arguments you need to know for this query engine.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=267)** The FLAREinstruct query engine.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=269)** They're all kind of listed here.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=270)** They're the standard ones that we have seen a lot.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=273)** For example, query engine LLM, and then you can also change the prompt.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=277)** There's also something called the lookahead_answer_inserter which is a component for inserting look ahead answers.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=284)** This is optional.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=285)** There's the done output parser, which is the parser for determining if the response is complete.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=291)** You also have the query task output parser.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=293)** This parser is for extracting query tasks from the response.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=297)** You've got max iterations.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=299)** This is the maximum number of iterations for generating the response as well as max look ahead query tasks.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=305)** So what's happening under the hood?
>
> **[5:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=306)** How does FLAREinstruct query engine work?
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=309)** Under the hood, the FLAREinstruct query engine breaks down the query answering process into smaller steps.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=317)** So we receive the user's query, so take in the user's initial query.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=321)** Then from that, we are going to generate a look ahead response, which is a tentative response with some placeholders.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=327)** We're going to identify any query tasks, so just determine subqueries that are needed to complete the response.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=334)** We'll retrieve information, so we'll use a underlying engine to fetch relevant data.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=340)** Then we'll incorporate the retrieved content.
>
> **[5:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=343)** We're going to replace the placeholders with the fetched information from the vector database, then refine the response iteratively.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=352)** And so we iterate on this until the response is complete or the maximum number of iterations have been reached.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=360)** As we'll see here, FLARE is enhancing the language model by just dynamically retrieving relevant information during text generation.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=368)** So that way, we're going to end up with a more accurate and comprehensive response.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=371)** So we'll go ahead and instantiate our FLAREinstruct query engine.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=376)** Of course, we import this from llama_index.core.query_engine and we'll go ahead and instantiate the query engine and then instantiate the FLARE query engine.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=387)** Next, I wanted to take a quick look at the prompts that are part of the FLARE query engine.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=393)** And you'll see here there is a number of prompts and they're really, really long prompts, really involved and in depth prompts.
>
> **[6:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=401)** If you look at the original paper that we'd pulled up here and scroll towards the bottom here, you'll see there's a number of different prompts that they use in the paper for different scenarios.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=414)** And so LlamaIndex is just implementing some of those prompts from the paper.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=419)** So you'll see here there are a ton of prompts, which means that we are going to have many calls to the language model, but we can go ahead and set up our query pipeline.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=428)** Of course, we need the input component.
>
> **[7:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=430)** We need to create the chain, finally create the pipeline.
>
> **[7:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=433)** And then from there, we can go ahead and run the pipeline.
>
> **[7:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=436)** And you can see here it's quite different from what we're used to seeing in our output.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=441)** You can see here, there's a look ahead response.
>
> **[7:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=444)** Say they're updating the look ahead response, they got a current response and so on and so forth.
>
> **[7:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=448)** And this goes on for quite some time, as you can see.
>
> **[7:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=451)** So this does result in a bunch of calls to a language model, but we end up with a interesting answer afterwards.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=460)** So you can see the response here and check it out if you'd like.
>
> **[7:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=464)** And that's it.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=465)** This is Forward-Looking Active Retrieval Augmented Generation.
>
> **[7:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=469)** So to sum it up, what it's doing is providing us with a generalized framework for active retrieval throughout the generation process.
>
> **[7:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=477)** So you can see here the model is actively deciding when and what to retrieve.
>
> **[8:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=481)** We're using a look ahead response, which is a predicted upcoming sentence so that we can anticipate what's going to happen in the future, and then we regenerate sentences that have low confidence tokens by leveraging this newly retrieved document.
>
> **[8:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=495)** Although there is a lot going on under the hood, as we can see here, I encourage you to look at the source code and take a look at how this is working.
>
> **[8:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=505)** It's important to always look at the source code because these layers and layers of abstraction can make it seem like magic, but really, under the hood, there's just a lot of output parsing and pedantic that is being used as you can see here.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=519)** In the next lesson, we are going to talk about prompt compression.
>
> **[8:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/flare?u=76281980&t=522)** So I'll see you there.

> [!info]- Semantic Content
>
> **Env Vars:** flare (9), rag (4), llm (2)
> **Definitions:** is a  (6)
> **Code Keywords:** let (3), continue (1), from, (1)
> **Code Identifiers:** lookahead_answer_inserter (1), llama_index (1), query_engine (1)
> **Cross-References:** we mentioned (1), in the next (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### Prompt compression
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=0)** - [Instructor] Suppose you're interacting with a RAG system or a AI system, or a Large Language Model in general, and you're asking it complex questions that's requiring it to draw upon a large amount of background information.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=13)** Typically, this would require sending a very long prompt to the language model.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=18)** This of course, can be slow, it could be expensive, and you might even exceed the model's context window.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=25)** This is where prompt compression comes in.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=28)** And what we're going to talk about in this lesson is a technique called LongLLMLingua.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=34)** This uses a prompt compression method to drastically shorten the prompt while retaining the most relevant information that's needed to answer the question.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=44)** That way, we'll have faster and more cost effective generation while still getting high quality answers.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=53)** The key components of this technique of LongLLMLingua is question-aware, coarse-grained prompt compression, which means we're evaluating the relevance between the context and the question based on some measure called perplexity.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=69)** We're also using a question-aware, fine-grained prompt compression, which uses contrastive perplexity to extract key tokens that are relevant to the question.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=80)** And then, we also use something called adaptive granular control, which is dynamically allocating different compression ratios to different documents based on the rank information.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=93)** This will allow us to recover the original prompt content by mapping the response sequence in the compressed prompt to the original prompt.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=102)** So, there's been a number of experiments done using LongLLMLingua.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=108)** It's been shown to improve performance by 21.4 points at a 4x compression rate in RAG scenarios.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=118)** And it's been shown to outperform retrieval-based and compression-based methods in long context benchmarks.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=124)** For example, like LongBench and ZeroSCROLLS.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=128)** So, let's talk about what's going on under the hood with the LongLLMLinguaPostprocessor.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=133)** Of course, I've linked to the source code.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=135)** If you have any questions or wondering how this works under the hood in great detail, look at the source code.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=142)** But I'll tell you about the arguments that you need to be aware of.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=144)** One is the model name.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=146)** So, this post processor optimizes nodes by compressing the context using this methodology that we talked about.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=153)** It's called the LongLLMLingua method, and it's shortening the node text based on the query, and we're trying to improve the efficiency and reduce computational costs.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=163)** And so, some arguments you need to be aware of are one, the model name.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=167)** So, this is the pre-trained language model for compression.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=171)** By default, it uses a open source model from Hugging Face, specifically a version of Llama-2-7B that was released by NousResearch.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=182)** Now, we're not going to run this method here because we require a GPU.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=186)** But if you're running this in a Colab environment, or if you're running it in an environment where you have access to a GPU, you also need to use a device map.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=195)** There's additional model configurations that you need to pass as well.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=199)** There's a configuration for the OpenAI API key if you choose to use that.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=203)** There's Metadata mode that we have talked about before.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=207)** There's an instruction string, which is the instruction string for the context compression.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=212)** You've got a target token, so the number of tokens that you want to compress to.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=217)** A ranking method that's going to be used to rank for compression.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=221)** This is using the default of LongLLMLingua.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=225)** And then, some additional keyword arguments for the compression.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=229)** Under the hood, what it's doing is extracting the content of each node based on the metadata mode.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=235)** It's splitting the context text by new lines.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=239)** It's calling a compressed prompt method, and then passing the context text, the instruction, the query, target token count, the ranking method, and additional keyword arguments to this method.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=251)** Then we're separating text out, sort of splitting the compressed prompt into separate compressed context texts.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=258)** Then, we're going to remove the question and the instruction.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=261)** And then finally, we'll use the remaining compressed text to create a new optimized node.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=267)** Note that of the two methods we talked about, the question-aware, fine-grained compression is not yet implemented in LlamaIndex.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=276)** Compression at the current moment is primarily based on coarse-grained approach with the specified ranking method that you pass in.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=285)** This is of course, a post processor, so we'll go ahead and instantiate a query engine, a response synthesizer, as well as the actual compressor itself.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=295)** We'll instantiate the node post processor, passing in all the arguments that you want to set.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=301)** And of course, it has the same usage pattern as what we've seen over the last couple of videos, so they should look very familiar to you.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=308)** So, go ahead and just instantiate your post processor.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=311)** You can pass it to your query engine and then get your response.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=315)** And of course, you've seen how we can use this in a pipeline as well.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=319)** So to wrap it up, this LongLLMLingua is a very powerful technique that will help improve the efficiency and performance of your RAG system, especially when you have long context or complex queries.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=330)** So, we're intelligently compressing the prompts while preserving key information.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=335)** That way we get faster, cheaper generation while maintaining high quality responses.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=340)** I encourage you to check out the paper LLMLingua, as well as dive into the source code.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=345)** That way you'll be able to fully grasp the details and think about how you might want to apply this in your own work.
>
> **[5:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/prompt-compression?u=76281980&t=350)** I'll see you in the next video where we are going to talk about self-correcting RAG.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), require (2), let (1), default, (1), finally, (1)
> **Env Vars:** rag (4), gpu (2), api (1)
> **CLI Commands:** node (4)
> **Cross-References:** we talked about (2), in the next (1)
> **Exercise Files:** source code (3)
> **Warnings:** be aware (2), note that (1)
> **Definitions:** is a  (2)
> **Versions:** 21.4 (1)

#### Self-correcting
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=0)** - [Instructor] Naive rag methods and even some of the advanced ones that we've seen throughout this course do present a few issues.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=7)** One is that they tend to retrieve information for any query, even if the information that it retrieves is irrelevant or not necessary.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=19)** Not only that, when it retrieves that context, the system is not even actually checking to see if what we retrieved is relevant to the user's query.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=27)** It's just haphazardly injecting it into the context.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=32)** And finally, there's no mechanism in place to make sure that the response that the language model is generating is actually accurate and relevant to the user's query.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=43)** So we need a way to consistently get the best responses and best answers from our query engine and by extension, our language model.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=54)** And this is where we look to self-correcting rag.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=58)** Specifically, we are going to discuss three types of self-correcting techniques in this lesson.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=64)** One is the retry query engine where we are using an evaluator to improve the response from a base query engine.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=72)** Two is a retry source query engine.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=75)** Here we're going to modify the query source nodes by filtering the existing source nodes for the query based on the LLM node evaluation.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=84)** And finally, it's the retry guideline query engine.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=88)** This engine uses guidelines to direct the evaluator's behavior.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=93)** This can be customized with your own guidelines via prompts, and the engine is going to evaluate the response against those guidelines, and if the response doesn't meet the guideline, it's going to transform the query and retry.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=106)** So let's go ahead and get into this in detail.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=108)** I'll start with the retry query engine.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=111)** So the whole purpose of this is to try to enhance the query response by retrying queries that fail to meet some evaluation criteria.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=118)** The hope here is that the quality of answers improves iteratively with each response.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=125)** The main purpose of this query engine is just to automatically retry queries to improve the accuracy and comprehensiveness of the response.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=133)** It evaluates the initial response and then retries with modifications if it doesn't meet some predefined criteria.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=140)** And we'll see how this happens in just a moment.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=144)** It's a ton of prompts happening under the hood.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=147)** The arguments you need to know about for this query engine, of course, we need to first pass in a actual query engine to this.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=155)** So this is going to be a base query engine.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=157)** So this is a query engine that uses another query engine.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=162)** We also need to instantiate an evaluator that is going to evaluate the response quality using this evaluate response method under the hood.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=171)** Max retries is the number of retry attempts to undertake, and we also need a callback manager, which will manage callbacks during execution.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=181)** Of course if you're curious about how all of this works under the hood, I've linked to the source code.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=187)** And like I've said several times before, the best way to figure out how these abstractions work is to read the source code, go through it and kind of demystify it for yourself.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=198)** Don't let it just be magic.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=202)** So what is happening under the hood?
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=204)** First, we get a query.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=206)** There is a initial query that we receive that gets sent to the base query engine.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=212)** This will generate a response, and then we have an evaluator that's going to check and see does this response meet some criteria?
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=219)** If the response does meet the criteria, great, we can return it.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=223)** If it doesn't, we're going to transform the query based on some feedback.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=228)** And then we retry this.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=229)** So we're going to create a new instance with the same query_engine, evaluator, and we're going to reduce the number of max_retries.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=237)** And then we repeat this process.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=239)** We repeat this until we get a satisfactory response or until max_retries is reached.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=246)** So under the hood here, we instantiate a base_query_engine, then we instantiate a relevancy evaluator, and this is coming from llama_index.core.evaluation.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=261)** And then finally, we can instantiate the retry_query_engine.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=264)** And the retry_query_engine takes us as an argument, the base_query_engine, as well as the query_response_evaluator.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=271)** We'll go ahead and instantiate a query_chain and the query_pipeline.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=275)** And now let's take a look at what this thing is actually doing.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=277)** So again, under the hood, a bunch of calls and prompts to a language model to help iteratively improve on the response.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=286)** So we've seen this response_synthesizer before, but what's unique here is not the response synthesizers, but the evaluation template.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=294)** So you can see here the evaluator has two templates that it uses.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=298)** One is to evaluate the response and another one to actually refine that.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=304)** So there's two prompts that are being leveraged under the hood here.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=309)** So again, you can always look at the source code and you can see how these prompts are being used, how they're being parsed and passed.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=319)** With the prompts in place, we can run the query engine.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=322)** So here I've ran the query engine, and you can see we get a response object, which also has the source nodes as well.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=330)** And of course, we can run this as a query_pipeline too.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=337)** Next up is the RetrySourceQueryEngine.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=340)** So this query engine retries a query with a subset of source nodes if the initial response fails evaluation.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=348)** So again, we are improving response quality by selectively using source nodes that pass evaluation.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=355)** Then we create a new index with those nodes and retry the query with the refined index.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=362)** The arguments you need to know here are the query_engine, so this is going to be the base query engine for executing queries, the evaluator, and the number of retries.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=372)** What's happening under the hood is first there is a initial query to the base query engine.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=377)** Then the evaluator is going to look at the responses.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=381)** If the response passes the evaluation, then we return that response.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=385)** If it fails, we evaluate each source node that is used in the response, and then we go through some refinement process.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=393)** So we create a new index with the source nodes that pass evaluation.
>
> **[6:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=398)** We create a new instance of the RetrieverQueryEngine.
>
> **[6:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=401)** With that new index, we also create a new instance of the RetrySourceQueryEngine with the RetrieverQueryEngine and a reduced number of maximum tries.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=413)** And then we retry with the RetrySourceQueryEngine.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=417)** We repeat this until we get a good response or a satisfactory response.
>
> **[7:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=421)** And of course, if you're curious about the details, you have the source code here that you can look into.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=431)** So here we follow a very familiar pattern.
>
> **[7:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=435)** We instantiate the retry_source_query_engine.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=437)** Of course, we pass the base_query_engine.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=439)** It's the same query engine we had defined above.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=443)** And then we can take a look at the prompts for this query_engine.
>
> **[7:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=448)** And you can see here, we got the familiar response synthesizers.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=452)** But what we're interested again is the evaluator and the evaluator refine.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=457)** And again, feel free to look at the source code for how this is working under the hood.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=465)** We'll go ahead and create a query_pipeline, and then you can run the query.
>
> **[7:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=472)** Next up is the RetryGuidelineQueryEngine.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=476)** So this will evaluate responses against some predefined guideline.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=480)** Then it's going to transform the query based on the feedback it gets from the language model and then retry until a satisfactory response is achieved or the maximum number of retries is reached.
>
> **[8:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=491)** The whole purpose of this is to just improve response quality through this iterative evaluation and query transformation.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=498)** So we evaluate the initial response, modify the query if necessary, and then retry again.
>
> **[8:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=505)** So here are the arguments you need to know about.
>
> **[8:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=506)** Of course you know what a query_engine is.
>
> **[8:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=508)** The main differences here are the guideline_evaluator, the resynthesize_query.
>
> **[8:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=513)** So the guideline_evaluator will just evaluate the response against some predefined guideline.
>
> **[8:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=517)** Then this resynthesize_query is actually a flag that's going to indicate if the query should be resynthesize based on some feedback.
>
> **[8:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=524)** We also have this query_transformer here, which is going to transform the query based on some feedback.
>
> **[8:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=530)** And of course, max_retries is how many times are we going to retry this.
>
> **[8:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=536)** Under the hood, what's happening?
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=538)** Again, we start with an initial query.
>
> **[9:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=540)** We use the base query engine to get a response.
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=543)** If the max_retries is zero or less, we just return that response.
>
> **[9:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=549)** If the max_retries is greater than one, we're going to evaluate the response using a guideline evaluator.
>
> **[9:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=556)** We're going to check and see does it pass or fail this guideline evaluator?
>
> **[9:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=560)** If it passes, great, let's go ahead and give that response to the user.
>
> **[9:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=563)** If it fails, then again, we go through this iterative loop where we create a new RetryGuidelineQueryEngine with the same settings, but we're reducing the max_retries.
>
> **[9:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=574)** Then there's a transformation that happens that's going to modify the original query based on the feedback we get from the evaluator.
>
> **[9:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=581)** And then this transform query, of course, gets passed to the RetryGuidelineQueryEngine.
>
> **[9:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=585)** And we'll repeat this process until we get either a satisfactory response or we reach the number of maximum retries.
>
> **[9:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=592)** All right, so let's go ahead now and see this all in action.
>
> **[9:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=595)** First, we instantiate the guideline evaluator.
>
> **[9:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=598)** The guideline evaluator is going to take in some default guidelines.
>
> **[10:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=601)** And to that we're just going to add a couple of other guidelines.
>
> **[10:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=604)** What are the default guidelines?
>
> **[10:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=606)** Simple.
>
> **[10:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=607)** Just the response should fully answer the query, should not be vague and should be specific or use some number or statistics when possible.
>
> **[10:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=615)** And so to that, we're also saying: don't make the response too long and then summarize it when possible.
>
> **[10:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=622)** So here we have a query.
>
> **[10:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/self-correcting?u=76281980&t=624)** So to see this in action,

> [!info]- Semantic Content
>
> **Code Identifiers:** max_retries (6), query_engine (4), base_query_engine (3), query_pipeline (3), retry_query_engine (2)
> **Code Keywords:** let (5), pass (5), finally, (3), this. (3), self (2)
> **Exercise Files:** source code (5), template (1)
> **CLI Commands:** make (2), node (2)
> **Definitions:** is a  (4)
> **Env Vars:** llm (1)
> **Speakers:** - [instructor] (1)


### 7. Modular RAG

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Hybrid retrieval
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=0)** - [Instructor] We are going to kick off our discussion of the modular RAG paradigm by discussing hybrid retrievers.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=9)** Arguably, hybrid retrievers probably should fit in the previous section where we were talking about post-retrieval techniques, but I'm including it here because I feel like it doesn't really fit in pre-retrieval or post-retrieval as it fits more in the at-retrieval time.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=27)** So let's go ahead and start by installing the BM25 retriever.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=32)** Do our necessary imports.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=34)** Note that we're using Quadrant Cloud for this and I'll explain why in just a second.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=39)** We'll set up our LLM and our embedding model.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=42)** We'll create our document store, but we're doing something a little bit different here.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=46)** We're actually instantiating the document store directly as well, so we're loading it from disc, bringing it into a Python variable, then with this Python variable that holds all the documents that we've brought in, we're creating a LlamaIndex simple document store object.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=64)** And now we'll go ahead and create our Quadrant Vector Store, and note that for this, we're actually making use of the storage context.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=73)** So a hybrid retrieval system is combining a document store with the vector index so that's why we needed to define a document store above.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=81)** So the vector and the document store have complementary purposes.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=85)** So the vector index is great at retrieving documents based on similarity, semantic similarity using embeddings.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=93)** On the other hand, a document store can be used to get structured data by document like, you know, metadata like the author, date, so on and so forth.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=100)** Or you can just use it for simple text-based search.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=103)** So we're using a storage context here and we're setting the document store equal to the document store that we defined above.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=110)** Now we're going to ingest this into Quadrant, using both the document store as well as the vector store so this is a bit of a departure from what you've seen previously.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=123)** And what I've done here is I've foregone using the ingest abstraction and just use the vector store index directly.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=130)** Now let's go ahead and see this in action, but first I want to talk to you about vector store query modes.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=136)** So we've touched on this briefly throughout the course, but let's dig a little bit deeper.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=141)** There are several query modes that you can use.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=144)** We've been primarily using the default query mode, which is just performing strict vector search, so we're retrieving the most similar vectors based on the query vector, but there are several other query modes at our disposal.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=156)** One of them is the hybrid mode, and hybrid search is combining text-based search, traditional search with vector search.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=168)** When we use hybrid search, the vector index is going to find the subset of relevant documents based on the user's query, but then we can also query the document store based on text.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=182)** So now we kind of have two systems here, one that's matching in the vector index, and one that's using just text-based search.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=191)** There's also semantic hybrid.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=192)** This is similar to what we described above.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=195)** We have text search with vector embeddings, but we incorporate a semantic re-ranker to improve the relevance.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=203)** Before I talk to you about sparse search, I want to point out that throughout this entire course we have only been working with dense vectors.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=213)** Dense vectors are created with dense embedding models so we get this numerical representation of our chunk of text, which is represented as a long list of floating point numbers.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=223)** Dense vectors are great at capturing really rich semantic meanings across an entire piece of text.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=229)** A sparse vector is different.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=232)** The values in a sparse vector are mostly zeros, and that's why we call them sparse.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=237)** And this is good at capturing really specific keywords or similar details.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=243)** You can review the notes here if you're interested on how to use a sparse vector, but I've not used a sparse vector at all through the entirety of the course, and I will not use a sparse vector here either.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=254)** Another query mode you have is tech search.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=257)** This is just what it says.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=258)** Just looking for exact keyword matches.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=261)** Similarity Top K you are familiar with.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=263)** We've touched on this several times in the course.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=266)** And then hybrid Top K is just Top K results from hybrid search.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=270)** In order for you to use these different query modes, you actually just pass it as an argument to the as_retriever method of the index.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=279)** So what I'm going to do here is show you this in action.
>
> **[4:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=282)** We're going to define a query string.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=285)** This is a function.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=286)** This function is a take in our query string and our index and some keyword arguments.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=291)** We'll define the retriever engine by just using the as_retriever method of our index, and we'll pass in the keyword arguments.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=300)** We'll retrieve our documents by using the retrieve method of the retriever engine using our query.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=309)** We'll go ahead and just print the retrieve documents.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=312)** And this is just iterating through all the retrieve documents and printing out the score as well as the actual text.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=319)** Now, to use the different query modes, you're just passing them as arguments to the as_retriever method.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=326)** So I'm defining a dictionary here with all the different methods.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=330)** I'm going to iterate through that dictionary, pass each one of them to our function and you can see the results here.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=338)** And now this brings me to hybrid fusion retrieval.
>
> **[5:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=342)** At a high level, a hybrid search system works by one, creating a subquery.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=348)** That subquery is going to use vector search to find semantically similar documents, even if they don't contain the exact keywords in that query.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=359)** Then we have another subquery.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=361)** This will use full text search like BM25 to find documents that contain the query keywords.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=368)** Then we'll join the results of the two keywords, and we'll produce a final ranked result that will combine the vector search similarity scores and the full text search relevance scores.
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=383)** I've linked here to the BM25 retriever on Wikipedia.
>
> **[6:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=389)** This is a old technique.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=391)** BM standing for best matching.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=393)** It dates back to the 1970s and '80s.
>
> **[6:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=396)** It's been used in information retrieval for years.
>
> **[6:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=400)** You can look through the equations here if you'd like.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=403)** I'm not going to explain them to you.
>
> **[6:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=405)** They're pretty straightforward, and if you know enough about probability, you should be able to understand them.
>
> **[6:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=411)** Either way, you don't need to know the mathematics behind BM25 in order to make use of it so I'm not going to talk too much about that.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=418)** I also link to the implementation in LlamaIndex.
>
> **[7:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=422)** Note that we're making use of a tokenizer here that's going to remove stop words, which is a important thing to do so words like the, of, and, uh, so on, so forth.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=431)** You can take a look at the stop words by following the source code to where they're being retrieved from, in this case, the port stemmer.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=439)** If you're curious, of course, you can always look at the source code, take a look at how this is working under the hood.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=446)** A lot of the arguments here are things that you are familiar with, but if you're curious, of course, just look at the source code and you'll get more clarity on what's happening under the hood.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=458)** I want to point out some useful information to have as a RAG practitioner.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=463)** There's these index fusion modes that you can use.
>
> **[7:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=467)** We're setting the mode to reciprocal re-rank.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=470)** So reciprocal re-rank is going to merge its index with a BM25 base retriever.
>
> **[7:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=475)** This way we can understand both the semantic relationships, that is the meaningful connections between words and the keywords in the input queries.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=484)** We have other modes as well.
>
> **[8:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=486)** For example, relative score, distance space, simple, et cetera.
>
> **[8:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=491)** So I've detailed the different modes here.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=493)** If you're interested, by all means, click on the source code and read more about it.
>
> **[8:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=497)** You can also pause here and read this if you'd like.
>
> **[8:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=502)** Next, I want to talk to you about the reciprocal re-rank algorithm.
>
> **[8:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=506)** I've linked to the research paper that introduces this methodology here.
>
> **[8:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=510)** It's a short read, just a couple of pages long.
>
> **[8:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=514)** Not too much math, but again, like I said before, you don't need to understand the math behind the thing to use the thing effectively.
>
> **[8:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=521)** I'll go ahead and briefly describe this algorithm.
>
> **[8:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=524)** So imagine you've got a bunch of different search engines.
>
> **[8:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=527)** For example, Google, Bing, DuckDuckGo, whatever.
>
> **[8:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=530)** And each one of these is ranking the search results in a different way when you type in a query.
>
> **[8:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=537)** What reciprocal re-rank does is combine those rankings to get an even better overall ranking.
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=543)** So with each search result, the algorithm is going to look at its rank in each list.
>
> **[9:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=551)** It then will assign a score to the result based on the reciprocal of its rank.
>
> **[9:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=557)** So if the result is number one, then you know its score is going to be one over one, which is one.
>
> **[9:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=562)** If the result is number two, it'll be one over two, which is equal to 0.5.
>
> **[9:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=567)** If it's at three, it'll be one over three, so on and so forth.
>
> **[9:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=572)** We then add up these reciprocal rank scores for each result across the different search engines and then we re-rank all the results based on their total reciprocal rank scores.
>
> **[9:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=586)** And then the results with the highest total scores come up to the top, so there's a reordering.
>
> **[9:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=591)** So again, at a high level, it's three steps.
>
> **[9:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=594)** Calculate the rank, aggregate the scores, and then reorder.
>
> **[9:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=598)** This is essentially a way of combining the rankings from many different systems, so you give more weight to the results that rank highly in many of them.
>
> **[10:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=607)** Results that consistently show up near the top of different rankings are going to bubble up to the top of this combined reciprocal rank list.
>
> **[10:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=615)** And so the cool thing is that this simple method works really, really well in practice and will beat out more complex approaches.
>
> **[10:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=624)** Whenever possible, use a combination of full-text search and vector search with the reciprocal rank algorithm and you'll be just surprised at how efficient it is and how much better your results are going to be without having a ton of computation or a bunch of calls to a LLM.
>
> **[10:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=644)** It's a very, very powerful technique.
>
> **[10:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=646)** So to make use of it, we'll see it in the code here.
>
> **[10:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=650)** First, we instantiate a vector retriever.
>
> **[10:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=652)** We just use the as_retriever method from our vector store.
>
> **[10:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=656)** And then we need to now define a BM25 retriever.
>
> **[11:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=661)** And so for this, we instantiate this with our document store.
>
> **[11:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=665)** So now we have a retriever that does nothing but retrieves based on embeddings, and we have a retriever that retrieves only based on full text.
>
> **[11:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=674)** That's what BM25 does.
>
> **[11:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=677)** You can set a query generation prompt template if you'd like, you can use a custom one.
>
> **[11:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=683)** I'm just instantiating it here to show you how it's done.
>
> **[11:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=686)** You don't have to use it if you don't want to.
>
> **[11:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=688)** You can use the default one.
>
> **[11:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=691)** And so just to point it out here, what the actual default prompt is, you can go to the source code for the query fusion retriever and you can see the query generation prompt here.
>
> **[11:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=701)** Of course, you can always use the get prompts method of any retriever to get the prompts.
>
> **[11:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=706)** But now we'll go ahead and instantiate the query fusion retriever and so we pass it a list of retrievers.
>
> **[11:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=713)** So if we look at the code here, the source code, we can give it a list of retrievers.
>
> **[12:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=720)** So in this case, we're just passing two retrievers.
>
> **[12:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=722)** You can pass several retrievers if you wanted to to make this even more interesting and more complex, but to make use of hybrid search, all we need is the vector retriever with the full-text retriever.
>
> **[12:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=734)** You set a similarity Top K, the number of queries.
>
> **[12:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=737)** If you don't want to regenerate queries, then just set it to one.
>
> **[12:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=741)** You can also change the mode.
>
> **[12:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=742)** In this case, I'm using reciprocal re-rank using async and then verbose.
>
> **[12:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=747)** These are just parameters that you don't need to worry too much about.
>
> **[12:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=751)** We can get a node to score object by passing a query to the retriever.
>
> **[12:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=757)** You can see the queries that it generates, and then print out the actual nodes with the new score.
>
> **[12:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=766)** Of course, you can use this as well in a query engine with a query chain, so I've shown you how to do so here.
>
> **[12:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=773)** Of course, we need to add something here, right?
>
> **[12:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=776)** So we need to add the input component, so make sure you do that so let's go ahead and do that right now.
>
> **[13:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=783)** Make sure we import from the query pipeline the input component and instantiate that and be sure to put it into the chain.
>
> **[13:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=793)** And that way you can use your query pipeline as you normally would.
>
> **[13:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=797)** So this hybrid methodology is amazing.
>
> **[13:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=799)** It works really well.
>
> **[13:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=801)** You get full-text search that's going to quickly retrieve documents based on exact keyword matches.
>
> **[13:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=806)** Then you have the vector search that's going to find relevant documents that don't necessarily contain the keywords, but are semantically similar.
>
> **[13:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=813)** Then you combine these two and get a really comprehensive and accurate search result than either one of these things could have done by themselves.
>
> **[13:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=822)** This added re-ranking can be adjusted so that you can place more weight on full-text versus vector search, if you'd like, and you do that via the alpha parameter.
>
> **[13:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=833)** And the alpha parameter, I didn't pass it here, but you would just pass alpha equals to whatever value you want that's between zero and one.
>
> **[14:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=841)** And in the end, what you have is a combination of full-text search for keyword matching and vector search for semantic similarity.
>
> **[14:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=848)** You put these together, you got this hybrid system.
>
> **[14:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=850)** This hybrid system is really, really powerful.
>
> **[14:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=856)** I can't understate how powerful it is and how good of a technique it is.
>
> **[14:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=861)** It's probably one of the best techniques that you can use when building a RAG system, so I highly recommend making use of this.
>
> **[14:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/hybrid-retrieval?u=76281980&t=868)** So that's it for this lesson and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), let (4), function (3), case, (3), this, (2)
> **CLI Commands:** make (6), find (4), python (2), node (1)
> **Env Vars:** bm25 (7), rag (3), llm (2)
> **Exercise Files:** source code (6), template (1)
> **Definitions:** is a  (6)
> **Code Identifiers:** as_retriever (4)
> **Analogies:** for example (2), similar to (1), imagine (1)
> **Warnings:** note that (3)

#### Agentic RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=0)** - [Instructor] We're going to continue our discussion of modular RAG by talking about agents.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=7)** Let's go ahead and jump right into it.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=10)** So in LlamaIndex, a data agent is kind of like a knowledge worker that's automated and powered by a large language model, and this knowledge worker, if you would, can perform a wide variety of tasks over different types of data, different types of data sources and it can also make use of tools.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=30)** So one of the things that this agent can do is just handle data across various formats, whether that's structured, semi-structured, or completely unstructured.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=39)** There, you can use them for searching and retrieving information from these diverse data sources efficiently.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=48)** These data agents can also interact with external services, APIs, or functions that are able to process the responses from these and then store the information for later use.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=61)** So this gives the agent the ability to act in a dynamic environment.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=67)** How do they work?
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=68)** Well, we need a reasoning loop.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=69)** This is the core of the data agent's operation, so depending on the way you set up your agent, the reasoning loop will help kind of determine what tool to use, the sequence in which the tool should be used, and the parameters that you need to use the tool.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=82)** And so this reasoning loop enables the agent to make informed decisions.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=87)** There's also tools, and so data agents are initialized with a set of APIs or tools that they can interact with.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=94)** This could be anything from data retrieval, functions, or tools that call APIs or some more complex processing.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=103)** We'll go ahead and start with our typical imports.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=105)** We use a in-memory database with Qdrant.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=109)** We'll set up our LLM, set up our embedding model.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=112)** We'll bring in our documents.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=114)** We're going to make use of metadata in this lesson, so I'll manually attach some metadata.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=120)** We'll go ahead and create a document store, creating a document store because we're going to make use of hybrid retrieval.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=127)** Note that we are not doing BM25 retrieval, we're using hybrid retrieval in LlamaIndex.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=132)** If we were to use BM25 retrieval, you'd need to use a Qdrant Cloud instance.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=139)** Next, I'm going to add some metadata, but first I'll go ahead and instantiate some transformations.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=144)** I have the sentence_splitter, a qa_extractor, and a keyword_extractor.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=150)** We'll go ahead and chain these transformations together, so we will split our text into chunks.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=158)** For each chunk, we will come up with some questions that the chunk can answer, and then we'll also attach some keywords related to that chunk of text.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=168)** Go ahead and ingest this into the vector database and create a index over it.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=173)** Here is an example of the node with all of its metadata.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=179)** Next, what we're going to do is create a VectorStoreInfo object.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=183)** VectorStoreInfo object is going to be used by our agent, and it'll be used in such a way that the agent knows what is in our vector database so it'll know exactly what metadata is there and what that metadata is useful for.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=201)** I cannot understate the importance of having a good description for each one of these MetadataInfos because this description is what the language model will use to figure out which metadata it needs to answer a query.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=219)** Next, we'll go ahead and create a base Pydantic object.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=223)** This is just a schema.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=224)** As you'll see in a moment, we're going to be using function tools and OpenAI function tools and this is just a way for us to handle the output from those APIs.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=235)** It just structures it nicely so that we can proceed without errors.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=241)** And now what I'm going to do is define a function.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=245)** And so what this function does, it's going to allow for a kind of dynamic querying of a vector database where both the content similarity and the metadata criteria is considered.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=258)** And so our agent is going to make use of this tool.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=261)** So just to quickly talk about what this function does, first thing, I'm just setting top_k = 3.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=267)** You can change that if you'd like.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=271)** This function has some parameters such as the query: str, the filter_key_list and values, and these are just the metadata keys to filter by and the values corresponding to the key.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=283)** Here, I'm going to set up a metadata filter, and so this is implemented using key-value pairs.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=290)** And again, the key represents the metadata attribute and the value specifies the desired attribute value.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=296)** And so the operator here defines how the filter should be applied.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=302)** In this case, I'm using the contains operator, so this means the function will filter results where the metadata of the document contains the values in the given key.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=313)** We'll go ahead and instantiate a vector index retriever, so just instantiate a retriever.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=319)** I'm using the query mode of hybrid, and I'm setting the alpha value equal to 0.65.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=326)** If you recall, we discuss the alpha value gives a trade off between vector search and full-text search.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=334)** We're also passing the MetadataFilter as well.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=339)** We'll create a query engine.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=341)** This query engine is using the compact response mode.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=346)** We'll get the response back and print it.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=348)** So this is essentially a function that our agent is going to use, and this function does what we've seen dozens of times by this point already, retrieves from the vector database and synthesizes a response.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=364)** So again, just to recap, this function is going to do dynamic querying of our vector database.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=371)** We're considering both the similarity, the semantic similarity between the query and what is in the vector database, and we're doing that with vector search.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=381)** We're also using specific metadata criteria, and the metadata criteria is essential for a hybrid retrieval system because we're able to give our query engine the necessary mechanism to ensure that the search results are relevant and compliant with our user query.
>
> **[6:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=404)** And so the filter ensures that the user receives results that are contextually relevant as well as targeted to their query.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=417)** Now, we're going to go ahead and define a function tool.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=418)** So if you recall, I mentioned that in order for us to use an agent, we need to give it access to tools, and so a function tool is a abstraction that's going to convert a user-defined function into a tool that can be used by an agent.
>
> **[7:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=433)** And so the whole purpose of this function tool is to encapsulate a function, in this case, the function that we're encapsulating is the one that we just defined, the auto_retrieve_fn, along with its metadata, like the name of the function, a description of the function, as well as a standard interface that the agent can interact with.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=454)** And that is the fn_schema here which we have already defined.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=458)** Because we standardize it in this way, that means the agent is able to dynamically use the tool without really needing to understand the underlying code itself.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=470)** Here, we're going to use the OpenAIAgent.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=474)** This is a specialized type of agent that uses, of course, OpenAI models to perform tasks like using functions or calling APIs or answering a query or summarizing information, and they're built using the OpenAI API.
>
> **[8:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=490)** And so we initialize our OpenAIAgent with a set of tools.
>
> **[8:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=494)** In this case, it is the auto_retrieve_tool, which we have just defined.
>
> **[8:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=499)** So the agent is going to use the tool based on the input that it receives, it's going to look at that input, in this case, the input will be a user query, and based on that user query, it's going to figure out what it needs to do and how it needs to proceed.
>
> **[8:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=514)** So let's go ahead and see this agent in action, so just to kind of recap how this agent is working.
>
> **[8:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=520)** It all starts with a input, a user query.
>
> **[8:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=523)** This is going to go into this query engine system.
>
> **[8:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=526)** So the query will be sent to our query engine retriever, the query engine retriever is going to interact with the vector store data application that we have here.
>
> **[8:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=535)** The vector store data is going to communicate with the OpenAI API, one is a language model that's going to kind of generate responses based on the query, another is the embedding model that's going to convert the query and the data into vector representations, then we have the vector store system.
>
> **[9:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=556)** The vector store system, of course, will process what is sent to it and fetch the relevant vectors, but it's also going to filter using metadata filters and we'll get back a list of filtered nodes which represent the most relevant pieces of information to the query.
>
> **[9:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=575)** This is going to be sent back to the vector store data application, which will compile it for response, and send it back to the query engine application and then finally get response back.
>
> **[9:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=587)** So see this in action.
>
> **[9:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=588)** So here, I send a query to the agent, and I say, building wealth and achieving happiness, so on and so forth.
>
> **[9:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=595)** Right, I'm passing it this piece of text, and based on this, the agent is saying, "Okay, well, I should use questions this excerpt can answer," and it decomposes this long string of texts into one, two, two questions here, three questions, right?
>
> **[10:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=617)** So the agent looks at this long input text.
>
> **[10:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=620)** It reasons over what it needs to do and what metadata filters it needs to apply, in this case, it's saying, "Okay, I need to use questions the excerpt can answer, and I need to break this down into a bunch of different questions," which the agent does, fetches a number of nodes, and then gives us a response back.
>
> **[10:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=641)** If I send the agent a query like this, find text that mentions specific knowledge, luck, and success, the agent is able to say, "Oh, okay, well if this is the query, then I should look at keywords.
>
> **[10:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=655)** And so I'll filter keywords to specific knowledge, luck, and success and then get the most relevant nodes."
>
> **[11:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=663)** If I say to the agent, what would Nassim Taleb say about accountability and risk, the agent is able to say, "Okay, well, I should probably filter based on the author metadata tag where the author is Nassim Taleb and ask about these things."
>
> **[11:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=681)** Here, we can send the agent a query, what would Bruce Lee say about adaptability and self-expression, again, it's able to say, "Okay, well, I should probably filter for Bruce Lee and, you know, do this query once those nodes have been filtered."
>
> **[11:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=696)** If I have a question like this, what kind of questions should I ask Balaji or Naval, the agent is able to say, "Okay, well, I should probably filter on author and then look at the questions."
>
> **[11:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=709)** And it does so for Balaji and it does so for Naval Ravikant as well.
>
> **[11:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=714)** And so you can see that's pretty powerful, right?
>
> **[11:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=716)** The agent is able to look at the input query, decide how it needs to filter the nodes and then execute on that.
>
> **[12:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=723)** It's a pretty powerful pattern.
>
> **[12:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=728)** There's also a lower-level API that LlamaIndex exposes to you.
>
> **[12:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=733)** Under the hood of agents, it's really composed of two things, an AgentRunner that interacts with an AgentWorker.
>
> **[12:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=740)** The AgentRunner is an orchestrator that's going to manage the state, including the history of the conversation.
>
> **[12:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=747)** It's going to create and maintain tasks, execute each step within the task, and then give a high level interface for user interaction.
>
> **[12:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=757)** The AgentWorker is what controls the step-wise execution of a task.
>
> **[12:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=761)** So given an input step, the AgentWorker will generate the next step, and you can initialize this with parameters that act on state that's passed down between the task step or TaskStep objects, and then there's just this kind of outer AgentRunner that's like call the AgentWorker, collect and aggregate the results and do it in this interactive loop.
>
> **[13:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=784)** I've linked to the source code.
>
> **[13:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=785)** If you want to read more about it, please do.
>
> **[13:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=788)** So here, we're just going to initialize this agent_worker with a FunctionCallingAgentWorker abstraction.
>
> **[13:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=795)** We're going to give it the same tools, tell it to use the LLM from the settings, and then you can see here what's happening under the hood.
>
> **[13:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=803)** So what I'm saying, in what ways do Naval and Nassim think differently, and so you can see the agent behaves just like the Open AI agent, is able to filter based on the author and then execute the query against those author nodes and then give us back a response.
>
> **[13:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=820)** And there you have it, Agentic RAG at a high level.
>
> **[13:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=824)** So there's a lot more to agents than we covered here.
>
> **[13:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=827)** If you go to the LlamaIndex docs and you go to Examples, and then in the Examples, you go to Agents, you could see here on the sidebar, there are a number of different types of agents that you can use, far too many that we can cover in this course.
>
> **[14:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=847)** As a matter of fact, I can probably create another two or three-hour course just about agents in LlamaIndex.
>
> **[14:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=853)** But I encourage you to look at the documentation, so again, just go to docs at LlamaIndex, look under Examples, look under Agents.
>
> **[14:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=860)** Of course, if you need more information, you can also look at the Component Guides and then go to the agent's component guide here.
>
> **[14:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=868)** You get the usage pattern and the lower-level API, the module guides, and importantly, the tools that a agent has.
>
> **[14:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=878)** We're going to continue on.
>
> **[14:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/agentic-rag?u=76281980&t=879)** We'll make more use of tools in the next two modules where we talk about ensemble retrieval and the ensemble query engine.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), case, (5), this, (3), continue (2), let (2)
> **Env Vars:** api (4), rag (2), llm (2), bm25 (2)
> **CLI Commands:** make (6), node (1), find (1)
> **Code Identifiers:** sentence_splitter (1), qa_extractor (1), keyword_extractor (1), filter_key_list (1), auto_retrieve_fn (1)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (3), is an  (2)
> **Prerequisites:** set up (4)
> **Analogies:** kind of like (1), such as (1), just like (1)

#### Ensemble retrieval
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=0)** - [Instructor] As you've seen throughout this course, when you're building a RAG pipeline, you can use multiple retrieval strategies.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=8)** You can use 'em simultaneously, individually, in combination with one another.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=13)** There's so many different ways that you can use a retriever.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=17)** But what if you can simultaneously try multiple strategies and then kind of prune the results?
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=23)** And so for this, we have the ensemble retriever.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=28)** So the ensemble retriever will use different retrieval strategies, for example, different chunk sizes, vectors, keyword, hybrid searches, whatever you define together.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=38)** It will combine the results from the different strategies to improve the quality of retrieval.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=43)** And then you can add a reranker to the mix if you'd like.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=48)** This is useful to compare and evaluate the effectiveness of different retrieval strategies against each other.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=56)** Let's go ahead and see this in action.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=58)** So all this is stuff that we've seen before.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=63)** What we're going to do here now is we're going to create a few different vector indices.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=67)** We're going to create vector indices that have different chunk sizes.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=71)** So we'll split the nodes in chunks of 128 through 1024, as shown here in the chunk sizes list.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=80)** And then what we're going to do is create an ensemble retriever from that.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=84)** So we'll start by defining the index nodes, which we'll create a separate index node for each retrieval strategy.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=90)** We'll then create a summary index, set up a recursive retriever, define a reranker, put all this together into the query engine, and then run the queries.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=99)** The first thing we need to do is define the index nodes.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=102)** So this code right here, we'll create a separate index node for the vector retriever that corresponds to that chunk size.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=109)** So for example, we'll have a different retriever for each one of those chunk sizes that we defined above.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=116)** We're going to aggregate all of this into a summary index.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=119)** So a summary index is just a list-based data structure.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=122)** And so the way it works is that during index construction, we're going to chunk the text up.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=129)** Then each chunk will be converted to a node.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=131)** Then these nodes are going to be put into a list.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=133)** Then at query time, the initial answer is going to be constructed using the first text.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=140)** Then we're going to refine through feeding in subsequent text as context.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=146)** And refinement could mean keeping the original answer, making small edits, or just rewriting the original answer completely.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=154)** We'll put all this together into a recursive retriever.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=158)** The recursive retriever is going to fetch all nodes from the summary index, and then recursively call the vector retriever for each chunk size.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=166)** So we'll define all that here.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=168)** I have a summary_index and the RecursiveRetriever.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=171)** We'll go ahead and pull some nodes in that are associated with this query.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=176)** And you can see the number of nodes that were pulled and what the nodes actually were.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=183)** Next, we can rerank the final results using the reranker.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=186)** We'll use CohereRerank here.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=189)** We can put everything together into a retriever query engine.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=193)** So we have our retriever, we used the reranker.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=195)** And again, remember the retriever is defined right here.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=202)** Now that we got our query engine all packaged together, we can execute a query against it and get back the response as well as the source nodes.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=212)** And so here you can see exactly the response and then all of the nodes that contributed to that response.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=220)** We can also analyze the relative importance of each chunk.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=224)** So ensemble-based retrieval has a cool feature, and that is reranking, which allows you to assess the importance of each chunk based on the order in the final retrieve set.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=236)** So if a certain chunk is consistently ranked at the top, that means it's likely more relevant to the query.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=243)** And we can define a function that helps with that.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=245)** And what I'm going to do is define a mrr_all function.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=250)** This is going to evaluate the relative importance or relative difference of each chunk by analyzing the ranks in the list.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=258)** So a high MRR means that the metadata tends to appear earlier in the ranking, which means it's higher relevance or importance.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=265)** So we have some input parameters here, metadata value, metadata key, and the source nodes.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=271)** The source nodes is just a ranked list of nodes.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=274)** What this code is going to do is for each metadata value, iterate through the ranked list of source nodes, identify the position of the first occurrence of the metadata value in the list, compute the reciprocal rank, and then store the reciprocal rank in a dictionary.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=290)** The output is going to convert the dictionary of MRR values into a Pandas data frame, and then we will display the Pandas data frame.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=302)** And here we'll go ahead and run that.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=305)** And you can see here that the chunk size of 128 got a MRR of one, indicating that it had the highest-ranked results.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=313)** So you can go ahead, and with some coding and engineering effort, you can go all the way back up here and you can hack around with this yourself, right?
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=320)** You can define this bit of code however you want.
>
> **[5:25](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=325)** You can use whatever type of retriever you want to do.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=330)** So you've seen the patterns play out several times throughout this course, so you should be able to take this code here and test out different strategies for retrieval.
>
> **[5:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-retrieval?u=76281980&t=343)** I'll see you in the next and final video for the Modular RAG section where we talk about the ensemble query engine.

> [!info]- Semantic Content
>
> **Env Vars:** mrr (3), rag (2)
> **Code Keywords:** function (2), this, (1), let (1)
> **CLI Commands:** node (3)
> **Code Identifiers:** summary_index (1), mrr_all (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Analogies:** for example (2)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)

#### Ensemble query engine
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=0)** - [Instructor] As you've seen throughout this course, when you're building a RAG system, there are so many different components that you can play around with that you can experiment with.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=7)** We saw in the previous section that you can experiment with a number of different retrieval components.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=12)** Well, you can also do the same with query engine components and query pipelines.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=17)** So now what if you could simultaneously use multiple strategies and have a language model, rate the relevance of each result, and then synthesize the results into a coherent answer?
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=27)** And this is what we can use an ensemble query engine for.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=30)** The main purpose of this ensemble query engine is to try out multiple retrievers at once, have the LLM rate how good each result is compared to the original query, and make sure that only the most relevant information is considered.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=45)** And then let the LLM combine this most relevant information into a comprehensive final answer.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=53)** So how do you use the ensemble query engine?
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=55)** Well, you set up your retrieval tool.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=57)** You configure a router query engine, and then run the queries.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=60)** And this is a powerful technique that will let you try different query and retrieval methods so that you can experiment with different approaches and find something that's going to work for your RAG application.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=72)** We'll begin as we normally do with all our imports, set up our LLM, set up our embedding model.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=80)** Bring in our documents.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=81)** We're going to just use a simple sentence splitter in this case, using a chunk size 128.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=88)** Go ahead and create our storage context.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=91)** And what we're going to do is use a simple key word table index.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=96)** This is just a simplified version of the keyword based indexing system.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=101)** What it does is during index construction, it's going to split text documents into chunks.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=108)** Then it's going to use GPT to extract the relevant keywords.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=112)** Those keywords are going to be stored in a table.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=116)** Then at query time, we're going to extract the relevant keyword and use them to retrieve a set of candidate text chunk IDs.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=124)** Then the initial answer will be constructed using this first text chunk.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=129)** And then we go on refining it with more and more chunks.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=134)** Go ahead and create the simple keyword table index and the vector store index.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=139)** We'll go ahead and instantiate a QA prompt, which will pass to both the keyword query engine and the vector query engine.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=147)** Now we can use the vector query engine to get a response.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=152)** We'll rate the response, in this case, the LLM says 9 out of 10.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=156)** Then we'll use the query engine with the same query.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=159)** And this time the language model scores it 10 out of 10.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=164)** Now I want to draw your attention to something called the query engine tool.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=168)** So we talked about how tools are abstractions that are used by a data agent or a LLM and gives a structured way for them to perform some task.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=177)** And so a query engine tool is a specific type of tool that interfaces with and wraps a query engine.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=185)** That way the agent is able to perform a complex query by leveraging the query engine itself.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=191)** So we'll go ahead and create a couple of tools.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=194)** One is a keyword tool.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=196)** This keyword tool is going to use the keyword query engine.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=201)** So of course we instantiate the tool with the query engine itself, as well as a good description.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=207)** We'll create a vector tool which uses the vector query engine.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=211)** We'll go ahead and give that a good description as well.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=215)** Then we're going to define a router query engine using a LLM multi-sector.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=221)** So the LLM multi-sector, it just uses a prompt and tells the LLM, these are your choices of tools that you need to use.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=230)** Select the most relevant tool based on the query, and then go do the query.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=235)** So let's go ahead and package up the router query engine.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=238)** So we'll pass the LLM multi-sector, and then we'll use tree summarize.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=242)** We have a prompt template for tree summarize.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=245)** We'll instantiate the query engine using the router query engine.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=248)** We'll pass in the selector and then we'll pass in the tools.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=252)** So what's going to happen is that the agent will look at this tool, it's going to choose the best data source, decide whether to perform a keyword search or a vector search.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=264)** Then it's going to evaluate the retrieved nodes and synthesize that to a response.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=269)** So let's go ahead and see this in action.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=272)** So here we have a query engine that's just saying, how can I develop specific knowledge that'll help me build wealth and achieve happiness?
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=281)** And so here you can see the agent, if you will, is selecting query engine one, because it's a fully formed question.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=289)** We get a response with a relevant score.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=292)** You can also print out the final response in the source nodes as well.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=299)** Here I'm just passing a list of keywords.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=302)** And then the agent is looking at this and saying, oh, okay, well I should probably use keywords.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=309)** And so it does so by picking the right nodes, synthesizing the final response, and we get a relevant score of 7 out of 10.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=317)** And you can see the source nodes as well.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=321)** So we could try it again here.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=323)** So I'm trying to, in this case, I'm trying to come up with a query that has keywords and a question.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=328)** And I was hoping that the language model would use both of them, but it did not.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=332)** It just decided to use query engine one because of this fully formed question.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=338)** Of course, we can see the result and the source nodes as well.
>
> **[5:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=343)** And so if we scroll back to the top here where we instantiate everything, the query engines, you can create your own query engines.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=351)** If you can try this out, you can test this out and you can play around with it.
>
> **[5:54](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=354)** And once you have your query engines of choice created, you can run them just like how we've done here and get the appropriate score.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=364)** Right, so that's it for this lesson, and that's really it for our discussion of RAG techniques.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=371)** In the next session, I'll give you some concluding thoughts.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/ensemble-query-engine?u=76281980&t=375)** Thanks for sticking with me for this course, and I'll see you in the final module.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (4), case, (3), for. (1), module (1)
> **Env Vars:** llm (9), rag (3), gpt (1)
> **Prerequisites:** set up (3), configure (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we talked about (1), in the next (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** template (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### LlamaIndex evaluation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=0)** - [Instructor] I concluded the last section by talking to you about Ensemble Retrievals and Ensemble Query engines, and how you can use these to kind of evaluate responses, and kind of get a sense of how your RAG system is performing.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=15)** Although we didn't cover it in this course, I do want to point you to a place where you can go and learn more about Evaluation within the Llamaindex framework.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=24)** So, if you go to docs.[llamaindex.ai](https://llamaindex.ai), and you go to Advanced Topics, scroll down to Evaluation, you'll see that Llamaindex actually has a module for Evaluation.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=37)** I didn't cover it in this course because like I mentioned before, this would be another two to three hour course in itself.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=43)** But in it, you can do Component-Wise Evaluation, and you can evaluate the Query Engine without using Retrieval.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=51)** You can do an End-to-End Evaluation, where you evaluate the entire system using a number of metrics.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=57)** And so I touched on some of these metrics at a high level, when I talked about RAG evaluation, but if you'd like, you can go deeper, and get a full kind of understanding of what each one of these metrics is like.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=72)** At the end of the day, each one of these metrics, for the most part, is just using calls to a language model.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=80)** You can even go a bit deeper into Evaluation.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=84)** You can ask yourself whether you should do End-to End or Component-Wise, where do you start?
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=89)** And do a real deep-dive into Evaluation.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=95)** So, if you're wondering where to go next after learning about these paradigms and the techniques that fall into these paradigms, the next step would be Evaluation.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/llamaindex-evaluation?u=76281980&t=103)** And so Llamaindex does have a pretty robust set of documentation that you can look at and sort out how to use a Llamaindex for evaluation.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), scroll down (1)
> **Env Vars:** rag (2)
> **Code Keywords:** module (1)
> **URLs:** [llamaindex.ai](https://llamaindex.ai) (1)
> **Speakers:** - [instructor] (1)

#### Comparative analysis of retrieval-augmented generation techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=0)** - [Instructor] So throughout this course you've learned a lot about retrieval augmented generation.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=3)** You've learned about the different paradigms, the different techniques, and really how complex all of this is.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=9)** A natural question to ask at this point is, okay, what am I supposed to use?
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=13)** Like I've got all these tools at my disposal, how am I supposed to put these tools together or use these tools to build something useful?
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=21)** Unfortunately, I don't have the answer for you.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=23)** I can't tell you exactly what the best methodology to use is, but I do want to kind of give you a little bit of hope by talking about this paper called "Advanced RAG Output Grading."
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=34)** Now, I mentioned this paper at the very beginning of the course, and hopefully you took time to look into it when we were discussing evaluation.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=42)** If not, don't worry.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=43)** I'm going to go over it here in a little bit of detail and talk about their findings.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=47)** Because I feel like this is a important paper, it's an interesting paper.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=51)** At the very least, it'll give you a framework for how you can go about evaluating your RAG system.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=56)** So the main purpose of this paper, what they're trying to do is evaluate different RAG techniques, measure their performance specifically with respect to retrieval precision and answer similarity, and they want to find the best performing methods, and then also provide some recommendations for how to go forward.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=75)** The first thing I want to talk about is actually their data collection and their dataset construction.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=80)** So they looked at arXiv they focused on 423 research papers related to AI and LLMs.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=87)** With that, they generated 107 QA pairs using GPT-4, I believe, and they validated this with human reviewers.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=97)** They then selected 13 papers for a further detailed analysis.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=103)** They added more papers to be kind of like noisy so they can simulate a real world environment, and then they used a bunch of different chunking strategies to create vector databases.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=116)** And in this paper, the methods they evaluated were the sentence window retrieval, the document summary index, hypothetical document embeddings, a multi-query, max marginal relevance, cohere reranker, and then LLM-based reranking.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=132)** They used the LlamaIndex abstractions for all of these.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=134)** So if you recall sentence-window retrieval is optimizing retrieval and generation by tailoring the text chunk size.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=142)** Document summary index is indexing document summaries for efficient retrieval while using the full text regeneration.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=149)** Hypothetical document embeddings is going to use a LLM to generate hypothetical answers to improve document retrieval.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=156)** Multi-query is going to expand the user query into multiple smaller queries to help broaden the search scope.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=164)** MRR is going to balance relevance and diversity in the retrieve documents.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=169)** The cohere reranker is going to use a large language model to prioritize the most relevant documents within the context.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=177)** LLM reranker is just going to use a LLM that is not from cohere to rerank the retrieve documents based on the contextual understanding.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=187)** And they conducted 10 runs for each one of these techniques.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=191)** And this is to kind of help ensure some type of statistical reliability.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=195)** The metrics they looked at were retrieval precision, which is measuring the relevance of the retrieved context to the question that varies from a scale of zero to one.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=204)** They also looked at answer similarity.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=207)** Answer similarity is assessing the alignment of the system's answer with a reference response, and they scored this from zero to five.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=216)** They also looked at some other metrics as well.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=219)** They rightfully acknowledged that there is a need for further metrics specifically designed to assess retrieval precision and answer similarity beyond just these simple scoring metrics.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=231)** And so with these metrics, they then did a statistical analysis.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=237)** So they calculated the average scores for retrieval precision and answer similarity across the 10 runs for each of the techniques.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=245)** They used statistical tests, specifically they used ANOVA, so the analysis of variance, to kind of detect the overall significant differences amongst the techniques.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=256)** And then they use the Tukey HSD, and this is a post ANOVA test to do a pairwise comparison.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=263)** All right, so now that you know the tests that they employed, you can look at the results here.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=269)** So they present the results for the classical vector database.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=273)** They present results for the sentence window, document summary index.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=280)** They also point out some limitations.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=284)** So here are their findings.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=285)** So they found that HyDE with LLM ranking, if we look at the box plot of the performance with respect to retrieval precision, they found that HyDE plus LLM reranking has the highest retrieval precision.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=303)** They found that sentence window retrieval also performed well in terms of retrieval precision.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=309)** And you can see here there's some moderately performing techniques, for example document summary index and multi-query.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=314)** Lower performing techniques were MRR and the cohere reranker.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=321)** For answer similarity they found again that HyDE and LLM reranking tended to work the best.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=329)** They improved retrieval precision and led to higher answer similarity.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=334)** Sentence window retrieval actually ended up showing a lot of variability.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=339)** So while it achieved high precision, effectively leveraging the retrieved context for generation, it was sometimes inconsistent.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=348)** And so the document summary index and the multi-query and MRR were kind of moderately performing techniques.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=356)** And so we can look at the conclusions, and my biggest takeaways from this is that retrieval precision matters.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=361)** So methods like HyDE plus LLM rerank and sentence window retrieval plus HyDE have high precision and this is a good indicator for at least the faithfulness metrics.
>
> **[6:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=373)** There's interesting discrepancy with sentence window retrieval.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=376)** So despite having high precision, sentence window retrieval showed a lot of inconsistencies with answer similarity.
>
> **[6:24](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=384)** The paper also highlights that answer similarity is influenced by various factors that are beyond retrieval because we're using a LLM to judge the answer.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=393)** So beyond just retrieval, we're influenced by the LLM's capabilities and also prompt engineering as well.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=399)** But overall, if we prioritize RAG methods with high retrieval precision like HyDE and LLM reranking, we'll be able to generate faithful and relevant answers.
>
> **[6:49](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=409)** So faithfulness requires going beyond keyword matching and ensuring that the language model understands the meaning of the context that is retrieved.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=419)** So there's a lot of future work to be done with evaluating RAG.
>
> **[7:02](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=422)** So I encourage you to take a look at this paper, 14, 15 pages well spent.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=428)** Again, this is the paper called "Advanced RAG Output Grading."
>
> **[7:13](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=433)** So although I can't tell you what the best methodology to use is for your specific use case, I have provided you with the tools, that is a toolkit of techniques that you can use, and a framework with which you can use to evaluate your responses.
>
> **[7:31](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=451)** Now, this "Advanced RAG Output Grading" does have a GitHub associated with it.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=456)** Find the GitHub here, it's under the predlico repo under ARAGOG.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=463)** And here they've got all the code that they used to evaluate as well.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-rag-using-llamaindex/comparative-analysis-of-retrieval-augmented-generation-techniques?u=76281980&t=470)** So whether or not this ends up being the definitive way to evaluate RAG pipelines, I do hope that it inspires you and motivates you, or at least gives you a framework for thinking about how to evaluate all the different methods and techniques that you've learned throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** llm (11), rag (8), mrr (3), anova (2), gpt (1)
> **Definitions:** is a  (5)
> **CLI Commands:** find (2)
> **Tools:** github (2)
> **Analogies:** kind of like (1), for example (1)
> **Code Keywords:** case, (1)
> **Code Identifiers:** arxiv (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Harpreet Sahota]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-ai-rag-using-llamaindex-3830207/codespaces)

## Skills Covered

- LLaMA
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)

## Path Context

### In [[Master Retrieval-Augmented Generation (RAG)]]
← [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] | **7 of 7**

## Appears In

- [[Master Retrieval-Augmented Generation (RAG)]]

## Related Courses

_Courses sharing skills:_

- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[GraphRAG Essential Training]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Knowledge Graph Data Engineering for Generative AI Use Cases]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)

---

[↑ Back to top](#)