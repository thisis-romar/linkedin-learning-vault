---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications
url: "https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications"
duration_minutes: 107
duration: 1h 47m
level: Advanced
updated: 1/28/2025
learners: 8169
skills:
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: true
github: "https://github.com/guyernest/advanced-rag"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHm8KWdGtJ1lA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737652635356?e=2147483647&amp;v=beta&amp;t=HOvvWxkDkc31NHYL42lXRBP0dw5soo71ynibySf8kXk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Become an AI Engineer]]'
prev_courses:
  - '[[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]]'
next_courses:
  - '[[Fine-Tuning for LLMs- from Beginner to Advanced]]'
path_nav: '[{"path":"Become an AI Engineer","position":6,"total":10,"prev":"LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)","next":"Fine-Tuning for LLMs- from Beginner to Advanced"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20LLMs%20with%20Retrieval%20Augmented%20Generation%20(RAG)-%20Practical%20Projects%20for%20AI%20Applications.md)

![Advanced LLMs with Retrieval Augmented Generation (RAG): Practical Projects for AI Applications](https://media.licdn.com/dms/image/v2/D4D0DAQHm8KWdGtJ1lA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737652635356?e=2147483647&amp;v=beta&amp;t=HOvvWxkDkc31NHYL42lXRBP0dw5soo71ynibySf8kXk)

# Advanced LLMs with Retrieval Augmented Generation (RAG): Practical Projects for AI Applications

> Are you an engineer, solutions architect, or software developer tasked with building enterprise applications? It’s time to get up to speed with the latest AI-powered tools and techniques—in this case, retrieval-augmented generation (RAG). In this course, designed by leading technology educator Pragmatic AI Labs, join instructor Guy Ernest as he outlines the foundational and advanced concepts requi

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications) | 1h 47m | Advanced | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Course introductions](#course-introductions)
  - [Understanding the basics of RAG](#understanding-the-basics-of-rag)
  - [Building a simple RAG example](#building-a-simple-rag-example)
  - [Issues with simple RAG](#issues-with-simple-rag)
- [**1. Text Encoding Using Embedding Vectors**](#1-text-encoding-using-embedding-vectors) (6 videos)
  - [Embedding introduction](#embedding-introduction)
  - [Hands-on lab: Embedding tokenization](#hands-on-lab-embedding-tokenization)
  - [Hands-on lab: Embedding vocabulary](#hands-on-lab-embedding-vocabulary)
  - [Hands-on lab: Sentence embedding](#hands-on-lab-sentence-embedding)
  - [Hands-on lab: Content embedding](#hands-on-lab-content-embedding)
  - [Embedding notebook summary](#embedding-notebook-summary)
- [**2. Document Chunking and Enrichment Strategies**](#2-document-chunking-and-enrichment-strategies) (6 videos)
  - [Chunking introduction](#chunking-introduction)
  - [Hands-on lab: Semantic chunking](#hands-on-lab-semantic-chunking)
  - [Chunking overview](#chunking-overview)
  - [Hands-on lab: Contextual retrieval](#hands-on-lab-contextual-retrieval)
  - [Query document alignment](#query-document-alignment)
  - [Hands-on lab: Reverse HyDE](#hands-on-lab-reverse-hyde)
- [**3. Improving Document Retrieval**](#3-improving-document-retrieval) (5 videos)
  - [Hybrid search introduction](#hybrid-search-introduction)
  - [Hands-on lab: Hybrid search](#hands-on-lab-hybrid-search)
  - [Hands-on lab: Reranking](#hands-on-lab-reranking)
  - [Multimodal retrieval introduction](#multimodal-retrieval-introduction)
  - [Hands-on lab: Multimodal PDF retrieval](#hands-on-lab-multimodal-pdf-retrieval)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Course introductions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=0)** - Welcome to Mastering Large Language Models or LLM with Advanced RAG, retrieval augmented generation.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=9)** My name is Guy Ernst, also known as The ML Guy, and I will be teaching this class.
>
> **[0:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=16)** Before we start, you might remember from your childhood this movie, where Mickey Mouse is the wizard apprentice, try to summon the magic that will do his work, but then he discovered that he cannot stop it, and the brooms are stepping all over him.
>
> **[0:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=32)** This quote of "Never summon a power you can't control" is from the book, "The Nexus" from Yuvak Harari, who try to explain what is AI and how AI can integrate here into our life.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=46)** I like to depict it because I think that this is quite similar to what is happening in enterprises today where you try to demo your new shiny AI, but then you are crushed when you try to move it to production or scale it up.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=62)** This paper, it was published about a year ago, and try to claim that RAG does not work for enterprises basically from the same reason I just mentioned, that people don't know how to use that and there are many, many concerns and risks.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=78)** When in multiple servers to enterprise companies, they discovered that there are two main domains of issues when trying to use AI or LLMs or RAG specifically in enterprises.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=92)** One is people, about knowledge and experience, which is something they don't have much because of those new technologies.
>
> **[1:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=99)** And the other one is around the technology aspect and maturity or the immaturity of those tools and frameworks.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=106)** In this course, we're going to focus on the people aspect and more specifically about the insufficient experience with RAG concept.
>
> **[1:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=115)** We will cover many of the RAG concepts, especially the advancement, the ones that are needed to take them into production.
>
> **[2:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=124)** Before we jumping into what is RAG, it's important to remember that RAG is not the only option of using LLMs in the organization based on how much of the knowledge that is needed for the application to be able to reply to queries of users is internal.
>
> **[2:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=142)** That is, it's not available from the outside and when we have a lot of internal knowledge, we have to build the RAG.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=148)** But sometimes our system can use mostly prompt engineering like knowledge extraction and classification and things like that because there is no much internal knowledge or data that is needed.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=161)** Of course, there is more advanced topics where we need to fine tune the models, especially when the language that is used in our system, medical, legal or otherwise is more specific.
>
> **[2:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=174)** It's not general and most people in the world don't write paper in it.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=180)** Therefore, we need to do some fine tuning.
>
> **[3:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=183)** In this course, we're not going to touch a lot about the other aspect.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=187)** We're going to focus on RAG, but remember RAG is basically only 70 or so percent of the LLM systems.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=195)** Okay, so let's see a quick diagram of a simple retrieval augmented generation system.
>
> **[3:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=201)** It has the user asking a query.
>
> **[3:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=205)** The first step is to retrieve the relevant information for the query from some kind of a document database, usually using a vector index to have a semantic search.
>
> **[3:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=218)** Then we take the retrieve documents, we rank them, we choose which of them we want to include in our prompt to the generation step using a large language model.
>
> **[3:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=229)** And then the reply will come based on the real data, less lumenations, less mistakes, more specific.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=238)** There is another aspect.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=239)** We really don't talk a lot about it.
>
> **[4:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=241)** How do you index the data?
>
> **[4:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=242)** And in this course we spend most of the time on improving the retrieval by improving the indexing process.
>
> **[4:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=251)** This diagram just added the jigsaw puzzle aspect, and I want you to think about building a system in a modular way.
>
> **[4:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=259)** It's not so important to choose the model now, the LLM model or the vector database or the embedding model and so on.
>
> **[4:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=267)** In this course we're going to learn how to evaluate them and how to tweak them, but we know the technology is moving very, very quickly.
>
> **[4:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=274)** The best LLM model today might not be the best tomorrow in accuracy, in cost, in scale, in speed, in context, and so on.
>
> **[4:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=284)** And the same for other parts like the Vector database and so on.
>
> **[4:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=288)** So when you build a system, it should be modular.
>
> **[4:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=291)** And as I said, in this course, we're going to focus on the concept which are common to any of the tools you're going to select and each one of them will offer one way or another of this concept in its configurations.
>
> **[5:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=306)** In this course, this is only introductions, so we're not going to dive into all the concepts here, but we're going to talk about a few advanced topics, embedding and chunking and enrichment and hybrid search and so on.
>
> **[5:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=320)** At the end of the course, you will be much more familiar with this diagram.
>
> **[5:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=323)** You'll be able to take it and build something powerful and as advanced as this one for your organization.
>
> **[5:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=330)** We have a repository that you can use for this course.
>
> **[5:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=335)** You have the address here and it includes a few of the diagrams that we just saw and a few Jupyter Notebooks that will go over each one of the topics.
>
> **[5:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=347)** We'll start with the first one on the simple RAG, but each one of the topics, we're going to evaluate that, see how it's working, understand bit under the hood, what is going on there, so you will be able to use it in a much better way.
>
> **[6:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/course-introductions?u=76281980&t=362)** And please join me when we talk about the first simple RAG application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** rag (12), llm (4), ai (4), data (3), database (3)
> **Env Vars:** rag (12), llm (4)
> **Tools:** jupyter (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - welcome (1)

#### Understanding the basics of RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=0)** - Before diving into advanced topic of Retrieval Augmented Generation Application, let's start with a basic workflow.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=9)** In the basic workflow with the user asking a question, the first step is the retrieval.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=14)** We take the query, we try to find the most relevant documents from our document database.
>
> **[0:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=21)** Usually we're using a semantic search, therefore we're going to use some kind of a vector database that capture encode semantic content of which document.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=30)** Then we take the match documents from the retrieval process and send it to the second step of the augmentation, where we take a predefined prompt.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=41)** "Please use the following documents.
>
> **[0:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=44)** Answer the question of the user.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=46)** Don't come up with information that is not in the document."
>
> **[0:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=50)** And so on.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=50)** So we can do some work on the prompt itself, but the most important part is the content that was received from the retrieval part.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=58)** And then we call the generation part.
>
> **[1:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=61)** The LLM model will take the prompt and the content to retrieve documents and will generate the reply.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=70)** So this is the RAG flow.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=72)** There is a preliminary step where we index the documents.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=76)** So we get a set of documents.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=78)** We encode it, put it into vector database, and then the retrieval can happen.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=85)** So this is the flow.
>
> **[1:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=88)** Before we go to the example, I want to take out of the discussion, the exact vector database.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=93)** Remember, it should be completely modular.
>
> **[1:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=95)** We'll use here an open source version of vector database.
>
> **[1:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=101)** It's a powerful one with a lot of features, but overall, you can start with that for your learning.
>
> **[1:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=107)** You can start from that, from your POC and growth and development.
>
> **[1:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=111)** And then select a different one as you want to scale it up, add more documents, improve the performance, reduce the cost, and other concepts.
>
> **[2:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=121)** This comparison is taken from this website.
>
> **[2:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=124)** You can go to the website itself.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=127)** You can see there are quite a lot of databases in this comparison.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=131)** Many, many columns and criteria you can filter.
>
> **[2:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=135)** You can sort and decide what works best for you.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=139)** I didn't use all of them, of course.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=141)** But if you used, as I said, they're quite modular, so we can change them as we need.
>
> **[2:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=147)** The same goes for the generation part.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=150)** The large language models can be also modular, so you can choose one from OpenAI, You can replace it with a different topic.
>
> **[2:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=158)** And then maybe Gemini is from Google, open source, and so on.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=162)** So you can really mix and match as needed to optimize your use case, your requirements, your budget, your performance requirement, and so on.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=172)** You'll see that an advanced concept, we have more than one large language model.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=178)** More than just generation.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=180)** We would use different LLMs for the encoding.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=182)** We'll use different LLMs for the semantic chunking and so on.
>
> **[3:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=186)** So at the end of the day, your RAG system will have multiple LLMs.
>
> **[3:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=190)** Each one of them will be different and modular as needed.
>
> **[3:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=194)** Okay, I think enough with introduction.
>
> **[3:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/understanding-the-basics-of-rag?u=76281980&t=197)** Let's jump into the code and see our simple RAG application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (5), prompt (3), rag (3), application (2), [[Semantic Search]] (1)
> **Env Vars:** rag (3), llm (1), poc (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### Building a simple RAG example
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=0)** - In this course we're going to use a set of Jupyter Notebooks that will allow us to run the code, see how it's working, examine the output, and so on.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=9)** You can use this GitHub repository with all the notebooks.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=14)** There are also some explanations, some diagram that you can explore, explanation of the different problems we're going to solve, and a quick setup.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=24)** So you can either follow the notebook here by just clicking them and see this kind of a static view of it, or you can go and install it locally.
>
> **[0:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=38)** There are two options to run all the dependencies.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=41)** One is a traditional pip.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=43)** All the code is in Python.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=45)** Or you can use uv.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=47)** It's much faster using Rust, and Rust is a growing language now alongside Python.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=53)** And Qdrant, that we are going to use is written in Rust and so on.
>
> **[0:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=57)** So the database, enjoy the performance of Rust.
>
> **[1:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=61)** So feel free to follow the notebooks either in the GitHub website or around it locally.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=70)** So here I'm going to use my Visual Studio Code environment powered by Cursor, and we are going to run the code here.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=79)** So this is the simple RAG implementation, the first notebook in our journey.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=85)** We're going to see what is the happy path of using RAG.
>
> **[1:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=89)** We're going to load a small database, we're going to encode some of the columns, and then we will apply the retrieval documentation generation to see the outputs.
>
> **[1:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=101)** To make it a bit clearer, I'm using the rich Python library to make the output stands out and be easier to understand and read using console with a custom theme that works well in dark mode.
>
> **[1:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=117)** First, as we mentioned, we're going to take a simple data, few thousands of rated wines in the CSV file and we going to turn it into records so we can then use it to load the data.
>
> **[2:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=132)** Here are some examples of the data with a name, we have the region, a variety rating, the notes and so on, a few thousands of those.
>
> **[2:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=144)** As you remember, the first step in the indexing, the zero step, is to encode the documents and to put them in a vector database.
>
> **[2:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=152)** So here is our Qdrant database.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=155)** We're going to run it in memory.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=157)** The other option's to run it on disk or remotely in the cloud and so on.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=161)** Here for the simple example we'll use memory.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=166)** And the embedding, the embedding we will use the library from Hugging Face the sentence transformer.
>
> **[2:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=173)** We're going to dive much deeper into it in the second notebook, but for now we're going to load one of the popular models and use it as is.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=182)** We're going to create a collection.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=185)** We're going to call it top wines.
>
> **[3:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=186)** We're going to give it a name.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=188)** The parameters of the vectors are the size, is the size of the embedding model.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=195)** So the encoder here is the one defining how wide is each one of our vector, how many dimensions and we're going to talk a lot about dimensions in the second notebook.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=207)** And we're going to use a distance function.
>
> **[3:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=210)** Well what is the proximity between the vectors using the cosine?
>
> **[3:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=216)** Once we have this definition, we can upload all the vectors into the database.
>
> **[3:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=221)** So we're going to go over each one of the records in our dataset and we're going to encode the notes.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=228)** If you remember, the notes is the long textual part of which one of the records.
>
> **[3:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=236)** And we're going to use that for our encoding and for our semantic search.
>
> **[4:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=241)** Once we finish this upload, it can take about a minute, it depends on the speed of your machine, we're going to see that we have the collection, it's green, it's ready for us to use.
>
> **[4:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=255)** We see that we have about 1,300 vectors, records, that were documents that were uploaded.
>
> **[4:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=262)** We see the vector parameters.
>
> **[4:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=265)** So the dimensions 784 is defined by the encoder.
>
> **[4:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=271)** We're going to ignore now the other parameters, but for now we are ready to do the retrieval.
>
> **[4:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=277)** So here is our user prompt.
>
> **[4:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=279)** Suggest an amazing Malbec wine from Argentina.
>
> **[4:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=285)** So the first step we need to do, we can take this text and we need to encode it.
>
> **[4:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=290)** Now we have a vector.
>
> **[4:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=291)** This vector can be matched and searched to the index that we just created here.
>
> **[5:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=302)** And we can just ask the Qdrant client, please search this collection, this vector.
>
> **[5:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=309)** Please give the top three document that you found.
>
> **[5:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=313)** Here is some code to make it a bit easier to us to see the records.
>
> **[5:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=318)** So here are the records, the name, the region, variety, rating, notes.
>
> **[5:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=323)** Again, it's the longer text so we trim it to show it in this diagram.
>
> **[5:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=328)** and the score of the match.
>
> **[5:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=330)** That is how much the vector of the query is similar to the vector of the record or the notes.
>
> **[5:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=339)** So these are the top three that we found.
>
> **[5:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=341)** So this was the retrieval part.
>
> **[5:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=343)** Documentation is quite simple.
>
> **[5:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=345)** We are going to take the documents and put them as part of the prompt.
>
> **[5:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=350)** But before we do that, let's try to take the generative model, the LLM from OpenAI and ask it the same query of the question without our retrieval code.
>
> **[6:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=362)** So now it's the same prompt.
>
> **[6:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=364)** You are a chatbot, a wine specialist.
>
> **[6:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=366)** Your priority is to help guide users in selecting amazing wines and so on.
>
> **[6:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=371)** Quite simple.
>
> **[6:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=372)** Please recommend me a good wine based on the query of the user, the same Malbec from Argentina.
>
> **[6:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=380)** We're going to call the LLM and look at the reply.
>
> **[6:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=383)** The reply looks okay.
>
> **[6:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=384)** Again, a local Malbec from this valley in Argentina is a good selection.
>
> **[6:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=390)** But maybe I don't have it in my inventory.
>
> **[6:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=395)** Probably there are new wines since the model was trained and so on.
>
> **[6:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=399)** So we want to get better results that match our business requirement using the retrieval results.
>
> **[6:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=406)** So what we're going to do is we'll going to create a search results as a list and we're going to edit as the content to the query.
>
> **[6:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=416)** So it's the same prompt.
>
> **[6:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=418)** You are a wine specialist, our priority to find selecting amazing wines.
>
> **[7:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=423)** They use a prompt and the search result, the retrieval results.
>
> **[7:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=428)** And we can call it.
>
> **[7:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=430)** And when we see now, we're going to see that the recommendation is on the Catena Zapata Argentina vineyard, which is, if you remember from our table, is the most likely match from our inventory, from our menu.
>
> **[7:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=447)** And the recommendation is also good, but also matching the needs of our business.
>
> **[7:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=454)** So as you can see, the simple RAG flow of indexing the documents, of doing the search, and augmenting the prompt to read the results and asking LLM to generate the response gives us a good response that is also aligned with the internal data that we have.
>
> **[7:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=477)** So this is the happy path.
>
> **[7:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=478)** Very quick example of building RAG application.
>
> **[8:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/building-simple-rag-example?u=76281980&t=483)** And now we'll start diving into the different aspect and see why RAG in demo is one thing and when we try to use it into a more real life scenarios and productions, start to work not as good as we wanted, and we need to advance our concept and build something a bit more elaborated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (6), database (5), rag (5), [[Rust (Programming Language)|Rust]] (4), data (4)
> **Env Vars:** rag (5), llm (3), csv (1)
> **CLI Commands:** python (3), make (3), pip (1), find (1)
> **Tools:** github (2), jupyter (1), visual studio (1)
> **Definitions:** is a  (3)
> **Prerequisites:** setup (1), install (1)
> **Cross-References:** we mentioned (1)
> **Analogies:** similar to (1)

