---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: prompt-engineering-with-gemini-2024
url: "https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024"
duration_minutes: 60
duration: 1h
level: Intermediate
updated: 4/17/2024
learners: 5380
skills:
  - Artificial Intelligence (AI)
  - Gemini
  - Google Gemini
  - Prompt Engineering
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQExPVvaiVwKuw/learning-public-crop_675_1200/B4EZfmDFTWHYAc-/0/1751911257653?e=2147483647&amp;v=beta&amp;t=yhs_EU8x5NQTW7hP9n9B_Pec6u_Sr_rI9JwYDQCln3Q"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]'
prev_courses:
  - '[[Google Gemini For Developers]]'
next_courses:
  - '[[Multimodal Prompting with Google''s Project Gemini]]'
path_nav: '[{"path":"Develop Your AI Skills with Google Gemini and Google Cloud Platform","position":2,"total":7,"prev":"Google Gemini For Developers","next":"Multimodal Prompting with Google''s Project Gemini"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/gemini
  - skill/google-gemini
  - skill/prompt-engineering
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Prompt%20Engineering%20with%20Gemini%20(2024).md)

![Prompt Engineering with Gemini (2024)](https://media.licdn.com/dms/image/v2/D4E0DAQExPVvaiVwKuw/learning-public-crop_675_1200/B4EZfmDFTWHYAc-/0/1751911257653?e=2147483647&amp;v=beta&amp;t=yhs_EU8x5NQTW7hP9n9B_Pec6u_Sr_rI9JwYDQCln3Q)

# Prompt Engineering with Gemini (2024)

> Gemini (formerly known as Bard) is a generative AI model from Google with powerful multimodal capabilities and integrations. In this course, Denys Linkov gives an introduction to Gemini, showing you how to perform a variety of everyday tasks like brainstorming ideas, writing emails, browsing the web, and even planning a vacation. He covers advanced prompts you can use to improve results, and illus

> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024) | 1h | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Learning prompt engineering with Gemini](#learning-prompt-engineering-with-gemini)
- [**1. Introduction to Gemini**](#1-introduction-to-gemini) (2 videos)
  - [Enabling Gemini](#enabling-gemini)
  - [Writing your first prompt](#writing-your-first-prompt)
- [**2. Using Gemini Day-to-Day**](#2-using-gemini-day-to-day) (8 videos)
  - [Brainstorming with Gemini](#brainstorming-with-gemini)
  - [Iterating with Gemini](#iterating-with-gemini)
  - [Improving your writing with Gemini](#improving-your-writing-with-gemini)
  - [Browsing the web with Gemini](#browsing-the-web-with-gemini)
  - [Introduction to Gemini extensions](#introduction-to-gemini-extensions)
  - [Planning a vacation with Gemini](#planning-a-vacation-with-gemini)
  - [Challenge: Writing copy for your new activewear brand](#challenge-writing-copy-for-your-new-activewear-brand)
  - [Solution: Writing copy for your new activewear brand](#solution-writing-copy-for-your-new-activewear-brand)
- [**3. Advance Your Prompts to Improve Results**](#3-advance-your-prompts-to-improve-results) (6 videos)
  - [Improving prompting with examples and quotes](#improving-prompting-with-examples-and-quotes)
  - [Using completion sequences and few-shot learning](#using-completion-sequences-and-few-shot-learning)
  - [Using chain-of-thought reasoning](#using-chain-of-thought-reasoning)
  - [Reformatting your data nicely](#reformatting-your-data-nicely)
  - [Challenge: Give Gemini a tricky problem](#challenge-give-gemini-a-tricky-problem)
  - [Solution: Give Gemini a tricky problem](#solution-give-gemini-a-tricky-problem)
- [**4. Multi-Modal Gemini**](#4-multi-modal-gemini) (6 videos)
  - [Image recognition and augmentation with Gemini](#image-recognition-and-augmentation-with-gemini)
  - [Creative image generation](#creative-image-generation)
  - [Analyzing a multi-modal document with Gemini](#analyzing-a-multi-modal-document-with-gemini)
  - [Searching and summarizing a YouTube video with Gemini](#searching-and-summarizing-a-youtube-video-with-gemini)
  - [Challenge: Comparing two world wonders](#challenge-comparing-two-world-wonders)
  - [Solution: Comparing two world wonders](#solution-comparing-two-world-wonders)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your prompt engineering journey](#continuing-your-prompt-engineering-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning prompt engineering with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=0)** - [[Gemini]] is [[Google]]'s new Gen AI model with powerful multimodal capabilities and integrations.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=7)** In this course, we'll learn how to complete a variety of tasks through Gemini, like brainstorming ideas, writing emails, and summarizing your favorite YouTube videos.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=17)** With dozens of examples and exercises, you'll have plenty of opportunities to practice.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=22)** We'll review key differentiating features of Gemini, like native integrations with Google Suite, Maps, and Flights, allowing us to do comprehensive tasks like planning your next vacation.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=34)** Oh, and Gemini can analyze images and videos too.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=39)** I'm Denys Linkov, head of machine learning at Voiceflow, and I'm here to help you learn how to incorporate Gen AI into your daily workflows.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/learning-prompt-engineering-with-gemini?u=76281980&t=46)** Let's get hands on with Gemini and start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5), [[Google]] (2)
> **Speakers:** - gemini (1)


### 1. Introduction to Gemini

[↑ Back to Table of Contents](#table-of-contents)

#### [Enabling Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=0)** - [Instructor] I'm here on the [[Gemini]] website at gemini.[[[Google]].com](https://google.com).
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=4)** Let's get started and chat with Gemini.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=6)** I'm going to go ahead and click on this Chat With Gemini button.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=9)** Now you can see here there's a terms and [[Privacy]] agreement between you and Gemini Apps via Google.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=15)** So please go ahead and read through this and make sure that you understand how your data is being used.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=20)** Even though LMS are powerful, it's important to understand what the data policies are.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=25)** In general, you should know that your data will be collected and may be reviewed for quality purposes.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=31)** So if you're on a personal account, you can go ahead and hit Agree and go to the Gemini UI.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=39)** And let's click Continue as well.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=43)** All right, once we accepted the conditions, we'll be able to get started with Gemini.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=47)** If you're on a business account, your administrator will need to enable Gemini for you, and this is how we enable Gemini.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/enabling-gemini?u=76281980&t=53)** In the next video, we'll write our first prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (9), [[Google]] (2), [[Privacy]] (1)
> **CLI Commands:** make (1)
> **URLs:** [google.com](https://google.com) (1)
> **Env Vars:** lms (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Writing your first prompt](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=0)** - [Instructor] One of the nice things about [[Gemini]] is that there are many sample prompts that you can use.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=5)** A prompt is a way to have a large language model like Gemini fulfill a task for you.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=9)** So let's write our first prompt in Gemini.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=12)** Here on the screen, you can see here I have four different prompts.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=15)** I'm going to go ahead and click on this landmark one.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=18)** So I have a sample prompt here, and in the blue, I can actually change this value, but I'm not going to, I want to learn a little bit more about the Buckingham Palace and Big Ben.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=28)** So I'm going to click enter and run.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=34)** All right, here we go.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=35)** So now we've generated a response and I've gotten some directions on how to walk from Buckingham Palace to Big Ben.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=42)** We have a distance here, an average walking time, and a popular route.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=46)** That's pretty cool.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=47)** Now let's say I want to write my own prompt.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=49)** How would I do that?
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=51)** I can go into the text box down here and write my own prompt.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=54)** One of the things that I always wonder is, is Toronto warmer than New York?
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=59)** So I'm going to type that in as a prompt.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=61)** Is Toronto warmer than New York?
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=67)** Hit enter.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=69)** And here Gemini is going to generate a response for us.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=72)** Okay, here we go.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=73)** So Toronto is not warmer than New York, and we have a breakdown here, across summer and some of the other seasonal comparisons.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=81)** That's pretty cool.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=82)** So let's add a more specific prompt so we can ask a more specific question.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=87)** Let's ask, is New York warmer than Toronto in the winter?
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=93)** So here we go.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=94)** We have a more direct comparison between the temperature of New York City and Toronto based on the winter weather.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=101)** So in the next chapter, we're going to build on this progress and we're going to use Gemini for our day-to-Day tasks.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/writing-your-first-prompt?u=76281980&t=107)** And the first thing that we're going to do is brainstorm some new ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Using Gemini Day-to-Day

[↑ Back to Table of Contents](#table-of-contents)

#### [Brainstorming with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=0)** - [Instructor] So you have writer's block.
>
> **[0:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=2)** You're trying to brainstorm some ideas, but nothing's coming up.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=5)** Let's consider using [[Gemini]] to help us out.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=8)** So let's say I'm having an ice cream fundraiser for charity.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=11)** Let's go ahead and type in brainstorm five ice cream fundraiser ideas, and let's hit enter.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=18)** So we're going to have Gemini generate some results for us.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=21)** Okay, here we go.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=22)** A scoopathon, create your own sundae bar, mystery flavor showdown, bingo, movie night.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=29)** Okay, these sound pretty cool, but actually, let's add some more ideas here.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=34)** I like the ideas, but I want to generate three that don't require too much prep.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=38)** Some of these might require some coordination.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=41)** So let's add generate three ideas that don't need too much prep and hit enter.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=52)** Okay, here we go.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=53)** We have a social, we have a relay race, and we have a guess the flavor game.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=59)** I like these ideas, but actually, an idea came to mind thinking about this.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=63)** I actually want to create a coupon book.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=65)** So let's ask Gemini to actually generate some of the sample image ideas that we can put in a coupon book.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=70)** So let's type in what are some illustrations we can add to an ice cream coupon book?
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=83)** Now, while this is loading, you might have noticed some of the ideas generated were different.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=87)** That's because Gemini generates different responses to prompts, even though it's the same prompt.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=92)** It's the nature of [[Large Language Models (LLM)|large language models]].
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=95)** Okay, here we go. We have some options.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=97)** So we have cute and playful, themed and appealing, some designed elements.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=102)** Okay, this is pretty comprehensive.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=105)** So reading through these options, let's go with something simple.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=108)** I want some ice cream cones and maybe the store is where I'm getting the coupon books from.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=112)** So let's finalize this task by writing an email.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=115)** So I'm going to create a new prompt and say, write me an email about our ice cream coupon book,
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=127)** and our goal is to sell 100 coupons for five local stores.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=135)** Okay, let's edit my typo here.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=138)** And even though if we make a typo, Gemini does a good job understanding what we're doing.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=143)** Let's hit enter.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=145)** Okay, here we go.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=146)** We have our email, so we have a subject here.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=150)** We have an introduction.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=152)** We talk about some of the cool benefits we have here, that it's limited edition, that we're supporting local ice cream stores.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=158)** This all sounds great, and now we have an email that we can use to send out for our fundraising efforts.
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=163)** This is a great way to brainstorm with Gemini.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/brainstorming-with-gemini?u=76281980&t=166)** In the next video, we're going to learn how we can iterate with Gemini and continue to go back and forth to generate new ideas and results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (7), [[Large Language Models (LLM)|Large language models]] (1)
> **Cross-References:** coming up (1), in the next (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Iterating with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=0)** - [Instructor] I'm hosting an event about [[Gemini]] and LLMs, and I'd like some feedback from a colleague, but they're on vacation.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=7)** So let's use Gemini to start.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=9)** My goal is to iterate over an itinerary, and get some feedback with Gemini.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=13)** I've attached a starting itinerary in the exercise folder under 02_02.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=18)** Let me show you how you can get there.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=20)** I'm in the exercise files, and I'm going to click on Chapter O2, go into the dropdown, and open up O2_O2.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=28)** Now, I'm going to go ahead and copy this prompt.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=32)** Now, let's go back to Gemini and paste it in.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=36)** Now, let's hit Enter.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=39)** All right, we got some feedback from Gemini.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=42)** Let's look at the improvements.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=44)** So we have improvements on the target audience, transition, number of lightning talks and Gemini intro.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=52)** Okay, and some additional questions.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=56)** Let's go in and look at one specific piece of feedback about the number of lightning talks.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=60)** If we scroll up, we suggested that we had our itinerary to include two lightning talks and then lunch at 10:30 AM.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=69)** So one of the things that was provided was that there's only two lightning talks before lunch, and that might not be enough.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=75)** So let's go ahead and improve that, and add two more Lightning talks.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=79)** So let's say, "Can you add two more lightning talks to the schedule before lunch?"
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=90)** Okay, here we go.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=91)** We got some options here.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=94)** And looking at these options, I like option number two.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=97)** Let's push lunch later.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=98)** So let's say, "Let's push lunch later."
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=106)** Okay, here we go.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=107)** We have the additional third and fourth lightning talk.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=112)** That's pretty good.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=113)** So looking at the schedule, I've actually noticed that there's no breakfast here.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=117)** So let's go ahead and ask Gemini, "Update the schedule to have breakfast.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=125)** We can start the event earlier."
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=129)** Hit Enter.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=131)** Okay, here we go.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=132)** And what's interesting here is that Gemini went ahead and gave us some more details.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=137)** So rather than just a simple table we provided, it actually has added some recommendations.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=144)** Okay, this is great.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=148)** So now, we have a schedule.
>
> **[2:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=149)** Let's figure out what we're actually going to do for the third and fourth lightning talk.
>
> **[2:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=153)** So let's ask Gemini to say, "What topics would you recommend for the third and fourth lightning talk."
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=170)** Okay, so we have some technology, creative, and communication categories and other possibilities.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=177)** Let's do the case study.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=179)** That sounds pretty interesting, and let's go ahead, and add the ethical considerations.
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=184)** So let's say, "Add the ethical considerations, and the case study to our schedule."
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=196)** Okay, here we go, we have a schedule here.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=200)** That's great.
>
> **[3:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=202)** So the final thing that we want to do is we want to generate a draft business email so that we can actually send this out to our attendees.
>
> **[3:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=210)** In this case, we want to send it out to business executives.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=213)** So let's write that prompt.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=215)** "Can you generate an email to send to business executives for this event?
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=224)** Let's include a catchy name and a subject line."
>
> **[3:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=234)** Okay, here we go.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=235)** We have our email here.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=237)** Let's scroll through and see what we have.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=241)** So generally, I like this email.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=244)** One thing that I want to include is actually the itinerary.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=247)** So let's go ahead and ask Gemini to put that back in.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=251)** "Can you add the itinerary?"
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=256)** Oh, there's a typo.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=257)** Fix that.
>
> **[4:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=259)** "Into our email."
>
> **[4:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=266)** There we go.
>
> **[4:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=267)** We have our itinerary back in here, so that's great.
>
> **[4:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=271)** Okay, so in this video we've gone through, and iterated with Gemini, and gotten to the outcome we wanted, where we started off with the schedule, we improved it, and eventually we got an email.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/iterating-with-gemini?u=76281980&t=281)** In our next video, we'll focus on improving our writing with Gemini.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (12)
> **UI Navigation:** click on (1), dropdown (1), scroll up (1)
> **Cross-References:** go back to (1), next video (1)
> **Ports:** :30 (1)
> **Env Vars:** o2_o2 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Improving your writing with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=0)** - [Instructor] So I wrote an article about remote work, but when I did so, I was a little bit tired.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=5)** So there might be some mistakes there.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=7)** Today, we're going to talk about how we can use [[Gemini]] to help us rewrite some content that we wrote.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=12)** We have this file in Exercise Files under Chapter 02 02_03.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=19)** So let's go ahead and click on it and copy this article.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=23)** So I'm going to paste it into Gemini, and I'm going to add a prompt asking Gemini to fix the grammar.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=30)** Can you fix the grammar in this article?
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=36)** And of course, I misspelled grammar, so let's add spelling into that as well.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=41)** And spelling.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=43)** And I'm going to hit Enter.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=47)** All right, so here we got some corrections on things that were either misspelled or something to make the introduction more powerful.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=55)** So let's go ahead and scroll further down.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=57)** And we can see here a list of changes made.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=60)** We can see here that that's a typo.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=64)** That's a typo here.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=65)** Majority of worker.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=67)** Prefer, would prefer.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=68)** Okay, this is a great list of things that I missed while I was tired.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=73)** Now, what we can also see is if we scroll up, we'll be able to hit Show drafts with our mouse.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=80)** And here we get to see a number of different drafts that Gemini generated.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=84)** We can see here that they're all a little bit different.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=87)** So we have different formatting here with how things were corrected.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=92)** We have in here some different phrasing.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=95)** Everything is bolded.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=97)** But in general, Gemini preferred this version.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=99)** So that's the one that it showed to us.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=101)** So let's hide those drafts.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=103)** All right, so I think that this language is a little bit clearer.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=106)** Let's go ahead and ask Gemini to rewrite it to be more formal.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=110)** So let's say, can you make it more formal?
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=118)** So you can see here that it specified what the changes were under both the grammatical and some of the tonal changes as well.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=127)** So we can see here, undergone an exponential increase to sort exponentially.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=132)** We can also see that some of the words were changed to be more complex to make it sound more formal.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=138)** We can see here that we changed async, which is a shortened form of asynchronous, to its full length.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=144)** So Gemini helped us here by changing it to something more formal.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=148)** Now, let's say we wanted to go in the opposite direction.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=150)** We wanted to make it less formal.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=152)** So let's ask Gemini, can you make this less formal?
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=160)** So let's scroll down and see what was used.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=162)** So we got some informal phrasing.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=165)** We added personal pronouns.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=166)** We added exclamation points.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=169)** This looks great.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=170)** So we just used Gemini to improve our writing, both from grammatical and spelling perspectives, to also a tonal shift to make it formal or less formal.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=179)** Now, an important thing to consider here is that you should review your company's or organization's policy on using Gemini for these kinds of communications.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=188)** Every company's a little bit different, and we should always make sure to reread everything that [[Generative AI]] provides to us just to double check for any types of mistakes.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=197)** [[Large Language Models (LLM)|Large language models]] can make mistakes, so we need to double check.
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-your-writing-with-gemini?u=76281980&t=201)** In the next videos, we'll be going through how we can use some of the more powerful aspects of Gemini like browsing the web or using extensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (11), [[Generative AI]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** make (8)
> **UI Navigation:** click on (1), scroll up (1), scroll down (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** always make sure (1)
> **Speakers:** - [instructor] (1)

#### [Browsing the web with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=0)** - [Instructor] One of [[Gemini]]'s advantages is the ability to leverage [[Google]] search.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=4)** In this video, we'll cover how to do that.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=6)** Let's start off with a basic prompt.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=8)** Find me three recipes to make a blueberry muffin and hit Enter.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=14)** Okay, here we go, we got some results.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=17)** And we can go ahead and click on one of these and see we have some recipes, okay, that's great.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=26)** One of the things that we can also do is we can click this little Google button that says Double check response.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=32)** So this is going to search on Google and verify that the response matches what Gemini actually generated.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=39)** Okay, so here we go, we got some results, and green means good that it could verify it.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=46)** That's pretty good.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=47)** So we use Gemini to find some results, and then we verified with a manual Google search.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=53)** Now, sometimes you might get different results.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=55)** They might be from YouTube or other social media platforms, so keep this in mind as Gemini generates different results for different people even at different times.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=64)** Now, let's ask a question across all of these different blog posts.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=68)** Let's ask about the temperature.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=70)** What are the temperature differences between these recipes?
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=78)** And I'm going to ask in Fahrenheit or Celsius.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=82)** And Gemini can actually discern what F and C mean in this case.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=87)** Okay, so here we go, we have different results.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=90)** So the first recipe and the third recipe use 400 Fahrenheit or 204 Celsius.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=97)** And then the second recipe uses a higher temperature at 425 and then, we reduce the temperature down to 350.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=105)** So we can see here that Gemini helped us understand what are the different baking conditions and compare against these three blog posts.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=113)** So that's how we can use Gemini in combination with Google search to do the task that we want to do.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/browsing-the-web-with-gemini?u=76281980&t=119)** In the next video, we're going to talk about Gemini extensions, which further leverages capability to connect with different systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (8), [[Google]] (5)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to Gemini extensions](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=0)** - [Instructor] Integrated natively into [[Gemini]] are extensions.
>
> **[0:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=3)** Extensions are a way to interact with different services to get more customized information.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=8)** So let's enable that.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=9)** We're going to head over to the bottom left and click on the Settings icon.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=13)** We can see that there's this little puzzle icon that says Extensions.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=16)** Let's go ahead and click it.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=18)** So in here we can see that we have five different extension options.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=23)** Four of them are already enabled, like [[Google]] Flights, Hotels, Maps, and YouTube.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=28)** So let's head back to Gemini and use one of these extensions.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=32)** I'm going to hit the plus up here for New Chat, and here we go.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=36)** So I'm going to ask a question.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=38)** How much does a flight from San Francisco to New York cost?
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=44)** Now you can see here that Gemini is going to leverage the Google Flights extension, as we can see here on the screen, and then we're going to get some results.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=54)** So here we get a warning to double check these results.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=56)** So let's read through them carefully.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=59)** So for March 19th to 26th, we have a couple of different options, and then we can view these details on Google Flights.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=66)** So let's scroll down and actually see which one of these works for us.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=69)** I like flying red eyes, which is a little bit different than most people.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=72)** So we have Alaska and Delta's options.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=75)** Now to Gemini's earlier point, we can go ahead and click on Google Flights and we should be able to get the results here from this interface.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=86)** So let's head back.
>
> **[1:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=88)** One more thing that actually popped up here in Gemini is that we can do the @ symbol in front of an extension to automatically search it.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=95)** So if Gemini doesn't use that extension by default, we can make sure that it will in the next search.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=100)** So let's dismiss it by clicking Got it.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=103)** And now let's ask about May.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=105)** I want to travel in May. How much do things cost?
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=108)** So we can ask, how much will these flights be in May?
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=114)** Let's say May 10 to 16th, and hit Enter.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=122)** Okay, we have some options here.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=124)** We have our table. This is great.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=127)** And as always, we can double check with Google Flights.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=132)** We see May 10th to 16th, and we see our departure times.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=138)** Let's go ahead and close these two Google Flights and head back to Gemini.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=142)** Now let's leverage the Google Maps extension.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=145)** I live in Toronto, so I want to see what kind of recommendations Gemini has for coffee shops.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=150)** So let's ask it.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=152)** Can you find me a good coffee shop in the Yonge Dundas area in Toronto?
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=162)** So Yonge Dundas is a downtown area. It's very vibrant.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=165)** You can think of it as a mini Times Square. So here we go.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=169)** We have some Google Maps results and we got some recommendations for coffee shops.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=175)** So we got the ratings on Google Maps, we have the links, we have the addresses.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=179)** These are quite awesome.
>
> **[3:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=180)** And we get a final recommendation based on the highest rating.
>
> **[3:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=185)** Now the final extension that I want to talk about is the workspace integration.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=189)** So if we go back to Settings, and we go to Extensions, I'm going to scroll down and go to Google Workspace.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=196)** I'm going to hit Enable.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=198)** So the Google Workspace extensions has a separate policy, because you're enabling Gemini to access the data within your [[Google Drive]].
>
> **[3:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=206)** So make sure to read through these documents, but once you do, you can hit Connect.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=212)** All right, so let's look for some information.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=215)** Let's go back to New Chat and enter, I have a flight plan in my Google Drive.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=224)** What's the flight number?
>
> **[3:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=227)** So I've uploaded a file from this exercise folder.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=230)** So under Chap 02, 02_05, and you can see here, it's right here, Travel Plan.pdf.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=238)** And we got the flight number is AIR1234, which is something I made up.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=243)** Now let's double check what this is in the actual document.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=247)** So I'm going to click on Travel Plan, and here we go.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=251)** We have my boarding pass, my travel number, and the boarding time and such.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=257)** So Gemini was able to correctly identify and pull this information out of this PDF that I had sitting in Google Drive.
>
> **[4:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=263)** That's pretty awesome.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=265)** So this is how you can use extensions in Gemini.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=268)** You can use them with both Google native features such as YouTube, Search, Flights, and Hotels, or you can use it to integrate with your own data so you can search and find the information that you need.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=279)** And in the next video, we'll also leverage extensions.
>
> **[4:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/introduction-to-gemini-extensions?u=76281980&t=282)** We'll have Gemini help us plan a vacation using Google Hotels and Flights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (13), [[Gemini]] (12), [[Google Drive]] (3)
> **UI Navigation:** click on (3), scroll down (2), go to (2)
> **CLI Commands:** make (2), find (2)
> **Cross-References:** in the next (2), go back to (2)
> **Env Vars:** air1234 (1), pdf (1)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), such as (1)
> **Best Practices:** make sure to (1)

