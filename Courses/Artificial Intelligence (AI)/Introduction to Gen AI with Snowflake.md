---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: introduction-to-gen-ai-with-snowflake
url: "https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake"
duration_minutes: 141
duration: 2h 21m
level: Intermediate
updated: 10/1/2025
learners: 18065
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Snowflake
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEYGQ7U_Hfwng/learning-public-crop_675_1200/B4EZdBvcL5HcAc-/0/1749154645063?e=2147483647&amp;v=beta&amp;t=92K7pyzclH5oMKmmSYH_oi2eYtR8XRJKU_qYpzHsvpA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Generative AI Professional Certificate by Snowflake]]'
prev_courses:
  - '[[Intro To Snowflake For Devs Data Scientists Data Engineers]]'
next_courses:
  - '[[Building Generative AI Apps to Talk to Your Data]]'
path_nav: '[{"path":"Generative AI Professional Certificate by Snowflake","position":2,"total":3,"prev":"Intro To Snowflake For Devs Data Scientists Data Engineers","next":"Building Generative AI Apps to Talk to Your Data"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/snowflake
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20Gen%20AI%20with%20Snowflake.md)

![Introduction to Gen AI with Snowflake](https://media.licdn.com/dms/image/v2/D4E0DAQEYGQ7U_Hfwng/learning-public-crop_675_1200/B4EZdBvcL5HcAc-/0/1749154645063?e=2147483647&amp;v=beta&amp;t=92K7pyzclH5oMKmmSYH_oi2eYtR8XRJKU_qYpzHsvpA)

# Introduction to Gen AI with Snowflake

> Looking for an overview of how to leverage the power of GenAI on Snowflake? This course covers common use cases and the core concepts required to set up your own environment and build AI applications. Learn how to use the Cortex LLM Functions to accomplish many essential AI tasks, as well as fine-tune models to perform specific tasks. This course is an ideal fit for anyone looking to upskill with 

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake) | 2h 21m | Intermediate | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Navigating the generative AI revolution with Snowflake
  - What we’ll cover in this course
- [**1. Introduction to GenAI on Snowflake**](#1-introduction-to-genai-on-snowflake) (2 videos)
  - Preparing your development environment
  - Build a simple AI app in Snowflake
- [**2. Snowflake Cortex’s LLM-Based Functions**](#2-snowflake-cortexs-llm-based-functions) (8 videos)
  - Introduction
  - Introduction to LLM functions and Cortex COMPLETE
  - Task-specific LLM functions and helper functions
  - Using the Cortex COMPLETE function
  - Using task-specific Cortex LLM functions
  - Using helper functions
  - Getting ready to put it all together: Build a Streamlit app
  - Module recap
- [**3. Customize LLM Responses with Cortex Fine-Tuning**](#3-customize-llm-responses-with-cortex-fine-tuning) (9 videos)
  - What is Cortex fine-tuning?
  - Setting up your environment
  - Analyzing customer support tickets
  - Preparing your training data
  - Starting the fine-tuning job
  - Inference using fine-tuned model
  - Streamlit app to autogenerate custom emails and text messages
  - Module recap
  - Continue your generative AI education

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Navigating the generative AI revolution with Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=5)** - Artificial intelligence as a field of study has existed since the 1950s.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=17)** Up until a few years ago, artificial intelligence was associated with computers that could play chess or recognized objects and images.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=26)** The notion of AI writing stories or composing music, engaging in human-like conversations, generating realistic artwork, and even writing functional computer code was still the stuff of science fiction.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=42)** Fast forward to 2022, ChatGPT entered the mainstream, sparking a daily surge of new generative AI capabilities.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=52)** Today's generative AI models can answer our hardest questions.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=57)** They can assist in completing our day-to-day tasks.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=60)** They act as artificial companions and even create art.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=64)** Our new AI capabilities allow us to accomplish more than we ever could without AI.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=72)** How do these generative AI systems work with data?
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=75)** What are their capabilities and limitations, and how do we integrate them into our existing data workflows?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=84)** Hi there, my name is Vino Duraisamy.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=87)** I'm a developer advocate at Snowflake.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=89)** I'm excited to welcome you into this course.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=93)** With almost a decade of experience working with data and AI models, I have witnessed firsthand the transformative power of AI in the field of data.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=104)** The release of ChatGPT in 2022 put powerful AI models in the hands of everyday users through an easy-to-use interface.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=114)** This democratic access to AI technology means that AI is now influencing all aspects of our lives, whether we actively use it or not.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=126)** So understanding AI, even if you don't work with it on a daily basis, became crucial.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=133)** What does this mean for builders who create data products and software applications?
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=139)** As AI emerges as a transformation platform shift, we as builders are at the forefront of a new technological revolution.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=148)** The integration of AI into various aspects of software development is reshaping the industry.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=155)** In order to stay relevant and take advantage of this paradigm shift, we must proactively enhance our AI-related skills and knowledge.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=165)** By investing time to upskill in AI, we all can position ourselves to thrive in the AI-driven future of software and data products development.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=177)** I am passionate about sharing the capabilities and limitations of current AI technologies.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=183)** I'm also a proponent of responsible use of AI and how generative AI can be used across various industries.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=191)** This course is my attempt at the last part, teaching you how to build practical Gen AI applications with Snowflake.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=199)** Now, let's talk a little about who this course is best suited for.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=205)** This course is open to anyone, but it's going to be best suited for data scientists, ML engineers, or AI builders who have had some exposure to data science or machine learning concepts.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=218)** It is also suited for other data practitioners looking to enhance their AI skills.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=225)** You should have some experience with Snowflake, Python, and SQL.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=231)** If you are totally new to Snowflake, we recommend that you take our intro to Snowflake for devs, data scientists, and data engineers course.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=241)** By the end of this course, you will understand the benefits of generative AI and how to achieve them in Snowflake.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=249)** Specifically, you will learn how to use LLM functions as building blocks to develop generative AI applications in Snowflake.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=259)** You will also learn how to fine-tune a foundation model with proprietary data to improve performance and customize the model for specific tasks so it can better take on the challenges you throw at it.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=272)** In short, the course is designed to equip you with practical experience needed to rapidly develop generative AI applications using Snowflake.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/navigating-the-generative-ai-revolution-with-snowflake?u=76281980&t=283)** Next up, let's talk a little bit about what we will cover in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), for. (1), throw (1)
> **Env Vars:** sql (1), llm (1)
> **Non-Speech:** (upbeat music) (2)
> **CLI Commands:** python (1)
> **Tools:** notion (1)
> **Speakers:** - artificial (1)

#### What we’ll cover in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=0)** - Let's take a quick moment to discuss how this course has been designed.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=5)** This course is designed to be practical, so you can get up to speed quickly and feel confident in applying the concepts right away in Snowflake.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=14)** We will get our hands dirty building applications just like those you'll build for your own work.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=20)** Let me tell you about all the cool projects we'll build in this course.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=24)** In this module, we will start with a simple AI application that summarizes customer support calls.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=31)** Think of this as a Hello World of generative AI in Snowflake.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=35)** And then we will build a more complex model that can not only summarize customer issues, but capture their sentiment and translate them to new languages, as well.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=47)** Last, we will go even further to fine-tune a model that can respond to customer issues for us in just the same style we would.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=57)** In the end, we will stitch together an AI application that auto-generates an email response to customer reviews based on their sentiment.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=66)** All of that to say, you will build three different AI projects by the end of this course.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=72)** You will have a solid understanding of Snowflake's AI features and when to use them effectively.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=79)** You will be armed with the skills you need to build real-world generative AI applications with Snowflake.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=87)** Let's get building.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (1)
> **Analogies:** just like (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Introduction to GenAI on Snowflake

> [↑ Back to Table of Contents](#table-of-contents)

#### Preparing your development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=0)** - This course was designed for you to follow along, so we'll build your first AI app on Snowflake together.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=7)** First, you'll need a Snowflake free trial account, and second, you will need a code editor.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=12)** I will be using Snowflake Notebooks.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=15)** Now let's walk through setting these up.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=18)** To start, you'll need a Snowflake account with account admin access.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=22)** If you completed the reading prior to this video, you should already have a free trial account you can use.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=28)** If you haven't, please pause this video and come back after you complete that reading.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=34)** You'll also need a code editor so that you can open code, read it, modify it, run it, and fully immerse yourself in the concepts that we will cover in this course.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=44)** In this course, I will be using Snowflake Notebooks.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=47)** Snowflake Notebooks are integrated into the Snowflake UI and available as part of the free trial account.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=53)** You don't need to install it separately.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=56)** You should pause the video now to log into your Snowflake free trial account.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=60)** The Snowflake UI is called Snowsight, so don't be puzzled when I use Snowsight and Snowflake UI interchangeably.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=68)** Once you've logged into your Snowflake account, you can continue with the rest of the video.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=73)** Let us create our first Snowflake notebook using Snowsight.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=78)** With Snowflake Notebooks, you can write and execute code, visualize results, capture notes, and share insights with other Snowflake users.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=88)** To create a notebook, you need a database and schema to store and manage the notebook.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=94)** You can use an existing database and schema or create new ones.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=99)** To simplify storing and managing Snowflake Notebooks, I recommend you create a dedicated database and schema.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=107)** Say NotebookDB and Notebook_Schema.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=110)** Snowflake Notebook requires a virtual warehouse to run the notebook processes and any Snowflake code.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=118)** I recommend that you start by using an extra small warehouse to minimize credit consumption.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=125)** In Snowsight, navigate to the project tab in the left panel.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=129)** Click on notebooks, on the top right, click on create notebook button.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=134)** See how it asks you to select a database and schema to store the notebook and a warehouse to run it.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=142)** Let's create a database, schema, and a warehouse first.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=145)** Click on cancel.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=147)** Select the data tab from the left panel and navigate to databases.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=152)** On the top right click on the create database button.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=157)** Type in Notebook_DB for database name, and click create.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=163)** You can see the Notebook_DB listed in the databases now.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=167)** Click on the downward arrow next to notebook DB.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=171)** It has two schemas, information schema and public schema.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=175)** Let us now create a new schema for the notebook.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=178)** Click on the create schema button on the top right and type in Notebook_Schema for the schema name, and click create.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=188)** You can click on Notebook_Schema and it shows no object found.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=193)** This is because we haven't created any Snowflake objects under the schema.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=198)** Next up, we need to create a virtual warehouse to run the queries in the notebook.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=204)** Snowflake has warehouses specifically optimized for different compute job.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=209)** Let's navigate to the warehouses available in our account to see what options we have available to us.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=216)** To do this, first click on the admin tab on the left panel and navigate to warehouses.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=223)** You can see there are two warehouses already created in the trial account.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=227)** Compute warehouse is of extra small size.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=230)** This warehouse was created in the free trial account for you.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=234)** This runs any SQL and Snowflake Python code issued by the notebook.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=239)** The next one is system created Streamlit Notebook Warehouse.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=244)** This is a dedicated Snowflake managed warehouse automatically provisioned in each account for running notebooks.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=251)** The warehouse only runs notebook jobs and is owned and managed by Snowflake under the system role.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=258)** You cannot drop or alter this warehouse.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=261)** This is the warehouse specifically optimized for notebook specific jobs.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=267)** Are you able to notice the difference between the two warehouses?
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=271)** Notebook warehouse to run the notebook kernel in the processes, query warehouse to run the SQL and Python code you write in the notebook.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=280)** We just created the database and schema to store the notebook.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=284)** We already have Snowflake managed and owned Notebook warehouse.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=289)** The system created Streamlit notebook warehouse, and the Snowflake created query warehouse, compute warehouse.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=296)** The query warehouse can be resized if you're running a complex query.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=301)** With that, we are now ready to create our first Snowflake notebook.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=306)** In Snowsight, navigate to the projects tab in the left panel.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=310)** Click on notebooks.
>
> **[5:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=312)** On the top right click on the create notebook button.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=316)** Give the notebook a name.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=318)** I will call it my first notebook.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=321)** Select database as Notebook_DB and schema as Notebook_Schema and select Compute Warehouse for the query warehouse.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=329)** And click create.
>
> **[5:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=331)** You have your first Snowflake notebook.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=335)** So far in this video, you have set up your Snowflake free trial account, created your first database in Schema and created your first Snowflake notebook as well.
>
> **[5:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-development-environment?u=76281980&t=346)** When you successfully complete this, you can move on to the next video. (gentle music)

> [!info]- Semantic Content
>
> **UI Navigation:** click on (10), navigate to (5), select the (1)
> **Code Keywords:** let (5), this, (2), continue (1), public (1)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **CLI Commands:** python (2)
> **Env Vars:** sql (2)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** next video (1)
> **Speakers:** - this (1)

