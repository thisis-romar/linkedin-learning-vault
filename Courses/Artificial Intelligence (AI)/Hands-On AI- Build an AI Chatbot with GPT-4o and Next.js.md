---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js
url: "https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js"
duration_minutes: 107
duration: 1h 47m
level: Intermediate
updated: 6/26/2025
learners: 29749
skills:
  - Chatbot Development
  - AI Software Development
  - Next.js
  - Artificial Intelligence (AI)
  - ChatGPT
exercise_files: true
github: "https://github.com/LinkedInLearning/building-a-modern-ai-chat-application-with-nextjs-and-openai-6036004/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG35oVjgWP9cA/learning-public-crop_675_1200/B4EZc3qeSZH0Ao-/0/1748985570771?e=2147483647&amp;v=beta&amp;t=59hJHD4ViN-SdcPPRWe_J1fAvYIJmC8WVStCt2nB6OQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Hands-On Projects for OpenAI-Powered Apps]]'
prev_courses:
  - '[[Hands-On OpenAI API- Building a Real-World Solution]]'
next_courses:
  - '[[Build a Document Search Assistant with Node and OpenAI''s Assistants API]]'
path_nav: '[{"path":"Hands-On Projects for OpenAI-Powered Apps","position":4,"total":5,"prev":"Hands-On OpenAI API- Building a Real-World Solution","next":"Build a Document Search Assistant with Node and OpenAI''s Assistants API"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/web-development
  - skill/chatbot-development
  - skill/ai-software-development
  - skill/next-js
  - skill/artificial-intelligence-ai
  - skill/chatgpt
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20AI-%20Build%20an%20AI%20Chatbot%20with%20GPT-4o%20and%20Next.js.md)