#### Issues with simple RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=0)** - Let's understand the main issues that we have with the basic RAG flow that we just saw.
>
> **[0:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=7)** We saw that if we send to the generation model the request without any documents retrieved, we still get an answer.
>
> **[0:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=16)** But this answer is generic and not what we need.
>
> **[0:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=19)** So overall we need to make sure that the retrieval part is working well, that we retrieved all the relevant documents to generate the correct answer for a user.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=31)** So the most sensitive part is the retrieval.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=34)** Let's try to understand what do we mean by retrieval and the concept of recall and precision.
>
> **[0:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=42)** These are common terms in machine learning and artificial intelligence, and we need to understand what we mean here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=49)** This diagram may look overwhelming at the beginning, but we will go over that to understand those concept correctly.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=56)** So we have our knowledge base.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=58)** Knowledge base contains all the documents, hundreds, thousands of documents that we have in the knowledge base.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=64)** And when the user ask us a question, we have a set of relevant documents that we want to retrieve to answer this question.
>
> **[1:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=74)** It's not zero in one.
>
> **[1:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=75)** We have more relevant documents and maybe slightly less relevant, but overall those are the documents that we want our system to retrieve.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=85)** On the other hand, we have a set of documents that the system actually retrieved.
>
> **[1:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=90)** There is some overlap between those retrieved documents and relevant documents, which are the relevant and retrieve documents.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=98)** And this is what we call the recall decision.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=102)** So let's try to understand what you mean by a recall.
>
> **[1:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=105)** Recall is how many of the relevant documents did we retrieve?
>
> **[1:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=111)** That is if there are 10 relevant documents and we retrieved five of them, we have a 50% recall.
>
> **[2:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=120)** And the precision is, some seem to be similar, but it's on the other end of how many of the documents that we retrieved are relevant?
>
> **[2:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=132)** That is, if we retrieved 10 documents and five of them are relevant, it means that we have a 50% precision.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=139)** So if we put this kind of diagram of the use cases that we might have, so we might have low recall or high recall or low precision and high precision.
>
> **[2:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=151)** We will ignore the very bad low and low, low recall and low precision.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=155)** This is usually not happening.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=157)** And of course we can, let's say ignore for now, of course we want to get to the point where all the relevant documents are retrieved, but most of the times we will have this kind of a trade-off between the improving the recall or improving the precision.
>
> **[2:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=174)** That is, if we want to have a perfect recall, it's very simple.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=178)** We can just retrieve all the documents in the knowledge base, therefore we'll retrieve all the relevant documents.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=185)** Maybe we'll have a very, very poor precision because only 1% of the documents are actually relevant, but we get a perfect recall.
>
> **[3:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=193)** On the other end, we can only retrieve one document that we are absolutely sure it's relevant and we'll get a perfect precision.
>
> **[3:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=203)** Of course, it will hurt our recall because maybe there are 10 other documents which are slightly less relevant, but are still relevant, which we missed, and therefore our recall score will be lower.
>
> **[3:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=215)** So there is this kind of a trade-off, if you want to prove one, we're going to hurt the other and the other way around.
>
> **[3:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=221)** But this is a important concept that we think about setting our threshold, that is, what is the minimal proximity that we want to retrieve documents, number of documents we want to retrieve.
>
> **[3:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=233)** So these numbers will affect the balance between the recall precision.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=238)** Of course, all the time we'll try to improve and get to the point where we are here that we have high and high, high recall, high precision, but many times need to live with low precision, which means that the answers will have general or mix replies because of the non-relevant document that we retrieved.
>
> **[4:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=260)** The other end, if we have low recall, we will get only partial replies since some of the relevant documents are missing when they're sent to the generation part.
>
> **[4:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=271)** So overall, we need to understand that this kind of a trade-off.
>
> **[4:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=275)** We need to be careful when we are setting those thresholds of max number of documents.
>
> **[4:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/issues-with-simple-rag?u=76281980&t=281)** And we always need to think how can we improve this retrieval part, which is the core of our RAG application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** rag (2), generic (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), application (1)
> **Definitions:** means that (2), is a  (1)
> **Env Vars:** rag (2)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - let (1)


### 1. Text Encoding Using Embedding Vectors

