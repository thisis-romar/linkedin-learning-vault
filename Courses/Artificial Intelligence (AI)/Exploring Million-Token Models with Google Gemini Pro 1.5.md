---
type: course
cssclasses:
  - lle-course
slug: exploring-million-token-models-with-google-gemini-pro-1-5
url: "https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5"
duration_minutes: 18
duration: 18m
updated: 4/22/2024
learners: 16429
skills:
  - Chatbot Development
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Google Gemini
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEN1p4G_REgGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713473090290?e=2147483647&amp;v=beta&amp;t=EaFp8l6We_yOE8ry8DgKaB70ZvG1xrxKjwAazZhe2FU"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - A Developer's Guide to Google Gemini
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/chatbot-development
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/google-gemini
status: not-started
created: 2026-04-20
---

![Exploring Million-Token Models with Google Gemini Pro 1.5](https://media.licdn.com/dms/image/v2/D4D0DAQEN1p4G_REgGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713473090290?e=2147483647&amp;v=beta&amp;t=EaFp8l6We_yOE8ry8DgKaB70ZvG1xrxKjwAazZhe2FU)

# Exploring Million-Token Models with Google Gemini Pro 1.5

> Google Gemini Pro 1.5 breaks new ground with its million-token capacity, reshaping AI prompting by maximizing the size of its context window. 

Learn how modern LLMs use a million tokens to handle complex data sets, and allow advanced analysis of different media types, such as text, images, audio, and video processing.

> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5) | 18m | 16K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ray Villalobos]]

## Skills Covered

- Chatbot Development
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Google Gemini

## Table of Contents

### Introduction

#### The future of AI is huge
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=0)** - Something a bit unexpected happened on the way to artificial general intelligence, and that's the explosion of huge context windows.
>
> **[0:09](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=9)** In other words, the amount of information that large language models like ChatGPT and Google Gemini can't remember when handling prompts.
>
> **[0:18](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=18)** With Gemini 1.5, Google has taken context windows to a whole new level, letting users access up to a million tokens.
>
> **[0:25](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=25)** But what does that mean in practical terms?
>
> **[0:28](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=28)** These new tools let you access documents with more than 700,000 words, ask questions about an entire developer code base, and even handle questions in an hour's worth of video.
>
> **[0:39](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=39)** So, now, that we've entered the age of massive context, what can that do for you?
>
> **[0:45](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=45)** Should that affect your prompting engineering strategy?
>
> **[0:48](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=48)** And is it worth the cost? Let's find out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Versions:** 1.5 (1)
> **Definitions:** in other words (1)
> **Speakers:** - something (1)


### 1. One Million Tokens with Google Gemini Pro 1.5

