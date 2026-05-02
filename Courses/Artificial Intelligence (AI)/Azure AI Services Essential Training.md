---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-ai-services-essential-training-24512025
url: "https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025"
duration_minutes: 139
duration: 2h 19m
level: Intermediate
updated: 1/7/2025
learners: 4907
skills:
  - Microsoft Azure
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHrS3lLowhHkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1734556436730?e=2147483647&amp;v=beta&amp;t=ybzRPlMMvMPyu4sx961DhzC4PMoL9jckyMcIo36veSg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Foundational AI Skills for Azure Administration]]'
prev_courses:
  - '[[Azure AI- The Big Picture]]'
next_courses:
  - '[[Apply Ethical AI Principles Using the Responsible AI Dashboard]]'
path_nav: '[{"path":"Foundational AI Skills for Azure Administration","position":5,"total":6,"prev":"Azure AI- The Big Picture","next":"Apply Ethical AI Principles Using the Responsible AI Dashboard"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - skill/microsoft-azure
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20AI%20Services%20Essential%20Training.md)

![Azure AI Services Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQHrS3lLowhHkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1734556436730?e=2147483647&amp;v=beta&amp;t=ybzRPlMMvMPyu4sx961DhzC4PMoL9jckyMcIo36veSg)

# Azure AI Services Essential Training

> In this course, instructor Sahil Malik gives you an overview of the basic cognitive services available in Azure: vision, speech, language, language, search, content safety, translator, and document intelligence. Sahil explains these capabilities and ends with a working application for each service. The course wraps up with an overview of Azure AI foundry and where of where Azure AI fits in the AI 

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025) | 2h 19m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Become an Azure cognitive services MVP](#become-an-azure-cognitive-services-mvp)
  - [What you should know](#what-you-should-know)
- [**1. Vision**](#1-vision) (6 videos)
  - [Understanding Azure AI vision services](#understanding-azure-ai-vision-services)
  - [OCR service](#ocr-service)
  - [Image analysis](#image-analysis)
  - [Face service](#face-service)
  - [Video analysis](#video-analysis)
  - [Demo: Handwriting recognition with vision services](#demo-handwriting-recognition-with-vision-services)
- [**2. Speech**](#2-speech) (7 videos)
  - [Understanding Azure AI speech services](#understanding-azure-ai-speech-services)
  - [Speech to text](#speech-to-text)
  - [Text to speech](#text-to-speech)
  - [Speaker recognition](#speaker-recognition)
  - [Translation](#translation)
  - [Intent recognition](#intent-recognition)
  - [Demo: Text to speech](#demo-text-to-speech)
- [**3. Language**](#3-language) (7 videos)
  - [Understanding Azure AI language services](#understanding-azure-ai-language-services)
  - [Extract information](#extract-information)
  - [Summarize content](#summarize-content)
  - [Classify text](#classify-text)
  - [Answer questions](#answer-questions)
  - [Understand conversations](#understand-conversations)
  - [Demo: Key phrase extraction](#demo-key-phrase-extraction)
- [**4. Search**](#4-search) (5 videos)
  - [Understanding Azure AI search](#understanding-azure-ai-search)
  - [AI enrichment](#ai-enrichment)
  - [Semantic ranking](#semantic-ranking)
  - [Vectors in AI search](#vectors-in-ai-search)
  - [Demo: Build and use a search index](#demo-build-and-use-a-search-index)
- [**5. Content Safety**](#5-content-safety) (2 videos)
  - [Understanding Azure AI content safety](#understanding-azure-ai-content-safety)
  - [Demo: Text moderation](#demo-text-moderation)
- [**6. Translator**](#6-translator) (2 videos)
  - [Understanding Azure AI translator services](#understanding-azure-ai-translator-services)
  - [Demo: Language translation for text](#demo-language-translation-for-text)
- [**7. Document Intelligence**](#7-document-intelligence) (2 videos)
  - [Understanding Azure AI Document Intelligence](#understanding-azure-ai-document-intelligence)
  - [Document intelligence models](#document-intelligence-models)
- [**8. Azure AI Studio**](#8-azure-ai-studio) (5 videos)
  - [Understanding Azure AI Foundry](#understanding-azure-ai-foundry)
  - [Open AI](#open-ai)
  - [Choosing the right AI model](#choosing-the-right-ai-model)
  - [Popular AI models](#popular-ai-models)
  - [Demo: Build an app using a third-party model](#demo-build-an-app-using-a-third-party-model)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about Azure AI Services](#learning-more-about-azure-ai-services)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Become an Azure cognitive services MVP](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=0)** - [Sahil] [[Artificial Intelligence (AI)|Artificial intelligence]].
>
> **[0:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=2)** Some say it's bigger than the internet or even the Industrial Revolution, and I think I agree.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=7)** [[Microsoft Azure|Azure]] AI Services brings the power of AI in the hands of every developer.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=12)** You need to have no background in AI to build AI capabilities in your applications when you use Azure AI services.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=20)** This course will walk you through all such capabilities such as vision, speech, language, search, content safety, translations, document intelligence, and rounds up with a great introduction with [[Azure AI Studio]] building even more compelling applications.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=35)** Hi, I'm Sahil Malik, a longtime ex-[[Microsoft]] MVP employee and a general tech nerd, and I'm thrilled to share what I've learned.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/be-an-azure-cognitive-services-mvp?u=76281980&t=44)** So join me and let's embark on this journey in learning AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Azure AI Studio]] (1), [[Microsoft]] (1)
> **Env Vars:** mvp (1)
> **Analogies:** such as (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [sahil] (1)

#### [What you should know](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=0)** - [Narrator] Before we dive deep into this really exciting course, let's talk a little bit about you, what your background should be so you get the most value out of this course.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=10)** Well, first of all, you need to be a developer.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=13)** This course is aimed towards developers that are interested in building AI-driven applications.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=20)** Now you don't need to be just a .net developer, or [[Node.js]], or [[Python (Programming Language)|Python]], just any kind of developer.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=25)** My code examples here are going to be in Node.js, but the examples are very generic, and I'll be referring to the other languages as I go along.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=34)** I assure you, even as any other platform developer, you'll be able to follow along.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=39)** Here's the good news.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=41)** To follow along this course, you need to have zero background in [[Artificial Intelligence (AI)|artificial intelligence]], just a general interest, and I assure you that by the end of this course, you'll be well on your way to build really compelling artificial intelligence-based applications.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/what-you-should-know?u=76281980&t=57)** With that, let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (2), python (1)
> **File Paths:** node.js (2)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [narrator] (1)


### 1. Vision

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI vision services](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=0)** - [Instructor] Let's start by understanding [[Microsoft Azure|Azure]] AI Vision Services.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=6)** Azure AI Vision Services is pretty simple, things we see.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=10)** You input that as an image as data or a URL to Azure AI APIs, which will then help you run advance [[Algorithms]] and return meaningful information.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=21)** So what are the things that we can do with Azure AI Vision Services?
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=26)** As I mentioned at the heart of it, it is very simple.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=29)** You take an image or an image URL, and you simply call an API hosted by Azure.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=37)** You don't have to worry about all these complicated algorithms.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=39)** You just tell the API what you're interested in viewing out of that image, of course, through computer code, and there are various things you can do starting with OCR or optical character recognition.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=53)** This is also referred to as text recognition or text extraction, and these are machine learning algorithms that allow you to extract printed or even handwritten text from images such as posters, street signs, and product labels, or even my bad handwriting.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=70)** You can submit an image, a multi-part image, like a TIFF file or say a PDF document.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=78)** Next is image analysis.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=80)** Image analysis services can extract a wide variety of visual features from your images.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=85)** For example, it can generate a caption for a submitted image, or it can detect objects or brands, landmarks, famous landmarks that is, and determine whether an image contains adult content.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=99)** It can find specific brands or objects within an image or even find human faces and so much more.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=106)** Then there is face service.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=108)** Face service provides AI algorithms that can detect and recognize and analyze human faces and images.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=116)** Facial recognition software is important in so many scenarios, such as identification, touchless access control, and maybe even automatic face blurring for [[Privacy]].
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=127)** Then you have video service, and there are two parts to this.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=130)** One is spatial analysis, second is video retrieval.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=134)** Spatial analysis can analyze video from multiple input sources and do things like count the number of people or the space between them for social distancing, et cetera.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=144)** Video retrieval is a service that lets you create a search index, add documents, videos, and images to it, and search that video and image with natural language.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=154)** It is worth pointing out that like most AI services in Azure, you don't need to be an AI expert.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-vision-services?u=76281980&t=161)** All you need to know is how to call an API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Algorithms]] (4), [[Privacy]] (1)
> **Env Vars:** api (3), url (2), ocr (1), tiff (1), pdf (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [OCR service](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=0)** - [Tutor] Next, let's dive a little bit deeper into the OCR Service that is part of [[Microsoft Azure|Azure]] AI Vision Services.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=7)** The OCR Service will allow you to extract text from images that may contain printed or handwritten content.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=15)** Do you have a lot of receipts from the past and you wish to be able to search through them?
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=19)** Well, images are hard to search through, but what if you could extract text out of them and then search through them?
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=25)** Those are the scenarios that are enabled via the OCR Service.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=30)** So what is the OCR Service?
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=32)** Well, it is available either as an in-cloud service that is an API hosted by Azure, or as an on-premises container, so you can operate this on the Edge.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=44)** It supports many languages for both printed or handwritten text.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=48)** The link at the bottom of the screen you see here, is a list of languages that OCR Service supports.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=55)** It supports mixed languages and mixed mode.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=58)** What I mean by that is some printed text or handwritten text that could be together, and it could contain more than one language at a time.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=67)** And the results can contain text, words, or lines with bounding polygon and confidence scores.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=73)** And in the case of, say, if you submit a PDF that has multiple pages or a TIFF image, you may even get multiple pages in return.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=82)** This is how the typical results of calling the OCR Service API look like.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=88)** So at the very top, is an array of lines that is returned to you.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=93)** In that array of line, it'll tell you where exactly that line occurs in a given text.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=99)** Imagine that you submitted a poster, it has images and text.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=103)** where exactly does the text appear in that image?
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=107)** Then, within that line, what are the words contained in that line and exactly where the [[Microsoft Word|word]] occurs?
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=114)** And finally, confidence score on that recognition.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=118)** So remember, some of the texts may be occluded, may not, you know, in the real world is complicated, so some of the texts might be handwritten, somebody may have written on top of it, et cetera, so even just as humans, we may have problem recognizing text, sometimes, so can AI.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ocr-service?u=76281980&t=133)** So it gives you a confidence score so you can gauge for yourself as to what level of confidence do you accept before you say, "Hey, this is actually the text in there."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** ocr (6), api (2), pdf (1), tiff (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [tutor] (1)

#### [Image analysis](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=0)** - [Instructor] Next, let's talk about image analysis, which is another very important part of [[Microsoft Azure|Azure]] AI Vision Service.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=7)** Image analysis lets you input an image either as a URL or as a data stream, and you can return useful information from it.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=14)** What kinds of useful information?
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=17)** Well, I've chosen to group this in three categories, starting with detection.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=23)** The detection capabilities of Azure AI image analysis lets you do various things such as detect people, or objects, or faces in images where you are returned a bounding box with a confidence score telling you where Azure AI saw a person, or what object or face in a given image.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=42)** Azure AI can also recognize famous celebrities, landmarks, or brands.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=47)** So for example, if you were to submit a picture of, say, the Eiffel Tower, it'll tell you this is Eiffel Tower.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=53)** Next, analysis.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=55)** So analyze features will let you input the image and give it a caption.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=60)** This is a dog sticking its head out of a window.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=63)** That would be a caption for an example image, or do OCR, or tag images for easy searching.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=69)** Imagine that you are an advertising agency with lots of images and you want to be able to search them using tags using AI or identify an image as line art or clip art, or identify its color scheme so perhaps you could do things like modify the CSS of your entire website based on the user's uploaded image.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=89)** And then there are a bunch of other capabilities that don't affect detect or analyze, such as detection of adult racy or gory content in a picture, or to do smart cropping of a picture and therefore generate useful thumbnails of an image.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=107)** These are the kinds of things that image analysis lets you do.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=111)** So the question is, how can you use it?
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=114)** Well, it's pretty simple.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=116)** You provision a resource in Azure, specifically the vision service.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=120)** Then you call the API with your image and an authentication token.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=124)** So when you provision that resource, the vision service, you'll be given an authentication token, and calling the API can be done over [[Representational State Transfer (REST)|rest]] or via SDKs.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=133)** The image must follow certain criterion, certain limitations of course, and then the API will return your results.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=140)** And in that API, the API is pretty rich that you can specify things like, hey, I'd like these things to be returned.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=147)** I'm asking image analysis to do the following things.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=151)** Another important part here is Azure AI Custom Vision.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=155)** So here, you can build your own image identifier models, and there are two main features in which Custom Vision functionality can be divided into.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=168)** The first is image classification, which applies one or more labels to an entire image.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/image-analysis?u=76281980&t=173)** And the second is object detection, which is similar, but it returns the coordinates in the image where the applied labels are found.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (5), url (1), ocr (1), css (1)
> **Analogies:** picture (3), such as (2), for example (1), imagine (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Face service](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=0)** - [Tutor] Next, let's talk about face service.
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=3)** Well, it allows you to detect, recognize, and analyze human faces in a submitted image.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=10)** Now it is worth pointing out that the face service access is limited based on eligibility and usage criteria in order to support [[Microsoft]]'s [[Responsible AI]] principles.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=21)** So face service is only available to Microsoft managed customers and partners.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=26)** They just want to make sure you're using this responsibly, like not violating human rights, et cetera.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=32)** So here are some examples of things that you can build using the Face API.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=37)** First, you can verify user's identity.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=40)** The idea here being that you can verify a person against a trusted face image.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=46)** This verification could be used to grant access to digital or physical properties such as a bank account, access to a building, and so on.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=54)** In most cases, the trusted face image could come from say, a government issued ID such as a passport or driver's license, or it could come from an enrollment photo taken in person.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=66)** Well, how do they guard against me showing a photograph of a person?
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=71)** Because there is another feature in here called liveness detection, which makes sure that you're not showing a photograph, but it's actually a real person standing in front of a camera that you're using to detect.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=83)** Speaking of liveness detection.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=85)** So liveness detection is an anti-spoofing feature that checks whether a user is physically present in front of the camera.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=93)** It's used to prevent spoofing attacks using a printed photo, recorded video, or even a 3D mask of the user's face.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=102)** So combining liveness and verification, you can now build a fully touchless access control like science fiction, right?
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=113)** So that's the idea.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=114)** So another thing that you can do is face redaction.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=118)** So imagine that you are in a scenario where you want to take a picture of an environment where there are people's faces, but you don't have the consent of those people to be present in the picture.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=130)** So how do you protect their [[Privacy]]?
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=132)** Well, of course you could open a photo editing program and start blurring the faces manually.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=137)** That's going to be a lot of work. Or you can use AI to do that.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=141)** And you can simply ask the Face API to blur human faces to protect the privacy of the individuals in that picture.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=150)** So how exactly does Face API work?
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=153)** Well, when you call the Face API, which is a matter of calling a simple [[Representational State Transfer (REST)|rest]] API, you submit an image and you get some results back.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=161)** The results that you are going to get back, it'll tell you where in the image the face is.
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=167)** Usually represented by a face rectangle, which is a set of pixel coordinators from left top, width, height of the detected face.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=175)** Then you get a unique face ID.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=178)** A unique face ID is a unique identifier string for each detected face in an image.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=184)** Face ID requires limited access approval for which you can apply, filling out a simple intake form for Microsoft.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=191)** Then you get face landmarks.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=193)** Landmarks are a set of easy to find points on a face such as your pupils, the tip of your nose, eyebrows, et cetera.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=201)** By default, there are 27 predefined landmark points on anybody's face.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=206)** Then you get attributes.
>
> **[3:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=208)** Attributes may have many things such as what kind of accessories the person was wearing, the kind of blur exposure, whether the person was wearing glasses, their head poses, how their face was occluded, whether they're wearing a mask, and so on, so forth.
>
> **[3:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=223)** So how do you use the Face API?
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=226)** Well, I think you can guess this, but it's actually pretty simple.
>
> **[3:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=228)** You provision a resource in [[Microsoft Azure|Azure]].
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=231)** Basically the Azure AI vision services, get an access key call an API.
>
> **[3:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=237)** And that means submitting an image that matches certain parameters and you receive results, as simple as that.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=244)** And you can do this via SDKs or directly via the rest API.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=249)** Now what do the results look like?
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=251)** The results will typically look like this.
>
> **[4:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=254)** You're going to get a face rectangle, which will tell you where in the image the face is.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=260)** Then you're going to get face landmarks, exactly likes of where the pupil is, where the noses, ears, eyebrows, lips, et cetera.
>
> **[4:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=268)** And you get the attributes that you ask for.
>
> **[4:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=271)** And this is an array.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=272)** Because one picture can contain multiple faces.
>
> **[4:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/face-service?u=76281980&t=275)** So this is an array of detected faces that you get back in the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Privacy]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft Azure|Azure]] (2), [[Responsible AI]] (1)
> **Analogies:** such as (4), picture (4), imagine (1)
> **Env Vars:** api (8)
> **Definitions:** is an  (3), is a  (3)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [tutor] (1)

