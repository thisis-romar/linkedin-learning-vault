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
created: 2026-04-21
---

![Advanced RAG Applications with Vector Databases](https://media.licdn.com/dms/image/v2/D4E0DAQFonI7LTbFo_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727723235646?e=2147483647&amp;v=beta&amp;t=KcI1L2PD0dAs_AAGyJoMpneLG2Xb_HqAeue6F65UDHM)

# Advanced RAG Applications with Vector Databases

> Retrieval-augmented generation (RAG) is everywhere these days, and vector databases are what give them their power. But RAG isn’t as simple as some companies claim, so it can be easy to get overwhelmed. In this course, discover state-of-the-art RAG methods, including how to optimize text-based RAG via chunking, embedding, and metadata usage, and how to conduct basic image search with a vector data

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases) | 1h 18m | Advanced | 9K learners
> [Jump to Path Context ↓](#path-context)

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

## Table of Contents

### Introduction

#### RAG with vector databases: Advanced strategies for AI optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=0)** - [Yujian] Before you know it, every developer will be working with some sort of AI product.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=5)** Get ahead of the curve by understanding not just how to work with an AI product, but understanding how to build AI products.
>
> **[0:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=13)** I've built hundreds of RAG applications and I'm distilling what I've learned about optimizing RAG apps and passing that knowledge onto you.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=21)** My name is Yujian Tang and I've helped thousands of developers understand, use, and contribute to the development and direction of AI.
>
> **[0:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=29)** So if you are ready to master RAG, you've come to the right place.
>
> **[0:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/rag-with-vector-databases-advanced-strategies-for-ai-optimization?u=76281980&t=32)** Let's jump in.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3)
> **Code Keywords:** let (1)
> **Speakers:** - [yujian] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=0)** - [Instructror] This course assumes you have a conceptual understanding of vector databases, embedding models, and large language models.
>
> **[0:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=7)** I also assume you understand the fundamentals of how to write Python code.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=12)** Before we dive into the course, let's review some of these topics and how they're related to what we're about to learn here.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=21)** We'll start with vector databases.
>
> **[0:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=23)** A vector database is a tool that helps you work with unstructured data in the form of vectors.
>
> **[0:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=30)** Fun fact, the name vector database is actually a misnomer.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=34)** Vector databases are not real databases, but rather compute engines for vector data.
>
> **[0:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=41)** Vector data is often referred to as a vector embedding in the context of Generative AI.
>
> **[0:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=46)** And for the purpose of retrieval augmented generation, we will refer to vectors and embeddings as the same thing.
>
> **[0:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=54)** These vectors are long series of numbers, typically hundreds or thousands of numbers.
>
> **[0:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=59)** The reason we call them vector embeddings is because they're generated by deep neural networks.
>
> **[1:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=64)** They come from the second to last layer of the neural network.
>
> **[1:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=67)** That layer's output contains all of the information the network has learned without applying the predictive layer.
>
> **[1:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=74)** These deep neural networks are what we refer to as embedding models.
>
> **[1:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=79)** Embedding models can come in all sorts of different shapes and sizes, as well as work on all sorts of different data types.
>
> **[1:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=87)** There are two critical things you need to know about using embedding models and vectors.
>
> **[1:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=92)** One, you need to match up the data type and the model type.
>
> **[1:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=96)** For example, you can only use embedding models for images on image data and embedding models for text on text data.
>
> **[1:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=104)** Even in multimodal models, which can work on multiple types of data, you must specify which type of input data is being used to produce the bright embeddings.
>
> **[1:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=114)** Two, you can only compare vectors of the same size.
>
> **[1:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=118)** This means you need to use the same embedding models for vectorization of your input data as well as during the retrieval step of your RAG app.
>
> **[2:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=128)** So where do large language models come in?
>
> **[2:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=130)** In the context of RAG, LLMs are the interface for interacting with your data.
>
> **[2:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=136)** Most LLMs, including GPT-4 are based off of the transformer model.
>
> **[2:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=141)** They predict what the most likely next token is, given the current set of tokens.
>
> **[2:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=148)** Publicly available LLMs are trained on large data sets of publicly available data.
>
> **[2:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=153)** This means they don't have access to your data, which is where RAG comes in.
>
> **[2:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=159)** You vectorize your data with embedding models, put them into a vector database, and then use an LLM to interface with that data.
>
> **[2:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=167)** In a RAG app, the LLM takes in your question, your question is then sent to the embedding model where it's vectorized.
>
> **[2:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=173)** Then you search your vector database for similar embeddings and return the relevant results which are passed to the LMS as context.
>
> **[3:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=181)** The LLM can now return an answer to you that makes sense based on the retrieved results.
>
> **[3:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=186)** When it comes to the software for this course, we'll be using Python 3.11.
>
> **[3:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=191)** Each chapter has its own set of requirements and you should use a clean virtual environment for each.
>
> **[3:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/what-you-should-know?u=76281980&t=197)** Feel free to use the IDE of your choice, but I'll be using VS Code.

> [!info]- Semantic Content
>
> **Env Vars:** rag (4), llm (3), gpt (1), lms (1), ide (1)
> **Code Keywords:** interface (2), let (1), type. (1)
> **CLI Commands:** python (2)
> **Versions:** python 3 (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructror] (1)

#### Setting up your exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=0)** - [Instructor] Let's quickly cover how to set up your environment for the exercises in this course.
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=6)** Once you're on the GitHub repo, click Code, and you'll see multiple options here to clone this repo.
>
> **[0:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=13)** Click Copy url to clipboard, and go to your IDE where you can git clone the repo.
>
> **[0:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=24)** Once you clone the repo, you can also ensure that you're using the right version of Python, and you should be using Python 3.11.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=33)** You'll see here that we have multiple chapters, and in each chapter, there is a file here that corresponds to the video and the challenge in that chapter.
>
> **[0:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=47)** Along with these, we also have a requirements document for each chapter, and this requirements document contains all of the libraries you need to run that chapter.
>
> **[1:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=61)** When you're working with these requirements files, what you should do is spin up a clean virtual environment.
>
> **[1:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=74)** Once you've activated that virtual environment, you want to install all of the libraries in the requirements file, and that's it.
>
> **[1:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/setting-up-your-exercise-files?u=76281980&t=82)** Once you install, you're ready to go.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), git (1)
> **Exercise Files:** clone the repo (2), github repo (1)
> **Prerequisites:** install (2), set up (1)
> **Code Keywords:** let (1)
> **Env Vars:** ide (1)
> **Versions:** python 3 (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)


### 1. Optimizing RAG

#### Introduction to preprocessing for RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=0)** - [Instructor] Before we can get into building a RAG app, we have to pre-process the data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=5)** In this section, we'll cover three critical components in data, pre-processing for retrieval augmented generation, chunking, embeddings, and metadata.
>
> **[0:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=17)** Chunking is the process of breaking down big blocks of text into smaller blocks.
>
> **[0:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=24)** Embeddings are the vectors that are generated by embedding models.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=27)** They represent the semantic meaning of some input data in a quantifiable fashion.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=33)** Metadata is data that gets stored along with embeddings in vector databases.
>
> **[0:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=38)** It is critical to building customizable RAG applications.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=43)** Why do you need to chunk your data?
>
> **[0:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=46)** If you think about the way that you process information and overlay that to how machines work, you should get an intuitive understanding of chunking.
>
> **[0:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=55)** As humans, we read books or documents, one sentence or paragraph at a time.
>
> **[1:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=62)** In other words, we read things in semantically coherent chunks.
>
> **[1:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=66)** If you were to try to grab an entire book, it would be nearly impossible.
>
> **[1:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=71)** Computers, and in this context, LLMs, work the same way.
>
> **[1:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=77)** When working with LLMs you may have heard of something called the context window.
>
> **[1:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=83)** The context window of an LLM is the maximum number of tokens, which you can think of, like words that an LLM can work with at once.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=93)** When an LLM has a context window of say, 128,000, like GPT-4 Turbo, you can think to yourself this LLM can hold roughly 128,000 words in short-term memory.
>
> **[1:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=109)** The context window is really just a cap.
>
> **[1:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=112)** It doesn't represent what the ideal number of words or tokens a model can work with is, and how does this relate to chunking?
>
> **[2:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=120)** This gives us a framework to start thinking about how we should chunk our data.
>
> **[2:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=125)** The other piece of the puzzle is the type of data that we have.
>
> **[2:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=128)** Different types of data require different chunking strategies and approaches.
>
> **[2:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=133)** We'll dive deeper into the world of chunking in a later video.
>
> **[2:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=138)** As we briefly mentioned in our overview of prior knowledge, embeddings or embedding vectors are just a series of numbers that represent some input data.
>
> **[2:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=148)** Embeddings can be used to represent all sorts of input data from text to images or video and even DNA.
>
> **[2:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=156)** The important thing to remember about embeddings is that they give us a way to use vector databases to compare data that we couldn't compare before.
>
> **[2:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=167)** There are two main types of embeddings, dense embeddings and sparse embeddings.
>
> **[2:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=174)** Dense embeddings are embedding vectors where only a few of the values are zero, and dense embeddings are by and large created by machine learning models.
>
> **[3:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=184)** Sparse embeddings are embedding vectors where many of the values are zero.
>
> **[3:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=188)** A good rule of thumb is that when more than half of the values in your vector embeddings are zeros, you have a sparse embedding.
>
> **[3:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=196)** Sparse embeddings are mostly created by algorithms.
>
> **[3:20](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=200)** For the purpose of RAG, we'll mostly work with dense embeddings.
>
> **[3:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=206)** The final piece in data pre-processing for RAG is the metadata.
>
> **[3:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=212)** Metadata is data that gets stored alongside your embeddings in a vector database.
>
> **[3:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=217)** Your metadata is critical to optimizing your RAG application.
>
> **[3:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=222)** Metadata can include information about your data itself, as well as information about how the specific data point relates to the larger dataset.
>
> **[3:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=232)** When you are building a RAG application, your metadata must include the text that you are vectorizing.
>
> **[4:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=240)** The vector database retrieves similar data based on the vector embeddings, but LLMs are not able to directly convert vector embeddings into text.
>
> **[4:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=250)** The relevant text must be included in the data point so that the LLM can read it.
>
> **[4:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=256)** One of the main uses of metadata in a RAG application is that it's used to filter searches.
>
> **[4:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=263)** As we talked about previously, metadata can be processing metadata or metadata about the data itself.
>
> **[4:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=270)** Examples of processing metadata can include section title, paragraph number, and chunk location.
>
> **[4:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=278)** Examples of data-related metadata can include the embedded data itself, publication date, and the author.
>
> **[4:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-preprocessing-for-rag?u=76281980&t=286)** Now that we have an overview of the three pieces of optimizing a RAG app, chunking, embeddings, and metadata, let's dive deeper into how each of these pieces work.