#### Build a simple AI app in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=0)** - Are you ready to get building?
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=2)** You have everything you need to build a simple AI app.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=6)** There is, you created your Snowflake free trial account, a database, schema, and your first Snowflake notebook as well.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=14)** In this video, we are going to build a simple AI app with Snowflake.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=19)** This app won't be anything complex or sophisticated, and that is intentional.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=24)** The point of this exercise is for you to immediately get hands-on with Snowflake, as well as get high level exposure to the Snowflake AI features, so you can see how easy it is to get started with AI on Snowflake.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=39)** Okay, here is the scenario.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=42)** You are a data scientist at a ski gear company that has customers across different countries.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=48)** Customers typically call the company to complain about the damage to their ski gear.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=53)** You are tasked with analyzing the customer support call transcripts to identify top customer complaints.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=61)** You have access to raw unstructured call transcript data, and we are going to use natural language processing to process them and find the root cause of each complaint.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=73)** To achieve that, here's what we will do.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=77)** Let us load the data into Snowflake, analyze the call transcripts using Snowflake Cortex LLM functions, and deliver the insights through an AI app.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=88)** What are Cortex LLM functions?
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=91)** We will dive deep into LLM functions later on.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=94)** For now, let's understand at a high level what they are so you can build a mental model of it.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=101)** Cortex LLM functions give you serverless access to perform common LLM tasks such as summarization, translation, and so on in Snowflake.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=113)** Follow along with me to build this simple app.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=117)** Now is a good time to stop the video and make sure you're logged into your Snowflake account.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=122)** Let's begin by loading the data.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=125)** We will retrieve the raw, unstructured customer support call transcripts from AWS S3 and import them into a Snowflake table.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=134)** This dataset contains information such as date of the customer support call, the country and language of the customer, the name and category of the product, type of damage to the product, and the transcript of the conversation between the customer and the customer support representative.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=153)** To build this app, we will need the Snowflake notebook that you should have downloaded when you completed the reading prior to this video.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=161)** If you haven't downloaded the notebook yet, please pause this video and come back after you've downloaded from the reading.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=170)** In Snow site, navigate to the Projects tab in the left panel.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=174)** Click on Notebooks.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=176)** On the top right, click on the dropdown list next to the create notebook button, and select import from IPython notebook option.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=186)** Select the notebook you downloaded from the reading section prior to this video.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=191)** Once the notebook is open, on the top right, click on packages dropdown list.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=198)** You can see that the Streamlet and Python packages are already installed in this notebook.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=203)** Type snowflake-ml-python to install the Snowflake ML Python package.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=208)** Once that is done, you can run the notebook sales one after the other to build your first AI app.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=215)** Let us understand what each cell in this Snowflake notebook does.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=219)** In the first cell, you can see that we are importing pandas and streamed packages to be used later in the code.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=226)** We will also create a notebook session to process the call transcripts in the app.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=231)** Also note this is a Python cell.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=234)** Snowflake notebooks support Python, SQL, and markdown cells.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=239)** It means that you can write SQL and Python and run them all together in the same notebook.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=246)** The raw unstructured transcript data is stored in CSV format in an AWS S3 bucket.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=252)** In cell two, we create a new Snowflake database, virtual warehouse, and schema to store the call transcript data.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=261)** Notice that cell two is a SQL cell and we run SQL commands to create these Snowflake objects.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=268)** You could also do this in Python, of course, if that is your preference.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=272)** Next, in cell three, we create a CSV file format to read CSV files from S3.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=279)** An external stage in Snowflake, pointing to the S3 bucket where the data is stored, and the call transcripts table in Snowflake to load raw transcript data into Snowflake.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=292)** The call transcripts table has various fields to capture the customer complaints of ski gear company.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=298)** It is columns such as data of the customer support call, country and language of the customer, name and category of the product, type of damage to the product, and the transcript of conversation between customer and the customer support representative.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=314)** Once we create the call transcripts table, the copy into statement is used to bulk copy the data from the external stage into the Snowflake table.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=326)** Before we continue further in the notebook, let us verify if the call transcripts data is loaded into the Snowflake table.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=334)** Navigate to the data tab or the cylinder icon on the left panel and click on databases.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=341)** You will see the list of all databases.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=344)** Click on SKI_GEAR_SUPPORT_DB, and then SKI_GEAR_SUPPORT_SCHEMA.
>
> **[5:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=349)** Under tables look for CALL_TRANSCRIPTS and click on it.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=355)** You can see the table definition on the right side.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=358)** If you click on the columns tab, you will see the different columns and their data types as well.
>
> **[6:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=363)** Now, if you click on data preview, you will see a sample of a few rows of data.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=370)** Now let's hop back to the notebook and understand what the rest of the notebook cells are running.
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=376)** Let's go to cell four, which is a sample transcript copied from the dataset for your reference.
>
> **[6:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=382)** In cell five, we use the Snowflake Cortex LLM function named Complete to process the transcript and summarize it.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=391)** First, we import the complete function and create a prompt for instructing the large language model to summarize the call transcript into JSON format.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=401)** You can modify this prompt as well.
>
> **[6:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=403)** This prompt instructs the model to generate an output in JSON format with three key fields, product name, defect, and summary.
>
> **[6:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=413)** Generating the summary in JSON format is helpful because this allows us to use it programmatically.
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=421)** In cell six, we invoke the LAMA 3.2 one billion parameter model and pass on the prompt and call transcript to the complete function.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=431)** Given a prompt, the complete function generates a response using your choice of supported language model.
>
> **[7:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=438)** Since this model is not great at responding to the prompt in a highly accurate manner, can we try other foundation models and see if we get to a clean JSON output?
>
> **[7:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=450)** In cell seven, I will show you how you can change the language model to Mistral 7B instead of LAMA 3.2 by simply changing the argument of the complete function.
>
> **[7:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=462)** It is that simple to experiment with different LLMs using Snowflake Cortex.
>
> **[7:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=468)** The Mistral model outputs only the JSON summary we prompted for.
>
> **[7:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=473)** This is great.
>
> **[7:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=475)** And at last, in cell eight, the code snippet wraps the complete function call into a summarized function in Python.
>
> **[8:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=484)** This is to build a simple UI using streamlet for the summarization app.
>
> **[8:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=490)** When you run this cell, it outputs a big text box and a clickable summarize button below it.
>
> **[8:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=497)** Now copy the sample call transcript from cell four and paste it into the streamlet app text box and click on the summarize button.
>
> **[8:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=507)** You will see how the model summarizes the transcript into JSON format with three keys.
>
> **[8:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=514)** Product name, defect, and summary.
>
> **[8:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=517)** That is it.
>
> **[8:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=519)** With this, you've built your first AI app that summarizes the ski gear company's call transcripts to identify the product name, defect if any, and summary of each call in JSON format.
>
> **[8:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=534)** Two quick pointers before we wrap up.
>
> **[8:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=536)** Firstly, I have a bonus cell in the notebook.
>
> **[8:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=539)** In cell nine, you can see how to invoke the Cortex complete function using Snowflake SQL if you prefer to do it the SQL way.
>
> **[9:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=549)** Secondly, there is an alternative way for you to run the entire snowflake notebook instead of running each cell individually.
>
> **[9:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=558)** You can click the play button that says run all at the top right.
>
> **[9:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=562)** This will run all of the operations from all of your notebook cells in the file starting at the top.
>
> **[9:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=569)** In our case, we ran each cell individually so I can walk through the code snippet in each cell and understand what they do.
>
> **[9:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=577)** Also, cells eight and nine are interactive cells.
>
> **[9:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=581)** You need to input the transcript into the text box for the model to summarize it.
>
> **[9:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=586)** So you should run interactive notebook cells individually as well.
>
> **[9:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=591)** That's it.
>
> **[9:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=592)** With this, we are done with module one.
>
> **[9:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=596)** Let's quickly recap what we did.
>
> **[9:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=599)** First, you loaded the call transcript dataset from AWS S3 bucket into a Snowflake table, and then you used the Snowflake Cortex complete function to prompt the foundational models with instructions to summarize the transcript in JSON format.
>
> **[10:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=617)** Finally, you build a Streamlit UI for this AI application.
>
> **[10:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=622)** This was a great start that shows how easy it can be to get value from your data using generative AI in Snowflake.
>
> **[10:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=631)** There is so much more that we can learn and do.
>
> **[10:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=635)** In the next module, we will dive deeper into Cortex LLM functions, using them to extract info from unstructured data.
>
> **[10:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/build-a-simple-ai-app-in-snowflake?u=76281980&t=643)** You will stitch the functions together into a meaningful architecture to get to a structured data output as well.

> [!info]- Semantic Content
>
> **Env Vars:** json (8), llm (7), sql (6), aws (3), csv (3)
> **Code Keywords:** function (9), let (8), this, (2), module (2), continue (1)
> **UI Navigation:** click on (9), navigate to (2), dropdown (2), select the (1), go to (1)
> **CLI Commands:** python (8), aws (3), find (1), make (1)
> **Definitions:** is a  (4), means that (1), is an  (1)
> **Analogies:** such as (3)
> **Versions:** 3.2 (2)
> **Cross-References:** later in (1), in the next (1)


### 2. Snowflake Cortex’s LLM-Based Functions

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=5)** - Welcome back.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=12)** Now, that we have gotten our first taste of how we can use generative AI in Snowflake, let's take a closer look at using Cortex LLM functions.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=22)** As you might remember from before, we used the Snowflake Cortex COMPLETE function to prompt the foundation models with instructions to summarize the transcript in JSON format.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=34)** In this module, we will look at what LLM functions are and how we can use them to accomplish complex natural language tasks.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=42)** First, we will explore how to use complete with custom prompts to run a natural language task.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=48)** Next, we will learn more about the out of the box task-specific functions.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=53)** These will include translation, sentiment analysis, summarization, and text classification.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=61)** We will also look at how to use two of the helper functions that come with Cortex, COUNT_TOKENS and TRY_COMPLETE, and then we will learn about the role-based access controls or RBAC.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=73)** You need to use these functions.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=76)** And lastly, we will build a simple Streamlit application where we will analyze call transcripts using Snowflake Cortex.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=84)** We will use Cortex LLM functions and Streamlit to bring this all together.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction?u=76281980&t=90)** Let's get into it.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), complete (1), json (1), count_tokens (1), try_complete (1)
> **Code Keywords:** let (2), function (1), module (1)
> **Non-Speech:** (upbeat music) (2)
> **Speakers:** - welcome (1)

#### Introduction to LLM functions and Cortex COMPLETE
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=0)** - Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=2)** In the next couple of videos, we are going to learn about what LLM functions are before we get into using them in our notebooks.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=10)** It is always good to understand the tools before we use them.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=13)** Let's start.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=15)** Large language models are very powerful tools that can accomplish many tasks.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=21)** These tools can be further specialized from their foundational form through the process of fine tuning, which we will discuss in the next module.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=29)** However, LLMs are just models.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=32)** They do not do anything on their own.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=34)** We create value and gain insight by invoking the LLM to generate a response.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=40)** This is where the Snowflake Cortex comes in.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=43)** Snowflake Cortex allows you to access some of the most capable enterprise-grade models, such as the Llama, Mistral, Reka, and Claude family of models.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=55)** LLM functions are easy to use building blocks for Gen AI apps, where the functions can be called to enable actions within the Snowflake environment.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=64)** There are three types of LLM functions.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=66)** The COMPLETE function, a set of task-specific functions, and some helper functions.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=72)** Let's envision a situation where you would use LLM functions.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=77)** Imagine that it is Monday and you have thousands of customer feedback reports and your task as a data scientist is to analyze the customer sentiments from the feedback.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=89)** It's Tuesday and you have millions of customer service requests that are received in different languages.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=95)** You want to automate the analysis of service requests in a way that simple, low-severity requests are sent to the chat bot to respond, more complex, high-severity issues are sent to the customer support team to be handled.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=111)** It's Wednesday and you have millions of PDFs that you need to extract data from.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=117)** Busy week, I know.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=120)** This is where Cortex LLM functions can help.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=123)** Let's dive in so you can see how easy using these functions can be.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=129)** Like many operations in Snowflake, LLM functions can be called both in SQL and Python.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=136)** It is worth noting that when called in SQL, the functions reach Cortex endpoint that is optimized for batch processing as it may require some warmup time.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=147)** When Cortex LLMs are called in Python, on the other hand, they will hit an endpoint specifically optimized for low latency.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=155)** In this video and the next, we are going to look at all three types of functions, and we'll also discuss the relevant role-based access controls.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=165)** Before we see these functions in action, let us set up our Snowflake environment and download the necessary Snowflake notebooks.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=173)** This is the time to pause the video and log into your Snowflake account if you haven't already.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=180)** (screen whooshing) Once you're logged into Snowflake account, navigate to the companion Git repo for this course.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=187)** You can find the link to the Git repo in the reading section prior to this video.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=191)** In the Git Repo, under module two, you will find two iPython notebooks.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=196)** Download both the notebooks.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=200)** Now switch to your Snowflake account.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=203)** Navigate to projects on the left panel, select Notebooks.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=208)** Move to the top right and click on the down arrow.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=211)** Select import iPython notebook file and upload "Intro to LLM Functions Notebook."
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=219)** Select SKI-GEAR-SUPPORT-DATABASE and SKI-GEAR-SUPPORT-SCHEMA for the notebook location and COMPUTE-WAREHOUSE for the warehouse.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=229)** Next, let's load them using LLM functions notebook, following the same steps.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=235)** Import the iPython notebook file, select the notebook in your local, and select the SKI-GEAR-SUPPORT-DB and SKI-GEAR-SUPPORT-SCHEMA for notebook location, COMPUTE-WAREHOUSE for the warehouse.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=252)** Fantastic.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=253)** Now we have everything we need to run through the rest of this module.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=258)** Click on the notebook titled, "Intro to LLM Functions," and select the start button at the top to start the notebook session.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=266)** It takes a couple of seconds.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=268)** Click on Packages at the top right and search for Snowflake package to install.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=274)** It takes a couple of seconds as well.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=277)** We also need another package.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=279)** Look for Snowflake ML Python and install that as well.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=290)** First, we import the active Snowpark session, and then set the context for the rest of the notebook cells to use the SKI-GEAR-SUPPORT-DB and SKI-GEAR=SUPPORT-SCHEMA.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=301)** Let's start by looking at Complete.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=304)** Snowflake Cortex complete returns the completion from one of the supported models, given a prompt and the options that we pass to it.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=314)** We use Llama 3.1 405 billion parameter model on this function with a sample question to invoke Complete.
>
> **[5:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=324)** The results are great.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=326)** (screen whooshing) But before we get too far ahead of ourselves, let's talk about all the different LLMs available in this snowflake environment.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=335)** Cortex Complete in Snowflake can use a variety of pre-trained models of different sizes, which are tailored to meet diverse business needs.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=345)** These models range from the single digit billions of parameters to larger models such as Mr. Large, Llama 3.1, the 405 billion parameter model, and Anthropic Claude's 3.5 Sonnet.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=358)** The larger ones can be more accurate for more complex tasks and often come with larger context windows and are great for content generation and answering questions with large sets of context.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=371)** Alternatively, the smaller ones typically offer faster speeds and lower inference cost, which is great for time-sensitive tasks such as external facing chat apps or constrained simpler tasks like LLM routing.
>
> **[6:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=387)** Pretty impressive.
>
> **[6:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=389)** Nice work.
>
> **[6:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=390)** Next, we will learn about the second half of the LLM function family: Task-specific and helper functions.
>
> **[6:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=397)** Bye-bye, Complete.
>
> **[6:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=398)** We will see you later when we put you to use.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=401)** Hello translation sentiment analysis summarization and text classification, and hello, helper functions, we didn't forget to you.
>
> **[6:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=409)** See you soon.
>
> **[6:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/introduction-to-llm-functions-and-cortex-complete?u=76281980&t=410)** (screen whooshing)

