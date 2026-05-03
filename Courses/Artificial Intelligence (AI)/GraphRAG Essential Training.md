---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: graphrag-essential-training
url: "https://www.linkedin.com/learning/graphrag-essential-training"
duration_minutes: 99
duration: 1h 39m
level: Intermediate
updated: 7/10/2025
learners: 29611
skills:
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Knowledge Graph Augmentation
  - Knowledge Graphs
  - GraphRAG
exercise_files: true
github: "https://github.com/LinkedInLearning/graphrag-essential-training-3981041/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFi9QampvwPSA/learning-public-crop_675_1200/B4DZetUdRvH4Ak-/0/1750959511423?e=2147483647&amp;v=beta&amp;t=of_oOKWXbCHekfDQV4BVnJvauTZd6DfRJGRwrabG1bo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Explore AI for Data Engineering]]'
prev_courses:
  - '[[Vector Databases in Practice- Deep Dive]]'
next_courses:
  - '[[Advanced RAG Applications with Vector Databases]]'
path_nav: '[{"path":"Explore AI for Data Engineering","position":7,"total":8,"prev":"Vector Databases in Practice- Deep Dive","next":"Advanced RAG Applications with Vector Databases"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/knowledge-graph-augmentation
  - skill/knowledge-graphs
  - skill/graphrag
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/GraphRAG%20Essential%20Training.md)

![GraphRAG Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQFi9QampvwPSA/learning-public-crop_675_1200/B4DZetUdRvH4Ak-/0/1750959511423?e=2147483647&amp;v=beta&amp;t=of_oOKWXbCHekfDQV4BVnJvauTZd6DfRJGRwrabG1bo)

# GraphRAG Essential Training

> This beginner-friendly course introduces the fundamentals of GraphRAG (Graph Retrieval-Augmented Generation), a cutting-edge technique that combines knowledge graphs with generative AI to enhance contextual relevance and precision. Designed for professionals and students new to GraphRAG, the course covers key concepts, including graph structures, nodes, edges, and relationships, as well as practic

> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training) | 1h 39m | Intermediate | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Prevent GenAI apps from hallucinating](#prevent-genai-apps-from-hallucinating)
  - [An example of knowledge graphs at work in AI](#an-example-of-knowledge-graphs-at-work-in-ai)
  - [Codespaces explainer video](#codespaces-explainer-video)
- [**1. Graphs Made Simple: Understanding the Basics**](#1-graphs-made-simple-understanding-the-basics) (7 videos)
  - [What is a graph?](#what-is-a-graph)
  - [Recognizing graphs in everyday life](#recognizing-graphs-in-everyday-life)
  - [Why are graphs useful?](#why-are-graphs-useful)
  - [Nodes, relationships, and properties](#nodes-relationships-and-properties)
  - [Graphs vs. traditional data structures](#graphs-vs-traditional-data-structures)
  - [Knowledge graphs: Connecting information](#knowledge-graphs-connecting-information)
  - [How graphs power AI](#how-graphs-power-ai)
- [**2. Getting Started with Graph Tools**](#2-getting-started-with-graph-tools) (8 videos)
  - [What is a graph database?](#what-is-a-graph-database)
  - [Introduction to Neo4j](#introduction-to-neo4j)
  - [Setting up Neo4j](#setting-up-neo4j)
  - [Exploring the Neo4j browser](#exploring-the-neo4j-browser)
  - [Cypher basics: Writing your first queries](#cypher-basics-writing-your-first-queries)
  - [More cypher: Retrieving nodes and relationships](#more-cypher-retrieving-nodes-and-relationships)
  - [Connecting Python to Neo4j](#connecting-python-to-neo4j)
  - [Testing your setup with Cypher queries](#testing-your-setup-with-cypher-queries)
- [**3. Building Your First Knowledge Graph for Graph Retrieval-Augmented Generation (GraphRAG)**](#3-building-your-first-knowledge-graph-for-graph-retrieval-augmented-generation-graphrag) (8 videos)
  - [Introduction to Retrieval-Augmented Generation (RAG)](#introduction-to-retrieval-augmented-generation-rag)
  - [How RAG works with vector embeddings](#how-rag-works-with-vector-embeddings)
  - [Improving your RAG with graphs: GraphRAG](#improving-your-rag-with-graphs-graphrag)
  - [Overview of LangChain](#overview-of-langchain)
  - [Key concepts in LangChain for graph workflows](#key-concepts-in-langchain-for-graph-workflows)
  - [Populating a knowledge graph into Neo4j using LangChain](#populating-a-knowledge-graph-into-neo4j-using-langchain)
  - [Challenge: Query your knowledge graph with Cypher](#challenge-query-your-knowledge-graph-with-cypher)
  - [Solution: Query your knowledge graph with Cypher](#solution-query-your-knowledge-graph-with-cypher)
- [**4. Connecting Knowledge Graphs to Generative AI**](#4-connecting-knowledge-graphs-to-generative-ai) (7 videos)
  - [Creating a GraphRAG pipeline with LangChain to query your data](#creating-a-graphrag-pipeline-with-langchain-to-query-your-data)
  - [Enhancing your knowledge graph with richer data](#enhancing-your-knowledge-graph-with-richer-data)
  - [Using knowledge graphs in a GraphRAG pipeline](#using-knowledge-graphs-in-a-graphrag-pipeline)
  - [Comparing the GraphRAG results to a traditional vector-based RAG](#comparing-the-graphrag-results-to-a-traditional-vector-based-rag)
  - [Evaluating your GraphRAG pipeline](#evaluating-your-graphrag-pipeline)
  - [Challenge: Evaluate your GraphRAG application](#challenge-evaluate-your-graphrag-application)
  - [Solution: Evaluate your GraphRAG application](#solution-evaluate-your-graphrag-application)
- [**5. Putting It All Together: Creating a Question-Answering Bot with GraphRAG**](#5-putting-it-all-together-creating-a-question-answering-bot-with-graphrag) (2 videos)
  - [Introduction to capstone project](#introduction-to-capstone-project)
  - [Walkthrough of capstone solution](#walkthrough-of-capstone-solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with knowledge graphs, GraphRAG, and GenAI](#continuing-on-with-knowledge-graphs-graphrag-and-genai)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Prevent GenAI apps from hallucinating](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=0)** - Have you ever wondered how to keep your [[Generative AI]] applications from hallucinating so much? Let me show you how to create a knowledge graph that you can use in retrieval augmented generation or RAG to deal with those annoying hallucinations. Even if you know nothing about graphs, I'll show you how to create a knowledge graph in a graph database from unstructured text. Then you can use it with common [[Generative AI|gen AI]] tools in [[Python (Programming Language)|Python]] to create a graph RAG that will power a real application all in a single afternoon. I'm Claire Sullivan and I've been working in [[Data Science]] for more than two decades. If you're ready to apply this powerful approach to your data, then let's get this graph party started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Generative AI|Gen ai]] (1), [[Python (Programming Language)|Python]] (1), [[Data Science]] (1)
> **Env Vars:** rag (2)
> **CLI Commands:** python (1)
> **Speakers:** - have (1)

#### [An example of knowledge graphs at work in AI](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=0)** - Have you ever asked a [[Generative AI|Gen AI]] chatbot a simple question and it just made something up? That's what we call a hallucination, and yeah, it's a problem. Let's say you ask an AI, "How many moons does Jupiter have?" Simple question, right? But the answer depends on when you asked. [[Large Language Models (LLM)|Large language models]], or LLMs, that power chatbots have access to a limited set of facts, and those facts can be outdated, and new moons are being discovered around Jupiter all the time. So the answer you get back from the chatbot depends on when the LLM was trained. One way to fix that, feed the app, real up-to-date facts. That's what retrieval augmented generation, or RAG, is all about. Instead of guessing, the chatbot checks its sources first. But here's the catch. If you ask why the number keeps changing or who discovered the latest moons, a simple document search might not be enough. That's where [[Knowledge Graphs]] shine. They don't just store facts, they link them together, like who discovered which moon, when, using which telescope, or during which mission. Now we're setting up something where Gen AI can tell a story, not just report a number. Gen AI with connected data makes smarter choices. RAG gives it facts. A graph gives it context. And what is really cool is that when you combine them, you get fewer hallucinations. So say you're building an app for astronomy students.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=95)** With just the LLM, the chatbot might list old moon counts, but with a graph of moon discoveries and linked telescope missions, it can explain why the number grew. How about another example? Suppose you're working in medicine and your patient gave you a list of symptoms. But a graph linking symptoms to diseases, drugs, and patient history, now you're starting to be able to create some real insights. In this course, I'll show you how to build and use these knowledge graphs with real Gen AI tools. And you don't even need to be an expert in astronomy or medicine. We will use some basic [[Python (Programming Language)|Python]] and a simple graph database to make it happen. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (4), [[Knowledge Graphs]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** llm (2), rag (2)
> **CLI Commands:** python (1), make (1)
> **Speakers:** - have (1)

#### [Codespaces explainer video](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=0)** - [Instructor] In this course, we'll be using [[GitHub]] [[Codespaces]] as our coding platform. To get started with it, navigate to the course GitHub repository in your browser. From here, you'll click on the green Code button, select the middle tab called Codespaces, and then click the green button that says Create codespace on main. After a short period of time, you'll get something that looks like VS Code pop up in a tab in your browser. It has all of the code from the repository, plus is loaded with all of the [[Python (Programming Language)|Python]] packages we'll use for the course. While Codespaces is building, we can create our API key for our favorite LLM. I'll use OpenAI's [[ChatGPT]], but you can use whatever LLM you like. To create an [[OpenAI API]] key, go to platform.[openai.com](https://openai.com) and either log in or create a new account. Once you're here, in the search tab, type api key. Next, click Create new secret key. Give it a name, select the default project, and select Create secret key. Once that key is created, copy it and then paste it into the .env file located in your Codespaces. Now we're ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (4), [[GitHub]] (2), [[Python (Programming Language)|Python]] (1), [[ChatGPT]] (1), [[OpenAI API]] (1)
> **UI Navigation:** select the (2), navigate to (1), click on (1), go to (1)
> **Env Vars:** api (2), llm (2)
> **Tools:** github (2), vs code (1)
> **CLI Commands:** python (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Speakers:** - [instructor] (1)


### 1. Graphs Made Simple: Understanding the Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a graph?](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=0)** - Those in the graph community have a saying, graphs are everywhere, and they're not wrong. Graphs are the power behind social networks, search engines, and recommendation systems. But what exactly is a graph and how do you know if you have one? Simply put, graphs are things connected in some way to other things. Imagine a group of people. If we list only their names, that's just a collection. But if we describe who knows whom in that group, we've added connections. That's a graph. Now, a list of cities is not a graph, but if we add which cities have roads connecting them, we have a graph. Another example would be a set of words such as a document. A set of words is just text, but if we connect those words based on their meanings or relationships, we have a graph. The things that make up a graph, whether they're people, cities, words, or something else, are called nodes or vertices. The connections between those things are called edges or relationships and are what makes graphs useful. These relationships could be anything from friendships to routes on a map to related concepts, as you'll see in the next video, graphs help us focus on the relationships between things. They don't just store information, they show how things connect. To check if you have a graph, ask yourself three questions. First, do I have a set of things?
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=93)** Second, are some of those things connected to other things? And third, do I care about those connections? In [[Generative AI|Gen AI]], graphs help provide context to your [[Large Language Models (LLM)|large language models]], or LLMs, because they show how different concepts relate. I'm going to show you how using graphs through an approach called graph retrieval augmented generation, or [[GraphRAG]], can reduce LLM hallucinations. That's when it just makes up answers. This simple thing can make your Gen AI application much more accurate. Next, let's look at some graphs that can be found in the world around us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[GraphRAG]] (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), such as (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - those (1)

#### [Recognizing graphs in everyday life](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=0)** - [Narrator] You probably don't think about it, but you interact with graphs all the time. Every time you scroll through social media, get directions on your phone or binge watch Netflix, there's a graph working behind the scenes. Think about your social networks like [[LinkedIn]]. The very use of the [[Microsoft Word|word]] network is a hint that you're interacting with a graph. On social media, you're connected to your friends, they're connected to their friends, and it just keeps going. That web of connections is pure graph magic. Did you ever wonder how the GPS on your phone finds the fastest way home? It treats the roads as edges between two nodes, which are the intersections, and it's able to figure out the fastest way between nodes through fancy graph math. Here's another one. Have you ever gone from reading one article on the web to another and then another by clicking through links and then you completely forgot where you started from? That's because the internet is basically a huge web of connections. Every website links to others forming a giant, you guessed it, graph. Search engines use this structure to figure out what's important and help you find what you're looking for. Another big graph is your brain. In it, you have tons of neurons, constantly firing signals, forming a giant web of connections. When you learn something new, your brain rewires itself. Kind of like adding new nodes and relationships to a graph. Let's look at one last cool one, language.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=95)** Have you ever used auto completion on your phone and wondered how it predicts the next word? It works because words don't exist in isolation. They're connected through meaning, grammar rules and common uses. Language models and AI chatbots use graphs to understand the relationship between words, which helps them predict and generate text that makes sense. As we get deeper into the course, we're going to talk a lot about that as we learn to create our own graphs of language that will be used for [[GraphRAG]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[LinkedIn]] (1), [[GraphRAG]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** gps (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [narrator] (1)

#### [Why are graphs useful?](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=0)** - [Instructor] The world is full of messy, interconnected data. Graphs help us organize it. Whether you're tracking relationships, linking webpages, or connecting concepts with a bunch of documents, graphs reveal structure in your data in ways that other data models can't. Ever had a social media app suggest a connection that surprised you? Maybe a friend of a friend who happens to work in your industry? That's a graph in action, surfacing indirect relationships you may not have noticed on your own. One of the great things about graphs is how easily they adapt to change. Traditional [[Databases]], like [[SQL]], store data in fixed tables with rigid relationships. If you need to add a new connection, say, linking customer reviews to your product manuals, you might have to redesign the schema, update queries, and migrate data. With graphs, it's simple. New data just creates new nodes and edges. No restructuring. No breaking existing queries. Just a more connected data set that grows naturally. If a new research paper links to older ones, the graph expands effortlessly to reflect those relationships. This flexibility makes graphs especially powerful for understanding context. A single piece of data, a product review,
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=95)** a legal document, a research paper, doesn't mean much in isolation, but when connected to related documents, people or concepts, patterns start to emerge. Graphs don't just store knowledge. They structure it in a way that makes it easy to navigate. So why does this matter For [[Generative AI|GenAI]]? One of the biggest challenges with LLMs is that they don't actually know anything. They predict words based on probabilities. This means that they can easily hallucinate, making up information that sounds real but isn't. That's where [[GraphRAG]] comes in. Instead of relying on the model's built-in knowledge, we use a graph to provide structured, fact-based information. The graph helps the LLM retrieve the most relevant context, reducing hallucinations and making responses more accurate. By combining the flexibility of graphs with the power of GenAI, we get a system that organizes knowledge in a smart way, connects the dots, and helps the system give better, more reliable answers. And I'm going to show you how to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (2), [[Databases]] (1), [[SQL]] (1), [[GraphRAG]] (1)
> **Env Vars:** sql (1), llm (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Nodes, relationships, and properties](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=0)** - Up until this point we've been talking about graphs in a pretty generic sense, defining key terms and showing some examples of some cool graphs you interact with on a daily basis. Now let's start getting into the details on how to make a useful graph. Nodes are the real-world things in the graph, and the more descriptive they are, the better. For example, I could say that one node had a type of Person and that would convey some information, but I'd have better context on that node if I could say the node was also of type CEO. Relationships are more than just the connections between the nodes though. They carry meaning. For example, think about the people you know. A relationship called Friends With tells you one thing about your interaction with that person, but a relationship called Works For tells you something completely different. To make the graph more meaningful, we can also add details to the nodes and relationships called properties, which are the key-value pairs that capture additional information. While properties are not required, they're helpful because they store other pieces of information on the nodes and relationships other than just basic identifiers like an ID. A common example of Properties From node
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=94)** might be a Person node with a name and birthday both being properties. For relationships, we could think of an author writing a book, and the relationship property could be the year they wrote the book. Properties are what make a graph more interesting because they allow you to describe the nitty-gritty details of your nodes and relationships. They can be anything you can think of, and they can help you make better queries by filtering on the properties. For example, you can ask more interesting questions like, "Who works for XYZ Inc. that was born in 1980?" You can see that when I click on the nodes, the birthday property shows up and I can see who meets that condition. By combining nodes, relationships, and properties, you get a graph that isn't just about structure, it's about meaning. That's why graphs are so powerful for things like [[Generative AI|GenAI]]. They can provide the context and tell the LLM why something is the way it is. As we move forward, we're going to create graphs of concepts called [[Knowledge Graphs]] from raw text. In this case, our nouns will be our nodes and our verbs will be our relationships. The adjectives and adverbs become our properties. These knowledge graphs will be the basis for our [[GraphRAG]] moving forward and allow us to build smarter GenAI applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (2), [[Knowledge Graphs]] (2), [[GraphRAG]] (1)
> **CLI Commands:** node (5), make (4)
> **Env Vars:** ceo (1), xyz (1), llm (1)
> **Analogies:** for example (3)
> **UI Navigation:** click on (1)
> **Speakers:** - up (1)

#### [Graphs vs. traditional data structures](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=0)** - [Instructor] You might be wondering why we'd want to use a graph versus any other data structure. After all, we could use anything from tables, trees, lists, or dictionaries to organize this data. What makes a graph so special? Let's start our discussion about [[Data Structures]] with a list, such as a linked list or an array. Lists store items sequentially, which makes them efficient if you're dealing with data that follows some sort of ordered access or storing sequences. Dictionaries are nice because they provide fast lookups for key value pairs, making them great for direct access to data, but they're limited to retrieving individual data points. Graphs on the other hand are non-linear, which makes them better suited for data with complex interconnections, especially if those connections start branching. Graphs can beat out dictionaries because they focus on relationships. This means that it's much easier to have a single lookup return not just a data point, but the other nodes connected to it as well. Trees are a kind of graph and are interesting because they are a hierarchical structure with a single parent and one to many child nodes. They're pretty easy to traverse too, so long as all you need to do is follow a strict path. But what happens if you want to hop from one part of the tree to another and there's no clear path there? This is where trees become a problem.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=95)** Graphs are more flexible because nodes can connect to many other nodes. This means that they can support more complex relationships than a hierarchy. Finally, what about tables, such as [[Relational Databases]] like [[SQL]]? Tables store their data in rows and columns with a predefined schema, making them great for working with structured data. But what happens if you want to explore relationships between data across multiple tables? In that case, you have to do a lot of SQL joins across different tables to create those relationships, and SQL joins are costly. If you find yourself in the space of needing a lot of SQL joins, this is one of the biggest hints that you have a graph problem. Graphs store relationships as first class entities, so edges are not just implicit connections between data points, but are explicitly defined and can hold their own properties. This makes them very efficient for traversing complex networks in a single query. They really shine at providing an intuitive way to model and analyze interconnected data that traditional data structures struggle with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Data Structures]] (2), [[Relational Databases]] (1)
> **Env Vars:** sql (4)
> **Definitions:** means that (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Knowledge graphs: Connecting information](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=0)** - [Instructor] Up until now, we've discussed [[Knowledge Graphs]] as a type of graph, but we haven't yet talked much about what they really are. A knowledge graph is a graph where each node in the graph represents a concept such as a person, place, or event. The edges define how those concepts are related. For example, think about what you know about your hometown. You might think about a particular place in that town. Once you think about that place, you might think about your friend who works there. Then you might think about that restaurant in town that you visited with that friend. That, of course, leads you to think about that wonderful dish you ordered there for dinner last time. As you can see, your brain has started linking different things about your hometown together. And what is it that you just created? It's a knowledge graph. Here's a more detailed example of a knowledge graph. If you were to use this graph, you can see it would be easy to ask questions like, What are some places Claire could visit while in New York City, or what show could Claire go see after dinner at the Starlight Diner? [[Generative AI|GenAI]] systems are made better by using knowledge graphs to ground their answers in structured knowledge when done right, combining LLMs with knowledge graphs can help you assign meaning to different terms by considering the contextual relationships of the words. For example, if I were talking about the [[Microsoft Word|word]] apple,
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=94)** I could be referring to the computer, like in number one as you see on screen, or the fruit, like in number two. By using a knowledge graph, your GenAI application will be able to understand the difference and provide you with relevant answers. In [[GraphRAG]], knowledge graphs help improve the accuracy of your results and reduce hallucinations by making sure the retrieved facts are logically connected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (4), [[Generative AI|Genai]] (2), [[Microsoft Word|Word]] (1), [[GraphRAG]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How graphs power AI](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=0)** - In the same way that maps and GPS help us navigate cities, [[Knowledge Graphs]] help [[Generative AI|gen AI]] organize and retrieve information efficiently. Instead of treating text as isolated words, graphs provide structured pathways between concepts, helping gen AI understand relationships between things. Graphs structure data so that AI can find the most relevant and semantically related information. Instead of scanning a massive amount of text, AI can traverse graph connections to locate precise answers quickly. The problem is when gen AI hallucinates. AI hallucinations are like a friend confidently giving you the wrong directions. It's hard to tell when your friend is doing that because they're so confident, but graphs act like GPS, ensuring that AI sticks to verified paths rather than guessing based on incomplete information. When we use additional information to augment an LLM's knowledge to minimize hallucinations, we call this [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]], or RAG, and it turns out that graphs are really great for RAG. There are a few common ways you can do RAG. And throughout this course, I hope you'll see that using graphs for RAG can be more accurate. That's because it's based on using the graph's structure to verify information before generating an answer. Imagine you ask an LLM, "Who wrote 'To Kill a Mockingbird'?" Instead of scanning an entire database,
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=94)** AI follows a graph linking books, authors, and historical context to retrieve Harper Lee quickly and accurately. Another example is with email summarization. If your email suggests scheduling a meeting based on a message saying, "Let's catch up on Friday at 3:00 PM," AI is making a suggestion using graphs, linking your contacts, calendars, and time preferences. Graphs support AI reasoning by enabling inference, deriving new knowledge from existing relationships. For example, if a mango is a type of fruit and fruits contain vitamins, AI can infer that a mango contains vitamins. Graphs don't just store facts, they also help AI reason, allowing it to infer new information from existing connections. By linking related concepts, graphs enable AI to make connections that might not be obvious in traditional [[Databases]], improving overall contextual awareness of your AI applications. This structure makes graphs an essential tool for making AI not only more accurate but also more interpretable and reliable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (3), [[Knowledge Graphs]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Databases]] (1)
> **Env Vars:** rag (4), gps (2), llm (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** we call this (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Ports:** :00 (1)
> **Speakers:** - in (1)


### 2. Getting Started with Graph Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a graph database?](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=0)** - [Narrator] So what exactly is a graph database? It's a type of database designed to store and work with relationships between data in a natural way. Unlike traditional [[Databases]] which focus on storing data in rows and columns, graph databases focus on how things are connected. In a relational database like [[SQL]], you store data in tables and define connections. You often need joins, which can slow things down as your data grows. Graph databases, on the other hand, store relationships directly, making it faster to find and analyze connections. Think about if you have a database of friends, where each row represents one person who's friends with another person. If you wanted to find all friends of a friend in a relational database, you would have to write a complex query with multiple joins. In a graph database, you just follow the connections, like tracing a path on a map, which is much faster and easier. Unlike [[Relational Databases]] where connections are inferred through foreign keys and joins, graph databases store relationships directly as part of the data. This really speeds up your queries because the database doesn't have to compute connections. So instead of searching through massive lists of data-defined connections, graph databases use index-free adjacency, meaning each node knows exactly which node it's linked to. This is especially fast as your graph grows bigger.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=94)** Another great thing about graph databases is that the structure is schema flexible, meaning you don't have to define strict table relationships in advance. You can just add new node types and relationships as needed, making graph databases ideal for evolving and complex data models. So you see how graph databases make it easier to store, query, and analyze relationships between data. Instead of forcing data into rigid tables, they let connections work the way they do in real life, which is why they're becoming so important in AI and modern applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (8), [[SQL]] (1), [[Relational Databases]] (1)
> **CLI Commands:** node (3), find (2), make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Introduction to Neo4j](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=0)** - [Instructor] In this course, we'll be using the [[Neo4j]] Graph Database for our [[GraphRAG]]. Neo4j is a native graph database, which means it stores the data as nodes and relationships instead of rows and columns. This matters for [[Generative AI|Gen AI]] and GraphRAG because in these applications, relationships between concepts, entities and documents are just as important as the entities themselves. So, using a graph database like Neo4j lets you store, query and analyze these relationships at scale, and in real time. You'll mostly interact with Neo4j using Cypher, a graph query language. Cypher is a bit like [[SQL]], but optimized for graph data. Instead of writing complex joins, you'll use a pattern-matching approach that feels more intuitive for working with connected data. Neo4j offers built-in graph visualization tools in the Neo4j Browser, where you can explore nodes and relationships interactively. For more advanced visualization, you can use tools like Neo4j Bloom, which you can check out on your own. There are a few ways to set up a Neo4j instance. We'll use the easiest way, which is Neo4j AuraDB, a fully managed cloud service. As we get started, we'll be interfacing with AuraDB in the web browser through the Neo4j Browser, but once we get started writing our own applications,
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=94)** we'll be connecting to the database programmatically with the [[Python (Programming Language)|Python]] driver through the Bolt protocol. By the end of this course, we'll have created a fully functioning Gen AI application using LLMs and GraphRAG, written in Python, connecting to Neo4j AuraDB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (11), [[GraphRAG]] (3), [[Generative AI|Gen ai]] (2), [[Python (Programming Language)|Python]] (2), [[SQL]] (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Neo4j](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=0)** - [Instructor] Let's start by using our web browser to navigate to login.[neo4j.com](https://neo4j.com). Here, you'll create a free account and log into Aura. Now, let's create a free AuraDB instance. To do this, click on Create Instance, then select AuraDB Free. This will then generate a database instance and create your login credentials. This is the one and only chance you'll have to get them, so you definitely want to download them to your computer. We'll need them a lot as we start coding. It will take a few minutes for the instance to be created and startup, so grab a cup of coffee and prepare to get graphing. Great, now we have our database instance running, so let's get into it by clicking Connect and Query. What you see now is the [[Neo4j]] Browser. This is similar to other database browsers in that it's a user interface where you can directly query the database. You see here on the left that there are zero nodes and zero relationships, meaning we have an empty database. This will be our starting point. On the right, we have a welcome guide. If you're interested, you can click on these boxes to learn the basics of Neo4j. In the next browser, we'll do just that using the Neo4j Browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (4)
> **UI Navigation:** click on (2), navigate to (1)
> **URLs:** [neo4j.com](https://neo4j.com) (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the Neo4j browser](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=0)** - [Instructor] In order to really start using the browser, we need to have some data loaded into it. So let's use one of the data sets associated with the welcome guide to get familiar with [[Neo4j]]. In the welcome guide, click on the query fundamentals guide. This will open up the guide on the left side of the browser. Notice that there are navigation bars at the bottom that will walk you through the complete guide by clicking either on next or previous, but we're going to jump straight to importing data. Check out these buttons over here that you can click on to load an example data set. Let's click on the load the Northwind dataset button. Then we're going to click the run import button in the upper right. After a few seconds, you'll see that several different CSV files have been used to populate the database, and we're shown some basic information about each. Let's now click on explore results and see what we have. By default, neo4j launches Bloom, which is their visualization tool that makes exploring the graph easy. We start with an empty scene. From here, click in the search bar. And select the option show me a graph. And then click run. This will pull up a visualization of the data we just loaded. We can [[Zoom]] in on parts of the graph using the buttons on the lower right
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=93)** and see the nodes and relationships easily. On the right, we can tell that there are different types of nodes, like category, customer, and employee, and each node is represented in Bloom by a different color. If we zoom in a bit, we can spot the relationships have their labels as well, like in region or in territory. If we hover over a node, we can reveal its properties. For example, this green node is of type region and has a property called region description that is set to Eastern. Let's now hover over this employee node. You'll notice that the employee nodes have a property called title, and in this case it's sales representative. The visualization also helps us to understand a bit more about that sales representative. They have two in territory relationships to the Neward and Wilton territories. So now we have a bit of understanding of where this particular sales representative works. I encourage you to spend some time with Bloom exploring this graph a little bit before we learn how to query it. I'll meet you in the next video where we'll learn Cypher, the query language of graph [[Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (2), [[Zoom]] (2), [[Databases]] (1)
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** node (4)
> **Env Vars:** csv (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Cypher basics: Writing your first queries](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=0)** - [Instructor] While being able to visualize a graph is very helpful, we need to learn how to query it. Let's start by learning this in the browser and then we'll learn how to do it from [[Python (Programming Language)|Python]]. Graph [[Databases]] like [[Neo4j]] have their own query languages. Neo4j uses a language called Cypher, which has a lot of similarities to [[SQL]]. Don't worry, you'll see plenty in this course to pick up the basics. In fact, there are a lot of parallels between SQL and Cypher. For example, SQL, which is based on table oriented queries, uses the command called select to determine what you're looking for. Cypher, on the other hand, uses Match. Additionally, Cypher is a graphical query language, which uses ASCII art to describe what it's looking for. From the browser, click query on the left. This brings up the Neo4j browser where we can start running Cypher queries. Let's look at this query, for example. Whenever you see round parentheses, that is graphically representing a node, whereas square brackets represent a relationship. We can start with this query that just returns all nodes into a variable called A. Cypher queries typically start with a match statement and end with a return statement. We'll now click the run button on the right. If we run this in the browser we get back a visualization of the nodes, but if we click on table, we can see the actual data stored in the variable A.
>
> **[1:36](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=96)** Here we see the node types such as territory and the node properties in the curly braces like territory description and territory ID. Now, let's make this a bit more complicated and bring in relationships. Here we are matching all nodes A connected through some relationship stored in the variable R to another node B. If we run this, we can see clearly what the query returns. Let's again click on table, which is a table of nodes and their associated properties, connected through different relation types to other nodes. Remember that graphs can be directional. This directionality can be represented graphically in our query by creating an arrow. If we want to modify this query to represent the direction going from A to B, then we just add the greater than symbol indicating that direction, which Neo4j turns into an arrow like this. Remember that we don't need to actually use variables if we only care about portions of the query. For example, check out this query. The only thing we are returning is the relationships from the query. In this case, we then use the count statement to get the number of relationships. The match and return statements are the bread and butter of Cypher, but now let's start learning how to create more sophisticated queries
>
> **[3:08](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=188)** to retrieve specific nodes in relationships.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (4), [[SQL]] (3), [[Python (Programming Language)|Python]] (1), [[Databases]] (1)
> **CLI Commands:** node (4), python (1), make (1)
> **Env Vars:** sql (3), ascii (1)
> **Analogies:** for example (3), such as (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [More cypher: Retrieving nodes and relationships](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=0)** - [Instructor] Remember from before we had our basic query looking at all nodes connected to all other nodes through some relationship. How would we modify this if we only cared about, say, employee nodes? We can indicate node and relationship types by specifying them in the match statement like this, where I'm saying that I want to find all A nodes that are of type employee. I can also do this for the B nodes. In this case, I'm saying that I care about employee nodes that have relationships with territories. Let's change it up a bit. Maybe I want to find all employee nodes that have a particular relationship, say, reports to, some other node. I use the same syntax with the colon and the relationship type in the square brackets instead. Be sure to use capitalization and underscores since it's the format used in this graph. Great, now we have a way to select nodes and relationships in bulk. But what if I wanted to find specific nodes? Here's where the properties really help. Let's click on that sales manager node and see what properties are available. I can see those properties in the tab on the right. Scrolling through, I can see that employee nodes have a property called first name. I can specify that in the query by using curly braces inside the node
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=94)** that I care about, like this. Another way to do that is by using a where statement, like this one. You might find that using where statements is helpful when you start having multiple properties you're searching over. In this case, you can combine a where statement with an and just like you can in [[SQL]] to create a more sophisticated query. Up until this point, we've been searching for single relationships between nodes, but Cypher is capable of much more than that, especially when we take advantage of the fact that it's a graphical language. For example, say we care about all A nodes that are directionally connected somehow to B nodes that in turn are directionally connected to C nodes. Here's what that query looks like. Notice how we've just created the ASCII art to represent what I just described in words. One thing that I find helpful as I start making more complicated queries like this is to draw them out on paper or a whiteboard because that is essentially the ASCII art you'll be creating. Cool, so we've learned how to find specific nodes and relationships in our graph. While Cypher is capable of doing much more than this, what we've learned in these simple commands is enough to get us started in creating our [[GraphRAG]] applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[GraphRAG]] (1)
> **CLI Commands:** find (6), node (4)
> **Env Vars:** ascii (2), sql (1)
> **UI Navigation:** click on (1), in the tab (1)
> **Analogies:** just like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Connecting Python to Neo4j](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=0)** - [Instructor] Up until this point, we've been using the [[Neo4j]] browser to query the database, but in order to create [[Generative AI|GenAI]] applications based on [[GraphRAG]], we're going to want to do this in [[Python (Programming Language)|Python]]. Fortunately, there's a Python driver for Neo4j that makes this easy for us. Let's take a look at how it works using code spaces. First, navigate to the Notebooks directory to look for the O207 notebook. Looking at this notebook, you can see that we're importing a few packages. The most important one is this Neo4j driver, which we'll use to connect the database. Remember those credentials that we downloaded when we created our Aura DB instance? Now we need them because they contain the URL and password we need. I'm going to copy the URL from that credentials text file into our .ENV file in code spaces. We'll do the same thing for the password.
>
> **[1:10](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=70)** Now we're going to run our code. If it asks you for a Python environment, be sure to select the Python 3.12 environment that it gives you as an option. In this next block of code, I've created a class that manages the Neo4j connection for us. Eventually, we'll switch to another method of connecting when we start using Lang Chain, but for now, we'll use this basic class for making the connection and doing some basic queries. Cool, we now have the connection to the database established. Let's run a basic cipher command to make sure that we're really connected. We can just create a string for our cipher query and pass that into our driver connection. This particular query returns the counts of the number of nodes. It says 1104, which is the correct value. Let's just quickly run another query and get back the results. Awesome, we've made the connection from Python to Neo4j and can run some basic queries. Next, let's look at how to format the output of those queries to be formats that Python likes to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Neo4j]] (5), [[Generative AI|Genai]] (1), [[GraphRAG]] (1)
> **CLI Commands:** python (6), make (1)
> **Env Vars:** url (2), o207 (1), env (1)
> **UI Navigation:** navigate to (1), select the (1), switch to (1)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)

#### [Testing your setup with Cypher queries](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=0)** - [Narrator] We've seen that we can query the database from [[Python (Programming Language)|Python]]. Now let's talk about how to get the results of those queries into more Pythonic [[Data Structures]]. Just a quick note that I've moved that [[Neo4j]] connection class into a utilities file, so we can just start right on in the querying. Let's start by looking at what our connection class is returning. We can see here that it's returning a list of records for a, b and r. That's great, but the format of this list is not entirely useful in its current form in Python, but it's easy to convert that to a list of dictionaries like this. Now, notice that the top level dictionary has nested dictionaries for a, b and r. In fact, I find this way of looking at the data in Neo4j more helpful than Cipher because it's easy to see the properties fully shown on the screen. We can easily get these results into a [[Pandas (Software)|Pandas]] data frame using this command. Let's look at a bit more sophisticated query as an example of how to pass variables from Python into Neo4j. Here, we're going to get a product labeled P. Next, let's look for intermediate relationships where that product is part of a category. Then we have this interesting bit of cipher
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=95)** where the category is the parent of another category, but here we have this bit of syntactic sugar where the *0.. means zero hops or more hops to another category. This might sound funny, zero hops. What this means is that the immediate category might already have the category name of beverages, but if not, it will traverse upwards through parent categories, like going from a subcategory to a parent category until it reaches a category with the category name of beverages. And then, we're just going to return a list of those [[Microsoft Products|products]]. More specifically, we'll take the product name property and rename it as product. So when we run this in Python, we can see that we get our typical list of dictionaries where each entry is the product name of those products that are either directly a beverage or have a parent category of beverage. Awesome. We now have the ability to run cipher queries on our Neo4j database without ever leaving Python. Now that we know how to work with Neo4j and Cipher in Python, we have everything we need to start building cool [[Generative AI|gen AI]] apps using [[GraphRAG]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Neo4j]] (5), [[Microsoft Products|Products]] (2), [[Data Structures]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (6), find (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 3. Building Your First Knowledge Graph for Graph Retrieval-Augmented Generation (GraphRAG)

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Retrieval-Augmented Generation (RAG)](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=0)** - [Instructor] RAG is a two-step process. First, the AI searches for relevant information from a trusted source. Then, it crafts a response based on what it found, making the output both relevant and accurate. There's practically no limit to the data you can use for RAG. This data can come from PDFs, websites, structured [[Databases]], or even [[Real-Time]] APIs. Basically any source that holds the truth AI needs. For example, in this course, we're going to work with graphs as our RAG, and we'll be creating those graphs from [[Unstructured Data]], like PDF documents. I hope you will see that RAG isn't just cool, it's practical. It makes AI more reliable for things like [[Customer Support]], research, medical advice, and even coding help. Whenever you need facts plus AI-generated insights, RAG is the way to go. Now that you know what RAG is, we'll explore how to build it using [[Python (Programming Language)|Python]], and of course, graphs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Real-Time]] (1), [[Unstructured Data]] (1), [[Customer Support]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** rag (6), pdf (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [How RAG works with vector embeddings](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=0)** - [Instructor] It turns out that there are several different ways you can do RAG, but most of them boil down to either vector-based approaches or graph-based approaches. Let's talk about vectors first. Remember, RAG is all about retrieving useful information before generating a response. But how do we find the right pieces of information? Traditional keyword searches aren't great for this, because they're too rigid. Remember our example with the [[Microsoft Word|word]] apple? If you just do a keyword search, you're likely to come up with the wrong answer. Ultimately, the driving force behind all [[Generative AI|gen AI]] applications is math. Don't worry though. We won't be solving equations in this course. What's happening in the heart of gen AI is that the models are taking the language you give them and turning it into numbers it can use for doing that math. Using a very, very large equation, they then try to predict something, like what the next most likely word is. So the LLM starts by taking the text you've given it and converts it into what's called a vector embedding or a list of floating point numbers that represent the conversion of that text into the coefficients of the giant equation. Think of these vector embeddings as how the LLM is capturing the meaning of what you're saying. Instead of just capturing words, the LLM is representing those words mathematically, where similar words or phrases like dog and puppy would be neighbors in the vector space, but dog and toaster would be pretty far apart.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=94)** This is pretty cool, because when you ask a RAG-powered AI a question, it isn't just looking for matching words. It looks for similar context in the vector space. So the process is this. First, you convert your sources of truth, like documents, articles, and [[Databases]], into vectors, which are stored in a vector database. Next, you convert your input question into a vector. Once you have that, the system searches for the vector in the database that is mathematically closest to your input question. Finally, gen AI takes that result and converts it back to text, which is provided to you in natural language. Pretty neat, huh? Vector embeddings are a powerful way to do RAG, but that being said, there is a way that can be even more powerful and that's graph RAG, which we'll talk about next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Gen ai]] (3), [[Microsoft Word|Word]] (2), [[Databases]] (1)
> **Env Vars:** rag (5), llm (3)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Improving your RAG with graphs: GraphRAG](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=0)** - So you already know that retrieval augmented generation or RAG helps [[Generative AI|gen AI]] pull in relevant facts before generating responses. But let's talk about why [[GraphRAG]] is often a better choice than just using vector search. As we saw in the last video, vector search is powerful. It finds similar things. But similarity isn't always enough. Context matters, relationships matter. That's where graphs shine. Think of a vector search like finding books in a library by topic. It's great at matching content to a subject. But what if you need a book written by an expert on the topic rather than one about the topic itself? A graph can make that connection. Graphs don't just store data, they connect it. They tell you who knows who, what influences what, and how things are related beyond just keyword overlap and context similarity. This means you can retrieve information based on relationships, not just surface-level similarity. You can follow a trail of connections to deepen retrieval. For example, let's say you ask gen AI about a specific law. A vector search might find similar legal documents, but a graph can also link to relevant court cases, expert opinions, and legislative history, even if they don't use the same wording. Graphs also help with disambiguation. Say you ask about [[Python (Programming Language)|Python]]. A vector search might return results about both the programming language and the snake.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=95)** A graph knows the difference because it understands contextual connections, like whether your query is linked to coating or wildlife. Another win for GraphRAG. Explainability. If an AI response comes from a graph, you can trace the reasoning. Why did it reference that paper? Because it's linked to an expert in the field. And let's talk about how you update a RAG. Adding new facts to a vector index can be tricky because you often need to reprocess the vector embeddings every time you add new text. With a graph, you just add new nodes and relationships, making updates smoother. So should you always use GraphRAG? Not necessarily. If you're dealing with short, simple queries, vector search might be enough. But if you need context, reasoning, or deep connections, GraphRAG gives you a serious edge. To sum up, vectors give you similarity, graphs give you meaning. And when it comes to retrieval, meaning is everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (4), [[Generative AI|Gen ai]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Env Vars:** rag (2)
> **Cross-References:** as we saw (1), in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### [Overview of LangChain](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=0)** - [Instructor] Once we start programming [[Generative AI|GenAI]] applications in this course, we're going to be using a [[Python (Programming Language)|Python]] package called [[LangChain]]. LangChain is a developer framework for working with [[Large Language Models (LLM)|large language models]]. It's designed to make building AI applications easier and more flexible. Think of LangChain as a toolkit that gives you the building blocks to structure and control how an LLM interacts with users and data. One of the things about it that makes it so useful is just how modular it is. It has functions that let you connect to LLMs, create and standardize prompts, keep track of past interactions and pull data from outside sources. By providing these abstractions, LangChain reduces the amount of code you need to write and makes AI development much easier. One great thing about it is that it supports a wide range of integrations, making it easy to connect your code to your data. It works with all of the popular LLMs, like those from OpenAI and Anthropic, [[Databases]] like [[Neo4j]] and [[Cloud Services]] like AWS [[Microsoft Azure|Azure]] and GCP. In just a minute, we'll actually begin programming with LangChain. But I want to show you what the general approach looks like for creating basic GenAI applications. As the name chain in LangChain implies we're going to chain things together to make our GenAI applications. And the things we chain together are various steps of the GenAI process. Usually when we work with LLMs, we begin with the prompt.
>
> **[1:39](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=99)** The prompt is a set of instructions that we pass to the LLM to tell it what to do. Prompts can come in a few varieties. First, there are system prompts. Think of these as the basic foundational instructions that define the behavior you expect to see from your app. Then there are other human prompts. These are the things the users say to the app that drive the conversation or query. The overall prompt is the combination of the system prompt and the human prompt, which are both passed to the LLM. One of the nice things about LangChain is that it gives you templates for all of these to create that prompt. Once we have the prompt, we need to pass it to the LLM. Again, LangChain provides a convenient way to do that, like I'm showing here for [[ChatGPT]]-4o. Finally, we represent the action of the prompt passing its information to the LLM as a chain using L cell. The LangChain expression language. L cell uses the pipe operator to define data flow between each of the components of the chain. Once the chain is created, we invoke it or send input to it in order to have the LLM generate information. When we start coding shortly, we'll get to see this pattern of combining prompts and LLMs to create chains. But it's important to know that LangChain is moving fast. It's under constant rapid development with frequent updates
>
> **[3:14](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=194)** that can introduce new features or change existing ones. Because of this, I highly recommend that you check the documentation regularly. That way these changes don't catch you by surprise with code that all of the sudden doesn't work anymore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (10), [[Generative AI|Genai]] (4), [[Python (Programming Language)|Python]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Databases]] (1)
> **Env Vars:** llm (6), aws (1), gcp (1)
> **CLI Commands:** make (2), python (1), aws (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Key concepts in LangChain for graph workflows](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=0)** - [Instructor] We've seen the basics of how to create chains in [[LangChain]] to take user input through a prompt and run it through an LLM. But how does this apply to graphs? It turns out that LangChain has its own integration of [[Neo4j]] and other graph tools. I guess they realize the importance of graphs to [[Generative AI|gen AI]]. This is going to help us in many ways as we set up to do [[GraphRAG]]. Using the LangChain Neo4j integration, we can do a lot of things like establish a connection to the database, replace our Cypher queries with natural language queries, and even create our own [[Knowledge Graphs]], all from within one ecosystem. In order to work with this integration, we need to make sure we have the LangChain Neo4j package installed. Using that package and our Neo4j credentials saved in the .env file, we start by making a connection to the database. Now, let's use this graph to create a new type of chain, a question answering chain. To do this, we'll use the GraphCypherQAChain built into LangChain. You might be curious about the allow_dangerous_requests variable. We've set this to true in order to tell LangChain that we're using our narrowly-scoped credentials for accessing our database, which we are. Also notice that we've included our LLM in this call. This is because we're about to do something really cool. Instead of using Cypher to query the database, we're going to use natural language,
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=93)** so we need to have an LLM translate that natural language into Cypher. Let's give that a run now. I've set verbose to True so we can watch what's happening behind the scenes. You can see the Cypher query that was generated by the LLM and there you have it. The model created the correct Cypher query and returned the results back to us in natural language. Amazing. Now, we can take this really basic code and start creating some awesome things on real data. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (6), [[Neo4j]] (4), [[Generative AI|Gen ai]] (1), [[GraphRAG]] (1), [[Knowledge Graphs]] (1)
> **Env Vars:** llm (4)
> **CLI Commands:** make (1)
> **Code Identifiers:** allow_dangerous_requests (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Populating a knowledge graph into Neo4j using LangChain](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=0)** - [Instructor] Up until now, we've been working with a graph that's pre-populated in [[Neo4j]], but now it's time to start creating our own [[Knowledge Graphs]]. There are a ton of different ways you can do this, but I'm going to show you a quick and simple way to convert raw text into a graph using some tools and Lang Chain. Before we begin, I want to remind you that Lang Chain is under constant development, especially when it comes to working with graphs. So always make sure you have the most current versions of the packages and check with the documentation regularly. Since we're going to create a brand new graph, I recommend you create a whole new database. The easiest way to do this is to delete our old database and create a new one. Don't forget to save those credentials because we'll need them when we make the new connection. After a few minutes, your new database will be ready. Let's start by connecting our Neo4j database like we did before. Be sure to update your .ENV file with the credentials of your new database like we did earlier in the course. Our goal is going to be to take some raw text and turn it into a graph. So let's start with that text here. Before [[Generative AI|Gen AI]], if we wanted to turn this into a graph, we'd have to do some fancy, complicated [[Natural Language Processing (NLP)|natural language processing]] by getting our subjects, verbs and objects and uploading them into the graph.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=94)** It was ugly, but fortunately, Lang Chain has this LLM graph transformer tool to do it for us. So now what we need to do is put that text in a format that Lang Chain can work with called a document. Then the LLM will take that document and convert it to a graph document, which is something that Neo4j will understand, check this out. Now that we have that graph document, we can add it to the Neo4j database like this. Great, let's see if this makes sense. We can see that we have a few nodes and relationships and that makes sense. Let's see what our graph looks like. If your graph doesn't look exactly like mine, don't worry. LLMs are not deterministic, meaning that every time you run something through them, you'll get something slightly different, but hopefully it still makes sense given the text. There's one last thing I want to show you. It can be helpful when making these graphs to actually include the relevant text in the node. So let's start by deleting all of the nodes and relationships from the graph like this. Now we're going to slightly modify how we added our graph documents to the graph by including the source documents like this.
>
> **[3:13](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=193)** Now, if we go back to Neo4j, you can see that I have this new node that has the label document. If I click on it, I can see the text of that document as well as how the other nodes in the graph are related to it. And just like that, we've created our first knowledge graph. Play around with this and different text strings. This is going to be the basis for everything that we do moving forward. So have fun with it and see what kind of cool knowledge graphs you can make.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (5), [[Knowledge Graphs]] (2), [[Generative AI|Gen ai]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **CLI Commands:** make (3), node (2)
> **Env Vars:** llm (2), env (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Best Practices:** always make sure (1), don't forget (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)

#### [Challenge: Query your knowledge graph with Cypher](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=5)** - [Instructor] Now's your chance to try this out for yourself. You're going to take what we've learned to this point and create your own knowledge graph. I recommend starting with another new [[Neo4j]] AuraDB instance, since you can only have one free instance running at a time. While you're waiting for your new database to be created, think about what topic you'd like to create a knowledge graph around. You can choose any topic you like. Once you've decided, you need to find some text about that topic. Good sources of text could be anything from webpages to news articles or even books on the subject. So, go find some text and copy and paste it into the notebook to create your own knowledge graph. Once your graph is created, be sure to explore it with either the Neo4j browser or in [[Python (Programming Language)|Python]] or both. Then, come back for the next video where I'll show you how I created mine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), python (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Query your knowledge graph with Cypher](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=5)** - [Instructor] Hopefully that challenge went well for you and you've now created your own knowledge graph on the subject of your choice. Let me show you how I created and queried mine. To find my solutions, use [[Git]] to check out the solutions branch in the repo. Then go to the notebooks directory and navigate to the solutions subdirectory, where you will then open the 03_08 notebook. You will also need to repopulate your .ENV file when you do this. For my knowledge graph, I picked a subject near and dear to my heart that I know a fair bit about, skiing. One way you could get this information on your topic is to go copy and paste the text off of Wikipedia, but in my case, I decided to use this Wikipedia loader abstraction built into [[LangChain]]. You give it a keyword and it goes and finds the Wikipedia pages associated with it. It's nice because not only does it go and find several pages, but it converts them automatically to the LangChain document format. It returned a list of 25 documents and what it returned looks pretty reasonable, so let's add them to the graph. This will take several minutes to run, depending on the length of your text. Like we did in an earlier video, I used the LangChain LLM Graph Transformer to extract the nodes
>
> **[1:36](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=96)** and relationships from the list of documents, and then use the add graph documents method to populate my [[Neo4j]] database. And just a quick note, if you see an error message like this one talking about a timeout error, that is telling you that the previous block of code took a bit too long to run, so you need to reestablish the connection. If you just rerun this cell, it should take care of it. Here's a tip, [[Knowledge Graphs]] are only as good as the nodes and relationships you can put in them. So check to be sure your graph has enough information in it. It's a judgment call, but if it doesn't, you can always get more data on your subject by adding more text from other sources. Let's start by taking a look at all of the nodes and relationships and see if they made sense. Just looking at this visualization in the Neo4j browser, I can see that there are many things that make sense. I have document nodes that show the text that was used to make this portion of the graph. You can see also the nodes and relationships extracted from that portion. And it's cool that we see some nodes that are common across many documents like this one here. Awesome, now you've seen how to create a knowledge graph of raw text using some very simple methods. Moving forward, we'll use this knowledge graph to create a [[GraphRAG]] question answering application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (3), [[Neo4j]] (2), [[Git]] (1), [[Knowledge Graphs]] (1), [[GraphRAG]] (1)
> **CLI Commands:** find (2), make (2), git (1)
> **UI Navigation:** go to (1), navigate to (1), open the (1)
> **Env Vars:** env (1), llm (1)
> **Speakers:** - [instructor] (1)


### 4. Connecting Knowledge Graphs to Generative AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a GraphRAG pipeline with LangChain to query your data](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=0)** - [Instructor] Now that you've created your own knowledge graph, we're going to learn how to create a [[GraphRAG]] pipeline of that graph with [[LangChain]]. As usual, we'll make our connection to our graph with the [[Neo4j]] graph method shown before. I always like to verify that I'm really connected by doing a quick, simple query like counting nodes. Cool. Now we're going to create a chain with LangChain to create a question answering application using our graph. Remember when we learned about prompts? Most chains will start with the prompt, which is what we'll do as well. Here we'll create a prompt to convert natural language into Cypher. There are a few things we should notice about this prompt. First, we start by telling the LLM who we are; An expert Neo4j developer translating questions into Cypher. Next, we provide a little information about what subject area's being covered. Skiing in my case, but you should change this to your subject area. Then here's a little gotcha: You see this bit where I told it to convert the first letter to capital case? This is because I noticed when I visualized my graph that all of the node titles had capital letters. Anytime you can provide these kind of hints to the LLM in your prompt, you should do it. You'll get better answers. You may or may not need to do this depending on how the LLM generated your graph. Remember that they are not deterministic. Finally, I pass in the schema of the graph and the question.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=94)** The schema is automatically generated by the graph object and passed to the LLM, so you don't have to worry about it. Awesome, we now can take our prompt and generate a prompt template like we did before. Notice that we don't need to do anything fancy or complicated here, like creating a system prompt and a human prompt. We're just creating a basic prompt template. Now that we have our prompt and we've already created our LLM above, we can create our chain using the GraphCypherQAChain from LLM method. So here we pass in our LLM graph and prompt. Notice that I set verbose to true, so that way we can get a lot of detail about what's happening when we ask questions of the chain. This is really helpful in debugging. All right, now we can start asking questions. Particularly when I first start working with a graph, I like to see what type of questions I might be able to ask it. For example, there's this node here about cross country skiing, so let's ask our LLM about that. Here I'm going to ask a very specific question where I'm hinting at the node labels, such as activity and equipment. After a few seconds, the Cypher query the LLM created makes sense. And then we get the output. The output is the LLM taking the results of the Cypher query and turning it into natural language. Pretty neat, huh? Let's ask something more vague.
>
> **[3:12](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=192)** I'll ask it to just tell me about ski touring and see what it does. You notice here that Cypher generated a much more sophisticated query, which has many different types of relationships specified in it. This is because the question was so vague and now we have the result, which looks pretty good to me, given what information the graph contains about this. So take some time and ask questions of your knowledge graph and see what kinds of answers you get back. This is where the fun really begins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (2), [[Neo4j]] (2), [[GraphRAG]] (1)
> **Env Vars:** llm (10)
> **CLI Commands:** node (3), make (1)
> **Exercise Files:** template (2)
> **Analogies:** for example (1), such as (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [instructor] (1)

#### [Enhancing your knowledge graph with richer data](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=0)** - [Instructor] So far, we've created a pretty basic knowledge graph using content from the web. While that's a great starting point, chances are in your Graph RAG applications, you'll want to add many other sources of data. After all, your graph is only as good as the data you put into it. So let's talk about ways to bring in other data sources. For this video, I'm going to show you how to bring in PDF files. For demonstration purposes, I have this small PDF file about skiing that I'm going to use. You should see if you can find a PDF or two about your subject. It's helpful to find PDFs about subtopics that your graph might be lacking to provide additional information. I'm going to load it in using a built-in [[LangChain]] tool for importing PDF files and extracting the text from them called PyPDFLoader.
>
> **[0:57](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=57)** When I do that, I get back a list of LangChain documents. In LangChain, a document is a class that represents a chunk of content, typically from a file or external source, and it's used throughout LangChain to pass around text and [[Metadata]]. But if I look at how many documents we have, there are 11 of them, which correspond to the number of pages in this PDF file. That's not going to fit in the context window of the LLM, so we're going to have to break it into smaller pieces. This is where the concept of text splitting and chunking comes in. To demonstrate these concepts, let's use this ChunkViz web visualization tool. You can see the different chunks are shown in the different colors here and change based on splitter type. The terms of chunking and splitting are frequently used interchangeably, but they mean slightly different things. Chunking means breaking a large amount of text into pieces of a fixed size, usually specified by the number of characters or chunk size. Splitting, on the other hand, means creating smaller pieces of text by breaking the full text at logical boundaries like periods and carriage returns. But we run into trouble with splitting and chunking if we say the chunk size is simply 25 characters. We'll wind up with chunks where meaningful information is in the next chunk. Instead, we can include a term called chunk overlap, which determines the number
>
> **[2:30](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=150)** of overlapping characters in common between neighboring chunks. There are several different strategies you can use for splitting and chunking. Let's use the Recursive Character Text Splitter, which is a good starting approach to your splitting. The Recursive Character Text Splitter recursively tries to split the input using a hierarchy of separators like periods, commas, and carriage returns until it produces chunks that are no longer than chunk size and have chunk overlap between them to preserve context across boundaries. All right, let's get back to the code. So now I'll create our Recursive Character Text Splitter and specify a chunk size and chunk overlap. Then we'll run our pages through them to get our chunks returned to us as a list of LangChain documents. Once we have that, we can create our connection to our graph and our LLM Graph Transformer. Next, we'll convert the LangChain documents into the nodes and relationships for our graph like we did before. This part might take a minute as the LLM works to parse all of the chunks into the nodes and relationships, so go grab another cup of coffee and let it do its magic. Now that this part is completed, we can add the nodes and relationships to the database like we did before. Remember that it's okay if you get an error here about a timeout. If you do, just run this cell again and it'll work.
>
> **[4:09](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=249)** And voila! Just in adding 11 pages of that PDF, we've nearly doubled the number of nodes and relationships in our graph. Our Graph RAG application just became that much smarter by enhancing the basic knowledge graph with even more intelligence. LangChain has many, many more options for data it can read. Check out the document loaders section in the LangChain API docs to get some ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (8), [[Metadata]] (1)
> **Env Vars:** pdf (6), llm (3), rag (2), api (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Using knowledge graphs in a GraphRAG pipeline](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=0)** - [Instructor] So, we've seen how we can run queries against our Knowledge Graph using the GraphCipherQAChain functionality. This will be the basis of all of your [[GraphRAG]] applications. At this point, you might have come across problems as you've run this with the LLM, not entirely working well with your graph. Maybe you saw it wasn't forming correct cipher queries. That's because the LLM understands language, but not necessarily database schemas. Remember when we started working with the LLM prompts and we passed in the database schema to try and address this? Let's dive into that a little more. There's a famous saying in working with data, "Garbage in, garbage out." In [[Generative AI|GenAI]], this can refer to the quality of the input data or the effectiveness of the prompt. In this video, we're going to work with the prompt. In order to create the best prompt, we want to understand the schema of the graph. Like any other database, schema refers to how the data is organized. In [[SQL]], the schema shows the tables that exist, which columns are in each table, and which columns are in common among each table. For graphs, the schema describes which type of nodes are connected to which other types of nodes. We can get the graph schema in the [[Neo4j]] browser, using the CALL DB.schema.visualization procedure. Another way to do this, and one that's going to be more helpful as we program our GraphRag applications,
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=93)** is by allowing [[LangChain]] to tell us what the schema is. In our earlier video, the schema was automatically passed into the query, but we can also inspect it from within [[Python (Programming Language)|Python]], using the graph object like this. You can also get an enhanced schema by passing this additional keyword into the creation of the graph object. You can see that this provides you additional information about which nodes exist of a given node type.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=133)** So, when you create your prompt, you want to be able to provide the LLM as much information as possible, so it can craft the most accurate cipher query possible. In the case of my graph about skiing, I've done this by not only feeding the schema into the prompt, but I'm also describing the graph and the types of questions that can be asked of it here. Another very powerful thing you can do is provide examples of some correct queries for this graph in the prompt. This is called, Few Shot Learning, and is really effective at helping the LLM form accurate cipher queries. This highlighted block shows how I have implemented a Few Shot Prompt. Now we have our full pipeline. We've gone from creating a prompt to tuning the prompt with Few Shot Learning. We then combined the prompt and the LLM in a graph question answering chain, and now we'll ask some questions of it. These are all the building blocks you need now to have your own working GraphRag application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (3), [[Generative AI|Genai]] (1), [[SQL]] (1), [[Neo4j]] (1), [[LangChain]] (1)
> **Env Vars:** llm (6), sql (1), call (1)
> **CLI Commands:** python (1), node (1)
> **Definitions:** refers to (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Comparing the GraphRAG results to a traditional vector-based RAG](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=0)** - [Instructor] We've now seen how we can create a knowledge graph and implement it into our [[GraphRAG]] pipeline. But you might be asking yourself, is it really worth it? Both vectors and graphs have a role to play in RAG and it's helpful to think about where each really shines. Let's start with traditional RAG based on vectors. Vector-based RAG is great at handling large scale unstructured datasets. Remember, it's based on semantic similarity searches of a vector database. This means that its accuracy is heavily based on which models you choose for embeddings and queries, and the quality of the indexed information you put into the database. Also, you want to keep in mind database performance, particularly as your knowledge base grows since this will really impact the speed of your application. GraphRAG, on the other hand, is the better choice when you have complex subjects that require deep understanding and reasoning. This is because graphs are better than vectors at taking advantage of the relationships and hierarchies between data points. You just can't capture that in a vector. The downside with using a graph, as we've seen, include getting data accurately and completely converted into nodes and relationships as well as getting the LLM to properly translate your question into a graph query like with Cipher. In fact, peer-reviewed research is starting to demonstrate that there are particular subjects that GraphRAG performs better than VectorRAG. As you get more comfortable with GraphRAG,
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=95)** you can even start considering hybrid approaches where you store the vector embeddings in the graph itself and create your queries on both. So let's get back to our graphs and start evaluating them for accuracy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (4)
> **Env Vars:** rag (3), llm (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating your GraphRAG pipeline](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=0)** - [Instructor] Whenever you create any application with [[Generative AI|GenAI]], you should also create a plan to test and evaluate it. It's also best practice to be constantly evaluating your applications as you make changes to them. Otherwise, how do you know your changes were helpful? At this point, you've built your knowledge graph, set up a retrieval, and now it's time to ask, "Is this thing actually working?" Our goal is simple. We want to make sure our answers are both relevant and accurate given the user's questions and the underlying graph. Let's talk about accuracy, probably the most common way to evaluate any kind of RAG system. In this context, accuracy means, did the model give the correct answer to the question? The easiest way to assess that is by giving the model a series of questions that we have ground-truth answers for. You can then score the model's answers against the desired answer. Ideally, you want to have many questions that you're evaluating against, but scoring that many questions can be time-consuming. So instead, we'll let an LLM do it for us. So let's code that up. There are a lot of different packages out there for evaluating GenAI performance, including the popular LangSmith package from [[LangChain]]. However, we are going to use this very simple class in LangChain called QAEvalChain. It helps grade whether a model-generated answer matches a reference answer. We'll start by creating a series
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=93)** of question-answer pairs appropriate to our particular knowledge graph. I'm only going to use a small set for demonstration purposes, but you should create as large of a set as practical. A good set involves a diverse list of questions that will query many different parts of the graph. Next, we create our evaluation chain. Finally, we run each of our questions through the LLM and compare the answers to the ground-truth answer.
>
> **[2:16](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=136)** We can see here that we got an accuracy of about 67%. You should run your test questions a few times though, because LLMs give slightly different answers each time due to their probabilistic nature. This is also why it's a good idea to have a large set of test questions, so you get a better understanding of the statistical distribution of the scores. So this simple approach gives you a basic accuracy score or how many answers matched what you expected. Remember, there are many different metrics you can use to evaluate your [[GraphRAG]] applications, such as helpfulness, relevance, or even traceability in the graph. But for quick testing and evaluation, accuracy is your friend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (2), [[LangChain]] (2), [[GraphRAG]] (1)
> **Env Vars:** llm (2), rag (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Evaluate your GraphRAG application](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=5)** - [Instructor] Now it's your turn. You've created a knowledge graph in [[Neo4j]] and a QA pipeline with [[LangChain]]. But how well does it work? It's time for you to create some question-answer pairs to find out. I recommend you create at least 10 of them and calculate the accuracy from there. Whenever I do this, I always find some interesting things. You might find that the Cypher queries the LLM generates are not great. In that case, it always helps to provide some example queries in the prompt as few-shot learning to guide the LLM to do better, or you might find that there are missing bits of knowledge in your graph. The solution to that is to get some more data or otherwise enhance the graph. It's a great idea during this phase to make sure you have verbose set to true so you can see what the LLM is doing at every step. Take some time with this and learn where your application is working well and where it needs additional guidance, and don't be frustrated if you don't get great results right away. Learning to tune the prompts and the graph to your application is what makes great AI engineers. So, meet me in the next video to see how I solved it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (1), [[LangChain]] (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** llm (3)
> **Cross-References:** in the next (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Evaluate your GraphRAG application](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=5)** - So hopefully at this point, you've had a chance to create some test questions for your graph and see how your [[GraphRAG]] application does at answering them. And if you're like most of us, you probably found out you had to tweak things quite a bit as you discovered how the evaluation responded. There are two places you can tweak things, the prompt and the questions. So as you worked with it more, hopefully you played around with both of those in an attempt to create a better evaluation. Remember to use [[Git]] in order to check out the solutions branch instead of the main branch if you want to see my code. I also want to tell you that crafting good QA pairs for evaluation of your GraphRAG can be really tricky and take a lot of trial and error. So don't be frustrated if it takes you several tries at this. That happens for me too, and you will see it in this video. Let's go over how I did my evaluation and what I learned along the way. Here I have three simple questions. In this notebook, I've wrapped the evaluation in a function for ease of use. Now let's run it and see what happens.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=87)** As you can see for some of the questions, my app performed pretty well, but let's look at this query about ski poles. We'll copy that and run it in the [[Neo4j]] browser.
>
> **[1:44](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=104)** Notice that there are a lot of nodes returned. This is probably confusing the LLM that isn't sure how it should return all of these nodes. Also, remember that this question asked which activity does not use polls. I would recommend that you avoid queries with the [[Microsoft Word|word]] not since they can lead to confusion like here. Up until now, we've only looked at nodes directly connected to other nodes in our evaluation. But remember that graphs let us discover connections to nodes several hops away. Let's look at how we would use that in our GraphRAG evaluations. I'm going to create a new set of questions for evaluation based on nodes that are two hops away from the target node. For example, if we look at the International Ski and Snowboard Federation, as I am about to show here, we can see that grass skiing is two hops away from our target node, International Ski and Snowboard Federation. So here's my new set of questions based on exploring around my graph for a bit for interesting relationships. I've also updated my prompt a bit to provide a few shot example on how to do multi hop queries in Cipher. Now let's give that a run. Oh no, that didn't quite go so well, why is that?
>
> **[3:19](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=199)** First, let's look at this grass skiing question. Let's go to the query it created for this question. I'm going to copy and paste this into Neo4j and see what happens. You see that I don't get any results returned. Let's make this query simpler by just creating one ourselves. When we do that, we can see the problem. The LLM thought there should be a relationship called governed by for the federation. Here's the federation. But you can see that that relationship of governed by doesn't exist. It just assumed that it did, and the result is that we got a query that returned no results. So as I continue to improve my prompt, I might consider telling it to make the query simpler. As another example, let's look at what's going on with the FIS Alpine Ski World Cup. Let's run the cipher query the LLM created.
>
> **[4:36](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=276)** Interesting, that didn't return anything either, but notice that it put FIS in all capitals, but I remember the graph didn't capitalize the I or the S. So if I create the query I'm hoping for in the browser, here's what I get back. So the evaluation did not work because the LLM didn't maintain the correct capitalization when it created the node in the graph. If I choose to continue using this question in my GraphRAG, I would want to adjust my prompt to understand that acronyms like this one need to have their capitalization adjusted. At the end of the day, evaluating your GraphRAG application is all about carefully crafting a series of questions and their prompts based on the data in your graph. It's highly unlikely that you'll get 100% accuracy, but what you do get will provide you a lot of great information for tuning your prompts and your underlying graph data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (5), [[Neo4j]] (2), [[Git]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** llm (4), fis (2), git (1)
> **CLI Commands:** node (3), make (2), git (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - so (1)


### 5. Putting It All Together: Creating a Question-Answering Bot with GraphRAG

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to capstone project](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=0)** - We've now come to the part where we put it all together. We've created a knowledge graph and put everything together in little pieces. So now you have the building blocks to create one complete application. In this final project, we'll go start to finish, creating a brand new graph and a fully packaged [[GraphRAG]] application. To do so, let's take all the bits and pieces we've learned so far and combine them into one unified piece of software. Start by creating a new AuraDB instance. If you want to stay in the free tier, that unfortunately means you'll have to delete your original graph. Wave goodbye to it as it has served us well. For this final project, choose a new topic area. Again, this can be any subject of your choosing, but pick something you know you can find a fair bit of text about. In order to practice what we've learned so far, find a few different types of text sources, such as web or PDF articles, then create a new knowledge graph using that text. Once you have your graph, create a GraphRAG QA bot that you can ask any number of questions to. Be sure to spend time on writing and tuning your prompt, making sure that the LLM is converting your natural language questions into cipher queries that get the job done. Finally, evaluate the accuracy of your GraphRAG application through some question answer pairs to assess the accuracy of your application.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=94)** Have fun, be creative, and don't be afraid to experiment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (3)
> **CLI Commands:** find (2)
> **Env Vars:** pdf (1), llm (1)
> **Analogies:** such as (1)
> **Speakers:** - we (1)
> **Non-Speech:** (upbeat music) (1)

#### [Walkthrough of capstone solution](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=0)** - [Instructor] Hopefully at this point, you have created your complete [[GraphRAG]] QA bot on a new [[Neo4j]] or a DB instance. I'm going to show you how I built mine from start to finish. Don't forget to switch from the main branch to the solutions branch of the repo if you want to see my code. First things first, i started with a brand new or a DB instance and recommend you do the same. For my graph this time, I decided that I would create a knowledge graph around the subject of one of my favorite places to visit, Portugal. So like before, I used the [[LangChain]] Wikipedia loader to get a bunch of texts about Portugal. And it's okay if you see that warning message. Sometimes it comes up. I can see that I got 23 documents back and let's take a look at them. In scrolling through this, I can see that I got a lot of information back on the history of Portugal. Let's start by creating the graph documents from the LangChain documents.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=72)** This code, as you discovered, can take a few minutes to complete, but once it is done, we can make our connection to Neo4j and add our data to the database like this. So first, I have to read it in. Next, I'm going to split that PDF document into chunks. And now, we can turn those chunks into graph documents. Finally, I'm going to add those nodes and relationships into my graph like before, but before I do, let's check out the size of our graph. We can see here that we have just over 600 nodes and 1,200 relationships. Now let's add the PDF data to the graph. Now that these have been added to the Neo4j database, let's look and see how many more nodes and relationships we have. In adding this PDF file to the graph, I went from about 600 nodes and 1,200 relationships to over 1,000 nodes and over 1,600 relationships. Cool. Let's now make our question answering bot. Remember, we learned that providing the graph schema was helpful for the RAG to get better answers, so we'll use that in our retrieval again by setting enhanced_schema to true. Next, we have to create our prompt, which is as much of an art as a science.
>
> **[2:46](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=166)** I started with a very similar prompt to my original skiing prompt and just made some minor modifications to adapt it to the knowledge graph around Portugal. Let's ask our first question. What I found when I ran this was that sometimes the conversion from text to cipher was getting confused by the use of the [[Microsoft Word|word]] "the" in front of my entity ID. So I updated my prompt to try and address that.
>
> **[3:18](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=198)** That was great and definitely provided me with better answers. The next thing I noticed was that the LLM sometimes was trying to force relationships that didn't always exist or weren't always useful. So then I added a bit to my prompt to have it be less prescriptive on specifying relationship types.
>
> **[3:49](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=229)** Now I'm happy enough with the results that we can move on to creating an evaluator for my GraphRAG application. I'll start by creating a series of question answer pairs. Here I have only created three, but as we've discussed before, it's best to create tens to hundreds. Next, I'll create my evaluator chain. Finally, I'm going to use the same function I used before to orchestrate passing the example questions through the GraphRAG and then evaluating the response.
>
> **[4:24](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=264)** You might see again these connection errors which represent a timeout error. If this happens, just reestablish the connection to your graph and run this query again.
>
> **[4:40](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=280)** Great. We ran this and got 100%. You might find that you don't get 100%, and that's okay. Every time you run your evaluator, you can learn something new about how your app is performing. You watch where it's failing and you can do things like tweak your prompt to work on getting better and better scores. The best part is that in doing this, you have quantitative evidence to show whether what you're trying is working or not, and it's important to remember that I'm creating these questions based on what's in my graph. You should create your own questions based on what's in yours. Even if you use My Portugal example, you may see that your graph is slightly different than mine. So be sure to explore your graph before you create your questions. So that's how I solve the problem. Keep testing and tweaking your GraphRAG bot and see how well you can get it to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (4), [[Neo4j]] (3), [[LangChain]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** pdf (3), rag (1), llm (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** don't forget (1), it's best to (1)
> **Code Identifiers:** enhanced_schema (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with knowledge graphs, GraphRAG, and GenAI](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=0)** - Congratulations on completing this [[LinkedIn]] learning course on [[GraphRAG]]. Now that you understand the basics, keep practicing by building small projects with your own data or based on your own interests. Don't worry about making mistakes. Just start simple and build from there because I find I learn something new about [[Generative AI|Gen AI]] and GraphRAG with every step I take. If you have questions or want to engage with others on their graph journeys, I encourage you to come chat with us on the Graph Geeks Discord server. Here, you can ask me and many other graphistas questions about GraphRAG, graph [[Databases]], and Gen AI. You've now got the graph tools. Go have some fun and see what you can create.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphRAG]] (3), [[Generative AI|Gen ai]] (2), [[LinkedIn]] (1), [[Databases]] (1)
> **CLI Commands:** find (1)
> **Tools:** discord (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Dr. Clair Sullivan]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/graphrag-essential-training-3981041/codespaces)

## Skills Covered

- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Knowledge Graph Augmentation
- Knowledge Graphs
- GraphRAG

## Path Context

### In [[Explore AI for Data Engineering]]
← [[Vector Databases in Practice- Deep Dive]] | **7 of 8** | [[Advanced RAG Applications with Vector Databases]] →

## Appears In

- [[Explore AI for Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Knowledge Graph Data Engineering for Generative AI Use Cases]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG), Knowledge Graphs
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)

---

[↑ Back to top](#)