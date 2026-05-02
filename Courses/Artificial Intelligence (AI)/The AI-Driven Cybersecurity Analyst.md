---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: the-ai-driven-cybersecurity-analyst
url: "https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst"
duration_minutes: 32
duration: 32m
level: Beginner
updated: 4/2/2025
learners: 11039
skills:
  - Generative AI
  - Information Security Analysis
  - Artificial Intelligence (AI)
  - Cybersecurity Tools
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHbB9GXY_N8qw/learning-public-crop_675_1200/B4DZXPvlsNHYAY-/0/1742947114514?e=2147483647&amp;v=beta&amp;t=hUD4N88zf3HMXPSACveBYfpWi4R4sBkk-nEzJZs9bpI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Leverage AI as a Cybersecurity Analyst]]'
prev_courses:
  - '[[Understanding Artificial Intelligence Concepts And Terminology With Iso Iec 22989]]'
next_courses:
  - '[[The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview]]'
path_nav: '[{"path":"Leverage AI as a Cybersecurity Analyst","position":2,"total":7,"prev":"Understanding Artificial Intelligence Concepts And Terminology With Iso Iec 22989","next":"The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/generative-ai
  - skill/information-security-analysis
  - skill/artificial-intelligence-ai
  - skill/cybersecurity-tools
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/The%20AI-Driven%20Cybersecurity%20Analyst.md)