> [!info]- Semantic Content
>
> **Env Vars:** llm (12), ski (6), gear (6), support (6), schema (3)
> **Code Keywords:** let (7), module (3), function (3), from. (1), require (1)
> **UI Navigation:** click on (3), select the (3), navigate to (2), switch to (1)
> **CLI Commands:** python (3), git (3), find (2)
> **Analogies:** such as (3), imagine (1)
> **Code Identifiers:** ipython (3)
> **Versions:** 3.1 (2), 3.5 (1)
> **Prerequisites:** install (2), set up (1)

#### Task-specific LLM functions and helper functions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=1)** That was the complete function in the last video, which we discussed completely, and now we will look at the task specific functions available to us.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=12)** These are purpose built and handle common tasks such as translation, sentiment analysis, summarization, and text classification without the need for prompting or specifying LLMs.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=25)** It's a good time to pause the video and log into your Snowflake account if you're not already logged in.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=34)** Navigate to projects on the left panel, select notebooks and click on intro to LLM Functions Notebook.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=43)** We had already run until intro to complete.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=47)** Look at the cells below intro to task specific functions.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=52)** First, let's look at the translate function.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=55)** Translate is a helpful function that as the name implies, allows us to easily translate strings or columns in batch from one language to another.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=66)** Let's take a look at how we do this in Python.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=69)** When we use Cortex Translate, we pass the text or table column source language and target language to the function, and if we don't know the source language ahead of time, it can also be auto detected by leaving the source language as an empty string.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=87)** Cortex Translate currently supports 11 languages, but it is always good to check the documentation to see which languages are supported as well as which new ones are added over time.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=100)** Another task specific function that we can use in Cortex is sentiment.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=105)** Sentiment allows us to do aspect based sentiment classification, which analyzes a text string or column and returns a value between a negative one to one depending on how negative or positive the sentiment of the text is.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=121)** Same as all the other LLM functions, we can run this on a single string or an entire column in a table.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=128)** We'll show that here.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=142)** Next is the summarize function.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=145)** Summarize automatically generates a concise, high level summary of a large body of text.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=151)** It relies on a pre-trained LLM that understands general language patterns and provides a neutral high level summary.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=159)** The last task specific function we will look at is classify text.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=164)** Classify text classifies freeform text into categories that you provide.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=170)** All we need to do is pass the text or column of text we want classified and the list of categories that we want classify to use.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=180)** It allows us to do zero shot classification into an arbitrary set of labels.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=185)** All we need to do is pass the text or column of text and a list of possible classes.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=191)** There is no need to train a predictor like in classical NLP, on even craft a custom prompt.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=199)** Here is what the basic structure looks like in both Python and SQL.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=204)** In the SQL example here, we see how this is used to classify an entire table of support call transcripts.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=212)** In this example, we are calling the function and specifying the input column transcript from the table call transcripts.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=219)** We are also specifying the two categories that we want the classify function to use.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=240)** To improve text classification performance even further, we can include descriptions and examples for each label along with the description for the overall task if we like.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=252)** While text classification is a useful task on its own, it can also serve as a powerful starting point for LLM applications.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=260)** One common way to do this is routing.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=263)** Classify text can categorize the user intent based on the query and choose whether to send the query to a search system, a function call, or even between language models of varying sizes and capabilities.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=276)** Now in Python, we can see a simple illustration of how classify text is used to classify the user's intent to be used for downstream routing.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=287)** Here we want to classify each query as either looking for how to or recommendations.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=295)** The classified intent would then determine the next step in the LLM chain.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=301)** We will see these functions in more detail in a later video.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=305)** As we've seen, complete and task specific LLM functions are quite powerful.
>
> **[5:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=311)** It is worth noting that as we saw, they can be run either on a single text string or on an entire column of table in batch.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=321)** Next, we will move on to talk about helper functions that we can use from prototyping an LLM application to promoting it to production.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=330)** Cortex offers two additional functions that can help as we build applications for production use.
>
> **[5:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=337)** Try complete and count tokens.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=340)** The try complete function helps with handling failures gracefully.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=345)** Conceptually, it is similar to using a try accept block in Python.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=351)** It functions the same as complete if the operation is successful, but returns null rather than an error if the operation fails.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=360)** This is particularly useful for cases when the input text we pass on to an LLM is longer than the context window it supports.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=368)** These kind of failures while building AI applications can be dealt with gracefully by using try complete.
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=376)** Very helpful.
>
> **[6:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=378)** Now let's talk about the helper function count tokens.
>
> **[6:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=382)** The count tokens function calculates the total number of tokens in a prompt that is going to be used by complete or the input text of a task specific function.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=393)** This is important because each model uses a slightly different tokenizer under the hood resulting in different token counts.
>
> **[6:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=402)** A token is the smallest unit of text processed by the Snowflake Cortex LLM functions.
>
> **[6:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=408)** This is the basic unit of process data when working with language models.
>
> **[6:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=413)** Each token is approximately equal to four characters and can be either a word, a single character or part of the word.
>
> **[7:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=422)** To better understand the Snowflake credits used based on the token count, refer to the reading prior to this video.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=429)** Look for the Snowflake service consumption table for each function's cost in credits per million tokens.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=437)** Now that we have covered the three types of LLM functions, Cortex complete, task specific and the helper functions, let's move on to talk about the access controls for them.
>
> **[7:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=449)** If you took our introductory course or have prior experience with Snowflake, you will be familiar with role-based access controls.
>
> **[7:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=456)** It is a mechanism for restricting access of data and apps to users based on their role.
>
> **[7:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=463)** Within Snowflake Cortex, the Cortex user database role ensures that only the authorized users can use Cortex LLM functions or other Cortex features.
>
> **[7:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=474)** By default, the Cortex user role is granted to the public role.
>
> **[7:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=479)** This allows all users on a Snowflake account to use the Cortex LLM functions.
>
> **[8:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=484)** However, an account admin can revoke the Cortex user role from the public role to restrict it as needed.
>
> **[8:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=492)** The Cortex user role defines a set of access permissions that can be granted to others that will be using our applications.
>
> **[8:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=500)** This makes sure that without the Cortex user role, one cannot get access to Cortex capabilities.
>
> **[8:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=508)** In this video, we've gone over a lot.
>
> **[8:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=511)** Let's remind ourselves about what we looked at.
>
> **[8:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=515)** We looked at the three types of LLM functions available with Cortex.
>
> **[8:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=519)** We started by looking at how Cortex Complete can run inference on models like Claude 3.5 Sonnet to perform text generation.
>
> **[8:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=528)** From there, we looked at how to use the task specific LLM functions for translation, sentiment analysis, text classification and summarization to extract useful insights from our data and then we looked at the helper functions, try complete and count tokens.
>
> **[9:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=548)** Finally, we looked at how we can control access to these functions using the Cortex user database role.
>
> **[9:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=555)** Now that we have looked at all the LLM functions, we are ready to roll up our sleeves and get some hands-on experience with them.
>
> **[9:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=564)** In the next video, we are going to dig in and start using Cortex Complete.
>
> **[9:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/task-specific-llm-functions-helper-functions?u=76281980&t=568)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (5), pass (4), public (2), default, (1)
> **Env Vars:** llm (15), sql (2), nlp (1)
> **Cross-References:** in the next (2), in the last (1), we discussed (1), as we saw (1)
> **CLI Commands:** python (4)
> **Definitions:** is a  (3)
> **UI Navigation:** navigate to (1), click on (1)
> **Versions:** 3.5 (1)
> **Documentation:** the documentation (1)

#### Using the Cortex COMPLETE function
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=0)** - Hello again.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=2)** In this video, we will use Cortex Complete function to build a multi turn chat application.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=8)** Let's start. First though, sign into your Snowflake account if you're not already signed in.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=14)** (graphic swoosh) Navigate to Projects on the left panel, select Notebooks.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=20)** Click on the notebook titled USING_LLM_FUNCTIONS, and select the Start button at the top to start the notebook session.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=29)** It takes a couple of seconds.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=32)** Click on Packages at the top right and search for Snowflake package to install.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=38)** It takes a couple of seconds as well.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=40)** We also need another package.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=42)** Look for Snowflake ML Python and install that as well.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=53)** First, we import the active snowpark session and then set the context for the rest of the notebook cells to use the SKI_GEAR_SUPPORT_DB and SKI_GEAR_SUPPORT_SCHEMA.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=65)** Look at the code below using Complete.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=68)** Here we are using Python to call the Complete function.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=72)** As we saw before Complete can be used with different models.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=76)** In this case, we are using the Llama 3.1405 billion parameter model for its multilingual capability.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=84)** If your application needs to interact with a wide range of languages, say French, German, Spanish, Italian, Portuguese, Arabic, Hindi, Russian, Chinese, Japanese, or Korean, you could use Mistral Large 2 or the Llama 3.1405 Billion model.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=109)** If you're building a summarization, extraction, or question and answer use case involving lengthy documents or an extremely large knowledge base, it is useful to turn to models with larger context windows, such as Claude 3.5 Sonnet, which offers a context window size of 200,000 tokens, or Jamba Instruct, which boasts an even larger window of 256,000 tokens.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=136)** For use cases requiring low latency or high throughput that only need low to moderate reasoning, small models below 10 billion parameter size can be the ideal choice, such as the Llama 3.2 1 billion and 3 billion parameter models.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=153)** Not all models are available in every region, but for this course, we are working in AWS us-west-2, Oregon region, which supports the widest set of models.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=164)** Back to the arguments used by Complete.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=167)** Model is a single string that represents the model Complete will use.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=173)** The prompt or history can be either a column of prompts or a single string that are sent to the LLM.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=179)** Here we are asking Llama how Snowflakes get their unique patterns.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=185)** Another thing to note is Complete is stateless.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=188)** It does not retain any state from one call to the next.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=192)** In order to reference all the previous model responses and prompts, we must pass all previous inputs as part of the prompt or history to provide a stateful conversational experience.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=205)** These must be passed in chronological order for proper reference.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=210)** This allows for more complex multi turn conversations that retain memory of previous stages of the conversation.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=218)** Please note that with each iteration, more tokens are consumed and this can accumulate over larger conversations.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=226)** It turns out that talk is not in fact cheap.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=230)** Now let's look at the system and user roles in Complete.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=234)** When we call Cortex Complete, we must ensure that each role key has an associated content key.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=241)** The two roles we look at here are the system and user.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=245)** The system prompt is an initial plain English prompt to the language model to provide it with background information and instructions for a response style.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=255)** For example, here we instruct the model to answer programming questions in the style of a rancher.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=261)** If we provide a system prompt, there can only be one and it must be the first message in the array of messages.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=268)** Then the user prompt contains the meat of the request for which we expect a response from the model.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=275)** For example, here we ask the model about the role of semicolons in JavaScript.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=280)** You will notice that we've also added additional parameters to our call to Complete using options.
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=288)** For now, we will start with just setting guardrails to true, which activates Cortex Guard.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=294)** Once you activate Cortex Guard, language model responses associated with harmful content, such as violent crimes, hate, sexual content, self-harm, and others will be automatically filtered out, and the model will return a response filtered by Cortex Guard message.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=313)** Under the hood, Cortex Guard, currently powered by Llama Guard 2 from Meta, works by evaluating the responses of a language model before that output is returned to the application.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=325)** You can see how Cortex Guard evaluates and filters out responses.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=329)** Now that we are utilizing options, we need to know two key differences.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=334)** First, when we utilize options, the prompt argument must be an array of objects representing a conversation in chronological order where each object contains a role and content key.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=347)** We will cover more about how to do this later.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=351)** Second, when options are present, we will get a full response object from Complete.
>
> **[5:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=357)** It now returns the JSON object from the LLM that contains the response to the prompt, information about the model used, and the number of tokens used at each step.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=368)** Next, let's take a look at how Complete can be used for multi turn conversations in chat.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=375)** We mentioned before that although Complete is stateless, we can choose to pass in the conversation history, which will enable multi turn conversations.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=384)** Let's look at the messages with history list.
>
> **[6:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=387)** First, we start off with a system prompt.
>
> **[6:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=390)** Then we define a user prompt.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=393)** That is just the question the user asked the model.
>
> **[6:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=396)** Next comes the model's response captured under the assistant role.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=401)** This way we could keep appending our question to the model and its response in messages with history variable, and recursively call the Complete function to build a multi turn chat application.
>
> **[6:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=414)** For this multi turn chat experience, it would be really great if the user could read the output text similarly to how they would in a real conversation word by word, or in LLM speak, token by token.
>
> **[7:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=428)** Another word for this is streaming.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=431)** We can enable streaming with a keyword argument, stream, by setting it equal to true.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=437)** When enabled a generator function is returned, that provides the streaming output as it is received.
>
> **[7:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=444)** Each update is a string containing the new text content since the previous update.
>
> **[7:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=449)** Doing so, dramatically reduces the perceived latency to the user, because each token, as soon as it is generated, appears on the output screen rather than waiting for the entire response to be generated.
>
> **[7:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=463)** This can make the user experience seem more interactive and responsive when it is utilized in the user facing applications that our models support.
>
> **[7:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=473)** Please note that streaming is enabled for Python only, not SQL.
>
> **[7:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=479)** The reason for this is that SQL, as mentioned before, is meant and optimized for batch processing scenarios where latency of an individual response is not a concern.
>
> **[8:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=491)** When we want a chat bot to feel more creative and interesting, we can turn to my favorite parameters, temperature and top_p.
>
> **[8:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=501)** Temperature is a value from 0 to 1 that we pass to the model to control the randomness of the output that is returned to us.
>
> **[8:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=510)** More technically, a low temperature makes the model more confident in its top choices.
>
> **[8:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=516)** Let's try it by adding a high temperature to our same chat with the Western rancher about JavaScript.
>
> **[8:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=528)** Ooh, the response is a bit more fun.
>
> **[8:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=531)** As an alternative to using temperature, we can also use top_p.
>
> **[8:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=536)** Top_p achieves a similar result, but in a different way.
>
> **[9:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=540)** Top_p works by restricting the generated tokens to tokens that fit in accumulative distribution below the threshold you set.
>
> **[9:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=549)** For example, if top_p is equal to 0.3, only tokens comprising the 30% probability mass would be considered.
>
> **[9:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=558)** Moving from chat experiences to more task-based actions, it can be especially useful to constrain the number of tokens an LLM can generate.
>
> **[9:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=569)** If we want to limit the number of output tokens, so we do not get an entire book as an output, we can use max_tokens, which sets a limit on the maximum number of tokens the model can generate in its response.
>
> **[9:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=583)** This can be very useful for us where we need to constrain the output, but we should be aware that small token values may result in truncated responses.
>
> **[9:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=593)** An example of this would be where you want the LLM to only respond with either a number from 0 to 5 or only the word yes or no.
>
> **[10:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=602)** In this case, we can limit the response by setting the max_tokens to 1 so that a longer response would not be returned.
>
> **[10:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=610)** In many cases, when we are asking the LLM to perform constrained tasks like this, we will want to do so in batch.
>
> **[10:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=618)** The easiest way to use LLMs in a batch is through SQL.
>
> **[10:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=623)** In this example, we use Complete to critique an entire column of transcripts in a Snowflake table called CALL_TRANSCRIPTS.
>
> **[10:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=632)** Now, let's talk about the output of Complete by clicking on the first row in our output to see it closely.
>
> **[10:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=641)** As we said before, when we specify options, Complete will return a JSON string, which will contain the following keys: choices, created, model, and usage.
>
> **[10:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=654)** The choices key in options returns an array of the model's responses.
>
> **[10:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=659)** Each of these are an object that contains the key.
>
> **[11:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=662)** Messages holds the response that the model generated based on the last prompt passed to it.
>
> **[11:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=669)** Currently, this only holds one response.
>
> **[11:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=672)** We also see a UNIX timestamp of when the response was generated and the model that generated it.
>
> **[11:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=679)** It also contains three sub keys under usage, completion_tokens, prompt_tokens, and total_tokens used for this completion.
>
> **[11:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=687)** (graphic swoosh) We saw earlier that Cortex Complete supports a number of foundation models such as Llama, Gemma, Mistral, Reka, and Anthropic family of models.
>
> **[11:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=699)** However, what is the right model to use for your use case and requirement?
>
> **[11:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=705)** To first learn the art of the possible, we often want to start experimentation with the best large models.
>
> **[11:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=712)** This helps us understand what our capability constraint is.
>
> **[11:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=716)** Then to optimize against both our latency and compute budget, we want to scale down and find the smallest model that can successfully do what we need to do.
>
> **[12:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=728)** Smaller models can be really useful for simpler, more constrained tasks that don't require a large amount of context.
>
> **[12:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=736)** Only when we need to perform more complex tasks or handle large amount of context, do we need to turn to state-of-the-art models with hundreds of billions of parameters.
>
> **[12:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=747)** If we choose a model that has too small of a context window, then any inputs that exceeds the token number will result in a context overflow.
>
> **[12:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=756)** If we really are bumping up against a tight budget of time and cost, but need to complete a more complex task, stay tuned.
>
> **[12:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=765)** (graphic swoosh) Phew. That was a little long.
>
> **[12:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=768)** Let's review what we covered.
>
> **[12:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=771)** We looked at Cortex Complete, which generates a response given a prompt and choice of LLM.
>
> **[12:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=778)** We looked at how we can use a series of options to guide the output of this model and how to pass prompts to the model as well.
>
> **[13:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=786)** We learned how Complete is stateless by default and how we can build stateful applications that reference previous model responses by using system, user, and assistant roles.
>
> **[13:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=800)** We talked about what to consider when choosing models for Complete to use.
>
> **[13:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=806)** We looked at options such as max_tokens, temperature, and top_p.
>
> **[13:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=811)** Lastly, we looked at cost considerations when developing and testing in the Cortex environment and all the options available for use.
>
> **[13:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=821)** In the next video, we will get some hands-on experience using the task specific functions that Cortex offers.
>
> **[13:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-the-cortex-complete-function?u=76281980&t=829)** (graphic swoosh)

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4), pass (4), case, (2), self (1)
> **Env Vars:** llm (7), sql (3), json (2), using_llm_functions (1), ski_gear_support_db (1)
> **Analogies:** such as (5), for example (3)
> **CLI Commands:** python (3), aws (1), make (1), find (1)
> **Code Identifiers:** max_tokens (3), completion_tokens (1), prompt_tokens (1), total_tokens (1)
> **Versions:** 3.1405 (2), 3.5 (1), 3.2 (1), 0.3 (1)
> **Cross-References:** as we saw (1), we mentioned (1), we covered (1), we talked about (1), in the next (1)
> **Definitions:** is a  (4), is an  (1)