[↑ Back to Table of Contents](#table-of-contents)

#### Embedding introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=0)** - A core concept in large language models and RAG systems is the way that we encode our input.
>
> **[0:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=7)** If our input is text, we use text encoding.
>
> **[0:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=10)** We call it embedding.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=12)** If you see this diagram, we are using the embedding in this stage where we encode all the documents that we want to retrieve and then we encode the query of the users and then we try to find the match between the queries and the documents so we can retrieve the right documents and generate the right replies.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=36)** To understand how encoding is working, we will use this nice visualization from the "Financial Times" that explains the transformer, which is the core of generative AI, and it will explain us how it works.
>
> **[0:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=51)** So when we get input like text, the machine doesn't read the text, it cannot read the characters and understand them.
>
> **[0:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=59)** We have to turn them into numbers so they can process it.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=63)** The first step will be to take the input and pass it into words or a token.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=73)** For simplicity, each word is a token, but later on we're going to see that some words have multiple tokens in it and so on.
>
> **[1:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=82)** We will use unsupervised method of taking examples, many, many sentences, paragraphs, and documents and let the machine try to find the context of each word when it can appear and when it can't appear.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=100)** And it will create this kind of a list that a word like ours will appear with the word work compared to the word polka, that usually doesn't come with the word work.
>
> **[1:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=113)** Then we take this information, these examples, and we try to calculate a vector of numbers that will represent each one of the words.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=122)** It start randomly and then try to guess the word.
>
> **[2:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=126)** If it got it right, it will increase the weight.
>
> **[2:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=129)** If it got it wrong, it will decrease the weight until it will come up with the best vector representation of a specific word like the word work here.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=141)** It will do it to many, many words and we expect that words that has similar meanings like the word sea or ocean will have similar vectors.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=150)** So most of the values of this vector are similar, but some of them are different because again, there is some difference between those words, the same with football and soccer, I and we, and so on.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=162)** If we take these long vectors and try to compress them to reduce them into two dimension, we can plot them in this way and find words that are close together.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=175)** For example, we can see that the word walk, run and swim, this is a verbs of movement, will be close together and then train, bus and car will be close together because of their transportation meaning and so on.
>
> **[3:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=191)** But it's not enough to find a vector embedding for each ward.
>
> **[3:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=197)** Sometimes we have words that have multiple meanings, depends on the context, and this is why we're going to continue the process and use the, what we call self-attention.
>
> **[3:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=208)** So we're going to see how words around the word affect them, words before, word after, and so on.
>
> **[3:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=216)** And then we can find out that the words like interest can have a specific meaning in the context of liking something like, yeah, I have no interest in politics, but it can also have meaning that is related to interest rate in the context of financial institutions or banks.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=239)** So overall we can have a sentence with the same word twice in different meanings based on the context of the words around it.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=247)** So if we summarize the process, we get input.
>
> **[4:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=250)** The first step is tokenization.
>
> **[4:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=253)** The second step is calculating embedding for each one of the words based on its meaning, based on its position, and then based on its context.
>
> **[4:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=266)** Once we have this information, we can fit it as numbers into the models and start finding similarities and do the large language model generation.
>
> **[4:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=276)** I want to show you another example that will give you some intuition regarding those embedding and what do they mean.
>
> **[4:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=285)** So for that, we'll go to this game of the 20 questions and we'll play the online version of it.
>
> **[4:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=292)** We'll try to see if the game can guess our word.
>
> **[4:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=296)** The word that we'll use is sea, and see if it can find it based on those questions.
>
> **[5:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=302)** So it's classified as a concept.
>
> **[5:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=305)** Do you hold it when you use it?
>
> **[5:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=307)** No.
>
> **[5:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=308)** Do you use it at night?
>
> **[5:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=310)** Sometimes.
>
> **[5:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=311)** Does it usually have four corners?
>
> **[5:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=314)** No.
>
> **[5:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=315)** Is it colorful?
>
> **[5:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=321)** Depends.
>
> **[5:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=322)** Is it an appliance?
>
> **[5:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=323)** No.
>
> **[5:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=325)** Does it have a handle?
>
> **[5:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=326)** No.
>
> **[5:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=327)** Can you make money by selling it?
>
> **[5:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=331)** No.
>
> **[5:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=332)** It's used for communication.
>
> **[5:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=334)** No.
>
> **[5:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=335)** It's larger than microwave.
>
> **[5:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=337)** Yes.
>
> **[5:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=339)** Does it go in your mouth?
>
> **[5:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=341)** No.
>
> **[5:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=342)** Can liquid pass through it?
>
> **[5:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=345)** Depends.
>
> **[5:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=345)** Can it be worn by person? No.
>
> **[5:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=346)** Does it move? Yes.
>
> **[5:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=347)** Does it make it a sound? Yes.
>
> **[5:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=348)** Does it grow over time? No.
>
> **[5:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=349)** Does it stand on two legs? No.
>
> **[5:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=350)** Does it bring joy to people? Yes.
>
> **[5:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=351)** Does it produce heat?
>
> **[5:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=352)** Whew, it depends.
>
> **[5:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=355)** It is guessing it is an ocean.
>
> **[5:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=358)** So we got to, it's almost right because I thought about sea and it guessed it as an ocean.
>
> **[6:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=366)** If we'll summarize what we saw, we can see that basically those questions are the different dimensions of the vector.
>
> **[6:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=377)** Try to come up with questions that if we know the answer to, we can distinguish between words or guessed what it are together.
>
> **[6:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=388)** So these are the dimensions, and yes, no, depends and so on are the values.
>
> **[6:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=394)** Note here that it's almost binary values: yes and no.
>
> **[6:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=399)** Of course we can do the depends and so on, but we can ignore them most of the time because we really don't know the answer for that.
>
> **[6:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=406)** So overall, this is a binary vector.
>
> **[6:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=410)** We will talk later how can we reduce the size of those vectors by using lower values like n scores or binary.
>
> **[7:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=420)** And then at the end of the process, the nearest neighbor was discovered.
>
> **[7:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=425)** Again, I thought about sea, it was ocean, but it's very close.
>
> **[7:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=429)** And the process found the nearest neighbor on this vector.
>
> **[7:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-introduction?u=76281980&t=434)** So I hope that you get some better intuition, understanding how embedding works, how do we calculate it and then we can dive deeper in an example to show how can we use that to improve our RAG application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (16), rag (2), game (2), [[Large Language Models (LLM)|Large language models]] (1), [[Generative AI]] (1)
> **CLI Commands:** find (6), make (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** rag (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - a (1)

#### Hands-on lab: Embedding tokenization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=2)** - To get a better understanding of the embedding concepts we just discussed, let's review the embedding model notebook in a repository.
>
> **[0:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=11)** We will check the OpenAI embedding model and then we'll take two open-source models.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=17)** For the first one, we'll explore the difference between the input and the output embedding, then we will try to take some kind of an improving coder that can learn from the context and that is very useful if you want to improve our retrieval part.
>
> **[0:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=29)** We'll use Rich library to make the input easier to understand, and we'll ignore the warnings.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=36)** So let's start with the OpenAI embedding.
>
> **[0:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=39)** We'll take a sentence, I have no interest in politics, and we call the OpenAI encoder.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=45)** Note that here, we don't have the model here.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=47)** It's we have a client, the client is calling the the endpoint of OpenAI, and we'll get a long list of numbers, that this is the embedding vector of our sentence.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=58)** Let's dive to the end, and we can see that it's using one of their models.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=62)** The text embedding, the three small that we chose, it cost us some money of the input tokens, and there was some latency here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=69)** The small latency and the small cost is the price we need to pay, but I hope that you understand it.
>
> **[1:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=74)** If we look again on our diagram, we have the generation model, the LLM that is generating the output.
>
> **[1:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=82)** Once we have all the documents, this can use GPT from OpenAI or Claude from Anthropic or Gemini from Google, but the embedding model doesn't have to be the same one that we have here.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=92)** There is no relationship between the two.
>
> **[1:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=94)** This embedding model that we're focusing now is encoding the documents that we have and calculating the match between the queries of the users and those documents, and once we find this match, we can take the documents and send them to the generation model.
>
> **[1:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=110)** So this model and that model don't have to be from the same provider or similar in any way.
>
> **[1:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=116)** So this way we're going to use some open-source models here, which are open, therefore we can see what they do and then form their structure and understand better the concept.
>
> **[2:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=126)** So we'll use an open-source model from the Hugging Face Hub using the sentence-transform library.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=131)** We're going to load the model.
>
> **[2:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=132)** This model is one of the popular one, one of the best one.
>
> **[2:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=135)** You can go to the hub and check other models there.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=139)** They will behave quite similarly.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=141)** Each one of them will train on different datasets and might meet different requirement, but this one is a quite good one.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=148)** So the first step is the tokenizer.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=150)** We have two sentences: "I have no interest in politics" and "The bank's interest rate rises."
>
> **[2:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=156)** I chose those two because those are the ones that we had in our authorization a while ago.
>
> **[2:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=160)** And we have the same word, interest, appearing in both of them, but we know that semantic meaning of each one of the sentences is completely different, and we want to see if the embedded will capture that.
>
> **[2:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=173)** We're going to tokenize the first sentence, and we can see that we have "I have no interest in politics," and we have 101, 1045, 2031, and so on.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=185)** Remember this one, the 3047?
>
> **[3:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=187)** This is the word interest that we have in the first sentence.
>
> **[3:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=190)** How do I know that?
>
> **[3:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=191)** If I run it on the second sentence, I can see that the first one, the 101, is similar, although this is I and this is the, we're going to see in a second what does it mean and how did we get the same token?
>
> **[3:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=204)** The same for the last one.
>
> **[3:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=206)** But the only one that is similar between the two is the 3037.
>
> **[3:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=209)** Therefore, I can guess that this is the word interest.
>
> **[3:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=213)** Now we can reverse the process.
>
> **[3:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=215)** The input text is translated in tokens and then the output, when we want to generate a text, we will generate tokens, and the tokens will be translated into words.
>
> **[3:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=225)** So this is the process that we are doing here.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=228)** The second sentence is "The bank's interest rate rises."
>
> **[3:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=233)** Now we can understand the first token and the last tokens are control tokens, beginning and end of the sentence, and the rest are the words.
>
> **[4:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=242)** We can see that most of the time the words are one-to-one, so the word interest is one token.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-tokenization?u=76281980&t=247)** The same for rate and rises and bank, but the position apostrophe and the s are different tokens, which makes sense because they change the meaning of the words, and this is what we want from the embedding to happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (7), [[Microsoft Word|Word]] (4), open-source (3), llm (1), [[Gemini]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** llm (1), gpt (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - to (1)

#### Hands-on lab: Embedding vocabulary
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=2)** - So let's try to see the vocabulary and what are the words that this model was trained on.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=9)** So we're going to ask for the first model and the tokenizer to give us all the vocabulary that it has, all the items.
>
> **[0:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=16)** So we can see that we have 30,522 tokens, and if we randomly check 20 of those, you can see some words, some numbers, some controls, and some suffix, and so on.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=31)** This is a small selection of the tokens that we have in the vocabulary.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=34)** Again, it's quite big, 30,000 tokens and more.
>
> **[0:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=38)** Let's focus on our interest.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=41)** Here we are sorting the items, and we are looking for the word interest, finding its index, and then printing out the words around it.
>
> **[0:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=49)** So with the 3037 is interest, but the 3036 is security, 3035 is queen, and so on.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=56)** So we can see the environments of this word.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=58)** There are many tokens here, but we can see more or less what kind of tokens do we have here, especially if we are focusing with the word interest.
>
> **[1:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=67)** Now let's move to the embedding transformer model.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=70)** After we saw the first step of the tokenization, now we want to see what the model does with those tokens.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=76)** So we can check that the model has a few steps.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=80)** One of them is the transformer, the one that we're going to dive deeper in a second, but also some other steps like pooling and normalization that are used a lot in the planning.
>
> **[1:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=91)** Each model will have different architecture.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=93)** This is what is selected for this model, but I want to focus on the transformer.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=98)** This is the interesting parts.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=100)** I load the transformer by accessing the first model, and if we print it, we can see that the first phase is the embeddings.
>
> **[1:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=110)** We're going to now dive into the embedding part.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=112)** Later on we can see that the encoder will use the self attention to translate the words or the tokens embedding into a sentence embedding.
>
> **[2:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=125)** Okay, so let's focus on the embedding.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=127)** We can see that we have multiple parts in it.
>
> **[2:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=130)** One is the word embedding, which is taking the large vocabulary, the 30,522, and the size of each embedding is the 384, this dimension of the vector that we're going to embed each one of the words.
>
> **[2:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=145)** Then we have the position embedding.
>
> **[2:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=147)** It is a word on the first in the sentence, second sentence, third in sentence, and so on, will have different meanings.
>
> **[2:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=153)** So this is deposition encoding.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=157)** You can see that we can have up to 512 tokens.
>
> **[2:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=160)** So if we feed larger chuck, we will just ignore it.
>
> **[2:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=164)** Therefore, we want to have our chucks smaller.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=167)** 512 tokens it quite a lot, but it's still limited.
>
> **[2:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=171)** And we have a few types of tokens.
>
> **[2:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=173)** We're going to see them later on, the control, the suffix, and then all words.
>
> **[2:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=176)** There are also some technical layers like the layer normalization and dropout that this architecture defined.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=182)** If we check the embedding model, the input tokens, so what it means is that we take the first sentence, we tokenize it, then we check the input ID of each one of those embeddings of the first sentence and the second sentence.
>
> **[3:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=197)** And we can see that we have this tensor, and let's understand what does it mean, those numbers.
>
> **[3:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=204)** We have this kind of a table built from reading the first element, the second element, and the third element of the shape.
>
> **[3:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=212)** The embedding is that we have the text, the text as the batch size, so we can have multiple sentences.
>
> **[3:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=218)** Here we have one sentence.
>
> **[3:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=219)** This is why the batch size is one.
>
> **[3:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=221)** Number of tokens, so the input of this, I have no interest in politics, is eight tokens, as we saw before.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=228)** Second one is nine tokens, and the embedding dimension is 384.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=232)** So each one of the tokens is encoded in a vector the size of 384.
>
> **[3:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=237)** So this is our input.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=239)** If we want to continue and compare those inputs, this table shows the first sentence start, I have no interest in politics, and the second one start, the bank's interest rate rises.
>
> **[4:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=255)** You consider the control token at the beginning and the control token at the end are exactly the same.
>
> **[4:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=261)** And also the word interest, in both inputs, the word interest is encoded with exactly the same vector.
>
> **[4:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=268)** So far we didn't apply any context.
>
> **[4:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=270)** We didn't use the transformer.
>
> **[4:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=272)** We only did a lookup to the word embedding of the tokens.
>
> **[4:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=277)** We don't have the context yet.
>
> **[4:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=279)** So remember this number, the one which is the input token similarity.
>
> **[4:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=284)** We can see some other similarities, but they're quite small, and this is the the one that we care about because it's the same word.
>
> **[4:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=292)** We can load the whole vocabulary.
>
> **[4:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=295)** Consider that we have a metrics of 30,522, all the tokens, and 384, each token vector.
>
> **[5:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=303)** And we're going to use a process called t-SNE that does two-dimension projection of a very large dimension.
>
> **[5:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=312)** So here we are projecting from the 384 into 2 so we can visualize it nicely.
>
> **[5:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=319)** It will take a while based on the speed of your machine.
>
> **[5:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=323)** I will skip quickly to the end of it.
>
> **[5:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=325)** So it took me almost two minutes to calculate that, but now I got the metrics of 30,522, but only 2.
>
> **[5:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=332)** This is the two-dimension projection, and we can take this and create some kind of a nice visualization.
>
> **[5:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=339)** First we will color each one of the tokens differently.
>
> **[5:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=343)** So the control tokens will be in red; the suffix token, the one that start with those pounds, will be in blue; and the words, the whole words will be in green.
>
> **[5:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=352)** This is legend, and then let's create a visualization.
>
> **[5:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=357)** So musical theory here, is we can zoom in and zoom out and see the different tokens.
>
> **[6:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=363)** We can see that here on top we have a bunch of red ones, so all the control are quite similar to one another.
>
> **[6:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=370)** We don't care too much about them. Let's see this area here.
>
> **[6:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=374)** We can see here that we have numbers, but those numbers are special.
>
> **[6:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=378)** Those are four digits number, and they represent years probably, so this is why they are quite similar to one another.
>
> **[6:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=385)** They are together.
>
> **[6:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=386)** We have this strange token, which is not a year.
>
> **[6:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=390)** It's Cromwell and it's close to 16, 12, and so on.
>
> **[6:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=394)** These are the years that Oliver Cromwell was active, but this is why you probably found itself closer to those years.
>
> **[6:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=404)** We can zoom in on different areas and find some word similarity.
>
> **[6:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=409)** So here we have violins and harp and other, and cello and so on, so musical instruments are somewhat together, and the same will be to other clusters of words together.
>
> **[7:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=423)** You are most welcome to explore.
>
> **[7:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=426)** Choose an area and see if you can understand why those words are together.
>
> **[7:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=430)** Most times it will be very easy to understand because of their semantic, which comes from their document's input.
>
> **[7:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=438)** Okay, so now we understand more or less what is the input.
>
> **[7:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-vocabulary?u=76281980&t=441)** It is each word was translated to a vector, and similar words are close together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (20), [[Microsoft Word|Word]] (11), [[Zoom]] (3), [[Security]] (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)
> **CLI Commands:** find (1)
> **Env Vars:** sne (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - so (1)

#### Hands-on lab: Sentence embedding
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=2)** - Now, let's check the output of the embedding model of the sentence level.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=8)** We will check the output encoding.
>
> **[0:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=10)** So now we are giving it the first sentence, and instead of getting eight tokens, we get only one.
>
> **[0:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=15)** This is the encoding of the sentence as a sequence of tokens.
>
> **[0:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=20)** If we ask the token embedding, we can still get each one of the tokens.
>
> **[0:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=25)** And we can see here that we have a tensor of the size eight again.
>
> **[0:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=29)** We can calculate the cosine similarity between the embedding of the first sentence, the second sentence, but now on the output level.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=37)** After the self-attention, the transformer did its work.
>
> **[0:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=42)** And we can visualize it in a similar way to the way that we visualize the previous one.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=47)** Remember, the difference between the previous heatmap and this one is this is the output after the context, while the previous one, where we had one here, was the input level before the context.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=58)** And not surprisingly, we can see that the word interest in the first sentence has a different semantic meaning from the world interest in the second sentence.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=68)** So this is a much lower score than the one that we saw before, which we expected because of the different semantic meaning of the sentence.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=78)** So now, we can calculate the sentence similarity.
>
> **[1:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=82)** So now, we'll ignore the token, so we'll just check the single vector output for each one of the sentences.
>
> **[1:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=88)** So we encode each one of the sentences.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=92)** And we calculate the cosine distance between the two.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=98)** And we will bring this kind of a nice table that will show us what is the similarity between first sentence and the second sentence.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=106)** So this is the function.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=108)** Now let's check the first and second sentence that we had before.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=112)** We can see that "I have no interest in politics" and "The bank's interest rate rises," the word interest appears in both of them, but not surprisingly, the cosine similarity is very, very low, as we expect, as the semantic of the sentences is different.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=127)** Now, if we just take another sentence, "Chase," the name of a bank, "increased its lending fee."
>
> **[2:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=134)** So here we don't have the word bank, we don't have the word interest, nor rate.
>
> **[2:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=140)** And we calculate the two sentences similarity, although no words appear in both of them, we still have a much better cosine similarity between the sentences.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-sentence-embedding?u=76281980&t=150)** If you remember before, we had less than 0.1, now we have almost 0.5.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Tokens]] (3)
> **Versions:** 0.1 (1), 0.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### Hands-on lab: Content embedding
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=2)** - So, so far the improvement that we did when using the open source was to understand better how it works, to save on the speed latency of calling the endpoint, and saving on the cost, but also reducing the size of the vector.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=14)** So, now we have a 384 compared to five times the size, if you're using the OpenAI.
>
> **[0:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=20)** Sometimes bigger is better, sometimes smaller is better, but anyway, it's not much of an improvement overall.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=26)** Now let's check another example of a model that improves on the overall embedding accuracy for the retrieval part.
>
> **[0:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=35)** So we will use two things here.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=37)** One is the bi-encoder.
>
> **[0:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=39)** That means that we can encode different parts of the dataset differently, in the sense, the documents and the queries.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=47)** The second thing is that it will calculate a contextual embedding based on some sample documents.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=53)** This is the best improvement over the naive embedding compared to a more complicated fine tuning process that we can do.
>
> **[1:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=61)** We're going to load our transformers from from the hub.
>
> **[1:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=65)** You can see that we have one transformer for the embedding and one for the tokenizer.
>
> **[1:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=71)** They're not the same.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=72)** But this tokenizer was used to train the data for the transformer and therefore we can use it here.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=80)** The model, it looks different than the model that we saw before.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=84)** The main differences are the first stage that we have here and the second stage here, but the embedding looks quite the same.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=92)** Again, the side of the embedding is a bit bigger, the vocabulary's slightly different.
>
> **[1:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=97)** There is this part here that does the magic of changing the embedding based of the samples, again to minimize the need for fine tuning.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=106)** But overall it looks quite the same.
>
> **[1:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=109)** You can still see what it does.
>
> **[1:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=111)** You can still see the dropout and the linears and the normalization and other things that the architects of this model tried to make those improvements.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=122)** We're going to load a complicated dataset.
>
> **[2:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=125)** It's more complicated because it's in a different domain.
>
> **[2:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=129)** This is a financial opinion mining.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=131)** The context is financial companies, stocks, and so on.
>
> **[2:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=135)** And it has two types of documents.
>
> **[2:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=138)** One, what we call the corpus, and the other one is the queries.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=141)** The queries are the prompt that people need to find a relevant documents because one is larger than the other.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=148)** I mean the documents are usually larger.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=150)** It makes sense to encode them differently.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=155)** We have here the first 100 characters from each one of the documents, a sample of about 10 of them.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=162)** And these are the queries.
>
> **[2:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=164)** As you remember, they're different format because they're shorter, but still they might be more than 100 characters so we count them as well.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=172)** But here, none of them was trained.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=175)** So these are the context that we have.
>
> **[2:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=177)** So the first stage in our improvement of the embedding is to select a sample.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=182)** So we're going to have this prefix for each one of those types.
>
> **[3:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=186)** And we're going to select a sample, the size of 512 documents out of the more than 50,000.
>
> **[3:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=193)** And we'll use that to improve the embedding in the context of our documents.
>
> **[3:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=199)** So we will put all those documents into our GPU or any other, a Torch device.
>
> **[3:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=205)** This is where the deep planning processes will run more efficiently.
>
> **[3:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=210)** And we will go over the 512 documents in bit size of 32, and it will take us a couple of minutes.
>
> **[3:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=216)** You know, we have this kind of a 16 batches of 32 to go over all the documents and calculate the embedding of this batch.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=226)** As we do that, we are modifying the embedding to fit the documents that we fit it.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=232)** This why it takes a bits of a time.
>
> **[3:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=234)** We will wait for it to end.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=238)** When it's over, after about two minutes, we have a dataset embeddings.
>
> **[4:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=243)** The 512 sample documents were calculated into a new embedding that now we can use it in our step two to embed the rest of the documents.
>
> **[4:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=254)** Here we're not going to load all the documents, we're going to select a few of them.
>
> **[4:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=258)** We got 16 documents and 16 queries.
>
> **[4:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=260)** Each one of them will encode before we load it into the vector database using the second step of our model.
>
> **[4:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=267)** So here we are calling the second stage.
>
> **[4:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=271)** We are giving it document's tokens that we calculated here.
>
> **[4:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=275)** And we also passed the dataset embedding that we calculated in the previous stage, in stage one.
>
> **[4:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=285)** At the end of it we have document padding.
>
> **[4:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=288)** We can do the same to the queries.
>
> **[4:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=290)** So which one of the queries will be encoded the same way.
>
> **[4:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=293)** So we have the query tokens and we passed the dataset embedding that we calculated in the first stage, and now we have the query embedded.
>
> **[5:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=301)** So now we can compare what improvement did we get from this first stage where we adapt the embedding to the context of the documents.
>
> **[5:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=310)** We will calculate the embedding of the same documents using the previous model, the general model, without the context.
>
> **[5:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=318)** We'll do the same for the queries.
>
> **[5:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=321)** So now we have the query basic embedding and the doc basic embedding, and we will create a heat map that compares the doc embedding with the query embedding, and we have another heat map of the doc basic embedding and query basic embedding.
>
> **[5:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=335)** And what we expect is to have some improvement in the, this is the basic model.
>
> **[5:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=339)** You can see that most of the documents and queries have a very low similarity, and most of it is blue, except this may be heavier and a few others.
>
> **[5:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=349)** While after the improved model, we can see that many of the queries and the documents have a much better similarities.
>
> **[5:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=355)** Again, this area is still very yellow, so we didn't change much here, but we did have better results where many of the documents and queries are above 0.5, even 0.6.
>
> **[6:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-embedding-content-embedding?u=76281980&t=367)** We shift the embedding to the area of the documents and the queries, therefore the return part using the embedding similarities between queries and documents will be much higher.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (2), [[Tokens]] (2), bi (1), data (1), prompt (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 0.5 (1), 0.6 (1)
> **Env Vars:** gpu (1)
> **Speakers:** - so (1)

#### Embedding notebook summary
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-notebook-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-notebook-summary?u=76281980&t=2)** - So to quickly summarize what did we do, we focused on the embedding part, the embedding model.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-notebook-summary?u=76281980&t=9)** We saw the OpenAI one, we saw the simple open source one, we dived deeper into how it works, and we saw the difference the model can do on the sentence level.
>
> **[0:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/embedding-notebook-summary?u=76281980&t=19)** And we also used an improved model that can learn from the context of some of the documents, improving the ability of the retrieval part to find the matched documents to the queries of the users.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - so (1)


