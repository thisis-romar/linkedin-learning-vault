---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-generative-ai-apps-to-talk-to-your-data
url: "https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data"
duration_minutes: 156
duration: 2h 36m
level: Intermediate
updated: 5/29/2025
learners: 3725
skills:
  - Conversational AI
  - Artificial Intelligence (AI)
  - Application Development
  - Snowflake
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHUqCPEmlrWMw/learning-public-crop_675_1200/B4EZb4xRIlGUAY-/0/1747930387743?e=2147483647&amp;v=beta&amp;t=MB7KK_CZ5Nk3r-wlTm2UZ9Uk10d_pv-PmYYsCiYTbf8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Generative AI Professional Certificate by Snowflake]]'
prev_courses:
  - '[[Introduction to Gen AI with Snowflake]]'
path_nav: '[{"path":"Generative AI Professional Certificate by Snowflake","position":3,"total":3,"prev":"Introduction to Gen AI with Snowflake","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/conversational-ai
  - skill/artificial-intelligence-ai
  - skill/application-development
  - skill/snowflake
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20Generative%20AI%20Apps%20to%20Talk%20to%20Your%20Data.md)

![Building Generative AI Apps to Talk to Your Data](https://media.licdn.com/dms/image/v2/D4E0DAQHUqCPEmlrWMw/learning-public-crop_675_1200/B4EZb4xRIlGUAY-/0/1747930387743?e=2147483647&amp;v=beta&amp;t=MB7KK_CZ5Nk3r-wlTm2UZ9Uk10d_pv-PmYYsCiYTbf8)

# Building Generative AI Apps to Talk to Your Data

> Explore the power of generative AI in transforming how you interact with your data by building conversational applications. Discover how to use retrieval-augmented generation (RAG) for unstructured data and text-to-SQL) for structured data to create intelligent, dynamic interfaces. Learn to leverage Snowflake Cortex to develop applications that answer user queries in natural language, to enable bu

