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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Knowledge%20Graph%20Data%20Engineering%20for%20Generative%20AI%20Use%20Cases.md)

![Knowledge Graph Data Engineering for Generative AI Use Cases](https://media.licdn.com/dms/image/v2/D4E0DAQE8e7XXQFryWQ/learning-public-crop_675_1200/B4EZbqbWRDHkAY-/0/1747689760566?e=2147483647&amp;v=beta&amp;t=bzdG_sDdAhC9TrpjXlY5fUPEP1lYnEb6VzMLqd4AKvE)

# Knowledge Graph Data Engineering for Generative AI Use Cases

> This advanced course bridges the gap between traditional data engineering and modern AI applications through knowledge graphs. Designed for data scientists and engineers, instructor Ashleigh Faith provides an overview of a practical framework for implementing neurosymbolic AI solutions. Learn how to assess data requirements, build robust knowledge graphs, implement efficient ETL processes, and han

> [LinkedIn Learning](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases) | 1h 50m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The power of knowledge graphs in data engineering](#the-power-of-knowledge-graphs-in-data-engineering)
  - [What you need to know for the course](#what-you-need-to-know-for-the-course)
- [**1. Setup: Data Engineering Foundations**](#1-setup-data-engineering-foundations) (4 videos)
  - [What is data engineering?](#what-is-data-engineering)
  - [Aspects of data engineering](#aspects-of-data-engineering)
  - [Importance of data engineering for semantic AI](#importance-of-data-engineering-for-semantic-ai)
  - [Use case: Two Trees Olive Oil](#use-case-two-trees-olive-oil)
- [**2. Extraction**](#2-extraction) (4 videos)
  - [What data do you need?](#what-data-do-you-need)
  - [Where is the data?](#where-is-the-data)
  - [What state is the data in?](#what-state-is-the-data-in)
  - [Translating relational to graph data](#translating-relational-to-graph-data)
- [**3. Data Modeling**](#3-data-modeling) (7 videos)
  - [Creating your design document](#creating-your-design-document)
  - [Options for data modeling](#options-for-data-modeling)
  - [Thinking about nodes](#thinking-about-nodes)
  - [Thinking about relations](#thinking-about-relations)
  - [Thinking about retrieval/traversal](#thinking-about-retrievaltraversal)
  - [Thinking about updates](#thinking-about-updates)
  - [Thinking about storage](#thinking-about-storage)
- [**4. Transform**](#4-transform) (2 videos)
  - [Data transformation](#data-transformation)
  - [Missing data](#missing-data)
- [**5. Load**](#5-load) (5 videos)
  - [Setting up our Stardog project, part 1](#setting-up-our-stardog-project-part-1)
  - [Setting up our Stardog project, part 2](#setting-up-our-stardog-project-part-2)
  - [Load instances in Stardog](#load-instances-in-stardog)
  - [Test the load](#test-the-load)
  - [Test the query](#test-the-query)
- [**6. Using the Knowledge Graph with AI**](#6-using-the-knowledge-graph-with-ai) (3 videos)
  - [Architecture](#architecture)
  - [Query options](#query-options)
  - [Using a knowledge graph with AI](#using-a-knowledge-graph-with-ai)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your learning journey](#continuing-your-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of knowledge graphs in data engineering](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/the-power-of-knowledge-graphs-in-data-engineering?u=76281980&t=0)** - LLMs and [[Knowledge Graphs]] together enable more accurate context-aware AI. But if you're new to knowledge graphs, or KGs, translating relational or [[Unstructured Data]] into these network models can be a bit overwhelming. This course is designed for beginners, offering no-code options so anyone can dive in. We'll walk through the full knowledge engineering process from preparing and modeling your data with and without AI to building semantic queries that return business-relevant answers. I'm Dr. Ashleigh Faith, and you might know me from my YouTube channel where I teach on these topics. With over 15 years in corporate roles focusing on semantics, knowledge graph and search, I manage knowledge [[Data Engineering]] teams with some of the world's largest and most specialized LLM and KG systems. Whether you're curious about knowledge data engineering or want to see how AI can help design your KGs, this course is the perfect place to start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (2), [[Data Engineering]] (2), [[Unstructured Data]] (1)
> **Env Vars:** llm (1)
> **Speakers:** - llms (1)

#### [What you need to know for the course](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=0)** - In this course, we are going to be working with a small sample set from a fictional olive oil company, called Two Trees Olive Oil. Our company sells and manufactures olive oil, and also gives tours of the olive oil factory and grounds. This data is primarily focused on customer data and customer behavior, like product purchases and tours. While there are many different approaches to [[Data Engineering]] in the graph and AI space, we'll focus on doing the extract, transform, and load, or ETL functionality, into a graph database. Most graph [[Databases]] have data engineering and ETL features, but you can also use your existing ETL tools or use programmatic approaches, like [[Apache Spark]], Stream Sets, or your typical ETL [[Python (Programming Language)|Python]] packages. I wanted to make this course as low code as possible, so more folks get exposure to how graph and data engineering work together. We will walk through the design considerations and decision making, and we will use a tool called Star Dog in parts of this course to load data into our data model. I chose this tool because it has an open tier. You can play around with it as you learn throughout the course. And it has some built-in AI to show how AI is used in graph data engineering. For now, I recommend signing up for a demo account. There are many similar tools that function the same way as far as ETL and graph modeling is concerned, so don't worry as much about which tool to choose right now. We will go over other tools, and how to select
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-you-need-to-know-for-the-course?u=76281980&t=94)** which is right for you later in the course. Lastly, there will be exercise files for example data models and data sets, and more course materials that will guide you through the [[Representational State Transfer (REST)|rest]] of this course. So now that we have our logistics, let's dive into what is data engineering in the semantic AI space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (5), [[Databases]] (1), [[Apache Spark]] (1), [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** etl (5)
> **CLI Commands:** apache (1), python (1), make (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)


### 1. Setup: Data Engineering Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data engineering?](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=0)** - [Instructor] Let's kick this off with what is [[Data Engineering]]. Data engineering is when you are taking information from a raw data source, creating a roadmap or blueprint for how the data should load into your systems, and what in this data needs cleaning, interpreting, merging, or other value adds to make it useful for your needs. This process includes data selection, the ETL or extract, transform, and load operation, determining how the data should flow through pipelines, designing architecture and governance to support those needs, and management of the data and the pipelines. The typical data model used for capturing semantic data is called a knowledge graph. A knowledge graph captures information as triples, where entities are related to one another in explicitly labeled ways. That's where a lot of the semantics resides. There are two types of [[Knowledge Graphs]], property graphs and resource description framework or RDF-based graphs. In this course, we will use an RDF approach because we will use inferencing across the graph to help our AI query be more accurate and contextually relevant to our business. Now, when working in the knowledge graph space, a data engineer is often called a knowledge engineer, but they can also go by a few other names like ontologist, linguistic, or natural language understanding engineer and more. These semantically focused roles expand on data engineering with semantic engineering,
>
> **[1:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=96)** or how to capture both that implicit and explicit knowledge for your organization, how you need it to work with your use case, and understanding how AI, semantics, and the use case will play well with each other for your business needs. This knowledge capture and decision making is incredibly important, especially when you're working with automated graph technologies like Graph RAG. Because Graph RAG will not have that context. It will not know you at your organization and how you define customer as an example, or whether that definition changes between departments or data sets. Therefore, the knowledge engineer needs to impart that information into the model, architecture, and ETL process, and the other data pipeline and operations you need that information to connect to. Graph RAG is a great first pass at creating a knowledge graph if you do not have the skills to create a graph yet. Or maybe you want to extract triples from unstructured texts to influence your ontology and knowledge graph creation. In either case, you will want to take the output of Graph RAG and refine it to be aligned to your use case at your organization. A knowledge engineer is also responsible for translating the business needs into a data model and working with the raw data to understand how it can be interpreted by the data model for your business needs. This video gives you a working definition
>
> **[3:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-is-data-engineering?u=76281980&t=189)** of data engineering for the knowledge graph space. Make sure to explore the [[LinkedIn]] Learning Library for a deeper dive into ETL and data engineering for non-semantic use cases if you would like to expand your data engineering knowledge. For now, let's review the main knowledge engineering aspects we will cover in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (6), [[Knowledge Graphs]] (1), [[LinkedIn]] (1)
> **Env Vars:** rag (4), etl (3), rdf (2)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Aspects of data engineering](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/aspects-of-data-engineering?u=76281980&t=0)** - [Instructor] [[Data Engineering]] always starts with gathering data and governance requirements for the use case, as well as understanding what can be reused from your current data and architecture capabilities. We will go over this first, starting in Chapter 2, and then walk through the other aspects of data engineering throughout this course. The second aspect we will cover is extraction of data. Here, we will assess what you have, its quality and what scheme it's in, where it came from, how it's delivered, and how it's updated and accessed currently. From there, we'll get into the third step, creating our data model, the blueprint that the data will populate so that our AI can use this. We will be focusing on semantic data models in this course. Then, we will move to the fourth step and go through the various parts of transforming the data, the tools to use and documenting decisions for [[Data Management]] and downstream applications. Finally, we'll finish up with the fifth step and review the architecture and load specific data into our data model to test how the AI can query the graph. So, with that, let's go get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (2), [[Data Management]] (1)
> **Speakers:** - [instructor] (1)

#### [Importance of data engineering for semantic AI](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=0)** - [Instructor] When it comes to AI, semantic context is what supports a precise and accurate AI application. Here you can see that without context, you may think that the current actress Anne Hathaway, is the spouse of William Shakespeare, but she's not. This is why context is so important and [[Knowledge Graphs]] are naturally built to house semantics. AI can use a knowledge graph to query and retrieve statements or triples associated with the entities in the AI query. These statements are often then used to ground the AI in a source of verified and domain-specific context for better quality. This is done in the retrieval augmented generation or RAG process, and it doesn't have to just be a knowledge graph. You can also use your [[Vector Databases]] and your traditional [[Databases]] in this same RAG process. Knowledge graphs can also be used to direct an AI in the procedure and steps in technical or business-defined sequences of events for better accuracy of event-based flows. And this is sometimes called a causal graph. On the flip side, AI is often used to create ontologies, populate knowledge graphs, and query the graph if users are not as familiar with graph-based query languages like Cyber or Sparkle. In these cases, the graph needs to be in expected and industry standard formats,
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/importance-of-data-engineering-for-semantic-ai?u=76281980&t=94)** and the data needs to be dependable for the AI to use the graph data effectively. Now that we understand the importance of data and knowledge engineering for AI, let's review our use case for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (3), [[Vector Databases]] (1), [[Databases]] (1)
> **Env Vars:** rag (2)
> **Speakers:** - [instructor] (1)

#### [Use case: Two Trees Olive Oil](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=0)** - [Facilitator] Before we get much further, we need to make sure we have a North Star, or a main use case to keep in mind when we are making decisions. Throughout this course, we will be working with a small data set to keep things manageable, but in reality, you will likely have large and sometimes messy data sets. Those data sets might need a lot more engineering than what we're going to go over in this course. But just keep in mind that this is giving you the stepping stones to get to the larger goal of being a [[Data Engineering]] pro. For our example data, we are working with the Two Trees Olive Oil company, or TTOO for short. As data engineers, our use case here is to empower TTOO's sales team with knowledge to increase their sales success. Our sales team needs a no-code solution to autonomously assess our customer and sales data to find ways to increase their effectiveness, identify untapped opportunities for customer satisfaction, and critically assess what could be done to better move forward. You will also need to identify your stakeholders and data owners or, when that is missing, what do you need to satisfy this use case? Modeling and engineering data in a vacuum is an easy mistake to make. The end solution needs to work for this specific use case, and you need to understand what data exists, why it exists, how the current data owners and users use and define it,
>
> **[1:39](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/use-case-two-trees-olive-oil?u=76281980&t=99)** and how the model and data shape up to meet the needs of the end users and business needs. This requires a lot of conversation, trial and error, and a lot of discussion. Don't shy away from it. Make sure you embrace it because it's going to make everything you do that much more successful. Okay, now let's dive into how we can help our sales folks get those sales.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** ttoo (2)
> **Warnings:** keep in mind (2)
> **Definitions:** is an  (1)
> **Speakers:** - [facilitator] (1)


### 2. Extraction

[↑ Back to Table of Contents](#table-of-contents)

#### [What data do you need?](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=0)** - [Instructor] There's always a temptation to model everything you have in your database. And you can see here, I've moved all of the database files into [[Google Drive]] so it's just easier for us to see. So you'll see me popping in and out of Google Drive as we do this. But when you're modeling, you should always keep your main use case in mind, and your primary query, or queries, in mind to ensure the model will be performant and accurate. You do not need to boil the ocean. Adding too much data all at once will slow your response time and can confuse the AI if you add unnecessary data in. The beauty of [[Knowledge Graphs]] is, they are flexible models that can be expanded. That said, if you have to update the entity types or relationships in your model, there will be a lot of changes that have to go across the entire graph. So, keep in mind what those breaking changes are as you start to think about what data you're using and how you're going to use it. We'll go over more about updating your graph later. For now, let's ask ourselves, what data do we need? So for instance, we don't necessarily need travel expenses, because remember, our use case is about sales and customer reviews. But things like our customer info, customer list, [[Microsoft Products|products]], maybe what the customer purchased, would be useful for our use case. We know we need data that is related to our customer and sales data,
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=93)** specifically targeted at trends that point to satisfaction and dissatisfaction. So we can go through this, and what we would do is select the data sets that we feel are going to be the most useful for our use case. Looking at the data we have available, we can see that there are customer tables, tables for products, tables for purchase orders. These seem to be the most useful for our use case. So we're going to start with those. And instead of having to go through this entire database of data, I'm going to break those out into a separate document for us. Those are in the course materials. So, the thing that we can see that is missing is we don't have anything that's specific to customer feedback. We're going to have to find out if this data exists. If it doesn't, you will need to come up with a way to create synthetic data, gather the data moving forward, or find a way to extract this information from legacy sources. In our case, we have asked our fictional web team who informs us, they have customer reviews from our website that we can use. And here we are. We're seeing what they have sent to us. But it is a [[Microsoft Word|Word]] document, or in our case, a [[Google]] Doc. If we had a lot of these and wanted to run AI over them during query time, we could add them to a vector or document database. In our case, we don't have that much data, so we will instead mine the customer feedback for positive and negative review
>
> **[3:06](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-data-do-you-need?u=76281980&t=186)** to add to our data model later on. For now, we have identified our data so we can keep moving forward. In the next video, we will move on to gathering the details about the data, so we know where and how to extract the data when we go to production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Drive]] (2), [[Microsoft Products|Products]] (2), [[Knowledge Graphs]] (1), [[Microsoft Word|Word]] (1), [[Google]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** select the (1), go to (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)

#### [Where is the data?](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=0)** - [Instructor] In our Two Trees Olive Oil case, we have access data from existing [[Databases]], but the data we have were exports and we saw that in our [[Google]] files, which is fine for setting up the model and surveying the data, but eventually you will need to get updates from the data sources. Let's cover a couple common ways where you can locate the data that you need for when you go to production. First, you can stream data in from the source, either through API or canned queries, whereas data is available, it is streamed into the model. This is used the most with event or transactional data that depends on the most up-to-date data for the AI to consult. [[Batch Processing]] is also common where near [[Real-Time]] data is not necessary. In this case, you can still use API or canned queries, or you can use a data dump, which is all the data is new each time, or delta loads, and that's when only changed data is loaded. Both of these also can use APIs, but can take the form of a load or upload process where the original source of the data is pulled and the data is then loaded to a staging area like Amazon S3 or [[MongoDB]]. Making sure you can access the data where it natively lives is critical to your success. Also critical to your success are the quality, completeness, and timeliness of your data,
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/where-is-the-data?u=76281980&t=94)** and you can only get at all of that information when you can get to the original source, so let's get into that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Google]] (1), [[Batch Processing]] (1), [[Real-Time]] (1), [[MongoDB]] (1)
> **Env Vars:** api (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [What state is the data in?](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=0)** - To make things easier to assess, I have compiled the dataset from our TTOO customer product and sales data into one document. So you can see that here with the tabs below. So open up the file titled Raw Output from DB tables in the course files to follow along. So the first thing we'll check is what identification or keys are used. So here we can see customer ID has keys, our product catalog has IDs, purchase orders have both customer and order numbers and product IDs. There's a lot of IDs in this one. And then vendor lists, we're not too concerned about that one right now, so. If we look through, we want to verify that there are no duplicates, and we can see that these all have different ID logics behind them. So these are all going to be different, but order number and customer number seem to have an overlap, but we're not too concerned about that because these are different types of data, so they're not duplicative. That's good. We're also going to look for glaring errors like missing data, null or NAs. So I did notice we have an NA and anonymous data down here. So we just want to make a note of this because we'll have to address how to deal with null values
>
> **[1:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=96)** or anonymous values later on and disambiguation issues. So if we have customer names, are there any that could potentially be duplicative of each other? And the answer is, yeah, there's some things in here that could potentially be duplicates like these two. So we'll make a note of that, and we will come back to it later. So you'll notice I'm saying make a note of that. This is where we will start our design document. And right now, we're just going to add the notes because we are only doing a high-level survey of the data. So let's make a note about the UIDs, going to add in the note about our anonymous customer, we are going to notice that there are potential duplicates, and we're also going to note that we don't have any customer reviews, which is critical to our use case. Now, we will come back to all of these later in the course, but for now, this is our high-level notation and analysis on the dataset that we have available to us. So going back to our data, the reason that we wanted to check these IDs first is graphs function on UIDs or unique identifiers as their main retrieval mechanism, so only the most explicit information is retrieved
>
> **[3:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=192)** for that ID. This is why you have to make sure that they do not get duplicated across different datasets. If we look across the IDs and the data, we can see they are all unique, maybe a little too simplistic to be used in real life, but for our learning needs, they can serve as our UIDs. The tool we will use later in the course, we'll add a new ID to these according to the database structure. So for now, we're going to keep the IDs as they are. We can see here the commonalities between the different tables where the customers from our customer table are being represented in our purchase orders. So this is how these two things are connected, but they're not explicit. You don't exactly know if our interpretation of the data is correct. So we're going to address these issues as we start to look into the data model, because the knowledge graph will make these relationships more explicit. While we have a very small dataset here to make learning easier, the other elements I would recommend to check are is the dataset large enough for the use case you are looking at? Does it contain a good sample of customers, time periods, product lines, etc.? And does this sample represent the larger spread of data that the project will handle? For us, this is the only data we will use, so we can confirm the sample set is adequate,
>
> **[4:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/what-state-is-the-data-in?u=76281980&t=287)** but in real life, you will want a representative sample so that the data is manageable but you can also use it to answer all the questions you have at your disposal. Now, let's head into the next video to translate data from relational data into graph data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8)
> **Cross-References:** later in (2), next video (1)
> **Env Vars:** ttoo (1)
> **Speakers:** - to (1)

#### [Translating relational to graph data](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=0)** - [Instructor] Traditional ETL will have you load specific table columns into the corresponding database fields. For instance, the name column in raw customer data can map to the potential CusSat name field in your database schema. A knowledge graph is similar, except each row in a table is an instance or specific example of an entity. The container of these instances would be the node. For us, this is customer and purchase order, in this example. The biggest difference is that in a graph, the two nodes are related with a specific value called a relation or property. This relation explicitly connects the customer to the specific event, which is a purchase, and that purchase connects to what was purchased in that event, or a product. Connecting nodes is done through two specific graph elements. Attributes, which contain other nodes, such as State and are usually [[Metadata]] associated with individual instances, or Properties. And these are the explicit relationships between tables or types of data. In traditional data, the relationship between nodes might be a column or a join between tables, but these are not semantic. They depend on outside knowledge to interpret, which can lead to incorrect interpretation
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/translating-relational-to-graph-data?u=76281980&t=93)** or incorrect use of the data. Not so good when you're using AI, which is already prone to hallucinations if its data is not high-quality, contextual, or has high enough data coverage. This is why semantic relations native to [[Knowledge Graphs]] are so powerful for AI use cases. To tell the difference: An attribute is metadata about the entity, whereas a property or relation is how two entities, or an entity and a string value, are related. Deciding what data needs to be a node versus an attribute is an important decision to make during modeling. Let's go over modeling in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Knowledge Graphs]] (1)
> **CLI Commands:** node (2), make (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for instance (1), such as (1)
> **Env Vars:** etl (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Data Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating your design document](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=0)** - [Narrator] We started a design document earlier with our notes, but now we need to flush it out. A design doc is used to design the model and ETL process before any ETL is actually done. It allows for review of the model and the plan beforehand and also serves as a record of why and how things were done for troubleshooting and explainability down the line. Every major change to the model, usually when nodes, relations, attributes, or IDs change should be documented in a design doc. Design docs start with an introduction to the use case and problem the data and model are meant to serve. Let's go ahead and add that in. Next, we will fill out the data and design section with a sample of the raw source data with nodes on how it was accessed and the limitations of the data. We have our limitation notes from before, so we will add those to this section. We also have our sample data from the raw output file, so we can add that in as our sample, and we are going to highlight where those limitations showed up in those data tables. So now we have our source data and limitations with their examples from the data source all listed out. You can also list sections of your model that exist that have a similar pattern,
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=93)** and this could be in other data sets and other [[Databases]]. Any expected query patterns and we will add in some of the queries we expect to have from our sales folks and expected consumers of this data if you have that. And for us, that's going to be our star dog AI. So we will list that out. This is helpful for making sure your data is meeting the expected needs you have, taking the guesswork out of your design. For us, this is a new model, so we do not have all of this information, but the information we do have, we will take note of right now. The next section we will go over is the model design section. This is where the nodes, relationships, attributes, and things like entity, measurement, and other data type information would be listed, along with a few example entities that will populate the model. We will walk through and modify this as we test the ETL later on. For now, our rough sketch is that customers purchase [[Microsoft Products|products]] and they have experiences related to their purchase. And remember each of these is represented by an ID. So let's add in that rough sketch of the model. When grabbing these examples, we're going to follow the IDs because if we look at our original data set, we can see our customers have an ID. Those customers created purchases
>
> **[3:07](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=187)** and this is the sketched model that we're going through. Those order numbers are then connected to a specific product as well as a specific review. So that's how we are generating these examples. We will also add what attributes we expect to model from these nodes. These should be derived from the raw data we have available to us. So looking at our customer data, we can see that there is some information in here that may not be that useful for us and our use case. So we don't necessarily need the first and surname because we have a column for our full name. We don't really need the phone number, address, city, because these are individual aspects that our sales folks can use when they decide how they're going to use this information. Our sales team is broken up by state, so maybe state is something we want to keep retained. Zip code is the same as some of this address information that we're disregarding. And last known address is something that we also probably do not need to have in our model, but it might be useful for entity resolution. So let's go ahead and add in some of these examples. So we're going to use full name and state and the customer ID for our customer node. So customer is our node and the attributes are going to be
>
> **[4:42](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=282)** full name, state, and cust ID. And we're going to go through and do that for product catalog and purchase order.
>
> **[5:01](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=301)** Alright, now that we've listed out the nodes, the model design that we have sketched and the attributes, we can see that there's something missing because this information between customer and what they've purchased isn't a direct relation. The customer does not just purchase a node of product, they purchase based on an order. That order is something that is missing from our nodes. So let's go ahead and add that into the nodes that we will want to capture so that we can get to product. Also, our use case hinges on finding positive and negative reviews. So we will need to add two child nodes to customer review and that is positive review and negative review. Now we could have made those two nodes and discarded customer review, but we may have other review types and classifications later on. So we will document our logic for this modeling decision and the benefits and trade-offs are that the alternative approaches limit how much we can do with our data later on. So let's make those notes in our design document as well. Okay, finally, we will add any open questions that we may have. Right now we don't have any open questions,
>
> **[6:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/creating-your-design-document?u=76281980&t=396)** but the other purpose of our design doc is for others to be able to review the model that we are attempting to create. This is where they can add open questions and we also want to add a section for their review feedback so that can be documented as well. Now in our use case, we do not have others that are going to be reviewing our model, so we don't have open questions or review feedback. But these are two important pieces to make sure that you have in your design document when you use this in real life. So now that we have the start to our design doc, let's explore the options to do the modeling itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** node (3), make (2)
> **Env Vars:** etl (3)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Options for data modeling](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=0)** - [Instructor] [[Data Modeling]] does not necessarily require large, monolithic ETL tool sets. While I would not necessarily suggest using an [[Microsoft Excel|Excel]] sheet, although no shade if you are using that, document mappings and transformations usually go well with tool sets that are specific to that kind of work. So let's explore some examples of tools that help with data modeling. Tools such as Informatica and [[Hadoop]] and Talend, those are all heavy-duty ETL tools. They're used for large multimodal and complex [[Data Transformation]], but they're not necessarily graph-specific, although many use [[Apache Spark]] for ETL into graph structures, but those are usually property graphs. Other tools, like Redshift or Databricks, allow for on-the-fly modeling and analytics, whereas there are tools that are more specific to graph modeling, data transformation and data loading, like Stardog, [[Neo4j]], or the open source Protege. Picking the right tool for the job means gathering the requirements of your ETL and data, which we've covered, as well as the skills and expertise of your teams, which we're striving for no code, so we know we would like to use a tool that has some built in ETL assistance so our sales folks can use it as they need. For our Two Trees Olive Oil use case,
>
> **[1:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/options-for-data-modeling?u=76281980&t=96)** we have a small data set with a relatively simple use case and no database integrations. Since we likely have limited and straightforward transformations, and we want to use AI assistance in our ETL process, we're going to use a tool called Stardog for our walkthrough. Before we move on to the next video, I encourage you to check out the list of ETL tools, including graph modeling tools, in your exercise files to help you select the tools you need for your real-life projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Modeling]] (2), [[Data Transformation]] (2), [[Microsoft Excel|Excel]] (1), [[Hadoop]] (1), [[Apache Spark]] (1)
> **Env Vars:** etl (7)
> **CLI Commands:** apache (1)
> **Cross-References:** next video (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Thinking about nodes](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=0)** - [Instructor] In a graph data model, nodes are the circles or dots in a knowledge graph. They are what you connect together with relationships to make a triple. Looking at relational data, these nodes are normally going to be named entities. A named entity does not mean it is a personal or business name. It means it is a named thing in the world. So, in our example, this could be olive oil, a state in an address, or the first name of a customer. These are things in the world, and they have names. These named entities usually have at least an ID and a label in the data model, but many have additional attributes like a customer's address. For instance, which specific customer purchased a specific product for a specific purchase order. Those are all named entities. Those are all nodes. Having a node that captures all the instances, those specific customers and [[Microsoft Products|products]] and purchase orders, are what the node contains. The node gives your LLM a smaller set of entities to disambiguate and access because disambiguation might be accomplished at the node level and not the instance level, which can be thousands of entities depending on the graph size. Now, eventually you do need to do disambiguation on your instances, but your LLM is always going to access your node before the instances.
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=93)** Instance-level disambiguation usually is called entity resolution. This saves time, reduces latency, cuts costs, and increases accuracy because you are reducing the amount of data the LLM needs to wade through to retrieve the correct entities. Nodes don't usually represent the specific instances of your data. Instance data usually comes from underlying tables or as you populate your graph with other graph data. The nodes and edges are defined in the data model, and the instance data populates the data model as it's loaded into the graph model, and we're going to see that later when we populate Stardog. Any node with a connection to another node starts to create a graph structure because each node has an infinite potential to be connected to other nodes in the graph. A node can be connected to a literal value, like a binary flag, like valid or not valid, but those will not be connected to other literals, and therefore literals don't contribute to the graph's network of nodes. Your instance data will be the lowest common denominator you need to answer questions from your graph. The logical classifications or buckets of these instances represents what their nodes and those labels of the nodes will be. So for us, you can see customer is the node, and then the instance data would be Jackie Johnes, Sydney, and Hunter. So let's look at our design doc
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-nodes?u=76281980&t=190)** and understand if all of the nodes we have will represent the instances that we expect and the attributes that go along with them. For our use case, we want the full customer name because we do not need to retrieve a customer's first and surname separately. So we have crossed out first name and surname because this is information from original data sources that we won't use. Our sales team is going to be able to reach out to the customer, and therefore they don't necessarily need the address because they already have that in their own storage. So we're also going to take out the phone number, the address, the city, and the ZIP because that information is not necessary for our sales folks to find new avenues of sales and product. Our sales teams are separated out by state, so we are going to keep the information for state because that will help our sales folks find the customers that are in their territories. So, with this logic updated, we can now move on to what is the information that we need to track for relating these things together?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** node (10), find (2), make (1)
> **Env Vars:** llm (3), zip (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Thinking about relations](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=0)** - [Instructor] In a graph data model, the lines connecting nodes are relationships or edges. Edges are the explicit relations that connect one node to another. Like Jackie has purchased... lemon-flavored olive oil from us. One node connected to a literal value, like maybe Jackie's customer number, which is number 10, is still a triple and it still uses a relationship. But that relationship is contained in an attribute because Customer ID is an attribute that is defining customer. Just like nodes can be derived from your [[Relational Databases]], so can relations. In the case of Jackie and maybe the state they live in, these are probably columns next to each other in a customer table. When modeling graph, you will need to label how a customer relates to other data they interact with, like a purchase or customer review in the case that we can show that a customer has purchased, which is the relation, a customer review, and then the review would be the other node connected to it, or in our case, the RevID, which represents the customer review. In our example, the relationship between Jackie and their customer review or reviews, because they are a power user of our olive oil,
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=97)** the review and how it relates to Jackie is not explicit until we create this triple. From there, there is no more guesswork. Anyone using this data, including the LLM, will know exactly how Jackie feels about Two Trees because we have added that logic in explicitly through relationships. This is one of the main reasons that graphs are used to ground LLMs. They can retrieve explicit information without ambiguity, which makes the AI responses and retrievals more reliable and accurate. Some relationships are easier to decipher, such as is-a, has-a, part-of, and has-part. Other relations like customer review are labels that you create to represent how you specifically think of data relating to each other. And you do this to bake in your business logic to support your answers, either from your sales folks or your LLM use case. You can also mine relationships from full text. You search logs and click through analytics or use relations derived from linked data like Wikidata. It's also helpful to think of the types of questions you will want answered from your graph data. This will guide you on the types of relationships you want to represent,
>
> **[3:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-relations?u=76281980&t=189)** the data you need to support them, and the answers they will support. For us, the relationship between customer and customer review has been defined, but customers purchase [[Microsoft Products|products]]. And from those purchases, customers have written either positive or negative experiences. So we now need to add in the information about the positive and negative reviews as a relation. Graphs allow you to continue to add relations as your needs evolve. So, start out with a smaller set of relationships and extend your model later when you need to. Or use a bootstrapping step like [[GraphRAG]] to mine out example triples and mine from that list of suggested relations. So far, we have tackled the Customer table. We should also select data that we need from the Purchase Order table, as well as the Product Catalog. We need to add in examples to our design document, and this information has been updated for you in the course materials so you can follow along. All right, so with that, let's move on to thinking about how retrieval and traversal of data helps us answer questions based on our [[Data Engineering]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Microsoft Products|Products]] (1), [[GraphRAG]] (1), [[Data Engineering]] (1)
> **CLI Commands:** node (3)
> **Env Vars:** llm (2)
> **Analogies:** just like (1), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Thinking about retrieval/traversal](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=0)** - [Instructor] When an AI queries a graph, it will retrieve, based on the string provided, the UID in the graph that relates to that string. So making sure entities and relations and instances for that matter are disambiguated is a necessary first step. Merging and deduplicating the entities will make for a cleaner and more dependable retrieval. We have established we have UIDs and no duplication across the data. Well, except for that one customer, we're going to handle them later. But this is something that I would recommend you always check in those larger data sets. Make sure that you really understand that there is either little to no duplication. And if there is duplication, what the ramifications of that will be if both of those entities are being retrieved. The AI will have to pick which one it thinks is right, is it going to pick correctly? Retrieving information from your graph can be done by prompting an AI to query your graph via an endpoint. In a graph database that has [[Semantic Search]] integrations natively, semantic application frameworks like Apache Jena or querying the graph itself using SPARQL for RDF based graphs. And Cypher or openCypher for property graphs. [[Knowledge Graphs]] have two unique ways they can be queried.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-retrieval-traversal?u=76281980&t=95)** One is using inference, which infers relations based on semantic rules. For instance, a transitive relation, such as relative of, means that if Sam is related to Jess and Jess is related to Raj, then Raj and Sam are also related. Even if that relation is not explicitly expressed, it's inferred. The second unique way to query a graph is called walking, or traversing the graph. This is when graph [[Algorithms]] such as shortest path are used. Where if you query for the shortest path connecting Sam and Raj, the query would retrieve Jess, since Jess is the shortest path connecting Sam to Raj in our little mini example. There are other graph algorithms, and they are all pretty useful for doing graph analytics across networks of data. We won't go over those in this course, but I have added resources to the exercise files where you can check some of those out. When using your graph with AI, you can use standard [[Information Retrieval]], NTT resolution, inference and graph algorithms at runtime or during offline analytics. Now that we have a sense of triple nodes and edges, let's talk about updating them and why that's critical in the ETL phase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Semantic Search]] (1), [[Knowledge Graphs]] (1), [[Information Retrieval]] (1)
> **Env Vars:** uid (1), sparql (1), rdf (1), ntt (1), etl (1)
> **CLI Commands:** make (2), apache (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Analogies:** such as (2), for instance (1)
> **Code Identifiers:** opencypher (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Thinking about updates](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=0)** - [Instructor] When designing your model, you always need to think ahead to when, how, how often, and which parts of your data will need updating. You also need to make sure all the tooling you are using will support this. For instance, not all graph [[Databases]] will allow both read and write access because it's too risky to have access that can write to your database that you do not control properly. So read access is usually what is allowed from outside of the database. So if you're requirements are that you need to be able to do both read and write, make sure you check into that before selecting a tool. Graph data is updated just like any other data via a scheduled ETL, but remember, graph is a network. If a node, relation, or triple is changed, it has a ripple effect through the graph. So you will want to estimate the impact of changes to your graph and the underlying data before you make any large updates. You also need to identify what changes specifically will break consumers of the graph data before you make these changes. And if you change a node label, that won't break anything, because the graph is based on UIDs. But if you split an address node into its individual parts, you need to determine if the old node
>
> **[1:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=96)** for addresses can remain or if you need to deprecate the address node and update all the relations that used that node. Same goes for updating relationships. These are spread throughout the graph, so you could accidentally make a hole in your graph if the relationship is deprecated. And holes are usually good places for hallucinations to hide. You also could have a massive re-indexing project if you have to update every single instance that is related with that relationship. This is why when designing your model, think about the level of granularity you need for your nodes and edges. There are strategies, such as creating deprecated nodes or edges of a graph, where data is reloaded into the new nodes and edges and that creates a new version of the model, which needs to be documented in your design doc. But depending on the volume of data you are working with, this still may require a lot of resources to update. This is usually part of a delta refresh. Another strategy is a full refresh, where the entire old model is deprecated and the new model is brought online. The last and most common approach is a [[Git]]-like approach where the new commits are integrated as they are reviewed in the design doc and then forked in. Each time you change your model,
>
> **[3:12](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-updates?u=76281980&t=192)** the [[Data Engineering]] process will kick off. The area of the graph that is being updated will need a new design document, and the ETL process will need to be rerun. The more changes you have, the more data that needs to be loaded and transformed, and that's the heavier the resources you will need to complete the task. Anytime you load new data to your graph, you will want to run [[Data Validation]], and that's making sure that the data is conforming to your data model. You need to also run entity resolution for any new entities and check for any breaking changes so that your AI and your consumers, such as our sales folks, always know that the data can be dependable. Knowing your update strategy, how it affects data consumers and the level of effort on ETL is critical to keep in mind when designing your model. This leads us to another aspect that will affect your updates and data model, how data will be stored and accessed. Let's get into that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Git]] (1), [[Data Engineering]] (1), [[Data Validation]] (1)
> **CLI Commands:** node (6), make (5), git (1)
> **Analogies:** such as (2), for instance (1), just like (1)
> **Env Vars:** etl (3)
> **Definitions:** is a  (3)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Thinking about storage](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=0)** - [Instructor] Let's dive into a few storage options. Let's start out with the native graph storage options. So for property graphs, we have things like [[Neo4j]], Neptune, although Neptune can also do RDF, TinkerPop, and Memgraph, just to name a few. We also have the RDF-based storage, such as RDFox, JanusGraph, Stardog, Metaphactory, and there's a whole slew of others. There's also more general storage that can accommodate graphs like Spark, RDS, or Oracle. Many graph tools come with a generic graph database under the hood for smaller graph projects, or you can connect to a more robust database if those tools are not meeting your needs. Stardog, for instance, has a small generic database for graph data under the hood, so that's what we're going to be using for our course. There's also now some serverless options for graphs like Kuzu that doesn't require you to have a giant graph database at all. These are just a few options, but I provided a larger list of database options in the exercise files for you to look at later on. Also, as a quick tip, if you have used something like Graph RAG to create a property graph or you already have a property graph, you can use something from Neo4j called neosemantics, and that's so that you can export property graph data into RDF or vice versa.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=95)** Now, depending on what kind of database you select, you will potentially need an external ETL tool such as Airflow or [[TensorFlow]], or you can create your own [[Data Pipelines]] with more extensive operations for ETL, depending on your use case. Each tool will have its own requirements such as namespace or ID creation, file format specifications, modeling options and more. Just keep in mind that, when you are designing your model, you have to keep your tool set in mind. It helps to have a basic model, and this can be a diagram not necessarily in a modeling tool, and what general requirements you need like we covered earlier in this course. And this is also that you can select the right tool for the right job. The type of data you are using, such as structured or unstructured or even event based; how it will be loaded, such as streaming and refresh or deltas; how it will be updated, delta or forked; which query language you want to use; or graph traversal and inference that you need as well as latency for your queries and other performance and system requirements are all things you need to investigate when picking your graph storage. For our use case, we need inferencing, so we will use RDF, but it's a very small data set, so we are going to be using the in-house graph storage of Stardog. We also want to use AI to help us build and query our graph,
>
> **[3:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/thinking-about-storage?u=76281980&t=191)** so we are going to use the Stardog Voicebox AI assistant to help us. Most graph tools now have this sort of AI feature or you could use your own AI with the graph database API or wherever you're serving up your materialized views to use AI to help build, maintain, or query your graph or ground your AI on the graph. You also may have a [[Data Science]] modeling and/or ETL portal associated with a database. In our case, we can model and do lightweight ETL within the Stardog tool. We will explore that next in the transform stage of the ETL process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (2), [[TensorFlow]] (1), [[Data Pipelines]] (1), [[Data Science]] (1)
> **Env Vars:** etl (5), rdf (4), rds (1), rag (1), api (1)
> **Analogies:** such as (5), for instance (1)
> **Cross-References:** we covered (1), earlier in (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Transform

[↑ Back to Table of Contents](#table-of-contents)

#### [Data transformation](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=0)** - [Instructor] A common issue is transforming data from one model or source to another. If your source data is using a custom model, which is pretty common, you'll need to first transition the source model to then map or align it with the new model you are creating. You can do this by creating an ETL mapping file where the incoming source data via API or data dump is mapped to where the data should go in our new model. And if data needs to be merged or reformatted, this is also listed in a traditional ETL mapping file to then execute when using whichever ETL tool or approach you choose or that you're already using in your data pipeline. But many graph native tools have ETL built in for small batch updates. So we will use that in our Stardog instance after we model the ETL in the [[Representational State Transfer (REST)|rest]] of our design doc. In our raw data, we now can address some of those limitations we identified earlier in the course. So the first thing is we have an anonymous customer. We know from our business rules that a customer is defined as someone who has made at least one purchase, but we don't see a purchase order for customer ID number 11. We would want to ask the data owners, why is this customer in here? Is it an error or are we missing context, or are we missing information?
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=94)** We can at least verify that in this use case, this is an error and we can take this customer out. Now we would always be using copies of our data so that we can always roll back if we made any mistakes. We also can see in some of our other areas in the data that we have N/A. We want to make sure that we are using null instead of N/A. So let's go through and update that. Let's check our other data to make sure. Yep, there's no other N/A's, we've got them all. The next thing that we see is potentially duplicate information in our customer data. Graphs work on the basis of a UID being only assigned to one specific instance. So you can see here Jackie has one ID, but she has two entries, so we need to deduplicate this. In this case, we're going to do a merge and de-dupe. Now this raises an interesting question. How can we model a customer ID as our primary key if a customer can have two customer IDs? One approach would be to use the last known address to de-duplicate this information. So let's go ahead and look at the last known address. So for Jackie, this is an older address so we can take this line out.
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=190)** And we can see for Nolan, this also is an older address. Now Hunter seems to be this Hunter and this Hunter, but they have two different customer IDs. So we need to verify which one is accurate, because here the last known address is not helpful. Now, when we go into our purchase orders, we're going to look for those customer IDs, which is seven and eight. We can see seven, but we don't see eight, which means that customer line is an error. We would want to troubleshoot and understand why these errors are occurring. But for now, we can use our business rules, that customer ID number eight is not a real customer because they did not purchase anything. So we're going to remove that. But this shows why using a customer ID as our primary key might be an issue. We want only one customer ID for every order number, but we can see that a customer can order multiple things. So to be more efficient with our data model and for the queries that we'll support, we will start to use product order number as our primary key instead. This means we should have order number as the first column in our purchase order table. Now, when we compare the customer data to the purchase data,
>
> **[4:46](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=286)** we see one more customer, number nine, that does not have a purchase. So this would be another error that we want to take out. Our original data pool from the source data identified the vendor list as a potential data source, and eventually it may be useful to have. But so far we have found no use for it in this use case, so we will remove it. We also seem to have a lot of empty cells in our product table. Again, we want to verify this is an error and that we are not in fact missing a chunk of data. But for us, we have confirmed this is an error and we can eliminate these empty cells. Now most of our data are integers, but we do have a few dates. Dates have a ton of formats, but for the tool we're using today, Stardog, we need to make sure that the format is year, month, date. So let's go in and update all of our dates to comply.
>
> **[6:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=369)** Okay, it looks like we have all of them updated. Yes, we do. Now we need to go in and checking our design document, take out the information that we do not need for our model. So we're going to go ahead and do that now.
>
> **[6:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=395)** And because we've already used our last known address for de-duplication, we're going to get rid of that one as well. Now, having made all of those updates, I've also saved and updated dataset with all of this information and logic into your course files. We are also going to make sure that everything that we have in our design doc has been addressed. You can find my draft design doc in the course materials as well. Now we need to take each of our data sets and save them as individual CSV files. We will use the naming convention of the nodes that we will eventually map them to. So customer, product, and purchase order. One thing to note is we already had full name in our dataset, but if we did not have the full name, for instance, we had first name and surname, we can also use AI to help clean and merge some of that data. You can use tools like Open Refine or Talend or libraries like Spacey to make sure that that conversion happens. Now that we have transformed some of our data, let's check our design doc to make sure that we have all of our data and then we can move forward. Oh, we have our customer review information listed here,
>
> **[8:14](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/data-transformation?u=76281980&t=494)** but we forgot to grab the information from our customer review documents and add it in as a dataset. So let's go through how to add missing data into a dataset so that we can use it later on in our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** etl (5), api (1), uid (1), csv (1)
> **CLI Commands:** make (6), find (1)
> **Definitions:** is an  (6), means that (1)
> **Cross-References:** earlier in (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)

#### [Missing data](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=0)** - [Instructor] We will now need to transform our [[Unstructured Data]] into data we can connect to our model, so we can use our AI to query against our repository of knowledge. Looking at the unstructured data, we can see there are four main data types. We have customer ID, order ID, review ID, and the actual rating. Now we can add all of these into a dataset as new columns. We'll of course also eventually need to set up a data pipeline to source customer reviews, either in a document store, vector store or file storage like S3 for us to source the data from and then populate our graph when we move into production. So we already have the first two as nodes, customer ID and order ID in other datasets. But now we need to add ratings as a new node in our design document, and we will need to connect it to the event it is connected to, which is the purchase order number in our case. But that's already in the model. We need to have all of these in our dataset so that this information can connect to each other. So let's go ahead and add this information into a new dataset.
>
> **[1:29](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=89)** Now, if we wanted to then be able to retrieve these documents or customer reviews based on the purchase order number, we would need to make sure the reviews are broken out into documents to then be retrieved, and the order number would then need to be through primary ID or key to connect the review to the customer and their rating within our model. Another approach that we could take is we could tag the reviews themselves as documents with the themes that they represent, and we could do that for better retrieval. And to do that, we could ask our AI to mine out those themes with a prompt like the following, to create a taxonomy of tags. We could also use these themes to find similar reviews if we added these tags instead of just keywords. In our case, we do not have a large dataset, and we also do not need to know the exact feedback only if it was positive or negative. We also need to decide for our company how we would define positive or negative feedback. In our use case, any customer rating above four stars will be considered positive. Interestingly, if you review the AI output from earlier, the AI ignore the ratings and instead focused on sentiment analysis. There's nothing wrong with doing that. However, it misses the business context we have just defined. So this is another reason pairing a knowledge graph with AI
>
> **[3:04](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=184)** helps give the AI better context for your specific organization based on your business rules. Now, looking back at our design document, we did have two nodes for the reviews, but the way our business defines positive and negative reviews may change. And if we index all the reviews with either positive or negative, we would have to change that logic and do a re-indexing project later on. That can cost time, money, and resources, and it could also produce breaking changes. So instead, let's capture the star system so that our sales team can customize the types of reviews they retrieve based on how many stars were given. We will add this into our Design doc as attribute for stars in our review. We also have the review ID from the source that we just created in our table structure. So let's add that in. We will populate our new dataset for customer reviews. So we can take this logic out because we have decided not to break these out into two nodes. We also need to add in what information we grabbed with review from our unstructured data, and we need to add that as a table for the node we will create for review. Now, we are going to keep all of the information
>
> **[4:38](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/missing-data?u=76281980&t=278)** from this table because we just created it, and this is the only information we really have outside of the unstructured text of the review itself. So let's keep things going in the next chapter where we will finally get to go in and load all of that data that we've been modeling in our Design document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (3)
> **CLI Commands:** node (2), make (1), find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Load

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up our Stardog project, part 1](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=0)** - [Instructor] Now we get to the good stuff. Since we have tested out our logic and modeled what we need in the design doc, we should have an easier time starting the project and getting things set up. First, go to your Stardog account and log in. Next, go to Designer, and then New. If you want to load our course file from the course materials, you can select Import Project instead. But for us, we're going to start from scratch. Once we're on the new project screen, we are going to start with the AI-assisted graph creation via Voicebox. We are going to name this our TTOOV3 because we've gone through three iterations of [[Data Transformation]] by this point, if you're keeping track. And we're going to select Voicebox. Okay, so Voicebox is an AI chat feature that is here to assist with modeling. You don't have to use it. You can use a blank screen and start to create your classes and relationships by hand. But we want to see how AI can help us. So funny enough, the very  first example that it gives is similar enough to our use case that we could probably just use this. So let's start with this first and see what it does. So you can see here we have Customer. Now we need to add our attributes. And we're going to grab these from our Design document.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=95)** So for Customer, we are going to add State, and that is a string. FullName, which is also a string. And the reason you're putting data types in is because this is a lightweight version of [[Data Validation]] when you add instance data. Then we have our CustID, and that is an integer. Okay, one thing to note is Stardog will make UIDs for each of our nodes and our attributes and our relations and our data that is populating in, but we want to make sure we retain our local IDs. So that's why we're adding in customer ID, even though Stardog is going to be crafting UIDs for us. Now, let's go ahead and see how AI can help us add the attributes for these other two nodes. Okay, so you can see the information that has been added based on the prompt that we've been given. So let's make sure that these are the attributes that we were expecting. ProductID, yep. ProductName, and Price. And then for PurchaseOrder, we have the orderID. We also ask the AI to change the node label
>
> **[3:11](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-1?u=76281980&t=191)** because it said Purchase, but our data is alive with PurchaseOrder. Okay, now that we are in the swing of things, let's move on to the next video where we will populate the full graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (1), [[Data Validation]] (1)
> **CLI Commands:** make (3), node (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** go to (2)
> **Code Identifiers:** orderid (1)
> **Env Vars:** ttoov3 (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)

#### [Setting up our Stardog project, part 2](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=0)** - [Speaker] Next, we're going to add some of the relations and we're also going to be using AI for that. So let's verify that this is what we were expecting and we're validating this off of our design doc. Okay, so that is correct. Now let's add in a few more relationships. So now we are defining that purchase orders have [[Microsoft Products|products]] inside of them. So that looks correct. Now, we have created this path, but one thing we're missing is our review node. So let's go ahead and add that in with its relations. Now, once we put voice box back in its box, I'm going to show how you can use Stardog to help automatically populate a model based on the data that you are loading. You might not want to do this for all of your data, but it's a good example to know. So we have to accept our changes, and then we're going to go in and we're going to grab our file for our customer reviews. And you can see here, this is a mini-form of the ETL within the tool itself. So we can see that the order ID is distinct, the customer ID is not, which is why we decided earlier in the course to change this.
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=94)** It is no longer our main key. We have our review IDs, and then we have our star system. So everything is looking pretty good here. Now, we could just create this as a new data source, but we're going to click into create and map, which means all of this instance data will automatically be mapped to our new node. We are missing our review node. So after we've committed our changes, let's go ahead and add review with all of its information, including its attributes and its relationships. (clicks loudly) Okay, so it did add the relationship that we were looking for, but it forgot about the attributes that we asked it to add. So let's go ahead and ask one more time. There we go. Our review ID is now added, but it forgot stars. So let's go ahead and just add that by hand so we can move on. So that's going to be a decimal. Now, it did not happen in this iteration of using voice box, but sometimes, the AI can take some liberties. So just be cautious. Sometimes, it will pick up on what you're asking, sometimes it doesn't or it adds additional things.
>
> **[3:09](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/setting-up-our-stardog-project-part-2?u=76281980&t=189)** Just verify what you're seeing. Sometimes they're great examples and suggestions, but keep them as suggestions because you always want to verify it's going to meet the needs of your use case. Now we have the model that we've sketched in our design doc. Let's accept our changes, and now we need to populate the model with our instances. So that's mapping our source data or the transform data in our case, into our model. We are on a role. Okay, now let's add in the [[Representational State Transfer (REST)|rest]] of our relations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (3)
> **Env Vars:** etl (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### [Load instances in Stardog](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=0)** - [Instructor] Okay, now we are ready to load the instance data into our model. This is how you make the magic happen. Go to the project resources and start to add those datasets, those individual CSV files that we created earlier in the course. Now, you can add them all together at once, but I find that it's cleaner and easier to do them one at a time. So we're going to start with CustomerReview. And you're going to see the lightweight ETL here. So you can go in and change some things in here if you would like. It also gives you a quick rundown of how distinct everything is, how many records there are, all of that sort of thing. And you can see here, customer ID is not totally unique and distinct. So this is why having the order ID as our key is more efficient, and that's why we made the decision earlier in the course. Okay, so everything looks good here. Now, instead of creating it, which just adds it to the project, we're going to create a map because we already have a class to map it to. So this is the CustomerReview, and we're going to map that into Review. Okay, so we have the class that it is going to map to. Now, we are looking at the information for the mapping. The primary ID that we're using for CustomerReview is RevID.
>
> **[1:34](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=94)** And the label is going to be the RevID. Now, customerReview is related to PurchaseOrder, so let's add that in. And the ID for PurchaseOrder is the OrderID. And if you needed to verify what that looks like, you get a preview. You can also go into the relationship and remind yourself what it's supposed to do and what nodes it's connected to. Now, what this is doing is it is taking the CustomerReview ID and relating it with the customerReview, and what is being reviewed is the PurchaseOrder. And that PurchaseOrder has an ID. Later, we're going to have other information that connects [[Microsoft Products|products]] to these PurchaseOrder IDs. And then we just want to make sure our RevID is mapped to RevID and Stars is mapped to Stars, and those are the attributes. So we're going to accept the changes. Now we need to add more project resources. So let's go and add the remainder of our data. So this is our customer information, and we can see customer ID, full name, and state, and we have our information. And we're going to create and map, and it's mapping to Customers. And Stardog already knew that, which is why it's populated like that. So now we're going to add class or the node that we are mapping our Customer node to. So CustID is the primary identifier.
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=190)** And we want the label to be a full name because that's easier to read. Now, you'll notice that we're not going to fill in this relationship, and that's not because we don't want this information to be part of our model, it's that the data source that we just added does not have the purchase IDs part of the data. This is just the Customer table. There were no order IDs in this dataset, so we'll get that information from a different table. Now, let's verify. State is string, FullName is string, and the CustID is an integer. All of that is correct, so let's accept those changes. Now, we have customers and those customers make reviews, but we don't have anything connecting them in our model. So, let's rearrange things so that they're a little easier to read. We need to connect Customer and Review. So let's go ahead and do that. We can do it by adding a relationship this way, or we can go in and add the relationship here. And we're going to add an authorOf. And that relation is going to be targeted to Review. So it's going to be an outbound. You can see it doesn't really go anywhere, but that's because we need to drag it over to Review. We could have also asked our AI assistant to help us with that. Now that we have this relationship established,
>
> **[4:43](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=283)** we can start to put some mappings in from that. So let's go back to our mapping and we can look at Customer. And you can see now we have this relationship that we can use. So we're going to say it's connected to Review, and we're going to be populating this on Full Name. So, the review is authored by a specific customer name.
>
> **[5:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=308)** Now let's move on to our next file, which is for products. Again, we just want to verify everything is looking good here. All of our information is here. Okay. And let's create and map. And we are going to be mapping this to Product. So here our product ID from the table is what our primary identifier is going to be, but we want to write that out as the ProductName. So this is the product that is going to be defined by the product order having a product associated with it. So we're going to define that elsewhere. We want to make sure our Price, it's not a string, so we want to go in and update that to be a decimal.
>
> **[5:58](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=358)** Our ProductID is an integer. And our ProductName is a string. So those all look good. So we have one more piece of information to add and that is going to be coming from our purchase orders. Okay. Again, we can see that our information is looking good. And we're going to create and map that to our PurchaseOrder. Now, you can map multiple nodes to different datasets when you need to, but for learning purposes, we've made it simplistic and straightforward. So, for PurchaseOrder, our order number is going to be our primary. It's also going to be our label. For customerReview, we're going to leave that blank because the PurchaseOrder dataset doesn't have this information. Our hasProduct will be pointed at Product and ProductID. And Purchased will be pointed at Customer and customer number. And our orderID is an integer. So let's go ahead and accept that. Okay. This is looking a little complicated. It's not, it's actually a very simple and straightforward model, but let's just do a quick verification. So our customer reviews are being mapped to Review.
>
> **[7:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=453)** Our customers are authors of reviews. Our customers are purchasing things through our PurchaseOrder. And those purchase orders our associated with a product. Now, we do not have authorOf in our design document, so we will want to make sure that we add that in. Now, the next step is we need to publish our data so that this information will be written into the underlying graph database and search index that is part of Stardog. And then it will also populate the explorer data visualization and query builder, which we will look into next. Let's create our TTOOv3 as our database. Here is where you could update your IRIs if you would like to. We're just going to leave it as is. We're going to create a new model. And then this is where you can use some of the information we talked about earlier on how you want to update your graph. We're going to do Create new because this is a brand new model. And let's publish. And you can see here our product is not a valid data type. Let's go find out what happened with product. ProductName is a string. ProductID is an integer. But our ProductID has letters and numbers, that's the problem. So let's go in and update this to a string.
>
> **[9:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/load-instances-in-stardog?u=76281980&t=550)** Okay. Now let's see if we can publish this time. Okay, database is correct. It's going to replace the existing model because some of our information wrote in. And you can see here, these are the ones being replaced. Hooray! And every time we make changes, you have the option of downloading the ZIP file, which you should do because that is one way to do your versioning, is to have your backups. Or you can put these into your [[Git]] repo. So, from here, we're going to jump into the next stage of exploring our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Git]] (1)
> **CLI Commands:** make (6), find (2), node (2), git (1)
> **Code Identifiers:** customerreview (3), authorof (2), hasproduct (1), orderid (1)
> **Definitions:** is an  (4), is a  (3)
> **Cross-References:** earlier in (2), go back to (1), we talked about (1)
> **Env Vars:** csv (1), etl (1), zip (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** zip file (1)

#### [Test the load](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=0)** - [Instructor] Now that we have loaded data into our model, we need to review the model and the data to make sure the model we originally created still meets our needs. We can see that model in Explorer. So let's go to Explorer, and you're going to pick the database that we were just creating, which is V3, and now it's populated. So first, you can just visualize it by hitting Visualize, and then you can see everything in your graph. But we want to make sure that the information is populating the model correctly. So, let's start out by doing a search on Texas. Great, so it retrieved three customers that had something to do with Texas. So let's look at the members and look at their details. Yep. They're from Texas, Texas, Texas. You always want to verify a sample of your data to make sure that your extract, transform, and load process went correctly. Now, let's pop around to see if the [[Representational State Transfer (REST)|rest]] of our graph has populated the way we expect. We want to make sure that the flow of data is accurate. So, let's start out with a search for order number three. So you can see purchase order is what's showing up, so let's focus on that. Let's expand by showing all the relationships to check the flow.
>
> **[1:35](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=95)** Okay, so we can see that order number three is a type of purchase order, so that's the entity type. We can see that order number three has a product inside of it, which is the olive oil, lemon-flavored, and we can see which of our customers has made the purchase of the lemon-flavored olive oil through their purchase number three. So this is the correct flow. Let's make sure some of the other data is populating correctly. And you can see here that the price of our lemon-flavored olive oil, we can see that this is the ID. We can see that it is product type that is all accurate. We can also see when we populate Review again that there is a review associated with this purchase order. So, let's look at those details. So, looking at these details, we can see that based on the Stars system, Hunter thought that our olive oil that is flavored with lemon had a 4.5 review, and that's an overall score. We don't know, it's just about that product. That's something that we could further refine our model to be able to determine. Or since the Stars system is such a critical aspect of what we're doing, we could break this out as another node that we can then query across. But for now, this is looking like our model and its flow is accurate. So this helps us make sure
>
> **[3:08](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-load?u=76281980&t=188)** that everything in our design document and the use cases that it is going to support are going to be met. Now, let's test out whether our sales team can query this for their work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (6), node (1)
> **Definitions:** is a  (2)
> **Versions:** 4.5 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Test the query](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=0)** - [Instructor] Okay, so to get started, we're going to go to Explorer, and then we need to open up the database that we just loaded. Okay, so now we can get started. So now we're going to test and run some queries to make sure that our sales team will not be left in the dust. So just like before, we're already in our database, we're going to look for everything Texas. Okay, we're going to get our same three customers, and we've already checked these from the previous video, so we're not going to do that here. But what we can do is expand, and we're going to look at all the relationships. So this is looking at all the information that we have, and we'll just move some things around so it's easier to see. We are now looking at each of the three customers that are from Texas. We can see what they have purchased. We can also see when they have authored a review. So if we wanted to go in and find out what the three people from Texas have purchased, we would just look at the product here is garlic, so that's the garlic flavored, and this was a review based on the Lemon. And looks like Brooke actually did too. Oh, Brooke must be really a big fan of our Olive Oil. So let's see what Brooke has been up to, Lemon.
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=97)** Lemon seems to be popular, and Basil. Okay, so now with a few clicks, we have been able to pop around into the graph and understand what customers from Texas have been purchasing. But our sales team wants to know what is popular or what has a high rating. So while we could explore the graph a little bit more, that's not something that our sales folks maybe want to do on an everyday basis. So instead, we're going to build a query. So what we first want to do is where are we going to start? So we are looking for, remember, our sales folks are based out of states for their regions, so we're going to start with an attribute of state. We're going to say that it equals Texas. So now we're going to look for all customers that are from the state of Texas. Now we need to do this customer has purchased, and we know what they've purchased because of the purchase order. That purchase order needs to have a relationship of customer review so that we can get at the review information. And then that review, we're going to be looking at the stars, and we're going to say greater than or equal to. And remember our business rule, and this is where those business semantics comes in that we've baked into our model,
>
> **[3:10](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=190)** is anything over 4 stars is considered a positive review. So if we wanted to enable our sales team to be able to do this query on a regular basis without having to construct a query themselves, this is how we would start to do that. So we can see here our results are Brooke and Hunter are the two. Remember, we had three to start out with, so the other customer must have had a review that was less than 4. So this is great. We have run that query, but again, our sales team is not going to do that all the time. So let's go back, and let's save this query. So that's the query name. We would want a description. All right, so adding in our description, we can then say we've already run it, so we don't need to. So now what this enables us to do is anytime someone wants to come in and just run this query, they don't need to know anything about the graph. They can do that and get answers, like we just saw. Once we have this as our saved query, we can go in, and we can go in and add this as a Voicebox Prompt. So this is a form of fine-tuning, where you can get the AI that is behind the scenes of Explorer to understand more about the questions and queries that your end users might be submitting. So here we can say. Okay, so if we wanted to fine-tune on good customer reviews from Texas,
>
> **[4:47](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=287)** Texas reviews that are positive, Okay, now, if we wanted to, we could add this as a Spotlight Question. We'll do that for something later. So I'm not going to do that right now. So let's go ahead and save. Now, let's go in and run this one more time and make sure that we can verify the information. So customer review, 4.5. Yep, that meets our business criteria. And good old Brooke really likes our stuff. Wow, 5 stars, okay, and 5 stars. Wow, two 5 stars. Okay, so this is meeting our needs. And you can also break this out like this if it's easier to see, or you can download it if there's something else you want to do with this information. Now, let's say we wanted to see all the bad reviews, not just from Texas, but from everywhere. So let's go back in and build a query for that. Now we're not looking at any specific customers, so instead, we're just going to look at Customer, Purchased, and then they have the purchase order, and then PurchaseOrder, customerReview, Review. We have our review, and we're going to look at the stars, and we're going to look at anything less than 4,
>
> **[6:24](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=384)** because, again, that's our business value. Wow, that's actually not that many. We have two. Okay, let's go and verify. Sydney really doesn't like our stuff. Okay, Sydney gave us mediocre, 3. Okay, and who else do we have? Nolan. Ooh, Nolan really didn't like us, number one. So as a sales crew, we could then go in and investigate not just these reviews, which honestly you could add that to the model too so that you have everything in one place, or you could start to really investigate everything about their visit, who was there, who was on staff, what were the weather conditions, all of these different things, so you get a full, you know, customer 360 or a full view of what that customer is experiencing to give that type of review. So this is something that we would probably want our sales team to be able to access. And so let's go back to our Query Builder. Let's save this as Negative-Reviews,
>
> **[7:36](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=456)** and we're going to add that to Voicebox. And what poor reviews do we have? Now, let's say that we want to add this as a Spotlight Question. So let's add a new question, so we can make it a little nicer to see. We're going to call these Business Opportunities if I spelled Opportunities correctly. So we're going to call this Business Opportunities, and we're going to make that a Spotlight Question. We're going to Save. Now, what we have just done is we have added this query to the main Voicebox area on Stardog. Okay, so now we're going to go in to see how our [[Semantic Search]] will pick up on the queries that we just created. So we're going to go to Voicebox, and you can see here is our saved query that we have created as a Voicebox-specific query. So we're going to go ahead and run, and honestly, you could just ask questions of your model at this point, but we're demonstrating how you can do things that are repeatable. And oh, (laughs) so we do have the right customers, but do you see what the AI just did? It's confusing the review number, which is the rev ID, with the actual review. So you're seeing purchase of 2, right? So that's the purchase number, and then a review of 5. So you know, technically it is review ID 5,
>
> **[9:15](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=555)** but if we go into the data, you can see what we did in the model is accurate. It's just the AI didn't totally understand it. So you have a few options with this. You can either go in and break stars out as a separate node and then have that relate to the review. And honestly, you might want to do that because we are using the stars so much in our query logic. Or you could start to do more refinement on the AI. You kind of have to decide what is going to be worth your time, or you could just use a different AI and connect your data model from Stardog to that AI instead, and then just fine tune it that way. The other things you're going to see here is you can click into any of these and find all your information, about the information that we had in our graph, and you can also see the query, so you can test the logic and make sure that it is as you expected. Okay, so that is how you would set up AI querying the graph directly to get answers. But you can also see how the AI still has some drawbacks, but that's where you can make sure your model is still accurate, and you can either fine-tune your model or the AI to get the exact thing that you're looking for. Even though this is still technically correct, it's just a little misleading on how it's being phrased. All right, so now that we have this,
>
> **[10:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/test-the-query?u=76281980&t=649)** we're going to move into how do you use triples outside of Stardog with your AI?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Search]] (1)
> **CLI Commands:** make (6), find (2), node (1)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** customerreview (1)
> **Versions:** 4.5 (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)


### 6. Using the Knowledge Graph with AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Architecture](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=0)** - [Narrator] In this chapter, we'll explore how to use the Knowledge Graph with AI. To start, most graph tooling can slot into existing data architectures and these often include ETL tools, which can be repurposed to load into the graph storage that you select. If you are using a graph database that also has ETL, that ETL will load in from your existing [[Data Storage]]. Making sure your data is as complete and as up to date as possible is critical for high quality and trustworthy answers that you can depend on. This is why doing regular gap analysis and assessing your user queries is important to make sure the model and the data are still supporting your needs. Your semantic data can be used to power things like recommendation systems or chat bots, can be used for grounding your AI via Rag, or it can be used traditionally for data analytics and [[Information Retrieval]]. In those cases, the AI would call your graph with your query it was given. It can perform a fuzzy search of the entities it picks up on from the query or you can have a pre-processing step where the entities in the query are first resolved to a specific UID in your graph and that helps you ensure the correct context is retrieved. Once the entity is found in the graph, all the triples associated with it can then be ranked for relevance based on the context from the query either from your native search engine
>
> **[1:32](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/architecture?u=76281980&t=92)** and/or the AI you were using can then re-rank the entities and the information associated with them for the query context. And then, the triples that are the most relevant are searched back up to the AI for grounding or answering questions. When using AI to access and investigate data, the AI can retrieve from structured and [[Unstructured Data]]. So, both can be assessed. But you will need to make sure that AI can consult your graph data in the way you are expecting. Now, let's dig into that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Information Retrieval]] (1), [[Unstructured Data]] (1)
> **Env Vars:** etl (3), uid (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Query options](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=0)** - [Instructor] As we've stated previously, when it comes to AI, semantic context is what supports a precise and accurate AI application. But AI can also be used to help query your graph, especially when the graph is being used by other applications that are AI-enabled, like search, recommendations and analytics. Let's show this. Most LLMs know the graph query languages, so you can ask for a SPARQL or a Cypher query for all customers from Texas with reviews of four stars or higher, and the AI can then construct the query that you can use. This can be a canned prompt that connects to a call to the graph API, or you can set it up so that the AI will call the API with that query when a salesperson needs the information for whichever AI chat experience or analytics experience that they are using. This can be a canned prompt connected to a call that calls the API for your graph. Or you can have the AI call the API with the query when sales or the product managers or whoever needs to use this information in whatever AI experience they are using, like chat or analytics. In both examples, you can see the importance of having a known schema that the AI can interpret. It is also helpful to fine-tune your AI on your model structure
>
> **[1:33](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/query-options?u=76281980&t=93)** and give example queries so it has a better understanding of your experience. And we've seen that from our previous example with Stardog's Voicebox. For us, we have a very thin graph. But on a fully formed graph with lots of detail about customers, their purchases and their reviews, this AI-driven query approach will give our sales team plenty of information to start brainstorming ways to improve customer experience. But queries are not the only place where graph and AI meet. Let's go into using graph data in your AI for better AI responses next.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), sparql (1)
> **Speakers:** - [instructor] (1)

#### [Using a knowledge graph with AI](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=0)** - [Instructor] Referring back to our diagram for rag, let's look at some example prompts where the retrieved triples are used for grounding. First, we're going to go into Stardog and we're going to download a database of triples. So for you, I have already put that into your course materials. Going to go into Stardog Studio and we're going to grab our database and we're going to export all. And I like RDF best, but you can download it in anything that you would like. Okay, so looking at the information that we have, let's take a sample of one of the questions that we would like our chat bot to answer. We are going to be looking at has Jackie purchased lemon flavored olive oil from us? When we open our triple file, we're going to search for a triple that is talking about Jackie. Now this is something that is stored about Jackie. This is all of the [[Metadata]] about Jackie. These are all statements made about Jackie. This is her preferred label or her full name. We have which state she's from and which ID she has in our external systems to Stardog. Now we can see that Jackie has made a few purchases with us. So if we look for purchase order number one,
>
> **[1:37](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=97)** we can find out what is in purchase number one. And you can see here that it was captured in a review and we can see this is the product that this order contained. And now let's look for a statement about this product. Wow, this is a popular product. It's showing up in a lot of places, but you can see here these are all purchase orders. So, we don't need a purchase order because that's not the context we asked. We asked about Jackie and her purchases. So here we can see that this is the product information. So we can see that this product is actually our lemon flavored olive oil. We can see how much it costs. We can verify that this is really the product ID and then we can see the product name. So by going through each of these, we are doing one hop out from Jackie. So when we go from Jackie to her purchase order, that's one hop. If we go from the purchase order to the product that it contained, that's two hops. And the third hop is when you look at what the name of that product is. But that's not really a hop because that's an attribute. So we're really only looking at two hops out. Hops are when you are traversing the graph. Now you notice when we were searching for this product number, this product showed up in a lot of different contexts. So without having a UID,
>
> **[3:13](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=193)** our AI would maybe get confused as to what information we're really looking for, and it would be a lot more difficult to do analytics because this information would not be readily contained with a specific UID, which is the other benefit of using semantic [[Knowledge Graphs]]. This process of finding an entity and following its graph traversals, to retrieve the triples associated with Jackie and her purchase of lemon olive oil is how an AI would query and walk the graph. Now let's look at the triples that we were just walking to get to this step. You can see here that I have highlighted each of the steps that we took to get to the next round of statements, describing the context that we need to be able to have a high confident answer from our AI using these triples. But we don't need all the graph traversal information to ground our AI. So let's look at a prompt to clean that up. The reason we want to clean this up is not only do we not need all of that additional context, we've already retrieved on the context that we don't need it from this point forward. It's also expensive to have additional [[Tokens]] that you maybe don't need in the AI prompt. So that's the other reason we're going to take those out. So here we are just prompting our AI to convert the triples into a [[JSON]] like format, so we can use that in our grounding. If our AI had access to all customer data
>
> **[4:49](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/using-the-graph-with-ai?u=76281980&t=289)** and be cautious here, you want to make sure you are using a local LLM or your LLM license and guardrails, protect personal information and the other things you need to be protective of when you are using AI. But if your AI did have access to the customer data, it should be allowed to have, it might not get the context or it might get confused or pick the wrong Jackie if we have many of them in our system. This is why having our business context baked into our AI through semantics and being able to walk the graph for even more context building leads to more accurate context aware and trustworthy AI responses. So you can see here, this is how we would ground our response off of all of that important information to have the highest quality answer, that yes, Jackie did indeed purchase lemon flavored olive oil from us. With this approach, our sales teams now have a few different options to effectively use AI to identify untapped opportunities for customer satisfaction and critically assess what could be done to better move forward with new product offerings, all without having to worry about complicated data or how to use the AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Knowledge Graphs]] (1), [[Tokens]] (1), [[JSON]] (1)
> **Env Vars:** uid (2), llm (2), rdf (1), json (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your learning journey](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/knowledge-graph-data-engineering-for-generative-ai-use-cases/continuing-your-learning-journey?u=76281980&t=0)** - And that's a wrap. You've just unlocked the core skills to kick off your own knowledge [[Data Engineering]] journey, and start building [[Knowledge Graphs]] that power smarter, more context-aware AI. Now the real fun begins. What will you build next? Maybe you'll enhance your model with AI-extracted keywords, or create semantic queries that help you and your team surface insights they never thought possible. Imagine your sales team instantly finding feedback that matters most, because you design the system to do it. Either way, you now have the skills and knowledge to make it real. If you want to follow along with me and AI, check me out on YouTube or connect with me on [[LinkedIn]]. Also, make sure to explore my other LinkedIn learning courses. Lastly, remember to dive into the Exercise Files as you continue your learning journey for more inspiration. Okay, so with that, good luck, have fun, and I'll catch you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Data Engineering]] (1), [[Knowledge Graphs]] (1)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1), remember to (1)
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