> [!info]- Semantic Content
>
> **Env Vars:** rag (8), llm (5), gpt (1), dna (1)
> **Code Keywords:** require (1), let (1)
> **Cross-References:** we talked about (1)
> **Definitions:** in other words (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Chunking considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=0)** - [Instructor] The first pre-processing step to discuss is chunking.
>
> **[0:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=4)** Chunking is how we make documents consumable for generative AI use cases like RAG.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=11)** Chunking is the process of splitting up documents into smaller chunks of text.
>
> **[0:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=17)** These chunks need to be small enough to be consumable, coherent and contextual, so let's break that down.
>
> **[0:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=24)** What makes a chunk consumable?
>
> **[0:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=28)** From a technical perspective, a consumable chunk must fit into the context window of your chosen embedding model.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=36)** On top of that, at least three of these chunks must fit into the context window of your chosen LLM.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=43)** The number of these chunks that have to fit into your LLM context window is dependent on the top K you've chosen for your vector database retrieval, which we'll touch more on embedding models as well as top K for retrievals and vector databases later.
>
> **[0:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=59)** From a common sense perspective.
>
> **[1:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=62)** You want to ensure that you can consume or read your chunk in one go.
>
> **[1:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=68)** What makes a chunk coherent?
>
> **[1:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=70)** A coherent chunk is one that makes sense.
>
> **[1:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=74)** If you read the chunk of text and it makes you go, "Huh," that is not a coherent chunk of text.
>
> **[1:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=82)** From a technical perspective, you want to ensure that your chunks don't start and stop in the middle of a word, clause, or sentence.
>
> **[1:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=91)** From a common sense perspective, you want your chunks of text to be sets of complete thoughts.
>
> **[1:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=97)** For example, "Curiosity killed the cat" is a coherent chunk, "killed the" is not.
>
> **[1:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=105)** The last C of chunking is contextual.
>
> **[1:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=108)** What makes a chunk contextual?
>
> **[1:51](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=111)** This one is a little different from the other two.
>
> **[1:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=113)** The technical and common sense perspectives of contextual are more or less the same thing.
>
> **[2:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=120)** The idea behind contextual chunking is that you get chunks of text that contain all the necessary context to answer a question.
>
> **[2:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=130)** For example, "Curiosity killed the cat" may be a coherent chunk, but it is often taken out of context of the full saying, and the full saying is "Curiosity killed the cat, but satisfaction brought it back."
>
> **[2:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=144)** If you take things out of context, you may not derive their full meaning.
>
> **[2:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=149)** As Stewart Stafford said, "Separate texts from context and all that remains is a con."
>
> **[2:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=157)** When it comes to chunking, there are three major considerations to take into account.
>
> **[2:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=163)** These are the size of your chunks, how much chunks overlap with each other, and whether or not we should use special characters to mark where to split chunks.
>
> **[2:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=174)** Chunk size is a pretty self-explanatory term.
>
> **[2:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=177)** The chunk size refers the number of characters in a chunk.
>
> **[3:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=182)** Picking your chunk size is largely dependent on the structure of your data, and we'll look at some examples later.
>
> **[3:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=189)** For reference, most paragraphs are about 100 words or 500 characters, and that's a good place to start for your chunk size.
>
> **[3:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=198)** Depending on which method you use to chunk your data, your chunk size may be used as a hard limit or just a guideline, more on this later.
>
> **[3:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=209)** Much like chunk size, chunk overlap is a relatively self-explanatory term.
>
> **[3:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=214)** Chunk overlap refers to the number of characters repeated between consecutive chunks.
>
> **[3:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=221)** Why would you want to have overlapping sections between different chunks of data?
>
> **[3:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=226)** There's two ways to think about how this helps.
>
> **[3:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=229)** First, you can think about chunk overlap as the way to preserve context between chunks.
>
> **[3:56](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=236)** If you have the last sentence or paragraph of the chunk before, you have extra context into the current chunk.
>
> **[4:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=244)** Second, you can think about it as a tool to help reinforce the guidelines of chunks being consumable, coherent, and contextual.
>
> **[4:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=254)** Special characters.
>
> **[4:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=256)** Unfortunately, there is no industry standard on what these are called and how these are referenced, and I couldn't really come up with a better name.
>
> **[4:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=265)** But these are characters that you want to split your text up on.
>
> **[4:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=270)** These can be used in conjunction with chunk size and chunk overlap to allow you to relax restrictions around chunk size and overlap to create more coherent chunks.
>
> **[4:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=281)** For example, let's say you want to ensure all your splits are in complete sentences, but your chunk sizing the number of characters per chunk doesn't always end on a complete sentence.
>
> **[4:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=295)** What do you do?
>
> **[4:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-considerations?u=76281980&t=297)** You can use special characters to relax this restriction by allowing your chunks to go oversize and end at the next period, double new line, single new line, or any other special character that you want.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), refers to (1)
> **CLI Commands:** cat (3), make (1)
> **Code Keywords:** let (2), self (2)
> **Env Vars:** llm (2), rag (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### Chunking examples
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=0)** - [Instructor] Let's look at some examples of types of texts you may chunk.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=5)** There are many types of documents that you'll face as you build retrieval augmented generation apps in production.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=12)** Let's take a look at three common types of documents and how to chunk them.
>
> **[0:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=17)** First, we'll look at document data.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=21)** This is the type of data that you would typically think of as a document, things like research papers, books, or perhaps blogs.
>
> **[0:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=29)** Second, question answered transcripts.
>
> **[0:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=32)** An example of a Q/A transcript would be something like an AMA that you find on Reddit.
>
> **[0:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=37)** You'll need to keep the questions and answers coupled, as well as make sure they are in separate chunks.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=43)** Third, chat transcripts.
>
> **[0:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=46)** Let's start with document style data.
>
> **[0:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=50)** Document data is probably the most widely used form of data for information retrieval.
>
> **[0:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=55)** This style of data includes things like papers, reports, and documentation.
>
> **[1:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=62)** Examples of papers include the research publications that you find on archive, an essay from a writer that you like, or a blog post that you may have on your website.
>
> **[1:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=73)** Examples of reports include things like the report that you write for your boss, the news article about the latest news, or a lab report a student writes for class.
>
> **[1:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=84)** Examples of documentation include things like the write-up about the latest project your software engineering team is supposed to make, a guide on how to use some machinery, or API docs for how to use an open source library.
>
> **[1:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=101)** One of the defining features of document data is that the text is usually organized in regularly sized blocks.
>
> **[1:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=110)** You typically won't find too much variation in the size of a semantically coherent chunk of text within these documents.
>
> **[1:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=118)** This type of text data lends itself to easier chunk sizing and chunk overlap choice.
>
> **[2:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=124)** Typically, you won't even have to worry too much about splitting on special characters, most of the time you can just split on double new lines.
>
> **[2:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=134)** Q/A transcripts can be from things like podcasts, classes, and talks.
>
> **[2:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=141)** These transcripts can be pulled from things like your favorite podcast, the lecture you were supposed to attend that you slept through, or the Tech Talks by OSS for AI that you wish you were able to make.
>
> **[2:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=154)** The defining features of Q/A transcripts is that they typically have these short-long snippets.
>
> **[2:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=161)** Usually, the question asked is short and the answer is longer.
>
> **[2:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=167)** Of course, sometimes, that won't be the case, but most of the time, it will be.
>
> **[2:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=172)** The other defining characteristic is that Q/A transcripts typically have semantically linked chunks.
>
> **[3:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=180)** A question and an answer are semantically linked to each other.
>
> **[3:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=185)** Usually, the answer doesn't make sense without linking to the question.
>
> **[3:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=191)** This lends itself to two styles that are actually more important to metadata than chunking that we'll touch on later, but the basic idea is that you can store metadata of different chunks to remind the program that they're linked.
>
> **[3:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=204)** Examples of chat transcripts include customer support, texts and DMs.
>
> **[3:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=212)** You may get these transcripts from things like your phone call or instant messaging with text support for your cell phone coverage provider, texts between you and a friend or group chat, and DMs on LinkedIn.
>
> **[3:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=225)** The defining feature of chat transcripts is irregularly sized chunks and unpredictable linking.
>
> **[3:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=233)** Unlike Q/A transcripts, you can't use a rule like answers usually follow questions.
>
> **[3:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=239)** Sometimes you have the same person sending multiple messages in a row, and these messages are rarely the same size.
>
> **[4:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=247)** Unlike document data, you can't rely on regularly sized data, and sometimes messages are a sentence, sometimes a word, sometimes a paragraph.
>
> **[4:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=258)** In chat transcripts, special characters are especially important.
>
> **[4:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=262)** This is where you really need something that separates each message in some way to see who wrote that message.
>
> **[4:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/chunking-examples?u=76281980&t=268)** Once again, something to be covered in metadata.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (3)
> **Code Keywords:** let (3), class. (1), case, (1)
> **Env Vars:** ama (1), api (1), oss (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Introduction to embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=0)** - [Instructor] Now that we've wrapped up chunking, let's cover embeddings.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=5)** Before vector embeddings, we didn't have a way to compare unstructured data.
>
> **[0:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=10)** With embedding models, we do.
>
> **[0:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=14)** Embedding models are machine learning models, almost always deep neural networks, that turn your text, images, videos, audio, whatever kind of data you have into vectors or vector embeddings.
>
> **[0:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=29)** Vectors are the tools we use to quantitatively compare unstructured data.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=34)** Remember that it's important to use the correct embedding models to embed whatever data you have.
>
> **[0:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=41)** In most contexts, that refers to embedding models trained on your data type.
>
> **[0:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=48)** For example, using ResNet50 for image embeddings, using Sentence Transformers for your text, or using Whisper for your audio.
>
> **[0:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=57)** In this context, we are primarily concerned with embedding text.
>
> **[1:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=63)** The rise in popularity of large language models late in 2022 and all of 2023 showed us that text is one of the most important mediums for AI to work with.
>
> **[1:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=74)** As such, there are now hundreds of embedding models specifically for text.
>
> **[1:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=81)** You can find a list of these models on the Hugging Face MTEB Massive Text Embedding Benchmark's leaderboard.
>
> **[1:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=89)** That's MTEB, M-T-E-B.
>
> **[1:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=92)** If you're working in an extremely specialized domain though, even MTEB is not a comprehensive list.
>
> **[1:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=99)** For example, CSV documents require their own embedding models.
>
> **[1:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=104)** And if you think about it, the way the CSVs are set up is extremely different from the way that regular text is set up.
>
> **[1:51](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=111)** In CSVs, commas are used to separate entries or entities.
>
> **[1:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=115)** In regular text, commas are used to signal a pause in thought or to separate phrases, clauses, or positives.
>
> **[2:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=125)** When it comes to embedding your text for later use, there are many things to think about, but if you take care of these three, the rest often fall into line.
>
> **[2:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=134)** The three critical considerations in embedding your data is the embedding model itself, what you want to embed, and how to compare your embeddings.
>
> **[2:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=144)** Let's look at the three pieces of picking the right model.
>
> **[2:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=148)** The three pieces that go into picking an embedding model are embedding size, model size, and training data.
>
> **[2:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=156)** First, embedding size.
>
> **[2:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=159)** Embedding size is the size of the embedding vector.
>
> **[2:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=162)** This is also referred to as the length or the dimensionality of the vector.
>
> **[2:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=168)** Remember that vectors are just lists of numbers.
>
> **[2:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=172)** These vectors are typically produced by a deep neural network.
>
> **[2:56](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=176)** They're the output of the second to last layer of the network.
>
> **[2:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=179)** When you put data into an neural net, each layer learns something about the data, and the final layer takes that information and makes a prediction or classification.
>
> **[3:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=191)** The second to last layer contains all of the information without making a prediction on it.
>
> **[3:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=197)** The size of the embedding affects the computational power needed to compare vectors when you use them.
>
> **[3:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=204)** It is critical to remember here that only embeddings of the same size can be compared.
>
> **[3:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=211)** Second, model size.
>
> **[3:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=214)** Much like the size of embeddings, the size of the model you choose also has an effect on computational power.
>
> **[3:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=222)** Smaller embedding models are less expensive overall.
>
> **[3:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=226)** They're less expensive to use both to create embeddings and once you have the embeddings.
>
> **[3:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=232)** Meanwhile, larger models can give you more fine-grained results, which may be necessary depending on what you're doing.
>
> **[4:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=241)** One last thing to remember is that embedding models are not always LLMs.
>
> **[4:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=246)** While LLMs can be used as embedding models, these are not the same thing.
>
> **[4:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=251)** Third is training data.
>
> **[4:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=254)** The data that your model is trained on is always important.
>
> **[4:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=259)** Different models on the MTEB leaderboard are trained on different datasets.
>
> **[4:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=264)** Examples of how the data and the training set can change your model include language, structure, and data size.
>
> **[4:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=273)** For example, models trained on Chinese can help you embed data in Chinese, but probably not Arabic.
>
> **[4:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=280)** Models trained on chat style data are better for embedding conversational input than for embedding essays.
>
> **[4:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=289)** Let's also look at algorithmic models.
>
> **[4:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=292)** These are a special case and these are not neural nets.
>
> **[4:56](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=296)** These are algorithms and typically produce a different type of embedding.
>
> **[5:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=300)** Examples can include TF-IDF, term frequency inverse document frequency, SPLADE, sparse lexical and expansion models, and BM25, where BM stands for best matching.
>
> **[5:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=318)** These algorithms produce binary or sparse embeddings, as we talked about before.
>
> **[5:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=323)** Measuring the similarity between these models is also different than the others, but we'll talk about that later.
>
> **[5:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=331)** When it comes to picking what you want to embed, there are three main options.
>
> **[5:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=336)** You can embed the chunked text, you can embed a portion of the chunk's text, or you can embed the larger chunk or section that your chunk text is part of.
>
> **[5:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=348)** At this point, a question naturally arises.
>
> **[5:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=352)** If I spent so much time making my chunks good, why would I not just embed them?
>
> **[5:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=358)** Once again, because we are working with programmatic methods, these techniques are there to enhance your chunking methods.
>
> **[6:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=366)** Large to small refers to a technique where you embed large paragraphs, but store individual senses as the metadata.
>
> **[6:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=373)** And small to large refers to a technique where you embed individual sentences but store the large paragraph in the metadata.
>
> **[6:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=381)** Remember that vectors are just long lists of numbers.
>
> **[6:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=385)** While there are many distance metrics that can be used to compare vectors, there are three main distance calculations, cosine, inner product, and Euclidean.
>
> **[6:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=396)** Euclidean distance measures the spatial distance between two vectors.
>
> **[6:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=402)** The best way to imagine vectors for Euclidean distance is to imagine the two points in hyperspace that the vectors point at, and then imagine the distance between those two points.
>
> **[6:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=413)** The formula for Euclidean distance is the square root of the sum of the difference between each entry.
>
> **[7:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=421)** in the two vectors squared.
>
> **[7:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=424)** Cosine similarity measures the difference in orientation of two vectors.
>
> **[7:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=430)** Unlike Euclidean distance, cosine similarity has us think of the vectors as arrows in hyperspace, where we're measuring is the orientational difference between the two arrows at the origin.
>
> **[7:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=446)** This distance metric is the most complicated and computationally expensive distance measure for dense vectors.
>
> **[7:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=454)** Cosine similarity is the normalized dot product of two vectors.
>
> **[7:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=459)** The formula is the dot product of A and B divided by the magnitude of A times the magnitude of B.
>
> **[7:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=466)** Another way to express it is the sum of the product of each entry in the vectors divided by the product of the square roots of the square of each term in each vector.
>
> **[7:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=479)** Inner product or dot product is the simplest of these three measures of similarity.
>
> **[8:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=486)** The way to think about this measure is to think about the vectors as arrows and then think about the projection of one vector onto another.
>
> **[8:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=495)** We saw this formula earlier in the cosine similarity slide.
>
> **[8:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=498)** The formula for inner product is the sum of the product of each entry in the vectors.
>
> **[8:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=504)** This is cosine similarity without dividing by the product of the magnitudes.
>
> **[8:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=511)** So for sparse or binary vectors, there are two distance metrics that we should know, Hamming distance and Jaccard distance.
>
> **[8:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=521)** Hamming distance is measured as the number of points in which two binary vectors are different.
>
> **[8:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=527)** And Hamming distance can be measured by first taking an XOR of two vectors and then summing all of the 1s in the result.
>
> **[8:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=538)** The other binary distance metric that's good to measure on is Jaccard distance.
>
> **[9:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=543)** Jaccard distance is 1 minus the Jaccard similarity.
>
> **[9:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=547)** The Jaccard similarity is the intersection of two vectors.
>
> **[9:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=551)** Another way to calculate Jaccard distance is the difference of the union of A and B and the intersection of A and B divided by the union of A and B.
>
> **[9:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=565)** If both vectors are 1 in an entry, then that counts as an intersection point.
>
> **[9:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=570)** If either vector has a 1, then that point can be included in the union of A and B.
>
> **[9:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-embeddings?u=76281980&t=577)** A good way to think about Jaccard distance in terms of logical operators for vectors is A or B minus A and B total divided by A or B.