> [LinkedIn Learning](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data) | 2h 36m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Getting answers from data](#getting-answers-from-data)
  - [Getting answers from data: Using RAG](#getting-answers-from-data-using-rag)
  - [Getting answers from data: Using text-to-SQL](#getting-answers-from-data-using-text-to-sql)
  - [What we will build: Success in this course](#what-we-will-build-success-in-this-course)
- [**1. Introduction for Conversational Apps with Data**](#1-introduction-for-conversational-apps-with-data) (4 videos)
  - [Querying unstructured data: RAG](#querying-unstructured-data-rag)
  - [Querying unstructured data: Hybrid search](#querying-unstructured-data-hybrid-search)
  - [Querying structured data: Text-to-SQL](#querying-structured-data-text-to-sql)
  - [Let’s dive in](#lets-dive-in)
- [**2. Finding Answers from Unstructured Data with Cortex Search**](#2-finding-answers-from-unstructured-data-with-cortex-search) (10 videos)
  - [Opening up unstructured data with RAG](#opening-up-unstructured-data-with-rag)
  - [What is Cortex Search?](#what-is-cortex-search)
  - [Loading unstructured data to a Snowflake stage](#loading-unstructured-data-to-a-snowflake-stage)
  - [Parsing and chunking text](#parsing-and-chunking-text)
  - [Creating the Cortex Search Service](#creating-the-cortex-search-service)
  - [Building a RAG with Cortex Search](#building-a-rag-with-cortex-search)
  - [How to measure success](#how-to-measure-success)
  - [Automatic processing of new documents](#automatic-processing-of-new-documents)
  - [Building out the front end](#building-out-the-front-end)
  - [Well done!](#well-done)
- [**3. Answer Questions from Structured Data with Cortex Analyst**](#3-answer-questions-from-structured-data-with-cortex-analyst) (9 videos)
  - [Avoiding death by dashboard](#avoiding-death-by-dashboard)
  - [Setting up the app](#setting-up-the-app)
  - [Understanding the semantic model](#understanding-the-semantic-model)
  - [Working with the semantic model](#working-with-the-semantic-model)
  - [Using Cortex Analyst](#using-cortex-analyst)
  - [From text-to-SQL to TAG: Creating table-assisted generation](#from-text-to-sql-to-tag-creating-table-assisted-generation)
  - [Expanding the scope of the semantic model](#expanding-the-scope-of-the-semantic-model)
  - [Building the Streamlit app](#building-the-streamlit-app)
  - [Congratulations!](#congratulations)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting answers from data](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=5)** - Have you ever wanted to talk to your data and have it talk back to you?
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=14)** Wouldn't it be nice if you could just ask your data a question in natural language and have it answer you?
>
> **[0:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=20)** Well, by connecting the power of [[Generative AI]] to data, we can do just that, and in this course, you'll learn how.
>
> **[0:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=27)** Hi, I'm Josh.
>
> **[0:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=29)** Thank you for joining me on this journey to build generative AI applications with data.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=34)** This course will teach you how to easily talk to all of your data regardless of what it looks like, structured or unstructured, using natural language.
>
> **[0:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=42)** I'm excited to get started and I hope you are too.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=45)** Let's jump in.
>
> **[0:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=46)** Imagine you're a new hire and you have been given some high priority questions to answer.
>
> **[0:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=50)** You are asked to determine why customer trend is increasing and what the state of the relationship is between clients and account managers.
>
> **[0:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=58)** You've also been asked to see if there are any insights that can be gleaned from the last 10 years of research papers that have been saved.
>
> **[1:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=64)** You pause and think about how the structured data, sales numbers, customer demographics, and [[Performance Metrics]] are all in the database and ready to query.
>
> **[1:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=73)** But the emails, is the research locked away in PDFs and the feedback scattered all across social media?
>
> **[1:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=79)** That's all unstructured and not as easy to get insights from.
>
> **[1:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=83)** The thing is, the volume of this data is getting bigger and the rate of growth is only accelerating.
>
> **[1:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=89)** Now that we can get value out of all of this information, there's even more reason to record and store it.
>
> **[1:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=95)** For example, have you joined a video meeting recently and seen a meeting assistant bot join?
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=100)** These AI assistants can now provide automatic summaries and action items for our meetings.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=105)** 10 years ago, most of these meetings only occurred in the moment, but now they add to the data pile.
>
> **[1:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=111)** Another example is wearables.
>
> **[1:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=114)** From smart watches and tech-enabled glasses to audio recording pendants, there are more and more ways to capture data from our day-to-day life.
>
> **[2:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=122)** Armed with today's [[Generative AI Tools]], we can now make sense of all of this data, gain longer term memory, and ask questions about the data that these devices record.
>
> **[2:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=132)** This presents a big opportunity for anyone that wants to get answers to their questions from all of their data, not just the data that sits nicely in tables.
>
> **[2:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=141)** Deploying applications that sit on top of this mountain of data give us new power and insight that we did not have before.
>
> **[2:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=148)** Now it's a good time to stop for a second and introduce myself.
>
> **[2:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=151)** My name is Josh and I'm a developer advocate at [[Snowflake]].
>
> **[2:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=154)** I joined the Snowflake team via a startup that Snowflake acquired named TruEra that was focused on building tooling for trustworthy AI.
>
> **[2:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=161)** As part of that work, I helped create and maintain an open source project called TruLens, a library that can be used to systematically track and evaluate LM applications.
>
> **[2:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=171)** This set me up well to teach this course on how to build AI applications that use data.
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=176)** My favorite part of my job is delivering tech talks, workshops, and courses to thousands of developers, data scientists, and data professionals just like you.
>
> **[3:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=186)** I'm very excited to lead you through this course.
>
> **[3:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=188)** So in this course, we're going to learn how to build applications that enable users to ask questions of their data, whether structured or unstructured, all using natural language and without having to rely on an analyst or a programmer to get those answers.
>
> **[3:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=202)** We'll do this using two approaches, [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]] or RAG for [[Unstructured Data]] and text-to-[[SQL]] for structured data.
>
> **[3:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=211)** We'll first introduce these approaches in a general sense in this module, and then we'll learn how to implement them using Snowflake in upcoming modules.
>
> **[3:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=219)** By the way, in this course we'll use the Cortex COMPLETE function to generate text responses from LMs given a prompt.
>
> **[3:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=227)** If you haven't taken our Intro to Generative AI course, where we learned how to use that function, please check the documentation and read up on how it works.
>
> **[3:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=236)** Want to take a quick peek of what you'll produce in Module 2 and 3?
>
> **[4:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=240)** Here's a quick preview of what we'll create in the next two modules.
>
> **[4:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=244)** This is a quick demo of how you can chat with your data.
>
> **[4:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=247)** This is one of the apps you'll build by the end of the course.
>
> **[4:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=250)** Let's take a look.
>
> **[4:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=252)** Here I'm asking questions like what's the highest revenue for each sales region?
>
> **[4:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=256)** And what this app is doing in the background is it's first creating some SQL and writing the SQL for us.
>
> **[4:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=261)** This allows anyone that uses the app to talk to structured data.
>
> **[4:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=264)** Then we get the response to our question in natural language.
>
> **[4:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=269)** I'm showing you now the example of talking with structured data.
>
> **[4:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=273)** This is what you'll build in Module 3.
>
> **[4:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=275)** We'll also build a Streamlit app in Module 2 that lets you talk with unstructured data.
>
> **[4:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=280)** So in this module, we'll get our hands on the key [[Generative AI|GenAI]] components that make this work, including RAG or retrieval-augmented generation, and text-to-SQL.
>
> **[4:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=290)** We'll also learn some tricks along the way for building an engaging front end on top of generative AI apps with Streamlit, which will allow streaming and multi turn conversations.
>
> **[5:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=300)** Excited? I am.
>
> **[5:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=302)** In this video, we introduced the course and noted that we'll use RAG for unstructured data and text-to-SQL for structured data to enable users to ask questions of their data.
>
> **[5:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=310)** When used together, these two tools can empower [[Application Development]] by enabling dynamic and intelligent interactions with [[Databases]] all using natural language.
>
> **[5:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=320)** Think about how these tools could impact the performance and workflows around you.
>
> **[5:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data?u=76281980&t=324)** So in the next video, we'll dive into an overview of how RAG Works and how we use it to get answers from unstructured data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Generative AI]] (4), [[Snowflake]] (4), [[Unstructured Data]] (4), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (2)
> **Env Vars:** sql (5), rag (4), complete (1)
> **Analogies:** imagine (1), for example (1), just like (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Non-Speech:** (upbeat music) (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Getting answers from data: Using RAG](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=1)** In this video, we're going to look at how RAG helps us find answers from reams, documents, books, transcripts, and other [[Unstructured Data]].
>
> **[0:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=9)** Imagine a curious child.
>
> **[0:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=11)** This child knows how to speak and understands language very well.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=15)** The child loves to talk, loves to have conversations, and loves to explain things to others.
>
> **[0:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=20)** Well, at least when the child knows about the topic.
>
> **[0:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=23)** When you ask the child about something that they don't know anything about, they say, "I don't know."
>
> **[0:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=28)** or might even make something up.
>
> **[0:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=29)** This is kind of like an Lm.
>
> **[0:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=31)** Now, imagine if we could give this child a library card and a bus ticket to the nearest library.
>
> **[0:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=37)** Imagine further that the child is assisted by a librarian that knows exactly which books, articles, or newspapers to grab, and which specific parts of those to read.
>
> **[0:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=48)** Once the child is done, they run back from their library, combine their language ability with the new knowledge they learned and answer your question correctly, using sources from their reading.
>
> **[0:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=58)** Smart Kid.
>
> **[0:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=59)** This is similar to how RAG works.
>
> **[1:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=61)** The child has some pre-learned knowledge and has a strong language ability, just like a language model that has learned knowledge from pre-training.
>
> **[1:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=69)** In our story, the child is great at communicating, but struggles with hard facts, especially those they have never been exposed to.
>
> **[1:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=76)** The library that the child runs to is a set of documents where the child can look up specific facts or information they need to answer the question.
>
> **[1:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=84)** And when we ask our RAG apps a question in natural language, the app retrieves the information it needs to answer the question, and it uses its model's language skills to answer questions in a way that we can understand.
>
> **[1:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=96)** To stretch the metaphor a bit, this is efficient because the child does not have to carry all of the current knowledge of the world in their head to be ready to answer questions.
>
> **[1:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=104)** Instead, they can just [[Fetch]] what they need and answer using the information gathered.
>
> **[1:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=109)** In an idealized world, we would be able to give all of the information to our LMs at infancy time so that they could answer all questions correctly.
>
> **[1:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=117)** But there are important limitations that stand in our way.
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=121)** One problem is the limited context [[Windows]] compared to the data that we want to query.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=126)** To work around this, RAG pulls out only the most relevant information to deliver into the context window.
>
> **[2:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=131)** Even if we had infinite context window size, another problem is that the LM would still have trouble sifting through all of that volume of data.
>
> **[2:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=138)** LMs often struggle with recalling information from the middle of their context window.
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=143)** This problem is often called the lost-in-the-middle problem.
>
> **[2:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=147)** Perhaps one day we'll be able to solve this and have LMs that can generate answers losslessly.
>
> **[2:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=152)** Even in that case, it'd be obscenely expensive to process all of our [[Tokens]] each time we call the model.
>
> **[2:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=158)** Until then, we have RAG.
>
> **[2:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=160)** In this video, we introduced RAG, Retrieval Augmented Generation, as the way we ask questions of unstructured data.
>
> **[2:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=167)** We covered this at a very high level and we'll cover it in detail in an upcoming video.
>
> **[2:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=173)** I want to paint a picture in your head about why we need RAG and some of the useful things it can do for us when we're building question answering apps.
>
> **[3:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=180)** So in the next video, we'll look at Text-to-[[SQL]] and how it can be used to build the same sort of apps, but this time for data sitting in structured format.
>
> **[3:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=189)** See you in a moment.
>
> **[3:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-rag?u=76281980&t=190)** (logo swooshes) (uptempo music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (2), [[Fetch]] (1), [[Windows]] (1), [[Tokens]] (1), [[SQL]] (1)
> **Env Vars:** rag (7), sql (1)
> **Analogies:** imagine (3), kind of like (1), similar to (1), just like (1), picture (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we covered (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (uptempo music) (1)

#### [Getting answers from data: Using text-to-SQL](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=0)** - Hi again.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=1)** Now, let's talk about another tool that we have in our toolbelt.
>
> **[0:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=4)** Text to [[SQL]].
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=6)** And let's go back to the story about the child in the library from earlier.
>
> **[0:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=9)** This time, let's think about what a high school student would do when exploring a new library for their first time.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=15)** Unlike before, when the child was running in with a question, grabbing different books, articles, and newspapers that they needed on their own and running away, this time, the high school student has access to the library's [[Data Management]] system and can query the library records.
>
> **[0:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=29)** In this case, the student has to learn about how to use the library software interface, and they must know all of the identifying and cataloging information and how to query this information before they have any chance of finding the answer to their question.
>
> **[0:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=42)** Luckily, the librarian is there to assist with understanding how the software works and how the data is organized.
>
> **[0:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=48)** In this case, the librarian represents the data analysts that we ask our questions to since we don't have the skills to dig through the data to find the answers ourselves.
>
> **[0:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=57)** Now, what happens in real life for most of us is that we ask the librarian our question.
>
> **[1:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=62)** They already know how to translate our natural language query into the information that they would need to look up the answer to our question.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=70)** And once they have the answer, they give us the resulting data back.
>
> **[1:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=73)** This is how Text to SQL works.
>
> **[1:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=75)** But just like the student needs the librarian to understand the catalog and how to use the library's tools to find answers, LLMs need to interpret data schemas and need to be able to query information relationships with precision.
>
> **[1:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=88)** If an LLM misunderstands the instructions that are given or does not know how to look up the correct information to formulate the answer, then the response it gives will be incorrect.
>
> **[1:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=98)** So let's move on from the library back into the business world.
>
> **[1:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=101)** It goes without saying that accuracy in any response to a [[Business Intelligence (BI)|business intelligence]] query is vitally important.
>
> **[1:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=108)** LLMs, even those trained for SQL generation, have difficulty understanding real world [[Databases]] and schemas, especially when these databases often have hundreds of tables and require complex joins to query correctly, at least when the LLM is operating alone.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=124)** This is an important challenge to overcome.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=126)** Otherwise, our Text to SQL application will return inaccurate information and not be able to answer our queries.
>
> **[2:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=133)** And this is a hard problem.
>
> **[2:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=135)** BirdSQL, a popular benchmark for this problem, evaluates different Text to SQL models with over 12,000 cross-domain query-SQL pairs covering 95 large databases.
>
> **[2:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=145)** It currently shows the leading Text to SQL model lags behind human performance by more than 17 percentage points, at about 75% accuracy.
>
> **[2:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=154)** And for most business intelligence apps, 75% doesn't cut it.
>
> **[2:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=159)** In this example, the importance of a query engine being able to accurately view and query the entire volume of data to answer questions is pretty evident.
>
> **[2:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=168)** So what's the solution?
>
> **[2:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=170)** One way is to provide the LLM more context about the contents of your tables and how they relate to the business questions that you want to answer.
>
> **[2:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=178)** In some ways, this is analogous to the RAG setup we discussed in the last video, except you'll need to provide the context needed to generate accurate SQL.
>
> **[3:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=186)** All too often, data scientists and AI engineers are criticized for building the best apps and models that lay idle in notebooks rather than living in the hands of users.
>
> **[3:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=196)** And don't worry, we won't let your apps die in a notebook.
>
> **[3:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=199)** Data is useful to no one if it's behind a barrier.
>
> **[3:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=202)** In this course, you'll learn how to get your apps to users by building a conversational front end that you'll develop and deploy using Streamlit.
>
> **[3:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=210)** Lots coming up in this video.
>
> **[3:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=212)** We look at how to get answers from structured data using Text to SQL.
>
> **[3:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=216)** Being able to generate accurate SQL queries from natural language will help us as we develop our user-facing apps and overcome the limits of leading Text to SQL models.
>
> **[3:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=226)** This will be very useful when we build a conversational front end with Streamlit in the upcoming modules.
>
> **[3:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=233)** Now, hopefully you have a good picture of the building blocks in your head and are thinking about all of the ways that you'll be able to use them for your work.
>
> **[4:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=240)** In the next video, we'll talk about who will benefit the most from this course and go into more specific detail on the specific apps that we'll build in the later modules.
>
> **[4:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=248)** See you then.
>
> **[4:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/getting-answers-from-data-using-text-to-sql?u=76281980&t=249)** (lively upbeat music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11), [[Databases]] (3), [[Business Intelligence (BI)|Business intelligence]] (2), [[Data Management]] (1)
> **Env Vars:** sql (11), llm (3), rag (1)
> **Cross-References:** go back to (1), we discussed (1), in the last (1), coming up (1), in the next (1)
> **Analogies:** just like (1), analogous to (1), picture (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** setup (1), you'll need (1)
> **Speakers:** - hi (1)

#### [What we will build: Success in this course](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=1)** Now that we have done a high level overview of the course, let's talk about who this course is best suited for.
>
> **[0:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=7)** This course is open to anybody, but it's going to be best suited for AI builders such as data scientists, machine learning engineers, or AI builders who are interested in developing applications and practices that unlock [[Unstructured Data]] and provide a direct connection between users and the data that they want to ask questions of.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=25)** To succeed in this course, you should have experience with [[Snowflake]], [[Python (Programming Language)|Python]], and [[SQL]].
>
> **[0:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=30)** A basic understanding of [[Generative AI]] concepts will be helpful as well.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=34)** Our Intro to Generative AI course covered a lot of information and a highly recommend taking it after you've completed this course.
>
> **[0:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=41)** It's a great course taught by my friend Vino, but the only part from it that we'll need is how to do text generation using the Cortex Complete function.
>
> **[0:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=49)** If you would like to learn more about the complete function before we get started, I've left a link to documentation with more details in the reading after this video.
>
> **[0:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=57)** If you're completely new to Snowflake, we recommend that you start with our intro course, "Intro to Snowflake for Devs, Data Scientists and Data Engineers."
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=65)** This will give you a good foundation on the Snowflake environment and operating within it.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=70)** Now, let's talk about the new skills you'll have at the end of this course.
>
> **[1:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=73)** In module one, we'll understand the different architectures required for building conversational apps with structured and unstructured data.
>
> **[1:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=81)** We'll then learn how to implement these architectures using the Snowflake platform.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=85)** In module two, we'll build a RAG app using Cortex Search in a Snowflake notebook that will answer questions from your unstructured data.
>
> **[1:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=93)** You'll learn how to parse and chunk PDF documents, create a Cortex Search service, and use that to build an app that can talk to your documents using RAG.
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=100)** In module three, we'll build a text to SQL application using Cortex Analyst in a Snowflake notebook that will answer questions from structured Snowflake data tables.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=110)** This app will also live on a conversational front end.
>
> **[1:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=113)** I gave you a preview for this earlier.
>
> **[1:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=116)** Let's talk about what this course will not cover.
>
> **[1:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=118)** This course is not a highly theoretical course.
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=121)** Think of this as an applied course, where you'll get hands-on experience with the material and build something tangible.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=126)** You'll come out of this course with built examples of how to deploy these skills.
>
> **[2:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=130)** In this module, we introduced how to create a RAG app with Cortex Search for unstructured data, and how we'll use text to SQL with Cortex analysts to query our structured data.
>
> **[2:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=140)** When used together, we can query our entire data volume.
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=143)** In the next video, we'll dive a little deeper, looking at how we get answers from unstructured data using RAG.
>
> **[2:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=150)** And once we're done, we'll look at under the hood elements that we need to be aware of to get answers from structured data using text to SQL.
>
> **[2:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-we-will-build-success-in-this-course?u=76281980&t=158)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (8), [[Unstructured Data]] (5), [[SQL]] (4), [[Generative AI]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (4), rag (4), pdf (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** python (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Introduction for Conversational Apps with Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Querying unstructured data: RAG](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=1)** In this video, we're going to briefly cover how we get answers from [[Unstructured Data]].
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=6)** As I mentioned earlier, most of the data in the world is unstructured.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=10)** And most people are not capturing or making good use of their unstructured data.
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=14)** Teams that are not making use of this do not have a full awareness of the current state or the currently changing state of their environment.
>
> **[0:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=21)** This is clearly a problem.
>
> **[0:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=23)** So how do you get good answers to questions when you're only querying part of the data you own?
>
> **[0:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=28)** There's mountains of unstructured data that could be leveraged for insights.
>
> **[0:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=32)** In the education industry, for example, this data can look like classroom chats and communication data between parents and teachers in the form of emails and messages.
>
> **[0:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=41)** Retail analysts deal with a combination of unstructured data from customer emails, images, voice, and store traffic.
>
> **[0:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=48)** [[Financial Data]] often includes contracts, agreements, and earnings call transcripts, and logistics operators can examine shipping manifests to see what is going where at any given time to track demand patterns.
>
> **[0:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=59)** Lawyers and paralegals scan legal briefs and court decisions to learn about new case law as it develops.
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=65)** And with great data comes great opportunity.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=68)** So let's talk a little bit about the information you can get from all of the documents, transcripts, and PDFs that are around you.
>
> **[1:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=75)** What resides in these documents?
>
> **[1:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=78)** For starters, the document that a workplace creates every day record the day-to-day events in an industry or workplace.
>
> **[1:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=84)** A lot of this information is valuable, but not queryable from [[Databases]].
>
> **[1:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=89)** There's a lot of information sitting out in the open, ready for us to grab it and draw insights from.
>
> **[1:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=94)** With so much data available to us, how do we get value from these data sources?
>
> **[1:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=99)** What are the steps to get information out of a document, a text conversation, or a PDF?
>
> **[1:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=104)** When we are dealing with unstructured data, let's first talk about how we can represent this data semantically with embeddings.
>
> **[1:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=111)** Embeddings allow us to take natural language text and place it in a multidimensional vector space based on its meaning.
>
> **[1:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=117)** Let's take a classic simplified example where we've plotted the words queen, king, man, and woman in a two-dimensional vector space.
>
> **[2:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=125)** Because each [[Microsoft Word|word]] is located in the vector space based on its meaning, we can understand relations between the words based on their position relative to each other in the vector space.
>
> **[2:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=135)** For example, we can say that king plus woman minus man is more or less queen.
>
> **[2:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=140)** Now let's think of a more realistic case where we've embedded a large corpus of text in the same vector space, such as all of a company's documents or an entire library's books.
>
> **[2:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=150)** To find when documents are similar in their meaning, we need to find other documents, books, or chunks that are nearby in the vector space.
>
> **[2:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=157)** What this means is that we can generate embeddings for a question written in natural language and then find all of the chunks of text that are nearest to our question in the embedding space.
>
> **[2:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=167)** This is how the retrieval part of our RAG setup works.
>
> **[2:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=170)** Once we have retrieved our similar chunks, they're fed into the LLM context window to generate a response.
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=176)** In this video, we looked at getting answers from unstructured data.
>
> **[2:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=179)** We looked at how this data represents the day-to-day events in a workplace or industry and that the pathway to gain value from this unstructured data is RAG, using a combination of systems.
>
> **[3:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=189)** In the next video, we'll explore different methods that we can use to search our unstructured data.
>
> **[3:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=194)** See you there.
>
> **[3:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-rag?u=76281980&t=195)** (air whooshing) (light music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (8), [[Financial Data]] (1), [[Databases]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** rag (2), pdf (1), llm (1)
> **CLI Commands:** find (3)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (light music) (1)

#### [Querying unstructured data: Hybrid search](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=1)** One older way to search is through keyword search.
>
> **[0:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=4)** Keyword search relies on exact matches between the words in our query and the text we're looking for.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=10)** This is great for finding texts that contains highly specific terms.
>
> **[0:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=13)** The way the keyword search works is by leveraging sparse vectors.
>
> **[0:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=18)** In keyword search each vector will be the length of the number of unique words that are in your text corpus.
>
> **[0:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=23)** Each element in the vector represents a unique [[Microsoft Word|word]].
>
> **[0:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=27)** Any word represented in the text will be captured with a one, and all other elements in the vector will be zero.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=34)** So when we look at these vectors, we will see that most, but not all of the elements in the vector will be zero.
>
> **[0:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=40)** Since the vector will be largely an array of zeros, we call it a sparse vector.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=45)** While keyword search is great, when we need to track down particular words it can miss text using synonyms, conveying a similar meaning that we might also want to retrieve.
>
> **[0:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=54)** In contrast to keyword search, similarity search relies on dense embeddings that encode rich information about the meaning of the text.
>
> **[1:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=62)** However, there are benefits to leveraging both sparse and dense vectors in search.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=68)** If we take both types of searches building blocks, we can construct a hybrid search combining the two methods mentioned before.
>
> **[1:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=74)** By combining both our dense and sparse vector search, we can make sure we turn over every stone and find (indistinct) text chunks we need.
>
> **[1:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=82)** This way we don't miss the text containing exact matches to the text we're looking for, and we can also find semantically similar chunks that we might be interested in.
>
> **[1:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=90)** So when we get our search results, we might often want to go about it in a more exhaustive way.
>
> **[1:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=95)** Because vector operations like search are relatively cheap, this allows us to get all of the search results we might want to use downstream.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=102)** But if we really want to get only the most relevant text, we can order it by relevance.
>
> **[1:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=107)** This is a technique known as re-ranking.
>
> **[1:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=109)** Re-ranking is a type of model that when given a query and document pair, will output a similarity score.
>
> **[1:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=115)** Cortex search uses this to order the result based on similarity.
>
> **[1:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=119)** Once we've scored each document based on its similarity to the query, we can sort by relevance and remove any irrelevant chunks from our search result.
>
> **[2:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=127)** By combining these steps, keyword search, similarity search, and re-ranking, we gain a robust ability to query our data and get valuable, accurate information to answer our queries.
>
> **[2:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=139)** So let's talk about integrating these structures with LLMs.
>
> **[2:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=142)** Using these structures with an LLM gives us pretty good search results, but we should talk about why we want these search results in the first place.
>
> **[2:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=151)** If we ask an LLM a question on its own, it cannot directly query the information it needs to reliably answer our question.
>
> **[2:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=157)** This is especially true if we are asking questions about our own private data.
>
> **[2:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=162)** To give the LLM the tools it needs to accurately answer, we need to ground it with evidence.
>
> **[2:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=167)** This is where the search results come in.
>
> **[2:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=170)** After we've completed our search or retrieval, the R in RAG, we can then augment the generation step with our search results.
>
> **[2:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=177)** We'll talk about this in more detail later in the course.
>
> **[3:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=180)** So in this module, we discussed a high level overview of how we get answers from our [[Unstructured Data]].
>
> **[3:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=186)** It's important to understand the conceptual structure of how we search our unstructured data with hybrid search and re-ranking to build a highly performance search system.
>
> **[3:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=196)** In the next video, we'll move back to discuss text as equal in more detail.
>
> **[3:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=200)** See you then.
>
> **[3:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-unstructured-data-hybrid-search?u=76281980&t=200)** (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Unstructured Data]] (2)
> **Env Vars:** llm (3), rag (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** later in (1), we discussed (1), in the next (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (bright music) (1)

#### [Querying structured data: Text-to-SQL](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=1)** We covered the basics of how Text-to-[[SQL]] allows us to ask questions and get accurate answers from our structured data in an earlier video.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=10)** So let's go into more detail here before we start building our applications in the following modules.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=15)** So let's start with the basics of Text-to-SQL and build from there.
>
> **[0:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=19)** So with Text-to-SQL, we first give our LM a natural language question, such as how much money did we make last year before costs?
>
> **[0:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=27)** Now if this was a question that was asked of an analyst that had just started at a company, that person would immediately need to know a bunch of information to answer that question.
>
> **[0:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=36)** They need to know about the database and the tables in the database to have a chance of answering the question given to them.
>
> **[0:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=43)** But before they even thought about writing their SQL query, they'd also need to know information about the schema.
>
> **[0:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=49)** They'd need to know all of the column names in all of the tables and what the tables represent to know where to look in these tables and columns to find the information that they need to answer the question.
>
> **[1:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=61)** They need to decipher whether the profits column represents the net or gross profits or something else entirely.
>
> **[1:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=67)** From there, they need to know what types of data are in each column of each table, and they need to know which table or tables have the information that they need to query to answer the question.
>
> **[1:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=77)** And this is why analysts are so valuable.
>
> **[1:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=79)** They understand the data, and they're able to answer questions using the data and discover new insights.
>
> **[1:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=86)** But what if we could automate this so that the user could interact with the database through an LLM?
>
> **[1:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=93)** Good thing then that we can do this.
>
> **[1:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=95)** Imagine for a second that I am someone who prizes themselves on delivering valuable insights to people.
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=100)** One morning my boss storms into my [[Microsoft Office|office]], looking frustrated, and asks, "Why are last week's sales numbers dropping in the Southwest Region?"
>
> **[1:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=108)** I tell my boss that I'll look into it.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=110)** I open up my SQL editor and start crafting this query from scratch.
>
> **[1:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=115)** A couple of hours later, I hand the result, and after a quick glance, my boss asks, Is there a specific product or service category, or is it across the board?"
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=124)** I head back to my SQL editor.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=126)** So after building another bespoke query, and then another couple of hours later, I head back to my boss and present what I discovered.
>
> **[2:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=133)** Similar to last time, my boss scans the results and asks another question, "How does this compare to last year, and what's the trend over the last three years?"
>
> **[2:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=142)** At this point, everyone is starting to feel frustrated.
>
> **[2:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=145)** I'm becoming frustrated with having to constantly craft bespoke queries, and my boss is frustrated that the answers keep taking so long to get.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=153)** So, let's talk about [[Dashboards]] for a second.
>
> **[2:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=156)** Dashboards are very popular [[Business Intelligence (BI)|business intelligence]] tools, but they only display what they are built to display.
>
> **[2:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=162)** So if someone has a question that the dashboard does not answer, they get up and head over to someone like me to ask the question.
>
> **[2:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=170)** This can result in me becoming very busy.
>
> **[2:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=173)** At this point, I might decide to build a dashboard, but this presents a new problem, death by dashboard.
>
> **[2:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=179)** Everyone wants to avoid a death-by-dashboard situation.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=182)** where data is stale, unresponsive to changing conditions, or does not answer the questions that people are really asking.
>
> **[3:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=189)** When this happens, users either do not use the dashboards or are frustrated using them.
>
> **[3:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=194)** This isn't just about slow queries, it's about a gap in agility.
>
> **[3:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=198)** Both of these structures cause a lag between asking a question and actioning on the answer.
>
> **[3:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=204)** Decision-makers are stuck, waiting to get the information that they need to make decisions while the business keeps moving forward.
>
> **[3:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=211)** Let's take a look at how we can avoid this fate by empowering people with natural language tools that deliver accurate information on a much shorter timeline.
>
> **[3:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=219)** Text-to-SQL is an approach that allows users to interact with structured data using natural language.
>
> **[3:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=224)** It offers another solution to the hallucination problem by allowing us to ground LLM responses with information from structured data sources.
>
> **[3:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=233)** So let's talk about the Text-to-SQL steps.
>
> **[3:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=235)** To successfully generate SQL, the LLM needs to solve a range of challenges, from correctly interpreting the question, understanding the schemas of the data, and the ability to generate correct SQL.
>
> **[4:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=248)** It needs to be able to do this even for rare and complex cases, like nested subqueries or window functions.
>
> **[4:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=254)** Conceptually, an effective Text-to-SQL system will solve these challenges and navigate the gray area of understanding and how to best answer the user's question with a schema and data available, just like a human analyst would.
>
> **[4:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=268)** Let's look at the key components of a Text-to-SQL system.
>
> **[4:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=272)** First, we need to understand the question, which consists of semantic parsing and handling ambiguity.
>
> **[4:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=277)** Semantic parsing breaks down the natural language into its logical components.
>
> **[4:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=282)** Examples of this are intent, entities, and relationships.
>
> **[4:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=286)** Handling ambiguity addresses multiple interpretations of queries by clarifying dimensions, such as time or location.
>
> **[4:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=294)** At this time, the system might also assess if the question is reasonably answerable and in scope, or if it should decline to answer.
>
> **[5:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=302)** Then the system must map the components of the question to the schema of the database being used.
>
> **[5:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=307)** If this system does not understand the structure of the database it's querying, it will return incorrect answers to the questions that users ask.
>
> **[5:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=315)** To overcome this, the model uses schema comprehension and contextual mapping.
>
> **[5:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=320)** Schema comprehension deals with identifying tables, columns, and the relationship between these, while contextual mapping is where the model associates user intent with specific tables and columns.
>
> **[5:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=331)** An example of this could be mapping sales to a specific column in a revenue table.
>
> **[5:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=336)** So once the model understands what the user is asking, understands the relationships, and knows the locations of the data that it requires, it needs to generate the SQL query.
>
> **[5:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=346)** Here, we get into query formulation and validation, where the model translates the user query into valid and syntactically correct SQL that will return the correct information.
>
> **[5:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=357)** Once this is all done, the resulting SQL needs to be executed for the user to see results.
>
> **[6:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=362)** These results may be displayed in a table or a chart that the user can easily understand.
>
> **[6:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=368)** So applications that use Text-to-SQL enable users to directly query their data and get responses that are highly precise.
>
> **[6:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=375)** These answers can then be used to [[Microsoft Power BI|power BI]] applications, or they can be used to ground LLM generation in conversational apps.
>
> **[6:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=382)** Really flexible tools.
>
> **[6:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=384)** In this video, we looked at an overview of the basics of Text-to-SQL and how we get accurate responses from our structured data.
>
> **[6:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=391)** Being able to ask questions to an LLM in natural language and have the LLM generate accurate and executable SQL to return a table or a chart is a game changer.
>
> **[6:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=402)** Think about all of the ways you could apply this.
>
> **[6:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=405)** So in the next video, we'll move on to the meat of the course, but there are two more important steps before we get there.
>
> **[6:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=411)** Please go through the short reading after this video to set up your account and your notebook environment.
>
> **[6:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=416)** If you've taken our Intro to [[Generative AI]] course, we've improved a couple things and made it even easier to create a new notebook.
>
> **[7:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=422)** After you finish the readings, we'll talk quickly about the concrete projects you'll build in the course, discuss goal setting, and then we'll dive into the practical modules of this course.
>
> **[7:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=432)** I'll see you then.
>
> **[7:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/querying-structured-data-text-to-sql?u=76281980&t=432)** (screen whooshes) (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (18), [[Dashboards]] (3), [[Microsoft Office|Office]] (1), [[Business Intelligence (BI)|Business intelligence]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** sql (18), llm (6)
> **Analogies:** such as (2), imagine (1), similar to (1), just like (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** we covered (1), in the next (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** before we start (1), set up (1)
> **Speakers:** - welcome (1)

#### [Let’s dive in](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=1)** Now that you have your notebook set up, you're ready to get started on building your own [[Generative AI]] applications.
>
> **[0:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=7)** These applications can query any data no matter what the look of it it is.
>
> **[0:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=12)** To do this, we'll work in this [[Snowflake]] environment, which will allow us to access enterprise data and generative AI primitives.
>
> **[0:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=19)** These primitives are ready for AI engineers and scientists to use and are what we'll use in this course.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=25)** If you haven't done so already, please go back to the reading before this video and follow the steps to set up your notebook.
>
> **[0:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=32)** This setup is necessary for success in the following modules.
>
> **[0:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=35)** And it's worth noting, I want you to succeed.
>
> **[0:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=39)** Generative AI is something that I'm very excited about.
>
> **[0:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=42)** I mean, I've made a career out of it.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=45)** I'm very excited to share what I have learned and put into practice in my career just so that you can too.
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=51)** So by the end of this course, you'll have your own [[Generative AI|gen AI]] apps built, coupled with the understanding of how they work, which you can take and apply elsewhere on your own.
>
> **[1:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=61)** Thanks for sticking with me this far.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=63)** I'm very excited about what we're going to build together in the [[Representational State Transfer (REST)|rest]] of this course.
>
> **[1:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=67)** Now, let's get started.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/let-s-dive-in?u=76281980&t=68)** (transition whooshing)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Snowflake]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** set up (2), setup (1)
> **Cross-References:** go back to (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Finding Answers from Unstructured Data with Cortex Search

[↑ Back to Table of Contents](#table-of-contents)

#### [Opening up unstructured data with RAG](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=5)** (light upbeat music)
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=10)** - Welcome back.
>
> **[0:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=11)** I'm glad to see you're following along with me.
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=14)** Most of the world's data resides in unstructured formats like chat logs, books, social media posts, emails, and PDFs.
>
> **[0:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=23)** So imagine a treasure chest, where 80% of the wealth remains untouched.
>
> **[0:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=27)** That's what's happening with [[Unstructured Data]] today.
>
> **[0:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=30)** It's not just lost value, it's lost opportunities to predict trends, understand our customers, and gain a competitive advantage.
>
> **[0:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=38)** In this module, we'll focus on directly asking questions of this unstructured data.
>
> **[0:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=43)** To do this, we'll build a rag using Cortex Search as our backend for retrieval and a Cortex LM for generation.
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=51)** We'll walk through how to create a Cortex Search service and learn how it works under the hood, and we'll do this with a live example where you'll load unstructured data in the form of PDFs to a [[Snowflake]] stage, and then parse and split the documents into chunks that the search service can consume.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=68)** Of course, we'll create a Cortex Search service that sits on the data we've prepared.
>
> **[1:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=74)** So we'll then complete building a RAG by tying together Cortex Search with the Cortex LM.
>
> **[1:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=80)** And importantly, we'll examine how we can measure the accuracy of our RAG app with evals.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=87)** Oh, and did I mention we'll do all of that in the Snowflake Notebook?
>
> **[1:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=90)** Excited?
>
> **[1:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=91)** I am.
>
> **[1:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=92)** Imagine that I'm a volunteer for our local city council.
>
> **[1:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=96)** Every month, the council has a meeting to discuss the latest happenings in the town.
>
> **[1:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=101)** Members from the community come to raise their issues about safety, maintenance and more, and we work with the community to come up with the solutions.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=110)** The problem is that not everyone is able to attend these meetings and frankly, reading meeting minutes, really boring.
>
> **[1:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=117)** It'd be great if there is a way for everyone in the community to get their questions answered about what went on at the meeting, but it can be really time consuming for the council to spread the [[Microsoft Word|word]] and answer the questions from all of our neighbors about decisions made by the council.
>
> **[2:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=132)** And it's critical that the community always gets the latest accurate information.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=137)** We often have rumors swirling about the town simply because people are not up-to-date on the latest meetings.
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=143)** If we could stand up a fast and accurate conversational assistant for our community, that could be a game-changer for us.
>
> **[2:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=150)** It could dramatically improve our ability to involve the community, allow our council members to spend more time crafting innovative solutions to community issues, and make sure everyone always gets fresh, accurate answers to their questions.
>
> **[2:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=164)** This is a great candidate for using retrieval augmented generation, or RAG, to power our community support application.
>
> **[2:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=172)** So now that we've talked about the why, let's talk about the what.
>
> **[2:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=175)** Using a Snowflake Notebook will load unstructured data to a Snowflake stage and start getting our hands dirty, setting up a search service that will index the Federal Open Market Committee, FOMC meeting minutes.
>
> **[3:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=187)** FOMC minutes are detailed records of the discussions and actions taken by the Federal Reserve regarding monetary policy.
>
> **[3:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=195)** These are released three weeks after each meeting, and they provide insights into the Fed's [[Microsoft Outlook|outlook]] on the economy, potential future policy actions that they may take or may be considering.
>
> **[3:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=206)** So together, we'll parse the FOMC meeting minutes to get texts out of the raw PDFs, and we'll split and chunk the text using a recursive character splitter.
>
> **[3:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=216)** You'll get hands-on experience doing this, no sitting around.
>
> **[3:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=220)** You'll be following along in your own Snowflake Notebook with me, not just watching me do it.
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=225)** You'll create and query a Cortex Search service, and this will be the retriever for your RAG.
>
> **[3:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=230)** We'll also examine how to measure the success of a retrieval and generation.
>
> **[3:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=235)** For this example, we won't have ground truth to aid us, so we'll just take advantage of LM as judge to grade the success of our RAG.
>
> **[4:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=242)** And we won't just stop at at learning about the metrics, we'll actually apply these metrics to determine quality for a RAG app.
>
> **[4:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=249)** And after that, we'll look at how the search service stays fresh as the underlying data changes.
>
> **[4:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=254)** Ready to get started?
>
> **[4:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=255)** Let's go.
>
> **[4:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/opening-up-unstructured-data-with-rag?u=76281980&t=257)** (light upbeat music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (5), [[Unstructured Data]] (4), [[Microsoft Word|Word]] (1), [[Microsoft Outlook|Outlook]] (1)
> **Env Vars:** rag (6), fomc (3)
> **Definitions:** is a  (2)
> **Analogies:** imagine (2)
> **Non-Speech:** (light upbeat music) (2)
> **CLI Commands:** make (1)
> **Speakers:** - welcome (1)

#### [What is Cortex Search?](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=0)** - Good to see you again.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=1)** In this video, we're going to dive into a more detailed discussion about what Cortex Search is.
>
> **[0:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=7)** You'll learn how Cortex Search works and the elements that make it far superior to keyword search or [[Semantic Search]] being used on their own.
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=14)** We'll talk about who gets access to the search and how we set this up.
>
> **[0:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=18)** And we'll discuss data freshness, getting data into the service, document parsing, text splitting, and cost considerations.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=25)** We'll start with a discussion of what Cortex Search is.
>
> **[0:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=29)** Cortex Search is the search service that uses state-of-the-art hybrid search, backed by powerful open source embedding models that finds only the most relevant information you need to answer your queries.
>
> **[0:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=41)** It's built to power a wide array of search experiences, including an enterprise search bar, but today we'll focus on using it for RAGs.
>
> **[0:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=49)** If we recall the structure of a RAG app, this allows us to actually find, not just fruitlessly search for the information the LLM needs to answer the query asked of it.
>
> **[0:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=58)** Getting this right is the key to a high quality RAG that doesn't hallucinate, which means making up answers that are incorrect.
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=65)** We'll use Cortex Search for the retrieval stage of RAG.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=68)** As the retrieval stage, Cortex Search is optimized for low latency and works very well when paired with an LLM when we build a RAG.
>
> **[1:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=76)** And it's a managed service, which means that Cortex Search abstracts away a lot of the work that you'd have to do to set up and maintain retrieval.
>
> **[1:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=84)** So by using Cortex Search, you don't have to worry about manually embedding text, keeping the services online and fast, maintaining infrastructure or re-indexing the retriever when you get new data, all of that is subtracted away.
>
> **[1:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=98)** So as we mentioned before in module one, Cortex Search takes a hybrid search approach.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=102)** This is a fancy way of saying that it combines two search methods to get the best results.
>
> **[1:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=107)** One method, keyword search, allows us to find exact mentions of words and phrases so we don't miss out on highly specific terminology.
>
> **[1:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=116)** The other, semantic search, helps us discover when the document answers our question but with different words than what was used in the original query.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=124)** Helpfully the semantic search used by Cortex Search is powered by a state-of-the-art open source embedding model trained by [[Snowflake]] called Arctic Embed.
>
> **[2:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=132)** I'll drop a link in the reading about Arctic Embed so you can learn all about it.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=137)** Cortex Search combines these results and reorders them based on relevance using another model called a reranker.
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=143)** The reranker is a relatively expensive operation, which is why we can't just run it on our entire knowledge base but it's the key ingredient that makes hybrid search so effective.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=153)** You might want to stop and think for a second about access controls when you're getting ready to ship your RAG app to real users, you probably want to make sure that only the users that have access to the underlying data can access answers from your app.
>
> **[2:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=167)** This is one of the nice things about creating a Cortex Search service.
>
> **[2:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=170)** In order for your users to query your search service, they need to both have access to the service and the underlying data.
>
> **[2:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=177)** This is great for preventing security breaches or for creating self-contained internal apps.
>
> **[3:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=183)** For example, if I have a RAG app that answers questions related to the company's internal finances, I probably want to make sure only employees in the finance department have access to querying the app.
>
> **[3:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=194)** In more specific terms to query Cortex Search, the user must be explicitly granted access to the Cortex Search service along with the underlying database and schema.
>
> **[3:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=204)** You did this by granting user privileges, running the grant usage command for the database, schema, and search service.
>
> **[3:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=211)** In this module, you're working in your own trial account and you have all of these privileges already as the developer.
>
> **[3:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=217)** Permissions are not an issue right now but once you start deploying your own apps to users, this will become much more important and easy to do using the grant usage command.
>
> **[3:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=227)** So the next important thing to think about when we're talking about the real implications of building a search service that will be used in production, is how we make sure that we get the right answers based on new information.
>
> **[3:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=239)** If a new information is added to a knowledge base, weekly, daily, or hourly, we want to be able to ask questions of it and not query incomplete or old data.
>
> **[4:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=248)** Cortex Search service has a parameter called target lag that allows us to control this freshness.
>
> **[4:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=253)** Let's take a quick look at this.
>
> **[4:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=255)** Notice that in this cell we are creating the search service and we have the parameter TARGET_LAG assigned to one minute.
>
> **[4:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=261)** This sets the Cortex Search service to check for updates to the base table that we're created about once every minute.
>
> **[4:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=267)** When the search service is created, it will create the index and automatically update it based on the target lag that we set.
>
> **[4:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=274)** This means that we can guarantee the search results will be no older than one minute, or however recently we've set the target lag.
>
> **[4:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=282)** These updates operate similarly to a dynamic table.
>
> **[4:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=286)** If the underlying table is a candidate for incremental refresh, Cortex Search can check for changes and update only those changes in the index.
>
> **[4:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=294)** Incremental updates to your data are critical for maintaining a fresh search and meeting the demands of your user's need for accuracy.
>
> **[5:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=302)** What's correct today may not be correct tomorrow.
>
> **[5:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=305)** Updating an index little by little sounds simple, but it can cause problems because of how these systems are designed.
>
> **[5:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=312)** Things like graphs or trees are built to organize data in a way that makes searching really fast and accurate.
>
> **[5:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=318)** But when you add new information piece by piece, it can mess up this organization, making searches slower and less reliable.
>
> **[5:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=325)** So here's why this happens, these systems rely on balanced, optimized connections to work well.
>
> **[5:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=331)** For example, when you're looking for similar items, the system checks the neighborhood of related data points in the vector space.
>
> **[5:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=338)** If new data is added without reorganizing everything, these neighborhoods can get messy.
>
> **[5:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=343)** Weak or random connections might form and the system has a harder time grouping similar items, or finding the best match.
>
> **[5:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=350)** This makes the whole process less efficient and less accurate over time.
>
> **[5:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=354)** So to combat these challenges, Snowflake can optimize the refresh by batching updates within your chosen target lag, and in some cases complete a full refresh when needed to retain optimal query performance.
>
> **[6:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=366)** Before we talk about searching [[Unstructured Data]], we need to start with how to get the data in.
>
> **[6:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=372)** If you completed our Intro to [[Generative AI]] with Snowflake course, you might remember that Snowflake offers a number of tasks specific LLM functions, which we use in that course to complete common tasks with [[Generative AI|GenAI]].
>
> **[6:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=384)** In this module, to help with preparing data for search, we'll introduce two new task specific functions.
>
> **[6:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=390)** Parse document and split text.
>
> **[6:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=392)** Parse document combines optical character recognition or OCR, capabilities with machine learning models to identify text content and information stored in tables and the structural elements of PDF documents.
>
> **[6:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=405)** You can use the parse document function to extract text and document layout, to build [[Information Retrieval]] systems on large archives of business documents, and to load the extracted information into structured Snowflake tables for use by your applications.
>
> **[7:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=420)** For text heavy documents, we can stick with the OCR mode.
>
> **[7:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=423)** When your documents have embedded elements like tables or when you want to maintain the structural integrity of the documents during parsing, you would be better off using layout mode.
>
> **[7:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=432)** This can be ideal for preparing your data for RAG as retaining the semantic structure of the original documents can lead to improved search performance.
>
> **[7:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=441)** Once we've parsed the documents, we get out a lot of text, and depending on the document length, this could be unwieldy.
>
> **[7:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=447)** We need to split this text up into smaller bite-sized chunks to make them useful.
>
> **[7:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=452)** The split text recursive character function, splits a long string into shorter strings recursively for pre-processing text to be used with text embedding or search indexing functions.
>
> **[7:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=463)** The function returns an array of text chunks, where the chunks are derived from original text based on the input parameters provided.
>
> **[7:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=470)** The splitting text algorithm attempts to split text on separators in the order they're provided.
>
> **[7:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=476)** Either implicitly as defaults based on the format or explicitly from the separator's argument.
>
> **[8:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=482)** Splitting is then applied to each chunk that is longer than the specified chunk size recursively, until all chunks are no longer than the specified chunk size.
>
> **[8:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=491)** For RAG, we'll usually also want to include substantial chunk overlap.
>
> **[8:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=496)** This allows each chunk to retain context about the chunk immediately before and immediately after it.
>
> **[8:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=501)** This way, when we retrieve a chunk, we don't risk missing out on the information we need.
>
> **[8:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=506)** Chunk overlap helps us avoid FOMO.
>
> **[8:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=509)** Another thing you need to consider is cost.
>
> **[8:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=512)** Cortex Search primarily incurs cost for serving and embedding.
>
> **[8:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=516)** Serving refers to the use of multi-tenant serving compute.
>
> **[8:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=519)** This is separate from a user provided virtual warehouse, you pay based on the size of your index data.
>
> **[8:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=526)** This includes both the size of your data plus their vector embeddings, and this is charged per gigabyte per month, and metered by the second.
>
> **[8:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=534)** Embedding costs additionally apply when documents are added to the search service to create their vector embeddings.
>
> **[9:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=540)** Embedding of the search queries are processed incrementally, so embedding costs is only for added or changed documents.
>
> **[9:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=546)** Interesting how this all works under the hood.
>
> **[9:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=549)** In this video, we covered how Cortex Search works directly with text, abstracting away the need for you to manually generate embeddings.
>
> **[9:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=556)** This abstraction saves you tons of time and gets you to the app deployment step much faster.
>
> **[9:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=562)** In the next video, you'll learn the specifics of loading unstructured data into a Snowflake stage to begin the creation of your own Cortex Search service, the hands-on work starts now.
>
> **[9:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/what-is-cortex-search?u=76281980&t=571)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (6), [[Semantic Search]] (3), [[Unstructured Data]] (2), [[Generative AI]] (1), [[Information Retrieval]] (1)
> **Env Vars:** rag (8), llm (3), ocr (2), target_lag (1), pdf (1)
> **CLI Commands:** make (5), find (2)
> **Definitions:** is a  (3), means that (2), refers to (1)
> **Cross-References:** in the next (2), we mentioned (1), we covered (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1)
> **Speakers:** - good (1)

