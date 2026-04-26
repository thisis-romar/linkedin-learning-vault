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
created: 2026-04-21
---

![GraphRAG Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQFi9QampvwPSA/learning-public-crop_675_1200/B4DZetUdRvH4Ak-/0/1750959511423?e=2147483647&amp;v=beta&amp;t=of_oOKWXbCHekfDQV4BVnJvauTZd6DfRJGRwrabG1bo)

# GraphRAG Essential Training

> This beginner-friendly course introduces the fundamentals of GraphRAG (Graph Retrieval-Augmented Generation), a cutting-edge technique that combines knowledge graphs with generative AI to enhance contextual relevance and precision. Designed for professionals and students new to GraphRAG, the course covers key concepts, including graph structures, nodes, edges, and relationships, as well as practic

> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training) | 1h 39m | Intermediate | 30K learners
> [Jump to Path Context ↓](#path-context)

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

## Table of Contents

### Introduction

#### Prevent GenAI apps from hallucinating
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=0)** - Have you ever wondered how to keep your generative AI applications from hallucinating so much?
>
> **[0:06](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=6)** Let me show you how to create a knowledge graph that you can use in retrieval augmented generation or RAG to deal with those annoying hallucinations.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=15)** Even if you know nothing about graphs, I'll show you how to create a knowledge graph in a graph database from unstructured text.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=23)** Then you can use it with common gen AI tools in Python to create a graph RAG that will power a real application all in a single afternoon.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=33)** I'm Claire Sullivan and I've been working in data science for more than two decades.
>
> **[0:37](https://www.linkedin.com/learning/graphrag-essential-training/prevent-genai-apps-from-hallucinating?u=76281980&t=37)** If you're ready to apply this powerful approach to your data, then let's get this graph party started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** rag (2)
> **CLI Commands:** python (1)
> **Speakers:** - have (1)

#### An example of knowledge graphs at work in AI
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=0)** - Have you ever asked a Gen AI chatbot a simple question and it just made something up?
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=5)** That's what we call a hallucination, and yeah, it's a problem.
>
> **[0:10](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=10)** Let's say you ask an AI, "How many moons does Jupiter have?"
>
> **[0:14](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=14)** Simple question, right?
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=15)** But the answer depends on when you asked.
>
> **[0:18](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=18)** Large language models, or LLMs, that power chatbots have access to a limited set of facts, and those facts can be outdated, and new moons are being discovered around Jupiter all the time.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=32)** So the answer you get back from the chatbot depends on when the LLM was trained.
>
> **[0:38](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=38)** One way to fix that, feed the app, real up-to-date facts.
>
> **[0:43](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=43)** That's what retrieval augmented generation, or RAG, is all about.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=47)** Instead of guessing, the chatbot checks its sources first.
>
> **[0:51](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=51)** But here's the catch.
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=53)** If you ask why the number keeps changing or who discovered the latest moons, a simple document search might not be enough.
>
> **[1:02](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=62)** That's where knowledge graphs shine.
>
> **[1:04](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=64)** They don't just store facts, they link them together, like who discovered which moon, when, using which telescope, or during which mission.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=72)** Now we're setting up something where Gen AI can tell a story, not just report a number.
>
> **[1:18](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=78)** Gen AI with connected data makes smarter choices.
>
> **[1:22](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=82)** RAG gives it facts. A graph gives it context.
>
> **[1:26](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=86)** And what is really cool is that when you combine them, you get fewer hallucinations.
>
> **[1:31](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=91)** So say you're building an app for astronomy students.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=95)** With just the LLM, the chatbot might list old moon counts, but with a graph of moon discoveries and linked telescope missions, it can explain why the number grew.
>
> **[1:45](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=105)** How about another example?
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=107)** Suppose you're working in medicine and your patient gave you a list of symptoms.
>
> **[1:53](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=113)** But a graph linking symptoms to diseases, drugs, and patient history, now you're starting to be able to create some real insights.
>
> **[2:01](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=121)** In this course, I'll show you how to build and use these knowledge graphs with real Gen AI tools.
>
> **[2:06](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=126)** And you don't even need to be an expert in astronomy or medicine.
>
> **[2:10](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=130)** We will use some basic Python and a simple graph database to make it happen.
>
> **[2:15](https://www.linkedin.com/learning/graphrag-essential-training/an-example-of-knowledge-graphs-at-work-in-ai?u=76281980&t=135)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), rag (2)
> **Code Keywords:** let (2), catch. (1)
> **CLI Commands:** python (1), make (1)
> **Speakers:** - have (1)

#### Codespaces explainer video
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=0)** - [Instructor] In this course, we'll be using GitHub Codespaces as our coding platform.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=5)** To get started with it, navigate to the course GitHub repository in your browser.
>
> **[0:10](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=10)** From here, you'll click on the green Code button, select the middle tab called Codespaces, and then click the green button that says Create codespace on main.
>
> **[0:24](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=24)** After a short period of time, you'll get something that looks like VS Code pop up in a tab in your browser.
>
> **[0:30](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=30)** It has all of the code from the repository, plus is loaded with all of the Python packages we'll use for the course.
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=36)** While Codespaces is building, we can create our API key for our favorite LLM.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=42)** I'll use OpenAI's ChatGPT, but you can use whatever LLM you like.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=47)** To create an OpenAI API key, go to platform.[openai.com](https://openai.com) and either log in or create a new account.
>
> **[0:58](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=58)** Once you're here, in the search tab, type api key.
>
> **[1:04](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=64)** Next, click Create new secret key.
>
> **[1:09](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=69)** Give it a name, select the default project, and select Create secret key.
>
> **[1:19](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=79)** Once that key is created, copy it and then paste it into the .env file located in your Codespaces.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/codespaces-explainer-video?u=76281980&t=87)** Now we're ready to get started.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (2), navigate to (1), click on (1), go to (1)
> **Env Vars:** api (2), llm (2)
> **Tools:** github (2), vs code (1)
> **CLI Commands:** python (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Speakers:** - [instructor] (1)


### 1. Graphs Made Simple: Understanding the Basics

#### What is a graph?
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=0)** - Those in the graph community have a saying, graphs are everywhere, and they're not wrong.
>
> **[0:06](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=6)** Graphs are the power behind social networks, search engines, and recommendation systems.
>
> **[0:11](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=11)** But what exactly is a graph and how do you know if you have one?
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=16)** Simply put, graphs are things connected in some way to other things.
>
> **[0:21](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=21)** Imagine a group of people.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=23)** If we list only their names, that's just a collection.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=27)** But if we describe who knows whom in that group, we've added connections.
>
> **[0:31](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=31)** That's a graph.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=33)** Now, a list of cities is not a graph, but if we add which cities have roads connecting them, we have a graph.
>
> **[0:41](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=41)** Another example would be a set of words such as a document.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=45)** A set of words is just text, but if we connect those words based on their meanings or relationships, we have a graph.
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=53)** The things that make up a graph, whether they're people, cities, words, or something else, are called nodes or vertices.
>
> **[1:02](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=62)** The connections between those things are called edges or relationships and are what makes graphs useful.
>
> **[1:09](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=69)** These relationships could be anything from friendships to routes on a map to related concepts, as you'll see in the next video, graphs help us focus on the relationships between things.
>
> **[1:21](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=81)** They don't just store information, they show how things connect.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=87)** To check if you have a graph, ask yourself three questions.
>
> **[1:30](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=90)** First, do I have a set of things?
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=93)** Second, are some of those things connected to other things?
>
> **[1:36](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=96)** And third, do I care about those connections?
>
> **[1:41](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=101)** In Gen AI, graphs help provide context to your large language models, or LLMs, because they show how different concepts relate.
>
> **[1:50](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=110)** I'm going to show you how using graphs through an approach called graph retrieval augmented generation, or GraphRAG, can reduce LLM hallucinations.
>
> **[1:59](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=119)** That's when it just makes up answers.
>
> **[2:02](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=122)** This simple thing can make your Gen AI application much more accurate.
>
> **[2:06](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph?u=76281980&t=126)** Next, let's look at some graphs that can be found in the world around us.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** else, (1), let (1)
> **Analogies:** imagine (1), such as (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - those (1)

#### Recognizing graphs in everyday life
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=0)** - [Narrator] You probably don't think about it, but you interact with graphs all the time.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=5)** Every time you scroll through social media, get directions on your phone or binge watch Netflix, there's a graph working behind the scenes.
>
> **[0:14](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=14)** Think about your social networks like LinkedIn.
>
> **[0:17](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=17)** The very use of the word network is a hint that you're interacting with a graph.
>
> **[0:22](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=22)** On social media, you're connected to your friends, they're connected to their friends, and it just keeps going.
>
> **[0:28](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=28)** That web of connections is pure graph magic.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=32)** Did you ever wonder how the GPS on your phone finds the fastest way home?
>
> **[0:37](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=37)** It treats the roads as edges between two nodes, which are the intersections, and it's able to figure out the fastest way between nodes through fancy graph math.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=48)** Here's another one.
>
> **[0:49](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=49)** Have you ever gone from reading one article on the web to another and then another by clicking through links and then you completely forgot where you started from?
>
> **[0:58](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=58)** That's because the internet is basically a huge web of connections.
>
> **[1:02](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=62)** Every website links to others forming a giant, you guessed it, graph.
>
> **[1:07](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=67)** Search engines use this structure to figure out what's important and help you find what you're looking for.
>
> **[1:14](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=74)** Another big graph is your brain.
>
> **[1:17](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=77)** In it, you have tons of neurons, constantly firing signals, forming a giant web of connections.
>
> **[1:23](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=83)** When you learn something new, your brain rewires itself.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=87)** Kind of like adding new nodes and relationships to a graph.
>
> **[1:32](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=92)** Let's look at one last cool one, language.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=95)** Have you ever used auto completion on your phone and wondered how it predicts the next word?
>
> **[1:41](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=101)** It works because words don't exist in isolation.
>
> **[1:45](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=105)** They're connected through meaning, grammar rules and common uses.
>
> **[1:49](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=109)** Language models and AI chatbots use graphs to understand the relationship between words, which helps them predict and generate text that makes sense.
>
> **[1:58](https://www.linkedin.com/learning/graphrag-essential-training/recognizing-graphs-in-everyday-life?u=76281980&t=118)** As we get deeper into the course, we're going to talk a lot about that as we learn to create our own graphs of language that will be used for GraphRAG.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), new, (1), let (1)
> **CLI Commands:** find (1)
> **Env Vars:** gps (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [narrator] (1)

#### Why are graphs useful?
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=0)** - [Instructor] The world is full of messy, interconnected data.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=5)** Graphs help us organize it.
>
> **[0:09](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=9)** Whether you're tracking relationships, linking webpages, or connecting concepts with a bunch of documents, graphs reveal structure in your data in ways that other data models can't.
>
> **[0:22](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=22)** Ever had a social media app suggest a connection that surprised you?
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=27)** Maybe a friend of a friend who happens to work in your industry?
>
> **[0:31](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=31)** That's a graph in action, surfacing indirect relationships you may not have noticed on your own.
>
> **[0:38](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=38)** One of the great things about graphs is how easily they adapt to change.
>
> **[0:44](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=44)** Traditional databases, like SQL, store data in fixed tables with rigid relationships.
>
> **[0:51](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=51)** If you need to add a new connection, say, linking customer reviews to your product manuals, you might have to redesign the schema, update queries, and migrate data.
>
> **[1:04](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=64)** With graphs, it's simple.
>
> **[1:06](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=66)** New data just creates new nodes and edges.
>
> **[1:09](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=69)** No restructuring.
>
> **[1:11](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=71)** No breaking existing queries.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=73)** Just a more connected data set that grows naturally.
>
> **[1:17](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=77)** If a new research paper links to older ones, the graph expands effortlessly to reflect those relationships.
>
> **[1:26](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=86)** This flexibility makes graphs especially powerful for understanding context.
>
> **[1:32](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=92)** A single piece of data, a product review, a legal document, a research paper, doesn't mean much in isolation, but when connected to related documents, people or concepts, patterns start to emerge.
>
> **[1:48](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=108)** Graphs don't just store knowledge.
>
> **[1:50](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=110)** They structure it in a way that makes it easy to navigate.
>
> **[1:54](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=114)** So why does this matter For GenAI?
>
> **[1:58](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=118)** One of the biggest challenges with LLMs is that they don't actually know anything.
>
> **[2:03](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=123)** They predict words based on probabilities.
>
> **[2:07](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=127)** This means that they can easily hallucinate, making up information that sounds real but isn't.
>
> **[2:14](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=134)** That's where GraphRAG comes in.
>
> **[2:16](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=136)** Instead of relying on the model's built-in knowledge, we use a graph to provide structured, fact-based information.
>
> **[2:23](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=143)** The graph helps the LLM retrieve the most relevant context, reducing hallucinations and making responses more accurate.
>
> **[2:31](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=151)** By combining the flexibility of graphs with the power of GenAI, we get a system that organizes knowledge in a smart way, connects the dots, and helps the system give better, more reliable answers.
>
> **[2:43](https://www.linkedin.com/learning/graphrag-essential-training/why-are-graphs-useful?u=76281980&t=163)** And I'm going to show you how to do it.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), llm (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Nodes, relationships, and properties
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=0)** - Up until this point we've been talking about graphs in a pretty generic sense, defining key terms and showing some examples of some cool graphs you interact with on a daily basis.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=12)** Now let's start getting into the details on how to make a useful graph.
>
> **[0:19](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=19)** Nodes are the real-world things in the graph, and the more descriptive they are, the better.
>
> **[0:26](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=26)** For example, I could say that one node had a type of Person and that would convey some information, but I'd have better context on that node if I could say the node was also of type CEO.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=42)** Relationships are more than just the connections between the nodes though.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=47)** They carry meaning.
>
> **[0:49](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=49)** For example, think about the people you know.
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=53)** A relationship called Friends With tells you one thing about your interaction with that person, but a relationship called Works For tells you something completely different.
>
> **[1:06](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=66)** To make the graph more meaningful, we can also add details to the nodes and relationships called properties, which are the key-value pairs that capture additional information.
>
> **[1:18](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=78)** While properties are not required, they're helpful because they store other pieces of information on the nodes and relationships other than just basic identifiers like an ID.
>
> **[1:31](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=91)** A common example of Properties From node might be a Person node with a name and birthday both being properties.
>
> **[1:40](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=100)** For relationships, we could think of an author writing a book, and the relationship property could be the year they wrote the book.
>
> **[1:49](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=109)** Properties are what make a graph more interesting because they allow you to describe the nitty-gritty details of your nodes and relationships.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=117)** They can be anything you can think of, and they can help you make better queries by filtering on the properties.
>
> **[2:04](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=124)** For example, you can ask more interesting questions like, "Who works for XYZ Inc. that was born in 1980?"
>
> **[2:14](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=134)** You can see that when I click on the nodes, the birthday property shows up and I can see who meets that condition.
>
> **[2:24](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=144)** By combining nodes, relationships, and properties, you get a graph that isn't just about structure, it's about meaning.
>
> **[2:32](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=152)** That's why graphs are so powerful for things like GenAI.
>
> **[2:35](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=155)** They can provide the context and tell the LLM why something is the way it is.
>
> **[2:40](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=160)** As we move forward, we're going to create graphs of concepts called knowledge graphs from raw text.
>
> **[2:47](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=167)** In this case, our nouns will be our nodes and our verbs will be our relationships.
>
> **[2:53](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=173)** The adjectives and adverbs become our properties.
>
> **[2:56](https://www.linkedin.com/learning/graphrag-essential-training/nodes-relationships-and-properties?u=76281980&t=176)** These knowledge graphs will be the basis for our GraphRAG moving forward and allow us to build smarter GenAI applications.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (4)
> **Env Vars:** ceo (1), xyz (1), llm (1)
> **Analogies:** for example (3)
> **Code Keywords:** let (1), case, (1)
> **UI Navigation:** click on (1)
> **Speakers:** - up (1)

#### Graphs vs. traditional data structures
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=0)** - [Instructor] You might be wondering why we'd want to use a graph versus any other data structure.
>
> **[0:06](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=6)** After all, we could use anything from tables, trees, lists, or dictionaries to organize this data.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=12)** What makes a graph so special?
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=16)** Let's start our discussion about data structures with a list, such as a linked list or an array.
>
> **[0:22](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=22)** Lists store items sequentially, which makes them efficient if you're dealing with data that follows some sort of ordered access or storing sequences.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=33)** Dictionaries are nice because they provide fast lookups for key value pairs, making them great for direct access to data, but they're limited to retrieving individual data points.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=45)** Graphs on the other hand are non-linear, which makes them better suited for data with complex interconnections, especially if those connections start branching.
>
> **[0:55](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=55)** Graphs can beat out dictionaries because they focus on relationships.
>
> **[1:00](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=60)** This means that it's much easier to have a single lookup return not just a data point, but the other nodes connected to it as well.
>
> **[1:09](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=69)** Trees are a kind of graph and are interesting because they are a hierarchical structure with a single parent and one to many child nodes.
>
> **[1:18](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=78)** They're pretty easy to traverse too, so long as all you need to do is follow a strict path.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=85)** But what happens if you want to hop from one part of the tree to another and there's no clear path there?
>
> **[1:32](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=92)** This is where trees become a problem.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=95)** Graphs are more flexible because nodes can connect to many other nodes.
>
> **[1:40](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=100)** This means that they can support more complex relationships than a hierarchy.
>
> **[1:46](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=106)** Finally, what about tables, such as relational databases like SQL?
>
> **[1:51](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=111)** Tables store their data in rows and columns with a predefined schema, making them great for working with structured data.
>
> **[2:00](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=120)** But what happens if you want to explore relationships between data across multiple tables?
>
> **[2:06](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=126)** In that case, you have to do a lot of SQL joins across different tables to create those relationships, and SQL joins are costly.
>
> **[2:15](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=135)** If you find yourself in the space of needing a lot of SQL joins, this is one of the biggest hints that you have a graph problem.
>
> **[2:23](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=143)** Graphs store relationships as first class entities, so edges are not just implicit connections between data points, but are explicitly defined and can hold their own properties.
>
> **[2:36](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=156)** This makes them very efficient for traversing complex networks in a single query.
>
> **[2:42](https://www.linkedin.com/learning/graphrag-essential-training/graphs-versus-traditional-data-structures?u=76281980&t=162)** They really shine at providing an intuitive way to model and analyze interconnected data that traditional data structures struggle with.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **Code Keywords:** let (1), finally, (1), case, (1)
> **Definitions:** means that (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Knowledge graphs: Connecting information
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=0)** - [Instructor] Up until now, we've discussed knowledge graphs as a type of graph, but we haven't yet talked much about what they really are.
>
> **[0:09](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=9)** A knowledge graph is a graph where each node in the graph represents a concept such as a person, place, or event.
>
> **[0:17](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=17)** The edges define how those concepts are related.
>
> **[0:21](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=21)** For example, think about what you know about your hometown.
>
> **[0:25](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=25)** You might think about a particular place in that town.
>
> **[0:29](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=29)** Once you think about that place, you might think about your friend who works there.
>
> **[0:35](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=35)** Then you might think about that restaurant in town that you visited with that friend.
>
> **[0:40](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=40)** That, of course, leads you to think about that wonderful dish you ordered there for dinner last time.
>
> **[0:46](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=46)** As you can see, your brain has started linking different things about your hometown together.
>
> **[0:51](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=51)** And what is it that you just created?
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=53)** It's a knowledge graph.
>
> **[0:56](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=56)** Here's a more detailed example of a knowledge graph.
>
> **[0:59](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=59)** If you were to use this graph, you can see it would be easy to ask questions like, What are some places Claire could visit while in New York City, or what show could Claire go see after dinner at the Starlight Diner?
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=73)** GenAI systems are made better by using knowledge graphs to ground their answers in structured knowledge when done right, combining LLMs with knowledge graphs can help you assign meaning to different terms by considering the contextual relationships of the words.
>
> **[1:31](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=91)** For example, if I were talking about the word apple, I could be referring to the computer, like in number one as you see on screen, or the fruit, like in number two.
>
> **[1:42](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=102)** By using a knowledge graph, your GenAI application will be able to understand the difference and provide you with relevant answers.
>
> **[1:50](https://www.linkedin.com/learning/graphrag-essential-training/knowledge-graphs-connecting-information?u=76281980&t=110)** In GraphRAG, knowledge graphs help improve the accuracy of your results and reduce hallucinations by making sure the retrieved facts are logically connected.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How graphs power AI
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=0)** - In the same way that maps and GPS help us navigate cities, knowledge graphs help gen AI organize and retrieve information efficiently.
>
> **[0:09](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=9)** Instead of treating text as isolated words, graphs provide structured pathways between concepts, helping gen AI understand relationships between things.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=20)** Graphs structure data so that AI can find the most relevant and semantically related information.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=27)** Instead of scanning a massive amount of text, AI can traverse graph connections to locate precise answers quickly.
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=36)** The problem is when gen AI hallucinates.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=39)** AI hallucinations are like a friend confidently giving you the wrong directions.
>
> **[0:44](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=44)** It's hard to tell when your friend is doing that because they're so confident, but graphs act like GPS, ensuring that AI sticks to verified paths rather than guessing based on incomplete information.
>
> **[0:58](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=58)** When we use additional information to augment an LLM's knowledge to minimize hallucinations, we call this retrieval-augmented generation, or RAG, and it turns out that graphs are really great for RAG.
>
> **[1:11](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=71)** There are a few common ways you can do RAG.
>
> **[1:14](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=74)** And throughout this course, I hope you'll see that using graphs for RAG can be more accurate.
>
> **[1:20](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=80)** That's because it's based on using the graph's structure to verify information before generating an answer.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=87)** Imagine you ask an LLM, "Who wrote 'To Kill a Mockingbird'?"
>
> **[1:31](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=91)** Instead of scanning an entire database, AI follows a graph linking books, authors, and historical context to retrieve Harper Lee quickly and accurately.
>
> **[1:42](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=102)** Another example is with email summarization.
>
> **[1:45](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=105)** If your email suggests scheduling a meeting based on a message saying, "Let's catch up on Friday at 3:00 PM," AI is making a suggestion using graphs, linking your contacts, calendars, and time preferences.
>
> **[2:00](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=120)** Graphs support AI reasoning by enabling inference, deriving new knowledge from existing relationships.
>
> **[2:07](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=127)** For example, if a mango is a type of fruit and fruits contain vitamins, AI can infer that a mango contains vitamins.
>
> **[2:18](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=138)** Graphs don't just store facts, they also help AI reason, allowing it to infer new information from existing connections.
>
> **[2:26](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=146)** By linking related concepts, graphs enable AI to make connections that might not be obvious in traditional databases, improving overall contextual awareness of your AI applications.
>
> **[2:38](https://www.linkedin.com/learning/graphrag-essential-training/how-graphs-power-ai?u=76281980&t=158)** This structure makes graphs an essential tool for making AI not only more accurate but also more interpretable and reliable.

> [!info]- Semantic Content
>
> **Env Vars:** rag (4), gps (2), llm (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** we call this (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Code Keywords:** let (1)
> **Ports:** :00 (1)
> **Speakers:** - in (1)


### 2. Getting Started with Graph Tools

#### What is a graph database?
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=0)** - [Narrator] So what exactly is a graph database?
>
> **[0:03](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=3)** It's a type of database designed to store and work with relationships between data in a natural way.
>
> **[0:10](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=10)** Unlike traditional databases which focus on storing data in rows and columns, graph databases focus on how things are connected.
>
> **[0:19](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=19)** In a relational database like SQL, you store data in tables and define connections.
>
> **[0:25](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=25)** You often need joins, which can slow things down as your data grows.
>
> **[0:30](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=30)** Graph databases, on the other hand, store relationships directly, making it faster to find and analyze connections.
>
> **[0:38](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=38)** Think about if you have a database of friends, where each row represents one person who's friends with another person.
>
> **[0:46](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=46)** If you wanted to find all friends of a friend in a relational database, you would have to write a complex query with multiple joins.
>
> **[0:54](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=54)** In a graph database, you just follow the connections, like tracing a path on a map, which is much faster and easier.
>
> **[1:03](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=63)** Unlike relational databases where connections are inferred through foreign keys and joins, graph databases store relationships directly as part of the data.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=72)** This really speeds up your queries because the database doesn't have to compute connections.
>
> **[1:19](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=79)** So instead of searching through massive lists of data-defined connections, graph databases use index-free adjacency, meaning each node knows exactly which node it's linked to.
>
> **[1:30](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=90)** This is especially fast as your graph grows bigger.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=94)** Another great thing about graph databases is that the structure is schema flexible, meaning you don't have to define strict table relationships in advance.
>
> **[1:44](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=104)** You can just add new node types and relationships as needed, making graph databases ideal for evolving and complex data models.
>
> **[1:53](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=113)** So you see how graph databases make it easier to store, query, and analyze relationships between data.
>
> **[2:00](https://www.linkedin.com/learning/graphrag-essential-training/what-is-a-graph-database?u=76281980&t=120)** Instead of forcing data into rigid tables, they let connections work the way they do in real life, which is why they're becoming so important in AI and modern applications.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (2), make (1)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Introduction to Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=0)** - [Instructor] In this course, we'll be using the Neo4j Graph Database for our GraphRAG.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=5)** Neo4j is a native graph database, which means it stores the data as nodes and relationships instead of rows and columns.
>
> **[0:14](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=14)** This matters for Gen AI and GraphRAG because in these applications, relationships between concepts, entities and documents are just as important as the entities themselves.
>
> **[0:25](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=25)** So, using a graph database like Neo4j lets you store, query and analyze these relationships at scale, and in real time.
>
> **[0:35](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=35)** You'll mostly interact with Neo4j using Cypher, a graph query language.
>
> **[0:40](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=40)** Cypher is a bit like SQL, but optimized for graph data.
>
> **[0:44](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=44)** Instead of writing complex joins, you'll use a pattern-matching approach that feels more intuitive for working with connected data.
>
> **[0:54](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=54)** Neo4j offers built-in graph visualization tools in the Neo4j Browser, where you can explore nodes and relationships interactively.
>
> **[1:06](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=66)** For more advanced visualization, you can use tools like Neo4j Bloom, which you can check out on your own.
>
> **[1:15](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=75)** There are a few ways to set up a Neo4j instance.
>
> **[1:19](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=79)** We'll use the easiest way, which is Neo4j AuraDB, a fully managed cloud service.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=85)** As we get started, we'll be interfacing with AuraDB in the web browser through the Neo4j Browser, but once we get started writing our own applications, we'll be connecting to the database programmatically with the Python driver through the Bolt protocol.
>
> **[1:41](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-neo4j?u=76281980&t=101)** By the end of this course, we'll have created a fully functioning Gen AI application using LLMs and GraphRAG, written in Python, connecting to Neo4j AuraDB.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Setting up Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=0)** - [Instructor] Let's start by using our web browser to navigate to login.[neo4j.com](https://neo4j.com).
>
> **[0:07](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=7)** Here, you'll create a free account and log into Aura.
>
> **[0:13](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=13)** Now, let's create a free AuraDB instance.
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=16)** To do this, click on Create Instance, then select AuraDB Free.
>
> **[0:24](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=24)** This will then generate a database instance and create your login credentials.
>
> **[0:29](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=29)** This is the one and only chance you'll have to get them, so you definitely want to download them to your computer.
>
> **[0:34](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=34)** We'll need them a lot as we start coding.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=39)** It will take a few minutes for the instance to be created and startup, so grab a cup of coffee and prepare to get graphing.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=47)** Great, now we have our database instance running, so let's get into it by clicking Connect and Query.
>
> **[0:56](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=56)** What you see now is the Neo4j Browser.
>
> **[1:00](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=60)** This is similar to other database browsers in that it's a user interface where you can directly query the database.
>
> **[1:07](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=67)** You see here on the left that there are zero nodes and zero relationships, meaning we have an empty database.
>
> **[1:15](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=75)** This will be our starting point.
>
> **[1:18](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=78)** On the right, we have a welcome guide.
>
> **[1:20](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=80)** If you're interested, you can click on these boxes to learn the basics of Neo4j.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/setting-up-neo4j?u=76281980&t=85)** In the next browser, we'll do just that using the Neo4j Browser.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), interface (1)
> **UI Navigation:** click on (2), navigate to (1)
> **URLs:** [neo4j.com](https://neo4j.com) (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Exploring the Neo4j browser
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=0)** - [Instructor] In order to really start using the browser, we need to have some data loaded into it.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=5)** So let's use one of the data sets associated with the welcome guide to get familiar with neo4j.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=12)** In the welcome guide, click on the query fundamentals guide.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=15)** This will open up the guide on the left side of the browser.
>
> **[0:19](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=19)** Notice that there are navigation bars at the bottom that will walk you through the complete guide by clicking either on next or previous, but we're going to jump straight to importing data.
>
> **[0:30](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=30)** Check out these buttons over here that you can click on to load an example data set.
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=36)** Let's click on the load the Northwind dataset button.
>
> **[0:41](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=41)** Then we're going to click the run import button in the upper right.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=48)** After a few seconds, you'll see that several different CSV files have been used to populate the database, and we're shown some basic information about each.
>
> **[0:59](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=59)** Let's now click on explore results and see what we have.
>
> **[1:04](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=64)** By default, neo4j launches Bloom, which is their visualization tool that makes exploring the graph easy.
>
> **[1:11](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=71)** We start with an empty scene.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=73)** From here, click in the search bar.
>
> **[1:17](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=77)** And select the option show me a graph.
>
> **[1:22](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=82)** And then click run.
>
> **[1:26](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=86)** This will pull up a visualization of the data we just loaded.
>
> **[1:29](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=89)** We can zoom in on parts of the graph using the buttons on the lower right and see the nodes and relationships easily.
>
> **[1:39](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=99)** On the right, we can tell that there are different types of nodes, like category, customer, and employee, and each node is represented in Bloom by a different color.
>
> **[1:48](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=108)** If we zoom in a bit, we can spot the relationships have their labels as well, like in region or in territory.
>
> **[1:55](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=115)** If we hover over a node, we can reveal its properties.
>
> **[1:59](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=119)** For example, this green node is of type region and has a property called region description that is set to Eastern.
>
> **[2:12](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=132)** Let's now hover over this employee node.
>
> **[2:16](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=136)** You'll notice that the employee nodes have a property called title, and in this case it's sales representative.
>
> **[2:23](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=143)** The visualization also helps us to understand a bit more about that sales representative.
>
> **[2:28](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=148)** They have two in territory relationships to the Neward and Wilton territories.
>
> **[2:34](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=154)** So now we have a bit of understanding of where this particular sales representative works.
>
> **[2:40](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=160)** I encourage you to spend some time with Bloom exploring this graph a little bit before we learn how to query it.
>
> **[2:46](https://www.linkedin.com/learning/graphrag-essential-training/exploring-the-neo4j-browser?u=76281980&t=166)** I'll meet you in the next video where we'll learn Cypher, the query language of graph databases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1)
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** node (4)
> **Env Vars:** csv (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Cypher basics: Writing your first queries
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=0)** - [Instructor] While being able to visualize a graph is very helpful, we need to learn how to query it.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=5)** Let's start by learning this in the browser and then we'll learn how to do it from Python.
>
> **[0:11](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=11)** Graph databases like Neo4j have their own query languages.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=15)** Neo4j uses a language called Cypher, which has a lot of similarities to SQL.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=20)** Don't worry, you'll see plenty in this course to pick up the basics.
>
> **[0:24](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=24)** In fact, there are a lot of parallels between SQL and Cypher.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=27)** For example, SQL, which is based on table oriented queries, uses the command called select to determine what you're looking for.
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=36)** Cypher, on the other hand, uses Match.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=39)** Additionally, Cypher is a graphical query language, which uses ASCII art to describe what it's looking for.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=47)** From the browser, click query on the left.
>
> **[0:51](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=51)** This brings up the Neo4j browser where we can start running Cypher queries.
>
> **[0:57](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=57)** Let's look at this query, for example.
>
> **[1:00](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=60)** Whenever you see round parentheses, that is graphically representing a node, whereas square brackets represent a relationship.
>
> **[1:09](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=69)** We can start with this query that just returns all nodes into a variable called A.
>
> **[1:15](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=75)** Cypher queries typically start with a match statement and end with a return statement.
>
> **[1:20](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=80)** We'll now click the run button on the right.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=85)** If we run this in the browser we get back a visualization of the nodes, but if we click on table, we can see the actual data stored in the variable A.
>
> **[1:36](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=96)** Here we see the node types such as territory and the node properties in the curly braces like territory description and territory ID.
>
> **[1:46](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=106)** Now, let's make this a bit more complicated and bring in relationships.
>
> **[1:53](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=113)** Here we are matching all nodes A connected through some relationship stored in the variable R to another node B.
>
> **[2:03](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=123)** If we run this, we can see clearly what the query returns.
>
> **[2:07](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=127)** Let's again click on table, which is a table of nodes and their associated properties, connected through different relation types to other nodes.
>
> **[2:17](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=137)** Remember that graphs can be directional.
>
> **[2:20](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=140)** This directionality can be represented graphically in our query by creating an arrow.
>
> **[2:25](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=145)** If we want to modify this query to represent the direction going from A to B, then we just add the greater than symbol indicating that direction, which Neo4j turns into an arrow like this.
>
> **[2:41](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=161)** Remember that we don't need to actually use variables if we only care about portions of the query.
>
> **[2:46](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=166)** For example, check out this query.
>
> **[2:51](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=171)** The only thing we are returning is the relationships from the query.
>
> **[2:54](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=174)** In this case, we then use the count statement to get the number of relationships.
>
> **[3:01](https://www.linkedin.com/learning/graphrag-essential-training/cypher-basics-writing-your-first-queries?u=76281980&t=181)** The match and return statements are the bread and butter of Cypher, but now let's start learning how to create more sophisticated queries to retrieve specific nodes in relationships.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for. (2), match. (1), this, (1), this. (1)
> **CLI Commands:** node (4), python (1), make (1)
> **Env Vars:** sql (3), ascii (1)
> **Analogies:** for example (3), such as (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### More cypher: Retrieving nodes and relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=0)** - [Instructor] Remember from before we had our basic query looking at all nodes connected to all other nodes through some relationship.
>
> **[0:10](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=10)** How would we modify this if we only cared about, say, employee nodes?
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=16)** We can indicate node and relationship types by specifying them in the match statement like this, where I'm saying that I want to find all A nodes that are of type employee.
>
> **[0:31](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=31)** I can also do this for the B nodes.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=33)** In this case, I'm saying that I care about employee nodes that have relationships with territories.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=42)** Let's change it up a bit.
>
> **[0:44](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=44)** Maybe I want to find all employee nodes that have a particular relationship, say, reports to, some other node.
>
> **[0:52](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=52)** I use the same syntax with the colon and the relationship type in the square brackets instead.
>
> **[0:59](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=59)** Be sure to use capitalization and underscores since it's the format used in this graph.
>
> **[1:05](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=65)** Great, now we have a way to select nodes and relationships in bulk.
>
> **[1:10](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=70)** But what if I wanted to find specific nodes?
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=73)** Here's where the properties really help.
>
> **[1:15](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=75)** Let's click on that sales manager node and see what properties are available.
>
> **[1:21](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=81)** I can see those properties in the tab on the right.
>
> **[1:24](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=84)** Scrolling through, I can see that employee nodes have a property called first name.
>
> **[1:30](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=90)** I can specify that in the query by using curly braces inside the node that I care about, like this.
>
> **[1:41](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=101)** Another way to do that is by using a where statement, like this one.
>
> **[1:48](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=108)** You might find that using where statements is helpful when you start having multiple properties you're searching over.
>
> **[1:54](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=114)** In this case, you can combine a where statement with an and just like you can in SQL to create a more sophisticated query.
>
> **[2:03](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=123)** Up until this point, we've been searching for single relationships between nodes, but Cypher is capable of much more than that, especially when we take advantage of the fact that it's a graphical language.
>
> **[2:14](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=134)** For example, say we care about all A nodes that are directionally connected somehow to B nodes that in turn are directionally connected to C nodes.
>
> **[2:24](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=144)** Here's what that query looks like.
>
> **[2:28](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=148)** Notice how we've just created the ASCII art to represent what I just described in words.
>
> **[2:34](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=154)** One thing that I find helpful as I start making more complicated queries like this is to draw them out on paper or a whiteboard because that is essentially the ASCII art you'll be creating.
>
> **[2:45](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=165)** Cool, so we've learned how to find specific nodes and relationships in our graph.
>
> **[2:51](https://www.linkedin.com/learning/graphrag-essential-training/more-cypher-retrieving-nodes-and-relationships?u=76281980&t=171)** While Cypher is capable of doing much more than this, what we've learned in these simple commands is enough to get us started in creating our GraphRAG applications.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), node (4)
> **Code Keywords:** this, (2), case, (2), let (2), this. (1)
> **Env Vars:** ascii (2), sql (1)
> **UI Navigation:** click on (1), in the tab (1)
> **Analogies:** just like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Connecting Python to Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=0)** - [Instructor] Up until this point, we've been using the Neo4j browser to query the database, but in order to create GenAI applications based on Graphrag, we're going to want to do this in Python.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=12)** Fortunately, there's a Python driver for Neo4j that makes this easy for us.
>
> **[0:17](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=17)** Let's take a look at how it works using code spaces.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=20)** First, navigate to the Notebooks directory to look for the O207 notebook.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=27)** Looking at this notebook, you can see that we're importing a few packages.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=32)** The most important one is this Neo4j driver, which we'll use to connect the database.
>
> **[0:41](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=41)** Remember those credentials that we downloaded when we created our Aura DB instance?
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=47)** Now we need them because they contain the URL and password we need.
>
> **[0:52](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=52)** I'm going to copy the URL from that credentials text file into our .ENV file in code spaces.
>
> **[1:02](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=62)** We'll do the same thing for the password.
>
> **[1:10](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=70)** Now we're going to run our code.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=73)** If it asks you for a Python environment, be sure to select the Python 3.12 environment that it gives you as an option.
>
> **[1:23](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=83)** In this next block of code, I've created a class that manages the Neo4j connection for us.
>
> **[1:29](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=89)** Eventually, we'll switch to another method of connecting when we start using Lang Chain, but for now, we'll use this basic class for making the connection and doing some basic queries.
>
> **[1:42](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=102)** Cool, we now have the connection to the database established.
>
> **[1:46](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=106)** Let's run a basic cipher command to make sure that we're really connected.
>
> **[1:51](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=111)** We can just create a string for our cipher query and pass that into our driver connection.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=117)** This particular query returns the counts of the number of nodes.
>
> **[2:02](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=122)** It says 1104, which is the correct value.
>
> **[2:06](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=126)** Let's just quickly run another query and get back the results.
>
> **[2:11](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=131)** Awesome, we've made the connection from Python to Neo4j and can run some basic queries.
>
> **[2:17](https://www.linkedin.com/learning/graphrag-essential-training/connecting-python-to-neo4j?u=76281980&t=137)** Next, let's look at how to format the output of those queries to be formats that Python likes to work with.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), make (1)
> **Code Keywords:** let (4), switch (1), pass (1)
> **Env Vars:** url (2), o207 (1), env (1)
> **UI Navigation:** navigate to (1), select the (1), switch to (1)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)

