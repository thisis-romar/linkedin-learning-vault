---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: introduction-to-multimodal-prompting-for-generative-ai
url: "https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai"
duration_minutes: 41
duration: 41m
level: Intermediate
updated: 6/26/2024
learners: 8715
skills:
  - Multimodal Prompting
  - Generative AI
  - AI Prompting
  - Artificial Intelligence (AI)
  - Prompt Engineering
exercise_files: true
github: "https://github.com/LinkedInLearning/introduction-to-multimodal-prompting-for-generative-ai-3852046"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEL96ao5DSQNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008136967?e=2147483647&amp;v=beta&amp;t=LuWWW9Db3Jvjl3B1Kb3LWebXJST3zpPGXxwlHL_j1vY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Understanding Generative AI for Tech Leaders]]'
  - '[[Getting Started with Prompt Engineering]]'
prev_courses:
  - '[[RAG and Fine-Tuning Explained]]'
  - '[[Prompt Engineering With Gemini]]'
next_courses:
  - '[[Agentic AI- Building Data-First AI Agents]]'
  - '[[Prompt Engineering and AI Agents with ChatGPT]]'
path_nav: '[{"path":"Understanding Generative AI for Tech Leaders","position":21,"total":22,"prev":"RAG and Fine-Tuning Explained","next":"Agentic AI- Building Data-First AI Agents"},{"path":"Getting Started with Prompt Engineering","position":4,"total":6,"prev":"Prompt Engineering With Gemini","next":"Prompt Engineering and AI Agents with ChatGPT"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/it-help-desk
  - skill/multimodal-prompting
  - skill/generative-ai
  - skill/ai-prompting
  - skill/artificial-intelligence-ai
  - skill/prompt-engineering
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20Multimodal%20Prompting%20for%20Generative%20AI.md)

