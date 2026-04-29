---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: knowledge-graph-data-engineering-for-generative-ai-use-cases
url: "https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases"
duration_minutes: 110
duration: 1h 50m
level: Intermediate
updated: 5/30/2025
learners: 2172
skills:
  - Data Engineering
  - Generative AI
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Knowledge Graphs
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE8e7XXQFryWQ/learning-public-crop_675_1200/B4EZbqbWRDHkAY-/0/1747689760566?e=2147483647&amp;v=beta&amp;t=bzdG_sDdAhC9TrpjXlY5fUPEP1lYnEb6VzMLqd4AKvE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Working with Data- Engineering, Integration, and MLOps for AI]]'
prev_courses:
  - '[[Data Versioning, Lineage, and Quality Monitoring for AI]]'
next_courses:
  - '[[Semantic Search and Information Retrieval using GenAI]]'
path_nav: '[{"path":"Working with Data- Engineering, Integration, and MLOps for AI","position":3,"total":5,"prev":"Data Versioning, Lineage, and Quality Monitoring for AI","next":"Semantic Search and Information Retrieval using GenAI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/data-engineering
  - skill/generative-ai
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/knowledge-graphs
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Knowledge%20Graph%20Data%20Engineering%20for%20Generative%20AI%20Use%20Cases.md)

![Knowledge Graph Data Engineering for Generative AI Use Cases](https://media.licdn.com/dms/image/v2/D4E0DAQE8e7XXQFryWQ/learning-public-crop_675_1200/B4EZbqbWRDHkAY-/0/1747689760566?e=2147483647&amp;v=beta&amp;t=bzdG_sDdAhC9TrpjXlY5fUPEP1lYnEb6VzMLqd4AKvE)

# Knowledge Graph Data Engineering for Generative AI Use Cases

> This advanced course bridges the gap between traditional data engineering and modern AI applications through knowledge graphs. Designed for data scientists and engineers, instructor Ashleigh Faith provides an overview of a practical framework for implementing neurosymbolic AI solutions. Learn how to assess data requirements, build robust knowledge graphs, implement efficient ETL processes, and han

> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases) | 1h 50m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Setup: Data Engineering Foundations]]** (4 videos)
- **[[#2. Extraction]]** (4 videos)
- **[[#3. Data Modeling]]** (7 videos)
- **[[#4. Transform]]** (2 videos)
- **[[#5. Load]]** (5 videos)
- **[[#6. Using the Knowledge Graph with AI]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The power of knowledge graphs in data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=0)** - LLMs and knowledge graphs together enable more accurate context-aware AI.
>
> **[0:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=5)** But if you're new to knowledge graphs, or KGs, translating relational or unstructured data into these network models can be a bit overwhelming.
>
> **[0:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=15)** This course is designed for beginners, offering no-code options so anyone can dive in.
>
> **[0:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=21)** We'll walk through the full knowledge engineering process from preparing and modeling your data with and without AI to building semantic queries that return business-relevant answers.
>
> **[0:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=31)** I'm Dr. Ashleigh Faith, and you might know me from my YouTube channel where I teach on these topics.
>
> **[0:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=37)** With over 15 years in corporate roles focusing on semantics, knowledge graph and search, I manage knowledge data engineering teams with some of the world's largest and most specialized LLM and KG systems.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=51)** Whether you're curious about knowledge data engineering or want to see how AI can help design your KGs, this course is the perfect place to start.

> [!info]- Semantic Content
>
> **Env Vars:** llm (1)
> **Speakers:** - llms (1)

#### What you need to know for the course
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=0)** - In this course, we are going to be working with a small sample set from a fictional olive oil company, called Two Trees Olive Oil.
>
> **[0:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=9)** Our company sells and manufactures olive oil, and also gives tours of the olive oil factory and grounds.
>
> **[0:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=16)** This data is primarily focused on customer data and customer behavior, like product purchases and tours.
>
> **[0:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=23)** While there are many different approaches to data engineering in the graph and AI space, we'll focus on doing the extract, transform, and load, or ETL functionality, into a graph database.
>
> **[0:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=34)** Most graph databases have data engineering and ETL features, but you can also use your existing ETL tools or use programmatic approaches, like Apache Spark, Stream Sets, or your typical ETL Python packages.
>
> **[0:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=49)** I wanted to make this course as low code as possible, so more folks get exposure to how graph and data engineering work together.
>
> **[0:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=58)** We will walk through the design considerations and decision making, and we will use a tool called Star Dog in parts of this course to load data into our data model.
>
> **[1:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=67)** I chose this tool because it has an open tier.
>
> **[1:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=70)** You can play around with it as you learn throughout the course.
>
> **[1:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=73)** And it has some built-in AI to show how AI is used in graph data engineering.
>
> **[1:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=78)** For now, I recommend signing up for a demo account.
>
> **[1:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=82)** There are many similar tools that function the same way as far as ETL and graph modeling is concerned, so don't worry as much about which tool to choose right now.
>
> **[1:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=92)** We will go over other tools, and how to select which is right for you later in the course.
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=97)** Lastly, there will be exercise files for example data models and data sets, and more course materials that will guide you through the rest of this course.
>
> **[1:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=106)** So now that we have our logistics, let's dive into what is data engineering in the semantic AI space.

> [!info]- Semantic Content
>
> **Env Vars:** etl (5)
> **CLI Commands:** apache (1), python (1), make (1)
> **Code Keywords:** function (1), let (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)


### 1. Setup: Data Engineering Foundations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is data engineering?
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=0)** - [Instructor] Let's kick this off with what is data engineering.
>
> **[0:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=4)** Data engineering is when you are taking information from a raw data source, creating a roadmap or blueprint for how the data should load into your systems, and what in this data needs cleaning, interpreting, merging, or other value adds to make it useful for your needs.
>
> **[0:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=21)** This process includes data selection, the ETL or extract, transform, and load operation, determining how the data should flow through pipelines, designing architecture and governance to support those needs, and management of the data and the pipelines.
>
> **[0:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=37)** The typical data model used for capturing semantic data is called a knowledge graph.
>
> **[0:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=43)** A knowledge graph captures information as triples, where entities are related to one another in explicitly labeled ways.
>
> **[0:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=52)** That's where a lot of the semantics resides.
>
> **[0:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=54)** There are two types of knowledge graphs, property graphs and resource description framework or RDF-based graphs.
>
> **[1:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=62)** In this course, we will use an RDF approach because we will use inferencing across the graph to help our AI query be more accurate and contextually relevant to our business.
>
> **[1:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=76)** Now, when working in the knowledge graph space, a data engineer is often called a knowledge engineer, but they can also go by a few other names like ontologist, linguistic, or natural language understanding engineer and more.
>
> **[1:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=90)** These semantically focused roles expand on data engineering with semantic engineering, or how to capture both that implicit and explicit knowledge for your organization, how you need it to work with your use case, and understanding how AI, semantics, and the use case will play well with each other for your business needs.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=112)** This knowledge capture and decision making is incredibly important, especially when you're working with automated graph technologies like Graph RAG.
>
> **[2:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=121)** Because Graph RAG will not have that context.
>
> **[2:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=125)** It will not know you at your organization and how you define customer as an example, or whether that definition changes between departments or data sets.
>
> **[2:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=136)** Therefore, the knowledge engineer needs to impart that information into the model, architecture, and ETL process, and the other data pipeline and operations you need that information to connect to.
>
> **[2:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=149)** Graph RAG is a great first pass at creating a knowledge graph if you do not have the skills to create a graph yet.
>
> **[2:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=157)** Or maybe you want to extract triples from unstructured texts to influence your ontology and knowledge graph creation.
>
> **[2:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=164)** In either case, you will want to take the output of Graph RAG and refine it to be aligned to your use case at your organization.
>
> **[2:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=174)** A knowledge engineer is also responsible for translating the business needs into a data model and working with the raw data to understand how it can be interpreted by the data model for your business needs.
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=187)** This video gives you a working definition of data engineering for the knowledge graph space.
>
> **[3:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=192)** Make sure to explore the LinkedIn Learning Library for a deeper dive into ETL and data engineering for non-semantic use cases if you would like to expand your data engineering knowledge.
>
> **[3:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=204)** For now, let's review the main knowledge engineering aspects we will cover in this course.

> [!info]- Semantic Content
>
> **Env Vars:** rag (4), etl (3), rdf (2)
> **Code Keywords:** let (2), case, (2), pass (1)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Aspects of data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=0)** - [Instructor] Data engineering always starts with gathering data and governance requirements for the use case, as well as understanding what can be reused from your current data and architecture capabilities.
>
> **[0:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=12)** We will go over this first, starting in Chapter 2, and then walk through the other aspects of data engineering throughout this course.
>
> **[0:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=20)** The second aspect we will cover is extraction of data.
>
> **[0:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=24)** Here, we will assess what you have, its quality and what scheme it's in, where it came from, how it's delivered, and how it's updated and accessed currently.
>
> **[0:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=35)** From there, we'll get into the third step, creating our data model, the blueprint that the data will populate so that our AI can use this.
>
> **[0:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=45)** We will be focusing on semantic data models in this course.
>
> **[0:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=50)** Then, we will move to the fourth step and go through the various parts of transforming the data, the tools to use and documenting decisions for data management and downstream applications.
>
> **[1:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=62)** Finally, we'll finish up with the fifth step and review the architecture and load specific data into our data model to test how the AI can query the graph.
>
> **[1:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=73)** So, with that, let's go get started.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), from, (1), this. (1), finally, (1), let (1)
> **Speakers:** - [instructor] (1)

#### Importance of data engineering for semantic AI
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=0)** - [Instructor] When it comes to AI, semantic context is what supports a precise and accurate AI application.
>
> **[0:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=8)** Here you can see that without context, you may think that the current actress Anne Hathaway, is the spouse of William Shakespeare, but she's not.
>
> **[0:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=18)** This is why context is so important and knowledge graphs are naturally built to house semantics.
>
> **[0:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=27)** AI can use a knowledge graph to query and retrieve statements or triples associated with the entities in the AI query.
>
> **[0:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=36)** These statements are often then used to ground the AI in a source of verified and domain-specific context for better quality.
>
> **[0:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=44)** This is done in the retrieval augmented generation or RAG process, and it doesn't have to just be a knowledge graph.
>
> **[0:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=52)** You can also use your vector databases and your traditional databases in this same RAG process.
>
> **[0:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=59)** Knowledge graphs can also be used to direct an AI in the procedure and steps in technical or business-defined sequences of events for better accuracy of event-based flows.
>
> **[1:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=72)** And this is sometimes called a causal graph.
>
> **[1:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=75)** On the flip side, AI is often used to create ontologies, populate knowledge graphs, and query the graph if users are not as familiar with graph-based query languages like Cyber or Sparkle.
>
> **[1:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=88)** In these cases, the graph needs to be in expected and industry standard formats, and the data needs to be dependable for the AI to use the graph data effectively.
>
> **[1:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=100)** Now that we understand the importance of data and knowledge engineering for AI, let's review our use case for this course.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Use case: Two Trees Olive Oil
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=0)** - [Facilitator] Before we get much further, we need to make sure we have a North Star, or a main use case to keep in mind when we are making decisions.
>
> **[0:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=9)** Throughout this course, we will be working with a small data set to keep things manageable, but in reality, you will likely have large and sometimes messy data sets.
>
> **[0:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=19)** Those data sets might need a lot more engineering than what we're going to go over in this course.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=25)** But just keep in mind that this is giving you the stepping stones to get to the larger goal of being a data engineering pro.
>
> **[0:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=33)** For our example data, we are working with the Two Trees Olive Oil company, or TTOO for short.
>
> **[0:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=40)** As data engineers, our use case here is to empower TTOO's sales team with knowledge to increase their sales success.
>
> **[0:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=50)** Our sales team needs a no-code solution to autonomously assess our customer and sales data to find ways to increase their effectiveness, identify untapped opportunities for customer satisfaction, and critically assess what could be done to better move forward.
>
> **[1:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=69)** You will also need to identify your stakeholders and data owners or, when that is missing, what do you need to satisfy this use case?
>
> **[1:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=79)** Modeling and engineering data in a vacuum is an easy mistake to make.
>
> **[1:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=85)** The end solution needs to work for this specific use case, and you need to understand what data exists, why it exists, how the current data owners and users use and define it, and how the model and data shape up to meet the needs of the end users and business needs.
>
> **[1:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=106)** This requires a lot of conversation, trial and error, and a lot of discussion.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=112)** Don't shy away from it.
>
> **[1:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=114)** Make sure you embrace it because it's going to make everything you do that much more successful.
>
> **[1:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=119)** Okay, now let's dive into how we can help our sales folks get those sales.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** case, (1), let (1)
> **Env Vars:** ttoo (2)
> **Warnings:** keep in mind (2)
> **Definitions:** is an  (1)
> **Speakers:** - [facilitator] (1)


### 2. Extraction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What data do you need?
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=0)** - [Instructor] There's always a temptation to model everything you have in your database.
>
> **[0:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=5)** And you can see here, I've moved all of the database files into Google Drive so it's just easier for us to see.
>
> **[0:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=11)** So you'll see me popping in and out of Google Drive as we do this.
>
> **[0:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=15)** But when you're modeling, you should always keep your main use case in mind, and your primary query, or queries, in mind to ensure the model will be performant and accurate.
>
> **[0:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=27)** You do not need to boil the ocean.
>
> **[0:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=30)** Adding too much data all at once will slow your response time and can confuse the AI if you add unnecessary data in.
>
> **[0:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=38)** The beauty of knowledge graphs is, they are flexible models that can be expanded.
>
> **[0:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=43)** That said, if you have to update the entity types or relationships in your model, there will be a lot of changes that have to go across the entire graph.
>
> **[0:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=54)** So, keep in mind what those breaking changes are as you start to think about what data you're using and how you're going to use it.
>
> **[1:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=61)** We'll go over more about updating your graph later.
>
> **[1:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=65)** For now, let's ask ourselves, what data do we need?
>
> **[1:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=69)** So for instance, we don't necessarily need travel expenses, because remember, our use case is about sales and customer reviews.
>
> **[1:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=78)** But things like our customer info, customer list, products, maybe what the customer purchased, would be useful for our use case.
>
> **[1:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=88)** We know we need data that is related to our customer and sales data, specifically targeted at trends that point to satisfaction and dissatisfaction.
>
> **[1:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=98)** So we can go through this, and what we would do is select the data sets that we feel are going to be the most useful for our use case.
>
> **[1:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=108)** Looking at the data we have available, we can see that there are customer tables, tables for products, tables for purchase orders.
>
> **[1:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=116)** These seem to be the most useful for our use case.
>
> **[1:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=119)** So we're going to start with those.
>
> **[2:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=120)** And instead of having to go through this entire database of data, I'm going to break those out into a separate document for us.
>
> **[2:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=127)** Those are in the course materials.
>
> **[2:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=130)** So, the thing that we can see that is missing is we don't have anything that's specific to customer feedback.
>
> **[2:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=137)** We're going to have to find out if this data exists.
>
> **[2:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=141)** If it doesn't, you will need to come up with a way to create synthetic data, gather the data moving forward, or find a way to extract this information from legacy sources.
>
> **[2:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=152)** In our case, we have asked our fictional web team who informs us, they have customer reviews from our website that we can use.
>
> **[2:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=161)** And here we are.
>
> **[2:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=162)** We're seeing what they have sent to us.
>
> **[2:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=164)** But it is a Word document, or in our case, a Google Doc.
>
> **[2:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=170)** If we had a lot of these and wanted to run AI over them during query time, we could add them to a vector or document database.
>
> **[2:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=179)** In our case, we don't have that much data, so we will instead mine the customer feedback for positive and negative review to add to our data model later on.
>
> **[3:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=189)** For now, we have identified our data so we can keep moving forward.
>
> **[3:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=195)** In the next video, we will move on to gathering the details about the data, so we know where and how to extract the data when we go to production.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (3), case, (3), this. (1), let (1), this, (1)
> **CLI Commands:** find (2)
> **UI Navigation:** select the (1), go to (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)