### 2. Document Chunking and Enrichment Strategies

[↑ Back to Table of Contents](#table-of-contents)

#### Chunking introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=0)** - Let's talk about the next sensitive point in the RAG application, how you split documents into chunks.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=8)** If you remember, our application includes the indexing part where we have a set of documents that we want to index semantically to allow the retrieval to find them.
>
> **[0:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=19)** Here is an example of how we did it in our first simple RAG notebook.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=24)** You can see that we are going over all the documents and taking the note aspect of it and using that to encode the documents.
>
> **[0:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=32)** This is a very simple part.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=34)** There is no need to chunk the document.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=37)** The reason for that is because the documents are very simple.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=40)** Here's an example of our document, and we have a short notes part with all the text that we need, but this is not always the case.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=48)** Sometimes we can have documents like this one.
>
> **[0:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=51)** It's a very, very long document with different aspect of it, like we have diagrams and tables like this one and charts that we need to include, and we saw that we have some diagrams and mathematical equations and so on.
>
> **[1:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=71)** So there is a lot of stuff going on here, and we cannot put it just as one chunk into our index, for a few reasons.
>
> **[1:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=77)** Let's see why.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=80)** One of them is, if you remember from our second notebook where we took a look at the embedding model and we had this transformer, and we can see that in transformer, we have the maximum sequence length to be 256.
>
> **[1:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=95)** So if we input into our embedding longer token sequence, the rest will just be ignored.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=103)** Nevertheless, it also makes a lot of sense that we have a very long document, we cannot squeeze it and code it into a single vector because there may be multiple topics in it.
>
> **[1:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=113)** Therefore, we want to split the document into semantic chunks.
>
> **[1:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=118)** So there are quite a few chunking strategies where we have our long document, multiple pages, multiple paragraphs, and we want to split them into chunks.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=128)** So this is an example of how we can split to this document.
>
> **[2:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=132)** We can do that by characters or by tokens.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=136)** A few sentences, few paragraphs, or semantic.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=139)** Semantic will be the part that we'll practice in our next notebook.
>
> **[2:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=144)** But before that, let's look at this nice visualization that give us a sense of what might happen to our documents, this chunk visualization has this long text.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=155)** You can play with it yourself in the link below.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=157)** You can put your text there, but then you can have a few options.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=162)** So one is how long is a chunk?
>
> **[2:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=164)** Here we're talking about number of characters.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=167)** So we have 100 characters.
>
> **[2:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=168)** You can see the document is split into chunks.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=172)** Sometimes it's in the middle of a word, in the middle of a sentence, the middle of a paragraph doesn't look that good.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=178)** But nevertheless, this a strategy we can use.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=180)** We can increase the size.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=182)** We can have 300 characters, and now it looks a bit better.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=187)** But still we have some words that are cut in the middle of sentences and so on.
>
> **[3:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=191)** We can change the strategy to something a bit more intelligent.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=195)** Here, we are using the recursive character.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=198)** So we are going from top to bottom splitting into paragraph sentences and then try to find the best split.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=207)** Here you can see the first paragraph is one chunk.
>
> **[3:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=210)** The second one is almost one chunk.
>
> **[3:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=211)** There is a small reminder.
>
> **[3:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=213)** The third one is divided into two chunks.
>
> **[3:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=216)** We can do it even larger, therefore we might get something which is even nicer.
>
> **[3:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=221)** So now we have 570 characters.
>
> **[3:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=224)** Those two paragraphs are one chunk, second chunk, third chunk, and so on.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=228)** So this is a nice visualization to give us a hint how we can split documents into different chunks based on some parameter.
>
> **[3:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-introduction?u=76281980&t=237)** Now let's see an example of how to use semantic chunking, which has the potential to be the most accurate one as we do the retrieval based on the semantic of each one of those chunks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), rag (2), application (2), [[Representational State Transfer (REST)|Rest]] (1), [[Tokens]] (1)
> **Definitions:** is a  (5), is an  (2)
> **CLI Commands:** find (2)
> **Env Vars:** rag (2)
> **Speakers:** - let (1)