![Hands-On AI: Build an AI Chatbot with GPT-4o and Next.js](https://media.licdn.com/dms/image/v2/D4E0DAQG35oVjgWP9cA/learning-public-crop_675_1200/B4EZc3qeSZH0Ao-/0/1748985570771?e=2147483647&amp;v=beta&amp;t=59hJHD4ViN-SdcPPRWe_J1fAvYIJmC8WVStCt2nB6OQ)

# Hands-On AI: Build an AI Chatbot with GPT-4o and Next.js

> In this hands-on course, technical content creator Ebenezer Don guides you through building an AI chat application using Next.js and OpenAI GPT models. Learn how to create a fully functional chatbot with features like conversation threading, message persistence, and real-time responses. The course emphasizes best practices in state management, API integration, and modern UI development. When you c

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js) | 1h 47m | Intermediate | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build an AI chatbot](#build-an-ai-chatbot)
  - [What you should know](#what-you-should-know)
  - [What we'll be building](#what-well-be-building)
- [**1. Project Setup and Foundation**](#1-project-setup-and-foundation) (3 videos)
  - [Getting your environment and Codespaces set up](#getting-your-environment-and-codespaces-set-up)
  - [Setting up the Next.js project](#setting-up-the-nextjs-project)
  - [Setting up styling](#setting-up-styling)
- [**2. Integrating the Vercel AI SDK**](#2-integrating-the-vercel-ai-sdk) (3 videos)
  - [Setting up Vercel AI SDK and GitHub models](#setting-up-vercel-ai-sdk-and-github-models)
  - [Creating a test AI route](#creating-a-test-ai-route)
  - [Implement the AI chat route](#implement-the-ai-chat-route)
- [**3. Setting Up the Client-Side Database**](#3-setting-up-the-client-side-database) (3 videos)
  - [Understanding IndexedDB](#understanding-indexeddb)
  - [Setting up the database with Dexie.js](#setting-up-the-database-with-dexiejs)
  - [Saving and retrieving data from the database](#saving-and-retrieving-data-from-the-database)
- [**4. Building the Chat Interface and Logic**](#4-building-the-chat-interface-and-logic) (4 videos)
  - [Building the ChatThread component](#building-the-chatthread-component)
  - [Setting up the chat logic and state management](#setting-up-the-chat-logic-and-state-management)
  - [Building the chat interface and user interactions](#building-the-chat-interface-and-user-interactions)
  - [Building the chat sidebar component](#building-the-chat-sidebar-component)
- [**5. Implementing Chat Title Generation**](#5-implementing-chat-title-generation) (2 videos)
  - [Creating the chat title generation API](#creating-the-chat-title-generation-api)
  - [Integrating chat title generation in the UI](#integrating-chat-title-generation-in-the-ui)
- [**Conclusion**](#conclusion) (1 videos)
  - [Testing features and course conclusion](#testing-features-and-course-conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build an AI chatbot](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=0)** - [Ebenezer] Have you noticed how AI chatbots are transforming the way we interact with technology?
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=6)** Yet many developers still struggle to build their own, often getting stuck with chat platforms that don't offer the flexibility, [[User Experience (UX)|user experience]], or features you really want.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=17)** That's exactly why it's worth learning how to build one yourself.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=21)** Instead of relying on third-party apps, you gain the confidence to create AI-powered features on your own.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=28)** And I've helped thousands of developers build effective AI applications.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=33)** And in this course, we'll create a fully functional AI chatbot with [[Next.js]] and the Vercel AI SDK.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=40)** If you are ready to add AI skills to your developer toolkit, and build impressive applications that use the latest in [[Conversational AI]], you are in the right place.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=51)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Next.js]] (1), [[Conversational AI]] (1)
> **File Paths:** next.js (1)
> **Env Vars:** sdk (1)
> **Speakers:** - [ebenezer] (1)

#### [What you should know](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=0)** - [Instructor] To get the most from this course, you should have some basic [[JavaScript]] experience.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=6)** You'll also want some familiarity with [[React.js|React]] fundamentals.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=10)** Components, props and hooks like use state and use effect will be used throughout our project.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=17)** Some understanding of clients have a architecture and experience making API requests will be helpful.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=23)** We'll use the [[Fetch]] API directly for some features while other API calls will be handled by the VersaAI STK.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=32)** Don't worry if you're not an expert in all these areas, I'll explain concepts as we go.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=37)** But having this foundation will help you focus on the AI aspects rather than getting stuck on the basics.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=45)** Now, let's talk about what you need to have ready.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=49)** If you are using [[GitHub]] [[Codespaces]], you don't need a GitHub account.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=54)** The dev environment will be handled for you in the cloud.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=57)** But if you prefer to work locally on your own computer, you'll need Node JS version 18 or later installed.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=66)** If you don't have it yet, you can download it from [nodejs.org](https://nodejs.org).
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=70)** You'll also need a code editor.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=72)** I'll be using VS code in this course, but feel free to use whatever I did you're comfortable with.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=78)** The good news is that you wouldn't need any page subscriptions or services to complete this course.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=84)** We'll be using options that are available for free during development.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=89)** So if you have all these requisites covered, you are all set to be computing your own AI chatbots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[JavaScript]] (1), [[React.js|React]] (1), [[Fetch]] (1), [[Codespaces]] (1)
> **Env Vars:** api (3), stk (1)
> **Tools:** github (2), vs code (1)
> **Prerequisites:** you need to have (1), you'll need (1)
> **CLI Commands:** node (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Versions:** version 18 (1)
> **Speakers:** - [instructor] (1)

#### [What we'll be building](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=0)** - [Instructor] Before we dive into the code, let's take a moment to understand exactly what we're going to build in this course.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=7)** Having a clear picture of a destination will help you make sense of each step along the way.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=13)** Now, when you open the app, you'll see a clean interface.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=16)** The main area is for the chat itself, and there's a sidebar on the left that lists your different conversations.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=24)** Let's start the chat.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=26)** I'll ask the AI assistant Lexi to explain the basics of [[React.js|React]] server components.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=35)** Watch how my message shows up right away in the chat once I hit Enter.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=40)** Now I see a typing indicator with the response streaming in smoothly.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=45)** This [[Real-Time]] effect comes from the Vercel AI SDK.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=49)** You'll also notice the formatting.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=52)** You can see we have code blocks and bullet points.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=55)** That's React markdown making it easy to read.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=59)** If we look at the sidebar, you'll see the conversation now has a title, Introduction to React Server Components.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=66)** You can also see it at the top of the main chat window.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=70)** The AI generated this title automatically based on our first message, a feature we'll add to help keep things organized.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=78)** To start a new chat, just hit the New Chat button, represented by the pencil or quill icon on the sidebar.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=87)** This starts a fresh chat session, but our previous chat about React is still there in the sidebar list so you can easily switch between them.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=97)** Let's say hello to Lexi in this chat.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=101)** Notice we have another AI generated title for this chat, Simple Greeting Exchange.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=107)** If you don't need a conversation anymore, just open it in the chat window and click the Minus button beside the title.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=115)** We have a confirmation step so you don't delete things by accident.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=120)** It's also important that the chat is persistent.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=123)** Messages are stored right in your browser using IndexedDB.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=128)** This means that your chat history will still be there if you close the tab or reload the page.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=135)** And the app is responsive too.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=138)** On mobile, the sidebar tucks away behind a menu button, and the layout adjusts so it works great on smaller screens.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=147)** Now that we know what we're building, let's get started with the setup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[Real-Time]] (1)
> **UI Navigation:** open the (1), in the sidebar (1)
> **CLI Commands:** make (1)
> **Env Vars:** sdk (1)
> **Definitions:** means that (1)
> **Analogies:** picture (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. Project Setup and Foundation

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting your environment and Codespaces set up](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=0)** - [Instructor] Before we start building our AI chatbots, let's talk about how you can follow along with this course.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=6)** A straightforward way to get started is to use [[GitHub]] Code Spaces.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=10)** This gives you a complete development environment, where you can check out to the start and end state of each lesson.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=18)** You can access Code Spaces by going directly to GitHub and creating the Code Space from the course repository.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=25)** Click the Code button and then the Code Spaces tab, and then click Create Code Space.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=33)** Or even easier, look for the GitHub Code Spaces link in this video's overview section.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=39)** Once you have your Code Space open, you'll be able to check out to the start and end states of each lesson.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=45)** For example, if you want to follow along with chapter one, lesson two, click this branch button at the bottom of the screen and check out to 01_02.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=56)** You'll also notice that each branch is marked with the letter B or E.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=61)** The B stands for beginning, and it contains the code at the beginning of the lesson.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=66)** The E stands for end, and contains the code at the end of the lesson.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=70)** So if you want to see what the end of chapter three, lesson two looks like, check out the 03_02E branch.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=81)** If you prefer not to use Code Spaces, you can absolutely follow along using your local environment.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=87)** Just close the repository and the same thing applies.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=90)** Throughout this course, I will be building everything from scratch, and I'll explain every step along the way.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=97)** For local development, you'll need to have Node JS installed on your computer.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=101)** If you don't have it yet, head over to [nodejs.org](https://nodejs.org) and download the latest LTS version.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=107)** You'll also need a code editor.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=109)** I'll be using VS Codes, but you can use whatever editor you are comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Tools:** github (3)
> **Definitions:** stands for (2)
> **Prerequisites:** before we start (1), you'll need (1)
> **CLI Commands:** node (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Env Vars:** lts (1)
> **Exercise Files:** download the (1)

#### [Setting up the Next.js project](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=0)** - [Instructor] Let's get started by setting up our [[Next.js]] project and installing all the dependencies we'll need.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=7)** For this, you need to open the terminal on your dev environments.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=11)** If you're working in [[Codespaces]], you'll have VS Code already open, and you can access the terminal by hitting control or command on Mac, plus Shift, plus P, and type in terminal.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=24)** Then select the Toggle Terminal option.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=27)** Now, we need to run the command npx create-next-app@latest then give a space for the project name.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=38)** If you're using Codespaces, just type full stop.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=41)** So the next.js project is generated in the current directory, which has already been named AI-chatbots.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=48)** If you're using a local terminal, you can either do the same if you're satisfied with your current directory, or write a new name in place of the dot for the project.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=58)** So you can go with ai-chatbot.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=60)** But for now, let's go with the dot.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=64)** Next.js is going to ask us some configuration questions.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=67)** For task script, we'll select no to keep things simple, and for the others, we can go with the default options.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=74)** So for [[ESLint]], Yes, yes for Tailwind. Yes, yes.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=78)** Yes for Turbopack, no further import alias customization.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=82)** And Next.js has started setting up our project.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=85)** This may take a minute as it installs the base dependencies.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=90)** Great. That is done successfully.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=92)** Let's move into our project directory and see what we have so far.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=98)** Now, these are our files created and generated successfully by Next.js.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=104)** And with the basic project created, we need to install the specific packages for our AI chatbot.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=111)** I'm just going to open another terminal to keep things clean.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=115)** And then let's type npn install @ai-sdk, so ai-sdk/openai.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=127)** This lets us connect to open AI's models.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=130)** We'll also need ai-sdk/[[React.js|react]] for providing [[React Hooks]] for our AI features.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=139)** We need AI, the core Vercel AI SDK, and then Dexie, which is a wrapper around IndexedDB.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=147)** We'll also need dexie react hooks, which gives us react hooks for dexie.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=153)** We need lucide react for the icons of our interface.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=159)** And finally, react markdown.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=163)** React markdown helps our app when that, the markdown responses from the AI, giving us nice formatting.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=170)** Now, let's hit Enter.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=173)** Great, that's installed successfully.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=176)** The next thing we need to do is structure our project, and we can go back to our file explorer where we have our files and notice that we already have an SRC directory.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=187)** And it need, there's an app directory, which will contain a main Next.js pages and API routes.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=194)** For now, you can see the favicon.ico file which contains the default favicon for our app.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=200)** There's a globals.css file, a layout.js file, and a page.js file.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=206)** We'll go through all these files later on.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=208)** For our app, we'll need a components directory to hold reusable react components.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=214)** So let's create one in the SRC or source directory.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=218)** I'll right click on SRC here.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=220)** It's new folder, then type components.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=224)** We'll also need a lead directory to hold utility functions and a database setup.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=230)** We still want to do that in the SRC folder, and we have lib.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=234)** And finally, a Styles directory in the source folder to hold our CSS files.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=242)** With everything in place, let's start our development sever tool.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=245)** Make sure our Next.js project is working properly.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=249)** So back to our terminal.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=250)** We'll run [[npm]] run dev.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=254)** And great, our server is running successfully on local host:3001, and we can now open it in our browser to see our Next.js app running.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=267)** This shows the default Next.js welcome page, which means our setup is working correctly.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=272)** Now, take some time to explore the project structure.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=276)** Look at the files in the src/app directory, and try to understand how they work together.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=283)** This will help you get familiar with the Next.js app route before we start building our own components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Next.js]] (10), [[React.js|React]] (5), [[React Hooks]] (3), [[Codespaces]] (2), [[ESLint]] (1)
> **File Paths:** next.js (10), globals.css (1), layout.js (1), page.js (1)
> **Tools:** terminal (7), vs code (1)
> **Env Vars:** src (4), sdk (1), api (1), css (1)
> **Prerequisites:** install (2), setup (2), before we start (1)
> **UI Navigation:** open the (1), select the (1), toggle (1), click on (1)
> **CLI Commands:** npx (1), make (1), npm (1)
> **Ports:** :3001 (1)

#### [Setting up styling](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=0)** - [Instructor] Let's set up the styling of our application to create a clean, modern interface.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=6)** We'll be using Tailwind CSS, along with some custom CSS code to style components.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=12)** Because we want to focus on functionality in this course, we won't be walking through every line of CSS.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=19)** To get the CSS files, check out the starting branch of this lesson in the course [[GitHub]] repository.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=27)** We'll need two files, which are in the src/styles directory.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=31)** And in it, we have the page.css file for styling the main chat interface, and sidebar.css for styling the sidebar components.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=41)** We've split our styling into two files to help with maintenance as our application grows.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=47)** In the page.css file, we have styles for the main chat interface.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=52)** In this file, we define styles for the overall chat container layouts, message bubbles for user and AI responses, the input area at the bottom, typing indicators, and then we have the responsive design styling, which we can find here in the media query, which helps keep our application responsive on mobile.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=76)** In the sidebar.css file, we have styles for the sidebar components.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=82)** This includes the sidebar container layouts, mobile responsiveness, chat list items, the new chatbots, and the AI status indicator.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=92)** Remember, the complete CSS files are available in the starting branch of this lesson, so you can copy and paste them into your project.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=101)** The visual aspects of our chatbots are important for creating a great [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** css (5)
> **File Paths:** page.css (2), sidebar.css (2)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **UI Navigation:** in the sidebar (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Integrating the Vercel AI SDK

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Vercel AI SDK and GitHub models](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=0)** - We can now use the Vercel AI SDK tool create a basic test route to understand how the AI models work.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=8)** This test will help us get comfortable with API routes in NEXT JS and the Vercel AI SDK before building our full chat functionality.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=18)** The Vercel AI SDK makes it easy to work with AI models.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=23)** It takes care of things, like token streaming and model connections, so we don't have to write all that boilerplate code ourselves.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=31)** For this course, we are using [[GitHub]] models, which are AI models who started on [[Microsoft Azure|Azure]] with GitHub token authentication.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=40)** This is good because it's free to use for development purposes, and we can easily swap GitHub models to directly use Open AI or other providers when we need to.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=53)** If you're using Code Spaces, you should have this token automatically set up.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=57)** If not, you can get an API key by opening your GitHub account, and then the settings page.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=67)** On the left side bar of the setting page, scroll to developer settings, click it, and then click personal access [[Tokens]].
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=75)** Here, select fine-grained tokens, and in the fine-grained tokens page, you'll see a generate new token button.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=83)** Click it and give the token a name and description, so we can name this AI chatbot and description for my AI app.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=95)** Next, set the expiration dates, repository access, and finally generate token.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=101)** It says here that your new personal access token will be ready for use immediately, so click generate token again.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=109)** Great, that's generated successfully.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=111)** Next, copy your token and back in the code base, create a .env.local file in the root of your project.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=123)** In the .env.local file, we need to create a new environment variable named GitHub Token.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=131)** Now, we set it to the token we just created.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=136)** Remember to not commit your .env file to [[Version Control]] as it contains sensitive information.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=142)** That's all we need to do to get started with the Vercel AI SDK and GitHub module.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=148)** With a setup, you can easily use other AI providers, like Anthropic or [[Hugging Face]], but for this course, we'll focus on OpenAI modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[Tokens]] (3), [[Microsoft Azure|Azure]] (1), [[Version Control]] (1), [[Hugging Face]] (1)
> **Env Vars:** sdk (4), api (2)
> **Tools:** github (6)
> **Prerequisites:** set up (1), setup (1)
> **Exercise Files:** boilerplate (1)
> **Best Practices:** remember to (1)
> **Speakers:** - we (1)

#### [Creating a test AI route](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=0)** - [Instructor] Now let's make a simple test route to check our AI connection.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=5)** We'll create a get endpoint that gives us an AI response without needing any user input.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=11)** This is so that we can easily test the route in our browser.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=15)** We'll start by creating the folders for our API route.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=18)** And inside of the app directory, we'LL create a folder named api.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=23)** And delete.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=24)** We'll create another folder for our test route.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=27)** This test route will contain a route.js file.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=32)** Now, in our test route file, we'll add the imports we need at the top.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=38)** We'll start by importing createOpenAI from '@ai-sdk/openai.'
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=45)** And this let's us create an OpenAI client.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=48)** Next, we'll add import generateText from 'ai.'
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=55)** We'll use this to generate AI text.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=58)** We also need the response helper from [[Next.js]], and we'll do that on line three by importing Next Response from 'next/server.'
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=69)** Let's set the runtime to edge using export const runtime = 'edge.'
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=77)** And now we will create our OpenAI client using the createOpenAI function.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=81)** This client is what we'll use to interact with the OpenAI model.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=86)** On line seven, we'll start with const openai, and that's equal to createOpenAI.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=92)** And right here we'll call the createOpenAI function, and in it, we'll add the configuration for our client.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=98)** And we'll start with a baseURL of '[https://models.inference.ai.[[Microsoft Azure|azure]].com](https://models.inference.ai.azure.com).'
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=110)** This tells the OpenAI client to use the Azure OpenAI model endpoint.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=116)** Our client config also needs an API key.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=119)** We'll use the [[GitHub]] token environment variable, and we can get that by typing process.env.GITHUB_TOKEN.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=130)** If you're using [[Codespaces]], this environment variable is already set.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=135)** If not, this reference will use the GITHUB_TOKEN and variable we set earlier in the envelope local file.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=143)** Now, let's create a GET handler function.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=146)** On line 12, we'll start with export async function, and then GET.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=153)** Using GET means we can test directly in a browser without needing an external API client.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=159)** So on line 13, we should add error handling.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=162)** And to do that, we'll start with try.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=165)** This starts a try card block.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=166)** And in the try block, we'll get text from the AI.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=169)** Const { text } and that's equal to await, we'll call the generateText function.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=179)** And inside of this generateText function, we're going to specify the model we want to use.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=185)** So on line 15, we have model as openai, and it needs ('gpt-4o').
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=193)** So notice that you can choose any model you want right here, but we're going with 4o for this course.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=199)** You can even use a non-OpenAI model, but that means instead of OpenAI, you need to use the model-specific client, which you can also get from the Vercel AI SDK.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=211)** Next, we'll add a system message for the AI's role.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=214)** And on line 16, we'll add system, and let's say, You are a helpful AI assistant named "Ella."
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=228)** This system message is a way to guide the AI's behavior.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=231)** The AI will use this to understand its role and how to respond in every conversation.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=237)** Now for our test prompts, we're just going to write prompt on line 17.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=242)** And let's say, 'Give a brief 2-sentence introduction of yourself.'
>
> **[4:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=252)** Notice that we're not processing any user input yet.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=255)** It's just a fixed prompt to test things out.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=258)** Now let's return the AI's response as [[JSON]].
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=262)** And on line 20, we'll type return NextResponse.json,
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=270)** and in brackets and another curly brace, we'll type message: text.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=278)** Remember we started with a try block, so we're going to add a catch right here.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=284)** And in it, we'll write (error) and console.error this time.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=292)** ('Error in test route:').
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=298)** Next, we return NextResponse.json, and in brackets, ({ error: 'An Error occurred'}).
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=315)** Let's just break this into a new line so it's easier to understand.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=320)** We're also going to pass a status right here, and that's 500.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=324)** And that's it for our test route.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=327)** When someone hits this endpoint, it should generate a quick intro from the AI.
>
> **[5:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=333)** Since our app is already running, we can just go to our appsurl/api/test.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=338)** Or if it's not running already, go back to the terminal and [[npm]] run dev.
>
> **[5:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=344)** Our app is now running on localhost 3000, and we can take this route and /api/test to see what we get.
>
> **[5:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=354)** Great. So look at this.
>
> **[5:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=357)** Hi, I'm Ella, your friendly AI assistant, here to help you with information, problem solving, and creative ideas.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=364)** So this is the response we get from our AI.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=366)** And this tells you that your SDK installation worked.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=370)** The OpenAI client is set up right, and your environment variables are working.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=375)** It also means the API route is responding.
>
> **[6:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=379)** This quick test gives us confidence before we build more complicated features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Microsoft Azure|Azure]] (2), [[Next.js]] (1), [[GitHub]] (1), [[Codespaces]] (1)
> **Env Vars:** api (4), github_token (2), sdk (2), json (1)
> **Code Identifiers:** createopenai (4), generatetext (3), baseurl (1)
> **File Paths:** nextresponse.json (2), route.js (1), next.js (1), process.env (1)
> **API Endpoints:** get  (2), /api/test (2)
> **CLI Commands:** make (1), npm (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Tools:** github (1), terminal (1)

#### [Implement the AI chat route](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=0)** - [Instructor] Now that we've got our test route working, let's build the actual chat API endpoint.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=6)** This is where all the real conversation will happen between users and our AI assistant.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=13)** First, let's create the folder and file for our chat API In the API directory.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=20)** We'll create another folder and this time we'll name it chat.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=24)** Just like before in the chat directory, we'll create a route.js file.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=30)** Now let's start with a couple of imports.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=32)** Again, on line one we're going to import createOpenAI from ai-sdk/openai.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=40)** This time around we'll import streamText and smoothStream from AI.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=50)** streamText will allow us to stream the AI's response to the client and smoothStream is a function that makes the response more natural by sending [[Tokens]] in small chunks rather than in bulk.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=63)** We'll see more about this as we use it.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=66)** When working with AI responses, they can sometimes take a while to generate.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=70)** Let's make sure our route doesn't stem out by adding a maximum duration.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=76)** On line four, we have export const, maxDuration and we'll make this 30 seconds.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=83)** Note that in production, these duration settings still depends on your deployment environment.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=88)** Some platforms may have a default limit that's less than 30 seconds, and in that case you need to also set the API max duration from the platform.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=98)** For the main function that we'll handle our chat requests, since we're expecting users to send messages to the AI, we'll use a post handler.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=108)** On line six we'll export a sync function and we'll write posts here in each req.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=118)** Inside this function, we first need to get the messages from the request.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=122)** This will include both the user's current message and any previous message in the conversation.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=128)** We'll start with const and we're going to structure messages out of this value here, which is await req.[[JSON]], and that's the request which we have on line six.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=141)** Next we need to set up our connection to the AI model and we'll do that by defining an OpenAI variable, which is for the OpenAI clients and then creates OpenAI and then it will start with baseURL again.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=161)** And let's set this to [https://models.inference.ai.[[Microsoft Azure|azure]].com](https://models.inference.ai.azure.com)
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=170)** and we have our API key as process.env.GITHUB_TOKEN.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=179)** Time to generate the AI's response, we'll use the streamText function, which gives us a nice streaming response that appears in smaller chunks, just like a real conversation.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=191)** On line 14, we'll start with const result and this is a quote to the streamText function, which will call here and in it, we'll start with the model openai.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=204)** We'll call this and specify the model we want to use and let's stick with 4o.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=212)** For the system prompts, we're just going to do something simple here and see you are a helpful assistant named Lexi.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=224)** Next, we need to also pass in messages and we can either do messages as messages or just leave it as messages.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=233)** And then we'll add the smoothStream here and we'll do that with experimental_transform.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=243)** Then we'll call smoothStream.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=246)** This provides a more natural reading experience, but note that it is experimental and may change in the future, hence the name experimental right here.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=257)** Finally, we'll return the results, so we'll return this as a stream response and this time around we have results.toDataStream response.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=269)** Let's call this and this toDataStream response method converts our AI stream into a format that messages can send back to the client.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=279)** That's really it for our chat route.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=281)** Remember that this is the backbone of our application and we'll handle all the communication between users and the AI.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=290)** We'll build the client side implementation soon, which will then connect to this chat routes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[JSON]] (1), [[Microsoft Azure|Azure]] (1)
> **Code Identifiers:** streamtext (4), smoothstream (4), todatastream (2), createopenai (1), maxduration (1)
> **Env Vars:** api (5), github_token (1)
> **File Paths:** route.js (1), req.json (1), process.env (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)
> **Warnings:** note that (2)