#### Google Gemini Pro and the Gemini Family
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=0)** - Let's talk about the Gemini technology overall.
>
> **[0:02](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=2)** Gemini is a family of tools with multimodal capabilities.
>
> **[0:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=6)** And that means that it can handle text, images, video, and code by default, and you can combine these to provide rich context to the model.
>
> **[0:15](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=15)** Now, officially, there are three versions you can use: Gemini Nano, Pro, and Ultra.
>
> **[0:21](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=21)** These models are sized differently so that the Nano model is tiny and really meant for devices without a lot of memory.
>
> **[0:28](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=28)** The Ultra model, although the most capable, is also the slowest and it requires the most compute time and resources.
>
> **[0:36](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=36)** The Pro model is a good middle ground between performance and size.
>
> **[0:41](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=41)** There are two versions of the Pro Model, 1.0 and 1.5, and most versions of the model support a 32K parameter context length, while the 1.5 model supports a 128,000 context window by default.
>
> **[0:56](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=56)** But under a developer preview, which you can access now for free, but fully available after May the 2nd, 2024, developers have access to up to a million tokens.
>
> **[1:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=66)** The model has even been tested with up to 10 million tokens.
>
> **[1:10](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=70)** So let's talk about tokens in context windows.
>
> **[1:14](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=74)** A token is a standard unit of measure for an AI model.
>
> **[1:18](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=78)** Models break up their inputs into a series of tokens by converting data into numbers they can process easier.
>
> **[1:25](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=85)** Different modalities like images, charts, and graphs convert to different quantities of tokens.
>
> **[1:31](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=91)** In terms of text, you can think of a thousand words as converting to about 700 to 750 tokens.
>
> **[1:38](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=98)** I'm using the OpenAI Tokenizer to illustrate how this works.
>
> **[1:42](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=102)** This shows you how the model can break down text into tokens.
>
> **[1:46](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=106)** You can see that different models like GPT-3 and 4 vary slightly in how they produce tokens, so the same would apply to Google Gemini.
>
> **[1:54](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=114)** I'm going to paste the text of the famous poem "The Raven" to show you how many tokens an average piece of text can produce.
>
> **[2:01](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=121)** Now here's something really important.
>
> **[2:02](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=122)** The context window is composed of two types of tokens.
>
> **[2:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=126)** The input tokens are the amount of information the model can be fed while the output tokens is the amount the model can output.
>
> **[2:14](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=134)** You have to remember that the context window refers to the entire conversation.
>
> **[2:19](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=139)** As you prompt Gemini and it response, the context window will get bigger.
>
> **[2:24](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=144)** With a million tokens, the model can ingest and analyze an hour's worth of video, 11 hours of audio, 30,000 lines of code, and up to about 700,000 words, which is about seven to 10 books in length.
>
> **[2:38](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=158)** Although Pro is the model running the Google Gemini chatbot, it uses Gemini 1.0 at the moment.
>
> **[2:45](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=165)** You can access version 1.5 with a number of developer tools, and the easiest one to use is Google's AI Studio.
>
> **[2:51](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=171)** But if you have a Google Cloud account, you can use Vertex AI.
>
> **[2:55](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=175)** You can also use the API as a developer by getting an API key and then writing your own code to test the tool in Python and other programming languages.
>
> **[3:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=185)** Let's talk about pricing.
>
> **[3:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=186)** For a limited time while under developer preview, you can use the model free of charge.
>
> **[3:11](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=191)** After May 2nd, you'll be charged depending on a number of parameters.
>
> **[3:15](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=195)** First is the amount of requests per minute, which are two per minute during the preview, and five requests per minute once it launches.
>
> **[3:24](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=204)** This will be the throughput or the speed that the bottle can respond in.
>
> **[3:28](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=208)** Input tokens are free during the preview and $7 per million tokens afterwards.
>
> **[3:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=213)** Output tokens are also free during the preview and $21 per million tokens afterwards.
>
> **[3:39](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=219)** So although this is a really exciting tool, it is indeed a pricey proposition.
>
> **[3:44](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=224)** But if you're looking to do some large file analysis, this is the only way to go for now.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), means that (1), refers to (1)
> **Code Keywords:** let (3), default, (1), default. (1)
> **Versions:** 1.0 (2), 1.5 (2), version 1 (1)
> **Env Vars:** api (2), gpt (1)
> **CLI Commands:** python (1)
> **Speakers:** - let (1)

