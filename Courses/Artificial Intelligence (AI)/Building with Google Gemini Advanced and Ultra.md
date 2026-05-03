---
type: course
cssclasses:
  - lle-course
slug: building-with-google-gemini-advanced-and-ultra
url: "https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra"
duration_minutes: 15
duration: 15m
updated: 3/5/2024
learners: 2608329
skills:
  - Generative AI
  - Software Development
  - Artificial Intelligence (AI)
  - Gemini
  - Google Gemini
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHRlgkRZR_N9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709245833557?e=2147483647&amp;v=beta&amp;t=MehWANnuStDTSGu-TWdJcn6iy--bwEPpajB_83V7oL0"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]'
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - '[[Multimodal Prompting with Google''s Project Gemini]]'
  - '[[Advanced Gemini for Developers]]'
next_courses:
  - '[[Building a Video Transcriber with Node.js and Google AI Speech-To-Text API]]'
  - '[[Build an Image Captioning Tool for Visually Impaired Users with Gemini]]'
path_nav: '[{"path":"Develop Your AI Skills with Google Gemini and Google Cloud Platform","position":4,"total":7,"prev":"Multimodal Prompting with Google''s Project Gemini","next":"Building a Video Transcriber with Node.js and Google AI Speech-To-Text API"},{"path":"A Developer''s Guide to Google Gemini","position":7,"total":8,"prev":"Advanced Gemini for Developers","next":"Build an Image Captioning Tool for Visually Impaired Users with Gemini"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/generative-ai
  - skill/software-development
  - skill/artificial-intelligence-ai
  - skill/gemini
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20with%20Google%20Gemini%20Advanced%20and%20Ultra.md)