#### Testing your setup with Cypher queries
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=0)** - [Narrator] We've seen that we can query the database from Python.
>
> **[0:03](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=3)** Now let's talk about how to get the results of those queries into more Pythonic data structures.
>
> **[0:11](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=11)** Just a quick note that I've moved that Neo4j connection class into a utilities file, so we can just start right on in the querying.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=20)** Let's start by looking at what our connection class is returning.
>
> **[0:26](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=26)** We can see here that it's returning a list of records for a, b and r.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=32)** That's great, but the format of this list is not entirely useful in its current form in Python, but it's easy to convert that to a list of dictionaries like this.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=47)** Now, notice that the top level dictionary has nested dictionaries for a, b and r.
>
> **[0:55](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=55)** In fact, I find this way of looking at the data in Neo4j more helpful than Cipher because it's easy to see the properties fully shown on the screen.
>
> **[1:05](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=65)** We can easily get these results into a Pandas data frame using this command.
>
> **[1:11](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=71)** Let's look at a bit more sophisticated query as an example of how to pass variables from Python into Neo4j.
>
> **[1:18](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=78)** Here, we're going to get a product labeled P.
>
> **[1:23](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=83)** Next, let's look for intermediate relationships where that product is part of a category.
>
> **[1:31](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=91)** Then we have this interesting bit of cipher where the category is the parent of another category, but here we have this bit of syntactic sugar where the *0.. means zero hops or more hops to another category.
>
> **[1:49](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=109)** This might sound funny, zero hops.
>
> **[1:52](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=112)** What this means is that the immediate category might already have the category name of beverages, but if not, it will traverse upwards through parent categories, like going from a subcategory to a parent category until it reaches a category with the category name of beverages.
>
> **[2:12](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=132)** And then, we're just going to return a list of those products.
>
> **[2:17](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=137)** More specifically, we'll take the product name property and rename it as product.
>
> **[2:25](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=145)** So when we run this in Python, we can see that we get our typical list of dictionaries where each entry is the product name of those products that are either directly a beverage or have a parent category of beverage.
>
> **[2:37](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=157)** Awesome.
>
> **[2:38](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=158)** We now have the ability to run cipher queries on our Neo4j database without ever leaving Python.
>
> **[2:45](https://www.linkedin.com/learning/graphrag-essential-training/testing-your-setup-with-cypher-queries?u=76281980&t=165)** Now that we know how to work with Neo4j and Cipher in Python, we have everything we need to start building cool gen AI apps using graphrag.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), find (1)
> **Code Keywords:** let (4), this. (1), pass (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 3. Building Your First Knowledge Graph for Graph Retrieval-Augmented Generation (GraphRAG)

#### Introduction to Retrieval-Augmented Generation (RAG)
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=0)** - [Instructor] RAG is a two-step process.
>
> **[0:02](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=2)** First, the AI searches for relevant information from a trusted source.
>
> **[0:07](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=7)** Then, it crafts a response based on what it found, making the output both relevant and accurate.
>
> **[0:14](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=14)** There's practically no limit to the data you can use for RAG.
>
> **[0:18](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=18)** This data can come from PDFs, websites, structured databases, or even real-time APIs.
>
> **[0:24](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=24)** Basically any source that holds the truth AI needs.
>
> **[0:29](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=29)** For example, in this course, we're going to work with graphs as our RAG, and we'll be creating those graphs from unstructured data, like PDF documents.
>
> **[0:38](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=38)** I hope you will see that RAG isn't just cool, it's practical.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=42)** It makes AI more reliable for things like customer support, research, medical advice, and even coding help.
>
> **[0:52](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=52)** Whenever you need facts plus AI-generated insights, RAG is the way to go.
>
> **[0:58](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-retrieval-augmented-generation-rag?u=76281980&t=58)** Now that you know what RAG is, we'll explore how to build it using Python, and of course, graphs.

