---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: integrating-generative-ai-into-javascript-web-projects
url: "https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects"
duration_minutes: 145
duration: 2h 25m
level: Intermediate
updated: 4/15/2024
learners: 5399
skills:
  - Web Development
  - Generative AI
  - JavaScript
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/integrating-generative-ai-into-javascript-web-projects-3813070/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEc-uT6Iq7H0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713900257957?e=2147483647&amp;v=beta&amp;t=jS4X5UCH1mNyzRlgpWE-LpsZTTMPDnHd8b79qBhINMc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
prev_courses:
  - '[[Building PHP Applications with Generative AI]]'
next_courses:
  - '[[Build an AI Application with React and AWS SageMaker]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":6,"total":10,"prev":"Building PHP Applications with Generative AI","next":"Build an AI Application with React and AWS SageMaker"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/web-development
  - skill/generative-ai
  - skill/javascript
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Integrating%20Generative%20AI%20into%20JavaScript%20Web%20Projects.md)

![Integrating Generative AI into JavaScript Web Projects](https://media.licdn.com/dms/image/v2/D4E0DAQEc-uT6Iq7H0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713900257957?e=2147483647&amp;v=beta&amp;t=jS4X5UCH1mNyzRlgpWE-LpsZTTMPDnHd8b79qBhINMc)

# Integrating Generative AI into JavaScript Web Projects

> The emergence of AI has been the center of attraction on the web since the release of the first GPT language models by OpenAI in November 2022. As a result, there’s been a growing interest within the tech community to explore the potential of generative AI technologies in web development.In this course, join instructor Sandy Ludosky as she provides an introduction to generative AI and its many pos

> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects) | 2h 25m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Integrate generative AI into your web projects](#integrate-generative-ai-into-your-web-projects)
  - [What you should know](#what-you-should-know)
  - [Tools and exercise files](#tools-and-exercise-files)
- [**1. Introducing the Generative AI Models and Libraries**](#1-introducing-the-generative-ai-models-and-libraries) (3 videos)
  - [Generative AI: Genesis and evolution](#generative-ai-genesis-and-evolution)
  - [OpenAI: Key concepts](#openai-key-concepts)
  - [OpenAI: Getting started](#openai-getting-started)
- [**2. Create Your First Next-Gen App (Node.js)**](#2-create-your-first-next-gen-app-nodejs) (5 videos)
  - [Node project setup](#node-project-setup)
  - [Authenticate and configure with OpenAI](#authenticate-and-configure-with-openai)
  - [Define prompts and a system message](#define-prompts-and-a-system-message)
  - [Challenge: Create an AI-agent and jokes generator](#challenge-create-an-ai-agent-and-jokes-generator)
  - [Solution: Generate chat completions](#solution-generate-chat-completions)
- [**3. Extending the Chatbot Capabilities with External Tools**](#3-extending-the-chatbot-capabilities-with-external-tools) (6 videos)
  - [Introducing function calling](#introducing-function-calling)
  - [Enable function calling](#enable-function-calling)
  - [Define tools and parameters](#define-tools-and-parameters)
  - [Challenge: Call the public API](#challenge-call-the-public-api)
  - [Solution: Call functions and connect to APIs](#solution-call-functions-and-connect-to-apis)
  - [Solution: Call functions and generate extended responses](#solution-call-functions-and-generate-extended-responses)
- [**4. Getting Started with the OpenAI Assistants API**](#4-getting-started-with-the-openai-assistants-api) (7 videos)
  - [Assistants API overview](#assistants-api-overview)
  - [Create an assistant](#create-an-assistant)
  - [Upload files using the Files API](#upload-files-using-the-files-api)
  - [Create a conversation session](#create-a-conversation-session)
  - [Run the conversation](#run-the-conversation)
  - [Check Run lifecycle and status](#check-run-lifecycle-and-status)
  - [Retrieve and display messages](#retrieve-and-display-messages)
- [**5. Build an AI-powered Virtual Assistant (Assistants API)**](#5-build-an-ai-powered-virtual-assistant-assistants-api) (6 videos)
  - [Starter project and set up](#starter-project-and-set-up)
  - [Making API requests](#making-api-requests)
  - [Send a message](#send-a-message)
  - [Introduction the Moderation API](#introduction-the-moderation-api)
  - [Add a moderation layer](#add-a-moderation-layer)
  - [Generate and moderate conversations](#generate-and-moderate-conversations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Last words and next steps](#last-words-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Integrate generative AI into your web projects
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=0)** - [Sandy] With the rise of AI in web developments, we are progressively evolving from traditional website design to automated technologies.
>
> **[0:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=7)** These transformative changes are shaping industries and opening up new possibilities for businesses and consumers alike.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=15)** In this course, we explore different use cases of generative AI, and we experiment with language models and APIs offered by Open AI.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=24)** If you are a JavaScript developer and new to generative AI, you'll be glad to know that Open AI offers nice interfaces to easily integrate an intelligence layer into your web projects.
>
> **[0:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=36)** My name is Sandy.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=37)** I'm a senior software developer and a web trainer.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/integrate-generative-ai-into-your-web-projects?u=76281980&t=39)** By the end of this course, you'll be ready to transform your work and creativity with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), web (3), [[Generative AI]] (2), [[JavaScript]] (1)
> **Speakers:** - [sandy] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is for any developer from beginner to intermediate with one to two years of experience in web development.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=9)** This course is for any developer willing to learn about generative AI.
>
> **[0:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=13)** So let's first review some of the fundamental knowledge and skills that you should all have in order to make the best of this course.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=20)** First, it is recommended to have a basic knowledge of the JavaScript programming language.
>
> **[0:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=25)** So I would assume that you know about the fundamental syntax and the data types in JavaScript, and that you perfectly know how to use the variables, the operators, and the basic control structures, like the if statements and the loops.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=39)** It is also recommended to understand how to set up and run Node projects, and we're going to use also React, which is a popular JavaScript library to create front end applications.
>
> **[0:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=52)** We're going to work a lot with the command line interface, so it will be helpful to have some experience with the basic command line operations and understand, for example, how to install the Node packages by using npm with npm install.
>
> **[1:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=66)** It is good also to understand how to navigate the file system, for example, with cd to change directory and ls to display the list of folders and files inside one directory.
>
> **[1:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=80)** So if you answered yes to everything, you are all set.
>
> **[1:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=83)** This course is for all levels from beginner to intermediate.
>
> **[1:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=87)** It is for any developer willing to learn about generative AI, the OpenAI APIs, and the language models.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/what-you-should-know?u=76281980&t=95)** It is for developers who want to understand how to integrate an intelligence layer into their JavaScript web projects to create applications driven by AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Generative AI]] (2), node (2), [[npm]] (2), [[Web Development]] (1)
> **CLI Commands:** node (2), npm (2), make (1), cd (1), ls (1)
> **Prerequisites:** install (2), set up (1)
> **Tools:** command line (2)
> **Analogies:** for example (2)
> **Best Practices:** recommended (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Tools and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=0)** - [Instructor] In order for you to follow along in this course, I want to make sure that you have access to the tools and exercise files.
>
> **[0:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=7)** And first, the requirements is that you work with one code editor.
>
> **[0:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=10)** So I'm going to be using Visual Studio Code for the demonstrations and exercise.
>
> **[0:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=14)** And I recommend that you use a modern browser like Chrome, Firefox, or Safari, high speed internet, and that you have access to one OpenAI account.
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=23)** So I'm going to walk you through the steps in order to create your first accounts and access the credits that you're going to need to send your API requests.
>
> **[0:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=31)** You're going to see that this is a very easy process.
>
> **[0:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=34)** You also need to check if you have Node installed on your machine.
>
> **[0:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=38)** You can verify by running node -v in your command line interface.
>
> **[0:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=42)** And you can also follow this link, [nodegs.org](https://nodegs.org), to download the latest stable copy of Node on your machine.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=50)** For the exercise files, the files and assets are available for download from the course page.
>
> **[0:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=56)** You also have access to the remote repository that you can clone.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=60)** And so the exercise files are organized in folders and numbered.
>
> **[1:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=64)** So the numbers corresponds to one chapter and one video number.
>
> **[1:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=68)** So if you ever decide to start the course at a specific point of time, for example chapter five and video number two, you can always select the exercise files corresponding to the chapter and video number.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=79)** And so every project includes a starter and a final version with a branch ending with a B for beginning and the branch ending with a E for end that corresponds to the final version for one video.
>
> **[1:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=92)** Plus some projects include a README file with instructions for the installation and the setup of the projects.
>
> **[1:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=100)** For the code challenges, you have the options to run the projects locally or choose to create a codespace.
>
> **[1:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=105)** So you can create a codespace by accessing here, code, and then here, codespace.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=111)** And then you can create a new one by clicking here.
>
> **[1:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=113)** I'm going to walk you through the process as well before starting a new project.
>
> **[1:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=117)** And basically we're going to use codespace and also we're going to need to set up an API key by accessing here the security section and secrets and variables.
>
> **[2:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=127)** And we're going to need to set up an API key to be authorized to send API requests and be able to interact with the language models.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=134)** I'm going to walk you through the process when we're going to start our very first project with OpenAI.
>
> **[2:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/tools-and-exercise-files?u=76281980&t=141)** So once you're all set, we are ready to get started with the presentation of generative AI with OpenAI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (4), node (3), [[Security]] (1), [[Generative AI]] (1)
> **Env Vars:** api (4), readme (1)
> **Exercise Files:** exercise files (4), download the (1)
> **CLI Commands:** node (3), make (1)
> **Tools:** visual studio (1), firefox (1), safari (1), command line (1)
> **Prerequisites:** set up (2), setup (1)
> **URLs:** [nodegs.org](https://nodegs.org) (1)
> **UI Navigation:** select the (1)


### 1. Introducing the Generative AI Models and Libraries

[↑ Back to Table of Contents](#table-of-contents)

#### Generative AI: Genesis and evolution
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=0)** - [Narrator] AI is a very broad field with the ambitious goal to create intelligent machines.
>
> **[0:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=5)** Over the years, the applications of AI have split between multiple subsets, including machine learning and deep learning.
>
> **[0:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=12)** And so machine learning and deep learning are subsets of AI.
>
> **[0:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=16)** Machine learning has been around since the early days of computing in an effort to leverage technologies around artificial intelligence.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=24)** And it was in 1966 that the first AI chatbot was created, ELIZA, capable of imitating the behavior of a psychotherapist, and asked the exact same questions of a psychotherapist.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=37)** And so progressively, we evolved from supervised to unsupervised machine learning with deep learning, and other subsets of AI and machine learning that gives machine the ability to self-improve and to learn from their mistakes with a minimum of supervision.
>
> **[0:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=54)** So instead of giving computers specific instructions, machines and computers can figure out what actions to take next to achieve the end results.
>
> **[1:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=64)** In that sense, AI is making machines capable of taking the commands of a humans with automative to build self-driving cars or the autopilot system in airplanes.
>
> **[1:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=75)** Years later and today, AI is progressively entering our day-to-Day lives and work with more AI driven tools and services.
>
> **[1:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=82)** And AI is also integrating our home with personal digital assistance, like Apple Siri, Alexa, or Google Home, that are capable of performing actions on simple voice commands.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=95)** So without even knowing it, our online experience has been driven by AI with personalized content and tailored recommendations when watching streaming content or whenever you use translation tools, and also with customer support.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=111)** Chatbots can provide instant assistance and escalate issues in a human and natural fashion.
>
> **[1:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=118)** And customer service chatbots use natural language, NLP, and machine learning to understand and respond to customer queries, and now with ChatGPT that literally took the internet by storm since its release in November, 2022.
>
> **[2:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=135)** ChatGPT is a chatbot, but not just any chatbot.
>
> **[2:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=139)** It is what we call a large language model optimized for dialogue that understands natural language and that can perform various text processing tasks.
>
> **[2:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=149)** And so ChatGPT is powered by the GPT models, which are a type of neural network-based models inspired by the neurons of a human brain.
>
> **[2:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=158)** Much like the human brain, large language models are capable of understanding, learning, they are capable of self-improvement to generate new content based on what they've learned.
>
> **[2:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=170)** And so GPT is short for generative pre-trained transformer, and they are called large, large language models, because they're trained on millions of data and defined by billions of parameters, making them capable of generating new content and perform various text processing tasks.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=189)** And so Generative AI is another subset of AI, meshing learning and deep learning altogether, giving applications like ChatGPT the ability to generate new content like text, images, and music, and also with the combination of NLP, which is short for natural language processing, again, another subset of AI.
>
> **[3:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=211)** And there has been one domain where Generative AI has been particularly disruptive, which is in web development.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=218)** Generative AI offers new possibilities in the way that websites and applications are developed.
>
> **[3:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=224)** We're going to see plenty of nice examples in this course with the open AI APIs and language models.
>
> **[3:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=230)** So we can use Generative AI to automate tasks like content creation, do testing, generate artistic images.
>
> **[3:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=238)** We can create chatbots and virtual assistants powered by AI to answer user queries and troubleshoot technical issues.
>
> **[4:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=246)** So this course explores several examples of AI integration with Node and JavaScript, from basic to advanced.
>
> **[4:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=254)** We're going to create powerful AI agents that we set with specific behaviors to fit our needs.
>
> **[4:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=261)** We also connect to the tool function calling to expand the many capabilities of the large language models.
>
> **[4:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=268)** For example, we can connect to external APIs to get the weather information.
>
> **[4:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=273)** We also experiment with other generative models developed also by OpenAI, like the Moderation API, in order to filter out undesirable content.
>
> **[4:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generative-ai-genesis-and-evolution?u=76281980&t=283)** So in this course, we're not building the next self-driving car, but we're going to make a deep dive into the integration of Generative AI with multiple practical and fun examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (16), [[Generative AI]] (5), [[Deep Learning]] (4), [[ChatGPT]] (4), chatbot (3)
> **Env Vars:** nlp (2), gpt (2), eliza (1), api (1)
> **Definitions:** is a  (2), short for (2)
> **CLI Commands:** node (1), make (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### OpenAI: Key concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=0)** - [Sandy] The good news is that Open AI supports several platforms and programming languages.
>
> **[0:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=5)** So with Open AI, developers have the option to select the programming language that they want to work with.
>
> **[0:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=10)** So for example, we're going to go under quick start, and there you can select either Python or Node.js to have the steps in order to set up your development environments and get started quickly with the Open AI library.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=24)** And what's important to keep in mind is that the Open AI libraries offer convenient interfaces to interact with the Open AI's generative models.
>
> **[0:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=33)** Speaking about the language models, let's have a look here at this section.
>
> **[0:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=36)** In order to discover the GPT models, which are one of the most advanced language models capable of understanding natural language, they are trained on a large data sets, and they can perform various text processing tasks and even codes.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=53)** We're going to check out also here the Assistants, which is in beta at the time that we record this online training.
>
> **[1:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=63)** So Assistants API is used to create custom version of Chat GPT, also powered by the GPT models.
>
> **[1:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=69)** They can be connected to built-in tools, like Code Interpreter, in order to process code and handle files.
>
> **[1:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=76)** You also have the option to connect to function calling in order to connect your Assistants with real-time data.
>
> **[1:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=84)** And let's go back here under embedding.
>
> **[1:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=86)** So this is another option that you can use with Open AI to create vector-based and custom knowledge database to train the language models with your own data, your custom data.
>
> **[1:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=98)** So your application is driven by AI with a customized behavior.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=103)** And so in order to get started, we're going to look at the key concept concepts of the Open AI library.
>
> **[1:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=110)** So there is one important concept, which is the tokenization, which is the process of breaking down the piece of text into small units called tokens, which is a crucial step in natural language processing, allowing the language models to analyze and understand the structure of the input text.
>
> **[2:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=130)** Let's see one quick example with the tokenizer tool right here.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=134)** So for example, we're going to write, I want, and we're going to keep an eye also here, right below.
>
> **[2:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=140)** So I'm going to type, I want to build projects with Open AI.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=147)** And as we type, you're going to see that right below, you're going to see the number of tokens, which is available with this sentence.
>
> **[2:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=153)** So that's going to be broken into smaller units.
>
> **[2:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=156)** And so what you need to know is that the number of tokens will be based on the words in your prompts.
>
> **[2:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=161)** You also have the option, so from the Open AI platform to play with the playground.
>
> **[2:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=168)** To test the playground, you can use the playground to test the language models and the settings.
>
> **[2:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=173)** So the thing that you need to know is that you pay for every token that you use.
>
> **[2:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=178)** So the more tokens that you use, the more credits you spend.
>
> **[3:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=181)** And you can certainly control how many tokens that you use by adjusting the settings.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=189)** So with the playground, you have different options for testing.
>
> **[3:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=192)** You can select here from the top, from the dropdown menu, you can select chats.
>
> **[3:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=196)** And from here, you can send a message.
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=199)** So by first selecting the language model, you can type a message here as a user.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=204)** Like you can ask a basic question like, what is two and two, a basic math question.
>
> **[3:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=209)** And we know that the answer will be deterministic, meaning that we know that we should expect always the same answer.
>
> **[3:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=215)** But something you can do is also adjust the temperature in order to allow variations between answers.
>
> **[3:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=223)** And also you can here specify the number of tokens which are allowed for every prompt.
>
> **[3:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=229)** So let's submit this message like this, the sum of two and two is four.
>
> **[3:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=235)** So let's go back to the language models, here under documentation right here.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=241)** So here you're going to be able to access also with model updates.
>
> **[4:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=247)** So if you scroll down, you're going to see the number of contexts window, the number of tokens that are allowed for every text prompt right here.
>
> **[4:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=255)** So that's always good to keep an eye here on the list of existing models to see the updates, the changes for the models available.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=264)** So let's go back to the quick start section.
>
> **[4:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=267)** So this is where we're going to see how to get started with Open AI.
>
> **[4:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=270)** So Open AI provides a quick start guide for an easy start for developers, which is designed to help get your local development environment set up quickly and be ready to send your first request to the Open AI APIs.
>
> **[4:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-key-concepts?u=76281980&t=285)** So up next, we're going to see how to set up the development environment and how to get started with Open AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (14), [[Tokens]] (7), data (4), [[Programming]] (2), prompt (2)
> **Env Vars:** gpt (3), api (1)
> **UI Navigation:** select the (1), dropdown (1), scroll down (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** python (1), node (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **File Paths:** node.js (1)

#### OpenAI: Getting started
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=0)** - [Instructor] Since November 2022, OpenAI provides access to a set of language models with different capacities and usage, and so you're going to discover that the OpenAI documentations for developers is very well designed.
>
> **[0:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=12)** So we're going to discover this one here under API and Docs.
>
> **[0:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=17)** So let's go back just right here, so to have an overview.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=21)** So, "Welcome to the Open AI developer platform."
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=23)** So here, you have an overview to start quick with the basics and discover how to integrate an intelligence layer into your web projects.
>
> **[0:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=30)** And you also have the options to discover multiple examples for different use cases with the source code to understand how to interact with the APIs and the different language models.
>
> **[0:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=41)** On top of that, you have access to an API reference.
>
> **[0:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=44)** For every endpoint, you can then find instructions, for example, audio to create speech recognition, here, to create chat completions, and right below, you have also a guide to build your own assistant and personal experience, just like with ChatGPT.
>
> **[1:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=64)** And we're going to see a similar example.
>
> **[1:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=66)** In this course, we're going to create our own assistants that can connect to the language models, and we're going to also connect to built-in tools in order to enhance the capabilities of the assistants.
>
> **[1:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=80)** And so the goal in the next module is to get started with OpenAI, and we're going to see that getting started with OpenAI is very simple.
>
> **[1:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=88)** First, you need to create an account and then get set up.
>
> **[1:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=92)** Configure your project with OpenAI by setting up a key.
>
> **[1:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=96)** So you need to set up a key in order to be authorized to send API requests.
>
> **[1:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=100)** So I'm going to show you how to authenticate.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=102)** So very simple.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=103)** We're going to go here.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=104)** So if you don't have an account, you can go to Sign up.
>
> **[1:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=106)** I'm going to do Log in, and here, you're going to see that you have the option to sign up with an email or a Gmail account.
>
> **[1:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=114)** You can also use a Microsoft or an Apple account if you have one.
>
> **[1:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=118)** So I'm going to go ahead and continue with Google to sign up with my Gmail account right here, and from there, this is very simple.
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=128)** And one important information is that for every new account, you're going to be granted with a $5 credit.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=134)** And that's going to be more than enough in order for you to get familiar with the APIs and the language models.
>
> **[2:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=141)** So to set up your API key, you can here go from the sidebar, go to API keys, and then the process is very simple.
>
> **[2:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=148)** You can follow the steps, and I'm going to show you that in the next example.
>
> **[2:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=152)** You can also track your usage by clicking here, and for every new account, so for your information, you're going to be granted a $5 credit.
>
> **[2:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=162)** And once your credit is expired or when you have used up the grant, you need to provide with payment information, and you're going to pay for what you use.
>
> **[2:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=171)** So that's it.
>
> **[2:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=172)** So once you have signed up, we can continue and discover more about the OpenAI platform.
>
> **[2:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/openai-getting-started?u=76281980&t=177)** And in the next module, we're going to create our first next-generation application with OpenAI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (5), next (4), ai (1), web (1), [[Speech Recognition]] (1)
> **Env Vars:** api (5)
> **Prerequisites:** set up (3), getting started (1), configure (1)
> **Cross-References:** in the next (3)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Documentation:** api reference (1)


### 2. Create Your First Next-Gen App (Node.js)

[↑ Back to Table of Contents](#table-of-contents)

#### Node project setup
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=0)** - [Instructor] For the first project, I am providing you with the starter project, and the first step will be to set up the development environment and to install the libraries.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=9)** And also we're going to install the OpenAI library.
>
> **[0:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=13)** So we're going to find instructions on the README file, and here you have a list of all the dependencies in libraries that we're going use in this project.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=21)** First, dotenv, which is to define and set up secret key for your projects.
>
> **[0:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=26)** And we're going to need to set up a secret key for the OpenAI library in order to be able to send API requests.
>
> **[0:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=33)** We're going to use also nodemon, which is a utility tool to restart the application automatically every time that there is a change, which is detected in your JavaScript files.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=43)** And there is this convenient tool, which is readline-sync that allows to interact with the application by using the command line interface.
>
> **[0:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=51)** And of course we're going to need to install the OpenAI API library.
>
> **[0:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=57)** So if you go on the documentation for developers, you're going to find the quickstart guides and you're going to need to select the section for Node.js.
>
> **[1:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=65)** And the first step will be to make sure that you have the latest copy of Node installed on your machine.
>
> **[1:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=69)** So that's going to be the first requirements in order to be able to run Node application.
>
> **[1:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=75)** And then you're going to be ready to install the OpenAI Node.js library.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=79)** So if you want to check which version of Node is installed on your machine, you can always do node -v.
>
> **[1:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=85)** And to make sure that you've got the most recent and latest copy of Node, you can always go here on the official website, select DOWNLOAD, and then select the one that corresponds to your operating system.
>
> **[1:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=99)** So I work on a Mac, so I'm going to select this one.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=102)** And you just need to follow the instructions on the screen to install the latest recommended version for users.
>
> **[1:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=108)** So let's go back here.
>
> **[1:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=109)** So I'm going to go back to the project and we're going to find here instructions to install all the dependencies.
>
> **[1:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=115)** So I'm going to run all of it, this.
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=119)** And I'm going to make sure that I navigate, so you see that right here, I am at the root of the project, so I'm going to make sure that I navigate to exercise-files, and the folder, 02, that corresponds to the module number two.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=133)** All right.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=134)** And I'm going to run this script to install all the libraries.
>
> **[2:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=138)** And if you check the package.json, you're going to be able to see that now we've got all these libraries that are installed for our projects.
>
> **[2:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=145)** And on the same package.json, you're going to find also this script, and this is to start your project.
>
> **[2:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=150)** So let's go check out the index.js to see how the starter project looks like.
>
> **[2:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=158)** So we make sure to add to the scope the different libraries that we use for this project.
>
> **[2:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=163)** We're going to need to load to define first and then load environment variables.
>
> **[2:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=168)** Line 5, this is where we're going to configure the project with OpenAI after we set up an API key.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=174)** And we use this tool, which is readlineSync in order to allow to ask questions when we interact with this application.
>
> **[3:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=182)** And we're going to start the app with this header right here.
>
> **[3:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=185)** So this is just to add a header, a presentation for this application.
>
> **[3:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=190)** So we're going to be able to read, "CHAT WITH AI," as soon as we start this application with the options to exit the conversation by typing x.
>
> **[3:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=197)** So let's try that.
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=199)** So I'm going to start this app by running npm start, like this.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=204)** And here it's going to give me the options to ask a question.
>
> **[3:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=208)** So you, it's going to be me, I'm going to interact with this application with you.
>
> **[3:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=213)** And after that I'm going to expect an answer from the application, meaning the AI, after we set up.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=218)** So that's going to be the next step.
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=219)** So for example, here I can ask, "What is the weather in Paris?"
>
> **[3:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=227)** So it is not connected to any API yet, so it's not going to give me anything back.
>
> **[3:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=232)** And here, it's just going to console.log out, "You said," followed by the input that I just typed.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=241)** And I can also, like the instruction that are given here, I can also type x.
>
> **[4:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=246)** And then with this instruction, I'm going to exit the program.
>
> **[4:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=249)** So that should do it. So let's start again.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=252)** So npm starts, and if I type x, it's going to say, "Goodbye."
>
> **[4:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=257)** So that's going to be here, the prompt, to say that we want to exit the program.
>
> **[4:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=261)** So next what we want to do, that's going to be the next step, let's go check out step two.
>
> **[4:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=267)** The step will be to set up an API key.
>
> **[4:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=269)** So I'm going to walk you through this step, which is very simple, which is to create a new secret key and then add it to this file that we're going to find here, which is .env.example.
>
> **[4:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/node-project-setup?u=76281980&t=279)** We're going to be able to define here our secret key to be authorized to send API requests and be able to chat with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (8), api (5), node (5), ai (3), next (3)
> **CLI Commands:** node (7), find (5), make (5), npm (2)
> **Prerequisites:** install (7), set up (6), configure (1)
> **Env Vars:** api (6), readme (1), download (1), chat (1)
> **File Paths:** node.js (2), package.json (2), index.js (1)
> **UI Navigation:** select the (2), navigate to (1)
> **Documentation:** the readme (1), the documentation (1)
> **Exercise Files:** starter project (2)

#### Authenticate and configure with OpenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=0)** - [Instructor] Now we continue with the project, and we want to configure the project with OpenAI.
>
> **[0:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=4)** So we're going to do that line five.
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=6)** Let's go to the quick start guide.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=9)** And below, you're going to find the first example.
>
> **[0:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=11)** So you're going to make sure that we select Node.js for the language.
>
> **[0:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=16)** And we're going to find the first example to make an API request.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=20)** And the first step will be to make sure that you add OpenAI from the OpenAI Library to the scope of the project.
>
> **[0:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=27)** Then you create an instance, by using this client.
>
> **[0:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=30)** So I'm going to copy line three, and go back to the projects, right here, and then we're going to add this line.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=39)** And if we try, let's go back, I'm going to take this first example.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=43)** So that's going to be one quick example to make an API request.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=47)** From the ChatGPT API, let's go here and try this right here.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=53)** I'm going to show you what happens.
>
> **[0:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=56)** We're going to run with NPM starts.
>
> **[0:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=59)** There we go, and we've got an error.
>
> **[1:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=61)** And if we check it out, you're going to see that here, it says that the OpenAI API key environment variable is missing or empty.
>
> **[1:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=68)** And that is the important step.
>
> **[1:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=70)** We need to also set up an API key to be able to send an API request.
>
> **[1:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=74)** So let's go back, you're going to see that as part of this starter project, I am providing you with this .env.example.
>
> **[1:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=81)** And in a real world example, it should be named like this, I'm going to rename it to .env file.
>
> **[1:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=89)** And we're going to use this file to keep private and secret our API keys.
>
> **[1:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=94)** So you should never expose this one publicly.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=97)** We're going to use it only privately and locally to keep our secret files secrets, as the name suggests, and private.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=104)** So let's go back to the documentation, and we're going to find here on the left sidebar this section, which is API keys.
>
> **[1:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=112)** And this is where we're going to define our API keys for OpenAI.
>
> **[1:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=116)** So I'm going to select create new secret key.
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=119)** Naming it is optional.
>
> **[2:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=121)** And for the permissions, I'm going to keep it as all as the defaults.
>
> **[2:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=126)** I'm going to select create secret key.
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=128)** Here we go, so the process is very easy.
>
> **[2:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=131)** So we have an API key, which is generated.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=134)** And it gives us an important message, which is to remind us to save this secret key somewhere safe and accessible.
>
> **[2:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=142)** And for security reason, it's not going to be visible after we close this box.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=147)** So we're going to make sure that we copy this API key before closing this box.
>
> **[2:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=151)** So I'm going to go back to the project and save it.
>
> **[2:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=155)** Here we go.
>
> **[2:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=157)** And once this is done, you can then click done.
>
> **[2:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=161)** And you see that once this is created, so it's not going to be entirely visible, in the case that you lose it, you're going to need to revoke it first and then create a new one.
>
> **[2:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=170)** Also, it is important to note that for every API key, it's going to be connected to your usage.
>
> **[2:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=176)** And for every new account, you're going to be granted with a free credit.
>
> **[2:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=179)** So you can test the APIs and language models for free with every new account, so that's good to know.
>
> **[3:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=188)** All right, so let's go back and let's try again.
>
> **[3:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=190)** So instead of trying this time, this API request, I just want to show you that now we know that we are all set.
>
> **[3:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=197)** So I'm going to go here and remove this.
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=199)** So that's going to be actually the rest of the demonstration, so I don't want to go too fast.
>
> **[3:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=207)** And right here, so what I want to show you is that we can successfully now access the API key.
>
> **[3:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=214)** So we know that we are all set.
>
> **[3:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=217)** And right here, so let's see.
>
> **[3:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=220)** Here we go, so now you can read your API key that corresponds to the one that we have just created, and add to our .env file.
>
> **[3:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=228)** Perfect, so now we know that we are all set.
>
> **[3:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/authenticate-and-configure-with-openai?u=76281980&t=231)** The next step will be to define instructions and prompts to give a message and give instructions to the language models, let's do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (14), next (2), [[Node.js]] (1), [[ChatGPT]] (1), [[npm]] (1)
> **Env Vars:** api (15), npm (1)
> **CLI Commands:** make (5), find (3), node (1), npm (1)
> **Cross-References:** go back to (3)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** node.js (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)

