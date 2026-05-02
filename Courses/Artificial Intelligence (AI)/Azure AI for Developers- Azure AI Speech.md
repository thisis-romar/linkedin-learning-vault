---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-ai-for-developers-azure-ai-speech
url: "https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech"
duration_minutes: 55
duration: 55m
level: Intermediate
updated: 4/15/2025
learners: 3666
skills:
  - AI Software Development
  - Artificial Intelligence (AI)
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEXlWepR8yU4Q/learning-public-crop_675_1200/B4EZWwZ0VUGwAc-/0/1742421313178?e=2147483647&amp;v=beta&amp;t=y4hFqFwyxO1zugxtYr60RpHtUbj9arqhQ2ulYXGCbCk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Build AI Products Using Azure AI Services in Your Development Lifecycle]]'
prev_courses:
  - '[[Azure AI for Developers- Content Safety and Responsible AI]]'
next_courses:
  - '[[Azure AI for Developers- Building AI Agents]]'
path_nav: '[{"path":"Build AI Products Using Azure AI Services in Your Development Lifecycle","position":7,"total":8,"prev":"Azure AI for Developers- Content Safety and Responsible AI","next":"Azure AI for Developers- Building AI Agents"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/microsoft-azure
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20AI%20for%20Developers-%20Azure%20AI%20Speech.md)

![Azure AI for Developers: Azure AI Speech](https://media.licdn.com/dms/image/v2/D4E0DAQEXlWepR8yU4Q/learning-public-crop_675_1200/B4EZWwZ0VUGwAc-/0/1742421313178?e=2147483647&amp;v=beta&amp;t=y4hFqFwyxO1zugxtYr60RpHtUbj9arqhQ2ulYXGCbCk)

# Azure AI for Developers: Azure AI Speech

> Using pre-built or customizable speech models, Azure AI Speech allows developers to build multimodal, multilingual, voice-enabled AI apps. In this course, instructor Marco Casalaina begins by outlining the basic features and capabilities of Azure Speech and identifies the most common use cases. Then, through hands-on instruction, he covers speech to text models and transcriptions, text to speech t

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech) | 55m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What this course is about](#what-this-course-is-about)
  - [What you should know](#what-you-should-know)
- [**1. Azure Speech in Action: Common Use Cases**](#1-azure-speech-in-action-common-use-cases) (1 videos)
  - [Common scenarios for Azure AI Speech](#common-scenarios-for-azure-ai-speech)
- [**2. Speech to Text and Transcription**](#2-speech-to-text-and-transcription) (5 videos)
  - [How speech to text works](#how-speech-to-text-works)
  - [Transcription](#transcription)
  - [Customizing speech to text](#customizing-speech-to-text)
  - [Choosing between the OpenAI Whisper and Azure Speech models](#choosing-between-the-openai-whisper-and-azure-speech-models)
  - [Speech translation](#speech-translation)
- [**3. Text to Speech**](#3-text-to-speech) (3 videos)
  - [Text to speech: Azure Voice Gallery](#text-to-speech-azure-voice-gallery)
  - [Audio content creation](#audio-content-creation)
  - [Custom voices](#custom-voices)
- [**4. Avatars**](#4-avatars) (3 videos)
  - [Combining speech with avatars](#combining-speech-with-avatars)
  - [Building custom avatars](#building-custom-avatars)
  - [Live chat avatars](#live-chat-avatars)
- [**5. Advanced Speech Capabilities**](#5-advanced-speech-capabilities) (4 videos)
  - [Video translation](#video-translation)
  - [Pronunciation assessment](#pronunciation-assessment)
  - [Using Azure Content Understanding for audio and video](#using-azure-content-understanding-for-audio-and-video)
  - [Azure Speech vs. real-time LLMs](#azure-speech-vs-real-time-llms)
- [**Conclusion**](#conclusion) (1 videos)
  - [More resources on Azure Speech](#more-resources-on-azure-speech)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### What this course is about
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=0)** - The way we interact with AI is changing rapidly and becoming more speech centric.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=5)** In this course, you'll explore how Azure AI speech is transforming AI interactions from speech to text, to text to speech to real time translation and language models.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=16)** We'll start with the fundamentals and work our way up to advanced techniques covering integration strategies and customizations.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=24)** This course is designed to be hands-on.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=26)** You'll follow along with detailed demos and real world examples that make it easy to deploy your own AI driven voice solutions.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=34)** Whether you're a seasoned developer or just starting your journey in AI, this course will empower you with the skills and confidence to harness Azure's state-of-the-art speech technologies.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=45)** I'm Marco Casalaina, VP of Products of Core AI at Microsoft, and I'll be your guide on this journey into voice-driven AI innovation.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=54)** What do you think, Marco Avatar, are you ready to get started?
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-this-course-is-about?u=76281980&t=58)** - All right, let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (7), [[Microsoft Azure|Azure]] (2), [[Microsoft Products|Products]] (1), [[Microsoft]] (1)
> **Speakers:** - the (1), - all (1)
> **CLI Commands:** make (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's consider the essential prerequisites you should have to get the most out of this course.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=5)** First, you'll need a basic understanding of Azure.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=9)** You should be comfortable navigating the Azure portal and familiar with core Azure services.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=15)** Don't worry if you're not an expert.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=16)** Having foundational knowledge will help you as we progress through this course.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=21)** This course also assumes that you have some programming skills.l Whether you're new to coding or have been coding for years, the concepts we'll discuss are designed to be accessible and straightforward.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=33)** A quick note on languages.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=35)** While we'll be showcasing most examples in Python, Azure AI Speech is versatile and can be used with nearly any programming language.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=43)** Python has become one of the go-to languages for AI projects, which is why we've chosen it for clarity and ease of use in our demos.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=52)** Throughout this course, you'll see hands-on demonstrations in coding examples that build your understanding step by step.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=59)** We'll start from the basics, move on to more advanced scenarios, and equip you with the skills needed to implement Azure AI Speech in your projects.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=69)** If you're comfortable with Azure fundamentals and have some development experience, you're ready to move on.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=74)** For those who might need a refresher, you might first try a few of the other LinkedIn learning courses, including one of my own, Introduction to Azure AI.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/what-you-should-know?u=76281980&t=83)** Now, let's dive into the exciting world of Azure AI Speech.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), ai (5), [[Programming]] (2), [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2)
> **Tools:** azure portal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Azure Speech in Action: Common Use Cases

[↑ Back to Table of Contents](#table-of-contents)

#### Common scenarios for Azure AI Speech
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=0)** - [Narrator] So how do people actually use Azure AI Speech?
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=3)** Let's find out.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=6)** Now, we're in the Speech Studio at speech.[microsoft.com](https://microsoft.com).
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=10)** At the very top of the Speech Studio are some common scenarios in which Speech is used.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=15)** One of the most common uses of it is to caption videos.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=18)** It can be done in batch.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=24)** - Welcome back to the Azure Cosmos DB Essential Series.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=27)** My name is Mustafa.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=28)** I am the Portfolio PMM for Azure Cosmos DB.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=31)** (mouse clicking)
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=32)** - [Narrator] Or in real time.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=34)** - When you use the real-time captioning and transcription system in Microsoft Teams, you're using Azure AI Speech.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=44)** - [Narrator] It can also be used for post-call transcription and analytics, transcribing, for example, a customer service call.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=52)** - [Customer Representative] Hello, thank you for calling Contoso.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=54)** Who am I speaking with today?
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=55)** - [Mary] Hi, my name is Mary Rondo.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=57)** I'm trying to enroll myself with Contoso.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=59)** (mouse clicking)
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=60)** - [Narrator] You can chat with an avatar, which we'll look at a little bit more deeply later in this course, or you can put that together into something like a language learning solution.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=69)** Hello there. Can you help me learn English?
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=75)** - Of course, I can help with vocabulary, grammar, pronunciation, and more.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=80)** How would you like to start?
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=83)** - [Narrator] So those are just a few examples of the ways that people use Azure AI Speech.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=89)** There are a few scenarios there which we did not cover because we'll go into them in much more depth a little bit later in this course, as I mentioned earlier.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=98)** The scenarios we just looked at put together multiple aspects of Azure AI Speech.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=103)** In the next chapters of this course, we'll be looking at these basic functions one by one.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=108)** We'll start with speech to text and transcription.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=111)** Then, we'll look at text to speech, then avatars.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/common-scenarios-for-azure-ai-speech?u=76281980&t=116)** Finally, we'll look at some of the more advanced functions like video translation, pronunciation assessment, and content understanding, and we'll get a feel for when you might want to use Azure Speech and when you might want to instead use a real-time large language model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), ai (4), [[Real-Time]] (2), [[Microsoft]] (1), [[Microsoft Teams]] (1)
> **Speakers:** - [narrator] (5), - welcome (1), - when (1), - [customer (1), - [mary] (1)
> **Cross-References:** later in (1), in the next (1)
> **Non-Speech:** (mouse clicking) (2)
> **CLI Commands:** find (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Env Vars:** pmm (1)
> **Analogies:** for example (1)


### 2. Speech to Text and Transcription

[↑ Back to Table of Contents](#table-of-contents)

#### How speech to text works
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/how-speech-to-text-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/how-speech-to-text-works?u=76281980&t=0)** - [Instructor] We'll begin with Speech to Text.
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/how-speech-to-text-works?u=76281980&t=3)** As its name suggests, this function takes in speech in various forms and outputs text.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/how-speech-to-text-works?u=76281980&t=9)** We'll start with the Transcription functions, which are divided into three sub-functions.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/how-speech-to-text-works?u=76281980&t=15)** There's real-time transcription, fast transcription, and batch transcription, and you use each one to solve different problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Real-Time]] (1)
> **Speakers:** - [instructor] (1)