![Building with Google Gemini Advanced and Ultra](https://media.licdn.com/dms/image/v2/D4D0DAQHRlgkRZR_N9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709245833557?e=2147483647&amp;v=beta&amp;t=MehWANnuStDTSGu-TWdJcn6iy--bwEPpajB_83V7oL0)

# Building with Google Gemini Advanced and Ultra

> Explore Google Gemini and discover the distinctions between Gemini Pro and Gemini Advanced, which employs the newest Ultra versions of the model. Learn how Google Gemini can help you with various tasks, from productivity to coding assistance and explore the API and find out what's in store for the next iteration using Gemini Ultra.

> [LinkedIn Learning](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra) | 15m | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome to Google's AI family of the future](#welcome-to-googles-ai-family-of-the-future)
- [**1. Google Gemini Changes Artificial Intelligence**](#1-google-gemini-changes-artificial-intelligence) (4 videos)
  - [Learning Google Gemini fundamentals](#learning-google-gemini-fundamentals)
  - [Chatting with new Google Gemini](#chatting-with-new-google-gemini)
  - [Prompting with Google Gemini](#prompting-with-google-gemini)
  - [Building with Google Gemini](#building-with-google-gemini)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to Google's AI family of the future](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/welcome-to-google-s-ai-family-of-the-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/welcome-to-google-s-ai-family-of-the-future?u=76281980&t=0)** - [[Google]] has been a pioneer in [[Artificial Intelligence (AI)|artificial intelligence]], but I think most people miss why its family of models and offerings are different than others and where it could drive our conversations about AI. Recently, Google released more capable versions of [[Gemini]] as well as version 1.5 of their Pro model, which can consider an unprecedented million [[Tokens]]. These models power their chatbot tiers previously known as Bard, which has been gaining unique capabilities while integrating deeply with [[Microsoft Products|products]] used by millions of users every day. So let's dive into [[Google Gemini]], what's changed in Gemini Pro, and how the new chatbot tiers are changing the future of AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Gemini]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Tokens]] (1), [[Microsoft Products|Products]] (1)
> **Versions:** version 1 (1)
> **Definitions:** known as (1)
> **Speakers:** - google (1)


### 1. Google Gemini Changes Artificial Intelligence

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning Google Gemini fundamentals](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/learning-google-gemini-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/learning-google-gemini-fundamentals?u=76281980&t=0)** - Talking about [[Google Gemini]] can be a bit confusing, especially since they turned the model with the name of [[Gemini]] to a product called Gemini, which used to be called [[Google]] Bard. And when you combine the variants of the [[Microsoft Products|products]] and models, it gets even more confusing. At its core, Gemini is a family of multimodal models from Google. Think of a model like an engine that accomplishes a specific task. In Gemini's case, we call the types of tasks [[Generative AI]]. Generative AI models are trained with massive amounts of data to transfer prompts to some type of results. It's called multimodal because the model can handle different types of inputs like text, images, audio, video, and even code. In reality, different engines handle different modalities because processing video or generating images is very different to handling prompts in [[Large Language Models (LLM)|large language models]]. This supermodel architecture is sometimes called a mixture of experts where requests are handed over to models that specialize in different types of requests. The Gemini family of models is divided into three main engines: Nano, Pro, and Ultra. Each of these models are meant for different uses. Nano is this moist of the models and it's meant to be loaded into mobile devices. Therefore, the model is tiny compared to other offerings. And there's two sub versions of Nano. Nano 1 has been created with 1.8 billion parameters and Nano 2 with 3.25 billion. Next in line is the Pro model. Pro has two variants, 1.0 and 1.5.
>
> **[1:34](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/learning-google-gemini-fundamentals?u=76281980&t=94)** This model is supposed to be comparable in capabilities to [[ChatGPT]] 3.5. And because it's smaller than Ultra, it's also faster and more performant. Although Google doesn't share the parameter size of their larger models. As a developer, when building apps, you have the opportunity to query either the language version of Pro or the vision version of Pro, which allows you to query images. Things get interesting with the newer version of the Pro model called 1.5. Not currently available other than in a developer preview by invitation only, but the key feature is extremely long-context understanding and being able to process up to 1 million [[Tokens]]. Think of tokens as how much information the models can handle at one time, sort of like their memory. Gemini 1 can handle 32,000 tokens. This token size also applies to other modalities like images, audio, or code. By default, the context window for Gemini Pro 1.5 starts at 128,000 tokens, with some developers and enterprise customers in a selective preview having access to the million parameter token size. However, remember that token capacity isn't free, so the larger the token size, the more expensive the tasks. Having said that, this token size goes far beyond what other models can do, with [[GPT-4]] Turbo having an available context window of only 128,000 tokens and Cloude 2.1, 200,000 tokens. Finally, we have the model called Ultra. This is their most advanced and capable model, and it's supposed to be more comparable
>
> **[3:08](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/learning-google-gemini-fundamentals?u=76281980&t=188)** to the capabilities of GPT-4. That means a much larger set of trained parameters. The more capacity a model has in terms of training parameters, the token size and the amount of training the model has received over time, the better and more accurate these models become.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (7), [[Tokens]] (6), [[Google]] (3), [[Generative AI]] (2), [[GPT-4]] (2)
> **Versions:** 1.5 (3), 1.8 (1), 3.25 (1), 1.0 (1), 3.5 (1)
> **Env Vars:** gpt (2)
> **Definitions:** is a  (1)
> **Speakers:** - talking (1)

#### [Chatting with new Google Gemini](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/chatting-with-new-google-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/chatting-with-new-google-gemini?u=76281980&t=0)** - One of the ways you can try [[Google Gemini]] is to use their family of chatbot offerings. This used to be called [[Google]] Bard, but with the release of the Ultra model, it's been renamed Google Gemini. There's a free version, as well as a paid version of the tool. The free version is called just Google Gemini, and the paid version is Google Gemini Advanced. There are also additional plans for business teams, as well as an enterprise package with additional [[User Management]] and security options. The free [[Gemini]] chatbot currently uses the Pro 1.0 model and is also integrated into existing Google apps. As of this recording, the Pro 1.5 model is not available on any plan. Gemini Advanced is 19.99 a month and uses the latest Ultra model. You do get two months of a free trial for Google Advanced, as well as access to Google Gemini inside Gmail, Google Docs, and other [[Microsoft Products|products]]. The Business version is $20 a month billed annually, and gives you enterprise security. The Enterprise models offer advanced meeting translations in 15 languages and full access to Gemini usage. Now, let's take a look at the Advanced model, whose features are also reflected in Business and Enterprise. When you're using the advanced version, you still have access to run the Pro model, which is faster and might eventually let you have access to higher-context [[Windows]]. Keep in mind that, like with other chatbots, the regular and advanced versions will help Google by using your conversations to improve the Gemini models, while the Business and Enterprise versions will not share data with the chatot training.
>
> **[1:34](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/chatting-with-new-google-gemini?u=76281980&t=94)** You can turn your app's activity off, which normally stands for 18 months. However, Gemini may keep some of these conversations that it's reviewed or annotated by its human reviewers. Now, even the removed conversations stay within the system for three days, so keep that in mind. Notice that if you turn off activity, you won't have access to any of your previous prompts, so this is sort of like prompting in a private window. One of the big advantages to Gemini is the ability of the model to have access to extensions. These aren't open to the public for development, so at least for now, the extensions give you access to other Google products like Flights, Hotels, Maps, YouTube, and Workspace. Workspace is Google's family of [[Microsoft Office|office]] products like Gmail, Drive, and Docs. That means that you can search through PDFs stored in your [[Google Drive]], ask it to summarize a YouTube video, or get flight and hotel information for trips. The Gemini chatbot has quickly caught up to others in terms of features and offerings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7), [[Gemini]] (7), [[Google Gemini]] (5), [[Microsoft Products|Products]] (3), [[User Management]] (1)
> **Versions:** 1.0 (1), 1.5 (1), 19.99 (1)
> **Definitions:** is called (1), stands for (1), means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### [Prompting with Google Gemini](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/prompting-with-google-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/prompting-with-google-gemini?u=76281980&t=0)** - Let's try out [[Google Gemini]] by using their chat bot. I'm going to refer to this as [[Gemini]] Chat to make sure we keep the model discussions separate from the app. [[Google]] makes a lot of claims about the capabilities behind Gemini and how, for example, its ultra versions is the first model to outperform human experts on a test called MMLU, as well as a lot of benchmarks comparing it to [[GPT-4]]. I think the model is quite capable, but like with anything else, I think your mileage will vary. I also think that it will dramatically improve over time, and the distinctions between different models will be less obvious. The main version is just Gemini and uses the pro version of the model. As of this video, it's using Pro 1.0. It lets you do basic chats and it can also upload images. Let's start with some basic text prompting to see how it handles things. I'm going to try, can you make me a workout plan for this week using body weights and dumbbells, beginner level, no planks please. This is a pretty good plan and it showcases some unique features about this chat bot. At the top of your prompts, you'll see an option for different drafts that Google has generated from your prompts. These are alternative versions of the responses that Google came up with. If you don't like any of them, it can regenerate more with this regenerate button right here. Unfortunately, regenerating doesn't keep any of the old drafts, just giving you three new ones. You can edit the original question to change the prompt by hitting the pencil button. Let's add something to the end of our prompt. I'm going to add, it'd be great
>
> **[1:32](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/prompting-with-google-gemini?u=76281980&t=92)** if you could show some pictures to go with these exercises. Although Gemini is perfectly capable of generating images, and you have to remember to add that generate keyword in the prompt. This response is a bit more useful since it found some websites that describe the exercises, which are really helpful if I'm not familiar with the technique. At the bottom of the screen, you'll see a toolbar with some icons that you can use. Now, these options will be different depending on the type of response you're getting. You can see feedback that you can add by using thumbs up and thumbs down. They help make your further conversations with a prompt a lot more accurate. There is an icon to modify the latest response. This lets you have the responses shorter, longer, simpler, et cetera. Let's try longer and see how it does. Next is the sharing options. You can create a page to share your prompts or an entire chat. So you can share your workouts with others in this case. This also lets you save your results as Google Docs or send them as an email as long as you have a Gmail account. There is one more useful key here that is unique to Google, which allows it to check your response by giving you Google search references. It also gives you the likeliness that the respond matches the prompt. If it finds any potentially inaccurate statements, it will highlight them in brown. It can also find invalid URLs. When it find good content, it highlights it in green, and there's a small arrow where you can expand to see the additional context. This is a great way to show the veracity of the prompt and make a nice assessment of the response.
>
> **[3:06](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/prompting-with-google-gemini?u=76281980&t=186)** The real power of Gemini isn't as obvious with simple results, but what else you can do with it? I'm going to go back into my prompt and ask it to look at gyms in my area. You get some nice information here, and then an interactive map with a group of locations. You can also call on something like YouTube to find some videos related to your topic to watch. Let's try the original prompt with Google Advance, which uses the Gemini Ultra model. Now, there's not much of a difference between the two, other than you may have noticed it's a little bit slower. This model also yields less errors and should be more accurate. There's also a mobile app that as of right now is available only for [[Android]] devices, but it's quite capable and might be a great way to prompt while on the road, or continue working on a specific prompt you started on your desktop when you're away from your computer. The true power of Gemini isn't necessarily the prompting, although it's quite capable in all modalities. The ability to connect with Google Services is really what makes it special, and Google has been making some impressive updates lately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (9), [[Gemini]] (7), [[Google Gemini]] (1), [[GPT-4]] (1), [[Android]] (1)
> **CLI Commands:** make (4), find (3)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** mmlu (1), gpt (1)
> **Versions:** 1.0 (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - let (1)

#### [Building with Google Gemini](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/building-with-google-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/building-with-google-gemini?u=76281980&t=0)** - Let's say that your goal is to build applications with the [[Gemini]] platform. Another one of Gemini's advantages is the robust set of tools that are available to developers. The best way to learn how to work with them is to try the AI Studio platform at ai.[google.dev](https://google.dev). If you're a [[Google Cloud Platform (GCP)|Google Cloud]] client, you can do the same thing on [[Vertex]] AI, which gives you access to many more models. One of the places that [[Google]] shines is with extremely competitive pricing when using these models. If you're a developer, you'll find this platform extremely compelling for development because of its price. Of course, you're going to need a Google account and you may want to create an API key, so let's take care of that right away. I'm going to click on this create API key button and I'll create generate API key right here. Now from here you can copy this API key if you want to use it and you can manage all your keys right here. I already created one earlier, so I'm going to delete this new one that I just made. You'll need that if you're writing an application, but we're just going to test things out in AI Studio. The AI Studio has several options for the type of apps that you want to test. So for example, you can create a new chat prompt, a freeform prompt, or a structure prompt. The basic type of request you can make to the API is a chat prompt. This is just a very simple basic chat. Freeform prompts are almost the same, but it lets you add some test inputs that let you create set up variables. With a structured prompt, you can include structured data and that can be up to 500 examples, which can include images that you want the model to know about. Let's go ahead and start by adding a simple prompt,
>
> **[1:33](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/building-with-google-gemini?u=76281980&t=93)** same thing that we did before and down here, I'm going to go ahead and type in the previous prompt that I had made. I'm going to hit this button to run the prompt, it's going to take a few seconds, and then show me the results. This is a much simpler response than what you get from the regular chat application and it's classic of what you'd get with the API since it would be up to you to build something around these responses. Let's take a look at some of the options on the right hand side. There's a great place where you can get some of the starter code for any of the supported platforms. You can see [[JavaScript]], [[Python (Programming Language)|Python]], and [[Android]] code, and there's even a copy button right here or you can open this up in Google Colab, an online platform where you can play around with the code some more. A chat prompt is where you're meant to have back and forth conversations with the LLM. You can see a lot of additional parameters that we can send along with the call to the API. Temperature lets you control how creative the LLM will be when answering your prompts. A lower number will be less creative and a higher number, more wild and creative in the answers it gives you. Top P is known as nucleus sampling and is another way to control the creativity of the model, so a high top P would pick an answer that is more creative and less predictable. There's also a stop parameter here. You can use that to ask the LLM to stop when it reaches a specified token. So maybe if you ask it to generate some code for an [[HTML]] page, you can ask it to stop at the end of an HTML tag or create a similar end marker. Let's go ahead and just add a second message. We'll just ask it to try again. You can see that we'll get a new response
>
> **[3:05](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/building-with-google-gemini?u=76281980&t=185)** and at the bottom you can see a running total of the current token count, which right now lets us go to about 30,000 [[Tokens]] with the current model per chat. If I click on preview, I can take a look at what the model is currently returning back to me. Notice that even this version of Gemini lets you upload files so you can pass along a PDF or a CSV spreadsheet and the model is capable enough to do some data analysis. If I click back on get code again, you'll see that this generation has been updated to use some of the conversations that I've been having with the model and that gives you a fantastic place to start your code. Notice that the other parameters are also sent along as part of the call to your code. Because we're using the simple prompts, we're not able to choose a different model, so if I want to see something else, I can click on create new and I can go with a freeform prompt. Now here I can choose a different model like Gemini 1.0 Vision and I can also add test inputs, which would allow me to add some variables that I could use here and if we take a look at the structure prompt, you can see that it has a very similar interface. The AI Studio also has a lot of examples that you can take a look at to get started with coding. They're right here under the Prompt Gallery, so I'm going to go there and I can filter these by beginner friendly and I can also go by different types. So I'm going to go to prompts here and then choose something from this section. I'm just going to click the Object Identifier and you can see that it loads up as a structural prompt and it lets me look at an example of a more complete application. One of the big reasons to consider Gemini
>
> **[4:39](https://www.linkedin.com/learning/building-with-google-gemini-advanced-and-ultra/building-with-google-gemini?u=76281980&t=279)** is that Google has a much more mature family of development [[Microsoft Products|products]] and a history of great documentation, plus a lot of developer tools, so working with Gemini feels like working with a mature product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (6), [[Google]] (5), [[HTML]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Vertex]] (1)
> **Env Vars:** api (7), llm (3), html (2), pdf (1), csv (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** find (1), make (1), python (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** you'll need (1), set up (1)
> **URLs:** [google.dev](https://google.dev) (1)
> **Versions:** 1.0 (1)


## Instructor

- [[Ray Villalobos]]

## Skills Covered

- Generative AI
- Software Development
- Artificial Intelligence (AI)
- Gemini
- Google Gemini

## Path Context

### In [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]
← [[Multimodal Prompting with Google's Project Gemini]] | **4 of 7** | [[Building a Video Transcriber with Node.js and Google AI Speech-To-Text API]] →

### In [[A Developer's Guide to Google Gemini]]
← [[Advanced Gemini for Developers]] | **7 of 8** | [[Build an Image Captioning Tool for Visually Impaired Users with Gemini]] →

## Appears In

- [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]
- [[A Developer's Guide to Google Gemini]]

## Related Courses

_Courses sharing skills:_

- [[Getting Started with the Google Gemini API]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Prompt Engineering with Gemini (2024)]] — Artificial Intelligence (AI), Google Gemini, Gemini
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini

---

[↑ Back to top](#)