#### Define prompts and a system message
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=0)** - [Instructor] Now after configuring the project with OpenAI, so we have set up an API key, the next step is to send our first API request.
>
> **[0:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=8)** And we're going to do that right under this if statement.
>
> **[0:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=12)** In this video, we learn to define prompts and to generate completions from a single text prompt.
>
> **[0:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=18)** So let's go back to the documentation.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=20)** We're going to find the developer quickstart guide.
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=23)** We're going to scroll down and find the example under the Node.js library.
>
> **[0:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=28)** And that's going to be under step three to send our first API request.
>
> **[0:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=32)** So we're going to copy from line six to 11.
>
> **[0:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=36)** Let's go back to the source code, and we're going to add this example and we're going to see how it is set up. So we have two keys.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=43)** So first, messages.
>
> **[0:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=44)** That takes a list of messages as an input.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=47)** And we also specify the language model.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=50)** And here you see that we've got this list of messages as an input.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=53)** And the first ever message will be a system message.
>
> **[0:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=58)** And this is to indicate the assistant how to behave.
>
> **[1:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=61)** What is the expected behavior from AI?
>
> **[1:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=63)** So we're going to take this list of messages, this array, I'm going to create this here as a global variable.
>
> **[1:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=73)** All right, and what we're going to do is to then add this object as an input.
>
> **[1:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=78)** And what we're going to do is as soon as we submit an input to send a message to the assistant, we're going to append, we're going to add this new object to the list of messages and then add it as an input.
>
> **[1:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=94)** So let's see this first example, We're going to run npm start.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=103)** And here we have the options to exit the conversation by typing x or to write a question.
>
> **[1:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=109)** So I'm going to ask a basic math question, like what is two and two?
>
> **[1:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=114)** And here we get a response back from the assistant.
>
> **[1:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=117)** The assistant, so that is an object, and we can see that we've got this message object and this object with the role: 'assistant'.
>
> **[2:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=125)** So this corresponds to the answer from the assistant, the AI assistant.
>
> **[2:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=129)** So the answer is two and two is equal to four.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=134)** Let's go back again to the documentation.
>
> **[2:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=137)** And under text generation, we're going to find the documentation for Chat Completions, the Chat Completions API.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=143)** And right below, we're going to find an example of a response, the response format.
>
> **[2:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=148)** So that corresponds to this choices object, which is an array.
>
> **[2:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=152)** And we want to access inside the first object in that array this message.
>
> **[2:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=159)** Then consent.
>
> **[2:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=160)** That corresponds to the answer from the assistant.
>
> **[2:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=164)** So let's complete here.
>
> **[2:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=165)** So I'm going to go back to the source code and I'm going to make a few changes because we want to read actually the message, then the content of this message.
>
> **[2:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=178)** And what we're going to as well is to append to the list of messages the response from the AI.
>
> **[3:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=186)** So that's going to be all this completion and that's going to be this message object.
>
> **[3:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=193)** So let's go back to check out what it is.
>
> **[3:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=194)** So that's going to be this message object with the role assistant.
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=198)** Then the next time around, so that's going to be added to the list of messages as history.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=204)** So we're going to make another test. I'm going to run again.
>
> **[3:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=209)** I'm going to ask another questions like a factual question, like what is the capital of Belgium?
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=219)** Something easy. Here we go.
>
> **[3:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=222)** So we got the answer back from the AI assistant, which is that the capital of Belgium is Brussels.
>
> **[3:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=228)** And you can ask all type of questions.
>
> **[3:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=230)** So here you've got an example.
>
> **[3:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=231)** You can ask, for example, who won the World Series in 2020.
>
> **[3:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=235)** And so the answer is the Los Angeles Dodgers won the World Series in 2020.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=241)** So the key is to set a system message to give instructions and context to the assistant bot.
>
> **[4:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=247)** By defining a persona, we help the bot, the assistant bot to behave as expected.
>
> **[4:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=253)** So I could have changed this to, for example, let's go back to the top where we set up the system message.
>
> **[4:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=259)** I could have changed this to you are a professional assistant or you are a funny assistant if I want to generate funny responses from AI.
>
> **[4:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=272)** And this is what we defined prompt engineering.
>
> **[4:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=274)** The prompt is the text input in natural language that you send to the language model in order to get better results and optimized results.
>
> **[4:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=283)** So in order to get the best results from AI, from the language models is to write clear instructions by including details.
>
> **[4:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=292)** Right here, you're going to get all the strategies, the six strategies to get better results and optimize results from the language model.
>
> **[4:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=299)** So the key is to provide as many details as possible.
>
> **[5:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=304)** Also to provide examples if possible.
>
> **[5:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=307)** You also have the options to provide reference text to guide the response of the AI assistant and also to use external tools in order to enhance the generated response that you have right here.
>
> **[5:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=318)** And we're going to have a chance at the opportunity to use external tools in order to enhance the generated response and allow the language models to call external APIs.
>
> **[5:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=329)** So this is the end of our first example to integrate an intelligence layer.
>
> **[5:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-prompts-and-a-system-message?u=76281980&t=334)** And this is the first of many examples to come to create next generation applications driven by AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (8), api (4), next (3), prompt (2), [[Node.js]] (1)
> **CLI Commands:** find (4), make (2), node (1), npm (1)
> **Env Vars:** api (4)
> **Cross-References:** go back to (4)
> **Documentation:** the documentation (3)
> **Prerequisites:** set up (3)
> **Exercise Files:** source code (2)
> **Definitions:** is an  (2)