#### Where is the data?
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=0)** - [Instructor] In our Two Trees Olive Oil case, we have access data from existing databases, but the data we have were exports and we saw that in our Google files, which is fine for setting up the model and surveying the data, but eventually you will need to get updates from the data sources.
>
> **[0:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=20)** Let's cover a couple common ways where you can locate the data that you need for when you go to production.
>
> **[0:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=27)** First, you can stream data in from the source, either through API or canned queries, whereas data is available, it is streamed into the model.
>
> **[0:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=36)** This is used the most with event or transactional data that depends on the most up-to-date data for the AI to consult.
>
> **[0:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=44)** Batch processing is also common where near real-time data is not necessary.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=51)** In this case, you can still use API or canned queries, or you can use a data dump, which is all the data is new each time, or delta loads, and that's when only changed data is loaded.
>
> **[1:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=64)** Both of these also can use APIs, but can take the form of a load or upload process where the original source of the data is pulled and the data is then loaded to a staging area like Amazon S3 or MongoDB.
>
> **[1:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=81)** Making sure you can access the data where it natively lives is critical to your success.
>
> **[1:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=88)** Also critical to your success are the quality, completeness, and timeliness of your data, and you can only get at all of that information when you can get to the original source, so let's get into that next.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (2)
> **Env Vars:** api (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### What state is the data in?
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=0)** - To make things easier to assess, I have compiled the dataset from our TTOO customer product and sales data into one document.
>
> **[0:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=9)** So you can see that here with the tabs below.
>
> **[0:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=13)** So open up the file titled Raw Output from DB tables in the course files to follow along.
>
> **[0:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=21)** So the first thing we'll check is what identification or keys are used.
>
> **[0:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=26)** So here we can see customer ID has keys, our product catalog has IDs, purchase orders have both customer and order numbers and product IDs.
>
> **[0:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=41)** There's a lot of IDs in this one.
>
> **[0:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=43)** And then vendor lists, we're not too concerned about that one right now, so.
>
> **[0:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=47)** If we look through, we want to verify that there are no duplicates, and we can see that these all have different ID logics behind them.
>
> **[1:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=62)** So these are all going to be different, but order number and customer number seem to have an overlap, but we're not too concerned about that because these are different types of data, so they're not duplicative.
>
> **[1:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=74)** That's good.
>
> **[1:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=76)** We're also going to look for glaring errors like missing data, null or NAs.
>
> **[1:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=82)** So I did notice we have an NA and anonymous data down here.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=89)** So we just want to make a note of this because we'll have to address how to deal with null values or anonymous values later on and disambiguation issues.
>
> **[1:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=102)** So if we have customer names, are there any that could potentially be duplicative of each other?
>
> **[1:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=109)** And the answer is, yeah, there's some things in here that could potentially be duplicates like these two.
>
> **[1:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=117)** So we'll make a note of that, and we will come back to it later.
>
> **[2:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=121)** So you'll notice I'm saying make a note of that.
>
> **[2:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=125)** This is where we will start our design document.
>
> **[2:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=128)** And right now, we're just going to add the notes because we are only doing a high-level survey of the data.
>
> **[2:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=135)** So let's make a note about the UIDs, going to add in the note about our anonymous customer, we are going to notice that there are potential duplicates, and we're also going to note that we don't have any customer reviews, which is critical to our use case.
>
> **[2:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=161)** Now, we will come back to all of these later in the course, but for now, this is our high-level notation and analysis on the dataset that we have available to us.
>
> **[2:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=173)** So going back to our data, the reason that we wanted to check these IDs first is graphs function on UIDs or unique identifiers as their main retrieval mechanism, so only the most explicit information is retrieved for that ID.
>
> **[3:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=194)** This is why you have to make sure that they do not get duplicated across different datasets.
>
> **[3:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=199)** If we look across the IDs and the data, we can see they are all unique, maybe a little too simplistic to be used in real life, but for our learning needs, they can serve as our UIDs.
>
> **[3:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=212)** The tool we will use later in the course, we'll add a new ID to these according to the database structure.
>
> **[3:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=220)** So for now, we're going to keep the IDs as they are.
>
> **[3:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=223)** We can see here the commonalities between the different tables where the customers from our customer table are being represented in our purchase orders.
>
> **[3:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=235)** So this is how these two things are connected, but they're not explicit.
>
> **[3:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=239)** You don't exactly know if our interpretation of the data is correct.
>
> **[4:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=244)** So we're going to address these issues as we start to look into the data model, because the knowledge graph will make these relationships more explicit.
>
> **[4:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=254)** While we have a very small dataset here to make learning easier, the other elements I would recommend to check are is the dataset large enough for the use case you are looking at?
>
> **[4:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=267)** Does it contain a good sample of customers, time periods, product lines, etc.?
>
> **[4:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=274)** And does this sample represent the larger spread of data that the project will handle?
>
> **[4:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=280)** For us, this is the only data we will use, so we can confirm the sample set is adequate, but in real life, you will want a representative sample so that the data is manageable but you can also use it to answer all the questions you have at your disposal.
>
> **[5:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=300)** Now, let's head into the next video to translate data from relational data into graph data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8)
> **Code Keywords:** let (2), case. (1), function (1)
> **Cross-References:** later in (2), next video (1)
> **Env Vars:** ttoo (1)
> **Speakers:** - to (1)