![Introduction to Multimodal Prompting for Generative AI](https://media.licdn.com/dms/image/v2/D560DAQEL96ao5DSQNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008136967?e=2147483647&amp;v=beta&amp;t=LuWWW9Db3Jvjl3B1Kb3LWebXJST3zpPGXxwlHL_j1vY)

# Introduction to Multimodal Prompting for Generative AI

> In the last year, multimodality has brought about new capabilities to AI systems. In this course, software developer and instructor Ronnie Sheer offers you an understanding of what multimodality is and when and why it may be leveraged for business needs. Dive into a "tools approach" as Ronnie teaches you multimodality using two popular LLMs on the market: GPT-4 and Google Gemini. Plus, explore an 

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai) | 41m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [GenAI with multimodal prompts](#genai-with-multimodal-prompts)
- [**1. Multimodality**](#1-multimodality) (3 videos)
  - [What is multimodality?](#what-is-multimodality)
  - [Visual modality](#visual-modality)
  - [Textual and auditory modality](#textual-and-auditory-modality)
- [**2. GPT-4**](#2-gpt-4) (5 videos)
  - [GPT-4 and 4o](#gpt-4-and-4o)
  - [Text to image in GPT-4](#text-to-image-in-gpt-4)
  - [GPT-4 API with various input types](#gpt-4-api-with-various-input-types)
  - [Challenge: Drawing to code](#challenge-drawing-to-code)
  - [Solution: Drawing to code](#solution-drawing-to-code)
- [**3. Gemini**](#3-gemini) (5 videos)
  - [What is Gemini?](#what-is-gemini)
  - [Images in Gemini](#images-in-gemini)
  - [Gemini video inputs](#gemini-video-inputs)
  - [Challenge: Video narration](#challenge-video-narration)
  - [Solution: Video narration](#solution-video-narration)
- [**4. Auditory Modalities**](#4-auditory-modalities) (5 videos)
  - [Audio in generative AI](#audio-in-generative-ai)
  - [Prompt and audio](#prompt-and-audio)
  - [Generating music](#generating-music)
  - [Challenge: Soundtrack creation](#challenge-soundtrack-creation)
  - [Solution: Soundtrack creation](#solution-soundtrack-creation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### GenAI with multimodal prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=0)** - Use AI to solve more problems.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=2)** That's what multimodality allows you to do, and that's exactly what we'll learn in this course.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=8)** We'll look at how models such as GPT-4 and Gemini can handle different types of inputs, including video and audio.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=16)** We'll even generate music and images using cutting edge technologies.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=24)** I'm Ronnie Sheer.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=25)** I'm a software developer with over a decade of experience working for companies that lean heavily on AI.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=32)** If you want to squeeze every bit of value out of artificial intelligence, you're in the right place.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=38)** So let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[GPT-4]] (1), [[Gemini]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** gpt (1)
> **Analogies:** such as (1)
> **Speakers:** - use (1)


### 1. Multimodality

[↑ Back to Table of Contents](#table-of-contents)

#### What is multimodality?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=1)** - Before we start leveraging multimodality, it's a good idea to take a moment to understand what a modality is in AI.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=10)** We can think of a modality as the way something exists or is represented as far as an AI model is concerned.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=19)** Now, let's think of something such as an apple.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=22)** Here we have the word apple.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=24)** It's a text representation of an apple.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=28)** We can also have a drawing or an image of an apple as a representation of an apple.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=34)** We can also have a crunch sound as an audio representation of that apple.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=42)** Now, what's similar to modalities when we think about the way we perceive the world?
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=48)** If you thought about senses, that's actually a comparison that is often made.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=54)** Various modalities include text, images, audio, and even video.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=61)** Multimodality refers to systems and models that can take input and produce output from different modalities.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=70)** So we can think of an image generator that can take an image and a text description and can modify the image accordingly.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=81)** We can also think about a model that takes an image and a text question perhaps and outputs the text answer.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=90)** Now in this course, we'll also look at systems such as music generators.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=96)** They take in text, which is one modality, and produce audio, which is a different modality.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=104)** While such a system leverages different modalities, it's still debatable whether this is an example of multimodality because there's a unified input and a unified output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[Microsoft Word|Word]] (1)
> **Definitions:** refers to (1), is a  (1), is an  (1)
> **Analogies:** such as (2), similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - before (1)

#### Visual modality
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=0)** - [Instructor] When it comes to visual modalities, when we have imagery, we can have an input that has an image as well as a text prompt and contains some sort of question about the image.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=14)** So we can have an image of ingredients or an image of a web interface, and we can ask different questions about that image and get the model to reason about that.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=28)** This task is called visual question answering.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=32)** There's also image generation that involves giving the model an image along with a text prompt and getting a new image from the model.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=43)** Now, visual question answering isn't exclusive to images.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=48)** Some models can take an input that consists of a video as well as text, and use the text to reason about the video.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=58)** When it comes to video generation, very recent models, such as Sora, can take a video along with text and generate a new video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (2), web (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Textual and auditory modality
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=0)** - [Instructor] Text as a modality has been front and center in the way many people have discovered the power of generative AI.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=9)** There are GPT-based systems such as ChatGPT and Copilot, as well as Google's Gemini and Anthropic's Claude.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=20)** Now, these systems largely began as receiving text and producing text, and were widely used for text generation, question answering.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=31)** Some of these models are used for what's called "semantic similarity search," where we look for similar text based on meaning, rather than trying to match words.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=45)** Now, many of these text-based systems now support tasks that leverage multimodality, and we'll have a look at this very soon.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=55)** Finally, there's audio as a modality, and we now have systems that can take a prompt that is a text-based prompt requesting some music and produce music based on that prompt.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=69)** There's also speech synthesis and enhancement.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=72)** There's speech recognition.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=74)** Both of these have been around for a while, but have really improved lately.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=79)** Finally, there's question answering based on audio inputs.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=85)** So having covered many of the common modalities, we are ready to leverage multimodality in our work with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (3), power (1), [[Generative AI]] (1), [[ChatGPT]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Env Vars:** gpt (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. GPT-4

[↑ Back to Table of Contents](#table-of-contents)

#### GPT-4 and 4o
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=0)** - GPT4 and GPT4o are two very capable multimodal language models.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=7)** GPT stands for generative pre-trained transformer, and these models come from perhaps the most popular series of language models.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=18)** And while we don't know all the details about GPT4, we do know that there are versions of its predecessor, GPT3, that were as large as 175 billion parameters.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=33)** Now, when it comes to multimodality, GPT4 can take in images along with text, so you can give it a picture of some ingredients you have lying around in your kitchen and ask for an original recipe, and it will actually do a decent job generating one.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=53)** Another interesting trait of GPT4 is that it excels at writing code.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=59)** When you combine that with its ability to take in mixed inputs, you get some really interesting capabilities that we're going to look at later in this chapter.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=70)** GPT4o, where the O stands for omni, is a new model that puts an emphasis on multimodality.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=78)** Not only does it offer support for new modalities, it also has better performance when it comes to processing various types of inputs.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=89)** GPT4o also has better support for non-English inputs.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=94)** This flagship model is very impressive, and it's particularly exciting to see where it can use multimodality to help with accessibility applications.

> [!info]- Semantic Content
>
> **Env Vars:** gpt4 (4), gpt (1), gpt3 (1)
> **Definitions:** stands for (2), is a  (1)
> **Cross-References:** later in (1)
> **Analogies:** picture (1)
> **Speakers:** - gpt4 (1)

#### Text to image in GPT-4
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=0)** - [Narrator] A fun way to start using ChatGPT's multimodal capabilities is using the ChatGPT app.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=8)** You can take photos directly into your phone.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=12)** Here, I take a photo of this hourglass, and I ask ChatGPT to generate an icon for an AI powered time management app.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=23)** The app is geared towards tech consultants.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=26)** Generally speaking, the more details you give, the better, and this can be challenging.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=32)** We tend to rely on the visual input, but it's very important to be specific when it comes to the text prompt.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=41)** So here we have this icon that was generated for us, and I'm going to go ahead and click on it, and I'll go ahead and click Select.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=54)** I'll erase some of the image.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=59)** You can also modify the size of this selector, here on the top right.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=68)** And I'll add some text, so "An hourglass with a flat base on the bottom
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=85)** and on the top in an app icon."
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=97)** There it is.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=99)** So initially we had an image and a text input that created the prompt that generated this image.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=108)** Then we went ahead and used an image as well as a prompt in order to generate a modified version of that image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), prompt (3), ai (1), management (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### GPT-4 API with various input types
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=0)** - [Instructor] In this one, we're going to experiment with the OpenAI API, but you don't have to know how to code to follow along.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=7)** If you're not familiar with coding or APIs, feel free to follow along with this example using the ChatGPT interface.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=17)** Now, if you head over to platform.[openai.com](https://openai.com) and create an account, you can go ahead and grab an API key.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=27)** Once you've done that, head over to a terminal and export the environment variable, OPEN_AI_API_KEY.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=39)** And this is of course a secret key, so I'm not going to export the actual key, but this is where the key would go.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=49)** And once you've done that, you want to install the OpenAI Python package.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=54)** So python3 -m pip install openai.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=62)** And if you're running a virtual environment, you can install it to that virtual environment.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=68)** Now this platform offers a unique interface called The Playground, and you can get started in The Playground, select which model you wish to use.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=79)** I'm going to go ahead and use GPT-4o, and then you can insert a system message, so say you are an interior designer.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=94)** And you can go ahead and ask questions, you can even upload images.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=100)** And once you're done configuring this, you can hit this code button right here and it will actually give you the code snippet to use in your application to embed this Playground logic.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=114)** Now in the exercise files for this course, in 02_03, you'll find two things.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=120)** One is a picture of a mug with a robot on it, and then there's some code.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=127)** And here you'll notice I've imported OpenAI.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=131)** I've instantiated an OpenAI client.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=134)** I have an image URL, which you can use to pass images as part of your input.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=140)** But here I open the image and then I base64 encode this image.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=147)** Finally, I can make my API call.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=150)** So for this one, I'm going to use GPT-4o.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=154)** This is the latest GPT model at the time of this recording, and it's very capable when it comes to multimodality.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=162)** I'm going to say that the response type should be a JSON object, and then I'm going to insert a text input, and I'm going to tell the system, as an interior designer, you're capable of describing very specific colors.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=178)** What colors are used in this mug?
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=181)** Avoid generic names, output should be a JSON list, and I say that it's color one, color two, and then I add these three dots so that it goes on.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=194)** Then I have my image input and I've interpolated the base64 image into this string.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=202)** I could also use an image URL, which might be more straightforward at times.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=208)** Finally, I'll say that the max tokens is 300, and if there's a response, I'm going to stylize echo this response.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=218)** So let's go ahead and run this.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=221)** So python3 test_vision.py.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=228)** And it's telling me charcoal black, cauliflower blue, lemon yellow, vivid green, bright red, electric blue, and navy blue.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=239)** These are very non-generic colors to describe this mug, which is exactly what I wanted.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=246)** So with the OpenAI API, you can use some of the most capable large language models that are definitely capable of multimodality in your applications.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=258)** And The Playground interface makes it even more straightforward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (2), api (2), [[JSON]] (2), generic (2), [[ChatGPT]] (1)
> **Env Vars:** api (4), gpt (3), url (2), json (2), open_ai_api_key (1)
> **CLI Commands:** python3 (2), python (1), pip (1), find (1), make (1)
> **Prerequisites:** install (3)
> **File Paths:** test_vision.py (1)
> **Code Identifiers:** test_vision (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** terminal (1)

#### Challenge: Drawing to code
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-drawing-to-code?u=76281980)