#### Using task-specific Cortex LLM functions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=1)** - Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=2)** Just a quick update of where we are in this module.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=5)** So we introduced three types of LLM functions available: complete, task-specific, and helper functions.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=13)** We reviewed each of these types at a high level.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=16)** And in the previous video, we dove deeper into complete with hands-on work.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=21)** Now in this video, we will get some hands-on experience with the four task-specific functions: Translate, sentiment, summarize, and classify text.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=31)** Note that as the tasks AI is used for continue to mature, we will continue to pull out common tasks and define new task-specific functions in the same way we have already done.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=44)** So keep an eye out on the docs for the latest set of functions available.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=48)** Let's get started with translate.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=51)** We already learned how the translate function allows us to easily translate text from one supported language to another.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=59)** It helps process an entire column of text strings that are in different languages into a desired target language for use.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=67)** Before we dive into using the function, this is the time to pause the video and log into your Snowflake account, if you haven't already.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=78)** Navigate to projects on the left panel and select notebooks.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=82)** Click on the notebook titled using LLM functions and select the start button at the top to start the notebook session.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=91)** It takes a couple of seconds.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=93)** We've already run the first half of the notebook.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=96)** Scroll down all the way to task-specific functions.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=100)** Let's look at how we call translate in Python.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=104)** We already know that the call transcripts are available in various languages such as German, French, and so on.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=111)** In this first example, we filter the German transcripts from the table and do a simple translation to English, just so we can make sense of it.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=120)** I don't know German, at least not yet anyway.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=124)** We pass the transcript column from our dataset to translate function.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=128)** You can see that the entire conversation is translated to English.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=132)** Fantastic.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=133)** In the next cell, let's look at an example in SQL.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=137)** Here, let's try to convert all the transcripts in different languages to English.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=142)** Since we cannot pass multiple languages as parameters to the function, let's use an empty string to let the function infer the source language by itself.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=152)** In a few seconds, we have all the transcripts from our dataset translated into English.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=158)** How powerful.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=159)** Now that we have translated the data, we can start extracting value from it with sentiment analysis.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=166)** As we saw before, the sentiment function looks at a column of strings and read each string's sentiment on a scale of negative one to one.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=176)** Once the sentiment is determined, it can also be used downstream, perhaps as a feature for a machine learning model or to power a rules engine.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=185)** This is a very cost-effective function.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=187)** They are only built for our use of input tokens and not output tokens.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=192)** Let's look at how we do this in Python.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=196)** When we run the sentiment in a Python cell, it returns float values with one representing most positive and the negative one representing the most negative sentiment.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=206)** Let's look at a call transcript and see if it has done a good job.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=210)** We have the results of the sentiment function here.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=213)** Let me try to find a more extreme example.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=216)** Hmm.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=217)** Let's look at the transcript.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=220)** What does it look like?
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=223)** Oh, okay.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=224)** So the customer does have a proper resolution to the issue they've had, and that explains why they have a higher or a positive sentiment for this entire interaction.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=233)** Great.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=235)** You can also run the same using SQL as well.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=238)** The summarize function, as we learned before, is ideal for distilling large volumes of text to generate quick summaries of meeting notes.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=247)** This can also be applied to capture the main points of call transcripts, allowing customer service to be more actionable.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=256)** The function takes one input parameter, text, that we would like Cortex to summarize.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=262)** It'll return the summary as a string.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=266)** Let's look at how we do this in Python.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=268)** When we run the code snippet, it has summarized the text well.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=272)** Great, but the real question is: Can we summarize an entire column of strings from a table using SQL?
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=281)** We passed the EN transcript column from the call transcripts table as input to the function.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=287)** In a couple of seconds, we were able to summarize long form call transcripts into a couple of sentences.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=295)** What a time saver for our support teams.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=298)** Being able to pull out summarized insights and action items from long strings of text is invaluable.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=305)** Next, we will learn how to use classified text to take larger data sets and bucket them into different categories.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=313)** Classify text gives us an easy way to classify large volumes of text into target classes that you provide.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=321)** All we need to do is pass the text, or column of text we want classified, and the list of categories that we want the function to use.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=330)** When we run the next cell, we see that the model correctly identifies this query as looking for recommendation and returns the label recommendations as a classification.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=341)** You can run the same function using SQL as well.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=344)** For the SQL function, let us pass the EN transcript column from the call transcripts table as input.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=351)** Let us look at an example transcript and see if it was classified right.
>
> **[5:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=356)** It is interesting, we have an unclassified label.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=359)** And looking at the transcript, it is neither missing price tag or not a washed out color or a broken zipper.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=367)** That makes sense.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=368)** So let's look at another example.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=371)** It seems like there was a problem about a jacket and the defective zippers.
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=379)** So the model did a good job by classifying it into broken zipper.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=383)** Fantastic.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=384)** (air swooshes) Classify text can now classify every call transcript into one of these categories or classes we defined.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=393)** How cool.
>
> **[6:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=394)** That wasn't so hard.
>
> **[6:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=396)** In this video, we got some hands-on experience using the task-specific cortex functions: translation, sentiment analysis, summarization, and classify text.
>
> **[6:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=408)** They save us a lot of time because we don't have to do prompt engineering or try to decide which model would be best for each case.
>
> **[6:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=416)** The functions do their job right out of the box.
>
> **[7:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=420)** In the next video, we will learn how to use helper functions.
>
> **[7:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-task-specific-cortex-llm-functions?u=76281980&t=424)** They can be useful, both in early prototyping and when our app reaches production.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (14), pass (4), continue (2), module (1)
> **Env Vars:** sql (5), llm (2)
> **CLI Commands:** python (4), make (1), find (1)
> **Cross-References:** in the next (2), previous video (1), as we saw (1)
> **UI Navigation:** navigate to (1), click on (1), select the (1), scroll down (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Using helper functions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=0)** - Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=2)** In this video, we are going to learn how to use the third type of LLM functions in Snowflake Cortex, the helper functions, and get some practical experience using them.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=13)** Helper functions are purpose-built and managed functions that can help us estimate inference costs and also reduce cases of failures when running other LLM functions.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=24)** As we noted before, there are two helper functions, COUNT_TOKENS and TRY_COMPLETE.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=30)** As the name implies, COUNT_TOKENS returns the number of tokens in a given text string or prompt.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=36)** In addition to the text string or prompt, it takes the name of the model, in the case of COMPLETE, or the name of the function, in the case of task specific LLM functions.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=47)** This is required because each model or function may use a different tokenizer and therefore result in a different number of tokens for the same text string.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=57)** COUNT_TOKENS can be very useful when we are not sure if the context passed to the LLM will exceed its context window limit.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=65)** And for big projects, it can be helpful for estimating token costs by counting the number of tokens for a small, but representative, sample of queries and then extrapolating to the number of tokens that will be used in the entire project.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=80)** It's time to see it in action.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=82)** This is the time to pause the video and log into your Snowflake account.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=86)** If you haven't already.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=88)** (air whooshing) Navigate to Projects on the left panel and select Notebooks.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=93)** Click on the notebook titled using USING_LLM_FUNCTIONS, and select the Start button at the top to start the notebook session.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=102)** It takes a couple of seconds.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=104)** We had already run the notebook until the helper function section.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=108)** Look at the code below helper functions.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=110)** First we call the COUNT_TOKENS function.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=113)** For this, we need to pass the name of the model to the function, as well as pass the input text we want to assess.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=120)** In this example, we pass the Llama3.1-70 billion model.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=125)** As we learned before, different foundation models use different tokenizers and will output different numbers for the same input text.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=133)** Let's move on to the second helper function, TRY_COMPLETE.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=137)** How can the TRY_COMPLETE function help?
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=140)** This helps us to test if COMPLETE will work or not before committing to the cost of running it.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=146)** This function works in the same manner as COMPLETE, but returns null instead of an error when the operation runs into difficulty.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=154)** The best part of this is that if the operation returns null, then you're not billed for the token use.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=160)** Test away.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=162)** Here we are passing Llama2-70b-chaty as the model to COMPLETE function.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=167)** It errors out since we mistyped the model name.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=171)** Now let's try the same on TRY_COMPLETE instead.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=175)** It fails gracefully and returns none.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=178)** (air whooshing) This might look unintuitive at first, because when the user inputs the wrong values, the function should error out, right?
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=187)** Imagine you built an AI application that has multiple functions.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=191)** It is being used by your business teams across the org.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=195)** Because of an invalid input from the user, the COMPLETE function errors out and breaks the entire application.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=202)** It is a bummer your business user cannot use other part of the application that still work.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=208)** TRY_COMPLETE is particularly useful when there are concerns the input may exceed the context window.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=215)** We need a way to gracefully fail to avoid these scenarios.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=219)** This is a common practice in software engineering.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=222)** Isn't it great that we are able to follow these best practices in AI app development as well?
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=227)** Thanks to TRY_COMPLETE.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=229)** All right, that's the helper functions.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=232)** When you're ready to use them in your applications, be sure to check the docs for boundary conditions and other details we didn't have time to cover here.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=240)** In this video, we learned about helper functions and how to use them.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=245)** We looked at COUNT_TOKENS and how it can be used to get the total number of tokens that a specific model will use when processing a given input text.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=254)** We looked at how to use TRY_COMPLETE, which allows us to run the operation and not pay for the execution if the execution fails.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=263)** Coming up, we will start pulling all of these pieces together and create a Streamlit app that allows us to switch between these functions.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=271)** See you soon.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/using-helper-functions?u=76281980&t=272)** (air whooshing)