#### Challenge: Create an AI-agent and jokes generator
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=0)** (melodic music)
>
> **[0:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=5)** - [Instructor] For the next challenge, the goal is to learn to configure the chat completion.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=9)** So we learn to define prompts and a system message to give the chatbot instructions as to how to behave.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=15)** And so we teach the chatbot to be skilled at telling jokes.
>
> **[0:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=18)** So we're going to create a jokes generator.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=21)** And for this purpose we're going to use the art of prompt engineering.
>
> **[0:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=25)** So prompt engineering is the art of writing effective prompts by giving specific instructions to get the AI to generate the desired outputs.
>
> **[0:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=34)** So the prompt is the text input in natural language that you send to the language model.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=39)** So AI completions will vary based on the quality of the prompts that you provide.
>
> **[0:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=48)** So for the next exercise, you have two ways.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=50)** You have two options to complete the challenge.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=53)** You can access here the remote repository, so you can access the different branches and then access the exercise files to complete the exercises and the challenges.
>
> **[1:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=63)** So you can, if you'd like, create a new development environment by creating a new cut space.
>
> **[1:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=69)** The only limitation here is that you have access to a limited number of settings.
>
> **[1:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=74)** And the requirements in order to work with open AI project is to set up an API key in order to be able to send API requests.
>
> **[1:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=83)** So you are using here an organization account with a permission which is granted with a limited number of settings that you can access.
>
> **[1:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=92)** So you will not be able to access the section that corresponds to code spaces to add a secret, so the section for the secret, and then add a new secret for code spaces.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=104)** So that's not going to be possible from this step.
>
> **[1:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=106)** Let's go back.
>
> **[1:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=108)** And so my suggestion is to fork this repository to use it from your personal accounts, where you have full access to the settings.
>
> **[1:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=117)** So I'm going to do that, I'm going to click on fork right here.
>
> **[2:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=121)** And remember to leave this one unchecked because you'd like to copy all the branches for this repository.
>
> **[2:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=127)** And so I'm going to go ahead and click create fork.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=134)** And so now what I'm going to do is to go to my personal account, access my repositories, and from here you're going to see that now I have a new repository which has been created that corresponds to the same, to complete the exercises and the challenges.
>
> **[2:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=151)** And we also have access.
>
> **[2:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=152)** You may need to also click on sync fork to make sure that this is in sync with the branches that have been pushed to this repository.
>
> **[2:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=161)** So here what we're going to do is to create a new cut space right here.
>
> **[2:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=166)** So I'm going to do that.
>
> **[2:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=167)** And while this is being set up, I'm going to go have a look at the local projects right here.
>
> **[2:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=173)** So what we have here is an index.js with a starter project.
>
> **[2:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=177)** And you see that we have also defined a system message in order to indicate the language model how to behave.
>
> **[3:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=184)** So what we want is for the language models to act and behave as a skilled standup comedian that can create and crack jokes.
>
> **[3:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=193)** And so the challenge will be for you to, here, complete these parts to generate funny chat completions.
>
> **[3:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=203)** So for now, what we do is to copy all the lines here from this index.js, because we're going to need to recreate the starter projects right here on these code spaces.
>
> **[3:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=214)** So I'm going to create a new folder.
>
> **[3:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=233)** Okay.
>
> **[3:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=234)** And what I've done as well is to create a package.json because we need to also install all the dependencies.
>
> **[3:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=239)** So what you need to do next is, here, to make sure that you install all the dependencies.
>
> **[4:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=244)** So before that, you're going to need to navigate to this new folder, which is challenge.
>
> **[4:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=248)** Then run NPM install to install all the dependencies.
>
> **[4:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=251)** And what you need to do next is also to set up an API key, just like you did for the local projects.
>
> **[4:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=257)** You're not going to create a .av file because you should never expose your API key publicly.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=264)** So your secret key is something that you should keep safe, private, and secret.
>
> **[4:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=270)** So instead what we're going to do, we're going to go here.
>
> **[4:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=272)** So we're going to do this step, which is to go to settings.
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=275)** And you see that this time you have access to all the settings.
>
> **[4:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=279)** You're going to go here, secrets and variable, and then access code spaces.
>
> **[4:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=285)** And from here you're going to be able to then create a new secret key.
>
> **[4:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=290)** So let's do that.
>
> **[4:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=292)** I'm going to do this and then copy this API key and save it.
>
> **[4:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=297)** I'm going to click on add secrets.
>
> **[5:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=300)** All right, so you can also add, if you'd like, the read me file, but for now, you're all set.
>
> **[5:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=305)** You can from now on, complete the exercise, the challenge by using code spaces or choose to run it locally.
>
> **[5:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-create-an-ai-agent-and-jokes-generator?u=76281980&t=312)** And then I'm going to meet you in the next video to see the solutions together to this challenge and learn to create funny chat completions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), api (5), ai (3), chatbot (2), [[Prompt Engineering]] (2)
> **Prerequisites:** install (4), set up (3), configure (1)
> **Env Vars:** api (5), npm (1)
> **UI Navigation:** click on (3), go to (1)
> **File Paths:** index.js (2), package.json (1)
> **CLI Commands:** make (2), npm (1)
> **Exercise Files:** exercise files (1), starter project (1)
> **Best Practices:** remember to (1), you should never (1)

#### Solution: Generate chat completions
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=0)** - [Instructor] For the solution to this challenge, we learned to generate chat completions.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=9)** So we're going to learn to configure the chat completions API.
>
> **[0:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=12)** We learned to define prompts and a persona, a funny persona, in order to make the chatbot capable of telling jokes.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=20)** And before moving forward, so I'm going to make one recommendation, which is to stop this current Codespaces, and restart it, because we have just set up a new secret key.
>
> **[0:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=29)** And to make sure that this is taken into account, we're going to make sure that we reload this Codespaces.
>
> **[0:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=34)** So we're going to do that by selecting Shift + Command + and then P, or Control + Shift + P, if you work on Windows.
>
> **[0:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=42)** So we're going to then select Stop Current Codespace like this.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=47)** All right, so that's going to stop this Codespaces, and gives us the options to restart the same Codespace.
>
> **[0:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=57)** All right, so we're going to click Restart codespaces.
>
> **[1:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=63)** All right, and once this is done, we can then continue.
>
> **[1:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=66)** So we have our starter project, and we're going to scroll down to find here this section.
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=71)** So where we're going to set up how to generate completions.
>
> **[1:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=74)** And for that we're going to check out, again, the documentation for OpenAI.
>
> **[1:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=80)** Right here, we're going to visit Documentation and find the section for Chat Completions.
>
> **[1:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=87)** And we're going to use the same example, and make sure that you select node.js here for the library.
>
> **[1:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=93)** And we're going to copy from line 6 all the way down to 12, like this.
>
> **[1:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=99)** Let's go back and add right here.
>
> **[1:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=101)** So the same example on Codespaces.
>
> **[1:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=105)** And we're going to make a few changes.
>
> **[1:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=106)** So the first thing we want to do is every time that you submit a text input, you'd like to add it to the list of messages and then add it here as an input.
>
> **[1:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=116)** So when you create the completion objects.
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=119)** And that's going to be right here, you see that we have defined this list of messages with the first system message.
>
> **[2:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=126)** This is very important because we're going to use this system message to give a persona to the chat bots.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=133)** And basically this system message reads that we want this chatbot to be a skilled standup comedian with a knack for telling 1-2 sentence funny stories.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=144)** All right, so we're going to go back and allow to append here the input from the user before we then add this list of messages as an input.
>
> **[2:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=160)** And we can also specify here the language model.
>
> **[2:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=163)** So this is what we specify here, so we can use the same and replace here with this variable.
>
> **[2:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=170)** All right, so this is almost done.
>
> **[2:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=172)** So the next step will be to then generate a completion and then display the response from the bots.
>
> **[3:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=180)** So I'm going to do that with console.log and specify that you can either specify AI or bots.
>
> **[3:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=188)** We can replace with Bot.
>
> **[3:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=190)** And so we're going to access the response from the AI assistance by here accessing completion and then choices.
>
> **[3:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=203)** And then the first object for choices, finally, message and content.
>
> **[3:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=207)** And the other thing you can do also is to also append the results from the chat completion by appending the message objects.
>
> **[3:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=220)** All right, so let's try that.
>
> **[3:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=223)** We're going to run the project.
>
> **[3:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=224)** So let's just make sure that we navigate to challenge because I had created this new repository.
>
> **[3:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=232)** And after that I'm going to run npm start.
>
> **[3:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=237)** All right, so now I can ask a question or I can ask the chatbot to tell a joke.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=241)** So I'm going to say, "tell a joke about Belgian people."
>
> **[4:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=251)** We're going to see what it comes up with.
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=256)** All right, so.
>
> **[4:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=257)** Why did the Belgian baker put yeast in his shoes?
>
> **[4:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=260)** Because he wanted to make sole food!
>
> **[4:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=262)** All right, that's a good one.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=264)** Now we're going to try another one, but from the local project, because I also told you that when I presented this project that you also have the option to run this project locally.
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=275)** So let's do that as well.
>
> **[4:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=277)** So here I'm running the project from Visual Studio Code.
>
> **[4:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=280)** So you also have this option, and this time I'm adding here the options to also keep track of the usage of the number of tokens that you use for every prompt that you submit.
>
> **[4:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=293)** Let's try that.
>
> **[4:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=295)** So this time we're going to ask to tell a joke about French people.
>
> **[4:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=299)** So "tell a joke about French people."
>
> **[5:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=304)** And looks like I had already put an example.
>
> **[5:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=307)** So I'm just going to remove that and just put input instead of this hardcoded message.
>
> **[5:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=313)** I'm going to replace with input and go ahead.
>
> **[5:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=317)** Okay, so it looks like this is going to restart.
>
> **[5:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=319)** So let me write that again, Tell me a joke about French people.
>
> **[5:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=326)** Okay, I'm sure it's going to be funny, I'm not going to take any offense, because I am myself a French person, and apologies I made a little typo here.
>
> **[5:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=336)** So let's just replace with input here.
>
> **[5:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=338)** Input.
>
> **[5:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=339)** You should write input and not getInputs.
>
> **[5:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=341)** Let me ask the same question again.
>
> **[5:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=343)** Tell me a joke about French people.
>
> **[5:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=347)** All right, and the response from the bot, the funny chatbot, is, "Why did the French chef only use one egg in his recipe?
>
> **[5:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=353)** Because one egg is un oeuf, is enough."
>
> **[5:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=356)** Very good one.
>
> **[5:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=357)** And we can also keep track of the usage.
>
> **[5:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=359)** So meaning that for this particular prompt, we've used exactly 63 tokens, which is also a good way to keep track how many tokens and how much money you spend.
>
> **[6:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=370)** So every time that you interact with the language model.
>
> **[6:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=373)** So I hope that you enjoyed completing the challenge.
>
> **[6:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=375)** So now you should understand how to define a system message, how to write instructions, and generate chat completions, funny chat completions, and also keep track of the usage of how many tokens you use For every prompt submitted.
>
> **[6:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-generate-chat-completions?u=76281980&t=389)** Good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (5), chatbot (4), [[Tokens]] (4), prompt (3), ai (2)
> **CLI Commands:** make (8), find (2), node (1), npm (1)
> **Prerequisites:** set up (2), configure (1)
> **UI Navigation:** scroll down (1), navigate to (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** getinputs (1)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)


### 3. Extending the Chatbot Capabilities with External Tools