#### Solution: Drawing to code
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=0)** - [Instructor] The goal of this challenge was to turn a drawing into some code.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=10)** And for this one, I went ahead and drew out a wireframe for an AI-powered time management app.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=19)** Then I captured that wireframe using my phone's camera.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=24)** Now it's time to put multimodality to work by turning this wireframe into a page.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=31)** So, here I am in the ChatGPT interface and I'll make sure I have GPT-4o selected.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=40)** Now I'm going to go ahead and drag this image and I'll type in my prompt.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=49)** You are a senior (keyboard clicking) front-end developer specializing in responsive web applications.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=70)** Generate a single HTML file
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=78)** with a responsive interface based on this wireframe.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=91)** The design should suit Silicon Valley's hottest startup.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=109)** Make sure to include the CSS rules in index.html.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=124)** Use animations to make the page more engaging.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=138)** Okay, so now I'm going to go through this code just to make sure that I understand it before I go ahead and run it and it looks okay.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=153)** Great!
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=154)** Now I'll copy the code, I'll paste it into my code editor, and to run this with a server, I can go ahead and type in python3 -m http.server
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=172)** and run a server of this directory.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=176)** Clear python3 -m http.server.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=185)** Now, I can go to local host, and here we have the nice little entrance animation.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=196)** We have the text, we have the basic functionality from the wireframe, and this is great.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=204)** Now, GPT-4o is actually much better at creating these interfaces.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=211)** Both GPT-4 and GPT-4o can write pretty impressive code, but it seems like when it comes to turning visuals into code GPT-4o has a slight edge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), ai (1), management (1), [[ChatGPT]] (1), prompt (1)
> **Env Vars:** gpt (5), html (1), css (1)
> **CLI Commands:** make (4), python3 (2)
> **Non-Speech:** (upbeat music) (1), (keyboard clicking) (1)
> **File Paths:** index.html (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. Gemini

[↑ Back to Table of Contents](#table-of-contents)

#### What is Gemini?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=1)** - Gemini 1.5 is Google's flagship large language model at the time of this recording.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=8)** Now, as far as modalities go, Gemini has quite a few capabilities.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=13)** As far as modalities go, Gemini supports text, images, video, and raw audio as inputs.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=23)** Now, the reason I say raw audio is that some systems can accept an audio input, but what they do is they transcribe the talking in it into text and then process that.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=36)** This model supports raw audio as input, and we're going to look at what this means as far as multimodality goes.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=44)** Another unique feature of this model is its very large context window.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=52)** This model can support up to a million token context window in production and in research they've been able to use up to 10 million tokens.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=64)** This could mean processing 700,000 words, one hour of video, or 11 hours of audio.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=74)** When we combine multimodal capabilities with this very, very impressive context window, we bring to the table some unique capabilities.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=86)** Now, Gemini can be accessed via the chat interface that Google offers.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=92)** You can also build an experiment with it using Google's AI Studio and leveraging the Vertex platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (4), [[Google]] (3), feature (1), [[Tokens]] (1), ai (1)
> **Versions:** 1.5 (1)
> **Speakers:** - gemini (1)

#### Images in Gemini
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=0)** - [Instructor] Let's put Google's multimodals capabilities to work using text in conjunction with images as our input.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=10)** So for this one, we're going to use this e-commerce website.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=15)** I've included a screenshot of this landing page in the exercise files for the course, and you can also use your own screenshot.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=23)** Now, for this one, you can use the Gemini Advanced Web interface, but I prefer to use AI studios, as it does give me some fine-tuned control.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=35)** And here, I'm going to include a system instruction, and this allows me to dictate the style or the premise of the conversation, and I'm going to tell Gemini that it's a marketing expert specializing in e-commerce.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=59)** Now, an interesting prompt engineering method, especially when you have a slightly longer context window, is to get the model to come up with a plan.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=70)** So I can say, "What are the steps you would take
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=78)** to evaluate the effectiveness of a landing page
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=90)** based on a screenshot?"
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=99)** So it's looking at clarity and focus, content and messaging, and it's giving me this plan.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=107)** Now, this is beneficial for me, but this also sets a good context for this task.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=114)** And now comes the part where I can upload an image.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=120)** I'll go ahead and choose my file.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=125)** And I can say, "This is our store's landing page.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=134)** What are three changes we can make
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=145)** to increase sales?
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=151)** How can we assess whether these changes are effective?"
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=169)** So it's suggesting a stronger headline.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=173)** It's even offering me "Show Your Tech Pride with Binaryvile Unique Gear."
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=180)** Then it also offers me to include a hero image or video.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=185)** It offers more product images, product descriptions, and a CTA button.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=191)** There are three sections, and a few subsections.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=195)** Then there's the assessing effectiveness part.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=198)** So it's suggesting AB testing, user feedback, as well as data analysis.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=204)** As you can see, this is very powerful, and breaking this down into a few steps, priming it with this initial query really does help.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=215)** Often in prompt engineering, it helps to ask the AI model to come up with a plan, and then provide it with a task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[Gemini]] (2), ai (2), [[Prompt Engineering]] (2), product (2)
> **CLI Commands:** make (1)
> **Env Vars:** cta (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Gemini video inputs
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=0)** - [Instructor] Take a look at this video.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=2)** Although a video is technically a series of images, it can often represent things that a still image cannot represent.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=11)** Google's Gemini 1.5 does quite an impressive job when it comes to reasoning about video inputs.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=19)** Let's head over to AI Studios and check this out.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=23)** Now, if you're using Gemini through the chat interface, you can add YouTube videos using their YouTube URLs.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=32)** Here on the other hand, you can insert video files, so I'm going to select video.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=39)** I'll do upload, browse, magic, and I'll go ahead and select this file.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=50)** After the video is processed, I'm told that this particular clip will take up 2065 tokens from my context window, and I'm ready to add my prompt.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=65)** In this video, the ball does not vanish.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=75)** What object does disappear?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=84)** Why is that surprising?
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=96)** Gemini is able to tell me that the object that disappears is the magic wand and that this is a surprise because I clearly hold the one in one hand and the ball in the other.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=108)** So the attention of the viewer is on the ball, and so they don't notice the wand disappearing.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=116)** So it's able to assess which object disappear, and it sort of hints that there is some misdirection here.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=124)** This is quite fascinating and the possibilities are really endless when it comes to mixing visual modalities with text.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=133)** Now, if you're using AI Studio, all you have to do is select get code, and you get a code snippet containing what you need in order to add this to your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (3), ai (2), [[Google]] (1), [[Tokens]] (1), prompt (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Video narration
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=5)** - [Narrator] It is time for a challenge and for this one, I want you to go ahead and find a video that has no narration.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=12)** Now, if you're using Gemini in the chat interface, you can go ahead and find something on YouTube.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=19)** If you're using AI Studio, you can even create a video and I want you to go ahead and create an narration script for that video.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=29)** That is the dialogue that goes with that video.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=33)** So if it's a nature film, it can be somebody explaining what's going on in a dramatic text or if it's a commercial, it could be the text for that commercial.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=45)** So let's take about 25 to 35 minutes to complete this challenge.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=49)** If it takes you a little bit longer to find the right video, that's totally fine and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1), ai (1), next (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### Solution: Video narration
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=0)** - [Instructor] The goal of this challenge was to create an narration script for a video that doesn't have any talking in it.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=12)** Now, you could do this using Gemini's Chat interface in conjunction with YouTube.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=18)** I chose to use AI Studio because I wanted to use my own video.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=23)** So I've created this video and it has some typing, some robots, and it says, save time with AI.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=35)** Now I'm going to go ahead and add a system instruction.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=39)** So I'll say you are a commercial screen writing expert.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=51)** Now I'll go over to the chat and I'll say, we are rolling out a new mobile app.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=63)** Here are some clips from our Super Bowl commercial
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=76)** and I'm going to go ahead and upload the video.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=80)** So video, upload, and I can drag this file to the drop zone.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=91)** Write the full narration script
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=99)** for the commercial.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=108)** Okay, so we have our script, and as you can see, there are details from the video input.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=113)** In this script, we have the typing, we have even the blurred person typing in the background.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=120)** We have all these things.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=122)** It's suggesting different music.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=125)** And all of this is with a prompt that has a text modality in conjunction with video.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=133)** So I hope you had fun with this one.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=136)** Exploring video as a modality is extremely useful, especially since this landscape is rapidly developing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[Gemini]] (1), prompt (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Auditory Modalities