> [!info]- Semantic Content
>
> **Env Vars:** mteb (4), csv (1), idf (1), splade (1), bm25 (1)
> **Analogies:** for example (3), imagine (3)
> **Code Keywords:** let (3), type. (1), require (1)
> **Definitions:** refers to (3), stands for (1), is a  (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Embedding examples
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=0)** - [Presenter] Let's look at some examples of how you can embed data.
>
> **[0:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=4)** There are many ways to embed and there are many things that you can embed.
>
> **[0:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=8)** The three primary methods we'll cover for embedding in this section are the basic embeddings, small to big, and big to small, and we'll also briefly discuss non-English examples.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=21)** The most basic method of embedding is to just straight up embed the chunk.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=27)** Sometimes this works for your most basic tasks.
>
> **[0:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=31)** However, when it comes to advanced RAG use cases and putting things into production, you're going to need something a little more involved.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=42)** Small to big is a term coined by former LlamaIndex head of TypeScript and Partnerships, Yi Ding, and he coined it at one of my first events in San Francisco.
>
> **[0:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=54)** The idea behind small to big is that you embed a sentence, but you store the whole paragraph as text.
>
> **[1:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=63)** Why would you do this?
>
> **[1:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=65)** Well, it's good for increased context.
>
> **[1:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=68)** Some texts have very short sentences, and it's helpful to retrieve not just the sentence or the one sentence proceeding or following it, but the entire paragraph in which that sentence was used.
>
> **[1:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=82)** This is another way to help ensure semantic coherence like we covered in chunking.
>
> **[1:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=89)** Big to small is the opposite of small to big.
>
> **[1:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=94)** Instead of embedding a sentence and storing a paragraph, we embed a paragraph and store a sentence.
>
> **[1:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=100)** Well, why would we do this?
>
> **[1:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=103)** Sometimes sentences themselves don't always make sense, and the tactics of chunking sentences may leave some sentences broken.
>
> **[1:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=112)** For example, if we have a period following Mr., then we may have a broken sentence.
>
> **[1:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=119)** Embedding a whole paragraph and retrieving all the sentences separately lets us do some post-processing before feeding the chunks to an LLM to ensure that we get the right context.
>
> **[2:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=132)** Finally, we're looking at non-English embeddings.
>
> **[2:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=136)** Here's a special case.
>
> **[2:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=138)** If you're not working with English data, you'll need an embedding model that was trained on non-English data.
>
> **[2:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=145)** You have a few options.
>
> **[2:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=147)** One of the easiest, but perhaps the not the most efficient or cost-effective methods, is to use an LLM that has multiple language data.
>
> **[2:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=157)** Examples include GPT models beyond 3.5, Mixtral, and Queen.
>
> **[2:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/embedding-examples?u=76281980&t=164)** If you're looking for a more compute-friendly option, you can search the MTEB leaderboards for models in different languages such as French, Polish, Chinese, and more.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), rag (1), gpt (1), mteb (1)
> **Code Keywords:** let (1), finally, (1), case. (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### Metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=0)** - [Instructor] Metadata is the final piece of what makes vector databases useful.
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=6)** Without storing metadata, we would just be comparing a bunch of numbers.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=12)** The term metadata encompasses all of the data that gets stored with your vector embeddings.
>
> **[0:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=18)** When it comes to retrieval, augmented generation, we definitely need to store the actual text that the vector embedding was generated from, and we can also store many other types of metadata.
>
> **[0:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=32)** So what is metadata?
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=34)** Other than the text itself?
>
> **[0:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=35)** There are many different types of metadata.
>
> **[0:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=38)** You can think of metadata in many different ways.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=42)** It's the data that isn't the embeddings that you store in your vector database.
>
> **[0:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=47)** A lot of this data falls into the category of data that gets stored in traditional databases, and we'll cover more examples later in this video.
>
> **[0:56](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=56)** You also need to remember that metadata is critical for RAG.
>
> **[1:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=60)** It's not just critical for performing basic RAG by providing the text and unvectorized data, but also critical for advanced usage like filtering.
>
> **[1:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=69)** I would split metadata into two general types, chunking metadata and non chunking metadata.
>
> **[1:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=77)** This categorization is based on where the metadata is coming from.
>
> **[1:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=82)** Chunking metadata is metadata that comes out of the chunking process.
>
> **[1:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=88)** Examples of chunking metadata include the sentence number, the subtitle, or the section header.
>
> **[1:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=96)** You can think about this type of metadata as the metadata that tells you where in the document the current chunk you're working with comes from.
>
> **[1:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=105)** The main usage for this metadata is context and filtering.
>
> **[1:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=110)** You can use chunking metadata to understand more about the context of a chunk, such as through the subtitles, as well as filter the chunks.
>
> **[2:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=120)** For example, you may want chunks only from a certain section.
>
> **[2:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=126)** The other type of metadata is non-chunking metadata.
>
> **[2:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=130)** All this means is that the metadata was not produced nor tied to the chunking process.
>
> **[2:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=137)** Examples of non-chunking metadata include the author, the last time an entry was updated, or the document title.
>
> **[2:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=146)** The main usage for non chunking metadata is for filtering your search.
>
> **[2:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=150)** For example, you may only want data that was written by you or updated in the last month.
>
> **[2:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=158)** So how can we store metadata?
>
> **[2:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=161)** As we mentioned before, a lot of metadata, almost all of the non-chunky metadata is metadata that was traditionally stored in a relational database.
>
> **[2:51](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=171)** So one option is to link to where your metadata was stored.
>
> **[2:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=175)** Another option that is more popular for RAG applications is to store your metadata directly in the vector store itself.
>
> **[3:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/metadata?u=76281980&t=184)** It's easier and faster to store your metadata directly with your vectors and use it for info and filtering that way.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (2), from, (1)
> **Env Vars:** rag (3)
> **Cross-References:** later in (1), in the last (1), we mentioned (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### Demo: Chunking
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=0)** - [Instructor] With our data ready, we can work on the first part of our RAG application, chunking.
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=6)** As we mentioned earlier, chunking is the process of breaking large texts up into small, workable pieces.
>
> **[0:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=13)** In the first block here, we're going to import three things.
>
> **[0:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=16)** The document object, the character text splitter object, and the OS library.
>
> **[0:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=23)** The document object is LangChain's native way to store objects.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=27)** We use this to add metadata to our text and prepare it for the vector store.
>
> **[0:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=32)** The character text splitter object is a LangChain object that can split strings up based on some preset parameters.
>
> **[0:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=40)** In our case, we use it for determining chunk size and chunk overlap.
>
> **[0:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=45)** The third functional import is the OS library, and we use this for navigating the directory structure of the operating system.
>
> **[0:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=53)** Now for the functionality, parsing and chunking the data.
>
> **[0:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=57)** First, we make sure that we're using the right folder.
>
> **[1:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=61)** In this case, we are using the Big Star Collectibles folder.
>
> **[1:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=65)** To access the list of text files within this folder, we use the OS library to get a list of the directory.
>
> **[1:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=73)** Next, we create an empty list object to hold all of the chunked up texts that we're going to create, then we start looping through all of the files and chunking them up.
>
> **[1:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=84)** So, what do we do in this loop?
>
> **[1:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=87)** We start by opening up our file and reading the entire page in as a single string.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=93)** Next, we create a CharacterTextSplitter object.
>
> **[1:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=96)** This specific instance is set up to split strings into 128 character chunks with 32 character overlaps, then we use the object's split_text function and pass the string containing our entire file through to get our chunks.
>
> **[1:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=113)** The last bit of functionality in the chunking section is to loop through each of these chunked texts and create a document object from each chunk.
>
> **[2:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=122)** To ensure that we keep the chunks stored in our vector store, we assign it to the page_content parameter.
>
> **[2:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=129)** When you run the cell, you may notice that some of these chunks are larger than the specified chunk size of 128, and we'll address this in one of the challenges later on.
>
> **[2:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=141)** Finally, let's take one block of code to just look at the chunk.
>
> **[2:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-chunking?u=76281980&t=146)** Looking at the first chunk, we can see the beginnings of the Binaryville text file.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), function (1), pass (1), finally, (1), let (1)
> **Code Identifiers:** split_text (1), page_content (1)
> **CLI Commands:** make (1)
> **Env Vars:** rag (1)
> **Cross-References:** we mentioned (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Demo: Metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=0)** - [Instructor] This section is about storing metadata with our chunk data.
>
> **[0:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=4)** We'll start from the exact same place we left off in the last video.
>
> **[0:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=8)** There's only a small change to make here.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=11)** In link chain, metadata is stored within the document object.
>
> **[0:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=15)** Last time we stored the chunks in the page content parameter.
>
> **[0:20](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=20)** To store metadata, all we need to do is add a metadata parameter.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=27)** Metadata is stored as a dictionary.
>
> **[0:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=31)** You can define the metadata that you want to store.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=34)** One of the most common pieces of metadata to store is the title of the document.
>
> **[0:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=40)** For this example, we store this under doc title.
>
> **[0:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=44)** We'll also store the chunk number.
>
> **[0:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=46)** This tells us where in the document the chunk was taken from.
>
> **[0:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=52)** Other than adding the metadata parameter to the last co snippet, there's another change to make here as well.
>
> **[0:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=59)** We enumerate through the list instead of just looping through it.
>
> **[1:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=64)** This is so we can access the chunk number and know where in the document the chunk was taken from.
>
> **[1:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=71)** Let's take a look at our page content and metadata.
>
> **[1:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-metadata?u=76281980&t=75)** See here that with this file text, we now have the chunk number as well as the title of the document that it came from.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (3), let (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Demo: Embed and store
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=0)** - [Instructor] With our data chunked and some metadata saved along in each of the chunked objects, we are ready to embed the data and store it into a vector database.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=11)** We're working with two new imports here, FAISS and HuggingFaceEmbeddings.
>
> **[0:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=17)** FAISS stands for Facebook AI Similarity Search.
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=22)** This is the library that most popular AI native vector databases are built on, and you'll see that we're importing HuggingFaceEmbeddings from langchain_community.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=33)** Early on, the LangChain team built hundreds of integrations for their library, but over time, as LangChain became more popular, this became impossible for their team to maintain, and most of these spun out into the Lang Chain community library, including the HuggingFaceEmbeddings.
>
> **[0:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=52)** Picking up from where we left off in the last video, we started by importing the face library from LangChain and the HuggingFaceEmbeddings from the community module.
>
> **[1:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=63)** Next, we instantiate the HuggingFaceEmbeddings object as a function.
>
> **[1:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=68)** At the time this course is being made, the default embedding model included is all-mpnet-base-v2.
>
> **[1:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=76)** This model has 768 dimensions.
>
> **[1:20](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=80)** Remember that only vectors of the same dimensionality can be compared.
>
> **[1:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=87)** In the next cell, we create our vector store from the documents we created in the metadata and chunking videos.
>
> **[1:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=94)** We pass in the embedding function we created for all-mpnet-v2, as well as the documents we created in the first two videos.
>
> **[1:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embed-and-store?u=76281980&t=105)** Now that we're done with this section, we've stored our text into our vector database, and in the next step, we'll query our vector database before we add an LLM on top to complete our RAG application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), module (1), pass (1)
> **Env Vars:** faiss (2), llm (1), rag (1)
> **Cross-References:** in the next (2), in the last (1)
> **Code Identifiers:** langchain_community (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Demo: Querying
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=0)** - [Instructor] Querying the vector database is part of what goes on behind the scenes in a RAG application.
>
> **[0:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=7)** The LLM queries the vector_store to get some context back to create a response.
>
> **[0:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=13)** When we interact with the RAG app, we never see this query.
>
> **[0:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=16)** In this video, we're going to take a peek behind the scenes to see what the LLM sees.
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=22)** When we query a vector database, we get some top_k results back.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=27)** For langchain FAISS, the default k is 4, as shown here.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=33)** The first step to perform a vector_store query in langchain is to take our vector_store and call the as_retriever function on it.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=42)** This prepares the vector_store to be queried with strings and abstracts out the necessity of turning a string into an embedding and calling a query function directly.
>
> **[0:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=53)** Then, we call the invoke function of the retriever and pass a string.
>
> **[1:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-querying?u=76281980&t=60)** The result is the top four results that are in our vector_store as according to the embedding model we defined earlier.

