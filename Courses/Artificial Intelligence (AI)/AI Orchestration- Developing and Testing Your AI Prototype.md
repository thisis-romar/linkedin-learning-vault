---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-orchestration-developing-and-testing-your-ai-prototype
url: "https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype"
duration_minutes: 58
duration: 58m
level: Intermediate
updated: 4/9/2025
learners: 2763
skills:
  - Prototype Validation
  - Software Quality Assurance
  - AI Software Development
  - Artificial Intelligence (AI)
  - AI Orchestration
exercise_files: true
github: "https://github.com/LinkedInLearning/ai-orchestration-developing-and-testing-your-ai-prototype-5211016"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQES1rTsnPi3cQ/learning-public-crop_675_1200/B4EZWwZFpEG0Ac-/0/1742421122014?e=2147483647&amp;v=beta&amp;t=Y85moEEB3QN2DCcAk23GWziLQT4AcMYn8WNKPqqbMvs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[AI Orchestration- Designing the Prototype Architecture and Data Strategy]]'
next_courses:
  - '[[AI Orchestration- Validation and User Feedback and Performance Metrics]]'
path_nav: '[{"path":"Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning","position":4,"total":5,"prev":"AI Orchestration- Designing the Prototype Architecture and Data Strategy","next":"AI Orchestration- Validation and User Feedback and Performance Metrics"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/prototype-validation
  - skill/software-quality-assurance
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/ai-orchestration
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Orchestration-%20Developing%20and%20Testing%20Your%20AI%20Prototype.md)