[↑ Back to Table of Contents](#table-of-contents)

#### Audio in generative AI
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=1)** - In this chapter, we'll dive deeper into audio as a modality.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=5)** A good example of a multimodal AI task that involves audio is having a language model reason about an audio input.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=14)** We're going to look at this with Gemini 1.5.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=18)** So you would input a text prompt along with some audio, and the text could ask questions about this audio, and then the model can provide a text answer.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=30)** It's important to note that there are only a few systems that actually take in raw audio as the input, as opposed to transcribing the audio into text and then processing that text.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=44)** Now, an example of a task that most would not consider multimodality is using text to generate music.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=54)** Now, the reason this is not considered multimodality by most is that we have one type of input and one type of output.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=64)** Regardless of this, we are going to cover music generation in this chapter for two reason.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=71)** For one, it's a good way to get very familiar with audio as a modality.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=77)** The other reason is that this is a fast moving space, and I would not be surprised if we start to see models that can take audio along with text and generate some music based on that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (1), [[Gemini]] (1), prompt (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - in (1)

#### Prompt and audio
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=0)** - [Narrator] We're back in AI studio to see what it means for Gemini 1.5 to be able to process raw audio as an input.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=10)** Now I've created this recording.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=13)** Notice, that the name of the file is not very descriptive.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=25)** I also recorded this myself, as opposed to using something existing, to rule out the possibility that this system is somehow aware of this recording.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=36)** So next, what I'll do is go ahead and say, what is the short tune played in the following recording?
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=57)** I'll click Audio upload, and I can just drag this here.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=65)** This is a multimodal task.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=67)** We have some tokens which are text, and we have 224 tokens of audio.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=76)** Now I'll go ahead and run the prompt, and it was able to identify the melody as Twinkle Twinkle Little Star, which is one popular way of naming this tune by Mozart.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=91)** Now, this is different than many other systems that can take an audio file, transcribe it into text, and then have a large language model process that text.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=102)** Here, on the other hand, there is no speaking, it's music.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=107)** So Gemini 1.5 was able to reason about sound.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (2), [[Tokens]] (2), ai (1), next (1), prompt (1)
> **Versions:** 1.5 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (music playing) (1)