[↑ Back to Table of Contents](#table-of-contents)

#### Introducing function calling
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=0)** - [Instructor] So far what we've been doing is to successfully integrate the open AI APIs within our node applications to create agents powered by artificial intelligence so we can interact with these AI agents in a natural fashion to perform various text processing tasks like generating content, answering questions, and process basic math operations.
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=23)** So let's see a quick example.
>
> **[0:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=25)** We're going to do just like we did before, we're going to ask a basic math question like what is two and two.
>
> **[0:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=31)** We got the answer back from the AI assistant and we can read the two and two equals four.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=37)** Let's try something else and let's try to ask for what is the current date and time in Paris?
>
> **[0:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=46)** Let's try that.
>
> **[0:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=48)** And sometimes, because it can take longer to get the answer back from the AI assistant, you can always try again.
>
> **[0:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=55)** So by restarting the app, I suggest you do that.
>
> **[0:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=58)** So let's try again.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=60)** You're going to run and ask again what is the current date and time in Paris?
>
> **[1:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=65)** Here we go.
>
> **[1:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=66)** And now we can read that, I'm sorry, but as a text-based AI, I do not have access to real-time data.
>
> **[1:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=72)** However, it suggests that we check the current data in Paris by searching online or by using a word clock website or application.
>
> **[1:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=81)** So that is something to keep in mind.
>
> **[1:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=84)** So the language models provided by OpenAI are trained on millions of data.
>
> **[1:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=88)** However, the limitation is that the language models are trained up to certain dates.
>
> **[1:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=93)** So you can always check here further down for the list of existing models at the time that you watch this online training.
>
> **[1:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=100)** For the latest, most performance model, the training data is up to April, 2023.
>
> **[1:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=107)** And if we check for the GPT-3, 3.5.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=111)** GPT 3.5 turbo, so the one that we've been using so far, the training data is up to September, 2021.
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=119)** So any events or information passed this date for the training data won't show in the results.
>
> **[2:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=125)** It's not going to be visible in the generated outputs.
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=128)** So that is something to keep in mind.
>
> **[2:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=131)** In this module, we're going to discover the function calling feature.
>
> **[2:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=134)** With function calling, you can give the language models the ability to use external tools and to fetch current data from public APIs, cloud database, or your own backend API.
>
> **[2:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=146)** What we want is to create an AI agent and to take it a step further by allowing the chat models to call external APIs, public APIs.
>
> **[2:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=154)** In order to generate extended response and be able to provide with an enhanced user experience.
>
> **[2:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=160)** And for the next demonstration, we're going to use this public API provided by [openweathermap.org](https://openweathermap.org) in order to get the current weather information.
>
> **[2:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=169)** So you're going to need to sign up for a new account and once you set up an account, you're going to access my API key.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=174)** So that's going to be just like with OpenAI, you're going to need to set a secret key to be authorized to send API requests to this API.
>
> **[3:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=183)** And you're going to be able to find out that this is documentation for developers which is very well written and organized.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=189)** We're going to use this one in order to be able to access the current weather information for any location that we request.
>
> **[3:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introducing-function-calling?u=76281980&t=196)** So up next, we create an AI powered chat bot that understands natural language, which is capable of answering user queries to do math, and which is also capable of giving the current weather reports by fetching current data and by calling this external API, which is [openweathermap.org](https://openweathermap.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), ai (7), api (6), next (2), node (1)
> **Env Vars:** api (6), gpt (2)
> **CLI Commands:** node (1), find (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (2)
> **Versions:** 3.5 (2)
> **Analogies:** just like (2)
> **Warnings:** keep in mind (2)
> **Prerequisites:** set up (1)

#### Enable function calling
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=1)** - [Instructor] Now let's have a closer look at the function calling feature that gives language models the ability to fetch current data, call APIs to provide with an extended, generated response by including training data combined with the current information.
>
> **[0:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=14)** So we're going to find below an example in order to implement the function calling.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=21)** So make sure that you select node.js for the library.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=24)** And here you have an example of a function, a dummy function that returns hardcoded information, so when you call this function.
>
> **[0:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=32)** And we're going to call this functions by running the conversation below.
>
> **[0:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=35)** And here is an example of a basic sequence of steps for the function calling.
>
> **[0:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=40)** And so step one, that's going to be the same process, which is to send first the conversations to the language model.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=47)** We can send a request.
>
> **[0:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=49)** And here we can see that the user input is to ask what's the weather like in San Francisco, Tokyo, and Paris.
>
> **[0:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=56)** Below line 25, we define the tools, so the function, and we can read the description for this function, which is to get the current weather information in a given location.
>
> **[1:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=68)** And we also define the parameters, meaning the information.
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=71)** So the basic and common information that are required when you want to send a request to get the current weather information.
>
> **[1:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=78)** So that's going to be the location first and also the temperature unit, which will be either in Celsius or in Fahrenheit.
>
> **[1:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=86)** And you can also specify what are the required parameters in order to be able to send an API request to the public API that we are yet to define.
>
> **[1:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=96)** And so below, you can recognize here the generated completion that we want to do with this model.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=103)** We pass a list of messages as an input, but also the tools that we can call.
>
> **[1:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=109)** And we also specify the tool choice with the option auto that allows the language models to detect if calling a function is necessary.
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=119)** And that's going to be here step two, which is to check if the model, the language model wants to call a function.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=124)** And if this is yes, so basically that's going to return a Boolean.
>
> **[2:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=129)** If this is yes, that's going to be the next step, step three, which is to call a function.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=133)** So we're going to make a few adjustments in the source code.
>
> **[2:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=137)** So basically what we're going to do is to take all of this.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=143)** I'm going to copy from line 20, all the way down to here, 85.
>
> **[2:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=151)** We're going to go back to our source code example, and I'm going to paste this example for the run conversations.
>
> **[2:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=157)** And I'm going to keep this one, and we're going to make a few adjustments because instead of here, so obviously we want to keep this function, which is to be able to interact with the language model, I mean, with the program, the application from the common line interface.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=174)** So we're going to copy you from here, from line 93, all the way down to here, 103.
>
> **[3:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=181)** I'm going to cut and remove this part and this extra curly bracket.
>
> **[3:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=188)** So we don't need it.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=189)** Okay, let's go back to the top.
>
> **[3:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=192)** And I'm going to add this from here.
>
> **[3:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=196)** So that's going to be here we start the conversation, and for the completions.
>
> **[3:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=201)** So that's not going to be just this regular completion like this.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=204)** I'm going to keep this one.
>
> **[3:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=206)** You see that we have extra keys in this object to generate a response.
>
> **[3:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=213)** And we specify also this language model in order to enable function calling, like this.
>
> **[3:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=222)** And for the requests, we're going to do just like this example and allow to ask for what is the weather like in San Francisco, Paris, and Tokyo.
>
> **[3:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=231)** And I'm going to replace this with this request.
>
> **[3:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=234)** All right, so we're not going to go too far for this first example.
>
> **[3:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=239)** So meaning that I'm going to actually hear cut from line 72, all the way down to here.
>
> **[4:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=249)** All right.
>
> **[4:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=249)** And this.
>
> **[4:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=255)** And basically what we want to check is, if toolsCalls length, toolCalls actually.
>
> **[4:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=260)** It's going to return a Boolean.
>
> **[4:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=261)** So this is just to tell us if there is actually a need to... And I'm not going to do if, I'm going to do a console log just to check if we actually need to call a function based on this request and based on the response, which will generate it by here, the language models.
>
> **[4:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=282)** And I think we are missing yet.
>
> **[4:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=284)** Because while true, it's missing closing brackets somewhere here.
>
> **[4:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=288)** So I'm going to add it.
>
> **[4:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=291)** It should be fine.
>
> **[4:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=293)** All right, so just to fix this little error.
>
> **[4:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=297)** All right, so we just going to make a few fixes and, all right, so let's try that.
>
> **[5:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=302)** So actually what I'm going to do instead, we're going to allow to ask these questions from the command line interface.
>
> **[5:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=307)** So I'm going to put back inputs, and let's run the first test, and that's going to be response.
>
> **[5:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=313)** Okay, I think that's correct.
>
> **[5:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=316)** All right.
>
> **[5:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=317)** Let me start again just to make sure.
>
> **[5:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=320)** And we're going to ask this question.
>
> **[5:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=323)** I'm going to try again because sometimes it remains stuck, without the quotes this time.
>
> **[5:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=330)** I don't need to ask with the quotes.
>
> **[5:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=332)** So let's try again without the quotes like this, and let's try again.
>
> **[5:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=342)** There we go.
>
> **[5:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=343)** So it returns true, and this is actually this part right here.
>
> **[5:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=346)** So we ask a question, and there was a response which is generated.
>
> **[5:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=351)** And we check step two, if the language model wants to call a function, and this returns true.
>
> **[5:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=356)** This means that there is toolCalls available.
>
> **[6:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=360)** So what we did so far is to send a conversation and allow the language models to detect if calling a function is necessary, which is step two.
>
> **[6:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=369)** If this returns true, this means that the language models needs to call a function.
>
> **[6:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=374)** So we allow the language models to detect intelligently if a function needs to be called.
>
> **[6:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=380)** And we're going to do that next.
>
> **[6:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/enable-function-calling?u=76281980&t=381)** We're going to take care of step three, and allow the language model to call a function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), api (2), next (2), feature (1), [[Fetch]] (1)
> **CLI Commands:** make (5), find (1), node (1)
> **Code Identifiers:** toolcalls (2), toolscalls (1)
> **Definitions:** means that (2), is an  (1)
> **Env Vars:** api (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** source code (2)
> **File Paths:** node.js (1)

#### Define tools and parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=0)** - [Instructor] We continue with the example with function calling and the next step is step three.
>
> **[0:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=5)** We want to allow the language models to call a function.
>
> **[0:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=8)** And we're going to use the same example, this dummy function, which is get current weather.
>
> **[0:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=14)** We're going to add it to our example, let's put it here.
>
> **[0:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=19)** Let's go back and we're going to go back to here.
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=23)** This step, which is to check if there is a response message tool calls.
>
> **[0:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=28)** And this is to indicate that the language model should call a function.
>
> **[0:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=35)** So let's go to step three.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=39)** So previously what we were checking is if there is tool calls necessary, and I think I'm missing a curly bracket and that's good.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=50)** Okay, let's go back.
>
> **[0:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=51)** And what we're going to do, we're not going to go too far as well.
>
> **[0:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=54)** We're going to go step by step.
>
> **[0:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=55)** And actually instead of doing this step, which is messages push, I'm going to put all of that in a comment for now, like this same for the second response, which should be the last step.
>
> **[1:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=72)** Let's put that in a comment.
>
> **[1:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=74)** And for now, I just want to console log and see the content.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=79)** So the format of this function response.
>
> **[1:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=84)** So I'm going to console, log here, function response, and we're going to see how it looks.
>
> **[1:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=89)** So basically how it works is that for now what we have is this dummy function.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=95)** We haven't connected our application with an external API yet that's going to be another step later.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=103)** And this function get current weather, we'll return just an objects stringify.
>
> **[1:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=108)** And based on the location, it's going to return one of this response.
>
> **[1:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=114)** So let's try that, so what I'm going to do is to change, it's going to be here.
>
> **[2:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=120)** Yeah, from here actually, that we don't need.
>
> **[2:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=123)** I'm going to remove that and allow to append the messages because we had already set up here a global messages object.
>
> **[2:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=132)** That's going to be the first step with a system message.
>
> **[2:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=136)** We've got the tools with the get current weather function.
>
> **[2:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=142)** And here we can pass here our request by typing our input.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=147)** So let's try that.
>
> **[2:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=155)** I'm going to ask a question like what is the weather in?
>
> **[2:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=159)** I think we have the options for Paris, so let's try that.
>
> **[2:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=162)** Here we go so we've got the JSON object back, which corresponds to this step right here.
>
> **[2:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=169)** So first it detected that function calling is necessary.
>
> **[2:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=175)** Then it checked the available function, which is get current weather, based on that, What it did is to call the function in order to generate an extended response.
>
> **[3:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=187)** And before it generates an extended response, it's going to return this just an object that includes all the necessary information in order to then return a response in a string format in a natural fashion, which is going to look like a human conversation.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=204)** And this is what this just an object looks like with information of the location, which is Paris, the temperature information with the current weather information and the temperature unit.
>
> **[3:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=215)** And so the next step will be to connect to a public API.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=218)** So the next time that we call the function, we also send an API request, and that's going to be to the open [weathermap.org](https://weathermap.org) API that we presented at the beginning.
>
> **[3:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=228)** And so we're going to allow the language model to append the function response to the list of messages.
>
> **[3:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=234)** So that's going to be here, this part which is in commits, we're going to append this function response.
>
> **[4:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/define-tools-and-parameters?u=76281980&t=240)** And then finally, the language model is going to be able to summarize the results and generate an extended response by including the data from the JSON object after fetching the current weather information from the public API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (5), next (3), [[JSON]] (2), application (1), data (1)
> **Env Vars:** api (5), json (2)
> **URLs:** [weathermap.org](https://weathermap.org) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Call the public API
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=0)** - [Instructor] The next step will be in the form of a challenge.
>
> **[0:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=8)** So after defining functions, the challenge for learners is to connect to an API, a public API, to get the current weather information.
>
> **[0:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=16)** And so for this project, we use this online service, which is [openweathermap.org](https://openweathermap.org), that provides an API for developers who need to integrate current weather data information into their web projects.
>
> **[0:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=29)** And this API is very generous because it allows a thousand calls per day for free, which is more than enough to test out the API endpoints, like the current weather data information forecast.
>
> **[0:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=40)** You also have NowCast, historical weather data for any geographical location.
>
> **[0:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=44)** So you can check this one out.
>
> **[0:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=46)** And for the next example, we're going to use, actually, this one, which is current weather data, which is very simple.
>
> **[0:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=52)** We're going to check this one out in a moment.
>
> **[0:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=56)** And for this project, you need to create an account with [openweathermap.org](https://openweathermap.org).
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=60)** So you should already have this one ready.
>
> **[1:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=62)** Then you can access your API keys, which is required in order to authenticate and be able to access the current weather data, API, and endpoints.
>
> **[1:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=72)** Finally, we trigger the functions to make API requests.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=79)** And for this project, you have the options to run it locally, so we're going to look at this one in a moment.
>
> **[1:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=85)** So you can run this project from your usual code editor, and you also have the option, if you'd like, to run it from one cut space.
>
> **[1:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=94)** So by accessing here the repository which is provided by LinkedIn Learning, which is one organization account.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=102)** And as a reminder, whenever you use an organization account, you may have some limitations in order to access the settings, so that's why I recommend that you use it from your personal accounts.
>
> **[1:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=115)** And this is from the settings that you're going to be able to set up secret key for these code spaces.
>
> **[2:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=123)** So remember that we need to set up an API key for OpenAI to be able to interact with the APIs from OpenAI.
>
> **[2:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=130)** And this is the same also for the [openweathermap.org](https://openweathermap.org) online service.
>
> **[2:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=137)** For this web service, you also need to set up an API key, just like this, for the local projects.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=143)** So we're going to do the same.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=144)** We're going to create a new secret key.
>
> **[2:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=146)** So I'm going to show you this step again.
>
> **[2:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=149)** I'm going to select New Repository Secrets.
>
> **[2:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=153)** For the name, I'm going to choose this one and set up my secret key.
>
> **[2:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=158)** Here we go.
>
> **[2:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=159)** And then we're going to add a secrets, and that's done.
>
> **[2:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=163)** And so let's go back to this repository and select from here Code, and then set up the code space.
>
> **[2:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=175)** All right, so this is set up and my recommendation is to do Shift, Command, P to stop the current cut spaces just like we did for one previous demonstration, which is to stop it then start it again in order to allow this cut space to take the new information that we have provided that includes the weather API key.
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=199)** So this is one recommendation to make sure that this is working.
>
> **[3:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=203)** And you need to do a little bit of work right here, so you're going to need to set up your project.
>
> **[3:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=208)** So like this one.
>
> **[3:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=209)** So by setting up the package JSON.
>
> **[3:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=213)** Here, you have the index dot GS, so I'm going to complete mine in order to complete with the solution next.
>
> **[3:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=220)** And we're going to look at the starter project for now, so what you have is here this dummy information.
>
> **[3:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=229)** So what you want to do is to be able to send an API request to get weather information, the current weather information for one location.
>
> **[3:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=238)** Then let's go back to the documentations for the [openweathermap.org](https://openweathermap.org).
>
> **[4:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=242)** So I'm going to let you go through the documentation.
>
> **[4:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=245)** So that's going to be a part of the exercise, but here on the documentation, which is very well-written, you're going to see that you have an example of an API call and also an example of an API response.
>
> **[4:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=259)** And the JSON format response will give you the weather information with a description and also the information of the temperature, which is using Kelvin units.
>
> **[4:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=272)** And in the starter project, I am also providing you with some convenient utility function to convert from Kelvin to Celsius and also another function to get the latitude and longitude from one location.
>
> **[4:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=289)** And I actually got this from the documentation as well from [openweathermap.org](https://openweathermap.org).
>
> **[4:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=293)** So you're going to need to look at the documentations to understand how it works, to understand how to make API calls with this web service, and then when you get the information that you need, which is going to be right here, so you're going to get a response, you're going to replace with the actual response from the API call, and then you're going to be ready to complete the next step, which is to get here a function response in order to extend the conversation with the functional response, with the external data, all right?
>
> **[5:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=330)** And after that, to complete the challenge, you're going to allow the GPT models to generate an extended response that includes information from the external API.
>
> **[5:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=341)** All right, so that's going to be your turn now.
>
> **[5:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=344)** So the goal is to combine the power of the Chat GPT API with the ability to extend the response by calling external API.
>
> **[5:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/challenge-call-the-public-api?u=76281980&t=352)** So good luck to you, and I will meet you in the next video to see the solution of this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (19), data (6), next (5), web (3), [[JSON]] (2)
> **Env Vars:** api (19), json (2), gpt (2)
> **Prerequisites:** set up (7)
> **URLs:** [openweathermap.org](https://openweathermap.org) (5)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2), in the next (1)
> **Documentation:** the documentation (3)
> **Exercise Files:** starter project (2)

#### Solution: Call functions and connect to APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=6)** - {instructor] Now we see the solution of this challenge, and let's look at the steps again.
>
> **[0:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=11)** So after checking, if the GPT models needs to call a function, we're going to trigger a function, so that's going to be step three, and here we're going to call this function, which is get current weather.
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=23)** After that, we're going to get a response in the format of adjacent objects that we use to extend the conversation and finally allow the GPT models to generate an extended response.
>
> **[0:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=36)** So before doing that, what we want here is to connect to an external API.
>
> **[0:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=41)** So we're going to check this function, which is get current weather, and we're going to use this web service open with a [map.org](https://map.org) in order to get the current weather information.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=53)** And we need a few information, so the latitude, the longitude, and of course required is the API key.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=60)** All right, so we're going to call this function first, which is geo code, and this is also provided by the same web service.
>
> **[1:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=67)** So let's go check this one out.
>
> **[1:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=68)** So you see that line 48, I am providing you with this link, so we're going to follow this link, and here you have more information about how to make an API call to call current weather data.
>
> **[1:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=80)** So we're going to use this endpoint, the same, and here you're going to see how to run another API call in order to get the information of the latitude and longitude, and you simply need to provide with one location.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=95)** Let's go back, I'm going to show you in the starter projects, basically you just need to provide with one location.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=102)** For example, you'd like to know the weather forecast for Paris, and as a result, you're going to get the latitude and longitude, so we need the coordinates in order to make this API call.
>
> **[1:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=114)** So let's go back here, and after that I'm going to show you one example of an API response, which is in the adjacent format.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=124)** And in order to access the information of the weather, we can then navigate, so go through the nested object.
>
> **[2:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=130)** So we've got the weather, one array from this weather key, and we can read the description of the weather here with this description, and also access the information of the temperature by first by accessing main, then temp, and this is provided in Kelvin units.
>
> **[2:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=148)** So I am providing you with also this utility function, which is Kelvin to Celsius in order to convert from Kelvin to Celsius, all right, so that's going to be done afterwards right here.
>
> **[2:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=162)** So you see that for now, I'm just providing you with hard-coded information.
>
> **[2:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=166)** For now, we're just going to look at how the response looks like.
>
> **[2:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=170)** So we're going to make one request.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=174)** We're going to ask questions like, what is the weather like in Paris?
>
> **[2:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=178)** For example.
>
> **[3:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=180)** So we may get an error because for now we haven't connected everything.
>
> **[3:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=184)** So we're going to try again because you may experience slow responses from the language models.
>
> **[3:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=190)** In that case, you may switch to another one.
>
> **[3:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=193)** So let's me ask again, what is the weather like in Paris?
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=199)** Otherwise we're going to switch.
>
> **[3:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=200)** I'm going to show you how to switch between language models.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=204)** Okay, here we go.
>
> **[3:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=205)** So what we want to look at for now is this response, which is the response from this API right here.
>
> **[3:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=212)** So actually what I should have done is I'm going to make a few changes because this is just like the response.
>
> **[3:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=217)** You've got the status code, which is 200, which is fine.
>
> **[3:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=221)** And what I'm going to do is to transform this into a JSON object.
>
> **[3:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=226)** So I'm going to do JSON, await response JSON, and we're going to log this JSON objects instead.
>
> **[3:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=237)** And from there you're going to be able to actually read what we need to get, what type of information we're looking at.
>
> **[4:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=245)** Let's try that again.
>
> **[4:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=246)** I'm going to run again and ask again what is the weather like in Paris?
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=256)** All right, so let's go back up, And you're going to see that we've got the exact same response, the same that we read here in the documentation.
>
> **[4:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=265)** So we can access the information of the coordinates, the weather, and then look at the description and also the temperature, which is in Kelvin units.
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=275)** So what we're going to do in a second part is to allow to provide with the information that we need.
>
> **[4:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=281)** For example, the location is going to be here, the location that we get from here as a parameter, all right?
>
> **[4:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=289)** And actually I'm going to use this one, yeah, I'm going to use this one, we'll see.
>
> **[4:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=295)** And for the temperature, we can then navigate through this JSON response and we can access it by going through main, which is an object, and then access this temp, so this key temp and access the value, which is in Kelvin unit.
>
> **[5:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=312)** And so we're going to use this function that we have set up here, line 18.
>
> **[5:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-connect-to-apis?u=76281980&t=317)** So we're going to complete this challenge in a second part in order to be able to format the JSON objects and then return this JSON object that we're going to use to extend the conversation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (7), [[JSON]] (7), web (2), data (1)
> **Env Vars:** api (7), json (7), gpt (2)
> **CLI Commands:** make (4)
> **Analogies:** for example (3), just like (1)
> **URLs:** [map.org](https://map.org) (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)

#### Solution: Call functions and generate extended responses
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=6)** - [Instructor] So what we do here is completing the challenge.
>
> **[0:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=8)** And we simply need to provide with more information that we get after doing this API call.
>
> **[0:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=14)** So here, let's go back, and we're going to see that we've got the JSON objects.
>
> **[0:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=19)** We want to access the weather information.
>
> **[0:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=22)** And first, what we could do is to get the description, so that could be useful.
>
> **[0:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=28)** And we can access it by going through JSON and then access this array, which is weather.
>
> **[0:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=34)** It is right here, so this is an array.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=37)** Then we're going to need to access the first object and finally access description.
>
> **[0:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=41)** So let's do the same for also the current temperature.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=47)** And we can access it by going JSON, and then it is main, we have it here, and then temperature.
>
> **[0:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=59)** So we're going to use those to information.
>
> **[1:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=63)** And we need to replace, for the temperature, I'm going to do Kelvin to Celsius.
>
> **[1:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=70)** Let's see what's the suggestion from, we could use, you need if this is Celsius, but what you could do is also get a way to convert to Fahrenheit and then allow to also convert to Fahrenheit.
>
> **[1:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=83)** But for now, I'm just going to use this one, which is Kelvin to Celsius, and pass the information of current temp.
>
> **[1:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=89)** For the unit, I'm going to use the same that we use in the parameter.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=95)** And actually, I'm not going to be too strict, I'm just going to remove it.
>
> **[1:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=99)** Finally, for the forecast, we're going to pass the information of description.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=103)** And here we go.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=104)** We've got our, here JSON object, and we're going to return it, and use it as a function response.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=111)** So now, we are ready to move on to step four, right here.
>
> **[1:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=116)** So I'm going to make a few changes and remove the commands like this, and here as well.
>
> **[2:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=123)** And as soon as we get this function response, we're going to use it in order to extend the conversation with the function response.
>
> **[2:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=129)** So that's going to be step four.
>
> **[2:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=131)** And basically, we've got another step, which is step five we can call it to get the response from the model.
>
> **[2:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=138)** And we can actually say that, to get the extended response from the model.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=144)** So I'm going to remove these commands here as well.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=147)** And the purpose here is to get the second response and also to return it because we're going to use that to then display the response from here and then display it right here.
>
> **[2:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=158)** Everything should be working just fine.
>
> **[2:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=160)** Let's try again this time and ask the same question.
>
> **[2:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=165)** What is the weather like in Paris?
>
> **[2:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=173)** So this is quite slow, as I was expecting.
>
> **[2:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=175)** So this is quite slow to get a response.
>
> **[2:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=177)** So what I'm going to do is to show you the exact same project.
>
> **[3:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=180)** So that should be working on your side, depending on when you run it.
>
> **[3:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=184)** I want to show you the exact same example, but when you run the projects locally.
>
> **[3:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=188)** And more specifically, we're going to go back to the documentation for function calling.
>
> **[3:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=194)** And I want to show you that you have the option, if you'd like, to switch between language models.
>
> **[3:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=200)** So we've been using this one in this example.
>
> **[3:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=203)** And you can also use this one, which is much more performance.
>
> **[3:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=207)** Although, so you're going to need to provide with your payment information because this is pay per use.
>
> **[3:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=211)** So you need to pay every time that you want to access this language model.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=218)** And for this project, so what I've done is to get my API key, again, so to make sure that I use this language model.
>
> **[3:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=225)** So I'm going to show you where it is set up.
>
> **[3:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=229)** And I need to switch, so I'm going to change it to make sure that I get a faster response.
>
> **[3:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=235)** So I'm going to switch, all right?
>
> **[3:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=238)** And we're going to run one test.
>
> **[4:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=244)** So what I'm going to do first is to ask a factual questions like, what is the capital of Belgium, for example?
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=252)** And you'll see that it's going to call the function only if it is necessary.
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=256)** So for that particular example, the GPT models detected that we didn't need to call a function.
>
> **[4:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=263)** So it just provided a response based on its training data.
>
> **[4:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=268)** So we're going to ask another question this time, which is related to weather forecast.
>
> **[4:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=273)** So what is the weather like in Brussels example, all right?
>
> **[4:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=283)** And so the answer is that the current weather in Brussels, Belgium is approximately 11 degrees Celsius with broken clouds, excellent, So that corresponds to the information that we got after sending the API request to [openweathermap.org](https://openweathermap.org).
>
> **[4:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=297)** So we got a generated, extended response from the GPT model.
>
> **[5:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=301)** So this is working perfectly.
>
> **[5:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=303)** And to check out that this is correct, we can always check out.
>
> **[5:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=307)** So what is the weather like in Brussels?
>
> **[5:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=310)** What is the weather like, Brussels?
>
> **[5:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=311)** We're going to see it is exactly 11 degrees, perfect.
>
> **[5:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=317)** So this example helped us understand how to use the Chat Completions API in combination with the feature function calling to extend the capabilities of the GPT models.
>
> **[5:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=331)** And it is important to note as well about tokens.
>
> **[5:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=334)** Is that under the hood functions are also included in the count of tokens.
>
> **[5:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=338)** So this will be built as input tokens.
>
> **[5:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=341)** So this is important, very important to keep that in mind about function calling.
>
> **[5:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=347)** And other interesting use cases include that you can also perform multiple calls together with parallel function calling right here.
>
> **[5:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=356)** So for example, let's say that you want to know the weather in two separate locations at the same time; in New York where you live and in London where you are traveling for a vacation, for example, then you'd have to perform multiple function calls in one time.
>
> **[6:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=372)** And there are plenty of other options that you can use, explore, and experiment with integration of function calling.
>
> **[6:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=382)** For example, you can connect your assistance to a backend API to train the assistance with custom knowledge, about your product and services, and allow the chat models to generate a personalized response for your customers, and provide an enhanced user experience.
>
> **[6:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/solution-call-functions-and-generate-extended-responses?u=76281980&t=400)** And you can find more examples to test and experiment here with the OpenAI Cookbook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (5), [[JSON]] (4), [[Tokens]] (3), data (1), feature (1)
> **Env Vars:** api (5), json (4), gpt (3)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (4)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)


