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
created: 2026-05-03
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

#### [GenAI with multimodal prompts](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/genai-with-multimodal-prompts?u=76281980&t=0)** - Use AI to solve more problems. That's what multimodality allows you to do, and that's exactly what we'll learn in this course. We'll look at how models such as [[GPT-4]] and [[Gemini]] can handle different types of inputs, including video and audio. We'll even generate music and images using cutting edge technologies. I'm Ronnie Sheer. I'm a software developer with over a decade of experience working for companies that lean heavily on AI. If you want to squeeze every bit of value out of [[Artificial Intelligence (AI)|artificial intelligence]], you're in the right place. So let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (1), [[Gemini]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** gpt (1)
> **Analogies:** such as (1)
> **Speakers:** - use (1)


### 1. Multimodality

[↑ Back to Table of Contents](#table-of-contents)

#### [What is multimodality?](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=1)** - Before we start leveraging multimodality, it's a good idea to take a moment to understand what a modality is in AI. We can think of a modality as the way something exists or is represented as far as an AI model is concerned. Now, let's think of something such as an apple. Here we have the [[Microsoft Word|word]] apple. It's a text representation of an apple. We can also have a drawing or an image of an apple as a representation of an apple. We can also have a crunch sound as an audio representation of that apple. Now, what's similar to modalities when we think about the way we perceive the world? If you thought about senses, that's actually a comparison that is often made. Various modalities include text, images, audio, and even video. Multimodality refers to systems and models that can take input and produce output from different modalities. So we can think of an image generator that can take an image and a text description and can modify the image accordingly. We can also think about a model that takes an image and a text question perhaps and outputs the text answer. Now in this course, we'll also look at systems such as music generators.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-multimodality?u=76281980&t=96)** They take in text, which is one modality, and produce audio, which is a different modality. While such a system leverages different modalities, it's still debatable whether this is an example of multimodality because there's a unified input and a unified output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** refers to (1), is a  (1), is an  (1)
> **Analogies:** such as (2), similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - before (1)

#### [Visual modality](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/visual-modality?u=76281980&t=0)** - [Instructor] When it comes to visual modalities, when we have imagery, we can have an input that has an image as well as a text prompt and contains some sort of question about the image. So we can have an image of ingredients or an image of a web interface, and we can ask different questions about that image and get the model to reason about that. This task is called visual question answering. There's also image generation that involves giving the model an image along with a text prompt and getting a new image from the model. Now, visual question answering isn't exclusive to images. Some models can take an input that consists of a video as well as text, and use the text to reason about the video. When it comes to video generation, very recent models, such as Sora, can take a video along with text and generate a new video.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Textual and auditory modality](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/textual-and-auditory-modality?u=76281980&t=0)** - [Instructor] Text as a modality has been front and center in the way many people have discovered the power of [[Generative AI]]. There are GPT-based systems such as [[ChatGPT]] and [[Microsoft Copilot|Copilot]], as well as [[Google]]'s [[Gemini]] and Anthropic's Claude. Now, these systems largely began as receiving text and producing text, and were widely used for text generation, question answering. Some of these models are used for what's called "semantic similarity search," where we look for similar text based on meaning, rather than trying to match words. Now, many of these text-based systems now support tasks that leverage multimodality, and we'll have a look at this very soon. Finally, there's audio as a modality, and we now have systems that can take a prompt that is a text-based prompt requesting some music and produce music based on that prompt. There's also speech synthesis and enhancement. There's [[Speech Recognition]]. Both of these have been around for a while, but have really improved lately. Finally, there's question answering based on audio inputs. So having covered many of the common modalities, we are ready to leverage multimodality in our work with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[ChatGPT]] (1), [[Microsoft Copilot|Copilot]] (1), [[Google]] (1), [[Gemini]] (1)
> **Env Vars:** gpt (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. GPT-4

[↑ Back to Table of Contents](#table-of-contents)

#### [GPT-4 and 4o](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=0)** - [[GPT-4|GPT4]] and GPT4o are two very capable multimodal language models. GPT stands for generative pre-trained transformer, and these models come from perhaps the most popular series of language models. And while we don't know all the details about GPT4, we do know that there are versions of its predecessor, GPT3, that were as large as 175 billion parameters. Now, when it comes to multimodality, GPT4 can take in images along with text, so you can give it a picture of some ingredients you have lying around in your kitchen and ask for an original recipe, and it will actually do a decent job generating one. Another interesting trait of GPT4 is that it excels at writing code. When you combine that with its ability to take in mixed inputs, you get some really interesting capabilities that we're going to look at later in this chapter. GPT4o, where the O stands for omni, is a new model that puts an emphasis on multimodality. Not only does it offer support for new modalities, it also has better performance when it comes to processing various types of inputs. GPT4o also has better support for non-English inputs. This flagship model is very impressive,
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-and-4o?u=76281980&t=97)** and it's particularly exciting to see where it can use multimodality to help with accessibility applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4|Gpt4]] (4)
> **Env Vars:** gpt4 (4), gpt (1), gpt3 (1)
> **Definitions:** stands for (2), is a  (1)
> **Cross-References:** later in (1)
> **Analogies:** picture (1)
> **Speakers:** - gpt4 (1)

#### [Text to image in GPT-4](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=0)** - [Narrator] A fun way to start using [[ChatGPT]]'s multimodal capabilities is using the ChatGPT app. You can take photos directly into your phone. Here, I take a photo of this hourglass, and I ask ChatGPT to generate an icon for an AI powered time management app. The app is geared towards tech consultants. Generally speaking, the more details you give, the better, and this can be challenging. We tend to rely on the visual input, but it's very important to be specific when it comes to the text prompt. So here we have this icon that was generated for us, and I'm going to go ahead and click on it, and I'll go ahead and click Select. I'll erase some of the image. You can also modify the size of this selector, here on the top right. And I'll add some text, so "An hourglass with a flat base on the bottom
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=85)** and on the top in an app icon."
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/text-to-image-in-gpt4?u=76281980&t=97)** There it is. So initially we had an image and a text input that created the prompt that generated this image. Then we went ahead and used an image as well as a prompt in order to generate a modified version of that image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### [GPT-4 API with various input types](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=0)** - [Instructor] In this one, we're going to experiment with the [[OpenAI API]], but you don't have to know how to code to follow along. If you're not familiar with coding or APIs, feel free to follow along with this example using the [[ChatGPT]] interface. Now, if you head over to platform.[openai.com](https://openai.com) and create an account, you can go ahead and grab an API key. Once you've done that, head over to a terminal and export the environment variable, OPEN_AI_API_KEY. And this is of course a secret key, so I'm not going to export the actual key, but this is where the key would go. And once you've done that, you want to install the OpenAI [[Python (Programming Language)|Python]] package. So python3 -m pip install openai.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=62)** And if you're running a virtual environment, you can install it to that virtual environment. Now this platform offers a unique interface called The Playground, and you can get started in The Playground, select which model you wish to use. I'm going to go ahead and use [[GPT-4|GPT-4o]], and then you can insert a system message, so say you are an interior designer.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=94)** And you can go ahead and ask questions, you can even upload images. And once you're done configuring this, you can hit this code button right here and it will actually give you the code snippet to use in your application to embed this Playground logic. Now in the exercise files for this course, in 02_03, you'll find two things. One is a picture of a mug with a robot on it, and then there's some code. And here you'll notice I've imported OpenAI. I've instantiated an OpenAI client. I have an image URL, which you can use to pass images as part of your input. But here I open the image and then I base64 encode this image. Finally, I can make my API call. So for this one, I'm going to use GPT-4o. This is the latest GPT model at the time of this recording, and it's very capable when it comes to multimodality. I'm going to say that the response type should be a [[JSON]] object, and then I'm going to insert a text input, and I'm going to tell the system, as an interior designer, you're capable of describing very specific colors. What colors are used in this mug? Avoid generic names, output should be a JSON list, and I say that it's color one, color two,
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gpt4-api-with-various-input-types?u=76281980&t=189)** and then I add these three dots so that it goes on. Then I have my image input and I've interpolated the base64 image into this string. I could also use an image URL, which might be more straightforward at times. Finally, I'll say that the max [[Tokens]] is 300, and if there's a response, I'm going to stylize echo this response. So let's go ahead and run this. So python3 test_vision.py. And it's telling me charcoal black, cauliflower blue, lemon yellow, vivid green, bright red, electric blue, and navy blue. These are very non-generic colors to describe this mug, which is exactly what I wanted. So with the OpenAI API, you can use some of the most capable [[Large Language Models (LLM)|large language models]] that are definitely capable of multimodality in your applications. And The Playground interface makes it even more straightforward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (2), [[GPT-4|Gpt-4o]] (2), [[JSON]] (2), [[ChatGPT]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (4), gpt (3), url (2), json (2), open_ai_api_key (1)
> **CLI Commands:** python3 (2), python (1), pip (1), find (1), make (1)
> **Prerequisites:** install (3)
> **File Paths:** test_vision.py (1)
> **Code Identifiers:** test_vision (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** terminal (1)

#### [Challenge: Drawing to code](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-drawing-to-code?u=76281980)

#### [Solution: Drawing to code](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=0)** - [Instructor] The goal of this challenge was to turn a drawing into some code. And for this one, I went ahead and drew out a wireframe for an AI-powered time management app. Then I captured that wireframe using my phone's camera. Now it's time to put multimodality to work by turning this wireframe into a page. So, here I am in the [[ChatGPT]] interface and I'll make sure I have [[GPT-4|GPT-4o]] selected. Now I'm going to go ahead and drag this image and I'll type in my prompt. You are a senior (keyboard clicking) front-end developer specializing in responsive web applications.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=70)** Generate a single [[HTML]] file
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=78)** with a responsive interface based on this wireframe.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=91)** The design should suit Silicon Valley's hottest startup. Make sure to include the CSS rules in index.html.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=124)** Use animations to make the page more engaging.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=138)** Okay, so now I'm going to go through this code just to make sure that I understand it before I go ahead and run it and it looks okay. Great! Now I'll copy the code, I'll paste it into my code editor, and to run this with a server, I can go ahead and type in python3 -m http.server
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=172)** and run a server of this directory. Clear python3 -m http.server.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-drawing-to-code?u=76281980&t=185)** Now, I can go to local host, and here we have the nice little entrance animation. We have the text, we have the basic functionality from the wireframe, and this is great. Now, GPT-4o is actually much better at creating these interfaces. Both [[GPT-4]] and GPT-4o can write pretty impressive code, but it seems like when it comes to turning visuals into code GPT-4o has a slight edge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4|Gpt-4o]] (4), [[HTML]] (2), [[ChatGPT]] (1), [[GPT-4]] (1)
> **Env Vars:** gpt (5), html (1), css (1)
> **CLI Commands:** make (4), python3 (2)
> **Non-Speech:** (upbeat music) (1), (keyboard clicking) (1)
> **File Paths:** index.html (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. Gemini

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Gemini?](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=1)** - [[Gemini]] 1.5 is [[Google]]'s flagship large language model at the time of this recording. Now, as far as modalities go, Gemini has quite a few capabilities. As far as modalities go, Gemini supports text, images, video, and raw audio as inputs. Now, the reason I say raw audio is that some systems can accept an audio input, but what they do is they transcribe the talking in it into text and then process that. This model supports raw audio as input, and we're going to look at what this means as far as multimodality goes. Another unique feature of this model is its very large context window. This model can support up to a million token context window in production and in research they've been able to use up to 10 million [[Tokens]]. This could mean processing 700,000 words, one hour of video, or 11 hours of audio. When we combine multimodal capabilities with this very, very impressive context window, we bring to the table some unique capabilities. Now, Gemini can be accessed via the chat interface that Google offers. You can also build an experiment with it
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/what-is-gemini?u=76281980&t=95)** using Google's AI Studio and leveraging the [[Vertex]] platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (4), [[Google]] (3), [[Tokens]] (1), [[Vertex]] (1)
> **Versions:** 1.5 (1)
> **Speakers:** - gemini (1)

