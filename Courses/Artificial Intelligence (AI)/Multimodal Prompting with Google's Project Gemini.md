---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: multimodal-prompting-with-google-s-project-gemini
url: "https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini"
duration_minutes: 15
duration: 15m
level: Beginner
updated: 12/21/2023
learners: 626639
skills:
  - Multimodal Prompting
  - AI Prompting
  - Artificial Intelligence (AI)
  - Google Gemini
  - Prompt Engineering
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQECBABslYCCGg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703012612412?e=2147483647&amp;v=beta&amp;t=7-GlejfhI-Db5pJMwCMe7I2sBiNZqOgE7agzhxAhSfI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)'
prev_courses:
  - '[Prompt Engineering with Gemini (2024)](Prompt%20Engineering%20with%20Gemini%20(2024).md)'
next_courses:
  - '[Building with Google Gemini Advanced and Ultra](Building%20with%20Google%20Gemini%20Advanced%20and%20Ultra.md)'
path_nav: '[{"path":"Develop Your AI Skills with Google Gemini and Google Cloud Platform","position":3,"total":7,"prev":"Prompt Engineering with Gemini (2024)","next":"Building with Google Gemini Advanced and Ultra"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/multimodal-prompting
  - skill/ai-prompting
  - skill/artificial-intelligence-ai
  - skill/google-gemini
  - skill/prompt-engineering
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Multimodal%20Prompting%20with%20Google's%20Project%20Gemini.md)