### 3. Setting Up the Client-Side Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding IndexedDB](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=0)** - Before we implement the chat UI, we'll need to set up a database to store a chat history.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=6)** So let's take a look at IndexedDB, the underlying database we'll be using for our chat application.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=13)** IndexedDB is a browser database that lets web applications store large amounts of data.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=19)** Unlike cookies or local storage, it's designed for handling structured data directly in the browser without needing a server.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=28)** The index part of the name comes from its ability to create indexes on your data, which makes searching and retrieve information much faster.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=39)** By using IndexedDB in a chat app, chat history will be available even after a user reloads the page or closes the browser, and users would need to create an account to use the app.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=53)** Our app will also have instant access to the data with the ability to view a chat offline if we decide to implement that functionality.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=64)** Most web developers are familiar with LocalStorage, so let's compare the two.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=70)** LocalStorage is simple but limited.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=73)** It can only store strings.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=75)** It also has no built-in way to search data and is typically limited to 5 to 10 MB of storage.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=84)** IndexedDB solves this by letting you store [[JavaScript]] objects directly, create indexes for fast searching, use much more storage space, and perform complex data operations safely.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=98)** In our app, we'll be using Dexie.js, a lightweight library that simplifies working with IndexedDB.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=105)** This is because the standard IndexedDB API is known for being difficult to use.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=111)** It relies on callbacks and requires a lot of code for basic operations.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=117)** Here's what creating a database normally looks like with raw IndexedDB.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=122)** Dexie.js simplifies this with a cleaner promise based API that will make our code much more readable.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=131)** IndexedDB does have some constraints.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=133)** It sometimes doesn't work in private browser mode.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=136)** Users can clear the data through their browser settings and there's no guaranteed storage quota.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=143)** Browsers don't tell you exactly how much space you have, so it varies by device and user behavior, although these limitations are not major concerns for a chat application.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=155)** IndexedDB gives us a solid foundation for storing chat data in the browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **File Paths:** dexie.js (2)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - before (1)

#### [Setting up the database with Dexie.js](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=0)** - [Instructor] Let's go ahead and set up a client side database using Dexie.js.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=6)** To begin our implementation, we'll create a new file for a database module in the lib directory.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=13)** Now, if you don't have it already, you can create a lib directory in the source folder.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=19)** Inside of lib, we'll create a new file named db.js and in our db.js file, we'll start by importing Dexie from dexie.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=29)** So on line one we have import Dexie from dexie.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=34)** Remember that we've already installed this package, so we just need to import it here.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=40)** Now we'll create a database instance using export const db equal to new Dexie, and we'll call this with a string argument as chatApp.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=52)** This creates a new database and exports it so we can use it throughout our application.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=59)** The name chatApp is what will show up in the browser's IndexedDB storage.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=65)** With our database created, we need to define each structure.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=70)** Let's set up the schema.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=72)** We'll use db.version and we'll call this with 1 as an argument, then .stores.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=80)** Now let's call this and have an object argument, which we're going to open up here.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=86)** This is where we'll define our tables.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=89)** We are using version one of our schema, and if we ever need to change the structure later, we would increment this number.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=98)** For our first table, we'll add chats on line six, and then for its value we have a string in (indistinct) ++id, title, then createdAt.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=112)** This creates a table called chats with three fields.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=117)** The double plus syntax tells Dexie that id is an auto incrementing primary key, so it will automatically generate ids for our chats.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=128)** Next, we'll add a second table for storing messages.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=132)** On line seven, we'll write messages for the key and for its value, another string, ++id, chatId, role, content, and createdAt.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=146)** This creates a message table with an autoincrementing id, plus chatId to link each message to a specific chat, role to indicate if it's from the user or AI, content for the actual message text, and createdAt for timestamp.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=167)** With this, our database structure is now set up.

