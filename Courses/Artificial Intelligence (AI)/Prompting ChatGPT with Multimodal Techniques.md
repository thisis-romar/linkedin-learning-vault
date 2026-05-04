---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: prompting-chatgpt-with-multimodal-techniques
url: "https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques"
duration_minutes: 23
duration: 23m
level: Beginner
updated: 12/6/2023
learners: 552973
skills:
  - AI Prompting
  - Artificial Intelligence (AI)
  - ChatGPT
  - Prompt Engineering
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEL03xcjCpqag/learning-public-crop_675_1200/B4EZrb41vCGUAY-/0/1764625702146?e=2147483647&amp;v=beta&amp;t=NcHp6VgmBRHNkEULL2S22bTdcKofC5fYe6KICW0Zcig"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Building Generative AI Skills for Web Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Web%20Developers.md)'
prev_courses:
  - '[Prompt Engineering- How to Talk to the AIs](Prompt%20Engineering-%20How%20to%20Talk%20to%20the%20AIs.md)'
next_courses:
  - '[Building PHP Applications with Generative AI](Building%20PHP%20Applications%20with%20Generative%20AI.md)'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":4,"total":10,"prev":"Prompt Engineering- How to Talk to the AIs","next":"Building PHP Applications with Generative AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/ai-prompting
  - skill/artificial-intelligence-ai
  - skill/chatgpt
  - skill/prompt-engineering
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Prompting%20ChatGPT%20with%20Multimodal%20Techniques.md)