#### [Video analysis](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=0)** - [Instructor] Now let's talk about video analysis in [[Microsoft Azure|Azure]] AI Vision services.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=5)** Video analysis allows you to input a video or even a video stream and do spatial analysis or video retrieval.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=13)** What does that mean?
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=15)** Well, the capabilities of video service can be spread into two parts: spatial analysis or video retrieval.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=21)** Starting with spatial analysis.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=23)** Spatial analysis can be used to do things like detecting the presence and movements of people in the video, counting the people, as in how many people are visiting my store and how many people are leaving.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=35)** It counts the number of people in a specific zone over time.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=39)** Entrance counting.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=40)** It monitors how long do people stay in an area when they enter through a certain area, or social distancing and mask detection.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=48)** It analyzes how well people follow social distancing requirements in a space and can detect whether or not somebody's wearing a mask.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=56)** The second part is video retrieval.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=59)** Video retrieval is a service that lets you create a search index, add documents, videos, and images to it, and search through it with natural language.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=68)** Developers can define [[Metadata]] schemas for each index and ingest metadata to the service to help with retrieval.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/video-analysis?u=76281980&t=76)** And developers can also specify what features to extract from the index, like vision, speech, and then filter their search based on those features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Microsoft Azure|Azure]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Handwriting recognition with vision services](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=0)** - [Instructor] Now, let's look at a code example of using [[Microsoft Azure|Azure]] AI [[Computer Vision]] to do handwriting recognition.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=7)** Now, I'd encourage you to view this code example generically because there's so many capabilities in Computer Vision.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=14)** So click on All Resources or simply click Create a Resource in the Azure Portal.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=20)** And we're going to provision, say vision.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=23)** So I don't exactly remember what the exact name was for the service I'm trying to provision, so I'll just type vision.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=32)** Check Azure Services only so these are the ones coming from [[Microsoft]].
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=36)** And the one I'm interested in is Computer Vision.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=39)** If you remember, the Custom Vision was the one where I create my own model, but for handwriting recognition, I can simply choose to create the out-of-the-box Computer Vision service available to me.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=50)** So click on Create, choose Computer Vision, and this will guide us through a simple form that allows me to create this service.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=57)** So let's go ahead and pick a resource group.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=60)** I already have a group which is empty.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=63)** You can also go ahead and create a new one.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=65)** Let's give it a name. So I'll just pick sahilvision.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=68)** It just needs to be unique.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=70)** Pick a pricing tier.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=72)** Microsoft gives you one free tier per subscription.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=75)** So for example, I cannot create two Computer Vision instances with the free tier, since I don't have any in my subscription right now, I can pick this free tier, which limits me to 20 calls per minute or 5,000 calls per month, enough for development purposes.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=90)** So effectively for development, this is free.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=93)** You have to agree to the [[Responsible AI]] notice and click on Review and Create.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=99)** Now, there are a bunch of other things that you can specify, like restrict it to a particular network, assign a managed identity, that's common between almost every AI service you will provision in the Azure Portal.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=111)** So I'll skip over those and click on Create.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=114)** Now, in just a few short seconds, this deployment should complete.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=118)** Here we go, click on the Go to Resource button.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=122)** And here, you need to go to the keys and endpoint area under resource management and click on Show Keys.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=131)** And I'm going to copy either one of these keys and the endpoint.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=135)** These two keys are equivalent.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=137)** Microsoft gives you two keys, so it is easier to cycle them if in case you need to rotate them.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=143)** So let's go ahead and say Copy to Clipboard.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=146)** Go to my code example, which I'll walk you through in a minute, but we need to put these in the .env file.
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=153)** This is a nodeJS code example.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=156)** So in .NET, this would be a config file, and I'm sure every other platform has an equivalent.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=161)** We also need a location to the vision endpoint.
>
> **[2:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=165)** Let's go to the Azure Portal again and copy the endpoint and put that in my code like this.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=174)** Now, this is a nodeJS code example, although the concepts are same across all languages, and I'd encourage you to look at the principles and the concepts more than the actual language.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=186)** But we do need to mention things that are portable across other languages.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=191)** Like for example, if you're in .NET, what would the equivalence be?
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=194)** So in package.[[JSON]], I've taken a few dependencies to node packages.
>
> **[3:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=200)** In .NET, these would be NuGet packages.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=202)** In [[Python (Programming Language)|Python]], these would be PyPi packages.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=205)** So I've taken a dependency on three of these .env let me read config information.
>
> **[3:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=210)** And the other two are what I'm using for Computer Vision.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=214)** The .env file, as I mentioned, holds my configuration information.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=218)** What I intend to do is that the my handwriting .jpeg has got some scribble that I did in my handwriting.
>
> **[3:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=225)** I'd like to submit this to Computer Vision and I have it recognize it.
>
> **[3:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=229)** The launch.json file over here is simply to allow VS code to debug this if necessary.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=236)** Now, let's dive into index.js, and that is where bulk of our code is, and let's examine this code.
>
> **[4:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=243)** At the very top, I'm reading dotenv .config.
>
> **[4:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=246)** So it reads the .env file or environment variables, and it's makes the key and endpoint available as you can see on line number nine and 10.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=256)** Then on line number two, I get createReadStream.
>
> **[4:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=259)** This allow me to read a file 'cause I'm reading from a file.
>
> **[4:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=263)** You can also choose to process from a URL if you wish.
>
> **[4:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=266)** And then I'm also reading our Computer Vision client and APKeyCredentials.
>
> **[4:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=271)** These are what I use to communicate with the Computer Vision service in the cloud, and APIKeyCredentials is how I authenticate.
>
> **[4:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=279)** And sleep, because it allows my program to sleep for a predefined time.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=284)** You'll see why I need that in a second.
>
> **[4:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=288)** My code is structured pretty simple.
>
> **[4:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=290)** There's a method called Computer Vision which I call, so the bulk of my logic is in this Computer Vision method.
>
> **[4:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=297)** Before we enter the Computer Vision method, notice how I am creating the Computer Vision client on line 12.
>
> **[5:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=303)** Basically, whenever we call the AI services that Microsoft has given us, we need to send this key under Ocp Apim Subscription Key header.
>
> **[5:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=314)** This is important because this is how Computer Vision will authenticate that this is my subscription and I'm allowed to call it.
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=323)** Okay, now, let's scroll down to the actual code.
>
> **[5:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=327)** So what we are doing over here is that we are calling a function called readTextFromFile, and we get the printed result and then we write out that text.
>
> **[5:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=339)** So what is happening in read text from a file?
>
> **[5:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=342)** Basically what is happening here is that I call a function called readInStream, and I pass in the file as a stream.
>
> **[5:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=352)** Now, if you were passing in a URL, you would just say client.read, and the [[Representational State Transfer (REST)|rest]] API equivalents have similar constructs as well.
>
> **[6:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=360)** You're welcome to look that up in the reference.
>
> **[6:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=361)** So basically, you send the body of the file that you're trying to read as a parameter, then AI will not immediately return your results.
>
> **[6:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=372)** What AI does is that it takes that file in and starts working on it.
>
> **[6:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=377)** This operation is usually quick for a small file, but what if you had a multi-page PDF?
>
> **[6:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=383)** That may take some time, so it returns you a location for your operation.
>
> **[6:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=390)** Then every second we ping that location and wait until the status is succeeded.
>
> **[6:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=396)** Once it is succeeded, we return the results and this print recognized text is going to write out the results.
>
> **[6:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=405)** If you were to submit a multi-page document like a PDF or a TIFF, the results come back as an array.
>
> **[6:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=413)** So next, we go down to the print recognized text, and we simply go through the pages that we return.
>
> **[6:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=419)** Now, I will have only one page because I'm working with a JPEG file, but if this was a PDF or TIFF, as I mentioned, you would get multiple pages, and we simply write out the results.
>
> **[7:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=430)** That's it. That's really how simple this is.
>
> **[7:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=433)** Let's go ahead and run this.
>
> **[7:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=436)** So I'm just going to hit F5 to run this, and this is the text that Azure AI recognize.
>
> **[7:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=444)** My handwriting, exceptionally bad.
>
> **[7:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=446)** I wonder if AI will recognize it.
>
> **[7:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=449)** Question mark, let's try Sahil.
>
> **[7:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=451)** Let's look at the image that I submitted.
>
> **[7:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=455)** My handwriting is exceptionally bad.
>
> **[7:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=458)** Okay, not bad, right?
>
> **[7:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=461)** Look at the text generated by AI versus what I had written.
>
> **[7:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=465)** And let's be honest, my handwriting is exceptionally bad.
>
> **[7:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-handwriting-recognition-with-vision-services?u=76281980&t=469)** So try submitting your handwriting and see if you get better results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (15), [[Microsoft Azure|Azure]] (6), [[Microsoft]] (4), [[JSON]] (2), [[Responsible AI]] (1)
> **Env Vars:** net (3), pdf (3), url (2), tiff (2), api (1)
> **UI Navigation:** click on (6), go to (4), scroll down (1)
> **Code Identifiers:** nodejs (2), createreadstream (1), readtextfromfile (1), readinstream (1)
> **Tools:** azure portal (3), vs code (1)
> **File Paths:** package.json (1), launch.json (1), index.js (1)
> **CLI Commands:** node (1), python (1)
> **Definitions:** is a  (2)


### 2. Speech

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI speech services](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=0)** - [Instructor] Next, let's talk about understanding [[Microsoft Azure|Azure]] AI Speech services.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=5)** As you can imagine, Azure AI Speech services deals with voice.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=9)** It allows you to input audio, voice, and convert it into text and recognize speakers, so there are multiple people talking, who does this voice belong to?
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=20)** It'll even allow you to do translations, recognize intent so you can create voice-driven applications or convert text to speech, so a lot of capabilities here.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=32)** How does this work?
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=33)** Well, you take an audio file or an audio source, and you submit it to an API that you provision in Azure with a key so the API can authenticate you, and through it, you get various capabilities.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=47)** You have the ability to convert that audio file or source to text, readable text, searchable text, or the ability to recognize speaker.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=57)** So you create a library of speakers and you submit a sample audio, and it'll tell you who this voice belongs to.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=64)** It'll allow you to recognize intent so you create voice-driven applications.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=69)** "Hey, turn the lights on." Something like that.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=72)** Or it'll allow you to perform translations between languages, so English could be translated into French or Chinese or whatever.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=79)** You can also go the other way around.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=82)** What I mean by that is that you can take a text file, and you can get spoken text out of it.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-speech-services?u=76281980&t=89)** The spoken text sounds quite natural, and it is quite amazing the level of control you get on the generated spoken text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3)
> **Env Vars:** api (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Speech to text](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=0)** - [Instructor] Now let's talk about a very important part of [[Microsoft Azure|Azure]] AI speech service, which is speech-to-text.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=6)** Can you guess what speech-to-text means?
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=8)** Well, obviously, it's spoken audio converted to text, but you have the ability to upload an audio file or connect it to an audio stream and do it as a batch or [[Real-Time]].
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=21)** It supports all of that, and it does so in multiple languages.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=25)** So you have the ability to do real-time speech, to text transcription, real-time speech-to-text transcribes audio as it is recognized from a microphone or a file.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=37)** And it is ideal for scenarios where, let's say, you want to show captions or subtitles for a live meeting.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=43)** Maybe think of a UN meeting where people from various countries are talking and people from various countries need to understand each other.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=52)** So you have the ability to see this captions get generated on the fly using real-time transcription.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=59)** Then you have fast transcription.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=62)** Fast transcription is the fastest synchronous output for situations with predictable latencies.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=69)** The idea being that it works on audio files where you need to return results faster than real-time.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=75)** Say, you want to very quickly transcribe an entire prerecorded interview and fast transcription will work synchronously.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=83)** So you submit the file and you want to get the results back.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=87)** It works faster than real-time, or you can do batch transcription, which batch transcription, you do efficient processing of large volumes of prerecorded data and it works asynchronously.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=101)** Submit a bunch of data as an audio and then you keep checking whether it's done or not.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=106)** So there are these different flavors you can use speech-to-text in.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=111)** Speech-to-text, well, there's the out-of-the-box capabilities where it's easy and fast to implement.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=117)** You don't need to have any training data.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=119)** It's just a matter of provisioning speech service in the cloud and start using it.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=124)** Well, the downside though is that you may get lower accuracy for domain-specific terminology.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=130)** In my experience, the accuracy is pretty good, but where you may have, let's say, deep down medical terminology, which obviously Azure is not trained to do, maybe it'll fall short on that, but there's a way out, and the way out is custom speech.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=148)** In custom speech, you get improved accuracy for domain-specific terminology.
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=153)** The idea being that you have a bunch of files that you have already transcribed, that you would upload them and create a training model.
>
> **[2:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=162)** Now, don't worry, this does not require you to be an AI expert.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=166)** All you have to do is upload the files and inform Azure AI that, hey, this file is actually this text and Azure AI will sort of learn from your files.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=175)** Of course, there is some training data and costs and effort involved.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=178)** You have to maintain the model, but at least you'll get better results where the out-of-the-box speech API doesn't work for you.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=185)** So what is the custom speech workflow look like?
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=189)** Well, it starts with [[Data Collection]].
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=191)** You would gather relevant audio files and corresponding transcripts, and these should represent the acoustic conditions, vocabulary and speaking styles of your target application.
>
> **[3:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=203)** Then you prepare the data, which means you pre-process the audio files and transcripts to meet Azure's requirements.
>
> **[3:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=209)** Maybe this means formatting, noise reduction, and segmentation.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=214)** Then you create the model out of it, which means you upload your data to Azure Speech Services and you create a custom speech model.
>
> **[3:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=223)** And then you can choose from various model types like acoustic language, pronunciation, et cetera.
>
> **[3:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=228)** Don't worry, this is just a matter of calling an API.
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=231)** Then you do model training.
>
> **[3:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=234)** Again, this is just a matter of calling an API.
>
> **[3:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=237)** The idea being that this is where Azure is thinking.
>
> **[4:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=240)** It trains your custom model using your uploaded data.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=244)** This process can take several hours to several days depending upon the dataset size.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=249)** And then you test your model.
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=251)** You evaluate your custom model's performance using test data.
>
> **[4:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=255)** That is data that you've never submitted to Azure before, but it represents your domain.
>
> **[4:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=262)** And then you can compare the accuracy to the baseline model.
>
> **[4:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=265)** And then finally, when you're happy with it, you can deploy it using Azure Speech Services APIs and SDKs and start using it in your production applications.
>
> **[4:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=276)** Another important facet to consider here is model expiration.
>
> **[4:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=280)** See, the idea is that [[Microsoft]] is continuously improving on these speech models.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=285)** And what I mean by that is that there are base models that Microsoft works on and then you can do custom models on top of that.
>
> **[4:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=295)** So Microsoft creates the base model and they can do so in any month of the year and sort of round that up to the start of the quarter, like January, April, July, October 15th.
>
> **[5:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=306)** And then from one year onwards, the model is available for training, as in for custom speech.
>
> **[5:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=312)** And then two years, hence, it is available for transcription.
>
> **[5:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speech-to-text?u=76281980&t=316)** So this is how Microsoft gives you enough time to stay up-to-date with the newer models, and therefore gain the benefits of the newer models without causing an unexpected outage in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Real-Time]] (6), [[Microsoft]] (4), [[Data Collection]] (1)
> **Env Vars:** api (3)
> **Speakers:** - [instructor] (1)

