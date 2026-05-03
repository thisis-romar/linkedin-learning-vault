---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai
url: "https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai"
duration_minutes: 114
duration: 1h 54m
level: Intermediate
updated: 1/30/2025
learners: 3810
skills:
  - Machine Learning
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Azure AI Foundry
exercise_files: true
github: "https://github.com/LinkedInLearning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG-x1Hq4RJ1fw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736370122951?e=2147483647&amp;v=beta&amp;t=5nuq4RIL9cR3GIpBduJjWRorj4-LziTQUyuLYyeYxLQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Build AI Products Using Azure AI Services in Your Development Lifecycle]]'
prev_courses:
  - '[[Azure AI for Developers- OpenAI Services and Generative AI Models]]'
next_courses:
  - '[[Azure AI for Developers- Content Safety and Responsible AI]]'
path_nav: '[{"path":"Build AI Products Using Azure AI Services in Your Development Lifecycle","position":5,"total":8,"prev":"Azure AI for Developers- OpenAI Services and Generative AI Models","next":"Azure AI for Developers- Content Safety and Responsible AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/machine-learning
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/azure-ai-foundry
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20for%20Developers-%20Retrieval-Augmented%20Generation%20(RAG)%20with%20Azure%20AI.md)

![Azure for Developers: Retrieval-Augmented Generation (RAG) with Azure AI](https://media.licdn.com/dms/image/v2/D4E0DAQG-x1Hq4RJ1fw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736370122951?e=2147483647&amp;v=beta&amp;t=5nuq4RIL9cR3GIpBduJjWRorj4-LziTQUyuLYyeYxLQ)

# Azure for Developers: Retrieval-Augmented Generation (RAG) with Azure AI

> In this course, Ziggy Zulueta—a Microsoft AI Most Valuable Professional and Certified Trainer—uses examples and practical applications to show you how to leverage Python with Azure Open AI, Cosmos DB, and AI Search to create cutting-edge Retrieval-Augmented Generation (RAG) solutions for enhanced data precision. Dive into RAG fundamentals, Python-based implementations, and performance evaluation m

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai) | 1h 54m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Intro to RAG with Azure AI](#intro-to-rag-with-azure-ai)
  - [Course prerequisites](#course-prerequisites)
- [**1. RAG Core Concepts**](#1-rag-core-concepts) (5 videos)
  - [Fundamental concepts of RAG](#fundamental-concepts-of-rag)
  - [RAG process and architecture](#rag-process-and-architecture)
  - [Vector databases](#vector-databases)
  - [Azure OpenAI embeddings model](#azure-openai-embeddings-model)
  - [Creating a RAG solution with Azure AI Foundry](#creating-a-rag-solution-with-azure-ai-foundry)
- [**2. Azure AI Search**](#2-azure-ai-search) (11 videos)
  - [RAG using Azure AI Search](#rag-using-azure-ai-search)
  - [Preparing your resources for RAG](#preparing-your-resources-for-rag)
  - [Creating a search index](#creating-a-search-index)
  - [Creating a data source](#creating-a-data-source)
  - [Creating a skillset and indexer](#creating-a-skillset-and-indexer)
  - [Querying your data](#querying-your-data)
  - [Azure AI Search: Import and vectorize data](#azure-ai-search-import-and-vectorize-data)
  - [Sending query results to a language model](#sending-query-results-to-a-language-model)
  - [Other approaches](#other-approaches)
  - [Challenge: Create a RAG solution using Azure AI Search](#challenge-create-a-rag-solution-using-azure-ai-search)
  - [Solution: Create a RAG solution using Azure AI Search](#solution-create-a-rag-solution-using-azure-ai-search)
- [**3. Azure Cosmos DB**](#3-azure-cosmos-db) (5 videos)
  - [RAG using Azure Cosmos DB](#rag-using-azure-cosmos-db)
  - [Creating Azure Cosmos DB resource](#creating-azure-cosmos-db-resource)
  - [Set up Azure Cosmos DB for RAG](#set-up-azure-cosmos-db-for-rag)
  - [Challenge: Create a RAG solution using Azure Cosmos DB](#challenge-create-a-rag-solution-using-azure-cosmos-db)
  - [Solution: Create a RAG solution using Azure Cosmos DB](#solution-create-a-rag-solution-using-azure-cosmos-db)
- [**4. Evaluating RAG**](#4-evaluating-rag) (5 videos)
  - [Evaluation metrics in generative AI](#evaluation-metrics-in-generative-ai)
  - [Preparing your evaluation dataset](#preparing-your-evaluation-dataset)
  - [Evaluate with the Azure AI Evaluation SDK](#evaluate-with-the-azure-ai-evaluation-sdk)
  - [Challenge: Evaluating a RAG application](#challenge-evaluating-a-rag-application)
  - [Solution: Evaluating a RAG application](#solution-evaluating-a-rag-application)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary and next steps](#summary-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to RAG with Azure AI](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/intro-video-to-be-renamed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/intro-video-to-be-renamed?u=76281980&t=0)** - [Ziggy] Are you ready to unlock the power of Gentic AI with [[Microsoft Azure|Azure]] and [[Python (Programming Language)|Python]] qto transform your business data? Retrieval augmented generation, or RAG, is changing how companies deliver precise data-driven results. But building a RAG solution can feel overwhelming without the right tools. That's where this course comes in. I'm Ziggy Zulueta and I've helped professionals like you leverage Python with Azure AI Search, Cosmos DB, and OpenAI to create cutting edge RAG solutions. In this course, we'll cover RAG fundamentals, Python based implementation and performance evaluation step by step. Let's unlock your data's full potential. Ready? Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** rag (4)
> **CLI Commands:** python (3)
> **Speakers:** - [ziggy] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/course-prerequisites?u=76281980&t=0)** - [Narrator] We have the following prerequisites for this course. All the videos on this course will cover code developed in [[Python (Programming Language)|Python]], hence, an understanding of Python would be needed. In addition, you need experience in [[GitHub]] [[Codespaces]] to be able to run the notebooks in this course. Alternatively, the notebooks can be run locally via Visual Studio Code. Finally, it is important that one has access to [[Microsoft Azure|Azure]] to create the needed resources such as Azure OpenAI, Azure Cosmos DB, and Azure AI Search.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Python (Programming Language)|Python]] (2), [[GitHub]] (1), [[Codespaces]] (1)
> **CLI Commands:** python (2)
> **Tools:** github (1), visual studio (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 1. RAG Core Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Fundamental concepts of RAG](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/fundamental-concepts-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/fundamental-concepts-of-rag?u=76281980&t=0)** - [Instructor] [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] or RAG is the technique of adding data to a language model from an external data source. Since language models are trained on a large set of data, mainly from the internet, they have no knowledge of your private corporate data, such as legal contracts, product manuals, customer information sheets, and software code. RAG solves this problem allowing you to get insights from your private data with the language model. Think of RAG as an open-book exam. You bring all relevant documents to help answer questions without needing to memorize everything. You are unable to answer the questions once the exam is done and no longer have access to these documents. It is the same principle as RAG. Answers to the questions come from external documents you attach to the RAG solution. The system is unable to answer the same questions when the documents are detached since they're not stored in the model's internal memory. As we develop RAG solutions, it is also important to understand the concept of [[Tokens]] and embeddings as they help you understand how language models and RAG solutions work. Tokens play a huge part in RAG because language models like OpenAI are priced based on token usage. Whenever you provide a language model,
>
> **[1:35](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/fundamental-concepts-of-rag?u=76281980&t=95)** a query or a prompt in natural language, the system performs a process called tokenization to convert your words into numbers called tokens since computers understand numbers not words. The OpenAI tokenizer website is a very good guide. It shows you the token and character count for each [[Microsoft Word|word]] that you enter. It also shows you the token IDs assigned for each word. The tokens are then converted into vectors and mapped into a vector space so that the model can learn the relationships between words and their meanings. This process in turn is called embedding. Imagine a 3D space with vectors for words like dog, cat, bark, meow, and skateboard. In this space, dog and cat are close because they're animals and bark and meow are nearby because they're animal sounds. But skateboard is far from all of them as it's unrelated. This is a basic sample of embeddings in three dimensions. In this course, we'll use the [[Microsoft Azure|Azure]] OpenAI embeddings model, which ranges from hundreds to even thousands of dimensions. We will use this model to create the embeddings of our company data. Once you enter a prompt into a RAG system, it converts your prompts into tokens and vector embeddings
>
> **[3:11](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/fundamental-concepts-of-rag?u=76281980&t=191)** and uses those to find relationships with your company data, allowing it to generate a coherent response. Now that you understand the concepts of RAG, tokens, and embeddings, we can now discuss how RAG works and its architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (6), [[Microsoft Word|Word]] (2), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** rag (11)
> **CLI Commands:** cat (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [RAG process and architecture](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-process-and-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-process-and-architecture?u=76281980&t=0)** - [Instructor] Now that we understand the basic concept of RAG and the concepts of token and embeddings, let us discuss how RAG works. The first process is normally chunking, which allows large documents to be broken down into smaller documents. This process is important so that information is not lost. Imagine a document 1,000 pages long that is summarized into just two pages. Important details and information would be lost. If a page has a lot of information, you may need to break down the page into smaller pages to ensure details are not lost. It is normally the case that after chunking, you may end up with more pages than what you originally started. Two, the chunk documents are then converted into embeddings. We'll use the [[Microsoft Azure|Azure]] OpenAI embeddings model in this course. The embeddings are then stored in a data source for storage and retrieval. This data source will serve as a systems knowledge base. Steps one and two are primarily done during the initial setup or at a specified time interval based on document changes. The following next steps occur all the time when users interact with the system. Three, a user inputs a query in natural language and is converted into embeddings at runtime. The embedding model to be used
>
> **[1:32](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-process-and-architecture?u=76281980&t=92)** must be the same model used for your documents. Four, the user query in vector form is then sent to the RAG application. Five, the RAG application then searches the documents from the data source based on the vectorized query. This is the retrieval process in RAG. Six, the data source provides an output document search based on the search criteria. Seven, the search documents, plus the user query, are added together to form a new prompt. This is the augment process in RAG. The new prompt is then passed to the language model. Eight, the language model generates a response and is sent back to the RAG system. This is the generation process in RAG. Finally, the RAG system then provides the response to the user. For a RAG system to work, you generally need to have the following components. First, the retriever is your data source that would store your vector embeddings and will provide you the logic and the ability to search for those vector embeddings based on different retrieval and search methods. The retriever can be a search engine, such as Azure AI Search, or a vector database such as Azure Cosmos DB. Second, the language model generates a response
>
> **[3:07](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-process-and-architecture?u=76281980&t=187)** based on the user query and the search documents coming from the retrieval process. Third, the orchestrator integrates the retriever to the language model. It receives your user inputs, retrieves documents from your data source, and interfaces with the language model to generate a response. And finally, you always need a front end system. This front end system is where the user enters their query. It can be a website with a chat interface, a mobile app, an MS Teams channel, or even a simple command-line interface. It may also contain many features, such as having a chat history, feedback buttons, text-to-speech capability, the ability to upload files or images, and many more. In our course, we'll set up Azure AI Search and Azure Cosmos DB as the retriever, Azure OpenAI as the language model, and create an orchestrator using [[Python (Programming Language)|Python]]. With this kind of architecture, you'll have many options for a front end, from a mobile app to a web chat application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** rag (10)
> **Analogies:** such as (3), imagine (1)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Vector databases](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/vector-databases?u=76281980&t=0)** - [Instructor] We mentioned in the previous video that an [[Information Retrieval]] system, or retriever, is needed to act as your data source. This system would store your vector embeddings and provide the logic and ability to search for those embeddings based on different retrieval and search methods. A vector database is one of the most widely-used information retrieval systems in RAG. It is a database designed to store and manage vector embeddings. All [[Vector Databases]] will provide the ability to perform vector search. It's a method that helps you find similar items based on their data characteristics, rather than by exact matches on a property field. It works by taking the vector representations of your data created using an embedding model, like [[Microsoft Azure|Azure]] OpenAI embeddings, and measuring the distance between these data vectors and your query vector. The data vectors that are closest to your query vector are the ones that are found to be most similar sematically. Not all vector databases are alike, however. First, some [[Databases]] are just pure vector databases, while others are integrated vector databases. Pure vector databases are designed to efficiently store and manage vector embeddings, along with a small amount of [[Metadata]]. They are separate from the data source,
>
> **[1:35](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/vector-databases?u=76281980&t=95)** from which the embeddings are derived. Integrated vector databases, however, store, index, and query embeddings alongside the corresponding original data. This eliminates the extra cost of replicating data in separate pure vector databases. Moreover, keeping the vector embeddings and original data together better facilitates data operations and enables greater data consistency, scale, and performance. Second, some databases will have different search [[Algorithms]] available. While all vector databases provide you with the ability to perform vector searches, each may support different vector search algorithms. Examples of these algorithms would be Hierarchical Navigable Small World, HNSW; exhaustive K-nearest neighbors, KNN; Inverted File, IVF; and DiskANN, with each having their own pros and cons. The in-depth discussion of these algorithms are out of scope of the course. Some databases will have more search capabilities other than vector search, such as hybrid search, which combines the strengths of both vector search and keyword search. Some scenarios, such as searching for product codes,
>
> **[3:12](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/vector-databases?u=76281980&t=192)** highly specialized jargon, dates, and people's names, can perform better with keyword search because it can identify exact matches. Third, some databases will perform better based on the data source type. Azure AI Search, for example, is your choice if data is composed of large PDF files. Azure Cosmos DB would do best for [[JSON]] data. Finally, each vector database has its own additional features. For example, Azure Cosmos Database is a globally-distributed database platform. While Azure AI Search allows you to create vector embeddings with your data using a simple GUI, making it accessible for non-developers. In this course, we will be covering a few Azure technologies as data sources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vector Databases]] (8), [[Microsoft Azure|Azure]] (6), [[Databases]] (4), [[Algorithms]] (4), [[Information Retrieval]] (2)
> **Env Vars:** rag (1), hnsw (1), knn (1), ivf (1), pdf (1)
> **Analogies:** such as (2), for example (2)
> **Cross-References:** we mentioned (1), previous video (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Azure OpenAI embeddings model](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-openai-embeddings-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-openai-embeddings-model?u=76281980&t=0)** - [Instructor] In the previous videos, we discussed how embeddings are important in RAG. Our documents are stored in vector form in our database, and user queries need to be converted into vector form to search for documents in the knowledge base. An embedding model is needed for text to be converted into numerical vectors. In this course, we'll be using the [[Microsoft Azure|Azure]] OpenAI embed model to convert both our documents and user queries into vector form. As of this recording, we currently have three models. Text-embedding-3-large, text-embedding-3-small, and text-embedding-ada-002. The newer embedding three models perform better than the older ada-002 model, so it's recommended that you use the newer ones. They also have different dimensions. The older version, ada-002, has a size of 1,536 dimensions, and they cannot be modified. Text-embedding-3-small will have 1,536 dimensions while text-embedding-3-large will have 3,072. Both the new models will have the option to lower their dimension size. Larger embeddings are more expensive from a compute memory and storage perspective. You can reduce the dimensions of the embedding
>
> **[1:35](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-openai-embeddings-model?u=76281980&t=95)** by using the dimensions parameter of the newer models without sacrificing performance. This allows more control over cost and performance based on certain performance benchmarks such as MTEB. A text-embedding-3-large model shortened to a size of 256 will still outperform a text-embedding-ada-002 model with the size of 1,536. The dimensions parameter is not supported in all versions of the OpenAI [[Python (Programming Language)|Python]] library. To take advantage of this parameter, you need to upgrade to the latest version of OpenAI. Finally, there are some best practices that we should also consider. The maximum length of input text for the embedding models is 8,192 [[Tokens]]. You should verify that your inputs don't exceed this limit before making a request. If you are sending an array of inputs in a single embedding request, the maximum array size is 2048. Finally, when sending this array of inputs in a single request, make sure that you do not exceed the token per minute quota limit assigned when deploying the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[Python (Programming Language)|Python]] (1), [[Tokens]] (1)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** rag (1), mteb (1)
> **Cross-References:** we discussed (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Creating a RAG solution with Azure AI Foundry](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=0)** - [Instructor] This course is focused on creating a RAG solution in [[Microsoft Azure|Azure]] using the [[Python (Programming Language)|Python]] SDKs. However, I would like to demonstrate that you can also create one using [[Azure AI Foundry]]. We start by going to ai.[azure.com](https://azure.com) and create a project.
>
> **[0:27](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=27)** - The user interface that you see right now may look different by the time you see this recording, but the concepts will always remain the same. You need to create an Azure AI search service to set up your data source.
>
> **[0:54](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=54)** Project creation provisions a lot of new Azure resources, so it will take a while. Once the project is created, you then need to deploy two models.
>
> **[1:16](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=76)** We need to take note of the token limit assigned.
>
> **[1:30](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=90)** The chat completion model would be [[GPT-4]] Omni
>
> **[1:39](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=99)** to contain our data and embeddings. We will create a new index,
>
> **[1:58](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=118)** we will then upload our documents, which are PDF files that contain our product data.
>
> **[2:11](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=131)** We then assign an appropriate name for our index. We also need to make sure that vector search is enabled.
>
> **[2:25](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=145)** The index creation will take a while, but during this time, each of our text data is converted into vector embeddings. This is a three-step process. Once complete, we can inspect our Azure AI search resource in the Azure portal to see the data in its vector form.
>
> **[2:57](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=177)** We can now go to the playground and test our product index.
>
> **[3:09](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=189)** In the add your data section, we attach the index we created. We then test the index by submitting test questions.
>
> **[3:30](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=210)** We can use [[Prompt Flow]] to customize the model even further.
>
> **[3:41](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=221)** In this example, I cloned one of the available templates, Multi-Round Q&A on Your Data. To start a compute session,
>
> **[4:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=242)** we modified the different sections of the prompt flow to connect to our language model. We assign the product index we created, define the query type, and the number of documents to be retrieved.
>
> **[4:33](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=273)** We then test the prompt flow we created by providing sample questions.
>
> **[4:46](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=286)** Once the prompt flow is fully set up, we can deploy the model to [[Virtual Machines]].
>
> **[5:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=302)** Deployment will take a while, but once done, you can finally test the deployed model using sample questions.
>
> **[5:22](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=322)** We can then consume the model using its [[Representational State Transfer (REST)|REST]] endpoint or use the available code samples. To further illustrate how we can consume the deployed model, I will demonstrate to you how to access the model using Postman.
>
> **[5:50](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=350)** We copied the REST endpoint and set the method to post.
>
> **[6:01](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=361)** We specified the authorization setting in the header section by copying the primary key from the Foundry.
>
> **[6:14](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-rag-solution-with-azure-ai-foundry?u=76281980&t=374)** We then specified the [[JSON]] input in the body, which should contain the question and chat history. Here's another example with chat history captured. We have demonstrated in this video how you can create a RAG solution with no coding required. While this may be sufficient for a lot of companies who want a quick solution, their instances for encoding in Python is needed for more control and more customizations. We will demonstrate in the next chapters how to use Python to create these RAG solutions. If you want to know more about how to exclusively build RAG solutions with Azure AI Foundry, you may refer to this course on building RAG solutions with [[Azure AI Studio]]. [[Microsoft]] recently rebranded Azure AI Studio to Azure AI Foundry, but the concepts are the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Prompt Flow]] (4), [[Python (Programming Language)|Python]] (3), [[Azure AI Foundry]] (3), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** rag (5), rest (2), pdf (1), json (1)
> **CLI Commands:** python (3), make (1)
> **Tools:** azure portal (1), postman (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1), - the (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Cross-References:** in the next (1)


### 2. Azure AI Search

[↑ Back to Table of Contents](#table-of-contents)

#### [RAG using Azure AI Search](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-ai-search?u=76281980&t=0)** - [Instructor] This chapter focuses on building a RAG solution using [[Microsoft Azure|Azure]] AI search and Azure Open AI with [[Python (Programming Language)|Python]].
>
> **[0:13](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-ai-search?u=76281980&t=13)** We will use the high level architecture specified in the Azure AI search documentation. When users provide their prompts to a front-end interface, the orchestrator, which we will build using Python, will send a prompt to Azure AI search to find relevant information. The prompt however, needs to be converted to vector form to perform vector search in Azure AI search. Azure AI search will return the top rank search results to the orchestrator, which in turn would combine that with the original prompt and send it to the language model. The language model generates a response based on the combined information and sends it back to the orchestrator to provide the response to the user. The decision about which [[Information Retrieval]] system to use is critical because it determines the inputs to the large language model. So let us discuss in more detail what Azure AI search does. All our searchable content in the RAG solution would be stored in a search index in Azure AI search. This search index stores index content, not the actual PDFs and images as they are stored in Azure storage. Our index would contain duplicate information of our source file, such as the title and actual text content,
>
> **[1:46](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-ai-search?u=76281980&t=106)** but you can also contain the output of an external process such as a vector embedding. Azure AI search can handle both texts and images as of this recording. Text data are indexed as either unaltered text coming from your data stored in Azure storage or vectors coming from an embedding model. Images are indexed as either unaltered text, which should contain text from the image or its image characteristics or in vector form as well. We'll also cover the concept of skills in Azure AI search to enhance your data. These data enhancements would be getting and embedding for text or images or using optical character recognition to get text from an image. Once the index contains our data, we will utilize the different query capabilities of Azure AI search. Azure AI search performs two layers of execution when it performs its search. Retrieval and ranking. Retrieval, often called L1, quickly finds all documents from the index that satisfy the search criteria. The service has full text search, which is best for exact matches rather than similar matches. Vector search, which are needed to match queries that have misspellings, synonyms, or phrasing differences to passages with similar meanings. And hybrid search, which performs both full text search
>
> **[3:24](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-ai-search?u=76281980&t=204)** and vector search, and uses an algorithm called Reciprocal Rank Fusion, RRF, to produce a single result set. Ranking, often called L2, reorders the L1 results based on higher quality relevant scores. Azure AI search uses semantic ranking as L2 ranker, which utilizes multilingual [[Deep Learning]] models adapted from [[Microsoft]] Bing. You can find more information about how Azure AI search performs all of these in these two blog posts. Now that we understand what Azure AI search is, let's create the needed resources in the Azure portal in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (18), [[Python (Programming Language)|Python]] (2), [[Information Retrieval]] (1), [[Deep Learning]] (1), [[Microsoft]] (1)
> **CLI Commands:** python (2), find (2)
> **Env Vars:** rag (2), rrf (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Preparing your resources for RAG](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=0)** - [Presenter] To set up our RAG system using [[Microsoft Azure|Azure]] AI search, we need to set up the following resources, an Azure OpenAI resource that will generate the responses, an Azure Storage resource that will store our documents, Azure AI search that has access to both the storage and OpenAI resource, and an Azure AI services multi-service account that will be used by Azure AI search for data enrichment. Let's discuss each of them in this video. First, we create an Azure AI search resource by searching Azure AI search in the Azure portal.
>
> **[0:49](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=49)** The important thing to consider is that you need to choose one region where all the resources would be located. The region we choose here would be used for the other resources. The search service needs to have a basic pricing tier or higher to have [[Semantic Search]]. The service has different scaling and networking options available to improve availability, performance, and security. We'll choose the default options for now. Once the search resource is created, we head to the semantic ranker setting, and we choose the standard plan. We then go to the identity setting and enable system assigned managed identity.
>
> **[1:59](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=119)** We then open our [[GitHub]] [[Codespaces]]. We create an environment file. We then go to the overview, copy the URL to copy the primary admin key, and paste them in our environment file in GitHub Codespaces. Second, we search for Azure OpenAI in the Azure portal and create an Azure OpenAI resource.
>
> **[2:55](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=175)** We use the same location where our Azure AI search is located.
>
> **[3:08](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=188)** Once the Azure OpenAI resource is created, we go to access control, and we assign a cognitive services OpenAI user role assignment to the Azure AI search system assigned managed identity.
>
> **[3:34](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=214)** You then need to deploy a chat completion model and an embeddings model. We will be deploying a [[GPT-4]] Omni
>
> **[3:58](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=238)** and a text-embedding-3-large model for this course.
>
> **[4:14](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=254)** We then find our keys and endpoints, and store these values along with the models we deployed in the same environment file in GitHub Codespaces.
>
> **[4:36](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=276)** Third, we search for storage account in the search bar to create a storage resource.
>
> **[4:49](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=289)** Again we use the same location where the other resources are located. Choose blob storage as the primary service. This resource will contain your data files, so choose the appropriate redundancy based on business need.
>
> **[5:15](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=315)** Once the storage resource is created, we head back to access control.
>
> **[5:28](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=328)** We then assign a storage blob data reader role
>
> **[5:38](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=338)** to our Azure AI search system assigned managed identity.
>
> **[5:53](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=353)** We then create a container,
>
> **[6:04](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=364)** and upload all our data documents there.
>
> **[6:16](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=376)** We then go to our access keys and copy our connection string, and save it to our environment file.
>
> **[6:38](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=398)** Finally, we will create an Azure AI services multi-service account to enrich our search data.
>
> **[6:54](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-resources-for-rag?u=76281980&t=414)** Once created, we go to the keys and endpoint, copy the key, and store it as well in our environment file. To summarize, we need to have four resources, an Azure AI services multi-service account, Azure OpenAI, Azure AI search, and Azure Storage. Their respective configurations must then be stored in your environment file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (21), [[GitHub]] (3), [[Codespaces]] (3), [[Semantic Search]] (1), [[GPT-4]] (1)
> **Tools:** github (3), azure portal (2)
> **UI Navigation:** go to (5)
> **Env Vars:** rag (1), url (1), gpt (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Speakers:** - [presenter] (1)

#### [Creating a search index](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980&t=0)** - [Instructor] Once all our resources are ready, we start by creating a search index in [[Microsoft Azure|Azure]] AI search. The search index contains your documents that are available to the search engine for indexing, full text search, vector search, and hybrid search. Mapping these concepts to more familiar database equivalents, a search index equates to a table, while documents are equivalent to rows in a table. The structure of a document is defined by an index schema. This schema would normally contain the following, an index name that is unique to the search service, a fields collection that defines your non-vector and vector fields. This collection describes your document. The non-vector fields will contain your document key, which is the unique identifier of a document, and other fields such as the title of the document, the text content, and any additional data enrichments we extract. Vector fields would contain the embeddings of selected non-vector fields. The index schema would also contain configurations, such as a vector configuration for [[Algorithms]] that create and compress the embedding space, settings on vector field definitions that are used in query requests,
>
> **[1:34](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980&t=94)** sematic configurations, and many more. In more detail, the fields collection in the index schema is where each field is named, assigned a data type, and assigned attributes based on how you want to use them. The attributes we use are the following, searchable for fields that will be used for full text or vector search, filterable for fields use in filter queries, sortable for fields that can be sorted, facetable for search results that include the hit count by category, document key to uniquely identify the document, and retrievable for fields that will be returned in a search assault. All the attributes except the key are set to true by default. A document must only have one key. We also discussed that the schema would include configurations. Since we have vector fields, we need to define our vector search configuration. As of this recording, Azure AI search supports Hierarchical Navigable Small World, HNSW, and exhaustive KNN. This may actually change in the future. Let us view in code how we define this index.
>
> **[3:09](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980&t=189)** At the very start, we need to install our dependencies, load our Azure configurations, and then define our index. We need to get access to our Azure AI search resource using our admin key. We then define a unique index name. We create a search index client using the endpoint and the credentials. We now define our fields collection. Our document will be a subset of a larger document that we intend to split up during indexing, so we will capture the parent with the parent ID field. Title contains the title of the document. Locations is a field that will contain our data enrichment. We will use our Azure AI multi-service resource using entity recognition to populate this field. Chunk ID and chunk contains a subset of the larger parent document. We discussed that chunking allows documents to be broken down into smaller documents so that information is not lost. Text vector will contain the embeddings of the chunk data. We define the dimensions of the vector and its profile name.
>
> **[4:51](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980&t=291)** We then define the vector search configuration. We'll be using Hnsw for this code, and use the AzureOpenAIVectorizer to perform the embeddings.
>
> **[5:10](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980&t=310)** We also define a [[Semantic Search]] configuration and scoring profile, which we will discuss in the next videos. We finally create the search index by assigning the name, fields, and all the configurations, and use the SearchIndex client to perform the creator update operation. We can now view the resource of the code in the Azure portal. Let's visit our search service, head over to the indexes, and view the index created. While the index does not contain any documents right now, we can view the fields we defined, the scoring profile, sematic configuration, and vector profile.
>
> **[6:17](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-search-index?u=76281980&t=377)** There are some HNSW settings set by default, but you can also modify this through code. To view more on how this can be done and to modify the other settings of our index, you can refer to this document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Algorithms]] (1), [[Semantic Search]] (1)
> **Env Vars:** hnsw (2), knn (1)
> **Cross-References:** we discussed (1), in the next (1)
> **Analogies:** such as (2)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating a data source](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-data-source?u=76281980&t=0)** - [Instructor] Once our index is created, we then need to create a data source connection. Recall that we initially save our documents in an [[Microsoft Azure|Azure]] blob container. Here's an example of what our documents look like. We need to create a data source connection through code for Azure AI search to access this container and the documents inside. We initially provided Azure AI search access to the storage by providing its system assigned managed identity, a storage blob data reader role. We now need to define a data source connection through [[Python (Programming Language)|Python]] code. First, we can briefly check if we have the proper Azure storage connection string.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-data-source?u=76281980&t=64)** By running this code, you will see the files inside the blob container. Now let's create our data source connection. We create this time a search indexer client using the search service endpoint and the credentials.
>
> **[1:32](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-data-source?u=76281980&t=92)** We set up the data source connection using the Azure storage connection string and the container name where files are located. We then create or update the data source by passing the data source connection to the search indexer client. After running the code, you can view the data source connection in the Azure portal.
>
> **[2:05](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-data-source?u=76281980&t=125)** We head over to our search service again, click data sources, and from here you can see the storage account and the blob container name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating a skillset and indexer](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=0)** - [Instructor] Once you have created an index and set up a data source, the next step is to create a skillset in [[Microsoft Azure|Azure]] AI search to access external processing, and an indexer to create our search index. A skill in Azure AI search is an operation that transforms our content in some way. We can view more information about this in [[Microsoft]] Learn. Skills are organized into three categories. Built-in skills require an Azure AI services, multi-service account resource, or an Azure OpenAI resource. In our example, we need the Azure AI services multi-service account to recognize location entities in our document and the Azure OpenAI to perform the vector embeddings. These processes have their own separate bill tied to the resource used. You can also create a custom skill using custom code, which you can access through a URI. We will not cover this in this course. Finally, utility skills are internal to Azure AI search, which do not require external resources. These operations are non-billable. In our code, we will use the entity recognition skill
>
> **[1:35](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=95)** to extract the location entity from our documents. Other popular skills available are image analysis, to extract a rich set of visual features from an image such as captions and tags. Key phrase extraction to extract key phrases from a document passage. Optical character recognition to recognize printed and handwritten text in images. Sentiment cognitive skill to determine the sentiment level of a document. All these skills require an Azure AI services multi-service account. The Azure Open AI embedding skill is used to connect to our Azure Open AI resource to generate our vector embeddings for our documents. The text split skill is a non bearable utility skill that splits large documents into small chunks. We need this skill so that information is not lost, and to ensure that chunks stay within the input limit of the embedding model. Let us head back to our code to see how the skillset is created. We first provide a name to the skillset.
>
> **[3:14](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=194)** We then define the text split skill.
>
> **[3:23](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=203)** We set the mode to pages and specify the maximum page length in characters and page overlap length, also in characters. This text split skill basically splits larger documents into 2,000 characters each, with a 500 character overlap.
>
> **[3:47](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=227)** The value specified here in code were based on an earlier article we shared on Azure AI search performance. The benchmarks shared in this blog post were based on a 512-token chunk count with 25% overlap. The 2,000 character count per page, with 500 character page overlap corresponds to the benchmark. Once the documents are split into smaller chunks, we use the Azure OpenAI embedding skills to generate embeddings using Azure OpenAI. We make sure to assign the proper Azure OpenAI endpoint and embeddings model we deployed. We then use the entity recognition skill to recognize location entities in each chunk. The search indexer index projection object is then used to specify how the data process by the skillset should be mapped to our search index. We get the Azure AI services key and then create a skillset by assigning the name, the skill we defined, the index projections, and the Azure AI services account. We then access the search indexer client
>
> **[5:27](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=327)** and use it to create or update the skillset.
>
> **[5:40](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=340)** After we run the code, we can then view the skillset in the Azure portal. We click Skillsets under Search Management and view the skillset.
>
> **[6:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=362)** Once the skillset has been created, we can finally go create an indexer to automate the data import and index creation.
>
> **[6:19](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=379)** We create a search indexer by passing the name, skillset, index, data source, and even a schedule. We access again the search indexer client to create or update the indexer.
>
> **[6:44](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=404)** We can check again in the Azure portal, the status of its indexer and its settings.
>
> **[6:59](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=419)** The indexer will import the data from the data source using the data source connection, and create the index using the skillsets it was given. In our case, the documents are split using the text split skill, embeddings were computed, and location entities extracted.
>
> **[7:30](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-a-skillset-and-indexer?u=76281980&t=450)** We can now view the index and its documents in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (18), [[Microsoft]] (1)
> **Tools:** azure portal (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** uri (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Querying your data](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/querying-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/querying-your-data?u=76281980&t=0)** - [Instructor] Once the indexer has created the index, let us manually check the index in the [[Microsoft Azure|Azure]] portal. Performing a quick search provides document results. You can see the parent_id, title, location entities extracted for each document, we can see the chunk_id and the chunk, which contains the actual text content of the document.
>
> **[0:40](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/querying-your-data?u=76281980&t=40)** We can set the text vector field to retrievable temporarily to see the vector embedding field in the search results. Here's the text vector with the dimension size of 1,024.
>
> **[1:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/querying-your-data?u=76281980&t=62)** As we discussed in an earlier video, Azure AI search can perform full text search, vector search, and hybrid search with reciprocal rank fusion in the retrieval step and semantic ranking in the ranking step. Let us demonstrate these in action through code. The code we have covered so far, steps one to four in the previous videos are to be performed during index creation. Once your index and indexer has been created, the following code is to be run every time a user makes a query. We first need to get access to our Azure search service and create a search client. Every time a user sends a query, the VectorizableTextQuery class converts this query into vector form and performs a search against the embeddings field. We specify the value of key nearest neighbors and its weight versus the full-text search. Having a weight below one indicates that we are giving more weight to the full-text search, while having a higher weight gives it more importance. We then perform a search using the search client. The search text parameter performs a full-text search
>
> **[2:37](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/querying-your-data?u=76281980&t=157)** against all non-vector searchable fields. Vector queries parameter adds a vector search component to the result. The select parameter indicates the fields to be returned in the result. The top parameter specifies the number of documents to be returned. To perform a pure full-text search, we should just remove the vector queries parameter while we need to remove the search text parameter to perform a pure vector search. We can then print out our results.
>
> **[3:34](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/querying-your-data?u=76281980&t=214)** To add the semantic ranker to our search operation, all we need to do is to set the query type semantic and specify the semantic configuration name. We can also add a scoring profile, which adds more way to documents that have locations matching the scoring parameters. This document in [[Microsoft]] Learn explains the scoring profile in more detail and where it is applied in the search process. Now that we know that the index contains our data, including Azure AI search works, we can now connect to our language model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft]] (1)
> **Code Identifiers:** parent_id (1), chunk_id (1)
> **Cross-References:** we discussed (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Azure AI Search: Import and vectorize data](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=0)** - [Instructor] We have shown in the previous video the steps to create an index and indexer using [[Python (Programming Language)|Python]]. There's actually an easier way to create an index using [[Microsoft Azure|Azure]] AI search using the import and vectorized data feature. You can see this option in the overview tab of Azure AI search. We specify Azure Blob storage as our data source.
>
> **[0:36](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=36)** Choose the storage account and Blob container where our files are located. Make sure to authenticate using managed identity.
>
> **[0:55](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=55)** We specify the Azure Open AI resource, our embedding model, and assign a system assigned identity in the authentication type. We also enable semantic ranker, any schedule when needed.
>
> **[1:23](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=83)** Once the index is created, we can see it created in the Azure portal. We need to wait before the index contains data. We can see that the vector index size we created in the portal is larger than what we created in Python. Upon further inspection, you would see that the vector dimension size is set to the default of our embedding model at 3072. We were able to modify this size earlier through code and choose a smaller number. We should also be able to see the new indexer, the new data source, and the new skillset created.
>
> **[2:24](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=144)** This new index, however, does not have the locations field because we are unable to call the entity recognition skill. To have the locations field populated like our original index, here are a few steps we can do.
>
> **[2:46](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=166)** First, we create the locations field in the index.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=180)** We go to the [[JSON]] setting of our original skillset and copy and paste the entity recognition skill to the new skillset.
>
> **[3:18](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=198)** We also copy and paste the locations field in index projections.
>
> **[3:33](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=213)** We then click connect AI service and select the proper AI services resource.
>
> **[3:50](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=230)** We then go back to the indexer, click reset,
>
> **[4:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=240)** and then click run.
>
> **[4:10](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=250)** We then head back to the index
>
> **[4:22](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/azure-ai-search-import-and-vectorize-data?u=76281980&t=262)** and see that the locations field is also populated. As we can see, the portal allows you to create an index easily. However, it lacks the full capabilities to modify a lot of configurations, which would've been available in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Python (Programming Language)|Python]] (3), [[JSON]] (1)
> **CLI Commands:** python (3), make (1)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** go to (1), select the (1)
> **Env Vars:** json (1)
> **Tools:** azure portal (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Sending query results to a language model](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/sending-query-results-to-a-language-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/sending-query-results-to-a-language-model?u=76281980&t=0)** - [Instructor] To summarize what we have done so far, we created an index, set up a data source connection, created a skillset, and then created an indexer. The indexer, using the skillset and data source connection would get our documents from storage and create the index. We then tested the index by performing a few query operations. Now that everything is set, we can start sending the search results to the language model to generate a response. We set up, again, the search client to connect to [[Microsoft Azure|Azure]] AI Search, and we also create an Azure OpenAI client.
>
> **[0:52](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/sending-query-results-to-a-language-model?u=76281980&t=52)** We create the SYSTEM_PROMPT that will provide instructions to the model on how it should behave and respond. We would also be passing inside the original query in our search results. The user query is captured and converted into vector form to perform a vector search.
>
> **[1:19](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/sending-query-results-to-a-language-model?u=76281980&t=79)** We then perform a search operation using the search_client and specify the type of search operation we want to use. In this example, we perform a hybrid search with semantic ranker, retrieving the top three documents.
>
> **[1:40](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/sending-query-results-to-a-language-model?u=76281980&t=100)** We then combine the search results into one variable and use a unique separator, such as repeated equal signs to separate source documents. We then send the system prompt and the formatted results to the language model and print out the result. We saw earlier in our semantic hybrid search that some documents would still be determined by Azure AI search, even if they do not relate to the user query.
>
> **[2:22](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/sending-query-results-to-a-language-model?u=76281980&t=142)** When we ask the question, "What can I see in the United States?" Three documents were returned. The first document was about the United States. The second document was also related to the United States, but our third document was about Sweden. If we specify to provide the top three results in every search operation, the results will always have three documents, regardless of whether they answer the query or not. The language model will correct this and decide on which of the documents provided to it is needed to generate the response. In our example, the language model chose two of the three documents in providing the answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3)
> **Prerequisites:** set up (2)
> **Code Identifiers:** search_client (1)
> **Env Vars:** system_prompt (1)
> **Cross-References:** earlier in (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Other approaches](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=0)** - [Instructor] In the previous videos, we discussed how we can create an index through an indexer with a skillset and through the [[Microsoft Azure|Azure]] portal using the import and vectorized feature of Azure AI search. In this video, I will show you that you can create an index without using an indexer and a skillset. We will also show you that your search index can contain multiple vector fields. Finally, I would like to demonstrate other various search capabilities of Azure AI search. We again, load our Azure configurations. We create an index using the same method we have done in the previous video. Once the code is completed, we can check the new index in the portal.
>
> **[1:08](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=68)** The main difference in this index is that we have two vector fields, one for the title and another for the content. Our data set is a [[JSON]] file with a list of Azure services. Each object represents an Azure service and is one document in our index. Heading back to the code, we then create our embedding separately without using a skillset and an indexer, We create an Azure OpenAI client, read our JSON file and compute the embeddings using the OpenAI client.
>
> **[2:09](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=129)** The output is saved in a new JSON file. You'll be able to see in this JSON file the ID, title, content, title vector, content vector and category.
>
> **[2:29](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=149)** We then upload the new JSON file with the vector embeddings to the index.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=159)** We then verify in the portal that the data has been loaded. Data loading will take a while. This notebook showcases the different search capabilities of Azure AI search. Vector search can handle different languages. In this example, we are searching for [[Software Development]] tools in Dutch.
>
> **[3:13](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=193)** We are then showing you here, how to search using exhaustive KNN regardless of what index you have. In order to perform this, you set the exhaustive parameter to true in your vector search. If you have two vector fields that use the same embedding model as this is the case in our index, we can perform a cross field vector search. In this case, we specify two vector fields in vectorizable text query.
>
> **[3:57](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=237)** We can also perform a multi-vector search by performing different vector queries and passing those in the vector queries parameter in our search operation. With this multi-vector search feature, you can pass different weights to each vector query, giving more importance to one versus the other.
>
> **[4:33](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/other-approaches?u=76281980&t=273)** You can also set a filter in your vector search. In this scenario, we are setting a filter on the category field, which was defined to be filterable. Putting it all together, we ask a question in French regarding Azure app service. We then perform two vector queries and perform a semantic hybrid search. We create the Azure OpenAI client, create the system prompt and format our search results. We then get a response from our language model. The decision on whether to use the Azure portal and Azure AI search indexer or to upload our data to the Azure AI search index directly will be based on business need. We are emphasizing here that there are many ways to use Azure AI search for varying needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[JSON]] (5), [[Software Development]] (1)
> **Env Vars:** json (5), knn (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Tools:** azure portal (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a RAG solution using Azure AI Search](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-create-a-rag-solution-using-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-create-a-rag-solution-using-azure-ai-search?u=76281980&t=0)** - [Instructor] It's time for a challenge. You are tasked to create a RAG solution using [[Microsoft Azure|Azure]] AI Search. Our data set is comprised of PDF documents with product information about the Contoso company. Here's a sample of these documents. Your task is to create a chat application that answers questions from these documents. The steps in this challenge are enumerated in this notebook. You need to set up an Azure AI resource Azure OpenAI and Azure Storage. Remember that you need to enable the system assigned manage identity for AzureAI Search and provide the appropriate rules to access Azure Open AI and Azure Storage. You will then create an index named product-index. Fields of your document should contain the title of the document, document content and contentVector. Vector size is 3,072 using the text embedding 3 large model. You'll upload your product files into a blob storage container named [[Microsoft Products|products]] and you should create a data source named product-ds so that the AzureAI Search can access these documents. You'll then create a skillset named product-ss. You need to split these large documents
>
> **[1:37](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-create-a-rag-solution-using-azure-ai-search?u=76281980&t=97)** and compute embeddings for each chunk. You will then create an indexer named product-indxr. You don't need to schedule the indexer for this challenge. Once the index is ready, you shall perform a semantic hybrid search to test the setup. You should ask sample questions from the product files. Finally, you will send the query results to a language model to generate the response. Use a [[GPT-4]] omni model and send the top five documents retrieved to the language model. You may reference our previous notebooks to get started. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Microsoft Products|Products]] (1), [[GPT-4]] (1)
> **Env Vars:** rag (1), pdf (1)
> **Prerequisites:** set up (1), setup (1)
> **Code Identifiers:** contentvector (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a RAG solution using Azure AI Search](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=0)** - [Instructor] So here's the solution to our challenge. We first set up our [[Microsoft Azure|Azure]] OpenAI, Azure AI Search, and Azure Storage accounts. No need to create an Azure AI Services multi-service account, given that we'll not perform any additional data enrichments. We then need to make sure that Azure AI Search has access to the two resources. We then go to our Storage account, create a new container named [[Microsoft Products|products]], and upload our product data.
>
> **[0:54](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=54)** Heading over to the code, we first need to create an environment file to load the necessary keys and endpoints, along with our Azure Open AI models, and load them to our Notebook. We then create an index similar to our previous videos. The only difference is that we do not create a location field. We also create our VectorSearch and SemanticConfiguration, but do not create a scoring profile. We create our index and name it product-index. We then create a data source connection to our Azure Storage account. If you are using the same Azure AI Search resource, make sure that this data source connection is given a unique name. We then create a skillset by assigning it a unique name, a SplitSkill, and an AzureOpenAIEmbeddingSkill. We then project them into our new index.
>
> **[2:24](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=144)** Finally, we create an indexer by also assigning it a unique name, the skillset we created, the new index and the data source we created earlier.
>
> **[2:45](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=165)** Once the indexer processing is complete, we should go to the Azure Portal to visually inspect the data their index.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=180)** We can temporarily retrieve the text vector for manual inspection.
>
> **[3:13](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=193)** We then head back to our code and test our setup with a manual search using test questions.
>
> **[3:24](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-ai-search?u=76281980&t=204)** Finally, we send the query results to a language model to generate the response. Great job on finishing the challenge. As this code is built in [[Python (Programming Language)|Python]], it is open to a lot of customizations that can meet your varied business needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Microsoft Products|Products]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (1), setup (1)
> **Tools:** azure portal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Azure Cosmos DB

[↑ Back to Table of Contents](#table-of-contents)

#### [RAG using Azure Cosmos DB](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-cosmos-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-cosmos-db?u=76281980&t=0)** - [Instructor] This chapter focuses on building a RAG solution using [[Microsoft Azure|Azure]] Cosmos DB and Azure Open AI with [[Python (Programming Language)|Python]]. Azure AI search is best when your data is unstructured in nature, such as contracts, product manuals, research documents, and service manuals. On the other hand, other data sources such as Azure Cosmos DB works best when your data has some structure such as product details, [[Customer Support]] tickets, customer profiles, [[IoT]] telemetry, and many more, which are stored in [[JSON]] documents or key value pairs. Here's a simple architecture of what we intend to accomplish. Azure Cosmos DB would hold both our documents and the embeddings and would act as a data source. Azure Open AI as the language model would generate the responses. We will then create Python code as the orchestrator to perform the following tasks. Like Azure AI search, we'll set up the Azure Cosmos DB, such as creating the database containers in appropriate settings and policies. However, unlike Azure AI Search, Azure Cosmos DB does not have a concept of an indexer and a skillset. We will programmatically compute the embeddings of the data and upload them to the Azure Cosmos database.
>
> **[1:36](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-cosmos-db?u=76281980&t=96)** The Python code will also convert user queries to embeddings and will perform the search operation in the database. Finally, our code will also send augmented prompt to Azure OpenAI to generate the response. We will be using Azure Cosmos DB for [[NoSQL]] as it has the most features for RAG as of this recording. It supports vector search with the following methods, a flat or K nearest neighbor's exact search sometimes called brute force, which can provide 100% retrieval recall for smaller focus vector searches, especially when combined with query filters and partition keys. A quantizedFlat index that compresses vectors using DiskANN based quantization methods for better efficiency in the KNN search. And finally, DiskANN, which is a suite of state of the art vector indexing [[Algorithms]] developed by [[Microsoft]] Research to power efficient, high accuracy vector search at any scale. You can get more information about this algorithm by reading this blog. In addition, it also supports three distance functions used to compute distance and similarity. Cosine, dot product, and Euclidean. Finally, it also supports full text search and hybrid search with reciprocal rank fusion.
>
> **[3:11](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/rag-using-azure-cosmos-db?u=76281980&t=191)** This Microsoft Learn documentation gives examples on when Azure Cosmos DB can be used for and where it is a poor fit. You can also read further in Microsoft Learn its other features such as security, performance, [[Scalability]], and many more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Python (Programming Language)|Python]] (3), [[Microsoft]] (3), [[Customer Support]] (1), [[IoT]] (1)
> **Env Vars:** rag (2), json (1), knn (1)
> **Analogies:** such as (4)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** quantizedflat (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating Azure Cosmos DB resource](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980&t=0)** - [Instructor] Now let's create an [[Microsoft Azure|Azure]] Cosmos database that can be used for a RAG application. We search for Azure Cosmos DB in the Azure portal.
>
> **[0:16](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980&t=16)** We then choose the Azure Cosmos DB for [[NoSQL]] option.
>
> **[0:28](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980&t=28)** Choose your location and other options needed for your business. Also, I am using the North Central US location because I was informed that this region supports hybrid search for RAG.
>
> **[0:51](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980&t=51)** Once the database is created, we need to enable our search features. We can find these features under settings.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980&t=66)** We enable full text and hybrid search,
>
> **[1:14](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/creating-azure-cosmos-db-resource?u=76281980&t=74)** and we also enable vector search. While the approval is instant, it may be wise to wait for around 15 minutes to ensure these are fully activated in your database. Finally, we copy our endpoint and keys and paste them to our environment file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[NoSQL]] (1)
> **Env Vars:** rag (2)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Set up Azure Cosmos DB for RAG](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=0)** - [Instructor] We shall now set up our [[Microsoft Azure|Azure]] Cosmos database for RAG. Like Azure AI search, we perform the following steps. First, we set up Azure Cosmos DB by creating the database, the container, and its policies, such as the vector embedding policy, full text search policy, and indexing policy. Second, we calculate embeddings for columns that require it. Third, we then upload the raw data plus the embeddings to the container. Since Azure Cosmos DB is an integrated database, if the raw data is already there, then we just need to upload the embeddings. Fourth, we send a query to the search engine to check results of our setup, and finally, we send the query results to our language model to generate a response. Steps one to four should only be done during the initial setup or when the data gets modified in the database. Let's explain these steps further in code. We first install the needed [[Python (Programming Language)|Python]] libraries
>
> **[1:25](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=85)** and we load our Azure configurations. We can use the same Azure OpenAI setup.
>
> **[1:38](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=98)** Now we set up our database. We create a Cosmos client and use that to create the database if it does not exist yet. Then we add our vector embedding policy. We define the columns that require embeddings, their data type, distance, function, and dimension. We identifying the columns that will have full text search. In this case, title, content, and category. We identify our indexing policy indicating our full text and vector indices. Finally, we create a container by signing to its parameters, the different policies. Once the container is created, we compute the embeddings using the same code we used in the previous chapter on different RAG approaches with Azure AI search. We will also use this [[JSON]] file as our data source.
>
> **[2:55](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=175)** What's important here is that the dimension size used during computation must match the size we use when creating the container. We then upload our data to the container. While waiting for the data loading to be finished, we can visit the Azure portal to see our container setup.
>
> **[3:29](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=209)** You can see the container policies, both the vector policy and full text policy. And the indexing policy we created.
>
> **[3:47](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=227)** You can then view as well the data and its embeddings.
>
> **[3:57](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=237)** Now let's perform a vector search to test our setup. We create a helper function that will be used during runtime. It creates a client to Azure Cosmos database, and also a client to Azure OpenAI. We convert our user query into a vector and use the embedding to search the database in order of vector distance. Now, let's test this helper function by making a query. Since we are displaying the top five documents, other documents not related to the user query will still come out, but with a lower score. Same as Azure AI search, it'll display the total number of documents based on our setting, regardless of similarity.
>
> **[5:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=302)** We then create a RAG application Using this helper function. We again create the Azure OpenAI client and its system prompt. We provide our user query and use the helper function to perform the search. We then format our results by combining them into one. Remember to use a unique separator to make the sources distinct. We then get the response from the language model. We know that only one document out of the five will answer the user query. The language model is supposed to filter that out as shown here. Now, let's demonstrate the full text search and hybrid search capabilities. As of this recording, it is only available in Azure Cosmos DB for no [[SQL]], but this can change in the future. In addition, it is an early preview and it's not available in all regions. My database right now is deployed in the north central US region for this demo.
>
> **[6:22](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=382)** You can read in the documentation, the different query supported and how they can be used.
>
> **[6:33](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=393)** In our code, we are building a query to retrieve records that contain our query in the title.
>
> **[6:46](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/setup-azure-cosmos-db-for-rag?u=76281980&t=406)** We can also perform a hybrid search by combining both our vector search earlier and using the full text score. And performing an order by rank of reciprocal rank fusion. Like what we have done earlier, we send these search results in the language model to generate a response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Python (Programming Language)|Python]] (1), [[JSON]] (1), [[SQL]] (1)
> **Prerequisites:** setup (5), set up (3), install (1)
> **Env Vars:** rag (3), json (1), sql (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is an  (2)
> **Cross-References:** previous chapter (1)
> **Documentation:** the documentation (1)
> **Tools:** azure portal (1)

#### [Challenge: Create a RAG solution using Azure Cosmos DB](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-create-a-rag-solution-using-azure-cosmos-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=0)** - [Instructor] It's time for our second challenge, this time to build a rag solution using [[Microsoft Azure|Azure]] Cosmos DB. We are introducing a new data set. This [[JSON]] file contains recipe information about a specific dish. Your goal is to build a rag solution using this dataset. I would like you to perform the following steps. First, you should set up your Azure Cosmos DB, specifically your database container and policies. Name your database, recipes hyphen database, and your container, recipes hyphen container. Vector embeddings must be 3072 in size and stored in a field called content vector. You should also use the cosine distance function and quantize flat type, and enable full text search in the name and description fields. You'll then create embeddings for the recipes.json file. We need all the key value pairs together so that when we ask questions about a specific recipe, the language model will be able to get similarities using all the data. We'll be using the text embedding three large model for this challenge. Step three, you'll then upload all the raw data
>
> **[1:35](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=95)** with the embeddings into the container. You should inspect the data in the container afterwards using the Azure portal. Step four, you will send a query to the search engine to check the results. You'll perform a hybrid search with the content vector and description fields. Finally, you will send your query results to a language model to generate the response. Take note, you may perform just pure vector search for this exercise if your database does not support hybrid search yet. As of this recording, not all regions support hybrid search.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[JSON]] (2)
> **File Paths:** recipes.json (1)
> **Env Vars:** json (1)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a RAG solution using Azure Cosmos DB](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-cosmos-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=5)** - [Instructor] Here is the solution to our challenge. We first load our [[Microsoft Azure|Azure]] configurations. To ensure that our embedding size is consistent throughout, we create a variable as well for it. We also assign a proper database and container name. We then set up our Azure Cosmos DB. We create a new database. We create a vector embedding policy and a content vector field, and we also assign the distance function to cosign. We then create a full text policy for the name and description fields, and then define our full text and vector indices. We finally create our container. We then create the embeddings for our recipes collection. We create [[Python (Programming Language)|Python]] code that combines each key value pair of a recipe object into a single string. We then generate embeddings for each combined string, and then add the new field called content vector to each recipe. We then upload the data into a new file.
>
> **[1:35](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=95)** We then upload this new data to our container. We go to the Azure portal and inspect the container. We can see the container policies, specifically the vector and full text policy, as well as the indexing policy.
>
> **[2:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=122)** We then look at the items collection and inspect an item.
>
> **[2:15](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=135)** Back to our code, we create a hybrid search helper function.
>
> **[2:24](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-create-a-rag-solution-using-azure-cosmos-db?u=76281980&t=144)** We build our query by selecting all the fields of each object and perform a reciprocal rank fusion using the vector distance and full text score. We need to select all the fields in the recipe object so that the language model can use those when generating a response. We then test our helper function. Finally, we send our results to the language model to complete the RAG application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** rag (1)
> **Tools:** azure portal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Evaluating RAG

[↑ Back to Table of Contents](#table-of-contents)

#### [Evaluation metrics in generative AI](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluation-metrics-in-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluation-metrics-in-generative-ai?u=76281980&t=0)** - [Instructor] Evaluation plays a very important role in developing a RAG solution as it builds trust and confidence in our application and ensures that responses are correct and behaving properly. [[Microsoft Azure|Azure]] has a comprehensive approach to evaluation, which includes three categories, risk and safety evaluators which evaluate potential risks associated with AI-generated content with varying degrees of severity, performance and quality evaluators which involves assessing the accuracy, groundedness, and relevance of generated content using robust AI-assisted and [[Natural Language Processing (NLP)|natural language processing]] metrics, and custom evaluators tailored to meet specific needs and goals. This document shows the definition of each different evaluator under each category.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluation-metrics-in-generative-ai?u=76281980&t=66)** Scrolling down further, you will then see the definition of how each evaluator is scored. You may want to read this document further to determine which one is appropriate for your business need. We will be using the Azure AI evaluation SDK to evaluate our RAG application. We first need to install the Azure AI evaluation SDK in our environment. This table shows you the three categories we previously discussed and all the classes available for each evaluator. Besides knowing the evaluators that you need for your business, the next most important thing to do is to prepare your evaluation data set. This data set is a set of query and response pairs with other required inputs. This data set must be saved in a file in a JSONL format. This table explains the different evaluators and the required inputs. The retrieval evaluator, for example, requires a query and context, while the similarity evaluator needs the query, response, and ground truth fields. The definition of each column can be found here. Some evaluators even support conversations,
>
> **[2:42](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluation-metrics-in-generative-ai?u=76281980&t=162)** which is a list of messages between a user and the language model. We will discuss in the next video how this evaluation dataset is prepared.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Env Vars:** rag (2), sdk (2), jsonl (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Preparing your evaluation dataset](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980&t=0)** - [Instructor] We discussed in the previous video that your evaluation data set should be in a JSONL format. The query and ground truth can be built manually by a subject matter expert who has full knowledge of the dataset and has an understanding on the different kinds of questions that would come from end users. They may even use transcripts from previous conversations with end users to build the conversation list of the file. Once the query, ground truth, and conversations have been prepared, you'll need your RAG application to provide the response and context fields. I will not show you in this video how to manually prepare this file with a subject matter expert. Rather, I will demonstrate how this can be prepared using a library. In this notebook, we'll use Ragas, an open source library that provides tools to supercharge the evaluation of language model applications. You can view more its documentation in the link I shared in the notebook. We first install the necessary dependencies in our environment and load our [[Microsoft Azure|Azure]] configurations. While the library may be open source, we will still use Azure resources for this notebook. We first need to load our data using [[LangChain]],
>
> **[1:36](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980&t=96)** another open source library. We'll be using the same data sets we use in Azure AI search.
>
> **[1:49](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980&t=109)** We then set up our language models. Ragas needs the language model and the embeddings model.
>
> **[2:02](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980&t=122)** We then use these commands to generate our test set. Ragas uses a knowledge graph to create our test data. You can read more about it in their website. What is interesting to know is that it supports both single-hop and multi-hop queries. A single-hop just needs one document to provide a relevant answer. While a multi-hop query is more complex, because it involves multiple steps of reasoning, requiring information from two or more sources. Ragas will provide the four columns we need for the dataset. But recall that we only need the query and ground truth as we'll use our RAG application to provide the response and context fields. We save the Ragas output to a JSONL file, and you'll see that the response and context fields are empty. You can see in this file that we have 10 rows. Each row has a query which Ragas generated along with the ground truth. In our example, we only enable single-hop queries.
>
> **[3:31](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980&t=211)** We now call a RAG app to generate the other fields. Since our evaluation data set has multiple rows, we need to create a loop to go through each row. Our combined search results are saved in the context field while the language model response is saved in the response field. Running this code will take a while as it performs a search in Azure AI search and makes a call to our Azure Open AI language model for every row in our dataset. We need to make sure that our Azure Open AI model has the needed quota to complete this operation.
>
> **[4:23](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/preparing-your-evaluation-data-set?u=76281980&t=263)** Once completed, we can open our file and see that the response and context fields have been populated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[LangChain]] (1)
> **Env Vars:** rag (3), jsonl (2)
> **Prerequisites:** you'll need (1), install (1), set up (1)
> **Cross-References:** we discussed (1), previous video (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Evaluate with the Azure AI Evaluation SDK](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=0)** - [Instructor] So now that our evaluation set is properly constructed, we can now evaluate our RAG application using the [[Microsoft Azure|Azure]] AI Evaluation SDK. We install our dependencies and load our Azure configuration. We try out a sample with a single row to see the results. We extract one row from our evaluation data set and call the different evaluators. Some evaluators have special settings that we will not discuss in this video. Best to read their specific documentation. Getting the results is straightforward. However, accessing the risk and safety metrics needs you to log in with your Azure account first. If you haven't installed the Azure Command-Line Interface in your [[GitHub]] [[Codespaces]], you need to do so as well.
>
> **[1:23](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=83)** You need to choose the proper subscription in the terminal after logging in. Once logged in, you can now call the different classes in this category.
>
> **[1:42](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=102)** We can then upload our whole evaluation dataset and perform a batch evaluation. We first set up the different classes that we want, specify the path to our data file. We use the evaluate method by passing the path to our data, the different evaluators we intend to use, and the column mapping from our data file. We then save the result in a CSV file.
>
> **[2:28](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=148)** Since I use a lot of evaluators, the processing will take longer. Once complete, the evaluation result would look like this file. You can also view the results using [[Azure AI Foundry]] to have a better experience. We need to create a project in a region that supports evaluations in Azure AI Foundry, as not all regions are currently supported.
>
> **[3:06](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=186)** We then provide ourselves the Storage Blob Data Contributor role in the resource group where your Azure AI project is located. The two commands in the Notebook need to be run in the terminal to provide you the needed access. This command requires your subscription ID, resource group where your project is located, and your user ID. You can also assign yourself the proper role in the Azure Portal. The command we ran earlier gave us the Storage Blob Data Contributor role in the resource group. Once you have access, we run the same evaluate batch job previously. But this time, at the very end, we add an Azure AI project parameter.
>
> **[4:20](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=260)** Once complete, we can print out the URL, which points to Azure AI Foundry. In Azure AI Foundry, you can see all the automated evaluations we performed, and in more detail each evaluation we performed. With these results, we can see which queries performed well and which did not, and take the appropriate action. Finally, as a bonus, let us create a custom evaluator.
>
> **[5:03](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/evaluate-with-the-azure-ai-evaluation-sdk?u=76281980&t=303)** We first define a prompting file, which contains the configuration of the custom evaluator. In this file, we provide the name, description, model configuration, the inputs and outputs in our custom scoring system. And we also provided examples. You can view more information about this in this documentation. This custom evaluator evaluates the friendliness of the response. We then load the flow and print out the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Azure AI Foundry]] (4), [[GitHub]] (1), [[Codespaces]] (1)
> **Env Vars:** rag (1), sdk (1), csv (1), url (1)
> **Tools:** terminal (2), github (1), azure portal (1)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Evaluating a RAG application](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-evaluating-a-rag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-evaluating-a-rag-application?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/challenge-evaluating-a-rag-application?u=76281980&t=5)** - [Instructor] Here is our last challenge. You are tasked to evaluate the RAG solution you made with [[Microsoft Azure|Azure]] AI Search in the first challenge. You should create an evaluation set with at least 10 rows using the product PDF files we have. You will then perform evaluations on groundedness, relevance, coherence, fluency, similarity, as well as the four risk and safety metrics. Finally, you need to display the results in [[Azure AI Foundry]]. Do not forget to log in with your Azure account in the terminal and provide yourself the needed roles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Azure AI Foundry]] (1)
> **Env Vars:** rag (1), pdf (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Evaluating a RAG application](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980&t=4)** - [Instructor] So here's the solution to our challenge. We first load the needed [[Microsoft Azure|Azure]] configurations, and then we load our product PDF files.
>
> **[0:23](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980&t=23)** Assuming that our Azure OpenAI models are properly set up, we initialize the language model and embeddings model. We then generate a test set using our product files.
>
> **[0:45](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980&t=45)** We save the query and ground truths to our data set file, and do a quick inspection.
>
> **[0:58](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980&t=58)** We then run the data set through a for loop to generate the response and context columns. Make sure that you're using the RAG application we created in the first challenge.
>
> **[1:16](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980&t=76)** Verify that you're using the proper index when running this notebook. Now let's check the file to see if the response and context columns are populated.
>
> **[1:41](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/solution-evaluating-a-rag-application?u=76281980&t=101)** Once the file is completely formed, we choose the needed evaluators for the evaluation test and use the evaluate method to perform the evaluation. Make sure to populate the Azure AI project parameter. Once complete, we can now view the results in [[Azure AI Foundry]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Azure AI Foundry]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** pdf (1), rag (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary and next steps](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/summary-and-next-steps?u=76281980&t=0)** - [Instructor] Congratulations. We have completed the course. Let us summarize what we have covered so far. We discussed that RAG is the technique of adding data to a language model from an external data source. This allows businesses to chat with their own data. We discussed the concepts of [[Tokens]] and embeddings and how they are important to determining your cost and finding similarities with your data. We discussed the concept of a vector database and how it is used to store your embeddings. We also discussed the [[Microsoft Azure|Azure]] OpenAI embedding model and how it was used throughout the course to convert our text into embeddings. We then showed you how we can create a RAG solution via [[Azure AI Foundry]], but there's a more detailed [[LinkedIn]] Learning course on the said topic. We then focus on creating a RAG solution using Azure AI Search. It involved the following steps. First, we created an index that contains your fields, vector search configuration, semantic configuration, and many more. We then created a data source connection to your Azure Storage account that stores your raw files. We then created a skillset that performs all the additional enrichments you need, such as document splitting, embeddings, entity recognition, and many more. We created an indexer that automates the processing
>
> **[1:34](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/summary-and-next-steps?u=76281980&t=94)** of accessing your documents to performing the data enrichments and creating the actual index. Once the initial setup is done, we then send queries to the search engine to verify the work. Finally, we send our query results to a language model to generate the response. You follow the similar steps when it comes to building a RAG solution using Azure Cosmos Database, we set up the database, the container, and its policies, specifically the vector embedding, full text search, and indexing policies. Since Azure Cosmos DB has no concept of an indexer like Azure AI Search, we create the embedding separately. The embeddings and its raw data are then uploaded to the container. If you have raw data already present in the container, then you just need to upload the embeddings. We send a query to the database to check the results, and finally, we sent our query results to a language model to generate the response. Finally, we discussed how evaluations can be performed in a RAG system. We discussed that we have three categories: risk and safety, performance and quality, and custom. Each category has different evaluator definitions and scoring methods. We discussed the requirement
>
> **[3:05](https://www.linkedin.com/learning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/summary-and-next-steps?u=76281980&t=185)** of setting up your evaluation data set and how it can either be done manually with the subject matter expert or how it can be done automatically using an open-source library. Finally, we use the Azure AI Evaluation SDK to perform the different evaluations and how the results can be seen in a file or through Azure AI Foundry. As this subject is constantly evolving, further studies are needed to stay ahead of the curve. You can explore further documentation in the following areas: Azure AI Foundry, to see how we can deploy other models and explore its other features; Azure AI Search, to see how the product is evolving and introducing new innovations, such as query rewriting; Azure Cosmos DB, to also see new features being introduced. Full text and hybrid search was just recently introduced at the time of this recording. I'm pretty sure there are a lot more to come. You can also further explore the different libraries that can be used to generate synthetic test data. We only explored one library, but there are a lot more. Finally, creating agents in Azure is also a very promising area. A new LinkedIn Learning course will be released on that topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[Azure AI Foundry]] (3), [[LinkedIn]] (2), [[Tokens]] (1)
> **Env Vars:** rag (5), sdk (1)
> **Cross-References:** we discussed (6)
> **Analogies:** such as (2)
> **Prerequisites:** setup (1), set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ziggy Zulueta]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/azure-for-developers-retrieval-augmented-generation-rag-with-azure-ai/codespaces)

## Skills Covered

- Machine Learning
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Azure AI Foundry

## Path Context

### In [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]
← [[Azure AI for Developers- OpenAI Services and Generative AI Models]] | **5 of 8** | [[Azure AI for Developers- Content Safety and Responsible AI]] →

## Appears In

- [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]

## Related Courses

_Courses sharing skills:_

- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Azure AI Foundry, Retrieval-Augmented Generation (RAG)
- [[Microsoft Azure Ai Essentials Workloads And Machine Learning On Azure]] — Artificial Intelligence (AI), Azure AI Foundry, Machine Learning
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)