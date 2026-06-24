---
type: course
cssclasses:
  - lle-course
slug: exploring-million-token-models-with-google-gemini-pro-1-5
url: "https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5"
duration_minutes: 18
duration: 18m
updated: 4/22/2024
learners: 16429
skills:
  - Chatbot Development
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Google Gemini
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEN1p4G_REgGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713473090290?e=2147483647&amp;v=beta&amp;t=EaFp8l6We_yOE8ry8DgKaB70ZvG1xrxKjwAazZhe2FU"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - '[Prompt Engineering With Gemini](Prompt%20Engineering%20With%20Gemini.md)'
next_courses:
  - '[Getting Started with the Google Gemini API](Getting%20Started%20with%20the%20Google%20Gemini%20API.md)'
path_nav: '[{"path":"A Developer''s Guide to Google Gemini","position":2,"total":8,"prev":"Prompt Engineering With Gemini","next":"Getting Started with the Google Gemini API"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/chatbot-development
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Exploring%20Million-Token%20Models%20with%20Google%20Gemini%20Pro%201.5.md)

![Exploring Million-Token Models with Google Gemini Pro 1.5](https://media.licdn.com/dms/image/v2/D4D0DAQEN1p4G_REgGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713473090290?e=2147483647&amp;v=beta&amp;t=EaFp8l6We_yOE8ry8DgKaB70ZvG1xrxKjwAazZhe2FU)

# Exploring Million-Token Models with Google Gemini Pro 1.5

> Google Gemini Pro 1.5 breaks new ground with its million-token capacity, reshaping AI prompting by maximizing the size of its context window. Learn how modern LLMs use a million tokens to handle complex data sets, and allow advanced analysis of different media types, such as text, images, audio, and video processing.

> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5) | 18m | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The future of AI is huge](#the-future-of-ai-is-huge)
- [**1. One Million Tokens with Google Gemini Pro 1.5**](#1-one-million-tokens-with-google-gemini-pro-15) (4 videos)
  - [Google Gemini Pro and the Gemini Family](#google-gemini-pro-and-the-gemini-family)
  - [Why larger context sizes make a difference](#why-larger-context-sizes-make-a-difference)
  - [Using Google AI Studio for testing large context windows](#using-google-ai-studio-for-testing-large-context-windows)
  - [Exploring large context assets: Audio, Video, Text](#exploring-large-context-assets-audio-video-text)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The future of AI is huge](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/the-future-of-ai-is-huge?u=76281980&t=0)** - Something a bit unexpected happened on the way to artificial general intelligence, and that's the explosion of huge context [Windows](../../Glossary/Service/Windows.md). In other words, the amount of information that [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) can't remember when handling prompts. With [Gemini](../../Skills/Software%20Development/Gemini.md) 1.5, [Google](../../Glossary/Service/Google.md) has taken context windows to a whole new level, letting users access up to a million [Tokens](../../Skills/Web%20Development/Tokens.md). But what does that mean in practical terms? These new tools let you access documents with more than 700,000 words, ask questions about an entire developer code base, and even handle questions in an hour's worth of video. So, now, that we've entered the age of massive context, what can that do for you? Should that affect your prompting engineering strategy? And is it worth the cost? Let's find out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **CLI Commands:** find (1)
> **Versions:** 1.5 (1)
> **Definitions:** in other words (1)
> **Speakers:** - something (1)


### 1. One Million Tokens with Google Gemini Pro 1.5

[↑ Back to Table of Contents](#table-of-contents)

#### [Google Gemini Pro and the Gemini Family](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=0)** - Let's talk about the [Gemini](../../Skills/Software%20Development/Gemini.md) technology overall. Gemini is a family of tools with multimodal capabilities. And that means that it can handle text, images, video, and code by default, and you can combine these to provide rich context to the model. Now, officially, there are three versions you can use: Gemini Nano, Pro, and Ultra. These models are sized differently so that the Nano model is tiny and really meant for devices without a lot of memory. The Ultra model, although the most capable, is also the slowest and it requires the most compute time and resources. The Pro model is a good middle ground between performance and size. There are two versions of the Pro Model, 1.0 and 1.5, and most versions of the model support a 32K parameter context length, while the 1.5 model supports a 128,000 context window by default. But under a developer preview, which you can access now for free, but fully available after May the 2nd, 2024, developers have access to up to a million [Tokens](../../Skills/Web%20Development/Tokens.md). The model has even been tested with up to 10 million tokens. So let's talk about tokens in context [Windows](../../Glossary/Service/Windows.md). A token is a standard unit of measure for an AI model. Models break up their inputs into a series of tokens by converting data into numbers they can process easier. Different modalities like images, charts, and graphs convert to different quantities of tokens. In terms of text, you can think of a thousand words
>
> **[1:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=93)** as converting to about 700 to 750 tokens. I'm using the OpenAI Tokenizer to illustrate how this works. This shows you how the model can break down text into tokens. You can see that different models like GPT-3 and 4 vary slightly in how they produce tokens, so the same would apply to [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md). I'm going to paste the text of the famous poem "The Raven" to show you how many tokens an average piece of text can produce. Now here's something really important. The context window is composed of two types of tokens. The input tokens are the amount of information the model can be fed while the output tokens is the amount the model can output. You have to remember that the context window refers to the entire conversation. As you prompt Gemini and it response, the context window will get bigger. With a million tokens, the model can ingest and analyze an hour's worth of video, 11 hours of audio, 30,000 lines of code, and up to about 700,000 words, which is about seven to 10 books in length. Although Pro is the model running the Google Gemini chatbot, it uses Gemini 1.0 at the moment. You can access version 1.5 with a number of developer tools, and the easiest one to use is [Google](../../Glossary/Service/Google.md)'s AI Studio. But if you have a [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) account, you can use [Vertex](../../Skills/Software%20Development/Vertex.md) AI. You can also use the API as a developer by getting an API key and then writing your own code to test the tool in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and other programming languages. Let's talk about pricing.
>
> **[3:06](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/google-gemini-pro-and-the-gemini-family?u=76281980&t=186)** For a limited time while under developer preview, you can use the model free of charge. After May 2nd, you'll be charged depending on a number of parameters. First is the amount of requests per minute, which are two per minute during the preview, and five requests per minute once it launches. This will be the throughput or the speed that the bottle can respond in. Input tokens are free during the preview and $7 per million tokens afterwards. Output tokens are also free during the preview and $21 per million tokens afterwards. So although this is a really exciting tool, it is indeed a pricey proposition. But if you're looking to do some large file analysis, this is the only way to go for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (17), [Gemini](../../Skills/Software%20Development/Gemini.md) (5), [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Definitions:** is a  (4), means that (1), refers to (1)
> **Versions:** 1.0 (2), 1.5 (2), version 1 (1)
> **Env Vars:** api (2), gpt (1)
> **CLI Commands:** python (1)
> **Speakers:** - let (1)

#### [Why larger context sizes make a difference](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=0)** - Let's talk about how these larger contexts work, and why that makes a huge difference. The version of [Gemini](../../Skills/Software%20Development/Gemini.md) uses something called a Mixture of Experts Model. That's a modern technique where instead of passing your prompts to a single large model, the tool sends requests to two or more [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) that are more specialized in answering specific types of prompts. For example, one model might be better at dealing with math, and another with audio or video. A mixture of experts is the key to making multimodal models effective. A million [Tokens](../../Skills/Web%20Development/Tokens.md) allows you to feed the model a massive amount of data. Let's take a look at what that means practically and compare it to other models. The tokenizer shows that the text of a small poem like The Raven converts to 1,586 tokens with 6,261 characters. Now this fits well under the current version of Chat GPT Free which allows a context window of about 8,000 tokens. The poem is about three pages, so theoretically I could use a poem about five times the length within that token size. But remember that the context window refers to the entire size of a conversation, so you'd want to have something smaller than the limit. The next tier in both Chat GPT+, as well as in regular Gemini Pro, is the 32K token size. And you can see by the tokenizer that this would barely be able to fit a small book like The Strange Case of Dr. Jekyll and Mr. Hyde, which is about a hundred pages, without room for additional context.
>
> **[1:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=93)** A kilobyte is actually 1024 bytes, so that makes the limit for a 32K 32,768. The next context window limit is 128K for Chat GPT Enterprise. And it's also the normal token size limit for Gemini Pro 1.5. That could easily fit a book bigger than H.G. Wells' The War of the Worlds at 82,362 tokens. Now something massive like Jane Austen's Pride and Prejudice gets up to a whopping 160,000 tokens, or almost 500 pages. That would be tough for even the regular version of Gemini Pro, although Anthropic's Claude would be able to handle this since it has a generous 200K context window. But what exactly can you do with something like this? One of the modern tests for these models is called the needle in a haystack test. Where a random factor or statement is hitting in a huge context window to see if the models can isolate this. This version of Gemini is easily able to do this, finding the needle 99% of the time in blocks of data with a million tokens. And it's able to do this with not just text, but also audio and video. Other tests like the Machine Translation from One Book, or MOTB benchmark, shows a model's ability to learn a new skill from context. Gemini Pro does really well in this benchmark, being able to translate from the endangered language Kalamang after being fed a grammar manual. Because it can handle different modalities,
>
> **[3:05](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/why-larger-context-sizes-make-a-difference?u=76281980&t=185)** you can combine text with images or video to give the model more context. So for example, it was fed video from the Apollo 11 mission, and a rudimentary drawing, and it was able to locate where in the video the small step for mankind happened. The size of the context window and its ability to understand languages makes it capable of handling programming tasks where it can generate code, find bugs, and solve competitive coding problems with ease. However, in order to take a look at those capabilities, you'll need developer access to Gemini. And we'll take a look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (7), [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Env Vars:** gpt (3), motb (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Versions:** 1.5 (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - let (1)

#### [Using Google AI Studio for testing large context windows](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=0)** - Since [Google](../../Glossary/Service/Google.md) AI Studio is the easiest way to work with [Gemini](../../Skills/Software%20Development/Gemini.md), let's take a look at the tool and what you can do with it. AI Studio is a developer-focused version of a chatbot with some additional features and controls you can use to test the models. You can see three main parts: to the left is the menus, in the middle is the prompting section, and to the right are the prompt settings. One thing to keep in mind when working with Gemini 1.5 is that not all the sections here will work with the new model quite yet. The menu section has three different subsections: the main menu and API generation at the top, then a section for documentation and help, and finally, settings. The menu is where you can find the API key generation if you're going to be coding with Gemini on your own. Now, API keys are a way to create secure connections to the model. Just remember that the Gemini model is only free to try until May 2nd, 2024, so using an API key will incur charges afterwards. Next is an option to create a new prompt, and there are three types of prompts: a Chat, a Freeform, or a Structured prompt. A Chat prompt is for back and forth conversations with Gemini, and it's probably the one that will seem the most familiar since it's the closest thing to a cha bot. You can add any types of images or video or audio, and have a natural back and forth conversation with the model. You'll be able to upload photos or use photos that are already in your [Google Drive](../../Skills/Software%20Development/Google%20Drive.md). Also, when you do save photos, they'll automatically be added to your Google Drive as well.
>
> **[1:35](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=95)** Let's try having a conversation about photos I added earlier. And this is just a photo of myself, so I'll ask it to describe the setting. Now, let's try adding another photo and seeing if it could compare the two.
>
> **[1:52](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=112)** One thing you'll definitely need to remember is to save your prompts. Unlike working with a normal chatbot, simply hitting the Enter key won't automatically save or name things for you, so you can do that at the top right here. I'll call this one First Prompt. This now appears in the My library section on the left-hand menus. Once you save that chat, you'll be able to share it with others with the button at the top right. Notice that there's a Get code section here as well. This will normally create some sample code that you can use with the parameters you've set in AI Studio. But as of this recording, it's not available for the current Gemini 1.5. At the top of the prompt, you'll see a section for System Instructions, which is a newer feature. This is where you can add parameters that you want the prompt to consider before it answers any questions. The nice thing is that system instructions will persist between prompts as long as you stay within the same prompt type. So, for example, the system prompt would disappear if I change my prompt type to a Freeform prompt. To make most chatbots write an answer more like me, I usually include something like this that says, "To avoid using verbose, indirect, or jargon-heavy phrases. Opt for straightforward, concise, and conversational language that is accessible and engaging to a broad audience, et cetera, et cetera." This will make it easier for the model to sound a little bit more like me. Notice that at the bottom you have a small information area where you can look at the token count you've used up so far as well as the total context window size. On the right-hand side, you can see the Run setting section
>
> **[3:28](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=208)** where you can choose the model type, so we can switch to the Pro 1.0 model here if we want to. And you also have settings for the temperature, which controls the creativity setting for the current model, although it's, again, not available for version 1.5. The stop sequence lets you look for a keyword that causes the model to pause when processing data. And then, there are safety settings, which are a series of parameters that let you control how much any content that would be considered harmful should be dropped. If we switch to the 1.0 model, you can see where they would appear in the code by hitting the Get code button. There's also a section for the Top K and Top P parameters. Top P is called nucleus sampling and controls the predictability of the wording in responses, so a high Top P would pick an answer that is more creative. And the Top K parameter controls the size of the vocabulary when the LLM is creating answers. So, a high Top K would mean a larger vocabulary, making the results more creative. I'll switch back to the 1.5 model. Another option is to run a Freeform prompt. Now, this is similar to a Chat, but it creates more of a document that you can interact with, so you can make changes, and it's a great place to fine tune a prompt, plus it lets you add variables through this table interface where you can add additional examples for [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) to consider. You also have the option of running a structured prompt, which gives you the ability to include up to 500 examples and then write different inputs
>
> **[5:02](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/using-google-ai-studio-for-testing-large-context-windows?u=76281980&t=302)** and outputs to test the responses. This option is a bit less flexible since it currently only offers an image insertion. So, we'll stay with the Chat and the Freeform prompts for our tests. There's also a way to create a tuned model, which lets you import a Google Sheets or a CSV. This is just a convenient way to create a structured prompt. And for now, this is another thing that you can't use with the 1.5 model. So, now that we've got some experience with the AI Studio, let's take a look at how the model performs in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (6), [Google](../../Glossary/Service/Google.md) (2), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (2), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Versions:** 1.5 (4), 1.0 (2), version 1 (1)
> **Env Vars:** api (4), llm (1), csv (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** switch to (2)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)

#### [Exploring large context assets: Audio, Video, Text](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=0)** - Let's take a look at what we can do with this large context and different modalities. I'm going to start with a simple video. This is a YouTube short I created to show a get tip feature called Get Update index. Let's see what [Gemini](../../Skills/Software%20Development/Gemini.md) 1.5 can do with this. I'm going to start by going in and creating a new chat, so I'll give this thing a name, and I'm going to hit the video button here and upload my video. I'll start by asking, what can you tell me about this video? This registers as 8,850 [Tokens](../../Skills/Web%20Development/Tokens.md), and it was easily able to explain what I was trying to do with the video. I'll follow up with, can you give me a summary of the tip to see what it does? It's a pretty good explanation, and notice that it knew enough about the code to display things in a programming font, and it was easily able to explain what I was trying to do with the video. This is because when Gemini reads video, it's also reading screenshots of the video frames, and it's able to see the text in there. I'll do a follow up and ask it to give me a good title and description I can use in the video. Again, it does a good job here, and I got to admit, those are some pretty friendly YouTube titles, as well as great descriptions. Let's try something else with much longer context to do a needle and a haystack type test. And what I want to do is find a very specific detail from a series of documents. What I'm looking for is in this section on page 46 of the middle PDF, and I wanted to tell me about the telegraph lines in Argentina.
>
> **[1:33](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=93)** So I'll prompt, I remember a discussion about the telegraph lines in Argentina. Can you tell me the increased lengths of the lines added in 1906? So it was able to find that information in one of the three PDFs that I uploaded with pretty good accuracy. Now, I could have found that information through a simple search. So let's do something that will cause it to reason a little bit. I'll ask it to summarize the importance that the telegraph lines had on the development of Argentina from the document context. You'll see that working with a large context window will take a while every time you search through the content, but it does a nice job of reasoning and summarizing way beyond what you could accomplish with search. Let's try another type of modalities. The model is capable of handling both audio and video, and I showed you how it works with video. So I have a large audio file from a podcast episode I did at the beginning of the year, and I'll create a new prompt. This time I'm going to go for a freeform prompt. I already have the audio loaded up in my [Google Drive](../../Skills/Software%20Development/Google%20Drive.md), so I'll choose that, and I'll choose this episode from here. It did add the audio a lot faster, because it was end the Google Drive, and because it's something that is much smaller than the three encyclopedias. I'll ask it to create show notes for this audio stream and to include timestamps at the end of each sentence. It did a pretty good job summarizing the episodes, but I noticed a few interesting things between the video and audio tests. The video test was much more precise,
>
> **[3:08](https://www.linkedin.com/learning/exploring-million-token-models-with-google-gemini-pro-1-5/exploring-large-context-assets-audio-video-text?u=76281980&t=188)** and that's because it was able to pick out the specific code I had typed from the screenshots that it does when it's processing the video. And here, it heard a few things wrong, so it didn't know my name properly. The nice thing about using freeform prompts is that we can improve on what we've done with the model. So let's try modifying this a little bit. I'm going to ask it to generate some YouTube video links using an ID from a YouTube video. It then create good YouTube links for me, so I'm going to add some more details here. Also, for some reason, it's calling me Robbie the Loves, so I'm going to modify that and just let it know who I am. Now, it still doesn't do a good job with the markdown links. Notice that what it did is actually add a set of links at the very bottom of the page, and that's not really what I was looking for. So again, I'm going to work with this to try to modify it to do the right thing. I'll put this section in parentheses right here and see if it does a little bit better. Now that it's done, you can see that it did a much better job with the instructions, especially with the markdown links at the end of each sentence. Now you can see that with this capabilities, you have a whole new type of tool that lets you analyze large content, and can be specially powerful when processing video where it combines the full multimodal abilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **CLI Commands:** find (2)
> **Env Vars:** pdf (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)


## Instructor

- [Ray Villalobos](../../Instructors/Software%20Development/Ray%20Villalobos.md)

## Skills Covered

- Chatbot Development
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Google Gemini

## Path Context

### In [A Developer's Guide to Google Gemini](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/A%20Developer's%20Guide%20to%20Google%20Gemini.md)
← [Prompt Engineering With Gemini](Prompt%20Engineering%20With%20Gemini.md) | **2 of 8** | [Getting Started with the Google Gemini API](Getting%20Started%20with%20the%20Google%20Gemini%20API.md) →

## Appears In

- [A Developer's Guide to Google Gemini](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/A%20Developer's%20Guide%20to%20Google%20Gemini.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md) — Artificial Intelligence (AI), Google Gemini, Large Language Models (LLM)
- [Google Gemini For Developers](Google%20Gemini%20For%20Developers.md) — Artificial Intelligence (AI), Google Gemini, Large Language Models (LLM)
- [LLM Foundations- Building Effective Applications for Enterprises](LLM%20Foundations-%20Building%20Effective%20Applications%20for%20Enterprises.md) — Artificial Intelligence (AI), Large Language Models (LLM)
- [LLMOps in Practice- A Deep Dive](LLMOps%20in%20Practice-%20A%20Deep%20Dive.md) — Artificial Intelligence (AI), Large Language Models (LLM)
- [Generative Ai And Llmops Building Blocks And Applications](Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md) — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)