#### [Text to speech](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=0)** - [Instructor] Next, let's talk about yet another very important building block of [[Microsoft Azure|Azure]] AI Speech Services, which is text to speech.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=7)** Can you guess what text to speech does?
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=11)** Well, it converts written text into human-like synthesized speech.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=17)** The generated quality of the synthesized speech doesn't sound like a robot.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=21)** It sounds very, very natural.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=22)** We'll see this in a demo shortly as well.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=25)** So it supports multiple languages, which means there are more than 45 languages and variants supported at the time of recording this course.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=34)** And this list keeps growing.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=36)** You have the ability to support voice, roles and styles.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=40)** So for example, when you ask the text to be generated to speech, you can ask it to be cheerful, excited, whispering, sound like a newscast, affectionate, and so much more.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=54)** Now, not all voices and roles and styles are available in each language, and you can look up Azure reference to be able to see what is supported in the language of your choice.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=65)** You also have something called visemes.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=68)** What this means is this is a visual description of spoken text.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=73)** So imagine that you generate text to speech, but what if you wanted to show a talking face next to it?
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=81)** So visemes will show you exactly how the lips move and at what point, and connected that to the generated audio.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=88)** So that way you can create a face, a talking face, in addition to just the generated audio.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=97)** So right out of the box, you get a prebuilt neural voice.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=101)** What I mean by that is that there are some ready to use voices available for you in various audio qualities.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=108)** And these out of the box neural voices, they sound pretty good.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=113)** [[Microsoft]] has already built them for you, but of course they're pre-built.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=118)** That means they're available to all Microsoft customers.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=122)** What I mean by that is if you want branding specific to your company, maybe this won't work for you because you don't want somebody else using the same voice.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=132)** So in that scenario, you can do a custom neural voice.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=136)** In custom neural voice, you can add one to two hours of custom voice training data that can then create a voice that represents your brand.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=146)** What if you wanted to go one step deeper?
>
> **[2:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=149)** Personal voice.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=151)** So personal voice is you need to add four to six hours of training data to create a very natural sounding voice that represents a person.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=160)** I hate to say this, but you could literally take my voice off of this course and create a personal voice model, and then you can have me say anything.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=168)** AI is getting scary, isn't it?
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=170)** But yes, these are the capabilities.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=172)** Now, luckily, when we work with Azure, they do put some guardrails that you have to work with Microsoft to see what you intend to use this for.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/text-to-speech?u=76281980&t=180)** At least that's the world we are in right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft]] (3)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Speaker recognition](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=0)** - [Instructor] Now let's talk about a fascinating capability of [[Microsoft Azure|Azure]] AI Speech Services, which is speaker recognition.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=7)** This is the ability of a computer, as in backed by Azure AI, of course, to listen to a voice and recognize who the voice belongs to.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=16)** This is a voice that the computer has never heard before.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=20)** So, my voice submitted as I'm talking right now could be submitted, and as long as I have a pre-built data set of my voices, not speaking this text, but text I've spoken before, you could create a model and have the computer recognize that this is sale.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=36)** That's the idea here.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=38)** You can use this for identification, as in who is the person speaking, or verification, which is speak something to gain access to a system.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=49)** So how does this work?
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=51)** Well, you create an identification profile.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=54)** So the idea is that any speaker that you want to have in your database, in your model, you would get about 30 seconds of their spoken audio.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=63)** So it has to be 30 seconds or more, and you would upload that into Azure AI and basically create a model for this, and you need to repeat this process for every additional speaker.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=75)** And then you get the identification profile for a given speaker.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=81)** Then, you have a bunch of identification profiles created.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=86)** So imagine that I have five identification profiles created.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=90)** Well, there are four blocks here, but five, 10, whatever, right?
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=93)** Now, once I have created these identification profiles, I would then submit a sample audio, a sample audio that was not used to create any of these identification profiles, but the sample audio has been spoken by one of the speakers to which these identification profiles belong.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/speaker-recognition?u=76281980&t=113)** Then, you submit this to Azure Speaker Recognition, and it will tell you who the identified speaker is out of those identification profiles, and this is how Azure AI speaker recognition works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Translation](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=0)** - [Instructor] Yet another amazing capability of [[Microsoft Azure|Azure]] AI Speech services is translation.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=6)** Translation API allows you to do speech-to-text or speech-to-speech translations between many naturally spoken languages.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=16)** So, how does it work?
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=18)** Well, you have the translation service, which is part of the Speech API.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=23)** You submit an audio stream to it, and you get translated text out of it, simple.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=29)** So I'm speaking English, but one of my listeners understands French.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=34)** I can submit my audio stream to the translation API, and it can generate French translated text.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=41)** And this is how this works.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=43)** You can go a step further.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=44)** Why just stop at text?
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=46)** Why not do translated speech so the person could listen to me in French or any one of the supported languages?
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=55)** Or you can even do multilingual speech translation.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=60)** And this is the capability of translation APIs that allows you to go even further.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=64)** You consume an audio stream in an unspecified input language.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=69)** The translation API will detect the language for you.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=73)** It'll translate it in multiple languages on the fly.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=77)** So imagine that there is a meeting between five people, and all five of them speak different languages.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=83)** The translation API can understand what language is being spoken, translate it on the fly, and output the language in the user's preferred language choice.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/translation?u=76281980&t=95)** And this is the capability of the translation part of Azure AI Speech services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **Env Vars:** api (5)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Intent recognition](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=0)** - [Instructor] Another amazing capability of [[Microsoft Azure|Azure]] AI Speech Services is intent recognition.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=5)** There was a precursor to this called as LUIS, Language Understanding Intelligent Service, which is now on the way to deprecation, but the capabilities have been absorbed under this umbrella, which is intent recognition.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=19)** Let's see how this works.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=21)** Intent recognition helps you connect spoken text into what the user intends to do.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=26)** In other words, it'll let you create speech-driven applications.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=31)** There are two categories here.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=33)** One is pattern matching.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=34)** Think of this is as a little bit more exact.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=38)** And the second is conversational language understanding where you want to understand the user's intent and you're giving the user a little bit more flexibility.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=48)** So let's understand this a little bit better.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=51)** Pattern matching.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=52)** The way this works is that it is based on strict matching where you need accurate and quick offline solutions.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=59)** Like, hey, insert your favorite assistant name or something like turn the lights on.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=65)** Or when you get inside an elevator and you say, go to floor nine, right?
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=72)** There is no confusion there.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=73)** Go to floor nine.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=75)** Well, there are 10 floors in the building.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=77)** Go to floor nine.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=78)** It's pretty obvious what that means, right?
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=81)** The other flip side of this is conversational language understanding, where you want to offer a little bit more flexibility, and you want to understand natural language and understand the overall intent of an incoming utterance and extract valuable information from it.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=98)** Let's understand these a little bit better.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=101)** So pattern matching, for example, I'm sure you've used this whenever you've called a 1-800 number.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=106)** What do you hear on the other side?
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=108)** It'll tell you, please select from the following menu items.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=111)** And the menu items are like one, two, three, four or press zero for, you know, whatever.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=117)** Well, the choices are pretty straightforward.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=119)** It's one, two, three, four or zero.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=121)** There is no other choice here.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=123)** So the user is going to say one of those words, and if one of those words doesn't match, then you return an error.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=132)** But the idea here is that you need to be accurate, quick and offline.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=136)** And that is how pattern matching works.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=138)** On the flip side, conversational language understanding is a little bit different.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=144)** So for example, I could ask the same question in multiple ways, right?
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=150)** What is the stock price of [[Microsoft]]?
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=151)** What is the current price of Microsoft?
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=153)** What is Microsoft trading at?
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=155)** See, there's an important takeaway here.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=159)** All of these mean the same thing.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=161)** I'm asking the same question, but in different ways.
>
> **[2:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=165)** This is how us humans, this is how we talk, but there are two key things that are being pulled out of here that I'm interested in the symbol MSFT, okay?
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=176)** And I'm interested in the price.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=178)** Now, in terms of conversational language understanding, this is called as an entity.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=184)** So I've extracted the entity, MSFT out of this, and the intent is get price.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=190)** Another intent could be sell, another could be buy.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=195)** You get the idea.
>
> **[3:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=196)** So look at the prompts or utterances on the left hand side, and let's try and digest these a little bit more.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=205)** Imagine this, all of those utterances can be fit into certain patterns.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=213)** I'm not saying that this is the exhaustive list of patterns.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=217)** However, you can obviously create a model.
>
> **[3:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=221)** And then based on experience, you can add to this list of patterns.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=226)** And that defines my intent.
>
> **[3:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=229)** And out of that, there is an entity which is in the place of symbol.
>
> **[3:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=234)** So now, instead of Microsoft, I could say [[Google]], for example, and the symbol gets replaced by Google 'cause that's the entity I'm interested in.
>
> **[4:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=243)** So how does this work?
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=245)** You create this collection of intents as I showed you, and you create a model out of it.
>
> **[4:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=252)** You have a collection of these models and you feed them into the recognizer.
>
> **[4:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=257)** All of this can be done via the Azure AI APIs or SDKs.
>
> **[4:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=263)** Now, once you have this recognizer created, then you submit an utterance.
>
> **[4:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=268)** This is what the user said.
>
> **[4:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=270)** What is the stock price of Microsoft?
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=272)** Or what is the stock price of Oracle?
>
> **[4:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=275)** Whatever it might be, right?
>
> **[4:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=277)** And out of this, you extract the recognized intent that the user is interested in getting the price of what?
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=285)** Of the entity, which is Microsoft.
>
> **[4:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/intent-recognition?u=76281980&t=288)** And this is how conversational language understanding works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (6), [[Microsoft Azure|Azure]] (2), [[Google]] (2)
> **Definitions:** in other words (1), is a  (1), is called (1), is an  (1)
> **Analogies:** for example (3), imagine (1)
> **Env Vars:** msft (2), luis (1)
> **UI Navigation:** go to (3)
> **Speakers:** - [instructor] (1)

#### [Demo: Text to speech](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=1)** - Now let's look at a demo of using [[Microsoft Azure|Azure]] AI speech services to do text to speech.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=7)** It's pretty simple.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=8)** I'm logged into my Azure portal under all resources, I'm going to click on create and search for the [[Microsoft Word|word]] speech.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=17)** Okay, let's select the first choice here.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=20)** I'll say Azure services only.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=24)** Scroll down a little bit.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=27)** And the first choice over here is the speed service that is part of Azure AI services.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=33)** So this is what I want.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=35)** I'm going to click on create and I'm going to choose to put this in a resource group.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=41)** I already happen to have one, so I'll pick that and I'll give it a name.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=45)** I'll call it Sahil Speech and choose the free tier.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=50)** [[Microsoft]] will allow you to create a free tier one per subscription, so I can use that over here and click on review and create.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=60)** You can choose to limit the network to which your service is accessible and assign a managed identity if you wish.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=67)** Now a few short seconds later, the speech service is provisioned.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=71)** Go to resource management, go to keys and endpoint and choose to click on show keys.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=78)** Now here you're shown two equivalent keys.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=82)** Again, like any other AI service, Microsoft gives you two keys, why?
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=86)** So you can use them interchangeably, makes rotating them a little bit easier.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=90)** Go ahead and copy the key and the location and let's dive into code.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=96)** So the region I have already written out, the key I got from my subscription and now let's start writing some code.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=104)** So again, this is a node JS code example.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=107)** So I'll walk you through concepts and mention the relevant equivalent concepts in dot net and [[Python (Programming Language)|Python]] as we move along.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=115)** Package [[JSON]] is where I define all my scripts and the dependencies I take a dependence on.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=121)** So I've taken a dependency on something called dotenv, which lets me read configuration files and Microsoft Cognitive Services speech sdk.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=132)** In dotnet, you would've nuget packages doing the same work.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=135)** In Python, you would have pypi packages doing the same job.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=138)** Now I'm going to go into index.js.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=143)** The code is really simple.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=145)** What I intend to do is that I intend to pass this input audio wave file and I want text return.
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=153)** That is one example of what we could do.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=156)** The other example that I'd like to do is, I'd like to pass in some text, like this is some sample text and I'd like to write that out as a file, pretty simple.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=170)** So let's look at this code a little bit closer.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=174)** The uncommented code you see over here is going to take the input text, in this case, this is some sample text and given some configuration information up here, it is going to write out a file called outputaudio.wave.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=190)** It's actually pretty simple how we use this.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=193)** I'm saying const speechConfig and I pass in the key and the region and then I pass in the configuration information as in what language I'm interested in, the voice and the quality.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=206)** Then I pass in some configuration information and I create an instance of a synthesizer object on line 13.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=214)** And using the synthesizer object, given the speech config and the audio config, I simply call speak text async, which is going to write out that file into this wave file.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=226)** It's pretty straightforward.
>
> **[3:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=228)** Let's also look at the reverse just for academic reasons, let's call it.
>
> **[3:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=232)** That I have some commented code that I'd encourage you to uncomment and try out as well, where I have some input audio that I'm passing in and using sdk.speech recognizer.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=245)** Instead of synthesizer, now we use recognizer.
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=247)** We pass in the same speech config and the audio config, give it a language that we're recognizing in this language and we write out the text that whatever that audio file had that was recognized.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=260)** That's it.
>
> **[4:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=262)** So let's go ahead and run this.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=264)** As you can see that I do not have an output audio wave over here.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=269)** Let me just go ahead and run this code example.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=272)** Once this code example is done running, an output audio.wavefile is created.
>
> **[4:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=279)** Now let's listen to it.
>
> **[4:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=282)** - [Computer Speaker] This is some sample text.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=285)** - [Instructor] That's great.
>
> **[4:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=286)** It was actually pretty clear.
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=287)** It says, this is some sample text.
>
> **[4:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=291)** That's really how simple it is.
>
> **[4:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=293)** Now, again, just for completion sake, let's go ahead and comment out this portion here and uncomment out the text to speech or speech to text this time.
>
> **[5:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=313)** What is this code going to do?
>
> **[5:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=315)** It is going to take that inputaudio.wave file, and it is going to write out what it thought it heard.
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=323)** Let's go ahead and run this.
>
> **[5:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=327)** And running it has produced the following result.
>
> **[5:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=329)** Recognize text, hello, this is a test of [[Speech Recognition]] API.
>
> **[5:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=335)** Let's listen to this input audio file that I recorded a moment ago.
>
> **[5:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=340)** Hello, this is a test of the speech recognition API.
>
> **[5:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=344)** There you go. That's exactly what I had said.
>
> **[5:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-to-speech?u=76281980&t=345)** And this is how speech recognition, text to speech and speech to text works using Azure AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft]] (3), [[Speech Recognition]] (3), [[Python (Programming Language)|Python]] (2), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (4), go to (2), select the (1), scroll down (1)
> **CLI Commands:** python (2), node (1), dotnet (1)
> **Env Vars:** api (2), json (1)
> **Definitions:** is a  (3)
> **Speakers:** - now (1), - [computer (1), - [instructor] (1)
> **File Paths:** index.js (1)
> **Code Identifiers:** speechconfig (1)


### 3. Language

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI language services](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=0)** - [Instructor] Now let's dive deeper into yet another important capability of [[Microsoft Azure|Azure]] AI Services, which is Language services.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=8)** Azure AI Language services lets you make sense of conversational natural language.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=14)** Okay, I couldn't find a better way to describe this, but think of it this way.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=19)** Computer programs are exact and our conversation isn't.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=22)** Can we somehow bridge this gap?
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=24)** That we can supply a natural text that we speak to Azure AI, have it return something that makes sense for us?
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=31)** Like extract valuable information, summarize it, detect language sentiment, maybe even answer questions.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=38)** That is exactly what Azure AI Language services allows you to do.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=43)** So what are some interesting capabilities?
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=46)** Well, it'll allow you to extract information out of submitted text, and that means extract key phrases, linked entities, named entity recognition, or detect personally identifiable information and more.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=62)** It'll allow you to summarize text.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=64)** So you give it a large document or a lengthy conversation and it'll summarize it for you.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=70)** It'll allow you to classify text like sentiment analysis or mining for opinions or detecting the language of submitted text or even custom text classification.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=81)** It'll allow you to do things like question answering.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=84)** Let's say you have a lot of [[Unstructured Data]] and people are asking questions that requires you to go back to that data and answer those questions.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=93)** Would it be nice to turn that into question-answer pairs?
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=97)** Exactly, and then turn that sort of like into a fact.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=101)** That is question answering.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=102)** You can have conversational language understanding, CLU, for short, and this is exactly what I talked about in the speech portion, which is it allows you to predict incoming utterances and extract valuable information from it, or you have the ability to translate text between multiple languages.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-language-services?u=76281980&t=122)** So these are the capabilities of Azure AI Language services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Unstructured Data]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** clu (1)
> **Speakers:** - [instructor] (1)