> [!info]- Semantic Content
>
> **Env Vars:** try_complete (7), count_tokens (5), complete (5), llm (4), using_llm_functions (1)
> **Code Keywords:** function (11), pass (3), let (2), this, (1), switch (1)
> **UI Navigation:** navigate to (1), click on (1), select the (1)
> **Definitions:** is a  (2)
> **Cross-References:** coming up (1)
> **Documentation:** the docs (1)
> **Analogies:** imagine (1)
> **Speakers:** - welcome (1)

#### Getting ready to put it all together: Build a Streamlit app
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=0)** - We have covered a lot in this module.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=3)** In this video, we are going to put all our learnings together to build an AI application using Streamlit that uses LLM functions as building blocks of that application.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=14)** First, the scenario.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=16)** We will be playing the part of an analyst that has a volume of customer support tickets that we need to process to understand the concerns that our customers are telling us about.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=26)** The volume of support tickets is too large and it arrives in different languages, so handling it manually is not feasible.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=34)** We need a way to automate this and make it faster and efficient for the support teams.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=40)** Before we build an app to help our support teams pause the video and navigate to the Git companion repo for this course.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=47)** It is highlighted in the reading prior to this video.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=52)** Click on the repo URL and navigate to module two and download the call transcripts analytics app Python file that has all the source code needed to build the AI app.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=64)** Now, you have downloaded the source code needed to build the Streamlit app.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=69)** Next up, log into your Snowflake account and navigate to the projects tab in the left panel and select Streamlit.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=77)** Select the blue button on the upper right side of the screen which reads Streamlit app to create your app.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=84)** On the popup, name your app, I'm calling it call underscore center underscore analytics underscore app.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=94)** Choose your app location by selecting the pull down.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=97)** Choose the database as ski gear support DB and schema as ski gear support schema.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=104)** And warehouse is Compute warehouse.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=106)** Select create.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=110)** Streamlit starts this with some sample code on the left pane.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=114)** If you do not see this, select the edit button on the upper right to get back to it.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=119)** Copy the Python code we downloaded earlier and paste it into the left pin of the snow site UI.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=126)** Let's not worry about what each line of code does for the time being.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=129)** We will come back to them in a few minutes.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=132)** Once you pasted the code from the Python file, click run on the top right of the screen.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=138)** The Streamlit app has a text box called JSON Summary.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=142)** Click on the arrow right next to it and you see a dropdown list.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=147)** From the dropdown, you can pick JSON summary or translate our sentiment analysis.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=152)** I am going to select JSON summary and in the right pane a text box appears asking us to enter the call transcript.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=161)** I am going to select the example transcript variable from our code snippet and paste it in the text box on our app and run the app.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=177)** You can see that the model is able to summarize it in JSON format with three keys, product, defect and summary.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=186)** Very cool.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=188)** Next, we are going to go back to the code and switch out the LLM recall for another one to see the differences in performance.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=196)** Go to line 29 where we call Snowflake cortex complete function and switch out the function parameter.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=203)** Replace Mr. large with Llama 3.1 70 billion.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=210)** Click run on the top right.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=212)** If your account is set up on AWS West to Oregon region, this should run no problem.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=219)** Not all models are available in all regions, so if you have problems running the Llama 3.1 70 billion, check the region of your account.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=227)** Now you have your app.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=230)** Let's take a look at the code that created this app.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=233)** If the source code is not visible, click on edit at the top right of the app UI.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=238)** We have the Python code right in front of us.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=241)** On the top left, just when the source code starts, you see packages dropped on list.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=246)** You can use that to install the packages you need for the app.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=251)** I have Python 3.8, Snowflake Snow Park Python, and Streamlit packages installed.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=257)** You don't need to install additional packages for this project, so we are all set.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=262)** We start the code off with a bunch of import statements, imported the snowflake session to run the app, and Streamlit, of course, to create the app.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=271)** Next up, we have defined the example transcript, so it's handy for you to copy paste this into the app's text box later.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=278)** We have not used it in the code anywhere.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=280)** Great.
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=282)** In the source code, we have three functions defined.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=285)** First is the summarize function.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=287)** We define the prompt and invo cortex complete with Mr Large for summarization.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=294)** We could also use task specific LLM function to summarize, but I have used a mix of complete and task specific LLMS in the app to show how you could use a variety of these functions together to build an app.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=308)** Next, for the translate Python function we defined, we invoke task specific translate LLM function under the hood.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=316)** Similarly, for sentiment analysis Python function, we call the task specific sentiment LLM function under the hood.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=325)** Well done.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=326)** You have successfully set up an app that translates, summarizes, and runs sentiment analysis.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=333)** You looked at how using different LLMs produce different completions and the reasons to compare different LLMS while prototyping.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=341)** Nice work.
>
> **[5:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=343)** Play around with what you've learned here and see what variations you can build for your own use cases.
>
> **[5:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=348)** Everyone learns by doing, so I recommend that you experiment with what you've learned here using different models or producing variations on the Streamlit app we created.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=359)** In the next video, we will review what we covered in this module.
>
> **[6:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/getting-ready-to-put-it-all-together-build-a-streamlit-app?u=76281980&t=363)** See you then.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), module (3), let (2), switch (2), this, (1)
> **Env Vars:** llm (5), json (4), llms (2), url (1), aws (1)
> **CLI Commands:** python (8), make (1), git (1), aws (1)
> **UI Navigation:** click on (3), select the (3), navigate to (2), dropdown (2), go to (1)
> **Exercise Files:** source code (5), download the (1), sample code (1)
> **Prerequisites:** set up (2), install (2)
> **Versions:** 3.1 (2), python 3 (1)
> **Cross-References:** go back to (1), in the next (1), we covered (1)

#### Module recap
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=0)** - Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=2)** Let's go over what we have covered in this module.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=5)** So far, you've learned about Cortex COMPLETE, the LLMs that we can use with it and the functionality it offers.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=13)** We have looked at how to use translation, sentiment analysis, classify text, and summarize.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=19)** We've also looked at helper functions such as COUNT_TOKENS and TRY_COMPLETE while we keep in mind the cost considerations as we develop in this environment.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=30)** Great work.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=31)** In the next module, we will be looking at how we can customize our LLM responses using Cortex fine tuning.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=39)** We will cover how to prepare our training data, starting the fine tuning function, and managing our fine tuned models.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=46)** All of this will let us take a generally trained LLM and fine tune it for specific use.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=53)** We finished the module with a hands-on assignment where you got to pull together everything you learned and saw this functionality in action.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap?u=76281980&t=61)** Exciting stuff. See you then.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (2), function (1)
> **Env Vars:** llm (2), complete (1), count_tokens (1), try_complete (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - congratulations (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Customize LLM Responses with Cortex Fine-Tuning

> [↑ Back to Table of Contents](#table-of-contents)

#### What is Cortex fine-tuning?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=5)** - Welcome back.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=12)** Let's talk about what we're going to do in this video.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=15)** By the end of this video, you will be able to fine-tune a large language model to accomplish a new task.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=22)** You can fine-tune an LLM to respond in new styles, which are not possible with an out-of-the-box LLM.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=30)** You will also be able to distill the behavior of the large model to a small model so that you get the same performance at a lower cost.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=39)** Excited? I am.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=41)** Now, you might be thinking, "I ask all sorts of questions to ChatGPT "and other models every day, "and I get the right answers back.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=50)** "If these models work just fine, "why do we need to fine-tune them?"
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=55)** Well, general purpose language models, such as ChatGPT are great, but they're just that, general purpose.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=64)** Imagine a high school student who has a broad education covering a wide range of subjects such as mathematics, science, history, and languages.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=74)** This student has a general understanding of many areas, but is not an expert in any one specific field.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=81)** Now, picture this student deciding to pursue a specialized career, such as becoming an electrician or a chef.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=88)** General purpose LLMs are similar to this high school student with broad knowledge.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=93)** They've been trained on vast amounts of data and can provide information and answers across various subjects, but they're not specialists in any particular area.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=104)** fine-tuning these LLMs is similar to sending the high school student to a trade school.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=110)** At the trade school, the student focuses intensely on a specific skillset, such as electrical work or culinary arts.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=118)** Through the specialized training, the student becomes highly proficient in that particular field, much like how fine-tuning an LLM allows it to become highly skilled and accurate in a specific domain or task.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=133)** Now, just as the trade school student can perform complex tasks in their chosen field with greater precision and expertise, the fine-tuned LLM can handle complex tasks within its specialized area with much higher accuracy and effectiveness.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=150)** That makes sense, right?
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=152)** Say occasionally, these models don't give me straight answers to my questions, so I have to word the question differently to get to the right answer.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=162)** Can we simply experiment with different prompts to get the model to respond the right way?
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=169)** Why would we fine-tune?
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=171)** Well, you can certainly play with different prompts.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=174)** This approach can be effective in some cases.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=177)** However, fine-tuning allows models to learn from new examples and potentially acquire new knowledge not part of their original training set.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=187)** In contrast, prompt engineering limits models to the original knowledge and capabilities and cannot introduce new knowledge.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=196)** In addition, the time involved in crafting different prompts and experimenting with them is a factor as well.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=204)** Having said all that, the case for prompt engineering versus fine-tuning can depend on several factors.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=212)** How highly specialized and domain-specific is the task?
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=215)** What are the accuracy requirements?
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=218)** What is the level of customization needed and more?
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=221)** Once you decide fine-tuning is the way forward for your specific use case and requirement, this video shows how you can fine-tune a general purpose LLM with your own data using Snowflake.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=236)** To run fine-tuning in Snowflake, we use Snowflake's Cortex FINETUNE function.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=242)** Cortex FINETUNE is a fully managed service, which lets us take the general purpose LLMs and customize them to our specific needs.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=252)** As mentioned above, fine-tuning a model allows us to train the model so that it can complete new tasks, respond in particular formats, or use specific tones or styles.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=265)** For example, you can teach the model to use a particular brand voice or to always generate a JSON with a particular set of keys.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=274)** Another reason that we might want to fine-tune our LLM before deploying it is to achieve a more reliable output formatting that matches the expected or required format.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=286)** This is great if we want to have consistent email formatting or information that is output in bullet or table form for reports or a specific format such as JSON.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=298)** Fine-tuning is great because it helps the model generate more consistent responses.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=304)** That is, more consistent with the data we fine-tune it with.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=310)** Consider an example where we need to extract the condition and intervention from detailed medical notes.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=317)** We carefully construct the following prompt shown here, which asks to extract only conditions and interventions from the medical notes.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=327)** When we ask this of Llama 3.1, the 405 billion parameter model, we get exactly the response we are looking for containing only the information we need.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=339)** However, if we need to deploy this extraction for an entire health system, it'll be cost prohibitive to use a 405 billion parameter model.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=350)** Cortex has the full range of sizes for LLMs, so we can try a one billion parameter model here, say a Llama 3.2 one billion model.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=360)** However, the one billion parameter model won't even attempt to do the extraction.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=367)** To step up, We can also try Llama 3.2 three billion model.
>
> **[6:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=372)** This slightly bigger model is more helpful, but it ends up extracting a lot more information than we need and it's too verbose.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=384)** This is a perfect case for fine-tuning because we want to teach the small model to respond in a particular format, just like the large model.
>
> **[6:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=394)** Another word for this process of teaching a small model to behave like a large model is distillation.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=401)** Just like in chemical distillation where we run a process to separate out the compounds we want from larger volume of liquid, we distill the capability from a large model to a smaller model so that we get the benefits of the larger model, but at the cost of running a small one.
>
> **[7:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=420)** Now, imagine the scenario from earlier where we needed to extract information from medical notes.
>
> **[7:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=426)** The large model worked well on our medical notes.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=429)** This is great for prototyping.
>
> **[7:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=432)** In a real world setting, when you want to extract information from millions of medical notes in production, the cost would blow up.
>
> **[7:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=440)** Scenarios like this are a good case for using the Finetune function to distill functionality of the large model into a small model.
>
> **[7:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=449)** Large models are better for high accuracy, low volume tasks since they're more expensive to run.
>
> **[7:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=457)** For the high volume tasks, by fine-tuning a smaller model, we can achieve the performance as close to the larger model, while also training it for a specific use case at a much lower cost and latency.
>
> **[7:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=471)** With fine-tuning, however, we would incur the fine-tuning expense upfront, but we can enjoy the lower ongoing costs, improved performance and latency that makes it worthwhile.
>
> **[8:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=484)** Everyone is happy again, phew.
>
> **[8:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=487)** Let's move on to talk about how the Cortex FINETUNE function works.
>
> **[8:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=492)** Cortex FINETUNE function leverages parameter efficient fine-tuning or PEFT under the hood.
>
> **[8:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=500)** Parameter efficient fine-tuning is a technique that improves the performance of pre-trained model for a specific task by fine-tuning only a small subset of its parameters.
>
> **[8:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=511)** It is a good choice when we need to adapt a model for a domain-specific task while keeping costs and resources low.
>
> **[8:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=519)** This technique reduces the number of parameters being tuned and allows you to use examples to adjust the behavior of the model and improve the model's knowledge of domain-specific tasks.
>
> **[8:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=532)** Sounds great, right?
>
> **[8:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=534)** Let's quickly consider hardware requirements when we're dealing with LLMs.
>
> **[8:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=538)** Due to the enormous size, fine-tuning large models, such as the Llama 3.1 405 billion model, entail intensive hardware requirements that need innovative approaches to reduce the memory load to train billions of parameters.
>
> **[9:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=555)** But because Cortex FINETUNE leverages parameter efficient fine-tuning, the process is much cheaper and faster.
>
> **[9:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=562)** Let's quickly touch on the models that Cortex FINETUNE supports.
>
> **[9:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=566)** There are a number of models from the Llama and the Mistral families that range in size.
>
> **[9:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=571)** These can be fine-tuned.
>
> **[9:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=573)** Note that the models available for fine-tuning will change over time.
>
> **[9:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=577)** Some of the models may be available in some regions, but not others, so check the Snowflake documentation for the latest availability.
>
> **[9:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=585)** Let's look back at what we covered in this video.
>
> **[9:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=588)** We looked at how fine-tuning a pre-trained LLM can accomplish a new task or respond in new styles in a way an out-of-the-box LLM cannot.
>
> **[9:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=598)** We also looked at how we can distill the behavior of the large model to a small model and how it produces responses with the quality of the large model while getting the lower cost benefits of using a small model.
>
> **[10:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=612)** We talked about how the ability to tune a model to respond in a specific style or format, such as JSON, can be very useful in certain use cases.
>
> **[10:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=622)** We cover how Snowflake Cortex under the hood runs fine-tuning, using parameter efficient fine-tuning technique and how it reduces compute costs and why this is much more efficient.
>
> **[10:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=636)** In the next video, we will prepare our Snowflake environment to fine-tune a foundational model for a specific use case.
>
> **[10:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/what-is-cortex-fine-tuning?u=76281980&t=644)** See you in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** llm (8), finetune (6), json (3), peft (1)
> **Analogies:** such as (7), imagine (2), just like (2), picture (1), for example (1)
> **Code Keywords:** let (5), function (4), case. (1)
> **Definitions:** is a  (5)
> **Versions:** 3.1 (2), 3.2 (2)
> **Cross-References:** in the next (2), we covered (1), we talked about (1)
> **Non-Speech:** (upbeat music) (2)
> **Warnings:** note that (1)