#### [Planning a vacation with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=0)** - [Instructor] In this video, we'll plan a Northern Lights vacation with [[Gemini]].
>
> **[0:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=3)** Let's start off by asking, where are the best places to see the Northern Lights?
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=10)** And hit enter.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=13)** Okay, here we go.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=14)** We got some responses and we have recommendations for time of year, weather, and location.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=20)** So let's scroll down.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=21)** We can see that we have some North American recommendations, Fairbanks, Alaska, Yellowknife, Canada, Churchill, Manitoba, and we have Europe.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=31)** We have Norway, Sweden, and Iceland.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=36)** So we have some recommendations now.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=38)** Let's go ahead and ask for these to be outputted in a table.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=42)** Can you output best times to go in a table for each location?
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=49)** And hit enter.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=52)** Right. Here we go.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=53)** We got a summary of the best times to go.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=56)** So September to April, August, mid-May, September, April, mid-November to February, and Greenland year-round.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=66)** So I think the year-round might be a mistake because in some parts of the year, the sun is up the whole time.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=72)** So we can see here that sometimes Gemini makes mistakes, and that's okay.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=77)** But this is another example where we need to double check our answers.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=81)** Okay, so let's say that I'm curious to go to Fairbanks, Alaska.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=85)** I've never been.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=86)** Let's figure out how much it costs to go there in October.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=90)** So let's say, how much would a trip to Fairbanks cost for two people in October?
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=102)** Okay, we have some clarifying questions.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=104)** Length of stay, accommodations, activities, and transportation.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=109)** And we have a range here.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=110)** So we have $2,000 to $8,000.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=114)** Okay, that's pretty pricey.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=115)** So let's ask about transportation.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=118)** How much would tickets cost to fly from New York City to Fairbanks in October?
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=132)** All right, here we go.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=133)** We have some flights here for different lengths.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=137)** Usually it takes around 11 hours with a layover and costs around $580.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=143)** Okay, let's ask about hotels.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=145)** So how much would six nights in Fairbanks cost for a three-star hotel for two people?
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=158)** And hit enter.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=162)** Okay, here we go.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=162)** We have a response.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=165)** We have some hotels here.
>
> **[2:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=167)** It tells us the price per night.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=169)** That's pretty great.
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=171)** Okay, let's wrap this up by summarizing.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=173)** Let's say based on the top rated hotel and a flight from NYC, how much would a trip to Fairbanks cost in October?
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=193)** All right, here we go.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=194)** We have the price for two people in a three-star hotel, which is $906.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=200)** For two people we have $1,159.
>
> **[3:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=205)** That's great.
>
> **[3:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=206)** So our total trip would be around $2,000, excluding food, tours, and all that other fun stuff.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=213)** So this is great.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=213)** We used [[Google]] Flights and Google Hotels as extensions in Gemini to book our next vacation.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/planning-a-vacation-with-gemini?u=76281980&t=220)** In the next video, we're going to do a challenge based on everything we've learned in this chapter to prompt Gemini to create an activewear store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (4), [[Google]] (2)
> **Env Vars:** nyc (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Writing copy for your new activewear brand](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=0)** - [Instructor] Your challenge for this chapter is to use [[Gemini]] to help you write copy for a new website.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=10)** You're launching a new activewear [[E-Commerce]] store.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=13)** How exciting!
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=14)** You want to have a successful launch, so make sure to iterate through your ideas.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=18)** Pick a brand voice that works, and come up with some clear webpage content.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=22)** I've included a sample prompt under the exercise files under Chapter 02 02_07.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-writing-copy-for-your-new-activewear-brand?u=76281980&t=27)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1), [[E-Commerce]] (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Writing copy for your new activewear brand](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=0)** - [Instructor] Now let's dive into a solution for this copywriting challenge.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=9)** Let's head over to [[Gemini]].
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=11)** So for my brand, I've chosen to focus on excitement.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=14)** Now, my first question is, what kind of copy do I actually need?
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=18)** I haven't built too many websites.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=19)** So let's ask Gemini.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=20)** I'm going to ask, what kind of pages are important for a eCommerce store?
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=29)** Hit Enter. Okay, here we go.
>
> **[0:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=33)** We get a list.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=34)** We get homepage, product page, category pages, and so forth.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=39)** Let's actually focus on homepage and product pages.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=42)** Those seem like the most important ones.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=44)** So let's go ahead and generate some copy.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=46)** So generate some copy for the homepage.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=52)** The brand is filled with excitement.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=60)** All right, here we go. We have some copy.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=62)** So we have a headline, a subheading, our body, some differentiators.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=69)** These are pretty interesting.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=70)** One thing you might notice is that there are some brackets here for, fill in the brand name, fill in the adjective, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=76)** So let's ask Gemini to actually do this for us.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=79)** Can you fill in the brand name and adjectives for this copy?
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=92)** We got Gemini to say it doesn't want to necessarily produce these values, but we actually got the brand names and the adjectives here.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=99)** So let's pick one.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=101)** I like the Adrenaline Edge.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=103)** That's very exciting.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=104)** Now, Gemini generated one.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=106)** It might have some similarities to real brands, but we're doing this as a exercise.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=111)** So we're going to use Adrenaline Edge.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=113)** So let's move on to actually generating the copy for this.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=117)** So let's say, generate the copy for the homepage of Adrenaline Edge, an activewear company focused on excitement.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=134)** All right, here we go.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=135)** This copy sounds very exciting.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=137)** Talking about our wildest dreams, conquering peaks, and chasing exhilaration.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=142)** That sounds extremely exciting and on brand.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=146)** So let's go ahead to the next portion.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=148)** Let's go ahead and generate some product names.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=150)** Let's say, I want to sell some activewear.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=155)** I'm thinking vests.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=157)** What are some names for vest [[Microsoft Products|products]]?
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=162)** And hit Enter.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=166)** So we have some general names, like Surge Vest, Limitless Layer.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=169)** We have specific ones for different types of activewear.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=172)** So let's go ahead and choose the Peak Performance Vest.
>
> **[2:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=176)** So I'm going to say, can you generate product copy for the Peak Performance Vest?
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=189)** All right, here we go.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=191)** So we have some copy for all of this.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=194)** We have all these different categories about you, about why you should wear this vest, and we have a very catchy final line of, Ready to reach your peak?
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=203)** So there we go.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=204)** We got some copy for our main page.
>
> **[3:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=206)** We iterated through a number of different names for our products, and then we generated some product copy for our favorite vest, the Peak Performance one.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=215)** And there we go.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-writing-copy-for-your-new-activewear-brand?u=76281980&t=216)** For our challenge, we generated some cool descriptions that we can use for our website and hopefully get closer to launching our activewear brand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5), [[Microsoft Products|Products]] (2)
> **Code Identifiers:** ecommerce (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Advance Your Prompts to Improve Results

[↑ Back to Table of Contents](#table-of-contents)

#### [Improving prompting with examples and quotes](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=0)** - [Instructor] Let's improve our prompting by using examples and quotes.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=4)** So let's ask a question that many of us are thinking about.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=7)** What is the most reliable car?
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=9)** So let's type that out in [[Gemini]], "What is the most reliable car?"
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=15)** And hit enter.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=18)** Alright, so here we got an answer.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=19)** Gemini in this case tells us that there's no single definition, which is true, it's a very ambiguous question, but eventually provides us with some answers based on different car brands, different vendors such as Consumer Report or JD Power, and some other factors to consider.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=35)** So Gemini is encouraging us to find more specific criteria to determine this.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=41)** Now, this is different than [[ChatGPT]]-4, for example, which will provide you a more opinionated list based on the data that it's using.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=48)** Okay, this is pretty good, but it's still pretty verbose.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=51)** I want to get into some more detailed questions.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=54)** So let's go ahead and ask Gemini a more specific question.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=57)** Let's say, "What are the most reliable cars rated by Consumer Reports in 2023?"
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=71)** All right, here we go.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=72)** We have five of the most reliable cars with a link to the report, and these are looking like a lot of Toyotas.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=80)** Okay, interesting.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=82)** And then we get, again, this blurb at the end that says you need to know more information.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=87)** You need to know your budget, driving habits, specific needs.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=90)** Alright, so we have this list, but we have this verbose information.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=94)** Let's say that we're strictly looking for a list.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=97)** Now this involves a little bit of a longer prompt.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=100)** So let's head over to our exercise files.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=102)** Click on chapter three and on 03_01.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=106)** Let's go ahead and copy this, and paste here.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=111)** So in this prompt, we're asking about the most reliable car, listing the top three, and indicating the format.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=117)** We're also telling Gemini that we do not want any other content.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=120)** So this blurb at the end, we want to try to avoid this.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=123)** If you've used [[GPT-4]] before, you might have noticed that this prompt might be a little bit shorter because GPT-4 follows content in a more specific way.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=131)** But that's okay.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=132)** Each large language model is a little bit different.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=135)** So let's hit enter.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=138)** And here we go, we got the results.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=139)** It's clearly listed in a list-like format.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=143)** We don't have any additional information.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=145)** Now, sometimes when you run this, you might get a list of links because we did a [[Google]] search.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=150)** So every time it's going to be a little bit different.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=152)** So this is how we can use examples and a specified format to get the results that we want.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/improving-prompting-with-examples-and-quotes?u=76281980&t=158)** In our next video, we're going to continue refining our prompts and output structure by using a technique called few-shot learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5), [[GPT-4]] (2), [[ChatGPT]] (1), [[Google]] (1)
> **Env Vars:** gpt (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Using completion sequences and few-shot learning](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=0)** - [Instructor] We want to use [[Gemini]] to help us classify a batch of reviews.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=4)** For this task, we want to make sure all the classifications are correct.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=8)** We can do this in a couple of ways.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=9)** The first way is to provide a list of classifications we want to match against.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=14)** I have some reviews here and the exercise files, I can copy them over.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=19)** Let's go to our Exercise Files, click on 03_02 and grab the first prompt.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=26)** And let's paste it into Gemini.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=31)** All right, here we go.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=32)** We got some classification.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=34)** We got this in a table output, and we got some categories.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=37)** We have Other, Positive and so forth.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=40)** Now these aren't necessarily the classifications we want to see, so let's go ahead and ask a more specific labeling.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=47)** So let's go ahead and go back to our Exercise Files and copy the second prompt.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=54)** In this prompt, we've added a statement at the front.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=57)** We say, classify the following reviews into these categories.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=60)** We have Promoter, Neutral, Churned risk, churned, and Random.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=64)** So let's hit Enter.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=68)** All right, there we go.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=69)** We now have a table with the categories and some reasons.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=73)** In this case, we provided the labels that we want to have Gemini classify.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=78)** But what if we wanted to provide some additional examples?
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=80)** We can use something called one-shot learning.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=83)** One-shot means that we provide one example per class, in this case neutral, detractor, churned risk, promoter and so forth.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=91)** So let's go ahead and copy the next prompt and go further down and paste it in.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=101)** So you can see here we have the actual review and then the classification.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=105)** And then for the next example, we separate it with these three pound signs.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=110)** Let's go ahead and hit Enter.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=114)** Okay, there we go.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=115)** So we got the reviews that did not have the output and we got the categories.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=120)** Now in this case, we got some additional text here.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=122)** We have this table, we have the reason, we have some notes and so forth.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=126)** Now, one of the things that you might have noticed is that Gemini did not follow the exact format.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=131)** It tried to provide the information in the clearest way possible to the user.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=135)** This is some of the differences between [[GPT-4]] and Gemini is that, Gemini often in its chat version, which is the one we use on the website, provides additional formatting that we didn't ask for.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=147)** So let's head back to our prompts and pick our fourth prompt, and let's paste it in.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=157)** In this case, we provide the different categories.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=160)** We provide the review and classification and additional information to say, output this as plain text and do not include any other formatting.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=168)** So we're being very direct with Gemini in what we want to see and what output we want to see.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=173)** So let's hit Enter.
>
> **[2:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=176)** And there we go.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=177)** We got the reviews that we to see that were unlabeled and we got the classifications.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=182)** We got in the raw format that we want to see as text and not a table and with no notes.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=188)** So by being more direct with Gemini and providing those few shot examples with additional instructions, we were able to get the exact result we wanted.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-completion-sequences-and-few-shot-learning?u=76281980&t=196)** So the next video we'll go through why Gemini explains all these things and how we can leverage this technique called chain-of-thought reasoning to get the explanations we want about why the prompts resolve in the way that they do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (9), [[GPT-4]] (1)
> **Exercise Files:** exercise files (3)
> **Cross-References:** go back to (1), next video (1)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** make (1)
> **Env Vars:** gpt (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Using chain-of-thought reasoning](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=0)** - [Instructor] In many schools, we are taught to explain our steps to get an answer.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=4)** It turns out this technique is quite useful for LLMs, including [[Gemini]].
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=9)** Today, we'll learn about a technique called chain of thought reasoning.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=13)** In an LLM context, this technique was popularized in a 2022 paper.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=18)** Let's go ahead and open up the exercise files.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=21)** I'm under chapter 03 03_03.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=26)** Let's go ahead and copy this prompt in.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=30)** Our challenge for Gemini today is to have it solve a tricky counting problem.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=35)** We propose a question about counting the feet of animals, in this case, cows, chickens, and flying ravens.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=41)** Let's go ahead and see how Gemini answers with just this prompt.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=48)** Now, here we go.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=49)** Let's validate it for accuracy.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=51)** So Gemini correctly calculated the number of legs for cows and chickens, but unfortunately, it ignored the information about tables.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=59)** In this [[Microsoft Word|word]] problem, we assume that we want to count the legs of tables.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=63)** However, it did correctly ignore the information about ravens, since the raven is at your neighbor's place.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=68)** Now, as you can see here, Gemini solved this problem in a step-by-step fashion.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=72)** That's because at the end of our prompt, we said think step-by-step.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=76)** This is the chain of thought reasoning.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=78)** We helped Gemini break down the problem into different sub-problems.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=82)** In this case, Gemini did not answer the question correctly, so let's give it another example.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=87)** We're going to try one-shot learning plus chain of thought learning.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=90)** Let's open up another chat tab by clicking on the left and go back to our exercise files and copy our second prompt.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=101)** We scroll up to the top.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=103)** We can see here we have our question, and we have our answer.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=109)** This sample answer will hopefully demonstrate to Gemini how to solve this type of problem.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=114)** We go through the number of legs each animal has.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=116)** We have cows, chickens, tables, and ravens, and then we tell Gemini how to add this all up.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=125)** Now, it looks like I missed the end of the prompt.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=127)** Let's go back to the exercise files.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=130)** So I missed these two lines.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=131)** Easy to forget.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=135)** Let's go ahead and paste this in, and at the end here, we have our final calculation.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=142)** So now below that final calculation, we have another question.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=145)** We're asking about donkeys and chickens and asking about rhinos and flying pigs.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=150)** Let's go ahead and hit enter.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=154)** All right, what kind of answer did we get?
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=156)** So Gemini actually says that we're following the same approach as before, which is excellent, so we have 48 legs from the donkeys, six legs from the chickens, 12 legs from the tables, and then we ignore our neighbor's animals.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=168)** So in total, we get 66 legs, which is the correct answer.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=172)** So there we go.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=173)** We've learned how to prompt Gemini to solve more complex questions by using chain of thought reasoning along with few-shot learning.
>
> **[3:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/using-chain-of-thought-reasoning?u=76281980&t=180)** In the next video, we're going to learn how we can format our responses in structured formats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (11), [[Microsoft Word|Word]] (1)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** exercise files (3)
> **Env Vars:** llm (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### [Reformatting your data nicely](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=0)** - [Instructor] When we output data from [[Gemini]], we may want to get it in a certain format.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=5)** One way to structure data is in the [[JSON]] format, a descriptive way of storing and sending data that is popular in programming.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=12)** You can see here on the right we have a JSON object with a recipe name and a cooking time.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=17)** The part on the left is called the key, such as recipe name.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=21)** And on the right we have the value such as brownies.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=24)** So let's go ahead and ask Gemini to generate us three sample recipes.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=28)** We'll do it in plain text first.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=31)** Generate three sample recipes.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=39)** Okay, we can scroll through and see that we have three recipes.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=42)** We have a lemon and herb chicken, we have a tomato pasta, and we have a spicy mango salsa.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=50)** Now let's generate these recipes in a JSON format so that it could be a little bit more structured.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=55)** So let's go ahead and type, "generate three sample recipes "output them in a JSON object."
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=66)** Let's correct my typo here and hit enter.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=72)** All right, here we go.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=74)** So we have the name and ingredients and instructions as the keys, and then we have the corresponding values.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=81)** Now we can also ask Gemini to provide certain information.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=84)** So let's go ahead and ask Gemini to include preparation time in minutes.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=90)** "Include preparation time in minutes as a field."
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=102)** Right, here we go.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=103)** We have preparation time now as a key and 10 minutes as a field.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=107)** That's great.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=109)** Now what you'll notice here is that the 10 doesn't have quotes around it because it's a number.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=113)** That's just the way that JSON handles this kind of information.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=117)** And there we go.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/reformatting-your-data-nicely?u=76281980&t=117)** We've learned how to have Gemini generate data in a structured way, and in the next video you'll be given a challenge to summarize your knowledge on prompting for everything we've learned so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5), [[JSON]] (5)
> **Env Vars:** json (5)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Give Gemini a tricky problem](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980&t=0)** (techno music)
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980&t=5)** - [Instructor] Your challenge is to find a question that [[Gemini]] struggles with.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980&t=9)** I've typically found that [[Microsoft Word|word]] puzzles or counting problems can result in incorrect outputs.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980&t=14)** Then use a technique that we learned to get to the right answer.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980&t=18)** [[Large Language Models (LLM)|Large language models]] aren't perfect, so finding gaps in their capabilities is an important step to understanding them.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-give-gemini-a-tricky-problem?u=76281980&t=24)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1), [[Microsoft Word|Word]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno music) (1)