> [!info]- Semantic Content
>
> **Code Identifiers:** vector_store (5), as_retriever (1)
> **Env Vars:** rag (2), llm (2), faiss (1)
> **Code Keywords:** function (3), pass (1)
> **Speakers:** - [instructor] (1)

#### Demo: Adding the LLM
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=0)** - [Instructor] The final part of creating a RAG application on top of our vector store is to add the LLM.
>
> **[0:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=7)** For this part, you'll need access to an LLM.
>
> **[0:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=10)** You can do this in the form of an API key from OctoAI, OpenAI, or some other LLM provider.
>
> **[0:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=18)** Alternatively, you can run your own LLM locally.
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=22)** This course assumes that you are using an OpenAI API key.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=27)** We kick off our LLM access by importing our environment variables and loading them using Python-dotenv's load_dotenv method.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=36)** Then, we import OpenAI from langchain_openai, and initialize this as our LLM.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=43)** Next, we create a prompt template for our chat.
>
> **[0:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=47)** The main thing to pay attention to in the prompt creation is that we use it to pass the question and the context via brackets, just like we would with an f-stringing in Python.
>
> **[0:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=59)** Once we create a prompt string, we can use the ChatPromptTemplate object from langchain to create a prompt template.
>
> **[1:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=67)** We need two more imports to create our chain.
>
> **[1:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=69)** The RunnablePassthrough object takes a string and lets us treat it as a function by just passing the string through the function.
>
> **[1:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=77)** The StrOutputParser object takes the output of the chain and parses it as a string.
>
> **[1:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=83)** To create a chain, we start by getting the context and the question using the objects we mentioned earlier.
>
> **[1:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=90)** Then, we pass it to the prompt we created and pass the prompt to the LLM, and finally, pipe the output of the LLM to the StrOutputParser.
>
> **[1:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=101)** Once the chain is created, we can get a response by simply invoking the chain.
>
> **[1:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=107)** The response will take the queries we saw in the query video, combine them, and return a single string from the given context.
>
> **[1:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-adding-the-llm?u=76281980&t=115)** Now that we've seen how to build an example, it's time to put your learnings into practice.