#### Setting up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=1)** Imagine you are a data scientist working at a telecommunications company called Telco.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=7)** Your responsibility is to provide AI-driven insights for your stakeholders so that they can make strategic decisions to increase customer satisfaction.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=18)** Recently, there has been a surge of support tickets.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=21)** The company receives support tickets via phone and email, and then the support team manually reviews and responds to the customer complaints.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=31)** This process is slow and manual.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=33)** You, as a data scientist, need a way to automate the analysis of support tickets and generate an email or text response to these customers.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=43)** Instead of writing a complex rules engine or asking our teams to manually analyze those tickets and write custom responses for each, we can use LLMs, which are designed to handle complex language tasks just like this.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=59)** We have two main tasks in front of us.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=61)** One is to analyze the support tickets and understand customer issues.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=66)** Second is to automatically generate a custom response for every support ticket to resolve the issue.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=73)** Before we dive into how to solve these two problems as a data scientist, let us investigate the support ticket dataset.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=81)** Currently, the support tickets are landed in an S3 bucket.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=85)** We are going to load this dataset into a Snowflake table for analysis.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=90)** In this video, we will set up our Snowflake environment, load the dataset into a Snowflake table, and prepare it for further analysis.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=100)** Now you should pause the video to log into your Snowflake free trial account.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=107)** Once you are logged into Snowflake account, navigate to the companion git repo for this course.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=113)** You can find the link to the git repo in the reading section prior to this video.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=119)** In the git repo under module 3, you will find two IPython notebooks.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=126)** The first notebook is for loading the support ticket dataset from the AWS S3 bucket into Snowflake.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=133)** The second notebook is for fine tuning the Mistral 7B model.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=138)** Now switch to your Snowflake account.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=141)** Select the Data tab from the left panel and navigate to Databases.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=146)** On the top right click on the create database button and type in telco_support_db for the database name.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=157)** And click Create.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=159)** You can see the TELCO_SUPPORT_DB listed in the databases now.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=163)** Click on the downward arrow next to the TELCO_SUPPORT_DB.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=167)** It has two default schemas, INFORMATION SCHEMA and PUBLIC SCHEMA.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=172)** Let us now create a new schema within the database.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=176)** Click on the create schema button at the top right.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=180)** Type in support_data for schema name and click Create.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=186)** You can click on the SUPPORT_DATA and it shows no object found.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=191)** This is because we haven't created any Snowflake objects under this schema.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=196)** Now, navigate to Projects on the left panel.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=200)** Select Notebooks.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=202)** Move to the top right and click on the down arrow.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=205)** Select import IPython notebook file and upload the load_support_tickets notebook into your Snowflake account.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=214)** Select the TELCO_SUPPORT_DB and SUPPORT_DATA for the notebook location.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=220)** Great.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=221)** Next, let's load the fine tuning Mistral notebook into Snowflake.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=226)** Follow the same steps as above and select the TELCO_SUPPORT_DB and SUPPORT_DATA for the notebook location.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=234)** All right, with both the notebooks in our Snowflake account, it is time to load the dataset into Snowflake.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=242)** Click on the notebook titled LOAD_SUPPORT_TICKETS and select the Start button at the top right to start the notebook session.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=249)** It takes a couple of seconds.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=252)** Click on Packages at the top right and search for Snowflake package to install.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=258)** It takes a couple seconds.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=260)** First, we import the active snowpark session and then set the context for the rest of the notebook cells to use the TELCO_SUPPORT_DB and SUPPORT_DATA schema.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=271)** After that, we will create a CSV file format so Snowflake knows how to read the support tickets dataset that is stored in CSV files in the AWS S3 bucket in this specific location.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=285)** Next up, we create an external stage in Snowflake to hold the data from the S3 bucket, and now is the time to create the support tickets table in Snowflake.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=297)** This table will store the support ticket data.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=301)** Once we have the table created, it is finally time to copy the data from the external stage into this Snowflake table.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=320)** That is it.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=321)** So far, we logged into our Snowflake account, loaded the customer support tickets from an S3 bucket into a Snowflake table.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=330)** We have everything we need to analyze the support tickets and help our support team.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=334)** In the next video, we will explore what the dataset looks like.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=339)** We will also use Cortex LLM functions we learned earlier in the course to review and analyze the support tickets.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/setting-up-your-environment?u=76281980&t=347)** See you there.

> [!info]- Semantic Content
>
> **Env Vars:** telco_support_db (5), support_data (4), aws (2), schema (2), csv (2)
> **UI Navigation:** click on (7), select the (4), navigate to (3), switch to (1)
> **CLI Commands:** git (3), find (2), aws (2), make (1)
> **Code Keywords:** let (3), this. (1), module (1), switch (1), public (1)
> **Code Identifiers:** telco_support_db (1), support_data (1), load_support_tickets (1)
> **Analogies:** imagine (1), just like (1)
> **Prerequisites:** set up (1), install (1)
> **Cross-References:** in the next (1)

#### Analyzing customer support tickets
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=1)** In this video, you will explore the support tickets dataset and use Cortex LLM functions to analyze them.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=9)** Sign into your Snowflake account if you're not already signed in.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=15)** Navigate to the project tab on the left panel and select notebooks, and click on the fine-tuning Mistral 7B notebook, and select the start button at the top right to initiate the notebook session.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=30)** Right after we start the notebook session, click on packages button and type Snowflake to install the Snowflake core package.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=39)** This allows us to use Snowflake features, such as Snowpark and Cortex.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=44)** Let's run the first cell in the notebook to import Snowpark context and Snowpark functions for exploration analysis.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=52)** Next, let's select the database and schema where the data set is stored for the context.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=59)** In the next cell, we are loading the support tickets from the support tickets table into a Snowpark dataframe.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=67)** Looking at the data, we can see that the requests often cover multiple product lines with text and formats, making it difficult to quickly identify the issue.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=77)** Interesting, but worry not.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=79)** As I mentioned before, analyzing and making sense of long text data is exactly what LLMs are a perfect fit for.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=88)** Before we use LLMs to review these tickets, we have a quick note from our business teams.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=94)** They want us to categorize each support ticket into one of five categories, meaning the main issue from each support ticket could be about roaming fees or slow data speed, or lost phone, or adding a new line, or just closing the account.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=111)** In a real world setting, the customer complaints might not be limited to these five categories only.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=117)** But for the purposes of this project, let us stick to these categories.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=121)** So in the next cell, we have defined a variable called ticket categories, with a list of five categories we received from our business teams.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=131)** As I mentioned earlier, we have two main tasks in front of us.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=135)** One is to analyze the support tickets and categorize customer issues into one of five buckets.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=141)** Second is to automatically generate a custom response for every support ticket to resolve the issue.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=149)** For the first task, we will use classified text LLM function we learned about in the earlier part of the course.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=156)** For the second task, we will prompt a large language model to generate a custom response for every support ticket.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=164)** In the next cell, we've defined our prompt to guide the LLM on how to generate this custom response.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=172)** If the customer has set their contact preference to text message, the LLM should generate a text response under 25 words.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=180)** If the customer has their contact reference set to email, the LLM should generate an email response under less than a hundred words.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=193)** Look at the next code snippet.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=195)** We have used classified text LLM function that takes the support ticket request as input, and generates the ticket category as output.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=204)** With a prompt defined, we will call the Mistral 7B model, using the Cortex complete function that we already learned.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=212)** The complete function takes the model name and prompt, the support ticket request, ticket category, which is the output of the classified text function, and contact preference of the customer are concatenated into the prompt as input.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=227)** The model then generates the text or email responses output.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=232)** How cool.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=233)** This is a perfect example to show how LLM functions can be used as building blocks to develop sophisticated AI apps and use cases.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=243)** Let's run this cell and look at the email and text response that Mistral 7B generated.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=249)** Oh, it really is that simple. Hmm.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=253)** Except, look at this example.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=256)** The customer's contact reference is a text message, but the model generated the text response and email response in the same output.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=264)** Not good, Mistral 7B.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=266)** Well, what if we used a larger, more powerful model?
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=271)** Would it be able to generate accurate responses for our support tickets?
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=276)** Let's try the Mistral large, now.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=279)** Using the same prompt and parameters with the Cortex complete function, we will simply switch out the model name to Mistral large.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=287)** It is that simple to play around with different foundation models, using the Cortex complete function.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=294)** Let's investigate the response from Mistral large.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=297)** Clearly, it did a better job than Mistral 7B, fewer errors than Mistral 7B, but we still have some incorrect responses.
>
> **[5:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=307)** We could certainly engineer the prompt in different ways and experiment to see if the model is able to generate the right responses.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=316)** This prompt engineering approach can be effective in some cases, but in many cases, it can feel like a whack-a-mole where the engineered prompt can work sometimes, but be flaky the other times, not to mention the time it requires to manually craft your prompt.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=332)** For specific tasks like this where we want to generate responses in a certain style to every support ticket, fine-tuning the foundation models would be an effective approach.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=344)** So coming up, we will learn how to fine-tune a smaller model, such as the Mistral 7B, and teach it to generate customer responses to support tickets in a desired style, based on customer's contact preferences.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/analyzing-customer-support-tickets?u=76281980&t=359)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (6), for. (1), except, (1), switch (1)
> **Env Vars:** llm (7)
> **Cross-References:** in the next (4), coming up (1)
> **UI Navigation:** click on (2), select the (2), navigate to (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Prerequisites:** install (1)
> **Speakers:** - welcome (1)

#### Preparing your training data
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=0)** - Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=2)** In this video, you will start preparing the training data needed to fine tune a foundation model.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=8)** We learned from the previous experiment that Mistral Large was better at generating customer responses than Mistral 7B.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=17)** This is great, but large models are more costly to run than smaller ones.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=22)** An ideal solution would be to improve the accuracy of the small model through fine tuning.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=28)** This is what we are going to do next, we will fine tune Mistral 7B to optimize for cost, but at the same time improving the accuracy of the response.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=39)** If you're not logged into your Snowflake account, please pause the video now to log into your account.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=47)** Navigate to the projects tab in the left panel and select notebooks.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=52)** Click on the fine tuning Mistral 7B notebook and select the start button at the top right to initiate the notebook session.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=60)** Let's quickly run through the cells up to the Mistral Large response section.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=81)** We learned from the previous experiment that Mistral Large was better at generating custom responses for tickets than Mistral 7B and that neither model generated ideal responses for our support tickets.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=96)** We want to fine tune the smaller Mistral 7B model to generate desired responses for our customers.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=104)** We need the data to fine tune the model, meaning we need a set of prompts and their ideal responses for the support tickets as fine tuning dataset.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=114)** For this purpose, we could filter the correct responses Mistral Large had generated and use them for fine tuning the smaller model Mistral 7B.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=125)** That is, for customers who have text message as contact preference.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=129)** If the model's response was under 25 words, let's use that data for fine tuning job.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=136)** Similarly, for customers who have email as contact preference, if the model's response for more than 30 words, let's use that data as well.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=145)** In the next cell, we save this data set into the support ticket responses table in Snowflake.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=152)** Let's check to make sure by using select all from support ticket responses table.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=158)** Now let us format this dataset into three columns with ticket ID, prompt and Mistral Large response.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=166)** This data is now ready to run the fine tune job on the Mistral 7B.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=171)** Let's save this into support_tickets_finetune_message_style table.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=176)** All good.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=178)** Next, we will split this table into a training and an evaluation dataset.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=183)** In the next cell, we use the random split function to split the data, 80% of the data to be used for training and 20% to be used for evaluation.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=193)** We set the seed equal to 42 to make sure that each time we run this code, the split will be the same.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=200)** You could set the seed to any number, but keep it the same during every run, but I like to keep it 42 thanks to "Hitchhiker's Guide to the Galaxy."
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=210)** Alright, our data is ready for training.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=219)** Before we get started on that, let's look at some things we need to keep in mind before we run our fine tune job.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=226)** Cortex Finetune requires that the training data be within the form of a table or a view within the Snowflake environment.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=234)** We need to make sure that we have both the training and validation data ready, and in a table or view that we can call.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=243)** Even tens of data points can be sufficient to start.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=247)** If you look at our fine tuning dataset, it has only about 60 rows.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=251)** That's it.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=252)** This is sufficient because as I mentioned before, Cortex uses parameter efficient fine tuning under the hood.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=260)** The parameter efficient fine tuning technique improves the performance of a pre-trained model for specific task by fine tuning only a small subset of its parameters.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=271)** It is a good choice when you need to adapt a model for a domain specific task while keeping costs and resources low.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=280)** Perfect for our scenario here.
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=282)** The parameter efficient fine tuning starts by freezing the model's parameters and injecting a small number of adapted layers in between the frozen layers.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=293)** Since we are not retraining the entire model, we get to leverage the model's already present knowledge as a foundation to layer the fine tuning into.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=303)** The model already has a general knowledge under its belt.
>
> **[5:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=307)** Now we want to train it to generate responses in a style similar to our training data that is based on our customer's contact preferences.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=318)** We have set up our environment and prepared our training data.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=321)** Well done.
>
> **[5:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=322)** Let's look at what we covered in this video.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=325)** We looked at Finetune and how we must prepare both the training and validation data.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=330)** We learned how we must ensure that both have prompt and complete columns for the function to work.
>
> **[5:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=337)** We looked at how this data must be in a Snowflake table or a view.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=341)** We randomly split our data into training and evaluation data sets and have it ready to go.
>
> **[5:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=348)** We also examined how the fine tune function in Cortex is implemented under the hood and how it can fine tune a model without having to retrain all the parameters of the foundation model.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=362)** We also looked at an example of calling this function in a Snowflake notebook, and next we will be looking at how to start the fine tune process.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/preparing-your-training-data?u=76281980&t=371)** See you soon.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (2), we covered (1)
> **UI Navigation:** navigate to (1), click on (1), select the (1)
> **Code Identifiers:** support_tickets_finetune_message_style (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)

