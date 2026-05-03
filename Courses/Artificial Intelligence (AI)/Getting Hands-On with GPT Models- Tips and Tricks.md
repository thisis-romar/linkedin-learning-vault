---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: getting-hands-on-with-gpt-models-tips-and-tricks
url: "https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks"
duration_minutes: 49
duration: 49m
level: Advanced
updated: 7/11/2025
learners: 14050
skills:
  - OpenAI API
  - Artificial Intelligence (AI)
  - ChatGPT
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFIfHHuNXRfxw/learning-public-crop_675_1200/B4EZei_GFCHsAY-/0/1750786139288?e=2147483647&amp;v=beta&amp;t=pOiWDVmbWGXmOfuKs-uIf3tlUnTCkRTgBpRQojBLyJM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Hands-On Projects for OpenAI-Powered Apps]]'
prev_courses:
  - '[[Gpt Foundations Building Ai Powered Apps]]'
next_courses:
  - '[[Hands-On OpenAI API- Building a Real-World Solution]]'
path_nav: '[{"path":"Hands-On Projects for OpenAI-Powered Apps","position":2,"total":5,"prev":"Gpt Foundations Building Ai Powered Apps","next":"Hands-On OpenAI API- Building a Real-World Solution"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/web-development
  - skill/openai-api
  - skill/artificial-intelligence-ai
  - skill/chatgpt
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Getting%20Hands-On%20with%20GPT%20Models-%20Tips%20and%20Tricks.md)