#### Hands-on lab: Semantic chunking
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=0)** - To learn more about how semantic chunking works, let's go over our notebook, the third notebook, semantic chunking.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=8)** We will load a complex dataset very similar to the one that we had in our example.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=14)** Then we're going to apply the statistical chunker on some of the documents.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=18)** Then we're going to add the metadata to the chunks, which is best practice in the RAG application.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=23)** Here there's some visual improvements so we can see the output a bit more easily, and we'll ignore warnings in our notebook.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=30)** So there is a dataset we are loading.
>
> **[0:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=33)** It's coming from the Hugging Face hub.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=36)** It's archive documents, many, many papers on AI, machine learning, LLMs, which as you can see in the presentation before, they're quite complex and hard to index.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=50)** We repeat the dataset, we can see that we have a few columns.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=53)** Mostly we use the title and the content.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=55)** The rest are less relevant.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=56)** These are the where we have the text for our encoding.
>
> **[1:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=61)** If we print out one of the documents, this is exactly the documents that we saw before, the Mamba paper, the first 500 characters.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=69)** We can see the title, the authors, the beginning of the abstract, and so on.
>
> **[1:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=75)** So let's now apply the statistical chunker on it.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=79)** The statistical chunker is based on encoding that we do for the sentences.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=83)** It calculates the encoding, which one of the sentences and whenever it finds some kind of a difference between the sentences, it will create a break point and start a new chunk.
>
> **[1:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=94)** So here we have an encoder.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=96)** We will use the OpenAI encoder.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=98)** Remember that this part, the chunking, is done as a pre-process.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=102)** It's not going to add any latency to the retrieval part.
>
> **[1:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=105)** So we can here decide which kind of encoder we want to use for that.
>
> **[1:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=109)** The best for our use case here, we're going to use this remote one, but we can use any other encoding that meets our requirements.
>
> **[1:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=117)** So when we are creating the semantic chunker, we pass it a few parameters.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=122)** One of them is encoded, the one that we just defined above, but also some limits.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=127)** What is the minimal number of token that we want in the chunk?
>
> **[2:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=129)** What is the maximum number that we want in the chunk?
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=131)** Remember that we have a limit on the encoding part.
>
> **[2:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=134)** Here we're going to ask you to help us with some nice plots and statistic to understand better how it works.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=141)** And let's run it on the documents in index 0 on our dataset.
>
> **[2:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=147)** We are not going to have those plots and statistics when we go over all the dataset, but for the couple of examples that we're going to have here to get some better understanding, we will have them.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=157)** So here is the plot.
>
> **[2:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=158)** Let's jump to the statistics to understand what we see here.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=161)** So overall, this one document was split into 450 subdocuments or sentences.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=167)** Out of those 400 sentences, it created 46 chunks.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=172)** About 40 of them were based on the threshold, the semantic threshold.
>
> **[2:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=176)** Five were based on the maximum size.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=180)** So if we start here, we can see that the first sentences had higher score until we get to a break point where the sentence is very different than the previous sentence.
>
> **[3:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=191)** So this is a threshold that whenever we go under it, we create a chunk.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=196)** There are also a few chunks that were not split based on the threshold because we also have the limit of number of tokens and also those 490, 494, and so on.
>
> **[3:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=206)** Most of the chunks were based on the statistical threshold.
>
> **[3:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=212)** So if we print out those chunks, we can see that we have some characters at the beginning, but each one of those are the sentences, and he decide if to break or not before the sentence.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=226)** So here the break point was here.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=228)** The difference between this sentence and that sentence was below, the similarity score was 0.27, which is below the threshold, and, therefore, we decided to create a chunk, continues here.
>
> **[4:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=242)** So just before we get to figure one, we decide to break and so on.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=247)** So each one of those chunks is set of sentences that are similar semantically, and the breakpoint are where this similarity goes below the threshold.
>
> **[4:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=258)** So let's do it for another document.
>
> **[4:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=261)** So document index 1, quite the same.
>
> **[4:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=264)** Let's see the statistics before.
>
> **[4:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=266)** So now we have 511 sentences, 55 chunks.
>
> **[4:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=272)** You can see that here only 41 of those 55 were based on threshold.
>
> **[4:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=277)** 13 were based on the size.
>
> **[4:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=279)** We can guess that this document is a bit more current.
>
> **[4:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=282)** The sentences are semantically more similar, but still, we have enough breaking point to create our chunks.
>
> **[4:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=290)** So here the abstract point is a good place to start.
>
> **[4:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=294)** Introduction is a good place to break.
>
> **[4:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=297)** So it looks quite similar to what we might have if we had the ability to find the headers in the documents, but here, as you can see, it's based on the actual semantic difference between this sentence and that sentence.
>
> **[5:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=312)** And so now let's go and build the actual chunks.
>
> **[5:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=315)** It's not enough that we have the breaking point.
>
> **[5:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=317)** We want to add some context to the chunks.
>
> **[5:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=319)** So what we do here is we add the title to each one of the chunks.
>
> **[5:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=325)** So this is the text of the chunk, but we prepend the title of the document.
>
> **[5:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=330)** It's a simple way to make sure that we have some context in the chunk.
>
> **[5:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=335)** Later on we're going to see a method which is a bit better to add the context to the the chunks, but this is a simplified way to do that, and I hope it makes sense.
>
> **[5:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=347)** The next part is to add not just the text but also some metadata to the chunk.
>
> **[5:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=353)** As I mentioned before, this is best practice.
>
> **[5:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=354)** When you are building a RAG system, you want to have some metadata that you can use to filter.
>
> **[5:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=358)** You can filter by the publishing year, you can filter by categories, university, whatever is a meaningful filter to the documents.
>
> **[6:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=368)** So here we're going to first add the title.
>
> **[6:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=372)** We also append it to the chunks, but we can also have it as a separate field.
>
> **[6:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=377)** And we're adding pointers to the previous chunk and the next chunk.
>
> **[6:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=381)** This is will give us later on after the retrieval the option in the augmentation part, before we send it to the generation part, to add chunks to the chunks that we retrieve.
>
> **[6:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=393)** So we can decide to add what makes sense to the generation.
>
> **[6:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=397)** If the chunk is too limited, we can also bring the environment of chunks around it.
>
> **[6:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=403)** So this is the final output.
>
> **[6:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=405)** We have the ID, we have the title, of course, the content with the appended title.
>
> **[6:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=413)** Remember, this is the part that will be encoded, so this is the vector that will be used for the semantic similarity, but also the link.
>
> **[7:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=421)** So this one has no link because it's the first one, but so we have the link to the second chunk, and from the second chunk we have the link to the first chunk and so on.
>
> **[7:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=431)** So now we have the metadata, and we can take this metadata and the content and upload it into our vector database.
>
> **[7:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-semantic-chunking?u=76281980&t=440)** We're not going to do that here because the focus of this notebook is on the chunking, but I hope it gave you the understanding how can you apply the semantic chunking, how to enrich the context of the chunk, the text of the chunk, and how to create a simple metadata that will allow you later on after the retrieval to get the parts of the documents that make sense for the generation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (6), [[Statistics]] (3), rag (2), next (2), application (1)
> **Definitions:** is a  (8)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** rag (2)
> **Analogies:** similar to (2)
> **Best Practices:** best practice (2)
> **Versions:** 0.27 (1)
> **Speakers:** - to (1)

#### Chunking overview
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=0)** - The topic of chunking is important and we need to spend a few more minutes talking about it and see what other options we have there.
>
> **[0:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=7)** So we talk about the way to chunk it based on characters and tokens and sentences or paragraphs.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=12)** We saw the example of the notebook with semantic chunking, which is very popular, but we also started to talk about how do we add the context of the document.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=22)** Once we split it into smaller chunk, we might lose.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=24)** import information from the overall document.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=26)** We saw in the previous example how we can add a title to the chunk.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=30)** It's a simple way to make sure that we don't lose the context altogether, so we can have it as part of the metadata.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=36)** We saw the links that we can have for the previous and next document or the section that the chunk is part of.
>
> **[0:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=42)** But we can also use LLM for that.
>
> **[0:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=44)** In the next example, we can see how we can take the chunk, send the document, and how we can generate a short summary of the chunk in the context of the overall document and can continuate it to into the chunk itself so the encoding of the chunk and the context will be richer and more relevant.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=63)** We should also talk a bit about what happens if your document might have diagrams and mathematical equations and tables and charts and this kind of a mixed media.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=73)** In this sense, we can use the LLM as we saw before, but remember that if your documents might have this information, you can have this as part of the encoding.
>
> **[1:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=82)** Therefore you can retrieve those parts, those chunks of the document, and send them to the generation.
>
> **[1:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=88)** The generation model can benefit from that and use that whether to create the answer or to embed it in its answer.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=96)** The overall theme of this course is that you can use LLM in multiple places.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=100)** So it's not only the generation and the encoding.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=103)** You can have different models in each one of them and you can add LLM for the enrichment like we do now, the re-ranking that we do later and so on so.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=112)** The ability to add LLM to the flow of your application, different models that some of them you can fine tune, some of them you can pick and select based on the use case, will make sure that the application works much better.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=127)** So to summarize the chunking model, we have multiple method.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=131)** We talked about the fixed-length, semantical, paragraph-based chunking, which are simpler and faster to calculate, and we can have the standing windows to have overlaps.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=141)** So the encoding can capture the semantic co, the sentence and its surrounding.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=148)** We saw the example of the semantic chunking.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=150)** It's highlighted here because it's quite popular and very powerful, very scalable.
>
> **[2:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=154)** So it can process much more complicated documents than the simple one that we can do with a simpler method above.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=161)** We saw the recursive chunking that try to see the documents overall hierarchy, and they split it in the best way.
>
> **[2:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=168)** We saw individualization, how the output is better this way.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=172)** The next example we're going to see is the context enrichment.
>
> **[2:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=174)** We take the chunks and we enrich them with the overall document context.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=178)** It's good for long documents that have multiple aspects, but still you want to have the overall context to make sure that you retrieve the relevant part when the query comes.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=187)** We saw some examples of multimodal, your tables, images, charts, and so on.
>
> **[3:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=193)** If your documents have this mixed media, you need to have the option to encode it.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=198)** It can be done by sending to the LLM the mixed media and ask you to describe it and then use it for the encoding.
>
> **[3:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=204)** Remember that the generation model might be more powerful and can handle multimodal, but if you don't have it in the individual part, you won't going to get those chunks.
>
> **[3:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=212)** And the last option, going back to the theme that you can have LLM to do many of the parts here, not just to apply some kind of an algorithm.
>
> **[3:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=221)** You will send the document to the LLM and ask it please split this document into chunks.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=228)** Make sure that the chunks are not shorter than 100 tokens and not longer than 500 tokens.
>
> **[3:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=234)** Keep the semantic relevancy and so on.
>
> **[3:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=236)** So you can use in your prompt a lot of the instruction that you might otherwise put as parameters into any of the other algorithms and let the LLM do the splitting for you.
>
> **[4:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/chunking-overview?u=76281980&t=246)** So now let's go and check the next example of how you can enrich your chunks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (9), next (4), [[Tokens]] (3), application (2), [[Metadata]] (1)
> **Env Vars:** llm (9)
> **CLI Commands:** make (4)
> **Cross-References:** in the next (1), as we saw (1), we talked about (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - the (1)

#### Hands-on lab: Contextual retrieval
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=0)** - To better understand the contextual retriever concept, we'll review together the fourth contextual retriever notebook.
>
> **[0:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=6)** We'll load the complex data set and split the document into chunks exactly like what we did in the previous notebook.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=13)** And then we'll generate the context sentence and append it to the chunks.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=17)** We'll use the same visual improvements that we had did before and we'll suppress the warnings to keep the notebook clean.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=26)** Let's load the data set.
>
> **[0:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=28)** This is the same data set that we loaded before from the archive with AI papers, and we'll split the documents into chunks using the OpenAI encoder.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=40)** This is exactly what we did in the previous notebook.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=43)** It'll take a couple of seconds.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=45)** And now we have the first document chunks.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=48)** Let's see the text of the first chunk.
>
> **[0:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=52)** And now we want to generate the context sentence for each one of the chunks from this document.
>
> **[0:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=59)** We'll use anthropic here.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=62)** There are a few reasons for that just because you can use different LLM.
>
> **[1:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=66)** You can mix and match the LLMs based on the use case, the cost, the latency, whatever are the requirements for each one of the steps.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=73)** Please remember that the enrichment that we do for the chunks here, based on the context, is a pre-process.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=79)** It's running on the documents before we load them into the index and they have no impact on the latency for the retrieval part.
>
> **[1:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=86)** So we can use a model which is a bit slower, as long as it is better.
>
> **[1:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=91)** So this is the prompt we're going to give cloud.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=93)** So we are generating the document part, cloud likes this XML tag so we know where the document starts and end.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=102)** And the same regarding the chunk when it starts and end.
>
> **[1:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=105)** And here we have the actual prompt.
>
> **[1:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=107)** Please give a short succinct context to situate this chunk within the overall document for the purpose of improving such retrieval of the chunk.
>
> **[1:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=117)** Please answer only with a succinct context and nothing else.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=122)** And here we have the actual call.
>
> **[2:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=124)** We are recording as the user.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=127)** We're providing the document context and the chunk context.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=131)** And the next reason why we are going to use cloud for that, cloud provide is a prompt caching option.
>
> **[2:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=138)** It's still in better.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=139)** It is very powerful as it is giving you the option to load the document once and generate the context for each one of the chunks without sending the document again and again, it'll save us on time and on the cost.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=155)** So the prompt caching is a very powerful option for this specific contextual enrichment step.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=162)** So let's say that the first chunk context.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=167)** There is the output.
>
> **[2:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=168)** So after we send the above text, this long set of text to the LLM, give us this chunk reduce Mixtral and so on.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=180)** So it gives us a nice summary of this chunk in the context of the document.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=187)** We can do that for another chunk, we use it in the 6 chunk here.
>
> **[3:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=192)** And when we print it, we see that this chunk describe the architecture details, especially the sparse mixture of experts and so on.
>
> **[3:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=200)** So now we can apply this logic to all of our chunks of this document that we're going to go over all the chunks.
>
> **[3:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=209)** We are going to create the chunk text by joining all the different parts of it.
>
> **[3:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=215)** And then we are going to call the situate context above.
>
> **[3:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=218)** And once we have this output, we can append the chunk text and the contextualized text together into the text part of our chunk.
>
> **[3:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=229)** Let's run it. It'll take a few minutes to run.
>
> **[3:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=234)** If you remember, we are basically calling a remote endpoint.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=238)** It's using the prompt caching, but still every call is sequential.
>
> **[4:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=250)** Okay, so it took a bit more than one minute.
>
> **[4:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=253)** This is for one document.
>
> **[4:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=254)** If we have 2000 document, it'll take a bit longer.
>
> **[4:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=257)** But nevertheless, this is a pre-process.
>
> **[4:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=259)** We can run it for a couple of hours as long as we know that our index now is richer.
>
> **[4:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=265)** Using the context, we know that we have a better retrieval performance.
>
> **[4:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=270)** So now we can see the outputs, the chunks.
>
> **[4:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=274)** So this is a text.
>
> **[4:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=275)** And here for each one of the chunks we append into context here and here.
>
> **[4:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-contextual-retrieval?u=76281980&t=282)** So now we can take all the enriched chunks and load them into our vector database using any type of encoder we like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (5), cloud (4), data (3), llm (2), ai (1)
> **Definitions:** is a  (6)
> **Env Vars:** llm (2), xml (1)
> **Speakers:** - to (1)