### 4. Getting Started with the OpenAI Assistants API

[↑ Back to Table of Contents](#table-of-contents)

#### Assistants API overview
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=0)** - [Narrator] Chat bots are often used online and on websites for customer support and to provide assistance by answering general inquiries, helping customers navigate a website, and help customers find responses to their queries.
>
> **[0:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=14)** And with the rise of AI over the years, AI agents take it a step further.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=20)** They are now capable of engaging with users in the most natural way by making predictions, making decisions, and take actions, in order to provide with valuable information and respond to user queries based on the given context and the user inputs.
>
> **[0:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=36)** And in 2022, we discovered chatGPT, a multi-model and multitask chat bot.
>
> **[0:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=41)** So you can ask chatGPT about any task that you want, like drafting an email, translating a document, even generating code, to name a few examples.
>
> **[0:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=51)** And the most striking feature about chatGPT is its ability to generate human-like conversations.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=60)** Now with the Assistants API, we can create our own chatbots and AI assistants with a unique experience.
>
> **[1:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=67)** So the assistants allow to leverage the capacities of the language models.
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=71)** And in the next examples with the Assistants API, we're going to be able to connect the assistants to different tools.
>
> **[1:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=77)** We're going to use external tools to fine tune the behavior of the assistant and extend their capabilities.
>
> **[1:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=83)** So you can connect to three type of tools with the assistants: code interpreter to execute code and access files, also knowledge retrieval to access specific data and instructions to fine tune the behavior of the assistant, and also function calling, a tool that we used in a previous example to fetch external and current data.
>
> **[1:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=107)** And in this module, we see a practical example of how to build our own AI powered conversational agents.
>
> **[1:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=113)** A bit similar to chatGPT.
>
> **[1:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=115)** So we're going to use the Assistants API.
>
> **[1:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=117)** So the steps will be to set up our projects, we can install the packages.
>
> **[2:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=120)** We also remember to set up an API key, which is required to make API request.
>
> **[2:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=126)** And finally, we're going to be able to make the conversation with AI.
>
> **[2:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=130)** Please note also that at the time of recording, the Assistants API is in beta.
>
> **[2:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=135)** So you may have different presentations or an updated version of the API at the time that you watch this video.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/assistants-api-overview?u=76281980&t=144)** So we're going to see next, how the Assistants API allows to build AI assistants within your own applications with the ability to leverage the language models and make the interaction with AI even more natural, personalized, and seamless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (8), ai (7), [[ChatGPT]] (4), next (2), data (2)
> **Env Vars:** api (8)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** chatgpt (4)
> **Prerequisites:** set up (2), install (1), required to (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Best Practices:** remember to (1)

#### Create an assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=0)** - [Instructor] Now let's find out how Assistants work.
>
> **[0:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=3)** With the Assistants, we are able to leverage the capacities of the language models, and connect to external tools to use specific instructions and knowledge to respond to user queries.
>
> **[0:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=13)** And we can call three type of tools with the Assistants.
>
> **[0:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=16)** First, Code Interpreter to execute code and also access files.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=21)** And you have next, Retrieval, which is also used to access files, specific data, and instructions to fine tune the behavior of the Assistants.
>
> **[0:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=30)** Then you have Function calling that we used in a previous example, in order to fetch external and current data.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=37)** And it says also that in the future, OpenAI will provide with more tools, more built-in tools.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=43)** It is important to note that at the time of recording, the Assistants API is in beta.
>
> **[0:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=49)** So that is always a good practice to check the documentation for updates and changes in the API.
>
> **[0:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=56)** So let's find out how Assistants work now, we're going to see an example.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=60)** So we have different objects, so now we can look at one example of an Assistants for a personal finance bots.
>
> **[1:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=67)** So with the Assistants you can call the OpenAI models with specific instructions to tune, fine tune their personality and capabilities.
>
> **[1:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=76)** And for this example, we create a Thread to start a conversation session between the user and the Assistants.
>
> **[1:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=83)** And the topic of this conversation session is retirement planning.
>
> **[1:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=89)** And we start the conversation with a message from the user asking, "How much should I contribute to my retirement plan?"
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=97)** Then we can run here, on the right, we can run the Assistants with all the messages stored in the conversation session.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=104)** Finally, the last step will be to retrieve and display all the messages.
>
> **[1:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=108)** And you can see that as soon as you run the Assistants, then the Assistants will have the capacity, the ability to call the external tool, like Code Interpreter, in this example.
>
> **[2:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=122)** So the first step for our next example will be to create an Assistants with multiple parameters.
>
> **[2:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=127)** So first we're going to specify the language models and also specify the tools.
>
> **[2:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=132)** And we're going to also provide with details, with the parameters, with instructions, the tools that we want to call that we want to connect the Assistants to, so that's going to be Code Interpreter or Retrieval.
>
> **[2:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=146)** And also you can specify the file ID if you want to allow access to specific files within your Assistants.
>
> **[2:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=154)** And the purpose of the Assistants that we built in our next example, is to connect to tools and use specific instructions like frequently asked questions about a fictitious this company called ABC Shoe Company.
>
> **[2:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=167)** So I'm going to show you our next example, let's go to the projects.
>
> **[2:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=171)** You're going to find inside a folder files, this frequently asked questions.
>
> **[2:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=178)** And inside you're find all sorts of informations about first, the return policy, the international shipping costs.
>
> **[3:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=187)** So we're going to allow the Assistants to access this specific information in order to allow the Assistants to respond to user queries about this fictitious company, ABC Shoe Company, alright?
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=198)** That's going to be a super AI agents, capable of informing your customers about frequently asked questions about your services and your company.
>
> **[3:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=208)** And so the first step will be to create an Assistants.
>
> **[3:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=211)** Let's go back to the documentations to find out how.
>
> **[3:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=213)** Here we're going to copy this code example and make sure that you select node.js for the library.
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=219)** We're going to copy this, let's go back, and here, so this is where you're going to call to create your Assistants.
>
> **[3:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=227)** So let's go back up here at this level, we're going to paste this and only replace with our own information.
>
> **[3:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=234)** So the name of the Assistants, you'll see that at the top, I am providing with specific instructions about our assistant bots so the name will be Customer Support Assistant, so I'm going to replace this with our name.
>
> **[4:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=249)** I'm providing also with Assistants default instructions, "You are a professional assistant."
>
> **[4:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=254)** So we could be more specific if you'd like to say that you are capable of responding to specific questions about ABC Shoe Company, for example.
>
> **[4:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=263)** And for the language model, we're going to replace with this here to specify this language model and then for the type of tool, I'm going to specify retrieval, alright?
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=275)** So once this is done, so I'm going to wrap all of it within a function and also remember to return the Assistants
>
> **[4:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=287)** because that's going to be the purpose here, we're going to create then return an assistant object.
>
> **[4:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=295)** Alright, once this is done, let's go back here inside our main function.
>
> **[5:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=300)** And this is where you're going to call the functions to create a new Assistant like this, createAssistant() alright and also what we would like is to create an Assistant with information of the file ID.
>
> **[5:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=312)** So if we go back to the documentation, you see that we can also provide with this file.id and that is something that we're going to do next, which is to allow to upload a file to the Assistant.
>
> **[5:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=323)** We're going to see how to do that with the file upload endpoints.
>
> **[5:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-an-assistant?u=76281980&t=327)** I'm going to show you that next, in order to allow the Assistants to access specific instructions about your company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), data (2), api (2), [[Fetch]] (1), ai (1)
> **CLI Commands:** find (5), make (1), node (1)
> **Env Vars:** abc (3), api (2)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)
> **Best Practices:** good practice (1), remember to (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** createassistant (1)

#### Upload files using the Files API
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=0)** - [Instructor] We want to connect our assistant to the tool retrieval and allow the assistants to access files and access specific instructions in order to fine-tune the behavior of the assistants.
>
> **[0:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=11)** So for that, we're going to use one endpoint, which is the file, upload endpoint, which is provided by the file API.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=20)** We're going to see how it works.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=21)** So basically, here we're going to be able to here create an access here with the file, open AI files, create, create a file, and the purpose is to create a file ID.
>
> **[0:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=32)** This is what we're going to use, and also, we're going to create a string by specifying a file path.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=37)** So we just need to copy all of this parts and add it.
>
> **[0:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=46)** So that's going to be from line six to 13, like this.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=50)** Okay, so I may have taken too much, but we're just going to use here.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=53)** So let's go back to our project.
>
> **[0:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=55)** And line 14, you're going to here paste, just this.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=60)** Actually, I'm going to name it differently, it's going to be console.
>
> **[1:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=64)** Upload file, like this.
>
> **[1:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=69)** All right, and for the file path, we're going to specify here path as a parameter and pass here file path.
>
> **[1:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=78)** And for the purpose, we're going to specify assistants.
>
> **[1:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=82)** If we go back to the documentation, you're going to see that files is used to upload documents that can be used with features like assistants and fine tuning.
>
> **[1:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=94)** So this is exactly what we're looking at.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=97)** And for assistants, it takes an S.
>
> **[1:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=99)** So I'm going to specify this like this, and what we're going to do is we're going to use a shortcut and just do return like this.
>
> **[1:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=106)** I'm going to do the same for assistants and allow it to return the object like this, instead of we're going to save on one line of code.
>
> **[1:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=116)** All right, so I've got upload file.
>
> **[1:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=118)** Let's go back here at the bottom and call this first.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=124)** So that's going to be cons file, upload file, and we're going to specify the path to the files that we want to use and access.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=133)** That's going to be inside the directory files.
>
> **[2:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=138)** And inside we're going to find faq_abc, and that's going to be a text file like this.
>
> **[2:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=145)** All right, and once you upload the file and return the file object, we're going to pass this file information, file ID.
>
> **[2:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=154)** And then when we create the assistants, we're going to use file ID and pass the information here to this parameter in order to provide the information of the files that can be accessed with the tools retrieval.
>
> **[2:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=167)** All right, and for the next demonstration, what we're going to do is to console log the file.
>
> **[2:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=172)** So actually, just for this particular test, I'm going to then allow to return file like this because I'd like to console log just to make a first demo.
>
> **[3:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=183)** So that's going to be first file.
>
> **[3:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=186)** I'm going to return the file and also the file ID, so you can actually see how this is working.
>
> **[3:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=192)** So once this is uploaded, so I don't need to provide here extra details.
>
> **[3:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=197)** All right, so we're going to try that.
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=198)** We're going to run the assistants.
>
> **[3:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=203)** And it looks like we are missing, oh, the open AI API key variable.
>
> **[3:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=207)** So let's just make sure that this is provided here.
>
> **[3:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=209)** So I may have missed it. Let me add it quickly.
>
> **[3:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=212)** So that is something that you should always remember to add.
>
> **[3:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=216)** I'm going to use it from a previous example.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=218)** Let me replace this and add it here.
>
> **[3:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=222)** And normally we also load it with .M, so that should be good to go.
>
> **[3:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=226)** Okay, perfect.
>
> **[3:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=228)** We are close.
>
> **[3:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=229)** Let me just update, because this is normally asynchronous function, we're running it asynchronously.
>
> **[3:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=236)** So I'm going to go back and make sure that we use a weight.
>
> **[4:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=244)** I think it wasn't specified, actually, it wasn't specified in the documentation, so that's probably lacking.
>
> **[4:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=251)** Oh, that's actually my mistake.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=252)** So remember to always add a weight.
>
> **[4:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=255)** All right, let's go back.
>
> **[4:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=257)** So here you can see that once we have uploaded the file, so we can see that the upload is successful.
>
> **[4:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=263)** We have all the details and information about the file, the file ID that we used to create the assistants with.
>
> **[4:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=271)** So we're going to create an assistants with this specific file.
>
> **[4:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=274)** And from now on, we're going to allow the assistants to call the language models and also the tools retrieval, and access specific instructions stored in this specific file, right here.
>
> **[4:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/upload-files-using-the-files-api?u=76281980&t=288)** And what we're going to do next is to create our thread to start the conversation session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (2), ai (2), next (2), [[Fine Tuning]] (1)
> **CLI Commands:** make (3), find (1)
> **Best Practices:** remember to (2), you should always (1)
> **Env Vars:** api (2)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)
> **Code Identifiers:** faq_abc (1)
> **Speakers:** - [instructor] (1)

