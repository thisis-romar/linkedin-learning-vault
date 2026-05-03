---
type: course
cssclasses:
  - lle-course
slug: openai-api-introduction
url: "https://www.linkedin.com/learning/openai-api-introduction"
updated: 1/5/2024
learners: 12474
skills:
  - OpenAI API
  - API Development
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-introduction-4564116/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEWS5-DC0zYIw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704245394141?e=2147483647&amp;v=beta&amp;t=98AwtUKk7k69NMutgfvmFPuNyJX7uHRYUea_bVWxsNk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
next_courses:
  - '[[OpenAI API- Working with Files]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":1,"total":10,"prev":null,"next":"OpenAI API- Working with Files"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/api-development
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Openai%20Api%20Introduction.md)

![Openai Api Introduction](https://media.licdn.com/dms/image/v2/D560DAQEWS5-DC0zYIw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704245394141?e=2147483647&amp;v=beta&amp;t=98AwtUKk7k69NMutgfvmFPuNyJX7uHRYUea_bVWxsNk)

# Openai Api Introduction

> The OpenAI API gives you programmatic access to OpenAI’s GPT system for everything from chat (your own ChatGPT clone) to image processing through Dall-E, to audio processing with Whisper, to building custom assistants and more. In this course you’ll learn how the OpenAI API works, how to use it both in the OpenAI playground and in your own apps, and where to find up-to-date documentation and examp

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-introduction) | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building AI-powered apps with the OpenAI API](#building-ai-powered-apps-with-the-openai-api)
- [**1. Using the OpenAI API**](#1-using-the-openai-api) (1 videos)
  - [Five steps to using the OpenAI API](#five-steps-to-using-the-openai-api)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building AI-powered apps with the OpenAI API](https://www.linkedin.com/learning/openai-api-introduction/building-ai-powered-apps-with-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-introduction/building-ai-powered-apps-with-the-openai-api?u=76281980&t=0)** - Give me a few minutes of your time, and I'll get you up and on your way. You've seen what AI can do, and now you want to get your hands on these new tools and materials to experiment and build new [[Microsoft Products|products]] and services. The [[OpenAI API]] gives you the power to integrate AI features into your existing projects or build entirely new ones using AI, and I'm here to show you how to get it right. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[OpenAI API]] (1)
> **Env Vars:** api (1)
> **Speakers:** - give (1)


### 1. Using the OpenAI API

[↑ Back to Table of Contents](#table-of-contents)

#### [Five steps to using the OpenAI API](https://www.linkedin.com/learning/openai-api-introduction/5-steps-to-using-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-introduction/5-steps-to-using-the-openai-api?u=76281980&t=0)** - The [[OpenAI API]] gives you direct programmatic access to all the features and functionality of OpenAI's AI [[Microsoft Products|products]], so you can integrate AI into your own projects and even build your own AI products. Here are the five things you need to know to get started with the OpenAI API. First, access. To use the OpenAI API, you need an account. You can create an account at platform.[openai.com](https://openai.com). To use the API you need to add payment information to your account and make sure the spending limit matches your budget. Platform.[openai.com](https://openai.com) is also where you find documentation, account management, and everything else pertaining to the API. Second, pricing. Unlike [[ChatGPT]] where there is a free version and a premium version with a monthly subscription fee, when you use the API, you're paying for the [[Tokens]] you use. A token is a segment of symbols and letters, so a single [[Microsoft Word|word]] can cost you anywhere from one to seven tokens and sometimes even more. Token pricing is based on the model you use and what you use it for. Up-to-date pricing information is found at [openai.com/pricing](https://openai.com/pricing). You'll notice in this breakdown that the token cost for input, so the prompt you send to the API, is lower than the outputs, the response you get from the AI. This means as you budget your AI usage, you need to consider the size of both your input and your output. Third, the playground. You can use the OpenAI API right from platform.[openai.com](https://openai.com) through the playground. From here, you can create your own assistance complete with custom functions and content retrieval, and you can also set up a standard chat with system, assistant, and user messages.
>
> **[1:35](https://www.linkedin.com/learning/openai-api-introduction/5-steps-to-using-the-openai-api?u=76281980&t=95)** In the playground, you have full control over every aspect of the API. The UI lets you set the model you use, the temperature and all the parameters governing the output, and importantly, the maximum length, the maximum number of tokens the API is allowed to use for each response. If you're new to the OpenAI API, I recommend you start here in the playground to familiarize yourself with how the AI responds to different inputs, what the model and parameter settings do, and to set up and manage your own custom assistance. The playground also helps you write code for basic integration into your apps. Once you've configured your chat settings, click the code button and you get the configuration settings in [[Python (Programming Language)|Python]], [[Node.js]], cURL, and even [[JSON]], so you can just copy that code and paste it into your app and start working right away. That brings us to item number four, authentication. The OpenAI API uses API keys for authentication. You can generate and manage unique API keys from platform.[openai.com](https://openai.com), and from here you can set up as many API keys as you like. To create a new API key, click the Create new secret key button, give your key a descriptive name, and copy it once it appears in the modal popup. One important thing to keep in mind here, you only get to see this key once in this modal, so make sure you copy it before you close the model. Now, if you accidentally close the modal, don't worry. Just delete the key and make a new one. They are effectively throw away strings of random text In your code, the API key is passed to the API as a bearer token in the authentication header of your request. This means you have to be careful where you store
>
> **[3:08](https://www.linkedin.com/learning/openai-api-introduction/5-steps-to-using-the-openai-api?u=76281980&t=188)** the API key in your application. For example, in a standard browser-based application, the key will be stored in code, meaning it's visible to other users. This is not secure and not recommended. So if you're building a web-based application using the OpenAI API, the best practice is to do the actual AI integration on the backend from the server and have your front-end application send its request through that backend. Speaking of development, fifth and finally, code integration. The OpenAI API is a standard RESTful API that acts on HTTP requests. That means you're free to integrate it using whatever coding language and [[Representational State Transfer (REST)|REST]]-based approach you prefer. That said, OpenAI has two robust libraries for the API to make integration easier. One for Python and one for Node.js and TypeScript. Both of these libraries are simply called OpenAI and can be added as dependencies to your project using pip for Python and [[npm]] or NPX for Node and TypeScript. The OpenAI libraries provide helper functions to simplify integration and copious documentation, including practical code examples to get you started. To get started using the OpenAI libraries in either Python or [[JavaScript]], import the library, create a new instance of OpenAI and pass in your API key. From here, you're now free to use all the features of the OpenAI API programmatically in any way you want. To help you get started, the exercise files for this course holds code example for the basic setup of the API using Python and Node.js and a more in-depth example of how you can use the streaming feature to create an interactive application.
>
> **[4:41](https://www.linkedin.com/learning/openai-api-introduction/5-steps-to-using-the-openai-api?u=76281980&t=281)** The README file in the [[GitHub]] repository explains how to set up and use these files in GitHub code spaces. And that's it, these are the five main things you need to know to get started working with OpenAI API. Now, all that's left for me to say is (speaks in foreign language) go build some amazing things with OpenAI API, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (11), [[Python (Programming Language)|Python]] (5), [[Tokens]] (3), [[Node.js]] (3), [[Microsoft Products|Products]] (2)
> **Env Vars:** api (28), json (1), http (1), rest (1), npx (1)
> **CLI Commands:** python (5), make (4), node (4), find (1), curl (1)
> **URLs:** [openai.com](https://openai.com) (5)
> **Prerequisites:** set up (4), setup (1)
> **File Paths:** node.js (3)
> **Definitions:** is a  (3)
> **Tools:** github (2)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-introduction-4564116/codespaces)

## Skills Covered

- OpenAI API
- API Development
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
**1 of 10** | [[OpenAI API- Working with Files]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Working with Files]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)