#### [Solution: Give Gemini a tricky problem](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=0)** - [Instructor] Let's review my solution for this problem.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=8)** I chose a problem where we're going to ask [[Gemini]] to count letters.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=11)** There are many other problems that you could have chosen, but I chose this one.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=15)** So my challenge to Gemini was to count the number of A's in the phrase "four bananas", and provide some reasoning.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=20)** So let's head over to the exercise files, click on 0306, and copy the first prompt.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=29)** And paste it in.
>
> **[0:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=33)** Alright, so Gemini got the correct answer, which is four A's.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=36)** But unfortunately, it didn't calculate it properly.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=39)** There is no "an" in this phrase.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=42)** So let's figure out a more reliable way to get the correct answer.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=45)** Let's go back to our exercise file and copy prompt number two.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=52)** And let's paste it in.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=54)** Okay, so we're using a Few-shot learning technique here, and what we have is a question, an answer, and reasoning, and then we separate the example out with these hashtags.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=65)** Let's hit enter.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=70)** If we go back to our question, we asked, "How many C's are in 'the cats eat cactus'?"
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=76)** So we got our reasoning, we have three C's in the phrase.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=79)** We have cat, which has one C, and we have cactus, which has two C's.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=83)** So therefore, we have a total of three C's.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=85)** So that's great.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=86)** We're able to use Few-shot learning to get to the correct answer.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=90)** So in this chapter we focused on text techniques.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-give-gemini-a-tricky-problem?u=76281980&t=93)** In the next chapter, we're going to learn about Gemini's capabilities beyond text, venturing into the multimodal world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (4)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** exercise files (1), exercise file (1)
> **CLI Commands:** cat (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Multi-Modal Gemini

[↑ Back to Table of Contents](#table-of-contents)

#### [Image recognition and augmentation with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=0)** - [Instructor] [[Gemini]] is a multimodal LLM, meaning you can input text, images, or videos.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=6)** Let's learn how we can leverage images and texts together.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=9)** I'm going to analyze an instruction manual about making a hot beverage.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=13)** We can find it under our exercise files.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=16)** Let's go to chapter 04, 0401, and open up this image.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=23)** Going to copy it and paste it into Gemini.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=27)** I'm also going to grab the prompt, which is under 0401.txt.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=34)** Let's copy this in and paste it.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=38)** Now this is called a multimodal prompt because we have both text and an image.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=43)** So let's go ahead and hit Enter.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=45)** Now you can see here I've specified how hot does this water need to be and how much do we need.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=51)** I've also asked to only include information from the image.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=55)** All right, so based on the image, we need 200 milliliters of water, which looks right here at the top, and that the water should be heated to 92 degrees.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=65)** So that's pretty good.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=66)** We got the information extracted from the image.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=69)** Now, Gemini can be a little overzealous with providing additional context, even though we asked it in the prompt not to.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=76)** So in some of your answers you might get this additional information and sometimes you may not.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=80)** That's just the nature of LLMs, the responses are always a little different.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=84)** So we got this additional context about making light roast coffee or dark roast, so we got a little bit more context here.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=91)** So this is how we use Gemini to interpret an image with a prompt for us.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/image-recognition-and-augmentation-with-gemini?u=76281980&t=96)** In the next video, we'll learn about the image generation capabilities of Gemini.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (5)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** 0401.txt (1)
> **CLI Commands:** find (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Creative image generation](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=0)** - [Instructor] [[Gemini]]'s image generation can be a great way to create creative gifts.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=4)** In this video, let's make a card for a friend's birthday.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=8)** Let's start off with some brainstorming.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=10)** We know that our friend likes dinosaurs and puns, so let's write out a prompt.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=16)** "Generate four images of dinos and include a pun caption for each."
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=26)** And hit Enter.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=28)** All right, here we go.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=29)** So we have four images here.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=31)** We have a Stegosaurus that's a grill-osaurus.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=35)** It's pretty funny.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=37)** We have the Tricera-ballers, they're dino-mite.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=40)** That's pretty cool too.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=43)** We have the Brachiosaurus is a real garden-saurus, always keeping things green.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=48)** That one is okay.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=50)** Don't be fooled by their sharp teeth, these Velociraptors are quite tea-rific.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=54)** Okay.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=56)** I like this basketball one.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=57)** I personally like basketball, and I know my friend does as well, so let's use this.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=62)** Let's say, "I like the Tricera-ballers image, let's make it a cartoon."
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=72)** And you might notice there I made a typo, but Gemini should be able to correct that.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=77)** Okay, here we go.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=79)** Which one do I like? I like this bottom one right here.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=81)** So let's go ahead, and we can copy this image.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=85)** And I have a [[Google]] Doc ready here for a birthday card.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=89)** So let's paste in this image.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=91)** That's great.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=92)** And let's scroll up and grab our caption.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=99)** And we can paste it in.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=101)** So there we go.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=102)** We've created a basic birthday card for our friend incorporating their interests of dinosaurs, puns, and basketball.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=109)** That's pretty cool.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/creative-image-generation?u=76281980&t=111)** In the next video, we'll focus on Gemini's ability to analyze more complex documents, like PDFs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (3), [[Google]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing a multi-modal document with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=0)** - [Instructor] PDFs can be complex documents.
>
> **[0:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=3)** Let's ask [[Gemini]] to help us analyze two PDFs.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=6)** I have my [[Google Drive]] extensions enabled, as we can check here in the settings and extensions.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=13)** And scroll down and see [[Google]] Workspaces.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=17)** So I'm going to analyze two different files: one from Toronto and one from New York City.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=22)** We're going to focus on two visitor PDFs.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=25)** So let's head over to our exercise files.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=27)** Under chapter 04, 04_03, and we can see here we have two PDFs: one about New York tourism and one about Toronto.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=37)** Let's go back and open up our Google Drive.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=40)** As you can see here, I've already uploaded these two documents, so let's go back to Gemini and click new chat.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=49)** All right, so let's go ahead and ask Google Drive, which is our enabled extension: How many people came to Toronto? And hit enter.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=62)** As you can see here, Gemini's analyzing Google Workspaces.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=66)** It provided us information about how many people visited Toronto in 2018 and some additional information on overnight visitors and daytime visitors.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=76)** It also provided us these documents that it used.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=79)** Okay, that's great.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=81)** Now let's ask a question about how many people came from the US.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=84)** We'll go on Google Drive: How many people visited Toronto from the US?
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=94)** Now I'm using this at Google Drive just to guarantee that the Google Workspaces extension gets called.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=99)** You can also just call it without it.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=102)** Okay, we had 1.9 million visitors to Toronto came from the United States.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=107)** Okay, that's pretty cool.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=109)** Now we can always go ahead and double check if this is true.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=112)** We can go to our Google Drive and click this document.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=116)** We can scroll down and try to figure out where this information is.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=121)** Okay, so this information tells us that there are 1.9 million overnight visitors that came from the US, but in total we actually had 2.3, so it's important to double check our answers.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=133)** So what Gemini provided was actually true, but it only considered overnight visitors.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=138)** And we can also ask: Which page is this information located on?
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=147)** All right, it told us page 10. Let's double check that.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=151)** There we go. We have page 10 down here.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=154)** So what we actually could have done is we could have asked this question first rather than manually checking and then know where to scroll to.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=162)** So let's go back up and back into Gemini.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=165)** Now let's ask a question about New York City.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=168)** How many visitors went to NYC in 2019?
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=175)** And hit enter. Right, that's great.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=178)** And we can go ahead and click this link now.
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=183)** Once again, we can scroll through or we can go ahead and ask Gemini.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=189)** Which page is this information on?
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=196)** In this case, Gemini didn't get it right.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=198)** For certain documents, this information can be complex, and it's important to understand the limitations in future versions, or in Gemini Ultra, it might do a better job of analyzing these types of relationships between pages and information.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=211)** So let's go ahead and ask a meta question.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=214)** When were the Toronto and New York City documents uploaded into Google Drive?
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=224)** And hit enter.
>
> **[3:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=228)** So Gemini got half of the question correct.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=230)** I uploaded the document on February 22nd for both the Toronto and New York City one.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=236)** When you're running this exercise, you might have got the correct answer for both.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=239)** I've got that in the past and past filmings, but in this case, sometimes it gets it wrong.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=245)** And there we have it.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=246)** This is how we can use Gemini to analyze multimedia documents.
>
> **[4:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=249)** Sometimes it gets it right, sometimes not so much.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/analyzing-a-multi-modal-document-with-gemini?u=76281980&t=252)** In the next video, we'll focus on summarizing videos from YouTube.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (10), [[Google Drive]] (7), [[Google]] (3)
> **Versions:** 1.9 (2), 2.3 (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Cross-References:** go back to (1), in the next (1)
> **Env Vars:** nyc (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Searching and summarizing a YouTube video with Gemini](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=0)** - [Lecturer] I'm interested in buying a new phone and like the contents from YouTube reviews, but I'm in a rush.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=6)** So, let's have [[Gemini]] help us out.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=8)** I'm going to search for phone reviews on YouTube.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=11)** Let's go ahead and type out this prompt.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=14)** "Can you help me find the top five phones using reviews on YouTube?
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=22)** List out the phone names." And hit enter.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=28)** All right, here we go.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=29)** So, this is the YouTube contents I got as of February 2024.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=34)** We have the S24, the iPhone Pro Max, the Pixel 8 Pro, OnePlus Open, and Razr Plus.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=42)** Okay, these are great.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=43)** So, I've had both iPhones and androids.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=47)** Let's compare the iPhone 15 Pro Max with the Pixel 8 Pro.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=51)** "Compare the iPhone 15 to the Pixel 8 using YouTube."
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=63)** Right. Here we go.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=63)** We have a comparison here with two videos, so potentially I can go ahead and click on them.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=68)** It'll open up the YouTube links.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=70)** Let's ask Gemini to actually provide the comparison.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=73)** "Can you list the pros of each?"
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=79)** All right, and here we go.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=80)** We have a comparison using the videos that were linked.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=84)** So, we have a comparison of the cameras here, which is pretty interesting, and at the end we're told that the best phone depends on our priorities.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=92)** I haven't had a Pixel before, so let's give it a try.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=95)** Another thing we can do is actually search the web for deals.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=98)** "Can you find deals for Pixel 8s online?"
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=107)** All right, there we go.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=108)** We have the [[Google]] store, Amazon Best Buy, and other retailers.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=114)** We just learned how we could search YouTube and the web to find comparisons between different phones.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=120)** We can do this to compare a number of different things on YouTube or just do a general YouTube search.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/searching-and-summarizing-a-youtube-video-with-gemini?u=76281980&t=125)** In the next video, we'll use our [[Multimodal Prompting]] to create a new artifact using the techniques we learned in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (2), [[Google]] (1), [[Multimodal Prompting]] (1)
> **Code Identifiers:** iphone (3), iphones (1)
> **CLI Commands:** find (3)
> **Env Vars:** s24 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [lecturer] (1)