> [!info]- Semantic Content
>
> **Code Identifiers:** createdat (3), chatapp (2), chatid (2)
> **File Paths:** db.js (2), dexie.js (1)
> **Prerequisites:** set up (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Saving and retrieving data from the database](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=0)** - [Instructor] Now we'll create functions to interact with our database.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=4)** In the db.js file, let's start with a function to create new chats.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=10)** We'll export these functions so we can use them in other parts of our application.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=15)** On line 10, we'll start with export const createChat and that's equal to an arrow function.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=24)** Now for the parameter we have title and its value is a string new chat.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=30)** This creates a function called createChat that takes an optional title parameter.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=36)** If no title is provided, it's defaults to new chat.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=41)** For the function body, we'll add db.chats.add and then give it an object argument.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=48)** So we'll call that, and here we're using Dexie's add method to insert a new record into a chats table.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=56)** Our object argument will contain two properties.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=59)** The first property is title and we can have that as title, but since it's the same thing, we'll just leave it as this.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=68)** The second is createdAt and for its value, new date, we'll call that, then .toISOString, let's call that as well.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=79)** This does the current date and time in a consistent ISO string format.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=85)** Now we have a function that returns a promise, which results to the ID of the newly created chat.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=91)** Next, let's create a function to retrieve a chat by each ID.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=96)** On line 17, we have export and then const getChat, and this is equal to async ID right here and a arrow function.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=108)** We're just going to write db.chats.get, we'll call that with ID.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=114)** And this simple one-liner creates a function that takes an ID parameter, converts it to a number and uses Dexie's get method to retrieve the chat with that ID.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=127)** We're marking it as async to indicate it returns a promise.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=131)** Now we need a function to get all messages for a specific chat.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=137)** On line 19, we'll export getChatMessages and this is equal to an arrow function.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=147)** For the parameter we have chatId.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=150)** And inside this function, we'll first add a safety check.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=155)** If there's no chat ID, there's no chat ID right here.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=160)** Return Promise.resolve, we'll call this with an empty array.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=166)** This handles the case where chat ID might be undefined or null.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=171)** Returning an empty array wraps in the promise to avoid errors.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=175)** Now let's add the main query.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=178)** On line 22, return db.messages.where, we'll call that.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=186)** And then chatId as a string argument .equals chatId again but we're converting it to a number and then .sortBy createdAt.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=204)** Here we're using Dexie's query syntax to find all messages where the chat ID field equals our parameter, converting it to a number first.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=214)** Then we sort by createdAt to get messages in chronological order.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=220)** Or with that done, we can now use this function to retrieve messages for any chat.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=226)** Next, we'll create a function to save new messages.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=229)** On line 25, we'll export const saveMessage, and that's equal to async.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=239)** For parameters, we have chatId, role and content.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=247)** Now this creates a function with three parameters.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=250)** ChatId for the chat this belongs to, role to indicate if it's from user or assistant and content for the actual message text.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=260)** Now we'll save the message to our database using await db.messages.add.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=267)** We'll call that with an object argument.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=271)** And let's add the properties for add new message.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=274)** First we have chatId and voice value chatId, but converted to number.
>
> **[4:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=282)** Now this links this message to a specific chat.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=286)** Then we have role, which is either user or assistant.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=290)** And we also have content, which is the message text.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=294)** Finally, we have createdAt and for its value, new date, we'll call that.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=301)** Then .toISOString and we'll call that again.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=308)** We also want to return the complete message object so our component can use it.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=314)** Now since we are returning this exact structure here, we can just take that out and have a data variable.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=322)** So we'll then use this here and on line 32, we just have await db.messages.add(data) and then we also want to return it on line 34 by typing return data.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=337)** Great, we have a way to save messages.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=340)** Let's add a function to update a chat title.
>
> **[5:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=344)** We'll need this later for our automatic title generation feature.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=348)** On line 37, export const updateChatTitle
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=356)** and this is equal to async chatId for parameter and title.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=364)** And we have our arrow function.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=366)** Now, inside this function, we'll simply call await db.chat.update, and for the argument we have chatId.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=376)** Then another object argument and in its title.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=381)** Now this uses Dexie's update method to change just the title field of the specified chat.
>
> **[6:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=389)** Finally, let's add a function to delete chats.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=393)** On line 41, we have export const deleteChat, and this is equal to async chatId right here.
>
> **[6:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=404)** And first, we need to delete all messages that belong to this chat.
>
> **[6:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=409)** So await db.messages.where('chatId').equals chatId again,
>
> **[7:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=420)** but number here and then chatId finally .delete.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=425)** This finds all messages with the matching chatId and deletes them.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=431)** Then we need to delete the chat itself.
>
> **[7:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=434)** So await db.chat.delete and number gain chatId.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=443)** Now this removes the chat record from our database.
>
> **[7:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=447)** It's important that we delete the messages first then the chat to maintain referential integrity and avoid orphan messages.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=457)** That completes our database module.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=460)** In our chat app, we'll integrate this database with our [[React.js|React]] components.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=465)** This database layer is important for our chat application as it allows us to maintain chat history and provide a seamless experience for users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Code Identifiers:** chatid (14), createdat (4), createchat (2), toisostring (2), getchat (1)
> **File Paths:** db.js (1)
> **CLI Commands:** find (1)
> **Env Vars:** iso (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Building the Chat Interface and Logic

[↑ Back to Table of Contents](#table-of-contents)

#### [Building the ChatThread component](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=0)** - [Instructor] Let's implement the chat interface using the Versal AI SDK's useChat hook and create a component to display messages.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=9)** UseChat is a hook provided by the Versal AI SDK that helps with managing the state of messages in a conversation.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=18)** It handles user inputs, API communication, response streaming, and message status tracking.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=25)** This eliminates boilerplate code and lets us focus on UX.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=31)** To begin our implementation we'll create a component for displaying the chat messages.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=36)** And we'll do that in the components directory.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=38)** If you don't have it already, create one in the SRC folder.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=42)** And in SRC we have components.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=45)** Now in our components directory we'll create a file named ChatThreads.jsx.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=51)** In our new file we'll start implementing the ChatThread components.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=56)** At the top of the file we need to import some components.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=59)** First, we'll import User from lucide-[[React.js|react]].
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=64)** This gives us the user icon that we'll use for the user avatar.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=69)** Next we'll import react-markdown.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=73)** From react-markdown.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=75)** React-markdown will help us render formatted messages from the AI with support for markdown.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=82)** Our next step is to create a message component for individual messages.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=86)** So on line four we'll type const message.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=90)** And thus our variable with our components.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=93)** Now for our props, let's have role and content.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=98)** Now this component takes two props.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=101)** Role tells us if it's a user or assistant message, and component is the actual message text.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=108)** Now for the structure of this component we'll start with a wrapper div.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=113)** So on line five we have div, and we'll give it a className of message-wrapper.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=120)** Now this outer div will contain both the avatar and the message content.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=125)** We need to add different avatars depending on who sent the message.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=128)** So let's add a conditional expression for role.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=133)** And if role is user.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=138)** We'll add the user avatar code.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=141)** Now for the user avatar let's add div.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=145)** With class name user-avatar.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=150)** Let's close out div.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=152)** And inside it we'll include the user icon.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=156)** So we have user.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=158)** And let's give that class name of user-avatar-icon.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=163)** Let's close this so we don't get confused.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=165)** And then we also want to add a strokeWidth prop.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=168)** So strokeWidth is going to be 1.5.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=172)** We'll make our user component a self-closing one.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=175)** And for the else part of our condition, now let's add this parenthesis, and then the AI avatar.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=182)** So we have div for that.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=184)** And we'll give it a class name of ai-avatar.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=187)** Let's close that, and voice content we have AI.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=193)** Next, we need to add a container for the message content.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=197)** We'll use div with className of message-content-wrapper.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=204)** Now this div will hold both the sender name and the actual message.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=209)** For the sender name we'll use span.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=212)** And let's give a span className message-sender.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=218)** And inside it we'll add another condition now to show either you or AI assistant depending on the role.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=226)** So we'll say role, if role is user, then show you.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=231)** And if not, AI assistant.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=237)** Now for the message content itself, let's add a div with dynamic class names to style user and AI messages differently.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=246)** On line 17 we have div with className.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=250)** Then let's use the brackets here.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=254)** Since we're going to use template literal, so message content.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=259)** And we'll add a condition now and say if role is user.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=266)** Then let's have user-message-bg.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=271)** But if not, ai-message-bg.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=277)** And we'll make this a string.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=281)** Now let's close our div.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=283)** This uses a template literal to conditionally apply different background colors.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=289)** Finally, let's add the actual message content with markdown support.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=294)** We'll add div with className as markdown-content.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=302)** And inside it we'll use the react-markdown components to render the content.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=307)** So react-markdown, and then content.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=316)** Now let's create the main ChatThread components that will use these individual message components.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=323)** On line 30 we'll start with const ChatThread.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=327)** And this is equal to our components.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=330)** So we have a function for this.
>
> **[5:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=333)** And let's add props.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=335)** So for the props we'll add messages.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=338)** Status.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=340)** And chatThreadRef, so C has to be in small letter here.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=345)** So chatThreadRef.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=348)** This creates a functional component that takes three props.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=352)** Messages is the way of chat messages, status the current status like streaming or idle, and chatThreadref a reference for scrolling.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=362)** To improve the [[User Experience (UX)|user experience]] when there are no messages yet, let's define a welcome message.
>
> **[6:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=368)** So on line 31 we have const welcomeMessage.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=374)** And this is equal to an object right now with role and content properties, so let's set role as assistant.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=385)** Just make sure we spell that correctly.
>
> **[6:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=388)** And since it's from the AI, this is assistance.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=392)** Then we'll set content with a friendly greeting.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=397)** Let's say, "Hello! I'm Lexi."
>
> **[6:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=401)** We'll change this to double quotes since we are using the single quotes for I'm.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=408)** And "Hello! I'm Lexi, your AI assistant.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=413)** "How can I help you?"
>
> **[6:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=416)** Let's add an emoji here.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=418)** We'll use the hello emoji.
>
> **[7:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=421)** And that should be this one.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=424)** Now let's add the return statement for our components.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=428)** On line 36, return.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=431)** And we'll start with a div that has a chatThreadRef attached.
>
> **[7:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=436)** So div with ref, and this is equal to chatThreadRef.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=441)** And we'll give it a className of message-container.
>
> **[7:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=447)** Let's close our div.
>
> **[7:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=448)** Now inside of this container we need to conditionally render either a welcome message if there are no messages, or the list of actual messages.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=458)** Let's start with messages.length.
>
> **[7:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=461)** So this is a conditional, and if messages.length is equal to zero.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=466)** Then we'll render our welcome message using the message component.
>
> **[7:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=471)** So on line 39, message.
>
> **[7:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=475)** Let's close that spot for props.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=480)** Let's just spread welcomeMessage.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=484)** For the else case, we'll map over the messages away and render a message component for each one.
>
> **[8:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=492)** On line 41 let's have messages.map.
>
> **[8:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=497)** And then message, index.
>
> **[8:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=503)** And let's return message with key as index.
>
> **[8:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=509)** Again, we'll spread message.
>
> **[8:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=513)** Let's make sure our div is closed.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=516)** Great.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=519)** To improve user feedback, let's add a thinking indicator that shows when a message has been sent, but the AI hasn't started responding yet.
>
> **[8:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=529)** We'll add another conditional and we'll say status.
>
> **[8:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=532)** So if status is equal to submitted.
>
> **[8:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=536)** Then.
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=538)** Now for the indicator we'll add a row with an AI avatar and the animated typing dots.
>
> **[9:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=544)** For this we'll have a div with className as thinking-row.
>
> **[9:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=551)** And it needs another div.
>
> **[9:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=555)** This time with className as ai-avatar.
>
> **[9:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=559)** And let's name this AI.
>
> **[9:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=563)** On line 47 we can now add a div with className as typing-indicator.
>
> **[9:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=573)** Now from our start file, all we need to do is add three span tags here.
>
> **[9:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=578)** So span, span, span.
>
> **[9:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=581)** And we'll see the result of this once we check out our app on the browser.
>
> **[9:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=586)** Let's make sure our div tag is closed correctly.
>
> **[9:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=589)** So on line 52 we're going to close that div tag.
>
> **[9:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=593)** Finally, let's export the ChatThread so we can use it in other components.
>
> **[9:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=597)** So export default on line 58.
>
> **[10:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=601)** In ChatThread.
>
> **[10:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=603)** Great.
>
> **[10:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=604)** That completes our ChatThread component which will display all the messages in our chat interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[User Experience (UX)|User experience]] (1)
> **Code Identifiers:** classname (9), chatthreadref (5), strokewidth (2), welcomemessage (2), usechat (1)
> **CLI Commands:** make (5)
> **Env Vars:** sdk (2), src (2), api (1)
> **Exercise Files:** template (2), boilerplate (1)
> **Definitions:** is a  (2)
> **File Paths:** chatthreads.jsx (1)
> **Versions:** 1.5 (1)