#### [Loading unstructured data to a Snowflake stage](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=0)** - I hope you're feeling pretty confident about how a RAG can optimize your workflows in different use cases.
>
> **[0:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=5)** So I know what information I want accessible to the search.
>
> **[0:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=8)** So now the first step in that process is uploading the data into a stage so my RAG can access it.
>
> **[0:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=13)** Let's go do that now.
>
> **[0:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=16)** In this video, we'll go over external and internal stages and learn how to load data into them.
>
> **[0:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=22)** You'll be introduced to the FOMC, Federal Open Market Committee dataset, that you'll use in the hands-on practice we'll do together in this video.
>
> **[0:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=31)** We should talk about [[Snowflake]] stages.
>
> **[0:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=33)** Snowflake is pretty flexible.
>
> **[0:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=35)** It allows you to load your data from both internal and external stages, where internal stages are stored in the Snowflake environment and external stages are stored in the big three [[Cloud Storage]] providers, or CSP, which are Amazon S3, [[Google Cloud Platform (GCP)|Google Cloud]] Storage Buckets, and [[Microsoft Azure|Azure]] Containers.
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=51)** This is where we'll load our [[Unstructured Data]].
>
> **[0:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=55)** Now, let's get your hand a little dirty by loading your own data.
>
> **[0:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=58)** For this next section, ensure that you are logged into your Snowflake environment so that you can follow along.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=63)** Pause the video here if you need to.
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=65)** To start, I've logged into my Snowflake trial account and selected the plus create button at the top left.
>
> **[1:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=72)** From there, I've scrolled down to the notebook and selected Import .ipynb file to open up my file.
>
> **[1:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=91)** In this window, I'll first give my notebook a name.
>
> **[1:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=97)** Then, I'll choose a compute warehouse.
>
> **[1:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=101)** And last, I'll choose the [[Python (Programming Language)|Python]] environment to be a warehouse notebook.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=105)** For a more flexible environment with more packages, I could choose to run on a container, but I'll run on warehouse here.
>
> **[1:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=112)** You see that at the top, the owner is my username.
>
> **[1:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=115)** This notebook will be stored in our personal database.
>
> **[1:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=118)** This is a special database only for notebooks associated with my user.
>
> **[2:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=123)** Now let's click Create.
>
> **[2:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=129)** In this example, I'll be showing you how to build a RAG with Cortex Search.
>
> **[2:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=133)** Before we get started, I'll need to install some libraries.
>
> **[2:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=136)** These are listed at the top of the notebook.
>
> **[2:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=138)** I'll add them by clicking the Packages dropdown and selecting each one.
>
> **[2:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=146)** Now we're ready to roll.
>
> **[2:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=149)** The first thing we do in the notebook is create the database, tables, and warehouse.
>
> **[2:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=161)** At this step, I'm going to choose an extra small warehouse size and set up the suspend and resume settings.
>
> **[2:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=169)** Please note, when we execute the CREATE DATABASE statement, we create a database that automatically includes a schema named public.
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=176)** When we create the warehouse, it's initially suspended.
>
> **[3:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=180)** Next, we'll get the PDF data.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=182)** The data that we'll be using for this is a sample dataset from the Federal Open Market Committee, or FOMC.
>
> **[3:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=188)** This dataset is a sample of twelve 10-page documents of meeting notes that we'll use for this example.
>
> **[3:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=201)** Remember, the use of this sample data is only for demonstration.
>
> **[3:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=205)** In your own use cases, you'd bring your own data for this and upload it to a Snowflake stage.
>
> **[3:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=210)** In the next step, we'll create our Snowflake stage.
>
> **[3:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=213)** We do this by running the code CREATE OR REPLACE STAGE, enabling the directory, and setting the encryption to SNOWFLAKE_SSE, or server-side encryption only.
>
> **[3:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=223)** Then, we can load data into it.
>
> **[3:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=228)** For this example, we're going to use the Snowsight interface to upload our data.
>
> **[3:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=232)** To do this, we'll select Data on the left side navigation menu.
>
> **[4:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=245)** We'll select database CORTEX_SEARCH_TUTORIAL_DB.
>
> **[4:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=254)** Select our schema as public, and select Stages, and select FOMC.
>
> **[4:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=261)** Now, we'll click browse and go to our Downloads folder and open the folder with the PDF files in it.
>
> **[4:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=267)** Select all the files and drag the files into the UI.
>
> **[4:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=270)** You'll see them in the pop-up window immediately.
>
> **[4:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=272)** Another way to do this is to select Browse to choose the files from the dialog window.
>
> **[4:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=278)** Now, select Upload to upload your files.
>
> **[4:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=288)** Now, let's go back to our notebook by choosing the Projects icon, selecting Notebooks, and opening our notebook.
>
> **[4:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=296)** And let's restart our session if we need to.
>
> **[5:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=304)** Okay.
>
> **[5:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=305)** Now, just to be sure before we continue, let's check that the PDF files are uploaded to the stage.
>
> **[5:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=317)** We have a bunch of files now loaded into stage, but they're not ready to use yet.
>
> **[5:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=321)** That will be next.
>
> **[5:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=322)** (graphic whooshing) We got a lot done in this video.
>
> **[5:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=325)** You learned how to load data into a stage, and now that you have the data staged, we can move on to the next step and parse the data.
>
> **[5:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/loading-unstructured-data-to-a-snowflake-stage?u=76281980&t=332)** Nice work. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (7), [[Cloud Storage]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Azure|Azure]] (1), [[Unstructured Data]] (1)
> **Env Vars:** rag (3), fomc (3), pdf (3), create (2), csp (1)
> **Cross-References:** in the next (2), go back to (1)
> **UI Navigation:** dropdown (1), go to (1), open the (1)
> **Definitions:** is a  (3)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** python (1)
> **Speakers:** - i (1)