#### Query document alignment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=0)** - To better understand why do we have problems in our retrieval, we need to dive deeper really into the query document alignment issue.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=8)** So this is the happy path of the query document alignment.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=13)** The user is asking a question.
>
> **[0:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=15)** The document that we indexed has this frequently asked question format, so we have the question and the answer.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=23)** So, how many vacation days can I take each year, which is quite similar to how many vacation days do I have?
>
> **[0:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=30)** And we have the answer.
>
> **[0:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=32)** When we index those documents, we index by the question, then we land in the cluster of the vector index.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=41)** It's a good time to remember that vector databases usually use some kind of approximation for the index.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=48)** Remember that we don't go over each one of documents and we compare their similarity.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=53)** Nevertheless, embedding is a statistical model.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=56)** It's not accurate.
>
> **[0:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=57)** It is always approximation.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=58)** So the document will end in one of the clusters.
>
> **[1:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=61)** And when the user is asking a question, the question will be encoded.
>
> **[1:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=66)** Embedding will lead to the same cluster of the document.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=68)** So this is the happy path.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=69)** This is what we have in mind when we're using semantic search using a vector database.
>
> **[1:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=75)** But in real life it's not so easy.
>
> **[1:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=77)** Usually we have documents which don't have this kind of a question answer format.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=84)** This is a Wikipedia page on one of the topics.
>
> **[1:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=87)** And when we are encoding the document, either as chunks or with context and everything, we might land in one cluster.
>
> **[1:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=95)** That can be much different than the one of the query itself.
>
> **[1:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=99)** It's a different format, different length, different terms, the probability of landing in different cluster and therefore we are not going to retrieve the right document is much higher.
>
> **[1:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=109)** So what do we do?
>
> **[1:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=112)** We have a few options for you solutions.
>
> **[1:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=115)** Some of them are in query time.
>
> **[1:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=118)** We take the query of the user and we modify it.
>
> **[2:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=120)** We can enrich it.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=122)** We can expand it.
>
> **[2:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=123)** So give a few questions that are similar to this question or we can generate a hypothetical document.
>
> **[2:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=130)** We're going to talk a bit more about this hide technique.
>
> **[2:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=133)** The query time improvement are good because they will handle different types of query that the users might send to us without much information in advance, but they add latency to the process.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=148)** So when we get the query, we need to send the query to some model, LLM, and generate those improvements.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=157)** And then we take the output of the first LLM and use that for the retriever itself.
>
> **[2:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=163)** And then the documents are sent to the generation model.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=167)** Overall, it will double the latency and the response time to the user, which is something that we want to avoid.
>
> **[2:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=174)** The other type of solutions is in index time.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=178)** So we are taking the document and before we send it into the index, we will process it.
>
> **[3:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=186)** We already talked about the context enrichment.
>
> **[3:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=189)** So we take the document, we take the chunk, we send it together to an LLM, and we get a concise sentence to describe the context of this chunk within the big document, and we can continuate the context sentence and the chunk text and use that as the encoding.
>
> **[3:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=208)** It can improve the retrieval.
>
> **[3:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=210)** The other option is called hypothetical question.
>
> **[3:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=213)** So before we dive into hypothetical question, let's understand the hypothetical document and method hide.
>
> **[3:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=220)** The idea here is that when we have a query, before we send it to the index, we will generate using an LLM, a document that can answer this question.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=232)** Then we take this hypothetical document and we use that as the encoding text, and this will improve the alignment.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=238)** So instead of a short question, we will have a longer document and the format will be quite similar to the original document and therefore we can find it in the index.
>
> **[4:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=249)** So this is the idea of the hypothetical document, the hide, but just remember, this is query time.
>
> **[4:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=254)** It add to the latency, and we can do a reverse hide, which will do the same on the documents.
>
> **[4:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=261)** So instead of generating documents for query, we are generating queries from documents, the reverse side.
>
> **[4:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=267)** We take the document and we ask the LLM, "Please generate a set of questions that can be answered by this document."
>
> **[4:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=273)** Then we encode the document using this question in the index, and when the user asks a question, we will have the alignment of the index, of the query, and the document.
>
> **[4:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/query-document-alignment?u=76281980&t=282)** So now let's go and check the details of the reverse side using notebook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** llm (5), [[Vector Databases]] (1), [[Semantic Search]] (1), database (1), [[Probability]] (1)
> **Env Vars:** llm (5)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** similar to (3)
> **CLI Commands:** find (1)
> **Speakers:** - to (1)

#### Hands-on lab: Reverse HyDE
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=0)** - So let's see a simple implementation of the reverse HyDE technique.
>
> **[0:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=6)** We will use this notebook with the usual improvement using the rich library and the warning suppression, and we'll start with the implementation of the ReverseHyde class.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=18)** We'll use OpenAI, a text embedding model, the one that we saw in one of our previous notebooks.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=24)** The get_embedding logic. It's quite simple.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=27)** So we called the OpenAI client asking for embedding, create, and the text that we are giving it.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=34)** Then we have the function to generate the reverse HyDE, which is based on the prompt, the prompt to our LM model.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=40)** Given the following chunk, generate n different question that this chunk would be a good answer to.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=47)** Then we provide a chunk, and we ask for multiple questions, and we want it to be enumerated so we can easily pass them.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=55)** And then we call the OpenAI client to the GPT-3.5.
>
> **[1:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=60)** Again, you can choose different LLM models here.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=63)** It doesn't have to be OpenAI.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=64)** We're using the embedding, and the generation's OpenAI.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=68)** As I said multiple times, mix and match as needed.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=73)** And now we can extract the questions from the response by stripping the new lines, removing the numbers.
>
> **[1:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=81)** And we have the function to process the chunks.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=84)** It will go over all the chunks and call the generate_reverse_hyde.
>
> **[1:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=88)** So this here is the class. We'll define it.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=92)** And now we'll load the API key for OpenAI, and we'll provide a few chunks.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=98)** So here are three chunks of documents from Wikipedia.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=102)** It takes a few seconds to process each one of them, but when we print them out, we can see that for the first mitochondrion section, we have those questions, "What is mitochondrion, and which type of organism is it found?" and so on.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=119)** So we have the text, the chunk, and the question that were generated by the LLM.
>
> **[2:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=125)** This next one is about Python and the American Civil War and the question that were generated for this chunk.
>
> **[2:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=133)** So now we have the text and the question, and we can go and create a query.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=139)** "What generates the energy in cell?"
>
> **[2:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=140)** This is what we saw in our presentation before.
>
> **[2:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=143)** Before we answer that, we need to index documents, so we will deal with our quadrant in memory vector database.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=150)** We will create an encoder this time.
>
> **[2:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=153)** The encoder is from the Hugging Face hub.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=155)** And we will generate the collection by providing the embedding, as I mentioned, from our encoders.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=162)** And now we can call to upload the documents.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=166)** So we go over each one of our process chunks, and we will encode the question and provide as part of the payload the actual document.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=175)** Look using the index to our regular database, will use the question.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=180)** This is the basic of HyDE.
>
> **[3:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=183)** So we uploaded all the documents.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=185)** Let's see the status of it.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=187)** So it is ready, and we can start querying that.
>
> **[3:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=190)** So here we have a simple function that does the search and print out after the search the results.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=198)** We'll use that.
>
> **[3:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=199)** We will call using the query and the collection that we just create, and when we check the results of the search, we see that the query, "What generates energy in the cell?"
>
> **[3:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=210)** we get the mitochondrion chunk and with the score of 0.82.
>
> **[3:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=217)** And now to understand if it's better or worse than if we don't have this kind of reverse HyDE technique, let's compare it regular index that we are indexing only in the documents.
>
> **[3:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=230)** So now we going to go over each one of the process chunks, and we'll encode the document instead of the question.
>
> **[4:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=240)** And when we search now, we see that we get the same best match but with a much lower score, only 0.5.
>
> **[4:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=249)** This lower score on the document, only of 0.5, is much worse than the 0.82 that we got from the query using the reverse HyDE.
>
> **[4:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=259)** And this is the benefit of using this technique.
>
> **[4:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reverse-hyde?u=76281980&t=261)** Remember, this is something that is done in the pre-processing, doesn't have any impact on the latency, and improves the retrieval significantly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), prompt (2), llm (2), database (2), api (1)
> **Versions:** 0.82 (2), 0.5 (2), 3.5 (1)
> **Env Vars:** llm (2), gpt (1), api (1)
> **Code Identifiers:** get_embedding (1), generate_reverse_hyde (1)
> **CLI Commands:** python (1)
> **Warnings:** warning (1)
> **Speakers:** - so (1)


### 3. Improving Document Retrieval

