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
  - '[[Exploring Million-Token Models with Google Gemini Pro 1.5]]'
next_courses:
  - '[[Programming with the Gemini Flash API]]'
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
created: 2026-04-21
---

![Getting Started with the Google Gemini API](https://media.licdn.com/dms/image/v2/D560DAQHXvzWCHd5fZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008957502?e=2147483647&amp;v=beta&amp;t=tZUndRs2b-e08KuS5U5oMZEVrtYh5QHP1IwpGuHeXEk)

# Getting Started with the Google Gemini API

> Google's Gemini suite is a set of powerful generative models, and through the Gemini API, Google has exposed these models for developers to build on. In this course, instructor Fikayo Adepoju shows you how to unlock the power of the Gemini API. Learn what the Gemini API is all about—how the API is structured, priced, and its capabilities. Fikayo shows you what the Gemini API has to offer, demonstr

> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api) | 1h 8m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Fikayo Adepoju]]

## Skills Covered

- API Development
- Generative AI
- Artificial Intelligence (AI)
- Gemini
- Google Gemini

## Table of Contents

### Introduction

#### Get started with the Gemini API
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980&t=0)** - Hello and welcome to this course where I'll be introducing you to the amazing technology that is the Gemini API.
>
> **[0:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980&t=7)** In this course, you will learn what the Gemini API is all about, what the Gemini models are and their capabilities, how the API is structured, priced, and how you can start making API calls to the API to take advantage of the generative AI features on the Gemini platform.
>
> **[0:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980&t=26)** Hi, I am Fikayo Adepoju, a software developer and tech instructor with over 14 years experience developing scalable applications and teaching the next generation of developers.
>
> **[0:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/get-started-with-the-gemini-api?u=76281980&t=37)** If you're ready to unlock the potential of Google's Gemini API, I'll see you in the course.

> [!info]- Semantic Content
>
> **Env Vars:** api (6)
> **Speakers:** - hello (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=0)** - [Narrator] To take this course, honestly, the only major requirement is to have an interest in artificial intelligence and how it can be implemented in software applications.
>
> **[0:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=11)** The Gemini API provides a very low barrier of entry for developers to add AI-powered features to their applications, and that is what this course is designed to introduce.
>
> **[0:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=23)** However, because we'll be dealing with an API that will be used by developers.
>
> **[0:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=28)** We'll be looking at some code and implementing programming demos.
>
> **[0:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=32)** Thus, having some programming experience will definitely make you follow along better with this course.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=38)** However, this is not a mandatory requirement.
>
> **[0:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=42)** The content of this course has been structured to be comprehensible, even for non-programmers.
>
> **[0:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-you-should-know?u=76281980&t=48)** So if you're excited learning about what the Gemini API can do for your applications, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Who is this course for?
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=0)** - [Instructor] So who should take this course?
>
> **[0:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=3)** If you have found your way to this course, this is the time to answer a couple of questions that will determine if this is the right course for you.
>
> **[0:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=11)** Ready?
>
> **[0:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=12)** Let's go.
>
> **[0:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=14)** Are you a developer, development team, project manager, or engineering manager trying to learn how to add AI features to your application?
>
> **[0:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=22)** Or are you just interested in Google's Gemini models, and the capabilities of it's API, and you want to learn how it can be integrated into your applications?
>
> **[0:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=32)** If your answer to any of these questions is yes, then you are in the right place.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=38)** This course will give you a comprehensive introduction into the Google Gemini API.
>
> **[0:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=43)** You will learn what the Gemini models are, what the Gemini API does, capabilities of the different models, how Google prices the usage of the Gemini API, how the API is structured, and also get hands-on with some simple demos.
>
> **[0:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/who-is-this-course-for?u=76281980&t=59)** If all that sounds good to you, then let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (5)
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)


### 1. Understanding Gemini Models