#### Transcription
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=0)** - [Instructor] So let's have a look at these transcription functions.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=4)** To demonstrate this part, we'll use the Azure AI Foundry at ai.[azure.com](https://azure.com).
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=10)** To get started in the Azure AI Foundry, you're going to want to create a project.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=14)** This project will be a repository of all the different resources that you'll need to use speech and all kinds of other functions in Azure AI Foundry.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=23)** Once you've got your project, you can find the Azure AI speech functions in the Speech Playground.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=29)** Let's begin with real-time transcription.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=32)** You would use real-time transcription, as the name suggests, when you need to transcribe something in real time, as we did earlier in Microsoft Teams.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=40)** Here in the Playground, you can try it just by recording something with your microphone.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=45)** Hey, LinkedIn learners.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=46)** What's going on?
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=48)** Real-time transcription has a number of advanced options that you can explore.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=53)** One of them is language identification.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=56)** You can choose a set of languages that it can pick from.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=59)** So here, I've given it the ability to transcribe both English and Italian, and it'll do it continuously, switching languages as it goes.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=71)** Hey, LinkedIn learners, how are you doing?
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=73)** (instructor speaks Italian) So there we see that it figured out that I was speaking English first and then Italian.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=82)** There's also the option for diarization when you have an input that contains multiple speakers.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=88)** Speaker diarization will enable real-time transcription to determine which speaker is which according to their various voices.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=96)** You can choose whether you want a detailed output format with timestamps and all kinds of little lexical outputs, or a simple output that just emits the timestamps and the text.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=106)** And you can give it a set of known words and phrases so that, for example, when somebody says the word LinkedIn, it doesn't come out as Linked In, two words.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=117)** Now since this is a course for developers, this is probably a good time to take a look at the View code button.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=123)** This points us to some documentation and a quick start, but most importantly, the sample code that you can find in GitHub.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=130)** This repository is called cognitive-services-speech-sdk.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=135)** Cognitive Services is the old name of the speech services in AI Foundry.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=140)** In this samples directory, you'll find a whole bunch of different samples in all number of languages.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=146)** Here we'll be using Python, and in the console directory, we'll find the transcription sample that we'll be using now.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=152)** So let's switch over to VS Code to do some proper development.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=156)** Now, we'll not go too much here into the basics of Python, but in general, it's a best practice to create yourself a virtual environment.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=164)** And in this virtual environment, we're going to install a couple of packages.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=168)** The first one we'll need is called SciPy, and then we'll want to install the Azure Cognitive Services Speech SDK for Python.
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=177)** So now your environment is all set up, but in a number of these files, you will have to set the key and the region, the service region, like East US or something like that.
>
> **[3:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=187)** And rather than hard-code these into the code, I actually set these to go to some environment variables.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=193)** In reality, I used GitHub Copilot Edits to make this change across all of the Python in these samples because GitHub Copilot Edits can make changes across a wide swath of files.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=205)** So if you're using GitHub Copilot, this is a great way to be able to do this across all of the sample files or all the files in a set that you want to change.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=214)** But that's the subject of a different LinkedIn Learning course.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=218)** Regardless, you do need to set your key and your region in here, and so my environment and my code is all set up.
>
> **[3:47](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=227)** And let's go ahead and run this in PowerShell just so we can see it a little more clearly.
>
> **[3:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=232)** The samples I'm using here are a set of console apps, and the main file of these console apps is called main.py, from which you can run a number of these speech samples.
>
> **[4:02](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=242)** I'm going to run the transcription sample by choosing number 3.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=245)** Then I'm going to transcribe from my microphone by choosing number 1.
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=251)** Hello, LinkedIn learners.
>
> **[4:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=252)** How are you all doing?
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=256)** I type stop, like it says, and then enter, and in a moment, it will emit its transcription, and lo and behold, we can see it right here.
>
> **[4:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=263)** It transcribed from my microphone.
>
> **[4:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=265)** "Hello, LinkedIn learners.
>
> **[4:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=266)** How are you all doing?"
>
> **[4:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=267)** So it did indeed recognize my speech.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=272)** Now back to VS Code.
>
> **[4:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=273)** The code for this is quite simple.
>
> **[4:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=275)** We're in the transcription_sample.py file, and we're in this method, conversation_transcription_from_microphone, in which we set up the speech_config with the key and the region.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=285)** We set up a transcriber, and then we set up some event handlers to wait for the stop event and for the transcription events.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=292)** And then we start transcribing until we're done, and that's all there is to it.
>
> **[4:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=297)** It's pretty easy to use the Speech SDK in Python, and it's equally easy in other languages than Python also.
>
> **[5:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=303)** Now let's head back to the AI Foundry to look at the other types of transcription.
>
> **[5:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=308)** We won't go into the code samples for each one of these things because they're pretty similar, and they're covered in the same code sample file that I showed earlier.
>
> **[5:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=316)** Now we're looking at fast transcription.
>
> **[5:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=318)** Fast transcription does a synchronous transcription quite quickly, and it has a number of advanced options, like real-time transcription does.
>
> **[5:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=327)** It has the ability to do a profanity filter, the ability to take in different audio channels on the input recording.
>
> **[5:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=335)** It can do automatic language identification.
>
> **[5:37](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=337)** In this case, I'm just going to set this one to do English, and I can do speaker diarization.
>
> **[5:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=343)** I do have two speakers in the file I'm going to give it, and so I will turn that on with a maximum of two.
>
> **[5:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=350)** Now I'll give it a file, and my fast transcription is done.
>
> **[5:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=358)** For this minute-long file, it actually took about 15 seconds or less to generate this transcript.
>
> **[6:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=363)** And as you can see, it does diarize.
>
> **[6:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=365)** So you can see that Speaker 1 and Speaker 2 are separated over here.
>
> **[6:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=369)** So you can use fast transcription when you want quick and synchronous results.
>
> **[6:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=374)** Finally, there's batch transcription.
>
> **[6:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=376)** Batch transcription is asynchronous, and so you can give it a whole bunch of files and it'll transcribe them asynchronously, saving its result to a given location.
>
> **[6:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=385)** Here, you have the option to choose a model including, the OpenAI Whisper model.
>
> **[6:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=390)** We'll go into that more later on, and you can even compare two different models on the same audio and determine which one produces better results for you.
>
> **[6:39](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=399)** And we have some of the same advanced options over here.
>
> **[6:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=403)** In addition to being able to take in files directly, you can also set up batch transcription to hit an Azure Blob Store and download a whole bunch of audio files from that Azure Blob Storage container, either directly or via a public URL.
>
> **[6:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=419)** So to sum it up, you can use real-time transcription when you need real-time results, like with captioning.
>
> **[7:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/transcription?u=76281980&t=425)** You use fast transcription when you have single audio recordings that you need to transcribe quickly and synchronously, as one might do for post-call analytics, and you use batch transcription when you want to transcribe a whole bunch of audio files, as one might do during the digitization of historical records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (7), [[LinkedIn]] (6), [[Python (Programming Language)|Python]] (6), [[Microsoft Azure|Azure]] (5), ai (4)
> **CLI Commands:** python (6), find (4), make (2)
> **Prerequisites:** set up (6), install (2), you'll need (1)
> **Tools:** github (4), vs code (2), powershell (1)
> **Definitions:** is called (3), is a  (2)
> **Code Identifiers:** transcription_sample (1), conversation_transcription_from_microphone (1), speech_config (1)
> **Env Vars:** sdk (2), url (1)
> **File Paths:** main.py (1), transcription_sample.py (1)