#### [Parsing and chunking text](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=0)** - Hello again.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=1)** Imagine for a second that I am back in my [[Microsoft Office|office]] and have just finished uploading the council meeting minutes to stage.
>
> **[0:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=7)** First, I need to parse the text from the raw PDFs.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=10)** Once I have the text in hand, I can go about breaking up the data into searchable chunks.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=15)** This is a useful technique in RAG settings, where we can feed the LLM only the information it needs without too much extra fluff that could confuse the model and incur unnecessary costs.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=25)** Shall we start?
>
> **[0:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=28)** In this video, you'll learn how to parse and split your documents.
>
> **[0:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=31)** After that, you will do this in your own notebook in the next part of the hands-on practice.
>
> **[0:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=37)** Within the [[Snowflake]] environment, we can use the PARSE_DOCUMENT task specific function, which returns the extracted content from the documents at stage.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=45)** I've left a link to the documentation in the reading following this video.
>
> **[0:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=49)** (transition whooshing) So to follow along, go back to where you were in the notebook in the last video.
>
> **[0:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=54)** If you left your notebook, you may need to get your active session again.
>
> **[0:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=58)** We left off the last video with raw PDFs in stage that need to be parsed so that Cortex Search can query them.
>
> **[1:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=64)** Let's do that now.
>
> **[1:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=66)** For this, you'll create a new table called PARSED_FOMC_CONTENT to store the parse text using a query.
>
> **[1:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=72)** The first column we'll add is the relative_path, and then the second will use the PARSE_DOCUMENT [[SQL]] function.
>
> **[1:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=80)** Our parse document functions will take the location of our stage, the relative file path, and the extraction method we want to use.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=87)** The extraction mode can be set to optical character recognition, also known as OCR, or LAYOUT.
>
> **[1:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=94)** The default mode is OCR and it's relatively inexpensive.
>
> **[1:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=97)** The other method we can use is layout mode.
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=100)** Layout mode is optimized for extracting text and layout elements like tables.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=105)** It's also really great for RAG because it considers the semantic structure of the documents, so we'll use it here.
>
> **[1:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=111)** We'll run the cell, and then select from the top two rows to make sure it worked.
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=121)** Great. Everything is ready to move on.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=124)** So now that we have our documents in a readable format, we need to split or chunk the data.
>
> **[2:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=129)** The simplest way to chunk our data is by counting characters or even we could chunk by counting [[Tokens]].
>
> **[2:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=134)** But to level up, we can consider smarter ways to split text that make sense for a RAG setting.
>
> **[2:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=140)** One of these ways is to use SPLIT_TEXT_RECURSIVE_CHARACTER.
>
> **[2:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=144)** This is useful because it splits the text into recursively shorter strings.
>
> **[2:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=148)** And using this, we can choose if we want to separate on marked-on elements along with other separators like new lines.
>
> **[2:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=154)** If you want to learn more, I've left a link to the documentation for text splitting in the reading following this video.
>
> **[2:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=161)** Here, you create the CHUNKED_FOMC docs table and insert into it the file name and chunk from PARSED_FOMC_CONTENT, where we'll specify the markdown formatting, chunk size of 1,800, and overlap of 250.
>
> **[2:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=177)** Now, how did we choose that chunk size?
>
> **[2:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=179)** Chunk size is determined by the parameter that we pass to our chunking function.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=182)** We pass the chunk size, which is an integer.
>
> **[3:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=185)** Depending on the data, larger or smaller chunk sizes may be optimal, and there's no one size fits all or easy rule of thumb.
>
> **[3:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=192)** Experimentation is great here.
>
> **[3:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=194)** Once we have decided on the size of the chunks, we must also think about the overlap.
>
> **[3:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=198)** We set the overlap an integer to ensure that each chunk has context about the previous chunk.
>
> **[3:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=204)** All of this we pass to the chunker.
>
> **[3:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=206)** The function then splits on text separators first, and then recursively continues to split on each chunk until all chunks are below the chunk size limit that we specified.
>
> **[3:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=216)** Before we finish, we should check that this worked by executing select all on CHUNKED_FOMC docs.
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=225)** Looks good.
>
> **[3:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=226)** Now that you have your data uploaded, parsed, and chunked, you can create the search service.
>
> **[3:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=231)** We will set your Cortex Search service to look at the chunks we just created.
>
> **[3:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/parsing-and-chunking-text?u=76281980&t=235)** (transition whooshing) Nice work so far, and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Snowflake]] (1), [[SQL]] (1), [[Tokens]] (1)
> **Env Vars:** rag (3), parse_document (2), parsed_fomc_content (2), ocr (2), chunked_fomc (2)
> **Cross-References:** in the next (2), go back to (1), in the last (1)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (2)
> **Code Identifiers:** relative_path (1)
> **Analogies:** imagine (1)

#### [Creating the Cortex Search Service](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=1)** In the last video, you got everything set up in your notebooks.
>
> **[0:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=4)** Now, we're now ready to create your own Cortex Search service.
>
> **[0:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=8)** This video will be very hands-on.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=10)** Take a moment and pause the video if you need to log back into your [[Snowflake]] account and get your notebook open.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=15)** Now that we have our data ready, we can create the Cortex Search service.
>
> **[0:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=19)** (frame whooshes) Here, I'm using the fully qualified name for clarity, but this is not strictly necessary.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=25)** We'll point the search service to the table we created in the last video storing our chunks.
>
> **[0:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=29)** You'll see this in the first part of the [[SQL]] query and in the select query at the end.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=34)** You'll also set the warehouse and the target lag and the target lag sets the refresh schedule and tells the service how often to check and update the index.
>
> **[0:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=42)** Last, we'll choose the embedding model Snowflake Arctic Embed Large version 2.0.
>
> **[0:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=54)** The embedding model is a really important ingredient to performance search and the Arctic Embed 2.0 model is benchmarked to perform well for rag use cases.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=63)** However, this is another good opportunity for experimentation.
>
> **[1:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=66)** Try this on your own with different embedding models and see how the performance changes.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=70)** Once that's all done, we run the command and the Cortex search service will be built.
>
> **[1:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=75)** Remember that when creating a search service, the search index is also created.
>
> **[1:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=79)** This can result in the search service creation statement, taking a long time to complete on larger data sets.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=85)** So keep an eye on this.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=87)** Once we have our Cortex search service created, we can move on to using it.
>
> **[1:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=91)** In this next step, you'll create the Cortex Search service, use it and check to see how it performs.
>
> **[1:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=97)** Here we'll import some additional libraries we'll need.
>
> **[1:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=99)** We'll import OS from Snowflake core.
>
> **[1:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=103)** You'll import root from typing.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=105)** You'll import the list and from Snow Park you import session.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=110)** Then we'll create our [[Python (Programming Language)|Python]] class to set up our retriever.
>
> **[1:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=113)** This is not strictly necessary, but it's a good way to keep things organized.
>
> **[1:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=117)** Now you define the class cortex search retriever and add two parameters for the user to set.
>
> **[2:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=122)** There are snow park session and the limit to retrieve, the class will just have one method, retrieve, in retrieve will initialize the search service with the database, schema, and service name.
>
> **[2:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=132)** We're fixing these, but you might want to let these be dynamic.
>
> **[2:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=136)** Your call.
>
> **[2:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=138)** Then you can call the service with dot search using the query column name and limit to retrieve, and then we'll use list comprehension to return a list of chunks.
>
> **[2:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=147)** In the next cell, we'll put this in action.
>
> **[2:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=150)** We initialize the retriever with the session and limit to retrieve.
>
> **[2:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=154)** Then we'll use it with a query.
>
> **[2:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=165)** Well done. We got a lot built in this video.
>
> **[2:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=169)** In this video, we covered how to create and call a Cortex search service, and you continued your hands-on practice.
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=176)** This is how we'll retrieve relevant chunks from our knowledge base, our PDFs, and let an LLM answer questions using this information.
>
> **[3:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=183)** So now we'll move on to the generation step of rag.
>
> **[3:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/creating-the-cortex-search-service?u=76281980&t=186)** I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (3), [[SQL]] (1), [[Python (Programming Language)|Python]] (1)
> **Cross-References:** in the last (2), in the next (1), we covered (1)
> **Env Vars:** sql (1), llm (1)
> **Versions:** version 2 (1), 2.0 (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)

#### [Building a RAG with Cortex Search](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=0)** - Before we head back to our hands-on practice and complete our RAG with the search service, I want to recap the goal, what we're aiming to build.
>
> **[0:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=8)** We start with the user interface.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=10)** Once the user enters the query, this is sent to the RAG backend that we've built.
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=14)** The retriever identifies that we'll use both semantic and keyword search under the hood.
>
> **[0:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=19)** Remember, this is what makes it a hybrid search.
>
> **[0:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=21)** The [[Semantic Search]] is more of a fuzzy search where the retriever identifies relevant chunks based on their meaning, and then the keyword search makes sure we don't miss chunks using key terminology.
>
> **[0:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=32)** After the hybrid search returns the data, the retriever then passes the content and the associated [[Metadata]] to the reranker.
>
> **[0:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=38)** The re-ranking further evaluates the returns and puts them in a top end order, which is a subset of the top K that the retriever passed to it.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=45)** The re-rank returns can then be passed to the LLM for generation of a query response that is then passed back to the user with or without associated feedback or references.
>
> **[0:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=54)** Everything from the semantic and keyword search to the reranker is abstracted away for you by the cortex search and we've built this already.
>
> **[1:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=62)** Once we get our search results, they're just passed through an LLM to complete the retrieval augmented generation, and can be served up in a front end like Streamlit.
>
> **[1:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=69)** This is what we'll add next the generation step.
>
> **[1:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=71)** Now let's go build it.
>
> **[1:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=73)** (air whooshing) Now that we have set up our cortex search to be our retriever, we can add Cortex complete for generation, to build our RAG.
>
> **[1:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=79)** We'll also add TRULens instrumentation to our app.
>
> **[1:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=82)** The first thing we want to do here is turn on open telemetry tracing.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=87)** Open telemetry allows us to collect what's called spans, representing units of work in our system.
>
> **[1:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=92)** In our case, the spans will include information about the retriever, the LLM call, and include key metadata, like what data went in and came out, usage information like [[Tokens]] and cost and more.
>
> **[1:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=103)** Then we'll create a new database in schema to use for storing our spans and evaluation metrics.
>
> **[1:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=109)** Now we can go build our app.
>
> **[1:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=111)** We'll do this by creating a [[Python (Programming Language)|Python]] class called RAG.
>
> **[1:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=114)** The RAG will take our retriever, but this time we'll have three methods, retrieve context, that'll use our retriever, generate completion, which we'll use an LLM to answer questions and query, which is going to put everything together.
>
> **[2:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=127)** And each of these methods, you'll notice has this instrument decorator above it.
>
> **[2:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=131)** In the instrument decorator, we include information about the span type and attributes.
>
> **[2:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=136)** The span type tells us semantic information about what this method really does.
>
> **[2:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=140)** The span attributes tell us semantic information about the arguments that go into the method and what comes out.
>
> **[2:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=146)** Including all of this metadata about the span allows for much richer spans.
>
> **[2:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=151)** We can use that information to visualize spans in specific ways later.
>
> **[2:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=156)** Also, it gives us a way for our evals to know what data they should run against.
>
> **[2:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=160)** For example, context relevance will compute against their retrieval span attributes.
>
> **[2:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=164)** The second method we'll use is generation.
>
> **[2:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=167)** This is what I've been promising you'll get from this video.
>
> **[2:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=169)** You imported complete from [[Snowflake]] Cortex.
>
> **[2:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=172)** Now we'll call it and pass in the query and retrieve context into a template, and you can modify this template as you'd like.
>
> **[2:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=179)** The template I've given you does a few key things.
>
> **[3:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=181)** First, it gives the LLM it's role an expert assistant.
>
> **[3:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=185)** It tells it the task to answer questions based on context, and it gives specific instructions to not to hallucinate and to say when it doesn't have the information it needs.
>
> **[3:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=193)** You are an expert assistant extracting information from the context provided.
>
> **[3:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=197)** Answer the question based on the context and do not hallucinate.
>
> **[3:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=201)** If you don't have the information, just say so.
>
> **[3:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=203)** We take this template along with the filled in arguments and send it to an LLM.
>
> **[3:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=207)** Then the query method just runs each of the other methods in sequence.
>
> **[3:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=210)** This is the entry point to the RAG and what the user will call.
>
> **[3:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=213)** Now let's try it out.
>
> **[3:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=215)** In the next cell, we'll run the query.
>
> **[3:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=217)** How is inflation expected to evolve in 2024?
>
> **[3:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=220)** To check our RAG.
>
> **[3:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=222)** Here, we run this and we get a pretty good answer about how inflation was expected to change in 2024, this looks good.
>
> **[3:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=229)** Here, you see how complete has used the content that the retrieved pulled out of the PDFs to generate a response, fantastic.
>
> **[3:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=237)** (air whooshing) Well done, now we've built the first prototype of our RAG.
>
> **[4:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=242)** In the next video, we'll learn how to measure if our RAG is working well.
>
> **[4:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-a-rag-with-cortex-search?u=76281980&t=245)** (air whooshing) (jazzy music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[Semantic Search]] (1), [[Tokens]] (1), [[Python (Programming Language)|Python]] (1), [[Snowflake]] (1)
> **Env Vars:** rag (9), llm (6)
> **Exercise Files:** template (4)
> **CLI Commands:** go build (2), python (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [How to measure success](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=1)** You've created the RAG app.
>
> **[0:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=3)** You've parsed and split all of your data so that the Cortex Search service can create the index and queries we will be running against it.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=10)** So now we have a working prototype, but how do we know if the service is giving us correct answers?
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=15)** How do we measure how successful our RAG is?
>
> **[0:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=18)** To begin our experimentation, the first thing we need to do is register this version of our app.
>
> **[0:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=24)** This gives us a way to keep track of our tests and allows us to capture [[Metadata]], like application name and version.
>
> **[0:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=30)** We'll do so by using TruApp.
>
> **[0:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=32)** We'll also need a TruLens Connector for this.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=34)** This is easy.
>
> **[0:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=35)** We'll just import it and instantiate it with our Snowpark session.
>
> **[0:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=38)** Then our tracing and evaluation will be written to the database and schema associated with our Snowpark session.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=45)** These are the ones we created earlier.
>
> **[0:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=47)** We'll instantiate TruApp with the app and app name and app version.
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=51)** We'll also add the TruLens [[Snowflake]] Connector.
>
> **[0:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=58)** When we're conducting experiments with a RAG, we want to test it against the same dataset in a batch.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=63)** This workflow allows us to measure improvements to our app against a common dataset.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=68)** We'll call this batch a run.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=70)** To create our run, first we need a dataset.
>
> **[1:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=73)** This will hold the queries we want to test.
>
> **[1:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=75)** If we want, we could also include some ground truth here.
>
> **[1:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=78)** To add the run, we'll create our run config.
>
> **[1:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=81)** We'll include more metadata to describe the data and the run, or the experiment.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=85)** And then we'll add it to our registered version of the app, tru_rag.
>
> **[1:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=89)** We can then describe it if we want.
>
> **[1:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=91)** In the output here, you'll see all of the metadata we added in the run config, along with some other useful stuff like what LLM Judge we'll use for computing metrics.
>
> **[1:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=101)** Lastly, we'll start the run.
>
> **[1:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=103)** Starting the run means our application will run inference and batch with all of our queries from our dataset.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=110)** Now, how do we measure accuracy and correctness?
>
> **[1:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=113)** What metrics should we use?
>
> **[1:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=114)** The easiest way to measure accuracy is to have the answer key.
>
> **[1:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=117)** This often is referred to as the ground truth or golden set.
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=121)** If we have the correct answers, we can check the app's answers against the ground truth.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=126)** The name for this metric is correctness.
>
> **[2:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=128)** This metric is great, especially early on with the small data set.
>
> **[2:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=131)** But we'll skip it here.
>
> **[2:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=133)** When our data set gets larger, we can add additional reference-free metrics.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=137)** These are useful because we no longer need the ground truth data or answer key to check against.
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=143)** In particular, for RAGs, we'll use the RAG triad of context relevance, groundedness, and answer relevance.
>
> **[2:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=149)** If you think about the information architecture of a RAG, these metrics lie on each edge.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=153)** Context relevance sits between the query and retrieve context and evaluates the quality of our search.
>
> **[2:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=159)** Groundedness measures how well the LLM response sticks to the facts in the retrieve context, and this is also sometimes called faithfulness.
>
> **[2:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=166)** And answer relevance sits between the query and the response, ensuring that the final answer is relevant to what the user was looking for.
>
> **[2:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=173)** Now, how are these metrics actually computed?
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=176)** They rely on a relatively new technique called LLM Judge.
>
> **[3:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=181)** LLM Judge operates just like it sounds.
>
> **[3:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=183)** We can pass some text such as a question and answer, and then we'll also provide specific instructions and criteria for grading.
>
> **[3:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=191)** With this, the LLM can provide a score against that criteria.
>
> **[3:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=195)** You might ask, why should we trust an LLM Judge?
>
> **[3:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=198)** Good question.
>
> **[3:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=199)** The short answer is that we can benchmark the LLM Judge against human evaluations.
>
> **[3:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=204)** The long answer, I've included a link in the reading so you can learn all about it if you're interested.
>
> **[3:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=210)** Now, let's kick off our run evaluation using these metrics.
>
> **[3:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=213)** To do this, we just need a single line of code, run.compute_metrics.
>
> **[3:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=217)** And we'll pass the list of metrics we want to compute.
>
> **[3:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=220)** Remember all of the metadata we captured with add instrument about the span type and attributes?
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=225)** This is how they're used.
>
> **[3:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=226)** Each eval is pre-configured to run against particular span attributes.
>
> **[3:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=231)** Now we don't have to specify what information each eval to use.
>
> **[3:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=234)** Once we've kicked off the computation, let's go over to view the results.
>
> **[3:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=238)** To view the eval results, we want to go over to the left pane under AI & ML.
>
> **[4:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=245)** We'll then choose Evaluations.
>
> **[4:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=248)** And from here we want to open up the registered app name and app version.
>
> **[4:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=253)** Now we'll see a list of runs on this app version.
>
> **[4:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=256)** To see results, we'll open up the run we just created so we can see each query in our dataset.
>
> **[4:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=261)** We'll also see the evaluation results on the right side of the table.
>
> **[4:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=265)** But wait, there's more.
>
> **[4:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=266)** If we click on a particular trace or row, we can see even more information about this query.
>
> **[4:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=272)** We can see all of the spans associated in the evaluation results.
>
> **[4:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=276)** Let's click on the low performing row to learn more about what went wrong.
>
> **[4:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=279)** We chose this query about what the Fed funds rate was in a particular time in 2024.
>
> **[4:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=285)** This query has low context relevance, meaning that our retriever did not find relevant context for the LM to answer our question.
>
> **[4:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=291)** It also had low answer relevance because the LM declined to answer the question.
>
> **[4:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=296)** This is a direct result of the LLM not having the context it needs.
>
> **[5:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=300)** Data freshness is a hard problem and seems to be the issue here.
>
> **[5:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=304)** What we need to do now is update our RAG to contain the new data, documents starting around late 2024.
>
> **[5:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=309)** The data is not fresh enough.
>
> **[5:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=313)** That was a lot of information.
>
> **[5:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=315)** In this video, you learned what metrics we can use to evaluate RAG, and a useful workflow for conducting experiments.
>
> **[5:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=321)** In our example, this workflow enabled us to identify that our dataset was not fresh enough.
>
> **[5:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=328)** Being aware of how these metrics work under the hood allows us to better understand how our RAGs are performing.
>
> **[5:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=334)** With this, we will look at how to use this knowledge to improve our RAGs in the next video.
>
> **[5:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/how-to-measure-success?u=76281980&t=339)** Lots to do. See you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (4), [[Snowflake]] (1)
> **Env Vars:** llm (8), rag (7)
> **Code Identifiers:** tru_rag (1), compute_metrics (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), such as (1)
> **CLI Commands:** find (1)

