---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-image-generation-with-dall-e
url: "https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e"
duration_minutes: 24
duration: 24m
level: Intermediate
updated: 1/17/2024
learners: 12474
skills:
  - OpenAI API
  - DALL-E
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-image-generation-with-dall-e-4558023"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGxFE7zT3GMqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705102392664?e=2147483647&amp;v=beta&amp;t=c3rGlUy2B3DH9c11z2tWjRNg05BirMEcYcoAJWq3evA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[OpenAI API- Fine-Tuning]]'
next_courses:
  - '[[OpenAI API- Vision]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":6,"total":10,"prev":"OpenAI API- Fine-Tuning","next":"OpenAI API- Vision"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/dall-e
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Image%20Generation%20with%20DALL-E.md)

![OpenAI API: Image Generation with DALL-E](https://media.licdn.com/dms/image/v2/D560DAQGxFE7zT3GMqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705102392664?e=2147483647&amp;v=beta&amp;t=c3rGlUy2B3DH9c11z2tWjRNg05BirMEcYcoAJWq3evA)

# OpenAI API: Image Generation with DALL-E

> DALL-E is well-known for its ability to interpret a wide range of text prompts and generate corresponding images. Join instructor Kesha Williams to learn more about DALL-E's enhanced resolution features, access methods, and the art of crafting effective image prompts considering built-in moderation.This course offers a deep dive into real-world applications across various professional industries, 

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e) | 24m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Introduction to image generation with DALL-E
- [**1. Understanding DALL-E**](#1-understanding-dall-e) (2 videos)
  - Explore DALL-E features and capabilities
  - Gain access to DALL-E
- [**2. Using DALL-E in the Real World**](#2-using-dall-e-in-the-real-world) (2 videos)
  - Craft effective image prompts
  - Use image generation in the real world
- [**3. Generate Images via the Images API**](#3-generate-images-via-the-images-api) (3 videos)
  - Explore the Images API
  - Estimate image pricing
  - See image generation in action
- [**Conclusion**](#conclusion) (1 videos)
  - Your DALL-E journey

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to image generation with DALL-E
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980&t=0)** - [Kesha] What you create with DALL-E is only limited to your imagination.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980&t=5)** Generate high quality images and images for your projects in website design, entertainment, visual storytelling, research, and so much more.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980&t=18)** Now more than ever, the OpenAI API makes it easy to integrate DALL-E into your existing products and applications, and I'll show you how in this course.
>
> **[0:30](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980&t=30)** You'll explore the OpenAI API and learn how to generate the images you want.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980&t=37)** I'm Kesha Williams, and I've helped hundreds of thousands of people harness the power of AI tools and machine learning technologies, and I'd love to help you.

> [!info]- Semantic Content
>
> **Env Vars:** dall (2), api (2)
> **Speakers:** - [kesha] (1)


### 1. Understanding DALL-E

> [↑ Back to Table of Contents](#table-of-contents)

#### Explore DALL-E features and capabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=0)** - [Narrator] Blend the name of the famous surrealist artist Salvador Dali and Pixar's animated character WALL-E and you have DALL-E.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=10)** DALL-E is an AI model developed by OpenAI that generates images from text descriptions.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=17)** This advanced tool uses deep learning techniques to understand and interpret text prompts, creating detailed and creative images based on those prompts.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=29)** It's known for its ability to generate highly realistic images to imaginative visuals, including fantastical, surreal compositions that combine unrelated elements in novel ways.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=45)** What's exciting is that image generation has greatly improved from previous versions.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=52)** There are enhanced resolution options with images that range from 1024 by 1024 to 1792 by 1024 pixels, which means sharper, more detailed images, opening new avenues for graphic designers and digital artists.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=73)** HD options have the ability to produce sharper, more vibrant images, excelling especially in intricate details like text and facial features.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=86)** There are also style options that are natural or vivid.
>
> **[1:31](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=91)** Vivid causes the model to generate hyper-real and dramatic images.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=96)** Natural causes the model to produce more natural images.
>
> **[1:42](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=102)** What's most exciting is that the images you generate with DALL-E are yours to use, and you don't need OpenAI's permission to reprint, sell, or merchandise them.
>
> **[1:56](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=116)** And OpenAI has implemented steps to prevent the generation of images that are considered harmful, focusing on safety.
>
> **[2:05](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=125)** Now that you understand the features and capabilities of DALL-E, let's review the different ways you can access it.

> [!info]- Semantic Content
>
> **Env Vars:** dall (4), wall (1)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Gain access to DALL-E
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=0)** - [Narrator] You will not believe how easy it is to access DALL-E to generate images.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=7)** You can access Dolly using ChatGPT Plus and Enterprise services via the OpenAI API, which is the method we'll use in this course and via the OpenAI Labs environment.
>
> **[0:21](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=21)** Let's review each option together.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=25)** DALL-E is built natively on ChatGPT, allowing users who subscribe to ChatGPT Plus or Enterprise services to access it through these platforms easily.
>
> **[0:38](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=38)** This access is typically more user-friendly and geared toward non-developers, allowing for a more interactive experience with DALL-E through conversational interfaces.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=52)** The primary way to access DALL-E is through the OpenAI API, specifically the Images API.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=60)** Developers and software engineers can integrate this API into their applications, allowing them to use DALL-E's image generation capabilities programmatically.
>
> **[1:11](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=71)** This method requires an API key and follows the standard procedures for using web APIs.
>
> **[1:19](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=79)** OpenAI offers a Labs environment where users can experiment with DALL-E.
>
> **[1:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=85)** This is a web-based tool that allows for easy experimentation without the need for coding.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=92)** Each of these access methods caters to different user groups from developers requiring deep technical integration to casual users interested in exploring DALL-E's capabilities in a more interactive and straightforward manner.
>
> **[1:49](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=109)** Our primary means to access DALL-E in this course will be the OpenAI API, using the Python SDK, or Postman.
>
> **[1:59](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=119)** Now that you understand the different ways to access DALL-E, let's discuss crafting effective prompts so that you can truly harness its power.

