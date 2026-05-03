---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: build-an-image-captioning-tool-for-visually-impaired-users-with-gemini
url: "https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini"
duration_minutes: 67
duration: 1h 7m
level: Intermediate
updated: 5/29/2024
learners: 1938
skills:
  - Digital Accessibility
  - Artificial Intelligence (AI)
  - Computer Vision
  - Google Gemini
exercise_files: true
github: "https://github.com/LinkedInLearning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini-3864012"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHvLDVro1C27Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715978287117?e=2147483647&amp;v=beta&amp;t=CBDbKQ4y3RVI9bUIqjBK8D4RrPE71k8YjULhxmfyyPw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Build for Digital Accessibility]]'
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - '[[Accessible Layout for the Web]]'
  - '[[Building with Google Gemini Advanced and Ultra]]'
next_courses:
  - '[[Canva- Designing Engaging, Accessible Presentations]]'
  - null
path_nav: '[{"path":"Build for Digital Accessibility","position":7,"total":12,"prev":"Accessible Layout for the Web","next":"Canva- Designing Engaging, Accessible Presentations"},{"path":"A Developer''s Guide to Google Gemini","position":8,"total":8,"prev":"Building with Google Gemini Advanced and Ultra","next":null}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/artificial-intelligence
  - topic/software-development
  - skill/digital-accessibility
  - skill/artificial-intelligence-ai
  - skill/computer-vision
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20an%20Image%20Captioning%20Tool%20for%20Visually%20Impaired%20Users%20with%20Gemini.md)