![Prompting ChatGPT with Multimodal Techniques](https://media.licdn.com/dms/image/v2/D4E0DAQEL03xcjCpqag/learning-public-crop_675_1200/B4EZrb41vCGUAY-/0/1764625702146?e=2147483647&amp;v=beta&amp;t=NcHp6VgmBRHNkEULL2S22bTdcKofC5fYe6KICW0Zcig)

# Prompting ChatGPT with Multimodal Techniques

> With OpenAI’s announcements of GPT-4 Turbo being added to the ChatGPT tool, there’s a whole new way of prompting using ChatGPT. In this course, you’ll learn to use all of the capabilities added during the recent DevDays announcements. We’ll start by learning to brainstorm audio inputs with the mobile version of ChatGPT, then you'll discover how to analyze and generate images, use Python to load da

> [LinkedIn Learning](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques) | 23m | Beginner | 553K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Level up your prompting with Multimodal features](#level-up-your-prompting-with-multimodal-features)
- [**1. Multimodal Prompting with ChatGPT 4.5 Turbo**](#1-multimodal-prompting-with-chatgpt-45-turbo) (8 videos)
  - [ChatGPT Free versus ChatGPT Plus](#chatgpt-free-versus-chatgpt-plus)
  - [Dynamic AI prompts using mobile audio inputs](#dynamic-ai-prompts-using-mobile-audio-inputs)
  - [Loading and utilizing data in AI prompts](#loading-and-utilizing-data-in-ai-prompts)
  - [Interpreting images with AI](#interpreting-images-with-ai)
  - [Making data analysis easy with AI](#making-data-analysis-easy-with-ai)
  - [Visualizing data and conversations in AI](#visualizing-data-and-conversations-in-ai)
  - [Producing visual content with AI](#producing-visual-content-with-ai)
  - [Custom GPTs](#custom-gpts)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Level up your prompting with Multimodal features](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/level-up-your-prompting-with-multimodal-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/level-up-your-prompting-with-multimodal-features?u=76281980&t=0)** - The new GPT for Turbo isn't just about speed. There's a range of new abilities that let you combine voice commands, file uploads, AI [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) development, and a whole lot more. And that means that you should be thinking of prompting in a totally different way. I'm going to show you how each of these different features work, and then how to combine them to make prompting more powerful. We'll use the mobile voice feature as a great way to bounce ideas off of AI, and then go to the desktop and use web search to add context to prompts, upload [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) and other files to boost GPT focus, plus have GPT create visualizations, images, and output the results to [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) and other format. By the end, you'll learn to work with the tool beyond traditional text prompting, with innovative and powerful new techniques. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1)
> **Env Vars:** gpt (3)
> **CLI Commands:** python (1), make (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - the (1)


### 1. Multimodal Prompting with ChatGPT 4.5 Turbo

[↑ Back to Table of Contents](#table-of-contents)

#### [ChatGPT Free versus ChatGPT Plus](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/chat-gpt-free-versus-chat-gpt-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/chat-gpt-free-versus-chat-gpt-plus?u=76281980&t=0)** - [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) is a web application that is connected to models from OpenAI, which includes GPT for natural language and [DALL-E](../../Skills/Software%20Development/DALL-E.md) for image generation. In order to have access to all of its features, you need to purchase the GPT Plus account, which is available for $20 a month. Some of these features are available in alternate places, so I'm going to go over the differences between the free and paid versions as well as where you can find some alternatives that are either equivalent, close to, or even better than ChatGPT. This is going to give you a good idea of whether you should consider paying for the ChatGPT Plus account. One of the differences between the free and paid versions is the available context size. Think of this as how much of your conversation ChatGPT is able to hold in its memory. The free version has a 16,000-token context window, and that translates to about 40 pages of content, whereas ChatGPT Plus has 128,000 [Tokens](../../Skills/Web%20Development/Tokens.md), which is about 300 pages. Now, tokens are used by GPT to convert the prompts that you type into numerical representations, which the computers can handle much better. A token isn't necessarily a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). It can be part of a word or a combination of words that are used often. To get more information about this, check out ChatGPT's Tokenizer, where you can visualize how ChatGPT does this conversion. Now, because of this token-size limitation, the tool can have problems remembering extremely long conversations, and the larger token size does help. An alternative to this is Claude from Anthropic, which just released a whopping 200,000-token context size.
>
> **[1:37](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/chat-gpt-free-versus-chat-gpt-plus?u=76281980&t=97)** The next thing is the knowledge cutoff. The free version of ChatGPT currently has a knowledge cutoff date of January 2020, so it doesn't know about events that happened after that. The paid version has an April 2023 cutoff. I do imagine that these cutoffs will eventually update for both versions, and if you're really trying to query about current events, it's possibly better to use a model that is backed by a search engine like [Google](../../Glossary/Service/Google.md)'s Bard or Bing [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) chat. ChatGPT Plus also lets you upload files in formats like [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md), and PDFs. Other tools like Google Bard do let you upload images, and I find that Anthropic does a pretty similar job to what ChatGPT does in terms of what files it understands. Although you can upload images, ChatGPT Plus has an understanding of photos that goes beyond telling you the content of an image. You can submit photos of complex diagrams, receipts, charts, and photos that are humorous, and ChatGPT has the ability to truly understand them. That's something OpenAI calls vision. Now, do remember that Bing Chat or Copilot uses the same engine as ChatGPT, so you can have some of the same capabilities in terms of understanding images as ChatGPT. One thing that is unique to ChatGPT Plus is the ability to export files in different file formats. It understands how to write Excel, PowerPoints, and other file formats as well. Through the Plus subscription, you can also generate images. Now, other tools like [Midjourney](../../Skills/Artificial%20Intelligence%20(AI)/Midjourney.md)
>
> **[3:10](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/chat-gpt-free-versus-chat-gpt-plus?u=76281980&t=190)** and [Stable Diffusion](../../Skills/Artificial%20Intelligence%20(AI)/Stable%20Diffusion.md) can generate great photos and illustration, but where ChatGPT is superior is in how well it translates your instructions to images. One place you can do this for free, though, is Bing Create, as well as in any version of Copilot or Bing Chat. The other main thing that the Plus subscription gives you is code interpreter, where ChatGPT can behave as your developer and write [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) applications to accomplish certain tasks, so you can have it create programs to analyze and visualize your data. Finally, with the paid version, you can create [Custom GPTs](../../Skills/Artificial%20Intelligence%20(AI)/Custom%20GPTs.md) where you upload specific data and other commands into a custom bot, and it remembers those instructions in a series of new conversations. It's like having your own custom version of ChatGPT. Now, I'll say that, although you can get some of these things with other tools, part of what makes ChatGPT extra useful is having everything together in one place. So it's just more convenient than doing things in multiple applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (19), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Google](../../Glossary/Service/Google.md) (2)
> **Env Vars:** gpt (3), dall (1)
> **CLI Commands:** find (2), python (1)
> **Analogies:** imagine (1), it's like (1)
> **Definitions:** is a  (1)
> **Speakers:** - chatgpt (1)

#### [Dynamic AI prompts using mobile audio inputs](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/dynamic-ai-prompts-using-mobile-audio-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/dynamic-ai-prompts-using-mobile-audio-inputs?u=76281980&t=0)** - A lot of people miss out on how useful bouncing ideas off of AI can be. Now, the app looks similar to the desktop app, but it's clearly been adjusted to work with mobile devices. I want to make sure that I'm using the [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) version, which is available with the Plus plan. Although, voice is available in the free version. So I want to make sure that I go to the top of this app and I choose GPT-4 for this example. Plus will get you things like vision, image generation, and file uploads. The mobile app is perfect if you're taking a walk or away from your computer and you want to run things by [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). You can pick up a new conversation or one of your previous conversations and continue it on your phone as well. Now, let's say I had an idea for one of my clients while I was walking my dog. The client is called Wisdom Pets, and they don't have an organic pet food brand, so I want to talk to ChatGPT about it. I'll start by clicking on this headphones icon. I'm thinking about starting a brand of pet food [products](../../Skills/Software%20Development/Microsoft%20Products.md) for a company called Wisdom Pets. What should I be thinking about?
>
> **[0:59](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/dynamic-ai-prompts-using-mobile-audio-inputs?u=76281980&t=59)** - [ChatGPT-4] Starting a pet food brand like Wisdom Pets is exciting. Here's what to consider. One, [Market Research](../../Skills/Data%20Science/Market%20Research.md). Understand what pet owners need. What's missing in the current market? Are they looking for organic?
>
> **[1:11](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/dynamic-ai-prompts-using-mobile-audio-inputs?u=76281980&t=71)** - You can stop the conversation anytime and continue it later. ChatGPT does tend to be verbose, and the conversations are going to be as long as what you would get on the desktop app. Now, here's a couple of other tips. If you pause while you're thinking about something, the app will start talking back to you. You can hold the circle icon to prevent this from happening. Another thing that you can do is check this conversation later on your desktop device. I have this website up, and if I do a refresh, you can see that I already have something called New chat on my machine, and it has all the information that I shared with ChatGPT. Let's go ahead and continue this conversation. I'll hit the headphones icon again. I'm thinking of organic dog food focused on longevity.
>
> **[1:52](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/dynamic-ai-prompts-using-mobile-audio-inputs?u=76281980&t=112)** - [ChatGPT-4] Focusing on organic pet food that promotes longevity is a great idea. Here's how to approach it. Target market insight. Your target market likely values health and longevity for their pet. Understand their concerns and preferences.
>
> **[2:05](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/dynamic-ai-prompts-using-mobile-audio-inputs?u=76281980&t=125)** - You can also use the camera to upload photos or even files directly from your phone if you have your phone connected to iCloud, in my case. You can see the icons down here on the left-hand side. There's one for taking a photo, so you can take a photo while you're on the road or look through your photos. And then there's one for files, which lets you get into any files that you have locally on your phone. Let's go ahead and upload a photo. I want to see if ChatGPT can create a mock-up of a food package with this photo of my dog, I'll go ahead and type this in. And now ChatGPT is going to use Dolly to create a photo of what this might look like. I think that looks pretty good. I'm going to go to my desktop and refresh that conversation, and you can see a good example of what that might look like. Don't miss out on using the mobile app to get your conversation started or to continue a previous conversation that you have had with ChatGPT. It's a great place to bounce ideas and brainstorm with your AI partner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (9), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Market Research](../../Skills/Data%20Science/Market%20Research.md) (1)
> **Speakers:** - [chatgpt (2), - you (2), - a (1)
> **CLI Commands:** make (2)
> **Env Vars:** gpt (2)
> **UI Navigation:** go to (2)
> **Definitions:** is called (1), is a  (1)
> **Code Identifiers:** icloud (1)
> **Analogies:** similar to (1)

#### [Loading and utilizing data in AI prompts](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/loading-and-utilizing-data-in-ai-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/loading-and-utilizing-data-in-ai-prompts?u=76281980&t=0)** - When you prompt [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), it takes into consideration the prompts you give it, but it can also take custom instructions. Now, custom instructions are found under your Settings menu, which is at the bottom of the screen. They're divided into two parts. The top part is for things that you want ChatGPT to take into consideration before it does anything, and this is sometimes called a system message. You can see that I've given ChatGPT some information about the role I want it to use when answering my prompts. The reason this is real important is because normally ChatGPT doesn't know anything about you, your company, or what you're trying to do. By adding it here, it will have access to that information with every chat. Let's try this out. I'm going to open up a new chat and I'm going to ask ChatGPT if it knows the name of my dog. And you can see that it doesn't have any information about my dog because I haven't given it to it. In order to do that, I'm going to pull up custom instructions. I'll go ahead and add some details about my dog. I added his birthdate as well as how he should be drawn if I ask for some images. Let's ask this same question again. Now, it still didn't have access to this information because I had already started this chat. If I wanted to know about the information in custom instructions, I have to start a new chat. So go ahead and do that and ask again. Excellent. And now it knows. Let's see if it picked up how old Mojo is. And although sometimes ChatGPT can have problems with simple math, it did a good job right here. Let's take a look at those custom instructions again.
>
> **[1:35](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/loading-and-utilizing-data-in-ai-prompts?u=76281980&t=95)** And you can see that there is a second part right here that teaches ChatGPT how to answer its different prompts. You can see my default voice right here that I've customized so that ChatGPT when it writes sounds a lot like me. And you should do something similar for yourself, you can start with mine. A lot of times you'll know that it'll take you a while to get ChatGPT to start sounding more and more like you. Now, if you want to create a chat where you're not using these settings, you can turn off Enable for new chats right here. I'm going to keep this on. Let's go ahead and ask ChatGPT to write a story about Mojo as the spokesdog for the brand. And this is a pretty good description that I can use for Mojo. The more information that you give ChatGPT about the role you want it to have and also how you want it to output that data, the better it will get over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (11)
> **Definitions:** is a  (2)
> **Speakers:** - when (1)

#### [Interpreting images with AI](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/interpreting-images-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/interpreting-images-with-ai?u=76281980&t=0)** - [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) uses a model called [DALL-E](../../Skills/Software%20Development/DALL-E.md) 3 in order to generate images. If you've used other image generation tools, you know that it's pretty tough to get them to be precise in how they interpret prompts. Let's take a look at some of what you can do with this feature. Since I've added custom instructions, it already knows about my dog, I can simply ask it to draw me a picture of Mojo, and I can use any style I want to. So, let's go ahead and ask it to do this in a woodcut style illustration. It does a good job of interpreting this as a woodcut, and it also made sure that it colored Mojo blue and that it added his developer glasses, since I specified that in my custom instruction. Let's go ahead and see if it can be a little more creative about the environment. So, I'll say that this is great, but that I want Mojo to be doing something. This is a pretty good photo of Mojo in a baseball stadium. Now, as I mentioned before, you can combine image generation with photo uploads. So, let's go ahead and upload a photo of my dog, and I'll go ahead and ask it to do an image based on this photo. All right. It did a pretty good job with the cyberpunk style, but I wanted to maybe match the post a little bit, so it got a little too creative for me. Let's try again. I think it did a much better job this time. So, let's go ahead and move on. This Mojo is the spokesdog for the brand. I want to make sure that there are some coloring books that the kids can use when they come to the [office](../../Skills/Web%20Development/Microsoft%20Office.md). That does look pretty great,
>
> **[1:32](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/interpreting-images-with-ai?u=76281980&t=92)** and I could keep on going with additional pictures. As you can see, by default, ChatGPT is going to give you one photo at a time. You can ask for more photos if you create a list of what you want. This time, I'm going to have it design me some stickers, again, of Mojo doing different things. All right, so it did all the stickers at the same time. I'm going to see if we can do them one at a time. I have used that technique to have it generate multiple images, but sometimes it does try to combine things into one. It's probably better if you just use one at a time. Let's try something a little more photorealistic this time. I'm going to be pretty detailed in my prompt here to see if I can get it to do as many things as possible. ChatGPT does a pretty good job following prompts when it's generating images. It's not perfect, and sometimes when you ask it to do text for you, it isn't quite accurate just yet, but its ability to mimic different styles is really great for creating social media posts, coloring books, and all types of fun materials that you can use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (3), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** dall (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - chatgpt (1)

#### [Making data analysis easy with AI](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/making-data-analysis-easy-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/making-data-analysis-easy-with-ai?u=76281980&t=0)** - [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) can also take into consideration websites and online materials to help you create content that resonates with your audience. Now, I want ChatGPT to help me craft a message that will be a description for the bag of dog food, but I also want it to look at the Wisdom Pet Medicine website, which has some information about the vision for Wisdom Pets. One of the things that I like to do is to make sure that I include formatting instructions at the very end of commands like this. Usually the very last thing that you tell ChatGPT will be really important to follow. Now, this is a great description, so I'm going to modify my custom instructions to take this into account, and now ChatGPT will have that context when it's creating other things for me. Now, let's see if we can use ChatGPT with web access to customize a food program for Mojo. I can see that that's pretty cool, and it would be pretty handy to allow the doctors to maybe look up information about a breed's needs when they're creating these custom foods. Let's see if ChatGPT can look on the web for some recipes for Mojo. Now, if I want to, I can go ahead and generate a shopping list, as well as detailed descriptions of how I would make these things. Now, that's pretty cool. Because I have the ability to create images, I can go ahead and create an illustration with Mojo and his food, and this time it actually did a pretty good job with the text. So I'm very pleased with this. This could be a great package that I can prepare for any of my clients coming into Wisdom Pet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (6)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - chatgpt (1)

#### [Visualizing data and conversations in AI](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/visualizing-data-and-conversations-in-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/visualizing-data-and-conversations-in-ai?u=76281980&t=0)** - [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) Plus will let you upload files that you can use as a baseline for projects, or to give ChatGPT additional information. Now make sure you're not just prompting based on ChatGPT's knowledge, but take advantage of any documents that you have that can provide additional context. Your results are going to be a lot better. Here's a document that I'm going to be using. It will provide a list of current packages that Wisdom Pet Medicine already offers to their clients. I want to come up with a package for a preferred food service option based on what we know about each pet. Instead of copying and pasting, I can just drag this into ChatGPT and then give it a prompt. As I'm thinking about how I might offer the custom food services for dogs, I want ChatGPT to help me create a similar format for a new package. One of the best ways to prompt is to provide ChatGPT with examples. It's always better to ask ChatGPT to do things slowly, preferably step by step. As a document completion engine, ChatGPT is always more concerned with being done with a task than completing the task accurately. So, starting with a few ideas is usually pretty good. I normally do about 20 ideas when I'm brainstorming, but for this course, I'm just doing 10. And there's some pretty good ideas right here. I'm going to go for idea number one, the puppy power plate. Although this description is pretty good, I'd like it to emphasize that we're going to customize the food according to your pet's medical history, breed, and everything we know from what we have about your dog. That's a pretty good answer,
>
> **[1:35](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/visualizing-data-and-conversations-in-ai?u=76281980&t=95)** and I'm not sure how I would price this. So, I'm going to have ChatGPT research the web for trying to give me some advice. One thing I do like about web search in ChatGPT is that it does give you references to where it got the information from, which you should always check. You shouldn't trust data from ChatGPT because it can be inaccurate, but it's great for brainstorming and coming up with ideas. Let's try to get it to suggest some pricing for me based on my document and some of the research that it's done. Now that it's returned some data, let's go ahead and have it put it all together. I could also ask it to create a [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), or a PDF document for me. Those things are in the early stages, so it's a little bit hit and miss right now with whether it can create those. But you can see the potential in how it can already help you generate and research the web and also read, and write files whenever you need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (11), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** pdf (1)
> **Cross-References:** coming up (1)
> **Best Practices:** you should always (1)
> **Speakers:** - chatgpt (1)

#### [Producing visual content with AI](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/producing-visual-content-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/producing-visual-content-with-ai?u=76281980&t=0)** - One of the tools that's unique to [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) Plus is the Advanced Data Analysis tool, which is also known as the code interpreter. It's useful as a helpful AI developer who can convert your prompts to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code and perform data analysis and visualizations. I have a sample data file that I'm going to use with some appointments and some of the clients for Wisdom Pet Medicine. This is mock up data that we've created here with just a few records. Let's feed this data into ChatGPT Plus and ask if it can provide any useful analysis based on this info. But I'm just going to ask, "What can you tell me about this data?" So you can see that it's clearly able to read and understand the structure of the data without me giving it any hints. Let's go ahead and see if we can ask some additional information about the timings. You can ask it to build a visualization for you. And the interesting thing is that it will actually make one for you whenever it thinks that it would be easier to understand the data in visual form. Let's go ahead and ask for a pie chart. And it was able to do that without any problem. I like that it behaves as a human being because the question that I ask is a little bit vague. Show me the data as a pie chart could be show me the entire data set or any part of that data set, but it knows that I just asked about the hours. So it maintained that context, and that's one of the things that makes ChatGPT a lot different than other tools. Let's dig into the type of pets that are in this data set. The way that ChatGPT approaches tasks
>
> **[1:32](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/producing-visual-content-with-ai?u=76281980&t=92)** with the code interpreter is to write Python code that accomplishes the prompts that you entered. You can see what it's doing if you click on the triangles as it is processing the data. Let's go ahead and ask it to tell me just about the information on dogs and this time as it is working on the data, I'm going to click on the analyzing button and you can see that it's telling you exactly what it's doing with the Python code. Now you can copy this code and then use it on your own time to perform this same kind of analysis on future data. It's also interesting that if it ever fails a task, then it will try to accomplish the task in a different way. And this is just what a developer would do. We'd never give up. We just keep on trying things in different ways. Now if you want to learn more about this tool, then check out my other short course on just the advanced data analysis tool. The difference is now this tool is integrated with all of the other tools, so you should be thinking about it in a number of different ways. This tool can easily do things like create QR codes and also add links or cells to tables. Basically most things that developers can do using Python, and now you have that ability with your own Python developer in ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **CLI Commands:** python (5), make (1)
> **UI Navigation:** click on (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - one (1)

#### [Custom GPTs](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/custom-gpts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/custom-gpts?u=76281980&t=0)** - The Plus version of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) has one more trick. It can help you generate a custom GPT that knows certain things, like our list of appointments, and can answer certain questions with presets that are like custom instructions that we've been using. It can draw images, write [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code, and access the web just like the regular GPT. Let's go through the process of building a custom GPT for our pet care business since it's the ultimate [Multimodal Prompting](../../Skills/Artificial%20Intelligence%20(AI)/Multimodal%20Prompting.md) technique. To do that, I'm going to go to this Explore section, and I'm going to click right here on this plus button under Create a GPT. It's going to split the window into two parts, and in one part, it's going to ask you a series of questions about the GPT that you want to create. You can really create one for everything, it doesn't have to have data included. But I'm going to include the data for my appointments so that if one of my clients walks in, then the GPT already has information about all of the pets. So we'll drag the appointments in here. It's a good idea to tell it a few things that you want this GPT to do. Let's go ahead and hit Return and see what happens. The next thing it's going to do once you give it some information is to suggest a name. I think this name is pretty cool. And it's going to create a profile picture. So I'll say, "Love it." Here is where I want to include some of the information that I had in my custom instructions. So I'm going to open up a new tab and look up my custom instructions, and then I'm going to copy this text that I created previously. I'll go back into my other tab, and I'll go ahead and paste this information. If you can see on the right, it's already adjusted my interface so that it looks like ChatGPT,
>
> **[1:33](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/custom-gpts?u=76281980&t=93)** but with some additional features. It has a nice description, that it generated, as well as some buttons, where you can quickly choose one of the default actions. Now, you can modify those later, but it's nice that it creates them for you. It's going to ask you some additional questions here. These questions are similar to the second part of my custom instructions. So I'm going to go ahead and copy those as well. I think it's fine if it makes some assumptions, but I do want it to search for things on the web, and when it does, I want it to give me some references of where it found the information. It's going to continue to ask you questions about how you want it to respond and deal with people. And so I'm going to keep on answering questions until it has everything it needs. Now it's ready to work. Before you publish this, it's a good idea to try some different chats, and you can have it make some adjustments to the custom ChatGPT this way. Now, you notice here that it did find a problem with the structure of the data, so it's making an adjustment, and then it's able to give you the information that you ask for. This can be really helpful for a doctor to have access to the information in a fun and friendly way. You can also further refine this tool by hitting this Configure tab right here. And then do things like change the name of your GPT, the description, and some of the instructions that are right here. You can also see that there are some conversation starters, and this is where you can arrange and redefine those buttons if you want it to have some default actions. Notice that the knowledge is also right here, so you can add some additional files
>
> **[3:06](https://www.linkedin.com/learning/prompting-chatgpt-with-multimodal-techniques/custom-gpts?u=76281980&t=186)** or perhaps replace this document whenever it's updated. You can see that this has all the features of ChatGPT Plus. So it can do web searches, it can create images, and it can even write Python code for you. You can turn these off if you don't want your doctor to be revising your data. To publish this, you can hit the Save button right here. You can have as many of these custom ChatGPTs as you want, and they can be public, private, or accessible with a link. Eventually, they'll make it into a GPT store. That's sort of like an app store. Now, this ability to have a GPT that has everything preloaded and understands your data while having access to all of ChatGPT Plus features is a new way of using [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Multimodal Prompting](../../Skills/Artificial%20Intelligence%20(AI)/Multimodal%20Prompting.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Env Vars:** gpt (10)
> **CLI Commands:** python (2), make (2), find (1)
> **Analogies:** just like (1), picture (1), similar to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - the (1)


## Instructor

- [Ray Villalobos](../../Instructors/Software%20Development/Ray%20Villalobos.md)

## Resources

- Exercise files available

## Skills Covered

- AI Prompting
- Artificial Intelligence (AI)
- ChatGPT
- Prompt Engineering

## Path Context

### In [Building Generative AI Skills for Web Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Web%20Developers.md)
← [Prompt Engineering- How to Talk to the AIs](Prompt%20Engineering-%20How%20to%20Talk%20to%20the%20AIs.md) | **4 of 10** | [Building PHP Applications with Generative AI](Building%20PHP%20Applications%20with%20Generative%20AI.md) →

## Appears In

- [Building Generative AI Skills for Web Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Web%20Developers.md)

## Related Courses

_Courses sharing skills:_

- [Prompt Engineering and AI Agents with ChatGPT](Prompt%20Engineering%20and%20AI%20Agents%20with%20ChatGPT.md) — Artificial Intelligence (AI), ChatGPT, Prompt Engineering
- [Generative AI for Data Engineering- ChatGPT Power Tips](Generative%20AI%20for%20Data%20Engineering-%20ChatGPT%20Power%20Tips.md) — Artificial Intelligence (AI), ChatGPT, Prompt Engineering
- [Multimodal Prompting with Google's Project Gemini](Multimodal%20Prompting%20with%20Google's%20Project%20Gemini.md) — Artificial Intelligence (AI), AI Prompting, Prompt Engineering
- [Introduction to Multimodal Prompting for Generative AI](Introduction%20to%20Multimodal%20Prompting%20for%20Generative%20AI.md) — Artificial Intelligence (AI), AI Prompting, Prompt Engineering
- [Better Relationships and More Sales- Using ChatGPT to Sell](Better%20Relationships%20and%20More%20Sales-%20Using%20ChatGPT%20to%20Sell.md) — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)