#### Translating relational to graph data
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=0)** - [Instructor] Traditional ETL will have you load specific table columns into the corresponding database fields.
>
> **[0:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=7)** For instance, the name column in raw customer data can map to the potential CusSat name field in your database schema.
>
> **[0:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=17)** A knowledge graph is similar, except each row in a table is an instance or specific example of an entity.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=25)** The container of these instances would be the node.
>
> **[0:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=29)** For us, this is customer and purchase order, in this example.
>
> **[0:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=34)** The biggest difference is that in a graph, the two nodes are related with a specific value called a relation or property.
>
> **[0:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=44)** This relation explicitly connects the customer to the specific event, which is a purchase, and that purchase connects to what was purchased in that event, or a product.
>
> **[0:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=55)** Connecting nodes is done through two specific graph elements.
>
> **[0:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=59)** Attributes, which contain other nodes, such as State and are usually metadata associated with individual instances, or Properties.
>
> **[1:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=71)** And these are the explicit relationships between tables or types of data.
>
> **[1:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=77)** In traditional data, the relationship between nodes might be a column or a join between tables, but these are not semantic.
>
> **[1:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=88)** They depend on outside knowledge to interpret, which can lead to incorrect interpretation or incorrect use of the data.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=95)** Not so good when you're using AI, which is already prone to hallucinations if its data is not high-quality, contextual, or has high enough data coverage.
>
> **[1:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=107)** This is why semantic relations native to knowledge graphs are so powerful for AI use cases.
>
> **[1:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=115)** To tell the difference: An attribute is metadata about the entity, whereas a property or relation is how two entities, or an entity and a string value, are related.
>
> **[2:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=127)** Deciding what data needs to be a node versus an attribute is an important decision to make during modeling.
>
> **[2:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=134)** Let's go over modeling in the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), make (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for instance (1), such as (1)
> **Code Keywords:** let (1)
> **Env Vars:** etl (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Data Modeling

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating your design document
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=0)** - [Narrator] We started a design document earlier with our notes, but now we need to flush it out.
>
> **[0:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=6)** A design doc is used to design the model and ETL process before any ETL is actually done.
>
> **[0:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=13)** It allows for review of the model and the plan beforehand and also serves as a record of why and how things were done for troubleshooting and explainability down the line.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=25)** Every major change to the model, usually when nodes, relations, attributes, or IDs change should be documented in a design doc.
>
> **[0:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=34)** Design docs start with an introduction to the use case and problem the data and model are meant to serve.
>
> **[0:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=42)** Let's go ahead and add that in.
>
> **[0:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=46)** Next, we will fill out the data and design section with a sample of the raw source data with nodes on how it was accessed and the limitations of the data.
>
> **[0:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=55)** We have our limitation notes from before, so we will add those to this section.
>
> **[1:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=61)** We also have our sample data from the raw output file, so we can add that in as our sample, and we are going to highlight where those limitations showed up in those data tables.
>
> **[1:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=78)** So now we have our source data and limitations with their examples from the data source all listed out.
>
> **[1:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=88)** You can also list sections of your model that exist that have a similar pattern, and this could be in other data sets and other databases.
>
> **[1:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=96)** Any expected query patterns and we will add in some of the queries we expect to have from our sales folks and expected consumers of this data if you have that.
>
> **[1:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=109)** And for us, that's going to be our star dog AI.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=112)** So we will list that out.
>
> **[1:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=114)** This is helpful for making sure your data is meeting the expected needs you have, taking the guesswork out of your design.
>
> **[2:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=122)** For us, this is a new model, so we do not have all of this information, but the information we do have, we will take note of right now.
>
> **[2:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=134)** The next section we will go over is the model design section.
>
> **[2:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=139)** This is where the nodes, relationships, attributes, and things like entity, measurement, and other data type information would be listed, along with a few example entities that will populate the model.
>
> **[2:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=151)** We will walk through and modify this as we test the ETL later on.
>
> **[2:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=157)** For now, our rough sketch is that customers purchase products and they have experiences related to their purchase.
>
> **[2:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=166)** And remember each of these is represented by an ID.
>
> **[2:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=169)** So let's add in that rough sketch of the model.
>
> **[2:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=175)** When grabbing these examples, we're going to follow the IDs because if we look at our original data set, we can see our customers have an ID.
>
> **[3:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=184)** Those customers created purchases and this is the sketched model that we're going through.
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=190)** Those order numbers are then connected to a specific product as well as a specific review.
>
> **[3:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=197)** So that's how we are generating these examples.
>
> **[3:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=202)** We will also add what attributes we expect to model from these nodes.
>
> **[3:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=207)** These should be derived from the raw data we have available to us.
>
> **[3:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=211)** So looking at our customer data, we can see that there is some information in here that may not be that useful for us and our use case.
>
> **[3:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=220)** So we don't necessarily need the first and surname because we have a column for our full name.
>
> **[3:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=227)** We don't really need the phone number, address, city, because these are individual aspects that our sales folks can use when they decide how they're going to use this information.
>
> **[4:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=240)** Our sales team is broken up by state, so maybe state is something we want to keep retained.
>
> **[4:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=246)** Zip code is the same as some of this address information that we're disregarding.
>
> **[4:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=251)** And last known address is something that we also probably do not need to have in our model, but it might be useful for entity resolution.
>
> **[4:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=261)** So let's go ahead and add in some of these examples.
>
> **[4:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=268)** So we're going to use full name and state and the customer ID for our customer node.
>
> **[4:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=276)** So customer is our node and the attributes are going to be full name, state, and cust ID.
>
> **[4:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=291)** And we're going to go through and do that for product catalog and purchase order.
>
> **[5:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=301)** Alright, now that we've listed out the nodes, the model design that we have sketched and the attributes, we can see that there's something missing because this information between customer and what they've purchased isn't a direct relation.
>
> **[5:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=323)** The customer does not just purchase a node of product, they purchase based on an order.
>
> **[5:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=330)** That order is something that is missing from our nodes.
>
> **[5:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=335)** So let's go ahead and add that into the nodes that we will want to capture so that we can get to product.
>
> **[5:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=344)** Also, our use case hinges on finding positive and negative reviews.
>
> **[5:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=348)** So we will need to add two child nodes to customer review and that is positive review and negative review.
>
> **[5:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=356)** Now we could have made those two nodes and discarded customer review, but we may have other review types and classifications later on.
>
> **[6:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=365)** So we will document our logic for this modeling decision and the benefits and trade-offs are that the alternative approaches limit how much we can do with our data later on.
>
> **[6:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=378)** So let's make those notes in our design document as well.
>
> **[6:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=386)** Okay, finally, we will add any open questions that we may have.
>
> **[6:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=393)** Right now we don't have any open questions, but the other purpose of our design doc is for others to be able to review the model that we are attempting to create.
>
> **[6:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=407)** This is where they can add open questions and we also want to add a section for their review feedback so that can be documented as well.
>
> **[6:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=418)** Now in our use case, we do not have others that are going to be reviewing our model, so we don't have open questions or review feedback.
>
> **[7:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=426)** But these are two important pieces to make sure that you have in your design document when you use this in real life.
>
> **[7:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=434)** So now that we have the start to our design doc, let's explore the options to do the modeling itself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case. (1), finally, (1), case, (1)
> **CLI Commands:** node (3), make (2)
> **Env Vars:** etl (3)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Options for data modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=0)** - [Instructor] Data modeling does not necessarily require large, monolithic ETL tool sets.
>
> **[0:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=6)** While I would not necessarily suggest using an Excel sheet, although no shade if you are using that, document mappings and transformations usually go well with tool sets that are specific to that kind of work.
>
> **[0:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=22)** So let's explore some examples of tools that help with data modeling.
>
> **[0:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=28)** Tools such as Informatica and Hadoop and Talend, those are all heavy-duty ETL tools.
>
> **[0:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=35)** They're used for large multimodal and complex data transformation, but they're not necessarily graph-specific, although many use Apache Spark for ETL into graph structures, but those are usually property graphs.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=51)** Other tools, like Redshift or Databricks, allow for on-the-fly modeling and analytics, whereas there are tools that are more specific to graph modeling, data transformation and data loading, like Stardog, Neo4j, or the open source Protege.
>
> **[1:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=70)** Picking the right tool for the job means gathering the requirements of your ETL and data, which we've covered, as well as the skills and expertise of your teams, which we're striving for no code, so we know we would like to use a tool that has some built in ETL assistance so our sales folks can use it as they need.
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=93)** For our Two Trees Olive Oil use case, we have a small data set with a relatively simple use case and no database integrations.
>
> **[1:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=103)** Since we likely have limited and straightforward transformations, and we want to use AI assistance in our ETL process, we're going to use a tool called Stardog for our walkthrough.
>
> **[1:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=115)** Before we move on to the next video, I encourage you to check out the list of ETL tools, including graph modeling tools, in your exercise files to help you select the tools you need for your real-life projects.

> [!info]- Semantic Content
>
> **Env Vars:** etl (7)
> **Code Keywords:** require (1), let (1), case, (1)
> **CLI Commands:** apache (1)
> **Cross-References:** next video (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Thinking about nodes
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=0)** - [Instructor] In a graph data model, nodes are the circles or dots in a knowledge graph.
>
> **[0:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=5)** They are what you connect together with relationships to make a triple.
>
> **[0:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=10)** Looking at relational data, these nodes are normally going to be named entities.
>
> **[0:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=15)** A named entity does not mean it is a personal or business name.
>
> **[0:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=20)** It means it is a named thing in the world.
>
> **[0:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=23)** So, in our example, this could be olive oil, a state in an address, or the first name of a customer.
>
> **[0:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=30)** These are things in the world, and they have names.
>
> **[0:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=33)** These named entities usually have at least an ID and a label in the data model, but many have additional attributes like a customer's address.
>
> **[0:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=43)** For instance, which specific customer purchased a specific product for a specific purchase order.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=51)** Those are all named entities.
>
> **[0:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=54)** Those are all nodes.
>
> **[0:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=56)** Having a node that captures all the instances, those specific customers and products and purchase orders, are what the node contains.
>
> **[1:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=66)** The node gives your LLM a smaller set of entities to disambiguate and access because disambiguation might be accomplished at the node level and not the instance level, which can be thousands of entities depending on the graph size.
>
> **[1:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=83)** Now, eventually you do need to do disambiguation on your instances, but your LLM is always going to access your node before the instances.
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=93)** Instance-level disambiguation usually is called entity resolution.
>
> **[1:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=99)** This saves time, reduces latency, cuts costs, and increases accuracy because you are reducing the amount of data the LLM needs to wade through to retrieve the correct entities.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=112)** Nodes don't usually represent the specific instances of your data.
>
> **[1:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=117)** Instance data usually comes from underlying tables or as you populate your graph with other graph data.
>
> **[2:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=124)** The nodes and edges are defined in the data model, and the instance data populates the data model as it's loaded into the graph model, and we're going to see that later when we populate Stardog.
>
> **[2:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=136)** Any node with a connection to another node starts to create a graph structure because each node has an infinite potential to be connected to other nodes in the graph.
>
> **[2:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=147)** A node can be connected to a literal value, like a binary flag, like valid or not valid, but those will not be connected to other literals, and therefore literals don't contribute to the graph's network of nodes.
>
> **[2:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=160)** Your instance data will be the lowest common denominator you need to answer questions from your graph.
>
> **[2:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=167)** The logical classifications or buckets of these instances represents what their nodes and those labels of the nodes will be.
>
> **[2:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=177)** So for us, you can see customer is the node, and then the instance data would be Jackie Johnes, Sydney, and Hunter.
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=187)** So let's look at our design doc and understand if all of the nodes we have will represent the instances that we expect and the attributes that go along with them.
>
> **[3:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=200)** For our use case, we want the full customer name because we do not need to retrieve a customer's first and surname separately.
>
> **[3:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=210)** So we have crossed out first name and surname because this is information from original data sources that we won't use.
>
> **[3:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=219)** Our sales team is going to be able to reach out to the customer, and therefore they don't necessarily need the address because they already have that in their own storage.
>
> **[3:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=230)** So we're also going to take out the phone number, the address, the city, and the ZIP because that information is not necessary for our sales folks to find new avenues of sales and product.
>
> **[4:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=246)** Our sales teams are separated out by state, so we are going to keep the information for state because that will help our sales folks find the customers that are in their territories.
>
> **[4:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=257)** So, with this logic updated, we can now move on to what is the information that we need to track for relating these things together?