#### [Extract information](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=0)** - [Instructor] Let's dive deeper into the extract information part of [[Microsoft Azure|Azure]] AI Language Services.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=6)** It'll allow you to extract valuable information from unstructured text.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=11)** What are the various things that fall inside this bucket?
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=15)** Well, it'll allow you to do things like extract key phrases.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=18)** What I mean by that is given an input text, it'll allow you to quickly identify main concepts in the text.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=24)** Like I say, I went to the doctor and got my eye prescription updated.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=27)** So doctor and eye prescription are the key phrases in this text.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=32)** Second, it'll allow you to find linked entities.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=36)** What I mean by that is that it'll help you disambiguate entities and text like this submitted text.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=41)** Empire State Building is an entity.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=45)** It'll be nice to get, let's say a Wikipedia link to exactly what that entity means.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=50)** That is what find linked entities will allow you to do.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=54)** You can do things like named entity recognition that allow you to supply unstructured text and Azure AI will attempt to identify important entities in the text, such as person, person type, location, organization, et cetera.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=69)** The full list keeps evolving and you can find the list at the link shown over here.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=75)** Custom named entity recognition will allow you to build on top of it.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=79)** So it'll allow you to build custom AI models to extract domain specific entities from unstructured text.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=88)** So by creating a custom named entity recognition projects, you can iteratively label data, train and evaluate and improve the model performance for your domain.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=99)** Then another important capability here is text analytics for health.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=103)** So text analytics of health is like named entity recognition that is used to perform a semantic extraction of words and phrases mentioned from unstructured texts that are associated with any of the supported entity types such as diagnosis, medication name, symptoms, sign, age, et cetera.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=122)** So there are a lot of other capabilities in here like relation extraction is used to identify meaningful connections between concepts mentioned in the text that are associated with any of the supported relations, such as time of condition relation.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=137)** Entity linking can be used to disambiguate extracted entities by associating them with preferred names and codes as per the UMLS, the Unified Medical Language System Metathesaurus or assertion detection can be used to preserve the meaning of medical content by adding contextual modifiers to the extracted entities using certainty, conditionality, association and temporality.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=164)** Then you have the ability to do custom text analytics for health, where you can build on top of the text analytics for health that is available to you out of the box with your own data and labeling.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=176)** And you can use this to improve the results specific to your domain.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=180)** And you can also use extract information for PII detection, personally identifiable information, which will allow you to identify and categorize and redact sensitive information in unstructured text.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/extract-information?u=76281980&t=194)** Things like credit card numbers, first name, last name, social security number, and so on, so forth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **CLI Commands:** find (3)
> **Analogies:** such as (3)
> **Env Vars:** umls (1), pii (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Summarize content](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=0)** - [Instructor] Next, let's talk about another fascinating capability of [[Microsoft Azure|Azure]] AI Services called summarized content.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=7)** Summarized content will allow you to take large amounts of input text as text or a conversation, or as a document, and then create a gist of it, a summarized version, that you can quickly ground.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=19)** This is how it works.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=20)** You can either do text or document summarization.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=23)** The idea being that either you submit a bunch of unstructured text, or you can submit a document as either text or PDF or DOCX.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=32)** and you can get extractive or abstractive summarization of the submitted content, or you can do conversation summarization.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=40)** What we mean by conversation summarization is it can summarize a conversation between multiple parties, something like as a recap, which summarizes a conversation into a brief paragraph, or like a issue resolution summarization.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=56)** Think of it as like call center specific features that give you a summary of the issues, and what was the final resolution of that issue.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=64)** Or you can do chapter title summarization, so you can segment a conversation into chapters based on the topics discussed in the conversation, and it can give suggested chapter titles to the input conversation.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/summarize-content?u=76281980&t=78)** Or you can do narrative summarization, which generates detailed call notes, meeting notes, or chat summaries of the input conversation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **Env Vars:** pdf (1), docx (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Classify text](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=0)** - [Instructor] Another fascinating capability of [[Microsoft Azure|Azure]] AI Services is classify text.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=6)** What does it allow me to do?
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=7)** Well, it allows me to submit text and classify it, and sentiment is one kind of classification.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=14)** Think about it.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=15)** When I say I'm feeling great today, is this positive or negative?
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=18)** That's kind of classifying text, isn't it?
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=21)** That's detecting sentiment.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=23)** So what are the kinds of things that Azure AI classify text allows me to do?
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=28)** As I mentioned, detect sentiment, so it analyzes sentiment as negative, neutral or positive.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=35)** And you can optionally do opinion mining as well.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=39)** So the thought is that you submit some text and it'll give you a confidence score, whether this is positive, negative or neutral.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=45)** And like I say, this omelet tastes great, well, that's obviously a positive sentence because you know why, I'm praising the omelet.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=55)** It is great.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=56)** However, great is an opinion.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=59)** Think of opinion as granular information related to the words and where the out of the box opinion mining isn't working well for you, you can enhance it with custom labels on text as well.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=71)** Next is language detection.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=74)** As the name suggests, you submit, input text and AI will automatically determine what language this text is in.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=82)** Like is it Russian, English, or Chinese?
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=84)** Or one of the many languages that Azure AI understands?
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=88)** Certain languages also support multiple scripts and it'll even help you determine the script of the input language.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=96)** Now think of classification as very generic.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=99)** That is where custom text classification comes in.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=102)** The idea being that you create a model that submits your needs.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=108)** So for example, a submitted book, is this romance or thriller?
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=112)** That's classification, isn't it?
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=114)** What else could you do with it?
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=115)** For example, let's say you have built a [[Customer Support]] ticketing system.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=120)** Would it be nice if we could analyze the text of the incoming ticket and automatically classify it?
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=128)** How would classifying your incoming emails into priority, addressed just to you, et cetera?
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/classify-text?u=76281980&t=135)** That would be custom text classification.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Customer Support]] (1)
> **Analogies:** for example (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Answer questions](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=0)** - [Instructor] Yet another amazing capability of [[Microsoft Azure|Azure]] AI services is answering questions.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=6)** Okay, this is not exactly like the [[Large Language Models (LLM)|large language models]], which can answer any question.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=12)** This is answering questions based on your data.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=15)** So, this capability allows you to create a natural conversational layer on top of [[Unstructured Data]].
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=23)** Think of it this way, that you have a lot of documents, and wouldn't it be nice to turn those documents into a chat bot?
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=30)** That's exactly what this allows you to do.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=32)** So this is low code, as in it allows you to build chat bots using a portal.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=38)** Of course, you can do this with APIs and do non low-code as well, but certainly with low-code, just by uploading documents or pointing it to a location, you can build a solution.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=49)** You can do multi-term conversations, which means you can allow the bot to guide the conversation, connection, questions, and refine the search for an answer.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=59)** For example, let's say we've got a lot of unstructured data about computer processors.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=65)** So can we ask the user questions and kind of guide the user to what kind of processor they're looking for?
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=70)** That is what multi turn conversations will allow you to do.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=74)** And you can do iterative improvement, the idea being that as the application gets used, you can add [[Metadata]], you can add more data, you can add questions, tests, and keep improving this in a loop and keep improving your results.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/answer-questions?u=76281980&t=87)** And that is what the question/answering capability of Azure AI services allows you to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Unstructured Data]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Metadata]] (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understand conversations](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=0)** - [Instructor] Another fascinating capability of [[Microsoft Azure|Azure]] AI language services is understand conversations.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=7)** Now, it is used to understand natural language and understand the overall intent of an incoming utterance, like when I say, "What is the stock price of [[Microsoft]]?"
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=16)** Well, I'm trying to get price; that's the intent.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=20)** And the entity that I'm interested in is Microsoft.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=25)** Now, I've already talked about conversational language understanding in this course, under the Speech module; it's identical.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=33)** So, when we say conversational language understanding in speech or language, we're talking about the same thing.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understand-conversations?u=76281980&t=39)** So, rather than repeating myself over here, I encourage you to watch the Speech portion of this course where I talk about conversational language understanding, and it's exactly the same capability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Azure|Azure]] (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Key phrase extraction](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=0)** - [Instructor] Now let's look at a simple code example, how I can use [[Microsoft Azure|Azure]] AI Language services to do keyphrase extraction, it's pretty simple.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=8)** Logged into my Azure portal, I'm going to click on the Create button under All Resources and search for Language Service.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=17)** Here you go.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=19)** Once the choices show up, look for the language service provided by [[Microsoft]] and choose to create it.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=27)** Now, when you create a language service instance in your Azure subscription, you see that there are these default features that are included in the language service.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=36)** You can also choose to add a couple of other features on the right.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=41)** I don't need these two, all I care about is keyphrase extraction for this demo, so I'll just say Continue to create your resource.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=48)** Also know that you can change your mind about that later, you can choose to add those two services on the right afterwards, as well.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=56)** Go ahead and pick a resource group.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=58)** Give it a name. I'll call it sahillanguage.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=63)** Let's scroll down.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=65)** Give it a pricing tier, free is good enough for development.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=68)** Make sure you read these and agree to them and choose to click on Review + Create and choose to Create.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=75)** Like any other Azure AI service, you can define a network from where the service is accessible and a managed identity if you wish.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=83)** Now, you should see a screen like this that says deployment in progress.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=86)** And in a few brief seconds, this deployment should complete.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=91)** So let's give this a moment to complete.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=94)** In just a few brief seconds, this service is created.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=98)** Go ahead and go to the resource group over here and go to the instance that you had created.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=104)** Under Resource Management, look for Keys and Endpoints.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=109)** Remember I was telling you that you can choose to add features afterwards?
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=112)** This is where you would do that, under Features.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=115)** Anyway, let's go back to Keys and Endpoints.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=118)** Choose to Show Keys, like any other Azure AI service, you get two keys, one for backup, one for rotation.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=124)** Go ahead and copy the key, any one of those two, and let's dive into code.
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=129)** I'm going to go ahead and paste the key in my code over here.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=133)** I'll walk you through this code momentarily, as well.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=137)** And also get the endpoint and go ahead and paste the endpoint over here like this.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=146)** Okay, now let's walk through this code.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=148)** First, going to package.[[JSON]].
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=150)** Again, this is a [[Node.js]] code example, but the .NET and [[Python (Programming Language)|Python]] concepts are almost equivalent.
>
> **[2:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=157)** You can also choose to call the [[Representational State Transfer (REST)|REST]] API directly if you wish.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=161)** So I've taken a dependency on an [[npm]] package called @azure/ai-text-analytics.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=168)** There's an equivalent such package in NuGet, there is another such package for Python, as well.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=173)** The dotenv is to read configuration information that I put in the .env file.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=178)** The idea being that anything that I specify in here is going to be made available, otherwise it falls back to environment variables.
>
> **[3:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=187)** So let's look at our code next.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=190)** Remember, we're doing keyphrase extraction.
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=192)** The point here is pretty simple, that I want to submit a text sentence or something like this, like, "Learning about [[Artificial Intelligence (AI)|artificial intelligence]] on [[LinkedIn]] Learning can be fun."
>
> **[3:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=203)** And then I want Azure AI to do keyphrase extraction on this text.
>
> **[3:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=208)** As you can see, that I'm importing the text analytics client and the Azure key credential, as you can see over here, and on line number 12, using my key, I am creating a tax analytics client, client.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=222)** Okay, now let's go to the actual code over here.
>
> **[3:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=228)** That's it, the code is really simple.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=230)** I just say client.extractKeyPhrases.
>
> **[3:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=233)** This is an async API, promise-based in the [[JavaScript]] world.
>
> **[3:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=238)** And once this completes, I get the results back.
>
> **[4:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=241)** It's as simple as that, and then I just write out the results.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=244)** So, let's go ahead and write out the results.
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=247)** So I'm going to press F5 to run this code example, and let's see what keyphrases Azure AI was able to extract out of my input text.
>
> **[4:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=258)** And under the DEBUG CONSOLE, you should see the keyphrases extracted.
>
> **[4:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=263)** So the keyphrases extracted were artificial intelligence and LinkedIn Learning.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-key-phrase-extraction?u=76281980&t=269)** That's great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Python (Programming Language)|Python]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[LinkedIn]] (2), [[Microsoft]] (1)
> **Env Vars:** api (2), net (1), rest (1), npm (1), debug (1)
> **UI Navigation:** go to (3), click on (2), scroll down (1)
> **CLI Commands:** python (2), make (1), node (1), npm (1)
> **File Paths:** package.json (1), node.js (1)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** extractkeyphrases (1)
> **Cross-References:** go back to (1)