#### Starting the fine-tuning job
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=1)** - Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=2)** Let's talk about what we're going to do in this video.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=5)** In this video, we will be starting our first fine-tuning job.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=9)** We will talk about cost considerations, access permissions, and controls.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=14)** We will look at examples of how to run your fine-tuned job from your Snowflake Notebook.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=20)** In the last video, we finished preparing our data and we are now ready to start our fine-tune job.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=27)** But before we get started with fine-tuning our LLM, we will take a moment to talk about the costs that the fine-tuned jobs incur and what factors affect this.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=37)** The cortex fine-tuning function incurs costs based upon the number of tokens that are consumed during the training.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=45)** On average, each token is roughly equal into four characters of text, which we mentioned before, so you could calculate a rough cost that way.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=54)** However, that is not the extent of what the training is going to cost you.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=59)** Let's go through this step by step.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=62)** The way to calculate fine-tuning training tokens is to take the number of input tokens and multiply it by the number of epochs that you are planning to run.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=73)** The number of times that the model is trained on the training data and evaluated on evaluation data during the fine-tuning job is called an epoch.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=83)** Think of epochs as the series of actions that your model executes on the LLM during the fine-tuning job.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=91)** Just like when a human is learning something, the model will rarely gain complete understanding of the new information after one pass.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=100)** So much like a human learner that is exposed to an information set over and over again, and who develops a greater and greater mastery of the new data, our fine-tuned job benefits from running the training more than once.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=114)** Also, just like a student that reads a textbook over and over again, there are initially big improvements over the first couple of epochs, but diminishing returns over time.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=125)** By default, cortex will select an optimal number of epochs between 1 and 10, or you can choose the number of epochs which controls the number of epochs the model trains for.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=138)** Deciding on the number of epochs to assign to your fine-tuned job depends on several variables.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=145)** In cases where the training data is small or accuracy is paramount, you may also want to add additional epochs to your fine-tuned job.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=154)** But in cases where the training data is larger, the number of epochs can be reduced.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=160)** Ultimately, the goal is to tune the model so that it accurately returns based upon the data it was trained on, while not overspending time and money.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=171)** It is worth noting that your costs do not end with calculating input tokens multiplied by epochs.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=178)** You will have costs incurred for the storage, and warehouse costs for storing any of your customized adapters and any SQL queries you run.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=187)** Fine-tuning jobs are often long running and are not attached to a Snowflake Notebook session.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=194)** This means they run in the background.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=196)** This is also part of your compute cost.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=199)** Next up, let us look at the permissions you need to run the fine-tune job in Snowflake.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=205)** Any user who wants to invoke the FINETUNE function needs to be assigned SNOWFLAKE.CORTEX_USER role.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=213)** Ask your account admin to grant this role to you if you want to run a fine-tune job.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=219)** For the purpose of this course, you will be using a Snowflake free trial account, so you already have the account admin privileges, so don't worry about these access controls and permissions.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=230)** However, in a real-world setting, most of you would not be the account admins of the Snowflake accounts in your organization, so reach out to your organization's account admin to grant you SNOWFLAKE.CORTEX_USER role.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=245)** And next you will need the USAGE privilege on the database where the training and evaluation data set is stored.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=252)** This is so you have access to the training data to run the fine-tune job.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=258)** In addition to that, in order to create models within a specific schema in a database, you must have either the CREATE MODEL privilege along with USAGE access, or FULL OWENRSHIP privilege on that schema, allowing you to create and manage all objects within it, including models.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=276)** To sum it up, you need to review three access permissions.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=280)** First, do you have permission to run the CORTEX.FINETUNE function?
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=286)** Second, do you have usage access on the database that stores fine-tuning data?
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=291)** And lastly, do you have permission to store the fine-tuned model in the desired schema?
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=298)** All right, with all that information, let's get our fine-tuned model up and running.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=303)** If you're not logged into your Snowflake account, please pause the video now to log into your account.
>
> **[5:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=309)** (air whooshing) navigate to the Projects tab in the left panel and select Notebooks, and click on FINETUNING_MISTRAL_7B Notebook and select the Start button at the top to initiate the notebook session.
>
> **[5:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=324)** We had run the notebook until preparing the fine-tuning dataset already, the next cell has everything we need to run fine-tuning job in our notebook.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=334)** Look at the code snippet in the Fine-tune mistral-7b model using Cortex cell.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=340)** When we invoke the FINETUNE function, we need to pass a few parameters.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=345)** First is the CREATE string.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=347)** This is to indicate that we want to create a new fine-tuning job.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=351)** Sometimes we use DESCRIBE in place of CREATE to check the status of the fine-tuning job.
>
> **[5:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=357)** In this case, we use CREATE.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=359)** The next parameter is the name of the fine-tuned model.
>
> **[6:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=363)** We are calling it SUPPORT_MESSAGES_FINETUNED_MISTRAL_7B.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=368)** The third parameter is the foundation model we are fine-tuning, mistral-7b, in our case.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=375)** And then we pass on the training and evaluation dataset as well.
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=379)** Once we run the cell, we can see the job ID for the fine-tune job as the cell output.
>
> **[6:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=387)** That is it.
>
> **[6:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=388)** In a single line of code, we are now fine-tuning the mistral-7b foundation model with our own proprietary customer support ticket data to generate responses in a particular style, in just a single line of code.
>
> **[6:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=404)** How cool is that?
>
> **[6:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=406)** The fine-tuning job can take a couple of minutes.
>
> **[6:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=409)** As I mentioned before, this job runs in the background, so even if the notebook session stopped, the fine-tune job continues to run in the background.
>
> **[6:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=419)** How do we know when it is done?
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=421)** How do we know if it ran successfully?
>
> **[7:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=424)** Let's take a look at what's happening under the hood when the model is running.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=429)** Fine-tune jobs can be long-running and depending on the input table you use and the model you choose, this job could be running for quite some time.
>
> **[7:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=439)** We can check the status of our jobs by calling the SNOWFLAKE.CORTEX.FINETUNE with SHOW as the first argument to see how the job is progressing.
>
> **[7:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=448)** Here if we pass the SHOW argument to CORTEX.FINETUNE, we should see a list of all the fine-tune jobs that we have running which we have access to.
>
> **[7:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=459)** Depending on the job and where it is in its run, we may see pending, in progress, success, error, or even cancel status.
>
> **[7:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=469)** Another argument that we can pass to the FINETUNE function is DESCRIBE.
>
> **[7:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=474)** In the next cell, we invoke the FINETUNE function, but this time with the DESCRIBE string, and pass the job ID from the previous cell output as the second parameter.
>
> **[8:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=485)** That is, we want the FINETUNE function to describe the job we kicked off in the previous cell.
>
> **[8:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=492)** We get back a lot of information about the fine-tune job when we run this.
>
> **[8:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=497)** First we are given the base model our job used, the Unix state stamp it was created on, and if the job has finished, the finished on-time stamp as well.
>
> **[8:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=508)** Below this, we get the job ID, followed by the database schema and model name.
>
> **[8:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=514)** Next, we get the progress and status followed by the training data information.
>
> **[8:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=521)** Under this, we get the number of tokens that the fine-tune job consumed, and a training result that tells us the training and validation loss.
>
> **[8:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=530)** Lastly is the validation data information.
>
> **[8:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=534)** DESCRIBE gives us much more information than SHOW, but only for one job per call.
>
> **[9:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=541)** Well done.
>
> **[9:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=542)** We have now run our first fine-tuning job in Snowflake.
>
> **[9:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=546)** We have more than one option to run our fine-tune job.
>
> **[9:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=549)** We can either run it from our notebooks like we just did, or we can use the Snowflake studio interface to set up and run our job.
>
> **[9:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=558)** Let's look at running our fine-tuned job using the AI ML studio interface.
>
> **[9:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=563)** The AI ML studio is a no-code interface that streamlines the LLM customization and AI app development in Snowflake.
>
> **[9:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=572)** Since we have set up the training and evaluation datasets, we can now jump over to the AI and ML studio.
>
> **[9:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=580)** Open a new tab in your browser by clicking on the snowflake icon in the upper left side of your browser.
>
> **[9:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=587)** From here, select AI and ML and then select Studio.
>
> **[9:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=594)** On the right pane you will see Create Custom LLM, and on the right side of that you will see a button that reads Fine-tune.
>
> **[10:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=603)** Select that, it opens up the fine-tune wizard.
>
> **[10:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=606)** In the first page, you will be prompted to select the base model from the list of supported models.
>
> **[10:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=613)** For this, select mistral-7b.
>
> **[10:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=619)** Note that when you select different models that are available to you, a brief description of model's capabilities pops up on the right side.
>
> **[10:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=628)** Here we see that mistral-7b is a model that is fast to deploy and customize, and that it is a small model, and that it is good for many use cases.
>
> **[10:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=639)** We are also told the size of the context window that it has.
>
> **[10:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=643)** Select the role, it will be ACCOUNTADMIN by default if you're using Snowflake free trial account, and select COMPUTE_WAREHOUSE as the warehouse as well.
>
> **[10:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=653)** For the database, select TELCO_SUPORT_DB and SUPPORT_DATA for the schema as well, because that is where our fine-tuning data is stored.
>
> **[11:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=664)** And then enter a name for the fine-tuned model.
>
> **[11:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=668)** Use a different model name than the one we created earlier through Snowflake Notebook.
>
> **[11:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=673)** I'm going to call mine as
>
> **[11:29](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=689)** SUPPORT_MESSAGES_FINETUNED_MISTRAL_7B_V2_STUDIO.
>
> **[11:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=692)** I'm going to leave the number of epochs as auto, but you can experiment with that as well.
>
> **[11:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=695)** When you're done, select the blue Let's go button at the bottom.
>
> **[11:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=702)** The next page prompts us to select our training data.
>
> **[11:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=705)** Look for SUPPORT_TICKETS_FINETUNE_MESSAGE_STYLE_TRAIN table, and then select Next.
>
> **[11:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=715)** The page will stay the same, but now we are asked to identify the prompt column for the fine-tuned job to use.
>
> **[12:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=722)** Thankfully, we labeled this prompt, so identifying it is pretty easy.
>
> **[12:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=729)** Next, we are asked to identify the completion column that we want our job to use as reference when it is producing its own completions.
>
> **[12:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=738)** Select MISTRAL_LARGE_RESPONSE.
>
> **[12:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=746)** Lastly, we are asked to identify the validation dataset we want to use.
>
> **[12:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=751)** It is important that the format of our validation data matches our training data.
>
> **[12:37](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=757)** Select the validation dataset as SUPPORT_TICKETS_FINETUNE_MESSAGE_STYLE_EVAL table, and select Next.
>
> **[12:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=770)** We are given a chance to review our choices before starting the job.
>
> **[12:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=774)** If for any reason something looks wrong, we can select Back to go back and change it.
>
> **[13:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=781)** And that's it.
>
> **[13:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=783)** We can start fine-tuning the model by clicking on Start Training.
>
> **[13:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=788)** This will return a job ID, the base model we used, the name we chose for the fine-tune model, where the training data is, and the location that the fine-tune model will go to when complete.
>
> **[13:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=802)** You can now click on Done.
>
> **[13:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=803)** Like I said before, this fine-tuning job takes a few minutes and it runs in the background, so we just wait.
>
> **[13:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=812)** (air whooshing) We accomplished a lot in this video.
>
> **[13:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=815)** We explored the cost considerations that we need to think about when we are setting up our fine-tuned jobs, and how epochs affect the number of tokens we will spend.
>
> **[13:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=826)** We learned about added costs that are incurred by the warehouse and compute during the fine-tune process.
>
> **[13:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=832)** We looked at access control requirements and discussed the LLM models that are available to us to use within fine-tune.
>
> **[14:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=840)** From there, we created our fine-tune job, named an identifier, selected our base LLM model, and added training and validation data.
>
> **[14:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=850)** We did this both through our notebooks and the Snowflake AI ML studio.
>
> **[14:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=855)** We started our fine-tune job and got the ID number, which we used to monitor and manage our fine-tune job while it is running.
>
> **[14:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=864)** We looked at how we can manage and check the status of our fine-tune jobs using SHOW and DESCRIBE functions.
>
> **[14:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=870)** We saw how this returns identifying information on our running jobs, as well as the status information, such as the person completed and whether our jobs are pending, in progress, have succeeded, have returned an error, or have been canceled.
>
> **[14:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=887)** In the next video, we will be exploring how we can use our fine-tuned models for inference.
>
> **[14:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=894)** See you then.
>
> **[14:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/starting-the-fine-tuning-job?u=76281980&t=895)** (logo whooshing)

