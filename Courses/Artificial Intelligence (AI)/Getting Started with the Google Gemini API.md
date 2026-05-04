---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: getting-started-with-the-google-gemini-api
url: "https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api"
duration_minutes: 68
duration: 1h 8m
level: Intermediate
updated: 6/6/2024
learners: 1795
skills:
  - API Development
  - Generative AI
  - Artificial Intelligence (AI)
  - Gemini
  - Google Gemini
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHXvzWCHd5fZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008957502?e=2147483647&amp;v=beta&amp;t=tZUndRs2b-e08KuS5U5oMZEVrtYh5QHP1IwpGuHeXEk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - '[Exploring Million-Token Models with Google Gemini Pro 1.5](Exploring%20Million-Token%20Models%20with%20Google%20Gemini%20Pro%201.5.md)'
next_courses:
  - '[Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md)'
path_nav: '[{"path":"A Developer''s Guide to Google Gemini","position":3,"total":8,"prev":"Exploring Million-Token Models with Google Gemini Pro 1.5","next":"Programming with the Gemini Flash API"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/api-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/gemini
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Getting%20Started%20with%20the%20Google%20Gemini%20API.md)

![Getting Started with the Google Gemini API](https://media.licdn.com/dms/image/v2/D560DAQHXvzWCHd5fZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008957502?e=2147483647&amp;v=beta&amp;t=tZUndRs2b-e08KuS5U5oMZEVrtYh5QHP1IwpGuHeXEk)

# Getting Started with the Google Gemini API

> Google's Gemini suite is a set of powerful generative models, and through the Gemini API, Google has exposed these models for developers to build on. In this course, instructor Fikayo Adepoju shows you how to unlock the power of the Gemini API. Learn what the Gemini API is all about—how the API is structured, priced, and its capabilities. Fikayo shows you what the Gemini API has to offer, demonstr

> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api) | 1h 8m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Get started with the Gemini API](#get-started-with-the-gemini-api)
  - [What you should know](#what-you-should-know)
  - [Who is this course for?](#who-is-this-course-for)
- [**1. Understanding Gemini Models**](#1-understanding-gemini-models) (5 videos)
  - [What is Gemini?](#what-is-gemini)
  - [Gemini Pro](#gemini-pro)
  - [Gemini Pro Vision](#gemini-pro-vision)
  - [Embedding](#embedding)
  - [AQA](#aqa)
- [**2. How the Gemini API Works**](#2-how-the-gemini-api-works) (5 videos)
  - [What is the Gemini API?](#what-is-the-gemini-api)
  - [API versions](#api-versions)
  - [Pricing](#pricing)
  - [Designing prompt data](#designing-prompt-data)
  - [Generating content](#generating-content)
- [**3. Developing with the Gemini API**](#3-developing-with-the-gemini-api) (4 videos)
  - [Getting an API key](#getting-an-api-key)
  - [API structure, models, and endpoints](#api-structure-models-and-endpoints)
  - [Using the REST API](#using-the-rest-api)
  - [Using a programming language SDK](#using-a-programming-language-sdk)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get started with the Gemini API](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980&t=0)** - Hello and welcome to this course where I'll be introducing you to the amazing technology that is the [Gemini](../../Skills/Software%20Development/Gemini.md) API. In this course, you will learn what the Gemini API is all about, what the Gemini models are and their capabilities, how the API is structured, priced, and how you can start making API calls to the API to take advantage of the [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) features on the Gemini platform. Hi, I am Fikayo Adepoju, a software developer and tech instructor with over 14 years experience developing scalable applications and teaching the next generation of developers. If you're ready to unlock the potential of [Google](../../Glossary/Service/Google.md)'s Gemini API, I'll see you in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (5), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** api (6)
> **Speakers:** - hello (1)

#### [What you should know](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=0)** - [Narrator] To take this course, honestly, the only major requirement is to have an interest in [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and how it can be implemented in software applications. The [Gemini](../../Skills/Software%20Development/Gemini.md) API provides a very low barrier of entry for developers to add AI-powered features to their applications, and that is what this course is designed to introduce. However, because we'll be dealing with an API that will be used by developers. We'll be looking at some code and implementing programming demos. Thus, having some programming experience will definitely make you follow along better with this course. However, this is not a mandatory requirement. The content of this course has been structured to be comprehensible, even for non-programmers. So if you're excited learning about what the Gemini API can do for your applications, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Who is this course for?](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=0)** - [Instructor] So who should take this course? If you have found your way to this course, this is the time to answer a couple of questions that will determine if this is the right course for you. Ready? Let's go. Are you a developer, development team, project manager, or engineering manager trying to learn how to add AI features to your application? Or are you just interested in [Google](../../Glossary/Service/Google.md)'s [Gemini](../../Skills/Software%20Development/Gemini.md) models, and the capabilities of it's API, and you want to learn how it can be integrated into your applications? If your answer to any of these questions is yes, then you are in the right place. This course will give you a comprehensive introduction into the [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) API. You will learn what the Gemini models are, what the Gemini API does, capabilities of the different models, how Google prices the usage of the Gemini API, how the API is structured, and also get hands-on with some simple demos. If all that sounds good to you, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (4), [Google](../../Glossary/Service/Google.md) (2), [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) (1)
> **Env Vars:** api (5)
> **Speakers:** - [instructor] (1)


### 1. Understanding Gemini Models

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Gemini?](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=0)** - [Instructor] Welcome to the world of [Gemini](../../Skills/Software%20Development/Gemini.md), [Google](../../Glossary/Service/Google.md)'s fast growing, large language model. If you're intrigued by the cutting edge advancements in [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and how it's transforming technology, you will be excited by Gemini and what it's able to help you achieve. In this video, we are going to cover what Gemini is, discuss its capabilities, and explore how developers can utilize Gemini in various applications. So what is Gemini? Gemini is a suite of multimodal [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) models, developed by the team at Google. Unlike the legacy power models that only accept text and output text, Gemini models can accept not only text, but also accept images in prompts, depending on what model variation you choose. At the art of Gemini is the transformer architecture, a model designed to undo sequential data while capturing complex relationships within it. Gemini has been trained on a wide variety of data, enabling it to understand context, nuance, and even human references. By predicting the next [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in a sequence, Gemini can generate coherent and relevant text, answer questions, [compose](../../Glossary/Framework/Jetpack%20Compose.md) essays, and even write code. In this course, I am going to be introducing you to the Gemini API. The Gemini API exposes Gemini's family of generative AI models through a web interface,
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=94)** giving developers the ability to build applications that take advantage of Gemini's models. With the Gemini model, developers can integrate AI powered features into their applications using the model's capabilities to build applications like intelligent chat bots, creative writing assistants, image recognition features, data analysis tools, and many more. In order to fully grasp the capabilities of Gemini, we first have to understand the models in the Gemini family, what their individual capabilities are, the supported input and output formats, their token limitations, and many more. Before we discuss our first model in the Gemini suite one thing I would like you to note is that these models are continuously being improved and newer versions are released from time to time. For example, while recording this course, Gemini released the Gemini 1.5 Pro model, an upgrade to the Gemini Pro model. This new version accepts a staggering one million plus [Tokens](../../Skills/Web%20Development/Tokens.md) as input and can also perform advanced tasks, tasks like code generation, text generation, text editing, problem solving, recommendations generation, and lots more. However, it is currently in preview only mode and can only accept two queries per minute. There is a strong possibility that by the time you're watching this course, this model will already be available for use on the Gemini API.
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=189)** To stay updated on new updates to Gemini model variants and versions, keep a tab on the AI.[Google.Dev/Gemini-API/docs/models/Gemini](https://Google.Dev/Gemini-API/docs/models/Gemini) page.
>
> **[3:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=203)** Here you can see all of Gemini's models, the different versions and variants. For example, the Gemini 1.5 Pro that we just talked about. In the next video, we'll be taking a look at the first model in the Gemini suite, the Gemini Pro model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (29), [Google](../../Glossary/Service/Google.md) (3), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** api (4)
> **Versions:** 1.5 (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **URLs:** [google.dev](https://google.dev) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Gemini Pro](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=0)** - [Instructor] From the previous video, we learned that [Gemini](../../Skills/Software%20Development/Gemini.md) is a family of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) models. So in this video, we'll be taking a look at the very first model in the family of Gemini models, the Gemini Pro model. The Gemini Pro model, code name, gemini-pro, accepts only text as input and also generates a textual response. It also has the ability to handle zero-shot, one-shot, or few-shot tasks. What this means is that when prompting the model, you can provide no example, one example, or a few examples, respectively, of what the response should look like, and the model will still be able to generate an appropriate response. The Gemini Pro model can handle what is known as multi-turn conversational format. What this means is that you can use this model to build chat experiences. This is due to the model's ability to collect multiple rounds of questions and responses and allow users to incrementally step towards answers or get help with multi-part conversations. Now that we have gotten ourselves acquainted with the capabilities of this model, let's now discuss its limitations. It may have been implied in the previous slide, but I would like to reiterate the fact that this model cannot take an image or any other media as input. Only text inputs are supported. Also, the maximum amount of [Tokens](../../Skills/Web%20Development/Tokens.md) that can be consumed as input is currently set at 30,720.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=98)** For responses, the token cap is also set at a maximum of 2,048 tokens per output at the time of this recording. In the context of Gemini models, a token is equivalent to about four regular text characters. Approximately 60 to 80 English words will amount to 100 tokens. Rate limiting is also implemented at the API level. At the time of this recording, developers are only allowed to make 60 requests per minute. However, you can have this quota expanded, but more on that when we discuss pricing in the next section. So if your use case fits into all the capabilities described and doesn't exceed any of the limitations, this is the model to select. In the next video, we are going to be taking a look at the next model in the family of Gemini models, the Gemini Pro Vision model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (9), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Gemini Pro Vision](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=0)** - [Presenter] Now that we understand how the [Gemini](../../Skills/Software%20Development/Gemini.md) Pro model works, it's now time to learn about another powerful model variant, the Gemini Pro Vision model. The Gemini Pro Vision model, code name, gemini-pro-vision, accepts both text and images as input, but can only generate text as response. The model can also accept multimodal inputs, which means that it can accept an input that is a combination of both text and images. Like the Gemini Pro model, It also has the ability to handle zero-shot, one-shot, or few-shot tasks. Meaning that you can provide no example, one example, or a few examples respectively of what the response should look like in order to get your desired response. Now that we're familiar with the capabilities of this model, let's also discuss its limitations. Unlike the Gemini Pro model, the Gemini Pro Vision model cannot handle a multi-turn conversational format. This means that you cannot use the Gemini Pro Vision model to build chat applications like [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) assistance or a multimodal chatbot. At least you cannot as at the time of this recording. It is highly possible and highly expected that a subsequent version of this model would allow you to be able to build using multi-turn conversational formats.
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=94)** Also, the maximum amount of [Tokens](../../Skills/Web%20Development/Tokens.md) that can be consumed as input is currently set at 12,288. For responses, the token cap is also set at the time of this recording at a maximum of 4,096 tokens per output, double of what the Gemini Pro model allows. Rate limiting is also implemented at the API level. And just like the Gemini Pro model, you are only allowed to make 60 requests per minute. I'll advise that you continue to check the Gemini models page for changes in this token and rate-limiting boundaries. You also have the opportunity to have this quota expanded, and we'll be taking a look at that in the pricing video. So if your use case fits into all the capabilities described and doesn't exceed any of the limitations, the Gemini Pro Vision is the model to select. You can use it to build features that involve not just processing text, but also images. I have a course on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library where I used this model to build a pretty cool image captioning tool. I'll advise that you check out that course to see a fully practical implementation of this model. In the next video, we are going to be taking a look at the next model in the family of Gemini models: the embeddings model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (13), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [presenter] (1)

#### [Embedding](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=0)** - [Instructor] The next [Gemini](../../Skills/Software%20Development/Gemini.md) model we will be exploring is the embeddings model. The embeddings model helps translate information to a universal format that Gemini can understand. For example, imagine you have a bunch of documents in different languages like English, French, or Spanish. The embeddings model can take all this information and convert it into a single code that Gemini can decipher regardless of the original language. This allows Gemini to find connections and understand the meaning of information across different sources. This way Gemini can relate information from different sources and answer your questions in a more comprehensive way. It's like having a universal translator for all the information you give it. This capability can be used to implement features such as [Information Retrieval](../../Skills/Data%20Science/Information%20Retrieval.md), question answering, recommendation systems, text summarization, anomaly detection, and many more. The embeddings model, code name embedding or, if you want to add the version, embedding-001, more on versions later, takes text as its input and also outputs text, generating embeddings for the input text. Currently, it is only optimized for creating embeddings for a maximum input of 2,048 [Tokens](../../Skills/Web%20Development/Tokens.md). It can only take text as its input and doesn't have any adjustable safety settings. The API rate limit is also currently capped at 1,500 requests per minute.
>
> **[1:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=96)** And that's all on the embeddings model. In the next video, we'll be looking at the last model in the Gemini family of models, the AQA model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (6), [Information Retrieval](../../Skills/Data%20Science/Information%20Retrieval.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Analogies:** for example (1), imagine (1), it's like (1), such as (1)
> **Env Vars:** api (1), aqa (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [AQA](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=0)** - [Instructor] In this video, we'll be discussing the last model in [Gemini](../../Skills/Software%20Development/Gemini.md)'s suite of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) models, the AQA model. The AQA model, AQA, which is short for Attributed Question-Answering, is a model trained on a specific dataset and designed to answer questions based on that dataset. Imagine a system that is good at answering questions. This system called Gemini AQA is trained on a lot of information. When you ask it a question, it searches through this information to find the answer, and not only does it give you the answer, but it also estimates how likely it is that the answer is actually correct. In other words, Gemini AQA is like a super librarian who can find information from many sources and tell you how sure they are that the information is right. The AQA model, code name AQA, takes text as input, is able to perform attributed question answering as we've described, and output text. This model is trained to return answers to your questions, which come in form of prompts. These questions are based on the information that the model has been provided with. For example, if the model is trained on real estate information, then it can answer questions on real estate. The model also has the ability to estimate how confident it is in the answer it provided. As for the model's limitations, it currently only supports the English language,
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=95)** but hopefully, more languages will be added going forward. The input limit is restricted to 7,168 [Tokens](../../Skills/Web%20Development/Tokens.md), while the output token limit is currently set at 1,024 tokens. API requests to this model are also rate limited, allowing a maximum of 60 requests per minute, and that is the AQA model in the family of Gemini generative AI models. But before we wrap up this section, I would like to briefly discuss how Gemini manages its model versions. Gemini models are either available in preview or stable modes. There are three sets of versions for each model in the Gemini suite: the latest, the latest stable, and the stable version. The latest version refers to the cutting-edge version of the model or the model generation. This version is still being constantly updated and might be in preview mode, just like the Gemini 1.5 Pro model that I mentioned in the previous video. This version should only be used for testing and prototypes and not in real-world production applications. To specify the latest version of a model, use the format: model-generation-variation-latest. For example, the gemini-1.5-pro-latest model. The model here is Gemini,
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=189)** the generation is 1.5, the variation is Pro, and the version is the latest version. Next is the latest stable version. This version points to the most recent stable release version for the specified model generation and variation. To specify a latest stable version, use the format model-generation-variation. For example, the gemini-1.0-pro model, where Gemini is the model, the generation is 1.0, and the variation is Pro. And lastly, we have the stable version. These model versions do not change and are the most recommended for production applications. To specify a stable version, use the format model-generation-variation-version.
>
> **[4:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=249)** For example, the gemini-1.0-pro-001 model version. Here, Gemini is the model, 1.0 is the generation, Pro is the variant, and 001 is the specific version. Do note that Gemini Pro is an alias for gemini-1.0-pro. Thus, you can use both names interchangeably in your code to specify the model version. In the next section, we'll be diving into details about the Gemini API; how it is priced, versioned, and how to generate appropriate responses. Sounds exciting, right? See you in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (17), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (2)
> **Env Vars:** aqa (8), api (2)
> **Versions:** 1.0 (5), 1.5 (3)
> **Analogies:** for example (4), imagine (1), just like (1)
> **Definitions:** short for (1), is a  (1), in other words (1), refers to (1), is an  (1)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** find (2)
> **Best Practices:** recommended (1)


### 2. How the Gemini API Works

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the Gemini API?](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=0)** - [Instructor] In this section, we're going to be diving into the [Gemini](../../Skills/Software%20Development/Gemini.md) API. We'll be looking at what the Gemini API is, the types of functions it allows you to perform, how it is priced and how to use it effectively. At the end of this section, you will fully understand what the API is made of and how you can design your inputs in order to get desired responses. Sounds great. Let's get started. In this video, I'll be helping you answer the question, what is the Gemini API? The Gemini API is a programmatic interface exposed by [Google](../../Glossary/Service/Google.md) AI that allows developers to build AI powered applications or features using Google's Gemini models. With this API, developers can use Gemini models for functions such as content generation, dialogue agents, summarization, classification systems, building [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) engines, and many more. This opens up an amazing opportunity for developers to add AI capabilities to their applications without having to develop their own custom models. Now that we know what the Gemini API is all about, let's see how it is structured. The Gemini API is a subset of Google's set of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) APIs. Each version of this RESTful API consists of two main properties, resources and types. Resources represent the entities that clients can interact with on the API. Examples of resources on the API include models,
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=95)** operations, tuned models, and many more. Types on the other hand, represent the standard data types or formats of the data being exchanged within the API and between clients and the API. These often define how data is sent to a resource endpoint and how responses are returned to the client. Examples of types on the Gemini API include content which contains multi-part content of a message. Generative content response, which represents a response from the model supporting multiple candidates. Content embedding, which is a list of floats representing and embedding, and many more types. Now that we understand what resources and types on the Gemini API are, let's take a closer look at resources. Each resource on the API consists of a set of methods representing the functions that developers are allowed to perform on the resource. On the API documentation at ai.[google.dev/api/rest](https://google.dev/api/rest), if you go to the side menu under the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) section, you can expand any of the available API versions. Here you can see the resources and the types in this version. If you expand the resource, you can see all the functions that are supported under that resource. The Gemini API functions can be found under the models resource. The models resource
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=189)** represents the generative language models with Gemini being one of these models. The models resource structure, represented as a [JSON](../../Skills/Web%20Development/JSON.md) object, uses a name property to identify each model. Each model name is preceded by the model's prefix. For example, models/chat-bison-001, which refers to the chat bison model. The same way model/gemini-pro refers to the Gemini Pro model. The model's resource structure also contains other types of information describing the model. For example, the version, which represents the version of the model, the input token limit, which is the maximum number of input [Tokens](../../Skills/Web%20Development/Tokens.md) allowed for this model, the output token limit, which is the maximum number of output tokens allowed for this model, and the temperature. The temperature is a number between 0.0 and 0.1, which represents the degree of randomness of the response received from the model. Parameters like temperature can be configured based on the type of output you are expecting from the model, and it can instruct the model on how you want your response to be returned. Now that we've taken a look at the properties of the model's resource, let's see the types of functions it can perform. On the current stable version of the API, the V1 version,
>
> **[4:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=284)** the following methods are supported. The list method gets you a list of all the models available through the API. This includes Gemini Pro, Gemini Pro Vision, embeddings, and others. The get method retrieves information about a specific model by supplying the model name in the request URL. The generateContent method takes in a prompt as input in the standard generate content request type format, and generates a response from the model. This function is the main function for accessing the generative features of the AI models. Later in this course, we'll be making use of this method to process a prompt that we'll be sending to the Gemini API. Next is the countTokens method. This method runs a models tokenizer, an internal tool for calculating tokens, and returns the token count. The streamGenerateContent method generates a streamed response from the model. This can be used to collect the response in chunks instead of all at once. And finally, we have the embedContent method and the batchEmbedContent method. You can use these methods to generate either a single or a batch of embeddings from the model respectively. And that's all on the properties and method supported on the V1 version of the models resource.
>
> **[6:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=379)** In the next video, we'll be taking a look at how the Gemini API is versioned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (18), [Google](../../Glossary/Service/Google.md) (4), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1)
> **Env Vars:** api (23), rest (1), json (1), url (1)
> **Code Identifiers:** generatecontent (1), counttokens (1), streamgeneratecontent (1), embedcontent (1), batchembedcontent (1)
> **Definitions:** is a  (4), refers to (1)
> **Analogies:** for example (2), such as (1)
> **Versions:** 0.0 (1), 0.1 (1)
> **Cross-References:** later in (1), in the next (1)
> **URLs:** [google.dev](https://google.dev) (1)

#### [API versions](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=0)** - [Instructor] In this video, we are going to be looking at the different API versions currently available on the [Gemini](../../Skills/Software%20Development/Gemini.md) API. In the previous video, we looked at the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API page at ai.[google.dev/api/rest](https://google.dev/api/rest). On the side menu, under the rest section, you can see that two versions of the API currently exist. The V1 version and the V1 beta version. So let's take a look at what these versions represent for developers using the API. The V1 version of the Gemini API is a stable version of the API. All the features in this stable version will be fully supported by the [Google](../../Glossary/Service/Google.md) team over the lifetime of the stable version. If there are any breaking changes, this version will remain stable, and instead another stable version will be created, containing the new updates. Over a reasonable period of time, this stable version will then be deprecated for the newer stable version, giving developers enough time to switch. If the updates to this stable version are non breaking, then there will be no change to the API version's name as changes will seamlessly be added. The second version of the Gemini API is the v1beta version. This version is used to introduce early access features that are under development and subject to rapid breaking changes. Do note that there is no guarantee that features in the beta version will be available
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=94)** in the subsequent stable version, so do not build production applications in this version of the Gemini API. For more information on the Gemini API versions, you can visit the API versions page at ai.[google.dev/gemini/api/docs/api-versions](https://google.dev/gemini/api/docs/api-versions). If you scroll down, you can see a table that shows all the features supported on both versions and the ones that have been discontinued. This will help serve as a guide to features you want to implement in your application. For example, as the table shows, all features from the now deprecated PaL model have been discontinued. In the next video, we are going to be looking at how the usage of the Gemini API is priced.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (7), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [Google](../../Glossary/Service/Google.md) (3)
> **Env Vars:** api (13)
> **URLs:** [google.dev](https://google.dev) (2)
> **API Endpoints:** /api/rest (1), /api/docs/api-versions (1)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Pricing](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=0)** - [Instructor] In this video, we'll be looking at how usage of the [Gemini](../../Skills/Software%20Development/Gemini.md) API is priced. Gemini follows a usage-based pricing model, so you are charged based on what you use. To access the pricing page for Gemini, head over to ai.[google.dev/pricing](https://google.dev/pricing). Currently, the pricing details for the preview, Gemini 1.5 Pro model is displayed. However, as mentioned, this model is currently in preview mode. To access the currently available Gemini model, click the model dropdown and switch to Gemini 1.0 Pro. As at the time of this recording, Gemini offers two pricing models, the Free of charge model, and the Pay-as-you-go model. On the free plan, which is the one we'll be making use of in this course, every usage of the API is free. You're not charged for the size of the input or the output. However, model token limits for input prompts and output responses still apply. Currently, you are limited to 15 requests per minute, which should not contain more than 32,000 [Tokens](../../Skills/Web%20Development/Tokens.md). The daily limit is also currently set at 1,500 requests per day. If you want more, you'll need to go with the Pay-as-you-go model. One important thing to note is that the details on this page change frequently, emphasis on frequently.
>
> **[1:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=96)** As a matter of fact, while recording this course, these details have changed up to three times. So I advise that you check this page often to stay up to date on the usage pricing details. The Pay-as-you-go model allows you to go beyond the 15 request per minute and token boundaries placed on the free plan. You can make up to 360 requests per minute and 30,000 requests in a single day. The maximum amount of tokens per minute is also increased from 32,000 in the free plan to 120,000 in the Pay-as-you-go plan. Your input and output is also charged. The charge for inputs is currently set at $0.50 per million tokens. For outputs, which is currently only text-based, the price is set at $1.50 per million tokens. At the time of recording this cost, the Pay-as-you-go plan is not currently available in the [Google](../../Glossary/Service/Google.md) AI studio. However, Google has already set the availability date for this payment plan to the 2nd of May, 2024, according to an email I received recently. So, by the time you're watching this course, this payment option will most likely already be available. For the simple demos we'll be implementing in this course, and for most simple tasks, the free plan is good enough. In the next video, we'll be discussing how to design prompts
>
> **[3:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=191)** to get the desired output from our requests to the Gemini API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (8), [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [Google](../../Glossary/Service/Google.md) (3)
> **Versions:** 1.5 (1), 1.0 (1), 0.50 (1), 1.50 (1)
> **Env Vars:** api (3)
> **UI Navigation:** dropdown (1), switch to (1)
> **CLI Commands:** make (1)
> **URLs:** [google.dev](https://google.dev) (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)

#### [Designing prompt data](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=0)** - [Instructor] While you may have typed your prompts into a chat bot in a free form manner, like you will do when typing into something like a [Google](../../Glossary/Service/Google.md) search box, there is actually a structure for prompting [Gemini](../../Skills/Software%20Development/Gemini.md) models that enables you to get the best response. We'll be looking at that structure in this video and also discussing different ways you can take advantage of it when sending a request to the Gemini API. The practice of structuring your prompts in a way that elicits the desired response from a language model is known as prompt design. With a well structured prompt, you can get accurate, high quality responses from a language model, and in this video, we will be looking at best practices for doing that. But before we begin looking into prompt design and the structure of prompts, first, let us answer the question. What is a prompt? A prompt is a natural language request sent to a language model in order to receive a response. Basically, a prompt is any query you want a model to provide a response to. For example, who is Joe Biden? When was the Great Wall of China built? List three states in Canada. What does this image mean? These are all prompts. Prompts are either a question you want a model to answer or a task you want the model to perform. In order to design a prompt, you first need
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=95)** to understand what the structure of a prompt looks like. A Gemini prompt can be made up of one or three of the following types of content: the input content, the context content, and the example content. Crafting these content types effectively will enable you to extract the best response possible from the model. So let's look at each of these content types a little closer. First is the input content type. This is the only required content type, and it's the text in the prompt that you want the model to provide a response for. Inputs can come in different types. So let's look at the types of input you can send to the Gemini API. The most common type of input is the question input. This is a question that you ask the model to provide a response for. For example, who painted "The Mona Lisa," to which the model can then reply, "The Mona Lisa" was painted by the famous Italian polymath, Leonardo da Vinci. It's one of the most recognizable works of art in the world. This is an actual response from the Gemini Pro model. Another type of input content is the task input. This input type tells the model to fulfill a specific task. For example, name three countries in Africa, to which the model can then respond,
>
> **[3:10](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=190)** Egypt, South Africa and Nigeria. There is also the entity input, which is an input type that the model is to perform an action on. The model can be asked to classify, analyze, or summarize the input. For example, identify the following as plant or animal, to which the model will then respond, a giraffe is an animal, hibiscus is a plant, and cat is an animal. Lastly, we have the completion input. This is an input that the model is expected to complete. For example, fish cannot survive on land because, to which the model can then respond with these answers. Yup, this bunch of facts can confirm why fish cannot survive on land. Feel free to pause the video and read it if you find it interesting. So those are the four types of input that you can supply in your prompts, and now you can select which input type to use for your desired use case. Next, let's talk about the second part of a prompt, the context. The context part of a prompt helps the model to further understand what it is expected to do with the input. The prompts context can be one of the following instructions that specify how the model should behave, or information that the model uses
>
> **[4:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=283)** or references to generate a response. Context is necessary if you need to supply extra information to the model about the query or task, or scope the boundaries of the response you are expecting. For example, classify the following programming languages, C, C++, [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md), [JavaScript](../../Skills/Software%20Development/JavaScript.md) and [PHP](../../Skills/Software%20Development/PHP.md). Options are compiled or interpreted, to which the model can then respond with a compiled list, which consists of C, C++ and Rust, and an interpreted list, which consists of JavaScript and PHP. As you can see, we defined the boundaries of the classification to compiled and interpreted. If we had not done that, the model could randomly decide and use a classification format of its choice. It can also go on to supply a bunch of verbals information, when all we need is just a list. The last part of our prompt design that we'll be looking at is the example content. Examples in prompt design are used to define the structure, the expected response. This helps you to regulate the formatting, phrasing, scoping, and or general pattern of your responses. Let's take a look at an example of how we can use an example, no pun intended. Let's say we send the prompt, list five global holidays, but we want the response in a certain format.
>
> **[6:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=381)** So what do we do? We add the example like this, [1 January] New Year: first day of the year. This way, the model will know that it needs to add the date and description of the holiday and may even use the exact format we used. If we wanted to use the exact format we used in our example, we can add the phrase, using the format before defining our example. This way, the model will make sure to follow the exact structure of our example in presenting the response. There is a standard to how many examples are contained in a prompt design. When no example is added to a prompt, the prompt is referred to as a zero shot prompt. When a single example is added to a prompt, that prompt is called a one shot prompt. Prompts that have more than one example in them are referred to as few shot prompts. While the context and example parts of a prompt are not compulsory, adding context helps you define boundaries for your response and can be really helpful in generating more accurate responses. Also, it is recommended to always include few short examples in your prompts because they show the model how to apply instructions with very good examples. The context might even become redundant and you can decide not to add it. Now that we have a solid grasp on how to design our prompts,
>
> **[7:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=476)** we'll be looking at our responses that are generated, using the API in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (5), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **Definitions:** is a  (5), is an  (5), known as (1), is called (1)
> **Analogies:** for example (6)
> **CLI Commands:** php (2), cat (1), find (1), make (1)
> **Env Vars:** api (3), php (2)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Generating content](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=0)** - [Instructor] Now that we have mastered how to send requests to the API using well-crafted prompts, let's take a look at the process of generating a response and the types of responses. Depending on the model you're using, the [Gemini](../../Skills/Software%20Development/Gemini.md) API allows you to use both text and images in your prompts. As we learned earlier, the Gemini Pro model can take in only text as input, while the Gemini Pro-vision model is multimodal, meaning that it can take both text and images as input. To generate content, Gemini models use the generateContent method of the model's resource. Here we can see a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code snippet of the Gemini Pro model generating content with a text input. And here is another code snippet of the gemini pro-vision model generating content by taking both text and an image as input. While both models currently only return text as response, you can also build what is known as a multi-turn conversation with the response. A multi-turn conversation is a chat conversational format, meaning that you can build an interactive chat bot with the responses. This format lets you collect multiple rounds of questions and responses, allowing users to build a conversation with the model as they step towards answers or get help with multi-part problems. This multi-part conversation format is highly useful for building powerful AI powered features like interactive support assistance, smart AI tutors,
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=95)** support chatbots, and many more. Do note however, that this feature is currently only supported by the Gemini Pro model. The Gemini Pro-Vision model, while multimodal, does not support the multi-turn conversational format at the moment. Another type of response format you can get from the API are streamed responses. This allows you to receive your response from the API as a data stream. This helps you create a more interactive experience for the user by showing the answers as they become available instead of having the user wait for the whole answer to appear at once. This can be observed in our LLM chat bots like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and Gemini display the response to a query. The text comes in in parts and the user often reads along while more information is still coming in. And that's a wrap for this section where we have learned in details how the Gemini API works. In the next section we'll be getting hands on with the API, starting with generating an API key that will give us access to the Gemeni API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (10), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Env Vars:** api (8), llm (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** generatecontent (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Developing with the Gemini API

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting an API key](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=0)** - [Instructor] So far in this course, we have been getting ourselves familiar with what [Gemini](../../Skills/Software%20Development/Gemini.md) and the Gemini API is all about. The models, the API structure and functions, and how we can design inputs to generate desired outputs. In this section, we'll start getting practical with the Gemini API by using the API to perform some tasks. In this video, we are going to be creating an API key in [Google](../../Glossary/Service/Google.md) AI Studio. The Google AI studio is where you manage your Gemini API account, models, settings, and usage. You can also play around with a stable and preview models in the studio before you implement them in your applications. The API key we're going to be creating is required for us to have authenticated access to the Gemini API. To access Google AI Studio, head over to aistudio.[google.com](https://google.com) to begin the process, you'll need a Gmail account to sign into the AI studio. You'll be prompted to sign in with your Gmail account when you visit the AI studio address. I've already signed in so we can begin the process of creating an API key to use the Gemini API. To get started, go to the left hand corner of the dashboard and you will see a get API key link. Let's click that to go to the API Keys page. The API keys page is where you'll be able to create a new API key and also manage all the keys that you have created to create a new API key, click the create API Key button on the page. This will pop up a dialogue
>
> **[1:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=93)** where you can create a new API key. You'll need to create a new key in an existing [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) project. If you already have an existing project that you want to use, you can search for it using the search bar and select it. But for this demo, we'll be creating a new GCP project. To create a new Google Cloud platform project, head over to cloud.[google.com](https://google.com) to access the [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) console, you will already have an account as long as you're signed in with your Gmail account. Also, all the offerings in the free tier are enough for what will be demonstrating in this course on the Google Cloud platform homepage, click the console link at the top right hand corner. On the console welcome page, click the project dropdown at the top bar. This will bring up a list of all your existing projects on the Google Cloud platform. On the top right hand corner of the dialogue, click the new project button to create a new GCP project. On the project creation screen, fill in an appropriate name for your project. Say my demo Gemini API project. You can leave the location field as no organization and proceed to click create to create your new Google Cloud platform project. Google Cloud platform then goes to work creating your project. After a few seconds, you should see a notification that your project has been successfully created with our new project in place.
>
> **[3:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=187)** Now let's go back to Google AI Studio on the API Keys page in Google AI Studio. Refresh the page to ensure that the project list has been updated with your newly created GCP project. After refreshing, click the create API key button to pull up the dialogue once again. Now, when you click into the search bar, you should see the new project that we just created. If not, you can search for it using the name that you entered for the project. Once you project is selected, click the create API Key in Existing project button to create your Gemini API Key. Google AI Studio then goes to work creating a key for you to use in your code-based projects. Do ensure that you copy this key and store it in a secure place. Do not expose it to the public. Once copied, you can then close the dialogue box. If the key creator doesn't immediately show up in your API keys table, you can refresh the page. Now that we've refreshed the page, we can then see the key on our API keys table. The table shows a truncated version of the key, the project it was created in, when it was created, and a button for you to delete the key. You can also click the truncated key display to view the key anytime you want to copy it. Now that we have our API key in hand, we can now begin with the API demos in this section. But first, let's learn about the API endpoints
>
> **[4:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=281)** in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (8), [Google](../../Glossary/Service/Google.md) (8), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (6), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** api (27), gcp (3)
> **UI Navigation:** go to (2), dropdown (1)
> **URLs:** [google.com](https://google.com) (2)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### [API structure, models, and endpoints](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=0)** - [Instructor] Before we begin our demos with the [Gemini](../../Skills/Software%20Development/Gemini.md) API, let's take a look at how the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API is structured. As mentioned earlier in one of the previous videos, the Gemini API is under [Google](../../Glossary/Service/Google.md)'s parent [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) APIs. The best URL for all of Google's generative AI APIs is, [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com).
>
> **[0:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=28)** This is Google AI's service endpoint for its API service. You can find all the endpoints available on the API in the Gemini API documentation at ai.[google.dev/api/rest](https://google.dev/api/rest). This page shows all the endpoints, resources, and functions available on both the v1 and the v1beta versions of the API. To make a request to the Gemini API, here is how your URL is to be structured. https://, then we have the baseURL / the version
>
> **[1:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=72)** / the resource / the model : method,
>
> **[1:20](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=80)** then we have a question mark, we have the key parameter, which is set to our API_KEY. That's the API key we generated in a previous video. So first you have the baseURL, which is the service endpoint at [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com). Next is the API version, which can be v1 or v1beta, or any API versions subsequently released. After that is the resource, of which the value will be models in order to use the Gemini API. Next is the model itself. This is where we specify the model we want to use in our request. This can be Gemini Pro or Gemini Pro Vision, or any of the available models in the Gemini API suite. The model is then followed by a colon, after which is the method we would like to call. This can be any of the methods we looked at earlier under the model's resource, for example, countTokens, to return the total number of [Tokens](../../Skills/Web%20Development/Tokens.md) in the input content, or generateContent, which is the main generative method on the model's resource. We will be seeing this method in action later on. Finally, we have the question mark, followed by a query parameter called key. This parameter allows us to pass our API key in our request to the Gemini API. Without this key, our request will not be served by the API. Do note that the list and get methods
>
> **[2:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=177)** of the model resource are exceptions to this request format. Shown on the screen is the request URLs for both the get and the list methods of the model's resource. The get URL takes the model name as the last item to retrieve details about the specific model. Now that we understand the structure of an API request URL, let's take a look at an example. Let's say we want to send a prompt to the Gemini API in order to get back an AI generated response. Here is what the URL will look like. [https://generativelanguage.googleapis.com/v1/models](https://generativelanguage.googleapis.com/v1/models)/
>
> **[3:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=219)** gemini-pro:generateContent?=$API_KEY.
>
> **[3:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=228)** As you can see in this example, we have our baseURL, the version, which is v1, we are targeting the models resource, and using the Gemini-Pro model on which we are calling the generateContent method. Each request to a method on the API also requires a standard input format in the request body in order to know what the request format looks like for each API method. Once again, let's look at the REST API documentation at ai.[google.dev/api/rest](https://google.dev/api/rest). Here, when we scroll down, we can click on any function to see details about what the request and response will look like. Let's scroll down and locate the models resource on the v1 version of the API and see what the expected request body for the generateContent method looks like. Scroll down, skip all the v1beta model, and yeah, this is v1 models. Now, under the v1 models, let us click generateContent. On the generateContent method page, if we scroll down to the request body section, we can see a [JSON](../../Skills/Web%20Development/JSON.md) representation of the expected request body. It's an object containing three parts, the contents array, the safety settings array, and the generation config object. The content array is used to pass in inputs, both text and images, if supported
>
> **[5:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=321)** by the model variant we're using. The safety settings array is used to pass settings that tune the censorship of the model. Lastly, the generation config object is used to pass settings that define how content is generated, for example, the temperature. In this beginner course, we'll only be looking at the contents parameter, which is the only mandatory parameter in the request body. For more details on other parameters, you can always check out the Gemini API documentation. The contents array is an array of objects of the content type. Remember, we mentioned earlier that the API consists of both resources and types. Each content object in this array is a single instance of the content type and can contain both text and images. To see what a content type looks like, we can click to see a JSON representation of its structure. The content type consists of a parts array, which is an array of objects of the parts type. It also contains a role string, an optional parameter, which allows you to define the role of the producer of the content. This can either be the user or the model itself. If left out, the user role is assumed by default. The part also has a standard format, and we can click part to view that. The part type consists of two parameters, text, which represents the actual textual input, and does text as string,
>
> **[6:54](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=414)** and inline data, which takes a binary large object and is where you put in your images. The blob object also expects two parameters, the mime type of the image being sent, and a string representation of the binary object encoded in base64. With all this information in hand, we can now start to query our Gemini API. In the next video, we'll run our first API call using the REST full API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (14), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (5), [Google](../../Glossary/Service/Google.md) (5), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** api (27), url (5), rest (3), api_key (2), json (2)
> **Code Identifiers:** generatecontent (6), baseurl (3), counttokens (1)
> **URLs:** [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com) (2), [google.dev](https://google.dev) (2), [https://generativelanguage.googleapis.com/v1/models](https://generativelanguage.googleapis.com/v1/models) (1)
> **UI Navigation:** scroll down (4), click on (1)
> **Cross-References:** earlier in (1), previous video (1), we mentioned (1), in the next (1)
> **API Endpoints:** /api/rest (2), /v1/models/ (1)
> **Definitions:** is an  (2), is a  (1)

#### [Using the REST API](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=0)** - [Instructor] In this video, we'll be performing our first demonstration of using the [Gemini](../../Skills/Software%20Development/Gemini.md) API by making a request to it using the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API. In order to do this, we will need an HTTP client to make the HTTP call to the API. While we can do this from our command line using a utility like cURL, that's cURL, I've chosen to use the Postman software for a more visual experience. You can download Postman for free for any platform of your choice at their website. Once downloaded, open up Postman, and let's get started with our demo. In this demo, we'll be sending a prompt to the Gemini Pro model to generate a response using the Generate content method. If we navigate to the generate content documentation for the model's resource, we'll see that this is a post request to be sent to the URL using the standard format that we described in a previous video. So the first thing we'll be doing in Postman is to set the request method for this request to post. Next, let us type in our request URL as we have learned in the previous video. To begin, we start with the base URL, which is the Gemini API service URL, generativelanguage.[googleapis.com](https://googleapis.com).
>
> **[1:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=89)** Do make sure that you spell this URL correctly so that we can know that we are hitting the right address. Next is our API version, and that will be the V1 stable version. After that, we have the API resource we want to use. And for the Gemini API, that will be models. Right after that is the name of the model we want to use for this request, and that will be the Gemini Dash Pro model. Then to call our model method, we first add a colon, then the name of the method we want to call, which is the generateContent method. Also, make sure that you have spelt this model method correctly. Finally, we pass our API key by ending the part with a question mark and writing our key parameter. Remember to grab the key from where you have copied it and paste it after the equal sign for the key parameter. Now that our request URL is locked in, let's now construct our request body. On Postman, click the body tab below the address field. On the list of request format options, select raw as your choice. A dropdown automatically appears beside this list. Click the dropdown and select the [JSON](../../Skills/Web%20Development/JSON.md) option. Now we can build our request body using JSON. Let's begin by first dragging down this response window so that we can have some space. And now let's open our adjacent request object
>
> **[3:02](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=182)** in the window below. The first thing we're going to add is our content parameter, and we'll set that to an array. Inside the array, let's create a single content type object. Inside this content object block, let's add our array of part types with the parts parameter. For this request, we will only be needing one prompt. So open an object to define the single prompt as a part object. Because we are calling the Gemini Pro model, which only supports text as input, we will only be adding the text parameter to this part object, and we set that to a string. Inside this string we can then write our prompt, which is what we want the model to respond to. Let's say we want the model to write a short piece on humming birds. We tell the model, write a short piece on humming birds.
>
> **[4:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=243)** Perfect. Now that we have our request URL and our request body all set up, it is time to fire our request. So let's go ahead and hit the send button, hoping all goes well and we don't get any errors and wait for our response. As you can see, our request is now complete and our response is back, thankfully with no errors. So let's take a look at the response that we got back. This response contains so many parts, starting with the candidates block. The candidates array contains different reply options that Gemini has given to us to choose from. With the default generation settings, only one response candidate is returned like we have here. Each candidate comes with a bunch of information, but what we are most concerned about is the content object, which is of the type content. If we drill down to the parts parameter into the first part object, we see the text that returns our response from the Gemini model. Here we can see a short piece that Gemini has written about humming birds. "Humming birds, the tiniest of birds, are a captivating spectacle of nature with iridescent colors and an enchanting hum. They dart through the air with grace and agility." Quite interesting, and with this successful response, we have been able to call the Gemini API with a request prompt and get a response back. In this video, we have used the rest API
>
> **[5:40](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=340)** by directly calling a Gemini API endpoint. In the next video, we'll be using one of the SDKs of the popular programming languages to demonstrate how to work with Gemini more efficiently within our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (12), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** api (11), url (7), http (2), json (2)
> **Tools:** postman (5), command line (1)
> **CLI Commands:** make (3), curl (2)
> **UI Navigation:** dropdown (2), navigate to (1), select the (1)
> **Code Identifiers:** curl (2), generatecontent (1)
> **Cross-References:** previous video (2), in the next (1)
> **URLs:** [googleapis.com](https://googleapis.com) (1)

#### [Using a programming language SDK](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=0)** - [Instructor] In the last video, we called the [Gemini](../../Skills/Software%20Development/Gemini.md) API, using the RESTful API by using an HTTP client. In this video, we're going to be looking at a more efficient way to work with the Gemini API in our code base by using a client SDK. A client SDK is a software library designed for a programming language to abstract complexities of working with an API of a service or another software. Gemini has client SDKs for different popular programming languages, like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), [Node.js](../../Skills/Web%20Development/Node.js.md), Golang, and many others. There are also SDKs for mobile platforms like [Android](../../Glossary/Sdk/Android.md) and a [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) library for iOS. In this video, we're going to be making use of the Node.js SDK to interact with the Gemini API, using the same example prompt as we did in the last video. To follow along with our demo in this video, you will need to have Node.js installed on your machine. You can install Node.js by going to the Node.js website, [nodejs.org](https://nodejs.org), to download any of the stable version installation files for your operating system. Once installed, Node.js also comes bundled with its default package manager [npm](../../Skills/Web%20Development/npm.md), which we're going to be using to install a package. You can confirm that you have Node.js installed on your system by running the command node -v in your terminal. This should print out the version of Node.js you have installed to your console. The Gemini API requires at least Node.js version 18, so make sure that your Node.js version is 18 or above.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=98)** Once you have confirmed your installation of Node.js, we can then begin with the demo. Let's start by creating a folder for the project. In our terminal, let's write, make directory, Gemini, API, demo. I have chosen to do this from a terminal, but you can also do it using your File Explorer window. Press enter to create our folder. Then let see into the folder. And now, we can start initializing our Node.js project. To set up a new Node.js project, run the command npm init -y. This will make sure that we have a package.[JSON](../../Skills/Web%20Development/JSON.md) file set up and skip the whole interactive process of setting it up. Perfect. Let's clear the screen so we can have some space. The next thing we're going to do is to install the client's library for Node.js for working with the Gemini API. This package is available on the NPM package repository @[Google](../../Glossary/Service/Google.md)/[generative-ai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). We're going to be installing it by running this npm command. So let's head over to our command line and do just that. So back in our command line, at the root of our project, let's run npm install @Google/generative-AI. And let's hit enter to install the package. Our package is now installed,
>
> **[3:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=192)** so let's head over to our code editor and start some coding. Here in my code editor, which is Visual Studio Code, I have opened up the folder that we created for our project, which is Gemini API demo. We have our package.json file, and we have our node modules folder where we have just installed our Google [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) SDK for Node.js. To begin writing our code, let's create a new file and call that file index.js. Inside this file, first, let us bring in our Node.js Gemini API SDK using the required function. We say @Google/generative-ai.
>
> **[4:01](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=241)** Now, from this library, we'll need to extract the Google generative AI class. To do that, I'm going to create a new variable, and I'll set that to an object. Set the value to equal our require function, and we can bring in our GoogleGenerativeAI class.
>
> **[4:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=266)** Let me pull this to the side. With this class in place, we can then create a new instance of the GoogleGenerativeAI object by passing it our API key. Say const GoogleGenAI equals new. Create a new instance of our GoogleGenerativeAI and we'll pass it a string. And that string will be our API key. Next, let us create an async function that will run our request to the API. Say async, function, runPrompt. Good. Inside this function, the first thing we'll do is to select the model we want to work with. This will be done by passing the configuration object with the model specification to the generative AI object. In the code just written, we have created a new model variable called the getGenerativeModel function on our GoogleGenAI object. And specify that we want to use the gemini-pro model. We now have everything set up to send our request, so let's write our prompt and send it to the API. We're going to be sending the same prompt, so we say write a short piece on hummingbirds.
>
> **[5:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=346)** We can then pass this prompt to the model by calling the generate content method on our model and giving it the prompt as its argument. To wrap up our function, let's now print our results to the console.
>
> **[6:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=367)** Our response is going to be available on the text function of the response object, which is returned from our API call. Finally, let us call our function so that it runs our code when we run this Node.js file. Perfect. Now that we have all our code in place, let us save the file and run it in our console. So back here in our console at the root of the project, let us run the command node index.js. As this is an asynchronous process, it'll take some few seconds for the response to return. So let's hit enter and wait for our response. And voila, we have our short piece on hummingbirds, just as we did in our last video, but this time, using the client SDK. Using client SDKs provides a more coordinative interface to work with the Gemini API, and it is recommended for using the Gemini API in your coding projects. And that's a wrap on our demos using the Gemini API. I hope you have enjoyed it. Let's now head over to the next video for some next steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (17), [Gemini](../../Skills/Software%20Development/Gemini.md) (13), [npm](../../Skills/Web%20Development/npm.md) (5), [Google](../../Glossary/Service/Google.md) (5), [Generative-ai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (3)
> **CLI Commands:** node (20), npm (5), make (3), python (1)
> **Env Vars:** api (18), sdk (6), http (1), npm (1)
> **File Paths:** node.js (17), package.json (2), index.js (2)
> **Prerequisites:** install (5), set up (3)
> **Tools:** terminal (3), command line (2), visual studio (1)
> **Code Identifiers:** ios (1), runprompt (1), getgenerativemodel (1)
> **Cross-References:** in the last (2), next video (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=0)** - I hope you have enjoyed this introduction to using the [Gemini](../../Skills/Software%20Development/Gemini.md) API, and I hope that this course has given you a better understanding on how to use the Gemini API in your applications. The [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library is full of a ton of AI courses, and I will specifically recommend that you check out my other Gemini course, building an Image caption generator using the Gemini API. This course will give you a more practical guide on using the Gemini API in a production application as we build an entire application that uses the Gemini API for its AI powered features from start to finish. Whether you're a programmer just looking for APIs to use to add AI POD features to your applications, or you are a data scientist that wants to build your own AI models from scratch, there are courses in the library for every use case. So I highly recommend that you check out more courses in the library to further ground your knowledge of building AI powered applications. Once again, I am Fikayo Adepoju, and you can reach me on any of my socials displayed on the screen. On LinkedIn using my name, on Twitter @coderonfleek, and on [GitHub](../../Skills/Software%20Development/GitHub.md), also @coderonfleek. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** api (5), pod (1)
> **Tools:** github (1)
> **Speakers:** - i (1)


## Instructor

- [Fikayo Adepoju](../../Instructors/Artificial%20Intelligence%20(AI)/Fikayo%20Adepoju.md)

## Skills Covered

- API Development
- Generative AI
- Artificial Intelligence (AI)
- Gemini
- Google Gemini

## Path Context

### In [A Developer's Guide to Google Gemini](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/A%20Developer's%20Guide%20to%20Google%20Gemini.md)
← [Exploring Million-Token Models with Google Gemini Pro 1.5](Exploring%20Million-Token%20Models%20with%20Google%20Gemini%20Pro%201.5.md) | **3 of 8** | [Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md) →

## Appears In

- [A Developer's Guide to Google Gemini](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/A%20Developer's%20Guide%20to%20Google%20Gemini.md)

## Related Courses

_Courses sharing skills:_

- [Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md) — Generative AI, Artificial Intelligence (AI), Google Gemini
- [Building with Google Gemini Advanced and Ultra](Building%20with%20Google%20Gemini%20Advanced%20and%20Ultra.md) — Generative AI, Artificial Intelligence (AI), Google Gemini
- [Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md) — Generative AI, Artificial Intelligence (AI), Google Gemini
- [Prompt Engineering with Gemini (2024)](Prompt%20Engineering%20with%20Gemini%20(2024).md) — Artificial Intelligence (AI), Google Gemini, Gemini
- [Google Gemini For Developers](Google%20Gemini%20For%20Developers.md) — Generative AI, Artificial Intelligence (AI), Google Gemini

---

[↑ Back to top](#)