#### [Images in Gemini](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=0)** - [Instructor] Let's put [[Google]]'s multimodals capabilities to work using text in conjunction with images as our input. So for this one, we're going to use this [[E-Commerce]] website. I've included a screenshot of this landing page in the exercise files for the course, and you can also use your own screenshot. Now, for this one, you can use the [[Gemini]] Advanced Web interface, but I prefer to use AI studios, as it does give me some fine-tuned control. And here, I'm going to include a system instruction, and this allows me to dictate the style or the premise of the conversation, and I'm going to tell Gemini that it's a marketing expert specializing in e-commerce.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=59)** Now, an interesting [[Prompt Engineering]] method, especially when you have a slightly longer context window, is to get the model to come up with a plan. So I can say, "What are the steps you would take
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=78)** to evaluate the effectiveness of a landing page
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=90)** based on a screenshot?"
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=99)** So it's looking at clarity and focus, content and messaging, and it's giving me this plan. Now, this is beneficial for me, but this also sets a good context for this task. And now comes the part where I can upload an image. I'll go ahead and choose my file. And I can say, "This is our store's landing page.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=134)** What are three changes we can make
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=145)** to increase sales? How can we assess whether these changes are effective?"
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/images-in-gemini?u=76281980&t=169)** So it's suggesting a stronger headline. It's even offering me "Show Your Tech Pride with Binaryvile Unique Gear." Then it also offers me to include a hero image or video. It offers more product images, product descriptions, and a CTA button. There are three sections, and a few subsections. Then there's the assessing effectiveness part. So it's suggesting AB testing, user feedback, as well as data analysis. As you can see, this is very powerful, and breaking this down into a few steps, priming it with this initial query really does help. Often in prompt engineering, it helps to ask the AI model to come up with a plan, and then provide it with a task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[Gemini]] (2), [[Prompt Engineering]] (2), [[Google]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** cta (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Gemini video inputs](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=0)** - [Instructor] Take a look at this video. Although a video is technically a series of images, it can often represent things that a still image cannot represent. [[Google]]'s [[Gemini]] 1.5 does quite an impressive job when it comes to reasoning about video inputs. Let's head over to AI Studios and check this out. Now, if you're using Gemini through the chat interface, you can add YouTube videos using their YouTube URLs. Here on the other hand, you can insert video files, so I'm going to select video. I'll do upload, browse, magic, and I'll go ahead and select this file. After the video is processed, I'm told that this particular clip will take up 2065 [[Tokens]] from my context window, and I'm ready to add my prompt. In this video, the ball does not vanish.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=75)** What object does disappear?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=84)** Why is that surprising?
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/gemini-video-inputs?u=76281980&t=96)** Gemini is able to tell me that the object that disappears is the magic wand and that this is a surprise because I clearly hold the one in one hand and the ball in the other. So the attention of the viewer is on the ball, and so they don't notice the wand disappearing. So it's able to assess which object disappear, and it sort of hints that there is some misdirection here. This is quite fascinating and the possibilities are really endless when it comes to mixing visual modalities with text. Now, if you're using AI Studio, all you have to do is select get code, and you get a code snippet containing what you need in order to add this to your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (3), [[Google]] (1), [[Tokens]] (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Video narration](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-video-naration?u=76281980&t=5)** - [Narrator] It is time for a challenge and for this one, I want you to go ahead and find a video that has no narration. Now, if you're using [[Gemini]] in the chat interface, you can go ahead and find something on YouTube. If you're using AI Studio, you can even create a video and I want you to go ahead and create an narration script for that video. That is the dialogue that goes with that video. So if it's a nature film, it can be somebody explaining what's going on in a dramatic text or if it's a commercial, it could be the text for that commercial. So let's take about 25 to 35 minutes to complete this challenge. If it takes you a little bit longer to find the right video, that's totally fine and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Video narration](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=0)** - [Instructor] The goal of this challenge was to create an narration script for a video that doesn't have any talking in it. Now, you could do this using [[Gemini]]'s Chat interface in conjunction with YouTube. I chose to use AI Studio because I wanted to use my own video. So I've created this video and it has some typing, some robots, and it says, save time with AI. Now I'm going to go ahead and add a system instruction. So I'll say you are a commercial screen writing expert. Now I'll go over to the chat and I'll say, we are rolling out a new mobile app. Here are some clips from our Super Bowl commercial
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=76)** and I'm going to go ahead and upload the video. So video, upload, and I can drag this file to the drop zone. Write the full narration script
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=99)** for the commercial.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-video-naration?u=76281980&t=108)** Okay, so we have our script, and as you can see, there are details from the video input. In this script, we have the typing, we have even the blurred person typing in the background. We have all these things. It's suggesting different music. And all of this is with a prompt that has a text modality in conjunction with video. So I hope you had fun with this one. Exploring video as a modality is extremely useful, especially since this landscape is rapidly developing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Auditory Modalities