> [!info]- Semantic Content
>
> **Env Vars:** rag (6), pdf (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### How RAG works with vector embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=0)** - [Instructor] It turns out that there are several different ways you can do RAG, but most of them boil down to either vector-based approaches or graph-based approaches.
>
> **[0:09](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=9)** Let's talk about vectors first.
>
> **[0:11](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=11)** Remember, RAG is all about retrieving useful information before generating a response.
>
> **[0:18](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=18)** But how do we find the right pieces of information?
>
> **[0:22](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=22)** Traditional keyword searches aren't great for this, because they're too rigid.
>
> **[0:26](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=26)** Remember our example with the word apple?
>
> **[0:28](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=28)** If you just do a keyword search, you're likely to come up with the wrong answer.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=33)** Ultimately, the driving force behind all gen AI applications is math.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=39)** Don't worry though.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=39)** We won't be solving equations in this course.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=42)** What's happening in the heart of gen AI is that the models are taking the language you give them and turning it into numbers it can use for doing that math.
>
> **[0:52](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=52)** Using a very, very large equation, they then try to predict something, like what the next most likely word is.
>
> **[1:00](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=60)** So the LLM starts by taking the text you've given it and converts it into what's called a vector embedding or a list of floating point numbers that represent the conversion of that text into the coefficients of the giant equation.
>
> **[1:14](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=74)** Think of these vector embeddings as how the LLM is capturing the meaning of what you're saying.
>
> **[1:20](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=80)** Instead of just capturing words, the LLM is representing those words mathematically, where similar words or phrases like dog and puppy would be neighbors in the vector space, but dog and toaster would be pretty far apart.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=94)** This is pretty cool, because when you ask a RAG-powered AI a question, it isn't just looking for matching words.
>
> **[1:41](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=101)** It looks for similar context in the vector space.
>
> **[1:45](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=105)** So the process is this.
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=107)** First, you convert your sources of truth, like documents, articles, and databases, into vectors, which are stored in a vector database.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=117)** Next, you convert your input question into a vector.
>
> **[2:01](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=121)** Once you have that, the system searches for the vector in the database that is mathematically closest to your input question.
>
> **[2:10](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=130)** Finally, gen AI takes that result and converts it back to text, which is provided to you in natural language.
>
> **[2:17](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=137)** Pretty neat, huh?
>
> **[2:18](https://www.linkedin.com/learning/graphrag-essential-training/how-rag-works-with-vector-embeddings?u=76281980&t=138)** Vector embeddings are a powerful way to do RAG, but that being said, there is a way that can be even more powerful and that's graph RAG, which we'll talk about next.

> [!info]- Semantic Content
>
> **Env Vars:** rag (5), llm (3)
> **Code Keywords:** let (1), this, (1), this. (1), finally, (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Improving your RAG with graphs: GraphRAG
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=0)** - So you already know that retrieval augmented generation or RAG helps gen AI pull in relevant facts before generating responses.
>
> **[0:09](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=9)** But let's talk about why GraphRAG is often a better choice than just using vector search.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=15)** As we saw in the last video, vector search is powerful.
>
> **[0:18](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=18)** It finds similar things.
>
> **[0:21](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=21)** But similarity isn't always enough.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=23)** Context matters, relationships matter.
>
> **[0:26](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=26)** That's where graphs shine.
>
> **[0:29](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=29)** Think of a vector search like finding books in a library by topic.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=33)** It's great at matching content to a subject.
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=36)** But what if you need a book written by an expert on the topic rather than one about the topic itself?
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=42)** A graph can make that connection.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=45)** Graphs don't just store data, they connect it.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=48)** They tell you who knows who, what influences what, and how things are related beyond just keyword overlap and context similarity.
>
> **[0:57](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=57)** This means you can retrieve information based on relationships, not just surface-level similarity.
>
> **[1:03](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=63)** You can follow a trail of connections to deepen retrieval.
>
> **[1:08](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=68)** For example, let's say you ask gen AI about a specific law.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=72)** A vector search might find similar legal documents, but a graph can also link to relevant court cases, expert opinions, and legislative history, even if they don't use the same wording.
>
> **[1:24](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=84)** Graphs also help with disambiguation.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=87)** Say you ask about Python.
>
> **[1:29](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=89)** A vector search might return results about both the programming language and the snake.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=95)** A graph knows the difference because it understands contextual connections, like whether your query is linked to coating or wildlife.
>
> **[1:44](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=104)** Another win for GraphRAG. Explainability.
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=107)** If an AI response comes from a graph, you can trace the reasoning.
>
> **[1:52](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=112)** Why did it reference that paper?
>
> **[1:54](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=114)** Because it's linked to an expert in the field.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=117)** And let's talk about how you update a RAG.
>
> **[2:00](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=120)** Adding new facts to a vector index can be tricky because you often need to reprocess the vector embeddings every time you add new text.
>
> **[2:09](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=129)** With a graph, you just add new nodes and relationships, making updates smoother.
>
> **[2:15](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=135)** So should you always use GraphRAG? Not necessarily.
>
> **[2:19](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=139)** If you're dealing with short, simple queries, vector search might be enough.
>
> **[2:24](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=144)** But if you need context, reasoning, or deep connections, GraphRAG gives you a serious edge.
>
> **[2:30](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=150)** To sum up, vectors give you similarity, graphs give you meaning.
>
> **[2:34](https://www.linkedin.com/learning/graphrag-essential-training/improving-your-rag-with-graphs-graphrag?u=76281980&t=154)** And when it comes to retrieval, meaning is everything.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1), python (1)
> **Code Keywords:** let (3)
> **Env Vars:** rag (2)
> **Cross-References:** as we saw (1), in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### Overview of LangChain
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=0)** - [Instructor] Once we start programming GenAI applications in this course, we're going to be using a Python package called LangChain.
>
> **[0:08](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=8)** LangChain is a developer framework for working with large language models.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=12)** It's designed to make building AI applications easier and more flexible.
>
> **[0:17](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=17)** Think of LangChain as a toolkit that gives you the building blocks to structure and control how an LLM interacts with users and data.
>
> **[0:26](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=26)** One of the things about it that makes it so useful is just how modular it is.
>
> **[0:30](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=30)** It has functions that let you connect to LLMs, create and standardize prompts, keep track of past interactions and pull data from outside sources.
>
> **[0:40](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=40)** By providing these abstractions, LangChain reduces the amount of code you need to write and makes AI development much easier.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=48)** One great thing about it is that it supports a wide range of integrations, making it easy to connect your code to your data.
>
> **[0:55](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=55)** It works with all of the popular LLMs, like those from OpenAI and Anthropic, databases like Neo4j and cloud services like AWS Azure and GCP.
>
> **[1:08](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=68)** In just a minute, we'll actually begin programming with LangChain.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=72)** But I want to show you what the general approach looks like for creating basic GenAI applications.
>
> **[1:18](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=78)** As the name chain in LangChain implies we're going to chain things together to make our GenAI applications.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=85)** And the things we chain together are various steps of the GenAI process.
>
> **[1:35](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=95)** Usually when we work with LLMs, we begin with the prompt.
>
> **[1:39](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=99)** The prompt is a set of instructions that we pass to the LLM to tell it what to do.
>
> **[1:44](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=104)** Prompts can come in a few varieties.
>
> **[1:46](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=106)** First, there are system prompts.
>
> **[1:49](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=109)** Think of these as the basic foundational instructions that define the behavior you expect to see from your app.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=117)** Then there are other human prompts.
>
> **[1:59](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=119)** These are the things the users say to the app that drive the conversation or query.
>
> **[2:06](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=126)** The overall prompt is the combination of the system prompt and the human prompt, which are both passed to the LLM.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=133)** One of the nice things about LangChain is that it gives you templates for all of these to create that prompt.
>
> **[2:20](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=140)** Once we have the prompt, we need to pass it to the LLM.
>
> **[2:23](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=143)** Again, LangChain provides a convenient way to do that, like I'm showing here for ChatGPT-4o.
>
> **[2:32](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=152)** Finally, we represent the action of the prompt passing its information to the LLM as a chain using L cell.
>
> **[2:39](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=159)** The LangChain expression language.
>
> **[2:42](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=162)** L cell uses the pipe operator to define data flow between each of the components of the chain.
>
> **[2:49](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=169)** Once the chain is created, we invoke it or send input to it in order to have the LLM generate information.
>
> **[2:58](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=178)** When we start coding shortly, we'll get to see this pattern of combining prompts and LLMs to create chains.
>
> **[3:06](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=186)** But it's important to know that LangChain is moving fast.
>
> **[3:10](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=190)** It's under constant rapid development with frequent updates that can introduce new features or change existing ones.
>
> **[3:18](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=198)** Because of this, I highly recommend that you check the documentation regularly.
>
> **[3:23](https://www.linkedin.com/learning/graphrag-essential-training/overview-of-langchain?u=76281980&t=203)** That way these changes don't catch you by surprise with code that all of the sudden doesn't work anymore.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), aws (1), gcp (1)
> **Code Keywords:** pass (2), let (1), finally, (1), this, (1)
> **CLI Commands:** make (2), python (1), aws (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Key concepts in LangChain for graph workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=0)** - [Instructor] We've seen the basics of how to create chains in LangChain to take user input through a prompt and run it through an LLM.
>
> **[0:08](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=8)** But how does this apply to graphs?
>
> **[0:10](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=10)** It turns out that LangChain has its own integration of Neo4j and other graph tools.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=15)** I guess they realize the importance of graphs to gen AI.
>
> **[0:19](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=19)** This is going to help us in many ways as we set up to do GraphRAG.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=23)** Using the LangChain Neo4j integration, we can do a lot of things like establish a connection to the database, replace our Cypher queries with natural language queries, and even create our own knowledge graphs, all from within one ecosystem.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=39)** In order to work with this integration, we need to make sure we have the LangChain Neo4j package installed.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=45)** Using that package and our Neo4j credentials saved in the .env file, we start by making a connection to the database.
>
> **[0:55](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=55)** Now, let's use this graph to create a new type of chain, a question answering chain.
>
> **[1:02](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=62)** To do this, we'll use the GraphCypherQAChain built into LangChain.
>
> **[1:07](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=67)** You might be curious about the allow_dangerous_requests variable.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=73)** We've set this to true in order to tell LangChain that we're using our narrowly-scoped credentials for accessing our database, which we are.
>
> **[1:21](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=81)** Also notice that we've included our LLM in this call.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=85)** This is because we're about to do something really cool.
>
> **[1:29](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=89)** Instead of using Cypher to query the database, we're going to use natural language, so we need to have an LLM translate that natural language into Cypher.
>
> **[1:39](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=99)** Let's give that a run now.
>
> **[1:40](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=100)** I've set verbose to True so we can watch what's happening behind the scenes.
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=107)** You can see the Cypher query that was generated by the LLM and there you have it.
>
> **[1:51](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=111)** The model created the correct Cypher query and returned the results back to us in natural language.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=117)** Amazing.
>
> **[1:59](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=119)** Now, we can take this really basic code and start creating some awesome things on real data.
>
> **[2:05](https://www.linkedin.com/learning/graphrag-essential-training/key-concepts-in-langchain-for-graph-workflows?u=76281980&t=125)** Let's go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **Env Vars:** llm (4)
> **CLI Commands:** make (1)
> **Code Identifiers:** allow_dangerous_requests (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Populating a knowledge graph into Neo4j using LangChain
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=0)** - [Instructor] Up until now, we've been working with a graph that's pre-populated in Neo4j, but now it's time to start creating our own knowledge graphs.
>
> **[0:09](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=9)** There are a ton of different ways you can do this, but I'm going to show you a quick and simple way to convert raw text into a graph using some tools and Lang Chain.
>
> **[0:19](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=19)** Before we begin, I want to remind you that Lang Chain is under constant development, especially when it comes to working with graphs.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=27)** So always make sure you have the most current versions of the packages and check with the documentation regularly.
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=33)** Since we're going to create a brand new graph, I recommend you create a whole new database.
>
> **[0:38](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=38)** The easiest way to do this is to delete our old database and create a new one.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=47)** Don't forget to save those credentials because we'll need them when we make the new connection.
>
> **[0:54](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=54)** After a few minutes, your new database will be ready.
>
> **[1:00](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=60)** Let's start by connecting our Neo4j database like we did before.
>
> **[1:05](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=65)** Be sure to update your .ENV file with the credentials of your new database like we did earlier in the course.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=73)** Our goal is going to be to take some raw text and turn it into a graph.
>
> **[1:17](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=77)** So let's start with that text here.
>
> **[1:21](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=81)** Before Gen AI, if we wanted to turn this into a graph, we'd have to do some fancy, complicated natural language processing by getting our subjects, verbs and objects and uploading them into the graph.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=94)** It was ugly, but fortunately, Lang Chain has this LLM graph transformer tool to do it for us.
>
> **[1:43](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=103)** So now what we need to do is put that text in a format that Lang Chain can work with called a document.
>
> **[1:50](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=110)** Then the LLM will take that document and convert it to a graph document, which is something that Neo4j will understand, check this out.
>
> **[2:00](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=120)** Now that we have that graph document, we can add it to the Neo4j database like this.
>
> **[2:07](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=127)** Great, let's see if this makes sense.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=133)** We can see that we have a few nodes and relationships and that makes sense.
>
> **[2:24](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=144)** Let's see what our graph looks like.
>
> **[2:31](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=151)** If your graph doesn't look exactly like mine, don't worry.
>
> **[2:35](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=155)** LLMs are not deterministic, meaning that every time you run something through them, you'll get something slightly different, but hopefully it still makes sense given the text.
>
> **[2:45](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=165)** There's one last thing I want to show you.
>
> **[2:47](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=167)** It can be helpful when making these graphs to actually include the relevant text in the node.
>
> **[2:53](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=173)** So let's start by deleting all of the nodes and relationships from the graph like this.
>
> **[3:00](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=180)** Now we're going to slightly modify how we added our graph documents to the graph by including the source documents like this.
>
> **[3:13](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=193)** Now, if we go back to Neo4j, you can see that I have this new node that has the label document.
>
> **[3:23](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=203)** If I click on it, I can see the text of that document as well as how the other nodes in the graph are related to it.
>
> **[3:30](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=210)** And just like that, we've created our first knowledge graph.
>
> **[3:34](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=214)** Play around with this and different text strings.
>
> **[3:37](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=217)** This is going to be the basis for everything that we do moving forward.
>
> **[3:41](https://www.linkedin.com/learning/graphrag-essential-training/populating-a-knowledge-graph-into-neo4j-using-langchain?u=76281980&t=221)** So have fun with it and see what kind of cool knowledge graphs you can make.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (3), this, (1), delete (1)
> **CLI Commands:** make (3), node (2)
> **Env Vars:** llm (2), env (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Best Practices:** always make sure (1), don't forget (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)

#### Challenge: Query your knowledge graph with Cypher
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=5)** - [Instructor] Now's your chance to try this out for yourself.
>
> **[0:08](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=8)** You're going to take what we've learned to this point and create your own knowledge graph.
>
> **[0:13](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=13)** I recommend starting with another new Neo4j AuraDB instance, since you can only have one free instance running at a time.
>
> **[0:21](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=21)** While you're waiting for your new database to be created, think about what topic you'd like to create a knowledge graph around.
>
> **[0:28](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=28)** You can choose any topic you like.
>
> **[0:30](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=30)** Once you've decided, you need to find some text about that topic.
>
> **[0:34](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=34)** Good sources of text could be anything from webpages to news articles or even books on the subject.
>
> **[0:41](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=41)** So, go find some text and copy and paste it into the notebook to create your own knowledge graph.
>
> **[0:47](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=47)** Once your graph is created, be sure to explore it with either the Neo4j browser or in Python or both.
>
> **[0:54](https://www.linkedin.com/learning/graphrag-essential-training/challenge-query-your-knowledge-graph-with-cypher?u=76281980&t=54)** Then, come back for the next video where I'll show you how I created mine.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), python (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Query your knowledge graph with Cypher
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=5)** - [Instructor] Hopefully that challenge went well for you and you've now created your own knowledge graph on the subject of your choice.
>
> **[0:11](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=11)** Let me show you how I created and queried mine.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=15)** To find my solutions, use Git to check out the solutions branch in the repo.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=20)** Then go to the notebooks directory and navigate to the solutions subdirectory, where you will then open the 03_08 notebook.
>
> **[0:29](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=29)** You will also need to repopulate your .ENV file when you do this.
>
> **[0:34](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=34)** For my knowledge graph, I picked a subject near and dear to my heart that I know a fair bit about, skiing.
>
> **[0:41](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=41)** One way you could get this information on your topic is to go copy and paste the text off of Wikipedia, but in my case, I decided to use this Wikipedia loader abstraction built into LangChain.
>
> **[0:54](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=54)** You give it a keyword and it goes and finds the Wikipedia pages associated with it.
>
> **[1:02](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=62)** It's nice because not only does it go and find several pages, but it converts them automatically to the LangChain document format.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=73)** It returned a list of 25 documents and what it returned looks pretty reasonable, so let's add them to the graph.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=85)** This will take several minutes to run, depending on the length of your text.
>
> **[1:30](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=90)** Like we did in an earlier video, I used the LangChain LLM Graph Transformer to extract the nodes and relationships from the list of documents, and then use the add graph documents method to populate my Neo4j database.
>
> **[1:45](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=105)** And just a quick note, if you see an error message like this one talking about a timeout error, that is telling you that the previous block of code took a bit too long to run, so you need to reestablish the connection.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=117)** If you just rerun this cell, it should take care of it.
>
> **[2:02](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=122)** Here's a tip, knowledge graphs are only as good as the nodes and relationships you can put in them.
>
> **[2:08](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=128)** So check to be sure your graph has enough information in it.
>
> **[2:12](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=132)** It's a judgment call, but if it doesn't, you can always get more data on your subject by adding more text from other sources.
>
> **[2:21](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=141)** Let's start by taking a look at all of the nodes and relationships and see if they made sense.
>
> **[2:28](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=148)** Just looking at this visualization in the Neo4j browser, I can see that there are many things that make sense.
>
> **[2:35](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=155)** I have document nodes that show the text that was used to make this portion of the graph.
>
> **[2:41](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=161)** You can see also the nodes and relationships extracted from that portion.
>
> **[2:46](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=166)** And it's cool that we see some nodes that are common across many documents like this one here.
>
> **[2:53](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=173)** Awesome, now you've seen how to create a knowledge graph of raw text using some very simple methods.
>
> **[3:00](https://www.linkedin.com/learning/graphrag-essential-training/solution-query-your-knowledge-graph-with-cypher?u=76281980&t=180)** Moving forward, we'll use this knowledge graph to create a GraphRAG question answering application.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2), git (1)
> **Code Keywords:** let (3), this. (1), case, (1)
> **UI Navigation:** go to (1), navigate to (1), open the (1)
> **Env Vars:** env (1), llm (1)
> **Speakers:** - [instructor] (1)


### 4. Connecting Knowledge Graphs to Generative AI

#### Creating a GraphRAG pipeline with LangChain to query your data
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=0)** - [Instructor] Now that you've created your own knowledge graph, we're going to learn how to create a GraphRAG pipeline of that graph with LangChain.
>
> **[0:08](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=8)** As usual, we'll make our connection to our graph with the Neo4j graph method shown before.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=15)** I always like to verify that I'm really connected by doing a quick, simple query like counting nodes.
>
> **[0:22](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=22)** Cool.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=23)** Now we're going to create a chain with LangChain to create a question answering application using our graph.
>
> **[0:30](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=30)** Remember when we learned about prompts?
>
> **[0:33](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=33)** Most chains will start with the prompt, which is what we'll do as well.
>
> **[0:37](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=37)** Here we'll create a prompt to convert natural language into Cypher.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=42)** There are a few things we should notice about this prompt.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=45)** First, we start by telling the LLM who we are; An expert Neo4j developer translating questions into Cypher.
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=53)** Next, we provide a little information about what subject area's being covered.
>
> **[0:58](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=58)** Skiing in my case, but you should change this to your subject area.
>
> **[1:03](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=63)** Then here's a little gotcha: You see this bit where I told it to convert the first letter to capital case?
>
> **[1:10](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=70)** This is because I noticed when I visualized my graph that all of the node titles had capital letters.
>
> **[1:16](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=76)** Anytime you can provide these kind of hints to the LLM in your prompt, you should do it.
>
> **[1:21](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=81)** You'll get better answers.
>
> **[1:23](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=83)** You may or may not need to do this depending on how the LLM generated your graph.
>
> **[1:28](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=88)** Remember that they are not deterministic.
>
> **[1:30](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=90)** Finally, I pass in the schema of the graph and the question.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=94)** The schema is automatically generated by the graph object and passed to the LLM, so you don't have to worry about it.
>
> **[1:41](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=101)** Awesome, we now can take our prompt and generate a prompt template like we did before.
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=107)** Notice that we don't need to do anything fancy or complicated here, like creating a system prompt and a human prompt.
>
> **[1:54](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=114)** We're just creating a basic prompt template.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=117)** Now that we have our prompt and we've already created our LLM above, we can create our chain using the GraphCypherQAChain from LLM method.
>
> **[2:09](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=129)** So here we pass in our LLM graph and prompt.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=133)** Notice that I set verbose to true, so that way we can get a lot of detail about what's happening when we ask questions of the chain.
>
> **[2:21](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=141)** This is really helpful in debugging.
>
> **[2:24](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=144)** All right, now we can start asking questions.
>
> **[2:28](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=148)** Particularly when I first start working with a graph, I like to see what type of questions I might be able to ask it.
>
> **[2:35](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=155)** For example, there's this node here about cross country skiing, so let's ask our LLM about that.
>
> **[2:44](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=164)** Here I'm going to ask a very specific question where I'm hinting at the node labels, such as activity and equipment.
>
> **[2:53](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=173)** After a few seconds, the Cypher query the LLM created makes sense.
>
> **[2:58](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=178)** And then we get the output.
>
> **[3:01](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=181)** The output is the LLM taking the results of the Cypher query and turning it into natural language.
>
> **[3:06](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=186)** Pretty neat, huh? Let's ask something more vague.
>
> **[3:12](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=192)** I'll ask it to just tell me about ski touring and see what it does.
>
> **[3:18](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=198)** You notice here that Cypher generated a much more sophisticated query, which has many different types of relationships specified in it.
>
> **[3:28](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=208)** This is because the question was so vague and now we have the result, which looks pretty good to me, given what information the graph contains about this.
>
> **[3:37](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=217)** So take some time and ask questions of your knowledge graph and see what kinds of answers you get back.
>
> **[3:42](https://www.linkedin.com/learning/graphrag-essential-training/creating-a-graphrag-pipeline-with-langchain-to-query-your-data?u=76281980&t=222)** This is where the fun really begins.

> [!info]- Semantic Content
>
> **Env Vars:** llm (10)
> **Code Keywords:** pass (2), let (2), case, (1), finally, (1), this. (1)
> **CLI Commands:** node (3), make (1)
> **Exercise Files:** template (2)
> **Analogies:** for example (1), such as (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [instructor] (1)

#### Enhancing your knowledge graph with richer data
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=0)** - [Instructor] So far, we've created a pretty basic knowledge graph using content from the web.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=5)** While that's a great starting point, chances are in your Graph RAG applications, you'll want to add many other sources of data.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=12)** After all, your graph is only as good as the data you put into it.
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=16)** So let's talk about ways to bring in other data sources.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=20)** For this video, I'm going to show you how to bring in PDF files.
>
> **[0:25](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=25)** For demonstration purposes, I have this small PDF file about skiing that I'm going to use.
>
> **[0:31](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=31)** You should see if you can find a PDF or two about your subject.
>
> **[0:35](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=35)** It's helpful to find PDFs about subtopics that your graph might be lacking to provide additional information.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=42)** I'm going to load it in using a built-in LangChain tool for importing PDF files and extracting the text from them called PyPDFLoader.
>
> **[0:57](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=57)** When I do that, I get back a list of LangChain documents.
>
> **[1:01](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=61)** In LangChain, a document is a class that represents a chunk of content, typically from a file or external source, and it's used throughout LangChain to pass around text and metadata.
>
> **[1:14](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=74)** But if I look at how many documents we have, there are 11 of them, which correspond to the number of pages in this PDF file.
>
> **[1:22](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=82)** That's not going to fit in the context window of the LLM, so we're going to have to break it into smaller pieces.
>
> **[1:28](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=88)** This is where the concept of text splitting and chunking comes in.
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=93)** To demonstrate these concepts, let's use this ChunkViz web visualization tool.
>
> **[1:39](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=99)** You can see the different chunks are shown in the different colors here and change based on splitter type.
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=107)** The terms of chunking and splitting are frequently used interchangeably, but they mean slightly different things.
>
> **[1:53](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=113)** Chunking means breaking a large amount of text into pieces of a fixed size, usually specified by the number of characters or chunk size.
>
> **[2:03](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=123)** Splitting, on the other hand, means creating smaller pieces of text by breaking the full text at logical boundaries like periods and carriage returns.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=133)** But we run into trouble with splitting and chunking if we say the chunk size is simply 25 characters.
>
> **[2:21](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=141)** We'll wind up with chunks where meaningful information is in the next chunk.
>
> **[2:25](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=145)** Instead, we can include a term called chunk overlap, which determines the number of overlapping characters in common between neighboring chunks.
>
> **[2:35](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=155)** There are several different strategies you can use for splitting and chunking.
>
> **[2:39](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=159)** Let's use the Recursive Character Text Splitter, which is a good starting approach to your splitting.
>
> **[2:45](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=165)** The Recursive Character Text Splitter recursively tries to split the input using a hierarchy of separators like periods, commas, and carriage returns until it produces chunks that are no longer than chunk size and have chunk overlap between them to preserve context across boundaries.
>
> **[3:05](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=185)** All right, let's get back to the code.
>
> **[3:08](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=188)** So now I'll create our Recursive Character Text Splitter and specify a chunk size and chunk overlap.
>
> **[3:15](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=195)** Then we'll run our pages through them to get our chunks returned to us as a list of LangChain documents.
>
> **[3:24](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=204)** Once we have that, we can create our connection to our graph and our LLM Graph Transformer.
>
> **[3:31](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=211)** Next, we'll convert the LangChain documents into the nodes and relationships for our graph like we did before.
>
> **[3:38](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=218)** This part might take a minute as the LLM works to parse all of the chunks into the nodes and relationships, so go grab another cup of coffee and let it do its magic.
>
> **[3:48](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=228)** Now that this part is completed, we can add the nodes and relationships to the database like we did before.
>
> **[3:54](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=234)** Remember that it's okay if you get an error here about a timeout.
>
> **[3:58](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=238)** If you do, just run this cell again and it'll work.
>
> **[4:09](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=249)** And voila!
>
> **[4:10](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=250)** Just in adding 11 pages of that PDF, we've nearly doubled the number of nodes and relationships in our graph.
>
> **[4:17](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=257)** Our Graph RAG application just became that much smarter by enhancing the basic knowledge graph with even more intelligence.
>
> **[4:25](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=265)** LangChain has many, many more options for data it can read.
>
> **[4:29](https://www.linkedin.com/learning/graphrag-essential-training/enhancing-your-knowledge-graph-with-richer-data?u=76281980&t=269)** Check out the document loaders section in the LangChain API docs to get some ideas.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (6), llm (3), rag (2), api (1)
> **Code Keywords:** let (5), pass (1), type. (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using knowledge graphs in a GraphRAG pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=0)** - [Instructor] So, we've seen how we can run queries against our Knowledge Graph using the GraphCipherQAChain functionality.
>
> **[0:08](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=8)** This will be the basis of all of your GraphRag applications.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=12)** At this point, you might have come across problems as you've run this with the LLM, not entirely working well with your graph.
>
> **[0:20](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=20)** Maybe you saw it wasn't forming correct cipher queries.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=23)** That's because the LLM understands language, but not necessarily database schemas.
>
> **[0:29](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=29)** Remember when we started working with the LLM prompts and we passed in the database schema to try and address this?
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=36)** Let's dive into that a little more.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=39)** There's a famous saying in working with data, "Garbage in, garbage out."
>
> **[0:43](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=43)** In GenAI, this can refer to the quality of the input data or the effectiveness of the prompt.
>
> **[0:49](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=49)** In this video, we're going to work with the prompt.
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=53)** In order to create the best prompt, we want to understand the schema of the graph.
>
> **[0:58](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=58)** Like any other database, schema refers to how the data is organized.
>
> **[1:03](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=63)** In SQL, the schema shows the tables that exist, which columns are in each table, and which columns are in common among each table.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=72)** For graphs, the schema describes which type of nodes are connected to which other types of nodes.
>
> **[1:19](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=79)** We can get the graph schema in the Neo4j browser, using the CALL DB.schema.visualization procedure.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=87)** Another way to do this, and one that's going to be more helpful as we program our GraphRag applications, is by allowing LangChain to tell us what the schema is.
>
> **[1:38](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=98)** In our earlier video, the schema was automatically passed into the query, but we can also inspect it from within Python, using the graph object like this.
>
> **[1:51](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=111)** You can also get an enhanced schema by passing this additional keyword into the creation of the graph object.
>
> **[1:58](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=118)** You can see that this provides you additional information about which nodes exist of a given node type.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=133)** So, when you create your prompt, you want to be able to provide the LLM as much information as possible, so it can craft the most accurate cipher query possible.
>
> **[2:23](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=143)** In the case of my graph about skiing, I've done this by not only feeding the schema into the prompt, but I'm also describing the graph and the types of questions that can be asked of it here.
>
> **[2:35](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=155)** Another very powerful thing you can do is provide examples of some correct queries for this graph in the prompt.
>
> **[2:42](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=162)** This is called, Few Shot Learning, and is really effective at helping the LLM form accurate cipher queries.
>
> **[2:50](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=170)** This highlighted block shows how I have implemented a Few Shot Prompt.
>
> **[2:56](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=176)** Now we have our full pipeline.
>
> **[2:58](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=178)** We've gone from creating a prompt to tuning the prompt with Few Shot Learning.
>
> **[3:02](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=182)** We then combined the prompt and the LLM in a graph question answering chain, and now we'll ask some questions of it.
>
> **[3:11](https://www.linkedin.com/learning/graphrag-essential-training/using-knowledge-graphs-in-a-graphrag-pipeline?u=76281980&t=191)** These are all the building blocks you need now to have your own working GraphRag application.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), sql (1), call (1)
> **Code Keywords:** let (1), this, (1), this. (1), type. (1)
> **CLI Commands:** python (1), node (1)
> **Definitions:** refers to (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Comparing the GraphRAG results to a traditional vector-based RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=0)** - [Instructor] We've now seen how we can create a knowledge graph and implement it into our GraphRAG pipeline.
>
> **[0:06](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=6)** But you might be asking yourself, is it really worth it?
>
> **[0:10](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=10)** Both vectors and graphs have a role to play in RAG and it's helpful to think about where each really shines.
>
> **[0:17](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=17)** Let's start with traditional RAG based on vectors.
>
> **[0:21](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=21)** Vector-based RAG is great at handling large scale unstructured datasets.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=27)** Remember, it's based on semantic similarity searches of a vector database.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=32)** This means that its accuracy is heavily based on which models you choose for embeddings and queries, and the quality of the indexed information you put into the database.
>
> **[0:43](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=43)** Also, you want to keep in mind database performance, particularly as your knowledge base grows since this will really impact the speed of your application.
>
> **[0:53](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=53)** GraphRAG, on the other hand, is the better choice when you have complex subjects that require deep understanding and reasoning.
>
> **[1:00](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=60)** This is because graphs are better than vectors at taking advantage of the relationships and hierarchies between data points.
>
> **[1:08](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=68)** You just can't capture that in a vector.
>
> **[1:10](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=70)** The downside with using a graph, as we've seen, include getting data accurately and completely converted into nodes and relationships as well as getting the LLM to properly translate your question into a graph query like with Cipher.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=85)** In fact, peer-reviewed research is starting to demonstrate that there are particular subjects that GraphRAG performs better than VectorRAG.
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=93)** As you get more comfortable with GraphRAG, you can even start considering hybrid approaches where you store the vector embeddings in the graph itself and create your queries on both.
>
> **[1:44](https://www.linkedin.com/learning/graphrag-essential-training/comparing-the-graphrag-results-to-a-traditional-vector-based-rag?u=76281980&t=104)** So let's get back to our graphs and start evaluating them for accuracy.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3), llm (1)
> **Code Keywords:** let (2), require (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Evaluating your GraphRAG pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=0)** - [Instructor] Whenever you create any application with GenAI, you should also create a plan to test and evaluate it.
>
> **[0:07](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=7)** It's also best practice to be constantly evaluating your applications as you make changes to them.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=12)** Otherwise, how do you know your changes were helpful?
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=16)** At this point, you've built your knowledge graph, set up a retrieval, and now it's time to ask, "Is this thing actually working?"
>
> **[0:24](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=24)** Our goal is simple.
>
> **[0:25](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=25)** We want to make sure our answers are both relevant and accurate given the user's questions and the underlying graph.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=32)** Let's talk about accuracy, probably the most common way to evaluate any kind of RAG system.
>
> **[0:38](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=38)** In this context, accuracy means, did the model give the correct answer to the question?
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=45)** The easiest way to assess that is by giving the model a series of questions that we have ground-truth answers for.
>
> **[0:51](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=51)** You can then score the model's answers against the desired answer.
>
> **[0:56](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=56)** Ideally, you want to have many questions that you're evaluating against, but scoring that many questions can be time-consuming.
>
> **[1:03](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=63)** So instead, we'll let an LLM do it for us.
>
> **[1:07](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=67)** So let's code that up.
>
> **[1:09](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=69)** There are a lot of different packages out there for evaluating GenAI performance, including the popular LangSmith package from LangChain.
>
> **[1:17](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=77)** However, we are going to use this very simple class in LangChain called QAEvalChain.
>
> **[1:24](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=84)** It helps grade whether a model-generated answer matches a reference answer.
>
> **[1:31](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=91)** We'll start by creating a series of question-answer pairs appropriate to our particular knowledge graph.
>
> **[1:39](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=99)** I'm only going to use a small set for demonstration purposes, but you should create as large of a set as practical.
>
> **[1:46](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=106)** A good set involves a diverse list of questions that will query many different parts of the graph.
>
> **[1:53](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=113)** Next, we create our evaluation chain.
>
> **[1:58](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=118)** Finally, we run each of our questions through the LLM and compare the answers to the ground-truth answer.
>
> **[2:16](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=136)** We can see here that we got an accuracy of about 67%.
>
> **[2:21](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=141)** You should run your test questions a few times though, because LLMs give slightly different answers each time due to their probabilistic nature.
>
> **[2:29](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=149)** This is also why it's a good idea to have a large set of test questions, so you get a better understanding of the statistical distribution of the scores.
>
> **[2:38](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=158)** So this simple approach gives you a basic accuracy score or how many answers matched what you expected.
>
> **[2:44](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=164)** Remember, there are many different metrics you can use to evaluate your GraphRAG applications, such as helpfulness, relevance, or even traceability in the graph.
>
> **[2:53](https://www.linkedin.com/learning/graphrag-essential-training/evaluating-your-graphrag-pipeline?u=76281980&t=173)** But for quick testing and evaluation, accuracy is your friend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for. (1), finally, (1)
> **Env Vars:** llm (2), rag (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Evaluate your GraphRAG application
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=5)** - [Instructor] Now it's your turn.
>
> **[0:06](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=6)** You've created a knowledge graph in Neo4j and a QA pipeline with LangChain.
>
> **[0:11](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=11)** But how well does it work?
>
> **[0:14](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=14)** It's time for you to create some question-answer pairs to find out.
>
> **[0:18](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=18)** I recommend you create at least 10 of them and calculate the accuracy from there.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=23)** Whenever I do this, I always find some interesting things.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=27)** You might find that the Cypher queries the LLM generates are not great.
>
> **[0:31](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=31)** In that case, it always helps to provide some example queries in the prompt as few-shot learning to guide the LLM to do better, or you might find that there are missing bits of knowledge in your graph.
>
> **[0:44](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=44)** The solution to that is to get some more data or otherwise enhance the graph.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=48)** It's a great idea during this phase to make sure you have verbose set to true so you can see what the LLM is doing at every step.
>
> **[0:57](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=57)** Take some time with this and learn where your application is working well and where it needs additional guidance, and don't be frustrated if you don't get great results right away.
>
> **[1:07](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=67)** Learning to tune the prompts and the graph to your application is what makes great AI engineers.
>
> **[1:13](https://www.linkedin.com/learning/graphrag-essential-training/challenge-evaluate-your-graphrag-application?u=76281980&t=73)** So, meet me in the next video to see how I solved it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (1)
> **Env Vars:** llm (3)
> **Code Keywords:** this, (1), case, (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Evaluate your GraphRAG application
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=5)** - So hopefully at this point, you've had a chance to create some test questions for your graph and see how your GraphRAG application does at answering them.
>
> **[0:13](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=13)** And if you're like most of us, you probably found out you had to tweak things quite a bit as you discovered how the evaluation responded.
>
> **[0:22](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=22)** There are two places you can tweak things, the prompt and the questions.
>
> **[0:27](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=27)** So as you worked with it more, hopefully you played around with both of those in an attempt to create a better evaluation.
>
> **[0:34](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=34)** Remember to use GIT in order to check out the solutions branch instead of the main branch if you want to see my code.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=42)** I also want to tell you that crafting good QA pairs for evaluation of your GraphRAG can be really tricky and take a lot of trial and error.
>
> **[0:50](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=50)** So don't be frustrated if it takes you several tries at this.
>
> **[0:54](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=54)** That happens for me too, and you will see it in this video.
>
> **[0:57](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=57)** Let's go over how I did my evaluation and what I learned along the way.
>
> **[1:04](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=64)** Here I have three simple questions.
>
> **[1:08](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=68)** In this notebook, I've wrapped the evaluation in a function for ease of use.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=72)** Now let's run it and see what happens.
>
> **[1:27](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=87)** As you can see for some of the questions, my app performed pretty well, but let's look at this query about ski poles.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=94)** We'll copy that and run it in the Neo4j browser.
>
> **[1:44](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=104)** Notice that there are a lot of nodes returned.
>
> **[1:47](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=107)** This is probably confusing the LLM that isn't sure how it should return all of these nodes.
>
> **[1:53](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=113)** Also, remember that this question asked which activity does not use polls.
>
> **[1:59](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=119)** I would recommend that you avoid queries with the word not since they can lead to confusion like here.
>
> **[2:07](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=127)** Up until now, we've only looked at nodes directly connected to other nodes in our evaluation.
>
> **[2:13](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=133)** But remember that graphs let us discover connections to nodes several hops away.
>
> **[2:18](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=138)** Let's look at how we would use that in our GraphRAG evaluations.
>
> **[2:22](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=142)** I'm going to create a new set of questions for evaluation based on nodes that are two hops away from the target node.
>
> **[2:30](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=150)** For example, if we look at the International Ski and Snowboard Federation, as I am about to show here, we can see that grass skiing is two hops away from our target node, International Ski and Snowboard Federation.
>
> **[2:55](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=175)** So here's my new set of questions based on exploring around my graph for a bit for interesting relationships.
>
> **[3:02](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=182)** I've also updated my prompt a bit to provide a few shot example on how to do multi hop queries in Cipher.
>
> **[3:11](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=191)** Now let's give that a run.
>
> **[3:15](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=195)** Oh no, that didn't quite go so well, why is that?
>
> **[3:19](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=199)** First, let's look at this grass skiing question.
>
> **[3:24](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=204)** Let's go to the query it created for this question.
>
> **[3:29](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=209)** I'm going to copy and paste this into Neo4j and see what happens.
>
> **[3:37](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=217)** You see that I don't get any results returned.
>
> **[3:40](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=220)** Let's make this query simpler by just creating one ourselves.
>
> **[3:47](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=227)** When we do that, we can see the problem.
>
> **[3:51](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=231)** The LLM thought there should be a relationship called governed by for the federation.
>
> **[3:57](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=237)** Here's the federation.
>
> **[3:59](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=239)** But you can see that that relationship of governed by doesn't exist.
>
> **[4:05](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=245)** It just assumed that it did, and the result is that we got a query that returned no results.
>
> **[4:10](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=250)** So as I continue to improve my prompt, I might consider telling it to make the query simpler.
>
> **[4:20](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=260)** As another example, let's look at what's going on with the FIS Alpine Ski World Cup.
>
> **[4:26](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=266)** Let's run the cipher query the LLM created.
>
> **[4:36](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=276)** Interesting, that didn't return anything either, but notice that it put FIS in all capitals, but I remember the graph didn't capitalize the I or the S.
>
> **[4:46](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=286)** So if I create the query I'm hoping for in the browser, here's what I get back.
>
> **[4:52](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=292)** So the evaluation did not work because the LLM didn't maintain the correct capitalization when it created the node in the graph.
>
> **[5:01](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=301)** If I choose to continue using this question in my GraphRAG, I would want to adjust my prompt to understand that acronyms like this one need to have their capitalization adjusted.
>
> **[5:12](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=312)** At the end of the day, evaluating your GraphRAG application is all about carefully crafting a series of questions and their prompts based on the data in your graph.
>
> **[5:22](https://www.linkedin.com/learning/graphrag-essential-training/solution-evaluate-your-graphrag-application?u=76281980&t=322)** It's highly unlikely that you'll get 100% accuracy, but what you do get will provide you a lot of great information for tuning your prompts and your underlying graph data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), continue (2), this. (1), function (1)
> **Env Vars:** llm (4), fis (2), git (1)
> **CLI Commands:** node (3), make (2), git (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - so (1)


### 5. Putting It All Together: Creating a Question-Answering Bot with GraphRAG

#### Introduction to capstone project
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=0)** - We've now come to the part where we put it all together.
>
> **[0:08](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=8)** We've created a knowledge graph and put everything together in little pieces.
>
> **[0:12](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=12)** So now you have the building blocks to create one complete application.
>
> **[0:16](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=16)** In this final project, we'll go start to finish, creating a brand new graph and a fully packaged GraphRAG application.
>
> **[0:24](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=24)** To do so, let's take all the bits and pieces we've learned so far and combine them into one unified piece of software.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=32)** Start by creating a new AuraDB instance.
>
> **[0:36](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=36)** If you want to stay in the free tier, that unfortunately means you'll have to delete your original graph.
>
> **[0:42](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=42)** Wave goodbye to it as it has served us well.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=45)** For this final project, choose a new topic area.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=48)** Again, this can be any subject of your choosing, but pick something you know you can find a fair bit of text about.
>
> **[0:56](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=56)** In order to practice what we've learned so far, find a few different types of text sources, such as web or PDF articles, then create a new knowledge graph using that text.
>
> **[1:08](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=68)** Once you have your graph, create a GraphRAG QA bot that you can ask any number of questions to.
>
> **[1:15](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=75)** Be sure to spend time on writing and tuning your prompt, making sure that the LLM is converting your natural language questions into cipher queries that get the job done.
>
> **[1:25](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=85)** Finally, evaluate the accuracy of your GraphRAG application through some question answer pairs to assess the accuracy of your application.
>
> **[1:34](https://www.linkedin.com/learning/graphrag-essential-training/introduction-to-capstone-project?u=76281980&t=94)** Have fun, be creative, and don't be afraid to experiment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), delete (1), finally, (1)
> **CLI Commands:** find (2)
> **Env Vars:** pdf (1), llm (1)
> **Analogies:** such as (1)
> **Speakers:** - we (1)
> **Non-Speech:** (upbeat music) (1)

#### Walkthrough of capstone solution
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=0)** - [Instructor] Hopefully at this point, you have created your complete GraphRAG QA bot on a new Neo4j or a DB instance.
>
> **[0:13](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=13)** I'm going to show you how I built mine from start to finish.
>
> **[0:17](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=17)** Don't forget to switch from the main branch to the solutions branch of the repo if you want to see my code.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=23)** First things first, i started with a brand new or a DB instance and recommend you do the same.
>
> **[0:31](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=31)** For my graph this time, I decided that I would create a knowledge graph around the subject of one of my favorite places to visit, Portugal.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=39)** So like before, I used the LangChain Wikipedia loader to get a bunch of texts about Portugal.
>
> **[0:45](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=45)** And it's okay if you see that warning message.
>
> **[0:48](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=48)** Sometimes it comes up.
>
> **[0:50](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=50)** I can see that I got 23 documents back and let's take a look at them.
>
> **[0:55](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=55)** In scrolling through this, I can see that I got a lot of information back on the history of Portugal.
>
> **[1:01](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=61)** Let's start by creating the graph documents from the LangChain documents.
>
> **[1:12](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=72)** This code, as you discovered, can take a few minutes to complete, but once it is done, we can make our connection to Neo4j and add our data to the database like this.
>
> **[1:24](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=84)** So first, I have to read it in.
>
> **[1:29](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=89)** Next, I'm going to split that PDF document into chunks.
>
> **[1:33](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=93)** And now, we can turn those chunks into graph documents.
>
> **[1:40](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=100)** Finally, I'm going to add those nodes and relationships into my graph like before, but before I do, let's check out the size of our graph.
>
> **[1:50](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=110)** We can see here that we have just over 600 nodes and 1,200 relationships.
>
> **[1:57](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=117)** Now let's add the PDF data to the graph.
>
> **[2:01](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=121)** Now that these have been added to the Neo4j database, let's look and see how many more nodes and relationships we have.
>
> **[2:09](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=129)** In adding this PDF file to the graph, I went from about 600 nodes and 1,200 relationships to over 1,000 nodes and over 1,600 relationships.
>
> **[2:20](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=140)** Cool.
>
> **[2:22](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=142)** Let's now make our question answering bot.
>
> **[2:25](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=145)** Remember, we learned that providing the graph schema was helpful for the RAG to get better answers, so we'll use that in our retrieval again by setting enhanced_schema to true.
>
> **[2:41](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=161)** Next, we have to create our prompt, which is as much of an art as a science.
>
> **[2:46](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=166)** I started with a very similar prompt to my original skiing prompt and just made some minor modifications to adapt it to the knowledge graph around Portugal.
>
> **[2:55](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=175)** Let's ask our first question.
>
> **[2:59](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=179)** What I found when I ran this was that sometimes the conversion from text to cipher was getting confused by the use of the word "the" in front of my entity ID.
>
> **[3:09](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=189)** So I updated my prompt to try and address that.
>
> **[3:18](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=198)** That was great and definitely provided me with better answers.
>
> **[3:22](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=202)** The next thing I noticed was that the LLM sometimes was trying to force relationships that didn't always exist or weren't always useful.
>
> **[3:32](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=212)** So then I added a bit to my prompt to have it be less prescriptive on specifying relationship types.
>
> **[3:49](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=229)** Now I'm happy enough with the results that we can move on to creating an evaluator for my GraphRAG application.
>
> **[3:55](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=235)** I'll start by creating a series of question answer pairs.
>
> **[3:59](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=239)** Here I have only created three, but as we've discussed before, it's best to create tens to hundreds.
>
> **[4:05](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=245)** Next, I'll create my evaluator chain.
>
> **[4:09](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=249)** Finally, I'm going to use the same function I used before to orchestrate passing the example questions through the GraphRAG and then evaluating the response.
>
> **[4:24](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=264)** You might see again these connection errors which represent a timeout error.
>
> **[4:29](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=269)** If this happens, just reestablish the connection to your graph and run this query again.
>
> **[4:40](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=280)** Great.
>
> **[4:41](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=281)** We ran this and got 100%.
>
> **[4:43](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=283)** You might find that you don't get 100%, and that's okay.
>
> **[4:47](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=287)** Every time you run your evaluator, you can learn something new about how your app is performing.
>
> **[4:53](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=293)** You watch where it's failing and you can do things like tweak your prompt to work on getting better and better scores.
>
> **[4:59](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=299)** The best part is that in doing this, you have quantitative evidence to show whether what you're trying is working or not, and it's important to remember that I'm creating these questions based on what's in my graph.
>
> **[5:11](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=311)** You should create your own questions based on what's in yours.
>
> **[5:14](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=314)** Even if you use My Portugal example, you may see that your graph is slightly different than mine.
>
> **[5:20](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=320)** So be sure to explore your graph before you create your questions.
>
> **[5:25](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=325)** So that's how I solve the problem.
>
> **[5:27](https://www.linkedin.com/learning/graphrag-essential-training/walkthrough-of-capstone-solution?u=76281980&t=327)** Keep testing and tweaking your GraphRAG bot and see how well you can get it to work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), finally, (2), switch (1), this. (1)
> **Env Vars:** pdf (3), rag (1), llm (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** don't forget (1), it's best to (1)
> **Code Identifiers:** enhanced_schema (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Continuing on with knowledge graphs, GraphRAG, and GenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=0)** - Congratulations on completing this LinkedIn learning course on GraphRAG.
>
> **[0:05](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=5)** Now that you understand the basics, keep practicing by building small projects with your own data or based on your own interests.
>
> **[0:13](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=13)** Don't worry about making mistakes.
>
> **[0:15](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=15)** Just start simple and build from there because I find I learn something new about Gen AI and GraphRAG with every step I take.
>
> **[0:23](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=23)** If you have questions or want to engage with others on their graph journeys, I encourage you to come chat with us on the Graph Geeks Discord server.
>
> **[0:32](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=32)** Here, you can ask me and many other graphistas questions about GraphRAG, graph databases, and Gen AI.
>
> **[0:39](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=39)** You've now got the graph tools.
>
> **[0:41](https://www.linkedin.com/learning/graphrag-essential-training/continuing-on-with-knowledge-graphs-graphrag-and-genai?u=76281980&t=41)** Go have some fun and see what you can create.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** discord (1)
> **Speakers:** - congratulations (1)


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