> [!info]- Semantic Content
>
> **Env Vars:** dall (9), api (6), sdk (1)
> **Code Keywords:** let (2)
> **CLI Commands:** python (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Using DALL-E in the Real World

> [↑ Back to Table of Contents](#table-of-contents)

#### Craft effective image prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=0)** - [Instructor] Creating effective prompts for DALL-E is both an art and a science.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=6)** Let's discuss how to construct prompts that effectively communicate your vision to DALL-E, helping it to produce the most accurate and creative results possible.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=17)** Precision is key when constructing prompts.
>
> **[0:21](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=21)** Specifying the color, the mood, the style and the setting can dramatically improve the output of DALL-E.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=31)** For instance, a prompt like a sunflower in a vase is broad and can result in various images.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=41)** In contrast, a large sunflower with bright yellow petals in a tall, blue ceramic vase, on a wooden table against a white background in the style of Salvador Dali provides a much clearer and more detailed description.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=60)** I've just described the art of prompt engineering, refining a prompt to produce the best results.
>
> **[1:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=67)** There is a feature of DALL-E called prompt rewriting so that you don't have to become an expert prompt engineer to produce the best results.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=77)** Prompt rewriting optimizes your original text prompt before passing it to DALL-E, because providing detailed prompts gives significantly better results.
>
> **[1:29](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=89)** In this example, your original prompt could be a cruise ship, whereas the rewriting feature will update your prompt to be "Visualize a detailed and vibrant image of a magnificent cruise ship" and so on.
>
> **[1:47](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=107)** I'm not going to read the entire prompt, but you can see that the rewritten prompt provides a lot more context and specificity.
>
> **[1:57](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=117)** Here is the beautiful image produced from that rewritten prompt.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=123)** Prompt rewriting aligns with open AI moderation tools within DALL-E to ensure safety and adherence to ethical guidelines.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=133)** It's important to understand that certain words or concepts might trigger these moderation tools, leading to altered or rejected prompts.
>
> **[2:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=145)** Now that you understand the process of crafting effective prompts, let's look at real-world applications of image generation.

