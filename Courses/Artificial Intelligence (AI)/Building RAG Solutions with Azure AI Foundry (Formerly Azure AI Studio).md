---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio
url: "https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 12/12/2024
learners: 5485
skills:
  - Azure AI Studio
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Azure AI Foundry
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEFLbl9QHJO2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722011200013?e=2147483647&amp;v=beta&amp;t=ZtwuRFzr9WRj02hKOeLknDCG62pvDR7f8VjyNqCjiKs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)'
prev_courses:
  - '[Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md)'
next_courses:
  - '[Hands-On AI- RAG using LlamaIndex](Hands-On%20AI-%20RAG%20using%20LlamaIndex.md)'
path_nav: '[{"path":"Master Retrieval-Augmented Generation (RAG)","position":6,"total":7,"prev":"Advanced RAG Applications with Vector Databases","next":"Hands-On AI- RAG using LlamaIndex"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/azure-ai-studio
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/azure-ai-foundry
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20RAG%20Solutions%20with%20Azure%20AI%20Foundry%20(Formerly%20Azure%20AI%20Studio).md)

![Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)](https://media.licdn.com/dms/image/v2/D560DAQEFLbl9QHJO2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722011200013?e=2147483647&amp;v=beta&amp;t=ZtwuRFzr9WRj02hKOeLknDCG62pvDR7f8VjyNqCjiKs)

# Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)

> This in-depth course is crafted to empower you with the proficiency to effectively leverage Azure AI Foundry (formerly Azure AI Studio) for the creation of retrieval-augmented generation (RAG) solutions. The course begins with a systematic walkthrough of the process involved in creating a RAG solution and the fundamentals and principles of RAG, diving into the prerequisites for crafting a RAG solu

> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio) | 1h 24m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Create a RAG solution with little coding](#create-a-rag-solution-with-little-coding)
- [**1. Fundamentals of RAG**](#1-fundamentals-of-rag) (5 videos)
  - [The basics of RAG: Adding custom data to your LLM](#the-basics-of-rag-adding-custom-data-to-your-llm)
  - [Understanding tokens: A key factor of costs in your system](#understanding-tokens-a-key-factor-of-costs-in-your-system)
  - [Vector embeddings: How words connect to each other](#vector-embeddings-how-words-connect-to-each-other)
  - [How RAG works: Understanding the process under the hood](#how-rag-works-understanding-the-process-under-the-hood)
  - [RAG high-level architecture: The required components](#rag-high-level-architecture-the-required-components)
- [**2. Introduction to Azure AI Foundry**](#2-introduction-to-azure-ai-foundry) (3 videos)
  - [Azure AI Foundry overview: Deploy at scale in a safe, secure, and responsible way](#azure-ai-foundry-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way)
  - [Navigating the Azure AI Foundry](#navigating-the-azure-ai-foundry)
  - [Creating a project in Azure AI Foundry](#creating-a-project-in-azure-ai-foundry)
- [**3. Setting Up Azure AI Foundry**](#3-setting-up-azure-ai-foundry) (5 videos)
  - [Understanding content filters](#understanding-content-filters)
  - [Creating content filters](#creating-content-filters)
  - [Creating model deployments](#creating-model-deployments)
  - [Navigating the Playground](#navigating-the-playground)
  - [Using the Playground and its settings](#using-the-playground-and-its-settings)
- [**4. Creating an Index for RAG Using Azure**](#4-creating-an-index-for-rag-using-azure) (4 videos)
  - [Creating an index using Azure AI Foundry](#creating-an-index-using-azure-ai-foundry)
  - [Creating an index using Azure AI Search](#creating-an-index-using-azure-ai-search)
  - [Understanding retrieval and relevance in Azure AI Search](#understanding-retrieval-and-relevance-in-azure-ai-search)
  - [Testing your index in the Playground](#testing-your-index-in-the-playground)
- [**5. Introduction to Azure Prompt Flow**](#5-introduction-to-azure-prompt-flow) (4 videos)
  - [Understanding prompt flow](#understanding-prompt-flow)
  - [Create a sample prompt flow for RAG](#create-a-sample-prompt-flow-for-rag)
  - [Evaluation and monitoring metrics](#evaluation-and-monitoring-metrics)
  - [Perform evaluations on your RAG system](#perform-evaluations-on-your-rag-system)
- [**6. Deploying a RAG Solution**](#6-deploying-a-rag-solution) (3 videos)
  - [Deploying the RAG solution using prompt flow](#deploying-the-rag-solution-using-prompt-flow)
  - [Testing the REST endpoint using Postman](#testing-the-rest-endpoint-using-postman)
  - [Deploying the REST endpoint to Copilot Studio and Microsoft Teams](#deploying-the-rest-endpoint-to-copilot-studio-and-microsoft-teams)
- [**Conclusion**](#conclusion) (2 videos)
  - [Key takeaways](#key-takeaways)
  - [Additional learning](#additional-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a RAG solution with little coding](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=0)** RAG solutions in [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) are transforming how businesses access and utilize information with very little coding required. That's right. You can become an AI innovator without being experienced developer. I'm here to guide you on how to harness the power of AI to transform your data into actionable insights, driving decision making, and market leadership. I am Ziggy Zulueta. If you are ready to unlock the secrets of building RAG solutions using Azure AI studio with little coding required. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2)
> **Env Vars:** rag (2)


### 1. Fundamentals of RAG

[↑ Back to Table of Contents](#table-of-contents)

#### [The basics of RAG: Adding custom data to your LLM](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=0)** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) are trained on a large set of data, mainly from the internet. However, they do have limitations. First, if you ask it questions about current events, it will not be able to respond accurately. Each model will have a specific date on how recent the data it was trained on. The free version of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), for example, was trained on January 2022 data. So it will reply that Queen Elizabeth II is still alive when we already know she passed away. Second, if you ask questions about your domain data, it may also not respond back accurately. And worse, it may even make up a fabricated answer. In the given example, the model is providing an answer, but the source links given when clicked do not match the actual product. RAG LLM context is a popular acronym for [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md). It is the technique of adding data to an LLM from an external data source. This data can be your legal contracts, product manuals, customer information sheets, software designs, and even your code. A good analogy for drag is to come to an open book exam when you are a student. In an open book exam, we can refer to any books you have brought to the classroom to answer questions.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=94)** Imagine your brain as the LLM, but you needed to open the books you came with to get the information needed to answer questions. To further understand drag, let us discuss the workflow. First, every time a user makes a query, the system needs to retrieve from an external data source the relevant information that will answer that query. Second, the users query and retrieve content is augmented or added together. This becomes the new prompt. Third, the new prompt is now fed into the LLM to generate a response. To simplify, the main difference between RAG and a typical LLM system is that a typical LLM system would answer user queries based on its training data set, while RAG provides answers to queries from an external source, you have provided. How the relevant data is retrieved based on the user's initial prompt is best explained by discussing other concepts, called [Tokens](../../Skills/Web%20Development/Tokens.md) and embeddings in the next chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** llm (6), rag (3)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)

#### [Understanding tokens: A key factor of costs in your system](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=0)** [Tokens](../../Skills/Web%20Development/Tokens.md) play a big role in [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) because they affect how much your system will cost. Tokens are needed because computer systems don't really understand birds. They don't understand what a dog or a cat means, for example. But they are great at understanding numbers like zeros and ones. When you give an LLM a prompt, it must convert these words into numbers or tokens. Tokens represent common sequences of characters. Usually, one token is approximately the same as four characters or 0.75 words in English. To simplify, imagine that every [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in the dictionary gets its own number. So in this sentence "I heard a dog barked loudly at a cat", each word gets a different number, and if the same word is used more than once, like the letter A, it gets the same number three. In the second sentence, "I heard a cat", the numbers assigned to each word are similar to the previous sentence. In the last sentence, the word "meow" is a newly occurring word, hence it has a different number. Now tokens can also represent parts of words, characters, or even punctuation marks, depending on how the LLM tokenize things. The tokenization strategy may differ based on the LLM we are using.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=94)** OpenAI cloud and [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md), for example, use different methods. In addition, OpenAI's GPT 3.5 and GPT 4 models use different tokenizers than the previous versions. For OpenAI, you can check them out on their website. And to give an idea in the sentence, "The quick brown fox jumps over the lazy dog", each word, along with the punctuation mark gets its own token. Tokens are also important because they affect how much you pay for using the application. The more tokens you use, the more it costs. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Open AI charges you based on the number of tokens in the input, what you ask the model and output, what the model responds with. So to keep your costs under control, you need to limit how many characters you put into the system and how many characters you get back. We'll talk more about how to do that in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (8), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (7), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** llm (3), gpt (2)
> **Analogies:** for example (2), imagine (1), similar to (1)
> **CLI Commands:** cat (3)
> **Versions:** 0.75 (1), 3.5 (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)

#### [Vector embeddings: How words connect to each other](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=0)** Once the words are converted into numbers called [Tokens](../../Skills/Web%20Development/Tokens.md), the next question would be how does the system know that the cat and dog are animals? And meow and bark are verbs? In addition, how will the system know if the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "bank" is referring to the financial institution or a river bank? The answer to this is the concept called vector embeddings. Vector embeddings are a way of representing words or data into vectors. As discussed in the previous video, words are first converted into tokens. They are then converted into vectors using an algorithm called an embedding model. The embedding model to be used varies again based on the model you decide to choose. Open AI uses, for example, text embedding ada-002, which is a method to convert tokens into vectors with the dimension of 1,536. To put in perspective, this is a sample vector that has ten dimensions. A 1,536 dimension vector will not fit our screen. The main purpose of using vector embeddings is that they can capture the relationships between different objects. Words that are used in similar contexts will be closer to each other in the vector space. This allows us to capture the meaning of words in a way that is efficient and effective.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=94)** To explain in simpler terms imagine that we have a three dimensional space to represent the words and their relationships. The words "cat" and "dog" are close to each other to represent their relationship as animals. In addition, the words "bark" and "meow" are close to each other as they are sounds of animals. Finally, the word "skateboard" would be very far from the first forewords because it is unrelated to all of them. You could also see that "cat" and "dog" are much closer to "bark" and "meow" versus "skateboard", because they have a closer relationship versus the "skateboard". Again, this is an example in a three dimensional space, but in reality, the vectors actually have 1,536 dimensions. Vector embeddings are used in drag in two ways. One, the external data source that we use in the system for the data must be converted into vector form. This conversion is done during the initial setup. The vectors are then stored in a special database called a vector database. It is a special type of database used for storing and creating vectors, and has become widely popular because of LLMs. Two, every query a user inputs into a system is also converted into vector form. This conversion happens at runtime every time a user enters a query. After the user query is converted into vector form,
>
> **[3:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=190)** the system in the retrieve process would then search the vector database for content that is a close relationship to the query. Hence, vector embeddings look for relationships and the conversion process happens during initial setup for the data source and at runtime for the user query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** cat (3)
> **Analogies:** for example (1), imagine (1)
> **Prerequisites:** setup (2)
> **Cross-References:** previous video (1)

#### [How RAG works: Understanding the process under the hood](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=0)** Now that we understand the basic concepts of drag and the concepts of [Tokens](../../Skills/Web%20Development/Tokens.md) and vector embeddings, let us discuss how RAG works. First, documents must be broken down into smaller documents. We call this process chunking. Chunking is very important so that information is not lost. Imagine if you have a novel that is 1000 pages long, and you summarize it to just two pages. A lot of details would certainly be lost. In addition, if a page has a lot of information, you may need to break down the page into smaller pages. It is normally the case that after you do chunking, you may end up with more documents than what you originally started. Second, the chunked documents are then converted into vector embeddings. As discussed in the previous chapter, the embedding model to be used is based on the model you're using for [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI. We will use text embedding ada-002. The text embedding is then stored in a vector database for storage and retrieval. Third, a user inputs a query in natural language. The query is then converted into vector embeddings at runtime. The embedding model to be used must be the same model used for your documents. Fourth, the user query in vector form is now sent to the drug application.
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=96)** Fifth, the user query in vector form is then searched against the vector database for similarity using different search methods. We will discuss these methods in the succeeding videos. This is the retrieval process in RAG. Six, the vector database provides an output based on the search criteria. Seven, the result of the search plus the user query are now added together to form one prompt. This is the augment process in RAG. The new prompt is then given to the LM in order to generate a response. Eight, the LLM generates a response and is given back to the RAG system. This is the generation process in RAG. Finally, the RAG system then provides the response to the user. Now that you understand how RAG works, the next step is to understand the components we need to build a RAG solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** rag (8), llm (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** we call this (1)
> **Analogies:** imagine (1)

#### [RAG high-level architecture: The required components](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=0)** Our RAG system would have the following components. One, an [Information Retrieval](../../Skills/Data%20Science/Information%20Retrieval.md) system or retriever. The retriever would store your vector embeddings and would provide you the logic and ability to search for those vector embeddings based on different retrieval and search methods. It would also contain security and compliance policies needed by your business. The retriever can be a vector database such as [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Cosmos DB for [MongoDB](../../Skills/Software%20Development/MongoDB.md) or a search engine such as Azure AI search. You also need a large language model. The users query, plus the search results provided by the retriever would be sent to the LLM as a new prompt. The LLM would analyze the combined prompt and generate a response. You would also need an orchestrator. The orchestrator provides a way to integrate the retriever to the LLM. This is optional as some systems like Azure handle this for you. Finally, you would need a front end. The front end system at minimum would be the place where the user enters their query. This can be a chat website, a mobile app, an MS teams channel, or even a simple command line interface. It may also contain many features such as having a chat history, feedback buttons, text to speech capabilities, a user login, and a way to upload files and images depending on the requirements of your users.
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=95)** In our course, we will have the following high level architecture. We will use [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) to enable users to make user queries. [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) studio shall be used to connect Microsoft Teams to the [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API endpoint, to be provided by [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md). Azure AI studio shall be used to connect our data source to the LLM. We will also use other features of the studio to create content filters, manage the [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) and retrieve information and evaluate the system. Azure AI search would now be used as a data source to contain all our vector embeddings, and the engine to handle our search queries. Finally, we shall use an Azure OpenAI resource to provide the algorithm to generate our vector embeddings and the large language model used to generate the system responses. We will discuss in the next chapters how to set up each component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) (2), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2), [Information Retrieval](../../Skills/Data%20Science/Information%20Retrieval.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **Env Vars:** llm (4), rag (1), api (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)


### 2. Introduction to Azure AI Foundry

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure AI Foundry overview: Deploy at scale in a safe, secure, and responsible way](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=0)** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) is your go to portal in building a solution. You can do the following with this tool. You can build, test and deploy [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) applications in one place. Modules are available to help you build and connect together the different parts of a RAG solution. Test the accuracy of the solution and provide you methods to deploy to your customer. You have options to choose from a wide variety of models. You are not limited to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Open AI models only. You can also use Mistral, [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md), Neutron, and even other small language models like FI for urgent AI application. You can develop and deploy AI responsibly here. You'll be able to create content filters, for example. These are powered by Azure AI content safety and it will detect and prevent the input and output of harmful content. You can also manage security and permissions. You can add or remove people who can have access to your project and even assign them specific roles. In addition, you can also apply certain policies for project resources. Finally, you can organize all your resources in one place. You can view in the Studio your different AI projects here, different Azure AI resources and connections, your team members, permissions and policies, compute instances or [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md),
>
> **[1:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=93)** and even your billing and costs in one area. Azure AI Studio introduces us to two new resources unique to the Studio the AI Hub and the AI Project. The Hub is the high level resource of Azure AI Studio. The Hub would hold the following information. One, your data and other artifacts such as flows and evaluations. Two, your connections to different Azure resources such as Azure OpenAI, Azure AI Search and other Azure AI services. Three, your base model endpoints for Azure OpenAI speech and vision. Four, your compute resources are virtual machines. And five, your security settings and governance policies. Every time AI Hub is created, a set of dependent Azure resources are created to support its operation. Azure AI Search provides the search capabilities for your project. Azure Storage Account stores your project's data flows and evaluations. Azure Key Vault stores your connection strings to different resources. Azure Container Registry contains Docker images created to run [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md). And finally, Azure Application Insights and Log Analytics workspace stores logging info if you decide to enable logging for your prompt flows, Azure AI Studio manages all these resources for you, but it's good to know what gets created alongside the Hub
>
> **[3:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=191)** for transparency. Finally, the AI Project is a child resource at the AI Hub. Every time you create an AI Project, it inherits the connections, compute, resources, and security settings of its parent Hub. It should also contain the following features. One, your data sets, models and indexes used in the project. Two, an isolated data container unique to the project. Three, project project scope connections. A project, for example, might need access to data stored in a separate Azure storage account. And finally, your open source model deployments from the catalog and other fine tuned model endpoints. The parent Hub would contain Azure Open AI based models, but the child project would contain deployments from open source models such as Llama.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (16), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (4), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** docker (1)
> **Env Vars:** rag (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Navigating the Azure AI Foundry](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=0)** Let us now navigate into [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md). You can access the studio through the URL ia.[azure.com](https://azure.com). Let me give you a warning here. [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) has been updating this a lot by the time this recording is done the interface may change, however the concepts will remain the same. The model catalog gives you a list of models that you can deploy in Azure AI Studio. As mentioned in the previous chapter, you not only have access to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Open AI models, but also other models such as Phi [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md), Mistral, and all other models that Microsoft has a partnership with. The model benchmarks allow you to see how each model is performing against a specific task and industry recognized data set. In this example, you will see that GPT for 32 K performs the best in the question answering task. While another model performs better for text generation.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=72)** The prompt catalog gives you a list of prompt templates that you can use based on different business scenarios. The Real Estate Agent assistant can be used for a real estate setting, for example. AI services gives you access to all the different AI functionalities that Azure has to offer. Coda provides you with a list of [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) and Azure Open AI models that you can deploy for your projects. Let us now explore a specific hub. As we discussed in a previous chapter, the hub is a high level resource while the project is a child resource. A hub may contain many projects, many connected resources and members with different roles and responsibilities. The deployments, connections, compute instances, users, and content filters are the shared resources that can be used by projects under the project hub. Let us now explore a specific project. For our RAG exercise we will focus on the following areas. Data is where we will upload our domain data for the RAG application.
>
> **[2:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=167)** Indexes are where we will build vector embeddings on the store data. Deployments are where we will create models for our deployed application, evaluation process and vector embeddings. It will also contain our application deployments. Content filters are where we will create filters to be applied against the deployments we created based on business needs. The Chat Project playground is where we will manually test our index using a specific model we deployed. The [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) is the orchestrator that will connect our user input, external data and LLM. We will also use prompt flow to deploy our application to production. Finally, the evaluation will allow us to evaluate the prompt flow we created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (2), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (1)
> **Env Vars:** rag (2), url (1), gpt (1), llm (1)
> **Cross-References:** previous chapter (2), we discussed (1)
> **Analogies:** such as (1), for example (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)

#### [Creating a project in Azure AI Foundry](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=0)** Let me now show you how to create a hub and project in the Studio. Before creating a project, there are a couple of things you should do. First, you should already have a subscription that let us [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Open AI enabled. If you do not have access to Azure Open AI yet, you need to get access via this registration form. Second, I recommend that you create an Azure AI Search and Azure OpenAI Resource beforehand. This gives you more control on the pricing tier and location of the Azure AI Search resource, and the location of the Azure Open AI resource. You can also create them when creating a hub, but you will have to accept the default settings given to you. For our example, we will create a new hub directly without creating those resources. You can create a hub by going to the Studio and clicking all hubs &gt; new hub in the create a new hub form enter any name for the hub name. Select the subscription that has Azure Open Access. Create a new resource group or accept the default given. Choose your desired location. Create a new Azure AI Services or Azure OpenAI Resource or select the one you created for the project.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=97)** When you create a new one, the location of the resource will be the same as the location of the hub. If this does not meet your needs, then the recommendation is to create the resource for separately. Finally, you create a new Azure AI Search or select the one you also created previously. Recall that this will be our data source. If you decide to create a new resource here, the pricing tier will be set to standard by default. If this is not acceptable for you, then you should create a search resource first, then select it in the drop down upon hub creation. Once the validation is done, click next, then click create. The creation process will take a few minutes. You'll be able to see the status of the creation, and you will see other resources created, such as a Storage Account and Key Vault. When the process is done, you will be sent to the Hub Overview screen where you will find the connected resources, permissions and properties of the hub. You can click on the resource group in order for you to see all the resources created to support the hub. You will see that the Key Vault and Storage Account were created along with the Azure
>
> **[3:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=191)** AI Service, Azure AI Services and Azure AI Hub. All resources are assigned the same location since you created them via the hub. The Azure AI Search service gets the standard pricing tier by default. This is very important to know because the AI Search is one of the key drivers of cost. If you want to change the pricing tier, you would have to create the whole service again. Going back to the hub overview screen, we can now create our project. Click New Project and enter the project name. The process will again take a few minutes. Once the project has been created, you will be directed to the project overview screen. You will also notice in the portal that an Azure AI Project resource is created in the same resource group as the others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (15)
> **UI Navigation:** select the (2), click on (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)


### 3. Setting Up Azure AI Foundry

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding content filters](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=0)** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) has a content filter system that works alongside the core models to help you deploy AI responsibly. It is powered by [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI content safety, and it will filter the input prompt and the output completion of the system. It has been trained for English, German, Japanese, Spanish, French, Italian, Portuguese, and Chinese languages. It can still work with other languages, but the quality of results may vary. The content filter system will only work with Azure OpenAI based models such as GPT 4 and GPT 3.5. The feature will not work for other models like [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) and Mistral. The list of languages and models may change in the future. It is best to check the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Learn website on the content filter system of Azure AI Studio. The content filter system has four categories. Violence covers any language that will hurt, injure, damage, or kill someone or something. Hate covers any racist or discriminatory language to the different races ethnicity, nationality, gender identity, religion, immigration status, personal appearance, and body size of a group of people. Sexual covers any language related to sexual organs, romantic relationships, erotic or affectionate terms, physical sexual acts including prostitution,
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=94)** pornography, and abuse. Finally, self-harm covers language that will hurt, injure, or damage one's body or kill oneself. It also includes toxic behavior, name-calling, repeated insults, reputation tarnishing, excessive rudeness, and rumors spreading. Examples of these categories can be found in the categories documentation of the content filter system. The content filter system has four severity levels which you will set per category. The safe severity level is not available by default and needs special approval. Since this is the lowest level, it will allow words from the different categories if they are used in an educational, journalistic, scientific, medical and other similar professional contexts. The low severity level will include some bias, judgment, or offensive language that may be okay for some, but not for others. Examples are stereotypes or content from fictional worlds like video games or books. The medium severity level may contain content that may be quite upsetting for some. It will include offensive, insulting, or demeaning content toward certain groups of people. It might also include harmful instructions or glorification
>
> **[3:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=189)** of harm, but at a moderate level. The high severity level is generally not okay for most people to read. The content will contain explicit and severe harmful actions and endorsement, glorification, or promotion of such severe harmful acts among other things. We will discuss in the next video how we can set all of these. Finally, there are three other optional pre-built filters that you can use. The prompt shield for jailbreak attacks is a feature to protect the system from jailbreaking. Jailbreaking is an attempt of a user through the user prompt to bypass the desired behavior the developer has set, protected materials that will help detect materials from books, songs, news, recipes, and selected web content that are copyrighted. Finally, protected materials code covers source code that matches a set of source code from public repositories. Once detected, it will provide example citation and license information in annotations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** gpt (2)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **Versions:** 3.5 (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)

#### [Creating content filters](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=0)** In order to create a content filter in [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md), we should go to the project we created and click the Content Filter section in the left hand navigation bar. Click Content Filter in order to set the parameters. Provide a unique name for your content filter and set your connection. Choose the necessary threshold levels for each category for both the input and the output. By default, there's no option to disable a category. You would need special access to do so. In addition, the threshold level here can be quite tricky. The low setting is the strictest setting as it blocks both low, medium and high level settings. The medium setting allows only low severity, but blocks both medium and high. Finally, the high setting is the most lenient setting as it allows both low and medium and only blocks the high level scenarios. This can be confusing at the start. Again, putting everything at low is the strictest and safest setting, and putting everything at high is the most lenient setting. In my example, I am choosing low in all categories for both input and output. Scrolling down you will see the additional pre-built filter settings. These are all optional. You would have to decide if your business requires this. In
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=95)** the output setting, you can also choose your streaming mode. Select customers can choose an optional low latency streaming mode. With with the synchronous filter, content filters are run asynchronously, and completions will stream back token by token with the delayed content filtering signal. The default setting filters data back to you in real time. Clicking on Next lets you select the models where you can apply this content filter. Since we have not created any deployment yet, we will set the content filter settings once you create a deployment. Finally, creating a custom content filter is not really required. If you do not create a custom content filter, Azure AI Studio will assign the default content filter for your deployment, which is the medium threshold level for all categories for both input and output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2)
> **UI Navigation:** go to (1), select the (1)

#### [Creating model deployments](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=0)** Creating model deployments is a very important step in the RAG process, as this is where you choose the large language model you will use. But before you deploy a model, you should strategize by deciding on the following. First, you need to decide on what model to choose. As of this recording, you can decide from [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI, Meta, [Huggingface](../../Glossary/Service/Hugging%20Face.md), Nvidia, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)., Mistral, Go here, Databricks and [Snowflake](../../Skills/Data%20Science/Snowflake.md). I am pretty sure there will be a lot more in the future. For RAG purposes, [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) currently only supports Azure Open AI models. This can also change as well in the future. You then need to decide the best model for your use case. Question answering isn't the only use case available. There is also text classification, image classification, object detection, and a lot more. In addition, you should also consider the cost of the model you are choosing. For example, GPT 4 costs more than GPT 3.5, so you may want to see if the cheaper model meets the requirements. For our model, we will create three deployments. We will use text embedding ada-002 for our embeddings model. As discussed in the previous chapters,
>
> **[1:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=93)** this is required to convert into vector embeddings our data source during initial setup and our user queries at runtime. We will use GPT 3.5 turbo 16 K for our chat completion. This would be the model used to generate our chat responses. Finally, we will use GPT 4 32 K for our evaluation. It is best to use a separate model to check if our responses are accurate. To create a model deployment, you would need to click the deployments left navigation option and click Create Deployment. You would then select the model you want to deploy, then click Confirm. You then specify the deployment type. Connect it to an Azure OpenAI resource, select the model version and set the deployment name. I normally set the deployment name the same as the model name. Under Advanced Options, you can then assign a content filter for the model. If you created one in the previous chapter, this is where you assign it. A content filter with medium threshold set for all categories is assigned by default if you do not assign a custom setting. The [Tokens](../../Skills/Web%20Development/Tokens.md) per minute rate limit setting is also important, as this is your limit for the number of requests and tokens for both input and output that you have per minute.
>
> **[3:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=190)** This setting can be important as well if you have multiple projects using the same model deployment, and this can also help you track costs as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Huggingface](../../Glossary/Service/Hugging%20Face.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **Env Vars:** gpt (4), rag (2)
> **Versions:** 3.5 (2)
> **UI Navigation:** select the (2)
> **Prerequisites:** required to (1), setup (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Navigating the Playground](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=0)** The Chat Project playground is where you can manually test, evaluate and deploy your application. You can access the module through the project playground chat left navigation. The first setting you should set is one of the deployments you created earlier that you intend to use for testing. The second setting to modify is the system message. This is where you specify how the system should behave. You can specify here the system's name, it's personality, if it needs to far match responses and any safety parameters you want to specify. You can also set variables as placeholders that can be filled with different values or information for each API call. In our example, we will set country as a variable. Examples are where you can provide a few examples of the responses you're expecting for certain scenarios. This would be disabled when you attach your own data, however, so we will not use this functionality. There is an option to provide safety system messages as well. In our given example, if we add a personality to the system and add all the safety system messages, these words would add up to the total number of [Tokens](../../Skills/Web%20Development/Tokens.md) to be sent during every API call. Since we are using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI, we can count the total number of tokens from OpenAI's tokenizer website. Every time you make changes in the system message, you need to click Apply changes.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=92)** Besides the system message, there are other areas you can go to. Add your data is where you can attach your data for a RAG. We will discuss this in the next chapters. Parameters set the chat history and settings of the LLM. We will also discuss this more in the next chapter. The chat area is where you can input your user queries. You should be trying a few queries here to test your Azure OpenAI connection, and to see if the system is behaving according to the behavior you specified in the system messages. The playground settings lets you enable text to speech and speech to text capabilities. With this enabled, you can talk to the system and the system can be able to talk back. The top menu bar has some options that would be helpful to. View code lets you view sample code that allows you to access the system using the programming language of your choice. The evaluate option lets you go to manual evaluations. We will discuss how this is performed in the evaluation chapter. Finally, you can deploy the system into a sample web app to show your customers how the system performs. The web app can be used for demo purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **Env Vars:** api (2), rag (1), llm (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is an  (1)

#### [Using the Playground and its settings](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=0)** Before we test the playground further, there are a few parameters that we need to cover. Past messages specify how many user queries and how many system responses will be included in the chat history during every API call. A value of ten, for example, will include five user queries and five system responses. The maximum response represents the number of [Tokens](../../Skills/Web%20Development/Tokens.md) limit .The number of tokens set are shared between the prompt, including system messages, examples, message history, and user query, and the model's response. Remember that token length is directly proportional to the cost of the system. Temperature varies from 0 to 1. A low temperature closer to zero provides a more focused response, and a higher temperature closer to one provides a diverse and unpredictable response. Topic controls the diversity of the words generated by the LLM. A low top setting makes the words more predictable, while a high top P produces more diverse words. The stop sequence stops the output or response when the specified string is detected in the response. Positive values for frequency penalty will make tokens less likely to appear, as their frequency increases and decreases the model's likelihood of repeating the same statements. Finally, positive values for presence penalty will make tokens
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=97)** less likely to appear when they already exist and increase the model's likelihood to output new topics. Knowing the values for each setting will take trial and error. In a RAG situation we may want a lower temperature, lower top, and lower presence penalty to make the response more predictable so that words only come out from the tree of content. Let us now go to the playground to see some of these settings in action. First, we ask the system if it has a name. Right now it's definitely replying back without one. The developer can now provide it with a name and personality in the system message. Second, let us ask details about France and Spain. The system should be able to respond back for both countries.
>
> **[2:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=172)** But if you specify in the system message to only respond to questions about France, then the system will behave that way. Third, let us check maximum response.
>
> **[3:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=195)** The first response provides a very detailed answer.
>
> **[3:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=207)** If you specify the maximum response to just 300, you will see that the response is immediately cut. Finally, let us try out the stop sequence. By setting the stop
>
> **[3:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=230)** sequence to day five, the system will only provide an itinerary till the fourth day. The system answers data from its training data set, which comes from the internet. Let us now set this up to answer questions using our own data in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (4)
> **CLI Commands:** make (3)
> **Env Vars:** api (1), llm (1), rag (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### 4. Creating an Index for RAG Using Azure

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating an index using Azure AI Foundry](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=0)** In order for the LLM to answer based on our data, the data should first be converted into vector embeddings and then stored in the data source. Looking at the drug process, [Data Storage](../../Skills/Data%20Science/Data%20Storage.md), chunking, computing vector embeddings, and index storage may be difficult tasks to perform. Fortunately, [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) makes this process as easy for you. There are a couple of ways to create an index. One way is to do it in Azure AI Studio, and the other is to do it separately in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Search. While both processes manage the chunking and vector embedding conversions for you, each process provides different results. This video shall discuss how to do it in Azure AI Studio. We go to the indexes in the left hand navigation and click New index. We will upload our files here so that the data is stored in the same blob storage account we have with a project. Select Azure AI Search. This should use the Azure Search service that was created when you created the hub. You may assign an appropriate name to the index name. You can then choose any virtual machine. I will choose auto select. Make sure you add vector search to the search resource to create the vector embeddings.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=94)** Choose the Azure OpenAI resource intend to use. This resource should have the text embedding model created. Make one final review and click Finish. This process will take a few minutes to complete. Once complete, you will see that the whole process will do three things. First, it will perform the document chunking, which is a split up the different files into smaller ones so that context is not lost. Second, it will compute the vector embeddings per document chunk and create an index in Azure AI Search. Finally, it will register the index into your project. Let us now go to the Azure AI Search resource to view the index data. You will notice that we uploaded 20 product files, but the end result is 61 documents. The junking process approximately split each file into three documents. You can also view the vector data by doing a quick search on the index. Observe the long vector created for each data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (3), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)

#### [Creating an index using Azure AI Search](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=0)** Another method to create the index is to do it in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Search. There are a few reasons why you want to create the index outside of [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md). You already have data stored in an Azure Storage resource outside the AI project. You already have an existing Azure AI Search resource from other projects that you want to reuse. You have data that is stored in image format. As of the recording of this video, Azure AI Studio can only accept text formats. Finally, you want to schedule indexing. If you have use cases where in your data keeps changing continually, then you may want to automatically recreate your index at a certain schedule. We now go to the Azure AI Search Resource in order to create the index. In the overview section we click the button Import and Vectorize Data. We then choose the subscription Blob storage account and container where data is located. You can enable deletion tracking if necessary. We then choose the subscription Azure OpenAI service and the embedding model. You should also take the checkbox. You have options to vectorize your images and extract text from images if you have image files. Since our data is purely in text form, we will not select any of these.
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=95)** Enable semantic ranker if needed. We will discuss what this is about in the next chapter. Specify as well your desired schedule to update the index. Finally, specify a name for the index, then click Create. Index creation will take a while to complete. Once done, I suggest that you review the index created in the Azure AI Search resource to see if your data contains the vector embeddings. You'll also notice that the index has more documents compared to the previous chapter. In this chapter, you have noticed that there are more settings you can control when creating your index in Azure AI Search, versus creating it using Azure AI Studio. If you still need even more control, then you may try the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or the [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs documentation of Azure AI Search.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Cross-References:** in the next (1), previous chapter (1)
> **UI Navigation:** go to (1), checkbox (1)
> **CLI Commands:** python (1)

#### [Understanding retrieval and relevance in Azure AI Search](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=0)** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Search uses two different layers of execution when searching for information, retrieval and relevance or ranking. These are two very important concepts we need to understand in RAG. Retrieval finds and fetches the most relevant data based on a user's query., while relevance or ranking determines how closely the results match the user's query. Both of these concepts will determine how well the RAG performs in getting content and the cost of your solution. In Azure AI Search retrieval often called L1, has three different types. Full text search or keyword search is the cheapest search method and the most traditional method we know. The method is actually a complicated process, but in Layman's terms it tries to find a match of the text between the user query and the source index. Vector search is a method that uses mathematical vectors to represent and search through complex data. Both our data source and the user query are first converted into vectors using an embedding model such as text embedding ada-002. We then try to get the closest results in the data source from the user query using a chosen algorithm, such as cosine similarity.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=92)** Hybrid search is a search method that combines both full text search and vector search. When this is selected, both search methods run in parallel in a method called reciprocal rank fusion ref will produce a single combined result. Once the L1 process is completed, Azure AI Search will then apply relevance or ranking, often called L2. This also has three different types. BM25 or best match 25 ranking is a ranking method exclusive only to full text search. The method looks at a lot of factors, such as giving a higher score to documents that contain a lot of the search [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), giving a smaller document a higher score over a larger document if they contain the same amount of the search word, or if a word search query is available in most documents, then it is not useful in searching. Exhaustive key-nearest neighbors (KNN) or Hierarchical Navigable Small World (HNSW) are methods exclusive to vector search. When exhaustive KNN is used, the user query vector is matched against all the vectors in the data source. It is used to, and high recall is very important. However, it is very computationally expensive and slower as it needs to go through every single vector.
>
> **[3:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=187)** HNSW uses an advanced algorithm that tries to put the data in different categories. When a search is done using HNSW, your query vector is immediately matched against a particular category and thus ignoring the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the other categories of data in the data source. Semantic ranking is the best ranking method now according to [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) research. It is used to in hybrid search is selected. It improves the BM25 and RF by using a [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) model adapted from Microsoft Bing, to rearrange the initial results of L1. Your business requirements would decide what would be the best L1 and L2 method for you. Performance comes at a cost. The best method as of this recording is to use hybrid search and semantic ranking in your settings when using RAG. However, this option is also the priciest option. To learn more about Hybrid Search and Semantic Ranker, you may visit this URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Env Vars:** rag (3), hnsw (3), bm25 (2), knn (2), url (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **CLI Commands:** find (1)

#### [Testing your index in the Playground](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=0)** You can now manually test your index in the chat playground to see its performance. We first set the system message properly. We should specify the role and behavior of the system. In this case, it is an AI assistant that tells people find information about the [products](../../Skills/Software%20Development/Microsoft%20Products.md) of the Contoso company. In addition, we should specify how the system responds when asked questions outside the data source you provided. This is to reduce fabrications in the response. We then need to attach the index in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data section. If the index was created in [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md), the index would be readily available. However, if we created the index using Azure AI Search, then you would manually have to add this. Click add a new data source. Select Azure AI Search in the data source, then select the Azure AI Search resource in the index you created. Select the embedding model and ensure that the vector search option is selected. We then have to choose Custom Field Mapping and individually map each field. The chunk field in our index contains the content data. Once the index is set, select the search type we intend
>
> **[1:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=100)** to use. Under the advanced settings, we can specify to limit the responses based on your data, set the strictness factor and the number of retrieved documents to display. We then set the temperature, top P and other parameters
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=124)** accordingly. When everything is set, we recommend that you provide a list of ten ready made questions based on your data and verify if the response provided is correct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (1)
> **UI Navigation:** select the (3)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)


### 5. Introduction to Azure Prompt Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding prompt flow](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=0)** [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) is an orchestrator or organizer that connects your LLM data source system prompts and user inputs into a well connected system. It provides us with a comprehensive solution that simplifies the process of [Prototyping](../../Skills/Software%20Development/Prototyping.md), experimenting, iterating, and deploying your AI applications. What I like about Prompt Flow is that it provides you with a directed acyclic graph in order for you to visualize how each component of the flow interacts with each other. This will help you understand how the system works under the hood. [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) then provides you an interactive interface to set each component as needed. In addition, it gives you a simple to use evaluation mechanism that lets you test the performance of the system based on a different set of system message scenarios. An LLM system will have different behaviors, functionality, and outcomes based on how you set the system message. Instead of manually testing and recording each system message scenario, you can set all the possible scenarios in the Prompt Flow and have AI studio evaluate the performance of each scenario in one sweep. We will show you how this is done in the video focus on evaluations. Finally, Azure AI Studio provides you with the list of Prompt Flow
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=95)** templates that you can easily use for your project. The templates would either be a standard flow for general applications, a chat flow for conversational applications, and an evaluation flow for different evaluation scenarios. A typical Prompt flow will contain nodes which are tools with specific functionalities. You can view the complete list of tools with this URL. We will discuss briefly what tools you'll be using for our course. LLM tool allows you to use [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) with the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI service for tasks such as text completion or chat. Index lookup allows you to search a vector based query for relevant results using one or more text queries. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) tool allows you to run different Python code. Finally, Prompt tool allows you to craft a prompt by using Jinja as a templating language. We will discuss in the next video how to create a Prompt Flow for our project, and modify the different tools to make our system work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (5), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Env Vars:** llm (3), url (1)
> **CLI Commands:** python (2), make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)

#### [Create a sample prompt flow for RAG](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=0)** Let me show you how to create a simple [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) for a RAG solution. We go to Prompt Flow under tools and click Create. You will see the different standard chart and evaluation flows available for you to reuse. You can also import a prompt flow from a file share or from your local machine. A prompt flow follows the YAML schema and is saved in a YAML file. For our sample, we will clone a multi round Q&A on your data template. Enter a name for your prompt flow and click clone. When the flow is created, you will see a graph which shows the different components or tools of the flow. Before we modify each tool, we need to start a compute session. Clicking the Start Compute session gives you a predefined virtual machine. Start with advanced settings lets you configure one. We will choose the default for now. It will take 1 to 3 minutes to provision a compute session for you. Once completed, we need to modify each tool. We will modify two LLM tool settings to connect our [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) OpenAI resource and set the proper deployment model. You can also modify here the temperature and max token count. Set the response format to text.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=97)** Chat with context is the second LLM tool.
>
> **[1:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=105)** We will then modify the index lookup to use the index we created in the previous video. Under ML index content, you can select a wide variety of options. We will choose registered index which contains one of the indexes we set in [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md). We will select Hybrid Semantic for the query type and set the top K value. Top K defines the top score document search is retrieved. Finally, you can also see the different system prompt variants or scenarios. By default, you're given three different variants for you to modify. We will accept the default set for now. After you have completed setup, do not forget to save. You should then test the prompt flow by asking questions about your data in the chat interface. This will take a while for the first run. If everything seems to be working fine, we can now evaluate the prompt flow against the list of question and answer pairs we have prepared. But before we do that, let us define the different evaluation metrics in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (7), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (1)
> **Env Vars:** yaml (2), llm (2), rag (1)
> **Cross-References:** previous video (1), in the next (1)
> **Prerequisites:** configure (1), setup (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)

#### [Evaluation and monitoring metrics](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=0)** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) provides you a tool in order to measure the performance of your system. Evaluating your system is done in four easy steps. First, you will need to prepare a set of question and answer pairs that will be used as a benchmark. You would need to go through your source documents and generate questions with the correct answers. These answers would serve as the ground truth. You will then store them in a specific file format found in this URL. Second, you then need to decide which metrics shall be used during the evaluation process. This decision must involve your users. Third, you then upload your benchmark file and perform the evaluation test. During the test, the system will generate answers and will verify if they match the ground truth answers you specified in your benchmark file. Finally, you review the statistical results of the test. You would then align with your stakeholders if the results are sufficient or modifications need to be done. The evaluation test allows you to choose any of the following quality metrics. Coherence measures how well the application can produce output that flows smoothly, reads naturally, and resembles human like language. Fluency measures the language proficiency of the application's answer. GPT similarity measures the similarity between a ground truth
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=96)** and the generated response of the application. Finally, the F1 score measures the ratio of the number of shared words between the application prediction and the ground truth. The evaluation test also allows you to test the risks and safety metrics we have earlier discussed on content filters. You can choose to test self-harm, hateful, violent or sexual content, and you can also indicate the threshold of the test either low, medium, or high. As a final note, remember to always involve your key stakeholders when defining which quality and safety metrics will be used during the test and your success criteria.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (1)
> **Env Vars:** url (1), gpt (1)
> **Best Practices:** remember to (1)

#### [Perform evaluations on your RAG system](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=0)** Before we evaluate our RAG system, we must first prepare our benchmark file, which contains our ground truth data. The ground truth must come from your source documents. You have the option to generate this manually, or you can have an LLM generated document for you. In both cases, proper verification is needed to ensure that this file is correct and that you have enough scenarios to test your different business requirements. Inside the [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md), we have an evaluate button at the top right of the screen. Select built in evaluation, then assign a name for the evaluation. Select question and answer without context and verify that your prompt flow is properly selected. Then click next. Upload your benchmark file and verify that your data is properly mapped. Under chat input, select Data question, then click next. You then select the desired performance and safety metrics that you want to test. Make sure that the connection and deployment model is properly set. At the bottom, select chat Chat Output to answer. Then click next. Make one final review, then click submit.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=97)** The evaluation will take a few minutes to complete. Notice that three evaluation tests are running together. Recall that our flow has three different system prompt variants. Once completed, you can view the results of each evaluation run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (2)
> **CLI Commands:** make (2)
> **Env Vars:** rag (1), llm (1)
> **UI Navigation:** select the (1)


### 6. Deploying a RAG Solution

[↑ Back to Table of Contents](#table-of-contents)

#### [Deploying the RAG solution using prompt flow](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=0)** Once we have evaluated the RAG solution and it has passed this testing, we can now deploy the solution into production. Go back to your [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) and select deploy. Specify the endpoint and deployment name. Then choose the virtual machine where you intend to deploy the solution. Make sure you select the right machine that meets the requirements. Specify as well the number of instances. For high availability, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) recommends you set at least three. Select your desired authentication type and specify if you want the endpoint to be accessible in the public internet, modify your deployment settings if needed and finally, select the desired deployment model. Recall that we have two LLM tools in the flow. Make one final review, then click create. The deployment will take a few minutes. You can view the status of your deployment under components deployments. Once completed, you can now view its details. You should then test the deployment by asking the system some questions. Finally, let us view how we can consume the deployment. You will see the [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint
>
> **[1:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=99)** and the authentication keys. You can also consume the deployment using [JavaScript](../../Skills/Software%20Development/JavaScript.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), C-sharp and R. Going back to JavaScript I would like to highlight the following. First, the Rest endpoint is accessible via a Post request. Second, the headers must have the following: content type set to application [JSON](../../Skills/Web%20Development/JSON.md), the authorization key should be a string, which is the bearer plus a space, plus the API key, and the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) model deployment key should be your deployment name. Let me show you how to access this via postman in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** rag (1), llm (1), json (1), api (1)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** select the (2)
> **Tools:** postman (1)

#### [Testing the REST endpoint using Postman](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=0)** Postman is a software application that allows developers to test document and share APIs. To access a [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint, we need to make a Post request and copy the URL. Recall that authorization should be bearer plus your API key
>
> **[0:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=30)** and your [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) ML model deployment should equal your model deployment name. We then need to specify the raw body. In order to do that we need to go back to our [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) and view the inputs. The inputs of our Rest endpoint is a [JSON](../../Skills/Web%20Development/JSON.md) file that contains a chat input string in a chat history list. Upon further investigation, you will see that the chat history contains a pair of input and output strings. Let us see this in action in Postman. We first make an initial query. The history should be blank. We then make another query adding the history of the previous
>
> **[1:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=90)** conversation. In this scenario, in the question how much is it? The system already knows that it refers to a cosy night sleeping bag. Given that it's part of the history. Here's another example with more chart history.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=116)** The reason that I'm showing this to you is because you would have to eventually make a program to continually add the previous conversations in the chat history.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (4)
> **Env Vars:** url (1), api (1), json (1)
> **Definitions:** is a  (2), refers to (1)
> **Tools:** postman (2)
> **Cross-References:** go back to (1)

#### [Deploying the REST endpoint to Copilot Studio and Microsoft Teams](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=0)** Let me now show you how we can chat with our data in [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) using the [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint provided by [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md). To make this possible, we will use [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) Studio. We create a copilot.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=22)** Go to system topics. We will disable conversational boosting. And modify the fallback topic. Using Postman, what do we know? First, we know it's a Post request, these are the headers and this is the body. If you look at it the body's always composed of a prefix which is this one and a suffix, and sandwiched in between is your user query. Let's set this up in Copilot. We create a variable called prefix.
>
> **[1:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=74)** And the prefix is this value.
>
> **[1:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=84)** Create another variable called suffix.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=97)** And set the value to the string.
>
> **[1:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=109)** Then you make another variable called the request body,
>
> **[2:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=122)** which is a concatenation of
>
> **[2:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=132)** .topic.prefix your user query which has system dot last
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=144)** message.text.suffix
>
> **[2:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=154)** We then create an HTTP request.
>
> **[2:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=163)** We copy our URL. Set the post method. Then we enter our headers.
>
> **[3:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=191)** We set body to raw content.
>
> **[3:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=200)** And specify content to request body. And then in the response data type we add sample data.
>
> **[3:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=219)** And save it to a new variable called
>
> **[3:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=227)** response. Finally, we output the response output. Response chat output, this one. Now let's test the system.
>
> **[4:19](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=259)** You will see that Copilot is now answering based on your data.
>
> **[4:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=268)** We can now publish the copilot. This will take a few minutes. Once publish is complete, you can now deploy to Microsoft Teams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (5), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (1), [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** http (1), url (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Key takeaways](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=0)** Congratulations. You have learned how to create a rug application using [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md). To provide the recap, here are the key things we learned. Retrieval Augmented Generation allows you to chat with your own data. It is one of the most widely used patterns in using [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) for business. [Tokens](../../Skills/Web%20Development/Tokens.md) are words converted into numeric form for LLMs to understand. They are a key driver of course for your system. Vector embeddings capture the relationships between words. Embedding conversion happens during data setup and during data retrieval. We also discussed the workflow of RAG. Retrieval occurs when the user's query is used to search for similar documents in your data source. Augmentation happens when the user query and the search context are combined together to form a new prompt. Generation takes place when the LLM creates a response based on the new prompt. RAG solutions need a Retriever, LLM, Orchestrator, and a Front end. We use [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Search, Azure OpenAI, Azure AI Studio [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md), and [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) using [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) studio to make our solution. Azure AI Studio is a tool that lets you build, evaluate, and deploy AI applications in a responsible
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=95)** manner. In order to build a rug solution, we did the following high level steps. One, we created content filters that provide you a mechanism to filter out harmful, violent and sexual content using Azure AI content safety. Two, we deployed a model of our choice. We have the option to deploy OpenAI, [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md), Mistral, Phi, and other models that [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) has a partnership with. Three, we created an index with vector embeddings to prepare our data. We can use either the Studio or Azure AI Search for the conversion. Four, we set up a prompt flow that would meet our business requirement. Five, we evaluated the flow based on metrics we chose, and finally we deployed the flow to production and consumed the endpoint using any method we chose. When consuming the [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint, you need to make sure that the following information is set. The post method which contains your URL, the headers should be set, specifically, the content type, authorization key, and Azure model deployment. And finally, the body should have your input string in the Chat history list, which contains the input and output of previous conversations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) (2), [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md) (2), [AI for Business](../../Skills/Artificial%20Intelligence%20(AI)/AI%20for%20Business.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** rag (2), llm (2), url (1)
> **CLI Commands:** make (2)
> **Prerequisites:** setup (1), set up (1)
> **Definitions:** is a  (1)

#### [Additional learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=0)** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) is a very big space and it's continually evolving and changing. You will never run out of things to learn. There are so many concepts to cover just within [GenAI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). You can continue to research the latest trends coming out of GenAI, such as organic workflows. The traditional non agent approach we are using consists of providing a prompt and receiving a single direct response. A genetic workflows are the next level as it empowers [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) to engage in a more dynamic, iterative, and self-reflective process. You can focus on learning [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md). This field will continue to evolve as new models come out, and there will be specific techniques that will cater to different business functions. From engineering for HR, finance, marketing and sales, for example, will continue to be a need. You can also read up on the latest trends in RAG and [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md). These techniques will continue to evolve as new research and use cases come out. You can continue researching using [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) AI technologies. Microsoft is one of the companies in the industry that provides you a well integrated, complete package of AI tools that will support your business at scale with enterprise grade security. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Search and Azure Cosmos DB are one of the best in the world when it comes to [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) and retrieval
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=94)** for AI applications. OpenAI themselves uses these technologies. Azure OpenAI will continue to release newer models and with it newer functionalities and [Software Development](../../Topics/Software%20Development.md) kits. We only covered the tip of the iceberg when it comes to Azure [Prompt Flow](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Flow.md). There are also other libraries you can use, such as [Semantic Kernel](../../Skills/Software%20Development/Semantic%20Kernel.md) and LongChain to name a few. [Azure AI Studio](../../Skills/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio.md) will also continue to change. We did not cover in this course assistance and fine tuning. By the time you see this video, I wouldn't be surprised if it would have more functionalities. Finally, you can also look at [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) Studio for building Quick Copilot for your business. While they may not be as powerful as Azure Air Studio. You may be surprised how these tools can immediately meet your business needs. Microsoft would also have a lot of other co-pilots available for use, such as CoPilot for 365, Copilot for the different dynamics modules and the power platform. In your quest for knowledge, you may also want to get Microsoft's industry recognized certifications. These certifications will certainly spice up your résumé and would show the industry your competency in the space. Azure AI fundamental certification, is an opportunity for you to demonstrate knowledge of AI concepts and related [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) services. You can use this as your entry level to advance into higher
>
> **[3:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=192)** certifications such as AI Engineering and [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). Azure AI Engineer Associate Certification lets you showcase your ability to build, manage and deploy a solutions that leverage Azure AI. This is a higher level certification compared to the fundamental scores and is more challenging. These certifications may not be free, as it requires you to take a proctored exam from an accredited provider. However, Microsoft would provide challenges and promotions from time to time that lets you complete modules and courses with the reward of free certification codes upon completion. Microsoft is also offering five free Applied Skill certifications in AI. They are designed to validate your proficiency in specific scenario based skills such as [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md), document intelligence, generative AI, and machine learning. Upon completion, you can get an achievement badge that you can showcase to social media. From personal experience, these applied skills do test your practical skills in the set of technologies. Finally, you may want to bookmark Microsoft Learn in your home page. It is your one stop shop for learning anything about Microsoft. We decide you can learn by doing, find [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md), ask questions,
>
> **[4:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=286)** try sample codes and showcase your skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (8), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (4), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Genai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2)
> **Analogies:** such as (5), for example (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** rag (1)


## Instructor

- [Ziggy Zulueta](../../Instructors/Artificial%20Intelligence%20(AI)/Ziggy%20Zulueta.md)

## Skills Covered

- Azure AI Studio
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Azure AI Foundry

## Path Context

### In [Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)
← [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) | **6 of 7** | [Hands-On AI- RAG using LlamaIndex](Hands-On%20AI-%20RAG%20using%20LlamaIndex.md) →

## Appears In

- [Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)

## Related Courses

_Courses sharing skills:_

- [Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI](Azure%20for%20Developers-%20Retrieval-Augmented%20Generation%20(RAG)%20with%20Azure%20AI.md) — Artificial Intelligence (AI), Azure AI Foundry, Retrieval-Augmented Generation (RAG)
- [Building in Azure AI Foundry](Building%20in%20Azure%20AI%20Foundry.md) — Artificial Intelligence (AI), Azure AI Studio, Azure AI Foundry
- [Hands-On AI- RAG using LlamaIndex](Hands-On%20AI-%20RAG%20using%20LlamaIndex.md) — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [GraphRAG Essential Training](GraphRAG%20Essential%20Training.md) — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [Azure Ai For Developers Ai Design Foundations](Azure%20Ai%20For%20Developers%20Ai%20Design%20Foundations.md) — Artificial Intelligence (AI), Azure AI Studio

---

[↑ Back to top](#)