#### [Automatic processing of new documents](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=1)** So in the last video, we diagnosed a problem.
>
> **[0:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=4)** The RAG is using stale data.
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=6)** So how do we fix this?
>
> **[0:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=8)** If we go back to when we first talked about Cortex search, you might remember that it can automatically handle refresh and re-indexing as fast as one minute or whatever you set the target lag parameter to be.
>
> **[0:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=19)** This means that the Cortex search service itself is as fresh as our data.
>
> **[0:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=24)** But what happens when our data gets stale?
>
> **[0:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=27)** Well, we need to update it, and we need some way to automate the process from raw PDFs to parsed and chunk data indexed by Cortex search, so we're not doing all of this manually.
>
> **[0:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=37)** And that's where tasks and streams come in.
>
> **[0:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=39)** (transition whooshing) Anytime data is added to stage, we can create a stream that captures changes to the stage.
>
> **[0:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=46)** This stream tells us exactly what has changed.
>
> **[0:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=49)** Then when the stream happens, we can use a task to run transformation on the new data, like parsing and chunking.
>
> **[0:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=56)** To make this happen, the first stream we'll create will watch for changes in our stage.
>
> **[1:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=61)** I'll call this FOMX doc stream.
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=65)** Then I'll create a task to transform the PDF in stage into parsed text.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=70)** I'll use the same code we wrote before and it'll run on a schedule of once a minute whenever new data is available in the stream.
>
> **[1:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=80)** Next, I'll create a second stream to check when new parsed data is available.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=85)** We'll call this FOMC parsed stream.
>
> **[1:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=91)** And I'll create a second task to chunk this data.
>
> **[1:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=94)** Again, same code just now it's contained in a task that watches our parsed stream.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=102)** Once I've created the task, I need to resume them.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=105)** This is because when created tasks start as suspended, and now I can upload new PDFs to my stage and let the magic happen.
>
> **[1:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=112)** Let's try it.
>
> **[1:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=116)** Here I'll upload a new set of PDFs stage.
>
> **[2:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=146)** Now I'll go over to watch the tasks in action.
>
> **[2:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=149)** I can do that by clicking the database explorer and then into tasks.
>
> **[2:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=157)** Then I click on the parsing task and look at the run history, and I'll wait just a few seconds for it to show up here.
>
> **[2:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=166)** Once it's done, I can go check the chunking task too.
>
> **[2:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=172)** And when that's done, I just need to wait for the Cortex Search Service to re-index the new data.
>
> **[2:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=177)** Now let's go back to the notebook to try it.
>
> **[3:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=188)** We get a useful answer out.
>
> **[3:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=190)** The RAG is now fresh.
>
> **[3:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=191)** (transition whooshing) In this video, we learned how to use tasks and streams to keep our Cortex service and RAG fresh.
>
> **[3:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=200)** This mirrors the journey we would take from prototype to production for any LM app.
>
> **[3:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=206)** We started with some experiments.
>
> **[3:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=207)** We iterated to improve our app.
>
> **[3:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=210)** And we made sure our app has a fresh data source, so it can remain high quality when it's in the hands of our users.
>
> **[3:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=216)** Now that the backend is in good shape, let that on the front end onto the next one.
>
> **[3:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/automatic-processing-of-new-documents?u=76281980&t=221)** (transition whooshing)

> [!info]- Semantic Content
>
> **Env Vars:** rag (3), fomx (1), pdf (1), fomc (1)
> **Cross-References:** go back to (2), in the last (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)

#### [Building out the front end](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=0)** - We've got the RAG we've built in a notebook.
>
> **[0:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=2)** Now, let's move it to a Streamlit application for people to use.
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=6)** To open Streamlit, we'll choose the Projects icon on the left and then click Streamlit.
>
> **[0:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=11)** Now, we'll click the plus button on the top right to create a Streamlit app.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=15)** In the dialogue box, we'll choose a name, database, and schema.
>
> **[0:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=24)** Last, we'll choose a warehouse and click Create.
>
> **[0:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=33)** This will create a template app.
>
> **[0:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=35)** We want to remove all of the code here and replace it with our own.
>
> **[0:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=38)** To get the code, you want to open up the repository you cloned from [[GitHub]] before.
>
> **[0:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=43)** In the module_2 folder, you'll see a [[Python (Programming Language)|Python]] file called chat_with_unstructured_data_app.
>
> **[0:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=48)** Open that up and copy all of the code, and then paste it into your Streamlit app.
>
> **[0:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=53)** Before we click Run, we'll add the [[Snowflake]]-ml-python, and snowflake-core libraries to our app.
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=65)** Now we're good to go.
>
> **[1:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=71)** First, we'll look at the code in the left pane.
>
> **[1:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=74)** We start with all of our imports for Streamlit in Snowflake.
>
> **[1:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=77)** Now, we title our app Chat with the Federal Reserve.
>
> **[1:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=81)** Next, we set up a simple CortexSearchRetriever, just as we did before.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=85)** Note that you need to adjust the database and schema to match what you're using in your environment.
>
> **[1:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=90)** Next, we create a Python class named RAG, just as we did in the notebook with just two key changes.
>
> **[1:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=96)** The first change is that we'll add a new method that tracks the conversation history called build_messages_with_context.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=102)** This method both tracks the conversation and formats the context chunks so that they can be used to answer the user's question.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=110)** The second key change is we add streaming to cortex.Complete.
>
> **[1:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=113)** This is done by just setting stream=True.
>
> **[1:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=116)** When we do so, Complete will now return a generator, will access via Streamlit's built-in method, write_stream.
>
> **[2:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=122)** Then we instantiate the RAG.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=124)** Now, let's get into the Streamlit fun.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=126)** We'll first add a messages session_state_variable as an empty list, and we'll add a clear conversation button to clear it when needed.
>
> **[2:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=134)** Next, we'll create the display for message history.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=137)** Depending on the role, we'll write out user and AI messages in different formats.
>
> **[2:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=142)** We can do that using the chat message container by setting the name as user or assistant.
>
> **[2:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=147)** If we want, we can also add an avatar.
>
> **[2:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=150)** This is a good spot to insert your favorite emoji.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=153)** Now, we can call our main RAG methods.
>
> **[2:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=155)** We'll use st_spinner containers to get that nice loading feeling for each step so that the user knows what's happening while they wait, and we'll also display or retrieve context chunks in an expander for the user to click into and read.
>
> **[2:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=168)** Then we'll build the message history, including the user query and context chunks, and we'll generate the stream.
>
> **[2:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=174)** To wrap it up, we'll define main, we'll add the chat bar along with a suggestion so our user knows first question to ask.
>
> **[3:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=181)** We'll write the user input to a chat message and append it to the message history.
>
> **[3:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=185)** We'll write the stream from our RAG completion in a chat message using st.write_stream.
>
> **[3:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=190)** And last, we'll store the full text of the stream after it's done streaming to the conversation history session state variable.
>
> **[3:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=197)** Imagine doing this with your own document set and giving the ability to ask questions of your data directly to users in your organization.
>
> **[3:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=205)** Now, let's look at it in action.
>
> **[3:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=207)** We have the app set up with a Clear Conversation button up top to reset when we need to.
>
> **[3:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=211)** We can now ask questions of the FOMC documents that the RAG is built on top of.
>
> **[3:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=216)** We can ask questions like, what was the Fed fund's rate target range effective September 19th, 2024?
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=225)** Notice that the app displays our question and then lists relevant context found.
>
> **[3:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=230)** Under that, we see the retrieved documents, and these are available to us in an expander.
>
> **[3:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=236)** This lets us take a look at the context chunks that the app retrieved from Cortex Search.
>
> **[4:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=240)** When we are done looking at them, we can minimize them.
>
> **[4:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=244)** Depending on the query you passed and the volume of documents that RAG is searching, this could take a bit of time.
>
> **[4:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=249)** Once the retrieve context that's completed, then it's passed to the LLM, then Anthropic Clause streams out a response to us, and then we get a good answer.
>
> **[4:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=257)** Pretty cool.
>
> **[4:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=259)** You just completed your hands-on build the Cortex Search service and you now have a complete RAG that you can adapt to other use cases.
>
> **[4:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=266)** Nice work.
>
> **[4:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=267)** In the next video, we'll wrap up this module and talk a little bit about what you can expect when you start the next one.
>
> **[4:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-out-the-front-end?u=76281980&t=273)** I'll see you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Snowflake]] (3), [[GitHub]] (1)
> **Env Vars:** rag (8), fomc (1), llm (1)
> **Code Identifiers:** write_stream (2), chat_with_unstructured_data_app (1), build_messages_with_context (1), session_state_variable (1), st_spinner (1)
> **CLI Commands:** python (3)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Exercise Files:** template (1)