#### Customizing speech to text
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=0)** - [Instructor] Azure AI's speech to text is astonishingly accurate out of the box for a wide variety of languages and vocabulary, but sometimes you need to customize it for your specific scenario so it gets it just right.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=13)** There are two different ways that you can customize the output of speech to text.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=17)** You can use phrase lists for quick ad hoc customization or custom speech for deeper customization.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=25)** Phrase lists are a quick and easy way to improve speech recognition for unique words and phrases.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=31)** They're great for things like names, places, or industry specific jargon.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=36)** They're just in time.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=38)** You provide the list right before you start.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=41)** Like in the last chapter when I added the phrase LinkedIn.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=44)** So there's no need to train a custom model and they're lightweight.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=48)** You don't need a huge data set, just the words or phrases you want to boost.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=53)** But if you need to recognize more complex speech patterns like accents or different speaking styles, or if you have a large set of phrases like over 500, a custom speech model is the way to go.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=66)** These models can be fine tuned to match the specifics of your data.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=72)** Sometimes it's best to use both.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=74)** For example, in a soccer broadcast, you could train a custom model on soccer terms and common broadcasting jargon, but use a phrase list for player names since they change with every game.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=87)** So as you may remember from the last chapter, the phrase list is specified whenever you call one of the transcription APIs.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=93)** It's quick and easy to use, but custom speech is a little deeper.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=97)** Here in the AI Foundry, you can find a few examples of when you might want to use custom speech.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=103)** For example, here, we want it to take in biological input rather than translating a certain word as Cory Gibbs, we might want it to translate it as coragyps.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=113)** You could try making a custom speech model yourself right here in the Azure AI Foundry.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=118)** Just press the fine tune speech button at the top of the custom speech section, that will give you the option to customize speech to text.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=126)** You want to connect it to your speech resource and give it a name.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=130)** I'll call it biology.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=132)** And then you'll want to add a data set.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=135)** Fortunately, there are a whole bunch of sample data sets already available in the cognitive services speech SDK sample data directory called custom speech.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=144)** Here's the biology one, for example.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=147)** You have a number of different options as to how you can format the data you give it.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=151)** You could just give it a bunch of text or some structured text and markdown.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=155)** Here we're going to give it an audio file with a human labeled transcript.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=159)** So those are the files that we have in that sample repository, but we can also just give it pronunciations or just a bunch of audio that's representative of the scenario that you're in with the accents or styles or noises that might be present in your environment.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=173)** But as I said, the sample data is audio and a human labeled transcript.
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=177)** So we'll give it those files.
>
> **[2:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=179)** We'll give it the audio and transcript files, which are neatly zipped up for us.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=183)** Once it's finished processing, you're ready to train a model.
>
> **[3:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=187)** You can select a baseline model here.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=190)** I would usually choose the latest one.
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=192)** I give the dataset that we just uploaded.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=195)** We'll name this model biology and train.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=199)** This takes a little while, so go get a cup of coffee and come back later.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=205)** So once your model is trained, you'll see the green succeeded box over here and you can test it.
>
> **[3:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=210)** You can give it a test data set with audio only data or audio and transcript data to test it on.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=216)** And you can compare your newly made model to the baseline, for example.
>
> **[3:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=220)** So we'll give it a name and create my test, and there it goes.
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=224)** It'll compare my newly made model to the baseline on this test set.
>
> **[3:49](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=229)** Once the test is completed, you'll find the difference in word error rate and token error rate between the two models.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=236)** Word error rate focuses solely on word accuracy, whereas token error rate looks not just at the words, but also at the punctuation and formatting.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=245)** Token error rate is useful when you need the transcription to be not only accurate, but also well formatted like for subtitles or legal documents.
>
> **[4:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=254)** Once you're satisfied with the performance of your new model, it's time to deploy it.
>
> **[4:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=259)** I'll select my biology model, give it a name, and deploy the model.
>
> **[4:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=263)** This will take a moment.
>
> **[4:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=265)** Once your model is successfully deployed, you'll be able to use it with the various speech to text functions like batch transcription.
>
> **[4:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=273)** Here it is now.
>
> **[4:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/customizing-speech-to-text?u=76281980&t=280)** So to sum it up, you'll want to customize speech to text when you're faced with specialized vocabulary like medical or biological, when your dataset has unusual attributes like a noisy background or accented speech, or where you require exceptional accuracy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Microsoft Word|Word]] (4), ai (2), [[Microsoft Azure|Azure]] (1), [[Speech Recognition]] (1)
> **Analogies:** for example (4)
> **CLI Commands:** find (2)
> **Env Vars:** sdk (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Choosing between the OpenAI Whisper and Azure Speech models
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=0)** - [Instructor] Let's dive into how you choose the right model for your speech to text tasks.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=6)** As you've seen in the prior chapters, you have a number of choices when you're using speech to text in Azure.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=12)** You can choose the prebuilt Azure speech models or the Whisper models produced by OpenAI, or you can build a custom model with your own data.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=22)** So how do you choose?
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=24)** The first step is to evaluate your project requirements.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=28)** Consider factors like audio quality, language complexity, and domain specificity.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=34)** Your model choice can also be dictated by whether you need real time results or not.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=41)** For many applications, the prebuilt Azure speech models are the best choice.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=46)** They offer excellent accuracy in over 140 languages, continuous improvements behind the scenes, and out of the box reliability.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=54)** They also offer both synchronous and asynchronous modes.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=58)** So as we saw in the earlier chapter on transcription, you can use them in batch, but also for real-time applications or for applications where you need the transcript soon after the audio is recorded.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=69)** In contrast, the integrated open AI Whisper model excels when dealing with more challenging audio scenarios.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=76)** Think multi-language content, varied accents, or recordings with significant background noise.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=83)** Whisper prioritizes fluency of output over exact word for word transcription, but it can only be used asynchronously and is not made for real time transcription.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=93)** If your transcription tasks involve non-standard audio, consider using Whisper.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=99)** As we saw in the last chapter, there's also the option to build a custom model.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=104)** This is the best option when your domain has highly specialized vocabulary or unique acoustic environments, or when you need exceptional accuracy, but it comes at a cost, literally.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=116)** Custom models cost more to run, plus you have to come up with the data they need to train.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/choosing-between-openai-whisper-vs-azure-speech-models?u=76281980&t=121)** So it's a best practice to always evaluate your use case using one of the two standard options, the prebuilt Azure speech models or Whisper before you decide to go the route of creating a custom speech model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), data (2), [[Microsoft Word|Word]] (2), [[Real-Time]] (1), ai (1)
> **Cross-References:** as we saw (2), in the last (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Speech translation
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=0)** - [Narrator] The last function we'll explore in this speech-to-text chapter is speech translation.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=7)** Azure AI speech translation delivers both real-time and batch language conversion.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=12)** It supports over 100 languages and like the other speech-to-text functions we covered earlier, it integrates easily into your applications using the same simple SDK.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=23)** Here we see speech translation in Azure AI Foundry.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=27)** It's pretty simple.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=28)** I can basically set a translate from and translate to language.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=32)** As I mentioned, there are a wide variety of languages available here, even Klingon, but I will choose Italian, and you can even have it use text to speech here to speak out the translation.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=44)** So all you have to do to try out this speech translation is press the record button.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=51)** Hello LinkedIn learners.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=52)** How are you doing today?
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=55)** (computer speaking in Italian)
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=59)** - [Narrator] Now taking another look at the code here in VS Code, we see a file called translation_sample.py.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=66)** And in here we see the sample code for how translation is done like in the earlier chapter.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=71)** It is pretty simple.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=72)** Basically you set up your configuration.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=75)** Here I have it set to translate from English to German, French, and Chinese.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=78)** And I'm going to set it to use the microphone.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=80)** It will recognize just one phrase with this recognize once method that it's calling and then it'll translate that.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=87)** That's all there is to it for translating from the microphone.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=90)** Let's actually try this in the command line now.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=93)** Starting from the top, we'll activate our main Python file and here number two gives us the translation sample.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=102)** And we'll do translation once from the microphone, which is number zero.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=107)** Hello, can you translate me now?
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=110)** And as we can see, it has indeed translated me to German, French, and Chinese.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/speech-translation?u=76281980&t=115)** So you can enable both real-time and batch translation of speech just as easily as this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Microsoft Azure|Azure]] (1), ai (1), [[Azure AI Foundry]] (1), [[LinkedIn]] (1)
> **Tools:** vs code (1), command line (1)
> **Speakers:** - [narrator] (2)
> **File Paths:** translation_sample.py (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** translation_sample (1)
> **Env Vars:** sdk (1)
> **Cross-References:** we covered (1)


### 3. Text to Speech

[↑ Back to Table of Contents](#table-of-contents)

#### Text to speech: Azure Voice Gallery
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=0)** - [Instructor] Now we're going to switch gears a bit and talk about Text to Speech in Azure AI Speech.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=7)** Azure Text to Speech is really quite a complete package.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=10)** It can do both real time and batch generation of speech in hundreds of languages.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=14)** There are many more hundreds of standard voices available, with numerous different choices available for many common languages.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=22)** You can also make your own custom voices.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=25)** As with the tools we've studied in this course so far, it's remarkably easy to integrate into applications in code.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=33)** Well, the easiest way to experience Text to Speech is to go back to the playground, the Speech Playground that is, in Azure AI Foundry, and click on the Text to Speech header.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=43)** And here we have the voice gallery.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=45)** So you can try a whole bunch of these different voices.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=48)** I mean, I wasn't kidding when I said there were many hundreds of voices in here, and you can test them all.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=54)** Let's take Ava Dragon HD Latest.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=57)** These are always fun names, and many of them you can try out like this.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=69)** - [Ava] Hello, LinkedIn Learners.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=71)** - [Instructor] Let's try that with Brian instead.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=75)** - [Brian] Hello, LinkedIn Learners.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=77)** - [Instructor] There are even multilingual voices in here that speak up to 90 different languages with the same voice.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=84)** (Samuel speaks in foreign language)
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=87)** - [Samuel] It's great to speak to you.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=89)** - [Instructor] Between the multilingual voices and the dedicated language voices, Azure AI Speech has support for hundreds of languages and dialects.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=98)** This seems like as good a time as any to introduce the Azure AI Speech CLI, or command line interface.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=105)** First, you'll need to have installed .NET 6 on whatever platform you happen to be using, and then you can say, "dotnet tool install --global Microsoft.CognitiveServices.Speech.CLI" Now I have the CI installed.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=120)** It's called SPX.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=122)** To use the SPX CLI, you're going to have to set your speech key in here.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=128)** I would recommend you not make the same mistake I did.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=131)** Don't do this in PowerShell, because the @key thing will confuse PowerShell.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=136)** So just do it in Windows in a regular old command prompt if you're in Windows.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=141)** Replace this with your speech key.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=143)** You also have to set your region.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=147)** Mine is East US.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=150)** Now let's take a look at all the available voices.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=152)** Oh my word.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=154)** Well, there are a lot of them.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=155)** So we'll choose the Ava voice, and let's have it generate that.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=159)** - [Ava] Hello, LinkedIn Learners.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=160)** This is Ava speaking.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=163)** - [Instructor] And there we have it.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=164)** Extensive documentation on what the Speech CLI can do is available on Microsoft's website.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=170)** There's a lot more that you can do with it beyond just generating speech such as customizing voices, setting synthesis parameters, and more.
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/text-to-speech-azure-voice-gallery?u=76281980&t=177)** Hopefully this gives you a good starting point to explore the Azure AI Speech CLI and its capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[CLI]] (5), ai (4), [[LinkedIn]] (3), [[Microsoft]] (2)
> **Speakers:** - [instructor] (5), - [ava] (2), - [brian] (1), - [samuel] (1)
> **Env Vars:** cli (5), spx (2), net (1)
> **Tools:** powershell (2), command line (1), command prompt (1)
> **CLI Commands:** make (2), dotnet (1)
> **Prerequisites:** you'll need (1), install (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### Audio content creation
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=0)** - [Narrator] Let's look at how audio can be created on Mass.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=4)** We'll use a tool called Audio Content Creation, but first, we should discuss how to produce human-like output with Azure AI Speech.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=12)** The trick is to use Speech Synthesis Markup Language, or SSML.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=18)** Imagine you're listening to a GPS navigation system and it reads out directions in a flat, monotonous voice.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=25)** - [Navigator] Turn left in 500 meters.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=28)** Your destination is on the right.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=31)** - [Narrator] It's functional, but lacks any natural rhythm or emphasis.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=36)** Now, picture the same system guiding you with a more engaging tone.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=41)** - [Navigator] Turn left in 500 meters.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=44)** Your destination is on the right.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=47)** - [Narrator] This subtle difference makes the experience more pleasant and easier to follow.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=52)** How does it do this? With SSML.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=55)** SSML is a set of instructions that tells text to speech systems, like Azure AI Speech, how to deliver spoken content.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=63)** It allows developers to add emotion or pauses, adjust pitch, control speed, and emphasize certain words or phrases, making the speech sound more human-like.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=74)** This is what SSML looks like, and it looks pretty daunting.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=79)** Fortunately, there's a tool called Audio Content Creation, which can help you construct it.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=85)** As of this recording, Audio Content Creation is not yet available in the Azure AI Foundry portal, so we'll get there via the Speech Studio at speech.[microsoft.com](https://microsoft.com).
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=114)** Here I can produce natural sounding speech using all of the features of SSML.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=120)** I can select voices
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=129)** like this Jenny voice.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=137)** I can change the speaking style to give her some emotional inflection.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=143)** I can add silence or change the rate at which the voice speaks, and I can even use multiple voices in the same file.
>
> **[2:38](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=158)** - [Jenny] Hello, LinkedIn Learners.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=160)** - [Marco] It's great to see you.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=163)** - [Narrator] In the background, this makes the SSML for me so I don't have to construct it manually.
>
> **[2:49](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=169)** You know what else is really good at generating SSML?
>
> **[2:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=171)** GPT-4.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=173)** And so here I've got the latest GPT-4o model as of this recording, and I'm going to tell it to make some SSML and welcome LinkedIn Learners and then make me the CLI call for that.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=183)** All right, we got that. Let's try it out.
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=188)** - [Computer] Hi there, LinkedIn Learners.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=190)** I'm so excited to see you here today.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/audio-content-creation?u=76281980&t=195)** - [Narrator] It works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Content Creation]] (3), [[LinkedIn]] (3), [[Microsoft Azure|Azure]] (2), ai (2), functional (1)
> **Env Vars:** ssml (8), gpt (2), gps (1), cli (1)
> **Speakers:** - [narrator] (5), - [navigator] (2), - [jenny] (1), - [marco] (1), - [computer] (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), picture (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Definitions:** is a  (1)

#### Custom voices
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=0)** - [Instructor] You can synthesize entirely custom voices in Azure AI Speech.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=5)** There are a few different ways to do it, which we will go through now.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=10)** First, there's Custom Neural Voice.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=12)** Custom Neural Voice is ideal for creating branded voices for virtual assistants, interactive voice response, or IVR systems, and other applications where a distinct voice can enhance the user experience.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=26)** This feature is commonly used in many cars, devices, public transit stations, and applications.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=33)** You probably hear or interact with Azure AI Speech's Custom Neural Voice multiple times per day, and you don't even know it.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=41)** As of this recording, Custom Neural Voice is only available in the Speech Studio.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=45)** It's not yet in Azure AI Foundry, and so we'll have a look at it here.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=49)** You can find it under Text to speech, Custom Voice.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=52)** To create your own Custom Neural Voice, you create a project.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=56)** Custom Neural Voice comes in two flavors.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=58)** There's the Lite flavor, which is really just allowing you to kick the tires, and only requires between 20 and 50 utterances.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=65)** The Lite version is available to everyone, but you generally wouldn't use it for production workloads.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=70)** And then there's Custom Neural Voice Pro.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=72)** To use Custom Neural Voice Pro, you need to apply for eligibility through an intake form.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=78)** You have to have an Azure account and a Speech service subscription with the S0 tier, and you need explicit written permission from the voice talent, and you have to adhere to our responsible AI principles.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=89)** This is how we ensure that people aren't using our voice synthesis capabilities nefariously.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=95)** Once you have applied for and received access to the Pro version of Custom Neural Voice, you can begin creating a project.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=102)** You give your project the name and its description, and then you add the voice talent.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=109)** Let's say I'm making one for a virtual assistant, and I'll describe it as a deep male voice, which is pretty much what I have.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=116)** I'll give myself as the voice talent.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=118)** Your voice talent needs to record a wav file saying something like this, that they are aware that recordings of their voice will be used by their company to create and use a synthetic version of their voice.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=128)** I've recorded just such a consent file, and now my voice talent is added.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=137)** It'll process the consent file to ensure that it actually says what it's supposed to say.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=142)** Then I give it my training data.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=144)** You generally need hundreds of utterances for it to train on, so you define a training set, and then you upload data to it.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=151)** You have a few different options as to what type of data to upload.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=156)** You can give individual utterances in a matching transcript, you can give a long audio in a transcript, or you can just give the audio and let it figure out what you're saying with no transcript.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=166)** Here, in a project I made earlier, I uploaded 421 utterances.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=170)** And when you upload this data, it takes a little while for it to post-process it, and it goes through the data that it has to determine whether it needs something more.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=180)** Here you can see that it says, "I don't have enough exclamation utterances."
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=184)** I should probably exclaim a little bit more, but nonetheless, I can use this dataset to train my model.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=191)** When you go to train a model, you have a couple of choices.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=195)** You can just make a neural model, which is a voice in the same language, in my case, it was English.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=201)** You can make a multilingual model, and this is one that I train myself so my voice can speak some large number of languages.
>
> **[3:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=208)** You can also make a cross-lingual model that only speaks one language, but different than the training data that you gave it.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=214)** And you can make one that is multi-style, that's like what we saw in SSML earlier, that has cheerful, and excited, and so on.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=222)** I think I'll pick for myself a multi-style voice, and I'll select all the styles for it to train.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=230)** I'll give it my dataset, and I could also give it custom speaking styles, but I won't do that here.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=236)** This is the consent file that I gave it earlier.
>
> **[4:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=240)** I can give it a test script or it can generate one by itself.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=244)** I name my voice, and then we train it.
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=247)** Pay close attention here, this could take a while.
>
> **[4:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=252)** So as it says here, this will take 93 compute hours, so this may take even multiple days to train.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=260)** Some time later, once the training is done, it'll show me how my new custom voice has performed on the tests that it gave.
>
> **[4:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=267)** And then I can deploy my model.
>
> **[4:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=270)** And once I've deployed it, I can test it.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=272)** - [Custom Neural Voice] Hello, LinkedIn learners.
>
> **[4:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=274)** Great to see you.
>
> **[4:37](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=277)** - [Instructor] In summary, Custom Neural Voice provides a powerful tool for creating natural-sounding synthetic voices, but it requires careful adherence to ethical guidelines and responsible AI principles.
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=287)** Whether you're using the Lite version for experimentation, or the Pro version for production, understanding the requirements and the process is essential for successful implementation.
>
> **[4:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=299)** There's a second way to create a custom voice in Azure AI Speech, and it's more intended for personal uses rather than for business-wide usage or large scale virtual assistants.
>
> **[5:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=310)** As such, it is called Personal Voice.
>
> **[5:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=316)** Personal Voice is available in AI Foundry, and so you'll find it in the Speech Playground, under Text to speech.
>
> **[5:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=322)** Here, I can create a new voice.
>
> **[5:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=326)** First, I have to enter my name and my company, and now I just need to read what's written here.
>
> **[5:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=332)** "I, Marco Casalaina, am aware that recordings of my voice will be used by Microsoft to create and use a synthetic version of my voice."
>
> **[5:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=342)** It'll rate it for clearness, pronunciation, and volume.
>
> **[5:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=345)** All looks good, and so we'll create this.
>
> **[5:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=348)** Now I have to read one more sample statement.
>
> **[5:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=351)** "Days turned into weeks, and soon, a small green sprout emerged from the soil."
>
> **[5:57](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=357)** Once again, I create it.
>
> **[5:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=359)** Now, in this test interface, it won't just synthesize any speech, it will only synthesize a small set of pre-configured texts like this.
>
> **[6:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=369)** - [Personal Voice] Suddenly, she sees a bear riding a bike toward her.
>
> **[6:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=374)** - [Instructor] Sounds a lot like me, and I can make it French.
>
> **[6:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=380)** (Personal Voice speaking French) Or maybe in Japanese.
>
> **[6:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=388)** (Personal Voice speaking Japanese) So the Personal Voice is intended for personal uses like this, and in fact, the most increasingly common use case of it is in Microsoft Teams, which can do realtime translation in your own voice.
>
> **[6:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=405)** Here's an example of Teams translating my colleague, Bogdan Crivat, from Romanian to English in real-time using speech translation and his personal voice.
>
> **[6:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=414)** (Bogdan speaking Romanian)
>
> **[6:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=418)** - [Synthesized Voice] Certainly.
>
> **[7:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=425)** Co-Fabric is a complete data analysis platform where you will find all Microsoft products for data analysis.
>
> **[7:12](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=432)** - [Instructor] So how do you choose between them?
>
> **[7:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=434)** Well, a Custom Neural Voice requires more data and costs more because it's intended to be used for an entire brand, like a car assistant, or the voice of a phone or a language learning app.
>
> **[7:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=445)** It can output numerous emotional styles and supports a vast variety of languages.
>
> **[7:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=452)** Personal Voice only requires a small sample, and it trains quickly, but it's intended only for individual use.
>
> **[7:39](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=459)** Its outputs generally aren't as high quality as Custom Neural Voice, and its ability to produce emotional content is limited.
>
> **[7:47](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/custom-voices?u=76281980&t=467)** Both of these Custom Voice systems are subject to Microsoft's limited access policy to prevent nefarious use of this technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Microsoft Azure|Azure]] (4), ai (4), [[Responsible AI]] (2), [[Microsoft]] (2)
> **CLI Commands:** make (5), find (3)
> **Speakers:** - [instructor] (4), - [custom (1), - [personal (1), - [synthesized (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** ivr (1), ssml (1)
> **UI Navigation:** go to (1)


### 4. Avatars

[↑ Back to Table of Contents](#table-of-contents)

#### Combining speech with avatars
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=0)** - [Instructor] Now we'll give our synthesized speech a little visual impact with avatars.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=7)** - Hello, I'm the standard avatar called Lisa.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=11)** I can be paired with any Azure AI speech voice.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=13)** I'm currently using the Ava voice. Isn't that exciting?
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=17)** Imagine the possibilities.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=19)** Whether you're looking for customer support, virtual assistants, or just a friendly voice, I'm here to help.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=27)** - [Instructor] So how did I make that avatar?
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=29)** Well, I did it here in the Speech Playground, and it's under Text to speech, Text to speech avatar.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=35)** Now I can try out one of these wide array of avatars.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=39)** I can type something right in the box here and generate a video of it.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=50)** - Hello, LinkedIn learners.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=53)** - [Instructor] But in this case, I decided to use some SSML that I generated with GPT-4 as we did earlier in this course, and that's what produced the video you saw.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=62)** You can also put your avatar in front of a custom background.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=71)** - Now I have a LinkedIn Learning background.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=75)** - [Instructor] Avatars in Azure AI Speech bring your words to life.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=78)** They add some visual impact to your digital content, making it more relatable.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=83)** And it's pretty easy to use because it's really very similar to using text to speech as we learned in an earlier chapter of this course.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=91)** - Avatars can also perform various gestures, like this one I'm doing right now.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=96)** Standard avatars like me, have numerous predefined gestures.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=100)** These can make your avatars even more interactive.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=104)** - [Instructor] So how did I do that? It's SSML again.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=108)** Gestures can be inserted alongside text in the SSML to give the avatar hints about the gestures it should take.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=116)** You'll see them here in this SSML in these bookmarks.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=121)** Each standard avatar supports a subset of these gestures.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/combining-speech-with-avatars?u=76281980&t=126)** You can find out which standard avatars support which gestures in the documentation, or you can press the Insert gesture button here to see the gestures demonstrated for you for each one of the avatars available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), ai (2), [[LinkedIn]] (2), [[Customer Support]] (1), [[GPT-4]] (1)
> **Speakers:** - [instructor] (5), - hello (2), - now (1), - avatars (1)
> **Env Vars:** ssml (4), gpt (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** imagine (1), similar to (1)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)

