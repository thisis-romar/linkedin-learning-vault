---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag
url: "https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag"
duration_minutes: 93
duration: 1h 33m
level: Advanced
updated: 2/23/2024
learners: 115527
skills:
  - Vector Databases
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFEZRGBDXpACg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708559021759?e=2147483647&amp;v=beta&amp;t=ZeBU9WKvFl8bsqczkk0x86BBL5bBcNP5Vxeht0v-_7o"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Become an AI Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Become%20an%20AI%20Engineer.md)'
  - '[Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)'
  - '[Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)'
prev_courses:
  - '[The AI Ecosystem for Developers- Models, Datasets, and APIs](The%20AI%20Ecosystem%20for%20Developers-%20Models%2C%20Datasets%2C%20and%20APIs.md)'
  - '[Generative AI- Working with Large Language Models](Generative%20AI-%20Working%20with%20Large%20Language%20Models.md)'
  - '[Generative AI- Introduction to Large Language Models](Generative%20AI-%20Introduction%20to%20Large%20Language%20Models.md)'
next_courses:
  - '[Advanced LLMs with Retrieval Augmented Generation (RAG)- Practical Projects for AI Applications](Advanced%20LLMs%20with%20Retrieval%20Augmented%20Generation%20(RAG)-%20Practical%20Projects%20for%20AI%20Applications.md)'
  - '[Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md)'
  - '[Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md)'
path_nav: '[{"path":"Become an AI Engineer","position":5,"total":10,"prev":"The AI Ecosystem for Developers- Models, Datasets, and APIs","next":"Advanced LLMs with Retrieval Augmented Generation (RAG)- Practical Projects for AI Applications"},{"path":"Building Generative AI Skills for Developers","position":4,"total":7,"prev":"Generative AI- Working with Large Language Models","next":"Advanced RAG Applications with Vector Databases"},{"path":"Master Retrieval-Augmented Generation (RAG)","position":4,"total":7,"prev":"Generative AI- Introduction to Large Language Models","next":"Advanced RAG Applications with Vector Databases"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/database-management
  - skill/vector-databases
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/LLM%20Foundations-%20Vector%20Databases%20for%20Caching%20and%20Retrieval%20Augmented%20Generation%20(RAG).md)