#### [Well done!](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=0)** - Well done.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=1)** You made it.
>
> **[0:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=2)** You covered a lot in this module, so let's remember what you did.
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=6)** In this module, you learned how you can directly ask questions of your [[Unstructured Data]].
>
> **[0:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=11)** You built a RAG using the Cortex Search service, and you improved the accuracy of results when searching the data.
>
> **[0:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=18)** You learned what the Cortex Search service is and you loaded unstructured data into a [[Snowflake]] stage.
>
> **[0:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=23)** You learned how to parse your documents and how to split or chunk your data.
>
> **[0:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=28)** You learned about keeping your data fresh.
>
> **[0:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=30)** And from there, you measured the success of your search service that you created using TruLens.
>
> **[0:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=36)** Now, let's talk about what you'll do in the next module.
>
> **[0:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=38)** You'll move over to the other side of data and build a search that draws answers from structured data and Snowflake tables.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=45)** The next module is all about getting answers from structured data using Text2SQL.
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=51)** To do this, we'll use Cortex Analyst.
>
> **[0:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=53)** You will learn about the semantic model specification, how Cortex Analyst works, and how to use the Cortex Analyst [[Representational State Transfer (REST)|REST]] API, as well as learn about the data and execution layer.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=63)** You will further add to your toolkit by building a Text2SQL application using Snowflake Notebooks.
>
> **[1:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=69)** This is going to be a game changer because it will free up time that you can use on other tasks instead of manually querying structured data each time with the bespoke [[SQL]] queries, more time for higher level work.
>
> **[1:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=80)** I'm very excited about the next module, where we'll build an app that queries our structured data.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=85)** See you there.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/well-done?u=76281980&t=87)** (soft music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (3), [[Unstructured Data]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[SQL]] (1)
> **Env Vars:** rag (1), rest (1), api (1), sql (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Speakers:** - well (1)
> **Non-Speech:** (soft music) (1)


### 3. Answer Questions from Structured Data with Cortex Analyst

[↑ Back to Table of Contents](#table-of-contents)

#### [Avoiding death by dashboard](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=5)** - In a past role, I used to watch more senior analysts with total admiration.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=15)** They had this amazing ability to receive vague requests, like, "Show me which [[Microsoft Products|products]] perform best in Q3, but don't forget those external factors."
>
> **[0:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=24)** They're able to produce spot-on, neatly packaged insights from this.
>
> **[0:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=28)** I found this impressive, but when I tried it, it was often not as straightforward as it seemed.
>
> **[0:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=33)** I'd take what I thought my manager was asking me and craft a query to get the answers, only to later realize I misunderstood what, "Perform best," really meant.
>
> **[0:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=42)** Did they want the products with the highest revenue or is the margin more important?
>
> **[0:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=47)** What are these elusive external factors and how exactly was I supposed to handle them?
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=51)** I'd end up with numbers that weren't quite right, leading to a lot of follow-up questions and frustrated stakeholders.
>
> **[0:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=57)** Meanwhile, the senior analysts never seemed to be bothered by this.
>
> **[1:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=61)** When a request came in, they'd casually ask a few extra questions, "Can you clarify what you mean by when you say, 'Best?'"
>
> **[1:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=67)** Or they would adjust their approach on the fly by interpreting what the user was really asking for.
>
> **[1:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=72)** They had a really good sense of this.
>
> **[1:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=74)** For me, it felt like playing phone tag with incomplete information.
>
> **[1:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=78)** I knew how to write really good [[SQL]], but the real trick was decoding what was really meant when they tossed out terms like, "Perform best," and, "Factor in."
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=87)** I wanted the interpretation ability that I saw from more senior people around me.
>
> **[1:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=92)** It finally dawned on me it was about bridging the gulf between fuzzy human language and the data I had on hand.
>
> **[1:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=99)** And even when I leveled up to become a senior analyst that understood the nuances between my stakeholders' requests and how they connected to the data, I had a growing list of requests to complete.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=110)** This caused my stakeholders to sometimes wait days or weeks for answers to their questions.
>
> **[1:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=116)** So today, in order to be effective in business, you need to be able to reliably answer questions based on structured organizational data.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=124)** In a short timeframe, minutes are better than hours, hours are better than days or weeks, and seconds would be pretty cool too.
>
> **[2:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=131)** Decision makers need to have fast and accurate information so that they can respond to changes in the market environment as they happen.
>
> **[2:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=139)** Imagine I tried to solve this by building a dashboard.
>
> **[2:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=142)** This dashboard displays the information that I was asked to gather and updates daily.
>
> **[2:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=147)** I have created a persistent tool, but one that is purpose built to answer a single question or a single series of questions that were determined in the initial request.
>
> **[2:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=156)** Over time, more follow-up requests come in, I modify the dashboard or create a new one for each new request that comes in.
>
> **[2:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=163)** But after a while, these [[Dashboards]] really start to pile up, and this can result in death by dashboard.
>
> **[2:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=170)** Dashboards that may see little use or be subject to constant change requests.
>
> **[2:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=174)** This sounds like it's trending towards a desire for a personal assistant that can quickly and accurately answer any question asked of it.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=182)** More on that later.
>
> **[3:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=184)** You may have dealt with this firsthand.
>
> **[3:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=185)** I know I have.
>
> **[3:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=187)** Bespoke query generation is not time efficient, and neither are dashboards.
>
> **[3:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=192)** We can do better.
>
> **[3:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=193)** Situations like these would be better served by an immediate answer to a question in a natural language anyone can understand, English.
>
> **[3:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=201)** But the person who comes in with a question will not ask you, "What was the sum of rev between Jan 1 and end of March?"
>
> **[3:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=208)** They might ask you, "Which sales region had the highest single-day earnings and what was the amount?"
>
> **[3:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=213)** This leaves you decoding their request, creating the bespoke query, and then going about making a dashboard or writing a report.
>
> **[3:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=221)** You're manually doing all of the steps that a Text2SQL application can do.
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=225)** This is the old way, but it's not the only way.
>
> **[3:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=228)** In this module, we'll untether ourselves from the death-by-dashboard spiral and build an app that provides direct access to structured data for decision makers, business users and executives to query and use directly, all done with natural language.
>
> **[4:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=243)** So let's talk about what we will cover in this module.
>
> **[4:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=246)** You'll learn how to use the Cortex Analyst API to create a Text2SQL app in a [[Snowflake]] Notebook.
>
> **[4:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=251)** You'll learn all about semantic models and how they can give LLMs the power to write accurate SQL that works on your complex database.
>
> **[4:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=259)** And you'll learn how to take SQL generated by Cortex Analyst, dynamically execute it and use LLMs to interpret the result back into natural language, full circle.
>
> **[4:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=269)** And then you'll take that and you'll bring it into Streamlit, so you can bring this functionality to your users.
>
> **[4:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=275)** This will free up time that you've used in the past to manually query check your data, which you can now use for a higher-level work.
>
> **[4:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/avoiding-death-by-dashboard?u=76281980&t=282)** Excited? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Dashboards]] (3), [[Microsoft Products|Products]] (2), [[Snowflake]] (1)
> **Env Vars:** sql (3), api (1)
> **Non-Speech:** (upbeat music) (2)
> **Analogies:** imagine (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - in (1)

#### [Setting up the app](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=0)** - Imagine I'm a product manager working with a [[Data Engineering]] team that is tracking feature adoption metrics.
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=6)** Before we had built our own Texas Equal Workflow, my team wasted hours writing requests for data.
>
> **[0:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=12)** Then we waited for analysts to process those requests.
>
> **[0:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=15)** And then, we would spend time clarifying follow-ups when the results were incorrect.
>
> **[0:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=20)** This happened even for simple questions like how many users used feature X this week.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=25)** We'd go back and forth with this and it delayed decision making and it frustrated everyone involved.
>
> **[0:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=31)** To solve this problem, we shifted and created the Semantic model that powered a text's equal workflow.
>
> **[0:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=37)** This model bridged the natural language queries of the users and the database, allowing team members to type queries like show active users last week.
>
> **[0:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=46)** And this allowed us to immediately get accurate results.
>
> **[0:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=50)** This workflow not only removed bottlenecks, but it also empowered my team to explore data on their own and make faster and more [[Agile Development|agile]] decisions.
>
> **[0:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=59)** Everyone loved this.
>
> **[1:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=60)** Pause the video here if you need a moment to log into your [[Snowflake]] trial account.
>
> **[1:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=66)** Once you're logged in, go to projects and select notebooks, and then select the downward facing carrot on the right of the blue plus notebook button in the top right of the screen and select import ipy notebook file.
>
> **[1:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=79)** Select the file.
>
> **[1:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=80)** And then in the next window, choose a name, warehouse, and [[Python (Programming Language)|Python]] environment.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=85)** Remember, this notebook is owned by my user, as you can see at the top, and the notebook will be stored in a personal database and schema specially for notebooks.
>
> **[1:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=94)** Now, click create.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=102)** Once we've opened the notebook, we just need to install two libraries.
>
> **[1:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=106)** We need Snowflake ML Python, and we need the Tabulate library.
>
> **[1:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=109)** Let's do that now.
>
> **[1:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=119)** In this cell, we choose the warehouse we want to use.
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=121)** We switch to the security admin role and then create the cortex user role and assign the database role of cortex user to this role.
>
> **[2:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=128)** Once you've done that, we use security admin again to grant cortex user role to the user, you.
>
> **[2:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=138)** Notice that you need to change the user at the end of the grant role in line 10 to your own Snowflake username.
>
> **[2:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=144)** This is the name that you use to log into your Snowflake trial account.
>
> **[2:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=148)** If you're not sure what your username is, an easy way to get this is to run the show user's command in a separate cell above to see your name in the name column.
>
> **[2:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=157)** You can also see your username by clicking on the user circle with your initials in the bottom left of the Snowflake UI window.
>
> **[2:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=163)** Enter your username in place of the carrots and execute the cell.
>
> **[2:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=167)** Before we run the next cell, let's take a look at what we're doing in it.
>
> **[2:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=171)** We're going to set the role back to account admin to get the permissions that we need for this part.
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=176)** From there, we'll create the database Cortex Analyst demo and the schema revenue time series.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=182)** We're also going to create a new warehouse, Cortex analyst warehouse for us to use.
>
> **[3:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=186)** Then we grant usage on the warehouse and operation on the warehouse to Cortex user role.
>
> **[3:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=192)** We grant ownership of the schema and database to Cortex user role and then set the role to be used.
>
> **[3:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=198)** We set the use commands for a warehouse database and schema, and then move on to creating the stage that we'll use to store our files.
>
> **[3:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=206)** We start by creating the table daily revenue in the revenue time series schema with the columns, date, revenue, cogs, forecast revenue, product ID, and region ID.
>
> **[3:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=217)** Then we move on to create the product dimensions table.
>
> **[3:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=220)** For this table, we only need two columns, product ID and product line, which is a VAR chart.
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=225)** And we finish off creating the second dimension table we need, region.
>
> **[3:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=229)** This table has an ID, sales region and state column.
>
> **[3:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=239)** You can run the show tables command in a separate cell to check that everything is there.
>
> **[4:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=246)** Looks good.
>
> **[4:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=247)** We have our stage created, the warehouse we're going to use built and the tables that we need in the database ready to have data loaded into them.
>
> **[4:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=256)** Nice work.
>
> **[4:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=258)** Dealing with the ambiguity of natural language is the challenge that text is equal overcomes.
>
> **[4:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=263)** Users deal in natural language that does not map into database language precisely, and this is what makes the generation so difficult.
>
> **[4:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=271)** Recent improvements in generation have come from the semantic models that we create for the LLM to use.
>
> **[4:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=276)** Semantic models assist the generation of [[SQL]] in a much more efficient way than previous methods, and now that we have everything set up, you'll see how to build your own semantic model.
>
> **[4:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=286)** Well done.
>
> **[4:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=287)** You've built the foundational blocks and now we can move on.
>
> **[4:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=290)** I'll see you in the next video.
>
> **[4:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/setting-up-the-app?u=76281980&t=293)** (soft music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (5), [[Python (Programming Language)|Python]] (2), [[Data Engineering]] (1), [[Agile Development|Agile]] (1), [[SQL]] (1)
> **UI Navigation:** select the (2), go to (1), switch to (1)
> **CLI Commands:** python (2), make (1)
> **Env Vars:** var (1), llm (1), sql (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** install (1), set up (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Understanding the semantic model](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=1)** Now that everything is set up and ready to go in your notebook, we can get started.
>
> **[0:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=6)** But before we move on, I want to talk about semantic models in a little more detail.
>
> **[0:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=10)** So let's discuss semantic model structure.
>
> **[0:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=13)** A semantic model represents a collection of tables, each of which contains descriptions of specific aspects of the table.
>
> **[0:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=20)** Each table described in the semantic model maps to a base table in [[Snowflake]].
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=25)** The semantic model addresses issues related to language differences between business users and database definitions, and this provides semantic details like descriptive names and synonyms that allow cortex analysts to answer questions about data the way you intend.
>
> **[0:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=41)** Let's take a look at an example.
>
> **[0:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=43)** We'll include information that sales and income are synonyms for revenue.
>
> **[0:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=47)** Although sales and income are not the same in general accounting and finance terms, imagine in this particular case, that they happen to be used synonymously by individuals in the business unit.
>
> **[0:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=57)** This makes it important when we clarify this in our semantic model, so users can ask questions using the synonyms, sales, and income, rather than being forced to use only accepted terminology.
>
> **[1:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=67)** The semantic model should be organized by business domain or topic with limited scope.
>
> **[1:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=72)** For example, one semantic model for sales analytics, and another for [[Marketing Analytics]].
>
> **[1:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=78)** This leads to a well scoped semantic model and well scoped semantic models ensure high precision and accuracy of results.
>
> **[1:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=86)** Now I want to talk about the tables that we'll create for our semantic model.
>
> **[1:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=89)** The semantic model and the semantic model tables sit on top of the tables and views in the database.
>
> **[1:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=95)** That is a mouthful.
>
> **[1:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=96)** To build the semantic model, we build semantic tables that contain some of the information that we see in the views, but there's another layer to these tables.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=105)** When we build our semantic tables, we define several elements.
>
> **[1:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=109)** Each table in a semantic model has a name that is a unique descriptive name for that table.
>
> **[1:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=114)** For example, sales data.
>
> **[1:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=116)** These table names need to be unique, so some planning before implementation can save time later.
>
> **[2:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=122)** Under this, we enter a description of the table, and this is the table that the semantic model will be referencing.
>
> **[2:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=128)** Next, we need to enter a fully qualified name of the table.
>
> **[2:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=131)** This just means including the database, schema, and table name.
>
> **[2:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=134)** We can also enter synonyms or other terms and phrases that are used to refer to the table.
>
> **[2:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=139)** These need to be unique.
>
> **[2:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=141)** Let's talk a bit about the base tables each semantic model has.
>
> **[2:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=144)** In these base tables, you can describe the columns available for querying.
>
> **[2:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=148)** Each is described with a name, synonyms, a description, a [[SQL]] expression, and the data type of the column.
>
> **[2:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=155)** This is the first part of the yaml file.
>
> **[2:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=158)** In this part of the yaml file, we define the dimension columns in our table.
>
> **[2:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=163)** These include a list of categorical variables in the table.
>
> **[2:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=166)** Now that we have the dimension set, we can set time, dimensions, measures, and filters.
>
> **[2:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=171)** Time dimensions is a list describing time values, including columns that contain data such as sales date or a timestamp.
>
> **[2:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=177)** Measures are the fields with numerical values in the table, such as revenue, impressions, or salaries.
>
> **[3:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=183)** Note that we can also set a default aggregation function as a measure.
>
> **[3:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=187)** If we had them, we could set filters here.
>
> **[3:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=189)** These name filters represent a SQL expression and are common ways that the table is likely to be filtered.
>
> **[3:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=195)** In addition to this, cortex analyst also supports SQL joints.
>
> **[3:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=199)** To do this, you'll define the joins in the relationship definitions part of the file that comes after the list of the tables.
>
> **[3:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=205)** I will show you how to do this, later in the module.
>
> **[3:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=208)** Next, you'll set up the first part of your notebook environment, which we will add the semantic model to, later on.
>
> **[3:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=214)** With that discussion of semantic tables out of the way, let's go back into our notebooks and load up our data into the tables we created earlier.
>
> **[3:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=222)** We have three tables that we need to get into our stage, daily revenue, region, and product, all in CSV format, and we also need to get our semantic model, revenue time series yaml into our stage for upload.
>
> **[3:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=236)** To do this, you'll be moving through the snow site interface and away from your notebook to set this up.
>
> **[4:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=241)** First, head over to the left pane of UI.
>
> **[4:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=245)** There's a database icon next to the [[Microsoft Word|word]] data, and select that, and then select add data.
>
> **[4:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=252)** From here, you get a wide variety of options to add data to your project.
>
> **[4:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=257)** We will use the load files into a stage button, which you see at the top here.
>
> **[4:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=262)** Drag the four files from your downloads folder or whichever folder that you save them in, into this popup.
>
> **[4:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=268)** Now move down and select your database schema and stage, which are cortex analyst demo as the database, revenue time series as the schema, and raw data as the stage.
>
> **[4:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=280)** Once that's all in, select upload.
>
> **[4:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=282)** Let's check that everything is uploaded.
>
> **[4:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=285)** In the snow site UI, navigate to data and then [[Databases]].
>
> **[4:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=289)** Here, you see all the databases on your account that are associated with the role that you're using.
>
> **[4:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=294)** Choose cortex analyst demo.
>
> **[4:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=298)** From here, move to the schemas tab and select revenue time series.
>
> **[5:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=303)** Next, move to the stages tab and look at the raw data stage.
>
> **[5:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=307)** If prompted, select the enabled directory table and cortex analyst warehouse to refresh the directory table.
>
> **[5:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=314)** You should now see the four files listed in the stage, ready to go.
>
> **[5:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=318)** Now we're ready to create Snowflake tables from these files in stage.
>
> **[5:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=322)** Let's go back to our notebook.
>
> **[5:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=323)** To start, we copied the data from our stage into the Snowflake tables that were just created, prior to this.
>
> **[5:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=329)** We set the use statements to define cortex user role, the database, schema, and warehouse to use.
>
> **[5:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=336)** Then execute copy into for the daily revenue, product, and region tables.
>
> **[5:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=343)** Nice. Everything is in, and we're ready to move on.
>
> **[5:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=347)** A good analyst will dig through all of an organization's data to understand the semantic relationships and definitions that come from the underlying tables.
>
> **[5:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=356)** They know which data to pull in for which question, and when the manager asks questions about 2025, they know the manager really meant fiscal year 2025.
>
> **[6:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=365)** Now, let's take a look at how this works.
>
> **[6:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=367)** Before, we mentioned that we wanted to use LMS to write SQL on command.
>
> **[6:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=372)** Cool.
>
> **[6:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=373)** One approach to do this would be just to call the LLM directly.
>
> **[6:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=376)** I could construct a prompt with a question along with some information about the tables and columns I have available.
>
> **[6:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=383)** We'll also include in our system prompt that the LLM is a helpful assistant that writes SQL from natural language user questions, and that it should only respond with SQL.
>
> **[6:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=393)** For this task of writing SQL code, let's use a highly capable foundation model, Claude sonnet 3.5.
>
> **[6:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=406)** It's hard to evaluate SQL by just looking at the code, so let's execute it to see if the result answers our question.
>
> **[6:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=415)** That did a pretty good job.
>
> **[6:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=417)** However, it's a bit clunky to pass all of that information about the database into the prompt, each time I want to write SQL.
>
> **[7:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=424)** And it seems a bit arbitrary on what information I should really include.
>
> **[7:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=428)** While we need some way to pass information about our database into the context window, it'd be great if we had a structured way to do so.
>
> **[7:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=435)** When we use a semantic model, we can do that in a standard comprehensive way that scales to hundreds of tables and complex joints across our database.
>
> **[7:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=443)** When we create that semantic model, we are creating a structured method to capture information about the data and relationships that the LLM can reference when it's generating SQL.
>
> **[7:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=452)** This makes the generated SQL much more accurate, and we'll look at this in more detail in the following videos.
>
> **[7:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=459)** Nice work.
>
> **[7:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=460)** Now that you know about semantic models, we can move on to how to call them for your text as equal workflow.
>
> **[7:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=465)** Creating the semantic models is the heavy lift that allows your query engine to, intelligently, understand the underlying database tables and views.
>
> **[7:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=475)** This step can take a lot of time depending on how complex or larger your data is, but it's worth the effort.
>
> **[8:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=481)** Once the Taxes Equal Query engine has this, it's able to generate valid code that can be used by the different workflow elements.
>
> **[8:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=488)** We'll continue with this in the next video.
>
> **[8:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=491)** I'll see you then.
>
> **[8:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/understanding-the-semantic-model?u=76281980&t=492)** (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11), [[Snowflake]] (3), [[Databases]] (2), [[Marketing Analytics]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (11), llm (3), csv (1), lms (1)
> **Cross-References:** later in (1), go back to (1), we mentioned (1), in the next (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), imagine (1), such as (1)
> **UI Navigation:** navigate to (1), select the (1)
> **Prerequisites:** set up (2)
> **Versions:** 3.5 (1)

#### [Working with the semantic model](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=1)** In this video we'll learn how to use the Cortex Analyst API.
>
> **[0:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=5)** We'll start by calling the [[Representational State Transfer (REST)|REST]] API, so if your notebook is not already open, open it up again and rewind it to this cell, using semantic models to share context with LLMs.
>
> **[0:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=16)** Ready? Let's go. (graphic whooshing) The reason that we use semantic models is to improve the [[SQL]] generated by our LLMs.
>
> **[0:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=24)** These models give us a structured way to capture the information that we need from our data which relates to our business.
>
> **[0:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=30)** When we pass this information to the LLM with the request, the SQL generation improves.
>
> **[0:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=36)** Now, take a look.
>
> **[0:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=37)** Here, we're choosing our semantic model and naming it Revenue.
>
> **[0:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=40)** From there, we are updating semantic_model_name to add it to the semantic model.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=45)** In the next part, we're defining our semantic model base_table and the primary keys for these tables.
>
> **[0:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=50)** We define our dimensions, time_dimensions, and our measures.
>
> **[0:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=55)** As we go through this, we see that for our base_table, daily_revenue, we also provide a description of what it does.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=63)** We also add the database, schema, and table, as well as their primary keys, date, product_id, and region_id.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=70)** Under that, we identify the name, expression, and data type for both product_id and region_id in the dimensions table, and we define the time_dimension table with a date expression.
>
> **[1:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=81)** Note that we add a description here as well as setting unique to equal true.
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=85)** Next, we define the measures of daily_revenue, daily cost of goods sold, daily_forecasted_revenue, daily_profit, and daily_forecast_absolute_error.
>
> **[1:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=96)** Note the synonyms that we set for this and the description.
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=100)** Then, we update the semantic model with what we just built.
>
> **[1:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=103)** Now that we've expended some effort in writing down our semantic model with the data we want to use, let's try again to naively pass it to a SOTA, or state-of-the-art LLM.
>
> **[2:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=122)** That worked out okay, but the region_id is not very helpful for a human user.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=126)** It would be better if we were able to return the natural language name for the region instead.
>
> **[2:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=132)** We want to add context for the LLM to reference when it generates its response.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=137)** We could adjust our prompt to give the LM the required context so that it can substitute the region_ids for the names, but an analyst wouldn't do that.
>
> **[2:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=145)** They'd create a view with a join that returns both the region_id and the related region name, but appending more and more information into the prompt could result in that prompt eventually exceeding the context window.
>
> **[2:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=159)** Instead of that, we'll expand the semantic model to include the information that we are missing.
>
> **[2:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=165)** For this, we'll join the revenue table to the region table to get the region name instead of just the region_id.
>
> **[2:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=172)** Let's do that now.
>
> **[2:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=174)** I want to set up the relationship between the region name and the region identifier to make this more human-readable.
>
> **[3:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=180)** To do this, I'll define semantic model region to associate sales_region to region_id through the region identifier.
>
> **[3:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=188)** Under dimensions, I define all of this and pass some sample values for sales_region to the LLM for it to use.
>
> **[3:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=195)** Then, I'll update the model again.
>
> **[3:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=199)** I have both sides of the relationship defined, but now I have to set up the relationship that sits on top of that.
>
> **[3:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=205)** I define semantic_model_region_relationships, name it, and set the join that I want.
>
> **[3:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=211)** In this case, I want a left_outer, many_to_one join relationship with the daily_revenue as the left table to join on the sales_region.
>
> **[3:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=219)** Once more, I update and append the model.
>
> **[3:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=222)** Let's run it again.
>
> **[3:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=228)** That's interesting.
>
> **[3:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=229)** Once we increase the task complexity, the state-of-the-art LLM fails to generate valid SQL.
>
> **[3:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=235)** Maybe the LLM isn't expecting this format, so let's take a look at what we did here.
>
> **[4:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=240)** We did not call Cortex Analyst this time.
>
> **[4:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=242)** We'll run this using Cortex Analyst in the next video to see how it handles this.
>
> **[4:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=246)** (graphic whooshing) Nice work.
>
> **[4:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=248)** You learn the basic structure of the semantic YAML file, and created your own.
>
> **[4:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=254)** We passed it to complete and had moderately good results, and now that we've created the basic structure, we can append it in the future.
>
> **[4:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=261)** In the next couple of videos, I will show you how important these models are in achieving high-accuracy SQL Generation.
>
> **[4:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/working-with-the-semantic-model?u=76281980&t=269)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** region_id (6), daily_revenue (3), sales_region (3), base_table (2), product_id (2)
> **Env Vars:** llm (6), sql (4), api (2), rest (1), sota (1)
> **Cross-References:** in the next (4)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - welcome (1)