> [!info]- Semantic Content
>
> **Env Vars:** finetune (8), llm (6), describe (5), create (4), show (4)
> **Code Keywords:** let (7), function (7), pass (6), this, (3), interface (3)
> **UI Navigation:** select the (5), click on (2), navigate to (1), go to (1)
> **Cross-References:** in the next (2), in the last (1), we mentioned (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** just like (2), such as (1)
> **Prerequisites:** set up (2)
> **Warnings:** note that (1)

#### Inference using fine-tuned model
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=0)** - In the last video, we took our generally trained LLM and sent it off to school.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=5)** Fine tuned school.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=6)** Now it's time to put the model to work and see how it does.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=11)** If you're not logged into your Snowflake account, please pause the video now to log into your account.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=17)** (air whooshing) Navigate to the project's tab on the left panel and select Notebooks.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=23)** Click on the fine tuning mistral 7B notebook and select the Start button at the top right to initiate the notebook session.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=31)** We had already run the notebook until the fine tuning section, but the notebook session ended, so we need to run the import statements again, and we'll also run the second cell to use this database and schema for the notebook.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=46)** And we'll also run the prompt and ticket categories definition.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=54)** Next up, we will invoke the fine tuned mistral 7B model to generate custom responses to support tickets based on our customer's contact preference.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=65)** Look at the snippet of code in inference using fine tuned model section.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=70)** We invoke the Cortex complete function with the name of the fine tuned model, instead of mistral 7B or Mr. Large.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=81)** Looking at the inference output, it is clear that the fine tuned model is able to generate custom responses in the desired style for our customer support tickets.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=91)** Well done.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=94)** (air whooshing) In this video, we ran inference on the fine tuned mistral 7B model using Cortex Complete.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=102)** We reviewed that the model responses are in line with our customer's preferred mode of contact.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=107)** Fantastic.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=108)** In the next video, we will be looking at how to build a Streamli UI interface for the AI app we built so far.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=115)** That is, we will learn how to auto-generate custom responses using LLMs, and share that information using a Streamli app with our marketing team.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/inference-using-fine-tuned-model?u=76281980&t=126)** See you then.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1), click on (1), select the (1)
> **Code Keywords:** function (1), interface (1)
> **Cross-References:** in the last (1), in the next (1)
> **Env Vars:** llm (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)

#### Streamlit app to autogenerate custom emails and text messages
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=0)** - Welcome back!
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=1)** We are almost at the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=3)** In this video, we are going to put all our learnings together to build an AI application using Streamlit that generates custom responses for the support tickets based on the customer issues.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=16)** If you're not logged into your Snowflake account, please pause the video now to log into your account.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=23)** Navigate to the projects tab in the left panel and select notebooks.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=28)** Click on the fine-tuning Mistral 7B notebook and select the start button at the top right to initiate the notebook session.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=38)** We had already run the notebook until the inference using fine-tuned model section.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=44)** Let's take a look at the last cell in the notebook.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=48)** In about 30 lines of code, we have prototyped a UI for the AI app using Streamlit.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=54)** Hit run on the cell, and the Streamlit application comes to life within the Snowflake notebook.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=61)** As you see here, Snowflake Notebooks support creating Streamlit apps inline as well.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=67)** This application takes three inputs.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=69)** First is the customer request.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=71)** Feel free to play around with this input.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=74)** Next up is the customer's preferred mode of contact.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=77)** You could pick email or text message from the dropdown list.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=80)** I am going to pick text message.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=82)** Lastly, you can select the LLM model to generate custom response for the support ticket.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=88)** I will select Mistral 7B here.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=91)** Once you are done inputting these parameters, select generate messages button to see the output.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=100)** The classify text function has correctly identified the ticket category as closing account.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=107)** That is great.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=108)** For the custom response to the support ticket, the general purpose Mistral 7B did not produce an ideal response.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=116)** It has generated both email and text messages, although we input text as the customer's preferred mode of communication.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=124)** Next, let's see how the fine-tuned Mistral 7B performs for the same set of inputs.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=134)** This is fantastic.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=136)** The fine-tuned model is able to generate the correct response.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=139)** It has produced a text message with appropriate response for the customer request.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=145)** Well done.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=147)** If you want to play with this, you can change the customer request, the contact preference, and the LLM to see how the responses change.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=155)** Creating the app inline within a Snowflake notebook is one way to build a Streamlit application.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=162)** What if you want to expose this app to your marketing team?
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=165)** Surely you don't want to share the entire notebook with all the code just to share the application.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=171)** That would be cumbersome for our business users.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=174)** There is another way you could create Streamlit apps in Snowflake.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=178)** Before we do that, pause the video and navigate to the Git companion repo for this course.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=184)** It is highlighted in the reading prior to this video.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=188)** Click on the repo URL and navigate to module three and download the support ticket response app Python file that has all the source code needed to build the AI app.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=201)** Now, you've downloaded the source code needed to build the Streamlit app.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=206)** Next up, log into your Snowflake account and navigate to projects tab in the left panel and select Streamlit.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=215)** Select the blue button on the upper right side of the screen, which reads Streamlit app, to create your app.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=221)** On the popup, name your app.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=223)** I'm calling it support ticket response app.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=229)** Choose your app location by selecting the pulldown.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=232)** Choose the database as telco support DB and the schema as support data, and warehouse as compute warehouse, and select create.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=250)** Streamlit starts us with some sample code on the left pane.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=254)** If you do not see this, select the edit button on the upper right to get back to it.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=260)** Copy the Python code we downloaded earlier and paste it into the left pane of the Snowsight UI.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=267)** Let us not worry about what each line of code does for the time being.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=271)** We will come back to them in a few minutes.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=273)** Once you pasted the code from the Python file, click run on the top right of the screen.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=280)** You can see the app UI getting updated on the right.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=283)** When working with Streamlit apps in Snowsight, you can use the side-by-side editor and app preview screen to quickly add, adjust, or remove components.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=294)** In this way, you can modify your code and see changes in the app right away.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=299)** The app takes three inputs, exactly the same as the app we built inline within the Snowflake notebook.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=306)** The text box takes customer request as input, the dropdown list is used to select preferred mode of contact, and another dropdown to select the LLM.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=316)** You can experiment with different models and see how the custom messages are generated for different combinations of inputs.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=323)** You can experiment with different models and see how the custom messages are generated for different combinations of inputs.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=330)** How cool, right?
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=332)** The best part about this Streamlit app is that you can share this with your business users without having to share the underlying code along with it.
>
> **[5:42](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=342)** Streamlit apps are Snowflake objects, and you can use role-based access control to manage who can access these Streamlit apps.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=351)** Click on the share button on the top right of the screen, type the name of the role you want to share your Streamlit app with.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=359)** You, the app owner, can choose which roles have permission to use the app.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=364)** To copy the URL to your Streamlit app, select copy to clipboard.
>
> **[6:09](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=369)** You can then send this URL through email or text.
>
> **[6:12](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=372)** Now, you have your app!
>
> **[6:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=374)** Let's take a look at the code that created this app.
>
> **[6:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=378)** If the source code is not visible, click on edit at the top right of the app UI.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=383)** We have the Python code in front of us.
>
> **[6:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=386)** In only 30 lines of Python, we were able to hack together a simple, clean user interface for our app.
>
> **[6:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=395)** On the top left, just when the source code starts, you see a packages dropdown list.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=401)** You can use that to install the packages you need for the app.
>
> **[6:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=405)** I have Python 3.8, Snowflake Snowpark Python, and Streamlit packages installed.
>
> **[6:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=411)** You don't need to install additional packages for this project, so we are all set.
>
> **[6:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=416)** We start the code off with a bunch of import statements, imported the Snowflake session to run the app, and Streamlit, of course, to create the app.
>
> **[7:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=425)** I've imported AST module to process a string into a dictionary later in the app.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=431)** With this, we get a Snowpark active session and are good to go.
>
> **[7:16](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=436)** Next up, we have defined the prompt for LLMs.
>
> **[7:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=440)** We also defined the five ticket categories to bucket our customer requests into.
>
> **[7:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=446)** In the first container, we created a text box for customer requests.
>
> **[7:31](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=451)** We split the container into two columns and created a select box to select contact preference and LLM.
>
> **[7:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=459)** We add another container for the generate messages button.
>
> **[7:43](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=463)** With these, our simple, clean UI is now complete.
>
> **[7:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=467)** It's definitely not the most sophisticated UI for an app, but serves the purpose for rapidly prototyping AI applications and sharing it.
>
> **[7:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=476)** Let's look at the last 10 lines of code, where we invoke the Snowflake Cortex classify text function that takes the customer requests and tickets categories as input.
>
> **[8:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=487)** It then classifies the request into one of five categories defined by our business teams.
>
> **[8:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=493)** Lastly, we invoke the Cortex complete function with four inputs, the LLM prompt we defined earlier along with the customer request, contact preference, and selected LLM from the UI.
>
> **[8:26](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=506)** Once the user enters inputs and clicks on the generate messages button on the app UI, the if statement becomes true.
>
> **[8:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=515)** It invokes the classify text LLM function and Cortex complete function to generate the custom response based on the inputs entered.
>
> **[8:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=524)** Here you go, an AI application Python with only 30 lines of code.
>
> **[8:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=531)** Well done.
>
> **[8:52](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=532)** We have covered a lot in this video.
>
> **[8:54](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=534)** We learned how to build a clean, simple UI to the AI application we built using Streamlit.
>
> **[9:01](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=541)** We also learned how to build the Streamlit app inline within a Snowflake notebook.
>
> **[9:07](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=547)** In addition, we reviewed how Streamlit apps are also Snowflake objects and are bound by role-based access control.
>
> **[9:15](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=555)** We reviewed how to install packages needed for your Streamlit app and how to view the source code and UI side-by-side while you're prototyping.
>
> **[9:24](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=564)** Lastly, we saw how the Streamlit app can be shared with other Snowflake users that have access permissions granted by the app owner.
>
> **[9:33](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=573)** That is it.
>
> **[9:34](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/streamlit-app-to-auto-generate-custom-emails-text-messages?u=76281980&t=574)** Congratulations, and I'll see you in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (5), navigate to (4), click on (4), dropdown (4)
> **Code Keywords:** let (5), function (5), this, (3), module (2), interface (1)
> **Env Vars:** llm (7), url (3), ast (1)
> **CLI Commands:** python (8), git (1)
> **Exercise Files:** source code (5), download the (1), sample code (1)
> **Prerequisites:** install (3)
> **Cross-References:** later in (1), in the next (1)
> **Versions:** python 3 (1)

#### Module recap
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=0)** - Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=2)** Let's go over what you've covered in this module.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=5)** We looked at what fine-tuning is and how Cortex fine-tune function uses parameter efficient fine-tuning technique to fine-tune an LLM.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=14)** We explored how the general purpose models were not efficient in generating response in the desired style for our support tickets.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=23)** We learned when we should fine-tune a general purpose LLM.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=27)** We looked at preparing our data, splitting it into training and evaluation data sets, and the specifics of making sure we have the correct columns passed to the fine-tune function for completions.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=39)** We started our fine-tune job and managed it by using show and describe.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=44)** We used our fine-tune model for inference.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=47)** We created a Streamlit user interface for the AI application we built.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=53)** The app takes customer request, contact preference, and an LLM model as input.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=59)** The model classifies the support request into one of five categories listed by our business teams.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=66)** It also custom generates a response to the support ticket based on the customer request and their contact preference.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=74)** Gen AI allows us to do incredible things.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=78)** We have only started to scratch the surface of the abilities gen AI offers in the Snowflake environment.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=85)** Well done.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=87)** You have completed a lot and increased your skills and knowledge.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=92)** Coming up, we will talk about next steps in your journey.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/module-recap-24596135?u=76281980&t=95)** See you then.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), module (1), interface (1)
> **Env Vars:** llm (3)
> **Cross-References:** coming up (1)
> **Speakers:** - congratulations (1)
> **Non-Speech:** (upbeat music) (1)

#### Continue your generative AI education
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=0)** - Welcome back, let's talk about what's next in your journey.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=5)** GenAI is a growing field that is changing how we do everything, and you have started on your learning path.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=13)** Whether for professional personal growth or general interest, you have put in the time to complete the first step in the process of developing a skill that you can put to use in your own life or career.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=27)** Let's remember what we covered in this course.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=30)** We looked at what the LLM function is and we followed that up with how to use the complete function and after that we learned how to use the task specific functions, translate, sentiment, summarize and classify text.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=45)** We then looked at the helper functions, count tokens, and try complete.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=50)** From there, we brought it all together and created a Streamlet app using LLM functions as building blocks for the app.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=59)** We then learned about fine-tune and how we can use this to specialize our LLMs to perform new tasks that out of the box LLMS cannot.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=71)** We learned how to prepare our data, splitting it into training and evaluation datasets and how to start the fine-tuning job.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=80)** From there, we started the job and learned how to manage this potentially long running job using show and describe.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=90)** From there, we looked at using the fine-tuned LLM for inference.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=95)** We also learned how to build a Streamlit app that caused the LMS to auto-generate customer responses for each customer ticket.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=106)** Reflecting back on this whole course, we covered three main topics, task specific functions, the complete function and the fine-tune function.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=117)** I like to think of these as part of a sequence from like simple to complex depending on the needs of the task at hand.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=125)** If you have a use case that can be solved with the task specific functions, that's usually the best way to go.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=133)** Use translate to translate text, summarize to summarize text, and so on.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=139)** The functions are simple to use and out of the box, but they don't offer flexibility to support other tasks.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=147)** If you have a task that is not supported out of the box by any of the task specific functions, you can use complete with your choice of foundation model and some prompt engineering to solve it.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=160)** Finally, if your use case is so specialized that it is not supported efficiently or adequately by the foundation models out of the box, then you can use Cortex fine-tune function to fine-tune and create a custom model for it.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=176)** As you can see between the task specific functions, complete and fine-tune, Snowflake Cortex offers a powerful set of tools to solve many of your use cases.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=188)** Congratulations again, You have covered the beginning of Gen AI in snowflake's environment and started yourself on an exciting journey.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=197)** GenAI is changing everything and those of us that are able to see and deploy the opportunities that GenAI presence us with, will leap ahead of others.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=208)** Keep an eye out for further courses on GenAI in Snowflake.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=212)** It has been great spending this time working with you and you have learned a lot and are probably excited to start putting these skills to work.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=221)** Thank you for choosing to spend your time with us as you start your GenAI journey.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=226)** We look forward to seeing you in our other Snowflake courses, goodbye for now.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-gen-ai-with-snowflake/continue-your-generative-ai-education?u=76281980&t=231)** (snappy urban music)

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (2), finally, (1)
> **Env Vars:** llm (3), llms (1), lms (1)
> **Cross-References:** we covered (2)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (snappy urban music) (1)


## Instructor

- [[Snowflake]]
- [[Inc]]

## Resources

- Exercise files available

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Snowflake

## Path Context

### In [[Generative AI Professional Certificate by Snowflake]]
← [[Intro To Snowflake For Devs Data Scientists Data Engineers]] | **2 of 3** | [[Building Generative AI Apps to Talk to Your Data]] →

## Part of

- [[Generative AI Professional Certificate by Snowflake]]

## Appears In

- [[Generative AI Professional Certificate by Snowflake]]

## Related Courses

_Courses sharing skills:_

- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)