> [!info]- Semantic Content
>
> **Env Vars:** dall (6)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Use image generation in the real world
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=0)** - [Instructor] Are you ready to learn how to apply image generation in the real world?
>
> **[0:05](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=5)** Let's get started.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=7)** We'll explore real world examples and practical use cases showcasing images generated by DALL-E.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=15)** We'll look at graphic design and artwork creation, advertising and marketing, entertainment and media, web and UI design, and research and data visualization.
>
> **[0:30](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=30)** Artists and graphic designers can use DALL-E to quickly generate initial concepts, drafts, or even complete pieces of artwork based on specific themes or ideas.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=45)** In this prompt, "Generate an image of a futuristic, eco-friendly cityscape at twilight, blending cyberpunk style with natural elements," produces this image.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=59)** Marketing teams can leverage DALL-E to create unique and eye-catching visuals for advertising campaigns, social media posts, and other marketing materials tailored to specific products or themes.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=75)** This prompt, "Create an image for a high-tech running shoe campaign, set in a city park at dawn," produces this image.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=86)** DALL-E can be used in the entertainment industry for storyboarding, character design, and generating backgrounds or scenes for movies, video games, and animations.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=99)** This prompt, "Generate a fantasy adventure scene in an enchanted dusk forest with towering trees and bioluminescent flora," produces this image.
>
> **[1:54](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=114)** Web and UI designers can use DALL-E to generate images and icons tailored to specific themes or user interface requirements.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=126)** This prompt, "Create minimalist icons for a financial web app, covering budgeting, savings, investments, and analytics," produces this image.
>
> **[2:19](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=139)** Researchers can use DALL-E to generate visual representations of data, abstract concepts, or theoretical models.
>
> **[2:29](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=149)** This prompt, "Design an infographic on quantum computing, visually contrasting abstract theories with practical components," produces this image.
>
> **[2:41](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=161)** I told you earlier that what you create with DALL-E is only limited to your imagination.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=170)** Now that you know how to apply image generation in the real world, let's explore the Images API.

> [!info]- Semantic Content
>
> **Env Vars:** dall (7), api (1)
> **Code Keywords:** let (2), abstract (2), interface (1)
> **Speakers:** - [instructor] (1)


### 3. Generate Images via the Images API

> [↑ Back to Table of Contents](#table-of-contents)

#### Explore the Images API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=0)** - [Instructor] Let's talk about the most popular way to access DALL-E, through the open AI API.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=7)** Developers and software engineers can integrate the images API into their applications, allowing them to programmatically use DALL-E's image generation capabilities.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=18)** Let's go into the technical aspects of the API, including how to make requests and handle responses.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=27)** The Generation API endpoint creates an image based on a text prompt.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=32)** Here is a simple request to the model.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=36)** Let's look at each parameter, model, style, quality, prompt, n, size, response_format, and user, in more detail.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=49)** As a reminder, this is the image produced by the prompt that you just saw.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=56)** Let's start with the Model parameter.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=58)** Model indicates the model you want to use for the image generation, DALL-E-2, or in our example, DALL-E-3.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=68)** The default if left blank is DALL-E-2.
>
> **[1:12](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=72)** The style parameter.
>
> **[1:14](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=74)** It represents the style of the generated image, either natural or vivid.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=81)** Vivid causes the model to generate hyper real and dramatic images.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=86)** Natural, causes the model to produce more natural images, the default is vivid.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=93)** Quality.
>
> **[1:35](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=95)** The quality parameter indicates the quality of the image that will be generated, standard or HD, for high definition.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=105)** HD creates images with finer details and greater consistency across the image.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=112)** The default is standard.
>
> **[1:55](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=115)** Next, the prompt parameter.
>
> **[1:58](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=118)** The prompt is the text description of the desired image.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=123)** This field is required of course.
>
> **[2:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=127)** Next, we have the n Parameter.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=129)** This is the number of images to generate.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=133)** If you're using DALL-E-3 for your model, only n equals one is supported.
>
> **[2:21](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=141)** The Size Parameter, represents the size of the generated image must be 1024 by 1024, 1792 by 1024, or 1024 by 1792 for DALL-E-3 models.
>
> **[2:38](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=158)** The response format is the format in which the generated image or images are returned.
>
> **[2:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=165)** The options are URL or base 64 JSON.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=170)** The default is URL, which returns a URL to the image generated.
>
> **[2:55](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=175)** The URL or URLs from the API will remain valid for only one hour, meaning after they expire, you can no longer access the image.
>
> **[3:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=187)** User is a unique identifier representing your end user, which will help open AI to monitor and detect abuse.
>
> **[3:17](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=197)** Before launching your product, you'll need to include end user IDs with each request.
>
> **[3:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=205)** Now, let's talk about the response.
>
> **[3:27](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=207)** An image object is returned as the response, and this is a look at an example image object.
>
> **[3:35](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=215)** Now, based on the response format of the input parameter, either a URL to the image will be returned, or a base 64 encoded JSON format for the image will be returned, which you'll need to convert to a viewable format.
>
> **[3:51](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=231)** The next parameter is the revised prompt, which is the rewritten prompt used to generate the image.
>
> **[3:58](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=238)** Remember when I told you about DALL-E's prompt rewriting feature?
>
> **[4:02](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=242)** Well, this is it in action.
>
> **[4:04](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=244)** The prompt sent to the model is this revised version, not our original version.
>
> **[4:10](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=250)** Again, this feature produces better results.
>
> **[4:14](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=254)** The images API is straightforward and easy to use.
>
> **[4:20](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=260)** Now that you understand how to use the images, API, let's talk about pricing.

