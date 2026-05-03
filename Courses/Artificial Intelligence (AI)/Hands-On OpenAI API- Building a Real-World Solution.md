---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: hands-on-openai-api-building-a-real-world-solution
url: "https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution"
duration_minutes: 59
duration: 59m
level: Beginner
updated: 3/5/2024
learners: 14050
skills:
  - OpenAI API
  - OpenAI Products
  - Artificial Intelligence (AI)
  - Technical Solution Development
exercise_files: true
github: "https://github.com/LinkedInLearning/hands-on-openai-api-building-a-real-world-solution-3854057/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQH1trVwWKdtyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709333885301?e=2147483647&amp;v=beta&amp;t=eF5iTlfk5-4UA5K68mmOSZE_7Tx9CG0uQspF3LN5lrU"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Hands-On Projects for OpenAI-Powered Apps]]'
prev_courses:
  - '[[Getting Hands-On with GPT Models- Tips and Tricks]]'
next_courses:
  - '[[Hands-On AI- Build an AI Chatbot with GPT-4o and Next.js]]'
path_nav: '[{"path":"Hands-On Projects for OpenAI-Powered Apps","position":3,"total":5,"prev":"Getting Hands-On with GPT Models- Tips and Tricks","next":"Hands-On AI- Build an AI Chatbot with GPT-4o and Next.js"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/web-development
  - skill/openai-api
  - skill/openai-products
  - skill/artificial-intelligence-ai
  - skill/technical-solution-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20OpenAI%20API-%20Building%20a%20Real-World%20Solution.md)

