---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-rag-applications-with-vector-databases
url: "https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases"
duration_minutes: 78
duration: 1h 18m
level: Advanced
updated: 10/17/2024
learners: 8856
skills:
  - Python (Programming Language)
  - Vector Databases
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-rag-applications-with-vector-databases-3886256/tree/main"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFonI7LTbFo_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727723235646?e=2147483647&amp;v=beta&amp;t=KcI1L2PD0dAs_AAGyJoMpneLG2Xb_HqAeue6F65UDHM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Developers]]'
  - '[[Explore AI for Data Engineering]]'
  - '[[Master Retrieval-Augmented Generation (RAG)]]'
prev_courses:
  - '[[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]]'
  - '[[GraphRAG Essential Training]]'
  - '[[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]]'
next_courses:
  - '[[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]]'
  - null
  - '[[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]]'
path_nav: '[{"path":"Building Generative AI Skills for Developers","position":5,"total":7,"prev":"LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)","next":"RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance"},{"path":"Explore AI for Data Engineering","position":8,"total":8,"prev":"GraphRAG Essential Training","next":null},{"path":"Master Retrieval-Augmented Generation (RAG)","position":5,"total":7,"prev":"LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)","next":"Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/python-programming-language
  - skill/vector-databases
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20RAG%20Applications%20with%20Vector%20Databases.md)