#### What is Gemini?
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=0)** - [Instructor] Welcome to the world of Gemini, Google's fast growing, large language model.
>
> **[0:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=6)** If you're intrigued by the cutting edge advancements in artificial intelligence and how it's transforming technology, you will be excited by Gemini and what it's able to help you achieve.
>
> **[0:18](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=18)** In this video, we are going to cover what Gemini is, discuss its capabilities, and explore how developers can utilize Gemini in various applications.
>
> **[0:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=28)** So what is Gemini?
>
> **[0:31](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=31)** Gemini is a suite of multimodal generative AI models, developed by the team at Google.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=38)** Unlike the legacy power models that only accept text and output text, Gemini models can accept not only text, but also accept images in prompts, depending on what model variation you choose.
>
> **[0:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=52)** At the art of Gemini is the transformer architecture, a model designed to undo sequential data while capturing complex relationships within it.
>
> **[1:02](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=62)** Gemini has been trained on a wide variety of data, enabling it to understand context, nuance, and even human references.
>
> **[1:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=72)** By predicting the next word in a sequence, Gemini can generate coherent and relevant text, answer questions, compose essays, and even write code.
>
> **[1:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=84)** In this course, I am going to be introducing you to the Gemini API.
>
> **[1:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=89)** The Gemini API exposes Gemini's family of generative AI models through a web interface, giving developers the ability to build applications that take advantage of Gemini's models.
>
> **[1:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=101)** With the Gemini model, developers can integrate AI powered features into their applications using the model's capabilities to build applications like intelligent chat bots, creative writing assistants, image recognition features, data analysis tools, and many more.
>
> **[1:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=118)** In order to fully grasp the capabilities of Gemini, we first have to understand the models in the Gemini family, what their individual capabilities are, the supported input and output formats, their token limitations, and many more.
>
> **[2:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=134)** Before we discuss our first model in the Gemini suite one thing I would like you to note is that these models are continuously being improved and newer versions are released from time to time.
>
> **[2:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=145)** For example, while recording this course, Gemini released the Gemini 1.5 Pro model, an upgrade to the Gemini Pro model.
>
> **[2:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=154)** This new version accepts a staggering one million plus tokens as input and can also perform advanced tasks, tasks like code generation, text generation, text editing, problem solving, recommendations generation, and lots more.
>
> **[2:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=173)** However, it is currently in preview only mode and can only accept two queries per minute.
>
> **[3:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=180)** There is a strong possibility that by the time you're watching this course, this model will already be available for use on the Gemini API.
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=189)** To stay updated on new updates to Gemini model variants and versions, keep a tab on the AI.[Google.Dev/Gemini-API/docs/models/Gemini](https://Google.Dev/Gemini-API/docs/models/Gemini) page.
>
> **[3:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=203)** Here you can see all of Gemini's models, the different versions and variants.
>
> **[3:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=208)** For example, the Gemini 1.5 Pro that we just talked about.
>
> **[3:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-gemini?u=76281980&t=213)** In the next video, we'll be taking a look at the first model in the Gemini suite, the Gemini Pro model.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **Versions:** 1.5 (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Code Keywords:** interface (1)
> **URLs:** [google.dev](https://google.dev) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Gemini Pro
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=0)** - [Instructor] From the previous video, we learned that Gemini is a family of generative AI models.
>
> **[0:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=6)** So in this video, we'll be taking a look at the very first model in the family of Gemini models, the Gemini Pro model.
>
> **[0:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=15)** The Gemini Pro model, code name, gemini-pro, accepts only text as input and also generates a textual response.
>
> **[0:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=25)** It also has the ability to handle zero-shot, one-shot, or few-shot tasks.
>
> **[0:31](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=31)** What this means is that when prompting the model, you can provide no example, one example, or a few examples, respectively, of what the response should look like, and the model will still be able to generate an appropriate response.
>
> **[0:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=46)** The Gemini Pro model can handle what is known as multi-turn conversational format.
>
> **[0:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=52)** What this means is that you can use this model to build chat experiences.
>
> **[0:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=58)** This is due to the model's ability to collect multiple rounds of questions and responses and allow users to incrementally step towards answers or get help with multi-part conversations.
>
> **[1:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=69)** Now that we have gotten ourselves acquainted with the capabilities of this model, let's now discuss its limitations.
>
> **[1:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=77)** It may have been implied in the previous slide, but I would like to reiterate the fact that this model cannot take an image or any other media as input.
>
> **[1:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=86)** Only text inputs are supported.
>
> **[1:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=89)** Also, the maximum amount of tokens that can be consumed as input is currently set at 30,720.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=98)** For responses, the token cap is also set at a maximum of 2,048 tokens per output at the time of this recording.
>
> **[1:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=106)** In the context of Gemini models, a token is equivalent to about four regular text characters.
>
> **[1:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=113)** Approximately 60 to 80 English words will amount to 100 tokens.
>
> **[1:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=119)** Rate limiting is also implemented at the API level.
>
> **[2:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=123)** At the time of this recording, developers are only allowed to make 60 requests per minute.
>
> **[2:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=129)** However, you can have this quota expanded, but more on that when we discuss pricing in the next section.
>
> **[2:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=136)** So if your use case fits into all the capabilities described and doesn't exceed any of the limitations, this is the model to select.
>
> **[2:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro?u=76281980&t=145)** In the next video, we are going to be taking a look at the next model in the family of Gemini models, the Gemini Pro Vision model.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Gemini Pro Vision
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=0)** - [Presenter] Now that we understand how the Gemini Pro model works, it's now time to learn about another powerful model variant, the Gemini Pro Vision model.
>
> **[0:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=11)** The Gemini Pro Vision model, code name, gemini-pro-vision, accepts both text and images as input, but can only generate text as response.
>
> **[0:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=24)** The model can also accept multimodal inputs, which means that it can accept an input that is a combination of both text and images.
>
> **[0:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=34)** Like the Gemini Pro model, It also has the ability to handle zero-shot, one-shot, or few-shot tasks.
>
> **[0:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=43)** Meaning that you can provide no example, one example, or a few examples respectively of what the response should look like in order to get your desired response.
>
> **[0:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=55)** Now that we're familiar with the capabilities of this model, let's also discuss its limitations.
>
> **[1:01](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=61)** Unlike the Gemini Pro model, the Gemini Pro Vision model cannot handle a multi-turn conversational format.
>
> **[1:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=69)** This means that you cannot use the Gemini Pro Vision model to build chat applications like customer support assistance or a multimodal chatbot.
>
> **[1:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=79)** At least you cannot as at the time of this recording.
>
> **[1:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=83)** It is highly possible and highly expected that a subsequent version of this model would allow you to be able to build using multi-turn conversational formats.
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=94)** Also, the maximum amount of tokens that can be consumed as input is currently set at 12,288.
>
> **[1:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=103)** For responses, the token cap is also set at the time of this recording at a maximum of 4,096 tokens per output, double of what the Gemini Pro model allows.
>
> **[1:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=116)** Rate limiting is also implemented at the API level.
>
> **[2:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=120)** And just like the Gemini Pro model, you are only allowed to make 60 requests per minute.
>
> **[2:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=126)** I'll advise that you continue to check the Gemini models page for changes in this token and rate-limiting boundaries.
>
> **[2:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=134)** You also have the opportunity to have this quota expanded, and we'll be taking a look at that in the pricing video.
>
> **[2:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=141)** So if your use case fits into all the capabilities described and doesn't exceed any of the limitations, the Gemini Pro Vision is the model to select.
>
> **[2:31](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=151)** You can use it to build features that involve not just processing text, but also images.
>
> **[2:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=157)** I have a course on the LinkedIn Learning Library where I used this model to build a pretty cool image captioning tool.
>
> **[2:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=165)** I'll advise that you check out that course to see a fully practical implementation of this model.
>
> **[2:51](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/gemini-pro-vision?u=76281980&t=171)** In the next video, we are going to be taking a look at the next model in the family of Gemini models: the embeddings model.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1)
> **Code Keywords:** let (1), continue (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [presenter] (1)

#### Embedding
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=0)** - [Instructor] The next Gemini model we will be exploring is the embeddings model.
>
> **[0:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=5)** The embeddings model helps translate information to a universal format that Gemini can understand.
>
> **[0:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=12)** For example, imagine you have a bunch of documents in different languages like English, French, or Spanish.
>
> **[0:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=19)** The embeddings model can take all this information and convert it into a single code that Gemini can decipher regardless of the original language.
>
> **[0:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=29)** This allows Gemini to find connections and understand the meaning of information across different sources.
>
> **[0:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=35)** This way Gemini can relate information from different sources and answer your questions in a more comprehensive way.
>
> **[0:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=42)** It's like having a universal translator for all the information you give it.
>
> **[0:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=46)** This capability can be used to implement features such as information retrieval, question answering, recommendation systems, text summarization, anomaly detection, and many more.
>
> **[0:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=59)** The embeddings model, code name embedding or, if you want to add the version, embedding-001, more on versions later, takes text as its input and also outputs text, generating embeddings for the input text.
>
> **[1:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=75)** Currently, it is only optimized for creating embeddings for a maximum input of 2,048 tokens.
>
> **[1:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=83)** It can only take text as its input and doesn't have any adjustable safety settings.
>
> **[1:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=89)** The API rate limit is also currently capped at 1,500 requests per minute.
>
> **[1:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=96)** And that's all on the embeddings model.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/embedding?u=76281980&t=98)** In the next video, we'll be looking at the last model in the Gemini family of models, the AQA model.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), imagine (1), it's like (1), such as (1)
> **Env Vars:** api (1), aqa (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### AQA
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=0)** - [Instructor] In this video, we'll be discussing the last model in Gemini's suite of generative AI models, the AQA model.
>
> **[0:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=8)** The AQA model, AQA, which is short for Attributed Question-Answering, is a model trained on a specific dataset and designed to answer questions based on that dataset.
>
> **[0:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=19)** Imagine a system that is good at answering questions.
>
> **[0:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=22)** This system called Gemini AQA is trained on a lot of information.
>
> **[0:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=27)** When you ask it a question, it searches through this information to find the answer, and not only does it give you the answer, but it also estimates how likely it is that the answer is actually correct.
>
> **[0:40](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=40)** In other words, Gemini AQA is like a super librarian who can find information from many sources and tell you how sure they are that the information is right.
>
> **[0:51](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=51)** The AQA model, code name AQA, takes text as input, is able to perform attributed question answering as we've described, and output text.
>
> **[1:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=63)** This model is trained to return answers to your questions, which come in form of prompts.
>
> **[1:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=69)** These questions are based on the information that the model has been provided with.
>
> **[1:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=74)** For example, if the model is trained on real estate information, then it can answer questions on real estate.
>
> **[1:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=83)** The model also has the ability to estimate how confident it is in the answer it provided.
>
> **[1:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=90)** As for the model's limitations, it currently only supports the English language, but hopefully, more languages will be added going forward.
>
> **[1:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=99)** The input limit is restricted to 7,168 tokens, while the output token limit is currently set at 1,024 tokens.
>
> **[1:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=110)** API requests to this model are also rate limited, allowing a maximum of 60 requests per minute, and that is the AQA model in the family of Gemini generative AI models.
>
> **[2:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=123)** But before we wrap up this section, I would like to briefly discuss how Gemini manages its model versions.
>
> **[2:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=131)** Gemini models are either available in preview or stable modes.
>
> **[2:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=136)** There are three sets of versions for each model in the Gemini suite: the latest, the latest stable, and the stable version.
>
> **[2:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=146)** The latest version refers to the cutting-edge version of the model or the model generation.
>
> **[2:31](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=151)** This version is still being constantly updated and might be in preview mode, just like the Gemini 1.5 Pro model that I mentioned in the previous video.
>
> **[2:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=161)** This version should only be used for testing and prototypes and not in real-world production applications.
>
> **[2:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=168)** To specify the latest version of a model, use the format: model-generation-variation-latest.
>
> **[2:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=179)** For example, the gemini-1.5-pro-latest model.
>
> **[3:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=187)** The model here is Gemini, the generation is 1.5, the variation is Pro, and the version is the latest version.
>
> **[3:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=196)** Next is the latest stable version.
>
> **[3:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=201)** This version points to the most recent stable release version for the specified model generation and variation.
>
> **[3:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=208)** To specify a latest stable version, use the format model-generation-variation.
>
> **[3:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=216)** For example, the gemini-1.0-pro model, where Gemini is the model, the generation is 1.0, and the variation is Pro.
>
> **[3:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=228)** And lastly, we have the stable version.
>
> **[3:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=232)** These model versions do not change and are the most recommended for production applications.
>
> **[3:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=239)** To specify a stable version, use the format model-generation-variation-version.
>
> **[4:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=249)** For example, the gemini-1.0-pro-001 model version.
>
> **[4:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=257)** Here, Gemini is the model, 1.0 is the generation, Pro is the variant, and 001 is the specific version.
>
> **[4:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=268)** Do note that Gemini Pro is an alias for gemini-1.0-pro.
>
> **[4:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=275)** Thus, you can use both names interchangeably in your code to specify the model version.
>
> **[4:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=281)** In the next section, we'll be diving into details about the Gemini API; how it is priced, versioned, and how to generate appropriate responses.
>
> **[4:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=292)** Sounds exciting, right?
>
> **[4:54](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/aqa?u=76281980&t=294)** See you in the next section.