#### Why larger context sizes make a difference
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=0)** - Let's talk about how these larger contexts work, and why that makes a huge difference.
>
> **[0:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=5)** The version of Gemini uses something called a Mixture of Experts Model.
>
> **[0:09](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=9)** That's a modern technique where instead of passing your prompts to a single large model, the tool sends requests to two or more neural networks that are more specialized in answering specific types of prompts.
>
> **[0:21](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=21)** For example, one model might be better at dealing with math, and another with audio or video.
>
> **[0:27](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=27)** A mixture of experts is the key to making multimodal models effective.
>
> **[0:32](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=32)** A million tokens allows you to feed the model a massive amount of data.
>
> **[0:36](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=36)** Let's take a look at what that means practically and compare it to other models.
>
> **[0:40](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=40)** The tokenizer shows that the text of a small poem like The Raven converts to 1,586 tokens with 6,261 characters.
>
> **[0:51](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=51)** Now this fits well under the current version of Chat GPT Free which allows a context window of about 8,000 tokens.
>
> **[0:58](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=58)** The poem is about three pages, so theoretically I could use a poem about five times the length within that token size.
>
> **[1:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=66)** But remember that the context window refers to the entire size of a conversation, so you'd want to have something smaller than the limit.
>
> **[1:13](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=73)** The next tier in both Chat GPT+, as well as in regular Gemini Pro, is the 32K token size.
>
> **[1:21](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=81)** And you can see by the tokenizer that this would barely be able to fit a small book like The Strange Case of Dr. Jekyll and Mr. Hyde, which is about a hundred pages, without room for additional context.
>
> **[1:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=93)** A kilobyte is actually 1024 bytes, so that makes the limit for a 32K 32,768.
>
> **[1:40](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=100)** The next context window limit is 128K for Chat GPT Enterprise.
>
> **[1:45](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=105)** And it's also the normal token size limit for Gemini Pro 1.5.
>
> **[1:50](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=110)** That could easily fit a book bigger than H.G. Wells' The War of the Worlds at 82,362 tokens.
>
> **[1:57](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=117)** Now something massive like Jane Austen's Pride and Prejudice gets up to a whopping 160,000 tokens, or almost 500 pages.
>
> **[2:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=126)** That would be tough for even the regular version of Gemini Pro, although Anthropic's Claude would be able to handle this since it has a generous 200K context window.
>
> **[2:16](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=136)** But what exactly can you do with something like this?
>
> **[2:19](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=139)** One of the modern tests for these models is called the needle in a haystack test.
>
> **[2:24](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=144)** Where a random factor or statement is hitting in a huge context window to see if the models can isolate this.
>
> **[2:31](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=151)** This version of Gemini is easily able to do this, finding the needle 99% of the time in blocks of data with a million tokens.
>
> **[2:40](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=160)** And it's able to do this with not just text, but also audio and video.
>
> **[2:45](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=165)** Other tests like the Machine Translation from One Book, or MOTB benchmark, shows a model's ability to learn a new skill from context.
>
> **[2:54](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=174)** Gemini Pro does really well in this benchmark, being able to translate from the endangered language Kalamang after being fed a grammar manual.
>
> **[3:03](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=183)** Because it can handle different modalities, you can combine text with images or video to give the model more context.
>
> **[3:10](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=190)** So for example, it was fed video from the Apollo 11 mission, and a rudimentary drawing, and it was able to locate where in the video the small step for mankind happened.
>
> **[3:20](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=200)** The size of the context window and its ability to understand languages makes it capable of handling programming tasks where it can generate code, find bugs, and solve competitive coding problems with ease.
>
> **[3:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=213)** However, in order to take a look at those capabilities, you'll need developer access to Gemini.
>
> **[3:39](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=219)** And we'll take a look at that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), this, (1)
> **Env Vars:** gpt (3), motb (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Versions:** 1.5 (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - let (1)

#### Using Google AI Studio for testing large context windows
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=0)** - Since Google AI Studio is the easiest way to work with Gemini, let's take a look at the tool and what you can do with it.
>
> **[0:07](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=7)** AI Studio is a developer-focused version of a chatbot with some additional features and controls you can use to test the models.
>
> **[0:14](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=14)** You can see three main parts: to the left is the menus, in the middle is the prompting section, and to the right are the prompt settings.
>
> **[0:22](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=22)** One thing to keep in mind when working with Gemini 1.5 is that not all the sections here will work with the new model quite yet.
>
> **[0:30](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=30)** The menu section has three different subsections: the main menu and API generation at the top, then a section for documentation and help, and finally, settings.
>
> **[0:40](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=40)** The menu is where you can find the API key generation if you're going to be coding with Gemini on your own.
>
> **[0:46](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=46)** Now, API keys are a way to create secure connections to the model.
>
> **[0:50](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=50)** Just remember that the Gemini model is only free to try until May 2nd, 2024, so using an API key will incur charges afterwards.
>
> **[0:59](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=59)** Next is an option to create a new prompt, and there are three types of prompts: a Chat, a Freeform, or a Structured prompt.
>
> **[1:07](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=67)** A Chat prompt is for back and forth conversations with Gemini, and it's probably the one that will seem the most familiar since it's the closest thing to a cha bot.
>
> **[1:17](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=77)** You can add any types of images or video or audio, and have a natural back and forth conversation with the model.
>
> **[1:23](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=83)** You'll be able to upload photos or use photos that are already in your Google Drive.
>
> **[1:28](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=88)** Also, when you do save photos, they'll automatically be added to your Google Drive as well.
>
> **[1:35](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=95)** Let's try having a conversation about photos I added earlier.
>
> **[1:38](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=98)** And this is just a photo of myself, so I'll ask it to describe the setting.
>
> **[1:42](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=102)** Now, let's try adding another photo and seeing if it could compare the two.
>
> **[1:52](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=112)** One thing you'll definitely need to remember is to save your prompts.
>
> **[1:56](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=116)** Unlike working with a normal chatbot, simply hitting the Enter key won't automatically save or name things for you, so you can do that at the top right here.
>
> **[2:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=125)** I'll call this one First Prompt.
>
> **[2:07](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=127)** This now appears in the My library section on the left-hand menus.
>
> **[2:12](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=132)** Once you save that chat, you'll be able to share it with others with the button at the top right.
>
> **[2:16](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=136)** Notice that there's a Get code section here as well.
>
> **[2:19](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=139)** This will normally create some sample code that you can use with the parameters you've set in AI Studio.
>
> **[2:25](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=145)** But as of this recording, it's not available for the current Gemini 1.5.
>
> **[2:29](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=149)** At the top of the prompt, you'll see a section for System Instructions, which is a newer feature.
>
> **[2:35](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=155)** This is where you can add parameters that you want the prompt to consider before it answers any questions.
>
> **[2:41](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=161)** The nice thing is that system instructions will persist between prompts as long as you stay within the same prompt type.
>
> **[2:48](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=168)** So, for example, the system prompt would disappear if I change my prompt type to a Freeform prompt.
>
> **[2:55](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=175)** To make most chatbots write an answer more like me, I usually include something like this that says, "To avoid using verbose, indirect, or jargon-heavy phrases.
>
> **[3:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=185)** Opt for straightforward, concise, and conversational language that is accessible and engaging to a broad audience, et cetera, et cetera."
>
> **[3:12](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=192)** This will make it easier for the model to sound a little bit more like me.
>
> **[3:15](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=195)** Notice that at the bottom you have a small information area where you can look at the token count you've used up so far as well as the total context window size.
>
> **[3:25](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=205)** On the right-hand side, you can see the Run setting section where you can choose the model type, so we can switch to the Pro 1.0 model here if we want to.
>
> **[3:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=213)** And you also have settings for the temperature, which controls the creativity setting for the current model, although it's, again, not available for version 1.5.
>
> **[3:43](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=223)** The stop sequence lets you look for a keyword that causes the model to pause when processing data.
>
> **[3:48](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=228)** And then, there are safety settings, which are a series of parameters that let you control how much any content that would be considered harmful should be dropped.
>
> **[3:57](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=237)** If we switch to the 1.0 model, you can see where they would appear in the code by hitting the Get code button.
>
> **[4:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=245)** There's also a section for the Top K and Top P parameters.
>
> **[4:09](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=249)** Top P is called nucleus sampling and controls the predictability of the wording in responses, so a high Top P would pick an answer that is more creative.
>
> **[4:19](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=259)** And the Top K parameter controls the size of the vocabulary when the LLM is creating answers.
>
> **[4:25](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=265)** So, a high Top K would mean a larger vocabulary, making the results more creative.
>
> **[4:30](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=270)** I'll switch back to the 1.5 model.
>
> **[4:34](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=274)** Another option is to run a Freeform prompt.
>
> **[4:36](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=276)** Now, this is similar to a Chat, but it creates more of a document that you can interact with, so you can make changes, and it's a great place to fine tune a prompt, plus it lets you add variables through this table interface where you can add additional examples for ChatGPT to consider.
>
> **[4:54](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=294)** You also have the option of running a structured prompt, which gives you the ability to include up to 500 examples and then write different inputs and outputs to test the responses.
>
> **[5:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=305)** This option is a bit less flexible since it currently only offers an image insertion.
>
> **[5:10](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=310)** So, we'll stay with the Chat and the Freeform prompts for our tests.
>
> **[5:14](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=314)** There's also a way to create a tuned model, which lets you import a Google Sheets or a CSV.
>
> **[5:20](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=320)** This is just a convenient way to create a structured prompt.
>
> **[5:23](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=323)** And for now, this is another thing that you can't use with the 1.5 model.
>
> **[5:27](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=327)** So, now that we've got some experience with the AI Studio, let's take a look at how the model performs in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (3), finally, (1), type. (1), type, (1)
> **Versions:** 1.5 (4), 1.0 (2), version 1 (1)
> **Env Vars:** api (4), llm (1), csv (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** switch to (2)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)

#### Exploring large context assets: Audio, Video, Text
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=0)** - Let's take a look at what we can do with this large context and different modalities.
>
> **[0:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=5)** I'm going to start with a simple video.
>
> **[0:07](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=7)** This is a YouTube short I created to show a get tip feature called Get Update index.
>
> **[0:14](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=14)** Let's see what Gemini 1.5 can do with this.
>
> **[0:16](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=16)** I'm going to start by going in and creating a new chat, so I'll give this thing a name, and I'm going to hit the video button here and upload my video.
>
> **[0:26](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=26)** I'll start by asking, what can you tell me about this video?
>
> **[0:30](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=30)** This registers as 8,850 tokens, and it was easily able to explain what I was trying to do with the video.
>
> **[0:38](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=38)** I'll follow up with, can you give me a summary of the tip to see what it does?
>
> **[0:41](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=41)** It's a pretty good explanation, and notice that it knew enough about the code to display things in a programming font, and it was easily able to explain what I was trying to do with the video.
>
> **[0:51](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=51)** This is because when Gemini reads video, it's also reading screenshots of the video frames, and it's able to see the text in there.
>
> **[0:58](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=58)** I'll do a follow up and ask it to give me a good title and description I can use in the video.
>
> **[1:03](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=63)** Again, it does a good job here, and I got to admit, those are some pretty friendly YouTube titles, as well as great descriptions.
>
> **[1:11](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=71)** Let's try something else with much longer context to do a needle and a haystack type test.
>
> **[1:17](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=77)** And what I want to do is find a very specific detail from a series of documents.
>
> **[1:23](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=83)** What I'm looking for is in this section on page 46 of the middle PDF, and I wanted to tell me about the telegraph lines in Argentina.
>
> **[1:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=93)** So I'll prompt, I remember a discussion about the telegraph lines in Argentina.
>
> **[1:38](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=98)** Can you tell me the increased lengths of the lines added in 1906?
>
> **[1:42](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=102)** So it was able to find that information in one of the three PDFs that I uploaded with pretty good accuracy.
>
> **[1:50](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=110)** Now, I could have found that information through a simple search.
>
> **[1:53](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=113)** So let's do something that will cause it to reason a little bit.
>
> **[1:57](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=117)** I'll ask it to summarize the importance that the telegraph lines had on the development of Argentina from the document context.
>
> **[2:04](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=124)** You'll see that working with a large context window will take a while every time you search through the content, but it does a nice job of reasoning and summarizing way beyond what you could accomplish with search.
>
> **[2:16](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=136)** Let's try another type of modalities.
>
> **[2:19](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=139)** The model is capable of handling both audio and video, and I showed you how it works with video.
>
> **[2:24](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=144)** So I have a large audio file from a podcast episode I did at the beginning of the year, and I'll create a new prompt.
>
> **[2:32](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=152)** This time I'm going to go for a freeform prompt.
>
> **[2:35](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=155)** I already have the audio loaded up in my Google Drive, so I'll choose that, and I'll choose this episode from here.
>
> **[2:42](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=162)** It did add the audio a lot faster, because it was end the Google Drive, and because it's something that is much smaller than the three encyclopedias.
>
> **[2:51](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=171)** I'll ask it to create show notes for this audio stream and to include timestamps at the end of each sentence.
>
> **[2:57](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=177)** It did a pretty good job summarizing the episodes, but I noticed a few interesting things between the video and audio tests.
>
> **[3:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=186)** The video test was much more precise, and that's because it was able to pick out the specific code I had typed from the screenshots that it does when it's processing the video.
>
> **[3:16](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=196)** And here, it heard a few things wrong, so it didn't know my name properly.
>
> **[3:20](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=200)** The nice thing about using freeform prompts is that we can improve on what we've done with the model.
>
> **[3:26](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=206)** So let's try modifying this a little bit.
>
> **[3:29](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=209)** I'm going to ask it to generate some YouTube video links using an ID from a YouTube video.
>
> **[3:35](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=215)** It then create good YouTube links for me, so I'm going to add some more details here.
>
> **[3:39](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=219)** Also, for some reason, it's calling me Robbie the Loves, so I'm going to modify that and just let it know who I am.
>
> **[3:45](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=225)** Now, it still doesn't do a good job with the markdown links.
>
> **[3:48](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=228)** Notice that what it did is actually add a set of links at the very bottom of the page, and that's not really what I was looking for.
>
> **[3:54](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=234)** So again, I'm going to work with this to try to modify it to do the right thing.
>
> **[3:59](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=239)** I'll put this section in parentheses right here and see if it does a little bit better.
>
> **[4:04](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=244)** Now that it's done, you can see that it did a much better job with the instructions, especially with the markdown links at the end of each sentence.
>
> **[4:12](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=252)** Now you can see that with this capabilities, you have a whole new type of tool that lets you analyze large content, and can be specially powerful when processing video where it combines the full multimodal abilities.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (1), for. (1)
> **CLI Commands:** find (2)
> **Env Vars:** pdf (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)


## Path Context

### In [[A Developer's Guide to Google Gemini]]
← [[Prompt Engineering With Gemini]] | **2 of 8** | [[Getting Started with the Google Gemini API]] →

## Appears In

- [[A Developer's Guide to Google Gemini]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Gemini for Developers]] — Artificial Intelligence (AI), Google Gemini, Large Language Models (LLM)
- [[Google Gemini For Developers]] — Artificial Intelligence (AI), Google Gemini, Large Language Models (LLM)
- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[LLMOps in Practice- A Deep Dive]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)