![Getting Hands-On with GPT Models: Tips and Tricks](https://media.licdn.com/dms/image/v2/D4E0DAQFIfHHuNXRfxw/learning-public-crop_675_1200/B4EZei_GFCHsAY-/0/1750786139288?e=2147483647&amp;v=beta&amp;t=pOiWDVmbWGXmOfuKs-uIf3tlUnTCkRTgBpRQojBLyJM)

# Getting Hands-On with GPT Models: Tips and Tricks

> In this course, Denys Linkov—the Head of ML at Wisedocs—dives into the world of enhanced productivity with advanced ChatGPT prompting techniques. Discover how to generate compelling content and improve daily workflows. Learn to leverage powerful methods like few-shot learning and chain of thought reasoning to bring clarity and precision to your tasks. Explore practical techniques for maximizing AI

> [LinkedIn Learning](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks) | 49m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Level up your ChatGPT skills](#level-up-your-chatgpt-skills)
  - [Configuring ChatGPT](#configuring-chatgpt)
- [**1. Refresh Your Basic Prompting Practice**](#1-refresh-your-basic-prompting-practice) (5 videos)
  - [Brainstorming with GPT](#brainstorming-with-gpt)
  - [Iterating with GPT](#iterating-with-gpt)
  - [Improving writing with GPT](#improving-writing-with-gpt)
  - [Challenge: Creating an ice cream advertisement](#challenge-creating-an-ice-cream-advertisement)
  - [Solution: Creating an ice cream advertisement](#solution-creating-an-ice-cream-advertisement)
- [**2. Advance Your Prompts to Improve Results**](#2-advance-your-prompts-to-improve-results) (6 videos)
  - [An overview of OpenAI GPT and Reasoning Models](#an-overview-of-openai-gpt-and-reasoning-models)
  - [Improving prompting with examples and quotes](#improving-prompting-with-examples-and-quotes)
  - [Using completion sequences and few shot](#using-completion-sequences-and-few-shot)
  - [Using chain-of-thought reasoning](#using-chain-of-thought-reasoning)
  - [Challenge: Give GPT a tricky problem](#challenge-give-gpt-a-tricky-problem)
  - [Solution: Give GPT a tricky problem](#solution-give-gpt-a-tricky-problem)
- [**3. Learn How to Code with ChatGPT**](#3-learn-how-to-code-with-chatgpt) (6 videos)
  - [Interpreting code with ChatGPT](#interpreting-code-with-chatgpt)
  - [Generating code with ChatGPT](#generating-code-with-chatgpt)
  - [Editing code with ChatGPT](#editing-code-with-chatgpt)
  - [Formatting responses as JSON with ChatGPT](#formatting-responses-as-json-with-chatgpt)
  - [Challenge: Auto formatting an API call](#challenge-auto-formatting-an-api-call)
  - [Solution: Auto formatting an API call](#solution-auto-formatting-an-api-call)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Level up your ChatGPT skills](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=0)** - Okay, you've used GPT before and you know the basics, but you're looking to take your prompting to the next level.
>
> **[0:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=7)** We'll start with some basic prompting, like generating compelling content.
>
> **[0:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=11)** Then we'll advance our [[Prompt Engineering]] skills to explore things like few-shot learning and chain of thought reasoning.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=17)** We'll also learn how [[Generative AI]] can help us work with data and code, even if that's not your strong suit.
>
> **[0:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=23)** Hi, I'm Denys Linkov, Head of Machine Learning at Wisedocs.
>
> **[0:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=26)** I use GPT in my daily job to experiment and be more productive, and I'm excited to share my best tips with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1), [[Generative AI]] (1)
> **Env Vars:** gpt (2)
> **Speakers:** - okay (1)

#### [Configuring ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=0)** - [Instructor] You might've used the public version of [[ChatGPT]] going to [chatgpt.com](https://chatgpt.com).
>
> **[0:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=5)** Here, you can use ChatGPT for free, but there are some limitations.
>
> **[0:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=9)** You can upload data.
>
> **[0:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=11)** If we click on the Attach, we get the Try Advance Features for Free notification and we can switch models going at the top left here, clicking on ChatGPT.
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=21)** If we create an account, we can address these concerns.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=24)** So let's set up our ChatGPT environment.
>
> **[0:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=27)** I've created an account and upgraded to the Plus plan.
>
> **[0:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=30)** You can see in the top right over here.
>
> **[0:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=32)** Clicking on the logo on Plus, I can see Upgrade Plan.
>
> **[0:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=37)** So you can see here I'm on the Plus plan and there's also a Pro plan.
>
> **[0:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=41)** You can see all the features by scrolling through the plans here.
>
> **[0:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=43)** There's also a Business plan.
>
> **[0:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=45)** So if you're working on a team, this is a good one to enable.
>
> **[0:48](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=48)** There's also Enterprise, but you'll have to contact a sales rep for that.
>
> **[0:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=52)** One of the benefits of the Business plan is that your data has additional protections on it, but we can enable some protections on our personal account.
>
> **[0:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=59)** Let's go ahead and exit on the top right here.
>
> **[1:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=62)** Click back on the top right here and go to Settings.
>
> **[1:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=66)** Let's go to Data Controls on the left, and here we can turn off the Improve the Model for Everyone.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=71)** So in this mode, if we toggle this off, we won't be sharing our information that we upload to ChatGPT to open AI for training their models.
>
> **[1:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=79)** Now if we want to learn more, we can click on Learn More to open up the policies.
>
> **[1:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=83)** So when you're using [[Large Language Models (LLM)|large language models]], it's important to review the policies as they can change, and also depending on the type of content that you're uploading.
>
> **[1:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=91)** Let's close that.
>
> **[1:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=92)** Now, this configuration are interactions with ChatGPT should be more private.
>
> **[1:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=97)** Let's continue personalizing our account by going to Personalizations on the left here.
>
> **[1:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=101)** I'm going to click on it, and I'm going to click on Memory.
>
> **[1:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=104)** So by default, memory is enabled in ChatGPT, but if you don't want to use it, you can turn it off by clicking the toggle here.
>
> **[1:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=111)** Now the benefit of memory is that you'll have previous context that is being used in all your responses.
>
> **[1:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=117)** We can also click on Custom Instructions to provide some more context to ChatGPT on our interactions.
>
> **[2:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=123)** We can add a nickname, some descriptions on what we do, some different characteristics, and so forth.
>
> **[2:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=129)** I'm going to leave it as the default for now.
>
> **[2:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=131)** Let's click Cancel.
>
> **[2:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=133)** Now, one way that you might've interacted with ChatGPT is through the speech option.
>
> **[2:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=136)** So let's click on it, click on Speech, and we have the voice here.
>
> **[2:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=141)** Let's play a sample.
>
> **[2:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=143)** - [ChatGPT] Hello, it's lovely to meet you.
>
> **[2:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=146)** - [Instructor] Alright, that sounds okay.
>
> **[2:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=148)** I can also click on the voice name here to select a different option.
>
> **[2:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=152)** Let's stick with the default.
>
> **[2:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=154)** Now, one final configuration we'll make is going to connected apps.
>
> **[2:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=158)** Now here we can connect some different integrations depending on what we want to do with ChatGPT.
>
> **[2:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=162)** We see [[Google Drive]], [[Microsoft OneDrive|OneDrive]], [[GitHub]], Dropbox, and a few others.
>
> **[2:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=167)** As you're using ChatGPT, these integrations might evolve, so keep an eye out.
>
> **[2:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=172)** Let's close these up and go back to ChatGPT.
>
> **[2:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=175)** Let's type in a prompt.
>
> **[2:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=177)** What is one plus one?
>
> **[2:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=179)** And hit Enter.
>
> **[3:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=181)** All right, here we go, that's an answer.
>
> **[3:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=184)** Now let's go ahead and try to use the voice mode.
>
> **[3:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=186)** I'm going to go to the bottom right here and click Use Voice Mode.
>
> **[3:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=190)** What is one plus one?
>
> **[3:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=193)** - [ChatGPT] One plus one is two.
>
> **[3:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=195)** It's a classic.
>
> **[3:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=197)** - [Instructor] And there we go, that's the voice mode.
>
> **[3:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=199)** If I just want to use dictation, I can also click on the Dictate on the bottom right.
>
> **[3:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=205)** So let's ask ChatGPT, What is one plus one?
>
> **[3:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=210)** And you can see here that this prompt was dictated.
>
> **[3:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=212)** So now we've configured ChatGPT, and we're ready to prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (17), [[Large Language Models (LLM)|Large language models]] (1), [[Google Drive]] (1), [[Microsoft OneDrive|Onedrive]] (1), [[GitHub]] (1)
> **UI Navigation:** click on (9), go to (3), toggle (2)
> **Speakers:** - [instructor] (3), - [chatgpt] (2)
> **CLI Commands:** make (1)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### 1. Refresh Your Basic Prompting Practice

[↑ Back to Table of Contents](#table-of-contents)

#### [Brainstorming with GPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=0)** - [Instructor] So we have writer's block.
>
> **[0:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=2)** We're trying to brainstorm some ideas, but nothing's coming to us.
>
> **[0:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=6)** Let's use [[GPT-4]] to help us out.
>
> **[0:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=8)** I'm on [ChatGPT.com](https://ChatGPT.com) and have selected [[GPT-4|GPT-4o]] in the top left corner as my model.
>
> **[0:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=14)** You can click up here to double check.
>
> **[0:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=16)** I'm trying to plan an ice cream fundraiser for a charity.
>
> **[0:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=19)** Let's go ahead and type in a prompt.
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=21)** I'm going to type in brainstorm 5 ice cream fundraiser ideas.
>
> **[0:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=30)** Now let's click enter.
>
> **[0:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=32)** Right, here we go, we have some responses.
>
> **[0:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=34)** We have Build your Own Sundae Bar, Ice Cream Eating Contest, Scoop for a Cause, Flavor Creation Contest, and an Ice Cream Silent Auction.
>
> **[0:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=43)** Okay, these sound pretty good.
>
> **[0:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=45)** I like the Flavor Creation Contest.
>
> **[0:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=47)** This is a pretty fun idea, but I don't have that much time to prepare for this.
>
> **[0:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=51)** So let's ask [[ChatGPT]] for three simpler ideas that don't require too much prep.
>
> **[0:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=56)** What are three ideas that don't require too much prep?
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=64)** Right, let's scroll through.
>
> **[1:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=67)** We have an ice Cream Sale Table, Scoops & Go, Donation for a Cause.
>
> **[1:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=72)** Alright, these are pretty good.
>
> **[1:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=74)** Now, based on this iteration, I've actually come up with my own idea.
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=77)** What if we do a coupon book with local ice cream stores?
>
> **[1:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=80)** So this will be pretty similar for Donation for a Cone Day.
>
> **[1:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=84)** So let's ask ChatGPT to give us some coupon ideas.
>
> **[1:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=88)** I have a new idea.
>
> **[1:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=91)** Can you help me refine a coupon book for ice cream?
>
> **[1:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=98)** Right, here we go, we have some responses.
>
> **[1:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=101)** Now, ChatGPT likes to use emojis and different headings.
>
> **[1:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=104)** So you'll see that that's pretty common in the responses.
>
> **[1:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=107)** Now the responses you might be getting or the ideas might be slightly different, so don't be alarmed.
>
> **[1:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=112)** [[Large Language Models (LLM)|Large language models]] often produce different results for different people at different times.
>
> **[1:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=116)** Okay, here we go, we have some ideas here.
>
> **[1:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=119)** Free items, BOGO, discounts, exclusive items, and challenge coupons.
>
> **[2:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=124)** Okay, these sound pretty good.
>
> **[2:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=126)** Let's actually make some challenge coupons.
>
> **[2:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=129)** So let's ask ChatGPT to create an illustration of this coupon book.
>
> **[2:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=133)** Can you create a sample coupon with a challenge on it?
>
> **[2:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=140)** Generate an image.
>
> **[2:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=143)** Now you can see here ChatGPT can generate images right in the console.
>
> **[2:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=147)** We'll talk about this a little bit more in a different video, but this is just a sneak preview.
>
> **[2:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=152)** All right, here we go.
>
> **[2:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=153)** So this is a coupon, and this looks pretty good.
>
> **[2:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=155)** Complete our ice cream trivia and get a free topping.
>
> **[2:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=158)** Okay, this is great.
>
> **[2:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=160)** Now to wrap up my task, I want to generate an email to send to my friends and family to come to my fundraiser.
>
> **[2:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=166)** Let's type out, write an email for this coupon, book ice cream fundraiser.
>
> **[2:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=175)** And hit enter.
>
> **[2:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=177)** Here we go, we have the subject line, we have an introduction, we have some different values that we have within the coupon book, and we have a call to action.
>
> **[3:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=187)** So this is great.
>
> **[3:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=188)** I can now substitute my name, my group name, and who I'm emailing to send off this email.
>
> **[3:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=194)** And that's how we went from having writer's block about this fundraiser to generating an email that we can now send out all by the power of GPT-4.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[GPT-4]] (2), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** gpt (3), bogo (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **Speakers:** - [instructor] (1)

#### [Iterating with GPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=0)** - [Instructor] I'm hosting an event about [[ChatGPT]] and [[Large Language Models (LLM)|large language models]], and I'd like some feedback from a colleague, but they're on vacation.
>
> **[0:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=7)** So let's use GPT to start.
>
> **[0:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=9)** My goal is to iterate through an itinerary and get some feedback from [[GPT-4]].
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=13)** Now, I've attached this starting itinerary in the exercise folder.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=17)** Let me show you how to access it.
>
> **[0:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=19)** You can see here we have the exercise files and we're going to go into 01 02.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=24)** We're going to start with the itinerary prompt.txt.
>
> **[0:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=27)** Let's go ahead and copy that.
>
> **[0:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=29)** We'll head back to ChatGPT and paste it in.
>
> **[0:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=32)** So here's our prompt where we have an initial itinerary and we want some feedback.
>
> **[0:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=36)** Let's click enter.
>
> **[0:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=38)** Okay, let's look at the results.
>
> **[0:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=40)** We see some initial compliments from ChatGPT and then some areas to consider.
>
> **[0:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=45)** As you can see here in the output, we have a lot of emojis and markdown to structure the text.
>
> **[0:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=51)** So, we have these suggestions: it's a pretty tight timing, very early lunch, we have talks back-to-back, so participants might get tired, and no closing remarks.
>
> **[1:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=60)** Now here's a revised structure.
>
> **[1:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=63)** This actually looks better.
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=64)** We start off a little later, and then we have some breaks and have lunch at 11:00.
>
> **[1:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=69)** Now what I noticed here is we're missing breakfast.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=71)** So let's ask, "Can you add breakfast to the schedule?"
>
> **[1:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=79)** So breakfast at 08:30, opening remarks and so forth.
>
> **[1:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=83)** Now as you're interacting with ChatGPT, your output might be different, the structure might be different, or the contents.
>
> **[1:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=88)** So just know that this is pretty normal.
>
> **[1:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=90)** Now let's add one more lightning talk and let's type in, "Can you add one more lightning talk "after the panel?"
>
> **[1:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=102)** Okay, here we go.
>
> **[1:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=103)** That's pretty good.
>
> **[1:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=105)** Now the lightning talks are intro to ChatGPT, future of LLMs, and real-world applications.
>
> **[1:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=109)** That's a pretty good talk.
>
> **[1:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=111)** So now let's wrap this up by creating an email to send to potential executives to attend this talk.
>
> **[1:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=117)** Let's say, "Can you generate an email "for this itinerary?"
>
> **[2:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=124)** Let's fix that typo.
>
> **[2:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=127)** This email should be for business execs, and hit enter.
>
> **[2:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=135)** So you have the subject, we have the header, and we have the contents.
>
> **[2:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=140)** Now this has emojis which might not be as professional, so let's ask for the emojis to be removed.
>
> **[2:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=145)** "Let's remove the emojis "and make it more plain text", and hit enter.
>
> **[2:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=153)** Right, here we go.
>
> **[2:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=154)** So subject, we have the Dear [First Name], we have the contents.
>
> **[2:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=159)** Okay, so we don't want to include the optional wrap-up, so let's say, "Let's make sure we don't tell attendees "that it's an optional wrap-up" and hit enter.
>
> **[2:53](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=173)** So you can see here, I'm iterating, I'm brainstorming.
>
> **[2:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=175)** I'm working with ChatGPT.
>
> **[2:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=178)** Alright, closing remarks, that looks better.
>
> **[3:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=181)** Okay, great.
>
> **[3:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=182)** In this video, we learned how to iterate with GPT.
>
> **[3:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=184)** We provided some initial ideas and then got to our goal, which was an email invite for our professional scheduled event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[Large Language Models (LLM)|Large language models]] (1), [[GPT-4]] (1)
> **Env Vars:** gpt (3)
> **CLI Commands:** make (2)
> **Ports:** :00 (1), :30 (1)
> **File Paths:** prompt.txt (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Improving writing with GPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=0)** - [Instructor] So I created a draft for an article, but when I wrote it, I was a little bit tired, so there might be some mistakes.
>
> **[0:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=6)** In this video, we'll be covering how we can use GPT to help us rewrite some content.
>
> **[0:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=11)** Let's go ahead and open the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=14)** I'm here under 01_03 and I have mistakes_article.txt open.
>
> **[0:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=20)** Let's copy this and paste it into [[ChatGPT]].
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=24)** You can see here I have some typos.
>
> **[0:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=26)** I misspelled prevalence.
>
> **[0:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=28)** If I keep scrolling down.
>
> **[0:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=29)** I have [[Microsoft Office|Office]] 363, not 365, and so forth.
>
> **[0:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=34)** So at the top, let's type, "Can you fix the mistakes in this article," and hit enter.
>
> **[0:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=43)** Okay, here we go, we see the corrections, so it's been bolded, which is quite nice, so I can see prevalence, will, driven, Office 365, and so forth.
>
> **[0:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=52)** Now, what I can do is I can ask, "Can you show me the changes you made, comparing them side by side," and hit enter.
>
> **[1:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=65)** Okay, this table format is very nice, and I can even copy it if I want to paste it somewhere.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=71)** Now, this is a pretty cool call to action if I want to download this as a PDF or as a [[Microsoft Word|Word]] document.
>
> **[1:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=76)** I still want to keep iterating, so let's not do that yet.
>
> **[1:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=79)** Now, let's ask ChatGPT to rewrite it in a more formal tone.
>
> **[1:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=83)** "Can you rewrite it in a more formal tone," and hit enter.
>
> **[1:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=90)** Okay, this seems more professional. This is pretty good.
>
> **[1:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=94)** We have some larger words.
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=96)** We have some M dashes here, as ChatGPT loves to use, and so forth.
>
> **[1:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=100)** Now, let's ask if we want to make it less formal, "Can you make it more informal, and hit enter.
>
> **[1:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=109)** Now, we can see here we have a number of sayings being used, really taken off, smooth sailing, and so forth.
>
> **[1:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=116)** Now, we can continue iterating and figuring out what the right tone is for this message.
>
> **[2:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=120)** Depending on your corporate culture and the communication style, you can keep iterating with ChatGPT, whether you're working for a large company or a smaller startup.
>
> **[2:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=129)** Now, before I publish this, I'm going to reread this article and make sure that there are no mistakes that ChatGPT has added or has missed.
>
> **[2:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=137)** So overall, ChatGPT can be a great tool for iterating over your articles and correcting any mistakes.
>
> **[2:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=143)** It's a great way to validate what you wrote and to make sure you don't publish with any silly mistakes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[Microsoft Office|Office]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** gpt (1), pdf (1)
> **File Paths:** mistakes_article.txt (1)
> **Code Identifiers:** mistakes_article (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Challenge: Creating an ice cream advertisement](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=0)** - [Host] Your challenge for this chapter is to create a campaign ad for a new ice cream flavor.
>
> **[0:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=10)** We need to do three things.
>
> **[0:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=11)** The first, let's draft a list of the top five ice cream flavors.
>
> **[0:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=16)** The second is let's create an [[Email Marketing]] campaign.
>
> **[0:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=19)** And finally, let's create three social media posts.
>
> **[0:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=22)** Now, you should leverage the three techniques we mentioned before, which includes brainstorming with GPT, having GPT write some copy and iterating with GPT so we can get some feedback.
>
> **[0:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=33)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Email Marketing]] (1)
> **Env Vars:** gpt (3)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [host] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating an ice cream advertisement](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=0)** - [Instructor] Let's go through our solution for a potential ice cream ad.
>
> **[0:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=8)** We'll start off with our first task, which is brainstorming five new ice cream flavors.
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=13)** So here in [[ChatGPT]], let's type out, can you create five new ice cream flavors for me?
>
> **[0:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=22)** And hit Enter.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=24)** Okay, Midnight Campfire, Mango Tajin Tango, Espresso Biscoff Crunch, Blueberry Basil Bliss, Salted Honeycomb Pistachio.
>
> **[0:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=34)** Okay, these all sound interesting.
>
> **[0:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=36)** I might've heard of some of them before, but that's okay.
>
> **[0:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=39)** So let's ask ChatGPT to change out this Espresso Biscoff Crunch.
>
> **[0:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=44)** Let's say, can you replace the Espresso Biscoff Crunch with another flavor?
>
> **[0:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=51)** So here we're iterating to make sure we get the experience we want.
>
> **[0:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=55)** Peach Lavender Shortbread.
>
> **[0:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=58)** Okay, that sounds pretty good.
>
> **[1:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=60)** Now, once again, ChatGPT might have generated some other flavors for you, so keep that in mind.
>
> **[1:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=65)** Now let's go ahead and generate an email.
>
> **[1:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=67)** So which one do I like here the most?
>
> **[1:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=69)** I think I like the Midnight Campfire.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=71)** So let's go ahead and say, can you generate a promotional email to ice cream stores about the Midnight Campfire flavor and hit Enter.
>
> **[1:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=89)** Okay, that's a pretty good header.
>
> **[1:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=90)** "Midnight Campfire - A Scoop of Pure Nostalgia."
>
> **[1:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=93)** Okay, I like that.
>
> **[1:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=95)** So we go through, we have the important parts about it.
>
> **[1:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=98)** We have a preview, that sounds good.
>
> **[1:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=101)** So let's say the partnership came to light.
>
> **[1:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=104)** Now we want to promote this ice cream flavor.
>
> **[1:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=106)** Let's ask ChatGPT to generate three ads on social media.
>
> **[1:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=109)** So let's say, can you generate three social media ads about this ice cream flavor.
>
> **[2:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=120)** Let's say, let's be extra creative.
>
> **[2:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=124)** Include an image for each.
>
> **[2:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=129)** Hit Enter.
>
> **[2:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=130)** So now ChatGPT will generate some images for us, and then we can work through this image and the copywriting.
>
> **[2:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=137)** All right, so here we have the ad, "Kick Back with Midnight Campfire."
>
> **[2:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=141)** Okay, that looks really good.
>
> **[2:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=143)** Toasted marshmallow ice cream, chocolate fudge, graham cracker crumble.
>
> **[2:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=147)** We only got one image, so let's generate some copy.
>
> **[2:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=150)** Can you generate some copy for this social media ad?
>
> **[2:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=158)** Okay, this is great.
>
> **[2:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=160)** New Flavor Drop: Midnight Campfire.
>
> **[2:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=162)** We have some emojis, we have some hashtags.
>
> **[2:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=164)** That's great.
>
> **[2:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=165)** And we can go through and iterate with the different ads that we have for each of these flavors.
>
> **[2:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=170)** So overall, we've used the techniques that we learned in this chapter to brainstorm some ideas for ice cream flavors, generate an email and create some advertisements all while iterating through the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Advance Your Prompts to Improve Results

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of OpenAI GPT and Reasoning Models](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=0)** - [Instructor] You might have noticed in the top left we have the [[ChatGPT]] dropdown.
>
> **[0:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=4)** We have ChatGPT-4o, and then some other models.
>
> **[0:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=8)** We have the o-series models, and under more models we have some more GPTs.
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=13)** But what do these models mean?
>
> **[0:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=15)** From 2018 to 2024, OpenAI had been working on the GPT models, but starting in 2024, they released the o-series models, or reasoning models.
>
> **[0:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=25)** These models, as noted in the UI, specialize in reasoning and coding tasks.
>
> **[0:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=30)** Now, as you can see here, these reasoning models can also work with images.
>
> **[0:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=35)** We can see o4-mini-high in here as well, saying, "Great at coding and visual reasoning."
>
> **[0:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=40)** Now, modern GPT models can also take in text and image, and they generally generate text responses.
>
> **[0:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=46)** They're great for general tasks, as we've been seeing, and we'll be using them for this course.
>
> **[0:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=52)** o-series models are stronger at math, coding, and logic problems.
>
> **[0:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=56)** They've been trained with additional [[Reinforcement Learning]] techniques, which will help the model learn on how to get to a clear answer.
>
> **[1:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=63)** This is why these models are stronger coding and math, domains where verification on answers is easier.
>
> **[1:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=68)** So let's ask [[GPT-4|GPT-4o]] and o4-mini the same question.
>
> **[1:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=73)** Let's start off with an easy one.
>
> **[1:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=75)** What is one plus one?
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=77)** And hit enter.
>
> **[1:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=79)** One plus one equals two.
>
> **[1:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=81)** Check mark emoji.
>
> **[1:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=82)** Okay.
>
> **[1:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=83)** Now to rerun this with a different model, there's a nice UX experience here where I can hover over this refresh logo, click it, and swap to o41-mini, and here we have the result.
>
> **[1:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=97)** Now, you might have missed it, but there's a quick thinking text that came up.
>
> **[1:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=102)** Let's click refresh again.
>
> **[1:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=105)** We'll do o4-mini.
>
> **[1:48](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=108)** There we go.
>
> **[1:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=109)** So this thinking mode works by the o-series models making a plan, generating some intermediate answers, and then finally showing it to a user.
>
> **[1:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=117)** And this question was pretty easy.
>
> **[1:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=119)** Let's ask it a harder question and see what the answers are.
>
> **[2:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=123)** Let's type out, "What is the meaning of life?"
>
> **[2:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=126)** And hit enter.
>
> **[2:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=128)** You can see here 4o generated an answer pretty quickly.
>
> **[2:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=132)** Let's generate this with o4-mini.
>
> **[2:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=137)** So we saw the thinking, but only for a split second.
>
> **[2:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=140)** What we can do is try another model that does more thinking, so we can select either o3 or o4-mini-high.
>
> **[2:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=149)** So o4-mini-high takes more time to think about the answer.
>
> **[2:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=152)** So let's click it.
>
> **[2:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=156)** Here we go.
>
> **[2:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=157)** We see more thinking time, so we see, it thought for a few seconds, and then here we have the answer.
>
> **[2:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=164)** Now, if you've used some other [[Large Language Models (LLM)|large language models]] like [[Gemini]], you can see the thought outputs, but for OpenAI models, like the o-series, those are hidden from the user.
>
> **[2:54](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=174)** Now, for this course, we'll be using the [[GPT-4]] family of models, but if you're facing problems that are more math- or coding-focused, you can go ahead and switch to the o-series.
>
> **[3:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=185)** So now when somebody asks you what's the difference between a GPT model and an o-series model, you'll have the answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Reinforcement Learning]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Gemini]] (1), [[GPT-4]] (1)
> **Env Vars:** gpt (5)
> **UI Navigation:** dropdown (1), switch to (1)
> **Speakers:** - [instructor] (1)