[↑ Back to Table of Contents](#table-of-contents)

#### Hybrid search introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=0)** - We talked a lot about the semantic search, and the ability to extract semantic meaning from documents and from queries, and find a match between the two.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=9)** But we also remember that in the past, we used to have other types of search where we searched for keywords and terms, and what we believe.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=17)** And this is the topic of the hybrid search, that if we combine the two methods together, we can increase the performance of our retrieval step.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=26)** So let's look at this diagram, and see what do we mean by the hybrid search.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=30)** So we have our document, the one that we saw before, and we have a query, and we can see that the word "cell" appears both in the query, and in the text multiple times.
>
> **[0:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=42)** And the same for the word "energy."
>
> **[0:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=43)** So we have a good feeling.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=45)** And if we had the ability to search by these terms, we increase the probability of retrieving those documents.
>
> **[0:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=51)** We're going to create two indexes.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=53)** One is the sparse index, the one that we used before when we take the document, send it to an embedding encoder, and takes those vectors and put them in the vector database.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=64)** But at the same time, we take the text, and we'll send it to a sparse encoder.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=70)** The reason why we call it sparse, is because the dense encoder create a vector with hundreds and sometimes even thousands of numbers, while the sparse encoder on the output, few dozens, and even fewer tokens for each one of the documents.
>
> **[1:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=86)** So here we see that encoding that we have for each token in which document and what is the score of this document.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=93)** This score is a calculation of the frequency of this term, and compared to the other terms of this document.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=100)** And what we want to do is to find the set of the most significant representation of this document by those specific terms.
>
> **[1:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=110)** Then, once we have the query of the user, we will send it to the two indexes, and each one of them will retrieve a set of documents, and then we'll send those to, set of documents to a merge step in the augmentation from hiding it, the augmentation step, before we're going to send the top documents from both method to the generation model.
>
> **[2:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=134)** So now let's go and see how we're going to build this same index.
>
> **[2:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=138)** We will use the the PM 25 method, which is a relative new way of calculating the significant terms of a document, and we'll see two ways of merging.
>
> **[2:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hybrid-search-introduction?u=76281980&t=149)** One using weighted score, and one using a re-ranking model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), [[Microsoft Word|Word]] (2), [[Semantic Search]] (1), [[Probability]] (1), database (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Speakers:** - we (1)

#### Hands-on lab: Hybrid search
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=0)** - Here is our notebook about hybrid search.
>
> **[0:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=3)** Let's go over it and see how do we build it, how do we use it?
>
> **[0:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=7)** We have the usual visual improvements and the warning suppression.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=12)** Let's start with the actual sparse index.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=14)** Here we're going to use a library called bm25s.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=17)** It's a Python implementation of the bm25 algorithm.
>
> **[0:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=21)** We're going to build both the tokenizer, we're going to use a Stemmer.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=24)** We're going to talk about it in a second.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=26)** We'll load those Python libraries and we're going to load the chunks of the documents from the AI archive that we used before, after they were already chunked using semantic chunking and the contextual retrieval and all the magic that we did so far.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=41)** If you want to create sparse index, we need a tokenizer.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=45)** This tokenizer will be slightly different than tokenizer that we had in our embedding 'cause here we are searching for words that we know that are common in the documents.
>
> **[0:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=54)** Therefore, we're going to use a Stemmer.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=55)** A Stemmer will remove s and ing and a few other prefix and suffix that we have in our language.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=62)** So we have from multiple words, we can have the same word.
>
> **[1:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=66)** And we're going to also use stop words, which remove words that we don't care about, like and and is and this and things that we don't want to search on.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=76)** Let's see those words.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=78)** So here are the words that are built in into this library" a, an, and, are and so on.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=85)** And we can update that and add other words that we know that are in the text that we don't care about, but for now we're going to use it as it is.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=93)** And now we're going to calculate the tokens from the corpus_text that we have.
>
> **[1:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=99)** We're going to build the vocabulary and we care mostly about those ideas.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=102)** We're going to create the index using the bm25 in memory implementation.
>
> **[1:47](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=107)** Remember that most vector databases also have the sparse vector implementation, so we don't have to run it memory.
>
> **[1:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=114)** You can put it alongside the dense vectors.
>
> **[1:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=117)** And we're going to generate the index based on the corpus.
>
> **[2:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=121)** It's a very quick process.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=122)** We don't have that many documents here, but nevertheless, this is a fast process because the sparse vector are sparse and there are not that many tokens to calculate.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=131)** So let's see, what did we get?
>
> **[2:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=133)** So we're going to review the vocabulary from the tokenizer and we'll search one of the words.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=139)** Again, remember that for my query, we want to know what is the context size in a model, and we're going to focus on the token context and we're going to search it inside of the vocabulary.
>
> **[2:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=149)** And we can see that overall there are almost 1,700 tokens, and our token is token 27.
>
> **[2:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=156)** Remember that tokenizer code and decode, so we can also decode back from the 127 and get the word context again, so this is a two way process.
>
> **[2:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=165)** And now let's see how the sparse index look like.
>
> **[2:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=169)** This is an efficient representation of the sparse vectors, an array with all the scores, each token and the document, and some kind of a mapping between the tokens and their documents.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=182)** If you want to see exactly how we represent a specific token, we're going to focus our token, the word context as we saw before, and we're going to check the indexes inside of this representation and we're going to print it out nicely in a table.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=196)** So let's see how it looks like.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=198)** So remember, context is 127 and we can see that it appears in those 10 or so documents, document zero, two, and so on.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=207)** The most significant document is document 15, when the score of the word context in it is 1.1, but also it appears in 14 in a very close score and so on.
>
> **[3:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=217)** So, we're going to use those scores.
>
> **[3:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=219)** We're going to search for the query.
>
> **[3:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=223)** How do we search?
>
> **[3:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=224)** Here is a query from the previous notebook.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=226)** What is the context size of Mixtral?
>
> **[3:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=228)** We know that we have documents that talk about that.
>
> **[3:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=231)** We're going to tokenize it with the same sparse tokenizer.
>
> **[3:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=234)** Remember that if you want to search the sparse index, you need to use the sparse tokenizer.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=238)** We are not going to update the vocabulary because if we have new words in the query, we don't want to update the index because the words don't appear in the documents.
>
> **[4:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=248)** And we got the 127, which we know is the word context, 128, which is probably the word size, and 15, which is probably the word for Mixtral.
>
> **[4:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=258)** The word of and is were removed as stop words.
>
> **[4:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=262)** If you remember the list that we saw, the word what didn't appear in the documents, therefore it's not in the vocabulary.
>
> **[4:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=268)** And because we don't have it in the vocabulary, it doesn't appear here.
>
> **[4:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=271)** So we only have three tokens, context, size, and Mixtral, and we're going to search it in our index.
>
> **[4:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=279)** And as you can see, it's a very, very quick process.
>
> **[4:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=281)** The index is small, it's very efficient to search it.
>
> **[4:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=284)** We have the top 10 documents.
>
> **[4:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=286)** We see that the first document is document ID two, then 14, then one, and 15.
>
> **[4:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=292)** So we saw those were the documents that were high in the word context, but we also have the what size and Mixtral, so overall from all the query, they have the highest score for the sparse index.
>
> **[5:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=304)** To make it in hybrid, we also need to create a dense index.
>
> **[5:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=307)** So let's now do what we did before.
>
> **[5:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=310)** We're going to use Qdrant client in memory.
>
> **[5:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=313)** We're going to have a dense encoder that will create the vector, the dense vectors of the documents.
>
> **[5:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=320)** And we're going to create a collection using the dense encoder embedding size, and we'll upload all the documents.
>
> **[5:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=328)** It will take a few seconds and we have all our documents there.
>
> **[5:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=332)** And we're going to search it in a very similar way to the way that we search before the dense index.
>
> **[5:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=337)** We have the dense encoder and we search the dense index with the dense query.
>
> **[5:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=342)** And here are the results.
>
> **[5:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=343)** So we already saw those documents.
>
> **[5:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=346)** There are different documents because this is a semantic search.
>
> **[5:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=349)** And here we have ID 15 and ID four.
>
> **[5:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=351)** So can expect the same documents to appear, but different orders and different scores.
>
> **[5:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=356)** Now once we have those two results from the dense index and from the sparse index, we can merge the results.
>
> **[6:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=364)** And the way to do it is to put all the documents together and to attach the score, the dense score, and the sparse score to each one of the documents.
>
> **[6:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=372)** So now we have a list of documents and list of scores.
>
> **[6:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=376)** We can calculate a weighted score from those two scores.
>
> **[6:19](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=379)** And we are going to normalize the scores for each one of them.
>
> **[6:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=382)** And then we're going to create some kind of a weighted score with some alpha where we give only 0.2 to the sparse scores and 0.8 to the dense scores.
>
> **[6:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=392)** And we'll have a single scores to both of them.
>
> **[6:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=395)** Then we can check what are the top documents.
>
> **[6:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=398)** So document 15 and four and so on with the merge score from those two dense and sparse scores.
>
> **[6:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=405)** Now we can take our top document and do what we did before called the generation part using the OpenAI ChatGPT 3.5, and we'll give it the search results from the hybrid search.
>
> **[6:57](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=417)** And here is the response.
>
> **[6:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=418)** We're going to get a good reply based on the improve in the retrieval that is based on this hybrid search option.
>
> **[7:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-hybrid-search?u=76281980&t=426)** Next, we're going to use those two results in our next notebook where we're going to have a bit more sophisticated merging method using re-ranking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (15), [[Microsoft Word|Word]] (10), [[Tokens]] (5), [[Python (Programming Language)|Python]] (2), next (2)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** 1.1 (1), 0.2 (1), 0.8 (1), 3.5 (1)
> **CLI Commands:** python (2), make (1)
> **Code Identifiers:** corpus_text (1)
> **Cross-References:** as we saw (1)
> **Warnings:** warning (1)
> **Speakers:** - here (1)

#### Hands-on lab: Reranking
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=0)** - We saw in the previous hybrid search notebook that we can calculate as as part of documentation step, some weighted score that will merge the documents that coming from the dense vector and from the sparse vector.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=12)** And now we're going to see that maybe we can even use an LLM for that.
>
> **[0:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=15)** So we're not going to use a regular LLM, we're going to use an LLM that was trained to score documents and queries.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=22)** This is called re-ranking.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=24)** So here is our next notebook on re-ranking.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=27)** The idea of the model is very simple.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=30)** We have two inputs, one the query and one the document.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=34)** And we're going to put it through at transformer at the output will be a classifier that will say how much the two inputs are similar in their semantic meaning, and let's go and see how it works.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=46)** So we're going to do the usual visual improvement so we can understand the outputs more easily.
>
> **[0:52](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=52)** And we are going to load a model from the Hugging Face hub.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=56)** This one is a model that is a cross encoder that knows how to take those two inputs together.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=62)** If we print the model, we see the familiar embedding step that we saw before.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=68)** The the what embedding position, embedding token type embedding everything looks very similar to what we saw before, but when we scroll down to the end, we can see that the last layer at the output layer is different.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=80)** It's called the classifier and it output only a single number.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=84)** So the overall transformer will calculate the same process, the same transform that we saw, including embedding and attention, self attention and everything.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=92)** But output will be the similarity number between those two inputs.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=96)** Now we have this model. Let's go and use that.
>
> **[1:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=99)** We are going to load the results from the previous hybrid search.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=103)** So we have all the dense results and the sparse results and we're going to load them to have one long list of documents.
>
> **[1:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=109)** We don't care about the scores that we had from the sparse or the dense index because now we're going to create a better score using our LLM model.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=119)** The cross encoder, this is the query that we used.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=122)** "What is the context size of Mixtral?"
>
> **[2:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=124)** And we are going to generate pairs.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=127)** The pairs are the query and the text of the documents.
>
> **[2:10](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=130)** For each one of the documents that we have from the hybrid search results.
>
> **[2:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=133)** And then we're going to call the cross encoder and create prediction regarding the score.
>
> **[2:20](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=140)** It's a very quick process.
>
> **[2:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=142)** As you can see the model is running here locally.
>
> **[2:25](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=145)** There is no latency to call endpoint.
>
> **[2:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=147)** So the overall experience in terms of latency and will be good.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=150)** And then once we have those outputs, the scores, we can see that the match with the first document is 5.0, the second is 3.3, then the third is 7.1 and so on.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=161)** Some of them are negative, so poor similarity.
>
> **[2:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=163)** And now we can go and ask for the model.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=166)** Please give me the top three documents with a higher score and we can print them nicely in this table.
>
> **[2:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=173)** So this is the first chunk document with ID 2, the score 7.1.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=178)** With that we saw then 15 and 4 still positive and high scores.
>
> **[3:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=183)** And now we can do the usual.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=185)** Let's take those top search results after the re-ranking code, the OpenAI, GPT-3.5 for generation and get the reply from the model.
>
> **[3:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-reranking?u=76281980&t=197)** This time the reply should be better because the set of documents that we gave, the generation model is better, it's more similar to the queries and therefore it should be more aligned with the user query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), llm (4), next (1), [[Hugging Face]] (1)
> **Env Vars:** llm (4), gpt (1)
> **Versions:** 7.1 (2), 5.0 (1), 3.3 (1), 3.5 (1)
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - we (1)

