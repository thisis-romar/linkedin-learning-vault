---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-project-with-the-chatgpt-api
url: "https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api"
duration_minutes: 116
duration: 1h 56m
level: Intermediate
updated: 12/22/2023
learners: 2608329
skills:
  - Chatbot Development
  - OpenAI Products
  - Artificial Intelligence (AI)
  - Application Development
exercise_files: true
github: "https://github.com/LinkedInLearning/building-a-project-with-the-chatgpt-api-4484140/tree/main"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFcICjaYZlNsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703108198308?e=2147483647&amp;v=beta&amp;t=xpfc5YPCA8XfzzvHmUlfTsKfXGXyZq4eUVh89CmxTlk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Improve Your Programming Skills with Artificial Intelligence](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Improve%20Your%20Programming%20Skills%20with%20Artificial%20Intelligence.md)'
prev_courses:
  - '[AI Pair Programming with GitHub Copilot](AI%20Pair%20Programming%20with%20GitHub%20Copilot.md)'
path_nav: '[{"path":"Improve Your Programming Skills with Artificial Intelligence","position":4,"total":4,"prev":"AI Pair Programming with GitHub Copilot","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/devops
  - topic/software-development
  - skill/chatbot-development
  - skill/openai-products
  - skill/artificial-intelligence-ai
  - skill/application-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20a%20Project%20with%20the%20ChatGPT%20API.md)