#### [Using Cortex Analyst](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=1)** In the last video, you created the Semantic Model and passed it to complete, but we need better results.
>
> **[0:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=8)** In this video, we will engage Cortex Analyst and see how it elegantly deals with this level of complexity.
>
> **[0:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=16)** Let's think about this for a second.
>
> **[0:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=18)** So imagine you are a senior manager at an international retail company that is feeling a little frustrated.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=25)** You ask your Texas Equal workflow for data on sales performance by region, by store, and who the top performing sales reps are for each store and region.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=34)** What you got back was the dataset that had columns of numerical IDs for the stores, regions and reps.
>
> **[0:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=40)** Not very human readable.
>
> **[0:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=43)** A quick filter tells you what you want to know, but now you have to spend time looking up which numerical identifier refers to which region, store and rep.
>
> **[0:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=53)** The other option is to join in new columns from Dimension tables with the human readable labels for the region, store and reps.
>
> **[1:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=60)** This is time consuming and pretty frustrating.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=63)** What you really want is the data set delivered to you with these human readable features given as default.
>
> **[1:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=70)** Since you didn't get this, you contact your data team, send the data set to them, and ask for them to build the joins and send a new version back to you.
>
> **[1:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=78)** Then you wait. The problem wasn't the sequel.
>
> **[1:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=82)** It returned the ask for information, just not in a human readable form.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=87)** The problem was the semantic model that the text to sequel workflow was using.
>
> **[1:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=91)** It was too basic and we can fix that.
>
> **[1:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=94)** Are you ready to try this out to see the process in action?
>
> **[1:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=98)** Jump back into your notebook and we'll test the semantic model we've built and then build it out even further to overcome this hurdle.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=105)** (graphics whooshing) The reason that the LM did not produce [[SQL]] that was any better than okay is because it did not deal with the joints properly.
>
> **[1:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=112)** Now we'll call Cortex Analyst and see how it's able to deal with this new level of complexity.
>
> **[1:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=118)** We start by importing from [[JSON]] and [[Snowflake]].
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=121)** Now we set the API endpoint in the timeout for 50,000 milliseconds.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=126)** Now we define a method, get SQL from Cortex Analyst.
>
> **[2:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=130)** We set Cortex Analyst to take the user query and return any SQL statements.
>
> **[2:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=135)** We build messages with the role being the user and the content query being identified as type equals text.
>
> **[2:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=141)** We can now move on to setting up the request body that will be sent to the Cortex Analyst API.
>
> **[2:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=147)** Under request body, we set the API request.
>
> **[2:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=151)** We set the method to post, the path to API endpoint.
>
> **[2:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=155)** Leave a blank array for headers and parameters.
>
> **[2:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=158)** We'll set the request body and that the timeout will be in milliseconds.
>
> **[2:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=163)** This covers the requests that'll be sent to the API.
>
> **[2:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=166)** We'll then set the parse JSON content to be transformed from the response JSON that the API sends back.
>
> **[2:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=173)** Once that's set up, we move on to getting the content back from the Cortex Analyst API, and return the request body message, the content from the API and the statement.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=182)** Then we'll test it out with our user query, asking what the highest single day revenue was in each sales region.
>
> **[3:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=191)** Now we'll inspect the output of Cortex Analyst by running the next sale.
>
> **[3:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=196)** Okay, we see that the return tells us the type of request SQL and the sequel code itself.
>
> **[3:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=202)** Now we'll run the sequel to see what we get back, but we will not stop there.
>
> **[3:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=209)** We will continue on to the natural language response in a moment.
>
> **[3:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=213)** (graphics whooshing) Let's talk about why Cortex Analysts worked when a state-of-the-art LLM didn't.
>
> **[3:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=220)** There is a real need for a semantic model when we are generating SQL queries.
>
> **[3:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=224)** Even a super smart analyst would struggle to write SQL on raw schema data without further context.
>
> **[3:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=231)** To understand this, let's look at the parts that make up the Agentic workflow that answers user questions.
>
> **[3:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=236)** The first part is the classification agent that takes the semantic model you produced and the user question and decides if the question is answerable.
>
> **[4:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=245)** The agent classifies the question into classes such as ambiguous, non-data question, non SQL data question and more.
>
> **[4:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=252)** If the question can be answered using SQL, it's passed on.
>
> **[4:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=257)** But if not, the user will be presented with similar questions that the classification agent can answer or the question may be rejected.
>
> **[4:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=266)** From there, content is analyzed and features are extracted by the feature extraction agent.
>
> **[4:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=272)** This agent determines if the question is a time series question or a period over period question, such as asking what the year over year revenue was for a certain month.
>
> **[4:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=282)** The feature extraction agent passes all of this to the context enrichment agent.
>
> **[4:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=287)** That will process the semantic model with additional context relevant for answering the question.
>
> **[4:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=293)** This is then passed to an array of SQL Generation agents, which each use their own LLM to generate SQL.
>
> **[5:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=300)** The error correction agents take the generated SQL and check for both syntactic and semantic errors by utilizing core Snowflake services such as the SQL compiler.
>
> **[5:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=310)** The agent then runs on an error correction loop on any errors that are found.
>
> **[5:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=315)** From there, all of this corrected code is passed to a synthesizer agent and generates the final SQL query.
>
> **[5:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=323)** I've left a link to a really interesting blog post that goes into this in even more detail in the reading after the video.
>
> **[5:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=331)** Well done.
>
> **[5:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=332)** You learn the limitations of using complete directly when working with Semantic model and why a well-developed semantic model assists the SQL Generation in a powerful way.
>
> **[5:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/using-cortex-analyst?u=76281980&t=342)** In the next video, you will learn how to use RAG's sibling, Table Augmented Generation or TAG.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[JSON]] (3), [[Snowflake]] (2)
> **Env Vars:** sql (14), api (8), json (3), llm (2), rag (1)
> **Definitions:** is a  (2), refers to (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - welcome (1)

#### [From text-to-SQL to TAG: Creating table-assisted generation](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=0)** - Back to the [[SQL]].
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=1)** The SQL that was returned is pretty good, but will not stop here.
>
> **[0:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=5)** Let's continue and get to a natural language response.
>
> **[0:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=9)** Let's go see this in action and go back to the notebook.
>
> **[0:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=12)** (graphics whooshing) Texas SQL is great, but how can we push this even further?
>
> **[0:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=17)** What if we want a full natural language response instead of just SQL responses?
>
> **[0:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=22)** Let's talk about a term I like to use, TAG.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=25)** TAG stands for table assisted generation, which is what we're going to do with Cortex Analyst.
>
> **[0:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=31)** Just like in the last module where RAG augmented the LLM generation with the retrieval service for [[Unstructured Data]], TAG augments the LLM with SQL results.
>
> **[0:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=41)** Before we move on, make sure that you have installed the tabulate library.
>
> **[0:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=45)** This will allow you to convert the SQL output using [[Pandas (Software)|pandas]] into LLM readable markdown format, which can then be sent to the LLM with the query.
>
> **[0:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=54)** We see the output here.
>
> **[0:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=55)** Now we will send the query and SQL output to the LLM.
>
> **[1:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=60)** We set the messages, the system role, and provide a prompt to focus the LLM.
>
> **[1:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=65)** For the user role, we provide instructions and guidance for the LLM.
>
> **[1:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=69)** We inform it of the Text to SQL process and provide the results of executing the SQL.
>
> **[1:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=74)** Then we instruct it to answer our question.
>
> **[1:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=77)** Under options, we set guardrails to equal true, so we don't get any offensive or harmful content in the response.
>
> **[1:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=84)** And we'll set complete to use Cloud 3.5.
>
> **[1:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=87)** Then we'll run the cell and see the response below.
>
> **[1:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=93)** Now we have a single method which we can use to answer questions from tabular data.
>
> **[1:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=98)** All we have to do is pull it all together.
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=100)** Let me show you how to do this.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=102)** We'll define a method, answer a question using Cortex Analyst, which we'll use to generate the SQL that we'll need to answer our query.
>
> **[1:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=109)** We define the output to get the SQL from Cortex Analyst, and this executes the query.
>
> **[1:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=114)** We then transform the output into the LLM readable format, and from there we send the query and the SQL results to the LLM to generate our response, just like we did before.
>
> **[2:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=126)** We use the same messages, options, and response that we tested above and set it to return our response.
>
> **[2:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=133)** Now we'll run the method and ask it to answer the question, what is the highest daily revenue recorded in a single day in each sales region?
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=143)** Nice. That worked out pretty well.
>
> **[2:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=145)** We got a natural language response that's clear and easy to understand and that we can count on to be factually correct, awesome.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=153)** (graphics whooshing) You have built out an entire text-to-SQL workflow and it's generating valid and accurate SQL, which is answering user questions in natural language.
>
> **[2:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=163)** TAG, Table Assisted Generation is a game changer and much like how RAG assists LLM generation with unstructured data, this is the equivalent for structured.
>
> **[2:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=174)** Tag it and bag it.
>
> **[2:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=175)** This job is done. Well, almost.
>
> **[2:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=178)** The only way we could make this even better is to expand the semantic model so that it covers questions about product lines.
>
> **[3:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=186)** Actually, that sounds like a great idea.
>
> **[3:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/from-text-to-sql-to-tag-creating-table-assisted-generation?u=76281980&t=188)** Let's go do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[Unstructured Data]] (2), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** sql (14), llm (10), tag (4), rag (2)
> **Cross-References:** go back to (1), in the last (1), in the next (1)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** just like (2)
> **Versions:** 3.5 (1)
> **Speakers:** - back (1)