#### Building custom avatars
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=0)** - You don't need to limit yourself to the standard avatars, you can make custom ones too.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=6)** You can also make custom avatars and use them with custom neural voices, although it would be hard for you to make one as handsome as this one.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=14)** As with custom neural voice, you need to apply for access to create custom avatars.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=20)** To create a custom avatar, you're going to need to have a bunch of videos for its training dataset.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=26)** First, you'll need a consent video from the video talent, very similar to the consent audio recorded for text-to-speech in the prior chapter.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=35)** Then you're going to need a naturally speaking video where you can really be talking about anything, and a couple of other types of videos as well.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=45)** Let's take a look at the examples of the ones that I used to train my avatar, and bear in mind that the videos you're about to see are not AI generated.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=54)** These are real videos of me in a green screen room that I use to train my avatar.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=63)** Hello, I'm Marco Casalaina, and I'm basically here to talk about pizza.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=67)** I'm going to talk about pizza for like five minutes straight.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=76)** This is my Status 0 recording.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=79)** This is the recording in which I'm supposed to have my hands kind of on my lap.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=84)** So once you've been granted access, you can go to this custom avatar interface in speech studio.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=92)** First, you have to upload the consent statement, then upload the data that you've recorded.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=101)** Note that you can also record custom gestures, which I did not do with my avatar.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=107)** Then train the model.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=109)** Like custom neural voice, this can take some hours or even days.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/building-custom-avatars?u=76281980&t=114)** You can then deploy the avatar for use with either batch or real-time avatar scenarios.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (1), data (1), [[Real-Time]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - you (1)

#### Live chat avatars
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=0)** - [Instructor] We can also use these avatars live, huh?
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=4)** - You sure can.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=7)** - [Instructor] So tell me the process for using live chat with an avatar.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=14)** - One, set up Azure AI speech in your Azure subscription.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=18)** Two, integrate the speech service with your avatar platform.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=22)** Three, configure realtime speech-to-speech or speech-to-text capabilities.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=29)** - [Instructor] You'll find sample code for this available in all manner of different languages.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=34)** For example, in Cognitive Services Speech SDK, you'll find there's a chat.html and a chat.py.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/live-chat-avatars?u=76281980&t=42)** So both in HTML and Python, there are sample files on how to use and embed these realtime avatars into your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[HTML]] (2), ai (1), [[Python (Programming Language)|Python]] (1), application (1)
> **Speakers:** - [instructor] (3), - you (1), - one (1)
> **CLI Commands:** find (2), python (1)
> **File Paths:** chat.html (1), chat.py (1)
> **Env Vars:** sdk (1), html (1)
> **Prerequisites:** set up (1), configure (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)