![Advanced RAG Applications with Vector Databases](https://media.licdn.com/dms/image/v2/D4E0DAQFonI7LTbFo_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727723235646?e=2147483647&amp;v=beta&amp;t=KcI1L2PD0dAs_AAGyJoMpneLG2Xb_HqAeue6F65UDHM)

# Advanced RAG Applications with Vector Databases

> Retrieval-augmented generation (RAG) is everywhere these days, and vector databases are what give them their power. But RAG isn’t as simple as some companies claim, so it can be easy to get overwhelmed. In this course, discover state-of-the-art RAG methods, including how to optimize text-based RAG via chunking, embedding, and metadata usage, and how to conduct basic image search with a vector data

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases) | 1h 18m | Advanced | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [RAG with vector databases: Advanced strategies for AI optimization](#rag-with-vector-databases-advanced-strategies-for-ai-optimization)
  - [What you should know](#what-you-should-know)
  - [Setting up your exercise files](#setting-up-your-exercise-files)
- [**1. Optimizing RAG**](#1-optimizing-rag) (15 videos)
  - [Introduction to preprocessing for RAG](#introduction-to-preprocessing-for-rag)
  - [Chunking considerations](#chunking-considerations)
  - [Chunking examples](#chunking-examples)
  - [Introduction to embeddings](#introduction-to-embeddings)
  - [Embedding examples](#embedding-examples)
  - [Metadata](#metadata)
  - [Demo: Chunking](#demo-chunking)
  - [Demo: Metadata](#demo-metadata)
  - [Demo: Embed and store](#demo-embed-and-store)
  - [Demo: Querying](#demo-querying)
  - [Demo: Adding the LLM](#demo-adding-the-llm)
  - [Challenge: Cite your document sources](#challenge-cite-your-document-sources)
  - [Solution: Cite your document sources](#solution-cite-your-document-sources)
  - [Challenge: Change the chunk size](#challenge-change-the-chunk-size)
  - [Solution: Change the chunk size](#solution-change-the-chunk-size)
- [**2. Image Search with Vector Databases**](#2-image-search-with-vector-databases) (7 videos)
  - [Introduction to vector embeddings for images](#introduction-to-vector-embeddings-for-images)
  - [Vision models 101](#vision-models-101)
  - [Demo: Getting semantic vectors](#demo-getting-semantic-vectors)
  - [Demo: Storing image vectors](#demo-storing-image-vectors)
  - [Demo: Comparing images semantically](#demo-comparing-images-semantically)
  - [Challenge: Find the dog most similar to a cat](#challenge-find-the-dog-most-similar-to-a-cat)
  - [Solution: Find the dog most similar to a cat](#solution-find-the-dog-most-similar-to-a-cat)
- [**3. Multimodal RAG with Vector Databases**](#3-multimodal-rag-with-vector-databases) (7 videos)
  - [Introduction to the types of multimodality](#introduction-to-the-types-of-multimodality)
  - [Ways to do multimodal RAG](#ways-to-do-multimodal-rag)
  - [Introduction to multimodal embedding models](#introduction-to-multimodal-embedding-models)
  - [Demo: Embedding and storing data](#demo-embedding-and-storing-data)
  - [Demo: Query images with text](#demo-query-images-with-text)
  - [Challenge: Find anomalies in your embeddings](#challenge-find-anomalies-in-your-embeddings)
  - [Solution: Find anomalies in your embeddings](#solution-find-anomalies-in-your-embeddings)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [RAG with vector databases: Advanced strategies for AI optimization](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=0)** - [Yujian] Before you know it, every developer will be working with some sort of AI product. Get ahead of the curve by understanding not just how to work with an AI product, but understanding how to build AI [[Microsoft Products|products]]. I've built hundreds of RAG applications and I'm distilling what I've learned about optimizing RAG apps and passing that knowledge onto you. My name is Yujian Tang and I've helped thousands of developers understand, use, and contribute to the development and direction of AI. So if you are ready to master RAG, you've come to the right place. Let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** rag (3)
> **Speakers:** - [yujian] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=0)** - [Instructror] This course assumes you have a conceptual understanding of [[Vector Databases]], embedding models, and [[Large Language Models (LLM)|large language models]]. I also assume you understand the fundamentals of how to write [[Python (Programming Language)|Python]] code. Before we dive into the course, let's review some of these topics and how they're related to what we're about to learn here. We'll start with vector databases. A vector database is a tool that helps you work with [[Unstructured Data]] in the form of vectors. Fun fact, the name vector database is actually a misnomer. Vector databases are not real [[Databases]], but rather compute engines for vector data. Vector data is often referred to as a vector embedding in the context of [[Generative AI]]. And for the purpose of retrieval augmented generation, we will refer to vectors and embeddings as the same thing. These vectors are long series of numbers, typically hundreds or thousands of numbers. The reason we call them vector embeddings is because they're generated by deep [[Neural Networks]]. They come from the second to last layer of the neural network. That layer's output contains all of the information the network has learned without applying the predictive layer. These deep neural networks are what we refer to as embedding models. Embedding models can come in all sorts of different shapes and sizes, as well as work on all sorts of different data types. There are two critical things you need to know about using embedding models and vectors. One, you need to match up the data type and the model type.
>
> **[1:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=96)** For example, you can only use embedding models for images on image data and embedding models for text on text data. Even in multimodal models, which can work on multiple types of data, you must specify which type of input data is being used to produce the bright embeddings. Two, you can only compare vectors of the same size. This means you need to use the same embedding models for vectorization of your input data as well as during the retrieval step of your RAG app. So where do large language models come in? In the context of RAG, LLMs are the interface for interacting with your data. Most LLMs, including [[GPT-4]] are based off of the transformer model. They predict what the most likely next token is, given the current set of [[Tokens]]. Publicly available LLMs are trained on large data sets of publicly available data. This means they don't have access to your data, which is where RAG comes in. You vectorize your data with embedding models, put them into a vector database, and then use an LLM to interface with that data. In a RAG app, the LLM takes in your question, your question is then sent to the embedding model where it's vectorized. Then you search your vector database for similar embeddings and return the relevant results which are passed to the LMS as context. The LLM can now return an answer to you that makes sense based on the retrieved results. When it comes to the software for this course,
>
> **[3:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=188)** we'll be using Python 3.11. Each chapter has its own set of requirements and you should use a clean virtual environment for each. Feel free to use the IDE of your choice, but I'll be using VS Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vector Databases]] (3), [[Large Language Models (LLM)|Large language models]] (2), [[Python (Programming Language)|Python]] (2), [[Neural Networks]] (2), [[Unstructured Data]] (1)
> **Env Vars:** rag (4), llm (3), gpt (1), lms (1), ide (1)
> **CLI Commands:** python (2)
> **Versions:** python 3 (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructror] (1)

#### [Setting up your exercise files](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=0)** - [Instructor] Let's quickly cover how to set up your environment for the exercises in this course. Once you're on the [[GitHub]] repo, click Code, and you'll see multiple options here to clone this repo. Click Copy url to clipboard, and go to your IDE where you can [[Git]] clone the repo. Once you clone the repo, you can also ensure that you're using the right version of [[Python (Programming Language)|Python]], and you should be using Python 3.11. You'll see here that we have multiple chapters, and in each chapter, there is a file here that corresponds to the video and the challenge in that chapter. Along with these, we also have a requirements document for each chapter, and this requirements document contains all of the libraries you need to run that chapter. When you're working with these requirements files, what you should do is spin up a clean virtual environment.
>
> **[1:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=74)** Once you've activated that virtual environment, you want to install all of the libraries in the requirements file, and that's it. Once you install, you're ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[GitHub]] (1), [[Git]] (1)
> **CLI Commands:** python (2), git (1)
> **Exercise Files:** clone the repo (2), github repo (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** ide (1)
> **Versions:** python 3 (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)


### 1. Optimizing RAG

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to preprocessing for RAG](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=0)** - [Instructor] Before we can get into building a RAG app, we have to pre-process the data. In this section, we'll cover three critical components in data, pre-processing for retrieval augmented generation, chunking, embeddings, and [[Metadata]]. Chunking is the process of breaking down big blocks of text into smaller blocks. Embeddings are the vectors that are generated by embedding models. They represent the semantic meaning of some input data in a quantifiable fashion. Metadata is data that gets stored along with embeddings in [[Vector Databases]]. It is critical to building customizable RAG applications. Why do you need to chunk your data? If you think about the way that you process information and overlay that to how machines work, you should get an intuitive understanding of chunking. As humans, we read books or documents, one sentence or paragraph at a time. In other words, we read things in semantically coherent chunks. If you were to try to grab an entire book, it would be nearly impossible. Computers, and in this context, LLMs, work the same way. When working with LLMs you may have heard of something called the context window. The context window of an LLM is the maximum number of [[Tokens]], which you can think of, like words that an LLM can work with at once. When an LLM has a context window of say, 128,000,
>
> **[1:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=97)** like [[GPT-4]] Turbo, you can think to yourself this LLM can hold roughly 128,000 words in short-term memory. The context window is really just a cap. It doesn't represent what the ideal number of words or tokens a model can work with is, and how does this relate to chunking? This gives us a framework to start thinking about how we should chunk our data. The other piece of the puzzle is the type of data that we have. Different types of data require different chunking strategies and approaches. We'll dive deeper into the world of chunking in a later video. As we briefly mentioned in our overview of prior knowledge, embeddings or embedding vectors are just a series of numbers that represent some input data. Embeddings can be used to represent all sorts of input data from text to images or video and even DNA. The important thing to remember about embeddings is that they give us a way to use vector databases to compare data that we couldn't compare before. There are two main types of embeddings, dense embeddings and sparse embeddings. Dense embeddings are embedding vectors where only a few of the values are zero, and dense embeddings are by and large created by machine learning models. Sparse embeddings are embedding vectors where many of the values are zero. A good rule of thumb is that when more than half
>
> **[3:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=191)** of the values in your vector embeddings are zeros, you have a sparse embedding. Sparse embeddings are mostly created by [[Algorithms]]. For the purpose of RAG, we'll mostly work with dense embeddings. The final piece in data pre-processing for RAG is the metadata. Metadata is data that gets stored alongside your embeddings in a vector database. Your metadata is critical to optimizing your RAG application. Metadata can include information about your data itself, as well as information about how the specific data point relates to the larger dataset. When you are building a RAG application, your metadata must include the text that you are vectorizing. The vector database retrieves similar data based on the vector embeddings, but LLMs are not able to directly convert vector embeddings into text. The relevant text must be included in the data point so that the LLM can read it. One of the main uses of metadata in a RAG application is that it's used to filter searches. As we talked about previously, metadata can be processing metadata or metadata about the data itself. Examples of processing metadata can include section title, paragraph number, and chunk location. Examples of data-related metadata can include the embedded data itself, publication date, and the author.
>
> **[4:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=286)** Now that we have an overview of the three pieces of optimizing a RAG app, chunking, embeddings, and metadata, let's dive deeper into how each of these pieces work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (14), [[Vector Databases]] (2), [[Tokens]] (2), [[GPT-4]] (1), [[Algorithms]] (1)
> **Env Vars:** rag (8), llm (5), gpt (1), dna (1)
> **Cross-References:** we talked about (1)
> **Definitions:** in other words (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Chunking considerations](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=0)** - [Instructor] The first pre-processing step to discuss is chunking. Chunking is how we make documents consumable for [[Generative AI]] use cases like RAG. Chunking is the process of splitting up documents into smaller chunks of text. These chunks need to be small enough to be consumable, coherent and contextual, so let's break that down. What makes a chunk consumable? From a technical perspective, a consumable chunk must fit into the context window of your chosen embedding model. On top of that, at least three of these chunks must fit into the context window of your chosen LLM. The number of these chunks that have to fit into your LLM context window is dependent on the top K you've chosen for your vector database retrieval, which we'll touch more on embedding models as well as top K for retrievals and [[Vector Databases]] later. From a common sense perspective. You want to ensure that you can consume or read your chunk in one go. What makes a chunk coherent? A coherent chunk is one that makes sense. If you read the chunk of text and it makes you go, "Huh," that is not a coherent chunk of text. From a technical perspective, you want to ensure that your chunks don't start and stop in the middle of a [[Microsoft Word|word]], clause, or sentence. From a common sense perspective,
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=93)** you want your chunks of text to be sets of complete thoughts. For example, "Curiosity killed the cat" is a coherent chunk, "killed the" is not. The last C of chunking is contextual. What makes a chunk contextual? This one is a little different from the other two. The technical and common sense perspectives of contextual are more or less the same thing. The idea behind contextual chunking is that you get chunks of text that contain all the necessary context to answer a question. For example, "Curiosity killed the cat" may be a coherent chunk, but it is often taken out of context of the full saying, and the full saying is "Curiosity killed the cat, but satisfaction brought it back." If you take things out of context, you may not derive their full meaning. As Stewart Stafford said, "Separate texts from context and all that remains is a con." When it comes to chunking, there are three major considerations to take into account. These are the size of your chunks, how much chunks overlap with each other, and whether or not we should use special characters to mark where to split chunks. Chunk size is a pretty self-explanatory term. The chunk size refers the number of characters in a chunk. Picking your chunk size is largely dependent on the structure of your data,
>
> **[3:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=186)** and we'll look at some examples later. For reference, most paragraphs are about 100 words or 500 characters, and that's a good place to start for your chunk size. Depending on which method you use to chunk your data, your chunk size may be used as a hard limit or just a guideline, more on this later. Much like chunk size, chunk overlap is a relatively self-explanatory term. Chunk overlap refers to the number of characters repeated between consecutive chunks. Why would you want to have overlapping sections between different chunks of data? There's two ways to think about how this helps. First, you can think about chunk overlap as the way to preserve context between chunks. If you have the last sentence or paragraph of the chunk before, you have extra context into the current chunk. Second, you can think about it as a tool to help reinforce the guidelines of chunks being consumable, coherent, and contextual. Special characters. Unfortunately, there is no industry standard on what these are called and how these are referenced, and I couldn't really come up with a better name. But these are characters that you want to split your text up on. These can be used in conjunction with chunk size and chunk overlap to allow you to relax restrictions around chunk size and overlap to create more coherent chunks.
>
> **[4:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=281)** For example, let's say you want to ensure all your splits are in complete sentences, but your chunk sizing the number of characters per chunk doesn't always end on a complete sentence. What do you do? You can use special characters to relax this restriction by allowing your chunks to go oversize and end at the next period, double new line, single new line, or any other special character that you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Vector Databases]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (5), refers to (1)
> **CLI Commands:** cat (3), make (1)
> **Env Vars:** llm (2), rag (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### [Chunking examples](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=0)** - [Instructor] Let's look at some examples of types of texts you may chunk. There are many types of documents that you'll face as you build retrieval augmented generation apps in production. Let's take a look at three common types of documents and how to chunk them. First, we'll look at document data. This is the type of data that you would typically think of as a document, things like research papers, books, or perhaps blogs. Second, question answered transcripts. An example of a Q/A transcript would be something like an AMA that you find on Reddit. You'll need to keep the questions and answers coupled, as well as make sure they are in separate chunks. Third, chat transcripts. Let's start with document style data. Document data is probably the most widely used form of data for [[Information Retrieval]]. This style of data includes things like papers, reports, and documentation. Examples of papers include the research publications that you find on archive, an essay from a writer that you like, or a blog post that you may have on your website. Examples of reports include things like the report that you write for your boss, the news article about the latest news, or a lab report a student writes for class. Examples of documentation include things like the write-up about the latest project your software engineering team is supposed to make, a guide on how to use some machinery,
>
> **[1:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=95)** or API docs for how to use an open source library. One of the defining features of document data is that the text is usually organized in regularly sized blocks. You typically won't find too much variation in the size of a semantically coherent chunk of text within these documents. This type of text data lends itself to easier chunk sizing and chunk overlap choice. Typically, you won't even have to worry too much about splitting on special characters, most of the time you can just split on double new lines. Q/A transcripts can be from things like podcasts, classes, and talks. These transcripts can be pulled from things like your favorite podcast, the lecture you were supposed to attend that you slept through, or the Tech Talks by OSS for AI that you wish you were able to make. The defining features of Q/A transcripts is that they typically have these short-long snippets. Usually, the question asked is short and the answer is longer. Of course, sometimes, that won't be the case, but most of the time, it will be. The other defining characteristic is that Q/A transcripts typically have semantically linked chunks. A question and an answer are semantically linked to each other. Usually, the answer doesn't make sense
>
> **[3:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=188)** without linking to the question. This lends itself to two styles that are actually more important to [[Metadata]] than chunking that we'll touch on later, but the basic idea is that you can store metadata of different chunks to remind the program that they're linked. Examples of chat transcripts include [[Customer Support]], texts and DMs. You may get these transcripts from things like your phone call or instant messaging with text support for your cell phone coverage provider, texts between you and a friend or group chat, and DMs on [[LinkedIn]]. The defining feature of chat transcripts is irregularly sized chunks and unpredictable linking. Unlike Q/A transcripts, you can't use a rule like answers usually follow questions. Sometimes you have the same person sending multiple messages in a row, and these messages are rarely the same size. Unlike document data, you can't rely on regularly sized data, and sometimes messages are a sentence, sometimes a [[Microsoft Word|word]], sometimes a paragraph. In chat transcripts, special characters are especially important. This is where you really need something that separates each message in some way to see who wrote that message. Once again, something to be covered in metadata.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[Information Retrieval]] (1), [[Customer Support]] (1), [[LinkedIn]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4), find (3)
> **Env Vars:** ama (1), api (1), oss (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to embeddings](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=0)** - [Instructor] Now that we've wrapped up chunking, let's cover embeddings. Before vector embeddings, we didn't have a way to compare [[Unstructured Data]]. With embedding models, we do. Embedding models are machine learning models, almost always deep [[Neural Networks]], that turn your text, images, videos, audio, whatever kind of data you have into vectors or vector embeddings. Vectors are the tools we use to quantitatively compare unstructured data. Remember that it's important to use the correct embedding models to embed whatever data you have. In most contexts, that refers to embedding models trained on your data type. For example, using ResNet50 for image embeddings, using Sentence Transformers for your text, or using Whisper for your audio. In this context, we are primarily concerned with embedding text. The rise in popularity of [[Large Language Models (LLM)|large language models]] late in 2022 and all of 2023 showed us that text is one of the most important mediums for AI to work with. As such, there are now hundreds of embedding models specifically for text. You can find a list of these models on the [[Hugging Face]] MTEB Massive Text Embedding Benchmark's leaderboard. That's MTEB, M-T-E-B. If you're working in an extremely specialized domain though,
>
> **[1:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=95)** even MTEB is not a comprehensive list. For example, CSV documents require their own embedding models. And if you think about it, the way the CSVs are set up is extremely different from the way that regular text is set up. In CSVs, commas are used to separate entries or entities. In regular text, commas are used to signal a pause in thought or to separate phrases, clauses, or positives. When it comes to embedding your text for later use, there are many things to think about, but if you take care of these three, the [[Representational State Transfer (REST)|rest]] often fall into line. The three critical considerations in embedding your data is the embedding model itself, what you want to embed, and how to compare your embeddings. Let's look at the three pieces of picking the right model. The three pieces that go into picking an embedding model are embedding size, model size, and training data. First, embedding size. Embedding size is the size of the embedding vector. This is also referred to as the length or the dimensionality of the vector. Remember that vectors are just lists of numbers. These vectors are typically produced by a deep neural network. They're the output of the second to last layer of the network. When you put data into an neural net, each layer learns something about the data, and the final layer takes that information
>
> **[3:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=187)** and makes a prediction or classification. The second to last layer contains all of the information without making a prediction on it. The size of the embedding affects the computational power needed to compare vectors when you use them. It is critical to remember here that only embeddings of the same size can be compared. Second, model size. Much like the size of embeddings, the size of the model you choose also has an effect on computational power. Smaller embedding models are less expensive overall. They're less expensive to use both to create embeddings and once you have the embeddings. Meanwhile, larger models can give you more fine-grained results, which may be necessary depending on what you're doing. One last thing to remember is that embedding models are not always LLMs. While LLMs can be used as embedding models, these are not the same thing. Third is training data. The data that your model is trained on is always important. Different models on the MTEB leaderboard are trained on different datasets. Examples of how the data and the training set can change your model include language, structure, and data size. For example, models trained on Chinese can help you embed data in Chinese, but probably not Arabic.
>
> **[4:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=280)** Models trained on chat style data are better for embedding conversational input than for embedding essays. Let's also look at algorithmic models. These are a special case and these are not neural nets. These are [[Algorithms]] and typically produce a different type of embedding. Examples can include TF-IDF, term frequency inverse document frequency, SPLADE, sparse lexical and expansion models, and BM25, where BM stands for best matching. These algorithms produce binary or sparse embeddings, as we talked about before. Measuring the similarity between these models is also different than the others, but we'll talk about that later. When it comes to picking what you want to embed, there are three main options. You can embed the chunked text, you can embed a portion of the chunk's text, or you can embed the larger chunk or section that your chunk text is part of. At this point, a question naturally arises. If I spent so much time making my chunks good, why would I not just embed them? Once again, because we are working with programmatic methods, these techniques are there to enhance your chunking methods. Large to small refers to a technique where you embed large paragraphs, but store individual senses as the [[Metadata]]. And small to large refers to a technique
>
> **[6:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=375)** where you embed individual sentences but store the large paragraph in the metadata. Remember that vectors are just long lists of numbers. While there are many distance metrics that can be used to compare vectors, there are three main distance calculations, cosine, inner product, and Euclidean. Euclidean distance measures the spatial distance between two vectors. The best way to imagine vectors for Euclidean distance is to imagine the two points in hyperspace that the vectors point at, and then imagine the distance between those two points. The formula for Euclidean distance is the square root of the sum of the difference between each entry. in the two vectors squared. Cosine similarity measures the difference in orientation of two vectors. Unlike Euclidean distance, cosine similarity has us think of the vectors as arrows in hyperspace, where we're measuring is the orientational difference between the two arrows at the origin. This distance metric is the most complicated and computationally expensive distance measure for dense vectors. Cosine similarity is the normalized dot product of two vectors. The formula is the dot product of A and B divided by the magnitude of A times the magnitude of B. Another way to express it
>
> **[7:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=468)** is the sum of the product of each entry in the vectors divided by the product of the square roots of the square of each term in each vector. Inner product or dot product is the simplest of these three measures of similarity. The way to think about this measure is to think about the vectors as arrows and then think about the projection of one vector onto another. We saw this formula earlier in the cosine similarity slide. The formula for inner product is the sum of the product of each entry in the vectors. This is cosine similarity without dividing by the product of the magnitudes. So for sparse or binary vectors, there are two distance metrics that we should know, Hamming distance and Jaccard distance. Hamming distance is measured as the number of points in which two binary vectors are different. And Hamming distance can be measured by first taking an XOR of two vectors and then summing all of the 1s in the result. The other binary distance metric that's good to measure on is Jaccard distance. Jaccard distance is 1 minus the Jaccard similarity. The Jaccard similarity is the intersection of two vectors. Another way to calculate Jaccard distance is the difference of the union of A and B and the intersection of A and B
>
> **[9:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=561)** divided by the union of A and B. If both vectors are 1 in an entry, then that counts as an intersection point. If either vector has a 1, then that point can be included in the union of A and B. A good way to think about Jaccard distance in terms of logical operators for vectors is A or B minus A and B total divided by A or B.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (2), [[Algorithms]] (2), [[Metadata]] (2), [[Neural Networks]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** mteb (4), csv (1), idf (1), splade (1), bm25 (1)
> **Analogies:** for example (3), imagine (3)
> **Definitions:** refers to (3), stands for (1), is a  (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Embedding examples](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=0)** - [Presenter] Let's look at some examples of how you can embed data. There are many ways to embed and there are many things that you can embed. The three primary methods we'll cover for embedding in this section are the basic embeddings, small to big, and big to small, and we'll also briefly discuss non-English examples. The most basic method of embedding is to just straight up embed the chunk. Sometimes this works for your most basic tasks. However, when it comes to advanced RAG use cases and putting things into production, you're going to need something a little more involved. Small to big is a term coined by former [[LlamaIndex]] head of TypeScript and Partnerships, Yi Ding, and he coined it at one of my first events in San Francisco. The idea behind small to big is that you embed a sentence, but you store the whole paragraph as text. Why would you do this? Well, it's good for increased context. Some texts have very short sentences, and it's helpful to retrieve not just the sentence or the one sentence proceeding or following it, but the entire paragraph in which that sentence was used. This is another way to help ensure semantic coherence like we covered in chunking. Big to small is the opposite of small to big. Instead of embedding a sentence and storing a paragraph,
>
> **[1:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=97)** we embed a paragraph and store a sentence. Well, why would we do this? Sometimes sentences themselves don't always make sense, and the tactics of chunking sentences may leave some sentences broken. For example, if we have a period following Mr., then we may have a broken sentence. Embedding a whole paragraph and retrieving all the sentences separately lets us do some post-processing before feeding the chunks to an LLM to ensure that we get the right context. Finally, we're looking at non-English embeddings. Here's a special case. If you're not working with English data, you'll need an embedding model that was trained on non-English data. You have a few options. One of the easiest, but perhaps the not the most efficient or cost-effective methods, is to use an LLM that has multiple language data. Examples include GPT models beyond 3.5, Mixtral, and Queen. If you're looking for a more compute-friendly option, you can search the MTEB leaderboards for models in different languages such as French, Polish, Chinese, and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LlamaIndex]] (1)
> **Env Vars:** llm (2), rag (1), gpt (1), mteb (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### [Metadata](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=0)** - [Instructor] [[Metadata]] is the final piece of what makes [[Vector Databases]] useful. Without storing metadata, we would just be comparing a bunch of numbers. The term metadata encompasses all of the data that gets stored with your vector embeddings. When it comes to retrieval, augmented generation, we definitely need to store the actual text that the vector embedding was generated from, and we can also store many other types of metadata. So what is metadata? Other than the text itself? There are many different types of metadata. You can think of metadata in many different ways. It's the data that isn't the embeddings that you store in your vector database. A lot of this data falls into the category of data that gets stored in traditional [[Databases]], and we'll cover more examples later in this video. You also need to remember that metadata is critical for RAG. It's not just critical for performing basic RAG by providing the text and unvectorized data, but also critical for advanced usage like filtering. I would split metadata into two general types, chunking metadata and non chunking metadata. This categorization is based on where the metadata is coming from. Chunking metadata is metadata that comes out of the chunking process. Examples of chunking metadata include the sentence number, the subtitle, or the section header.
>
> **[1:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=96)** You can think about this type of metadata as the metadata that tells you where in the document the current chunk you're working with comes from. The main usage for this metadata is context and filtering. You can use chunking metadata to understand more about the context of a chunk, such as through the subtitles, as well as filter the chunks. For example, you may want chunks only from a certain section. The other type of metadata is non-chunking metadata. All this means is that the metadata was not produced nor tied to the chunking process. Examples of non-chunking metadata include the author, the last time an entry was updated, or the document title. The main usage for non chunking metadata is for filtering your search. For example, you may only want data that was written by you or updated in the last month. So how can we store metadata? As we mentioned before, a lot of metadata, almost all of the non-chunky metadata is metadata that was traditionally stored in a relational database. So one option is to link to where your metadata was stored. Another option that is more popular for RAG applications is to store your metadata directly in the vector store itself. It's easier and faster to store your metadata directly with your vectors and use it for info
>
> **[3:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=189)** and filtering that way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (31), [[Vector Databases]] (1), [[Databases]] (1)
> **Env Vars:** rag (3)
> **Cross-References:** later in (1), in the last (1), we mentioned (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Chunking](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=0)** - [Instructor] With our data ready, we can work on the first part of our RAG application, chunking. As we mentioned earlier, chunking is the process of breaking large texts up into small, workable pieces. In the first block here, we're going to import three things. The document object, the character text splitter object, and the OS library. The document object is [[LangChain]]'s native way to store objects. We use this to add [[Metadata]] to our text and prepare it for the vector store. The character text splitter object is a LangChain object that can split strings up based on some preset parameters. In our case, we use it for determining chunk size and chunk overlap. The third functional import is the OS library, and we use this for navigating the directory structure of the operating system. Now for the functionality, parsing and chunking the data. First, we make sure that we're using the right folder. In this case, we are using the Big Star Collectibles folder. To access the list of text files within this folder, we use the OS library to get a list of the directory. Next, we create an empty list object to hold all of the chunked up texts that we're going to create, then we start looping through all of the files and chunking them up. So, what do we do in this loop? We start by opening up our file and reading the entire page in as a single string.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=93)** Next, we create a CharacterTextSplitter object. This specific instance is set up to split strings into 128 character chunks with 32 character overlaps, then we use the object's split_text function and pass the string containing our entire file through to get our chunks. The last bit of functionality in the chunking section is to loop through each of these chunked texts and create a document object from each chunk. To ensure that we keep the chunks stored in our vector store, we assign it to the page_content parameter. When you run the cell, you may notice that some of these chunks are larger than the specified chunk size of 128, and we'll address this in one of the challenges later on. Finally, let's take one block of code to just look at the chunk. Looking at the first chunk, we can see the beginnings of the Binaryville text file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (2), [[Metadata]] (1)
> **Code Identifiers:** split_text (1), page_content (1)
> **CLI Commands:** make (1)
> **Env Vars:** rag (1)
> **Cross-References:** we mentioned (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Metadata](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=0)** - [Instructor] This section is about storing [[Metadata]] with our chunk data. We'll start from the exact same place we left off in the last video. There's only a small change to make here. In link chain, metadata is stored within the document object. Last time we stored the chunks in the page content parameter. To store metadata, all we need to do is add a metadata parameter. Metadata is stored as a dictionary. You can define the metadata that you want to store. One of the most common pieces of metadata to store is the title of the document. For this example, we store this under doc title. We'll also store the chunk number. This tells us where in the document the chunk was taken from. Other than adding the metadata parameter to the last co snippet, there's another change to make here as well. We enumerate through the list instead of just looping through it. This is so we can access the chunk number and know where in the document the chunk was taken from. Let's take a look at our page content and metadata. See here that with this file text, we now have the chunk number as well as the title of the document that it came from.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (9)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Embed and store](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=0)** - [Instructor] With our data chunked and some [[Metadata]] saved along in each of the chunked objects, we are ready to embed the data and store it into a vector database. We're working with two new imports here, FAISS and HuggingFaceEmbeddings. FAISS stands for [[Facebook]] AI Similarity Search. This is the library that most popular AI native [[Vector Databases]] are built on, and you'll see that we're importing HuggingFaceEmbeddings from langchain_community. Early on, the [[LangChain]] team built hundreds of integrations for their library, but over time, as LangChain became more popular, this became impossible for their team to maintain, and most of these spun out into the Lang Chain community library, including the HuggingFaceEmbeddings. Picking up from where we left off in the last video, we started by importing the face library from LangChain and the HuggingFaceEmbeddings from the community module. Next, we instantiate the HuggingFaceEmbeddings object as a function. At the time this course is being made, the default embedding model included is all-mpnet-base-v2. This model has 768 dimensions. Remember that only vectors of the same dimensionality can be compared. In the next cell, we create our vector store from the documents we created in the metadata and chunking videos.
>
> **[1:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=94)** We pass in the embedding function we created for all-mpnet-v2, as well as the documents we created in the first two videos. Now that we're done with this section, we've stored our text into our vector database, and in the next step, we'll query our vector database before we add an LLM on top to complete our RAG application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (3), [[Metadata]] (2), [[Facebook]] (1), [[Vector Databases]] (1)
> **Env Vars:** faiss (2), llm (1), rag (1)
> **Cross-References:** in the next (2), in the last (1)
> **Code Identifiers:** langchain_community (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Querying](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=0)** - [Instructor] Querying the vector database is part of what goes on behind the scenes in a RAG application. The LLM queries the vector_store to get some context back to create a response. When we interact with the RAG app, we never see this query. In this video, we're going to take a peek behind the scenes to see what the LLM sees. When we query a vector database, we get some top_k results back. For [[LangChain]] FAISS, the default k is 4, as shown here. The first step to perform a vector_store query in langchain is to take our vector_store and call the as_retriever function on it. This prepares the vector_store to be queried with strings and abstracts out the necessity of turning a string into an embedding and calling a query function directly. Then, we call the invoke function of the retriever and pass a string. The result is the top four results that are in our vector_store as according to the embedding model we defined earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (2)
> **Code Identifiers:** vector_store (5), as_retriever (1)
> **Env Vars:** rag (2), llm (2), faiss (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Adding the LLM](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=0)** - [Instructor] The final part of creating a RAG application on top of our vector store is to add the LLM. For this part, you'll need access to an LLM. You can do this in the form of an API key from OctoAI, OpenAI, or some other LLM provider. Alternatively, you can run your own LLM locally. This course assumes that you are using an [[OpenAI API]] key. We kick off our LLM access by importing our environment variables and loading them using [[Python (Programming Language)|Python]]-dotenv's load_dotenv method. Then, we import OpenAI from langchain_openai, and initialize this as our LLM. Next, we create a prompt template for our chat. The main thing to pay attention to in the prompt creation is that we use it to pass the question and the context via brackets, just like we would with an f-stringing in Python. Once we create a prompt string, we can use the ChatPromptTemplate object from [[LangChain]] to create a prompt template. We need two more imports to create our chain. The RunnablePassthrough object takes a string and lets us treat it as a function by just passing the string through the function. The StrOutputParser object takes the output of the chain and parses it as a string. To create a chain, we start by getting the context and the question using the objects we mentioned earlier. Then, we pass it to the prompt we created
>
> **[1:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=94)** and pass the prompt to the LLM, and finally, pipe the output of the LLM to the StrOutputParser. Once the chain is created, we can get a response by simply invoking the chain. The response will take the queries we saw in the query video, combine them, and return a single string from the given context. Now that we've seen how to build an example, it's time to put your learnings into practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[OpenAI API]] (1), [[LangChain]] (1)
> **Env Vars:** llm (8), api (2), rag (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** load_dotenv (1), langchain_openai (1)
> **Exercise Files:** template (2)
> **Cross-References:** we mentioned (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)

#### [Challenge: Cite your document sources](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=5)** - [Instructor] When we write essays or research papers, we are often asked to cite our sources. When it comes to RAG applications, you should do the same thing. The first challenge from our customizable RAG application is to find a way to cite our sources. Remember when we stored the name of the document as part of the [[Metadata]] in the vector store? This challenge is where that becomes useful. Change the example RAG code to cite the documents. Here's a hint. You can do that with [[Prompt Engineering]]. Good luck and join me in the next video to see how I solve this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** rag (3)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Cite your document sources](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=6)** - [Instructor] All right. Let's take a look at how we can solve this challenge. As we mentioned earlier, the names of the documents are all stored in the vector store via document [[Metadata]]. This means that we can access this information when we retrieve objects from the vector store. We can get our sources via [[Prompt Engineering]] by adding a simple sentence to our prompt. All we have to do to solve this challenge is to tell the llm to cite its sources. And voila, it tells us which documents it found the answer in. Cite your sources.
>
> **[0:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=49)** There it is. This information can be found in the first and second document titled "Our Story" and "What We Do" respectively. Now, let's tackle another challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Prompt Engineering]] (1)
> **Cross-References:** we mentioned (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Challenge: Change the chunk size](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=6)** - [Instructor] When we run the chunking section of the notebook, we can see that there's some warnings produced. Some of the chunks are larger than the specified chunk size. In this challenge, we're going to modify the code slightly so that our chunks stay within the chunk size without enforcing any rules that will break semantic coherence of each chunk. Here's a hint. You can read the code for CharacterTextSplitter to solve this challenge. So go ahead and give this a try and see you in the solution video.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Change the chunk size](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=6)** - [Instructor] When we click into CharacterTextSplitter, we can see that there's two parameters here that are automatically set, separator and is_separator_Reg X. Now we can see that the separator parameter is a double new line. What this means is that even if it goes over the chunk size, if it doesn't see any double new lines, it may not form a new chunk. So if we want to ensure that we are forming chunks around the correct chunk size, what we should do is we should add a separator here and we should define our own custom separator. In this case, we're going to define a new line, a single new line as our own custom separator. And when we run that, we'll see that we have everything in the correct chunk size and the correct chunk overlap.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 2. Image Search with Vector Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to vector embeddings for images](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=0)** - [Instructor] Images are one of the classic [[Unstructured Data]] types. And vector embeddings are the core of what makes it possible to compare images. When it comes to using vector embeddings to compare images, there are two main types of vectors, semantic vectors, and visual vectors. These vectors describe the image in fundamentally different ways. Let's cover how. The first type of vector embedding we can use for comparing images are semantic embeddings. These embedding describe the meaning of the image. The second type of embeddings are visual or pixel embeddings. These encode what the image literally looks like. Semantic embeddings are derived from [[Deep Learning]] models. In any deep learning model, the image data gets passed from the input layer, through a series of hidden layers, and then to an output layer. Usually the output layer outputs some sort of prediction, classification, or segmentation. The second to last layer contains all of the meaning that the model has derived from its processing to arrive at that prediction, and that's what we used as the semantic embedding. The second to last layer captures all of what that image means. These are the vector embeddings that we typically use when we talk about rag applications. The other type of vectors that we talk about
>
> **[1:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=95)** with images are visual or pixel vectors. These are really only vector embeddings in the technical sense. They are also a long list of numbers. And if you're familiar with how image models are trained in [[PyTorch]], you'll remember the images are compressed into a vector as the input to the model. And that's what these visual or pixel vectors are. These vectors capture what the image looks like. Remember, that for rag, we focus on the semantic embeddings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Unstructured Data]] (1), [[PyTorch]] (1)
> **Speakers:** - [instructor] (1)

#### [Vision models 101](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=0)** - [Instructor] In order to understand how machines compare images, we're going to do a crash course of how vision models work. Remember that vision models are just a type of deep neural network. They are deep [[Neural Networks]] that are trained for [[Computer Vision]] tasks, such as classification of images, segmentation, or object detection. Let's go back in time a bit. Back in the 1960s, we got our first set of neural networks. The first version of neural networks were simple. They were modeled as layers of neurons in which each layer was fully connected to the one coming before and after it. As machine learning progressed, we learned that modeling neural networks in different ways gave better results for different types of data. When it comes to vision data, we found that this technique called a convolution was helpful in getting local context and getting machines to decipher images. In 1993, the first paper to use max pooling, a way to collect the output of convolution layers was published. This was the most common type of vision model for nearly 30 years. Then in 2019, 1 year after the original transformers paper, a paper that was on how to use [[Transformer Models]] for language, a new paper on vision transformers came out. Vision transformers took the attention mechanism introduced in the original transformers paper
>
> **[1:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=95)** and applied it to computer vision. So what is a convolutional neural network? The defining architecture of [[Convolutional Neural Networks (CNN)|convolutional neural networks]] is the combination of a convolutional layer and a pooling layer. These two layers help us get context from different places in the image and combine all these local contexts to make sense of the image. Let's take a look at what this looks like visually. Imagine you have a 2D image filled with numbers like the one shown here. This picture shows how a convolution might work. In this case, we are looking at a three by three convolution. Each convolution has a filter, and this filter is learnable, as in it will change depending on how you train the model. The top part of the image shows the result of a convolution, and the bottom part shows how it's done. You take the value of each entry in a convolution and multiply it element wise with each value in the filter. Then you add up all of the values in the resulting square and use that as the result for the square that the convolution is based around in the resulting image. So that's a convolution and this is pooling. Max pooling is a bit less complicated than a convolution. As shown in the image, all you need to do is take the max of a value in a pool
>
> **[3:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=189)** and use that to represent the entire region. In the red region, we have 12, 20, 8, and 12. So we take 20 as the value to represent that region. Today's vision model zeitgeist is vision transformers, derived from the classic transformer model of using an encoder, a decoder, and an attention mechanism on an input sequence, vision transformers takes the inspiration drawn from language and applies it to computer vision. Much like the idea of convolutional filters, vision transformers operate in patches. These patches are N by N squares that each make up a piece of the image. Each of these patches are turned into embeddings, as we talked about earlier in the course. Then these embeddings are put together into the encoder and mixed with the intention mechanism as they are fed into the decoder. Here we see an illustration of how vision transformers work. In the bottom left, we see an image split into nine patches. We take these nine patches and turn them into patch embeddings. These patch embeddings, often combined with a class token, denoted CLS in the diagram, are then combined with a positional encoding and fed into the transformer. The output is then fed into a multilayer perceptron,
>
> **[4:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=284)** also known as a fully connected neural network, denoted as the MLP head in the image, and out comes logits that describe the image, typically some object detection or segmentation type task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (4), [[Computer Vision]] (3), [[Transformer Models]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (1), imagine (1), picture (1)
> **CLI Commands:** make (2)
> **Env Vars:** cls (1), mlp (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Getting semantic vectors](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=0)** - [Instructor] In this video, we're going to get a semantic vector from an image. We'll use the open clip embeddings with link chain as our clip embedding model. We will also use glob to get all of the images in our file path. Next, we load our embedding model and call the embed image function on all of our file paths. Despite the name of the function, this function actually takes a list of URIs for images, and not just a single image itself. Now that we have our embeddings, let's examine our embeddings. Opening up embedding at index zero shows us what a sample embedding looks like. Checking the length of this embedding shows us that each of the embeddings generated from our open clip model has a dimensionality of 1024.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Demo: Storing image vectors](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=0)** - [Instructor] The start of this video should be reminiscent of what we did in our text RAG chapter. We have three imports from [[LangChain]] to cover, Document, FAISS, and OpenCLIPembeddings. The other two imports that we have are glob for dealing with multiple file paths, and base64 so we can convert our image into a base64 string for our LLM later. In our next code block, we start by creating an empty list to hold our documents. Then we define a function that gets our imager coding to prepare for CLIPembeddings. The encode image function takes a file path, opens the path, reads it as bytes and returns a UTF encoded string of the file. Then we loop through each of the paths to the images and create a document from each of the images. The document contains the encoded image and the [[Metadata]] for the document contains the image path. To wrap things up, we store that into a FAISS vector database using the OpenCLIPembeddings as our embedding function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (1), [[Metadata]] (1)
> **Env Vars:** faiss (2), rag (1), llm (1), utf (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Comparing images semantically](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=0)** - [Instructor] Now that we know how to store the data into a vector database, let's compare our images to each other to find the most similar sets of images. We start with where we left off in the last video. The first step here should be familiar. We turn our vector store into a retriever. Once we have a retriever, we can retrieve our images by invoking the retriever. Instead of passing text through, we should pass the encoded string of an image. In this example, we pass the encoded string representing the first cat. We get back the top four resulting images that are most similar to that cat image. As a sanity check, we can see that cat number one is our top results.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (3), find (1)
> **Cross-References:** in the last (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find the dog most similar to a cat](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=5)** - [Instructor] Now that you know how to generate semantic embeddings of images, how to store them and how to retrieve them, it's time to put your skills to the test. The coding challenge for this chapter, it's to find the dog that looks most similar to the cats, at least according to our image embedding model. The basic idea behind this is to find the dog picture that returns the most cat pictures. You can also weight those return values by their total distances or inversely based on rank. Good luck and see you in the Solution Video.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), cat (1)
> **Analogies:** similar to (1), picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Find the dog most similar to a cat](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=5)** - [Instructor] We're looking for the dog that is most similar to cats. So, we have all of our vectors stored in our vector store, we have our retriever. What we do now is we create this path here, which gives us all of the paths of the dog images, then we create a dictionary that will map the paths of the dogs to the paths of the cats in an inversely-weighted order. So, for each of those dog paths, we retrieve the top four images based on the Base64 encoding of that dog image, and then we set this cats_retrieved image to zero, and we loop through this enumerated list of all of the return documents. And if the [[Microsoft Word|word]] cat is in the source returned, then we know that that's a cat image. We add 4 minus I, which is the inverse weight of that image based on where it appears in your top four results to the number of cats retrieved. After we do this calculation, we go through, and we attach to each dog image what its cat score was, and when we look at these scores, we can see that dog number one had the highest score. It had the most similarity to the cat images,
>
> **[1:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=100)** so dog number one has the most similar to cats according to this method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** cat (4)
> **Analogies:** similar to (2)
> **Code Identifiers:** cats_retrieved (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Multimodal RAG with Vector Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the types of multimodality](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=0)** - [Instructor] Let's begin by exploring the answer to this question, what is multimodality? The core idea behind multimodal AI applications is that they deal with multiple types of data. There's a lot of buzz around the term, multimodal, AI right now, but what does it really mean? Let's take a look from the bottom up. The [[Microsoft Word|word]] multimodal comes from multi and modal. Multi meaning many and modal meaning types. The reason why multimodal AI is so popular right now is because it gives AI more human-like power. Humans have a multimodal interface with the world. Think of the senses. We have sight, hearing, taste, touch, and smell. When it comes to AI, the two modalities that are being emulated the most are closest to sight and hearing. While the term, multimodal, is still a highly debated term, some examples of multimodality can be classically agreed upon by the industry. These examples include images and text, images and audio, and video. Notice that these correspond to the sense I mentioned earlier. Sight and sound. Images and texts might both be related to sight, but machines process these as two different kinds of data. While some examples of multimodal data are easier
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=93)** to relate to the idea of human senses, other more contested examples may not be as easy to relate to the idea of human senses. Here are three other examples that fall into what may be referred to as multimodal. PDFs and CSVs, texts and tables, and tables and graphs. These examples all fall into the same category for human senses, sight. However, the way they're structured means they need to be input into machines in a different way. Different machine learning models need to be trained to handle each of these different types of data, and that's why you may occasionally see combinations of data types like these referred to as multimodal data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Speakers:** - [instructor] (1)

#### [Ways to do multimodal RAG](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=0)** - [Instructor] Let's look at some ways we can do multimodal RAG. The basic idea behind multimodal RAG is the same as the basic idea behind multimodal data. So there's two main ways to do multimodal RAG. One, we can use one multimodal model that can handle multiple types of data. Two, we can use multiple models, usually one for each type of data that we want to work with. Let's look at how the ways to do multimodal RAG breakdown. We can use one multimodal embedding model. This will be a model that can process multiple types of data, usually images and text. We can use multiple embedding models and multiple search modes. These will be models for different types of data, and we'll need to route each type of data to the right model for storing the data and searching the data. Third, we can just do a combination of the two ways to do multimodal RAG and use multiple multimodal models. While this is totally acceptable to do, this is extremely uncommon. The canonical way to build a multimodal RAG application is to use a single multimodal model. As we talked about before, multimodal models are models that can handle different types of data. This style of building multimodal RAG has a couple nice advantages. One, you only need one vector store.
>
> **[1:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=95)** Two, you only need one embedding model. Since you're using the same model, each embedding the model produces will have the same dimensionality, so you can compare embeddings of images and text or whatever types of data you're embedding directly. If you're building multimodal RAG natively in this way, you have to call models differently for each data type that you're dealing with. For example, CLIP will have image and text options. However, if you use a framework like [[LangChain]] or [[LlamaIndex]], they will typically handle that for you. The other way to build multimodal RAG applications is to use multiple models. In this case, you would need one model for each data type, you would also need a separate vector store for each model that you use to create embeddings. Remember that only vectors of the same size can be compared. And since these vector embeddings are generated by different models, it's not likely they'll be the same length. Even if they are, it doesn't make sense to compare them because they have different training contexts. Instead of calling different encoding methods of a single model to get vector embeddings, we would route data to different models and route the resulting embeddings to a different vector store depending on its vector type. Even with most frameworks today, this is a manual process because this method of doing multimodal RAG
>
> **[3:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=188)** is extremely uncommon. The final combination method to do multimodal RAG is a spin on the first two methods. It's using multiple multimodal models. Almost no one uses this method in practice, so why would you use this? There's two main reasons to use a setup like this. The first is if you just have so many different types of data, the one multimodal model won't work for you. Maybe you have video, audio, images, table data, and so on and so on. The second reason is if you want to re-rank your vector results, if you want to use models trained on multiple types of different data to effectively get a second opinion. To build this kind of multimodal RAG model, you would route data to different models and vector stores based on their data type. And if you have multiple models handling the same data type for re-ranking, you would route them based on some sort of tagging system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (1), [[LlamaIndex]] (1)
> **Env Vars:** rag (12), clip (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to multimodal embedding models](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=0)** - [Instructor] Let's understand multimodal embedding models. The main highlight of multimodal embedding models is simple. They can embed multiple types of data. Typically, multimodal embedding models will have different functions internally to embed each type of data. This is because embedding each type of data is a different process in and of itself. Sometimes, data requires pre-processing. Often, different parts of the model are trained on and for different types of data. The most common practice for training multimodal embedding models is to train them on pairs of data. Images plus text is the most common pairing of data to train these types of models on. Some examples of multimodal embedding models include CLIP from OpenAI, [[Large Language Models (LLM)|large language models]] themselves that have evolved to become multimodal, such as [[GPT-4|GPT-4o]], also from OpenAI, and LLaVa, a state-of-the-art end-to-end large transformer model that combines an image encoder in Vicuna, an LLM. This model is not from OpenAI. In this chapter, we cover CLIP and GPT-4o, and we use CLIP for embedding because it's free and open source. CLIP stands for Contrastive Language-Image Pretraining. The CLIP model has two encoders,
>
> **[1:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=94)** one for encoding images and one for encoding language or text. Since this is an open source model, publicly available on [[Hugging Face]] and is also state of the art, this model is the most popular multimodal embedding model to date. Let's briefly understand how CLIP works and what the letters mean. C, contrastive. There are many machine learning methods for aligning two modalities. Contrastive learning is one of the most powerful and popular approaches to date. This technique takes pairs of data in the same embedding space and trains both encoders to represent the pairs as closely as possible. At the same time, the model is also incentivized to represent unpaired image/text combos as far as possible. L-I, language-image. The CLIP model takes both text and image as input, and as we talked about earlier, it has a different encoder for each. One point of importance to note here, though, is that although the encoders are separate, they're still both in the same embedding space and the vectors have the same dimensionality. Pretraining, P. The model is pretrained on 400 million pairs of image and text data from the internet. Now that we have an understanding of multimodal embedding models, let's dive into the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Hugging Face]] (1)
> **Env Vars:** clip (7), gpt (2), llm (1)
> **Definitions:** is a  (1), stands for (1), is an  (1)
> **Cross-References:** we talked about (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Embedding and storing data](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980&t=0)** - [Instructor] The code in this video should be very familiar. This is the exact same code that we ran through in chapter 2 to embed and store our images there. Let's briefly review. We're using [[LangChain]] to get our OpenCLIPEmbeddings and storing all of our vectors into FAISS. What we're doing here is we're grabbing all of these images, encoding them into a Base64 encoding for the LLM, creating documents from all of these images, and then using the OpenCLIPEmbeddings along with all the documents to store into the FAISS vector database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (1)
> **Env Vars:** faiss (2), llm (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Query images with text](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=0)** - [Instructor] We're going to pick up right where we left off. So, with our vectors already stored, the first thing we do is create a retriever object out of the vector store. This part should be familiar. This next part will not be as familiar. We need two more imports here, BytesIO and Images. These are for handling byte data and image data. In this code block, we create three functions, a resizing function to feed the data into OpenAI, a function to check if you're in Base64, a function to check if the string is in Base64 and a function to split image and text input. The resizing function takes an input in the form of a Base64 string, and it uses the image and BytesIO library to open that string as an image, resizes the image, saves the resized image and returns that as a Base64-encoded string again. The next function simply checks if you have a Base64 string. The third function takes your series of docs. The next function takes your input documents, checks if you are using an image or a text and splits the data appropriately. The next code block serves to create the prompt for our multimodal RAG app. We have five imports in this section, of which three we have not seen before.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=93)** HumanMessage, this is the type of message that you would expect from a human input. RunnableLambda, which is just like RunnablePassThrough, but it's a function, and ChatOpenAI, which is a way to access an OpenAI model as a chat model. We need to make one function here. This function takes a data dictionary, and this data dictionary comes from this last function that we made up here. It takes that dictionary and it splits the image and text data and formats them into prompts before we turn that into a set of human messages to feed the LLM. Next, we get our foundational model, and the foundational model that we're using is [[GPT-4|GPT-4o]] mini, and then we create a chain. This chain is much like the chain we've created before, except instead of using a RunnablePassThrough string for everything, we use a RunnableLambda to get our context. Next, we will invoke the chain, and we'll ask it to look for a rottweiler in the images. It returns an image that the LLM describes as featuring a rottweiler, and if we look in our docs and we retrieve for the text rottweiler, we see that the top result is dog_5, and dog_5 is indeed a rottweiler.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), rag (1), gpt (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find anomalies in your embeddings](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=6)** - [Instructor] Now that we've seen how to build a multimodal RAG application by taking the images encoding the images, storing them into a vector database and using text with prompts to get an image back and a description of the image back, let's see if we can't find some anomalies in the data as well. When it comes to data, you've probably heard the phrase garbage in, garbage out multiple times. In this case, I challenge you to look through the vector database using the retriever and see where the text and the images may not match up. Note that this will not be just a case of where the text and the images don't match, but also a function of the open clip model itself and the data that it was trained on. And if you find anomalies, there are three things you can do for the anomalies. You can fine tune the embedding model, ensure the data of good quality is of good quality, and use rerankers after you retrieve all of your results. Here's a tip for this challenge. While you can execute the whole RAG chain, you can also do this section without the LM at all. Good luck and see you in the solution video.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Env Vars:** rag (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Find anomalies in your embeddings](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=0)** - [Instructor] All right, welcome to the solution piece. There are quite a few anomalies that you can find. Here, we're going to see two of them. The solution I chose to go with was to take the vector database in its retriever format and just use that directly, bypassing the LLM. So let's look at four examples. Two that show good [[Data Quality]] and two that show an anomaly. So we have this example from before where we saw the Rottweiler, which is dog number five. And that is correct. Here, let's also search with an image. So if we encode the image of the cat, we should get cat_1 and we see that we do get cat_1 back here as the top results. Now let's look for a gray cat with long hair in a field. So that's this cat, that's cat_2. And when we run this, we actually see that dog_5, the Rottweiler, is actually the top results. And we probably need to get a different embedding model or fine tune our embedding model in order to get the right result here. Here, we see golden retriever playing with an orange ball. That's this dog here, dog_2. And we see that our top result is indeed dog_2. And this example, we have golden retriever in a field
>
> **[1:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=97)** with a sunny blurred background, which is dog number four, golden retriever in a field, sunny blurred background. And that actually gives us cat_3, a gray cat on a laptop as our top result. Once again, we see that dog_4 is not in the results, just like with cat_2. So we probably need to fine tune or replace our embedding model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1)
> **CLI Commands:** cat (4), find (1)
> **Env Vars:** llm (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980&t=0)** - [Yujian] Congratulations on finishing this course. You've now put yourself ahead of all of the developers who aren't building rag applications and most of the developers that are. You can find more resources on my [[GitHub]] @ytang07 as well as connecting with me on [[LinkedIn]]. I hope to see all the cool projects you make, and I'll be happy to share the projects you send my way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** github (1)
> **Speakers:** - [yujian] (1)


## Instructor

- [[Yujian Tang]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-rag-applications-with-vector-databases-3886256/tree/main)

## Skills Covered

- Python (Programming Language)
- Vector Databases
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Path Context

### In [[Building Generative AI Skills for Developers]]
← [[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]] | **5 of 7** | [[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]] →

### In [[Explore AI for Data Engineering]]
← [[GraphRAG Essential Training]] | **8 of 8**

### In [[Master Retrieval-Augmented Generation (RAG)]]
← [[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]] | **5 of 7** | [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] →

## Appears In

- [[Building Generative AI Skills for Developers]]
- [[Explore AI for Data Engineering]]
- [[Master Retrieval-Augmented Generation (RAG)]]

## Related Courses

_Courses sharing skills:_

- [[Introduction To Ai Native Vector Databases]] — Artificial Intelligence (AI), Large Language Models (LLM), Vector Databases
- [[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG), Vector Databases
- [[Advanced LLMs with Retrieval Augmented Generation (RAG)- Practical Projects for AI Applications]] — Artificial Intelligence (AI), Large Language Models (LLM), Retrieval-Augmented Generation (RAG)
- [[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]] — Artificial Intelligence (AI), Large Language Models (LLM), Vector Databases
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)

---

[↑ Back to top](#)