> [!info]- Semantic Content
>
> **CLI Commands:** node (10), find (2), make (1)
> **Env Vars:** llm (3), zip (1)
> **Definitions:** is a  (2), is called (1)
> **Code Keywords:** let (1), case, (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Thinking about relations
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=0)** - [Instructor] In a graph data model, the lines connecting nodes are relationships or edges.
>
> **[0:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=6)** Edges are the explicit relations that connect one node to another.
>
> **[0:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=10)** Like Jackie has purchased... lemon-flavored olive oil from us.
>
> **[0:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=21)** One node connected to a literal value, like maybe Jackie's customer number, which is number 10, is still a triple and it still uses a relationship.
>
> **[0:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=34)** But that relationship is contained in an attribute because Customer ID is an attribute that is defining customer.
>
> **[0:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=44)** Just like nodes can be derived from your relational databases, so can relations.
>
> **[0:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=49)** In the case of Jackie and maybe the state they live in, these are probably columns next to each other in a customer table.
>
> **[0:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=58)** When modeling graph, you will need to label how a customer relates to other data they interact with, like a purchase or customer review in the case that we can show that a customer has purchased, which is the relation, a customer review, and then the review would be the other node connected to it, or in our case, the RevID, which represents the customer review.
>
> **[1:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=86)** In our example, the relationship between Jackie and their customer review or reviews, because they are a power user of our olive oil, the review and how it relates to Jackie is not explicit until we create this triple.
>
> **[1:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=103)** From there, there is no more guesswork.
>
> **[1:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=106)** Anyone using this data, including the LLM, will know exactly how Jackie feels about Two Trees because we have added that logic in explicitly through relationships.
>
> **[1:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=119)** This is one of the main reasons that graphs are used to ground LLMs.
>
> **[2:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=124)** They can retrieve explicit information without ambiguity, which makes the AI responses and retrievals more reliable and accurate.
>
> **[2:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=135)** Some relationships are easier to decipher, such as is-a, has-a, part-of, and has-part.
>
> **[2:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=144)** Other relations like customer review are labels that you create to represent how you specifically think of data relating to each other.
>
> **[2:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=154)** And you do this to bake in your business logic to support your answers, either from your sales folks or your LLM use case.
>
> **[2:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=166)** You can also mine relationships from full text.
>
> **[2:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=170)** You search logs and click through analytics or use relations derived from linked data like Wikidata.
>
> **[2:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=178)** It's also helpful to think of the types of questions you will want answered from your graph data.
>
> **[3:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=184)** This will guide you on the types of relationships you want to represent, the data you need to support them, and the answers they will support.
>
> **[3:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=195)** For us, the relationship between customer and customer review has been defined, but customers purchase products.
>
> **[3:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=204)** And from those purchases, customers have written either positive or negative experiences.
>
> **[3:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=210)** So we now need to add in the information about the positive and negative reviews as a relation.
>
> **[3:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=219)** Graphs allow you to continue to add relations as your needs evolve.
>
> **[3:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=225)** So, start out with a smaller set of relationships and extend your model later when you need to.
>
> **[3:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=231)** Or use a bootstrapping step like GraphRAG to mine out example triples and mine from that list of suggested relations.
>
> **[4:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=240)** So far, we have tackled the Customer table.
>
> **[4:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=243)** We should also select data that we need from the Purchase Order table, as well as the Product Catalog.
>
> **[4:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=252)** We need to add in examples to our design document, and this information has been updated for you in the course materials so you can follow along.
>
> **[4:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=263)** All right, so with that, let's move on to thinking about how retrieval and traversal of data helps us answer questions based on our data engineering.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), case. (1), continue (1), let (1)
> **CLI Commands:** node (3)
> **Env Vars:** llm (2)
> **Analogies:** just like (1), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Thinking about retrieval/traversal
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=0)** - [Instructor] When an AI queries a graph, it will retrieve, based on the string provided, the UID in the graph that relates to that string.
>
> **[0:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=10)** So making sure entities and relations and instances for that matter are disambiguated is a necessary first step.
>
> **[0:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=21)** Merging and deduplicating the entities will make for a cleaner and more dependable retrieval.
>
> **[0:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=28)** We have established we have UIDs and no duplication across the data.
>
> **[0:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=33)** Well, except for that one customer, we're going to handle them later.
>
> **[0:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=38)** But this is something that I would recommend you always check in those larger data sets.
>
> **[0:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=44)** Make sure that you really understand that there is either little to no duplication.
>
> **[0:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=52)** And if there is duplication, what the ramifications of that will be if both of those entities are being retrieved.
>
> **[1:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=60)** The AI will have to pick which one it thinks is right, is it going to pick correctly?
>
> **[1:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=66)** Retrieving information from your graph can be done by prompting an AI to query your graph via an endpoint.
>
> **[1:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=73)** In a graph database that has semantic search integrations natively, semantic application frameworks like Apache Jena or querying the graph itself using SPARQL for RDF based graphs.
>
> **[1:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=86)** And Cypher or openCypher for property graphs.
>
> **[1:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=91)** Knowledge graphs have two unique ways they can be queried.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=95)** One is using inference, which infers relations based on semantic rules.
>
> **[1:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=101)** For instance, a transitive relation, such as relative of, means that if Sam is related to Jess and Jess is related to Raj, then Raj and Sam are also related.
>
> **[1:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=114)** Even if that relation is not explicitly expressed, it's inferred.
>
> **[2:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=121)** The second unique way to query a graph is called walking, or traversing the graph.
>
> **[2:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=126)** This is when graph algorithms such as shortest path are used.
>
> **[2:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=130)** Where if you query for the shortest path connecting Sam and Raj, the query would retrieve Jess, since Jess is the shortest path connecting Sam to Raj in our little mini example.
>
> **[2:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=143)** There are other graph algorithms, and they are all pretty useful for doing graph analytics across networks of data.
>
> **[2:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=150)** We won't go over those in this course, but I have added resources to the exercise files where you can check some of those out.
>
> **[2:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=159)** When using your graph with AI, you can use standard information retrieval, NTT resolution, inference and graph algorithms at runtime or during offline analytics.
>
> **[2:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=172)** Now that we have a sense of triple nodes and edges, let's talk about updating them and why that's critical in the ETL phase.

> [!info]- Semantic Content
>
> **Env Vars:** uid (1), sparql (1), rdf (1), ntt (1), etl (1)
> **CLI Commands:** make (2), apache (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Analogies:** such as (2), for instance (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** opencypher (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Thinking about updates
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=0)** - [Instructor] When designing your model, you always need to think ahead to when, how, how often, and which parts of your data will need updating.
>
> **[0:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=11)** You also need to make sure all the tooling you are using will support this.
>
> **[0:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=16)** For instance, not all graph databases will allow both read and write access because it's too risky to have access that can write to your database that you do not control properly.
>
> **[0:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=31)** So read access is usually what is allowed from outside of the database.
>
> **[0:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=36)** So if you're requirements are that you need to be able to do both read and write, make sure you check into that before selecting a tool.
>
> **[0:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=45)** Graph data is updated just like any other data via a scheduled ETL, but remember, graph is a network.
>
> **[0:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=55)** If a node, relation, or triple is changed, it has a ripple effect through the graph.
>
> **[1:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=63)** So you will want to estimate the impact of changes to your graph and the underlying data before you make any large updates.
>
> **[1:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=72)** You also need to identify what changes specifically will break consumers of the graph data before you make these changes.
>
> **[1:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=83)** And if you change a node label, that won't break anything, because the graph is based on UIDs.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=89)** But if you split an address node into its individual parts, you need to determine if the old node for addresses can remain or if you need to deprecate the address node and update all the relations that used that node.
>
> **[1:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=105)** Same goes for updating relationships.
>
> **[1:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=108)** These are spread throughout the graph, so you could accidentally make a hole in your graph if the relationship is deprecated.
>
> **[1:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=115)** And holes are usually good places for hallucinations to hide.
>
> **[2:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=120)** You also could have a massive re-indexing project if you have to update every single instance that is related with that relationship.
>
> **[2:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=132)** This is why when designing your model, think about the level of granularity you need for your nodes and edges.
>
> **[2:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=141)** There are strategies, such as creating deprecated nodes or edges of a graph, where data is reloaded into the new nodes and edges and that creates a new version of the model, which needs to be documented in your design doc.
>
> **[2:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=158)** But depending on the volume of data you are working with, this still may require a lot of resources to update.
>
> **[2:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=165)** This is usually part of a delta refresh.
>
> **[2:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=169)** Another strategy is a full refresh, where the entire old model is deprecated and the new model is brought online.
>
> **[2:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=178)** The last and most common approach is a Git-like approach where the new commits are integrated as they are reviewed in the design doc and then forked in.
>
> **[3:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=189)** Each time you change your model, the data engineering process will kick off.
>
> **[3:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=194)** The area of the graph that is being updated will need a new design document, and the ETL process will need to be rerun.
>
> **[3:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=203)** The more changes you have, the more data that needs to be loaded and transformed, and that's the heavier the resources you will need to complete the task.
>
> **[3:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=214)** Anytime you load new data to your graph, you will want to run data validation, and that's making sure that the data is conforming to your data model.
>
> **[3:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=224)** You need to also run entity resolution for any new entities and check for any breaking changes so that your AI and your consumers, such as our sales folks, always know that the data can be dependable.
>
> **[4:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=241)** Knowing your update strategy, how it affects data consumers and the level of effort on ETL is critical to keep in mind when designing your model.
>
> **[4:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=251)** This leads us to another aspect that will affect your updates and data model, how data will be stored and accessed.
>
> **[4:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=260)** Let's get into that next.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), make (5), git (1)
> **Analogies:** such as (2), for instance (1), just like (1)
> **Code Keywords:** this. (1), require (1), let (1)
> **Env Vars:** etl (3)
> **Definitions:** is a  (3)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Thinking about storage
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=0)** - [Instructor] Let's dive into a few storage options.
>
> **[0:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=4)** Let's start out with the native graph storage options.
>
> **[0:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=7)** So for property graphs, we have things like Neo4j, Neptune, although Neptune can also do RDF, TinkerPop, and Memgraph, just to name a few.
>
> **[0:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=19)** We also have the RDF-based storage, such as RDFox, JanusGraph, Stardog, Metaphactory, and there's a whole slew of others.
>
> **[0:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=30)** There's also more general storage that can accommodate graphs like Spark, RDS, or Oracle.
>
> **[0:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=37)** Many graph tools come with a generic graph database under the hood for smaller graph projects, or you can connect to a more robust database if those tools are not meeting your needs.
>
> **[0:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=49)** Stardog, for instance, has a small generic database for graph data under the hood, so that's what we're going to be using for our course.
>
> **[0:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=58)** There's also now some serverless options for graphs like Kuzu that doesn't require you to have a giant graph database at all.
>
> **[1:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=67)** These are just a few options, but I provided a larger list of database options in the exercise files for you to look at later on.
>
> **[1:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=75)** Also, as a quick tip, if you have used something like Graph RAG to create a property graph or you already have a property graph, you can use something from Neo4j called neosemantics, and that's so that you can export property graph data into RDF or vice versa.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=95)** Now, depending on what kind of database you select, you will potentially need an external ETL tool such as Airflow or TensorFlow, or you can create your own data pipelines with more extensive operations for ETL, depending on your use case.
>
> **[1:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=113)** Each tool will have its own requirements such as namespace or ID creation, file format specifications, modeling options and more.
>
> **[2:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=124)** Just keep in mind that, when you are designing your model, you have to keep your tool set in mind.
>
> **[2:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=131)** It helps to have a basic model, and this can be a diagram not necessarily in a modeling tool, and what general requirements you need like we covered earlier in this course.
>
> **[2:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=142)** And this is also that you can select the right tool for the right job.
>
> **[2:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=146)** The type of data you are using, such as structured or unstructured or even event based; how it will be loaded, such as streaming and refresh or deltas; how it will be updated, delta or forked; which query language you want to use; or graph traversal and inference that you need as well as latency for your queries and other performance and system requirements are all things you need to investigate when picking your graph storage.
>
> **[2:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=177)** For our use case, we need inferencing, so we will use RDF, but it's a very small data set, so we are going to be using the in-house graph storage of Stardog.
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=187)** We also want to use AI to help us build and query our graph, so we are going to use the Stardog Voicebox AI assistant to help us.
>
> **[3:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=197)** Most graph tools now have this sort of AI feature or you could use your own AI with the graph database API or wherever you're serving up your materialized views to use AI to help build, maintain, or query your graph or ground your AI on the graph.
>
> **[3:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=216)** You also may have a data science modeling and/or ETL portal associated with a database.
>
> **[3:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=223)** In our case, we can model and do lightweight ETL within the Stardog tool.
>
> **[3:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=229)** We will explore that next in the transform stage of the ETL process.