![Multimodal Prompting with Google's Project Gemini](https://media.licdn.com/dms/image/v2/D4D0DAQECBABslYCCGg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703012612412?e=2147483647&amp;v=beta&amp;t=7-GlejfhI-Db5pJMwCMe7I2sBiNZqOgE7agzhxAhSfI)

# Multimodal Prompting with Google's Project Gemini

> Explore Project Gemini, Google's transformative multimodal artificial intelligence approach. Understand how to leverage Gemini’s power in your applications for enhanced outcomes. This course covers the Nano, Pro, and Ultra models - their features, practical uses, and differences. We'll guide you through what's available now, the roadmap and upcoming releases, starting with Google Bard and extendin

> [LinkedIn Learning](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini) | 15m | Beginner | 627K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Why Project Gemini is important](#why-project-gemini-is-important)
- [**1. Advanced Data Analysis**](#1-advanced-data-analysis) (5 videos)
  - [What is multimodal prompting?](#what-is-multimodal-prompting)
  - [Exploring Gemini's roadmap](#exploring-geminis-roadmap)
  - [Testing Google Gemini in Google Bard](#testing-google-gemini-in-google-bard)
  - [The multimodal model in action](#the-multimodal-model-in-action)
  - [Building applications with Gemini](#building-applications-with-gemini)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why Project Gemini is important](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/why-project-gemini-is-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/why-project-gemini-is-important?u=76281980&t=0)** - [Gemini](../../Skills/Software%20Development/Gemini.md) is an AI platform from [Google](../../Glossary/Service/Google.md) that helps shift the focus from traditional text prompting to a multimodal approach, which means adding image, voice, and other inputs to help improve your results. Although multimodality has been available in other platforms, Gemini has one significant advantage, the access to Google's infrastructure, devices, and services. The quality of models depends on the data that a company trains to model with. It's going to be hard to be Google connected to user data from YouTube, [Android](../../Glossary/Sdk/Android.md), email, and more, especially when they can offer aggressive pricing that comes from scale. Now, if you're thinking about where to build your next app, you should pay attention to what Google is doing in this space. Let's get started with some more details about what a multimodal AI can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Android](../../Glossary/Sdk/Android.md) (1)
> **Definitions:** is an  (1)
> **Speakers:** - gemini (1)


### 1. Advanced Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [What is multimodal prompting?](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/what-is-multimodal-prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/what-is-multimodal-prompting?u=76281980&t=0)** - The big change with [Gemini](../../Skills/Software%20Development/Gemini.md) is that it can treat different modalities as inputs. That can include text, audio, images, code, and video. Although not all of those modalities are currently available. Most prompting today uses a category of AI called LLMs, or [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). They're trained on billions of parameters, which can understand and replicate the way humans communicate, but there's a lot of other models out there, including those focused on reproducing music, speech, images, and video, and they've gotten pretty amazing at understanding and generating content. Multimodal models are able to go beyond single models and consider those different inputs as prompts. It can detect patterns like whether somebody's angry or sad in an audio or an image. It can look at a picture of a graph and understand the underlying data, then write a computer program to update the information and even generate a new graph image. It can also cross-reference inputs across modalities to take prompting to a different level. Think of how humans do this. You might look at a hiking trail map and use reasoning to decide which trail is right for you, and so can a multimodal model if you feed it a photo from your camera. While on a trail, you might send a text to your friend and talk about an interesting find. But sending a photo or a video, can include a lot more context. A multimodal model can find and see an image or video and help you identify things like plants or animals, and help you prepare and illustrate a timeline
>
> **[1:33](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/what-is-multimodal-prompting?u=76281980&t=93)** to share your experience with others. With multimodality, the conversations you're having with AIs are fundamentally going to change. Let's talk about some of the specs behind the Gemini family of Multimodels, next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **CLI Commands:** find (2)
> **Analogies:** picture (1)
> **Speakers:** - the (1)

#### [Exploring Gemini's roadmap](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/exploring-gemini-s-roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/exploring-gemini-s-roadmap?u=76281980&t=0)** - [Gemini](../../Skills/Software%20Development/Gemini.md) isn't just a model, but a whole family of models that comes in different types and with varying capabilities. One of the things that makes Gemini unique is that it was trained from the start to process different file types simultaneously, and it can make inferences from all that information available. For video, it takes a recording and converts it to a series of stills that it can process, but for audio, it's able to understand the data natively instead of first converting it to text to feed it as a prompt. It can also output responses with text and images. So potentially, you should be able to record some audio of a bird you hear in the woods and ask it to show you a picture of what that bird looks like. These capabilities and features are not all currently available, but are rolling out with different versions of the models over time. There are three main versions of Gemini, Gemini Nano, Pro, and Ultra. They support a 32K parameter context length, which is small compared to newer models. Nano is the smallest of the models, meant to work preloaded into devices. It's meant for simpler tasks, like summarization and reading comprehension. Most of the models today are so large that they don't run locally on machines, but rely on powerful servers who end up doing most of the work. By allowing the model to run locally, they're able to run within the walled garden of your device. That sort of approach might work well when prompts have access to sensitive data that we don't want shared with the cloud. There are also two versions of Nano, with Nano One focusing on low memory devices and access to 1.8 billion parameters, and Nano Two, which focuses on higher memory [products](../../Skills/Software%20Development/Microsoft%20Products.md) at three and a quarter billion parameters.
>
> **[1:34](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/exploring-gemini-s-roadmap?u=76281980&t=94)** You can test it using the AI Core app, available under Pixel 8 Pro series of phones. The app does simple text prompting, and for now, it can power the outer summarization in the recording app, as well as the smart reply in [Google](../../Glossary/Service/Google.md) Keyboards. The Pro model is more capable and is already running the Bard chatbot. Just as with the Nano, there are two versions, one that is text only and a multimodal version. Currently, Bard is not running the multimodal version of Gemini, but the app does have image input and uses plugins that gives you access to things like Gmail and YouTube. To check out the multimodal version of Pro, you can take a look at Google AI Studio, or run it in your [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) console under [Vertex](../../Skills/Software%20Development/Vertex.md) AI. It's also something that you can use to start building apps today. The real power of Gemini's multimodality will be clear once Ultra releases early next year. Ultra claims that it will be the state-of-the-art leader on 30 of 32 different benchmarks when you compare it to other models. Let's take a look at how you can check it out and test its capabilities, starting with Google Bard next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (6), [Google](../../Glossary/Service/Google.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Vertex](../../Skills/Software%20Development/Vertex.md) (1)
> **CLI Commands:** make (1)
> **Versions:** 1.8 (1)
> **Analogies:** picture (1)
> **Speakers:** - gemini (1)

#### [Testing Google Gemini in Google Bard](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/testing-google-gemini-in-google-bard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/testing-google-gemini-in-google-bard?u=76281980&t=0)** - [Gemini](../../Skills/Software%20Development/Gemini.md) is currently available to the public through [Google](../../Glossary/Service/Google.md)'s chatbot called Bard, which you can try for free at bard.[google.com](https://google.com). Now, the model has updated from a previous model called PaLM 2 and currently uses a fine-tuned, text-only version of Gemini Pro. Let's take a look at how Bard works and what it can do. Although the model doesn't have multimodal features, it's still quite capable, and by connecting the Search and other Google services, it's able to manage a variety of information pretty well. Let's break down a simple scenario. I'm going to be doing a hike tomorrow, and I'd like Bard to help me plan the trip. I'll start with this prompt. "You're an expert hiker and experience tour guide. I'm going to the St. Francis Trail in the Ocala National Forest tomorrow and leaving from downtown Orlando. Can you give me some tips on how I should plan this?" And notice that it's using Google Maps as a service in order to accomplish my task. This is pretty useful stuff. It added some great suggestions, tips, and it was easily able to retrieve a Google map with directions. You can manage Bard's connections to other properties through extensions. Right now, Google can be connected to information about flights, hotels, maps, Workspace, and YouTube. Workspace includes things like [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) and Gmail. I've worked on Bard before, and I can tell you that the new Bard with Gemini feels smoother and more useful than the old Bard. The fact that it's connected to other services makes it a more compelling experience for some tasks. I'm curious about the weather, so let's see if it can retrieve some weather information. So I'll ask it, "What are the weather conditions expected to be there tomorrow?" That's no problem. Bard got the weather for me,
>
> **[1:31](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/testing-google-gemini-in-google-bard?u=76281980&t=91)** and it broke it down in different ways. Now because I've connected Bard to YouTube, I can ask for some videos of people who have done this hike before. I'll prompt it with, "Can you show me any YouTube videos of people who have done this hike before?" And this is pretty useful. It gave me links and also some sample videos that I can watch on YouTube. Bard can also analyze the contents of a YouTube video and give you relevant information from the content. Let's go ahead and add another prompt. "I do like the first video. Can you summarize the key points and highlight any historical information I might look for during my hike?" Now it's going to use its connection to YouTube to take the information from the video and give me a summary. Now, if for some reason you don't like the answer that it gives you, you can also hit this Regenerate draft button, and it'll perform that task again. At the bottom of Bard, you have a way of providing feedback, and you can also share this video with other people. By clicking on the Share button. you can export this video directly to a Google Doc, or hit the Share button and share this with others. This will allow you to create a public link that you can send to somebody else if they want to see the results, perhaps somebody who is going with you on the hike. Bard also gives you the opportunity to do additional searches on Google with this G button right here. So overall, Bard is a pretty capable chatbot, and it's gotten a lot better by adding Gemini and some of the other features that connect it to additional project. Next year, Google will release a version of Bard that uses the Ultra model in a product called Bard Advanced, allowing us to explore the most advanced model
>
> **[3:04](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/testing-google-gemini-in-google-bard?u=76281980&t=184)** with the full range of multi-modal features. There is one way to check out some of what a multi-model can do, and that's through some of the developer tools. We'll take a look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (9), [Gemini](../../Skills/Software%20Development/Gemini.md) (4), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (1)
> **URLs:** [google.com](https://google.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - gemini (1)

#### [The multimodal model in action](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/the-multimodal-model-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/the-multimodal-model-in-action?u=76281980&t=0)** - Although Ultra, the version of [Gemini](../../Skills/Software%20Development/Gemini.md) with the most advanced features, won't be available until next year, there's a couple of places where you can find the developer options for Gemini. The best place is the ai.[google.dev](https://google.dev) website. You can see the link to [Google](../../Glossary/Service/Google.md) AI Studio here and underneath, you'll find the link to [Vertex](../../Skills/Software%20Development/Vertex.md) AI on [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). You do have to set up accounts for both of them, and there are some charges on Google Cloud, although there is a free tier. The Google Cloud Vertex AI is meant for those already using Google Cloud services, and it has a lot more features than creating an AI bot. The other tool is called Google AI Studio, which was previously known as the MakerSuite. This is a project focused on AI generation using different models. Let's take a look at that project. You still need to have a Google account, a Gmail or YouTube account will work. This is a lot different than what we got from Bard, and this is because this is meant for developers. So let's go ahead and start with a simple prompt. I'll type in can you tell me about the St. Francis Trail in Ocala? And hit the run button at the very bottom. That's a decent answer, but it's just a document. If I want to, I can continue this conversation by adding things to the bottom of this document. I'll add something that says what sort of fauna can I find in this trail? And I'll hit the run button again. So far, I'm just using the text version of Gemini Pro, but if you come down here to the right-hand side, I can choose a different model and I'm going to go to Gemini Pro Vision. Let's go ahead and select all this text and just hit the delete button and you'll see that it'll give you some suggestions
>
> **[1:32](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/the-multimodal-model-in-action?u=76281980&t=92)** for things you can try. Let's just go ahead and pick one of them. When you see one you like, you can hit the tab key and then it'll import those photos and you can just hit the run button to see what it does. Here we're submitting three images with different dishes, and it's going to suggest some things that I can make during the week based on those dishes. That's great, let's see if I can import any images of my own. I'm going to go ahead and select all and delete all those images. And then I'm going to hit the image button and you can see some images that I have preloaded before, or I can hit this upload button and get some images from my hard drive. In this Gemini folder, I have a few photos. You want to make sure that the photos aren't too big. It does have some limitations as to how much you can upload with the current model. I'm going to go ahead and choose the photo of the alligator and select open. It's going to upload that image and it's going to add it into my prompt. Once you do this a few times, you should have a selection of images appear right here. So I'm going to go ahead and select the frog as well, and I'll add a prompt here. Without any examples, Google tends to be very short in how it answers questions, so I'm going to ask if it can describe any similarities between these two animals and also that it should be as detailed as possible. Let's go ahead and run this prompt. I'm not sure about the frog having a long, slender body, but it did get the fact that they're both ectothermic correct. Let me ask a follow-up question. So I'll ask if there's any common places where I can find both of these animals. And I'll hit the run button. And I took these photos in Florida, so this is obviously true. Gemini is just getting started, but hopefully you can see the potential.
>
> **[3:05](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/the-multimodal-model-in-action?u=76281980&t=185)** Make sure you give this tool a try. It's free and you can check it out just with a Google account. I'm really looking forward to the Ultra model and also the fact that I may be able to connect to some of Google's services. Now let's explore how this AI tool can help us create our own applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (7), [Gemini](../../Skills/Software%20Development/Gemini.md) (6), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (4), [Vertex](../../Skills/Software%20Development/Vertex.md) (2)
> **CLI Commands:** find (4), make (3)
> **Definitions:** is a  (3), is called (1), known as (1)
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** set up (1), getting started (1)
> **URLs:** [google.dev](https://google.dev) (1)
> **Speakers:** - although (1)

#### [Building applications with Gemini](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/building-applications-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/building-applications-with-gemini?u=76281980&t=0)** - The AI Studio has some additional options for getting started with app development, and it can help you prepare some sample code to get your apps going. Besides the preform prompt, there are a few other options. I'm going to go over here and hit Create New. You can see one called Structural Prompt, which can really help you create better apps by providing the model with additional examples. Chat prompts allow for a back-and-forth conversation, but if you choose that, you'll note that you can't use the vision model, and the tuned model is similar. You can include additional data files, but right now you can see that it's only available with PaLM 2. So we're going to go with a new structural prompt so you can see how that works. Let's go ahead and add an image. So we'll start by going through [Gemini](../../Skills/Software%20Development/Gemini.md) Pro and choosing this Gemini Pro Vision option. And under this user's input, I'm going to add an image, and I'm going to choose this moth right here. And I'll add some information about the moth that I got from Wikipedia. This will help me define how I want this model to output this information. And you can see that I want this to be a headline with some other information underneath, and then a paragraph describing the particular image. Now, let's go ahead and test this. To do that, I'm going to come down here and select another image and have it write a sample output in the same way as my input. And I'll hit this run button to see what it does. And you can see that the output is very similar to one of my examples. Now I can add more and more examples to make this better, but it looks like it learned pretty much what I wanted from here. One of the great things about [Google](../../Glossary/Service/Google.md) AI Studio is that you can have it generate some sample code for you,
>
> **[1:33](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/building-applications-with-gemini?u=76281980&t=93)** and I can specify the language that I want to use when coding my application. So I'm going to go to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and you can see that there are some installation instructions at the very top. You need to make sure that your system has those installed. And then it is importing some things, configuring the application, and then it's going to go through the model and allow you to also set these different safety settings. And then also sends those examples to the model for input. So if I want to, I can copy this. You can also edit safety settings and some other advanced features right here, and the code would reflect that as well. So you can see that it allows you to handle some of these different safety settings right in the application. However, if you want to use this in your own application, you're going to need an API key for the project that you're working on. So we'll hit Save, we'll give this a name. Now I'm going to go and hit this, Get API Key button. And you can see here that I can create an API key in a new project or an existing project. I already have an API key that I created earlier. So I'm just going to say create a new API key for this project. And this is going to give you a long string that you can use on your application. So you just hit copy and whenever you use the code that it provided, you paste that into that section of your code. And I'll show you one more really interesting thing. So when I look at the code that it's given me here, I note that it is hard coding some of those images. And what I really want it to do is to allow me to add some image names that I can pass along to Gemini. Now, thankfully, Gemini is actually a pretty good coder, and we can ask Bard to help us rewrite this code.
>
> **[3:09](https://www.linkedin.com/learning/multimodal-prompting-with-google-s-project-gemini/building-applications-with-gemini?u=76281980&t=189)** So I'm going to go ahead and copy all this code and I'm going to open up Bard. I'm going to go ahead and paste all this code in here. And at the very top, I'm going to add some instruction. I'll say, can you modify the code so that I can pass along the name of the file when I call the Python app? That's a great way to get something like Gemini help you with code, but I want it to show me all the code in one place that I can copy and paste into my Python application. So I'm going to ask, can you modify my original code and show it to me? And I can copy this code and then paste it into a Python application and test it on my local system. As capabilities improve, these models are going to be able to do so much more and use files and data in multiple formats. Multiple modality is really going to change the way that we interact with AIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** python (4), make (2)
> **Env Vars:** api (5)
> **Exercise Files:** sample code (2)
> **Warnings:** note that (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - the (1)


## Instructor

- [Ray Villalobos](../../Instructors/Software%20Development/Ray%20Villalobos.md)

## Skills Covered

- Multimodal Prompting
- AI Prompting
- Artificial Intelligence (AI)
- Google Gemini
- Prompt Engineering

## Path Context

### In [Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)
← [Prompt Engineering with Gemini (2024)](Prompt%20Engineering%20with%20Gemini%20(2024).md) | **3 of 7** | [Building with Google Gemini Advanced and Ultra](Building%20with%20Google%20Gemini%20Advanced%20and%20Ultra.md) →

## Appears In

- [Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)

## Related Courses

_Courses sharing skills:_

- [Introduction to Multimodal Prompting for Generative AI](Introduction%20to%20Multimodal%20Prompting%20for%20Generative%20AI.md) — Artificial Intelligence (AI), Multimodal Prompting, AI Prompting
- [Prompt Engineering with Gemini (2024)](Prompt%20Engineering%20with%20Gemini%20(2024).md) — Artificial Intelligence (AI), Google Gemini, Prompt Engineering
- [Prompting ChatGPT with Multimodal Techniques](Prompting%20ChatGPT%20with%20Multimodal%20Techniques.md) — Artificial Intelligence (AI), AI Prompting, Prompt Engineering
- [AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation](AI%20Agents%20Made%20Simple-%20Your%20Zero-to-Hero%20Guide%20to%20Prompting%20for%20Work%20Automation.md) — Artificial Intelligence (AI), Prompt Engineering
- [Prompt Engineering and AI Agents with ChatGPT](Prompt%20Engineering%20and%20AI%20Agents%20with%20ChatGPT.md) — Artificial Intelligence (AI), Prompt Engineering

---

[↑ Back to top](#)