#### [Setting up the chat logic and state management](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=0)** - [Instructor] Now let's move on to implementing our main page where we'll bring everything together.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=5)** We need to open the page.js file in the app directory.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=11)** This file is the main entry point for our app, and we'll update it with a chat functionality.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=17)** If you notice on line 17 to line 20, where we have get started by editing, src/app/page.js, is the same thing we have in our apps homepage right here.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=30)** Now for our main chat page, the first thing we're going to do is remove everything that's currently in page.js, and we'll add a lot of imports.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=38)** But first we'll start by adding use client at the top of the file to mark it as a client component.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=45)** And next, let's import all the [[React Hooks]] we'll need.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=48)** So we'll import useState, we also need useEffect, useCallback, and useRef.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=61)** We'll add the useChathook from the ai-sdk, which is the core of our chat functionality, and we'll do that on line 4.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=69)** We'll import useChat from @ai-sdk/[[React.js|react]].
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=73)** Now let's import all our database functions from the module we created earlier.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=79)** Imports db, createChat, getChatMessages, saveMessage, updateChatTitle, deleteChat, and getChat.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=95)** Let's fix the typo we have with updateChatTitle, and that's T in capital letter.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=101)** And we're importing this from ../lib/db.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=109)** We'll also need the [[Next.js]] router for navigation, and Dexie's useLiveQuery hook for reactive [[Database Queries]].
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=116)** So on line 14, we'll import useRouter from next/navigation instead of next/router.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=125)** And on line 15, we'll import useLiveQuery, and that's from dexie-react-hooks.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=131)** Let's import the icons we'll use for our UI, and we'll do that on line 16 by importing SendHorizontal, and that's from lucide-react.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=142)** So we're going to import SendHorizontal and MinusCircle.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=149)** Finally we'll import our custom components and styles on line 17.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=154)** Let's import ChatThreads from @/components/ChatThread, and we'll also import our styles.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=162)** So we'll do that from ../styles/page.css.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=168)** Now let's create our main component.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=172)** We'll export default function, and we'll name this main component Chat.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=179)** First, let's set up our essential variables and states.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=183)** We'll get the router for navigation, create a reference for our chat thread for scrolling, and set up states to track the current chat ID.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=191)** On line 21, let's start with the router variable.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=196)** And this is equal to useRouter, which we imported.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=200)** And we're also going to create a variable for the ChatThread ref, and let's call that chatThreadRef.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=206)** And this is equal to useRef, and we'll give it the initial value of null.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=212)** We'll also create a state for the current chat ID.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=217)** We have currentChatId, and setCurrentChatId, and that's equal to useState with an initial value of null as well.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=229)** Now we'll use Dexie's useLiveQuery hook to [[Fetch]] our chats from the database.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=234)** This will automatically update our UI when the database changes.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=239)** So on line 26, we create a variable named fetchedChats, and this is equal to useLiveQuery, and let's call this with a function argument.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=253)** And this is going to return db.chats.orderBy, and in brackets, we have createdAt, then .reverse and .toArray.
>
> **[4:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=268)** Here we're getting all chats ordered by the creation dates, which means the newest first, and transforming the results into an array.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=278)** We'll also get the current chat using another live query based on the current chat ID states.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=285)** So let's create a current chat variable for that.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=289)** We have const currentChat on line 30, and that's equals to useLiveQuery.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=295)** We'll call this again with a function argument, and this returns db.chats.get, and we'll convert this to a number and that's the current chat ID.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=310)** And let's have current chats inside of this array.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=315)** What this does is get the current chat from the database based on the current chat ID state.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=321)** The array in the second argument is a dependency array that triggers the query to rerun when the current chat ID changes.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=329)** Now comes the core of our chat functionality, the useChat hook.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=334)** Let's start with const, and we'll list all the values and functions we need from this hook.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=340)** So we'll start with messages, input, handleInputChange, handleSubmit, setMessages, status.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=358)** And this is equal to useChat.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=362)** Let's call this with an object arguments.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=366)** And before we move on, we're destructuring several items from useChat.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=370)** Messages represent the array of chat messages, input for the current input field value, handleInputChange is the function to update input when typing, handleSubmit is the function to submit messages, setMessages for updating messages manually, and status for current chat status like idle or streaming.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=391)** Now let's add a unfinished callback to save AI responses to our database.
>
> **[6:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=396)** Inside the object argument on line 43, we'll type onFinish.
>
> **[6:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=402)** And for its value, we have an async function with a message parameter.
>
> **[6:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=410)** And let's start with a condition.
>
> **[6:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=412)** So if currentChatId and message.role is equal to assistant, then we want to save message.
>
> **[7:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=429)** So on line 45, we'll call the saveMessage function, and we'll pass in the arguments, currentChatId, message.role, message.content.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=443)** This function is called when the AI finishes generating a response.
>
> **[7:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=448)** We're saving it to our database, but only if it's from the assistant, not from the user since we handle those separately.
>
> **[7:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=454)** Next, we'll implement navigation functions.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=457)** Let's create a navigate to chat function using useCallback to memorize it.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=463)** On line 50, we'll create a navigateToChat variable, and this is equal to a useCallback function we're calling here, and we'll go on with our arrow function with chatId as a parameter, and then a router.push.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=485)** We're going to update the chatId query in the URL.
>
> **[8:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=489)** So this is chatId equal to.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=493)** Since we want to use a template literal, let's go with the back ticks.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=498)** And now we can say chatId is equal to chatId.
>
> **[8:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=505)** Next we'll set currentChatId as the chatId.
>
> **[8:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=512)** Let's also add a dependency array.
>
> **[8:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=515)** And for that, we'll just put in router on line 55.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=519)** This function updates the URL to include the chatId as a query parameter, and also updates our currentChatID state.
>
> **[8:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=527)** Let's add a function to create and navigate to a new chat.
>
> **[8:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=531)** We'll name a function initializeNewChat, and this is equal to useCallback.
>
> **[9:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=540)** Again, we have an async function this time.
>
> **[9:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=546)** And we'll say const chatId is equal to await createChat.
>
> **[9:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=553)** On the next line, we can now navigate to chat, and we'll navigate to the chat ID.
>
> **[9:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=561)** Let's also add a dependency array with navigateToChat on line 61.
>
> **[9:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=568)** Now these calls are createChat function from the database module, and then navigates to the newly created chat.
>
> **[9:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=576)** We'll also need a function to handle setting the active chat based on various conditions.
>
> **[9:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=582)** On line 64, let's create a new function named ActiveChat.
>
> **[9:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=587)** And this is equal to useCallback.
>
> **[9:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=591)** And inside of it, we have async, requestedChatId, and we'll set its default value as null.
>
> **[10:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=601)** And this function takes an optional requestedChatId parameter.
>
> **[10:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=606)** First we'll check if there are no chats at all, in which case, we'll create a new one.
>
> **[10:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=611)** So on line 66, we'll add a condition and say if fetchedChats and fetchedChats.length is equal to 0,
>
> **[10:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=626)** let's return initializeNewChat, and we'll call this right on line 67.
>
> **[10:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=637)** Then we'll navigate to either the requested chat or the first chat in the list.
>
> **[10:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=642)** And on line 70, we'll add another condition and say, if requestedChatId, then navigateToChat.
>
> **[10:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=650)** And we're going to call that with the chatId.
>
> **[10:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=654)** So just make sure this is a number, and let's have requestedChatId.
>
> **[11:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=661)** Finally, we'll say else navigateToChat, and let's call that and navigate to the first chat in the list.
>
> **[11:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=672)** So fetchedChats, and just to be sure fetchedChats exists, we use a ternary operator right there, and .(0).id.
>
> **[11:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=684)** For our dependency array, we'll add navigateToChat, initializeNewChat, and fetchedChats.
>
> **[11:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=699)** Great. Now we've set up our essential variables and states.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[React Hooks]] (1), [[Next.js]] (1), [[Database Queries]] (1), [[Fetch]] (1)
> **Code Identifiers:** chatid (9), fetchedchats (6), usecallback (5), uselivequery (5), currentchatid (5)
> **UI Navigation:** navigate to (5), open the (1)
> **File Paths:** page.js (2), src/app/page.js (1), next.js (1), styles/page.css (1)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (3)
> **Env Vars:** url (2)
> **CLI Commands:** make (1)