> [!info]- Semantic Content
>
> **Env Vars:** aqa (8), api (2)
> **Versions:** 1.0 (5), 1.5 (3)
> **Analogies:** for example (4), imagine (1), just like (1)
> **Definitions:** short for (1), is a  (1), in other words (1), refers to (1), is an  (1)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** find (2)
> **Code Keywords:** super (1)
> **Best Practices:** recommended (1)


### 2. How the Gemini API Works

#### What is the Gemini API?
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=0)** - [Instructor] In this section, we're going to be diving into the Gemini API.
>
> **[0:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=4)** We'll be looking at what the Gemini API is, the types of functions it allows you to perform, how it is priced and how to use it effectively.
>
> **[0:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=15)** At the end of this section, you will fully understand what the API is made of and how you can design your inputs in order to get desired responses.
>
> **[0:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=24)** Sounds great.
>
> **[0:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=25)** Let's get started.
>
> **[0:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=27)** In this video, I'll be helping you answer the question, what is the Gemini API?
>
> **[0:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=32)** The Gemini API is a programmatic interface exposed by Google AI that allows developers to build AI powered applications or features using Google's Gemini models.
>
> **[0:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=44)** With this API, developers can use Gemini models for functions such as content generation, dialogue agents, summarization, classification systems, building image processing engines, and many more.
>
> **[0:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=57)** This opens up an amazing opportunity for developers to add AI capabilities to their applications without having to develop their own custom models.
>
> **[1:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=67)** Now that we know what the Gemini API is all about, let's see how it is structured.
>
> **[1:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=73)** The Gemini API is a subset of Google's set of generative AI APIs.
>
> **[1:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=79)** Each version of this RESTful API consists of two main properties, resources and types.
>
> **[1:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=87)** Resources represent the entities that clients can interact with on the API.
>
> **[1:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=92)** Examples of resources on the API include models, operations, tuned models, and many more.
>
> **[1:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=99)** Types on the other hand, represent the standard data types or formats of the data being exchanged within the API and between clients and the API.
>
> **[1:49](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=109)** These often define how data is sent to a resource endpoint and how responses are returned to the client.
>
> **[1:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=116)** Examples of types on the Gemini API include content which contains multi-part content of a message.
>
> **[2:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=124)** Generative content response, which represents a response from the model supporting multiple candidates.
>
> **[2:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=131)** Content embedding, which is a list of floats representing and embedding, and many more types.
>
> **[2:18](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=138)** Now that we understand what resources and types on the Gemini API are, let's take a closer look at resources.
>
> **[2:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=146)** Each resource on the API consists of a set of methods representing the functions that developers are allowed to perform on the resource.
>
> **[2:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=155)** On the API documentation at ai.[google.dev/api/rest](https://google.dev/api/rest), if you go to the side menu under the REST section, you can expand any of the available API versions.
>
> **[2:49](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=169)** Here you can see the resources and the types in this version.
>
> **[2:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=176)** If you expand the resource, you can see all the functions that are supported under that resource.
>
> **[3:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=183)** The Gemini API functions can be found under the models resource.
>
> **[3:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=188)** The models resource represents the generative language models with Gemini being one of these models.
>
> **[3:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=195)** The models resource structure, represented as a JSON object, uses a name property to identify each model.
>
> **[3:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=203)** Each model name is preceded by the model's prefix.
>
> **[3:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=208)** For example, models/chat-bison-001, which refers to the chat bison model.
>
> **[3:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=217)** The same way model/gemini-pro refers to the Gemini Pro model.
>
> **[3:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=224)** The model's resource structure also contains other types of information describing the model.
>
> **[3:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=230)** For example, the version, which represents the version of the model, the input token limit, which is the maximum number of input tokens allowed for this model, the output token limit, which is the maximum number of output tokens allowed for this model, and the temperature.
>
> **[4:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=252)** The temperature is a number between 0.0 and 0.1, which represents the degree of randomness of the response received from the model.
>
> **[4:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=261)** Parameters like temperature can be configured based on the type of output you are expecting from the model, and it can instruct the model on how you want your response to be returned.
>
> **[4:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=272)** Now that we've taken a look at the properties of the model's resource, let's see the types of functions it can perform.
>
> **[4:40](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=280)** On the current stable version of the API, the V1 version, the following methods are supported.
>
> **[4:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=286)** The list method gets you a list of all the models available through the API.
>
> **[4:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=293)** This includes Gemini Pro, Gemini Pro Vision, embeddings, and others.
>
> **[5:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=300)** The get method retrieves information about a specific model by supplying the model name in the request URL.
>
> **[5:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=308)** The generateContent method takes in a prompt as input in the standard generate content request type format, and generates a response from the model.
>
> **[5:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=319)** This function is the main function for accessing the generative features of the AI models.
>
> **[5:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=326)** Later in this course, we'll be making use of this method to process a prompt that we'll be sending to the Gemini API.
>
> **[5:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=333)** Next is the countTokens method.
>
> **[5:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=336)** This method runs a models tokenizer, an internal tool for calculating tokens, and returns the token count.
>
> **[5:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=345)** The streamGenerateContent method generates a streamed response from the model.
>
> **[5:51](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=351)** This can be used to collect the response in chunks instead of all at once.
>
> **[5:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=357)** And finally, we have the embedContent method and the batchEmbedContent method.
>
> **[6:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=365)** You can use these methods to generate either a single or a batch of embeddings from the model respectively.
>
> **[6:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=373)** And that's all on the properties and method supported on the V1 version of the models resource.
>
> **[6:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/what-is-the-gemini-api?u=76281980&t=379)** In the next video, we'll be taking a look at how the Gemini API is versioned.

> [!info]- Semantic Content
>
> **Env Vars:** api (23), rest (1), json (1), url (1)
> **Code Keywords:** let (4), function (2), interface (1), finally, (1)
> **Code Identifiers:** generatecontent (1), counttokens (1), streamgeneratecontent (1), embedcontent (1), batchembedcontent (1)
> **Definitions:** is a  (4), refers to (1)
> **Analogies:** for example (2), such as (1)
> **Versions:** 0.0 (1), 0.1 (1)
> **Cross-References:** later in (1), in the next (1)
> **URLs:** [google.dev](https://google.dev) (1)

#### API versions
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=0)** - [Instructor] In this video, we are going to be looking at the different API versions currently available on the Gemini API.
>
> **[0:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=7)** In the previous video, we looked at the rest API page at ai.[google.dev/api/rest](https://google.dev/api/rest).
>
> **[0:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=15)** On the side menu, under the rest section, you can see that two versions of the API currently exist.
>
> **[0:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=23)** The V1 version and the V1 beta version.
>
> **[0:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=27)** So let's take a look at what these versions represent for developers using the API.
>
> **[0:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=34)** The V1 version of the Gemini API is a stable version of the API.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=38)** All the features in this stable version will be fully supported by the Google team over the lifetime of the stable version.
>
> **[0:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=45)** If there are any breaking changes, this version will remain stable, and instead another stable version will be created, containing the new updates.
>
> **[0:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=55)** Over a reasonable period of time, this stable version will then be deprecated for the newer stable version, giving developers enough time to switch.
>
> **[1:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=65)** If the updates to this stable version are non breaking, then there will be no change to the API version's name as changes will seamlessly be added.
>
> **[1:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=74)** The second version of the Gemini API is the v1beta version.
>
> **[1:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=79)** This version is used to introduce early access features that are under development and subject to rapid breaking changes.
>
> **[1:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=88)** Do note that there is no guarantee that features in the beta version will be available in the subsequent stable version, so do not build production applications in this version of the Gemini API.
>
> **[1:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=104)** For more information on the Gemini API versions, you can visit the API versions page at ai.[google.dev/gemini/api/docs/api-versions](https://google.dev/gemini/api/docs/api-versions).
>
> **[1:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=118)** If you scroll down, you can see a table that shows all the features supported on both versions and the ones that have been discontinued.
>
> **[2:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=127)** This will help serve as a guide to features you want to implement in your application.
>
> **[2:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=133)** For example, as the table shows, all features from the now deprecated PaL model have been discontinued.
>
> **[2:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-versions?u=76281980&t=141)** In the next video, we are going to be looking at how the usage of the Gemini API is priced.

> [!info]- Semantic Content
>
> **Env Vars:** api (13)
> **Code Keywords:** let (1), switch (1)
> **URLs:** [google.dev](https://google.dev) (2)
> **API Endpoints:** /api/rest (1), /api/docs/api-versions (1)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Pricing
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=0)** - [Instructor] In this video, we'll be looking at how usage of the Gemini API is priced.
>
> **[0:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=5)** Gemini follows a usage-based pricing model, so you are charged based on what you use.
>
> **[0:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=13)** To access the pricing page for Gemini, head over to ai.[google.dev/pricing](https://google.dev/pricing).
>
> **[0:20](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=20)** Currently, the pricing details for the preview, Gemini 1.5 Pro model is displayed.
>
> **[0:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=26)** However, as mentioned, this model is currently in preview mode.
>
> **[0:31](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=31)** To access the currently available Gemini model, click the model dropdown and switch to Gemini 1.0 Pro.
>
> **[0:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=41)** As at the time of this recording, Gemini offers two pricing models, the Free of charge model, and the Pay-as-you-go model.
>
> **[0:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=50)** On the free plan, which is the one we'll be making use of in this course, every usage of the API is free.
>
> **[0:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=58)** You're not charged for the size of the input or the output.
>
> **[1:02](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=62)** However, model token limits for input prompts and output responses still apply.
>
> **[1:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=69)** Currently, you are limited to 15 requests per minute, which should not contain more than 32,000 tokens.
>
> **[1:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=76)** The daily limit is also currently set at 1,500 requests per day.
>
> **[1:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=82)** If you want more, you'll need to go with the Pay-as-you-go model.
>
> **[1:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=87)** One important thing to note is that the details on this page change frequently, emphasis on frequently.
>
> **[1:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=96)** As a matter of fact, while recording this course, these details have changed up to three times.
>
> **[1:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=103)** So I advise that you check this page often to stay up to date on the usage pricing details.
>
> **[1:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=110)** The Pay-as-you-go model allows you to go beyond the 15 request per minute and token boundaries placed on the free plan.
>
> **[1:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=119)** You can make up to 360 requests per minute and 30,000 requests in a single day.
>
> **[2:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=126)** The maximum amount of tokens per minute is also increased from 32,000 in the free plan to 120,000 in the Pay-as-you-go plan.
>
> **[2:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=136)** Your input and output is also charged.
>
> **[2:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=139)** The charge for inputs is currently set at $0.50 per million tokens.
>
> **[2:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=145)** For outputs, which is currently only text-based, the price is set at $1.50 per million tokens.
>
> **[2:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=154)** At the time of recording this cost, the Pay-as-you-go plan is not currently available in the Google AI studio.
>
> **[2:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=162)** However, Google has already set the availability date for this payment plan to the 2nd of May, 2024, according to an email I received recently.
>
> **[2:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=172)** So, by the time you're watching this course, this payment option will most likely already be available.
>
> **[3:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=180)** For the simple demos we'll be implementing in this course, and for most simple tasks, the free plan is good enough.
>
> **[3:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/pricing?u=76281980&t=188)** In the next video, we'll be discussing how to design prompts to get the desired output from our requests to the Gemini API.

> [!info]- Semantic Content
>
> **Versions:** 1.5 (1), 1.0 (1), 0.50 (1), 1.50 (1)
> **Env Vars:** api (3)
> **UI Navigation:** dropdown (1), switch to (1)
> **CLI Commands:** make (1)
> **Code Keywords:** switch (1)
> **URLs:** [google.dev](https://google.dev) (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)

#### Designing prompt data
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=0)** - [Instructor] While you may have typed your prompts into a chat bot in a free form manner, like you will do when typing into something like a Google search box, there is actually a structure for prompting Gemini models that enables you to get the best response.
>
> **[0:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=16)** We'll be looking at that structure in this video and also discussing different ways you can take advantage of it when sending a request to the Gemini API.
>
> **[0:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=25)** The practice of structuring your prompts in a way that elicits the desired response from a language model is known as prompt design.
>
> **[0:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=35)** With a well structured prompt, you can get accurate, high quality responses from a language model, and in this video, we will be looking at best practices for doing that.
>
> **[0:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=46)** But before we begin looking into prompt design and the structure of prompts, first, let us answer the question.
>
> **[0:54](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=54)** What is a prompt?
>
> **[0:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=56)** A prompt is a natural language request sent to a language model in order to receive a response.
>
> **[1:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=64)** Basically, a prompt is any query you want a model to provide a response to.
>
> **[1:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=71)** For example, who is Joe Biden?
>
> **[1:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=74)** When was the Great Wall of China built?
>
> **[1:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=77)** List three states in Canada.
>
> **[1:20](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=80)** What does this image mean? These are all prompts.
>
> **[1:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=85)** Prompts are either a question you want a model to answer or a task you want the model to perform.
>
> **[1:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=92)** In order to design a prompt, you first need to understand what the structure of a prompt looks like.
>
> **[1:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=99)** A Gemini prompt can be made up of one or three of the following types of content: the input content, the context content, and the example content.
>
> **[1:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=112)** Crafting these content types effectively will enable you to extract the best response possible from the model.
>
> **[2:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=120)** So let's look at each of these content types a little closer.
>
> **[2:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=126)** First is the input content type.
>
> **[2:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=128)** This is the only required content type, and it's the text in the prompt that you want the model to provide a response for.
>
> **[2:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=137)** Inputs can come in different types.
>
> **[2:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=139)** So let's look at the types of input you can send to the Gemini API.
>
> **[2:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=145)** The most common type of input is the question input.
>
> **[2:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=149)** This is a question that you ask the model to provide a response for.
>
> **[2:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=154)** For example, who painted "The Mona Lisa," to which the model can then reply, "The Mona Lisa" was painted by the famous Italian polymath, Leonardo da Vinci.
>
> **[2:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=166)** It's one of the most recognizable works of art in the world.
>
> **[2:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=170)** This is an actual response from the Gemini Pro model.
>
> **[2:54](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=174)** Another type of input content is the task input.
>
> **[2:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=178)** This input type tells the model to fulfill a specific task.
>
> **[3:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=183)** For example, name three countries in Africa, to which the model can then respond, Egypt, South Africa and Nigeria.
>
> **[3:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=195)** There is also the entity input, which is an input type that the model is to perform an action on.
>
> **[3:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=202)** The model can be asked to classify, analyze, or summarize the input.
>
> **[3:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=208)** For example, identify the following as plant or animal, to which the model will then respond, a giraffe is an animal, hibiscus is a plant, and cat is an animal.
>
> **[3:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=224)** Lastly, we have the completion input.
>
> **[3:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=228)** This is an input that the model is expected to complete.
>
> **[3:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=232)** For example, fish cannot survive on land because, to which the model can then respond with these answers.
>
> **[4:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=240)** Yup, this bunch of facts can confirm why fish cannot survive on land.
>
> **[4:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=246)** Feel free to pause the video and read it if you find it interesting.
>
> **[4:10](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=250)** So those are the four types of input that you can supply in your prompts, and now you can select which input type to use for your desired use case.
>
> **[4:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=261)** Next, let's talk about the second part of a prompt, the context.
>
> **[4:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=266)** The context part of a prompt helps the model to further understand what it is expected to do with the input.
>
> **[4:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=273)** The prompts context can be one of the following instructions that specify how the model should behave, or information that the model uses or references to generate a response.
>
> **[4:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=286)** Context is necessary if you need to supply extra information to the model about the query or task, or scope the boundaries of the response you are expecting.
>
> **[4:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=296)** For example, classify the following programming languages, C, C++, Rust, JavaScript and PHP.
>
> **[5:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=306)** Options are compiled or interpreted, to which the model can then respond with a compiled list, which consists of C, C++ and Rust, and an interpreted list, which consists of JavaScript and PHP.
>
> **[5:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=324)** As you can see, we defined the boundaries of the classification to compiled and interpreted.
>
> **[5:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=332)** If we had not done that, the model could randomly decide and use a classification format of its choice.
>
> **[5:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=339)** It can also go on to supply a bunch of verbals information, when all we need is just a list.
>
> **[5:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=347)** The last part of our prompt design that we'll be looking at is the example content.
>
> **[5:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=353)** Examples in prompt design are used to define the structure, the expected response.
>
> **[5:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=358)** This helps you to regulate the formatting, phrasing, scoping, and or general pattern of your responses.
>
> **[6:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=366)** Let's take a look at an example of how we can use an example, no pun intended.
>
> **[6:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=372)** Let's say we send the prompt, list five global holidays, but we want the response in a certain format.
>
> **[6:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=381)** So what do we do?
>
> **[6:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=382)** We add the example like this, [1 January] New Year: first day of the year.
>
> **[6:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=390)** This way, the model will know that it needs to add the date and description of the holiday and may even use the exact format we used.
>
> **[6:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=399)** If we wanted to use the exact format we used in our example, we can add the phrase, using the format before defining our example.
>
> **[6:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=410)** This way, the model will make sure to follow the exact structure of our example in presenting the response.
>
> **[6:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=418)** There is a standard to how many examples are contained in a prompt design.
>
> **[7:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=423)** When no example is added to a prompt, the prompt is referred to as a zero shot prompt.
>
> **[7:10](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=430)** When a single example is added to a prompt, that prompt is called a one shot prompt.
>
> **[7:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=437)** Prompts that have more than one example in them are referred to as few shot prompts.
>
> **[7:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=444)** While the context and example parts of a prompt are not compulsory, adding context helps you define boundaries for your response and can be really helpful in generating more accurate responses.
>
> **[7:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=457)** Also, it is recommended to always include few short examples in your prompts because they show the model how to apply instructions with very good examples.
>
> **[7:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=467)** The context might even become redundant and you can decide not to add it.
>
> **[7:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/designing-prompt-data?u=76281980&t=472)** Now that we have a solid grasp on how to design our prompts, we'll be looking at our responses that are generated, using the API in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), for. (2), type. (1), type, (1), case. (1)
> **Definitions:** is a  (5), is an  (5), known as (1), is called (1)
> **Analogies:** for example (6)
> **CLI Commands:** php (2), cat (1), find (1), make (1)
> **Env Vars:** api (3), php (2)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Generating content
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=0)** - [Instructor] Now that we have mastered how to send requests to the API using well-crafted prompts, let's take a look at the process of generating a response and the types of responses.
>
> **[0:10](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=10)** Depending on the model you're using, the Gemini API allows you to use both text and images in your prompts.
>
> **[0:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=16)** As we learned earlier, the Gemini Pro model can take in only text as input, while the Gemini Pro-vision model is multimodal, meaning that it can take both text and images as input.
>
> **[0:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=30)** To generate content, Gemini models use the generateContent method of the model's resource.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=38)** Here we can see a Python code snippet of the Gemini Pro model generating content with a text input.
>
> **[0:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=45)** And here is another code snippet of the gemini pro-vision model generating content by taking both text and an image as input.
>
> **[0:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=55)** While both models currently only return text as response, you can also build what is known as a multi-turn conversation with the response.
>
> **[1:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=65)** A multi-turn conversation is a chat conversational format, meaning that you can build an interactive chat bot with the responses.
>
> **[1:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=73)** This format lets you collect multiple rounds of questions and responses, allowing users to build a conversation with the model as they step towards answers or get help with multi-part problems.
>
> **[1:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=86)** This multi-part conversation format is highly useful for building powerful AI powered features like interactive support assistance, smart AI tutors, support chatbots, and many more.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=98)** Do note however, that this feature is currently only supported by the Gemini Pro model.
>
> **[1:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=105)** The Gemini Pro-Vision model, while multimodal, does not support the multi-turn conversational format at the moment.
>
> **[1:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=113)** Another type of response format you can get from the API are streamed responses.
>
> **[1:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=119)** This allows you to receive your response from the API as a data stream.
>
> **[2:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=124)** This helps you create a more interactive experience for the user by showing the answers as they become available instead of having the user wait for the whole answer to appear at once.
>
> **[2:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=135)** This can be observed in our LLM chat bots like ChatGPT and Gemini display the response to a query.
>
> **[2:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=142)** The text comes in in parts and the user often reads along while more information is still coming in.
>
> **[2:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=149)** And that's a wrap for this section where we have learned in details how the Gemini API works.
>
> **[2:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/generating-content?u=76281980&t=154)** In the next section we'll be getting hands on with the API, starting with generating an API key that will give us access to the Gemeni API.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), llm (1)
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** generatecontent (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Developing with the Gemini API

#### Getting an API key
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=0)** - [Instructor] So far in this course, we have been getting ourselves familiar with what Gemini and the Gemini API is all about.
>
> **[0:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=7)** The models, the API structure and functions, and how we can design inputs to generate desired outputs.
>
> **[0:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=13)** In this section, we'll start getting practical with the Gemini API by using the API to perform some tasks.
>
> **[0:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=21)** In this video, we are going to be creating an API key in Google AI Studio.
>
> **[0:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=27)** The Google AI studio is where you manage your Gemini API account, models, settings, and usage.
>
> **[0:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=34)** You can also play around with a stable and preview models in the studio before you implement them in your applications.
>
> **[0:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=41)** The API key we're going to be creating is required for us to have authenticated access to the Gemini API.
>
> **[0:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=48)** To access Google AI Studio, head over to aistudio.[google.com](https://google.com) to begin the process, you'll need a Gmail account to sign into the AI studio.
>
> **[0:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=58)** You'll be prompted to sign in with your Gmail account when you visit the AI studio address.
>
> **[1:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=64)** I've already signed in so we can begin the process of creating an API key to use the Gemini API.
>
> **[1:10](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=70)** To get started, go to the left hand corner of the dashboard and you will see a get API key link.
>
> **[1:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=76)** Let's click that to go to the API Keys page.
>
> **[1:19](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=79)** The API keys page is where you'll be able to create a new API key and also manage all the keys that you have created to create a new API key, click the create API Key button on the page.
>
> **[1:31](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=91)** This will pop up a dialogue where you can create a new API key.
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=95)** You'll need to create a new key in an existing Google Cloud platform project.
>
> **[1:40](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=100)** If you already have an existing project that you want to use, you can search for it using the search bar and select it.
>
> **[1:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=108)** But for this demo, we'll be creating a new GCP project.
>
> **[1:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=112)** To create a new Google Cloud platform project, head over to cloud.[google.com](https://google.com) to access the Google Cloud console, you will already have an account as long as you're signed in with your Gmail account.
>
> **[2:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=124)** Also, all the offerings in the free tier are enough for what will be demonstrating in this course on the Google Cloud platform homepage, click the console link at the top right hand corner.
>
> **[2:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=137)** On the console welcome page, click the project dropdown at the top bar.
>
> **[2:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=143)** This will bring up a list of all your existing projects on the Google Cloud platform.
>
> **[2:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=147)** On the top right hand corner of the dialogue, click the new project button to create a new GCP project.
>
> **[2:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=154)** On the project creation screen, fill in an appropriate name for your project.
>
> **[2:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=159)** Say my demo Gemini API project.
>
> **[2:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=166)** You can leave the location field as no organization and proceed to click create to create your new Google Cloud platform project.
>
> **[2:54](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=174)** Google Cloud platform then goes to work creating your project.
>
> **[2:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=178)** After a few seconds, you should see a notification that your project has been successfully created with our new project in place.
>
> **[3:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=187)** Now let's go back to Google AI Studio on the API Keys page in Google AI Studio.
>
> **[3:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=193)** Refresh the page to ensure that the project list has been updated with your newly created GCP project.
>
> **[3:20](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=200)** After refreshing, click the create API key button to pull up the dialogue once again.
>
> **[3:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=206)** Now, when you click into the search bar, you should see the new project that we just created.
>
> **[3:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=212)** If not, you can search for it using the name that you entered for the project.
>
> **[3:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=216)** Once you project is selected, click the create API Key in Existing project button to create your Gemini API Key.
>
> **[3:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=225)** Google AI Studio then goes to work creating a key for you to use in your code-based projects.
>
> **[3:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=232)** Do ensure that you copy this key and store it in a secure place.
>
> **[3:56](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=236)** Do not expose it to the public.
>
> **[3:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=238)** Once copied, you can then close the dialogue box.
>
> **[4:04](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=244)** If the key creator doesn't immediately show up in your API keys table, you can refresh the page.
>
> **[4:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=251)** Now that we've refreshed the page, we can then see the key on our API keys table.
>
> **[4:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=257)** The table shows a truncated version of the key, the project it was created in, when it was created, and a button for you to delete the key.
>
> **[4:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=266)** You can also click the truncated key display to view the key anytime you want to copy it.
>
> **[4:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=272)** Now that we have our API key in hand, we can now begin with the API demos in this section.
>
> **[4:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/getting-an-api-key?u=76281980&t=278)** But first, let's learn about the API endpoints in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (27), gcp (3)
> **Code Keywords:** let (3), public (1), delete (1)
> **UI Navigation:** go to (2), dropdown (1)
> **URLs:** [google.com](https://google.com) (2)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### API structure, models, and endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=0)** - [Instructor] Before we begin our demos with the Gemini API, let's take a look at how the REST API is structured.
>
> **[0:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=7)** As mentioned earlier in one of the previous videos, the Gemini API is under Google's parent generative AI APIs.
>
> **[0:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=15)** The best URL for all of Google's generative AI APIs is, [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com).
>
> **[0:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=28)** This is Google AI's service endpoint for its API service.
>
> **[0:34](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=34)** You can find all the endpoints available on the API in the Gemini API documentation at ai.[google.dev/api/rest](https://google.dev/api/rest).
>
> **[0:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=47)** This page shows all the endpoints, resources, and functions available on both the v1 and the v1beta versions of the API.
>
> **[0:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=57)** To make a request to the Gemini API, here is how your URL is to be structured.
>
> **[1:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=63)** https://, then we have the baseURL / the version
>
> **[1:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=72)** / the resource / the model : method,
>
> **[1:20](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=80)** then we have a question mark, we have the key parameter, which is set to our API_KEY.
>
> **[1:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=86)** That's the API key we generated in a previous video.
>
> **[1:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=90)** So first you have the baseURL, which is the service endpoint at [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com).
>
> **[1:41](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=101)** Next is the API version, which can be v1 or v1beta, or any API versions subsequently released.
>
> **[1:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=110)** After that is the resource, of which the value will be models in order to use the Gemini API.
>
> **[1:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=117)** Next is the model itself.
>
> **[2:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=120)** This is where we specify the model we want to use in our request.
>
> **[2:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=123)** This can be Gemini Pro or Gemini Pro Vision, or any of the available models in the Gemini API suite.
>
> **[2:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=132)** The model is then followed by a colon, after which is the method we would like to call.
>
> **[2:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=137)** This can be any of the methods we looked at earlier under the model's resource, for example, countTokens, to return the total number of tokens in the input content, or generateContent, which is the main generative method on the model's resource.
>
> **[2:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=155)** We will be seeing this method in action later on.
>
> **[2:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=159)** Finally, we have the question mark, followed by a query parameter called key.
>
> **[2:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=164)** This parameter allows us to pass our API key in our request to the Gemini API.
>
> **[2:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=170)** Without this key, our request will not be served by the API.
>
> **[2:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=175)** Do note that the list and get methods of the model resource are exceptions to this request format.
>
> **[3:02](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=182)** Shown on the screen is the request URLs for both the get and the list methods of the model's resource.
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=189)** The get URL takes the model name as the last item to retrieve details about the specific model.
>
> **[3:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=196)** Now that we understand the structure of an API request URL, let's take a look at an example.
>
> **[3:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=201)** Let's say we want to send a prompt to the Gemini API in order to get back an AI generated response.
>
> **[3:28](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=208)** Here is what the URL will look like.
>
> **[3:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=210)** [https://generativelanguage.googleapis.com/v1/models](https://generativelanguage.googleapis.com/v1/models)/
>
> **[3:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=219)** gemini-pro:generateContent?=$API_KEY.
>
> **[3:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=228)** As you can see in this example, we have our baseURL, the version, which is v1, we are targeting the models resource, and using the Gemini-Pro model on which we are calling the generateContent method.
>
> **[4:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=243)** Each request to a method on the API also requires a standard input format in the request body in order to know what the request format looks like for each API method.
>
> **[4:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=254)** Once again, let's look at the REST API documentation at ai.[google.dev/api/rest](https://google.dev/api/rest).
>
> **[4:22](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=262)** Here, when we scroll down, we can click on any function to see details about what the request and response will look like.
>
> **[4:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=270)** Let's scroll down and locate the models resource on the v1 version of the API and see what the expected request body for the generateContent method looks like.
>
> **[4:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=282)** Scroll down, skip all the v1beta model, and yeah, this is v1 models.
>
> **[4:49](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=289)** Now, under the v1 models, let us click generateContent.
>
> **[4:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=295)** On the generateContent method page, if we scroll down to the request body section, we can see a JSON representation of the expected request body.
>
> **[5:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=305)** It's an object containing three parts, the contents array, the safety settings array, and the generation config object.
>
> **[5:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=315)** The content array is used to pass in inputs, both text and images, if supported by the model variant we're using.
>
> **[5:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=324)** The safety settings array is used to pass settings that tune the censorship of the model.
>
> **[5:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=329)** Lastly, the generation config object is used to pass settings that define how content is generated, for example, the temperature.
>
> **[5:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=339)** In this beginner course, we'll only be looking at the contents parameter, which is the only mandatory parameter in the request body.
>
> **[5:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=347)** For more details on other parameters, you can always check out the Gemini API documentation.
>
> **[5:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=353)** The contents array is an array of objects of the content type.
>
> **[5:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=357)** Remember, we mentioned earlier that the API consists of both resources and types.
>
> **[6:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=363)** Each content object in this array is a single instance of the content type and can contain both text and images.
>
> **[6:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=371)** To see what a content type looks like, we can click to see a JSON representation of its structure.
>
> **[6:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=377)** The content type consists of a parts array, which is an array of objects of the parts type.
>
> **[6:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=384)** It also contains a role string, an optional parameter, which allows you to define the role of the producer of the content.
>
> **[6:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=392)** This can either be the user or the model itself.
>
> **[6:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=396)** If left out, the user role is assumed by default.
>
> **[6:40](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=400)** The part also has a standard format, and we can click part to view that.
>
> **[6:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=405)** The part type consists of two parameters, text, which represents the actual textual input, and does text as string, and inline data, which takes a binary large object and is where you put in your images.
>
> **[7:01](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=421)** The blob object also expects two parameters, the mime type of the image being sent, and a string representation of the binary object encoded in base64.
>
> **[7:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=433)** With all this information in hand, we can now start to query our Gemini API.
>
> **[7:18](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/api-structure-models-and-endpoints?u=76281980&t=438)** In the next video, we'll run our first API call using the REST full API.

> [!info]- Semantic Content
>
> **Env Vars:** api (27), url (5), rest (3), api_key (2), json (2)
> **Code Keywords:** let (6), pass (4), type. (2), finally, (1), function (1)
> **Code Identifiers:** generatecontent (6), baseurl (3), counttokens (1)
> **URLs:** [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com) (2), [google.dev](https://google.dev) (2), [https://generativelanguage.googleapis.com/v1/models](https://generativelanguage.googleapis.com/v1/models) (1)
> **UI Navigation:** scroll down (4), click on (1)
> **Cross-References:** earlier in (1), previous video (1), we mentioned (1), in the next (1)
> **API Endpoints:** /api/rest (2), /v1/models/ (1)
> **Definitions:** is an  (2), is a  (1)

#### Using the REST API
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=0)** - [Instructor] In this video, we'll be performing our first demonstration of using the Gemini API by making a request to it using the rest API.
>
> **[0:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=8)** In order to do this, we will need an HTTP client to make the HTTP call to the API.
>
> **[0:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=16)** While we can do this from our command line using a utility like cURL, that's cURL, I've chosen to use the Postman software for a more visual experience.
>
> **[0:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=26)** You can download Postman for free for any platform of your choice at their website.
>
> **[0:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=33)** Once downloaded, open up Postman, and let's get started with our demo.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=38)** In this demo, we'll be sending a prompt to the Gemini Pro model to generate a response using the Generate content method.
>
> **[0:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=47)** If we navigate to the generate content documentation for the model's resource, we'll see that this is a post request to be sent to the URL using the standard format that we described in a previous video.
>
> **[1:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=60)** So the first thing we'll be doing in Postman is to set the request method for this request to post.
>
> **[1:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=68)** Next, let us type in our request URL as we have learned in the previous video.
>
> **[1:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=73)** To begin, we start with the base URL, which is the Gemini API service URL, generativelanguage.[googleapis.com](https://googleapis.com).
>
> **[1:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=89)** Do make sure that you spell this URL correctly so that we can know that we are hitting the right address.
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=95)** Next is our API version, and that will be the V1 stable version.
>
> **[1:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=102)** After that, we have the API resource we want to use.
>
> **[1:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=105)** And for the Gemini API, that will be models.
>
> **[1:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=110)** Right after that is the name of the model we want to use for this request, and that will be the Gemini Dash Pro model.
>
> **[1:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=118)** Then to call our model method, we first add a colon, then the name of the method we want to call, which is the generateContent method.
>
> **[2:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=128)** Also, make sure that you have spelt this model method correctly.
>
> **[2:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=132)** Finally, we pass our API key by ending the part with a question mark and writing our key parameter.
>
> **[2:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=141)** Remember to grab the key from where you have copied it and paste it after the equal sign for the key parameter.
>
> **[2:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=147)** Now that our request URL is locked in, let's now construct our request body.
>
> **[2:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=153)** On Postman, click the body tab below the address field.
>
> **[2:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=158)** On the list of request format options, select raw as your choice.
>
> **[2:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=164)** A dropdown automatically appears beside this list.
>
> **[2:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=167)** Click the dropdown and select the JSON option.
>
> **[2:51](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=171)** Now we can build our request body using JSON.
>
> **[2:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=175)** Let's begin by first dragging down this response window so that we can have some space.
>
> **[2:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=179)** And now let's open our adjacent request object in the window below.
>
> **[3:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=183)** The first thing we're going to add is our content parameter, and we'll set that to an array.
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=189)** Inside the array, let's create a single content type object.
>
> **[3:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=193)** Inside this content object block, let's add our array of part types with the parts parameter.
>
> **[3:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=201)** For this request, we will only be needing one prompt.
>
> **[3:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=204)** So open an object to define the single prompt as a part object.
>
> **[3:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=210)** Because we are calling the Gemini Pro model, which only supports text as input, we will only be adding the text parameter to this part object, and we set that to a string.
>
> **[3:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=222)** Inside this string we can then write our prompt, which is what we want the model to respond to.
>
> **[3:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=228)** Let's say we want the model to write a short piece on humming birds.
>
> **[3:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=232)** We tell the model, write a short piece on humming birds.
>
> **[4:03](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=243)** Perfect.
>
> **[4:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=245)** Now that we have our request URL and our request body all set up, it is time to fire our request.
>
> **[4:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=251)** So let's go ahead and hit the send button, hoping all goes well and we don't get any errors and wait for our response.
>
> **[4:21](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=261)** As you can see, our request is now complete and our response is back, thankfully with no errors.
>
> **[4:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=269)** So let's take a look at the response that we got back.
>
> **[4:32](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=272)** This response contains so many parts, starting with the candidates block.
>
> **[4:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=278)** The candidates array contains different reply options that Gemini has given to us to choose from.
>
> **[4:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=284)** With the default generation settings, only one response candidate is returned like we have here.
>
> **[4:50](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=290)** Each candidate comes with a bunch of information, but what we are most concerned about is the content object, which is of the type content.
>
> **[5:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=300)** If we drill down to the parts parameter into the first part object, we see the text that returns our response from the Gemini model.
>
> **[5:09](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=309)** Here we can see a short piece that Gemini has written about humming birds.
>
> **[5:14](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=314)** "Humming birds, the tiniest of birds, are a captivating spectacle of nature with iridescent colors and an enchanting hum.
>
> **[5:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=323)** They dart through the air with grace and agility."
>
> **[5:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=327)** Quite interesting, and with this successful response, we have been able to call the Gemini API with a request prompt and get a response back.
>
> **[5:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=337)** In this video, we have used the rest API by directly calling a Gemini API endpoint.
>
> **[5:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-the-rest-api?u=76281980&t=343)** In the next video, we'll be using one of the SDKs of the popular programming languages to demonstrate how to work with Gemini more efficiently within our code.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), url (7), http (2), json (2)
> **Code Keywords:** let (10), this, (1), finally, (1), pass (1), from. (1)
> **Tools:** postman (5), command line (1)
> **CLI Commands:** make (3), curl (2)
> **UI Navigation:** dropdown (2), navigate to (1), select the (1)
> **Code Identifiers:** curl (2), generatecontent (1)
> **Cross-References:** previous video (2), in the next (1)
> **URLs:** [googleapis.com](https://googleapis.com) (1)

#### Using a programming language SDK
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=0)** - [Instructor] In the last video, we called the Gemini API, using the RESTful API by using an HTTP client.
>
> **[0:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=8)** In this video, we're going to be looking at a more efficient way to work with the Gemini API in our code base by using a client SDK.
>
> **[0:17](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=17)** A client SDK is a software library designed for a programming language to abstract complexities of working with an API of a service or another software.
>
> **[0:27](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=27)** Gemini has client SDKs for different popular programming languages, like Python, Node.js, Golang, and many others.
>
> **[0:35](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=35)** There are also SDKs for mobile platforms like Android and a Swift library for iOS.
>
> **[0:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=42)** In this video, we're going to be making use of the Node.js SDK to interact with the Gemini API, using the same example prompt as we did in the last video.
>
> **[0:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=52)** To follow along with our demo in this video, you will need to have Node.js installed on your machine.
>
> **[0:57](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=57)** You can install Node.js by going to the Node.js website, [nodejs.org](https://nodejs.org), to download any of the stable version installation files for your operating system.
>
> **[1:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=66)** Once installed, Node.js also comes bundled with its default package manager npm, which we're going to be using to install a package.
>
> **[1:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=76)** You can confirm that you have Node.js installed on your system by running the command node -v in your terminal.
>
> **[1:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=85)** This should print out the version of Node.js you have installed to your console.
>
> **[1:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=89)** The Gemini API requires at least Node.js version 18, so make sure that your Node.js version is 18 or above.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=98)** Once you have confirmed your installation of Node.js, we can then begin with the demo.
>
> **[1:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=103)** Let's start by creating a folder for the project.
>
> **[1:45](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=105)** In our terminal, let's write, make directory, Gemini, API, demo.
>
> **[1:54](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=114)** I have chosen to do this from a terminal, but you can also do it using your File Explorer window.
>
> **[1:59](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=119)** Press enter to create our folder.
>
> **[2:02](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=122)** Then let see into the folder.
>
> **[2:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=126)** And now, we can start initializing our Node.js project.
>
> **[2:10](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=130)** To set up a new Node.js project, run the command npm init -y.
>
> **[2:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=136)** This will make sure that we have a package.json file set up and skip the whole interactive process of setting it up.
>
> **[2:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=144)** Perfect.
>
> **[2:25](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=145)** Let's clear the screen so we can have some space.
>
> **[2:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=149)** The next thing we're going to do is to install the client's library for Node.js for working with the Gemini API.
>
> **[2:36](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=156)** This package is available on the NPM package repository @Google/generative-ai.
>
> **[2:43](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=163)** We're going to be installing it by running this npm command.
>
> **[2:47](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=167)** So let's head over to our command line and do just that.
>
> **[2:51](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=171)** So back in our command line, at the root of our project, let's run npm install @Google/generative-AI.
>
> **[3:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=186)** And let's hit enter to install the package.
>
> **[3:11](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=191)** Our package is now installed, so let's head over to our code editor and start some coding.
>
> **[3:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=196)** Here in my code editor, which is Visual Studio Code, I have opened up the folder that we created for our project, which is Gemini API demo.
>
> **[3:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=204)** We have our package.json file, and we have our node modules folder where we have just installed our Google generative AI SDK for Node.js.
>
> **[3:33](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=213)** To begin writing our code, let's create a new file and call that file index.js.
>
> **[3:42](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=222)** Inside this file, first, let us bring in our Node.js Gemini API SDK using the required function.
>
> **[3:51](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=231)** We say @Google/generative-ai.
>
> **[4:01](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=241)** Now, from this library, we'll need to extract the Google generative AI class.
>
> **[4:06](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=246)** To do that, I'm going to create a new variable, and I'll set that to an object.
>
> **[4:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=252)** Set the value to equal our require function, and we can bring in our GoogleGenerativeAI class.
>
> **[4:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=266)** Let me pull this to the side.
>
> **[4:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=269)** With this class in place, we can then create a new instance of the GoogleGenerativeAI object by passing it our API key.
>
> **[4:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=277)** Say const GoogleGenAI equals new.
>
> **[4:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=284)** Create a new instance of our GoogleGenerativeAI and we'll pass it a string.
>
> **[4:49](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=289)** And that string will be our API key.
>
> **[4:53](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=293)** Next, let us create an async function that will run our request to the API.
>
> **[4:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=298)** Say async, function, runPrompt.
>
> **[5:05](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=305)** Good.
>
> **[5:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=307)** Inside this function, the first thing we'll do is to select the model we want to work with.
>
> **[5:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=312)** This will be done by passing the configuration object with the model specification to the generative AI object.
>
> **[5:18](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=318)** In the code just written, we have created a new model variable called the getGenerativeModel function on our GoogleGenAI object.
>
> **[5:26](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=326)** And specify that we want to use the gemini-pro model.
>
> **[5:29](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=329)** We now have everything set up to send our request, so let's write our prompt and send it to the API.
>
> **[5:37](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=337)** We're going to be sending the same prompt, so we say write a short piece on hummingbirds.
>
> **[5:46](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=346)** We can then pass this prompt to the model by calling the generate content method on our model and giving it the prompt as its argument.
>
> **[5:55](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=355)** To wrap up our function, let's now print our results to the console.
>
> **[6:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=367)** Our response is going to be available on the text function of the response object, which is returned from our API call.
>
> **[6:16](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=376)** Finally, let us call our function so that it runs our code when we run this Node.js file.
>
> **[6:23](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=383)** Perfect.
>
> **[6:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=384)** Now that we have all our code in place, let us save the file and run it in our console.
>
> **[6:30](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=390)** So back here in our console at the root of the project, let us run the command node index.js.
>
> **[6:39](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=399)** As this is an asynchronous process, it'll take some few seconds for the response to return.
>
> **[6:44](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=404)** So let's hit enter and wait for our response.
>
> **[6:48](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=408)** And voila, we have our short piece on hummingbirds, just as we did in our last video, but this time, using the client SDK.
>
> **[6:58](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=418)** Using client SDKs provides a more coordinative interface to work with the Gemini API, and it is recommended for using the Gemini API in your coding projects.
>
> **[7:08](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=428)** And that's a wrap on our demos using the Gemini API.
>
> **[7:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=432)** I hope you have enjoyed it.
>
> **[7:13](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/using-a-programming-language-sdk?u=76281980&t=433)** Let's now head over to the next video for some next steps.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (9), class. (2), pass (2), async (2)
> **CLI Commands:** node (20), npm (5), make (3), python (1)
> **Env Vars:** api (18), sdk (6), http (1), npm (1)
> **File Paths:** node.js (17), package.json (2), index.js (2)
> **Prerequisites:** install (5), set up (3)
> **Tools:** terminal (3), command line (2), visual studio (1)
> **Code Identifiers:** ios (1), runprompt (1), getgenerativemodel (1)
> **Cross-References:** in the last (2), next video (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=0)** - I hope you have enjoyed this introduction to using the Gemini API, and I hope that this course has given you a better understanding on how to use the Gemini API in your applications.
>
> **[0:12](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=12)** The LinkedIn Learning Library is full of a ton of AI courses, and I will specifically recommend that you check out my other Gemini course, building an Image caption generator using the Gemini API.
>
> **[0:24](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=24)** This course will give you a more practical guide on using the Gemini API in a production application as we build an entire application that uses the Gemini API for its AI powered features from start to finish.
>
> **[0:38](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=38)** Whether you're a programmer just looking for APIs to use to add AI POD features to your applications, or you are a data scientist that wants to build your own AI models from scratch, there are courses in the library for every use case.
>
> **[0:52](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=52)** So I highly recommend that you check out more courses in the library to further ground your knowledge of building AI powered applications.
>
> **[1:01](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=61)** Once again, I am Fikayo Adepoju, and you can reach me on any of my socials displayed on the screen.
>
> **[1:07](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=67)** On LinkedIn using my name, on Twitter @coderonfleek, and on GitHub, also @coderonfleek.
>
> **[1:15](https://www.linkedin.com/learning/getting-started-with-the-google-gemini-api/next-steps?u=76281980&t=75)** Happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), pod (1)
> **Code Keywords:** case. (1)
> **Tools:** github (1)
> **Speakers:** - i (1)


## Path Context

### In [[A Developer's Guide to Google Gemini]]
← [[Exploring Million-Token Models with Google Gemini Pro 1.5]] | **3 of 8** | [[Programming with the Gemini Flash API]] →

## Appears In

- [[A Developer's Guide to Google Gemini]]

## Related Courses

_Courses sharing skills:_

- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Building with Google Gemini Advanced and Ultra]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Prompt Engineering with Gemini (2024)]] — Artificial Intelligence (AI), Google Gemini, Gemini
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini

---

[↑ Back to top](#)