#### Multimodal retrieval introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=0)** - Not always we have simple text as our documents in our knowledge base.
>
> **[0:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=3)** Often, we have images and other complex media, and in this session, we're going to talk about the option to do retrieval on multimodal, mainly on images, and we're going to also talk about quantization, that would allow us to reduce the memory footprint of our embedding in our modals.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=22)** Often when we have documents with images, we might want to use the traditional way of using optical character recognition, or OCR, when we extract the text from the images, and also around the process called the Layout Detection, so when we are chunking the page, we will chunk it in a meaningful way.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=40)** This is a simple way many people use that, and then you can go and use the regular flow that we saw before.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=46)** But in this lesson, we're going to talk about the more advanced and much better.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=50)** The performance is improved dramatically when we use this method, to use an encoding modal that is optimized for images, and some advanced methods of vector databases, like supporting multi-vectors and quantization.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=63)** But overall, the flow is very similar.
>
> **[1:05](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=65)** We just replaced encoder with the image encoder, and configured the database with some advanced configuration.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=72)** The rest will be the same.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=73)** So the user will ask the query, the query will be encoded, the retrieval will go to the images, and the process will continue as before.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=83)** So before we jump to the example, let's talk about quantization.
>
> **[1:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=87)** The reason for quantization is to reduce the memory footprint of our embedding vectors, or our language modals.
>
> **[1:34](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=94)** The process is quite simple.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=96)** That is, we have values that might have higher precision, using maybe 32 bits, or four bytes, or two bytes, or 16 bits, and we can reduce them by converting them to a lower precision.
>
> **[1:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=109)** This process is often not hurting the performance, and if you think about it, even on the extreme binary quantization option, when we have only one bit for each one of the values, zero and one, the example that we saw before regarding a bedding was based on the 20 Questions Game.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=128)** So we saw that we can represent a lot of meaning into only 20 question, and the answers are either yes or no.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=136)** Therefore, presenting semantic meaning of concept into a short vector of 20 and binary quantization, can be very efficient.
>
> **[2:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=144)** But we will, in this example, we'll use this color quantization that reduced from the 32 or from the 16, a B to A.
>
> **[2:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=152)** The overall improvement in this stable is quite clear.
>
> **[2:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=156)** So if we are using a higher precision, the embedding vectors will be much bigger compared to when we apply quantization, it turns color or binary.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=166)** It also apply to the language modal.
>
> **[2:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=168)** We have a few language modal that we downloaded into our local machine, and we maybe want to include them in our application.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=175)** Here we are reducing the size for many, many gigabytes to a few megabytes, or gigabytes.
>
> **[3:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=181)** Therefore, we can even run them locally, and even on a mobile device.
>
> **[3:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=184)** So the benefits are quite impressive, and this is why we're going to talk about it, and apply that in our application.
>
> **[3:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=191)** Just to be clear about the process, so we are converting values from a very wide distribution, looking for the minimum and maximum, but the minimum and maximum might have outliers.
>
> **[3:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=202)** This is why we're going to cut it into the P99 of mean and max, and then we have a function to translate the values into our lower precision.
>
> **[3:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/multimodal-retrieval-introduction?u=76281980&t=210)** Now let's go and see a real life example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[Vector Databases]] (1), database (1), [[Representational State Transfer (REST)|Rest]] (1), game (1)
> **Env Vars:** ocr (1), p99 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - not (1)

#### Hands-on lab: Multimodal PDF retrieval
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=0)** - To see the example of how to index and search image based document, we will go over this notebook, the multimodal PDF.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=8)** We have the same visual improvements, as always.
>
> **[0:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=11)** Now, let's load some PDF.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=14)** We have here a PDF for a manual for a device that I purchased.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=18)** So remember, we're not going to use the text aspect of this PDF because we are ready.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=23)** We might miss a lot of the visual cues that are in the image.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=27)** Therefore we'll just take the PDF and convert it into image.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=31)** We'll do that for all the PDFs in this directory.
>
> **[0:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=35)** I downloaded all the manuals of this device.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=37)** We see that we have a few images here, all of from this user guide.
>
> **[0:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=42)** Let's see a quick view of how it looks.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=45)** So these are the pages. As you can guess, there are some titles and images and explanation.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=50)** Each one of the buttons and options in this device.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=53)** It's a simple example, but it represent nicely the capabilities of the image models.
>
> **[1:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=60)** So now let's say "download the image model", the "ColPali" model.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=64)** We are loading it is usually from the hugging face hub.
>
> **[1:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=71)** Takes a few seconds to download all the parameters of the models.
>
> **[1:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=75)** Okay, so now we have the model and we can start encoding images.
>
> **[1:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=81)** We'll take the first image and from the PDFs that we just converted and we'll create embedding.
>
> **[1:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=87)** It takes a bit of a time 'cause, as you can guess, we are loading the image into the GPU and then we are running the model on it and calculate all the embedding weights.
>
> **[1:37](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=97)** Let's see, what did we get?
>
> **[1:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=98)** So remember, we started to discuss about quantization.
>
> **[1:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=101)** So remember that now we're using the float 16 as the base for our encoding, but let's print it a bit nicer.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=108)** So we create a table and the table will see the shapes of the sample embedding and what does it mean?
>
> **[1:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=114)** So we have a single document, one image.
>
> **[1:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=116)** We have more than 1000 tokens, and vector size is 188.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=122)** Remember, so this is a single image, single document, and we didn't do any chunking.
>
> **[2:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=126)** We just converted into a set of multi vectors, more than 1000, to be exact, and the vector size of each of these vector is 128.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=136)** So now it's time to load it into the database.
>
> **[2:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=138)** Here I'm using this in-memory vector database, but as you can guess, there are a few other options out there, some of them local, some of them remote, and they'll have the same capabilities.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=148)** We create a client, we calculate the vector size, the 128 that we need to create the parameters of our database.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=155)** We defined the concept of multi-vector.
>
> **[2:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=158)** So this is one enhancement to the way that we created vectors before.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=162)** Before, we had, for each chunk, a single vector.
>
> **[2:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=165)** Now, we have a single document that is encoded into a thousand or so vectors and all of them are pointing to the same document.
>
> **[2:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=173)** This is the multi-vector that we're going to create, this database and a few others that support this functionality.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=180)** Next, we are going to do the quantization.
>
> **[3:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=183)** As we discussed before, if we have too many vectors, we take a lot of memory and time to store the data, index the data, search the data.
>
> **[3:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=193)** So we'll create a simple quantization.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=195)** Here, we're using color quantization that we discussed.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=198)** So we're using eight bit instead of 16 bit to represent each one of the values.
>
> **[3:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=204)** We're going to do a sampling to the quantile of 0.99.
>
> **[3:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=208)** So, remember, we don't have the outliers that we might have in a regular distribution.
>
> **[3:33](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=213)** And we also allow the database to put some of the data on this because we're not sure that our machine will be able to handle everything in RAM, although it will improve the performance.
>
> **[3:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=225)** So now we have those definition, it's time to create the collection.
>
> **[3:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=229)** We're giving it a name and the parameters that we just defined, the multi-vector and quantization.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=238)** And this is a quick process.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=239)** We just creating and defining the collection.
>
> **[4:02](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=242)** Now, we need upload, upsert, the images to the vector database.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=247)** Because it's a sensitive process, we can have this kind of a helper function that will do retrieve automatically.
>
> **[4:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=253)** So we are doing this decoration on the regular function of the upsert.
>
> **[4:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=261)** And now it's time to do the actual upsert.
>
> **[4:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=264)** So we're going to have a progress bar to show us where we are.
>
> **[4:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=266)** We calculate how many images overall we need.
>
> **[4:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=269)** We can use batching.
>
> **[4:30](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=270)** This is important because it's a long process and we might have hundreds and thousands of images.
>
> **[4:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=275)** If we do them one by one, we're missing the many of the capabilities of our more than GPUs.
>
> **[4:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=280)** So here I'm using the batch size of four.
>
> **[4:44](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=284)** We go over each one of the documents and we'll do the encoding.
>
> **[4:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=288)** And after the encoding, we will create point and we'll upsert the point into the vector database with some ideas and some payload that will allow us also to retrieve the images later on.
>
> **[5:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=300)** So let's start the process.
>
> **[5:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=301)** This will take a couple of minutes.
>
> **[5:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=315)** Once it is done, we can do the indexing.
>
> **[5:18](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=318)** Remember, it's best practice that when you upload, you will disable the index and when you are done with the upload, you can re-enable and recalculate the indexes.
>
> **[5:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=327)** And let's see, what do we have?
>
> **[5:28](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=328)** So here is our collection. It's green.
>
> **[5:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=332)** We have a few documents, eight documents to be exact.
>
> **[5:36](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=336)** This is the small data set that we have here and all the parameters that we defined, like quantization.
>
> **[5:41](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=341)** We can also see the documents that we have there.
>
> **[5:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=343)** We're using the scroll command.
>
> **[5:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=345)** So we have those documents, the ID that we generated, this document in page three and this document in page four and so on.
>
> **[5:54](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=354)** We might have multiple vectors to one of the pages.
>
> **[6:01](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=361)** And it's time to do the actual search.
>
> **[6:04](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=364)** So overall, we did the indexing.
>
> **[6:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=366)** It seems very, very similar.
>
> **[6:07](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=367)** We just use a different embedding and we had some parameters on the vector database.
>
> **[6:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=372)** Let's do the search.
>
> **[6:13](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=373)** It is also quite similar to what we did before, but the query is, how do I answer the call?
>
> **[6:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=377)** This is a headset that connect to my phone and I can answer a call somehow.
>
> **[6:21](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=381)** Again, I don't know exactly how, that.
>
> **[6:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=383)** Some buttons there.
>
> **[6:24](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=384)** So this will be a query, we'll encode it.
>
> **[6:27](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=387)** Remember that we need to encode it with the same encoder that we encoded the images, let's see.
>
> **[6:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=395)** And when we look on the embedding shape, we can see that we have single query.
>
> **[6:40](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=400)** There are 21 different vectors.
>
> **[6:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=403)** Remember that when we're doing coding of a query, using a regular text embedding, you will have year one.
>
> **[6:49](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=409)** Sometimes, if it's a long text, you might think that maybe it will be per token.
>
> **[6:53](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=413)** But even if I have 1, 2, 3, 6 words in my query, it's encoded into 21 vectors.
>
> **[7:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=420)** Those vectors are representing different aspect, image aspect of this query that I did.
>
> **[7:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=426)** So now I can go and retrieve it from the images in my index, in my database.
>
> **[7:12](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=432)** We'll turn it into a multi-vector query and do the search.
>
> **[7:16](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=436)** Search is very, very quick.
>
> **[7:17](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=437)** Is exactly like the queries that we did before when you calculate the distance between the vectors.
>
> **[7:23](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=443)** And we have those results.
>
> **[7:26](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=446)** So we have the first document, the score is 14 point 28, second is seven.
>
> **[7:32](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=452)** So I can guess that this page is probably the most likely one that will answer my question.
>
> **[7:39](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=459)** Let's see the results, the images, we'll print them out using "matplotlib".
>
> **[7:45](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=465)** So here are the top three images.
>
> **[7:48](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=468)** This is the 14.19.
>
> **[7:51](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=471)** This is probably the best image to send to our generation model.
>
> **[7:55](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=475)** So now let's do that.
>
> **[7:56](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=476)** Let's, let's code the generation model using the retrieve documents.
>
> **[7:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=478)** But this document is an image.
>
> **[8:00](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=480)** We encode the image to the format of the LLM.
>
> **[8:03](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=483)** This is the big image. Now it's encoded in base 64.
>
> **[8:11](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=491)** And we can call cloud 3.5.
>
> **[8:15](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=495)** We'll provide the image, we'll provide the query text and let's see how the reply goes.
>
> **[8:22](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=502)** So according to the image, to answer a call on this headphones, you simply need to click the multifunction button once and so on.
>
> **[8:29](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=509)** So this is, if you see, a diagram.
>
> **[8:31](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=511)** So answer a call, it's click once, exactly what we expected.
>
> **[8:35](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=515)** We can play around and ask a different question.
>
> **[8:38](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=518)** Here I have, what is this? Flashing lights.
>
> **[8:43](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=523)** If it's flashing red and blue, we'll do the same processing code, the query and the light is fleshing red and blue to indicate that a device is in parent mode and so on.
>
> **[8:58](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=538)** So we basically took those images and code them, retrieved them, and we used them to generate replies like a regular rug.
>
> **[9:06](https://www.linkedin.com/learning/advanced-llms-with-retrieval-augmented-generation-rag-practical-projects-for-ai-applications/hands-on-lab-multimodal-pdf-retrieval?u=76281980&t=546)** But instead of text, we have images as the input to a generation model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), [[Search]] (6), data (5), [[Hugging Face]] (1), [[Tokens]] (1)
> **Env Vars:** pdf (5), gpu (1), ram (1), llm (1)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 0.99 (1), 14.19 (1), 3.5 (1)
> **Cross-References:** we discussed (2)
> **Exercise Files:** download the (1)
> **Analogies:** similar to (1)
> **Best Practices:** best practice (1)


## Instructor

- [[Guy Ernest]]
- [[Pragmatic AI Labs]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/guyernest/advanced-rag)

## Skills Covered

- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Path Context

### In [[Become an AI Engineer]]
← [[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]] | **6 of 10** | [[Fine-Tuning for LLMs- from Beginner to Advanced]] →

## Appears In

- [[Become an AI Engineer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced RAG Applications with Vector Databases]] — Artificial Intelligence (AI), Large Language Models (LLM), Retrieval-Augmented Generation (RAG)
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[LLMOps in Practice- A Deep Dive]] — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)