### 5. Advanced Speech Capabilities

[↑ Back to Table of Contents](#table-of-contents)

#### Video translation
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=0)** - Now we're going to take a look at some of the more advanced functions of Azure AI speech, and it starts with video translation.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=8)** Well, up to this point, I have shown some video translation in teams, but you can use Azure AI speech to actually translate your own videos in batch.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=19)** Let's take a look.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=21)** You'll find video translation here at the top of the speech studio with the other scenarios.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=28)** Translating a video is pretty simple.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=30)** You create a project here, and as I mentioned earlier, you have to be approved to use this in personal voice mode, so you can make it translate to a prebuilt neural voice, one of the prebuilt Azure speech voices that we looked at earlier.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=45)** Or you can make it mimic the speaker or speakers in the video.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=51)** So I'm going to make it use my personal voice and I am going to give it a file that I recorded earlier.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=59)** Hello, and thank you for joining me today.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=62)** Well, English is the only language that I speak fluently, but thanks to the wonder of AI, now I can speak just about any language in my own voice.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=75)** When I whisper, it whispers with me.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=78)** When I shout, it shouts with me.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=82)** This AI is going to change the world.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=85)** So I give it this file, and I'm going to call it lip sync because I'm going to turn on the lip sync functionality for a face on video like this one, you can turn on lip sync functionality, but to do that, you have to turn off auto-detection of the number of speakers.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=106)** So under normal circumstances, by default, it will auto detect how many speakers there are in the video.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=111)** But for lip sync, you have to tell it, and I'm going to tell it that there is only one.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=115)** So I will turn on lip sync and I will translate this one to Mandarin Chinese.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=125)** I will acknowledge about the pricing and the code of conduct and create this video.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=131)** Now, it took a few minutes to process this 25-second video.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=136)** Once it's done, you can actually see the translations that it's made over here and the video right in the middle here.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=145)** Let's have a look at the result.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=148)** (speaks in foreign language)
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=174)** So, as you can see, it does its best to match my inflection over there and to sink my lips, although I messed with it just a little bit when I was sticking my hands in front of my face when I was shouting.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/video-translation?u=76281980&t=185)** But you get the idea. It does a pretty good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), [[Microsoft Azure|Azure]] (3), teams (1)
> **CLI Commands:** make (3), find (1)
> **Speakers:** - now (1)