#### [Building the chat interface and user interactions](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=0)** - [Instructor] It's time to add a use effect hook to initialize our chat when the component lose.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=6)** And we'll do this in the page.js file.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=9)** But first, let's move the set active chat function into the chat component where it belongs.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=17)** Great. We can now start working on the user effects.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=21)** On line 75, I'll start with the user effects and in it we have arrow function.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=27)** First, we'll skip if the chats are not loaded yet, so let's use a conditional for that and we'll say, if not fetched chats just return.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=39)** If no chat is selected yet, we'll get the chat ID from the URL query parameters or default to the first one, and we'll add another conditional answer.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=48)** If not CurrentChatId then we'll declare a variable chat id and this is equal to new URLSearchParams.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=60)** Let's call that with window.location.search and then .get.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=68)** So we want to get the chat ID Param.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=72)** Next thing we'll do is setActiveChat to chatId.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=78)** Then we'll load messages for the current chat.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=83)** On line 83, we'll declare a loadChatMessages variable and this is equal to an async function and for its content we have try.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=96)** And then let's declare a loadedMessages variable.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=100)** So loadedMessages, and this is equals to await getChatMessages and we'll pass the currentChatId as its arguments.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=110)** With that, we can now setMessages as loadedMessages.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=116)** Next, we'll add a catch statement and let's get the error.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=123)** Then we can just console.error failed to loads messages, and then the error.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=133)** Next, let's call the loadChatMessages function.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=137)** And we can add our dependency array.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=140)** We'll have fetchedChats.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=142)** We need currentChatId as well, setActiveChat and setMessages.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=151)** Let's add another use effect hook to automatically scroll to the bottom of the chat when messages change.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=158)** On line 95, we'll start with useEffect and then it need a function.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=164)** Now we'll start with the condition that says if chatThreadRef.current and messages.length is greater than zero, then chatThreadRef.current.scrollTop is equal to chatThread with current.scrollHeight.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=189)** For this to work, we'll add a dependency array and pass messages and currentChatId.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=197)** Setting the scrollTop to the scrollHeight of the chat thread means that the chat thread will be scrolled to the bottom when the messages change or when a chat is loaded.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=208)** Let's implement a handle chat submit function to manage what happens when a user sends a message.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=215)** On line 101, we'll create a handleChatSubmit variable, and this is equal to an async function and we'll get the event.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=226)** First, we'll prevent the default form submission and return error if the input is empty.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=232)** Let's use e.preventDefault for that and we'll call this.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=237)** Then we'll add a conditional and say, if not input.trim, just return.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=245)** Or we'll save the user's message to a database nest.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=249)** And for that await saveMessage, we'll call that with the currentChatId user and then input.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=260)** Finally, let's call the handleSubmit function from use chat to send the message to the AI.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=267)** And we'll do this by just writing handleSubmit and calling that.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=275)** Oh, with this done, we can now add a function to handle deleting chats.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=279)** On line 111, we create a handleDeleteChat variable.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=285)** And for each value we'll use a useCallback.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=289)** And let's call this with an async function.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=291)** So let's say async and then we'll start by skipping if no chat is currently selected.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=299)** So a conditional that says, if not currentChatId just return.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=306)** Next, let's show a confirmation dialogue.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=308)** And if the user confirms, or we'll delete the chat from our database and redirect to the homepage.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=315)** Another conditional on line 114 that says if window.confirm and we'll ask the user, are you sure you want to delete this chat?
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=327)** And I'm going to spell that right.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=329)** And if the user says yes, await deleteChat, and we'll call that with the currentChatId.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=338)** Next, we can now push, so we just push to the homepage, but without any query Param.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=345)** And we also want to set the current chat ID to null.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=352)** For our dependency array, we'll add currentChatId and router.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=360)** Now let's build the UI for a component.
>
> **[6:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=363)** First, we'll show a loading state if the charts are not loaded yet, and we'll use a conditional for that.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=370)** Let's say online 121, if not fetchedChat, return a div.
>
> **[6:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=378)** Let's give a div a class name of loading state.
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=383)** And then for its value, we can just write loading.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=386)** But feel free to change this to whatever you want.
>
> **[6:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=388)** You can even add a loading animation.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=391)** For the menu, we'll return a container div that will hold a sidebar and chat area.
>
> **[6:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=398)** So we can just return on line 25 and let's start with the container div.
>
> **[6:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=404)** Let's give a div class name of chat container.
>
> **[6:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=410)** In the chat container div, let's add the main chat area and we have another div with class name chat main and we'll close that div.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=419)** Now for the chat header, we'll add a div with the chat title and a delete button.
>
> **[7:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=425)** So let's have div on line 128 and this time we'll give you the class name of chat header.
>
> **[7:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=433)** Now in this chat header, we'll start with another div with class name of title group.
>
> **[7:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=440)** Remember that we've already handled all of the styling in the CSS files.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=446)** Now inside of the title group, the next thing we'll have is h1 for the title.
>
> **[7:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=451)** And let's give it class name of chat title.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=456)** Now for its value, we'll say if there's a chat title, so I just have to make sure we write that correctly.
>
> **[7:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=465)** So if there's a chat title, if current chat title, then we'll use that.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=470)** If not, new chat.
>
> **[7:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=473)** And let's close this.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=476)** Now we'll add a button next, and this button will be used to delete the chat if the user wants.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=484)** So let's close our button tag.
>
> **[8:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=488)** And for each attributes we'll start with an onClick handle.
>
> **[8:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=494)** So onClick handleDeleteChat.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=498)** Next, we'll give you the class name of delete button.
>
> **[8:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=503)** And for accessibility aria label right here on line 134 as delete chat.
>
> **[8:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=509)** So let's just write this properly, delete chat.
>
> **[8:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=514)** Now for our buttons value, we'll use the MinusCircle icon and let's give it class name of delete icon.
>
> **[8:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=523)** We also want to set the stroke width, so S-T-R-O-K-E and then width, let's say that's a 1.5, and we can now close this.
>
> **[8:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=535)** Next, we'll add a chat thread component to display the messages, passing it, messages, status, and ref.
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=543)** So on line 141, we have ChatThread.
>
> **[9:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=547)** And for its props, we're passing messages as messages, status as status and chatThreadRef as chatThreadRef.
>
> **[9:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=559)** We can close this.
>
> **[9:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=561)** Now finally, we'll add the input area where users can type and send messages.
>
> **[9:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=568)** For our input area, we'll start with a div And let's give you the class name input area.
>
> **[9:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=575)** We'll close that and then add a form.
>
> **[9:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=578)** So the onSubmit value for our form is going to be handleChatSubmit, and then a class name of input form.
>
> **[9:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=590)** The form will have an input field for the message, which is connected to the input state from use chat.
>
> **[9:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=596)** So let's add the input field and let's make it self closing, so we can start supplying the attributes.
>
> **[10:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=605)** Now for value, we want value as input.
>
> **[10:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=609)** Placeholder we're just going to write Message AI Assistance.
>
> **[10:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=616)** We'll add an onChange attribute as well, and say, handleInputChange.
>
> **[10:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=624)** Now for disabled, this is going to depend on the status.
>
> **[10:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=628)** So if status is not ready, and if status is also not undefined, then we want a button as disabled.
>
> **[10:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=641)** Let's also give it the class name of input field.
>
> **[10:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=644)** And finally, an aria label.
>
> **[10:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=648)** The value is going to be Chat input.
>
> **[10:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=652)** Now we'll add a summit button that's disabled when appropriate.
>
> **[10:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=656)** So let's have a button and we'll close this then supply our buttons attributes.
>
> **[11:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=663)** So we'll start with a type and this is going to be submit.
>
> **[11:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=667)** Now for disabled, this will depend on a few conditions.
>
> **[11:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=672)** So if not input.trim or if status is equal to submitted or if status is equal to streaming.
>
> **[11:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=687)** So if any of these, then let's disable our button.
>
> **[11:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=691)** We'll give a button the class name as well and we'll write submit button for the class and an aria label.
>
> **[11:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=700)** And let's just write, send message.
>
> **[11:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=707)** Now inside of our button, we can now use the SendHorizontal icon.
>
> **[11:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=712)** We'll give it a class name of submit icon and then a stroke width of 1.5.
>
> **[12:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=722)** Let's close that.
>
> **[12:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=723)** And that completes our main components.
>
> **[12:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=727)** Let's see what we've built so far and show your app is running.
>
> **[12:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=730)** If it's not, you can use your terminal and run the command [[npm]] run dev.
>
> **[12:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=735)** And with that, we can go over to the browser.
>
> **[12:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=737)** Now our app is open on local host 3000, and you can see that our AI assistant starts with, Hello, I'm Lexi, your AI assistant. How can I help you?
>
> **[12:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=747)** We can then say, Hey, I'm Ebenezer and see what our AI is going to say.
>
> **[12:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=753)** Oh, great. Hi, Ebenezer. Nice to meet you.
>
> **[12:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=756)** How can I assist you today?
>
> **[12:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=757)** Awesome. So that's working well.
>
> **[12:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=759)** We can test our delete functionality and see that that works too.
>
> **[12:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=763)** Awesome. So that works as well.
>
> **[12:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=766)** We can fully test everything because we haven't implemented the sidebar component yet, but we'll do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Code Identifiers:** currentchatid (7), chatthreadref (4), loadedmessages (3), setactivechat (2), loadchatmessages (2)
> **CLI Commands:** make (2), npm (1)
> **Env Vars:** url (1), css (1)
> **Versions:** 1.5 (2)
> **File Paths:** page.js (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)