> [!info]- Semantic Content
>
> **Env Vars:** llm (8), api (2), rag (1)
> **Code Keywords:** pass (3), function (2), finally, (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** load_dotenv (1), langchain_openai (1)
> **Exercise Files:** template (2)
> **Cross-References:** we mentioned (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)

#### Challenge: Cite your document sources
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=5)** - [Instructor] When we write essays or research papers, we are often asked to cite our sources.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=12)** When it comes to RAG applications, you should do the same thing.
>
> **[0:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=16)** The first challenge from our customizable RAG application is to find a way to cite our sources.
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=22)** Remember when we stored the name of the document as part of the metadata in the vector store?
>
> **[0:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=29)** This challenge is where that becomes useful.
>
> **[0:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=32)** Change the example RAG code to cite the documents.
>
> **[0:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=37)** Here's a hint.
>
> **[0:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=38)** You can do that with prompt engineering.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-cite-your-document-sources?u=76281980&t=42)** Good luck and join me in the next video to see how I solve this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Cite your document sources
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=6)** - [Instructor] All right.
>
> **[0:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=7)** Let's take a look at how we can solve this challenge.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=11)** As we mentioned earlier, the names of the documents are all stored in the vector store via document metadata.
>
> **[0:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=19)** This means that we can access this information when we retrieve objects from the vector store.
>
> **[0:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=25)** We can get our sources via prompt engineering by adding a simple sentence to our prompt.
>
> **[0:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=31)** All we have to do to solve this challenge is to tell the llm to cite its sources.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=36)** And voila, it tells us which documents it found the answer in.
>
> **[0:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=41)** Cite your sources.
>
> **[0:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=49)** There it is.
>
> **[0:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=50)** This information can be found in the first and second document titled "Our Story" and "What We Do" respectively.
>
> **[0:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-cite-your-document-sources?u=76281980&t=57)** Now, let's tackle another challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** we mentioned (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Challenge: Change the chunk size
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=6)** - [Instructor] When we run the chunking section of the notebook, we can see that there's some warnings produced.
>
> **[0:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=14)** Some of the chunks are larger than the specified chunk size.
>
> **[0:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=19)** In this challenge, we're going to modify the code slightly so that our chunks stay within the chunk size without enforcing any rules that will break semantic coherence of each chunk.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=33)** Here's a hint.
>
> **[0:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=35)** You can read the code for CharacterTextSplitter to solve this challenge.
>
> **[0:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-change-the-chunk-size?u=76281980&t=40)** So go ahead and give this a try and see you in the solution video.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Change the chunk size
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=6)** - [Instructor] When we click into CharacterTextSplitter, we can see that there's two parameters here that are automatically set, separator and is_separator_Reg X.
>
> **[0:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=16)** Now we can see that the separator parameter is a double new line.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=21)** What this means is that even if it goes over the chunk size, if it doesn't see any double new lines, it may not form a new chunk.
>
> **[0:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=31)** So if we want to ensure that we are forming chunks around the correct chunk size, what we should do is we should add a separator here and we should define our own custom separator.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=42)** In this case, we're going to define a new line, a single new line as our own custom separator.
>
> **[0:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-change-the-chunk-size?u=76281980&t=48)** And when we run that, we'll see that we have everything in the correct chunk size and the correct chunk overlap.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 2. Image Search with Vector Databases