![The AI-Driven Cybersecurity Analyst](https://media.licdn.com/dms/image/v2/D4D0DAQHbB9GXY_N8qw/learning-public-crop_675_1200/B4DZXPvlsNHYAY-/0/1742947114514?e=2147483647&amp;v=beta&amp;t=hUD4N88zf3HMXPSACveBYfpWi4R4sBkk-nEzJZs9bpI)

# The AI-Driven Cybersecurity Analyst

> Artificial intelligence is transforming cybersecurity. Are you ready to transform with it? Learn to harness the power of AI in this course that looks at AI in both offensive and defensive security capacities. Instructor Michael Wylie shares ten tips for leveraging AI—including prompt engineering, ethical use of AI, threat detection, and LLM-driven honeypots—that will shape the next generation of c

> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst) | 32m | Beginner | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [How AI is transforming cybersecurity](#how-ai-is-transforming-cybersecurity)
- [**1. AI Tips for Cybersecurity Analysts**](#1-ai-tips-for-cybersecurity-analysts) (10 videos)
  - [Prompt engineering and productivity tips for cybersecurity analysts](#prompt-engineering-and-productivity-tips-for-cybersecurity-analysts)
  - [Advanced prompt engineering and productivity tips](#advanced-prompt-engineering-and-productivity-tips)
  - [Using AI ethically and securely in cybersecurity, part 1](#using-ai-ethically-and-securely-in-cybersecurity-part-1)
  - [Using AI ethically and securely in cybersecurity, part 2](#using-ai-ethically-and-securely-in-cybersecurity-part-2)
  - [Running AI offline and locally](#running-ai-offline-and-locally)
  - [Threat actors use of AI](#threat-actors-use-of-ai)
  - [Threat detection with AI](#threat-detection-with-ai)
  - [Improve security reporting using AI](#improve-security-reporting-using-ai)
  - [AI-driven threat intelligence](#ai-driven-threat-intelligence)
  - [LLM-driven honeypots](#llm-driven-honeypots)
- [**2. Helpful Resources**](#2-helpful-resources) (1 videos)
  - [The future of cybersecurity with AI](#the-future-of-cybersecurity-with-ai)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### How AI is transforming cybersecurity
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=0)** - Why should we even care about AI in cybersecurity?
>
> **[0:03](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=3)** One of AI's greatest strengths is recognizing patterns.
>
> **[0:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=6)** For example, I once spent half the day analyzing network traffic from a new malware variant, looking for patterns.
>
> **[0:13](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=13)** As an experiment, I asked AI to analyze the same network telemetry.
>
> **[0:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=17)** It was able to identify a more refined pattern On seconds.
>
> **[0:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=21)** Since ChatGPT went viral, a wave of AI-powered tools have emerged, designed to be user friendly, even for those without a coding background.
>
> **[0:30](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=30)** But with all this talk about AI as the cybersecurity superhero, it raises an important question.
>
> **[0:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=35)** Are there any downsides?
>
> **[0:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=37)** Like any tool, AI can be misused, and one of the biggest things to remember is that AI is only as good as the data it's trained on.
>
> **[0:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=45)** It's about carefully selecting the data AI learns from, and baking ethical considerations into the development process from the very beginning.
>
> **[0:52](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=52)** So does this mean robots are going to steal our jobs?
>
> **[0:55](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=55)** The short answer, no, but the nature of cybersecurity jobs are evolving, and professionals will need to adapt by developing new skills, especially those that involve working alongside AI.
>
> **[1:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=66)** Hi, I'm Michael Wylie.
>
> **[1:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=68)** I help organizations and security professionals like you detect and respond to threats, reducing risks and preventing costly breaches.
>
> **[1:16](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=76)** Join me in this course to learn how to lead the next generation of cybersecurity professionals, ones who leverage AI as a powerful copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (10), [[Cybersecurity]] (4), data (2), strengths (1), traffic (1)
> **Analogies:** for example (1)
> **Speakers:** - why (1)


### 1. AI Tips for Cybersecurity Analysts

[↑ Back to Table of Contents](#table-of-contents)

#### Prompt engineering and productivity tips for cybersecurity analysts
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=0)** - [Instructor] Prompt engineering.
>
> **[0:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=1)** Doesn't it sound intimidating?
>
> **[0:04](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=4)** I'm excited to demystify prompt engineering in this video, so let's jump right in.
>
> **[0:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=9)** By the end, you'll be crafting prompts that make large language models or LLMs work for you, and that's not always easy.
>
> **[0:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=17)** What is prompt engineering?
>
> **[0:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=18)** At its core, prompt engineering is like learning to speak AI, not in a literal sense, but in learning how to communicate effectively with LLMs.
>
> **[0:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=27)** A prompt is an input you give to an AI model to elicit a specific response.
>
> **[0:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=33)** It can be a question, an instruction, data, or a combination of these.
>
> **[0:38](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=38)** Before we dive into the details of prompt engineering, it's important to understand how LLMs work at a high level.
>
> **[0:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=44)** LLMs excel at understanding token relationships, a token being a word or character, and predicting the next token in a sequence.
>
> **[0:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=51)** Because these models are trained on vast amounts of text, documents, and web pages, they essentially become advanced word completers.
>
> **[0:59](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=59)** For example, if you prompt a pre-train model with a simple phrase like prompt engineering, it might generate a list of questions or phrases similar to what you'd see in a Google Search Autocomplete.
>
> **[1:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=69)** When I typed prompt engineering into Google, I get suggestions like prompt engineering jobs, prompt engineering courses, and prompt engineering for ChatGPT.
>
> **[1:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=78)** Prompting a pre-trained LLM would have a similar result.
>
> **[1:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=82)** But when I enter the same phrase into a more advanced trained model, I get a detailed, polished explanation of prompt engineering instead.
>
> **[1:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=89)** Understanding what happens behind the scenes when interacting with AI is important.
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=94)** The words you use, the order in which you place them, and the structure of your prompt can dramatically change the results.
>
> **[1:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=100)** Imagine you're at a restaurant, the server asks what you'd like.
>
> **[1:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=104)** You respond with something delicious.
>
> **[1:46](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=106)** The chef will bring you food, but it might not be what you expected.
>
> **[1:50](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=110)** Now, imagine you're more specific.
>
> **[1:53](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=113)** I'd like something savory, preferably steak with asparagus as my vegetable.
>
> **[1:57](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=117)** The chances of getting exactly what you want much higher.
>
> **[2:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=121)** The same applies to AI.
>
> **[2:03](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=123)** Specific well-structured prompts yield better results.
>
> **[2:07](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=127)** To get high quality output from AI a well-engineered prompt typically includes these key elements.
>
> **[2:13](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=133)** Instructions, what the model should do.
>
> **[2:16](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=136)** Context, background information or relevant details.
>
> **[2:20](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=140)** Input data, specific information for the model to process.
>
> **[2:24](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=144)** And output indicators, the desired format or type of response.
>
> **[2:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=149)** There are many acronyms like RTF, which stands for role, task, and format, and CTF, which stands for context, task, and format, designed to help remember these elements when crafting a prompt.
>
> **[2:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=160)** By incorporating these elements, you'll get far more accurate and useful responses.
>
> **[2:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=165)** Try it for yourself.
>
> **[2:46](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=166)** Take a minute to experiment with prompt engineering and compare the results to how you used to interact with AI.
>
> **[2:52](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=172)** First, craft a generic prompt, like prompt engineering.
>
> **[2:55](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=175)** Then refine it by adding instructions, context, input data, and output indicators to see how much better the AI's response becomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (13), ai (7), prompt (6), data (3), [[Microsoft Word|Word]] (2)
> **Analogies:** imagine (2), for example (1), similar to (1)
> **Env Vars:** llm (1), rtf (1), ctf (1)
> **Definitions:** stands for (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Advanced prompt engineering and productivity tips
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=0)** - [Instructor] Now if you want to take prompt engineering to the next level, understanding LLM parameters and hyper parameters will help you fine tune and master your prompts.
>
> **[0:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=8)** Here's some key parameters that influence AI responses.
>
> **[0:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=12)** I'll walk you through it in LM Studio.
>
> **[0:14](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=14)** First, system prompt.
>
> **[0:16](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=16)** By adjusting the system prompt, users can control how the model reacts to different prompts, making it more informative, creative, or factual, depending on the desired outcome.
>
> **[0:26](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=26)** A system prompt is a set of instructions or context that guides the behavior of the LLM during interactions.
>
> **[0:32](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=32)** It lets users customize the tone and expected response style for the model based on the input.
>
> **[0:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=37)** One of my favorite use cases for system prompts, sometimes referred to as pre prompts, is to help create accurate tailored threat hunting queries.
>
> **[0:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=45)** When you ask an AI tool for help creating a query, it doesn't have knowledge of your system's field names or data types.
>
> **[0:52](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=52)** Every time you interact with the AI tool, you could provide detailed information about your data schema.
>
> **[0:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=58)** But if you enter the field names and data types in the system prompt, you don't need to add the context every time you interact with the chat bot.
>
> **[1:05](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=65)** Next, temperature.
>
> **[1:07](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=67)** Temperature controls the randomness of the AI's output.
>
> **[1:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=70)** In other words, it determines how creative the AI gets in its response.
>
> **[1:14](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=74)** Lower temperatures, for example, 0.2, leads to more focused and repetitive text.
>
> **[1:19](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=79)** The AI plays it safe.
>
> **[1:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=81)** Higher temperatures, for example, 0.8, results in more creative and diverse responses, but they can sometimes be less coherent.
>
> **[1:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=89)** The AI takes risks.
>
> **[1:31](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=91)** Now let's look at Top-K and Top-P.
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=94)** Another set of important hyper parameters are Top-K and Top-P, which helps shape the AI's word selection process.
>
> **[1:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=100)** Imagine you're playing a word guessing game and the AI is trying to complete your sentence.
>
> **[1:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=105)** You type, "I love eating..."
>
> **[1:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=107)** The AI has a huge vocabulary, but some words make more sense than others.
>
> **[1:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=111)** Let's say it's algorithm ranks the following choices.
>
> **[1:54](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=114)** Pizza, 40% chance.
>
> **[1:56](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=116)** Burgers, 30% chance.
>
> **[1:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=118)** Chocolate, 15% chance.
>
> **[2:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=120)** Broccoli, 5% chance.
>
> **[2:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=122)** And toothpaste, 3% chance.
>
> **[2:04](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=124)** With Top-K sampling or K equals three, the AI will only pick from the top three choices, pizza, burgers, or chocolate.
>
> **[2:13](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=133)** This prevents the AI from saying something odd, like, I love eating toothpaste.
>
> **[2:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=137)** So Top-K ensures AI selects from the best choices, making response more natural.
>
> **[2:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=142)** Top-P works similarly, but instead of picking a fixed number of top choices, like K equals three, it selects words until their combined probabilities reach a certain threshold, for example, 0.9 or 90%.
>
> **[2:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=155)** If the model is confident, it might pick only three words.
>
> **[2:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=159)** If confidence is spread out, it might need five or more words to reach 90%.
>
> **[2:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=164)** Now, have you ever noticed AI getting a bit repetitive, stuck on a phrase or idea?
>
> **[2:49](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=169)** Two, hyper parameters help with this are frequency penalty and presence penalty.
>
> **[2:53](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=173)** Frequency penalty discourages the AI from repeating the same word too often.
>
> **[2:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=178)** Think of it as a gentle nudge to the AI.
>
> **[3:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=180)** Hey, you've used that word enough.
>
> **[3:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=182)** Try something different.
>
> **[3:03](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=183)** Presence penalty is like the big brother of frequency penalty.
>
> **[3:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=186)** It applies to the entire topics or themes instead of just words.
>
> **[3:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=190)** If you want to prevent AI from getting stuck on describing the same setting or idea over and over, increase the presence penalty.
>
> **[3:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=197)** Try it yourself.
>
> **[3:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=198)** Take a moment to pause the video and experiment with different hyper parameters.
>
> **[3:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=202)** Use the prompt engineering tips and hyper parameters we've discussed and see how they change the AI's response.
>
> **[3:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=207)** Did the output differ from what you typically see?
>
> **[3:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=214)** Keep in mind, not every AI tool gives you access to hyper parameters.
>
> **[3:38](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=218)** For example, Google AI Studio and LM Studio allow you to tweak these hyper parameters.
>
> **[3:43](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=223)** However, ChatGPT's web interface does not.
>
> **[3:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=227)** To leverage hyper parameters with ChatGPT, you need to use the OpenAI's API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (20), prompt (4), [[Microsoft Word|Word]] (4), data (3), [[Prompt Engineering]] (2)
> **Analogies:** for example (4), imagine (1), think of it as (1)
> **Env Vars:** llm (2), api (1)
> **Versions:** 0.2 (1), 0.8 (1), 0.9 (1)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Using AI ethically and securely in cybersecurity, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=0)** - [Instructor] How do we ensure that AI-powered cybersecurity systems aren't making existing biases worse?
>
> **[0:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=6)** It's a complex issue, one that the cybersecurity community is actively grappling with right now.
>
> **[0:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=11)** The challenge is that AI algorithms are often trained on historical data, which may already contain biases.
>
> **[0:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=17)** If these biases go unchecked, AI can reinforce and amplify them in a way that negatively impacts cybersecurity decisions.
>
> **[0:25](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=25)** Let's say an AI security system is trained on historical cyber attack data.
>
> **[0:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=29)** If that data shows that a higher percentage of attacks originated from a particular country, the AI may start flagging any activity from that country as suspicious, even if it's perfectly legitimate.
>
> **[0:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=40)** This could lead to incorrect profiling based on location, increased false positives causing unnecessary security alerts, and discrimination in threat detection, where some users are treated differently.
>
> **[0:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=51)** It's a real risk, and it highlights the need for transparency and accountability in AI development.
>
> **[0:57](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=57)** We must understand how AI systems make decisions, and ensure we have ways to challenge and correct those decisions if they're based on biased data.
>
> **[1:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=66)** As AI continues to shape cybersecurity defenses, ensuring ethical development is more important than ever.
>
> **[1:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=72)** Here are some key concerns we need to keep in mind.
>
> **[1:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=75)** AI systems must provide equal protection against cyber threats.
>
> **[1:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=78)** If an algorithm unfairly targets or overlooks certain users, regions, or systems, it creates unbalanced defenses and gaps in security.
>
> **[1:26](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=86)** For example, if AI over-prioritizes threats based on past data biases, it may fail to detect new emerging threats from previously safe sources.
>
> **[1:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=95)** AI models operate as probabilistic systems, meaning they generate responses based on learned patterns, weights, and clusters of data.
>
> **[1:42](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=102)** But if AI makes decisions that humans can't follow or could cause harm, it becomes difficult to trust its effectiveness, identify potential errors, and fix vulnerabilities in the system.
>
> **[1:54](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=114)** A humorous yet serious example of how AI can generate a dangerous response is when Google's AI suggested adding Elmer's glue to cheese.
>
> **[2:03](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=123)** It's believed that the AI misinterpreted a joke or comment on Reddit where users sarcastically suggested glue to keep cheese from sliding off pizza.
>
> **[2:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=131)** Of course, eating glue is hazardous and no sane person would recommend it, but this example highlights the importance of understanding how AI arrives at its conclusions.
>
> **[2:20](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=140)** To make AI-powered cybersecurity systems truly effective, we must minimize bias in training data, and ensure transparency in AI decision making, continuously test AI outputs to catch errors before they cause harm, and incorporate human oversight so experts can verify AI-driven security measures.
>
> **[2:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=159)** As we move forward, ethical AI development isn't just a goal; it's a necessity.
>
> **[2:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=164)** The question isn't whether AI will be used in cybersecurity.
>
> **[2:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=167)** It's how we ensure it's used responsibly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (22), data (7), [[Cybersecurity]] (6), [[Security]] (4), [[Algorithms]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Using AI ethically and securely in cybersecurity, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=0)** - [Narrator] On January 20, 2025, Chinese AI startup Deepseek released its latest model, Deepseek-R1, claiming to rival Chat GPT in capabilities while being significantly cheaper to train.
>
> **[0:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=12)** By January 24th, Deepseek's popularity skyrocketed, but with its rise came a wave of malicious copycat sites exploiting eager users just as quickly.
>
> **[0:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=22)** Then on January 27th, the US stock market took a massive hit.
>
> **[0:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=27)** Fears that Deepseek and other Chinese AI companies could produce products faster and for less money triggered a $969 billion loss in value of US Tech stocks.
>
> **[0:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=37)** By January 28th, the Deepseek mobile app had surged to the number one spot in both the Google Play and Apple App Store.
>
> **[0:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=44)** On January 29th, OpenAI raised concerns, alleging that Deepseek may have inappropriately leveraged OpenAI's data to build its model.
>
> **[0:52](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=52)** That same day, security researchers made a shocking discovery.
>
> **[0:56](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=56)** A publicly exposed Deepseek database had leaked sensitive information, API keys, and users' chat histories.
>
> **[1:03](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=63)** For CISOs, this was the nightmare scenario they'd long feared.
>
> **[1:07](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=67)** Deepseek proved that AI's theoretical risks can quickly become reality.
>
> **[1:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=71)** AI's rapid evolution can blindside security teams unless they stay agile, informed, and ready to act.
>
> **[1:19](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=79)** User input into AI tools could expose intellectual property and trade secrets to third parties.
>
> **[1:24](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=84)** All collected data could be stored in a foreign country, where national security laws require firms to share data with government agencies, and a data breach could expose chat logs, meaning sensitive employee inputs could now be public.
>
> **[1:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=97)** But AI chatbots aren't the only risk.
>
> **[1:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=100)** From hotel booking apps to accounting software, AI is everywhere, and that opens the door to data leaks.
>
> **[1:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=107)** Imagine this, your company carefully vets a teleconferencing vendor for security compliance, but after approval, the vendor rolls out AI features enabled by default that analyze user conversations, video, audio, and transcripts, to train its model.
>
> **[2:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=122)** Worse, there's no easy way to opt out.
>
> **[2:05](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=125)** This actually happened when Zoom introduced AI features, catching many organizations off guard.
>
> **[2:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=130)** And it's not stopping there.
>
> **[2:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=132)** More software vendors are jumping on the AI bandwagon.
>
> **[2:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=135)** So as a cybersecurity analyst, your job is to protect organizations from AI tools that could unintentionally expose sensitive data and ensure AI is used securely to enhance, not endanger your work.
>
> **[2:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=147)** Take a minute to pause the video and write down some ways you can help minimize AI risks within your organization.
>
> **[2:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=153)** Need help getting started?
>
> **[2:38](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=158)** How about assess risks associated with AI tools that are in use?
>
> **[2:42](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=162)** Brainstorm ways to detect inappropriate AI use.
>
> **[2:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=165)** For example, how can you tell if source code is entered into Chat GPT?
>
> **[2:49](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=169)** And help set up secure offline AI alternatives.
>
> **[2:53](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=173)** AI is transforming the workplace, but without the right safeguards, it can become a security nightmare.
>
> **[3:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=180)** The question is, are you ready to securely use AI?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (18), data (6), [[Security]] (5), hit (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** gpt (2), api (1)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** getting started (1), set up (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Running AI offline and locally
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=0)** - [Instructor] By now, I hope I've convinced you that AI can be a powerful copilot for cybersecurity analysts, but maybe you're concerned about data privacy, or perhaps your company's generative AI policy restricts tools like ChatGPT.
>
> **[0:13](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=13)** If that's the case, running AI locally might be the answer.
>
> **[0:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=17)** In this video, I'll walk you through what local AI tools are and why they matter, open-source LLMs worth exploring, and how to optimize an offline AI model for your needs.
>
> **[0:28](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=28)** Let's dive in.
>
> **[0:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=29)** So, what's a local AI tool?
>
> **[0:32](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=32)** A local AI tool lets you harness the power of AI without sending data to a third party.
>
> **[0:38](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=38)** When you use tools like ChatGPT, you're interacting with cloud-based AI models over the internet.
>
> **[0:43](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=43)** While convenient, this raises concerns about privacy and security, but there's good news.
>
> **[0:49](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=49)** You don't have to rely on online or paid AI tools as a cybersecurity analyst.
>
> **[0:54](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=54)** It's surprisingly easy to download a pre-trained LLM onto your laptop, a private server, or even a secure cloud instance.
>
> **[1:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=61)** Platforms like Hugging Face host thousands of open-source AI models that you can explore.
>
> **[1:07](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=67)** Open source LLMs are on the rise, and for good reason.
>
> **[1:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=70)** Take Llama 2 and Mistral for example.
>
> **[1:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=72)** These models are fast, multilingual, and design for high performance.
>
> **[1:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=77)** Let's say you're analyzing cybersecurity threats across different regions.
>
> **[1:20](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=80)** With a multilingual model, you don't need separate tools or a translator.
>
> **[1:25](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=85)** That's a huge advantage in today's global cyber landscape.
>
> **[1:28](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=88)** For cybersecurity professionals dealing with massive amounts of data, these models can be a game changer.
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=94)** Think of them as co-pilots that analyze data in different languages without ever getting tired.
>
> **[1:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=99)** Once you've picked a model, you'll need to decide on the size, which refers to the number of parameters.
>
> **[1:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=105)** Generally, more parameters means better performance, but there's a catch hardware limitations.
>
> **[1:50](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=110)** Pro tip, share your hardware specs with ChatGPT and ask which size model will run smoothly on your setup.
>
> **[1:57](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=117)** For most laptops, a seven to 13 billion parameter model is realistic.
>
> **[2:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=121)** That might sound small compared to 70 billion parameter models, but AI is evolving fast and efficiency is improving.
>
> **[2:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=128)** One way you can get better output of a smaller parameter model is by using RAG or retrieval augmented generation.
>
> **[2:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=135)** Think of it as giving your AI a cheat sheet before it answers your question.
>
> **[2:19](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=139)** Instead of relying solely on general knowledge, the AI can pull specific, relevant data just like an experienced cybersecurity analyst would.
>
> **[2:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=147)** This approach makes smaller models much more powerful.
>
> **[2:31](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=151)** In fact, experiments have shown that RAG enhanced small models can outperform larger general purpose ones.
>
> **[2:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=157)** Try it out.
>
> **[2:38](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=158)** Take a moment to pause the video and explore tools for running AI models locally.
>
> **[2:43](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=163)** Some of my favorites are Ollama and LM Studio.
>
> **[2:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=167)** (bright music) By running AI locally, choosing the right model and leveraging RAG, you can unlock the power of AI capabilities all while keeping your data private.
>
> **[3:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=180)** Give it a try and let me know on LinkedIn what you discover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (16), data (6), [[Cybersecurity]] (5), [[ChatGPT]] (3), rag (3)
> **Env Vars:** rag (3), llm (1)
> **Analogies:** for example (1), think of it as (1), just like (1)
> **Prerequisites:** you'll need (1), setup (1)
> **Definitions:** refers to (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Threat actors use of AI
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=0)** - [Instructor] We've focused on using AI for good in cybersecurity, but what are the threat actors up to?
>
> **[0:05](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=5)** They aren't just sitting back and letting us take the lead with AI.
>
> **[0:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=9)** They're not only aware of AI's potential, they're already using it to make their attacks more and more sophisticated.
>
> **[0:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=15)** They're using AI against us.
>
> **[0:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=17)** For example, one of the biggest threats in cybersecurity is phishing, which accounted for 15% of all data breaches According to the Verizon's 2024 Data Breach and Investigation Report.
>
> **[0:28](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=28)** With AI tools like ChatGPT, attackers can now create incredibly convincing phishing emails that are personalized and almost impossible to distinguish from real messages.
>
> **[0:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=37)** Creating a phishing campaign which used to be pretty time consuming for attackers, is now becoming much easier and more effective thanks to AI.
>
> **[0:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=45)** While the big AI models that everyone knows about have safeguards and are constantly being monitored, there are also less restricted AI models out there, such as Perplexity's uncensored model, kind of hiding in the dark corners of the internet.
>
> **[0:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=58)** And the most concerning part is we're still in the early stages of all this.
>
> **[1:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=62)** We're in this constant technological race with the threat actors with AI powering both sides.
>
> **[1:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=68)** Another example of how threat actors are using AI is to generate malware.
>
> **[1:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=72)** Tools like GitHub Copilot, designed to assist developers can be exploited by attackers to create sophisticated malware, even without software development knowledge.
>
> **[1:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=81)** So is AI ultimately going to make the cybersecurity landscape better or worse in the long run?
>
> **[1:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=87)** That's the million dollar question, isn't it?
>
> **[1:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=89)** The good news is that while the threats are real and they're serious, AI is also giving the defenders a fighting chance.
>
> **[1:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=95)** In fact, it's helping to level the playing field in cybersecurity.
>
> **[1:38](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=98)** Think about smaller organizations or teams with limited resources.
>
> **[1:42](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=102)** They often struggle to keep up with the latest threats and defenses, but AI can give them powerful tools and capabilities that they wouldn't have otherwise.
>
> **[1:50](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=110)** If you take the time to learn how to effectively use AI, it is kind of like a superpower for the underdogs.
>
> **[1:56](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=116)** This course is designed to help you get better at using AI for security without years of training and coding bootcamps.
>
> **[2:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=122)** As AI gets more powerful and easier to access, cyber criminals will find new ways to exploit it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (16), [[Cybersecurity]] (4), [[Phishing]] (3), data (2), [[ChatGPT]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1), such as (1), kind of like (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Threat detection with AI
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=0)** - [Instructor] Traditional threat detection relies on signature-based approaches, rule sets, and predefined examples to identify and mitigate potential threats.
>
> **[0:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=8)** While these methods worked in the past, the evolving threat landscape is making them less effective.
>
> **[0:14](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=14)** Signature-based detection struggles to keep up with the increasing number and sophistication of attacks, especially zero-day threats.
>
> **[0:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=21)** That's where AI steps in.
>
> **[0:23](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=23)** AI is good at spotting tiny deviations from normal behavior, subtle clues that could indicate a stealthy attack.
>
> **[0:30](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=30)** It's like having a super-sensitive radar system that detects threats before they escalate.
>
> **[0:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=35)** A recent article found that AI-based threat detection systems achieved an average detection accuracy of 92.5% across various cyber threats, with a false positive rate of just 3.2%.
>
> **[0:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=47)** Machine learning algorithms also cut response times to cyberattacks by 40%, and AI-driven phishing prevention systems reached an impressive 95% effectiveness rate.
>
> **[0:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=58)** But some people worry about relying too much on AI.
>
> **[1:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=61)** What if AI makes a mistake?
>
> **[1:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=62)** What if it misidentifies normal activity as a threat and shuts down an entire system?
>
> **[1:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=68)** That's a real concern and an important one.
>
> **[1:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=71)** But here's the thing.
>
> **[1:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=72)** AI isn't meant to replace human analysts.
>
> **[1:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=75)** Instead, it enhances their capabilities.
>
> **[1:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=78)** Think of it as a partnership in detecting threats.
>
> **[1:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=81)** AI does the heavy lifting, analyzing vast amounts of data in lightning speed, identifying patterns and flagging anomalies.
>
> **[1:28](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=88)** Humans, on the other hand, provide critical oversight.
>
> **[1:31](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=91)** They understand context, interpret data, and make the final judgment calls.
>
> **[1:36](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=96)** Imagine a system that learns what normal looks like on your network.
>
> **[1:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=99)** AI establishes a baseline and flags anything that deviates from it.
>
> **[1:43](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=103)** This shifts cybersecurity from reactive to proactive.
>
> **[1:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=107)** Instead of responding to attacks after they happen, AI helps prevent them from occurring in the first place, and that's a game changer.
>
> **[1:55](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=115)** Even in high-stakes situations where fully-automated AI detection isn't an option, AI can still act as a threat detection copilot, providing valuable insights that speed up investigations.
>
> **[2:05](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=125)** Years ago, before generative AI was widely accessible, I spent over three hours analyzing a complex and highly obfuscated PowerShell command from a client's logs.
>
> **[2:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=135)** The attacker had used aliases, concatenation, whitespace, variable substitution, padding, and other evasion techniques to make analysis difficult.
>
> **[2:25](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=145)** Fast forward to today, when I fed the same obfuscated code into an AI chatbot and asked it to decode the PowerShell.
>
> **[2:32](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=152)** Within seconds, I had a clear explanation of the command and its purpose.
>
> **[2:36](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=156)** That's the power of AI in cybersecurity.
>
> **[2:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=159)** By working with AI, security teams can detect threats faster, smarter, and more effectively than ever before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (15), data (2), [[Cybersecurity]] (2), [[Powershell]] (2), [[Algorithms]] (1)
> **Analogies:** it's like (1), think of it as (1), imagine (1)
> **CLI Commands:** make (2)
> **Versions:** 92.5 (1), 3.2 (1)
> **Tools:** powershell (2)
> **Speakers:** - [instructor] (1)

#### Improve security reporting using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=0)** - [Instructor] As a cybersecurity analyst, you're expected to create a variety of documents to support the organization.
>
> **[0:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=6)** But let's be honest, writing reports isn't always the most exciting part of the job.
>
> **[0:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=11)** The good news?
>
> **[0:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=12)** AI can help.
>
> **[0:13](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=13)** Let's look at some ways AI can make cybersecurity documentation easier and more effective.
>
> **[0:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=18)** It can be especially helpful when it comes to incident response and post-incident review documentation.
>
> **[0:24](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=24)** I've seen brilliant analysts dig through logs, find evidence and document technical details, but where many struggle is translating those findings into something business leaders can understand and act on.
>
> **[0:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=35)** For example, my team once briefed a customer on a hunt.
>
> **[0:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=39)** They had found unsanctioned remote desktop tools like AnyDesk being used in the network.
>
> **[0:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=44)** But instead of being concerned, the customer asked them to hunt for a specific threat actor, Scattered Spider.
>
> **[0:50](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=50)** My team was frustrated.
>
> **[0:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=51)** They knew Scattered Spider frequently uses these exact remote desktop tools.
>
> **[0:56](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=56)** The problem?
>
> **[0:57](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=57)** They presented the facts but didn't connect the dots for the customer.
>
> **[1:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=61)** The key isn't just stating the technical details, it's explaining the risk in a way that resonates with the target audience.
>
> **[1:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=68)** AI can help bridge this gap by rewriting findings in a way that's clear and more impactful for different audiences.
>
> **[1:14](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=74)** Another way AI can help is with security policies and procedures.
>
> **[1:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=78)** Before AI chatbots, companies paid expensive resources or used generic templates to draft policies, often ended up with a Frankenstein document that didn't fully meet their needs.
>
> **[1:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=89)** As a former virtual CISO, I spent hours customizing security policies.
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=93)** Now, with AI and some smart prompt engineering, I can get to the final version much faster.
>
> **[1:39](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=99)** For example, I could ask an AI chatbot generate an acceptable use policy for a healthcare company in California that aligns with ISO 27001 and HIPPA.
>
> **[1:49](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=109)** AI provides a strong starting point, which I can then tailor to fit the organization's needs.
>
> **[1:54](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=114)** Check out the course handout for a more detailed example prompt.
>
> **[1:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=118)** AI could also help with compliance and regulatory documentation.
>
> **[2:03](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=123)** In my experience, up to 40% of my time was spent documenting findings and drafting customized recommendations.
>
> **[2:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=129)** Identifying a security gap is easy.
>
> **[2:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=131)** What takes time is researching best practices, understanding the impact, and writing tailored recommendations, especially if I'm not familiar with particular technology.
>
> **[2:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=141)** With AI, I can speed up the process.
>
> **[2:23](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=143)** I can tell it act as an internal auditor following XYZ framework.
>
> **[2:27](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=147)** Here's the gap I found.
>
> **[2:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=149)** Write a detailed recommendation.
>
> **[2:31](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=151)** This approach saves time while ensuring recommendations are thorough and relevant.
>
> **[2:36](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=156)** Now, let's look at executive and board level reports.
>
> **[2:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=160)** One of the biggest challenges in cybersecurity, translating technical jargon into business language.
>
> **[2:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=165)** AI can act as a translator, making reports more accessible to executives.
>
> **[2:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=171)** Here's an example.
>
> **[2:53](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=173)** We detected multiple SPF/DKIM misalignments and inbound email systems from a suspicious ASN correlating with recent IOC activity from a known APT group.
>
> **[3:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=182)** SIEM logs indicate failed authentication attempts against O365, and we applied YARA rules to analyze payload behavior.
>
> **[3:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=189)** That's a lot to digest.
>
> **[3:11](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=191)** I fed this update into ChatGPT and asked it to rewrite it for executives.
>
> **[3:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=195)** Here's what it gave me.
>
> **[3:17](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=197)** Our team identified and mitigated a targeted phishing attack, attempting to compromise employee's credentials.
>
> **[3:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=202)** No sensitive data was accessed, and we're enhancing email security and employee training to reduce risk.
>
> **[3:28](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=208)** Much clearer, right?
>
> **[3:30](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=210)** AI is changing how we approach cybersecurity documentation, making it faster, clearer, and more tailored to different audiences.
>
> **[3:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=217)** Try experimenting with AI for your next report and see how much time you save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (13), [[Cybersecurity]] (4), [[Security]] (4), business (2), [[Incident Response]] (1)
> **Env Vars:** ciso (1), iso (1), hippa (1), xyz (1), spf (1)
> **CLI Commands:** make (1), find (1), apt (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### AI-driven threat intelligence
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=0)** - [Narrator] Threat intelligence is useless unless you use it.
>
> **[0:04](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=4)** Last year I set a goal, read more business books to become a better cybersecurity leader.
>
> **[0:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=9)** So I bought the Harvard Business Review collection, 10 books covering topics like communication strategy, emotional intelligence, and conflict resolution.
>
> **[0:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=18)** And it sat next to my bed for a year, still wrapped in plastic.
>
> **[0:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=22)** Throughout that year, I faced real situations where those books would've helped managing conflict, leading a growing team, and making tough decisions.
>
> **[0:31](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=31)** But I couldn't apply any of that knowledge because I never read them.
>
> **[0:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=34)** Threat intelligence works the same way.
>
> **[0:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=37)** Subscribing to a threat intel service is useless if you don't read it, understand it, apply it, and take action.
>
> **[0:44](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=44)** So how do you know if threat intel is worth using?
>
> **[0:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=47)** Just remember CART.
>
> **[0:49](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=49)** C stands for complete.
>
> **[0:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=51)** It should provide enough detail to inform your decisions.
>
> **[0:54](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=54)** And A stands for accurate.
>
> **[0:56](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=56)** Bad intel leads to bad decisions.
>
> **[0:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=58)** It should come from trusted vetted sources.
>
> **[1:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=61)** R stands for relevant.
>
> **[1:02](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=62)** The threat must matter to your organization.
>
> **[1:04](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=64)** A campaign targeting ATMs isn't relevant to a hospital.
>
> **[1:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=68)** And T stands for timely.
>
> **[1:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=70)** It needs to arrive in time to make a difference.
>
> **[1:13](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=73)** If your in intelligence meets all four, great.
>
> **[1:16](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=76)** If not, it could be wasting your time or worse, leading you in the wrong direction.
>
> **[1:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=81)** So where does AI fit in?
>
> **[1:24](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=84)** I never read those 10 Harvard Business Review books, but what if I had someone who did someone I could quickly ask for insights whenever I needed them?
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=93)** That's how AI enhances threat intelligence.
>
> **[1:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=95)** Instead of manually sifting through thousands of pages of intel reports, AI helps us extract complete, accurate, relevant, and timely information instantly.
>
> **[1:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=105)** Traditionally, Cyber Threat Intelligence or CTI relies on manual methods, analyzing data from threat feeds, reports, and raw indicators, but AI changes the game.
>
> **[1:56](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=116)** One of my favorite ways to process large volumes of threat intel is by feeding trusted sources into Notebook LM, a research and note-taking tool from Google Labs that uses AI, specifically Google Gemini, to let you understand complex topics, ask questions and get instant insights from your sources.
>
> **[2:14](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=134)** Google calls Notebook LM a virtual research assistant.
>
> **[2:18](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=138)** Try it for yourself.
>
> **[2:19](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=139)** Add a few public threat Intel sources to Notebook LM.
>
> **[2:23](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=143)** Then ask it to summarize the threats discussed in your sources.
>
> **[2:26](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=146)** Extract IOCs from the sources and list out the TTPs from the sources.
>
> **[2:31](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=151)** Remember, threat intelligence is only valuable if you use it.
>
> **[2:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=155)** AI can help you process and apply intel faster, but it's up to you to take action.
>
> **[2:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=160)** So how will you use AI to strengthen your collection, analysis and interpretation of data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (7), business (3), data (2), [[Google]] (2), [[Cybersecurity]] (1)
> **Definitions:** stands for (4)
> **Env Vars:** cart (1), cti (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### LLM-driven honeypots
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=0)** - [Instructor] Honeypots probably aren't something you think about every day, and that's okay.
>
> **[0:05](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=5)** I'm going to show you a fascinating way AI could take honeypots to the next level.
>
> **[0:09](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=9)** This is a perfect example of how creative you can get with AI as a cybersecurity analyst.
>
> **[0:15](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=15)** Honeypots serve two key purposes, collecting threat intelligence and high-fidelity threat detection.
>
> **[0:22](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=22)** For threat intelligence, organizations set up fake systems with known vulnerabilities and expose them to the internet.
>
> **[0:29](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=29)** When attackers exploit them, security teams collect data on the tools, commands, and behaviors used.
>
> **[0:35](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=35)** These breadcrumbs help security teams prioritize defenses.
>
> **[0:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=40)** For threat detection, honeypots are deployed inside networks or as honey tokens, little traps that trigger alerts when attackers breach the system.
>
> **[0:48](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=48)** The problem with traditional honeypots is that most of them don't fool attackers for long.
>
> **[0:53](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=53)** They either look too perfect or remain static, unlike real systems.
>
> **[0:57](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=57)** That's where AI can make a difference.
>
> **[0:59](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=59)** Historically, we had low-interaction honeypots, which are basic, easy-to-identify systems, and high-interaction honeypots, more realistic, but harder to maintain.
>
> **[1:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=70)** But with AI, honeypots are evolving.
>
> **[1:12](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=72)** Instead of just mimicking a system, they can now engage with hackers dynamically, reacting, adapting, and even improvising responses.
>
> **[1:21](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=81)** AI-powered honeypots respond to a wider range of commands, are harder to fingerprint, and keep attackers engaged longer.
>
> **[1:30](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=90)** But how do we know AI-powered honeypots actually work?
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=93)** Meet shelLM, an LLM-driven, shell-based, honeypot designed to look and feel like a real Linux system.
>
> **[1:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=100)** Researchers tested it by having 12 cybersecurity experts interact with shelLM and try to detect if it was fake.
>
> **[1:47](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=107)** Think of it like a turning test for hackers.
>
> **[1:49](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=109)** But instead of making AI sound human, the goal was to make it behave like a real server.
>
> **[1:55](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=115)** The results, shelLM fooled them 90% of the time.
>
> **[1:58](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=118)** Experts classified its responses as real Linux shell outputs in 9 out of 10 cases.
>
> **[2:04](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=124)** This is just the beginning of how AI can revolutionize cybersecurity.
>
> **[2:08](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=128)** Dynamic, AI-driven honeypots make deception smarter and cyber defenses stronger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (9), [[Cybersecurity]] (3), [[Security]] (2), teams (2), [[Linux]] (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** shellm (3)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Helpful Resources

[↑ Back to Table of Contents](#table-of-contents)

#### The future of cybersecurity with AI
> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=1)** - Congratulations, you've reached the end of the course, but now you might be curious about what the future holds, what's coming down the pipeline in the next five to 10 years.
>
> **[0:10](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=10)** The future is always tough, but there are definitely some trends that I think will have major impact on cybersecurity.
>
> **[0:16](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=16)** One thing I'm already starting to see is the rise of AI powered security operation centers.
>
> **[0:20](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=20)** AI is doing the heavy lifting of collecting and analyzing threat intel, sifting through mountains of data, correlating events, and identifying patterns.
>
> **[0:28](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=28)** This frees up the human analysts to focus on critical incidents, the ones that require human intuition and decision making.
>
> **[0:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=34)** By completing this course, you're ready to be part of the future as an AI-driven cybersecurity analyst.
>
> **[0:40](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=40)** Threats in AI are moving quickly, so stay ahead by connecting with me on LinkedIn.
>
> **[0:45](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=45)** Check out my other courses on threat hunting and cybersecurity, and if you have any questions, check out the Q&A section below.
>
> **[0:51](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=51)** Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), [[Cybersecurity]] (3), next (1), [[Security]] (1), data (1)
> **Cross-References:** in the next (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Mike Wylie]]

## Resources

- Exercise files available

## Skills Covered

- Generative AI
- Information Security Analysis
- Artificial Intelligence (AI)
- Cybersecurity Tools

## Path Context

### In [[Leverage AI as a Cybersecurity Analyst]]
← [[Understanding Artificial Intelligence Concepts And Terminology With Iso Iec 22989]] | **2 of 7** | [[The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview]] →

## Appears In

- [[Leverage AI as a Cybersecurity Analyst]]

## Related Courses

_Courses sharing skills:_

- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)