> [!info]- Semantic Content
>
> **Env Vars:** etl (5), rdf (4), rds (1), rag (1), api (1)
> **Code Keywords:** let (2), case, (2), require (1), case. (1)
> **Analogies:** such as (5), for instance (1)
> **Cross-References:** we covered (1), earlier in (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Transform

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Data transformation
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=0)** - [Instructor] A common issue is transforming data from one model or source to another.
>
> **[0:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=6)** If your source data is using a custom model, which is pretty common, you'll need to first transition the source model to then map or align it with the new model you are creating.
>
> **[0:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=19)** You can do this by creating an ETL mapping file where the incoming source data via API or data dump is mapped to where the data should go in our new model.
>
> **[0:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=31)** And if data needs to be merged or reformatted, this is also listed in a traditional ETL mapping file to then execute when using whichever ETL tool or approach you choose or that you're already using in your data pipeline.
>
> **[0:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=48)** But many graph native tools have ETL built in for small batch updates.
>
> **[0:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=53)** So we will use that in our Stardog instance after we model the ETL in the rest of our design doc.
>
> **[1:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=61)** In our raw data, we now can address some of those limitations we identified earlier in the course.
>
> **[1:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=69)** So the first thing is we have an anonymous customer.
>
> **[1:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=73)** We know from our business rules that a customer is defined as someone who has made at least one purchase, but we don't see a purchase order for customer ID number 11.
>
> **[1:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=84)** We would want to ask the data owners, why is this customer in here?
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=89)** Is it an error or are we missing context, or are we missing information?
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=94)** We can at least verify that in this use case, this is an error and we can take this customer out.
>
> **[1:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=103)** Now we would always be using copies of our data so that we can always roll back if we made any mistakes.
>
> **[1:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=110)** We also can see in some of our other areas in the data that we have N/A.
>
> **[1:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=117)** We want to make sure that we are using null instead of N/A.
>
> **[2:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=121)** So let's go through and update that.
>
> **[2:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=126)** Let's check our other data to make sure.
>
> **[2:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=130)** Yep, there's no other N/A's, we've got them all.
>
> **[2:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=134)** The next thing that we see is potentially duplicate information in our customer data.
>
> **[2:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=142)** Graphs work on the basis of a UID being only assigned to one specific instance.
>
> **[2:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=149)** So you can see here Jackie has one ID, but she has two entries, so we need to deduplicate this.
>
> **[2:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=156)** In this case, we're going to do a merge and de-dupe.
>
> **[2:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=159)** Now this raises an interesting question.
>
> **[2:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=162)** How can we model a customer ID as our primary key if a customer can have two customer IDs?
>
> **[2:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=171)** One approach would be to use the last known address to de-duplicate this information.
>
> **[2:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=178)** So let's go ahead and look at the last known address.
>
> **[3:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=183)** So for Jackie, this is an older address so we can take this line out.
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=190)** And we can see for Nolan, this also is an older address.
>
> **[3:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=196)** Now Hunter seems to be this Hunter and this Hunter, but they have two different customer IDs.
>
> **[3:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=206)** So we need to verify which one is accurate, because here the last known address is not helpful.
>
> **[3:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=212)** Now, when we go into our purchase orders, we're going to look for those customer IDs, which is seven and eight.
>
> **[3:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=221)** We can see seven, but we don't see eight, which means that customer line is an error.
>
> **[3:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=230)** We would want to troubleshoot and understand why these errors are occurring.
>
> **[3:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=235)** But for now, we can use our business rules, that customer ID number eight is not a real customer because they did not purchase anything.
>
> **[4:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=245)** So we're going to remove that.
>
> **[4:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=248)** But this shows why using a customer ID as our primary key might be an issue.
>
> **[4:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=253)** We want only one customer ID for every order number, but we can see that a customer can order multiple things.
>
> **[4:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=265)** So to be more efficient with our data model and for the queries that we'll support, we will start to use product order number as our primary key instead.
>
> **[4:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=275)** This means we should have order number as the first column in our purchase order table.
>
> **[4:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=282)** Now, when we compare the customer data to the purchase data, we see one more customer, number nine, that does not have a purchase.
>
> **[4:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=292)** So this would be another error that we want to take out.
>
> **[4:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=299)** Our original data pool from the source data identified the vendor list as a potential data source, and eventually it may be useful to have.
>
> **[5:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=310)** But so far we have found no use for it in this use case, so we will remove it.
>
> **[5:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=318)** We also seem to have a lot of empty cells in our product table.
>
> **[5:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=325)** Again, we want to verify this is an error and that we are not in fact missing a chunk of data.
>
> **[5:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=331)** But for us, we have confirmed this is an error and we can eliminate these empty cells.
>
> **[5:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=340)** Now most of our data are integers, but we do have a few dates.
>
> **[5:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=345)** Dates have a ton of formats, but for the tool we're using today, Stardog, we need to make sure that the format is year, month, date.
>
> **[5:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=358)** So let's go in and update all of our dates to comply.
>
> **[6:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=369)** Okay, it looks like we have all of them updated.
>
> **[6:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=374)** Yes, we do.
>
> **[6:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=376)** Now we need to go in and checking our design document, take out the information that we do not need for our model.
>
> **[6:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=384)** So we're going to go ahead and do that now.
>
> **[6:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=395)** And because we've already used our last known address for de-duplication, we're going to get rid of that one as well.
>
> **[6:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=406)** Now, having made all of those updates, I've also saved and updated dataset with all of this information and logic into your course files.
>
> **[6:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=416)** We are also going to make sure that everything that we have in our design doc has been addressed.
>
> **[7:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=424)** You can find my draft design doc in the course materials as well.
>
> **[7:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=430)** Now we need to take each of our data sets and save them as individual CSV files.
>
> **[7:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=440)** We will use the naming convention of the nodes that we will eventually map them to.
>
> **[7:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=445)** So customer, product, and purchase order.
>
> **[7:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=451)** One thing to note is we already had full name in our dataset, but if we did not have the full name, for instance, we had first name and surname, we can also use AI to help clean and merge some of that data.
>
> **[7:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=470)** You can use tools like Open Refine or Talend or libraries like Spacey to make sure that that conversion happens.
>
> **[7:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=478)** Now that we have transformed some of our data, let's check our design doc to make sure that we have all of our data and then we can move forward.
>
> **[8:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=489)** Oh, we have our customer review information listed here, but we forgot to grab the information from our customer review documents and add it in as a dataset.
>
> **[8:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=501)** So let's go through how to add missing data into a dataset so that we can use it later on in our model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (3), this. (1)
> **Env Vars:** etl (5), api (1), uid (1), csv (1)
> **CLI Commands:** make (6), find (1)
> **Definitions:** is an  (6), means that (1)
> **Cross-References:** earlier in (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)

#### Missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=0)** - [Instructor] We will now need to transform our unstructured data into data we can connect to our model, so we can use our AI to query against our repository of knowledge.
>
> **[0:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=12)** Looking at the unstructured data, we can see there are four main data types.
>
> **[0:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=17)** We have customer ID, order ID, review ID, and the actual rating.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=25)** Now we can add all of these into a dataset as new columns.
>
> **[0:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=31)** We'll of course also eventually need to set up a data pipeline to source customer reviews, either in a document store, vector store or file storage like S3 for us to source the data from and then populate our graph when we move into production.
>
> **[0:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=47)** So we already have the first two as nodes, customer ID and order ID in other datasets.
>
> **[0:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=55)** But now we need to add ratings as a new node in our design document, and we will need to connect it to the event it is connected to, which is the purchase order number in our case.
>
> **[1:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=67)** But that's already in the model.
>
> **[1:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=69)** We need to have all of these in our dataset so that this information can connect to each other.
>
> **[1:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=76)** So let's go ahead and add this information into a new dataset.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=89)** Now, if we wanted to then be able to retrieve these documents or customer reviews based on the purchase order number, we would need to make sure the reviews are broken out into documents to then be retrieved, and the order number would then need to be through primary ID or key to connect the review to the customer and their rating within our model.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=112)** Another approach that we could take is we could tag the reviews themselves as documents with the themes that they represent, and we could do that for better retrieval.
>
> **[2:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=122)** And to do that, we could ask our AI to mine out those themes with a prompt like the following, to create a taxonomy of tags.
>
> **[2:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=131)** We could also use these themes to find similar reviews if we added these tags instead of just keywords.
>
> **[2:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=141)** In our case, we do not have a large dataset, and we also do not need to know the exact feedback only if it was positive or negative.
>
> **[2:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=151)** We also need to decide for our company how we would define positive or negative feedback.
>
> **[2:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=159)** In our use case, any customer rating above four stars will be considered positive.
>
> **[2:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=165)** Interestingly, if you review the AI output from earlier, the AI ignore the ratings and instead focused on sentiment analysis.
>
> **[2:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=174)** There's nothing wrong with doing that.
>
> **[2:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=175)** However, it misses the business context we have just defined.
>
> **[3:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=180)** So this is another reason pairing a knowledge graph with AI helps give the AI better context for your specific organization based on your business rules.
>
> **[3:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=191)** Now, looking back at our design document, we did have two nodes for the reviews, but the way our business defines positive and negative reviews may change.
>
> **[3:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=204)** And if we index all the reviews with either positive or negative, we would have to change that logic and do a re-indexing project later on.
>
> **[3:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=214)** That can cost time, money, and resources, and it could also produce breaking changes.
>
> **[3:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=219)** So instead, let's capture the star system so that our sales team can customize the types of reviews they retrieve based on how many stars were given.
>
> **[3:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=230)** We will add this into our Design doc as attribute for stars in our review.
>
> **[3:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=238)** We also have the review ID from the source that we just created in our table structure.
>
> **[4:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=245)** So let's add that in.
>
> **[4:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=247)** We will populate our new dataset for customer reviews.
>
> **[4:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=251)** So we can take this logic out because we have decided not to break these out into two nodes.
>
> **[4:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=259)** We also need to add in what information we grabbed with review from our unstructured data, and we need to add that as a table for the node we will create for review.
>
> **[4:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=275)** Now, we are going to keep all of the information from this table because we just created it, and this is the only information we really have outside of the unstructured text of the review itself.
>
> **[4:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=288)** So let's keep things going in the next chapter where we will finally get to go in and load all of that data that we've been modeling in our Design document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), case. (1)
> **CLI Commands:** node (2), make (1), find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Load

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Setting up our Stardog project, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=0)** - [Instructor] Now we get to the good stuff.
>
> **[0:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=2)** Since we have tested out our logic and modeled what we need in the design doc, we should have an easier time starting the project and getting things set up.
>
> **[0:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=11)** First, go to your Stardog account and log in.
>
> **[0:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=14)** Next, go to Designer, and then New.
>
> **[0:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=18)** If you want to load our course file from the course materials, you can select Import Project instead.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=25)** But for us, we're going to start from scratch.
>
> **[0:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=28)** Once we're on the new project screen, we are going to start with the AI-assisted graph creation via Voicebox.
>
> **[0:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=37)** We are going to name this our TTOOV3 because we've gone through three iterations of data transformation by this point, if you're keeping track.
>
> **[0:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=48)** And we're going to select Voicebox.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=51)** Okay, so Voicebox is an AI chat feature that is here to assist with modeling.
>
> **[0:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=59)** You don't have to use it.
>
> **[1:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=61)** You can use a blank screen and start to create your classes and relationships by hand.
>
> **[1:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=68)** But we want to see how AI can help us.
>
> **[1:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=71)** So funny enough, the very  first example that it gives is similar enough to our use case that we could probably just use this.
>
> **[1:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=81)** So let's start with this first and see what it does.
>
> **[1:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=86)** So you can see here we have Customer.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=89)** Now we need to add our attributes.
>
> **[1:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=91)** And we're going to grab these from our Design document.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=95)** So for Customer, we are going to add State, and that is a string.
>
> **[1:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=107)** FullName, which is also a string.
>
> **[1:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=113)** And the reason you're putting data types in is because this is a lightweight version of data validation when you add instance data.
>
> **[2:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=122)** Then we have our CustID, and that is an integer.
>
> **[2:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=131)** Okay, one thing to note is Stardog will make UIDs for each of our nodes and our attributes and our relations and our data that is populating in, but we want to make sure we retain our local IDs.
>
> **[2:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=147)** So that's why we're adding in customer ID, even though Stardog is going to be crafting UIDs for us.
>
> **[2:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=156)** Now, let's go ahead and see how AI can help us add the attributes for these other two nodes.
>
> **[2:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=165)** Okay, so you can see the information that has been added based on the prompt that we've been given.
>
> **[2:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=172)** So let's make sure that these are the attributes that we were expecting.
>
> **[2:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=177)** ProductID, yep.
>
> **[2:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=179)** ProductName, and Price.
>
> **[3:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=183)** And then for PurchaseOrder, we have the orderID.
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=187)** We also ask the AI to change the node label because it said Purchase, but our data is alive with PurchaseOrder.
>
> **[3:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=198)** Okay, now that we are in the swing of things, let's move on to the next video where we will populate the full graph.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), new. (1), this. (1)
> **CLI Commands:** make (3), node (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** go to (2)
> **Code Identifiers:** orderid (1)
> **Env Vars:** ttoov3 (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)

#### Setting up our Stardog project, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=0)** - [Speaker] Next, we're going to add some of the relations and we're also going to be using AI for that.
>
> **[0:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=8)** So let's verify that this is what we were expecting and we're validating this off of our design doc.
>
> **[0:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=18)** Okay, so that is correct.
>
> **[0:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=22)** Now let's add in a few more relationships.
>
> **[0:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=28)** So now we are defining that purchase orders have products inside of them.
>
> **[0:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=34)** So that looks correct.
>
> **[0:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=36)** Now, we have created this path, but one thing we're missing is our review node.
>
> **[0:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=43)** So let's go ahead and add that in with its relations.
>
> **[0:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=49)** Now, once we put voice box back in its box, I'm going to show how you can use Stardog to help automatically populate a model based on the data that you are loading.
>
> **[1:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=61)** You might not want to do this for all of your data, but it's a good example to know.
>
> **[1:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=66)** So we have to accept our changes, and then we're going to go in and we're going to grab our file for our customer reviews.
>
> **[1:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=77)** And you can see here, this is a mini-form of the ETL within the tool itself.
>
> **[1:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=84)** So we can see that the order ID is distinct, the customer ID is not, which is why we decided earlier in the course to change this.
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=94)** It is no longer our main key.
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=97)** We have our review IDs, and then we have our star system.
>
> **[1:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=102)** So everything is looking pretty good here.
>
> **[1:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=104)** Now, we could just create this as a new data source, but we're going to click into create and map, which means all of this instance data will automatically be mapped to our new node.
>
> **[1:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=119)** We are missing our review node.
>
> **[2:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=122)** So after we've committed our changes, let's go ahead and add review with all of its information, including its attributes and its relationships. (clicks loudly) Okay, so it did add the relationship that we were looking for, but it forgot about the attributes that we asked it to add.
>
> **[2:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=148)** So let's go ahead and ask one more time.
>
> **[2:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=155)** There we go.
>
> **[2:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=156)** Our review ID is now added, but it forgot stars.
>
> **[2:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=161)** So let's go ahead and just add that by hand so we can move on.
>
> **[2:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=168)** So that's going to be a decimal.
>
> **[2:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=171)** Now, it did not happen in this iteration of using voice box, but sometimes, the AI can take some liberties.
>
> **[2:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=179)** So just be cautious.
>
> **[3:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=181)** Sometimes, it will pick up on what you're asking, sometimes it doesn't or it adds additional things.
>
> **[3:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=189)** Just verify what you're seeing.
>
> **[3:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=191)** Sometimes they're great examples and suggestions, but keep them as suggestions because you always want to verify it's going to meet the needs of your use case.
>
> **[3:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=202)** Now we have the model that we've sketched in our design doc.
>
> **[3:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=205)** Let's accept our changes, and now we need to populate the model with our instances.
>
> **[3:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=211)** So that's mapping our source data or the transform data in our case, into our model.
>
> **[3:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=220)** We are on a role.
>
> **[3:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=222)** Okay, now let's add in the rest of our relations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1), for, (1), case. (1), case, (1)
> **CLI Commands:** node (3)
> **Env Vars:** etl (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### Load instances in Stardog
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=0)** - [Instructor] Okay, now we are ready to load the instance data into our model.
>
> **[0:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=5)** This is how you make the magic happen.
>
> **[0:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=8)** Go to the project resources and start to add those datasets, those individual CSV files that we created earlier in the course.
>
> **[0:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=18)** Now, you can add them all together at once, but I find that it's cleaner and easier to do them one at a time.
>
> **[0:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=26)** So we're going to start with CustomerReview.
>
> **[0:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=30)** And you're going to see the lightweight ETL here.
>
> **[0:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=33)** So you can go in and change some things in here if you would like.
>
> **[0:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=37)** It also gives you a quick rundown of how distinct everything is, how many records there are, all of that sort of thing.
>
> **[0:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=44)** And you can see here, customer ID is not totally unique and distinct.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=51)** So this is why having the order ID as our key is more efficient, and that's why we made the decision earlier in the course.
>
> **[1:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=60)** Okay, so everything looks good here.
>
> **[1:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=63)** Now, instead of creating it, which just adds it to the project, we're going to create a map because we already have a class to map it to.
>
> **[1:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=70)** So this is the CustomerReview, and we're going to map that into Review.
>
> **[1:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=75)** Okay, so we have the class that it is going to map to.
>
> **[1:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=81)** Now, we are looking at the information for the mapping.
>
> **[1:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=85)** The primary ID that we're using for CustomerReview is RevID.
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=94)** And the label is going to be the RevID.
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=97)** Now, customerReview is related to PurchaseOrder, so let's add that in.
>
> **[1:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=104)** And the ID for PurchaseOrder is the OrderID.
>
> **[1:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=109)** And if you needed to verify what that looks like, you get a preview.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=112)** You can also go into the relationship and remind yourself what it's supposed to do and what nodes it's connected to.
>
> **[2:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=122)** Now, what this is doing is it is taking the CustomerReview ID and relating it with the customerReview, and what is being reviewed is the PurchaseOrder.
>
> **[2:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=135)** And that PurchaseOrder has an ID.
>
> **[2:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=137)** Later, we're going to have other information that connects products to these PurchaseOrder IDs.
>
> **[2:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=144)** And then we just want to make sure our RevID is mapped to RevID and Stars is mapped to Stars, and those are the attributes.
>
> **[2:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=151)** So we're going to accept the changes.
>
> **[2:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=154)** Now we need to add more project resources.
>
> **[2:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=157)** So let's go and add the remainder of our data.
>
> **[2:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=163)** So this is our customer information, and we can see customer ID, full name, and state, and we have our information.
>
> **[2:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=171)** And we're going to create and map, and it's mapping to Customers.
>
> **[2:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=175)** And Stardog already knew that, which is why it's populated like that.
>
> **[2:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=179)** So now we're going to add class or the node that we are mapping our Customer node to.
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=187)** So CustID is the primary identifier.
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=190)** And we want the label to be a full name because that's easier to read.
>
> **[3:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=195)** Now, you'll notice that we're not going to fill in this relationship, and that's not because we don't want this information to be part of our model, it's that the data source that we just added does not have the purchase IDs part of the data.
>
> **[3:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=210)** This is just the Customer table.
>
> **[3:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=212)** There were no order IDs in this dataset, so we'll get that information from a different table.
>
> **[3:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=218)** Now, let's verify. State is string, FullName is string, and the CustID is an integer.
>
> **[3:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=225)** All of that is correct, so let's accept those changes.
>
> **[3:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=229)** Now, we have customers and those customers make reviews, but we don't have anything connecting them in our model.
>
> **[3:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=237)** So, let's rearrange things so that they're a little easier to read.
>
> **[4:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=243)** We need to connect Customer and Review.
>
> **[4:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=245)** So let's go ahead and do that.
>
> **[4:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=248)** We can do it by adding a relationship this way, or we can go in and add the relationship here.
>
> **[4:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=256)** And we're going to add an authorOf.
>
> **[4:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=260)** And that relation is going to be targeted to Review.
>
> **[4:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=266)** So it's going to be an outbound.
>
> **[4:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=270)** You can see it doesn't really go anywhere, but that's because we need to drag it over to Review.
>
> **[4:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=277)** We could have also asked our AI assistant to help us with that.
>
> **[4:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=281)** Now that we have this relationship established, we can start to put some mappings in from that.
>
> **[4:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=286)** So let's go back to our mapping and we can look at Customer.
>
> **[4:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=289)** And you can see now we have this relationship that we can use.
>
> **[4:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=293)** So we're going to say it's connected to Review, and we're going to be populating this on Full Name.
>
> **[4:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=299)** So, the review is authored by a specific customer name.
>
> **[5:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=308)** Now let's move on to our next file, which is for products.
>
> **[5:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=315)** Again, we just want to verify everything is looking good here.
>
> **[5:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=318)** All of our information is here.
>
> **[5:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=320)** Okay. And let's create and map.
>
> **[5:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=323)** And we are going to be mapping this to Product.
>
> **[5:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=327)** So here our product ID from the table is what our primary identifier is going to be, but we want to write that out as the ProductName.
>
> **[5:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=335)** So this is the product that is going to be defined by the product order having a product associated with it.
>
> **[5:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=344)** So we're going to define that elsewhere.
>
> **[5:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=346)** We want to make sure our Price, it's not a string, so we want to go in and update that to be a decimal.
>
> **[5:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=358)** Our ProductID is an integer.
>
> **[6:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=362)** And our ProductName is a string.
>
> **[6:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=365)** So those all look good.
>
> **[6:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=368)** So we have one more piece of information to add and that is going to be coming from our purchase orders.
>
> **[6:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=379)** Okay. Again, we can see that our information is looking good.
>
> **[6:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=384)** And we're going to create and map that to our PurchaseOrder.
>
> **[6:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=389)** Now, you can map multiple nodes to different datasets when you need to, but for learning purposes, we've made it simplistic and straightforward.
>
> **[6:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=400)** So, for PurchaseOrder, our order number is going to be our primary.
>
> **[6:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=406)** It's also going to be our label.
>
> **[6:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=408)** For customerReview, we're going to leave that blank because the PurchaseOrder dataset doesn't have this information.
>
> **[6:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=415)** Our hasProduct will be pointed at Product and ProductID.
>
> **[7:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=423)** And Purchased will be pointed at Customer and customer number.
>
> **[7:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=430)** And our orderID is an integer.
>
> **[7:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=432)** So let's go ahead and accept that.
>
> **[7:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=436)** Okay. This is looking a little complicated.
>
> **[7:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=441)** It's not, it's actually a very simple and straightforward model, but let's just do a quick verification.
>
> **[7:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=448)** So our customer reviews are being mapped to Review.
>
> **[7:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=453)** Our customers are authors of reviews.
>
> **[7:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=456)** Our customers are purchasing things through our PurchaseOrder.
>
> **[7:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=459)** And those purchase orders our associated with a product.
>
> **[7:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=464)** Now, we do not have authorOf in our design document, so we will want to make sure that we add that in.
>
> **[7:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=472)** Now, the next step is we need to publish our data so that this information will be written into the underlying graph database and search index that is part of Stardog.
>
> **[8:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=483)** And then it will also populate the explorer data visualization and query builder, which we will look into next.
>
> **[8:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=491)** Let's create our TTOOv3 as our database.
>
> **[8:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=500)** Here is where you could update your IRIs if you would like to.
>
> **[8:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=504)** We're just going to leave it as is.
>
> **[8:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=507)** We're going to create a new model.
>
> **[8:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=508)** And then this is where you can use some of the information we talked about earlier on how you want to update your graph.
>
> **[8:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=517)** We're going to do Create new because this is a brand new model.
>
> **[8:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=521)** And let's publish.
>
> **[8:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=523)** And you can see here our product is not a valid data type.
>
> **[8:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=528)** Let's go find out what happened with product.
>
> **[8:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=533)** ProductName is a string.
>
> **[8:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=535)** ProductID is an integer.
>
> **[8:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=539)** But our ProductID has letters and numbers, that's the problem.
>
> **[9:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=543)** So let's go in and update this to a string.
>
> **[9:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=550)** Okay. Now let's see if we can publish this time.
>
> **[9:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=555)** Okay, database is correct.
>
> **[9:20](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=560)** It's going to replace the existing model because some of our information wrote in.
>
> **[9:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=564)** And you can see here, these are the ones being replaced.
>
> **[9:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=570)** Hooray!
>
> **[9:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=571)** And every time we make changes, you have the option of downloading the ZIP file, which you should do because that is one way to do your versioning, is to have your backups.
>
> **[9:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=581)** Or you can put these into your Git repo.
>
> **[9:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=583)** So, from here, we're going to jump into the next stage of exploring our data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), type. (1)
> **CLI Commands:** make (6), find (2), node (2), git (1)
> **Code Identifiers:** customerreview (3), authorof (2), hasproduct (1), orderid (1)
> **Definitions:** is an  (4), is a  (3)
> **Cross-References:** earlier in (2), go back to (1), we talked about (1)
> **Env Vars:** csv (1), etl (1), zip (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** zip file (1)

#### Test the load
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=0)** - [Instructor] Now that we have loaded data into our model, we need to review the model and the data to make sure the model we originally created still meets our needs.
>
> **[0:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=9)** We can see that model in Explorer.
>
> **[0:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=11)** So let's go to Explorer, and you're going to pick the database that we were just creating, which is V3, and now it's populated.
>
> **[0:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=19)** So first, you can just visualize it by hitting Visualize, and then you can see everything in your graph.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=25)** But we want to make sure that the information is populating the model correctly.
>
> **[0:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=30)** So, let's start out by doing a search on Texas.
>
> **[0:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=36)** Great, so it retrieved three customers that had something to do with Texas.
>
> **[0:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=42)** So let's look at the members and look at their details.
>
> **[0:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=48)** Yep.
>
> **[0:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=49)** They're from Texas, Texas, Texas.
>
> **[0:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=57)** You always want to verify a sample of your data to make sure that your extract, transform, and load process went correctly.
>
> **[1:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=67)** Now, let's pop around to see if the rest of our graph has populated the way we expect.
>
> **[1:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=74)** We want to make sure that the flow of data is accurate.
>
> **[1:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=77)** So, let's start out with a search for order number three.
>
> **[1:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=84)** So you can see purchase order is what's showing up, so let's focus on that.
>
> **[1:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=90)** Let's expand by showing all the relationships to check the flow.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=95)** Okay, so we can see that order number three is a type of purchase order, so that's the entity type.
>
> **[1:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=103)** We can see that order number three has a product inside of it, which is the olive oil, lemon-flavored, and we can see which of our customers has made the purchase of the lemon-flavored olive oil through their purchase number three.
>
> **[2:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=120)** So this is the correct flow.
>
> **[2:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=123)** Let's make sure some of the other data is populating correctly.
>
> **[2:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=127)** And you can see here that the price of our lemon-flavored olive oil, we can see that this is the ID.
>
> **[2:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=135)** We can see that it is product type that is all accurate.
>
> **[2:23](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=143)** We can also see when we populate Review again that there is a review associated with this purchase order.
>
> **[2:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=152)** So, let's look at those details.
>
> **[2:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=154)** So, looking at these details, we can see that based on the Stars system, Hunter thought that our olive oil that is flavored with lemon had a 4.5 review, and that's an overall score.
>
> **[2:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=167)** We don't know, it's just about that product.
>
> **[2:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=170)** That's something that we could further refine our model to be able to determine.
>
> **[2:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=174)** Or since the Stars system is such a critical aspect of what we're doing, we could break this out as another node that we can then query across.
>
> **[3:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=182)** But for now, this is looking like our model and its flow is accurate.
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=187)** So this helps us make sure that everything in our design document and the use cases that it is going to support are going to be met.
>
> **[3:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=195)** Now, let's test out whether our sales team can query this for their work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), type. (1)
> **CLI Commands:** make (6), node (1)
> **Definitions:** is a  (2)
> **Versions:** 4.5 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Test the query
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=0)** - [Instructor] Okay, so to get started, we're going to go to Explorer, and then we need to open up the database that we just loaded.
>
> **[0:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=9)** Okay, so now we can get started.
>
> **[0:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=12)** So now we're going to test and run some queries to make sure that our sales team will not be left in the dust.
>
> **[0:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=19)** So just like before, we're already in our database, we're going to look for everything Texas.
>
> **[0:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=26)** Okay, we're going to get our same three customers, and we've already checked these from the previous video, so we're not going to do that here.
>
> **[0:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=32)** But what we can do is expand, and we're going to look at all the relationships.
>
> **[0:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=41)** So this is looking at all the information that we have, and we'll just move some things around so it's easier to see.
>
> **[0:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=48)** We are now looking at each of the three customers that are from Texas.
>
> **[0:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=53)** We can see what they have purchased.
>
> **[0:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=56)** We can also see when they have authored a review.
>
> **[1:02](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=62)** So if we wanted to go in and find out what the three people from Texas have purchased, we would just look at the product here is garlic, so that's the garlic flavored, and this was a review based on the Lemon.
>
> **[1:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=85)** And looks like Brooke actually did too.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=89)** Oh, Brooke must be really a big fan of our Olive Oil.
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=93)** So let's see what Brooke has been up to, Lemon.
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=97)** Lemon seems to be popular, and Basil.
>
> **[1:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=101)** Okay, so now with a few clicks, we have been able to pop around into the graph and understand what customers from Texas have been purchasing.
>
> **[1:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=112)** But our sales team wants to know what is popular or what has a high rating.
>
> **[1:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=118)** So while we could explore the graph a little bit more, that's not something that our sales folks maybe want to do on an everyday basis.
>
> **[2:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=126)** So instead, we're going to build a query.
>
> **[2:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=130)** So what we first want to do is where are we going to start?
>
> **[2:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=133)** So we are looking for, remember, our sales folks are based out of states for their regions, so we're going to start with an attribute of state.
>
> **[2:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=146)** We're going to say that it equals Texas.
>
> **[2:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=149)** So now we're going to look for all customers that are from the state of Texas.
>
> **[2:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=155)** Now we need to do this customer has purchased, and we know what they've purchased because of the purchase order.
>
> **[2:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=166)** That purchase order needs to have a relationship of customer review so that we can get at the review information.
>
> **[2:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=174)** And then that review, we're going to be looking at the stars, and we're going to say greater than or equal to.
>
> **[3:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=183)** And remember our business rule, and this is where those business semantics comes in that we've baked into our model, is anything over 4 stars is considered a positive review.
>
> **[3:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=195)** So if we wanted to enable our sales team to be able to do this query on a regular basis without having to construct a query themselves, this is how we would start to do that.
>
> **[3:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=206)** So we can see here our results are Brooke and Hunter are the two.
>
> **[3:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=213)** Remember, we had three to start out with, so the other customer must have had a review that was less than 4.
>
> **[3:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=221)** So this is great.
>
> **[3:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=222)** We have run that query, but again, our sales team is not going to do that all the time.
>
> **[3:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=227)** So let's go back, and let's save this query.
>
> **[3:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=232)** So that's the query name.
>
> **[3:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=233)** We would want a description.
>
> **[3:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=236)** All right, so adding in our description, we can then say we've already run it, so we don't need to.
>
> **[4:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=241)** So now what this enables us to do is anytime someone wants to come in and just run this query, they don't need to know anything about the graph.
>
> **[4:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=251)** They can do that and get answers, like we just saw.
>
> **[4:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=254)** Once we have this as our saved query, we can go in, and we can go in and add this as a Voicebox Prompt.
>
> **[4:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=262)** So this is a form of fine-tuning, where you can get the AI that is behind the scenes of Explorer to understand more about the questions and queries that your end users might be submitting.
>
> **[4:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=276)** So here we can say.
>
> **[4:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=280)** Okay, so if we wanted to fine-tune on good customer reviews from Texas, Texas reviews that are positive, Okay, now, if we wanted to, we could add this as a Spotlight Question.
>
> **[4:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=298)** We'll do that for something later.
>
> **[5:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=300)** So I'm not going to do that right now.
>
> **[5:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=301)** So let's go ahead and save.
>
> **[5:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=304)** Now, let's go in and run this one more time and make sure that we can verify the information.
>
> **[5:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=310)** So customer review, 4.5.
>
> **[5:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=315)** Yep, that meets our business criteria.
>
> **[5:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=318)** And good old Brooke really likes our stuff.
>
> **[5:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=322)** Wow, 5 stars, okay, and 5 stars.
>
> **[5:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=329)** Wow, two 5 stars.
>
> **[5:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=330)** Okay, so this is meeting our needs.
>
> **[5:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=333)** And you can also break this out like this if it's easier to see, or you can download it if there's something else you want to do with this information.
>
> **[5:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=344)** Now, let's say we wanted to see all the bad reviews, not just from Texas, but from everywhere.
>
> **[5:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=350)** So let's go back in and build a query for that.
>
> **[5:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=357)** Now we're not looking at any specific customers, so instead, we're just going to look at Customer, Purchased, and then they have the purchase order, and then PurchaseOrder, customerReview, Review.
>
> **[6:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=376)** We have our review, and we're going to look at the stars, and we're going to look at anything less than 4, because, again, that's our business value.
>
> **[6:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=388)** Wow, that's actually not that many.
>
> **[6:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=390)** We have two.
>
> **[6:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=391)** Okay, let's go and verify.
>
> **[6:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=393)** Sydney really doesn't like our stuff.
>
> **[6:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=396)** Okay, Sydney gave us mediocre, 3.
>
> **[6:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=399)** Okay, and who else do we have?
>
> **[6:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=402)** Nolan.
>
> **[6:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=404)** Ooh, Nolan really didn't like us, number one.
>
> **[6:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=407)** So as a sales crew, we could then go in and investigate not just these reviews, which honestly you could add that to the model too so that you have everything in one place, or you could start to really investigate everything about their visit, who was there, who was on staff, what were the weather conditions, all of these different things, so you get a full, you know, customer 360 or a full view of what that customer is experiencing to give that type of review.
>
> **[7:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=439)** So this is something that we would probably want our sales team to be able to access.
>
> **[7:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=444)** And so let's go back to our Query Builder.
>
> **[7:27](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=447)** Let's save this as Negative-Reviews,
>
> **[7:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=456)** and we're going to add that to Voicebox.
>
> **[7:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=458)** And what poor reviews do we have?
>
> **[7:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=462)** Now, let's say that we want to add this as a Spotlight Question.
>
> **[7:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=468)** So let's add a new question, so we can make it a little nicer to see.
>
> **[7:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=474)** We're going to call these Business Opportunities if I spelled Opportunities correctly.
>
> **[8:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=480)** So we're going to call this Business Opportunities, and we're going to make that a Spotlight Question.
>
> **[8:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=485)** We're going to Save.
>
> **[8:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=487)** Now, what we have just done is we have added this query to the main Voicebox area on Stardog.
>
> **[8:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=496)** Okay, so now we're going to go in to see how our semantic search will pick up on the queries that we just created.
>
> **[8:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=504)** So we're going to go to Voicebox, and you can see here is our saved query that we have created as a Voicebox-specific query.
>
> **[8:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=514)** So we're going to go ahead and run, and honestly, you could just ask questions of your model at this point, but we're demonstrating how you can do things that are repeatable.
>
> **[8:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=524)** And oh, (laughs) so we do have the right customers, but do you see what the AI just did?
>
> **[8:52](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=532)** It's confusing the review number, which is the rev ID, with the actual review.
>
> **[9:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=540)** So you're seeing purchase of 2, right?
>
> **[9:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=543)** So that's the purchase number, and then a review of 5.
>
> **[9:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=548)** So you know, technically it is review ID 5, but if we go into the data, you can see what we did in the model is accurate.
>
> **[9:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=561)** It's just the AI didn't totally understand it.
>
> **[9:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=565)** So you have a few options with this.
>
> **[9:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=568)** You can either go in and break stars out as a separate node and then have that relate to the review.
>
> **[9:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=578)** And honestly, you might want to do that because we are using the stars so much in our query logic.
>
> **[9:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=585)** Or you could start to do more refinement on the AI.
>
> **[9:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=588)** You kind of have to decide what is going to be worth your time, or you could just use a different AI and connect your data model from Stardog to that AI instead, and then just fine tune it that way.
>
> **[9:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=599)** The other things you're going to see here is you can click into any of these and find all your information, about the information that we had in our graph, and you can also see the query, so you can test the logic and make sure that it is as you expected.
>
> **[10:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=619)** Okay, so that is how you would set up AI querying the graph directly to get answers.
>
> **[10:28](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=628)** But you can also see how the AI still has some drawbacks, but that's where you can make sure your model is still accurate, and you can either fine-tune your model or the AI to get the exact thing that you're looking for.
>
> **[10:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=640)** Even though this is still technically correct, it's just a little misleading on how it's being phrased.
>
> **[10:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=647)** All right, so now that we have this, we're going to move into how do you use triples outside of Stardog with your AI?

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), for, (1), this. (1), for. (1), this, (1)
> **CLI Commands:** make (6), find (2), node (1)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** customerreview (1)
> **Versions:** 4.5 (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)