#### Introduction to vector embeddings for images
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=0)** - [Instructor] Images are one of the classic unstructured data types.
>
> **[0:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=4)** And vector embeddings are the core of what makes it possible to compare images.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=11)** When it comes to using vector embeddings to compare images, there are two main types of vectors, semantic vectors, and visual vectors.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=21)** These vectors describe the image in fundamentally different ways.
>
> **[0:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=25)** Let's cover how.
>
> **[0:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=28)** The first type of vector embedding we can use for comparing images are semantic embeddings.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=34)** These embedding describe the meaning of the image.
>
> **[0:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=38)** The second type of embeddings are visual or pixel embeddings.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=43)** These encode what the image literally looks like.
>
> **[0:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=48)** Semantic embeddings are derived from deep learning models.
>
> **[0:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=53)** In any deep learning model, the image data gets passed from the input layer, through a series of hidden layers, and then to an output layer.
>
> **[1:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=62)** Usually the output layer outputs some sort of prediction, classification, or segmentation.
>
> **[1:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=69)** The second to last layer contains all of the meaning that the model has derived from its processing to arrive at that prediction, and that's what we used as the semantic embedding.
>
> **[1:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=81)** The second to last layer captures all of what that image means.
>
> **[1:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=86)** These are the vector embeddings that we typically use when we talk about rag applications.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=93)** The other type of vectors that we talk about with images are visual or pixel vectors.
>
> **[1:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=99)** These are really only vector embeddings in the technical sense.
>
> **[1:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=103)** They are also a long list of numbers.
>
> **[1:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=107)** And if you're familiar with how image models are trained in PyTorch, you'll remember the images are compressed into a vector as the input to the model.
>
> **[1:56](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=116)** And that's what these visual or pixel vectors are.
>
> **[2:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=120)** These vectors capture what the image looks like.
>
> **[2:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-vector-embeddings-for-images?u=76281980&t=123)** Remember, that for rag, we focus on the semantic embeddings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Vision models 101
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=0)** - [Instructor] In order to understand how machines compare images, we're going to do a crash course of how vision models work.
>
> **[0:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=8)** Remember that vision models are just a type of deep neural network.
>
> **[0:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=13)** They are deep neural networks that are trained for computer vision tasks, such as classification of images, segmentation, or object detection.
>
> **[0:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=24)** Let's go back in time a bit.
>
> **[0:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=26)** Back in the 1960s, we got our first set of neural networks.
>
> **[0:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=30)** The first version of neural networks were simple.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=34)** They were modeled as layers of neurons in which each layer was fully connected to the one coming before and after it.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=43)** As machine learning progressed, we learned that modeling neural networks in different ways gave better results for different types of data.
>
> **[0:51](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=51)** When it comes to vision data, we found that this technique called a convolution was helpful in getting local context and getting machines to decipher images.
>
> **[1:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=63)** In 1993, the first paper to use max pooling, a way to collect the output of convolution layers was published.
>
> **[1:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=71)** This was the most common type of vision model for nearly 30 years.
>
> **[1:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=76)** Then in 2019, 1 year after the original transformers paper, a paper that was on how to use transformer models for language, a new paper on vision transformers came out.
>
> **[1:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=90)** Vision transformers took the attention mechanism introduced in the original transformers paper and applied it to computer vision.
>
> **[1:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=98)** So what is a convolutional neural network?
>
> **[1:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=101)** The defining architecture of convolutional neural networks is the combination of a convolutional layer and a pooling layer.
>
> **[1:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=109)** These two layers help us get context from different places in the image and combine all these local contexts to make sense of the image.
>
> **[1:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=118)** Let's take a look at what this looks like visually.
>
> **[2:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=123)** Imagine you have a 2D image filled with numbers like the one shown here.
>
> **[2:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=129)** This picture shows how a convolution might work.
>
> **[2:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=133)** In this case, we are looking at a three by three convolution.
>
> **[2:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=138)** Each convolution has a filter, and this filter is learnable, as in it will change depending on how you train the model.
>
> **[2:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=147)** The top part of the image shows the result of a convolution, and the bottom part shows how it's done.
>
> **[2:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=155)** You take the value of each entry in a convolution and multiply it element wise with each value in the filter.
>
> **[2:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=163)** Then you add up all of the values in the resulting square and use that as the result for the square that the convolution is based around in the resulting image.
>
> **[2:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=174)** So that's a convolution and this is pooling.
>
> **[2:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=178)** Max pooling is a bit less complicated than a convolution.
>
> **[3:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=183)** As shown in the image, all you need to do is take the max of a value in a pool and use that to represent the entire region.
>
> **[3:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=192)** In the red region, we have 12, 20, 8, and 12.
>
> **[3:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=199)** So we take 20 as the value to represent that region.
>
> **[3:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=205)** Today's vision model zeitgeist is vision transformers, derived from the classic transformer model of using an encoder, a decoder, and an attention mechanism on an input sequence, vision transformers takes the inspiration drawn from language and applies it to computer vision.
>
> **[3:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=225)** Much like the idea of convolutional filters, vision transformers operate in patches.
>
> **[3:51](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=231)** These patches are N by N squares that each make up a piece of the image.
>
> **[3:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=238)** Each of these patches are turned into embeddings, as we talked about earlier in the course.
>
> **[4:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=243)** Then these embeddings are put together into the encoder and mixed with the intention mechanism as they are fed into the decoder.
>
> **[4:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=254)** Here we see an illustration of how vision transformers work.
>
> **[4:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=259)** In the bottom left, we see an image split into nine patches.
>
> **[4:24](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=264)** We take these nine patches and turn them into patch embeddings.
>
> **[4:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=268)** These patch embeddings, often combined with a class token, denoted CLS in the diagram, are then combined with a positional encoding and fed into the transformer.
>
> **[4:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/image-models-101?u=76281980&t=279)** The output is then fed into a multilayer perceptron, also known as a fully connected neural network, denoted as the MLP head in the image, and out comes logits that describe the image, typically some object detection or segmentation type task.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (1), imagine (1), picture (1)
> **CLI Commands:** make (2)
> **Env Vars:** cls (1), mlp (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Speakers:** - [instructor] (1)

#### Demo: Getting semantic vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=0)** - [Instructor] In this video, we're going to get a semantic vector from an image.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=5)** We'll use the open clip embeddings with link chain as our clip embedding model.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=11)** We will also use glob to get all of the images in our file path.
>
> **[0:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=17)** Next, we load our embedding model and call the embed image function on all of our file paths.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=27)** Despite the name of the function, this function actually takes a list of URIs for images, and not just a single image itself.
>
> **[0:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=37)** Now that we have our embeddings, let's examine our embeddings.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=42)** Opening up embedding at index zero shows us what a sample embedding looks like.
>
> **[0:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-getting-semantic-vectors?u=76281980&t=48)** Checking the length of this embedding shows us that each of the embeddings generated from our open clip model has a dimensionality of 1024.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1)
> **Speakers:** - [instructor] (1)

#### Demo: Storing image vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=0)** - [Instructor] The start of this video should be reminiscent of what we did in our text RAG chapter.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=5)** We have three imports from langchain to cover, Document, FAISS, and OpenCLIPembeddings.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=12)** The other two imports that we have are glob for dealing with multiple file paths, and base64 so we can convert our image into a base64 string for our LLM later.
>
> **[0:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=25)** In our next code block, we start by creating an empty list to hold our documents.
>
> **[0:31](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=31)** Then we define a function that gets our imager coding to prepare for CLIPembeddings.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=36)** The encode image function takes a file path, opens the path, reads it as bytes and returns a UTF encoded string of the file.
>
> **[0:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=49)** Then we loop through each of the paths to the images and create a document from each of the images.
>
> **[0:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=54)** The document contains the encoded image and the metadata for the document contains the image path.
>
> **[1:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-storing-image-vectors?u=76281980&t=62)** To wrap things up, we store that into a FAISS vector database using the OpenCLIPembeddings as our embedding function.

> [!info]- Semantic Content
>
> **Env Vars:** faiss (2), rag (1), llm (1), utf (1)
> **Code Keywords:** function (3)
> **Speakers:** - [instructor] (1)