#### Create a conversation session
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=0)** - [Instructor] So far, so what we've done is to upload a file to OpenAI and also create an assistant that can access the information of this file and then access specific information about a fictitious company, ABC Shoe Company.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=15)** So what we want to do next is to create a thread, meaning a conversation session between the user and the assistant.
>
> **[0:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=22)** So here we have this example, which is an assistant with the purpose of providing specific information about finance.
>
> **[0:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=30)** And recreate the thread here that comprises the messages of the user and the assistant before we run the assistant.
>
> **[0:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=38)** And in order to do that, we're going to find more instructions under these sections, Managing Threads and Messages.
>
> **[0:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=46)** And basically threads and messages represents a conversations between the assistant and the user.
>
> **[0:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=51)** And you can always create a thread with an initial list of messages like this, but we're going to do it much simpler.
>
> **[0:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=59)** Let's go back and find here step two.
>
> **[1:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=62)** So what we're going to do is to create a new thread and we don't need to specify the assistant ID actually to create the thread.
>
> **[1:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=74)** And we're going to return, it needs to be await.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=79)** So it's not going to be assistants, but it's going to be threads for this part.
>
> **[1:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=87)** So we want to create the thread first before we can actually add messages to the thread.
>
> **[1:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=90)** So let's go back to the main function and create the thread right here, so inside the main function.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=97)** So that's going to be very simple.
>
> **[1:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=99)** So we need to return the thread object like this because we're going to need in the next step to access also the thread ID, the ID of this thread.
>
> **[1:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=108)** The next step will be to then add messages to the thread.
>
> **[1:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=113)** So when you provide with an input, it's going to be added as a new message to the thread.
>
> **[2:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=122)** And we go back to the documentation.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=124)** So I'm going to show you actually how to create a new message and add the message to the thread by using the API reference that you can select here from the top, API reference.
>
> **[2:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=136)** And here, so in the API reference, we're going to find here more instructions about how to create and add a message to the thread.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=144)** So we're going to use the exact same example.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=147)** So if we look at it more in details, you're going to see that we create a message that we add to the thread, we specify the ID of the thread, and we also add the message object from the user.
>
> **[2:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=159)** So let's take all of this.
>
> **[2:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=161)** So that's going to be from line five to 12, like this.
>
> **[2:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=167)** And use this example.
>
> **[2:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=169)** Let's go back to our source code, to our project.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=174)** And let's go back up here.
>
> **[2:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=178)** I'm going to create a new function that I'm going to name addMessageToThread.
>
> **[3:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=181)** So that's a good name.
>
> **[3:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=183)** And here, so I'm just going to remove this line like this, and the extra curly brace right here.
>
> **[3:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=193)** And for the thread ID I'm going to replace.
>
> **[3:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=195)** So you see that we need the thread ID.
>
> **[3:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=197)** And for the message, I'm going to replace to user_input, and I'm going to replace here this static content with user_input.
>
> **[3:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=208)** All right, so we are almost all set.
>
> **[3:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=210)** And what I'm going to do is to call this new function, which is step three, which is to add a message to the thread.
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=219)** I'm going to do that right here.
>
> **[3:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=220)** So I'm going to replace this and call, and actually I'm going to check first if we actually have a user message and call await message thread, message to the thread.
>
> **[3:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=233)** So we pass the information of the thread ID along with the user message.
>
> **[3:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=237)** And normally we should be able to display to console log out the thread messages.
>
> **[4:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=242)** So let's try that.
>
> **[4:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=242)** I'm going to make a quick test now.
>
> **[4:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=245)** Now let's make a test.
>
> **[4:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=246)** I'm going to open the terminal and run the assistant.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=252)** Okay, so that's going to print the information of the file uploaded.
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=256)** So this is so we can access the specific information of this FAQ, ABC text file.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=264)** So let's ask one question, a specific questions about the shipping costs for this company.
>
> **[4:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=271)** So what are the shipping costs for the UK, for example?
>
> **[4:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=276)** So the response that we're going to get back will be just an object because we need to access more keys inside this object.
>
> **[4:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=285)** So we're going to see that next.
>
> **[4:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=286)** So what we want to check for now is that we were able to create a thread and also add a message from the user to the thread to the conversation session.
>
> **[4:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/create-a-conversation-session?u=76281980&t=295)** The next step will be to see how to run the thread to then display the list of messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), api (3)
> **Env Vars:** api (3), abc (2), faq (1)
> **CLI Commands:** find (3), make (2)
> **Cross-References:** go back to (3), in the next (1)
> **Documentation:** api reference (3), the documentation (1)
> **Code Identifiers:** user_input (2), addmessagetothread (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)

#### Run the conversation
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=0)** - [Instructor] After creating the thread and add a message to the thread, let's run the steps.
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=6)** We're going to run the thread of the conversation session, and that's going to be right here.
>
> **[0:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=11)** So we're going to create a new run before we actually run it.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=15)** So that's how we're going to proceed.
>
> **[0:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=17)** We're going to need to provide with the information of the thread and also the assistants.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=21)** So before that, I just want to go back quickly to where we had left off, because what we've done so far is to create a thread and also add a message to the thread.
>
> **[0:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=32)** And I wanted to show you how the message looks like right here so far, so what we've done is just to print the thread message objects.
>
> **[0:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=41)** So that's not enough for the demonstration.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=43)** So I'm going to show you how to actually display the message clearly, meaning the text from the user.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=50)** And we're going to be able to see more in details how it works by looking here, I think it's messages, and it should be here.
>
> **[0:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=58)** And it's going to be messages, messages.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=60)** We're going to see how to create a message and then list the message right here.
>
> **[1:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=65)** So you see this example is to show you how to add a message to the thread.
>
> **[1:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=69)** And then, you're going to see the details.
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=71)** You see that we've got this thread message object.
>
> **[1:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=74)** You can access the content, then the text, and then the value.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=79)** So this is what we want to do.
>
> **[1:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=81)** Let's go back and make sure that we access first the content, then the text, and finally the value.
>
> **[1:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=93)** Let's make a quick test so I'm going to run npm-start.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=97)** All right so we're going to ask questions like, what is the return policy, something simple.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=104)** Oh, and looks like this is not accepting values.
>
> **[1:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=107)** So I'm just going to check if we are correct here.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=111)** So I'm just going to go back one step before, let's ask again the same question, what is the return policy?
>
> **[2:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=120)** Okay and now we can see the response back that we got back from the assistant.
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=128)** And looks like I had missed one step, which is that this is actually an array.
>
> **[2:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=132)** So what I should do is right after content is access the first object and after that, let me go back so that's an array, then we have the text, and finally the value.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=143)** Okay, so let me fix that.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=147)** And we're going to make another test later.
>
> **[2:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=148)** And for now, we're just going to move on to actually run the assistants.
>
> **[2:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=153)** Let's go back to the documentations to find out how to proceed with step four, which is to run the assistants with all the messages.
>
> **[2:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=161)** And we're going to go back to the documentation and find this step right here under How Assistants Work.
>
> **[2:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=171)** Managing the thread and finally, Run the Assistants.
>
> **[2:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=175)** Here we go and, for that, you need the thread ID information and also, the assistants ID information so let's copy this.
>
> **[3:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=185)** Let's go back to the project and create a function that I'm going to name, runThread or runAssistants, either one is fine.
>
> **[3:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=194)** And we're going to add this, and we're going to make sure that we provide with the thread ID information.
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=199)** So right here, and also the Assistant ID... Like this.
>
> **[3:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=207)** And finally, we're going to return the run.
>
> **[3:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=210)** And I'm going to actually return it like this and also allow to display the information of the run.
>
> **[3:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=216)** And I'm going to explain why we would do that.
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=219)** That's because the next step will be to actually check the run status for this run.
>
> **[3:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=225)** And I'm going to display, this is the run objects.
>
> **[3:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=230)** All right, and then display run.
>
> **[3:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=233)** And let's go back inside the main function and then go inside here, step four.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=241)** So what we do is to... I'm going to return the run object and then run this function and pass the information of the thread ID and also the assistants ID.
>
> **[4:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=253)** So that's why we needed this information, both the information of the assistant and the thread in order to run this thread.
>
> **[4:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=261)** And so, the next step will be to then check the status of this run so we're going to do that right here, step five in the next demonstration.
>
> **[4:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=270)** We're going to need to proceed with this step before we can actually retrieve the messages.
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=275)** So all the messages of the conversation session.
>
> **[4:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/run-the-conversation?u=76281980&t=277)** So let's find out how to check the run status.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[npm]] (1)
> **CLI Commands:** make (4), find (3), npm (1)
> **Cross-References:** go back to (3), in the next (1)
> **Code Identifiers:** runthread (1), runassistants (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (typing) (1)

#### Check Run lifecycle and status
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=0)** - [Instructor] In a previous step, we created the assistance to run the assistance.
>
> **[0:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=4)** So that was step four.
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=6)** And in this video we're going to learn to check the status of the run.
>
> **[0:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=8)** So that's going to be step five.
>
> **[0:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=10)** So let's go back to the documentation and find out about the run lifecycle.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=15)** So the run objects can have multiple statuses.
>
> **[0:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=18)** So once you add a message to the thread and when you run the assistance, the run status is going to move to the status queued, before moving on to the next status, which will be either in progress, canceling, or requires action if the assistance is connected to one tool like retrieval or code interpreter.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=37)** And so the next step, the next status after in progress will be either failed or completed.
>
> **[0:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=42)** And that's going to be the status that we're going to keep looking for.
>
> **[0:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=45)** Below, you're going to get a description for every status.
>
> **[0:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=48)** And once the run successfully completes, you can now retrieve and display all the messages of the assistance thread.
>
> **[0:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=55)** So let's go to the API reference to find out how to proceed.
>
> **[0:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=58)** So we're going to find the section for the assistance and more specifically for the runs.
>
> **[1:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=64)** And here you have the list of all the endpoints that we can use for the assistance in order to handle, manage the runs.
>
> **[1:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=72)** And we're going to go below further down until we find this one, which is under this one.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=79)** So that's going to be Retrieve run, this one.
>
> **[1:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=82)** And we're going to compute from line five to 12, and go back to our projects.
>
> **[1:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=88)** And we're going to go to the top and find the step, which is to check the run status right here.
>
> **[1:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=93)** So we're going to make a few changes.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=95)** That's going to be an error function, that's going to be a CheckRunStatus.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=104)** This one will have two parameters, so that's going to be thread and then run.
>
> **[1:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=109)** And so here we can replace with the thread.id.
>
> **[1:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=115)** And we also need the information of the run objects and the run id.
>
> **[2:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=121)** What we're going to do is to console log the information of the status.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=124)** We're going to do that from the top because right here, so line 70, I'm going to return the run objects.
>
> **[2:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=132)** All right, and this needs to be, an asynchronous function, so I'm just going to add this async keyword.
>
> **[2:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=138)** Okay, so that's done.
>
> **[2:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=140)** Let's go back to the main function.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=143)** This is where we're going to keep checking for the run status.
>
> **[2:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=146)** And because we need to keep checking for the run status, we're going to insert this in a while loop, inside a while loop and check if the run status is actually not completed.
>
> **[2:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=156)** So until this is not completed, we're going to keep checking for the status.
>
> **[2:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=160)** So I'm going to run the function that we have just created, pass the information of the thread and the run object that we have defined up here.
>
> **[2:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=169)** And then if this is not yet completed, we're going to keep checking for the status and actually by running again this function The same, and pass the information of the thread and the run.
>
> **[3:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=186)** All right, and you see that I'm using the let keyword, that's because I'm going to update the run status again, and check again the status.
>
> **[3:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=195)** This time I'm going to check if this is failed or expired, here, so that's going to be another status that we're going to check.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=204)** If this is either one, we just want to log out the information that the chat is terminated, all right?
>
> **[3:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=210)** And then break or maybe do something like process exit.
>
> **[3:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=214)** So we're going to exit the conversation.
>
> **[3:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=217)** All right, so let's try that.
>
> **[3:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=221)** And let's just make sure that we don't leave any typo.
>
> **[3:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=224)** Line 120.
>
> **[3:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=225)** So we just need one time await, and we're going to make one quick demo.
>
> **[3:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=232)** All right, so we're going to make a quick demo with that.
>
> **[3:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=237)** And we're going to go with the usual question about what is the return policy to then run the assistance, wait for the assistance to run.
>
> **[4:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=247)** We're going to check the run status.
>
> **[4:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=249)** And you know, there may be some waiting time with the GPT3 model, that happens.
>
> **[4:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=254)** So you just need to try again.
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=256)** What is the return policy?
>
> **[4:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=258)** Hopefully you're going to get a response quickly.
>
> **[4:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=261)** Going to get a response back.
>
> **[4:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=263)** Okay.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=264)** And here we can see that we have the run status that entered the queued status.
>
> **[4:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=268)** Then it goes into progress.
>
> **[4:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=270)** And so we keep checking, until it becomes completed.
>
> **[4:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=274)** So we don't see it here, but we know that it works.
>
> **[4:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=276)** And that's going to be actually the next step.
>
> **[4:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/check-run-lifecycle-and-status?u=76281980&t=278)** So as soon as you break out of the loop, because now this is completed, we're going to be able to go to the next step, which is to retrieve and display the messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), api (1)
> **CLI Commands:** find (5), make (4)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (3)
> **Env Vars:** api (1), gpt3 (1)
> **Documentation:** the documentation (1), api reference (1)
> **Speakers:** - [instructor] (1)

#### Retrieve and display messages
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=0)** - [Presenter] So far, we have successfully created an assistant, then created a thread, which is step two to include all the messages from the user and the assistant.
>
> **[0:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=8)** Then we add a message to the thread.
>
> **[0:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=11)** Next, rerun the assistance, step four, and we check the status of the run until it is completed.
>
> **[0:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=19)** After the step, when the status is completed, we are ready to retrieve and display the messages, which will be the last step, step six of this demonstration about the assistance API.
>
> **[0:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=31)** So let's go back to the API reference, and we're going to find this sections under messages to find this sections list messages.
>
> **[0:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=41)** So we're going to use these endpoints to retrieve the list of messages.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=47)** Let's go back to our project.
>
> **[0:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=48)** What we're going to do is to create a new function that we're going to call, yes, retrieve messages.
>
> **[0:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=54)** And we need to use the information of the run and also the threat to be able to retrieve all the lists, the complete list of messages.
>
> **[1:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=65)** So before doing that, I'm going to make a quick check, which is to check if the run status is completed.
>
> **[1:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=76)** I'm going to do that first, and then I'm going to accept this proposition from copilot, which is to retrieve the messages with this endpoint, which is open AI beta, threads, messages, lists.
>
> **[1:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=91)** And then we pass the information of the thread ID to retrieve the complete list of messages.
>
> **[1:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=99)** And so what we're going to do, let's go back to the documentation format.
>
> **[1:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=104)** We're going to see an example of a response once we retrieve the complete list of messages.
>
> **[1:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=110)** So that's going to be here.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=111)** So that's going to be here a messages object.
>
> **[1:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=113)** So this one, thread messages.
>
> **[1:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=116)** Inside, we have access to this key data, which is an array, and we have one object inside with another array, which is content.
>
> **[2:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=126)** Finally, we can access this text object and the value, and this is going to correspond to the answer to the response from the assistant API.
>
> **[2:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=137)** So let's do the same.
>
> **[2:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=138)** We're going to go step-by-step and access the nested information inside this response.
>
> **[2:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=145)** So, we're going to console log the response from the assistant.
>
> **[2:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=150)** I'm going to first append this assistant here, hardcoded, and that's going to be messages, then data.
>
> **[2:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=158)** Then we access the first object in the array data, same for the content array.
>
> **[2:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=166)** And finally, we access the text and the value.
>
> **[2:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=168)** So we're going to try that.
>
> **[2:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=170)** I'm going to go back to here to find step six.
>
> **[2:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=178)** And we're going to do a wait retrieve messages.
>
> **[3:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=182)** We pass, run and thread, and we're going to try this.
>
> **[3:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=186)** We're going to run the project again and add a new message to the thread, which will be, for example, what are the opening hours of the store?
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=198)** All right.
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=198)** So we're going to add this new message to the thread.
>
> **[3:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=200)** Then we're going to run the assistance and check the status of the run until it is completed.
>
> **[3:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=207)** Then we can retrieve and display the messages from the thread.
>
> **[3:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=212)** Here we go.
>
> **[3:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=213)** So now we can see the response from the assistance, which is the physical stores of ABC shoe company are open from 9:00 AM to 8:00 PM, Monday to Saturday.
>
> **[3:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=224)** And if we check the information that we have provided to the assistance API, we can see that this is the exact same information which is provided here like this.
>
> **[3:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=232)** So, it matches.
>
> **[3:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=233)** So this is working perfectly.
>
> **[3:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=236)** So let's go back again to check out the documentation.
>
> **[3:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=239)** So we can check again here, the run lifecycle.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=241)** So the run enters AQ, then we check the status of the run until it is completed.
>
> **[4:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=247)** Then we are able to retrieve and display the messages.
>
> **[4:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=251)** Let's make another demo, so without all this information, so I'd like to just display the entire messages, so all the messages of the thread.
>
> **[4:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=261)** So I'm just going to go back up to when we check the run status, which will be here.
>
> **[4:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=267)** So I'm just going to remove this actually just commanding out just this line, which is line 65.
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=275)** I'm going to come at in, out and just allow to display the messages of the thread.
>
> **[4:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=281)** So let's try another example here.
>
> **[4:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=284)** So I'm going to ask this time, what are the costs for shipping?
>
> **[4:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=289)** And I'm going to say for international shipping.
>
> **[4:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=293)** So that's something like $15, just like we have informed indicated in our custom knowledge.
>
> **[5:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=301)** And here as well. So here as well, you can also remove this information.
>
> **[5:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=306)** Alright, so now, we can read the response from the assistance, which is that the cost for international shipping at ABC shoes starts from $15.
>
> **[5:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=313)** And I think that this is coming from, so here we have this console log.
>
> **[5:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=318)** I'm just going to retrieve this and remove this for you for the final projects.
>
> **[5:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=322)** Alright, so something to keep in mind.
>
> **[5:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=325)** So we're just going to go back to the documentation.
>
> **[5:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=329)** So you have to remember that the assistance API is in beta at the time that you watch this recording.
>
> **[5:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=334)** So at the time that I record this online training for you.
>
> **[5:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=337)** So this is important for you to keep an eye on updates and changes to the assistance API, and also to look at the list of models which are available with the assistance API.
>
> **[5:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=352)** So you're going to be able to see the list that are available in order to use to have the best experience with this API.
>
> **[5:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=359)** And also, I'm just going to go back to my project because I've been using two language models actually for this demonstration.
>
> **[6:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=367)** So I'm going to show you which one, here it is.
>
> **[6:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=374)** So here, you have two choices, which is to use this one, which is provided with the demonstration that everyone can access.
>
> **[6:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=381)** So you may experience low responses from the language models, and I needed to switch sometimes to this one, which is quicker, more performance.
>
> **[6:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=391)** And this one is paper use.
>
> **[6:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=393)** You need to update your permanent information to be able to use this one.
>
> **[6:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=397)** So for example, my API key is going to allow me to use this language model.
>
> **[6:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=401)** If you don't have a paper use account, if you don't provide with a payment information, you won't be able to access this language model, which is much more performance.
>
> **[6:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=411)** So remember to keep an eye on changes and update for the assistance API, which is for now in beta at the time that I record this online training for you.
>
> **[7:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=421)** And in order to update your information.
>
> **[7:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=424)** So right here, so this is my current usage for this month.
>
> **[7:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=430)** You can go here and go to your settings and actually no, that's going to be here from the API queues.
>
> **[7:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=438)** That's going to be better.
>
> **[7:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=439)** So from here, you can then create a new secret key, go to your usage page and go to increase your limits.
>
> **[7:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=449)** And so you're going to be able to see the different rates, and from here, provide your permanent information and also specify your budget.
>
> **[7:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=458)** So that's going to be in your account that you're going to need to get your billing information and then add to your credit balance if needed.
>
> **[7:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/retrieve-and-display-messages?u=76281980&t=465)** So I hope that you liked and that you enjoyed this demonstration about the assistance API, which is an excellent tool in order to connect with the language models and also connect to the open AI hosted tools like function calling, code interpreter, and retrieval that we used in this demonstration in order to create a super powerful AI agents capable of responding to your users and provide the best user experience to your users and customers based on custom data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (12), data (4), ai (3), next (1), [[Microsoft Copilot|Copilot]] (1)
> **Env Vars:** api (12), abc (2)
> **CLI Commands:** find (3), make (2)
> **Cross-References:** go back to (5)
> **Documentation:** the documentation (3), api reference (1)
> **Analogies:** for example (2), just like (1)
> **Ports:** :00 (2)
> **UI Navigation:** go to (2)