[↑ Back to Table of Contents](#table-of-contents)

#### [Audio in generative AI](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/audio-in-generative-ai?u=76281980&t=1)** - In this chapter, we'll dive deeper into audio as a modality. A good example of a multimodal AI task that involves audio is having a language model reason about an audio input. We're going to look at this with [[Gemini]] 1.5. So you would input a text prompt along with some audio, and the text could ask questions about this audio, and then the model can provide a text answer. It's important to note that there are only a few systems that actually take in raw audio as the input, as opposed to transcribing the audio into text and then processing that text. Now, an example of a task that most would not consider multimodality is using text to generate music. Now, the reason this is not considered multimodality by most is that we have one type of input and one type of output. Regardless of this, we are going to cover music generation in this chapter for two reason. For one, it's a good way to get very familiar with audio as a modality. The other reason is that this is a fast moving space, and I would not be surprised if we start to see models that can take audio along with text and generate some music based on that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - in (1)

#### [Prompt and audio](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=0)** - [Narrator] We're back in AI studio to see what it means for [[Gemini]] 1.5 to be able to process raw audio as an input. Now I've created this recording. Notice, that the name of the file is not very descriptive. I also recorded this myself, as opposed to using something existing, to rule out the possibility that this system is somehow aware of this recording. So next, what I'll do is go ahead and say, what is the short tune played in the following recording?
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/prompt-and-audio?u=76281980&t=57)** I'll click Audio upload, and I can just drag this here. This is a multimodal task. We have some [[Tokens]] which are text, and we have 224 tokens of audio. Now I'll go ahead and run the prompt, and it was able to identify the melody as Twinkle Twinkle Little Star, which is one popular way of naming this tune by Mozart. Now, this is different than many other systems that can take an audio file, transcribe it into text, and then have a large language model process that text. Here, on the other hand, there is no speaking, it's music. So Gemini 1.5 was able to reason about sound.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (2), [[Tokens]] (2)
> **Versions:** 1.5 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (music playing) (1)