### 6. Using the Knowledge Graph with AI

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=0)** - [Narrator] In this chapter, we'll explore how to use the Knowledge Graph with AI.
>
> **[0:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=5)** To start, most graph tooling can slot into existing data architectures and these often include ETL tools, which can be repurposed to load into the graph storage that you select.
>
> **[0:17](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=17)** If you are using a graph database that also has ETL, that ETL will load in from your existing data storage.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=25)** Making sure your data is as complete and as up to date as possible is critical for high quality and trustworthy answers that you can depend on.
>
> **[0:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=34)** This is why doing regular gap analysis and assessing your user queries is important to make sure the model and the data are still supporting your needs.
>
> **[0:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=45)** Your semantic data can be used to power things like recommendation systems or chat bots, can be used for grounding your AI via Rag, or it can be used traditionally for data analytics and information retrieval.
>
> **[1:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=60)** In those cases, the AI would call your graph with your query it was given.
>
> **[1:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=65)** It can perform a fuzzy search of the entities it picks up on from the query or you can have a pre-processing step where the entities in the query are first resolved to a specific UID in your graph and that helps you ensure the correct context is retrieved.
>
> **[1:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=81)** Once the entity is found in the graph, all the triples associated with it can then be ranked for relevance based on the context from the query either from your native search engine and/or the AI you were using can then re-rank the entities and the information associated with them for the query context.
>
> **[1:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=101)** And then, the triples that are the most relevant are searched back up to the AI for grounding or answering questions.
>
> **[1:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=108)** When using AI to access and investigate data, the AI can retrieve from structured and unstructured data.
>
> **[1:55](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=115)** So, both can be assessed.
>
> **[1:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=118)** But you will need to make sure that AI can consult your graph data in the way you are expecting.
>
> **[2:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=124)** Now, let's dig into that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** etl (3), uid (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Query options
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=0)** - [Instructor] As we've stated previously, when it comes to AI, semantic context is what supports a precise and accurate AI application.
>
> **[0:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=9)** But AI can also be used to help query your graph, especially when the graph is being used by other applications that are AI-enabled, like search, recommendations and analytics.
>
> **[0:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=21)** Let's show this.
>
> **[0:22](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=22)** Most LLMs know the graph query languages, so you can ask for a SPARQL or a Cypher query for all customers from Texas with reviews of four stars or higher, and the AI can then construct the query that you can use.
>
> **[0:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=38)** This can be a canned prompt that connects to a call to the graph API, or you can set it up so that the AI will call the API with that query when a salesperson needs the information for whichever AI chat experience or analytics experience that they are using.
>
> **[0:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=58)** This can be a canned prompt connected to a call that calls the API for your graph.
>
> **[1:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=65)** Or you can have the AI call the API with the query when sales or the product managers or whoever needs to use this information in whatever AI experience they are using, like chat or analytics.
>
> **[1:21](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=81)** In both examples, you can see the importance of having a known schema that the AI can interpret.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=89)** It is also helpful to fine-tune your AI on your model structure and give example queries so it has a better understanding of your experience.
>
> **[1:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=99)** And we've seen that from our previous example with Stardog's Voicebox.
>
> **[1:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=105)** For us, we have a very thin graph.
>
> **[1:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=108)** But on a fully formed graph with lots of detail about customers, their purchases and their reviews, this AI-driven query approach will give our sales team plenty of information to start brainstorming ways to improve customer experience.
>
> **[2:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=125)** But queries are not the only place where graph and AI meet.
>
> **[2:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=128)** Let's go into using graph data in your AI for better AI responses next.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), sparql (1)
> **Code Keywords:** let (2), this. (1)
> **Speakers:** - [instructor] (1)