![AI Orchestration: Developing and Testing Your AI Prototype](https://media.licdn.com/dms/image/v2/D4E0DAQES1rTsnPi3cQ/learning-public-crop_675_1200/B4EZWwZFpEG0Ac-/0/1742421122014?e=2147483647&amp;v=beta&amp;t=Y85moEEB3QN2DCcAk23GWziLQT4AcMYn8WNKPqqbMvs)

# AI Orchestration: Developing and Testing Your AI Prototype

> This course takes AI developers through the process of building and testing an AI prototype, with a focus on hands-on implementation. Instructor Nayan Saxena begins by showing you how to set up a basic prototype and integrate your AI models. He covers best practices in testing and debugging AI models, along with tools to help streamline the orchestration and testing process.This course is part of 

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype) | 58m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Developing an AI prototype](#developing-an-ai-prototype)
  - [What you should know](#what-you-should-know)
- [**1. Building an AI Prototype**](#1-building-an-ai-prototype) (3 videos)
  - [What is an AI MVP?](#what-is-an-ai-mvp)
  - [Choosing tools and frameworks for AI prototyping](#choosing-tools-and-frameworks-for-ai-prototyping)
  - [Building an MVP from scratch](#building-an-mvp-from-scratch)
- [**2. Debugging and Troubleshooting AI Applications**](#2-debugging-and-troubleshooting-ai-applications) (3 videos)
  - [Common AI prototype issues](#common-ai-prototype-issues)
  - [Debugging overfitting and underfitting](#debugging-overfitting-and-underfitting)
  - [Handling data-related errors](#handling-data-related-errors)
- [**3. Testing and Debugging Your AI Prototype**](#3-testing-and-debugging-your-ai-prototype) (3 videos)
  - [Why testing matters in AI development](#why-testing-matters-in-ai-development)
  - [Unit testing for AI components](#unit-testing-for-ai-components)
  - [Performance testing your AI model](#performance-testing-your-ai-model)
- [**4. Preparing Your Prototype for Production**](#4-preparing-your-prototype-for-production) (3 videos)
  - [Transitioning from prototype to production](#transitioning-from-prototype-to-production)
  - [Optimizing your prototype for scalability](#optimizing-your-prototype-for-scalability)
  - [Common production pitfalls](#common-production-pitfalls)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and additional resources](#next-steps-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Developing an AI prototype
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=0)** - [Nayan] Artificial intelligence is transforming industries at an unprecedented pace, but taking an AI idea from concept to a functional prototype can feel overwhelming.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=10)** How do you choose the right tools, build a model, and test it for real-world performance?
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=16)** That's exactly what you'll learn in this course.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=19)** You'll learn practical techniques for improving performance, addressing common pitfalls, and preparing your prototype for production.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=27)** Whether you're building a simple sentiment analysis tool or a more complex LLM-based model, this course will give you the skills you need to bring your AI ideas to life.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=39)** Hi, I'm Nayan Saxena, a deep learning expert, and in this course, we'll walk through the end-to-end process of building an AI prototype, from selecting the right frameworks, to training, debugging, and testing your models, so let's dive right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), functional (1), llm (1), [[Deep Learning]] (1)
> **Env Vars:** llm (1)
> **Speakers:** - [nayan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we dive into the course, it's important to take a look at what you need to know as prerequisites to understand the course better.
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=7)** What's required is that you have some comfort with the Python programming language, especially for data manipulation and algorithms.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=15)** It's also important that you know how to work with Jupyter Notebooks, as we'll be using some of the Jupyter Notebook functionalities to write our AI MVPs.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=25)** It's also important that you have basic machine learning knowledge, familiarity with key concepts like neural networks, loss functions, and gradient descent.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=33)** And finally, if you have some knowledge of large language models, including their structure, capabilities, and applications, that would be useful as well.
>
> **[0:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=42)** Now let's take a look at how you can set up your environment for the course.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=48)** First, head on over to the course GitHub page where you will see an MVP Transformer For TextJupyter Notebook.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=57)** Click on this, and on the top right corner, you'll see a download button.
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=62)** Press that and download the file.
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=66)** Once the file is downloaded, what you can do is head on over to Google Colab, click on File, Upload notebook, and then choose the Download file.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=77)** And there you go.
>
> **[1:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=78)** Now you can write code and run the code simultaneously in Google Colab with me as we go through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Python (Programming Language)|Python]] (1), [[Programming]] (1), [[Data Manipulation]] (1), [[Algorithms]] (1)
> **Tools:** jupyter (2), colab (2), github (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** python (1)
> **Env Vars:** mvp (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Building an AI Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### What is an AI MVP?
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=0)** - [Instructor] AI development is complex, time-consuming, and resource-intensive.
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=5)** Before fully committing to an AI project, we need to test whether it works as expected.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=11)** This is where the concept of an MVP or a minimal viable product comes in.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=18)** So what is an MVP?
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=19)** An AI MVP is the simplest version of your AI solution that still delivers some core value.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=26)** It helps you validate your idea, test feasibility, and gather early feedback without wasting months of work on unnecessary features.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=36)** The key principle here is simple, Build, Test, Learn.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=41)** Instead of developing a massive, fully-trained AI system right away, we build a lightweight prototype that demonstrates the most essential functions of our AI system.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=52)** An AI MVP is not about perfection.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=55)** It's about providing feasibility.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=58)** Let's break down its key characteristics.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=60)** First, it has focused scope.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=63)** It solves one well-defined problem.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=65)** Instead of trying to build a general purpose AI, we focus on a single task.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=71)** Next, it requires minimal data.
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=73)** A production AI model may need millions or billions of data points, but an AI MVP should work with a smaller, manageable data set, just enough to test feasibility.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=85)** Third, the AI model itself does not need to be perfect.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=89)** It prioritizes functionality over accuracy because the goal is validation, not perfection.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=95)** Fourth, an MVP must support rapid iteration after getting feedback.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=101)** We can improve our model and adjust our approach without excessive development costs.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=106)** And finally, even a basic AI MVP should have a user interface so that your stakeholders can try it out.
>
> **[1:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=112)** Whether it's an API, a simple chatbot, or a visualization, this is quite useful.
>
> **[1:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=119)** Now, let's break down the AI development process step by step.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=123)** So we begin by identifying the problem.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=126)** Instead of building an AI just for the sake of AI, we need to ensure it aligns with real business need.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=133)** This is where most of the friction lies with stakeholders.
>
> **[2:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=136)** Then we collect minimal data.
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=139)** We don't need a huge data set.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=141)** Instead, we collect enough representative data to train a small prototype.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=146)** This could be a few thousand labeled samples instead of millions.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=150)** Make sure there are some out-of-distribution samples in this data to make it representative of the general sample.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=158)** Choose a simple model.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=159)** For instance, if we're building an AI MVP for text classification, I might start with logistic regression instead of a full transformer model, like GPT-4.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=169)** And finally, we train the AI MVP.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=172)** We'll train a small-scale version of our AI model, and this could include fine-tuning, where we try to get our initial results.
>
> **[3:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=181)** We're not aiming for perfection yet.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=183)** We will then test the AI MVP with our users so that they can interact with it.
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=188)** This can be our stakeholders or a beta testing group, and a basic interface, like a simple web app or a chatbot, can be really useful at this step.
>
> **[3:17](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=197)** Finally, we gather some feedback from the real world.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=201)** We also analyze the results and validate our MVP.
>
> **[3:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=205)** Now, if it's meeting our needs based on these metrics, we then improve it further or pivot our approach to different AI techniques.
>
> **[3:35](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=215)** So let's take a look at some real-world AI MVP examples.
>
> **[3:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=219)** First, we have Google Duplex.
>
> **[3:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=221)** This is quite interesting because when it was first introduced, it was not a full-fledged AI assistant.
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=227)** Instead, it had one job, booking reservations over the phone.
>
> **[3:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=232)** This focused scope allowed Google to refine its voice before expanding into other domains.
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=239)** Now, Google Duplex is part of the Google Home family.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=242)** Then we have Tesla's Autopilot, which did not start off as an autonomous self-driving system.
>
> **[4:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=248)** Earlier versions focused on basic lane-keeping and auto-braking.
>
> **[4:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=253)** Over time, more features were added based on real-world data and feedback.
>
> **[4:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=258)** And finally, we have ChatGPT.
>
> **[4:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=261)** The earliest models were simple chatbots with limited context awareness.
>
> **[4:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=265)** It wasn't until OpenAI iterated on feedback and improved model architectures that it became the highly capable assistant we know today.
>
> **[4:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=273)** These examples show that successful AI products start small with an MVP and improve over time through iteration and learning.
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=283)** So a strong AI MVP has to be focused, lightweight, and designed for rapid iteration and learning.
>
> **[4:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=291)** It might lead you to your next AI breakthrough.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (25), data (8), [[Google]] (4), next (2), chatbot (2)
> **Env Vars:** mvp (14), api (1), gpt (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Choosing tools and frameworks for AI prototyping
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=0)** - [Instructor] How do we select the right AI framework, API, or development tool for rapid prototyping?
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=6)** Let's try to understand this concept in more detail.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=10)** Selecting the right AI tool is critical.
>
> **[0:14](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=14)** Do you need a machine learning framework, an API, or a cloud-based service?
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=19)** The choice you will make will impact how fast you can build, how well your model performs, and how scalable your system is.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=27)** A good decision means faster development and better performance.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=32)** A bad decision can mean high costs, wasted time, and a prototype that does not scale.
>
> **[0:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=40)** To choose wisely, we need to evaluate four key factors.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=45)** Speed.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=47)** How fast can you build the prototype and test it?
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=50)** Scalability, which is, will the tool be able to handle real world demands.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=57)** Cost.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=58)** If the tool is open source or free, or a paid cloud service?
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=62)** And finally, customization.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=65)** Do you need to train from scratch or can you use pre-trained models?
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=72)** There are three major AI prototyping approaches that can help us here.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=77)** First, traditional AI frameworks.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=80)** If you need full control over your model architecture, frameworks like TensorFlow, PyTorch, and JAX, let you build from scratch.
>
> **[1:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=90)** However, this requires data collection, model training, and access to compute resources.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=98)** Then we have API based AI services.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=102)** If you need fast results, using pre-trained models from OpenAI, Anthropic, AWS Bedrock, Azure AI, or Google Vertex AI, you can use these services that provide AI without training from scratch.
>
> **[1:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=119)** You simply need to request to an API and the AI generates a response.
>
> **[2:04](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=124)** And finally, we have cloud AI platforms.
>
> **[2:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=128)** If you need to fine tune models or deploy large scale applications, SageMaker, Vertex AI, Azure, ML, and Hugging Face, allow you to train, fine tune, and then deploy the AI at scale.
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=142)** Each of these tools have their own pros and cons, and I encourage you to evaluate them depending on the problem you're trying to solve.
>
> **[2:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=153)** This chart shows how different AI tools fit into the three categories.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=158)** If you want to build AI models from scratch, use traditional AI frameworks like Scikit-learn, TensorFlow and PyTorch.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=167)** These provide flexibility, but require domain expertise.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=172)** If you want plug-and-play AI services, you can use APIs like OpenAI's GPT, Anthropic Claude, AWS Bedrock, or Azure AI.
>
> **[3:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=182)** These services let you send a simple request to a powerful AI model without needing to train anything or having too much domain knowledge.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=192)** And to scale, we have cloud AI platforms like AWS SageMaker, Google Vertex AI, and Hugging Face, which will allow you to train, fine tune and deploy AI models efficiently.
>
> **[3:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=207)** Note how some of these API based services overlap with the cloud-based services.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=213)** This makes integration even much more easier down the line.
>
> **[3:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=220)** So here's a summary.
>
> **[3:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=221)** If you need full customization and full control, go with traditional AI frameworks.
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=227)** If you need a fast and efficient AI prototype or an API-based service, go with OpenAI, GPT, Anthropic Claude, or AWS Bedrock.
>
> **[3:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=238)** And if you want scalability, use cloud systems.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=242)** Always consider speed, cost, scalability, and flexibility when choosing a tool.
>
> **[4:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=248)** And remember, using pre-trained AI models can save months of development time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (21), api (6), cloud (6), aws (4), [[Scalability]] (3)
> **Env Vars:** api (6), aws (4), gpt (2), jax (1)
> **CLI Commands:** aws (4), make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Building an MVP from scratch
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=0)** - [Speaker] It's time now to build our minimal viable product.
>
> **[0:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=3)** We'll be building out a powerful but simple sentiment analysis model using the Transformers library.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=10)** So let's dive right in.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=11)** First, install the required packages and import all of the necessary libraries, which I've done here.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=18)** I'll also be setting a seed for reproducibility.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=21)** And now, let's set up our data.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=23)** I've created a very small data set of product reviews, just 10 examples with clear, positive and negative sentiments.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=31)** In real applications, you'd see thousands of examples, but this works perfectly for demonstration.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=38)** We've got comments like, "I love this product.
>
> **[0:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=40)** It's amazing for positive sentiment, and this product is terrible.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=45)** Avoid at all costs", for negative.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=48)** In our code, we'll be splitting this into training and test sets, which I've done here with a 70-30 split.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=55)** You can see that here.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=58)** Next, we'll see the magic of transformer models like DistilBERT.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=63)** These models are pre-trained and we'll be starting from one of these checkpoints.
>
> **[1:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=68)** These models have already learned language patterns from massive data sets, so we can fine tune them for specific tasks such as ours with relatively little data.
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=79)** First, I'll be loading the DistilBERT tokenizer, which will convert text to numerical tokens.
>
> **[1:26](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=86)** This tokenization step is crucial because neural networks can't process raw text.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=92)** The tokenizer handles all of the complexities of language, and it will split our words, handle punctuation, and add special tokens needed by our model to fine tune on the text that we just created.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=105)** Now for the model itself, I'll, again, be using the DistilBERT sequence classification model.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=111)** This is a lightweight version of BERT that's about 40% smaller, but retains 97% of its language understanding capabilities.
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=120)** We'll be configuring it for sequence classification with two possible labels, which I've specified here.
>
> **[2:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=128)** And finally, in our training configuration, notice, we're just using train epochs, which means our model will see our entire data set only three times.
>
> **[2:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=140)** We're also using a small batch size of two and adding some weight decay for regularization.
>
> **[2:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=147)** So let's run this and see what our results look like.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=150)** At the end of my script, I'm also evaluating my model by calling trainer.evaluate, and then finally, calculating the accuracy and then generating a final report and saving the model.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=163)** These steps can vary depending on the library you're using.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=167)** Keep in mind, we're using transformers, so it's fairly simple to do it in this library.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=172)** So let's run this and see how the results look like.
>
> **[2:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=176)** As you can see in our results, we have a bunch of output here, but let's focus on the training output.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=183)** Looking at the results on our test set, what we can see is that the accuracy is about 67%, and the classification report that we've generated here shows something interesting.
>
> **[3:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=196)** Our model is doing much better at identifying negative reviews compared to positive ones, and with our tiny dataset, this isn't surprising, but it highlights how you'd want to ensure balanced data in real applications.
>
> **[3:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=211)** What's great about this approach is how quickly we can get a sentiment analyzer with minimal code and data.
>
> **[3:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=218)** And there you go.
>
> **[3:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=219)** We have a model that we just created and fine-tuned, and we have it saved and ready-to-go for such use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), product (4), [[Tokens]] (2), next (1), [[Transformer Models]] (1)
> **Prerequisites:** install (1), set up (1)
> **Env Vars:** bert (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [speaker] (1)


### 2. Debugging and Troubleshooting AI Applications

[↑ Back to Table of Contents](#table-of-contents)

#### Common AI prototype issues
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=0)** - [Instructor] Let's try to understand the key pitfalls in AI prototyping, and how to avoid them.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=6)** AI prototypes often fail due to fundamental problems in model training, data quality, and system design.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=13)** These arise both in traditional machine learning models and large language models.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=19)** So for traditional AI models, we have three major problems.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=24)** First is overfitting, where the model memorizes the training data instead of learning general patterns.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=30)** Then we have under fitting, where the model is too simple to capture any meaningful trends.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=36)** We have data quality issues, where the training data may be biased, incomplete, or noisy.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=43)** LLM-based prototypes, which use API-based AI models or retrieval augmented generation systems face different challenges.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=52)** The APIs can be unpredictable, generate hallucinations, or cost too much at scale.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=58)** And in retrieval systems, if your retrieval systems feed incorrect or irrelevant data, your AI becomes unreliable.
>
> **[1:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=68)** So let's try to understand what overfitting is.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=70)** Overfitting is one of the most common issues in AI development.
>
> **[1:14](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=74)** It happens when your model becomes too specialized in the training data, memorizing every detail instead of learning general patterns that work in the real world.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=85)** Symptoms of overfitting would be extremely high accuracy on training set, but low on the test set, a training loss that keeps increasing but a validation loss that increases, and overconfident predictions that fail in real-world scenarios.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=102)** There are a few techniques we can use to fix this.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=105)** We can apply regularization techniques like L1 or L2 regularization, weight decay, or dropout layers in our model.
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=114)** We can use data augmentation to increase the variance in our training samples by including more out of distribution samples, and we can reduce model complexity.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=125)** If your neural network is too deep or has too many parameters, maybe it's time to simplify it.
>
> **[2:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=132)** Underfitting is the opposite of overfitting.
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=135)** It happens when a model is too simple to learn from data effectively.
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=139)** You'll notice underfitting if your model is just not learning at all, it has low accuracy on both training and test set, and fails to recognize meaningful patterns in any input.
>
> **[2:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=151)** So the solutions here are quite simple.
>
> **[2:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=153)** It might be preferable to use a more powerful model, train for longer, and fine-tune your hyperparameters using a hyperparameter sweep.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=163)** So these hyperparameters are learning rate, bad size, number of epochs, or if you're using a gradient booster tree, then the length of your tree, the number of nodes and so on.
>
> **[2:55](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=175)** Performing feature engineering is also quite useful to fix this issue to extract better insights from raw data, because this may indicate what we're about to talk about next, which is data quality.
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=188)** Data quality will fail your model if the data is not good.
>
> **[3:14](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=194)** So the common issues include noisy data, which is mislabeled samples, duplicates, and errors that make training unstable.
>
> **[3:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=204)** If your training data is biased, then that's a major red flag and that has to be resolved.
>
> **[3:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=209)** And finally, data leakage.
>
> **[3:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=210)** This is a bit nuanced, but essentially if your features contain information about what you're trying to predict and the model looks extremely artificially good in your testing but fails in real world applications, then maybe there's some data leakage happening, where there's features that indicate or correlate really well with your output feature.
>
> **[3:54](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=234)** Solutions here are cleaning and pre-processing our data, balancing our data sets, and using feature selection again to remove irrelevant data.
>
> **[4:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=245)** LLMs are extremely powerful, but they also have major challenges.
>
> **[4:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=250)** So if you're building your prototype using LLMs, be careful about hallucinations, where LLMs confidently generate incorrect information.
>
> **[4:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=258)** High costs, calling OpenAI or anthropic APIs frequently can be expensive, and then rate limits and latency as well.
>
> **[4:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=268)** Many APIs have strict rate limits, causing delays.
>
> **[4:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=272)** For RAG systems, the biggest issue is your data quality again.
>
> **[4:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=277)** If your system pulls bad information, your outputs will be misleading.
>
> **[4:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=281)** So solutions would include fine-tuning models and using RAG to improve accuracy using hybrid search methods like BM25 plus vector search for better document retrieval, and using APIs with batch processing and caching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (20), ai (5), feature (2), rag (2), [[Search]] (2)
> **Env Vars:** rag (2), llm (1), api (1), bm25 (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Debugging overfitting and underfitting
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=0)** - [Instructor] It's time now to tackle one of the most fundamental challenges in machine learning, the balance between underfitting and overfitting.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=8)** With transformer models having millions of parameters, finding that sweet spot becomes especially critical.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=15)** In our notebook, we'll be creating three different versions of our original sentiment analysis MVP.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=22)** First, we'll be creating an underfit model, then an overfit one and one that is balanced.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=30)** So let's dive right in.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=31)** Here, I have a function that creates these three different kinds of models.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=36)** For the underfit model, my parameters are quite simple.
>
> **[0:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=40)** I'm using only one training epoch, which is too low, and heavy regularization to prevent it from learning properly, even on that one epoch.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=50)** Then I have the underfit trainer that trains this model and records the predictions and the evaluations.
>
> **[0:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=59)** Keep in mind, we're still using the same DistilBERT-base uncased model with two labels.
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=66)** This is important to keep our comparison fair.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=69)** Next, I have the overfit model.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=72)** For this model, I'll be using 10 epochs, which is a lot, and zero regularization.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=80)** What I'll also be doing, which you can see here, is I'm using a smaller training data set.
>
> **[1:26](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=86)** So, instead of using all of the 10 examples that we had, we'll be using seven.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=92)** Similar to the above example, I'll be using the DistilBERT-base uncased model and then specifying the trainer and then running the trainer to train the overfit model.
>
> **[1:44](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=104)** And, finally, I have a balanced model.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=107)** This model has balanced training and regularization parameters, including a reasonable number of epochs, and it uses our entire dataset.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=117)** This model will also be trained and evaluated similarly to the previous ones.
>
> **[2:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=122)** And finally, what my function does is record all of the results in an organized manner using a dictionary.
>
> **[2:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=130)** Great, so now that we have this function to do all of the work for us, let's run this and then see how the model performance compares.
>
> **[2:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=140)** I also have some visualization code here that will help us visualize some of these comparisons.
>
> **[2:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=147)** So let's run this and see how it looks like Looking at the output, which is quite vast, what we see is the underfit model has a training accuracy of close to 43%, but somehow it managed 67% on the test set.
>
> **[2:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=166)** This negative gap is unusual and likely reflects variance in our tiny data set rather than true generalization.
>
> **[2:54](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=174)** The overfit model tells a classic story.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=177)** If you look closely, we have 100% accuracy on the training data, but only 67% again on the test data.
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=186)** This model has essentially memorized the training examples, but still struggles with new data.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=192)** And most interestingly, our balanced model achieves perfect accuracy on both training and test sets.
>
> **[3:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=200)** With a larger data set, we'd rarely see such perfection, but it demonstrates finding really good hyperparameters.
>
> **[3:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=209)** If we look at the graphs, they display the same information visually.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=213)** As we can see, the underfit model versus the balanced model show a stark difference in how the training and test accuracy compare.
>
> **[3:44](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=224)** This demonstrates that the classic machine learning dilemma is true.
>
> **[3:48](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=228)** If your model is too simple or hasn't trained enough, it won't capture the patterns.
>
> **[3:53](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=233)** And for transformer-based models specifically, it's important that we train them just enough.
>
> **[4:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=241)** To combat this issue, as you saw, we simply trained the model for three epochs and did not use too much regularization.
>
> **[4:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=251)** To prevent overfitting, we can add more training data and use techniques like early stopping or weight decay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Transformer Models]] (1), next (1), [[Stark (Accessibility Software)|Stark]] (1)
> **Env Vars:** mvp (1)
> **Cross-References:** as you saw (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Handling data-related errors
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=0)** - [Instructor] How to detect, diagnose, and fix missing data, noisy data, outliers, and data leakage in AI systems.
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=7)** Let's take a look.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=10)** The single most important rule in AI is this, garbage in, garbage out.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=15)** No matter how sophisticated your model is, if the data is flawed, AI will fail.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=21)** Bad data can lead to misleading predictions, biased outcomes, and unreliable AI systems.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=28)** There are four main data issues that can break your AI model, missing data, noisy data, outliers, and data leakage.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=37)** Each of these problems require specific debugging techniques, which we'll explore next.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=43)** So let's take a look at missing data.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=45)** Missing data is a silent killer.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=47)** It sneaks in from human errors, system failures, or even privacy related data removals.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=54)** If missing data is minimal, you might drop the affected rows, but if the gaps are large, better techniques are needed.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=61)** We can use some stuff like statistical imputation, where we fill in missing values with the mean, median, or mode.
>
> **[1:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=67)** We can take it one step further and use ML-based imputation using models like KNN or Bayesian methods to predict missing values.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=77)** And, finally, if nothing works, it's good to use robust ML algorithms like XGBoost and LightGBM as examples, which can handle missing data natively.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=89)** Noisy data occurs when the dataset contains inaccurate, mislabeled, or redundant information.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=96)** This makes it harder for the AI model to learn meaningful patterns.
>
> **[1:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=100)** Common symptoms of noise include inconsistent labels where the training data contains errors, duplicates in your data, which adds unnecessary weight to certain features, and random fluctuations, making patterns harder to detect.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=117)** So if it looks like noise, it most likely is.
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=120)** To fix noisy data, clean the data set by removing duplicates and correcting mislabeled entries.
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=127)** You can use pandas for this.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=129)** Train models with noise-resistant losses.
>
> **[2:14](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=134)** There's a long list of losses in scikit-learn, and you can use any one of those, which are noise resistant, to fix this issue.
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=142)** And finally, you can use denoising techniques like autoencoders or statistical filtering to remove irrelevant signals.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=152)** Outliers are extreme values that can distort AI models.
>
> **[2:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=156)** They might be caused by faulty data collection or genuine rare events.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=162)** Usually outliers are detected using box plots and Z-scores to identify extreme values, and interquartile range is used to define thresholds.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=172)** Once you see these outliers, they can be removed.
>
> **[2:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=176)** However, be careful.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=177)** They can only be removed if they are due to data errors.
>
> **[3:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=180)** They can be transformed using log scaling or clipping to reduce their impact.
>
> **[3:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=185)** And they can be handled with robust models like decision trees, which are less sensitive.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=192)** And finally, we have data leakage, which is our silent model killer.
>
> **[3:17](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=197)** This is a very common issue that is found in multiple production models, and it happens when models accidentally learn from test data, making it look better than it actually is.
>
> **[3:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=209)** Leakage can happen when training data contains test samples, leading to over optimistic accuracy.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=216)** Time sensitive data is not split correctly in time series models, causing the model to predict future events using future data.
>
> **[3:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=225)** And finally, if feature selection includes leaked information about your target variable, like a label encoded in a feature, then data leakage can happen.
>
> **[3:55](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=235)** To prevent data leakage, ensure strict separation of training and test data sets.
>
> **[4:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=241)** Use time-based splits in forecasting problems, and double check feature selection pipelines to avoid unintentional leaks.
>
> **[4:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=250)** To systematically debug data related issues, take a look at this flow chart.
>
> **[4:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=255)** It's quite a structured process.
>
> **[4:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=258)** First, we identify the type of the issue.
>
> **[4:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=261)** It can be missing data, noise, outliers, leakage, or maybe all of them.
>
> **[4:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=267)** Once you identify the issue, we go to the node in the flow chart.
>
> **[4:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=272)** If it's missing data, you decide between statistical imputation or MAML-based methods.
>
> **[4:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=278)** If the data is noisy, you can clean it or use noise resistant models.
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=283)** If outliers are present, analyze them with box plots and scaling techniques, and if you suspect data leakage, check how your data split is working and review feature engineering steps.
>
> **[4:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=296)** To systematically debug data related issues, follow this structured process.
>
> **[5:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=301)** Identify the type of issue, missing data, noise, outliers, or leakage.
>
> **[5:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=306)** If it's missing data, decide between statistical imputation or ML-based methods.
>
> **[5:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=311)** If the data is noisy, clean it and use noise resistant models.
>
> **[5:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=316)** If outliers are present, analyze them with box plots and scaling techniques.
>
> **[5:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=321)** And finally, if you suspect data leakage, check how your data set is split and review feature engineering steps.
>
> **[5:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=328)** So good data is good AI.
>
> **[5:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=330)** Always prioritize high data quality when you move from your MVP to productionization.
>
> **[5:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=337)** Make sure you handle these issues before using more specialized techniques or models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (43), ai (8), feature (3), [[Feature Engineering]] (2), [[Debugging]] (1)
> **Env Vars:** knn (1), maml (1), mvp (1)
> **CLI Commands:** node (1), make (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 3. Testing and Debugging Your AI Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### Why testing matters in AI development
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=0)** - [Instructor] Let's take a look at how to ensure your AI models are accurate, generalizable, and robust.
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=7)** In traditional software testing, the goal is simple.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=10)** Verify that the program produces the expected output for a given input.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=15)** Bugs are deterministic, meaning if you fix the code, the bug disappears.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=21)** AI testing is different.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=22)** AI models don't have hard-coded rules.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=26)** They learn patterns from data.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=28)** The result?
>
> **[0:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=29)** Errors aren't just from the code mistakes, but also from data biases, unseen edge cases, and changing real-world conditions.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=39)** Key differences include a deterministic versus non-deterministic approach, where a bug in traditional software exists until fixed, but an AI model might fail unpredictably on different inputs, and we don't know that until we test it.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=56)** AI models can also degrade over time due to data drift, not code changes.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=61)** This means that an AI system might work perfectly today, but fail the next month.
>
> **[1:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=67)** And finally, AI models don't follow explicit rules.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=71)** They learn from examples, so their accuracy depends on the quality of their training data.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=76)** The takeaway is that AI testing is an ongoing process, not a one-time task.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=83)** To build a reliable AI system, testing must cover multiple dimensions.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=88)** Accuracy, does the model return correct predictions?
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=92)** A high accuracy in testing but poor real-world performance may indicate overfitting.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=98)** Generalization, can the model handle new unseen data?
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=102)** If not, it has memorized training data rather than learning patterns.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=107)** Robustness, does the model break under slight changes?
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=111)** Small variations in input should not dramatically change predictions.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=116)** Fairness and bias detection.
>
> **[1:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=119)** AI models inherit biases from training data.
>
> **[2:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=122)** Testing should uncover unfair predictions.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=126)** And finally, efficiency and scalability.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=129)** Can the AI system that we've built handle real-world user loads without slowing down?
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=135)** By focusing on all of these factors, we ensure AI is trustworthy and effective in production.
>
> **[2:23](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=143)** So let's take a look at some AI testing methods.
>
> **[2:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=145)** AI testing, as we've seen, is not just about checking final predictions.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=150)** Every component in the pipeline, data pre-processing, model inference, post-processing, must be tested individually in isolation.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=159)** This is what unit testing means.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=162)** Before even testing the model, we need to verify that the data pre-processing steps like tokenization, normalization, and feature scaling work.
>
> **[2:50](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=170)** A single mistake here can distort the entire model's performance.
>
> **[2:55](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=175)** Then we move on to model evaluation, where metrics like precision-recall curves, F1-scores, faithfulness confusion matrices, and even in simpler models, mean squared errors, root means squared error, and R-squared scores can come in handy.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=192)** Finally, we do robustness testing, where AI models are tested with adversarial examples, noise injections, and real-world edge cases.
>
> **[3:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=202)** As I've mentioned before, AI systems degrade over time.
>
> **[3:26](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=206)** So we check for concept drift at the end, where real-world data shifts away from training data over time.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=213)** And to ensure fairness across different groups, we need to make sure that concept drift is taken care of.
>
> **[3:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=220)** So here's a structured pipeline for AI testing.
>
> **[3:44](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=224)** We start with data quality checks.
>
> **[3:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=226)** If issues exist, first, fix the imbalances and biases in our data.
>
> **[3:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=232)** Then we proceed to unit testing, where we verify pre-processing steps.
>
> **[3:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=237)** Ensuring clean input data prevents errors.
>
> **[4:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=240)** Then we move on to model evaluation using accuracy, precision recall, or regression metrics.
>
> **[4:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=247)** Then we come to robustness, where we check our model's resilience against adversarial attacks and noisy inputs.
>
> **[4:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=256)** And finally, we look at concept drift and fairness over time.
>
> **[4:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=260)** AI models must stay reliable in real-world conditions, and using this structured pipeline helps us ensure that.
>
> **[4:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=269)** Only after passing these tests should a model be deployed into production.
>
> **[4:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=274)** So keep in mind, this is probabilistic, unlike traditional software testing, and our focus has to be to ensure that these models do not degrade over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (18), data (14), [[Software Testing]] (2), [[Unit Testing]] (2), next (1)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Unit testing for AI components
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=0)** - [Instructor] It's time now to take a look at how to ensure AI reliability by testing pre-processing, feature engineering, and inference pipelines.
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=7)** So let's dive right in.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=10)** Unit testing in AI is about testing individual components, pre-processing pipelines, feature transformations, and model inference before they are combined into a full system.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=21)** Keep in mind, AI testing differs from traditional software testing because AI is non-deterministic.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=27)** The same input might not always give the same output.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=31)** Here, data matters just as much as the code and these models degrade over time, which means these models must be tested regularly.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=41)** The goal of unit testing here is to catch these issues early on before they become expensive to fix in production.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=49)** So let's take a look at a few examples.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=51)** I've implemented here, a few unit tests, using very simple libraries.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=56)** However, you can use whatever you feel best in your given situation.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=61)** First, we have data processing.
>
> **[1:04](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=64)** Some common errors here include missing values, mislabeled or shuffled data, and data leakage.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=70)** And to prevent these issues, we can implement simple assertions in Python to cast these errors.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=77)** For instance, I can use pandas to check for missing values and ensure all the inputs in our features are complete.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=84)** Next, I can verify the labels and check for any extreme labels in our dataset.
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=91)** These extreme labels have to be removed or dealt with because they're not part of what we are trying to predict.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=97)** And finally, we can try to ensure a proper train and test split by checking if they are disjoint completely, which is really important.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=106)** We don't want our test data to leak into our train data.
>
> **[1:50](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=110)** Keep in mind, at this step, there are more sophisticated ways to check for data leakage, but this is a very preliminary check.
>
> **[1:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=118)** When it comes to feature engineering, we have several mistakes that can happen.
>
> **[2:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=122)** The major mistake that happens most often is incorrect scaling, or normalization.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=129)** If some inputs range from zero to one, while others range from zero to 100, the model might favor certain features unfairly.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=138)** We also have encoding errors that can creep in in categorical data, which means if categorical data is not mapped correctly, models might break.
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=148)** And then we have feature drift over time, which means features can change significantly between training and deployment, resulting in the accuracy dropping.
>
> **[2:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=160)** To prevent these issues, we again, use a few assertions.
>
> **[2:44](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=164)** First, we can check if numerical features are scaled correctly and lie between, for instance, zero and one here.
>
> **[2:53](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=173)** Next, I can check for categorical encoding ranges to avoid any mismatches by enforcing ranges in advance.
>
> **[3:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=182)** And finally, we have feature drift.
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=186)** So I'm using here, the KS test, but you can use whatever feels convenient and relevant to your dataset.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=192)** This test simply helps us check if there is a drift offering in the features.
>
> **[3:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=199)** Finally, we're at the step of inference.
>
> **[3:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=202)** Once pre-processing and feature engineering are validated, we must test inference.
>
> **[3:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=208)** Some common risks here include inconsistent model outputs, which means if the same input gives different predictions, something may be wrong.
>
> **[3:39](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=219)** There are latency issues when it comes to APIs, and we have hallucinations when it comes to LLMs.
>
> **[3:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=226)** Now catching these can be done in many sophisticated ways, including grounding techniques for LLMs and several API and latency checks that can be implemented using profilers.
>
> **[3:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=238)** These are just some simple examples for you to understand how these work.
>
> **[4:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=243)** So for instance, I can ensure identical inputs produce stable outputs by simply asserting in Python.
>
> **[4:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=253)** If the same input produces different outputs, then we may have to revisit our model and see what's going on there.
>
> **[4:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=259)** In the case of an LLM, this may be a result of too high a temperature.
>
> **[4:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=265)** When it comes to API response times, we want to make sure we prevent delays or high latency in production.
>
> **[4:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=273)** And to do so, you can simply use the time function in Python and time the API response time.
>
> **[4:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=280)** And finally, we can check for hallucinations.
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=283)** Here's a simple check I've implemented where I'm simply asking an LLM a question, which should not have an answer, technically.
>
> **[4:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=291)** If the LLM says anything other than, I don't know, we throw an error.
>
> **[4:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=296)** You can check your LLMs that you fine tuned or grounded in RAG, using these approaches.
>
> **[5:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=303)** So as we've seen, there's a logical approach that we follow when it comes to unit testing AI pipelines.
>
> **[5:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=311)** Take a look at this flow chart.
>
> **[5:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=313)** We start with data pre-processing where we fix the missing values and labeling issues.
>
> **[5:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=318)** Then we move to feature engineering where we check for scaling and encoding errors.
>
> **[5:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=324)** Next, we test model inference where we are ensuring that outputs are stable and API calls are fast.
>
> **[5:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=332)** And finally, we move on to deployment, only if all of these tests pass.
>
> **[5:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=338)** By systematically testing each AI component, we create a robust, production ready model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), ai (6), [[Feature Engineering]] (4), api (4), [[Unit Testing]] (3)
> **Env Vars:** api (4), llm (3), rag (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** for instance (3)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### Performance testing your AI model
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=0)** - [Instructor] Now, let's take a look at performance testing and model robustness for our AI MVP.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=6)** We'll be putting our sentiment analysis models to the test with challenging examples that push the boundaries of classification.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=13)** Let's see how our models would perform in real-world scenarios with nuanced language.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=18)** I have code here that simply sets up our experiment to do just this.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=24)** It creates confusion matrices, plots them, and uses a classification report to compare the three models that we used earlier: A balanced model, an overfit model, and an underfit model.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=37)** To refresh your memory, the balanced model is a model that is trained on a reasonable number of epochs, three in our case, without regularization.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=47)** The overfit model was trained for much longer without regularization on a smaller training dataset.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=54)** And the underfit model was trained just for one epoch with too much regularization, which prevented it from learning anything.
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=62)** For this experiment, I've set up some challenging examples.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=65)** These are simply examples which are on the edges of our decision boundary.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=70)** For instance, I have an ambiguous example here where the sentiment is mixed.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=75)** It talks about great features, but poor build quality of the product.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=80)** These would be quite difficult for our classifier to classify.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=85)** So finally, what I have here is a prediction function that essentially tokenizes the input and predicts, and then everything that prints out the output that we're going to look at.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=98)** Once you run this, what you'll see is a very detailed report with a graph that shows the confusion matrice.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=107)** Looking at these matrices on screen, we can quickly spot some difference in the behavior of these three models.
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=114)** The underfit model clearly shows a bias towards negative predictions, which you can see here.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=121)** The Overfit model has more varied predictions, but still makes errors.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=126)** And the balanced model is much better at classifying our test examples as you can see here.
>
> **[2:14](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=134)** But perfect accuracy can also be misleading with small datasets.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=138)** So using our test examples that we created, which were deliberately tricky, we can now see if the linguistic complexities are captured by these models.
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=148)** So let's look at our results for ambiguous examples.
>
> **[2:31](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=151)** What we see here is that the underfit model predicts negative with 57% confidence.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=158)** And the overfit model predicts positive with 65% confidence, which you can see here.
>
> **[2:44](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=164)** And the balanced model predicts negative with just 52% confidence.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=169)** That's near 50% confidence from the balanced model that reflects the ambiguity of the statement, which is accurately captured by the balanced model as you can see.
>
> **[2:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=178)** For the expectation shift example, which is basically not the worst thing I've ever bought, you can see that the balanced model is again 51%, whereas the overfit model is predicting positive, and the underfit model is predicting negative with a high confidence.
>
> **[3:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=195)** So as you can see with some of these examples, our model has distinguished clear patterns in text, and can give us neutral answers as well.
>
> **[3:25](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=205)** This highlights the importance of testing beyond simple accuracy matrix.
>
> **[3:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=210)** A model may have high accuracy, or clearly positive, or negative examples, but struggle with the nuanced language people use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (1), product (1)
> **Definitions:** is a  (3)
> **Env Vars:** mvp (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Preparing Your Prototype for Production

[↑ Back to Table of Contents](#table-of-contents)

#### Transitioning from prototype to production
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=0)** - [Instructor] Let's talk about a very crucial step, moving from AI prototype to production.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=6)** Many AI projects never make it to deployment, because they aren't designed for real world constraints like scaling, monitoring, and latency.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=15)** So let's take a look at how to do it right.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=18)** When developing an AI MVP, your main goal is proving that the model works.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=24)** However, production is a whole different world.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=27)** A working prototype doesn't mean a scalable product.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=30)** In production, models needs to be fast, robust, and cost efficient.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=35)** You have to think about latency, reliability, and security.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=41)** Specifically, when it comes to scalability, your model will be used by millions of people, so it has to be able to handle millions of requests.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=49)** Then we have to be able to monitor data drift, failures and bias in real time, the latency has to be low.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=56)** And our API keys, user data, and logs have to be protected.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=63)** So how do we get a model from a Jupyter Notebook or your own environment to real world application?
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=70)** We need a solid deployment pipeline.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=72)** A typical deployment pipeline moving from prototype to production involves pre-processing and data pipelines, which are real-time versus batch processing.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=83)** We have model hosting, which includes APIs like OpenAI, Cohere versus self-hosted models, which we can host on TorchServe using FastAPI or on AWS.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=97)** Then we have version control where we keep record of the model version using MLflow or DVC.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=105)** And finally, we have observability, which involves monitoring and logging using tools like Prometheus, Grafana, or Weights & Biases.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=116)** The AI deployment pipeline is quite simple.
>
> **[1:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=119)** When we look at the flow chart, it starts off with the data ingestion step, moving on to pre-processing, then we have our model inference endpoint or API.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=129)** Next, it subdivides into two steps.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=133)** One is scaling and optimization, where we use load balancers and autoscaling to deal with high traffic.
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=139)** And we have monitoring and logging where if issues directed, there should be a retraining pipeline in place to mitigate those issues.
>
> **[2:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=149)** Now, how do you choose the right deployment strategy?
>
> **[2:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=153)** Depending on your use case, you need to choose between batch inference, realtime inference, or a hybrid approach.
>
> **[2:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=160)** For instance, fraud detection must be real-time, but something like customer churn prediction can be done in batches vernight.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=169)** APIs like the OpenAI API now also support batch inference, and it is significantly cheaper.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=177)** Now, how do you deploy the model?
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=179)** That matters as well.
>
> **[3:01](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=181)** We can use APIs like AWS Bedrock or OpenAI, or use self-hosted models like Hugging Face or FastAPI.
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=189)** The cheaper alternatives require more setup on our end, whereas going with industry standard providers like AWS or Azure provide us speed at a greater cost.
>
> **[3:23](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=203)** Once deployed, we need to ensure that our model can increase its capacity.
>
> **[3:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=209)** This is where scaling comes in.
>
> **[3:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=210)** We can use Kubernetes for auto scaling, caching with Redis to speed up system responses, and load balancing to prevent system failures.
>
> **[3:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=220)** Model optimization techniques like quantization and distillation also helps significantly.
>
> **[3:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=226)** The model can be quantized or reduced in size using ONIX or TF Lite.
>
> **[3:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=232)** It can also be distilled.
>
> **[3:55](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=235)** And finally, we come to the observability step.
>
> **[3:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=238)** One major mistake is launching a model and forgetting about it.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=242)** Models degrade over time, due to concept drift and data drift.
>
> **[4:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=247)** This is why monitoring tools like Weights and Biases, Prometheus, and Grafana are crucial for tracking performance and triggering alerts when accuracy drops.
>
> **[4:19](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=259)** The ELK stack is also an industry standard stack for AI monitoring, which uses ElasticSearch Logstash,and Kibana.
>
> **[4:27](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=267)** So taking an AI prototype to production is one of the hardest but most rewarding parts of the development cycle.
>
> **[4:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=273)** And by following some of these practices, we'll be able to ensure our model not only works, but stays reliable over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (6), data (5), aws (3), api (2), [[Real-Time]] (2)
> **Env Vars:** api (3), aws (3), mvp (1), dvc (1), onix (1)
> **CLI Commands:** aws (3), make (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Optimizing your prototype for scalability
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=0)** - [Instructor] It's time now to focus on making our sentiment analysis MVP model ready for real-world deployment by optimizing for performance and scalability.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=10)** So, let's take a look at how we can do this.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=13)** First, we need to know our current model's footprint and speed, which I'm doing using my measure_model_performance function.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=21)** It simply takes our saved model, runs inference through it, and calculates the inference time.
>
> **[0:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=29)** And I have some code here that runs this function and then measures the initial performance.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=35)** If we look at the output below, we can see that our original model's inference time is 146 milliseconds and the size of the model is 255 MBs.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=46)** Well, that's a good starting point.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=49)** Next, we'll be looking at some optimization approaches.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=52)** So, let's start with the first strategy, which is TorchScript, or JIT compilation.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=58)** This is fairly simple.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=60)** What I'll be doing here is using a traced model, which reduces the model size and perhaps even the model inference speed.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=71)** This may run into issue with some complex models like the one we are using here.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=76)** The next approach which we can try is using a smaller model, a model like TinyBERT for example.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=82)** This model is much smaller, just 17 MB, which is a 90% reduction.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=88)** And even more impressive is that the inference time for this model is a 96% improvement under 6 milliseconds.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=96)** The trade-off would be some reduction in accuracy, so you need to run some performance tests here, but for many applications, this trade-off is well worth it.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=105)** I also have an ONNX example here, which is not fully implemented, but you can use this code as a starting point.
>
> **[1:53](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=113)** ONNX compilation can provide substantial free speed improvements of around 40% with no loss in accuracy.
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=120)** And finally, I have some notes here for pruning and quantization.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=125)** Depending on the model and library you're using, it can differ.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=129)** So, let's take a look at the output.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=131)** As you can see, TorchScript optimization ran into an error, which we predicted earlier, because of the complex architecture we're using.
>
> **[2:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=140)** However, if we look at the smaller model, we can see that the model size is 16 MB, and we've reduced the size by 93% and the speed by 96%.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=150)** That's a great start.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=152)** If we start off with this model now, fine-tune it on our same dataset and then use that for performance comparison, I'm sure we can use a TinyBERT model for the same task with little to no accuracy trade-offs.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=167)** These are just some examples, but you can use any optimization technique under the hood that I've mentioned here, and these are essential for real-world deployment.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=177)** An unoptimized model might cost 10 times more to run and provide a poor user experience compared to one that's been properly optimized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), [[Scalability]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** onnx (2), mvp (1), jit (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** measure_model_performance (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Common production pitfalls
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=0)** - [Instructor] Let's dive into the key reasons why AI models fail when deployed at scale, and the practical strategies we can use to address these challenges.
>
> **[0:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=9)** Most AI models work well in a lab setting, but once deployed, they can start to fail due to unpredictable real-world conditions.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=16)** A major cause of this is data drift, where the distribution of input data changes over time, leading to a drop in accuracy.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=24)** Even more concerning is concept drift, where relationships between input features and output changes, making your model completely outdated.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=33)** Scalability is another issue.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=36)** Your model might work fine with a small data set, but in production it has to handle thousands or even millions per requests.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=43)** If it's not optimized, it can lead to latency and downtime.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=47)** Lastly, models can suffer from bias and fairness issues.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=51)** They may perform well on one demographic, but fail on another, leading to ethical concerns, and even legal risks.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=58)** First, let's focus on data drift and concept rift.
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=62)** So to resolve these issues, here's a flow chart which we can refer to.
>
> **[1:07](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=67)** Once your model is trained and deployed, any incoming data has to be monitored for data drift and concept rift.
>
> **[1:14](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=74)** If the incoming data shows that it's distributed differently from your training data, then we have data drift.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=83)** If your incoming data fails to work with your model entirely, and your outputs and inputs seem to be differently correlated, then we have a concept drift.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=93)** In both of these cases, we need a thorough model reevaluation, which will lead to retraining or fine-tuning of the model at the end.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=101)** This is an ongoing process that happens cyclically in the production cycle.
>
> **[1:48](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=108)** So how do we detect this?
>
> **[1:50](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=110)** To detect drift, we can use metrics like KL divergence, Chi-Square tests, and even population stability indices.
>
> **[1:58](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=118)** There's also multiple tools like EvidentlyAI, Fiddler AI, MLflow monitoring, and so on, that can help us.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=125)** To fix drift, retraining your model regularly is key.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=129)** Feature stores are also quite useful, because they help us version historical data, making it easier to roll back if an issue arises.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=138)** Scaling AI models efficiently is a challenge.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=141)** Many companies struggle with high inference costs.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=144)** Running large models like GPT-4, Claude, or Mistral can be expensive and slow, and so if your model takes too long to generate a response, it's unusable for real-time applications, no matter how good it is.
>
> **[2:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=156)** To solve this, we use model quantization, which is one of the more basic techniques to reduce latency.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=162)** There's also pruning, which can remove unnecessary neurons from your deep learning models, and additionally, caching frequently used responses, and batching multiple requests together can also significantly improve performance.
>
> **[2:56](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=176)** Finally, there's a few security considerations we always need to keep in the back of our minds.
>
> **[3:02](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=182)** One of the biggest risks is prompt injection attacks, where malicious users trick models into exposing sensitive information.
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=189)** API security is another major concern, irrespective of if you're using a custom API or a model hosted on Azure or any API based service.
>
> **[3:20](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=200)** If an API key is exposed, anyone can use it.
>
> **[3:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=204)** And finally, we need to make sure we're implementing rate limits, access controls, and secure cloud hosting, on AWS Azure or even Google Cloud, to help mitigate these risks.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=216)** So let's take a look at a final flow chart to debug any production AI model.
>
> **[3:41](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=221)** Let's go step by step.
>
> **[3:42](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=222)** If you notice a performance drop in a production AI model, then we first check for concept drift.
>
> **[3:49](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=229)** If there is a concept drift, then we will look at the real-world data and see if it has changed its distribution as compared to our previous data stores.
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=239)** If yes, then we retrain the model, and if no, we check our data pipeline, because sometimes a broken pipeline can result in data shifts as well.
>
> **[4:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=249)** If the performance hasn't dropped, but there are other issues, we look at latency.
>
> **[4:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=255)** If there's high latency, we optimize model inference, and otherwise, if all's good on the latency end, we look at security concerns.
>
> **[4:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=264)** It's always useful to test your model against a few adversarial defenses, and keep monitoring it for future issues.
>
> **[4:32](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=272)** So there you go.
>
> **[4:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=273)** Here's our pipeline for proactively monitoring all of the issues that you may come across in productionizing a model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (15), ai (6), api (4), [[Security]] (3), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** api (4), gpt (1), aws (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), aws (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps and additional resources
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=0)** - [Instructor] As we wrap up our journey through the exciting world of AI orchestration and prototype development, I want to take a moment to say thank you for being part of this learning experience.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=11)** Throughout this course, we've explored the fundamentals of building AI MVPs, testing, debugging, and optimizing AI applications for production.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=21)** I hope you're leaving with valuable insights that will help you build and refine AI models with confidence.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=28)** But of course, the learning doesn't stop here.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=30)** If you're looking to expand your knowledge on AI orchestration and working with LMS, I highly encourage checking out another LinkedIn learning course called Introduction to AI Orchestration with LangChain and LlamaIndex.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=45)** It's a fantastic next step for those looking to build more advanced AI-powered applications.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=51)** Additionally, I invite you to visit my website where I regularly share updates and news on what I've been working on.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=60)** For real-time updates and discussions, let's connect on LinkedIn.
>
> **[1:04](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=64)** Feel free to send me a connect request, and I'd love to hear from you about your experience working on AI orchestration, LLM workflows, debugging, and more.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=75)** And finally, you can also follow me on Twitter for latest updates, tools, challenges, and industry insights on AI.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=84)** Thank you once again for your curiosity, dedication, and eagerness to learn.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=89)** AI is evolving at an incredible pace, and the opportunities are limitless.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=94)** Keep experimenting, innovating, and let's continue to build amazing AI applications together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (11), [[Orchestration]] (4), [[Debugging]] (2), [[LinkedIn]] (2), [[LangChain]] (1)
> **Env Vars:** lms (1), llm (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Nayan Saxena]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/ai-orchestration-developing-and-testing-your-ai-prototype-5211016)

## Skills Covered

- Prototype Validation
- Software Quality Assurance
- AI Software Development
- Artificial Intelligence (AI)
- AI Orchestration

## Path Context

### In [[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]
← [[AI Orchestration- Designing the Prototype Architecture and Data Strategy]] | **4 of 5** | [[AI Orchestration- Validation and User Feedback and Performance Metrics]] →

## Part of

- [[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development, AI Orchestration
- [[AI Orchestration- Planning and Orchestrating for Observability]] — Artificial Intelligence (AI), AI Software Development, AI Orchestration
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)