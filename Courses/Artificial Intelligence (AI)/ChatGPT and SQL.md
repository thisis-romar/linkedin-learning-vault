---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: chatgpt-and-sql
url: "https://www.linkedin.com/learning/chatgpt-and-sql"
duration_minutes: 83
duration: 1h 23m
level: Intermediate
updated: 6/5/2024
learners: 127154
skills:
  - Artificial Intelligence (AI)
  - ChatGPT
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQELJEReeU-4_A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008999244?e=2147483647&amp;v=beta&amp;t=1E76A8wJsKma21O6mU2x-tfaIm7xcv78jDsqeYmLpcQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Transform Your Programming with AI Coding Tools]]'
prev_courses:
  - '[[Refactoring with GitHub Copilot]]'
next_courses:
  - '[[Software Testing Assistance with GitHub Copilot AI]]'
path_nav: '[{"path":"Transform Your Programming with AI Coding Tools","position":4,"total":7,"prev":"Refactoring with GitHub Copilot","next":"Software Testing Assistance with GitHub Copilot AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/chatgpt
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/ChatGPT%20and%20SQL.md)

![ChatGPT and SQL](https://media.licdn.com/dms/image/v2/D560DAQELJEReeU-4_A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008999244?e=2147483647&amp;v=beta&amp;t=1E76A8wJsKma21O6mU2x-tfaIm7xcv78jDsqeYmLpcQ)

# ChatGPT and SQL

> AI is changing the world around us, and completely revolutionizing the way we work. Data professionals now have access to tools that provide superpowers to work smarter and faster than ever before. In this course, the Maven Analytics team guides you through the world of deep learning and generative AI and shows you how to leverage SQL and ChatGPT together to work more efficiently and make smarter,

> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql) | 1h 23m | Intermediate | 127K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The future is now: Intro to AI for data analytics](#the-future-is-now-intro-to-ai-for-data-analytics)
  - [Setting expectations](#setting-expectations)
- [**1. Why AI for Data Analytics?**](#1-why-ai-for-data-analytics) (2 videos)
  - [Why AI is a game-changer for data analysis](#why-ai-is-a-game-changer-for-data-analysis)
  - [AI use cases for data analytics](#ai-use-cases-for-data-analytics)
- [**2. Intro to AI, LLMs, and ChatGPT**](#2-intro-to-ai-llms-and-chatgpt) (6 videos)
  - [The AI landscape](#the-ai-landscape)
  - [Generative AI and large language models](#generative-ai-and-large-language-models)
  - [The road to ChatGPT](#the-road-to-chatgpt)
  - [Generative AI tools](#generative-ai-tools)
  - [Warning: Pitfalls of ChatGPT](#warning-pitfalls-of-chatgpt)
  - [Accessing ChatGPT and Google Bard](#accessing-chatgpt-and-google-bard)
- [**3. Prompt Engineering**](#3-prompt-engineering) (5 videos)
  - [Intro to prompt engineering](#intro-to-prompt-engineering)
  - [Prompt tip: Be clear and specific](#prompt-tip-be-clear-and-specific)
  - [Prompt tip: Provide context](#prompt-tip-provide-context)
  - [Prompt tip: Establish roles](#prompt-tip-establish-roles)
  - [Prompt tip: Set the tone](#prompt-tip-set-the-tone)
- [**4. ChatGPT for SQL**](#4-chatgpt-for-sql) (7 videos)
  - [Intro to ChatGPT for SQL](#intro-to-chatgpt-for-sql)
  - [Explain fundamental SQL concepts](#explain-fundamental-sql-concepts)
  - [Explain a SQL query](#explain-a-sql-query)
  - [Add comments to a SQL query](#add-comments-to-a-sql-query)
  - [Debug and troubleshoot SQL code](#debug-and-troubleshoot-sql-code)
  - [Create a SQL query from scratch](#create-a-sql-query-from-scratch)
  - [Optimize SQL queries](#optimize-sql-queries)
- [**Conclusion**](#conclusion) (1 videos)
  - [Key takeaways and next steps](#key-takeaways-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### The future is now: Intro to AI for data analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=0)** - Hey everyone, and welcome to ChatGPT for Data Analytics.
>
> **[0:04](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=4)** AI is changing the world around us and completely revolutionizing the way that we work.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=9)** As data professionals, we now have access to tools that give us superpowers to work smarter and faster than ever before.
>
> **[0:16](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=16)** In this course, we'll introduce you to the world of deep learning and generative AI, explore the rapid rise of large language models like ChatGPT, and Google Bard, and get you up and running with free tools that will take your skills to the next level.
>
> **[0:31](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=31)** Next, we'll dive into the art of prompt engineering, review tips and best practices for generating consistent, accurate model outputs, and address common limitations and pitfalls to be aware of.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=43)** From there, we'll walk through some of the most powerful and practical ChatGPT use cases for data science and analytics.
>
> **[0:50](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=50)** You'll practice using ChatGPT to explain and interpret code, generate formulas from scratch, diagnose and troubleshoot errors, optimize complex queries, and much, much more.
>
> **[1:02](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=62)** This course is beginner friendly, and it's designed for absolutely anyone who wants to leverage modern technology to work more efficiently and make smarter, data-driven decisions.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=73)** So if you're ready to harness the power of AI and stay ahead of the skills curve, this is the course for you.
>
> **[1:19](https://www.linkedin.com/learning/chatgpt-and-sql/the-future-is-now-intro-to-ai-for-data-analytics?u=76281980&t=79)** We've got a lot to cover, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), data (4), [[Analytics]] (2), ai (2), next (2)
> **Warnings:** be aware (1), troubleshoot (1)
> **CLI Commands:** make (1)
> **Speakers:** - hey (1)
> **Non-Speech:** (upbeat music) (1)

#### Setting expectations
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=0)** - [Narrator] Let's begin by setting some expectations.
>
> **[0:03](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=3)** First off, this course is designed to be an overview of how data professionals can use AI tools.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=9)** We'll introduce the broader AI landscape and tools like ChatGPT, and we'll review practical use cases for data analysts, but we won't be diving deeply into how these large language models actually work or give an exhaustive list of everything that they're capable of.
>
> **[0:25](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=25)** Next, we'll be using the free versions of these AI tools for the course demos.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=30)** We'll quickly touch on some paid options and alternative tools, but the majority of what you see will be shown using the free versions of either ChatGPT or Google Bard.
>
> **[0:41](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=41)** Perhaps most importantly, AI is a rapidly evolving field, and these tools will change very, very quickly.
>
> **[0:49](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=49)** This technology is moving fast, and that means that existing products are going to change, new vendors and tools will emerge, but hopefully the core concepts and best practices you learn in this course will remain relevant.
>
> **[1:02](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=62)** Last but not least, this course is designed to be modular to fit your needs.
>
> **[1:06](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=66)** The first half of the course is designed for everyone.
>
> **[1:09](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=69)** It's where we'll talk about the AI landscape, we'll introduce these different tools, talk about prompt engineering, best practices, and so on.
>
> **[1:17](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=77)** But the second half is structured so that you can focus specifically on the tools you use most as an analyst, Excel, Sheets, SQL, Power BI, or Python.
>
> **[1:28](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=88)** Now of course, remember that what you see on our screens during the demos won't always match what you're seeing on yours, especially given how these AI tools actually work.
>
> **[1:37](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=97)** But our goal is to give you some ideas and techniques that you can take and apply to your own work.
>
> **[1:43](https://www.linkedin.com/learning/chatgpt-and-sql/setting-expectations?u=76281980&t=103)** So with that, we've got a lot to cover. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (6), data (2), [[ChatGPT]] (2), [[Large Language Models (LLM)|Large language models]] (1), next (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** python (1)
> **Env Vars:** sql (1)
> **Speakers:** - [narrator] (1)


### 1. Why AI for Data Analytics?

[↑ Back to Table of Contents](#table-of-contents)

#### Why AI is a game-changer for data analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=0)** - [Instructor] Hey there.
>
> **[0:01](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=1)** In this video we're going to be talking about why every person who's building a data career needs to be learning AI tools.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=7)** The world is changing fast.
>
> **[0:10](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=10)** AI tools like ChatGPT, Google Bard, and others are just allowing people to do things that were really complicated and took lots of time in now a matter of minutes, sometimes even seconds.
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=21)** This technology is a total game changer.
>
> **[0:24](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=24)** And right now it's only in its infancy.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=27)** So some things it's really good at, some things it's kind of just okay at, some things it's having trouble with, but it's going to keep getting better and better.
>
> **[0:34](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=34)** So here are just some of the reasons that every data pro should be learning to use AI tools.
>
> **[0:40](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=40)** First, you want to improve your performance and efficiency.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=43)** Leverage these tools to do things faster.
>
> **[0:46](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=46)** You can automate routine low value tasks so that you can spend more time on the higher value add activities that you can bring to the table.
>
> **[0:54](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=54)** You can use AI as an easy way to check your work.
>
> **[0:56](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=56)** It can be a code buddy.
>
> **[0:58](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=58)** It can help think through your analysis.
>
> **[1:00](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=60)** You can leverage it for your learning and answering quick pointed questions and learning about these tools will help you stay on the cutting edge and keep you competitive in your field.
>
> **[1:09](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=69)** So let's talk about whether your job as a data analyst is at risk.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=73)** This is something a lot of people are very concerned about right now with AI.
>
> **[1:18](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=78)** AI is not going to replace you. Don't worry.
>
> **[1:20](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=80)** The fears about this happening are totally overblown.
>
> **[1:23](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=83)** Companies are always going to need human talent.
>
> **[1:25](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=85)** They're always going to need that intuition.
>
> **[1:27](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=87)** The thing to understand is that the skills required to be an effective analyst are going to shift.
>
> **[1:33](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=93)** We call these three core skills the Analytics Trifecta: strategic thinking, technical proficiency, and communication skills.
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=101)** This is what separates a good analyst from one that's truly great, a real 10x analyst that can help take an organization to the next level.
>
> **[1:51](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=111)** Technical proficiency right here, this is where AI really adds a lot of value.
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=116)** It's a tool that will help things happen more efficiently.
>
> **[1:59](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=119)** It can fill technical skills gaps.
>
> **[2:01](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=121)** So it's definitely going to help here, especially over time as the tools get better.
>
> **[2:06](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=126)** But it's really going to struggle with strategic thinking and communication skills.
>
> **[2:10](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=130)** So since AI can help with the technical gaps, analysts who have this amazing strategic thinking ability and who are great with communicating with their organization effectively telling a story with data and advocating for change that's really going to impact the business based on the data they're finding, that's going to be the special sauce that you can use and pair it with technical proficiency aided by AI tools to be an amazing analyst that every company is going to value.
>
> **[2:38](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=158)** You need to learn these tools to stay competitive.
>
> **[2:41](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=161)** While an AI is not going to take your job, someone else might.
>
> **[2:45](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=165)** That could be someone else who's learning AI and staying on the cutting edge of these technical developments, so you need to make sure that you're doing it yourself.
>
> **[2:53](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=173)** Imagine being a data analyst today who had never learned spreadsheets or how to use the internet.
>
> **[2:59](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=179)** We're likely going to be saying the same thing about ChatGPT and other AI tools in the near future.
>
> **[3:04](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=184)** The time to learn this stuff is now, and this is just the next flavor of the same theme we've seen forever.
>
> **[3:09](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=189)** The key to building a long-term successful career in data is the same as it's ever been.
>
> **[3:15](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=195)** Building a strong foundational skillset, getting great at strategic thinking, getting great with communicating and advocating for change that will help drive an organization forward, and then keeping your skills sharp and embracing and adapting to the change that's coming about.
>
> **[3:31](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=211)** This is just the most recent tool.
>
> **[3:33](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=213)** There have been others before it, like Tableau and Power BI coming in and becoming a very valuable skillset for the data world.
>
> **[3:41](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=221)** There will be other tools in the future.
>
> **[3:43](https://www.linkedin.com/learning/chatgpt-and-sql/why-ai-is-a-game-changer-for-data-analysis?u=76281980&t=223)** As long as you have that strong foundation, can think critically about a business problem solve, communicate with others, and you keep learning the technical skills as they come up, you're going to have a great career, and you'll be talent that every business will value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (12), data (8), [[Strategic Thinking]] (4), career (3), business (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### AI use cases for data analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=0)** - [Instructor] Hey, everybody.
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=0)** In this video, we're going to talk about some of the most common use cases for AI within the analytics workflow.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=7)** There are tons of things you can do with this technology, and these are just some of the most powerful use cases that we've explored.
>
> **[0:14](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=14)** You can use it to generate code or formulas.
>
> **[0:16](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=16)** You can use it to be a tutor and explain some technical concepts with pointed questions.
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=21)** You can use it for troubleshooting or debugging.
>
> **[0:23](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=23)** You can comment your code if you have some that's particularly lengthy or confusing.
>
> **[0:28](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=28)** You can add comments there to make it more human readable.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=30)** You can optimize your queries or your formulas for better performance.
>
> **[0:34](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=34)** You can generate step-by-step tutorials.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=37)** You can ask for data visualization tips to help improve your data storytelling, and you can use it to automate tasks, research some specific technical topics, or even generate sample data.
>
> **[0:48](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=48)** This list is not meant to be exhaustive.
>
> **[0:50](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=50)** These are just some of the most common and powerful use cases that we've explored.
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=55)** We'll also show you videos where you can dive into Excel, Google Sheets, Power BI, SQL, and Python, and you can get some more specific walkthroughs of each of these different use cases in action.
>
> **[1:07](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=67)** I hope to check those out and just remember that some of these use cases are already firing on all cylinders for these AI tools.
>
> **[1:14](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=74)** Other ones, the results may vary.
>
> **[1:17](https://www.linkedin.com/learning/chatgpt-and-sql/ai-use-cases-for-data-analytics?u=76281980&t=77)** We expect these to get much better over time, so you want to learn how to do these things now so that as the tools progress, you'll be right there with the technology so that you'll be able to use these tools to maximize your effectiveness as an analyst.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), data (2), [[Analytics]] (1), [[Troubleshooting]] (1), [[Debugging]] (1)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 2. Intro to AI, LLMs, and ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### The AI landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=0)** - [Instructor] Before we dive into specific AI tools like ChatGPT and Google Bard, it's worth taking a step back and understanding the broader AI landscape.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=9)** Artificial intelligence is a very broad term that relates to machines and computer systems that mimic functions associated with human intelligence, like decision-making, image recognition, self-driving cars, and more.
>
> **[0:22](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=22)** Within the field of artificial intelligence lies machine learning.
>
> **[0:25](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=25)** These are going to be the models that act as the brains of artificial intelligence systems.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=30)** They help computers learn with minimal human instruction and get more accurate when exposed to more data.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=37)** And that more data piece is critical in explaining why we've seen an explosion in AI and machine learning in the past few decades.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=44)** With the proliferation of the internet, mobile devices, internet of things, we're now generating more data than we ever have, and that's enabled machine learning to become more accurate than it ever could have been prior to some of these inventions.
>
> **[0:58](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=58)** And within machine learning lies deep learning.
>
> **[1:00](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=60)** This is a very complex family of algorithms that's designed to mimic the human brain and learn almost exclusively without human intervention.
>
> **[1:09](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=69)** Large language models like ChatGPT and Google Bard fall within this category.
>
> **[1:14](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=74)** And speaking of the human brain, there's still one area where these models are not able to approach what humans are able to do, and that brings up the conversation between weak versus strong AI.
>
> **[1:25](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=85)** Currently, we're in this state of weak AI, which is defined as AI that can only perform specific tasks.
>
> **[1:32](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=92)** So for example, ChatGPT could tell you how to drive a car if you asked it, but if you asked it to drive your car for you, it couldn't do that even though it surfaced all of this knowledge that you'd need to drive a car.
>
> **[1:44](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=104)** Strong AI, or Artificial General Intelligence, would be able to do that at some point in the future.
>
> **[1:50](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=110)** This is often what's depicted in science fiction and often what is very scary to many folks about this field.
>
> **[1:57](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=117)** These systems would be able to learn and perform any task that a human could do.
>
> **[2:01](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=121)** So if you could ask ChatGPT, "Can you go buy me groceries today?"
>
> **[2:06](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=126)** and it was able to solve all of the problems that it needed to without your intervention, that would be much closer to strong AI than we are today.
>
> **[2:13](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=133)** As of now, we haven't seen any strong AI systems implemented, but this is likely on the horizon and possibly within our lifetimes.
>
> **[2:21](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=141)** And just in case you were wondering, both machine learning and deep learning have their roots and statistics.
>
> **[2:26](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=146)** A lot of the algorithms rely on statistical concepts.
>
> **[2:30](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=150)** But there's one major philosophical difference between these fields.
>
> **[2:34](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=154)** Statistics is very much concerned with being able to confidently say, "Yes, there is a relationship between variable A and B, and that relationship is X."
>
> **[2:44](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=164)** Machine learning and deep learning don't care about those relationships.
>
> **[2:48](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=168)** They just care about the accuracy of output.
>
> **[2:51](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=171)** And because they don't care about these relationships and they certainly don't care about humans understanding these relationships, they're able to be much more complex than the same statistical algorithms that they might be based off of.
>
> **[3:03](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=183)** This has led them to be called black box models because we know what goes in and we know what comes out, but we have no idea what goes on inside these algorithms.
>
> **[3:12](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=192)** They're often picking up millions or billions of nuances and data that we really can't understand or detect.
>
> **[3:18](https://www.linkedin.com/learning/chatgpt-and-sql/the-ai-landscape?u=76281980&t=198)** But now let's take a look at generative AI specifically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (9), [[ChatGPT]] (4), data (4), [[Algorithms]] (4), [[Artificial Intelligence (AI)|Artificial intelligence]] (3)
> **Definitions:** is a  (3), defined as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Generative AI and large language models
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=1)** - [Instructor] Generative AI systems are deep learning models capable of generating original text, images and other types of media in response to user prompts.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=9)** Large language models, which is what we're focused on in this course, are generative AI models focused on producing text output specifically.
>
> **[0:17](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=17)** Other generative AI models include DALL-E and Midjourney, which are used to generate images.
>
> **[0:22](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=22)** And if you haven't heard of these two tools yet, I highly suggest taking a look for Midjourney images on Google.
>
> **[0:28](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=28)** You'll find some very interesting images that have been created by AI.
>
> **[0:32](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=32)** And so just to give us a little bit of insight into how complex these algorithms really are, let's take a look at a simple language model.
>
> **[0:39](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=39)** So maybe the first prototype of ChatGPT looks something like this.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=44)** I prompt the machine, the capital of France is and we hope to see the capital of France is Paris and returned.
>
> **[0:52](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=52)** And so most of us know almost instinctually that the capital of France is Paris.
>
> **[0:56](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=56)** But how does the model fill in the blank?
>
> **[0:59](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=59)** The model doesn't know that Paris is the correct response, but suggests the answer that it thinks is most probable in the given context.
>
> **[1:06](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=66)** So 99 times out of 100 when we see the capital of France is the last word there will be Paris.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=73)** But this model has to compare Paris with thousands of words and determine that it had the strongest relationship with words like capital and France.
>
> **[1:22](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=82)** And that may seem easy and it certainly is to our brains.
>
> **[1:26](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=86)** But remember that the word capital has multiple meanings, that France has had other capitals historically, and that the blank could also be things like beautiful, a popular tourist destination, et cetera.
>
> **[1:37](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=97)** So even though we expect the answer to be Paris, these models have to rank the probability that Paris is the correct answer against thousands, if not hundreds of thousands of other options that might have some probability of being correct.
>
> **[1:50](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=110)** And when we take that a step further, our large language model has to do a lot more work.
>
> **[1:55](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=115)** I could ask, when did Paris become the capital of France?
>
> **[1:57](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=117)** And ChatGPT replied, Paris became the capital of France in the 6th century.
>
> **[2:02](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=122)** But how does the model answer this question?
>
> **[2:05](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=125)** It looks at millions of documents for similar questions and related statements like in 508 A.D., Paris became the capital of France.
>
> **[2:12](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=132)** It then associates the prompt with these documents and does its best to mimic the language from the responses.
>
> **[2:18](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=138)** Since it has an element of randomness to account for its uncertainty.
>
> **[2:21](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=141)** If you ask it again, it will likely tell you something similar but not identical.
>
> **[2:25](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=145)** And so large language models like ChatGPT are colossal achievements in machine learning that model the quote unquote shape of language.
>
> **[2:33](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=153)** They've looked at so many millions of documents from the internet and elsewhere that they're pretty accurately able to associate these different combinations of words in our prompt and assemble responses based on the millions of documents that they've seen.
>
> **[2:48](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=168)** If you look at early versions of generative AI, the answers are wildly unpredictable and often don't make grammatical sense.
>
> **[2:55](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=175)** But as these models have gotten more complex, they've gotten closer and closer to mimicking human language until now we have tools that seem very credible in this regard.
>
> **[3:04](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=184)** And just to quickly define what GPT in ChatGPT means, this stands for generative pre-trained transformers.
>
> **[3:12](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=192)** These are a type of large language model trained on massive text data sets and are designed to generate outputs that mimic human written text.
>
> **[3:19](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=199)** So generative means the model generates new and original natural language text instead of copying and pasting existing data.
>
> **[3:26](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=206)** Pre-trained means the model was already trained on a large data set before being fine tuned to perform specific tasks.
>
> **[3:33](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=213)** This also enables models like ChatGPT to be accessed by companies and further trained to specific needs based on that context.
>
> **[3:43](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=223)** And finally, transformers, which were one of the last pieces in deep learning necessary to lead to ChatGPT.
>
> **[3:49](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=229)** These came out in around 2017.
>
> **[3:52](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=232)** But these are a type of deep learning model that can process sequential inputs and differentiate the importance of individual parts of language.
>
> **[4:00](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=240)** This is also known as self attention.
>
> **[4:02](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=242)** And LLMs like ChatGPT are among the most sophisticated deep learning models ever built.
>
> **[4:08](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=248)** GPT-4, which currently powers premium versions of ChatGPT cost over a hundred million dollars and took 11 months of computing to train with some of the most state-of-the-art compute available to us.
>
> **[4:20](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=260)** So these are incredibly complex and expensive algorithms that have unparalleled access to data and unparalleled complexity.
>
> **[4:29](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-large-language-models?u=76281980&t=269)** Now let's go through a quick history lesson and understand how we got to complex models like ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (9), [[Generative AI]] (4), [[Deep Learning]] (4), data (4), prompt (3)
> **Env Vars:** gpt (2), dall (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** stands for (1), known as (1)
> **Speakers:** - [instructor] (1)

#### The road to ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=0)** - [Instructor] AI tools like ChatGPT became widely popular in late 2022, but they owe their success to more than 60 years of research and development in artificial intelligence systems.
>
> **[0:11](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=11)** Outside of AI research, we also saw massive surges in computing power, storage capabilities, data generation, and much more.
>
> **[0:20](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=20)** There were a number of factors that led to ChatGPT, but let's focus on the AI research that got us there.
>
> **[0:28](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=28)** So this chart here shows the increasing complexity of neural network models over time.
>
> **[0:33](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=33)** So on our x-axis, we have time, and on our y-axis, we have the number of model parameters that specific neural networks had.
>
> **[0:42](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=42)** And so the term artificial intelligence was only coined in 1955, and a few years later, the first neural network algorithm was implemented.
>
> **[0:51](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=51)** This model had one parameter, but there was a ton of interest in getting machines to mimic human intelligence, and that led researchers at MIT to develop ELIZA, which was the first chatbot in the mid-'60s.
>
> **[1:05](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=65)** And this was not a super sophisticated chatbot, nor was it based off of neural network architecture, but it did take in human input and return text as a response.
>
> **[1:16](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=76)** In the late '60s, AI research somewhat stalled.
>
> **[1:19](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=79)** Researchers found some issues with the original neural network architecture, and researchers were also running into issues implementing AI systems in practice.
>
> **[1:30](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=90)** So this led to reduce funding and interest for a number of years.
>
> **[1:35](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=95)** AI research really started to pick back up again in the mid-'80s after a novel neural network architecture was created.
>
> **[1:42](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=102)** Multilayer perceptrons, which helped solve the issues researchers found in the late '60s, as well as back propagation, which was a technique for allowing these algorithms to solve for their own errors better, were implemented in the same algorithm, and this made them much more powerful and opened up the door to new practical applications.
>
> **[2:02](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=122)** In the meantime, corporations were starting to get invested into the artificial intelligence game.
>
> **[2:08](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=128)** In the mid-'90s, Deep Blue, which was a supercomputer developed by IBM, beat chess champion Gary Kasparov, which was one of the first times on a big stage that AI and computer systems successfully beat humans at their own game.
>
> **[2:22](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=142)** Around the same time, neural networks also showed extreme promise in document recognition.
>
> **[2:28](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=148)** They became the go-to method to help understand what humans had written by hand.
>
> **[2:33](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=153)** This opened up the door to a widespread array of practical applications that had tremendous economic benefit, and we really started to see a lot more interest back in neural networks once again.
>
> **[2:44](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=164)** In the mid-2000s, the first neural network with deep learning capabilities was developed, and this is one of the most important breakthroughs that led to some of the AI tools we saw today.
>
> **[2:54](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=174)** And so just to point out, from about 1955 to about 2010, we saw about a two-year doubling in terms of the number of parameters that models had.
>
> **[3:04](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=184)** But once we move into the last decade, we see this number shrink down to four months.
>
> **[3:10](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=190)** So every four months, these models are getting twice as complex as they were before.
>
> **[3:16](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=196)** We're not necessarily forecasting that this doubling is going to progress at the same rate.
>
> **[3:21](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=201)** It may increase.
>
> **[3:22](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=202)** It may plateau as we see diminishing returns, but things moved extremely fast in the last decade.
>
> **[3:28](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=208)** So in the modern era of AI, we kicked this off by seeing IBM Watson beat humans at Jeopardy, so they were able to understand context of questions and provide answers at a better rate than humans were.
>
> **[3:40](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=220)** In 2012, we saw AlexNet, a deep learning model, set a standard for image recognition.
>
> **[3:46](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=226)** This is when AI image recognition started to approach that of humans.
>
> **[3:50](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=230)** We saw Siri and Alexa launched in about 2014.
>
> **[3:54](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=234)** And in 2015, OpenAI, the creators of ChatGPT was founded.
>
> **[3:59](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=239)** And in the same year, AlphaGo beat World Champions at Go.
>
> **[4:03](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=243)** This was powered by deep learning, and Go was considered a much more challenging problem for computers to solve than chess, which was a little bit more predictable in terms of what players could do.
>
> **[4:13](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=253)** In 2017, researchers at Google published a paper on transformer layers, introducing them into neural networks.
>
> **[4:21](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=261)** Transformer layers were the last key piece of machine learning research necessary to create algorithms like ChatGPT.
>
> **[4:28](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=268)** And from there, shortly after we seen GPT-1, GPT-2, GPT-3, and finally, GPT-4 all released in about a five-year span.
>
> **[4:37](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=277)** And in terms of model parameters, GPT-1 had about a hundred million parameters, while GPT-4 had over 1 trillion, representing about a 10,000 times increase in terms of model complexity.
>
> **[4:48](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=288)** And we only got to GPT-4 because early iterations of GPT showed extreme promise for solving the problems that we'll see later on in this course.
>
> **[4:57](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=297)** And so again, in a span of about 65 years, we went from the term artificial intelligence being coined to GPT-4 with a trillion parameters being released.
>
> **[5:08](https://www.linkedin.com/learning/chatgpt-and-sql/the-road-to-chatgpt?u=76281980&t=308)** Now let's go ahead and turn our attention to ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (10), [[ChatGPT]] (5), [[Artificial Intelligence (AI)|Artificial intelligence]] (4), [[Neural Networks]] (4), [[GPT-4]] (4)
> **Env Vars:** gpt (9), ibm (2), mit (1), eliza (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Generative AI tools
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=0)** - [Narrator] The rate of adoption for modern AI tools is unprecedented.
>
> **[0:04](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=4)** ChatGPT became the fastest growing online product in history, reaching 1 million users in only five days.
>
> **[0:11](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=11)** So if it felt like ChatGPT came out of nowhere, it sort of did.
>
> **[0:15](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=15)** Let's take a look at how other online platforms compare.
>
> **[0:19](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=19)** It took Netflix 3.5 years to get to 1 million users.
>
> **[0:23](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=23)** It took Twitter two years. It took Facebook 10 months.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=27)** Instagram took 2.5 months, which is pretty good.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=30)** But ChatGPT took a mere five days.
>
> **[0:33](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=33)** This adoption rate is mind-boggling for any product, and we're starting to see this cascade into the AI industry as a whole.
>
> **[0:40](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=40)** The rapid advancements in AI technology as well as the success of ChatGPT have helped lead an explosion of new app, services, and players in the field.
>
> **[0:50](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=50)** We're seeing implementations of AI in everywhere from text to video to images to code to speech, 3D modeling, music, and much more.
>
> **[0:59](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=59)** And we're not necessarily saying that the companies on this page are going to be what we think are winners in their given spaces, but it is worth pointing out we're seeing more folks try to leverage AI and apply them to specific problems than we've ever seen.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=73)** So we expect a lot of areas of traditional work to be transformed or augmented by these tools.
>
> **[1:20](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=80)** But in this course, we'll be primarily focused on two tools, OpenAI's ChatGPT, and Google's Gemini, two of the most popular GPT tools on the market.
>
> **[1:29](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=89)** ChatGPT was developed by OpenAI, which has a very close relationship with Microsoft.
>
> **[1:34](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=94)** And Gemini was developed in-house at Google.
>
> **[1:37](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=97)** ChatGPT made headlines by releasing first in November, 2022.
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=101)** But Google's Gemini, which was formerly known as Bard, emerged as a strong competitor and was released shortly thereafter in early 2023.
>
> **[1:49](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=109)** And one thing to point out here is that later on in this course, you'll see us working through demos where we work with both ChatGPT and Gemini.
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=116)** But at the time, Gemini was actually known as Bard.
>
> **[1:58](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=118)** So you'll hear us refer to Bard, and if you hear that, that means we're referring to Google's Gemini.
>
> **[2:04](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=124)** They function exactly the same, but it's something to be aware of so you know exactly what we're talking about when we're mentioning Bard.
>
> **[2:10](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=130)** And one final thing I want to mention is that both of these tools have unique strengths and weaknesses, but overall, are very similar in terms of benefits and limitations for data professionals.
>
> **[2:19](https://www.linkedin.com/learning/chatgpt-and-sql/generative-ai-tools?u=76281980&t=139)** And speaking of limitations, let's take a look at some common pitfalls that can be encountered when working with these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (8), [[Gemini]] (6), ai (5), [[Google]] (4), product (2)
> **Versions:** 3.5 (1), 2.5 (1)
> **Definitions:** known as (2)
> **Env Vars:** gpt (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### Warning: Pitfalls of ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=0)** - [Narrator] Okay, so I've just spent the last several videos hyping up the achievements and capabilities of artificial intelligence, and while modern AI tools are certainly impressive and often very useful, they are by no means perfect tools, and so we need to be aware of some common pitfalls to get the most out of these tools and working with them.
>
> **[0:19](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=19)** The first and probably most concerning is that LLMs are known to hallucinate facts with total confidence.
>
> **[0:25](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=25)** There's a famous case circulating on social media, where a user asked ChatGPT to perform some research on a medical topic.
>
> **[0:32](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=32)** ChatGPT provided an extremely comprehensive response and cited a number of research papers and authors along the way.
>
> **[0:41](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=41)** The problem is that when the user went to go look up one of these papers and the set of authors, he found that they didn't exist at all.
>
> **[0:48](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=48)** So, ChatGPT had made up a paper and set of authors to support one of the claims that it was making that was incorrect.
>
> **[0:56](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=56)** So, you have to remember that these tools aren't perfect, and that you're ultimately responsible for verifying the outputs of these tools.
>
> **[1:03](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=63)** If you make a big false claim based on something ChatGPT tells you, OpenAI isn't going to take responsibility, you are going to be responsible.
>
> **[1:11](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=71)** Along these lines, it's also worth being aware that solutions provided may be suboptimal or entirely incorrect.
>
> **[1:18](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=78)** So, in some cases, ChatGPT will help you solve an analytical problem, it will just be a very bad or roundabout way to solve that problem, and again, these tools don't guarantee accuracy and might provide inefficient solutions.
>
> **[1:32](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=92)** Another thing to be aware of is that these tools are broad and often lack specific domain knowledge.
>
> **[1:38](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=98)** LLMs may not understand specific business context or the why behind the responses they produce.
>
> **[1:44](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=104)** So, when I'm working with ChatGPT to help me with Python code, it tends to do very well with the what and how.
>
> **[1:50](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=110)** What function should I use to perform this analysis and how should I perform them?
>
> **[1:55](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=115)** But it struggles with the why.
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=116)** If I need to filter some retail sales data down to a specific set of products, it will tell me how to do that, but it won't necessarily understand why I'm filtering down to a specific set of products.
>
> **[2:08](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=128)** And finally, LLMs are not capable of common sense or human judgment.
>
> **[2:12](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=132)** Models need specific objective inputs and may miss critical context that may seem obvious to humans.
>
> **[2:18](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=138)** These models tend to only be as good as the data that we give them, and if we are not giving them the full set of context, they will often miss the mark.
>
> **[2:27](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=147)** And so, after listening to all of these pitfalls, you might be a little bit skeptical about using these tools altogether, and so I want to be clear that even though there are some very dangerous pitfalls to using these tools, understanding that there are pitfalls to using these tools is half the battle.
>
> **[2:43](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=163)** If we don't treat these tools as a perfect source of truth, but rather as one additional source of input or information, we can get a lot out of them.
>
> **[2:53](https://www.linkedin.com/learning/chatgpt-and-sql/warning-pitfalls-of-chatgpt?u=76281980&t=173)** So, with that said, let's go ahead and take a look at how to access these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), data (2), [[Microsoft Products|Products]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), ai (1)
> **CLI Commands:** make (1), python (1)
> **Warnings:** be aware (2)
> **Speakers:** - [narrator] (1)

#### Accessing ChatGPT and Google Bard
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/accessing-chatgpt-google-bard?u=76281980)


### 3. Prompt Engineering

[↑ Back to Table of Contents](#table-of-contents)

#### Intro to prompt engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=0)** - [Instructor] Hey everybody, In this video we are going to talk about prompt engineering.
>
> **[0:04](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=4)** You may have heard the term prompt engineering in the context of AI tools.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=7)** We're going to walk you through what that means, and then finish with some tips so that you can write great effective prompts.
>
> **[0:14](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=14)** Don't worry, this is all pretty simple and we'll walk you through it step-by-step.
>
> **[0:18](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=18)** So first, a prompt is a question or a set of instructions that is going to serve as the input for AI tools like ChatGPT or Google Bard.
>
> **[0:28](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=28)** And prompt engineering is the practice of writing prompts that are going to generate the most effective and accurate responses.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=37)** So here's an example of a prompt.
>
> **[0:39](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=39)** This is the question that you're asking of the AI tools or the instruction that you're giving.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=43)** It doesn't have to be a question.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=44)** It could be some direction. You could see the example, can you please explain how the offset function works in Excel?
>
> **[0:51](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=51)** And you'll get back a response like this, the responses will vary.
>
> **[0:56](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=56)** This is an example from ChatGPT.
>
> **[0:58](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=58)** Google Bard works the same way, the other AI tools work the same way.
>
> **[1:01](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=61)** The main thing we want you to get here is the concept of a prompt and a response, and then our tips and best practices for writing really good prompts are to be as clear and specific as possible.
>
> **[1:12](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=72)** Try to include context and any examples if that's easy to do.
>
> **[1:16](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=76)** Establish roles for the specific use cases you're working with.
>
> **[1:19](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=79)** Set the tone or the level of complexity, and then understand the limitations of the model.
>
> **[1:24](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=84)** We'll walk you through each of these tips, and we'll do an example of a prompt, and then we'll improve that prompt by adding a little bit more context here.
>
> **[1:32](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=92)** Our pro tip here is to not get bogged down trying to nail the perfect prompt on the first try.
>
> **[1:38](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=98)** These tools work so quickly that it's really easy to refine and iterate if you don't like the quality of your response.
>
> **[1:44](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-prompt-engineering?u=76281980&t=104)** So try to write a good prompt, but don't spend too much of your energy trying to figure out if your prompt is perfect or not, just get in there and see what you get back as a result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (8), ai (4), [[Prompt Engineering]] (3), [[ChatGPT]] (2), [[Google]] (2)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - [instructor] (1)

#### Prompt tip: Be clear and specific
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=0)** - [Instructor] Hey everybody.
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=0)** In this video we're going to go through our first tip for prompt engineering to get better results from your AI tools.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=7)** And that tip is to be clear and specific.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=9)** The more specific you are when you're prompting these AI tools, the better the result is going to be.
>
> **[0:14](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=14)** So let's go through an example.
>
> **[0:16](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=16)** Here we've got a question, we're working in Excel, and we want to know how to calculate year over year growth.
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=21)** The response that we get back is good, but it could be even better if we told the AI tool exactly what we are trying to do.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=27)** So here's what a better prompt would look like.
>
> **[0:29](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=29)** You see now we're including the fact that we want an Excel formula, and we're also telling the AI tool where the data lives in cells C2 through C100 and cells B2 through B100.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=44)** And you see the response here. It's so much more clear.
>
> **[0:47](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=47)** It gives us the actual Excel formula, which is great.
>
> **[0:50](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=50)** And then it also gives a little explanation of it below.
>
> **[0:53](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=53)** So keep that in mind.
>
> **[0:54](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=54)** Try to be as clear and specific as you possibly can when you're writing these prompts.
>
> **[0:59](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=59)** And the pro tip here is if you're generating code, include details, like your variable names, your data types, your cell ranges, whatever you can do to be as specific as possible.
>
> **[1:07](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-be-clear-specific?u=76281980&t=67)** It will really help out your response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), [[Microsoft Excel|Excel]] (3), data (2), [[Prompt Engineering]] (1), prompt (1)
> **Env Vars:** c100 (1), b100 (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - [instructor] (1)

#### Prompt tip: Provide context
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-provide-context?u=76281980)

#### Prompt tip: Establish roles
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=0)** - [Instructor] In this video, we're going to give you our next prompt engineering tip to get better results from AI tools like ChatGPT and Google Bard, and that's to establish roles.
>
> **[0:08](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=8)** What that means is you can assign a role that the AI tool is going to play, and you can also assign a role that you, yourself, as the receiver of the information, is going to play.
>
> **[0:19](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=19)** So check out this example.
>
> **[0:20](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=20)** "What's the best way to clean data?"
>
> **[0:22](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=22)** ChatGPT comes back with a response here, but then we can add so much more context in terms of the role that we are going to be playing, a new data analyst for a retail business.
>
> **[0:32](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=32)** And then we want the AI tool to play the role of a data QA engineer and provide a step-by-step plan that we can follow.
>
> **[0:40](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-establish-roles?u=76281980&t=40)** So when we establish these roles, it's more clear to the AI tool exactly who the audience is, what you want to be getting in your response, and it can just really improve the quality of the result that you get back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), data (3), [[ChatGPT]] (2), next (1), [[Prompt Engineering]] (1)
> **Speakers:** - [instructor] (1)

#### Prompt tip: Set the tone
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=0)** - In this video, we're going to walk you through another tip for prompt engineering to get better results from AI tools like ChatGPT and Google Bard.
>
> **[0:08](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=8)** This time we're going to be talking about setting the tone, which can have a major impact on what you see as a response.
>
> **[0:13](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=13)** You could see an example here where we just say, explain regression analysis, but what does that mean?
>
> **[0:18](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=18)** Are we explaining regression analysis to somebody that's really technical?
>
> **[0:22](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=22)** Are we explaining it to a 4-year-old?
>
> **[0:24](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=24)** The more context you can give the AI tools in terms of how you want it to talk, the level things like that, the better it's going to do at giving you an output that matches what you really want.
>
> **[0:34](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=34)** So here in the improved prompt, you can see we say explain regression analysis in two sentences to a C-level executive at a marketing agency.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=44)** So here, it's not going to go as technical.
>
> **[0:46](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=46)** It's giving you kind of a quicker soundbite about what regression analysis is, and it's going to be more appropriate for that audience.
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=55)** Our pro tip here is to include something in the prompt that says, explain it to me as if you are explaining it to X, Y, Z and that could be a child, it could be somebody who's non-technical, somebody who isn't a data expert.
>
> **[1:08](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=68)** And in this way, you can control the tone and the complexity of the response that you're getting.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=73)** So try to keep this in mind.
>
> **[1:15](https://www.linkedin.com/learning/chatgpt-and-sql/prompt-tip-set-the-tone?u=76281980&t=75)** Being prescriptive about the tone can really have an impact on your results and can help you get a response that's going to be the most appropriate for your audience or for the problem that you're trying to solve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), prompt (2), [[Prompt Engineering]] (1), [[ChatGPT]] (1), [[Google]] (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - in (1)


### 4. ChatGPT for SQL

[↑ Back to Table of Contents](#table-of-contents)

#### Intro to ChatGPT for SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=0)** - [Instructor] Hey, everybody.
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=0)** In this section, we're going to talk about some common SQL use cases for AI tools like ChatGPT and Google Bard.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=7)** Here are some of the topics that we'll cover.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=9)** We'll have the AI tool explain a SQL concept.
>
> **[0:12](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=12)** We'll have it explain a SQL query.
>
> **[0:15](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=15)** We'll use it to comment your SQL code.
>
> **[0:17](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=17)** We'll use it as an error debugger.
>
> **[0:19](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=19)** We'll write a SQL query from scratch, and then we'll do some query optimization to improve the performance.
>
> **[0:25](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=25)** For each of these topics, I'll give you a detailed walkthrough, and we'll compare ChatGPT and Google Bard in a lot of the cases.
>
> **[0:33](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=33)** By the end of this section, we want you to be able to use AI as a personal coach to explain complex SQL code or concepts to you.
>
> **[0:41](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=41)** We want you to be able to use the AI tools to generate SQL queries from scratch.
>
> **[0:46](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=46)** We want you to understand how to use AI tools as an error debugger, which can be really helpful sometimes, and we want you to know that you can use these tools as a shortcut to add human-readable comments to your code.
>
> **[0:59](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=59)** So stick with me.
>
> **[1:00](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=60)** Enjoy these examples.
>
> **[1:02](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=62)** I hope you'll learn something.
>
> **[1:03](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=63)** As you'll see, in some of the use cases, the AI is really good and really effective.
>
> **[1:10](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=70)** In other use cases, it's a little flaky still.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=73)** We expect these tools to get much, much better over time.
>
> **[1:17](https://www.linkedin.com/learning/chatgpt-and-sql/intro-to-chatgpt-for-sql?u=76281980&t=77)** So you want to be learning them now so that as they're advancing and they become more effective, you've got these in your tool belt and you can use them to be the most effective SQL analyst you can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), ai (6), [[ChatGPT]] (2), [[Google]] (2)
> **Env Vars:** sql (8)
> **Speakers:** - [instructor] (1)

#### Explain fundamental SQL concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=0)** - [Instructor] Hey, everybody.
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=0)** In this video we're going to use ChatGPT and Google Bard to explain some SQL concepts and topics.
>
> **[0:06](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=6)** This is a very common use case.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=7)** If you are trying to learn, you're on the job and maybe you've got some SQL skills and you run into a concept that you need some help with, you might not have that SQL expert around that you can turn to for questions, but these tools are always there and they can do a pretty good job with this.
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=21)** So let's walk through how you can do that.
>
> **[0:23](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=23)** First, I always like to prime the AI with who I want it to be impersonating here.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=30)** So you'll be acting as a SQL expert.
>
> **[0:31](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=31)** You'll be coaching me as a junior coworker who is learning SQL and needs help from time to time.
>
> **[0:36](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=36)** I'm going to ask a specific question here and see if they can explain left join versus inner join.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=43)** And basically the key thing that I want to see here is how is it going to explain the difference in the results that are returned when there is or isn't a matching record in the right table?
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=55)** And let's take a look and see how well it does.
>
> **[0:57](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=57)** So here's kind of the key thing that I really wanted it to cover, however they differ in how they handle unmatched rows between the joined tables.
>
> **[1:06](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=66)** Awesome, that's great to see that here.
>
> **[1:08](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=68)** That's the key insight that we really want to explain and let's see if it does a better job of kind of digging into what that really means and giving a good example for the reader here.
>
> **[1:16](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=76)** So it says inner join returns only the rows where there's a match between the joined tables based on the specified condition.
>
> **[1:23](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=83)** It combines the rows from both tables where there's a join condition is satisfied and excludes any unmatched rows from either table.
>
> **[1:30](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=90)** I love that it says that if you don't specify that the rows are excluded, if there's no match, it can be a little harder for the reader to get their head around.
>
> **[1:40](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=100)** So that's great.
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=101)** It's got an example here.
>
> **[1:43](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=103)** I kind of wish it had given some specific data and illustrated, hey, here's this table, but the example is still good so that you can see the syntax.
>
> **[1:52](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=112)** And again, it really hammers only the matching rows are returned in the result set, which is great.
>
> **[1:57](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=117)** Then we get into left join, and you see the syntax is very similar.
>
> **[2:01](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=121)** We're just using left join instead of an inner join and we say left join returns all the rows from the left table.
>
> **[2:07](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=127)** Correct.
>
> **[2:08](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=128)** And it also explains what the left table is, so the table specified before the join keyword.
>
> **[2:14](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=134)** So if you were just new to the syntax and you didn't know that this was the left table, you would know right here, that's your left table because it's coming before the join keyword.
>
> **[2:24](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=144)** So it's actually really kind of helpful in its response to somebody who was brand new.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=149)** And then it says, if there are no matches found in the right table, null values are returned for the columns of the right table.
>
> **[2:34](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=154)** So that's great.
>
> **[2:35](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=155)** I think this is a pretty comprehensive explanation that it's going to return all the rows from the left table and null values for the left if there isn't a match.
>
> **[2:43](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=163)** So pretty solid here.
>
> **[2:45](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=165)** And then it comes back with a summary at the end.
>
> **[2:47](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=167)** Inner join returns only the matching rows between the two join tables.
>
> **[2:51](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=171)** Left join returns all the rows from the left table and the matching rows from the right table with null values for unmatched rows in the right table.
>
> **[2:59](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=179)** So ChatGPT did a good job with our first question here.
>
> **[3:03](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=183)** Let's do something similar here with Google Bard.
>
> **[3:07](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=187)** So again, prompting it to act as a SQL expert.
>
> **[3:10](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=190)** It's going to be coaching me as a newer learner to SQL and I'm going to ask specifically, I'm trying to store data in a numerical column in my SQL database.
>
> **[3:22](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=202)** Can you walk me through some of the most common data types that are used to store numbers in a database and in which specific cases they might be used?
>
> **[3:30](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=210)** So we'll see how Google Bard will do with this one.
>
> **[3:35](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=215)** Awesome.
>
> **[3:36](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=216)** So here we're getting integer, smallint, tinyint, decimal, numeric and float.
>
> **[3:43](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=223)** And really what I wanted to see was are they going to cover some integers?
>
> **[3:46](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=226)** Are they going to explain the difference between integers and decimal and then probably get into decimal and float?
>
> **[3:51](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=231)** Those are the three things that I was looking for.
>
> **[3:54](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=234)** Awesome that we've got that here.
>
> **[3:57](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=237)** It talks about the different ranges that these data types can hold.
>
> **[4:03](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=243)** Just eyeballing this, I think that all looks pretty good.
>
> **[4:08](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=248)** And then this is perfect.
>
> **[4:09](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=249)** The best data type to use for numerical column and your database will depend on the specific data you are storing.
>
> **[4:15](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=255)** For example, if you're storing customer IDs, it would be an integer type.
>
> **[4:19](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=259)** If you're storing product prices, you would need a decimal data type.
>
> **[4:22](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=262)** Absolutely.
>
> **[4:23](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=263)** Some additional tips for choosing the right data type.
>
> **[4:25](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=265)** Consider the range of values that you need to store.
>
> **[4:27](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=267)** That's good advice.
>
> **[4:28](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=268)** Consider the precision of values that you need to store.
>
> **[4:31](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=271)** So if you need to store numbers with decimal points, you'll need to use the decimal or numeric data type.
>
> **[4:38](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=278)** And then consider the performance requirements of your application.
>
> **[4:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=281)** So some data types such as decimal and numeric require more storage space than other data types such as integer.
>
> **[4:49](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=289)** If you're concerned about performance, you may want to choose a smaller data type, even if it does not provide the same level of precision.
>
> **[4:56](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=296)** So this is a really good piece here, just talking about that trade off, especially when you get to really large data sets, it really matters.
>
> **[5:03](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=303)** So, awesome.
>
> **[5:04](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=304)** I actually think this was another great response.
>
> **[5:08](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=308)** So hopefully these are good examples so that you can understand how you can use these AI tools to explain concepts that might be just out of your reach.
>
> **[5:17](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=317)** Depending on where you're at in your journey, you might be asking simpler questions or more complicated questions, but the concept will apply.
>
> **[5:24](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=324)** Personally, this is one of the use cases that I've seen the AI do a really good job with.
>
> **[5:30](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=330)** I have come across some issues where they explain something incorrectly or potentially could do a better job, but it's pretty good already and we can only expect this to get better over time.
>
> **[5:42](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=342)** There's definitely other use cases where it's not quite as good, but this is a solid one.
>
> **[5:47](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=347)** Try it out yourself.
>
> **[5:48](https://www.linkedin.com/learning/chatgpt-and-sql/explain-fundamental-sql-concepts?u=76281980&t=348)** You can see it's just as easy as popping in a question here, and pretty quickly you can get back a comprehensive response that's written in human language and can really help you out when you don't have somebody else to ask a question of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[SQL]] (8), [[Google]] (3), ai (3), database (3)
> **Env Vars:** sql (8)
> **Definitions:** is a  (4)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Explain a SQL query
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=0)** - [Instructor] Hi, everyone.
>
> **[0:01](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=1)** In this video we're going to talk through how you can use ChatGPT or Google Bard or any other chat-based AI tool to explain a SQL query that you're working with if you don't know exactly what's going on.
>
> **[0:12](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=12)** Like anytime we're using these tools, I'm going to prompt the AI tool with a little context.
>
> **[0:18](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=18)** So, I'm going to ask it to act as a senior analyst who's an expert in SQL and tell it that it will be helping me, a junior analyst on the team, understand SQL queries that we'll use together on the job.
>
> **[0:29](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=29)** And so then I'm going to ask it, can you please explain the following query to me?
>
> **[0:32](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=32)** And I always like to put a delimiter in here.
>
> **[0:35](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=35)** It can sometimes help the AI understand that something else is going on.
>
> **[0:39](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=39)** So you can do that in a number of ways.
>
> **[0:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=41)** That's something that I found to be pretty effective.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=43)** So here's the query that we want help with.
>
> **[0:45](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=45)** It's not too complicated.
>
> **[0:46](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=46)** Let's start running that and I'll walk you through this.
>
> **[0:49](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=49)** So basically, we are pulling data from the student's table and then joining to student attribution and to revenue.
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=55)** And we're getting a number of calculations, the count of the total students, the sum of the dollars spent, and then a calculation as spend per student.
>
> **[1:04](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=64)** And we're using left joins here.
>
> **[1:06](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=66)** We're grouping by the first column, which is attribution clean.
>
> **[1:10](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=70)** And then we're ordering by the students column here, so we'll have our largest groups at the top.
>
> **[1:16](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=76)** So let's see how it does with that.
>
> **[1:18](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=78)** It's a fairly simple query.
>
> **[1:20](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=80)** And let's see what we've got here.
>
> **[1:22](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=82)** So it just basically reiterates the select statement here and it's telling us where we're pulling student attribution from.
>
> **[1:31](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=91)** And I like this very simple description.
>
> **[1:33](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=93)** This column calculates the number of students by counting the ID values from the student's table.
>
> **[1:38](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=98)** Awesome, and it tells you that it's giving the alias students.
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=101)** Like that's just a very good, plain English description of what's happening.
>
> **[1:45](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=105)** And then same thing, I love this plain English description.
>
> **[1:48](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=108)** The column calculates the total spending by summing up the dollars value from the revenue table.
>
> **[1:53](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=113)** Again, awesome.
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=114)** And it notes the alias.
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=116)** And then same thing here, a really good description.
>
> **[1:58](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=118)** This column calculates the spending per student by dividing the total spending sum of dollars by the number of students count of s.ID and the result is aliased as spend per student.
>
> **[2:09](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=129)** So, this is really solid.
>
> **[2:11](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=131)** The explanation of the select statement is awesome.
>
> **[2:14](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=134)** Then the next part, it's talking about the from and the joins, and it says it uses two left join operations to connect students, student attribution and revenue tables.
>
> **[2:24](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=144)** I kind of would've loved if it had given an explanation of what left join is doing here versus an inner join, especially, you know, talking to a more junior person on the team who might be getting up to speed.
>
> **[2:36](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=156)** So I'd probably take something off of my grading here for that, but it's not bad.
>
> **[2:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=161)** It's definitely correct.
>
> **[2:42](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=162)** It's just, I would've loved a little more explanation on the join type there.
>
> **[2:45](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=165)** Then we talk about grouping by one, and it's saying this part of the query groups the results by the first column, absolutely correct.
>
> **[2:52](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=172)** And grouping by this column means that the query will return aggregated results for each value in the attribution clean column, perfect.
>
> **[3:00](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=180)** And then finally, we talk about the order by and we are ordering by the second column, which is students, in descending order.
>
> **[3:09](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=189)** This means that the rows will be sorted based on the number of students in descending order.
>
> **[3:13](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=193)** So this is again, a pretty clear plain English description of what's going on, and it's got this nice summary here too.
>
> **[3:20](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=200)** So overall, I think this did pretty good.
>
> **[3:22](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=202)** I would give this something like an A minus.
>
> **[3:24](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=204)** Pretty happy with it.
>
> **[3:25](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=205)** Next, let's tab over to Google Bard and just get a quick look at what that is.
>
> **[3:30](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=210)** I probably won't go through in as much detail, but let's see what Google Bard has to say about the same question and how they approach the result here.
>
> **[3:39](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=219)** So again, they talk about the select statement first, attribution clean, the number of students in the student table, as calculated by the count function, the total amount of revenue generated by all students, calculated by sum, the average amount of revenue generated per student as calculated by the sum function.
>
> **[3:56](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=236)** Again, this is really good plain English description and it's pretty succinct.
>
> **[3:59](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=239)** I like how they did it here.
>
> **[4:01](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=241)** Talks about the tables being joined on the student ID column.
>
> **[4:06](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=246)** Ensures that all data is returned for the same students.
>
> **[4:09](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=249)** Talks about grouping on the attribution clean column and ordering the results by the total spend column in descending order.
>
> **[4:16](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=256)** Ah, so this is really important.
>
> **[4:20](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=260)** We are actually ordering by the second column, which is account of students.
>
> **[4:27](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=267)** So this part here where it says end orders, the results by the total spend column in descending order, that's actually incorrect.
>
> **[4:34](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=274)** So, sometimes you'll see these chat tools get things wrong.
>
> **[4:38](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=278)** It's just something to be very careful with.
>
> **[4:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=281)** It's one of the reasons why you need to have the core foundational skills as an analyst to be able to think critically about this because you can't always trust everything that you see.
>
> **[4:51](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=291)** So in general, this one, pretty good, but it's gotten that part of it wrong, which is potentially a little dangerous depending on who's using this.
>
> **[5:01](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=301)** So then, one part that I really do love here is it actually gave some business context, which is pretty solid.
>
> **[5:06](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=306)** So it says, this query can be used to identify which attribution sources are generating the most revenue.
>
> **[5:11](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=311)** By looking at the average spend per student, you can also see how much revenue each attribution source is generating per student.
>
> **[5:18](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=318)** This information can be used to make decisions about which attribution sources to focus on in order to increase revenue.
>
> **[5:25](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=325)** So, awesome.
>
> **[5:26](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=326)** I love that it had this additional business context in there.
>
> **[5:30](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=330)** Definitely would give it points for that.
>
> **[5:32](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=332)** Take off some points for the inaccuracy of how the ordering was done up here.
>
> **[5:37](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=337)** But overall, this is a pretty good job.
>
> **[5:41](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=341)** And then at the very bottom, we get into the select, the from, the join, the group buy, and the order buy.
>
> **[5:45](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=345)** It talks through each one of those in detail.
>
> **[5:48](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=348)** So overall, this is another one of those examples where these AI tools are already pretty good, but they're not perfect and sometimes you can get back some incorrect information.
>
> **[6:00](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=360)** What I have personally found is the more complicated the queries get, the more likely the AI will come up with some inaccurate responses.
>
> **[6:11](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=371)** So, you do need to have that critical thinking.
>
> **[6:14](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=374)** You need to put on your analyst hat and have some good, solid fundamentals.
>
> **[6:20](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=380)** And if you can do that, these tools will really help fill in some gaps.
>
> **[6:25](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=385)** But you do need to be careful, you need to kind of question what you're seeing here.
>
> **[6:29](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=389)** And one great way, like as we've seen here, is you could use ChatGPT, get a quick read, and you could also use Google Bard or you could use some other chat-based AI tool and kind of compare what they're doing.
>
> **[6:40](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=400)** So, I expect these tools to continue to get better and better and have fewer mistakes.
>
> **[6:47](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=407)** They're still at their infancy, so super useful.
>
> **[6:51](https://www.linkedin.com/learning/chatgpt-and-sql/explain-a-sql-query?u=76281980&t=411)** Just be careful today, but learn how to use them, 'cause we expect them to be really good a few years down the line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (6), [[Google]] (4), [[SQL]] (3), [[ChatGPT]] (2), data (2)
> **Env Vars:** sql (3)
> **Definitions:** means that (1), is a  (1)
> **Warnings:** be careful (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Add comments to a SQL query
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/add-comments-to-a-sql-query?u=76281980)

#### Debug and troubleshoot SQL code
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=0)** - [Instructor] Hi everyone.
>
> **[0:01](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=1)** In this video we're going to be walking through another use case where SQL Analysts can use tools like Chat GPT or Google Bard in their workflow to improve their performance.
>
> **[0:13](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=13)** And the use case we're going to be talking about today is using chat GPT or other tools to troubleshoot your errors in your SQL code.
>
> **[0:22](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=22)** So let's jump into MySQL Workbench.
>
> **[0:25](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=25)** I'll show you this pretty simple query.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=27)** Don't worry about the data here, it's just dummy data.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=30)** But basically we are pulling data from the student's table, joining it to student attribution and to revenue.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=37)** And we're basically counting the students, summing the revenue and then doing a calculation to get revenue per student.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=44)** And then we are including attribution clean, and we're grouping by that attribution clean first column.
>
> **[0:51](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=51)** And then we're going to be ordering by the number of students descending.
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=55)** So our biggest groups get at the top.
>
> **[0:57](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=57)** And you can see this query runs fine right now.
>
> **[1:01](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=61)** So I'm going to intentionally put in a couple of errors here.
>
> **[1:04](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=64)** So sometimes folks will accidentally leave a space instead of an underscore.
>
> **[1:10](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=70)** That's one that comes up a lot.
>
> **[1:12](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=72)** Another issue that's pretty common is just forgetting a comma.
>
> **[1:15](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=75)** So I'm putting these two booby traps in here.
>
> **[1:17](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=77)** Let's jump into chat GPT and we will prompt with first some context.
>
> **[1:24](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=84)** We always like to give context and say what we want the AI tool to be functioning as.
>
> **[1:31](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=91)** So I'm saying you're acting as a senior analyst who is an expert in SQL.
>
> **[1:35](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=95)** You'll be helping me, a junior analyst on your team understand SQL queries that we will use together on the job.
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=101)** And for the next piece, I'm just typing in that I'm running into an error, can you help?
>
> **[1:45](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=105)** I'll put down just a delimiter and then I'm going to paste the code in here and we'll run it and we will see what Chat GPT comes up with.
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=114)** So certainly I can help you identify the error in your SQL query, upon reviewing your query, I notice that you're missing a comma.
>
> **[1:59](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=119)** Awesome, that is beautiful, cleaned that up.
>
> **[2:03](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=123)** Here's the corrected query.
>
> **[2:05](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=125)** In the corrected query, I added a comma as total revenue and I also added a space between revenue per and student in the as alias.
>
> **[2:12](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=132)** Now the query should execute without syntax errors.
>
> **[2:15](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=135)** That was actually flawless.
>
> **[2:17](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=137)** This one has been a little hit or miss for me.
>
> **[2:19](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=139)** I've tried it sometimes and it hasn't worked.
>
> **[2:22](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=142)** Sometimes it's come up with errors that aren't really errors, but this was phenomenal.
>
> **[2:27](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=147)** I'd give this an A plus.
>
> **[2:28](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=148)** It was fast, it nailed the two errors right off the bat.
>
> **[2:31](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=151)** So really, really good job by chat GPT here.
>
> **[2:34](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=154)** Let's just run the same thing in Bard for good measure and see what we get here.
>
> **[2:40](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=160)** Awesome, so same thing pretty fast.
>
> **[2:43](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=163)** Sure, I can help you with that.
>
> **[2:44](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=164)** Here are a few things that might be wrong with SQL Query.
>
> **[2:46](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=166)** You're trying to calculate the revenue per student, but you are only grouping by the attribution clean column.
>
> **[2:51](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=171)** This means that you are grouping all of the students together regardless of their studentID.
>
> **[2:56](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=176)** You need to group by the student ID column in order to calculate the revenue per student.
>
> **[3:00](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=180)** No, that's not correct.
>
> **[3:01](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=181)** If we were trying to get it by an individual student, we would need to group by student.
>
> **[3:06](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=186)** But in this case, we're talking about revenue per student as a metric, defined as the total revenue divided by the total number of students in each of those attribution clean groups.
>
> **[3:18](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=198)** So it's kind of misinterpreting the name of that column.
>
> **[3:21](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=201)** And then separately, it says you are trying to order the results by student column, but this column does not exist.
>
> **[3:27](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=207)** You need to order the results by the total revenue column.
>
> **[3:30](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=210)** Okay, so that's just not correct.
>
> **[3:35](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=215)** The students' column will exist just as much as the total revenue column will exist.
>
> **[3:40](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=220)** So this is pretty off.
>
> **[3:42](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=222)** And what's interesting here is it did actually clean up the error with the underscore here, and it did also clean up the error with the comma, but then it imagined these other two errors that weren't really here.
>
> **[3:57](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=237)** Alright, so not perfect here, but this is a good excuse to show you another best practice here.
>
> **[4:03](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=243)** So let's pull up Workbench again.
>
> **[4:05](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=245)** And previously, basically, I didn't even look at an error message.
>
> **[4:09](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=249)** We never ran this code to get the error.
>
> **[4:11](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=251)** I just planted those errors there.
>
> **[4:13](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=253)** But in the response when you're using any kind of a SQL editor, you can pull back the response here that you get as an error code.
>
> **[4:22](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=262)** And I'm going to do a little prompt engineering and try to improve the prompt and see if we can get a better result here.
>
> **[4:28](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=268)** So first, I'm going to copy the error code in here, and then I'm going to go back and get the beginning of the prompt and I'm going to say same thing, senior analysts helping me out.
>
> **[4:39](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=279)** I'm running into an error in my SQL query.
>
> **[4:42](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=282)** The error message is below.
>
> **[4:47](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=287)** I'll do dot dot dot here, I'll do this.
>
> **[4:53](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=293)** And then I'll have another delimiter and I'll say, the full SQL query is below.
>
> **[5:05](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=305)** And I will then copy back in that full SQL query and we'll see if that helps.
>
> **[5:12](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=312)** And remember, there's two errors.
>
> **[5:14](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=314)** The SQL error message that we got is only going to catch that first one, but let's see if it will actually just steer a little bit in the right direction.
>
> **[5:24](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=324)** The error message you're getting is a syntax error.
>
> **[5:26](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=326)** Okay, we're doing better this time.
>
> **[5:28](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=328)** This means that there's something wrong with the way you have written your SQL query, the specific areas that you're trying to divide a column by a column, but the columns are not compatible.
>
> **[5:36](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=336)** Ugh, brutal.
>
> **[5:38](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=338)** These columns are totally fine to be used here.
>
> **[5:40](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=340)** They're both aggregate functions.
>
> **[5:42](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=342)** We're using them in an aggregate calculation here.
>
> **[5:44](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=344)** So again, this actually failed.
>
> **[5:47](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=347)** So I'm trying to show you this good practice of including the error message that will help the AI guide you in the right direction.
>
> **[5:56](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=356)** It didn't actually work here, but hopefully the prompt can still be a good example for you of how you can actually include a little bit more information.
>
> **[6:05](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=365)** This use case in general is one that I've seen be fairly hit or miss.
>
> **[6:10](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=370)** Sometimes it nails it like chat GPT did here.
>
> **[6:13](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=373)** Sometimes it invents errors that don't exist like we saw with Bard, and it can miss kind of the obvious things as well.
>
> **[6:20](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=380)** And it's not always that way.
>
> **[6:22](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=382)** Sometimes chat GPT gets it wrong, sometimes Bard gets it right.
>
> **[6:26](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=386)** Really I think the most important point to illustrate here is that it can be really valuable, but it can also be fairly inconsistent.
>
> **[6:33](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=393)** So you can use this as a thinking partner to help call out those errors if you're stuck and you can't figure out what's going on.
>
> **[6:40](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=400)** But you also have to put on that critical thinking hat and have that strong foundation in the analytical workflow and your understanding of SQL skills.
>
> **[6:50](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=410)** And if you have that, this can be a valuable tool, but you do need to be able to gut check the work because it's not always going to be perfect here for you.
>
> **[6:57](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=417)** It's also worth saying again that these tools are still pretty much at their infancy.
>
> **[7:03](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=423)** They're getting feedback from users all the time.
>
> **[7:06](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=426)** They're getting better very rapidly, so still super useful.
>
> **[7:10](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=430)** Even if it's not perfect to start learning how to use these, they will get better and better.
>
> **[7:15](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=435)** And in a few years, I think the error rates are going to be way down.
>
> **[7:19](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=439)** So you want to know how to use this.
>
> **[7:21](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=441)** It's going to save you a lot of time at some point in your career.
>
> **[7:23](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=443)** Hopefully this is helpful.
>
> **[7:25](https://www.linkedin.com/learning/chatgpt-and-sql/debug-and-troubleshoot-sql-code?u=76281980&t=445)** Next time you run into an error that you're struggling with, try popping it into one of these AI tools and see if it gets you out of the jam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (13), prompt (4), data (3), ai (3), next (2)
> **Env Vars:** sql (13), gpt (7)
> **Definitions:** means that (2), is a  (2), is an  (1), defined as (1)
> **Best Practices:** best practice (1), good practice (1)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** studentid (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Create a SQL query from scratch
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=0)** - [Instructor] Hey everybody.
>
> **[0:01](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=1)** In this video we're going to be talking about how a SQL analyst can use AI tools like ChatGPT and Google Bard to create SQL queries from scratch.
>
> **[0:11](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=11)** So like we always do, I'm going to provide some context here.
>
> **[0:14](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=14)** I'm telling it it's going to act as a SQL expert and it's going to be helping me, a non-SQL expert create some reporting.
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=21)** And the next thing I'm going to do is just describe the tables that we have.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=27)** So we've got two tables that we need to work with.
>
> **[0:31](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=31)** First table's called students.
>
> **[0:32](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=32)** It's got these four columns.
>
> **[0:34](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=34)** The second table is called revenue.
>
> **[0:35](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=35)** It has these columns.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=37)** I'm not saying anything like student ID is the column that they should be joined on.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=43)** I've typically found that the AI tools are actually smart enough to figure this out, which is pretty impressive.
>
> **[0:49](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=49)** It's one of the use cases that they tend to be a little bit better at.
>
> **[0:53](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=53)** So let's ask it just a fairly simple question here and we'll say, can you create a query to pull a list of the most valuable students in terms of how much revenue they have generated?
>
> **[1:05](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=65)** All right, so this is taking forever.
>
> **[1:06](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=66)** I'm just going to copy this.
>
> **[1:08](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=68)** I'm going to start a new chat and I'm going to try GPT-4 and just see if that will work any faster.
>
> **[1:16](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=76)** There we go.
>
> **[1:18](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=78)** Alright, great.
>
> **[1:19](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=79)** So let's take a look at the response and see how it did.
>
> **[1:21](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=81)** So it says it's going to join the two tables based on student ID.
>
> **[1:24](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=84)** Great, and then aggregate the dollars USD for each student.
>
> **[1:28](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=88)** Fantastic so far.
>
> **[1:29](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=89)** So it is pulling student ID, the created time, the segment and the student goal, and then it's doing a sum of all revenue from the revenue table as total revenue.
>
> **[1:42](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=102)** That's a good calculation.
>
> **[1:43](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=103)** So so far this select statement looks good.
>
> **[1:46](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=106)** It's pulling from students, it's joining on revenue group by students, student ID.
>
> **[1:52](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=112)** So we're grouping by that first column.
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=114)** So this one, depending on your settings, this query might run or it might throw an error because we're grouping by students, it's okay to have all of these three non-aggregated columns.
>
> **[2:09](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=129)** The data will actually make sense, but sometimes this will actually fail depending on your implementation.
>
> **[2:15](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=135)** So for example, if you're using MySQL Workbench, there's two settings.
>
> **[2:19](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=139)** There's a setting that will allow this to run.
>
> **[2:21](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=141)** And then there's another setting that would only allow the query to run if you either didn't have these non-aggregated columns that weren't included in the group by or if you included them in a group by.
>
> **[2:33](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=153)** So just something to be aware of.
>
> **[2:36](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=156)** This one, depending on your implementation may or may not run, but if it runs, it will work based on the structure of this data.
>
> **[2:44](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=164)** And then we're going to order by total revenue descending.
>
> **[2:47](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=167)** So you've got your most valuable students at the top.
>
> **[2:50](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=170)** I'd say this is pretty good.
>
> **[2:51](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=171)** Then the description here also makes sense.
>
> **[2:55](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=175)** I love this note here.
>
> **[2:56](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=176)** Please note that this query does not subtract refunded dollars USD from the dollars USD.
>
> **[3:01](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=181)** I didn't talk about what's in these columns.
>
> **[3:04](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=184)** It interpreted refunded dollars USD, and understood that if refunds is a consideration, you would need to subtract that from the revenue.
>
> **[3:13](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=193)** Awesome.
>
> **[3:14](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=194)** And it even gave me this little calculation if I wanted to subtract that out and use this as total revenue with refunded dollars.
>
> **[3:20](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=200)** So I would rate this very highly.
>
> **[3:22](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=202)** The only thing I would take off is these non-aggregated columns here in the select, which like I said, may or may not work.
>
> **[3:29](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=209)** So let's try to make this a little more complicated and just see how well it can do.
>
> **[3:35](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=215)** I'll say, now can you write a query to pull the number of students in each segment and how much revenue each segment has generated?
>
> **[3:42](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=222)** Let's see how it does with that.
>
> **[3:44](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=224)** So it'll be pretty similar, but now it's going to have to be slicing it by the segment field.
>
> **[3:48](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=228)** And right off the bat, this looks pretty good.
>
> **[3:51](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=231)** It's pulling the segment from students, a count of student ID, and it's using distinct.
>
> **[3:56](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=236)** So we're not going to count any student ID twice, fantastic.
>
> **[3:59](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=239)** And then we're doing a sum of dollars USD as total revenue.
>
> **[4:03](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=243)** Same thing.
>
> **[4:04](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=244)** It says if we want to use the refunds, then we have this extra calculation here we can swap in.
>
> **[4:12](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=252)** So really solid here.
>
> **[4:13](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=253)** I want to take this same prompt over to Google Bard and just take a look at that, see how it does.
>
> **[4:20](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=260)** But generally, very solid performance here.
>
> **[4:22](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=262)** So let's run this.
>
> **[4:25](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=265)** Awesome, so pulled this back really fast.
>
> **[4:28](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=268)** It's a little more clean.
>
> **[4:29](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=269)** It didn't have those extra columns that were in there, which again, not necessarily wrong to have them, but this is definitely more clean.
>
> **[4:35](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=275)** This query that they've provided here, this will run in any implementation of SQL.
>
> **[4:42](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=282)** Interestingly, they're not using the student table at all.
>
> **[4:47](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=287)** Basically decided that because the revenue's in the revenue table, you could just group on students, that is actually totally fine.
>
> **[4:55](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=295)** It's a little simpler.
>
> **[4:56](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=296)** The only thing that I would say, if you wanted to include students with no revenue, you would need to start with that student table as we did before.
>
> **[5:04](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=304)** But again, because I said, can you create a query to pull a list of the most valuable students?
>
> **[5:09](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=309)** Obviously the ones with no revenue are not the most valuable students, so this is totally fine and a good explanation of what's happening here.
>
> **[5:18](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=318)** So just in plain English, someone can understand what's happening, they get a little walkthrough.
>
> **[5:23](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=323)** So yeah, really solid here.
>
> **[5:25](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=325)** Let's go with that follow up question again and just kind of push it a little bit and see if it can do multiple calculations, but typically pretty good.
>
> **[5:35](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=335)** And notice that as I threw in this next question, I didn't have to give it all the same context because again, this is sort of conversational within the conversation.
>
> **[5:45](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=345)** It will understand the chat context and it will keep that history there.
>
> **[5:50](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=350)** So let's take a look at how it did.
>
> **[5:54](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=354)** It's interesting to see that it decided to do a subquery so it's selecting from the revenue table, it's saying that it's going to pull segment from the revenue table.
>
> **[6:03](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=363)** But let me just check.
>
> **[6:04](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=364)** I don't think the way we described the revenue table, that segment is actually in there.
>
> **[6:10](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=370)** So if these were the only columns, so we're in that table, the query would be just incorrect.
>
> **[6:15](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=375)** You'd get an error saying that the segment column does not exist.
>
> **[6:19](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=379)** And it would be because of this trying to pull in a select from revenue, the segment column, it would fail right there.
>
> **[6:26](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=386)** So did a good job on the first one.
>
> **[6:28](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=388)** Went a little more complicated by using a subquery than I would really recommend.
>
> **[6:34](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=394)** I would just do this with a simple join between the two tables is plenty.
>
> **[6:39](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=399)** It's a little harder to follow this, and obviously the biggest problem is just, it's an incorrect query.
>
> **[6:45](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=405)** ChatGPT is doing great with this.
>
> **[6:48](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=408)** Bard did pretty good with the first calculation.
>
> **[6:51](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=411)** Kind of missed on the second one.
>
> **[6:53](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=413)** Only other thing to note here is I did jump into using the GPT-4 because GPT-3.5 was hung up.
>
> **[7:02](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=422)** I think it's probably just really busy right now.
>
> **[7:03](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=423)** That's something that happens.
>
> **[7:05](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=425)** But in general, this is a use case that I've found these AI tools to be pretty good at.
>
> **[7:09](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=429)** Again, it helps to have some SQL understanding because like we showed here, it's not always correct.
>
> **[7:16](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=436)** There was the little nuance about having additional columns in the select statement from ChatGPT.
>
> **[7:21](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=441)** Bard actually included a column that didn't exist in the table in its query, so it would've just failed entirely.
>
> **[7:27](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=447)** You'll also notice I had to describe the tables here.
>
> **[7:30](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=450)** So for somebody who's total expert, is this faster than doing it?
>
> **[7:35](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=455)** You know, hard to say, depends on what you're doing.
>
> **[7:37](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=457)** But if you're not a total expert and you're just getting up to speed, this can be a great way to kind of play around, generate some code, try it on your own, see if it seems like it's working or if it's not.
>
> **[7:48](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=468)** But remember to have that critical eye because it's not always going to be perfect.
>
> **[7:52](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=472)** So you need to be gut checking all this stuff.
>
> **[7:55](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=475)** And if you can do that, this can be a really valuable tool.
>
> **[7:58](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=478)** And like we've talked about with some of the other use cases, this is one that the AI tools are getting feedback on all the time.
>
> **[8:05](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=485)** And I think in a couple of years it's going to be light years better, the error rates are going to be way down and there's probably going to be other shortcuts that we can use that will just make this stuff fantastic for improving your efficiency as an analyst.
>
> **[8:18](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=498)** So highly recommend everybody learns how to do this, how to provide that context to describe the tables, describe the business problem and the report you're trying to generate.
>
> **[8:26](https://www.linkedin.com/learning/chatgpt-and-sql/create-a-sql-query-from-scratch?u=76281980&t=506)** And if you can do that, these tools can really help you out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), ai (4), [[ChatGPT]] (3), [[Google]] (2), next (2)
> **Env Vars:** sql (6), usd (5), gpt (3)
> **CLI Commands:** make (3), mysql (1)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** be aware (1), note that (1)
> **Versions:** 3.5 (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)

#### Optimize SQL queries
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=0)** - [Instructor] Hi, everyone.
>
> **[0:01](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=1)** In this video, we're going to talk about how a SQL database analyst can use AI tools like ChatGPT and Google Bard to improve their workflow and the specific use case we're talking about here is helping to optimize your SQL queries.
>
> **[0:16](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=16)** For me, there's really two places that this comes up on the job.
>
> **[0:20](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=20)** One, I'll be writing a query, doing kind of a lot of exploration into the data, massaging things to get the correct result, making sure I'm understanding all the different caveats and then I'll get a result, but the way that I got there because of all the exploration that I did might not be the most efficient way to write the query.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=37)** So that's one example where optimization needs come in for me and then the other one is, if I've got a complicated query that I've been using for a long time and new components keep getting layered on, sometimes that code can get unwieldy and if you don't do some optimization work on it, it will be pretty slow in terms of its performance, pretty costly on the server.
>
> **[0:58](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=58)** So it's a great practice to go in from time to time and just optimize any queries that you're using frequently.
>
> **[1:04](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=64)** So before I even put anything into ChatGPT, I want to walk you through just this demo query that I've put together.
>
> **[1:11](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=71)** I've put some booby traps in here intentionally.
>
> **[1:13](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=73)** Some of them are very obvious that I think ChatGPT and Bard will definitely get.
>
> **[1:19](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=79)** Other ones are a little more nuanced so we'll see.
>
> **[1:21](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=81)** So basically, this query is looking at the student's table joining to StudentAttribution on first name equals first name and last name equals last name and I've actually got a little error here, so I'm just going to pop that out to make sure that makes sense.
>
> **[1:37](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=97)** So this is kind of the first thing that I'm hoping that they'll catch, they might not.
>
> **[1:42](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=102)** Doing this join here on first name equals first name and last name equals last name, there's a couple of reasons why this is bad.
>
> **[1:50](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=110)** One, in general, just going on what's probably a VARCHAR column and another VARCHAR column as your join criteria, that's not going to be nearly as efficient as joining on an integer that's likely indexed which we would have in the student_id columns here.
>
> **[2:07](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=127)** Then next we have this WHERE condition here and there's a lot of things going on with that WHERE condition that aren't ideal.
>
> **[2:14](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=134)** So first, we're limiting to students between student one million and student two million, so we just want that block in that group and we could also be doing that in the inner joins so we don't have to bring in all these records first and then filter at the end.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=149)** So my guess is, it's going to bring this criteria into this inner join and then the next one here that just makes absolutely no sense is we have this WHERE condition for StudentAttribution.attribution_clean is like YouTube and it has these character matching wildcards here.
>
> **[2:48](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=168)** So that's really inefficient in your queries.
>
> **[2:52](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=172)** It's fine if you had to have it like that, but because we have this other criteria that says StudentAttribution_clean equals YouTube, every single thing that matches the second WHERE condition is going to match this one.
>
> **[3:05](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=185)** So this one is both expensive and completely irrelevant.
>
> **[3:09](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=189)** So I think that is one they'll probably pull out entirely.
>
> **[3:13](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=193)** Then the last thing here is a little more subtle.
>
> **[3:16](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=196)** In this SELECT statement, we're doing a count of distinct values and we're coalescing student_id and student_id from two tables, students and StudentAttribution.
>
> **[3:29](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=209)** Because we're doing an inner join down here, those student_id values are always going to be the same and there's not going to be any null values for either one.
>
> **[3:36](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=216)** So again, that one doesn't really make sense, but actually just to be fair, I'm going to add another criteria here, which is sa.student_id = s.student_id, but now it's very clear and having this coalesced doesn't really make sense.
>
> **[3:53](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=233)** So you could pick to count either one of them.
>
> **[3:55](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=235)** There's an extra operation in there that just doesn't really matter.
>
> **[3:58](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=238)** So let me copy this query into ChatGPT and I'll put it in here, I'm going to pop a little delimiter up here and I'm also going to add some context like we always do.
>
> **[4:09](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=249)** So you see we've got this query in here.
>
> **[4:11](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=251)** "You'll be acting as a SQL expert and will be helping me, a junior member on your team, understand how to optimize my SQL query to improve its performance, could you please help me with the following query?
>
> **[4:21](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=261)** Write the query in a more efficient way and explain to me the changes you made like I'm someone who is pretty new to SQL."
>
> **[4:28](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=268)** And I'm going to say, "In the most efficient way," just so it doesn't make one of these changes and think it did the job, I want to see all of the improvements possible.
>
> **[4:39](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=279)** So right off the bat, we're flying here.
>
> **[4:42](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=282)** All right, let's run through this and see how it did.
>
> **[4:44](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=284)** Love that it removed that coalesce, awesome.
>
> **[4:48](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=288)** We've got the inner join on students' first name is first name, last name is last name, student_id = student_id.
>
> **[4:55](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=295)** So we still have the WHERE condition down here, that's okay.
>
> **[4:59](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=299)** Left join, revenue on student_id, that's the same as before, student_id between one million and two million and it did cut out one of the conditions here, but it actually cut out the wrong one.
>
> **[5:12](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=312)** So here the logic is actually going to change, so the results will be different.
>
> **[5:18](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=318)** So maybe you have a second attribution_clean like YouTube course that's not equal to YouTube, those would be included here, because we're using the pattern matching.
>
> **[5:30](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=330)** So I definitely would take off some points here.
>
> **[5:33](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=333)** It's great that it's making some improvements, but it's actually changing the result, which is pretty problematic if you didn't realize how that was working.
>
> **[5:41](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=341)** I'd give this kind of a middle of the road grade.
>
> **[5:43](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=343)** It caught some things, but the actual change of the answer from the change in the logic was pretty brutal.
>
> **[5:49](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=349)** Let's see what it says about that.
>
> **[5:51](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=351)** The condition studentattribution_clean equals YouTube is redundant since your already have a LIKE condition.
>
> **[5:57](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=357)** The LIKE condition covers the equality check as well, so there's no need to have both.
>
> **[6:02](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=362)** So it realized that these two things were very similar, the problem is, it didn't realize that it should stay with the more restrictive condition or else you're going to expand your logic to include more results.
>
> **[6:16](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=376)** Interesting, it says it removed the unnecessary DISTINCT in the count function.
>
> **[6:20](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=380)** We don't need the DISTINCT keyword in the count function.
>
> **[6:24](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=384)** So let me look back at the original query.
>
> **[6:25](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=385)** So we're using DISTINCT here and doing the count there.
>
> **[6:28](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=388)** So in both cases, we have the DISTINCT, but I don't even think it actually removed the DISTINCT here.
>
> **[6:35](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=395)** It still has it and it still has it.
>
> **[6:38](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=398)** So that's interesting.
>
> **[6:39](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=399)** It is talking about removing a DISTINCT from the count function, which it's not.
>
> **[6:44](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=404)** So yeah, after looking at this a little bit, I think the actual query that it came back was a little bit off, caught some stuff, didn't catch some other stuff and then the description was a little bit problematic, because like we've talked about with some of the other things that we've seen in ChatGPT or Google Bard, it speaks very confidently about doing this, removing the DISTINCT in the count function, but it didn't actually do that, right?
>
> **[7:10](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=430)** So it's just a little confusing.
>
> **[7:12](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=432)** Let's try to pull this exact same prompt into Bard and see how it does.
>
> **[7:18](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=438)** All right, so we've got the whole thing in here, including the context and query.
>
> **[7:23](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=443)** And it's a pretty fast return here.
>
> **[7:26](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=446)** We've got the attribution_clean, we've got that DISTINCT, it removed the coalesce, we've got this inner join just on student_id.
>
> **[7:36](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=456)** So it assumes if the student_id is the same in both tables, then the first and the last name is the same in both tables.
>
> **[7:43](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=463)** I actually love this change here.
>
> **[7:45](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=465)** I think it's a very good assumption when you have a column like this named student_id and it's in both tables, it's typically existing there as the primary key to foreign key mapping, so that's a very good assumption.
>
> **[7:57](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=477)** And same thing, it did the same as ChatGPT.
>
> **[8:01](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=481)** It included the more broad pattern matching for attribution source being like YouTube and it omitted the more restrictive criteria of making sure that value was equal to YouTube.
>
> **[8:14](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=494)** So it knew that you shouldn't have both, but it actually cut out the wrong one again, so.
>
> **[8:21](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=501)** And then there's a final mistake here with the order by being on revenue per student, so now it's ordering by this final column, the fourth column, when originally we wanted the results ordered by the second column, just the count of students.
>
> **[8:36](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=516)** So pretty interesting here.
>
> **[8:38](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=518)** I have had better results with this in the past, but definitely a very good eye-opening case to remember that these tools are still in their infancy.
>
> **[8:49](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=529)** They are pretty prone to error and while they can be useful and add value, you need to have that critical thinking and you need to put on your analyst hat and bring a solid set of foundational SQL skills.
>
> **[9:02](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=542)** If you have those, this can be really useful and effective, you can have sort of a thinking partner to bounce ideas.
>
> **[9:08](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=548)** Just remember that right now, the ideas aren't always going to be good.
>
> **[9:13](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=553)** I think in a couple of years, with more and more feedback from tons of users on this, it's going to be amazing.
>
> **[9:19](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=559)** The error rates are going to go down and it will really help, but today, you've got to be careful and understand it for the imperfect tool that it is.
>
> **[9:27](https://www.linkedin.com/learning/chatgpt-and-sql/optimize-sql-queries?u=76281980&t=567)** Next time you need some help optimizing a query, take a look at the results yourself and see what you think.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[ChatGPT]] (6), next (3), [[Google]] (2), database (1)
> **Env Vars:** distinct (8), sql (6), where (5), varchar (2), select (1)
> **Code Identifiers:** student_id (13), attribution_clean (3), studentattribution_clean (1)
> **SQL:** where (5), varchar (2), select (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Prerequisites:** you need to have (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Key takeaways and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=0)** - [Instructor] All right, so we just took a look at a ton of different ways analysts can use ChatGPT and Google Bard in their day-to-day work.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=7)** In some of the demos, ChatGPT and Bard performed amazingly well and gave us exactly what we needed.
>
> **[0:13](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=13)** In other cases, they fell flat or even lied to us.
>
> **[0:17](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=17)** But the point of these demos wasn't to show how accurate or inaccurate these tools are, but rather that tools like ChatGPT will change the way data professionals work.
>
> **[0:26](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=26)** Even though these tools will never be perfect, they're going to continue to get better.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=30)** So we expect there to be more cases where they perform exceptionally well and fewer where they fall flat.
>
> **[0:36](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=36)** And so analysts who are able to leverage these tools will be able to stay competitive and excel in the age of AI.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=43)** Analysts who shun these tools or stay out of the game will have a harder time keeping up with their colleagues that are AI-augmented.
>
> **[0:50](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=50)** And of course, as we saw, AI isn't perfect and may hallucinate or provide incorrect responses.
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=55)** Again, we expect this to get better over time, but you still always have to take these responses with a grain of salt and remember that you're ultimately responsible for verifying the accuracy of the model output.
>
> **[1:08](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=68)** Prompt engineering can dramatically improve response quality.
>
> **[1:12](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=72)** If you want to get good results, you need to provide good input.
>
> **[1:15](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=75)** So make sure to be specific, provide meaningful context, and iterate to provide accurate and relevant responses.
>
> **[1:21](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=81)** And finally, as we saw, AI tools can be applied to many types of analytics use cases.
>
> **[1:26](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=86)** Tools like ChatGPT can help troubleshoot or generate code, automate tasks, and much more.
>
> **[1:32](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=92)** And before we let you go, let's take a brief look at the future.
>
> **[1:36](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=96)** In terms of revolutionizing the way analysts work, ChatGPT and Bard are only the beginning.
>
> **[1:42](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=102)** In just the handful of months it's been since ChatGPT was released, we've already heard major announcements from companies like Microsoft and Tableau on integrating AI tools into the software analysts use on a daily basis.
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=114)** So these AI tools are going to be increasingly integrated with our analytics work.
>
> **[1:59](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=119)** And just like the internet at the turn of the century, AI tools will fundamentally change the future of work.
>
> **[2:05](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=125)** And so our advice for moving forward is stay up to date with new tools and technology.
>
> **[2:10](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=130)** The AI industry is evolving quickly, so make sure to follow the latest news and developments from trusted companies and thought leaders in this space.
>
> **[2:18](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=138)** Be curious but skeptical.
>
> **[2:20](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=140)** While we expect some amazing new AI developments in the coming years, we also expect to see some unrealistic promises from companies trying to capitalize on the hype.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=149)** Just as we've seen with every major tech trend in the past few decades, we do see some very concrete and influential improvements in the space, but there's also a lot of people trying to get in on the hype.
>
> **[2:40](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=160)** Staying open-minded is going to enable you to take the best of what's to come, but staying skeptical is going to help you avoid some of the traps that these false promises present.
>
> **[2:50](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=170)** And finally, build a well-rounded skillset.
>
> **[2:53](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=173)** So at Maven Analytics, we've always preached this, but this has never been more important.
>
> **[2:58](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=178)** As tools like ChatGPT begin to automate more complex technical tasks, focus on developing your uniquely human skills, like problem solving, strategic thinking, communication, and business acumen.
>
> **[3:09](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=189)** If you're able to continue to grow in these areas, then AI is only going to make you better at your job.
>
> **[3:15](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=195)** AI will not only help you work through the technical aspect of your job more quickly, it will also free up a lot of time for you to focus on the big picture.
>
> **[3:24](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=204)** So that's going to conclude this course.
>
> **[3:25](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=205)** We at the Maven team are very grateful to have had you on board, and we're looking forward to seeing how you implement these tools in your day-to-day work.
>
> **[3:33](https://www.linkedin.com/learning/chatgpt-and-sql/key-takeaways-next-steps?u=76281980&t=213)** If you come up with anything you want to show off, please reach out to us on social media, and we'll catch you later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (11), [[ChatGPT]] (7), [[Analytics]] (3), [[Google]] (1), data (1)
> **CLI Commands:** make (3)
> **Cross-References:** as we saw (2)
> **Analogies:** just like (1), picture (1)
> **Best Practices:** make sure to (2)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[John Pauler]]
- [[Maven Analytics]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence (AI)
- ChatGPT
- SQL

## Path Context

### In [[Transform Your Programming with AI Coding Tools]]
← [[Refactoring with GitHub Copilot]] | **4 of 7** | [[Software Testing Assistance with GitHub Copilot AI]] →

## Appears In

- [[Transform Your Programming with AI Coding Tools]]

## Related Courses

_Courses sharing skills:_

- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT
- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Power BI- Working Together with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Learning ChatGPT for Business Analysis]] — Artificial Intelligence (AI), ChatGPT
- [[Generative AI for Data Engineering- ChatGPT Power Tips]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)