### 4. Search

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI search](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=0)** - [Instructor] Now let's talk about another fantastic capability of [[Microsoft Azure|Azure]] AI services, which is Azure AI Search.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=8)** Azure AI Search is an enterprise class search engine that searches on your data and adds AI capabilities to it.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=17)** Okay, nice words, right?
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=19)** But let's understand what this actually means.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=22)** Well, first, there are so many search offerings even from [[Microsoft]].
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=26)** So where does Azure AI search fit in?
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=29)** Well, you may be familiar with something called as Microsoft Search.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=32)** Microsoft search is where [[Microsoft 365|M365]] authenticated user, they would search content across [[SharePoint]], et cetera, right?
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=40)** This is something that we've used, we're familiar with.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=43)** Next, we have Bing Search.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=46)** This is the [bing.com](https://bing.com) search engine.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=48)** You search the open internet or maybe a slice of the web using Bing APIs.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=54)** You can even remove ads and slap your own user interface on top.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=58)** So imagine that you had an internet facing site where you wanted to offer search capabilities.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=65)** Maybe you could use Bing Search.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=67)** Then you have full tech searching, database search.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=71)** This is where you have Azure [[SQL]] or Azure Cosmos DB, and they have some interesting capabilities around full tech search or vector searching.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=81)** So the question then is, where does Azure AI Search fit in?
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=85)** Azure AI Search becomes an attractive alternative when you need features like relevance tuning, content from heterogeneous sources, resource utilization, indexing queries that are computationally intensive, and maybe you want to offload searches off of DBMS, but the content is not on the open internet.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=106)** It may not even be in SharePoint.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=108)** You want your custom content sources.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=110)** Basically, you need an enterprise quality search engine for your inside facing security protected content.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=119)** That's where Azure AI Search fits in.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=121)** So Azure AI Search, what are the capabilities it has?
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=126)** It is got vector full text and hybrid searching.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=131)** Vector search involves creating numeric representations of content.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=136)** This allows search to do things like semantic likeness, such as cat or feline.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=141)** Multilingual content like dog or hund, in German, or basically the same thing, or multiple content types like airplane in text versus airplane in an image.
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=153)** Full-text search, on the other hand, is like plain text searching stored in an index.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=159)** It might do some interesting things like lower text or removing stop words like, "the," reducing terms to primitive root [[Forms]], et cetera.
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=167)** But at the end of the day, it is text matching.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=170)** And hybrid search is a combination of full text-search and vector search.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=175)** The idea being that you specify that you want both vector and search and the queries run in parallel and the results are merged.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=184)** So that's one capability of Azure AI Search.
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=188)** Another important capability is AI enrichment during indexing.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=193)** So the thing is that not all content is searchable in its raw form.
>
> **[3:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=198)** For example, if I had a video, that's not searchable, is it?
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=202)** Not unless I break apart that video and understand what that video contains.
>
> **[3:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=208)** So I could search for things like, show me the guy in red shirt talking about Microsoft.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=213)** Okay, that's Scott Guthrie, for example.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=216)** So a complex document like a PDF, et cetera, with valuable content that has got images which need to be OCR, that is where AI enrichment becomes useful.
>
> **[3:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=227)** Azure AI Search is available as a portal inside of the Azure portal, which the end users want to use, or you can use it to integrate with APIs.
>
> **[3:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=238)** So your custom applications, thick clients or web clients can show Azure AI Search results.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=245)** So how do you go about using Azure AI Search?
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=247)** Well, it's pretty simple.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=249)** It all starts with your content.
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=251)** And Azure AI Search can search multiple different content sources.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=256)** So you define a content source and you point Azure AI Search to it.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=260)** So you provision Azure AI Search in the cloud.
>
> **[4:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=263)** You specify things like what size and queries and indexes that you need there, and then you can do a full indexing and refresh crawl.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=272)** So it only brings in changes.
>
> **[4:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=274)** Optionally, you can do AI enrichment, and then there's a querying engine, which then serves queries to whatever app is entrusted in consuming this search capability.
>
> **[4:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-search?u=76281980&t=286)** And at a high level, this is how Azure AI Search works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (19), [[Microsoft]] (4), [[SharePoint]] (2), [[Microsoft 365|M365]] (1), [[SQL]] (1)
> **Env Vars:** m365 (1), sql (1), dbms (1), pdf (1), ocr (1)
> **Analogies:** for example (2), imagine (1), such as (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** cat (1)
> **URLs:** [bing.com](https://bing.com) (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [AI enrichment](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=0)** - [Instructor] Now let's talk about a fantastic capability of [[Microsoft Azure|Azure]] AI Search, which is AI enrichment.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=7)** Thing is, the real world is complex, and not all data is easily searchable.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=12)** AI enrichment solves that problem.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=14)** Imagine a big PDF that needs to be searched.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=17)** That PDF has got images, the images have text in them.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=20)** Wouldn't it be nice to be able to search that text along with video files?
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=24)** That's where AI enrichment comes in.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=26)** So what is AI enrichment?
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=28)** The idea being that you start with your data, then you crack open the documents that are present in your data and you apply an AI skill to it.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=35)** What AI skill?
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=36)** Well, all these cognitive services that I've been talking about so far.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=40)** So for example, if I have the [[Microsoft Word|word]] dog appear and the individual issuing the search query searches for the word hund, H-U-N-D, which is the German word for dog.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=53)** Well, you know what?
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=54)** It would be nice if our search was smart enough to understand that hund means dog.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=59)** So the language translation comes into play there, and then out of this AI skill, you get an enriched document, and that enriched document is fed into the index, and that is what you use for searching.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=74)** So there are a lot of built-in skills that you can use, like looking up the meanings of words, OCR, recognizing entities, translations, image analysis, and so much more.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=85)** Or you can do custom skills.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=88)** This means you can call a web API, or you can use AML Azure Machine Language Learning skills to allow you to enhance the enrichment pipeline.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=99)** And basically the sky is the limit.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=101)** If you can call a web API in the web API, you can write anything.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=105)** For example, you can target OpenAI models to make way more sense of the content.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=110)** How about making your source code searchable?
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=112)** Wouldn't that be nice?
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/ai-enrichment?u=76281980&t=113)** These are the kinds of things that you can do with AI enrichment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** api (3), pdf (2), ocr (1), aml (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Semantic ranking](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=0)** - Any discussion of a real world enterprise class search engine cannot exclude semantic ranking.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=7)** So certainly [[Microsoft Azure|Azure]] AI search supports this.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=9)** Let's understand this a little bit more.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=12)** Semantic ranking basically improves the relevance of search results.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=16)** When you search for content, you get results.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=20)** But what results are at the top, the more relevant ones, semantic ranking improves that ranking.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=28)** So another closely related concept to semantic ranking is [[Semantic Search]].
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=34)** Semantic search gives you two additional features to improve your results, the first being captions.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=39)** Captions give you a brief summary or title to each search result, highlighting the most relevant information.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=48)** So captions are automatically generated, they're contextually relevant, and they summarize content for you.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=53)** Captions. they help users quickly understand the content of each search result, making it easier to scan and find the relevant information.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=63)** Second is Answers.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=66)** Answers are concise, direct responses to a search query extracted from the most relevant document.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=71)** Answers are particularly useful in question-based queries as they offer an immediate response.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=78)** For example, if you execute a query, like, What is the capital of France?
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=82)** A simple text search might return your results on capital punishment in France, which is completely different, but semantic search will rank the results, so the results are a lot more relevant.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=96)** Captions will add contextual text under each result, and answers will simply tell you, that the answer is Paris.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=105)** So the question is, how do you use semantic search?
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=109)** Well, you simply add "search=semantic" to your queries.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=114)** Well, executing these queries is just a simple [[Representational State Transfer (REST)|REST]] API.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=117)** And you just say that this search is semantic.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=121)** There are equivalent constructs in SDKs as well.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=123)** It's a matter of setting a flag or something equal true, and that's basically our enum.
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=129)** And that's all you need to do, depends on the SDK.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=132)** And the Semantic ranker needs to be enabled.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=134)** And this is a premium feature that is beyond a certain number of queries that you need to pay for.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/semantic-ranking?u=76281980&t=142)** So over 1,000 queries, if you want to use semantic search, it is something you need to pay for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Search]] (5), [[Microsoft Azure|Azure]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** rest (1), api (1), sdk (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - any (1)