#### Generating music
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=0)** - [Narrator] To check out music generation, we're going to use an environment that Google has created for experimenting with things that are in development.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=10)** This environment can be used at aitestkitchen.[withgoogle.com](https://withgoogle.com), and at the time of this recording, it's actually restricted to certain regions, but this is a good taste of what's to come as far as generating music.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=27)** So I'm going to go ahead and select Launch Music FM.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=33)** Here I can type in a prompt, and this system works very well with comma separated keywords.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=41)** So I'm going to say harp, electric, guitar,
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=49)** rock and roll.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=56)** Now, keep in mind that this technology is very early on in its development, and it may not be long before we can generate background music for videos and really unleash creativity when it comes to making music with generative AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), prompt (1), [[Generative AI]] (1)
> **URLs:** [withgoogle.com](https://withgoogle.com) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Challenge: Soundtrack creation
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=5)** - [Instructor] In this one we're going to create background music for the commercial for our fictitious time-saving app.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=14)** So here is the video.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=21)** I'm going to use Music FM for the example.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=25)** If you have access to a different music generation system, feel free to use it.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=31)** The prompt for Music FM is going to use comma separated terms.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=36)** So take about 10 to 20 minutes to complete this task and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (1), next (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Soundtrack creation
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=0)** - [Instructor] The goal of this challenge was to generate background music for this short commercial.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=12)** Now, an interesting approach to this would be to insert the video into a model and ask for some keywords related to sound or to music.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=22)** What I'm going to do to keep things simple is I'll head over to Music-FX and I'll say upbeat, funk,
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=35)** and I'll say Super Bowl ad, and I'll put in technology.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=46)** I'll go ahead and generate.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=50)** So it's definitely interesting.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=71)** That was definitely upbeat and had some funk element to it.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=76)** What fascinates me is that this technology is very young, and so we are seeing the beginning of something that could really transform the creation of digital media.