#### [Improving prompting with examples and quotes](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=0)** - [Narrator] In this video, we're going to talk about using quotes and examples to reinforce the precision of our prompting.
>
> **[0:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=6)** So let's ask a question that many of us have been thinking about: what is the most reliable car?
>
> **[0:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=11)** So let's type it in.
>
> **[0:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=12)** "What is the most reliable car?"
>
> **[0:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=15)** And we'll hit Enter.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=17)** So here we go.
>
> **[0:18](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=18)** Once again, we can see the structure of [[ChatGPT]].
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=21)** We have the bold, we have the emojis, and so forth.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=24)** We have this overview of the most reliable brands and the most reliable cars.
>
> **[0:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=28)** Now let's say we wanted this information in a list.
>
> **[0:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=31)** We can ask, "Can you make this in a list format?"
>
> **[0:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=36)** And hit Enter.
>
> **[0:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=38)** And once again, we have this similar structure.
>
> **[0:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=41)** Let's learn how we can help structure our outputs by using quotes and examples.
>
> **[0:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=46)** So let's head over to the exercise files and open up 02_02.
>
> **[0:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=50)** I'm going to copy in this prompt and paste it in.
>
> **[0:54](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=54)** So here we have: "What is the most reliable car.
>
> **[0:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=57)** List the top three.
>
> **[0:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=58)** The list should look like car model A, car model B, car model C."
>
> **[1:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=62)** Let's hit Enter.
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=64)** So here we go.
>
> **[1:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=65)** We have this output.
>
> **[1:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=66)** "The most reliable cars, 2025.
>
> **[1:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=69)** Toyota Corolla, Lexus G6, and Mazda Miata.
>
> **[1:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=73)** If we wanted to make it even more specific, let's say I don't want the preamble at the top here, let's say, "Only output the list."
>
> **[1:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=83)** So we got a slightly unexpected result.
>
> **[1:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=85)** ChatGPT decided to search the web.
>
> **[1:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=88)** Now, not exactly what I'm looking for, I wasn't expecting these images, but good thing to know that our interactions are not always deterministic.
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=96)** So let's go ahead and go back up, copy our prompt, paste it in and say, "Only output the list," and hit Enter.
>
> **[1:48](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=108)** All right, once again, we got the images, but we just got our list too.
>
> **[1:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=112)** And we also got the web sources.
>
> **[1:54](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=114)** Now, finally, let's iterate through our prompt, paste that back in and say, "Output the list, do not search the web," and hit Enter.
>
> **[2:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=125)** And there we go.
>
> **[2:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=127)** So depending on the version of the model you're using, you might have to iterate on your prompt to get exactly what you're looking for.
>
> **[2:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=133)** But we can use our examples and our quotes to get this information.
>
> **[2:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=137)** Now, in the next video, we'll learn a couple more techniques for structuring and improving the accuracy of our prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [Using completion sequences and few shot](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=0)** - [Instructor] We usually understand a concept better when someone gives us an example.
>
> **[0:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=4)** LLMs work in a very similar way.
>
> **[0:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=7)** Providing examples is a technique called few-shot learning.
>
> **[0:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=10)** Let me show you how this can be helpful using [[ChatGPT]].
>
> **[0:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=14)** Let's go ahead and go into the Exercise Files.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=17)** I'm here in 02_03, with prompts.txt open.
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=21)** Let's copy the first prompt, and we'll paste it in, and hit Enter.
>
> **[0:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=27)** So, our task is to classify these reviews.
>
> **[0:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=29)** Let's see what ChatGPT outputted.
>
> **[0:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=32)** We have Positive, Negative, Positive, Negative, Neutral, Negative, Strongly Negative, Strongly Negative, and Unclassifiable.
>
> **[0:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=40)** Now, this is good, but not exactly what I wanted.
>
> **[0:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=44)** I want a more specific format, so let's go back and copy the second prompt.
>
> **[0:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=50)** Let's paste it in.
>
> **[0:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=51)** Now, in this prompt, I provide some categories that we want to classify the reviews into.
>
> **[0:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=56)** I have Promoter, Neutral, Churn risk, Churned, Detractor, and Random.
>
> **[1:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=61)** Let's hit Enter, and this is better.
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=64)** I get the responses that I want, but I still have this preamble at the top, and this follow-up message.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=71)** So, let's go back and copy the third prompt.
>
> **[1:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=76)** So, let's go ahead and paste it in.
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=77)** Now, in this case, I'm going to use few-shot learning by providing some examples that I want to use for classification.
>
> **[1:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=83)** I have great product all the way to I am a cat.
>
> **[1:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=86)** Now, this will help ChatGPT classify into the correct labels, and will also help with the structure of their responses.
>
> **[1:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=93)** So, in my prompt, I have, classify the following reviews.
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=96)** Here are some examples, and I provide the examples.
>
> **[1:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=99)** And then I say, now classify these reviews.
>
> **[1:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=103)** All right, let's hit Enter.
>
> **[1:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=105)** Now, you can see here, I still got the preamble, but I got the classifications that I want.
>
> **[1:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=111)** Now, these look pretty good.
>
> **[1:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=112)** We use similar examples to make sure that we can go through the tricky classifications.
>
> **[1:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=117)** Now, as always, I can always follow up with only return the reviews and their classifications, and hit Enter.
>
> **[2:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=128)** And there we go.
>
> **[2:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=129)** And that's how we can use ChatGPT for a few-shot learning to improve our task performance, and get the formatting that we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4)
> **CLI Commands:** cat (1), make (1)
> **File Paths:** prompts.txt (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using chain-of-thought reasoning](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=0)** - [Instructor] Remember in school, when your teacher would ask you to explain your thinking on homework?
>
> **[0:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=4)** In the LM space, this approach is called chain-of-thought reasoning, and it can be applied to improving our prompting when using AI tools.
>
> **[0:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=12)** To show you how this works, let's talk about a [[Microsoft Word|word]] puzzle that has a series of operations.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=17)** Normally, [[ChatGPT]] is really good at these puzzles, but I found one that doesn't work.
>
> **[0:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=22)** Let's go ahead and grab our puzzle from exercise folder under 02_04.
>
> **[0:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=26)** We'll open up the prompts.
>
> **[0:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=28)** Let's copy the first prompt and go back to ChatGPT.
>
> **[0:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=33)** Let's paste it in.
>
> **[0:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=35)** So here, we have a question.
>
> **[0:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=36)** "Take the first and last letters of these words in, 'She ate a pretzel over the sea,' and concatenate them together.
>
> **[0:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=43)** Which position does the sequence 'sea' occur at?"
>
> **[0:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=46)** And hit enter.
>
> **[0:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=49)** So here, we have the thinking process that ChatGPT follows.
>
> **[0:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=52)** In previous versions, we'd only get the answer, but since then, the models have been trained to use chain-of-thought reasoning as the default.
>
> **[1:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=60)** So if we look at the answer, we can see that "sea" occurs at position zero, so using chain-of-thought reasoning, ChatGPT can get the answer.
>
> **[1:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=68)** Now, let's paste in this question again and say, "Only provide the answer."
>
> **[1:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=74)** So we got 10, so that's incorrect, and because ChatGPT didn't have the intermediary steps that it reasoned through earlier, it didn't get to the correct answer, so this is an example where chain-of-thought reasoning can be effective.
>
> **[1:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=88)** Let's go back to our prompts.
>
> **[1:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=90)** Let's copy prompt number two and paste it in.
>
> **[1:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=95)** If we want to be more explicit, we can say, "Let's think step by step" by the end of the prompt.
>
> **[1:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=100)** This is how chain-of-thought reasoning was originally implemented.
>
> **[1:43](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=103)** Let's hit enter.
>
> **[1:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=106)** So you can see here, we have the different chains of thought, and we got the result.
>
> **[1:53](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=113)** Now, this time around, we got the wrong answer, so this is why this puzzle is quite tricky.
>
> **[1:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=118)** Now, let's go back to our prompts in the exercise files.
>
> **[2:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=121)** Let's copy prompt number three and paste it in.
>
> **[2:08](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=128)** In this case, we're going to use chain-of-thought reasoning with an example, so this would be chain-of-thought reasoning with one-shot learning.
>
> **[2:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=135)** Let's hit enter.
>
> **[2:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=137)** In our prompt, we provide a different structure of chain-of-thought reasoning.
>
> **[2:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=141)** We get the first and last letters, we get the phrase after concatenating it, then we get the different positions, and we output them, and for our next question, we ask a similar one, but with a different phrase.
>
> **[2:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=155)** Now, let's see the result.
>
> **[2:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=158)** As we can see here, ChatGPT didn't find the sequence.
>
> **[2:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=161)** You can see it right here, "let".
>
> **[2:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=164)** So once again, chain-of-thought reasoning and one-shot learning doesn't always work, but we can ask ChatGPT to double check its work.
>
> **[2:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=172)** "Can you double check your work?'
>
> **[2:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=177)** Right, here we go.
>
> **[2:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=179)** Now, it has a slightly different technique here, with the index and the string, and we have the correct result.
>
> **[3:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=187)** So once again, we need to experiment with our prompts using the different techniques that we've learned.
>
> **[3:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=191)** It can be one-shot learning, few-shot learning, chain-of-thought, or asking follow-up questions.
>
> **[3:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=197)** Now, as mentioned earlier, this technique is so powerful that large language model providers have incorporated it as a default behavior, so now we've learned how to use chain-of-thought reasoning to improve our prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (7), [[Microsoft Word|Word]] (1)
> **Cross-References:** go back to (3)
> **Definitions:** is called (1), is an  (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Give GPT a tricky problem](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980&t=0)** - [Instructor] [[ChatGPT]] is quite good at solving logical problems, but can you find a way to trick it?
>
> **[0:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980&t=10)** Your challenge today has two parts.
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980&t=13)** First, find a question that tricks GPT to give the wrong answer.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980&t=17)** Then rewrite your prompt using chain-of-thought learning or few-shot learning to allow GPT to solve the question correctly.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980&t=24)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** gpt (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Give GPT a tricky problem](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=0)** - [Instructor] So what kind of question did you come up with?
>
> **[0:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=7)** I gave GPT another text puzzle.
>
> **[0:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=10)** Let's paste it in here from the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=13)** I'm here under O2_06.
>
> **[0:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=15)** So in prompts.txt, let's copy first prompt.
>
> **[0:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=19)** We'll paste it in.
>
> **[0:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=20)** So this is a question about counting legs.
>
> **[0:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=23)** We have animals, table legs, and our own legs.
>
> **[0:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=27)** Let's click enter.
>
> **[0:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=29)** In this prompt, I only asked for outputting the answer.
>
> **[0:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=32)** Now, this answer is wrong.
>
> **[0:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=34)** It should be 94, not 74.
>
> **[0:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=37)** Let's go ahead and edit our prompt.
>
> **[0:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=39)** Let's remove the, "Only output the answer," as we saw in the previous video and hit send.
>
> **[0:45](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=45)** Now by default, [[ChatGPT]] is going to output the answer using chain of thought reasoning.
>
> **[0:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=51)** Now we have the correct answer.
>
> **[0:53](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=53)** We don't count the raven's legs 'cause they're on the neighbor's property, but we do count our own legs, so that's correct.
>
> **[0:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=59)** Now, to make sure we get the correct answer every time, we can use a one-shot example.
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=64)** Let's grab our second prompt here, copy it, and paste it in.
>
> **[1:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=70)** So once again, we have the thinking process here that leverages the example we provided from the beginning.
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=77)** So now if we keep rerunning this prompt, we'll see that it's more consistent to the answer that we want to get.
>
> **[1:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=82)** By using chain of thought reasoning and one-shot learning, we're able to get more consistent answers with GPT.
>
> **[1:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=88)** And I'm also curious what kind of problem you came up with, so feel free to share on [[LinkedIn]] on how you tricked ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[LinkedIn]] (1)
> **Env Vars:** gpt (2), o2_06 (1)
> **Cross-References:** as we saw (1), previous video (1)
> **File Paths:** prompts.txt (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Learn How to Code with ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### [Interpreting code with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=0)** - [Instructor] Whether you're new to coding or a pro, you'll want to know how [[ChatGPT]] can help you save time and teach you how to improve your skills.
>
> **[0:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=7)** Right here I have some code that I grabbed from the exercise files, under 0301.
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=13)** So I want to know what this code does.
>
> **[0:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=15)** So let's type out, "Can you explain what this code does?"
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=21)** and hit enter.
>
> **[0:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=23)** Right, so here we have a walkthrough.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=24)** We have the code, we have an explanation of what happens here.
>
> **[0:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=28)** So we're going to create this line of fruits.
>
> **[0:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=30)** It's going to have apple, banana, and cherry in it.
>
> **[0:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=33)** And you can see here, these are three string elements.
>
> **[0:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=37)** Then we're going to loop through it, with a four loop, and then print the result.
>
> **[0:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=42)** And this is what we get.
>
> **[0:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=44)** So that's a pretty good explanation.
>
> **[0:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=46)** Now let's go back to our exercise files and copy our second prompt.
>
> **[0:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=51)** So let's ask, "Explain this code," and hit enter.
>
> **[0:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=57)** So this code is a little bit more complex.
>
> **[1:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=60)** It uses a function called map.
>
> **[1:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=62)** So let's see what GPT had to say.
>
> **[1:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=65)** So first it talks about the addition, so it adds the number twice together, and it gives us an example.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=71)** So this is great.
>
> **[1:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=72)** So addition one returns two, addition two returns four.
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=77)** Then it has a two pool of numbers, this is similar to a list, one through four, and then we use the map operation.
>
> **[1:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=85)** And as the explanation says, we go through each of the numbers and map the addition function onto it.
>
> **[1:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=94)** And, finally, we print out the results.
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=96)** So we get 2, 4, 6, 8.
>
> **[1:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=99)** Now we can keep asking questions, like, "What is a map in programming?"
>
> **[1:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=107)** So here I have an explanation of another one, so a squaring map.
>
> **[1:53](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=113)** And there's another term, a data structure.
>
> **[1:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=116)** Okay, looks like I'm talking about the map function.
>
> **[1:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=118)** Let's say, "Can you give me another example of a map function?"
>
> **[2:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=125)** And here I'm iterating with chat GPT, and it's helping me to understand how to code and concepts relating to code.
>
> **[2:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=132)** So another one here, I have words, I have a function to upper, which makes it uppercase, and I get the results.
>
> **[2:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=140)** All right, this is great.
>
> **[2:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=142)** So here we learned how we can use ChatGPT to help us in our coding journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2)
> **Env Vars:** gpt (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Generating code with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=0)** - [Instructor] You're helping out at a fruit fair and are writing down what everybody wants to eat.
>
> **[0:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=5)** You realize you have a big list, but you need a final count to give to the fruit preparation staff.
>
> **[0:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=10)** Let's have GPT help us out to write some code for this task.
>
> **[0:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=14)** Let's open up our Exercise Files and copy Prompt 1 and go to [[ChatGPT]].
>
> **[0:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=20)** So let's take a look at this prompt, "Write some [[JavaScript]] that takes in a list of fruits and counts how many there are."
>
> **[0:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=26)** So JavaScript is a programming language and it can be run on a web browser.
>
> **[0:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=31)** This means that ChatGPT can write this code and also run it at the same time.
>
> **[0:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=36)** Let's go ahead and click Enter.
>
> **[0:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=39)** Okay, here we go, we have a result.
>
> **[0:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=41)** So counts fruit, we go through and we loop through the fruit and we count, and then we have an example here with the results.
>
> **[0:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=50)** So example, apple, banana, apple, orange, banana, apple.
>
> **[0:54](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=54)** We have 3, 2, 1.
>
> **[0:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=56)** Okay, so this is nice, but how do I validate that this code works?
>
> **[1:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=61)** So we can use one of the tools, we can click on Write or code, and now this is going to use the canvas feature.
>
> **[1:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=69)** So let's go ahead and rewrite this code with [[GPT-4|GPT-4o]].
>
> **[1:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=74)** So this is a new interface.
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=77)** We now have the code on the right and our chat interface on the left.
>
> **[1:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=82)** So we have the code here, but we still can't run it.
>
> **[1:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=86)** So let's say, "Can you make this a webpage that I can run?"
>
> **[1:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=92)** And hit Enter.
>
> **[1:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=95)** Okay, so what do we have here?
>
> **[1:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=97)** So this is [[HTML]], it helps us create webpages and gives the structure.
>
> **[1:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=102)** You might've seen HTML before, but if you haven't, don't worry too much.
>
> **[1:46](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=106)** Now before explaining each of the parts, let's go to Preview to see what we have.
>
> **[1:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=111)** Okay, so we have a fruit counter heading here, we have a title and we have a text box.
>
> **[1:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=116)** Let's enter apple, banana, apple, and hit Count Fruits.
>
> **[2:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=124)** Here we have the results.
>
> **[2:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=126)** That's pretty cool.
>
> **[2:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=127)** So let's go to the top right and hit Stop.
>
> **[2:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=130)** We're back to the code.
>
> **[2:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=132)** So you can see the heading right here with Fruit Counter, we have this input field, we have the placeholder text, and we see the function that we wrote earlier, handleCount.
>
> **[2:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=144)** And here we have the code.
>
> **[2:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=145)** Under the script tag where the JavaScript is run.
>
> **[2:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=149)** So that's pretty cool.
>
> **[2:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=150)** You might have heard of the term called [[Vibe Coding]].
>
> **[2:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=153)** This is what we're doing.
>
> **[2:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=154)** We have a goal and we're asking the large language model to do something and then we're testing it out and then asking the model to make any changes if we have any.
>
> **[2:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=164)** All right, now let's go back to our exercise files and open up the second prompt.
>
> **[2:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=169)** So let's paste it in.
>
> **[2:51](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=171)** So now we want to generate a list of 100 fruits so we can test out this function on a larger list.
>
> **[2:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=176)** It's pretty annoying to type out apple, banana, orange all over again.
>
> **[3:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=180)** "Generate a list of 100 fruits in a JavaScript compatible format.
>
> **[3:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=184)** Have 6 different fruit types in your list."
>
> **[3:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=187)** Let's hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=189)** Right, there we go, so we got an error, but ChatGPT is trying to correct itself.
>
> **[3:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=194)** So let's go to Preview and see what we got.
>
> **[3:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=197)** So we can Count Fruits or we can Use Example Data.
>
> **[3:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=200)** Let's click that.
>
> **[3:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=202)** So we've got some data in here.
>
> **[3:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=204)** Let's click Count Fruits.
>
> **[3:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=206)** Okay, that's pretty cool.
>
> **[3:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=207)** Let's try it again.
>
> **[3:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=210)** Use Example Data, Count Fruits.
>
> **[3:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=213)** Hmm, so this isn't what I wanted.
>
> **[3:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=216)** When I click the Use Example Data button, I want us to generate a new list of fruits each time, so these values should be different.
>
> **[3:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=224)** So let's write, "Every time I click the example data button, generate a new list of fruits," and hit Enter.
>
> **[3:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=236)** Let's try this out.
>
> **[3:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=238)** Use Example Data, Count Fruits.
>
> **[4:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=241)** Use Example Data, Count Fruits.
>
> **[4:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=244)** Okay, this is quite different.
>
> **[4:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=246)** Now if we click Stop on the top right, we can go through and review this code.
>
> **[4:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=252)** If we don't understand it, we can highlight it and click Ask ChatGPT.
>
> **[4:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=256)** Let's say, "What does this code mean?
>
> **[4:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=260)** Explain to me like I am a beginner," and hit Enter.
>
> **[4:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=267)** Here we go.
>
> **[4:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=268)** We have the explanation of the function, the declaration of the constant types of the list, apple, banana, orange, grape, kiwi, mango, and so forth.
>
> **[4:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=279)** Now, if we want more advanced functionality, we can go to the bottom right and click this [[Code Review]].
>
> **[4:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=284)** We have different options that we can use for coding: Code review, Port to a language, Fix bugs, Add logs, and Add comments.
>
> **[4:53](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=293)** Let's click Port to a language, and let's do it for [[Python (Programming Language)|Python]] and click Enter.
>
> **[5:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=300)** Okay, here we go, this code is being rewritten.
>
> **[5:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=303)** Let's run it.
>
> **[5:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=306)** It's running in the console and we got the result.
>
> **[5:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=309)** So we have many powerful tools in ChatGPT that we can use to generate, edit, and understand code.
>
> **[5:15](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=315)** We can start off as a beginner and build some really cool stuff.
>
> **[5:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=319)** Now, it's important to remember that this code might be buggy, and if we are going to go to bigger fair to count more fruits, we might want to consult a senior developer to make sure that there are no bugs.
>
> **[5:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=329)** Sometimes GPT still gives us buggy code, meaning that there can be errors or mistakes, some of which that can be very subtle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[JavaScript]] (4), [[HTML]] (2), [[Code Review]] (2), [[Vibe Coding]] (1)
> **UI Navigation:** go to (6), click on (1)
> **Env Vars:** gpt (3), html (2)
> **CLI Commands:** make (3), python (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** exercise files (2)
> **Code Identifiers:** handlecount (1)
> **Cross-References:** go back to (1)

#### [Editing code with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=0)** - [Instructor] Let's learn how we can use [[GPT-4]] to edit our code and find issues with it.
>
> **[0:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=5)** I have some code here from the exercise files under 03_03 under prompt one.
>
> **[0:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=9)** So with the code here, let's go to Tools and enable write or code.
>
> **[0:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=14)** Now let me add the prompt.
>
> **[0:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=16)** What is wrong with this code?
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=21)** Now the goal of this code is to find a palindrome, meaning that the [[Microsoft Word|word]] is the same forwards and backwards.
>
> **[0:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=27)** It can also be a sentence, but we'll get to that.
>
> **[0:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=30)** Let's click Enter.
>
> **[0:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=33)** So here we see that there are a few issues.
>
> **[0:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=35)** LowerCas should actually be LowerCase, so this code wouldn't run.
>
> **[0:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=40)** Next, we're told that this filter syntax is not correct, and the final part is that the regex isn't fully correct.
>
> **[0:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=47)** Okay, so we have the corrected code here.
>
> **[0:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=50)** So let's go back to our exercise files and copy prompt number three.
>
> **[0:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=55)** So let's make sure that the [[ChatGPT]] code runs.
>
> **[0:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=57)** So let's paste it in.
>
> **[0:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=59)** We go into the canvas, paste in the code and say, can you run the code to validate the is palindrome function?
>
> **[1:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=70)** And hit Enter.
>
> **[1:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=74)** Okay, so we got the confirmation here.
>
> **[1:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=77)** And let's click View Analysis.
>
> **[1:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=79)** So we have the test cases and it ran this code.
>
> **[1:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=84)** Something's not right.
>
> **[1:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=85)** This is different code.
>
> **[1:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=87)** This is [[Python (Programming Language)|Python]] code, not my [[JavaScript]] code.
>
> **[1:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=91)** So we have to be careful.
>
> **[1:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=93)** Let's go to the bottom-right here and click [[Code Review]].
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=96)** So let's ask ChatGPT to run the code in the console.
>
> **[1:39](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=99)** Make sure to run the JavaScript code I wrote for you.
>
> **[1:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=107)** So this is a limitation of ChatGPT right now.
>
> **[1:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=109)** JavaScript experience isn't as smooth.
>
> **[1:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=112)** So once again, let's use a workaround.
>
> **[1:54](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=114)** Can you create a website that lets me check palindromes?
>
> **[2:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=121)** Use the code I wrote.
>
> **[2:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=125)** Okay, here we go, we see my code here.
>
> **[2:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=127)** We'll go to Preview and we'll enter a phrase.
>
> **[2:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=130)** Let's go back to our prompts and copy, A man, a plan, a canal, Panama.
>
> **[2:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=137)** And paste our test.
>
> **[2:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=139)** A man, a plan, a canal, Panama.
>
> **[2:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=142)** We'll hit Check.
>
> **[2:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=143)** All right, so this says that this is a palindrome, but we're ignoring the semicolon here.
>
> **[2:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=149)** So let's give this feedback to ChatGPT.
>
> **[2:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=152)** Make sure to check for the semicolon.
>
> **[2:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=157)** The first example is not a palindrome.
>
> **[2:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=167)** Okay, let's run this again.
>
> **[2:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=170)** Hmm, not quite right.
>
> **[2:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=172)** Let's hit Stop and check the code.
>
> **[2:56](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=176)** Let's try this again.
>
> **[2:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=178)** Make sure to check characters that are not alphanumeric.
>
> **[3:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=186)** For example, a man, a plan, a canal, Panama is not a palindrome.
>
> **[3:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=196)** Because of the colon.
>
> **[3:18](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=198)** And hit Enter.
>
> **[3:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=201)** Okay, so in this case, we're going to check all the characters, not just the alphanumeric ones.
>
> **[3:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=207)** And in this case, ChatGPT tells us if we want a strict or relaxed mode.
>
> **[3:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=211)** So let's preview.
>
> **[3:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=214)** Type in the result and hit Check.
>
> **[3:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=217)** Great.
>
> **[3:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=218)** Now let's use ChatGPT's suggestion.
>
> **[3:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=221)** Yes, I want a strict and relaxed mode checker.
>
> **[3:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=227)** Please add a button.
>
> **[3:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=230)** And hit Enter.
>
> **[3:52](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=232)** Okay, we have a dropdown, let's paste it in.
>
> **[3:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=235)** So we have relaxed, check.
>
> **[3:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=237)** Yes.
>
> **[3:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=238)** Strict, check.
>
> **[3:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=239)** No.
>
> **[4:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=240)** Let's go back and grab some more test cases.
>
> **[4:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=243)** So, hello world.
>
> **[4:05](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=245)** They should fail for both, right?
>
> **[4:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=247)** We don't have the same letters.
>
> **[4:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=250)** Relaxed and strict, both no.
>
> **[4:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=254)** And our third test case.
>
> **[4:19](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=259)** Yes.
>
> **[4:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=260)** And yes.
>
> **[4:22](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=262)** Okay, that's great.
>
> **[4:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=264)** So you can see here, we iterated with ChatGPT to create a palindrome checker.
>
> **[4:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=269)** The process wasn't the smoothest, but it's an important learning journey to understand the capability of the tooling.
>
> **[4:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=275)** And as we saw here, make sure to double-check the answer 'cause ChatGPT can make a mistake.
>
> **[4:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=280)** And as always, it's great to have human mentorship where senior developers can review your code and provide you with more feedback.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (8), [[JavaScript]] (3), [[GPT-4]] (1), [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (6), find (2), python (1)
> **UI Navigation:** go to (3), dropdown (1)
> **Best Practices:** make sure to (4)
> **Cross-References:** go back to (2), as we saw (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Env Vars:** gpt (1)

#### [Formatting responses as JSON with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=0)** - [Narrator] Data entry and [[Data Processing]] can be a very tedious task.
>
> **[0:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=4)** Luckily, when generating and transforming data with GPT, we can specify the format of our data.
>
> **[0:10](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=10)** One way to structure the data is with the [[JSON]] format.
>
> **[0:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=13)** JSON is a structured form of data that uses keys and values.
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=17)** For example, we have the recipe name and brownies, cooking time in five minutes.
>
> **[0:24](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=24)** So on the left we have the key, and on the right we have the value.
>
> **[0:28](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=28)** You can think about it as looking something up in a library.
>
> **[0:31](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=31)** The key is the name of the book and the contents is the value.
>
> **[0:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=35)** So let's head over to [[ChatGPT]] to structure some data.
>
> **[0:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=38)** We're going to ask ChatGPT to generate three recipes.
>
> **[0:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=41)** Can you generate three recipes?
>
> **[0:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=44)** And hit Enter.
>
> **[0:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=47)** So we have creamy spinach and mushroom pasta, honey garlic chicken thighs, and a no-bake chocolate oatmeal cookie.
>
> **[0:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=55)** Okay, that sounds pretty good.
>
> **[0:57](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=57)** Now, this data is not very structured.
>
> **[0:59](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=59)** If we want to use it for programming task, we'll have to manually go and reformat it.
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=64)** So let's say format this data as JSON and hit Enter.
>
> **[1:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=71)** So here we go. We have recipes here with the contents.
>
> **[1:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=76)** So this is a list and then an object.
>
> **[1:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=80)** We have some instructions and we have the other recipes here.
>
> **[1:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=85)** Let's say I only care about the ingredients.
>
> **[1:27](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=87)** Let's say, can you output the ingredients as a JSON structure for each recipe?
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=96)** Let's make sure to be specific and hit Enter.
>
> **[1:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=100)** Okay, here we go.
>
> **[1:41](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=101)** We have the title, the type, the ingredients and so forth.
>
> **[1:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=107)** Now, I don't really need the type here, so let's say I don't need the type and hit Enter.
>
> **[1:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=115)** So we have recipes, title, ingredients, and so forth.
>
> **[2:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=120)** Okay, this is great.
>
> **[2:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=122)** So now we know how to ask ChatGPT to generate some data for us in a specific format.
>
> **[2:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=127)** And if we don't have the data in a specific format, we can ask ChatGPT to convert the format for us to save us some time so we don't have to do some manual data entry or writing custom code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[ChatGPT]] (4), [[Data Processing]] (1)
> **Env Vars:** json (4), gpt (1)
> **Definitions:** is a  (2)
> **Best Practices:** the key is (1), make sure to (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Auto formatting an API call](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=0)** - [Instructor] So this challenge is a little bit different.
>
> **[0:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=7)** We're going to teach you a new concept by challenging you to learn about APIs.
>
> **[0:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=12)** As a quick overview, APIs are a way to connect to data sources.
>
> **[0:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=16)** Using APIs is a key part of your coding journey, but it could be a little intimidating.
>
> **[0:21](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=21)** So your challenge today is to use GPT to extract information from an API call.
>
> **[0:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=26)** Now the API call I've chosen is a weather API.
>
> **[0:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=29)** Now to get you started, I provided a sample file that has an API call and some example data.
>
> **[0:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=35)** Now your goal with this data is two parts.
>
> **[0:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=37)** First, write a prompt that can extract the temperature for 12:00 p.m. Eastern Time and then have [[GPT-4]] generate some [[JavaScript]] code that can make the call to the API and print all the temperatures returned.
>
> **[0:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=50)** Now if you're struggling with this task, you can always ask [[ChatGPT]] for some help.
>
> **[0:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=55)** All right, this challenge is a little bit trickier, but I believe in you.
>
> **[0:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=58)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (1), [[JavaScript]] (1), [[ChatGPT]] (1)
> **Env Vars:** api (5), gpt (2)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Auto formatting an API call](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=0)** - [Instructor] This challenge was a little trickier, but it really puts together everything that we've learned so far.
>
> **[0:11](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=11)** Let's dive in.
>
> **[0:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=12)** Let's open up the exercise files to find Prompt+API.txt under O3_06.
>
> **[0:18](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=18)** So let's do part one of our task extracting the temperature for noon at Eastern Time.
>
> **[0:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=23)** So let's go ahead and copy this text from current data all the way down until API call.
>
> **[0:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=30)** Now let's paste it into [[ChatGPT]].
>
> **[0:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=33)** If we scroll up, we can see my prompt "Extract the temperature for noon by writing a [[Python (Programming Language)|Python]] function."
>
> **[0:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=38)** I'm going to go to tools and enable write or code.
>
> **[0:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=42)** So we have our Canvas interface.
>
> **[0:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=44)** Let's go ahead and click enter. Alright, there we go.
>
> **[0:48](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=48)** We have our code.
>
> **[0:50](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=50)** Now one thing that is missing here is the actual data.
>
> **[0:53](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=53)** So let's say "Make sure to include the data" and enter.
>
> **[0:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=58)** Now as you're doing this task, your outputs might be different, but don't worry, right?
>
> **[1:03](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=63)** Here we go.
>
> **[1:04](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=64)** We have some data here and we're extracting the noon temperature.
>
> **[1:07](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=67)** Now I want to make two more changes.
>
> **[1:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=69)** Let's not specify the date and look through all the data, and let's make sure the data includes all of it.
>
> **[1:16](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=76)** So let's say include "All the data and find all the noon temperatures" and hit enter.
>
> **[1:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=86)** So as you can see here, coding with GPT is an iterative process.
>
> **[1:30](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=90)** Okay, there we go. So we have this code.
>
> **[1:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=92)** Let's click run in the top right and see if it's the right result.
>
> **[1:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=97)** Okay, there we go. We have a few different temperatures.
>
> **[1:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=100)** Now let's make one more change.
>
> **[1:42](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=102)** Let's head back to the exercise files and copied the second prompt under API call.
>
> **[1:48](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=108)** We're going to paste this in.
>
> **[1:49](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=109)** So now we're going to ask ChatGPT to call this API in the code to get the most up-to-date information.
>
> **[1:55](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=115)** So here's our prompt and here's our API.
>
> **[1:58](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=118)** Let's hit enter and here we go. So we changed our script.
>
> **[2:02](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=122)** We're now fetching the weather data and we're extracting the noon temperatures and we can see the [[Fetch]] from the API here.
>
> **[2:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=129)** Let's go ahead in the top right and click run.
>
> **[2:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=132)** Okay, here we go. We have more no temperatures.
>
> **[2:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=134)** Now with chatGPT, we are able to build the simple little application that's quite powerful.
>
> **[2:20](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=140)** We now have an introduction to using APIs so we can build even more powerful apps.
>
> **[2:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=145)** Now how cool is that?
>
> **[2:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=146)** Now, as you continue coding with chatGPT, you can ask follow up questions like what is an API?
>
> **[2:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=152)** What are the different [[Forms]] of an API?
>
> **[2:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=154)** And how do we format this information in different ways?
>
> **[2:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=157)** And with that, we've learned the skills to build some powerful apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), [[Python (Programming Language)|Python]] (1), [[Fetch]] (1), [[Forms]] (1)
> **Env Vars:** api (8), o3_06 (1), gpt (1)
> **CLI Commands:** make (4), find (2), python (1)
> **Code Identifiers:** chatgpt (3)
> **UI Navigation:** scroll up (1), go to (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (2)
> **File Paths:** api.txt (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980&t=1)** - Thank you for joining me on this adventure to learn how to get the most out of [[ChatGPT]].
>
> **[0:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980&t=6)** OpenAI has some great resources about GPT, so you can check it out on their website at [openai.com](https://openai.com).
>
> **[0:12](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980&t=12)** You can also follow me on [[LinkedIn]], where I share content about [[Generative AI]].
>
> **[0:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980&t=17)** You can also check out my other LinkedIn Learning courses, like AI Pricing and ROI or LLM Evaluation Techniques.
>
> **[0:25](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980&t=25)** Let's keep learning about generative AI and incorporating it into our daily lives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Generative AI]] (2), [[ChatGPT]] (1)
> **Env Vars:** gpt (1), roi (1), llm (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Speakers:** - thank (1)


## Instructor

- [[Denys Linkov]]

## Resources

- Exercise files available

## Skills Covered

- OpenAI API
- Artificial Intelligence (AI)
- ChatGPT

## Path Context

### In [[Hands-On Projects for OpenAI-Powered Apps]]
← [[Gpt Foundations Building Ai Powered Apps]] | **2 of 5** | [[Hands-On OpenAI API- Building a Real-World Solution]] →

## Appears In

- [[Hands-On Projects for OpenAI-Powered Apps]]

## Related Courses

_Courses sharing skills:_

- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT
- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Power BI- Working Together with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Learning ChatGPT for Business Analysis]] — Artificial Intelligence (AI), ChatGPT
- [[Generative AI for Data Engineering- ChatGPT Power Tips]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)