#### [Vectors in AI search](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=0)** - [Instructor] A very important capability of [[Microsoft Azure|Azure]] AI Search is vectors, so let's understand that a little bit better.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=8)** Vectors are mathematical representation of your text data, words, phrases, documents as numerical vectors.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=15)** This allows your social [[Algorithms]] to compute similarities and relationships between different pieces of text.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=22)** Vector embeddings, another closely-related concept, is also known as dense vector representations.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=28)** This is a technique to map text data to a multidimensional vector space.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=34)** Each [[Microsoft Word|word]], phrase or document is represented as a vector of numbers embedding, which captures its semantic meaning.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=42)** "Why is vector search useful?"
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=45)** Well, it can be used to improve your search results in many ways.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=49)** First, using Semantic Similarity where you measure similarity between search queries and documents and, therefore, offer better results.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=58)** Or you can find Relevant Documents.
>
> **[1:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=61)** So, you can find documents with similar meaning to the input search query.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=66)** Or you can do Results Ranking.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=68)** So, you can rank the documents better on semantic relevance.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=75)** Here is how typically vector search works like.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=77)** So, at create index, you would specify a vector search section in your payload.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=85)** On the right-hand side is what that payload looks like.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=89)** So, vector search algorithm supports HNSW, an exhaustive KNN, vector search compression supports scaler and binary quantization, oversampling and re-ranking with original vectors.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=101)** Vector search profiles provide support for multiple combinations of algorithm and compression configurations.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=109)** Then, the first step in querying is that you send a simple post request to an embeddings endpoint with your simple text query and Azure AI services will return you a vector query out of that.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=127)** So, the idea being that my simple English query, or natural language query, I first convert that into a vector query.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=135)** Then I take that vector query and I submit that to the search endpoint as a post request, and then I would execute that search as a vector.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/vectors-in-ai-search?u=76281980&t=147)** And this is how vector search works with Azure AI search.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Algorithms]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** hnsw (1), knn (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Build and use a search index](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=0)** - [Instructor] Now let's get a feel for what [[Microsoft Azure|Azure]] AI search looks like.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=5)** So again, logged into portal.[azure.com](https://azure.com) with a subscription attached, go to all resources and choose to create a resource.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=13)** So I'm going to simply search for the [[Microsoft Word|word]] search.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=17)** And as you know, there are a number of search offerings in the world and certainly from [[Microsoft]].
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=21)** So the one I am interested in over here is the Azure AI Search.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=26)** So go ahead and create an instance of Azure AI Search.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=31)** As always, go ahead and place this in a resource group, give it a name.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=35)** I'm going to call this search or let's call this sahilsearch to keep it unique, and go ahead and place it in a location of your choice.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=45)** So let's see, these are the locations that are available.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=50)** So I'll go ahead and go with Central US and go with a pricing tier as shown over here.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=58)** Now for my demo purposes, I really don't want to pay for this, so I'm going to click on change pricing tier.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=65)** And you see over here that I can go to a free version, which is enough for me to try this out.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=71)** So I'll select free and I'll pick select.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=75)** Okay, that's better.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=76)** Click on next scale.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=78)** And obviously, because I'm going with the free tier, there is not a lot I can do from replicas in a high availability perspective.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=87)** So I think this is fine for test purposes.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=91)** I'll just click on review and create and choose to create this.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=95)** Now let's wait for Azure to provision this resource for me.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=99)** This will just take a few seconds.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=101)** Once this is done, click on go to resource.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=104)** Once the resource is provisioned, you see that I have a number of things I can work with over here.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=110)** I can choose to add indexes, I can choose to import data, I can choose to import and vectorize data, and once I have some data, I can use Search Explorer to try and play with that data.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=122)** What I'm going to do now is click on import data.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=126)** So I can choose to define data sources or I can simply go to samples.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=131)** But look at this, there are so many different data sources I can pick from.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=136)** So feel free to define whatever data sources you want and try and pick data from those.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=142)** I'll just go with the samples that Microsoft has provided us, and I'll just pick the hotels-sample.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=148)** Now you can choose to add cognitive skills, which is optional, and here is where you would define various AI services.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=156)** For example, let's say my input data had a lot of videos.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=160)** Okay, this is where I would say go ahead and, you know, crack open that video and make the text in that video searchable.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=168)** The free version doesn't allow me to do that, obviously.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=170)** So feel free to try this with a paid version.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=174)** I'll just skip over this and I'll say customize the target index.
>
> **[2:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=179)** Now in the target index here is where I get to select and choose which one of these columns that were identified in the incoming data are retrievable, filterable, sortable, facetable, searchable.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=195)** Okay, let's talk through these a little bit.
>
> **[3:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=198)** Retrievable is when I execute the search results, it's a matter of like searching through that data, but does the return result also contain that particular column, that is retrievable.
>
> **[3:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=209)** Filterable, can I filter on that data?
>
> **[3:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=211)** So searching is like, think of it as like a little bit fuzzy, but I want to get exact, like let's say I was selling hard disks and I want to be able to create a search index on that, and I want to say, "Find me hard disks by this following manufacturer."
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=226)** Sortable, okay, that's pretty self-explanatory, whether or not I can sort on it.
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=231)** Facetable is search facets.
>
> **[3:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=233)** So when I execute search results, is it going to automatically prompt me saying, if I was selling hard disks, say, you can facet these results on manufacturer, hard disk size, hard disk technology, and so on so forth.
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=247)** Searchable, whether or not that particular column is searchable, as in if text appears in that column, whether it matters in my search results.
>
> **[4:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=257)** Suggester, so this is like auto complete you may have seen in various search engines.
>
> **[4:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=262)** For example, if I was doing, you know, searches for holiday locations, then whether you want to prompt the user, if the user makes a spelling mistake, just prompt the user that this is maybe what you're trying to say.
>
> **[4:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=274)** So let's tweak these a little bit before we move forward.
>
> **[4:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=278)** Now for my demo purposes, the defaults here are fine, but feel free to tweak these as you wish.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=285)** And next click on create an indexer.
>
> **[4:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=288)** Now you can tweak the name of this indexer if you want.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=292)** For my purposes, this is fine.
>
> **[4:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=294)** You can choose to set up a schedule, as it says, "A schedule can't be configured on samples "or existing data sources without change tracking."
>
> **[5:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=302)** Why is that important?
>
> **[5:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=303)** Because the way schedule works is that it'll do a full crawl once and then it does an incremental crawl.
>
> **[5:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=311)** But in an incremental crawl, it needs to know what data has changed.
>
> **[5:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=316)** Well, we haven't specified that, so it is not allowing me to set up a schedule.
>
> **[5:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=321)** Okay, for one time demo, this is fine, I'm going to click on submit.
>
> **[5:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=325)** But I think one thing is clear, as we go through this, it is practically like a real world search engine that this gives me all the capabilities of a typical search engine that you would expect.
>
> **[5:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=339)** Now, once I have asked it to do indexing, I can go into search management, I can go to indexes and see what indexes exist and how many documents I have in there.
>
> **[5:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=350)** I can go look at indexers and it tells me that this particular indexer has succeeded and it created this 42 seconds ago, 50 documents are pulled out, and now I can go to indexes, hit refresh, and in a moment, you should see 50 documents show up in here.
>
> **[6:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=370)** Now it may not show 50 documents immediately, there's some caching built in there, just hit refresh a few times, you will see it here.
>
> **[6:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=379)** While I'm here, let's talk about data sources as well.
>
> **[6:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=382)** Data sources, this is the data source that we had set up.
>
> **[6:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=385)** You can choose to add more data sources over here.
>
> **[6:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=388)** You can choose to define skill sets.
>
> **[6:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=390)** These are the AI skill sets I talked about a moment ago.
>
> **[6:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=393)** So these cognitive AI search skills, you can define them over here.
>
> **[6:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=398)** Anyway, let's go back to my search overview page and click on search explorer.
>
> **[6:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=407)** Now for my demo purposes, I'll go ahead and use the search explorer, but remember, this search is available on a [[Representational State Transfer (REST)|rest]] API or through SDKs if you wish.
>
> **[6:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=417)** Okay, so I guess let's execute some searches.
>
> **[7:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=420)** I guess it's a hotel index, so the word hotel should appear somewhere.
>
> **[7:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=425)** Search, there you go.
>
> **[7:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=428)** Okay, that's nice.
>
> **[7:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=429)** It shows me all the search results for the word hotel.
>
> **[7:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=432)** Let's make this slightly more interesting.
>
> **[7:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=435)** So I'm going to say hotel with pool in New York, and if there was a hotel with a pool in New York, or somehow the search results matched that, it should show up over here.
>
> **[7:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=450)** You can go through here and you'll be able to see that indeed, the appropriate results are showing up, as you can see here.
>
> **[7:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-and-use-a-search-index?u=76281980&t=458)** And this is how Azure AI search works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Microsoft Word|Word]] (3), [[Microsoft]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (8), go to (6)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2), think of it as (1)
> **Prerequisites:** set up (3)
> **URLs:** [azure.com](https://azure.com) (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)


### 5. Content Safety

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI content safety](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=0)** - [Instructor] Next, let's talk about another fundamental building block of [[Microsoft Azure|Azure]] AI services, which is Content Safety.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=7)** Content Safety allows you to detect and flag harmful or undesirable content.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=14)** This is pretty powerful and it can be used in so many ways.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=18)** Let's understand the various capabilities here.
>
> **[0:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=22)** First, you can use it to create Prompt Shields.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=25)** [[Generative AI]] and [[Large Language Models (LLM)|large language models]] are becoming commonplace, as is their exploitation.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=32)** Bad actors are coming up with newer, innovative ideas to coax large language models to generate harmful content by submitting carefully crafted inputs, Prompt Shields is designed to solve that problem.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=45)** It scans text for risk of user input as people are giving inputs to your LLM.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=52)** Next is protected material protection, and this is a great solution for managing risks generated by AI.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=59)** So while AI generated content, well, it makes you very productive and more and more companies are using it, how do you make sure that you understand the risks it brings with it?
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=71)** For example, how do you know that a student didn't use AI to write up the term paper?
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=77)** Protected material detection will allow you to detect and prevent content generated by AI models and to ensure that the AI generated content meets legal, ethical, and content policy guidelines.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=91)** Protected material protection is available for both text and code.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=95)** For code, it'll simply tell you if the code was lifted from any of the existing [[GitHub]] repos.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=101)** Next, you have Analyze Text, which you can use to analyze input text, and Azure AI will tell you whether it falls into any one of the four categories, either hate, harm, self-harm, sexual, or violence.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=117)** Any submitted text will be analyzed and the result will contain a severity score for all of these categories.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=125)** Analyze Image is just like Analyze Text, but for images, it'll allow you to analyze an input image, and Azure AI will tell you if it falls into any of the four categories, hate, self-harm, sexual, or violence.
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=140)** It'll give you a score based on them.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=143)** Groundedness Detection API detects whether the text responses of large language models are grounded in the source materials provided by the users.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=154)** So you can specify a domain which currently is limited to medical or generic, and you can specify a task such as question answering or summarization.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=164)** And you can also tweak the output speed and interoperability where you can get detailed explanations for ungrounded segments at the cost of speed.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=174)** Finally, you have custom categories where you get to define your categories, label your data, and per your categories, train your model.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=183)** Then any input is then automatically determined to fit one of those categories that you define.
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-content-safety?u=76281980&t=189)** In instances where you need a rapid response, where you don't have the flexibility to go through retraining and you need quicker responses, you can choose to use the rapid version of the custom categories API as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Large Language Models (LLM)|Large language models]] (3), [[Generative AI]] (1), [[GitHub]] (1)
> **Env Vars:** api (2), llm (1)
> **Analogies:** for example (1), just like (1), such as (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Text moderation](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=0)** - [Instructor] Now let's look at a simple code example that allows me to use [[Microsoft Azure|Azure]] AI Services to do text moderation.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=8)** So again, I'm logged into portal.[azure.com](https://azure.com) and under all resources, click on create and choose to create a resource called content safety right there.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=26)** So again, I'll choose Azure Services only, but it's the first one that I care about.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=31)** You could have also just picked Azure AI Content Safety if you directly remember the name, choose to create it.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=38)** So go ahead and place this in a resource group or feel free to create a new one if you don't already have one.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=44)** Let's give it a name.
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=45)** I'm going to call this sahilcontentsafety.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=50)** Give it a pricing tier, for development purposes, free is all well and good.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=56)** Click on review and create and choose to create it.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=62)** Here you go.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=64)** In a few brief moments, the resources created, click on go to resource.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=70)** Now under resource management, we need to grab the keys and endpoint as usual.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=76)** Click on show keys, pick any one of these two keys and let's dive into code.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=81)** Go ahead and place the key under content safety key.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=85)** Go back to the Azure portal and also pick the end point right here and go ahead and place the end point here as well.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=96)** Okay, now let's dive into code starting with package.[[JSON]].
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=102)** I've taken a dependency on line number 13, which is an [[npm]] package called Azure [[Representational State Transfer (REST)|Rest]] AI Content safety.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=110)** There are equivalent packages for .NET and [[Python (Programming Language)|Python]] as well, and you can always call the rest API directly if you want.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=119)** The dotenv package is used to read this environment file and make it as available as configuration information.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=127)** So if things are not mentioned in the dotenv file, it'll pick it from the environment variables.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=133)** Now let's dive into the actual code, which is in index.js.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=138)** So first we wrote the configuration, then we create the content safety client.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=144)** We also get a unexpected variable, which I'm going to use if the results that I get back from Azure AI are unexpected for error purposes.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=156)** I use Azure Key Credential for authentication purposes, and I have a function called checkContent in which I pass in content type.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=164)** So the idea being that I'm going to call this checkContent method multiple times once for say safe content, then another one for harmful content and so on so forth.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=176)** And the actual text content will be the second parameter, and we simply submit this to Azure AI and we write out the results.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=186)** So how exactly do we submit it?
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=188)** I create the content safety client with the endpoint and the credential, as you can see over here, line number 10 is where I create the credential.
>
> **[3:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=196)** Then I say, we're going to analyze the text content, put that in the body and submit it like this on line number 16.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=202)** If the results are unexpected, we throw an error message.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=206)** Otherwise, we write out the results from line number 22 to line number 30 as you can see.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=213)** Now, the first piece of content then I'm going to pass in is safe content, which is, "I am feeling great today."
>
> **[3:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=220)** This is not offensive to anyone.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=222)** So this is not content that is self-harm related.
>
> **[3:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=227)** It is violent or sexual or hate content.
>
> **[3:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=229)** So these are the four parameters that Azure AI is going to categorize my content on.
>
> **[3:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=235)** It's going to give me a confidence score.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=236)** It'll say this content is definitely harm content or violent content.
>
> **[4:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=241)** So remember, some content can be both sexual and violent or hate content and violent, right?
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=247)** So it gives me four different outputs for each submitted content.
>
> **[4:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=252)** Now for obvious reasons, I'm not going to show you the exact text I'm submitting, although these are, I can tell you, they are text variables that are very similar to what you see on line 33, except these variables contain, well, offensive texts that I don't want to show you on this screen.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=269)** We'll just see the results and just take my [[Microsoft Word|word]] for it that they are self-harm related, they are violent, they are sexual and hate and so on and so forth.
>
> **[4:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=277)** So let's go ahead and run this and see what Azure AI returns me as the output of this.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=285)** So let's go ahead and hit F5 to run this code example and look at the results.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=292)** So under debug console, I see the results have started to show up.
>
> **[4:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=297)** So the sexual content that I submitted, so they don't come back in the same order that I submitted because this is an async API.
>
> **[5:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=306)** So that's fine, but at least the results are categorized together.
>
> **[5:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=310)** So you see that sexual content, the choice of content that I picked in here had no hate, no self-harm, but definitely it had sexual severity.
>
> **[5:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=320)** So you can see that Azure AI has picked on it.
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=323)** Feel free to change the input text and try this with something with your choice of words, and you'll see that these numbers should change.
>
> **[5:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=331)** Similarly, the self-harm content I picked, pretty clearly something that I was self-harm and not like violent or hate.
>
> **[5:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=340)** So it picked that this was not a hate content, but it was definitely self-harm.
>
> **[5:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=344)** It was not sexual, it was not violent.
>
> **[5:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=347)** Safe content, which was like, "I'm feeling great today."
>
> **[5:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=350)** Well, that is zero on all four of these parameters.
>
> **[5:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=352)** Of course, that makes sense.
>
> **[5:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=354)** Hate content, two, whereas the other parameters are zero.
>
> **[5:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=359)** And the violent content as you see over here, has been scored as a four on violence, but on the other parameters, it is scored as a zero.
>
> **[6:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-text-moderation?u=76281980&t=370)** And this is how Azure AI content moderation can allow me to do text migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Representational State Transfer (REST)|Rest]] (2), [[JSON]] (1), [[npm]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (4), go to (1)
> **Env Vars:** api (2), npm (1), net (1)
> **CLI Commands:** npm (1), python (1), make (1)
> **File Paths:** package.json (1), index.js (1)
> **Code Identifiers:** checkcontent (2)
> **Definitions:** is an  (2)
> **URLs:** [azure.com](https://azure.com) (1)


### 6. Translator

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI translator services](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=0)** - [Instructor] Next, let's talk about the Translator services in [[Microsoft Azure|Azure]] AI services.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=5)** The Translator services allows you to translate documents or text using AI, and you can pair it with Speech and do spoken translations.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=14)** Imagine if you didn't understand English and I'm talking English.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=18)** Wouldn't it be nice to automatically on the fly convert my spoken text into a language you understood?
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=25)** That is an example of the usage of this API.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=29)** You can use it to do text translations.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=31)** What I mean by that is that you can translate or transliterate or detect to and from one of many supported languages.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=40)** So translate is pretty obvious.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=42)** What is transliterate?
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=43)** Sometimes you have the ability to write a language in a different script.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=48)** That is transliteration.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=50)** You have the ability to do document translation.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=54)** This is either synchronous or asynchronous, and you can support multiple file types using a convenient [[Representational State Transfer (REST)|REST]] API.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=63)** You can also do custom translation.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=65)** This is where you can build a translator that contains your domain-specific terminology, and, of course, this is going to need training to build your model.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=76)** You have the ability to run the Translator services directly in the cloud.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=82)** This means you go to the Azure Portal, you provision as a service, you get a key, and you call the service.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=88)** This is going to require internet connectivity.
>
> **[1:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=91)** Or you can run it on the edge, the idea being that you can host these translation APIs on your infrastructure and it can run as an offline container.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=101)** What if you're doing translation on a ship or on a spaceship where you don't have live internet connectivity?
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-translator-services?u=76281980&t=109)** That is where you would choose to run this on the edge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (2), rest (1)
> **Tools:** azure portal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Language translation for text](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=0)** - [Instructor] Now let's look at a simple code example that allows me to use [[Microsoft Azure|Azure]] AI Service's Translation Services to perform translation between some spoken natural languages.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=12)** So, log into portal.[azure.com](https://azure.com), go to All resources, and click on Create, search for Translator, there you go.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=23)** Let me filter this to just Azure Services.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=27)** And the first one is what I'm interested in, which is the Azure service, AI service that is the translator service.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=34)** Click on Create and choose to create the Translator service.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=39)** And just like any other Azure resource, put it in a resource group, let's give it a name.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=46)** So the region over here, I'm going to pick East US, feel free to pick whichever one you want.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=53)** I'm going to call this sahiltranslation, like that, and for development purposes, I'll pick the free version over here.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=65)** Click on Review and Create.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=68)** And like any other Azure AI resource, I can choose to limit it to networks and tie it down to a managed identity.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=75)** Click on Create and give it a moment to complete.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=79)** A few brief seconds later, the resource is created, so click on Go to resource, and under Resource Management, look for Keys and Endpoint and choose to view the keys.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=93)** Okay, so I'm going to copy the first key.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=97)** Remember, both these keys are equivalent and I'm going to dive into my code example and I'm going to paste the key here.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=105)** Let's also grab the endpoint for text translation.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=110)** So remember, we can do documents or text.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=114)** We're going to work with text for now, and go ahead and place the translator endpoint here, and the region, I've already populated here.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=124)** Now let's look at code.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=126)** Again, this is a [[Node.js]] code example, but the concepts are quite similar in other languages and platforms, as well.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=133)** So I've taken a dependency on this [[npm]] package.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=136)** You see over here, there's an equivalent new get package or a [[Python (Programming Language)|Python]] package, as well.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=142)** And dotenv is for reading the configuration information.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=145)** All my code is in index.js, so the things that I put in dotenv are being read from line 4 to line 6.
>
> **[2:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=153)** And I have imported, on line number 2, the TextTranslationClient.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=159)** Then, I create a translateCredential from line 8 to 11, which contains the API key and region.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=166)** And on line 12, using the endpoint and the translateCredential, I create a translation client.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=174)** Then, on line number 14, I set up my input, which is a simple text line which says the world is full of miracles.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=184)** Okay, this is in English, so then on line number 15 is where I do a post to /translate on the endpoint.
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=192)** So remember, this is just a thin wrapper around the [[Representational State Transfer (REST)|REST]] API.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=195)** So you could just call the REST API, as well.
>
> **[3:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=197)** In fact, feel free to run Fiddler and see exactly what it's sending behind the scenes.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=202)** So it is saying translationClient.path/translate post.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=206)** So we post this input there and we say from English to Hindi, and we'll try some other languages, too.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=214)** And once we get the response, we simply write out the response.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=218)** That's it, that's how simple this is.
>
> **[3:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=221)** Go ahead and run this code example.
>
> **[3:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=225)** There you go.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=226)** It says text was translated to hi, Hindi, and the result is (instructor speaking in Hindi).
>
> **[3:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=234)** So that's accurate, 'cause I speak Hindi, so I can tell you that is accurate, but let's translate this to, let's say, French.
>
> **[4:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=242)** So from English to French, let's go ahead and hit F5 and run this.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=249)** And okay, I wish I was smart enough to pronounce this correctly, so I'm not going to embarrass myself.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=256)** But for those of you that do speak French, do let me know if this is accurate or not.
>
> **[4:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-language-translation-for-text?u=76281980&t=261)** And this is how text translation works with Azure AI services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Representational State Transfer (REST)|Rest]] (2), [[Node.js]] (1), [[npm]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (5), go to (2)
> **Env Vars:** api (3), rest (2), npm (1)
> **CLI Commands:** node (1), npm (1), python (1)
> **Code Identifiers:** translatecredential (2), translationclient (1)
> **File Paths:** node.js (1), index.js (1)
> **Definitions:** is a  (2)
> **URLs:** [azure.com](https://azure.com) (1)


### 7. Document Intelligence

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI Document Intelligence](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=0)** - [Instructor] Yet another very useful capability of [[Microsoft Azure|Azure]] AI services is the document intelligence capability.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=7)** Let's dive into this and understand what this allows me to do.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=11)** The document intelligence capability of Azure AI services allows me to extract key value pairs, text, and tables from standard documents using [[Artificial Intelligence (AI)|artificial intelligence]] of course.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=23)** So what are some of the things I can do?
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=27)** I can do text extraction.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=29)** So for example, I can show it a document and I can extract text from documents including scan and handwritten content.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=37)** I may think, how is this different from OCR?
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=40)** This is a lot more capable than the OCR we've talked about so far.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=46)** You can do form recognition.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=48)** There are a lot of standard [[Forms]], aren't there?
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=51)** Like in America, we fill a W2 or a W9 for tax purposes.
>
> **[0:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=56)** There's a 1099, there is your driver's license, right?
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=59)** Okay, so sometimes you may have a receipt that is printed or an invoice.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=64)** There is a lot of structured documents that we run into in our day-to-day life.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=70)** Identifying that form and extracting data from those forms is what form recognition allows me to do.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=77)** Then you have table extraction, a document that may contain data in tables.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=82)** Being able to extract that data from tables and documents, and therefore being able to do more interesting things with that data than just looking at it in a document is what table extraction is all about.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=94)** Some of the other capabilities; you can also do classification, like you can classify documents into categories like, is this an invoice or is this a contract?
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=105)** You can do entity recognition.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=107)** For example, in a provided document, you can identify prominent entities, like, this is the name of the person, or this is the tax ID, this is their phone number, this is their address.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=120)** You can do search and indexing.
>
> **[2:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-document-intelligence?u=76281980&t=122)** So you can index the extracted data, and you can use it for search and retrieval in parallel with Azure AI search.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Forms]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** ocr (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Document intelligence models](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=0)** - [Instructor] The Document Intelligence service in [[Microsoft Azure|Azure]] AI Services has a number of out-of-the-box models that you can use.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=8)** Let's understand those capabilities a little bit better.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=12)** So you have a lot of pre-built models.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=14)** Pre-built models are out-of-the-box capabilities that cover many domains to perform document intelligence tasks.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=21)** Because they're pre-built, there is no need for training, just provision an API and call.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=26)** Now, what is an example of something that is pre-built that we've seen all the time?
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=31)** Hmm.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=32)** Your passport for example, that is an example of a document that can be scanned by Azure AI Services, but sometimes you may need to work with custom models.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=44)** Imagine that you have your own invoice format and that is what you're interested in.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=49)** That would be the job of a custom model.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=52)** Here, you would train using your labeled dataset and extract distinct data from [[Forms]] and documents specific to your use cases.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=63)** So what are some of the out-of-the-box pre-built models that are available in Azure AI Document Intelligence services?
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=71)** Well, there are various categories.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=73)** So under finance services and legal, you can analyze things like bank statements.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=78)** You can extract information and details from those bank statements.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=82)** You can analyze checks.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=84)** So extracting, say the amount, name, [[Routing]] number, account number, all of that can be done.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=89)** Contracts, you can extract agreement and party details.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=94)** You can look at a credit card and extract payment card information.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=98)** You can look at an invoice and extract customer and vendor details.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=102)** You can analyze a pay stub.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=104)** You can analyze a receipt.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=106)** Then you have another category called US tax, and here you can extract data from any standard US tax form, like your W-2 form or your 1098 form, or 1099 form, or 1040 forms.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=124)** Another big category is US mortgage.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=127)** So there are some standard forms we use in America for mortgage purposes.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=132)** So forms 1003, 1004, 1005, and 1007.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=137)** To do things like extract loan application details or information about appraisals or validation of employment or loan transmittal details or extract final closing loan terms.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=151)** You can also use it to extract PII.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=154)** So things like extracting insurance coverage details from a health insurance card, or you can extract verification details from a user's ID like passport or driver's license.
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=167)** Or you can look at a marriage certificate and extract certified marriage information.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/document-intelligence-models?u=76281980&t=172)** All of these are capabilities of the Document Intelligence service out-of-the-box models that are available for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (4), [[Microsoft Azure|Azure]] (3), [[Routing]] (1)
> **Env Vars:** api (1), pii (1)
> **Definitions:** is an  (2)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [instructor] (1)