#### [Generating music](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=0)** - [Narrator] To check out music generation, we're going to use an environment that [[Google]] has created for experimenting with things that are in development. This environment can be used at aitestkitchen.[withgoogle.com](https://withgoogle.com), and at the time of this recording, it's actually restricted to certain regions, but this is a good taste of what's to come as far as generating music. So I'm going to go ahead and select Launch Music FM. Here I can type in a prompt, and this system works very well with comma separated keywords. So I'm going to say harp, electric, guitar,
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/generating-music?u=76281980&t=49)** rock and roll. Now, keep in mind that this technology is very early on in its development, and it may not be long before we can generate background music for videos and really unleash creativity when it comes to making music with [[Generative AI]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Generative AI]] (1)
> **URLs:** [withgoogle.com](https://withgoogle.com) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Soundtrack creation](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/challenge-soundtrack-creation?u=76281980&t=5)** - [Instructor] In this one we're going to create background music for the commercial for our fictitious time-saving app. So here is the video. I'm going to use Music FM for the example. If you have access to a different music generation system, feel free to use it. The prompt for Music FM is going to use comma separated terms. So take about 10 to 20 minutes to complete this task and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Soundtrack creation](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=0)** - [Instructor] The goal of this challenge was to generate background music for this short commercial. Now, an interesting approach to this would be to insert the video into a model and ask for some keywords related to sound or to music. What I'm going to do to keep things simple is I'll head over to Music-FX and I'll say upbeat, funk,
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=35)** and I'll say Super Bowl ad, and I'll put in technology.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/solution-soundtrack-creation?u=76281980&t=46)** I'll go ahead and generate. So it's definitely interesting. That was definitely upbeat and had some funk element to it. What fascinates me is that this technology is very young, and so we are seeing the beginning of something that could really transform the creation of digital media.