### 5. Build an AI-powered Virtual Assistant (Assistants API)

[↑ Back to Table of Contents](#table-of-contents)

#### Starter project and set up
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=0)** - [Instructor] We now have our Assistants ready.
>
> **[0:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=2)** And for the next example, we're going to use the same demonstration that we built together before by using the Assistants API.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=9)** But this time we're going to use this example with a backend API.
>
> **[0:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=13)** So we're going to convert it.
>
> **[0:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=14)** So it's already done. I'm going to show you.
>
> **[0:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=16)** I'm going to walk you through the start of projects.
>
> **[0:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=18)** And what we're using here is Express, which is a Node.js framework that we use to build RESTful APIs.
>
> **[0:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=25)** And we also use Chorus, and this is to allow API calls between different servers.
>
> **[0:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=30)** So let me show you a little bit how it is set up.
>
> **[0:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=33)** So if we go down, you're going to see that this is the exact same setup.
>
> **[0:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=37)** First, we create an assistant.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=39)** Second step, we create a thread to include all the messages between the user and the assistant.
>
> **[0:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=46)** Next, we add a message to the thread.
>
> **[0:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=48)** And let's go further down.
>
> **[0:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=50)** We're going to see that now we have two end points.
>
> **[0:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=54)** So the first one is to set up the Assistants by creating an assistant and also create a thread.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=60)** And next you have a post request, which is to send a message and allow to add a message to the thread, then run the Assistants, and go through the usual, which is to run the lifecycle of the run until the run status is completed.
>
> **[1:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=76)** And then we can retrieve the messages and finally return the list of messages as a response after sending the request.
>
> **[1:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=85)** So we have those two endpoints, and when we start the server, it is running on the port 4000.
>
> **[1:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=92)** So this is how this is set up right here.
>
> **[1:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=94)** So in this video, I'm going to walk you through the starter project.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=97)** So the first one, the RESTful API that we built with Node and Express.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=102)** And also we built a front end application built with the React CLI.
>
> **[1:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=107)** So the best part is coming with the creation of a user interface built with React.
>
> **[1:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=112)** So first what we're going to do is to install all the packages, and you'll see that I am also providing you with a few instructions right here.
>
> **[2:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=122)** Because what we're going to do is also to use one application Postman in order to test the endpoints.
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=128)** So I'm going to show you that as well to see how this backend API works.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=133)** But for now, let's install all the dependencies.
>
> **[2:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=137)** And while this is being installed, I'm going to show you the package JSON, where you can see that now we have a few more dependencies, including express, cors, and also node-fetch in order to make API calls from the backend API.
>
> **[2:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=151)** All right, so once this is done, we can then start this API by running npm start.
>
> **[2:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=161)** All right.
>
> **[2:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=162)** And next, what we're going to do is to run a few example to test our API endpoints.
>
> **[2:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=169)** So starting with this one.
>
> **[2:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=170)** So just to create the assistants and the thread, let me show you again.
>
> **[2:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=176)** So basically, what it's going to do is to create first an assistant, then a thread, then we return the details of this new thread.
>
> **[3:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=184)** Let's start that.
>
> **[3:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=185)** So this is a get request.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=189)** All right, so this is done.
>
> **[3:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=190)** We've got our thread, which is created.
>
> **[3:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=192)** Once this is done, we can then test another post request right here, which is to send a message.
>
> **[3:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=199)** So let's run this request with a question.
>
> **[3:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=204)** All right, so we send this request along with thumb data, along with a user message.
>
> **[3:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=209)** Let's try that.
>
> **[3:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=211)** And it's going to do the usual, which is to check the run status until it is completed.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=218)** And then we can read the message from the assistant.
>
> **[3:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=221)** Excellent.
>
> **[3:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=223)** So again, you can look at the instructions on the README files in order to get started, to go through the setup, and then get started.
>
> **[3:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=230)** And let's go check out now the React application, which is already up and running.
>
> **[3:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=235)** And this one is running on the local host 3000.
>
> **[4:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=240)** And so we're going to see how it looks.
>
> **[4:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=241)** Here we go.
>
> **[4:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=242)** So now you can see that we have a few dummy messages just to show you how it looks with a few messages.
>
> **[4:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=248)** But basically, what we're going to do is to first create a thread, which is going to appear right here.
>
> **[4:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=254)** And then we're going to be able to send a message right here.
>
> **[4:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=257)** So you're going to make an input like, again, so we're going to ask what are the costs for shipping, for example.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=264)** Then do enter.
>
> **[4:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=266)** But for now, it's not connected to any backend API.
>
> **[4:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=269)** So that's going to be the next step.
>
> **[4:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/starter-project-and-set-up?u=76281980&t=271)** So up next, we get down to the nitty gritty, and we start by connecting the chat applications to the backend API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (11), next (6), express (3), application (3), [[React.js|React]] (3)
> **Env Vars:** api (11), cli (1), json (1), readme (1)
> **Prerequisites:** set up (3), setup (2), install (2)
> **CLI Commands:** node (3), make (2), npm (1)
> **Definitions:** is a  (2)
> **File Paths:** node.js (1)
> **Ports:** port 4000 (1)
> **Documentation:** the readme (1)

#### Making API requests
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=0)** - [Instructor] Now we are going to spend more time working on the front end application, built with React.
>
> **[0:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=5)** And you see that we have some demi-data right here, which is a fake conversation between the user and the AI assistant.
>
> **[0:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=12)** Let's go further down inside the main component for this app.
>
> **[0:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=18)** So this is the root component app.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=20)** Inside you see that we have a few local state variables already set up to include the list of messages, also to set up a thread.
>
> **[0:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=29)** So this is the first step to create a thread, which is the start of the conversation session.
>
> **[0:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=35)** And we also keep track of the user message.
>
> **[0:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=38)** And so we have also a few refs.
>
> **[0:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=40)** So we use ref to access a node in the dom.
>
> **[0:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=45)** So we use the virtual dom with React, but you also have the options to access one node directly.
>
> **[0:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=53)** So basically what we do is a scrolling animation whenever a new message is added to the thread.
>
> **[1:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=60)** So here you have the scroll to bottom function, which is triggered every time that a new message is added to the thread handle and change to keep track of the user typing and handle and submit.
>
> **[1:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=72)** And you see that we merge the list of existing messages and we add the new message.
>
> **[1:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=76)** All right, so that's going to be the first part.
>
> **[1:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=78)** So what we're going to do is we're going to send a new request.
>
> **[1:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=82)** So that's going to be like the first request that we do when we start the app.
>
> **[1:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=86)** So right below this use effect, so the use effect is a hook that we use to apply side effects whenever there is a change in the application state.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=95)** And what we want to do is to use fetch, which is the built-in JavaScript method to make API requests, and we want to make, oh, that's going to be actually the port 4,000, okay?
>
> **[1:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=107)** So we run the backend API on the port 4,000, and that's going to be just these endpoints.
>
> **[1:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=115)** Remember that this is going to be a get request and we simply need to, here I'm going to make it shorter, because whatever is returned is going to include the thread object's information.
>
> **[2:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=129)** So the app is already up and running.
>
> **[2:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=131)** So we're going to try this.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=133)** Let me first open the terminal because we're going to keep track of every API call running by going to the top network.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=143)** You can do comment R, hit control R, if you are on Windows, we're going to see what's happening.
>
> **[2:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=150)** So this is as soon as the start of the app that you're going to get this request.
>
> **[2:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=156)** So perfect, so this is status okay, so we know that this is working, and the response is this object.
>
> **[2:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=163)** So now what we want, I'm going to show you another tab right here, which is the React's components extension that you can use on any browser.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=174)** And that's going to allow to access information details about the state variables and also the props.
>
> **[3:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=181)** And what we want to do is to check out the information of the thread, which should be somewhere here, so let me check.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=189)** It's right here, number four, you can see that we've got the thread information.
>
> **[3:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=194)** And what we're going to do next is to then pass this information right here, thread.
>
> **[3:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=201)** And we know that as soon as you see this visible, that you are ready to start the conversation.
>
> **[3:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=208)** All right, so you can see it's appearing right here.
>
> **[3:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=210)** Perfect. So let's do another example.
>
> **[3:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/making-api-requests?u=76281980&t=212)** Now we want to make a request to send a message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), api (3), application (2), node (2), dom (2)
> **CLI Commands:** make (4), node (2)
> **Definitions:** is a  (4)
> **Env Vars:** api (3)
> **Ports:** port 4 (2)
> **Prerequisites:** set up (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)

#### Send a message
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=0)** - All right, so we're going to define another request, and this time, this is to send a message and interact with the AI assistant.
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=6)** And before that, before going any further, so I just want to remind you that you should always make sure that the server is up and running, so you should read this, that the server is running on localhost:4000, and the React application is already up and running, so we are good to go.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=24)** All right, and in the case that you run into any errors, so we're going to check this one out, so you should see, if we check out the console, that you should see an error like this, because you're trying to set here reading an ID object information on a priority which is null.
>
> **[0:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=40)** Let's go back. We're going to make just one small change.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=43)** You know that whenever you want to set here the thread ID, which is right here, what you should do is to use this operator, which is an operator provided by ES6, the modern JavaScript, that allows to check if an object is existing before accessing an information.
>
> **[1:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=62)** So in the case that thread is not existing, it's not going to try to access ID, but without the application crashing.
>
> **[1:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=68)** Okay, so this is back to normal, and now we can see that the thread ID is visible after receiving the response from the request that we have set up here.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=79)** So let's continue and send another request, and this time, this is to send a message, all right?
>
> **[1:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=84)** To interact with the AI assistant, and that's going to be right here.
>
> **[1:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=88)** So first, what we do is to add the message from the user, and I'm going to create a new function here.
>
> **[1:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=95)** I'm going to name it send message like this, and we're going to trigger this one.
>
> **[1:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=103)** I'm going to run it as soon as we hit the form submit button, and we're going to pass the user message.
>
> **[1:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=113)** So whatever is typed by the user, we're going to use that as an input, all right?
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=119)** And we're going to send another request, again, by using the fetch method.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=124)** It's going to be the same endpoints, localhost, okay?
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=128)** But this time, remember that we have different endpoints.
>
> **[2:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=131)** This time, we use this endpoint, which is send message, so let's make sure that we interact with the right endpoints, and after that, we're going to specify that this is a method POST and all the rest, the headers, and we also specify the body, because it's going to be sent with here the message information from the user.
>
> **[2:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=174)** And finally, we get the response back.
>
> **[2:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=176)** So that's going to be, again, merged with the existing list of messages, and we just need to pass response, because actually, if we go back to how we set up this here, send message, what we get back is this entire object with, we specify the sender, the content, if it's flagged, we're going to see that later when we're going to set up here the moderation API endpoints and the timestamp.
>
> **[3:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=200)** So if we go check this one app, if we go back, you're going to see that we've got the same format for the objects, so we simply need to here merge the response that we get back from the backend API with the list of messages, okay?
>
> **[3:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=217)** And I'm going to do a few extra setups, so we're going to take actually the previous messages from the previous states and allow to access the previous messages.
>
> **[3:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=228)** I'm going to put everything on one line, it's going to be cleaner, and then response like this, we're going to read like this, and I think we're good.
>
> **[3:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=234)** We're going to make a test right away.
>
> **[3:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=238)** All right, so let's try that.
>
> **[4:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=242)** Let's go back, and here, I'm going to open the terminal, the console of the browser.
>
> **[4:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=248)** We want to keep track of every request we send.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=252)** All right, so let's refresh and let's add a request, like, "What are the opening hours of the store?"
>
> **[4:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=263)** We're going to be able to see it running sent here.
>
> **[4:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=267)** Send message, you see it?
>
> **[4:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=270)** All right, and we're going to wait for the response, and something we can do is, of course, access the components extensions, just to check if anything is not working as usual.
>
> **[4:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=281)** You see that what we've tried to here append to the list of messages is JSON.
>
> **[4:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=286)** Let's go back to the source code, and we were a bit too fast.
>
> **[4:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=290)** We can see that the API worked just as expected.
>
> **[4:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=295)** That's great, but I just have a typo here on the frontend application, React, line 87, so make sure that you correct with JSON with the brackets, and so you can return the actual JSON object response and then append the response to the rest.
>
> **[5:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=311)** Let's try that again.
>
> **[5:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=313)** We're going to make the same tests, and also, I'm going to go back and also allow to do something, because remember that we're using input ref, and we're just going to allow to reset the text value whenever we submit the new message.
>
> **[5:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=329)** So what are the opening hours?
>
> **[5:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=332)** I'm just going to make sure that I open the console here, network here, just to keep track of the requests that we're going to send.
>
> **[5:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=342)** Okay, so we cleared the text area.
>
> **[5:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=346)** All right, so this is working perfect, so we got the response back from the assistants API, and now we can read the message from the customer support that the opening hours for ABC Shoes are from 9:00 AM to 8:00 PM, Monday to Saturday.
>
> **[6:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/send-a-message?u=76281980&t=360)** Excellent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (4), application (3), [[JSON]] (3), ai (2), [[React.js|React]] (2)
> **Env Vars:** api (4), json (3), es6 (1), post (1), abc (1)
> **CLI Commands:** make (7)
> **Ports:** :00 (2), :4000 (1)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** open the (2)
> **Definitions:** is an  (1), is a  (1)