![Building a Project with the ChatGPT API](https://media.licdn.com/dms/image/v2/D560DAQFcICjaYZlNsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703108198308?e=2147483647&amp;v=beta&amp;t=xpfc5YPCA8XfzzvHmUlfTsKfXGXyZq4eUVh89CmxTlk)

# Building a Project with the ChatGPT API

> Generative models produced by OpenAPI, like ChatGPT, have rapidly advanced AI development, particularly the ability to incorporate AI into applications. In this hands-on course, instructor Kesha Williams takes a deep dive into the world of OpenAI's powerful language models, equipping you with the technical know-how you need to leverage their full potential and create innovative AI-driven solutions

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api) | 1h 56m | Intermediate | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to the OpenAI API](#introduction-to-the-openai-api)
  - [Review the OpenAI API scenario](#review-the-openai-api-scenario)
- [**1. Understanding the OpenAI Platform**](#1-understanding-the-openai-platform) (3 videos)
  - [Explore the OpenAI platform](#explore-the-openai-platform)
  - [Understand generative AI models](#understand-generative-ai-models)
  - [Access models using the OpenAI API](#access-models-using-the-openai-api)
- [**2. Exploring the OpenAI API**](#2-exploring-the-openai-api) (8 videos)
  - [Create chatbots using chat completion](#create-chatbots-using-chat-completion)
  - [Generate text using text completion](#generate-text-using-text-completion)
  - [Measure relatedness using embeddings](#measure-relatedness-using-embeddings)
  - [Turn audio into text using Whisper](#turn-audio-into-text-using-whisper)
  - [Generate images using DALL-E](#generate-images-using-dall-e)
  - [Customize a model using fine-tuning](#customize-a-model-using-fine-tuning)
  - [Examine key concepts](#examine-key-concepts)
  - [Understand pricing models](#understand-pricing-models)
- [**3. Setting Up Your Environment**](#3-setting-up-your-environment) (3 videos)
  - [Install Python and Jupyter Notebook](#install-python-and-jupyter-notebook)
  - [Sign up for an OpenAI API account](#sign-up-for-an-openai-api-account)
  - [Test the APIs](#test-the-apis)
- [**4. Writing a Prompt for ChatGPT**](#4-writing-a-prompt-for-chatgpt) (4 videos)
  - [Explore chat completion API call](#explore-chat-completion-api-call)
  - [Review chat completion API response](#review-chat-completion-api-response)
  - [Challenge: Build a dialog using chat completion](#challenge-build-a-dialog-using-chat-completion)
  - [Solution: Build a dialog using chat completion](#solution-build-a-dialog-using-chat-completion)
- [**5. Constructing a Multi-Turn Conversation with ChatGPT**](#5-constructing-a-multi-turn-conversation-with-chatgpt) (3 videos)
  - [Construct a multi-turn conversation](#construct-a-multi-turn-conversation)
  - [Challenge: Generate tweet content using chat completion](#challenge-generate-tweet-content-using-chat-completion)
  - [Solution: Generate tweet content using chat completion](#solution-generate-tweet-content-using-chat-completion)
- [**6. Generating an Image Using DALL-E**](#6-generating-an-image-using-dall-e) (4 videos)
  - [Explore images API call](#explore-images-api-call)
  - [Review images API response](#review-images-api-response)
  - [Challenge: Generate images using images API](#challenge-generate-images-using-images-api)
  - [Solution: Generate images using images API](#solution-generate-images-using-images-api)
- [**7. Integrating with the Twitter API**](#7-integrating-with-the-twitter-api) (4 videos)
  - [Sign up for a Twitter API account](#sign-up-for-a-twitter-api-account)
  - [Explore Twitter API call and response](#explore-twitter-api-call-and-response)
  - [Challenge: Post a tweet using the Twitter API](#challenge-post-a-tweet-using-the-twitter-api)
  - [Solution: Post a tweet using the Twitter API](#solution-post-a-tweet-using-the-twitter-api)
- [**8. Troubleshooting Errors and Getting Help**](#8-troubleshooting-errors-and-getting-help) (2 videos)
  - [Understand common error codes](#understand-common-error-codes)
  - [Get help from the community](#get-help-from-the-community)
- [**9. Effectively Managing API Costs**](#9-effectively-managing-api-costs) (1 videos)
  - [Manage your spend](#manage-your-spend)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your OpenAI API journey](#your-openai-api-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the OpenAI API](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=0)** - You've heard of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), but did you know that [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) like it are transforming industries like finance, healthcare, education, government, and more? Right now we have an incredible opportunity to harness the power of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) technology to elevate our applications to new heights. And that's why in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, I will teach you how to use ChatGPT for practical [Application Development](../../Skills/Software%20Development/Application%20Development.md). Together we will unlock new development capabilities using both theory and hands-on challenges. I'm Kesha Williams and I've helped hundreds of thousands of people leverage AI tools and machine learning technologies, and I'd love to help you. So if you're ready, join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1)
> **Speakers:** - you (1)

#### [Review the OpenAI API scenario](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=0)** - During our time together, you'll learn how to use the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) and [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) or LLMs like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and [DALL-E](../../Skills/Software%20Development/DALL-E.md). We'll use them to build practical applications that were expensive and nearly impossible just a few years ago. What I love about this course is that it's not just theory. With each lesson, you'll have an opportunity to reinforce the concepts through fun hands-on challenges. By the end, you'll have developed an intelligent [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-based application, powered by LLMs. The application you develop will review a website and summarize the content of that website in a tweet-friendly format. Once the website is summarized, your application will generate a custom image from scratch based on that summary. The image and summary will be composed into a tweet that is sent to your followers through an integration you build with a Twitter API. Each hands-on challenge builds upon the previous challenge, allowing you to build your confidence as you watch your knowledge grow. As we go through each coding challenge, I'll show you how to make it your own by extending and customizing the code to suit your interests. I encourage you to start thinking about the information you'd like to share with friends and followers on X, formerly known as Twitter.
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=95)** Maybe it's about your favorite sports team, a place you'd like to explore, a mountain you'd like to hike, recipes from your favorite restaurant, your favorite subject in school, or tips for new parents. The possibilities are endless. If you know me, you know I'll be tweeting about [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), of course. And one more thing, this course has a lot of links. To access them all in one spot, go to your Exercise Files and download the Resources handout. Now it's time to ignite your imagination as we explore the world of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md), LLMs, ChatGPT, OpenAI and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (2), dall (1)
> **CLI Commands:** python (1), make (1)
> **Exercise Files:** exercise files (1), download the (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - during (1)


### 1. Understanding the OpenAI Platform

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the OpenAI platform](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=0)** - By unleashing the power of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), OpenAI's innovation is where minds and machines unite. OpenAI is an AI research and development company with a goal to promote and develop friendly AI. If you haven't heard of them before, they are the creators of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), which I know you've heard of. ChatGPT is an AI-powered chat bot that managed to take AI mainstream overnight. OpenAI has developed multiple [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) or LLMs. LLMs are machine learning models trained on massive amounts of text data from a wide variety of sources. ChatGPT is based on the GPT family of LLMs. The GPT family continues to evolve as OpenAI advances the models and adds new capabilities. So what is the difference between ChatGPT and GPT? Well ChatGPT is an intelligent chat bot with a web application interface that is powered by GPT, allowing you to hold an intelligent conversation with it. ChatGPT generates answers to your questions and adjusts the responses based on your conversation history. The more you interact with it, the more you'll train the model to provide more accurate answers. Let's have fun asking ChatGPT about itself.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=97)** Let's pose the simple question, "What are you?" And the answer is "I am ChatGPT, an AI language model developed by OpenAI." It goes on to talk about its architecture, which is based on GPT-3.5 and that it's been trained on a diverse range of text from the internet, books, articles, and other sources up until September, 2021. I'll let you read the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). The next question we can pose, let's see if it's smart enough to answer this question. "What is your relationship to GPT-3?" And it goes on to say, "As I told you earlier, I am ChatGPT, an AI language model based on the GPT-3.5 architecture." The next paragraph talks about GPT-3, which is a generative model, and then it talks about GPT-3.5 being an extension or improvement of the GPT-3 model. If you haven't had an opportunity to try ChatGPT, I encourage you to play around with it so you can see how intelligent this artificial intelligence really is. Other models from OpenAI include [DALL-E](../../Skills/Software%20Development/DALL-E.md), which creates images and art from a simple text description
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=192)** and Whisper, which transcribes audio to text and translates languages. OpenAI also provides developers access to their models using an application programming interface or API, which we'll use to integrate GPT and DALL-E into the application we develop later in this course. As you learn about the API, I guarantee you'll see its power.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (10), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (2), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** gpt (11), dall (2), api (2)
> **Definitions:** is an  (3), is a  (1)
> **Versions:** 3.5 (3)
> **Cross-References:** later in (1)
> **Speakers:** - by (1)

#### [Understand generative AI models](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=0)** - Developers are creators. We love to take an idea or concept from a set of requirements on paper to a tangible product that improves the world. We build new things. [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) models are much like developers, they use learning patterns from data they're trained on to create new things like music, images, text, and other content like poetry or blog posts. [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), or LLMs, like OpenAI's GPT family of models, fall under the generative AI umbrella because they are used to generate something new, like the next [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in a sentence based on the previous words. When considering LLMs, there are generally two types, the base or foundation model, and the fine-tuned models retrained for specific task. This further illustrates the difference between GPT and [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) I introduced in the previous video. ChatGPT is a fine-tuned model from a foundation model in the GPT-3.5 family. ChatGPT is fine tuned to hold a dialogue by following instructions in a prompt or question and providing a detailed response called a completion. So, how are foundation models trained? They use large amounts of unlabeled data, like a massive collection of text data, webpages, books, and other sources to perform a wide variety
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=98)** of [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), or NLP, tasks. Foundation models learn a representation that generalizes well to many generative tasks. LLMs are trained to process natural language data using the transformer architecture, a type of neural network that learns to transform input sequences into output sequences. This architecture is often used to learn contextual relationships between words in a sentence. And by the way, the name GPT comes from generative pre-trained transformer. There are several models in the GPT family, GPT-3.0, a set of models that can understand and generate natural language, text-davinci-003, text-curie-001, text-babbage-001, and text-ada-001. GPT-3.5, a set of models that improve on GPT-3 and can understand and generate natural language or code. Developers who use the GPT-3.5 Turbo model will always get the recommended stable version of that model. [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md).0, a set of models that improve on GPT-3.5 and can understand and generate natural language or code. ChatGPT is fine tuned from a model in the GPT-3.5 series using [Reinforcement Learning](../../Skills/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning.md) from human feedback, or RLHF.
>
> **[3:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=197)** The method includes an initial model that's trained using supervised [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md). This is where human AI trainers provide data in the form of conversations where they play both sides, the user and an AI assistant. Then, a reward model is created using reinforcement learning. The training data for the reward model consists of responses ranked by quality. I'm sure OpenAI will continue to iterate by introducing evolved models. The pace of innovation in AI is astounding. Now that you understand generative AI models available from OpenAI, let's explore the API you'll use to access these models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (3), [Reinforcement Learning](../../Skills/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** gpt (12), nlp (1), rlhf (1), api (1)
> **Versions:** 3.5 (5), 3.0 (1), 4.0 (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - developers (1)

#### [Access models using the OpenAI API](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=0)** - The OpenAI application programming interface or API, gives you access to a world of creativity that can be integrated into your existing applications. It allows developers to access their AI models programmatically from application code. This means developers can add intelligence to any application by making a simple API call to access LLMs created by OpenAI. In order to do this, the first step is to authenticate to the API using an API key. I'll show you how to generate this API key in an upcoming video. Once you're authenticated, you'll make a request to a specific model like gpt-3.5. Using a prompt like "Which olive oil is best for cooking?" There's an attempt to match the input pattern you provided to an output value using tokenization. The gpt family of models processes text using [Tokens](../../Skills/Web%20Development/Tokens.md), which are a common sequence of characters found in text. For example, the string tokenization is decomposed as token and ization. While a short and common [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) like "The" is represented as a single token. When the model returns a response or completion, it is actually predicting the next token, not the next word. In our example prompt,
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=92)** "Which olive oil is best for cooking?" there are eight tokens. OpenAI provides a tool to help you count tokens and better understand how a piece of text would be tokenized by the API and the total count of tokens. It's important to understand tokenization because of rate limitations placed on the API calls and cost associated with using the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). The calls to the APIs are limited using the TPM, or token per minute, which differs based on the model. You are also billed per token when using the API. For instance, gpt-3.5-turbo costs $0.002 per 1,000 tokens.
>
> **[2:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=143)** You are billed based on the number of tokens sent in your prompt, plus the number of tokens in the completions returned by the API. We'll discuss the pricing model and ways to effectively manage your costs in an upcoming lesson. Once the model predicts the next token, you'll get a response called a completion. In our case, the suggested olive oil. I'm interacting with the gpt-3.5-turbo model using the playground environment provided by OpenAI, which makes it easy to prototype with the models. In this course, we'll use OpenAI's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Library to access the API endpoints programmatically from our application code. Now that you understand how to access models using the OpenAI API, let's explore it in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (7), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (12), tpm (1)
> **Versions:** 3.5 (3), 0.002 (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** for example (1), for instance (1)
> **Speakers:** - the (1)


### 2. Exploring the OpenAI API

[↑ Back to Table of Contents](#table-of-contents)

#### [Create chatbots using chat completion](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=0)** - You will not believe how easy it is to use [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) to add interactive assistance and improve user experiences within your applications. The Chat Completions API is used to pass a list of messages to the model as input and receive a model generated response as output. The conversation can be single-turn without a back and forth conversation or multi-turn. Do you remember when I explained tokenization to you? If you recall, traditional GPT models consume unstructured text, which is represented to the model as a sequence of [Tokens](../../Skills/Web%20Development/Tokens.md). This is considered text in and text out, where a prompt string is accepted and a completion to append to the prompt is returned. Unlike traditional GPT models, the ChatGPT, like GPT-3.5 and [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) models, are conversation in and message out. That is, the model takes in a series of messages along with [Metadata](../../Skills/Web%20Development/Metadata.md). I bet many of you are thinking, "How does this work under the hood?" Well, the messages are still translated to tokens before they are consumed by the model, but our interaction with the model is through a series of messages. Here's the format of a basic Chat Completion. Let me explain using code. You can follow along by accessing the Exercise Files in [GitHub](../../Skills/Software%20Development/GitHub.md).
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=94)** We'll be using the file 02_01 for this video. We'll be using Jupyter Notebooks for the environment. If you haven't used [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or Jupyter Notebooks, I don't expect you to get into the code right now. I'll go more in depth about setting up your environment in Chapter 3. You'll also get a chance for some hands-on challenges in a later chapter. Now going into our code, here's the format of a basic Chat Completion. You'll notice here on line 4, the first line in the array is the system message. The system message sets the context for the model and sets the persona for the AI assistant. You'll customize this each time for your specific use case After the system message, here on line 6, you include a series of messages between you, the user, and the AI assistant. A sample conversation would look like this. IN the system message. you pass in the context. "You are a helpful assistant that acts as a sous chef." The next prompt comes from you, the user, and it says, "When should I use Capellini pasta?" I've already executed this code, and I've printed out the response. You'll notice that the model talks about Capellini pasta, also known as angel hair pasta, and it offers up four suggestions on when to use Capellini pasta, light tomato sauces, classic Italian dishes,
>
> **[3:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=190)** light seafood dishes, and Asian-inspired dishes. And just like a great sous chef, it provides tips so that you do not overcook the pasta. You'll see the model is wordy, and this is a known challenge. Don't forget that we are charged per token on the input and the output. To fix this, we could change the initial message to teach or train the model what we expect back, and this is a brief introduction to [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md). Notice here, the system message is exactly the same, but the second prompt, I've tweaked it just a bit. Now it reads, "Can you tell me when I should use Capellini pasta in 15 words or less?" And notice the response back. "Capellini pasta is best used in delicate, light dishes, like simple sauces or seafood." This course will use OpenAI's Python library to access the API endpoints. However, you can test them directly from tools like cURL or Postman. Now that you understand how to create chatbots using Chat Completion, let's look at the Text Completion API and explore the differences between the two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** gpt (4), api (3)
> **Tools:** jupyter (2), github (1), postman (1)
> **CLI Commands:** python (2), curl (1)
> **Definitions:** is a  (2), known as (1)
> **Code Identifiers:** curl (1)
> **Versions:** 3.5 (1)
> **Exercise Files:** exercise files (1)

#### [Generate text using text completion](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=0)** - The possibilities of what you can create with the Completions API are limitless. You can generate and edit content, and code to complete task in a matter of minutes, not hours. The Completions API uses the text in, text out format for a wide variety of tasks. The input is a simple text prompt with a model generating output that matches the context or pattern you provide. The Completions API is backed by a traditional GPT model that consumes unstructured text, which you already know is represented to the model as a sequence of [Tokens](../../Skills/Web%20Development/Tokens.md). A simple example input would be, "Write a title for a course on the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md)." With the output being, "Getting Started with the OpenAI API: A Comprehensive Guide." Have you considered what would happen if you provided the exact same prompt to the model again? You may actually see a different result. Let's test this out. Using the same prompt, write a title for a course on the OpenAI API. Let's execute this code to see what happens. The response is "Getting Started with the OpenAI API: Unlocking the Power of AI." This happens because the model is considered stochastic! The responses are generated randomly based on
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=94)** the input and the model's [Probability](../../Skills/Data%20Science/Probability.md) distribution. Imagine reaching into a jar filled with different colored balls. Each ball represents a possible outcome, and the color of each ball represents the probability of that outcome occurring. The outcome is stochastic because you cannot predict which color ball you will pick, but each specific color has a known probability of being chosen. You can control the randomness of the model by using the temperature attribute. Lower values result in more consistent outputs, while higher values generate more random results. You'll notice the Completions API is similar to the Chat Completions API, but there are differences. Instead of the input being a list of messages, it's freeform text. Another difference is the underlying GPT models available to each. The Chat Completions API interfaces to [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) and GPT-3 0.5 Turbo, and the Completions API interfaces with GPT-3.0, and anything before. Developers often opt to use the Chat Completions API over the Completions API, because it's more cost-effective, and handles complex tasks better. From my experience, the newer models are more creative as well. Here's the link to the endpoint
>
> **[3:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=189)** to carry out the interaction with the Completions API. This course will use open AI's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library to access the API endpoints. However, you can test them directly from tools like Curl or Postman. Now that you understand how to generate text using text completions, let's explore the use cases for the Embeddings API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (4), [Probability](../../Skills/Data%20Science/Probability.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (16), gpt (5)
> **CLI Commands:** python (1), curl (1)
> **Versions:** 0.5 (1), 3.0 (1)
> **Analogies:** imagine (1), similar to (1)
> **Prerequisites:** getting started (2)
> **Tools:** postman (1)
> **Definitions:** is a  (1)

#### [Measure relatedness using embeddings](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=0)** - Have you ever wondered how advanced searching works? What about detecting emotions and product reviews or extracting underlying topics or themes from a collection of text documents? Well, today you are going to find out. The Embeddings API measures similarities of text strings by mapping text and even code to a vector, also known as a list representation. This transforms text into a sequence of floating point numbers. This numeric representation of text enables machine learning models and [Algorithms](../../Skills/Software%20Development/Algorithms.md) to comprehend the connections and associations among concepts more easily. The distance between two vectors measures their relatedness. For example, if two pieces of text are similar, their vector representations should also be similar. Think of embeddings like a map. Just as a map represents the spatial relationships between different locations, a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) embeddings model represents the semantic relationships between words. Embeddings are often used for advanced document searches like: querying a knowledge base to find the most relevant article, sentence similarity where the model captures semantic similarities and differences based on the context and meaning of the words, Text classification like analyzing and classifying the sentiment expressed as positive or negative in product reviews,
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=96)** clustering, like identifying and extracting underlying topics or themes from a collection of text documents without prior knowledge of the topics, code search that includes code recommendations for software developers and more. The models take either text or code as input and return an embedding vector. Let's see the Embeddings API in action. The word embeddings model might indicate that these sentences are somewhat similar because they both involve animals, cat and dog, and objects they are situated on, mat and rug. However, it may also recognize differences, such as the verbs use, sitting versus lying, and the specific animals involved. Let's walk through the code. In this cell, the input is, The cat is sitting on the mat. Let's execute this cell, and we see the response is a list of word embeddings. Let's scroll down to the next cell. The input for this cell is, The dog is lying on the rug. Let's execute this. And again, we see our output is a list of embeddings. Let's scroll down. After retrieving the sentences embeddings, we'll calculate the cosine similarity. The cosine similarity is a measure of similarity between two non-zero vectors.
>
> **[3:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=191)** The value can be between 0 and 1. The closer the value is to 1, the more similar the vectors are. Here in this cell, I'm checking the length because the vectors need to be the same length for the comparison. And let's check the length on the dog_embeddings vector. They are both the same length, so we are good to proceed. In this cell, I am computing the cosine similarity. I'm using NumPy, which is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-based [Data Science](../../Topics/Data%20Science.md) library, to help calculate this similarity. Let's execute this code, and we see our cosine similarity. The two vectors have a cosine similarity of 0.89, or 89%, so they are close. In our example, we use OpenAI's Python library to access the Embeddings API endpoint. However, you can test the API directly from tools like cURL or Postman using the endpoint below. Now that you understand how to measure the relatedness of words using the Embeddings API, let's learn how to turn audio into text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** find (2), cat (2), python (2), curl (1)
> **Env Vars:** api (5)
> **Definitions:** is a  (4), known as (1)
> **Code Identifiers:** dog_embeddings (1), curl (1)
> **UI Navigation:** scroll down (2)
> **Analogies:** for example (1), such as (1)
> **Versions:** 0.89 (1)

#### [Turn audio into text using Whisper](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=0)** - Do you want to learn about the most robust and accurate automatic [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) system on the planet? We're talking about a model trained on 680,000 hours of multilingual and multitask data collected from the web. Through Open AI's whisper APIs, you can turn audio or speech into text. It provides easy access to the open source text to speech whisper model. The model takes in an audio file and performs transcriptions, which enables translation in multiple languages and from those languages into English. Whisper accepts certain input file types like MP3 or MP4 and others. There are nine models in the Whisper family to choose from, with different sizes and capabilities available. The Whisper model is a transformer based encoder decoder model, also called a sequence to sequence model. I encourage you to pause this video and learn more about sequence to sequence learning to deepen your understanding of machine learning. You can even ask chat GPT about the topic. Here's the endpoint link to access the APIs using the following URL from a tool like Curl or Postman. To upload audio files, you'll use the file's API URL. In our code examples, I'm using Open AI's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Library.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=97)** When using the Python library, the model name Whisper One will retrieve the Whisper version Two large language model. Let's see Whisper in action. In cell three, here I'm importing the necessary library, in this case, the audio library, in cell four. This is a quick fix when using the Chrome browser so that I can play the audio file from within the Jupyter Notebook. Now let's look at our transcription example. I have this audio file, [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. Let me play this so you can hear it. Here in this next cell, let's use Whisper to transcribe that audio file, execute the code, and here is the output, a perfect transcription. Now let's look at a language translation example. I have this audio file in Italian. Let's play it. (speaking Italian)
>
> **[2:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=172)** Just in case you don't speak Italian, we can use Whisper to do the language translation. Let's execute it and we see the output here. If you like this course, take a look at my other courses, [Artificial Intelligence Foundations](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Intelligence%20Foundations.md), Automatic Learning on [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md), APIs, and Web Services. This [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) automatic should be machine learning, but this gives you an idea of how you can use Whisper for language translation and transcribing audio to text. Whisper produces high quality results and is an efficient solution for many speech to text applications. Now that you understand how to turn audio into text using Whisper, let's generate images from scratch using Dali.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Artificial Intelligence Foundations](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Intelligence%20Foundations.md) (1), [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) (1)
> **Env Vars:** url (2), mp3 (1), mp4 (1), gpt (1), api (1)
> **CLI Commands:** python (2), curl (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** postman (1), jupyter (1)
> **Speakers:** - do (1)

#### [Generate images using DALL-E](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=0)** - You can generate an image from scratch using a simple text description available using open AI's [DALL-E](../../Skills/Software%20Development/DALL-E.md) model. I admit, I had a lot of fun using DALL-E to bring my creative ideas to life and I'm not alone. Artists and creative professionals use DALL-E to inspire and jumpstart their creative process. With DALL-E, you can: generate brand new images from a text prompt, edit or retouch an existing image based on a text prompt, create variations of an existing image. With DALL-E, users get full usage rights to commercialize the images they create including the right to reprint, sell, and merchandise. The process is relatively simple. You feed a text prompt to DALL-E and it generates four images. Only three images are generated if you're using the edit or variations features. There are multiple ways to access DALL-E. The first way is through the browser-based tool. Let's see that in action. This is the browser-based version of DALL-E. Here in this text box, you simply enter your text prompt: a Van Gogh style painting of a computer in Times Square, New York City. Then, you click on Generate. It takes a moment for it to generate. And there we have four images
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=94)** in a Van Gogh style. Now let's try a different prompt: a hammock between palm trees on a beach in Jamaica on a bright, sunny day and click on Generate. It takes a moment for the four images to generate, and there we have four beautiful images of a hammock on a beach in Jamaica. The second way to access DALL-E is through OpenAI's Images API, sometimes called the DALL-E API. There are three endpoints. We will not access these APIs directly through a tool like Postman or Curl. Instead, we'll use OpenAI's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library. Let's see that now. In this cell, I have Python code that calls the Images API, and the prompt that I'm passing in is a rainbow with a pot of gold. I'm setting the number of images and the size. Let's execute this. The response, I'm going to store in the image URL variable. Then, I'm going to print the image. And then, I'm displaying it within the notebook. And here is the image of a pot of gold at the end of a rainbow. Next, you can edit an existing image. Let's execute this so that you can see the original image of Hawaii. I actually took this on my cell phone.
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=192)** In the next cell, let's execute it and I'll explain it while it's running. First, I'm resizing the image. Here on line nine, I'm using the create_edit of the Images API. I'm passing in an image. I'm passing in a mask. And then, I'm using the prompt: A beach chair with an umbrella. So I want the image to be edited to include a beach chair. Still using one for the number of images to generate and the size. Let's execute this code to see the image that was generated. And there, you now see a beach chair with an umbrella. Lastly, you can create an image variation. Let's execute this to, again, see the original image. We're using the create_variation of the Images API, passing in the image, passing in the number of images to generate and the size. Let's execute this, and it's going to take a moment to generate a variation of this beautiful image here. Let's scroll down. It's still generating. We'll give it a few seconds, and here is a variation of the Hawaii image. Let's look at the original image. Notice here, there are palm trees in the background. The trees in this image look slightly different,
>
> **[4:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=288)** and that is the variation. Using DALL-E is only free if you are an early adopter. You should also know that using the Images API is billed separately from DALL-E's web interface at labs.[openai.com](https://openai.com). Also, any credits granted or purchased on the website do not apply to the Images API. Now that you understand how to generate images from scratch using DALL-E, let's learn how to customize one of OpenAI's models for your specific use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DALL-E](../../Skills/Software%20Development/DALL-E.md) (13), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** dall (13), api (7), url (1)
> **CLI Commands:** python (2), curl (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Code Identifiers:** create_edit (1), create_variation (1)
> **Definitions:** is a  (2)
> **URLs:** [openai.com](https://openai.com) (1)
> **Cross-References:** in the next (1)

#### [Customize a model using fine-tuning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=0)** - What if you could tailor the OpenAI models we've studied to your specific use case. Wouldn't that be nice? Imagine the access you would have to limitless innovation. Well, I've got great news for you. You can, and I will show you how. You can tailor OpenAI's GPT-3 models through a process called fine-tuning. Fine-tuning allows you to adapt the pre-trained model to your specific use case using your own data. Fine-tuning is like taking a skilled musician and teaching them new songs. The musician already has a solid foundation and understands music theory, but they adapt their skills to play specific tunes with precision and style through practice and guidance. Similarly, the GPT-3 model with its pre-trained knowledge is fine-tuned to learn and specialize in specific tasks that you define. During fine-tuning, you start with the pre-trained GPT-3 model and train it further on a smaller dataset, which makes running the model cheaper and faster. It takes fewer than 100 examples to start seeing the benefits of fine-tuning GPT-3, and performance continues to improve as you add more data. To get started, just run a single command, passing in a training data file you provide. Very easy.
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=92)** Your custom version will start training and be available immediately via the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). Let's see this in action. We are going to fine tune the model to generate science fiction movie plots based on a prompt. The first step is to provide your data. In the real world, you'll have your data already. In this example, we're generating synthetic data to walk through the fine-tuning process. The code generates a series of random prompts the model will learn from. For example, here on line five, locations. The moon, a spaceship, and outer space. And alien types. Grey, reptilian, Nordic, shape-shifting. And hero goals. Save the earth, destroy the alien home planet, save the human race. Here on line 10, we have the prompt template that will be completed using the values from the list above. Imagine the plot for a new science fiction movie. The location is, and it will come from the location. Humans are fighting the specific alien types, and the hero of the movie intends to do this hero goal. Write the movie plot in 50 words or less. Here on line 20, we're generating 100 records of the locations, alien types, and hero goals combined in a random fashion and retrieving a movie plot based on the prompt template defined.
>
> **[3:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=188)** Now let's scroll down. We're saving the results to a CSV file here on line 70. And now let's look at the training data in cell 16. One example reads, "The spaceship is in danger." Another example reads, "The crew of the spaceship find themselves." And another plot, "The movie follows a brave human astronaut." You get the idea. The model will learn how to generate a movie plot by looking at these examples. Next, here in cell 17, we are cleaning up the data by removing special characters. Certain special characters cannot be processed by the model Here, let's scroll down. In cell 18, we are reformatting the data by removing unnecessary columns. The final format of the data is shown here in cell 19, and it simply shows a prompt and a completion. And this completion is the movie plot. Scroll down a bit. Now that we have the training data in this format, we'll need to prepare it using a [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) tool provided by OpenAI. The tool essentially takes the CSV file and formats it so that the model can understand it. If you scroll down, you'll see the final output is this JSONL file type. And that is what we need to upload. So here in cell 12,
>
> **[4:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=283)** we are uploading our data using the files API. And now that we've uploaded the data, notice we get the ID to this file object, and we'll take that ID, and here in cell 20, we will create a fine-tuning job, passing in that ID as shown on line seven. Now let's scroll down. Here, in cell 23, this is where we retrieve the job status. This is helpful for tracking to know whether or not your job is still in progress, whether or not it failed, or whether or not it succeeded. Here, we can see the status of this job is succeeded. The model is usually available. Rephrase, the model is usually available momentarily in your account. Sometimes it takes a little longer if there are a lot of jobs in the queue or if you have a lot of data to process. Now, once you have your fine-tuned model, you can use it to generate a movie plot. And that is what we're doing here in cell 25. We are putting on line two the name of the fine-tuned model, and you get that from the output of the fine-tuning job. Here, I'm passing in the prompt for the movie plot. The moon, Nordic, destroy the alien home planet. So we pass that in, and here is an output. The Mall of Miracles and the hero's loyal sidekick.
>
> **[6:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=379)** Together, they fight the forces of evil to save humanity from extinction. You get the idea of how this works. You can continue to generate movie plots until you find one to your liking. Now that you understand how to customize OpenAI's models, try them out. How will you fine-tune your model? Next, let's prepare you to integrate the APIs into your application code by exploring key concepts and terms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) (1)
> **Env Vars:** gpt (4), api (2), csv (2), jsonl (1)
> **UI Navigation:** scroll down (5)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** find (2)
> **Exercise Files:** template (2)
> **Definitions:** is an  (1)
> **Speakers:** - what (1)

#### [Examine key concepts](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=0)** - By now you're familiar with key terms and concepts like models, LLMs, [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md), prompts, [Tokens](../../Skills/Web%20Development/Tokens.md), completions, embeddings, transformers, and more. Let's pool all these concepts together and introduce a few new concepts like probabilities and completion parameters. At the center, you have foundation LLMs like GPT trained on terabytes of data from the internet, including text, websites, images, online books, and more. Once you have a foundation LLM, you can fine tune it using data for your specific use case. [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) takes a series of prompts that go through a tokenization process by which the model processes the input text by breaking it down into smaller units called tokens. Now I'm going to introduce a new concept, probabilities. It's when the model aims to answer your input prompt by predicting which token is most likely to come next. Take a look at this example using the phrase, which cheese pairs. The model predicts at a 72% [Probability](../../Skills/Data%20Science/Probability.md) that the next [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) should be best, with better coming in only at 2.26%. Do you remember when I told you about the temperature setting? The value ranges from zero to one and helps the model determine which word is selected next.
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=98)** Lower values like zero mean the model will always return best next, because it has the highest probability. As you increase the temperature, moving it closer to one, the model will take more risk and consider tokens with lower probabilities like with or better. Higher temperatures may be helpful to increase the randomness of the model, providing more variety and creativity. You're aware that the response from the model is called a completion. When sending a request to the model, you pass in parameters called completion parameters. You're familiar with temperature, and there are a few more parameters you'll find helpful. n tells the number of chat completion choices to generate for each input message. top_p tells the model to return the top responses that meet your desired probability score. For example, a value of 0.1 means only words in the top 10% probability score are returned. max_tokens tells the model the number of tokens to generate in the chat completion. This is useful to keep costs down, but can limit the model's creativity. Lastly, presence_penalty or frequency_penalty helps you control the repetition in the responses coming back. Values can be between negative two and two. You should aim for values to be around 0.1 to 1
>
> **[3:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=195)** to somewhat reduce the repetition. If you want to strongly reduce repetition, set the number to two, which is the highest value. However, higher values can start to degrade the responses coming back. Now that you understand key concepts and terms, you're better prepared to integrate the APIs into your application code and dig deeper into the pricing models, which is up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [Probability](../../Skills/Data%20Science/Probability.md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Code Identifiers:** max_tokens (1), presence_penalty (1), frequency_penalty (1)
> **Versions:** 0.1 (2), 2.26 (1)
> **Env Vars:** gpt (1), llm (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - by (1)

#### [Understand pricing models](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=0)** - The [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) is not free. If you're going to use it, it's important that you understand the cost so you're not surprised when you receive your monthly bill. OpenAI offers a pay as you go pricing model where you're billed at the end of each calendar month. The prices are per 1,000 [Tokens](../../Skills/Web%20Development/Tokens.md) roughly equal to 750 words, with $5 in free credit that can be used during your first three months. 1,000 tokens of input costs 0.0015 of a dollar, while 1,000 tokens of output costs 0.002 of a dollar. There are usage or spend quota limits put in place for your account. When you sign up, you're granted an initial spend limit or quota, which is increased over time as you build a track record with your application. Individual developer accounts using the pay as you go pricing structure have an approved usage or spend limit set to 120 US dollars per month when the account is opened. You must complete a form to increase that limit if the quota doesn't meet your needs. Requests are billed based on the number of tokens set in your prompt, plus the number of tokens in the completions returned by the API. There are various models at different price points, each having a maximum content length that can't be exceeded. For most models, a single API request
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=97)** can only process up to 4,096 tokens between your prompt and completion. For the most up-to-date pricing, visit the pricing page. As you build projects Using the OpenAI's API, it's important to understand rate limits. OpenAI enforces rate limits on the requests you can make to the API. These are enforced through requests per minute, tokens per minute, or images per minute for images. You may have heard about the [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) Plus subscription, which differs from API pricing and is billed separately. The ChatGPT Plus subscription covers usage on chat.[openai.com](https://openai.com), the ChatGPT web interface, and currently costs a flat fee of $20 per month. ChatGPT Plus provides availability even when demand is high, has faster response speeds, and provides priority access to new features. Now that we've explored the OpenAI API and the associated pricing models, let's set up your local development environment so you can start building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (7), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (2)
> **Env Vars:** api (7)
> **Versions:** 0.0015 (1), 0.002 (1)
> **CLI Commands:** make (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)


### 3. Setting Up Your Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Install Python and Jupyter Notebook](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=0)** - Are you ready for the hands-on portion of this course? We'll configure your environment and get started with OpenAI and [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). We'll be using the classic Jupyter Notebook interface and OpenAI's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library that provides access to the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). With Jupyter Notebooks, we'll author code using the Python programming language and OpenAI libraries. The first step is to install Python by following the download instructions on the Python website. Make sure to follow the instructions for your specific operating system, Mac, [Windows](../../Glossary/Service/Windows.md), et cetera. If you already have Python installed, ensure your version is at Python 3.7.1 or above, because that's what OpenAI supports. On a Mac, which is what I'm using, you can check your version by navigating to a terminal window. Since I'm using Python 3, I'd use the python3 --version command to check my version. I'm currently at Python 3.8.9, which OpenAI supports. Typically when you install the most recent version of Python, pip comes with it. pip is a package manager for Python that helps you download the packages and modules needed to support your development. pip is installed by default with Python versions 3.4 and newer. Since I'm on a Mac, I can verify my version of pip by typing pip3 --version.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=102)** My current version is set at 3.8. When you update Python, the pip version that comes with it is also updated. Now that you've confirmed pip, use it to download Jupyter. Follow the instructions for the classic Jupyter Notebook interface. Since you already have Python installed, you'll follow the instructions for Python users that walk you through installing Jupyter with pip. Follow the instructions provided to upgrade pip and then install Jupyter. Now let's navigate back to terminal. Starting the notebook server is simple. Mine is already running, and the command that I used was jupyter notebook. This opens the Notebook dashboard in your default web browser. If you run into issues verifying or running the Jupyter Notebook interface, you may need to use the fully qualified path like I did here. Now let's navigate to that Jupyter Notebook. The next step is to install the OpenAI Python library. You've already seen this library in action and know that it provides convenient access to the OpenAI API from Python by acting as a wrapper for the API. Within the Jupyter Notebook, you will use pip to install the library using this command: pip install openai. You can confirm it by typing openai --version.
>
> **[3:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=198)** If you encounter issues confirming your version, you may need to make the OpenAI [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) executable. The steps depend on your operating system. Now that you have installed Python, Jupyter, and the necessary OpenAI libraries, you'll need to create an OpenAI account and generate an API key for authentication. We'll do both steps in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (17), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (2), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** python (17), pip (10), make (2), python3 (1), pip3 (1)
> **Tools:** jupyter (11), terminal (2)
> **Prerequisites:** install (6), configure (1), you'll need (1)
> **Versions:** python 3 (3), 7.1 (1), 8.9 (1), 3.4 (1), 3.8 (1)
> **Env Vars:** api (4), cli (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)

#### [Sign up for an OpenAI API account](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=0)** - You have one last step before officially accessing the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) from your application code. That step is to create an API key. An API key is like a backstage pass to a concert. It gives you privileged entry into the inner workings of an API. By including the API key, sometimes called a secret key and API requests you gain permission to interact with the API. The first step is to generate the API key and then configure your application code to use it when making an API call. Before generating a key, you'll need to sign up for an OpenAI account, which you can do by going to [openai.com](https://openai.com) and clicking sign up. If you already have an account, you can go ahead and log in. You'll visit your API keys page to generate the API key needed for your request. I will go ahead and log in. If you see a screen like this after logging in or signing up, click on API to navigate to the API. To set up an API key, click on your profile and go to view API Keys. Once this page loads, you'll click create new secret key and let's just call this "Test". Click on create secret key, and it's very important that you save your secret key here at this point because you won't be able to view it again through your OpenAI account.
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=95)** Click Done. You want to treat the secret key the way you would treat a password and keep it secure. Save it safely because you'll need it to authenticate to the API. If you had already signed up for an OpenAI account before watching this course, you are likely passed the free three month trial given to new accounts. If that is the case, you'll see a rate limit error when you try to run the API using the API key. To correct the error, you'll need to turn your account into a paid account by clicking on your profile, going to manage account, and then clicking billing. I'm going to delete this test API key because I don't need it. Now that you've set up your OpenAI account and generated your API key, you can start coding. Get ready for your first step, which is to store your newly generated API key in a secure environment variable accessible by your [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (21)
> **Prerequisites:** you'll need (3), set up (2), configure (1)
> **UI Navigation:** click on (3), navigate to (1), go to (1)
> **CLI Commands:** python (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - you (1)

#### [Test the APIs](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=0)** - Once you have an API key, testing APIs are easy. I will show you three different ways to test and explore APIs. Feel free to use the one that works best for you. I encourage you to play around and familiarize yourself with them before incorporating them into your application code. You can use a free tool like Curl. Curl comes pre-installed on [Windows](../../Glossary/Service/Windows.md) and Mac. Otherwise, you can download the package from the Curl website. I love OpenAI's API documentation because they provide the sample Curl commands for you. Let's go there and copy and paste the command for the Chat Completions API Click on Copy. We'll take the request and paste it into a terminal window. Let's navigate there now. In an upcoming video, we will explore the deeper details of the requests. Just notice the model name that we're testing here is GPT-3.5 Turbo, in the request body that we are passing in a system message, "You are a helpful assistant," and the message of, "Hello." When we run this code, what happens is very interesting. There is an authentication error that says, "You didn't provide an API key." As we learned in the last lesson, you'll need to use your backstage pass to authenticate to the API.
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=94)** You'll simply replace this [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) key up here with your API key. Once you do that and execute the code again, the response from the model should be, "Hi, how can I assist you today?" Another way to test the API is through a free tool called Postman, which has a nice visual interface. You can find the API URL in the documentation. Let's review calling the API from Postman. I've set up a post request. I've added the full URL. I've added the API key under the authentication tab as a bearer token, and I've set up the body here just simply copying and pasting the body from the Curl request. Let's click Send. Notice the model that we are using here is GPT-3.5 Turbo, and the message or the prompt that is being sent in is a simple hello. Notice here on line 11, the response from the model is, "Hello, how can I assist you today?" You can save the request to a collection so that it's available later. The third way to test is through OpenAI's Playground, which is easy to use. In the environment, you'll see a way to access the different models, send in completion parameters like temperature, top P, frequency penalty, and more. You'll notice that you will not need to enter an API key
>
> **[3:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=188)** to use the APIs from this environment. We're selecting Chat mode and we're selecting the GPT-3 0.5 Turbo model. Here, let's enter a user message and we'll simply type hello and click Submit. And the assistant responds with, "Hello, how can I assist you today?" I encourage you to explore other APIs using either Curl, Postman, or the Playground environment. Now that you understand how to test the APIs, let's get hands on with the Chat Completion API and start building our application that reviews a website and summarizes the content in a tweet-friendly format. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1)
> **Env Vars:** api (13), gpt (3), url (2)
> **CLI Commands:** curl (6), find (1)
> **Tools:** postman (3), terminal (1)
> **Versions:** 3.5 (2), 0.5 (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is an  (1), is a  (1)


### 4. Writing a Prompt for ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore chat completion API call](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=0)** - Do you remember when I told you we would review the Chat Completion API request? Well, now is that time. We'll review the syntax of the request line by line, completion parameter by completion parameter. As a reminder, this is the [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md)-powered application we're building. In this chapter, we'll build the foundation for a multi-turn conversation with our AI assistant that jumpstarts the process of summarizing a website. Let's look at the API reference for the Chat Completions API to understand what a sample request will look like. I'll be using Postman because it has a nice user interface that is easy to navigate and is the go-to tool for [API Testing](../../Skills/Software%20Development/API%20Testing.md). You've seen Postman before. For a quick refresher, the method goes here. In our case, we are posting data to the API, the full URL of the API goes here, your API key goes under the Authorization tab, the request body goes under the Body tab, and you send the request to the API by clicking on the blue Send button. I'm on the Body tab and you'll notice that the request body is in raw [JSON](../../Skills/Web%20Development/JSON.md) format and includes the model parameter here on line two, which identifies the model we're using, in our case, GPT-3.5 Turbo. There's also the messages parameter here on line three, which includes the conversation. In this example, we ask the model,
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=95)** Which olive oil is best for frying? We'll need to add a few completion parameters to this request body. Let's go to the documentation for the Completions API to understand the parameters available. The documentation defines in great detail what your requests should include. There is a list of the different parameters shown here. We'll update our requests to add additional completion parameters. We'll use temperature, top_p, n, max_tokens, and frequency_penalty. Let's navigate back to Postman. I'm going to add these completion parameters. Notice here n that represents the number of completion responses. So when we execute this code by clicking Send, we should see three responses coming back. While we're waiting for that to appear, do you remember why we see randomness in the three responses? You guessed it. It's because of the temperature parameter. Let's look at the first response. The first response, and I'm not going to read the entire response, says when it comes to frying, it is generally recommended to use olive oil with a higher smoke point. The next response. Extra virgin olive oil is not recommended for frying because it has a low smoke point. And the third response.
>
> **[3:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=187)** Extra virgin olive oil is not recommended for frying due to its low smoke point and delicate flavor. By looking at these responses, I've learned that I should not fry anything in extra virgin olive oil. I bet you're asking yourself how an API call like this works in conjunction with the OpenAI [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library and what the differences are. The library makes the API easier to work with from application code by providing a layer of abstraction and simplifying the interaction with the API. Think of the library like this. Imagine you are planning a trip to a foreign country where you don't speak the language or know the local customs. Navigating the complexities of the new environment can be challenging and time consuming. However, you come across a friendly and knowledgeable tour guide who offers assistance. The Python library is your tour guide to the API. Instead of having to figure everything out on your own, you can rely on the tour guide's expertise to make your trip smoother and more enjoyable. Let's see the same API call you made from Postman using the Python library. Here in cell six, I'm using the Python library. You'll notice I have the entire block of code in a try-except block.
>
> **[4:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=282)** Here on line two, I'm calling the create function of the ChatCompletion, passing in several parameters. The first parameter is model using GPT-3.5 turbo. The messages, here, the prompt is Which olive oil is best for frying? Also passing in the temperature, top_p, n, max_tokens, and frequency_penalty. Here on lines 12 and 13, I'm looping through the response and printing the messages, so let's look at that output. The first is "The best type of olive oil for frying is one with a high smoke point." The second response is "When it comes to frying, it is recommended to use an olive oil with a high smoke point and neutral flavor." And the last one, "Extra virgin olive oil is not recommended for frying as it has a low smoke point." The output is similar to what we saw in the Postman example. Now that you can structure an API request, let's review the API response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [API Testing](../../Skills/Software%20Development/API%20Testing.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (16), gpt (2), url (1), json (1)
> **CLI Commands:** python (4), make (1)
> **Tools:** postman (5)
> **Best Practices:** recommended (5)
> **Code Identifiers:** max_tokens (2), frequency_penalty (2)
> **Documentation:** the documentation (2), api reference (1)
> **Versions:** 3.5 (2)

#### [Review chat completion API response](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=0)** - [Instructor] Let's explore the most essential part of your interaction with the Open AI, API, their response. That's why we send a request in the first place, right? To get much needed information back. Let's review the API documentation to understand the fields returned in the response. Here is an example response. On line two, you'll see choices. Choices hold the actual completion data. Let's break down each property. First, you see finish reason here on line four. Finish reason indicates the reason why the language model stopped generating text. A common reason is stop, which means the completion was generated successfully. Another reason is length, which means the language model ran out of [Tokens](../../Skills/Web%20Development/Tokens.md) before being able to finish the completion. You'll want the finish reason to be stopped to indicate that everything was completed successfully. Next, we see index here on line five, index holds the index of the completion inside the choices array. Next, we have message. Message holds the model's response. Let's scroll down and look here on line 12, there's created. This is a date timestamp indicating the date and time the response was generated. Next, on line 13, there's ID. The ID represents the unique response identifier. This is very useful if you need to track the responses.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=97)** Next, there's model here on line 14. This represents the Open AI model that was used for generating the response. Next, on line 15, there's something called object. Object represents the response type. If we use the chat completion's API, it would say chat completion. If we use the text completion API, it would say text completion and so on. And lastly, on line 16, there is usage. Describes the number of tokens used by the completion. You see in this example on line 17, completion tokens at 17, prompt tokens at 57, and total tokens at 74. Now let's look at a real response by navigating to the Jupyter Notebook. This is the code example from the previous lesson that returns three responses to the prompt: Which olive oil is best for frying? Let's scroll down to the bottom. If you haven't pulled the code down already, I encourage you to do so and follow along with me. Here on line one, we are going to print the response. Let's execute the code. There are several familiar attributes returned in the response. The first thing that catches my attention is the model here. If you remember from our request, we passed in GPT-3.5 Turbo.
>
> **[3:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=193)** However, the response indicates that the GPT-3.5 turbo 0613 model was used. Where did the 0613 come from? Well, GPT-3.5 turbo is a pointer to the most recent version of the model, which is helpful so that you don't have to track the versions yourself. The 0613 is the underlying version, but you'll use the pointer. Scroll down, we see our choices. Let's scroll down to the very bottom and take a look at our usage. Notice that this request and response used a total of 377 tokens, 15 in the prompt and 362 in the completion. Do you remember how you're charged? You're right. Based on the number of tokens, you'll notice three choices returned. That's because we set the end parameter with a value of three in our request. Now that you understand the request and response, let's get hands-on with building. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (7)
> **Env Vars:** api (4), gpt (3)
> **UI Navigation:** scroll down (4)
> **Versions:** 3.5 (3)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Build a dialog using chat completion](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=0)** - This is the first official hands-on challenge in this course. Let's combine everything you've learned to start building the multi-turn conversation with an AI assistant. You're ready to start writing codes, since you've already set up your development environment, created an OpenAI account and generated an API key. Your first step is to create an empty Jupyter Notebook. You'll continue to use this Notebook for the remaining challenges. Each challenge builds on the last challenge. As you solve this challenge, look at the chat completion API. And here's a tip. Experiment with different temperature values and observe what happens. Good luck, and have fun. I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Tools:** jupyter (1)
> **Prerequisites:** set up (1)
> **Speakers:** - this (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Build a dialog using chat completion](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=5)** - [Instructor] So, how did you do? Let's compare. Let's look at how I saw the challenge of building the foundation of a multi-turn conversation with an AI assistant. The first step is to install the necessary libraries. I've installed these libraries already, so I won't run this code again. Next, I imported the OS and OpenAI modules, or libraries. You're familiar with the OpenAI [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library. The OS module provides access to operating system dependent functionality. I'll use it to access the API key stored as an environment variable in an external dotenv file. Scroll down. On line one, here I am retrieving the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) key from the environment variable and storing it in OpenAI.API_key. This variable is used to authenticate to the API. Next, here in cell 16, I'm storing the name of the model I'm using in the model variable, which I'll use later. Let's scroll down. Notice cells 17 and 18. In the following few sections, you'll see that I've designed my code to be modular with reusable code defined in functions. The first function here in cell 17 is generate_prompt,
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=98)** which is used to set the context for the AI assistant. It helps us [compose](../../Glossary/Framework/Jetpack%20Compose.md) a tweet based on an AI-generated summary of a website. The next function here in cell 18 is called get_completion, which calls the ChatCompletions API, passes in the request, and gets a response back. You'll notice that this function takes one parameter called temperature. The value for temperature will default to zero if a value is not passed in. In this function, you'll see that I'm storing the completion response in the response variable. I'm passing in the model and prompt in the messages and temperature parameters. Next, here on line 10, I'm printing the content from the response. Scroll down, here on line 19, I'm calling the get_completion function and passing in zero for the temperature. I could have left this blank since the temperature will default to zero. I've executed this cell already, and the response is shown below. The assistant replies with, "Sure, I can help with that. Please provide me with the website you would like me to summarize." If you scroll down, I have a few examples that illustrate temperature, and this is just for extra credit. I encourage you to explore different temperature values on your own. And that's all there is to it. We now have the foundation for our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Env Vars:** api (4)
> **UI Navigation:** scroll down (4)
> **Code Identifiers:** get_completion (2), generate_prompt (1)
> **CLI Commands:** python (1)
> **Definitions:** is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Constructing a Multi-Turn Conversation with ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### [Construct a multi-turn conversation](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=0)** - [Instructor] Let's continue building our [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md)-powered application by expanding the single prompt into a multi-turn conversation with the AI assistant. We'll show the AI assistant how to remember the conversation, showing the real power of ChatGPT. This API documentation shows a sample multi-turn conversation here in lines six through nine. There's a system message and a series of user and assistant messages. Each interaction with the AI assistant is a new session, which means the model doesn't remember previous prompts or responses. For the model to remember the entire chat message history, including user prompts and assistant responses, each must be included in the exchange. The messages parameter here on line five is the key to making this work. Notice the entire conversation is sent in this example. This technique is called prompt chaining. Let's navigate to the Jupyter Notebook to see it in action. While we review these examples, I'll also highlight the importance of designing effective prompts. It's important for you to be aware of techniques that can improve the output returned from the model. In this Jupyter Notebook, you're familiar with the first few lines of code, importing the necessary libraries and obtaining the API key.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=93)** To implement prompt chaining, I've added a function called collect_messages here in cell six that appends requests and responses to the context array shown here on line eight. You're familiar with get completion. Then here in this next cell, I've created a loop that continues to track the conversation until I enter the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) exit. The goal of this code is to summarize a website in a tweet-friendly format. When you're passing prompts to ChatGPT, there are strategies for getting better results. The first strategy is to include details in the prompt to get more relevant answers. For example, you can optimize the output for a specific audience. And another strategy is to use stop sequences and specify the desired output length. Like, can you summarize it in 50 words instead. There are several strategies, so let's see them in action. I'm going to execute this code, and the assistant says, sure, please provide me with the website you would like me to summarize. In this case, I want it to summarize the Amazon Rekognition website, and it gives a nice summary. Rekognition is a powerful image and video analysis service. Now, let's tailor the output for developers. Can you summarize it for developers? And the output calls out
>
> **[3:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=188)** Rekognition as a service designed for developers. It uses [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) [Algorithms](../../Skills/Software%20Development/Algorithms.md) to accurately identify objects. The next question, can you summarize it for executives? In that output, Rekognition is a cutting-edge image and video analysis service, and it just gives a very generic general summary. You can use it to identify objects, people, text, and activities, and it offers valuable insights that can enhance various business applications. The next question, can you summarize it for college students? And the summary says, Rekognition is an innovative image and video analysis service. Skip down to the last sentence. It has numerous applications and can be a valuable tool for college students in various fields of study. And now, let's add a few stop words. Can you summarize it using 50 words instead? And let's look at the response, and the response says, I would have to count each word to see if it is 50 words or less. But the summary talks about image and video analysis, and the last sentence says, it's a valuable tool for executives, developers, and college students alike. And the last prompt, can you summarize it using 10 words instead? Let's see. That looks like less than 10 words. Says Amazon Rekognition:
>
> **[4:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=280)** accurate image and video analysis with deep learning. Now that you can construct a multi-turn conversation, let's strengthen your knowledge through hands-on exploration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Env Vars:** api (2)
> **Tools:** jupyter (2)
> **Code Identifiers:** collect_messages (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)

#### [Challenge: Generate tweet content using chat completion](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=0)** - Let's build on the last hands-on challenge by incorporating a multi-turn conversation with the AI assistant. We want to include a prompt, instructing the model to remember the conversation and summarize a website in a tweet-friendly format. Start by going to your existing Jupyter Notebook. Review your code to refresh your memory on how the existing code works. Don't forget that each interaction with the AI assistant is a new session. If you want the model to remember the conversation and have the proper context to produce output, you must include the entire message history, meaning all the prompts and responses with each request. Take a look at [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s input function to see if it could be helpful as you solve this challenge. Good luck, and have fun. I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generate tweet content using chat completion](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=0)** - [Instructor] Let's solve our challenge. The goal was to expand the multi-term conversation to remember the conversation and summarize a website in a tweet friendly format. Here in our Jupyter notebook in cell 9, I'm importing the OS and OpenAI modules or libraries. You're familiar with the OpenAI [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Library. The OS module provides access to operating system dependent functionality. I'll use it to access the API key stored as an environment variable in an external.env or environment file. Here on lines 4 and 5, I'm loading the environment file. Next on line 10, I'm reading the API key from the environment variable and storing it in openai.api_key. Next, I'm storing the name of the model I'm using in the model variable, which I'll use later. Next, here on line 4, I'm setting the context in a system message. The persona is that of an AI assistant designed to produce website summaries. Next, I have a function here in cell 12 called collect messages that keeps track of the conversation history by appending the most recent message in the context array here on line 8. The next function is called get_completion in Cell 13. This calls the chat completion's API,
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=96)** passes in a request and gets a response back. You'll notice that this function takes one parameter called temperature. The value for temperature will default to zero if a value is not passed in. In the function, you'll see I'm storing the completion response in the response variable. I'm passing in the model and the prompt and messages and temperature parameters. Next, I'm starting the conversation with the AI assistant in this cell. I'm using an infinite loop to manage the multiterm conversation. The loop ends when I enter the text exit. Let's see this in action. I'll click run and the AI assistant responds with, "Sure, please provide me with the website you would like me to summarize." I would like for it to summarize the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning website. The response says, "LinkedIn Learning is an online platform that offers a wide range of professional courses and tutorials to help individuals enhance their skills and advance their careers." That sounds about right to me. The next prompt is, can you summarize it for developers? And the response for developers calls out LinkedIn Learning as an online platform that provides developers with a vast array of courses and tutorials to enhance their skills. The next prompt, can you summarize it for executives? And the response there,
>
> **[3:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=190)** LinkedIn Learning is an online platform that offers executives a comprehensive selection of courses and tutorials to develop leadership skills, stay informed about industry trends, and enhance their professional growth and success. That is a great summary for an executive. Next prompt. Can you summarize it for college students? And the response is, LinkedIn Learning is an online platform that provides college students with a wide range of courses and tutorials to supplement their education, gain practical skills, and increase their employability. Again, a perfect summary for a college student. This time I'm going to use stop words. Can you summarize it using 50 words instead? Now, I'll let you all count these words to make sure it's less than 50, but it looks about right to me. And the last prompt, can you summarize it using 10 words instead? That looks like less than 10. "LinkedIn learning: online courses for professionals to boost career growth." Let's type exit to end the multi-term conversation. That's all there is to it. We now have a tweet friendly summary of the website. My version of the solution is pretty straightforward. Yours probably looked similar to mine, but don't worry if it didn't. There are always multiple ways to solve the problem. Now let's learn about what comes next for our application.
>
> **[4:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=285)** Exploring the Image Generation API. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is an  (3), is called (1), is a  (1)
> **Env Vars:** api (4)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** api_key (1), get_completion (1)
> **File Paths:** external.env (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)


### 6. Generating an Image Using DALL-E

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore images API call](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=0)** - [Narrator] Image generation is a fun use case for [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). I spent hours generating unique images from scratch using a simple text description. Let's look more closely at the image generation API call that provides access to [DALL-E](../../Skills/Software%20Development/DALL-E.md), OpenAI's image generation model. We will use DALL-E to generate a custom image based on the website summary provided by the chat completion's API in the previous lesson. I've navigated to the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) documentation to review what a request will contain. The documentation is a great resource for you. It defines what your request should include in great detail. The Images API provides three methods for interacting with images, creating a new image, editing an existing image, or creating variations of an existing image, all based on a text prompt. Let's look at creating an image. There are five parameters. The first parameter is prompt, which is the description of the image you want to generate. N, which is the number of images to generate based on the prompt. The default is one. Size, which is the size of the image to generate. The default is 1,024 by 1,024. Response format, which is the format the generated image is returned in. The default is to return a URL.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=93)** User, which is a unique identifier representing the end user or calling client. This is often used to monitor and detect abuse. Let's see this API call in Postman. Notice here, this will be a post request to the image's generation's URL endpoint. You'll put your API key as the bearer token on the Authorization tab. On the Body tab, you'll enter the parameters you pass to the API. In this example, for the prompt parameter, I'm passing in "A palm tree on a beach." For N, I'm passing in two, which means two pictures will be generated. Finally, I'm passing in the image size 1024 by 1024. You could also use 256 by 256 or 512 by 512. When we are ready to execute, we will click the Send button to see the response in the bottom pane. Let's do that now. We'll talk more about the API's output in the next video. Notice the response format here on line five is b64_json. We have our output in the b64_json format. I encourage you to explore editing an existing image or creating new variations of an existing image on your own to strengthen your understanding of what the Images API can do.
>
> **[3:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=186)** Now, let's see the exact same call using OpenAI's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library. Let's navigate to the Jupyter Notebook. Let's take a look at the new generate_image function in cell six. Here, on line seven, we are generating an image using the image's API. In this example, we are using DALL-E 3. We're passing in a prompt, which is the summary, the size, the quality, and n, for the number of images. This is similar to the call in Postman. Now that you can structure an API request, let's review the API response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DALL-E](../../Skills/Software%20Development/DALL-E.md) (3), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (12), dall (3), url (2)
> **Tools:** postman (2), jupyter (1)
> **Definitions:** is a  (3)
> **CLI Commands:** python (1)
> **Code Identifiers:** generate_image (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)

#### [Review images API response](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=0)** - [Instructor] Let's see the output of the image's API, a custom image generated based on your text prompt. The response format parameter is important. It drives the model's output. Let's navigate to the API documentation to look at the parameter more closely. There are two possible values for the parameter, URL or b64, which stands for Base64, [JSON](../../Skills/Web%20Development/JSON.md). Let's navigate to Postman to see the output. Here on line five, the response format is set to base64_json, which returns the Base64 value of the generated image down here in this output window. You'll need to convert this Base64 value to an image format such as PNG. Let's change the response format attribute to URL, and notice this value is case sensitive. Let's click Send again. And within our output, once it completes we should see two URLs. And yes, there are two URLs that point to the images which you can view and download. Let's look at one of the images by copying the URL and pasting it into a web browser. Here is one of the images of a palm tree on a beach. Let's copy the URL for the second image.
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=96)** Now look at the second image. They are both beautiful images of palm trees on a beach. Don't you wish you were there? I sure do! An advantage of using the Base64 value is that while the URLs expire after an hour, you can programmatically save the Base64-encoded string to a JSON file. A disadvantage is that you can't look at your image unless you decode the data, which is easy to do in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) but requires additional code. There're also websites on the internet that will do the decoding for you. Now let's navigate to the Jupyter Notebook. You've seen most of this code already. Let's scroll down to the generate_image function in cell six. This function is used to generate the image, and I've executed the code in cell seven to generate the tweet-friendly summary. Let's scroll down, and here is the summary. Imagine a virtual library filled with books on various subjects representing the vast range of courses available on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Each book represents a different skill or topic, symbolizing the opportunity for professionals to enhance their knowledge and advance their careers through the platform. Now let's look in cell eight. We've generated an image by passing in that summary. Notice the URL variable holds the URL to the generated image.
>
> **[3:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=189)** Now let's look in cell nine. We're using the Python image library to display the image directly in the notebook for easy viewing. And this is the first image using [DALL-E](../../Skills/Software%20Development/DALL-E.md) 3, and it is pretty amazing. Now let's scroll down and slightly modify the summary, which is the text prompt to the model to improve the generated image that's shown here in cell 10. The prompt is simply a learning library. Let's execute that code again. And now, this image is much better, but it's not based on the summary, but I like it. Let's try it again using a shortened version of the original summary, which is shown here on line 12, virtual classroom. Let's execute the code, and this is the image that is returned. I like this image. It can be used in the tweet, and you'll just continue to modify the prompt until an image is generated to your liking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1)
> **Env Vars:** url (6), api (2), png (1), json (1), dall (1)
> **UI Navigation:** navigate to (3), scroll down (3)
> **CLI Commands:** python (2)
> **Tools:** postman (1), jupyter (1)
> **Analogies:** such as (1), imagine (1)
> **Code Identifiers:** generate_image (1)
> **Definitions:** stands for (1)

#### [Challenge: Generate images using images API](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=0)** - Let's build on the last hands-on challenge by generating a custom image based on the summarized website. Start by going to your existing Jupyter Notebook. Review your code to refresh your memory on how the existing code works. You'll start by adding a new function that will be used to call the images API by passing in the website summary as a prompt. I recommend you review the prompt and size parameters as they could be helpful as you solve this challenge. Good luck and have fun. I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Tools:** jupyter (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generate images using images API](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=0)** - [Instructor] Time to solve our challenge. Let's look at how I solved our prompt of generating a custom image based on the summarized website. You're familiar with the code that installs the needed libraries, pulls the API key from the environment variable, collects the messages of the multi-turn conversation, and gets the completion. This code manages the multi-turn conversation, allowing the user to enter a website to summarize. I've added a new function called generate_image that takes in the summary and passes it into the prompt parameter. I also use the n parameter to indicate that I want one image generated. For the size parameter, I'm passing the value of 1024 by 1024. I'm storing the URL in the image_url variable here on line 15. I've started the multi-turn conversation already, so let me enter the website to summarize. So, it's off thinking, summarizing the website, we have our response. Now I'm going to ask it to shorten the summary, and that was fast. It came back with a shorter summary. And lastly, I'm going to ask it to describe an image that represents that summary in five words or less. And it came up with "Skills for career growth."
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=96)** Let's exit this. After the multi-turn conversation completes, I call the generate_image function and I store the response in the url variable. I use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s Image Library to display the image in line, and here is the image that was generated. I think this is a really cool image, and it works perfectly for the use case. My version of the solution is pretty straightforward. Yours probably look similar to mine, but don't worry if it didn't. There are always multiple ways to solve the same problem. Now, let's learn about what comes next for our application, integrating with the Twitter or X API. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** generate_image (2), image_url (1)
> **Env Vars:** api (2), url (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 7. Integrating with the Twitter API

[↑ Back to Table of Contents](#table-of-contents)

#### [Sign up for a Twitter API account](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=0)** - [Instructor] We're now in our final steps before we can tweet our AI generated text. Let's start by accessing the Twitter API. The first step is to sign up for a Twitter developer account, to gain access to the API. Let's navigate to the developer portal, and sign up. Make sure that you sign up for a free account. If you already have a developer account, you can skip this step. If you've already created an account, simply click on "Developer Portal," and you will have access to the dashboard page of your developer portal. The next step is to create a new project. Name it, select the appropriate use case, and provide a project description. I've already created a project, so I'll click on it. Next, you either create a new app, or connect an existing app, if you've already set one up. An app serves as the container for the API keys that you need, to make an HTTP request to the Twitter API. You can navigate to your app's keys and [Tokens](../../Skills/Web%20Development/Tokens.md) page, by clicking on this key icon. You'll go here to generate the required credentials. You'll also need to ensure the authentication settings are set to "read and write." Click on settings, scroll down to "use our authentication settings," click "edit," and make sure your app permissions are set to "read and write,"
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=95)** and verify your type of app is web app, automated app, or bot. Let's go back. Make sure from the keys and tokens page, you save the generated credentials, the client ID, and the client's secret in a secure location. I recommend storing their credentials in an environment variable, similar to how we store the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) Key. Now that you have your credentials, you can make your first API call using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (6), http (1)
> **UI Navigation:** click on (3), navigate to (2), select the (1), scroll down (1)
> **CLI Commands:** make (5), python (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Explore Twitter API call and response](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=0)** - [Instructor] Have you heard of Tweepy? It's an open source [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package that gives you easy ways to access the Twitter API from Python. Your first step is to install the Tweepy package. Let's navigate to the Jupyter notebook. The first step is to run the PIP installed Tweepy command. If you want to learn more about all of the features of Tweepy, review the documentation for the client interface. And let's just search for it. There we are, create tweet, let's click on it. The create tweet function is what we'll use to send an HTTP post request. I encourage you to review the details of the function. Now let's return to our Jupyter Notebook. Returning to the Jupyter Notebook, you need to import Tweepy and request, shown here in cell 47. The request package allows you to send HTTP requests using Python, returning a response object with all the response data. Next, shown here on lines five through eight, you'll need to pull in the environment variables containing your credentials. If you haven't stored your credentials in the environment file, now would be the time to do so, to authenticate to the Twitter API. Next, let's look at this download image function on line 11, I'm downloading the image that was generated using Dalle and we're calling it dalle_image.jpeg.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=97)** Next, the image needs to be uploaded to Twitter servers so that it is available to attach to a tweet. To do this, I'm using API, another interface provided by Tweepy. But it interfaces to version 1.1 of the Twitter API. As of the time we were developing this video, the ability to upload an image via version two of the API is not available. Next, we have the send tweet function on line 35. Once the image is on the Twitter servers, we'll send the tweet. And notice here on line 46, we are using the create tweet function of the client interface in order to do that. Once you send the tweet, you can check your Twitter account to ensure the tweet was sent. Feel free to manually delete the tweet if you're just testing and don't want it to remain on the timeline. As you see, it's very easy to interact with the Twitter API using Tweepy. Now it's your turn to be hands-on with Tweepy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Env Vars:** api (6), http (2), pip (1)
> **CLI Commands:** python (3), pip (1)
> **Tools:** jupyter (3)
> **UI Navigation:** navigate to (1), click on (1)
> **Prerequisites:** install (1), you'll need (1)
> **Code Identifiers:** dalle_image (1)
> **Versions:** version 1 (1)

#### [Challenge: Post a tweet using the Twitter API](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=0)** - In this hands-on challenge, you'll combine your AI generated image and text into a tweet sent to your followers using the Twitter API. Start by going to your existing Jupyter Notebook. Review your code to refresh your memory on how the existing code works. You'll use Tweepy to interact with the Twitter API. I recommend you look at the media upload function of the API interface and the create tweet function of the client interface. Don't forget to authenticate to the Twitter API using the credentials you generated via the Twitter developer portal. And since this is officially your last hands-on challenge, I'm including an extra credit option. After you finish the initial challenge, turn the code into a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API using Flask. If you're not familiar with Flask, it allows [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) developers to create lightweight RESTful APIs. Good luck and have fun. I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (5), rest (1)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Post a tweet using the Twitter API](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=0)** - [Instructor] Let's solve the challenge of sending your image and text summary as a tweet. You're familiar with the code that summarizes the website and generates the image, so we'll pick up with installing Tweepy. I do want to show you the two images generated. This is the first image that was generated. I wasn't happy with it, so I tweaked the prompt to say online course library, and this is the second image that was generated that we will send out via a tweet. If you haven't installed Tweepy, you'll need to use the pip command to install it. I've already installed it, so I'm not going to run that code again. As a reminder, Tweepy is the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package that allows us to quickly call the Twitter API from Python. After installing it here on line one, let's import it along with the requests package that we'll use to make HTTP requests. Next, on lines five through eight, you'll populate variables with the authentication credentials stored in the environment variables. We'll use these variables to authenticate to the Twitter API. Next, I've created a function called download_image here on line 11 that saves the downloaded image as dalle_image.jpg. Here on line 14, I'm using the requests package
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=95)** to pull down the image and save it locally. Let's scroll down to line 21. Here I've created another function called upload_image that uploads the downloaded image to the Twitter servers. On lines 23 through 29, I'm authenticating the API call. Then here on line 30, I use the media_upload function to upload the image. Next here on line 35, I've created a function called send_tweet. I authenticate the call on line 36 through 39. Call the upload_image function on line 42 and send the tweet here on line 46 using the create_tweet function. The next step is to download the generated image to the notebook and then call the send_tweet function. Let's execute this code. The extra credit portion was to turn the code into a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API using Flask. I solve this using two notebooks. One notebook acts as the client, while the other acts as the server. This notebook here will act as the server responsible for running the API. I'll scroll down over the code that you're already familiar with and we'll stop here. The first step is to install Flask using pip, and then on line six, importing it,
>
> **[3:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=189)** and then creating a Flask app as shown here on line three. Next, in cell seven, you'll define the API route. In this case, there will be a GET request to the tweets' API endpoint on lines four through seven. I'm retrieving the argument, which is the name of the AWS service. To summarize, this will be passed to the AI assistant so that it knows which website to summarize. In this example, I'm summarizing websites from [amazon.com](https://amazon.com) with whatever selected service I pass in. On line 10, I generate that URL using the service name and pass it to the AI assistant. The summary returned is stored in the summary variable. On line 14, I generate the image using the summary and the tweet is sent on line 18. In this cell here, the server is launched, which means the API is ready to be called from the client notebook. Let's navigate there now. The client is used to test the API. The code is straightforward. In cell one, I'm importing the requests package. Then in cell two, I'm passing in the URL of the API and SageMaker as the name of the AWS service I want the AI assistant to summarize.
>
> **[4:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=284)** I've already executed this code and I see that the tweet is sent. Let's navigate to my Twitter account. Let's verify that the tweet was actually sent, and yes, here is a tweet with a summary of SageMaker and the associated AI-generated image. I'm going to delete this so that my timeline is not cluttered. That's it. That's how I solved the challenge and extra credit. Yours probably looked similar to mine, but don't worry if it didn't. There are multiple ways to solve the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** api (10), aws (2), url (2), http (1), rest (1)
> **Code Identifiers:** upload_image (2), send_tweet (2), download_image (1), dalle_image (1), media_upload (1)
> **CLI Commands:** pip (2), python (2), aws (2), make (1)
> **UI Navigation:** scroll down (2), navigate to (1)
> **Prerequisites:** install (2), you'll need (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **API Endpoints:** get  (1)


### 8. Troubleshooting Errors and Getting Help

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand common error codes](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=0)** - Troubleshooting and uncovering errors become easy when your error messages are simple to understand. Thankfully, OpenAI has helpful descriptions. Let's review some of the common troubleshooting steps and errors that you may encounter. First, if you're receiving errors, check the OpenAI status page to see if any ongoing incidents or maintenance are happening. There are two types of OpenAI errors, errors from the API and errors from the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library. Since we've mainly focused on the Python library, let's discuss a few common errors you may encounter. If you see an API error, it's typically an error on the OpenAI side. A temporary error, a bug, or a system outage could cause this. Just try your request again in a short time to see if it clears up. For a timeout error, it means, you guessed it, your request timed out. This happens when your request takes too long to complete. I've seen this happen when my request was very complex and required a lot of processing time. It could also be caused by load on the OpenAI servers. Try your request again after a short time. Another error you may encounter is a rate limit error. This indicates you've hit your assigned rate limit. Rate limits are similar to throttling API requests, which limit the number of requests
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=94)** that a user can make in a certain period. Unlike throttling, a rate limiting is not placed on a user, but on the server itself, limiting the times the API can be accessed across a given organization. You can view the rate limits from your organization under the rate limit section of the account management page. The last error we're going to talk about is an authentication error. That means your API key is invalid. Make sure your API key is still active and of course valid. If there's an issue with your key, you can always generate a new one. It's good coding practice to programmatically handle errors with a try except block, as seen in my coding examples. If you're unable to determine the root cause of the error, reach out to the OpenAI support by logging into your account and using the help button to start a conversation. Make sure to include the following information, the model you're using, the error message and code you received, the request data and headers you sent, the timestamp and time zone of your request, and any other relevant details that may help diagnose the issue. Now, let's talk about ways to get help from the broader OpenAI developer community.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** api (6)
> **CLI Commands:** make (3), python (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - troubleshooting (1)

#### [Get help from the community](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=0)** - Let's say you run into an error, followed all of the steps I mentioned in the last video, but still can't resolve it. Now it's time to ask for help from your community. As a developer, the first place I'll go when I need help is the OpenAI Developer Forum, which is a developer community site and not monitored for customer account or billing questions. It's a great forum to search for similar topics. Most times the issues you're experiencing have already been discussed. If not, you can post a new question. You can communicate with other developers, ask questions about the API, and share your thoughts. Your next option for help would be a developer ambassador. Developer community ambassadors host weekly [office](../../Skills/Web%20Development/Microsoft%20Office.md) hours on specific topics like prompt design, [Product Development](../../Skills/Software%20Development/Product%20Development.md), demos, and more. They enjoy answering questions and helping to scale the growing application ecosystem. Another place I've turned for help is the OpenAI blog. It's a great place to go for the latest model updates, short tutorials, and important announcements. Don't worry, you're not alone. The OpenAI community is there when you need help.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Product Development](../../Skills/Software%20Development/Product%20Development.md) (1)
> **Env Vars:** api (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)


### 9. Effectively Managing API Costs

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage your spend](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=0)** - Do you remember how you're billed? That's right. Your billed based on the number of [Tokens](../../Skills/Web%20Development/Tokens.md) sent in your prompt, plus the number of tokens in the completions returned by the API. The best way to manage your spend is to monitor the number of tokens you've used each month. This is simple. Log into your account and view your usage tracking dashboard, which shows how many tokens you've used during the current and past billing cycles. Another way to manage your spending is to configure a hard limit in your billing settings, which I've done. I've added a monthly spending limit of $120. Once I hit that limit, Open AI will stop serving my requests. This works well, while I'm learning and [Prototyping](../../Skills/Software%20Development/Prototyping.md). However, be mindful that this could potentially impact production systems, and disrupt the use of your applications and impair users. Instead of using a hard limit, you can enter a soft limit instead. A soft limit sends an email alert once you pass the soft limit threshold. The soft limit alert is just a notification that doesn't stop serving requests like the hard limit. There is a disclaimer that Open AI may have a delay in enforcing limits, so you'll be responsible for any overages you incur. Now, let's talk about estimating your costs once you've moved your prototype to a production environment, which can be challenging.
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=95)** Open AI's pricing model is per 1000 tokens, so you'll need to estimate the traffic and token utilization based on your user base. You'll need to think about traffic levels, the frequency that users will interact with your application and the amount of data you'll process. A strategy to manage your costs is to reduce the cost per token by switching to a smaller model. Once you have everything working with the most capable model, experiment to see if a smaller model can produce the same results with lower costs and latency. Another strategy is to reduce the overall number of tokens required. You can do this by experimenting with shorter prompts that achieve the same results. Don't forget that you can use the Tokenizer tool as a way to estimate your costs. As the usage of your applications grow, you'll get better at estimating your costs and managing your spend. It won't be perfect at first, but you'll get there over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **Prerequisites:** you'll need (2), configure (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - do (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your OpenAI API journey](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=0)** - Congratulations on reaching the end of the course. You should feel proud of what you've accomplished. Thank you for going on this journey with me to build a project using [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). During our time together, you've learned all about the power of OpenAI's APIs to create chatbots, summarize and generate text, create custom images from text prompts and more. If you haven't pulled down the challenge solutions, I encourage you to deepen your understanding and retain your newfound knowledge through hands-on exploration. You'll find extra credit options that will help you continue your learning journey. You can also continue learning by watching my other course, "AI Foundations: Machine Learning," as well as courses on [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) and [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). I've enjoyed our time together. Please follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) so that we can stay connected. I love speaking on the topic of AI and machine learning, so please consider me for your upcoming conference or event. Now go and transform the world. I'm Keisha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Kesha Williams](../../Instructors/Artificial%20Intelligence%20(AI)/Kesha%20Williams.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-project-with-the-chatgpt-api-4484140/tree/main)

## Skills Covered

- Chatbot Development
- OpenAI Products
- Artificial Intelligence (AI)
- Application Development

## Path Context

### In [Improve Your Programming Skills with Artificial Intelligence](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Improve%20Your%20Programming%20Skills%20with%20Artificial%20Intelligence.md)
← [AI Pair Programming with GitHub Copilot](AI%20Pair%20Programming%20with%20GitHub%20Copilot.md) | **4 of 4**

## Appears In

- [Improve Your Programming Skills with Artificial Intelligence](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Improve%20Your%20Programming%20Skills%20with%20Artificial%20Intelligence.md)

## Related Courses

_Courses sharing skills:_

- [Exploring Million-Token Models with Google Gemini Pro 1.5](Exploring%20Million-Token%20Models%20with%20Google%20Gemini%20Pro%201.5.md) — Artificial Intelligence (AI), Chatbot Development
- [Azure AI for Developers- Building AI Agents](Azure%20AI%20for%20Developers-%20Building%20AI%20Agents.md) — Artificial Intelligence (AI), OpenAI Products
- [OpenAI API- Code Interpreter and Advanced Data Analysis](OpenAI%20API-%20Code%20Interpreter%20and%20Advanced%20Data%20Analysis.md) — Artificial Intelligence (AI), OpenAI Products
- [OpenAI API- Moderation](OpenAI%20API-%20Moderation.md) — Artificial Intelligence (AI), OpenAI Products
- [OpenAI API- Speech](OpenAI%20API-%20Speech.md) — Artificial Intelligence (AI), OpenAI Products

---

[↑ Back to top](#)