> [!info]- Semantic Content
>
> **Env Vars:** dall (8), api (7), url (5), json (2)
> **Code Keywords:** let (6)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** response_format (1)
> **Speakers:** - [instructor] (1)

#### Estimate image pricing
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=0)** - [Instructor] You've seen the magic of DALL-E, but how much will it cost you?
>
> **[0:06](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=6)** Understanding the cost of using the Images API is an essential aspect of accurately estimating the budget cost of your projects.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=16)** The API usage is offered on a pay as you go basis and is billed separately from the Labs environment.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=24)** Credits granted or purchased on labs.[openai.com](https://openai.com) do not apply to the Images API.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=33)** Let's look at the pricing for DALL-E 3.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=36)** What's important to note for pricing is the difference between standard and HD images, and how the generated size or resolution impacts the price.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=48)** For this course, I've used HD quality and 1024x1024 for the resolution, which means each picture lands at around 8 cents.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=60)** For large volume discounts greater than $5,000 a month, contact OpenAI sales.
>
> **[1:09](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=69)** Regardless of whether an image was generated through a free or paid credit, you still own the images you create.
>
> **[1:19](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=79)** Now that you understand how pricing works, let's see image generation in action.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), dall (2)
> **Code Keywords:** let (2)
> **URLs:** [openai.com](https://openai.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### See image generation in action
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=0)** - [Instructor] Are you ready to see the Images API in action?
>
> **[0:04](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=4)** Let's jump into our Python code example found in this Jupyter Notebook.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=10)** The first step is to generate an API key to authenticate to the API, and then configure your application code to use it.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=18)** Before generating a key, you'll need to sign up for an OpenAI account, which you can do by going to [openai.com](https://openai.com), shown here, and clicking Sign up or Log in if you already have an account.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=31)** You want to treat your API key the way you would treat a password and keep it secure.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=37)** Now, let's navigate back to our Jupyter Notebook.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=41)** We use OpenAI's Python SDK for our code example to interact with the Images API.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=48)** The first step is to install the necessary libraries.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=52)** I've installed these libraries already, so I won't run this code again.
>
> **[0:57](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=57)** Scroll down to cell one.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=60)** In this cell, we import the OS and the OpenAI modules or libraries.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=66)** The OpenAI module provides access to the OpenAI API, and the OS module provides access to operating system dependent functionality.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=77)** We'll use it to access the API key stored as an environment variable and an external environment file.
>
> **[1:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=85)** Let's scroll down.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=87)** Here on line four, we're loading the environment file.
>
> **[1:30](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=90)** Then, we read the environment variable and initialize the client with it here in cell two on line one.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=98)** This will be used to authenticate to the API.
>
> **[1:42](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=102)** Let's scroll down to this helper function.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=105)** Here, I've designed the code to be modular with reusable code defined in functions.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=112)** The generate image function is used to call the image's API shown here on line five.
>
> **[2:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=120)** We are passing in the model, the style, the quality, the prompt and the size, and the function returns the response here on line 13 from the API call.
>
> **[2:14](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=134)** Now, let's look at our very first example.
>
> **[2:19](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=139)** Here on line three, we are calling the generate image function and passing in this prompt.
>
> **[2:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=145)** The prompt is to create an image of "an enchanting outdoor night scene, showcasing a sleek, black marble chessboard set on an antique wooden table.
>
> **[2:37](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=157)** Each chess piece is intricately carved from clear ice, glistening under the celestial glow of a star-filled sky with a full moon.
>
> **[2:48](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=168)** The surrounding environment is a serene, snow-covered landscape, softly illuminated by the night sky."
>
> **[2:55](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=175)** I cannot wait to see what this image is going to look like.
>
> **[2:59](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=179)** We are using the DALL-E 3 model.
>
> **[3:02](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=182)** We're passing in the style of natural.
>
> **[3:05](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=185)** We want the image to be HD or high definition, and the resolution or the size to be 1024 by 1024.
>
> **[3:15](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=195)** Now, let's execute this code.
>
> **[3:19](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=199)** It will take a moment for it to generate the image.
>
> **[3:22](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=202)** Notice here on line 12, I'm storing the URL in this image variable.
>
> **[3:28](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=208)** I'm then printing the image and it should show up inline, as well.
>
> **[3:34](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=214)** So, here is the generated image image. Ooh, I like it.
>
> **[3:40](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=220)** So, I'm seeing this image for the first time just like you are.
>
> **[3:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=225)** Now, let's look at example two where we use vivid and standard as the parameters that we pass in.
>
> **[3:54](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=234)** Notice the prompt is exactly the same, still using DALL-E, but like I said, we're using vivid this time and standard, the same size.
>
> **[4:05](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=245)** Let's execute this code to see what happens.
>
> **[4:10](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=250)** It will take a moment for it to run and generate this image.
>
> **[4:20](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=260)** So, this is vivid and standard.
>
> **[4:26](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=266)** I like it, but I think I like the other one better.
>
> **[4:30](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=270)** And now, let's look at the example of prompt rewriting.
>
> **[4:36](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=276)** The prompt that we are passing in this time is a very simple prompt, "a life-size queen chess piece in a garden" using DALL-E 3, natural, HD, 1024 by 1024.
>
> **[4:51](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=291)** Let's execute this code, and we'll give it a second to run.
>
> **[4:56](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=296)** I do want to point out this message here on line four, that the URLs will expire after an hour.
>
> **[5:04](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=304)** So, if you do generate an image with DALL-E, make sure you download it or save it before that hour is up.
>
> **[5:12](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=312)** So, let's look at this life-size queen chess piece in a garden.
>
> **[5:20](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=320)** Oh, I like how this turned out. What do you all think?
>
> **[5:25](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=325)** Now, next, what I wanted to show you, let's execute this code.
>
> **[5:30](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=330)** Remember, I taught you about prompt rewriting, and that's a feature of DALL-E where it takes your original prompt and it rewrites it so that the image produced is of a higher quality.
>
> **[5:45](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=345)** Remember, let me scroll back up.
>
> **[5:48](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=348)** Our original prompt was "a life-sized queen chess piece in a garden."
>
> **[5:53](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=353)** Our prompt was rewritten to this prompt, "a life-sized chess piece resembling a queen, gracefully carved from sleek and polished stone" and more.
>
> **[6:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=367)** I'm not going to read the entire prompt, but this is the prompt here that was used to generate this image that we see.
>
> **[6:17](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=377)** DALL-E's prompt rewriting feature really just attempts to optimize the prompt for you so that you don't need to be a prompt engineering expert.
>
> **[6:29](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=389)** Now that you've seen the Image API in action, let's recap what we've learned and review the next steps in your learning journey.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (4), module (2), pass (1)
> **Env Vars:** api (11), dall (6), sdk (1), url (1)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** scroll down (3)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **Tools:** jupyter (2)
> **Definitions:** is a  (2)
> **URLs:** [openai.com](https://openai.com) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Your DALL-E journey
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=0)** - [Instructor] Your DALL-E journey.
>
> **[0:03](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=3)** Congratulations on reaching the end of the course.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=7)** You should feel proud of what you've accomplished.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=10)** Thank you for going on this journey with me to generate images using DALL-E and the OpenAI API.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=18)** During our time together, you've learned all about the power of DALL-E and the images API to generate highly realistic and imaginative images from a text prompt.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=32)** If you haven't pulled down the code example, I encourage you to deepen your understanding and retain your newfound knowledge through hands-on exploration.
>
> **[0:42](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=42)** You can also continue learning by watching my other courses, "[[Building a Project with the ChatGPT API]]", "[[Artificial Intelligence Foundations- Machine Learning]]", and other courses in the OpenAI API series.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=59)** I've enjoyed our time together.
>
> **[1:01](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=61)** Please follow me on LinkedIn so that we can stay connected.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=65)** I enjoy speaking on the topic of AI and machine learning, so please consider me for your upcoming conference or event.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=73)** Now go and transform the world.
>
> **[1:16](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=76)** I'm Kesha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), dall (3)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kesha Williams]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-image-generation-with-dall-e-4558023)

## Skills Covered

- OpenAI API
- DALL-E
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Fine-Tuning]] | **6 of 10** | [[OpenAI API- Vision]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Fine-Tuning]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)