#### [Expanding the scope of the semantic model](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=0)** - Welcome back. Now that Cortex Analyst can answer questions in natural language about revenue and break it down by region, let's expand it to include breakdowns by different product lines.
>
> **[0:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=11)** Jump back into your notebook to follow along.
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=14)** (air whooshing) Okay, we now have a model that allows Cortex Analyst to answer our revenue questions by region, but what would be even better is if we could include breakdowns for different product lines.
>
> **[0:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=24)** This can open up the model to another business unit that can take advantage of what we've built here.
>
> **[0:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=29)** In the next cell, we'll define an extension to our Semantic Model, semantic model product.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=34)** We will name the table and give it a description that references it as a dimension table.
>
> **[0:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=39)** Under dimensions, we'll set product ID and product line with some sample values.
>
> **[0:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=44)** Then we'll just depend it onto our semantic model using replace so that it sticks in the right spot.
>
> **[0:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=51)** Next, we need to make sure that semantic model includes their relationship between our revenue and the new product table.
>
> **[0:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=57)** We'll join on Product ID in a left outer many-to-one join.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=63)** Product lines can be a bit ambiguous, so this is a good opportunity to use search so that we can tie the product mentioned in the query to the column values in our table.
>
> **[1:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=74)** For example, if someone asks, "How much revenue could be attributed to apparel?"
>
> **[1:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=78)** We can use Cortex search behind the scenes to resolve apparel to clothing, and then use the term clothing as their product line in our generated [[SQL]].
>
> **[1:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=85)** We can do this by integrating Cortex search into our semantic model, which will help to make sure we reference the correct product categories in the SQL generated by Cortex Analyst.
>
> **[1:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=95)** I've dropped a link to a reading on this after the video.
>
> **[1:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=97)** We created the search service, product line search service, on product dimension and passed to the search service the warehouse. target lag.
>
> **[1:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=105)** and a nested select distinct product line from the Dimension Table product.
>
> **[1:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=113)** The search service now has a list of all distinct [[Microsoft Products|products]] to find.
>
> **[1:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=118)** In this next cell, we build and update the semantic model with our product search service by adding the product dimension table, and we set this table and its dimensions for this update.
>
> **[2:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=128)** Then we'll update our master semantic model again.
>
> **[2:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=131)** Now let's take a look at what we have.
>
> **[2:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=145)** Looks good. Our semantic file has been updated.
>
> **[2:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=147)** Let's test this out by running our question again.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=153)** That was better, but what if we could add custom instructions to our semantic model so that it always breaks down the answer by year?
>
> **[2:39](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=159)** We can do this by adding the custom instructions, always break down by year, to our semantic model.
>
> **[2:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=165)** This should now alter the semantic model so that any query response will be broken down using this instruction.
>
> **[2:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=171)** Now let's run the query again and see what we get back.
>
> **[2:56](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=176)** Success. The year is now included in the response, just like our custom instructions specified.
>
> **[3:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=185)** One of the great things about Semantic models is that, as you develop them, you can take standardized organizational queries that have been vetted already and add them to the semantic model.
>
> **[3:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=196)** This is useful because it creates a repository of verified queries that can be offered to users as options when they're searching.
>
> **[3:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=203)** And by being verified, the user knows that they can trust the output when using these queries.
>
> **[3:28](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=208)** In this cell, we are taking the query from before and appending it to the Semantic model.
>
> **[3:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=214)** First, name the query and give it the question that it answers.
>
> **[3:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=218)** Then we'll add a verified at time and the name of the person that verified it.
>
> **[3:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=222)** Then we'll add this to the Semantic model.
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=225)** Now that we have this new verified query appended, let's test and see what we have using the Get SQL function.
>
> **[3:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=235)** After running get SQL from Cortex Analyst and the question from before, we see the annotated SQL we appended followed by the identifying information, including the query name, question, the time it was verified at and the verifier, me.
>
> **[4:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=250)** This is great because we can improve the reliability of high-traffic known queries, and we can expand this list out over time as our app is used.
>
> **[4:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=259)** If we wanted, we could even surface this back to the user so they know the SQL generated has been verified already by a human.
>
> **[4:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=266)** This is looking good, but our semantic model is getting bigger and bigger as we add more information to it.
>
> **[4:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=271)** Using the model as a string was great for understanding how the Semantic model affects the questions we can ask of our data, but it would be more scalable to point to a file path instead of having the string on hand.
>
> **[4:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=284)** We'll dive into that next.
>
> **[4:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=285)** Passing models as strings is great while we are building the Semantic model, because we can look at what our model looks like at each step of the development process.
>
> **[4:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=294)** Pointing to the Semantic model file path and stage only requires the single line code change.
>
> **[4:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=299)** In our request body we'll just change the semantic model argument to Semantic model file, and we'll pass in the fully qualified file path to the Semantic model file that's already sitting in our stage.
>
> **[5:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=309)** Then we can quickly verify and rerun the SQL generation with Cortex Analyst, pointing to the file on stage instead of the string semantic model from our notebook.
>
> **[5:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=322)** Wonderful. Everything is where we expect it to be.
>
> **[5:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=326)** Now that we have looked at how semantic models are built, we will move on to look at the Semantic model generator that [[Snowflake]] offers in the Snowflake UI.
>
> **[5:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=335)** This model generator can be used to either build your model from scratch or edit and update your model once it's already built.
>
> **[5:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=342)** It's very useful and I'm excited to share it with you.
>
> **[5:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=344)** So get back into your Snowflake trial account.
>
> **[5:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=347)** On the left side of your screen, look for the AI and ML icon under the Projects tab that you used earlier to get to your notebook.
>
> **[5:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=354)** From there, go to the studio and move over to the Cortex Analyst tile and select Try.
>
> **[6:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=362)** Since you have already run the notebook, you have the database, schema, and warehouse already ready to go.
>
> **[6:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=368)** Here I can choose either to edit an already built semantic model or start a new one.
>
> **[6:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=372)** For this example, we'll build a new semantic model from Zero to Hero.
>
> **[6:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=377)** Select + Create New.
>
> **[6:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=380)** Start by selecting the database, schema, and stage from earlier.
>
> **[6:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=384)** Name the Semantic Model.
>
> **[6:26](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=386)** I'll name mine "Revenue Time Series Generated", because the earlier one was named "Revenue Time Series".
>
> **[6:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=392)** Next, I'll pop in a description.
>
> **[6:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=394)** I'll copy and use the same one that is given to us as a hint here and hit Next.
>
> **[6:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=400)** This part is optional, but it's a good idea to enter your own questions when developing your own non-demo cases.
>
> **[6:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=406)** For this example, I'm going to copy the example questions again.
>
> **[6:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=410)** I'm also going to add one more question.
>
> **[6:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=412)** That is, what product lines have the highest cost of goods sold?
>
> **[6:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=417)** Then I'll select Next and we'll move on to selecting our data.
>
> **[7:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=421)** Now we'll select our data.
>
> **[7:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=423)** Here we see the database location where we chose to store the Semantic Model.
>
> **[7:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=427)** This includes all of the tables we need.
>
> **[7:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=430)** Last, we'll select all of the columns from these tables, and I can do so by just selecting the checkbox next to each table.
>
> **[7:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=438)** Great. Now we've selected our data, we can use the UI to get it set up.
>
> **[7:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=443)** On the left we have the setup for our Semantic Model, and I have the different logical tables; the Revenue table, Product Dimension, and the Region Dimension.
>
> **[7:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=452)** And I have places where I can add relationships and verified queries. We don't have these yet.
>
> **[7:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=457)** First, I'll make sure that my logical tables are looking good.
>
> **[7:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=460)** Let's start with the Region Dimension.
>
> **[7:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=462)** This looks pretty good.
>
> **[7:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=463)** We have Sales Dimension and State, but it looks like there's narrow here.
>
> **[7:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=467)** The generator misidentified Region ID as a measure in this dimension table.
>
> **[7:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=471)** This is our unique identifier, so I'm going to move it over to Dimensions.
>
> **[8:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=485)** I also have the same issue for Product Dimension, so I'll move that from Measure to Dimension as well.
>
> **[8:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=495)** Now let's make sure the Daily Revenue looks good.
>
> **[8:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=498)** I have five measures: Revenue, Cost of Goods Sold, Forecasted Revenue, Product ID, and Region ID.
>
> **[8:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=507)** Both Product ID and Region ID need to be moved to Dimensions.
>
> **[8:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=523)** Looks pretty good.
>
> **[8:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=524)** Now let's add some relationships so the Semantic Model can understand how these tables are joined together.
>
> **[8:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=531)** Let's add one first for the product.
>
> **[8:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=534)** We will do a left outer many-to-one join from Daily Revenue to Product Dimension, joining on Product ID.
>
> **[9:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=547)** Great. Let's add another one called Region.
>
> **[9:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=551)** This will also be a left outer many-to-one join.
>
> **[9:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=558)** The left table will be Daily Revenue again, but this time we'll join to Region on Region ID and select Add.
>
> **[9:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=569)** Now we have the two relationships we just made, showing the type of joins and the columns that they were joined on.
>
> **[9:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=575)** We can now map the relationship between Product and Region.
>
> **[9:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=578)** With all of that set up, we can play with it on the right side of the pane.
>
> **[9:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=582)** The first thing I'm going to do is select the play button next to Explain the Dataset.
>
> **[9:47](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=587)** In addition to answering questions, Cortex Analyst can also describe the data that we have in front of us.
>
> **[9:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=594)** It tells us the model contains information about revenue, cost of products, and regions.
>
> **[9:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=599)** This tells a user that they can do [[Financial Analysis]] or ask questions like, "What is the total revenue and cost of goods sold for electronic products in North America?"
>
> **[10:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=609)** The questions here are the onboarding questions I mentioned earlier, which can be specified in the Semantic Model.
>
> **[10:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=616)** These are shown to the user when the app launches, so they know what sort of questions that they can ask their data.
>
> **[10:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=622)** Next, I want to ask, "What is the lowest revenue day in California?"
>
> **[10:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=631)** Now Cortex Analyst is interpreting the question and generating the SQL.
>
> **[10:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=636)** Cool. Here's the output and the generated SQL.
>
> **[10:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=640)** The lowest revenue day in California was November 12th, 2023.
>
> **[10:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=645)** I want to add this as a verified query.
>
> **[10:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=648)** Let's call it "Low Revenue California".
>
> **[10:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=651)** I can add this verified query to the onboarding questions if I want.
>
> **[10:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=655)** Now you see it over here with the name and who it was verified by.
>
> **[10:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=659)** If I want to directly edit the YAML, I can select the Edit YAML button and see it right here.
>
> **[11:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=665)** From here I can make edits as needed, just like we are doing in the notebook earlier.
>
> **[11:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=671)** Once I'm done with my edits I have one more thing to do, save the Semantic Model.
>
> **[11:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=676)** Select Semantic Model Viewer to get back when you are done.
>
> **[11:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=679)** (air whooshing) This was a big one.
>
> **[11:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=682)** Now that you have the backend ready for connection, we can start to think about connecting it to a front end.
>
> **[11:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=687)** This was a really important step, and having a well-developed Semantic Model file is what allows Cortex Analyst to do its magic and return accurate, valid SQL, which the LM is going to use to generate its response.
>
> **[11:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=700)** We can't really send this notebook out to people yet.
>
> **[11:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=703)** Notebooks are great for experimentation, but it's hard to ship notebooks to prod.
>
> **[11:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=708)** To really make an impact, we want as many people as possible to use what we built.
>
> **[11:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=713)** We need a front-end UI for users to interact with, and we're going to use Streamlit for that.
>
> **[11:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=718)** To quickly turn the same code we already wrote into a simple [[Python (Programming Language)|Python]]-based UI, let's do it next.
>
> **[12:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/expanding-the-scope-of-the-semantic-model?u=76281980&t=725)** (air whooshing) (bright upbeat music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (10), [[Microsoft Products|Products]] (3), [[Snowflake]] (3), [[Financial Analysis]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (10), yaml (2)
> **CLI Commands:** make (6), find (1), python (1)
> **UI Navigation:** select the (2), go to (1), checkbox (1)
> **Analogies:** just like (2), for example (1)
> **Prerequisites:** set up (2), setup (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Building the Streamlit app](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=0)** - For a moment, imagine that I'm a senior manager that is not very happy with the basic Text2SQL workflow I have.
>
> **[0:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=7)** The workflow doesn't deal well with joins and doesn't return very helpful searches of the structured data in my database.
>
> **[0:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=14)** To fix this, I spent the time to build out a semantic model and a workflow that leverages agentic AI, and it now produces efficient, effective, and accurate returns.
>
> **[0:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=25)** The heavy lifting is done, and let's go the last mile.
>
> **[0:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=30)** The last step I need is to build a front end and deploy the workflow to users.
>
> **[0:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=35)** This will let the users ask questions in natural language without the need for someone like me to craft a [[SQL]] query for them.
>
> **[0:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=43)** No more interruptions and no more constant query-tweaking, [[Real-Time]] answers for everyone.
>
> **[0:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=49)** More time for me to focus on high-value insights that can generate value.
>
> **[0:54](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=54)** This is where I take the generative ability of AI and bridge the gap between builders and users.
>
> **[1:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=60)** This is where all of my effort pays off.
>
> **[1:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=63)** The foundation is built.
>
> **[1:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=64)** It's time to make this interactive so users can start using it.
>
> **[1:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=68)** No one is going to open a notebook and run the backend we've built, even though our notebooks are art and people should really appreciate them, but that's not going to happen.
>
> **[1:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=77)** We need a front end like Streamlit to make user interaction with this workflow painless.
>
> **[1:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=83)** By the end of this video, you'll have switched from the back-end logic to a real-world tool that everyone can use.
>
> **[1:30](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=90)** You'll have built a fully-functional Streamlit interface that brings all of this to life, where users can ask questions of their structured data using Text2SQL and Tag.
>
> **[1:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=100)** No one will need to craft their own SQL query, no one will need to ask you to craft a SQL query either, and no one will need you to interpret their SQL results.
>
> **[1:50](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=110)** Users will be able to ask their questions and get answers through a natural-language conversation directly with an LLM.
>
> **[1:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=118)** All we have to do now is build this into an app that can be deployed to users so that they can start asking their questions.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=124)** We're going to pull in a lot of the same code we wrote in our notebook, but for time's sake, I've already put it together in a new [[Python (Programming Language)|Python]] file for you to use with Streamlit.
>
> **[2:13](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=133)** Get the code from the course repo to follow along if you don't already have it.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=137)** All right, here we go.
>
> **[2:19](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=139)** Remember back to the beginning of this course, when we took a quick look at this app?
>
> **[2:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=144)** Now, we're going to set it up and see how it deals with multi-turn conversations and is able to correctly interpret context from previous conversation turns.
>
> **[2:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=153)** Before we do that, click on the repo URL and navigate to "module_3."
>
> **[2:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=158)** Download the "chat_with_structured_data_app" Python file that has all of the source code needed to build the AI app.
>
> **[2:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=165)** (light whooshing) Next, go to your [[Snowflake]] account and navigate to the "Projects" tab in the left panel and select "Streamlit."
>
> **[2:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=173)** Select the blue button on the upper-right side of the screen which reads "Streamlit App" to create your app.
>
> **[2:59](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=179)** On the pop-up, name your app.
>
> **[3:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=182)** I'm going to call it "chat with structured data app."
>
> **[3:05](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=185)** Choose your app location by selecting the pull-down, choose database, and choose schema, and choose the warehouse as "CORTEX_ANALYST_WH."
>
> **[3:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=194)** (no audio) Streamlit starts with some sample code on the left pane.
>
> **[3:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=204)** If you don't happen to see this, select the edit button on the upper-right to get back to it.
>
> **[3:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=209)** Copy the Python code we downloaded earlier and paste it to replace the existing code into the left pane of the Snowsight UI.
>
> **[3:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=217)** Once we've created the Streamlit app and pasted in our code, we need to install the "snowflake-ml-python" and "tabulate" libraries.
>
> **[3:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=225)** We'll use these in our app.
>
> **[3:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=226)** (no audio) Next, at the top of the file, we'll import some packages we need, notably "streamlit," "[[JSON]]," and "_snowflake."
>
> **[4:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=240)** We'll also import "snowflake get_active_session" from "snowpark context" and complete from "cortex."
>
> **[4:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=246)** We're good to go now.
>
> **[4:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=247)** We'll set the Streamlit page title here, and under that, we'll set the API endpoint and timeout.
>
> **[4:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=254)** These match what we did earlier.
>
> **[4:16](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=256)** Next, we initialize the state.
>
> **[4:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=258)** We check that the keys, messages, and analyst conversation exist in the Streamlit session, and create them as empty lists if not.
>
> **[4:27](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=267)** We use session states here in Streamlit because the script runs from top to bottom each time there's a user interaction, so we want to make sure that these are stored.
>
> **[4:36](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=276)** I want to point out here that we're going to track two slightly different conversation histories in session state.
>
> **[4:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=283)** The first, named "messages," will track the natural-language query, and then, natural-language response produced at the very end, this is what will display in our UI.
>
> **[4:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=293)** The second, called "analyst_conversation," will track the user query and Cortex Analyst's response.
>
> **[5:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=300)** This is what will send a Cortex Analyst to enable multi-turn conversations, then we'll create a wrapper for our Cortex Analyst API call.
>
> **[5:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=309)** Critically, note that the messages we pass in the request body are the full message history stored in our session state.
>
> **[5:15](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=315)** We also pass "semantic_model_file," which points at "CORTEX_ANALYST_DEMO," "REVENUE_TIMESERIES," and the YAML semantic file, this gives Streamlit everything it needs, and set the response to extract, parse, and return to JSON in Python format.
>
> **[5:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=331)** We'll pull the text and SQL from the Cortex Analyst output if it's valid and add some error handling.
>
> **[5:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=337)** Now that we're building a user-facing app, we want to allow for a broader variety of user inputs.
>
> **[5:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=342)** This includes inputs that successfully result in SQL, like we saw in the notebook, but also cases where Cortex Analyst responds by asking the user a follow-up question.
>
> **[5:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=351)** If it asks a follow-up question, the value in our Cortex Analyst response will be text, so we can include that in our parsing.
>
> **[5:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=358)** When SQL is detected, we append this to the statement that we defined earlier with text and statements.
>
> **[6:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=364)** If an error shape is detected, we return the status, error, and the error message, "Could not parse the Cortex Analyst output."
>
> **[6:11](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=371)** Next, we'll build the key method that puts everything together.
>
> **[6:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=374)** This is where we'll keep track of the conversation history with Cortex Analyst in our session state, starting with the user message, then we can take the user message and make a call to Cortex Analyst using our entire conversation history up to this point.
>
> **[6:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=391)** When we get the response from Cortex Analyst, we'll add it to our running conversation history tracked in Streamlit's session state.
>
> **[6:38](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=398)** If Cortex Analyst resulted in only a follow-up question or error, we'd stop here.
>
> **[6:44](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=404)** If we do get SQL, then we can continue on to execute the SQL, and last, we can take the executed SQL results, convert them to "markdown" and pass them to the LLM for our LLM call, "Raising Cortex COMPLETE," and I want to point out two things.
>
> **[7:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=420)** The first is that we're turning guardrails on for this response.
>
> **[7:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=424)** This is just like we did in the notebook.
>
> **[7:06](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=426)** Because we're building an enterprise app, it's better to be safe here.
>
> **[7:09](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=429)** The second it is that we're using streaming to get output [[Tokens]] as soon as they're available to us.
>
> **[7:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=434)** This is great for lowering the perceived latency felt by the user, and they can start reading the response before the full response is generated.
>
> **[7:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=441)** Mechanically, this works by setting "stream=True" and returning a generator, then later, we can pass the generator to a built-in Streamlit method for writing streams.
>
> **[7:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=451)** The last Streamlit utility we'll set up is for displaying messages, this is the function that will render our conversation history we've tracked in the message's session state.
>
> **[7:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=460)** Now, we can set up a display-messages utility to show the entire message history.
>
> **[7:45](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=465)** Note that this is different from the "st session_state" analyst conversation, which is just for Cortex Analyst, and then, we'll add a "Clear Conversation" option for users to start over.
>
> **[7:57](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=477)** This is also helpful when the message history grows and starts to deteriorate the quality of Cortex Analyst's responses.
>
> **[8:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=483)** We add the button for this so users can reset the conversation when this happens.
>
> **[8:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=487)** All right, we've almost made it to the end, so what I'm going to do here is that once I've gotten the user's input, I'll first write the user input right away and add it to the conversation history, then, we call the big function that calls Cortex Analyst, executes SQL, and then, takes the SQL results and uses them to generate a natural-language response.
>
> **[8:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=509)** Remember, this method produces a generator so we can stream the response.
>
> **[8:33](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=513)** Our users are going to love this.
>
> **[8:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=515)** Last, once we finish streaming, we'll take the full response and add it to our tracking of the conversation history.
>
> **[8:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=522)** Let's try out a couple of related back-and-forth queries to test its multi-turn functionality.
>
> **[8:49](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=529)** In module one, we asked what the highest revenue for each sales region was.
>
> **[8:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=533)** Let's do that again.
>
> **[8:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=535)** (no audio)
>
> **[9:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=544)** Again, we see the interpretation of our question, the generated SQL statement, the SQL results, and the response back in natural language, same as last time.
>
> **[9:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=558)** Now, let's try asking a follow-up question and see how the app deals with it.
>
> **[9:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=563)** What if I asked, "What about by product?"
>
> **[9:25](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=565)** (no audio)
>
> **[9:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=574)** So here, I'm asking a lot of the app.
>
> **[9:37](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=577)** I'm expecting the app to know that I'm still talking about revenue in this question, even though I'm not explicitly stating that.
>
> **[9:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=583)** I'm relying on that multi-turn ability and conversation history being retained.
>
> **[9:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=588)** Looking at the reframed question, it looks like it did that.
>
> **[9:51](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=591)** It correctly restated my question, displaying that it knows that I'm still asking about daily revenue, but that I'm now looking for each product year-over-year.
>
> **[10:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=601)** Below, I get the generated SQL statement, which I can check if I have any questions, and I can see the results of that query here, same as before.
>
> **[10:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=610)** Maybe I want to ask a third question, "What about the lowest performing?"
>
> **[10:14](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=614)** Again, I'm relying on the multi-turn aspect of Cortex Analyst to understand what the lowest-performing thing is that I'm referring to.
>
> **[10:22](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=622)** Let's see how it does here.
>
> **[10:24](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=624)** We get our restated question that is interpreted correctly, that I'm looking for the lowest daily revenue for each product year-over-year.
>
> **[10:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=632)** We get the SQL and the SQL results, and I get my natural-language response, which tells me which are the lowest-performing product lines.
>
> **[10:40](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=640)** That's it.
>
> **[10:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=641)** (light whooshing) Well done, you've created your own Text2SQL app and connected it to a Streamlit front end that makes it easy for users to interact with and to get their questions answered all in natural language.
>
> **[10:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=653)** People are really going to love this.
>
> **[10:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=655)** We covered a lot in this video, and I recommend going back and experimenting with repurposing this for your own use cases.
>
> **[11:02](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=662)** This build can be used in a variety of different ways, really a limitless number of ways.
>
> **[11:08](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=668)** You are all ready to get started using this for your own projects.
>
> **[11:12](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=672)** I'm very excited thinking about the unique ways that you'll use this structure in the future.
>
> **[11:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=677)** Well done.
>
> **[11:18](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=678)** This part of your AI journey is complete, but there is lots more to come.
>
> **[11:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=683)** This space is developing so fast that there's always more to learn to remain on the leading edge, but for now, we'll close off this part.
>
> **[11:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=691)** I'll see you in the next video where I'll bid you farewell for now.
>
> **[11:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/building-the-streamlit-app?u=76281980&t=694)** (upbeat electronic music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (17), [[Python (Programming Language)|Python]] (5), [[Snowflake]] (3), [[JSON]] (2), [[Real-Time]] (1)
> **Env Vars:** sql (17), llm (3), api (2), url (1), cortex_analyst_wh (1)
> **CLI Commands:** python (5), make (4)
> **UI Navigation:** navigate to (2), select the (2), click on (1), go to (1)
> **Code Identifiers:** chat_with_structured_data_app (1), get_active_session (1), analyst_conversation (1), semantic_model_file (1), session_state (1)
> **Exercise Files:** download the (1), source code (1), sample code (1)
> **Prerequisites:** set up (2), install (1)
> **Cross-References:** we covered (1), in the next (1)

#### [Congratulations!](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=0)** - You made it to the end.
>
> **[0:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=1)** Congratulations.
>
> **[0:03](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=3)** You've covered a lot in this course, so let's look back at what you did.
>
> **[0:07](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=7)** In the first module, I introduced you to the structure of conversational apps that can be built on structured and [[Unstructured Data]], and I showed you the power that these apps unlock for non-technical users in an organization when they're paired with an LLM.
>
> **[0:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=23)** You learned a lot about the information architecture of conversational data apps and all of the different data sources that they can use.
>
> **[0:31](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=31)** Then, you moved on to the specifics.
>
> **[0:34](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=34)** In module two, you learned how to find answers from unstructured data using RAG and Cortex Search.
>
> **[0:41](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=41)** You learned how the addition of Cortex Search in your RAG increases the accuracy of the LLM's generation and how this can provide easier user access to an organization's unstructured data.
>
> **[0:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=53)** You built a RAG app that answers questions asked in natural language using unstructured data and paired this all with a Streamlit Front End to make an easy user interface that can be deployed.
>
> **[1:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=64)** In this module, you learned how to ask questions of structured data with Cortex Analyst and you built a text to [[SQL]] application paired with table-augmented generation that allows users to ask questions and receive answers in natural language.
>
> **[1:20](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=80)** These answers are backed up by valid and executable SQL of the organization's structured data using table-augmented generation.
>
> **[1:29](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=89)** You finished off this module by building a conversational Streamlit app frontend that uses TAG which ensured a high level of accuracy, so users can more easily question their data with confidence.
>
> **[1:42](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=102)** The initial effort you've made here frees up time that you previously spent manually creating bespoke queries for users, and this effort has also opened up the entire data volume to extract value from.
>
> **[1:55](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=115)** Agentic AI really is a game changer.
>
> **[1:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=118)** All told, you've completed a lot.
>
> **[2:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=120)** Congratulations.
>
> **[2:01](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=121)** You've successfully completed the course.
>
> **[2:04](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=124)** You invested the time and you built apps that talk to structured and unstructured data using RAG and TAG.
>
> **[2:10](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=130)** This opens the door to faster decision making and lower levels of frustration, and this is just the beginning.
>
> **[2:17](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=137)** This space is changing really fast and you need a way to keep up.
>
> **[2:21](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=141)** Thankfully, we can help you.
>
> **[2:23](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=143)** Stay tuned for future courses that you can take to continue to expand your expertise and skillset, so you can stay ahead in the rapidly evolving space.
>
> **[2:32](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=152)** Thank you for taking the time to take this course.
>
> **[2:35](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=155)** As I said at the beginning, I'm very passionate about this space and I love to share what I have learned with others so we can grow the community.
>
> **[2:43](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=163)** The more of us in this space, the better.
>
> **[2:46](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=166)** I hope you got something out of this.
>
> **[2:48](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=168)** Well, actually, I hope you got a lot out of this.
>
> **[2:52](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=172)** Thanks so much.
>
> **[2:53](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=173)** If you enjoyed this course, I would like to recommend the other [[Snowflake]] courses that are available.
>
> **[2:58](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=178)** I'm sure you'll love them.
>
> **[3:00](https://www.linkedin.com/learning/building-generative-ai-apps-to-talk-to-your-data/congratulations?u=76281980&t=180)** (logo whooshing) (light upbeat music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (5), [[SQL]] (2), [[Snowflake]] (1)
> **Env Vars:** rag (4), llm (2), sql (2), tag (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - you (1)
> **Non-Speech:** (light upbeat music) (1)


## Instructor

- [[Snowflake]]
- [[Inc]]

## Skills Covered

- Conversational AI
- Artificial Intelligence (AI)
- Application Development
- Snowflake

## Path Context

### In [[Generative AI Professional Certificate by Snowflake]]
← [[Introduction to Gen AI with Snowflake]] | **3 of 3**

## Part of

- [[Generative AI Professional Certificate by Snowflake]]

## Appears In

- [[Generative AI Professional Certificate by Snowflake]]

## Related Courses

_Courses sharing skills:_

- [[Building a Project with the ChatGPT API]] — Artificial Intelligence (AI), Application Development
- [[Advanced Prompting With Github Copilot]] — Artificial Intelligence (AI), Conversational AI
- [[Introduction to Gen AI with Snowflake]] — Artificial Intelligence (AI), Snowflake
- [[Azure AI Engineering- Speech, Language, and Vision Solutions]] — Artificial Intelligence (AI), Application Development
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)