#### Using a knowledge graph with AI
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=0)** - [Instructor] Referring back to our diagram for rag, let's look at some example prompts where the retrieved triples are used for grounding.
>
> **[0:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=7)** First, we're going to go into Stardog and we're going to download a database of triples.
>
> **[0:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=13)** So for you, I have already put that into your course materials.
>
> **[0:19](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=19)** Going to go into Stardog Studio and we're going to grab our database and we're going to export all.
>
> **[0:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=32)** And I like RDF best, but you can download it in anything that you would like.
>
> **[0:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=39)** Okay, so looking at the information that we have, let's take a sample of one of the questions that we would like our chat bot to answer.
>
> **[0:51](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=51)** We are going to be looking at has Jackie purchased lemon flavored olive oil from us?
>
> **[0:57](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=57)** When we open our triple file, we're going to search for a triple that is talking about Jackie.
>
> **[1:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=63)** Now this is something that is stored about Jackie.
>
> **[1:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=69)** This is all of the metadata about Jackie.
>
> **[1:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=72)** These are all statements made about Jackie.
>
> **[1:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=75)** This is her preferred label or her full name.
>
> **[1:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=78)** We have which state she's from and which ID she has in our external systems to Stardog.
>
> **[1:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=86)** Now we can see that Jackie has made a few purchases with us.
>
> **[1:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=90)** So if we look for purchase order number one, we can find out what is in purchase number one.
>
> **[1:40](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=100)** And you can see here that it was captured in a review and we can see this is the product that this order contained.
>
> **[1:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=113)** And now let's look for a statement about this product.
>
> **[1:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=118)** Wow, this is a popular product.
>
> **[1:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=119)** It's showing up in a lot of places, but you can see here these are all purchase orders.
>
> **[2:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=124)** So, we don't need a purchase order because that's not the context we asked.
>
> **[2:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=128)** We asked about Jackie and her purchases.
>
> **[2:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=132)** So here we can see that this is the product information.
>
> **[2:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=138)** So we can see that this product is actually our lemon flavored olive oil.
>
> **[2:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=144)** We can see how much it costs.
>
> **[2:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=146)** We can verify that this is really the product ID and then we can see the product name.
>
> **[2:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=151)** So by going through each of these, we are doing one hop out from Jackie.
>
> **[2:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=158)** So when we go from Jackie to her purchase order, that's one hop.
>
> **[2:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=163)** If we go from the purchase order to the product that it contained, that's two hops.
>
> **[2:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=169)** And the third hop is when you look at what the name of that product is.
>
> **[2:54](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=174)** But that's not really a hop because that's an attribute.
>
> **[2:56](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=176)** So we're really only looking at two hops out.
>
> **[2:59](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=179)** Hops are when you are traversing the graph.
>
> **[3:03](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=183)** Now you notice when we were searching for this product number, this product showed up in a lot of different contexts.
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=190)** So without having a UID, our AI would maybe get confused as to what information we're really looking for, and it would be a lot more difficult to do analytics because this information would not be readily contained with a specific UID, which is the other benefit of using semantic knowledge graphs.
>
> **[3:30](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=210)** This process of finding an entity and following its graph traversals, to retrieve the triples associated with Jackie and her purchase of lemon olive oil is how an AI would query and walk the graph.
>
> **[3:44](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=224)** Now let's look at the triples that we were just walking to get to this step.
>
> **[3:50](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=230)** You can see here that I have highlighted each of the steps that we took to get to the next round of statements, describing the context that we need to be able to have a high confident answer from our AI using these triples.
>
> **[4:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=246)** But we don't need all the graph traversal information to ground our AI.
>
> **[4:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=252)** So let's look at a prompt to clean that up.
>
> **[4:16](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=256)** The reason we want to clean this up is not only do we not need all of that additional context, we've already retrieved on the context that we don't need it from this point forward.
>
> **[4:26](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=266)** It's also expensive to have additional tokens that you maybe don't need in the AI prompt.
>
> **[4:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=271)** So that's the other reason we're going to take those out.
>
> **[4:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=274)** So here we are just prompting our AI to convert the triples into a JSON like format, so we can use that in our grounding.
>
> **[4:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=285)** If our AI had access to all customer data and be cautious here, you want to make sure you are using a local LLM or your LLM license and guardrails, protect personal information and the other things you need to be protective of when you are using AI.
>
> **[5:05](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=305)** But if your AI did have access to the customer data, it should be allowed to have, it might not get the context or it might get confused or pick the wrong Jackie if we have many of them in our system.
>
> **[5:18](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=318)** This is why having our business context baked into our AI through semantics and being able to walk the graph for even more context building leads to more accurate context aware and trustworthy AI responses.
>
> **[5:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=333)** So you can see here, this is how we would ground our response off of all of that important information to have the highest quality answer, that yes, Jackie did indeed purchase lemon flavored olive oil from us.
>
> **[5:48](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=348)** With this approach, our sales teams now have a few different options to effectively use AI to identify untapped opportunities for customer satisfaction and critically assess what could be done to better move forward with new product offerings, all without having to worry about complicated data or how to use the AI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for, (1)
> **Env Vars:** uid (2), llm (2), rdf (1), json (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continuing your learning journey
> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=0)** - And that's a wrap.
>
> **[0:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=1)** You've just unlocked the core skills to kick off your own knowledge data engineering journey, and start building knowledge graphs that power smarter, more context-aware AI.
>
> **[0:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=11)** Now the real fun begins.
>
> **[0:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=13)** What will you build next?
>
> **[0:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=15)** Maybe you'll enhance your model with AI-extracted keywords, or create semantic queries that help you and your team surface insights they never thought possible.
>
> **[0:25](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=25)** Imagine your sales team instantly finding feedback that matters most, because you design the system to do it.
>
> **[0:31](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=31)** Either way, you now have the skills and knowledge to make it real.
>
> **[0:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=36)** If you want to follow along with me and AI, check me out on YouTube or connect with me on LinkedIn.
>
> **[0:41](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=41)** Also, make sure to explore my other LinkedIn learning courses.
>
> **[0:45](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=45)** Lastly, remember to dive into the Exercise Files as you continue your learning journey for more inspiration.
>
> **[0:53](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=53)** Okay, so with that, good luck, have fun, and I'll catch you next time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1), remember to (1)
> **Code Keywords:** continue (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** imagine (1)
> **Speakers:** - and (1)


## Instructor

- [[Ashleigh Faith]]

## Resources

- Exercise files available

## Skills Covered

- Data Engineering
- Generative AI
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Knowledge Graphs

## Path Context

### In [[Working with Data- Engineering, Integration, and MLOps for AI]]
← [[Data Versioning, Lineage, and Quality Monitoring for AI]] | **3 of 5** | [[Semantic Search and Information Retrieval using GenAI]] →

## Appears In

- [[Working with Data- Engineering, Integration, and MLOps for AI]]

## Related Courses

_Courses sharing skills:_

- [[GraphRAG Essential Training]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG), Knowledge Graphs
- [[RAG and Fine-Tuning Explained]] — Generative AI, Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)