#### [Building the chat sidebar component](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=0)** - [Instructor] It's time to build the sidebar components which will enable users to switch between different conversations and start new ones.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=8)** First, we'll create a new file named sidebar, the JSX in the components directory.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=15)** So in the components directory, we have a sidebar, the JSX file.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=20)** At the top of our sidebar, the JSX file, we'll add the use client directive, and this is to mark this as a client side component.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=29)** Next, we need to import the necessary modules.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=33)** Let's import use states from [[React.js|react]].
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=37)** We'll also need link from next/link for client side navigation.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=42)** Online four, let's import link from next/link and we'll need some icons too.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=48)** So let's import pen line.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=53)** We'll import menu as well.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=56)** And we're import this from lucide react.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=59)** Pen line will be for a new chat button and a menu for our mobile menu toggle.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=67)** Finally, let's import our CSS file and we'll do that with import ../styles and then /sidebar.css.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=79)** Now let's define our component and its props.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=83)** Online eight, we'll start with exports, and let's make this a default export.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=88)** So export default function sidebar.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=94)** Now for our component props, we have fetched chats, current chat ID, set current chat ID, and initialize new chat.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=108)** These props will allow a sidebar to display the list of chats, know which chart is currently active, change the active chats, and create new chats.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=119)** Next, we need to ask state for the mobile sidebar toggle.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=122)** So let's continue with our components and in the right const, it's sidebar open.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=132)** And then for the function, sets is sidebar open.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=138)** And this is a quote to use states, and the default value will be false.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=143)** Now this creates a state variable that's initially false, meaning the sidebar is closed on mobile by default.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=151)** Let's add functions to open and close the sidebar.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=155)** First, const open sidebar.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=158)** And this is a quote to an arrow function.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=162)** And all we need to do is set a sidebar open to true.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=167)** And similarly for closing const close sidebar.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=174)** And we have a arrow function that sets a sidebar open to false.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=181)** Let's add an empty line here, just to make things clearer.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=185)** Now, put an open sidebar and close sidebar in functions, makes them easier to using our JSX.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=193)** Let's start building the JSX, beginning with the return statement and a fragment.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=201)** First, let's add the mobile menu button that will only be visible on smaller screens.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=207)** We'll use a button element with the unclick class name and variable attributes.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=212)** So we have a button on line 22, and let's close that button.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=219)** And for the on click value, we'll use open sidebar, which we declared above.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=226)** And let's give it the class name of mobile menu button.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=232)** Then aria label, the value's going to be open menu.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=239)** Inside this button, let's add the menu icon and we'll use menu, which we imported above, and give it the class name of mobile menu icon.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=251)** And let's set the stroke width.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=254)** Its value is going to be 1.5, and we can close the menu components.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=260)** Now we'll add an overlay for the mobile sidebar.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=264)** This will be a div that sits behind the sidebar and can be clicked to close it.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=270)** So for the sidebar overlay, we have div, and let's make this a self closing div.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=277)** So we can just give you the attribute's class name.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=281)** And since we've handled this in the CSS, we'll use temp literal, so sidebar overlay, and then a temp literal, I will say, if a sidebar open, then this should be active.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=296)** So we set this to active.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=298)** And if not, let's just use an empty string.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=303)** Let's also give a div an unclick handler.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=305)** So on click, and that should be close sidebar.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=311)** Now let's add the main sidebar container.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=315)** Online 35, we'll start with div.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=317)** And let's close that and give a div class name.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=320)** This class name is also, conditionally, going to add the open class.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=324)** Now let's use temp literals again.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=327)** So we have sidebar, and then if the sidebar is open, so a sidebar open, then we'll add the open class.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=336)** If not, we'll have just an empty string.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=340)** Let's fix this type over here.
>
> **[5:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=342)** So sidebar is sidebar open, open, if not an empty string.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=347)** Let's add the sidebar header with the title and the new chat button.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=353)** So inside of a sidebar, we'll start with another div.
>
> **[5:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=357)** Give it the class name of just sidebar header.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=361)** Let's close our div.
>
> **[6:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=363)** Next, inside this sidebar div, we'll first add an H two element for the title.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=369)** So H two and class name.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=371)** Class name's going to be sidebar title, and let's close that.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=377)** And for its value, we'll just write chats.
>
> **[6:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=379)** Next, we'll add a button for creating new chats.
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=383)** So button tag.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=385)** And then let's give our button some attributes.
>
> **[6:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=389)** So we'll start with on click.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=391)** And for its value, we have a function.
>
> **[6:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=395)** And when this button is clicked, we want to initialize a new chat.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=399)** And we also want to close the sidebar.
>
> **[6:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=402)** So close sidebar.
>
> **[6:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=406)** Let's give a button to class as well.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=408)** So class name is going to be new chat button.
>
> **[6:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=412)** And then aria label bell is going to be new chat.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=418)** Now inside this button, let's add the pen line icon.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=423)** On line 46, we have pen line.
>
> **[7:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=426)** And let's give it a class name of new chat icon, and then stroke width.
>
> **[7:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=432)** So stroke width, and we'll set that to two.
>
> **[7:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=438)** Now let's add the chart list container.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=441)** We'll start with a div, and then we'll give you the class name of chart list.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=446)** Now inside this div, we'll map over the fetched chats array to create a link for each chart.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=452)** And let's have that online 51. So fetchedchats.map.
>
> **[7:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=457)** And we want to have chats with the parenthesis.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=463)** And the optional training right here ensures, we don't get an error if fetched chart is null or undefined.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=470)** Now for each chart, we'll create a link component.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=474)** On line 52, we have link.
>
> **[7:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=477)** And let's close that, just so we don't forget.
>
> **[8:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=480)** And let's give a link key of chat.ID.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=485)** We also want to add an href attribute.
>
> **[8:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=487)** And for each value, we have chat ID equal to the chat.id, and we'll add an on click attribute as well.
>
> **[8:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=497)** And for its value, we have this function.
>
> **[8:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=502)** And then our function will set current chat ID to chat.id.
>
> **[8:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=508)** And then we can now close the sidebar.
>
> **[8:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=513)** We'll add the class names to our link as well.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=516)** And for our class name, let's use a condition.
>
> **[8:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=519)** So first, we'll start with chat item and then a template literal.
>
> **[8:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=524)** So if the current chat ID is a quote to the chat id, so chat.id, then let's have chat item as active, so chat item active.
>
> **[8:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=538)** But if not, we'll just return an empty string.
>
> **[9:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=543)** Inside each link, we'll add a span for the chat title.
>
> **[9:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=548)** Online 61, we'll start with span, and we'll add a class name to our span.
>
> **[9:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=554)** So let's give our span the class name of chat item text.
>
> **[9:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=562)** And then a temp literal here that says current chat ID.
>
> **[9:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=567)** So if the current chat ID is equal to chat.id, then chat item text active.
>
> **[9:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=577)** We want to break this down just so it's easier to read.
>
> **[9:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=580)** So let's move current chat ID to the next line.
>
> **[9:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=584)** And we can now indent our condition.
>
> **[9:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=588)** So if not, we have chat item text inactive.
>
> **[9:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=598)** Inside the span, we'll display the chat title, or new chat if there's no title yet.
>
> **[10:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=604)** Let's have chat.title.
>
> **[10:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=606)** So if there's chat.title, let's display that.
>
> **[10:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=609)** If not, new chat.
>
> **[10:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=613)** Let's also add a message that shows when there are no chats yet.
>
> **[10:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=617)** Online 73, we'll have fetched chats and if fetchedchats.length, so let's scroll up, if fetchedchats.length is equal to zero,
>
> **[10:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=632)** and then a paragraph element with a message.
>
> **[10:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=635)** So let's have this message right here.
>
> **[10:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=637)** So P with class name as empty chats.
>
> **[10:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=641)** And let's close our tag.
>
> **[10:44](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=644)** And for its value, we have no chats yet.
>
> **[10:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=649)** Finally, let's add a footer with the AI assistance status.
>
> **[10:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=653)** We'll add a div with class name, a sidebar footer.
>
> **[11:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=660)** And inside this footer, we'll add a div for the AI status indicator.
>
> **[11:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=665)** So on line 79, we have div with class name AI status.
>
> **[11:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=670)** And let's close that.
>
> **[11:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=672)** Inside this div, we'll add another div for the indicator itself.
>
> **[11:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=677)** So let's have div with class name as AI status indicator.
>
> **[11:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=685)** And we'll also add a dot to show the AI is online, and some text.
>
> **[11:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=691)** So div with class name as AI status dot.
>
> **[11:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=697)** Let's close our div properly. Finally, a div for the text.
>
> **[11:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=702)** So div with class name AI status text, and let's write AI assistance.
>
> **[11:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=711)** We also want to add one more div for a subtext message.
>
> **[11:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=716)** And let's do that after this div online 83.
>
> **[12:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=721)** So we'll add a new div with class name, AI status subtext.
>
> **[12:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=728)** And here to help 24/7.
>
> **[12:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=737)** I know that's a lot of divs, but this is just so that we can have a sidebar that looks good.
>
> **[12:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=743)** Now let's just ensure that our divs and fragments are closed properly.
>
> **[12:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=753)** Great.
>
> **[12:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=755)** And with that, our sidebar component is called complete.
>
> **[12:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=758)** Let's test it out so we can immediately see what we've done.
>
> **[12:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=762)** Now we'll need the sidebar in the page GS file.
>
> **[12:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=766)** So let's go back to page GS.
>
> **[12:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=768)** And just after this return statement on line 25 where we have the chat container, let's add the sidebar and that should auto-import it on line 19.
>
> **[13:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=780)** Now let's use the sidebar.
>
> **[13:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=782)** And first of all, we'll close it, then we'll supply the props.
>
> **[13:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=788)** We're going to supply fetched chats as fetched chats.
>
> **[13:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=791)** So we've declared all of this earlier.
>
> **[13:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=794)** We'll supply current chat ID as current chat ID.
>
> **[13:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=798)** We'll also add set current chat ID, so that's the function.
>
> **[13:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=804)** And finally, initialize new chats.
>
> **[13:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=810)** And that's as initialize new chats.
>
> **[13:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=813)** Great.
>
> **[13:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=814)** Let's go over to our browser and see what we've done with the sidebar.
>
> **[13:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=819)** Back to our browser, and you can see that we have a sidebar showing up nicely.
>
> **[13:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=823)** And for the sidebar footer, this is what we're trying to achieve at the very end, AI assistant here to help 24/7.
>
> **[13:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=830)** Let's also confirm that our sidebar works properly on mobile, and that's it on mobile.
>
> **[13:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=836)** Our sidebar tucks away nicely.
>
> **[13:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=838)** We also have this button here, the hamburger button.
>
> **[14:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=842)** And when we click on it, that opens up a sidebar, and clicking outside of the sidebar should close it too.
>
> **[14:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=847)** Awesome. That works as it should.
>
> **[14:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=850)** We should be able to click this new chat button.
>
> **[14:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=853)** And that takes us to a 404 page.
>
> **[14:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=856)** Now when we look at the URL bar, you can see that this takes us to slash chat ID, instead of treating this as a query param.
>
> **[14:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=866)** So this should have the question mark before chat ID.
>
> **[14:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=869)** And it's a simple fix when we go back to our code base and over to side by the JSX file.
>
> **[14:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=876)** Let's go to the link.
>
> **[14:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=877)** So on line 52, where we have the link tag, we'll check its href attributes and just add the question mark right before the chat ID.
>
> **[14:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=887)** And back to our browser, clicking this shouldn't give us the 404 error anymore.
>
> **[14:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=893)** The create new chat button should also work.
>
> **[14:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=895)** Let's test that. And it creates a new chat successfully.
>
> **[15:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=900)** Although we want the create new chat functionality to create a new chat and then take us directly to that new chat.
>
> **[15:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=907)** So we have to ensure that the ID we are being navigated to is correct.
>
> **[15:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=913)** And let's go over to our db.js file just to ensure that we are properly returning the ID.
>
> **[15:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=919)** And online 10 where we have create chats, we're currently not returning the ID, and we can simply fix this by removing this caller phrase so that our function directly returns the value of db.chat.add, which is the ID.
>
> **[15:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=938)** Now let's go back to our browser and see if it works this time.
>
> **[15:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=943)** So let's click this button to create a new chart also, and that creates a chat.
>
> **[15:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=948)** So chat ID equal to five, and we create another chat and it takes us to chat ID equal to six.
>
> **[15:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=955)** Great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2)
> **Env Vars:** jsx (6), css (2), url (1)
> **UI Navigation:** toggle (2), scroll up (1), click on (1), go to (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **File Paths:** sidebar.css (1), db.js (1)
> **Versions:** 1.5 (1)


### 5. Implementing Chat Title Generation

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating the chat title generation API](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=0)** - [Instructor] It's time to implement the functionality for automatically generating titles for our conversations based on the content of the first message.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=9)** This will make it much easier for users to switch between conversations as they build up a history of chats with the AI.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=18)** Back to our codebase, let's start by creating an API route for generating titles.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=24)** We'll create a new folder in the api directory, which is inside of src/app.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=30)** Now in api, let's create a folder named generate-title.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=36)** In our new generate-title folder, we'll create a file and name it to route.js.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=42)** In this new route.js file, we need to import the necessary modules.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=47)** On line one, let's start by import { createOpenAI } from '@ai-sdk/openai'.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=55)** This will let us connect to OpenAI's models.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=58)** Next, let's import { generateText } from 'ai', generateText, and that's from ai.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=66)** Now this generateText function will help us generate non-streaming text responses, which is what we want for a title generation.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=75)** And finally, on line three, let's import { NextResponse } from 'next/server'.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=84)** We'll use this to create API responses in our [[Next.js]] API route.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=88)** So this is going to be very similar to what we did in this test route.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=95)** And on line five, with our important place, let's set the runtime to edge and export const runtime = 'edge'.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=107)** Next thing we're going to do is create our OpenAI client.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=112)** So one line seven, const openai = createOpenAI.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=119)** And for the configuration, let's have our baseURL as the [[Microsoft Azure|Azure]] endpoint, so [https://models.inference.ai.azure.com](https://models.inference.ai.azure.com).
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=135)** And we'll add a comma right there so that we can also add the apiKey, and just like what we did before, process.env.GITHUB_TOKEN.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=149)** Now let's create a POST handler function.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=153)** We'll start with exporting this async function, and we'll call it POST.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=159)** We want to get the request, and in it, we'll add a try catch block.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=165)** Now inside this try block, let's extract the message from the request body.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=171)** So const and with the structure message.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=174)** And then for its value, await req.[[JSON]](), and let's call that.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=179)** This will be the user's first message in a conversation, which we'll use to generate the title.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=185)** Now let's use the generateText function to create a title based on this message.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=191)** On line 15, we'll start with getting text.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=195)** So the structuring text from await generateText, and let's call that.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=200)** Now this will take an object argument, and here we can add our configuration.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=206)** So let's set the model to openai, we'll call that.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=211)** And we can just use gpt-4o.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=214)** Remember, you can use whichever model you want.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=217)** You can see that we have a list of model, for example, in VS Code, when you type GPT, oh, that's not showing anymore.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=223)** But yeah, we'll go with gpt-4o, and we'll add a system message to guide the AI.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=230)** So let's add a comma, and then let's add a system message.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=235)** So let's say, "You are a helpful assistant that generates concise titles for conversations."
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=247)** Let's add a full stop right there.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=250)** And we can just go with the regular course since we didn't break this into a second line.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=258)** Next, we'll add the prompt that tells the AI what we want.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=261)** So start with prompt, and just make sure we have the comma on line 17.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=267)** And for our prompt value, let's start with a back tick this time and say, "Use this first message from a conversation to generate concise title without any quotes."
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=283)** So we need to break this down at a point, so, "Without any quotes."
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=289)** And this is just to make sure that our title is formatted well and we don't have a mismatch on the front end.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=296)** So we also want to tell it's max five words.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=300)** And finally, let's give it the message.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=303)** So we'll use a template literal, and on line 19, we have message.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=309)** And let's close the quotes.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=312)** With the title generated, we can return it as a JSON response.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=316)** So on line 22, we'll return NextResponse.json, let's call that with the object argument and we'll have title: text.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=330)** Now let's add the catch block to handle any errors.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=334)** On line 23, we have our catch block. We'll get the error.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=340)** And for error handling, we'll return NextResponse.json.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=346)** Let's call that with our object argument.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=349)** And for the error, we can just write, "Failed to generate title," and let's just say status: 500.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=359)** But you can choose to make this much better and use the actual error.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=365)** We have a syntax error, and that's because we have to close this object.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=376)** Great.
>
> **[6:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=377)** Now this completes a title generation API, and this API will take messages, impute, and return a concise title that summarizes the content of the message.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=387)** The next thing we're going to do is implement this in our front end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Microsoft Azure|Azure]] (2), [[Next.js]] (1)
> **Env Vars:** api (5), post (2), github_token (1), gpt (1), json (1)
> **Code Identifiers:** generatetext (5), createopenai (2), baseurl (1), apikey (1)
> **File Paths:** route.js (2), nextresponse.json (2), next.js (1), process.env (1), req.json (1)
> **CLI Commands:** make (4)
> **Analogies:** just like (1), for example (1)
> **URLs:** [https://models.inference.ai.azure.com](https://models.inference.ai.azure.com) (1)
> **API Endpoints:** post  (1)

#### [Integrating chat title generation in the UI](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=0)** - [Instructor] And now that we have our title generation API, let's integrate it into our main page component.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=6)** We need to open the page.js file in the app directory and add a function to call this API.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=13)** In our page.js file, let's add the title generation function.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=18)** We can do this just right after the set active chat function and before the first use effect.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=24)** On line 76, we can declare the generates title variable, and for its value we have an async function.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=35)** Now let's add a message param, and then we can start with a try cut block.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=42)** So try, now inside the try block, we'll make a post request to our title generation API.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=48)** On line 78 comes response equal to await [[Fetch]] and we'll fetch/API/Generate-title, which is what we named it.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=61)** Next, we'll configure the request with the appropriate method, headers and body.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=66)** So let's add a curly brace right here.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=69)** And on line 79 we'll start with method, and that's post.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=75)** Next we'll add headers.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=79)** And for the value of headers, we have content-type.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=85)** And this is going to be application/[[JSON]].
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=90)** We'll also add body, and for its value, JSON.stringify.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=96)** Let's call that.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=99)** And then we have message in an object.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=102)** Now let's check if the request was successful.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=107)** We'll add a condition now, and that's after this response variable.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=111)** We'll say, if not response.ok, then we want to throw an error, so throw new error and, "Failed to generate title."
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=126)** Now this is going to handle failed requests.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=128)** If the request was successful, we'll extract the title from the response.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=134)** And we'll do that on line 86.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=136)** Let's scroll up.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=137)** So this is more visible, and on line 86, Const title and this is equal to await, so we add the structure and title, response.json.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=148)** Now this will pass the JSON response and get the title.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=152)** With the title extracted, we can now update the chat title in our database.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=158)** So on line 87, if title and current chat id, then let's update chat title.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=170)** So await, we'll use the update chat title method we imported.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=174)** And then for the argument we have current chatID and title.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=180)** Next we'll add a chat block for handling errors.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=184)** On line 90 we have catch.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=186)** And then let's get the error.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=190)** And inside of our catch block, we'll add console.error and we can just write error generating title, then the error.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=201)** That's three errors, so let's fix that.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=205)** Now this is going to log the errors.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=207)** This completes our title generation function.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=210)** This function takes the message as inputs, makes a request to our title generation API and updates the chat title in our database if successful.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=220)** Now let's modify the handle chat submit function to generate a title for the first message.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=226)** So we need to locate the existing function, and that sits right on line 121.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=233)** In the handle chat submit function, we need to check if the current message is the first one in the conversation.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=241)** Let's add this check after the initial form validation.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=245)** So on line 126, we'll start with const and then is first message.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=251)** So let's declare this variable, and for its value await getChatMessages and current chatID.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=262)** So let's pass that as its argument.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=265)** Then we want to check that the length is equal to zero.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=271)** After saving the user's message to the database, with await save message, we can add the code to generate a title if this is the first message.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=281)** Now on line 130, if isFirstMessage, then generate title.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=288)** And we'll call that with the input.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=292)** This line checks if the current message is the first one in the conversation.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=295)** And if so, calls our generate title function with the message content.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=300)** That's all we need to change in the handle chat submit function.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=303)** When a user sends their first message in the new chat, we'll automatically generate a descriptive title for that conversation.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=311)** We can now test our title generation feature to make sure it's working correctly.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=316)** Back to our browser, and in the chat app, let's send a new message to this AI assistant, and we can just start with a simple, Hey, how are you?
>
> **[5:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=327)** And look at that.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=328)** It works correctly.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=329)** So it's generated a title for this conversation as starting a friendly chat.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=335)** Let's try the same thing with these other chats.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=337)** So this has chat ID of six, and I'll just say, tell me about [[Next.js]].
>
> **[5:45](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=345)** Awesome.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=346)** So this then generates a title introduction to Next.js and updates.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=351)** It's right there for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Fetch]] (2), [[Next.js]] (2)
> **Env Vars:** api (5), json (2)
> **File Paths:** page.js (2), next.js (2), response.json (1)
> **Code Identifiers:** chatid (2), getchatmessages (1), isfirstmessage (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), scroll up (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing features and course conclusion](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=0)** - [Instructor] Now that we've implemented all the features, let's review how our application works.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=6)** When you click the new chat button on the left side bar, a new chat is created in the database with a default title, new chat.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=17)** You can type a message and submit the form, and I can say, tell me something interesting.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=25)** The message is saved to the database and sent to the chat API and title generation is also triggered.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=31)** Now, you saw how the AI responded via streaming, and this response is also saved to the database, and the chat title has also been updated with the generated title.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=42)** And all of this is saved to the database so we can always access them.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=47)** Now, user can click on the chart in the sidebar, and the URL is updated with the chart ID.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=54)** The current chat state is also updated, and messages for the selected chat are loaded from the database.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=62)** A user can also delete a chat, and they can do that by clicking this delete button that's beside the title, and a confirmation dialogue appears.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=72)** If a user confirms, then the chat and all of each messages are deleted from the database, and you can see how the UI has updated to show a new chat.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=82)** This flow provides an easy to use [[User Experience (UX)|user experience]] with real time updates, persistent storage, and automatic organization through generated titles.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=92)** It's also important that our application is mobile responsive so that users can easily use it on their mobile devices.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=102)** While our chat bot is now complete with all the core features, there are several enhancements we could add in the future.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=110)** We can add user authentication, and you can do this by allowing users to create accounts.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=115)** And with that, they'll be able to sync chat history across devices and also implement user specific settings.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=122)** You can add extended chat features like file uploads and analysis, image generation and voice inputs and output.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=131)** You can also add some UI improvements like theme customization, custom chat organization, and such functionality across all conversations.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=141)** These would be great projects to tackle as you continue to build on the foundation we've created in this course.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=147)** So far, you've done a great job.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=149)** You've now built a complete AI chatbot with Next JS and the Vercel AI SDK.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=155)** The skills we've learned in this course are applicable to many other AI powered applications.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=160)** Thank you for joining me on this journey.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=162)** I look forward to seeing what awesome AI applications you build next.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=167)** If you need any help or have any questions, don't hesitate to reach out to me on [[LinkedIn]] or Twitter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (1), url (1), sdk (1)
> **UI Navigation:** click on (1), in the sidebar (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ebenezer Don]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-modern-ai-chat-application-with-nextjs-and-openai-6036004/codespaces)

## Skills Covered

- Chatbot Development
- AI Software Development
- Next.js
- Artificial Intelligence (AI)
- ChatGPT

## Path Context

### In [[Hands-On Projects for OpenAI-Powered Apps]]
← [[Hands-On OpenAI API- Building a Real-World Solution]] | **4 of 5** | [[Build a Document Search Assistant with Node and OpenAI's Assistants API]] →

## Appears In

- [[Hands-On Projects for OpenAI-Powered Apps]]

## Related Courses

_Courses sharing skills:_

- [[Hands On Ai Build Your Own Gpts]] — Artificial Intelligence (AI), AI Software Development, ChatGPT
- [[Using AI in the Design to Full-Stack Development Life Cycle]] — Artificial Intelligence (AI), AI Software Development, Next.js
- [[ChatGPT- Publishing GPTs on the GPT Store]] — Artificial Intelligence (AI), ChatGPT, Chatbot Development
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)