![LLM Foundations: Vector Databases for Caching and Retrieval Augmented Generation (RAG)](https://media.licdn.com/dms/image/v2/D560DAQFEZRGBDXpACg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708559021759?e=2147483647&amp;v=beta&amp;t=ZeBU9WKvFl8bsqczkk0x86BBL5bBcNP5Vxeht0v-_7o)

# LLM Foundations: Vector Databases for Caching and Retrieval Augmented Generation (RAG)

> As large language models grow in popularity, the infrastructure to be used around them also becomes vital to reduce costs, generate accurate responses, and improve efficiency. Vector databases play a vital role in several LLM use cases to help alleviate LLM shortcomings, reduce costs and latency. Knowledge of its basics and applications are vital for any engineer building applications with LLMs, a

> [LinkedIn Learning](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag) | 1h 33m | Advanced | 116K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [GenAI with vector databases](#genai-with-vector-databases)
  - [Course coverage and prerequisites](#course-coverage-and-prerequisites)
- [**1. Introduction to Vector Databases**](#1-introduction-to-vector-databases) (5 videos)
  - [What is a vector?](#what-is-a-vector)
  - [Vectorization in NLP](#vectorization-in-nlp)
  - [Vector similarity search](#vector-similarity-search)
  - [Vector databases](#vector-databases)
  - [Pros and cons of vector databases](#pros-and-cons-of-vector-databases)
- [**2. Milvus Database Concepts**](#2-milvus-database-concepts) (8 videos)
  - [Introduction to Milvus DB](#introduction-to-milvus-db)
  - [Milvus architecture](#milvus-architecture)
  - [Collections in Milvus](#collections-in-milvus)
  - [Partitions in Milvus](#partitions-in-milvus)
  - [Indexes in Milvus](#indexes-in-milvus)
  - [Managing data in Milvus](#managing-data-in-milvus)
  - [Query and search in Milvus](#query-and-search-in-milvus)
  - [Set up Milvus and exercise files](#set-up-milvus-and-exercise-files)
- [**3. Milvus Database Operations**](#3-milvus-database-operations) (8 videos)
  - [Create a connection](#create-a-connection)
  - [Create databases and users](#create-databases-and-users)
  - [Create collections](#create-collections)
  - [Insert data into Milvus](#insert-data-into-milvus)
  - [Build an index](#build-an-index)
  - [Query scalar data](#query-scalar-data)
  - [Search vector fields](#search-vector-fields)
  - [Delete objects and entities](#delete-objects-and-entities)
- [**4. Vector DB for LLM Query Caching**](#4-vector-db-for-llm-query-caching) (5 videos)
  - [LLMs and caching](#llms-and-caching)
  - [Prompt caching workflow](#prompt-caching-workflow)
  - [Set up the Milvus cache](#set-up-the-milvus-cache)
  - [Inference process and caching](#inference-process-and-caching)
  - [Cache management](#cache-management)
- [**5. Introduction to Retrieval Augmented Generation (RAG)**](#5-introduction-to-retrieval-augmented-generation-rag) (5 videos)
  - [LLMs as a knowledge source](#llms-as-a-knowledge-source)
  - [Introduction to retrieval augmented generation](#introduction-to-retrieval-augmented-generation)
  - [RAG: Knowledge curation process](#rag-knowledge-curation-process)
  - [RAG question-answering process](#rag-question-answering-process)
  - [Applications of RAG](#applications-of-rag)
- [**6. Implementing RAG with Milvus**](#6-implementing-rag-with-milvus) (4 videos)
  - [Set up Milvus for RAG](#set-up-milvus-for-rag)
  - [Prepare data for the knowledge base](#prepare-data-for-the-knowledge-base)
  - [Populate the Milvus database](#populate-the-milvus-database)
  - [Answer questions with RAG](#answer-questions-with-rag)
- [**7. Vector Databases Best Practices**](#7-vector-databases-best-practices) (4 videos)
  - [Choose a vector database](#choose-a-vector-database)
  - [Combine vector and scalar data](#combine-vector-and-scalar-data)
  - [Distance measure considerations](#distance-measure-considerations)
  - [Tune vector DB performance](#tune-vector-db-performance)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue with LLMs](#continue-with-llms)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [GenAI with vector databases](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/genai-with-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/genai-with-vector-databases?u=76281980&t=0)** As the users of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), or LLMs, grow exponentially, so is the infrastructure that is needed to build applications around them. One of the key helping technologies for using LLMs is [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). What is a vector database? What capabilities does it offer? How do they help with building applications around LLMs? That's what we will cover in this course. We will discuss vector database basics and a couple of popular use cases. And to get the most out of it, you should be familiar with machine learning, [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), and LLMs. I am Kumaran Ponnambalam. Let's get started to learn about vector databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1)
> **Definitions:** is a  (1)

#### [Course coverage and prerequisites](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/course-coverage-and-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/course-coverage-and-prerequisites?u=76281980&t=0)** Before we begin this course, let's quickly review the topics covered in the course and prerequisite skills required for learners. What is the scope of this course? [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) are based on the concept of vectors. We will quickly review the concepts around vectors and vector search. If you are not familiar with these concepts, I would recommend additional learning as needed. As an example vector database, we will study Milvus in this course. We will discuss concepts around the Milvus database and then set it up using Docker. Then we will proceed to do [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) operations like inserts, updates, and deletes with Milvus. We will query and do vector searches on this data. We will use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) notebooks for this exploration. Then we get into use cases for vector databases. First, we will use Milvus as a cache for LLM prompts and responses. Then we will use Milvus as part of a [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) or RAG system. What are the prerequisite skills for this course for the learners? The learner should be familiar with [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) concepts for machine learning. It's recommended to have prior experience in this area, especially around [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) and transformers. Exposure to using [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) or LLMs by providing prompts and consuming responses is desired.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/course-coverage-and-prerequisites?u=76281980&t=95)** Also, familiarity with text embeddings is helpful. The code for this course is in Python, so familiarity with Python and Jupyter Notebooks is required. Also, we will use Docker to set up Milvus locally, so that is also a prerequisite. We will use [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) as part of some of the examples. Familiarity with LangChain's capabilities is also desired. Let's now get into the course and start learning about vector databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (2), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1)
> **CLI Commands:** python (3), docker (2)
> **Prerequisites:** prerequisite (3), set up (1)
> **Env Vars:** llm (1), rag (1)
> **Tools:** jupyter (1)
> **Best Practices:** recommended (1)


### 1. Introduction to Vector Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a vector?](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/what-is-a-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/what-is-a-vector?u=76281980&t=0)** Before we start discussing [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md), let's quickly review the concept of vectors. In science, a vector is defined as an object that has both magnitude and direction. Magnitude may imply size or quantity. Direction implies a line, angle, or trend that this object refers to. The opposite of a vector is a scalar that only has magnitude but no direction. Here are some examples of vectors that we have studied in science. Velocity, momentum, force, weight, and temperature are all examples that have both magnitude and directions. Let's get closer to software programming and see how vectors are used there. A vector is a one-dimensional data structure that can be used to store data in software code. Popular programming languages support some form of vectors. Vectors are homogeneous in that they can only store elements of the same data type. For example, they can store either integers or strings, but not both in the same vector. Each element in the vector has a well-defined position and can be accessed directly using that position. They are similar to lists and arrays, but internally, they are different in how they are stored and accessed. An example of a vector is shown here. Again, it looks similar to a list or array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1)
> **Definitions:** is a  (2), defined as (1), refers to (1)
> **Analogies:** similar to (2), for example (1)
> **Prerequisites:** before we start (1)

#### [Vectorization in NLP](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vectorization-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vectorization-in-nlp?u=76281980&t=0)** Vectorization is a key concept in [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) or NLP for short. Let's quickly review its importance in NLP. Machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) today deal with a lot of text data. [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md), which are the foundation for [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), deal with text data mainly, but machine learning algorithms and architectures can only deal with numeric data. Even in transformers, the inputs and outputs are all numeric values. When using text data for training or inference, they need to be first transformed to equivalent numeric representations before they can be used. When doing so, the original meaning, context, and position information for the text data need to be properly represented in their numeric representations. Vectorization is the process of converting text data into numeric values. Text data is represented as a series of numeric vectors, and vectorization helps generate them. These vectors capture the structure and semantics of the original text. Vector outputs of the models also need to be converted to their text representations using the reverse process. There are several vectorization techniques available in the world of NLP. The bag of words technique is perhaps the oldest one. It uses a base dictionary of words. For each sentence, it counts the number of occurrences of each [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) and then
>
> **[1:38](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vectorization-in-nlp?u=76281980&t=98)** [Forms](../../Skills/Web%20Development/Forms.md) a vector with these values. It does not capture positional information or other semantics. Text frequency-inverse document frequency or TF-IDF for short is another technique that improves upon the bag of words. It creates a matrix that can be used to measure the similarity between documents. TF-IDF can create sparse matrices of documents based on the number of unique [Tokens](../../Skills/Web%20Development/Tokens.md) encountered. Then comes word embeddings. Word embeddings also use a dictionary like bag of words, but each token in the dictionary is associated with an embedding vector. The embedding vector captures the semantic information between tokens, which helps in relating tokens of a similar meaning. Sentence embeddings are the newest vectorization technique, where a single embedding vector is created for an entire sentence or paragraph using machine learning models. It is popular for processing inputs and outputs in large language model-based applications. We will be using sentence embeddings in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1)
> **Env Vars:** nlp (3), idf (2)
> **Definitions:** is a  (1)

#### [Vector similarity search](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vector-similarity-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vector-similarity-search?u=76281980&t=0)** Vector similarity search is one of the important use cases when using vectors to represent text. It is a key feature in [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). Let's quickly review how vector similarity search works. Each vector is a series of data points represented in n dimensions. A given sentence or paragraph can be represented as a vector of data points called sentence embeddings. Similarity measures are used to find how close two given vectors are. This is used to find if two sentences are similar in their semantics. In order to measure similarity, we use distance measures. There are several distance measures available. The popular ones being Euclidean distance or L2, inner product or IP, and cosine similarity. I highly recommend for the learners to become familiar with these techniques as they play a key role in vector performance. So how do we find if two sentences are similar using vector similarity search? How can we find the closest string to an input query string from a list of strings? To begin, we need to vectorize the strings that are used for this comparison. This includes the list of strings that can be used for comparison. We can use one string or a collection of strings serving as a base to find the closest string to the query.
>
> **[1:37](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vector-similarity-search?u=76281980&t=97)** We don't have a query string that we compare against the base list of strings. This also needs to be vectorized. We can then compare the strings using approximate nearest neighbor [Algorithms](../../Skills/Software%20Development/Algorithms.md). There are several flavors available here. In this algorithm, we use one of the distance measures like L2 or IP to find the similarity between the query string and each of the strings in the base dataset. Finally, we get the list of matching strings sorted by the distance with the query string. We can thus retrieve the top-K results ordered by similarity. We will see examples of these in later exercises in the course. Now, let us start discussing vector databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** find (6)
> **Definitions:** is a  (2)

#### [Vector databases](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vector-databases?u=76281980&t=0)** What is a vector database? How is it different from other traditional [Databases](../../Skills/Software%20Development/Databases.md)? A vector database is a database that is optimized for storing vectors. It is specialized for storing vectors in an optimal fashion and helps in fast queries and searches on these vectors. What are some of the key features of [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md)? Of course, they support specialized data types for vectors. This can include both floating point vectors as well as binary vectors. They could also support regular scalar data types like integers, floating point numbers, characters, and strings. They support create, retrieve, update, delete operations on both vector and scalar data. They do have some level of support for data consistency and transaction isolation, though, not at the same level as traditional [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). One key distinguishing feature of vector databases is their ability to support similarity searches on vector data. They support distance measures like L2 and cosine out of the box. There are several vector databases available today. We can categorize them based on whether they are open source or commercial. Also, they can be specialized databases that are custom-built from scratch for vectors, or they can be other general
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/vector-databases?u=76281980&t=95)** purpose databases that additionally support storing and searching vectors. They can, again, be embedded, locally deployed, or available as a cloud service. Few of the popular ones are listed in each category. Milvus is an open-source vector database that is available for local deployments, as well as available as a managed service. [Chroma](../../Glossary/Service/ChromaDB.md) is an embedded vector database. [Pinecone](../../Glossary/Service/Pinecone.md) is a commercial vector database. [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) is a popular RDBMS that has a plugin called pgvector that can help with vector capabilities. We will use Milvus as the reference product to explore vector databases in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Chroma](../../Glossary/Service/ChromaDB.md) (1), [Pinecone](../../Glossary/Service/Pinecone.md) (1)
> **Definitions:** is a  (4), is an  (2)
> **Env Vars:** rdbms (1)

#### [Pros and cons of vector databases](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/pros-and-cons-of-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/pros-and-cons-of-vector-databases?u=76281980&t=0)** In this video, we will discuss some advantages and shortcomings of [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md), especially the specialized offerings. Let's begin with the advantages. Vector databases support [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md). They have built-in implementations of approximate nearest neighbor [Algorithms](../../Skills/Software%20Development/Algorithms.md), as well as a few distance measures. They support bulk data loading, which helps quickly load up large chunks of data like documents. They have indexing for vectors. This helps create indexes on vector fields and helps in executing semantic searches with low latency. They do have efficient data retrieval methods, especially for the large vector stores. They can scale well and can support high data and query volumes. Clustering and fault tolerance capabilities are also available to help with scale and redundancy. They are built for critical production applications. What are some of the shortcomings? They have limited support for traditional querying. Popular RDBMSs support several capabilities like joints and aggregations, but they are limited in vector databases. Similarly, the support for built-in functions like date and string manipulations are also limited. Transactional support is limited when it comes to achieving high levels of asset support.
>
> **[1:33](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/pros-and-cons-of-vector-databases?u=76281980&t=93)** They do exhibit latency when it comes to ingesting large data sets in a short amount of time due to index processing. Semantic searches are computationally expensive and may sometimes require GPUs for low latency. They are also memory-intensive as indexes need to be reloaded into memory for searching purposes. Unlike traditional RDBMS, integrations into third-party [products](../../Skills/Software%20Development/Microsoft%20Products.md) and tools are also limited. Vector databases are a fast growing domain triggered by the explosion of LLMs. We can expect that these limitations will be overcome with newer versions of these products over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** rdbms (1)


### 2. Milvus Database Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Milvus DB](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/introduction-to-milvis-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/introduction-to-milvis-db?u=76281980&t=0)** Having discussed the concepts of [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) in the previous section, we will now explore Milvus, a popular vector database. We will review key features and capabilities as well as set up the database and exercise files. What is Milvus? Milvus is a vector database. It is built for storing, indexing, and searching vectors. It is one of the top [Databases](../../Skills/Software%20Development/Databases.md) that is used today for [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). Its features are similar to other popular vector databases. Let's review some of the key features of Milvus. Milvus is available in both open source and commercial versions. We can download and install Milvus from open-source repositories, as well as purchase with additional support capabilities. Milvus can be deployed in several configurations. It can be installed as a standalone service for simple deployments. It can be set up as a cluster for [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and fault tolerance. It's also available as a managed cloud service called Zilliz cloud. This database is highly scalable for storing and searching vectors. Clustering helps it to scale horizontally. To help with vector search, it supports Euclidean distance, inner product, and cosine matrix. This is essential for effective [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) implementations. It provides hybrid [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) with support for scalar data types in addition to vectors.
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/introduction-to-milvis-db?u=76281980&t=96)** It also provides search capabilities combining both vector and scalar datatypes. Milvus has SDKs in popular languages like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), [Node.js](../../Skills/Web%20Development/Node.js.md), Go, and [Java](../../Skills/Software%20Development/Java.md) to help in building applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1)
> **Prerequisites:** set up (2), install (1)
> **CLI Commands:** python (1), node (1)
> **File Paths:** node.js (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Milvus architecture](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/milvis-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/milvis-architecture?u=76281980&t=0)** In this video, we will review the architecture of Milvus. We will be discussing a simplified version of the architecture at a logical level ignoring design details. Clients of Milvus typically access it through an SDK. They can also directly use the Milvus API to perform these operations. The SDK talks to the access layer in Milvus. The access layer is a RESTful gRPC API. It typically runs on Port 19530. When the SDK sends data definition language, or DDL, statements to the access layer, like creating [Databases](../../Skills/Software%20Development/Databases.md), collections, or users, the request is routed to a coordinator service. The coordinator service drives the Milvus cluster and performs all management and maintenance operations. It uses a [Metadata](../../Skills/Web%20Development/Metadata.md) storage for storing metadata about the cluster. This uses the etcd service by default for storage. When [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language, or DML, statements are received by the access layer, like inserts, updates, and deletes, they are sent to the message queue. By default, Milvus uses RocksMQ, but this can also be substituted by either Kafka or Pulsar for a message queue. The worker node does all the actual work in Milvus, whether it is storing, deleting, or querying data.
>
> **[1:34](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/milvis-architecture?u=76281980&t=94)** The coordinator service drives the worker node by helping it with metadata. All data is stored as part of an object store. By default, Milvus uses MinIO, but it can be replaced by S3 or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Blob if needed. How does querying work? When a query is received by the access layer, it is sent to the coordinator service. The coordinator service ensures that the query is accessing objects that are available and allowed for access by the specific user. It then uses the metadata to determine where the data is stored, and then communicates with the worker node to schedule the search. The worker node is responsible for loading indexes, searching, and returning results back. If you are interested in learning deeper about the architecture, please review Milvus architecture documentation. We will now move forward with the objects in Milvus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** sdk (3), api (2), ddl (1), dml (1)
> **CLI Commands:** node (4)
> **Code Identifiers:** grpc (1)
> **Ports:** port 19530 (1)
> **Definitions:** is a  (1)

#### [Collections in Milvus](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/collections-in-milvus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/collections-in-milvus?u=76281980&t=0)** We will now discuss some key storage concepts in Milvus. We begin with [Databases](../../Skills/Software%20Development/Databases.md) and collections in this video. What are databases in Milvus? A database is used to physically group similar entities and data. This organization is similar to other databases where the concept of a database, a tablespace, or a schema is used to group similar objects. Each Milvus instance can manage multiple databases. A single instance can have up to 64 databases. The default database in Milvus is called default. It is automatically created. If a new entity is created without specifying a database name, it is stored in the default database. A database serves as a container for data. It will store collections, partitions, and indexes within it. In Milvus, access control is implemented by database. Users can be created and configured at a database level. Roles can also be created for each database with specified permissions and then assigned to users. Databases help to support multitenancy in Milvus. Each tenant can be provided with their own database, and data belonging to that tenant can be stored there. This provides the highest level of tenant isolation within a Milvus database.
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/collections-in-milvus?u=76281980&t=96)** We then move on to Milvus collections. A Milvus collection is like a table that we find in traditional databases. It is the logical entry that is used to store and manage data. Each collection has a defined schema. A collection is created by providing a schema. Schema can also be modified with certain restrictions. Each field in a schema is similar to a column in a table. A field has its own datatype, size, and default values similar to database columns. Milvus supports several datatypes that cover both scalar and vector datatypes. A given collection can have a combination of scalar and vector fields. One of the scalar fields can be set as the primary key for the collection. This field cannot have duplicate values. These keys can also be auto generated if needed. This is defined in the schema. Milvus also supports dynamic fields that allow ad hoc fields to be added during data inserts. What are the datatypes supported in Milvus? On the scalar side, it supports integers with 8, 16, 32, and 64 sizes. Float and double are also supported for floating point storage. VARCHAR and Boolean are available to store string and Boolean values respectively.
>
> **[3:13](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/collections-in-milvus?u=76281980&t=193)** Milvus also supports complex datatypes like [JSON](../../Skills/Web%20Development/JSON.md) and array to store data in these formats. On the vector datatype side, a binary vector is used to store vectors with just binary values. Float vector is used to store floating point values, which is what most embeddings are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Analogies:** similar to (3)
> **Env Vars:** varchar (1), json (1)
> **CLI Commands:** find (1)
> **SQL:** varchar (1)
> **Definitions:** is called (1)

#### [Partitions in Milvus](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/partitions-in-milvus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/partitions-in-milvus?u=76281980&t=0)** Partitions are an important concept in Milvus that helps in performance. What is a Milvus partition? A collection in Milvus can be split up into multiple partitions. What is special about partitions? All data in a partition are stored physically together. Each collection gets created with the default partition called _default. When data is inserted into a collection, it goes into the default partition. However, we can specify a partition name during data insert to send the data to a specific partition. We can either create partitions manually and assign them manually during inserts, or we can use partition keys to automatically allocate data during inserts to specific partitions. Partitions help optimize storage and retrieval. This allows data to be grouped for storage using popular filter fields like tenant, customer, or device IDs as partition keys. When retrieving data for a given filter, fewer data blocks are retrieved from disk as they are stored together, resulting in better efficiency.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)

#### [Indexes in Milvus](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/indexes-in-milvus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/indexes-in-milvus?u=76281980&t=0)** In this video, we will review indexing capabilities in Milvus. What are Milvus indexes? Indexes play a key role in any database product to help speed up data retrieval. Milvus also has indexes to help with the same. In Milvus, we can create indexes on either scalar or vector fields. Scalar indexes work similar to RDBMS indexes. There can only be one index per field. Also, there is no support for composite indexes in Milvus. Indexes help organize vectors using an ANN metric type like L2 or IP. The index is set up in such a way that will help search using these metrics efficiently. Vector indexes are a prerequisite to perform ANN searches on vector fields. These indexes must be created before any such search. Milvus supports several index types which can be chosen based on the use case. Here is a list of popular index types in Milvus. This list is not exhaustive. Each index type has a specific internal organization. FLAT indexes are suitable for small dataset and have a 100% recall rate. IVF_FLAT helps in fast query on large datasets with higher recall rates, but not 100%. This is the most popular index type for vector searches.
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/indexes-in-milvus?u=76281980&t=96)** GPU_IVF_FLAT is used when GPUs are used for running Milvus vector search. Other index types are suitable based on use cases where they have limited resources or when we need to run really fast queries.

> [!info]- Semantic Content
>
> **Env Vars:** ann (2), rdbms (1), flat (1), ivf_flat (1), gpu_ivf_flat (1)
> **Prerequisites:** set up (1), prerequisite (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Managing data in Milvus](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/managing-data-in-milvus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/managing-data-in-milvus?u=76281980&t=0)** One of the key operations with the database is inserting, updating, and deleting data. Let's quickly review the capabilities provided by Milvus in this regard. We will demonstrate them with code examples in the next chapter. So what [Data Management](../../Skills/Software%20Development/Data%20Management.md) capabilities exist in Milvus? In Milvus, data is stored in collections. Each row or record in a collection is referred to as an entity. We will use entities and rows interchangeably in this course. In addition to inserting a single row of data, Milvus provides the ability to upload data in bulk. This is the most common pattern for data insertion, especially when loading large documents. It is also optimal to insert data in bulk rather than as individual rows. After inserts are done, a flush operation is needed before newly inserted data is indexed based on the indexes created. Milvus automatically flushes data after the pending records reach a specific size after insertion. But if immediate querying is needed, it is recommended to manually trigger the flush operation. Milvus also supports the absurd operation. In this case, if a duplicate record is inserted with the same primary key, the existing record is updated rather than creating a new record. Records can also be deleted using the primary key or a Boolean
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/managing-data-in-milvus?u=76281980&t=95)** expression as a filter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)

#### [Query and search in Milvus](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-and-search-in-milvus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-and-search-in-milvus?u=76281980&t=0)** Query and such are key capabilities that any database needs to support. Let's explore what capabilities are available in Milvus in this regard. Let's start with queries. In queries, we extract entities using scalar field-based filtering. This is very similar to the retrieval process in RDBMS, where [SQL](../../Skills/Data%20Science/SQL.md) statements are executed to extract data that match specific filter conditions. When running a query in Milvus, we can specify the output fields needed and the limits on the number of rows. We can also specify offsets, which is the number of rows to skip before returning the remaining data. This helps with pagination type queries. We can restrict the queries to specific partitions. This can be done by specifying the partition name in the query or using the partition key in the filter. For aggregations, only a count(*) feature is available. Other capabilities like sum or average are not available. Do note that the scalar querying capabilities are severely limited in Milvus when compared to RDBMSs. When executing queries, we can also specify filters on which rows to [Fetch](../../Skills/Web%20Development/Fetch.md) from the database. Milvus supports several popular filtering operators on field values. Comparison operators can be used to compare numeric data.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-and-search-in-milvus?u=76281980&t=95)** Logical operators can combine multiple filters to form a composite filter. Like can be used as a match operator for string filtering. In addition, array and [JSON](../../Skills/Web%20Development/JSON.md) operators are available for filtering on array and JSON datatypes. For more details on the filters, please refer to the Milvus documentation in the link provided. Next comes search on vector fields. Milvus provides the ability to search on any vector field using distance measures. An input string can be compared to strings in the database, and related strings can be extracted with [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md). For this, the input string or the search query should first be converted to a vector using the same embedding model as the one used when ingesting the vector field. The metric used for comparison should be the same metric that was used when creating the index for the vector field. Do note that the index is a prerequisite before search can be performed on the vector field. We can also specify the limit on the number of rows returned and an offset from which -- sorry. Repeating. We can also specify the limit on the number of rows returned and an offset from which to return rows. The query returns results in ascending order of distance to the search string. So if we only need the top five matches, we specify a limit of five.
>
> **[3:11](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-and-search-in-milvus?u=76281980&t=191)** To further restrict the query and filtered based on the distance between the input string and the vectors in the database, we can also specify the maximum allowed distance in the radius parameter. The smaller the distance, the higher the similarity. Do note that the range of values for distance will vary based on the metric type used, so radius needs to be adjusted for that. When returning results, the computed distance is also returned in addition to the query results. We will see examples of queries in the next chapter. Let's first get set up with Milvus and exercise files in the next video. You can read more about Milvus capabilities and commands by using the online documentation available in the website [milvus.io/docs](https://milvus.io/docs).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1)
> **Env Vars:** json (2), rdbms (1), sql (1)
> **Warnings:** note that (3)
> **Cross-References:** in the next (2)
> **Prerequisites:** prerequisite (1), set up (1)
> **URLs:** [milvus.io](https://milvus.io) (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Set up Milvus and exercise files](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-and-exercise-files?u=76281980&t=0)** We are now going to set up Milvus standalone service using Docker. If you are using either macOS or [Windows](../../Glossary/Service/Windows.md), please install Docker Desktop from the Docker website. Please download the exercise files for the course in a local directory similar to the one shown here. It has a Docker [compose](../../Glossary/Framework/Jetpack%20Compose.md) file, Jupyter Notebooks, and data files. The Docker compose file for this course is called milvus-standalone-docker-compose.yml. Let's explore this file now. It sets up four containers. The first container is the etcd container used for storing [Metadata](../../Skills/Web%20Development/Metadata.md). Then comes the MinIO container used for object storage. It is used to store the collections and indexes. Physical files are usually created under a folder called volume under the same root folder from where the Docker compose is run. Then comes the Milvus server with the name standalone. It connects to etcd and MinIO containers for data operations. It runs on Port 19530. Finally, we have Attu, which is a web-based user interface for viewing and managing Milvus. Do note that we have specified hard-coded versions of the images for all the containers. Milvus undergoes rapid changes.
>
> **[1:34](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-and-exercise-files?u=76281980&t=94)** You are free to change the version numbers, but it's not guaranteed that all the commands and code in this chapter will work as is. Let's now start the containers. Here we go back to the terminal window. If you are using Windows, please use the [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) window for this. Navigate to the directory where the exercise files are stored. Now, run the Docker compose command, docker-compose -f milvus-standalone-docker-compose.yml up -d. This will download the images if they are not already on your local Docker, and then proceed to start the containers. Depending on the download process, it may take some time to set up. Then check if all the containers are running using the command docker ps. We see there are four containers that are up and running here. Then start the Attu web UI using the command localhost:8000 on your browser. Connect to the Milvus server with the localhost and Port Number 19530. The UI will come up with a blank to begin with. Next, we will set up the exercise files and the environment to use for this course. All course exercises are built using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.11. We will be using Anaconda and Jupyter Notebooks for
>
> **[3:09](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-and-exercise-files?u=76281980&t=189)** the exercises. You can download and install Anaconda from the website [anaconda.com/download](https://anaconda.com/download) for your specific operating system. Once downloaded, we will go to the Anaconda UI. Here, we go to environments and create a new virtual environment called Milvus. This uses Python 3.11.5. Once you hit "Create," it may take some time to set up the environment. Once the environment is created, we go to Home. Here, we install Jupyter Notebook in this environment. We go back to the command prompt window now. Please note that if you are using Windows, you want to use the Anaconda command prompt for the same. Navigate to the folder where the exercise files are downloaded. We can explore these files in the command prompt. Now, let's activate the new virtual environment we created using the command conda activate Milvus. Then we can start the Jupyter Notebook server using the command jupyter notebook. Please make sure that you are in the same folder as the exercise files before using this command. This command then opened the Jupyter Notebook in the browser. The exercise files and the data files can be seen in
>
> **[4:45](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-and-exercise-files?u=76281980&t=285)** the root directory. We will use these files in later exercises. In the next chapter, we will start doing data operations in Milvus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (7), [Windows](../../Glossary/Service/Windows.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Tools:** jupyter (6), anaconda (5), command prompt (3), docker desktop (1), terminal (1)
> **CLI Commands:** docker (12), python (2), make (1)
> **Exercise Files:** exercise files (5), download the (2)
> **Prerequisites:** set up (4), install (3)
> **UI Navigation:** go to (3), navigate to (2)
> **Versions:** python 3 (2), 11.5 (1)
> **Cross-References:** go back to (2), in the next (1)


### 3. Milvus Database Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a connection](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-a-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-a-connection?u=76281980&t=0)** Having discussed several features about Milvus in the earlier chapter, let's exercise them in this chapter. We will create a collection, create indexes, populate data, and query the collection. In this video, we will start with creating a client connection to Milvus. The notebook for this chapter is in the file code_03_XX Milvus database operations. I have the notebook loaded up here. We first need to install prerequisite packages for these exercises. PyMilvus is the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) SDK for Milvus. OpenAI is the library we will use for OpenAI for both embeddings and for LLMs. Let's install these prerequisites now. We then move to the first step, connecting to a Milvus database. To connect to Milvus, we first need to add a connection to the list of connections. We specify a name for the collection as learn. Then we need to specify the host, port, username, and password for the connection. We have not set up any username or password yet, but this information is optional. We store the name of the connection in a variable for future reference. Then calling the connect method will create a connection to Milvus.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-a-connection?u=76281980&t=95)** Doing a list connections shows the list of connections from this client. Let's run this code now. Having opened a connection, we can now perform further operations using this connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Prerequisites:** install (2), prerequisite (1), set up (1)
> **CLI Commands:** python (1)
> **Env Vars:** sdk (1)

#### [Create databases and users](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-databases-and-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-databases-and-users?u=76281980&t=0)** Having created a connection to Milvus in the previous video, let's now create a database through the SDK and then check the list of current [Databases](../../Skills/Software%20Development/Databases.md). We first import the DB package from PyMilvus. This package has a list_database method that can be used to list all the databases that a given connection has access to. We get that list and print it. We don't see any databases at this point. We set the database name to course_db. If this database is not in the list of current databases, we then proceed to create the database. For this, we use the create_database method and also pass the connection ID. When a connection starts, it is usually in the context of the default database. To switch to the newly created database as the current one, we will use the using_database method. Going forward, all actions on this connection will be on the course_db database. Let's run this code now. Next, we will create a new user. We begin by using the utility package in pymilvus. The list_usernames method returns the list of all existing users for this database. This list is printed. If the user called course_admin is not in the list, we proceed to create the new user. There is already a public role available for this database
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-databases-and-users?u=76281980&t=95)** by default. To add the new user to the role, we first create a role object for this role and check if it exists. Then we add the new user to this role. Let's run this code now. Let's now switch to the Attu UI. It's running on Port 8000 on localhost. On the Home page, we get to pick the database we want to look at. Let's pick course_db. It shows the summary information about the database. It shows the total number of collections and those that are loaded into memory. The system info on the right side shows the Milvus version number, deployment mode, total users, and roles. Let's click on the "User" page. Here again, we get to choose the database we want to work with. We see the course admin user already created. We can add new roles here and set permissions for the role too. We can also assign these roles to users. Users can be created and managed here for each database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (4)
> **Code Identifiers:** course_db (3), list_database (1), create_database (1), using_database (1), list_usernames (1)
> **UI Navigation:** switch to (2), click on (1)
> **Ports:** port 8000 (1)
> **Env Vars:** sdk (1)
> **Cross-References:** previous video (1)

#### [Create collections](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-collections?u=76281980&t=0)** Having set up the database and users, let's now proceed to create a collection. For this, we will be using a dataset that contains course names and descriptions. We will create an embedding vector for the description and make it searchable. First, we need to set up a schema for the collection. For this, we need to define fields one by one. First, we have the course_id. We provide a name and use the datatype as INT64. This is also set as the primary key with a maximum length of 32. Then we have the title of the course that is set as a worker field with a max_length of 256. Then the description field is set as VARCHAR with a max_length of 2048. Finally, we set up the vector field for storing the embedding for the description. We specify the datatype as FLOAT_VECTOR. The dimension attribute should be set to the exact size of the embedding. This is based on the embedding model used. We will be using OpenAI's embedding model that gives embeddings of dimension 1536. Once the fields are set up, we create a collection schema with the fields list description for the collection and whether dynamic fields can be added. As discussed earlier, dynamic fields are new fields that can be added ad hoc during data insertion.
>
> **[1:37](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/create-collections?u=76281980&t=97)** We name this collection as courses_list. We then create a collection using the schema that we set up. The number of shards specify the amount of parallelism that is possible during DML operations. Once the collection is created, we can list all the collections for this connection. We can use the collection method to access an existing collection. The object created by the method can then be used to perform DML and query operations. Here, we create such an object and print the schema for the collection. Let's run this code now. When we go back to Attu and refresh it, we can see that there is one collection created. We can also click on the "Collections" page where we see the newly created collection shown. Clicking on the collection's name gives you the schema for the collection.

> [!info]- Semantic Content
>
> **Env Vars:** dml (2), int64 (1), varchar (1), float_vector (1)
> **Prerequisites:** set up (5)
> **Code Identifiers:** max_length (2), course_id (1), courses_list (1)
> **CLI Commands:** make (1)
> **SQL:** varchar (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### [Insert data into Milvus](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/insert-data-into-milvus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/insert-data-into-milvus?u=76281980&t=0)** Having created a collection, let's now insert some data into Milvus. In this video, we will discuss the preprocessing and the insertion steps needed. For this demonstration, we have a CSV file called course-descriptions.csv. This contains a list of five courses. The columns are course ID, title, and description. We will insert this data into Milvus, and we will also use embeddings for the description column for future search operations. Back to the notebook. First, we load up the CSV file into a DataFrame using [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and then display the top records. Running this code, we can see that it is properly loaded. In order to create embeddings, we will use OpenAI's sentence embedding model. This returns an embedding with a dimension size of 1536. We will set up the API key for OpenAI. It is recommended for you to get your own API key for OpenAI and use it in the code. We will initialize the OpenAI embeddings function from [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) for getting embeddings. If you use a free trial account, you may run into rate limits too. It is recommended to use a paid account to run these exercises. Let's run this code now. In order to insert data into Milvus,
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/insert-data-into-milvus?u=76281980&t=95)** we need to convert each column in the DataFrame into a list. Do note that this is column by column, not by row. We do that for course ID, title, and description columns. Then we create the list of embeddings for the descriptions by using the embed_query function. We finally form a list of all the column lists in the same sequence as the corresponding fields in the collection schema. To insert, we first initiate a collection object by passing the collection name and the connection ID. Alternatively, we can also use the same collection object that we created when creating the collection earlier. To insert data, we call the insert function with the input list. When this insert statement is executed, the new data items are only loaded to the processing queue. Milvus will asynchronously process them and insert them into the collection. This may take some time until the pending record size reaches a specific size. To force this processing, we will call the flush function to immediately insert the records. Flush may take some time to run depending upon the size of the pending data. Let's run this code now. The data is now inserted into the collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1)
> **Env Vars:** csv (2), api (2)
> **Best Practices:** recommended (2)
> **File Paths:** course-descriptions.csv (1)
> **Code Identifiers:** embed_query (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Build an index](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/build-an-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/build-an-index?u=76281980&t=0)** We added data to the collection in the previous video, but before we can use it for [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md), we need to create an index on the vector field. To create an index, we first need to set some parameters for the index. The metric type is used to indicate the distance measure that should be used to compare the vectors. This can be L2 or IP or cosine. Do note that the same metric type should be used when doing queries on this vector field. The index_type is set to IVF_FLAT. We discussed the options here in the previous chapter, and list indicates the number of clusters or buckets to create in this index. Higher values of this parameter can lead to better efficiency but lower search effectiveness. To create the index, we use the same collection object. We specify the field on which to create the index and the index parameters. We can check on the index creation process by using the index_building_process method as shown here. Let's run this code now. We can see that the index has been successfully created. Going to the Collections page for this course_db database, we can see the courses_list collection. On clicking on the collection name, we can see the schema and the indexes. In order to do a data preview or a data query, we first need to load the collection into memory.
>
> **[1:37](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/build-an-index?u=76281980&t=97)** To do this, we go back to the collection list. Click on the unloaded status of the collection. Then we hit the "Load" button to load the collection. Now it is loaded. We can then click on the collection name and then go to Data Preview to take a preview into the contents of this collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1)
> **Code Identifiers:** index_type (1), index_building_process (1), course_db (1), courses_list (1)
> **Cross-References:** previous video (1), we discussed (1), previous chapter (1), go back to (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** ivf_flat (1)
> **Warnings:** note that (1)

#### [Query scalar data](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-scalar-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-scalar-data?u=76281980&t=0)** Now that we have the data inserted and indexed, we are ready to run some queries. We will start with querying scalar data. Scalar data querying is similar to how RDBMS queries work. We already discussed the query capabilities available in Milvus in the previous chapter. Let's now run some sample queries. Before any queries or search can be executed, the collection should be loaded into memory. To do that, we use the collections load method on the collection. Then we will execute a query that will [Fetch](../../Skills/Web%20Development/Fetch.md) the title and description for course_id 1001. For this, we call the query method on the collection. We provide an expression that contains the filters for the query. The only filter we use here is the course_id. We then specify the output fields for the query in the output_fields parameter. We can then run the query and print the results. The output is a list of records. Each record is returned as a dictionary. We will then execute another query. This time we look at all the titles that starts with [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) and the course_id being greater than 1001. This demonstrates the use of multiple filters. Let's run this query now. We can see that there is one course, 1002, that matches the filter conditions.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/query-scalar-data?u=76281980&t=95)** We can also run queries in Attu. For this, we go to the specific collection and use the data query feature. We can provide an expression to filter. We will use the same expression as before. On hitting the "Query" button, we can see the results returned. Again, do remember to load the collection before, otherwise, it will give an error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1)
> **Code Identifiers:** course_id (3), output_fields (1)
> **Env Vars:** rdbms (1)
> **Cross-References:** previous chapter (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** remember to (1)

#### [Search vector fields](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/search-vector-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/search-vector-fields?u=76281980&t=0)** We saw some examples of scalar queries in the previous video. Now, let's execute vector search. As discussed earlier, for doing vector search, we need to convert the search string also to a vector before it can be compared using the same distance measure as the index. First, we define the search parameters for the search. This is set as L2. This should be of the same metric type that was used to build the index on the vector field. An index is a prerequisite for the vector field before it can be used for [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md). We set the offset to zero. This means the results are returned from the first scene match for the input query. Offsets can be used for pagination purposes. Ignore_growing is a Boolean parameter. Milvus internally processes data in segments. The parameter is whether the search should ignore segments that are not fully populated. If set to true, the search may ignore some newly added data. Setting it to false would also include all new data at an additional query cost. nprobe indicates the number of clusters to search starting from the most matching records cluster. Reducing nprobe helps in efficiency, but may possibly ignore additional matches beyond the number of clusters searched. Then there is the search string.
>
> **[1:34](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/search-vector-fields?u=76281980&t=94)** In this case, it is machine learning. We are looking for descriptions that closely match with this search string. We use the same embedding model as before to get the embeddings for the string. For search, we use the search method in the collection object. The data parameter is for the search strings embedding. The anns_field indicates the vector field to search for. The bottom field is for the search parameters. Limit is used to limit the number of returned records. We set it to 10 so it will only return the top 10 matches. Expression is used to pass additional filters on these scalar fields, similar to how scalar queries were done. The output field indicates the list of fields that needs to be returned from the search. Consistency level controls whether data in processing will be considered for the search. The results are returned in the s_results variable. This contains the hits object that can be iterated over to get the results. We iterate over this object and print the entity ID, distance, and title. Let's run this search now. Based on the ordering and the distance, we can see that the courses that are most related to machine learning are returned first based on their descriptions. Now, let's do a search on a string that is not related to the
>
> **[3:08](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/search-vector-fields?u=76281980&t=188)** contents in the vector DB. The search string is best movies of the year. We will execute a similar set of steps now. On executing the query, we, again, see all the records being returned, even though the contents are in no way related to the search string. This is the problem with vector search. It will always return results in the descending order of matches. So how do we ensure that we get results that are similar to the search string? We need to use the distances returned and use a similarity cut off threshold. We can see that the distances returned in this query are in the range of 0.6. This is much higher than the distances we saw in the earlier query, especially for those courses that are related to machine learning. We can set a similarity threshold of, say, 0.5 and only use results where the distances are below the threshold. We can also run searches using the Attu interface. Here we go to the vector search link. We can select a database and a collection here. But for searching, we need to provide a vector directly, not a search string. You can use this option for testing if needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1)
> **Code Identifiers:** anns_field (1), s_results (1)
> **Versions:** 0.6 (1), 0.5 (1)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Prerequisites:** prerequisite (1)

#### [Delete objects and entities](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/delete-objects-and-entities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/delete-objects-and-entities?u=76281980&t=0)** The Milvus SDK also provides options to delete data in Milvus. For deleting a single record, we can use the delete method on the collection and pass an expression for a filter. There are restrictions on what kinds of expressions can be passed. We can pass a list of primary keys with the in feature. On executing this command, we can see metrics on how many records were deleted. To drop a collection, we can use the drop_collection method on the utility object, providing the collection name and a connection ID. Running this code will drop the collection successfully. Similarly, we can drop a database using the drop_database method as shown here. It runs without any errors. Deletion can also be performed using the Attu user interface for any of these objects. We have now explored the features for DLL and DML in Milvus. Now, let's get to implementing a use case for [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md), namely caching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1)
> **Env Vars:** sdk (1), dll (1), dml (1)
> **Code Identifiers:** drop_collection (1), drop_database (1)


### 4. Vector DB for LLM Query Caching

[↑ Back to Table of Contents](#table-of-contents)

#### [LLMs and caching](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/llms-and-caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/llms-and-caching?u=76281980&t=0)** Let's now explore how to use a vector database to cache prompts and responses from [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) or LLMs for short. First, let's review some shortcomings of LLMs and how caching can help with these issues. Large language models have taken the world by storm in 2023, and there is a huge interest in using it for business purposes. A lot of innovation is happening, and several business applications are being built that are powered by LLMs. But the problem is the cost of LLMs. It takes a lot of resources to build, deploy, maintain, and use an LLM. So businesses are staying away from building their own models from scratch. On the other hand, when they use cloud LLMs, the cost per inference call is also high. This restricts LLMs to only those use cases where the returns justify the cost. LLMs generate one token at a time due to how the decoder in the transformer architecture functions. This results in high latency, especially when the responses are big. How can caching help? In a given organization or context, users are sending similar prompts to the LLMs, resulting in similar responses. There is a lot of overlap across users on what they use LLMs for. So instead of sending the prompt to an LLM every time and incur
>
> **[1:38](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/llms-and-caching?u=76281980&t=98)** high costs and latency, a cache can be used to cache the prompts and responses. If a prompt and its response is cached and the similar prompt is seen from another user, the response can be served from the cache instead of going to the LLM. Using caches for prompt and response caching is becoming an essential component of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) applications that are built using LLMs. In this chapter, we will discuss how to use a vector database as a cache for LLMs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** llm (3)
> **Definitions:** is a  (2)

#### [Prompt caching workflow](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/prompt-caching-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/prompt-caching-workflow?u=76281980&t=0)** How does the prompt caching process work with LLMs and [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md)? Let's walk through a workflow for prompt caching. In prompt caching, we cache the prompt, the embedding for the prompt, and the response in a vector database. This database serves as a local cache. A user issues prompts to the LLM using a user interface. It can also be triggered by applications. The workflow receives the input prompt from the user. First, the input prompt is converted to its equivalent embedding. We need to use the same embedding model as the prompt embeddings that are cached. We then compare this prompt embedding with other prompt embeddings in the cache to see if there are similar prompts. We will use a distance threshold to determine if the similarity between the incoming prompt and the cache prompts are below this distance threshold. Do note that based on the metric used, the range of distances may differ. If a similar prompt is found in the cache below the distance threshold, then the cached response from that prompt is returned to the user. If a similar prompt is not found, then we go to the LLM and [Fetch](../../Skills/Web%20Development/Fetch.md) the response from the LLM for that prompt. This, of course, will incur additional cost and latency. The response from this LLM is returned back to the user. In addition, the prompt, prompt embedding, and the response are added to the cache.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/prompt-caching-workflow?u=76281980&t=95)** We will use the same embedding model as that is used for the input prompt. Initially, the cache is empty and most prompts go to the LLM, but as the cache builds up through this workflow, more responses will be returned from the cache. We will implement a simple cache with Milvus and OpenAI in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** llm (5)
> **UI Navigation:** go to (2)
> **Warnings:** note that (1)

#### [Set up the Milvus cache](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-the-milvus-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-the-milvus-cache?u=76281980&t=0)** The notebook for LLM caching is in the file code_04_XX Using Vector DB as LLM Cache. I have the file loaded up here. Let's proceed to set up a Milvus cache. We create a database called cache_db and a collection called llm_cache. We first create a connection to the Milvus instance. We then check if the database already exists. If not, we proceed to create the database. We then switch the connection to use this database. Let's run this code now to create the database. Next, we proceed to create a collection. We will add a cache ID field as the primary key, but we will also make it autogenerated so we don't need to populate it. The prompt_text field is used to store the input prompt string as is. The response_text field will store the LLM response as is. Do note that we are limiting the sizes to 2048, but your use case may require much bigger sizes, so do plan for the same accordingly. The prompt_embedding field will store the embedding vector for the prompt. Now, we will proceed to create the cache schema and then the collection itself. Next, we will create an index for data in the prompt embedding field.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-the-milvus-cache?u=76281980&t=95)** It will use the L2 metric type and will have an IVF_FLAT index. Finally, we will flush the cache. We will also load the cache into memory, and now it is ready for inserts and queries. Let's run this code. We will use it for inference in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** cache_db (1), llm_cache (1), prompt_text (1), response_text (1), prompt_embedding (1)
> **Env Vars:** llm (3), ivf_flat (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Inference process and caching](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/inference-process-and-caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/inference-process-and-caching?u=76281980&t=0)** Now, we will exercise the prompt caching workflow when a user enters a prompt. We begin by setting up the OpenAI key. As discussed before, it's recommended to use your own OpenAI key for this purpose. We will create an LLM object for the actual model to use to get the responses. In addition, we will also set up the OpenAI embeddings model to get the embedding vectors. The similarity threshold is set to 0.3. This is the maximum distance permitted for a match. For L2, the distances will start from zero for an absolute match between the input prompt and the cache prompt. We set the threshold to 0.3, so only matches with distance less than 0.3 are considered cache hits. We then set up the search parameters for the search. Here, we set the radius parameter to the similarity threshold for the distances. This will ensure that only matches with distances less than this threshold value will be returned by Milvus. Next, we define a function for the inference loop. This function will return a response given a prompt from either the cache or the LLM. We will also time this operation. We start by converting the prompt to its embedding. Then we perform a search on the prompt embedding field with the input prompts embedding.
>
> **[1:34](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/inference-process-and-caching?u=76281980&t=94)** We only look at the top result. We output the prompt and the response text. We first check if there is any result that has come back from the cache with the distance that is less than the similarity threshold. If so, we return that response to the user. If no results are found, we send this prompt to the LLM and get a response. This response is then returned back to the user. Additionally, we will save this prompt, its embedding, and its response into the cache for future use. We are not explicitly calling a flush as we are using the same connection object for both query and inserts. We finally print the time taken and also the outputs. Let's run this code now. You can ignore this warning. We then send a series of five prompts of different general knowledge questions to the get_response function. This will build the cache as there are no matches in the cache. Let's run this code and populate the cache. You can see that the responses are indeed returned by the LLM. Next, we send a couple of prompts that are similar to some of the five prompts we sent earlier. Let's run the new prompts. Here, we see that there is a cache hit and the answers are indeed returned from the cache.
>
> **[3:08](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/inference-process-and-caching?u=76281980&t=188)** So the prompt "How tall is an elephant?" is semantically similar to "What is the typical height of an elephant," and the answers are fetched from the cache. You may not see a huge difference in latency between the cached responses and the LLM responses. This is because the prompts are small and the vector DB is running locally. But in real production scenarios, this difference can be significant. Using a cache also helps save expensive inference calls to the cloud LLM.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6)
> **Versions:** 0.3 (3)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** get_response (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)

#### [Cache management](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/cache-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/cache-management?u=76281980&t=0)** A cache once setup has a long life. Also, it may not be able to achieve optimal behavior right from the start. Let's go through some best practices to maximize the effectiveness of caching with [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). First, measure the cache hit ratio for the request. This is the ratio between the number of prompts served from the cache and the total number of prompts. The higher the hit ratio, the more efficient the cache is. Some use cases benefit a lot as the users ask similar questions, while some other use cases may not benefit at all. Next, it's also important to find the right similarity threshold for the distance. If the distance threshold is too small, we will use the LLM more often. If the distance threshold is too high, we will be returning inaccurate results from the cache. It's important to run benchmarks with a dataset of prompts and write responses, and determine the right similarity threshold. At this value, the cache should return accurate responses while maximizing the cache hit ratio. A cache can grow too big over time, impacting the efficiency and relevancy of the results. Set a limit for the cache size and manage it over time. It's recommended to add a last used timestamp to the cache collection and update it every time a cached entry is returned to the user. This helps track which entries are often used and which ones are not. To control the cache size, prune entries in the cache.
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/cache-management?u=76281980&t=96)** It is recommended to prune them based on their age as well as when they are last used. It is also a good practice to get user feedback on if the answers returned from the cache are correct and relevant. This feedback can be in the form of a thumbs up, thumbs down in the user interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1)
> **Best Practices:** recommended (2), good practice (1)
> **CLI Commands:** find (1)
> **Env Vars:** llm (1)
> **Prerequisites:** setup (1)


### 5. Introduction to Retrieval Augmented Generation (RAG)

[↑ Back to Table of Contents](#table-of-contents)

#### [LLMs as a knowledge source](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/llms-as-a-knowledge-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/llms-as-a-knowledge-source?u=76281980&t=0)** As LLMs have become popular over the last many months, they are used for multiple purposes. This is because of their wide range of capabilities. There are two main capabilities of LLMs. The first is the language capability. LLMs can understand text and that too in several languages. They can learn the semantics and meaning from the text for reasoning. They can also generate human sounding text as responses. They can translate text from one language to another. The second is the knowledge capability. Given that LLMs are trained on a wide corpus of data, they can also answer questions related to their training data. They can help with distilling knowledge from these training sources and provide concise answers. There is hence the initiative to use LLMs as a source of knowledge. But this approach has a few shortcomings. First, LLMs can only answer questions based on the data they are trained on. LLMs are usually trained on public data that is available on the Internet. They are only good at answering questions related to that data. The answers from the LLMs may not be current. Their cut-off date is usually the date on which their original training data sources are extracted. LLMs have a tendency to hallucinate. They sometimes provide make-believe answers that are not factually correct.
>
> **[1:32](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/llms-as-a-knowledge-source?u=76281980&t=92)** Also, for enterprise use cases, LLMs cannot answer questions based on enterprise or confidential data where this data is not part of the training dataset. It is possible to build custom LLMs using organizational data only, but that can prove to be expensive to build. It is also expensive to keep the LLM updated with new data on a daily basis. This is where [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) comes in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** llm (1)

#### [Introduction to retrieval augmented generation](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/introduction-to-retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/introduction-to-retrieval-augmented-generation?u=76281980&t=0)** [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md), or RAG for short, is arguably the most popular use case for LLMs in the business context. What is RAG? It is a framework that combines knowledge from a curated knowledge base with language capabilities of an LLM to provide accurate and well-structured answers. In RAG, we use a knowledge base for context-specific knowledge and an LLM for language generation, providing the best of both worlds. When a user asks a question through a prompt, the knowledge base provides contextual knowledge and the LLM provides well-structured answers. What are some key features and advantages of RAG? With RAG, we can use enterprise and confidential data sources to answer questions. This is not possible when using third-party LLMs. It allows us to combine multiple data sources in different formats to create a knowledge base. We can use product manuals in PDF format, support tickets from a ticketing system, and content from web pages together in a single knowledge base. The input data sources can be curated to extract only relevant knowledge and use it for RAG. This data can be continuously updated and pruned to keep it current. To find answers to queries, we can combine scalar and vector searches. Vector searches can be used to find relevant answers in vectors, while scalar filters can help with narrowing down the context.
>
> **[1:38](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/introduction-to-retrieval-augmented-generation?u=76281980&t=98)** For example, if the user asks a troubleshooting question about a specific product, scalar filters can be used to filter answers for that specific product. RAG can use standard and out-of-the-box LLMs for language generation without the need to create or fine-tune custom models. This significantly reduces cost.

> [!info]- Semantic Content
>
> **Env Vars:** rag (7), llm (3), pdf (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [RAG: Knowledge curation process](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/rag-knowledge-curation-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/rag-knowledge-curation-process?u=76281980&t=0)** How do we build a RAG system? There are two steps here; the knowledge curation process and the inference process. We will discuss these processes in this chapter. We will implement them and build a RAG system in the next chapter. Let's look at the workflow for the curation process now. We can have one or more sources of data for the RAG system. These could be websites, ticketing systems, traditional RDBMS [Databases](../../Skills/Software%20Development/Databases.md), document hubs like [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) or [Google Drive](../../Skills/Software%20Development/Google%20Drive.md), and a Doc documents. Do note that the structure of these data sources will be vastly different. Some may only have unstructured text data, while others may have a mixture of numeric, structured, and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). For each of these data sources, we need to build an acquisition module. This module will [Fetch](../../Skills/Web%20Development/Fetch.md) data from the sources, filter it for relevant information, and then cleanse them to eliminate any kind of noise. This module may also do continuous and incremental features to catch up with new additions and changes on the source side. Next becomes standardization. Irrespective of the original content and format, the incoming data needs to be standardized. There may be segregation of structured and unstructured data. The standardization process would be specific for the use case. Then, for text data that needs to be converted to vectors, we need to do chunking. Each vector field can only hold a limited amount of data.
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/rag-knowledge-curation-process?u=76281980&t=95)** Also, when a prompt is issued, we want to only retrieve a small part of the original content that contains relevant information about the prompt. For this, we split up the original text into chunks of equal sizes. The size of the chunks may vary based on the use case, but it's usually 1024. Each chunk is stored as a separate row or entity in the vector database. Once chunks are available, we need to convert these individual chunks into embeddings using an embedding model. Finally, the embeddings as well as any scalar data is saved to the knowledge base. We may use Upsert to update existing data if available too. In advanced use cases, the vector database may be supplemented by RDBMS and [Knowledge Graphs](../../Skills/Artificial%20Intelligence%20(AI)/Knowledge%20Graphs.md) to create an ensemble knowledge base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) (1), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** rag (3), rdbms (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)

#### [RAG question-answering process](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/rag-question-answering-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/rag-question-answering-process?u=76281980&t=0)** Having set up the knowledge base, let's now look at how the question answering process would look like. We have the knowledge base that we built using the curation process we discussed in the previous video. We have a user who wants some answers and hence issues a prompt to the RAG system. The RAG system receives the input prompt and may perform validations like authentication. There may be additional [Metadata](../../Skills/Web%20Development/Metadata.md) that may be passed along, like product IDs or user IDs that are used as scalar filters on the knowledge base. Then we get the embedding vector from the prompt using the same embedding model that was used during the curation process. We then query the knowledge base to find answers. On the vector database, we find the top-K matches to the input query by comparing the embeddings. We may also use additional metadata as filters. The results from the knowledge base are then used as context to the LLM. The prompt is sent to the LLM with this context. We will specifically instruct the LLM to base its answer only on the context provider. The updated prompt is sent to the LLM, and the LLM generates the answer to the query. The response from the LLM is sent back to the user. We will implement this RAG system in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (2)
> **Env Vars:** llm (6), rag (3)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **CLI Commands:** find (2)
> **Prerequisites:** set up (1)

#### [Applications of RAG](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/applications-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/applications-of-rag?u=76281980&t=0)** What are some of the popular applications for [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) today? RAG is revolutionizing the way several business processes are being done. It is helping in improving efficiency and reducing time to respond. First, there are interactive chatbots that businesses use to communicate with their customers. Chatbots are now more powerful and can use RAG to answer customer questions about [products](../../Skills/Software%20Development/Microsoft%20Products.md) and help troubleshoot problems. RAG can help in automated responses to customer queries by email. Similar to chatbots, the responses can contain detailed information and answers to these queries. RAG can help with root cause analysis of technical issues faced. Based on log messages, absorbed metrics, and information from manuals, RAG can help predict potential root causes quickly and aid in resolution of such issues in a timely manner. On [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) websites, RAG can help customers quickly find what they are searching for and provide good narratives about the product or service. They can also customize such information for the customer. Enterprises have help desk for functions like human -- repeating. Enterprises have help desk for functions like [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md), legal, or logistics. These functions can be automated with RAG to help employees find quick answers to their questions and problems. Enterprises have large document hubs with several hundred
>
> **[1:35](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/applications-of-rag?u=76281980&t=95)** documents, and searching for specific information across these documents is laborious. RAG can help build document search capabilities on these hubs, and provide quick pointers to these documents that are relevant to the user search. Having discussed the concepts of RAG, let's now implement a simple RAG system in the next chapter using Milvus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1)
> **Env Vars:** rag (10)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Warnings:** troubleshoot (1)


### 6. Implementing RAG with Milvus

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up Milvus for RAG](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/set-up-milvus-for-rag?u=76281980&t=0)** We will now proceed to build a RAG system using Milvus as the vector store for the knowledge base. The code for this chapter is available in the notebook code_06_XX RAG With Milvus. I have this notebook opened up here. In this video, we will set up the Milvus database to use it as a vector database for RAG. We first start by setting up a connection called rag_conn. We will create a new DB called rag_db. We then switch to this database as the current database for the active connection. Let's run this code now. Next, we will create the schema and the collection. For schema, we have the following fields. There is the chunk_id_field that is the primary key. We will create this chunk IDs manually, even though they can also be set up as auto-generator. The rag_text_field stores the clear text for the chunk. The rag_embedding_field stores the embedding vector for the chunk. Then we proceed to create the schema and create a collection called rag_collection. We print the available collections and the schema here. Let's now create the collection.

> [!info]- Semantic Content
>
> **Code Identifiers:** rag_conn (1), rag_db (1), chunk_id_field (1), rag_text_field (1), rag_embedding_field (1)
> **Env Vars:** rag (3)
> **Prerequisites:** set up (2)
> **UI Navigation:** switch to (1)

#### [Prepare data for the knowledge base](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/prepare-data-for-the-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/prepare-data-for-the-knowledge-base?u=76281980&t=0)** We will now proceed to acquire a data source and prepare it for adding to the knowledge base. For the data source, we have a PDF document. The document is called [Large Language Models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md).pdf that is available as part of the exercise files. This document contains text extracted from Wikipedia about LLMs. To load and process the document, we will use [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md). LangChain has loaders for several data sources. We will use the PDFMinerLoader for this purpose. Given that this is a clean document, we do not need any filtering or cleansing. Similarly, as we are only using one data source, there is no need for standardization. Let us load up this document. Next, we proceed to chunking. For chunking, we use LangChain's RecursiveCharacterTextSplitter. Lang Chain also has several other chunking methods. We initialize the splitter first. We use a chunking size of 512. We also use a chunk overlap of 32. So there is overlap between chunks and there is continuity. The length function is used by the splitter to measure the chunk size. We can also use custom methods here. Using the chunker, we split up the document into chunks. Then we add all the chunks to a list. Finally, we print the count of chunks and a sample chunk text. Let's run this code now.
>
> **[1:33](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/prepare-data-for-the-knowledge-base?u=76281980&t=93)** There are 23 chunks in this document. Once we have the chunks, we also need to create embeddings for them. We follow the same process as in the earlier chapters to initialize the OpenAI embeddings. Then we use this embedding model to create corresponding embeddings for each of these chunks. For chunk IDs, we create a list of increasing numbers from zero based on the number of chunks. We now have data for all the three fields, and now we are ready for loading. The chunks are created and ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (3), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise files (1)

#### [Populate the Milvus database](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/populate-the-milvus-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/populate-the-milvus-database?u=76281980&t=0)** Now that we have the input data for the knowledge base ready, let's go ahead and populate it in the Milvus database which serves as the knowledge base. The steps here are pretty straightforward as seen in the earlier videos. We initialize the collection object for the RAG collection. We then insert the data we have set up earlier in the video. We follow this by flushing the inserted data. Then we go ahead and build an index for the RAG embedding field. The index is of type IVF_FLAT and uses L2 metric type for comparing distances. Let's run this code now. For small documents or datasets, this process would only take a small amount of time. For large datasets spanning multiple documents, it needs to be scheduled as a batch process. When doing [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md), it's recommended to flush only at periodic intervals, as that process takes a lot of resources and results in fragmentation of data. Then indexes can be created before or after the data insert happens. Also, when existing documents need to be updated, it is recommended to delete all the existing chunk for the document and repopulate it. Upserts can also be used for this purpose if the chunk ideas have not changed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1)
> **Env Vars:** rag (2), ivf_flat (1)
> **Best Practices:** recommended (2)
> **Cross-References:** earlier in (1)
> **Prerequisites:** set up (1)

#### [Answer questions with RAG](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/answer-questions-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/answer-questions-with-rag?u=76281980&t=0)** With the knowledge base setup, let's now try to answer some queries with RAG. We first need to set up search parameters for the vector search. We will use the same metric L2. We will be using a radius of 0.5 to find matches in the database. The query we will use is "What is gender bias?" The query needs to be first converted to its embedding representation. Then we initiate a collection object and load up the collection. We get to the search now. We set up the search to return the top three answers. Do note that depending on the chunk size, your answers may be spread across multiple chunks. So we need to get enough chunks to get a complete answer. This number may need to be adjusted based on the specific use case. Then we print the top result to see how well it matches the question. Let's now run the retrieval process. The top result has a distance of 0.2, and it does answer the gender bias question. Next, we send the data to the LLM to get a concise answer. We first concatenate all the returned results into a single context list. Then we create a prompt where we provide a system prompt to the LLM that asks it to answer the query only based on the context. We append the context and the query to the prompt. We then print the final prompt that will be sent to the LLM. Let's prepare the prompt now.
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/answer-questions-with-rag?u=76281980&t=96)** Finally, we send the prompt to the OpenAI LLM and get the response. The response is then printed. Let's get the response now. As seen from the response, it does answer the original user question about gender bias. This completes our example for building a RAG system with a Milvus vector database.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4), rag (2)
> **Prerequisites:** set up (2), setup (1)
> **Versions:** 0.5 (1), 0.2 (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)


### 7. Vector Databases Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Choose a vector database](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/choose-a-vector-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/choose-a-vector-database?u=76281980&t=0)** Having discussed Milvus operations and two use cases for [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md), let us now review some best practices for using vector databases. We begin with considerations for choosing a vector database. Vector databases is a fast-growing field that has not attained a mature state yet. We can expect them to evolve more in the near future. There are several options available for vector databases that makes the task of selecting one important. We have the option to choose a cloud service, or we can set up a standalone service in our data center. We can use an embedded in-memory database or deploy it in a scalable cluster. There are specialized vector databases as well as traditional [Databases](../../Skills/Software%20Development/Databases.md) that have vector support. The use case will determine the right vector database technology to use. So how do we decide on what type to choose for a given use case? We need to look at a few considerations. Do we need long-term storage? What are the [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and reliability requirements? This will determine if we need a cluster or a cloud service. Do we have hybrid queries? If so, how frequent are they? This will determine whether we need to use a traditional database with vector support like [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) or go to a specialized vector database like Milvus. Another key question is with enterprise data. Is it okay for your organization to store data in the cloud,
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/choose-a-vector-database?u=76281980&t=96)** especially confidential ones? This is the key question to answer before deciding on [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). If we want to host the services ourselves, can we provide the people and [Hardware](../../Topics/Hardware.md) resources for deploying and managing these services on an ongoing basis? I strongly recommend doing some due diligence before deciding upon the right technology for the use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Combine vector and scalar data](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/combine-vector-and-scalar-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/combine-vector-and-scalar-data?u=76281980&t=0)** Any use case that requires vector support may also need scalar data to be used with it. Scalar data is needed to implement additional filters for authentication, multitenancy, or context. Do we keep scalar and vector data together or separate them and stored them in [Databases](../../Skills/Software%20Development/Databases.md) that are built for their purposes? For example, do we simply use Milvus for both datatypes, or do we use a [MySQL](../../Skills/Software%20Development/MySQL.md) instance for scalar data and link them? What do specialized databases bring to the table? They have excellent support for vector search. This includes specialized [Data Storage](../../Skills/Data%20Science/Data%20Storage.md), support for embeddings, metric types, and optimized plans for vector search. On the other hand, they lack extensive query capabilities that traditional databases provide, like joints, aggregations, and functions. So what criteria do we use to determine if we want to keep scalar and vector data together, or have specialized databases for each of them? The first one is whether we need hybrid searches that combine scalar and vector data. What kinds of search conditions will be used in your use case? Will they require aggregations and summaries? For simple hybrid searches, we can go with just [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). For more complex ones, we need to store the datatypes separately and implement multi-step searches.
>
> **[1:34](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/combine-vector-and-scalar-data?u=76281980&t=94)** Should we keep scalar and vector data in separate databases? Will keeping them together fulfill the requirements for the queries? We need to analyze the use case to determine this. Choose the strategy carefully, as there are significant long-term implications whichever way we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (6), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **CLI Commands:** mysql (1)
> **Analogies:** for example (1)

#### [Distance measure considerations](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/distance-measure-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/distance-measure-considerations?u=76281980&t=0)** When doing [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) with [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md), a key design consideration is the distance measure. When using vector databases, it's critical to understand how the distance measures work for a specific use case. As seen in the earlier code examples, a vector search will always return hits as long as there are records available in the database. If we set a limit of 10 in the query, it will return 10 records as long as there are 10 records in the database. The results are sorted by the distance between the search string and the string in the database. How do we determine if there is actually a match? We need to use distance or similarity thresholds. This is the maximum value of the distance below which we can consider that there is a match. So when a search is executed in Milvus, we can set the radius search parameter to this value so the search only returns those results where the distance is below the radius. What exactly do we mean by similar when comparing two strings? How close should these two strings be? Is it okay if they are just about a specific topic, or should there be an exact match? This is determined by the specific use case. Hence, the similarity or distance threshold should also be determined by the use case. Do note that embedding models and metric types have an impact on the distance values, and hence the thresholds
>
> **[1:33](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/distance-measure-considerations?u=76281980&t=93)** being set. Sometimes custom embeddings by domain may be used for special purposes. In that case, the thresholds may be lower as we expect much closer matches. Let's continue this discussion in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (2), [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Tune vector DB performance](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/tune-vector-db-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/tune-vector-db-performance?u=76281980&t=0)** How do we tune the performance of a vector database? For a vector database, the key performance area is vector search. So how do we tune the performance of vector search? What impacts the effectiveness of vector search? First, it is the data in the database, its similarity, and its size. Then there is the embedding model and its ability to represent the content and semantics in the text. Then comes the metric type and how it can help find similar items. Finally, there is the threshold which differentiates what is a match and what is not. How do we find the best combination of the embedding model, metric type, and threshold for a given use case? We need to do that by experimentation. First, for experiments, we need a good test dataset that closely represents the type of data that will be used in production. The data should be labeled. It should have search strings and corresponding right results. With this, we need to try out different embedding models and metric types. We need to determine which combination results in the best accuracy across the dataset. Then we need to also experiment with distance thresholds and find the right value that can differentiate between matches and no matches in the test dataset. Once these values are determined, implemented, and deployed, the performance of the application should be also monitored from time
>
> **[1:36](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/tune-vector-db-performance?u=76281980&t=96)** to time to ensure that the values are still the best options. Sometimes changes in the nature of data or search queries can make these values suboptimal.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue with LLMs](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/continue-with-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llm-foundations-vector-databases-for-caching-and-retrieval-augmented-generation-rag/continue-with-llms?u=76281980&t=0)** There is a lot you can learn and do with [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) beyond this course. Explore other vector database [products](../../Skills/Software%20Development/Microsoft%20Products.md) beyond Milvus to understand how they compare. Learn how tools like [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) and [LlamaIndex](../../Glossary/Framework/LlamaIndex.md) help in building applications with vector databases. Build a [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) application for your organization with vector databases. Data and machine learning always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways to move it and extract knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1), [LlamaIndex](../../Glossary/Framework/LlamaIndex.md) (1), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)


## Instructor

- [Kumaran Ponnambalam](../../Instructors/Artificial%20Intelligence%20(AI)/Kumaran%20Ponnambalam.md)

## Resources

- Exercise files available

## Skills Covered

- Vector Databases
- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Path Context

### In [Become an AI Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Become%20an%20AI%20Engineer.md)
← [The AI Ecosystem for Developers- Models, Datasets, and APIs](The%20AI%20Ecosystem%20for%20Developers-%20Models%2C%20Datasets%2C%20and%20APIs.md) | **5 of 10** | [Advanced LLMs with Retrieval Augmented Generation (RAG)- Practical Projects for AI Applications](Advanced%20LLMs%20with%20Retrieval%20Augmented%20Generation%20(RAG)-%20Practical%20Projects%20for%20AI%20Applications.md) →

### In [Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)
← [Generative AI- Working with Large Language Models](Generative%20AI-%20Working%20with%20Large%20Language%20Models.md) | **4 of 7** | [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) →

### In [Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)
← [Generative AI- Introduction to Large Language Models](Generative%20AI-%20Introduction%20to%20Large%20Language%20Models.md) | **4 of 7** | [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) →

## Appears In

- [Become an AI Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Become%20an%20AI%20Engineer.md)
- [Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)
- [Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)

## Related Courses

_Courses sharing skills:_

- [Introduction To Ai Native Vector Databases](Introduction%20To%20Ai%20Native%20Vector%20Databases.md) — Artificial Intelligence (AI), Large Language Models (LLM), Vector Databases
- [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) — Artificial Intelligence (AI), Large Language Models (LLM), Vector Databases
- [LLM Foundations- Building Effective Applications for Enterprises](LLM%20Foundations-%20Building%20Effective%20Applications%20for%20Enterprises.md) — Artificial Intelligence (AI), Large Language Models (LLM)
- [LLMOps in Practice- A Deep Dive](LLMOps%20in%20Practice-%20A%20Deep%20Dive.md) — Artificial Intelligence (AI), Large Language Models (LLM)
- [Generative Ai And Llmops Building Blocks And Applications](Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md) — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)