> [!info]- Semantic Content
>
> **Non-Speech:** (upbeat music) (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=1)** - I'm Ronnie Sheer. I wanted to thank you for taking the time to learn how to leverage multimodality in AI. Now to keep the learning going, I can recommend a few resources as well as courses in the [[LinkedIn]] Learning Library. To get a broad sense of the [[Generative AI]] ecosystem and what [[Prompt Engineering]] means for various tools, I can recommend my course, [[Introduction To Prompt Engineering For Generative Ai]]. Then there's Ray Villalobos' course, [[Exploring Million-Token Models with Google Gemini Pro 1.5]]. In this course, Ray looks at what such a large context window means when it comes to different input types, such as text, video, and audio. Finally, there's my course Prompt Engineering with Chat-GPT. This course might really help you get more out of various systems that leverage text prompts with pretty advanced prompt engineering techniques. Now to stay up to date with the latest trends and tools in the generative AI landscape, I recommend following me on LinkedIn, where I post regularly. There's also my YouTube channel AI Skill Boost that's there to equip you with resources and courses, as well as quick tips that will help professionals stay up to date when it comes to AI skills. After this video, you'll find a document
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-multimodal-prompting-for-generative-ai/next-steps?u=76281980&t=94)** that features these resources as well as some others. Thank you so much for joining me for this course, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (4), [[Generative AI]] (3), [[LinkedIn]] (2), [[Google Gemini]] (1)
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