> [!info]- Semantic Content
>
> **Non-Speech:** (upbeat music) (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=1)** - I'm Ronnie Sheer.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=2)** I wanted to thank you for taking the time to learn how to leverage multimodality in AI.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=8)** Now to keep the learning going, I can recommend a few resources as well as courses in the LinkedIn Learning Library.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=16)** To get a broad sense of the generative AI ecosystem and what prompt engineering means for various tools, I can recommend my course, [[Introduction To Prompt Engineering For Generative Ai]].
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=30)** Then there's Ray Villalobos' course, [[Exploring Million-Token Models with Google Gemini Pro 1.5]].
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=38)** In this course, Ray looks at what such a large context window means when it comes to different input types, such as text, video, and audio.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=50)** Finally, there's my course Prompt Engineering with Chat-GPT.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=54)** This course might really help you get more out of various systems that leverage text prompts with pretty advanced prompt engineering techniques.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=65)** Now to stay up to date with the latest trends and tools in the generative AI landscape, I recommend following me on LinkedIn, where I post regularly.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=76)** There's also my YouTube channel AI Skill Boost that's there to equip you with resources and courses, as well as quick tips that will help professionals stay up to date when it comes to AI skills.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=91)** After this video, you'll find a document that features these resources as well as some others.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=99)** Thank you so much for joining me for this course, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (4), ai (3), [[Generative AI]] (3), [[LinkedIn]] (2), [[Google Gemini]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** gpt (1)
> **Versions:** 1.5 (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - i (1)


## Instructor

- [[Ronnie Sheer]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-multimodal-prompting-for-generative-ai-3852046)

## Skills Covered

- Multimodal Prompting
- Generative AI
- AI Prompting
- Artificial Intelligence (AI)
- Prompt Engineering

## Path Context

### In [[Understanding Generative AI for Tech Leaders]]
← [[RAG and Fine-Tuning Explained]] | **21 of 22** | [[Agentic AI- Building Data-First AI Agents]] →

### In [[Getting Started with Prompt Engineering]]
← [[Prompt Engineering With Gemini]] | **4 of 6** | [[Prompt Engineering and AI Agents with ChatGPT]] →

## Appears In

- [[Understanding Generative AI for Tech Leaders]]
- [[Getting Started with Prompt Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Multimodal Prompting with Google's Project Gemini]] — Artificial Intelligence (AI), Multimodal Prompting, AI Prompting
- [[Prompting ChatGPT with Multimodal Techniques]] — Artificial Intelligence (AI), AI Prompting, Prompt Engineering
- [[Prompt Engineering- How to Talk to the AIs]] — Generative AI, Artificial Intelligence (AI), Prompt Engineering
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)