#### Pronunciation assessment
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=0)** - [Instructor] Earlier in this course, we were looking at chatting with an avatar for language learning, where it was evaluating my pronunciation.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=8)** Well, that was powered by something called Pronunciation Assessment, which is available here in the speech studio.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=15)** Let's take a look at that in isolation.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=18)** And so I can use this to assess my pronunciation for reading, and that is, in fact, one of the other use cases of Pronunciation Assessment, is reading applications for children.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=30)** And so, for example, I can read this, "Today was a beautiful day.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=40)** We had a great time taking a long walk inside in the morning.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=46)** The countryside was in full bloom, yet the air was crisp and cold.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=51)** Towards the end of the day, clouds came in, forecasting much needed rain."
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=58)** Now, I intentionally made a mistake there so that it should be able to catch my mispronunciation.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=67)** And you can see here that it caught the fact that I said the word "inside" instead of "outside."
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=74)** And my overall pronunciation score was an 89, with my fluency and prosody taking a hit here.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=83)** Now again, I read English pretty well, but this is the concept of Pronunciation Assessment.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=89)** It can identify words that were mispronounced and how they were mispronounced, and it can help coach the reader or the talker on how to do that pronunciation better.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=102)** And as always, sample code is provided in many different languages.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=108)** In C Sharp, Java, JavaScript, and Python.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/pronunciation-assessment?u=76281980&t=111)** It's available here in the studio, and also in the cognitive services speech SDK repo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Microsoft Word|Word]] (1), hit (1), [[Java]] (1), [[JavaScript]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** sdk (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using Azure Content Understanding for audio and video
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=0)** - [Instructor] Now we would be remiss if we did not cover in this Azure AI speech course a little bit about content understanding.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=9)** Content understanding is a higher-level API in Azure AI.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=14)** So underneath the scenes it uses Azure AI speech and other capabilities like document intelligence to be able to process videos, audio, documents, and images into more structured data.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=28)** Let's take a look at how this applies to audio.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=35)** When you create a content understanding project, it looks a little bit different than everything else in Azure AI.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=42)** What you do with it is you define a schema.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=45)** And here you can see that I have defined a schema for kind of a post-call analysis that I'm about to do on a call center audio file.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=56)** And this is going to pull structured data out from this unstructured file.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=62)** There are two types of values that it can pull out.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=65)** Well, here I have a summary, and you can see that this is set to generate.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=70)** And so it will just generate a summary of this call.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=74)** Then there are a couple of these things that are set to classify.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=78)** And when they're set to classify like this category, it will only choose from among the values given here.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=86)** So it's going to classify the category of this contact center call.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=92)** So once I've got my schema to my satisfaction, I can test my analyzer.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=98)** Let's run this analysis and while we're waiting we'll listen to just a little bit of this file that I've given it.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=111)** - [AI Voice] Hello, thank you for calling Contoso Auto Insurance, how can I help you today?
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=115)** - [Client] Hey, so I just got into a car accident and I need to buy some auto insurance.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=119)** - [AI Voice] I'm sorry to hear that about your accident.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=121)** Do you currently have an existing policy with Contoso Auto Insurance?
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=124)** - [Client] No, no, that's why I'm trying to buy it because I just got into this accident.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=128)** - [AI Voice] I understand, but unfortunately we can't issue a new policy to cover an accident that's already occurred.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=134)** - [Client] What do you mean? What do you mean?
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=135)** You're auto insurance, you're supposed to cover accidents.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=140)** - [Instructor] So clearly this caller doesn't really understand how insurance works.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=144)** But now along the right-hand side you can actually see what content understanding has generated for me.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=151)** So I asked for a sentiment, the sentiment of this call is negative.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=155)** This caller is not too happy about the fact that this insurance won't cover the accident he already had.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=160)** It provides a summary of the call, and, of course, in the middle here you can see the raw transcript, which is diarized, just as we saw earlier with Azure AI speech.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=170)** And then when we look at the category, it chose from that list, and the category is indeed insurance.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=176)** The purpose of using content understanding, of course, is not really this web interface, it's really the result.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=181)** And so when you call this with an API, what you get back is a big JSON file containing all of this information, including the transcript, but also including the information that it extracted from this file.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=199)** If you're looking for sample code on how you might implement this type of a use case in code, you need look no further than GitHub.
>
> **[3:27](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=207)** Here we have the Conversation Knowledge Mining Solution Accelerator.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=213)** And this is a whole bunch of sample code that calls this content understanding, API, in Python again.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/using-azure-content-understanding-for-audio-and-video?u=76281980&t=222)** And allows you to do this kind of thing in code in your own application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (8), [[Microsoft Azure|Azure]] (5), api (3), data (2), web (1)
> **Speakers:** - [ai (3), - [client] (3), - [instructor] (2)
> **Env Vars:** api (3), json (1)
> **Definitions:** is a  (3)
> **Exercise Files:** sample code (2)
> **CLI Commands:** python (1)
> **Cross-References:** as we saw (1)
> **Tools:** github (1)

#### Azure Speech vs. real-time LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=0)** - [Instructor] There now exist real-time large language models like GPT-4o Realtime.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=6)** These models are direct audio in and audio out, so you don't need to layer something like Azure AI Speech on top of them.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=14)** When you look at Azure AI Speech compared to real-time models, there are some clear differences.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=21)** And I could just narrate these things, or I could ask one of the real-time models to make that comparison for me.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=28)** So let's do that.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=30)** Now, here I am in the Azure AI Foundry and I am in the real-time audio playground in Azure AI Foundry and we're about to have a little chat with GPT-4o Realtime, the latest version as of this recording, 2024.12.17.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=48)** Let's see what it has to say.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=52)** So, hey, when would I use Azure AI Speech and when would I use a real-time model like you?
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=59)** - [AI] Great question.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=60)** If you're looking for something more budget friendly and you need edge capability like working offline or on device, Azure AI Speech is your go-to.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=70)** But if you're after top-tier realism and speed, then a real-time model like me is the way to go.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=76)** It really depends on whether you prioritize cost and offline use or hyperrealistic sound.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=83)** What do you think suits your needs better?
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=85)** - [Instructor] Now, sometimes these realtime models can be a little bit more human-like, and so let's try this.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=92)** Tell me a joke about Microsoft and then laugh at your own joke.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=96)** - [AI] Why did Microsoft start planting trees?
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=100)** Because they heard about the importance of having good Windows (laughs).
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=108)** - [Instructor] Well, they're not necessarily wonderful at telling jokes that are funny, and I don't even know what that was.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=114)** But the point is that these real-time models can be pretty human-like.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=118)** They're interruptible, they can laugh, and things like that.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=122)** But there is that kind of cost analysis that you need to do and whether you are able to run this in the cloud or on the edge.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/azure-speech-vs-real-time-llms?u=76281980&t=130)** And so that's how you might make a choice as to whether to use Azure AI Speech on top of a large language model as we did earlier with the live chat avatar or whether you are amenable to using a real-time audio model like this one here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (8), ai (7), [[Microsoft Azure|Azure]] (5), [[Azure AI Foundry]] (2), [[Microsoft]] (2)
> **Speakers:** - [instructor] (3), - [ai] (2)
> **CLI Commands:** make (2)
> **Env Vars:** gpt (2)
> **Versions:** 2024.12.17 (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### More resources on Azure Speech
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=0)** - [Instructor] In conclusion, let's recap what we went through today.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=5)** So in the course of this course, we have gone through a number of different sites and repositories of sample code.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=14)** First of all, the Azure AI Foundry at ai.[azure.com](https://azure.com) contains the Speech Playground where you can try many of the aspects of Azure AI Speech.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=29)** As of this recording as you may have seen, some of the items are still not quite migrated to the Azure AI Foundry and they can be found in the Speech Studio at speech.[microsoft.com](https://microsoft.com).
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=44)** When it comes to these code samples, there are a ton of them available here in the cognitive-services-speech-sdk repository in Azure samples in GitHub.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=58)** And here you'll find code in Python, C#, in Java and JavaScript.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=64)** All kinds of different languages available in this repo over here.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=71)** When we came to content understanding, there was another sample repo that we were looking at called Conversation-Knowledge-Mining-Solution-Accelerator and here too, you can find all kinds of sample code on how you can use content understanding to process audio of conversations.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=92)** There is extensive documentation on the Azure AI Speech service available at learn.[microsoft.com](https://microsoft.com).
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=101)** And the root of it is this document here called What is the Speech service?
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=106)** So this is a great place to start.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=110)** And finally, GitHub Copilot is your friend.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=115)** And so for a lot of the sample code that I used here, I used GitHub Copilot to help me write that and understand it, and you can too.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=124)** GitHub Copilot understands Azure AI Speech quite well and does a really good job in helping you write code for it.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-for-developers-azure-ai-speech/more-resources-on-azure-speech?u=76281980&t=133)** So thank you all for joining me for this course and I hope you all have a wonderful time using Azure AI Speech.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), ai (5), [[GitHub Copilot]] (3), [[Azure AI Foundry]] (2), [[Microsoft]] (2)
> **Tools:** github (4)
> **CLI Commands:** find (2), python (1)
> **URLs:** [microsoft.com](https://microsoft.com) (2), [azure.com](https://azure.com) (1)
> **Exercise Files:** sample code (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Marco Casalaina]]

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Microsoft Azure

## Path Context

### In [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]
← [[Azure AI for Developers- Content Safety and Responsible AI]] | **7 of 8** | [[Azure AI for Developers- Building AI Agents]] →

## Appears In

- [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]

## Related Courses

_Courses sharing skills:_

- [[Azure AI Engineering- Speech, Language, and Vision Solutions]] — Artificial Intelligence (AI), AI Software Development, Microsoft Azure
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)