#### Introduction the Moderation API
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=0)** - [Instructor] In today's world where content creation and sharing is as easy as one click, the need to keep the internet as a safe and respectful environment is critical.
>
> **[0:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=11)** For example, a chat bot application is not just about answering queries or performing tasks.
>
> **[0:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=18)** It's about creating a safe community and offering a pleasant experience to all users.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=24)** The OpenAI Moderation API is designed to help developers and content creators maintain a safer and a more respectful online environment by automatically identifying and flagging potentially harmful and inappropriate content.
>
> **[0:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=40)** And so the model classifies the following categories.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=43)** For example, hateful comments that target a group of people can be easily identified and flagged.
>
> **[0:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=49)** Other harmful content that expresses hate, threats, or violence can also fall under the same treatment in order to keep chats and discussions free from inappropriate and harmful content.
>
> **[1:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=62)** In this module, the goal is to add a moderation layer and filter out content that is not in compliance with the OpenAI's contents policy.
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=71)** So we're going to use the Moderation endpoint.
>
> **[1:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=76)** So we're going to use the example for the Node.js library.
>
> **[1:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=79)** So that's going to be this one, so let's go check out.
>
> **[1:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=81)** So we're going to go back to our project example, and we're going to use this example.
>
> **[1:25](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=85)** So let's just make sure that you select here for the node.js library.
>
> **[1:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=89)** So I'm going to take this line from line six to eight like this, and I'm going to go ahead and create a new function here.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=97)** So that's going to be, for example, async function moderateConversation.
>
> **[1:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=108)** And so that's going to be an endpoint.
>
> **[1:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=111)** So we're going to take the results from this request, which will be request, and then the response.
>
> **[1:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=119)** And then I'm going to paste those two lines to call to make an API request to this endpoint to create a moderation.
>
> **[2:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=126)** And for this example, we're going to use this message which is actually offensive and provocative.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=133)** We're going to use this example to see the results, the output from here, this language model.
>
> **[2:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=139)** So that's going to be classified under one category and flagged if necessary.
>
> **[2:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=143)** So it's going to return a moderation object, and we're going to find the result under here, this key, which is results.
>
> **[2:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=151)** And that returns an array.
>
> **[2:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=153)** We're going to take the first object and then check if it is flagged or not.
>
> **[2:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=156)** You can also check the category if it falls under any of these categories.
>
> **[2:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=162)** All right, so we're going to try that.
>
> **[2:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=164)** And because this is a new endpoint, we're going to go ahead and create below a new endpoint that we're going to be able to test right away.
>
> **[2:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=173)** And there's going to be also a post request.
>
> **[2:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=177)** And we're going to name it like this, moderate.
>
> **[2:59](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=179)** Actually that's going to be moderate.
>
> **[3:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=180)** So let's try it.
>
> **[3:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=183)** And so now we're going to test this new endpoint.
>
> **[3:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=186)** Again, we're going to use the application Postman.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=189)** We're going to create a new request right here, and let's just make sure that we select post, because it's going to be a post request.
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=198)** And this time we test this endpoint, which is moderate.
>
> **[3:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=203)** And we're going to send this request along with some data that's going to be in JSON formats.
>
> **[3:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=210)** Let's just go back and let's just make sure also that the app is up and running.
>
> **[3:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=214)** So you should read this.
>
> **[3:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=216)** Okay, so that's good.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=218)** Let's go back.
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=219)** And here for now, we have a message that defaults to, "I want to kill them."
>
> **[3:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=223)** So we're going to use the same for our next example, but let's just make sure that we actually use whatever we type.
>
> **[3:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=229)** So whatever we send as data like this.
>
> **[3:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=234)** All right, and for now, so that's just going to be logged out for now.
>
> **[3:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=238)** So we're not going to see the answer, the response actually in Postman, but that's going to be logged out right here.
>
> **[4:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=244)** So let's open it.
>
> **[4:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=247)** So let's just make sure that we add here a body.
>
> **[4:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=249)** So that's going to be an object, that's going to be input, and this message, which is an offensive message.
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=256)** Okay, so we send the request.
>
> **[4:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=257)** We're not going to see the response here, but we can expect to see.
>
> **[4:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=262)** Here are the outputs and just like in the documentation, we're going to get here a moderation object and these array results, and also the flagged.
>
> **[4:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=271)** And we're going to see also this flagged property with a value tree.
>
> **[4:35](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=275)** Now we can see that we have a message that falls under a category that does not comply with the OpenAI's content policy.
>
> **[4:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=283)** So up next, what we're going to see is how to integrate a moderation layer as a safeguard in order to create a safe and respectful environment.
>
> **[4:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=293)** So adding moderations to one application is a way to enforce community guidelines, ensure the quality of the content, and also provide a safe environment for all users.
>
> **[5:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/introduction-the-moderation-api?u=76281980&t=304)** So let's do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), next (3), api (2), [[Node.js]] (2), data (2)
> **CLI Commands:** make (6), node (2), find (1)
> **Analogies:** for example (3), just like (1)
> **Env Vars:** api (2), json (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** node.js (2)
> **Tools:** postman (2)
> **Code Identifiers:** moderateconversation (1)

#### Add a moderation layer
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=0)** - [Instructor] Now we would like to be able to moderate the conversation from our chat application.
>
> **[0:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=6)** So before doing that, we're going to complete also this function and allow to return a response with the status 200.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=15)** Well, that's going to be the moderation objects and we're going to be more specific because we want to access the results.
>
> **[0:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=20)** That's going to be moderation, and then results.
>
> **[0:23](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=23)** So that is an array.
>
> **[0:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=24)** So we want to access the first object of that array and then access the flagged poverty, which is this one.
>
> **[0:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=32)** And for the rest, we would like maybe to have some visibility on the categories and category_scores.
>
> **[0:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=38)** So we're going to update here and allow to display the information of categories.
>
> **[0:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=43)** So that is just extra information that we can access.
>
> **[0:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=46)** So that's going to be similar, moderation and then access results.
>
> **[0:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=49)** And then the property categories.
>
> **[0:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=52)** We're going to do the same below for category_scores.
>
> **[0:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=57)** So that's going to be here, category_scores, and then category_scores.
>
> **[1:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=64)** And that's it.
>
> **[1:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=65)** So we're going to try that from the front-end application now.
>
> **[1:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=69)** We're going to make a few changes and add a new function.
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=71)** I'm going to call it moderateConversation like this.
>
> **[1:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=77)** So we're going to pass also here the input message.
>
> **[1:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=81)** And it's going to be very similar to this function, sendMessage.
>
> **[1:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=84)** So we're going to copy from line 85 all the way down to 92.
>
> **[1:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=88)** That's going to be enough.
>
> **[1:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=90)** We want to make a request, an API call.
>
> **[1:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=93)** Same.
>
> **[1:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=94)** I'm just going to, here, update with the new endpoint, which is moderate.
>
> **[1:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=100)** And we want to return a promise.
>
> **[1:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=101)** So I'm going to add it here.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=102)** So that's going to be return Promise, resolve, and then reject, like this.
>
> **[1:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=110)** And I'm going to add all of this inside the promise.
>
> **[1:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=114)** So basically what we do here is to return the response from the requests like this.
>
> **[2:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=122)** And that's going to be as a JSON object, so the JSON with a JSON format.
>
> **[2:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=128)** And finally, what we do is simply resolve to return the result, the output, from the language model.
>
> **[2:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=138)** So the moderation language model, which will be the flagged property.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=144)** So which will be either true or false.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=147)** And so we're going to call moderateConversations from handle and submit.
>
> **[2:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=151)** So right below here, so you have handle and submit.
>
> **[2:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=154)** I'm going to remove these lines for now.
>
> **[2:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=157)** So I'm just going to cut.
>
> **[2:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=158)** So I'm going to do Command Cuts and call moderateConversation.
>
> **[2:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=164)** So that's going to return a promise.
>
> **[2:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=165)** So we're going to pass userMessage, alright?
>
> **[2:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=168)** And that's going to return one value, which is flagged.
>
> **[2:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=172)** And for now, we're just going to console.log the value of flagged to see what is the output from the language model when we send this request to moderate the conversation.
>
> **[3:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=181)** Okay, so we can accept this if you'd like, but I'm going to make changes like this, I'm going to make changes.
>
> **[3:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=188)** And so far, so what we've been doing is to handle only one use case, which is to update the list of messages.
>
> **[3:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=195)** So inside of else, I'm going to paste.
>
> **[3:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=198)** So what we had done so far, which is to update the list of messages like this, and then also send the request, send the message to the language, to the GPT models.
>
> **[3:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=211)** And now, if this is flagged for this scenario, so for now, we are just going to console.log to see that the message is flagged.
>
> **[3:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=219)** And actually, I'm going to do Message flagged and then we're going to see if this is true or false.
>
> **[3:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=223)** Alright, so let's try that.
>
> **[3:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=225)** We're going to make a test from the chat application.
>
> **[3:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=228)** So let's just make sure that this is up and running right here, so, okay, so that's fine.
>
> **[3:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=235)** Alright, so let's try, and I'm going to open here the console to have a visibility on what's going through.
>
> **[4:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=244)** And we're going to use the exact same example from the API reference, which is to send this message and we're going to see what is the output.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=252)** Here we go.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=252)** So now we can see that the message is flagged and now that this is true, okay?
>
> **[4:16](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=256)** And if we go back, because remember that we had also logged out, so that's going to be here.
>
> **[4:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=262)** We're going to be able to see further down, further down, just to see after this new request, now you can see that you've got a visibility on the category_scores and also the categories.
>
> **[4:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=273)** And you can also see the categories which are flagged.
>
> **[4:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=276)** That includes harassment and also violence, alright?
>
> **[4:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=279)** So this is just extra information.
>
> **[4:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=282)** So now what we want to do is to be able to filter out content.
>
> **[4:49](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=289)** So we have two scenarios.
>
> **[4:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=292)** So based on the scores and the flagged output, we are able to control the flow.
>
> **[4:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=298)** So either to filter out the response.
>
> **[5:02](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=302)** So we're going to send a message telling the user that your message is not appropriate or we're going to let it go through and proceed as usual, which is to update the list of messages and then display the list of messages.
>
> **[5:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=314)** So we're going to do that next.
>
> **[5:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/add-a-moderation-layer?u=76281980&t=315)** We're going to see a few more examples and see how to moderate and generate conversations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), [[JSON]] (3), api (2), [[Representational State Transfer (REST)|Rest]] (1), front-end (1)
> **Code Identifiers:** category_scores (5), moderateconversation (2), sendmessage (1), moderateconversations (1), usermessage (1)
> **CLI Commands:** make (6)
> **Env Vars:** json (3), api (2), gpt (1)
> **Documentation:** api reference (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Generate and moderate conversations
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=0)** - [Instructor] We complete the chat bot application in this video, and you're going to see that at the top level of the component, we have a few more local state variables defined.
>
> **[0:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=9)** For example, we're going to use isGenerating, this is to display content conditionally.
>
> **[0:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=15)** And we're going to update the state from false to true by using setGenerating.
>
> **[0:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=19)** So I'm going to show you how.
>
> **[0:21](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=21)** Basically, it is when you send an API request, you want to indicate to the user that a response is expected.
>
> **[0:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=29)** So that may be quick, or that may take longer, so the importance is to give some visual cue just to indicate the user that they can expect an answer soon.
>
> **[0:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=39)** So we're going to use this one, I'm going to show you.
>
> **[0:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=42)** So that's going to be line 192, right here.
>
> **[0:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=47)** So we're going to use this one to display, but that's going to be like an icon spinning.
>
> **[0:51](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=51)** And we're going to read the message Generating response.
>
> **[0:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=54)** So let's see what we're going to update the state for this variable, so that's going to be whenever you send the message, right here.
>
> **[1:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=63)** So as soon as you send the request, you want to setGenerating to true.
>
> **[1:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=68)** All right, so we're going to see the icon spinning. All right?
>
> **[1:11](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=71)** And then when it becomes available, so that's going to be right here, so right below, when you receive the response, and when you update the list of messages, you can then set the variable back to false.
>
> **[1:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=86)** So I'm going to update back to false.
>
> **[1:28](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=88)** So we're going to try that.
>
> **[1:30](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=90)** So we're going to make sure that the app is up and running.
>
> **[1:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=93)** Okay, so that's available.
>
> **[1:36](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=96)** I'm going to make a new request, like what I want to know.
>
> **[1:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=100)** I'm going to phrase it differently.
>
> **[1:41](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=101)** I want to know the opening hours of the store, for example.
>
> **[1:47](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=107)** Of the store, like this.
>
> **[1:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=110)** All right, so now you can see that now. Generating response.
>
> **[1:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=113)** So this is, well, the response is returning.
>
> **[1:57](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=117)** We can see that the request is in progress until you read the response, and then we go back to the state false.
>
> **[2:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=124)** You can always check out if you'd like with the components tool, you can be able to see it live.
>
> **[2:10](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=130)** That's going to be right here.
>
> **[2:13](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=133)** Components, you can inspect all the states.
>
> **[2:17](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=137)** So right here for now, this is false.
>
> **[2:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=139)** So let's ask the exact same question.
>
> **[2:22](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=142)** I'm going to do that again.
>
> **[2:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=144)** You're going to keep an eye right here, so line 6.
>
> **[2:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=147)** And you can see that it's going to go to the state true and we can see the icon.
>
> **[2:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=152)** So that was quicker this time.
>
> **[2:34](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=154)** All right, and then it went back to false. Excellent.
>
> **[2:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=157)** So we're going to do something else here as well.
>
> **[2:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=160)** So you see that the first request that we send is to get the thread.id that corresponds to the conversation session.
>
> **[2:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=168)** That includes all the messages between the user and the assistant.
>
> **[2:52](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=172)** So what we would like is to update the states, for example, update the states of the text area by allowing to add some text only when the thread.id is available.
>
> **[3:05](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=185)** Well, that's going to be very easy.
>
> **[3:06](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=186)** Let's go back to the project.
>
> **[3:09](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=189)** What we're going to do is to use another hook, which is useMemo.
>
> **[3:14](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=194)** And we're going to go back to where we would like to make the change, so that's going to be inside the form.
>
> **[3:20](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=200)** So you have the text area, and you can use this property on any field for a form.
>
> **[3:26](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=206)** So you can use disabled.
>
> **[3:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=209)** So for example, I'm going to set it to true.
>
> **[3:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=211)** So if I set it to true, you're going to see that I'm not going to be able to click inside of the text area.
>
> **[3:38](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=218)** So I'm not able to type any text, I'm not going to be able to interact with the AI assistant.
>
> **[3:43](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=223)** And what I'd like is to update the states until the thread.id becomes available.
>
> **[3:50](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=230)** I'm going to leave it as is for now, so I'm going to allow to update this dynamically.
>
> **[3:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=235)** So whenever there is a change in the application states, so I'm going to name this one isDisabled, like this, that's going to be a useMemo.
>
> **[4:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=244)** So useMemo is a hook that allows to create computed properties.
>
> **[4:08](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=248)** So we can create derived state from the existing states.
>
> **[4:12](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=252)** And basically we're going to check if the thread.id is available like this.
>
> **[4:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=259)** And I'm going to check if it's not existing.
>
> **[4:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=264)** So that's going to return true. So it's going to be disabled.
>
> **[4:27](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=267)** Otherwise, we're going to allow to update this property.
>
> **[4:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=271)** So whenever there is a change in the state, meaning that as soon as we update here the thread, so when we make the request, so that's going to be updated, we're going to update isDisabled to then update to the other state, which is false.
>
> **[4:46](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=286)** And from this step, we're going to be able to then interact, use the text area.
>
> **[4:53](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=293)** So let's try that.
>
> **[4:55](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=295)** So I'm going to start, I'm going to refresh, and we're going to start a new conversation session.
>
> **[5:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=300)** You're going to see that at first the thread is not available.
>
> **[5:07](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=307)** And looks like we have an issue, and that's probably because it is probably related to the fact that, at first, the thread is not yet available.
>
> **[5:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=315)** So you'd better be careful because at first thread is null.
>
> **[5:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=318)** So we're going to use this operator to allow to access ID only if thread is existing.
>
> **[5:24](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=324)** So we're going to add this operator just to prevent the applications to crash.
>
> **[5:29](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=329)** Let's go back, and it's back to normal.
>
> **[5:31](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=331)** I'm going to refresh again to make the test.
>
> **[5:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=333)** And you're going to see that for now at first, for the first few seconds, it's not going to be enabled.
>
> **[5:39](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=339)** And this is only when the thread.id becomes available that I'm going to be able to interact as usual.
>
> **[5:44](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=344)** All right, so I'm going to be able to type my question.
>
> **[5:48](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=348)** And so we have successfully created a chat application that connects to AI and the GPT models.
>
> **[5:54](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=354)** And also the OpenAI tools create an agent capable of responding to user queries about the shipping costs and opening hours.
>
> **[6:03](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/generate-and-moderate-conversations?u=76281980&t=363)** On top of that, we have created a chat bot that respects the OpenAI's content policy by creating a safe and a respectful environment for all users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), ai (2), api (1)
> **Code Identifiers:** usememo (3), setgenerating (2), isdisabled (2), isgenerating (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (4)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (3)
> **Env Vars:** api (1), gpt (1)
> **UI Navigation:** go to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Last words and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=0)** - [Instructor] I hope that you enjoyed this course and that you learned a lot from it.
>
> **[0:04](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=4)** Other examples of AI integration include visual recognition by incorporating computers with vision capabilities, so with the GPT-4 and the vision model to understand images and identify objects.
>
> **[0:19](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=19)** Other IDs of AI integration may involve developing AI capabilities to recognize emotional intelligence and empathy, to respond to users' emotional states, and also in the domain of the internet of things.
>
> **[0:33](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=33)** Connecting AI to home appliances, security systems should become a reality in the near future.
>
> **[0:40](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=40)** The areas of implementations for generative AI are endless and limitless.
>
> **[0:45](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=45)** The expansion of AI into various sectors of businesses and customer service is likely to change the way that we work and interact with technologies.
>
> **[0:56](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=56)** And generative AI is much more.
>
> **[0:58](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=58)** Artificial intelligence is of general interest.
>
> **[1:01](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=61)** The ambition of OpenAI is to create a super intelligence capable of performing any task that any human being can do, and that also aligns with human progress.
>
> **[1:15](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=75)** And your journey to get the best developer experience should not end here.
>
> **[1:18](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=78)** If you want to learn more about generative AI in Python, there is another course available in the library that teaches the exact same techniques to integrate the OpenAI APIs with the Python programming language.
>
> **[1:32](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=92)** AI is a very large ecosystem, which is constantly improving and evolving.
>
> **[1:37](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=97)** So remember to stay tuned for further updates about language models and generative AI.
>
> **[1:42](https://www.linkedin.com/learning/integrating-generative-ai-into-javascript-web-projects/last-words-and-next-steps?u=76281980&t=102)** Thank you and have fun in your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (6), [[Generative AI]] (4), [[Python (Programming Language)|Python]] (2), [[GPT-4]] (1), [[Internet of Things (IoT)|Internet of things]] (1)
> **CLI Commands:** python (2)
> **Env Vars:** gpt (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Sandy Ludosky]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/integrating-generative-ai-into-javascript-web-projects-3813070/codespaces)

## Skills Covered

- Web Development
- Generative AI
- JavaScript
- Artificial Intelligence (AI)

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[Building PHP Applications with Generative AI]] | **6 of 10** | [[Build an AI Application with React and AWS SageMaker]] →

## Appears In

- [[Building Generative AI Skills for Web Developers]]

## Related Courses

_Courses sharing skills:_

- [[Building PHP Applications with Generative AI]] — Web Development, Generative AI, Artificial Intelligence (AI)
- [[End-to-End JavaScript Testing with Cypress.io]] — Web Development, JavaScript
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)