#### [Challenge: Comparing two world wonders](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-comparing-two-world-wonders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-comparing-two-world-wonders?u=76281980&t=0)** - [Instructor] Your challenge is to use [[Gemini]] for a research project.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-comparing-two-world-wonders?u=76281980&t=9)** Find two interesting world wonders and put together a one-page report about them, including text, sources, and images.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-comparing-two-world-wonders?u=76281980&t=16)** You'll need to leverage your [[Multimodal Prompting]] skills and research skills.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-comparing-two-world-wonders?u=76281980&t=20)** You can start your research with Gemini and then work towards the finished product by using [[Google]] Docs.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/challenge-comparing-two-world-wonders?u=76281980&t=26)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (2), [[Multimodal Prompting]] (1), [[Google]] (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Comparing two world wonders](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=0)** - Let's start off the solution by asking about information about the modern world wonders.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=10)** Let's say, can you tell me about all the modern world wonders?
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=20)** So let's scroll down and see what we get.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=21)** We have the Great Wall of China, Chichen Itza, Petra, Machu Picchu, Christ the Redeemer, the Colosseum, the Taj Mahal, and some other world wonders.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=38)** Okay, I'm curious about the Great Wall of China and Machu Picchu.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=41)** So let's ask for information about them.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=45)** Can you compare Machu Picchu with the Great Wall of China?
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=54)** And hit enter.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=58)** All right, here we go.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=59)** We have some information about these world wonders.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=63)** Now let's ask [[Gemini]] to summarize them for me.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=65)** Let's say, can you summarize this information into a table with three facts each, and hit enter.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=80)** All right, here we go, we have our information here.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=83)** Now, the cool thing that we can do with Gemini is we can actually export this into a [[Google]] sheet.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=87)** Let's go ahead and do that.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=92)** All right, let's open the sheet.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=95)** All right, here we go, we have our sheet of information.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=98)** Let's copy it and add it into a Google Doc I've created.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=105)** So I have the title here, "World Wonders Research Project", hit enter and paste in my spreadsheet.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=113)** So now I have my little table of the landmark and our facts.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=119)** Let's arrange this a little bit differently.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=123)** Now, this information is great, but actually I want some citations to make sure that I know that this information is credible.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=129)** Let's ask Gemini.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=131)** Can you add citations to each of these facts?
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=138)** All right, here we go, we have our facts with our citations.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=142)** Now, the first citation was invalid, so let's ask it to try again.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=147)** Can you retry citation one?
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=154)** All right, here we go.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=156)** So let's go ahead and re-export this to our Sheets.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=161)** Open Sheets, and copy this information and replace it in our document.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=170)** Paste unlinked.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=173)** And spread it out.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=177)** And let's copy our citations in.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=179)** Going back to Gemini and copying citations.
>
> **[3:05](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=185)** Now, as part of this project, I want to add some generated images about these two different world wonders.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=191)** So let's ask Gemini to generate me two cartoon styled images for each of these world wonders.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=196)** Generate two cartoon styled images, both the Great Wall of China and Machu Picchu.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=209)** Oh, made a typo there.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=214)** Let's fix that, and hit enter.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=220)** All right, here we go.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=221)** We have our Great Wall of China and Machu Picchu.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=224)** Let's ask for this Machu Picchu one to be a little bit more cartoonish.
>
> **[3:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=229)** Can you regenerate the Machu Pichu photo to be more cartoon styled?
>
> **[4:00](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=240)** So here we're iterating with Gemini, improving our prompts and getting to the result we want.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=247)** Alright, let's use this top right image.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=250)** You can copy it here, paste below, and do the same thing for the Great Wall of China.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=257)** Scroll up, and paste it in.
>
> **[4:23](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=263)** And I'm going to make these smaller to fit into our report.
>
> **[4:32](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=272)** And let's add these into our table as another column.
>
> **[4:35](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=275)** So I'm going to right click, insert column on the right, say, photo is our caption, copy our photo in for Machu Picchu and for the Great Wall.
>
> **[4:49](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=289)** All right, there we go.
>
> **[4:50](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=290)** Now let's add one more piece of information.
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=293)** Let's say that this report was generated with Gemini, so I'm going to type out the images, citations, and facts were generated with Gemini for this report.
>
> **[5:08](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=308)** And let's make that bold and let's [[Zoom]] out a little bit to 50%.
>
> **[5:16](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=316)** So there we have it.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=317)** We've created a world wonders research project by using Gemini to learn about the different world wonders, picking Machu Picchu and the Great Wall of China generating facts and citations and generating some images.
>
> **[5:30](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=330)** Now this project should be considered a draft.
>
> **[5:33](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=333)** We should go through each of these links and validate that the facts here are true.
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=337)** We should also disclose that this information was generated with Gemini.
>
> **[5:40](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=340)** Depending on your work environment or learning environment, this might be considered plagiarism.
>
> **[5:46](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/solution-comparing-two-world-wonders?u=76281980&t=346)** This is a powerful way to use Gemini to help us with research and do everyday tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (11), [[Google]] (2), [[Zoom]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (1), open the (1), scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your prompt engineering journey](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/continuing-your-prompt-engineering-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/continuing-your-prompt-engineering-journey?u=76281980&t=1)** - Thanks for joining me to learn about [[Gemini]].
>
> **[0:03](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/continuing-your-prompt-engineering-journey?u=76281980&t=3)** [[Google]] has some great resources on its website to continue your learning and keeping up to date.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/continuing-your-prompt-engineering-journey?u=76281980&t=9)** You can also follow me on [[LinkedIn]] to stay up to date with gen AI updates.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/continuing-your-prompt-engineering-journey?u=76281980&t=14)** You can also watch my other courses, like "Building AI-Powered Apps" or "Getting Hands-on with [[GPT-4]]."
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-gemini-2024/continuing-your-prompt-engineering-journey?u=76281980&t=20)** Gen AI is continuing to evolve, so let's keep learning and building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (1), [[Google]] (1), [[LinkedIn]] (1), [[GPT-4]] (1)
> **Env Vars:** gpt (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Denys Linkov]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence (AI)
- Gemini
- Google Gemini
- Prompt Engineering

## Path Context

### In [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]
← [[Google Gemini For Developers]] | **2 of 7** | [[Multimodal Prompting with Google's Project Gemini]] →

## Appears In

- [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]

## Related Courses

_Courses sharing skills:_

- [[Getting Started with the Google Gemini API]] — Artificial Intelligence (AI), Google Gemini, Gemini
- [[Building with Google Gemini Advanced and Ultra]] — Artificial Intelligence (AI), Google Gemini, Gemini
- [[Multimodal Prompting with Google's Project Gemini]] — Artificial Intelligence (AI), Google Gemini, Prompt Engineering
- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — Artificial Intelligence (AI), Prompt Engineering
- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), Prompt Engineering

---

[↑ Back to top](#)