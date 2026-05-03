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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/build-an-ai-chatbot?u=76281980&t=0)** - [Ebenezer] Have you noticed how AI chatbots are transforming the way we interact with technology? Yet many developers still struggle to build their own, often getting stuck with chat platforms that don't offer the flexibility, [[User Experience (UX)|user experience]], or features you really want. That's exactly why it's worth learning how to build one yourself. Instead of relying on third-party apps, you gain the confidence to create AI-powered features on your own. And I've helped thousands of developers build effective AI applications. And in this course, we'll create a fully functional AI chatbot with [[Next.js]] and the Vercel AI SDK. If you are ready to add AI skills to your developer toolkit, and build impressive applications that use the latest in [[Conversational AI]], you are in the right place. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Next.js]] (1), [[Conversational AI]] (1)
> **File Paths:** next.js (1)
> **Env Vars:** sdk (1)
> **Speakers:** - [ebenezer] (1)

#### [What you should know](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-should-you-know?u=76281980&t=0)** - [Instructor] To get the most from this course, you should have some basic [[JavaScript]] experience. You'll also want some familiarity with [[React.js|React]] fundamentals. Components, props and hooks like use state and use effect will be used throughout our project. Some understanding of clients have a architecture and experience making API requests will be helpful. We'll use the [[Fetch]] API directly for some features while other API calls will be handled by the VersaAI STK. Don't worry if you're not an expert in all these areas, I'll explain concepts as we go. But having this foundation will help you focus on the AI aspects rather than getting stuck on the basics. Now, let's talk about what you need to have ready. If you are using [[GitHub]] [[Codespaces]], you don't need a GitHub account. The dev environment will be handled for you in the cloud. But if you prefer to work locally on your own computer, you'll need Node JS version 18 or later installed. If you don't have it yet, you can download it from [nodejs.org](https://nodejs.org). You'll also need a code editor. I'll be using VS code in this course, but feel free to use whatever I did you're comfortable with. The good news is that you wouldn't need any page subscriptions or services to complete this course. We'll be using options that are available for free during development. So if you have all these requisites covered, you are all set to be computing your own AI chatbots.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=0)** - [Instructor] Before we dive into the code, let's take a moment to understand exactly what we're going to build in this course. Having a clear picture of a destination will help you make sense of each step along the way. Now, when you open the app, you'll see a clean interface. The main area is for the chat itself, and there's a sidebar on the left that lists your different conversations. Let's start the chat. I'll ask the AI assistant Lexi to explain the basics of [[React.js|React]] server components. Watch how my message shows up right away in the chat once I hit Enter. Now I see a typing indicator with the response streaming in smoothly. This [[Real-Time]] effect comes from the Vercel AI SDK. You'll also notice the formatting. You can see we have code blocks and bullet points. That's React markdown making it easy to read. If we look at the sidebar, you'll see the conversation now has a title, Introduction to React Server Components. You can also see it at the top of the main chat window. The AI generated this title automatically based on our first message, a feature we'll add to help keep things organized. To start a new chat, just hit the New Chat button, represented by the pencil or quill icon on the sidebar. This starts a fresh chat session, but our previous chat about React is still there in the sidebar list
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/what-we-ll-be-building?u=76281980&t=94)** so you can easily switch between them. Let's say hello to Lexi in this chat. Notice we have another AI generated title for this chat, Simple Greeting Exchange. If you don't need a conversation anymore, just open it in the chat window and click the Minus button beside the title. We have a confirmation step so you don't delete things by accident. It's also important that the chat is persistent. Messages are stored right in your browser using IndexedDB. This means that your chat history will still be there if you close the tab or reload the page. And the app is responsive too. On mobile, the sidebar tucks away behind a menu button, and the layout adjusts so it works great on smaller screens. Now that we know what we're building, let's get started with the setup.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=0)** - [Instructor] Before we start building our AI chatbots, let's talk about how you can follow along with this course. A straightforward way to get started is to use [[GitHub]] Code Spaces. This gives you a complete development environment, where you can check out to the start and end state of each lesson. You can access Code Spaces by going directly to GitHub and creating the Code Space from the course repository. Click the Code button and then the Code Spaces tab, and then click Create Code Space. Or even easier, look for the GitHub Code Spaces link in this video's overview section. Once you have your Code Space open, you'll be able to check out to the start and end states of each lesson. For example, if you want to follow along with chapter one, lesson two, click this branch button at the bottom of the screen and check out to 01_02. You'll also notice that each branch is marked with the letter B or E. The B stands for beginning, and it contains the code at the beginning of the lesson. The E stands for end, and contains the code at the end of the lesson. So if you want to see what the end of chapter three, lesson two looks like, check out the 03_02E branch.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/getting-your-environment-and-codespaces-setup?u=76281980&t=81)** If you prefer not to use Code Spaces, you can absolutely follow along using your local environment. Just close the repository and the same thing applies. Throughout this course, I will be building everything from scratch, and I'll explain every step along the way. For local development, you'll need to have Node JS installed on your computer. If you don't have it yet, head over to [nodejs.org](https://nodejs.org) and download the latest LTS version. You'll also need a code editor. I'll be using VS Codes, but you can use whatever editor you are comfortable with.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=0)** - [Instructor] Let's get started by setting up our [[Next.js]] project and installing all the dependencies we'll need. For this, you need to open the terminal on your dev environments. If you're working in [[Codespaces]], you'll have VS Code already open, and you can access the terminal by hitting control or command on Mac, plus Shift, plus P, and type in terminal. Then select the Toggle Terminal option. Now, we need to run the command npx create-next-app@latest then give a space for the project name. If you're using Codespaces, just type full stop. So the next.js project is generated in the current directory, which has already been named AI-chatbots. If you're using a local terminal, you can either do the same if you're satisfied with your current directory, or write a new name in place of the dot for the project. So you can go with ai-chatbot. But for now, let's go with the dot. Next.js is going to ask us some configuration questions. For task script, we'll select no to keep things simple, and for the others, we can go with the default options. So for [[ESLint]], Yes, yes for Tailwind. Yes, yes. Yes for Turbopack, no further import alias customization. And Next.js has started setting up our project. This may take a minute as it installs the base dependencies. Great. That is done successfully. Let's move into our project directory
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=94)** and see what we have so far. Now, these are our files created and generated successfully by Next.js. And with the basic project created, we need to install the specific packages for our AI chatbot. I'm just going to open another terminal to keep things clean. And then let's type npn install @ai-sdk, so ai-sdk/openai. This lets us connect to open AI's models. We'll also need ai-sdk/[[React.js|react]] for providing [[React Hooks]] for our AI features. We need AI, the core Vercel AI SDK, and then Dexie, which is a wrapper around IndexedDB. We'll also need dexie react hooks, which gives us react hooks for dexie. We need lucide react for the icons of our interface. And finally, react markdown. React markdown helps our app when that, the markdown responses from the AI, giving us nice formatting. Now, let's hit Enter. Great, that's installed successfully. The next thing we need to do is structure our project, and we can go back to our file explorer where we have our files and notice that we already have an SRC directory. And it need, there's an app directory,
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-next-js-project?u=76281980&t=189)** which will contain a main Next.js pages and API routes. For now, you can see the favicon.ico file which contains the default favicon for our app. There's a globals.css file, a layout.js file, and a page.js file. We'll go through all these files later on. For our app, we'll need a components directory to hold reusable react components. So let's create one in the SRC or source directory. I'll right click on SRC here. It's new folder, then type components. We'll also need a lead directory to hold utility functions and a database setup. We still want to do that in the SRC folder, and we have lib. And finally, a Styles directory in the source folder to hold our CSS files. With everything in place, let's start our development sever tool. Make sure our Next.js project is working properly. So back to our terminal. We'll run [[npm]] run dev. And great, our server is running successfully on local host:3001, and we can now open it in our browser to see our Next.js app running. This shows the default Next.js welcome page, which means our setup is working correctly. Now, take some time to explore the project structure. Look at the files in the src/app directory, and try to understand how they work together.
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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=0)** - [Instructor] Let's set up the styling of our application to create a clean, modern interface. We'll be using Tailwind CSS, along with some custom CSS code to style components. Because we want to focus on functionality in this course, we won't be walking through every line of CSS. To get the CSS files, check out the starting branch of this lesson in the course [[GitHub]] repository. We'll need two files, which are in the src/styles directory. And in it, we have the page.css file for styling the main chat interface, and sidebar.css for styling the sidebar components. We've split our styling into two files to help with maintenance as our application grows. In the page.css file, we have styles for the main chat interface. In this file, we define styles for the overall chat container layouts, message bubbles for user and AI responses, the input area at the bottom, typing indicators, and then we have the responsive design styling, which we can find here in the media query, which helps keep our application responsive on mobile. In the sidebar.css file, we have styles for the sidebar components. This includes the sidebar container layouts, mobile responsiveness, chat list items, the new chatbots, and the AI status indicator. Remember, the complete CSS files
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-styling?u=76281980&t=94)** are available in the starting branch of this lesson, so you can copy and paste them into your project. The visual aspects of our chatbots are important for creating a great [[User Experience (UX)|user experience]].

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=0)** - We can now use the Vercel AI SDK tool create a basic test route to understand how the AI models work. This test will help us get comfortable with API routes in NEXT JS and the Vercel AI SDK before building our full chat functionality. The Vercel AI SDK makes it easy to work with AI models. It takes care of things, like token streaming and model connections, so we don't have to write all that boilerplate code ourselves. For this course, we are using [[GitHub]] models, which are AI models who started on [[Microsoft Azure|Azure]] with GitHub token authentication. This is good because it's free to use for development purposes, and we can easily swap GitHub models to directly use Open AI or other providers when we need to. If you're using Code Spaces, you should have this token automatically set up. If not, you can get an API key by opening your GitHub account, and then the settings page. On the left side bar of the setting page, scroll to developer settings, click it, and then click personal access [[Tokens]]. Here, select fine-grained tokens, and in the fine-grained tokens page, you'll see a generate new token button. Click it and give the token a name and description, so we can name this AI chatbot and description for my AI app. Next, set the expiration dates, repository access,
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-vercel-ai-sdk-and-github-models?u=76281980&t=98)** and finally generate token. It says here that your new personal access token will be ready for use immediately, so click generate token again. Great, that's generated successfully. Next, copy your token and back in the code base, create a .env.local file in the root of your project. In the .env.local file, we need to create a new environment variable named GitHub Token. Now, we set it to the token we just created. Remember to not commit your .env file to [[Version Control]] as it contains sensitive information. That's all we need to do to get started with the Vercel AI SDK and GitHub module. With a setup, you can easily use other AI providers, like Anthropic or [[Hugging Face]], but for this course, we'll focus on OpenAI modules.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=0)** - [Instructor] Now let's make a simple test route to check our AI connection. We'll create a get endpoint that gives us an AI response without needing any user input. This is so that we can easily test the route in our browser. We'll start by creating the folders for our API route. And inside of the app directory, we'LL create a folder named api. And delete. We'll create another folder for our test route. This test route will contain a route.js file. Now, in our test route file, we'll add the imports we need at the top. We'll start by importing createOpenAI from '@ai-sdk/openai.' And this let's us create an OpenAI client. Next, we'll add import generateText from 'ai.' We'll use this to generate AI text. We also need the response helper from [[Next.js]], and we'll do that on line three by importing Next Response from 'next/server.' Let's set the runtime to edge using export const runtime = 'edge.' And now we will create our OpenAI client using the createOpenAI function. This client is what we'll use to interact with the OpenAI model. On line seven, we'll start with const openai, and that's equal to createOpenAI. And right here we'll call the createOpenAI function,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=95)** and in it, we'll add the configuration for our client. And we'll start with a baseURL of '[https://models.inference.ai.azure.com](https://models.inference.ai.azure.com).'
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=110)** This tells the OpenAI client to use the [[Microsoft Azure|Azure]] OpenAI model endpoint. Our client config also needs an API key. We'll use the [[GitHub]] token environment variable, and we can get that by typing process.env.GITHUB_TOKEN. If you're using [[Codespaces]], this environment variable is already set. If not, this reference will use the GITHUB_TOKEN and variable we set earlier in the envelope local file. Now, let's create a GET handler function. On line 12, we'll start with export async function, and then GET. Using GET means we can test directly in a browser without needing an external API client. So on line 13, we should add error handling. And to do that, we'll start with try. This starts a try card block. And in the try block, we'll get text from the AI. Const { text } and that's equal to await, we'll call the generateText function. And inside of this generateText function, we're going to specify the model we want to use. So on line 15, we have model as openai, and it needs ('[[GPT-4|gpt-4o]]'). So notice that you can choose any model you want right here, but we're going with 4o for this course. You can even use a non-OpenAI model, but that means instead of OpenAI,
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=204)** you need to use the model-specific client, which you can also get from the Vercel AI SDK. Next, we'll add a system message for the AI's role. And on line 16, we'll add system, and let's say, You are a helpful AI assistant named "Ella."
>
> **[3:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=228)** This system message is a way to guide the AI's behavior. The AI will use this to understand its role and how to respond in every conversation. Now for our test prompts, we're just going to write prompt on line 17. And let's say, 'Give a brief 2-sentence introduction of yourself.' Notice that we're not processing any user input yet. It's just a fixed prompt to test things out. Now let's return the AI's response as [[JSON]]. And on line 20, we'll type return NextResponse.json,
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=270)** and in brackets and another curly brace, we'll type message: text. Remember we started with a try block, so we're going to add a catch right here. And in it, we'll write (error) and console.error this time. ('Error in test route:'). Next, we return NextResponse.json, and in brackets, ({ error: 'An Error occurred'}).
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-a-test-ai-route?u=76281980&t=315)** Let's just break this into a new line so it's easier to understand. We're also going to pass a status right here, and that's 500. And that's it for our test route. When someone hits this endpoint, it should generate a quick intro from the AI. Since our app is already running, we can just go to our appsurl/api/test. Or if it's not running already, go back to the terminal and [[npm]] run dev. Our app is now running on localhost 3000, and we can take this route and /api/test to see what we get. Great. So look at this. Hi, I'm Ella, your friendly AI assistant, here to help you with information, problem solving, and creative ideas. So this is the response we get from our AI. And this tells you that your SDK installation worked. The OpenAI client is set up right, and your environment variables are working. It also means the API route is responding. This quick test gives us confidence before we build more complicated features.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=0)** - [Instructor] Now that we've got our test route working, let's build the actual chat API endpoint. This is where all the real conversation will happen between users and our AI assistant. First, let's create the folder and file for our chat API In the API directory. We'll create another folder and this time we'll name it chat. Just like before in the chat directory, we'll create a route.js file. Now let's start with a couple of imports. Again, on line one we're going to import createOpenAI from ai-sdk/openai. This time around we'll import streamText and smoothStream from AI. streamText will allow us to stream the AI's response to the client and smoothStream is a function that makes the response more natural by sending [[Tokens]] in small chunks rather than in bulk. We'll see more about this as we use it. When working with AI responses, they can sometimes take a while to generate. Let's make sure our route doesn't stem out by adding a maximum duration. On line four, we have export const, maxDuration and we'll make this 30 seconds. Note that in production, these duration settings still depends on your deployment environment. Some platforms may have a default limit that's less than 30 seconds,
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=92)** and in that case you need to also set the API max duration from the platform. For the main function that we'll handle our chat requests, since we're expecting users to send messages to the AI, we'll use a post handler. On line six we'll export a sync function and we'll write posts here in each req. Inside this function, we first need to get the messages from the request. This will include both the user's current message and any previous message in the conversation. We'll start with const and we're going to structure messages out of this value here, which is await req.[[JSON]], and that's the request which we have on line six. Next we need to set up our connection to the AI model and we'll do that by defining an OpenAI variable, which is for the OpenAI clients and then creates OpenAI and then it will start with baseURL again. And let's set this to [https://models.inference.ai.azure.com](https://models.inference.ai.azure.com)
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=170)** and we have our API key as process.env.GITHUB_TOKEN.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=179)** Time to generate the AI's response, we'll use the streamText function, which gives us a nice streaming response that appears in smaller chunks, just like a real conversation. On line 14, we'll start with const result and this is a quote to the streamText function, which will call here and in it, we'll start with the model openai. We'll call this and specify the model we want to use and let's stick with 4o. For the system prompts, we're just going to do something simple here and see you are a helpful assistant named Lexi. Next, we need to also pass in messages and we can either do messages as messages or just leave it as messages. And then we'll add the smoothStream here and we'll do that with experimental_transform. Then we'll call smoothStream. This provides a more natural reading experience, but note that it is experimental and may change in the future, hence the name experimental right here. Finally, we'll return the results, so we'll return this as a stream response and this time around we have results.toDataStream response. Let's call this and this toDataStream response method converts our AI stream into a format
>
> **[4:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/implement-the-ai-chat-route?u=76281980&t=276)** that messages can send back to the client. That's really it for our chat route. Remember that this is the backbone of our application and we'll handle all the communication between users and the AI. We'll build the client side implementation soon, which will then connect to this chat routes.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=0)** - Before we implement the chat UI, we'll need to set up a database to store a chat history. So let's take a look at IndexedDB, the underlying database we'll be using for our chat application. IndexedDB is a browser database that lets web applications store large amounts of data. Unlike cookies or local storage, it's designed for handling structured data directly in the browser without needing a server. The index part of the name comes from its ability to create indexes on your data, which makes searching and retrieve information much faster. By using IndexedDB in a chat app, chat history will be available even after a user reloads the page or closes the browser, and users would need to create an account to use the app. Our app will also have instant access to the data with the ability to view a chat offline if we decide to implement that functionality. Most web developers are familiar with LocalStorage, so let's compare the two. LocalStorage is simple but limited. It can only store strings. It also has no built-in way to search data and is typically limited to 5 to 10 MB of storage. IndexedDB solves this by letting you store [[JavaScript]] objects directly, create indexes for fast searching, use much more storage space,
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/understanding-indexeddb?u=76281980&t=93)** and perform complex data operations safely. In our app, we'll be using Dexie.js, a lightweight library that simplifies working with IndexedDB. This is because the standard IndexedDB API is known for being difficult to use. It relies on callbacks and requires a lot of code for basic operations. Here's what creating a database normally looks like with raw IndexedDB. Dexie.js simplifies this with a cleaner promise based API that will make our code much more readable. IndexedDB does have some constraints. It sometimes doesn't work in private browser mode. Users can clear the data through their browser settings and there's no guaranteed storage quota. Browsers don't tell you exactly how much space you have, so it varies by device and user behavior, although these limitations are not major concerns for a chat application. IndexedDB gives us a solid foundation for storing chat data in the browser.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=0)** - [Instructor] Let's go ahead and set up a client side database using Dexie.js. To begin our implementation, we'll create a new file for a database module in the lib directory. Now, if you don't have it already, you can create a lib directory in the source folder. Inside of lib, we'll create a new file named db.js and in our db.js file, we'll start by importing Dexie from dexie. So on line one we have import Dexie from dexie. Remember that we've already installed this package, so we just need to import it here. Now we'll create a database instance using export const db equal to new Dexie, and we'll call this with a string argument as chatApp. This creates a new database and exports it so we can use it throughout our application. The name chatApp is what will show up in the browser's IndexedDB storage. With our database created, we need to define each structure. Let's set up the schema. We'll use db.version and we'll call this with 1 as an argument, then .stores. Now let's call this and have an object argument, which we're going to open up here. This is where we'll define our tables. We are using version one of our schema, and if we ever need
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-database-with-dexie-js?u=76281980&t=93)** to change the structure later, we would increment this number. For our first table, we'll add chats on line six, and then for its value we have a string in (indistinct) ++id, title, then createdAt. This creates a table called chats with three fields. The double plus syntax tells Dexie that id is an auto incrementing primary key, so it will automatically generate ids for our chats. Next, we'll add a second table for storing messages. On line seven, we'll write messages for the key and for its value, another string, ++id, chatId, role, content, and createdAt. This creates a message table with an autoincrementing id, plus chatId to link each message to a specific chat, role to indicate if it's from the user or AI, content for the actual message text, and createdAt for timestamp. With this, our database structure is now set up.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=0)** - [Instructor] Now we'll create functions to interact with our database. In the db.js file, let's start with a function to create new chats. We'll export these functions so we can use them in other parts of our application. On line 10, we'll start with export const createChat and that's equal to an arrow function. Now for the parameter we have title and its value is a string new chat. This creates a function called createChat that takes an optional title parameter. If no title is provided, it's defaults to new chat. For the function body, we'll add db.chats.add and then give it an object argument. So we'll call that, and here we're using Dexie's add method to insert a new record into a chats table. Our object argument will contain two properties. The first property is title and we can have that as title, but since it's the same thing, we'll just leave it as this. The second is createdAt and for its value, new date, we'll call that, then .toISOString, let's call that as well. This does the current date and time in a consistent ISO string format. Now we have a function that returns a promise, which results to the ID of the newly created chat. Next, let's create a function to retrieve a chat by each ID.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=96)** On line 17, we have export and then const getChat, and this is equal to async ID right here and a arrow function. We're just going to write db.chats.get, we'll call that with ID. And this simple one-liner creates a function that takes an ID parameter, converts it to a number and uses Dexie's get method to retrieve the chat with that ID. We're marking it as async to indicate it returns a promise. Now we need a function to get all messages for a specific chat. On line 19, we'll export getChatMessages and this is equal to an arrow function. For the parameter we have chatId. And inside this function, we'll first add a safety check. If there's no chat ID, there's no chat ID right here. Return Promise.resolve, we'll call this with an empty array. This handles the case where chat ID might be undefined or null. Returning an empty array wraps in the promise to avoid errors. Now let's add the main query. On line 22, return db.messages.where, we'll call that. And then chatId as a string argument .equals chatId again but we're converting it
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=195)** to a number and then .sortBy createdAt.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=204)** Here we're using Dexie's query syntax to find all messages where the chat ID field equals our parameter, converting it to a number first. Then we sort by createdAt to get messages in chronological order. Or with that done, we can now use this function to retrieve messages for any chat. Next, we'll create a function to save new messages. On line 25, we'll export const saveMessage, and that's equal to async. For parameters, we have chatId, role and content.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=247)** Now this creates a function with three parameters. ChatId for the chat this belongs to, role to indicate if it's from user or assistant and content for the actual message text. Now we'll save the message to our database using await db.messages.add. We'll call that with an object argument. And let's add the properties for add new message. First we have chatId and voice value chatId, but converted to number. Now this links this message to a specific chat. Then we have role, which is either user or assistant. And we also have content, which is the message text. Finally, we have createdAt and for its value, new date, we'll call that. Then .toISOString and we'll call that again. We also want to return the complete message object so our component can use it. Now since we are returning this exact structure here, we can just take that out and have a data variable. So we'll then use this here and on line 32, we just have await db.messages.add(data) and then we also want to return it on line 34 by typing return data. Great, we have a way to save messages.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=340)** Let's add a function to update a chat title. We'll need this later for our automatic title generation feature. On line 37, export const updateChatTitle
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=356)** and this is equal to async chatId for parameter and title. And we have our arrow function. Now, inside this function, we'll simply call await db.chat.update, and for the argument we have chatId. Then another object argument and in its title. Now this uses Dexie's update method to change just the title field of the specified chat. Finally, let's add a function to delete chats. On line 41, we have export const deleteChat, and this is equal to async chatId right here. And first, we need to delete all messages that belong to this chat. So await db.messages.where('chatId').equals chatId again,
>
> **[7:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=420)** but number here and then chatId finally .delete. This finds all messages with the matching chatId and deletes them. Then we need to delete the chat itself. So await db.chat.delete and number gain chatId.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/saving-and-retrieving-data-from-the-database?u=76281980&t=443)** Now this removes the chat record from our database. It's important that we delete the messages first then the chat to maintain referential integrity and avoid orphan messages. That completes our database module. In our chat app, we'll integrate this database with our [[React.js|React]] components. This database layer is important for our chat application as it allows us to maintain chat history and provide a seamless experience for users.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=0)** - [Instructor] Let's implement the chat interface using the Versal AI SDK's useChat hook and create a component to display messages. UseChat is a hook provided by the Versal AI SDK that helps with managing the state of messages in a conversation. It handles user inputs, API communication, response streaming, and message status tracking. This eliminates boilerplate code and lets us focus on UX. To begin our implementation we'll create a component for displaying the chat messages. And we'll do that in the components directory. If you don't have it already, create one in the SRC folder. And in SRC we have components. Now in our components directory we'll create a file named ChatThreads.jsx. In our new file we'll start implementing the ChatThread components. At the top of the file we need to import some components. First, we'll import User from lucide-[[React.js|react]]. This gives us the user icon that we'll use for the user avatar. Next we'll import react-markdown. From react-markdown. React-markdown will help us render formatted messages from the AI with support for markdown. Our next step is to create a message component for individual messages. So on line four we'll type const message. And thus our variable with our components. Now for our props, let's have role and content.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=98)** Now this component takes two props. Role tells us if it's a user or assistant message, and component is the actual message text. Now for the structure of this component we'll start with a wrapper div. So on line five we have div, and we'll give it a className of message-wrapper. Now this outer div will contain both the avatar and the message content. We need to add different avatars depending on who sent the message. So let's add a conditional expression for role. And if role is user. We'll add the user avatar code. Now for the user avatar let's add div. With class name user-avatar. Let's close out div. And inside it we'll include the user icon. So we have user. And let's give that class name of user-avatar-icon. Let's close this so we don't get confused. And then we also want to add a strokeWidth prop. So strokeWidth is going to be 1.5. We'll make our user component a self-closing one. And for the else part of our condition, now let's add this parenthesis, and then the AI avatar. So we have div for that. And we'll give it a class name of ai-avatar. Let's close that, and voice content we have AI. Next, we need to add a container for the message content.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=197)** We'll use div with className of message-content-wrapper. Now this div will hold both the sender name and the actual message. For the sender name we'll use span. And let's give a span className message-sender. And inside it we'll add another condition now to show either you or AI assistant depending on the role. So we'll say role, if role is user, then show you. And if not, AI assistant. Now for the message content itself, let's add a div with dynamic class names to style user and AI messages differently. On line 17 we have div with className. Then let's use the brackets here. Since we're going to use template literal, so message content. And we'll add a condition now and say if role is user. Then let's have user-message-bg. But if not, ai-message-bg. And we'll make this a string. Now let's close our div. This uses a template literal to conditionally apply different background colors. Finally, let's add the actual message content
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=292)** with markdown support. We'll add div with className as markdown-content. And inside it we'll use the react-markdown components to render the content. So react-markdown, and then content.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=316)** Now let's create the main ChatThread components that will use these individual message components. On line 30 we'll start with const ChatThread. And this is equal to our components. So we have a function for this. And let's add props. So for the props we'll add messages. Status. And chatThreadRef, so C has to be in small letter here. So chatThreadRef. This creates a functional component that takes three props. Messages is the way of chat messages, status the current status like streaming or idle, and chatThreadref a reference for scrolling. To improve the [[User Experience (UX)|user experience]] when there are no messages yet, let's define a welcome message. So on line 31 we have const welcomeMessage. And this is equal to an object right now with role and content properties, so let's set role as assistant. Just make sure we spell that correctly. And since it's from the AI, this is assistance. Then we'll set content with a friendly greeting. Let's say, "Hello! I'm Lexi." We'll change this to double quotes since we are using the single quotes for I'm. And "Hello! I'm Lexi, your AI assistant.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=413)** "How can I help you?" Let's add an emoji here. We'll use the hello emoji. And that should be this one. Now let's add the return statement for our components. On line 36, return. And we'll start with a div that has a chatThreadRef attached. So div with ref, and this is equal to chatThreadRef. And we'll give it a className of message-container. Let's close our div. Now inside of this container we need to conditionally render either a welcome message if there are no messages, or the list of actual messages. Let's start with messages.length. So this is a conditional, and if messages.length is equal to zero. Then we'll render our welcome message using the message component. So on line 39, message. Let's close that spot for props. Let's just spread welcomeMessage. For the else case, we'll map over the messages away and render a message component for each one. On line 41 let's have messages.map. And then message, index. And let's return message with key as index.
>
> **[8:29](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=509)** Again, we'll spread message. Let's make sure our div is closed. Great. To improve user feedback, let's add a thinking indicator that shows when a message has been sent, but the AI hasn't started responding yet. We'll add another conditional and we'll say status. So if status is equal to submitted. Then. Now for the indicator we'll add a row with an AI avatar and the animated typing dots. For this we'll have a div with className as thinking-row. And it needs another div. This time with className as ai-avatar. And let's name this AI. On line 47 we can now add a div with className as typing-indicator. Now from our start file, all we need to do is add three span tags here. So span, span, span. And we'll see the result of this once we check out our app on the browser. Let's make sure our div tag is closed correctly. So on line 52 we're going to close that div tag. Finally, let's export the ChatThread so we can use it in other components. So export default on line 58. In ChatThread.
>
> **[10:03](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chatthread-component?u=76281980&t=603)** Great. That completes our ChatThread component which will display all the messages in our chat interface.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=0)** - [Instructor] Now let's move on to implementing our main page where we'll bring everything together. We need to open the page.js file in the app directory. This file is the main entry point for our app, and we'll update it with a chat functionality. If you notice on line 17 to line 20, where we have get started by editing, src/app/page.js, is the same thing we have in our apps homepage right here. Now for our main chat page, the first thing we're going to do is remove everything that's currently in page.js, and we'll add a lot of imports. But first we'll start by adding use client at the top of the file to mark it as a client component. And next, let's import all the [[React Hooks]] we'll need. So we'll import useState, we also need useEffect, useCallback, and useRef. We'll add the useChathook from the ai-sdk, which is the core of our chat functionality, and we'll do that on line 4. We'll import useChat from @ai-sdk/[[React.js|react]]. Now let's import all our database functions from the module we created earlier. Imports db, createChat, getChatMessages, saveMessage, updateChatTitle, deleteChat, and getChat. Let's fix the typo we have with updateChatTitle,
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=100)** and that's T in capital letter. And we're importing this from ../lib/db. We'll also need the [[Next.js]] router for navigation, and Dexie's useLiveQuery hook for reactive [[Database Queries]]. So on line 14, we'll import useRouter from next/navigation instead of next/router. And on line 15, we'll import useLiveQuery, and that's from dexie-react-hooks. Let's import the icons we'll use for our UI, and we'll do that on line 16 by importing SendHorizontal, and that's from lucide-react. So we're going to import SendHorizontal and MinusCircle. Finally we'll import our custom components and styles on line 17. Let's import ChatThreads from @/components/ChatThread, and we'll also import our styles. So we'll do that from ../styles/page.css. Now let's create our main component. We'll export default function, and we'll name this main component Chat. First, let's set up our essential variables and states. We'll get the router for navigation, create a reference for our chat thread for scrolling, and set up states to track the current chat ID. On line 21, let's start with the router variable.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=196)** And this is equal to useRouter, which we imported. And we're also going to create a variable for the ChatThread ref, and let's call that chatThreadRef. And this is equal to useRef, and we'll give it the initial value of null. We'll also create a state for the current chat ID. We have currentChatId, and setCurrentChatId, and that's equal to useState with an initial value of null as well. Now we'll use Dexie's useLiveQuery hook to [[Fetch]] our chats from the database. This will automatically update our UI when the database changes. So on line 26, we create a variable named fetchedChats, and this is equal to useLiveQuery, and let's call this with a function argument. And this is going to return db.chats.orderBy, and in brackets, we have createdAt, then .reverse and .toArray. Here we're getting all chats ordered by the creation dates, which means the newest first, and transforming the results into an array. We'll also get the current chat using another live query based on the current chat ID states. So let's create a current chat variable for that. We have const currentChat on line 30,
>
> **[4:52](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=292)** and that's equals to useLiveQuery. We'll call this again with a function argument, and this returns db.chats.get, and we'll convert this to a number and that's the current chat ID. And let's have current chats inside of this array. What this does is get the current chat from the database based on the current chat ID state. The array in the second argument is a dependency array that triggers the query to rerun when the current chat ID changes. Now comes the core of our chat functionality, the useChat hook. Let's start with const, and we'll list all the values and functions we need from this hook. So we'll start with messages, input, handleInputChange, handleSubmit, setMessages, status.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=358)** And this is equal to useChat. Let's call this with an object arguments. And before we move on, we're destructuring several items from useChat. Messages represent the array of chat messages, input for the current input field value, handleInputChange is the function to update input when typing, handleSubmit is the function to submit messages, setMessages for updating messages manually, and status for current chat status like idle or streaming. Now let's add a unfinished callback to save AI responses to our database. Inside the object argument on line 43, we'll type onFinish. And for its value, we have an async function with a message parameter. And let's start with a condition. So if currentChatId and message.role is equal to assistant, then we want to save message. So on line 45, we'll call the saveMessage function, and we'll pass in the arguments, currentChatId, message.role, message.content.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=443)** This function is called when the AI finishes generating a response. We're saving it to our database, but only if it's from the assistant, not from the user since we handle those separately. Next, we'll implement navigation functions. Let's create a navigate to chat function using useCallback to memorize it. On line 50, we'll create a navigateToChat variable, and this is equal to a useCallback function we're calling here, and we'll go on with our arrow function with chatId as a parameter, and then a router.push. We're going to update the chatId query in the URL. So this is chatId equal to. Since we want to use a template literal, let's go with the back ticks. And now we can say chatId is equal to chatId. Next we'll set currentChatId as the chatId. Let's also add a dependency array. And for that, we'll just put in router on line 55. This function updates the URL to include the chatId as a query parameter, and also updates our currentChatID state. Let's add a function to create and navigate to a new chat. We'll name a function initializeNewChat, and this is equal to useCallback.
>
> **[9:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=540)** Again, we have an async function this time. And we'll say const chatId is equal to await createChat. On the next line, we can now navigate to chat, and we'll navigate to the chat ID. Let's also add a dependency array with navigateToChat on line 61. Now these calls are createChat function from the database module, and then navigates to the newly created chat. We'll also need a function to handle setting the active chat based on various conditions. On line 64, let's create a new function named ActiveChat. And this is equal to useCallback. And inside of it, we have async, requestedChatId, and we'll set its default value as null. And this function takes an optional requestedChatId parameter. First we'll check if there are no chats at all, in which case, we'll create a new one. So on line 66, we'll add a condition and say if fetchedChats and fetchedChats.length is equal to 0,
>
> **[10:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/setting-up-the-chat-logic-and-state-management?u=76281980&t=626)** let's return initializeNewChat, and we'll call this right on line 67. Then we'll navigate to either the requested chat or the first chat in the list. And on line 70, we'll add another condition and say, if requestedChatId, then navigateToChat. And we're going to call that with the chatId. So just make sure this is a number, and let's have requestedChatId. Finally, we'll say else navigateToChat, and let's call that and navigate to the first chat in the list. So fetchedChats, and just to be sure fetchedChats exists, we use a ternary operator right there, and .(0).id. For our dependency array, we'll add navigateToChat, initializeNewChat, and fetchedChats.
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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=0)** - [Instructor] It's time to add a use effect hook to initialize our chat when the component lose. And we'll do this in the page.js file. But first, let's move the set active chat function into the chat component where it belongs. Great. We can now start working on the user effects. On line 75, I'll start with the user effects and in it we have arrow function. First, we'll skip if the chats are not loaded yet, so let's use a conditional for that and we'll say, if not fetched chats just return. If no chat is selected yet, we'll get the chat ID from the URL query parameters or default to the first one, and we'll add another conditional answer. If not CurrentChatId then we'll declare a variable chat id and this is equal to new URLSearchParams. Let's call that with window.location.search and then .get. So we want to get the chat ID Param. Next thing we'll do is setActiveChat to chatId. Then we'll load messages for the current chat. On line 83, we'll declare a loadChatMessages variable and this is equal to an async function and for its content we have try.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=96)** And then let's declare a loadedMessages variable. So loadedMessages, and this is equals to await getChatMessages and we'll pass the currentChatId as its arguments. With that, we can now setMessages as loadedMessages. Next, we'll add a catch statement and let's get the error. Then we can just console.error failed to loads messages, and then the error. Next, let's call the loadChatMessages function. And we can add our dependency array. We'll have fetchedChats. We need currentChatId as well, setActiveChat and setMessages. Let's add another use effect hook to automatically scroll to the bottom of the chat when messages change. On line 95, we'll start with useEffect and then it need a function. Now we'll start with the condition that says if chatThreadRef.current and messages.length is greater than zero, then chatThreadRef.current.scrollTop is equal to chatThread with current.scrollHeight.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=189)** For this to work, we'll add a dependency array and pass messages and currentChatId. Setting the scrollTop to the scrollHeight of the chat thread means that the chat thread will be scrolled to the bottom when the messages change or when a chat is loaded. Let's implement a handle chat submit function to manage what happens when a user sends a message. On line 101, we'll create a handleChatSubmit variable, and this is equal to an async function and we'll get the event. First, we'll prevent the default form submission and return error if the input is empty. Let's use e.preventDefault for that and we'll call this. Then we'll add a conditional and say, if not input.trim, just return. Or we'll save the user's message to a database nest. And for that await saveMessage, we'll call that with the currentChatId user and then input. Finally, let's call the handleSubmit function from use chat to send the message to the AI. And we'll do this by just writing handleSubmit and calling that. Oh, with this done, we can now add a function to handle deleting chats. On line 111, we create a handleDeleteChat variable. And for each value we'll use a useCallback.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=289)** And let's call this with an async function. So let's say async and then we'll start by skipping if no chat is currently selected. So a conditional that says, if not currentChatId just return. Next, let's show a confirmation dialogue. And if the user confirms, or we'll delete the chat from our database and redirect to the homepage. Another conditional on line 114 that says if window.confirm and we'll ask the user, are you sure you want to delete this chat? And I'm going to spell that right. And if the user says yes, await deleteChat, and we'll call that with the currentChatId. Next, we can now push, so we just push to the homepage, but without any query Param. And we also want to set the current chat ID to null. For our dependency array, we'll add currentChatId and router. Now let's build the UI for a component. First, we'll show a loading state if the charts are not loaded yet, and we'll use a conditional for that. Let's say online 121, if not fetchedChat, return a div. Let's give a div a class name of loading state. And then for its value, we can just write loading.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=386)** But feel free to change this to whatever you want. You can even add a loading animation. For the menu, we'll return a container div that will hold a sidebar and chat area. So we can just return on line 25 and let's start with the container div. Let's give a div class name of chat container. In the chat container div, let's add the main chat area and we have another div with class name chat main and we'll close that div. Now for the chat header, we'll add a div with the chat title and a delete button. So let's have div on line 128 and this time we'll give you the class name of chat header. Now in this chat header, we'll start with another div with class name of title group. Remember that we've already handled all of the styling in the CSS files. Now inside of the title group, the next thing we'll have is h1 for the title. And let's give it class name of chat title. Now for its value, we'll say if there's a chat title, so I just have to make sure we write that correctly. So if there's a chat title, if current chat title, then we'll use that. If not, new chat. And let's close this. Now we'll add a button next,
>
> **[7:59](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=479)** and this button will be used to delete the chat if the user wants. So let's close our button tag. And for each attributes we'll start with an onClick handle. So onClick handleDeleteChat. Next, we'll give you the class name of delete button. And for accessibility aria label right here on line 134 as delete chat. So let's just write this properly, delete chat. Now for our buttons value, we'll use the MinusCircle icon and let's give it class name of delete icon. We also want to set the stroke width, so S-T-R-O-K-E and then width, let's say that's a 1.5, and we can now close this. Next, we'll add a chat thread component to display the messages, passing it, messages, status, and ref. So on line 141, we have ChatThread. And for its props, we're passing messages as messages, status as status and chatThreadRef as chatThreadRef.
>
> **[9:19](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=559)** We can close this. Now finally, we'll add the input area where users can type and send messages. For our input area, we'll start with a div And let's give you the class name input area. We'll close that and then add a form. So the onSubmit value for our form is going to be handleChatSubmit, and then a class name of input form. The form will have an input field for the message, which is connected to the input state from use chat. So let's add the input field and let's make it self closing, so we can start supplying the attributes. Now for value, we want value as input. Placeholder we're just going to write Message AI Assistance. We'll add an onChange attribute as well, and say, handleInputChange. Now for disabled, this is going to depend on the status. So if status is not ready, and if status is also not undefined, then we want a button as disabled. Let's also give it the class name of input field. And finally, an aria label. The value is going to be Chat input. Now we'll add a summit button
>
> **[10:54](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=654)** that's disabled when appropriate. So let's have a button and we'll close this then supply our buttons attributes. So we'll start with a type and this is going to be submit. Now for disabled, this will depend on a few conditions. So if not input.trim or if status is equal to submitted or if status is equal to streaming. So if any of these, then let's disable our button. We'll give a button the class name as well and we'll write submit button for the class and an aria label. And let's just write, send message. Now inside of our button, we can now use the SendHorizontal icon. We'll give it a class name of submit icon and then a stroke width of 1.5. Let's close that. And that completes our main components. Let's see what we've built so far and show your app is running. If it's not, you can use your terminal and run the command [[npm]] run dev. And with that, we can go over to the browser. Now our app is open on local host 3000, and you can see that our AI assistant starts with, Hello, I'm Lexi, your AI assistant. How can I help you? We can then say, Hey, I'm Ebenezer
>
> **[12:31](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-interface-and-user-interactions?u=76281980&t=751)** and see what our AI is going to say. Oh, great. Hi, Ebenezer. Nice to meet you. How can I assist you today? Awesome. So that's working well. We can test our delete functionality and see that that works too. Awesome. So that works as well. We can fully test everything because we haven't implemented the sidebar component yet, but we'll do that next.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=0)** - [Instructor] It's time to build the sidebar components which will enable users to switch between different conversations and start new ones. First, we'll create a new file named sidebar, the JSX in the components directory. So in the components directory, we have a sidebar, the JSX file. At the top of our sidebar, the JSX file, we'll add the use client directive, and this is to mark this as a client side component. Next, we need to import the necessary modules. Let's import use states from [[React.js|react]]. We'll also need link from next/link for client side navigation. Online four, let's import link from next/link and we'll need some icons too. So let's import pen line. We'll import menu as well. And we're import this from lucide react. Pen line will be for a new chat button and a menu for our mobile menu toggle. Finally, let's import our CSS file and we'll do that with import ../styles and then /sidebar.css. Now let's define our component and its props. Online eight, we'll start with exports, and let's make this a default export. So export default function sidebar. Now for our component props, we have fetched chats,
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=98)** current chat ID, set current chat ID, and initialize new chat. These props will allow a sidebar to display the list of chats, know which chart is currently active, change the active chats, and create new chats. Next, we need to ask state for the mobile sidebar toggle. So let's continue with our components and in the right const, it's sidebar open. And then for the function, sets is sidebar open. And this is a quote to use states, and the default value will be false. Now this creates a state variable that's initially false, meaning the sidebar is closed on mobile by default. Let's add functions to open and close the sidebar. First, const open sidebar. And this is a quote to an arrow function. And all we need to do is set a sidebar open to true. And similarly for closing const close sidebar. And we have a arrow function that sets a sidebar open to false. Let's add an empty line here, just to make things clearer. Now, put an open sidebar and close sidebar in functions, makes them easier to using our JSX.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=193)** Let's start building the JSX, beginning with the return statement and a fragment. First, let's add the mobile menu button that will only be visible on smaller screens. We'll use a button element with the unclick class name and variable attributes. So we have a button on line 22, and let's close that button. And for the on click value, we'll use open sidebar, which we declared above. And let's give it the class name of mobile menu button. Then aria label, the value's going to be open menu. Inside this button, let's add the menu icon and we'll use menu, which we imported above, and give it the class name of mobile menu icon. And let's set the stroke width. Its value is going to be 1.5, and we can close the menu components. Now we'll add an overlay for the mobile sidebar. This will be a div that sits behind the sidebar and can be clicked to close it. So for the sidebar overlay, we have div, and let's make this a self closing div. So we can just give you the attribute's class name. And since we've handled this in the CSS, we'll use temp literal, so sidebar overlay,
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=288)** and then a temp literal, I will say, if a sidebar open, then this should be active. So we set this to active. And if not, let's just use an empty string. Let's also give a div an unclick handler. So on click, and that should be close sidebar. Now let's add the main sidebar container. Online 35, we'll start with div. And let's close that and give a div class name. This class name is also, conditionally, going to add the open class. Now let's use temp literals again. So we have sidebar, and then if the sidebar is open, so a sidebar open, then we'll add the open class. If not, we'll have just an empty string. Let's fix this type over here. So sidebar is sidebar open, open, if not an empty string. Let's add the sidebar header with the title and the new chat button. So inside of a sidebar, we'll start with another div. Give it the class name of just sidebar header. Let's close our div. Next, inside this sidebar div, we'll first add an H two element for the title. So H two and class name. Class name's going to be sidebar title, and let's close that. And for its value, we'll just write chats. Next, we'll add a button for creating new chats.
>
> **[6:23](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=383)** So button tag. And then let's give our button some attributes. So we'll start with on click. And for its value, we have a function. And when this button is clicked, we want to initialize a new chat. And we also want to close the sidebar. So close sidebar. Let's give a button to class as well. So class name is going to be new chat button. And then aria label bell is going to be new chat. Now inside this button, let's add the pen line icon. On line 46, we have pen line. And let's give it a class name of new chat icon, and then stroke width. So stroke width, and we'll set that to two. Now let's add the chart list container. We'll start with a div, and then we'll give you the class name of chart list. Now inside this div, we'll map over the fetched chats array to create a link for each chart. And let's have that online 51. So fetchedchats.map. And we want to have chats with the parenthesis. And the optional training right here ensures, we don't get an error if fetched chart is null or undefined. Now for each chart, we'll create a link component. On line 52, we have link.
>
> **[7:57](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=477)** And let's close that, just so we don't forget. And let's give a link key of chat.ID. We also want to add an href attribute. And for each value, we have chat ID equal to the chat.id, and we'll add an on click attribute as well. And for its value, we have this function. And then our function will set current chat ID to chat.id. And then we can now close the sidebar. We'll add the class names to our link as well. And for our class name, let's use a condition. So first, we'll start with chat item and then a template literal. So if the current chat ID is a quote to the chat id, so chat.id, then let's have chat item as active, so chat item active. But if not, we'll just return an empty string. Inside each link, we'll add a span for the chat title. Online 61, we'll start with span, and we'll add a class name to our span. So let's give our span the class name of chat item text. And then a temp literal here that says current chat ID. So if the current chat ID is equal to chat.id, then chat item text active.
>
> **[9:37](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=577)** We want to break this down just so it's easier to read. So let's move current chat ID to the next line. And we can now indent our condition. So if not, we have chat item text inactive. Inside the span, we'll display the chat title, or new chat if there's no title yet. Let's have chat.title. So if there's chat.title, let's display that. If not, new chat. Let's also add a message that shows when there are no chats yet. Online 73, we'll have fetched chats and if fetchedchats.length, so let's scroll up, if fetchedchats.length is equal to zero,
>
> **[10:32](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=632)** and then a paragraph element with a message. So let's have this message right here. So P with class name as empty chats. And let's close our tag. And for its value, we have no chats yet. Finally, let's add a footer with the AI assistance status. We'll add a div with class name, a sidebar footer. And inside this footer, we'll add a div for the AI status indicator. So on line 79, we have div with class name AI status. And let's close that. Inside this div, we'll add another div for the indicator itself. So let's have div with class name as AI status indicator. And we'll also add a dot to show the AI is online, and some text. So div with class name as AI status dot. Let's close our div properly. Finally, a div for the text. So div with class name AI status text, and let's write AI assistance. We also want to add one more div for a subtext message. And let's do that after this div online 83. So we'll add a new div with class name, AI status subtext. And here to help 24/7.
>
> **[12:17](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=737)** I know that's a lot of divs, but this is just so that we can have a sidebar that looks good. Now let's just ensure that our divs and fragments are closed properly. Great. And with that, our sidebar component is called complete. Let's test it out so we can immediately see what we've done. Now we'll need the sidebar in the page GS file. So let's go back to page GS. And just after this return statement on line 25 where we have the chat container, let's add the sidebar and that should auto-import it on line 19. Now let's use the sidebar. And first of all, we'll close it, then we'll supply the props. We're going to supply fetched chats as fetched chats. So we've declared all of this earlier. We'll supply current chat ID as current chat ID. We'll also add set current chat ID, so that's the function. And finally, initialize new chats. And that's as initialize new chats. Great. Let's go over to our browser and see what we've done with the sidebar. Back to our browser, and you can see that we have a sidebar showing up nicely. And for the sidebar footer, this is what we're trying to achieve at the very end, AI assistant here to help 24/7. Let's also confirm
>
> **[13:51](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=831)** that our sidebar works properly on mobile, and that's it on mobile. Our sidebar tucks away nicely. We also have this button here, the hamburger button. And when we click on it, that opens up a sidebar, and clicking outside of the sidebar should close it too. Awesome. That works as it should. We should be able to click this new chat button. And that takes us to a 404 page. Now when we look at the URL bar, you can see that this takes us to slash chat ID, instead of treating this as a query param. So this should have the question mark before chat ID. And it's a simple fix when we go back to our code base and over to side by the JSX file. Let's go to the link. So on line 52, where we have the link tag, we'll check its href attributes and just add the question mark right before the chat ID. And back to our browser, clicking this shouldn't give us the 404 error anymore. The create new chat button should also work. Let's test that. And it creates a new chat successfully. Although we want the create new chat functionality to create a new chat and then take us directly to that new chat. So we have to ensure that the ID we are being navigated to is correct. And let's go over to our db.js file just to ensure that we are properly returning the ID. And online 10 where we have create chats, we're currently not returning the ID,
>
> **[15:25](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/building-the-chat-sidebar-component?u=76281980&t=925)** and we can simply fix this by removing this caller phrase so that our function directly returns the value of db.chat.add, which is the ID. Now let's go back to our browser and see if it works this time. So let's click this button to create a new chart also, and that creates a chat. So chat ID equal to five, and we create another chat and it takes us to chat ID equal to six. Great.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=0)** - [Instructor] It's time to implement the functionality for automatically generating titles for our conversations based on the content of the first message. This will make it much easier for users to switch between conversations as they build up a history of chats with the AI. Back to our codebase, let's start by creating an API route for generating titles. We'll create a new folder in the api directory, which is inside of src/app. Now in api, let's create a folder named generate-title. In our new generate-title folder, we'll create a file and name it to route.js. In this new route.js file, we need to import the necessary modules. On line one, let's start by import { createOpenAI } from '@ai-sdk/openai'. This will let us connect to OpenAI's models. Next, let's import { generateText } from 'ai', generateText, and that's from ai. Now this generateText function will help us generate non-streaming text responses, which is what we want for a title generation. And finally, on line three, let's import { NextResponse } from 'next/server'. We'll use this to create API responses in our [[Next.js]] API route. So this is going to be very similar to what we did in this test route. And on line five, with our important place,
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=98)** let's set the runtime to edge and export const runtime = 'edge'. Next thing we're going to do is create our OpenAI client. So one line seven, const openai = createOpenAI. And for the configuration, let's have our baseURL as the [[Microsoft Azure|Azure]] endpoint, so [https://models.inference.ai.azure.com](https://models.inference.ai.azure.com).
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=135)** And we'll add a comma right there so that we can also add the apiKey, and just like what we did before, process.env.GITHUB_TOKEN. Now let's create a POST handler function. We'll start with exporting this async function, and we'll call it POST. We want to get the request, and in it, we'll add a try catch block. Now inside this try block, let's extract the message from the request body. So const and with the structure message. And then for its value, await req.[[JSON]](), and let's call that. This will be the user's first message in a conversation, which we'll use to generate the title. Now let's use the generateText function to create a title based on this message. On line 15, we'll start with getting text. So the structuring text from await generateText, and let's call that. Now this will take an object argument, and here we can add our configuration. So let's set the model to openai, we'll call that. And we can just use [[GPT-4|gpt-4o]]. Remember, you can use whichever model you want. You can see that we have a list of model, for example, in VS Code, when you type GPT, oh, that's not showing anymore. But yeah, we'll go with gpt-4o, and we'll add a system message to guide the AI.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=230)** So let's add a comma, and then let's add a system message. So let's say, "You are a helpful assistant that generates concise titles for conversations." Let's add a full stop right there. And we can just go with the regular course since we didn't break this into a second line. Next, we'll add the prompt that tells the AI what we want. So start with prompt, and just make sure we have the comma on line 17. And for our prompt value, let's start with a back tick this time and say, "Use this first message from a conversation to generate concise title without any quotes." So we need to break this down at a point, so, "Without any quotes." And this is just to make sure that our title is formatted well and we don't have a mismatch on the front end. So we also want to tell it's max five words. And finally, let's give it the message. So we'll use a template literal, and on line 19, we have message. And let's close the quotes. With the title generated, we can return it as a JSON response. So on line 22, we'll return NextResponse.json, let's call that with the object argument
>
> **[5:26](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=326)** and we'll have title: text. Now let's add the catch block to handle any errors. On line 23, we have our catch block. We'll get the error. And for error handling, we'll return NextResponse.json. Let's call that with our object argument. And for the error, we can just write, "Failed to generate title," and let's just say status: 500. But you can choose to make this much better and use the actual error. We have a syntax error, and that's because we have to close this object.
>
> **[6:16](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/creating-the-chat-title-generation-api?u=76281980&t=376)** Great. Now this completes a title generation API, and this API will take messages, impute, and return a concise title that summarizes the content of the message. The next thing we're going to do is implement this in our front end.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=0)** - [Instructor] And now that we have our title generation API, let's integrate it into our main page component. We need to open the page.js file in the app directory and add a function to call this API. In our page.js file, let's add the title generation function. We can do this just right after the set active chat function and before the first use effect. On line 76, we can declare the generates title variable, and for its value we have an async function. Now let's add a message param, and then we can start with a try cut block. So try, now inside the try block, we'll make a post request to our title generation API. On line 78 comes response equal to await [[Fetch]] and we'll fetch/API/Generate-title, which is what we named it. Next, we'll configure the request with the appropriate method, headers and body. So let's add a curly brace right here. And on line 79 we'll start with method, and that's post. Next we'll add headers. And for the value of headers, we have content-type. And this is going to be application/[[JSON]]. We'll also add body, and for its value, JSON.stringify.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=96)** Let's call that. And then we have message in an object. Now let's check if the request was successful. We'll add a condition now, and that's after this response variable. We'll say, if not response.ok, then we want to throw an error, so throw new error and, "Failed to generate title." Now this is going to handle failed requests. If the request was successful, we'll extract the title from the response. And we'll do that on line 86. Let's scroll up. So this is more visible, and on line 86, Const title and this is equal to await, so we add the structure and title, response.json. Now this will pass the JSON response and get the title. With the title extracted, we can now update the chat title in our database. So on line 87, if title and current chat id, then let's update chat title. So await, we'll use the update chat title method we imported. And then for the argument we have current chatID and title. Next we'll add a chat block for handling errors. On line 90 we have catch. And then let's get the error.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=190)** And inside of our catch block, we'll add console.error and we can just write error generating title, then the error. That's three errors, so let's fix that. Now this is going to log the errors. This completes our title generation function. This function takes the message as inputs, makes a request to our title generation API and updates the chat title in our database if successful. Now let's modify the handle chat submit function to generate a title for the first message. So we need to locate the existing function, and that sits right on line 121. In the handle chat submit function, we need to check if the current message is the first one in the conversation. Let's add this check after the initial form validation. So on line 126, we'll start with const and then is first message. So let's declare this variable, and for its value await getChatMessages and current chatID. So let's pass that as its argument. Then we want to check that the length is equal to zero. After saving the user's message to the database, with await save message, we can add the code to generate a title if this is the first message. Now on line 130, if isFirstMessage, then generate title.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/integrating-chat-title-generation-in-the-ui?u=76281980&t=288)** And we'll call that with the input. This line checks if the current message is the first one in the conversation. And if so, calls our generate title function with the message content. That's all we need to change in the handle chat submit function. When a user sends their first message in the new chat, we'll automatically generate a descriptive title for that conversation. We can now test our title generation feature to make sure it's working correctly. Back to our browser, and in the chat app, let's send a new message to this AI assistant, and we can just start with a simple, Hey, how are you? And look at that. It works correctly. So it's generated a title for this conversation as starting a friendly chat. Let's try the same thing with these other chats. So this has chat ID of six, and I'll just say, tell me about [[Next.js]]. Awesome. So this then generates a title introduction to Next.js and updates. It's right there for us.

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
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=0)** - [Instructor] Now that we've implemented all the features, let's review how our application works. When you click the new chat button on the left side bar, a new chat is created in the database with a default title, new chat. You can type a message and submit the form, and I can say, tell me something interesting. The message is saved to the database and sent to the chat API and title generation is also triggered. Now, you saw how the AI responded via streaming, and this response is also saved to the database, and the chat title has also been updated with the generated title. And all of this is saved to the database so we can always access them. Now, user can click on the chart in the sidebar, and the URL is updated with the chart ID. The current chat state is also updated, and messages for the selected chat are loaded from the database. A user can also delete a chat, and they can do that by clicking this delete button that's beside the title, and a confirmation dialogue appears. If a user confirms, then the chat and all of each messages are deleted from the database, and you can see how the UI has updated to show a new chat. This flow provides an easy to use [[User Experience (UX)|user experience]] with real time updates, persistent storage, and automatic organization through generated titles. It's also important that our application
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-build-an-ai-chatbot-with-gpt-4o-and-next-js/testing-features-and-course-conclusion?u=76281980&t=95)** is mobile responsive so that users can easily use it on their mobile devices. While our chat bot is now complete with all the core features, there are several enhancements we could add in the future. We can add user authentication, and you can do this by allowing users to create accounts. And with that, they'll be able to sync chat history across devices and also implement user specific settings. You can add extended chat features like file uploads and analysis, image generation and voice inputs and output. You can also add some UI improvements like theme customization, custom chat organization, and such functionality across all conversations. These would be great projects to tackle as you continue to build on the foundation we've created in this course. So far, you've done a great job. You've now built a complete AI chatbot with Next JS and the Vercel AI SDK. The skills we've learned in this course are applicable to many other AI powered applications. Thank you for joining me on this journey. I look forward to seeing what awesome AI applications you build next. If you need any help or have any questions, don't hesitate to reach out to me on [[LinkedIn]] or Twitter.

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