#### Demo: Comparing images semantically
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=0)** - [Instructor] Now that we know how to store the data into a vector database, let's compare our images to each other to find the most similar sets of images.
>
> **[0:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=9)** We start with where we left off in the last video.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=12)** The first step here should be familiar.
>
> **[0:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=14)** We turn our vector store into a retriever.
>
> **[0:20](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=20)** Once we have a retriever, we can retrieve our images by invoking the retriever.
>
> **[0:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=26)** Instead of passing text through, we should pass the encoded string of an image.
>
> **[0:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=30)** In this example, we pass the encoded string representing the first cat.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=36)** We get back the top four resulting images that are most similar to that cat image.
>
> **[0:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-comparing-images-semantically?u=76281980&t=41)** As a sanity check, we can see that cat number one is our top results.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (3), find (1)
> **Code Keywords:** pass (2), let (1)
> **Cross-References:** in the last (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Find the dog most similar to a cat
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=5)** - [Instructor] Now that you know how to generate semantic embeddings of images, how to store them and how to retrieve them, it's time to put your skills to the test.
>
> **[0:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=15)** The coding challenge for this chapter, it's to find the dog that looks most similar to the cats, at least according to our image embedding model.
>
> **[0:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=26)** The basic idea behind this is to find the dog picture that returns the most cat pictures.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=33)** You can also weight those return values by their total distances or inversely based on rank.
>
> **[0:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-the-dog-most-similar-to-a-cat?u=76281980&t=39)** Good luck and see you in the Solution Video.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), cat (1)
> **Analogies:** similar to (1), picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Find the dog most similar to a cat
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=5)** - [Instructor] We're looking for the dog that is most similar to cats.
>
> **[0:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=10)** So, we have all of our vectors stored in our vector store, we have our retriever.
>
> **[0:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=16)** What we do now is we create this path here, which gives us all of the paths of the dog images, then we create a dictionary that will map the paths of the dogs to the paths of the cats in an inversely-weighted order.
>
> **[0:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=38)** So, for each of those dog paths, we retrieve the top four images based on the Base64 encoding of that dog image, and then we set this cats_retrieved image to zero, and we loop through this enumerated list of all of the return documents.
>
> **[1:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=60)** And if the word cat is in the source returned, then we know that that's a cat image.
>
> **[1:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=68)** We add 4 minus I, which is the inverse weight of that image based on where it appears in your top four results to the number of cats retrieved.
>
> **[1:20](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=80)** After we do this calculation, we go through, and we attach to each dog image what its cat score was, and when we look at these scores, we can see that dog number one had the highest score.
>
> **[1:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-the-dog-most-similar-to-a-cat?u=76281980&t=96)** It had the most similarity to the cat images, so dog number one has the most similar to cats according to this method.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (4)
> **Analogies:** similar to (2)
> **Code Identifiers:** cats_retrieved (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Multimodal RAG with Vector Databases

#### Introduction to the types of multimodality
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=0)** - [Instructor] Let's begin by exploring the answer to this question, what is multimodality?
>
> **[0:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=8)** The core idea behind multimodal AI applications is that they deal with multiple types of data.
>
> **[0:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=15)** There's a lot of buzz around the term, multimodal, AI right now, but what does it really mean?
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=22)** Let's take a look from the bottom up.
>
> **[0:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=25)** The word multimodal comes from multi and modal.
>
> **[0:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=30)** Multi meaning many and modal meaning types.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=34)** The reason why multimodal AI is so popular right now is because it gives AI more human-like power.
>
> **[0:42](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=42)** Humans have a multimodal interface with the world.
>
> **[0:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=45)** Think of the senses.
>
> **[0:47](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=47)** We have sight, hearing, taste, touch, and smell.
>
> **[0:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=53)** When it comes to AI, the two modalities that are being emulated the most are closest to sight and hearing.
>
> **[1:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=60)** While the term, multimodal, is still a highly debated term, some examples of multimodality can be classically agreed upon by the industry.
>
> **[1:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=69)** These examples include images and text, images and audio, and video.
>
> **[1:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=76)** Notice that these correspond to the sense I mentioned earlier.
>
> **[1:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=81)** Sight and sound.
>
> **[1:23](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=83)** Images and texts might both be related to sight, but machines process these as two different kinds of data.
>
> **[1:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=90)** While some examples of multimodal data are easier to relate to the idea of human senses, other more contested examples may not be as easy to relate to the idea of human senses.
>
> **[1:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=103)** Here are three other examples that fall into what may be referred to as multimodal.
>
> **[1:49](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=109)** PDFs and CSVs, texts and tables, and tables and graphs.
>
> **[1:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=117)** These examples all fall into the same category for human senses, sight.
>
> **[2:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=123)** However, the way they're structured means they need to be input into machines in a different way.
>
> **[2:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-types-of-multimodality?u=76281980&t=130)** Different machine learning models need to be trained to handle each of these different types of data, and that's why you may occasionally see combinations of data types like these referred to as multimodal data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1)
> **Speakers:** - [instructor] (1)

#### Ways to do multimodal RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=0)** - [Instructor] Let's look at some ways we can do multimodal RAG.
>
> **[0:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=5)** The basic idea behind multimodal RAG is the same as the basic idea behind multimodal data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=12)** So there's two main ways to do multimodal RAG.
>
> **[0:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=15)** One, we can use one multimodal model that can handle multiple types of data.
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=22)** Two, we can use multiple models, usually one for each type of data that we want to work with.
>
> **[0:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=29)** Let's look at how the ways to do multimodal RAG breakdown.
>
> **[0:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=33)** We can use one multimodal embedding model.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=36)** This will be a model that can process multiple types of data, usually images and text.
>
> **[0:43](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=43)** We can use multiple embedding models and multiple search modes.
>
> **[0:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=48)** These will be models for different types of data, and we'll need to route each type of data to the right model for storing the data and searching the data.
>
> **[0:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=58)** Third, we can just do a combination of the two ways to do multimodal RAG and use multiple multimodal models.
>
> **[1:07](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=67)** While this is totally acceptable to do, this is extremely uncommon.
>
> **[1:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=72)** The canonical way to build a multimodal RAG application is to use a single multimodal model.
>
> **[1:20](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=80)** As we talked about before, multimodal models are models that can handle different types of data.
>
> **[1:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=86)** This style of building multimodal RAG has a couple nice advantages.
>
> **[1:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=92)** One, you only need one vector store.
>
> **[1:35](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=95)** Two, you only need one embedding model.
>
> **[1:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=98)** Since you're using the same model, each embedding the model produces will have the same dimensionality, so you can compare embeddings of images and text or whatever types of data you're embedding directly.
>
> **[1:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=112)** If you're building multimodal RAG natively in this way, you have to call models differently for each data type that you're dealing with.
>
> **[2:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=120)** For example, CLIP will have image and text options.
>
> **[2:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=124)** However, if you use a framework like LangChain or LlamaIndex, they will typically handle that for you.
>
> **[2:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=132)** The other way to build multimodal RAG applications is to use multiple models.
>
> **[2:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=138)** In this case, you would need one model for each data type, you would also need a separate vector store for each model that you use to create embeddings.
>
> **[2:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=149)** Remember that only vectors of the same size can be compared.
>
> **[2:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=153)** And since these vector embeddings are generated by different models, it's not likely they'll be the same length.
>
> **[2:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=161)** Even if they are, it doesn't make sense to compare them because they have different training contexts.
>
> **[2:48](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=168)** Instead of calling different encoding methods of a single model to get vector embeddings, we would route data to different models and route the resulting embeddings to a different vector store depending on its vector type.
>
> **[3:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=181)** Even with most frameworks today, this is a manual process because this method of doing multimodal RAG is extremely uncommon.
>
> **[3:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=191)** The final combination method to do multimodal RAG is a spin on the first two methods.
>
> **[3:17](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=197)** It's using multiple multimodal models.
>
> **[3:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=201)** Almost no one uses this method in practice, so why would you use this?
>
> **[3:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=207)** There's two main reasons to use a setup like this.
>
> **[3:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=210)** The first is if you just have so many different types of data, the one multimodal model won't work for you.
>
> **[3:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=219)** Maybe you have video, audio, images, table data, and so on and so on.
>
> **[3:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=226)** The second reason is if you want to re-rank your vector results, if you want to use models trained on multiple types of different data to effectively get a second opinion.
>
> **[3:57](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=237)** To build this kind of multimodal RAG model, you would route data to different models and vector stores based on their data type.
>
> **[4:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/ways-to-do-multimodal-rag?u=76281980&t=245)** And if you have multiple models handling the same data type for re-ranking, you would route them based on some sort of tagging system.