![Build an Image Captioning Tool for Visually Impaired Users with Gemini](https://media.licdn.com/dms/image/v2/D560DAQHvLDVro1C27Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715978287117?e=2147483647&amp;v=beta&amp;t=CBDbKQ4y3RVI9bUIqjBK8D4RrPE71k8YjULhxmfyyPw)

# Build an Image Captioning Tool for Visually Impaired Users with Gemini

> When you’re designing for the web, it’s imperative that your designs are accessible to as many people as possible, and this includes visually impaired users. While there are many tools available to help you in this design task, artificial intelligence is making this easier than ever. In this course, software developer Fikayo Adepoju shows you how to use Google’s Gemini API to build an image captio

> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini) | 1h 7m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Image captioning with AI](#image-captioning-with-ai)
  - [What you should know](#what-you-should-know)
  - [Who this course is for](#who-this-course-is-for)
- [**1. Setting Up Access to Gemini API**](#1-setting-up-access-to-gemini-api) (4 videos)
  - [Understanding Gemini models](#understanding-gemini-models)
  - [Gemini pricing](#gemini-pricing)
  - [Signing up for an Google AI Studio account](#signing-up-for-an-google-ai-studio-account)
  - [Getting your API key](#getting-your-api-key)
- [**2. Building the Interface**](#2-building-the-interface) (5 videos)
  - [Cloning the seed project](#cloning-the-seed-project)
  - [Project code walkthrough](#project-code-walkthrough)
  - [Adding the image upload functionality](#adding-the-image-upload-functionality)
  - [Adding the prompt functionality](#adding-the-prompt-functionality)
  - [Writing the caption display](#writing-the-caption-display)
- [**3. Building the Backend: Connecting to Gemini**](#3-building-the-backend-connecting-to-gemini) (5 videos)
  - [Building out the Express.js API](#building-out-the-expressjs-api)
  - [Configuring the Generative AI SDK](#configuring-the-generative-ai-sdk)
  - [Adding routes](#adding-routes)
  - [Setting up file upload functionality](#setting-up-file-upload-functionality)
  - [Writing the prompt request and response](#writing-the-prompt-request-and-response)
- [**4. Bringing It All Together**](#4-bringing-it-all-together) (3 videos)
  - [Connecting the frontend to the API](#connecting-the-frontend-to-the-api)
  - [Adding a progress indicator](#adding-a-progress-indicator)
  - [Using the Web Speech API to read captions](#using-the-web-speech-api-to-read-captions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Image captioning with AI](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/image-captioning-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/image-captioning-with-ai?u=76281980&t=0)** Welcome to this course, where I'll be guiding you through the use of [[Google]]'s [[Gemini]] API in building an image caption generator that helps visually impaired users to better experience the web. In this course, you will be getting hands-on experience with the Gemini API by building an AI-powered application from start to finish. By the end of this course, not only will you understand the Gemini API, but you'll also be equipped with practical skills for building your own applications with the Gemini API. I am Fikayo Adepoju, a software developer and tech instructor with over 14 years experience developing scalable applications and teaching the next generation of developers. If you are ready to unlock the potential of Google's Gemini API, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5), [[Google]] (2)
> **Env Vars:** api (5)

#### [What you should know](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/what-you-should-know?u=76281980&t=0)** To take this course, there are a couple of skills you need to have under your belt. These skills are required for you to successfully follow along with this course. First is that you have to have some programming experience, and you are required to have at least a basic understanding of how to code with [[HTML]], CSS, and [[JavaScript]]. You also need to have spent some time working in an IDE, that's an integrated development environment, or at least a simple code editor. You can use any IDE you want, but for this course, I will be making use of the popular Visual Studio Code. Next, you need to have some familiarity with [[Version Control]] systems like [[Git]] and the use of a remote repository like [[GitHub]]. For the backend of our application, we will be making use of [[Node.js]]. However, you can still follow along and replicate the program in any of the backend languages supported by the [[Gemini]] API. If you need help learning any of the technologies mentioned, you can check out the [[LinkedIn]] Learning Library to get a ton of resources on these topics. Now that you know the requirements for taking this course, let's get started building our image captioning application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1), [[Version Control]] (1), [[Git]] (1), [[GitHub]] (1)
> **Env Vars:** ide (2), html (1), css (1), api (1)
> **Prerequisites:** you need to have (2), required to (1)
> **CLI Commands:** git (1), node (1)
> **Tools:** visual studio (1), github (1)
> **File Paths:** node.js (1)

#### [Who this course is for](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/who-this-course-is-for?u=76281980&t=0)** Who should take this course? If you have found your way to this course, this is the time to answer a couple of questions that will determine if this is the right course for you. Ready? Let's go. Are you a developer, development team, project manager, or engineering manager trying to learn how to add AI features to your application? Are you interested in [[Google]]'s [[Gemini]] models and the capabilities of its API, and want to learn how it can be integrated into your applications? Or are you just looking for a project-based course that teaches the implementation of [[Artificial Intelligence (AI)|artificial intelligence]] in software applications? If your answer to any of these questions is yes, then you're in the right place. This course will teach you everything you need to know about adding AI features to your software using the [[Google Gemini]] API. You will learn by doing, because this course takes a hands-on approach as we get to build an entire application that generates captions from images using AI from scratch. Sounds good? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Gemini]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** api (2)


### 1. Setting Up Access to Gemini API

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Gemini models](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/understanding-gemini-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/understanding-gemini-models?u=76281980&t=0)** What is [[Gemini]]? Gemini is a suit of [[Generative AI]] models that comes in different variations and versions. The variations are based on the model's capabilities, while the versions are based on how recent the model is. So first, let's look at the variations of models available in the Gemini suit. We'll be looking at the capabilities of each model variant, the input and output expected, and the token limitations around the prompts and responses. Sounds good? Let's begin. The first model we'll be looking at is the Gemini Pro model. This model is designed to take text as input and also produce text as output. Its capabilities include generating text based on a prompt. It can also undo multiturn conversational format, meaning that you can use it to build a chat application. The Gemini Pro model can also undo zero-shots, one-shot, or few-shot tasks. This means that you can prompt the model with no examples, one example, or a few examples of what the response should look like. The Gemini Pro model can take up to 30,720 [[Tokens]] as input in a single prompt. However, the response is currently limited to 2,048 tokens. It also has an API rate limit of 60 requests per minute. The next model we'll be discussing is the Gemini Pro Vision model.
>
> **[1:37](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/understanding-gemini-models?u=76281980&t=97)** This model can undo multimodal inputs, meaning that it can take both images and text as input. However, as currently trained, it can only return textual responses. Do note that while this model is more powerful than the previous one, with its multimodal capabilities, it cannot handle multiturn conversational formats at the moment. What this means is that unlike the Gemini Pro model, this model cannot be used to build a chat application. The Gemini Pro Vision model currently supports an input token limit of 12,288 tokens, which is less than the Gemini Pro model, but has an input token cap of 4,096 tokens, double that of the previous model. Its API rate limit is also set at 60 requests per minute. Next, we have the embedding model. Like the Gemini Pro model, the embedding model is limited to text-based inputs and responses, and it's able to generate embeddings for the input text. It is optimized for creating embeddings of up to 2,048 tokens, and its API rate limit is set at 1,500 requests per minute. Lastly, we have the AQA model. AQA stands for attributed question answering. Meaning that this model has been trained to answer questions based on the information it is trained with.
>
> **[3:13](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/understanding-gemini-models?u=76281980&t=193)** It also has the ability to estimate the accuracy of its answers. It is like a super librarian who can find information from many sources and tell you how sure they are that the information is right. So those are your Gemini models. And based on our goal in this course, you may have guessed the model we'll be going with. Yep. We'll be making use of the Gemini Pro Vision model. This is because for us to create a tool that generates captions for images, we need to provide an image as input. The expected caption is also text-based. And of all the models we've looked at, the Gemini Pro Vision model checks all the boxes on our list of requirements. In the next video, we'll take a look at how these models are currently priced. This will help us plan our usage accordingly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (14), [[Tokens]] (5), [[Generative AI]] (1)
> **Env Vars:** api (3), aqa (2)
> **Definitions:** is a  (1), means that (1), stands for (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)

#### [Gemini pricing](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/gemini-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/gemini-pricing?u=76281980&t=0)** In this video, we'll be looking at how the usage of the [[Gemini]] API is priced. Gemini follows a usage-based pricing model, so you are charged based on what you use. Currently, pricing details for the preview Gemini 1.5 Pro model is displayed. However, this model is currently in preview mode, meaning that it is not currently completely available for public use. To access the currently available Gemini models, click the model dropdown to switch to Gemini 1.0 Pro. As at the time of this recording, Gemini offers two pricing models; the free-of-charge or free model and the pay-as-you-go model. On the free plan, which is the one we'll be making use of in this course, every usage of the API is free. You are not charged for the size of the input or output. However, model token limits for input prompts and output responses still apply. Currently, you are limited to 15 requests per minute, which should not contain more than 32,000 [[Tokens]]. The daily limit is also currently set at 1,500 requests per day. If you want more requests and more tokens, you will need to go with the pay-as-you-go model. One important thing to note is that the details on this page change frequently.
>
> **[1:32](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/gemini-pricing?u=76281980&t=92)** As a matter of fact, while I was recording this course, these details changed up to three times. So I advise that you check this page often to stay up-to-date on the usage limits and pricing details. The pay-as-you-go model allows you to go beyond the 15 request per minute and token boundaries placed on the free plan. You can make up to 360 requests per minute and 30,000 requests in a single day. The maximum amount of tokens is also increased from 32,000 to 120,000 in the pay-as-you-go model. Your input and output is also charged. The charge for inputs is currently set at $0.5 per million tokens. For outputs, which is currently only text-based, the price is set at $1.5 per million tokens. As at the time of recording this course, the pay-as-you-go model is currently not available in the [[Google]] AI Studio. However, Google promises that this payment plan will be coming soon. I recently got an email that this pricing plan is going to be available on the 2nd of May, 2024, so that is the date you might want to look out for. Most likely, by the time you are watching this course, this payment option would already be available. But for our project in this course and for most simple tasks, the free plan is good enough. And we can proceed with signing up for
>
> **[3:08](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/gemini-pricing?u=76281980&t=188)** a Google AI Studio account in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (6), [[Tokens]] (5), [[Google]] (3)
> **Versions:** 1.5 (2), 1.0 (1), 0.5 (1)
> **Env Vars:** api (2)
> **UI Navigation:** dropdown (1), switch to (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)

#### [Signing up for an Google AI Studio account](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/signing-up-for-an-google-ai-studio-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/signing-up-for-an-google-ai-studio-account?u=76281980&t=0)** To begin using the [[Gemini]] models through the Gemini API, we need to get an API key. This API key will give us authenticated access to the Gemini API. In order to get this key, we will need to open an account on the [[Google]] AI Studio. The Google AI Studio is a tool for working with different Google AI models. You can try out different generative models to see how they work, and also test how well [[Generative AI]] models perform on different tasks. Once you generate an API key from the Google AI Studio, we can then use it in our code to make calls to the Gemini API. To open a new account on the Google AI Studio, if you don't already have one, head over to aistudio.[google.com](https://google.com).
>
> **[0:54](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/signing-up-for-an-google-ai-studio-account?u=76281980&t=54)** Once you're there, you might first need to sign in with your Google account. That is your Gmail account. After signup, you will then be welcomed into Google AI Studio. Here, you can play around with the chat interface that uses the Gemini models under the hood. You can switch which Gemini model you want to use. For example, we have the 1.5 Pro, which is in preview, and we have the 1.0 Pro 001. You can also come here to the side menu, create a new chat; freeform prompt, a structured prompt, and also what we're going to be doing in the next video, which is creating an API key.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[Gemini]] (6), [[Generative AI]] (1)
> **Env Vars:** api (7)
> **Versions:** 1.5 (1), 1.0 (1)
> **CLI Commands:** make (1)
> **URLs:** [google.com](https://google.com) (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Getting your API key](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/getting-your-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/getting-your-api-key?u=76281980&t=0)** In the previous video, we signed into our [[Google]] AI Studio account. This is where we'll be creating our API key for authenticated access to the [[Gemini]] API. So let's go right ahead and create our first API key. At the top left-hand corner of the dashboard on the side menu, you will see a get API key link. Click on the link to access your API keys page. This is I have unsaved changes. That must have been from playing around the model version. I'm just going to click "Okay" so we can go to the API keys page. The API keys page is where you'll be able to create a new API key and also manage all the ones that you have created. To create a new API key, click the "Create API key" button on the page. That's this button. First, I'm being prompted with some Terms and Conditions dialog box. I'm just going to click "Got it." And then I get a dialog where I can create a new API key. Here, I have two options to create an API key. I can either create an API key in a new project, or create it in one of my existing [[Google Cloud Platform (GCP)|Google Cloud]] projects. Now, if I create the API key in a new project, that project would automatically be available inside my [[Google Cloud Platform (GCP)|Google Cloud Platform]] account. So if you already have a project you want to use in your Google Cloud Platform account, you can click into the search box and search that project.
>
> **[1:32](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/getting-your-api-key?u=76281980&t=92)** As I have a couple of projects here that I can choose from. But let us create a new project for this demo. Let's click "Create API key in a new project." And as you can see, Google AI Studio goes to work, and it's already generating our API key. And now, an API key has been generated for us. Do ensure that you copy this key and store it in a secure place. Do not expose this key in public. I will be deleting this key right after filming this course. To copy the key, simply click the "Copy" button. Once copied, you can then close the dialog box. Now, this scheme might not automatically show up on your API keys page. However, if you refresh the page, now the key is displayed in this API keys table. This table shows a truncated version of the key, the project it was created in, this was the project that was automatically generated for us inside Google Cloud Platform, when the key was created, and a button to delete the key. You can also click the truncated version of the key to view the key any time you want to copy it. Now that we have our API key in hand, we can now begin building our image captioning project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Gemini]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **Env Vars:** api (20)
> **UI Navigation:** click on (1), go to (1)
> **Cross-References:** previous video (1)
> **Best Practices:** the key is (1)


### 2. Building the Interface

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloning the seed project](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/cloning-the-seed-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/cloning-the-seed-project?u=76281980&t=0)** In this video, we will be cloning the seed project for our image captioning tool. This project will provide a great starting point for what we'll be building in this course. The project will provide a simple user interface for our application, thus allowing us to focus on development using the [[Gemini]] API. Displayed in our browser is the [[GitHub]] page for our project. The completed project is on the main branch, while the seed project is on the base project's branch. We will be cloning this base-project branch as our seed project. So let's go ahead and grab the link for this project. To download the project from GitHub, first, we need to ensure that [[Git]] is installed on our system. Git is a simple versioning tool for managing different versions of your project and also collaborating through remote repositories. If you don't have Git installed, you can head over to their website here at [gitscm.com](https://gitscm.com). Click the downloads link on the home page, and download the required software for your specific operating system. Once you have installed Git, you can confirm that it is running on your system by running the command git -v. This will print out the version of Git that is currently running on your system. With Git now installed on our system, let's run the following command to clone the seed project. Our command here tells Git to clone this project, clone the base-project branch, and clone just
>
> **[1:35](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/cloning-the-seed-project?u=76281980&t=95)** that single branch. And lastly, we provided it the URL to our seed project. Make sure that you run this project at the location on your computer where you want the project to live. Now, let's hit "Enter" to clone our project. Once the cloning process is done, you will now see a new folder in your current working directory. Now, this is a very long folder name. So for convenience, I'll just be renaming this to gemini-image-captioning. Yep. That's more compact. In the next video, we'll be working through the project files and the base code in this folder to get familiar with what we just cloned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (8), [[Gemini]] (2), [[GitHub]] (2)
> **CLI Commands:** git (8), make (1)
> **Env Vars:** api (1), url (1)
> **Tools:** github (2)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (2)
> **URLs:** [gitscm.com](https://gitscm.com) (1)
> **Cross-References:** in the next (1)

#### [Project code walkthrough](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/project-code-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/project-code-walkthrough?u=76281980&t=0)** Now that we have the seed project cloned into our system, let's go through it and explore what we have. I have opened up the project in Visual Studio Code. However, feel free to open it up in any code editor of your choice. I just prefer VS Code based on my familiarity with it. Here in VS Code, we can see our folder structure on the left. Currently, the project only contains one folder with the name "frontend." This is where all our base code currently lives, and we will be adding more to this through the cost of building out this project. There is also a gitignore file which, as expected, ignores all the files and folders we do not wish to upload to our remote repository. If you open this up, you will see some files and folders that have been proactively ignored. These are files and folders we'll be creating later on in this project. Now, back to the frontend folder. If you open up this folder, you will see that it contains two files; an index.[[HTML]] file and a script.js file. These will contain the entire front end of our application, as I have made sure to keep things simple. Before we look at the code within these files, let's run our frontend to see what we are working with. Here on our terminal, we'll be using the utility [[Node.js]] module HTTP server to run our frontend. This model spins up an ad hoc server that serves our frontend files.
>
> **[1:35](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/project-code-walkthrough?u=76281980&t=95)** To spin up our server, at the root of the project, run the following command: npx http-server and the path to our frontend, which is dot forward slash for the relative path and the folder name, frontend. Let's hit "Enter." And boom, our front end is running. That was pretty fast. Now, you may be prompted to install the HTTP server module if you don't already have it installed, so please take note. Now, this command will spin up a server listing on Port 8080 by default. And from there, we can access our application. If Port 8080 is already in use on your system, the HTTP server module provides options for you to specify a different port. Now, let's go to our browser and access the frontend application. Back in our browser, let's open a new tab, and let's enter localhost, colon, and our port, which is 8080, and hit "Enter." And as you can see, our index.html home page loads up. Let's go through all the page elements one by one. First, we have the image preview section. Here, you can see the selected image before it is sent to [[Gemini]] for captioning. Currently, this displays a placeholder image, which will be replaced by the image that is selected. Just below that, we have the file upload widget.
>
> **[3:10](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/project-code-walkthrough?u=76281980&t=190)** We'll be adding logic that loads the selected image in the preview using this button. Next, we have the button that the user is going to click to send the image to the backend application to process the image captioning. And that's all for everything here on the left. On the right-hand side, we have the container where the caption will be displayed. And below the caption display window, we have a button that a user can click to hear the caption read out loud. To understand how this app will work, let's go through the workflow of the image captioning process. First, a user selects an image that they want to generate a caption for using the upload button. The image displays in the preview to confirm that the correct image was selected. The user then clicks the "Submit" button, which sends a request to the backend along with the image selected. Once the caption generating process is done, the result is then displayed in the container on the right-hand side. Pretty straightforward, right? Now, let's take a look at the code behind this user interface. Do note that these are currently DOM widgets, as no logic has been added to them yet. The workflow I just defined is what we are going to be writing code for in the following videos. Back here in VS Code, I have opened the index.html file. Let's take it from the top and walk through the code
>
> **[4:46](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/project-code-walkthrough?u=76281980&t=286)** down to the bottom. The file starts with some boilerplate HTML code. First, we have the DOCTYPE, the lang, and add definitions. The page has been given a title of Image Captioning Tool, which you can change to any other title you prefer. Next, we have imported the bootstrap CSS library for some standard styling. We have also imported Axios to make HTTP requests to our backend. Below the Axios' import, we have a small CSS script for some size definitions and some content overflow goals for our caption display section. If we scroll down to the body tag, we can see two container divs that define the left and right sections of our application. In the left section, we have an image tag for our preview, we have an input tag to upload our file, and we have a button to send our image captioning requests to the backend. All these elements have been assigned IDs that we'll be making use of later on to add some [[JavaScript]] logic. On the right-hand side container div, let's open that up, we have a child div. This div will hold the caption text that is returned from the backend server. A functionality we'll also be developing later on in this course. Below it, we have a button that will trigger our text to speech functionality.
>
> **[6:19](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/project-code-walkthrough?u=76281980&t=379)** The caption display and the speech buttons have also been assigned IDs that will allow us to add functionalities to them using JavaScript later on in this course. And lastly, just before the closing body tag, we have imported a script.js file. This file is also located at the root of our project. If we open this file, you will see that it is currently empty. This is where we'll be writing all our JavaScript code to add all the required front-end functionalities to our application. And we'll begin by adding the functionality to select an image in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[JavaScript]] (3), [[Node.js]] (1), [[Gemini]] (1)
> **Env Vars:** http (4), css (2), dom (1), html (1), doctype (1)
> **File Paths:** index.html (3), script.js (2), node.js (1)
> **Tools:** vs code (3), visual studio (1), terminal (1)
> **CLI Commands:** node (1), npx (1), make (1)
> **Ports:** port
8080 (1), port 8080 (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Cross-References:** in the next (1)

#### [Adding the image upload functionality](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-image-upload-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-image-upload-functionality?u=76281980&t=0)** In this video, we're going to code the first functionality to be added to our front-end project. We'll be using [[JavaScript]] to ensure that when the user selects an image, the image will be displayed in the preview section, thus over here. To achieve this, we'll be adding an event to our file input element, that is this button, this widget, and this listener will watch and capture any change to the value of the file input. Once the change is detected when a user selects a file, we will then capture the image data in order to display it in the preview section. Sounds good? Let's get started. So back in our code editor, we'll be writing this functionality inside our script.js file that resides in the root of our frontend folder. The first thing we're going to do is to attach an event listener to our file input element and pull this to the side. That's this, our file input element, and it has an ID of image input. So we're going to be adding an event listener to this. So let's copy this ID, go into script.js, and here I will say, document.getElementById, I will give it our ID "imageInput." Then I will add an event listener by saying .addEventListener, and the event we want to listen on is the change event, because we want to know if the user has selected a file, if anything has changed in the state of the input element.
>
> **[1:35](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-image-upload-functionality?u=76281980&t=95)** So we look at the change event and then we supply this a callback function. Say function -- let me wrap my view so that we don't have the horizontal scrolls. Good. So function, and we just open up a function. This is the function that will be called when a change event has occurred on this image input element. That's the file element with an ID of image input. Next, inside the handler, let us get the image preview and load the selected image into it. First, we store the image preview container in a variable, so we select imagePreview equal document.getElementById, I will give this the ID of the imagePreview. Let's go and grab that. Go to index.[[HTML]], imagePreview is here. Let's grab the ID. So copy that and come back to script.js. And we give this call to getElementById the ID of the imagePreview. Then we check if a file has indeed been selected and load it in the preview. Yeah. We have an handle on our file, so we'll check if we have a file. Then we say imagePreview.src should be set to URL.createObjectURL.
>
> **[3:12](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-image-upload-functionality?u=76281980&t=192)** I'm passing out a file. And if not, let's just simply maintain our placeholder image. That'll be imagePreview. In this else block, we have made sure that the placeholder is returned, just in case the user did not select any image and simply closed the file dialog. And with that, we have completed our image preview functionality. Let's save this file and take our application for a spin in our browser. Back in our browser, first, refresh the page to ensure that the changes that you've just made have kicked in. Once the page is fully refreshed, let's select an image.
>
> **[4:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-image-upload-functionality?u=76281980&t=240)** As you can see, we now have our image preview displaying the image we just selected. Pretty neat, isn't it? In the next video, we are going to write the functionality that will send this image to the back end in order to generate our caption using the [[Gemini]] API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[HTML]] (1), [[Gemini]] (1)
> **Code Identifiers:** imagepreview (6), getelementbyid (3), imageinput (1), addeventlistener (1), createobjecturl (1)
> **File Paths:** script.js (3), index.html (1)
> **Env Vars:** url (1), api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### [Adding the prompt functionality](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-prompt-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-prompt-functionality?u=76281980&t=0)** In the previous video, we were able to select and capture our image to preview. In this video, we are going to be writing code that will send our image data to the back end in order to generate our caption. And just like before, we'll also be writing all that [[JavaScript]] code inside our script.js file. To start things off, we'll be writing a function that gets our image data and sends it to our backend, which we'll be building in the next chapter. So inside script.js, let's create the scaffold for a new function with the name getCaptionForImage. This function will take in a single argument, which is our image. Let's call that imageFile. And because this function will be making an API request, let's make it an async function. So I'm just going to come at the beginning here and say async function. Let's scroll down a little bit to bring this function to the center stage. Now, this function is going to be getting our caption from the back end API, and I might need that caption in some other functions. So I'm just going to come up here and just declare the global variable and call it caption. We'll be storing our generated caption inside this caption variable. Let's scroll back down to our getCaptionForImage function. Inside this function in order to send our image over the wire, let's create a new FormData object and append our image to it.
>
> **[1:37](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-prompt-functionality?u=76281980&t=97)** On this line where we're attaching our image data to this formData, we have given our image data the name file. This is the name that we're going to be using to access the file on the back end. Now that we have our image prepared for flight, we'll be making a call to the back end server with the image as our payload. First, let's grab the next lines of code in a try-catch block so as to undo errors effectively. Perfect. To make our remote call, we will be making use of the Axios library that was included in our index.[[HTML]] file. Also, our backend has not been built yet. So for now, I'll just be using the placeholder endpoint for the remote call. So let response. Next, we'll be adding our formData as payload and setting the content-type header to multipath formData in order to communicate to the server that we are sending over a file. So we'll say formData, and let us set our headers. With our request setup, let's now undo the response. We will be checking for your response and capturing the generated caption returned in our caption variable. Good. Now, you may have noticed that I have just introduced a new function called display function.
>
> **[3:12](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-prompt-functionality?u=76281980&t=192)** This function will be responsible for what is displayed in our caption window. Don't worry, we're going to be writing this function later on in this course. But to wrap up our getCaptionForImage function, let's also take care of the catch block. Oh, I forgot to put an arrow argument here. Okay, good. Good. Now, what we've done here in the cut block is to simply use the displayCaption method to display the error message returned by our server. And with that, we now have in place the function that will call our backend endpoint and display the caption returned. However, this function still needs to be invoked by our submit button. So let's add a click event to our submit button that will fire our getCaptionForImage function. I'll be doing that just above our function. So we say document.getElementById, then we'll pass in the ID of our submit button. Let's go and grab that in our index.html file. Scroll down, submit button, and grab the ID. Add an event handler. We're listening for the click event. Passing our handler function. And now inside our handler function, let's get our image input widget in order to process
>
> **[4:46](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-prompt-functionality?u=76281980&t=286)** the image data. So we say const imageInput equals,
>
> **[4:57](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-the-prompt-functionality?u=76281980&t=297)** and next we check if we have a file selected and then access the file data. So we say if imageInput.files.length is greater than zero. And if that's the case, we say const file equals imageInput.files and we'll pick our image. And finally, we give our file to the getCaptionForImage function to process our caption generation. Awesome. Now, we have been able to successfully write the functionality that takes our selected image and sends it to our back end for caption generation. In the next video, we'll be writing our displayCaption function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[JavaScript]] (1)
> **Code Identifiers:** getcaptionforimage (5), formdata (4), imageinput (3), displaycaption (2), imagefile (1)
> **File Paths:** script.js (2), index.html (2)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **UI Navigation:** scroll down (2)
> **Analogies:** just like (1)

#### [Writing the caption display](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-caption-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-caption-display?u=76281980&t=0)** In this video, we'll be wrapping up this chapter by writing our displayCaption function. This will be the last functionality we'll be writing in our front end before we start building our backend. Later on, we'll come back and integrate this front end with the backend that we've built and also add a few more features. So without wasting time, let's write our displayCaption function. Just underneath the getCaptionForImage function, let's scaffold our new function. This function takes in a single argument, which is the caption or any other message to be displayed in the caption window, for example, server error messages. Next, let's get a hold on our caption display paragraph inside the caption container. First, let's go into index.[[HTML]] to grab the ID of the caption paragraph. Scroll down, imageCaption, copy, and go back to script.js.
>
> **[1:03](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-caption-display?u=76281980&t=63)** Now that we have access to our imageCaption paragraph, let's set our caption arguments to be displayed within the paragraph. Perfect. Our displayCaption function is now ready to display the generated caption inside our caption container. In the next section, we will start building our backend application. This backend app will receive our request from the front end and send it to the [[Gemini]] API for caption generation. See you in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Gemini]] (1)
> **Code Identifiers:** displaycaption (3), imagecaption (2), getcaptionforimage (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** index.html (1), script.js (1)
> **Env Vars:** api (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)


### 3. Building the Backend: Connecting to Gemini

[↑ Back to Table of Contents](#table-of-contents)

#### [Building out the Express.js API](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/building-out-the-express-js-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/building-out-the-express-js-api?u=76281980&t=0)** In this section, we're going to be building the backend API that will process our image caption generation. This API will simply serve as a middleman between our client and the [[Gemini]] API that exposes the AI model that will be performing the actual caption generation operation. In this video, we'll begin development by kickstarting the [[Node.js]] application. In the project folder, just beside the frontend folder, create a new folder for the API with the name "backend." Now that we've created a folder for our back end, let's head over to our terminal to set up the project. Now here in our terminal at the root of our project, let's move into our backend folder. Say cd backend. To set up the project, first, run the command [[npm]] init. This will initialize the folder as a Node.js project. Let's also add the -y flag in order to skip the interactive project initialization prompts and accept the defaults. With our project initialized and our package.[[JSON]] file scaffolded, we can now start installing the required packages. First, let me clear the screen. Good. We'll be starting by installing two packages, and this will be the express package and the cors package. So let's go ahead and install this by running the following command: npm install express
>
> **[1:34](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/building-out-the-express-js-api?u=76281980&t=94)** cors. The express package is going to help us build out our HTTP server, while the cors package is going to help us take care of any cors-related issues. Now that the installation is done, we can now start writing our server code. So let's head back to VS Code. Now back in VS Code, let's begin by creating a server.js file in the root of our backend folder. So create file, server.js. Inside the file, let's start by bringing in the packages that we just installed. While we are at that, let's also bring in body-parser so that we can pass request parameters seamlessly. Next, let's create our express app by assigning it to a app variable. Let's also configure this app to use the body-parser and the cors package. The body-parser line is going to help us process requests that come in the JSON format, and we are also going to tell the app to use the cors package. Finally, to wrap up our boilerplate express app, let's declare a port and make our app listen on that port. Perfect. And that wraps up our boilerplate Node.js application. Now, we can run the app in our console to see if everything works fine.
>
> **[3:06](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/building-out-the-express-js-api?u=76281980&t=186)** Back here in our console, first, let me clear the screen, and let's run the command node server.js. Hit "Enter." And now, our app running message displays, and we can start adding all the cool functionality that we have planned to this Node.js backend application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[npm]] (2), [[JSON]] (2), [[Gemini]] (1)
> **CLI Commands:** node (5), npm (2), cd (1), make (1)
> **File Paths:** node.js (4), server.js (3), package.json (1)
> **Env Vars:** api (4), http (1), json (1)
> **Prerequisites:** set up (2), install (2), initialization (1), configure (1)
> **Tools:** terminal (2), vs code (2)
> **Exercise Files:** boilerplate (2)

#### [Configuring the Generative AI SDK](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/configuring-the-generative-ai-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/configuring-the-generative-ai-sdk?u=76281980&t=0)** In this video, we'll be setting up our [[Node.js]] project to use the [[Gemini]] API. Remember that in the previous video, we generated an API token in order to have authenticated access to the Gemini API. We will be making use of this API key in our Gemini configuration. To begin, here in the console, we'll be installing another set of libraries. First, let's shut down our server. And now, we're going to be installing two libraries. This is the dotenv library and the [[Google]] [[Generative AI]] library. The dotenv library will be responsible for storing and loading our API key into the project. While the Google Generative AI library is the standard Node.js library for interacting with the Gemini API. So let's install these libraries by running the following command. Now, with these libraries installed, that's the dotenv library and the @google/[[Generative AI|generative-ai]] library, we can now start writing some code to configure the Gemini API inside our project. Now back in VS Code to configure the Gemini API, let's start by bringing in the libraries we just installed. So now we've brought in these two libraries, and as you can see, we have accessed the GoogleGenerativeAI class from the Google Generative AI library. Next, let's set up the dotenv library to hold and reference our API key. We first begin by loading our environment variables from a dotenv file that we'll soon be creating.
>
> **[1:34](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/configuring-the-generative-ai-sdk?u=76281980&t=94)** We'll do that by calling dotenv.config. Now, do make sure that this call to .config is made immediately after all your imports. No line of code should be between this call to config and your required statements. With that in place, we can now create our dotenv file. This is where we place our API key. And this file is going to be ignored in our gitignore file, so that we don't push our API key to a public repository. To ensure this, let's say backend/.env to get more specific, and let's create our dotenv file inside our backend folder. In this file, add a new environment variable with the name API_KEY, and let's set that to a string. You can actually give this variable any name you want. Just make sure it is the same name you are going to be referencing in your code. Now, let's set the value of this variable to the API key from Google AI Studio. So I'm just going to go to my browser and grab the key. On my API keys page, click the truncated key, click "Copy," and then let's move back to VS Code. Here, we can then paste in our API key. And make sure you save the file. With the environment file in place,
>
> **[3:08](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/configuring-the-generative-ai-sdk?u=76281980&t=188)** our API key is now automatically loaded into our code by the dotenv library using the variable we have just declared. Now, let's go back to server.js to continue configuring our Google Generative AI library for access to the Gemini API. The next thing we're going to do is to create a new instance of the GoogleGenerativeAI object and pass it our API key. We're just going to scroll down here just under our cors declaration. Put a comment, say, "Configure Gemini API." And now let's create our new object instance. And now we pass it our API key from our environment file. Perfect. The next thing we're going to do is to create a configuration for our model instance. This allows us to reference the exact model we want to use, which is the Gemini Pro Vision model. So let's go ahead and do that. So say const geminiProVisionModel that is equal to our googleGenAI instance called getGenerativeModel. And in here, we're going to pass in the configuration object. And inside this object, we're going to be defining a model property which will be set to the model we want to use. As we know already, we want to use the Gemini Pro
>
> **[4:46](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/configuring-the-generative-ai-sdk?u=76281980&t=286)** Vision model, so gemini-pro-vision. And let's go ahead and save that. Now, if you want more information about the Gemini API, how it is structured, the API endpoints, and the different types of models and model names, you might want to check out our Gemini Getting Started course on the [[LinkedIn]] library. There we go into more details on how the Gemini API is structured. But for now, we have our configuration to use the Gemini Pro Vision model. And with this model object, we can now make authenticated API requests to the Gemini API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (16), [[Google]] (6), [[Generative AI]] (4), [[Node.js]] (2), [[LinkedIn]] (1)
> **Env Vars:** api (24), api_key (1)
> **CLI Commands:** make (4), node (2)
> **Prerequisites:** configure (3), install (1), set up (1), getting started (1)
> **File Paths:** node.js (2), dotenv.config (1), backend/.env (1), server.js (1)
> **Code Identifiers:** geminiprovisionmodel (1), googlegenai (1), getgenerativemodel (1)
> **Cross-References:** previous video (1), go back to (1)
> **Tools:** vs code (2)

#### [Adding routes](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-routes?u=76281980&t=0)** In this video, we'll be adding two routes to our application. The first route will be the base route and will simply print out a conventional welcome message. The second route will be the endpoint that actually performs the caption generation and will be called from the front end web client. So let's begin. First, let's scroll down just before our port definition. And the first route will be a get route, say app.get. And the base route, set it to a handler. And this route will simply return the message, "Welcome to our AI Caption Generation API." So let's do a res.send and give it a string, "Welcome to our AI Caption Generation API." With that in place, let's move on to the next route. Unlike the first route, the following route will be a post request. We will be calling the endpoint generate-caption. But you can give this any name that is appropriate for the application you're building. We pass it a handler. And for now, this handler is going to be empty. The caption generation functionalities for this handler will be added in the coming videos.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **UI Navigation:** scroll down (1)

#### [Setting up file upload functionality](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/setting-up-file-upload-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/setting-up-file-upload-functionality?u=76281980&t=0)** In order to generate our image captions, we need to be able to receive and store image files. That is what we will be setting up in this video. To begin, we first need to install a [[Node.js]] package that will help us achieve this. And that will be the multer package. In the terminal, run the command [[npm]] install multer. And let's hit "Enter" to install that. Another package that we are going to need is the mime-types package. This package will help us automatically detect image file extensions, which is required when using the [[Gemini]] Pro Vision model. So let's run the command npm install mime-types to install the mime-types library. Perfect. With this tool installed, we can now head over to our project in VS Code to add our upload functionality. Back in VS Code, to begin setting up our upload functionality, I'm just going to come under the Gemini configuration, add another comment, and say "Configure Upload." With that in place, now let's bring in our packages. That's the ones we just installed. So first you say const multer equals require multer.
>
> **[1:34](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/setting-up-file-upload-functionality?u=76281980&t=94)** Let's bring in the mime-types library. I'll just call it mime. Say require mime-types. Now, aside these two libraries that we just installed, that is multer and mime-types, we will also be needing the path and fs modules from the Node.js standard library to correctly define our upload path and access the file systems functions, respectively. So let's bring those in. With all the required dependencies brought in, we can now start writing our upload function. So let's go back to that section I created, Configure Upload. The first step to take is to configure where we'll be storing our uploaded image files, and how we'll be generating our file names. To begin, let's create a multer configuration to define these. Next, let us set our upload directory to a folder with name "uploads." We'll be creating this folder later on. With the upload directory now defined, let's automatically generate random names for our uploaded files using timestamps. Perfect. So first, let me wrap the view so that we don't have these horizontal lines. So what we're basically doing here is to take the field name of the file, concatenate it with the current timestamp, and then add the file extension.
>
> **[3:09](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/setting-up-file-upload-functionality?u=76281980&t=189)** Yep. That's what we're basically doing here. And that is going to be our auto-generated file name. To complete this configuration, we then create an upload object by passing the storage configuration to the multer library. Say const upload, let's scroll up a little bit, multer. And inside multer, we pass the storage object that we just created. Which has the same name as our variable, so storage is set to storage. Now that we have the upload object set up and configured, we'll be including it as a middleware on our generate-caption endpoint. So let's go ahead and do that. Let's scroll up a little bit. Say upload.single. I will pass in the name of the field that we're expecting from the front end to hold our file, and that will be file. Also, so that we don't forget, because we'll be performing some asynchronous operations inside this route, let's add the async keyword to the route handler. Perfect. From what we have set up so far, when an image is uploaded, we can now access the file path from the request object. One last thing. We did specify that all files will be uploaded to an uploads directory.
>
> **[4:43](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/setting-up-file-upload-functionality?u=76281980&t=283)** So let's go ahead and create that directory at the root of our backend folder. And with our uploads folder in place, we can now start working on our caption generation functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[npm]] (2), [[Gemini]] (2)
> **Prerequisites:** install (5), configure (3), set up (2)
> **CLI Commands:** node (2), npm (2)
> **Tools:** vs code (2), terminal (1)
> **File Paths:** node.js (2)
> **UI Navigation:** scroll up (2)
> **Cross-References:** go back to (1)
> **Best Practices:** don't forget (1)

#### [Writing the prompt request and response](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-prompt-request-and-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-prompt-request-and-response?u=76281980&t=0)** In this video, we are finally going to be writing our request to the [[Gemini]] API to use the Gemini Pro Vision model to generate a caption for the image we send to it. And we'll be doing all this work inside our generate-caption endpoints. So let's get started. The first thing we're going to do is to get the path to the uploaded image and also the mime-type of the image. Good. Next, we use the uploaded image file path and the mime-type to create an image path configuration as required by Gemini. First, we'll create an object for our configuration. Inside this object, we'll then create an inlineData object to define our image configuration. Here in our inlineData object, we have passed a data property, which is just a string representation of our binary file and also the mime-type. With our image configuration in place, we can then add these to the array of images to be sent in our request. This is the image data that will be passing along with our request to the Gemini API. The next thing we're going to do is to write the prompt that instructs the Gemini model on what we wanted to do with the image. Our purpose is to have a caption generated for the image. So that is exactly what we will be telling Gemini to do.
>
> **[1:36](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-prompt-request-and-response?u=76281980&t=96)** So let's write a prompt variable and set that to a string. Now within the string codes, let's write the prompt, "Write an appropriate caption for this image to help visually-impaired users." Here, we're being very specific about the users that we are targeting. This will make the result more suited to the exact purpose we are building this application for, and helps Gemini generate the appropriate response. It is now time to file our request. But first, make sure you remember to add the async keyword to this handler. If that's in place, then we can continue. To write our request, we create a request variable. We then set it to call the generateContent function on our Gemini model object. The generateContent function is Gemini's supported function for generating responses based on submitted prompts. Now, let's pass this function our prompt and our image data. We pass an array. First item will be our prompt, and second item will be the spread of our images variable. With this in place, we can now retrieve our response.
>
> **[3:15](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/writing-the-prompt-request-and-response?u=76281980&t=195)** Let's create another variable and call it response. We set this variable to asynchronously receive our response from the request. From this response, we can then retrieve our caption from the text data by calling the text function on the response object. And finally, let's get on our caption to the requesting client. Awesome. Now, we have the server returning our caption back to the client, and we can start tying things together in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (9)
> **Code Identifiers:** inlinedata (2), generatecontent (2)
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **Cross-References:** in the next (1)
> **Best Practices:** remember to (1)


### 4. Bringing It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Connecting the frontend to the API](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/connecting-the-frontend-to-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/connecting-the-frontend-to-the-api?u=76281980&t=0)** Now that we're done writing our backend, it's time to integrate it with our client application and test things out. We will start by pointing our front-end app to the backend application. Remember that placeholder endpoints we used in our front end? It's now time to switch to a real one. So let's go into script.js. Inside our frontend folder, script.js. Pull this to the side. I will also wrap the view. And now, let's look for our getCaptionForImage function. Yes, our getCaptionForImageFunction. Now, in this function, let's change the placeholder, which is API endpoint. Let's change this text in the call to our API to the address of the backend, and point to the generate-caption endpoint. Perfect. Now, save the file. And to test things out, let's first make sure that the back end is running. So here in our terminal, currently our backend is not running. So first, I'm going to clear the screen, and we're going to run node server.js to run the back end. And now our back end is running on Port 1330. I think I got the wrong port. Let's change that in VS Code. So 1330 not 1337. Save that.
>
> **[1:35](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/connecting-the-frontend-to-the-api?u=76281980&t=95)** And also in the console, make sure that your front end is also running. Mine is still running, but if yours is not running, remember to run the command npx http-server /frontend. That's this command, npx http-server ./frontend. Now with these two running, we can now go into our browser to test the application. Now here in our browser, first, let's make sure that we refresh the page. Do a hard refresh. I'm going to open up the source. That's page source to make sure that the script.js file, that's the one down here, yeah, let's make sure that it is currently pointing to our endpoint. That's good. I can close this and close the other one for index.[[HTML]]. And now let's test the application. So let's pick a picture. The other time I picked this picture that I snapped for my [[LinkedIn]] cover. But now I'm going to be picking this colorful flower pot. Not for any reason, I just find this picture more interesting. Let's select that. It displays in our preview. And now we can click our submit button to send our file to the back end for the caption generation operation. But before we do that, let's open up our developer tools in order to monitor the network tab. So I'm just going to come up here and go down to More Tools, Developer Tools,
>
> **[3:08](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/connecting-the-frontend-to-the-api?u=76281980&t=188)** and I'm going to click on the "Network" tab. Okay. Good. Now, let's click the "Submit" button to generate a caption for our selected image. The API request is fired, so we can just wait for it. And just after a couple of seconds, our response returns. Here we have our response. This was what came from the server, but we noticed it wasn't displayed here. Seems something might be wrong with our displayCaption function. So let's go into Visual Studio Code and check that out. Here in Visual Studio, let us scroll down to displayCaption. We get our caption container dot -- oh, this is textContent not text, textContent, imageCaption.textContent. Yeah. Yep, those are the type of bugs you find when you're integrating your API with your front end. So yeah, textContent. So now, let's save this and go back to our browser to test things out. So back here in the browser, once again, let us refresh the page. Let's do a hard refresh and, once again, let us select our flowerpot. Now, with that selected, let us, once again, hit "Submit" and observe our Network tab. So it comes back. Yeah. The response comes back, and it now gives us our caption. Our caption is now visible in our caption window. It says, "A green vase is filled with an arrangement of pink, purple, and yellow flowers.
>
> **[4:41](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/connecting-the-frontend-to-the-api?u=76281980&t=281)** The tulips and daffodils are in various stages of bloom." Even the level of detail. Quite impressive as the result describes the image correctly. In the next video, we will look at adding some small improvements to this application to further improve the [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[LinkedIn]] (1), [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** make (5), npx (2), find (2), node (1)
> **Code Identifiers:** textcontent (4), displaycaption (2), getcaptionforimage (1), getcaptionforimagefunction (1), imagecaption (1)
> **File Paths:** script.js (3), server.js (1), index.html (1)
> **Env Vars:** api (4)
> **Tools:** visual studio (2), terminal (1), vs code (1)
> **UI Navigation:** switch to (1), click on (1), scroll down (1)
> **Analogies:** picture (3)

#### [Adding a progress indicator](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-a-progress-indicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-a-progress-indicator?u=76281980&t=0)** If you noticed in the previous video, after clicking the submit button in order to generate our caption, there was no visual feedback to inform us that the request is currently in progress. It would be nice to have an indicator that shows that the request is in flight, and that the caption generation is currently ongoing. So let's see how we can implement that. Fortunately, we already have the right function for the job. While the request is ongoing, we'll be using our displayCaption function to show a progress message. Once the request ends and our caption is returned, the caption is then displayed. To implement this, all we have to do is go into our getCaptionForImage function and add a call to display function just above the first line in the try block. In the argument, let us put the text, "Processing Caption Generation." And add it dot dot dot at the end to give an indication that there is an ongoing process. With this in place, let's save the file. Now, let's head back to the browser to test this out. Back here in the browser, once again, let us refresh the page. Let's pick a file. This time I might just want to pick my [[LinkedIn]] picture once again. Now, let's hit "Submit" and observe the message within the caption window.
>
> **[1:34](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/adding-a-progress-indicator?u=76281980&t=94)** So we hit "Submit." You see, it says, "Processing Caption Generation..." And once the request is done, it returns with a response that says, "A young man, that is me, is sitting in a chair in front of a desk. He is wearing a blue shirt and has a friendly smile on his face." How awesome is that? This was just a little change, but it will have a huge impact on the [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[User Experience (UX)|User experience]] (1)
> **Code Identifiers:** displaycaption (1), getcaptionforimage (1)
> **Cross-References:** previous video (1)
> **Analogies:** picture (1)

#### [Using the Web Speech API to read captions](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/using-the-web-speech-api-to-read-captions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/using-the-web-speech-api-to-read-captions?u=76281980&t=0)** So we have successfully connected our front end to our back end to get our captions working. We have also added a progress indicator in order to tell the user when the caption generation is in progress. Finally, in this video, we'll be adding one more functionality to further improve the [[User Experience (UX)|user experience]] of the application. We will be writing the code that will allow the user listen to the caption that was generated. Sounds good? Let's get started. Here on our app home page, you can see the Hear Caption button just underneath the caption window. We are going to be adding an handler to this function that calls a function that uses the web's text to speech API to generate the audio of our caption and say it out loud. Back here in our code editor, inside our script.js file, let's start implementing that functionality. The first thing we're going to do is to write a function that takes text and converts it to speech. Just below the displayCaption function, let us create a new function called speakText. This function will take a single argument, which is the text that we want to listen to. Inside the speakText function, we first check if the speech API is supported. If this API is not supported, we will just display an alert that
>
> **[1:36](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/using-the-web-speech-api-to-read-captions?u=76281980&t=96)** informs the user that your browser does not support the text to speech feature. Now back in the if block, we create a new instance of the speechSynthesis object by passing in our text. Next, we add some configurations for how we want the output to sound. First, we set the language to English. Then we set the speed and pitch also. These two will ensure that we get an output similar to the pace at which a normal human will speak. Now, finally, let's say our caption out loud using the speak method of the speechSynthesis API. Awesome. The final step in the process is to add an event handler to our Hear Caption button, and have it call the speakText function with our caption. So let's scroll up to where we have all our event handlers, and let's add one more. With our event handler in place, let us call the speakText function and pass it our caption. Perfect. We can now save this file and return to our browser to test the entire functionality of the application from end to end. Now, back in our browser. First, let's do a hard refresh.
>
> **[3:11](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/using-the-web-speech-api-to-read-captions?u=76281980&t=191)** So that we make sure that all the changes that we just made have taken effect. And now, let us generate our image caption. Let's pick our flowerpot, let's click "Submit," wait for our caption to be generated, and now we have our caption. But we came here to listen to it. So let's click the "Hear Caption" button and see if our code works. A green vase is filled with an arrangement of pink, purple, and yellow flowers. The tulips and daffodils are in full bloom. Did you hear that? How awesome is that? How cool is that? Now, users who prefer to listen to what the caption is, can take advantage of this button leading to a more inclusive experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Code Identifiers:** speaktext (4), speechsynthesis (2), displaycaption (1)
> **Env Vars:** api (4)
> **File Paths:** script.js (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** similar to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini/next-steps?u=76281980&t=0)** I hope you enjoyed building our AI-powered caption generation tool, and I hope that this project has given you a better understanding into implementing AI features in your software applications. The [[LinkedIn]] Learning Library is full of a ton of AI courses. I will specifically recommend that you check out my other [[Gemini]] course, Getting Started with Gemini API, to understand the inner workings of the Gemini API. Whether you're a programmer just looking for APIs to use to add AI-powered features to your applications or you are a data scientist that wants to build your own AI models from scratch, there are courses in the library for every use case. So I highly recommend that you check out more courses in the library to further ground your knowledge on building AI-powered applications. Once again, I am Fikayo Adepoju. And you can reach me on any of my socials displayed on the screen. On LinkedIn, using my name, on Twitter: @coderonfleek, and on [[GitHub]] also @coderonfleek. Until I see you next time in another course, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (3), [[LinkedIn]] (2), [[GitHub]] (1)
> **Env Vars:** api (2)
> **Tools:** github (1)
> **Prerequisites:** getting started (1)


## Instructor

- [[Fikayo Adepoju]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/build-an-image-captioning-tool-for-visually-impaired-users-with-gemini-3864012)

## Skills Covered

- Digital Accessibility
- Artificial Intelligence (AI)
- Computer Vision
- Google Gemini

## Path Context

### In [[Build for Digital Accessibility]]
← [[Accessible Layout for the Web]] | **7 of 12** | [[Canva- Designing Engaging, Accessible Presentations]] →

### In [[A Developer's Guide to Google Gemini]]
← [[Building with Google Gemini Advanced and Ultra]] | **8 of 8**

## Appears In

- [[Build for Digital Accessibility]]
- [[A Developer's Guide to Google Gemini]]

## Related Courses

_Courses sharing skills:_

- [[Hands-On AI- Image Processing with Python]] — Artificial Intelligence (AI), Computer Vision
- [[Advanced Gemini for Developers]] — Artificial Intelligence (AI), Google Gemini
- [[Programming with the Gemini Flash API]] — Artificial Intelligence (AI), Google Gemini
- [[Getting Started with the Google Gemini API]] — Artificial Intelligence (AI), Google Gemini
- [[Exploring Million-Token Models with Google Gemini Pro 1.5]] — Artificial Intelligence (AI), Google Gemini

---

[↑ Back to top](#)