### 8. Azure AI Studio

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Azure AI Foundry](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=0)** - [Instructor] Now let's talk about [[Azure AI Foundry]].
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=4)** Well, I debated whether or not I should include this particular module in this course or not because our focus has been [[Microsoft Azure|Azure]] AI services.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=13)** All the Azure AI services that we use, well, they were very compelling, but they felt a little bit like this.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=19)** You provision something in the cloud, which gives you an API and you use your code to call that API.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=26)** Can we do more in the AI world?
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=28)** What if I wanted to use a model that is not part of Azure AI services, but it is available in the world?
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=36)** Like these [[Large Language Models (LLM)|large language models]] like [[LLaMA]]?
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=38)** Can I use them in my Azure [[AI Solutions]] inside of Azure ecosystem?
>
> **[0:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=45)** Yep, that's exactly what Azure AI Foundry allows you to do and more.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=50)** So let's talk about the life of AI.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=52)** We talked about AI services, which is, well, they were very compelling.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=57)** We could do a lot with them. They're simply amazing.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=60)** But at the end of the day, you are calling an API in the cloud.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=64)** You're not an AI expert.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=65)** Well, that's the good thing, and you can tap into AI capabilities.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=68)** But what if you want to go one step further?
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=71)** That is where we use AI solutions, where we piggyback on so much work and research that has been done throughout the IT industry.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=80)** People have made available these models, and I have the ability to build compelling solutions using that.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=86)** All of these models that we hear about, the ones that say, take natural language and convert to code, that's not available in Azure AI services, at least not yet.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=96)** What about large language models?
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=97)** What about text-to-image or image-to-image generation models?
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=101)** Yes, all of those and more can be done through Azure AI solutions.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=105)** And then there is AI models, actually building the models themselves where you ingest terabytes and terabytes, petabytes of data subjected to AI cluster that consumes more power than a town, and you build a model.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=121)** This is something that say, companies like Meta, [[Google]] and [[Microsoft]] have been doing and making those models available for us so we can use them in Azure AI solutions.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=130)** And that is where Azure AI Foundry shines.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=133)** We have the ability to build complex, compelling AI solutions, piggyback on the work that others have done, use concepts like [[Fine Tuning]], distillation, et cetera, enterprise-grade AI solutions.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=147)** So here's a site I'd like you to remember, ai.[azure.com](https://azure.com).
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=151)** This will take you to [[Azure AI Studio]], which is a part of Azure AI Foundry.
>
> **[2:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=158)** What is Azure AI Foundry?
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=160)** It is your go-to enterprise grade platform to build, test, and deploy and manage AI applications.
>
> **[2:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=165)** And I'm talking full developer style.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=168)** Sleeves rolled up, full lifecycle development, [[MLOps]], [[DevOps]], the whole thing.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=174)** So what does a typical AI project look like?
>
> **[2:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=179)** Well, you start with a lot of data.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=181)** You take the data, you ingest it, you clean it, you transform it, you visualize it to make sure it is what you expect it to, that the data is useful and usable.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=191)** And then you use that data to train.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=194)** That data, you can say can split, say 10% and 90% or 20% and 80%.
>
> **[3:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=200)** So 20% of it use it to train.
>
> **[3:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=203)** And then 80% say you can use to validate.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=205)** And these numbers are depending upon your data, your project.
>
> **[3:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=209)** And all of this can be done visually using drag and drop.
>
> **[3:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=212)** So this training data is basically saying, given these inputs, this should be the output.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=217)** So you take say 20% of the data and you train your model based on that.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=222)** And then the [[Representational State Transfer (REST)|rest]] of the 80% you can use to validate and see if your model is producing the right results.
>
> **[3:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=228)** And once you're happy with the results, you deploy it.
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=231)** You deploy it as a simple endpoint using any of these concepts that you're familiar with.
>
> **[3:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=235)** Like say, deploy it as an API protected by EntraID, deployed to scale using [[Kubernetes]].
>
> **[4:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=243)** This is your inference API.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=245)** And of course as a full lifecycle deployment, you would see that the model that you have deployed, is it producing the right results.
>
> **[4:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=253)** And then you go through the cycle again.
>
> **[4:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=254)** You can give it more data, you can do more training, you can tweak your training and you can produce the right deployment model.
>
> **[4:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=262)** And of course then you can use AI services like content safety to make sure that bad actors aren't attacking your models and so on, so forth.
>
> **[4:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=271)** This is how Azure AI Foundry looks like.
>
> **[4:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=274)** The screen you see over here is the model catalog.
>
> **[4:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=277)** It allows me to look through various models that are available in Azure AI Foundry as of today.
>
> **[4:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=285)** Of course these models are going to change over time.
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=287)** They're going to improve, they're going to increase.
>
> **[4:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=290)** But one thing is clear, these are not just Microsoft models and these are not just AI services either.
>
> **[4:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=296)** These are the models that we've heard about in news.
>
> **[4:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=299)** We've seen impressive demos.
>
> **[5:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=301)** They come from OpenAI, they come from Microsoft, they come from Meta, they come from Google and many others.
>
> **[5:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=309)** But there's so many models.
>
> **[5:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=310)** How do I know which one is suitable for my needs?
>
> **[5:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=313)** That is where you have the ability to assess model performance using model benchmarks.
>
> **[5:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=319)** Azure AI Foundry allows you to do this very easily.
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=323)** For example here, I have selected five models, as you see on the left hand side, and I have compared their GPT similarity with cost.
>
> **[5:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=331)** There are many other parameters that you can compare this on.
>
> **[5:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=335)** And also there are many other models you can compare.
>
> **[5:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=340)** You have the ability to look through a prompt catalog.
>
> **[5:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=342)** I like to think of this as an inspiration to build amazing applications.
>
> **[5:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=346)** For example, let's say there is a defect detector.
>
> **[5:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=351)** The defect detector finds defects on a test image based on a reference image.
>
> **[5:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=356)** So it's a summarization sort of a solution.
>
> **[6:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=360)** I can look at that particular solution and use it as is, or I can use it to be inspired and create solutions that suit my business domain.
>
> **[6:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=370)** For example, below that, you see natural language to [[SQL]].
>
> **[6:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=374)** But for those of us who struggle with SQL, but we can describe our intent in simple English, would it be nice if I could just describe, hey, get me this kind of data and the computer using AI is smart enough to understand what I need to do.
>
> **[6:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=388)** Why just English? Why can't I describe it in Spanish?
>
> **[6:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=392)** Maybe I could use Azure AI services to translate Spanish to English and then use this model.
>
> **[6:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=398)** So yes, all those Azure AI services that I've been talking about in this course, they're all available and usable inside of Azure AI Foundry.
>
> **[6:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=408)** So content safety, for example, is a very useful AI service that I can use in my solutions so people don't abuse my large language models.
>
> **[6:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=418)** For example, if I'm deploying something and I don't want competitor information showing up, maybe I can use content safety to guide that conversation towards my brand and so on so forth.
>
> **[7:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=430)** So this and so much more in Azure AI Foundry.
>
> **[7:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/understanding-azure-ai-studio?u=76281980&t=433)** I can't wait to talk about it more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Azure AI Foundry]] (10), [[AI Solutions]] (6), [[Large Language Models (LLM)|Large language models]] (3), [[Microsoft]] (3)
> **Env Vars:** api (5), sql (2), gpt (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** drag and drop (1)

#### [Open AI](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=0)** - [Instructor] No discussion of AI is complete without talking about OpenAI, so let's talk a little bit about OpenAI as well.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=9)** Now, I don't want to get in trouble by defining OpenAI in a way and then be called out by you guys that I didn't define it properly because OpenAI has had a complicated history.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=21)** I think we're developers, we care about what this means to us.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=25)** I think OpenAI started as a nonprofit.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=27)** A few people invested in it, then more people invested in it, and over time, OpenAI arguably has veered a little bit away from its nonprofit roots.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=38)** They do it for profit as well.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=40)** Well, of course they need to survive and attract the best talent.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=43)** So there's a complex history behind OpenAI, but I think what we care about as developers is that this is an organization that has played a very pioneering role in the world of AI, and it's something that we should be aware of and we should understand what it means to us as developers.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=62)** [[Microsoft]] has had a key role and partnership with OpenAI, and this is very important to us because not only has Microsoft invested in OpenAI, money, resources, et cetera, but Microsoft has also made available OpenAI capabilities directly through [[Microsoft Azure|Azure]], and that is what makes OpenAI in a Microsoft world really, really powerful.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=86)** So what are some of the things that you can do with Azure OpenAI?
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=92)** Azure OpenAI allows you to use the OpenAI models that are on [openai.com](https://openai.com), except you can get billed through Azure.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=100)** So think of it as your organization or your company has already bought into the Microsoft ecosystem, you have an Azure subscription, and now you have the ability to consume these OpenAI models and be billed right directly through Azure.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=116)** Well, it's actually way more powerful than that.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=119)** You provision OpenAI resources just like any other Azure resource.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=125)** It sits inside of a resource group.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=127)** Azure RBAC applies to that.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=130)** Not only that, AI doesn't exist in a vacuum.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=133)** You're going to deploy it to a [[Kubernetes]] cluster.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=136)** You have AKS in Azure.
>
> **[2:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=139)** You're going to ingest data.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=141)** You have Cosmos DB, Blob Storage, and so much more right there in Azure, and so on, so forth.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=148)** There are so many Azure capabilities that are available, in fact, all of Azure's capabilities that are available, that now can be paired with OpenAI.
>
> **[2:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=158)** You have full lifecycle management, building, deploying, versioning, retiring your [[AI Solutions]].
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=164)** The same concepts that you've used in Azure over years and years of Azure's experience can now be used with OpenAI.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=172)** Why is this powerful?
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=174)** You're not going to just build a solution and run it on your laptop, right?
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=177)** You want to deploy it.
>
> **[2:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=179)** Where are you going to deploy it? In a AKS cluster.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=181)** You are going to have deployment strategies.
>
> **[3:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=184)** You're going to learn from the queries that your users are issuing, use them in log analytics to find the problem areas and work on solving them.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=193)** You have the entire tool set of Azure available for you.
>
> **[3:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=197)** Security is very important, right?
>
> **[3:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=200)** So Azure comes with a number of security concepts.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=205)** [[Microsoft Entra ID|Azure AD]], now known as [[Microsoft Entra ID|Entra ID]], is available for you, and along with it come with the various concepts like managed identity.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=213)** You can use all of that with OpenAI.
>
> **[3:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=215)** You can use RBAC with OpenAI.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=218)** You can use networking rules and opening ports or being able to restrict access to your models on certain networks.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=226)** All of those concepts can now be used with your OpenAI-based solutions.
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=231)** And it is also available in Azure Government.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=236)** It goes without saying that you can use Azure OpenAI through [[Azure AI Foundry]], VS Code, or any other dev experience you prefer.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=245)** Azure does not limit you to just OpenAI.
>
> **[4:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=248)** Say, if you prefer to use a model by Meta, such as [[LLaMA]], you're welcome to use that as well.
>
> **[4:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/open-ai?u=76281980&t=254)** You can use it and deploy it to Azure or even somewhere else if you prefer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (20), [[Microsoft]] (5), [[Kubernetes]] (1), [[AI Solutions]] (1), [[Microsoft Entra ID|Azure ad]] (1)
> **Env Vars:** rbac (2), aks (2)
> **Analogies:** think of it as (1), just like (1), such as (1)
> **Definitions:** is an  (1), known as (1)
> **CLI Commands:** find (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** vs code (1)
> **Warnings:** be aware (1)

#### [Choosing the right AI model](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=0)** - [Instructor] When we build [[AI Solutions]], we are standing on the shoulders of giants.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=5)** Companies have spent millions, if not billions, of dollars building these AI models.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=11)** They have crunched so much data, using so many resources, compute resources, storage resources, and they've built these models.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=20)** And then what we do is that we take that model.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=23)** Of course, we have to agree that we're using it in a sanctioned way.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=27)** We may choose to fine-tune it, that is making it work with our data, simplified picture.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=33)** But you have to pick the right AI model.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=36)** So we're not going to create a brand new model from scratch.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=39)** That is not how we build AI solutions.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=41)** We pick an existing model and then we go with it.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=44)** So the question is, how do you pick the right AI model?
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=48)** So there is a lot of criterion that we must consider over here.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=52)** So the things that we need to consider here are things like accuracy.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=58)** AI model accuracy measures how well a machine learning model predicts or classifies outcomes, comparing predicted results to actual values.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=69)** So you want to pick a model that is the most possible accurate model.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=75)** Well, it'll cost you more as well, and it'll be at the cost of time and compute resources.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=81)** So you have to balance all these things.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=84)** The next criterion we decide is AI model coherence.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=88)** This evaluates how well the language model can produce output that flows smoothly.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=93)** It reads naturally and it resembles human-like language.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=97)** And it is based on many aspects, like interpretability, like how can we understand the model's decisions.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=103)** Explainability, do we get a clear explanation for the predictions?
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=108)** Consistency that predictions align with training data.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=111)** Robustness, that it performs well across all scenarios.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=114)** And transparencies that the inner workings of the model are understandable.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=120)** The next important criterion we pick is model groundedness.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=124)** This refers to a degree to which a machine learning models, predictions, representations, and behaviors are connected to the real-world.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=133)** We want to ensure things like real-world relevance, contextual understanding, common sense, physical constraints, and yes, human values and norms.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=144)** Then we want to consider AI model fluency, which measures the language proficiency of a [[Generative AI]]'s predictive answer.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=152)** In other words, it refers to a model's ability to generate human-like responses, predictions, or creations that are coherent, natural, and effortless.
>
> **[2:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=163)** They should show things like natural language understanding, contextual awareness, adaptability to tasks and domains.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=173)** The next important criterion is relevance.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=176)** Relevance measures how well a model's predictions, recommendations or outputs align with a specific context, task, or user's needs.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=186)** So they need to think of things like contextual understanding, like if I'm in a conversation, does it understand my next question, based on the previous questions I've asked, domain knowledge, my preferences?
>
> **[3:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=200)** And so on, so forth.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=202)** And finally, similarity.
>
> **[3:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=204)** Similarity measures the similarity between source data, which is ground truth sentence, and the generated response by the AI model.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=216)** Now these are a lot of criterion to compare.
>
> **[3:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=219)** [[Azure AI Studio]] just makes it so easy for us.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=222)** They have already done the homework over here and they've taken all popular models available for me in Azure AI Studio, and they have given me a sortable table around accuracy, coherence, groundedness, fluency, relevance, and similarity, not just a table.
>
> **[3:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/choosing-the-right-ai-model?u=76281980&t=239)** If you explore the model benchmarks area a little bit more, they've also given you visual charts and features where you can easily find the model that suits your needs the best, and then you look at the pricing of it and see if it fits your needs and budget.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Solutions]] (2), [[Azure AI Studio]] (2), [[Generative AI]] (1)
> **Definitions:** refers to (2), is a  (1), in other words (1)
> **CLI Commands:** find (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Popular AI models](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=0)** - [Instructor] Now, before we dive into a demo, let's get an understanding of some of the popular AI models available in the industry today.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=8)** Now, I'm going to show you the demo using an open AI model.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=12)** GPT-3.5 is what I'll use because it's cheap to use and it's good enough for our purpose, but you're welcome to try any other model I'm about to talk about in this video here, starting with Meta.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=25)** Meta is the company that is the owner of say, [[Facebook]], [[Instagram]], WhatsApp, et cetera, and they have contributed a lot to the AI space.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=33)** On the [[Natural Language Processing (NLP)|natural language processing]] side, they have built a series of models versions called as [[LLaMA]].
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=41)** Llama stands for, Large Language Model Meta AI.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=46)** I've tried Llama, it is quite fantastic.
>
> **[0:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=48)** It is quite knowledgeable about a lot of things and the responses, albeit a little wordy, are pretty good.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=55)** Then there is OPT, which stands for, Open Pre-trained Transformer, which is great for language translation and generation.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=63)** Then there is BART, Bi-directional and Auto Regressive Transformers, which is great for tech summarization.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=69)** It is worth pointing out that a lot of these are built in collaboration with other large companies, like BART has been built in collaboration with [[Google]], for example.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=79)** [[DALL-E]] is another amazing model under the [[Computer Vision]] capabilities, which is for image generation.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=87)** You give it a prompt of an image and a simple sentence, and it'll generate the image for you based on that prompt.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=93)** And SAM, which stands for Segment Anything, which is great for image segmentation.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=99)** This is a very, very partial list.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=101)** I welcome you to go to places, like [[Hugging Face]], and you can see what other models Meta has contributed.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=108)** Google has been pretty active in this space, as well.
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=112)** From a natural language processing aspect, they have built BERT, which stands for, Bidirectional and Coder Representations from Transformers.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=121)** This is great for language understanding.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=123)** Transformer-XL, which is great for long-term memory and contextual understanding.
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=129)** T5, which is text to text transformer, which is great for text generation.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=135)** And then there is LaBSE, which is Language-Agnostic BERT Sentence Embeddings, which is great for multilingual sentence embeddings.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=143)** On the computer vision side, they have built for image classification, a model called Inception, something called as ResNet, called Residual Network for image recognition, MobileNet for image classification, and EfficientNet for scalable image classification.
>
> **[2:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=162)** So MobileNet is for efficient image classification, and EfficientNet is for scalable image classification.
>
> **[2:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=169)** [[Microsoft]] has been pretty busy in this space, as well.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=172)** For natural language, they've built things like Microsoft Turing-NLG, which is great for natural language generation.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=178)** Or Microsoft Dialo, which is great for conversational UI.
>
> **[3:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=182)** On the computer vision side, they have built image recognition for ResNet, DenseNet as image classification, and SegNet for image segmentation, and of course, all their contributions with OpenAI.
>
> **[3:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=196)** Which brings me to probably the leader in the space, which is OpenAI.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=202)** And the OpenAI models available at this time are OpenAI, which are o1-preview and o1-mini currently are in preview.
>
> **[3:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=210)** These are limited access models and they're specifically designed to tackle reasoning and problem solving tasks with increased focus and capability.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=218)** Then you have the GPT based model.
>
> **[3:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=222)** You might have heard of something called as [[ChatGPT]].
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=224)** So, GPT based models are, have gone through various versions.
>
> **[3:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=229)** It started GPT-3.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=230)** All of these are around natural language understanding and generating generation of code, et cetera, and they came from like three, 3.5, 4, 4o, 4o Audio, and so on, so forth.
>
> **[4:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=242)** And each one of these have different capabilities.
>
> **[4:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=245)** The latest ones being the [[GPT-4]] based models, and these are the latest, most capable OpenAI models with multimodal versions, which can accept both text and images as input.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=256)** Then you have embeddings.
>
> **[4:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=258)** Embeddings are a set of models that can convert text into numerical vector form to facilitate text similarity.
>
> **[4:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=266)** If you're interested in digging further into this, there is a concept called a vector embeddings* and [[Vector Databases]], that makes searching through a lot of data very, very easy.
>
> **[4:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=278)** This is for another day, but if you're interested, you should search about these concepts and learn about them.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=284)** And DALL-E also has been contributed to by OpenAI.
>
> **[4:48](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=288)** These are a series of models that can generate original images from natural language.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=292)** These are not like Google Image Search or Bing Image Search.
>
> **[4:55](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=295)** They actually generate fresh images based on the input parameters you give.
>
> **[5:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=300)** And Whisper, which is a series of models that can transcribe and translate speech to text.
>
> **[5:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=306)** And Whisper is quite amazing in understanding what you say in various languages and converting it to text.
>
> **[5:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/popular-ai-models?u=76281980&t=314)** Anecdotally, I can tell you that I've tried Whisper running on my simple, old Mac, which is a few years old now, and it works quite well, and it works offline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LLaMA]] (3), [[Google]] (3), [[Computer Vision]] (3), [[Microsoft]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (2)
> **Env Vars:** gpt (5), bart (2), dall (2), bert (2), opt (1)
> **Definitions:** stands for (4), is a  (4)
> **Versions:** 3.5 (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Build an app using a third-party model](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=0)** - [Instructor] In this demo, I intend to use [[Microsoft Azure|Azure]] OpenAI to build a simple chat bot, a chat bot that is able to read my PDF and answer questions based on that.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=11)** So you are welcome to use any PDF.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=13)** I have this simple PDF that is text-based.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=16)** As you can see over here, it's got some content.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=19)** And I just intend to upload this and turn this into a chat bot.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=24)** So let's get started.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=26)** Let me level set with where we are.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=29)** I have an Azure subscription with no resources.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=32)** I have a resource group called myrg, which is empty at this point.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=38)** So I went ahead and visited [[Azure AI Studio]].
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=42)** Now, this is a big topic, and I won't have the flexibility to get into every detail of what is possible here, because frankly this deserves another whole course or maybe a bunch of courses.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=54)** But there are a bunch of catalogs you can pick over here.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=58)** So there are a lot of solutions you can pick, not just from [[Microsoft]], but from [[Facebook]] or basically anybody that's publishing these AI models.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=67)** You can compare various model benchmarks so you can pick the right model for yourself.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=72)** There are various AI services that you can use, or we are going to use Azure OpenAI.
>
> **[1:20](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=80)** So go ahead and click on Azure OpenAI, and I'm going to create a new Azure OpenAI resource.
>
> **[1:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=87)** So click on this link here.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=89)** It takes me to my Azure portal.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=92)** Give it a moment.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=93)** And let's go ahead and fill some of these details.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=96)** So I'm going to go ahead and pick the resource group that I have, or feel free to pick any other resource group you wish.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=103)** Scroll down a little.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=104)** Let's give it a name.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=105)** So I'll just call it sahilopenai.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=109)** And give it a pricing tier, there's only one.
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=112)** Now this is not going to be free.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=114)** Okay, this is already taken, so I'll just put a one in front of it.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=118)** And this is not going to be free, so if you don't intend to use it, remember this demo is going to cost you some money.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=125)** Not a lot, but just keep that in mind.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=127)** I think the most expensive part here is going to be the search resource that we will create momentarily.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=132)** But let's stay with this.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=134)** So let's go ahead and create this.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=136)** This will take just a moment.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=138)** Okay, so this resource should be created in a moment.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=142)** Now let's go back here and let's go ahead and hit refresh and click on view all resources and find the resource you're interested in.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=154)** And here we are.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=156)** Now in just a moment, this is loaded up now.
>
> **[2:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=158)** It'll walk you through what you intend to do over here.
>
> **[2:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=162)** So we're creating a chat playground over here.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=166)** And this will walk you through the various, you know, possibilities over here.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=170)** So I'm just going to X this widget over here.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=173)** And I'm going to choose to create a new deployment like this.
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=177)** So I'm going to say from base models.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=178)** Fine tuned models are you take a base model, you add your own data to it.
>
> **[3:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=182)** So we haven't done that, so I'm going to just choose a base model over here.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=186)** And you can choose from any one of these.
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=188)** These are the chat completion based models.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=191)** I'll pick gpt-35-turbo because it is, well, a little cost effective.
>
> **[3:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=196)** So I'm going to go ahead and pick this.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=199)** Feel free to read the description of each one of these.
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=201)** If you pick any other model, that's just as good.
>
> **[3:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=204)** Okay, so let's go ahead and pick this.
>
> **[3:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=207)** The default settings are fine for my demo, and I'm going to click on deploy.
>
> **[3:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=211)** Okay, now let's scroll down further.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=214)** And I intend to add some data.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=217)** So I intend to search or chat with my PDF.
>
> **[3:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=223)** So I'm going to say add a data source.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=226)** And there are a number of data sources types that you can pick from.
>
> **[3:50](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=230)** So I'm going to say upload files.
>
> **[3:53](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=233)** And I need to create a blob storage resource where I will upload these files.
>
> **[4:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=241)** So let's go ahead and create this blob store resource first.
>
> **[4:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=246)** So let's go over here.
>
> **[4:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=248)** And let's call this sahilstorage1.
>
> **[4:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=254)** And okay, it's already taken.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=256)** How about 2?
>
> **[4:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=259)** Okay, interesting, 3?
>
> **[4:21](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=261)** So these names need to be unique because they're DNS based.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=264)** Okay, wonderful.
>
> **[4:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=267)** So the primary service that I intend to use here is a blob storage, standard is fine.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=272)** And I don't even need to be like geo-redundant storage.
>
> **[4:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=276)** I'll just go with a low cost option of LRS.
>
> **[4:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=279)** This is just a demo, after all.
>
> **[4:41](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=281)** And I'll click on review and create and choose to create it.
>
> **[4:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=287)** This will also just take a moment to complete, so let's wait for this to finish.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=292)** A few brief seconds later, my storage is created for me.
>
> **[4:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=296)** Let's go ahead and close these tabs we are no longer using and come back over here and hit this refresh button, and my storage account should show up over here.
>
> **[5:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=307)** So this is where we're going to upload my data.
>
> **[5:11](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=311)** Let's scroll down.
>
> **[5:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=312)** So it'll say it needs your permission.
>
> **[5:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=314)** So I'm going to turn on CORS, cross-origin resource sharing on that resource.
>
> **[5:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=319)** The next resource that I need to create is a Azure search resource.
>
> **[5:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=324)** So let's go back to portal.[azure.com](https://azure.com).
>
> **[5:27](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=327)** This is the simple AI search that we've already seen in this course.
>
> **[5:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=331)** So I'll go ahead and place this in resource group myrg.
>
> **[5:34](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=334)** Let's call this sahilsearch1 if it is available.
>
> **[5:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=339)** Yes.
>
> **[5:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=340)** And you cannot use a free version, and this is something that'll cost you.
>
> **[5:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=344)** So once you're done with this demo, please go ahead and delete it so it doesn't charge you.
>
> **[5:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=349)** Remember that once you provision these resources, whether you use them or not, it will cost you, and it's a significant amount.
>
> **[5:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=356)** So make sure to delete them if you're not using them.
>
> **[5:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=359)** So this is just how search works because they've pre-allocated these resources for you, so it's going to cost you.
>
> **[6:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=364)** So be mindful of that.
>
> **[6:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=366)** Okay, so this resource is created.
>
> **[6:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=369)** Let's go back to my Azure AI Studio area, hit refresh, and pick this search instance and give it an index name.
>
> **[6:23](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=383)** So I'm going to call it sahilindex.
>
> **[6:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=386)** Hopefully this is available, like that.
>
> **[6:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=389)** Scroll down and click on next.
>
> **[6:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=392)** Okay, now I want to upload that PDF that we want to chat with.
>
> **[6:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=398)** So let's go to my desktop where the PDF was.
>
> **[6:42](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=402)** This is the PDF.
>
> **[6:44](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=404)** And click on open.
>
> **[6:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=406)** Click on upload files.
>
> **[6:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=409)** Click on next.
>
> **[6:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=412)** You can select this chunk size or tweak it.
>
> **[6:56](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=416)** I'm going to go with an API key since I didn't set up system assigned managed identity.
>
> **[7:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=421)** It says validating.
>
> **[7:02](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=422)** In a moment, this should finish.
>
> **[7:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=424)** Let's scroll down here just to make sure all these settings are as what we expect them to be, and click on save and close.
>
> **[7:10](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=430)** Now you should see something like this.
>
> **[7:12](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=432)** It says ingestion in progress.
>
> **[7:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=435)** This will take just a moment, so give this a few minutes to finish.
>
> **[7:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=439)** Now, since my PDF was fairly small, it just took a few seconds to do this.
>
> **[7:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=444)** Now, this demo that I'm showing you over here, well, actually you can roll up your sleeves and build this in [[Python (Programming Language)|Python]] yourself.
>
> **[7:30](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=450)** In fact, you can click on this View Code button, and this is what it is doing behind the scenes.
>
> **[7:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=455)** I have articles on the web where I show you how you can do this.
>
> **[7:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=458)** You can, for example, use local CPU to do this, and then you need a [[Hardware]] CPU.
>
> **[7:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=463)** But this just made it so much easier for me.
>
> **[7:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=465)** I'm just using OpenAI, you know, already created model for myself.
>
> **[7:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=469)** So I can start chatting here.
>
> **[7:51](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=471)** But I want to show that these chats are actually based on the source document that I had uploaded.
>
> **[7:58](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=478)** So let's go ahead and open this source document.
>
> **[8:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=480)** And somewhere in this document there is some stuff about being sorry, not being sorry, or avoid hype, something like that.
>
> **[8:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=487)** So let's go back to the chat playground.
>
> **[8:09](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=489)** And remember that I'm testing this right out of AI Studio, but you have the ability to deploy this and then be able to integrate this in your applications as well.
>
> **[8:19](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=499)** But let's start testing this right here.
>
> **[8:22](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=502)** So I'm going to say, "When is being sorry appropriate?"
>
> **[8:29](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=509)** So, see, it's got chat completion.
>
> **[8:31](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=511)** I'm just going to tab, hit question mark, and hit enter.
>
> **[8:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=515)** Let's see what it returns.
>
> **[8:37](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=517)** There you go.
>
> **[8:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=519)** And it clearly tells you exactly where it pulled this information from in references as well.
>
> **[8:46](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=526)** So that is wonderful.
>
> **[8:47](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=527)** So this came from our PDF.
>
> **[8:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=529)** Okay, so let's ask the flipped question now.
>
> **[8:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=532)** "When is being sorry not appropriate?"
>
> **[9:03](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=543)** Here you go.
>
> **[9:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=544)** Again, it is filling out this answer for me.
>
> **[9:07](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=547)** And it was able to also point me to the references exactly where it found this information in the supplied PDF.
>
> **[9:15](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=555)** Let's try another question.
>
> **[9:17](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=557)** "Why should we avoid hype?"
>
> **[9:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=565)** Here you go.
>
> **[9:26](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=566)** So again, you can open references and it'll show you exactly where it got this answer from.
>
> **[9:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=572)** So this is extremely powerful.
>
> **[9:35](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=575)** I welcome you to try some of these other examples they have over here.
>
> **[9:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=579)** Maybe try with your own PDF and maybe try tweak these settings.
>
> **[9:43](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=583)** There's a lot of possibilities here.
>
> **[9:45](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/demo-build-an-app-using-a-third-party-model?u=76281980&t=585)** This is just an introduction to what OpenAI is capable of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Azure AI Studio]] (2), [[Microsoft]] (1), [[Facebook]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** pdf (11), cpu (2), dns (1), lrs (1), cors (1)
> **UI Navigation:** click on (11), scroll down (5), go to (1)
> **CLI Commands:** make (2), find (1), python (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (3)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** azure portal (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more about Azure AI Services](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=0)** - [Sahil] And that brings us to the very end of this [[Microsoft Azure|Azure]] AI Services course.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=4)** We learned so much here.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=6)** We looked at the various AI services available in Azure, starting with Vision, where you can do amazing things like submit an image and AI will generate tags, captions, it'll recognize the image for you.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=18)** It'll even do amazing things like extract handwriting, OCR, et cetera, auto fair image, and so much more.
>
> **[0:25](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=25)** We looked at speech based services where you have the ability to go from text-to-speech, speech-to-text, and do so in many languages.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=33)** We looked at language-based services where you can build language understanding applications where you can naturally talk to an application and have it do interesting things or do things like sentiment analysis, key phrase extraction, and so much more.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=49)** We looked at search based capabilities, which is an enterprise quality search engine built right inside of Azure that can work with your data and add AI capabilities on top.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=59)** We looked at content safety so you can moderate text and images and documents so your users are protected from harmful content.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=68)** We looked at translator capabilities, which help you bridge the differences between so many languages, and you can build language driven applications where I'm talking French and you can understand me in English and vice versa and across hundreds of languages.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=84)** We talked about document intelligence where we can extract valuable information out of standard documents, and these are some standard documents that are available right out of the box and you can extend it to your custom documents as well.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=98)** And finally, we rounded up with a good discussion on [[Azure AI Foundry]], where we got to use the various models available and how you can go about building really compelling applications using these models right through your browser.
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=112)** Now, your learning doesn't have to stop here.
>
> **[1:54](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=114)** This is a pretty big topic, so I'd like to leave you with two more links to further your journey here.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=121)** The first link is about AI services, where you can read a lot more about all these AI services that I've covered in this course and a lot of code examples in the various languages that you may be interested in.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=134)** The second is a link to the [[Azure AI Studio]] where you will find a lot of links to documentation, examples, the various models you can use, and a number of prompts that you can use to be inspired by various [[AI Solutions]] that you can use in your own applications.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=152)** I really enjoyed recording this course and there was a lot of ground to cover.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=156)** I hope you found this course useful as well.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=159)** My name is Sahil Malick.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-services-essential-training-24512025/learning-more-about-azure-ai-services?u=76281980&t=160)** Thank you for watching and stay in touch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Azure AI Foundry]] (1), [[Azure AI Studio]] (1), [[AI Solutions]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** ocr (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [sahil] (1)


## Instructor

- [[Sahil Malik]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Azure

## Path Context

### In [[Foundational AI Skills for Azure Administration]]
← [[Azure AI- The Big Picture]] | **5 of 6** | [[Apply Ethical AI Principles Using the Responsible AI Dashboard]] →

## Appears In

- [[Foundational AI Skills for Azure Administration]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure

---

[↑ Back to top](#)