> [!info]- Semantic Content
>
> **Env Vars:** rag (12), clip (1)
> **Code Keywords:** let (2), type. (2), case, (1), type, (1), this. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Introduction to multimodal embedding models
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=0)** - [Instructor] Let's understand multimodal embedding models.
>
> **[0:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=4)** The main highlight of multimodal embedding models is simple.
>
> **[0:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=9)** They can embed multiple types of data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=12)** Typically, multimodal embedding models will have different functions internally to embed each type of data.
>
> **[0:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=21)** This is because embedding each type of data is a different process in and of itself.
>
> **[0:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=27)** Sometimes, data requires pre-processing.
>
> **[0:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=30)** Often, different parts of the model are trained on and for different types of data.
>
> **[0:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=37)** The most common practice for training multimodal embedding models is to train them on pairs of data.
>
> **[0:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=44)** Images plus text is the most common pairing of data to train these types of models on.
>
> **[0:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=50)** Some examples of multimodal embedding models include CLIP from OpenAI, large language models themselves that have evolved to become multimodal, such as GPT-4o, also from OpenAI, and LLaVa, a state-of-the-art end-to-end large transformer model that combines an image encoder in Vicuna, an LLM.
>
> **[1:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=75)** This model is not from OpenAI.
>
> **[1:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=78)** In this chapter, we cover CLIP and GPT-4o, and we use CLIP for embedding because it's free and open source.
>
> **[1:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=86)** CLIP stands for Contrastive Language-Image Pretraining.
>
> **[1:32](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=92)** The CLIP model has two encoders, one for encoding images and one for encoding language or text.
>
> **[1:39](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=99)** Since this is an open source model, publicly available on Hugging Face and is also state of the art, this model is the most popular multimodal embedding model to date.
>
> **[1:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=110)** Let's briefly understand how CLIP works and what the letters mean.
>
> **[1:55](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=115)** C, contrastive.
>
> **[1:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=118)** There are many machine learning methods for aligning two modalities.
>
> **[2:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=123)** Contrastive learning is one of the most powerful and popular approaches to date.
>
> **[2:08](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=128)** This technique takes pairs of data in the same embedding space and trains both encoders to represent the pairs as closely as possible.
>
> **[2:18](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=138)** At the same time, the model is also incentivized to represent unpaired image/text combos as far as possible.
>
> **[2:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=146)** L-I, language-image.
>
> **[2:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=149)** The CLIP model takes both text and image as input, and as we talked about earlier, it has a different encoder for each.
>
> **[2:38](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=158)** One point of importance to note here, though, is that although the encoders are separate, they're still both in the same embedding space and the vectors have the same dimensionality.
>
> **[2:50](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=170)** Pretraining, P.
>
> **[2:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=172)** The model is pretrained on 400 million pairs of image and text data from the internet.
>
> **[2:58](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/introduction-to-multimodal-embedding-models?u=76281980&t=178)** Now that we have an understanding of multimodal embedding models, let's dive into the code.

> [!info]- Semantic Content
>
> **Env Vars:** clip (7), gpt (2), llm (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (1), stands for (1), is an  (1)
> **Cross-References:** we talked about (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Demo: Embedding and storing data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980&t=0)** - [Instructor] The code in this video should be very familiar.
>
> **[0:04](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980&t=4)** This is the exact same code that we ran through in chapter 2 to embed and store our images there.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980&t=11)** Let's briefly review.
>
> **[0:14](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980&t=14)** We're using langchain to get our OpenCLIPEmbeddings and storing all of our vectors into FAISS.
>
> **[0:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-embedding-and-storing-data?u=76281980&t=19)** What we're doing here is we're grabbing all of these images, encoding them into a Base64 encoding for the LLM, creating documents from all of these images, and then using the OpenCLIPEmbeddings along with all the documents to store into the FAISS vector database.

> [!info]- Semantic Content
>
> **Env Vars:** faiss (2), llm (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Demo: Query images with text
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=0)** - [Instructor] We're going to pick up right where we left off.
>
> **[0:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=3)** So, with our vectors already stored, the first thing we do is create a retriever object out of the vector store.
>
> **[0:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=10)** This part should be familiar.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=12)** This next part will not be as familiar.
>
> **[0:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=15)** We need two more imports here, BytesIO and Images.
>
> **[0:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=19)** These are for handling byte data and image data.
>
> **[0:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=22)** In this code block, we create three functions, a resizing function to feed the data into OpenAI, a function to check if you're in Base64, a function to check if the string is in Base64 and a function to split image and text input.
>
> **[0:41](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=41)** The resizing function takes an input in the form of a Base64 string, and it uses the image and BytesIO library to open that string as an image, resizes the image, saves the resized image and returns that as a Base64-encoded string again.
>
> **[1:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=61)** The next function simply checks if you have a Base64 string.
>
> **[1:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=66)** The third function takes your series of docs.
>
> **[1:10](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=70)** The next function takes your input documents, checks if you are using an image or a text and splits the data appropriately.
>
> **[1:22](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=82)** The next code block serves to create the prompt for our multimodal RAG app.
>
> **[1:27](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=87)** We have five imports in this section, of which three we have not seen before.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=93)** HumanMessage, this is the type of message that you would expect from a human input.
>
> **[1:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=100)** RunnableLambda, which is just like RunnablePassThrough, but it's a function, and ChatOpenAI, which is a way to access an OpenAI model as a chat model.
>
> **[1:52](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=112)** We need to make one function here.
>
> **[1:54](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=114)** This function takes a data dictionary, and this data dictionary comes from this last function that we made up here.
>
> **[2:02](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=122)** It takes that dictionary and it splits the image and text data and formats them into prompts before we turn that into a set of human messages to feed the LLM.
>
> **[2:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=136)** Next, we get our foundational model, and the foundational model that we're using is GPT-4o mini, and then we create a chain.
>
> **[2:25](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=145)** This chain is much like the chain we've created before, except instead of using a RunnablePassThrough string for everything, we use a RunnableLambda to get our context.
>
> **[2:37](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=157)** Next, we will invoke the chain, and we'll ask it to look for a rottweiler in the images.
>
> **[2:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/demo-query-images-with-text?u=76281980&t=165)** It returns an image that the LLM describes as featuring a rottweiler, and if we look in our docs and we retrieve for the text rottweiler, we see that the top result is dog_5, and dog_5 is indeed a rottweiler.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12)
> **Env Vars:** llm (2), rag (1), gpt (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Find anomalies in your embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=6)** - [Instructor] Now that we've seen how to build a multimodal RAG application by taking the images encoding the images, storing them into a vector database and using text with prompts to get an image back and a description of the image back, let's see if we can't find some anomalies in the data as well.
>
> **[0:30](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=30)** When it comes to data, you've probably heard the phrase garbage in, garbage out multiple times.
>
> **[0:36](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=36)** In this case, I challenge you to look through the vector database using the retriever and see where the text and the images may not match up.
>
> **[0:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=46)** Note that this will not be just a case of where the text and the images don't match, but also a function of the open clip model itself and the data that it was trained on.
>
> **[0:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=59)** And if you find anomalies, there are three things you can do for the anomalies.
>
> **[1:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=63)** You can fine tune the embedding model, ensure the data of good quality is of good quality, and use rerankers after you retrieve all of your results.
>
> **[1:13](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=73)** Here's a tip for this challenge.
>
> **[1:15](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=75)** While you can execute the whole RAG chain, you can also do this section without the LM at all.
>
> **[1:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/challenge-find-anomalies-in-your-embeddings?u=76281980&t=81)** Good luck and see you in the solution video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), match, (1), function (1)
> **CLI Commands:** find (2)
> **Env Vars:** rag (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Find anomalies in your embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=0)** - [Instructor] All right, welcome to the solution piece.
>
> **[0:09](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=9)** There are quite a few anomalies that you can find.
>
> **[0:12](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=12)** Here, we're going to see two of them.
>
> **[0:16](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=16)** The solution I chose to go with was to take the vector database in its retriever format and just use that directly, bypassing the LLM.
>
> **[0:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=26)** So let's look at four examples.
>
> **[0:28](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=28)** Two that show good data quality and two that show an anomaly.
>
> **[0:34](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=34)** So we have this example from before where we saw the Rottweiler, which is dog number five.
>
> **[0:40](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=40)** And that is correct.
>
> **[0:44](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=44)** Here, let's also search with an image.
>
> **[0:46](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=46)** So if we encode the image of the cat, we should get cat_1 and we see that we do get cat_1 back here as the top results.
>
> **[0:56](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=56)** Now let's look for a gray cat with long hair in a field.
>
> **[1:01](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=61)** So that's this cat, that's cat_2.
>
> **[1:05](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=65)** And when we run this, we actually see that dog_5, the Rottweiler, is actually the top results.
>
> **[1:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=71)** And we probably need to get a different embedding model or fine tune our embedding model in order to get the right result here.
>
> **[1:21](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=81)** Here, we see golden retriever playing with an orange ball.
>
> **[1:26](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=86)** That's this dog here, dog_2.
>
> **[1:29](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=89)** And we see that our top result is indeed dog_2.
>
> **[1:33](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=93)** And this example, we have golden retriever in a field with a sunny blurred background, which is dog number four, golden retriever in a field, sunny blurred background.
>
> **[1:45](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=105)** And that actually gives us cat_3, a gray cat on a laptop as our top result.
>
> **[1:53](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=113)** Once again, we see that dog_4 is not in the results, just like with cat_2.
>
> **[1:59](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/solution-find-anomalies-in-your-embeddings?u=76281980&t=119)** So we probably need to fine tune or replace our embedding model.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (4), find (1)
> **Code Keywords:** let (3), this, (1)
> **Env Vars:** llm (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980&t=0)** - [Yujian] Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980&t=3)** You've now put yourself ahead of all of the developers who aren't building rag applications and most of the developers that are.
>
> **[0:11](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980&t=11)** You can find more resources on my GitHub @ytang07 as well as connecting with me on LinkedIn.
>
> **[0:19](https://www.linkedin.com/learning/advanced-rag-applications-with-vector-databases/next-steps?u=76281980&t=19)** I hope to see all the cool projects you make, and I'll be happy to share the projects you send my way.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Tools:** github (1)
> **Speakers:** - [yujian] (1)


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