![Hands-On OpenAI API: Building a Real-World Solution](https://media.licdn.com/dms/image/v2/D4D0DAQH1trVwWKdtyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709333885301?e=2147483647&amp;v=beta&amp;t=eF5iTlfk5-4UA5K68mmOSZE_7Tx9CG0uQspF3LN5lrU)

# Hands-On OpenAI API: Building a Real-World Solution

> OpenAI stands at the forefront of AI, particularly when it comes to large language models (LLMs). If you’re a developer or business leader looking to leverage AI-powered tools, this course helps you to get up to speed with how to use OpenAI APIs to build solutions based on the retrieval-augmented generation (RAG) technique.Join instructor Rodrigo Díaz Concha as he demonstrates a wide variety of so

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution) | 59m | Beginner | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Building a real-world AI app](#building-a-real-world-ai-app)
  - [What you need to know](#what-you-need-to-know)
  - [What you are going to build throughout this course](#what-you-are-going-to-build-throughout-this-course)
  - [Preparing the tools and development environment](#preparing-the-tools-and-development-environment)
- [**1. Using the Audio API to Transcribe Audio and the Chat Completions API to Create Documents**](#1-using-the-audio-api-to-transcribe-audio-and-the-chat-completions-api-to-create-documents) (4 videos)
  - [Extracting rich information from audio messages](#extracting-rich-information-from-audio-messages)
  - [Installing the required library and preparing the code](#installing-the-required-library-and-preparing-the-code)
  - [Transcribing the audio files by using the Audio API](#transcribing-the-audio-files-by-using-the-audio-api)
  - [Creating the JSON document using the Chat Completions API](#creating-the-json-document-using-the-chat-completions-api)
- [**2. Building the KinderLogger Assistant with the Assistants API**](#2-building-the-kinderlogger-assistant-with-the-assistants-api) (4 videos)
  - [Bringing the KinderLogger assistant idea to life](#bringing-the-kinderlogger-assistant-idea-to-life)
  - [Creating the assistant using the Assitants API](#creating-the-assistant-using-the-assitants-api)
  - [Creating a new conversation thread and adding a message](#creating-a-new-conversation-thread-and-adding-a-message)
  - [Running and testing the conversation thread](#running-and-testing-the-conversation-thread)
- [**3. Implementing a Retrieval Augmented Generation (RAG) Process in the Assistant**](#3-implementing-a-retrieval-augmented-generation-rag-process-in-the-assistant) (4 videos)
  - [Using private documents and data in the KinderLogger project](#using-private-documents-and-data-in-the-kinderlogger-project)
  - [Uploading the transcription files to the assistant](#uploading-the-transcription-files-to-the-assistant)
  - [Improving the assistant with prompt engineering techniques](#improving-the-assistant-with-prompt-engineering-techniques)
  - [Using the assistant on the Assistants Playground](#using-the-assistant-on-the-assistants-playground)
- [**4. Implementing the Web API to Expose the Assistant**](#4-implementing-the-web-api-to-expose-the-assistant) (6 videos)
  - [Exposing the assistant as a service](#exposing-the-assistant-as-a-service)
  - [Creating the Web API using the FastAPI library](#creating-the-web-api-using-the-fastapi-library)
  - [Calling the assistant from the Web API](#calling-the-assistant-from-the-web-api)
  - [Implementing logging in the Web API](#implementing-logging-in-the-web-api)
  - [Building and publishing the Docker container image](#building-and-publishing-the-docker-container-image)
  - [Deploying the Azure Container App for the service](#deploying-the-azure-container-app-for-the-service)
- [**5. Identifying Harmful Content Using the Moderations API**](#5-identifying-harmful-content-using-the-moderations-api) (4 videos)
  - [Applying responsible AI practices in KinderLogger](#applying-responsible-ai-practices-in-kinderlogger)
  - [Implementing the Moderations API in the transcription app](#implementing-the-moderations-api-in-the-transcription-app)
  - [Implementing the Moderations API in the Web API](#implementing-the-moderations-api-in-the-web-api)
  - [Building a new image and updating the Azure Container App](#building-a-new-image-and-updating-the-azure-container-app)
- [**6. Creating the KinderLogger GPT**](#6-creating-the-kinderlogger-gpt) (3 videos)
  - [Using a GPT as a frontend for the KinderLogger project](#using-a-gpt-as-a-frontend-for-the-kinderlogger-project)
  - [Creating the GPT and the action for invoking the service](#creating-the-gpt-and-the-action-for-invoking-the-service)
  - [Testing the KinderLogger GPT](#testing-the-kinderlogger-gpt)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a real-world AI app](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-a-real-world-ai-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-a-real-world-ai-app?u=76281980&t=0)** - [Rodrigo] Want to I implement a real world solution by using OpenAI's APIs? We'll create and deploy the Kinder Logger Project and its different components. In this course, I'll show you the most common APIs from OpenAI required to get your application up and running in no time. My name is Rodrigo Diaz Concha, and I'm a member of the [[Microsoft]] Regional Directors. I've been building professional software solutions for more than 25 years. Your learning journey is about to start, so let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Speakers:** - [rodrigo] (1)

#### [What you need to know](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/what-you-need-to-know?u=76281980&t=0)** - [Instructor] To get the most out of this training course, there are some knowledge prerequisites that you should have. I'm going to use the [[Python (Programming Language)|Python]] programming language, so you should be comfortable reading and understanding basic Python code. Luckily, Python is quite easy to grasp and an excellent choice as a first programming language for non-technical people. We're going to build a web API that will be containerized. So you should know the basics of Docker containers. Don't worry, you don't need to be an expert in Docker, but you should understand its basic commands, such as Docker Image, Docker Build, and Docker Push. In this course, I'm going to create an [[Microsoft Azure|Azure]] container app for running the container with the web API. You should have at least basic knowledge of the Azure portal if you want to follow the same steps. Of course, you need an active Azure account and subscription. However, if you prefer, you can use any other cloud platform to run the container. Now, talking about the tools, there are many ways to install Python, but for this course, I'll be using the one from the [[Microsoft]] store. You can use any other installation method that you prefer. I'm going to use Visual Studio Code as my primary development environment, but again, you can use any other tool. Finally, I'm going to use Docker Desktop on my [[Windows]] machine
>
> **[1:38](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/what-you-need-to-know?u=76281980&t=98)** to build and push a container image. Okay, now join me in the next video to understand the Kinder Logger project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Azure|Azure]] (3), [[Microsoft]] (1), [[Windows]] (1)
> **CLI Commands:** docker (6), python (4)
> **Tools:** azure portal (1), visual studio (1), docker desktop (1)
> **Env Vars:** api (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [What you are going to build throughout this course](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/what-you-are-going-to-build-throughout-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/what-you-are-going-to-build-throughout-this-course?u=76281980&t=0)** - [Instructor] Every day, either my wife or I drop off our son Leo at kindergarten, where his teachers warmly welcome him. At the end of every day, the teacher sends a personalized audio message to the families of each child, providing a summary of the day's events. There's a wealth of information stored in those audio files, but unfortunately, they can't be easily indexed or utilized. As loving parents, we're eager to learn about our kid's growth and development at school. We want to understand every aspect of his behavior and the activities he likes. Thankfully, AI technologies, such as the ones from OpenAI, allows to craft meaningful solutions that bring parents even closer to their children. That's why I created the KinderLogger project. KinderLogger is an innovative AI-driven platform that transforms daily audio messages from teachers into essential insights, keeping you constantly connective and informed about your child's progress in kindergarten. Now let's talk about the technical components that we're going to build. In Chapter 1, I'll manually provide the audio files from my WhatsApp account. Here, we're going to use the Audio API for transcribing the audio files and the Chat Completions API for creating the [[JSON]] document
>
> **[1:35](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/what-you-are-going-to-build-throughout-this-course?u=76281980&t=95)** that will be saved as a JSON file. In Chapter 2, we're going to create a new assistant by using the Assistants API. In Chapter 3, we're going to upload all the JSON files to the assistant. In Chapter 4, we'll create a new web API by using FastAPI, and then we're going to containerize that web API and run it inside an [[Microsoft Azure|Azure]] container app. In Chapter 5, we're going to use the Moderations API for filtering out dangerous content. And finally, in Chapter 6, we're going to create a new GPT that will be the user interface for the KinderLogger Project in this course. Okay, now let's prepare the development environment. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** api (6), json (3), gpt (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Preparing the tools and development environment](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/preparing-the-tools-and-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/preparing-the-tools-and-development-environment?u=76281980&t=0)** - [Instructor] Okay, one more quick thing before we go ahead and roll up our sleeves. Let me show you where you can download the required software for this course. First, we need [[Python (Programming Language)|Python]]. Since I'm using [[Windows]], I can open the [[Microsoft]] Store app. Here, I can search for Python and install it. So let's search for Python, and you can find different versions. And this is actually the version that I installed. Then we need Visual Studio Code. On the [visualstudio.com](https://visualstudio.com) website, you can find the installer for your operating system, and of course, Docker Desktop. In a similar fashion to Visual Studio Code, you can download the installer right from its website. Now you need an OpenAI account. You can create one on the [openai.com](https://openai.com) website. Be sure to have enough credit to use the models and of course, the Assistants API. Then you need to create an API key. You can do that by clicking on the Create new secret key button and assigning a name. Say Test, and then Create secret key. Be sure to save the key somewhere safe. In this course, I'll save the keys as environment variables in Windows. Okay, that's actually it. We're ready to start building solutions with the OpenAI APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Windows]] (2), [[Microsoft]] (1)
> **CLI Commands:** python (3), find (2), docker (1)
> **Tools:** visual studio (2), docker desktop (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1), [openai.com](https://openai.com) (1)
> **Env Vars:** api (2)
> **Exercise Files:** download the (2)
> **UI Navigation:** open the (1)
> **Prerequisites:** install (1)


### 1. Using the Audio API to Transcribe Audio and the Chat Completions API to Create Documents

[↑ Back to Table of Contents](#table-of-contents)

#### [Extracting rich information from audio messages](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/extracting-rich-information-from-audio-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/extracting-rich-information-from-audio-messages?u=76281980&t=0)** - [Instructor] Those WhatsApp audio messages are just packed with info from the best data source, the teachers. They really capture what our kids are up to and how they're growing. One of the key things we're doing in the Kinder Logger project is turning that audio into text. In this part of the course, we're going to pull the words out of those audio files using the audio API. After that, we'll use the Chat Completions API to make some [[JSON]] documents, which we'll upload later on. Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** api (2), json (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Installing the required library and preparing the code](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/installing-the-required-library-and-preparing-the-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/installing-the-required-library-and-preparing-the-code?u=76281980&t=0)** - [Instructor] In this chapter, we're going to focus on the transcription side of things. So let's jump right in. I created this kinderlogger folder with the transcription.py file. This is a place that we are going to use for implementing the transcription logic. So the first thing that you want to do is you need to install the OpenAI [[Python (Programming Language)|Python]] library. You can do that by executing pip install and then openai. I've already done that, so there's no need for me to do this again. Okay, so let's close down this terminal. And now I'm ready to import the OpenAI library. I'm using the from statement then the OpenAI class, that's the one that we're going to use for connecting to the API. And we need a way to extract the OPENAI_API_KEY.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/installing-the-required-library-and-preparing-the-code?u=76281980&t=59)** So let's open up the terminal again and let me paste this command so you can see that I have my OPENAI_API_KEY as an environment variable. So that's why I am importing the os module. So let's extract that OPENAI_API_KEY environment variable, and then we need to create the OpenAI instance. So client is going to be the object that we're going to use for communicating to the API. As you can see here, I'm passing the key value. All right. Join me in the next video where we're going to read the audio files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** openai_api_key (3), api (2)
> **CLI Commands:** python (1), pip (1)
> **Tools:** terminal (2)
> **Prerequisites:** install (2)
> **File Paths:** transcription.py (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Transcribing the audio files by using the Audio API](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/transcribing-the-audio-files-by-using-the-audio-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/transcribing-the-audio-files-by-using-the-audio-api?u=76281980&t=0)** - [Instructor] In this video, we're going to transcribe the audio files. WhatsApp audio messages have the OGG format. When you download one of those files into your computer, it'll have the following name pattern, WhatsApp and then audio and then the date at time, and finally, the file extension. We only need the date and time part. That's why I created the whatsapp_utils.py file. Here, I implemented the extract datetime from file name which is a function that takes the file name and returns a datetime. Okay so let's go back here because we need to implement glob for reading the files and then whatsapp_utils. So, let's specify the pattern. I want to read all the OGG files that are inside the audios folder and then let's create this list by using the pattern. So we need to iterate over that list. So, let's type for file name in OGG files and let's do the following, file daytime. That's why I want to execute extract datetime from file name. And let's pass file name just like this. And let's print out processing. And then let's use the format, processing file name.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/transcribing-the-audio-files-by-using-the-audio-api?u=76281980&t=97)** And then let's open the audio file. So open, and then the file name. And we're going to use read and binary. So now we need to invoke the audio, API from open ai. So let's do the following. Let's create this transcription variable and let's use the client object and then audio and then transcriptions. And here I want to execute, create, and let's specify some of the parameters such as model. At the time of this recording, the model is whisper one, and the response format. I want this to be text and file. Of course, we need to pass the audio file that we created. And then temperature, you don't want your model to be creative while transcribing the audio files. So let's use 0.2 or something that is below one. And finally the prompt. This is for helping the model with the correct spelling of some words. So for instance, my kids' teachers are Ms. Jime and Ms. Naty. Those are the correct names. Awesome. Let's test this by opening the terminal and let's execute [[Python (Programming Language)|Python]]
>
> **[3:10](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/transcribing-the-audio-files-by-using-the-audio-api?u=76281980&t=190)** and then transcription.py just to know if everything is working as expected. Join me in the next video where we're going to use the transcription text to create a [[JSON]] file by using the chat completions API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **Env Vars:** ogg (3), api (2), json (1)
> **Analogies:** just like (1), such as (1), for instance (1)
> **File Paths:** whatsapp_utils.py (1), transcription.py (1)
> **Code Identifiers:** whatsapp_utils (2)
> **CLI Commands:** python (1)
> **Versions:** 0.2 (1)
> **Cross-References:** in the next (1)

#### [Creating the JSON document using the Chat Completions API](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-json-document-using-the-chat-completions-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-json-document-using-the-chat-completions-api?u=76281980&t=0)** - [Instructor] Our goal is to create one [[JSON]] file for each audio file transcription. We could create the JSON document with the current transcription text of course, however, the text is in Spanish. So first we need to translate it into English. I could have used the translations API, but I wanted to show you how we can do it by using a single prompt and the chat completions API. So let's do the following. Let's execute create that comes from the completions object. And here I'm specifying gpt-3.5-turbo-1106 as the name of the model that I want to use. And then let's pass the messages to the model. With the chat completion API, we can ask the large language model to perform any task or return any kind of information. To get the most out of [[Large Language Models (LLM)|large language models]], such as the open AI ones, we should specify clear instructions. That is one of the most important [[Prompt Engineering]] strategies for getting better results. So here I'm specifying the system role and I'm telling it that it should behave as a helpful assistant. And then the user role, most of the open AI models support the system role, the assistant and user roles. So here I'm specifying the user message,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-json-document-using-the-chat-completions-api?u=76281980&t=95)** which is this prompt. As you can see, I'm telling the model to translate the text that is surrounded by three stars, which is right here. And then I'm asking the model to create a JSON document with the following elements. We have two elements. The first one is the translated text, and it's inside this key, which is the date part of the date time. And we have another one, which is audiofile_datetime. And the value is the file, date and time. And now let's specify the JSON mode, which is a way of telling the large language model to return valid JSON objects. So that's why I am using response format and I'm passing JSON object for the type. Okay, so now we need to write that JSON document into a file. So let's do the following with open. Let's do this file_datetime.date, because I just want the date part. And this is going to be the JSON file name. And we're going to open this file as write and then file.write. And I'm going to read the result, which is inside choices. The first one, message, and finally content.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-json-document-using-the-chat-completions-api?u=76281980&t=195)** So finally, let's print something like, "Done!" Okay, so now we're ready to test this. Let's open up the terminal and let's execute [[Python (Programming Language)|Python]] transcription.py. I'm going to post the video to let the process run. After a while, this process is finished. So let's expand this so we can see that those JSON files have been created successfully, and now we're ready to upload them to the assistance API. So join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (9), [[Large Language Models (LLM)|Large language models]] (1), [[Prompt Engineering]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** json (9), api (4)
> **Code Identifiers:** audiofile_datetime (1), file_datetime (1)
> **File Paths:** transcription.py (1)
> **CLI Commands:** python (1)
> **Versions:** 3.5 (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)


### 2. Building the KinderLogger Assistant with the Assistants API

[↑ Back to Table of Contents](#table-of-contents)

#### [Bringing the KinderLogger assistant idea to life](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/bringing-the-kinderlogger-assistant-idea-to-life?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/bringing-the-kinderlogger-assistant-idea-to-life?u=76281980&t=0)** - [Instructor] I want the KinderLogger Project to be like a helpful assistant. It should tell me about my son's school activities, what he's been eating for lunch lately, and even the last time he was really happy or sad. Plus, I wanted to help me figure out what I should focus on most as a parent for my kid's development. In this part of the course, we're going to put together an assistant using the Assistants API. Okay, let's begin.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Creating the assistant using the Assitants API](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-assistant-using-the-assitants-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-assistant-using-the-assitants-api?u=76281980&t=0)** - [Instructor] In this video, we're going to create the assistant that will be used by the KinderLogger solution. The thing about [[Large Language Models (LLM)|large language models]] is that they're stateless by nature. With the assistant API, we can create threaded conversations that automatically remember the previous messages. So let's import both OS and OpenAI, and then let's specify this model constant with the name of the model that we want to use in this case, GPT-3.5 turbo 1106. And then let's obtain the [[OpenAI API]] key environment variable value, and let's create the OpenAI client object. So now let's create a new viable named assistant. And here I want to invoke client beta assistance. Speaking of which, at the time of this recording, the assistance API is in a beta state. So client beta assistance, and then create. And we need to specify some of the parameters here, such as name. In this case, I want it to be KinderLogger. And then instructions, let's keep it simple. Something like you are an intelligent assistant. And then the tools that we want to use, this is a list.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-assistant-using-the-assitants-api?u=76281980&t=96)** So we're going to use two tools. The first one is the retrieval tool. This tool allows me to obtain information from the files that we're going to upload later in this course. And the other one is the code interpreter that allows us to create code and actually extract information from the files. And finally, model. And of course, we're going to use the constant. Okay, so this is creating the assistant object in the backend. And now I need to specify something for the UI in this small application, something like display main menu. And here I want this to print KinderLogger assistant.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-assistant-using-the-assitants-api?u=76281980&t=162)** And of course, this is a function. So let's prettify this. And then prompt equals input because I want the user to type a prompt. So enter your prompt. And then let's specify another function handle main menu option. So we're going to receive the prompt in here. We're just going to print the prompt in the screen, and that's it. So I want this to execute, handle main menu option, and let's pass the prompt. And finally, let's create this never ending loop for displaying the main menu. All right, so let's test this by opening up the terminal and let's execute [[Python (Programming Language)|Python]] and then assistance.py. So as you can see, this is displaying the menu. Say, "Hello world." And this is returning that same text because we're not using the assistance object right now. For that, we need to create a thread and we're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[OpenAI API]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (3), gpt (1)
> **Definitions:** is a  (2)
> **File Paths:** assistance.py (1)
> **CLI Commands:** python (1)
> **Versions:** 3.5 (1)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)

#### [Creating a new conversation thread and adding a message](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-a-new-conversation-thread-and-adding-a-message?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-a-new-conversation-thread-and-adding-a-message?u=76281980&t=0)** - [Instructor] Now, we're ready to create a new thread. A thread represents a conversation that includes messages created by both the user and the model. In other words, when you as a user send a message, the model will respond with a message in the same thread as your original message. This process is similar to creating a new chat in [[ChatGPT]]. Let's see how this is done. Let's create a new variable and let's name it thread. And then, let's invoke client_beta. And then threads. And here we have a couple of functions. The first one is create. And the other one allows me to create the thread and execute it right away. In this case, I'm going to use create, since I want to add messages in this handle main menu option function. So here, let's do the following, client.beta.threads, and then I'm going to add a new message. We do that by executing create. And here, I need to pass the ID of the thread in this case is thread.id. And then, the role, in this case is user. That is actually the only option available right now. And, let's scroll up a little bit. And finally, I'm going to use content.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-a-new-conversation-thread-and-adding-a-message?u=76281980&t=99)** And I'm going to use prompt, that I'm receiving here in the parameter. And now we're ready to execute the thread. Join me in the next video where we're going to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1)
> **Code Identifiers:** client_beta (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Running and testing the conversation thread](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/running-and-testing-the-conversation-thread?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/running-and-testing-the-conversation-thread?u=76281980&t=0)** - [Instructor] We've just created a new thread and added a message to it. In fact, I can continue adding messages to the thread, but nothing will happen until I run it. So, let's do that next. Here, I want to specify a new variable named run, and I want to execute client.beta.threads.runs. And I want to use the create function. Here, I need to specify the thread ID and the assistant ID. Remember that we have both objects, here and in this other place. Okay, so to expedite this process, I'm going to paste this code, because I need to verify and inspect the latest status of that drawn object. The thing about the run object is that it'll be executed asynchronously. Therefore, we need to periodically check and retrieve its latest status in a polling manner. Okay, so I need to import time. And this is because I have that time.sleep(2). This will allow the program to wait for a couple of seconds, before asking for the newer status. And finally, I'm retrieving all the messages that are inside that particular thread.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/running-and-testing-the-conversation-thread?u=76281980&t=95)** And I want to read the first message in the list. That item is the last message that was added by the model. Okay, so now we're ready to test this out. Here, I want to type what is the capital city of Italy? And, of course, the answer is Rome. And now, tell me more about that city. And here we have more information about Rome. As you can see, I didn't need to add additional information or context about the city because the assistant already has all the required information, in the message history for this thread. Okay, so now, we're going to upload the [[JSON]] files to the assistant, so we can use that data for reasoning and responding. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)


### 3. Implementing a Retrieval Augmented Generation (RAG) Process in the Assistant

[↑ Back to Table of Contents](#table-of-contents)

#### [Using private documents and data in the KinderLogger project](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-private-documents-and-data-in-the-kinderlogger-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-private-documents-and-data-in-the-kinderlogger-project?u=76281980&t=0)** - [Instructor] The plan is for the KinderLogger assistant to gain access to the info we get from the audio files. I'm looking for KinderLogger to answer my questions, which I'll ask just like I'm talking to a person. Basically, I want to have a chat with it about my son's school life and important stuff happening with him. In this chapter, we're going to upload the files to the assistant. Sounds good? Okay, let's get started.

> [!info]- Semantic Content
>
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Uploading the transcription files to the assistant](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/uploading-the-transcription-files-to-the-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/uploading-the-transcription-files-to-the-assistant?u=76281980&t=0)** - [Instructor] Let's start by uploading the [[JSON]] files to the assistant. It's pretty simple and just takes two steps. First, we need to get the file up into Open AI storage. After that, we'll just link that file to the specific assistant instance we're creating. Okay, let's begin by importing glob for file path pattern matching, and then let's specify the pattern and list the files in the current folder. Of course, we're interested in those JSON files. Now we'll iterate over the list of files and let's show the processing file message on the screen. Next, let's upload the current file. To do that, we're going to use client.files.create. Take into account that the purpose should be assistance. And then let's reference the recently uploaded file to the assistant we've just created. Let's save this, and finally, let's test the code in the terminal. We can see that the files were uploaded successfully. Since we've just added the files, let's ask something related to the school. For example, the other day, the firefighters visited the kindergarten to talk about fire prevention to the children. So let's enter the following prompt. When did the firefighters visit the kindergarten? So you can see we're getting a response from the model.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/uploading-the-transcription-files-to-the-assistant?u=76281980&t=95)** But to be honest, it's not exactly accurate. That's actually pretty normal with LLMs. The key is to fit in a bit more information to guide the model, helping it to nail down the most accurate answer for us. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** json (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Improving the assistant with prompt engineering techniques](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/improving-the-assistant-with-prompt-engineering-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/improving-the-assistant-with-prompt-engineering-techniques?u=76281980&t=0)** - [Instructor] In this video, we're going to improve the assistant's instructions, and also we're going to include an additional user message that has more information to help the model respond more accurately. Okay, let's get started. The first thing that I want to do is I want to get rid of those instructions, and I'm going to paste the new instructions now. And as you can see, I'm asking for different things now. I'm asking the assistant to use the knowledge from the uploaded files. Also, I'm asking to do it in a seamless way. And finally, if it didn't know the answer, it should respond, "I don't know." So those are the new instructions now, and let's create another user message. I'm going to paste the code here, and the value for the content will be this text. So you can see that I am telling the assistant, Hey, today is today and the current school week goes from this date to this other date. And finally, search in all the documents. Of course, I need those values. So let's copy that code that I already have here, and let's import the daytime util module. By the way, I already included that, so you can see I have that function that returns a tuple with the begin
>
> **[1:35](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/improving-the-assistant-with-prompt-engineering-techniques?u=76281980&t=95)** and end days for the school week related to the input day parameter. Okay, so this is looking good. And now I think we're ready to test this out. Let's open up the terminal and let's execute assistants. By the way, with this changes, I'm expecting the model to respond more accurately. Now, [[Prompt Engineering]] is a form of art, and maybe you could try additional techniques in order to reduce hallucinations. Okay, so we have the prompt now, and I'm going to paste, "When did the firefighters visit the kindergarten?" And as you can see, the response is January 16, which is correct. And let me ask something about my son. "What did Leo have for lunch two days ago?"
>
> **[2:37](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/improving-the-assistant-with-prompt-engineering-techniques?u=76281980&t=157)** Again, this is accurate since he had one sandwich out of three. And yes, those are small sandwiches. Okay, so it looks like the assistant is more accurate right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using the assistant on the Assistants Playground](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-the-assistant-on-the-assistants-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-the-assistant-on-the-assistants-playground?u=76281980&t=0)** - [Instructor] In the Assistants Playground in your OpenAI portal, you can easily create, test, and manage all your assistants, whether you built them using code or created them directly on the Playground. In this video, I've removed all the assistants we made in the previous lessons. This assistant, you see, is the last one I put together using [[Python (Programming Language)|Python]]. You can view its name, its ID, and the creation date. If you click here and then Edit, you can change various aspects of the assistant, such as the name, the instructions. By the way, you can expand the instructions here. Let's go back. You can change the model it's using, the activated tools, and of course any files you've added. You can also test the assistant if you click on Test, and here, you can enter any prompt you'd like the assistant to process. For example: "How do the children earn toy coins?"
>
> **[1:11](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-the-assistant-on-the-assistants-playground?u=76281980&t=71)** So this is creating a new thread, passing the instructions, and finally, I'm receiving the response from the model. As you can see, this is a tool that can come in handy when creating assistants.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Implementing the Web API to Expose the Assistant

[↑ Back to Table of Contents](#table-of-contents)

#### [Exposing the assistant as a service](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/exposing-the-assistant-as-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/exposing-the-assistant-as-a-service?u=76281980&t=0)** - [Narrator] I'm hoping that, in the near future, lots of parents will use the KidLogger assistant. Some might prefer it as an app on their smartphones, while others might like it as a web app or even linked to a home device. To make this happen, in this part of the course, we're going to focus on creating a web API. This will expose the assistance functionality, making it accessible in different [[Forms]]. All right, are you ready? Join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Creating the Web API using the FastAPI library](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-web-api-using-the-fastapi-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-web-api-using-the-fastapi-library?u=76281980&t=0)** - [Instructor] In this video, we're going to create the web API that is going to expose the OpenAI assistant that we've created. First, we need to install the FastAPI [[Python (Programming Language)|Python]] library. FastAPI is a web framework for building, well, fast web APIs. One of its great features is the automatic generation of an OpenAPI schema. We're going to use the schema when creating the action for the GPT application. So let's open the terminal, and we can do this by executing: pip install fastapi. We're also going to install the Uvicorn web server for running the web API and handle HTTP requests and send responses. So, "uvicorn". I already did this, so there's no need for me to execute this again. Let's close the terminal, and let's begin with the implementation. First, we need to import the FastAPI library. Specifically, we're going to use the FastAPI class for creating a new application. And then, we're going to execute POST for creating this "/message" endpoint. So we need a function. This function receives the string, and we're just returning "No message received" if there's no message at all. Otherwise, we're returning message equals message. Very simple right now,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-web-api-using-the-fastapi-library?u=76281980&t=95)** because we're going to continue with implementation in the next video. Okay, so let's test this by executing: python, and then, -m uvicorn, the name of the file, which is service, and then, colon, the name of the application, which is app. Let's run this. So it's running. Let's navigate to my localhost and the 8000 port. And here, you can see that I am receiving "Not Found". It doesn't matter. We can navigate to /docs, so we can see the OpenAPI documentation. And here is the [[JSON]] schema that we're going to use in one of the following videos. Okay, let's test this, try it out. "Hello", and then Execute, and we're receiving "Hello" back. Okay, this is working. So join me in the next video, where we're going to continue with the implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[JSON]] (1)
> **Env Vars:** api (2), gpt (1), http (1), post (1), json (1)
> **CLI Commands:** python (2), pip (1)
> **UI Navigation:** navigate to (2), open the (1)
> **Prerequisites:** install (3)
> **Cross-References:** in the next (2)
> **Tools:** terminal (2)
> **API Endpoints:** post
 (1)

#### [Calling the assistant from the Web API](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/calling-the-assistant-from-the-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/calling-the-assistant-from-the-web-api?u=76281980&t=0)** - [Instructor] We have this basic implementation of a web API using FastAPI. Now we need to invoke the assistant that we've created. First, let's import the required modules. Then let's create the constant that we're going to use for the second user message. And now let's read the environment variables and create the OpenAI client object. So here's what's happening now. As you can see, we are reading the environment variables for both the API key and the assistant ID. This strategy will help us configure the target assistant without requiring the service to be updated. To expedite this process, I already set the environment variable in my machine for development purposes. So let's open up the terminal and let's execute ls env and then forward slash and the name of this environment variable. So we can see that we have that environment variable in place. Okay, let's close the terminal. And now let's implement the [[Representational State Transfer (REST)|rest]] of the code. So I'm going to paste it right here and you can see that we're creating a new threat. This is a deliberate decision I've made for this service, but it's actually not absolutely required. Feel free to reuse an existing thread if you want. And in this code, we're retrieving the assistant with the specified ID.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/calling-the-assistant-from-the-web-api?u=76281980&t=94)** Then we can send and receive messages just like we did in the assistance.py file. Okay, let's test this. Let's execute [[Python (Programming Language)|Python]], uvicorn, and the name of the FastAPI application. But first, let's save this. Okay, so let's execute again, and it's running. Let's navigate to the browser. Here in the browser, let's navigate to docs. And here, let's click on post. Try it out and let's type a real prompt, such as, "When did the fire fighters visit the school?"
>
> **[2:21](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/calling-the-assistant-from-the-web-api?u=76281980&t=141)** Okay, let's click on execute. Let's wait for the response. And here's the response. The firefighters visited the school on January 16, which is correct, so we can see that this is working just as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** navigate to (2), click on (2)
> **CLI Commands:** ls (1), python (1)
> **Env Vars:** api (2)
> **Tools:** terminal (2)
> **Analogies:** just like (1), such as (1)
> **File Paths:** assistance.py (1)
> **Definitions:** is a  (1)

#### [Implementing logging in the Web API](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-logging-in-the-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-logging-in-the-web-api?u=76281980&t=0)** - [Instructor] In this video, we're going to implement logging logic in the service. This can come in handy when inspecting the request data sent by the service clients such as the GPT application. To do this, let's import the logging module. So we have the module and then let's configure the logging level. So logging.basicConfig, and we're going to use say INFO just like this. And now I need a way to read the request data since I'm interested in a particular header. So let's import both FastAPI and the request class from the FastAPI module. So here, let's modify the function and let's specify request is going to be request. And now I'm ready to read the headers. I'm interested in a particular header, which is Openai-Conversation-Id that the GPT application will send. So I can do something like headers and then get and the name of the header Openai-Conversation-Id. Okay, and let's put this in conversation_id. Okay, so now I can validate if this has a value.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-logging-in-the-web-api?u=76281980&t=97)** Then let's use logging.info and then Openai-Conversation-Id is the following.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-logging-in-the-web-api?u=76281980&t=113)** Let's use this conversation_id otherwise, let's use logging.info and header not found or Openai-Conversation-Id header not found. Something like this. Okay, let's test this. Let's execute [[Python (Programming Language)|Python]] Unicorn, and let's navigate to the browser. And here, let's navigate to docs and then post. Try it out. Hello, it doesn't matter. I just want the logging functionality to execute. So let's wait for this. I received the response. So let's navigate back to Visual Studio Code and let's scroll up so we can see that we are receiving, "Openai-Conversation-Id header not found." Okay, so this is working. So now we're ready to build and publish the docker image for the service. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** conversation_id (2), basicconfig (1)
> **Env Vars:** gpt (2), info (1)
> **UI Navigation:** navigate to (2), scroll up (1)
> **CLI Commands:** python (1), docker (1)
> **Analogies:** such as (1), just like (1)
> **Tools:** visual studio (1)
> **Prerequisites:** configure (1)

#### [Building and publishing the Docker container image](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-and-publishing-the-docker-container-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-and-publishing-the-docker-container-image?u=76281980&t=0)** - [Instructor] In this video, we're going to build and publish the Docker image for the service. First, we need to create the requirements .txt file. This file contains a list of dependencies required for the project. So the dependencies are openAI and fastAPI, and finally, uvicorn. Then we need to create a docker file, which is a document that contains all the commands required to assemble an image using docker. Essentially, it's a recipe for creating docker images. So you can see that I'm using this base image and I'm configuring this folder as the working directory, and I am copying those three files. And then I am installing all the dependencies by using the requirements .TXT file, and then I'm exposing the port 8000. And finally I'm executing the service. Okay, so now let's create the image. I'm going to type, "docker" and then, "build." And then the tag is my username in docker hub and then kinderlogger, and finally v1. And I need to pass the context, which is the same folder that I'm into right now. Okay, so let's pass this and let's create the image. So this process starts,
>
> **[1:34](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-and-publishing-the-docker-container-image?u=76281980&t=94)** and let's wait for this to finish. So the image is created. So now we're ready to push it to docker hub. So let's execute docker push, and then the name of the image, which is my username and kinderlogger:v1. So this is uploading the image, and now it's available for us to use it. Let's navigate to Docker hub. So as you can see, we pushed the image successfully and it's ready to be used.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (9)
> **Code Identifiers:** openai (1), fastapi (1)
> **Ports:** port 8000 (1)
> **Env Vars:** txt (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Deploying the Azure Container App for the service](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/deploying-the-azure-container-app-for-the-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/deploying-the-azure-container-app-for-the-service?u=76281980&t=0)** - [Instructor] We need a place to execute the Docker container. And in this video we're going to use an [[Microsoft Azure|Azure]] container app to do that. In the Azure portal, I already navigated to the Marketplace and searched for container app. Here, I can click on Create and I can specify the subscription and the resource group. And the container app name is kinderlogger Test, or something, and this is because I already created the kinderlogger container app. I'm just showing you the process. Okay, so here you can specify your region and the container apps environment. In this case, it's going to reuse the existing one that I created beforehand. Okay, let's click on Container, and here I want to uncheck Use quickstart image and this is because I want to reuse my existing image. So this is my username and kinderloggerv1. Then the Container research allocation, I'm going to use those values and here you can specify the environment variables for the container. So OPENAI_API_KEY, remember, that is quite important. And then you're going to paste the value here. And the other one, which is OPENAI_ ASSISTANT ID. Okay, I'm just setting the value because, as I mentioned
>
> **[1:38](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/deploying-the-azure-container-app-for-the-service?u=76281980&t=98)** before, I already created this kinderlogger container app. Okay, let's navigate to Bindings. There are no bindings in this project, so Ingress, we want to enable ingress and we're going to use 8000 as a target port. And finally, we're going to use Client certificate mode Ignore. Okay, so if you want to add some tags to this particular resource, you can do that. And as I mentioned before, I have this kinderlogger container app, okay? So let me show you here in Containers, Environment variables. You can see that I already set those values for this particular container. Okay, so let's go back to the overview. And here I want to click on the application URL, and let's navigate to DOGS. And you can see that this is responding just as expected. And when did the firefighters visit the school? Let's execute this And we can see the response from the model. Okay, now we're ready to use this service from the GPT application. But before we do that,
>
> **[3:13](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/deploying-the-azure-container-app-for-the-service?u=76281980&t=193)** we're going to invoke the moderations API to implement a safe AI solution. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **Env Vars:** openai_api_key (1), openai_ (1), assistant (1), url (1), dogs (1)
> **UI Navigation:** click on (3), navigate to (2)
> **CLI Commands:** docker (1)
> **Cross-References:** go back to (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)


### 5. Identifying Harmful Content Using the Moderations API

[↑ Back to Table of Contents](#table-of-contents)

#### [Applying responsible AI practices in KinderLogger](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/applying-responsible-ai-practices-in-kinderlogger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/applying-responsible-ai-practices-in-kinderlogger?u=76281980&t=0)** - [Instructor] [[Artificial Intelligence (AI)|Artificial intelligence]] has totally changed how we do things every day. So it's paramount that our Kinder Lagger project can identify any harmful content. This is especially crucial when we're creating apps for the public. And this part of the course, we'll dive into using the Moderation's API to implement some safety checks. All right, let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Implementing the Moderations API in the transcription app](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-the-moderations-api-in-the-transcription-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-the-moderations-api-in-the-transcription-app?u=76281980&t=0)** - [Instructor] Having safety measures is critical for AI applications. So in this video, we're going to put the moderations API to work while we transcribe the audio files. So here, let's execute client moderations create. And we need to pass the input which is the transcription that we're receiving from the transcriptions API. And let's put this in moderation response so we can evaluate if the content is safe. So if moderation response results, the first result is flagged, then something happened. We can print the entire transcription and finally we can break the code. With this, we prevent the [[Representational State Transfer (REST)|rest]] of the code from executing. This is just one safety measure at the source of the data. In addition, we should implement something similar in the service. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### [Implementing the Moderations API in the Web API](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-the-moderations-api-in-the-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-the-moderations-api-in-the-web-api?u=76281980&t=0)** - [Instructor] In this video, we'll check out whether the message the user sent is safe for us to process. Okay, so let's get started. Here, I need to modify the read message function. So let's invoke client moderations and then create. And let's pass input with message. And let's put this in moderation response. And now we need to validate moderation response results, the first result. And if it's flagged, then I want to raise an exception. So let's import HTTP exception. And let's do something like raise HTTP exception. And the status code, I want it to be 400. And the detail say invalid prompt. Okay, so now we're ready to build a new Docker image and push it to the Docker hub. So let's save this. And here, let's execute Docker build. And then the tag, my username, KinderLogger. And this is going to be V two. And the context is this folder. So let's execute this, and after a while, this process is finished
>
> **[1:37](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-the-moderations-api-in-the-web-api?u=76281980&t=97)** so we can verify with Docker image list. So we have two Docker images for the KinderLogger application. So now I'm ready to push my username, KinderLogger v2.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/implementing-the-moderations-api-in-the-web-api?u=76281980&t=117)** Let's wait for this. And now we're ready to use this new version in the [[Microsoft Azure|Azure]] container app. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** docker (5)
> **Env Vars:** http (2)
> **Speakers:** - [instructor] (1)

#### [Building a new image and updating the Azure Container App](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-a-new-image-and-updating-the-azure-container-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-a-new-image-and-updating-the-azure-container-app?u=76281980&t=0)** - [Instructor] In the [[Microsoft Azure|Azure]] portal, we're going to navigate to the kinderlogger container app because we need to create a new revision so we can use the latest Docker image. So let's click on create new revision, and then let's delete this container image and create another one. Let's set the name to kinderlogger and then Docker Hub. And the image is my username, kinderloggerv2. And then I can specify the container resource allocation, for instance, half a CPU core and one gig. And then the environment variables such as [[OpenAI API]] key. I should select manual entry with the value and OpenAI assistant ID. Also manual entry and the value. I'm typing the value because I already created the revision. So let's cancel this and let's go back to revisions. And this is actually the one that is running. We can navigate to containers to verify that actually I'm using the kinderloggerv2 Docker image, so we can go back to overview, click on application URL to navigate to this address
>
> **[1:33](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/building-a-new-image-and-updating-the-azure-container-app?u=76281980&t=93)** and then docs so we can verify that this is running just as expected. Great job. Now join me in the next chapter where we're going to create the GPT application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[OpenAI API]] (1)
> **Env Vars:** cpu (1), api (1), url (1), gpt (1)
> **UI Navigation:** click on (2), navigate to (2)
> **CLI Commands:** docker (3)
> **Cross-References:** go back to (2), in the next (1)
> **Analogies:** for instance (1), such as (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)


### 6. Creating the KinderLogger GPT

[↑ Back to Table of Contents](#table-of-contents)

#### [Using a GPT as a frontend for the KinderLogger project](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-a-gpt-as-a-frontend-for-the-kinderlogger-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/using-a-gpt-as-a-frontend-for-the-kinderlogger-project?u=76281980&t=0)** - [Instructor] The (indistinct) Project is quite flexible because we've set it up as a service. In this part of the course, we're going to explore the GPTs feature from OpenAI. Now, keep in mind that GPTs need a paid plan with OpenAI. Still, I'm really excited to show you why it's a fantastic option for the (indistinct) user interface. All right, let's go ahead and get started.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Creating the GPT and the action for invoking the service](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-gpt-and-the-action-for-invoking-the-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-gpt-and-the-action-for-invoking-the-service?u=76281980&t=0)** - [Instructor] GPTs are custom versions of [[ChatGPT]] that you can create for a specific purpose. In our case, we're going to create the KinderLogger GPT that uses the service we've just published as a docker container. Let's go ahead and click on create. Here, I need to specify the name, which is, of course, KinderLogger, and the description that I happen to have here in the notepad and also, the instructions. So you can see in the instructions, all the messages you receive, you must send them to your related action. So speaking of which, we need to create that action. Let's click on create new action. And here in this course, I'm going to use none as the authentication type. And this is because we're not protecting the service. But of course, both API Keys and OAuth are supported. Okay, so let's click on cancel. So now, we need to specify the OpenAPI schema. Let's navigate to the service and then docs. And here, we can find the openapi.[[JSON]] link. And here, let's copy the entire json document and let's go back and paste it right here. So you can see that this is returning that could not find a valid URL in servers. And the thing is that you need to specify
>
> **[1:36](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-gpt-and-the-action-for-invoking-the-service?u=76281980&t=96)** that servers element yourself. So right below info, let's write servers and this is an array and let's type URL and the address of that particular server. In this case, let's go back to the [[Microsoft Azure|Azure]] portal and let's copy this address. Let's go back to the GPT and let's paste it right here. Awesome! So it detects that we have this message endpoint and we actually can test it. Now, the GPT is trying to communicate to the service. So I can confirm this and wait for the response. So we're receiving the response. So we know that this is working as expected. Now, we need to set the [[Privacy]] policy, and I created a fictitious privacy policy in my blog. And let's go back here. And we need to set this conversation starter. For example, give me my kid's summary. As you can see, this starter appears at the bottom whenever I execute the GPT. Finally, let's create an icon. Let's click here and use [[DALL-E]]. This is taking the description and it's going to create a new image for this GPT. This picture is perfect.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/creating-the-gpt-and-the-action-for-invoking-the-service?u=76281980&t=192)** So now, we're ready to save this. And in this case, I'm going to use only me. Let's click on confirm. And now, we're ready to use the KinderLogger GPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Privacy]] (2), [[ChatGPT]] (1), [[Microsoft Azure|Azure]] (1), [[DALL-E]] (1)
> **Env Vars:** gpt (6), url (2), api (1), dall (1)
> **UI Navigation:** click on (4), navigate to (1)
> **CLI Commands:** find (2), docker (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), picture (1)
> **File Paths:** openapi.json (1)
> **Tools:** azure portal (1)

#### [Testing the KinderLogger GPT](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/testing-the-kinderlogger-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/testing-the-kinderlogger-gpt?u=76281980&t=0)** - [Instructor] Okay, we've finished the KinderLogger project. Of course, there's still a bunch of extra stuff we need to add to make it production ready. For example, we need to implement authentication, and make it easy for people to upload their audio files for automatic transcription. But you know what? I truly believe we've created something great and super helpful for parents. All right, let's go ahead and test the KinderLogger GPT. Let's start by clicking on the Give Me My Kid's Summary. And remember that you have to confirm. So let's do this. And after some seconds, we receive the response. You can even use the KinderLogger GPT right from the [[ChatGPT]] application on your smartphone. Give me my kid's summary.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/testing-the-kinderlogger-gpt?u=76281980&t=57)** - [AI] Here's a summary of Leo's recent activities. Leo had a great start to the semester, engaging in discussions about professions like firefighters, police officers, doctors, and veterinarians, and learning about money and earning. In an English class project on professions, he reinforced vocabulary by matching words with images of professions. He participated actively and showed a great attitude. Activities included an experiment on reactions to fire and water and a game simulating a firefighter's role. In Spanish class, he worked on identifying and coloring figures, enhancing his motor skills. Leo was enthusiastic as a teacher for a day in English class, showing energy, but finding it challenging to control the group. This presented an opportunity for developing empathy. The Spanish class focused on literacy related to his name, emphasizing the sound of each letter. Overall, Leo is involved in various learning activities, with positive feedback from teachers on his participation and attitude. If you need more details, or have specific questions, just let me know.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/testing-the-kinderlogger-gpt?u=76281980&t=126)** - [Instructor] When did the firefighters visit the school?
>
> **[2:11](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/testing-the-kinderlogger-gpt?u=76281980&t=131)** - [AI] The firefighters visited the school in January. This visit was part of the month's activities focusing on various professions, including firefighters, police officers, doctors and veterinarians.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1)
> **Speakers:** - [instructor] (2), - [ai] (2)
> **CLI Commands:** make (2)
> **Env Vars:** gpt (2)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-openai-api-building-a-real-world-solution/next-steps?u=76281980&t=0)** - [Rodrigo] Great job. You finish this course. At this point, you should have a solid understanding of the essential APIs you can use to build solutions with OpenAI. There are many paths you can take from here. First off, why not deepen your [[Python (Programming Language)|Python]] skills? Dive into its best practices and [[Design Patterns]]. There's so much to learn. Next up, how about mastering the ins and outs of Web APIs and their different authentication types like OAuth? And finally, why not expand your knowledge on [[Microsoft Azure|Azure]] and [[Microservices]]? I've got some courses right here in the [[LinkedIn]] Learning Library that I think you'll love. I really hope you had as much fun with this course as I did making it for you. If you did, please let me know. You can get in contact with me on LinkedIn or Twitter. As always, thanks for watching and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Python (Programming Language)|Python]] (1), [[Design Patterns]] (1), [[Microsoft Azure|Azure]] (1), [[Microservices]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [rodrigo] (1)


## Instructor

- [[Rodrigo Díaz Concha]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-openai-api-building-a-real-world-solution-3854057/codespaces)

## Skills Covered

- OpenAI API
- OpenAI Products
- Artificial Intelligence (AI)
- Technical Solution Development

## Path Context

### In [[Hands-On Projects for OpenAI-Powered Apps]]
← [[Getting Hands-On with GPT Models- Tips and Tricks]] | **3 of 5** | [[Hands-On AI- Build an AI Chatbot with GPT-4o and Next.js]] →

## Appears In

- [[Hands-On Projects for OpenAI-Powered Apps]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Image Generation with DALL-E]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)